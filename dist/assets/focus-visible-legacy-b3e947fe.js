System.register([], function (e, t) {
  'use strict';
  return {
    execute: function () {
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      const t = 'ion-focused',
        s = [
          'Tab',
          'ArrowDown',
          'Space',
          'Escape',
          ' ',
          'Shift',
          'Enter',
          'ArrowLeft',
          'ArrowRight',
          'ArrowUp',
          'Home',
          'End',
        ];
      e('startFocusVisible', (e) => {
        let o = [],
          n = !0;
        const r = e ? e.shadowRoot : document,
          i = e || document.body,
          c = (e) => {
            o.forEach((e) => e.classList.remove(t)), e.forEach((e) => e.classList.add(t)), (o = e);
          },
          d = () => {
            (n = !1), c([]);
          },
          a = (e) => {
            (n = s.includes(e.key)), n || c([]);
          },
          u = (e) => {
            if (n && void 0 !== e.composedPath) {
              const t = e.composedPath().filter((e) => !!e.classList && e.classList.contains('ion-focusable'));
              c(t);
            }
          },
          v = () => {
            r.activeElement === i && c([]);
          };
        return (
          r.addEventListener('keydown', a),
          r.addEventListener('focusin', u),
          r.addEventListener('focusout', v),
          r.addEventListener('touchstart', d, { passive: !0 }),
          r.addEventListener('mousedown', d),
          {
            destroy: () => {
              r.removeEventListener('keydown', a),
                r.removeEventListener('focusin', u),
                r.removeEventListener('focusout', v),
                r.removeEventListener('touchstart', d),
                r.removeEventListener('mousedown', d);
            },
            setFocus: c,
          }
        );
      });
    },
  };
});
