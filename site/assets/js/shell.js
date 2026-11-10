/* shell.js - behaviour shared by the case-study pages: V2 nav toggle, scroll progress, back-to-top, reveal, tooltip host. */
(function(){
  var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var tg=$('.menu-toggle'),nav=$('.nav-links');
  if(tg&&nav){
    var close=function(){nav.classList.remove('is-open');tg.setAttribute('aria-expanded','false');tg.textContent='☰'};
    tg.addEventListener('click',function(){var o=nav.classList.toggle('is-open');tg.setAttribute('aria-expanded',String(o));tg.textContent=o?'×':'☰'});
    $$('a',nav).forEach(function(a){a.addEventListener('click',close)});
    addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  }
  var prog=$('#progress'),top=$('#totop');
  function onScroll(){
    var h=document.documentElement.scrollHeight-innerHeight;
    if(prog)prog.style.width=(h>0?Math.min(100,scrollY/h*100):0)+'%';
    if(top)top.classList.toggle('show',scrollY>700);
  }
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(top)top.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
  var rv=$$('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    rv.forEach(function(n){io.observe(n)});
  }else rv.forEach(function(n){n.classList.add('in')});
  var yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();
})();
