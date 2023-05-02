/*! For license information please see 926.4ae4bef2ec265ecf0ac0.js.LICENSE.txt */
(self.webpackChunkandeplane_pyodide_kernel_extension =
  self.webpackChunkandeplane_pyodide_kernel_extension || []).push([
  [926],
  {
    83: (e, t, r) => {
      'use strict';
      r.d(t, { Ud: () => h });
      const i = Symbol('Comlink.proxy'),
        o = Symbol('Comlink.endpoint'),
        n = Symbol('Comlink.releaseProxy'),
        s = Symbol('Comlink.finalizer'),
        a = Symbol('Comlink.thrown'),
        c = (e) => ('object' == typeof e && null !== e) || 'function' == typeof e,
        p = new Map([
          [
            'proxy',
            {
              canHandle: (e) => c(e) && e[i],
              serialize(e) {
                const { port1: t, port2: r } = new MessageChannel();
                return u(e, t), [r, [r]];
              },
              deserialize: (e) => (e.start(), h(e)),
            },
          ],
          [
            'throw',
            {
              canHandle: (e) => c(e) && a in e,
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
                if (e.isError) throw Object.assign(new Error(e.value.message), e.value);
                throw e.value;
              },
            },
          ],
        ]);
      function u(e, t = globalThis, r = ['*']) {
        t.addEventListener('message', function o(n) {
          if (!n || !n.data) return;
          if (
            !(function (e, t) {
              for (const r of e) {
                if (t === r || '*' === r) return !0;
                if (r instanceof RegExp && r.test(t)) return !0;
              }
              return !1;
            })(r, n.origin)
          )
            return void console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
          const { id: c, type: p, path: h } = Object.assign({ path: [] }, n.data),
            l = (n.data.argumentList || []).map(k);
          let f;
          try {
            const t = h.slice(0, -1).reduce((e, t) => e[t], e),
              r = h.reduce((e, t) => e[t], e);
            switch (p) {
              case 'GET':
                f = r;
                break;
              case 'SET':
                (t[h.slice(-1)[0]] = k(n.data.value)), (f = !0);
                break;
              case 'APPLY':
                f = r.apply(t, l);
                break;
              case 'CONSTRUCT':
                f = (function (e) {
                  return Object.assign(e, { [i]: !0 });
                })(new r(...l));
                break;
              case 'ENDPOINT':
                {
                  const { port1: t, port2: r } = new MessageChannel();
                  u(e, r),
                    (f = (function (e, t) {
                      return v.set(e, t), e;
                    })(t, [t]));
                }
                break;
              case 'RELEASE':
                f = void 0;
                break;
              default:
                return;
            }
          } catch (e) {
            f = { value: e, [a]: 0 };
          }
          Promise.resolve(f)
            .catch((e) => ({ value: e, [a]: 0 }))
            .then((r) => {
              const [i, n] = b(r);
              t.postMessage(Object.assign(Object.assign({}, i), { id: c }), n),
                'RELEASE' === p &&
                  (t.removeEventListener('message', o),
                  _(t),
                  s in e && 'function' == typeof e[s] && e[s]());
            })
            .catch((e) => {
              const [r, i] = b({
                value: new TypeError('Unserializable return value'),
                [a]: 0,
              });
              t.postMessage(Object.assign(Object.assign({}, r), { id: c }), i);
            });
        }),
          t.start && t.start();
      }
      function _(e) {
        (function (e) {
          return 'MessagePort' === e.constructor.name;
        })(e) && e.close();
      }
      function h(e, t) {
        return m(e, [], t);
      }
      function l(e) {
        if (e) throw new Error('Proxy has been released and is not useable');
      }
      function f(e) {
        return w(e, { type: 'RELEASE' }).then(() => {
          _(e);
        });
      }
      const d = new WeakMap(),
        g =
          'FinalizationRegistry' in globalThis &&
          new FinalizationRegistry((e) => {
            const t = (d.get(e) || 0) - 1;
            d.set(e, t), 0 === t && f(e);
          });
      function m(e, t = [], r = function () {}) {
        let i = !1;
        const s = new Proxy(r, {
          get(r, o) {
            if ((l(i), o === n))
              return () => {
                !(function (e) {
                  g && g.unregister(e);
                })(s),
                  f(e),
                  (i = !0);
              };
            if ('then' === o) {
              if (0 === t.length) return { then: () => s };
              const r = w(e, { type: 'GET', path: t.map((e) => e.toString()) }).then(k);
              return r.then.bind(r);
            }
            return m(e, [...t, o]);
          },
          set(r, o, n) {
            l(i);
            const [s, a] = b(n);
            return w(
              e,
              { type: 'SET', path: [...t, o].map((e) => e.toString()), value: s },
              a
            ).then(k);
          },
          apply(r, n, s) {
            l(i);
            const a = t[t.length - 1];
            if (a === o) return w(e, { type: 'ENDPOINT' }).then(k);
            if ('bind' === a) return m(e, t.slice(0, -1));
            const [c, p] = y(s);
            return w(
              e,
              { type: 'APPLY', path: t.map((e) => e.toString()), argumentList: c },
              p
            ).then(k);
          },
          construct(r, o) {
            l(i);
            const [n, s] = y(o);
            return w(
              e,
              { type: 'CONSTRUCT', path: t.map((e) => e.toString()), argumentList: n },
              s
            ).then(k);
          },
        });
        return (
          (function (e, t) {
            const r = (d.get(t) || 0) + 1;
            d.set(t, r), g && g.register(e, t, e);
          })(s, e),
          s
        );
      }
      function y(e) {
        const t = e.map(b);
        return [
          t.map((e) => e[0]),
          ((r = t.map((e) => e[1])), Array.prototype.concat.apply([], r)),
        ];
        var r;
      }
      const v = new WeakMap();
      function b(e) {
        for (const [t, r] of p)
          if (r.canHandle(e)) {
            const [i, o] = r.serialize(e);
            return [{ type: 'HANDLER', name: t, value: i }, o];
          }
        return [{ type: 'RAW', value: e }, v.get(e) || []];
      }
      function k(e) {
        switch (e.type) {
          case 'HANDLER':
            return p.get(e.name).deserialize(e.value);
          case 'RAW':
            return e.value;
        }
      }
      function w(e, t, r) {
        return new Promise((i) => {
          const o = new Array(4)
            .fill(0)
            .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
            .join('-');
          e.addEventListener('message', function t(r) {
            r.data &&
              r.data.id &&
              r.data.id === o &&
              (e.removeEventListener('message', t), i(r.data));
          }),
            e.start && e.start(),
            e.postMessage(Object.assign({ id: o }, t), r);
        });
      }
    },
    542: (e) => {
      'use strict';
      var t,
        r = { DEBUG: !1, LIB_VERSION: '2.47.0' };
      if ('undefined' == typeof window) {
        var i = { hostname: '' };
        t = {
          navigator: { userAgent: '' },
          document: { location: i, referrer: '' },
          screen: { width: 0, height: 0 },
          location: i,
        };
      } else t = window;
      var o,
        n,
        s,
        a,
        c,
        p,
        u,
        _,
        h,
        l,
        f,
        d = Array.prototype,
        g = Function.prototype,
        m = Object.prototype,
        y = d.slice,
        v = m.toString,
        b = m.hasOwnProperty,
        k = t.console,
        w = t.navigator,
        x = t.document,
        S = t.opera,
        E = t.screen,
        q = w.userAgent,
        O = g.bind,
        T = d.forEach,
        I = d.indexOf,
        A = d.map,
        D = Array.isArray,
        P = {},
        B = {
          trim: function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          },
        },
        C = {
          log: function () {
            if (r.DEBUG && !B.isUndefined(k) && k)
              try {
                k.log.apply(k, arguments);
              } catch (e) {
                B.each(arguments, function (e) {
                  k.log(e);
                });
              }
          },
          warn: function () {
            if (r.DEBUG && !B.isUndefined(k) && k) {
              var e = ['Mixpanel warning:'].concat(B.toArray(arguments));
              try {
                k.warn.apply(k, e);
              } catch (t) {
                B.each(e, function (e) {
                  k.warn(e);
                });
              }
            }
          },
          error: function () {
            if (r.DEBUG && !B.isUndefined(k) && k) {
              var e = ['Mixpanel error:'].concat(B.toArray(arguments));
              try {
                k.error.apply(k, e);
              } catch (t) {
                B.each(e, function (e) {
                  k.error(e);
                });
              }
            }
          },
          critical: function () {
            if (!B.isUndefined(k) && k) {
              var e = ['Mixpanel error:'].concat(B.toArray(arguments));
              try {
                k.error.apply(k, e);
              } catch (t) {
                B.each(e, function (e) {
                  k.error(e);
                });
              }
            }
          },
        },
        U = function (e, t) {
          return function () {
            return (
              (arguments[0] = '[' + t + '] ' + arguments[0]), e.apply(C, arguments)
            );
          };
        },
        $ = function (e) {
          return { log: U(C.log, e), error: U(C.error, e), critical: U(C.critical, e) };
        };
      (B.bind = function (e, t) {
        var r, i;
        if (O && e.bind === O) return O.apply(e, y.call(arguments, 1));
        if (!B.isFunction(e)) throw new TypeError();
        return (
          (r = y.call(arguments, 2)),
          (i = function () {
            if (!(this instanceof i)) return e.apply(t, r.concat(y.call(arguments)));
            var o = {};
            o.prototype = e.prototype;
            var n = new o();
            o.prototype = null;
            var s = e.apply(n, r.concat(y.call(arguments)));
            return Object(s) === s ? s : n;
          }),
          i
        );
      }),
        (B.each = function (e, t, r) {
          if (null != e)
            if (T && e.forEach === T) e.forEach(t, r);
            else if (e.length === +e.length) {
              for (var i = 0, o = e.length; i < o; i++)
                if (i in e && t.call(r, e[i], i, e) === P) return;
            } else
              for (var n in e) if (b.call(e, n) && t.call(r, e[n], n, e) === P) return;
        }),
        (B.extend = function (e) {
          return (
            B.each(y.call(arguments, 1), function (t) {
              for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
            }),
            e
          );
        }),
        (B.isArray =
          D ||
          function (e) {
            return '[object Array]' === v.call(e);
          }),
        (B.isFunction = function (e) {
          try {
            return /^\s*\bfunction\b/.test(e);
          } catch (e) {
            return !1;
          }
        }),
        (B.isArguments = function (e) {
          return !(!e || !b.call(e, 'callee'));
        }),
        (B.toArray = function (e) {
          return e
            ? e.toArray
              ? e.toArray()
              : B.isArray(e) || B.isArguments(e)
              ? y.call(e)
              : B.values(e)
            : [];
        }),
        (B.map = function (e, t, r) {
          if (A && e.map === A) return e.map(t, r);
          var i = [];
          return (
            B.each(e, function (e) {
              i.push(t.call(r, e));
            }),
            i
          );
        }),
        (B.keys = function (e) {
          var t = [];
          return (
            null === e ||
              B.each(e, function (e, r) {
                t[t.length] = r;
              }),
            t
          );
        }),
        (B.values = function (e) {
          var t = [];
          return (
            null === e ||
              B.each(e, function (e) {
                t[t.length] = e;
              }),
            t
          );
        }),
        (B.include = function (e, t) {
          var r = !1;
          return null === e
            ? r
            : I && e.indexOf === I
            ? -1 != e.indexOf(t)
            : (B.each(e, function (e) {
                if (r || (r = e === t)) return P;
              }),
              r);
        }),
        (B.includes = function (e, t) {
          return -1 !== e.indexOf(t);
        }),
        (B.inherit = function (e, t) {
          return (
            (e.prototype = new t()),
            (e.prototype.constructor = e),
            (e.superclass = t.prototype),
            e
          );
        }),
        (B.isObject = function (e) {
          return e === Object(e) && !B.isArray(e);
        }),
        (B.isEmptyObject = function (e) {
          if (B.isObject(e)) {
            for (var t in e) if (b.call(e, t)) return !1;
            return !0;
          }
          return !1;
        }),
        (B.isUndefined = function (e) {
          return void 0 === e;
        }),
        (B.isString = function (e) {
          return '[object String]' == v.call(e);
        }),
        (B.isDate = function (e) {
          return '[object Date]' == v.call(e);
        }),
        (B.isNumber = function (e) {
          return '[object Number]' == v.call(e);
        }),
        (B.isElement = function (e) {
          return !(!e || 1 !== e.nodeType);
        }),
        (B.encodeDates = function (e) {
          return (
            B.each(e, function (t, r) {
              B.isDate(t)
                ? (e[r] = B.formatDate(t))
                : B.isObject(t) && (e[r] = B.encodeDates(t));
            }),
            e
          );
        }),
        (B.timestamp = function () {
          return (
            (Date.now =
              Date.now ||
              function () {
                return +new Date();
              }),
            Date.now()
          );
        }),
        (B.formatDate = function (e) {
          function t(e) {
            return e < 10 ? '0' + e : e;
          }
          return (
            e.getUTCFullYear() +
            '-' +
            t(e.getUTCMonth() + 1) +
            '-' +
            t(e.getUTCDate()) +
            'T' +
            t(e.getUTCHours()) +
            ':' +
            t(e.getUTCMinutes()) +
            ':' +
            t(e.getUTCSeconds())
          );
        }),
        (B.strip_empty_properties = function (e) {
          var t = {};
          return (
            B.each(e, function (e, r) {
              B.isString(e) && e.length > 0 && (t[r] = e);
            }),
            t
          );
        }),
        (B.truncate = function (e, t) {
          var r;
          return (
            'string' == typeof e
              ? (r = e.slice(0, t))
              : B.isArray(e)
              ? ((r = []),
                B.each(e, function (e) {
                  r.push(B.truncate(e, t));
                }))
              : B.isObject(e)
              ? ((r = {}),
                B.each(e, function (e, i) {
                  r[i] = B.truncate(e, t);
                }))
              : (r = e),
            r
          );
        }),
        (B.JSONEncode = function (e) {
          var t = function (e) {
              var t =
                  /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                r = {
                  '\b': '\\b',
                  '\t': '\\t',
                  '\n': '\\n',
                  '\f': '\\f',
                  '\r': '\\r',
                  '"': '\\"',
                  '\\': '\\\\',
                };
              return (
                (t.lastIndex = 0),
                t.test(e)
                  ? '"' +
                    e.replace(t, function (e) {
                      var t = r[e];
                      return 'string' == typeof t
                        ? t
                        : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
                    }) +
                    '"'
                  : '"' + e + '"'
              );
            },
            r = function (e, i) {
              var o = '',
                n = 0,
                s = '',
                a = '',
                c = 0,
                p = o,
                u = [],
                _ = i[e];
              switch (
                (_ &&
                  'object' == typeof _ &&
                  'function' == typeof _.toJSON &&
                  (_ = _.toJSON(e)),
                typeof _)
              ) {
                case 'string':
                  return t(_);
                case 'number':
                  return isFinite(_) ? String(_) : 'null';
                case 'boolean':
                case 'null':
                  return String(_);
                case 'object':
                  if (!_) return 'null';
                  if (((o += '    '), (u = []), '[object Array]' === v.apply(_))) {
                    for (c = _.length, n = 0; n < c; n += 1) u[n] = r(n, _) || 'null';
                    return (
                      (a =
                        0 === u.length
                          ? '[]'
                          : o
                          ? '[\n' + o + u.join(',\n' + o) + '\n' + p + ']'
                          : '[' + u.join(',') + ']'),
                      (o = p),
                      a
                    );
                  }
                  for (s in _)
                    b.call(_, s) &&
                      (a = r(s, _)) &&
                      u.push(t(s) + (o ? ': ' : ':') + a);
                  return (
                    (a =
                      0 === u.length
                        ? '{}'
                        : o
                        ? '{' + u.join(',') + p + '}'
                        : '{' + u.join(',') + '}'),
                    (o = p),
                    a
                  );
              }
            };
          return r('', { '': e });
        }),
        (B.JSONDecode =
          ((c = {
            '"': '"',
            '\\': '\\',
            '/': '/',
            b: '\b',
            f: '\f',
            n: '\n',
            r: '\r',
            t: '\t',
          }),
          (p = function (e) {
            var t = new SyntaxError(e);
            throw ((t.at = o), (t.text = s), t);
          }),
          (u = function (e) {
            return (
              e && e !== n && p("Expected '" + e + "' instead of '" + n + "'"),
              (n = s.charAt(o)),
              (o += 1),
              n
            );
          }),
          (_ = function () {
            var e,
              t = '';
            for ('-' === n && ((t = '-'), u('-')); n >= '0' && n <= '9'; )
              (t += n), u();
            if ('.' === n) for (t += '.'; u() && n >= '0' && n <= '9'; ) t += n;
            if ('e' === n || 'E' === n)
              for (
                t += n, u(), ('-' !== n && '+' !== n) || ((t += n), u());
                n >= '0' && n <= '9';

              )
                (t += n), u();
            if (((e = +t), isFinite(e))) return e;
            p('Bad number');
          }),
          (h = function () {
            var e,
              t,
              r,
              i = '';
            if ('"' === n)
              for (; u(); ) {
                if ('"' === n) return u(), i;
                if ('\\' === n)
                  if ((u(), 'u' === n)) {
                    for (
                      r = 0, t = 0;
                      t < 4 && ((e = parseInt(u(), 16)), isFinite(e));
                      t += 1
                    )
                      r = 16 * r + e;
                    i += String.fromCharCode(r);
                  } else {
                    if ('string' != typeof c[n]) break;
                    i += c[n];
                  }
                else i += n;
              }
            p('Bad string');
          }),
          (l = function () {
            for (; n && n <= ' '; ) u();
          }),
          (a = function () {
            switch ((l(), n)) {
              case '{':
                return (function () {
                  var e,
                    t = {};
                  if ('{' === n) {
                    if ((u('{'), l(), '}' === n)) return u('}'), t;
                    for (; n; ) {
                      if (
                        ((e = h()),
                        l(),
                        u(':'),
                        Object.hasOwnProperty.call(t, e) &&
                          p('Duplicate key "' + e + '"'),
                        (t[e] = a()),
                        l(),
                        '}' === n)
                      )
                        return u('}'), t;
                      u(','), l();
                    }
                  }
                  p('Bad object');
                })();
              case '[':
                return (function () {
                  var e = [];
                  if ('[' === n) {
                    if ((u('['), l(), ']' === n)) return u(']'), e;
                    for (; n; ) {
                      if ((e.push(a()), l(), ']' === n)) return u(']'), e;
                      u(','), l();
                    }
                  }
                  p('Bad array');
                })();
              case '"':
                return h();
              case '-':
                return _();
              default:
                return n >= '0' && n <= '9'
                  ? _()
                  : (function () {
                      switch (n) {
                        case 't':
                          return u('t'), u('r'), u('u'), u('e'), !0;
                        case 'f':
                          return u('f'), u('a'), u('l'), u('s'), u('e'), !1;
                        case 'n':
                          return u('n'), u('u'), u('l'), u('l'), null;
                      }
                      p('Unexpected "' + n + '"');
                    })();
            }
          }),
          function (e) {
            var t;
            return (
              (s = e), (o = 0), (n = ' '), (t = a()), l(), n && p('Syntax error'), t
            );
          })),
        (B.base64Encode = function (e) {
          var t,
            r,
            i,
            o,
            n,
            s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            a = 0,
            c = 0,
            p = '',
            u = [];
          if (!e) return e;
          e = B.utf8Encode(e);
          do {
            (t =
              ((n =
                (e.charCodeAt(a++) << 16) |
                (e.charCodeAt(a++) << 8) |
                e.charCodeAt(a++)) >>
                18) &
              63),
              (r = (n >> 12) & 63),
              (i = (n >> 6) & 63),
              (o = 63 & n),
              (u[c++] = s.charAt(t) + s.charAt(r) + s.charAt(i) + s.charAt(o));
          } while (a < e.length);
          switch (((p = u.join('')), e.length % 3)) {
            case 1:
              p = p.slice(0, -2) + '==';
              break;
            case 2:
              p = p.slice(0, -1) + '=';
          }
          return p;
        }),
        (B.utf8Encode = function (e) {
          var t,
            r,
            i,
            o,
            n = '';
          for (
            t = r = 0,
              i = (e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length,
              o = 0;
            o < i;
            o++
          ) {
            var s = e.charCodeAt(o),
              a = null;
            s < 128
              ? r++
              : (a =
                  s > 127 && s < 2048
                    ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                    : String.fromCharCode(
                        (s >> 12) | 224,
                        ((s >> 6) & 63) | 128,
                        (63 & s) | 128
                      )),
              null !== a &&
                (r > t && (n += e.substring(t, r)), (n += a), (t = r = o + 1));
          }
          return r > t && (n += e.substring(t, e.length)), n;
        }),
        (B.UUID =
          ((f = function () {
            var e,
              r = 1 * new Date();
            if (t.performance && t.performance.now) e = t.performance.now();
            else for (e = 0; r == 1 * new Date(); ) e++;
            return r.toString(16) + Math.floor(e).toString(16);
          }),
          function () {
            var e = (E.height * E.width).toString(16);
            return (
              f() +
              '-' +
              Math.random().toString(16).replace('.', '') +
              '-' +
              (function () {
                var e,
                  t,
                  r = q,
                  i = [],
                  o = 0;
                function n(e, t) {
                  var r,
                    o = 0;
                  for (r = 0; r < t.length; r++) o |= i[r] << (8 * r);
                  return e ^ o;
                }
                for (e = 0; e < r.length; e++)
                  (t = r.charCodeAt(e)),
                    i.unshift(255 & t),
                    i.length >= 4 && ((o = n(o, i)), (i = []));
                return i.length > 0 && (o = n(o, i)), o.toString(16);
              })() +
              '-' +
              e +
              '-' +
              f()
            );
          }));
      var j = [
        'ahrefsbot',
        'baiduspider',
        'bingbot',
        'bingpreview',
        'facebookexternal',
        'petalbot',
        'pinterest',
        'screaming frog',
        'yahoo! slurp',
        'yandexbot',
        'adsbot-google',
        'apis-google',
        'duplexweb-google',
        'feedfetcher-google',
        'google favicon',
        'google web preview',
        'google-read-aloud',
        'googlebot',
        'googleweblight',
        'mediapartners-google',
        'storebot-google',
      ];
      (B.isBlockedUA = function (e) {
        var t;
        for (e = e.toLowerCase(), t = 0; t < j.length; t++)
          if (-1 !== e.indexOf(j[t])) return !0;
        return !1;
      }),
        (B.HTTPBuildQuery = function (e, t) {
          var r,
            i,
            o = [];
          return (
            B.isUndefined(t) && (t = '&'),
            B.each(e, function (e, t) {
              (r = encodeURIComponent(e.toString())),
                (i = encodeURIComponent(t)),
                (o[o.length] = i + '=' + r);
            }),
            o.join(t)
          );
        }),
        (B.getQueryParam = function (e, t) {
          t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
          var r = new RegExp('[\\?&]' + t + '=([^&#]*)').exec(e);
          if (null === r || (r && 'string' != typeof r[1] && r[1].length)) return '';
          var i = r[1];
          try {
            i = decodeURIComponent(i);
          } catch (e) {
            C.error('Skipping decoding for malformed query param: ' + i);
          }
          return i.replace(/\+/g, ' ');
        }),
        (B.cookie = {
          get: function (e) {
            for (var t = e + '=', r = x.cookie.split(';'), i = 0; i < r.length; i++) {
              for (var o = r[i]; ' ' == o.charAt(0); ) o = o.substring(1, o.length);
              if (0 === o.indexOf(t))
                return decodeURIComponent(o.substring(t.length, o.length));
            }
            return null;
          },
          parse: function (e) {
            var t;
            try {
              t = B.JSONDecode(B.cookie.get(e)) || {};
            } catch (e) {}
            return t;
          },
          set_seconds: function (e, t, r, i, o, n, s) {
            var a = '',
              c = '',
              p = '';
            if (s) a = '; domain=' + s;
            else if (i) {
              var u = Q(x.location.hostname);
              a = u ? '; domain=.' + u : '';
            }
            if (r) {
              var _ = new Date();
              _.setTime(_.getTime() + 1e3 * r), (c = '; expires=' + _.toGMTString());
            }
            n && ((o = !0), (p = '; SameSite=None')),
              o && (p += '; secure'),
              (x.cookie = e + '=' + encodeURIComponent(t) + c + '; path=/' + a + p);
          },
          set: function (e, t, r, i, o, n, s) {
            var a = '',
              c = '',
              p = '';
            if (s) a = '; domain=' + s;
            else if (i) {
              var u = Q(x.location.hostname);
              a = u ? '; domain=.' + u : '';
            }
            if (r) {
              var _ = new Date();
              _.setTime(_.getTime() + 24 * r * 60 * 60 * 1e3),
                (c = '; expires=' + _.toGMTString());
            }
            n && ((o = !0), (p = '; SameSite=None')), o && (p += '; secure');
            var h = e + '=' + encodeURIComponent(t) + c + '; path=/' + a + p;
            return (x.cookie = h), h;
          },
          remove: function (e, t, r) {
            B.cookie.set(e, '', -1, t, !1, !1, r);
          },
        });
      var M = null,
        N = function (e, t) {
          if (null !== M && !t) return M;
          var r = !0;
          try {
            e = e || window.localStorage;
            var i = '__mplss_' + z(8);
            e.setItem(i, 'xyz'), 'xyz' !== e.getItem(i) && (r = !1), e.removeItem(i);
          } catch (e) {
            r = !1;
          }
          return (M = r), r;
        };
      (B.localStorage = {
        is_supported: function (e) {
          var t = N(null, e);
          return (
            t || C.error('localStorage unsupported; falling back to cookie store'), t
          );
        },
        error: function (e) {
          C.error('localStorage error: ' + e);
        },
        get: function (e) {
          try {
            return window.localStorage.getItem(e);
          } catch (e) {
            B.localStorage.error(e);
          }
          return null;
        },
        parse: function (e) {
          try {
            return B.JSONDecode(B.localStorage.get(e)) || {};
          } catch (e) {}
          return null;
        },
        set: function (e, t) {
          try {
            window.localStorage.setItem(e, t);
          } catch (e) {
            B.localStorage.error(e);
          }
        },
        remove: function (e) {
          try {
            window.localStorage.removeItem(e);
          } catch (e) {
            B.localStorage.error(e);
          }
        },
      }),
        (B.register_event = (function () {
          function e(t) {
            return (
              t &&
                ((t.preventDefault = e.preventDefault),
                (t.stopPropagation = e.stopPropagation)),
              t
            );
          }
          return (
            (e.preventDefault = function () {
              this.returnValue = !1;
            }),
            (e.stopPropagation = function () {
              this.cancelBubble = !0;
            }),
            function (t, r, i, o, n) {
              if (t)
                if (t.addEventListener && !o) t.addEventListener(r, i, !!n);
                else {
                  var s = 'on' + r,
                    a = t[s];
                  t[s] = (function (t, r, i) {
                    return function (o) {
                      if ((o = o || e(window.event))) {
                        var n,
                          s,
                          a = !0;
                        return (
                          B.isFunction(i) && (n = i(o)),
                          (s = r.call(t, o)),
                          (!1 !== n && !1 !== s) || (a = !1),
                          a
                        );
                      }
                    };
                  })(t, i, a);
                }
              else C.error('No valid element provided to register_event');
            }
          );
        })());
      var F = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
      B.dom_query = (function () {
        function e(e) {
          return e.all ? e.all : e.getElementsByTagName('*');
        }
        var t = /[\t\r\n]/g;
        function r(e, r) {
          var i = ' ' + r + ' ';
          return (' ' + e.className + ' ').replace(t, ' ').indexOf(i) >= 0;
        }
        function i(t) {
          if (!x.getElementsByTagName) return [];
          var i,
            o,
            n,
            s,
            a,
            c,
            p,
            u,
            _,
            h,
            l = t.split(' '),
            f = [x];
          for (c = 0; c < l.length; c++)
            if ((i = l[c].replace(/^\s+/, '').replace(/\s+$/, '')).indexOf('#') > -1) {
              n = (o = i.split('#'))[0];
              var d = o[1],
                g = x.getElementById(d);
              if (!g || (n && g.nodeName.toLowerCase() != n)) return [];
              f = [g];
            } else if (i.indexOf('.') > -1) {
              n = (o = i.split('.'))[0];
              var m = o[1];
              for (n || (n = '*'), s = [], a = 0, p = 0; p < f.length; p++)
                for (
                  _ = '*' == n ? e(f[p]) : f[p].getElementsByTagName(n), u = 0;
                  u < _.length;
                  u++
                )
                  s[a++] = _[u];
              for (f = [], h = 0, p = 0; p < s.length; p++)
                s[p].className &&
                  B.isString(s[p].className) &&
                  r(s[p], m) &&
                  (f[h++] = s[p]);
            } else {
              var y = i.match(F);
              if (y) {
                n = y[1];
                var v,
                  b = y[2],
                  k = y[3],
                  w = y[4];
                for (n || (n = '*'), s = [], a = 0, p = 0; p < f.length; p++)
                  for (
                    _ = '*' == n ? e(f[p]) : f[p].getElementsByTagName(n), u = 0;
                    u < _.length;
                    u++
                  )
                    s[a++] = _[u];
                switch (((f = []), (h = 0), k)) {
                  case '=':
                    v = function (e) {
                      return e.getAttribute(b) == w;
                    };
                    break;
                  case '~':
                    v = function (e) {
                      return e.getAttribute(b).match(new RegExp('\\b' + w + '\\b'));
                    };
                    break;
                  case '|':
                    v = function (e) {
                      return e.getAttribute(b).match(new RegExp('^' + w + '-?'));
                    };
                    break;
                  case '^':
                    v = function (e) {
                      return 0 === e.getAttribute(b).indexOf(w);
                    };
                    break;
                  case '$':
                    v = function (e) {
                      return (
                        e.getAttribute(b).lastIndexOf(w) ==
                        e.getAttribute(b).length - w.length
                      );
                    };
                    break;
                  case '*':
                    v = function (e) {
                      return e.getAttribute(b).indexOf(w) > -1;
                    };
                    break;
                  default:
                    v = function (e) {
                      return e.getAttribute(b);
                    };
                }
                for (f = [], h = 0, p = 0; p < s.length; p++)
                  v(s[p]) && (f[h++] = s[p]);
              } else {
                for (n = i, s = [], a = 0, p = 0; p < f.length; p++)
                  for (_ = f[p].getElementsByTagName(n), u = 0; u < _.length; u++)
                    s[a++] = _[u];
                f = s;
              }
            }
          return f;
        }
        return function (e) {
          return B.isElement(e)
            ? [e]
            : B.isObject(e) && !B.isUndefined(e.length)
            ? e
            : i.call(this, e);
        };
      })();
      var R = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'],
        L = [
          'dclid',
          'fbclid',
          'gclid',
          'ko_click_id',
          'li_fat_id',
          'msclkid',
          'ttclid',
          'twclid',
          'wbraid',
        ];
      B.info = {
        campaignParams: function (e) {
          var t = '',
            r = {};
          return (
            B.each(R, function (i) {
              (t = B.getQueryParam(x.URL, i)).length
                ? (r[i] = t)
                : void 0 !== e && (r[i] = e);
            }),
            r
          );
        },
        clickParams: function () {
          var e = '',
            t = {};
          return (
            B.each(L, function (r) {
              (e = B.getQueryParam(x.URL, r)).length && (t[r] = e);
            }),
            t
          );
        },
        marketingParams: function () {
          return B.extend(B.info.campaignParams(), B.info.clickParams());
        },
        searchEngine: function (e) {
          return 0 === e.search('https?://(.*)google.([^/?]*)')
            ? 'google'
            : 0 === e.search('https?://(.*)bing.com')
            ? 'bing'
            : 0 === e.search('https?://(.*)yahoo.com')
            ? 'yahoo'
            : 0 === e.search('https?://(.*)duckduckgo.com')
            ? 'duckduckgo'
            : null;
        },
        searchInfo: function (e) {
          var t = B.info.searchEngine(e),
            r = 'yahoo' != t ? 'q' : 'p',
            i = {};
          if (null !== t) {
            i.$search_engine = t;
            var o = B.getQueryParam(e, r);
            o.length && (i.mp_keyword = o);
          }
          return i;
        },
        browser: function (e, t, r) {
          return (
            (t = t || ''),
            r || B.includes(e, ' OPR/')
              ? B.includes(e, 'Mini')
                ? 'Opera Mini'
                : 'Opera'
              : /(BlackBerry|PlayBook|BB10)/i.test(e)
              ? 'BlackBerry'
              : B.includes(e, 'IEMobile') || B.includes(e, 'WPDesktop')
              ? 'Internet Explorer Mobile'
              : B.includes(e, 'SamsungBrowser/')
              ? 'Samsung Internet'
              : B.includes(e, 'Edge') || B.includes(e, 'Edg/')
              ? 'Microsoft Edge'
              : B.includes(e, 'FBIOS')
              ? 'Facebook Mobile'
              : B.includes(e, 'Chrome')
              ? 'Chrome'
              : B.includes(e, 'CriOS')
              ? 'Chrome iOS'
              : B.includes(e, 'UCWEB') || B.includes(e, 'UCBrowser')
              ? 'UC Browser'
              : B.includes(e, 'FxiOS')
              ? 'Firefox iOS'
              : B.includes(t, 'Apple')
              ? B.includes(e, 'Mobile')
                ? 'Mobile Safari'
                : 'Safari'
              : B.includes(e, 'Android')
              ? 'Android Mobile'
              : B.includes(e, 'Konqueror')
              ? 'Konqueror'
              : B.includes(e, 'Firefox')
              ? 'Firefox'
              : B.includes(e, 'MSIE') || B.includes(e, 'Trident/')
              ? 'Internet Explorer'
              : B.includes(e, 'Gecko')
              ? 'Mozilla'
              : ''
          );
        },
        browserVersion: function (e, t, r) {
          var i = {
            'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
            'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
            'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            'Android Mobile': /android\s(\d+(\.\d+)?)/,
            'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
            'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/,
          }[B.info.browser(e, t, r)];
          if (void 0 === i) return null;
          var o = e.match(i);
          return o ? parseFloat(o[o.length - 2]) : null;
        },
        os: function () {
          var e = q;
          return /Windows/i.test(e)
            ? /Phone/.test(e) || /WPDesktop/.test(e)
              ? 'Windows Phone'
              : 'Windows'
            : /(iPhone|iPad|iPod)/.test(e)
            ? 'iOS'
            : /Android/.test(e)
            ? 'Android'
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? 'BlackBerry'
            : /Mac/i.test(e)
            ? 'Mac OS X'
            : /Linux/.test(e)
            ? 'Linux'
            : /CrOS/.test(e)
            ? 'Chrome OS'
            : '';
        },
        device: function (e) {
          return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
            ? 'Windows Phone'
            : /iPad/.test(e)
            ? 'iPad'
            : /iPod/.test(e)
            ? 'iPod Touch'
            : /iPhone/.test(e)
            ? 'iPhone'
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? 'BlackBerry'
            : /Android/.test(e)
            ? 'Android'
            : '';
        },
        referringDomain: function (e) {
          var t = e.split('/');
          return t.length >= 3 ? t[2] : '';
        },
        properties: function () {
          return B.extend(
            B.strip_empty_properties({
              $os: B.info.os(),
              $browser: B.info.browser(q, w.vendor, S),
              $referrer: x.referrer,
              $referring_domain: B.info.referringDomain(x.referrer),
              $device: B.info.device(q),
            }),
            {
              $current_url: t.location.href,
              $browser_version: B.info.browserVersion(q, w.vendor, S),
              $screen_height: E.height,
              $screen_width: E.width,
              mp_lib: 'web',
              $lib_version: r.LIB_VERSION,
              $insert_id: z(),
              time: B.timestamp() / 1e3,
            }
          );
        },
        people_properties: function () {
          return B.extend(
            B.strip_empty_properties({
              $os: B.info.os(),
              $browser: B.info.browser(q, w.vendor, S),
            }),
            { $browser_version: B.info.browserVersion(q, w.vendor, S) }
          );
        },
        mpPageViewProperties: function () {
          return B.strip_empty_properties({
            current_page_title: x.title,
            current_domain: t.location.hostname,
            current_url_path: t.location.pathname,
            current_url_protocol: t.location.protocol,
            current_url_search: t.location.search,
          });
        },
      };
      var z = function (e) {
          var t =
            Math.random().toString(36).substring(2, 10) +
            Math.random().toString(36).substring(2, 10);
          return e ? t.substring(0, e) : t;
        },
        H = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        J = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Q = function (e) {
          var t = J,
            r = e.split('.'),
            i = r[r.length - 1];
          (i.length > 4 || 'com' === i || 'org' === i) && (t = H);
          var o = e.match(t);
          return o ? o[0] : '';
        },
        G = null,
        K = null;
      'undefined' != typeof JSON && ((G = JSON.stringify), (K = JSON.parse)),
        (G = G || B.JSONEncode),
        (K = K || B.JSONDecode),
        (B.toArray = B.toArray),
        (B.isObject = B.isObject),
        (B.JSONEncode = B.JSONEncode),
        (B.JSONDecode = B.JSONDecode),
        (B.isBlockedUA = B.isBlockedUA),
        (B.isEmptyObject = B.isEmptyObject),
        (B.info = B.info),
        (B.info.device = B.info.device),
        (B.info.browser = B.info.browser),
        (B.info.browserVersion = B.info.browserVersion),
        (B.info.properties = B.info.properties);
      var W = function () {};
      (W.prototype.create_properties = function () {}),
        (W.prototype.event_handler = function () {}),
        (W.prototype.after_track_handler = function () {}),
        (W.prototype.init = function (e) {
          return (this.mp = e), this;
        }),
        (W.prototype.track = function (e, t, r, i) {
          var o = this,
            n = B.dom_query(e);
          if (0 !== n.length)
            return (
              B.each(
                n,
                function (e) {
                  B.register_event(e, this.override_event, function (e) {
                    var n = {},
                      s = o.create_properties(r, this),
                      a = o.mp.get_config('track_links_timeout');
                    o.event_handler(e, this, n),
                      window.setTimeout(o.track_callback(i, s, n, !0), a),
                      o.mp.track(t, s, o.track_callback(i, s, n));
                  });
                },
                this
              ),
              !0
            );
          C.error('The DOM query (' + e + ') returned 0 elements');
        }),
        (W.prototype.track_callback = function (e, t, r, i) {
          i = i || !1;
          var o = this;
          return function () {
            r.callback_fired ||
              ((r.callback_fired = !0),
              (e && !1 === e(i, t)) || o.after_track_handler(t, r, i));
          };
        }),
        (W.prototype.create_properties = function (e, t) {
          return 'function' == typeof e ? e(t) : B.extend({}, e);
        });
      var V = function () {
        this.override_event = 'click';
      };
      B.inherit(V, W),
        (V.prototype.create_properties = function (e, t) {
          var r = V.superclass.create_properties.apply(this, arguments);
          return t.href && (r.url = t.href), r;
        }),
        (V.prototype.event_handler = function (e, t, r) {
          (r.new_tab =
            2 === e.which || e.metaKey || e.ctrlKey || '_blank' === t.target),
            (r.href = t.href),
            r.new_tab || e.preventDefault();
        }),
        (V.prototype.after_track_handler = function (e, t) {
          t.new_tab ||
            setTimeout(function () {
              window.location = t.href;
            }, 0);
        });
      var X = function () {
        this.override_event = 'submit';
      };
      B.inherit(X, W),
        (X.prototype.event_handler = function (e, t, r) {
          (r.element = t), e.preventDefault();
        }),
        (X.prototype.after_track_handler = function (e, t) {
          setTimeout(function () {
            t.element.submit();
          }, 0);
        });
      var Y = $('lock'),
        Z = function (e, t) {
          (t = t || {}),
            (this.storageKey = e),
            (this.storage = t.storage || window.localStorage),
            (this.pollIntervalMS = t.pollIntervalMS || 100),
            (this.timeoutMS = t.timeoutMS || 2e3);
        };
      Z.prototype.withLock = function (e, t, r) {
        r || 'function' == typeof t || ((r = t), (t = null));
        var i = r || new Date().getTime() + '|' + Math.random(),
          o = new Date().getTime(),
          n = this.storageKey,
          s = this.pollIntervalMS,
          a = this.timeoutMS,
          c = this.storage,
          p = n + ':X',
          u = n + ':Y',
          _ = n + ':Z',
          h = function (e) {
            t && t(e);
          },
          l = function (e) {
            if (new Date().getTime() - o > a)
              return (
                Y.error(
                  'Timeout waiting for mutex on ' + n + '; clearing lock. [' + i + ']'
                ),
                c.removeItem(_),
                c.removeItem(u),
                void g()
              );
            setTimeout(function () {
              try {
                e();
              } catch (e) {
                h(e);
              }
            }, s * (Math.random() + 0.1));
          },
          f = function (e, t) {
            e()
              ? t()
              : l(function () {
                  f(e, t);
                });
          },
          d = function () {
            var e = c.getItem(u);
            if (e && e !== i) return !1;
            if ((c.setItem(u, i), c.getItem(u) === i)) return !0;
            if (!N(c, !0))
              throw new Error('localStorage support dropped while acquiring lock');
            return !1;
          },
          g = function () {
            c.setItem(p, i),
              f(d, function () {
                c.getItem(p) !== i
                  ? l(function () {
                      c.getItem(u) === i
                        ? f(function () {
                            return !c.getItem(_);
                          }, m)
                        : g();
                    })
                  : m();
              });
          },
          m = function () {
            c.setItem(_, '1');
            try {
              e();
            } finally {
              c.removeItem(_),
                c.getItem(u) === i && c.removeItem(u),
                c.getItem(p) === i && c.removeItem(p);
            }
          };
        try {
          if (!N(c, !0)) throw new Error('localStorage support check failed');
          g();
        } catch (e) {
          h(e);
        }
      };
      var ee = $('batch'),
        te = function (e, t) {
          (t = t || {}),
            (this.storageKey = e),
            (this.storage = t.storage || window.localStorage),
            (this.reportError = t.errorReporter || B.bind(ee.error, ee)),
            (this.lock = new Z(e, { storage: this.storage })),
            (this.pid = t.pid || null),
            (this.memQueue = []);
        };
      (te.prototype.enqueue = function (e, t, r) {
        var i = { id: z(), flushAfter: new Date().getTime() + 2 * t, payload: e };
        this.lock.withLock(
          B.bind(function () {
            var t;
            try {
              var o = this.readFromStorage();
              o.push(i), (t = this.saveToStorage(o)) && this.memQueue.push(i);
            } catch (r) {
              this.reportError('Error enqueueing item', e), (t = !1);
            }
            r && r(t);
          }, this),
          B.bind(function (e) {
            this.reportError('Error acquiring storage lock', e), r && r(!1);
          }, this),
          this.pid
        );
      }),
        (te.prototype.fillBatch = function (e) {
          var t = this.memQueue.slice(0, e);
          if (t.length < e) {
            var r = this.readFromStorage();
            if (r.length) {
              var i = {};
              B.each(t, function (e) {
                i[e.id] = !0;
              });
              for (var o = 0; o < r.length; o++) {
                var n = r[o];
                if (
                  new Date().getTime() > n.flushAfter &&
                  !i[n.id] &&
                  ((n.orphaned = !0), t.push(n), t.length >= e)
                )
                  break;
              }
            }
          }
          return t;
        });
      var re = function (e, t) {
        var r = [];
        return (
          B.each(e, function (e) {
            e.id && !t[e.id] && r.push(e);
          }),
          r
        );
      };
      te.prototype.removeItemsByID = function (e, t) {
        var r = {};
        B.each(e, function (e) {
          r[e] = !0;
        }),
          (this.memQueue = re(this.memQueue, r));
        var i = B.bind(function () {
          var t;
          try {
            var i = this.readFromStorage();
            if (((i = re(i, r)), (t = this.saveToStorage(i)))) {
              i = this.readFromStorage();
              for (var o = 0; o < i.length; o++) {
                var n = i[o];
                if (n.id && r[n.id])
                  return this.reportError('Item not removed from storage'), !1;
              }
            }
          } catch (r) {
            this.reportError('Error removing items', e), (t = !1);
          }
          return t;
        }, this);
        this.lock.withLock(
          function () {
            var e = i();
            t && t(e);
          },
          B.bind(function (e) {
            var r = !1;
            if (
              (this.reportError('Error acquiring storage lock', e),
              !N(this.storage, !0) && !(r = i()))
            )
              try {
                this.storage.removeItem(this.storageKey);
              } catch (e) {
                this.reportError('Error clearing queue', e);
              }
            t && t(r);
          }, this),
          this.pid
        );
      };
      var ie = function (e, t) {
        var r = [];
        return (
          B.each(e, function (e) {
            var i = e.id;
            if (i in t) {
              var o = t[i];
              null !== o && ((e.payload = o), r.push(e));
            } else r.push(e);
          }),
          r
        );
      };
      (te.prototype.updatePayloads = function (e, t) {
        (this.memQueue = ie(this.memQueue, e)),
          this.lock.withLock(
            B.bind(function () {
              var r;
              try {
                var i = this.readFromStorage();
                (i = ie(i, e)), (r = this.saveToStorage(i));
              } catch (t) {
                this.reportError('Error updating items', e), (r = !1);
              }
              t && t(r);
            }, this),
            B.bind(function (e) {
              this.reportError('Error acquiring storage lock', e), t && t(!1);
            }, this),
            this.pid
          );
      }),
        (te.prototype.readFromStorage = function () {
          var e;
          try {
            (e = this.storage.getItem(this.storageKey)) &&
              ((e = K(e)),
              B.isArray(e) ||
                (this.reportError('Invalid storage entry:', e), (e = null)));
          } catch (t) {
            this.reportError('Error retrieving queue', t), (e = null);
          }
          return e || [];
        }),
        (te.prototype.saveToStorage = function (e) {
          try {
            return this.storage.setItem(this.storageKey, G(e)), !0;
          } catch (e) {
            return this.reportError('Error saving queue', e), !1;
          }
        }),
        (te.prototype.clear = function () {
          (this.memQueue = []), this.storage.removeItem(this.storageKey);
        });
      var oe = $('batch'),
        ne = function (e, t) {
          (this.errorReporter = t.errorReporter),
            (this.queue = new te(e, {
              errorReporter: B.bind(this.reportError, this),
              storage: t.storage,
            })),
            (this.libConfig = t.libConfig),
            (this.sendRequest = t.sendRequestFunc),
            (this.beforeSendHook = t.beforeSendHook),
            (this.stopAllBatching = t.stopAllBatchingFunc),
            (this.batchSize = this.libConfig.batch_size),
            (this.flushInterval = this.libConfig.batch_flush_interval_ms),
            (this.stopped = !this.libConfig.batch_autostart),
            (this.consecutiveRemovalFailures = 0),
            (this.itemIdsSentSuccessfully = {});
        };
      (ne.prototype.enqueue = function (e, t) {
        this.queue.enqueue(e, this.flushInterval, t);
      }),
        (ne.prototype.start = function () {
          (this.stopped = !1), (this.consecutiveRemovalFailures = 0), this.flush();
        }),
        (ne.prototype.stop = function () {
          (this.stopped = !0),
            this.timeoutID && (clearTimeout(this.timeoutID), (this.timeoutID = null));
        }),
        (ne.prototype.clear = function () {
          this.queue.clear();
        }),
        (ne.prototype.resetBatchSize = function () {
          this.batchSize = this.libConfig.batch_size;
        }),
        (ne.prototype.resetFlush = function () {
          this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
        }),
        (ne.prototype.scheduleFlush = function (e) {
          (this.flushInterval = e),
            this.stopped ||
              (this.timeoutID = setTimeout(
                B.bind(this.flush, this),
                this.flushInterval
              ));
        }),
        (ne.prototype.flush = function (e) {
          try {
            if (this.requestInProgress)
              return void oe.log('Flush: Request already in progress');
            e = e || {};
            var t = this.libConfig.batch_request_timeout_ms,
              i = new Date().getTime(),
              o = this.batchSize,
              n = this.queue.fillBatch(o),
              s = [],
              a = {};
            if (
              (B.each(
                n,
                function (e) {
                  var t = e.payload;
                  if (
                    (this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)),
                    t)
                  ) {
                    t.event &&
                      t.properties &&
                      (t.properties = B.extend({}, t.properties, {
                        mp_sent_by_lib_version: r.LIB_VERSION,
                      }));
                    var i = !0,
                      o = e.id;
                    o
                      ? (this.itemIdsSentSuccessfully[o] || 0) > 5 &&
                        (this.reportError(
                          '[dupe] item ID sent too many times, not sending',
                          {
                            item: e,
                            batchSize: n.length,
                            timesSent: this.itemIdsSentSuccessfully[o],
                          }
                        ),
                        (i = !1))
                      : this.reportError('[dupe] found item with no ID', { item: e }),
                      i && s.push(t);
                  }
                  a[e.id] = t;
                },
                this
              ),
              s.length < 1)
            )
              return void this.resetFlush();
            this.requestInProgress = !0;
            var c = B.bind(function (r) {
                this.requestInProgress = !1;
                try {
                  var s = !1;
                  if (e.unloading) this.queue.updatePayloads(a);
                  else if (
                    B.isObject(r) &&
                    'timeout' === r.error &&
                    new Date().getTime() - i >= t
                  )
                    this.reportError('Network timeout; retrying'), this.flush();
                  else if (
                    B.isObject(r) &&
                    r.xhr_req &&
                    (r.xhr_req.status >= 500 ||
                      429 === r.xhr_req.status ||
                      'timeout' === r.error)
                  ) {
                    var c = 2 * this.flushInterval,
                      p = r.xhr_req.responseHeaders;
                    if (p) {
                      var u = p['Retry-After'];
                      u && (c = 1e3 * parseInt(u, 10) || c);
                    }
                    (c = Math.min(6e5, c)),
                      this.reportError('Error; retry in ' + c + ' ms'),
                      this.scheduleFlush(c);
                  } else if (B.isObject(r) && r.xhr_req && 413 === r.xhr_req.status)
                    if (n.length > 1) {
                      var _ = Math.max(1, Math.floor(o / 2));
                      (this.batchSize = Math.min(this.batchSize, _, n.length - 1)),
                        this.reportError(
                          '413 response; reducing batch size to ' + this.batchSize
                        ),
                        this.resetFlush();
                    } else
                      this.reportError('Single-event request too large; dropping', n),
                        this.resetBatchSize(),
                        (s = !0);
                  else s = !0;
                  s &&
                    (this.queue.removeItemsByID(
                      B.map(n, function (e) {
                        return e.id;
                      }),
                      B.bind(function (e) {
                        e
                          ? ((this.consecutiveRemovalFailures = 0), this.flush())
                          : (this.reportError('Failed to remove items from queue'),
                            ++this.consecutiveRemovalFailures > 5
                              ? (this.reportError(
                                  'Too many queue failures; disabling batching system.'
                                ),
                                this.stopAllBatching())
                              : this.resetFlush());
                      }, this)
                    ),
                    B.each(
                      n,
                      B.bind(function (e) {
                        var t = e.id;
                        t
                          ? ((this.itemIdsSentSuccessfully[t] =
                              this.itemIdsSentSuccessfully[t] || 0),
                            this.itemIdsSentSuccessfully[t]++,
                            this.itemIdsSentSuccessfully[t] > 5 &&
                              this.reportError('[dupe] item ID sent too many times', {
                                item: e,
                                batchSize: n.length,
                                timesSent: this.itemIdsSentSuccessfully[t],
                              }))
                          : this.reportError(
                              '[dupe] found item with no ID while removing',
                              { item: e }
                            );
                      }, this)
                    ));
                } catch (e) {
                  this.reportError('Error handling API response', e), this.resetFlush();
                }
              }, this),
              p = {
                method: 'POST',
                verbose: !0,
                ignore_json_errors: !0,
                timeout_ms: t,
              };
            e.unloading && (p.transport = 'sendBeacon'),
              oe.log('MIXPANEL REQUEST:', s),
              this.sendRequest(s, p, c);
          } catch (e) {
            this.reportError('Error flushing request queue', e), this.resetFlush();
          }
        }),
        (ne.prototype.reportError = function (e, t) {
          if ((oe.error.apply(oe.error, arguments), this.errorReporter))
            try {
              t instanceof Error || (t = new Error(e)), this.errorReporter(e, t);
            } catch (t) {
              oe.error(t);
            }
        });
      var se = '__mp_opt_in_out_';
      function ae(e, t) {
        ye(!0, e, t);
      }
      function ce(e, t) {
        ye(!1, e, t);
      }
      function pe(e, t) {
        return '1' === me(e, t);
      }
      function ue(e, r) {
        if (
          (function (e) {
            if (e && e.ignoreDnt) return !1;
            var r = (e && e.window) || t,
              i = r.navigator || {},
              o = !1;
            return (
              B.each([i.doNotTrack, i.msDoNotTrack, r.doNotTrack], function (e) {
                B.includes([!0, 1, '1', 'yes'], e) && (o = !0);
              }),
              o
            );
          })(r)
        )
          return (
            C.warn(
              'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'
            ),
            !0
          );
        var i = '0' === me(e, r);
        return (
          i &&
            C.warn(
              'You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.'
            ),
          i
        );
      }
      function _e(e) {
        return ve(e, function (e) {
          return this.get_config(e);
        });
      }
      function he(e) {
        return ve(e, function (e) {
          return this._get_config(e);
        });
      }
      function le(e) {
        return ve(e, function (e) {
          return this._get_config(e);
        });
      }
      function fe(e, t) {
        de((t = t || {})).remove(ge(e, t), !!t.crossSubdomainCookie, t.cookieDomain);
      }
      function de(e) {
        return 'localStorage' === (e = e || {}).persistenceType
          ? B.localStorage
          : B.cookie;
      }
      function ge(e, t) {
        return ((t = t || {}).persistencePrefix || se) + e;
      }
      function me(e, t) {
        return de(t).get(ge(e, t));
      }
      function ye(e, t, r) {
        B.isString(t) && t.length
          ? (de((r = r || {})).set(
              ge(t, r),
              e ? 1 : 0,
              B.isNumber(r.cookieExpiration) ? r.cookieExpiration : null,
              !!r.crossSubdomainCookie,
              !!r.secureCookie,
              !!r.crossSiteCookie,
              r.cookieDomain
            ),
            r.track &&
              e &&
              r.track(r.trackEventName || '$opt_in', r.trackProperties, {
                send_immediately: !0,
              }))
          : C.error(
              'gdpr.' + (e ? 'optIn' : 'optOut') + ' called with an invalid token'
            );
      }
      function ve(e, t) {
        return function () {
          var r = !1;
          try {
            var i = t.call(this, 'token'),
              o = t.call(this, 'ignore_dnt'),
              n = t.call(this, 'opt_out_tracking_persistence_type'),
              s = t.call(this, 'opt_out_tracking_cookie_prefix'),
              a = t.call(this, 'window');
            i &&
              (r = ue(i, {
                ignoreDnt: o,
                persistenceType: n,
                persistencePrefix: s,
                window: a,
              }));
          } catch (e) {
            C.error('Unexpected error when checking tracking opt-out status: ' + e);
          }
          if (!r) return e.apply(this, arguments);
          var c = arguments[arguments.length - 1];
          'function' == typeof c && c(0);
        };
      }
      var be = '$set',
        ke = '$set_once',
        we = '$unset',
        xe = '$add',
        Se = '$append',
        Ee = '$union',
        qe = '$remove',
        Oe = {
          set_action: function (e, t) {
            var r = {},
              i = {};
            return (
              B.isObject(e)
                ? B.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[be] = i),
              r
            );
          },
          unset_action: function (e) {
            var t = {},
              r = [];
            return (
              B.isArray(e) || (e = [e]),
              B.each(
                e,
                function (e) {
                  this._is_reserved_property(e) || r.push(e);
                },
                this
              ),
              (t[we] = r),
              t
            );
          },
          set_once_action: function (e, t) {
            var r = {},
              i = {};
            return (
              B.isObject(e)
                ? B.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[ke] = i),
              r
            );
          },
          union_action: function (e, t) {
            var r = {},
              i = {};
            return (
              B.isObject(e)
                ? B.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = B.isArray(e) ? e : [e]);
                    },
                    this
                  )
                : (i[e] = B.isArray(t) ? t : [t]),
              (r[Ee] = i),
              r
            );
          },
          append_action: function (e, t) {
            var r = {},
              i = {};
            return (
              B.isObject(e)
                ? B.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[Se] = i),
              r
            );
          },
          remove_action: function (e, t) {
            var r = {},
              i = {};
            return (
              B.isObject(e)
                ? B.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[qe] = i),
              r
            );
          },
          delete_action: function () {
            return { $delete: '' };
          },
        },
        Te = function () {};
      B.extend(Te.prototype, Oe),
        (Te.prototype._init = function (e, t, r) {
          (this._mixpanel = e), (this._group_key = t), (this._group_id = r);
        }),
        (Te.prototype.set = le(function (e, t, r) {
          var i = this.set_action(e, t);
          return B.isObject(e) && (r = t), this._send_request(i, r);
        })),
        (Te.prototype.set_once = le(function (e, t, r) {
          var i = this.set_once_action(e, t);
          return B.isObject(e) && (r = t), this._send_request(i, r);
        })),
        (Te.prototype.unset = le(function (e, t) {
          var r = this.unset_action(e);
          return this._send_request(r, t);
        })),
        (Te.prototype.union = le(function (e, t, r) {
          B.isObject(e) && (r = t);
          var i = this.union_action(e, t);
          return this._send_request(i, r);
        })),
        (Te.prototype.delete = le(function (e) {
          var t = this.delete_action();
          return this._send_request(t, e);
        })),
        (Te.prototype.remove = le(function (e, t, r) {
          var i = this.remove_action(e, t);
          return this._send_request(i, r);
        })),
        (Te.prototype._send_request = function (e, t) {
          (e.$group_key = this._group_key),
            (e.$group_id = this._group_id),
            (e.$token = this._get_config('token'));
          var r = B.encodeDates(e);
          return this._mixpanel._track_or_batch(
            {
              type: 'groups',
              data: r,
              endpoint: this._get_config('api_host') + '/groups/',
              batcher: this._mixpanel.request_batchers.groups,
            },
            t
          );
        }),
        (Te.prototype._is_reserved_property = function (e) {
          return '$group_key' === e || '$group_id' === e;
        }),
        (Te.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }),
        (Te.prototype.toString = function () {
          return (
            this._mixpanel.toString() +
            '.group.' +
            this._group_key +
            '.' +
            this._group_id
          );
        }),
        (Te.prototype.remove = Te.prototype.remove),
        (Te.prototype.set = Te.prototype.set),
        (Te.prototype.set_once = Te.prototype.set_once),
        (Te.prototype.union = Te.prototype.union),
        (Te.prototype.unset = Te.prototype.unset),
        (Te.prototype.toString = Te.prototype.toString);
      var Ie = function () {};
      B.extend(Ie.prototype, Oe),
        (Ie.prototype._init = function (e) {
          this._mixpanel = e;
        }),
        (Ie.prototype.set = he(function (e, t, r) {
          var i = this.set_action(e, t);
          return (
            B.isObject(e) && (r = t),
            this._get_config('save_referrer') &&
              this._mixpanel.persistence.update_referrer_info(document.referrer),
            (i[be] = B.extend(
              {},
              B.info.people_properties(),
              this._mixpanel.persistence.get_referrer_info(),
              i[be]
            )),
            this._send_request(i, r)
          );
        })),
        (Ie.prototype.set_once = he(function (e, t, r) {
          var i = this.set_once_action(e, t);
          return B.isObject(e) && (r = t), this._send_request(i, r);
        })),
        (Ie.prototype.unset = he(function (e, t) {
          var r = this.unset_action(e);
          return this._send_request(r, t);
        })),
        (Ie.prototype.increment = he(function (e, t, r) {
          var i = {},
            o = {};
          return (
            B.isObject(e)
              ? (B.each(
                  e,
                  function (e, t) {
                    if (!this._is_reserved_property(t)) {
                      if (isNaN(parseFloat(e)))
                        return void C.error(
                          'Invalid increment value passed to mixpanel.people.increment - must be a number'
                        );
                      o[t] = e;
                    }
                  },
                  this
                ),
                (r = t))
              : (B.isUndefined(t) && (t = 1), (o[e] = t)),
            (i[xe] = o),
            this._send_request(i, r)
          );
        })),
        (Ie.prototype.append = he(function (e, t, r) {
          B.isObject(e) && (r = t);
          var i = this.append_action(e, t);
          return this._send_request(i, r);
        })),
        (Ie.prototype.remove = he(function (e, t, r) {
          B.isObject(e) && (r = t);
          var i = this.remove_action(e, t);
          return this._send_request(i, r);
        })),
        (Ie.prototype.union = he(function (e, t, r) {
          B.isObject(e) && (r = t);
          var i = this.union_action(e, t);
          return this._send_request(i, r);
        })),
        (Ie.prototype.track_charge = he(function (e, t, r) {
          if (B.isNumber(e) || ((e = parseFloat(e)), !isNaN(e)))
            return this.append('$transactions', B.extend({ $amount: e }, t), r);
          C.error(
            'Invalid value passed to mixpanel.people.track_charge - must be a number'
          );
        })),
        (Ie.prototype.clear_charges = function (e) {
          return this.set('$transactions', [], e);
        }),
        (Ie.prototype.delete_user = function () {
          if (this._identify_called()) {
            var e = { $delete: this._mixpanel.get_distinct_id() };
            return this._send_request(e);
          }
          C.error(
            'mixpanel.people.delete_user() requires you to call identify() first'
          );
        }),
        (Ie.prototype.toString = function () {
          return this._mixpanel.toString() + '.people';
        }),
        (Ie.prototype._send_request = function (e, t) {
          (e.$token = this._get_config('token')),
            (e.$distinct_id = this._mixpanel.get_distinct_id());
          var r = this._mixpanel.get_property('$device_id'),
            i = this._mixpanel.get_property('$user_id'),
            o = this._mixpanel.get_property('$had_persisted_distinct_id');
          r && (e.$device_id = r),
            i && (e.$user_id = i),
            o && (e.$had_persisted_distinct_id = o);
          var n = B.encodeDates(e);
          return this._identify_called()
            ? this._mixpanel._track_or_batch(
                {
                  type: 'people',
                  data: n,
                  endpoint: this._get_config('api_host') + '/engage/',
                  batcher: this._mixpanel.request_batchers.people,
                },
                t
              )
            : (this._enqueue(e),
              B.isUndefined(t) ||
                (this._get_config('verbose') ? t({ status: -1, error: null }) : t(-1)),
              B.truncate(n, 255));
        }),
        (Ie.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }),
        (Ie.prototype._identify_called = function () {
          return !0 === this._mixpanel._flags.identify_called;
        }),
        (Ie.prototype._enqueue = function (e) {
          be in e
            ? this._mixpanel.persistence._add_to_people_queue(be, e)
            : ke in e
            ? this._mixpanel.persistence._add_to_people_queue(ke, e)
            : we in e
            ? this._mixpanel.persistence._add_to_people_queue(we, e)
            : xe in e
            ? this._mixpanel.persistence._add_to_people_queue(xe, e)
            : Se in e
            ? this._mixpanel.persistence._add_to_people_queue(Se, e)
            : qe in e
            ? this._mixpanel.persistence._add_to_people_queue(qe, e)
            : Ee in e
            ? this._mixpanel.persistence._add_to_people_queue(Ee, e)
            : C.error('Invalid call to _enqueue():', e);
        }),
        (Ie.prototype._flush_one_queue = function (e, t, r, i) {
          var o = this,
            n = B.extend({}, this._mixpanel.persistence._get_queue(e)),
            s = n;
          B.isUndefined(n) ||
            !B.isObject(n) ||
            B.isEmptyObject(n) ||
            (o._mixpanel.persistence._pop_from_people_queue(e, n),
            i && (s = i(n)),
            t.call(o, s, function (t, i) {
              0 === t && o._mixpanel.persistence._add_to_people_queue(e, n),
                B.isUndefined(r) || r(t, i);
            }));
        }),
        (Ie.prototype._flush = function (e, t, r, i, o, n, s) {
          var a = this,
            c = this._mixpanel.persistence._get_queue(Se),
            p = this._mixpanel.persistence._get_queue(qe);
          if (
            (this._flush_one_queue(be, this.set, e),
            this._flush_one_queue(ke, this.set_once, i),
            this._flush_one_queue(we, this.unset, n, function (e) {
              return B.keys(e);
            }),
            this._flush_one_queue(xe, this.increment, t),
            this._flush_one_queue(Ee, this.union, o),
            !B.isUndefined(c) && B.isArray(c) && c.length)
          ) {
            for (
              var u,
                _ = function (e, t) {
                  0 === e && a._mixpanel.persistence._add_to_people_queue(Se, u),
                    B.isUndefined(r) || r(e, t);
                },
                h = c.length - 1;
              h >= 0;
              h--
            )
              (u = c.pop()), B.isEmptyObject(u) || a.append(u, _);
            a._mixpanel.persistence.save();
          }
          if (!B.isUndefined(p) && B.isArray(p) && p.length) {
            for (
              var l,
                f = function (e, t) {
                  0 === e && a._mixpanel.persistence._add_to_people_queue(qe, l),
                    B.isUndefined(s) || s(e, t);
                },
                d = p.length - 1;
              d >= 0;
              d--
            )
              (l = p.pop()), B.isEmptyObject(l) || a.remove(l, f);
            a._mixpanel.persistence.save();
          }
        }),
        (Ie.prototype._is_reserved_property = function (e) {
          return (
            '$distinct_id' === e ||
            '$token' === e ||
            '$device_id' === e ||
            '$user_id' === e ||
            '$had_persisted_distinct_id' === e
          );
        }),
        (Ie.prototype.set = Ie.prototype.set),
        (Ie.prototype.set_once = Ie.prototype.set_once),
        (Ie.prototype.unset = Ie.prototype.unset),
        (Ie.prototype.increment = Ie.prototype.increment),
        (Ie.prototype.append = Ie.prototype.append),
        (Ie.prototype.remove = Ie.prototype.remove),
        (Ie.prototype.union = Ie.prototype.union),
        (Ie.prototype.track_charge = Ie.prototype.track_charge),
        (Ie.prototype.clear_charges = Ie.prototype.clear_charges),
        (Ie.prototype.delete_user = Ie.prototype.delete_user),
        (Ie.prototype.toString = Ie.prototype.toString);
      var Ae,
        De,
        Pe = '__mps',
        Be = '__mpso',
        Ce = '__mpus',
        Ue = '__mpa',
        $e = '__mpap',
        je = '__mpr',
        Me = '__mpu',
        Ne = '$people_distinct_id',
        Fe = '__alias',
        Re = '__timers',
        Le = [Pe, Be, Ce, Ue, $e, je, Me, Ne, Fe, Re],
        ze = function (e) {
          (this.props = {}),
            (this.campaign_params_saved = !1),
            e.persistence_name
              ? (this.name = 'mp_' + e.persistence_name)
              : (this.name = 'mp_' + e.token + '_mixpanel');
          var t = e.persistence;
          'cookie' !== t &&
            'localStorage' !== t &&
            (C.critical('Unknown persistence type ' + t + '; falling back to cookie'),
            (t = e.persistence = 'cookie')),
            'localStorage' === t && B.localStorage.is_supported()
              ? (this.storage = B.localStorage)
              : (this.storage = B.cookie),
            this.load(),
            this.update_config(e),
            this.upgrade(e),
            this.save();
        };
      (ze.prototype.properties = function () {
        var e = {};
        return (
          B.each(this.props, function (t, r) {
            B.include(Le, r) || (e[r] = t);
          }),
          e
        );
      }),
        (ze.prototype.load = function () {
          if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = B.extend({}, e));
          }
        }),
        (ze.prototype.upgrade = function (e) {
          var t,
            r,
            i = e.upgrade;
          i &&
            ((t = 'mp_super_properties'),
            'string' == typeof i && (t = i),
            (r = this.storage.parse(t)),
            this.storage.remove(t),
            this.storage.remove(t, !0),
            r && (this.props = B.extend(this.props, r.all, r.events))),
            e.cookie_name ||
              'mixpanel' === e.name ||
              ((t = 'mp_' + e.token + '_' + e.name),
              (r = this.storage.parse(t)) &&
                (this.storage.remove(t),
                this.storage.remove(t, !0),
                this.register_once(r))),
            this.storage === B.localStorage &&
              ((r = B.cookie.parse(this.name)),
              B.cookie.remove(this.name),
              B.cookie.remove(this.name, !0),
              r && this.register_once(r));
        }),
        (ze.prototype.save = function () {
          this.disabled ||
            this.storage.set(
              this.name,
              B.JSONEncode(this.props),
              this.expire_days,
              this.cross_subdomain,
              this.secure,
              this.cross_site,
              this.cookie_domain
            );
        }),
        (ze.prototype.remove = function () {
          this.storage.remove(this.name, !1, this.cookie_domain),
            this.storage.remove(this.name, !0, this.cookie_domain);
        }),
        (ze.prototype.clear = function () {
          this.remove(), (this.props = {});
        }),
        (ze.prototype.register_once = function (e, t, r) {
          return (
            !!B.isObject(e) &&
            (void 0 === t && (t = 'None'),
            (this.expire_days = void 0 === r ? this.default_expiry : r),
            B.each(
              e,
              function (e, r) {
                (this.props.hasOwnProperty(r) && this.props[r] !== t) ||
                  (this.props[r] = e);
              },
              this
            ),
            this.save(),
            !0)
          );
        }),
        (ze.prototype.register = function (e, t) {
          return (
            !!B.isObject(e) &&
            ((this.expire_days = void 0 === t ? this.default_expiry : t),
            B.extend(this.props, e),
            this.save(),
            !0)
          );
        }),
        (ze.prototype.unregister = function (e) {
          e in this.props && (delete this.props[e], this.save());
        }),
        (ze.prototype.update_search_keyword = function (e) {
          this.register(B.info.searchInfo(e));
        }),
        (ze.prototype.update_referrer_info = function (e) {
          this.register_once(
            {
              $initial_referrer: e || '$direct',
              $initial_referring_domain: B.info.referringDomain(e) || '$direct',
            },
            ''
          );
        }),
        (ze.prototype.get_referrer_info = function () {
          return B.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain,
          });
        }),
        (ze.prototype.safe_merge = function (e) {
          return (
            B.each(this.props, function (t, r) {
              r in e || (e[r] = t);
            }),
            e
          );
        }),
        (ze.prototype.update_config = function (e) {
          (this.default_expiry = this.expire_days = e.cookie_expiration),
            this.set_disabled(e.disable_persistence),
            this.set_cookie_domain(e.cookie_domain),
            this.set_cross_site(e.cross_site_cookie),
            this.set_cross_subdomain(e.cross_subdomain_cookie),
            this.set_secure(e.secure_cookie);
        }),
        (ze.prototype.set_disabled = function (e) {
          (this.disabled = e), this.disabled ? this.remove() : this.save();
        }),
        (ze.prototype.set_cookie_domain = function (e) {
          e !== this.cookie_domain &&
            (this.remove(), (this.cookie_domain = e), this.save());
        }),
        (ze.prototype.set_cross_site = function (e) {
          e !== this.cross_site && ((this.cross_site = e), this.remove(), this.save());
        }),
        (ze.prototype.set_cross_subdomain = function (e) {
          e !== this.cross_subdomain &&
            ((this.cross_subdomain = e), this.remove(), this.save());
        }),
        (ze.prototype.get_cross_subdomain = function () {
          return this.cross_subdomain;
        }),
        (ze.prototype.set_secure = function (e) {
          e !== this.secure && ((this.secure = !!e), this.remove(), this.save());
        }),
        (ze.prototype._add_to_people_queue = function (e, t) {
          var r = this._get_queue_key(e),
            i = t[e],
            o = this._get_or_create_queue(be),
            n = this._get_or_create_queue(ke),
            s = this._get_or_create_queue(we),
            a = this._get_or_create_queue(xe),
            c = this._get_or_create_queue(Ee),
            p = this._get_or_create_queue(qe, []),
            u = this._get_or_create_queue(Se, []);
          r === Pe
            ? (B.extend(o, i),
              this._pop_from_people_queue(xe, i),
              this._pop_from_people_queue(Ee, i),
              this._pop_from_people_queue(we, i))
            : r === Be
            ? (B.each(i, function (e, t) {
                t in n || (n[t] = e);
              }),
              this._pop_from_people_queue(we, i))
            : r === Ce
            ? B.each(i, function (e) {
                B.each([o, n, a, c], function (t) {
                  e in t && delete t[e];
                }),
                  B.each(u, function (t) {
                    e in t && delete t[e];
                  }),
                  (s[e] = !0);
              })
            : r === Ue
            ? (B.each(
                i,
                function (e, t) {
                  t in o ? (o[t] += e) : (t in a || (a[t] = 0), (a[t] += e));
                },
                this
              ),
              this._pop_from_people_queue(we, i))
            : r === Me
            ? (B.each(i, function (e, t) {
                B.isArray(e) && (t in c || (c[t] = []), (c[t] = c[t].concat(e)));
              }),
              this._pop_from_people_queue(we, i))
            : r === je
            ? (p.push(i), this._pop_from_people_queue(Se, i))
            : r === $e && (u.push(i), this._pop_from_people_queue(we, i)),
            C.log('MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):'),
            C.log(t),
            this.save();
        }),
        (ze.prototype._pop_from_people_queue = function (e, t) {
          var r = this._get_queue(e);
          B.isUndefined(r) ||
            (B.each(
              t,
              function (t, i) {
                e === Se || e === qe
                  ? B.each(r, function (e) {
                      e[i] === t && delete e[i];
                    })
                  : delete r[i];
              },
              this
            ),
            this.save());
        }),
        (ze.prototype._get_queue_key = function (e) {
          return e === be
            ? Pe
            : e === ke
            ? Be
            : e === we
            ? Ce
            : e === xe
            ? Ue
            : e === Se
            ? $e
            : e === qe
            ? je
            : e === Ee
            ? Me
            : void C.error('Invalid queue:', e);
        }),
        (ze.prototype._get_queue = function (e) {
          return this.props[this._get_queue_key(e)];
        }),
        (ze.prototype._get_or_create_queue = function (e, t) {
          var r = this._get_queue_key(e);
          return (t = B.isUndefined(t) ? {} : t), this.props[r] || (this.props[r] = t);
        }),
        (ze.prototype.set_event_timer = function (e, t) {
          var r = this.props[Re] || {};
          (r[e] = t), (this.props[Re] = r), this.save();
        }),
        (ze.prototype.remove_event_timer = function (e) {
          var t = (this.props[Re] || {})[e];
          return B.isUndefined(t) || (delete this.props[Re][e], this.save()), t;
        });
      var He = function (e) {
          return e;
        },
        Je = function () {},
        Qe = 'mixpanel',
        Ge = 'base64',
        Ke = '$device:',
        We = t.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
        Ve = !We && -1 === q.indexOf('MSIE') && -1 === q.indexOf('Mozilla'),
        Xe = null;
      w.sendBeacon &&
        (Xe = function () {
          return w.sendBeacon.apply(w, arguments);
        });
      var Ye = {
          api_host: 'https://api-js.mixpanel.com',
          api_method: 'POST',
          api_transport: 'XHR',
          api_payload_format: Ge,
          app_host: 'https://mixpanel.com',
          cdn: 'https://cdn.mxpnl.com',
          cross_site_cookie: !1,
          cross_subdomain_cookie: !0,
          error_reporter: Je,
          persistence: 'cookie',
          persistence_name: '',
          cookie_domain: '',
          cookie_name: '',
          loaded: Je,
          track_marketing: !0,
          track_pageview: !1,
          skip_first_touch_marketing: !1,
          store_google: !0,
          save_referrer: !0,
          test: !1,
          verbose: !1,
          img: !1,
          debug: !1,
          track_links_timeout: 300,
          cookie_expiration: 365,
          upgrade: !1,
          disable_persistence: !1,
          disable_cookie: !1,
          secure_cookie: !1,
          ip: !0,
          opt_out_tracking_by_default: !1,
          opt_out_persistence_by_default: !1,
          opt_out_tracking_persistence_type: 'localStorage',
          opt_out_tracking_cookie_prefix: null,
          property_blacklist: [],
          xhr_headers: {},
          ignore_dnt: !1,
          batch_requests: !0,
          batch_size: 50,
          batch_flush_interval_ms: 5e3,
          batch_request_timeout_ms: 9e4,
          batch_autostart: !0,
          hooks: {},
        },
        Ze = !1,
        et = function () {},
        tt = function (e, t, i) {
          var o,
            n = i === Qe ? De : De[i];
          if (n && 0 === Ae) o = n;
          else {
            if (n && !B.isArray(n))
              return void C.error('You have already initialized ' + i);
            o = new et();
          }
          if (
            ((o._cached_groups = {}),
            o._init(e, t, i),
            (o.people = new Ie()),
            o.people._init(o),
            !o.get_config('skip_first_touch_marketing'))
          ) {
            var s = B.info.campaignParams(null),
              a = {},
              c = !1;
            B.each(s, function (e, t) {
              (a['initial_' + t] = e), e && (c = !0);
            }),
              c && o.people.set_once(a);
          }
          return (
            (r.DEBUG = r.DEBUG || o.get_config('debug')),
            !B.isUndefined(n) &&
              B.isArray(n) &&
              (o._execute_array.call(o.people, n.people), o._execute_array(n)),
            o
          );
        };
      (et.prototype.init = function (e, t, r) {
        if (B.isUndefined(r))
          this.report_error(
            'You must name your new library: init(token, config, name)'
          );
        else {
          if (r !== Qe) {
            var i = tt(e, t, r);
            return (De[r] = i), i._loaded(), i;
          }
          this.report_error(
            'You must initialize the main mixpanel object right after you include the Mixpanel js snippet'
          );
        }
      }),
        (et.prototype._init = function (e, r, i) {
          (r = r || {}), (this.__loaded = !0), (this.config = {});
          var o = {};
          if (
            ('api_payload_format' in r ||
              ((r.api_host || Ye.api_host).match(/\.mixpanel\.com/) &&
                (o.api_payload_format = 'json')),
            this.set_config(
              B.extend({}, Ye, o, r, {
                name: i,
                token: e,
                callback_fn: (i === Qe ? i : Qe + '.' + i) + '._jsc',
              })
            ),
            (this._jsc = Je),
            (this.__dom_loaded_queue = []),
            (this.__request_queue = []),
            (this.__disabled_events = []),
            (this._flags = { disable_all_events: !1, identify_called: !1 }),
            (this.request_batchers = {}),
            (this._batch_requests = this.get_config('batch_requests')),
            this._batch_requests)
          )
            if (B.localStorage.is_supported(!0) && We) {
              if ((this.init_batchers(), Xe && t.addEventListener)) {
                var n = B.bind(function () {
                  this.request_batchers.events.stopped ||
                    this.request_batchers.events.flush({ unloading: !0 });
                }, this);
                t.addEventListener('pagehide', function (e) {
                  e.persisted && n();
                }),
                  t.addEventListener('visibilitychange', function () {
                    'hidden' === x.visibilityState && n();
                  });
              }
            } else
              (this._batch_requests = !1),
                C.log(
                  'Turning off Mixpanel request-queueing; needs XHR and localStorage support'
                );
          (this.persistence = this.cookie = new ze(this.config)),
            (this.unpersisted_superprops = {}),
            this._gdpr_init();
          var s = B.UUID();
          this.get_distinct_id() ||
            this.register_once({ distinct_id: Ke + s, $device_id: s }, ''),
            this.get_config('track_pageview') && this.track_pageview();
        }),
        (et.prototype._loaded = function () {
          this.get_config('loaded')(this), this._set_default_superprops();
        }),
        (et.prototype._set_default_superprops = function () {
          this.persistence.update_search_keyword(x.referrer),
            this.get_config('store_google') &&
              this.register(B.info.campaignParams(), { persistent: !1 }),
            this.get_config('save_referrer') &&
              this.persistence.update_referrer_info(x.referrer);
        }),
        (et.prototype._dom_loaded = function () {
          B.each(
            this.__dom_loaded_queue,
            function (e) {
              this._track_dom.apply(this, e);
            },
            this
          ),
            this.has_opted_out_tracking() ||
              B.each(
                this.__request_queue,
                function (e) {
                  this._send_request.apply(this, e);
                },
                this
              ),
            delete this.__dom_loaded_queue,
            delete this.__request_queue;
        }),
        (et.prototype._track_dom = function (e, t) {
          if (this.get_config('img'))
            return (
              this.report_error(
                "You can't use DOM tracking functions with img = true."
              ),
              !1
            );
          if (!Ze) return this.__dom_loaded_queue.push([e, t]), !1;
          var r = new e().init(this);
          return r.track.apply(r, t);
        }),
        (et.prototype._prepare_callback = function (e, t) {
          if (B.isUndefined(e)) return null;
          if (We)
            return function (r) {
              e(r, t);
            };
          var r = this._jsc,
            i = '' + Math.floor(1e8 * Math.random()),
            o = this.get_config('callback_fn') + '[' + i + ']';
          return (
            (r[i] = function (o) {
              delete r[i], e(o, t);
            }),
            o
          );
        }),
        (et.prototype._send_request = function (e, t, r, i) {
          var o = !0;
          if (Ve) return this.__request_queue.push(arguments), o;
          var n = {
              method: this.get_config('api_method'),
              transport: this.get_config('api_transport'),
              verbose: this.get_config('verbose'),
            },
            s = null;
          i || (!B.isFunction(r) && 'string' != typeof r) || ((i = r), (r = null)),
            (r = B.extend(n, r || {})),
            We || (r.method = 'GET');
          var a = 'POST' === r.method,
            c = Xe && a && 'sendbeacon' === r.transport.toLowerCase(),
            p = r.verbose;
          t.verbose && (p = !0),
            this.get_config('test') && (t.test = 1),
            p && (t.verbose = 1),
            this.get_config('img') && (t.img = 1),
            We ||
              (i
                ? (t.callback = i)
                : (p || this.get_config('test')) && (t.callback = '(function(){})')),
            (t.ip = this.get_config('ip') ? 1 : 0),
            (t._ = new Date().getTime().toString()),
            a && ((s = 'data=' + encodeURIComponent(t.data)), delete t.data),
            (e += '?' + B.HTTPBuildQuery(t));
          var u = this;
          if ('img' in t) {
            var _ = x.createElement('img');
            (_.src = e), x.body.appendChild(_);
          } else if (c) {
            try {
              o = Xe(e, s);
            } catch (e) {
              u.report_error(e), (o = !1);
            }
            try {
              i && i(o ? 1 : 0);
            } catch (e) {
              u.report_error(e);
            }
          } else if (We)
            try {
              var h = new XMLHttpRequest();
              h.open(r.method, e, !0);
              var l = this.get_config('xhr_headers');
              if (
                (a && (l['Content-Type'] = 'application/x-www-form-urlencoded'),
                B.each(l, function (e, t) {
                  h.setRequestHeader(t, e);
                }),
                r.timeout_ms && void 0 !== h.timeout)
              ) {
                h.timeout = r.timeout_ms;
                var f = new Date().getTime();
              }
              (h.withCredentials = !0),
                (h.onreadystatechange = function () {
                  var e;
                  if (4 === h.readyState)
                    if (200 === h.status) {
                      if (i)
                        if (p) {
                          var t;
                          try {
                            t = B.JSONDecode(h.responseText);
                          } catch (e) {
                            if ((u.report_error(e), !r.ignore_json_errors)) return;
                            t = h.responseText;
                          }
                          i(t);
                        } else i(Number(h.responseText));
                    } else
                      (e =
                        h.timeout && !h.status && new Date().getTime() - f >= h.timeout
                          ? 'timeout'
                          : 'Bad HTTP status: ' + h.status + ' ' + h.statusText),
                        u.report_error(e),
                        i && i(p ? { status: 0, error: e, xhr_req: h } : 0);
                }),
                h.send(s);
            } catch (e) {
              u.report_error(e), (o = !1);
            }
          else {
            var d = x.createElement('script');
            (d.type = 'text/javascript'), (d.async = !0), (d.defer = !0), (d.src = e);
            var g = x.getElementsByTagName('script')[0];
            g.parentNode.insertBefore(d, g);
          }
          return o;
        }),
        (et.prototype._execute_array = function (e) {
          var t,
            r = [],
            i = [],
            o = [];
          B.each(
            e,
            function (e) {
              e &&
                ((t = e[0]),
                B.isArray(t)
                  ? o.push(e)
                  : 'function' == typeof e
                  ? e.call(this)
                  : B.isArray(e) && 'alias' === t
                  ? r.push(e)
                  : B.isArray(e) &&
                    -1 !== t.indexOf('track') &&
                    'function' == typeof this[t]
                  ? o.push(e)
                  : i.push(e));
            },
            this
          );
          var n = function (e, t) {
            B.each(
              e,
              function (e) {
                if (B.isArray(e[0])) {
                  var r = t;
                  B.each(e, function (e) {
                    r = r[e[0]].apply(r, e.slice(1));
                  });
                } else this[e[0]].apply(this, e.slice(1));
              },
              t
            );
          };
          n(r, this), n(i, this), n(o, this);
        }),
        (et.prototype.are_batchers_initialized = function () {
          return !!this.request_batchers.events;
        }),
        (et.prototype.init_batchers = function () {
          var e = this.get_config('token');
          if (!this.are_batchers_initialized()) {
            var t = B.bind(function (t) {
              return new ne('__mpq_' + e + t.queue_suffix, {
                libConfig: this.config,
                sendRequestFunc: B.bind(function (e, r, i) {
                  this._send_request(
                    this.get_config('api_host') + t.endpoint,
                    this._encode_data_for_request(e),
                    r,
                    this._prepare_callback(i, e)
                  );
                }, this),
                beforeSendHook: B.bind(function (e) {
                  return this._run_hook('before_send_' + t.type, e);
                }, this),
                errorReporter: this.get_config('error_reporter'),
                stopAllBatchingFunc: B.bind(this.stop_batch_senders, this),
              });
            }, this);
            this.request_batchers = {
              events: t({ type: 'events', endpoint: '/track/', queue_suffix: '_ev' }),
              people: t({ type: 'people', endpoint: '/engage/', queue_suffix: '_pp' }),
              groups: t({ type: 'groups', endpoint: '/groups/', queue_suffix: '_gr' }),
            };
          }
          this.get_config('batch_autostart') && this.start_batch_senders();
        }),
        (et.prototype.start_batch_senders = function () {
          this.are_batchers_initialized() &&
            ((this._batch_requests = !0),
            B.each(this.request_batchers, function (e) {
              e.start();
            }));
        }),
        (et.prototype.stop_batch_senders = function () {
          (this._batch_requests = !1),
            B.each(this.request_batchers, function (e) {
              e.stop(), e.clear();
            });
        }),
        (et.prototype.push = function (e) {
          this._execute_array([e]);
        }),
        (et.prototype.disable = function (e) {
          void 0 === e
            ? (this._flags.disable_all_events = !0)
            : (this.__disabled_events = this.__disabled_events.concat(e));
        }),
        (et.prototype._encode_data_for_request = function (e) {
          var t = B.JSONEncode(e);
          return (
            this.get_config('api_payload_format') === Ge && (t = B.base64Encode(t)),
            { data: t }
          );
        }),
        (et.prototype._track_or_batch = function (e, t) {
          var r = B.truncate(e.data, 255),
            i = e.endpoint,
            o = e.batcher,
            n = e.should_send_immediately,
            s = e.send_request_options || {};
          t = t || Je;
          var a = !0,
            c = B.bind(function () {
              return (
                s.skip_hooks || (r = this._run_hook('before_send_' + e.type, r)),
                r
                  ? (C.log('MIXPANEL REQUEST:'),
                    C.log(r),
                    this._send_request(
                      i,
                      this._encode_data_for_request(r),
                      s,
                      this._prepare_callback(t, r)
                    ))
                  : null
              );
            }, this);
          return (
            this._batch_requests && !n
              ? o.enqueue(r, function (e) {
                  e ? t(1, r) : c();
                })
              : (a = c()),
            a && r
          );
        }),
        (et.prototype.track = _e(function (e, t, r, i) {
          i || 'function' != typeof r || ((i = r), (r = null));
          var o = (r = r || {}).transport;
          o && (r.transport = o);
          var n = r.send_immediately;
          if (('function' != typeof i && (i = Je), B.isUndefined(e)))
            this.report_error('No event name provided to mixpanel.track');
          else {
            if (!this._event_is_disabled(e)) {
              (t = t || {}).token = this.get_config('token');
              var s = this.persistence.remove_event_timer(e);
              if (!B.isUndefined(s)) {
                var a = new Date().getTime() - s;
                t.$duration = parseFloat((a / 1e3).toFixed(3));
              }
              this._set_default_superprops();
              var c = this.get_config('track_marketing')
                ? B.info.marketingParams()
                : {};
              t = B.extend(
                {},
                B.info.properties(),
                c,
                this.persistence.properties(),
                this.unpersisted_superprops,
                t
              );
              var p = this.get_config('property_blacklist');
              B.isArray(p)
                ? B.each(p, function (e) {
                    delete t[e];
                  })
                : this.report_error(
                    'Invalid value for property_blacklist config: ' + p
                  );
              var u = { event: e, properties: t };
              return this._track_or_batch(
                {
                  type: 'events',
                  data: u,
                  endpoint: this.get_config('api_host') + '/track/',
                  batcher: this.request_batchers.events,
                  should_send_immediately: n,
                  send_request_options: r,
                },
                i
              );
            }
            i(0);
          }
        })),
        (et.prototype.set_group = _e(function (e, t, r) {
          B.isArray(t) || (t = [t]);
          var i = {};
          return (i[e] = t), this.register(i), this.people.set(e, t, r);
        })),
        (et.prototype.add_group = _e(function (e, t, r) {
          var i = this.get_property(e);
          if (void 0 === i) {
            var o = {};
            (o[e] = [t]), this.register(o);
          } else -1 === i.indexOf(t) && (i.push(t), this.register(o));
          return this.people.union(e, t, r);
        })),
        (et.prototype.remove_group = _e(function (e, t, r) {
          var i = this.get_property(e);
          if (void 0 !== i) {
            var o = i.indexOf(t);
            o > -1 && (i.splice(o, 1), this.register({ group_key: i })),
              0 === i.length && this.unregister(e);
          }
          return this.people.remove(e, t, r);
        })),
        (et.prototype.track_with_groups = _e(function (e, t, r, i) {
          var o = B.extend({}, t || {});
          return (
            B.each(r, function (e, t) {
              null != e && (o[t] = e);
            }),
            this.track(e, o, i)
          );
        })),
        (et.prototype._create_map_key = function (e, t) {
          return e + '_' + JSON.stringify(t);
        }),
        (et.prototype._remove_group_from_cache = function (e, t) {
          delete this._cached_groups[this._create_map_key(e, t)];
        }),
        (et.prototype.get_group = function (e, t) {
          var r = this._create_map_key(e, t),
            i = this._cached_groups[r];
          return (
            (void 0 !== i && i._group_key === e && i._group_id === t) ||
              ((i = new Te())._init(this, e, t), (this._cached_groups[r] = i)),
            i
          );
        }),
        (et.prototype.track_pageview = _e(function (e, t) {
          'object' != typeof e && (e = {});
          var r = (t = t || {}).event_name || '$mp_web_page_view',
            i = B.extend(
              B.info.mpPageViewProperties(),
              B.info.campaignParams(),
              B.info.clickParams()
            ),
            o = B.extend({}, i, e);
          return this.track(r, o);
        })),
        (et.prototype.track_links = function () {
          return this._track_dom.call(this, V, arguments);
        }),
        (et.prototype.track_forms = function () {
          return this._track_dom.call(this, X, arguments);
        }),
        (et.prototype.time_event = function (e) {
          B.isUndefined(e)
            ? this.report_error('No event name provided to mixpanel.time_event')
            : this._event_is_disabled(e) ||
              this.persistence.set_event_timer(e, new Date().getTime());
        });
      var rt = { persistent: !0 },
        it = function (e) {
          var t;
          return (
            (t = B.isObject(e) ? e : B.isUndefined(e) ? {} : { days: e }),
            B.extend({}, rt, t)
          );
        };
      (et.prototype.register = function (e, t) {
        var r = it(t);
        r.persistent
          ? this.persistence.register(e, r.days)
          : B.extend(this.unpersisted_superprops, e);
      }),
        (et.prototype.register_once = function (e, t, r) {
          var i = it(r);
          i.persistent
            ? this.persistence.register_once(e, t, i.days)
            : (void 0 === t && (t = 'None'),
              B.each(
                e,
                function (e, r) {
                  (this.unpersisted_superprops.hasOwnProperty(r) &&
                    this.unpersisted_superprops[r] !== t) ||
                    (this.unpersisted_superprops[r] = e);
                },
                this
              ));
        }),
        (et.prototype.unregister = function (e, t) {
          (t = it(t)).persistent
            ? this.persistence.unregister(e)
            : delete this.unpersisted_superprops[e];
        }),
        (et.prototype._register_single = function (e, t) {
          var r = {};
          (r[e] = t), this.register(r);
        }),
        (et.prototype.identify = function (e, t, r, i, o, n, s, a) {
          var c = this.get_distinct_id();
          if (e && c !== e) {
            if ('string' == typeof e && 0 === e.indexOf(Ke))
              return this.report_error('distinct_id cannot have $device: prefix'), -1;
            this.register({ $user_id: e });
          }
          if (!this.get_property('$device_id')) {
            var p = c;
            this.register_once({ $had_persisted_distinct_id: !0, $device_id: p }, '');
          }
          e !== c &&
            e !== this.get_property(Fe) &&
            (this.unregister(Fe), this.register({ distinct_id: e })),
            (this._flags.identify_called = !0),
            this.people._flush(t, r, i, o, n, s, a),
            e !== c &&
              this.track(
                '$identify',
                { distinct_id: e, $anon_distinct_id: c },
                { skip_hooks: !0 }
              );
        }),
        (et.prototype.reset = function () {
          this.persistence.clear(), (this._flags.identify_called = !1);
          var e = B.UUID();
          this.register_once({ distinct_id: Ke + e, $device_id: e }, '');
        }),
        (et.prototype.get_distinct_id = function () {
          return this.get_property('distinct_id');
        }),
        (et.prototype.alias = function (e, t) {
          if (e === this.get_property(Ne))
            return (
              this.report_error(
                'Attempting to create alias for existing People user - aborting.'
              ),
              -2
            );
          var r = this;
          return (
            B.isUndefined(t) && (t = this.get_distinct_id()),
            e !== t
              ? (this._register_single(Fe, e),
                this.track(
                  '$create_alias',
                  { alias: e, distinct_id: t },
                  { skip_hooks: !0 },
                  function () {
                    r.identify(e);
                  }
                ))
              : (this.report_error(
                  'alias matches current distinct_id - skipping api call.'
                ),
                this.identify(e),
                -1)
          );
        }),
        (et.prototype.name_tag = function (e) {
          this._register_single('mp_name_tag', e);
        }),
        (et.prototype.set_config = function (e) {
          B.isObject(e) &&
            (B.extend(this.config, e),
            e.batch_size &&
              B.each(this.request_batchers, function (e) {
                e.resetBatchSize();
              }),
            this.get_config('persistence_name') ||
              (this.config.persistence_name = this.config.cookie_name),
            this.get_config('disable_persistence') ||
              (this.config.disable_persistence = this.config.disable_cookie),
            this.persistence && this.persistence.update_config(this.config),
            (r.DEBUG = r.DEBUG || this.get_config('debug')));
        }),
        (et.prototype.get_config = function (e) {
          return this.config[e];
        }),
        (et.prototype._run_hook = function (e) {
          var t = (this.config.hooks[e] || He).apply(this, y.call(arguments, 1));
          return (
            void 0 === t &&
              (this.report_error(e + ' hook did not return a value'), (t = null)),
            t
          );
        }),
        (et.prototype.get_property = function (e) {
          return this.persistence.props[e];
        }),
        (et.prototype.toString = function () {
          var e = this.get_config('name');
          return e !== Qe && (e = Qe + '.' + e), e;
        }),
        (et.prototype._event_is_disabled = function (e) {
          return (
            B.isBlockedUA(q) ||
            this._flags.disable_all_events ||
            B.include(this.__disabled_events, e)
          );
        }),
        (et.prototype._gdpr_init = function () {
          'localStorage' === this.get_config('opt_out_tracking_persistence_type') &&
            B.localStorage.is_supported() &&
            (!this.has_opted_in_tracking() &&
              this.has_opted_in_tracking({ persistence_type: 'cookie' }) &&
              this.opt_in_tracking({ enable_persistence: !1 }),
            !this.has_opted_out_tracking() &&
              this.has_opted_out_tracking({ persistence_type: 'cookie' }) &&
              this.opt_out_tracking({ clear_persistence: !1 }),
            this.clear_opt_in_out_tracking({
              persistence_type: 'cookie',
              enable_persistence: !1,
            })),
            this.has_opted_out_tracking()
              ? this._gdpr_update_persistence({ clear_persistence: !0 })
              : this.has_opted_in_tracking() ||
                (!this.get_config('opt_out_tracking_by_default') &&
                  !B.cookie.get('mp_optout')) ||
                (B.cookie.remove('mp_optout'),
                this.opt_out_tracking({
                  clear_persistence: this.get_config('opt_out_persistence_by_default'),
                }));
        }),
        (et.prototype._gdpr_update_persistence = function (e) {
          var t;
          if (e && e.clear_persistence) t = !0;
          else {
            if (!e || !e.enable_persistence) return;
            t = !1;
          }
          this.get_config('disable_persistence') ||
            this.persistence.disabled === t ||
            this.persistence.set_disabled(t),
            t &&
              B.each(this.request_batchers, function (e) {
                e.clear();
              });
        }),
        (et.prototype._gdpr_call_func = function (e, t) {
          return (
            (t = B.extend(
              {
                track: B.bind(this.track, this),
                persistence_type: this.get_config('opt_out_tracking_persistence_type'),
                cookie_prefix: this.get_config('opt_out_tracking_cookie_prefix'),
                cookie_expiration: this.get_config('cookie_expiration'),
                cross_site_cookie: this.get_config('cross_site_cookie'),
                cross_subdomain_cookie: this.get_config('cross_subdomain_cookie'),
                cookie_domain: this.get_config('cookie_domain'),
                secure_cookie: this.get_config('secure_cookie'),
                ignore_dnt: this.get_config('ignore_dnt'),
              },
              t
            )),
            B.localStorage.is_supported() || (t.persistence_type = 'cookie'),
            e(this.get_config('token'), {
              track: t.track,
              trackEventName: t.track_event_name,
              trackProperties: t.track_properties,
              persistenceType: t.persistence_type,
              persistencePrefix: t.cookie_prefix,
              cookieDomain: t.cookie_domain,
              cookieExpiration: t.cookie_expiration,
              crossSiteCookie: t.cross_site_cookie,
              crossSubdomainCookie: t.cross_subdomain_cookie,
              secureCookie: t.secure_cookie,
              ignoreDnt: t.ignore_dnt,
            })
          );
        }),
        (et.prototype.opt_in_tracking = function (e) {
          (e = B.extend({ enable_persistence: !0 }, e)),
            this._gdpr_call_func(ae, e),
            this._gdpr_update_persistence(e);
        }),
        (et.prototype.opt_out_tracking = function (e) {
          (e = B.extend({ clear_persistence: !0, delete_user: !0 }, e)).delete_user &&
            this.people &&
            this.people._identify_called() &&
            (this.people.delete_user(), this.people.clear_charges()),
            this._gdpr_call_func(ce, e),
            this._gdpr_update_persistence(e);
        }),
        (et.prototype.has_opted_in_tracking = function (e) {
          return this._gdpr_call_func(pe, e);
        }),
        (et.prototype.has_opted_out_tracking = function (e) {
          return this._gdpr_call_func(ue, e);
        }),
        (et.prototype.clear_opt_in_out_tracking = function (e) {
          (e = B.extend({ enable_persistence: !0 }, e)),
            this._gdpr_call_func(fe, e),
            this._gdpr_update_persistence(e);
        }),
        (et.prototype.report_error = function (e, t) {
          C.error.apply(C.error, arguments);
          try {
            t || e instanceof Error || (e = new Error(e)),
              this.get_config('error_reporter')(e, t);
          } catch (t) {
            C.error(t);
          }
        }),
        (et.prototype.init = et.prototype.init),
        (et.prototype.reset = et.prototype.reset),
        (et.prototype.disable = et.prototype.disable),
        (et.prototype.time_event = et.prototype.time_event),
        (et.prototype.track = et.prototype.track),
        (et.prototype.track_links = et.prototype.track_links),
        (et.prototype.track_forms = et.prototype.track_forms),
        (et.prototype.track_pageview = et.prototype.track_pageview),
        (et.prototype.register = et.prototype.register),
        (et.prototype.register_once = et.prototype.register_once),
        (et.prototype.unregister = et.prototype.unregister),
        (et.prototype.identify = et.prototype.identify),
        (et.prototype.alias = et.prototype.alias),
        (et.prototype.name_tag = et.prototype.name_tag),
        (et.prototype.set_config = et.prototype.set_config),
        (et.prototype.get_config = et.prototype.get_config),
        (et.prototype.get_property = et.prototype.get_property),
        (et.prototype.get_distinct_id = et.prototype.get_distinct_id),
        (et.prototype.toString = et.prototype.toString),
        (et.prototype.opt_out_tracking = et.prototype.opt_out_tracking),
        (et.prototype.opt_in_tracking = et.prototype.opt_in_tracking),
        (et.prototype.has_opted_out_tracking = et.prototype.has_opted_out_tracking),
        (et.prototype.has_opted_in_tracking = et.prototype.has_opted_in_tracking),
        (et.prototype.clear_opt_in_out_tracking =
          et.prototype.clear_opt_in_out_tracking),
        (et.prototype.get_group = et.prototype.get_group),
        (et.prototype.set_group = et.prototype.set_group),
        (et.prototype.add_group = et.prototype.add_group),
        (et.prototype.remove_group = et.prototype.remove_group),
        (et.prototype.track_with_groups = et.prototype.track_with_groups),
        (et.prototype.start_batch_senders = et.prototype.start_batch_senders),
        (et.prototype.stop_batch_senders = et.prototype.stop_batch_senders),
        (ze.prototype.properties = ze.prototype.properties),
        (ze.prototype.update_search_keyword = ze.prototype.update_search_keyword),
        (ze.prototype.update_referrer_info = ze.prototype.update_referrer_info),
        (ze.prototype.get_cross_subdomain = ze.prototype.get_cross_subdomain),
        (ze.prototype.clear = ze.prototype.clear);
      var ot = {},
        nt =
          ((Ae = 0),
          ((De = new et()).init = function (e, r, i) {
            if (i)
              return De[i] || ((De[i] = ot[i] = tt(e, r, i)), De[i]._loaded()), De[i];
            var o = De;
            ot[Qe] ? (o = ot[Qe]) : e && ((o = tt(e, r, Qe))._loaded(), (ot[Qe] = o)),
              (De = o),
              1 === Ae && (t[Qe] = De),
              B.each(ot, function (e, t) {
                t !== Qe && (De[t] = e);
              }),
              (De._ = B);
          }),
          De.init(),
          (function () {
            function e() {
              e.done ||
                ((e.done = !0),
                (Ze = !0),
                (Ve = !1),
                B.each(ot, function (e) {
                  e._dom_loaded();
                }));
            }
            if (x.addEventListener)
              'complete' === x.readyState
                ? e()
                : x.addEventListener('DOMContentLoaded', e, !1);
            else if (x.attachEvent) {
              x.attachEvent('onreadystatechange', e);
              var r = !1;
              try {
                r = null === t.frameElement;
              } catch (e) {}
              x.documentElement.doScroll &&
                r &&
                (function t() {
                  try {
                    x.documentElement.doScroll('left');
                  } catch (e) {
                    return void setTimeout(t, 1);
                  }
                  e();
                })();
            }
            B.register_event(t, 'load', e, !0);
          })(),
          De);
      e.exports = nt;
    },
    406: (e) => {
      var t,
        r,
        i = (e.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function n() {
        throw new Error('clearTimeout has not been defined');
      }
      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (r) {
          try {
            return t.call(null, e, 0);
          } catch (r) {
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
          r = 'function' == typeof clearTimeout ? clearTimeout : n;
        } catch (e) {
          r = n;
        }
      })();
      var a,
        c = [],
        p = !1,
        u = -1;
      function _() {
        p && a && ((p = !1), a.length ? (c = a.concat(c)) : (u = -1), c.length && h());
      }
      function h() {
        if (!p) {
          var e = s(_);
          p = !0;
          for (var t = c.length; t; ) {
            for (a = c, c = []; ++u < t; ) a && a[u].run();
            (u = -1), (t = c.length);
          }
          (a = null),
            (p = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === n || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                return r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function l(e, t) {
        (this.fun = e), (this.array = t);
      }
      function f() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new l(e, t)), 1 !== c.length || p || s(h);
      }),
        (l.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = f),
        (i.addListener = f),
        (i.once = f),
        (i.off = f),
        (i.removeListener = f),
        (i.removeAllListeners = f),
        (i.emit = f),
        (i.prependListener = f),
        (i.prependOnceListener = f),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function () {
          return '/';
        }),
        (i.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function () {
          return 0;
        });
    },
  },
]);
//# sourceMappingURL=926.4ae4bef2ec265ecf0ac0.js.map?v=4ae4bef2ec265ecf0ac0
