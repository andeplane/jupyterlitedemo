/*! For license information please see 1944.9bb345a40325c23313e9.js.LICENSE.txt */
(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [1944],
  {
    51127: (e) => {
      'use strict';
      var t = /("(?:[^\\"]|\\.)*")|[:,]/g;
      e.exports = function e(n, r) {
        var i, o, a;
        r = r || {};
        i = JSON.stringify([1], undefined, r.indent === undefined ? 2 : r.indent).slice(
          2,
          -3
        );
        o = i === '' ? Infinity : r.maxLength === undefined ? 80 : r.maxLength;
        a = r.replacer;
        return (function e(n, r, l) {
          var s, c, u, f, d, p, h, g, v, m, b, y;
          if (n && typeof n.toJSON === 'function') {
            n = n.toJSON();
          }
          b = JSON.stringify(n, a);
          if (b === undefined) {
            return b;
          }
          h = o - r.length - l;
          if (b.length <= h) {
            v = b.replace(t, function (e, t) {
              return t || e + ' ';
            });
            if (v.length <= h) {
              return v;
            }
          }
          if (a != null) {
            n = JSON.parse(b);
            a = undefined;
          }
          if (typeof n === 'object' && n !== null) {
            g = r + i;
            u = [];
            c = 0;
            if (Array.isArray(n)) {
              m = '[';
              s = ']';
              h = n.length;
              for (; c < h; c++) {
                u.push(e(n[c], g, c === h - 1 ? 0 : 1) || 'null');
              }
            } else {
              m = '{';
              s = '}';
              p = Object.keys(n);
              h = p.length;
              for (; c < h; c++) {
                f = p[c];
                d = JSON.stringify(f) + ': ';
                y = e(n[f], g, d.length + (c === h - 1 ? 0 : 1));
                if (y !== undefined) {
                  u.push(d + y);
                }
              }
            }
            if (u.length > 0) {
              return [m, i + u.join(',\n' + g), s].join('\n' + r);
            }
          }
          return b;
        })(n, '', 0);
      };
    },
    21944: (e, t, n) => {
      'use strict';
      n.r(t);
      n.d(t, {
        DEFAULT_ACTIONS: () => zn,
        default: () => tr,
        guessMode: () => Vn,
        vega: () => jn,
        vegaLite: () => Tn,
      });
      var r = {};
      n.r(r);
      n.d(r, {
        JsonPatchError: () => y,
        _areEquals: () => C,
        applyOperation: () => k,
        applyPatch: () => A,
        applyReducer: () => S,
        deepClone: () => w,
        getValueByPointer: () => E,
        validate: () => _,
        validator: () => D,
      });
      var i = {};
      n.r(i);
      n.d(i, {
        compare: () => W,
        generate: () => B,
        observe: () => I,
        unobserve: () => P,
      });
      var o = {};
      n.r(o);
      n.d(o, {
        dark: () => ge,
        excel: () => me,
        fivethirtyeight: () => ke,
        ggplot2: () => Se,
        googlecharts: () => nt,
        latimes: () => Ie,
        quartz: () => We,
        urbaninstitute: () => Qe,
        version: () => rt,
        vox: () => Je,
      });
      var a =
        (undefined && undefined.__extends) ||
        (function () {
          var e = function (t, n) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
              };
            return e(t, n);
          };
          return function (t, n) {
            e(t, n);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
          };
        })();
      var l = Object.prototype.hasOwnProperty;
      function s(e, t) {
        return l.call(e, t);
      }
      function c(e) {
        if (Array.isArray(e)) {
          var t = new Array(e.length);
          for (var n = 0; n < t.length; n++) {
            t[n] = '' + n;
          }
          return t;
        }
        if (Object.keys) {
          return Object.keys(e);
        }
        var t = [];
        for (var r in e) {
          if (s(e, r)) {
            t.push(r);
          }
        }
        return t;
      }
      function u(e) {
        switch (typeof e) {
          case 'object':
            return JSON.parse(JSON.stringify(e));
          case 'undefined':
            return null;
          default:
            return e;
        }
      }
      function f(e) {
        var t = 0;
        var n = e.length;
        var r;
        while (t < n) {
          r = e.charCodeAt(t);
          if (r >= 48 && r <= 57) {
            t++;
            continue;
          }
          return false;
        }
        return true;
      }
      function d(e) {
        if (e.indexOf('/') === -1 && e.indexOf('~') === -1) return e;
        return e.replace(/~/g, '~0').replace(/\//g, '~1');
      }
      function p(e) {
        return e.replace(/~1/g, '/').replace(/~0/g, '~');
      }
      function h(e, t) {
        var n;
        for (var r in e) {
          if (s(e, r)) {
            if (e[r] === t) {
              return d(r) + '/';
            } else if (typeof e[r] === 'object') {
              n = h(e[r], t);
              if (n != '') {
                return d(r) + '/' + n;
              }
            }
          }
        }
        return '';
      }
      function g(e, t) {
        if (e === t) {
          return '/';
        }
        var n = h(e, t);
        if (n === '') {
          throw new Error('Object not found in root');
        }
        return '/' + n;
      }
      function v(e) {
        if (e === undefined) {
          return true;
        }
        if (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = e.length; t < n; t++) {
              if (v(e[t])) {
                return true;
              }
            }
          } else if (typeof e === 'object') {
            var r = c(e);
            var i = r.length;
            for (var t = 0; t < i; t++) {
              if (v(e[r[t]])) {
                return true;
              }
            }
          }
        }
        return false;
      }
      function m(e, t) {
        var n = [e];
        for (var r in t) {
          var i = typeof t[r] === 'object' ? JSON.stringify(t[r], null, 2) : t[r];
          if (typeof i !== 'undefined') {
            n.push(r + ': ' + i);
          }
        }
        return n.join('\n');
      }
      var b = (function (e) {
        a(t, e);
        function t(t, n, r, i, o) {
          var a = this.constructor;
          var l =
            e.call(this, m(t, { name: n, index: r, operation: i, tree: o })) || this;
          l.name = n;
          l.index = r;
          l.operation = i;
          l.tree = o;
          Object.setPrototypeOf(l, a.prototype);
          l.message = m(t, { name: n, index: r, operation: i, tree: o });
          return l;
        }
        return t;
      })(Error);
      var y = b;
      var w = u;
      var x = {
        add: function (e, t, n) {
          e[t] = this.value;
          return { newDocument: n };
        },
        remove: function (e, t, n) {
          var r = e[t];
          delete e[t];
          return { newDocument: n, removed: r };
        },
        replace: function (e, t, n) {
          var r = e[t];
          e[t] = this.value;
          return { newDocument: n, removed: r };
        },
        move: function (e, t, n) {
          var r = E(n, this.path);
          if (r) {
            r = u(r);
          }
          var i = k(n, { op: 'remove', path: this.from }).removed;
          k(n, { op: 'add', path: this.path, value: i });
          return { newDocument: n, removed: r };
        },
        copy: function (e, t, n) {
          var r = E(n, this.from);
          k(n, { op: 'add', path: this.path, value: u(r) });
          return { newDocument: n };
        },
        test: function (e, t, n) {
          return { newDocument: n, test: C(e[t], this.value) };
        },
        _get: function (e, t, n) {
          this.value = e[t];
          return { newDocument: n };
        },
      };
      var O = {
        add: function (e, t, n) {
          if (f(t)) {
            e.splice(t, 0, this.value);
          } else {
            e[t] = this.value;
          }
          return { newDocument: n, index: t };
        },
        remove: function (e, t, n) {
          var r = e.splice(t, 1);
          return { newDocument: n, removed: r[0] };
        },
        replace: function (e, t, n) {
          var r = e[t];
          e[t] = this.value;
          return { newDocument: n, removed: r };
        },
        move: x.move,
        copy: x.copy,
        test: x.test,
        _get: x._get,
      };
      function E(e, t) {
        if (t == '') {
          return e;
        }
        var n = { op: '_get', path: t };
        k(e, n);
        return n.value;
      }
      function k(e, t, n, r, i, o) {
        if (n === void 0) {
          n = false;
        }
        if (r === void 0) {
          r = true;
        }
        if (i === void 0) {
          i = true;
        }
        if (o === void 0) {
          o = 0;
        }
        if (n) {
          if (typeof n == 'function') {
            n(t, 0, e, t.path);
          } else {
            D(t, 0);
          }
        }
        if (t.path === '') {
          var a = { newDocument: e };
          if (t.op === 'add') {
            a.newDocument = t.value;
            return a;
          } else if (t.op === 'replace') {
            a.newDocument = t.value;
            a.removed = e;
            return a;
          } else if (t.op === 'move' || t.op === 'copy') {
            a.newDocument = E(e, t.from);
            if (t.op === 'move') {
              a.removed = e;
            }
            return a;
          } else if (t.op === 'test') {
            a.test = C(e, t.value);
            if (a.test === false) {
              throw new y('Test operation failed', 'TEST_OPERATION_FAILED', o, t, e);
            }
            a.newDocument = e;
            return a;
          } else if (t.op === 'remove') {
            a.removed = e;
            a.newDocument = null;
            return a;
          } else if (t.op === '_get') {
            t.value = e;
            return a;
          } else {
            if (n) {
              throw new y(
                'Operation `op` property is not one of operations defined in RFC-6902',
                'OPERATION_OP_INVALID',
                o,
                t,
                e
              );
            } else {
              return a;
            }
          }
        } else {
          if (!r) {
            e = u(e);
          }
          var l = t.path || '';
          var s = l.split('/');
          var c = e;
          var d = 1;
          var h = s.length;
          var g = undefined;
          var v = void 0;
          var m = void 0;
          if (typeof n == 'function') {
            m = n;
          } else {
            m = D;
          }
          while (true) {
            v = s[d];
            if (i && v == '__proto__') {
              throw new TypeError(
                'JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README'
              );
            }
            if (n) {
              if (g === undefined) {
                if (c[v] === undefined) {
                  g = s.slice(0, d).join('/');
                } else if (d == h - 1) {
                  g = t.path;
                }
                if (g !== undefined) {
                  m(t, 0, e, g);
                }
              }
            }
            d++;
            if (Array.isArray(c)) {
              if (v === '-') {
                v = c.length;
              } else {
                if (n && !f(v)) {
                  throw new y(
                    'Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index',
                    'OPERATION_PATH_ILLEGAL_ARRAY_INDEX',
                    o,
                    t,
                    e
                  );
                } else if (f(v)) {
                  v = ~~v;
                }
              }
              if (d >= h) {
                if (n && t.op === 'add' && v > c.length) {
                  throw new y(
                    'The specified index MUST NOT be greater than the number of elements in the array',
                    'OPERATION_VALUE_OUT_OF_BOUNDS',
                    o,
                    t,
                    e
                  );
                }
                var a = O[t.op].call(t, c, v, e);
                if (a.test === false) {
                  throw new y(
                    'Test operation failed',
                    'TEST_OPERATION_FAILED',
                    o,
                    t,
                    e
                  );
                }
                return a;
              }
            } else {
              if (v && v.indexOf('~') != -1) {
                v = p(v);
              }
              if (d >= h) {
                var a = x[t.op].call(t, c, v, e);
                if (a.test === false) {
                  throw new y(
                    'Test operation failed',
                    'TEST_OPERATION_FAILED',
                    o,
                    t,
                    e
                  );
                }
                return a;
              }
            }
            c = c[v];
          }
        }
      }
      function A(e, t, n, r, i) {
        if (r === void 0) {
          r = true;
        }
        if (i === void 0) {
          i = true;
        }
        if (n) {
          if (!Array.isArray(t)) {
            throw new y('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
          }
        }
        if (!r) {
          e = u(e);
        }
        var o = new Array(t.length);
        for (var a = 0, l = t.length; a < l; a++) {
          o[a] = k(e, t[a], n, true, i, a);
          e = o[a].newDocument;
        }
        o.newDocument = e;
        return o;
      }
      function S(e, t, n) {
        var r = k(e, t);
        if (r.test === false) {
          throw new y('Test operation failed', 'TEST_OPERATION_FAILED', n, t, e);
        }
        return r.newDocument;
      }
      function D(e, t, n, r) {
        if (typeof e !== 'object' || e === null || Array.isArray(e)) {
          throw new y('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', t, e, n);
        } else if (!x[e.op]) {
          throw new y(
            'Operation `op` property is not one of operations defined in RFC-6902',
            'OPERATION_OP_INVALID',
            t,
            e,
            n
          );
        } else if (typeof e.path !== 'string') {
          throw new y(
            'Operation `path` property is not a string',
            'OPERATION_PATH_INVALID',
            t,
            e,
            n
          );
        } else if (e.path.indexOf('/') !== 0 && e.path.length > 0) {
          throw new y(
            'Operation `path` property must start with "/"',
            'OPERATION_PATH_INVALID',
            t,
            e,
            n
          );
        } else if ((e.op === 'move' || e.op === 'copy') && typeof e.from !== 'string') {
          throw new y(
            'Operation `from` property is not present (applicable in `move` and `copy` operations)',
            'OPERATION_FROM_REQUIRED',
            t,
            e,
            n
          );
        } else if (
          (e.op === 'add' || e.op === 'replace' || e.op === 'test') &&
          e.value === undefined
        ) {
          throw new y(
            'Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)',
            'OPERATION_VALUE_REQUIRED',
            t,
            e,
            n
          );
        } else if (
          (e.op === 'add' || e.op === 'replace' || e.op === 'test') &&
          v(e.value)
        ) {
          throw new y(
            'Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)',
            'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED',
            t,
            e,
            n
          );
        } else if (n) {
          if (e.op == 'add') {
            var i = e.path.split('/').length;
            var o = r.split('/').length;
            if (i !== o + 1 && i !== o) {
              throw new y(
                'Cannot perform an `add` operation at the desired path',
                'OPERATION_PATH_CANNOT_ADD',
                t,
                e,
                n
              );
            }
          } else if (e.op === 'replace' || e.op === 'remove' || e.op === '_get') {
            if (e.path !== r) {
              throw new y(
                'Cannot perform the operation at a path that does not exist',
                'OPERATION_PATH_UNRESOLVABLE',
                t,
                e,
                n
              );
            }
          } else if (e.op === 'move' || e.op === 'copy') {
            var a = { op: '_get', path: e.from, value: undefined };
            var l = _([a], n);
            if (l && l.name === 'OPERATION_PATH_UNRESOLVABLE') {
              throw new y(
                'Cannot perform the operation from a path that does not exist',
                'OPERATION_FROM_UNRESOLVABLE',
                t,
                e,
                n
              );
            }
          }
        }
      }
      function _(e, t, n) {
        try {
          if (!Array.isArray(e)) {
            throw new y('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
          }
          if (t) {
            A(u(t), u(e), n || true);
          } else {
            n = n || D;
            for (var r = 0; r < e.length; r++) {
              n(e[r], r, t, undefined);
            }
          }
        } catch ($) {
          if ($ instanceof y) {
            return $;
          } else {
            throw $;
          }
        }
      }
      function C(e, t) {
        if (e === t) return true;
        if (e && t && typeof e == 'object' && typeof t == 'object') {
          var n = Array.isArray(e),
            r = Array.isArray(t),
            i,
            o,
            a;
          if (n && r) {
            o = e.length;
            if (o != t.length) return false;
            for (i = o; i-- !== 0; ) if (!C(e[i], t[i])) return false;
            return true;
          }
          if (n != r) return false;
          var l = Object.keys(e);
          o = l.length;
          if (o !== Object.keys(t).length) return false;
          for (i = o; i-- !== 0; ) if (!t.hasOwnProperty(l[i])) return false;
          for (i = o; i-- !== 0; ) {
            a = l[i];
            if (!C(e[a], t[a])) return false;
          }
          return true;
        }
        return e !== e && t !== t;
      }
      var L = new WeakMap();
      var F = (function () {
        function e(e) {
          this.observers = new Map();
          this.obj = e;
        }
        return e;
      })();
      var j = (function () {
        function e(e, t) {
          this.callback = e;
          this.observer = t;
        }
        return e;
      })();
      function T(e) {
        return L.get(e);
      }
      function N(e, t) {
        return e.observers.get(t);
      }
      function z(e, t) {
        e.observers.delete(t.callback);
      }
      function P(e, t) {
        t.unobserve();
      }
      function I(e, t) {
        var n = [];
        var r;
        var i = T(e);
        if (!i) {
          i = new F(e);
          L.set(e, i);
        } else {
          var o = N(i, t);
          r = o && o.observer;
        }
        if (r) {
          return r;
        }
        r = {};
        i.value = u(e);
        if (t) {
          r.callback = t;
          r.next = null;
          var a = function () {
            B(r);
          };
          var l = function () {
            clearTimeout(r.next);
            r.next = setTimeout(a);
          };
          if (typeof window !== 'undefined') {
            window.addEventListener('mouseup', l);
            window.addEventListener('keyup', l);
            window.addEventListener('mousedown', l);
            window.addEventListener('keydown', l);
            window.addEventListener('change', l);
          }
        }
        r.patches = n;
        r.object = e;
        r.unobserve = function () {
          B(r);
          clearTimeout(r.next);
          z(i, r);
          if (typeof window !== 'undefined') {
            window.removeEventListener('mouseup', l);
            window.removeEventListener('keyup', l);
            window.removeEventListener('mousedown', l);
            window.removeEventListener('keydown', l);
            window.removeEventListener('change', l);
          }
        };
        i.observers.set(t, new j(t, r));
        return r;
      }
      function B(e, t) {
        if (t === void 0) {
          t = false;
        }
        var n = L.get(e.object);
        R(n.value, e.object, e.patches, '', t);
        if (e.patches.length) {
          A(n.value, e.patches);
        }
        var r = e.patches;
        if (r.length > 0) {
          e.patches = [];
          if (e.callback) {
            e.callback(r);
          }
        }
        return r;
      }
      function R(e, t, n, r, i) {
        if (t === e) {
          return;
        }
        if (typeof t.toJSON === 'function') {
          t = t.toJSON();
        }
        var o = c(t);
        var a = c(e);
        var l = false;
        var f = false;
        for (var p = a.length - 1; p >= 0; p--) {
          var h = a[p];
          var g = e[h];
          if (
            s(t, h) &&
            !(t[h] === undefined && g !== undefined && Array.isArray(t) === false)
          ) {
            var v = t[h];
            if (
              typeof g == 'object' &&
              g != null &&
              typeof v == 'object' &&
              v != null
            ) {
              R(g, v, n, r + '/' + d(h), i);
            } else {
              if (g !== v) {
                l = true;
                if (i) {
                  n.push({ op: 'test', path: r + '/' + d(h), value: u(g) });
                }
                n.push({ op: 'replace', path: r + '/' + d(h), value: u(v) });
              }
            }
          } else if (Array.isArray(e) === Array.isArray(t)) {
            if (i) {
              n.push({ op: 'test', path: r + '/' + d(h), value: u(g) });
            }
            n.push({ op: 'remove', path: r + '/' + d(h) });
            f = true;
          } else {
            if (i) {
              n.push({ op: 'test', path: r, value: e });
            }
            n.push({ op: 'replace', path: r, value: t });
            l = true;
          }
        }
        if (!f && o.length == a.length) {
          return;
        }
        for (var p = 0; p < o.length; p++) {
          var h = o[p];
          if (!s(e, h) && t[h] !== undefined) {
            n.push({ op: 'add', path: r + '/' + d(h), value: u(t[h]) });
          }
        }
      }
      function W(e, t, n) {
        if (n === void 0) {
          n = false;
        }
        var r = [];
        R(e, t, r, '', n);
        return r;
      }
      const M = Object.assign({}, r, i, {
        JsonPatchError: b,
        deepClone: u,
        escapePathComponent: d,
        unescapePathComponent: p,
      });
      var J = n(51127);
      var U = n.n(J);
      var V = n(81249);
      var H = n(56498);
      var q = n(55313);
      function $(e) {
        const [t, n] = /schema\/([\w-]+)\/([\w\.\-]+)\.json$/g.exec(e).slice(1, 3);
        return { library: t, version: n };
      }
      const G = $;
      var Y = 'vega-themes';
      var X = '2.10.0';
      var K = 'Themes for stylized Vega and Vega-Lite visualizations.';
      var Q = ['vega', 'vega-lite', 'themes', 'style'];
      var Z = 'BSD-3-Clause';
      var ee = {
        name: 'UW Interactive Data Lab',
        url: 'https://idl.cs.washington.edu',
      };
      var te = [
        { name: 'Emily Gu', url: 'https://github.com/emilygu' },
        { name: 'Arvind Satyanarayan', url: 'http://arvindsatya.com' },
        { name: 'Jeffrey Heer', url: 'https://idl.cs.washington.edu' },
        { name: 'Dominik Moritz', url: 'https://www.domoritz.de' },
      ];
      var ne = 'build/vega-themes.js';
      var re = 'build/vega-themes.module.js';
      var ie = 'build/vega-themes.min.js';
      var oe = 'build/vega-themes.min.js';
      var ae = 'build/vega-themes.module.d.ts';
      var le = { type: 'git', url: 'https://github.com/vega/vega-themes.git' };
      var se = ['src', 'build'];
      var ce = {
        prebuild: 'yarn clean',
        build: 'rollup -c',
        clean: 'rimraf build && rimraf examples/build',
        'copy:data': 'rsync -r node_modules/vega-datasets/data/* examples/data',
        'copy:build': 'rsync -r build/* examples/build',
        'deploy:gh':
          'yarn build && mkdir -p examples/build && rsync -r build/* examples/build && gh-pages -d examples',
        prepublishOnly: 'yarn clean && yarn build',
        preversion: 'yarn lint',
        serve: 'browser-sync start -s -f build examples --serveStatic examples',
        start:
          "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
        prepare: 'beemo create-config',
        eslintbase: 'beemo eslint .',
        format: 'yarn eslintbase --fix',
        lint: 'yarn eslintbase',
      };
      var ue = {
        '@rollup/plugin-json': '^4.1.0',
        '@rollup/plugin-node-resolve': '^11.2.0',
        '@wessberg/rollup-plugin-ts': '^1.3.8',
        'browser-sync': '^2.26.14',
        concurrently: '^6.0.0',
        'gh-pages': '^3.1.0',
        rollup: '^2.39.1',
        'rollup-plugin-bundle-size': '^1.0.3',
        'rollup-plugin-terser': '^7.0.2',
        typescript: '^4.2.2',
        vega: '^5.19.1',
        'vega-lite': '^5.0.0',
        'vega-lite-dev-config': '^0.16.1',
      };
      var fe = { vega: '*', 'vega-lite': '*' };
      var de = {
        name: Y,
        version: X,
        description: K,
        keywords: Q,
        license: Z,
        author: ee,
        contributors: te,
        main: ne,
        module: re,
        unpkg: ie,
        jsdelivr: oe,
        types: ae,
        repository: le,
        files: se,
        scripts: ce,
        devDependencies: ue,
        peerDependencies: fe,
      };
      const pe = '#fff';
      const he = '#888';
      const ge = {
        background: '#333',
        title: { color: pe, subtitleColor: pe },
        style: { 'guide-label': { fill: pe }, 'guide-title': { fill: pe } },
        axis: { domainColor: pe, gridColor: he, tickColor: pe },
      };
      const ve = '#4572a7';
      const me = {
        background: '#fff',
        arc: { fill: ve },
        area: { fill: ve },
        line: { stroke: ve, strokeWidth: 2 },
        path: { stroke: ve },
        rect: { fill: ve },
        shape: { stroke: ve },
        symbol: { fill: ve, strokeWidth: 1.5, size: 50 },
        axis: {
          bandPosition: 0.5,
          grid: true,
          gridColor: '#000000',
          gridOpacity: 1,
          gridWidth: 0.5,
          labelPadding: 10,
          tickSize: 5,
          tickWidth: 0.5,
        },
        axisBand: { grid: false, tickExtra: true },
        legend: {
          labelBaseline: 'middle',
          labelFontSize: 11,
          symbolSize: 50,
          symbolType: 'square',
        },
        range: {
          category: [
            '#4572a7',
            '#aa4643',
            '#8aa453',
            '#71598e',
            '#4598ae',
            '#d98445',
            '#94aace',
            '#d09393',
            '#b9cc98',
            '#a99cbc',
          ],
        },
      };
      const be = '#30a2da';
      const ye = '#cbcbcb';
      const we = '#999';
      const xe = '#333';
      const Oe = '#f0f0f0';
      const Ee = '#333';
      const ke = {
        arc: { fill: be },
        area: { fill: be },
        axis: {
          domainColor: ye,
          grid: true,
          gridColor: ye,
          gridWidth: 1,
          labelColor: we,
          labelFontSize: 10,
          titleColor: xe,
          tickColor: ye,
          tickSize: 10,
          titleFontSize: 14,
          titlePadding: 10,
          labelPadding: 4,
        },
        axisBand: { grid: false },
        background: Oe,
        group: { fill: Oe },
        legend: {
          labelColor: Ee,
          labelFontSize: 11,
          padding: 1,
          symbolSize: 30,
          symbolType: 'square',
          titleColor: Ee,
          titleFontSize: 14,
          titlePadding: 10,
        },
        line: { stroke: be, strokeWidth: 2 },
        path: { stroke: be, strokeWidth: 0.5 },
        rect: { fill: be },
        range: {
          category: [
            '#30a2da',
            '#fc4f30',
            '#e5ae38',
            '#6d904f',
            '#8b8b8b',
            '#b96db8',
            '#ff9e27',
            '#56cc60',
            '#52d2ca',
            '#52689e',
            '#545454',
            '#9fe4f8',
          ],
          diverging: ['#cc0020', '#e77866', '#f6e7e1', '#d6e8ed', '#91bfd9', '#1d78b5'],
          heatmap: ['#d6e8ed', '#cee0e5', '#91bfd9', '#549cc6', '#1d78b5'],
        },
        point: { filled: true, shape: 'circle' },
        shape: { stroke: be },
        bar: { binSpacing: 2, fill: be, stroke: null },
        title: { anchor: 'start', fontSize: 24, fontWeight: 600, offset: 20 },
      };
      const Ae = '#000';
      const Se = {
        group: { fill: '#e5e5e5' },
        arc: { fill: Ae },
        area: { fill: Ae },
        line: { stroke: Ae },
        path: { stroke: Ae },
        rect: { fill: Ae },
        shape: { stroke: Ae },
        symbol: { fill: Ae, size: 40 },
        axis: {
          domain: false,
          grid: true,
          gridColor: '#FFFFFF',
          gridOpacity: 1,
          labelColor: '#7F7F7F',
          labelPadding: 4,
          tickColor: '#7F7F7F',
          tickSize: 5.67,
          titleFontSize: 16,
          titleFontWeight: 'normal',
        },
        legend: { labelBaseline: 'middle', labelFontSize: 11, symbolSize: 40 },
        range: {
          category: [
            '#000000',
            '#7F7F7F',
            '#1A1A1A',
            '#999999',
            '#333333',
            '#B0B0B0',
            '#4D4D4D',
            '#C9C9C9',
            '#666666',
            '#DCDCDC',
          ],
        },
      };
      const De = 22;
      const _e = 'normal';
      const Ce = 'Benton Gothic, sans-serif';
      const Le = 11.5;
      const Fe = 'normal';
      const je = '#82c6df';
      const Te = 'Benton Gothic Bold, sans-serif';
      const Ne = 'normal';
      const ze = 13;
      const Pe = {
        'category-6': [
          '#ec8431',
          '#829eb1',
          '#c89d29',
          '#3580b1',
          '#adc839',
          '#ab7fb4',
        ],
        'fire-7': [
          '#fbf2c7',
          '#f9e39c',
          '#f8d36e',
          '#f4bb6a',
          '#e68a4f',
          '#d15a40',
          '#ab4232',
        ],
        'fireandice-6': [
          '#e68a4f',
          '#f4bb6a',
          '#f9e39c',
          '#dadfe2',
          '#a6b7c6',
          '#849eae',
        ],
        'ice-7': [
          '#edefee',
          '#dadfe2',
          '#c4ccd2',
          '#a6b7c6',
          '#849eae',
          '#607785',
          '#47525d',
        ],
      };
      const Ie = {
        background: '#ffffff',
        title: {
          anchor: 'start',
          color: '#000000',
          font: Te,
          fontSize: De,
          fontWeight: _e,
        },
        arc: { fill: je },
        area: { fill: je },
        line: { stroke: je, strokeWidth: 2 },
        path: { stroke: je },
        rect: { fill: je },
        shape: { stroke: je },
        symbol: { fill: je, size: 30 },
        axis: {
          labelFont: Ce,
          labelFontSize: Le,
          labelFontWeight: Fe,
          titleFont: Te,
          titleFontSize: ze,
          titleFontWeight: Ne,
        },
        axisX: { labelAngle: 0, labelPadding: 4, tickSize: 3 },
        axisY: {
          labelBaseline: 'middle',
          maxExtent: 45,
          minExtent: 45,
          tickSize: 2,
          titleAlign: 'left',
          titleAngle: 0,
          titleX: -45,
          titleY: -11,
        },
        legend: {
          labelFont: Ce,
          labelFontSize: Le,
          symbolType: 'square',
          titleFont: Te,
          titleFontSize: ze,
          titleFontWeight: Ne,
        },
        range: {
          category: Pe['category-6'],
          diverging: Pe['fireandice-6'],
          heatmap: Pe['fire-7'],
          ordinal: Pe['fire-7'],
          ramp: Pe['fire-7'],
        },
      };
      const Be = '#ab5787';
      const Re = '#979797';
      const We = {
        background: '#f9f9f9',
        arc: { fill: Be },
        area: { fill: Be },
        line: { stroke: Be },
        path: { stroke: Be },
        rect: { fill: Be },
        shape: { stroke: Be },
        symbol: { fill: Be, size: 30 },
        axis: {
          domainColor: Re,
          domainWidth: 0.5,
          gridWidth: 0.2,
          labelColor: Re,
          tickColor: Re,
          tickWidth: 0.2,
          titleColor: Re,
        },
        axisBand: { grid: false },
        axisX: { grid: true, tickSize: 10 },
        axisY: { domain: false, grid: true, tickSize: 0 },
        legend: { labelFontSize: 11, padding: 1, symbolSize: 30, symbolType: 'square' },
        range: {
          category: [
            '#ab5787',
            '#51b2e5',
            '#703c5c',
            '#168dd9',
            '#d190b6',
            '#00609f',
            '#d365ba',
            '#154866',
            '#666666',
            '#c4c4c4',
          ],
        },
      };
      const Me = '#3e5c69';
      const Je = {
        background: '#fff',
        arc: { fill: Me },
        area: { fill: Me },
        line: { stroke: Me },
        path: { stroke: Me },
        rect: { fill: Me },
        shape: { stroke: Me },
        symbol: { fill: Me },
        axis: {
          domainWidth: 0.5,
          grid: true,
          labelPadding: 2,
          tickSize: 5,
          tickWidth: 0.5,
          titleFontWeight: 'normal',
        },
        axisBand: { grid: false },
        axisX: { gridWidth: 0.2 },
        axisY: { gridDash: [3], gridWidth: 0.4 },
        legend: { labelFontSize: 11, padding: 1, symbolType: 'square' },
        range: {
          category: [
            '#3e5c69',
            '#6793a6',
            '#182429',
            '#0570b0',
            '#3690c0',
            '#74a9cf',
            '#a6bddb',
            '#e2ddf2',
          ],
        },
      };
      const Ue = '#1696d2';
      const Ve = '#000000';
      const He = '#FFFFFF';
      const qe = 'Lato';
      const $e = 'Lato';
      const Ge = 'Lato';
      const Ye = '#DEDDDD';
      const Xe = 18;
      const Ke = {
        'main-colors': [
          '#1696d2',
          '#d2d2d2',
          '#000000',
          '#fdbf11',
          '#ec008b',
          '#55b748',
          '#5c5859',
          '#db2b27',
        ],
        'shades-blue': [
          '#CFE8F3',
          '#A2D4EC',
          '#73BFE2',
          '#46ABDB',
          '#1696D2',
          '#12719E',
          '#0A4C6A',
          '#062635',
        ],
        'shades-gray': [
          '#F5F5F5',
          '#ECECEC',
          '#E3E3E3',
          '#DCDBDB',
          '#D2D2D2',
          '#9D9D9D',
          '#696969',
          '#353535',
        ],
        'shades-yellow': [
          '#FFF2CF',
          '#FCE39E',
          '#FDD870',
          '#FCCB41',
          '#FDBF11',
          '#E88E2D',
          '#CA5800',
          '#843215',
        ],
        'shades-magenta': [
          '#F5CBDF',
          '#EB99C2',
          '#E46AA7',
          '#E54096',
          '#EC008B',
          '#AF1F6B',
          '#761548',
          '#351123',
        ],
        'shades-green': [
          '#DCEDD9',
          '#BCDEB4',
          '#98CF90',
          '#78C26D',
          '#55B748',
          '#408941',
          '#2C5C2D',
          '#1A2E19',
        ],
        'shades-black': [
          '#D5D5D4',
          '#ADABAC',
          '#848081',
          '#5C5859',
          '#332D2F',
          '#262223',
          '#1A1717',
          '#0E0C0D',
        ],
        'shades-red': [
          '#F8D5D4',
          '#F1AAA9',
          '#E9807D',
          '#E25552',
          '#DB2B27',
          '#A4201D',
          '#6E1614',
          '#370B0A',
        ],
        'one-group': ['#1696d2', '#000000'],
        'two-groups-cat-1': ['#1696d2', '#000000'],
        'two-groups-cat-2': ['#1696d2', '#fdbf11'],
        'two-groups-cat-3': ['#1696d2', '#db2b27'],
        'two-groups-seq': ['#a2d4ec', '#1696d2'],
        'three-groups-cat': ['#1696d2', '#fdbf11', '#000000'],
        'three-groups-seq': ['#a2d4ec', '#1696d2', '#0a4c6a'],
        'four-groups-cat-1': ['#000000', '#d2d2d2', '#fdbf11', '#1696d2'],
        'four-groups-cat-2': ['#1696d2', '#ec0008b', '#fdbf11', '#5c5859'],
        'four-groups-seq': ['#cfe8f3', '#73bf42', '#1696d2', '#0a4c6a'],
        'five-groups-cat-1': ['#1696d2', '#fdbf11', '#d2d2d2', '#ec008b', '#000000'],
        'five-groups-cat-2': ['#1696d2', '#0a4c6a', '#d2d2d2', '#fdbf11', '#332d2f'],
        'five-groups-seq': ['#cfe8f3', '#73bf42', '#1696d2', '#0a4c6a', '#000000'],
        'six-groups-cat-1': [
          '#1696d2',
          '#ec008b',
          '#fdbf11',
          '#000000',
          '#d2d2d2',
          '#55b748',
        ],
        'six-groups-cat-2': [
          '#1696d2',
          '#d2d2d2',
          '#ec008b',
          '#fdbf11',
          '#332d2f',
          '#0a4c6a',
        ],
        'six-groups-seq': [
          '#cfe8f3',
          '#a2d4ec',
          '#73bfe2',
          '#46abdb',
          '#1696d2',
          '#12719e',
        ],
        'diverging-colors': [
          '#ca5800',
          '#fdbf11',
          '#fdd870',
          '#fff2cf',
          '#cfe8f3',
          '#73bfe2',
          '#1696d2',
          '#0a4c6a',
        ],
      };
      const Qe = {
        background: He,
        title: { anchor: 'start', fontSize: Xe, font: qe },
        axisX: {
          domain: true,
          domainColor: Ve,
          domainWidth: 1,
          grid: false,
          labelFontSize: 12,
          labelFont: $e,
          labelAngle: 0,
          tickColor: Ve,
          tickSize: 5,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: qe,
        },
        axisY: {
          domain: false,
          domainWidth: 1,
          grid: true,
          gridColor: Ye,
          gridWidth: 1,
          labelFontSize: 12,
          labelFont: $e,
          labelPadding: 8,
          ticks: false,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: qe,
          titleAngle: 0,
          titleY: -10,
          titleX: 18,
        },
        legend: {
          labelFontSize: 12,
          labelFont: $e,
          symbolSize: 100,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: qe,
          orient: 'right',
          offset: 10,
        },
        view: { stroke: 'transparent' },
        range: {
          category: Ke['six-groups-cat-1'],
          diverging: Ke['diverging-colors'],
          heatmap: Ke['diverging-colors'],
          ordinal: Ke['six-groups-seq'],
          ramp: Ke['shades-blue'],
        },
        area: { fill: Ue },
        rect: { fill: Ue },
        line: { color: Ue, stroke: Ue, strokeWidth: 5 },
        trail: { color: Ue, stroke: Ue, strokeWidth: 0, size: 1 },
        path: { stroke: Ue, strokeWidth: 0.5 },
        point: { filled: true },
        text: {
          font: Ge,
          color: Ue,
          fontSize: 11,
          align: 'center',
          fontWeight: 400,
          size: 11,
        },
        style: { bar: { fill: Ue, stroke: null } },
        arc: { fill: Ue },
        shape: { stroke: Ue },
        symbol: { fill: Ue, size: 30 },
      };
      const Ze = '#3366CC';
      const et = '#ccc';
      const tt = 'Arial, sans-serif';
      const nt = {
        arc: { fill: Ze },
        area: { fill: Ze },
        path: { stroke: Ze },
        rect: { fill: Ze },
        shape: { stroke: Ze },
        symbol: { stroke: Ze },
        circle: { fill: Ze },
        background: '#fff',
        padding: { top: 10, right: 10, bottom: 10, left: 10 },
        style: {
          'guide-label': { font: tt, fontSize: 12 },
          'guide-title': { font: tt, fontSize: 12 },
          'group-title': { font: tt, fontSize: 12 },
        },
        title: { font: tt, fontSize: 14, fontWeight: 'bold', dy: -3, anchor: 'start' },
        axis: { gridColor: et, tickColor: et, domain: false, grid: true },
        range: {
          category: [
            '#4285F4',
            '#DB4437',
            '#F4B400',
            '#0F9D58',
            '#AB47BC',
            '#00ACC1',
            '#FF7043',
            '#9E9D24',
            '#5C6BC0',
            '#F06292',
            '#00796B',
            '#C2185B',
          ],
          heatmap: ['#c6dafc', '#5e97f6', '#2a56c6'],
        },
      };
      const rt = de.version;
      var it = n(48823);
      var ot = 'vega-tooltip';
      var at = '0.25.1';
      var lt = 'A tooltip plugin for Vega-Lite and Vega visualizations.';
      var st = ['vega-lite', 'vega', 'tooltip'];
      var ct = { type: 'git', url: 'https://github.com/vega/vega-tooltip.git' };
      var ut = {
        name: 'UW Interactive Data Lab',
        url: 'https://idl.cs.washington.edu',
      };
      var ft = [
        'Dominik Moritz',
        'Sira Horradarn',
        'Zening Qu',
        'Kanit Wongsuphasawat',
        'Yuri Astrakhan',
        'Jeffrey Heer',
      ];
      var dt = 'BSD-3-Clause';
      var pt = { url: 'https://github.com/vega/vega-tooltip/issues' };
      var ht = 'https://github.com/vega/vega-tooltip#readme';
      var gt = 'build/vega-tooltip.js';
      var vt = 'build/vega-tooltip.module.js';
      var mt = 'build/vega-tooltip.min.js';
      var bt = 'build/vega-tooltip.min.js';
      var yt = 'build/vega-tooltip.module.d.ts';
      var wt = ['src', 'build', 'types'];
      var xt = {
        prebuild: 'yarn clean && yarn build:style',
        build: 'rollup -c',
        'build:style': './build-style.sh',
        clean: 'rimraf build && rimraf src/style.ts',
        'copy:data': 'rsync -r node_modules/vega-datasets/data/* examples/data',
        'copy:build': 'rsync -r build/* examples/build',
        'deploy:gh':
          'yarn build && yarn copy:build && gh-pages -d examples && yarn clean',
        prepublishOnly: 'yarn clean && yarn build',
        preversion: 'yarn lint && yarn test',
        serve: 'browser-sync start -s -f build examples --serveStatic examples',
        start:
          "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
        pretest: 'yarn build:style',
        test: 'beemo jest',
        'test:inspect': 'node --inspect-brk ./node_modules/.bin/jest --runInBand',
        prepare: 'beemo create-config && yarn copy:data',
        prettierbase: "beemo prettier '*.{css,scss,html}'",
        eslintbase: 'beemo eslint .',
        format: 'yarn eslintbase --fix && yarn prettierbase --write',
        lint: 'yarn eslintbase && yarn prettierbase --check',
      };
      var Ot = {
        '@rollup/plugin-json': '^4.1.0',
        '@rollup/plugin-node-resolve': '^11.2.0',
        '@wessberg/rollup-plugin-ts': '^1.3.8',
        'browser-sync': '^2.26.14',
        concurrently: '^6.0.0',
        'gh-pages': '^3.1.0',
        'node-sass': '^5.0.0',
        path: '^0.12.7',
        rollup: '^2.39.1',
        'rollup-plugin-bundle-size': '^1.0.3',
        'rollup-plugin-terser': '^7.0.2',
        typescript: '~4.2.2',
        'vega-datasets': '^2.2.0',
        'vega-lite-dev-config': '^0.16.1',
        'vega-typings': '^0.19.2',
      };
      var Et = { 'vega-util': '^1.16.0' };
      var kt = {
        name: ot,
        version: at,
        description: lt,
        keywords: st,
        repository: ct,
        author: ut,
        collaborators: ft,
        license: dt,
        bugs: pt,
        homepage: ht,
        main: gt,
        module: vt,
        unpkg: mt,
        jsdelivr: bt,
        types: yt,
        files: wt,
        scripts: xt,
        devDependencies: Ot,
        dependencies: Et,
      };
      var At = `#vg-tooltip-element {\n  visibility: hidden;\n  padding: 8px;\n  position: fixed;\n  z-index: 1000;\n  font-family: sans-serif;\n  font-size: 11px;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  /* The default theme is the light theme. */\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #d9d9d9;\n  color: black; }\n  #vg-tooltip-element.visible {\n    visibility: visible; }\n  #vg-tooltip-element h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 13px; }\n  #vg-tooltip-element img {\n    max-width: 200px;\n    max-height: 200px; }\n  #vg-tooltip-element table {\n    border-spacing: 0; }\n    #vg-tooltip-element table tr {\n      border: none; }\n      #vg-tooltip-element table tr td {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding-top: 2px;\n        padding-bottom: 2px; }\n        #vg-tooltip-element table tr td.key {\n          color: #808080;\n          max-width: 150px;\n          text-align: right;\n          padding-right: 4px; }\n        #vg-tooltip-element table tr td.value {\n          display: block;\n          max-width: 300px;\n          max-height: 7em;\n          text-align: left; }\n  #vg-tooltip-element.dark-theme {\n    background-color: rgba(32, 32, 32, 0.9);\n    border: 1px solid #f5f5f5;\n    color: white; }\n    #vg-tooltip-element.dark-theme td.key {\n      color: #bfbfbf; }\n`;
      const St = 'vg-tooltip-element';
      const Dt = {
        offsetX: 10,
        offsetY: 10,
        id: St,
        styleId: 'vega-tooltip-style',
        theme: 'light',
        disableDefaultStyle: false,
        sanitize: _t,
        maxDepth: 2,
      };
      function _t(e) {
        return String(e).replace(/&/g, '&amp;').replace(/</g, '&lt;');
      }
      function Ct(e) {
        if (!/^[A-Za-z]+[-:.\w]*$/.test(e)) {
          throw new Error('Invalid HTML ID');
        }
        return At.toString().replace(St, e);
      }
      function Lt(e, t) {
        var n = {};
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0)
            n[r] = e[r];
        if (e != null && typeof Object.getOwnPropertySymbols === 'function')
          for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
            if (
              t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i])
            )
              n[r[i]] = e[r[i]];
          }
        return n;
      }
      function Ft(e, t, n) {
        if ((0, it.kJ)(e)) {
          return `[${e.map((e) => t((0, it.HD)(e) ? e : Tt(e, n))).join(', ')}]`;
        }
        if ((0, it.Kn)(e)) {
          let r = '';
          const i = e,
            { title: o, image: a } = i,
            l = Lt(i, ['title', 'image']);
          if (o) {
            r += `<h2>${t(o)}</h2>`;
          }
          if (a) {
            r += `<img src="${t(a)}">`;
          }
          const s = Object.keys(l);
          if (s.length > 0) {
            r += '<table>';
            for (const e of s) {
              let i = l[e];
              if (i === undefined) {
                continue;
              }
              if ((0, it.Kn)(i)) {
                i = Tt(i, n);
              }
              r += `<tr><td class="key">${t(e)}:</td><td class="value">${t(
                i
              )}</td></tr>`;
            }
            r += `</table>`;
          }
          return r || '{}';
        }
        return t(e);
      }
      function jt(e) {
        const t = [];
        return function (n, r) {
          if (typeof r !== 'object' || r === null) {
            return r;
          }
          const i = t.indexOf(this) + 1;
          t.length = i;
          if (t.length > e) {
            return '[Object]';
          }
          if (t.indexOf(r) >= 0) {
            return '[Circular]';
          }
          t.push(r);
          return r;
        };
      }
      function Tt(e, t) {
        return JSON.stringify(e, jt(t));
      }
      function Nt(e, t, n, r) {
        let i = e.clientX + n;
        if (i + t.width > window.innerWidth) {
          i = +e.clientX - n - t.width;
        }
        let o = e.clientY + r;
        if (o + t.height > window.innerHeight) {
          o = +e.clientY - r - t.height;
        }
        return { x: i, y: o };
      }
      class zt {
        constructor(e) {
          this.options = Object.assign(Object.assign({}, Dt), e);
          const t = this.options.id;
          this.el = null;
          this.call = this.tooltipHandler.bind(this);
          if (
            !this.options.disableDefaultStyle &&
            !document.getElementById(this.options.styleId)
          ) {
            const e = document.createElement('style');
            e.setAttribute('id', this.options.styleId);
            e.innerHTML = Ct(t);
            const n = document.head;
            if (n.childNodes.length > 0) {
              n.insertBefore(e, n.childNodes[0]);
            } else {
              n.appendChild(e);
            }
          }
        }
        tooltipHandler(e, t, n, r) {
          this.el = document.getElementById(this.options.id);
          if (!this.el) {
            this.el = document.createElement('div');
            this.el.setAttribute('id', this.options.id);
            this.el.classList.add('vg-tooltip');
            document.body.appendChild(this.el);
          }
          const i =
            document.fullscreenElement != null
              ? document.fullscreenElement
              : document.body;
          i.appendChild(this.el);
          if (r == null || r === '') {
            this.el.classList.remove('visible', `${this.options.theme}-theme`);
            return;
          }
          this.el.innerHTML = Ft(r, this.options.sanitize, this.options.maxDepth);
          this.el.classList.add('visible', `${this.options.theme}-theme`);
          const { x: o, y: a } = Nt(
            t,
            this.el.getBoundingClientRect(),
            this.options.offsetX,
            this.options.offsetY
          );
          this.el.setAttribute('style', `top: ${a}px; left: ${o}px`);
        }
      }
      const Pt = kt.version;
      function It(e, t) {
        const n = new zt(t);
        e.tooltip(n.call).run();
        return n;
      }
      const Bt = null && It;
      function Rt(e, t, n) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          e[t] = n;
        }
        return e;
      }
      function Wt(e, t, n, r, i, o, a) {
        try {
          var l = e[o](a);
          var s = l.value;
        } catch (c) {
          n(c);
          return;
        }
        if (l.done) {
          t(s);
        } else {
          Promise.resolve(s).then(r, i);
        }
      }
      function Mt(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              Wt(o, r, i, a, l, 'next', e);
            }
            function l(e) {
              Wt(o, r, i, a, l, 'throw', e);
            }
            a(undefined);
          });
        };
      }
      var Jt = Object.prototype;
      var Ut = Jt.hasOwnProperty;
      var Vt;
      var Ht = typeof Symbol === 'function' ? Symbol : {};
      var qt = Ht.iterator || '@@iterator';
      var $t = Ht.asyncIterator || '@@asyncIterator';
      var Gt = Ht.toStringTag || '@@toStringTag';
      function Yt(e, t, n, r) {
        var i = t && t.prototype instanceof nn ? t : nn;
        var o = Object.create(i.prototype);
        var a = new wn(r || []);
        o._invoke = vn(e, n, a);
        return o;
      }
      function Xt(e, t, n) {
        try {
          return { type: 'normal', arg: e.call(t, n) };
        } catch (r) {
          return { type: 'throw', arg: r };
        }
      }
      var Kt = 'suspendedStart';
      var Qt = 'suspendedYield';
      var Zt = 'executing';
      var en = 'completed';
      var tn = {};
      function nn() {}
      function rn() {}
      function on() {}
      var an = {};
      an[qt] = function () {
        return this;
      };
      var ln = Object.getPrototypeOf;
      var sn = ln && ln(ln(On([])));
      if (sn && sn !== Jt && Ut.call(sn, qt)) {
        an = sn;
      }
      var cn = (on.prototype = nn.prototype = Object.create(an));
      rn.prototype = cn.constructor = on;
      on.constructor = rn;
      on[Gt] = rn.displayName = 'GeneratorFunction';
      function un(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function fn(e) {
        var t = typeof e === 'function' && e.constructor;
        return t
          ? t === rn || (t.displayName || t.name) === 'GeneratorFunction'
          : false;
      }
      function dn(e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, on);
        } else {
          e.__proto__ = on;
          if (!(Gt in e)) {
            e[Gt] = 'GeneratorFunction';
          }
        }
        e.prototype = Object.create(cn);
        return e;
      }
      function pn(e) {
        return { __await: e };
      }
      function hn(e, t) {
        function n(r, i, o, a) {
          var l = Xt(e[r], e, i);
          if (l.type === 'throw') {
            a(l.arg);
          } else {
            var s = l.arg;
            var c = s.value;
            if (c && typeof c === 'object' && Ut.call(c, '__await')) {
              return t.resolve(c.__await).then(
                function (e) {
                  n('next', e, o, a);
                },
                function (e) {
                  n('throw', e, o, a);
                }
              );
            }
            return t.resolve(c).then(
              function (e) {
                s.value = e;
                o(s);
              },
              function (e) {
                return n('throw', e, o, a);
              }
            );
          }
        }
        var r;
        function i(e, i) {
          function o() {
            return new t(function (t, r) {
              n(e, i, t, r);
            });
          }
          return (r = r ? r.then(o, o) : o());
        }
        this._invoke = i;
      }
      un(hn.prototype);
      hn.prototype[$t] = function () {
        return this;
      };
      function gn(e, t, n, r, i) {
        if (i === void 0) i = Promise;
        var o = new hn(Yt(e, t, n, r), i);
        return fn(t)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next();
            });
      }
      function vn(e, t, n) {
        var r = Kt;
        return function i(o, a) {
          if (r === Zt) {
            throw new Error('Generator is already running');
          }
          if (r === en) {
            if (o === 'throw') {
              throw a;
            }
            return En();
          }
          n.method = o;
          n.arg = a;
          while (true) {
            var l = n.delegate;
            if (l) {
              var s = mn(l, n);
              if (s) {
                if (s === tn) continue;
                return s;
              }
            }
            if (n.method === 'next') {
              n.sent = n._sent = n.arg;
            } else if (n.method === 'throw') {
              if (r === Kt) {
                r = en;
                throw n.arg;
              }
              n.dispatchException(n.arg);
            } else if (n.method === 'return') {
              n.abrupt('return', n.arg);
            }
            r = Zt;
            var c = Xt(e, t, n);
            if (c.type === 'normal') {
              r = n.done ? en : Qt;
              if (c.arg === tn) {
                continue;
              }
              return { value: c.arg, done: n.done };
            } else if (c.type === 'throw') {
              r = en;
              n.method = 'throw';
              n.arg = c.arg;
            }
          }
        };
      }
      function mn(e, t) {
        var n = e.iterator[t.method];
        if (n === Vt) {
          t.delegate = null;
          if (t.method === 'throw') {
            if (e.iterator['return']) {
              t.method = 'return';
              t.arg = Vt;
              mn(e, t);
              if (t.method === 'throw') {
                return tn;
              }
            }
            t.method = 'throw';
            t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return tn;
        }
        var r = Xt(n, e.iterator, t.arg);
        if (r.type === 'throw') {
          t.method = 'throw';
          t.arg = r.arg;
          t.delegate = null;
          return tn;
        }
        var i = r.arg;
        if (!i) {
          t.method = 'throw';
          t.arg = new TypeError('iterator result is not an object');
          t.delegate = null;
          return tn;
        }
        if (i.done) {
          t[e.resultName] = i.value;
          t.next = e.nextLoc;
          if (t.method !== 'return') {
            t.method = 'next';
            t.arg = Vt;
          }
        } else {
          return i;
        }
        t.delegate = null;
        return tn;
      }
      un(cn);
      cn[Gt] = 'Generator';
      cn[qt] = function () {
        return this;
      };
      cn.toString = function () {
        return '[object Generator]';
      };
      function bn(e) {
        var t = { tryLoc: e[0] };
        if (1 in e) {
          t.catchLoc = e[1];
        }
        if (2 in e) {
          t.finallyLoc = e[2];
          t.afterLoc = e[3];
        }
        this.tryEntries.push(t);
      }
      function yn(e) {
        var t = e.completion || {};
        t.type = 'normal';
        delete t.arg;
        e.completion = t;
      }
      function wn(e) {
        this.tryEntries = [{ tryLoc: 'root' }];
        e.forEach(bn, this);
        this.reset(true);
      }
      function xn(e) {
        var t = [];
        for (var n in e) {
          t.push(n);
        }
        t.reverse();
        return function n() {
          while (t.length) {
            var r = t.pop();
            if (r in e) {
              n.value = r;
              n.done = false;
              return n;
            }
          }
          n.done = true;
          return n;
        };
      }
      function On(e) {
        if (e) {
          var t = e[qt];
          if (t) {
            return t.call(e);
          }
          if (typeof e.next === 'function') {
            return e;
          }
          if (!isNaN(e.length)) {
            var n = -1,
              r = function t() {
                while (++n < e.length) {
                  if (Ut.call(e, n)) {
                    t.value = e[n];
                    t.done = false;
                    return t;
                  }
                }
                t.value = Vt;
                t.done = true;
                return t;
              };
            return (r.next = r);
          }
        }
        return { next: En };
      }
      function En() {
        return { value: Vt, done: true };
      }
      wn.prototype = {
        constructor: wn,
        reset: function e(t) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = Vt;
          this.done = false;
          this.delegate = null;
          this.method = 'next';
          this.arg = Vt;
          this.tryEntries.forEach(yn);
          if (!t) {
            for (var n in this) {
              if (n.charAt(0) === 't' && Ut.call(this, n) && !isNaN(+n.slice(1))) {
                this[n] = Vt;
              }
            }
          }
        },
        stop: function e() {
          this.done = true;
          var t = this.tryEntries[0];
          var n = t.completion;
          if (n.type === 'throw') {
            throw n.arg;
          }
          return this.rval;
        },
        dispatchException: function e(t) {
          if (this.done) {
            throw t;
          }
          var n = this;
          function r(e, r) {
            a.type = 'throw';
            a.arg = t;
            n.next = e;
            if (r) {
              n.method = 'next';
              n.arg = Vt;
            }
            return !!r;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var o = this.tryEntries[i];
            var a = o.completion;
            if (o.tryLoc === 'root') {
              return r('end');
            }
            if (o.tryLoc <= this.prev) {
              var l = Ut.call(o, 'catchLoc');
              var s = Ut.call(o, 'finallyLoc');
              if (l && s) {
                if (this.prev < o.catchLoc) {
                  return r(o.catchLoc, true);
                } else if (this.prev < o.finallyLoc) {
                  return r(o.finallyLoc);
                }
              } else if (l) {
                if (this.prev < o.catchLoc) {
                  return r(o.catchLoc, true);
                }
              } else if (s) {
                if (this.prev < o.finallyLoc) {
                  return r(o.finallyLoc);
                }
              } else {
                throw new Error('try statement without catch or finally');
              }
            }
          }
        },
        abrupt: function e(t, n) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var i = this.tryEntries[r];
            if (
              i.tryLoc <= this.prev &&
              Ut.call(i, 'finallyLoc') &&
              this.prev < i.finallyLoc
            ) {
              var o = i;
              break;
            }
          }
          if (
            o &&
            (t === 'break' || t === 'continue') &&
            o.tryLoc <= n &&
            n <= o.finallyLoc
          ) {
            o = null;
          }
          var a = o ? o.completion : {};
          a.type = t;
          a.arg = n;
          if (o) {
            this.method = 'next';
            this.next = o.finallyLoc;
            return tn;
          }
          return this.complete(a);
        },
        complete: function e(t, n) {
          if (t.type === 'throw') {
            throw t.arg;
          }
          if (t.type === 'break' || t.type === 'continue') {
            this.next = t.arg;
          } else if (t.type === 'return') {
            this.rval = this.arg = t.arg;
            this.method = 'return';
            this.next = 'end';
          } else if (t.type === 'normal' && n) {
            this.next = n;
          }
          return tn;
        },
        finish: function e(t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r.finallyLoc === t) {
              this.complete(r.completion, r.afterLoc);
              yn(r);
              return tn;
            }
          }
        },
        catch: function e(t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r.tryLoc === t) {
              var i = r.completion;
              if (i.type === 'throw') {
                var o = i.arg;
                yn(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function e(t, n, r) {
          this.delegate = { iterator: On(t), resultName: n, nextLoc: r };
          if (this.method === 'next') {
            this.arg = Vt;
          }
          return tn;
        },
      };
      var kn = {
        wrap: Yt,
        isGeneratorFunction: fn,
        AsyncIterator: hn,
        mark: dn,
        awrap: pn,
        async: gn,
        keys: xn,
        values: On,
      };
      function An(e, t, n) {
        var r = e.open(t);
        var i = 1e4;
        var o = 250;
        var a = new URL(t),
          l = a.origin;
        var s = ~~(i / o);
        function c(t) {
          if (t.source === r) {
            s = 0;
            e.removeEventListener('message', c, false);
          }
        }
        e.addEventListener('message', c, false);
        function u() {
          if (s <= 0) {
            return;
          }
          r.postMessage(n, l);
          setTimeout(u, o);
          s -= 1;
        }
        setTimeout(u, o);
      }
      var Sn =
        '.vega-embed {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box; }\n  .vega-embed.has-actions {\n    padding-right: 38px; }\n  .vega-embed details:not([open]) > :not(summary) {\n    display: none !important; }\n  .vega-embed summary {\n    list-style: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 6px;\n    z-index: 1000;\n    background: white;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n    color: #1b1e23;\n    border: 1px solid #aaa;\n    border-radius: 999px;\n    opacity: 0.2;\n    transition: opacity 0.4s ease-in;\n    outline: none;\n    cursor: pointer;\n    line-height: 0px; }\n    .vega-embed summary::-webkit-details-marker {\n      display: none; }\n    .vega-embed summary:active {\n      box-shadow: #aaa 0px 0px 0px 1px inset; }\n    .vega-embed summary svg {\n      width: 14px;\n      height: 14px; }\n  .vega-embed details[open] summary {\n    opacity: 0.7; }\n  .vega-embed:hover summary,\n  .vega-embed:focus summary {\n    opacity: 1 !important;\n    transition: opacity 0.2s ease; }\n  .vega-embed .vega-actions {\n    position: absolute;\n    z-index: 1001;\n    top: 35px;\n    right: -9px;\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 8px;\n    padding-top: 8px;\n    border-radius: 4px;\n    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n    border: 1px solid #d9d9d9;\n    background: white;\n    animation-duration: 0.15s;\n    animation-name: scale-in;\n    animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n    text-align: left; }\n    .vega-embed .vega-actions a {\n      padding: 8px 16px;\n      font-family: sans-serif;\n      font-size: 14px;\n      font-weight: 600;\n      white-space: nowrap;\n      color: #434a56;\n      text-decoration: none; }\n      .vega-embed .vega-actions a:hover {\n        background-color: #f7f7f9;\n        color: black; }\n    .vega-embed .vega-actions::before, .vega-embed .vega-actions::after {\n      content: "";\n      display: inline-block;\n      position: absolute; }\n    .vega-embed .vega-actions::before {\n      left: auto;\n      right: 14px;\n      top: -16px;\n      border: 8px solid #0000;\n      border-bottom-color: #d9d9d9; }\n    .vega-embed .vega-actions::after {\n      left: auto;\n      right: 15px;\n      top: -14px;\n      border: 7px solid #0000;\n      border-bottom-color: #fff; }\n  .vega-embed .chart-wrapper.fit-x {\n    width: 100%; }\n  .vega-embed .chart-wrapper.fit-y {\n    height: 100%; }\n\n.vega-embed-wrapper {\n  max-width: 100%;\n  overflow: auto;\n  padding-right: 14px; }\n\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.6); }\n  to {\n    opacity: 1;\n    transform: scale(1); } }\n';
      if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (e, t) {
          return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
        };
      }
      function Dn(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        ) {
          n[r - 1] = arguments[r];
        }
        for (var i = 0, o = n; i < o.length; i++) {
          var a = o[i];
          _n(e, a);
        }
        return e;
      }
      function _n(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
          var i = r[n];
          (0, H.writeConfig)(e, i, t[i], true);
        }
      }
      var Cn;
      function Ln(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          n.push.apply(n, r);
        }
        return n;
      }
      function Fn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          if (t % 2) {
            Ln(Object(n), true).forEach(function (t) {
              Rt(e, t, n[t]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
          } else {
            Ln(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
        }
        return e;
      }
      var jn = H;
      var Tn = q;
      var Nn = typeof window !== 'undefined' ? window : undefined;
      if (
        Tn === undefined &&
        Nn !== null &&
        Nn !== void 0 &&
        (Cn = Nn['vl']) !== null &&
        Cn !== void 0 &&
        Cn.compile
      ) {
        Tn = Nn['vl'];
      }
      var zn = {
        export: { svg: true, png: true },
        source: true,
        compiled: true,
        editor: true,
      };
      var Pn = {
        CLICK_TO_VIEW_ACTIONS: 'Click to view actions',
        COMPILED_ACTION: 'View Compiled Vega',
        EDITOR_ACTION: 'Open in Vega Editor',
        PNG_ACTION: 'Save as PNG',
        SOURCE_ACTION: 'View Source',
        SVG_ACTION: 'Save as SVG',
      };
      var In = { vega: 'Vega', 'vega-lite': 'Vega-Lite' };
      var Bn = { vega: jn.version, 'vega-lite': Tn ? Tn.version : 'not available' };
      var Rn = {
        vega: (e) => e,
        'vega-lite': (e, t) => Tn.compile(e, { config: t }).spec,
      };
      var Wn =
        '\n<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle r="2" cy="8" cx="2"></circle>\n  <circle r="2" cy="8" cx="8"></circle>\n  <circle r="2" cy="8" cx="14"></circle>\n</svg>';
      var Mn = 'chart-wrapper';
      function Jn(e) {
        return typeof e === 'function';
      }
      function Un(e, t, n, r) {
        var i = '<html><head>'.concat(t, '</head><body><pre><code class="json">');
        var o = '</code></pre>'.concat(n, '</body></html>');
        var a = window.open('');
        a.document.write(i + e + o);
        a.document.title = ''.concat(In[r], ' JSON Source');
      }
      function Vn(e, t) {
        if (e.$schema) {
          var n = G(e.$schema);
          if (t && t !== n.library) {
            var r;
            console.warn(
              'The given visualization spec is written in '
                .concat(In[n.library], ', but mode argument sets ')
                .concat((r = In[t]) !== null && r !== void 0 ? r : t, '.')
            );
          }
          var i = n.library;
          if (!(0, V.satisfies)(Bn[i], '^'.concat(n.version.slice(1)))) {
            console.warn(
              'The input spec uses '
                .concat(In[i], ' ')
                .concat(n.version, ', but the current version of ')
                .concat(In[i], ' is v')
                .concat(Bn[i], '.')
            );
          }
          return i;
        }
        if (
          'mark' in e ||
          'encoding' in e ||
          'layer' in e ||
          'hconcat' in e ||
          'vconcat' in e ||
          'facet' in e ||
          'repeat' in e
        ) {
          return 'vega-lite';
        }
        if ('marks' in e || 'signals' in e || 'scales' in e || 'axes' in e) {
          return 'vega';
        }
        return t !== null && t !== void 0 ? t : 'vega';
      }
      function Hn(e) {
        return !!(e && 'load' in e);
      }
      function qn(e) {
        return Hn(e) ? e : jn.loader(e);
      }
      function $n(e) {
        var t;
        return (t = e.usermeta && e.usermeta['embedOptions']) !== null && t !== void 0
          ? t
          : {};
      }
      function Gn(e, t) {
        return Yn.apply(this, arguments);
      }
      function Yn() {
        Yn = Mt(
          kn.mark(function e(t, n) {
            var r, i;
            var o,
              a,
              l,
              s,
              c,
              u,
              f,
              d,
              p = arguments;
            return kn.wrap(function e(h) {
              while (1) {
                switch ((h.prev = h.next)) {
                  case 0:
                    o = p.length > 2 && p[2] !== undefined ? p[2] : {};
                    if (!(0, H.isString)(n)) {
                      h.next = 10;
                      break;
                    }
                    l = qn(o.loader);
                    h.t0 = JSON;
                    h.next = 6;
                    return l.load(n);
                  case 6:
                    h.t1 = h.sent;
                    a = h.t0.parse.call(h.t0, h.t1);
                    h.next = 11;
                    break;
                  case 10:
                    a = n;
                  case 11:
                    s = $n(a).loader;
                    if (!l || s) {
                      l = qn((c = o.loader) !== null && c !== void 0 ? c : s);
                    }
                    h.next = 15;
                    return Xn($n(a), l);
                  case 15:
                    u = h.sent;
                    h.next = 18;
                    return Xn(o, l);
                  case 18:
                    f = h.sent;
                    d = Fn(
                      Fn({}, Dn(f, u)),
                      {},
                      {
                        config: (0, H.mergeConfig)(
                          (r = f.config) !== null && r !== void 0 ? r : {},
                          (i = u.config) !== null && i !== void 0 ? i : {}
                        ),
                      }
                    );
                    h.next = 22;
                    return Zn(t, a, d, l);
                  case 22:
                    return h.abrupt('return', h.sent);
                  case 23:
                  case 'end':
                    return h.stop();
                }
              }
            }, e);
          })
        );
        return Yn.apply(this, arguments);
      }
      function Xn(e, t) {
        return Kn.apply(this, arguments);
      }
      function Kn() {
        Kn = Mt(
          kn.mark(function e(t, n) {
            var r;
            var i, o;
            return kn.wrap(function e(a) {
              while (1) {
                switch ((a.prev = a.next)) {
                  case 0:
                    if (!(0, H.isString)(t.config)) {
                      a.next = 8;
                      break;
                    }
                    a.t1 = JSON;
                    a.next = 4;
                    return n.load(t.config);
                  case 4:
                    a.t2 = a.sent;
                    a.t0 = a.t1.parse.call(a.t1, a.t2);
                    a.next = 9;
                    break;
                  case 8:
                    a.t0 = (r = t.config) !== null && r !== void 0 ? r : {};
                  case 9:
                    i = a.t0;
                    if (!(0, H.isString)(t.patch)) {
                      a.next = 18;
                      break;
                    }
                    a.t4 = JSON;
                    a.next = 14;
                    return n.load(t.patch);
                  case 14:
                    a.t5 = a.sent;
                    a.t3 = a.t4.parse.call(a.t4, a.t5);
                    a.next = 19;
                    break;
                  case 18:
                    a.t3 = t.patch;
                  case 19:
                    o = a.t3;
                    return a.abrupt(
                      'return',
                      Fn(Fn(Fn({}, t), o ? { patch: o } : {}), i ? { config: i } : {})
                    );
                  case 21:
                  case 'end':
                    return a.stop();
                }
              }
            }, e);
          })
        );
        return Kn.apply(this, arguments);
      }
      function Qn(e) {
        var t = e.getRootNode ? e.getRootNode() : document;
        if (t instanceof ShadowRoot) {
          return { root: t, rootContainer: t };
        } else {
          var n;
          return {
            root: document,
            rootContainer:
              (n = document.head) !== null && n !== void 0 ? n : document.body,
          };
        }
      }
      function Zn(e, t) {
        return er.apply(this, arguments);
      }
      function er() {
        er = Mt(
          kn.mark(function e(t, n) {
            var r, i, a, l, s;
            var c,
              u,
              f,
              d,
              p,
              h,
              g,
              v,
              m,
              b,
              y,
              w,
              x,
              O,
              E,
              k,
              S,
              D,
              _,
              C,
              L,
              F,
              j,
              T,
              N,
              z,
              P,
              I,
              B,
              R,
              W,
              M,
              J,
              q,
              $,
              Y,
              X,
              K,
              Q,
              Z,
              ee,
              te,
              ne = arguments;
            return kn.wrap(function e(re) {
              while (1) {
                switch ((re.prev = re.next)) {
                  case 0:
                    te = function e() {
                      if (B) {
                        document.removeEventListener('click', B);
                      }
                      j.finalize();
                    };
                    c = ne.length > 2 && ne[2] !== undefined ? ne[2] : {};
                    u = ne.length > 3 ? ne[3] : undefined;
                    f = c.theme
                      ? (0, H.mergeConfig)(
                          o[c.theme],
                          (r = c.config) !== null && r !== void 0 ? r : {}
                        )
                      : c.config;
                    d = (0, H.isBoolean)(c.actions)
                      ? c.actions
                      : Dn({}, zn, (i = c.actions) !== null && i !== void 0 ? i : {});
                    p = Fn(Fn({}, Pn), c.i18n);
                    h = (a = c.renderer) !== null && a !== void 0 ? a : 'canvas';
                    g = (l = c.logLevel) !== null && l !== void 0 ? l : jn.Warn;
                    v =
                      (s = c.downloadFileName) !== null && s !== void 0
                        ? s
                        : 'visualization';
                    m = typeof t === 'string' ? document.querySelector(t) : t;
                    if (m) {
                      re.next = 12;
                      break;
                    }
                    throw new Error(''.concat(t, ' does not exist'));
                  case 12:
                    if (c.defaultStyle !== false) {
                      b = 'vega-embed-style';
                      (y = Qn(m)), (w = y.root), (x = y.rootContainer);
                      if (!w.getElementById(b)) {
                        O = document.createElement('style');
                        O.id = b;
                        O.innerText =
                          c.defaultStyle === undefined || c.defaultStyle === true
                            ? Sn.toString()
                            : c.defaultStyle;
                        x.appendChild(O);
                      }
                    }
                    E = Vn(n, c.mode);
                    k = Rn[E](n, f);
                    if (E === 'vega-lite') {
                      if (k.$schema) {
                        S = G(k.$schema);
                        if (
                          !(0, V.satisfies)(Bn.vega, '^'.concat(S.version.slice(1)))
                        ) {
                          console.warn(
                            'The compiled spec uses Vega '
                              .concat(S.version, ', but current version is v')
                              .concat(Bn.vega, '.')
                          );
                        }
                      }
                    }
                    m.classList.add('vega-embed');
                    if (d) {
                      m.classList.add('has-actions');
                    }
                    m.innerHTML = '';
                    D = m;
                    if (d) {
                      _ = document.createElement('div');
                      _.classList.add(Mn);
                      m.appendChild(_);
                      D = _;
                    }
                    C = c.patch;
                    if (C) {
                      if (C instanceof Function) {
                        k = C(k);
                      } else {
                        k = A(k, C, true, false).newDocument;
                      }
                    }
                    if (c.formatLocale) {
                      jn.formatLocale(c.formatLocale);
                    }
                    if (c.timeFormatLocale) {
                      jn.timeFormatLocale(c.timeFormatLocale);
                    }
                    L = c.ast;
                    F = jn.parse(k, E === 'vega-lite' ? {} : f, { ast: L });
                    j = new (c.viewClass || jn.View)(
                      F,
                      Fn(
                        { loader: u, logLevel: g, renderer: h },
                        L ? { expr: jn.expressionInterpreter } : {}
                      )
                    );
                    j.addSignalListener('autosize', (e, t) => {
                      var n = t.type;
                      if (n == 'fit-x') {
                        D.classList.add('fit-x');
                        D.classList.remove('fit-y');
                      } else if (n == 'fit-y') {
                        D.classList.remove('fit-x');
                        D.classList.add('fit-y');
                      } else if (n == 'fit') {
                        D.classList.add('fit-x', 'fit-y');
                      } else {
                        D.classList.remove('fit-x', 'fit-y');
                      }
                    });
                    if (c.tooltip !== false) {
                      if (Jn(c.tooltip)) {
                        T = c.tooltip;
                      } else {
                        T = new zt(c.tooltip === true ? {} : c.tooltip).call;
                      }
                      j.tooltip(T);
                    }
                    N = c.hover;
                    if (N === undefined) {
                      N = E === 'vega';
                    }
                    if (N) {
                      (z = typeof N === 'boolean' ? {} : N),
                        (P = z.hoverSet),
                        (I = z.updateSet);
                      j.hover(P, I);
                    }
                    if (c) {
                      if (c.width != null) {
                        j.width(c.width);
                      }
                      if (c.height != null) {
                        j.height(c.height);
                      }
                      if (c.padding != null) {
                        j.padding(c.padding);
                      }
                    }
                    re.next = 36;
                    return j.initialize(D, c.bind).runAsync();
                  case 36:
                    if (d !== false) {
                      R = m;
                      if (c.defaultStyle !== false) {
                        W = document.createElement('details');
                        W.title = p.CLICK_TO_VIEW_ACTIONS;
                        m.append(W);
                        R = W;
                        M = document.createElement('summary');
                        M.innerHTML = Wn;
                        W.append(M);
                        B = (e) => {
                          if (!W.contains(e.target)) {
                            W.removeAttribute('open');
                          }
                        };
                        document.addEventListener('click', B);
                      }
                      J = document.createElement('div');
                      R.append(J);
                      J.classList.add('vega-actions');
                      if (d === true || d.export !== false) {
                        q = function e() {
                          var t = Y[$];
                          if (d === true || d.export === true || d.export[t]) {
                            var n = p[''.concat(t.toUpperCase(), '_ACTION')];
                            var r = document.createElement('a');
                            r.text = n;
                            r.href = '#';
                            r.target = '_blank';
                            r.download = ''.concat(v, '.').concat(t);
                            r.addEventListener(
                              'mousedown',
                              (function () {
                                var e = Mt(
                                  kn.mark(function e(n) {
                                    var r;
                                    return kn.wrap(
                                      function e(i) {
                                        while (1) {
                                          switch ((i.prev = i.next)) {
                                            case 0:
                                              n.preventDefault();
                                              i.next = 3;
                                              return j.toImageURL(t, c.scaleFactor);
                                            case 3:
                                              r = i.sent;
                                              this.href = r;
                                            case 5:
                                            case 'end':
                                              return i.stop();
                                          }
                                        }
                                      },
                                      e,
                                      this
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                            J.append(r);
                          }
                        };
                        for ($ = 0, Y = ['svg', 'png']; $ < Y.length; $++) {
                          q();
                        }
                      }
                      if (d === true || d.source !== false) {
                        X = document.createElement('a');
                        X.text = p.SOURCE_ACTION;
                        X.href = '#';
                        X.addEventListener('click', function (e) {
                          var t, r;
                          Un(
                            U()(n),
                            (t = c.sourceHeader) !== null && t !== void 0 ? t : '',
                            (r = c.sourceFooter) !== null && r !== void 0 ? r : '',
                            E
                          );
                          e.preventDefault();
                        });
                        J.append(X);
                      }
                      if (E === 'vega-lite' && (d === true || d.compiled !== false)) {
                        K = document.createElement('a');
                        K.text = p.COMPILED_ACTION;
                        K.href = '#';
                        K.addEventListener('click', function (e) {
                          var t, n;
                          Un(
                            U()(k),
                            (t = c.sourceHeader) !== null && t !== void 0 ? t : '',
                            (n = c.sourceFooter) !== null && n !== void 0 ? n : '',
                            'vega'
                          );
                          e.preventDefault();
                        });
                        J.append(K);
                      }
                      if (d === true || d.editor !== false) {
                        Z =
                          (Q = c.editorUrl) !== null && Q !== void 0
                            ? Q
                            : 'https://vega.github.io/editor/';
                        ee = document.createElement('a');
                        ee.text = p.EDITOR_ACTION;
                        ee.href = '#';
                        ee.addEventListener('click', function (e) {
                          An(window, Z, {
                            config: f,
                            mode: E,
                            renderer: h,
                            spec: U()(n),
                          });
                          e.preventDefault();
                        });
                        J.append(ee);
                      }
                    }
                    return re.abrupt('return', {
                      view: j,
                      spec: n,
                      vgSpec: k,
                      finalize: te,
                    });
                  case 38:
                  case 'end':
                    return re.stop();
                }
              }
            }, e);
          })
        );
        return er.apply(this, arguments);
      }
      const tr = Gn;
    },
    48823: (e, t, n) => {
      'use strict';
      n.d(t, {
        cG: () => E,
        jj: () => w,
        kI: () => O,
        Hq: () => y,
        uU: () => x,
        ZE: () => r,
        Oj: () => o,
        el: () => i,
        IX: () => X,
        j2: () => te,
        l$: () => K,
        qu: () => ee,
        a9: () => oe,
        Ds: () => ae,
        vU: () => c,
        l7: () => le,
        We: () => se,
        dI: () => ce,
        k: () => m,
        Xr: () => pe,
        EP: () => f,
        yl: () => he,
        nr: () => fe,
        id: () => d,
        yR: () => p,
        XW: () => ge,
        u5: () => ve,
        kJ: () => A,
        jn: () => me,
        J_: () => be,
        mf: () => Q,
        TW: () => ye,
        hj: () => we,
        Kn: () => S,
        Kj: () => xe,
        HD: () => Oe,
        Jy: () => Ee,
        t7: () => ke,
        kg: () => k,
        $m: () => Se,
        TS: () => De,
        fE: () => _,
        kX: () => g,
        vk: () => Ce,
        Dw: () => R,
        mJ: () => W,
        QA: () => M,
        Zw: () => J,
        fj: () => F,
        mS: () => G,
        rx: () => _e,
        yP: () => Le,
        _k: () => u,
        m8: () => Fe,
        sw: () => je,
        ZU: () => Ne,
        He: () => j,
        Rg: () => Pe,
        BB: () => ze,
        $G: () => Ie,
        yb: () => v,
        N3: () => Y,
        FP: () => Be,
        iL: () => C,
        bM: () => h,
        ay: () => V,
        dH: () => H,
        mK: () => q,
        bV: () => $,
      });
      function r(e, t, n) {
        e.fields = t || [];
        e.fname = n;
        return e;
      }
      function i(e) {
        return e == null ? null : e.fname;
      }
      function o(e) {
        return e == null ? null : e.fields;
      }
      function a(e) {
        return e.length === 1 ? l(e[0]) : s(e);
      }
      const l = (e) =>
        function (t) {
          return t[e];
        };
      const s = (e) => {
        const t = e.length;
        return function (n) {
          for (let r = 0; r < t; ++r) {
            n = n[e[r]];
          }
          return n;
        };
      };
      function c(e) {
        throw Error(e);
      }
      function u(e) {
        const t = [],
          n = e.length;
        let r = null,
          i = 0,
          o = '',
          a,
          l,
          s;
        e = e + '';
        function u() {
          t.push(o + e.substring(a, l));
          o = '';
          a = l + 1;
        }
        for (a = l = 0; l < n; ++l) {
          s = e[l];
          if (s === '\\') {
            o += e.substring(a, l);
            o += e.substring(++l, ++l);
            a = l;
          } else if (s === r) {
            u();
            r = null;
            i = -1;
          } else if (r) {
            continue;
          } else if (a === i && s === '"') {
            a = l + 1;
            r = s;
          } else if (a === i && s === "'") {
            a = l + 1;
            r = s;
          } else if (s === '.' && !i) {
            if (l > a) {
              u();
            } else {
              a = l + 1;
            }
          } else if (s === '[') {
            if (l > a) u();
            i = a = l + 1;
          } else if (s === ']') {
            if (!i) c('Access path missing open bracket: ' + e);
            if (i > 0) u();
            i = 0;
            a = l + 1;
          }
        }
        if (i) c('Access path missing closing bracket: ' + e);
        if (r) c('Access path missing closing quote: ' + e);
        if (l > a) {
          l++;
          u();
        }
        return t;
      }
      function f(e, t, n) {
        const i = u(e);
        e = i.length === 1 ? i[0] : e;
        return r(((n && n.get) || a)(i), [e], t || e);
      }
      const d = f('id');
      const p = r((e) => e, [], 'identity');
      const h = r(() => 0, [], 'zero');
      const g = r(() => 1, [], 'one');
      const v = r(() => true, [], 'true');
      const m = r(() => false, [], 'false');
      function b(e, t, n) {
        const r = [t].concat([].slice.call(n));
        console[e].apply(console, r);
      }
      const y = 0;
      const w = 1;
      const x = 2;
      const O = 3;
      const E = 4;
      function k(e, t, n = b) {
        let r = e || y;
        return {
          level(e) {
            if (arguments.length) {
              r = +e;
              return this;
            } else {
              return r;
            }
          },
          error() {
            if (r >= w) n(t || 'error', 'ERROR', arguments);
            return this;
          },
          warn() {
            if (r >= x) n(t || 'warn', 'WARN', arguments);
            return this;
          },
          info() {
            if (r >= O) n(t || 'log', 'INFO', arguments);
            return this;
          },
          debug() {
            if (r >= E) n(t || 'log', 'DEBUG', arguments);
            return this;
          },
        };
      }
      var A = Array.isArray;
      function S(e) {
        return e === Object(e);
      }
      const D = (e) => e !== '__proto__';
      function _(...e) {
        return e.reduce((e, t) => {
          for (const n in t) {
            if (n === 'signals') {
              e.signals = L(e.signals, t.signals);
            } else {
              const r = n === 'legend' ? { layout: 1 } : n === 'style' ? true : null;
              C(e, n, t[n], r);
            }
          }
          return e;
        }, {});
      }
      function C(e, t, n, r) {
        if (!D(t)) return;
        let i, o;
        if (S(n) && !A(n)) {
          o = S(e[t]) ? e[t] : (e[t] = {});
          for (i in n) {
            if (r && (r === true || r[i])) {
              C(o, i, n[i]);
            } else if (D(i)) {
              o[i] = n[i];
            }
          }
        } else {
          e[t] = n;
        }
      }
      function L(e, t) {
        if (e == null) return t;
        const n = {},
          r = [];
        function i(e) {
          if (!n[e.name]) {
            n[e.name] = 1;
            r.push(e);
          }
        }
        t.forEach(i);
        e.forEach(i);
        return r;
      }
      function F(e) {
        return e[e.length - 1];
      }
      function j(e) {
        return e == null || e === '' ? null : +e;
      }
      const T = (e) => (t) => e * Math.exp(t);
      const N = (e) => (t) => Math.log(e * t);
      const z = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
      const P = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
      const I = (e) => (t) => t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
      function B(e, t, n, r) {
        const i = n(e[0]),
          o = n(F(e)),
          a = (o - i) * t;
        return [r(i - a), r(o - a)];
      }
      function R(e, t) {
        return B(e, t, j, p);
      }
      function W(e, t) {
        var n = Math.sign(e[0]);
        return B(e, t, N(n), T(n));
      }
      function M(e, t, n) {
        return B(e, t, I(n), I(1 / n));
      }
      function J(e, t, n) {
        return B(e, t, z(n), P(n));
      }
      function U(e, t, n, r, i) {
        const o = r(e[0]),
          a = r(F(e)),
          l = t != null ? r(t) : (o + a) / 2;
        return [i(l + (o - l) * n), i(l + (a - l) * n)];
      }
      function V(e, t, n) {
        return U(e, t, n, j, p);
      }
      function H(e, t, n) {
        const r = Math.sign(e[0]);
        return U(e, t, n, N(r), T(r));
      }
      function q(e, t, n, r) {
        return U(e, t, n, I(r), I(1 / r));
      }
      function $(e, t, n, r) {
        return U(e, t, n, z(r), P(r));
      }
      function G(e) {
        return 1 + ~~(new Date(e).getMonth() / 3);
      }
      function Y(e) {
        return 1 + ~~(new Date(e).getUTCMonth() / 3);
      }
      function X(e) {
        return e != null ? (A(e) ? e : [e]) : [];
      }
      function K(e, t, n) {
        let r = e[0],
          i = e[1],
          o;
        if (i < r) {
          o = i;
          i = r;
          r = o;
        }
        o = i - r;
        return o >= n - t ? [t, n] : [(r = Math.min(Math.max(r, t), n - o)), r + o];
      }
      function Q(e) {
        return typeof e === 'function';
      }
      const Z = 'descending';
      function ee(e, t, n) {
        n = n || {};
        t = X(t) || [];
        const i = [],
          a = [],
          l = {},
          s = n.comparator || ne;
        X(e).forEach((e, r) => {
          if (e == null) return;
          i.push(t[r] === Z ? -1 : 1);
          a.push((e = Q(e) ? e : f(e, null, n)));
          (o(e) || []).forEach((e) => (l[e] = 1));
        });
        return a.length === 0 ? null : r(s(a, i), Object.keys(l));
      }
      const te = (e, t) =>
        (e < t || e == null) && t != null
          ? -1
          : (e > t || t == null) && e != null
          ? 1
          : ((t = t instanceof Date ? +t : t), (e = e instanceof Date ? +e : e)) !==
              e && t === t
          ? -1
          : t !== t && e === e
          ? 1
          : 0;
      const ne = (e, t) => (e.length === 1 ? re(e[0], t[0]) : ie(e, t, e.length));
      const re = (e, t) =>
        function (n, r) {
          return te(e(n), e(r)) * t;
        };
      const ie = (e, t, n) => {
        t.push(0);
        return function (r, i) {
          let o,
            a = 0,
            l = -1;
          while (a === 0 && ++l < n) {
            o = e[l];
            a = te(o(r), o(i));
          }
          return a * t[l];
        };
      };
      function oe(e) {
        return Q(e) ? e : () => e;
      }
      function ae(e, t) {
        let n;
        return (r) => {
          if (n) clearTimeout(n);
          n = setTimeout(() => (t(r), (n = null)), e);
        };
      }
      function le(e) {
        for (let t, n, r = 1, i = arguments.length; r < i; ++r) {
          t = arguments[r];
          for (n in t) {
            e[n] = t[n];
          }
        }
        return e;
      }
      function se(e, t) {
        let n = 0,
          r,
          i,
          o,
          a;
        if (e && (r = e.length)) {
          if (t == null) {
            for (i = e[n]; n < r && (i == null || i !== i); i = e[++n]);
            o = a = i;
            for (; n < r; ++n) {
              i = e[n];
              if (i != null) {
                if (i < o) o = i;
                if (i > a) a = i;
              }
            }
          } else {
            for (i = t(e[n]); n < r && (i == null || i !== i); i = t(e[++n]));
            o = a = i;
            for (; n < r; ++n) {
              i = t(e[n]);
              if (i != null) {
                if (i < o) o = i;
                if (i > a) a = i;
              }
            }
          }
        }
        return [o, a];
      }
      function ce(e, t) {
        const n = e.length;
        let r = -1,
          i,
          o,
          a,
          l,
          s;
        if (t == null) {
          while (++r < n) {
            o = e[r];
            if (o != null && o >= o) {
              i = a = o;
              break;
            }
          }
          if (r === n) return [-1, -1];
          l = s = r;
          while (++r < n) {
            o = e[r];
            if (o != null) {
              if (i > o) {
                i = o;
                l = r;
              }
              if (a < o) {
                a = o;
                s = r;
              }
            }
          }
        } else {
          while (++r < n) {
            o = t(e[r], r, e);
            if (o != null && o >= o) {
              i = a = o;
              break;
            }
          }
          if (r === n) return [-1, -1];
          l = s = r;
          while (++r < n) {
            o = t(e[r], r, e);
            if (o != null) {
              if (i > o) {
                i = o;
                l = r;
              }
              if (a < o) {
                a = o;
                s = r;
              }
            }
          }
        }
        return [l, s];
      }
      const ue = Object.prototype.hasOwnProperty;
      function fe(e, t) {
        return ue.call(e, t);
      }
      const de = {};
      function pe(e) {
        let t = {},
          n;
        function r(e) {
          return fe(t, e) && t[e] !== de;
        }
        const i = {
          size: 0,
          empty: 0,
          object: t,
          has: r,
          get(e) {
            return r(e) ? t[e] : undefined;
          },
          set(e, n) {
            if (!r(e)) {
              ++i.size;
              if (t[e] === de) --i.empty;
            }
            t[e] = n;
            return this;
          },
          delete(e) {
            if (r(e)) {
              --i.size;
              ++i.empty;
              t[e] = de;
            }
            return this;
          },
          clear() {
            i.size = i.empty = 0;
            i.object = t = {};
          },
          test(e) {
            if (arguments.length) {
              n = e;
              return i;
            } else {
              return n;
            }
          },
          clean() {
            const e = {};
            let r = 0;
            for (const i in t) {
              const o = t[i];
              if (o !== de && (!n || !n(o))) {
                e[i] = o;
                ++r;
              }
            }
            i.size = r;
            i.empty = 0;
            i.object = t = e;
          },
        };
        if (e)
          Object.keys(e).forEach((t) => {
            i.set(t, e[t]);
          });
        return i;
      }
      function he(e, t, n, r, i, o) {
        if (!n && n !== 0) return o;
        const a = +n;
        let l = e[0],
          s = F(e),
          c;
        if (s < l) {
          c = l;
          l = s;
          s = c;
        }
        c = Math.abs(t - l);
        const u = Math.abs(s - t);
        return c < u && c <= a ? r : u <= a ? i : o;
      }
      function ge(e, t, n) {
        const r = (e.prototype = Object.create(t.prototype));
        Object.defineProperty(r, 'constructor', {
          value: e,
          writable: true,
          enumerable: true,
          configurable: true,
        });
        return le(r, n);
      }
      function ve(e, t, n, r) {
        let i = t[0],
          o = t[t.length - 1],
          a;
        if (i > o) {
          a = i;
          i = o;
          o = a;
        }
        n = n === undefined || n;
        r = r === undefined || r;
        return (n ? i <= e : i < e) && (r ? e <= o : e < o);
      }
      function me(e) {
        return typeof e === 'boolean';
      }
      function be(e) {
        return Object.prototype.toString.call(e) === '[object Date]';
      }
      function ye(e) {
        return e && Q(e[Symbol.iterator]);
      }
      function we(e) {
        return typeof e === 'number';
      }
      function xe(e) {
        return Object.prototype.toString.call(e) === '[object RegExp]';
      }
      function Oe(e) {
        return typeof e === 'string';
      }
      function Ee(e, t, n) {
        if (e) {
          e = t ? X(e).map((e) => e.replace(/\\(.)/g, '$1')) : X(e);
        }
        const i = e && e.length,
          o = (n && n.get) || a,
          l = (e) => o(t ? [e] : u(e));
        let s;
        if (!i) {
          s = function () {
            return '';
          };
        } else if (i === 1) {
          const t = l(e[0]);
          s = function (e) {
            return '' + t(e);
          };
        } else {
          const t = e.map(l);
          s = function (e) {
            let n = '' + t[0](e),
              r = 0;
            while (++r < i) n += '|' + t[r](e);
            return n;
          };
        }
        return r(s, e, 'key');
      }
      function ke(e, t) {
        const n = e[0],
          r = F(e),
          i = +t;
        return !i ? n : i === 1 ? r : n + i * (r - n);
      }
      const Ae = 1e4;
      function Se(e) {
        e = +e || Ae;
        let t, n, r;
        const i = () => {
          t = {};
          n = {};
          r = 0;
        };
        const o = (i, o) => {
          if (++r > e) {
            n = t;
            t = {};
            r = 1;
          }
          return (t[i] = o);
        };
        i();
        return {
          clear: i,
          has: (e) => fe(t, e) || fe(n, e),
          get: (e) => (fe(t, e) ? t[e] : fe(n, e) ? o(e, n[e]) : undefined),
          set: (e, n) => (fe(t, e) ? (t[e] = n) : o(e, n)),
        };
      }
      function De(e, t, n, r) {
        const i = t.length,
          o = n.length;
        if (!o) return t;
        if (!i) return n;
        const a = r || new t.constructor(i + o);
        let l = 0,
          s = 0,
          c = 0;
        for (; l < i && s < o; ++c) {
          a[c] = e(t[l], n[s]) > 0 ? n[s++] : t[l++];
        }
        for (; l < i; ++l, ++c) {
          a[c] = t[l];
        }
        for (; s < o; ++s, ++c) {
          a[c] = n[s];
        }
        return a;
      }
      function _e(e, t) {
        let n = '';
        while (--t >= 0) n += e;
        return n;
      }
      function Ce(e, t, n, r) {
        const i = n || ' ',
          o = e + '',
          a = t - o.length;
        return a <= 0
          ? o
          : r === 'left'
          ? _e(i, a) + o
          : r === 'center'
          ? _e(i, ~~(a / 2)) + o + _e(i, Math.ceil(a / 2))
          : o + _e(i, a);
      }
      function Le(e) {
        return (e && F(e) - e[0]) || 0;
      }
      function Fe(e) {
        return A(e)
          ? '[' + e.map(Fe) + ']'
          : S(e) || Oe(e)
          ? JSON.stringify(e).replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
          : e;
      }
      function je(e) {
        return e == null || e === ''
          ? null
          : !e || e === 'false' || e === '0'
          ? false
          : !!e;
      }
      const Te = (e) => (we(e) ? e : be(e) ? e : Date.parse(e));
      function Ne(e, t) {
        t = t || Te;
        return e == null || e === '' ? null : t(e);
      }
      function ze(e) {
        return e == null || e === '' ? null : e + '';
      }
      function Pe(e) {
        const t = {},
          n = e.length;
        for (let r = 0; r < n; ++r) t[e[r]] = true;
        return t;
      }
      function Ie(e, t, n, r) {
        const i = r != null ? r : '…',
          o = e + '',
          a = o.length,
          l = Math.max(0, t - i.length);
        return a <= t
          ? o
          : n === 'left'
          ? i + o.slice(a - l)
          : n === 'center'
          ? o.slice(0, Math.ceil(l / 2)) + i + o.slice(a - ~~(l / 2))
          : o.slice(0, l) + i;
      }
      function Be(e, t, n) {
        if (e) {
          if (t) {
            const r = e.length;
            for (let i = 0; i < r; ++i) {
              const r = t(e[i]);
              if (r) n(r, i, e);
            }
          } else {
            e.forEach(n);
          }
        }
      }
    },
  },
]);
//# sourceMappingURL=1944.9bb345a40325c23313e9.js.map?v=9bb345a40325c23313e9
