/* Çapraz kontrol sahnesi — three.js (docs/vendor/three.min.js, yerel paket)
   İki kaynak (e-Fatura satırları, muavin satırları) kaydırma ilerledikçe
   karşı tarafa geçer, eşleşenler birleşir, uyuşmayanlar açıkta kalır ve işaretlenir.
   Durum biçimle okunur: birleşmiş çift = eşleşti; boşluklu çift = fark; hayalet satır = eksik. */
(function () {
  'use strict';

  // Sahne durumu: hareket açıksa canlı, sakinlikte son kare (inspect kapıları bu sınıfı okur)
  var sceneSection = document.querySelector('section.scene, .scene[data-scene]');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (sceneSection) sceneSection.classList.add(calm ? 'is-rest' : 'is-live');

  var mount = document.getElementById('cross-scene');
  if (!mount) return;
  var steps = Array.prototype.slice.call(document.querySelectorAll('.scene__step'));

  function setSteps(p) {
    if (calm) {
      steps.forEach(function (s) { s.classList.add('is-active'); });
      return;
    }
    var idx = p < 0.34 ? 0 : (p < 0.68 ? 1 : 2);
    steps.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
  }

  import('./vendor/three.min.js').then(function (THREE) {
    var width = mount.clientWidth || 640;
    var height = mount.clientHeight || 480;

    var renderer = new THREE.WebGLRenderer({ canvas: mount, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);

    var scene = new THREE.Scene();
    var span = 9;
    var aspect = width / height;
    var camera = new THREE.OrthographicCamera(-span * aspect, span * aspect, span, -span, 0.1, 100);
    camera.position.set(0, 0, 20);

    var C = {
      paper: 0xffffff,
      paperSoft: 0xdfe9ff,
      ink: 0x14161a,
      accent: 0x2563eb
    };

    function slab(w, h, color, opacity) {
      var mat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: opacity !== undefined && opacity < 1,
        opacity: opacity === undefined ? 1 : opacity
      });
      return new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.12), mat);
    }

    var ROWS = 7;
    var GAP = 1.15;
    var group = new THREE.Group();
    scene.add(group);

    /* satır çiftleri: [eşleşti mi, hayalet mi] */
    var kinds = ['match', 'flag', 'match', 'match', 'ghost', 'flag', 'match'];
    var pairs = [];

    for (var i = 0; i < ROWS; i++) {
      var y = (ROWS - 1) / 2 * GAP - i * GAP;
      var kind = kinds[i];
      var left = slab(3.1, 0.62, C.paper);
      var right = slab(3.1, 0.62, kind === 'ghost' ? C.paperSoft : C.paperSoft);
      left.position.set(-12, y, 0);
      right.position.set(12, y, 0);
      group.add(left);
      group.add(right);

      var pair = { left: left, right: right, y: y, kind: kind, flag: null };
      if (kind === 'flag') {
        var flag = slab(0.5, 0.5, C.ink);
        flag.position.set(0, y + 1.05, 0.2);
        flag.scale.set(0, 0, 0);
        group.add(flag);
        pair.flag = flag;
      }
      if (kind === 'ghost') {
        right.visible = false;
      }
      pairs.push(pair);
    }

    /* zemin oku: iki kaynağın yönü (biçimle anlatım) */
    var arrowL = slab(2.4, 0.2, C.paperSoft, 0.55);
    arrowL.position.set(-6.2, -ROWS / 2 * GAP - 1.15, -0.5);
    var arrowR = slab(2.4, 0.2, C.paperSoft, 0.55);
    arrowR.position.set(6.2, -ROWS / 2 * GAP - 1.15, -0.5);
    group.add(arrowL);
    group.add(arrowR);

    function smooth(t) { return t * t * (3 - 2 * t); }
    function clamp01(v) { return Math.max(0, Math.min(1, v)); }

    function frame(p) {
      p = clamp01(p);
      var enter = smooth(clamp01(p / 0.34));
      var pairUp = smooth(clamp01((p - 0.34) / 0.34));
      var mark = smooth(clamp01((p - 0.68) / 0.32));

      for (var i = 0; i < pairs.length; i++) {
        var pr = pairs[i];
        var targetL = pr.kind === 'match' ? -0.72 : -1.35;
        var targetR = pr.kind === 'match' ? 0.72 : 1.35;
        if (pr.kind === 'ghost') targetL = -1.35;

        var lx = -12 + (targetL + 12) * enter;
        var rx = 12 + (targetR - 12) * enter;
        if (pairUp > 0 && pr.kind === 'match') {
          lx += (0 - lx) * pairUp * 0.42;
          rx += (0 - rx) * pairUp * 0.42;
        }
        pr.left.position.x = lx;
        pr.right.position.x = rx;

        if (pr.kind === 'ghost') {
          pr.left.material.opacity = 0.35 + 0.25 * enter;
          pr.left.material.transparent = true;
        }
        if (pr.flag) {
          var s = mark;
          pr.flag.scale.set(s, s, s);
          pr.flag.position.y = pr.y + 1.05 + mark * 0.28;
        }
        /* eşleşen çift hafifçe bütünleşir */
        if (pr.kind === 'match') {
          pr.left.scale.y = 1 + pairUp * 0.06;
          pr.right.scale.y = 1 + pairUp * 0.06;
        }
      }
      group.rotation.y = (p - 0.5) * 0.22;
      group.rotation.x = 0.06 - p * 0.1;
    }

    var progress = calm ? 1 : 0;
    frame(progress);
    renderer.render(scene, camera);

    function renderNow() {
      frame(progress);
      renderer.render(scene, camera);
    }

    if (window.gsap && window.ScrollTrigger && !calm) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.ScrollTrigger.create({
        trigger: '.scene',
        start: 'top 70%',
        end: 'bottom 55%',
        scrub: 0.5,
        onUpdate: function (self) {
          progress = self.progress;
          setSteps(progress);
          renderNow();
        }
      });
      setSteps(0);
    } else {
      progress = 1;
      setSteps(1);
      renderNow();
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var w = mount.clientWidth || 640;
        var h = mount.clientHeight || 480;
        var a = w / h;
        camera.left = -span * a;
        camera.right = span * a;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
        renderNow();
      }, 150);
    });
  }).catch(function () {
    /* WebGL yoksa adımlar yine okunur; sahne boş kalır */
    steps.forEach(function (s) { s.classList.add('is-active'); });
  });
})();