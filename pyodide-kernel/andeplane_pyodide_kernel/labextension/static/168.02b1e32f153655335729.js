/*! For license information please see 168.02b1e32f153655335729.js.LICENSE.txt */
(() => {
  var e,
    t,
    n = {
      406: (e) => {
        var t,
          n,
          r = (e.exports = {});
        function o() {
          throw new Error('setTimeout has not been defined');
        }
        function i() {
          throw new Error('clearTimeout has not been defined');
        }
        function a(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = 'function' == typeof setTimeout ? setTimeout : o;
          } catch (e) {
            t = o;
          }
          try {
            n = 'function' == typeof clearTimeout ? clearTimeout : i;
          } catch (e) {
            n = i;
          }
        })();
        var s,
          c = [],
          u = !1,
          l = -1;
        function f() {
          u &&
            s &&
            ((u = !1), s.length ? (c = s.concat(c)) : (l = -1), c.length && p());
        }
        function p() {
          if (!u) {
            var e = a(f);
            u = !0;
            for (var t = c.length; t; ) {
              for (s = c, c = []; ++l < t; ) s && s[l].run();
              (l = -1), (t = c.length);
            }
            (s = null),
              (u = !1),
              (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === i || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(e);
                try {
                  return n(e);
                } catch (t) {
                  try {
                    return n.call(null, e);
                  } catch (t) {
                    return n.call(this, e);
                  }
                }
              })(e);
          }
        }
        function h(e, t) {
          (this.fun = e), (this.array = t);
        }
        function d() {}
        (r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          c.push(new h(e, t)), 1 !== c.length || u || a(p);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = 'browser'),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ''),
          (r.versions = {}),
          (r.on = d),
          (r.addListener = d),
          (r.once = d),
          (r.off = d),
          (r.removeListener = d),
          (r.removeAllListeners = d),
          (r.emit = d),
          (r.prependListener = d),
          (r.prependOnceListener = d),
          (r.listeners = function (e) {
            return [];
          }),
          (r.binding = function (e) {
            throw new Error('process.binding is not supported');
          }),
          (r.cwd = function () {
            return '/';
          }),
          (r.chdir = function (e) {
            throw new Error('process.chdir is not supported');
          }),
          (r.umask = function () {
            return 0;
          });
      },
      568: (e, t, n) => {
        'use strict';
        const r = Symbol('Comlink.proxy'),
          o = Symbol('Comlink.endpoint'),
          i = Symbol('Comlink.releaseProxy'),
          a = Symbol('Comlink.finalizer'),
          s = Symbol('Comlink.thrown'),
          c = (e) => ('object' == typeof e && null !== e) || 'function' == typeof e,
          u = new Map([
            [
              'proxy',
              {
                canHandle: (e) => c(e) && e[r],
                serialize(e) {
                  const { port1: t, port2: n } = new MessageChannel();
                  return l(e, t), [n, [n]];
                },
                deserialize: (e) => (e.start(), m(e, [], undefined)),
              },
            ],
            [
              'throw',
              {
                canHandle: (e) => c(e) && s in e,
                serialize({ value: e }) {
                  let t;
                  return (
                    (t =
                      e instanceof Error
                        ? {
                            isError: !0,
                            value: { message: e.message, name: e.name, stack: e.stack },
                          }
                        : { isError: !1, value: e }),
                    [t, []]
                  );
                },
                deserialize(e) {
                  if (e.isError)
                    throw Object.assign(new Error(e.value.message), e.value);
                  throw e.value;
                },
              },
            ],
          ]);
        function l(e, t = globalThis, n = ['*']) {
          t.addEventListener('message', function o(i) {
            if (!i || !i.data) return;
            if (
              !(function (e, t) {
                for (const n of e) {
                  if (t === n || '*' === n) return !0;
                  if (n instanceof RegExp && n.test(t)) return !0;
                }
                return !1;
              })(n, i.origin)
            )
              return void console.warn(
                `Invalid origin '${i.origin}' for comlink proxy`
              );
            const { id: c, type: u, path: p } = Object.assign({ path: [] }, i.data),
              h = (i.data.argumentList || []).map(w);
            let d;
            try {
              const t = p.slice(0, -1).reduce((e, t) => e[t], e),
                n = p.reduce((e, t) => e[t], e);
              switch (u) {
                case 'GET':
                  d = n;
                  break;
                case 'SET':
                  (t[p.slice(-1)[0]] = w(i.data.value)), (d = !0);
                  break;
                case 'APPLY':
                  d = n.apply(t, h);
                  break;
                case 'CONSTRUCT':
                  d = (function (e) {
                    return Object.assign(e, { [r]: !0 });
                  })(new n(...h));
                  break;
                case 'ENDPOINT':
                  {
                    const { port1: t, port2: n } = new MessageChannel();
                    l(e, n),
                      (d = (function (e, t) {
                        return y.set(e, t), e;
                      })(t, [t]));
                  }
                  break;
                case 'RELEASE':
                  d = void 0;
                  break;
                default:
                  return;
              }
            } catch (e) {
              d = { value: e, [s]: 0 };
            }
            Promise.resolve(d)
              .catch((e) => ({ value: e, [s]: 0 }))
              .then((n) => {
                const [r, i] = b(n);
                t.postMessage(Object.assign(Object.assign({}, r), { id: c }), i),
                  'RELEASE' === u &&
                    (t.removeEventListener('message', o),
                    f(t),
                    a in e && 'function' == typeof e[a] && e[a]());
              })
              .catch((e) => {
                const [n, r] = b({
                  value: new TypeError('Unserializable return value'),
                  [s]: 0,
                });
                t.postMessage(Object.assign(Object.assign({}, n), { id: c }), r);
              });
          }),
            t.start && t.start();
        }
        function f(e) {
          (function (e) {
            return 'MessagePort' === e.constructor.name;
          })(e) && e.close();
        }
        function p(e) {
          if (e) throw new Error('Proxy has been released and is not useable');
        }
        function h(e) {
          return E(e, { type: 'RELEASE' }).then(() => {
            f(e);
          });
        }
        const d = new WeakMap(),
          g =
            'FinalizationRegistry' in globalThis &&
            new FinalizationRegistry((e) => {
              const t = (d.get(e) || 0) - 1;
              d.set(e, t), 0 === t && h(e);
            });
        function m(e, t = [], n = function () {}) {
          let r = !1;
          const a = new Proxy(n, {
            get(n, o) {
              if ((p(r), o === i))
                return () => {
                  !(function (e) {
                    g && g.unregister(e);
                  })(a),
                    h(e),
                    (r = !0);
                };
              if ('then' === o) {
                if (0 === t.length) return { then: () => a };
                const n = E(e, { type: 'GET', path: t.map((e) => e.toString()) }).then(
                  w
                );
                return n.then.bind(n);
              }
              return m(e, [...t, o]);
            },
            set(n, o, i) {
              p(r);
              const [a, s] = b(i);
              return E(
                e,
                { type: 'SET', path: [...t, o].map((e) => e.toString()), value: a },
                s
              ).then(w);
            },
            apply(n, i, a) {
              p(r);
              const s = t[t.length - 1];
              if (s === o) return E(e, { type: 'ENDPOINT' }).then(w);
              if ('bind' === s) return m(e, t.slice(0, -1));
              const [c, u] = v(a);
              return E(
                e,
                { type: 'APPLY', path: t.map((e) => e.toString()), argumentList: c },
                u
              ).then(w);
            },
            construct(n, o) {
              p(r);
              const [i, a] = v(o);
              return E(
                e,
                {
                  type: 'CONSTRUCT',
                  path: t.map((e) => e.toString()),
                  argumentList: i,
                },
                a
              ).then(w);
            },
          });
          return (
            (function (e, t) {
              const n = (d.get(t) || 0) + 1;
              d.set(t, n), g && g.register(e, t, e);
            })(a, e),
            a
          );
        }
        function v(e) {
          const t = e.map(b);
          return [
            t.map((e) => e[0]),
            ((n = t.map((e) => e[1])), Array.prototype.concat.apply([], n)),
          ];
          var n;
        }
        const y = new WeakMap();
        function b(e) {
          for (const [t, n] of u)
            if (n.canHandle(e)) {
              const [r, o] = n.serialize(e);
              return [{ type: 'HANDLER', name: t, value: r }, o];
            }
          return [{ type: 'RAW', value: e }, y.get(e) || []];
        }
        function w(e) {
          switch (e.type) {
            case 'HANDLER':
              return u.get(e.name).deserialize(e.value);
            case 'RAW':
              return e.value;
          }
        }
        function E(e, t, n) {
          return new Promise((r) => {
            const o = new Array(4)
              .fill(0)
              .map(() =>
                Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
              )
              .join('-');
            e.addEventListener('message', function t(n) {
              n.data &&
                n.data.id &&
                n.data.id === o &&
                (e.removeEventListener('message', t), r(n.data));
            }),
              e.start && e.start(),
              e.postMessage(Object.assign({ id: o }, t), n);
          });
        }
        l(new (n(951).O)());
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = (r[e] = { exports: {} });
    return n[e](i, i.exports, o), i.exports;
  }
  (o.m = n),
    (o.c = r),
    (o.x = () => {
      var e = o.O(void 0, [951], () => o(568));
      return o.O(e);
    }),
    (o.amdO = {}),
    (e = []),
    (o.O = (t, n, r, i) => {
      if (!n) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, r, i] = e[l], s = !0, c = 0; c < n.length; c++)
            (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((s = !1), i < a && (a = i));
          if (s) {
            e.splice(l--, 1);
            var u = r();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      i = i || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
      e[l] = [n, r, i];
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), []))),
    (o.u = (e) => e + '.8b2f42a81d35ca63eecb.js?v=8b2f42a81d35ca63eecb'),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      o.S = {};
      var e = {},
        t = {};
      o.I = (n, r) => {
        r || (r = []);
        var i = t[n];
        if ((i || (i = t[n] = {}), !(r.indexOf(i) >= 0))) {
          if ((r.push(i), e[n])) return e[n];
          o.o(o.S, n) || (o.S[n] = {}), o.S[n];
          var a = [];
          return (e[n] = a.length ? Promise.all(a).then(() => (e[n] = 1)) : 1);
        }
      };
    })(),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + '');
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName('script');
        n.length && (e = n[n.length - 1].src);
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (o.p = e);
    })(),
    (() => {
      var e = { 168: 1 };
      o.f.i = (t, n) => {
        e[t] || importScripts(o.p + o.u(t));
      };
      var t = (self.webpackChunkandeplane_pyodide_kernel_extension =
          self.webpackChunkandeplane_pyodide_kernel_extension || []),
        n = t.push.bind(t);
      t.push = (t) => {
        var [r, i, a] = t;
        for (var s in i) o.o(i, s) && (o.m[s] = i[s]);
        for (a && a(o); r.length; ) e[r.pop()] = 1;
        n(t);
      };
    })(),
    (t = o.x),
    (o.x = () => o.e(951).then(t)),
    o.x();
})();
//# sourceMappingURL=168.02b1e32f153655335729.js.map?v=02b1e32f153655335729
