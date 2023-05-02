var _JUPYTERLAB;
(() => {
  'use strict';
  var e,
    r,
    t,
    a,
    n,
    o,
    i,
    d,
    u,
    l,
    f,
    s,
    c,
    p,
    h,
    b,
    m,
    g,
    v,
    y,
    j,
    w,
    P,
    S = {
      2063: (e, r, t) => {
        var a = {
            './index': () =>
              Promise.all([t.e(193), t.e(306), t.e(526), t.e(99), t.e(134)]).then(
                () => () => t(134)
              ),
            './extension': () =>
              Promise.all([t.e(193), t.e(306), t.e(526), t.e(99), t.e(134)]).then(
                () => () => t(134)
              ),
          },
          n = (e, r) => (
            (t.R = r),
            (r = t.o(a, e)
              ? a[e]()
              : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.');
                })),
            (t.R = void 0),
            r
          ),
          o = (e, r) => {
            if (t.S) {
              var a = 'default',
                n = t.S[a];
              if (n && n !== e)
                throw new Error(
                  'Container initialization failed as it has already been initialized with a different share scope'
                );
              return (t.S[a] = e), t.I(a, r);
            }
          };
        t.d(r, { get: () => n, init: () => o });
      },
    },
    k = {};
  function E(e) {
    var r = k[e];
    if (void 0 !== r) return r.exports;
    var t = (k[e] = { id: e, loaded: !1, exports: {} });
    return S[e].call(t.exports, t, t.exports, E), (t.loaded = !0), t.exports;
  }
  (E.m = S),
    (E.c = k),
    (E.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return E.d(r, { a: r }), r;
    }),
    (E.d = (e, r) => {
      for (var t in r)
        E.o(r, t) &&
          !E.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (E.f = {}),
    (E.e = (e) =>
      Promise.all(Object.keys(E.f).reduce((r, t) => (E.f[t](e, r), r), []))),
    (E.u = (e) =>
      (863 === e ? '@jupyter-widgets/controls' : e) +
      '.' +
      {
        61: '21f571face17e35076c2',
        99: '53732494dd69b5e31fd8',
        113: '270dbb43db912c1b3723',
        134: '402424ef4079078b2e0e',
        150: '1a6d6a3a0542a41bec5a',
        193: 'a9aa8b320332ce1c2da5',
        291: '0b98a9cbc7337e1749ed',
        306: '2ef7538ea3c5af230801',
        345: '03be96cd091aac4797a5',
        495: 'ea5e18a84b54f152ae61',
        526: '0e5eba70673325ef505d',
        595: 'b7741b41fd98f8f3d844',
        596: '340cb969418e72309eb4',
        644: '7d1bff49f8e38fac4070',
        699: '2ea6ecfcddb8f3bb4732',
        720: '4f52203625c8f270cbd8',
        863: '3e6de8a3e6f58c6508f7',
        965: 'b0caf50c6bbde92efb37',
      }[e] +
      '.js?v=' +
      {
        61: '21f571face17e35076c2',
        99: '53732494dd69b5e31fd8',
        113: '270dbb43db912c1b3723',
        134: '402424ef4079078b2e0e',
        150: '1a6d6a3a0542a41bec5a',
        193: 'a9aa8b320332ce1c2da5',
        291: '0b98a9cbc7337e1749ed',
        306: '2ef7538ea3c5af230801',
        345: '03be96cd091aac4797a5',
        495: 'ea5e18a84b54f152ae61',
        526: '0e5eba70673325ef505d',
        595: 'b7741b41fd98f8f3d844',
        596: '340cb969418e72309eb4',
        644: '7d1bff49f8e38fac4070',
        699: '2ea6ecfcddb8f3bb4732',
        720: '4f52203625c8f270cbd8',
        863: '3e6de8a3e6f58c6508f7',
        965: 'b0caf50c6bbde92efb37',
      }[e]),
    (E.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (E.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = '@jupyter-widgets/jupyterlab-manager:'),
    (E.l = (t, a, n, o) => {
      if (e[t]) e[t].push(a);
      else {
        var i, d;
        if (void 0 !== n)
          for (
            var u = document.getElementsByTagName('script'), l = 0;
            l < u.length;
            l++
          ) {
            var f = u[l];
            if (f.getAttribute('src') == t || f.getAttribute('data-webpack') == r + n) {
              i = f;
              break;
            }
          }
        i ||
          ((d = !0),
          ((i = document.createElement('script')).charset = 'utf-8'),
          (i.timeout = 120),
          E.nc && i.setAttribute('nonce', E.nc),
          i.setAttribute('data-webpack', r + n),
          (i.src = t)),
          (e[t] = [a]);
        var s = (r, a) => {
            (i.onerror = i.onload = null), clearTimeout(c);
            var n = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              n && n.forEach((e) => e(a)),
              r)
            )
              return r(a);
          },
          c = setTimeout(s.bind(null, void 0, { type: 'timeout', target: i }), 12e4);
        (i.onerror = s.bind(null, i.onerror)),
          (i.onload = s.bind(null, i.onload)),
          d && document.head.appendChild(i);
      }
    }),
    (E.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (E.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      E.S = {};
      var e = {},
        r = {};
      E.I = (t, a) => {
        a || (a = []);
        var n = r[t];
        if ((n || (n = r[t] = {}), !(a.indexOf(n) >= 0))) {
          if ((a.push(n), e[t])) return e[t];
          E.o(E.S, t) || (E.S[t] = {});
          var o = E.S[t],
            i = '@jupyter-widgets/jupyterlab-manager',
            d = (e, r, t, a) => {
              var n = (o[e] = o[e] || {}),
                d = n[r];
              (!d || (!d.loaded && (!a != !d.eager ? a : i > d.from))) &&
                (n[r] = { get: t, from: i, eager: !!a });
            },
            u = [];
          return (
            'default' === t &&
              (d('@jupyter-widgets/base-manager', '1.0.5', () =>
                Promise.all([E.e(113), E.e(193), E.e(526), E.e(150)]).then(
                  () => () => E(6110)
                )
              ),
              d('@jupyter-widgets/base', '6.0.4', () =>
                Promise.all([E.e(644), E.e(306), E.e(720), E.e(526), E.e(595)]).then(
                  () => () => E(9185)
                )
              ),
              d('@jupyter-widgets/controls', '5.0.5', () =>
                Promise.all([
                  E.e(345),
                  E.e(193),
                  E.e(306),
                  E.e(720),
                  E.e(495),
                  E.e(99),
                  E.e(61),
                ]).then(() => () => E(2495))
              ),
              d('@jupyter-widgets/jupyterlab-manager', '5.0.7', () =>
                Promise.all([E.e(193), E.e(306), E.e(526), E.e(99), E.e(134)]).then(
                  () => () => E(134)
                )
              ),
              d('@jupyter-widgets/output', '6.0.4', () =>
                Promise.all([E.e(193), E.e(965)]).then(() => () => E(2965))
              ),
              d('jquery', '3.6.3', () => E.e(291).then(() => () => E(8291))),
              d('semver', '7.3.8', () => E.e(699).then(() => () => E(7699)))),
            (e[t] = u.length ? Promise.all(u).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (() => {
      var e;
      E.g.importScripts && (e = E.g.location + '');
      var r = E.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        t.length && (e = t[t.length - 1].src);
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (E.p = e);
    })(),
    (t = (e) => {
      var r = (e) => e.split('.').map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        a = t[1] ? r(t[1]) : [];
      return (
        t[2] && (a.length++, a.push.apply(a, r(t[2]))),
        t[3] && (a.push([]), a.push.apply(a, r(t[3]))),
        a
      );
    }),
    (a = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var a = 0; ; ) {
        if (a >= e.length) return a < r.length && 'u' != (typeof r[a])[0];
        var n = e[a],
          o = (typeof n)[0];
        if (a >= r.length) return 'u' == o;
        var i = r[a],
          d = (typeof i)[0];
        if (o != d) return ('o' == o && 'n' == d) || 's' == d || 'u' == o;
        if ('o' != o && 'u' != o && n != i) return n < i;
        a++;
      }
    }),
    (n = (e) => {
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
        for (var a = 1, o = 1; o < e.length; o++)
          a--,
            (t +=
              'u' == (typeof (d = e[o]))[0] ? '-' : (a > 0 ? '.' : '') + ((a = 2), d));
        return t;
      }
      var i = [];
      for (o = 1; o < e.length; o++) {
        var d = e[o];
        i.push(
          0 === d
            ? 'not(' + u() + ')'
            : 1 === d
            ? '(' + u() + ' || ' + u() + ')'
            : 2 === d
            ? i.pop() + ' ' + i.pop()
            : n(d)
        );
      }
      return u();
      function u() {
        return i.pop().replace(/^\((.+)\)$/, '$1');
      }
    }),
    (o = (e, r) => {
      if (0 in e) {
        r = t(r);
        var a = e[0],
          n = a < 0;
        n && (a = -a - 1);
        for (var i = 0, d = 1, u = !0; ; d++, i++) {
          var l,
            f,
            s = d < e.length ? (typeof e[d])[0] : '';
          if (i >= r.length || 'o' == (f = (typeof (l = r[i]))[0]))
            return !u || ('u' == s ? d > a && !n : ('' == s) != n);
          if ('u' == f) {
            if (!u || 'u' != s) return !1;
          } else if (u)
            if (s == f)
              if (d <= a) {
                if (l != e[d]) return !1;
              } else {
                if (n ? l > e[d] : l < e[d]) return !1;
                l != e[d] && (u = !1);
              }
            else if ('s' != s && 'n' != s) {
              if (n || d <= a) return !1;
              (u = !1), d--;
            } else {
              if (d <= a || f < s != n) return !1;
              u = !1;
            }
          else 's' != s && 'n' != s && ((u = !1), d--);
        }
      }
      var c = [],
        p = c.pop.bind(c);
      for (i = 1; i < e.length; i++) {
        var h = e[i];
        c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? o(h, r) : !p());
      }
      return !!p();
    }),
    (i = (e, r) => {
      var t = E.S[e];
      if (!t || !E.o(t, r))
        throw new Error('Shared module ' + r + " doesn't exist in shared scope " + e);
      return t;
    }),
    (d = (e, r) => {
      var t = e[r];
      return (r = Object.keys(t).reduce((e, r) => (!e || a(e, r) ? r : e), 0)) && t[r];
    }),
    (u = (e, r) => {
      var t = e[r];
      return Object.keys(t).reduce(
        (e, r) => (!e || (!t[e].loaded && a(e, r)) ? r : e),
        0
      );
    }),
    (l = (e, r, t, a) =>
      'Unsatisfied version ' +
      t +
      ' from ' +
      (t && e[r][t].from) +
      ' of shared singleton module ' +
      r +
      ' (required ' +
      n(a) +
      ')'),
    (f = (e, r, t, a) => {
      var n = u(e, t);
      return (
        o(a, n) ||
          ('undefined' != typeof console &&
            console.warn &&
            console.warn(l(e, t, n, a))),
        h(e[t][n])
      );
    }),
    (s = (e, r, t) => {
      var n = e[r];
      return (
        (r = Object.keys(n).reduce(
          (e, r) => (!o(t, r) || (e && !a(e, r)) ? e : r),
          0
        )) && n[r]
      );
    }),
    (c = (e, r, t, a) => {
      var o = e[t];
      return (
        'No satisfying version (' +
        n(a) +
        ') of shared module ' +
        t +
        ' found in shared scope ' +
        r +
        '.\nAvailable versions: ' +
        Object.keys(o)
          .map((e) => e + ' from ' + o[e].from)
          .join(', ')
      );
    }),
    (p = (e, r, t, a) => {
      'undefined' != typeof console && console.warn && console.warn(c(e, r, t, a));
    }),
    (h = (e) => ((e.loaded = 1), e.get())),
    (m = (b = (e) =>
      function (r, t, a, n) {
        var o = E.I(r);
        return o && o.then
          ? o.then(e.bind(e, r, E.S[r], t, a, n))
          : e(r, E.S[r], t, a, n);
      })((e, r, t, a) => (r && E.o(r, t) ? h(d(r, t)) : a()))),
    (g = b((e, r, t, a) => (i(e, t), h(s(r, t, a) || p(r, e, t, a) || d(r, t))))),
    (v = b((e, r, t, a) => (i(e, t), f(r, 0, t, a)))),
    (y = b((e, r, t, a, n) => {
      var o = r && E.o(r, t) && s(r, t, a);
      return o ? h(o) : n();
    })),
    (j = {}),
    (w = {
      7193: () =>
        y('default', '@jupyter-widgets/base', [1, 6, 0, 4], () =>
          Promise.all([E.e(644), E.e(306), E.e(720), E.e(526), E.e(595)]).then(
            () => () => E(9185)
          )
        ),
      2994: () =>
        y('default', 'jquery', [1, 3, 1, 1], () => E.e(291).then(() => () => E(8291))),
      3992: () => v('default', '@lumino/widgets', [1, 1, 33, 0]),
      1526: () => v('default', '@lumino/coreutils', [1, 1, 11, 0]),
      1840: () => v('default', '@lumino/signaling', [1, 1, 10, 0]),
      8918: () => v('default', '@lumino/algorithm', [1, 1, 9, 0]),
      183: () =>
        y('default', '@jupyter-widgets/base-manager', [1, 1, 0, 5], () =>
          Promise.all([E.e(113), E.e(150)]).then(() => () => E(6110))
        ),
      2634: () => v('default', '@jupyterlab/mainmenu', [1, 3, 5, 0]),
      2856: () => v('default', '@jupyterlab/translation', [1, 3, 5, 0]),
      4411: () => v('default', '@jupyterlab/settingregistry', [1, 3, 5, 0]),
      4579: () => v('default', '@jupyterlab/services', [1, 6, 5, 0]),
      5658: () => v('default', '@lumino/properties', [1, 1, 8, 0]),
      5923: () => v('default', '@lumino/disposable', [1, 1, 10, 0]),
      6165: () => v('default', '@jupyterlab/notebook', [1, 3, 5, 0]),
      7787: () =>
        y('default', '@jupyter-widgets/output', [1, 6, 0, 4], () =>
          E.e(596).then(() => () => E(2965))
        ),
      8097: () => g('default', '@jupyterlab/outputarea', [1, 3, 5, 0]),
      8714: () => v('default', '@jupyterlab/logconsole', [1, 3, 5, 0]),
      9e3: () =>
        y('default', 'semver', [1, 7, 3, 5], () => E.e(699).then(() => () => E(7699))),
      9101: () => v('default', '@jupyterlab/rendermime', [1, 3, 5, 0]),
      2720: () => v('default', '@lumino/messaging', [1, 1, 10, 0]),
      8830: () => m('default', 'jquery', () => E.e(291).then(() => () => E(8291))),
      9520: () => v('default', '@lumino/domutils', [1, 1, 8, 0]),
      2534: () =>
        y('default', '@jupyter-widgets/controls', [1, 5, 0, 5], () =>
          Promise.all([E.e(345), E.e(720), E.e(495)]).then(() => () => E(2495))
        ),
    }),
    (P = {
      99: [1840, 8918],
      134: [183, 2634, 2856, 4411, 4579, 5658, 5923, 6165, 7787, 8097, 8714, 9e3, 9101],
      193: [7193],
      306: [2994, 3992],
      495: [9520],
      526: [1526],
      595: [8830],
      720: [2720],
      863: [2534],
    }),
    (E.f.consumes = (e, r) => {
      E.o(P, e) &&
        P[e].forEach((e) => {
          if (E.o(j, e)) return r.push(j[e]);
          var t = (r) => {
              (j[e] = 0),
                (E.m[e] = (t) => {
                  delete E.c[e], (t.exports = r());
                });
            },
            a = (r) => {
              delete j[e],
                (E.m[e] = (t) => {
                  throw (delete E.c[e], r);
                });
            };
          try {
            var n = w[e]();
            n.then ? r.push((j[e] = n.then(t).catch(a))) : t(n);
          } catch (e) {
            a(e);
          }
        });
    }),
    (() => {
      E.b = document.baseURI || self.location.href;
      var e = { 513: 0 };
      E.f.j = (r, t) => {
        var a = E.o(e, r) ? e[r] : void 0;
        if (0 !== a)
          if (a) t.push(a[2]);
          else if (/^(193|306|526|720|863|99)$/.test(r)) e[r] = 0;
          else {
            var n = new Promise((t, n) => (a = e[r] = [t, n]));
            t.push((a[2] = n));
            var o = E.p + E.u(r),
              i = new Error();
            E.l(
              o,
              (t) => {
                if (E.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ('load' === t.type ? 'missing' : t.type),
                    o = t && t.target && t.target.src;
                  (i.message =
                    'Loading chunk ' + r + ' failed.\n(' + n + ': ' + o + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = n),
                    (i.request = o),
                    a[1](i);
                }
              },
              'chunk-' + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var a,
            n,
            [o, i, d] = t,
            u = 0;
          if (o.some((r) => 0 !== e[r])) {
            for (a in i) E.o(i, a) && (E.m[a] = i[a]);
            d && d(E);
          }
          for (r && r(t); u < o.length; u++)
            (n = o[u]), E.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
        },
        t = (self.webpackChunk_jupyter_widgets_jupyterlab_manager =
          self.webpackChunk_jupyter_widgets_jupyterlab_manager || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (E.nc = void 0);
  var _ = E(2063);
  (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)[
    '@jupyter-widgets/jupyterlab-manager'
  ] = _;
})();
