(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [1057, 3029],
  {
    7049: (t, e, s) => {
      'use strict';
      s.d(e, { Z$: () => n, s7: () => c, Dp: () => a, $m: () => u });
      const n = (t) => t[t.length - 1];
      const o = () => [];
      const r = (t) => t.slice();
      const c = (t, e) => {
        for (let s = 0; s < e.length; s++) {
          t.push(e[s]);
        }
      };
      const a = Array.from;
      const i = (t, e) => t.every(e);
      const l = (t, e) => t.some(e);
      const u = (t, e) => t.length === e.length && i(t, (t, s) => t === e[s]);
      const d = (t) => t.reduce((t, e) => t.concat(e), []);
    },
    97027: (t, e, s) => {
      'use strict';
      s.d(e, { PP: () => r, UV: () => u, Hi: () => d });
      var n = s(7049);
      var o = s(59735);
      const r = (t, e, s = 0) => {
        try {
          for (; s < t.length; s++) {
            t[s](...e);
          }
        } finally {
          if (s < t.length) {
            r(t, e, s + 1);
          }
        }
      };
      const c = () => {};
      const a = (t) => t();
      const i = (t) => t;
      const l = (t, e) => t === e;
      const u = (t, e) =>
        t === e ||
        (t != null &&
          e != null &&
          t.constructor === e.constructor &&
          ((t instanceof Array && n.$m(t, e)) ||
            (typeof t === 'object' && o.$m(t, e))));
      const d = (t, e) => {
        if (t == null || e == null) {
          return l(t, e);
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
              if (!e.has(s) || !d(t.get(s), e.get(s))) {
                return false;
              }
            }
            break;
          }
          case Object:
            if (o.kE(t) !== o.kE(e)) {
              return false;
            }
            for (const s in t) {
              if (!o.l$(t, s) || !d(t[s], e[s])) {
                return false;
              }
            }
            break;
          case Array:
            if (t.length !== e.length) {
              return false;
            }
            for (let s = 0; s < t.length; s++) {
              if (!d(t[s], e[s])) {
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
      s.d(e, { Ue: () => n, JG: () => o, Yu: () => r, UI: () => c, Yj: () => a });
      const n = () => new Map();
      const o = (t) => {
        const e = n();
        t.forEach((t, s) => {
          e.set(s, t);
        });
        return e;
      };
      const r = (t, e, s) => {
        let n = t.get(e);
        if (n === undefined) {
          t.set(e, (n = s()));
        }
        return n;
      };
      const c = (t, e) => {
        const s = [];
        for (const [n, o] of t) {
          s.push(e(o, n));
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
      const i = (t, e) => {
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
        Wn: () => r,
        mv: () => i,
        IH: () => f,
        VV: () => h,
        Fp: () => g,
        GR: () => b,
      });
      const n = Math.floor;
      const o = Math.ceil;
      const r = Math.abs;
      const c = Math.imul;
      const a = Math.round;
      const i = Math.log10;
      const l = Math.log2;
      const u = Math.log;
      const d = Math.sqrt;
      const f = (t, e) => t + e;
      const h = (t, e) => (t < e ? t : e);
      const g = (t, e) => (t > e ? t : e);
      const p = Number.isNaN;
      const m = Math.pow;
      const y = (t) => Math.pow(10, t);
      const v = Math.sign;
      const b = (t) => (t !== 0 ? t < 0 : 1 / t < 0);
    },
    59735: (t, e, s) => {
      'use strict';
      s.d(e, { UI: () => a, kE: () => i, l$: () => d, $m: () => f });
      const n = () => Object.create(null);
      const o = Object.assign;
      const r = Object.keys;
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
      const i = (t) => r(t).length;
      const l = (t, e) => {
        for (const s in t) {
          if (e(t[s], s)) {
            return true;
          }
        }
        return false;
      };
      const u = (t, e) => {
        for (const s in t) {
          if (!e(t[s], s)) {
            return false;
          }
        }
        return true;
      };
      const d = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
      const f = (t, e) =>
        t === e ||
        (i(t) === i(e) && u(t, (t, s) => (t !== undefined || d(e, s)) && e[s] === t));
    },
    58290: (t, e, s) => {
      'use strict';
      s.d(e, { y: () => c });
      var n = s(72382);
      var o = s(48307);
      var r = s(7049);
      class c {
        constructor() {
          this._observers = n.Ue();
        }
        on(t, e) {
          n.Yu(this._observers, t, o.U).add(e);
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
          return r
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
      const o = (t) => Array.from(t);
    },
    1057: (t, e, s) => {
      'use strict';
      s.d(e, { GL: () => f, Ag: () => h, xq: () => g, oy: () => m });
      var n = s(29194);
      var o = s(64485);
      var r = s(20817);
      var c = s(14247);
      var a = s(58290);
      var i = s(97027);
      var l = s(20073);
      var u = s.n(l);
      const d = 3e4;
      class f extends a.y {
        constructor(t) {
          super();
          this.doc = t;
          this.clientID = t.clientID;
          this.states = new Map();
          this.meta = new Map();
          this._checkInterval = setInterval(() => {
            const t = r.ZG();
            if (
              this.getLocalState() !== null &&
              d / 2 <= t - this.meta.get(this.clientID).lastUpdated
            ) {
              this.setLocalState(this.getLocalState());
            }
            const e = [];
            this.meta.forEach((s, n) => {
              if (n !== this.clientID && d <= t - s.lastUpdated && this.states.has(n)) {
                e.push(n);
              }
            });
            if (e.length > 0) {
              h(this, e, 'timeout');
            }
          }, c.GW(d / 10));
          t.on('destroy', () => {
            this.destroy();
          });
          this.setLocalState({});
        }
        destroy() {
          this.emit('destroy', [this]);
          this.setLocalState(null);
          super.destroy();
          clearInterval(this._checkInterval);
        }
        getLocalState() {
          return this.states.get(this.clientID) || null;
        }
        setLocalState(t) {
          const e = this.clientID;
          const s = this.meta.get(e);
          const n = s === undefined ? 0 : s.clock + 1;
          const o = this.states.get(e);
          if (t === null) {
            this.states.delete(e);
          } else {
            this.states.set(e, t);
          }
          this.meta.set(e, { clock: n, lastUpdated: r.ZG() });
          const c = [];
          const a = [];
          const l = [];
          const u = [];
          if (t === null) {
            u.push(e);
          } else if (o == null) {
            if (t != null) {
              c.push(e);
            }
          } else {
            a.push(e);
            if (!i.Hi(o, t)) {
              l.push(e);
            }
          }
          if (c.length > 0 || l.length > 0 || u.length > 0) {
            this.emit('change', [{ added: c, updated: l, removed: u }, 'local']);
          }
          this.emit('update', [{ added: c, updated: a, removed: u }, 'local']);
        }
        setLocalStateField(t, e) {
          const s = this.getLocalState();
          if (s !== null) {
            this.setLocalState({ ...s, [t]: e });
          }
        }
        getStates() {
          return this.states;
        }
      }
      const h = (t, e, s) => {
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const s = e[o];
          if (t.states.has(s)) {
            t.states.delete(s);
            if (s === t.clientID) {
              const e = t.meta.get(s);
              t.meta.set(s, { clock: e.clock + 1, lastUpdated: r.ZG() });
            }
            n.push(s);
          }
        }
        if (n.length > 0) {
          t.emit('change', [{ added: [], updated: [], removed: n }, s]);
          t.emit('update', [{ added: [], updated: [], removed: n }, s]);
        }
      };
      const g = (t, e, s = t.states) => {
        const o = e.length;
        const r = n.Mf();
        n.uE(r, o);
        for (let c = 0; c < o; c++) {
          const o = e[c];
          const a = s.get(o) || null;
          const i = t.meta.get(o).clock;
          n.uE(r, o);
          n.uE(r, i);
          n.uw(r, JSON.stringify(a));
        }
        return n._f(r);
      };
      const p = (t, e) => {
        const s = decoding.createDecoder(t);
        const n = encoding.createEncoder();
        const o = decoding.readVarUint(s);
        encoding.writeVarUint(n, o);
        for (let r = 0; r < o; r++) {
          const t = decoding.readVarUint(s);
          const o = decoding.readVarUint(s);
          const r = JSON.parse(decoding.readVarString(s));
          const c = e(r);
          encoding.writeVarUint(n, t);
          encoding.writeVarUint(n, o);
          encoding.writeVarString(n, JSON.stringify(c));
        }
        return encoding.toUint8Array(n);
      };
      const m = (t, e, s) => {
        const n = o.l1(e);
        const c = r.ZG();
        const a = [];
        const l = [];
        const u = [];
        const d = [];
        const f = o.yg(n);
        for (let r = 0; r < f; r++) {
          const e = o.yg(n);
          let s = o.yg(n);
          const r = JSON.parse(o.kf(n));
          const f = t.meta.get(e);
          const h = t.states.get(e);
          const g = f === undefined ? 0 : f.clock;
          if (g < s || (g === s && r === null && t.states.has(e))) {
            if (r === null) {
              if (e === t.clientID && t.getLocalState() != null) {
                s++;
              } else {
                t.states.delete(e);
              }
            } else {
              t.states.set(e, r);
            }
            t.meta.set(e, { clock: s, lastUpdated: c });
            if (f === undefined && r !== null) {
              a.push(e);
            } else if (f !== undefined && r === null) {
              d.push(e);
            } else if (r !== null) {
              if (!i.Hi(r, h)) {
                u.push(e);
              }
              l.push(e);
            }
          }
        }
        if (a.length > 0 || u.length > 0 || d.length > 0) {
          t.emit('change', [{ added: a, updated: u, removed: d }, s]);
        }
        if (a.length > 0 || l.length > 0 || d.length > 0) {
          t.emit('update', [{ added: a, updated: l, removed: d }, s]);
        }
      };
    },
  },
]);
//# sourceMappingURL=1057.a0608544097dd22a589e.js.map?v=a0608544097dd22a589e
