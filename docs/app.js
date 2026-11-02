/* KDV Çapraz Kontrol — sayfa davranışı
   GSAP + ScrollTrigger: hareket katmanı · three.js: çapraz kontrol sahnesi (scene.js)
   prefers-reduced-motion: içerik hep görünür, yalnız yolculuk kalkar. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- girişler: bölüm parçaları sırayla yükselir ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (calm || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var group = el.parentElement ? el.parentElement.querySelectorAll('[data-reveal]') : [el];
        var idx = Array.prototype.indexOf.call(group, el);
        var delay = Math.max(0, idx) * 70 + 'ms';
        el.style.transitionDelay = delay;
        var kids = el.querySelectorAll('img, .ui');
        for (var k = 0; k < kids.length; k++) kids[k].style.transitionDelay = delay;
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- çıktılar: isim seçince sayfa değişir (200ms) ---------- */
  var names = Array.prototype.slice.call(document.querySelectorAll('.showcase__names button'));
  var panes = Array.prototype.slice.call(document.querySelectorAll('.showcase__pane'));
  names.forEach(function (btn) {
    btn.addEventListener('click', function () {
      names.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      panes.forEach(function (p) {
        p.classList.toggle('is-on', p.id === btn.getAttribute('data-target'));
      });
    });
  });

  /* ---------- iletişim alanı: e-posta taslağı açar, sunucu yok ---------- */
  var form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      var body = input && input.value ? input.value.trim() : '';
      var subject = form.getAttribute('data-subject') || '';
      var href = 'mailto:ardaekiz72@gmail.com';
      href += '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body + '\n\n(' + (input ? input.name : '') + ')');
      window.location.href = href;
    });
  }

  /* ---------- hareket katmanı (GSAP) ---------- */
  if (calm || typeof window.gsap === 'undefined') return;
  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  if (ST) gsap.registerPlugin(ST);

  function rise(trigger, items, vars) {
    if (!ST || !items.length) return;
    vars = vars || {};
    gsap.from(items, {
      opacity: 0,
      y: vars.y === undefined ? 18 : vars.y,
      duration: vars.duration || 0.55,
      ease: 'power2.out',
      stagger: vars.stagger === undefined ? 0.07 : vars.stagger,
      scrollTrigger: { trigger: trigger, start: vars.start || 'top 82%', once: true }
    });
  }

  /* 1 · imza: hero fragmanı kaydırmayla sürüklenir (scrub) */
  var heroFrag = document.querySelector('.hero__fragment');
  if (heroFrag && ST) {
    gsap.to(heroFrag, {
      y: -46,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 }
    });
  }

  /* 2 · hero tablo satırları okuma sırasıyla yerleşir */
  gsap.from('.hero__fragment tbody tr', {
    opacity: 0, x: -14, duration: 0.5, ease: 'power2.out', stagger: 0.06, delay: 0.35
  });

  /* 3 · karşılaştırma tablosu satırları */
  rise('.compare__rows', gsap.utils.toArray('.compare__row'), { y: 18, duration: 0.55, stagger: 0.06, start: 'top 80%' });

  /* 4 · kanıt satırı ögeleri */
  rise('.proof', gsap.utils.toArray('.proof li'), { y: 12, duration: 0.5, stagger: 0.07, start: 'top 85%' });

  /* 5 · lisans kartları yan yana oturur */
  rise('.plans__grid', gsap.utils.toArray('.plan'), { y: 26, duration: 0.7, stagger: 0.12 });

  /* 6 · SSS satırları sırayla açılır */
  rise('.faq__list', gsap.utils.toArray('.faq__list details'), { y: 16, duration: 0.5, stagger: 0.05 });

  /* 7 · iletişim satırları */
  rise('.contact__rows', gsap.utils.toArray('.contact__rows div'), { y: 12, duration: 0.45, stagger: 0.08 });

  /* 8 · kapanış bandı: başlık ve yan sütun birlikte yükselir */
  rise('.cta', gsap.utils.toArray('.cta h2, .cta__side > *'), { y: 22, duration: 0.65, stagger: 0.09 });

  /* 9 · çalışma adımları: isim seçiciler */
  rise('.showcase__grid', gsap.utils.toArray('.showcase__names button'), { y: 14, duration: 0.5, stagger: 0.06 });

  /* 10 · footer satırı */
  if (ST) {
    gsap.from('.foot > *', {
      opacity: 0, y: 12, duration: 0.5, ease: 'power2.out', stagger: 0.07,
      scrollTrigger: { trigger: '.foot', start: 'top 96%', once: true }
    });
  }
})();