(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [3029],
  {
    7049: (t, e, s) => {
      'use strict';
      s.d(e, { Z$: () => n, s7: () => c, Dp: () => a, $m: () => i });
      const n = (t) => t[t.length - 1];
      const r = () => [];
      const o = (t) => t.slice();
      const c = (t, e) => {
        for (let s = 0; s < e.length; s++) {
          t.push(e[s]);
        }
      };
      const a = Array.from;
      const f = (t, e) => t.every(e);
      const u = (t, e) => t.some(e);
      const i = (t, e) => t.length === e.length && f(t, (t, s) => t === e[s]);
      const l = (t) => t.reduce((t, e) => t.concat(e), []);
    },
    97027: (t, e, s) => {
      'use strict';
      s.d(e, { PP: () => o, UV: () => i, Hi: () => l });
      var n = s(7049);
      var r = s(59735);
      const o = (t, e, s = 0) => {
        try {
          for (; s < t.length; s++) {
            t[s](...e);
          }
        } finally {
          if (s < t.length) {
            o(t, e, s + 1);
          }
        }
      };
      const c = () => {};
      const a = (t) => t();
      const f = (t) => t;
      const u = (t, e) => t === e;
      const i = (t, e) =>
        t === e ||
        (t != null &&
          e != null &&
          t.constructor === e.constructor &&
          ((t instanceof Array && n.$m(t, e)) ||
            (typeof t === 'object' && r.$m(t, e))));
      const l = (t, e) => {
        if (t == null || e == null) {
          return u(t, e);
        }
        if (t.constructor !== e.constructor) {
          return false;
        }
        if (t === e) {
          return true;
        }
        switch (t.constructor) {
          case ArrayBuffer:
            t = new Uint8Array(t);
            e = new Uint8Array(e);
          case Uint8Array: {
            if (t.byteLength !== e.byteLength) {
              return false;
            }
            for (let s = 0; s < t.length; s++) {
              if (t[s] !== e[s]) {
                return false;
              }
            }
            break;
          }
          case Set: {
            if (t.size !== e.size) {
              return false;
            }
            for (const s of t) {
              if (!e.has(s)) {
                return false;
              }
            }
            break;
          }
          case Map: {
            if (t.size !== e.size) {
              return false;
            }
            for (const s of t.keys()) {
              if (!e.has(s) || !l(t.get(s), e.get(s))) {
                return false;
              }
            }
            break;
          }
          case Object:
            if (r.kE(t) !== r.kE(e)) {
              return false;
            }
            for (const s in t) {
              if (!r.l$(t, s) || !l(t[s], e[s])) {
                return false;
              }
            }
            break;
          case Array:
            if (t.length !== e.length) {
              return false;
            }
            for (let s = 0; s < t.length; s++) {
              if (!l(t[s], e[s])) {
                return false;
              }
            }
            break;
          default:
            return false;
        }
        return true;
      };
    },
    72382: (t, e, s) => {
      'use strict';
      s.d(e, { Ue: () => n, JG: () => r, Yu: () => o, UI: () => c, Yj: () => a });
      const n = () => new Map();
      const r = (t) => {
        const e = n();
        t.forEach((t, s) => {
          e.set(s, t);
        });
        return e;
      };
      const o = (t, e, s) => {
        let n = t.get(e);
        if (n === undefined) {
          t.set(e, (n = s()));
        }
        return n;
      };
      const c = (t, e) => {
        const s = [];
        for (const [n, r] of t) {
          s.push(e(r, n));
        }
        return s;
      };
      const a = (t, e) => {
        for (const [s, n] of t) {
          if (e(n, s)) {
            return true;
          }
        }
        return false;
      };
      const f = (t, e) => {
        for (const [s, n] of t) {
          if (!e(n, s)) {
            return false;
          }
        }
        return true;
      };
    },
    14247: (t, e, s) => {
      'use strict';
      s.d(e, {
        GW: () => n,
        Wn: () => o,
        mv: () => f,
        IH: () => h,
        VV: () => b,
        Fp: () => p,
        GR: () => v,
      });
      const n = Math.floor;
      const r = Math.ceil;
      const o = Math.abs;
      const c = Math.imul;
      const a = Math.round;
      const f = Math.log10;
      const u = Math.log2;
      const i = Math.log;
      const l = Math.sqrt;
      const h = (t, e) => t + e;
      const b = (t, e) => (t < e ? t : e);
      const p = (t, e) => (t > e ? t : e);
      const g = Number.isNaN;
      const y = Math.pow;
      const d = (t) => Math.pow(10, t);
      const k = Math.sign;
      const v = (t) => (t !== 0 ? t < 0 : 1 / t < 0);
    },
    59735: (t, e, s) => {
      'use strict';
      s.d(e, { UI: () => a, kE: () => f, l$: () => l, $m: () => h });
      const n = () => Object.create(null);
      const r = Object.assign;
      const o = Object.keys;
      const c = (t, e) => {
        for (const s in t) {
          e(t[s], s);
        }
      };
      const a = (t, e) => {
        const s = [];
        for (const n in t) {
          s.push(e(t[n], n));
        }
        return s;
      };
      const f = (t) => o(t).length;
      const u = (t, e) => {
        for (const s in t) {
          if (e(t[s], s)) {
            return true;
          }
        }
        return false;
      };
      const i = (t, e) => {
        for (const s in t) {
          if (!e(t[s], s)) {
            return false;
          }
        }
        return true;
      };
      const l = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
      const h = (t, e) =>
        t === e ||
        (f(t) === f(e) && i(t, (t, s) => (t !== undefined || l(e, s)) && e[s] === t));
    },
    58290: (t, e, s) => {
      'use strict';
      s.d(e, { y: () => c });
      var n = s(72382);
      var r = s(48307);
      var o = s(7049);
      class c {
        constructor() {
          this._observers = n.Ue();
        }
        on(t, e) {
          n.Yu(this._observers, t, r.U).add(e);
        }
        once(t, e) {
          const s = (...n) => {
            this.off(t, s);
            e(...n);
          };
          this.on(t, s);
        }
        off(t, e) {
          const s = this._observers.get(t);
          if (s !== undefined) {
            s.delete(e);
            if (s.size === 0) {
              this._observers.delete(t);
            }
          }
        }
        emit(t, e) {
          return o
            .Dp((this._observers.get(t) || n.Ue()).values())
            .forEach((t) => t(...e));
        }
        destroy() {
          this._observers = n.Ue();
        }
      }
    },
    48307: (t, e, s) => {
      'use strict';
      s.d(e, { U: () => n });
      const n = () => new Set();
      const r = (t) => Array.from(t);
    },
  },
]);
//# sourceMappingURL=3029.8636761a48c8422ce37f.js.map?v=8636761a48c8422ce37f
