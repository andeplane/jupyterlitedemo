(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [7454],
  {
    37932: () => {
      Array.prototype.flat ||
        Object.defineProperty(Array.prototype, 'flat', {
          configurable: !0,
          value: function e() {
            var n = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return n
              ? Array.prototype.reduce.call(
                  this,
                  function (t, i) {
                    return (
                      Array.isArray(i) ? t.push.apply(t, e.call(i, n - 1)) : t.push(i),
                      t
                    );
                  },
                  []
                )
              : Array.prototype.slice.call(this);
          },
          writable: !0,
        }),
        Array.prototype.flatMap ||
          Object.defineProperty(Array.prototype, 'flatMap', {
            configurable: !0,
            value: function (e) {
              return Array.prototype.map.apply(this, arguments).flat();
            },
            writable: !0,
          });
    },
    16313: (e) => {
      var n = (function () {
        'use strict';
        function e(e, n) {
          return n != null && e instanceof n;
        }
        var n;
        try {
          n = Map;
        } catch (l) {
          n = function () {};
        }
        var t;
        try {
          t = Set;
        } catch (l) {
          t = function () {};
        }
        var i;
        try {
          i = Promise;
        } catch (l) {
          i = function () {};
        }
        function r(s, o, a, u, l) {
          if (typeof o === 'object') {
            a = o.depth;
            u = o.prototype;
            l = o.includeNonEnumerable;
            o = o.circular;
          }
          var f = [];
          var d = [];
          var p = typeof Buffer != 'undefined';
          if (typeof o == 'undefined') o = true;
          if (typeof a == 'undefined') a = Infinity;
          function g(s, a) {
            if (s === null) return null;
            if (a === 0) return s;
            var m;
            var h;
            if (typeof s != 'object') {
              return s;
            }
            if (e(s, n)) {
              m = new n();
            } else if (e(s, t)) {
              m = new t();
            } else if (e(s, i)) {
              m = new i(function (e, n) {
                s.then(
                  function (n) {
                    e(g(n, a - 1));
                  },
                  function (e) {
                    n(g(e, a - 1));
                  }
                );
              });
            } else if (r.__isArray(s)) {
              m = [];
            } else if (r.__isRegExp(s)) {
              m = new RegExp(s.source, c(s));
              if (s.lastIndex) m.lastIndex = s.lastIndex;
            } else if (r.__isDate(s)) {
              m = new Date(s.getTime());
            } else if (p && Buffer.isBuffer(s)) {
              if (Buffer.allocUnsafe) {
                m = Buffer.allocUnsafe(s.length);
              } else {
                m = new Buffer(s.length);
              }
              s.copy(m);
              return m;
            } else if (e(s, Error)) {
              m = Object.create(s);
            } else {
              if (typeof u == 'undefined') {
                h = Object.getPrototypeOf(s);
                m = Object.create(h);
              } else {
                m = Object.create(u);
                h = u;
              }
            }
            if (o) {
              var b = f.indexOf(s);
              if (b != -1) {
                return d[b];
              }
              f.push(s);
              d.push(m);
            }
            if (e(s, n)) {
              s.forEach(function (e, n) {
                var t = g(n, a - 1);
                var i = g(e, a - 1);
                m.set(t, i);
              });
            }
            if (e(s, t)) {
              s.forEach(function (e) {
                var n = g(e, a - 1);
                m.add(n);
              });
            }
            for (var y in s) {
              var v;
              if (h) {
                v = Object.getOwnPropertyDescriptor(h, y);
              }
              if (v && v.set == null) {
                continue;
              }
              m[y] = g(s[y], a - 1);
            }
            if (Object.getOwnPropertySymbols) {
              var x = Object.getOwnPropertySymbols(s);
              for (var y = 0; y < x.length; y++) {
                var O = x[y];
                var w = Object.getOwnPropertyDescriptor(s, O);
                if (w && !w.enumerable && !l) {
                  continue;
                }
                m[O] = g(s[O], a - 1);
                if (!w.enumerable) {
                  Object.defineProperty(m, O, { enumerable: false });
                }
              }
            }
            if (l) {
              var j = Object.getOwnPropertyNames(s);
              for (var y = 0; y < j.length; y++) {
                var A = j[y];
                var w = Object.getOwnPropertyDescriptor(s, A);
                if (w && w.enumerable) {
                  continue;
                }
                m[A] = g(s[A], a - 1);
                Object.defineProperty(m, A, { enumerable: false });
              }
            }
            return m;
          }
          return g(s, a);
        }
        r.clonePrototype = function e(n) {
          if (n === null) return null;
          var t = function () {};
          t.prototype = n;
          return new t();
        };
        function s(e) {
          return Object.prototype.toString.call(e);
        }
        r.__objToStr = s;
        function o(e) {
          return typeof e === 'object' && s(e) === '[object Date]';
        }
        r.__isDate = o;
        function a(e) {
          return typeof e === 'object' && s(e) === '[object Array]';
        }
        r.__isArray = a;
        function u(e) {
          return typeof e === 'object' && s(e) === '[object RegExp]';
        }
        r.__isRegExp = u;
        function c(e) {
          var n = '';
          if (e.global) n += 'g';
          if (e.ignoreCase) n += 'i';
          if (e.multiline) n += 'm';
          return n;
        }
        r.__getRegExpFlags = c;
        return r;
      })();
      if (true && e.exports) {
        e.exports = n;
      }
    },
    64063: (e) => {
      'use strict';
      e.exports = function e(n, t) {
        if (n === t) return true;
        if (n && t && typeof n == 'object' && typeof t == 'object') {
          if (n.constructor !== t.constructor) return false;
          var i, r, s;
          if (Array.isArray(n)) {
            i = n.length;
            if (i != t.length) return false;
            for (r = i; r-- !== 0; ) if (!e(n[r], t[r])) return false;
            return true;
          }
          if (n.constructor === RegExp)
            return n.source === t.source && n.flags === t.flags;
          if (n.valueOf !== Object.prototype.valueOf)
            return n.valueOf() === t.valueOf();
          if (n.toString !== Object.prototype.toString)
            return n.toString() === t.toString();
          s = Object.keys(n);
          i = s.length;
          if (i !== Object.keys(t).length) return false;
          for (r = i; r-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(t, s[r])) return false;
          for (r = i; r-- !== 0; ) {
            var o = s[r];
            if (!e(n[o], t[o])) return false;
          }
          return true;
        }
        return n !== n && t !== t;
      };
    },
    35035: (e) => {
      'use strict';
      e.exports = function (e, n) {
        if (!n) n = {};
        if (typeof n === 'function') n = { cmp: n };
        var t = typeof n.cycles === 'boolean' ? n.cycles : false;
        var i =
          n.cmp &&
          (function (e) {
            return function (n) {
              return function (t, i) {
                var r = { key: t, value: n[t] };
                var s = { key: i, value: n[i] };
                return e(r, s);
              };
            };
          })(n.cmp);
        var r = [];
        return (function e(n) {
          if (n && n.toJSON && typeof n.toJSON === 'function') {
            n = n.toJSON();
          }
          if (n === undefined) return;
          if (typeof n == 'number') return isFinite(n) ? '' + n : 'null';
          if (typeof n !== 'object') return JSON.stringify(n);
          var s, o;
          if (Array.isArray(n)) {
            o = '[';
            for (s = 0; s < n.length; s++) {
              if (s) o += ',';
              o += e(n[s]) || 'null';
            }
            return o + ']';
          }
          if (n === null) return 'null';
          if (r.indexOf(n) !== -1) {
            if (t) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
          }
          var a = r.push(n) - 1;
          var u = Object.keys(n).sort(i && i(n));
          o = '';
          for (s = 0; s < u.length; s++) {
            var c = u[s];
            var l = e(n[c]);
            if (!l) continue;
            if (o) o += ',';
            o += JSON.stringify(c) + ':' + l;
          }
          r.splice(a, 1);
          return '{' + o + '}';
        })(e);
      };
    },
    27454: (e, n, t) => {
      'use strict';
      t.r(n);
      t.d(n, {
        accessPathDepth: () => Bn,
        accessPathWithDatum: () => Fn,
        compile: () => pF,
        contains: () => on,
        deepEqual: () => Ke,
        deleteNestedProperty: () => An,
        duplicate: () => Ze,
        entries: () => xn,
        every: () => un,
        fieldIntersection: () => hn,
        flatAccessWithDatum: () => $n,
        getFirstDefined: () => _n,
        hasIntersection: () => gn,
        hash: () => rn,
        internalField: () => Mn,
        isBoolean: () => On,
        isEmpty: () => bn,
        isEqual: () => dn,
        isInternalField: () => Tn,
        isNullOrFalse: () => sn,
        isNumeric: () => Rn,
        keys: () => yn,
        logicalExpr: () => jn,
        mergeDeep: () => cn,
        normalize: () => Up,
        normalizeAngle: () => Ln,
        omit: () => nn,
        pick: () => en,
        prefixGenerator: () => mn,
        removePathFromField: () => Sn,
        replaceAll: () => En,
        replacePathInField: () => Cn,
        resetIdCounter: () => Nn,
        setEqual: () => pn,
        some: () => an,
        stringify: () => tn,
        titleCase: () => Dn,
        unique: () => fn,
        uniqueId: () => zn,
        vals: () => vn,
        varName: () => wn,
        version: () => hF,
      });
      const i = { i8: '5.1.1' };
      function r(e, n, t) {
        e.fields = n || [];
        e.fname = t;
        return e;
      }
      function s(e) {
        return e == null ? null : e.fname;
      }
      function o(e) {
        return e == null ? null : e.fields;
      }
      function a(e) {
        return e.length === 1 ? u(e[0]) : c(e);
      }
      const u = (e) =>
        function (n) {
          return n[e];
        };
      const c = (e) => {
        const n = e.length;
        return function (t) {
          for (let i = 0; i < n; ++i) {
            t = t[e[i]];
          }
          return t;
        };
      };
      function l(e) {
        throw Error(e);
      }
      function f(e) {
        const n = [],
          t = e.length;
        let i = null,
          r = 0,
          s = '',
          o,
          a,
          u;
        e = e + '';
        function c() {
          n.push(s + e.substring(o, a));
          s = '';
          o = a + 1;
        }
        for (o = a = 0; a < t; ++a) {
          u = e[a];
          if (u === '\\') {
            s += e.substring(o, a);
            s += e.substring(++a, ++a);
            o = a;
          } else if (u === i) {
            c();
            i = null;
            r = -1;
          } else if (i) {
            continue;
          } else if (o === r && u === '"') {
            o = a + 1;
            i = u;
          } else if (o === r && u === "'") {
            o = a + 1;
            i = u;
          } else if (u === '.' && !r) {
            if (a > o) {
              c();
            } else {
              o = a + 1;
            }
          } else if (u === '[') {
            if (a > o) c();
            r = o = a + 1;
          } else if (u === ']') {
            if (!r) l('Access path missing open bracket: ' + e);
            if (r > 0) c();
            r = 0;
            o = a + 1;
          }
        }
        if (r) l('Access path missing closing bracket: ' + e);
        if (i) l('Access path missing closing quote: ' + e);
        if (a > o) {
          a++;
          c();
        }
        return n;
      }
      function d(e, n, t) {
        const i = f(e);
        e = i.length === 1 ? i[0] : e;
        return r(((t && t.get) || a)(i), [e], n || e);
      }
      const p = d('id');
      const g = r((e) => e, [], 'identity');
      const m = r(() => 0, [], 'zero');
      const h = r(() => 1, [], 'one');
      const b = r(() => true, [], 'true');
      const y = r(() => false, [], 'false');
      function v(e, n, t) {
        const i = [n].concat([].slice.call(t));
        console[e].apply(console, i);
      }
      const x = 0;
      const O = 1;
      const w = 2;
      const j = 3;
      const A = 4;
      function D(e, n) {
        let t = e || x;
        return {
          level(e) {
            if (arguments.length) {
              t = +e;
              return this;
            } else {
              return t;
            }
          },
          error() {
            if (t >= O) v(n || 'error', 'ERROR', arguments);
            return this;
          },
          warn() {
            if (t >= w) v(n || 'warn', 'WARN', arguments);
            return this;
          },
          info() {
            if (t >= j) v(n || 'log', 'INFO', arguments);
            return this;
          },
          debug() {
            if (t >= A) v(n || 'log', 'DEBUG', arguments);
            return this;
          },
        };
      }
      var F = Array.isArray;
      function $(e) {
        return e === Object(e);
      }
      const k = (e) => e !== '__proto__';
      function C(...e) {
        return e.reduce((e, n) => {
          for (const t in n) {
            if (t === 'signals') {
              e.signals = S(e.signals, n.signals);
            } else {
              const i = t === 'legend' ? { layout: 1 } : t === 'style' ? true : null;
              E(e, t, n[t], i);
            }
          }
          return e;
        }, {});
      }
      function E(e, n, t, i) {
        if (!k(n)) return;
        let r, s;
        if ($(t) && !F(t)) {
          s = $(e[n]) ? e[n] : (e[n] = {});
          for (r in t) {
            if (i && (i === true || i[r])) {
              E(s, r, t[r]);
            } else if (k(r)) {
              s[r] = t[r];
            }
          }
        } else {
          e[n] = t;
        }
      }
      function S(e, n) {
        if (e == null) return n;
        const t = {},
          i = [];
        function r(e) {
          if (!t[e.name]) {
            t[e.name] = 1;
            i.push(e);
          }
        }
        n.forEach(r);
        e.forEach(r);
        return i;
      }
      function B(e) {
        return e[e.length - 1];
      }
      function _(e) {
        return e == null || e === '' ? null : +e;
      }
      const P = (e) => (n) => e * Math.exp(n);
      const z = (e) => (n) => Math.log(e * n);
      const N = (e) => (n) => Math.sign(n) * Math.log1p(Math.abs(n / e));
      const M = (e) => (n) => Math.sign(n) * Math.expm1(Math.abs(n)) * e;
      const T = (e) => (n) => n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
      function L(e, n, t, i) {
        const r = t(e[0]),
          s = t(B(e)),
          o = (s - r) * n;
        return [i(r - o), i(s - o)];
      }
      function R(e, n) {
        return L(e, n, _, g);
      }
      function q(e, n) {
        var t = Math.sign(e[0]);
        return L(e, n, z(t), P(t));
      }
      function U(e, n, t) {
        return L(e, n, T(t), T(1 / t));
      }
      function W(e, n, t) {
        return L(e, n, N(t), M(t));
      }
      function I(e, n, t, i, r) {
        const s = i(e[0]),
          o = i(B(e)),
          a = n != null ? i(n) : (s + o) / 2;
        return [r(a + (s - a) * t), r(a + (o - a) * t)];
      }
      function H(e, n, t) {
        return I(e, n, t, _, g);
      }
      function G(e, n, t) {
        const i = Math.sign(e[0]);
        return I(e, n, t, z(i), P(i));
      }
      function V(e, n, t, i) {
        return I(e, n, t, T(i), T(1 / i));
      }
      function Y(e, n, t, i) {
        return I(e, n, t, N(i), M(i));
      }
      function Q(e) {
        return 1 + ~~(new Date(e).getMonth() / 3);
      }
      function X(e) {
        return 1 + ~~(new Date(e).getUTCMonth() / 3);
      }
      function J(e) {
        return e != null ? (F(e) ? e : [e]) : [];
      }
      function K(e, n, t) {
        let i = e[0],
          r = e[1],
          s;
        if (r < i) {
          s = r;
          r = i;
          i = s;
        }
        s = r - i;
        return s >= t - n ? [n, t] : [(i = Math.min(Math.max(i, n), t - s)), i + s];
      }
      function Z(e) {
        return typeof e === 'function';
      }
      const ee = 'descending';
      function ne(e, n, t) {
        t = t || {};
        n = J(n) || [];
        const i = [],
          s = [],
          a = {},
          u = t.comparator || ie;
        J(e).forEach((e, r) => {
          if (e == null) return;
          i.push(n[r] === ee ? -1 : 1);
          s.push((e = Z(e) ? e : d(e, null, t)));
          (o(e) || []).forEach((e) => (a[e] = 1));
        });
        return s.length === 0 ? null : r(u(s, i), Object.keys(a));
      }
      const te = (e, n) =>
        (e < n || e == null) && n != null
          ? -1
          : (e > n || n == null) && e != null
          ? 1
          : ((n = n instanceof Date ? +n : n), (e = e instanceof Date ? +e : e)) !==
              e && n === n
          ? -1
          : n !== n && e === e
          ? 1
          : 0;
      const ie = (e, n) => (e.length === 1 ? re(e[0], n[0]) : se(e, n, e.length));
      const re = (e, n) =>
        function (t, i) {
          return te(e(t), e(i)) * n;
        };
      const se = (e, n, t) => {
        n.push(0);
        return function (i, r) {
          let s,
            o = 0,
            a = -1;
          while (o === 0 && ++a < t) {
            s = e[a];
            o = te(s(i), s(r));
          }
          return o * n[a];
        };
      };
      function oe(e) {
        return Z(e) ? e : () => e;
      }
      function ae(e, n) {
        let t;
        return (i) => {
          if (t) clearTimeout(t);
          t = setTimeout(() => (n(i), (t = null)), e);
        };
      }
      function ue(e) {
        for (let n, t, i = 1, r = arguments.length; i < r; ++i) {
          n = arguments[i];
          for (t in n) {
            e[t] = n[t];
          }
        }
        return e;
      }
      function ce(e, n) {
        let t = 0,
          i,
          r,
          s,
          o;
        if (e && (i = e.length)) {
          if (n == null) {
            for (r = e[t]; t < i && (r == null || r !== r); r = e[++t]);
            s = o = r;
            for (; t < i; ++t) {
              r = e[t];
              if (r != null) {
                if (r < s) s = r;
                if (r > o) o = r;
              }
            }
          } else {
            for (r = n(e[t]); t < i && (r == null || r !== r); r = n(e[++t]));
            s = o = r;
            for (; t < i; ++t) {
              r = n(e[t]);
              if (r != null) {
                if (r < s) s = r;
                if (r > o) o = r;
              }
            }
          }
        }
        return [s, o];
      }
      function le(e, n) {
        const t = e.length;
        let i = -1,
          r,
          s,
          o,
          a,
          u;
        if (n == null) {
          while (++i < t) {
            s = e[i];
            if (s != null && s >= s) {
              r = o = s;
              break;
            }
          }
          if (i === t) return [-1, -1];
          a = u = i;
          while (++i < t) {
            s = e[i];
            if (s != null) {
              if (r > s) {
                r = s;
                a = i;
              }
              if (o < s) {
                o = s;
                u = i;
              }
            }
          }
        } else {
          while (++i < t) {
            s = n(e[i], i, e);
            if (s != null && s >= s) {
              r = o = s;
              break;
            }
          }
          if (i === t) return [-1, -1];
          a = u = i;
          while (++i < t) {
            s = n(e[i], i, e);
            if (s != null) {
              if (r > s) {
                r = s;
                a = i;
              }
              if (o < s) {
                o = s;
                u = i;
              }
            }
          }
        }
        return [a, u];
      }
      const fe = Object.prototype.hasOwnProperty;
      function de(e, n) {
        return fe.call(e, n);
      }
      const pe = {};
      function ge(e) {
        let n = {},
          t;
        function i(e) {
          return de(n, e) && n[e] !== pe;
        }
        const r = {
          size: 0,
          empty: 0,
          object: n,
          has: i,
          get(e) {
            return i(e) ? n[e] : undefined;
          },
          set(e, t) {
            if (!i(e)) {
              ++r.size;
              if (n[e] === pe) --r.empty;
            }
            n[e] = t;
            return this;
          },
          delete(e) {
            if (i(e)) {
              --r.size;
              ++r.empty;
              n[e] = pe;
            }
            return this;
          },
          clear() {
            r.size = r.empty = 0;
            r.object = n = {};
          },
          test(e) {
            if (arguments.length) {
              t = e;
              return r;
            } else {
              return t;
            }
          },
          clean() {
            const e = {};
            let i = 0;
            for (const r in n) {
              const s = n[r];
              if (s !== pe && (!t || !t(s))) {
                e[r] = s;
                ++i;
              }
            }
            r.size = i;
            r.empty = 0;
            r.object = n = e;
          },
        };
        if (e)
          Object.keys(e).forEach((n) => {
            r.set(n, e[n]);
          });
        return r;
      }
      function me(e, n, t, i, r, s) {
        if (!t && t !== 0) return s;
        const o = +t;
        let a = e[0],
          u = B(e),
          c;
        if (u < a) {
          c = a;
          a = u;
          u = c;
        }
        c = Math.abs(n - a);
        const l = Math.abs(u - n);
        return c < l && c <= o ? i : l <= o ? r : s;
      }
      function he(e, n, t) {
        const i = (e.prototype = Object.create(n.prototype));
        Object.defineProperty(i, 'constructor', {
          value: e,
          writable: true,
          enumerable: true,
          configurable: true,
        });
        return ue(i, t);
      }
      function be(e, n, t, i) {
        let r = n[0],
          s = n[n.length - 1],
          o;
        if (r > s) {
          o = r;
          r = s;
          s = o;
        }
        t = t === undefined || t;
        i = i === undefined || i;
        return (t ? r <= e : r < e) && (i ? e <= s : e < s);
      }
      function ye(e) {
        return typeof e === 'boolean';
      }
      function ve(e) {
        return Object.prototype.toString.call(e) === '[object Date]';
      }
      function xe(e) {
        return e && Z(e[Symbol.iterator]);
      }
      function Oe(e) {
        return typeof e === 'number';
      }
      function we(e) {
        return Object.prototype.toString.call(e) === '[object RegExp]';
      }
      function je(e) {
        return typeof e === 'string';
      }
      function Ae(e, n, t) {
        if (e) {
          e = n ? J(e).map((e) => e.replace(/\\(.)/g, '$1')) : J(e);
        }
        const i = e && e.length,
          s = (t && t.get) || a,
          o = (e) => s(n ? [e] : f(e));
        let u;
        if (!i) {
          u = function () {
            return '';
          };
        } else if (i === 1) {
          const n = o(e[0]);
          u = function (e) {
            return '' + n(e);
          };
        } else {
          const n = e.map(o);
          u = function (e) {
            let t = '' + n[0](e),
              r = 0;
            while (++r < i) t += '|' + n[r](e);
            return t;
          };
        }
        return r(u, e, 'key');
      }
      function De(e, n) {
        const t = e[0],
          i = B(e),
          r = +n;
        return !r ? t : r === 1 ? i : t + r * (i - t);
      }
      const Fe = 1e4;
      function $e(e) {
        e = +e || Fe;
        let n, t, i;
        const r = () => {
          n = {};
          t = {};
          i = 0;
        };
        const s = (r, s) => {
          if (++i > e) {
            t = n;
            n = {};
            i = 1;
          }
          return (n[r] = s);
        };
        r();
        return {
          clear: r,
          has: (e) => de(n, e) || de(t, e),
          get: (e) => (de(n, e) ? n[e] : de(t, e) ? s(e, t[e]) : undefined),
          set: (e, t) => (de(n, e) ? (n[e] = t) : s(e, t)),
        };
      }
      function ke(e, n, t, i) {
        const r = n.length,
          s = t.length;
        if (!s) return n;
        if (!r) return t;
        const o = i || new n.constructor(r + s);
        let a = 0,
          u = 0,
          c = 0;
        for (; a < r && u < s; ++c) {
          o[c] = e(n[a], t[u]) > 0 ? t[u++] : n[a++];
        }
        for (; a < r; ++a, ++c) {
          o[c] = n[a];
        }
        for (; u < s; ++u, ++c) {
          o[c] = t[u];
        }
        return o;
      }
      function Ce(e, n) {
        let t = '';
        while (--n >= 0) t += e;
        return t;
      }
      function Ee(e, n, t, i) {
        const r = t || ' ',
          s = e + '',
          o = n - s.length;
        return o <= 0
          ? s
          : i === 'left'
          ? Ce(r, o) + s
          : i === 'center'
          ? Ce(r, ~~(o / 2)) + s + Ce(r, Math.ceil(o / 2))
          : s + Ce(r, o);
      }
      function Se(e) {
        return (e && B(e) - e[0]) || 0;
      }
      function Be(e) {
        return F(e)
          ? '[' + e.map(Be) + ']'
          : $(e) || je(e)
          ? JSON.stringify(e).replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
          : e;
      }
      function _e(e) {
        return e == null || e === ''
          ? null
          : !e || e === 'false' || e === '0'
          ? false
          : !!e;
      }
      const Pe = (e) => (Oe(e) ? e : ve(e) ? e : Date.parse(e));
      function ze(e, n) {
        n = n || Pe;
        return e == null || e === '' ? null : n(e);
      }
      function Ne(e) {
        return e == null || e === '' ? null : e + '';
      }
      function Me(e) {
        const n = {},
          t = e.length;
        for (let i = 0; i < t; ++i) n[e[i]] = true;
        return n;
      }
      function Te(e, n, t, i) {
        const r = i != null ? i : '…',
          s = e + '',
          o = s.length,
          a = Math.max(0, n - r.length);
        return o <= n
          ? s
          : t === 'left'
          ? r + s.slice(o - a)
          : t === 'center'
          ? s.slice(0, Math.ceil(a / 2)) + r + s.slice(o - ~~(a / 2))
          : s.slice(0, a) + r;
      }
      function Le(e, n, t) {
        if (e) {
          if (n) {
            const i = e.length;
            for (let r = 0; r < i; ++r) {
              const i = n(e[r]);
              if (i) t(i, r, e);
            }
          } else {
            e.forEach(t);
          }
        }
      }
      var Re = t(37932);
      var qe = t(16313);
      var Ue = t.n(qe);
      var We = t(64063);
      var Ie = t.n(We);
      var He = t(35035);
      var Ge = t.n(He);
      function Ve(e) {
        return !!e.or;
      }
      function Ye(e) {
        return !!e.and;
      }
      function Qe(e) {
        return !!e.not;
      }
      function Xe(e, n) {
        if (Qe(e)) {
          Xe(e.not, n);
        } else if (Ye(e)) {
          for (const t of e.and) {
            Xe(t, n);
          }
        } else if (Ve(e)) {
          for (const t of e.or) {
            Xe(t, n);
          }
        } else {
          n(e);
        }
      }
      function Je(e, n) {
        if (Qe(e)) {
          return { not: Je(e.not, n) };
        } else if (Ye(e)) {
          return { and: e.and.map((e) => Je(e, n)) };
        } else if (Ve(e)) {
          return { or: e.or.map((e) => Je(e, n)) };
        } else {
          return n(e);
        }
      }
      const Ke = Ie();
      const Ze = Ue();
      function en(e, n) {
        const t = {};
        for (const i of n) {
          if (de(e, i)) {
            t[i] = e[i];
          }
        }
        return t;
      }
      function nn(e, n) {
        const t = Object.assign({}, e);
        for (const i of n) {
          delete t[i];
        }
        return t;
      }
      Set.prototype['toJSON'] = function () {
        return `Set(${[...this].map((e) => Ge()(e)).join(',')})`;
      };
      const tn = Ge();
      function rn(e) {
        if (Oe(e)) {
          return e;
        }
        const n = je(e) ? e : Ge()(e);
        if (n.length < 250) {
          return n;
        }
        let t = 0;
        for (let i = 0; i < n.length; i++) {
          const e = n.charCodeAt(i);
          t = (t << 5) - t + e;
          t = t & t;
        }
        return t;
      }
      function sn(e) {
        return e === false || e === null;
      }
      function on(e, n) {
        return e.includes(n);
      }
      function an(e, n) {
        let t = 0;
        for (const [i, r] of e.entries()) {
          if (n(r, i, t++)) {
            return true;
          }
        }
        return false;
      }
      function un(e, n) {
        let t = 0;
        for (const [i, r] of e.entries()) {
          if (!n(r, i, t++)) {
            return false;
          }
        }
        return true;
      }
      function cn(e, ...n) {
        for (const t of n) {
          ln(e, t !== null && t !== void 0 ? t : {});
        }
        return e;
      }
      function ln(e, n) {
        for (const t of yn(n)) {
          E(e, t, n[t], true);
        }
      }
      function fn(e, n) {
        const t = [];
        const i = {};
        let r;
        for (const s of e) {
          r = n(s);
          if (r in i) {
            continue;
          }
          i[r] = 1;
          t.push(s);
        }
        return t;
      }
      function dn(e, n) {
        const t = yn(e);
        const i = yn(n);
        if (t.length !== i.length) {
          return false;
        }
        for (const r of t) {
          if (e[r] !== n[r]) {
            return false;
          }
        }
        return true;
      }
      function pn(e, n) {
        if (e.size !== n.size) {
          return false;
        }
        for (const t of e) {
          if (!n.has(t)) {
            return false;
          }
        }
        return true;
      }
      function gn(e, n) {
        for (const t of e) {
          if (n.has(t)) {
            return true;
          }
        }
        return false;
      }
      function mn(e) {
        const n = new Set();
        for (const t of e) {
          const e = f(t);
          const i = e.map((e, n) => (n === 0 ? e : `[${e}]`));
          const r = i.map((e, n) => i.slice(0, n + 1).join(''));
          for (const t of r) {
            n.add(t);
          }
        }
        return n;
      }
      function hn(e, n) {
        if (e === undefined || n === undefined) {
          return true;
        }
        return gn(mn(e), mn(n));
      }
      function bn(e) {
        return yn(e).length === 0;
      }
      const yn = Object.keys;
      const vn = Object.values;
      const xn = Object.entries;
      function On(e) {
        return e === true || e === false;
      }
      function wn(e) {
        const n = e.replace(/\W/g, '_');
        return (e.match(/^\d+/) ? '_' : '') + n;
      }
      function jn(e, n) {
        if (Qe(e)) {
          return `!(${jn(e.not, n)})`;
        } else if (Ye(e)) {
          return `(${e.and.map((e) => jn(e, n)).join(') && (')})`;
        } else if (Ve(e)) {
          return `(${e.or.map((e) => jn(e, n)).join(') || (')})`;
        } else {
          return n(e);
        }
      }
      function An(e, n) {
        if (n.length === 0) {
          return true;
        }
        const t = n.shift();
        if (t in e && An(e[t], n)) {
          delete e[t];
        }
        return bn(e);
      }
      function Dn(e) {
        return e.charAt(0).toUpperCase() + e.substr(1);
      }
      function Fn(e, n = 'datum') {
        const t = f(e);
        const i = [];
        for (let r = 1; r <= t.length; r++) {
          const e = `[${t.slice(0, r).map(Be).join('][')}]`;
          i.push(`${n}${e}`);
        }
        return i.join(' && ');
      }
      function $n(e, n = 'datum') {
        return `${n}[${Be(f(e).join('.'))}]`;
      }
      function kn(e) {
        return e.replace(/(\[|\]|\.|'|")/g, '\\$1');
      }
      function Cn(e) {
        return `${f(e).map(kn).join('\\.')}`;
      }
      function En(e, n, t) {
        return e.replace(
          new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'),
          t
        );
      }
      function Sn(e) {
        return `${f(e).join('.')}`;
      }
      function Bn(e) {
        if (!e) {
          return 0;
        }
        return f(e).length;
      }
      function _n(...e) {
        for (const n of e) {
          if (n !== undefined) {
            return n;
          }
        }
        return undefined;
      }
      let Pn = 42;
      function zn(e) {
        const n = ++Pn;
        return e ? String(e) + n : n;
      }
      function Nn() {
        Pn = 42;
      }
      function Mn(e) {
        return Tn(e) ? e : `__${e}`;
      }
      function Tn(e) {
        return e.startsWith('__');
      }
      function Ln(e) {
        if (e === undefined) {
          return undefined;
        }
        return ((e % 360) + 360) % 360;
      }
      function Rn(e) {
        if (Oe(e)) {
          return true;
        }
        return !isNaN(e) && !isNaN(parseFloat(e));
      }
      var qn =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const Un = 'row';
      const Wn = 'column';
      const In = 'facet';
      const Hn = 'x';
      const Gn = 'y';
      const Vn = 'x2';
      const Yn = 'y2';
      const Qn = 'radius';
      const Xn = 'radius2';
      const Jn = 'theta';
      const Kn = 'theta2';
      const Zn = 'latitude';
      const et = 'longitude';
      const nt = 'latitude2';
      const tt = 'longitude2';
      const it = 'color';
      const rt = 'fill';
      const st = 'stroke';
      const ot = 'shape';
      const at = 'size';
      const ut = 'angle';
      const ct = 'opacity';
      const lt = 'fillOpacity';
      const ft = 'strokeOpacity';
      const dt = 'strokeWidth';
      const pt = 'strokeDash';
      const gt = 'text';
      const mt = 'order';
      const ht = 'detail';
      const bt = 'key';
      const yt = 'tooltip';
      const vt = 'href';
      const xt = 'url';
      const Ot = 'description';
      const wt = { x: 1, y: 1, x2: 1, y2: 1 };
      const jt = { theta: 1, theta2: 1, radius: 1, radius2: 1 };
      function At(e) {
        return e in jt;
      }
      const Dt = { longitude: 1, longitude2: 1, latitude: 1, latitude2: 1 };
      function Ft(e) {
        switch (e) {
          case Zn:
            return 'y';
          case nt:
            return 'y2';
          case et:
            return 'x';
          case tt:
            return 'x2';
        }
      }
      function $t(e) {
        return e in Dt;
      }
      const kt = yn(Dt);
      const Ct = Object.assign(
        Object.assign(Object.assign(Object.assign({}, wt), jt), Dt),
        {
          color: 1,
          fill: 1,
          stroke: 1,
          opacity: 1,
          fillOpacity: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
          strokeDash: 1,
          size: 1,
          angle: 1,
          shape: 1,
          order: 1,
          text: 1,
          detail: 1,
          key: 1,
          tooltip: 1,
          href: 1,
          url: 1,
          description: 1,
        }
      );
      function Et(e) {
        return e === it || e === rt || e === st;
      }
      const St = { row: 1, column: 1, facet: 1 };
      const Bt = yn(St);
      const _t = Object.assign(Object.assign({}, Ct), St);
      const Pt = yn(_t);
      const { order: zt, detail: Nt, tooltip: Mt } = _t,
        Tt = qn(_t, ['order', 'detail', 'tooltip']);
      const { row: Lt, column: Rt, facet: qt } = Tt,
        Ut = qn(Tt, ['row', 'column', 'facet']);
      const Wt = yn(Tt);
      const It = yn(Ut);
      function Ht(e) {
        return !!Ut[e];
      }
      function Gt(e) {
        return !!_t[e];
      }
      const Vt = [Vn, Yn, nt, tt, Kn, Xn];
      function Yt(e) {
        const n = Qt(e);
        return n !== e;
      }
      function Qt(e) {
        switch (e) {
          case Vn:
            return Hn;
          case Yn:
            return Gn;
          case nt:
            return Zn;
          case tt:
            return et;
          case Kn:
            return Jn;
          case Xn:
            return Qn;
        }
        return e;
      }
      function Xt(e) {
        if (At(e)) {
          switch (e) {
            case Jn:
              return 'startAngle';
            case Kn:
              return 'endAngle';
            case Qn:
              return 'outerRadius';
            case Xn:
              return 'innerRadius';
          }
        }
        return e;
      }
      function Jt(e) {
        switch (e) {
          case Hn:
            return Vn;
          case Gn:
            return Yn;
          case Zn:
            return nt;
          case et:
            return tt;
          case Jn:
            return Kn;
          case Qn:
            return Xn;
        }
        return undefined;
      }
      function Kt(e) {
        switch (e) {
          case Hn:
          case Vn:
            return 'width';
          case Gn:
          case Yn:
            return 'height';
        }
        return undefined;
      }
      function Zt(e) {
        switch (e) {
          case Hn:
            return 'xOffset';
          case Gn:
            return 'yOffset';
          case Vn:
            return 'x2Offset';
          case Yn:
            return 'y2Offset';
          case Jn:
            return 'thetaOffset';
          case Qn:
            return 'radiusOffset';
          case Kn:
            return 'theta2Offset';
          case Xn:
            return 'radius2Offset';
        }
        return undefined;
      }
      const ei = yn(Ct);
      const {
          x: ni,
          y: ti,
          x2: ii,
          y2: ri,
          latitude: si,
          longitude: oi,
          latitude2: ai,
          longitude2: ui,
          theta: ci,
          theta2: li,
          radius: fi,
          radius2: di,
        } = Ct,
        pi = qn(Ct, [
          'x',
          'y',
          'x2',
          'y2',
          'latitude',
          'longitude',
          'latitude2',
          'longitude2',
          'theta',
          'theta2',
          'radius',
          'radius2',
        ]);
      const gi = yn(pi);
      const mi = { x: 1, y: 1 };
      const hi = yn(mi);
      function bi(e) {
        return e in mi;
      }
      const yi = { theta: 1, radius: 1 };
      const vi = yn(yi);
      function xi(e) {
        return e === 'width' ? Hn : Gn;
      }
      const {
          text: Oi,
          tooltip: wi,
          href: ji,
          url: Ai,
          description: Di,
          detail: Fi,
          key: $i,
          order: ki,
        } = pi,
        Ci = qn(pi, [
          'text',
          'tooltip',
          'href',
          'url',
          'description',
          'detail',
          'key',
          'order',
        ]);
      const Ei = yn(Ci);
      function Si(e) {
        return !!pi[e];
      }
      function Bi(e) {
        switch (e) {
          case it:
          case rt:
          case st:
          case at:
          case ot:
          case ct:
          case dt:
          case pt:
            return true;
          case lt:
          case ft:
          case ut:
            return false;
        }
      }
      const _i = Object.assign(Object.assign(Object.assign({}, mi), yi), Ci);
      const Pi = yn(_i);
      function zi(e) {
        return !!_i[e];
      }
      function Ni(e, n) {
        return Ri(e)[n];
      }
      const Mi = {
        arc: 'always',
        area: 'always',
        bar: 'always',
        circle: 'always',
        geoshape: 'always',
        image: 'always',
        line: 'always',
        rule: 'always',
        point: 'always',
        rect: 'always',
        square: 'always',
        trail: 'always',
        text: 'always',
        tick: 'always',
      };
      const { geoshape: Ti } = Mi,
        Li = qn(Mi, ['geoshape']);
      function Ri(e) {
        switch (e) {
          case it:
          case rt:
          case st:
          case Ot:
          case ht:
          case bt:
          case yt:
          case vt:
          case mt:
          case ct:
          case lt:
          case ft:
          case dt:
          case In:
          case Un:
          case Wn:
            return Mi;
          case Hn:
          case Gn:
          case Zn:
          case et:
            return Li;
          case Vn:
          case Yn:
          case nt:
          case tt:
            return {
              area: 'always',
              bar: 'always',
              image: 'always',
              rect: 'always',
              rule: 'always',
              circle: 'binned',
              point: 'binned',
              square: 'binned',
              tick: 'binned',
              line: 'binned',
              trail: 'binned',
            };
          case at:
            return {
              point: 'always',
              tick: 'always',
              rule: 'always',
              circle: 'always',
              square: 'always',
              bar: 'always',
              text: 'always',
              line: 'always',
              trail: 'always',
            };
          case pt:
            return {
              line: 'always',
              point: 'always',
              tick: 'always',
              rule: 'always',
              circle: 'always',
              square: 'always',
              bar: 'always',
              geoshape: 'always',
            };
          case ot:
            return { point: 'always', geoshape: 'always' };
          case gt:
            return { text: 'always' };
          case ut:
            return { point: 'always', square: 'always', text: 'always' };
          case xt:
            return { image: 'always' };
          case Jn:
            return { text: 'always', arc: 'always' };
          case Qn:
            return { text: 'always', arc: 'always' };
          case Kn:
          case Xn:
            return { arc: 'always' };
        }
      }
      function qi(e) {
        switch (e) {
          case Hn:
          case Gn:
          case Jn:
          case Qn:
          case at:
          case ut:
          case dt:
          case ct:
          case lt:
          case ft:
          case Vn:
          case Yn:
          case Kn:
          case Xn:
            return undefined;
          case In:
          case Un:
          case Wn:
          case ot:
          case pt:
          case gt:
          case yt:
          case vt:
          case xt:
          case Ot:
            return 'discrete';
          case it:
          case rt:
          case st:
            return 'flexible';
          case Zn:
          case et:
          case nt:
          case tt:
          case ht:
          case bt:
          case mt:
            return undefined;
        }
      }
      const Ui = {
        argmax: 1,
        argmin: 1,
        average: 1,
        count: 1,
        distinct: 1,
        product: 1,
        max: 1,
        mean: 1,
        median: 1,
        min: 1,
        missing: 1,
        q1: 1,
        q3: 1,
        ci0: 1,
        ci1: 1,
        stderr: 1,
        stdev: 1,
        stdevp: 1,
        sum: 1,
        valid: 1,
        values: 1,
        variance: 1,
        variancep: 1,
      };
      const Wi = { count: 1, min: 1, max: 1 };
      function Ii(e) {
        return !!e && !!e['argmin'];
      }
      function Hi(e) {
        return !!e && !!e['argmax'];
      }
      const Gi = yn(Ui);
      function Vi(e) {
        return je(e) && !!Ui[e];
      }
      const Yi = ['count', 'valid', 'missing', 'distinct'];
      function Qi(e) {
        return je(e) && on(Yi, e);
      }
      function Xi(e) {
        return je(e) && on(['min', 'max'], e);
      }
      const Ji = ['count', 'sum', 'distinct', 'valid', 'missing'];
      const Ki = ['mean', 'average', 'median', 'q1', 'q3', 'min', 'max'];
      const Zi = Me(Ki);
      function er(e) {
        if (ye(e)) {
          e = Ol(e, undefined);
        }
        return (
          'bin' +
          yn(e)
            .map((n) => (rr(e[n]) ? wn(`_${n}_${xn(e[n])}`) : wn(`_${n}_${e[n]}`)))
            .join('')
        );
      }
      function nr(e) {
        return e === true || (ir(e) && !e.binned);
      }
      function tr(e) {
        return e === 'binned' || (ir(e) && e.binned === true);
      }
      function ir(e) {
        return $(e);
      }
      function rr(e) {
        return e === null || e === void 0 ? void 0 : e['param'];
      }
      function sr(e) {
        switch (e) {
          case Un:
          case Wn:
          case at:
          case it:
          case rt:
          case st:
          case dt:
          case ct:
          case lt:
          case ft:
          case ot:
            return 6;
          case pt:
            return 4;
          default:
            return 10;
        }
      }
      function or(e) {
        return e && !!e['expr'];
      }
      function ar(e) {
        const n = yn(e || {});
        const t = {};
        for (const i of n) {
          t[i] = jr(e[i]);
        }
        return t;
      }
      var ur =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function cr(e) {
        const {
            anchor: n,
            frame: t,
            offset: i,
            orient: r,
            angle: s,
            limit: o,
            color: a,
            subtitleColor: u,
            subtitleFont: c,
            subtitleFontSize: l,
            subtitleFontStyle: f,
            subtitleFontWeight: d,
            subtitleLineHeight: p,
            subtitlePadding: g,
          } = e,
          m = ur(e, [
            'anchor',
            'frame',
            'offset',
            'orient',
            'angle',
            'limit',
            'color',
            'subtitleColor',
            'subtitleFont',
            'subtitleFontSize',
            'subtitleFontStyle',
            'subtitleFontWeight',
            'subtitleLineHeight',
            'subtitlePadding',
          ]);
        const h = Object.assign(Object.assign({}, m), a ? { fill: a } : {});
        const b = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign({}, n ? { anchor: n } : {}),
                  t ? { frame: t } : {}
                ),
                i ? { offset: i } : {}
              ),
              r ? { orient: r } : {}
            ),
            s !== undefined ? { angle: s } : {}
          ),
          o !== undefined ? { limit: o } : {}
        );
        const y = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign({}, u ? { subtitleColor: u } : {}),
                    c ? { subtitleFont: c } : {}
                  ),
                  l ? { subtitleFontSize: l } : {}
                ),
                f ? { subtitleFontStyle: f } : {}
              ),
              d ? { subtitleFontWeight: d } : {}
            ),
            p ? { subtitleLineHeight: p } : {}
          ),
          g ? { subtitlePadding: g } : {}
        );
        const v = en(e, ['align', 'baseline', 'dx', 'dy', 'limit']);
        return {
          titleMarkConfig: h,
          subtitleMarkConfig: v,
          nonMarkTitleProperties: b,
          subtitle: y,
        };
      }
      function lr(e) {
        return je(e) || (F(e) && je(e[0]));
      }
      function fr(e) {
        return e && !!e['signal'];
      }
      function dr(e) {
        return !!e['step'];
      }
      function pr(e) {
        if (!F(e)) {
          return 'fields' in e && !('data' in e);
        }
        return false;
      }
      function gr(e) {
        if (!F(e)) {
          return 'fields' in e && 'data' in e;
        }
        return false;
      }
      function mr(e) {
        if (!F(e)) {
          return 'field' in e && 'data' in e;
        }
        return false;
      }
      const hr = {
        aria: 1,
        description: 1,
        ariaRole: 1,
        ariaRoleDescription: 1,
        blend: 1,
        opacity: 1,
        fill: 1,
        fillOpacity: 1,
        stroke: 1,
        strokeCap: 1,
        strokeWidth: 1,
        strokeOpacity: 1,
        strokeDash: 1,
        strokeDashOffset: 1,
        strokeJoin: 1,
        strokeOffset: 1,
        strokeMiterLimit: 1,
        startAngle: 1,
        endAngle: 1,
        padAngle: 1,
        innerRadius: 1,
        outerRadius: 1,
        size: 1,
        shape: 1,
        interpolate: 1,
        tension: 1,
        orient: 1,
        align: 1,
        baseline: 1,
        text: 1,
        dir: 1,
        dx: 1,
        dy: 1,
        ellipsis: 1,
        limit: 1,
        radius: 1,
        theta: 1,
        angle: 1,
        font: 1,
        fontSize: 1,
        fontWeight: 1,
        fontStyle: 1,
        lineBreak: 1,
        lineHeight: 1,
        cursor: 1,
        href: 1,
        tooltip: 1,
        cornerRadius: 1,
        cornerRadiusTopLeft: 1,
        cornerRadiusTopRight: 1,
        cornerRadiusBottomLeft: 1,
        cornerRadiusBottomRight: 1,
        aspect: 1,
        width: 1,
        height: 1,
        url: 1,
        smooth: 1,
      };
      const br = yn(hr);
      const yr = {
        arc: 1,
        area: 1,
        group: 1,
        image: 1,
        line: 1,
        path: 1,
        rect: 1,
        rule: 1,
        shape: 1,
        symbol: 1,
        text: 1,
        trail: 1,
      };
      const vr = [
        'cornerRadius',
        'cornerRadiusTopLeft',
        'cornerRadiusTopRight',
        'cornerRadiusBottomLeft',
        'cornerRadiusBottomRight',
      ];
      var xr =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const Or = ' – ';
      function wr(e) {
        const n = F(e.condition) ? e.condition.map(Ar) : Ar(e.condition);
        return Object.assign(Object.assign({}, jr(e)), { condition: n });
      }
      function jr(e) {
        if (or(e)) {
          const { expr: n } = e,
            t = xr(e, ['expr']);
          return Object.assign({ signal: n }, t);
        }
        return e;
      }
      function Ar(e) {
        if (or(e)) {
          const { expr: n } = e,
            t = xr(e, ['expr']);
          return Object.assign({ signal: n }, t);
        }
        return e;
      }
      function Dr(e) {
        if (or(e)) {
          const { expr: n } = e,
            t = xr(e, ['expr']);
          return Object.assign({ signal: n }, t);
        }
        if (fr(e)) {
          return e;
        }
        return e !== undefined ? { value: e } : undefined;
      }
      function Fr(e) {
        if (fr(e)) {
          return e.signal;
        }
        return Be(e.value);
      }
      function $r(e) {
        if (fr(e)) {
          return e.signal;
        }
        return e == null ? null : Be(e);
      }
      function kr(e, n, t) {
        for (const i of t) {
          const t = Sr(i, n.markDef, n.config);
          if (t !== undefined) {
            e[i] = Dr(t);
          }
        }
        return e;
      }
      function Cr(e) {
        var n;
        return [].concat(e.type, (n = e.style) !== null && n !== void 0 ? n : []);
      }
      function Er(e, n, t, i = {}) {
        const { vgChannel: r, ignoreVgConfig: s } = i;
        if (r && n[r] !== undefined) {
          return n[r];
        } else if (n[e] !== undefined) {
          return n[e];
        } else if (s && (!r || r === e)) {
          return undefined;
        }
        return Sr(e, n, t, i);
      }
      function Sr(e, n, t, { vgChannel: i } = {}) {
        return _n(
          i ? Br(e, n, t.style) : undefined,
          Br(e, n, t.style),
          i ? t[n.type][i] : undefined,
          t[n.type][e],
          i ? t.mark[i] : t.mark[e]
        );
      }
      function Br(e, n, t) {
        return _r(e, Cr(n), t);
      }
      function _r(e, n, t) {
        n = J(n);
        let i;
        for (const r of n) {
          const n = t[r];
          if (n && n[e] !== undefined) {
            i = n[e];
          }
        }
        return i;
      }
      function Pr(e, n) {
        return J(e).reduce(
          (e, t) => {
            var i;
            e.field.push(el(t, n));
            e.order.push((i = t.sort) !== null && i !== void 0 ? i : 'ascending');
            return e;
          },
          { field: [], order: [] }
        );
      }
      function zr(e, n) {
        const t = [...e];
        n.forEach((e) => {
          for (const n of t) {
            if (Ke(n, e)) {
              return;
            }
          }
          t.push(e);
        });
        return t;
      }
      function Nr(e, n) {
        if (Ke(e, n) || !n) {
          return e;
        } else if (!e) {
          return n;
        } else {
          return [...J(e), ...J(n)].join(', ');
        }
      }
      function Mr(e, n) {
        const t = e.value;
        const i = n.value;
        if (t == null || i === null) {
          return { explicit: e.explicit, value: null };
        } else if ((lr(t) || fr(t)) && (lr(i) || fr(i))) {
          return { explicit: e.explicit, value: Nr(t, i) };
        } else if (lr(t) || fr(t)) {
          return { explicit: e.explicit, value: t };
        } else if (lr(i) || fr(i)) {
          return { explicit: e.explicit, value: i };
        } else if (!lr(t) && !fr(t) && !lr(i) && !fr(i)) {
          return { explicit: e.explicit, value: zr(t, i) };
        }
        throw new Error('It should never reach here');
      }
      function Tr(e) {
        return `Invalid specification ${tn(
          e
        )}. Make sure the specification includes at least one of the following properties: "mark", "layer", "facet", "hconcat", "vconcat", "concat", or "repeat".`;
      }
      const Lr = 'Autosize "fit" only works for single views and layered views.';
      function Rr(e) {
        const n = e == 'width' ? 'Width' : 'Height';
        return `${n} "container" only works for single views and layered views.`;
      }
      function qr(e) {
        const n = e == 'width' ? 'Width' : 'Height';
        const t = e == 'width' ? 'x' : 'y';
        return `${n} "container" only works well with autosize "fit" or "fit-${t}".`;
      }
      function Ur(e) {
        return e
          ? `Dropping "fit-${e}" because spec has discrete ${Kt(e)}.`
          : `Dropping "fit" because spec has discrete size.`;
      }
      function Wr(e) {
        return `Unknown field for ${e}. Cannot calculate view size.`;
      }
      function Ir(e) {
        return `Cannot project a selection on encoding channel "${e}", which has no field.`;
      }
      function Hr(e, n) {
        return `Cannot project a selection on encoding channel "${e}" as it uses an aggregate function ("${n}").`;
      }
      function Gr(e) {
        return `The "nearest" transform is not supported for ${e} marks.`;
      }
      function Vr(e) {
        return `Selection not supported for ${e} yet.`;
      }
      function Yr(e) {
        return `Cannot find a selection named "${e}".`;
      }
      const Qr =
        'Scale bindings are currently only supported for scales with unbinned, continuous domains.';
      const Xr =
        'Legend bindings are only supported for selections over an individual field or encoding channel.';
      function Jr(e) {
        return `Lookups can only be performed on selection parameters. "${e}" is a variable parameter.`;
      }
      function Kr(e) {
        return (
          `Cannot define and lookup the "${e}" selection in the same view. ` +
          `Try moving the lookup into a second, layered view?`
        );
      }
      const Zr =
        'The same selection must be used to override scale domains in a layered view.';
      const es = 'Interval selections should be initialized using "x" and/or "y" keys.';
      function ns(e) {
        return `Unknown repeated value "${e}".`;
      }
      function ts(e) {
        return `The "columns" property cannot be used when "${e}" has nested row/column.`;
      }
      const is =
        'Axes cannot be shared in concatenated or repeated views yet (https://github.com/vega/vega-lite/issues/2415).';
      function rs(e) {
        return `Unrecognized parse "${e}".`;
      }
      function ss(e, n, t) {
        return `An ancestor parsed field "${e}" as ${t} but a child wants to parse the field as ${n}.`;
      }
      const os = 'Attempt to add the same child twice.';
      function as(e) {
        return `Ignoring an invalid transform: ${tn(e)}.`;
      }
      const us =
        'If "from.fields" is not specified, "as" has to be a string that specifies the key to be used for the data from the secondary source.';
      function cs(e) {
        return `Config.customFormatTypes is not true, thus custom format type and format for channel ${e} are dropped.`;
      }
      function ls(e) {
        const { parentProjection: n, projection: t } = e;
        return `Layer's shared projection ${tn(
          n
        )} is overridden by a child projection ${tn(t)}.`;
      }
      const fs =
        'Arc marks uses theta channel rather than angle, replacing angle with theta.';
      function ds(e, n, t) {
        return `Channel ${e} is a ${n}. Converted to {value: ${tn(t)}}.`;
      }
      function ps(e) {
        return `Invalid field type "${e}".`;
      }
      function gs(e, n) {
        return `Invalid field type "${e}" for aggregate: "${n}", using "quantitative" instead.`;
      }
      function ms(e) {
        return `Invalid aggregation operator "${e}".`;
      }
      function hs(e, n) {
        return `Missing type for channel "${e}", using "${n}" instead.`;
      }
      function bs(e, n) {
        const { fill: t, stroke: i } = n;
        return `Dropping color ${e} as the plot also has ${
          t && i ? 'fill and stroke' : t ? 'fill' : 'stroke'
        }.`;
      }
      function ys(e) {
        return `Position range does not support relative band size for ${e}.`;
      }
      function vs(e, n) {
        return `Dropping ${tn(
          e
        )} from channel "${n}" since it does not contain any data field, datum, value, or signal.`;
      }
      const xs =
        'Line marks cannot encode size with a non-groupby field. You may want to use trail marks instead.';
      function Os(e, n, t) {
        return `${e} dropped as it is incompatible with "${n}"${
          t ? ` when ${t}` : ''
        }.`;
      }
      function ws(e) {
        return `${e}-encoding is dropped as ${e} is not a valid encoding channel.`;
      }
      function js(e) {
        return `${e} encoding should be discrete (ordinal / nominal / binned).`;
      }
      function As(e) {
        return `${e} encoding should be discrete (ordinal / nominal / binned) or use a discretizing scale (e.g. threshold).`;
      }
      function Ds(e) {
        return `Facet encoding dropped as ${e.join(' and ')} ${
          e.length > 1 ? 'are' : 'is'
        } also specified.`;
      }
      function Fs(e, n) {
        return `Using discrete channel "${e}" to encode "${n}" field can be misleading as it does not encode ${
          n === 'ordinal' ? 'order' : 'magnitude'
        }.`;
      }
      function $s(e) {
        return `The ${e} for range marks cannot be an expression`;
      }
      function ks(e, n) {
        const t = e && n ? 'x2 and y2' : e ? 'x2' : 'y2';
        return `Line mark is for continuous lines and thus cannot be used with ${t}. We will use the rule mark (line segments) instead.`;
      }
      function Cs(e, n) {
        return `Specified orient "${e}" overridden with "${n}".`;
      }
      const Es =
        'Custom domain scale cannot be unioned with default field-based domain.';
      function Ss(e) {
        return `Cannot use the scale property "${e}" with non-color channel.`;
      }
      function Bs(e) {
        return `Cannot use the relative band size with ${e} scale.`;
      }
      function _s(e) {
        return `Using unaggregated domain with raw field has no effect (${tn(e)}).`;
      }
      function Ps(e) {
        return `Unaggregated domain not applicable for "${e}" since it produces values outside the origin domain of the source data.`;
      }
      function zs(e) {
        return `Unaggregated domain is currently unsupported for log scale (${tn(e)}).`;
      }
      function Ns(e) {
        return `Cannot apply size to non-oriented mark "${e}".`;
      }
      function Ms(e, n, t) {
        return `Channel "${e}" does not work with "${n}" scale. We are using "${t}" scale instead.`;
      }
      function Ts(e, n) {
        return `FieldDef does not work with "${e}" scale. We are using "${n}" scale instead.`;
      }
      function Ls(e, n, t) {
        return `${t}-scale's "${n}" is dropped as it does not work with ${e} scale.`;
      }
      function Rs(e, n) {
        return `Scale type "${n}" does not work with mark "${e}".`;
      }
      function qs(e) {
        return `The step for "${e}" is dropped because the ${
          e === 'width' ? 'x' : 'y'
        } is continuous.`;
      }
      function Us(e, n, t, i) {
        return `Conflicting ${n.toString()} property "${e.toString()}" (${tn(
          t
        )} and ${tn(i)}). Using ${tn(t)}.`;
      }
      function Ws(e, n, t, i) {
        return `Conflicting ${n.toString()} property "${e.toString()}" (${tn(
          t
        )} and ${tn(i)}). Using the union of the two domains.`;
      }
      function Is(e) {
        return `Setting the scale to be independent for "${e}" means we also have to set the guide (axis or legend) to be independent.`;
      }
      function Hs(e) {
        return `Dropping sort property ${tn(
          e
        )} as unioned domains only support boolean or op "count", "min", and "max".`;
      }
      const Gs =
        'Domains that should be unioned has conflicting sort properties. Sort will be set to true.';
      const Vs =
        'Detected faceted independent scales that union domain of multiple fields from different data sources. We will use the first field. The result view size may be incorrect.';
      const Ys =
        'Detected faceted independent scales that union domain of the same fields from different source. We will assume that this is the same field from a different fork of the same data source. However, if this is not the case, the result view size may be incorrect.';
      const Qs =
        'Detected faceted independent scales that union domain of multiple fields from the same data source. We will use the first field. The result view size may be incorrect.';
      const Xs = 'Invalid channel for axis.';
      function Js(e) {
        return `Cannot stack "${e}" if there is already "${e}2".`;
      }
      function Ks(e) {
        return `Cannot stack non-linear scale (${e}).`;
      }
      function Zs(e) {
        return `Stacking is applied even though the aggregate function is non-summative ("${e}").`;
      }
      function eo(e, n) {
        return `Invalid ${e}: ${tn(n)}.`;
      }
      function no(e) {
        return `Dropping day from datetime ${tn(
          e
        )} as day cannot be combined with other units.`;
      }
      function to(e, n) {
        return `${n ? 'extent ' : ''}${n && e ? 'and ' : ''}${e ? 'center ' : ''}${
          n && e ? 'are ' : 'is '
        }not needed when data are aggregated.`;
      }
      function io(e, n, t) {
        return `${e} is not usually used with ${n} for ${t}.`;
      }
      function ro(e, n) {
        return `Continuous axis should not have customized aggregation function ${e}; ${n} already agregates the axis.`;
      }
      function so(e) {
        return `1D error band does not support ${e}.`;
      }
      function oo(e) {
        return `Channel ${e} is required for "binned" bin.`;
      }
      function ao(e) {
        return `Channel ${e} should not be used with "binned" bin.`;
      }
      function uo(e) {
        return `Domain for ${e} is required for threshold scale.`;
      }
      var co =
        (undefined && undefined.__classPrivateFieldSet) ||
        function (e, n, t, i, r) {
          if (i === 'm') throw new TypeError('Private method is not writable');
          if (i === 'a' && !r)
            throw new TypeError('Private accessor was defined without a setter');
          if (typeof n === 'function' ? e !== n || !r : !n.has(e))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return i === 'a' ? r.call(e, t) : r ? (r.value = t) : n.set(e, t), t;
        };
      var lo =
        (undefined && undefined.__classPrivateFieldGet) ||
        function (e, n, t, i) {
          if (t === 'a' && !i)
            throw new TypeError('Private accessor was defined without a getter');
          if (typeof n === 'function' ? e !== n || !i : !n.has(e))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return t === 'm' ? i : t === 'a' ? i.call(e) : i ? i.value : n.get(e);
        };
      var fo;
      const po = D(w);
      let go = po;
      class mo {
        constructor() {
          this.warns = [];
          this.infos = [];
          this.debugs = [];
          fo.set(this, Warn);
        }
        level(e) {
          if (e) {
            co(this, fo, e, 'f');
            return this;
          }
          return lo(this, fo, 'f');
        }
        warn(...e) {
          if (lo(this, fo, 'f') >= Warn) this.warns.push(...e);
          return this;
        }
        info(...e) {
          if (lo(this, fo, 'f') >= Info) this.infos.push(...e);
          return this;
        }
        debug(...e) {
          if (lo(this, fo, 'f') >= Debug) this.debugs.push(...e);
          return this;
        }
        error(...e) {
          if (lo(this, fo, 'f') >= ErrorLevel) throw Error(...e);
          return this;
        }
      }
      fo = new WeakMap();
      function ho(e) {
        return () => {
          go = new mo();
          e(go);
          yo();
        };
      }
      function bo(e) {
        go = e;
        return go;
      }
      function yo() {
        go = po;
        return go;
      }
      function vo(...e) {
        go.error(...e);
      }
      function xo(...e) {
        go.warn(...e);
      }
      function Oo(...e) {
        go.info(...e);
      }
      function wo(...e) {
        go.debug(...e);
      }
      function jo(e) {
        if (e && $(e)) {
          for (const n of Mo) {
            if (n in e) {
              return true;
            }
          }
        }
        return false;
      }
      const Ao = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
      ];
      const Do = Ao.map((e) => e.substr(0, 3));
      const Fo = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ];
      const $o = Fo.map((e) => e.substr(0, 3));
      function ko(e) {
        if (Rn(e)) {
          e = +e;
        }
        if (Oe(e)) {
          if (e > 4) {
            xo(eo('quarter', e));
          }
          return e - 1;
        } else {
          throw new Error(eo('quarter', e));
        }
      }
      function Co(e) {
        if (Rn(e)) {
          e = +e;
        }
        if (Oe(e)) {
          return e - 1;
        } else {
          const n = e.toLowerCase();
          const t = Ao.indexOf(n);
          if (t !== -1) {
            return t;
          }
          const i = n.substr(0, 3);
          const r = Do.indexOf(i);
          if (r !== -1) {
            return r;
          }
          throw new Error(eo('month', e));
        }
      }
      function Eo(e) {
        if (Rn(e)) {
          e = +e;
        }
        if (Oe(e)) {
          return e % 7;
        } else {
          const n = e.toLowerCase();
          const t = Fo.indexOf(n);
          if (t !== -1) {
            return t;
          }
          const i = n.substr(0, 3);
          const r = $o.indexOf(i);
          if (r !== -1) {
            return r;
          }
          throw new Error(eo('day', e));
        }
      }
      function So(e, n) {
        const t = [];
        if (n && e.day !== undefined) {
          if (yn(e).length > 1) {
            xo(no(e));
            e = Ze(e);
            delete e.day;
          }
        }
        if (e.year !== undefined) {
          t.push(e.year);
        } else {
          t.push(2012);
        }
        if (e.month !== undefined) {
          const i = n ? Co(e.month) : e.month;
          t.push(i);
        } else if (e.quarter !== undefined) {
          const i = n ? ko(e.quarter) : e.quarter;
          t.push(Oe(i) ? i * 3 : `${i}*3`);
        } else {
          t.push(0);
        }
        if (e.date !== undefined) {
          t.push(e.date);
        } else if (e.day !== undefined) {
          const i = n ? Eo(e.day) : e.day;
          t.push(Oe(i) ? i + 1 : `${i}+1`);
        } else {
          t.push(1);
        }
        for (const i of ['hours', 'minutes', 'seconds', 'milliseconds']) {
          const n = e[i];
          t.push(typeof n === 'undefined' ? 0 : n);
        }
        return t;
      }
      function Bo(e) {
        const n = So(e, true);
        const t = n.join(', ');
        if (e.utc) {
          return `utc(${t})`;
        } else {
          return `datetime(${t})`;
        }
      }
      function _o(e) {
        const n = So(e, false);
        const t = n.join(', ');
        if (e.utc) {
          return `utc(${t})`;
        } else {
          return `datetime(${t})`;
        }
      }
      function Po(e) {
        const n = So(e, true);
        if (e.utc) {
          return +new Date(Date.UTC(...n));
        } else {
          return +new Date(...n);
        }
      }
      var zo =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const No = {
        year: 1,
        quarter: 1,
        month: 1,
        week: 1,
        day: 1,
        dayofyear: 1,
        date: 1,
        hours: 1,
        minutes: 1,
        seconds: 1,
        milliseconds: 1,
      };
      const Mo = yn(No);
      function To(e) {
        return !!No[e];
      }
      const Lo = {
        utcyear: 1,
        utcquarter: 1,
        utcmonth: 1,
        utcweek: 1,
        utcday: 1,
        utcdayofyear: 1,
        utcdate: 1,
        utchours: 1,
        utcminutes: 1,
        utcseconds: 1,
        utcmilliseconds: 1,
      };
      const Ro = {
        yearquarter: 1,
        yearquartermonth: 1,
        yearmonth: 1,
        yearmonthdate: 1,
        yearmonthdatehours: 1,
        yearmonthdatehoursminutes: 1,
        yearmonthdatehoursminutesseconds: 1,
        yearweek: 1,
        yearweekday: 1,
        yearweekdayhours: 1,
        yearweekdayhoursminutes: 1,
        yearweekdayhoursminutesseconds: 1,
        yeardayofyear: 1,
        quartermonth: 1,
        monthdate: 1,
        monthdatehours: 1,
        monthdatehoursminutes: 1,
        monthdatehoursminutesseconds: 1,
        weekday: 1,
        weeksdayhours: 1,
        weekdayhoursminutes: 1,
        weekdayhoursminutesseconds: 1,
        dayhours: 1,
        dayhoursminutes: 1,
        dayhoursminutesseconds: 1,
        hoursminutes: 1,
        hoursminutesseconds: 1,
        minutesseconds: 1,
        secondsmilliseconds: 1,
      };
      const qo = {
        utcyearquarter: 1,
        utcyearquartermonth: 1,
        utcyearmonth: 1,
        utcyearmonthdate: 1,
        utcyearmonthdatehours: 1,
        utcyearmonthdatehoursminutes: 1,
        utcyearmonthdatehoursminutesseconds: 1,
        utcyearweek: 1,
        utcyearweekday: 1,
        utcyearweekdayhours: 1,
        utcyearweekdayhoursminutes: 1,
        utcyearweekdayhoursminutesseconds: 1,
        utcyeardayofyear: 1,
        utcquartermonth: 1,
        utcmonthdate: 1,
        utcmonthdatehours: 1,
        utcmonthdatehoursminutes: 1,
        utcmonthdatehoursminutesseconds: 1,
        utcweekday: 1,
        utcweeksdayhours: 1,
        utcweekdayhoursminutes: 1,
        utcweekdayhoursminutesseconds: 1,
        utcdayhours: 1,
        utcdayhoursminutes: 1,
        utcdayhoursminutesseconds: 1,
        utchoursminutes: 1,
        utchoursminutesseconds: 1,
        utcminutesseconds: 1,
        utcsecondsmilliseconds: 1,
      };
      function Uo(e) {
        return e.startsWith('utc');
      }
      function Wo(e) {
        return e.substr(3);
      }
      const Io = { 'year-month': '%b %Y ', 'year-month-date': '%b %d, %Y ' };
      function Ho(e) {
        return Mo.filter((n) => Go(e, n));
      }
      function Go(e, n) {
        const t = e.indexOf(n);
        if (t < 0) {
          return false;
        }
        if (t > 0 && n === 'seconds' && e.charAt(t - 1) === 'i') {
          return false;
        }
        if (e.length > t + 3 && n === 'day' && e.charAt(t + 3) === 'o') {
          return false;
        }
        if (t > 0 && n === 'year' && e.charAt(t - 1) === 'f') {
          return false;
        }
        return true;
      }
      function Vo(e, n, { end: t } = { end: false }) {
        const i = Fn(n);
        const r = Uo(e) ? 'utc' : '';
        function s(e) {
          if (e === 'quarter') {
            return `(${r}quarter(${i})-1)`;
          } else {
            return `${r}${e}(${i})`;
          }
        }
        let o;
        const a = {};
        for (const u of Mo) {
          if (Go(e, u)) {
            a[u] = s(u);
            o = u;
          }
        }
        if (t) {
          a[o] += '+1';
        }
        return _o(a);
      }
      function Yo(e) {
        if (!e) {
          return undefined;
        }
        const n = Ho(e);
        return `timeUnitSpecifier(${tn(n)}, ${tn(Io)})`;
      }
      function Qo(e, n, t) {
        if (!e) {
          return undefined;
        }
        const i = Yo(e);
        const r = t || Uo(e);
        return `${r ? 'utc' : 'time'}Format(${n}, ${i})`;
      }
      function Xo(e) {
        if (!e) {
          return undefined;
        }
        let n;
        if (je(e)) {
          n = { unit: e };
        } else if ($(e)) {
          n = Object.assign(Object.assign({}, e), e.unit ? { unit: e.unit } : {});
        }
        if (Uo(n.unit)) {
          n.utc = true;
          n.unit = Wo(n.unit);
        }
        return n;
      }
      function Jo(e) {
        const n = Xo(e),
          { utc: t } = n,
          i = zo(n, ['utc']);
        if (i.unit) {
          return (
            (t ? 'utc' : '') +
            yn(i)
              .map((e) => wn(`${e === 'unit' ? '' : `_${e}_`}${i[e]}`))
              .join('')
          );
        } else {
          return (
            (t ? 'utc' : '') +
            'timeunit' +
            yn(i)
              .map((e) => wn(`_${e}_${i[e]}`))
              .join('')
          );
        }
      }
      function Ko(e) {
        return e === null || e === void 0 ? void 0 : e['param'];
      }
      function Zo(e) {
        return e && !!e.field && e.equal !== undefined;
      }
      function ea(e) {
        return e && !!e.field && e.lt !== undefined;
      }
      function na(e) {
        return e && !!e.field && e.lte !== undefined;
      }
      function ta(e) {
        return e && !!e.field && e.gt !== undefined;
      }
      function ia(e) {
        return e && !!e.field && e.gte !== undefined;
      }
      function ra(e) {
        if (e === null || e === void 0 ? void 0 : e.field) {
          if (F(e.range) && e.range.length === 2) {
            return true;
          } else if (fr(e.range)) {
            return true;
          }
        }
        return false;
      }
      function sa(e) {
        return e && !!e.field && (F(e.oneOf) || F(e.in));
      }
      function oa(e) {
        return e && !!e.field && e.valid !== undefined;
      }
      function aa(e) {
        return sa(e) || Zo(e) || ra(e) || ea(e) || ta(e) || na(e) || ia(e);
      }
      function ua(e, n) {
        return Fl(e, { timeUnit: n, wrapTime: true });
      }
      function ca(e, n) {
        return e.map((e) => ua(e, n));
      }
      function la(e, n = true) {
        var t;
        const { field: i } = e;
        const r = (t = Xo(e.timeUnit)) === null || t === void 0 ? void 0 : t.unit;
        const s = r ? `time(${Vo(r, i)})` : el(e, { expr: 'datum' });
        if (Zo(e)) {
          return `${s}===${ua(e.equal, r)}`;
        } else if (ea(e)) {
          const n = e.lt;
          return `${s}<${ua(n, r)}`;
        } else if (ta(e)) {
          const n = e.gt;
          return `${s}>${ua(n, r)}`;
        } else if (na(e)) {
          const n = e.lte;
          return `${s}<=${ua(n, r)}`;
        } else if (ia(e)) {
          const n = e.gte;
          return `${s}>=${ua(n, r)}`;
        } else if (sa(e)) {
          return `indexof([${ca(e.oneOf, r).join(',')}], ${s}) !== -1`;
        } else if (oa(e)) {
          return fa(s, e.valid);
        } else if (ra(e)) {
          const { range: t } = e;
          const i = fr(t) ? { signal: `${t.signal}[0]` } : t[0];
          const o = fr(t) ? { signal: `${t.signal}[1]` } : t[1];
          if (i !== null && o !== null && n) {
            return 'inrange(' + s + ', [' + ua(i, r) + ', ' + ua(o, r) + '])';
          }
          const a = [];
          if (i !== null) {
            a.push(`${s} >= ${ua(i, r)}`);
          }
          if (o !== null) {
            a.push(`${s} <= ${ua(o, r)}`);
          }
          return a.length > 0 ? a.join(' && ') : 'true';
        }
        throw new Error(`Invalid field predicate: ${tn(e)}`);
      }
      function fa(e, n = true) {
        if (n) {
          return `isValid(${e}) && isFinite(+${e})`;
        } else {
          return `!isValid(${e}) || !isFinite(+${e})`;
        }
      }
      function da(e) {
        var n;
        if (aa(e) && e.timeUnit) {
          return Object.assign(Object.assign({}, e), {
            timeUnit: (n = Xo(e.timeUnit)) === null || n === void 0 ? void 0 : n.unit,
          });
        }
        return e;
      }
      var pa = t(56498);
      const ga = {
        quantitative: 'quantitative',
        ordinal: 'ordinal',
        temporal: 'temporal',
        nominal: 'nominal',
        geojson: 'geojson',
      };
      function ma(e) {
        return e in ga;
      }
      const ha = ga.quantitative;
      const ba = ga.ordinal;
      const ya = ga.temporal;
      const va = ga.nominal;
      const xa = ga.geojson;
      const Oa = yn(ga);
      function wa(e) {
        if (e) {
          e = e.toLowerCase();
          switch (e) {
            case 'q':
            case ha:
              return 'quantitative';
            case 't':
            case ya:
              return 'temporal';
            case 'o':
            case ba:
              return 'ordinal';
            case 'n':
            case va:
              return 'nominal';
            case xa:
              return 'geojson';
          }
        }
        return undefined;
      }
      var ja =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const Aa = {
        LINEAR: 'linear',
        LOG: 'log',
        POW: 'pow',
        SQRT: 'sqrt',
        SYMLOG: 'symlog',
        IDENTITY: 'identity',
        SEQUENTIAL: 'sequential',
        TIME: 'time',
        UTC: 'utc',
        QUANTILE: 'quantile',
        QUANTIZE: 'quantize',
        THRESHOLD: 'threshold',
        BIN_ORDINAL: 'bin-ordinal',
        ORDINAL: 'ordinal',
        POINT: 'point',
        BAND: 'band',
      };
      const Da = {
        linear: 'numeric',
        log: 'numeric',
        pow: 'numeric',
        sqrt: 'numeric',
        symlog: 'numeric',
        identity: 'numeric',
        sequential: 'numeric',
        time: 'time',
        utc: 'time',
        ordinal: 'ordinal',
        'bin-ordinal': 'bin-ordinal',
        point: 'ordinal-position',
        band: 'ordinal-position',
        quantile: 'discretizing',
        quantize: 'discretizing',
        threshold: 'discretizing',
      };
      const Fa = yn(Da);
      function $a(e, n) {
        const t = Da[e];
        const i = Da[n];
        return (
          t === i ||
          (t === 'ordinal-position' && i === 'time') ||
          (i === 'ordinal-position' && t === 'time')
        );
      }
      const ka = {
        linear: 0,
        log: 1,
        pow: 1,
        sqrt: 1,
        symlog: 1,
        identity: 1,
        sequential: 1,
        time: 0,
        utc: 0,
        point: 10,
        band: 11,
        ordinal: 0,
        'bin-ordinal': 0,
        quantile: 0,
        quantize: 0,
        threshold: 0,
      };
      function Ca(e) {
        return ka[e];
      }
      const Ea = ['linear', 'log', 'pow', 'sqrt', 'symlog', 'time', 'utc'];
      const Sa = Me(Ea);
      const Ba = ['linear', 'log', 'pow', 'sqrt', 'symlog'];
      const _a = Me(Ba);
      function Pa(e) {
        return e in _a;
      }
      const za = ['quantile', 'quantize', 'threshold'];
      const Na = Me(za);
      const Ma = Ea.concat([
        'quantile',
        'quantize',
        'threshold',
        'sequential',
        'identity',
      ]);
      const Ta = Me(Ma);
      const La = ['ordinal', 'bin-ordinal', 'point', 'band'];
      const Ra = Me(La);
      const qa = null && ['time', 'utc'];
      function Ua(e) {
        return e in Ra;
      }
      function Wa(e) {
        return e in Ta;
      }
      function Ia(e) {
        return e in Sa;
      }
      function Ha(e) {
        return e in Na;
      }
      const Ga = {
        pointPadding: 0.5,
        barBandPaddingInner: 0.1,
        rectBandPaddingInner: 0,
        minBandSize: 2,
        minFontSize: 8,
        maxFontSize: 40,
        minOpacity: 0.3,
        maxOpacity: 0.8,
        minSize: 9,
        minStrokeWidth: 1,
        maxStrokeWidth: 4,
        quantileCount: 4,
        quantizeCount: 4,
      };
      function Va(e) {
        return !je(e) && !!e['name'];
      }
      function Ya(e) {
        return e === null || e === void 0 ? void 0 : e['param'];
      }
      function Qa(e) {
        return e && e['unionWith'];
      }
      function Xa(e) {
        return (0, pa.isObject)(e) && 'field' in e;
      }
      const Ja = {
        type: 1,
        domain: 1,
        domainMax: 1,
        domainMin: 1,
        domainMid: 1,
        align: 1,
        range: 1,
        rangeMax: 1,
        rangeMin: 1,
        scheme: 1,
        bins: 1,
        reverse: 1,
        round: 1,
        clamp: 1,
        nice: 1,
        base: 1,
        exponent: 1,
        constant: 1,
        interpolate: 1,
        zero: 1,
        padding: 1,
        paddingInner: 1,
        paddingOuter: 1,
      };
      const Ka = yn(Ja);
      const {
          type: Za,
          domain: eu,
          range: nu,
          rangeMax: tu,
          rangeMin: iu,
          scheme: ru,
        } = Ja,
        su = ja(Ja, ['type', 'domain', 'range', 'rangeMax', 'rangeMin', 'scheme']);
      const ou = yn(su);
      function au(e, n) {
        switch (n) {
          case 'type':
          case 'domain':
          case 'reverse':
          case 'range':
            return true;
          case 'scheme':
          case 'interpolate':
            return !['point', 'band', 'identity'].includes(e);
          case 'bins':
            return !['point', 'band', 'identity', 'ordinal'].includes(e);
          case 'round':
            return Ia(e) || e === 'band' || e === 'point';
          case 'padding':
          case 'rangeMin':
          case 'rangeMax':
            return Ia(e) || ['point', 'band'].includes(e);
          case 'paddingOuter':
          case 'align':
            return ['point', 'band'].includes(e);
          case 'paddingInner':
            return e === 'band';
          case 'domainMax':
          case 'domainMid':
          case 'domainMin':
          case 'clamp':
            return Ia(e);
          case 'nice':
            return Ia(e) || e === 'quantize' || e === 'threshold';
          case 'exponent':
            return e === 'pow';
          case 'base':
            return e === 'log';
          case 'constant':
            return e === 'symlog';
          case 'zero':
            return Wa(e) && !on(['log', 'time', 'utc', 'threshold', 'quantile'], e);
        }
      }
      function uu(e, n) {
        switch (n) {
          case 'interpolate':
          case 'scheme':
          case 'domainMid':
            if (!Et(e)) {
              return Ss(e);
            }
            return undefined;
          case 'align':
          case 'type':
          case 'bins':
          case 'domain':
          case 'domainMax':
          case 'domainMin':
          case 'range':
          case 'base':
          case 'exponent':
          case 'constant':
          case 'nice':
          case 'padding':
          case 'paddingInner':
          case 'paddingOuter':
          case 'rangeMax':
          case 'rangeMin':
          case 'reverse':
          case 'round':
          case 'clamp':
          case 'zero':
            return undefined;
        }
      }
      function cu(e, n) {
        if (on([ba, va], n)) {
          return e === undefined || Ua(e);
        } else if (n === ya) {
          return on([Aa.TIME, Aa.UTC, undefined], e);
        } else if (n === ha) {
          return on(
            [
              Aa.LOG,
              Aa.POW,
              Aa.SQRT,
              Aa.SYMLOG,
              Aa.QUANTILE,
              Aa.QUANTIZE,
              Aa.THRESHOLD,
              Aa.LINEAR,
              undefined,
            ],
            e
          );
        }
        return true;
      }
      function lu(e, n) {
        if (!zi(e)) {
          return false;
        }
        switch (e) {
          case Hn:
          case Gn:
          case Jn:
          case Qn:
            return Ia(n) || on(['band', 'point'], n);
          case at:
          case dt:
          case ct:
          case lt:
          case ft:
          case ut:
            return Ia(n) || Ha(n) || on(['band', 'point', 'ordinal'], n);
          case it:
          case rt:
          case st:
            return n !== 'band';
          case pt:
          case ot:
            return n === 'ordinal' || Ha(n);
        }
      }
      const fu = {
        arc: 'arc',
        area: 'area',
        bar: 'bar',
        image: 'image',
        line: 'line',
        point: 'point',
        rect: 'rect',
        rule: 'rule',
        text: 'text',
        tick: 'tick',
        trail: 'trail',
        circle: 'circle',
        square: 'square',
        geoshape: 'geoshape',
      };
      const du = fu.arc;
      const pu = fu.area;
      const gu = fu.bar;
      const mu = fu.image;
      const hu = fu.line;
      const bu = fu.point;
      const yu = fu.rect;
      const vu = fu.rule;
      const xu = fu.text;
      const Ou = fu.tick;
      const wu = fu.trail;
      const ju = fu.circle;
      const Au = fu.square;
      const Du = fu.geoshape;
      function Fu(e) {
        return e in fu;
      }
      function $u(e) {
        return ['line', 'area', 'trail'].includes(e);
      }
      function ku(e) {
        return ['rect', 'bar', 'image', 'arc'].includes(e);
      }
      const Cu = yn(fu);
      function Eu(e) {
        return e['type'];
      }
      const Su = Me(Cu);
      function Bu(e) {
        const n = Eu(e) ? e.type : e;
        return n in Su;
      }
      const _u = [
        'stroke',
        'strokeWidth',
        'strokeDash',
        'strokeDashOffset',
        'strokeOpacity',
        'strokeJoin',
        'strokeMiterLimit',
      ];
      const Pu = ['fill', 'fillOpacity'];
      const zu = [..._u, ...Pu];
      const Nu = {
        color: 1,
        filled: 1,
        invalid: 1,
        order: 1,
        radius2: 1,
        theta2: 1,
        timeUnitBandSize: 1,
        timeUnitBandPosition: 1,
      };
      const Mu = yn(Nu);
      const Tu = {
        area: ['line', 'point'],
        bar: ['binSpacing', 'continuousBandSize', 'discreteBandSize'],
        rect: ['binSpacing', 'continuousBandSize', 'discreteBandSize'],
        line: ['point'],
        tick: ['bandSize', 'thickness'],
      };
      const Lu = { color: '#4c78a8', invalid: 'filter', timeUnitBandSize: 1 };
      const Ru = {
        mark: 1,
        arc: 1,
        area: 1,
        bar: 1,
        circle: 1,
        image: 1,
        line: 1,
        point: 1,
        rect: 1,
        rule: 1,
        square: 1,
        text: 1,
        tick: 1,
        trail: 1,
        geoshape: 1,
      };
      const qu = yn(Ru);
      function Uu(e) {
        return e && e['band'] != undefined;
      }
      const Wu = {
        horizontal: ['cornerRadiusTopRight', 'cornerRadiusBottomRight'],
        vertical: ['cornerRadiusTopLeft', 'cornerRadiusTopRight'],
      };
      const Iu = 5;
      const Hu = { binSpacing: 1, continuousBandSize: Iu, timeUnitBandPosition: 0.5 };
      const Gu = { binSpacing: 0, continuousBandSize: Iu, timeUnitBandPosition: 0.5 };
      const Vu = { thickness: 1 };
      function Yu(e) {
        return Eu(e) ? e.type : e;
      }
      function Qu(e) {
        const { channel: n, channelDef: t, markDef: i, scale: r, config: s } = e;
        const o = tc(e);
        if (
          Lc(t) &&
          !Qi(t.aggregate) &&
          r &&
          Ia(r.get('type')) &&
          r.get('zero') === false
        ) {
          return Xu({ fieldDef: t, channel: n, markDef: i, ref: o, config: s });
        }
        return o;
      }
      function Xu({ fieldDef: e, channel: n, markDef: t, ref: i, config: r }) {
        if ($u(t.type)) {
          return i;
        }
        const s = Er('invalid', t, r);
        if (s === null) {
          return i;
        }
        return [Ju(e, n), i];
      }
      function Ju(e, n) {
        const t = Ku(e, true);
        const i = Qt(n);
        const r = i === 'y' ? { field: { group: 'height' } } : { value: 0 };
        return Object.assign({ test: t }, r);
      }
      function Ku(e, n = true) {
        return fa(je(e) ? e : el(e, { expr: 'datum' }), !n);
      }
      function Zu(e) {
        const { datum: n } = e;
        if (jo(n)) {
          return Bo(n);
        }
        return `${tn(n)}`;
      }
      function ec(e, n, t, i) {
        const r = {};
        if (n) {
          r.scale = n;
        }
        if (qc(e)) {
          const { datum: n } = e;
          if (jo(n)) {
            r.signal = Bo(n);
          } else if (fr(n)) {
            r.signal = n.signal;
          } else if (or(n)) {
            r.signal = n.expr;
          } else {
            r.value = n;
          }
        } else {
          r.field = el(e, t);
        }
        if (i) {
          const { offset: e, band: n } = i;
          if (e) {
            r.offset = e;
          }
          if (n) {
            r.band = n;
          }
        }
        return r;
      }
      function nc({
        scaleName: e,
        fieldOrDatumDef: n,
        fieldOrDatumDef2: t,
        offset: i,
        startSuffix: r,
        bandPosition: s = 0.5,
      }) {
        const o = 0 < s && s < 1 ? 'datum' : undefined;
        const a = el(n, { expr: o, suffix: r });
        const u =
          t !== undefined ? el(t, { expr: o }) : el(n, { suffix: 'end', expr: o });
        const c = {};
        if (s === 0 || s === 1) {
          c.scale = e;
          const n = s === 0 ? a : u;
          c.field = n;
        } else {
          const n = fr(s)
            ? `${s.signal} * ${a} + (1-${s.signal}) * ${u}`
            : `${s} * ${a} + ${1 - s} * ${u}`;
          c.signal = `scale("${e}", ${n})`;
        }
        if (i) {
          c.offset = i;
        }
        return c;
      }
      function tc({
        channel: e,
        channelDef: n,
        channel2Def: t,
        markDef: i,
        config: r,
        scaleName: s,
        scale: o,
        stack: a,
        offset: u,
        defaultRef: c,
        bandPosition: l,
      }) {
        var f;
        if (n) {
          if (Hc(n)) {
            if (Gc(n)) {
              l !== null && l !== void 0
                ? l
                : (l = Bc({ fieldDef: n, fieldDef2: t, markDef: i, config: r }));
              const { bin: o, timeUnit: c, type: f } = n;
              if (nr(o) || (l && c && f === ya)) {
                if (a === null || a === void 0 ? void 0 : a.impute) {
                  return ec(n, s, { binSuffix: 'mid' }, { offset: u });
                }
                if (l) {
                  return nc({
                    scaleName: s,
                    fieldOrDatumDef: n,
                    bandPosition: l,
                    offset: u,
                  });
                }
                return ec(n, s, kl(n, e) ? { binSuffix: 'range' } : {}, { offset: u });
              } else if (tr(o)) {
                if (Lc(t)) {
                  return nc({
                    scaleName: s,
                    fieldOrDatumDef: n,
                    fieldOrDatumDef2: t,
                    bandPosition: l,
                    offset: u,
                  });
                } else {
                  const n = e === Hn ? Vn : Yn;
                  xo(oo(n));
                }
              }
            }
            const c = o === null || o === void 0 ? void 0 : o.get('type');
            return ec(n, s, Ua(c) ? { binSuffix: 'range' } : {}, {
              offset: u,
              band:
                c === 'band'
                  ? (f = l !== null && l !== void 0 ? l : n.bandPosition) !== null &&
                    f !== void 0
                    ? f
                    : 0.5
                  : undefined,
            });
          } else if (Vc(n)) {
            const t = n.value;
            const i = u ? { offset: u } : {};
            return Object.assign(Object.assign({}, ic(e, t)), i);
          }
        }
        if (Z(c)) {
          c = c();
        }
        if (c) {
          return Object.assign(Object.assign({}, c), u ? { offset: u } : {});
        }
        return c;
      }
      function ic(e, n) {
        if (on(['x', 'x2'], e) && n === 'width') {
          return { field: { group: 'width' } };
        } else if (on(['y', 'y2'], e) && n === 'height') {
          return { field: { group: 'height' } };
        }
        return Dr(n);
      }
      function rc(e) {
        return e && e !== 'number' && e !== 'time';
      }
      function sc(e, n, t) {
        return `${e}(${n}${t ? `, ${tn(t)}` : ''})`;
      }
      const oc = ' – ';
      function ac({
        fieldOrDatumDef: e,
        format: n,
        formatType: t,
        expr: i,
        normalizeStack: r,
        config: s,
      }) {
        var o, a;
        if (rc(t)) {
          return cc({
            fieldOrDatumDef: e,
            format: n,
            formatType: t,
            expr: i,
            config: s,
          });
        }
        const u = uc(e, i, r);
        if (Al(e)) {
          const t = bc(
            u,
            Lc(e)
              ? (o = Xo(e.timeUnit)) === null || o === void 0
                ? void 0
                : o.unit
              : undefined,
            n,
            s.timeFormat,
            Yc(e) &&
              ((a = e.scale) === null || a === void 0 ? void 0 : a.type) === Aa.UTC
          );
          return t ? { signal: t } : undefined;
        }
        n = dc(Rc(e), n, s);
        if (Lc(e) && nr(e.bin)) {
          const r = el(e, { expr: i, binSuffix: 'end' });
          return { signal: hc(u, r, n, t, s) };
        } else if (n || Rc(e) === 'quantitative') {
          return { signal: `${gc(u, n)}` };
        } else {
          return { signal: `isValid(${u}) ? ${u} : ""+${u}` };
        }
      }
      function uc(e, n, t) {
        if (Lc(e)) {
          if (t) {
            return `${el(e, { expr: n, suffix: 'end' })}-${el(e, {
              expr: n,
              suffix: 'start',
            })}`;
          } else {
            return el(e, { expr: n });
          }
        } else {
          return Zu(e);
        }
      }
      function cc({
        fieldOrDatumDef: e,
        format: n,
        formatType: t,
        expr: i,
        normalizeStack: r,
        config: s,
        field: o,
      }) {
        o !== null && o !== void 0 ? o : (o = uc(e, i, r));
        if (Lc(e) && nr(e.bin)) {
          const r = el(e, { expr: i, binSuffix: 'end' });
          return { signal: hc(o, r, n, t, s) };
        }
        return { signal: sc(t, o, n) };
      }
      function lc(e, n, t, i, r, s) {
        var o;
        if (rc(i)) {
          return undefined;
        }
        if (Al(e)) {
          const n = Lc(e)
            ? (o = Xo(e.timeUnit)) === null || o === void 0
              ? void 0
              : o.unit
            : undefined;
          return pc(t, n, r, s);
        }
        return dc(n, t, r);
      }
      function fc(e, n, t) {
        if (e && (fr(e) || e === 'number' || e === 'time')) {
          return e;
        }
        if (Al(n) && t !== 'time' && t !== 'utc') {
          return 'time';
        }
        return undefined;
      }
      function dc(e, n, t) {
        if (je(n)) {
          return n;
        }
        if (e === ha) {
          return t.numberFormat;
        }
        return undefined;
      }
      function pc(e, n, t, i) {
        if (e) {
          return e;
        }
        if (n) {
          return { signal: Yo(n) };
        }
        return i ? undefined : t.timeFormat;
      }
      function gc(e, n) {
        return `format(${e}, "${n || ''}")`;
      }
      function mc(e, n, t, i) {
        var r;
        if (rc(t)) {
          return sc(t, e, n);
        }
        return gc(
          e,
          (r = je(n) ? n : undefined) !== null && r !== void 0 ? r : i.numberFormat
        );
      }
      function hc(e, n, t, i, r) {
        const s = mc(e, t, i, r);
        const o = mc(n, t, i, r);
        return `${fa(e, false)} ? "null" : ${s} + "${oc}" + ${o}`;
      }
      function bc(e, n, t, i, r) {
        if (!n || t) {
          t = je(t) ? t : i;
          return `${r ? 'utc' : 'time'}Format(${e}, '${t}')`;
        } else {
          return Qo(n, e, r);
        }
      }
      const yc = 'min';
      const vc = {
        x: 1,
        y: 1,
        color: 1,
        fill: 1,
        stroke: 1,
        strokeWidth: 1,
        size: 1,
        shape: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        opacity: 1,
        text: 1,
      };
      function xc(e) {
        return e in vc;
      }
      function Oc(e) {
        return !!e && !!e['encoding'];
      }
      function wc(e) {
        return !!e && (e['op'] === 'count' || !!e['field']);
      }
      function jc(e) {
        return !!e && F(e);
      }
      function Ac(e) {
        return 'row' in e || 'column' in e;
      }
      function Dc(e) {
        return !!e && 'header' in e;
      }
      function Fc(e) {
        return 'facet' in e;
      }
      var $c =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function kc(e) {
        return e['param'];
      }
      function Cc(e) {
        return e && !je(e) && 'repeat' in e;
      }
      function Ec(e) {
        const { field: n, timeUnit: t, bin: i, aggregate: r } = e;
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign({}, t ? { timeUnit: t } : {}),
              i ? { bin: i } : {}
            ),
            r ? { aggregate: r } : {}
          ),
          { field: n }
        );
      }
      function Sc(e) {
        return 'sort' in e;
      }
      function Bc({ fieldDef: e, fieldDef2: n, markDef: t, config: i }) {
        if (Hc(e) && e.bandPosition !== undefined) {
          return e.bandPosition;
        }
        if (Lc(e)) {
          const { timeUnit: r, bin: s } = e;
          if (r && !n) {
            return ku(t.type) ? 0 : Sr('timeUnitBandPosition', t, i);
          } else if (nr(s)) {
            return 0.5;
          }
        }
        return undefined;
      }
      function _c({
        channel: e,
        fieldDef: n,
        fieldDef2: t,
        markDef: i,
        config: r,
        scaleType: s,
        useVlSizeChannel: o,
      }) {
        var a, u, c;
        const l = Kt(e);
        const f = Er(o ? 'size' : l, i, r, { vgChannel: l });
        if (f !== undefined) {
          return f;
        }
        if (Lc(n)) {
          const { timeUnit: e, bin: o } = n;
          if (e && !t) {
            return { band: Sr('timeUnitBandSize', i, r) };
          } else if (nr(o) && !Ua(s)) {
            return { band: 1 };
          }
        }
        if (ku(i.type)) {
          if (s) {
            if (Ua(s)) {
              return (
                ((a = r[i.type]) === null || a === void 0
                  ? void 0
                  : a.discreteBandSize) || { band: 1 }
              );
            } else {
              return (u = r[i.type]) === null || u === void 0
                ? void 0
                : u.continuousBandSize;
            }
          }
          return (c = r[i.type]) === null || c === void 0 ? void 0 : c.discreteBandSize;
        }
        return undefined;
      }
      function Pc(e, n, t, i) {
        if (nr(e.bin) || (e.timeUnit && Gc(e) && e.type === 'temporal')) {
          return Bc({ fieldDef: e, fieldDef2: n, markDef: t, config: i }) !== undefined;
        }
        return false;
      }
      function zc(e) {
        return e && 'condition' in e;
      }
      function Nc(e) {
        const n = e && e['condition'];
        return !!n && !F(n) && Lc(n);
      }
      function Mc(e) {
        const n = e && e['condition'];
        return !!n && !F(n) && Hc(n);
      }
      function Tc(e) {
        const n = e && e['condition'];
        return !!n && (F(n) || Vc(n));
      }
      function Lc(e) {
        return e && (!!e['field'] || e['aggregate'] === 'count');
      }
      function Rc(e) {
        return e && e['type'];
      }
      function qc(e) {
        return e && 'datum' in e;
      }
      function Uc(e) {
        return (Gc(e) && !nl(e)) || Ic(e);
      }
      function Wc(e) {
        return Rc(e) === 'quantitative' || Ic(e);
      }
      function Ic(e) {
        return qc(e) && Oe(e.datum);
      }
      function Hc(e) {
        return Lc(e) || qc(e);
      }
      function Gc(e) {
        return e && ('field' in e || e['aggregate'] === 'count') && 'type' in e;
      }
      function Vc(e) {
        return e && 'value' in e && 'value' in e;
      }
      function Yc(e) {
        return e && ('scale' in e || 'sort' in e);
      }
      function Qc(e) {
        return e && ('axis' in e || 'stack' in e || 'impute' in e);
      }
      function Xc(e) {
        return e && 'legend' in e;
      }
      function Jc(e) {
        return e && ('format' in e || 'formatType' in e);
      }
      function Kc(e) {
        return nn(e, ['legend', 'axis', 'header', 'scale']);
      }
      function Zc(e) {
        return 'op' in e;
      }
      function el(e, n = {}) {
        var t, i, r;
        let s = e.field;
        const o = n.prefix;
        let a = n.suffix;
        let u = '';
        if (il(e)) {
          s = Mn('count');
        } else {
          let o;
          if (!n.nofn) {
            if (Zc(e)) {
              o = e.op;
            } else {
              const { bin: c, aggregate: l, timeUnit: f } = e;
              if (nr(c)) {
                o = er(c);
                a =
                  ((t = n.binSuffix) !== null && t !== void 0 ? t : '') +
                  ((i = n.suffix) !== null && i !== void 0 ? i : '');
              } else if (l) {
                if (Hi(l)) {
                  u = `["${s}"]`;
                  s = `argmax_${l.argmax}`;
                } else if (Ii(l)) {
                  u = `["${s}"]`;
                  s = `argmin_${l.argmin}`;
                } else {
                  o = String(l);
                }
              } else if (f) {
                o = Jo(f);
                a =
                  ((!['range', 'mid'].includes(n.binSuffix) && n.binSuffix) || '') +
                  ((r = n.suffix) !== null && r !== void 0 ? r : '');
              }
            }
          }
          if (o) {
            s = s ? `${o}_${s}` : o;
          }
        }
        if (a) {
          s = `${s}_${a}`;
        }
        if (o) {
          s = `${o}_${s}`;
        }
        if (n.forAs) {
          return Sn(s);
        } else if (n.expr) {
          return $n(s, n.expr) + u;
        } else {
          return Cn(s) + u;
        }
      }
      function nl(e) {
        switch (e.type) {
          case 'nominal':
          case 'ordinal':
          case 'geojson':
            return true;
          case 'quantitative':
            return Lc(e) && !!e.bin;
          case 'temporal':
            return false;
        }
        throw new Error(ps(e.type));
      }
      function tl(e) {
        var n;
        return Yc(e) && Ha((n = e.scale) === null || n === void 0 ? void 0 : n.type);
      }
      function il(e) {
        return e.aggregate === 'count';
      }
      function rl(e, n) {
        var t;
        const { field: i, bin: r, timeUnit: s, aggregate: o } = e;
        if (o === 'count') {
          return n.countTitle;
        } else if (nr(r)) {
          return `${i} (binned)`;
        } else if (s) {
          const e = (t = Xo(s)) === null || t === void 0 ? void 0 : t.unit;
          if (e) {
            return `${i} (${Ho(e).join('-')})`;
          }
        } else if (o) {
          if (Hi(o)) {
            return `${i} for max ${o.argmax}`;
          } else if (Ii(o)) {
            return `${i} for min ${o.argmin}`;
          } else {
            return `${Dn(o)} of ${i}`;
          }
        }
        return i;
      }
      function sl(e) {
        const { aggregate: n, bin: t, timeUnit: i, field: r } = e;
        if (Hi(n)) {
          return `${r} for argmax(${n.argmax})`;
        } else if (Ii(n)) {
          return `${r} for argmin(${n.argmin})`;
        }
        const s = Xo(i);
        const o =
          n ||
          (s === null || s === void 0 ? void 0 : s.unit) ||
          ((s === null || s === void 0 ? void 0 : s.maxbins) && 'timeunit') ||
          (nr(t) && 'bin');
        if (o) {
          return `${o.toUpperCase()}(${r})`;
        } else {
          return r;
        }
      }
      const ol = (e, n) => {
        switch (n.fieldTitle) {
          case 'plain':
            return e.field;
          case 'functional':
            return sl(e);
          default:
            return rl(e, n);
        }
      };
      let al = ol;
      function ul(e) {
        al = e;
      }
      function cl() {
        ul(ol);
      }
      function ll(e, n, { allowDisabling: t, includeDefault: i = true }) {
        var r, s;
        const o = (r = fl(e)) === null || r === void 0 ? void 0 : r.title;
        if (!Lc(e)) {
          return o;
        }
        const a = e;
        const u = i ? dl(a, n) : undefined;
        if (t) {
          return _n(o, a.title, u);
        } else {
          return (s = o !== null && o !== void 0 ? o : a.title) !== null && s !== void 0
            ? s
            : u;
        }
      }
      function fl(e) {
        if (Qc(e) && e.axis) {
          return e.axis;
        } else if (Xc(e) && e.legend) {
          return e.legend;
        } else if (Dc(e) && e.header) {
          return e.header;
        }
        return undefined;
      }
      function dl(e, n) {
        return al(e, n);
      }
      function pl(e) {
        var n;
        if (Jc(e)) {
          const { format: n, formatType: t } = e;
          return { format: n, formatType: t };
        } else {
          const t = (n = fl(e)) !== null && n !== void 0 ? n : {};
          const { format: i, formatType: r } = t;
          return { format: i, formatType: r };
        }
      }
      function gl(e, n) {
        var t;
        switch (n) {
          case 'latitude':
          case 'longitude':
            return 'quantitative';
          case 'row':
          case 'column':
          case 'facet':
          case 'shape':
          case 'strokeDash':
            return 'nominal';
          case 'order':
            return 'ordinal';
        }
        if (Sc(e) && F(e.sort)) {
          return 'ordinal';
        }
        const { aggregate: i, bin: r, timeUnit: s } = e;
        if (s) {
          return 'temporal';
        }
        if (r || (i && !Hi(i) && !Ii(i))) {
          return 'quantitative';
        }
        if (Yc(e) && ((t = e.scale) === null || t === void 0 ? void 0 : t.type)) {
          switch (Da[e.scale.type]) {
            case 'numeric':
            case 'discretizing':
              return 'quantitative';
            case 'time':
              return 'temporal';
          }
        }
        return 'nominal';
      }
      function ml(e) {
        if (Lc(e)) {
          return e;
        } else if (Nc(e)) {
          return e.condition;
        }
        return undefined;
      }
      function hl(e) {
        if (Hc(e)) {
          return e;
        } else if (Mc(e)) {
          return e.condition;
        }
        return undefined;
      }
      function bl(e, n, t, i = {}) {
        if (je(e) || Oe(e) || ye(e)) {
          const t = je(e) ? 'string' : Oe(e) ? 'number' : 'boolean';
          xo(ds(n, t, e));
          return { value: e };
        }
        if (Hc(e)) {
          return yl(e, n, t, i);
        } else if (Mc(e)) {
          return Object.assign(Object.assign({}, e), {
            condition: yl(e.condition, n, t, i),
          });
        }
        return e;
      }
      function yl(e, n, t, i) {
        if (Jc(e)) {
          const { format: r, formatType: s } = e,
            o = $c(e, ['format', 'formatType']);
          if (rc(s) && !t.customFormatTypes) {
            xo(cs(n));
            return yl(o, n, t, i);
          }
        } else {
          const r = Qc(e) ? 'axis' : Xc(e) ? 'legend' : Dc(e) ? 'header' : null;
          if (r && e[r]) {
            const s = e[r],
              { format: o, formatType: a } = s,
              u = $c(s, ['format', 'formatType']);
            if (rc(a) && !t.customFormatTypes) {
              xo(cs(n));
              return yl(Object.assign(Object.assign({}, e), { [r]: u }), n, t, i);
            }
          }
        }
        if (Lc(e)) {
          return xl(e, n, i);
        }
        return vl(e);
      }
      function vl(e) {
        let n = e['type'];
        if (n) {
          return e;
        }
        const { datum: t } = e;
        n = Oe(t) ? 'quantitative' : je(t) ? 'nominal' : jo(t) ? 'temporal' : undefined;
        return Object.assign(Object.assign({}, e), { type: n });
      }
      function xl(e, n, { compositeMark: t = false } = {}) {
        const { aggregate: i, timeUnit: r, bin: s, field: o } = e;
        const a = Object.assign({}, e);
        if (!t && i && !Vi(i) && !Hi(i) && !Ii(i)) {
          xo(ms(i));
          delete a.aggregate;
        }
        if (r) {
          a.timeUnit = Xo(r);
        }
        if (o) {
          a.field = `${o}`;
        }
        if (nr(s)) {
          a.bin = Ol(s, n);
        }
        if (tr(s) && !bi(n)) {
          xo(ao(n));
        }
        if (Gc(a)) {
          const { type: e } = a;
          const n = wa(e);
          if (e !== n) {
            a.type = n;
          }
          if (e !== 'quantitative') {
            if (Qi(i)) {
              xo(gs(e, i));
              a.type = 'quantitative';
            }
          }
        } else if (!Yt(n)) {
          const e = gl(a, n);
          a['type'] = e;
        }
        if (Gc(a)) {
          const { compatible: e, warning: t } = jl(a, n) || {};
          if (e === false) {
            xo(t);
          }
        }
        if (Sc(a) && je(a.sort)) {
          const { sort: e } = a;
          if (xc(e)) {
            return Object.assign(Object.assign({}, a), { sort: { encoding: e } });
          }
          const n = e.substr(1);
          if (e.charAt(0) === '-' && xc(n)) {
            return Object.assign(Object.assign({}, a), {
              sort: { encoding: n, order: 'descending' },
            });
          }
        }
        if (Dc(a)) {
          const { header: e } = a;
          if (e) {
            const { orient: n } = e,
              t = $c(e, ['orient']);
            if (n) {
              return Object.assign(Object.assign({}, a), {
                header: Object.assign(Object.assign({}, t), {
                  labelOrient: e.labelOrient || n,
                  titleOrient: e.titleOrient || n,
                }),
              });
            }
          }
        }
        return a;
      }
      function Ol(e, n) {
        if (ye(e)) {
          return { maxbins: sr(n) };
        } else if (e === 'binned') {
          return { binned: true };
        } else if (!e.maxbins && !e.step) {
          return Object.assign(Object.assign({}, e), { maxbins: sr(n) });
        } else {
          return e;
        }
      }
      const wl = { compatible: true };
      function jl(e, n) {
        const t = e.type;
        if (t === 'geojson' && n !== 'shape') {
          return {
            compatible: false,
            warning: `Channel ${n} should not be used with a geojson data.`,
          };
        }
        switch (n) {
          case Un:
          case Wn:
          case In:
            if (!nl(e)) {
              return { compatible: false, warning: js(n) };
            }
            return wl;
          case Hn:
          case Gn:
          case it:
          case rt:
          case st:
          case gt:
          case ht:
          case bt:
          case yt:
          case vt:
          case xt:
          case ut:
          case Jn:
          case Qn:
          case Ot:
            return wl;
          case et:
          case tt:
          case Zn:
          case nt:
            if (t !== ha) {
              return {
                compatible: false,
                warning: `Channel ${n} should be used with a quantitative field only, not ${e.type} field.`,
              };
            }
            return wl;
          case ct:
          case lt:
          case ft:
          case dt:
          case at:
          case Kn:
          case Xn:
          case Vn:
          case Yn:
            if (t === 'nominal' && !e['sort']) {
              return {
                compatible: false,
                warning: `Channel ${n} should not be used with an unsorted discrete field.`,
              };
            }
            return wl;
          case ot:
          case pt:
            if (!nl(e) && !tl(e)) {
              return { compatible: false, warning: As(n) };
            }
            return wl;
          case mt:
            if (e.type === 'nominal' && !('sort' in e)) {
              return {
                compatible: false,
                warning: `Channel order is inappropriate for nominal field, which has no inherent order.`,
              };
            }
            return wl;
        }
      }
      function Al(e) {
        const { formatType: n } = pl(e);
        return n === 'time' || (!n && Dl(e));
      }
      function Dl(e) {
        return e && (e['type'] === 'temporal' || (Lc(e) && !!e.timeUnit));
      }
      function Fl(
        e,
        { timeUnit: n, type: t, wrapTime: i, undefinedIfExprNotRequired: r }
      ) {
        var s;
        const o = n && ((s = Xo(n)) === null || s === void 0 ? void 0 : s.unit);
        let a = o || t === 'temporal';
        let u;
        if (or(e)) {
          u = e.expr;
        } else if (fr(e)) {
          u = e.signal;
        } else if (jo(e)) {
          a = true;
          u = Bo(e);
        } else if (je(e) || Oe(e)) {
          if (a) {
            u = `datetime(${tn(e)})`;
            if (To(o)) {
              if ((Oe(e) && e < 1e4) || (je(e) && isNaN(Date.parse(e)))) {
                u = Bo({ [o]: e });
              }
            }
          }
        }
        if (u) {
          return i && a ? `time(${u})` : u;
        }
        return r ? undefined : tn(e);
      }
      function $l(e, n) {
        const { type: t } = e;
        return n.map((n) => {
          const i = Fl(n, {
            timeUnit: Lc(e) ? e.timeUnit : undefined,
            type: t,
            undefinedIfExprNotRequired: true,
          });
          if (i !== undefined) {
            return { signal: i };
          }
          return n;
        });
      }
      function kl(e, n) {
        if (!nr(e.bin)) {
          console.warn('Only call this method for binned field defs.');
          return false;
        }
        return zi(n) && ['ordinal', 'nominal'].includes(e.type);
      }
      const Cl = {
        labelAlign: { part: 'labels', vgProp: 'align' },
        labelBaseline: { part: 'labels', vgProp: 'baseline' },
        labelColor: { part: 'labels', vgProp: 'fill' },
        labelFont: { part: 'labels', vgProp: 'font' },
        labelFontSize: { part: 'labels', vgProp: 'fontSize' },
        labelFontStyle: { part: 'labels', vgProp: 'fontStyle' },
        labelFontWeight: { part: 'labels', vgProp: 'fontWeight' },
        labelOpacity: { part: 'labels', vgProp: 'opacity' },
        labelOffset: null,
        labelPadding: null,
        gridColor: { part: 'grid', vgProp: 'stroke' },
        gridDash: { part: 'grid', vgProp: 'strokeDash' },
        gridDashOffset: { part: 'grid', vgProp: 'strokeDashOffset' },
        gridOpacity: { part: 'grid', vgProp: 'opacity' },
        gridWidth: { part: 'grid', vgProp: 'strokeWidth' },
        tickColor: { part: 'ticks', vgProp: 'stroke' },
        tickDash: { part: 'ticks', vgProp: 'strokeDash' },
        tickDashOffset: { part: 'ticks', vgProp: 'strokeDashOffset' },
        tickOpacity: { part: 'ticks', vgProp: 'opacity' },
        tickSize: null,
        tickWidth: { part: 'ticks', vgProp: 'strokeWidth' },
      };
      function El(e) {
        return e && e['condition'];
      }
      const Sl = ['domain', 'grid', 'labels', 'ticks', 'title'];
      const Bl = {
        grid: 'grid',
        gridCap: 'grid',
        gridColor: 'grid',
        gridDash: 'grid',
        gridDashOffset: 'grid',
        gridOpacity: 'grid',
        gridScale: 'grid',
        gridWidth: 'grid',
        orient: 'main',
        bandPosition: 'both',
        aria: 'main',
        description: 'main',
        domain: 'main',
        domainCap: 'main',
        domainColor: 'main',
        domainDash: 'main',
        domainDashOffset: 'main',
        domainOpacity: 'main',
        domainWidth: 'main',
        format: 'main',
        formatType: 'main',
        labelAlign: 'main',
        labelAngle: 'main',
        labelBaseline: 'main',
        labelBound: 'main',
        labelColor: 'main',
        labelFlush: 'main',
        labelFlushOffset: 'main',
        labelFont: 'main',
        labelFontSize: 'main',
        labelFontStyle: 'main',
        labelFontWeight: 'main',
        labelLimit: 'main',
        labelLineHeight: 'main',
        labelOffset: 'main',
        labelOpacity: 'main',
        labelOverlap: 'main',
        labelPadding: 'main',
        labels: 'main',
        labelSeparation: 'main',
        maxExtent: 'main',
        minExtent: 'main',
        offset: 'both',
        position: 'main',
        tickCap: 'main',
        tickColor: 'main',
        tickDash: 'main',
        tickDashOffset: 'main',
        tickMinStep: 'both',
        tickOffset: 'both',
        tickOpacity: 'main',
        tickRound: 'both',
        ticks: 'main',
        tickSize: 'main',
        tickWidth: 'both',
        title: 'main',
        titleAlign: 'main',
        titleAnchor: 'main',
        titleAngle: 'main',
        titleBaseline: 'main',
        titleColor: 'main',
        titleFont: 'main',
        titleFontSize: 'main',
        titleFontStyle: 'main',
        titleFontWeight: 'main',
        titleLimit: 'main',
        titleLineHeight: 'main',
        titleOpacity: 'main',
        titlePadding: 'main',
        titleX: 'main',
        titleY: 'main',
        encode: 'both',
        scale: 'both',
        tickBand: 'both',
        tickCount: 'both',
        tickExtra: 'both',
        translate: 'both',
        values: 'both',
        zindex: 'both',
      };
      const _l = {
        orient: 1,
        aria: 1,
        bandPosition: 1,
        description: 1,
        domain: 1,
        domainCap: 1,
        domainColor: 1,
        domainDash: 1,
        domainDashOffset: 1,
        domainOpacity: 1,
        domainWidth: 1,
        format: 1,
        formatType: 1,
        grid: 1,
        gridCap: 1,
        gridColor: 1,
        gridDash: 1,
        gridDashOffset: 1,
        gridOpacity: 1,
        gridWidth: 1,
        labelAlign: 1,
        labelAngle: 1,
        labelBaseline: 1,
        labelBound: 1,
        labelColor: 1,
        labelFlush: 1,
        labelFlushOffset: 1,
        labelFont: 1,
        labelFontSize: 1,
        labelFontStyle: 1,
        labelFontWeight: 1,
        labelLimit: 1,
        labelLineHeight: 1,
        labelOffset: 1,
        labelOpacity: 1,
        labelOverlap: 1,
        labelPadding: 1,
        labels: 1,
        labelSeparation: 1,
        maxExtent: 1,
        minExtent: 1,
        offset: 1,
        position: 1,
        tickBand: 1,
        tickCap: 1,
        tickColor: 1,
        tickCount: 1,
        tickDash: 1,
        tickDashOffset: 1,
        tickExtra: 1,
        tickMinStep: 1,
        tickOffset: 1,
        tickOpacity: 1,
        tickRound: 1,
        ticks: 1,
        tickSize: 1,
        tickWidth: 1,
        title: 1,
        titleAlign: 1,
        titleAnchor: 1,
        titleAngle: 1,
        titleBaseline: 1,
        titleColor: 1,
        titleFont: 1,
        titleFontSize: 1,
        titleFontStyle: 1,
        titleFontWeight: 1,
        titleLimit: 1,
        titleLineHeight: 1,
        titleOpacity: 1,
        titlePadding: 1,
        titleX: 1,
        titleY: 1,
        translate: 1,
        values: 1,
        zindex: 1,
      };
      const Pl = Object.assign(Object.assign({}, _l), {
        style: 1,
        labelExpr: 1,
        encoding: 1,
      });
      function zl(e) {
        return !!Pl[e];
      }
      const Nl = yn(Pl);
      const Ml = {
        axis: 1,
        axisBand: 1,
        axisBottom: 1,
        axisDiscrete: 1,
        axisLeft: 1,
        axisPoint: 1,
        axisQuantitative: 1,
        axisRight: 1,
        axisTemporal: 1,
        axisTop: 1,
        axisX: 1,
        axisXBand: 1,
        axisXDiscrete: 1,
        axisXPoint: 1,
        axisXQuantitative: 1,
        axisXTemporal: 1,
        axisY: 1,
        axisYBand: 1,
        axisYDiscrete: 1,
        axisYPoint: 1,
        axisYQuantitative: 1,
        axisYTemporal: 1,
      };
      const Tl = yn(Ml);
      function Ll(e) {
        return 'mark' in e;
      }
      class Rl {
        constructor(e, n) {
          this.name = e;
          this.run = n;
        }
        hasMatchingType(e) {
          if (Ll(e)) {
            return Yu(e.mark) === this.name;
          }
          return false;
        }
      }
      var ql =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Ul(e, n) {
        const t = e && e[n];
        if (t) {
          if (F(t)) {
            return an(t, (e) => !!e.field);
          } else {
            return Lc(t) || Nc(t);
          }
        }
        return false;
      }
      function Wl(e) {
        return an(Pt, (n) => {
          if (Ul(e, n)) {
            const t = e[n];
            if (F(t)) {
              return an(t, (e) => !!e.aggregate);
            } else {
              const e = ml(t);
              return e && !!e.aggregate;
            }
          }
          return false;
        });
      }
      function Il(e, n) {
        const t = [];
        const i = [];
        const r = [];
        const s = [];
        const o = {};
        Ql(e, (a, u) => {
          if (Lc(a)) {
            const { field: c, aggregate: l, bin: f, timeUnit: d } = a,
              p = ql(a, ['field', 'aggregate', 'bin', 'timeUnit']);
            if (l || d || f) {
              const e = fl(a);
              const g = e === null || e === void 0 ? void 0 : e.title;
              let m = el(a, { forAs: true });
              const h = Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    g ? [] : { title: ll(a, n, { allowDisabling: true }) }
                  ),
                  p
                ),
                { field: m }
              );
              if (l) {
                let e;
                if (Hi(l)) {
                  e = 'argmax';
                  m = el({ op: 'argmax', field: l.argmax }, { forAs: true });
                  h.field = `${m}.${c}`;
                } else if (Ii(l)) {
                  e = 'argmin';
                  m = el({ op: 'argmin', field: l.argmin }, { forAs: true });
                  h.field = `${m}.${c}`;
                } else if (l !== 'boxplot' && l !== 'errorbar' && l !== 'errorband') {
                  e = l;
                }
                if (e) {
                  const n = { op: e, as: m };
                  if (c) {
                    n.field = c;
                  }
                  s.push(n);
                }
              } else {
                t.push(m);
                if (Gc(a) && nr(f)) {
                  i.push({ bin: f, field: c, as: m });
                  t.push(el(a, { binSuffix: 'end' }));
                  if (kl(a, u)) {
                    t.push(el(a, { binSuffix: 'range' }));
                  }
                  if (bi(u)) {
                    const e = { field: `${m}_end` };
                    o[`${u}2`] = e;
                  }
                  h.bin = 'binned';
                  if (!Yt(u)) {
                    h['type'] = ha;
                  }
                } else if (d) {
                  r.push({ timeUnit: d, field: c, as: m });
                  const e = Gc(a) && a.type !== ya && 'time';
                  if (e) {
                    if (u === gt || u === yt) {
                      h['formatType'] = e;
                    } else if (Si(u)) {
                      h['legend'] = Object.assign({ formatType: e }, h['legend']);
                    } else if (bi(u)) {
                      h['axis'] = Object.assign({ formatType: e }, h['axis']);
                    }
                  }
                }
              }
              o[u] = h;
            } else {
              t.push(c);
              o[u] = e[u];
            }
          } else {
            o[u] = e[u];
          }
        });
        return { bins: i, timeUnits: r, aggregate: s, groupby: t, encoding: o };
      }
      function Hl(e, n, t) {
        const i = Ni(n, t);
        if (!i) {
          return false;
        } else if (i === 'binned') {
          const t = e[n === Vn ? Hn : Gn];
          if (Lc(t) && Lc(e[n]) && tr(t.bin)) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      }
      function Gl(e, n, t, i) {
        return yn(e).reduce((r, s) => {
          if (!Gt(s)) {
            xo(ws(s));
            return r;
          }
          const o = e[s];
          if (s === 'angle' && n === 'arc' && !e.theta) {
            xo(fs);
            s = Jn;
          }
          if (!Hl(e, s, n)) {
            xo(Os(s, n));
            return r;
          }
          if (s === at && n === 'line') {
            const n = ml(e[s]);
            if (n === null || n === void 0 ? void 0 : n.aggregate) {
              xo(xs);
              return r;
            }
          }
          if (s === it && (t ? 'fill' in e : 'stroke' in e)) {
            xo(bs('encoding', { fill: 'fill' in e, stroke: 'stroke' in e }));
            return r;
          }
          if (s === ht || (s === mt && !F(o) && !Vc(o)) || (s === yt && F(o))) {
            if (o) {
              r[s] = J(o).reduce((e, n) => {
                if (!Lc(n)) {
                  xo(vs(n, s));
                } else {
                  e.push(xl(n, s));
                }
                return e;
              }, []);
            }
          } else {
            if (s === yt && o === null) {
              r[s] = null;
            } else if (!Lc(o) && !qc(o) && !Vc(o) && !zc(o) && !fr(o)) {
              xo(vs(o, s));
              return r;
            }
            r[s] = bl(o, s, i);
          }
          return r;
        }, {});
      }
      function Vl(e, n) {
        const t = {};
        for (const i of yn(e)) {
          const r = bl(e[i], i, n, { compositeMark: true });
          t[i] = r;
        }
        return t;
      }
      function Yl(e) {
        const n = [];
        for (const t of yn(e)) {
          if (Ul(e, t)) {
            const i = e[t];
            const r = J(i);
            for (const e of r) {
              if (Lc(e)) {
                n.push(e);
              } else if (Nc(e)) {
                n.push(e.condition);
              }
            }
          }
        }
        return n;
      }
      function Ql(e, n, t) {
        if (!e) {
          return;
        }
        for (const i of yn(e)) {
          const r = e[i];
          if (F(r)) {
            for (const e of r) {
              n.call(t, e, i);
            }
          } else {
            n.call(t, r, i);
          }
        }
      }
      function Xl(e, n, t, i) {
        if (!e) {
          return t;
        }
        return yn(e).reduce((t, r) => {
          const s = e[r];
          if (F(s)) {
            return s.reduce((e, t) => n.call(i, e, t, r), t);
          } else {
            return n.call(i, t, s, r);
          }
        }, t);
      }
      function Jl(e, n) {
        return yn(n).reduce((t, i) => {
          switch (i) {
            case Hn:
            case Gn:
            case vt:
            case Ot:
            case xt:
            case Vn:
            case Yn:
            case Jn:
            case Kn:
            case Qn:
            case Xn:
            case Zn:
            case et:
            case nt:
            case tt:
            case gt:
            case ot:
            case ut:
            case yt:
              return t;
            case mt:
              if (e === 'line' || e === 'trail') {
                return t;
              }
            case ht:
            case bt: {
              const e = n[i];
              if (F(e) || Lc(e)) {
                for (const n of J(e)) {
                  if (!n.aggregate) {
                    t.push(el(n, {}));
                  }
                }
              }
              return t;
            }
            case at:
              if (e === 'trail') {
                return t;
              }
            case it:
            case rt:
            case st:
            case ct:
            case lt:
            case ft:
            case pt:
            case dt: {
              const e = ml(n[i]);
              if (e && !e.aggregate) {
                t.push(el(e, {}));
              }
              return t;
            }
          }
        }, []);
      }
      var Kl =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Zl(e) {
        const { tooltip: n } = e,
          t = Kl(e, ['tooltip']);
        if (!n) {
          return { filteredEncoding: t };
        }
        let i;
        let r;
        if (F(n)) {
          for (const e of n) {
            if (e.aggregate) {
              if (!i) {
                i = [];
              }
              i.push(e);
            } else {
              if (!r) {
                r = [];
              }
              r.push(e);
            }
          }
          if (i) {
            t.tooltip = i;
          }
        } else {
          if (n['aggregate']) {
            t.tooltip = n;
          } else {
            r = n;
          }
        }
        if (F(r) && r.length === 1) {
          r = r[0];
        }
        return { customTooltipWithoutAggregatedField: r, filteredEncoding: t };
      }
      function ef(e, n, t, i = true) {
        if ('tooltip' in t) {
          return { tooltip: t.tooltip };
        }
        const r = e.map(({ fieldPrefix: e, titlePrefix: t }) => {
          const r = i ? ` of ${nf(n)}` : '';
          return {
            field: e + n.field,
            type: n.type,
            title: fr(t) ? { signal: `${t}"${escape(r)}"` } : t + r,
          };
        });
        const s = Yl(t).map(Kc);
        return { tooltip: [...r, ...fn(s, rn)] };
      }
      function nf(e) {
        const { title: n, field: t } = e;
        return _n(n, t);
      }
      function tf(e, n, t, i, r) {
        const { scale: s, axis: o } = t;
        return ({
          partName: a,
          mark: u,
          positionPrefix: c,
          endPositionPrefix: l = undefined,
          extraEncoding: f = {},
        }) => {
          const d = nf(t);
          return rf(e, a, r, {
            mark: u,
            encoding: Object.assign(
              Object.assign(
                Object.assign(
                  {
                    [n]: Object.assign(
                      Object.assign(
                        Object.assign(
                          { field: `${c}_${t.field}`, type: t.type },
                          d !== undefined ? { title: d } : {}
                        ),
                        s !== undefined ? { scale: s } : {}
                      ),
                      o !== undefined ? { axis: o } : {}
                    ),
                  },
                  je(l) ? { [`${n}2`]: { field: `${l}_${t.field}` } } : {}
                ),
                i
              ),
              f
            ),
          });
        };
      }
      function rf(e, n, t, i) {
        const { clip: r, color: s, opacity: o } = e;
        const a = e.type;
        if (e[n] || (e[n] === undefined && t[n])) {
          return [
            Object.assign(Object.assign({}, i), {
              mark: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(Object.assign({}, t[n]), r ? { clip: r } : {}),
                        s ? { color: s } : {}
                      ),
                      o ? { opacity: o } : {}
                    ),
                    Eu(i.mark) ? i.mark : { type: i.mark }
                  ),
                  { style: `${a}-${n}` }
                ),
                ye(e[n]) ? {} : e[n]
              ),
            }),
          ];
        }
        return [];
      }
      function sf(e, n, t) {
        const { encoding: i } = e;
        const r = n === 'vertical' ? 'y' : 'x';
        const s = i[r];
        const o = i[`${r}2`];
        const a = i[`${r}Error`];
        const u = i[`${r}Error2`];
        return {
          continuousAxisChannelDef: of(s, t),
          continuousAxisChannelDef2: of(o, t),
          continuousAxisChannelDefError: of(a, t),
          continuousAxisChannelDefError2: of(u, t),
          continuousAxis: r,
        };
      }
      function of(e, n) {
        if (e === null || e === void 0 ? void 0 : e.aggregate) {
          const { aggregate: t } = e,
            i = Kl(e, ['aggregate']);
          if (t !== n) {
            xo(ro(t, n));
          }
          return i;
        } else {
          return e;
        }
      }
      function af(e, n) {
        const { mark: t, encoding: i } = e;
        const { x: r, y: s } = i;
        if (Eu(t) && t.orient) {
          return t.orient;
        }
        if (Uc(r)) {
          if (Uc(s)) {
            const e = Lc(r) && r.aggregate;
            const t = Lc(s) && s.aggregate;
            if (!e && t === n) {
              return 'vertical';
            } else if (!t && e === n) {
              return 'horizontal';
            } else if (e === n && t === n) {
              throw new Error('Both x and y cannot have aggregate');
            } else {
              if (Al(s) && !Al(r)) {
                return 'horizontal';
              }
              return 'vertical';
            }
          }
          return 'horizontal';
        } else if (Uc(s)) {
          return 'vertical';
        } else {
          throw new Error(`Need a valid continuous axis for ${n}s`);
        }
      }
      var uf =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const cf = 'boxplot';
      const lf = ['box', 'median', 'outliers', 'rule', 'ticks'];
      const ff = new Rl(cf, pf);
      function df(e) {
        if (Oe(e)) {
          return 'tukey';
        }
        return e;
      }
      function pf(e, { config: n }) {
        var t, i;
        e = Object.assign(Object.assign({}, e), { encoding: Vl(e.encoding, n) });
        const { mark: r, encoding: s, params: o, projection: a } = e,
          u = uf(e, ['mark', 'encoding', 'params', 'projection']);
        const c = Eu(r) ? r : { type: r };
        if (o) {
          xo(Vr('boxplot'));
        }
        const l = (t = c.extent) !== null && t !== void 0 ? t : n.boxplot.extent;
        const f = Er('size', c, n);
        const d = df(l);
        const {
          bins: p,
          timeUnits: g,
          transform: m,
          continuousAxisChannelDef: h,
          continuousAxis: b,
          groupby: y,
          aggregate: v,
          encodingWithoutContinuousAxis: x,
          ticksOrient: O,
          boxOrient: w,
          customTooltipWithoutAggregatedField: j,
        } = mf(e, l, n);
        const { color: A, size: D } = x,
          F = uf(x, ['color', 'size']);
        const k = (e) => tf(c, b, h, e, n.boxplot);
        const C = k(F);
        const E = k(x);
        const S = k(Object.assign(Object.assign({}, F), D ? { size: D } : {}));
        const B = ef(
          [
            {
              fieldPrefix: d === 'min-max' ? 'upper_whisker_' : 'max_',
              titlePrefix: 'Max',
            },
            { fieldPrefix: 'upper_box_', titlePrefix: 'Q3' },
            { fieldPrefix: 'mid_box_', titlePrefix: 'Median' },
            { fieldPrefix: 'lower_box_', titlePrefix: 'Q1' },
            {
              fieldPrefix: d === 'min-max' ? 'lower_whisker_' : 'min_',
              titlePrefix: 'Min',
            },
          ],
          h,
          x
        );
        const _ = {
          type: 'tick',
          color: 'black',
          opacity: 1,
          orient: O,
          invalid: null,
          aria: false,
        };
        const P =
          d === 'min-max'
            ? B
            : ef(
                [
                  { fieldPrefix: 'upper_whisker_', titlePrefix: 'Upper Whisker' },
                  { fieldPrefix: 'lower_whisker_', titlePrefix: 'Lower Whisker' },
                ],
                h,
                x
              );
        const z = [
          ...C({
            partName: 'rule',
            mark: { type: 'rule', invalid: null, aria: false },
            positionPrefix: 'lower_whisker',
            endPositionPrefix: 'lower_box',
            extraEncoding: P,
          }),
          ...C({
            partName: 'rule',
            mark: { type: 'rule', invalid: null, aria: false },
            positionPrefix: 'upper_box',
            endPositionPrefix: 'upper_whisker',
            extraEncoding: P,
          }),
          ...C({
            partName: 'ticks',
            mark: _,
            positionPrefix: 'lower_whisker',
            extraEncoding: P,
          }),
          ...C({
            partName: 'ticks',
            mark: _,
            positionPrefix: 'upper_whisker',
            extraEncoding: P,
          }),
        ];
        const N = [
          ...(d !== 'tukey' ? z : []),
          ...E({
            partName: 'box',
            mark: Object.assign(Object.assign({ type: 'bar' }, f ? { size: f } : {}), {
              orient: w,
              invalid: null,
              ariaRoleDescription: 'box',
            }),
            positionPrefix: 'lower_box',
            endPositionPrefix: 'upper_box',
            extraEncoding: B,
          }),
          ...S({
            partName: 'median',
            mark: Object.assign(
              Object.assign(
                Object.assign(
                  { type: 'tick', invalid: null },
                  $(n.boxplot.median) && n.boxplot.median.color
                    ? { color: n.boxplot.median.color }
                    : {}
                ),
                f ? { size: f } : {}
              ),
              { orient: O, aria: false }
            ),
            positionPrefix: 'mid_box',
            extraEncoding: B,
          }),
        ];
        if (d === 'min-max') {
          return Object.assign(Object.assign({}, u), {
            transform: ((i = u.transform) !== null && i !== void 0 ? i : []).concat(m),
            layer: N,
          });
        }
        const M = `datum["lower_box_${h.field}"]`;
        const T = `datum["upper_box_${h.field}"]`;
        const L = `(${T} - ${M})`;
        const R = `${M} - ${l} * ${L}`;
        const q = `${T} + ${l} * ${L}`;
        const U = `datum["${h.field}"]`;
        const W = { joinaggregate: gf(h.field), groupby: y };
        const I = {
          transform: [
            { filter: `(${R} <= ${U}) && (${U} <= ${q})` },
            {
              aggregate: [
                { op: 'min', field: h.field, as: `lower_whisker_${h.field}` },
                { op: 'max', field: h.field, as: `upper_whisker_${h.field}` },
                {
                  op: 'min',
                  field: `lower_box_${h.field}`,
                  as: `lower_box_${h.field}`,
                },
                {
                  op: 'max',
                  field: `upper_box_${h.field}`,
                  as: `upper_box_${h.field}`,
                },
                ...v,
              ],
              groupby: y,
            },
          ],
          layer: z,
        };
        const { tooltip: H } = F,
          G = uf(F, ['tooltip']);
        const { scale: V, axis: Y } = h;
        const Q = nf(h);
        const X = nn(Y, ['title']);
        const J = rf(c, 'outliers', n.boxplot, {
          transform: [{ filter: `(${U} < ${R}) || (${U} > ${q})` }],
          mark: 'point',
          encoding: Object.assign(
            Object.assign(
              Object.assign(
                {
                  [b]: Object.assign(
                    Object.assign(
                      Object.assign(
                        { field: h.field, type: h.type },
                        Q !== undefined ? { title: Q } : {}
                      ),
                      V !== undefined ? { scale: V } : {}
                    ),
                    bn(X) ? {} : { axis: X }
                  ),
                },
                G
              ),
              A ? { color: A } : {}
            ),
            j ? { tooltip: j } : {}
          ),
        })[0];
        let K;
        const Z = [...p, ...g, W];
        if (J) {
          K = { transform: Z, layer: [J, I] };
        } else {
          K = I;
          K.transform.unshift(...Z);
        }
        return Object.assign(Object.assign({}, u), {
          layer: [K, { transform: m, layer: N }],
        });
      }
      function gf(e) {
        return [
          { op: 'q1', field: e, as: `lower_box_${e}` },
          { op: 'q3', field: e, as: `upper_box_${e}` },
        ];
      }
      function mf(e, n, t) {
        const i = af(e, cf);
        const { continuousAxisChannelDef: r, continuousAxis: s } = sf(e, i, cf);
        const o = r.field;
        const a = df(n);
        const u = [
          ...gf(o),
          { op: 'median', field: o, as: `mid_box_${o}` },
          {
            op: 'min',
            field: o,
            as: (a === 'min-max' ? 'lower_whisker_' : 'min_') + o,
          },
          {
            op: 'max',
            field: o,
            as: (a === 'min-max' ? 'upper_whisker_' : 'max_') + o,
          },
        ];
        const c =
          a === 'min-max' || a === 'tukey'
            ? []
            : [
                {
                  calculate: `datum["upper_box_${o}"] - datum["lower_box_${o}"]`,
                  as: `iqr_${o}`,
                },
                {
                  calculate: `min(datum["upper_box_${o}"] + datum["iqr_${o}"] * ${n}, datum["max_${o}"])`,
                  as: `upper_whisker_${o}`,
                },
                {
                  calculate: `max(datum["lower_box_${o}"] - datum["iqr_${o}"] * ${n}, datum["min_${o}"])`,
                  as: `lower_whisker_${o}`,
                },
              ];
        const l = e.encoding,
          f = s,
          d = l[f],
          p = uf(l, [typeof f === 'symbol' ? f : f + '']);
        const { customTooltipWithoutAggregatedField: g, filteredEncoding: m } = Zl(p);
        const {
          bins: h,
          timeUnits: b,
          aggregate: y,
          groupby: v,
          encoding: x,
        } = Il(m, t);
        const O = i === 'vertical' ? 'horizontal' : 'vertical';
        const w = i;
        const j = [...h, ...b, { aggregate: [...y, ...u], groupby: v }, ...c];
        return {
          bins: h,
          timeUnits: b,
          transform: j,
          groupby: v,
          aggregate: y,
          continuousAxisChannelDef: r,
          continuousAxis: s,
          encodingWithoutContinuousAxis: x,
          ticksOrient: O,
          boxOrient: w,
          customTooltipWithoutAggregatedField: g,
        };
      }
      var hf =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const bf = 'errorbar';
      const yf = ['ticks', 'rule'];
      const vf = new Rl(bf, xf);
      function xf(e, { config: n }) {
        e = Object.assign(Object.assign({}, e), { encoding: Vl(e.encoding, n) });
        const {
          transform: t,
          continuousAxisChannelDef: i,
          continuousAxis: r,
          encodingWithoutContinuousAxis: s,
          ticksOrient: o,
          markDef: a,
          outerSpec: u,
          tooltipEncoding: c,
        } = Df(e, bf, n);
        delete s['size'];
        const l = tf(a, r, i, s, n.errorbar);
        const f = a.thickness;
        const d = a.size;
        const p = Object.assign(
          Object.assign(
            { type: 'tick', orient: o, aria: false },
            f !== undefined ? { thickness: f } : {}
          ),
          d !== undefined ? { size: d } : {}
        );
        const g = [
          ...l({
            partName: 'ticks',
            mark: p,
            positionPrefix: 'lower',
            extraEncoding: c,
          }),
          ...l({
            partName: 'ticks',
            mark: p,
            positionPrefix: 'upper',
            extraEncoding: c,
          }),
          ...l({
            partName: 'rule',
            mark: Object.assign(
              { type: 'rule', ariaRoleDescription: 'errorbar' },
              f !== undefined ? { size: f } : {}
            ),
            positionPrefix: 'lower',
            endPositionPrefix: 'upper',
            extraEncoding: c,
          }),
        ];
        return Object.assign(
          Object.assign(Object.assign({}, u), { transform: t }),
          g.length > 1 ? { layer: g } : Object.assign({}, g[0])
        );
      }
      function Of(e, n) {
        const { encoding: t } = e;
        if (wf(t)) {
          return { orient: af(e, n), inputType: 'raw' };
        }
        const i = jf(t);
        const r = Af(t);
        const s = t.x;
        const o = t.y;
        if (i) {
          if (r) {
            throw new Error(
              `${n} cannot be both type aggregated-upper-lower and aggregated-error`
            );
          }
          const e = t.x2;
          const i = t.y2;
          if (Hc(e) && Hc(i)) {
            throw new Error(`${n} cannot have both x2 and y2`);
          } else if (Hc(e)) {
            if (Uc(s)) {
              return { orient: 'horizontal', inputType: 'aggregated-upper-lower' };
            } else {
              throw new Error(`Both x and x2 have to be quantitative in ${n}`);
            }
          } else if (Hc(i)) {
            if (Uc(o)) {
              return { orient: 'vertical', inputType: 'aggregated-upper-lower' };
            } else {
              throw new Error(`Both y and y2 have to be quantitative in ${n}`);
            }
          }
          throw new Error('No ranged axis');
        } else {
          const e = t.xError;
          const i = t.xError2;
          const r = t.yError;
          const a = t.yError2;
          if (Hc(i) && !Hc(e)) {
            throw new Error(`${n} cannot have xError2 without xError`);
          }
          if (Hc(a) && !Hc(r)) {
            throw new Error(`${n} cannot have yError2 without yError`);
          }
          if (Hc(e) && Hc(r)) {
            throw new Error(
              `${n} cannot have both xError and yError with both are quantiative`
            );
          } else if (Hc(e)) {
            if (Uc(s)) {
              return { orient: 'horizontal', inputType: 'aggregated-error' };
            } else {
              throw new Error(
                'All x, xError, and xError2 (if exist) have to be quantitative'
              );
            }
          } else if (Hc(r)) {
            if (Uc(o)) {
              return { orient: 'vertical', inputType: 'aggregated-error' };
            } else {
              throw new Error(
                'All y, yError, and yError2 (if exist) have to be quantitative'
              );
            }
          }
          throw new Error('No ranged axis');
        }
      }
      function wf(e) {
        return (
          (Hc(e.x) || Hc(e.y)) &&
          !Hc(e.x2) &&
          !Hc(e.y2) &&
          !Hc(e.xError) &&
          !Hc(e.xError2) &&
          !Hc(e.yError) &&
          !Hc(e.yError2)
        );
      }
      function jf(e) {
        return Hc(e.x2) || Hc(e.y2);
      }
      function Af(e) {
        return Hc(e.xError) || Hc(e.xError2) || Hc(e.yError) || Hc(e.yError2);
      }
      function Df(e, n, t) {
        var i;
        const { mark: r, encoding: s, params: o, projection: a } = e,
          u = hf(e, ['mark', 'encoding', 'params', 'projection']);
        const c = Eu(r) ? r : { type: r };
        if (o) {
          xo(Vr(n));
        }
        const { orient: l, inputType: f } = Of(e, n);
        const {
          continuousAxisChannelDef: d,
          continuousAxisChannelDef2: p,
          continuousAxisChannelDefError: g,
          continuousAxisChannelDefError2: m,
          continuousAxis: h,
        } = sf(e, l, n);
        const {
          errorBarSpecificAggregate: b,
          postAggregateCalculates: y,
          tooltipSummary: v,
          tooltipTitleWithFieldName: x,
        } = Ff(c, d, p, g, m, f, n, t);
        const O = s,
          w = h,
          j = O[w],
          A = h === 'x' ? 'x2' : 'y2',
          D = O[A],
          F = h === 'x' ? 'xError' : 'yError',
          $ = O[F],
          k = h === 'x' ? 'xError2' : 'yError2',
          C = O[k],
          E = hf(O, [
            typeof w === 'symbol' ? w : w + '',
            typeof A === 'symbol' ? A : A + '',
            typeof F === 'symbol' ? F : F + '',
            typeof k === 'symbol' ? k : k + '',
          ]);
        const {
          bins: S,
          timeUnits: B,
          aggregate: _,
          groupby: P,
          encoding: z,
        } = Il(E, t);
        const N = [..._, ...b];
        const M = f !== 'raw' ? [] : P;
        const T = ef(v, d, z, x);
        return {
          transform: [
            ...((i = u.transform) !== null && i !== void 0 ? i : []),
            ...S,
            ...B,
            ...(N.length === 0 ? [] : [{ aggregate: N, groupby: M }]),
            ...y,
          ],
          groupby: M,
          continuousAxisChannelDef: d,
          continuousAxis: h,
          encodingWithoutContinuousAxis: z,
          ticksOrient: l === 'vertical' ? 'horizontal' : 'vertical',
          markDef: c,
          outerSpec: u,
          tooltipEncoding: T,
        };
      }
      function Ff(e, n, t, i, r, s, o, a) {
        let u = [];
        let c = [];
        const l = n.field;
        let f;
        let d = false;
        if (s === 'raw') {
          const n = e.center
            ? e.center
            : e.extent
            ? e.extent === 'iqr'
              ? 'median'
              : 'mean'
            : a.errorbar.center;
          const t = e.extent ? e.extent : n === 'mean' ? 'stderr' : 'iqr';
          if ((n === 'median') !== (t === 'iqr')) {
            xo(io(n, t, o));
          }
          if (t === 'stderr' || t === 'stdev') {
            u = [
              { op: t, field: l, as: `extent_${l}` },
              { op: n, field: l, as: `center_${l}` },
            ];
            c = [
              {
                calculate: `datum["center_${l}"] + datum["extent_${l}"]`,
                as: `upper_${l}`,
              },
              {
                calculate: `datum["center_${l}"] - datum["extent_${l}"]`,
                as: `lower_${l}`,
              },
            ];
            f = [
              { fieldPrefix: 'center_', titlePrefix: Dn(n) },
              { fieldPrefix: 'upper_', titlePrefix: $f(n, t, '+') },
              { fieldPrefix: 'lower_', titlePrefix: $f(n, t, '-') },
            ];
            d = true;
          } else {
            let e;
            let n;
            let i;
            if (t === 'ci') {
              e = 'mean';
              n = 'ci0';
              i = 'ci1';
            } else {
              e = 'median';
              n = 'q1';
              i = 'q3';
            }
            u = [
              { op: n, field: l, as: `lower_${l}` },
              { op: i, field: l, as: `upper_${l}` },
              { op: e, field: l, as: `center_${l}` },
            ];
            f = [
              {
                fieldPrefix: 'upper_',
                titlePrefix: ll({ field: l, aggregate: i, type: 'quantitative' }, a, {
                  allowDisabling: false,
                }),
              },
              {
                fieldPrefix: 'lower_',
                titlePrefix: ll({ field: l, aggregate: n, type: 'quantitative' }, a, {
                  allowDisabling: false,
                }),
              },
              {
                fieldPrefix: 'center_',
                titlePrefix: ll({ field: l, aggregate: e, type: 'quantitative' }, a, {
                  allowDisabling: false,
                }),
              },
            ];
          }
        } else {
          if (e.center || e.extent) {
            xo(to(e.center, e.extent));
          }
          if (s === 'aggregated-upper-lower') {
            f = [];
            c = [
              { calculate: `datum["${t.field}"]`, as: `upper_${l}` },
              { calculate: `datum["${l}"]`, as: `lower_${l}` },
            ];
          } else if (s === 'aggregated-error') {
            f = [{ fieldPrefix: '', titlePrefix: l }];
            c = [
              { calculate: `datum["${l}"] + datum["${i.field}"]`, as: `upper_${l}` },
            ];
            if (r) {
              c.push({
                calculate: `datum["${l}"] + datum["${r.field}"]`,
                as: `lower_${l}`,
              });
            } else {
              c.push({
                calculate: `datum["${l}"] - datum["${i.field}"]`,
                as: `lower_${l}`,
              });
            }
          }
          for (const e of c) {
            f.push({
              fieldPrefix: e.as.substring(0, 6),
              titlePrefix: En(En(e.calculate, 'datum["', ''), '"]', ''),
            });
          }
        }
        return {
          postAggregateCalculates: c,
          errorBarSpecificAggregate: u,
          tooltipSummary: f,
          tooltipTitleWithFieldName: d,
        };
      }
      function $f(e, n, t) {
        return `${Dn(e)} ${t} ${n}`;
      }
      const kf = 'errorband';
      const Cf = ['band', 'borders'];
      const Ef = new Rl(kf, Sf);
      function Sf(e, { config: n }) {
        e = Object.assign(Object.assign({}, e), { encoding: Vl(e.encoding, n) });
        const {
          transform: t,
          continuousAxisChannelDef: i,
          continuousAxis: r,
          encodingWithoutContinuousAxis: s,
          markDef: o,
          outerSpec: a,
          tooltipEncoding: u,
        } = Df(e, kf, n);
        const c = o;
        const l = tf(c, r, i, s, n.errorband);
        const f = e.encoding.x !== undefined && e.encoding.y !== undefined;
        let d = { type: f ? 'area' : 'rect' };
        let p = { type: f ? 'line' : 'rule' };
        const g = Object.assign(
          Object.assign({}, c.interpolate ? { interpolate: c.interpolate } : {}),
          c.tension && c.interpolate ? { tension: c.tension } : {}
        );
        if (f) {
          d = Object.assign(Object.assign(Object.assign({}, d), g), {
            ariaRoleDescription: 'errorband',
          });
          p = Object.assign(Object.assign(Object.assign({}, p), g), { aria: false });
        } else if (c.interpolate) {
          xo(so('interpolate'));
        } else if (c.tension) {
          xo(so('tension'));
        }
        return Object.assign(Object.assign({}, a), {
          transform: t,
          layer: [
            ...l({
              partName: 'band',
              mark: d,
              positionPrefix: 'lower',
              endPositionPrefix: 'upper',
              extraEncoding: u,
            }),
            ...l({
              partName: 'borders',
              mark: p,
              positionPrefix: 'lower',
              extraEncoding: u,
            }),
            ...l({
              partName: 'borders',
              mark: p,
              positionPrefix: 'upper',
              extraEncoding: u,
            }),
          ],
        });
      }
      const Bf = {};
      function _f(e, n, t) {
        const i = new Rl(e, n);
        Bf[e] = { normalizer: i, parts: t };
      }
      function Pf(e) {
        delete Bf[e];
      }
      function zf() {
        return yn(Bf);
      }
      _f(cf, pf, lf);
      _f(bf, xf, yf);
      _f(kf, Sf, Cf);
      const Nf = [
        'gradientHorizontalMaxLength',
        'gradientHorizontalMinLength',
        'gradientVerticalMaxLength',
        'gradientVerticalMinLength',
        'unselectedOpacity',
      ];
      const Mf = {
        titleAlign: 'align',
        titleAnchor: 'anchor',
        titleAngle: 'angle',
        titleBaseline: 'baseline',
        titleColor: 'color',
        titleFont: 'font',
        titleFontSize: 'fontSize',
        titleFontStyle: 'fontStyle',
        titleFontWeight: 'fontWeight',
        titleLimit: 'limit',
        titleLineHeight: 'lineHeight',
        titleOrient: 'orient',
        titlePadding: 'offset',
      };
      const Tf = {
        labelAlign: 'align',
        labelAnchor: 'anchor',
        labelAngle: 'angle',
        labelBaseline: 'baseline',
        labelColor: 'color',
        labelFont: 'font',
        labelFontSize: 'fontSize',
        labelFontStyle: 'fontStyle',
        labelFontWeight: 'fontWeight',
        labelLimit: 'limit',
        labelLineHeight: 'lineHeight',
        labelOrient: 'orient',
        labelPadding: 'offset',
      };
      const Lf = yn(Mf);
      const Rf = yn(Tf);
      const qf = { header: 1, headerRow: 1, headerColumn: 1, headerFacet: 1 };
      const Uf = yn(qf);
      const Wf = [
        'size',
        'shape',
        'fill',
        'stroke',
        'strokeDash',
        'strokeWidth',
        'opacity',
      ];
      const If = {
        gradientHorizontalMaxLength: 200,
        gradientHorizontalMinLength: 100,
        gradientVerticalMaxLength: 200,
        gradientVerticalMinLength: 64,
        unselectedOpacity: 0.35,
      };
      const Hf = {
        aria: 1,
        clipHeight: 1,
        columnPadding: 1,
        columns: 1,
        cornerRadius: 1,
        description: 1,
        direction: 1,
        fillColor: 1,
        format: 1,
        formatType: 1,
        gradientLength: 1,
        gradientOpacity: 1,
        gradientStrokeColor: 1,
        gradientStrokeWidth: 1,
        gradientThickness: 1,
        gridAlign: 1,
        labelAlign: 1,
        labelBaseline: 1,
        labelColor: 1,
        labelFont: 1,
        labelFontSize: 1,
        labelFontStyle: 1,
        labelFontWeight: 1,
        labelLimit: 1,
        labelOffset: 1,
        labelOpacity: 1,
        labelOverlap: 1,
        labelPadding: 1,
        labelSeparation: 1,
        legendX: 1,
        legendY: 1,
        offset: 1,
        orient: 1,
        padding: 1,
        rowPadding: 1,
        strokeColor: 1,
        symbolDash: 1,
        symbolDashOffset: 1,
        symbolFillColor: 1,
        symbolLimit: 1,
        symbolOffset: 1,
        symbolOpacity: 1,
        symbolSize: 1,
        symbolStrokeColor: 1,
        symbolStrokeWidth: 1,
        symbolType: 1,
        tickCount: 1,
        tickMinStep: 1,
        title: 1,
        titleAlign: 1,
        titleAnchor: 1,
        titleBaseline: 1,
        titleColor: 1,
        titleFont: 1,
        titleFontSize: 1,
        titleFontStyle: 1,
        titleFontWeight: 1,
        titleLimit: 1,
        titleLineHeight: 1,
        titleOpacity: 1,
        titleOrient: 1,
        titlePadding: 1,
        type: 1,
        values: 1,
        zindex: 1,
      };
      const Gf = yn(Hf);
      const Vf = '_vgsid_';
      const Yf = {
        point: {
          on: 'click',
          fields: [Vf],
          toggle: 'event.shiftKey',
          resolve: 'global',
          clear: 'dblclick',
        },
        interval: {
          on: '[mousedown, window:mouseup] > window:mousemove!',
          encodings: ['x', 'y'],
          translate: '[mousedown, window:mouseup] > window:mousemove!',
          zoom: 'wheel!',
          mark: { fill: '#333', fillOpacity: 0.125, stroke: 'white' },
          resolve: 'global',
          clear: 'dblclick',
        },
      };
      function Qf(e) {
        return !!e && (e === 'legend' || !!e.legend);
      }
      function Xf(e) {
        return Qf(e) && $(e);
      }
      function Jf(e) {
        return !!e['select'];
      }
      var Kf =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Zf(e) {
        const n = [];
        for (const t of e || []) {
          if (Jf(t)) continue;
          const { expr: e, bind: i } = t,
            r = Kf(t, ['expr', 'bind']);
          if (i && e) {
            const t = Object.assign(Object.assign({}, r), { bind: i, init: e });
            n.push(t);
          } else {
            const t = Object.assign(
              Object.assign(Object.assign({}, r), e ? { update: e } : {}),
              i ? { bind: i } : {}
            );
            n.push(t);
          }
        }
        return n;
      }
      function ed(e) {
        return td(e) || id(e) || nd(e);
      }
      function nd(e) {
        return 'concat' in e;
      }
      function td(e) {
        return 'vconcat' in e;
      }
      function id(e) {
        return 'hconcat' in e;
      }
      function rd(e) {
        return $(e) && e['step'] !== undefined;
      }
      function sd(e) {
        return e['view'] || e['width'] || e['height'];
      }
      const od = 20;
      const ad = { align: 1, bounds: 1, center: 1, columns: 1, spacing: 1 };
      const ud = yn(ad);
      function cd(e, n, t) {
        var i, r;
        const s = t[n];
        const o = {};
        const { spacing: a, columns: u } = s;
        if (a !== undefined) {
          o.spacing = a;
        }
        if (u !== undefined) {
          if ((Fc(e) && !Ac(e.facet)) || nd(e)) {
            o.columns = u;
          }
        }
        if (td(e)) {
          o.columns = 1;
        }
        for (const c of ud) {
          if (e[c] !== undefined) {
            if (c === 'spacing') {
              const n = e[c];
              o[c] = Oe(n)
                ? n
                : {
                    row: (i = n.row) !== null && i !== void 0 ? i : a,
                    column: (r = n.column) !== null && r !== void 0 ? r : a,
                  };
            } else {
              o[c] = e[c];
            }
          }
        }
        return o;
      }
      var ld =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function fd(e, n) {
        var t;
        return (t = e[n]) !== null && t !== void 0
          ? t
          : e[n === 'width' ? 'continuousWidth' : 'continuousHeight'];
      }
      function dd(e, n) {
        const t = pd(e, n);
        return rd(t) ? t.step : gd;
      }
      function pd(e, n) {
        var t;
        const i =
          (t = e[n]) !== null && t !== void 0
            ? t
            : e[n === 'width' ? 'discreteWidth' : 'discreteHeight'];
        return _n(i, { step: e.step });
      }
      const gd = 20;
      const md = { continuousWidth: 200, continuousHeight: 200, step: gd };
      function hd(e) {
        return e && !!e['scheme'];
      }
      const bd = {
        background: 'white',
        padding: 5,
        timeFormat: '%b %d, %Y',
        countTitle: 'Count of Records',
        view: md,
        mark: Lu,
        arc: {},
        area: {},
        bar: Hu,
        circle: {},
        geoshape: {},
        image: {},
        line: {},
        point: {},
        rect: Gu,
        rule: { color: 'black' },
        square: {},
        text: { color: 'black' },
        tick: Vu,
        trail: {},
        boxplot: {
          size: 14,
          extent: 1.5,
          box: {},
          median: { color: 'white' },
          outliers: {},
          rule: {},
          ticks: null,
        },
        errorbar: { center: 'mean', rule: true, ticks: false },
        errorband: { band: { opacity: 0.3 }, borders: false },
        scale: Ga,
        projection: {},
        legend: If,
        header: { titlePadding: 10, labelPadding: 10 },
        headerColumn: {},
        headerRow: {},
        headerFacet: {},
        selection: Yf,
        style: {},
        title: {},
        facet: { spacing: od },
        concat: { spacing: od },
      };
      const yd = [
        '#4c78a8',
        '#f58518',
        '#e45756',
        '#72b7b2',
        '#54a24b',
        '#eeca3b',
        '#b279a2',
        '#ff9da6',
        '#9d755d',
        '#bab0ac',
      ];
      const vd = {
        text: 11,
        guideLabel: 10,
        guideTitle: 11,
        groupTitle: 13,
        groupSubtitle: 12,
      };
      const xd = {
        blue: yd[0],
        orange: yd[1],
        red: yd[2],
        teal: yd[3],
        green: yd[4],
        yellow: yd[5],
        purple: yd[6],
        pink: yd[7],
        brown: yd[8],
        gray0: '#000',
        gray1: '#111',
        gray2: '#222',
        gray3: '#333',
        gray4: '#444',
        gray5: '#555',
        gray6: '#666',
        gray7: '#777',
        gray8: '#888',
        gray9: '#999',
        gray10: '#aaa',
        gray11: '#bbb',
        gray12: '#ccc',
        gray13: '#ddd',
        gray14: '#eee',
        gray15: '#fff',
      };
      function Od(e = {}) {
        return {
          signals: [
            {
              name: 'color',
              value: $(e) ? Object.assign(Object.assign({}, xd), e) : xd,
            },
          ],
          mark: { color: { signal: 'color.blue' } },
          rule: { color: { signal: 'color.gray0' } },
          text: { color: { signal: 'color.gray0' } },
          style: {
            'guide-label': { fill: { signal: 'color.gray0' } },
            'guide-title': { fill: { signal: 'color.gray0' } },
            'group-title': { fill: { signal: 'color.gray0' } },
            'group-subtitle': { fill: { signal: 'color.gray0' } },
            cell: { stroke: { signal: 'color.gray8' } },
          },
          axis: {
            domainColor: { signal: 'color.gray13' },
            gridColor: { signal: 'color.gray8' },
            tickColor: { signal: 'color.gray13' },
          },
          range: {
            category: [
              { signal: 'color.blue' },
              { signal: 'color.orange' },
              { signal: 'color.red' },
              { signal: 'color.teal' },
              { signal: 'color.green' },
              { signal: 'color.yellow' },
              { signal: 'color.purple' },
              { signal: 'color.pink' },
              { signal: 'color.brown' },
              { signal: 'color.grey8' },
            ],
          },
        };
      }
      function wd(e) {
        return {
          signals: [
            {
              name: 'fontSize',
              value: $(e) ? Object.assign(Object.assign({}, vd), e) : vd,
            },
          ],
          text: { fontSize: { signal: 'fontSize.text' } },
          style: {
            'guide-label': { fontSize: { signal: 'fontSize.guideLabel' } },
            'guide-title': { fontSize: { signal: 'fontSize.guideTitle' } },
            'group-title': { fontSize: { signal: 'fontSize.groupTitle' } },
            'group-subtitle': { fontSize: { signal: 'fontSize.groupSubtitle' } },
          },
        };
      }
      function jd(e) {
        return {
          text: { font: e },
          style: {
            'guide-label': { font: e },
            'guide-title': { font: e },
            'group-title': { font: e },
            'group-subtitle': { font: e },
          },
        };
      }
      function Ad(e) {
        const n = yn(e || {});
        const t = {};
        for (const i of n) {
          const n = e[i];
          t[i] = El(n) ? wr(n) : jr(n);
        }
        return t;
      }
      function Dd(e) {
        const n = yn(e);
        const t = {};
        for (const i of n) {
          t[i] = Ad(e[i]);
        }
        return t;
      }
      const Fd = [
        ...qu,
        ...Tl,
        ...Uf,
        'background',
        'padding',
        'legend',
        'lineBreak',
        'scale',
        'style',
        'title',
        'view',
      ];
      function $d(e = {}) {
        const { color: n, font: t, fontSize: i, selection: r } = e,
          s = ld(e, ['color', 'font', 'fontSize', 'selection']);
        const o = C(
          {},
          Ze(bd),
          t ? jd(t) : {},
          n ? Od(n) : {},
          i ? wd(i) : {},
          s || {}
        );
        if (r) {
          (0, pa.writeConfig)(o, 'selection', r, true);
        }
        const a = nn(o, Fd);
        for (const u of ['background', 'lineBreak', 'padding']) {
          if (o[u]) {
            a[u] = jr(o[u]);
          }
        }
        for (const u of qu) {
          if (o[u]) {
            a[u] = ar(o[u]);
          }
        }
        for (const u of Tl) {
          if (o[u]) {
            a[u] = Ad(o[u]);
          }
        }
        for (const u of Uf) {
          if (o[u]) {
            a[u] = ar(o[u]);
          }
        }
        if (o.legend) {
          a.legend = ar(o.legend);
        }
        if (o.scale) {
          a.scale = ar(o.scale);
        }
        if (o.style) {
          a.style = Dd(o.style);
        }
        if (o.title) {
          a.title = ar(o.title);
        }
        if (o.view) {
          a.view = ar(o.view);
        }
        return a;
      }
      const kd = ['view', ...Cu];
      const Cd = [
        'color',
        'fontSize',
        'background',
        'padding',
        'facet',
        'concat',
        'numberFormat',
        'timeFormat',
        'countTitle',
        'header',
        'axisQuantitative',
        'axisTemporal',
        'axisDiscrete',
        'axisPoint',
        'axisXBand',
        'axisXPoint',
        'axisXDiscrete',
        'axisXQuantitative',
        'axisXTemporal',
        'axisYBand',
        'axisYPoint',
        'axisYDiscrete',
        'axisYQuantitative',
        'axisYTemporal',
        'scale',
        'selection',
        'overlay',
      ];
      const Ed = Object.assign(
        {
          view: [
            'continuousWidth',
            'continuousHeight',
            'discreteWidth',
            'discreteHeight',
            'step',
          ],
        },
        Tu
      );
      function Sd(e) {
        e = Ze(e);
        for (const n of Cd) {
          delete e[n];
        }
        if (e.axis) {
          for (const n in e.axis) {
            if (El(e.axis[n])) {
              delete e.axis[n];
            }
          }
        }
        if (e.legend) {
          for (const n of Nf) {
            delete e.legend[n];
          }
        }
        if (e.mark) {
          for (const n of Mu) {
            delete e.mark[n];
          }
          if (e.mark.tooltip && $(e.mark.tooltip)) {
            delete e.mark.tooltip;
          }
        }
        if (e.params) {
          e.signals = (e.signals || []).concat(Zf(e.params));
          delete e.params;
        }
        for (const n of kd) {
          for (const i of Mu) {
            delete e[n][i];
          }
          const t = Ed[n];
          if (t) {
            for (const i of t) {
              delete e[n][i];
            }
          }
          _d(e, n);
        }
        for (const n of zf()) {
          delete e[n];
        }
        Bd(e);
        for (const n in e) {
          if ($(e[n]) && bn(e[n])) {
            delete e[n];
          }
        }
        return bn(e) ? undefined : e;
      }
      function Bd(e) {
        const { titleMarkConfig: n, subtitleMarkConfig: t, subtitle: i } = cr(e.title);
        if (!bn(n)) {
          e.style['group-title'] = Object.assign(
            Object.assign({}, e.style['group-title']),
            n
          );
        }
        if (!bn(t)) {
          e.style['group-subtitle'] = Object.assign(
            Object.assign({}, e.style['group-subtitle']),
            t
          );
        }
        if (!bn(i)) {
          e.title = i;
        } else {
          delete e.title;
        }
      }
      function _d(e, n, t, i) {
        const r = i ? e[n][i] : e[n];
        if (n === 'view') {
          t = 'cell';
        }
        const s = Object.assign(
          Object.assign({}, r),
          e.style[t !== null && t !== void 0 ? t : n]
        );
        if (!bn(s)) {
          e.style[t !== null && t !== void 0 ? t : n] = s;
        }
        if (!i) {
          delete e[n];
        }
      }
      function Pd(e) {
        return 'layer' in e;
      }
      function zd(e) {
        return 'repeat' in e;
      }
      function Nd(e) {
        return !F(e.repeat) && e.repeat['layer'];
      }
      var Md =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class Td {
        map(e, n) {
          if (Fc(e)) {
            return this.mapFacet(e, n);
          } else if (zd(e)) {
            return this.mapRepeat(e, n);
          } else if (id(e)) {
            return this.mapHConcat(e, n);
          } else if (td(e)) {
            return this.mapVConcat(e, n);
          } else if (nd(e)) {
            return this.mapConcat(e, n);
          } else {
            return this.mapLayerOrUnit(e, n);
          }
        }
        mapLayerOrUnit(e, n) {
          if (Pd(e)) {
            return this.mapLayer(e, n);
          } else if (Ll(e)) {
            return this.mapUnit(e, n);
          }
          throw new Error(Tr(e));
        }
        mapLayer(e, n) {
          return Object.assign(Object.assign({}, e), {
            layer: e.layer.map((e) => this.mapLayerOrUnit(e, n)),
          });
        }
        mapHConcat(e, n) {
          return Object.assign(Object.assign({}, e), {
            hconcat: e.hconcat.map((e) => this.map(e, n)),
          });
        }
        mapVConcat(e, n) {
          return Object.assign(Object.assign({}, e), {
            vconcat: e.vconcat.map((e) => this.map(e, n)),
          });
        }
        mapConcat(e, n) {
          const { concat: t } = e,
            i = Md(e, ['concat']);
          return Object.assign(Object.assign({}, i), {
            concat: t.map((e) => this.map(e, n)),
          });
        }
        mapFacet(e, n) {
          return Object.assign(Object.assign({}, e), { spec: this.map(e.spec, n) });
        }
        mapRepeat(e, n) {
          return Object.assign(Object.assign({}, e), { spec: this.map(e.spec, n) });
        }
      }
      const Ld = { zero: 1, center: 1, normalize: 1 };
      function Rd(e) {
        return e in Ld;
      }
      const qd = new Set([du, gu, pu, vu, bu, ju, Au, hu, xu, Ou]);
      const Ud = new Set([gu, pu, du]);
      function Wd(e) {
        return Lc(e) && Rc(e) === 'quantitative' && !e.bin;
      }
      function Id(e, n) {
        var t, i;
        const r = n === 'x' ? 'y' : 'radius';
        const s = e[n];
        const o = e[r];
        if (Lc(s) && Lc(o)) {
          if (Wd(s) && Wd(o)) {
            if (s.stack) {
              return n;
            } else if (o.stack) {
              return r;
            }
            const e = Lc(s) && !!s.aggregate;
            const a = Lc(o) && !!o.aggregate;
            if (e !== a) {
              return e ? n : r;
            } else {
              const e = (t = s.scale) === null || t === void 0 ? void 0 : t.type;
              const a = (i = o.scale) === null || i === void 0 ? void 0 : i.type;
              if (e && e !== 'linear') {
                return r;
              } else if (a && a !== 'linear') {
                return n;
              }
            }
          } else if (Wd(s)) {
            return n;
          } else if (Wd(o)) {
            return r;
          }
        } else if (Wd(s)) {
          return n;
        } else if (Wd(o)) {
          return r;
        }
        return undefined;
      }
      function Hd(e) {
        switch (e) {
          case 'x':
            return 'y';
          case 'y':
            return 'x';
          case 'theta':
            return 'radius';
          case 'radius':
            return 'theta';
        }
      }
      function Gd(e, n, t = {}) {
        var i, r;
        const s = Eu(e) ? e.type : e;
        if (!qd.has(s)) {
          return null;
        }
        const o = Id(n, 'x') || Id(n, 'theta');
        if (!o) {
          return null;
        }
        const a = n[o];
        const u = Lc(a) ? el(a, {}) : undefined;
        let c = Hd(o);
        let l = n[c];
        let f = Lc(l) ? el(l, {}) : undefined;
        if (f === u) {
          f = undefined;
          l = undefined;
          c = undefined;
        }
        const d = gi.reduce((e, t) => {
          if (t !== 'tooltip' && Ul(n, t)) {
            const i = n[t];
            for (const n of J(i)) {
              const i = ml(n);
              if (i.aggregate) {
                continue;
              }
              const r = el(i, {});
              if (!r || r !== f) {
                e.push({ channel: t, fieldDef: i });
              }
            }
          }
          return e;
        }, []);
        let p;
        if (a.stack !== undefined) {
          if (ye(a.stack)) {
            p = a.stack ? 'zero' : null;
          } else {
            p = a.stack;
          }
        } else if (Ud.has(s)) {
          p = 'zero';
        }
        if (!p || !Rd(p)) {
          return null;
        }
        if (Wl(n) && d.length === 0) {
          return null;
        }
        if (
          ((i = a === null || a === void 0 ? void 0 : a.scale) === null || i === void 0
            ? void 0
            : i.type) &&
          ((r = a === null || a === void 0 ? void 0 : a.scale) === null || r === void 0
            ? void 0
            : r.type) !== Aa.LINEAR
        ) {
          if (t.disallowNonLinearStack) {
            return null;
          } else {
            xo(Ks(a.scale.type));
          }
        }
        if (Hc(n[Jt(o)])) {
          if (a.stack !== undefined) {
            xo(Js(o));
          }
          return null;
        }
        if (Lc(a) && a.aggregate && !on(Ji, a.aggregate)) {
          xo(Zs(a.aggregate));
        }
        return {
          groupbyChannel: l ? c : undefined,
          groupbyField: f,
          fieldChannel: o,
          impute: a.impute === null ? false : $u(s),
          stackBy: d,
          offset: p,
        };
      }
      var Vd =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Yd(e) {
        const { point: n, line: t } = e,
          i = Vd(e, ['point', 'line']);
        return yn(i).length > 1 ? i : i.type;
      }
      function Qd(e) {
        for (const n of ['line', 'area', 'rule', 'trail']) {
          if (e[n]) {
            e = Object.assign(Object.assign({}, e), {
              [n]: nn(e[n], ['point', 'line']),
            });
          }
        }
        return e;
      }
      function Xd(e, n = {}, t) {
        if (e.point === 'transparent') {
          return { opacity: 0 };
        } else if (e.point) {
          return $(e.point) ? e.point : {};
        } else if (e.point !== undefined) {
          return null;
        } else {
          if (n.point || t.shape) {
            return $(n.point) ? n.point : {};
          }
          return undefined;
        }
      }
      function Jd(e, n = {}) {
        if (e.line) {
          return e.line === true ? {} : e.line;
        } else if (e.line !== undefined) {
          return null;
        } else {
          if (n.line) {
            return n.line === true ? {} : n.line;
          }
          return undefined;
        }
      }
      class Kd {
        constructor() {
          this.name = 'path-overlay';
        }
        hasMatchingType(e, n) {
          if (Ll(e)) {
            const { mark: t, encoding: i } = e;
            const r = Eu(t) ? t : { type: t };
            switch (r.type) {
              case 'line':
              case 'rule':
              case 'trail':
                return !!Xd(r, n[r.type], i);
              case 'area':
                return !!Xd(r, n[r.type], i) || !!Jd(r, n[r.type]);
            }
          }
          return false;
        }
        run(e, n, t) {
          const { config: i } = n;
          const { params: r, projection: s, mark: o, encoding: a } = e,
            u = Vd(e, ['params', 'projection', 'mark', 'encoding']);
          const c = Vl(a, i);
          const l = Eu(o) ? o : { type: o };
          const f = Xd(l, i[l.type], c);
          const d = l.type === 'area' && Jd(l, i[l.type]);
          const p = [
            Object.assign(Object.assign({}, r ? { params: r } : {}), {
              mark: Yd(
                Object.assign(
                  Object.assign(
                    {},
                    l.type === 'area' &&
                      l.opacity === undefined &&
                      l.fillOpacity === undefined
                      ? { opacity: 0.7 }
                      : {}
                  ),
                  l
                )
              ),
              encoding: nn(c, ['shape']),
            }),
          ];
          const g = Gd(l, c);
          let m = c;
          if (g) {
            const { fieldChannel: e, offset: n } = g;
            m = Object.assign(Object.assign({}, c), {
              [e]: Object.assign(Object.assign({}, c[e]), n ? { stack: n } : {}),
            });
          }
          if (d) {
            p.push(
              Object.assign(Object.assign({}, s ? { projection: s } : {}), {
                mark: Object.assign(
                  Object.assign(
                    { type: 'line' },
                    en(l, ['clip', 'interpolate', 'tension', 'tooltip'])
                  ),
                  d
                ),
                encoding: m,
              })
            );
          }
          if (f) {
            p.push(
              Object.assign(Object.assign({}, s ? { projection: s } : {}), {
                mark: Object.assign(
                  Object.assign(
                    { type: 'point', opacity: 1, filled: true },
                    en(l, ['clip', 'tooltip'])
                  ),
                  f
                ),
                encoding: m,
              })
            );
          }
          return t(
            Object.assign(Object.assign({}, u), { layer: p }),
            Object.assign(Object.assign({}, n), { config: Qd(i) })
          );
        }
      }
      var Zd =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function ep(e, n) {
        if (!n) {
          return e;
        }
        if (Ac(e)) {
          return op(e, n);
        }
        return ip(e, n);
      }
      function np(e, n) {
        if (!n) {
          return e;
        }
        return op(e, n);
      }
      function tp(e, n, t) {
        const i = n[e];
        if (Cc(i)) {
          if (i.repeat in t) {
            return Object.assign(Object.assign({}, n), { [e]: t[i.repeat] });
          } else {
            xo(ns(i.repeat));
            return undefined;
          }
        }
        return n;
      }
      function ip(e, n) {
        e = tp('field', e, n);
        if (e === undefined) {
          return undefined;
        } else if (e === null) {
          return null;
        }
        if (Sc(e) && wc(e.sort)) {
          const t = tp('field', e.sort, n);
          e = Object.assign(Object.assign({}, e), t ? { sort: t } : {});
        }
        return e;
      }
      function rp(e, n) {
        if (Lc(e)) {
          return ip(e, n);
        } else {
          const t = tp('datum', e, n);
          if (t !== e && !t.type) {
            t.type = 'nominal';
          }
          return t;
        }
      }
      function sp(e, n) {
        if (Hc(e)) {
          const t = rp(e, n);
          if (t) {
            return t;
          } else if (zc(e)) {
            return { condition: e.condition };
          }
        } else {
          if (Mc(e)) {
            const t = rp(e.condition, n);
            if (t) {
              return Object.assign(Object.assign({}, e), { condition: t });
            } else {
              const { condition: n } = e,
                t = Zd(e, ['condition']);
              return t;
            }
          }
          return e;
        }
        return undefined;
      }
      function op(e, n) {
        const t = {};
        for (const i in e) {
          if (de(e, i)) {
            const r = e[i];
            if (F(r)) {
              t[i] = r.map((e) => sp(e, n)).filter((e) => e);
            } else {
              const e = sp(r, n);
              if (e !== undefined) {
                t[i] = e;
              }
            }
          }
        }
        return t;
      }
      class ap {
        constructor() {
          this.name = 'RuleForRangedLine';
        }
        hasMatchingType(e) {
          if (Ll(e)) {
            const { encoding: n, mark: t } = e;
            if (t === 'line' || (Eu(t) && t.type === 'line')) {
              for (const e of Vt) {
                const t = Qt(e);
                const i = n[t];
                if (n[e]) {
                  if ((Lc(i) && !tr(i.bin)) || qc(i)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
        run(e, n, t) {
          const { encoding: i, mark: r } = e;
          xo(ks(!!i.x2, !!i.y2));
          return t(
            Object.assign(Object.assign({}, e), {
              mark: $(r)
                ? Object.assign(Object.assign({}, r), { type: 'rule' })
                : 'rule',
            }),
            n
          );
        }
      }
      var up =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class cp extends Td {
        constructor() {
          super(...arguments);
          this.nonFacetUnitNormalizers = [ff, vf, Ef, new Kd(), new ap()];
        }
        map(e, n) {
          if (Ll(e)) {
            const t = Ul(e.encoding, Un);
            const i = Ul(e.encoding, Wn);
            const r = Ul(e.encoding, In);
            if (t || i || r) {
              return this.mapFacetedUnit(e, n);
            }
          }
          return super.map(e, n);
        }
        mapUnit(e, n) {
          const { parentEncoding: t, parentProjection: i } = n;
          const r = np(e.encoding, n.repeater);
          const s = Object.assign(Object.assign({}, e), r ? { encoding: r } : {});
          if (t || i) {
            return this.mapUnitWithParentEncodingOrProjection(s, n);
          }
          const o = this.mapLayerOrUnit.bind(this);
          for (const a of this.nonFacetUnitNormalizers) {
            if (a.hasMatchingType(s, n.config)) {
              return a.run(s, n, o);
            }
          }
          return s;
        }
        mapRepeat(e, n) {
          if (Nd(e)) {
            return this.mapLayerRepeat(e, n);
          } else {
            return this.mapNonLayerRepeat(e, n);
          }
        }
        mapLayerRepeat(e, n) {
          const { repeat: t, spec: i } = e,
            r = up(e, ['repeat', 'spec']);
          const { row: s, column: o, layer: a } = t;
          const { repeater: u = {}, repeaterPrefix: c = '' } = n;
          if (s || o) {
            return this.mapRepeat(
              Object.assign(Object.assign({}, e), {
                repeat: Object.assign(
                  Object.assign({}, s ? { row: s } : {}),
                  o ? { column: o } : {}
                ),
                spec: { repeat: { layer: a }, spec: i },
              }),
              n
            );
          } else {
            return Object.assign(Object.assign({}, r), {
              layer: a.map((e) => {
                const t = Object.assign(Object.assign({}, u), { layer: e });
                const r = `${(i.name || '') + c}child__layer_${wn(e)}`;
                const s = this.mapLayerOrUnit(
                  i,
                  Object.assign(Object.assign({}, n), {
                    repeater: t,
                    repeaterPrefix: r,
                  })
                );
                s.name = r;
                return s;
              }),
            });
          }
        }
        mapNonLayerRepeat(e, n) {
          var t;
          const { repeat: i, spec: r, data: s } = e,
            o = up(e, ['repeat', 'spec', 'data']);
          if (!F(i) && e.columns) {
            e = nn(e, ['columns']);
            xo(ts('repeat'));
          }
          const a = [];
          const { repeater: u = {}, repeaterPrefix: c = '' } = n;
          const l = (!F(i) && i.row) || [u ? u.row : null];
          const f = (!F(i) && i.column) || [u ? u.column : null];
          const d = (F(i) && i) || [u ? u.repeat : null];
          for (const g of d) {
            for (const e of l) {
              for (const t of f) {
                const s = { repeat: g, row: e, column: t, layer: u.layer };
                const o =
                  (r.name || '') +
                  c +
                  'child__' +
                  (F(i)
                    ? `${wn(g)}`
                    : (i.row ? `row_${wn(e)}` : '') +
                      (i.column ? `column_${wn(t)}` : ''));
                const l = this.map(
                  r,
                  Object.assign(Object.assign({}, n), {
                    repeater: s,
                    repeaterPrefix: o,
                  })
                );
                l.name = o;
                a.push(nn(l, ['data']));
              }
            }
          }
          const p = F(i) ? e.columns : i.column ? i.column.length : 1;
          return Object.assign(
            Object.assign(
              { data: (t = r.data) !== null && t !== void 0 ? t : s, align: 'all' },
              o
            ),
            { columns: p, concat: a }
          );
        }
        mapFacet(e, n) {
          const { facet: t } = e;
          if (Ac(t) && e.columns) {
            e = nn(e, ['columns']);
            xo(ts('facet'));
          }
          return super.mapFacet(e, n);
        }
        mapUnitWithParentEncodingOrProjection(e, n) {
          const { encoding: t, projection: i } = e;
          const { parentEncoding: r, parentProjection: s, config: o } = n;
          const a = fp({ parentProjection: s, projection: i });
          const u = lp({ parentEncoding: r, encoding: np(t, n.repeater) });
          return this.mapUnit(
            Object.assign(
              Object.assign(Object.assign({}, e), a ? { projection: a } : {}),
              u ? { encoding: u } : {}
            ),
            { config: o }
          );
        }
        mapFacetedUnit(e, n) {
          const t = e.encoding,
            { row: i, column: r, facet: s } = t,
            o = up(t, ['row', 'column', 'facet']);
          const {
              mark: a,
              width: u,
              projection: c,
              height: l,
              view: f,
              params: d,
              encoding: p,
            } = e,
            g = up(e, [
              'mark',
              'width',
              'projection',
              'height',
              'view',
              'params',
              'encoding',
            ]);
          const { facetMapping: m, layout: h } = this.getFacetMappingAndLayout(
            { row: i, column: r, facet: s },
            n
          );
          const b = np(o, n.repeater);
          return this.mapFacet(
            Object.assign(Object.assign(Object.assign({}, g), h), {
              facet: m,
              spec: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign({}, u ? { width: u } : {}),
                        l ? { height: l } : {}
                      ),
                      f ? { view: f } : {}
                    ),
                    c ? { projection: c } : {}
                  ),
                  { mark: a, encoding: b }
                ),
                d ? { params: d } : {}
              ),
            }),
            n
          );
        }
        getFacetMappingAndLayout(e, n) {
          var t;
          const { row: i, column: r, facet: s } = e;
          if (i || r) {
            if (s) {
              xo(Ds([...(i ? [Un] : []), ...(r ? [Wn] : [])]));
            }
            const n = {};
            const o = {};
            for (const i of [Un, Wn]) {
              const r = e[i];
              if (r) {
                const { align: e, center: s, spacing: a, columns: u } = r,
                  c = up(r, ['align', 'center', 'spacing', 'columns']);
                n[i] = c;
                for (const n of ['align', 'center', 'spacing']) {
                  if (r[n] !== undefined) {
                    (t = o[n]) !== null && t !== void 0 ? t : (o[n] = {});
                    o[n][i] = r[n];
                  }
                }
              }
            }
            return { facetMapping: n, layout: o };
          } else {
            const { align: e, center: t, spacing: i, columns: r } = s,
              o = up(s, ['align', 'center', 'spacing', 'columns']);
            return {
              facetMapping: ep(o, n.repeater),
              layout: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign({}, e ? { align: e } : {}),
                    t ? { center: t } : {}
                  ),
                  i ? { spacing: i } : {}
                ),
                r ? { columns: r } : {}
              ),
            };
          }
        }
        mapLayer(e, n) {
          var { parentEncoding: t, parentProjection: i } = n,
            r = up(n, ['parentEncoding', 'parentProjection']);
          const { encoding: s, projection: o } = e,
            a = up(e, ['encoding', 'projection']);
          const u = Object.assign(Object.assign({}, r), {
            parentEncoding: lp({ parentEncoding: t, encoding: s, layer: true }),
            parentProjection: fp({ parentProjection: i, projection: o }),
          });
          return super.mapLayer(a, u);
        }
      }
      function lp({ parentEncoding: e, encoding: n = {}, layer: t }) {
        let i = {};
        if (e) {
          const r = new Set([...yn(e), ...yn(n)]);
          for (const s of r) {
            const r = n[s];
            const o = e[s];
            if (Hc(r)) {
              const e = Object.assign(Object.assign({}, o), r);
              i[s] = e;
            } else if (Mc(r)) {
              i[s] = Object.assign(Object.assign({}, r), {
                condition: Object.assign(Object.assign({}, o), r.condition),
              });
            } else if (r || r === null) {
              i[s] = r;
            } else if (t || Vc(o) || fr(o) || Hc(o) || F(o)) {
              i[s] = o;
            }
          }
        } else {
          i = n;
        }
        return !i || bn(i) ? undefined : i;
      }
      function fp(e) {
        const { parentProjection: n, projection: t } = e;
        if (n && t) {
          xo(ls({ parentProjection: n, projection: t }));
        }
        return t !== null && t !== void 0 ? t : n;
      }
      function dp(e) {
        return 'filter' in e;
      }
      function pp(e) {
        return (e === null || e === void 0 ? void 0 : e['stop']) !== undefined;
      }
      function gp(e) {
        return 'lookup' in e;
      }
      function mp(e) {
        return 'data' in e;
      }
      function hp(e) {
        return 'param' in e;
      }
      function bp(e) {
        return 'pivot' in e;
      }
      function yp(e) {
        return 'density' in e;
      }
      function vp(e) {
        return 'quantile' in e;
      }
      function xp(e) {
        return 'regression' in e;
      }
      function Op(e) {
        return 'loess' in e;
      }
      function wp(e) {
        return 'sample' in e;
      }
      function jp(e) {
        return 'window' in e;
      }
      function Ap(e) {
        return 'joinaggregate' in e;
      }
      function Dp(e) {
        return 'flatten' in e;
      }
      function Fp(e) {
        return 'calculate' in e;
      }
      function $p(e) {
        return 'bin' in e;
      }
      function kp(e) {
        return 'impute' in e;
      }
      function Cp(e) {
        return 'timeUnit' in e;
      }
      function Ep(e) {
        return 'aggregate' in e;
      }
      function Sp(e) {
        return 'stack' in e;
      }
      function Bp(e) {
        return 'fold' in e;
      }
      function _p(e) {
        return e.map((e) => {
          if (dp(e)) {
            return { filter: Je(e.filter, da) };
          }
          return e;
        });
      }
      var Pp =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class zp extends Td {
        map(e, n) {
          var t, i;
          (t = n.emptySelections) !== null && t !== void 0
            ? t
            : (n.emptySelections = {});
          (i = n.selectionPredicates) !== null && i !== void 0
            ? i
            : (n.selectionPredicates = {});
          e = Np(e, n);
          return super.map(e, n);
        }
        mapLayerOrUnit(e, n) {
          e = Np(e, n);
          if (e.encoding) {
            const t = {};
            for (const [i, r] of xn(e.encoding)) {
              t[i] = Mp(r, n);
            }
            e = Object.assign(Object.assign({}, e), { encoding: t });
          }
          return super.mapLayerOrUnit(e, n);
        }
        mapUnit(e, n) {
          const t = e,
            { selection: i } = t,
            r = Pp(t, ['selection']);
          if (i) {
            return Object.assign(Object.assign({}, r), {
              params: xn(i).map(([e, t]) => {
                var i;
                const r = t,
                  { init: s, bind: o, empty: a } = r,
                  u = Pp(r, ['init', 'bind', 'empty']);
                if (u.type === 'single') {
                  u.type = 'point';
                  u.toggle = false;
                } else if (u.type === 'multi') {
                  u.type = 'point';
                }
                n.emptySelections[e] = a !== 'none';
                for (const c of vn(
                  (i = n.selectionPredicates[e]) !== null && i !== void 0 ? i : {}
                )) {
                  c.empty = a !== 'none';
                }
                return { name: e, value: s, select: u, bind: o };
              }),
            });
          }
          return e;
        }
      }
      function Np(e, n) {
        const { transform: t } = e,
          i = Pp(e, ['transform']);
        if (t) {
          const e = t.map((e) => {
            if (dp(e)) {
              return { filter: Lp(e, n) };
            } else if ($p(e) && ir(e.bin)) {
              return Object.assign(Object.assign({}, e), { bin: Tp(e.bin) });
            } else if (gp(e)) {
              const n = e.from,
                { selection: t } = n,
                i = Pp(n, ['selection']);
              return t
                ? Object.assign(Object.assign({}, e), {
                    from: Object.assign({ param: t }, i),
                  })
                : e;
            }
            return e;
          });
          return Object.assign(Object.assign({}, i), { transform: e });
        }
        return e;
      }
      function Mp(e, n) {
        var t, i;
        const r = Ze(e);
        if (Lc(r) && ir(r.bin)) {
          r.bin = Tp(r.bin);
        }
        if (
          Yc(r) &&
          ((i = (t = r.scale) === null || t === void 0 ? void 0 : t.domain) === null ||
          i === void 0
            ? void 0
            : i.selection)
        ) {
          const e = r.scale.domain,
            { selection: n } = e,
            t = Pp(e, ['selection']);
          r.scale.domain = Object.assign(Object.assign({}, t), n ? { param: n } : {});
        }
        if (zc(r)) {
          if ((0, pa.isArray)(r.condition)) {
            r.condition = r.condition.map((e) => {
              const { selection: t, param: i, test: r } = e,
                s = Pp(e, ['selection', 'param', 'test']);
              return i ? e : Object.assign(Object.assign({}, s), { test: Lp(e, n) });
            });
          } else {
            const e = Mp(r.condition, n),
              { selection: t, param: i, test: s } = e,
              o = Pp(e, ['selection', 'param', 'test']);
            r.condition = i
              ? r.condition
              : Object.assign(Object.assign({}, o), { test: Lp(r.condition, n) });
          }
        }
        return r;
      }
      function Tp(e) {
        const n = e.extent;
        if (n === null || n === void 0 ? void 0 : n.selection) {
          const { selection: t } = n,
            i = Pp(n, ['selection']);
          return Object.assign(Object.assign({}, e), {
            extent: Object.assign(Object.assign({}, i), { param: t }),
          });
        }
        return e;
      }
      function Lp(e, n) {
        const t = (e) =>
          Je(e, (e) => {
            var t, i;
            var r;
            const s = (t = n.emptySelections[e]) !== null && t !== void 0 ? t : true;
            const o = { param: e, empty: s };
            (i = (r = n.selectionPredicates)[e]) !== null && i !== void 0
              ? i
              : (r[e] = []);
            n.selectionPredicates[e].push(o);
            return o;
          });
        return e.selection
          ? t(e.selection)
          : Je(e.test || e.filter, (e) => (e.selection ? t(e.selection) : e));
      }
      class Rp extends Td {
        map(e, n) {
          var t;
          const i = (t = n.selections) !== null && t !== void 0 ? t : [];
          if (e.params && !Ll(e)) {
            const n = [];
            for (const t of e.params) {
              if (Jf(t)) {
                i.push(t);
              } else {
                n.push(t);
              }
            }
            e.params = n;
          }
          n.selections = i;
          return super.map(e, qp(e, n));
        }
        mapUnit(e, n) {
          var t;
          const i = n.selections;
          if (!i || !i.length) return e;
          const r = ((t = n.path) !== null && t !== void 0 ? t : []).concat(e.name);
          const s = [];
          for (const o of i) {
            if (!o.views || !o.views.length) {
              s.push(o);
            } else {
              for (const n of o.views) {
                if (
                  ((0, pa.isString)(n) && (n === e.name || r.indexOf(n) >= 0)) ||
                  ((0, pa.isArray)(n) &&
                    n
                      .map((e) => r.indexOf(e))
                      .every((e, n, t) => e !== -1 && (n === 0 || e > t[n - 1])))
                ) {
                  s.push(o);
                }
              }
            }
          }
          if (s.length) e.params = s;
          return e;
        }
      }
      for (const bF of [
        'mapFacet',
        'mapRepeat',
        'mapHConcat',
        'mapVConcat',
        'mapLayer',
      ]) {
        const e = Rp.prototype[bF];
        Rp.prototype[bF] = function (n, t) {
          return e.call(this, n, qp(n, t));
        };
      }
      function qp(e, n) {
        var t;
        return e.name
          ? Object.assign(Object.assign({}, n), {
              path: ((t = n.path) !== null && t !== void 0 ? t : []).concat(e.name),
            })
          : n;
      }
      function Up(e, n) {
        if (n === undefined) {
          n = $d(e.config);
        }
        const t = Gp(e, n);
        const { width: i, height: r } = e;
        const s = Yp(t, { width: i, height: r, autosize: e.autosize }, n);
        return Object.assign(Object.assign({}, t), s ? { autosize: s } : {});
      }
      const Wp = new cp();
      const Ip = new zp();
      const Hp = new Rp();
      function Gp(e, n = {}) {
        const t = { config: n };
        return Hp.map(Wp.map(Ip.map(e, t), t), t);
      }
      function Vp(e) {
        return je(e) ? { type: e } : e !== null && e !== void 0 ? e : {};
      }
      function Yp(e, n, t) {
        let { width: i, height: r } = n;
        const s = Ll(e) || Pd(e);
        const o = {};
        if (!s) {
          if (i == 'container') {
            xo(Rr('width'));
            i = undefined;
          }
          if (r == 'container') {
            xo(Rr('height'));
            r = undefined;
          }
        } else {
          if (i == 'container' && r == 'container') {
            o.type = 'fit';
            o.contains = 'padding';
          } else if (i == 'container') {
            o.type = 'fit-x';
            o.contains = 'padding';
          } else if (r == 'container') {
            o.type = 'fit-y';
            o.contains = 'padding';
          }
        }
        const a = Object.assign(
          Object.assign(Object.assign({ type: 'pad' }, o), t ? Vp(t.autosize) : {}),
          Vp(e.autosize)
        );
        if (a.type === 'fit' && !s) {
          xo(Lr);
          a.type = 'pad';
        }
        if (i == 'container' && !(a.type == 'fit' || a.type == 'fit-x')) {
          xo(qr('width'));
        }
        if (r == 'container' && !(a.type == 'fit' || a.type == 'fit-y')) {
          xo(qr('height'));
        }
        if (Ke(a, { type: 'pad' })) {
          return undefined;
        }
        return a;
      }
      function Qp(e) {
        return e === 'fit' || e === 'fit-x' || e === 'fit-y';
      }
      function Xp(e) {
        return e ? `fit-${xi(e)}` : 'fit';
      }
      const Jp = ['background', 'padding'];
      function Kp(e, n) {
        const t = {};
        for (const i of Jp) {
          if (e && e[i] !== undefined) {
            t[i] = jr(e[i]);
          }
        }
        if (n) {
          t.params = e.params;
        }
        return t;
      }
      class Zp {
        constructor(e = {}, n = {}) {
          this.explicit = e;
          this.implicit = n;
        }
        clone() {
          return new Zp(Ze(this.explicit), Ze(this.implicit));
        }
        combine() {
          return Object.assign(Object.assign({}, this.explicit), this.implicit);
        }
        get(e) {
          return _n(this.explicit[e], this.implicit[e]);
        }
        getWithExplicit(e) {
          if (this.explicit[e] !== undefined) {
            return { explicit: true, value: this.explicit[e] };
          } else if (this.implicit[e] !== undefined) {
            return { explicit: false, value: this.implicit[e] };
          }
          return { explicit: false, value: undefined };
        }
        setWithExplicit(e, { value: n, explicit: t }) {
          if (n !== undefined) {
            this.set(e, n, t);
          }
        }
        set(e, n, t) {
          delete this[t ? 'implicit' : 'explicit'][e];
          this[t ? 'explicit' : 'implicit'][e] = n;
          return this;
        }
        copyKeyFromSplit(e, { explicit: n, implicit: t }) {
          if (n[e] !== undefined) {
            this.set(e, n[e], true);
          } else if (t[e] !== undefined) {
            this.set(e, t[e], false);
          }
        }
        copyKeyFromObject(e, n) {
          if (n[e] !== undefined) {
            this.set(e, n[e], true);
          }
        }
        copyAll(e) {
          for (const n of yn(e.combine())) {
            const t = e.getWithExplicit(n);
            this.setWithExplicit(n, t);
          }
        }
      }
      function eg(e) {
        return { explicit: true, value: e };
      }
      function ng(e) {
        return { explicit: false, value: e };
      }
      function tg(e) {
        return (n, t, i, r) => {
          const s = e(n.value, t.value);
          if (s > 0) {
            return n;
          } else if (s < 0) {
            return t;
          }
          return ig(n, t, i, r);
        };
      }
      function ig(e, n, t, i) {
        if (e.explicit && n.explicit) {
          xo(Us(t, i, e.value, n.value));
        }
        return e;
      }
      function rg(e, n, t, i, r = ig) {
        if (e === undefined || e.value === undefined) {
          return n;
        }
        if (e.explicit && !n.explicit) {
          return e;
        } else if (n.explicit && !e.explicit) {
          return n;
        } else if (Ke(e.value, n.value)) {
          return e;
        } else {
          return r(e, n, t, i);
        }
      }
      class sg extends Zp {
        constructor(e = {}, n = {}, t = false) {
          super(e, n);
          this.explicit = e;
          this.implicit = n;
          this.parseNothing = t;
        }
        clone() {
          const e = super.clone();
          e.parseNothing = this.parseNothing;
          return e;
        }
      }
      function og(e) {
        return 'url' in e;
      }
      function ag(e) {
        return 'values' in e;
      }
      function ug(e) {
        return 'name' in e && !og(e) && !ag(e) && !cg(e);
      }
      function cg(e) {
        return e && (lg(e) || fg(e) || dg(e));
      }
      function lg(e) {
        return 'sequence' in e;
      }
      function fg(e) {
        return 'sphere' in e;
      }
      function dg(e) {
        return 'graticule' in e;
      }
      var pg;
      (function (e) {
        e[(e['Raw'] = 0)] = 'Raw';
        e[(e['Main'] = 1)] = 'Main';
        e[(e['Row'] = 2)] = 'Row';
        e[(e['Column'] = 3)] = 'Column';
        e[(e['Lookup'] = 4)] = 'Lookup';
      })(pg || (pg = {}));
      const gg = 'view',
        mg = '[',
        hg = ']',
        bg = '{',
        yg = '}',
        vg = ':',
        xg = ',',
        Og = '@',
        wg = '>',
        jg = /[[\]{}]/,
        Ag = {
          '*': 1,
          arc: 1,
          area: 1,
          group: 1,
          image: 1,
          line: 1,
          path: 1,
          rect: 1,
          rule: 1,
          shape: 1,
          symbol: 1,
          text: 1,
          trail: 1,
        };
      let Dg, Fg;
      function $g(e, n, t) {
        Dg = n || gg;
        Fg = t || Ag;
        return Eg(e.trim()).map(Sg);
      }
      function kg(e) {
        return Fg[e];
      }
      function Cg(e, n, t, i, r) {
        const s = e.length;
        let o = 0,
          a;
        for (; n < s; ++n) {
          a = e[n];
          if (!o && a === t) return n;
          else if (r && r.indexOf(a) >= 0) --o;
          else if (i && i.indexOf(a) >= 0) ++o;
        }
        return n;
      }
      function Eg(e) {
        const n = [],
          t = e.length;
        let i = 0,
          r = 0;
        while (r < t) {
          r = Cg(e, r, xg, mg + bg, hg + yg);
          n.push(e.substring(i, r).trim());
          i = ++r;
        }
        if (n.length === 0) {
          throw 'Empty event selector: ' + e;
        }
        return n;
      }
      function Sg(e) {
        return e[0] === '[' ? Bg(e) : _g(e);
      }
      function Bg(e) {
        const n = e.length;
        let t = 1,
          i;
        t = Cg(e, t, hg, mg, hg);
        if (t === n) {
          throw 'Empty between selector: ' + e;
        }
        i = Eg(e.substring(1, t));
        if (i.length !== 2) {
          throw 'Between selector must have two elements: ' + e;
        }
        e = e.slice(t + 1).trim();
        if (e[0] !== wg) {
          throw "Expected '>' after between selector: " + e;
        }
        i = i.map(Sg);
        const r = Sg(e.slice(1).trim());
        if (r.between) {
          return { between: i, stream: r };
        } else {
          r.between = i;
        }
        return r;
      }
      function _g(e) {
        const n = { source: Dg },
          t = [];
        let i = [0, 0],
          r = 0,
          s = 0,
          o = e.length,
          a = 0,
          u,
          c;
        if (e[o - 1] === yg) {
          a = e.lastIndexOf(bg);
          if (a >= 0) {
            try {
              i = Pg(e.substring(a + 1, o - 1));
            } catch (l) {
              throw 'Invalid throttle specification: ' + e;
            }
            e = e.slice(0, a).trim();
            o = e.length;
          } else throw 'Unmatched right brace: ' + e;
          a = 0;
        }
        if (!o) throw e;
        if (e[0] === Og) r = ++a;
        u = Cg(e, a, vg);
        if (u < o) {
          t.push(e.substring(s, u).trim());
          s = a = ++u;
        }
        a = Cg(e, a, mg);
        if (a === o) {
          t.push(e.substring(s, o).trim());
        } else {
          t.push(e.substring(s, a).trim());
          c = [];
          s = ++a;
          if (s === o) throw 'Unmatched left bracket: ' + e;
        }
        while (a < o) {
          a = Cg(e, a, hg);
          if (a === o) throw 'Unmatched left bracket: ' + e;
          c.push(e.substring(s, a).trim());
          if (a < o - 1 && e[++a] !== mg) throw 'Expected left bracket: ' + e;
          s = ++a;
        }
        if (!(o = t.length) || jg.test(t[o - 1])) {
          throw 'Invalid event selector: ' + e;
        }
        if (o > 1) {
          n.type = t[1];
          if (r) {
            n.markname = t[0].slice(1);
          } else if (kg(t[0])) {
            n.marktype = t[0];
          } else {
            n.source = t[0];
          }
        } else {
          n.type = t[0];
        }
        if (n.type.slice(-1) === '!') {
          n.consume = true;
          n.type = n.type.slice(0, -1);
        }
        if (c != null) n.filter = c;
        if (i[0]) n.throttle = i[0];
        if (i[1]) n.debounce = i[1];
        return n;
      }
      function Pg(e) {
        const n = e.split(xg);
        if (!e.length || n.length > 2) throw e;
        return n.map((n) => {
          const t = +n;
          if (t !== t) throw e;
          return t;
        });
      }
      var zg =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Ng(e, n = true, t = g) {
        if (F(e)) {
          const i = e.map((e) => Ng(e, n, t));
          return n ? `[${i.join(', ')}]` : i;
        } else if (jo(e)) {
          if (n) {
            return t(Bo(e));
          } else {
            return t(Po(e));
          }
        }
        return n ? t(tn(e)) : e;
      }
      function Mg(e, n) {
        var t;
        for (const i of vn(
          (t = e.component.selection) !== null && t !== void 0 ? t : {}
        )) {
          const t = i.name;
          let r = `${t}${Oh}, ${i.resolve === 'global' ? 'true' : `{unit: ${$h(e)}}`}`;
          for (const s of Dh) {
            if (!s.defined(i)) continue;
            if (s.signals) n = s.signals(e, i, n);
            if (s.modifyExpr) r = s.modifyExpr(e, i, r);
          }
          n.push({
            name: t + wh,
            on: [
              {
                events: { signal: i.name + Oh },
                update: `modify(${Be(i.name + xh)}, ${r})`,
              },
            ],
          });
        }
        return Ig(n);
      }
      function Tg(e, n) {
        if (e.component.selection && yn(e.component.selection).length) {
          const t = Be(e.getName('cell'));
          n.unshift({
            name: 'facet',
            value: {},
            on: [
              {
                events: $g('mousemove', 'scope'),
                update: `isTuple(facet) ? facet : group(${t}).datum`,
              },
            ],
          });
        }
        return Ig(n);
      }
      function Lg(e, n) {
        var t;
        let i = false;
        for (const r of vn(
          (t = e.component.selection) !== null && t !== void 0 ? t : {}
        )) {
          const t = r.name;
          const s = Be(t + xh);
          const o = n.filter((e) => e.name === t);
          if (o.length === 0) {
            const e = r.resolve === 'global' ? 'union' : r.resolve;
            const t = r.type === 'point' ? ', true, true)' : ')';
            n.push({ name: r.name, update: `${Ah}(${s}, ${Be(e)}${t}` });
          }
          i = true;
          for (const i of Dh) {
            if (i.defined(r) && i.topLevelSignals) {
              n = i.topLevelSignals(e, r, n);
            }
          }
        }
        if (i) {
          const e = n.filter((e) => e.name === 'unit');
          if (e.length === 0) {
            n.unshift({
              name: 'unit',
              value: {},
              on: [
                { events: 'mousemove', update: 'isTuple(group()) ? group() : unit' },
              ],
            });
          }
        }
        return Ig(n);
      }
      function Rg(e, n) {
        var t;
        const i = [...n];
        for (const r of vn(
          (t = e.component.selection) !== null && t !== void 0 ? t : {}
        )) {
          const n = { name: r.name + xh };
          if (r.init) {
            const t = r.project.items.map((e) => {
              const { signals: n } = e,
                t = zg(e, ['signals']);
              return t;
            });
            n.values = r.init.map((n) => ({
              unit: $h(e, { escape: false }),
              fields: t,
              values: Ng(n, false),
            }));
          }
          const t = i.filter((e) => e.name === r.name + xh);
          if (!t.length) {
            i.push(n);
          }
        }
        return i;
      }
      function qg(e, n) {
        var t;
        for (const i of vn(
          (t = e.component.selection) !== null && t !== void 0 ? t : {}
        )) {
          for (const t of Dh) {
            if (t.defined(i) && t.marks) {
              n = t.marks(e, i, n);
            }
          }
        }
        return n;
      }
      function Ug(e, n) {
        for (const t of e.children) {
          if (jA(t)) {
            n = qg(t, n);
          }
        }
        return n;
      }
      function Wg(e, n, t, i) {
        const r = Cx(e, n.param, n);
        return {
          signal:
            Wa(t.get('type')) && F(i) && i[0] > i[1]
              ? `isValid(${r}) && reverse(${r})`
              : r,
        };
      }
      function Ig(e) {
        return e.map((e) => {
          if (e.on && !e.on.length) delete e.on;
          return e;
        });
      }
      class Hg {
        constructor(e, n) {
          this.debugName = n;
          this._children = [];
          this._parent = null;
          if (e) {
            this.parent = e;
          }
        }
        clone() {
          throw new Error('Cannot clone node');
        }
        get parent() {
          return this._parent;
        }
        set parent(e) {
          this._parent = e;
          if (e) {
            e.addChild(this);
          }
        }
        get children() {
          return this._children;
        }
        numChildren() {
          return this._children.length;
        }
        addChild(e, n) {
          if (this._children.includes(e)) {
            xo(os);
            return;
          }
          if (n !== undefined) {
            this._children.splice(n, 0, e);
          } else {
            this._children.push(e);
          }
        }
        removeChild(e) {
          const n = this._children.indexOf(e);
          this._children.splice(n, 1);
          return n;
        }
        remove() {
          let e = this._parent.removeChild(this);
          for (const n of this._children) {
            n._parent = this._parent;
            this._parent.addChild(n, e++);
          }
        }
        insertAsParentOf(e) {
          const n = e.parent;
          n.removeChild(this);
          this.parent = n;
          e.parent = this;
        }
        swapWithParent() {
          const e = this._parent;
          const n = e.parent;
          for (const t of this._children) {
            t.parent = e;
          }
          this._children = [];
          e.removeChild(this);
          e.parent.removeChild(e);
          this.parent = n;
          e.parent = this;
        }
      }
      class Gg extends Hg {
        constructor(e, n, t, i) {
          super(e, n);
          this.type = t;
          this.refCounts = i;
          this._source = this._name = n;
          if (this.refCounts && !(this._name in this.refCounts)) {
            this.refCounts[this._name] = 0;
          }
        }
        clone() {
          const e = new this.constructor();
          e.debugName = `clone_${this.debugName}`;
          e._source = this._source;
          e._name = `clone_${this._name}`;
          e.type = this.type;
          e.refCounts = this.refCounts;
          e.refCounts[e._name] = 0;
          return e;
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return new Set();
        }
        hash() {
          if (this._hash === undefined) {
            this._hash = `Output ${zn()}`;
          }
          return this._hash;
        }
        getSource() {
          this.refCounts[this._name]++;
          return this._source;
        }
        isRequired() {
          return !!this.refCounts[this._name];
        }
        setSource(e) {
          this._source = e;
        }
      }
      var Vg =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class Yg extends Hg {
        constructor(e, n) {
          super(e);
          this.formula = n;
        }
        clone() {
          return new Yg(null, Ze(this.formula));
        }
        static makeFromEncoding(e, n) {
          const t = n.reduceFieldDef((e, n) => {
            const { field: t, timeUnit: i } = n;
            if (i) {
              const r = el(n, { forAs: true });
              e[rn({ as: r, field: t, timeUnit: i })] = {
                as: r,
                field: t,
                timeUnit: i,
              };
            }
            return e;
          }, {});
          if (bn(t)) {
            return null;
          }
          return new Yg(e, t);
        }
        static makeFromTransform(e, n) {
          const t = Object.assign({}, n),
            { timeUnit: i } = t,
            r = Vg(t, ['timeUnit']);
          const s = Xo(i);
          const o = Object.assign(Object.assign({}, r), { timeUnit: s });
          return new Yg(e, { [rn(o)]: o });
        }
        merge(e) {
          this.formula = Object.assign({}, this.formula);
          for (const n in e.formula) {
            if (!this.formula[n]) {
              this.formula[n] = e.formula[n];
            }
          }
          for (const n of e.children) {
            e.removeChild(n);
            n.parent = this;
          }
          e.remove();
        }
        removeFormulas(e) {
          const n = {};
          for (const [t, i] of xn(this.formula)) {
            if (!e.has(i.as)) {
              n[t] = i;
            }
          }
          this.formula = n;
        }
        producedFields() {
          return new Set(vn(this.formula).map((e) => e.as));
        }
        dependentFields() {
          return new Set(vn(this.formula).map((e) => e.field));
        }
        hash() {
          return `TimeUnit ${rn(this.formula)}`;
        }
        assemble() {
          const e = [];
          for (const n of vn(this.formula)) {
            const { field: t, as: i, timeUnit: r } = n;
            const s = Xo(r),
              { unit: o, utc: a } = s,
              u = Vg(s, ['unit', 'utc']);
            e.push(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      { field: Cn(t), type: 'timeunit' },
                      o ? { units: Ho(o) } : {}
                    ),
                    a ? { timezone: 'utc' } : {}
                  ),
                  u
                ),
                { as: [i, `${i}_end`] }
              )
            );
          }
          return e;
        }
      }
      var Qg =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const Xg = '_tuple_fields';
      class Jg {
        constructor(...e) {
          this.items = e;
          this.hasChannel = {};
          this.hasField = {};
        }
      }
      const Kg = {
        defined: () => true,
        parse: (e, n, t) => {
          var i;
          const r = n.name;
          const s =
            (i = n.project) !== null && i !== void 0 ? i : (n.project = new Jg());
          const o = {};
          const a = {};
          const u = new Set();
          const c = (e, n) => {
            const t = n === 'visual' ? e.channel : e.field;
            let i = wn(`${r}_${t}`);
            for (let s = 1; u.has(i); s++) {
              i = wn(`${r}_${t}_${s}`);
            }
            u.add(i);
            return { [n]: i };
          };
          const l = n.type;
          const f = e.config.selection[l];
          const d = t.value !== undefined ? J(t.value) : null;
          let { fields: p, encodings: g } = $(t.select) ? t.select : {};
          if (!p && !g && d) {
            for (const e of d) {
              if (!$(e)) {
                continue;
              }
              for (const n of yn(e)) {
                if (Ht(n)) {
                  (g || (g = [])).push(n);
                } else {
                  if (l === 'interval') {
                    xo(es);
                    g = f.encodings;
                  } else {
                    (p || (p = [])).push(n);
                  }
                }
              }
            }
          }
          if (!p && !g) {
            g = f.encodings;
            if ('fields' in f) {
              p = f.fields;
            }
          }
          for (const m of g !== null && g !== void 0 ? g : []) {
            const n = e.fieldDef(m);
            if (n) {
              let t = n.field;
              if (n.aggregate) {
                xo(Hr(m, n.aggregate));
                continue;
              } else if (!t) {
                xo(Ir(m));
                continue;
              }
              if (n.timeUnit) {
                t = e.vgField(m);
                const i = { timeUnit: n.timeUnit, as: t, field: n.field };
                a[rn(i)] = i;
              }
              if (!o[t]) {
                let i = 'E';
                if (l === 'interval') {
                  const n = e.getScaleComponent(m).get('type');
                  if (Wa(n)) {
                    i = 'R';
                  }
                } else if (n.bin) {
                  i = 'R-RE';
                }
                const r = { field: t, channel: m, type: i };
                r.signals = Object.assign(
                  Object.assign({}, c(r, 'data')),
                  c(r, 'visual')
                );
                s.items.push((o[t] = r));
                s.hasField[t] = s.hasChannel[m] = o[t];
              }
            } else {
              xo(Ir(m));
            }
          }
          for (const m of p !== null && p !== void 0 ? p : []) {
            if (s.hasField[m]) continue;
            const e = { type: 'E', field: m };
            e.signals = Object.assign({}, c(e, 'data'));
            s.items.push(e);
            s.hasField[m] = e;
          }
          if (d) {
            n.init = d.map((e) =>
              s.items.map((n) =>
                $(e) ? (e[n.channel] !== undefined ? e[n.channel] : e[n.field]) : e
              )
            );
          }
          if (!bn(a)) {
            s.timeUnit = new Yg(null, a);
          }
        },
        signals: (e, n, t) => {
          const i = n.name + Xg;
          const r = t.filter((e) => e.name === i);
          return r.length > 0
            ? t
            : t.concat({
                name: i,
                value: n.project.items.map((e) => {
                  const { signals: n, hasLegend: t } = e,
                    i = Qg(e, ['signals', 'hasLegend']);
                  i.field = Cn(i.field);
                  return i;
                }),
              });
        },
      };
      const Zg = Kg;
      const em = {
        defined: (e) =>
          e.type === 'interval' &&
          e.resolve === 'global' &&
          e.bind &&
          e.bind === 'scales',
        parse: (e, n) => {
          const t = (n.scales = []);
          for (const i of n.project.items) {
            const r = i.channel;
            if (!zi(r)) {
              continue;
            }
            const s = e.getScaleComponent(r);
            const o = s ? s.get('type') : undefined;
            if (!s || !Wa(o)) {
              xo(Qr);
              continue;
            }
            s.set('selectionExtent', { param: n.name, field: i.field }, true);
            t.push(i);
          }
        },
        topLevelSignals: (e, n, t) => {
          const i = n.scales.filter(
            (e) => t.filter((n) => n.name === e.signals.data).length === 0
          );
          if (!e.parent || im(e) || i.length === 0) {
            return t;
          }
          const r = t.filter((e) => e.name === n.name)[0];
          let s = r.update;
          if (s.indexOf(Ah) >= 0) {
            r.update = `{${i
              .map((e) => `${Be(Cn(e.field))}: ${e.signals.data}`)
              .join(', ')}}`;
          } else {
            for (const e of i) {
              const n = `${Be(Cn(e.field))}: ${e.signals.data}`;
              if (!s.includes(n)) {
                s = `${s.substring(0, s.length - 1)}, ${n}}`;
              }
            }
            r.update = s;
          }
          return t.concat(i.map((e) => ({ name: e.signals.data })));
        },
        signals: (e, n, t) => {
          if (e.parent && !im(e)) {
            for (const e of n.scales) {
              const n = t.filter((n) => n.name === e.signals.data)[0];
              n.push = 'outer';
              delete n.value;
              delete n.update;
            }
          }
          return t;
        },
      };
      const nm = em;
      function tm(e, n) {
        const t = Be(e.scaleName(n));
        return `domain(${t})`;
      }
      function im(e) {
        var n;
        return (
          e.parent &&
          FA(e.parent) &&
          ((n = !e.parent.parent) !== null && n !== void 0 ? n : im(e.parent.parent))
        );
      }
      var rm =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      const sm = '_brush';
      const om = '_scale_trigger';
      const am = {
        defined: (e) => e.type === 'interval',
        signals: (e, n, t) => {
          const i = n.name;
          const r = i + Xg;
          const s = nm.defined(n);
          const o = n.init ? n.init[0] : null;
          const a = [];
          const u = [];
          if (n.translate && !s) {
            const e = `!event.item || event.item.mark.name !== ${Be(i + sm)}`;
            lm(n, (n, t) => {
              var i;
              var r;
              const s = J(
                (i = (r = t.between[0]).filter) !== null && i !== void 0
                  ? i
                  : (r.filter = [])
              );
              if (!s.includes(e)) {
                s.push(e);
              }
              return n;
            });
          }
          n.project.items.forEach((i, r) => {
            const s = i.channel;
            if (s !== Hn && s !== Gn) {
              xo('Interval selections only support x and y encoding channels.');
              return;
            }
            const c = o ? o[r] : null;
            const l = cm(e, n, i, c);
            const f = i.signals.data;
            const d = i.signals.visual;
            const p = Be(e.scaleName(s));
            const g = e.getScaleComponent(s).get('type');
            const m = Wa(g) ? '+' : '';
            t.push(...l);
            a.push(f);
            u.push({
              scaleName: e.scaleName(s),
              expr:
                `(!isArray(${f}) || ` +
                `(${m}invert(${p}, ${d})[0] === ${m}${f}[0] && ` +
                `${m}invert(${p}, ${d})[1] === ${m}${f}[1]))`,
            });
          });
          if (!s && u.length) {
            t.push({
              name: i + om,
              value: {},
              on: [
                {
                  events: u.map((e) => ({ scale: e.scaleName })),
                  update: `${u.map((e) => e.expr).join(' && ')} ? ${i + om} : {}`,
                },
              ],
            });
          }
          const c = `unit: ${$h(e)}, fields: ${r}, values`;
          return t.concat(
            Object.assign(
              Object.assign({ name: i + Oh }, o ? { init: `{${c}: ${Ng(o)}}` } : {}),
              a.length
                ? {
                    on: [
                      {
                        events: [{ signal: a.join(' || ') }],
                        update: `${a.join(' && ')} ? {${c}: [${a}]} : null`,
                      },
                    ],
                  }
                : {}
            )
          );
        },
        marks: (e, n, t) => {
          const i = n.name;
          const { x: r, y: s } = n.project.hasChannel;
          const o = r && r.signals.visual;
          const a = s && s.signals.visual;
          const u = `data(${Be(n.name + xh)})`;
          if (nm.defined(n) || (!r && !s)) {
            return t;
          }
          const c = {
            x: r !== undefined ? { signal: `${o}[0]` } : { value: 0 },
            y: s !== undefined ? { signal: `${a}[0]` } : { value: 0 },
            x2: r !== undefined ? { signal: `${o}[1]` } : { field: { group: 'width' } },
            y2:
              s !== undefined ? { signal: `${a}[1]` } : { field: { group: 'height' } },
          };
          if (n.resolve === 'global') {
            for (const n of yn(c)) {
              c[n] = [
                Object.assign(
                  { test: `${u}.length && ${u}[0].unit === ${$h(e)}` },
                  c[n]
                ),
                { value: 0 },
              ];
            }
          }
          const l = n.mark,
            { fill: f, fillOpacity: d, cursor: p } = l,
            g = rm(l, ['fill', 'fillOpacity', 'cursor']);
          const m = yn(g).reduce((e, n) => {
            e[n] = [
              {
                test: [
                  r !== undefined && `${o}[0] !== ${o}[1]`,
                  s !== undefined && `${a}[0] !== ${a}[1]`,
                ]
                  .filter((e) => e)
                  .join(' && '),
                value: g[n],
              },
              { value: null },
            ];
            return e;
          }, {});
          return [
            {
              name: `${i + sm}_bg`,
              type: 'rect',
              clip: true,
              encode: {
                enter: { fill: { value: f }, fillOpacity: { value: d } },
                update: c,
              },
            },
            ...t,
            {
              name: i + sm,
              type: 'rect',
              clip: true,
              encode: {
                enter: Object.assign(
                  Object.assign({}, p ? { cursor: { value: p } } : {}),
                  { fill: { value: 'transparent' } }
                ),
                update: Object.assign(Object.assign({}, c), m),
              },
            },
          ];
        },
      };
      const um = am;
      function cm(e, n, t, i) {
        const r = t.channel;
        const s = t.signals.visual;
        const o = t.signals.data;
        const a = nm.defined(n);
        const u = Be(e.scaleName(r));
        const c = e.getScaleComponent(r);
        const l = c ? c.get('type') : undefined;
        const f = (e) => `scale(${u}, ${e})`;
        const d = e.getSizeSignalRef(r === Hn ? 'width' : 'height').signal;
        const p = `${r}(unit)`;
        const g = lm(n, (e, n) => [
          ...e,
          { events: n.between[0], update: `[${p}, ${p}]` },
          { events: n, update: `[${s}[0], clamp(${p}, 0, ${d})]` },
        ]);
        g.push({
          events: { signal: n.name + om },
          update: Wa(l) ? `[${f(`${o}[0]`)}, ${f(`${o}[1]`)}]` : `[0, 0]`,
        });
        return a
          ? [{ name: o, on: [] }]
          : [
              Object.assign(
                Object.assign(
                  { name: s },
                  i ? { init: Ng(i, true, f) } : { value: [] }
                ),
                { on: g }
              ),
              Object.assign(Object.assign({ name: o }, i ? { init: Ng(i) } : {}), {
                on: [
                  {
                    events: { signal: s },
                    update: `${s}[0] === ${s}[1] ? null : invert(${u}, ${s})`,
                  },
                ],
              }),
            ];
      }
      function lm(e, n) {
        return e.events.reduce((e, t) => {
          if (!t.between) {
            xo(`${t} is not an ordered event stream for interval selections.`);
            return e;
          }
          return n(e, t);
        }, []);
      }
      const fm = {
        defined: (e) => e.type === 'point',
        signals: (e, n, t) => {
          var i;
          const r = n.name;
          const s = r + Xg;
          const o = n.project;
          const a = '(item().isVoronoi ? datum.datum : datum)';
          const u = o.items
            .map((n) => {
              const t = e.fieldDef(n.channel);
              return (t === null || t === void 0 ? void 0 : t.bin)
                ? `[${a}[${Be(e.vgField(n.channel, {}))}], ` +
                    `${a}[${Be(e.vgField(n.channel, { binSuffix: 'end' }))}]]`
                : `${a}[${Be(n.field)}]`;
            })
            .join(', ');
          const c = `unit: ${$h(e)}, fields: ${s}, values`;
          const l = n.events;
          const f = vn((i = e.component.selection) !== null && i !== void 0 ? i : {})
            .reduce((e, n) => (n.type === 'interval' ? e.concat(n.name + sm) : e), [])
            .map((e) => `indexof(item().mark.name, '${e}') < 0`)
            .join(' && ');
          const d = `datum && item().mark.marktype !== 'group'` + (f ? ` && ${f}` : '');
          return t.concat([
            {
              name: r + Oh,
              on: l
                ? [{ events: l, update: `${d} ? {${c}: [${u}]} : null`, force: true }]
                : [],
            },
          ]);
        },
      };
      const dm = fm;
      function pm(e, n, t, i) {
        const r = zc(n) && n.condition;
        const s = i(n);
        if (r) {
          const n = J(r);
          const o = n.map((n) => {
            const t = i(n);
            if (kc(n)) {
              const { param: i, empty: r } = n;
              const s = kx(e, { param: i, empty: r });
              return Object.assign({ test: s }, t);
            } else {
              const i = Sx(e, n.test);
              return Object.assign({ test: i }, t);
            }
          });
          return { [t]: [...o, ...(s !== undefined ? [s] : [])] };
        } else {
          return s !== undefined ? { [t]: s } : {};
        }
      }
      function gm(e, n = 'text') {
        const t = e.encoding[n];
        return pm(e, t, n, (n) => mm(n, e.config));
      }
      function mm(e, n, t = 'datum') {
        if (e) {
          if (Vc(e)) {
            return Dr(e.value);
          }
          if (Hc(e)) {
            const { format: i, formatType: r } = pl(e);
            return ac({
              fieldOrDatumDef: e,
              format: i,
              formatType: r,
              expr: t,
              config: n,
            });
          }
        }
        return undefined;
      }
      function hm(e, n = {}) {
        const { encoding: t, markDef: i, config: r, stack: s } = e;
        const o = t.tooltip;
        if (F(o)) {
          return { tooltip: ym({ tooltip: o }, s, r, n) };
        } else {
          const a = n.reactiveGeom ? 'datum.datum' : 'datum';
          return pm(e, o, 'tooltip', (e) => {
            const o = mm(e, r, a);
            if (o) {
              return o;
            }
            if (e === null) {
              return undefined;
            }
            let u = Er('tooltip', i, r);
            if (u === true) {
              u = { content: 'encoding' };
            }
            if (je(u)) {
              return { value: u };
            } else if ($(u)) {
              if (fr(u)) {
                return u;
              } else if (u.content === 'encoding') {
                return ym(t, s, r, n);
              } else {
                return { signal: a };
              }
            }
            return undefined;
          });
        }
      }
      function bm(e, n, t, { reactiveGeom: i } = {}) {
        const r = {};
        const s = i ? 'datum.datum' : 'datum';
        const o = [];
        function a(i, a) {
          const u = Qt(a);
          const c = Gc(i)
            ? i
            : Object.assign(Object.assign({}, i), { type: e[u].type });
          const l = c.title || dl(c, t);
          const f = J(l).join(', ');
          let d;
          if (bi(a)) {
            const i = a === 'x' ? 'x2' : 'y2';
            const o = ml(e[i]);
            if (tr(c.bin) && o) {
              const e = el(c, { expr: s });
              const n = el(o, { expr: s });
              const { format: a, formatType: u } = pl(c);
              d = hc(e, n, a, u, t);
              r[i] = true;
            } else if (n && n.fieldChannel === a && n.offset === 'normalize') {
              const { format: e, formatType: n } = pl(c);
              d = ac({
                fieldOrDatumDef: c,
                format: e,
                formatType: n,
                expr: s,
                config: t,
                normalizeStack: true,
              }).signal;
            }
          }
          d !== null && d !== void 0 ? d : (d = mm(c, t, s).signal);
          o.push({ channel: a, key: f, value: d });
        }
        Ql(e, (e, n) => {
          if (Lc(e)) {
            a(e, n);
          } else if (Nc(e)) {
            a(e.condition, n);
          }
        });
        const u = {};
        for (const { channel: c, key: l, value: f } of o) {
          if (!r[c] && !u[l]) {
            u[l] = f;
          }
        }
        return u;
      }
      function ym(e, n, t, { reactiveGeom: i } = {}) {
        const r = bm(e, n, t, { reactiveGeom: i });
        const s = xn(r).map(([e, n]) => `"${e}": ${n}`);
        return s.length > 0 ? { signal: `{${s.join(', ')}}` } : undefined;
      }
      function vm(e) {
        const { markDef: n, config: t } = e;
        const i = Er('aria', n, t);
        if (i === false) {
          return {};
        }
        return Object.assign(
          Object.assign(Object.assign({}, i ? { aria: i } : {}), xm(e)),
          Om(e)
        );
      }
      function xm(e) {
        const { mark: n, markDef: t, config: i } = e;
        if (i.aria === false) {
          return {};
        }
        const r = Er('ariaRoleDescription', t, i);
        if (r != null) {
          return { ariaRoleDescription: { value: r } };
        }
        return n in yr ? {} : { ariaRoleDescription: { value: n } };
      }
      function Om(e) {
        const { encoding: n, markDef: t, config: i, stack: r } = e;
        const s = n.description;
        if (s) {
          return pm(e, s, 'description', (n) => mm(n, e.config));
        }
        const o = Er('description', t, i);
        if (o != null) {
          return { description: Dr(o) };
        }
        if (i.aria === false) {
          return {};
        }
        const a = bm(n, r, i);
        if (bn(a)) {
          return undefined;
        }
        return {
          description: {
            signal: xn(a)
              .map(([e, n], t) => `"${t > 0 ? '; ' : ''}${e}: " + (${n})`)
              .join(' + '),
          },
        };
      }
      function wm(e, n, t = {}) {
        const { markDef: i, encoding: r, config: s } = n;
        const { vgChannel: o } = t;
        let { defaultRef: a, defaultValue: u } = t;
        if (a === undefined) {
          u !== null && u !== void 0
            ? u
            : (u = Er(e, i, s, { vgChannel: o, ignoreVgConfig: true }));
          if (u !== undefined) {
            a = Dr(u);
          }
        }
        const c = r[e];
        return pm(n, c, o !== null && o !== void 0 ? o : e, (t) =>
          tc({
            channel: e,
            channelDef: t,
            markDef: i,
            config: s,
            scaleName: n.scaleName(e),
            scale: n.getScaleComponent(e),
            stack: null,
            defaultRef: a,
          })
        );
      }
      function jm(e, n = { filled: undefined }) {
        var t, i, r, s;
        const { markDef: o, encoding: a, config: u } = e;
        const { type: c } = o;
        const l = (t = n.filled) !== null && t !== void 0 ? t : Er('filled', o, u);
        const f = on(['bar', 'point', 'circle', 'square', 'geoshape'], c)
          ? 'transparent'
          : undefined;
        const d =
          (r =
            (i = Er(l === true ? 'color' : undefined, o, u, { vgChannel: 'fill' })) !==
              null && i !== void 0
              ? i
              : u.mark[l === true && 'color']) !== null && r !== void 0
            ? r
            : f;
        const p =
          (s = Er(l === false ? 'color' : undefined, o, u, { vgChannel: 'stroke' })) !==
            null && s !== void 0
            ? s
            : u.mark[l === false && 'color'];
        const g = l ? 'fill' : 'stroke';
        const m = Object.assign(
          Object.assign({}, d ? { fill: Dr(d) } : {}),
          p ? { stroke: Dr(p) } : {}
        );
        if (o.color && (l ? o.fill : o.stroke)) {
          xo(bs('property', { fill: 'fill' in o, stroke: 'stroke' in o }));
        }
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign({}, m),
              wm('color', e, { vgChannel: g, defaultValue: l ? d : p })
            ),
            wm('fill', e, { defaultValue: a.fill ? d : undefined })
          ),
          wm('stroke', e, { defaultValue: a.stroke ? p : undefined })
        );
      }
      function Am(e) {
        const { encoding: n, mark: t } = e;
        const i = n.order;
        if (!$u(t) && Vc(i)) {
          return pm(e, i, 'zindex', (e) => Dr(e.value));
        }
        return {};
      }
      function Dm(e, n) {
        const t = Zt(e);
        const i = n[t];
        if (i) {
          return i;
        }
        return undefined;
      }
      function Fm(e, n, { defaultPos: t, vgChannel: i }) {
        const { encoding: r, markDef: s, config: o, stack: a } = n;
        const u = r[e];
        const c = r[Jt(e)];
        const l = n.scaleName(e);
        const f = n.getScaleComponent(e);
        const d = Dm(e, s);
        const p = km({ model: n, defaultPos: t, channel: e, scaleName: l, scale: f });
        const g =
          !u && bi(e) && (r.latitude || r.longitude)
            ? { field: n.getName(e) }
            : $m({
                channel: e,
                channelDef: u,
                channel2Def: c,
                markDef: s,
                config: o,
                scaleName: l,
                scale: f,
                stack: a,
                offset: d,
                defaultRef: p,
              });
        return g ? { [i || e]: g } : undefined;
      }
      function $m(e) {
        const {
          channel: n,
          channelDef: t,
          scaleName: i,
          stack: r,
          offset: s,
          markDef: o,
        } = e;
        if (Hc(t) && r && n === r.fieldChannel) {
          if (Lc(t)) {
            let e = t.bandPosition;
            if (
              e === undefined &&
              o.type === 'text' &&
              (n === 'radius' || n === 'theta')
            ) {
              e = 0.5;
            }
            if (e !== undefined) {
              return nc({
                scaleName: i,
                fieldOrDatumDef: t,
                startSuffix: 'start',
                bandPosition: e,
                offset: s,
              });
            }
          }
          return ec(t, i, { suffix: 'end' }, { offset: s });
        }
        return Qu(e);
      }
      function km({ model: e, defaultPos: n, channel: t, scaleName: i, scale: r }) {
        const { markDef: s, config: o } = e;
        return () => {
          const a = Qt(t);
          const u = Xt(t);
          const c = Er(t, s, o, { vgChannel: u });
          if (c !== undefined) {
            return ic(t, c);
          }
          switch (n) {
            case 'zeroOrMin':
            case 'zeroOrMax':
              if (i) {
                const e = r.get('type');
                if (on([Aa.LOG, Aa.TIME, Aa.UTC], e)) {
                } else {
                  if (r.domainDefinitelyIncludesZero()) {
                    return { scale: i, value: 0 };
                  }
                }
              }
              if (n === 'zeroOrMin') {
                return a === 'y' ? { field: { group: 'height' } } : { value: 0 };
              } else {
                switch (a) {
                  case 'radius':
                    return { signal: `min(${e.width.signal},${e.height.signal})/2` };
                  case 'theta':
                    return { signal: '2*PI' };
                  case 'x':
                    return { field: { group: 'width' } };
                  case 'y':
                    return { value: 0 };
                }
              }
              break;
            case 'mid': {
              const n = e[Kt(t)];
              return Object.assign(Object.assign({}, n), { mult: 0.5 });
            }
          }
          return undefined;
        };
      }
      const Cm = { left: 'x', center: 'xc', right: 'x2' };
      const Em = { top: 'y', middle: 'yc', bottom: 'y2' };
      function Sm(e, n, t, i = 'middle') {
        if (e === 'radius' || e === 'theta') {
          return Xt(e);
        }
        const r = e === 'x' ? 'align' : 'baseline';
        const s = Er(r, n, t);
        let o;
        if (fr(s)) {
          xo($s(r));
          o = undefined;
        } else {
          o = s;
        }
        if (e === 'x') {
          return Cm[o || (i === 'top' ? 'left' : 'center')];
        } else {
          return Em[o || i];
        }
      }
      function Bm(e, n, { defaultPos: t, defaultPos2: i, range: r }) {
        if (r) {
          return _m(e, n, { defaultPos: t, defaultPos2: i });
        }
        return Fm(e, n, { defaultPos: t });
      }
      function _m(e, n, { defaultPos: t, defaultPos2: i }) {
        const { markDef: r, config: s } = n;
        const o = Jt(e);
        const a = Kt(e);
        const u = Pm(n, i, o);
        const c = u[a] ? Sm(e, r, s) : Xt(e);
        return Object.assign(
          Object.assign({}, Fm(e, n, { defaultPos: t, vgChannel: c })),
          u
        );
      }
      function Pm(e, n, t) {
        const { encoding: i, mark: r, markDef: s, stack: o, config: a } = e;
        const u = Qt(t);
        const c = Kt(t);
        const l = Xt(t);
        const f = i[u];
        const d = e.scaleName(u);
        const p = e.getScaleComponent(u);
        const g = t in i || t in s ? Dm(t, e.markDef) : Dm(u, e.markDef);
        if (!f && (t === 'x2' || t === 'y2') && (i.latitude || i.longitude)) {
          const n = Kt(t);
          const i = e.markDef[n];
          if (i != null) {
            return { [n]: { value: i } };
          } else {
            return { [l]: { field: e.getName(t) } };
          }
        }
        const m = zm({
          channel: t,
          channelDef: f,
          channel2Def: i[t],
          markDef: s,
          config: a,
          scaleName: d,
          scale: p,
          stack: o,
          offset: g,
          defaultRef: undefined,
        });
        if (m !== undefined) {
          return { [l]: m };
        }
        return (
          Nm(t, s) ||
          Nm(t, { [t]: Br(t, s, a.style), [c]: Br(c, s, a.style) }) ||
          Nm(t, a[r]) ||
          Nm(t, a.mark) || {
            [l]: km({ model: e, defaultPos: n, channel: t, scaleName: d, scale: p })(),
          }
        );
      }
      function zm({
        channel: e,
        channelDef: n,
        channel2Def: t,
        markDef: i,
        config: r,
        scaleName: s,
        scale: o,
        stack: a,
        offset: u,
        defaultRef: c,
      }) {
        if (Hc(n) && a && e.charAt(0) === a.fieldChannel.charAt(0)) {
          return ec(n, s, { suffix: 'start' }, { offset: u });
        }
        return Qu({
          channel: e,
          channelDef: t,
          scaleName: s,
          scale: o,
          stack: a,
          markDef: i,
          config: r,
          offset: u,
          defaultRef: c,
        });
      }
      function Nm(e, n) {
        const t = Kt(e);
        const i = Xt(e);
        if (n[i] !== undefined) {
          return { [i]: ic(e, n[i]) };
        } else if (n[e] !== undefined) {
          return { [i]: ic(e, n[e]) };
        } else if (n[t]) {
          const i = n[t];
          if (Uu(i)) {
            xo(ys(t));
          } else {
            return { [t]: ic(e, i) };
          }
        }
        return undefined;
      }
      function Mm(e, n, t) {
        var i, r, s, o;
        const { config: a, encoding: u, markDef: c } = e;
        const l = Jt(n);
        const f = Kt(n);
        const d = u[n];
        const p = u[l];
        const g = e.getScaleComponent(n);
        const m = g ? g.get('type') : undefined;
        const h = e.scaleName(n);
        const b = c.orient;
        const y =
          (r = (i = u[f]) !== null && i !== void 0 ? i : u.size) !== null &&
          r !== void 0
            ? r
            : Er('size', c, a, { vgChannel: f });
        const v = t === 'bar' && (n === 'x' ? b === 'vertical' : b === 'horizontal');
        if (
          Lc(d) &&
          (nr(d.bin) || tr(d.bin) || (d.timeUnit && !p)) &&
          !(y && !Uu(y)) &&
          !Ua(m)
        ) {
          const t = _c({
            channel: n,
            fieldDef: d,
            markDef: c,
            config: a,
            scaleType: m,
          });
          const i = (s = e.component.axes[n]) === null || s === void 0 ? void 0 : s[0];
          const r =
            (o = i === null || i === void 0 ? void 0 : i.get('translate')) !== null &&
            o !== void 0
              ? o
              : 0.5;
          return qm({
            fieldDef: d,
            fieldDef2: p,
            channel: n,
            markDef: c,
            scaleName: h,
            bandSize: t,
            axisTranslate: r,
            spacing: bi(n) ? Er('binSpacing', c, a) : undefined,
            reverse: g.get('reverse'),
            config: a,
          });
        } else if (((Hc(d) && Ua(m)) || v) && !p) {
          return Lm(d, n, e);
        } else {
          return _m(n, e, { defaultPos: 'zeroOrMax', defaultPos2: 'zeroOrMin' });
        }
      }
      function Tm(e, n, t, i, r) {
        if (Uu(r)) {
          if (t) {
            const e = t.get('type');
            if (e === 'band') {
              return { scale: n, band: r.band };
            } else if (r.band !== 1) {
              xo(Bs(e));
              r = undefined;
            }
          } else {
            return { mult: r.band, field: { group: e } };
          }
        } else if (fr(r)) {
          return r;
        } else if (r) {
          return { value: r };
        }
        if (t) {
          const e = t.get('range');
          if (dr(e) && Oe(e.step)) {
            return { value: e.step - 2 };
          }
        }
        const s = dd(i.view, e);
        return { value: s - 2 };
      }
      function Lm(e, n, t) {
        const { markDef: i, encoding: r, config: s, stack: o } = t;
        const a = i.orient;
        const u = t.scaleName(n);
        const c = t.getScaleComponent(n);
        const l = Kt(n);
        const f = Jt(n);
        const d = (a === 'horizontal' && n === 'y') || (a === 'vertical' && n === 'x');
        let p;
        if (r.size || i.size) {
          if (d) {
            p = wm('size', t, { vgChannel: l, defaultRef: Dr(i.size) });
          } else {
            xo(Ns(i.type));
          }
        }
        const g = _c({
          channel: n,
          fieldDef: e,
          markDef: i,
          config: s,
          scaleType: c === null || c === void 0 ? void 0 : c.get('type'),
          useVlSizeChannel: d,
        });
        p = p || { [l]: Tm(l, u, c, s, g) };
        const m =
          (c === null || c === void 0 ? void 0 : c.get('type')) !== 'band' ||
          !('band' in p[l])
            ? 'middle'
            : 'top';
        const h = Sm(n, i, s, m);
        const b = h === 'xc' || h === 'yc';
        const y = Dm(n, i);
        const v = Qu({
          channel: n,
          channelDef: e,
          markDef: i,
          config: s,
          scaleName: u,
          scale: c,
          stack: o,
          offset: y,
          defaultRef: km({
            model: t,
            defaultPos: 'mid',
            channel: n,
            scaleName: u,
            scale: c,
          }),
          bandPosition: b
            ? 0.5
            : fr(g)
            ? { signal: `(1-${g})/2` }
            : Uu(g)
            ? (1 - g.band) / 2
            : 0,
        });
        if (l) {
          return Object.assign({ [h]: v }, p);
        } else {
          const e = Xt(f);
          const n = p[l];
          const t = y ? Object.assign(Object.assign({}, n), { offset: y }) : n;
          return {
            [h]: v,
            [e]: F(v)
              ? [v[0], Object.assign(Object.assign({}, v[1]), { offset: t })]
              : Object.assign(Object.assign({}, v), { offset: t }),
          };
        }
      }
      function Rm(e, n, t, i, r) {
        if (At(e)) {
          return 0;
        }
        const s = e === 'x' || e === 'y2' ? -n / 2 : n / 2;
        if (fr(t) || fr(r) || fr(i)) {
          const e = $r(t);
          const n = $r(r);
          const o = $r(i);
          const a = o ? `${o} + ` : '';
          const u = e ? `(${e} ? -1 : 1) * ` : '';
          const c = n ? `(${n} + ${s})` : s;
          return { signal: a + u + c };
        } else {
          r = r || 0;
          return i + (t ? -r - s : +r + s);
        }
      }
      function qm({
        fieldDef: e,
        fieldDef2: n,
        channel: t,
        bandSize: i,
        scaleName: r,
        markDef: s,
        spacing: o = 0,
        axisTranslate: a,
        reverse: u,
        config: c,
      }) {
        const l = Jt(t);
        const f = Xt(t);
        const d = Xt(l);
        const p = Dm(t, s);
        const g = fr(i)
          ? { signal: `(1-${i.signal})/2` }
          : Uu(i)
          ? (1 - i.band) / 2
          : 0.5;
        if (nr(e.bin) || e.timeUnit) {
          return {
            [d]: Um({
              channel: t,
              fieldDef: e,
              scaleName: r,
              markDef: s,
              bandPosition: g,
              offset: Rm(l, o, u, a, p),
              config: c,
            }),
            [f]: Um({
              channel: t,
              fieldDef: e,
              scaleName: r,
              markDef: s,
              bandPosition: fr(g) ? { signal: `1-${g.signal}` } : 1 - g,
              offset: Rm(t, o, u, a, p),
              config: c,
            }),
          };
        } else if (tr(e.bin)) {
          const i = ec(e, r, {}, { offset: Rm(l, o, u, a, p) });
          if (Lc(n)) {
            return { [d]: i, [f]: ec(n, r, {}, { offset: Rm(t, o, u, a, p) }) };
          } else if (ir(e.bin) && e.bin.step) {
            return {
              [d]: i,
              [f]: {
                signal: `scale("${r}", ${el(e, { expr: 'datum' })} + ${e.bin.step})`,
                offset: Rm(t, o, u, a, p),
              },
            };
          }
        }
        xo(oo(l));
        return undefined;
      }
      function Um({
        channel: e,
        fieldDef: n,
        scaleName: t,
        markDef: i,
        bandPosition: r,
        offset: s,
        config: o,
      }) {
        const a = nc({ scaleName: t, fieldOrDatumDef: n, bandPosition: r, offset: s });
        return Xu({ fieldDef: n, channel: e, markDef: i, ref: a, config: o });
      }
      const Wm = new Set(['aria', 'width', 'height']);
      function Im(e, n) {
        const { fill: t = undefined, stroke: i = undefined } =
          n.color === 'include' ? jm(e) : {};
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              Object.assign({}, Gm(e.markDef, n)),
                              Hm(e, 'fill', t)
                            ),
                            Hm(e, 'stroke', i)
                          ),
                          wm('opacity', e)
                        ),
                        wm('fillOpacity', e)
                      ),
                      wm('strokeOpacity', e)
                    ),
                    wm('strokeWidth', e)
                  ),
                  wm('strokeDash', e)
                ),
                Am(e)
              ),
              hm(e)
            ),
            gm(e, 'href')
          ),
          vm(e)
        );
      }
      function Hm(e, n, t) {
        const { config: i, mark: r, markDef: s } = e;
        const o = Er('invalid', s, i);
        if (o === 'hide' && t && !$u(r)) {
          const i = Vm(e, { invalid: true, channels: Pi });
          if (i) {
            return { [n]: [{ test: i, value: null }, ...J(t)] };
          }
        }
        return t ? { [n]: t } : {};
      }
      function Gm(e, n) {
        return br.reduce((t, i) => {
          if (!Wm.has(i) && e[i] !== undefined && n[i] !== 'ignore') {
            t[i] = Dr(e[i]);
          }
          return t;
        }, {});
      }
      function Vm(e, { invalid: n = false, channels: t }) {
        const i = t.reduce((n, t) => {
          const i = e.getScaleComponent(t);
          if (i) {
            const r = i.get('type');
            const s = e.vgField(t, { expr: 'datum' });
            if (s && Wa(r)) {
              n[s] = true;
            }
          }
          return n;
        }, {});
        const r = yn(i);
        if (r.length > 0) {
          const e = n ? '||' : '&&';
          return r.map((e) => Ku(e, n)).join(` ${e} `);
        }
        return undefined;
      }
      function Ym(e) {
        const { config: n, markDef: t } = e;
        const i = Er('invalid', t, n);
        if (i) {
          const n = Qm(e, { channels: hi });
          if (n) {
            return { defined: { signal: n } };
          }
        }
        return {};
      }
      function Qm(e, { invalid: n = false, channels: t }) {
        const i = t.reduce((n, t) => {
          const i = e.getScaleComponent(t);
          if (i) {
            const r = i.get('type');
            const s = e.vgField(t, { expr: 'datum' });
            if (s && Wa(r)) {
              n[s] = true;
            }
          }
          return n;
        }, {});
        const r = yn(i);
        if (r.length > 0) {
          const e = n ? '||' : '&&';
          return r.map((e) => Ku(e, n)).join(` ${e} `);
        }
        return undefined;
      }
      function Xm(e, n) {
        if (n !== undefined) {
          return { [e]: Dr(n) };
        }
        return undefined;
      }
      const Jm = 'voronoi';
      const Km = {
        defined: (e) => e.type === 'point' && e.nearest,
        parse: (e, n) => {
          if (n.events) {
            for (const t of n.events) {
              t.markname = e.getName(Jm);
            }
          }
        },
        marks: (e, n, t) => {
          const { x: i, y: r } = n.project.hasChannel;
          const s = e.mark;
          if ($u(s)) {
            xo(Gr(s));
            return t;
          }
          const o = {
            name: e.getName(Jm),
            type: 'path',
            interactive: true,
            from: { data: e.getName('marks') },
            encode: {
              update: Object.assign(
                {
                  fill: { value: 'transparent' },
                  strokeWidth: { value: 0.35 },
                  stroke: { value: 'transparent' },
                  isVoronoi: { value: true },
                },
                hm(e, { reactiveGeom: true })
              ),
            },
            transform: [
              {
                type: 'voronoi',
                x: { expr: i || !r ? 'datum.datum.x || 0' : '0' },
                y: { expr: r || !i ? 'datum.datum.y || 0' : '0' },
                size: [e.getSizeSignalRef('width'), e.getSizeSignalRef('height')],
              },
            ],
          };
          let a = 0;
          let u = false;
          t.forEach((n, t) => {
            var i;
            const r = (i = n.name) !== null && i !== void 0 ? i : '';
            if (r === e.component.mark[0].name) {
              a = t;
            } else if (r.indexOf(Jm) >= 0) {
              u = true;
            }
          });
          if (!u) {
            t.splice(a + 1, 0, o);
          }
          return t;
        },
      };
      const Zm = Km;
      const eh = {
        defined: (e) =>
          e.type === 'point' &&
          e.resolve === 'global' &&
          e.bind &&
          e.bind !== 'scales' &&
          !Qf(e.bind),
        parse: (e, n, t) => Ch(n, t),
        topLevelSignals: (e, n, t) => {
          const i = n.name;
          const r = n.project;
          const s = n.bind;
          const o = n.init && n.init[0];
          const a = Zm.defined(n)
            ? '(item().isVoronoi ? datum.datum : datum)'
            : 'datum';
          r.items.forEach((e, r) => {
            var u, c;
            const l = wn(`${i}_${e.field}`);
            const f = t.filter((e) => e.name === l);
            if (!f.length) {
              t.unshift(
                Object.assign(
                  Object.assign({ name: l }, o ? { init: Ng(o[r]) } : { value: null }),
                  {
                    on: n.events
                      ? [
                          {
                            events: n.events,
                            update: `datum && item().mark.marktype !== 'group' ? ${a}[${Be(
                              e.field
                            )}] : null`,
                          },
                        ]
                      : [],
                    bind:
                      (c =
                        (u = s[e.field]) !== null && u !== void 0
                          ? u
                          : s[e.channel]) !== null && c !== void 0
                        ? c
                        : s,
                  }
                )
              );
            }
          });
          return t;
        },
        signals: (e, n, t) => {
          const i = n.name;
          const r = n.project;
          const s = t.filter((e) => e.name === i + Oh)[0];
          const o = i + Xg;
          const a = r.items.map((e) => wn(`${i}_${e.field}`));
          const u = a.map((e) => `${e} !== null`).join(' && ');
          if (a.length) {
            s.update = `${u} ? {fields: ${o}, values: [${a.join(', ')}]} : null`;
          }
          delete s.value;
          delete s.on;
          return t;
        },
      };
      const nh = eh;
      const th = '_toggle';
      const ih = {
        defined: (e) => e.type === 'point' && !!e.toggle,
        signals: (e, n, t) =>
          t.concat({
            name: n.name + th,
            value: false,
            on: [{ events: n.events, update: n.toggle }],
          }),
        modifyExpr: (e, n) => {
          const t = n.name + Oh;
          const i = n.name + th;
          return (
            `${i} ? null : ${t}, ` +
            (n.resolve === 'global'
              ? `${i} ? null : true, `
              : `${i} ? null : {unit: ${$h(e)}}, `) +
            `${i} ? ${t} : null`
          );
        },
      };
      const rh = ih;
      const sh = {
        defined: (e) => e.clear !== undefined && e.clear !== false,
        parse: (e, n) => {
          if (n.clear) {
            n.clear = je(n.clear) ? $g(n.clear, 'view') : n.clear;
          }
        },
        topLevelSignals: (e, n, t) => {
          if (nh.defined(n)) {
            for (const e of n.project.items) {
              const i = t.findIndex((t) => t.name === wn(`${n.name}_${e.field}`));
              if (i !== -1) {
                t[i].on.push({ events: n.clear, update: 'null' });
              }
            }
          }
          return t;
        },
        signals: (e, n, t) => {
          function i(e, i) {
            if (e !== -1 && t[e].on) {
              t[e].on.push({ events: n.clear, update: i });
            }
          }
          if (n.type === 'interval') {
            for (const e of n.project.items) {
              const n = t.findIndex((n) => n.name === e.signals.visual);
              i(n, '[0, 0]');
              if (n === -1) {
                const n = t.findIndex((n) => n.name === e.signals.data);
                i(n, 'null');
              }
            }
          } else {
            let e = t.findIndex((e) => e.name === n.name + Oh);
            i(e, 'null');
            if (rh.defined(n)) {
              e = t.findIndex((e) => e.name === n.name + th);
              i(e, 'false');
            }
          }
          return t;
        },
      };
      const oh = sh;
      const ah = {
        defined: (e) => {
          const n = e.resolve === 'global' && e.bind && Qf(e.bind);
          const t = e.project.items.length === 1 && e.project.items[0].field !== Vf;
          if (n && !t) {
            xo(Xr);
          }
          return n && t;
        },
        parse: (e, n, t) => {
          var i;
          const r = Ze(t);
          r.select = je(r.select)
            ? { type: r.select, toggle: n.toggle }
            : Object.assign(Object.assign({}, r.select), { toggle: n.toggle });
          Ch(n, r);
          if ((0, pa.isObject)(t.select) && (t.select.on || t.select.clear)) {
            const e = 'event.item && indexof(event.item.mark.role, "legend") < 0';
            for (const t of n.events) {
              t.filter = J((i = t.filter) !== null && i !== void 0 ? i : []);
              if (!t.filter.includes(e)) {
                t.filter.push(e);
              }
            }
          }
          const s = Xf(n.bind) ? n.bind.legend : 'click';
          const o = je(s) ? $g(s, 'view') : J(s);
          n.bind = { legend: { merge: o } };
        },
        topLevelSignals: (e, n, t) => {
          const i = n.name;
          const r = Xf(n.bind) && n.bind.legend;
          const s = (e) => (n) => {
            const t = Ze(n);
            t.markname = e;
            return t;
          };
          for (const o of n.project.items) {
            if (!o.hasLegend) continue;
            const e = `${wn(o.field)}_legend`;
            const a = `${i}_${e}`;
            const u = t.filter((e) => e.name === a);
            if (u.length === 0) {
              const i = r.merge
                .map(s(`${e}_symbols`))
                .concat(r.merge.map(s(`${e}_labels`)))
                .concat(r.merge.map(s(`${e}_entries`)));
              t.unshift(
                Object.assign(
                  Object.assign({ name: a }, !n.init ? { value: null } : {}),
                  {
                    on: [
                      {
                        events: i,
                        update: 'datum.value || item().items[0].items[0].datum.value',
                        force: true,
                      },
                      {
                        events: r.merge,
                        update: `!event.item || !datum ? null : ${a}`,
                        force: true,
                      },
                    ],
                  }
                )
              );
            }
          }
          return t;
        },
        signals: (e, n, t) => {
          const i = n.name;
          const r = n.project;
          const s = t.find((e) => e.name === i + Oh);
          const o = i + Xg;
          const a = r.items
            .filter((e) => e.hasLegend)
            .map((e) => wn(`${i}_${wn(e.field)}_legend`));
          const u = a.map((e) => `${e} !== null`).join(' && ');
          const c = `${u} ? {fields: ${o}, values: [${a.join(', ')}]} : null`;
          if (n.events && a.length > 0) {
            s.on.push({ events: a.map((e) => ({ signal: e })), update: c });
          } else if (a.length > 0) {
            s.update = c;
            delete s.value;
            delete s.on;
          }
          const l = t.find((e) => e.name === i + th);
          const f = Xf(n.bind) && n.bind.legend;
          if (l) {
            if (!n.events) l.on[0].events = f;
            else l.on.push(Object.assign(Object.assign({}, l.on[0]), { events: f }));
          }
          return t;
        },
      };
      const uh = ah;
      function ch(e, n, t) {
        var i, r, s, o;
        const a = (i = e.fieldDef(n)) === null || i === void 0 ? void 0 : i.field;
        for (const u of vn(
          (r = e.component.selection) !== null && r !== void 0 ? r : {}
        )) {
          const e =
            (s = u.project.hasField[a]) !== null && s !== void 0
              ? s
              : u.project.hasChannel[n];
          if (e && ah.defined(u)) {
            const n = (o = t.get('selections')) !== null && o !== void 0 ? o : [];
            n.push(u.name);
            t.set('selections', n, false);
            e.hasLegend = true;
          }
        }
      }
      const lh = '_translate_anchor';
      const fh = '_translate_delta';
      const dh = {
        defined: (e) => e.type === 'interval' && e.translate,
        signals: (e, n, t) => {
          const i = n.name;
          const r = nm.defined(n);
          const s = i + lh;
          const { x: o, y: a } = n.project.hasChannel;
          let u = $g(n.translate, 'scope');
          if (!r) {
            u = u.map((e) => ((e.between[0].markname = i + sm), e));
          }
          t.push(
            {
              name: s,
              value: {},
              on: [
                {
                  events: u.map((e) => e.between[0]),
                  update:
                    '{x: x(unit), y: y(unit)' +
                    (o !== undefined
                      ? `, extent_x: ${r ? tm(e, Hn) : `slice(${o.signals.visual})`}`
                      : '') +
                    (a !== undefined
                      ? `, extent_y: ${r ? tm(e, Gn) : `slice(${a.signals.visual})`}`
                      : '') +
                    '}',
                },
              ],
            },
            {
              name: i + fh,
              value: {},
              on: [{ events: u, update: `{x: ${s}.x - x(unit), y: ${s}.y - y(unit)}` }],
            }
          );
          if (o !== undefined) {
            gh(e, n, o, 'width', t);
          }
          if (a !== undefined) {
            gh(e, n, a, 'height', t);
          }
          return t;
        },
      };
      const ph = dh;
      function gh(e, n, t, i, r) {
        var s, o;
        const a = n.name;
        const u = a + lh;
        const c = a + fh;
        const l = t.channel;
        const f = nm.defined(n);
        const d = r.filter((e) => e.name === t.signals[f ? 'data' : 'visual'])[0];
        const p = e.getSizeSignalRef(i).signal;
        const g = e.getScaleComponent(l);
        const m = g.get('type');
        const h = g.get('reverse');
        const b = !f ? '' : l === Hn ? (h ? '' : '-') : h ? '-' : '';
        const y = `${u}.extent_${l}`;
        const v = `${b}${c}.${l} / ${f ? `${p}` : `span(${y})`}`;
        const x = !f
          ? 'panLinear'
          : m === 'log'
          ? 'panLog'
          : m === 'symlog'
          ? 'panSymlog'
          : m === 'pow'
          ? 'panPow'
          : 'panLinear';
        const O = !f
          ? ''
          : m === 'pow'
          ? `, ${(s = g.get('exponent')) !== null && s !== void 0 ? s : 1}`
          : m === 'symlog'
          ? `, ${(o = g.get('constant')) !== null && o !== void 0 ? o : 1}`
          : '';
        const w = `${x}(${y}, ${v}${O})`;
        d.on.push({
          events: { signal: c },
          update: f ? w : `clampRange(${w}, 0, ${p})`,
        });
      }
      const mh = '_zoom_anchor';
      const hh = '_zoom_delta';
      const bh = {
        defined: (e) => e.type === 'interval' && e.zoom,
        signals: (e, n, t) => {
          const i = n.name;
          const r = nm.defined(n);
          const s = i + hh;
          const { x: o, y: a } = n.project.hasChannel;
          const u = Be(e.scaleName(Hn));
          const c = Be(e.scaleName(Gn));
          let l = $g(n.zoom, 'scope');
          if (!r) {
            l = l.map((e) => ((e.markname = i + sm), e));
          }
          t.push(
            {
              name: i + mh,
              on: [
                {
                  events: l,
                  update: !r
                    ? `{x: x(unit), y: y(unit)}`
                    : '{' +
                      [
                        u ? `x: invert(${u}, x(unit))` : '',
                        c ? `y: invert(${c}, y(unit))` : '',
                      ]
                        .filter((e) => !!e)
                        .join(', ') +
                      '}',
                },
              ],
            },
            {
              name: s,
              on: [
                {
                  events: l,
                  force: true,
                  update: 'pow(1.001, event.deltaY * pow(16, event.deltaMode))',
                },
              ],
            }
          );
          if (o !== undefined) {
            vh(e, n, o, 'width', t);
          }
          if (a !== undefined) {
            vh(e, n, a, 'height', t);
          }
          return t;
        },
      };
      const yh = bh;
      function vh(e, n, t, i, r) {
        var s, o;
        const a = n.name;
        const u = t.channel;
        const c = nm.defined(n);
        const l = r.filter((e) => e.name === t.signals[c ? 'data' : 'visual'])[0];
        const f = e.getSizeSignalRef(i).signal;
        const d = e.getScaleComponent(u);
        const p = d.get('type');
        const g = c ? tm(e, u) : l.name;
        const m = a + hh;
        const h = `${a}${mh}.${u}`;
        const b = !c
          ? 'zoomLinear'
          : p === 'log'
          ? 'zoomLog'
          : p === 'symlog'
          ? 'zoomSymlog'
          : p === 'pow'
          ? 'zoomPow'
          : 'zoomLinear';
        const y = !c
          ? ''
          : p === 'pow'
          ? `, ${(s = d.get('exponent')) !== null && s !== void 0 ? s : 1}`
          : p === 'symlog'
          ? `, ${(o = d.get('constant')) !== null && o !== void 0 ? o : 1}`
          : '';
        const v = `${b}(${g}, ${h}, ${m}${y})`;
        l.on.push({
          events: { signal: m },
          update: c ? v : `clampRange(${v}, 0, ${f})`,
        });
      }
      const xh = '_store';
      const Oh = '_tuple';
      const wh = '_modify';
      const jh = '_selection_domain_';
      const Ah = 'vlSelectionResolve';
      const Dh = [dm, um, Zg, rh, nh, nm, uh, oh, ph, yh, Zm];
      function Fh(e) {
        let n = e.parent;
        while (n) {
          if (AA(n)) break;
          n = n.parent;
        }
        return n;
      }
      function $h(e, { escape: n } = { escape: true }) {
        let t = n ? Be(e.name) : e.name;
        const i = Fh(e);
        if (i) {
          const { facet: e } = i;
          for (const n of Bt) {
            if (e[n]) {
              t += ` + '__facet_${n}_' + (facet[${Be(i.vgField(n))}])`;
            }
          }
        }
        return t;
      }
      function kh(e) {
        var n;
        return vn((n = e.component.selection) !== null && n !== void 0 ? n : {}).reduce(
          (e, n) => e || n.project.items.some((e) => e.field === Vf),
          false
        );
      }
      function Ch(e, n) {
        if ((0, pa.isString)(n.select) || !n.select.on) delete e.events;
        if ((0, pa.isString)(n.select) || !n.select.clear) delete e.clear;
        if ((0, pa.isString)(n.select) || !n.select.toggle) delete e.toggle;
      }
      function Eh(e, n, t) {
        e.fields = n || [];
        e.fname = t;
        return e;
      }
      function Sh(e) {
        return e == null ? null : e.fname;
      }
      function Bh(e) {
        return e == null ? null : e.fields;
      }
      function _h(e) {
        return e.length === 1 ? Ph(e[0]) : zh(e);
      }
      const Ph = (e) =>
        function (n) {
          return n[e];
        };
      const zh = (e) => {
        const n = e.length;
        return function (t) {
          for (let i = 0; i < n; ++i) {
            t = t[e[i]];
          }
          return t;
        };
      };
      function Nh(e) {
        throw Error(e);
      }
      function Mh(e) {
        const n = [],
          t = e.length;
        let i = null,
          r = 0,
          s = '',
          o,
          a,
          u;
        e = e + '';
        function c() {
          n.push(s + e.substring(o, a));
          s = '';
          o = a + 1;
        }
        for (o = a = 0; a < t; ++a) {
          u = e[a];
          if (u === '\\') {
            s += e.substring(o, a);
            s += e.substring(++a, ++a);
            o = a;
          } else if (u === i) {
            c();
            i = null;
            r = -1;
          } else if (i) {
            continue;
          } else if (o === r && u === '"') {
            o = a + 1;
            i = u;
          } else if (o === r && u === "'") {
            o = a + 1;
            i = u;
          } else if (u === '.' && !r) {
            if (a > o) {
              c();
            } else {
              o = a + 1;
            }
          } else if (u === '[') {
            if (a > o) c();
            r = o = a + 1;
          } else if (u === ']') {
            if (!r) Nh('Access path missing open bracket: ' + e);
            if (r > 0) c();
            r = 0;
            o = a + 1;
          }
        }
        if (r) Nh('Access path missing closing bracket: ' + e);
        if (i) Nh('Access path missing closing quote: ' + e);
        if (a > o) {
          a++;
          c();
        }
        return n;
      }
      function Th(e, n, t) {
        const i = Mh(e);
        e = i.length === 1 ? i[0] : e;
        return Eh(((t && t.get) || _h)(i), [e], n || e);
      }
      const Lh = Th('id');
      const Rh = Eh((e) => e, [], 'identity');
      const qh = Eh(() => 0, [], 'zero');
      const Uh = Eh(() => 1, [], 'one');
      const Wh = Eh(() => true, [], 'true');
      const Ih = Eh(() => false, [], 'false');
      function Hh(e, n, t) {
        const i = [n].concat([].slice.call(t));
        console[e].apply(console, i);
      }
      const Gh = 0;
      const Vh = 1;
      const Yh = 2;
      const Qh = 3;
      const Xh = 4;
      function Jh(e, n, t = Hh) {
        let i = e || Gh;
        return {
          level(e) {
            if (arguments.length) {
              i = +e;
              return this;
            } else {
              return i;
            }
          },
          error() {
            if (i >= Vh) t(n || 'error', 'ERROR', arguments);
            return this;
          },
          warn() {
            if (i >= Yh) t(n || 'warn', 'WARN', arguments);
            return this;
          },
          info() {
            if (i >= Qh) t(n || 'log', 'INFO', arguments);
            return this;
          },
          debug() {
            if (i >= Xh) t(n || 'log', 'DEBUG', arguments);
            return this;
          },
        };
      }
      var Kh = Array.isArray;
      function Zh(e) {
        return e === Object(e);
      }
      const eb = (e) => e !== '__proto__';
      function nb(...e) {
        return e.reduce((e, n) => {
          for (const t in n) {
            if (t === 'signals') {
              e.signals = ib(e.signals, n.signals);
            } else {
              const i = t === 'legend' ? { layout: 1 } : t === 'style' ? true : null;
              tb(e, t, n[t], i);
            }
          }
          return e;
        }, {});
      }
      function tb(e, n, t, i) {
        if (!eb(n)) return;
        let r, s;
        if (Zh(t) && !Kh(t)) {
          s = Zh(e[n]) ? e[n] : (e[n] = {});
          for (r in t) {
            if (i && (i === true || i[r])) {
              tb(s, r, t[r]);
            } else if (eb(r)) {
              s[r] = t[r];
            }
          }
        } else {
          e[n] = t;
        }
      }
      function ib(e, n) {
        if (e == null) return n;
        const t = {},
          i = [];
        function r(e) {
          if (!t[e.name]) {
            t[e.name] = 1;
            i.push(e);
          }
        }
        n.forEach(r);
        e.forEach(r);
        return i;
      }
      function rb(e) {
        return e[e.length - 1];
      }
      function sb(e) {
        return e == null || e === '' ? null : +e;
      }
      const ob = (e) => (n) => e * Math.exp(n);
      const ab = (e) => (n) => Math.log(e * n);
      const ub = (e) => (n) => Math.sign(n) * Math.log1p(Math.abs(n / e));
      const cb = (e) => (n) => Math.sign(n) * Math.expm1(Math.abs(n)) * e;
      const lb = (e) => (n) => n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
      function fb(e, n, t, i) {
        const r = t(e[0]),
          s = t(rb(e)),
          o = (s - r) * n;
        return [i(r - o), i(s - o)];
      }
      function db(e, n) {
        return fb(e, n, sb, Rh);
      }
      function pb(e, n) {
        var t = Math.sign(e[0]);
        return fb(e, n, ab(t), ob(t));
      }
      function gb(e, n, t) {
        return fb(e, n, lb(t), lb(1 / t));
      }
      function mb(e, n, t) {
        return fb(e, n, ub(t), cb(t));
      }
      function hb(e, n, t, i, r) {
        const s = i(e[0]),
          o = i(rb(e)),
          a = n != null ? i(n) : (s + o) / 2;
        return [r(a + (s - a) * t), r(a + (o - a) * t)];
      }
      function bb(e, n, t) {
        return hb(e, n, t, sb, Rh);
      }
      function yb(e, n, t) {
        const i = Math.sign(e[0]);
        return hb(e, n, t, ab(i), ob(i));
      }
      function vb(e, n, t, i) {
        return hb(e, n, t, lb(i), lb(1 / i));
      }
      function xb(e, n, t, i) {
        return hb(e, n, t, ub(i), cb(i));
      }
      function Ob(e) {
        return 1 + ~~(new Date(e).getMonth() / 3);
      }
      function wb(e) {
        return 1 + ~~(new Date(e).getUTCMonth() / 3);
      }
      function jb(e) {
        return e != null ? (Kh(e) ? e : [e]) : [];
      }
      function Ab(e, n, t) {
        let i = e[0],
          r = e[1],
          s;
        if (r < i) {
          s = r;
          r = i;
          i = s;
        }
        s = r - i;
        return s >= t - n ? [n, t] : [(i = Math.min(Math.max(i, n), t - s)), i + s];
      }
      function Db(e) {
        return typeof e === 'function';
      }
      const Fb = 'descending';
      function $b(e, n, t) {
        t = t || {};
        n = jb(n) || [];
        const i = [],
          r = [],
          s = {},
          o = t.comparator || Cb;
        jb(e).forEach((e, o) => {
          if (e == null) return;
          i.push(n[o] === Fb ? -1 : 1);
          r.push((e = Db(e) ? e : Th(e, null, t)));
          (Bh(e) || []).forEach((e) => (s[e] = 1));
        });
        return r.length === 0 ? null : Eh(o(r, i), Object.keys(s));
      }
      const kb = (e, n) =>
        (e < n || e == null) && n != null
          ? -1
          : (e > n || n == null) && e != null
          ? 1
          : ((n = n instanceof Date ? +n : n), (e = e instanceof Date ? +e : e)) !==
              e && n === n
          ? -1
          : n !== n && e === e
          ? 1
          : 0;
      const Cb = (e, n) => (e.length === 1 ? Eb(e[0], n[0]) : Sb(e, n, e.length));
      const Eb = (e, n) =>
        function (t, i) {
          return kb(e(t), e(i)) * n;
        };
      const Sb = (e, n, t) => {
        n.push(0);
        return function (i, r) {
          let s,
            o = 0,
            a = -1;
          while (o === 0 && ++a < t) {
            s = e[a];
            o = kb(s(i), s(r));
          }
          return o * n[a];
        };
      };
      function Bb(e) {
        return Db(e) ? e : () => e;
      }
      function _b(e, n) {
        let t;
        return (i) => {
          if (t) clearTimeout(t);
          t = setTimeout(() => (n(i), (t = null)), e);
        };
      }
      function Pb(e) {
        for (let n, t, i = 1, r = arguments.length; i < r; ++i) {
          n = arguments[i];
          for (t in n) {
            e[t] = n[t];
          }
        }
        return e;
      }
      function zb(e, n) {
        let t = 0,
          i,
          r,
          s,
          o;
        if (e && (i = e.length)) {
          if (n == null) {
            for (r = e[t]; t < i && (r == null || r !== r); r = e[++t]);
            s = o = r;
            for (; t < i; ++t) {
              r = e[t];
              if (r != null) {
                if (r < s) s = r;
                if (r > o) o = r;
              }
            }
          } else {
            for (r = n(e[t]); t < i && (r == null || r !== r); r = n(e[++t]));
            s = o = r;
            for (; t < i; ++t) {
              r = n(e[t]);
              if (r != null) {
                if (r < s) s = r;
                if (r > o) o = r;
              }
            }
          }
        }
        return [s, o];
      }
      function Nb(e, n) {
        const t = e.length;
        let i = -1,
          r,
          s,
          o,
          a,
          u;
        if (n == null) {
          while (++i < t) {
            s = e[i];
            if (s != null && s >= s) {
              r = o = s;
              break;
            }
          }
          if (i === t) return [-1, -1];
          a = u = i;
          while (++i < t) {
            s = e[i];
            if (s != null) {
              if (r > s) {
                r = s;
                a = i;
              }
              if (o < s) {
                o = s;
                u = i;
              }
            }
          }
        } else {
          while (++i < t) {
            s = n(e[i], i, e);
            if (s != null && s >= s) {
              r = o = s;
              break;
            }
          }
          if (i === t) return [-1, -1];
          a = u = i;
          while (++i < t) {
            s = n(e[i], i, e);
            if (s != null) {
              if (r > s) {
                r = s;
                a = i;
              }
              if (o < s) {
                o = s;
                u = i;
              }
            }
          }
        }
        return [a, u];
      }
      const Mb = Object.prototype.hasOwnProperty;
      function Tb(e, n) {
        return Mb.call(e, n);
      }
      const Lb = {};
      function Rb(e) {
        let n = {},
          t;
        function i(e) {
          return Tb(n, e) && n[e] !== Lb;
        }
        const r = {
          size: 0,
          empty: 0,
          object: n,
          has: i,
          get(e) {
            return i(e) ? n[e] : undefined;
          },
          set(e, t) {
            if (!i(e)) {
              ++r.size;
              if (n[e] === Lb) --r.empty;
            }
            n[e] = t;
            return this;
          },
          delete(e) {
            if (i(e)) {
              --r.size;
              ++r.empty;
              n[e] = Lb;
            }
            return this;
          },
          clear() {
            r.size = r.empty = 0;
            r.object = n = {};
          },
          test(e) {
            if (arguments.length) {
              t = e;
              return r;
            } else {
              return t;
            }
          },
          clean() {
            const e = {};
            let i = 0;
            for (const r in n) {
              const s = n[r];
              if (s !== Lb && (!t || !t(s))) {
                e[r] = s;
                ++i;
              }
            }
            r.size = i;
            r.empty = 0;
            r.object = n = e;
          },
        };
        if (e)
          Object.keys(e).forEach((n) => {
            r.set(n, e[n]);
          });
        return r;
      }
      function qb(e, n, t, i, r, s) {
        if (!t && t !== 0) return s;
        const o = +t;
        let a = e[0],
          u = rb(e),
          c;
        if (u < a) {
          c = a;
          a = u;
          u = c;
        }
        c = Math.abs(n - a);
        const l = Math.abs(u - n);
        return c < l && c <= o ? i : l <= o ? r : s;
      }
      function Ub(e, n, t) {
        const i = (e.prototype = Object.create(n.prototype));
        Object.defineProperty(i, 'constructor', {
          value: e,
          writable: true,
          enumerable: true,
          configurable: true,
        });
        return Pb(i, t);
      }
      function Wb(e, n, t, i) {
        let r = n[0],
          s = n[n.length - 1],
          o;
        if (r > s) {
          o = r;
          r = s;
          s = o;
        }
        t = t === undefined || t;
        i = i === undefined || i;
        return (t ? r <= e : r < e) && (i ? e <= s : e < s);
      }
      function Ib(e) {
        return typeof e === 'boolean';
      }
      function Hb(e) {
        return Object.prototype.toString.call(e) === '[object Date]';
      }
      function Gb(e) {
        return e && Db(e[Symbol.iterator]);
      }
      function Vb(e) {
        return typeof e === 'number';
      }
      function Yb(e) {
        return Object.prototype.toString.call(e) === '[object RegExp]';
      }
      function Qb(e) {
        return typeof e === 'string';
      }
      function Xb(e, n, t) {
        if (e) {
          e = n ? jb(e).map((e) => e.replace(/\\(.)/g, '$1')) : jb(e);
        }
        const i = e && e.length,
          r = (t && t.get) || _h,
          s = (e) => r(n ? [e] : Mh(e));
        let o;
        if (!i) {
          o = function () {
            return '';
          };
        } else if (i === 1) {
          const n = s(e[0]);
          o = function (e) {
            return '' + n(e);
          };
        } else {
          const n = e.map(s);
          o = function (e) {
            let t = '' + n[0](e),
              r = 0;
            while (++r < i) t += '|' + n[r](e);
            return t;
          };
        }
        return Eh(o, e, 'key');
      }
      function Jb(e, n) {
        const t = e[0],
          i = rb(e),
          r = +n;
        return !r ? t : r === 1 ? i : t + r * (i - t);
      }
      const Kb = 1e4;
      function Zb(e) {
        e = +e || Kb;
        let n, t, i;
        const r = () => {
          n = {};
          t = {};
          i = 0;
        };
        const s = (r, s) => {
          if (++i > e) {
            t = n;
            n = {};
            i = 1;
          }
          return (n[r] = s);
        };
        r();
        return {
          clear: r,
          has: (e) => Tb(n, e) || Tb(t, e),
          get: (e) => (Tb(n, e) ? n[e] : Tb(t, e) ? s(e, t[e]) : undefined),
          set: (e, t) => (Tb(n, e) ? (n[e] = t) : s(e, t)),
        };
      }
      function ey(e, n, t, i) {
        const r = n.length,
          s = t.length;
        if (!s) return n;
        if (!r) return t;
        const o = i || new n.constructor(r + s);
        let a = 0,
          u = 0,
          c = 0;
        for (; a < r && u < s; ++c) {
          o[c] = e(n[a], t[u]) > 0 ? t[u++] : n[a++];
        }
        for (; a < r; ++a, ++c) {
          o[c] = n[a];
        }
        for (; u < s; ++u, ++c) {
          o[c] = t[u];
        }
        return o;
      }
      function ny(e, n) {
        let t = '';
        while (--n >= 0) t += e;
        return t;
      }
      function ty(e, n, t, i) {
        const r = t || ' ',
          s = e + '',
          o = n - s.length;
        return o <= 0
          ? s
          : i === 'left'
          ? ny(r, o) + s
          : i === 'center'
          ? ny(r, ~~(o / 2)) + s + ny(r, Math.ceil(o / 2))
          : s + ny(r, o);
      }
      function iy(e) {
        return (e && rb(e) - e[0]) || 0;
      }
      function ry(e) {
        return Kh(e)
          ? '[' + e.map(ry) + ']'
          : Zh(e) || Qb(e)
          ? JSON.stringify(e).replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
          : e;
      }
      function sy(e) {
        return e == null || e === ''
          ? null
          : !e || e === 'false' || e === '0'
          ? false
          : !!e;
      }
      const oy = (e) => (Vb(e) ? e : Hb(e) ? e : Date.parse(e));
      function ay(e, n) {
        n = n || oy;
        return e == null || e === '' ? null : n(e);
      }
      function uy(e) {
        return e == null || e === '' ? null : e + '';
      }
      function cy(e) {
        const n = {},
          t = e.length;
        for (let i = 0; i < t; ++i) n[e[i]] = true;
        return n;
      }
      function ly(e, n, t, i) {
        const r = i != null ? i : '…',
          s = e + '',
          o = s.length,
          a = Math.max(0, n - r.length);
        return o <= n
          ? s
          : t === 'left'
          ? r + s.slice(o - a)
          : t === 'center'
          ? s.slice(0, Math.ceil(a / 2)) + r + s.slice(o - ~~(a / 2))
          : s.slice(0, a) + r;
      }
      function fy(e, n, t) {
        if (e) {
          if (n) {
            const i = e.length;
            for (let r = 0; r < i; ++r) {
              const i = n(e[r]);
              if (i) t(i, r, e);
            }
          } else {
            e.forEach(t);
          }
        }
      }
      const dy = 'RawCode';
      const py = 'Literal';
      const gy = 'Property';
      const my = 'Identifier';
      const hy = 'ArrayExpression';
      const by = 'BinaryExpression';
      const yy = 'CallExpression';
      const vy = 'ConditionalExpression';
      const xy = 'LogicalExpression';
      const Oy = 'MemberExpression';
      const wy = 'ObjectExpression';
      const jy = 'UnaryExpression';
      function Ay(e) {
        this.type = e;
      }
      Ay.prototype.visit = function (e) {
        let n, t, i;
        if (e(this)) return 1;
        for (n = Dy(this), t = 0, i = n.length; t < i; ++t) {
          if (n[t].visit(e)) return 1;
        }
      };
      function Dy(e) {
        switch (e.type) {
          case hy:
            return e.elements;
          case by:
          case xy:
            return [e.left, e.right];
          case yy:
            return [e.callee].concat(e.arguments);
          case vy:
            return [e.test, e.consequent, e.alternate];
          case Oy:
            return [e.object, e.property];
          case wy:
            return e.properties;
          case gy:
            return [e.key, e.value];
          case jy:
            return [e.argument];
          case my:
          case py:
          case dy:
          default:
            return [];
        }
      }
      var Fy, $y, ky, Cy, Ey;
      var Sy = 1,
        By = 2,
        _y = 3,
        Py = 4,
        zy = 5,
        Ny = 6,
        My = 7,
        Ty = 8,
        Ly = 9;
      Fy = {};
      Fy[Sy] = 'Boolean';
      Fy[By] = '<end>';
      Fy[_y] = 'Identifier';
      Fy[Py] = 'Keyword';
      Fy[zy] = 'Null';
      Fy[Ny] = 'Numeric';
      Fy[My] = 'Punctuator';
      Fy[Ty] = 'String';
      Fy[Ly] = 'RegularExpression';
      var Ry = 'ArrayExpression',
        qy = 'BinaryExpression',
        Uy = 'CallExpression',
        Wy = 'ConditionalExpression',
        Iy = 'Identifier',
        Hy = 'Literal',
        Gy = 'LogicalExpression',
        Vy = 'MemberExpression',
        Yy = 'ObjectExpression',
        Qy = 'Property',
        Xy = 'UnaryExpression';
      var Jy = 'Unexpected token %0',
        Ky = 'Unexpected number',
        Zy = 'Unexpected string',
        ev = 'Unexpected identifier',
        nv = 'Unexpected reserved word',
        tv = 'Unexpected end of input',
        iv = 'Invalid regular expression',
        rv = 'Invalid regular expression: missing /',
        sv = 'Octal literals are not allowed in strict mode.',
        ov = 'Duplicate data property in object literal not allowed in strict mode';
      var av = 'ILLEGAL',
        uv = 'Disabled.';
      var cv = new RegExp(
          '[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]'
        ),
        lv = new RegExp(
          '[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]'
        );
      function fv(e, n) {
        if (!e) {
          throw new Error('ASSERT: ' + n);
        }
      }
      function dv(e) {
        return e >= 48 && e <= 57;
      }
      function pv(e) {
        return '0123456789abcdefABCDEF'.indexOf(e) >= 0;
      }
      function gv(e) {
        return '01234567'.indexOf(e) >= 0;
      }
      function mv(e) {
        return (
          e === 32 ||
          e === 9 ||
          e === 11 ||
          e === 12 ||
          e === 160 ||
          (e >= 5760 &&
            [
              5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
              8202, 8239, 8287, 12288, 65279,
            ].indexOf(e) >= 0)
        );
      }
      function hv(e) {
        return e === 10 || e === 13 || e === 8232 || e === 8233;
      }
      function bv(e) {
        return (
          e === 36 ||
          e === 95 ||
          (e >= 65 && e <= 90) ||
          (e >= 97 && e <= 122) ||
          e === 92 ||
          (e >= 128 && cv.test(String.fromCharCode(e)))
        );
      }
      function yv(e) {
        return (
          e === 36 ||
          e === 95 ||
          (e >= 65 && e <= 90) ||
          (e >= 97 && e <= 122) ||
          (e >= 48 && e <= 57) ||
          e === 92 ||
          (e >= 128 && lv.test(String.fromCharCode(e)))
        );
      }
      const vv = {
        if: 1,
        in: 1,
        do: 1,
        var: 1,
        for: 1,
        new: 1,
        try: 1,
        let: 1,
        this: 1,
        else: 1,
        case: 1,
        void: 1,
        with: 1,
        enum: 1,
        while: 1,
        break: 1,
        catch: 1,
        throw: 1,
        const: 1,
        yield: 1,
        class: 1,
        super: 1,
        return: 1,
        typeof: 1,
        delete: 1,
        switch: 1,
        export: 1,
        import: 1,
        public: 1,
        static: 1,
        default: 1,
        finally: 1,
        extends: 1,
        package: 1,
        private: 1,
        function: 1,
        continue: 1,
        debugger: 1,
        interface: 1,
        protected: 1,
        instanceof: 1,
        implements: 1,
      };
      function xv() {
        while (ky < Cy) {
          const e = $y.charCodeAt(ky);
          if (mv(e) || hv(e)) {
            ++ky;
          } else {
            break;
          }
        }
      }
      function Ov(e) {
        var n,
          t,
          i,
          r = 0;
        t = e === 'u' ? 4 : 2;
        for (n = 0; n < t; ++n) {
          if (ky < Cy && pv($y[ky])) {
            i = $y[ky++];
            r = r * 16 + '0123456789abcdef'.indexOf(i.toLowerCase());
          } else {
            Qv({}, Jy, av);
          }
        }
        return String.fromCharCode(r);
      }
      function wv() {
        var e, n, t, i;
        e = $y[ky];
        n = 0;
        if (e === '}') {
          Qv({}, Jy, av);
        }
        while (ky < Cy) {
          e = $y[ky++];
          if (!pv(e)) {
            break;
          }
          n = n * 16 + '0123456789abcdef'.indexOf(e.toLowerCase());
        }
        if (n > 1114111 || e !== '}') {
          Qv({}, Jy, av);
        }
        if (n <= 65535) {
          return String.fromCharCode(n);
        }
        t = ((n - 65536) >> 10) + 55296;
        i = ((n - 65536) & 1023) + 56320;
        return String.fromCharCode(t, i);
      }
      function jv() {
        var e, n;
        e = $y.charCodeAt(ky++);
        n = String.fromCharCode(e);
        if (e === 92) {
          if ($y.charCodeAt(ky) !== 117) {
            Qv({}, Jy, av);
          }
          ++ky;
          e = Ov('u');
          if (!e || e === '\\' || !bv(e.charCodeAt(0))) {
            Qv({}, Jy, av);
          }
          n = e;
        }
        while (ky < Cy) {
          e = $y.charCodeAt(ky);
          if (!yv(e)) {
            break;
          }
          ++ky;
          n += String.fromCharCode(e);
          if (e === 92) {
            n = n.substr(0, n.length - 1);
            if ($y.charCodeAt(ky) !== 117) {
              Qv({}, Jy, av);
            }
            ++ky;
            e = Ov('u');
            if (!e || e === '\\' || !yv(e.charCodeAt(0))) {
              Qv({}, Jy, av);
            }
            n += e;
          }
        }
        return n;
      }
      function Av() {
        var e, n;
        e = ky++;
        while (ky < Cy) {
          n = $y.charCodeAt(ky);
          if (n === 92) {
            ky = e;
            return jv();
          }
          if (yv(n)) {
            ++ky;
          } else {
            break;
          }
        }
        return $y.slice(e, ky);
      }
      function Dv() {
        var e, n, t;
        e = ky;
        n = $y.charCodeAt(ky) === 92 ? jv() : Av();
        if (n.length === 1) {
          t = _y;
        } else if (vv.hasOwnProperty(n)) {
          t = Py;
        } else if (n === 'null') {
          t = zy;
        } else if (n === 'true' || n === 'false') {
          t = Sy;
        } else {
          t = _y;
        }
        return { type: t, value: n, start: e, end: ky };
      }
      function Fv() {
        var e = ky,
          n = $y.charCodeAt(ky),
          t,
          i = $y[ky],
          r,
          s,
          o;
        switch (n) {
          case 46:
          case 40:
          case 41:
          case 59:
          case 44:
          case 123:
          case 125:
          case 91:
          case 93:
          case 58:
          case 63:
          case 126:
            ++ky;
            return { type: My, value: String.fromCharCode(n), start: e, end: ky };
          default:
            t = $y.charCodeAt(ky + 1);
            if (t === 61) {
              switch (n) {
                case 43:
                case 45:
                case 47:
                case 60:
                case 62:
                case 94:
                case 124:
                case 37:
                case 38:
                case 42:
                  ky += 2;
                  return {
                    type: My,
                    value: String.fromCharCode(n) + String.fromCharCode(t),
                    start: e,
                    end: ky,
                  };
                case 33:
                case 61:
                  ky += 2;
                  if ($y.charCodeAt(ky) === 61) {
                    ++ky;
                  }
                  return { type: My, value: $y.slice(e, ky), start: e, end: ky };
              }
            }
        }
        o = $y.substr(ky, 4);
        if (o === '>>>=') {
          ky += 4;
          return { type: My, value: o, start: e, end: ky };
        }
        s = o.substr(0, 3);
        if (s === '>>>' || s === '<<=' || s === '>>=') {
          ky += 3;
          return { type: My, value: s, start: e, end: ky };
        }
        r = s.substr(0, 2);
        if ((i === r[1] && '+-<>&|'.indexOf(i) >= 0) || r === '=>') {
          ky += 2;
          return { type: My, value: r, start: e, end: ky };
        }
        if (r === '//') {
          Qv({}, Jy, av);
        }
        if ('<>=!+-*%&|^/'.indexOf(i) >= 0) {
          ++ky;
          return { type: My, value: i, start: e, end: ky };
        }
        Qv({}, Jy, av);
      }
      function $v(e) {
        let n = '';
        while (ky < Cy) {
          if (!pv($y[ky])) {
            break;
          }
          n += $y[ky++];
        }
        if (n.length === 0) {
          Qv({}, Jy, av);
        }
        if (bv($y.charCodeAt(ky))) {
          Qv({}, Jy, av);
        }
        return { type: Ny, value: parseInt('0x' + n, 16), start: e, end: ky };
      }
      function kv(e) {
        let n = '0' + $y[ky++];
        while (ky < Cy) {
          if (!gv($y[ky])) {
            break;
          }
          n += $y[ky++];
        }
        if (bv($y.charCodeAt(ky)) || dv($y.charCodeAt(ky))) {
          Qv({}, Jy, av);
        }
        return { type: Ny, value: parseInt(n, 8), octal: true, start: e, end: ky };
      }
      function Cv() {
        var e, n, t;
        t = $y[ky];
        fv(
          dv(t.charCodeAt(0)) || t === '.',
          'Numeric literal must start with a decimal digit or a decimal point'
        );
        n = ky;
        e = '';
        if (t !== '.') {
          e = $y[ky++];
          t = $y[ky];
          if (e === '0') {
            if (t === 'x' || t === 'X') {
              ++ky;
              return $v(n);
            }
            if (gv(t)) {
              return kv(n);
            }
            if (t && dv(t.charCodeAt(0))) {
              Qv({}, Jy, av);
            }
          }
          while (dv($y.charCodeAt(ky))) {
            e += $y[ky++];
          }
          t = $y[ky];
        }
        if (t === '.') {
          e += $y[ky++];
          while (dv($y.charCodeAt(ky))) {
            e += $y[ky++];
          }
          t = $y[ky];
        }
        if (t === 'e' || t === 'E') {
          e += $y[ky++];
          t = $y[ky];
          if (t === '+' || t === '-') {
            e += $y[ky++];
          }
          if (dv($y.charCodeAt(ky))) {
            while (dv($y.charCodeAt(ky))) {
              e += $y[ky++];
            }
          } else {
            Qv({}, Jy, av);
          }
        }
        if (bv($y.charCodeAt(ky))) {
          Qv({}, Jy, av);
        }
        return { type: Ny, value: parseFloat(e), start: n, end: ky };
      }
      function Ev() {
        var e = '',
          n,
          t,
          i,
          r,
          s = false;
        n = $y[ky];
        fv(n === "'" || n === '"', 'String literal must starts with a quote');
        t = ky;
        ++ky;
        while (ky < Cy) {
          i = $y[ky++];
          if (i === n) {
            n = '';
            break;
          } else if (i === '\\') {
            i = $y[ky++];
            if (!i || !hv(i.charCodeAt(0))) {
              switch (i) {
                case 'u':
                case 'x':
                  if ($y[ky] === '{') {
                    ++ky;
                    e += wv();
                  } else {
                    e += Ov(i);
                  }
                  break;
                case 'n':
                  e += '\n';
                  break;
                case 'r':
                  e += '\r';
                  break;
                case 't':
                  e += '\t';
                  break;
                case 'b':
                  e += '\b';
                  break;
                case 'f':
                  e += '\f';
                  break;
                case 'v':
                  e += '\v';
                  break;
                default:
                  if (gv(i)) {
                    r = '01234567'.indexOf(i);
                    if (r !== 0) {
                      s = true;
                    }
                    if (ky < Cy && gv($y[ky])) {
                      s = true;
                      r = r * 8 + '01234567'.indexOf($y[ky++]);
                      if ('0123'.indexOf(i) >= 0 && ky < Cy && gv($y[ky])) {
                        r = r * 8 + '01234567'.indexOf($y[ky++]);
                      }
                    }
                    e += String.fromCharCode(r);
                  } else {
                    e += i;
                  }
                  break;
              }
            } else {
              if (i === '\r' && $y[ky] === '\n') {
                ++ky;
              }
            }
          } else if (hv(i.charCodeAt(0))) {
            break;
          } else {
            e += i;
          }
        }
        if (n !== '') {
          Qv({}, Jy, av);
        }
        return { type: Ty, value: e, octal: s, start: t, end: ky };
      }
      function Sv(e, n) {
        let t = e;
        if (n.indexOf('u') >= 0) {
          t = t
            .replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, n) => {
              if (parseInt(n, 16) <= 1114111) {
                return 'x';
              }
              Qv({}, iv);
            })
            .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, 'x');
        }
        try {
          new RegExp(t);
        } catch (i) {
          Qv({}, iv);
        }
        try {
          return new RegExp(e, n);
        } catch (r) {
          return null;
        }
      }
      function Bv() {
        var e, n, t, i, r;
        e = $y[ky];
        fv(e === '/', 'Regular expression literal must start with a slash');
        n = $y[ky++];
        t = false;
        i = false;
        while (ky < Cy) {
          e = $y[ky++];
          n += e;
          if (e === '\\') {
            e = $y[ky++];
            if (hv(e.charCodeAt(0))) {
              Qv({}, rv);
            }
            n += e;
          } else if (hv(e.charCodeAt(0))) {
            Qv({}, rv);
          } else if (t) {
            if (e === ']') {
              t = false;
            }
          } else {
            if (e === '/') {
              i = true;
              break;
            } else if (e === '[') {
              t = true;
            }
          }
        }
        if (!i) {
          Qv({}, rv);
        }
        r = n.substr(1, n.length - 2);
        return { value: r, literal: n };
      }
      function _v() {
        var e, n, t;
        n = '';
        t = '';
        while (ky < Cy) {
          e = $y[ky];
          if (!yv(e.charCodeAt(0))) {
            break;
          }
          ++ky;
          if (e === '\\' && ky < Cy) {
            Qv({}, Jy, av);
          } else {
            t += e;
            n += e;
          }
        }
        if (t.search(/[^gimuy]/g) >= 0) {
          Qv({}, iv, t);
        }
        return { value: t, literal: n };
      }
      function Pv() {
        var e, n, t, i;
        Ey = null;
        xv();
        e = ky;
        n = Bv();
        t = _v();
        i = Sv(n.value, t.value);
        return {
          literal: n.literal + t.literal,
          value: i,
          regex: { pattern: n.value, flags: t.value },
          start: e,
          end: ky,
        };
      }
      function zv(e) {
        return e.type === _y || e.type === Py || e.type === Sy || e.type === zy;
      }
      function Nv() {
        xv();
        if (ky >= Cy) {
          return { type: By, start: ky, end: ky };
        }
        const e = $y.charCodeAt(ky);
        if (bv(e)) {
          return Dv();
        }
        if (e === 40 || e === 41 || e === 59) {
          return Fv();
        }
        if (e === 39 || e === 34) {
          return Ev();
        }
        if (e === 46) {
          if (dv($y.charCodeAt(ky + 1))) {
            return Cv();
          }
          return Fv();
        }
        if (dv(e)) {
          return Cv();
        }
        return Fv();
      }
      function Mv() {
        const e = Ey;
        ky = e.end;
        Ey = Nv();
        ky = e.end;
        return e;
      }
      function Tv() {
        const e = ky;
        Ey = Nv();
        ky = e;
      }
      function Lv(e) {
        const n = new Ay(Ry);
        n.elements = e;
        return n;
      }
      function Rv(e, n, t) {
        const i = new Ay(e === '||' || e === '&&' ? Gy : qy);
        i.operator = e;
        i.left = n;
        i.right = t;
        return i;
      }
      function qv(e, n) {
        const t = new Ay(Uy);
        t.callee = e;
        t.arguments = n;
        return t;
      }
      function Uv(e, n, t) {
        const i = new Ay(Wy);
        i.test = e;
        i.consequent = n;
        i.alternate = t;
        return i;
      }
      function Wv(e) {
        const n = new Ay(Iy);
        n.name = e;
        return n;
      }
      function Iv(e) {
        const n = new Ay(Hy);
        n.value = e.value;
        n.raw = $y.slice(e.start, e.end);
        if (e.regex) {
          if (n.raw === '//') {
            n.raw = '/(?:)/';
          }
          n.regex = e.regex;
        }
        return n;
      }
      function Hv(e, n, t) {
        const i = new Ay(Vy);
        i.computed = e === '[';
        i.object = n;
        i.property = t;
        if (!i.computed) t.member = true;
        return i;
      }
      function Gv(e) {
        const n = new Ay(Yy);
        n.properties = e;
        return n;
      }
      function Vv(e, n, t) {
        const i = new Ay(Qy);
        i.key = n;
        i.value = t;
        i.kind = e;
        return i;
      }
      function Yv(e, n) {
        const t = new Ay(Xy);
        t.operator = e;
        t.argument = n;
        t.prefix = true;
        return t;
      }
      function Qv(e, n) {
        var t,
          i = Array.prototype.slice.call(arguments, 2),
          r = n.replace(/%(\d)/g, (e, n) => {
            fv(n < i.length, 'Message reference must be in range');
            return i[n];
          });
        t = new Error(r);
        t.index = ky;
        t.description = r;
        throw t;
      }
      function Xv(e) {
        if (e.type === By) {
          Qv(e, tv);
        }
        if (e.type === Ny) {
          Qv(e, Ky);
        }
        if (e.type === Ty) {
          Qv(e, Zy);
        }
        if (e.type === _y) {
          Qv(e, ev);
        }
        if (e.type === Py) {
          Qv(e, nv);
        }
        Qv(e, Jy, e.value);
      }
      function Jv(e) {
        const n = Mv();
        if (n.type !== My || n.value !== e) {
          Xv(n);
        }
      }
      function Kv(e) {
        return Ey.type === My && Ey.value === e;
      }
      function Zv(e) {
        return Ey.type === Py && Ey.value === e;
      }
      function ex() {
        const e = [];
        ky = Ey.start;
        Jv('[');
        while (!Kv(']')) {
          if (Kv(',')) {
            Mv();
            e.push(null);
          } else {
            e.push(hx());
            if (!Kv(']')) {
              Jv(',');
            }
          }
        }
        Mv();
        return Lv(e);
      }
      function nx() {
        ky = Ey.start;
        const e = Mv();
        if (e.type === Ty || e.type === Ny) {
          if (e.octal) {
            Qv(e, sv);
          }
          return Iv(e);
        }
        return Wv(e.value);
      }
      function tx() {
        var e, n, t, i;
        ky = Ey.start;
        e = Ey;
        if (e.type === _y) {
          t = nx();
          Jv(':');
          i = hx();
          return Vv('init', t, i);
        }
        if (e.type === By || e.type === My) {
          Xv(e);
        } else {
          n = nx();
          Jv(':');
          i = hx();
          return Vv('init', n, i);
        }
      }
      function ix() {
        var e = [],
          n,
          t,
          i,
          r = {},
          s = String;
        ky = Ey.start;
        Jv('{');
        while (!Kv('}')) {
          n = tx();
          if (n.key.type === Iy) {
            t = n.key.name;
          } else {
            t = s(n.key.value);
          }
          i = '$' + t;
          if (Object.prototype.hasOwnProperty.call(r, i)) {
            Qv({}, ov);
          } else {
            r[i] = true;
          }
          e.push(n);
          if (!Kv('}')) {
            Jv(',');
          }
        }
        Jv('}');
        return Gv(e);
      }
      function rx() {
        Jv('(');
        const e = bx();
        Jv(')');
        return e;
      }
      const sx = { if: 1 };
      function ox() {
        var e, n, t;
        if (Kv('(')) {
          return rx();
        }
        if (Kv('[')) {
          return ex();
        }
        if (Kv('{')) {
          return ix();
        }
        e = Ey.type;
        ky = Ey.start;
        if (e === _y || sx[Ey.value]) {
          t = Wv(Mv().value);
        } else if (e === Ty || e === Ny) {
          if (Ey.octal) {
            Qv(Ey, sv);
          }
          t = Iv(Mv());
        } else if (e === Py) {
          throw new Error(uv);
        } else if (e === Sy) {
          n = Mv();
          n.value = n.value === 'true';
          t = Iv(n);
        } else if (e === zy) {
          n = Mv();
          n.value = null;
          t = Iv(n);
        } else if (Kv('/') || Kv('/=')) {
          t = Iv(Pv());
          Tv();
        } else {
          Xv(Mv());
        }
        return t;
      }
      function ax() {
        const e = [];
        Jv('(');
        if (!Kv(')')) {
          while (ky < Cy) {
            e.push(hx());
            if (Kv(')')) {
              break;
            }
            Jv(',');
          }
        }
        Jv(')');
        return e;
      }
      function ux() {
        ky = Ey.start;
        const e = Mv();
        if (!zv(e)) {
          Xv(e);
        }
        return Wv(e.value);
      }
      function cx() {
        Jv('.');
        return ux();
      }
      function lx() {
        Jv('[');
        const e = bx();
        Jv(']');
        return e;
      }
      function fx() {
        var e, n, t;
        e = ox();
        for (;;) {
          if (Kv('.')) {
            t = cx();
            e = Hv('.', e, t);
          } else if (Kv('(')) {
            n = ax();
            e = qv(e, n);
          } else if (Kv('[')) {
            t = lx();
            e = Hv('[', e, t);
          } else {
            break;
          }
        }
        return e;
      }
      function dx() {
        const e = fx();
        if (Ey.type === My) {
          if (Kv('++') || Kv('--')) {
            throw new Error(uv);
          }
        }
        return e;
      }
      function px() {
        var e, n;
        if (Ey.type !== My && Ey.type !== Py) {
          n = dx();
        } else if (Kv('++') || Kv('--')) {
          throw new Error(uv);
        } else if (Kv('+') || Kv('-') || Kv('~') || Kv('!')) {
          e = Mv();
          n = px();
          n = Yv(e.value, n);
        } else if (Zv('delete') || Zv('void') || Zv('typeof')) {
          throw new Error(uv);
        } else {
          n = dx();
        }
        return n;
      }
      function gx(e) {
        let n = 0;
        if (e.type !== My && e.type !== Py) {
          return 0;
        }
        switch (e.value) {
          case '||':
            n = 1;
            break;
          case '&&':
            n = 2;
            break;
          case '|':
            n = 3;
            break;
          case '^':
            n = 4;
            break;
          case '&':
            n = 5;
            break;
          case '==':
          case '!=':
          case '===':
          case '!==':
            n = 6;
            break;
          case '<':
          case '>':
          case '<=':
          case '>=':
          case 'instanceof':
          case 'in':
            n = 7;
            break;
          case '<<':
          case '>>':
          case '>>>':
            n = 8;
            break;
          case '+':
          case '-':
            n = 9;
            break;
          case '*':
          case '/':
          case '%':
            n = 11;
            break;
        }
        return n;
      }
      function mx() {
        var e, n, t, i, r, s, o, a, u, c;
        e = Ey;
        u = px();
        i = Ey;
        r = gx(i);
        if (r === 0) {
          return u;
        }
        i.prec = r;
        Mv();
        n = [e, Ey];
        o = px();
        s = [u, i, o];
        while ((r = gx(Ey)) > 0) {
          while (s.length > 2 && r <= s[s.length - 2].prec) {
            o = s.pop();
            a = s.pop().value;
            u = s.pop();
            n.pop();
            t = Rv(a, u, o);
            s.push(t);
          }
          i = Mv();
          i.prec = r;
          s.push(i);
          n.push(Ey);
          t = px();
          s.push(t);
        }
        c = s.length - 1;
        t = s[c];
        n.pop();
        while (c > 1) {
          n.pop();
          t = Rv(s[c - 1].value, s[c - 2], t);
          c -= 2;
        }
        return t;
      }
      function hx() {
        var e, n, t;
        e = mx();
        if (Kv('?')) {
          Mv();
          n = hx();
          Jv(':');
          t = hx();
          e = Uv(e, n, t);
        }
        return e;
      }
      function bx() {
        const e = hx();
        if (Kv(',')) {
          throw new Error(uv);
        }
        return e;
      }
      function yx(e) {
        $y = e;
        ky = 0;
        Cy = $y.length;
        Ey = null;
        Tv();
        const n = bx();
        if (Ey.type !== By) {
          throw new Error('Unexpect token after expression.');
        }
        return n;
      }
      var vx = {
        NaN: 'NaN',
        E: 'Math.E',
        LN2: 'Math.LN2',
        LN10: 'Math.LN10',
        LOG2E: 'Math.LOG2E',
        LOG10E: 'Math.LOG10E',
        PI: 'Math.PI',
        SQRT1_2: 'Math.SQRT1_2',
        SQRT2: 'Math.SQRT2',
        MIN_VALUE: 'Number.MIN_VALUE',
        MAX_VALUE: 'Number.MAX_VALUE',
      };
      function xx(e) {
        function n(n, t, i, r) {
          let s = e(t[0]);
          if (i) {
            s = i + '(' + s + ')';
            if (i.lastIndexOf('new ', 0) === 0) s = '(' + s + ')';
          }
          return (
            s +
            '.' +
            n +
            (r < 0 ? '' : r === 0 ? '()' : '(' + t.slice(1).map(e).join(',') + ')')
          );
        }
        function t(e, t, i) {
          return (r) => n(e, r, t, i);
        }
        const i = 'new Date',
          r = 'String',
          s = 'RegExp';
        return {
          isNaN: 'Number.isNaN',
          isFinite: 'Number.isFinite',
          abs: 'Math.abs',
          acos: 'Math.acos',
          asin: 'Math.asin',
          atan: 'Math.atan',
          atan2: 'Math.atan2',
          ceil: 'Math.ceil',
          cos: 'Math.cos',
          exp: 'Math.exp',
          floor: 'Math.floor',
          log: 'Math.log',
          max: 'Math.max',
          min: 'Math.min',
          pow: 'Math.pow',
          random: 'Math.random',
          round: 'Math.round',
          sin: 'Math.sin',
          sqrt: 'Math.sqrt',
          tan: 'Math.tan',
          clamp: function (n) {
            if (n.length < 3) error('Missing arguments to clamp function.');
            if (n.length > 3) error('Too many arguments to clamp function.');
            const t = n.map(e);
            return 'Math.max(' + t[1] + ', Math.min(' + t[2] + ',' + t[0] + '))';
          },
          now: 'Date.now',
          utc: 'Date.UTC',
          datetime: i,
          date: t('getDate', i, 0),
          day: t('getDay', i, 0),
          year: t('getFullYear', i, 0),
          month: t('getMonth', i, 0),
          hours: t('getHours', i, 0),
          minutes: t('getMinutes', i, 0),
          seconds: t('getSeconds', i, 0),
          milliseconds: t('getMilliseconds', i, 0),
          time: t('getTime', i, 0),
          timezoneoffset: t('getTimezoneOffset', i, 0),
          utcdate: t('getUTCDate', i, 0),
          utcday: t('getUTCDay', i, 0),
          utcyear: t('getUTCFullYear', i, 0),
          utcmonth: t('getUTCMonth', i, 0),
          utchours: t('getUTCHours', i, 0),
          utcminutes: t('getUTCMinutes', i, 0),
          utcseconds: t('getUTCSeconds', i, 0),
          utcmilliseconds: t('getUTCMilliseconds', i, 0),
          length: t('length', null, -1),
          parseFloat: 'parseFloat',
          parseInt: 'parseInt',
          upper: t('toUpperCase', r, 0),
          lower: t('toLowerCase', r, 0),
          substring: t('substring', r),
          split: t('split', r),
          trim: t('trim', r, 0),
          regexp: s,
          test: t('test', s),
          if: function (n) {
            if (n.length < 3) error('Missing arguments to if function.');
            if (n.length > 3) error('Too many arguments to if function.');
            const t = n.map(e);
            return '(' + t[0] + '?' + t[1] + ':' + t[2] + ')';
          },
        };
      }
      function Ox(e) {
        const n = e && e.length - 1;
        return n && ((e[0] === '"' && e[n] === '"') || (e[0] === "'" && e[n] === "'"))
          ? e.slice(1, -1)
          : e;
      }
      function wx(e) {
        e = e || {};
        const n = e.allowed ? toSet(e.allowed) : {},
          t = e.forbidden ? toSet(e.forbidden) : {},
          i = e.constants || vx,
          r = (e.functions || xx)(f),
          s = e.globalvar,
          o = e.fieldvar,
          a = isFunction(s) ? s : (e) => ''.concat(s, '["').concat(e, '"]');
        let u = {},
          c = {},
          l = 0;
        function f(e) {
          if (isString(e)) return e;
          const n = d[e.type];
          if (n == null) error('Unsupported type: ' + e.type);
          return n(e);
        }
        const d = {
          Literal: (e) => e.raw,
          Identifier: (e) => {
            const r = e.name;
            if (l > 0) {
              return r;
            } else if (hasOwnProperty(t, r)) {
              return error('Illegal identifier: ' + r);
            } else if (hasOwnProperty(i, r)) {
              return i[r];
            } else if (hasOwnProperty(n, r)) {
              return r;
            } else {
              u[r] = 1;
              return a(r);
            }
          },
          MemberExpression: (e) => {
            const n = !e.computed,
              t = f(e.object);
            if (n) l += 1;
            const i = f(e.property);
            if (t === o) {
              c[Ox(i)] = 1;
            }
            if (n) l -= 1;
            return t + (n ? '.' + i : '[' + i + ']');
          },
          CallExpression: (e) => {
            if (e.callee.type !== 'Identifier') {
              error('Illegal callee type: ' + e.callee.type);
            }
            const n = e.callee.name,
              t = e.arguments,
              i = hasOwnProperty(r, n) && r[n];
            if (!i) error('Unrecognized function: ' + n);
            return isFunction(i) ? i(t) : i + '(' + t.map(f).join(',') + ')';
          },
          ArrayExpression: (e) => '[' + e.elements.map(f).join(',') + ']',
          BinaryExpression: (e) =>
            '(' + f(e.left) + ' ' + e.operator + ' ' + f(e.right) + ')',
          UnaryExpression: (e) => '(' + e.operator + f(e.argument) + ')',
          ConditionalExpression: (e) =>
            '(' + f(e.test) + '?' + f(e.consequent) + ':' + f(e.alternate) + ')',
          LogicalExpression: (e) => '(' + f(e.left) + e.operator + f(e.right) + ')',
          ObjectExpression: (e) => '{' + e.properties.map(f).join(',') + '}',
          Property: (e) => {
            l += 1;
            const n = f(e.key);
            l -= 1;
            return n + ':' + f(e.value);
          },
        };
        function p(e) {
          const n = { code: f(e), globals: Object.keys(u), fields: Object.keys(c) };
          u = {};
          c = {};
          return n;
        }
        p.functions = r;
        p.constants = i;
        return p;
      }
      function jx(e) {
        const n = [];
        if (e.type === 'Identifier') {
          return [e.name];
        }
        if (e.type === 'Literal') {
          return [e.value];
        }
        if (e.type === 'MemberExpression') {
          n.push(...jx(e.object));
          n.push(...jx(e.property));
        }
        return n;
      }
      function Ax(e) {
        if (e.object.type === 'MemberExpression') {
          return Ax(e.object);
        }
        return e.object.name === 'datum';
      }
      function Dx(e) {
        const n = yx(e);
        const t = new Set();
        n.visit((e) => {
          if (e.type === 'MemberExpression' && Ax(e)) {
            t.add(jx(e).slice(1).join('.'));
          }
        });
        return t;
      }
      class Fx extends Hg {
        constructor(e, n, t) {
          super(e);
          this.model = n;
          this.filter = t;
          this.expr = Sx(this.model, this.filter, this);
          this._dependentFields = Dx(this.expr);
        }
        clone() {
          return new Fx(null, this.model, Ze(this.filter));
        }
        dependentFields() {
          return this._dependentFields;
        }
        producedFields() {
          return new Set();
        }
        assemble() {
          return { type: 'filter', expr: this.expr };
        }
        hash() {
          return `Filter ${this.expr}`;
        }
      }
      function $x(e, n) {
        var t;
        const i = {};
        const r = e.config.selection;
        if (!n || !n.length) return i;
        for (const s of n) {
          const n = wn(s.name);
          const o = s.select;
          const a = je(o) ? o : o.type;
          const u = $(o) ? Ze(o) : { type: a };
          const c = r[a];
          for (const e in c) {
            if (e === 'fields' || e === 'encodings') {
              continue;
            }
            if (e === 'mark') {
              u[e] = Object.assign(Object.assign({}, c[e]), u[e]);
            }
            if (u[e] === undefined || u[e] === true) {
              u[e] = (t = c[e]) !== null && t !== void 0 ? t : u[e];
            }
          }
          const l = (i[n] = Object.assign(Object.assign({}, u), {
            name: n,
            type: a,
            init: s.value,
            bind: s.bind,
            events: je(u.on) ? $g(u.on, 'scope') : J(Ze(u.on)),
          }));
          for (const t of Dh) {
            if (t.defined(l) && t.parse) {
              t.parse(e, l, s);
            }
          }
        }
        return i;
      }
      function kx(e, n, t, i = 'datum') {
        const r = je(n) ? n : n.param;
        const s = wn(r);
        const o = Be(s + xh);
        let a;
        try {
          a = e.getSelectionComponent(s, r);
        } catch (l) {
          return `!!${s}`;
        }
        if (a.project.timeUnit) {
          const n = t !== null && t !== void 0 ? t : e.component.data.raw;
          const i = a.project.timeUnit.clone();
          if (n.parent) {
            i.insertAsParentOf(n);
          } else {
            n.parent = i;
          }
        }
        const u = `vlSelectionTest(${o}, ${i}${
          a.resolve === 'global' ? ')' : `, ${Be(a.resolve)})`
        }`;
        const c = `length(data(${o}))`;
        return n.empty === false ? `${c} && ${u}` : `!${c} || ${u}`;
      }
      function Cx(e, n, t) {
        const i = wn(n);
        const r = t['encoding'];
        let s = t['field'];
        let o;
        try {
          o = e.getSelectionComponent(i, n);
        } catch (a) {
          return i;
        }
        if (!r && !s) {
          s = o.project.items[0].field;
          if (o.project.items.length > 1) {
            xo(
              'A "field" or "encoding" must be specified when using a selection as a scale domain. ' +
                `Using "field": ${Be(s)}.`
            );
          }
        } else if (r && !s) {
          const e = o.project.items.filter((e) => e.channel === r);
          if (!e.length || e.length > 1) {
            s = o.project.items[0].field;
            xo(
              (!e.length ? 'No ' : 'Multiple ') +
                `matching ${Be(r)} encoding found for selection ${Be(t.param)}. ` +
                `Using "field": ${Be(s)}.`
            );
          } else {
            s = e[0].field;
          }
        }
        return `${o.name}[${Be(Cn(s))}]`;
      }
      function Ex(e, n) {
        var t;
        for (const [i, r] of xn(
          (t = e.component.selection) !== null && t !== void 0 ? t : {}
        )) {
          const t = e.getName(`lookup_${i}`);
          e.component.data.outputNodes[t] = r.materialized = new Gg(
            new Fx(n, e, { param: i }),
            t,
            pg.Lookup,
            e.component.data.outputNodeRefCounts
          );
        }
      }
      function Sx(e, n, t) {
        return jn(n, (n) => {
          if (je(n)) {
            return n;
          } else if (Ko(n)) {
            return kx(e, n, t);
          } else {
            return la(n);
          }
        });
      }
      var Bx =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function _x(e, n) {
        if (!e) {
          return undefined;
        }
        if (F(e) && !lr(e)) {
          return e.map((e) => dl(e, n)).join(', ');
        }
        return e;
      }
      function Px(e, n, t, i) {
        var r, s, o;
        var a, u;
        (r = e.encode) !== null && r !== void 0 ? r : (e.encode = {});
        (s = (a = e.encode)[n]) !== null && s !== void 0 ? s : (a[n] = {});
        (o = (u = e.encode[n]).update) !== null && o !== void 0 ? o : (u.update = {});
        e.encode[n].update[t] = i;
      }
      function zx(e, n, t, i = { header: false }) {
        var r, s;
        const o = e.combine(),
          { disable: a, orient: u, scale: c, labelExpr: l, title: f, zindex: d } = o,
          p = Bx(o, ['disable', 'orient', 'scale', 'labelExpr', 'title', 'zindex']);
        if (a) {
          return undefined;
        }
        for (const g in p) {
          const e = Bl[g];
          const t = p[g];
          if (e && e !== n && e !== 'both') {
            delete p[g];
          } else if (El(t)) {
            const { condition: e } = t,
              n = Bx(t, ['condition']);
            const i = J(e);
            const r = Cl[g];
            if (r) {
              const { vgProp: e, part: t } = r;
              const s = [
                ...i.map((e) => {
                  const { test: n } = e,
                    t = Bx(e, ['test']);
                  return Object.assign({ test: Sx(null, n) }, t);
                }),
                n,
              ];
              Px(p, t, e, s);
              delete p[g];
            } else if (r === null) {
              const e = {
                signal:
                  i
                    .map((e) => {
                      const { test: n } = e,
                        t = Bx(e, ['test']);
                      return `${Sx(null, n)} ? ${Fr(t)} : `;
                    })
                    .join('') + Fr(n),
              };
              p[g] = e;
            }
          } else if (fr(t)) {
            const e = Cl[g];
            if (e) {
              const { vgProp: n, part: i } = e;
              Px(p, i, n, t);
              delete p[g];
            }
          }
          if (on(['labelAlign', 'labelBaseline'], g) && p[g] === null) {
            delete p[g];
          }
        }
        if (n === 'grid') {
          if (!p.grid) {
            return undefined;
          }
          if (p.encode) {
            const { grid: e } = p.encode;
            p.encode = Object.assign({}, e ? { grid: e } : {});
            if (bn(p.encode)) {
              delete p.encode;
            }
          }
          return Object.assign(Object.assign({ scale: c, orient: u }, p), {
            domain: false,
            labels: false,
            aria: false,
            maxExtent: 0,
            minExtent: 0,
            ticks: false,
            zindex: _n(d, 0),
          });
        } else {
          if (!i.header && e.mainExtracted) {
            return undefined;
          }
          if (l !== undefined) {
            let e = l;
            if (
              ((s = (r = p.encode) === null || r === void 0 ? void 0 : r.labels) ===
                null || s === void 0
                ? void 0
                : s.update) &&
              fr(p.encode.labels.update.text)
            ) {
              e = En(l, 'datum.label', p.encode.labels.update.text.signal);
            }
            Px(p, 'labels', 'text', { signal: e });
          }
          if (p.labelAlign === null) {
            delete p.labelAlign;
          }
          if (p.encode) {
            for (const n of Sl) {
              if (!e.hasAxisPart(n)) {
                delete p.encode[n];
              }
            }
            if (bn(p.encode)) {
              delete p.encode;
            }
          }
          const n = _x(f, t);
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  { scale: c, orient: u, grid: false },
                  n ? { title: n } : {}
                ),
                p
              ),
              t.aria === false ? { aria: false } : {}
            ),
            { zindex: _n(d, 0) }
          );
        }
      }
      function Nx(e) {
        const { axes: n } = e.component;
        const t = [];
        for (const i of hi) {
          if (n[i]) {
            for (const r of n[i]) {
              if (!r.get('disable') && !r.get('gridScale')) {
                const n = i === 'x' ? 'height' : 'width';
                const r = e.getSizeSignalRef(n).signal;
                if (n !== r) {
                  t.push({ name: n, update: r });
                }
              }
            }
          }
        }
        return t;
      }
      function Mx(e, n) {
        const { x: t = [], y: i = [] } = e;
        return [
          ...t.map((e) => zx(e, 'grid', n)),
          ...i.map((e) => zx(e, 'grid', n)),
          ...t.map((e) => zx(e, 'main', n)),
          ...i.map((e) => zx(e, 'main', n)),
        ].filter((e) => e);
      }
      function Tx(e, n, t, i) {
        return Object.assign.apply(null, [
          {},
          ...e.map((e) => {
            if (e === 'axisOrient') {
              const e = t === 'x' ? 'bottom' : 'left';
              const r = n[t === 'x' ? 'axisBottom' : 'axisLeft'] || {};
              const s = n[t === 'x' ? 'axisTop' : 'axisRight'] || {};
              const o = new Set([...yn(r), ...yn(s)]);
              const a = {};
              for (const n of o.values()) {
                a[n] = {
                  signal: `${i['signal']} === "${e}" ? ${$r(r[n])} : ${$r(s[n])}`,
                };
              }
              return a;
            }
            return n[e];
          }),
        ]);
      }
      function Lx(e, n, t, i) {
        const r =
          n === 'band'
            ? ['axisDiscrete', 'axisBand']
            : n === 'point'
            ? ['axisDiscrete', 'axisPoint']
            : Pa(n)
            ? ['axisQuantitative']
            : n === 'time' || n === 'utc'
            ? ['axisTemporal']
            : [];
        const s = e === 'x' ? 'axisX' : 'axisY';
        const o = fr(t) ? 'axisOrient' : `axis${Dn(t)}`;
        const a = [...r, ...r.map((e) => s + e.substr(4))];
        const u = ['axis', o, s];
        return {
          vlOnlyAxisConfig: Tx(a, i, e, t),
          vgAxisConfig: Tx(u, i, e, t),
          axisConfigStyle: Rx([...u, ...a], i),
        };
      }
      function Rx(e, n) {
        var t;
        const i = [{}];
        for (const r of e) {
          let e = (t = n[r]) === null || t === void 0 ? void 0 : t.style;
          if (e) {
            e = J(e);
            for (const t of e) {
              i.push(n.style[t]);
            }
          }
        }
        return Object.assign.apply(null, i);
      }
      function qx(e, n, t, i = {}) {
        var r;
        const s = _r(e, t, n);
        if (s !== undefined) {
          return { configFrom: 'style', configValue: s };
        }
        for (const o of ['vlOnlyAxisConfig', 'vgAxisConfig', 'axisConfigStyle']) {
          if (((r = i[o]) === null || r === void 0 ? void 0 : r[e]) !== undefined) {
            return { configFrom: o, configValue: i[o][e] };
          }
        }
        return {};
      }
      const Ux = {
        scale: ({ model: e, channel: n }) => e.scaleName(n),
        format: ({ fieldOrDatumDef: e, config: n, axis: t }) => {
          const { format: i, formatType: r } = t;
          return lc(e, e.type, i, r, n, true);
        },
        formatType: ({ axis: e, fieldOrDatumDef: n, scaleType: t }) => {
          const { formatType: i } = e;
          return fc(i, n, t);
        },
        grid: ({ fieldOrDatumDef: e, axis: n, scaleType: t }) => {
          var i;
          return (i = n.grid) !== null && i !== void 0 ? i : Wx(t, e);
        },
        gridScale: ({ model: e, channel: n }) => Ix(e, n),
        labelAlign: ({ axis: e, labelAngle: n, orient: t, channel: i }) =>
          e.labelAlign || Yx(n, t, i),
        labelAngle: ({ labelAngle: e }) => e,
        labelBaseline: ({ axis: e, labelAngle: n, orient: t, channel: i }) =>
          e.labelBaseline || Vx(n, t, i),
        labelFlush: ({ axis: e, fieldOrDatumDef: n, channel: t }) => {
          var i;
          return (i = e.labelFlush) !== null && i !== void 0 ? i : Qx(n.type, t);
        },
        labelOverlap: ({ axis: e, fieldOrDatumDef: n, scaleType: t }) => {
          var i;
          return (i = e.labelOverlap) !== null && i !== void 0
            ? i
            : Xx(n.type, t, Lc(n) && !!n.timeUnit, Lc(n) ? n.sort : undefined);
        },
        orient: ({ orient: e }) => e,
        tickCount: ({
          channel: e,
          model: n,
          axis: t,
          fieldOrDatumDef: i,
          scaleType: r,
        }) => {
          var s;
          const o = e === 'x' ? 'width' : e === 'y' ? 'height' : undefined;
          const a = o ? n.getSizeSignalRef(o) : undefined;
          return (s = t.tickCount) !== null && s !== void 0
            ? s
            : Kx({ fieldOrDatumDef: i, scaleType: r, size: a, values: t.values });
        },
        title: ({ axis: e, model: n, channel: t }) => {
          if (e.title !== undefined) {
            return e.title;
          }
          const i = Zx(n, t);
          if (i !== undefined) {
            return i;
          }
          const r = n.typedFieldDef(t);
          const s = t === 'x' ? 'x2' : 'y2';
          const o = n.fieldDef(s);
          return zr(r ? [Ec(r)] : [], Lc(o) ? [Ec(o)] : []);
        },
        values: ({ axis: e, fieldOrDatumDef: n }) => eO(e, n),
        zindex: ({ axis: e, fieldOrDatumDef: n, mark: t }) => {
          var i;
          return (i = e.zindex) !== null && i !== void 0 ? i : nO(t, n);
        },
      };
      function Wx(e, n) {
        return (
          !Ua(e) &&
          Lc(n) &&
          !nr(n === null || n === void 0 ? void 0 : n.bin) &&
          !tr(n === null || n === void 0 ? void 0 : n.bin)
        );
      }
      function Ix(e, n) {
        const t = n === 'x' ? 'y' : 'x';
        if (e.getScaleComponent(t)) {
          return e.scaleName(t);
        }
        return undefined;
      }
      function Hx(e, n, t, i, r) {
        const s = n === null || n === void 0 ? void 0 : n.labelAngle;
        if (s !== undefined) {
          return fr(s) ? s : Ln(s);
        } else {
          const { configValue: s } = qx(
            'labelAngle',
            i,
            n === null || n === void 0 ? void 0 : n.style,
            r
          );
          if (s !== undefined) {
            return Ln(s);
          } else {
            if (t === Hn && on([va, ba], e.type) && !(Lc(e) && e.timeUnit)) {
              return 270;
            }
            return undefined;
          }
        }
      }
      function Gx(e) {
        return `(((${e.signal} % 360) + 360) % 360)`;
      }
      function Vx(e, n, t, i) {
        if (e !== undefined) {
          if (t === 'x') {
            if (fr(e)) {
              const t = Gx(e);
              const i = fr(n) ? `(${n.signal} === "top")` : n === 'top';
              return {
                signal:
                  `(45 < ${t} && ${t} < 135) || (225 < ${t} && ${t} < 315) ? "middle" :` +
                  `(${t} <= 45 || 315 <= ${t}) === ${i} ? "bottom" : "top"`,
              };
            }
            if ((45 < e && e < 135) || (225 < e && e < 315)) {
              return 'middle';
            }
            if (fr(n)) {
              const t = e <= 45 || 315 <= e ? '===' : '!==';
              return { signal: `${n.signal} ${t} "top" ? "bottom" : "top"` };
            }
            return (e <= 45 || 315 <= e) === (n === 'top') ? 'bottom' : 'top';
          } else {
            if (fr(e)) {
              const t = Gx(e);
              const r = fr(n) ? `(${n.signal} === "left")` : n === 'left';
              const s = i ? '"middle"' : 'null';
              return {
                signal: `${t} <= 45 || 315 <= ${t} || (135 <= ${t} && ${t} <= 225) ? ${s} : (45 <= ${t} && ${t} <= 135) === ${r} ? "top" : "bottom"`,
              };
            }
            if (e <= 45 || 315 <= e || (135 <= e && e <= 225)) {
              return i ? 'middle' : null;
            }
            if (fr(n)) {
              const t = 45 <= e && e <= 135 ? '===' : '!==';
              return { signal: `${n.signal} ${t} "left" ? "top" : "bottom"` };
            }
            return (45 <= e && e <= 135) === (n === 'left') ? 'top' : 'bottom';
          }
        }
        return undefined;
      }
      function Yx(e, n, t) {
        if (e === undefined) {
          return undefined;
        }
        const i = t === 'x';
        const r = i ? 0 : 90;
        const s = i ? 'bottom' : 'left';
        if (fr(e)) {
          const t = Gx(e);
          const o = fr(n) ? `(${n.signal} === "${s}")` : n === s;
          return {
            signal:
              `(${r ? `(${t} + 90)` : t} % 180 === 0) ? ${i ? null : '"center"'} :` +
              `(${r} < ${t} && ${t} < ${180 + r}) === ${o} ? "left" : "right"`,
          };
        }
        if ((e + r) % 180 === 0) {
          return i ? null : 'center';
        }
        if (fr(n)) {
          const t = r < e && e < 180 + r ? '===' : '!==';
          const i = `${n.signal} ${t} "${s}"`;
          return { signal: `${i} ? "left" : "right"` };
        }
        if ((r < e && e < 180 + r) === (n === s)) {
          return 'left';
        }
        return 'right';
      }
      function Qx(e, n) {
        if (n === 'x' && on(['quantitative', 'temporal'], e)) {
          return true;
        }
        return undefined;
      }
      function Xx(e, n, t, i) {
        if ((t && !$(i)) || (e !== 'nominal' && e !== 'ordinal')) {
          if (n === 'log' || n === 'symlog') {
            return 'greedy';
          }
          return true;
        }
        return undefined;
      }
      function Jx(e) {
        return e === 'x' ? 'bottom' : 'left';
      }
      function Kx({ fieldOrDatumDef: e, scaleType: n, size: t, values: i }) {
        var r;
        if (!i && !Ua(n) && n !== 'log') {
          if (Lc(e)) {
            if (nr(e.bin)) {
              return { signal: `ceil(${t.signal}/10)` };
            }
            if (
              e.timeUnit &&
              on(
                ['month', 'hours', 'day', 'quarter'],
                (r = Xo(e.timeUnit)) === null || r === void 0 ? void 0 : r.unit
              )
            ) {
              return undefined;
            }
          }
          return { signal: `ceil(${t.signal}/40)` };
        }
        return undefined;
      }
      function Zx(e, n) {
        const t = n === 'x' ? 'x2' : 'y2';
        const i = e.fieldDef(n);
        const r = e.fieldDef(t);
        const s = i ? i.title : undefined;
        const o = r ? r.title : undefined;
        if (s && o) {
          return Nr(s, o);
        } else if (s) {
          return s;
        } else if (o) {
          return o;
        } else if (s !== undefined) {
          return s;
        } else if (o !== undefined) {
          return o;
        }
        return undefined;
      }
      function eO(e, n) {
        const t = e.values;
        if (F(t)) {
          return $l(n, t);
        } else if (fr(t)) {
          return t;
        }
        return undefined;
      }
      function nO(e, n) {
        if (e === 'rect' && nl(n)) {
          return 1;
        }
        return 0;
      }
      class tO extends Hg {
        constructor(e, n) {
          super(e);
          this.transform = n;
          this._dependentFields = Dx(this.transform.calculate);
        }
        clone() {
          return new tO(null, Ze(this.transform));
        }
        static parseAllForSortIndex(e, n) {
          n.forEachFieldDef((n, t) => {
            if (!Yc(n)) {
              return;
            }
            if (jc(n.sort)) {
              const { field: i, timeUnit: r } = n;
              const s = n.sort;
              const o =
                s
                  .map((e, n) => `${la({ field: i, timeUnit: r, equal: e })} ? ${n} : `)
                  .join('') + s.length;
              e = new tO(e, { calculate: o, as: iO(n, t, { forAs: true }) });
            }
          });
          return e;
        }
        producedFields() {
          return new Set([this.transform.as]);
        }
        dependentFields() {
          return this._dependentFields;
        }
        assemble() {
          return {
            type: 'formula',
            expr: this.transform.calculate,
            as: this.transform.as,
          };
        }
        hash() {
          return `Calculate ${rn(this.transform)}`;
        }
      }
      function iO(e, n, t) {
        return el(
          e,
          Object.assign(
            { prefix: n, suffix: 'sort_index' },
            t !== null && t !== void 0 ? t : {}
          )
        );
      }
      function rO(e, n) {
        if (on(['top', 'bottom'], n)) {
          return 'column';
        } else if (on(['left', 'right'], n)) {
          return 'row';
        }
        return e === 'row' ? 'row' : 'column';
      }
      function sO(e, n, t, i) {
        const r =
          i === 'row' ? t.headerRow : i === 'column' ? t.headerColumn : t.headerFacet;
        return _n((n || {})[e], r[e], t.header[e]);
      }
      function oO(e, n, t, i) {
        const r = {};
        for (const s of e) {
          const e = sO(s, n || {}, t, i);
          if (e !== undefined) {
            r[s] = e;
          }
        }
        return r;
      }
      const aO = ['row', 'column'];
      const uO = ['header', 'footer'];
      function cO(e, n) {
        const t = e.component.layoutHeaders[n].title;
        const i = e.config ? e.config : undefined;
        const r = e.component.layoutHeaders[n].facetFieldDef
          ? e.component.layoutHeaders[n].facetFieldDef
          : undefined;
        const {
          titleAnchor: s,
          titleAngle: o,
          titleOrient: a,
        } = oO(['titleAnchor', 'titleAngle', 'titleOrient'], r.header, i, n);
        const u = rO(n, a);
        const c = Ln(o);
        return {
          name: `${n}-title`,
          type: 'group',
          role: `${u}-title`,
          title: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign({ text: t }, n === 'row' ? { orient: 'left' } : {}),
                  { style: 'guide-title' }
                ),
                fO(c, u)
              ),
              lO(u, c, s)
            ),
            vO(i, r, n, Lf, Mf)
          ),
        };
      }
      function lO(e, n, t = 'middle') {
        switch (t) {
          case 'start':
            return { align: 'left' };
          case 'end':
            return { align: 'right' };
        }
        const i = Yx(n, e === 'row' ? 'left' : 'top', e === 'row' ? 'y' : 'x');
        return i ? { align: i } : {};
      }
      function fO(e, n) {
        const t = Vx(e, n === 'row' ? 'left' : 'top', n === 'row' ? 'y' : 'x', true);
        return t ? { baseline: t } : {};
      }
      function dO(e, n) {
        const t = e.component.layoutHeaders[n];
        const i = [];
        for (const r of uO) {
          if (t[r]) {
            for (const s of t[r]) {
              const o = mO(e, n, r, t, s);
              if (o != null) {
                i.push(o);
              }
            }
          }
        }
        return i;
      }
      function pO(e, n) {
        var t;
        const { sort: i } = e;
        if (wc(i)) {
          return {
            field: el(i, { expr: 'datum' }),
            order: (t = i.order) !== null && t !== void 0 ? t : 'ascending',
          };
        } else if (F(i)) {
          return { field: iO(e, n, { expr: 'datum' }), order: 'ascending' };
        } else {
          return {
            field: el(e, { expr: 'datum' }),
            order: i !== null && i !== void 0 ? i : 'ascending',
          };
        }
      }
      function gO(e, n, t) {
        const {
          format: i,
          formatType: r,
          labelAngle: s,
          labelAnchor: o,
          labelOrient: a,
          labelExpr: u,
        } = oO(
          [
            'format',
            'formatType',
            'labelAngle',
            'labelAnchor',
            'labelOrient',
            'labelExpr',
          ],
          e.header,
          t,
          n
        );
        const c = ac({
          fieldOrDatumDef: e,
          format: i,
          formatType: r,
          expr: 'parent',
          config: t,
        }).signal;
        const l = rO(n, a);
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {
                    text: {
                      signal: u
                        ? En(
                            En(u, 'datum.label', c),
                            'datum.value',
                            el(e, { expr: 'parent' })
                          )
                        : c,
                    },
                  },
                  n === 'row' ? { orient: 'left' } : {}
                ),
                { style: 'guide-label', frame: 'group' }
              ),
              fO(s, l)
            ),
            lO(l, s, o)
          ),
          vO(t, e, n, Rf, Tf)
        );
      }
      function mO(e, n, t, i, r) {
        if (r) {
          let s = null;
          const { facetFieldDef: o } = i;
          const a = e.config ? e.config : undefined;
          if (o && r.labels) {
            const { labelOrient: e } = oO(['labelOrient'], o.header, a, n);
            if (
              (n === 'row' && !on(['top', 'bottom'], e)) ||
              (n === 'column' && !on(['left', 'right'], e))
            ) {
              s = gO(o, n, a);
            }
          }
          const u = AA(e) && !Ac(e.facet);
          const c = r.axes;
          const l = (c === null || c === void 0 ? void 0 : c.length) > 0;
          if (s || l) {
            const a = n === 'row' ? 'height' : 'width';
            return Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {
                        name: e.getName(`${n}_${t}`),
                        type: 'group',
                        role: `${n}-${t}`,
                      },
                      i.facetFieldDef
                        ? { from: { data: e.getName(`${n}_domain`) }, sort: pO(o, n) }
                        : {}
                    ),
                    l && u ? { from: { data: e.getName(`facet_domain_${n}`) } } : {}
                  ),
                  s ? { title: s } : {}
                ),
                r.sizeSignal ? { encode: { update: { [a]: r.sizeSignal } } } : {}
              ),
              l ? { axes: c } : {}
            );
          }
        }
        return null;
      }
      const hO = { column: { start: 0, end: 1 }, row: { start: 1, end: 0 } };
      function bO(e, n) {
        return hO[n][e];
      }
      function yO(e, n) {
        const t = {};
        for (const i of Bt) {
          const r = e[i];
          if (r === null || r === void 0 ? void 0 : r.facetFieldDef) {
            const { titleAnchor: e, titleOrient: s } = oO(
              ['titleAnchor', 'titleOrient'],
              r.facetFieldDef.header,
              n,
              i
            );
            const o = rO(i, s);
            const a = bO(e, o);
            if (a !== undefined) {
              t[o] = a;
            }
          }
        }
        return bn(t) ? undefined : t;
      }
      function vO(e, n, t, i, r) {
        const s = {};
        for (const o of i) {
          if (!r[o]) {
            continue;
          }
          const i = sO(o, n === null || n === void 0 ? void 0 : n.header, e, t);
          if (i !== undefined) {
            s[r[o]] = i;
          }
        }
        return s;
      }
      function xO(e) {
        return [
          ...OO(e, 'width'),
          ...OO(e, 'height'),
          ...OO(e, 'childWidth'),
          ...OO(e, 'childHeight'),
        ];
      }
      function OO(e, n) {
        const t = n === 'width' ? 'x' : 'y';
        const i = e.component.layoutSize.get(n);
        if (!i || i === 'merged') {
          return [];
        }
        const r = e.getSizeSignalRef(n).signal;
        if (i === 'step') {
          const n = e.getScaleComponent(t);
          if (n) {
            const i = n.get('type');
            const s = n.get('range');
            if (Ua(i) && dr(s)) {
              const i = e.scaleName(t);
              if (AA(e.parent)) {
                const n = e.parent.component.resolve;
                if (n.scale[t] === 'independent') {
                  return [wO(i, s)];
                }
              }
              return [wO(i, s), { name: r, update: jO(i, n, `domain('${i}').length`) }];
            }
          }
          throw new Error('layout size is step although width/height is not step.');
        } else if (i == 'container') {
          const n = r.endsWith('width');
          const t = n ? 'containerSize()[0]' : 'containerSize()[1]';
          const i = fd(e.config.view, n ? 'width' : 'height');
          const s = `isFinite(${t}) ? ${t} : ${i}`;
          return [{ name: r, init: s, on: [{ update: s, events: 'window:resize' }] }];
        } else {
          return [{ name: r, value: i }];
        }
      }
      function wO(e, n) {
        return { name: `${e}_step`, value: n.step };
      }
      function jO(e, n, t) {
        const i = n.get('type');
        const r = n.get('padding');
        const s = _n(n.get('paddingOuter'), r);
        let o = n.get('paddingInner');
        o = i === 'band' ? (o !== undefined ? o : r) : 1;
        return `bandspace(${t}, ${$r(o)}, ${$r(s)}) * ${e}_step`;
      }
      function AO(e) {
        return e === 'childWidth' ? 'width' : e === 'childHeight' ? 'height' : e;
      }
      function DO(e, n) {
        return yn(e).reduce((t, i) => {
          const r = e[i];
          return Object.assign(
            Object.assign({}, t),
            pm(n, r, i, (e) => Dr(e.value))
          );
        }, {});
      }
      function FO(e, n) {
        if (AA(n)) {
          return e === 'theta' ? 'independent' : 'shared';
        } else if (FA(n)) {
          return 'shared';
        } else if (DA(n)) {
          return bi(e) || e === 'theta' || e === 'radius' ? 'independent' : 'shared';
        }
        throw new Error('invalid model type for resolve');
      }
      function $O(e, n) {
        const t = e.scale[n];
        const i = bi(n) ? 'axis' : 'legend';
        if (t === 'independent') {
          if (e[i][n] === 'shared') {
            xo(Is(n));
          }
          return 'independent';
        }
        return e[i][n] || 'shared';
      }
      const kO = Object.assign(Object.assign({}, Hf), {
        disable: 1,
        labelExpr: 1,
        selections: 1,
        opacity: 1,
        shape: 1,
        stroke: 1,
        fill: 1,
        size: 1,
        strokeWidth: 1,
        strokeDash: 1,
        encode: 1,
      });
      const CO = yn(kO);
      class EO extends Zp {}
      const SO = { symbols: BO, gradient: _O, labels: PO, entries: zO };
      function BO(
        e,
        { fieldOrDatumDef: n, model: t, channel: i, legendCmpt: r, legendType: s }
      ) {
        var o, a, u, c, l, f, d, p;
        if (s !== 'symbol') {
          return undefined;
        }
        const { markDef: g, encoding: m, config: h, mark: b } = t;
        const y = g.filled && b !== 'trail';
        let v = Object.assign(Object.assign({}, kr({}, t, zu)), jm(t, { filled: y }));
        const x =
          (o = r.get('symbolOpacity')) !== null && o !== void 0
            ? o
            : h.legend.symbolOpacity;
        const O =
          (a = r.get('symbolFillColor')) !== null && a !== void 0
            ? a
            : h.legend.symbolFillColor;
        const w =
          (u = r.get('symbolStrokeColor')) !== null && u !== void 0
            ? u
            : h.legend.symbolStrokeColor;
        const j =
          x === undefined
            ? (c = NO(m.opacity)) !== null && c !== void 0
              ? c
              : g.opacity
            : undefined;
        if (v.fill) {
          if (i === 'fill' || (y && i === it)) {
            delete v.fill;
          } else {
            if (v.fill['field']) {
              if (O) {
                delete v.fill;
              } else {
                v.fill = Dr(
                  (l = h.legend.symbolBaseFillColor) !== null && l !== void 0
                    ? l
                    : 'black'
                );
                v.fillOpacity = Dr(j !== null && j !== void 0 ? j : 1);
              }
            } else if (F(v.fill)) {
              const e =
                (p =
                  (d = MO((f = m.fill) !== null && f !== void 0 ? f : m.color)) !==
                    null && d !== void 0
                    ? d
                    : g.fill) !== null && p !== void 0
                  ? p
                  : y && g.color;
              if (e) {
                v.fill = Dr(e);
              }
            }
          }
        }
        if (v.stroke) {
          if (i === 'stroke' || (!y && i === it)) {
            delete v.stroke;
          } else {
            if (v.stroke['field'] || w) {
              delete v.stroke;
            } else if (F(v.stroke)) {
              const e = _n(MO(m.stroke || m.color), g.stroke, y ? g.color : undefined);
              if (e) {
                v.stroke = { value: e };
              }
            }
          }
        }
        if (i !== ct) {
          const e = Lc(n) && LO(t, r, n);
          if (e) {
            v.opacity = [
              Object.assign({ test: e }, Dr(j !== null && j !== void 0 ? j : 1)),
              Dr(h.legend.unselectedOpacity),
            ];
          } else if (j) {
            v.opacity = Dr(j);
          }
        }
        v = Object.assign(Object.assign({}, v), e);
        return bn(v) ? undefined : v;
      }
      function _O(e, { model: n, legendType: t, legendCmpt: i }) {
        var r;
        if (t !== 'gradient') {
          return undefined;
        }
        const { config: s, markDef: o, encoding: a } = n;
        let u = {};
        const c =
          (r = i.get('gradientOpacity')) !== null && r !== void 0
            ? r
            : s.legend.gradientOpacity;
        const l = c === undefined ? NO(a.opacity) || o.opacity : undefined;
        if (l) {
          u.opacity = Dr(l);
        }
        u = Object.assign(Object.assign({}, u), e);
        return bn(u) ? undefined : u;
      }
      function PO(e, { fieldOrDatumDef: n, model: t, channel: i, legendCmpt: r }) {
        const s = t.legend(i) || {};
        const o = t.config;
        const a = Lc(n) ? LO(t, r, n) : undefined;
        const u = a
          ? [{ test: a, value: 1 }, { value: o.legend.unselectedOpacity }]
          : undefined;
        const { format: c, formatType: l } = s;
        const f = rc(l)
          ? cc({
              fieldOrDatumDef: n,
              field: 'datum.value',
              format: c,
              formatType: l,
              config: o,
            })
          : undefined;
        const d = Object.assign(
          Object.assign(
            Object.assign({}, u ? { opacity: u } : {}),
            f ? { text: f } : {}
          ),
          e
        );
        return bn(d) ? undefined : d;
      }
      function zO(e, { legendCmpt: n }) {
        const t = n.get('selections');
        return (t === null || t === void 0 ? void 0 : t.length)
          ? Object.assign(Object.assign({}, e), { fill: { value: 'transparent' } })
          : e;
      }
      function NO(e) {
        return TO(e, (e, n) => Math.max(e, n.value));
      }
      function MO(e) {
        return TO(e, (e, n) => _n(e, n.value));
      }
      function TO(e, n) {
        if (Tc(e)) {
          return J(e.condition).reduce(n, e.value);
        } else if (Vc(e)) {
          return e.value;
        }
        return undefined;
      }
      function LO(e, n, t) {
        const i = n.get('selections');
        if (!(i === null || i === void 0 ? void 0 : i.length)) return undefined;
        const r = Be(t.field);
        return i
          .map((e) => {
            const n = Be(wn(e) + xh);
            return `(!length(data(${n})) || (${e}[${r}] && indexof(${e}[${r}], datum.value) >= 0))`;
          })
          .join(' || ');
      }
      const RO = {
        direction: ({ direction: e }) => e,
        format: ({ fieldOrDatumDef: e, legend: n, config: t }) => {
          const { format: i, formatType: r } = n;
          return lc(e, e.type, i, r, t, false);
        },
        formatType: ({ legend: e, fieldOrDatumDef: n, scaleType: t }) => {
          const { formatType: i } = e;
          return fc(i, n, t);
        },
        gradientLength: (e) => {
          var n, t;
          const { legend: i, legendConfig: r } = e;
          return (t =
            (n = i.gradientLength) !== null && n !== void 0 ? n : r.gradientLength) !==
            null && t !== void 0
            ? t
            : YO(e);
        },
        labelOverlap: ({ legend: e, legendConfig: n, scaleType: t }) => {
          var i, r;
          return (r =
            (i = e.labelOverlap) !== null && i !== void 0 ? i : n.labelOverlap) !==
            null && r !== void 0
            ? r
            : XO(t);
        },
        symbolType: ({ legend: e, markDef: n, channel: t, encoding: i }) => {
          var r;
          return (r = e.symbolType) !== null && r !== void 0
            ? r
            : UO(n.type, t, i.shape, n.shape);
        },
        title: ({ fieldOrDatumDef: e, config: n }) =>
          ll(e, n, { allowDisabling: true }),
        type: ({ legendType: e, scaleType: n, channel: t }) => {
          if (Et(t) && Ia(n)) {
            if (e === 'gradient') {
              return undefined;
            }
          } else if (e === 'symbol') {
            return undefined;
          }
          return e;
        },
        values: ({ fieldOrDatumDef: e, legend: n }) => qO(n, e),
      };
      function qO(e, n) {
        const t = e.values;
        if (F(t)) {
          return $l(n, t);
        } else if (fr(t)) {
          return t;
        }
        return undefined;
      }
      function UO(e, n, t, i) {
        var r;
        if (n !== 'shape') {
          const e = (r = MO(t)) !== null && r !== void 0 ? r : i;
          if (e) {
            return e;
          }
        }
        switch (e) {
          case 'bar':
          case 'rect':
          case 'image':
          case 'square':
            return 'square';
          case 'line':
          case 'trail':
          case 'rule':
            return 'stroke';
          case 'arc':
          case 'point':
          case 'circle':
          case 'tick':
          case 'geoshape':
          case 'area':
          case 'text':
            return 'circle';
        }
      }
      function WO(e) {
        if (e === 'gradient') {
          return 20;
        }
        return undefined;
      }
      function IO(e) {
        const { legend: n } = e;
        return _n(n.type, HO(e));
      }
      function HO({ channel: e, timeUnit: n, scaleType: t }) {
        if (Et(e)) {
          if (on(['quarter', 'month', 'day'], n)) {
            return 'symbol';
          }
          if (Ia(t)) {
            return 'gradient';
          }
        }
        return 'symbol';
      }
      function GO({ legendConfig: e, legendType: n, orient: t, legend: i }) {
        var r, s;
        return (s =
          (r = i.direction) !== null && r !== void 0
            ? r
            : e[n ? 'gradientDirection' : 'symbolDirection']) !== null && s !== void 0
          ? s
          : VO(t, n);
      }
      function VO(e, n) {
        switch (e) {
          case 'top':
          case 'bottom':
            return 'horizontal';
          case 'left':
          case 'right':
          case 'none':
          case undefined:
            return undefined;
          default:
            return n === 'gradient' ? 'horizontal' : undefined;
        }
      }
      function YO({
        legendConfig: e,
        model: n,
        direction: t,
        orient: i,
        scaleType: r,
      }) {
        const {
          gradientHorizontalMaxLength: s,
          gradientHorizontalMinLength: o,
          gradientVerticalMaxLength: a,
          gradientVerticalMinLength: u,
        } = e;
        if (Ia(r)) {
          if (t === 'horizontal') {
            if (i === 'top' || i === 'bottom') {
              return QO(n, 'width', o, s);
            } else {
              return o;
            }
          } else {
            return QO(n, 'height', u, a);
          }
        }
        return undefined;
      }
      function QO(e, n, t, i) {
        const r = e.getSizeSignalRef(n).signal;
        return { signal: `clamp(${r}, ${t}, ${i})` };
      }
      function XO(e) {
        if (on(['quantile', 'threshold', 'log', 'symlog'], e)) {
          return 'greedy';
        }
        return undefined;
      }
      function JO(e) {
        const n = jA(e) ? KO(e) : tw(e);
        e.component.legends = n;
        return n;
      }
      function KO(e) {
        const { encoding: n } = e;
        const t = {};
        for (const i of [it, ...Wf]) {
          const r = hl(n[i]);
          if (!r || !e.getScaleComponent(i)) {
            continue;
          }
          if (i === ot && Lc(r) && r.type === xa) {
            continue;
          }
          t[i] = nw(e, i);
        }
        return t;
      }
      function ZO(e, n) {
        const t = e.scaleName(n);
        if (e.mark === 'trail') {
          if (n === 'color') {
            return { stroke: t };
          } else if (n === 'size') {
            return { strokeWidth: t };
          }
        }
        if (n === 'color') {
          return e.markDef.filled ? { fill: t } : { stroke: t };
        }
        return { [n]: t };
      }
      function ew(e, n, t, i) {
        switch (n) {
          case 'disable':
            return t !== undefined;
          case 'values':
            return !!(t === null || t === void 0 ? void 0 : t.values);
          case 'title':
            if (
              n === 'title' &&
              e === (i === null || i === void 0 ? void 0 : i.title)
            ) {
              return true;
            }
        }
        return e === (t || {})[n];
      }
      function nw(e, n) {
        var t, i, r;
        let s = e.legend(n);
        const { markDef: o, encoding: a, config: u } = e;
        const c = u.legend;
        const l = new EO({}, ZO(e, n));
        ch(e, n, l);
        const f = s !== undefined ? !s : c.disable;
        l.set('disable', f, s !== undefined);
        if (f) {
          return l;
        }
        s = s || {};
        const d = e.getScaleComponent(n).get('type');
        const p = hl(a[n]);
        const g = Lc(p)
          ? (t = Xo(p.timeUnit)) === null || t === void 0
            ? void 0
            : t.unit
          : undefined;
        const m = s.orient || u.legend.orient || 'right';
        const h = IO({ legend: s, channel: n, timeUnit: g, scaleType: d });
        const b = GO({ legend: s, legendType: h, orient: m, legendConfig: c });
        const y = {
          legend: s,
          channel: n,
          model: e,
          markDef: o,
          encoding: a,
          fieldOrDatumDef: p,
          legendConfig: c,
          config: u,
          scaleType: d,
          orient: m,
          legendType: h,
          direction: b,
        };
        for (const j of CO) {
          if (
            (h === 'gradient' && j.startsWith('symbol')) ||
            (h === 'symbol' && j.startsWith('gradient'))
          ) {
            continue;
          }
          const t = j in RO ? RO[j](y) : s[j];
          if (t !== undefined) {
            const i = ew(t, j, s, e.fieldDef(n));
            if (i || u.legend[j] === undefined) {
              l.set(j, t, i);
            }
          }
        }
        const v =
          (i = s === null || s === void 0 ? void 0 : s.encoding) !== null &&
          i !== void 0
            ? i
            : {};
        const x = l.get('selections');
        const O = {};
        const w = {
          fieldOrDatumDef: p,
          model: e,
          channel: n,
          legendCmpt: l,
          legendType: h,
        };
        for (const j of [
          'labels',
          'legend',
          'title',
          'symbols',
          'gradient',
          'entries',
        ]) {
          const n = DO((r = v[j]) !== null && r !== void 0 ? r : {}, e);
          const t = j in SO ? SO[j](n, w) : n;
          if (t !== undefined && !bn(t)) {
            O[j] = Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  (x === null || x === void 0 ? void 0 : x.length) && Lc(p)
                    ? { name: `${wn(p.field)}_legend_${j}` }
                    : {}
                ),
                (x === null || x === void 0 ? void 0 : x.length)
                  ? { interactive: !!x }
                  : {}
              ),
              { update: t }
            );
          }
        }
        if (!bn(O)) {
          l.set('encode', O, !!(s === null || s === void 0 ? void 0 : s.encoding));
        }
        return l;
      }
      function tw(e) {
        const { legends: n, resolve: t } = e.component;
        for (const i of e.children) {
          JO(i);
          for (const r of yn(i.component.legends)) {
            t.legend[r] = $O(e.component.resolve, r);
            if (t.legend[r] === 'shared') {
              n[r] = iw(n[r], i.component.legends[r]);
              if (!n[r]) {
                t.legend[r] = 'independent';
                delete n[r];
              }
            }
          }
        }
        for (const i of yn(n)) {
          for (const n of e.children) {
            if (!n.component.legends[i]) {
              continue;
            }
            if (t.legend[i] === 'shared') {
              delete n.component.legends[i];
            }
          }
        }
        return n;
      }
      function iw(e, n) {
        var t, i, r, s;
        if (!e) {
          return n.clone();
        }
        const o = e.getWithExplicit('orient');
        const a = n.getWithExplicit('orient');
        if (o.explicit && a.explicit && o.value !== a.value) {
          return undefined;
        }
        let u = false;
        for (const c of CO) {
          const t = rg(
            e.getWithExplicit(c),
            n.getWithExplicit(c),
            c,
            'legend',
            (e, n) => {
              switch (c) {
                case 'symbolType':
                  return rw(e, n);
                case 'title':
                  return Mr(e, n);
                case 'type':
                  u = true;
                  return ng('symbol');
              }
              return ig(e, n, c, 'legend');
            }
          );
          e.setWithExplicit(c, t);
        }
        if (u) {
          if (
            (i = (t = e.implicit) === null || t === void 0 ? void 0 : t.encode) ===
              null || i === void 0
              ? void 0
              : i.gradient
          ) {
            An(e.implicit, ['encode', 'gradient']);
          }
          if (
            (s = (r = e.explicit) === null || r === void 0 ? void 0 : r.encode) ===
              null || s === void 0
              ? void 0
              : s.gradient
          ) {
            An(e.explicit, ['encode', 'gradient']);
          }
        }
        return e;
      }
      function rw(e, n) {
        if (n.value === 'circle') {
          return n;
        }
        return e;
      }
      var sw =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function ow(e, n, t, i) {
        var r, s, o;
        var a, u;
        (r = e.encode) !== null && r !== void 0 ? r : (e.encode = {});
        (s = (a = e.encode)[n]) !== null && s !== void 0 ? s : (a[n] = {});
        (o = (u = e.encode[n]).update) !== null && o !== void 0 ? o : (u.update = {});
        e.encode[n].update[t] = i;
      }
      function aw(e) {
        const n = e.component.legends;
        const t = {};
        for (const r of yn(n)) {
          const i = e.getScaleComponent(r);
          const s = tn(i.get('domains'));
          if (t[s]) {
            for (const e of t[s]) {
              const i = iw(e, n[r]);
              if (!i) {
                t[s].push(n[r]);
              }
            }
          } else {
            t[s] = [n[r].clone()];
          }
        }
        const i = vn(t)
          .flat()
          .map((n) => uw(n, e.config))
          .filter((e) => e !== undefined);
        return i;
      }
      function uw(e, n) {
        var t, i, r;
        const s = e.combine(),
          { disable: o, labelExpr: a, selections: u } = s,
          c = sw(s, ['disable', 'labelExpr', 'selections']);
        if (o) {
          return undefined;
        }
        if (n.aria === false && c.aria == undefined) {
          c.aria = false;
        }
        if ((t = c.encode) === null || t === void 0 ? void 0 : t.symbols) {
          const e = c.encode.symbols.update;
          if (e.fill && e.fill['value'] !== 'transparent' && !e.stroke && !c.stroke) {
            e.stroke = { value: 'transparent' };
          }
          for (const n of Wf) {
            if (c[n]) {
              delete e[n];
            }
          }
        }
        if (!c.title) {
          delete c.title;
        }
        if (a !== undefined) {
          let e = a;
          if (
            ((r = (i = c.encode) === null || i === void 0 ? void 0 : i.labels) ===
              null || r === void 0
              ? void 0
              : r.update) &&
            fr(c.encode.labels.update.text)
          ) {
            e = En(a, 'datum.label', c.encode.labels.update.text.signal);
          }
          ow(c, 'labels', 'text', { signal: e });
        }
        return c;
      }
      function cw(e) {
        if (FA(e) || DA(e)) {
          return lw(e);
        } else {
          return fw(e);
        }
      }
      function lw(e) {
        return e.children.reduce((e, n) => e.concat(n.assembleProjections()), fw(e));
      }
      function fw(e) {
        const n = e.component.projection;
        if (!n || n.merged) {
          return [];
        }
        const t = n.combine();
        const { name: i } = t;
        if (!n.data) {
          return [
            Object.assign(
              Object.assign(
                { name: i },
                { translate: { signal: '[width / 2, height / 2]' } }
              ),
              t
            ),
          ];
        } else {
          const r = { signal: `[${n.size.map((e) => e.signal).join(', ')}]` };
          const s = n.data.reduce((n, t) => {
            const i = fr(t) ? t.signal : `data('${e.lookupDataSource(t)}')`;
            if (!on(n, i)) {
              n.push(i);
            }
            return n;
          }, []);
          if (s.length <= 0) {
            throw new Error("Projection's fit didn't find any data sources");
          }
          return [
            Object.assign(
              {
                name: i,
                size: r,
                fit: { signal: s.length > 1 ? `[${s.join(', ')}]` : s[0] },
              },
              t
            ),
          ];
        }
      }
      const dw = [
        'type',
        'clipAngle',
        'clipExtent',
        'center',
        'rotate',
        'precision',
        'reflectX',
        'reflectY',
        'coefficient',
        'distance',
        'fraction',
        'lobes',
        'parallel',
        'radius',
        'ratio',
        'spacing',
        'tilt',
      ];
      class pw extends Zp {
        constructor(e, n, t, i) {
          super(Object.assign({}, n), { name: e });
          this.specifiedProjection = n;
          this.size = t;
          this.data = i;
          this.merged = false;
        }
        get isFit() {
          return !!this.data;
        }
      }
      function gw(e) {
        e.component.projection = jA(e) ? mw(e) : yw(e);
      }
      function mw(e) {
        var n;
        if (e.hasProjection) {
          const t = ar(e.specifiedProjection);
          const i = !(t && (t.scale != null || t.translate != null));
          const r = i
            ? [e.getSizeSignalRef('width'), e.getSizeSignalRef('height')]
            : undefined;
          const s = i ? hw(e) : undefined;
          const o = new pw(
            e.projectionName(true),
            Object.assign(
              Object.assign(
                {},
                (n = ar(e.config.projection)) !== null && n !== void 0 ? n : {}
              ),
              t !== null && t !== void 0 ? t : {}
            ),
            r,
            s
          );
          if (!o.get('type')) {
            o.set('type', 'equalEarth', false);
          }
          return o;
        }
        return undefined;
      }
      function hw(e) {
        const n = [];
        const { encoding: t } = e;
        for (const i of [
          [et, Zn],
          [tt, nt],
        ]) {
          if (hl(t[i[0]]) || hl(t[i[1]])) {
            n.push({ signal: e.getName(`geojson_${n.length}`) });
          }
        }
        if (e.channelHasField(ot) && e.typedFieldDef(ot).type === xa) {
          n.push({ signal: e.getName(`geojson_${n.length}`) });
        }
        if (n.length === 0) {
          n.push(e.requestDataName(pg.Main));
        }
        return n;
      }
      function bw(e, n) {
        const t = un(dw, (t) => {
          if (!de(e.explicit, t) && !de(n.explicit, t)) {
            return true;
          }
          if (de(e.explicit, t) && de(n.explicit, t) && Ke(e.get(t), n.get(t))) {
            return true;
          }
          return false;
        });
        const i = Ke(e.size, n.size);
        if (i) {
          if (t) {
            return e;
          } else if (Ke(e.explicit, {})) {
            return n;
          } else if (Ke(n.explicit, {})) {
            return e;
          }
        }
        return null;
      }
      function yw(e) {
        if (e.children.length === 0) {
          return undefined;
        }
        let n;
        for (const i of e.children) {
          gw(i);
        }
        const t = un(e.children, (e) => {
          const t = e.component.projection;
          if (!t) {
            return true;
          } else if (!n) {
            n = t;
            return true;
          } else {
            const e = bw(n, t);
            if (e) {
              n = e;
            }
            return !!e;
          }
        });
        if (n && t) {
          const t = e.projectionName(true);
          const i = new pw(t, n.specifiedProjection, n.size, Ze(n.data));
          for (const n of e.children) {
            const e = n.component.projection;
            if (e) {
              if (e.isFit) {
                i.data.push(...n.component.projection.data);
              }
              n.renameProjection(e.get('name'), t);
              e.merged = true;
            }
          }
          return i;
        }
        return undefined;
      }
      var vw =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function xw(e, n, t, i) {
        var r, s;
        if (kl(n, t)) {
          const o = jA(e)
            ? (s = (r = e.axis(t)) !== null && r !== void 0 ? r : e.legend(t)) !==
                null && s !== void 0
              ? s
              : {}
            : {};
          const a = el(n, { expr: 'datum' });
          const u = el(n, { expr: 'datum', binSuffix: 'end' });
          return {
            formulaAs: el(n, { binSuffix: 'range', forAs: true }),
            formula: hc(a, u, o.format, o.formatType, i),
          };
        }
        return {};
      }
      function Ow(e, n) {
        return `${er(e)}_${n}`;
      }
      function ww(e, n) {
        return {
          signal: e.getName(`${n}_bins`),
          extentSignal: e.getName(`${n}_extent`),
        };
      }
      function jw(e, n, t) {
        var i;
        const r = (i = Ol(t, undefined)) !== null && i !== void 0 ? i : {};
        const s = Ow(r, n);
        return e.getName(`${s}_bins`);
      }
      function Aw(e) {
        return 'as' in e;
      }
      function Dw(e, n, t) {
        let i;
        let r;
        if (Aw(e)) {
          i = je(e.as) ? [e.as, `${e.as}_end`] : [e.as[0], e.as[1]];
        } else {
          i = [el(e, { forAs: true }), el(e, { binSuffix: 'end', forAs: true })];
        }
        const s = Object.assign({}, Ol(n, undefined));
        const o = Ow(s, e.field);
        const { signal: a, extentSignal: u } = ww(t, o);
        if (rr(s.extent)) {
          const e = s.extent;
          r = Cx(t, e.param, e);
          delete s.extent;
        }
        const c = Object.assign(
          Object.assign(
            Object.assign({ bin: s, field: e.field, as: [i] }, a ? { signal: a } : {}),
            u ? { extentSignal: u } : {}
          ),
          r ? { span: r } : {}
        );
        return { key: o, binComponent: c };
      }
      class Fw extends Hg {
        constructor(e, n) {
          super(e);
          this.bins = n;
        }
        clone() {
          return new Fw(null, Ze(this.bins));
        }
        static makeFromEncoding(e, n) {
          const t = n.reduceFieldDef((e, t, i) => {
            if (Gc(t) && nr(t.bin)) {
              const { key: r, binComponent: s } = Dw(t, t.bin, n);
              e[r] = Object.assign(
                Object.assign(Object.assign({}, s), e[r]),
                xw(n, t, i, n.config)
              );
            }
            return e;
          }, {});
          if (bn(t)) {
            return null;
          }
          return new Fw(e, t);
        }
        static makeFromTransform(e, n, t) {
          const { key: i, binComponent: r } = Dw(n, n.bin, t);
          return new Fw(e, { [i]: r });
        }
        merge(e, n) {
          for (const t of yn(e.bins)) {
            if (t in this.bins) {
              n(e.bins[t].signal, this.bins[t].signal);
              this.bins[t].as = fn([...this.bins[t].as, ...e.bins[t].as], rn);
            } else {
              this.bins[t] = e.bins[t];
            }
          }
          for (const t of e.children) {
            e.removeChild(t);
            t.parent = this;
          }
          e.remove();
        }
        producedFields() {
          return new Set(
            vn(this.bins)
              .map((e) => e.as)
              .flat(2)
          );
        }
        dependentFields() {
          return new Set(vn(this.bins).map((e) => e.field));
        }
        hash() {
          return `Bin ${rn(this.bins)}`;
        }
        assemble() {
          return vn(this.bins).flatMap((e) => {
            const n = [];
            const [t, ...i] = e.as;
            const r = e.bin,
              { extent: s } = r,
              o = vw(r, ['extent']);
            const a = Object.assign(
              Object.assign(
                Object.assign(
                  { type: 'bin', field: Cn(e.field), as: t, signal: e.signal },
                  !rr(s) ? { extent: s } : { extent: null }
                ),
                e.span ? { span: { signal: `span(${e.span})` } } : {}
              ),
              o
            );
            if (!s && e.extentSignal) {
              n.push({ type: 'extent', field: Cn(e.field), signal: e.extentSignal });
              a.extent = { signal: e.extentSignal };
            }
            n.push(a);
            for (const u of i) {
              for (let e = 0; e < 2; e++) {
                n.push({
                  type: 'formula',
                  expr: el({ field: t[e] }, { expr: 'datum' }),
                  as: u[e],
                });
              }
            }
            if (e.formula) {
              n.push({ type: 'formula', expr: e.formula, as: e.formulaAs });
            }
            return n;
          });
        }
      }
      function $w(e, n, t, i) {
        var r;
        const s = jA(i) ? i.encoding[Jt(n)] : undefined;
        if (Gc(t) && jA(i) && Pc(t, s, i.markDef, i.config)) {
          e.add(el(t, {}));
          e.add(el(t, { suffix: 'end' }));
          if (t.bin && kl(t, n)) {
            e.add(el(t, { binSuffix: 'range' }));
          }
        } else if ($t(n)) {
          const t = Ft(n);
          e.add(i.getName(t));
        } else {
          e.add(el(t));
        }
        if (Yc(t) && Xa((r = t.scale) === null || r === void 0 ? void 0 : r.range)) {
          e.add(t.scale.range.field);
        }
        return e;
      }
      function kw(e, n) {
        var t;
        for (const i of yn(n)) {
          const r = n[i];
          for (const n of yn(r)) {
            if (i in e) {
              e[i][n] = new Set([
                ...((t = e[i][n]) !== null && t !== void 0 ? t : []),
                ...r[n],
              ]);
            } else {
              e[i] = { [n]: r[n] };
            }
          }
        }
      }
      class Cw extends Hg {
        constructor(e, n, t) {
          super(e);
          this.dimensions = n;
          this.measures = t;
        }
        clone() {
          return new Cw(null, new Set(this.dimensions), Ze(this.measures));
        }
        get groupBy() {
          return this.dimensions;
        }
        static makeFromEncoding(e, n) {
          let t = false;
          n.forEachFieldDef((e) => {
            if (e.aggregate) {
              t = true;
            }
          });
          const i = {};
          const r = new Set();
          if (!t) {
            return null;
          }
          n.forEachFieldDef((e, t) => {
            var s, o, a, u;
            const { aggregate: c, field: l } = e;
            if (c) {
              if (c === 'count') {
                (s = i['*']) !== null && s !== void 0 ? s : (i['*'] = {});
                i['*']['count'] = new Set([el(e, { forAs: true })]);
              } else {
                if (Ii(c) || Hi(c)) {
                  const e = Ii(c) ? 'argmin' : 'argmax';
                  const n = c[e];
                  (o = i[n]) !== null && o !== void 0 ? o : (i[n] = {});
                  i[n][e] = new Set([el({ op: e, field: n }, { forAs: true })]);
                } else {
                  (a = i[l]) !== null && a !== void 0 ? a : (i[l] = {});
                  i[l][c] = new Set([el(e, { forAs: true })]);
                }
                if (zi(t) && n.scaleDomain(t) === 'unaggregated') {
                  (u = i[l]) !== null && u !== void 0 ? u : (i[l] = {});
                  i[l]['min'] = new Set([
                    el({ field: l, aggregate: 'min' }, { forAs: true }),
                  ]);
                  i[l]['max'] = new Set([
                    el({ field: l, aggregate: 'max' }, { forAs: true }),
                  ]);
                }
              }
            } else {
              $w(r, t, e, n);
            }
          });
          if (r.size + yn(i).length === 0) {
            return null;
          }
          return new Cw(e, r, i);
        }
        static makeFromTransform(e, n) {
          var t, i, r;
          const s = new Set();
          const o = {};
          for (const a of n.aggregate) {
            const { op: e, field: n, as: r } = a;
            if (e) {
              if (e === 'count') {
                (t = o['*']) !== null && t !== void 0 ? t : (o['*'] = {});
                o['*']['count'] = new Set([r ? r : el(a, { forAs: true })]);
              } else {
                (i = o[n]) !== null && i !== void 0 ? i : (o[n] = {});
                o[n][e] = new Set([r ? r : el(a, { forAs: true })]);
              }
            }
          }
          for (const a of (r = n.groupby) !== null && r !== void 0 ? r : []) {
            s.add(a);
          }
          if (s.size + yn(o).length === 0) {
            return null;
          }
          return new Cw(e, s, o);
        }
        merge(e) {
          if (pn(this.dimensions, e.dimensions)) {
            kw(this.measures, e.measures);
            return true;
          } else {
            wo('different dimensions, cannot merge');
            return false;
          }
        }
        addDimensions(e) {
          e.forEach(this.dimensions.add, this.dimensions);
        }
        dependentFields() {
          return new Set([...this.dimensions, ...yn(this.measures)]);
        }
        producedFields() {
          const e = new Set();
          for (const n of yn(this.measures)) {
            for (const t of yn(this.measures[n])) {
              const i = this.measures[n][t];
              if (i.size === 0) {
                e.add(`${t}_${n}`);
              } else {
                i.forEach(e.add, e);
              }
            }
          }
          return e;
        }
        hash() {
          return `Aggregate ${rn({
            dimensions: this.dimensions,
            measures: this.measures,
          })}`;
        }
        assemble() {
          const e = [];
          const n = [];
          const t = [];
          for (const r of yn(this.measures)) {
            for (const i of yn(this.measures[r])) {
              for (const s of this.measures[r][i]) {
                t.push(s);
                e.push(i);
                n.push(r === '*' ? null : Cn(r));
              }
            }
          }
          const i = {
            type: 'aggregate',
            groupby: [...this.dimensions].map(Cn),
            ops: e,
            fields: n,
            as: t,
          };
          return i;
        }
      }
      class Ew extends Hg {
        constructor(e, n, t, i) {
          super(e);
          this.model = n;
          this.name = t;
          this.data = i;
          for (const r of Bt) {
            const e = n.facet[r];
            if (e) {
              const { bin: t, sort: i } = e;
              this[r] = Object.assign(
                {
                  name: n.getName(`${r}_domain`),
                  fields: [el(e), ...(nr(t) ? [el(e, { binSuffix: 'end' })] : [])],
                },
                wc(i) ? { sortField: i } : F(i) ? { sortIndexField: iO(e, r) } : {}
              );
            }
          }
          this.childModel = n.child;
        }
        hash() {
          let e = `Facet`;
          for (const n of Bt) {
            if (this[n]) {
              e += ` ${n.charAt(0)}:${rn(this[n])}`;
            }
          }
          return e;
        }
        get fields() {
          var e;
          const n = [];
          for (const t of Bt) {
            if ((e = this[t]) === null || e === void 0 ? void 0 : e.fields) {
              n.push(...this[t].fields);
            }
          }
          return n;
        }
        dependentFields() {
          const e = new Set(this.fields);
          for (const n of Bt) {
            if (this[n]) {
              if (this[n].sortField) {
                e.add(this[n].sortField.field);
              }
              if (this[n].sortIndexField) {
                e.add(this[n].sortIndexField);
              }
            }
          }
          return e;
        }
        producedFields() {
          return new Set();
        }
        getSource() {
          return this.name;
        }
        getChildIndependentFieldsWithStep() {
          const e = {};
          for (const n of hi) {
            const t = this.childModel.component.scales[n];
            if (t && !t.merged) {
              const i = t.get('type');
              const r = t.get('range');
              if (Ua(i) && dr(r)) {
                const t = Nj(this.childModel, n);
                const i = zj(t);
                if (i) {
                  e[n] = i;
                } else {
                  xo(Wr(n));
                }
              }
            }
          }
          return e;
        }
        assembleRowColumnHeaderData(e, n, t) {
          const i = { row: 'y', column: 'x', facet: undefined }[e];
          const r = [];
          const s = [];
          const o = [];
          if (i && t && t[i]) {
            if (n) {
              r.push(`distinct_${t[i]}`);
              s.push('max');
            } else {
              r.push(t[i]);
              s.push('distinct');
            }
            o.push(`distinct_${t[i]}`);
          }
          const { sortField: a, sortIndexField: u } = this[e];
          if (a) {
            const { op: e = yc, field: n } = a;
            r.push(n);
            s.push(e);
            o.push(el(a, { forAs: true }));
          } else if (u) {
            r.push(u);
            s.push('max');
            o.push(u);
          }
          return {
            name: this[e].name,
            source: n !== null && n !== void 0 ? n : this.data,
            transform: [
              Object.assign(
                { type: 'aggregate', groupby: this[e].fields },
                r.length ? { fields: r, ops: s, as: o } : {}
              ),
            ],
          };
        }
        assembleFacetHeaderData(e) {
          var n, t;
          const { columns: i } = this.model.layout;
          const { layoutHeaders: r } = this.model.component;
          const s = [];
          const o = {};
          for (const c of aO) {
            for (const e of uO) {
              const i = (n = r[c] && r[c][e]) !== null && n !== void 0 ? n : [];
              for (const e of i) {
                if (((t = e.axes) === null || t === void 0 ? void 0 : t.length) > 0) {
                  o[c] = true;
                  break;
                }
              }
            }
            if (o[c]) {
              const e = `length(data("${this.facet.name}"))`;
              const n =
                c === 'row'
                  ? i
                    ? { signal: `ceil(${e} / ${i})` }
                    : 1
                  : i
                  ? { signal: `min(${e}, ${i})` }
                  : { signal: e };
              s.push({
                name: `${this.facet.name}_${c}`,
                transform: [{ type: 'sequence', start: 0, stop: n }],
              });
            }
          }
          const { row: a, column: u } = o;
          if (a || u) {
            s.unshift(this.assembleRowColumnHeaderData('facet', null, e));
          }
          return s;
        }
        assemble() {
          var e, n;
          const t = [];
          let i = null;
          const r = this.getChildIndependentFieldsWithStep();
          const { column: s, row: o, facet: a } = this;
          if (s && o && (r.x || r.y)) {
            i = `cross_${this.column.name}_${this.row.name}`;
            const s = [].concat(
              (e = r.x) !== null && e !== void 0 ? e : [],
              (n = r.y) !== null && n !== void 0 ? n : []
            );
            const o = s.map(() => 'distinct');
            t.push({
              name: i,
              source: this.data,
              transform: [
                { type: 'aggregate', groupby: this.fields, fields: s, ops: o },
              ],
            });
          }
          for (const u of [Wn, Un]) {
            if (this[u]) {
              t.push(this.assembleRowColumnHeaderData(u, i, r));
            }
          }
          if (a) {
            const e = this.assembleFacetHeaderData(r);
            if (e) {
              t.push(...e);
            }
          }
          return t;
        }
      }
      function Sw(e) {
        if (
          (e[0] === "'" && e[e.length - 1] === "'") ||
          (e[0] === '"' && e[e.length - 1] === '"')
        ) {
          return e.slice(1, -1);
        }
        return e;
      }
      function Bw(e, n) {
        const t = Fn(e);
        if (n === 'number') {
          return `toNumber(${t})`;
        } else if (n === 'boolean') {
          return `toBoolean(${t})`;
        } else if (n === 'string') {
          return `toString(${t})`;
        } else if (n === 'date') {
          return `toDate(${t})`;
        } else if (n === 'flatten') {
          return t;
        } else if (n.startsWith('date:')) {
          const e = Sw(n.slice(5, n.length));
          return `timeParse(${t},'${e}')`;
        } else if (n.startsWith('utc:')) {
          const e = Sw(n.slice(4, n.length));
          return `utcParse(${t},'${e}')`;
        } else {
          xo(rs(n));
          return null;
        }
      }
      function _w(e) {
        const n = {};
        Xe(e.filter, (e) => {
          var t;
          if (aa(e)) {
            let i = null;
            if (Zo(e)) {
              i = jr(e.equal);
            } else if (na(e)) {
              i = jr(e.lte);
            } else if (ea(e)) {
              i = jr(e.lt);
            } else if (ta(e)) {
              i = jr(e.gt);
            } else if (ia(e)) {
              i = jr(e.gte);
            } else if (ra(e)) {
              i = e.range[0];
            } else if (sa(e)) {
              i = ((t = e.oneOf) !== null && t !== void 0 ? t : e['in'])[0];
            }
            if (i) {
              if (jo(i)) {
                n[e.field] = 'date';
              } else if (Oe(i)) {
                n[e.field] = 'number';
              } else if (je(i)) {
                n[e.field] = 'string';
              }
            }
            if (e.timeUnit) {
              n[e.field] = 'date';
            }
          }
        });
        return n;
      }
      function Pw(e) {
        const n = {};
        function t(e) {
          if (Al(e)) {
            n[e.field] = 'date';
          } else if (e.type === 'quantitative' && Xi(e.aggregate)) {
            n[e.field] = 'number';
          } else if (Bn(e.field) > 1) {
            if (!(e.field in n)) {
              n[e.field] = 'flatten';
            }
          } else if (Yc(e) && wc(e.sort) && Bn(e.sort.field) > 1) {
            if (!(e.sort.field in n)) {
              n[e.sort.field] = 'flatten';
            }
          }
        }
        if (jA(e) || AA(e)) {
          e.forEachFieldDef((n, i) => {
            if (Gc(n)) {
              t(n);
            } else {
              const r = Qt(i);
              const s = e.fieldDef(r);
              t(Object.assign(Object.assign({}, n), { type: s.type }));
            }
          });
        }
        if (jA(e)) {
          const { mark: t, markDef: i, encoding: r } = e;
          if ($u(t) && !e.encoding.order) {
            const e = i.orient === 'horizontal' ? 'y' : 'x';
            const t = r[e];
            if (Lc(t) && t.type === 'quantitative' && !(t.field in n)) {
              n[t.field] = 'number';
            }
          }
        }
        return n;
      }
      function zw(e) {
        const n = {};
        if (jA(e) && e.component.selection) {
          for (const t of yn(e.component.selection)) {
            const i = e.component.selection[t];
            for (const e of i.project.items) {
              if (!e.channel && Bn(e.field) > 1) {
                n[e.field] = 'flatten';
              }
            }
          }
        }
        return n;
      }
      class Nw extends Hg {
        constructor(e, n) {
          super(e);
          this._parse = n;
        }
        clone() {
          return new Nw(null, Ze(this._parse));
        }
        hash() {
          return `Parse ${rn(this._parse)}`;
        }
        static makeExplicit(e, n, t) {
          var i;
          let r = {};
          const s = n.data;
          if (
            !cg(s) &&
            ((i = s === null || s === void 0 ? void 0 : s.format) === null ||
            i === void 0
              ? void 0
              : i.parse)
          ) {
            r = s.format.parse;
          }
          return this.makeWithAncestors(e, r, {}, t);
        }
        static makeWithAncestors(e, n, t, i) {
          for (const o of yn(t)) {
            const e = i.getWithExplicit(o);
            if (e.value !== undefined) {
              if (
                e.explicit ||
                e.value === t[o] ||
                e.value === 'derived' ||
                t[o] === 'flatten'
              ) {
                delete t[o];
              } else {
                xo(ss(o, t[o], e.value));
              }
            }
          }
          for (const o of yn(n)) {
            const e = i.get(o);
            if (e !== undefined) {
              if (e === n[o]) {
                delete n[o];
              } else {
                xo(ss(o, n[o], e));
              }
            }
          }
          const r = new Zp(n, t);
          i.copyAll(r);
          const s = {};
          for (const o of yn(r.combine())) {
            const e = r.get(o);
            if (e !== null) {
              s[o] = e;
            }
          }
          if (yn(s).length === 0 || i.parseNothing) {
            return null;
          }
          return new Nw(e, s);
        }
        get parse() {
          return this._parse;
        }
        merge(e) {
          this._parse = Object.assign(Object.assign({}, this._parse), e.parse);
          e.remove();
        }
        assembleFormatParse() {
          const e = {};
          for (const n of yn(this._parse)) {
            const t = this._parse[n];
            if (Bn(n) === 1) {
              e[n] = t;
            }
          }
          return e;
        }
        producedFields() {
          return new Set(yn(this._parse));
        }
        dependentFields() {
          return new Set(yn(this._parse));
        }
        assembleTransforms(e = false) {
          return yn(this._parse)
            .filter((n) => (e ? Bn(n) > 1 : true))
            .map((e) => {
              const n = Bw(e, this._parse[e]);
              if (!n) {
                return null;
              }
              const t = { type: 'formula', expr: n, as: Sn(e) };
              return t;
            })
            .filter((e) => e !== null);
        }
      }
      class Mw extends Hg {
        clone() {
          return new Mw(null);
        }
        constructor(e) {
          super(e);
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return new Set([Vf]);
        }
        hash() {
          return 'Identifier';
        }
        assemble() {
          return { type: 'identifier', as: Vf };
        }
      }
      class Tw extends Hg {
        constructor(e, n) {
          super(e);
          this.params = n;
        }
        clone() {
          return new Tw(null, this.params);
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return undefined;
        }
        hash() {
          return `Graticule ${rn(this.params)}`;
        }
        assemble() {
          return Object.assign(
            { type: 'graticule' },
            this.params === true ? {} : this.params
          );
        }
      }
      class Lw extends Hg {
        constructor(e, n) {
          super(e);
          this.params = n;
        }
        clone() {
          return new Lw(null, this.params);
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          var e;
          return new Set([(e = this.params.as) !== null && e !== void 0 ? e : 'data']);
        }
        hash() {
          return `Hash ${rn(this.params)}`;
        }
        assemble() {
          return Object.assign({ type: 'sequence' }, this.params);
        }
      }
      class Rw extends Hg {
        constructor(e) {
          super(null);
          e !== null && e !== void 0 ? e : (e = { name: 'source' });
          let n;
          if (!cg(e)) {
            n = e.format ? Object.assign({}, nn(e.format, ['parse'])) : {};
          }
          if (ag(e)) {
            this._data = { values: e.values };
          } else if (og(e)) {
            this._data = { url: e.url };
            if (!n.type) {
              let t = /(?:\.([^.]+))?$/.exec(e.url)[1];
              if (!on(['json', 'csv', 'tsv', 'dsv', 'topojson'], t)) {
                t = 'json';
              }
              n.type = t;
            }
          } else if (fg(e)) {
            this._data = { values: [{ type: 'Sphere' }] };
          } else if (ug(e) || cg(e)) {
            this._data = {};
          }
          this._generator = cg(e);
          if (e.name) {
            this._name = e.name;
          }
          if (n && !bn(n)) {
            this._data.format = n;
          }
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return undefined;
        }
        get data() {
          return this._data;
        }
        hasName() {
          return !!this._name;
        }
        get isGenerator() {
          return this._generator;
        }
        get dataName() {
          return this._name;
        }
        set dataName(e) {
          this._name = e;
        }
        set parent(e) {
          throw new Error('Source nodes have to be roots.');
        }
        remove() {
          throw new Error('Source nodes are roots and cannot be removed.');
        }
        hash() {
          throw new Error('Cannot hash sources');
        }
        assemble() {
          return Object.assign(Object.assign({ name: this._name }, this._data), {
            transform: [],
          });
        }
      }
      var qw =
        (undefined && undefined.__classPrivateFieldSet) ||
        function (e, n, t, i, r) {
          if (i === 'm') throw new TypeError('Private method is not writable');
          if (i === 'a' && !r)
            throw new TypeError('Private accessor was defined without a setter');
          if (typeof n === 'function' ? e !== n || !r : !n.has(e))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return i === 'a' ? r.call(e, t) : r ? (r.value = t) : n.set(e, t), t;
        };
      var Uw =
        (undefined && undefined.__classPrivateFieldGet) ||
        function (e, n, t, i) {
          if (t === 'a' && !i)
            throw new TypeError('Private accessor was defined without a getter');
          if (typeof n === 'function' ? e !== n || !i : !n.has(e))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return t === 'm' ? i : t === 'a' ? i.call(e) : i ? i.value : n.get(e);
        };
      var Ww;
      function Iw(e) {
        return e instanceof Rw || e instanceof Tw || e instanceof Lw;
      }
      class Hw {
        constructor() {
          Ww.set(this, void 0);
          qw(this, Ww, false, 'f');
        }
        setModified() {
          qw(this, Ww, true, 'f');
        }
        get modifiedFlag() {
          return Uw(this, Ww, 'f');
        }
      }
      Ww = new WeakMap();
      class Gw extends Hw {
        getNodeDepths(e, n, t) {
          t.set(e, n);
          for (const i of e.children) {
            this.getNodeDepths(i, n + 1, t);
          }
          return t;
        }
        optimize(e) {
          const n = this.getNodeDepths(e, 0, new Map());
          const t = [...n.entries()].sort((e, n) => n[1] - e[1]);
          for (const i of t) {
            this.run(i[0]);
          }
          return this.modifiedFlag;
        }
      }
      class Vw extends Hw {
        optimize(e) {
          this.run(e);
          for (const n of e.children) {
            this.optimize(n);
          }
          return this.modifiedFlag;
        }
      }
      class Yw extends Vw {
        mergeNodes(e, n) {
          const t = n.shift();
          for (const i of n) {
            e.removeChild(i);
            i.parent = t;
            i.remove();
          }
        }
        run(e) {
          const n = e.children.map((e) => e.hash());
          const t = {};
          for (let i = 0; i < n.length; i++) {
            if (t[n[i]] === undefined) {
              t[n[i]] = [e.children[i]];
            } else {
              t[n[i]].push(e.children[i]);
            }
          }
          for (const i of yn(t)) {
            if (t[i].length > 1) {
              this.setModified();
              this.mergeNodes(e, t[i]);
            }
          }
        }
      }
      class Qw extends Vw {
        constructor(e) {
          super();
          this.requiresSelectionId = e && kh(e);
        }
        run(e) {
          if (e instanceof Mw) {
            if (
              !(
                this.requiresSelectionId &&
                (Iw(e.parent) || e.parent instanceof Cw || e.parent instanceof Nw)
              )
            ) {
              this.setModified();
              e.remove();
            }
          }
        }
      }
      class Xw extends Hw {
        optimize(e) {
          this.run(e, new Set());
          return this.modifiedFlag;
        }
        run(e, n) {
          let t = new Set();
          if (e instanceof Yg) {
            t = e.producedFields();
            if (gn(t, n)) {
              this.setModified();
              e.removeFormulas(n);
              if (e.producedFields.length === 0) {
                e.remove();
              }
            }
          }
          for (const i of e.children) {
            this.run(i, new Set([...n, ...t]));
          }
        }
      }
      class Jw extends Vw {
        constructor() {
          super();
        }
        run(e) {
          if (e instanceof Gg && !e.isRequired()) {
            this.setModified();
            e.remove();
          }
        }
      }
      class Kw extends Gw {
        run(e) {
          if (Iw(e)) {
            return;
          }
          if (e.numChildren() > 1) {
            return;
          }
          for (const n of e.children) {
            if (n instanceof Nw) {
              if (e instanceof Nw) {
                this.setModified();
                e.merge(n);
              } else {
                if (hn(e.producedFields(), n.dependentFields())) {
                  continue;
                }
                this.setModified();
                n.swapWithParent();
              }
            }
          }
          return;
        }
      }
      class Zw extends Gw {
        run(e) {
          const n = [...e.children];
          const t = e.children.filter((e) => e instanceof Nw);
          if (e.numChildren() > 1 && t.length >= 1) {
            const i = {};
            const r = new Set();
            for (const e of t) {
              const n = e.parse;
              for (const e of yn(n)) {
                if (!(e in i)) {
                  i[e] = n[e];
                } else if (i[e] !== n[e]) {
                  r.add(e);
                }
              }
            }
            for (const e of r) {
              delete i[e];
            }
            if (!bn(i)) {
              this.setModified();
              const t = new Nw(e, i);
              for (const r of n) {
                if (r instanceof Nw) {
                  for (const e of yn(i)) {
                    delete r.parse[e];
                  }
                }
                e.removeChild(r);
                r.parent = t;
                if (r instanceof Nw && yn(r.parse).length === 0) {
                  r.remove();
                }
              }
            }
          }
        }
      }
      class ej extends Gw {
        run(e) {
          if (e instanceof Gg || e.numChildren() > 0 || e instanceof Ew) {
          } else if (e instanceof Rw) {
          } else {
            this.setModified();
            e.remove();
          }
        }
      }
      class nj extends Gw {
        run(e) {
          const n = e.children.filter((e) => e instanceof Yg);
          const t = n.pop();
          for (const i of n) {
            this.setModified();
            t.merge(i);
          }
        }
      }
      class tj extends Gw {
        run(e) {
          const n = e.children.filter((e) => e instanceof Cw);
          const t = {};
          for (const i of n) {
            const e = rn(i.groupBy);
            if (!(e in t)) {
              t[e] = [];
            }
            t[e].push(i);
          }
          for (const i of yn(t)) {
            const n = t[i];
            if (n.length > 1) {
              const t = n.pop();
              for (const i of n) {
                if (t.merge(i)) {
                  e.removeChild(i);
                  i.parent = t;
                  i.remove();
                  this.setModified();
                }
              }
            }
          }
        }
      }
      class ij extends Gw {
        constructor(e) {
          super();
          this.model = e;
        }
        run(e) {
          const n = !(Iw(e) || e instanceof Fx || e instanceof Nw || e instanceof Mw);
          const t = [];
          const i = [];
          for (const r of e.children) {
            if (r instanceof Fw) {
              if (n && !hn(e.producedFields(), r.dependentFields())) {
                t.push(r);
              } else {
                i.push(r);
              }
            }
          }
          if (t.length > 0) {
            const n = t.pop();
            for (const e of t) {
              n.merge(e, this.model.renameSignal.bind(this.model));
            }
            this.setModified();
            if (e instanceof Fw) {
              e.merge(n, this.model.renameSignal.bind(this.model));
            } else {
              n.swapWithParent();
            }
          }
          if (i.length > 1) {
            const e = i.pop();
            for (const n of i) {
              e.merge(n, this.model.renameSignal.bind(this.model));
            }
            this.setModified();
          }
        }
      }
      class rj extends Gw {
        run(e) {
          const n = [...e.children];
          const t = an(n, (e) => e instanceof Gg);
          if (!t || e.numChildren() <= 1) {
            return;
          }
          const i = [];
          let r;
          for (const s of n) {
            if (s instanceof Gg) {
              let n = s;
              while (n.numChildren() === 1) {
                const [e] = n.children;
                if (e instanceof Gg) {
                  n = e;
                } else {
                  break;
                }
              }
              i.push(...n.children);
              if (r) {
                e.removeChild(s);
                s.parent = r.parent;
                r.parent.removeChild(r);
                r.parent = n;
                this.setModified();
              } else {
                r = n;
              }
            } else {
              i.push(s);
            }
          }
          if (i.length) {
            this.setModified();
            for (const e of i) {
              e.parent.removeChild(e);
              e.parent = r;
            }
          }
        }
      }
      class sj extends Hg {
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        clone() {
          return new sj(null, Ze(this.transform));
        }
        addDimensions(e) {
          this.transform.groupby = fn(this.transform.groupby.concat(e), (e) => e);
        }
        dependentFields() {
          const e = new Set();
          if (this.transform.groupby) {
            this.transform.groupby.forEach(e.add, e);
          }
          this.transform.joinaggregate
            .map((e) => e.field)
            .filter((e) => e !== undefined)
            .forEach(e.add, e);
          return e;
        }
        producedFields() {
          return new Set(this.transform.joinaggregate.map(this.getDefaultName));
        }
        getDefaultName(e) {
          var n;
          return (n = e.as) !== null && n !== void 0 ? n : el(e);
        }
        hash() {
          return `JoinAggregateTransform ${rn(this.transform)}`;
        }
        assemble() {
          const e = [];
          const n = [];
          const t = [];
          for (const r of this.transform.joinaggregate) {
            n.push(r.op);
            t.push(this.getDefaultName(r));
            e.push(r.field === undefined ? null : r.field);
          }
          const i = this.transform.groupby;
          return Object.assign(
            { type: 'joinaggregate', as: t, ops: n, fields: e },
            i !== undefined ? { groupby: i } : {}
          );
        }
      }
      function oj(e) {
        return e.stack.stackBy.reduce((e, n) => {
          const t = n.fieldDef;
          const i = el(t);
          if (i) {
            e.push(i);
          }
          return e;
        }, []);
      }
      function aj(e) {
        return F(e) && e.every((e) => je(e)) && e.length > 1;
      }
      class uj extends Hg {
        constructor(e, n) {
          super(e);
          this._stack = n;
        }
        clone() {
          return new uj(null, Ze(this._stack));
        }
        static makeFromTransform(e, n) {
          const { stack: t, groupby: i, as: r, offset: s = 'zero' } = n;
          const o = [];
          const a = [];
          if (n.sort !== undefined) {
            for (const e of n.sort) {
              o.push(e.field);
              a.push(_n(e.order, 'ascending'));
            }
          }
          const u = { field: o, order: a };
          let c;
          if (aj(r)) {
            c = r;
          } else if (je(r)) {
            c = [r, `${r}_end`];
          } else {
            c = [`${n.stack}_start`, `${n.stack}_end`];
          }
          return new uj(e, {
            stackField: t,
            groupby: i,
            offset: s,
            sort: u,
            facetby: [],
            as: c,
          });
        }
        static makeFromEncoding(e, n) {
          const t = n.stack;
          const { encoding: i } = n;
          if (!t) {
            return null;
          }
          const { groupbyChannel: r, fieldChannel: s, offset: o, impute: a } = t;
          let u;
          if (r) {
            const e = i[r];
            u = ml(e);
          }
          const c = oj(n);
          const l = n.encoding.order;
          let f;
          if (F(l) || Lc(l)) {
            f = Pr(l);
          } else {
            f = c.reduce(
              (e, n) => {
                e.field.push(n);
                e.order.push(s === 'y' ? 'descending' : 'ascending');
                return e;
              },
              { field: [], order: [] }
            );
          }
          return new uj(e, {
            dimensionFieldDef: u,
            stackField: n.vgField(s),
            facetby: [],
            stackby: c,
            sort: f,
            offset: o,
            impute: a,
            as: [
              n.vgField(s, { suffix: 'start', forAs: true }),
              n.vgField(s, { suffix: 'end', forAs: true }),
            ],
          });
        }
        get stack() {
          return this._stack;
        }
        addDimensions(e) {
          this._stack.facetby.push(...e);
        }
        dependentFields() {
          const e = new Set();
          e.add(this._stack.stackField);
          this.getGroupbyFields().forEach(e.add, e);
          this._stack.facetby.forEach(e.add, e);
          this._stack.sort.field.forEach(e.add, e);
          return e;
        }
        producedFields() {
          return new Set(this._stack.as);
        }
        hash() {
          return `Stack ${rn(this._stack)}`;
        }
        getGroupbyFields() {
          const { dimensionFieldDef: e, impute: n, groupby: t } = this._stack;
          if (e) {
            if (e.bin) {
              if (n) {
                return [el(e, { binSuffix: 'mid' })];
              }
              return [el(e, {}), el(e, { binSuffix: 'end' })];
            }
            return [el(e)];
          }
          return t !== null && t !== void 0 ? t : [];
        }
        assemble() {
          const e = [];
          const {
            facetby: n,
            dimensionFieldDef: t,
            stackField: i,
            stackby: r,
            sort: s,
            offset: o,
            impute: a,
            as: u,
          } = this._stack;
          if (a && t) {
            const { bandPosition: s = 0.5, bin: o } = t;
            if (o) {
              e.push({
                type: 'formula',
                expr:
                  `${s}*` +
                  el(t, { expr: 'datum' }) +
                  `+${1 - s}*` +
                  el(t, { expr: 'datum', binSuffix: 'end' }),
                as: el(t, { binSuffix: 'mid', forAs: true }),
              });
            }
            e.push({
              type: 'impute',
              field: i,
              groupby: [...r, ...n],
              key: el(t, { binSuffix: 'mid' }),
              method: 'value',
              value: 0,
            });
          }
          e.push({
            type: 'stack',
            groupby: [...this.getGroupbyFields(), ...n],
            field: i,
            sort: s,
            as: u,
            offset: o,
          });
          return e;
        }
      }
      class cj extends Hg {
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        clone() {
          return new cj(null, Ze(this.transform));
        }
        addDimensions(e) {
          this.transform.groupby = fn(this.transform.groupby.concat(e), (e) => e);
        }
        dependentFields() {
          var e, n;
          const t = new Set();
          ((e = this.transform.groupby) !== null && e !== void 0 ? e : []).forEach(
            t.add,
            t
          );
          ((n = this.transform.sort) !== null && n !== void 0 ? n : []).forEach((e) =>
            t.add(e.field)
          );
          this.transform.window
            .map((e) => e.field)
            .filter((e) => e !== undefined)
            .forEach(t.add, t);
          return t;
        }
        producedFields() {
          return new Set(this.transform.window.map(this.getDefaultName));
        }
        getDefaultName(e) {
          var n;
          return (n = e.as) !== null && n !== void 0 ? n : el(e);
        }
        hash() {
          return `WindowTransform ${rn(this.transform)}`;
        }
        assemble() {
          var e;
          const n = [];
          const t = [];
          const i = [];
          const r = [];
          for (const f of this.transform.window) {
            t.push(f.op);
            i.push(this.getDefaultName(f));
            r.push(f.param === undefined ? null : f.param);
            n.push(f.field === undefined ? null : f.field);
          }
          const s = this.transform.frame;
          const o = this.transform.groupby;
          if (s && s[0] === null && s[1] === null && t.every((e) => Vi(e))) {
            return Object.assign(
              { type: 'joinaggregate', as: i, ops: t, fields: n },
              o !== undefined ? { groupby: o } : {}
            );
          }
          const a = [];
          const u = [];
          if (this.transform.sort !== undefined) {
            for (const n of this.transform.sort) {
              a.push(n.field);
              u.push((e = n.order) !== null && e !== void 0 ? e : 'ascending');
            }
          }
          const c = { field: a, order: u };
          const l = this.transform.ignorePeers;
          return Object.assign(
            Object.assign(
              Object.assign(
                { type: 'window', params: r, as: i, ops: t, fields: n, sort: c },
                l !== undefined ? { ignorePeers: l } : {}
              ),
              o !== undefined ? { groupby: o } : {}
            ),
            s !== undefined ? { frame: s } : {}
          );
        }
      }
      function lj(e) {
        function n(t) {
          if (!(t instanceof Ew)) {
            const i = t.clone();
            if (i instanceof Gg) {
              const n = pj + i.getSource();
              i.setSource(n);
              e.model.component.data.outputNodes[n] = i;
            } else if (
              i instanceof Cw ||
              i instanceof uj ||
              i instanceof cj ||
              i instanceof sj
            ) {
              i.addDimensions(e.fields);
            }
            for (const e of t.children.flatMap(n)) {
              e.parent = i;
            }
            return [i];
          }
          return t.children.flatMap(n);
        }
        return n;
      }
      function fj(e) {
        if (e instanceof Ew) {
          if (e.numChildren() === 1 && !(e.children[0] instanceof Gg)) {
            const n = e.children[0];
            if (
              n instanceof Cw ||
              n instanceof uj ||
              n instanceof cj ||
              n instanceof sj
            ) {
              n.addDimensions(e.fields);
            }
            n.swapWithParent();
            fj(e);
          } else {
            const n = e.model.component.data.main;
            dj(n);
            const t = lj(e);
            const i = e.children.map(t).flat();
            for (const e of i) {
              e.parent = n;
            }
          }
        } else {
          e.children.map(fj);
        }
      }
      function dj(e) {
        if (e instanceof Gg && e.type === pg.Main) {
          if (e.numChildren() === 1) {
            const n = e.children[0];
            if (!(n instanceof Ew)) {
              n.swapWithParent();
              dj(e);
            }
          }
        }
      }
      const pj = 'scale_';
      const gj = 5;
      function mj(e) {
        for (const n of e) {
          for (const e of n.children) {
            if (e.parent !== n) {
              return false;
            }
          }
          if (!mj(n.children)) {
            return false;
          }
        }
        return true;
      }
      function hj(e, n) {
        let t = false;
        for (const i of n) {
          t = e.optimize(i) || t;
        }
        return t;
      }
      function bj(e, n, t) {
        let i = e.sources;
        let r = false;
        r = hj(new Jw(), i) || r;
        r = hj(new Qw(n), i) || r;
        i = i.filter((e) => e.numChildren() > 0);
        r = hj(new ej(), i) || r;
        i = i.filter((e) => e.numChildren() > 0);
        if (!t) {
          r = hj(new Kw(), i) || r;
          r = hj(new ij(n), i) || r;
          r = hj(new Xw(), i) || r;
          r = hj(new Zw(), i) || r;
          r = hj(new tj(), i) || r;
          r = hj(new nj(), i) || r;
          r = hj(new Yw(), i) || r;
          r = hj(new rj(), i) || r;
        }
        e.sources = i;
        return r;
      }
      function yj(e, n) {
        mj(e.sources);
        let t = 0;
        let i = 0;
        for (let r = 0; r < gj; r++) {
          if (!bj(e, n, true)) {
            break;
          }
          t++;
        }
        e.sources.map(fj);
        for (let r = 0; r < gj; r++) {
          if (!bj(e, n, false)) {
            break;
          }
          i++;
        }
        mj(e.sources);
        if (Math.max(t, i) === gj) {
          xo(`Maximum optimization runs(${gj}) reached.`);
        }
      }
      class vj {
        constructor(e) {
          Object.defineProperty(this, 'signal', { enumerable: true, get: e });
        }
        static fromName(e, n) {
          return new vj(() => e(n));
        }
      }
      var xj =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Oj(e) {
        if (jA(e)) {
          wj(e);
        } else {
          jj(e);
        }
      }
      function wj(e) {
        const n = e.component.scales;
        for (const t of yn(n)) {
          const i = Dj(e, t);
          const r = n[t];
          r.setWithExplicit('domains', i);
          Ej(e, t);
          if (e.component.data.isFaceted) {
            let n = e;
            while (!AA(n) && n.parent) {
              n = n.parent;
            }
            const r = n.component.resolve.scale[t];
            if (r === 'shared') {
              for (const e of i.value) {
                if (mr(e)) {
                  e.data = pj + e.data.replace(pj, '');
                }
              }
            }
          }
        }
      }
      function jj(e) {
        for (const t of e.children) {
          Oj(t);
        }
        const n = e.component.scales;
        for (const t of yn(n)) {
          let i;
          let r = null;
          for (const n of e.children) {
            const e = n.component.scales[t];
            if (e) {
              if (i === undefined) {
                i = e.getWithExplicit('domains');
              } else {
                i = rg(i, e.getWithExplicit('domains'), 'domains', 'scale', _j);
              }
              const n = e.get('selectionExtent');
              if (r && n && r.param !== n.param) {
                xo(Zr);
              }
              r = n;
            }
          }
          n[t].setWithExplicit('domains', i);
          if (r) {
            n[t].set('selectionExtent', r, true);
          }
        }
      }
      function Aj(e, n, t, i) {
        if (e === 'unaggregated') {
          const { valid: e, reason: i } = Bj(n, t);
          if (!e) {
            xo(i);
            return undefined;
          }
        } else if (e === undefined && i.useUnaggregatedDomain) {
          const { valid: e } = Bj(n, t);
          if (e) {
            return 'unaggregated';
          }
        }
        return e;
      }
      function Dj(e, n) {
        const t = e.getScaleComponent(n).get('type');
        const { encoding: i } = e;
        const r = Aj(e.scaleDomain(n), e.typedFieldDef(n), t, e.config.scale);
        if (r !== e.scaleDomain(n)) {
          e.specifiedScales[n] = Object.assign(
            Object.assign({}, e.specifiedScales[n]),
            { domain: r }
          );
        }
        if (n === 'x' && hl(i.x2)) {
          if (hl(i.x)) {
            return rg(kj(t, r, e, 'x'), kj(t, r, e, 'x2'), 'domain', 'scale', _j);
          } else {
            return kj(t, r, e, 'x2');
          }
        } else if (n === 'y' && hl(i.y2)) {
          if (hl(i.y)) {
            return rg(kj(t, r, e, 'y'), kj(t, r, e, 'y2'), 'domain', 'scale', _j);
          } else {
            return kj(t, r, e, 'y2');
          }
        }
        return kj(t, r, e, n);
      }
      function Fj(e, n, t) {
        return e.map((e) => {
          const i = Fl(e, { timeUnit: t, type: n });
          return { signal: `{data: ${i}}` };
        });
      }
      function $j(e, n, t) {
        var i;
        const r = (i = Xo(t)) === null || i === void 0 ? void 0 : i.unit;
        if (n === 'temporal' || r) {
          return Fj(e, n, r);
        }
        return [e];
      }
      function kj(e, n, t, i) {
        const { encoding: r } = t;
        const s = hl(r[i]);
        const { type: o } = s;
        const a = s['timeUnit'];
        if (Qa(n)) {
          const r = kj(e, undefined, t, i);
          const s = $j(n.unionWith, o, a);
          return eg([...r.value, ...s]);
        } else if (fr(n)) {
          return eg([n]);
        } else if (n && n !== 'unaggregated' && !Ya(n)) {
          return eg($j(n, o, a));
        }
        const u = t.stack;
        if (u && i === u.fieldChannel) {
          if (u.offset === 'normalize') {
            return ng([[0, 1]]);
          }
          const e = t.requestDataName(pg.Main);
          return ng([
            { data: e, field: t.vgField(i, { suffix: 'start' }) },
            { data: e, field: t.vgField(i, { suffix: 'end' }) },
          ]);
        }
        const c = zi(i) && Lc(s) ? Sj(t, i, e) : undefined;
        if (qc(s)) {
          const e = $j([s.datum], o, a);
          return ng(e);
        }
        const l = s;
        if (n === 'unaggregated') {
          const e = t.requestDataName(pg.Main);
          const { field: n } = s;
          return ng([
            { data: e, field: el({ field: n, aggregate: 'min' }) },
            { data: e, field: el({ field: n, aggregate: 'max' }) },
          ]);
        } else if (nr(l.bin)) {
          if (Ua(e)) {
            if (e === 'bin-ordinal') {
              return ng([]);
            }
            return ng([
              {
                data: On(c) ? t.requestDataName(pg.Main) : t.requestDataName(pg.Raw),
                field: t.vgField(i, kl(l, i) ? { binSuffix: 'range' } : {}),
                sort: c === true || !$(c) ? { field: t.vgField(i, {}), op: 'min' } : c,
              },
            ]);
          } else {
            const { bin: e } = l;
            if (nr(e)) {
              const n = jw(t, l.field, e);
              return ng([
                new vj(() => {
                  const e = t.getSignalName(n);
                  return `[${e}.start, ${e}.stop]`;
                }),
              ]);
            } else {
              return ng([
                { data: t.requestDataName(pg.Main), field: t.vgField(i, {}) },
              ]);
            }
          }
        } else if (
          l.timeUnit &&
          on(['time', 'utc'], e) &&
          Pc(l, jA(t) ? t.encoding[Jt(i)] : undefined, t.markDef, t.config)
        ) {
          const e = t.requestDataName(pg.Main);
          return ng([
            { data: e, field: t.vgField(i) },
            { data: e, field: t.vgField(i, { suffix: 'end' }) },
          ]);
        } else if (c) {
          return ng([
            {
              data: On(c) ? t.requestDataName(pg.Main) : t.requestDataName(pg.Raw),
              field: t.vgField(i),
              sort: c,
            },
          ]);
        } else {
          return ng([{ data: t.requestDataName(pg.Main), field: t.vgField(i) }]);
        }
      }
      function Cj(e, n) {
        const { op: t, field: i, order: r } = e;
        return Object.assign(
          Object.assign(
            { op: t !== null && t !== void 0 ? t : n ? 'sum' : yc },
            i ? { field: Cn(i) } : {}
          ),
          r ? { order: r } : {}
        );
      }
      function Ej(e, n) {
        var t;
        const i = e.component.scales[n];
        const r = e.specifiedScales[n].domain;
        const s = (t = e.fieldDef(n)) === null || t === void 0 ? void 0 : t.bin;
        const o = Ya(r) && r;
        const a = ir(s) && rr(s.extent) && s.extent;
        if (o || a) {
          i.set('selectionExtent', o !== null && o !== void 0 ? o : a, true);
        }
      }
      function Sj(e, n, t) {
        if (!Ua(t)) {
          return undefined;
        }
        const i = e.fieldDef(n);
        const r = i.sort;
        if (jc(r)) {
          return { op: 'min', field: iO(i, n), order: 'ascending' };
        }
        const { stack: s } = e;
        const o = s
          ? [
              ...(s.groupbyField ? [s.groupbyField] : []),
              ...s.stackBy.map((e) => e.fieldDef.field),
            ]
          : undefined;
        if (wc(r)) {
          const e = s && !on(o, r.field);
          return Cj(r, e);
        } else if (Oc(r)) {
          const { encoding: n, order: t } = r;
          const i = e.fieldDef(n);
          const { aggregate: a, field: u } = i;
          const c = s && !on(o, u);
          if (Ii(a) || Hi(a)) {
            return Cj({ field: el(i), order: t }, c);
          } else if (Vi(a) || !a) {
            return Cj({ op: a, field: u, order: t }, c);
          }
        } else if (r === 'descending') {
          return { op: 'min', field: e.vgField(n), order: 'descending' };
        } else if (on(['ascending', undefined], r)) {
          return true;
        }
        return undefined;
      }
      function Bj(e, n) {
        const { aggregate: t, type: i } = e;
        if (!t) {
          return { valid: false, reason: _s(e) };
        }
        if (je(t) && !Zi[t]) {
          return { valid: false, reason: Ps(t) };
        }
        if (i === 'quantitative') {
          if (n === 'log') {
            return { valid: false, reason: zs(e) };
          }
        }
        return { valid: true };
      }
      function _j(e, n, t, i) {
        if (e.explicit && n.explicit) {
          xo(Ws(t, i, e.value, n.value));
        }
        return { explicit: e.explicit, value: [...e.value, ...n.value] };
      }
      function Pj(e) {
        const n = fn(
          e.map((e) => {
            if (mr(e)) {
              const { sort: n } = e,
                t = xj(e, ['sort']);
              return t;
            }
            return e;
          }),
          rn
        );
        const t = fn(
          e
            .map((e) => {
              if (mr(e)) {
                const n = e.sort;
                if (n !== undefined && !On(n)) {
                  if ('op' in n && n.op === 'count') {
                    delete n.field;
                  }
                  if (n.order === 'ascending') {
                    delete n.order;
                  }
                }
                return n;
              }
              return undefined;
            })
            .filter((e) => e !== undefined),
          rn
        );
        if (n.length === 0) {
          return undefined;
        } else if (n.length === 1) {
          const n = e[0];
          if (mr(n) && t.length > 0) {
            let e = t[0];
            if (t.length > 1) {
              xo(Gs);
              e = true;
            } else {
              if ($(e) && 'field' in e) {
                const t = e.field;
                if (n.field === t) {
                  e = e.order ? { order: e.order } : true;
                }
              }
            }
            return Object.assign(Object.assign({}, n), { sort: e });
          }
          return n;
        }
        const i = fn(
          t.map((e) => {
            if (On(e) || !('op' in e) || (je(e.op) && e.op in Wi)) {
              return e;
            }
            xo(Hs(e));
            return true;
          }),
          rn
        );
        let r;
        if (i.length === 1) {
          r = i[0];
        } else if (i.length > 1) {
          xo(Gs);
          r = true;
        }
        const s = fn(
          e.map((e) => {
            if (mr(e)) {
              return e.data;
            }
            return null;
          }),
          (e) => e
        );
        if (s.length === 1 && s[0] !== null) {
          const e = Object.assign(
            { data: s[0], fields: n.map((e) => e.field) },
            r ? { sort: r } : {}
          );
          return e;
        }
        return Object.assign({ fields: n }, r ? { sort: r } : {});
      }
      function zj(e) {
        if (mr(e) && je(e.field)) {
          return e.field;
        } else if (pr(e)) {
          let n;
          for (const t of e.fields) {
            if (mr(t) && je(t.field)) {
              if (!n) {
                n = t.field;
              } else if (n !== t.field) {
                xo(Vs);
                return n;
              }
            }
          }
          xo(Ys);
          return n;
        } else if (gr(e)) {
          xo(Qs);
          const n = e.fields[0];
          return je(n) ? n : undefined;
        }
        return undefined;
      }
      function Nj(e, n) {
        const t = e.component.scales[n];
        const i = t.get('domains').map((n) => {
          if (mr(n)) {
            n.data = e.lookupDataSource(n.data);
          }
          return n;
        });
        return Pj(i);
      }
      var Mj =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Tj(e) {
        if (FA(e) || DA(e)) {
          return e.children.reduce((e, n) => e.concat(Tj(n)), Lj(e));
        } else {
          return Lj(e);
        }
      }
      function Lj(e) {
        return yn(e.component.scales).reduce((n, t) => {
          const i = e.component.scales[t];
          if (i.merged) {
            return n;
          }
          const r = i.combine();
          const {
              name: s,
              type: o,
              selectionExtent: a,
              domains: u,
              range: c,
              reverse: l,
            } = r,
            f = Mj(r, [
              'name',
              'type',
              'selectionExtent',
              'domains',
              'range',
              'reverse',
            ]);
          const d = Rj(r.range, s, t, e);
          const p = Nj(e, t);
          const g = a ? Wg(e, a, i, p) : null;
          n.push(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign({ name: s, type: o }, p ? { domain: p } : {}),
                    g ? { domainRaw: g } : {}
                  ),
                  { range: d }
                ),
                l !== undefined ? { reverse: l } : {}
              ),
              f
            )
          );
          return n;
        }, []);
      }
      function Rj(e, n, t, i) {
        if (bi(t)) {
          if (dr(e)) {
            return { step: { signal: `${n}_step` } };
          }
        } else if ($(e) && mr(e)) {
          return Object.assign(Object.assign({}, e), {
            data: i.lookupDataSource(e.data),
          });
        }
        return e;
      }
      class qj extends Zp {
        constructor(e, n) {
          super({}, { name: e });
          this.merged = false;
          this.setWithExplicit('type', n);
        }
        domainDefinitelyIncludesZero() {
          if (this.get('zero') !== false) {
            return true;
          }
          return an(
            this.get('domains'),
            (e) => F(e) && e.length === 2 && e[0] <= 0 && e[1] >= 0
          );
        }
      }
      const Uj = ['range', 'scheme'];
      function Wj(e) {
        return e === 'x' ? 'width' : e === 'y' ? 'height' : undefined;
      }
      function Ij(e) {
        const n = e.component.scales;
        for (const t of Pi) {
          const i = n[t];
          if (!i) {
            continue;
          }
          const r = Gj(t, e);
          i.setWithExplicit('range', r);
        }
      }
      function Hj(e, n) {
        const t = e.fieldDef(n);
        if (t === null || t === void 0 ? void 0 : t.bin) {
          const { bin: i, field: r } = t;
          const s = Wj(n);
          const o = e.getName(s);
          if ($(i) && i.binned && i.step !== undefined) {
            return new vj(() => {
              const t = e.scaleName(n);
              const r = `(domain("${t}")[1] - domain("${t}")[0]) / ${i.step}`;
              return `${e.getSignalName(o)} / (${r})`;
            });
          } else if (nr(i)) {
            const n = jw(e, r, i);
            return new vj(() => {
              const t = e.getSignalName(n);
              const i = `(${t}.stop - ${t}.start) / ${t}.step`;
              return `${e.getSignalName(o)} / (${i})`;
            });
          }
        }
        return undefined;
      }
      function Gj(e, n) {
        const t = n.specifiedScales[e];
        const { size: i } = n;
        const r = n.getScaleComponent(e);
        const s = r.get('type');
        for (const c of Uj) {
          if (t[c] !== undefined) {
            const i = au(s, c);
            const r = uu(e, c);
            if (!i) {
              xo(Ls(s, c, e));
            } else if (r) {
              xo(r);
            } else {
              switch (c) {
                case 'range': {
                  const i = t.range;
                  if (F(i)) {
                    if (bi(e)) {
                      return eg(
                        i.map((e) => {
                          if (e === 'width' || e === 'height') {
                            const t = n.getName(e);
                            const i = n.getSignalName.bind(n);
                            return vj.fromName(i, t);
                          }
                          return e;
                        })
                      );
                    }
                  } else if ($(i)) {
                    return eg({
                      data: n.requestDataName(pg.Main),
                      field: i.field,
                      sort: { op: 'min', field: n.vgField(e) },
                    });
                  }
                  return eg(i);
                }
                case 'scheme':
                  return eg(Vj(t[c]));
              }
            }
          }
        }
        if (e === Hn || e === Gn) {
          const n = e === Hn ? 'width' : 'height';
          const t = i[n];
          if (rd(t)) {
            if (Ua(s)) {
              return eg({ step: t.step });
            } else {
              xo(qs(n));
            }
          }
        }
        const { rangeMin: o, rangeMax: a } = t;
        const u = Yj(e, n);
        if (
          (o !== undefined || a !== undefined) &&
          au(s, 'rangeMin') &&
          F(u) &&
          u.length === 2
        ) {
          return eg([
            o !== null && o !== void 0 ? o : u[0],
            a !== null && a !== void 0 ? a : u[1],
          ]);
        }
        return ng(u);
      }
      function Vj(e) {
        if (Va(e)) {
          return Object.assign({ scheme: e.name }, nn(e, ['name']));
        }
        return { scheme: e };
      }
      function Yj(e, n) {
        const { size: t, config: i, mark: r, encoding: s } = n;
        const o = n.getSignalName.bind(n);
        const { type: a } = hl(s[e]);
        const u = n.getScaleComponent(e);
        const c = u.get('type');
        const { domain: l, domainMid: f } = n.specifiedScales[e];
        switch (e) {
          case Hn:
          case Gn: {
            if (on(['point', 'band'], c)) {
              if (e === Hn && !t.width) {
                const e = pd(i.view, 'width');
                if (rd(e)) {
                  return e;
                }
              } else if (e === Gn && !t.height) {
                const e = pd(i.view, 'height');
                if (rd(e)) {
                  return e;
                }
              }
            }
            const r = Wj(e);
            const s = n.getName(r);
            if (e === Gn && Wa(c)) {
              return [vj.fromName(o, s), 0];
            } else {
              return [0, vj.fromName(o, s)];
            }
          }
          case at: {
            const s = n.component.scales[e].get('zero');
            const o = Jj(r, s, i);
            const a = Zj(r, t, n, i);
            if (Ha(c)) {
              return Xj(o, a, Qj(c, i, l, e));
            } else {
              return [o, a];
            }
          }
          case Jn:
            return [0, Math.PI * 2];
          case ut:
            return [0, 360];
          case Qn: {
            return [
              0,
              new vj(() => {
                const e = n.getSignalName('width');
                const t = n.getSignalName('height');
                return `min(${e},${t})/2`;
              }),
            ];
          }
          case dt:
            return [i.scale.minStrokeWidth, i.scale.maxStrokeWidth];
          case pt:
            return [
              [1, 0],
              [4, 2],
              [2, 1],
              [1, 1],
              [1, 2, 4, 2],
            ];
          case ot:
            return 'symbol';
          case it:
          case rt:
          case st:
            if (c === 'ordinal') {
              return a === 'nominal' ? 'category' : 'ordinal';
            } else {
              if (f !== undefined) {
                return 'diverging';
              } else {
                return r === 'rect' || r === 'geoshape' ? 'heatmap' : 'ramp';
              }
            }
          case ct:
          case lt:
          case ft:
            return [i.scale.minOpacity, i.scale.maxOpacity];
        }
        throw new Error(`Scale range undefined for channel ${e}`);
      }
      function Qj(e, n, t, i) {
        switch (e) {
          case 'quantile':
            return n.scale.quantileCount;
          case 'quantize':
            return n.scale.quantizeCount;
          case 'threshold':
            if (t !== undefined && F(t)) {
              return t.length + 1;
            } else {
              xo(uo(i));
              return 3;
            }
        }
      }
      function Xj(e, n, t) {
        const i = () => {
          const i = $r(n);
          const r = $r(e);
          const s = `(${i} - ${r}) / (${t} - 1)`;
          return `sequence(${r}, ${i} + ${s}, ${s})`;
        };
        if (fr(n)) {
          return new vj(i);
        } else {
          return { signal: i() };
        }
      }
      function Jj(e, n, t) {
        if (n) {
          if (fr(n)) {
            return { signal: `${n.signal} ? 0 : ${Jj(e, false, t)}` };
          } else {
            return 0;
          }
        }
        switch (e) {
          case 'bar':
          case 'tick':
            return t.scale.minBandSize;
          case 'line':
          case 'trail':
          case 'rule':
            return t.scale.minStrokeWidth;
          case 'text':
            return t.scale.minFontSize;
          case 'point':
          case 'square':
          case 'circle':
            return t.scale.minSize;
        }
        throw new Error(Os('size', e));
      }
      const Kj = 0.95;
      function Zj(e, n, t, i) {
        const r = { x: Hj(t, 'x'), y: Hj(t, 'y') };
        switch (e) {
          case 'bar':
          case 'tick': {
            if (i.scale.maxBandSize !== undefined) {
              return i.scale.maxBandSize;
            }
            const e = eA(n, r, i.view);
            if (Oe(e)) {
              return e - 1;
            } else {
              return new vj(() => `${e.signal} - 1`);
            }
          }
          case 'line':
          case 'trail':
          case 'rule':
            return i.scale.maxStrokeWidth;
          case 'text':
            return i.scale.maxFontSize;
          case 'point':
          case 'square':
          case 'circle': {
            if (i.scale.maxSize) {
              return i.scale.maxSize;
            }
            const e = eA(n, r, i.view);
            if (Oe(e)) {
              return Math.pow(Kj * e, 2);
            } else {
              return new vj(() => `pow(${Kj} * ${e.signal}, 2)`);
            }
          }
        }
        throw new Error(Os('size', e));
      }
      function eA(e, n, t) {
        const i = rd(e.width) ? e.width.step : dd(t, 'width');
        const r = rd(e.height) ? e.height.step : dd(t, 'height');
        if (n.x || n.y) {
          return new vj(() => {
            const e = [n.x ? n.x.signal : i, n.y ? n.y.signal : r];
            return `min(${e.join(', ')})`;
          });
        }
        return Math.min(i, r);
      }
      function nA(e, n) {
        if (jA(e)) {
          tA(e, n);
        } else {
          sA(e, n);
        }
      }
      function tA(e, n) {
        const t = e.component.scales;
        const { config: i, encoding: r, markDef: s, specifiedScales: o } = e;
        for (const a of yn(t)) {
          const u = o[a];
          const c = t[a];
          const l = e.getScaleComponent(a);
          const f = hl(r[a]);
          const d = u[n];
          const p = l.get('type');
          const g = l.get('padding');
          const m = l.get('paddingInner');
          const h = au(p, n);
          const b = uu(a, n);
          if (d !== undefined) {
            if (!h) {
              xo(Ls(p, n, a));
            } else if (b) {
              xo(b);
            }
          }
          if (h && b === undefined) {
            if (d !== undefined) {
              const e = f['timeUnit'];
              const t = f.type;
              switch (n) {
                case 'domainMax':
                case 'domainMin':
                  if (jo(u[n]) || t === 'temporal' || e) {
                    c.set(n, { signal: Fl(u[n], { type: t, timeUnit: e }) }, true);
                  } else {
                    c.set(n, u[n], true);
                  }
                  break;
                default:
                  c.copyKeyFromObject(n, u);
              }
            } else {
              const t =
                n in iA
                  ? iA[n]({
                      model: e,
                      channel: a,
                      fieldOrDatumDef: f,
                      scaleType: p,
                      scalePadding: g,
                      scalePaddingInner: m,
                      domain: u.domain,
                      markDef: s,
                      config: i,
                    })
                  : i.scale[n];
              if (t !== undefined) {
                c.set(n, t, false);
              }
            }
          }
        }
      }
      const iA = {
        bins: ({ model: e, fieldOrDatumDef: n }) => (Lc(n) ? oA(e, n) : undefined),
        interpolate: ({ channel: e, fieldOrDatumDef: n }) => aA(e, n.type),
        nice: ({ scaleType: e, channel: n, domain: t, fieldOrDatumDef: i }) =>
          uA(e, n, t, i),
        padding: ({
          channel: e,
          scaleType: n,
          fieldOrDatumDef: t,
          markDef: i,
          config: r,
        }) => cA(e, n, r.scale, t, i, r.bar),
        paddingInner: ({ scalePadding: e, channel: n, markDef: t, config: i }) =>
          lA(e, n, t.type, i.scale),
        paddingOuter: ({
          scalePadding: e,
          channel: n,
          scaleType: t,
          markDef: i,
          scalePaddingInner: r,
          config: s,
        }) => fA(e, n, t, i.type, r, s.scale),
        reverse: ({ fieldOrDatumDef: e, scaleType: n, channel: t, config: i }) => {
          const r = Lc(e) ? e.sort : undefined;
          return dA(n, r, t, i.scale);
        },
        zero: ({
          channel: e,
          fieldOrDatumDef: n,
          domain: t,
          markDef: i,
          scaleType: r,
        }) => pA(e, n, t, i, r),
      };
      function rA(e) {
        if (jA(e)) {
          Ij(e);
        } else {
          sA(e, 'range');
        }
      }
      function sA(e, n) {
        const t = e.component.scales;
        for (const i of e.children) {
          if (n === 'range') {
            rA(i);
          } else {
            nA(i, n);
          }
        }
        for (const i of yn(t)) {
          let r;
          for (const t of e.children) {
            const e = t.component.scales[i];
            if (e) {
              const t = e.getWithExplicit(n);
              r = rg(
                r,
                t,
                n,
                'scale',
                tg((e, t) => {
                  switch (n) {
                    case 'range':
                      if (e.step && t.step) {
                        return e.step - t.step;
                      }
                      return 0;
                  }
                  return 0;
                })
              );
            }
          }
          t[i].setWithExplicit(n, r);
        }
      }
      function oA(e, n) {
        const t = n.bin;
        if (nr(t)) {
          const i = jw(e, n.field, t);
          return new vj(() => e.getSignalName(i));
        } else if (tr(t) && ir(t) && t.step !== undefined) {
          return { step: t.step };
        }
        return undefined;
      }
      function aA(e, n) {
        if (on([it, rt, st], e) && n !== 'nominal') {
          return 'hcl';
        }
        return undefined;
      }
      function uA(e, n, t, i) {
        var r;
        if (
          ((r = ml(i)) === null || r === void 0 ? void 0 : r.bin) ||
          F(t) ||
          on([Aa.TIME, Aa.UTC], e)
        ) {
          return undefined;
        }
        return n in mi ? true : undefined;
      }
      function cA(e, n, t, i, r, s) {
        if (e in mi) {
          if (Ia(n)) {
            if (t.continuousPadding !== undefined) {
              return t.continuousPadding;
            }
            const { type: n, orient: o } = r;
            if (n === 'bar' && !(Lc(i) && (i.bin || i.timeUnit))) {
              if (
                (o === 'vertical' && e === 'x') ||
                (o === 'horizontal' && e === 'y')
              ) {
                return s.continuousBandSize;
              }
            }
          }
          if (n === Aa.POINT) {
            return t.pointPadding;
          }
        }
        return undefined;
      }
      function lA(e, n, t, i) {
        if (e !== undefined) {
          return undefined;
        }
        if (n in mi) {
          const {
            bandPaddingInner: e,
            barBandPaddingInner: n,
            rectBandPaddingInner: r,
          } = i;
          return _n(e, t === 'bar' ? n : r);
        }
        return undefined;
      }
      function fA(e, n, t, i, r, s) {
        if (e !== undefined) {
          return undefined;
        }
        if (n in mi) {
          if (t === Aa.BAND) {
            const { bandPaddingOuter: e } = s;
            return _n(e, fr(r) ? { signal: `${r.signal}/2` } : r / 2);
          }
        }
        return undefined;
      }
      function dA(e, n, t, i) {
        if (t === 'x' && i.xReverse !== undefined) {
          if (Wa(e) && n === 'descending') {
            if (fr(i.xReverse)) {
              return { signal: `!${i.xReverse.signal}` };
            } else {
              return !i.xReverse;
            }
          }
          return i.xReverse;
        }
        if (Wa(e) && n === 'descending') {
          return true;
        }
        return undefined;
      }
      function pA(e, n, t, i, r) {
        const s = !!t && t !== 'unaggregated';
        if (s) {
          if (Wa(r)) {
            if (F(t)) {
              const e = t[0];
              const n = t[t.length - 1];
              if (e <= 0 && n >= 0) {
                return true;
              }
            }
            return false;
          }
        }
        if (e === 'size' && n.type === 'quantitative' && !Ha(r)) {
          return true;
        }
        if (!(Lc(n) && n.bin) && on([...hi, ...vi], e)) {
          const { orient: n, type: t } = i;
          if (on(['bar', 'area', 'line', 'trail'], t)) {
            if ((n === 'horizontal' && e === 'y') || (n === 'vertical' && e === 'x')) {
              return false;
            }
          }
          return true;
        }
        return false;
      }
      function gA(e, n, t, i) {
        const r = mA(n, t, i);
        const { type: s } = e;
        if (!zi(n)) {
          return null;
        }
        if (s !== undefined) {
          if (!lu(n, s)) {
            xo(Ms(n, s, r));
            return r;
          }
          if (Lc(t) && !cu(s, t.type)) {
            xo(Ts(s, r));
            return r;
          }
          return s;
        }
        return r;
      }
      function mA(e, n, t) {
        var i;
        switch (n.type) {
          case 'nominal':
          case 'ordinal': {
            if (Et(e) || qi(e) === 'discrete') {
              if (e === 'shape' && n.type === 'ordinal') {
                xo(Fs(e, 'ordinal'));
              }
              return 'ordinal';
            }
            if (e in mi) {
              if (on(['rect', 'bar', 'image', 'rule'], t.type)) {
                return 'band';
              }
            } else if (t.type === 'arc' && e in yi) {
              return 'band';
            }
            const r = t[Kt(e)];
            if (Uu(r)) {
              return 'band';
            }
            if (
              Qc(n) &&
              ((i = n.axis) === null || i === void 0 ? void 0 : i.tickBand)
            ) {
              return 'band';
            }
            return 'point';
          }
          case 'temporal':
            if (Et(e)) {
              return 'time';
            } else if (qi(e) === 'discrete') {
              xo(Fs(e, 'temporal'));
              return 'ordinal';
            } else if (Lc(n) && n.timeUnit && Xo(n.timeUnit).utc) {
              return 'utc';
            }
            return 'time';
          case 'quantitative':
            if (Et(e)) {
              if (Lc(n) && nr(n.bin)) {
                return 'bin-ordinal';
              }
              return 'linear';
            } else if (qi(e) === 'discrete') {
              xo(Fs(e, 'quantitative'));
              return 'ordinal';
            }
            return 'linear';
          case 'geojson':
            return undefined;
        }
        throw new Error(ps(n.type));
      }
      function hA(e, { ignoreRange: n } = {}) {
        bA(e);
        Oj(e);
        for (const t of ou) {
          nA(e, t);
        }
        if (!n) {
          rA(e);
        }
      }
      function bA(e) {
        if (jA(e)) {
          e.component.scales = yA(e);
        } else {
          e.component.scales = xA(e);
        }
      }
      function yA(e) {
        const { encoding: n, mark: t, markDef: i } = e;
        return Pi.reduce((r, s) => {
          const o = hl(n[s]);
          if (o && t === Du && s === ot && o.type === xa) {
            return r;
          }
          let a = o && o['scale'];
          if (o && a !== null && a !== false) {
            a !== null && a !== void 0 ? a : (a = {});
            const n = gA(a, s, o, i);
            r[s] = new qj(e.scaleName(`${s}`, true), {
              value: n,
              explicit: a.type === n,
            });
          }
          return r;
        }, {});
      }
      const vA = tg((e, n) => Ca(e) - Ca(n));
      function xA(e) {
        var n;
        var t;
        const i = (e.component.scales = {});
        const r = {};
        const s = e.component.resolve;
        for (const o of e.children) {
          bA(o);
          for (const i of yn(o.component.scales)) {
            (n = (t = s.scale)[i]) !== null && n !== void 0 ? n : (t[i] = FO(i, e));
            if (s.scale[i] === 'shared') {
              const e = r[i];
              const n = o.component.scales[i].getWithExplicit('type');
              if (e) {
                if ($a(e.value, n.value)) {
                  r[i] = rg(e, n, 'type', 'scale', vA);
                } else {
                  s.scale[i] = 'independent';
                  delete r[i];
                }
              } else {
                r[i] = n;
              }
            }
          }
        }
        for (const o of yn(r)) {
          const n = e.scaleName(o, true);
          const t = r[o];
          i[o] = new qj(n, t);
          for (const i of e.children) {
            const e = i.component.scales[o];
            if (e) {
              i.renameScale(e.get('name'), n);
              e.merged = true;
            }
          }
        }
        return i;
      }
      var OA =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class wA {
        constructor() {
          this.nameMap = {};
        }
        rename(e, n) {
          this.nameMap[e] = n;
        }
        has(e) {
          return this.nameMap[e] !== undefined;
        }
        get(e) {
          while (this.nameMap[e] && e !== this.nameMap[e]) {
            e = this.nameMap[e];
          }
          return e;
        }
      }
      function jA(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === 'unit';
      }
      function AA(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === 'facet';
      }
      function DA(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === 'concat';
      }
      function FA(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === 'layer';
      }
      class $A {
        constructor(e, n, t, i, r, s, o) {
          var a, u;
          this.type = n;
          this.parent = t;
          this.config = r;
          this.correctDataNames = (e) => {
            var n, t, i;
            if ((n = e.from) === null || n === void 0 ? void 0 : n.data) {
              e.from.data = this.lookupDataSource(e.from.data);
            }
            if (
              (i = (t = e.from) === null || t === void 0 ? void 0 : t.facet) === null ||
              i === void 0
                ? void 0
                : i.data
            ) {
              e.from.facet.data = this.lookupDataSource(e.from.facet.data);
            }
            return e;
          };
          this.parent = t;
          this.config = r;
          this.view = ar(o);
          this.name = (a = e.name) !== null && a !== void 0 ? a : i;
          this.title = lr(e.title)
            ? { text: e.title }
            : e.title
            ? ar(e.title)
            : undefined;
          this.scaleNameMap = t ? t.scaleNameMap : new wA();
          this.projectionNameMap = t ? t.projectionNameMap : new wA();
          this.signalNameMap = t ? t.signalNameMap : new wA();
          this.data = e.data;
          this.description = e.description;
          this.transforms = _p((u = e.transform) !== null && u !== void 0 ? u : []);
          this.layout = n === 'layer' || n === 'unit' ? {} : cd(e, n, r);
          this.component = {
            data: {
              sources: t ? t.component.data.sources : [],
              outputNodes: t ? t.component.data.outputNodes : {},
              outputNodeRefCounts: t ? t.component.data.outputNodeRefCounts : {},
              isFaceted:
                Fc(e) || (t && t.component.data.isFaceted && e.data === undefined),
            },
            layoutSize: new Zp(),
            layoutHeaders: { row: {}, column: {}, facet: {} },
            mark: null,
            resolve: Object.assign({ scale: {}, axis: {}, legend: {} }, s ? Ze(s) : {}),
            selection: null,
            scales: null,
            projection: null,
            axes: {},
            legends: {},
          };
        }
        get width() {
          return this.getSizeSignalRef('width');
        }
        get height() {
          return this.getSizeSignalRef('height');
        }
        parse() {
          this.parseScale();
          this.parseLayoutSize();
          this.renameTopLevelLayoutSizeSignal();
          this.parseSelections();
          this.parseProjection();
          this.parseData();
          this.parseAxesAndHeaders();
          this.parseLegends();
          this.parseMarkGroup();
        }
        parseScale() {
          hA(this);
        }
        parseProjection() {
          gw(this);
        }
        renameTopLevelLayoutSizeSignal() {
          if (this.getName('width') !== 'width') {
            this.renameSignal(this.getName('width'), 'width');
          }
          if (this.getName('height') !== 'height') {
            this.renameSignal(this.getName('height'), 'height');
          }
        }
        parseLegends() {
          JO(this);
        }
        assembleEncodeFromView(e) {
          const { style: n } = e,
            t = OA(e, ['style']);
          const i = {};
          for (const r of yn(t)) {
            const e = t[r];
            if (e !== undefined) {
              i[r] = Dr(e);
            }
          }
          return i;
        }
        assembleGroupEncodeEntry(e) {
          let n = {};
          if (this.view) {
            n = this.assembleEncodeFromView(this.view);
          }
          if (!e) {
            if (this.description) {
              n['description'] = Dr(this.description);
            }
            if (this.type === 'unit' || this.type === 'layer') {
              return Object.assign(
                {
                  width: this.getSizeSignalRef('width'),
                  height: this.getSizeSignalRef('height'),
                },
                n !== null && n !== void 0 ? n : {}
              );
            }
          }
          return bn(n) ? undefined : n;
        }
        assembleLayout() {
          if (!this.layout) {
            return undefined;
          }
          const e = this.layout,
            { spacing: n } = e,
            t = OA(e, ['spacing']);
          const { component: i, config: r } = this;
          const s = yO(i.layoutHeaders, r);
          return Object.assign(
            Object.assign(
              Object.assign({ padding: n }, this.assembleDefaultLayout()),
              t
            ),
            s ? { titleBand: s } : {}
          );
        }
        assembleDefaultLayout() {
          return {};
        }
        assembleHeaderMarks() {
          const { layoutHeaders: e } = this.component;
          let n = [];
          for (const t of Bt) {
            if (e[t].title) {
              n.push(cO(this, t));
            }
          }
          for (const t of aO) {
            n = n.concat(dO(this, t));
          }
          return n;
        }
        assembleAxes() {
          return Mx(this.component.axes, this.config);
        }
        assembleLegends() {
          return aw(this);
        }
        assembleProjections() {
          return cw(this);
        }
        assembleTitle() {
          var e, n, t;
          const i = (e = this.title) !== null && e !== void 0 ? e : {},
            { encoding: r } = i,
            s = OA(i, ['encoding']);
          const o = Object.assign(
            Object.assign(
              Object.assign({}, cr(this.config.title).nonMarkTitleProperties),
              s
            ),
            r ? { encode: { update: r } } : {}
          );
          if (o.text) {
            if (on(['unit', 'layer'], this.type)) {
              if (on(['middle', undefined], o.anchor)) {
                (n = o.frame) !== null && n !== void 0 ? n : (o.frame = 'group');
              }
            } else {
              (t = o.anchor) !== null && t !== void 0 ? t : (o.anchor = 'start');
            }
            return bn(o) ? undefined : o;
          }
          return undefined;
        }
        assembleGroup(e = []) {
          const n = {};
          e = e.concat(this.assembleSignals());
          if (e.length > 0) {
            n.signals = e;
          }
          const t = this.assembleLayout();
          if (t) {
            n.layout = t;
          }
          n.marks = [].concat(this.assembleHeaderMarks(), this.assembleMarks());
          const i = !this.parent || AA(this.parent) ? Tj(this) : [];
          if (i.length > 0) {
            n.scales = i;
          }
          const r = this.assembleAxes();
          if (r.length > 0) {
            n.axes = r;
          }
          const s = this.assembleLegends();
          if (s.length > 0) {
            n.legends = s;
          }
          return n;
        }
        getName(e) {
          return wn((this.name ? `${this.name}_` : '') + e);
        }
        getDataName(e) {
          return this.getName(pg[e].toLowerCase());
        }
        requestDataName(e) {
          const n = this.getDataName(e);
          const t = this.component.data.outputNodeRefCounts;
          t[n] = (t[n] || 0) + 1;
          return n;
        }
        getSizeSignalRef(e) {
          if (AA(this.parent)) {
            const n = AO(e);
            const t = xi(n);
            const i = this.component.scales[t];
            if (i && !i.merged) {
              const e = i.get('type');
              const n = i.get('range');
              if (Ua(e) && dr(n)) {
                const e = i.get('name');
                const n = Nj(this, t);
                const r = zj(n);
                if (r) {
                  const n = el({ aggregate: 'distinct', field: r }, { expr: 'datum' });
                  return { signal: jO(e, i, n) };
                } else {
                  xo(Wr(t));
                  return null;
                }
              }
            }
          }
          return { signal: this.signalNameMap.get(this.getName(e)) };
        }
        lookupDataSource(e) {
          const n = this.component.data.outputNodes[e];
          if (!n) {
            return e;
          }
          return n.getSource();
        }
        getSignalName(e) {
          return this.signalNameMap.get(e);
        }
        renameSignal(e, n) {
          this.signalNameMap.rename(e, n);
        }
        renameScale(e, n) {
          this.scaleNameMap.rename(e, n);
        }
        renameProjection(e, n) {
          this.projectionNameMap.rename(e, n);
        }
        scaleName(e, n) {
          if (n) {
            return this.getName(e);
          }
          if (
            (Gt(e) && zi(e) && this.component.scales[e]) ||
            this.scaleNameMap.has(this.getName(e))
          ) {
            return this.scaleNameMap.get(this.getName(e));
          }
          return undefined;
        }
        projectionName(e) {
          if (e) {
            return this.getName('projection');
          }
          if (
            (this.component.projection && !this.component.projection.merged) ||
            this.projectionNameMap.has(this.getName('projection'))
          ) {
            return this.projectionNameMap.get(this.getName('projection'));
          }
          return undefined;
        }
        getScaleComponent(e) {
          if (!this.component.scales) {
            throw new Error(
              'getScaleComponent cannot be called before parseScale(). Make sure you have called parseScale or use parseUnitModelWithScale().'
            );
          }
          const n = this.component.scales[e];
          if (n && !n.merged) {
            return n;
          }
          return this.parent ? this.parent.getScaleComponent(e) : undefined;
        }
        getSelectionComponent(e, n) {
          let t = this.component.selection[e];
          if (!t && this.parent) {
            t = this.parent.getSelectionComponent(e, n);
          }
          if (!t) {
            throw new Error(Yr(n));
          }
          return t;
        }
        hasAxisOrientSignalRef() {
          var e, n;
          return (
            ((e = this.component.axes.x) === null || e === void 0
              ? void 0
              : e.some((e) => e.hasOrientSignalRef())) ||
            ((n = this.component.axes.y) === null || n === void 0
              ? void 0
              : n.some((e) => e.hasOrientSignalRef()))
          );
        }
      }
      class kA extends $A {
        vgField(e, n = {}) {
          const t = this.fieldDef(e);
          if (!t) {
            return undefined;
          }
          return el(t, n);
        }
        reduceFieldDef(e, n) {
          return Xl(
            this.getMapping(),
            (n, t, i) => {
              const r = ml(t);
              if (r) {
                return e(n, r, i);
              }
              return n;
            },
            n
          );
        }
        forEachFieldDef(e, n) {
          Ql(
            this.getMapping(),
            (n, t) => {
              const i = ml(n);
              if (i) {
                e(i, t);
              }
            },
            n
          );
        }
      }
      var CA =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class EA extends Hg {
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = Ze(n);
          const s =
            (t = this.transform.as) !== null && t !== void 0
              ? t
              : [undefined, undefined];
          this.transform.as = [
            (i = s[0]) !== null && i !== void 0 ? i : 'value',
            (r = s[1]) !== null && r !== void 0 ? r : 'density',
          ];
        }
        clone() {
          return new EA(null, Ze(this.transform));
        }
        dependentFields() {
          var e;
          return new Set([
            this.transform.density,
            ...((e = this.transform.groupby) !== null && e !== void 0 ? e : []),
          ]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `DensityTransform ${rn(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { density: n } = e,
            t = CA(e, ['density']);
          const i = Object.assign({ type: 'kde', field: n }, t);
          return i;
        }
      }
      class SA extends Hg {
        constructor(e, n) {
          super(e);
          this.filter = n;
        }
        clone() {
          return new SA(null, Object.assign({}, this.filter));
        }
        static make(e, n) {
          const { config: t, mark: i, markDef: r } = n;
          const s = Er('invalid', r, t);
          if (s !== 'filter') {
            return null;
          }
          const o = n.reduceFieldDef((e, t, r) => {
            const s = zi(r) && n.getScaleComponent(r);
            if (s) {
              const n = s.get('type');
              if (Wa(n) && t.aggregate !== 'count' && !$u(i)) {
                e[t.field] = t;
              }
            }
            return e;
          }, {});
          if (!yn(o).length) {
            return null;
          }
          return new SA(e, o);
        }
        dependentFields() {
          return new Set(yn(this.filter));
        }
        producedFields() {
          return new Set();
        }
        hash() {
          return `FilterInvalid ${rn(this.filter)}`;
        }
        assemble() {
          const e = yn(this.filter).reduce((e, n) => {
            const t = this.filter[n];
            const i = el(t, { expr: 'datum' });
            if (t !== null) {
              if (t.type === 'temporal') {
                e.push(`(isDate(${i}) || (isValid(${i}) && isFinite(+${i})))`);
              } else if (t.type === 'quantitative') {
                e.push(`isValid(${i})`);
                e.push(`isFinite(+${i})`);
              } else {
              }
            }
            return e;
          }, []);
          return e.length > 0 ? { type: 'filter', expr: e.join(' && ') } : null;
        }
      }
      class BA extends Hg {
        constructor(e, n) {
          super(e);
          this.transform = n;
          this.transform = Ze(n);
          const { flatten: t, as: i = [] } = this.transform;
          this.transform.as = t.map((e, n) => {
            var t;
            return (t = i[n]) !== null && t !== void 0 ? t : e;
          });
        }
        clone() {
          return new BA(this.parent, Ze(this.transform));
        }
        dependentFields() {
          return new Set(this.transform.flatten);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `FlattenTransform ${rn(this.transform)}`;
        }
        assemble() {
          const { flatten: e, as: n } = this.transform;
          const t = { type: 'flatten', fields: e, as: n };
          return t;
        }
      }
      class _A extends Hg {
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = Ze(n);
          const s =
            (t = this.transform.as) !== null && t !== void 0
              ? t
              : [undefined, undefined];
          this.transform.as = [
            (i = s[0]) !== null && i !== void 0 ? i : 'key',
            (r = s[1]) !== null && r !== void 0 ? r : 'value',
          ];
        }
        clone() {
          return new _A(null, Ze(this.transform));
        }
        dependentFields() {
          return new Set(this.transform.fold);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `FoldTransform ${rn(this.transform)}`;
        }
        assemble() {
          const { fold: e, as: n } = this.transform;
          const t = { type: 'fold', fields: e, as: n };
          return t;
        }
      }
      class PA extends Hg {
        constructor(e, n, t, i) {
          super(e);
          this.fields = n;
          this.geojson = t;
          this.signal = i;
        }
        clone() {
          return new PA(null, Ze(this.fields), this.geojson, this.signal);
        }
        static parseAll(e, n) {
          if (n.component.projection && !n.component.projection.isFit) {
            return e;
          }
          let t = 0;
          for (const i of [
            [et, Zn],
            [tt, nt],
          ]) {
            const r = i.map((e) => {
              const t = hl(n.encoding[e]);
              return Lc(t)
                ? t.field
                : qc(t)
                ? { expr: `${t.datum}` }
                : Vc(t)
                ? { expr: `${t['value']}` }
                : undefined;
            });
            if (r[0] || r[1]) {
              e = new PA(e, r, null, n.getName(`geojson_${t++}`));
            }
          }
          if (n.channelHasField(ot)) {
            const i = n.typedFieldDef(ot);
            if (i.type === xa) {
              e = new PA(e, null, i.field, n.getName(`geojson_${t++}`));
            }
          }
          return e;
        }
        dependentFields() {
          var e;
          const n = ((e = this.fields) !== null && e !== void 0 ? e : []).filter(je);
          return new Set([...(this.geojson ? [this.geojson] : []), ...n]);
        }
        producedFields() {
          return new Set();
        }
        hash() {
          return `GeoJSON ${this.geojson} ${this.signal} ${rn(this.fields)}`;
        }
        assemble() {
          return [
            ...(this.geojson
              ? [{ type: 'filter', expr: `isValid(datum["${this.geojson}"])` }]
              : []),
            Object.assign(
              Object.assign(
                Object.assign(
                  { type: 'geojson' },
                  this.fields ? { fields: this.fields } : {}
                ),
                this.geojson ? { geojson: this.geojson } : {}
              ),
              { signal: this.signal }
            ),
          ];
        }
      }
      class zA extends Hg {
        constructor(e, n, t, i) {
          super(e);
          this.projection = n;
          this.fields = t;
          this.as = i;
        }
        clone() {
          return new zA(null, this.projection, Ze(this.fields), Ze(this.as));
        }
        static parseAll(e, n) {
          if (!n.projectionName()) {
            return e;
          }
          for (const t of [
            [et, Zn],
            [tt, nt],
          ]) {
            const i = t.map((e) => {
              const t = hl(n.encoding[e]);
              return Lc(t)
                ? t.field
                : qc(t)
                ? { expr: `${t.datum}` }
                : Vc(t)
                ? { expr: `${t['value']}` }
                : undefined;
            });
            const r = t[0] === tt ? '2' : '';
            if (i[0] || i[1]) {
              e = new zA(e, n.projectionName(), i, [
                n.getName(`x${r}`),
                n.getName(`y${r}`),
              ]);
            }
          }
          return e;
        }
        dependentFields() {
          return new Set(this.fields.filter(je));
        }
        producedFields() {
          return new Set(this.as);
        }
        hash() {
          return `Geopoint ${this.projection} ${rn(this.fields)} ${rn(this.as)}`;
        }
        assemble() {
          return {
            type: 'geopoint',
            projection: this.projection,
            fields: this.fields,
            as: this.as,
          };
        }
      }
      class NA extends Hg {
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        clone() {
          return new NA(null, Ze(this.transform));
        }
        dependentFields() {
          var e;
          return new Set([
            this.transform.impute,
            this.transform.key,
            ...((e = this.transform.groupby) !== null && e !== void 0 ? e : []),
          ]);
        }
        producedFields() {
          return new Set([this.transform.impute]);
        }
        processSequence(e) {
          const { start: n = 0, stop: t, step: i } = e;
          const r = [n, t, ...(i ? [i] : [])].join(',');
          return { signal: `sequence(${r})` };
        }
        static makeFromTransform(e, n) {
          return new NA(e, n);
        }
        static makeFromEncoding(e, n) {
          const t = n.encoding;
          const i = t.x;
          const r = t.y;
          if (Lc(i) && Lc(r)) {
            const s = i.impute ? i : r.impute ? r : undefined;
            if (s === undefined) {
              return undefined;
            }
            const o = i.impute ? r : r.impute ? i : undefined;
            const { method: a, value: u, frame: c, keyvals: l } = s.impute;
            const f = Jl(n.mark, t);
            return new NA(
              e,
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        { impute: s.field, key: o.field },
                        a ? { method: a } : {}
                      ),
                      u !== undefined ? { value: u } : {}
                    ),
                    c ? { frame: c } : {}
                  ),
                  l !== undefined ? { keyvals: l } : {}
                ),
                f.length ? { groupby: f } : {}
              )
            );
          }
          return null;
        }
        hash() {
          return `Impute ${rn(this.transform)}`;
        }
        assemble() {
          const {
            impute: e,
            key: n,
            keyvals: t,
            method: i,
            groupby: r,
            value: s,
            frame: o = [null, null],
          } = this.transform;
          const a = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  { type: 'impute', field: e, key: n },
                  t ? { keyvals: pp(t) ? this.processSequence(t) : t } : {}
                ),
                { method: 'value' }
              ),
              r ? { groupby: r } : {}
            ),
            { value: !i || i === 'value' ? s : null }
          );
          if (i && i !== 'value') {
            const n = Object.assign(
              {
                type: 'window',
                as: [`imputed_${e}_value`],
                ops: [i],
                fields: [e],
                frame: o,
                ignorePeers: false,
              },
              r ? { groupby: r } : {}
            );
            const t = {
              type: 'formula',
              expr: `datum.${e} === null ? datum.imputed_${e}_value : datum.${e}`,
              as: e,
            };
            return [a, n, t];
          } else {
            return [a];
          }
        }
      }
      var MA =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class TA extends Hg {
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = Ze(n);
          const s =
            (t = this.transform.as) !== null && t !== void 0
              ? t
              : [undefined, undefined];
          this.transform.as = [
            (i = s[0]) !== null && i !== void 0 ? i : n.on,
            (r = s[1]) !== null && r !== void 0 ? r : n.loess,
          ];
        }
        clone() {
          return new TA(null, Ze(this.transform));
        }
        dependentFields() {
          var e;
          return new Set([
            this.transform.loess,
            this.transform.on,
            ...((e = this.transform.groupby) !== null && e !== void 0 ? e : []),
          ]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `LoessTransform ${rn(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { loess: n, on: t } = e,
            i = MA(e, ['loess', 'on']);
          const r = Object.assign({ type: 'loess', x: t, y: n }, i);
          return r;
        }
      }
      class LA extends Hg {
        constructor(e, n, t) {
          super(e);
          this.transform = n;
          this.secondary = t;
        }
        clone() {
          return new LA(null, Ze(this.transform), this.secondary);
        }
        static make(e, n, t, i) {
          const r = n.component.data.sources;
          const { from: s } = t;
          let o = null;
          if (mp(s)) {
            let e = cD(s.data, r);
            if (!e) {
              e = new Rw(s.data);
              r.push(e);
            }
            const t = n.getName(`lookup_${i}`);
            o = new Gg(e, t, pg.Lookup, n.component.data.outputNodeRefCounts);
            n.component.data.outputNodes[t] = o;
          } else if (hp(s)) {
            const e = s.param;
            t = Object.assign({ as: e }, t);
            let i;
            try {
              i = n.getSelectionComponent(wn(e), e);
            } catch (a) {
              throw new Error(Jr(e));
            }
            o = i.materialized;
            if (!o) {
              throw new Error(Kr(e));
            }
          }
          return new LA(e, t, o.getSource());
        }
        dependentFields() {
          return new Set([this.transform.lookup]);
        }
        producedFields() {
          return new Set(
            this.transform.as ? J(this.transform.as) : this.transform.from.fields
          );
        }
        hash() {
          return `Lookup ${rn({
            transform: this.transform,
            secondary: this.secondary,
          })}`;
        }
        assemble() {
          let e;
          if (this.transform.from.fields) {
            e = Object.assign(
              { values: this.transform.from.fields },
              this.transform.as ? { as: J(this.transform.as) } : {}
            );
          } else {
            let n = this.transform.as;
            if (!je(n)) {
              xo(us);
              n = '_lookup';
            }
            e = { as: [n] };
          }
          return Object.assign(
            Object.assign(
              {
                type: 'lookup',
                from: this.secondary,
                key: this.transform.from.key,
                fields: [this.transform.lookup],
              },
              e
            ),
            this.transform.default ? { default: this.transform.default } : {}
          );
        }
      }
      var RA =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class qA extends Hg {
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = Ze(n);
          const s =
            (t = this.transform.as) !== null && t !== void 0
              ? t
              : [undefined, undefined];
          this.transform.as = [
            (i = s[0]) !== null && i !== void 0 ? i : 'prob',
            (r = s[1]) !== null && r !== void 0 ? r : 'value',
          ];
        }
        clone() {
          return new qA(null, Ze(this.transform));
        }
        dependentFields() {
          var e;
          return new Set([
            this.transform.quantile,
            ...((e = this.transform.groupby) !== null && e !== void 0 ? e : []),
          ]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `QuantileTransform ${rn(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { quantile: n } = e,
            t = RA(e, ['quantile']);
          const i = Object.assign({ type: 'quantile', field: n }, t);
          return i;
        }
      }
      var UA =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      class WA extends Hg {
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = Ze(n);
          const s =
            (t = this.transform.as) !== null && t !== void 0
              ? t
              : [undefined, undefined];
          this.transform.as = [
            (i = s[0]) !== null && i !== void 0 ? i : n.on,
            (r = s[1]) !== null && r !== void 0 ? r : n.regression,
          ];
        }
        clone() {
          return new WA(null, Ze(this.transform));
        }
        dependentFields() {
          var e;
          return new Set([
            this.transform.regression,
            this.transform.on,
            ...((e = this.transform.groupby) !== null && e !== void 0 ? e : []),
          ]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `RegressionTransform ${rn(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { regression: n, on: t } = e,
            i = UA(e, ['regression', 'on']);
          const r = Object.assign({ type: 'regression', x: t, y: n }, i);
          return r;
        }
      }
      class IA extends Hg {
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        clone() {
          return new IA(null, Ze(this.transform));
        }
        addDimensions(e) {
          var n;
          this.transform.groupby = fn(
            ((n = this.transform.groupby) !== null && n !== void 0 ? n : []).concat(e),
            (e) => e
          );
        }
        producedFields() {
          return undefined;
        }
        dependentFields() {
          var e;
          return new Set([
            this.transform.pivot,
            this.transform.value,
            ...((e = this.transform.groupby) !== null && e !== void 0 ? e : []),
          ]);
        }
        hash() {
          return `PivotTransform ${rn(this.transform)}`;
        }
        assemble() {
          const { pivot: e, value: n, groupby: t, limit: i, op: r } = this.transform;
          return Object.assign(
            Object.assign(
              Object.assign(
                { type: 'pivot', field: e, value: n },
                i !== undefined ? { limit: i } : {}
              ),
              r !== undefined ? { op: r } : {}
            ),
            t !== undefined ? { groupby: t } : {}
          );
        }
      }
      class HA extends Hg {
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        clone() {
          return new HA(null, Ze(this.transform));
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return new Set();
        }
        hash() {
          return `SampleTransform ${rn(this.transform)}`;
        }
        assemble() {
          return { type: 'sample', size: this.transform.sample };
        }
      }
      function GA(e) {
        let n = 0;
        function t(i, r) {
          var s;
          if (i instanceof Rw) {
            if (!i.isGenerator && !og(i.data)) {
              e.push(r);
              const n = { name: null, source: r.name, transform: [] };
              r = n;
            }
          }
          if (i instanceof Nw) {
            if (i.parent instanceof Rw && !r.source) {
              r.format = Object.assign(
                Object.assign({}, (s = r.format) !== null && s !== void 0 ? s : {}),
                { parse: i.assembleFormatParse() }
              );
              r.transform.push(...i.assembleTransforms(true));
            } else {
              r.transform.push(...i.assembleTransforms());
            }
          }
          if (i instanceof Ew) {
            if (!r.name) {
              r.name = `data_${n++}`;
            }
            if (!r.source || r.transform.length > 0) {
              e.push(r);
              i.data = r.name;
            } else {
              i.data = r.source;
            }
            e.push(...i.assemble());
            return;
          }
          if (
            i instanceof Tw ||
            i instanceof Lw ||
            i instanceof SA ||
            i instanceof Fx ||
            i instanceof tO ||
            i instanceof zA ||
            i instanceof Cw ||
            i instanceof LA ||
            i instanceof cj ||
            i instanceof sj ||
            i instanceof _A ||
            i instanceof BA ||
            i instanceof EA ||
            i instanceof TA ||
            i instanceof qA ||
            i instanceof WA ||
            i instanceof Mw ||
            i instanceof HA ||
            i instanceof IA
          ) {
            r.transform.push(i.assemble());
          }
          if (
            i instanceof Fw ||
            i instanceof Yg ||
            i instanceof NA ||
            i instanceof uj ||
            i instanceof PA
          ) {
            r.transform.push(...i.assemble());
          }
          if (i instanceof Gg) {
            if (r.source && r.transform.length === 0) {
              i.setSource(r.source);
            } else if (i.parent instanceof Gg) {
              i.setSource(r.name);
            } else {
              if (!r.name) {
                r.name = `data_${n++}`;
              }
              i.setSource(r.name);
              if (i.numChildren() === 1) {
                e.push(r);
                const n = { name: null, source: r.name, transform: [] };
                r = n;
              }
            }
          }
          switch (i.numChildren()) {
            case 0:
              if (i instanceof Gg && (!r.source || r.transform.length > 0)) {
                e.push(r);
              }
              break;
            case 1:
              t(i.children[0], r);
              break;
            default: {
              if (!r.name) {
                r.name = `data_${n++}`;
              }
              let s = r.name;
              if (!r.source || r.transform.length > 0) {
                e.push(r);
              } else {
                s = r.source;
              }
              for (const e of i.children) {
                const n = { name: null, source: s, transform: [] };
                t(e, n);
              }
              break;
            }
          }
        }
        return t;
      }
      function VA(e) {
        const n = [];
        const t = GA(n);
        for (const i of e.children) {
          t(i, { source: e.name, name: null, transform: [] });
        }
        return n;
      }
      function YA(e, n) {
        var t, i;
        const r = [];
        const s = GA(r);
        let o = 0;
        for (const u of e.sources) {
          if (!u.hasName()) {
            u.dataName = `source_${o++}`;
          }
          const e = u.assemble();
          s(u, e);
        }
        for (const u of r) {
          if (u.transform.length === 0) {
            delete u.transform;
          }
        }
        let a = 0;
        for (const [u, c] of r.entries()) {
          if (
            ((t = c.transform) !== null && t !== void 0 ? t : []).length === 0 &&
            !c.source
          ) {
            r.splice(a++, 0, r.splice(u, 1)[0]);
          }
        }
        for (const u of r) {
          for (const n of (i = u.transform) !== null && i !== void 0 ? i : []) {
            if (n.type === 'lookup') {
              n.from = e.outputNodes[n.from].getSource();
            }
          }
        }
        for (const u of r) {
          if (u.name in n) {
            u.values = n[u.name];
          }
        }
        return r;
      }
      function QA(e) {
        if (e === 'top' || e === 'left' || fr(e)) {
          return 'header';
        }
        return 'footer';
      }
      function XA(e) {
        for (const n of Bt) {
          JA(e, n);
        }
        ZA(e, 'x');
        ZA(e, 'y');
      }
      function JA(e, n) {
        var t;
        const { facet: i, config: r, child: s, component: o } = e;
        if (e.channelHasField(n)) {
          const a = i[n];
          const u = sO('title', null, r, n);
          let c = ll(a, r, {
            allowDisabling: true,
            includeDefault: u === undefined || !!u,
          });
          if (s.component.layoutHeaders[n].title) {
            c = F(c) ? c.join(', ') : c;
            c += ` / ${s.component.layoutHeaders[n].title}`;
            s.component.layoutHeaders[n].title = null;
          }
          const l = sO('labelOrient', a.header, r, n);
          const f =
            a.header !== null
              ? _n(
                  (t = a.header) === null || t === void 0 ? void 0 : t.labels,
                  r.header.labels,
                  true
                )
              : false;
          const d = on(['bottom', 'right'], l) ? 'footer' : 'header';
          o.layoutHeaders[n] = {
            title: a.header !== null ? c : null,
            facetFieldDef: a,
            [d]: n === 'facet' ? [] : [KA(e, n, f)],
          };
        }
      }
      function KA(e, n, t) {
        const i = n === 'row' ? 'height' : 'width';
        return {
          labels: t,
          sizeSignal: e.child.component.layoutSize.get(i)
            ? e.child.getSizeSignalRef(i)
            : undefined,
          axes: [],
        };
      }
      function ZA(e, n) {
        var t;
        const { child: i } = e;
        if (i.component.axes[n]) {
          const { layoutHeaders: r, resolve: s } = e.component;
          s.axis[n] = $O(s, n);
          if (s.axis[n] === 'shared') {
            const s = n === 'x' ? 'column' : 'row';
            const o = r[s];
            for (const r of i.component.axes[n]) {
              const n = QA(r.get('orient'));
              (t = o[n]) !== null && t !== void 0 ? t : (o[n] = [KA(e, s, false)]);
              const i = zx(r, 'main', e.config, { header: true });
              if (i) {
                o[n][0].axes.push(i);
              }
              r.mainExtracted = true;
            }
          } else {
          }
        }
      }
      function eD(e) {
        tD(e);
        iD(e, 'width');
        iD(e, 'height');
      }
      function nD(e) {
        tD(e);
        const n = e.layout.columns === 1 ? 'width' : 'childWidth';
        const t = e.layout.columns === undefined ? 'height' : 'childHeight';
        iD(e, n);
        iD(e, t);
      }
      function tD(e) {
        for (const n of e.children) {
          n.parseLayoutSize();
        }
      }
      function iD(e, n) {
        var t;
        const i = AO(n);
        const r = xi(i);
        const s = e.component.resolve;
        const o = e.component.layoutSize;
        let a;
        for (const u of e.children) {
          const n = u.component.layoutSize.getWithExplicit(i);
          const o = (t = s.scale[r]) !== null && t !== void 0 ? t : FO(r, e);
          if (o === 'independent' && n.value === 'step') {
            a = undefined;
            break;
          }
          if (a) {
            if (o === 'independent' && a.value !== n.value) {
              a = undefined;
              break;
            }
            a = rg(a, n, i, '');
          } else {
            a = n;
          }
        }
        if (a) {
          for (const t of e.children) {
            e.renameSignal(t.getName(i), e.getName(n));
            t.component.layoutSize.set(i, 'merged', false);
          }
          o.setWithExplicit(n, a);
        } else {
          o.setWithExplicit(n, { explicit: false, value: undefined });
        }
      }
      function rD(e) {
        const { size: n, component: t } = e;
        for (const i of hi) {
          const r = Kt(i);
          if (n[r]) {
            const e = n[r];
            t.layoutSize.set(r, rd(e) ? 'step' : e, true);
          } else {
            const n = sD(e, r);
            t.layoutSize.set(r, n, false);
          }
        }
      }
      function sD(e, n) {
        const t = n === 'width' ? 'x' : 'y';
        const i = e.config;
        const r = e.getScaleComponent(t);
        if (r) {
          const e = r.get('type');
          const t = r.get('range');
          if (Ua(e)) {
            const e = pd(i.view, n);
            if (dr(t) || rd(e)) {
              return 'step';
            } else {
              return e;
            }
          } else {
            return fd(i.view, n);
          }
        } else if (e.hasProjection || e.mark === 'arc') {
          return fd(i.view, n);
        } else {
          const e = pd(i.view, n);
          return rd(e) ? e.step : e;
        }
      }
      function oD(e, n, t) {
        return el(
          n,
          Object.assign({ suffix: `by_${el(e)}` }, t !== null && t !== void 0 ? t : {})
        );
      }
      class aD extends kA {
        constructor(e, n, t, i) {
          super(e, 'facet', n, t, i, e.resolve);
          this.child = fF(e.spec, this, this.getName('child'), undefined, i);
          this.children = [this.child];
          this.facet = this.initFacet(e.facet);
        }
        initFacet(e) {
          if (!Ac(e)) {
            return { facet: this.initFacetFieldDef(e, 'facet') };
          }
          const n = yn(e);
          const t = {};
          for (const i of n) {
            if (![Un, Wn].includes(i)) {
              xo(Os(i, 'facet'));
              break;
            }
            const n = e[i];
            if (n.field === undefined) {
              xo(vs(n, i));
              break;
            }
            t[i] = this.initFacetFieldDef(n, i);
          }
          return t;
        }
        initFacetFieldDef(e, n) {
          const t = xl(e, n);
          if (t.header) {
            t.header = ar(t.header);
          } else if (t.header === null) {
            t.header = null;
          }
          return t;
        }
        channelHasField(e) {
          return !!this.facet[e];
        }
        fieldDef(e) {
          return this.facet[e];
        }
        parseData() {
          this.component.data = dD(this);
          this.child.parseData();
        }
        parseLayoutSize() {
          tD(this);
        }
        parseSelections() {
          this.child.parseSelections();
          this.component.selection = this.child.component.selection;
        }
        parseMarkGroup() {
          this.child.parseMarkGroup();
        }
        parseAxesAndHeaders() {
          this.child.parseAxesAndHeaders();
          XA(this);
        }
        assembleSelectionTopLevelSignals(e) {
          return this.child.assembleSelectionTopLevelSignals(e);
        }
        assembleSignals() {
          this.child.assembleSignals();
          return [];
        }
        assembleSelectionData(e) {
          return this.child.assembleSelectionData(e);
        }
        getHeaderLayoutMixins() {
          var e, n, t;
          const i = {};
          for (const r of Bt) {
            for (const s of uO) {
              const o = this.component.layoutHeaders[r];
              const a = o[s];
              const { facetFieldDef: u } = o;
              if (u) {
                const n = sO('titleOrient', u.header, this.config, r);
                if (['right', 'bottom'].includes(n)) {
                  const t = rO(r, n);
                  (e = i.titleAnchor) !== null && e !== void 0
                    ? e
                    : (i.titleAnchor = {});
                  i.titleAnchor[t] = 'end';
                }
              }
              if (a === null || a === void 0 ? void 0 : a[0]) {
                const e = r === 'row' ? 'height' : 'width';
                const a = s === 'header' ? 'headerBand' : 'footerBand';
                if (r !== 'facet' && !this.child.component.layoutSize.get(e)) {
                  (n = i[a]) !== null && n !== void 0 ? n : (i[a] = {});
                  i[a][r] = 0.5;
                }
                if (o.title) {
                  (t = i.offset) !== null && t !== void 0 ? t : (i.offset = {});
                  i.offset[r === 'row' ? 'rowTitle' : 'columnTitle'] = 10;
                }
              }
            }
          }
          return i;
        }
        assembleDefaultLayout() {
          const { column: e, row: n } = this.facet;
          const t = e ? this.columnDistinctSignal() : n ? 1 : undefined;
          let i = 'all';
          if (!n && this.component.resolve.scale.x === 'independent') {
            i = 'none';
          } else if (!e && this.component.resolve.scale.y === 'independent') {
            i = 'none';
          }
          return Object.assign(
            Object.assign(
              Object.assign({}, this.getHeaderLayoutMixins()),
              t ? { columns: t } : {}
            ),
            { bounds: 'full', align: i }
          );
        }
        assembleLayoutSignals() {
          return this.child.assembleLayoutSignals();
        }
        columnDistinctSignal() {
          if (this.parent && this.parent instanceof aD) {
            return undefined;
          } else {
            const e = this.getName('column_domain');
            return { signal: `length(data('${e}'))` };
          }
        }
        assembleGroupStyle() {
          return undefined;
        }
        assembleGroup(e) {
          if (this.parent && this.parent instanceof aD) {
            return Object.assign(
              Object.assign(
                {},
                this.channelHasField('column')
                  ? {
                      encode: {
                        update: {
                          columns: {
                            field: el(this.facet.column, { prefix: 'distinct' }),
                          },
                        },
                      },
                    }
                  : {}
              ),
              super.assembleGroup(e)
            );
          }
          return super.assembleGroup(e);
        }
        getCardinalityAggregateForChild() {
          const e = [];
          const n = [];
          const t = [];
          if (this.child instanceof aD) {
            if (this.child.channelHasField('column')) {
              const i = el(this.child.facet.column);
              e.push(i);
              n.push('distinct');
              t.push(`distinct_${i}`);
            }
          } else {
            for (const i of hi) {
              const r = this.child.component.scales[i];
              if (r && !r.merged) {
                const s = r.get('type');
                const o = r.get('range');
                if (Ua(s) && dr(o)) {
                  const r = Nj(this.child, i);
                  const s = zj(r);
                  if (s) {
                    e.push(s);
                    n.push('distinct');
                    t.push(`distinct_${s}`);
                  } else {
                    xo(Wr(i));
                  }
                }
              }
            }
          }
          return { fields: e, ops: n, as: t };
        }
        assembleFacet() {
          const { name: e, data: n } = this.component.data.facetRoot;
          const { row: t, column: i } = this.facet;
          const { fields: r, ops: s, as: o } = this.getCardinalityAggregateForChild();
          const a = [];
          for (const c of Bt) {
            const e = this.facet[c];
            if (e) {
              a.push(el(e));
              const { bin: n, sort: u } = e;
              if (nr(n)) {
                a.push(el(e, { binSuffix: 'end' }));
              }
              if (wc(u)) {
                const { field: n, op: a = yc } = u;
                const c = oD(e, u);
                if (t && i) {
                  r.push(c);
                  s.push('max');
                  o.push(c);
                } else {
                  r.push(n);
                  s.push(a);
                  o.push(c);
                }
              } else if (F(u)) {
                const n = iO(e, c);
                r.push(n);
                s.push('max');
                o.push(n);
              }
            }
          }
          const u = !!t && !!i;
          return Object.assign(
            { name: e, data: n, groupby: a },
            u || r.length > 0
              ? {
                  aggregate: Object.assign(
                    Object.assign({}, u ? { cross: u } : {}),
                    r.length ? { fields: r, ops: s, as: o } : {}
                  ),
                }
              : {}
          );
        }
        facetSortFields(e) {
          const { facet: n } = this;
          const t = n[e];
          if (t) {
            if (wc(t.sort)) {
              return [oD(t, t.sort, { expr: 'datum' })];
            } else if (F(t.sort)) {
              return [iO(t, e, { expr: 'datum' })];
            }
            return [el(t, { expr: 'datum' })];
          }
          return [];
        }
        facetSortOrder(e) {
          const { facet: n } = this;
          const t = n[e];
          if (t) {
            const { sort: e } = t;
            const n = (wc(e) ? e.order : !F(e) && e) || 'ascending';
            return [n];
          }
          return [];
        }
        assembleLabelTitle() {
          var e;
          const { facet: n, config: t } = this;
          if (n.facet) {
            return gO(n.facet, 'facet', t);
          }
          const i = { row: ['top', 'bottom'], column: ['left', 'right'] };
          for (const r of aO) {
            if (n[r]) {
              const s = sO(
                'labelOrient',
                (e = n[r]) === null || e === void 0 ? void 0 : e.header,
                t,
                r
              );
              if (i[r].includes(s)) {
                return gO(n[r], r, t);
              }
            }
          }
          return undefined;
        }
        assembleMarks() {
          const { child: e } = this;
          const n = this.component.data.facetRoot;
          const t = VA(n);
          const i = e.assembleGroupEncodeEntry(false);
          const r = this.assembleLabelTitle() || e.assembleTitle();
          const s = e.assembleGroupStyle();
          const o = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      { name: this.getName('cell'), type: 'group' },
                      r ? { title: r } : {}
                    ),
                    s ? { style: s } : {}
                  ),
                  {
                    from: { facet: this.assembleFacet() },
                    sort: {
                      field: Bt.map((e) => this.facetSortFields(e)).flat(),
                      order: Bt.map((e) => this.facetSortOrder(e)).flat(),
                    },
                  }
                ),
                t.length > 0 ? { data: t } : {}
              ),
              i ? { encode: { update: i } } : {}
            ),
            e.assembleGroup(Tg(this, []))
          );
          return [o];
        }
        getMapping() {
          return this.facet;
        }
      }
      function uD(e, n) {
        const { row: t, column: i } = n;
        if (t && i) {
          let n = null;
          for (const r of [t, i]) {
            if (wc(r.sort)) {
              const { field: t, op: i = yc } = r.sort;
              e = n = new sj(e, {
                joinaggregate: [
                  { op: i, field: t, as: oD(r, r.sort, { forAs: true }) },
                ],
                groupby: [el(r)],
              });
            }
          }
          return n;
        }
        return null;
      }
      function cD(e, n) {
        var t, i, r, s;
        for (const o of n) {
          const n = o.data;
          if (e.name && o.hasName() && e.name !== o.dataName) {
            continue;
          }
          const a = (t = e['format']) === null || t === void 0 ? void 0 : t.mesh;
          const u = (i = n.format) === null || i === void 0 ? void 0 : i.feature;
          if (a && u) {
            continue;
          }
          const c = (r = e['format']) === null || r === void 0 ? void 0 : r.feature;
          if ((c || u) && c !== u) {
            continue;
          }
          const l = (s = n.format) === null || s === void 0 ? void 0 : s.mesh;
          if ((a || l) && a !== l) {
            continue;
          }
          if (ag(e) && ag(n)) {
            if (Ke(e.values, n.values)) {
              return o;
            }
          } else if (og(e) && og(n)) {
            if (e.url === n.url) {
              return o;
            }
          } else if (ug(e)) {
            if (e.name === o.dataName) {
              return o;
            }
          }
        }
        return null;
      }
      function lD(e, n) {
        if (e.data || !e.parent) {
          if (e.data === null) {
            const e = new Rw({ values: [] });
            n.push(e);
            return e;
          }
          const t = cD(e.data, n);
          if (t) {
            if (!cg(e.data)) {
              t.data.format = cn({}, e.data.format, t.data.format);
            }
            if (!t.hasName() && e.data.name) {
              t.dataName = e.data.name;
            }
            return t;
          } else {
            const t = new Rw(e.data);
            n.push(t);
            return t;
          }
        } else {
          return e.parent.component.data.facetRoot
            ? e.parent.component.data.facetRoot
            : e.parent.component.data.main;
        }
      }
      function fD(e, n, t) {
        var i, r;
        let s = 0;
        for (const o of n.transforms) {
          let a = undefined;
          let u;
          if (Fp(o)) {
            u = e = new tO(e, o);
            a = 'derived';
          } else if (dp(o)) {
            const r = _w(o);
            u = e =
              (i = Nw.makeWithAncestors(e, {}, r, t)) !== null && i !== void 0 ? i : e;
            e = new Fx(e, n, o.filter);
          } else if ($p(o)) {
            u = e = Fw.makeFromTransform(e, o, n);
            a = 'number';
          } else if (Cp(o)) {
            a = 'date';
            const n = t.getWithExplicit(o.field);
            if (n.value === undefined) {
              e = new Nw(e, { [o.field]: a });
              t.set(o.field, a, false);
            }
            u = e = Yg.makeFromTransform(e, o);
          } else if (Ep(o)) {
            u = e = Cw.makeFromTransform(e, o);
            a = 'number';
            if (kh(n)) {
              e = new Mw(e);
            }
          } else if (gp(o)) {
            u = e = LA.make(e, n, o, s++);
            a = 'derived';
          } else if (jp(o)) {
            u = e = new cj(e, o);
            a = 'number';
          } else if (Ap(o)) {
            u = e = new sj(e, o);
            a = 'number';
          } else if (Sp(o)) {
            u = e = uj.makeFromTransform(e, o);
            a = 'derived';
          } else if (Bp(o)) {
            u = e = new _A(e, o);
            a = 'derived';
          } else if (Dp(o)) {
            u = e = new BA(e, o);
            a = 'derived';
          } else if (bp(o)) {
            u = e = new IA(e, o);
            a = 'derived';
          } else if (wp(o)) {
            e = new HA(e, o);
          } else if (kp(o)) {
            u = e = NA.makeFromTransform(e, o);
            a = 'derived';
          } else if (yp(o)) {
            u = e = new EA(e, o);
            a = 'derived';
          } else if (vp(o)) {
            u = e = new qA(e, o);
            a = 'derived';
          } else if (xp(o)) {
            u = e = new WA(e, o);
            a = 'derived';
          } else if (Op(o)) {
            u = e = new TA(e, o);
            a = 'derived';
          } else {
            xo(as(o));
            continue;
          }
          if (u && a !== undefined) {
            for (const e of (r = u.producedFields()) !== null && r !== void 0
              ? r
              : []) {
              t.set(e, a, false);
            }
          }
        }
        return e;
      }
      function dD(e) {
        var n, t, i, r, s, o, a, u, c, l;
        let f = lD(e, e.component.data.sources);
        const { outputNodes: d, outputNodeRefCounts: p } = e.component.data;
        const g = e.data;
        const m = g && (cg(g) || og(g) || ag(g));
        const h =
          !m && e.parent ? e.parent.component.data.ancestorParse.clone() : new sg();
        if (cg(g)) {
          if (lg(g)) {
            f = new Lw(f, g.sequence);
          } else if (dg(g)) {
            f = new Tw(f, g.graticule);
          }
          h.parseNothing = true;
        } else if (
          ((n = g === null || g === void 0 ? void 0 : g.format) === null || n === void 0
            ? void 0
            : n.parse) === null
        ) {
          h.parseNothing = true;
        }
        f = (t = Nw.makeExplicit(f, e, h)) !== null && t !== void 0 ? t : f;
        f = new Mw(f);
        const b = e.parent && FA(e.parent);
        if (jA(e) || AA(e)) {
          if (b) {
            f = (i = Fw.makeFromEncoding(f, e)) !== null && i !== void 0 ? i : f;
          }
        }
        if (e.transforms.length > 0) {
          f = fD(f, e, h);
        }
        const y = zw(e);
        const v = Pw(e);
        f =
          (r = Nw.makeWithAncestors(
            f,
            {},
            Object.assign(Object.assign({}, y), v),
            h
          )) !== null && r !== void 0
            ? r
            : f;
        if (jA(e)) {
          f = PA.parseAll(f, e);
          f = zA.parseAll(f, e);
        }
        if (jA(e) || AA(e)) {
          if (!b) {
            f = (s = Fw.makeFromEncoding(f, e)) !== null && s !== void 0 ? s : f;
          }
          f = (o = Yg.makeFromEncoding(f, e)) !== null && o !== void 0 ? o : f;
          f = tO.parseAllForSortIndex(f, e);
        }
        const x = e.getDataName(pg.Raw);
        const O = new Gg(f, x, pg.Raw, p);
        d[x] = O;
        f = O;
        if (jA(e)) {
          const n = Cw.makeFromEncoding(f, e);
          if (n) {
            f = n;
            if (kh(e)) {
              f = new Mw(f);
            }
          }
          f = (a = NA.makeFromEncoding(f, e)) !== null && a !== void 0 ? a : f;
          f = (u = uj.makeFromEncoding(f, e)) !== null && u !== void 0 ? u : f;
        }
        if (jA(e)) {
          f = (c = SA.make(f, e)) !== null && c !== void 0 ? c : f;
        }
        const w = e.getDataName(pg.Main);
        const j = new Gg(f, w, pg.Main, p);
        d[w] = j;
        f = j;
        if (jA(e)) {
          Ex(e, j);
        }
        let A = null;
        if (AA(e)) {
          const n = e.getName('facet');
          f = (l = uD(f, e.facet)) !== null && l !== void 0 ? l : f;
          A = new Ew(f, e, n, j.getSource());
          d[n] = A;
        }
        return Object.assign(Object.assign({}, e.component.data), {
          outputNodes: d,
          outputNodeRefCounts: p,
          raw: O,
          main: j,
          facetRoot: A,
          ancestorParse: h,
        });
      }
      class pD extends $A {
        constructor(e, n, t, i) {
          var r, s, o, a;
          super(e, 'concat', n, t, i, e.resolve);
          if (
            ((s = (r = e.resolve) === null || r === void 0 ? void 0 : r.axis) ===
              null || s === void 0
              ? void 0
              : s.x) === 'shared' ||
            ((a = (o = e.resolve) === null || o === void 0 ? void 0 : o.axis) ===
              null || a === void 0
              ? void 0
              : a.y) === 'shared'
          ) {
            xo(is);
          }
          this.children = this.getChildren(e).map((e, n) =>
            fF(e, this, this.getName(`concat_${n}`), undefined, i)
          );
        }
        parseData() {
          this.component.data = dD(this);
          for (const e of this.children) {
            e.parseData();
          }
        }
        parseSelections() {
          this.component.selection = {};
          for (const e of this.children) {
            e.parseSelections();
            for (const n of yn(e.component.selection)) {
              this.component.selection[n] = e.component.selection[n];
            }
          }
        }
        parseMarkGroup() {
          for (const e of this.children) {
            e.parseMarkGroup();
          }
        }
        parseAxesAndHeaders() {
          for (const e of this.children) {
            e.parseAxesAndHeaders();
          }
        }
        getChildren(e) {
          if (td(e)) {
            return e.vconcat;
          } else if (id(e)) {
            return e.hconcat;
          }
          return e.concat;
        }
        parseLayoutSize() {
          nD(this);
        }
        parseAxisGroup() {
          return null;
        }
        assembleSelectionTopLevelSignals(e) {
          return this.children.reduce(
            (e, n) => n.assembleSelectionTopLevelSignals(e),
            e
          );
        }
        assembleSignals() {
          this.children.forEach((e) => e.assembleSignals());
          return [];
        }
        assembleLayoutSignals() {
          const e = xO(this);
          for (const n of this.children) {
            e.push(...n.assembleLayoutSignals());
          }
          return e;
        }
        assembleSelectionData(e) {
          return this.children.reduce((e, n) => n.assembleSelectionData(e), e);
        }
        assembleMarks() {
          return this.children.map((e) => {
            const n = e.assembleTitle();
            const t = e.assembleGroupStyle();
            const i = e.assembleGroupEncodeEntry(false);
            return Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    { type: 'group', name: e.getName('group') },
                    n ? { title: n } : {}
                  ),
                  t ? { style: t } : {}
                ),
                i ? { encode: { update: i } } : {}
              ),
              e.assembleGroup()
            );
          });
        }
        assembleGroupStyle() {
          return undefined;
        }
        assembleDefaultLayout() {
          const e = this.layout.columns;
          return Object.assign(Object.assign({}, e != null ? { columns: e } : {}), {
            bounds: 'full',
            align: 'each',
          });
        }
      }
      function gD(e) {
        return e === false || e === null;
      }
      const mD = Object.assign(
        Object.assign({ disable: 1, gridScale: 1, scale: 1 }, _l),
        { labelExpr: 1, encode: 1 }
      );
      const hD = yn(mD);
      class bD extends Zp {
        constructor(e = {}, n = {}, t = false) {
          super();
          this.explicit = e;
          this.implicit = n;
          this.mainExtracted = t;
        }
        clone() {
          return new bD(Ze(this.explicit), Ze(this.implicit), this.mainExtracted);
        }
        hasAxisPart(e) {
          if (e === 'axis') {
            return true;
          }
          if (e === 'grid' || e === 'title') {
            return !!this.get(e);
          }
          return !gD(this.get(e));
        }
        hasOrientSignalRef() {
          return fr(this.explicit.orient);
        }
      }
      function yD(e, n, t) {
        var i;
        const { encoding: r, config: s } = e;
        const o = (i = hl(r[n])) !== null && i !== void 0 ? i : hl(r[Jt(n)]);
        const a = e.axis(n) || {};
        const { format: u, formatType: c } = a;
        if (rc(c)) {
          return Object.assign(
            {
              text: cc({
                fieldOrDatumDef: o,
                field: 'datum.value',
                format: u,
                formatType: c,
                config: s,
              }),
            },
            t
          );
        }
        return t;
      }
      function vD(e) {
        return hi.reduce((n, t) => {
          if (e.component.scales[t]) {
            n[t] = [FD(t, e)];
          }
          return n;
        }, {});
      }
      const xD = { bottom: 'top', top: 'bottom', left: 'right', right: 'left' };
      function OD(e) {
        var n;
        const { axes: t, resolve: i } = e.component;
        const r = { top: 0, bottom: 0, right: 0, left: 0 };
        for (const s of e.children) {
          s.parseAxesAndHeaders();
          for (const n of yn(s.component.axes)) {
            i.axis[n] = $O(e.component.resolve, n);
            if (i.axis[n] === 'shared') {
              t[n] = wD(t[n], s.component.axes[n]);
              if (!t[n]) {
                i.axis[n] = 'independent';
                delete t[n];
              }
            }
          }
        }
        for (const s of hi) {
          for (const o of e.children) {
            if (!o.component.axes[s]) {
              continue;
            }
            if (i.axis[s] === 'independent') {
              t[s] = ((n = t[s]) !== null && n !== void 0 ? n : []).concat(
                o.component.axes[s]
              );
              for (const e of o.component.axes[s]) {
                const { value: n, explicit: t } = e.getWithExplicit('orient');
                if (fr(n)) {
                  continue;
                }
                if (r[n] > 0 && !t) {
                  const t = xD[n];
                  if (r[n] > r[t]) {
                    e.set('orient', t, false);
                  }
                }
                r[n]++;
              }
            }
            delete o.component.axes[s];
          }
          if (i.axis[s] === 'independent' && t[s] && t[s].length > 1) {
            for (const e of t[s]) {
              if (!!e.get('grid') && !e.explicit.grid) {
                e.implicit.grid = false;
              }
            }
          }
        }
      }
      function wD(e, n) {
        if (e) {
          if (e.length !== n.length) {
            return undefined;
          }
          const t = e.length;
          for (let i = 0; i < t; i++) {
            const t = e[i];
            const r = n[i];
            if (!!t !== !!r) {
              return undefined;
            } else if (t && r) {
              const n = t.getWithExplicit('orient');
              const s = r.getWithExplicit('orient');
              if (n.explicit && s.explicit && n.value !== s.value) {
                return undefined;
              } else {
                e[i] = jD(t, r);
              }
            }
          }
        } else {
          return n.map((e) => e.clone());
        }
        return e;
      }
      function jD(e, n) {
        for (const t of hD) {
          const i = rg(
            e.getWithExplicit(t),
            n.getWithExplicit(t),
            t,
            'axis',
            (e, n) => {
              switch (t) {
                case 'title':
                  return Mr(e, n);
                case 'gridScale':
                  return { explicit: e.explicit, value: _n(e.value, n.value) };
              }
              return ig(e, n, t, 'axis');
            }
          );
          e.setWithExplicit(t, i);
        }
        return e;
      }
      function AD(e, n, t, i, r) {
        if (n === 'disable') {
          return t !== undefined;
        }
        t = t || {};
        switch (n) {
          case 'titleAngle':
          case 'labelAngle':
            return e === (fr(t.labelAngle) ? t.labelAngle : Ln(t.labelAngle));
          case 'values':
            return !!t.values;
          case 'encode':
            return !!t.encoding || !!t.labelAngle;
          case 'title':
            if (e === Zx(i, r)) {
              return true;
            }
        }
        return e === t[n];
      }
      const DD = new Set([
        'grid',
        'translate',
        'format',
        'formatType',
        'orient',
        'labelExpr',
        'tickCount',
        'position',
        'tickMinStep',
      ]);
      function FD(e, n) {
        var t, i, r;
        let s = n.axis(e);
        const o = new bD();
        const a = hl(n.encoding[e]);
        const { mark: u, config: c } = n;
        const l =
          (s === null || s === void 0 ? void 0 : s.orient) ||
          ((t = c[e === 'x' ? 'axisX' : 'axisY']) === null || t === void 0
            ? void 0
            : t.orient) ||
          ((i = c.axis) === null || i === void 0 ? void 0 : i.orient) ||
          Jx(e);
        const f = n.getScaleComponent(e).get('type');
        const d = Lx(e, f, l, n.config);
        const p =
          s !== undefined
            ? !s
            : qx('disable', c.style, s === null || s === void 0 ? void 0 : s.style, d)
                .configValue;
        o.set('disable', p, s !== undefined);
        if (p) {
          return o;
        }
        s = s || {};
        const g = Hx(a, s, e, c.style, d);
        const m = {
          fieldOrDatumDef: a,
          axis: s,
          channel: e,
          model: n,
          scaleType: f,
          orient: l,
          labelAngle: g,
          mark: u,
          config: c,
        };
        for (const y of hD) {
          const t = y in Ux ? Ux[y](m) : zl(y) ? s[y] : undefined;
          const i = t !== undefined;
          const r = AD(t, y, s, n, e);
          if (i && r) {
            o.set(y, t, r);
          } else {
            const { configValue: e = undefined, configFrom: n = undefined } =
              zl(y) && y !== 'values' ? qx(y, c.style, s.style, d) : {};
            const a = e !== undefined;
            if (i && !a) {
              o.set(y, t, r);
            } else if (!(n === 'vgAxisConfig') || (DD.has(y) && a) || El(e) || fr(e)) {
              o.set(y, e, false);
            }
          }
        }
        const h = (r = s.encoding) !== null && r !== void 0 ? r : {};
        const b = Sl.reduce((t, i) => {
          var r;
          if (!o.hasAxisPart(i)) {
            return t;
          }
          const s = DO((r = h[i]) !== null && r !== void 0 ? r : {}, n);
          const a = i === 'labels' ? yD(n, e, s) : s;
          if (a !== undefined && !bn(a)) {
            t[i] = { update: a };
          }
          return t;
        }, {});
        if (!bn(b)) {
          o.set('encode', b, !!s.encoding || s.labelAngle !== undefined);
        }
        return o;
      }
      function $D({ encoding: e, size: n }) {
        for (const t of hi) {
          const i = Kt(t);
          if (rd(n[i])) {
            if (Uc(e[t])) {
              delete n[i];
              xo(qs(i));
            }
          }
        }
        return n;
      }
      function kD(e, n, t) {
        const i = ar(e);
        const r = Er('orient', i, t);
        i.orient = BD(i.type, n, r);
        if (r !== undefined && r !== i.orient) {
          xo(Cs(i.orient, r));
        }
        if (i.type === 'bar' && i.orient) {
          const e = Er('cornerRadiusEnd', i, t);
          if (e !== undefined) {
            const t =
              (i.orient === 'horizontal' && n.x2) || (i.orient === 'vertical' && n.y2)
                ? ['cornerRadius']
                : Wu[i.orient];
            for (const n of t) {
              i[n] = e;
            }
            if (i.cornerRadiusEnd !== undefined) {
              delete i.cornerRadiusEnd;
            }
          }
        }
        const s = Er('opacity', i, t);
        if (s === undefined) {
          i.opacity = ED(i.type, n);
        }
        const o = Er('cursor', i, t);
        if (o === undefined) {
          i.cursor = CD(i, n, t);
        }
        return i;
      }
      function CD(e, n, t) {
        if (n.href || e.href || Er('href', e, t)) {
          return 'pointer';
        }
        return e.cursor;
      }
      function ED(e, n) {
        if (on([bu, Ou, ju, Au], e)) {
          if (!Wl(n)) {
            return 0.7;
          }
        }
        return undefined;
      }
      function SD(e, n, { graticule: t }) {
        if (t) {
          return false;
        }
        const i = Sr('filled', e, n);
        const r = e.type;
        return _n(i, r !== bu && r !== hu && r !== vu);
      }
      function BD(e, n, t) {
        switch (e) {
          case bu:
          case ju:
          case Au:
          case xu:
          case yu:
          case mu:
            return undefined;
        }
        const { x: i, y: r, x2: s, y2: o } = n;
        switch (e) {
          case gu:
            if (Lc(i) && (tr(i.bin) || (Lc(r) && r.aggregate && !i.aggregate))) {
              return 'vertical';
            }
            if (Lc(r) && (tr(r.bin) || (Lc(i) && i.aggregate && !r.aggregate))) {
              return 'horizontal';
            }
            if (o || s) {
              if (t) {
                return t;
              }
              if (!s) {
                if ((Lc(i) && i.type === ha && !nr(i.bin)) || Ic(i)) {
                  return 'horizontal';
                }
              }
              if (!o) {
                if ((Lc(r) && r.type === ha && !nr(r.bin)) || Ic(r)) {
                  return 'vertical';
                }
              }
            }
          case vu:
            if (s && !(Lc(i) && tr(i.bin)) && o && !(Lc(r) && tr(r.bin))) {
              return undefined;
            }
          case pu:
            if (o) {
              if (Lc(r) && tr(r.bin)) {
                return 'horizontal';
              } else {
                return 'vertical';
              }
            } else if (s) {
              if (Lc(i) && tr(i.bin)) {
                return 'vertical';
              } else {
                return 'horizontal';
              }
            } else if (e === vu) {
              if (i && !r) {
                return 'vertical';
              } else if (r && !i) {
                return 'horizontal';
              }
            }
          case hu:
          case Ou: {
            const n = Uc(i);
            const s = Uc(r);
            if (t) {
              return t;
            } else if (n && !s) {
              return e !== 'tick' ? 'horizontal' : 'vertical';
            } else if (!n && s) {
              return e !== 'tick' ? 'vertical' : 'horizontal';
            } else if (n && s) {
              const n = i;
              const t = r;
              const s = n.type === ya;
              const o = t.type === ya;
              if (s && !o) {
                return e !== 'tick' ? 'vertical' : 'horizontal';
              } else if (!s && o) {
                return e !== 'tick' ? 'horizontal' : 'vertical';
              }
              if (!n.aggregate && t.aggregate) {
                return e !== 'tick' ? 'vertical' : 'horizontal';
              } else if (n.aggregate && !t.aggregate) {
                return e !== 'tick' ? 'horizontal' : 'vertical';
              }
              return 'vertical';
            } else {
              return undefined;
            }
          }
        }
        return 'vertical';
      }
      const _D = {
        vgMark: 'arc',
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Im(e, {
                      align: 'ignore',
                      baseline: 'ignore',
                      color: 'include',
                      size: 'ignore',
                      orient: 'ignore',
                      theta: 'ignore',
                    })
                  ),
                  Fm('x', e, { defaultPos: 'mid' })
                ),
                Fm('y', e, { defaultPos: 'mid' })
              ),
              Mm(e, 'radius', 'arc')
            ),
            Mm(e, 'theta', 'arc')
          ),
      };
      const PD = {
        vgMark: 'area',
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  Im(e, {
                    align: 'ignore',
                    baseline: 'ignore',
                    color: 'include',
                    orient: 'include',
                    size: 'ignore',
                    theta: 'ignore',
                  })
                ),
                Bm('x', e, {
                  defaultPos: 'zeroOrMin',
                  defaultPos2: 'zeroOrMin',
                  range: e.markDef.orient === 'horizontal',
                })
              ),
              Bm('y', e, {
                defaultPos: 'zeroOrMin',
                defaultPos2: 'zeroOrMin',
                range: e.markDef.orient === 'vertical',
              })
            ),
            Ym(e)
          ),
      };
      const zD = {
        vgMark: 'rect',
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                Im(e, {
                  align: 'ignore',
                  baseline: 'ignore',
                  color: 'include',
                  orient: 'ignore',
                  size: 'ignore',
                  theta: 'ignore',
                })
              ),
              Mm(e, 'x', 'bar')
            ),
            Mm(e, 'y', 'bar')
          ),
      };
      const ND = {
        vgMark: 'shape',
        encodeEntry: (e) =>
          Object.assign(
            {},
            Im(e, {
              align: 'ignore',
              baseline: 'ignore',
              color: 'include',
              size: 'ignore',
              orient: 'ignore',
              theta: 'ignore',
            })
          ),
        postEncodingTransform: (e) => {
          const { encoding: n } = e;
          const t = n.shape;
          const i = Object.assign(
            { type: 'geoshape', projection: e.projectionName() },
            t && Lc(t) && t.type === xa ? { field: el(t, { expr: 'datum' }) } : {}
          );
          return [i];
        },
      };
      const MD = {
        vgMark: 'image',
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  Im(e, {
                    align: 'ignore',
                    baseline: 'ignore',
                    color: 'ignore',
                    orient: 'ignore',
                    size: 'ignore',
                    theta: 'ignore',
                  })
                ),
                Mm(e, 'x', 'image')
              ),
              Mm(e, 'y', 'image')
            ),
            gm(e, 'url')
          ),
      };
      const TD = {
        vgMark: 'line',
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Im(e, {
                      align: 'ignore',
                      baseline: 'ignore',
                      color: 'include',
                      size: 'ignore',
                      orient: 'ignore',
                      theta: 'ignore',
                    })
                  ),
                  Fm('x', e, { defaultPos: 'mid' })
                ),
                Fm('y', e, { defaultPos: 'mid' })
              ),
              wm('size', e, { vgChannel: 'strokeWidth' })
            ),
            Ym(e)
          ),
      };
      const LD = {
        vgMark: 'trail',
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Im(e, {
                      align: 'ignore',
                      baseline: 'ignore',
                      color: 'include',
                      size: 'include',
                      orient: 'ignore',
                      theta: 'ignore',
                    })
                  ),
                  Fm('x', e, { defaultPos: 'mid' })
                ),
                Fm('y', e, { defaultPos: 'mid' })
              ),
              wm('size', e)
            ),
            Ym(e)
          ),
      };
      function RD(e, n) {
        const { config: t } = e;
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Im(e, {
                      align: 'ignore',
                      baseline: 'ignore',
                      color: 'include',
                      size: 'include',
                      orient: 'ignore',
                      theta: 'ignore',
                    })
                  ),
                  Fm('x', e, { defaultPos: 'mid' })
                ),
                Fm('y', e, { defaultPos: 'mid' })
              ),
              wm('size', e)
            ),
            wm('angle', e)
          ),
          qD(e, t, n)
        );
      }
      function qD(e, n, t) {
        if (t) {
          return { shape: { value: t } };
        }
        return wm('shape', e);
      }
      const UD = { vgMark: 'symbol', encodeEntry: (e) => RD(e) };
      const WD = { vgMark: 'symbol', encodeEntry: (e) => RD(e, 'circle') };
      const ID = { vgMark: 'symbol', encodeEntry: (e) => RD(e, 'square') };
      const HD = {
        vgMark: 'rect',
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                Im(e, {
                  align: 'ignore',
                  baseline: 'ignore',
                  color: 'include',
                  orient: 'ignore',
                  size: 'ignore',
                  theta: 'ignore',
                })
              ),
              Mm(e, 'x', 'rect')
            ),
            Mm(e, 'y', 'rect')
          ),
      };
      const GD = {
        vgMark: 'rule',
        encodeEntry: (e) => {
          const { markDef: n } = e;
          const t = n.orient;
          if (
            !e.encoding.x &&
            !e.encoding.y &&
            !e.encoding.latitude &&
            !e.encoding.longitude
          ) {
            return {};
          }
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  Im(e, {
                    align: 'ignore',
                    baseline: 'ignore',
                    color: 'include',
                    orient: 'ignore',
                    size: 'ignore',
                    theta: 'ignore',
                  })
                ),
                Bm('x', e, {
                  defaultPos: t === 'horizontal' ? 'zeroOrMax' : 'mid',
                  defaultPos2: 'zeroOrMin',
                  range: t !== 'vertical',
                })
              ),
              Bm('y', e, {
                defaultPos: t === 'vertical' ? 'zeroOrMax' : 'mid',
                defaultPos2: 'zeroOrMin',
                range: t !== 'horizontal',
              })
            ),
            wm('size', e, { vgChannel: 'strokeWidth' })
          );
        },
      };
      const VD = {
        vgMark: 'text',
        encodeEntry: (e) => {
          const { config: n, encoding: t } = e;
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              Im(e, {
                                align: 'include',
                                baseline: 'include',
                                color: 'include',
                                size: 'ignore',
                                orient: 'ignore',
                                theta: 'include',
                              })
                            ),
                            Fm('x', e, { defaultPos: 'mid' })
                          ),
                          Fm('y', e, { defaultPos: 'mid' })
                        ),
                        gm(e)
                      ),
                      wm('size', e, { vgChannel: 'fontSize' })
                    ),
                    wm('angle', e)
                  ),
                  Xm('align', YD(e.markDef, t, n))
                ),
                Xm('baseline', QD(e.markDef, t, n))
              ),
              Fm('radius', e, { defaultPos: null })
            ),
            Fm('theta', e, { defaultPos: null })
          );
        },
      };
      function YD(e, n, t) {
        const i = Er('align', e, t);
        if (i === undefined) {
          return 'center';
        }
        return undefined;
      }
      function QD(e, n, t) {
        const i = Er('baseline', e, t);
        if (i === undefined) {
          return 'middle';
        }
        return undefined;
      }
      const XD = {
        vgMark: 'rect',
        encodeEntry: (e) => {
          const { config: n, markDef: t } = e;
          const i = t.orient;
          const r = i === 'horizontal' ? 'width' : 'height';
          const s = i === 'horizontal' ? 'height' : 'width';
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Im(e, {
                      align: 'ignore',
                      baseline: 'ignore',
                      color: 'include',
                      orient: 'ignore',
                      size: 'ignore',
                      theta: 'ignore',
                    })
                  ),
                  Fm('x', e, { defaultPos: 'mid', vgChannel: 'xc' })
                ),
                Fm('y', e, { defaultPos: 'mid', vgChannel: 'yc' })
              ),
              wm('size', e, { defaultValue: JD(e), vgChannel: r })
            ),
            { [s]: Dr(Er('thickness', t, n)) }
          );
        },
      };
      function JD(e) {
        var n;
        const { config: t, markDef: i } = e;
        const { orient: r } = i;
        const s = r === 'horizontal' ? 'width' : 'height';
        const o = e.getScaleComponent(r === 'horizontal' ? 'x' : 'y');
        const a =
          (n = Er('size', i, t, { vgChannel: s })) !== null && n !== void 0
            ? n
            : t.tick.bandSize;
        if (a !== undefined) {
          return a;
        } else {
          const e = o ? o.get('range') : undefined;
          if (e && dr(e) && Oe(e.step)) {
            return (e.step * 3) / 4;
          }
          const n = dd(t.view, s);
          return (n * 3) / 4;
        }
      }
      const KD = {
        arc: _D,
        area: PD,
        bar: zD,
        circle: WD,
        geoshape: ND,
        image: MD,
        line: TD,
        point: UD,
        rect: HD,
        rule: GD,
        square: ID,
        text: VD,
        tick: XD,
        trail: LD,
      };
      function ZD(e) {
        if (on([hu, pu, wu], e.mark)) {
          const n = Jl(e.mark, e.encoding);
          if (n.length > 0) {
            return nF(e, n);
          }
        } else if (e.mark === gu) {
          const n = vr.some((n) => Er(n, e.markDef, e.config));
          if (e.stack && !e.fieldDef('size') && n) {
            return iF(e);
          }
        }
        return sF(e);
      }
      const eF = 'faceted_path_';
      function nF(e, n) {
        return [
          {
            name: e.getName('pathgroup'),
            type: 'group',
            from: {
              facet: {
                name: eF + e.requestDataName(pg.Main),
                data: e.requestDataName(pg.Main),
                groupby: n,
              },
            },
            encode: {
              update: {
                width: { field: { group: 'width' } },
                height: { field: { group: 'height' } },
              },
            },
            marks: sF(e, { fromPrefix: eF }),
          },
        ];
      }
      const tF = 'stack_group_';
      function iF(e) {
        const [n] = sF(e, { fromPrefix: tF });
        const t = e.scaleName(e.stack.fieldChannel);
        const i = (n = {}) => e.vgField(e.stack.fieldChannel, n);
        const r = (e, n) => {
          const r = [
            i({ prefix: 'min', suffix: 'start', expr: n }),
            i({ prefix: 'max', suffix: 'start', expr: n }),
            i({ prefix: 'min', suffix: 'end', expr: n }),
            i({ prefix: 'max', suffix: 'end', expr: n }),
          ];
          return `${e}(${r.map((e) => `scale('${t}',${e})`).join(',')})`;
        };
        let s;
        let o;
        if (e.stack.fieldChannel === 'x') {
          s = Object.assign(
            Object.assign({}, en(n.encode.update, ['y', 'yc', 'y2', 'height', ...vr])),
            {
              x: { signal: r('min', 'datum') },
              x2: { signal: r('max', 'datum') },
              clip: { value: true },
            }
          );
          o = {
            x: { field: { group: 'x' }, mult: -1 },
            height: { field: { group: 'height' } },
          };
          n.encode.update = Object.assign(
            Object.assign({}, nn(n.encode.update, ['y', 'yc', 'y2'])),
            { height: { field: { group: 'height' } } }
          );
        } else {
          s = Object.assign(
            Object.assign({}, en(n.encode.update, ['x', 'xc', 'x2', 'width'])),
            {
              y: { signal: r('min', 'datum') },
              y2: { signal: r('max', 'datum') },
              clip: { value: true },
            }
          );
          o = {
            y: { field: { group: 'y' }, mult: -1 },
            width: { field: { group: 'width' } },
          };
          n.encode.update = Object.assign(
            Object.assign({}, nn(n.encode.update, ['x', 'xc', 'x2'])),
            { width: { field: { group: 'width' } } }
          );
        }
        for (const c of vr) {
          const t = Sr(c, e.markDef, e.config);
          if (n.encode.update[c]) {
            s[c] = n.encode.update[c];
            delete n.encode.update[c];
          } else if (t) {
            s[c] = Dr(t);
          }
          if (t) {
            n.encode.update[c] = { value: 0 };
          }
        }
        const a = [];
        if (e.stack.groupbyChannel) {
          const n = e.fieldDef(e.stack.groupbyChannel);
          const t = el(n);
          if (t) {
            a.push(t);
          }
          if (
            (n === null || n === void 0 ? void 0 : n.bin) ||
            (n === null || n === void 0 ? void 0 : n.timeUnit)
          ) {
            a.push(el(n, { binSuffix: 'end' }));
          }
        }
        const u = [
          'stroke',
          'strokeWidth',
          'strokeJoin',
          'strokeCap',
          'strokeDash',
          'strokeDashOffset',
          'strokeMiterLimit',
          'strokeOpacity',
        ];
        s = u.reduce((t, i) => {
          if (n.encode.update[i]) {
            return Object.assign(Object.assign({}, t), { [i]: n.encode.update[i] });
          } else {
            const n = Sr(i, e.markDef, e.config);
            if (n !== undefined) {
              return Object.assign(Object.assign({}, t), { [i]: Dr(n) });
            } else {
              return t;
            }
          }
        }, s);
        if (s.stroke) {
          s.strokeForeground = { value: true };
          s.strokeOffset = { value: 0 };
        }
        return [
          {
            type: 'group',
            from: {
              facet: {
                data: e.requestDataName(pg.Main),
                name: tF + e.requestDataName(pg.Main),
                groupby: a,
                aggregate: {
                  fields: [
                    i({ suffix: 'start' }),
                    i({ suffix: 'start' }),
                    i({ suffix: 'end' }),
                    i({ suffix: 'end' }),
                  ],
                  ops: ['min', 'max', 'min', 'max'],
                },
              },
            },
            encode: { update: s },
            marks: [{ type: 'group', encode: { update: o }, marks: [n] }],
          },
        ];
      }
      function rF(e) {
        var n;
        const { encoding: t, stack: i, mark: r, markDef: s, config: o } = e;
        const a = t.order;
        if ((!F(a) && Vc(a) && sn(a.value)) || (!a && sn(Er('order', s, o)))) {
          return undefined;
        } else if ((F(a) || Lc(a)) && !i) {
          return Pr(a, { expr: 'datum' });
        } else if ($u(r)) {
          const i = s.orient === 'horizontal' ? 'y' : 'x';
          const r = t[i];
          if (Lc(r)) {
            const t = r.sort;
            if (F(t)) {
              return {
                field: el(r, { prefix: i, suffix: 'sort_index', expr: 'datum' }),
              };
            } else if (wc(t)) {
              return {
                field: el(
                  { aggregate: Wl(e.encoding) ? t.op : undefined, field: t.field },
                  { expr: 'datum' }
                ),
              };
            } else if (Oc(t)) {
              const n = e.fieldDef(t.encoding);
              return { field: el(n, { expr: 'datum' }), order: t.order };
            } else if (t === null) {
              return undefined;
            } else {
              return {
                field: el(r, {
                  binSuffix: (
                    (n = e.stack) === null || n === void 0 ? void 0 : n.impute
                  )
                    ? 'mid'
                    : undefined,
                  expr: 'datum',
                }),
              };
            }
          }
          return undefined;
        }
        return undefined;
      }
      function sF(e, n = { fromPrefix: '' }) {
        const { mark: t, markDef: i, encoding: r, config: s } = e;
        const o = _n(i.clip, oF(e), aF(e));
        const a = Cr(i);
        const u = r.key;
        const c = rF(e);
        const l = uF(e);
        const f = Er('aria', i, s);
        const d = KD[t].postEncodingTransform ? KD[t].postEncodingTransform(e) : null;
        return [
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          { name: e.getName('marks'), type: KD[t].vgMark },
                          o ? { clip: true } : {}
                        ),
                        a ? { style: a } : {}
                      ),
                      u ? { key: u.field } : {}
                    ),
                    c ? { sort: c } : {}
                  ),
                  l ? l : {}
                ),
                f === false ? { aria: f } : {}
              ),
              {
                from: { data: n.fromPrefix + e.requestDataName(pg.Main) },
                encode: { update: KD[t].encodeEntry(e) },
              }
            ),
            d ? { transform: d } : {}
          ),
        ];
      }
      function oF(e) {
        const n = e.getScaleComponent('x');
        const t = e.getScaleComponent('y');
        return (n && n.get('selectionExtent')) || (t && t.get('selectionExtent'))
          ? true
          : undefined;
      }
      function aF(e) {
        const n = e.component.projection;
        return n && !n.isFit ? true : undefined;
      }
      function uF(e) {
        if (!e.component.selection) return null;
        const n = yn(e.component.selection).length;
        let t = n;
        let i = e.parent;
        while (i && t === 0) {
          t = yn(i.component.selection).length;
          i = i.parent;
        }
        return t ? { interactive: n > 0 || !!e.encoding.tooltip } : null;
      }
      class cF extends kA {
        constructor(e, n, t, i = {}, r) {
          var s;
          super(e, 'unit', n, t, r, undefined, sd(e) ? e.view : undefined);
          this.specifiedScales = {};
          this.specifiedAxes = {};
          this.specifiedLegends = {};
          this.specifiedProjection = {};
          this.selection = [];
          this.children = [];
          const o = Eu(e.mark) ? Object.assign({}, e.mark) : { type: e.mark };
          const a = o.type;
          if (o.filled === undefined) {
            o.filled = SD(o, r, { graticule: e.data && dg(e.data) });
          }
          const u = (this.encoding = Gl(e.encoding || {}, a, o.filled, r));
          this.markDef = kD(o, u, r);
          this.size = $D({
            encoding: u,
            size: sd(e)
              ? Object.assign(
                  Object.assign(
                    Object.assign({}, i),
                    e.width ? { width: e.width } : {}
                  ),
                  e.height ? { height: e.height } : {}
                )
              : i,
          });
          this.stack = Gd(a, u);
          this.specifiedScales = this.initScales(a, u);
          this.specifiedAxes = this.initAxes(u);
          this.specifiedLegends = this.initLegends(u);
          this.specifiedProjection = e.projection;
          this.selection = ((s = e.params) !== null && s !== void 0 ? s : []).filter(
            (e) => Jf(e)
          );
        }
        get hasProjection() {
          const { encoding: e } = this;
          const n = this.mark === Du;
          const t = e && kt.some((n) => Hc(e[n]));
          return n || t;
        }
        scaleDomain(e) {
          const n = this.specifiedScales[e];
          return n ? n.domain : undefined;
        }
        axis(e) {
          return this.specifiedAxes[e];
        }
        legend(e) {
          return this.specifiedLegends[e];
        }
        initScales(e, n) {
          return Pi.reduce((e, t) => {
            var i;
            const r = hl(n[t]);
            if (r) {
              e[t] = this.initScale((i = r.scale) !== null && i !== void 0 ? i : {});
            }
            return e;
          }, {});
        }
        initScale(e) {
          const { domain: n, range: t } = e;
          const i = ar(e);
          if (F(n)) {
            i.domain = n.map(jr);
          }
          if (F(t)) {
            i.range = t.map(jr);
          }
          return i;
        }
        initAxes(e) {
          return hi.reduce((n, t) => {
            const i = e[t];
            if (Hc(i) || (t === Hn && Hc(e.x2)) || (t === Gn && Hc(e.y2))) {
              const e = Hc(i) ? i.axis : undefined;
              n[t] = e ? this.initAxis(Object.assign({}, e)) : e;
            }
            return n;
          }, {});
        }
        initAxis(e) {
          const n = yn(e);
          const t = {};
          for (const i of n) {
            const n = e[i];
            t[i] = El(n) ? wr(n) : jr(n);
          }
          return t;
        }
        initLegends(e) {
          return Ei.reduce((n, t) => {
            const i = hl(e[t]);
            if (i && Bi(t)) {
              const e = i.legend;
              n[t] = e ? ar(e) : e;
            }
            return n;
          }, {});
        }
        parseData() {
          this.component.data = dD(this);
        }
        parseLayoutSize() {
          rD(this);
        }
        parseSelections() {
          this.component.selection = $x(this, this.selection);
        }
        parseMarkGroup() {
          this.component.mark = ZD(this);
        }
        parseAxesAndHeaders() {
          this.component.axes = vD(this);
        }
        assembleSelectionTopLevelSignals(e) {
          return Lg(this, e);
        }
        assembleSignals() {
          return [...Nx(this), ...Mg(this, [])];
        }
        assembleSelectionData(e) {
          return Rg(this, e);
        }
        assembleLayout() {
          return null;
        }
        assembleLayoutSignals() {
          return xO(this);
        }
        assembleMarks() {
          var e;
          let n = (e = this.component.mark) !== null && e !== void 0 ? e : [];
          if (!this.parent || !FA(this.parent)) {
            n = qg(this, n);
          }
          return n.map(this.correctDataNames);
        }
        assembleGroupStyle() {
          const { style: e } = this.view || {};
          if (e !== undefined) {
            return e;
          }
          if (this.encoding.x || this.encoding.y) {
            return 'cell';
          } else {
            return undefined;
          }
        }
        getMapping() {
          return this.encoding;
        }
        get mark() {
          return this.markDef.type;
        }
        channelHasField(e) {
          return Ul(this.encoding, e);
        }
        fieldDef(e) {
          const n = this.encoding[e];
          return ml(n);
        }
        typedFieldDef(e) {
          const n = this.fieldDef(e);
          if (Gc(n)) {
            return n;
          }
          return null;
        }
      }
      class lF extends $A {
        constructor(e, n, t, i, r) {
          super(e, 'layer', n, t, r, e.resolve, e.view);
          const s = Object.assign(
            Object.assign(Object.assign({}, i), e.width ? { width: e.width } : {}),
            e.height ? { height: e.height } : {}
          );
          this.children = e.layer.map((e, n) => {
            if (Pd(e)) {
              return new lF(e, this, this.getName(`layer_${n}`), s, r);
            } else if (Ll(e)) {
              return new cF(e, this, this.getName(`layer_${n}`), s, r);
            }
            throw new Error(Tr(e));
          });
        }
        parseData() {
          this.component.data = dD(this);
          for (const e of this.children) {
            e.parseData();
          }
        }
        parseLayoutSize() {
          eD(this);
        }
        parseSelections() {
          this.component.selection = {};
          for (const e of this.children) {
            e.parseSelections();
            for (const n of yn(e.component.selection)) {
              this.component.selection[n] = e.component.selection[n];
            }
          }
        }
        parseMarkGroup() {
          for (const e of this.children) {
            e.parseMarkGroup();
          }
        }
        parseAxesAndHeaders() {
          OD(this);
        }
        assembleSelectionTopLevelSignals(e) {
          return this.children.reduce(
            (e, n) => n.assembleSelectionTopLevelSignals(e),
            e
          );
        }
        assembleSignals() {
          return this.children.reduce(
            (e, n) => e.concat(n.assembleSignals()),
            Nx(this)
          );
        }
        assembleLayoutSignals() {
          return this.children.reduce(
            (e, n) => e.concat(n.assembleLayoutSignals()),
            xO(this)
          );
        }
        assembleSelectionData(e) {
          return this.children.reduce((e, n) => n.assembleSelectionData(e), e);
        }
        assembleGroupStyle() {
          const e = new Set();
          for (const t of this.children) {
            for (const n of J(t.assembleGroupStyle())) {
              e.add(n);
            }
          }
          const n = Array.from(e);
          return n.length > 1 ? n : n.length === 1 ? n[0] : undefined;
        }
        assembleTitle() {
          let e = super.assembleTitle();
          if (e) {
            return e;
          }
          for (const n of this.children) {
            e = n.assembleTitle();
            if (e) {
              return e;
            }
          }
          return undefined;
        }
        assembleLayout() {
          return null;
        }
        assembleMarks() {
          return Ug(
            this,
            this.children.flatMap((e) => e.assembleMarks())
          );
        }
        assembleLegends() {
          return this.children.reduce(
            (e, n) => e.concat(n.assembleLegends()),
            aw(this)
          );
        }
      }
      function fF(e, n, t, i, r) {
        if (Fc(e)) {
          return new aD(e, n, t, r);
        } else if (Pd(e)) {
          return new lF(e, n, t, i, r);
        } else if (Ll(e)) {
          return new cF(e, n, t, i, r);
        } else if (ed(e)) {
          return new pD(e, n, t, r);
        }
        throw new Error(Tr(e));
      }
      var dF =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0)
              t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (
                n.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r])
              )
                t[i[r]] = e[i[r]];
            }
          return t;
        };
      function pF(e, n = {}) {
        if (n.logger) {
          bo(n.logger);
        }
        if (n.fieldTitle) {
          ul(n.fieldTitle);
        }
        try {
          const t = $d(C(n.config, e.config));
          const i = Up(e, t);
          const r = fF(i, null, '', undefined, t);
          r.parse();
          yj(r.component.data, r);
          const s = mF(r, gF(e, i.autosize, t, r), e.datasets, e.usermeta);
          return { spec: s, normalized: i };
        } finally {
          if (n.logger) {
            yo();
          }
          if (n.fieldTitle) {
            cl();
          }
        }
      }
      function gF(e, n, t, i) {
        const r = i.component.layoutSize.get('width');
        const s = i.component.layoutSize.get('height');
        if (n === undefined) {
          n = { type: 'pad' };
          if (i.hasAxisOrientSignalRef()) {
            n.resize = true;
          }
        } else if (je(n)) {
          n = { type: n };
        }
        if (r && s && Qp(n.type)) {
          if (r === 'step' && s === 'step') {
            xo(Ur());
            n.type = 'pad';
          } else if (r === 'step' || s === 'step') {
            const e = r === 'step' ? 'width' : 'height';
            xo(Ur(xi(e)));
            const t = e === 'width' ? 'height' : 'width';
            n.type = Xp(t);
          }
        }
        return Object.assign(
          Object.assign(
            Object.assign(
              {},
              yn(n).length === 1 && n.type
                ? n.type === 'pad'
                  ? {}
                  : { autosize: n.type }
                : { autosize: n }
            ),
            Kp(t, false)
          ),
          Kp(e, true)
        );
      }
      function mF(e, n, t = {}, i) {
        const r = e.config ? Sd(e.config) : undefined;
        const s = [].concat(e.assembleSelectionData([]), YA(e.component.data, t));
        const o = e.assembleProjections();
        const a = e.assembleTitle();
        const u = e.assembleGroupStyle();
        const c = e.assembleGroupEncodeEntry(true);
        let l = e.assembleLayoutSignals();
        l = l.filter((e) => {
          if ((e.name === 'width' || e.name === 'height') && e.value !== undefined) {
            n[e.name] = +e.value;
            return false;
          }
          return true;
        });
        const { params: f } = n,
          d = dF(n, ['params']);
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            { $schema: 'https://vega.github.io/schema/vega/v5.json' },
                            e.description ? { description: e.description } : {}
                          ),
                          d
                        ),
                        a ? { title: a } : {}
                      ),
                      u ? { style: u } : {}
                    ),
                    c ? { encode: { update: c } } : {}
                  ),
                  { data: s }
                ),
                o.length > 0 ? { projections: o } : {}
              ),
              e.assembleGroup([
                ...l,
                ...e.assembleSelectionTopLevelSignals([]),
                ...Zf(f),
              ])
            ),
            r ? { config: r } : {}
          ),
          i ? { usermeta: i } : {}
        );
      }
      const hF = i.i8;
    },
  },
]);
//# sourceMappingURL=7454.5859b3e9803de4da9c05.js.map?v=5859b3e9803de4da9c05
