#!/usr/bin/env python3
"""Static checks for the published site folder. Standard library only.

Usage: python3 tools/check_site.py site

Fails (exit 1) when:
  - a local link, stylesheet, script, image or model does not resolve to a file in the folder
  - an in-page or cross-page #anchor does not exist
  - a root-absolute link is used outside 404.html (the site is served under /SubashGauchan-Data-Analytics-Portfolio/)
  - a non-public file type (workbooks, data, notes, source code) is inside the folder
  - a phone number or tel: link appears in page text
  - an email or LinkedIn link differs from the confirmed contact details
  - a page lacks a <title> or a favicon link
"""
import os, re, sys
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote

ROOT = sys.argv[1] if len(sys.argv) > 1 else 'site'
PREFIX = '/SubashGauchan-Data-Analytics-Portfolio/'  # GitHub project-site path; only 404.html may use it
EMAIL = 'thakalidenil@gmail.com'
LINKEDIN = 'https://www.linkedin.com/in/subash-gauchan16/'
FORBIDDEN_EXT = {'.xlsx', '.xlsm', '.xls', '.csv', '.md', '.py', '.ipynb', '.docx', '.pptx', '.zip', '.yml', '.yaml'}
PHONE = re.compile(r'tel:|\+44[\s\d()]{9,}|\b07\d{3}\s?\d{3}\s?\d{3}\b')
JS_ASSET = re.compile(r"""['"]([^'"\s]+?\.(?:glb|gltf|json|png|jpe?g|svg|webp))['"]""")


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs, self.ids, self.text, self.scripts = [], set(), [], []
        self.title = self.favicon = False
        self._script = self._title = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids.add(a['id'])
        if tag == 'a' and a.get('name'):
            self.ids.add(a['name'])
        for key in ('href', 'src', 'poster', 'data'):
            if a.get(key):
                self.refs.append((tag, a[key].strip()))
        if tag == 'link' and 'icon' in (a.get('rel') or ''):
            self.favicon = True
        if tag == 'script':
            self._script = not a.get('src')
        if tag == 'title':
            self._title = True

    def handle_endtag(self, tag):
        if tag == 'script':
            self._script = False
        if tag == 'title':
            self._title = False

    def handle_data(self, d):
        if self._script:
            self.scripts.append(d)
        else:
            self.text.append(d)
            if self._title and d.strip():
                self.title = True


def resolve(page_rel, url):
    path = unquote(urlparse(url).path)
    if path.startswith('/'):
        if not path.startswith(PREFIX):
            return None
        target = path[len(PREFIX):]
    else:
        target = os.path.normpath(os.path.join(os.path.dirname(page_rel), path)) if path else page_rel
    target = target.replace('\\', '/')
    if target in ('.', ''):
        target = ''
    full = os.path.join(ROOT, target)
    if os.path.isdir(full):
        target = (target.rstrip('/') + '/index.html').lstrip('/')
    return target


def main():
    errors, files = [], []
    for dp, dn, fn in os.walk(ROOT):
        for f in fn:
            files.append(os.path.relpath(os.path.join(dp, f), ROOT).replace('\\', '/'))
    fileset = set(files)
    for f in files:
        if os.path.splitext(f)[1].lower() in FORBIDDEN_EXT:
            errors.append(f'non-public file type in published folder: {f}')

    pages = {}
    for f in files:
        if f.endswith('.html'):
            # Google Search Console verification files intentionally contain a single token line,
            # not a normal web page with a title or favicon. Keep the file exact for verification.
            if re.fullmatch(r'google[0-9a-f]+\.html', os.path.basename(f)):
                continue
            p = Page()
            p.feed(open(os.path.join(ROOT, f), encoding='utf-8').read())
            pages[f] = p

    checked = 0
    for f, p in pages.items():
        redirect = 'http-equiv="refresh"' in open(os.path.join(ROOT, f), encoding='utf-8').read()
        if not p.title:
            errors.append(f'{f}: missing <title>')
        if not p.favicon and not redirect:
            errors.append(f'{f}: missing favicon link')
        text = ' '.join(p.text)
        if PHONE.search(text) or any(u.startswith('tel:') for _, u in p.refs):
            errors.append(f'{f}: phone number or tel: link found')
        for _, u in p.refs:
            if u.startswith('mailto:') and u[7:].split('?')[0] != EMAIL:
                errors.append(f'{f}: unexpected email {u}')
            if 'linkedin.com/in/' in u and u.rstrip('/') + '/' != LINKEDIN:
                errors.append(f'{f}: unexpected LinkedIn URL {u}')
        refs = list(p.refs) + [('script-string', m) for s in p.scripts for m in JS_ASSET.findall(s)
                               if not m.startswith(('http', '//', 'data:'))]
        for tag, u in refs:
            if re.match(r'^(?:[a-z][a-z0-9+.-]*:|//)', u, re.I) or u == '':
                continue
            checked += 1
            if u.startswith('/') and f != '404.html':
                errors.append(f'{f}: root-absolute link {u} (breaks under {PREFIX})')
                continue
            if u.startswith('#'):
                frag = u[1:]
                if frag and frag not in p.ids:
                    errors.append(f'{f}: missing anchor {u}')
                continue
            target = resolve(f, u)
            if target is None or target not in fileset:
                errors.append(f'{f}: {tag} -> {u} does not resolve (looked for {target})')
                continue
            frag = urlparse(u).fragment
            if frag and target in pages and frag not in pages[target].ids:
                errors.append(f'{f}: {u} points to a missing anchor in {target}')

    print(f'{len(pages)} pages, {len(files)} files, {checked} local references checked')
    for e in errors:
        print('FAIL', e)
    print('PASS' if not errors else f'{len(errors)} problem(s)')
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
