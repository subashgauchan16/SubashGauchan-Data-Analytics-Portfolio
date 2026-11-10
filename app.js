/* ================================================================
   app.js — Shared 3D Background & Animation Module
   Dark Gold Theme • Three.js floating geometry + GSAP entrances
   ================================================================
   Loads on every page that includes <script type="module" src="app.js"></script>
   Features:
     - 3D interactive gold geometry background (Three.js via CDN)
     - Floating particle field with gold accents
     - GSAP ScrollTrigger-based entrance animations
     - Intersection Observer fallback when GSAP unavailable
     - Respects prefers-reduced-motion
   ================================================================ */

// ── Dynamic import of Three.js from CDN ──────────────────────
// Using CDN to avoid local build step; cached by browser after first load.
let THREE, OrbitControls;
const useCDN = true; // CDN is always available for this browser-based portfolio

async function loadThree() {
  if (useCDN) {
    THREE = await import('https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.module.js');
    const oc = await import('https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/controls/OrbitControls.js');
    OrbitControls = oc.OrbitControls;
  }
  return THREE !== undefined;
}

// ── 3D Scene Controller ──────────────────────────────────────
class GoldScene3D {
  constructor(container, opts) {
    this.container = container;
    this.opts = Object.assign({
      particleCount: 120,
      geomCount: 8,
      goldTone: 0xB69437,
      deepTone: 0x252723,
      interactive: true,
    }, opts);
    this.objects = [];
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.clock = new THREE.Clock();
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.opts.deepTone);

    // Camera
    const { width, height } = this.container.getBoundingClientRect();
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    this.camera.position.set(0, 0, 40);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    this.renderer.setSize(width, height);
    this.renderer.setClearAlpha(0);
    this.container.appendChild(this.renderer.domElement);

    // Lighting — gold-tinted
    const hemi = new THREE.HemisphereLight(
      new THREE.Color(this.opts.goldTone).getStyle() === '#b69437' ? 0xB69437 : 0xffffff,
      0x252723, 0.8
    );
    hemi.position.set(0, 20, 0);
    this.scene.add(hemi);

    const dirLight = new THREE.DirectionalLight(0xB98500, 0.8);
    dirLight.position.set(-10, 20, 10);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0xB69437, 0.4);
    dirLight2.position.set(10, -10, -10);
    this.scene.add(dirLight2);

    // Ambient
    this.scene.add(new THREE.AmbientLight(0x404030, 0.6));

    // Particles
    this._createParticles();

    // Geometry objects
    this._createGeometry();

    // Controls
    if (this.opts.interactive) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.03;
      this.controls.rotateSpeed = 0.5;
      this.controls.minDistance = 10;
      this.controls.maxDistance = 80;
    }

    // Resize
    window.addEventListener('resize', () => this._onResize());

    // Mouse move parallax
    if (this.opts.interactive) {
      window.addEventListener('mousemove', (e) => this._onMouseMove(e));
    }

    this._animate();
  }

  _createParticles() {
    const geometry = new THREE.SphereGeometry(0.15, 6, 6);
    const count = this.opts.particleCount;
    this.particleGroup = new THREE.Group();

    for (let i = 0; i < count; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.7 ? this.opts.goldTone : 0xE8CE76,
        transparent: true,
        opacity: Math.random() * 0.5 + 0.2,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );
      mesh.userData = {
        speed: Math.random() * 0.002 + 0.0005,
        axis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
      };
      this.particleGroup.add(mesh);
    }
    this.scene.add(this.particleGroup);
  }

  _createGeometry() {
    const geoCount = this.opts.geomCount;
    this.geomGroup = new THREE.Group();

    // Shape geometries with gold material
    const shapes = [
      { geo: new THREE.IcosahedronGeometry(1.2, 1), type: 'icosahedron' },
      { geo: new THREE.TorusGeometry(1.5, 0.5, 16, 100), type: 'torus' },
      { geo: new THREE.OctahedronGeometry(1.5, 0), type: 'octahedron' },
      { geo: new THREE.TetrahedronGeometry(1.8, 0), type: 'tetrahedron' },
      { geo: new THREE.DodecahedronGeometry(1, 0), type: 'dodec' },
    ];

    const edgesGeo = new THREE.EdgesGeometry(shapes[0].geo);

    for (let i = 0; i < geoCount; i++) {
      const shape = shapes[i % shapes.length];
      const mat = new THREE.MeshStandardMaterial({
        color: this.opts.goldTone,
        metalness: 0.8,
        roughness: 0.18,
        transparent: true,
        opacity: 0.85,
        emissive: 0xE8CE76,
        emissiveIntensity: 0.15,
      });

      const mesh = new THREE.Mesh(shape.geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      mesh.userData = {
        rx: Math.random() * 0.3 + 0.1,
        ry: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.3 + 0.2,
        phase: Math.random() * Math.PI * 2,
      };
      this.geomGroup.add(mesh);
      this.objects.push(mesh);
    }
    this.scene.add(this.geomGroup);
  }

  _onResize() {
    const { width, height } = this.container.getBoundingClientRect();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  _onMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  _animate() {
    if (!this.renderer) return;
    requestAnimationFrame(() => this._animate());

    const delta = this.clock.getDelta();
    const elapsed = this.clock.elapsedTime;

    // Animate particles
    if (this.particleGroup) {
      this.particleGroup.children.forEach((m) => {
        m.rotation.x += m.userData.speed;
        m.rotation.y += m.userData.speed;
      });
    }

    // Animate geometry
    if (this.geomGroup) {
      this.geomGroup.children.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rx * delta;
        mesh.rotation.y += mesh.userData.ry * delta;
        mesh.position.y += Math.sin(elapsed * mesh.userData.speed + mesh.userData.phase) * 0.01;
      });
      this.geomGroup.rotation.y = this.mouse.x * 0.15;
      this.geomGroup.rotation.x = this.mouse.y * 0.1;
    }

    if (this.controls) this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.renderer) {
      this.renderer.domElement.remove();
      this.renderer.dispose();
    }
    this.scene = null;
    this.camera = null;
  }
}

// ── Animation Controller ─────────────────────────────────────
class AnimationController {
  constructor() {
    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.observer = null;
    this.gsap = null;
  }

  async init() {
    if (this.prefersReduced) {
      // Skip all animations when reduced motion is preferred
      this._revealAll();
      return;
    }

    // Try loading GSAP
    try {
      const gsapMod = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js');
      this.gsap = gsapMod.gsap || gsapMod.default || gsapMod;
    } catch (e) {
      // Fallback to Intersection Observer
    }

    if (this.gsap && window.ScrollTrigger) {
      this._initGSAP();
    } else {
      this._initIntersectionObserver();
    }
  }

  _initGSAP() {
    const { gsap, ScrollTrigger } = this.gsap;
    gsap.registerPlugin(ScrollTrigger);

    // Staggered entrance for elements with .animate-up
    gsap.utils.toArray('.animate-up').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'bottom 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Fade-in for .animate-fade
    gsap.utils.toArray('.animate-fade').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'bottom 88%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Parallax backgrounds
    gsap.utils.toArray('.parallax').forEach((el) => {
      gsap.to(el, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          scrub: true,
        },
      });
    });
  }

  _initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-up, .animate-fade').forEach((el) => {
      this.observer.observe(el);
    });
  }

  _revealAll() {
    // When reduced motion, just show everything
    document.querySelectorAll('.animate-up, .animate-fade').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }
}

// ── Navigation Controller ─────────────────────────────────────
class NavController {
  init() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const headerOffset = 92;
          const offset = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      });
    });

    // Close mobile menu on link click
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNav = document.getElementById('primary-nav');
    if (menuToggle && primaryNav) {
      primaryNav.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
          menuToggle.setAttribute('aria-expanded', 'false');
          primaryNav.classList.remove('is-open');
          menuToggle.querySelector('.sr-only').textContent = 'Open navigation';
        }
      });
    }

    // Add year to elements with data-year
    document.querySelectorAll('[data-year]').forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }
}

// ── Bootstrap ──────────────────────────────────────────────────
async function initPortfolio() {
  // Create 3D scene container if it doesn't exist
  let sceneContainer = document.querySelector('.scene-container');
  if (!sceneContainer) {
    sceneContainer = document.createElement('div');
    sceneContainer.className = 'scene-container';
    document.body.appendChild(sceneContainer);
  }

  // Initialize animations
  const animCtrl = new AnimationController();
  await animCtrl.init();

  // Navigation (year + menu) is handled by main.js on legacy pages;
  // app.js only manages 3D + animation. No duplicate nav binding.

  // Check reduced motion before starting 3D
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const threeOK = await loadThree();
    if (threeOK && THREE && sceneContainer) {
      // Small delay to let page content render first
      setTimeout(() => {
        try {
          const scene = new GoldScene3D(sceneContainer, {
            particleCount: 100,
            geomCount: 6,
            interactive: true,
          });
          scene.init();
          window._goldScene = scene;
        } catch (e) {
          console.warn('3D scene initialization skipped:', e);
        }
      }, 300);
    }
  }

  // Add staggered animation to grid containers
  document.querySelectorAll('.stagger-children').forEach((container) => {
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (!child.style.animationDelay) {
        child.style.animationDelay = `${i * 0.08}s`;
      }
      child.classList.add('animate-fade-up');
    }
  });
}

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}

// Expose for debugging
window.GoldScene3D = GoldScene3D;
window.AnimationController = AnimationController;
