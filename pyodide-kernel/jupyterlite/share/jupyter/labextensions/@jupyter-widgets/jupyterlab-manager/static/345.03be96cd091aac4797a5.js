(self.webpackChunk_jupyter_widgets_jupyterlab_manager =
  self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [345],
  {
    6129: (t, e, r) => {
      'use strict';
      function n(t, e, r) {
        (t.prototype = e.prototype = r), (r.constructor = t);
      }
      function i(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r;
      }
      function o() {}
      r.d(e, { ZP: () => x });
      var a = 0.7,
        s = 1 / a,
        l = '\\s*([+-]?\\d+)\\s*',
        u = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        c = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        h = /^#([0-9a-f]{3,8})$/,
        p = new RegExp(`^rgb\\(${l},${l},${l}\\)$`),
        f = new RegExp(`^rgb\\(${c},${c},${c}\\)$`),
        d = new RegExp(`^rgba\\(${l},${l},${l},${u}\\)$`),
        m = new RegExp(`^rgba\\(${c},${c},${c},${u}\\)$`),
        g = new RegExp(`^hsl\\(${u},${c},${c}\\)$`),
        v = new RegExp(`^hsla\\(${u},${c},${c},${u}\\)$`),
        b = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function y() {
        return this.rgb().formatHex();
      }
      function w() {
        return this.rgb().formatRgb();
      }
      function x(t) {
        var e, r;
        return (
          (t = (t + '').trim().toLowerCase()),
          (e = h.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? S(e)
                : 3 === r
                ? new k(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === r
                ? E((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, (255 & e) / 255)
                : 4 === r
                ? E(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = p.exec(t))
            ? new k(e[1], e[2], e[3], 1)
            : (e = f.exec(t))
            ? new k((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
            : (e = d.exec(t))
            ? E(e[1], e[2], e[3], e[4])
            : (e = m.exec(t))
            ? E((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
            : (e = g.exec(t))
            ? $(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = v.exec(t))
            ? $(e[1], e[2] / 100, e[3] / 100, e[4])
            : b.hasOwnProperty(t)
            ? S(b[t])
            : 'transparent' === t
            ? new k(NaN, NaN, NaN, 0)
            : null
        );
      }
      function S(t) {
        return new k((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function E(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new k(t, e, r, n);
      }
      function N(t) {
        return (
          t instanceof o || (t = x(t)),
          t ? new k((t = t.rgb()).r, t.g, t.b, t.opacity) : new k()
        );
      }
      function k(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function P() {
        return `#${A(this.r)}${A(this.g)}${A(this.b)}`;
      }
      function M() {
        const t = C(this.opacity);
        return `${1 === t ? 'rgb(' : 'rgba('}${V(this.r)}, ${V(this.g)}, ${V(this.b)}${
          1 === t ? ')' : `, ${t})`
        }`;
      }
      function C(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function V(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function A(t) {
        return ((t = V(t)) < 16 ? '0' : '') + t.toString(16);
      }
      function $(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new D(t, e, r, n)
        );
      }
      function U(t) {
        if (t instanceof D) return new D(t.h, t.s, t.l, t.opacity);
        if ((t instanceof o || (t = x(t)), !t)) return new D();
        if (t instanceof D) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          i = Math.min(e, r, n),
          a = Math.max(e, r, n),
          s = NaN,
          l = a - i,
          u = (a + i) / 2;
        return (
          l
            ? ((s =
                e === a
                  ? (r - n) / l + 6 * (r < n)
                  : r === a
                  ? (n - e) / l + 2
                  : (e - r) / l + 4),
              (l /= u < 0.5 ? a + i : 2 - a - i),
              (s *= 60))
            : (l = u > 0 && u < 1 ? 0 : s),
          new D(s, l, u, t.opacity)
        );
      }
      function D(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function O(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function L(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function j(t, e, r) {
        return (
          255 *
          (t < 60
            ? e + ((r - e) * t) / 60
            : t < 180
            ? r
            : t < 240
            ? e + ((r - e) * (240 - t)) / 60
            : e)
        );
      }
      n(o, x, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: y,
        formatHex: y,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return U(this).formatHsl();
        },
        formatRgb: w,
        toString: w,
      }),
        n(
          k,
          function (t, e, r, n) {
            return 1 === arguments.length ? N(t) : new k(t, e, r, null == n ? 1 : n);
          },
          i(o, {
            brighter(t) {
              return (
                (t = null == t ? s : Math.pow(s, t)),
                new k(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new k(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new k(V(this.r), V(this.g), V(this.b), C(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: P,
            formatHex: P,
            formatHex8: function () {
              return `#${A(this.r)}${A(this.g)}${A(this.b)}${A(
                255 * (isNaN(this.opacity) ? 1 : this.opacity)
              )}`;
            },
            formatRgb: M,
            toString: M,
          })
        ),
        n(
          D,
          function (t, e, r, n) {
            return 1 === arguments.length ? U(t) : new D(t, e, r, null == n ? 1 : n);
          },
          i(o, {
            brighter(t) {
              return (
                (t = null == t ? s : Math.pow(s, t)),
                new D(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new D(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                i = 2 * r - n;
              return new k(
                j(t >= 240 ? t - 240 : t + 120, i, n),
                j(t, i, n),
                j(t < 120 ? t + 240 : t - 120, i, n),
                this.opacity
              );
            },
            clamp() {
              return new D(O(this.h), L(this.s), L(this.l), C(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const t = C(this.opacity);
              return `${1 === t ? 'hsl(' : 'hsla('}${O(this.h)}, ${100 * L(this.s)}%, ${
                100 * L(this.l)
              }%${1 === t ? ')' : `, ${t})`}`;
            },
          })
        );
    },
    4359: (t, e, r) => {
      'use strict';
      function n(t, e) {
        if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf('e')) < 0)
          return null;
        var r,
          n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
      }
      r.d(e, { WU: () => p });
      var i,
        o = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function a(t) {
        if (!(e = o.exec(t))) throw new Error('invalid format: ' + t);
        var e;
        return new s({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function s(t) {
        (this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
          (this.align = void 0 === t.align ? '>' : t.align + ''),
          (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
          (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? '' : t.type + '');
      }
      function l(t, e) {
        var r = n(t, e);
        if (!r) return t + '';
        var i = r[0],
          o = r[1];
        return o < 0
          ? '0.' + new Array(-o).join('0') + i
          : i.length > o + 1
          ? i.slice(0, o + 1) + '.' + i.slice(o + 1)
          : i + new Array(o - i.length + 2).join('0');
      }
      (a.prototype = s.prototype),
        (s.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? '0' : '') +
            (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
            (this.comma ? ',' : '') +
            (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
            (this.trim ? '~' : '') +
            this.type
          );
        });
      const u = {
        '%': (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + '',
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString('en').replace(/,/g, '')
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => l(100 * t, e),
        r: l,
        s: function (t, e) {
          var r = n(t, e);
          if (!r) return t + '';
          var o = r[0],
            a = r[1],
            s = a - (i = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            l = o.length;
          return s === l
            ? o
            : s > l
            ? o + new Array(s - l + 1).join('0')
            : s > 0
            ? o.slice(0, s) + '.' + o.slice(s)
            : '0.' + new Array(1 - s).join('0') + n(t, Math.max(0, e + s - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function c(t) {
        return t;
      }
      var h,
        p,
        f = Array.prototype.map,
        d = [
          'y',
          'z',
          'a',
          'f',
          'p',
          'n',
          'µ',
          'm',
          '',
          'k',
          'M',
          'G',
          'T',
          'P',
          'E',
          'Z',
          'Y',
        ];
      (h = (function (t) {
        var e,
          r,
          o =
            void 0 === t.grouping || void 0 === t.thousands
              ? c
              : ((e = f.call(t.grouping, Number)),
                (r = t.thousands + ''),
                function (t, n) {
                  for (
                    var i = t.length, o = [], a = 0, s = e[0], l = 0;
                    i > 0 &&
                    s > 0 &&
                    (l + s + 1 > n && (s = Math.max(1, n - l)),
                    o.push(t.substring((i -= s), i + s)),
                    !((l += s + 1) > n));

                  )
                    s = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(r);
                }),
          s = void 0 === t.currency ? '' : t.currency[0] + '',
          l = void 0 === t.currency ? '' : t.currency[1] + '',
          h = void 0 === t.decimal ? '.' : t.decimal + '',
          p =
            void 0 === t.numerals
              ? c
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(f.call(t.numerals, String)),
          m = void 0 === t.percent ? '%' : t.percent + '',
          g = void 0 === t.minus ? '−' : t.minus + '',
          v = void 0 === t.nan ? 'NaN' : t.nan + '';
        function b(t) {
          var e = (t = a(t)).fill,
            r = t.align,
            n = t.sign,
            c = t.symbol,
            f = t.zero,
            b = t.width,
            y = t.comma,
            w = t.precision,
            x = t.trim,
            S = t.type;
          'n' === S
            ? ((y = !0), (S = 'g'))
            : u[S] || (void 0 === w && (w = 12), (x = !0), (S = 'g')),
            (f || ('0' === e && '=' === r)) && ((f = !0), (e = '0'), (r = '='));
          var E =
              '$' === c
                ? s
                : '#' === c && /[boxX]/.test(S)
                ? '0' + S.toLowerCase()
                : '',
            N = '$' === c ? l : /[%p]/.test(S) ? m : '',
            k = u[S],
            P = /[defgprs%]/.test(S);
          function M(t) {
            var a,
              s,
              l,
              u = E,
              c = N;
            if ('c' === S) (c = k(t) + c), (t = '');
            else {
              var m = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? v : k(Math.abs(t), w)),
                x &&
                  (t = (function (t) {
                    t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
                      switch (t[n]) {
                        case '.':
                          i = e = n;
                          break;
                        case '0':
                          0 === i && (i = n), (e = n);
                          break;
                        default:
                          if (!+t[n]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                m && 0 == +t && '+' !== n && (m = !1),
                (u = (m ? ('(' === n ? n : g) : '-' === n || '(' === n ? '' : n) + u),
                (c = ('s' === S ? d[8 + i / 3] : '') + c + (m && '(' === n ? ')' : '')),
                P)
              )
                for (a = -1, s = t.length; ++a < s; )
                  if (48 > (l = t.charCodeAt(a)) || l > 57) {
                    (c = (46 === l ? h + t.slice(a + 1) : t.slice(a)) + c),
                      (t = t.slice(0, a));
                    break;
                  }
            }
            y && !f && (t = o(t, 1 / 0));
            var M = u.length + t.length + c.length,
              C = M < b ? new Array(b - M + 1).join(e) : '';
            switch (
              (y && f && ((t = o(C + t, C.length ? b - c.length : 1 / 0)), (C = '')), r)
            ) {
              case '<':
                t = u + t + c + C;
                break;
              case '=':
                t = u + C + t + c;
                break;
              case '^':
                t = C.slice(0, (M = C.length >> 1)) + u + t + c + C.slice(M);
                break;
              default:
                t = C + u + t + c;
            }
            return p(t);
          }
          return (
            (w =
              void 0 === w
                ? 6
                : /[gprs]/.test(S)
                ? Math.max(1, Math.min(21, w))
                : Math.max(0, Math.min(20, w))),
            (M.toString = function () {
              return t + '';
            }),
            M
          );
        }
        return {
          format: b,
          formatPrefix: function (t, e) {
            var r,
              i = b((((t = a(t)).type = 'f'), t)),
              o =
                3 *
                Math.max(
                  -8,
                  Math.min(
                    8,
                    Math.floor(((r = e), ((r = n(Math.abs(r))) ? r[1] : NaN) / 3))
                  )
                ),
              s = Math.pow(10, -o),
              l = d[8 + o / 3];
            return function (t) {
              return i(s * t) + l;
            };
          },
        };
      })({ thousands: ',', grouping: [3], currency: ['$', ''] })),
        (p = h.format),
        h.formatPrefix;
    },
    6547: function (t, e) {
      !(function (t) {
        'use strict';
        function e(t) {
          return 'object' == typeof t && 'function' == typeof t.to;
        }
        function r(t) {
          t.parentElement.removeChild(t);
        }
        function n(t) {
          return null != t;
        }
        function i(t) {
          t.preventDefault();
        }
        function o(t) {
          return 'number' == typeof t && !isNaN(t) && isFinite(t);
        }
        function a(t, e, r) {
          r > 0 &&
            (c(t, e),
            setTimeout(function () {
              h(t, e);
            }, r));
        }
        function s(t) {
          return Math.max(Math.min(t, 100), 0);
        }
        function l(t) {
          return Array.isArray(t) ? t : [t];
        }
        function u(t) {
          var e = (t = String(t)).split('.');
          return e.length > 1 ? e[1].length : 0;
        }
        function c(t, e) {
          t.classList && !/\s/.test(e) ? t.classList.add(e) : (t.className += ' ' + e);
        }
        function h(t, e) {
          t.classList && !/\s/.test(e)
            ? t.classList.remove(e)
            : (t.className = t.className.replace(
                new RegExp('(^|\\b)' + e.split(' ').join('|') + '(\\b|$)', 'gi'),
                ' '
              ));
        }
        function p(t) {
          var e = void 0 !== window.pageXOffset,
            r = 'CSS1Compat' === (t.compatMode || '');
          return {
            x: e
              ? window.pageXOffset
              : r
              ? t.documentElement.scrollLeft
              : t.body.scrollLeft,
            y: e
              ? window.pageYOffset
              : r
              ? t.documentElement.scrollTop
              : t.body.scrollTop,
          };
        }
        function f(t, e) {
          return 100 / (e - t);
        }
        function d(t, e, r) {
          return (100 * e) / (t[r + 1] - t[r]);
        }
        function m(t, e) {
          for (var r = 1; t >= e[r]; ) r += 1;
          return r;
        }
        function g(t, e, r) {
          if (r >= t.slice(-1)[0]) return 100;
          var n = m(r, t),
            i = t[n - 1],
            o = t[n],
            a = e[n - 1],
            s = e[n];
          return (
            a +
            (function (t, e) {
              return d(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0], 0);
            })([i, o], r) /
              f(a, s)
          );
        }
        function v(t, e, r, n) {
          if (100 === n) return n;
          var i = m(n, t),
            o = t[i - 1],
            a = t[i];
          return r
            ? n - o > (a - o) / 2
              ? a
              : o
            : e[i - 1]
            ? t[i - 1] +
              (function (t, e) {
                return Math.round(t / e) * e;
              })(n - t[i - 1], e[i - 1])
            : n;
        }
        var b, y;
        (t.PipsMode = void 0),
          ((y = t.PipsMode || (t.PipsMode = {})).Range = 'range'),
          (y.Steps = 'steps'),
          (y.Positions = 'positions'),
          (y.Count = 'count'),
          (y.Values = 'values'),
          (t.PipsType = void 0),
          ((b = t.PipsType || (t.PipsType = {}))[(b.None = -1)] = 'None'),
          (b[(b.NoValue = 0)] = 'NoValue'),
          (b[(b.LargeValue = 1)] = 'LargeValue'),
          (b[(b.SmallValue = 2)] = 'SmallValue');
        var w = (function () {
            function t(t, e, r) {
              var n;
              (this.xPct = []),
                (this.xVal = []),
                (this.xSteps = []),
                (this.xNumSteps = []),
                (this.xHighestCompleteStep = []),
                (this.xSteps = [r || !1]),
                (this.xNumSteps = [!1]),
                (this.snap = e);
              var i = [];
              for (
                Object.keys(t).forEach(function (e) {
                  i.push([l(t[e]), e]);
                }),
                  i.sort(function (t, e) {
                    return t[0][0] - e[0][0];
                  }),
                  n = 0;
                n < i.length;
                n++
              )
                this.handleEntryPoint(i[n][1], i[n][0]);
              for (
                this.xNumSteps = this.xSteps.slice(0), n = 0;
                n < this.xNumSteps.length;
                n++
              )
                this.handleStepPoint(n, this.xNumSteps[n]);
            }
            return (
              (t.prototype.getDistance = function (t) {
                var e,
                  r = [];
                for (e = 0; e < this.xNumSteps.length - 1; e++) {
                  var n = this.xNumSteps[e];
                  if (n && (t / n) % 1 != 0)
                    throw new Error(
                      "noUiSlider: 'limit', 'margin' and 'padding' of " +
                        this.xPct[e] +
                        '% range must be divisible by step.'
                    );
                  r[e] = d(this.xVal, t, e);
                }
                return r;
              }),
              (t.prototype.getAbsoluteDistance = function (t, e, r) {
                var n,
                  i = 0;
                if (t < this.xPct[this.xPct.length - 1])
                  for (; t > this.xPct[i + 1]; ) i++;
                else
                  t === this.xPct[this.xPct.length - 1] && (i = this.xPct.length - 2);
                r || t !== this.xPct[i + 1] || i++, null === e && (e = []);
                var o = 1,
                  a = e[i],
                  s = 0,
                  l = 0,
                  u = 0,
                  c = 0;
                for (
                  n = r
                    ? (t - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i])
                    : (this.xPct[i + 1] - t) / (this.xPct[i + 1] - this.xPct[i]);
                  a > 0;

                )
                  (s = this.xPct[i + 1 + c] - this.xPct[i + c]),
                    e[i + c] * o + 100 - 100 * n > 100
                      ? ((l = s * n), (o = (a - 100 * n) / e[i + c]), (n = 1))
                      : ((l = ((e[i + c] * s) / 100) * o), (o = 0)),
                    r
                      ? ((u -= l), this.xPct.length + c >= 1 && c--)
                      : ((u += l), this.xPct.length - c >= 1 && c++),
                    (a = e[i + c] * o);
                return t + u;
              }),
              (t.prototype.toStepping = function (t) {
                return g(this.xVal, this.xPct, t);
              }),
              (t.prototype.fromStepping = function (t) {
                return (function (t, e, r) {
                  if (r >= 100) return t.slice(-1)[0];
                  var n = m(r, e),
                    i = t[n - 1],
                    o = t[n],
                    a = e[n - 1];
                  return (function (t, e) {
                    return (e * (t[1] - t[0])) / 100 + t[0];
                  })([i, o], (r - a) * f(a, e[n]));
                })(this.xVal, this.xPct, t);
              }),
              (t.prototype.getStep = function (t) {
                return v(this.xPct, this.xSteps, this.snap, t);
              }),
              (t.prototype.getDefaultStep = function (t, e, r) {
                var n = m(t, this.xPct);
                return (
                  (100 === t || (e && t === this.xPct[n - 1])) &&
                    (n = Math.max(n - 1, 1)),
                  (this.xVal[n] - this.xVal[n - 1]) / r
                );
              }),
              (t.prototype.getNearbySteps = function (t) {
                var e = m(t, this.xPct);
                return {
                  stepBefore: {
                    startValue: this.xVal[e - 2],
                    step: this.xNumSteps[e - 2],
                    highestStep: this.xHighestCompleteStep[e - 2],
                  },
                  thisStep: {
                    startValue: this.xVal[e - 1],
                    step: this.xNumSteps[e - 1],
                    highestStep: this.xHighestCompleteStep[e - 1],
                  },
                  stepAfter: {
                    startValue: this.xVal[e],
                    step: this.xNumSteps[e],
                    highestStep: this.xHighestCompleteStep[e],
                  },
                };
              }),
              (t.prototype.countStepDecimals = function () {
                var t = this.xNumSteps.map(u);
                return Math.max.apply(null, t);
              }),
              (t.prototype.hasNoSize = function () {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
              }),
              (t.prototype.convert = function (t) {
                return this.getStep(this.toStepping(t));
              }),
              (t.prototype.handleEntryPoint = function (t, e) {
                var r;
                if (
                  !o((r = 'min' === t ? 0 : 'max' === t ? 100 : parseFloat(t))) ||
                  !o(e[0])
                )
                  throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(r), this.xVal.push(e[0]);
                var n = Number(e[1]);
                r ? this.xSteps.push(!isNaN(n) && n) : isNaN(n) || (this.xSteps[0] = n),
                  this.xHighestCompleteStep.push(0);
              }),
              (t.prototype.handleStepPoint = function (t, e) {
                if (e)
                  if (this.xVal[t] !== this.xVal[t + 1]) {
                    this.xSteps[t] =
                      d([this.xVal[t], this.xVal[t + 1]], e, 0) /
                      f(this.xPct[t], this.xPct[t + 1]);
                    var r = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t],
                      n = Math.ceil(Number(r.toFixed(3)) - 1),
                      i = this.xVal[t] + this.xNumSteps[t] * n;
                    this.xHighestCompleteStep[t] = i;
                  } else this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t];
              }),
              t
            );
          })(),
          x = {
            to: function (t) {
              return void 0 === t ? '' : t.toFixed(2);
            },
            from: Number,
          },
          S = {
            target: 'target',
            base: 'base',
            origin: 'origin',
            handle: 'handle',
            handleLower: 'handle-lower',
            handleUpper: 'handle-upper',
            touchArea: 'touch-area',
            horizontal: 'horizontal',
            vertical: 'vertical',
            background: 'background',
            connect: 'connect',
            connects: 'connects',
            ltr: 'ltr',
            rtl: 'rtl',
            textDirectionLtr: 'txt-dir-ltr',
            textDirectionRtl: 'txt-dir-rtl',
            draggable: 'draggable',
            drag: 'state-drag',
            tap: 'state-tap',
            active: 'active',
            tooltip: 'tooltip',
            pips: 'pips',
            pipsHorizontal: 'pips-horizontal',
            pipsVertical: 'pips-vertical',
            marker: 'marker',
            markerHorizontal: 'marker-horizontal',
            markerVertical: 'marker-vertical',
            markerNormal: 'marker-normal',
            markerLarge: 'marker-large',
            markerSub: 'marker-sub',
            value: 'value',
            valueHorizontal: 'value-horizontal',
            valueVertical: 'value-vertical',
            valueNormal: 'value-normal',
            valueLarge: 'value-large',
            valueSub: 'value-sub',
          },
          E = '.__tooltips',
          N = '.__aria';
        function k(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'step' is not numeric.");
          t.singleStep = e;
        }
        function P(t, e) {
          if (!o(e))
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
          t.keyboardPageMultiplier = e;
        }
        function M(t, e) {
          if (!o(e))
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
          t.keyboardMultiplier = e;
        }
        function C(t, e) {
          if (!o(e))
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
          t.keyboardDefaultStep = e;
        }
        function V(t, e) {
          if ('object' != typeof e || Array.isArray(e))
            throw new Error("noUiSlider: 'range' is not an object.");
          if (void 0 === e.min || void 0 === e.max)
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
          t.spectrum = new w(e, t.snap || !1, t.singleStep);
        }
        function A(t, e) {
          if (((e = l(e)), !Array.isArray(e) || !e.length))
            throw new Error("noUiSlider: 'start' option is incorrect.");
          (t.handles = e.length), (t.start = e);
        }
        function $(t, e) {
          if ('boolean' != typeof e)
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
          t.snap = e;
        }
        function U(t, e) {
          if ('boolean' != typeof e)
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
          t.animate = e;
        }
        function D(t, e) {
          if ('number' != typeof e)
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
          t.animationDuration = e;
        }
        function O(t, e) {
          var r,
            n = [!1];
          if (
            ('lower' === e ? (e = [!0, !1]) : 'upper' === e && (e = [!1, !0]),
            !0 === e || !1 === e)
          ) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1);
          } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
              throw new Error(
                "noUiSlider: 'connect' option doesn't match handle count."
              );
            n = e;
          }
          t.connect = n;
        }
        function L(t, e) {
          switch (e) {
            case 'horizontal':
              t.ort = 0;
              break;
            case 'vertical':
              t.ort = 1;
              break;
            default:
              throw new Error("noUiSlider: 'orientation' option is invalid.");
          }
        }
        function j(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
          0 !== e && (t.margin = t.spectrum.getDistance(e));
        }
        function T(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
          if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2))
            throw new Error(
              "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
        function z(t, e) {
          var r;
          if (!o(e) && !Array.isArray(e))
            throw new Error(
              "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
            );
          if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1]))
            throw new Error(
              "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
            );
          if (0 !== e) {
            for (
              Array.isArray(e) || (e = [e, e]),
                t.padding = [
                  t.spectrum.getDistance(e[0]),
                  t.spectrum.getDistance(e[1]),
                ],
                r = 0;
              r < t.spectrum.xNumSteps.length - 1;
              r++
            )
              if (t.padding[0][r] < 0 || t.padding[1][r] < 0)
                throw new Error(
                  "noUiSlider: 'padding' option must be a positive number(s)."
                );
            var n = e[0] + e[1],
              i = t.spectrum.xVal[0];
            if (n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - i) > 1)
              throw new Error(
                "noUiSlider: 'padding' option must not exceed 100% of the range."
              );
          }
        }
        function H(t, e) {
          switch (e) {
            case 'ltr':
              t.dir = 0;
              break;
            case 'rtl':
              t.dir = 1;
              break;
            default:
              throw new Error("noUiSlider: 'direction' option was not recognized.");
          }
        }
        function R(t, e) {
          if ('string' != typeof e)
            throw new Error(
              "noUiSlider: 'behaviour' must be a string containing options."
            );
          var r = e.indexOf('tap') >= 0,
            n = e.indexOf('drag') >= 0,
            i = e.indexOf('fixed') >= 0,
            o = e.indexOf('snap') >= 0,
            a = e.indexOf('hover') >= 0,
            s = e.indexOf('unconstrained') >= 0,
            l = e.indexOf('drag-all') >= 0;
          if (i) {
            if (2 !== t.handles)
              throw new Error(
                "noUiSlider: 'fixed' behaviour must be used with 2 handles"
              );
            j(t, t.start[1] - t.start[0]);
          }
          if (s && (t.margin || t.limit))
            throw new Error(
              "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
            );
          t.events = {
            tap: r || o,
            drag: n,
            dragAll: l,
            fixed: i,
            snap: o,
            hover: a,
            unconstrained: s,
          };
        }
        function F(t, r) {
          if (!1 !== r)
            if (!0 === r || e(r)) {
              t.tooltips = [];
              for (var n = 0; n < t.handles; n++) t.tooltips.push(r);
            } else {
              if ((r = l(r)).length !== t.handles)
                throw new Error('noUiSlider: must pass a formatter for all handles.');
              r.forEach(function (t) {
                if ('boolean' != typeof t && !e(t))
                  throw new Error(
                    "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                  );
              }),
                (t.tooltips = r);
            }
        }
        function _(t, e) {
          if (e.length !== t.handles)
            throw new Error('noUiSlider: must pass a attributes for all handles.');
          t.handleAttributes = e;
        }
        function q(t, r) {
          if (!e(r)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
          t.ariaFormat = r;
        }
        function X(t, r) {
          if (
            !(function (t) {
              return e(t) && 'function' == typeof t.from;
            })(r)
          )
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
          t.format = r;
        }
        function B(t, e) {
          if ('boolean' != typeof e)
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
          t.keyboardSupport = e;
        }
        function Y(t, e) {
          t.documentElement = e;
        }
        function I(t, e) {
          if ('string' != typeof e && !1 !== e)
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
          t.cssPrefix = e;
        }
        function W(t, e) {
          if ('object' != typeof e)
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
          'string' == typeof t.cssPrefix
            ? ((t.cssClasses = {}),
              Object.keys(e).forEach(function (r) {
                t.cssClasses[r] = t.cssPrefix + e[r];
              }))
            : (t.cssClasses = e);
        }
        function Z(t) {
          var e = {
              margin: null,
              limit: null,
              padding: null,
              animate: !0,
              animationDuration: 300,
              ariaFormat: x,
              format: x,
            },
            r = {
              step: { r: !1, t: k },
              keyboardPageMultiplier: { r: !1, t: P },
              keyboardMultiplier: { r: !1, t: M },
              keyboardDefaultStep: { r: !1, t: C },
              start: { r: !0, t: A },
              connect: { r: !0, t: O },
              direction: { r: !0, t: H },
              snap: { r: !1, t: $ },
              animate: { r: !1, t: U },
              animationDuration: { r: !1, t: D },
              range: { r: !0, t: V },
              orientation: { r: !1, t: L },
              margin: { r: !1, t: j },
              limit: { r: !1, t: T },
              padding: { r: !1, t: z },
              behaviour: { r: !0, t: R },
              ariaFormat: { r: !1, t: q },
              format: { r: !1, t: X },
              tooltips: { r: !1, t: F },
              keyboardSupport: { r: !0, t: B },
              documentElement: { r: !1, t: Y },
              cssPrefix: { r: !0, t: I },
              cssClasses: { r: !0, t: W },
              handleAttributes: { r: !1, t: _ },
            },
            i = {
              connect: !1,
              direction: 'ltr',
              behaviour: 'tap',
              orientation: 'horizontal',
              keyboardSupport: !0,
              cssPrefix: 'noUi-',
              cssClasses: S,
              keyboardPageMultiplier: 5,
              keyboardMultiplier: 1,
              keyboardDefaultStep: 10,
            };
          t.format && !t.ariaFormat && (t.ariaFormat = t.format),
            Object.keys(r).forEach(function (o) {
              if (n(t[o]) || void 0 !== i[o]) r[o].t(e, n(t[o]) ? t[o] : i[o]);
              else if (r[o].r) throw new Error("noUiSlider: '" + o + "' is required.");
            }),
            (e.pips = t.pips);
          var o = document.createElement('div'),
            a = void 0 !== o.style.msTransform,
            s = void 0 !== o.style.transform;
          e.transformRule = s ? 'transform' : a ? 'msTransform' : 'webkitTransform';
          return (
            (e.style = [
              ['left', 'top'],
              ['right', 'bottom'],
            ][e.dir][e.ort]),
            e
          );
        }
        function G(e, o, u) {
          var f,
            d,
            m,
            g,
            v,
            b,
            y,
            w = window.navigator.pointerEnabled
              ? { start: 'pointerdown', move: 'pointermove', end: 'pointerup' }
              : window.navigator.msPointerEnabled
              ? { start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp' }
              : {
                  start: 'mousedown touchstart',
                  move: 'mousemove touchmove',
                  end: 'mouseup touchend',
                },
            x =
              window.CSS &&
              CSS.supports &&
              CSS.supports('touch-action', 'none') &&
              (function () {
                var t = !1;
                try {
                  var e = Object.defineProperty({}, 'passive', {
                    get: function () {
                      t = !0;
                    },
                  });
                  window.addEventListener('test', null, e);
                } catch (t) {}
                return t;
              })(),
            S = e,
            k = o.spectrum,
            P = [],
            M = [],
            C = [],
            V = 0,
            A = {},
            $ = e.ownerDocument,
            U = o.documentElement || $.documentElement,
            D = $.body,
            O = 'rtl' === $.dir || 1 === o.ort ? 0 : 100;
          function L(t, e) {
            var r = $.createElement('div');
            return e && c(r, e), t.appendChild(r), r;
          }
          function j(t, e) {
            var r = L(t, o.cssClasses.origin),
              n = L(r, o.cssClasses.handle);
            if (
              (L(n, o.cssClasses.touchArea),
              n.setAttribute('data-handle', String(e)),
              o.keyboardSupport &&
                (n.setAttribute('tabindex', '0'),
                n.addEventListener('keydown', function (t) {
                  return (function (t, e) {
                    if (H() || R(e)) return !1;
                    var r = ['Left', 'Right'],
                      n = ['Down', 'Up'],
                      i = ['PageDown', 'PageUp'],
                      a = ['Home', 'End'];
                    o.dir && !o.ort
                      ? r.reverse()
                      : o.ort && !o.dir && (n.reverse(), i.reverse());
                    var s,
                      l = t.key.replace('Arrow', ''),
                      u = l === i[0],
                      c = l === i[1],
                      h = l === n[0] || l === r[0] || u,
                      p = l === n[1] || l === r[1] || c,
                      f = l === a[0],
                      d = l === a[1];
                    if (!(h || p || f || d)) return !0;
                    if ((t.preventDefault(), p || h)) {
                      var m = h ? 0 : 1,
                        g = vt(e)[m];
                      if (null === g) return !1;
                      !1 === g &&
                        (g = k.getDefaultStep(M[e], h, o.keyboardDefaultStep)),
                        (g *= c || u ? o.keyboardPageMultiplier : o.keyboardMultiplier),
                        (g = Math.max(g, 1e-7)),
                        (g *= h ? -1 : 1),
                        (s = P[e] + g);
                    } else s = d ? o.spectrum.xVal[o.spectrum.xVal.length - 1] : o.spectrum.xVal[0];
                    return (
                      pt(e, k.toStepping(s), !0, !0),
                      at('slide', e),
                      at('update', e),
                      at('change', e),
                      at('set', e),
                      !1
                    );
                  })(t, e);
                })),
              void 0 !== o.handleAttributes)
            ) {
              var i = o.handleAttributes[e];
              Object.keys(i).forEach(function (t) {
                n.setAttribute(t, i[t]);
              });
            }
            return (
              n.setAttribute('role', 'slider'),
              n.setAttribute('aria-orientation', o.ort ? 'vertical' : 'horizontal'),
              0 === e
                ? c(n, o.cssClasses.handleLower)
                : e === o.handles - 1 && c(n, o.cssClasses.handleUpper),
              r
            );
          }
          function T(t, e) {
            return !!e && L(t, o.cssClasses.connect);
          }
          function z(t, e) {
            return (
              !(!o.tooltips || !o.tooltips[e]) && L(t.firstChild, o.cssClasses.tooltip)
            );
          }
          function H() {
            return S.hasAttribute('disabled');
          }
          function R(t) {
            return d[t].hasAttribute('disabled');
          }
          function F() {
            v &&
              (ot('update' + E),
              v.forEach(function (t) {
                t && r(t);
              }),
              (v = null));
          }
          function _() {
            F(),
              (v = d.map(z)),
              it('update' + E, function (t, e, r) {
                if (v && o.tooltips && !1 !== v[e]) {
                  var n = t[e];
                  !0 !== o.tooltips[e] && (n = o.tooltips[e].to(r[e])),
                    (v[e].innerHTML = n);
                }
              });
          }
          function q(t, e) {
            return t.map(function (t) {
              return k.fromStepping(e ? k.getStep(t) : t);
            });
          }
          function X(e) {
            var r,
              n = (function (e) {
                if (e.mode === t.PipsMode.Range || e.mode === t.PipsMode.Steps)
                  return k.xVal;
                if (e.mode === t.PipsMode.Count) {
                  if (e.values < 2)
                    throw new Error(
                      "noUiSlider: 'values' (>= 2) required for mode 'count'."
                    );
                  for (var r = e.values - 1, n = 100 / r, i = []; r--; ) i[r] = r * n;
                  return i.push(100), q(i, e.stepped);
                }
                return e.mode === t.PipsMode.Positions
                  ? q(e.values, e.stepped)
                  : e.mode === t.PipsMode.Values
                  ? e.stepped
                    ? e.values.map(function (t) {
                        return k.fromStepping(k.getStep(k.toStepping(t)));
                      })
                    : e.values
                  : [];
              })(e),
              i = {},
              o = k.xVal[0],
              a = k.xVal[k.xVal.length - 1],
              s = !1,
              l = !1,
              u = 0;
            return (
              ((r = n.slice().sort(function (t, e) {
                return t - e;
              })),
              (n = r.filter(function (t) {
                return !this[t] && (this[t] = !0);
              }, {})))[0] !== o && (n.unshift(o), (s = !0)),
              n[n.length - 1] !== a && (n.push(a), (l = !0)),
              n.forEach(function (r, o) {
                var a,
                  c,
                  h,
                  p,
                  f,
                  d,
                  m,
                  g,
                  v,
                  b,
                  y = r,
                  w = n[o + 1],
                  x = e.mode === t.PipsMode.Steps;
                for (
                  x && (a = k.xNumSteps[o]),
                    a || (a = w - y),
                    void 0 === w && (w = y),
                    a = Math.max(a, 1e-7),
                    c = y;
                  c <= w;
                  c = Number((c + a).toFixed(7))
                ) {
                  for (
                    g = (f = (p = k.toStepping(c)) - u) / (e.density || 1),
                      b = f / (v = Math.round(g)),
                      h = 1;
                    h <= v;
                    h += 1
                  )
                    i[(d = u + h * b).toFixed(5)] = [k.fromStepping(d), 0];
                  (m =
                    n.indexOf(c) > -1
                      ? t.PipsType.LargeValue
                      : x
                      ? t.PipsType.SmallValue
                      : t.PipsType.NoValue),
                    !o && s && c !== w && (m = 0),
                    (c === w && l) || (i[p.toFixed(5)] = [c, m]),
                    (u = p);
                }
              }),
              i
            );
          }
          function B(e, r, n) {
            var i,
              a,
              s = $.createElement('div'),
              l =
                (((i = {})[t.PipsType.None] = ''),
                (i[t.PipsType.NoValue] = o.cssClasses.valueNormal),
                (i[t.PipsType.LargeValue] = o.cssClasses.valueLarge),
                (i[t.PipsType.SmallValue] = o.cssClasses.valueSub),
                i),
              u =
                (((a = {})[t.PipsType.None] = ''),
                (a[t.PipsType.NoValue] = o.cssClasses.markerNormal),
                (a[t.PipsType.LargeValue] = o.cssClasses.markerLarge),
                (a[t.PipsType.SmallValue] = o.cssClasses.markerSub),
                a),
              h = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
              p = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];
            function f(t, e) {
              var r = e === o.cssClasses.value,
                n = r ? l : u;
              return e + ' ' + (r ? h : p)[o.ort] + ' ' + n[t];
            }
            return (
              c(s, o.cssClasses.pips),
              c(
                s,
                0 === o.ort ? o.cssClasses.pipsHorizontal : o.cssClasses.pipsVertical
              ),
              Object.keys(e).forEach(function (i) {
                !(function (e, i, a) {
                  if ((a = r ? r(i, a) : a) !== t.PipsType.None) {
                    var l = L(s, !1);
                    (l.className = f(a, o.cssClasses.marker)),
                      (l.style[o.style] = e + '%'),
                      a > t.PipsType.NoValue &&
                        (((l = L(s, !1)).className = f(a, o.cssClasses.value)),
                        l.setAttribute('data-value', String(i)),
                        (l.style[o.style] = e + '%'),
                        (l.innerHTML = String(n.to(i))));
                  }
                })(i, e[i][0], e[i][1]);
              }),
              s
            );
          }
          function Y() {
            g && (r(g), (g = null));
          }
          function I(t) {
            Y();
            var e = X(t),
              r = t.filter,
              n = t.format || {
                to: function (t) {
                  return String(Math.round(t));
                },
              };
            return (g = S.appendChild(B(e, r, n)));
          }
          function W() {
            var t = f.getBoundingClientRect(),
              e = 'offset' + ['Width', 'Height'][o.ort];
            return 0 === o.ort ? t.width || f[e] : t.height || f[e];
          }
          function G(t, e, r, n) {
            var i = function (i) {
                var a,
                  s,
                  l = (function (t, e, r) {
                    var n = 0 === t.type.indexOf('touch'),
                      i = 0 === t.type.indexOf('mouse'),
                      o = 0 === t.type.indexOf('pointer'),
                      a = 0,
                      s = 0;
                    if (
                      (0 === t.type.indexOf('MSPointer') && (o = !0),
                      'mousedown' === t.type && !t.buttons && !t.touches)
                    )
                      return !1;
                    if (n) {
                      var l = function (e) {
                        var n = e.target;
                        return (
                          n === r ||
                          r.contains(n) ||
                          (t.composed && t.composedPath().shift() === r)
                        );
                      };
                      if ('touchstart' === t.type) {
                        var u = Array.prototype.filter.call(t.touches, l);
                        if (u.length > 1) return !1;
                        (a = u[0].pageX), (s = u[0].pageY);
                      } else {
                        var c = Array.prototype.find.call(t.changedTouches, l);
                        if (!c) return !1;
                        (a = c.pageX), (s = c.pageY);
                      }
                    }
                    return (
                      (e = e || p($)),
                      (i || o) && ((a = t.clientX + e.x), (s = t.clientY + e.y)),
                      (t.pageOffset = e),
                      (t.points = [a, s]),
                      (t.cursor = i || o),
                      t
                    );
                  })(i, n.pageOffset, n.target || e);
                return (
                  !!l &&
                  !(H() && !n.doNotReject) &&
                  ((a = S),
                  (s = o.cssClasses.tap),
                  !(
                    (a.classList
                      ? a.classList.contains(s)
                      : new RegExp('\\b' + s + '\\b').test(a.className)) &&
                    !n.doNotReject
                  )) &&
                  !(t === w.start && void 0 !== l.buttons && l.buttons > 1) &&
                  (!n.hover || !l.buttons) &&
                  (x || l.preventDefault(),
                  (l.calcPoint = l.points[o.ort]),
                  void r(l, n))
                );
              },
              a = [];
            return (
              t.split(' ').forEach(function (t) {
                e.addEventListener(t, i, !!x && { passive: !0 }), a.push([t, i]);
              }),
              a
            );
          }
          function J(t) {
            var e,
              r,
              n,
              i,
              a,
              l,
              u =
                (100 *
                  (t -
                    ((e = f),
                    (r = o.ort),
                    (n = e.getBoundingClientRect()),
                    (i = e.ownerDocument),
                    (a = i.documentElement),
                    (l = p(i)),
                    /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
                    r ? n.top + l.y - a.clientTop : n.left + l.x - a.clientLeft))) /
                W();
            return (u = s(u)), o.dir ? 100 - u : u;
          }
          function K(t, e) {
            'mouseout' === t.type &&
              'HTML' === t.target.nodeName &&
              null === t.relatedTarget &&
              tt(t, e);
          }
          function Q(t, e) {
            if (
              -1 === navigator.appVersion.indexOf('MSIE 9') &&
              0 === t.buttons &&
              0 !== e.buttonsProperty
            )
              return tt(t, e);
            var r = (o.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            ut(r > 0, (100 * r) / e.baseSize, e.locations, e.handleNumbers, e.connect);
          }
          function tt(t, e) {
            e.handle && (h(e.handle, o.cssClasses.active), (V -= 1)),
              e.listeners.forEach(function (t) {
                U.removeEventListener(t[0], t[1]);
              }),
              0 === V &&
                (h(S, o.cssClasses.drag),
                ht(),
                t.cursor &&
                  ((D.style.cursor = ''), D.removeEventListener('selectstart', i))),
              e.handleNumbers.forEach(function (t) {
                at('change', t), at('set', t), at('end', t);
              });
          }
          function et(t, e) {
            if (!e.handleNumbers.some(R)) {
              var r;
              1 === e.handleNumbers.length &&
                ((r = d[e.handleNumbers[0]].children[0]),
                (V += 1),
                c(r, o.cssClasses.active)),
                t.stopPropagation();
              var n = [],
                a = G(w.move, U, Q, {
                  target: t.target,
                  handle: r,
                  connect: e.connect,
                  listeners: n,
                  startCalcPoint: t.calcPoint,
                  baseSize: W(),
                  pageOffset: t.pageOffset,
                  handleNumbers: e.handleNumbers,
                  buttonsProperty: t.buttons,
                  locations: M.slice(),
                }),
                s = G(w.end, U, tt, {
                  target: t.target,
                  handle: r,
                  listeners: n,
                  doNotReject: !0,
                  handleNumbers: e.handleNumbers,
                }),
                l = G('mouseout', U, K, {
                  target: t.target,
                  handle: r,
                  listeners: n,
                  doNotReject: !0,
                  handleNumbers: e.handleNumbers,
                });
              n.push.apply(n, a.concat(s, l)),
                t.cursor &&
                  ((D.style.cursor = getComputedStyle(t.target).cursor),
                  d.length > 1 && c(S, o.cssClasses.drag),
                  D.addEventListener('selectstart', i, !1)),
                e.handleNumbers.forEach(function (t) {
                  at('start', t);
                });
            }
          }
          function rt(t) {
            t.stopPropagation();
            var e = J(t.calcPoint),
              r = (function (t) {
                var e = 100,
                  r = !1;
                return (
                  d.forEach(function (n, i) {
                    if (!R(i)) {
                      var o = M[i],
                        a = Math.abs(o - t);
                      (a < e || (a <= e && t > o) || (100 === a && 100 === e)) &&
                        ((r = i), (e = a));
                    }
                  }),
                  r
                );
              })(e);
            !1 !== r &&
              (o.events.snap || a(S, o.cssClasses.tap, o.animationDuration),
              pt(r, e, !0, !0),
              ht(),
              at('slide', r, !0),
              at('update', r, !0),
              o.events.snap
                ? et(t, { handleNumbers: [r] })
                : (at('change', r, !0), at('set', r, !0)));
          }
          function nt(t) {
            var e = J(t.calcPoint),
              r = k.getStep(e),
              n = k.fromStepping(r);
            Object.keys(A).forEach(function (t) {
              'hover' === t.split('.')[0] &&
                A[t].forEach(function (t) {
                  t.call(bt, n);
                });
            });
          }
          function it(t, e) {
            (A[t] = A[t] || []),
              A[t].push(e),
              'update' === t.split('.')[0] &&
                d.forEach(function (t, e) {
                  at('update', e);
                });
          }
          function ot(t) {
            var e = t && t.split('.')[0],
              r = e ? t.substring(e.length) : t;
            Object.keys(A).forEach(function (t) {
              var n = t.split('.')[0],
                i = t.substring(n.length);
              (e && e !== n) ||
                (r && r !== i) ||
                ((function (t) {
                  return t === N || t === E;
                })(i) &&
                  r !== i) ||
                delete A[t];
            });
          }
          function at(t, e, r) {
            Object.keys(A).forEach(function (n) {
              var i = n.split('.')[0];
              t === i &&
                A[n].forEach(function (t) {
                  t.call(bt, P.map(o.format.to), e, P.slice(), r || !1, M.slice(), bt);
                });
            });
          }
          function st(t, e, r, n, i, a) {
            var l;
            return (
              d.length > 1 &&
                !o.events.unconstrained &&
                (n &&
                  e > 0 &&
                  ((l = k.getAbsoluteDistance(t[e - 1], o.margin, !1)),
                  (r = Math.max(r, l))),
                i &&
                  e < d.length - 1 &&
                  ((l = k.getAbsoluteDistance(t[e + 1], o.margin, !0)),
                  (r = Math.min(r, l)))),
              d.length > 1 &&
                o.limit &&
                (n &&
                  e > 0 &&
                  ((l = k.getAbsoluteDistance(t[e - 1], o.limit, !1)),
                  (r = Math.min(r, l))),
                i &&
                  e < d.length - 1 &&
                  ((l = k.getAbsoluteDistance(t[e + 1], o.limit, !0)),
                  (r = Math.max(r, l)))),
              o.padding &&
                (0 === e &&
                  ((l = k.getAbsoluteDistance(0, o.padding[0], !1)),
                  (r = Math.max(r, l))),
                e === d.length - 1 &&
                  ((l = k.getAbsoluteDistance(100, o.padding[1], !0)),
                  (r = Math.min(r, l)))),
              !((r = s((r = k.getStep(r)))) === t[e] && !a) && r
            );
          }
          function lt(t, e) {
            var r = o.ort;
            return (r ? e : t) + ', ' + (r ? t : e);
          }
          function ut(t, e, r, n, i) {
            var o = r.slice(),
              a = n[0],
              s = [!t, t],
              l = [t, !t];
            (n = n.slice()),
              t && n.reverse(),
              n.length > 1
                ? n.forEach(function (t, r) {
                    var n = st(o, t, o[t] + e, s[r], l[r], !1);
                    !1 === n ? (e = 0) : ((e = n - o[t]), (o[t] = n));
                  })
                : (s = l = [!0]);
            var u = !1;
            n.forEach(function (t, n) {
              u = pt(t, r[t] + e, s[n], l[n]) || u;
            }),
              u &&
                (n.forEach(function (t) {
                  at('update', t), at('slide', t);
                }),
                null != i && at('drag', a));
          }
          function ct(t, e) {
            return o.dir ? 100 - t - e : t;
          }
          function ht() {
            C.forEach(function (t) {
              var e = M[t] > 50 ? -1 : 1,
                r = 3 + (d.length + e * t);
              d[t].style.zIndex = String(r);
            });
          }
          function pt(t, e, r, n, i) {
            return (
              i || (e = st(M, t, e, r, n, !1)),
              !1 !== e &&
                ((function (t, e) {
                  (M[t] = e), (P[t] = k.fromStepping(e));
                  var r = 'translate(' + lt(10 * (ct(e, 0) - O) + '%', '0') + ')';
                  (d[t].style[o.transformRule] = r), ft(t), ft(t + 1);
                })(t, e),
                !0)
            );
          }
          function ft(t) {
            if (m[t]) {
              var e = 0,
                r = 100;
              0 !== t && (e = M[t - 1]), t !== m.length - 1 && (r = M[t]);
              var n = r - e,
                i = 'translate(' + lt(ct(e, n) + '%', '0') + ')',
                a = 'scale(' + lt(n / 100, '1') + ')';
              m[t].style[o.transformRule] = i + ' ' + a;
            }
          }
          function dt(t, e) {
            return null === t || !1 === t || void 0 === t
              ? M[e]
              : ('number' == typeof t && (t = String(t)),
                !1 !== (t = o.format.from(t)) && (t = k.toStepping(t)),
                !1 === t || isNaN(t) ? M[e] : t);
          }
          function mt(t, e, r) {
            var n = l(t),
              i = void 0 === M[0];
            (e = void 0 === e || e),
              o.animate && !i && a(S, o.cssClasses.tap, o.animationDuration),
              C.forEach(function (t) {
                pt(t, dt(n[t], t), !0, !1, r);
              });
            var s = 1 === C.length ? 0 : 1;
            if (i && k.hasNoSize() && ((r = !0), (M[0] = 0), C.length > 1)) {
              var u = 100 / (C.length - 1);
              C.forEach(function (t) {
                M[t] = t * u;
              });
            }
            for (; s < C.length; ++s)
              C.forEach(function (t) {
                pt(t, M[t], !0, !0, r);
              });
            ht(),
              C.forEach(function (t) {
                at('update', t), null !== n[t] && e && at('set', t);
              });
          }
          function gt(t) {
            if ((void 0 === t && (t = !1), t))
              return 1 === P.length ? P[0] : P.slice(0);
            var e = P.map(o.format.to);
            return 1 === e.length ? e[0] : e;
          }
          function vt(t) {
            var e = M[t],
              r = k.getNearbySteps(e),
              n = P[t],
              i = r.thisStep.step,
              a = null;
            if (o.snap)
              return [
                n - r.stepBefore.startValue || null,
                r.stepAfter.startValue - n || null,
              ];
            !1 !== i &&
              n + i > r.stepAfter.startValue &&
              (i = r.stepAfter.startValue - n),
              (a =
                n > r.thisStep.startValue
                  ? r.thisStep.step
                  : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep),
              100 === e ? (i = null) : 0 === e && (a = null);
            var s = k.countStepDecimals();
            return (
              null !== i && !1 !== i && (i = Number(i.toFixed(s))),
              null !== a && !1 !== a && (a = Number(a.toFixed(s))),
              [a, i]
            );
          }
          c((y = S), o.cssClasses.target),
            0 === o.dir ? c(y, o.cssClasses.ltr) : c(y, o.cssClasses.rtl),
            0 === o.ort ? c(y, o.cssClasses.horizontal) : c(y, o.cssClasses.vertical),
            c(
              y,
              'rtl' === getComputedStyle(y).direction
                ? o.cssClasses.textDirectionRtl
                : o.cssClasses.textDirectionLtr
            ),
            (f = L(y, o.cssClasses.base)),
            (function (t, e) {
              var r = L(e, o.cssClasses.connects);
              (d = []), (m = []).push(T(r, t[0]));
              for (var n = 0; n < o.handles; n++)
                d.push(j(e, n)), (C[n] = n), m.push(T(r, t[n + 1]));
            })(o.connect, f),
            (b = o.events).fixed ||
              d.forEach(function (t, e) {
                G(w.start, t.children[0], et, { handleNumbers: [e] });
              }),
            b.tap && G(w.start, f, rt, {}),
            b.hover && G(w.move, f, nt, { hover: !0 }),
            b.drag &&
              m.forEach(function (t, e) {
                if (!1 !== t && 0 !== e && e !== m.length - 1) {
                  var r = d[e - 1],
                    n = d[e],
                    i = [t],
                    a = [r, n],
                    s = [e - 1, e];
                  c(t, o.cssClasses.draggable),
                    b.fixed && (i.push(r.children[0]), i.push(n.children[0])),
                    b.dragAll && ((a = d), (s = C)),
                    i.forEach(function (e) {
                      G(w.start, e, et, { handles: a, handleNumbers: s, connect: t });
                    });
                }
              }),
            mt(o.start),
            o.pips && I(o.pips),
            o.tooltips && _(),
            ot('update' + N),
            it('update' + N, function (t, e, r, n, i) {
              C.forEach(function (t) {
                var e = d[t],
                  n = st(M, t, 0, !0, !0, !0),
                  a = st(M, t, 100, !0, !0, !0),
                  s = i[t],
                  l = String(o.ariaFormat.to(r[t]));
                (n = k.fromStepping(n).toFixed(1)),
                  (a = k.fromStepping(a).toFixed(1)),
                  (s = k.fromStepping(s).toFixed(1)),
                  e.children[0].setAttribute('aria-valuemin', n),
                  e.children[0].setAttribute('aria-valuemax', a),
                  e.children[0].setAttribute('aria-valuenow', s),
                  e.children[0].setAttribute('aria-valuetext', l);
              });
            });
          var bt = {
            destroy: function () {
              for (
                ot(N),
                  ot(E),
                  Object.keys(o.cssClasses).forEach(function (t) {
                    h(S, o.cssClasses[t]);
                  });
                S.firstChild;

              )
                S.removeChild(S.firstChild);
              delete S.noUiSlider;
            },
            steps: function () {
              return C.map(vt);
            },
            on: it,
            off: ot,
            get: gt,
            set: mt,
            setHandle: function (t, e, r, n) {
              if (!((t = Number(t)) >= 0 && t < C.length))
                throw new Error('noUiSlider: invalid handle number, got: ' + t);
              pt(t, dt(e, t), !0, !0, n), at('update', t), r && at('set', t);
            },
            reset: function (t) {
              mt(o.start, t);
            },
            __moveHandles: function (t, e, r) {
              ut(t, e, M, r);
            },
            options: u,
            updateOptions: function (t, e) {
              var r = gt(),
                i = [
                  'margin',
                  'limit',
                  'padding',
                  'range',
                  'animate',
                  'snap',
                  'step',
                  'format',
                  'pips',
                  'tooltips',
                ];
              i.forEach(function (e) {
                void 0 !== t[e] && (u[e] = t[e]);
              });
              var a = Z(u);
              i.forEach(function (e) {
                void 0 !== t[e] && (o[e] = a[e]);
              }),
                (k = a.spectrum),
                (o.margin = a.margin),
                (o.limit = a.limit),
                (o.padding = a.padding),
                o.pips ? I(o.pips) : Y(),
                o.tooltips ? _() : F(),
                (M = []),
                mt(n(t.start) ? t.start : r, e);
            },
            target: S,
            removePips: Y,
            removeTooltips: F,
            getPositions: function () {
              return M.slice();
            },
            getTooltips: function () {
              return v;
            },
            getOrigins: function () {
              return d;
            },
            pips: I,
          };
          return bt;
        }
        function J(t, e) {
          if (!t || !t.nodeName)
            throw new Error('noUiSlider: create requires a single element, got: ' + t);
          if (t.noUiSlider)
            throw new Error('noUiSlider: Slider was already initialized.');
          var r = G(t, Z(e), e);
          return (t.noUiSlider = r), r;
        }
        var K = { __spectrum: w, cssClasses: S, create: J };
        (t.create = J),
          (t.cssClasses = S),
          (t.default = K),
          Object.defineProperty(t, '__esModule', { value: !0 });
      })(e);
    },
  },
]);
