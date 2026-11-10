import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

/* SG3D.mount(host, cfg)
   cfg: {glb, years[], a[], b[], aName, bName, fmt(v), refLabel, minV, maxV, hmax}
   Loads the supplied GLB, repairs the Blender-to-glTF axis offset (bars were centred on y with staggered z),
   swaps the flat emissive-only materials for lit ones, and falls back to procedural bars if the GLB cannot load.
   Returns {dispose, setVisible}. Throws if WebGL is unavailable (caller shows the 2D fallback). */
function mount(host, cfg){
  const canvas = document.createElement('canvas');
  host.insertBefore(canvas, host.firstChild);
  let renderer;
  try { renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true, powerPreference:'low-power'}); }
  catch(e){ canvas.remove(); throw e; }
  renderer.setPixelRatio(Math.min(devicePixelRatio||1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
  camera.position.set(0, 6.4, 11.5);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 1.5, 0);
  controls.enableDamping = true; controls.enablePan = false;
  controls.minDistance = 7; controls.maxDistance = 20; controls.maxPolarAngle = Math.PI/2 - .04;
  controls.autoRotate = !matchMedia('(prefers-reduced-motion: reduce)').matches; controls.autoRotateSpeed = .6;
  canvas.addEventListener('pointerdown', ()=>{ controls.autoRotate = false; });

  scene.add(new THREE.HemisphereLight(0xffffff, 0x112329, 1.1));
  const k = new THREE.DirectionalLight(0xffe4a0, 1.6); k.position.set(-6, 9, 6); scene.add(k);
  const f = new THREE.DirectionalLight(0x9ee4c5, .9); f.position.set(6, 5, -6); scene.add(f);

  /* own floor grid so the chart always has a base */
  const grid = new THREE.GridHelper(22, 22, 0x6b5a1a, 0x1b3a3d); grid.position.y = 0; scene.add(grid);

  const n = cfg.years.length, bars = [], labels = [];
  const PITCH = .9, OFF = .2;
  const cx = i => (i-(n-1)/2)*PITCH;
  const lit = (col, k) => new THREE.MeshStandardMaterial({color: col.clone().multiplyScalar(.55), emissive: col, emissiveIntensity: k, metalness:.25, roughness:.45});
  const GOLD = new THREE.Color(1, .9, .26), GREEN = new THREE.Color(.58, 1, .6);

  function addLabel(text, obj){
    const s = document.createElement('span'); s.className = 'yl'; s.textContent = text;
    s.style.cssText = 'position:absolute;left:0;top:0;font:400 11px "Roboto Mono",monospace;color:#b4c5bd;pointer-events:none;transform:translate(-50%,0);white-space:nowrap';
    host.appendChild(s); labels.push({s, obj});
  }

  function finish(){
    /* reference plane: translucent so bars stay visible */
    const rp = scene.getObjectByName('ReferencePlane');
    if (rp){ rp.visible = cfg.showRef !== false; rp.material = new THREE.MeshBasicMaterial({color: 0xe58f7e, transparent:true, opacity:.14, side:THREE.DoubleSide, depthWrite:false}); rp.scale.set(.62,1,.18); }
    const gf = scene.getObjectByName('GridFloor'); if (gf) gf.visible = false;
    const mk = scene.getObjectByName('MarkerCube');
    if (mk){ mk.material = new THREE.MeshBasicMaterial({color:0xffffff}); mk.userData.spin = true; mk.position.x = cx(cfg.years.indexOf('2020'));
      /* the dir-chart marker was exported above the frame (its height ignored the axis minimum): sit it on the 2020 bars */
      const tops = bars.filter(b=>b.userData.year==='2020').map(b=>b.position.y*2); mk.position.y = Math.max.apply(null,tops) + .35; }
    const step = host.clientWidth < 520 ? 2 : 1;
    cfg.years.forEach((y,i)=>{ const o = bars.find(b=>b.userData.year===y && b.userData.kind==='a'); if(o && i%step===0) addLabel(y, o); });
    resize(); loop();
  }

  function procedural(){
    const bw=.35;
    const span = cfg.maxV - cfg.minV;
    cfg.years.forEach((y,i)=>{
      [['a',cfg.a[i],GOLD,-1],['b',cfg.b[i],GREEN,1]].forEach(([kind,v,col,s])=>{
        const h = Math.max(.1,(v-cfg.minV)/span*cfg.hmax+.1);
        const m = new THREE.Mesh(new THREE.CylinderGeometry(bw*.5,bw*.5,h,16), lit(col,.5));
        m.position.set(cx(i)+s*OFF, h/2, 0);
        m.name = 'Bar_'+kind+'_'+y; m.userData={year:y,kind,i}; scene.add(m); bars.push(m);
      });
    });
    const ref = new THREE.Mesh(new THREE.PlaneGeometry(22,22), new THREE.MeshBasicMaterial({color:0xe58f7e,transparent:true,opacity:.14,side:THREE.DoubleSide,depthWrite:false}));
    ref.rotation.x = -Math.PI/2; ref.position.y = (cfg.refV-cfg.minV)/span*cfg.hmax; ref.scale.set(.62,.18,1); ref.name='ProcRef'; ref.visible = cfg.showRef !== false; scene.add(ref);
    const step2 = host.clientWidth < 520 ? 2 : 1;
    cfg.years.forEach((y,i)=>{ const o = bars.find(b=>b.userData.year===y && b.userData.kind==='a'); if(i%step2===0) addLabel(y,o); });
    host.dataset.source='procedural'; resize(); loop();
  }

  new GLTFLoader().load(cfg.glb, gltf=>{
    const root = gltf.scene; scene.add(root);
    root.traverse(o=>{
      if (!o.isMesh) return;
      if (o.name.startsWith('Bar_')){
        o.geometry.computeBoundingBox();
        const hh = o.geometry.boundingBox.max.y;       /* half-height of the cylinder */
        o.position.y = hh; o.position.z = 0;           /* stand on the floor, line up on one row */
        /* the Blender layout puts each Ridge bar on top of the next year's Baseline bar, so re-space the pairs */
        const kind = o.name.includes('Baseline') ? 'a' : 'b';
        o.material = lit(kind==='a'?GOLD:GREEN, .5);
        const year = o.name.split('_').pop();
        o.userData = {year, kind, i: cfg.years.indexOf(year)};
        o.position.x = cx(o.userData.i) + (kind==='a' ? -OFF : OFF);
        bars.push(o);
      }
    });
    host.dataset.source='glb';
    finish();
  }, undefined, ()=>{ procedural(); });

  /* hover tooltip */
  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(), tip = document.getElementById('tip');
  canvas.addEventListener('pointermove', e=>{
    const r = canvas.getBoundingClientRect();
    mouse.set(((e.clientX-r.left)/r.width)*2-1, -((e.clientY-r.top)/r.height)*2+1);
    ray.setFromCamera(mouse, camera);
    const hit = ray.intersectObjects(bars, false)[0];
    if (hit && tip){
      const u = hit.object.userData, v = u.kind==='a' ? cfg.a[u.i] : cfg.b[u.i];
      tip.innerHTML = '<b>'+u.year+'</b><br>'+(u.kind==='a'?cfg.aName:cfg.bName)+': '+cfg.fmt(v);
      tip.style.opacity = 1; tip.style.left = Math.min(e.clientX+14, innerWidth-236)+'px'; tip.style.top = (e.clientY+14)+'px';
      canvas.style.cursor = 'pointer';
    } else if (tip){ tip.style.opacity = 0; canvas.style.cursor = 'grab'; }
  });
  canvas.addEventListener('pointerleave', ()=>{ if (tip) tip.style.opacity = 0; });

  function resize(){
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w/h;
    camera.fov = camera.aspect < 1.1 ? 66 : 38;
    camera.updateProjectionMatrix();
  }
  const ro = 'ResizeObserver' in window ? new ResizeObserver(resize) : null; if (ro) ro.observe(host);

  let raf = 0, visible = true, disposed = false;
  const v = new THREE.Vector3();
  function loop(){
    if (disposed) return;
    raf = requestAnimationFrame(loop);
    if (!visible) return;
    controls.update();
    const mk = scene.getObjectByName('MarkerCube'); if (mk && mk.userData.spin) mk.rotation.y += .02;
    renderer.render(scene, camera);
    const w = host.clientWidth, h = host.clientHeight;
    labels.forEach(l=>{
      l.obj.getWorldPosition(v); v.y = 0; v.x += OFF; v.z += .55; v.project(camera);
      l.s.style.transform = 'translate('+((v.x*.5+.5)*w)+'px,'+((-v.y*.5+.5)*h)+'px) translate(-50%,0)';
      l.s.style.left = 0; l.s.style.top = 0;
    });
  }
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es=>{ visible = es[0].isIntersecting; }) : null; if (io) io.observe(host);

  return {
    dispose(){ disposed = true; cancelAnimationFrame(raf); if(ro) ro.disconnect(); if(io) io.disconnect(); labels.forEach(l=>l.s.remove()); renderer.dispose(); canvas.remove(); },
    source(){ return host.dataset.source || 'loading'; }
  };
}
window.SG3D = {mount};
