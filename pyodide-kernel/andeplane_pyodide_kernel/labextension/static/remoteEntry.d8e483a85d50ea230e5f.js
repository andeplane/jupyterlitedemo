var _JUPYTERLAB;
(() => {
  'use strict';
  var e,
    r,
    t,
    n,
    o,
    a,
    i,
    d,
    l,
    u,
    f,
    s,
    c,
    p,
    h,
    b,
    v,
    y,
    m,
    g,
    w = {
      468: (e, r, t) => {
        var n = {
            './index': () => Promise.all([t.e(694), t.e(652)]).then(() => () => t(763)),
            './extension': () =>
              Promise.all([t.e(694), t.e(652)]).then(() => () => t(763)),
          },
          o = (e, r) => (
            (t.R = r),
            (r = t.o(n, e)
              ? n[e]()
              : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.');
                })),
            (t.R = void 0),
            r
          ),
          a = (e, r) => {
            if (t.S) {
              var n = 'default',
                o = t.S[n];
              if (o && o !== e)
                throw new Error(
                  'Container initialization failed as it has already been initialized with a different share scope'
                );
              return (t.S[n] = e), t.I(n, r);
            }
          };
        t.d(r, { get: () => o, init: () => a });
      },
    },
    k = {};
  function j(e) {
    var r = k[e];
    if (void 0 !== r) return r.exports;
    var t = (k[e] = { exports: {} });
    return w[e](t, t.exports, j), t.exports;
  }
  (j.m = w),
    (j.c = k),
    (j.amdO = {}),
    (j.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return j.d(r, { a: r }), r;
    }),
    (r = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (j.t = function (t, n) {
      if ((1 & n && (t = this(t)), 8 & n)) return t;
      if ('object' == typeof t && t) {
        if (4 & n && t.__esModule) return t;
        if (16 & n && 'function' == typeof t.then) return t;
      }
      var o = Object.create(null);
      j.r(o);
      var a = {};
      e = e || [null, r({}), r([]), r(r)];
      for (var i = 2 & n && t; 'object' == typeof i && !~e.indexOf(i); i = r(i))
        Object.getOwnPropertyNames(i).forEach((e) => (a[e] = () => t[e]));
      return (a.default = () => t), j.d(o, a), o;
    }),
    (j.d = (e, r) => {
      for (var t in r)
        j.o(r, t) &&
          !j.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (j.f = {}),
    (j.e = (e) =>
      Promise.all(Object.keys(j.f).reduce((r, t) => (j.f[t](e, r), r), []))),
    (j.u = (e) =>
      e +
      '.' +
      {
        133: '449224bac3e7451b5d43',
        168: '02b1e32f153655335729',
        330: '005efd1839832b38674d',
        465: 'e2c920139f08cff8da7d',
        526: '975c4b7d96c20c1adc8b',
        652: '5b01f737d28e86ce0dc6',
        694: '3c9159cadeb898e1495a',
        926: '4ae4bef2ec265ecf0ac0',
        951: '8b2f42a81d35ca63eecb',
      }[e] +
      '.js?v=' +
      {
        133: '449224bac3e7451b5d43',
        168: '02b1e32f153655335729',
        330: '005efd1839832b38674d',
        465: 'e2c920139f08cff8da7d',
        526: '975c4b7d96c20c1adc8b',
        652: '5b01f737d28e86ce0dc6',
        694: '3c9159cadeb898e1495a',
        926: '4ae4bef2ec265ecf0ac0',
        951: '8b2f42a81d35ca63eecb',
      }[e]),
    (j.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (j.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t = {}),
    (n = 'andeplane-pyodide-kernel-extension:'),
    (j.l = (e, r, o, a) => {
      if (t[e]) t[e].push(r);
      else {
        var i, d;
        if (void 0 !== o)
          for (
            var l = document.getElementsByTagName('script'), u = 0;
            u < l.length;
            u++
          ) {
            var f = l[u];
            if (f.getAttribute('src') == e || f.getAttribute('data-webpack') == n + o) {
              i = f;
              break;
            }
          }
        i ||
          ((d = !0),
          ((i = document.createElement('script')).charset = 'utf-8'),
          (i.timeout = 120),
          j.nc && i.setAttribute('nonce', j.nc),
          i.setAttribute('data-webpack', n + o),
          (i.src = e)),
          (t[e] = [r]);
        var s = (r, n) => {
            (i.onerror = i.onload = null), clearTimeout(c);
            var o = t[e];
            if (
              (delete t[e],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(n)),
              r)
            )
              return r(n);
          },
          c = setTimeout(s.bind(null, void 0, { type: 'timeout', target: i }), 12e4);
        (i.onerror = s.bind(null, i.onerror)),
          (i.onload = s.bind(null, i.onload)),
          d && document.head.appendChild(i);
      }
    }),
    (j.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      j.S = {};
      var e = {},
        r = {};
      j.I = (t, n) => {
        n || (n = []);
        var o = r[t];
        if ((o || (o = r[t] = {}), !(n.indexOf(o) >= 0))) {
          if ((n.push(o), e[t])) return e[t];
          j.o(j.S, t) || (j.S[t] = {});
          var a = j.S[t],
            i = 'andeplane-pyodide-kernel-extension',
            d = (e, r, t, n) => {
              var o = (a[e] = a[e] || {}),
                d = o[r];
              (!d || (!d.loaded && (!n != !d.eager ? n : i > d.from))) &&
                (o[r] = { get: t, from: i, eager: !!n });
            },
            l = [];
          return (
            'default' === t &&
              (d('andeplane-pyodide-kernel-extension', '0.0.13', () =>
                Promise.all([j.e(694), j.e(652)]).then(() => () => j(763))
              ),
              d('andeplane-pyodide-kernel', '0.0.13', () =>
                Promise.all([j.e(926), j.e(951), j.e(694), j.e(526), j.e(465)]).then(
                  () => () => j(938)
                )
              )),
            (e[t] = l.length ? Promise.all(l).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (() => {
      var e;
      j.g.importScripts && (e = j.g.location + '');
      var r = j.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        t.length && (e = t[t.length - 1].src);
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (j.p = e);
    })(),
    (o = (e) => {
      var r = (e) => e.split('.').map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        n = t[1] ? r(t[1]) : [];
      return (
        t[2] && (n.length++, n.push.apply(n, r(t[2]))),
        t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
        n
      );
    }),
    (a = (e, r) => {
      (e = o(e)), (r = o(r));
      for (var t = 0; ; ) {
        if (t >= e.length) return t < r.length && 'u' != (typeof r[t])[0];
        var n = e[t],
          a = (typeof n)[0];
        if (t >= r.length) return 'u' == a;
        var i = r[t],
          d = (typeof i)[0];
        if (a != d) return ('o' == a && 'n' == d) || 's' == d || 'u' == a;
        if ('o' != a && 'u' != a && n != i) return n < i;
        t++;
      }
    }),
    (i = (e) => {
      var r = e[0],
        t = '';
      if (1 === e.length) return '*';
      if (r + 0.5) {
        t +=
          0 == r
            ? '>='
            : -1 == r
            ? '<'
            : 1 == r
            ? '^'
            : 2 == r
            ? '~'
            : r > 0
            ? '='
            : '!=';
        for (var n = 1, o = 1; o < e.length; o++)
          n--,
            (t +=
              'u' == (typeof (d = e[o]))[0] ? '-' : (n > 0 ? '.' : '') + ((n = 2), d));
        return t;
      }
      var a = [];
      for (o = 1; o < e.length; o++) {
        var d = e[o];
        a.push(
          0 === d
            ? 'not(' + l() + ')'
            : 1 === d
            ? '(' + l() + ' || ' + l() + ')'
            : 2 === d
            ? a.pop() + ' ' + a.pop()
            : i(d)
        );
      }
      return l();
      function l() {
        return a.pop().replace(/^\((.+)\)$/, '$1');
      }
    }),
    (d = (e, r) => {
      if (0 in e) {
        r = o(r);
        var t = e[0],
          n = t < 0;
        n && (t = -t - 1);
        for (var a = 0, i = 1, l = !0; ; i++, a++) {
          var u,
            f,
            s = i < e.length ? (typeof e[i])[0] : '';
          if (a >= r.length || 'o' == (f = (typeof (u = r[a]))[0]))
            return !l || ('u' == s ? i > t && !n : ('' == s) != n);
          if ('u' == f) {
            if (!l || 'u' != s) return !1;
          } else if (l)
            if (s == f)
              if (i <= t) {
                if (u != e[i]) return !1;
              } else {
                if (n ? u > e[i] : u < e[i]) return !1;
                u != e[i] && (l = !1);
              }
            else if ('s' != s && 'n' != s) {
              if (n || i <= t) return !1;
              (l = !1), i--;
            } else {
              if (i <= t || f < s != n) return !1;
              l = !1;
            }
          else 's' != s && 'n' != s && ((l = !1), i--);
        }
      }
      var c = [],
        p = c.pop.bind(c);
      for (a = 1; a < e.length; a++) {
        var h = e[a];
        c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? d(h, r) : !p());
      }
      return !!p();
    }),
    (l = (e, r) => {
      var t = j.S[e];
      if (!t || !j.o(t, r))
        throw new Error('Shared module ' + r + " doesn't exist in shared scope " + e);
      return t;
    }),
    (u = (e, r) => {
      var t = e[r];
      return Object.keys(t).reduce(
        (e, r) => (!e || (!t[e].loaded && a(e, r)) ? r : e),
        0
      );
    }),
    (f = (e, r, t, n) =>
      'Unsatisfied version ' +
      t +
      ' from ' +
      (t && e[r][t].from) +
      ' of shared singleton module ' +
      r +
      ' (required ' +
      i(n) +
      ')'),
    (s = (e, r, t, n) => {
      var o = u(e, t);
      return (
        d(n, o) ||
          ('undefined' != typeof console &&
            console.warn &&
            console.warn(f(e, t, o, n))),
        p(e[t][o])
      );
    }),
    (c = (e, r, t) => {
      var n = e[r];
      return (
        (r = Object.keys(n).reduce(
          (e, r) => (!d(t, r) || (e && !a(e, r)) ? e : r),
          0
        )) && n[r]
      );
    }),
    (p = (e) => ((e.loaded = 1), e.get())),
    (b = (h = (e) =>
      function (r, t, n, o) {
        var a = j.I(r);
        return a && a.then
          ? a.then(e.bind(e, r, j.S[r], t, n, o))
          : e(r, j.S[r], t, n, o);
      })((e, r, t, n) => (l(e, t), s(r, 0, t, n)))),
    (v = h((e, r, t, n, o) => {
      var a = r && j.o(r, t) && c(r, t, n);
      return a ? p(a) : o();
    })),
    (y = {}),
    (m = {
      289: () => b('default', '@jupyterlite/kernel', [2, 0, 1, 0, , 'beta', 18]),
      671: () => b('default', '@jupyterlab/coreutils', [1, 5, 5, 3]),
      174: () => b('default', '@jupyterlite/server', [2, 0, 1, 0, , 'beta', 18]),
      685: () => b('default', '@jupyterlite/contents', [2, 0, 1, 0, , 'beta', 18]),
      526: () => b('default', '@lumino/coreutils', [1, 1, 11, 0]),
      133: () =>
        v('default', 'andeplane-pyodide-kernel', [3, 0, 0, 13], () =>
          Promise.all([j.e(926), j.e(951), j.e(526), j.e(330)]).then(() => () => j(938))
        ),
    }),
    (g = { 133: [133], 526: [526], 652: [174, 685], 694: [289, 671] }),
    (j.f.consumes = (e, r) => {
      j.o(g, e) &&
        g[e].forEach((e) => {
          if (j.o(y, e)) return r.push(y[e]);
          var t = (r) => {
              (y[e] = 0),
                (j.m[e] = (t) => {
                  delete j.c[e], (t.exports = r());
                });
            },
            n = (r) => {
              delete y[e],
                (j.m[e] = (t) => {
                  throw (delete j.c[e], r);
                });
            };
          try {
            var o = m[e]();
            o.then ? r.push((y[e] = o.then(t).catch(n))) : t(o);
          } catch (e) {
            n(e);
          }
        });
    }),
    (() => {
      j.b = document.baseURI || self.location.href;
      var e = { 394: 0 };
      j.f.j = (r, t) => {
        var n = j.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (/^(133|526|694)$/.test(r)) e[r] = 0;
          else {
            var o = new Promise((t, o) => (n = e[r] = [t, o]));
            t.push((n[2] = o));
            var a = j.p + j.u(r),
              i = new Error();
            j.l(
              a,
              (t) => {
                if (j.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ('load' === t.type ? 'missing' : t.type),
                    a = t && t.target && t.target.src;
                  (i.message =
                    'Loading chunk ' + r + ' failed.\n(' + o + ': ' + a + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = o),
                    (i.request = a),
                    n[1](i);
                }
              },
              'chunk-' + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            o,
            [a, i, d] = t,
            l = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (n in i) j.o(i, n) && (j.m[n] = i[n]);
            d && d(j);
          }
          for (r && r(t); l < a.length; l++)
            (o = a[l]), j.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        t = (self.webpackChunkandeplane_pyodide_kernel_extension =
          self.webpackChunkandeplane_pyodide_kernel_extension || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var P = j(468);
  (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)[
    'andeplane-pyodide-kernel-extension'
  ] = P;
})();
//# sourceMappingURL=remoteEntry.d8e483a85d50ea230e5f.js.map
