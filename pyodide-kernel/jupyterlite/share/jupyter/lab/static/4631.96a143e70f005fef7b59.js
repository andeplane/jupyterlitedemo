(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [4631],
  {
    4631: function (e) {
      (function (t, r) {
        true ? (e.exports = r()) : 0;
      })(this, function () {
        'use strict';
        var e = navigator.userAgent;
        var t = navigator.platform;
        var r = /gecko\/\d/i.test(e);
        var i = /MSIE \d/.test(e);
        var n = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e);
        var o = /Edge\/(\d+)/.exec(e);
        var l = i || n || o;
        var a = l && (i ? document.documentMode || 6 : +(o || n)[1]);
        var s = !o && /WebKit\//.test(e);
        var u = s && /Qt\/\d+\.\d+/.test(e);
        var f = !o && /Chrome\//.test(e);
        var c = /Opera\//.test(e);
        var h = /Apple Computer/.test(navigator.vendor);
        var d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e);
        var p = /PhantomJS/.test(e);
        var v = h && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2);
        var g = /Android/.test(e);
        var m = v || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e);
        var y = v || /Mac/.test(t);
        var b = /\bCrOS\b/.test(e);
        var w = /win/i.test(t);
        var x = c && e.match(/Version\/(\d*\.\d*)/);
        if (x) {
          x = Number(x[1]);
        }
        if (x && x >= 15) {
          c = false;
          s = true;
        }
        var C = y && (u || (c && (x == null || x < 12.11)));
        var S = r || (l && a >= 9);
        function L(e) {
          return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
        }
        var k = function (e, t) {
          var r = e.className;
          var i = L(t).exec(r);
          if (i) {
            var n = r.slice(i.index + i[0].length);
            e.className = r.slice(0, i.index) + (n ? i[1] + n : '');
          }
        };
        function T(e) {
          for (var t = e.childNodes.length; t > 0; --t) {
            e.removeChild(e.firstChild);
          }
          return e;
        }
        function M(e, t) {
          return T(e).appendChild(t);
        }
        function N(e, t, r, i) {
          var n = document.createElement(e);
          if (r) {
            n.className = r;
          }
          if (i) {
            n.style.cssText = i;
          }
          if (typeof t == 'string') {
            n.appendChild(document.createTextNode(t));
          } else if (t) {
            for (var o = 0; o < t.length; ++o) {
              n.appendChild(t[o]);
            }
          }
          return n;
        }
        function O(e, t, r, i) {
          var n = N(e, t, r, i);
          n.setAttribute('role', 'presentation');
          return n;
        }
        var A;
        if (document.createRange) {
          A = function (e, t, r, i) {
            var n = document.createRange();
            n.setEnd(i || e, r);
            n.setStart(e, t);
            return n;
          };
        } else {
          A = function (e, t, r) {
            var i = document.body.createTextRange();
            try {
              i.moveToElementText(e.parentNode);
            } catch (n) {
              return i;
            }
            i.collapse(true);
            i.moveEnd('character', r);
            i.moveStart('character', t);
            return i;
          };
        }
        function D(e, t) {
          if (t.nodeType == 3) {
            t = t.parentNode;
          }
          if (e.contains) {
            return e.contains(t);
          }
          do {
            if (t.nodeType == 11) {
              t = t.host;
            }
            if (t == e) {
              return true;
            }
          } while ((t = t.parentNode));
        }
        function W() {
          var e;
          try {
            e = document.activeElement;
          } catch (t) {
            e = document.body || null;
          }
          while (e && e.shadowRoot && e.shadowRoot.activeElement) {
            e = e.shadowRoot.activeElement;
          }
          return e;
        }
        function H(e, t) {
          var r = e.className;
          if (!L(t).test(r)) {
            e.className += (r ? ' ' : '') + t;
          }
        }
        function F(e, t) {
          var r = e.split(' ');
          for (var i = 0; i < r.length; i++) {
            if (r[i] && !L(r[i]).test(t)) {
              t += ' ' + r[i];
            }
          }
          return t;
        }
        var P = function (e) {
          e.select();
        };
        if (v) {
          P = function (e) {
            e.selectionStart = 0;
            e.selectionEnd = e.value.length;
          };
        } else if (l) {
          P = function (e) {
            try {
              e.select();
            } catch (t) {}
          };
        }
        function E(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function () {
            return e.apply(null, t);
          };
        }
        function I(e, t, r) {
          if (!t) {
            t = {};
          }
          for (var i in e) {
            if (e.hasOwnProperty(i) && (r !== false || !t.hasOwnProperty(i))) {
              t[i] = e[i];
            }
          }
          return t;
        }
        function z(e, t, r, i, n) {
          if (t == null) {
            t = e.search(/[^\s\u00a0]/);
            if (t == -1) {
              t = e.length;
            }
          }
          for (var o = i || 0, l = n || 0; ; ) {
            var a = e.indexOf('\t', o);
            if (a < 0 || a >= t) {
              return l + (t - o);
            }
            l += a - o;
            l += r - (l % r);
            o = a + 1;
          }
        }
        var R = function () {
          this.id = null;
          this.f = null;
          this.time = 0;
          this.handler = E(this.onTimeout, this);
        };
        R.prototype.onTimeout = function (e) {
          e.id = 0;
          if (e.time <= +new Date()) {
            e.f();
          } else {
            setTimeout(e.handler, e.time - +new Date());
          }
        };
        R.prototype.set = function (e, t) {
          this.f = t;
          var r = +new Date() + e;
          if (!this.id || r < this.time) {
            clearTimeout(this.id);
            this.id = setTimeout(this.handler, e);
            this.time = r;
          }
        };
        function B(e, t) {
          for (var r = 0; r < e.length; ++r) {
            if (e[r] == t) {
              return r;
            }
          }
          return -1;
        }
        var G = 50;
        var U = {
          toString: function () {
            return 'CodeMirror.Pass';
          },
        };
        var V = { scroll: false },
          K = { origin: '*mouse' },
          j = { origin: '+move' };
        function X(e, t, r) {
          for (var i = 0, n = 0; ; ) {
            var o = e.indexOf('\t', i);
            if (o == -1) {
              o = e.length;
            }
            var l = o - i;
            if (o == e.length || n + l >= t) {
              return i + Math.min(l, t - n);
            }
            n += o - i;
            n += r - (n % r);
            i = o + 1;
            if (n >= t) {
              return i;
            }
          }
        }
        var _ = [''];
        function Y(e) {
          while (_.length <= e) {
            _.push($(_) + ' ');
          }
          return _[e];
        }
        function $(e) {
          return e[e.length - 1];
        }
        function q(e, t) {
          var r = [];
          for (var i = 0; i < e.length; i++) {
            r[i] = t(e[i], i);
          }
          return r;
        }
        function Z(e, t, r) {
          var i = 0,
            n = r(t);
          while (i < e.length && r(e[i]) <= n) {
            i++;
          }
          e.splice(i, 0, t);
        }
        function Q() {}
        function J(e, t) {
          var r;
          if (Object.create) {
            r = Object.create(e);
          } else {
            Q.prototype = e;
            r = new Q();
          }
          if (t) {
            I(t, r);
          }
          return r;
        }
        var ee =
          /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function te(e) {
          return (
            /\w/.test(e) ||
            (e > '' && (e.toUpperCase() != e.toLowerCase() || ee.test(e)))
          );
        }
        function re(e, t) {
          if (!t) {
            return te(e);
          }
          if (t.source.indexOf('\\w') > -1 && te(e)) {
            return true;
          }
          return t.test(e);
        }
        function ie(e) {
          for (var t in e) {
            if (e.hasOwnProperty(t) && e[t]) {
              return false;
            }
          }
          return true;
        }
        var ne =
          /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function oe(e) {
          return e.charCodeAt(0) >= 768 && ne.test(e);
        }
        function le(e, t, r) {
          while ((r < 0 ? t > 0 : t < e.length) && oe(e.charAt(t))) {
            t += r;
          }
          return t;
        }
        function ae(e, t, r) {
          var i = t > r ? -1 : 1;
          for (;;) {
            if (t == r) {
              return t;
            }
            var n = (t + r) / 2,
              o = i < 0 ? Math.ceil(n) : Math.floor(n);
            if (o == t) {
              return e(o) ? t : r;
            }
            if (e(o)) {
              r = o;
            } else {
              t = o + i;
            }
          }
        }
        function se(e, t, r, i) {
          if (!e) {
            return i(t, r, 'ltr', 0);
          }
          var n = false;
          for (var o = 0; o < e.length; ++o) {
            var l = e[o];
            if ((l.from < r && l.to > t) || (t == r && l.to == t)) {
              i(
                Math.max(l.from, t),
                Math.min(l.to, r),
                l.level == 1 ? 'rtl' : 'ltr',
                o
              );
              n = true;
            }
          }
          if (!n) {
            i(t, r, 'ltr');
          }
        }
        var ue = null;
        function fe(e, t, r) {
          var i;
          ue = null;
          for (var n = 0; n < e.length; ++n) {
            var o = e[n];
            if (o.from < t && o.to > t) {
              return n;
            }
            if (o.to == t) {
              if (o.from != o.to && r == 'before') {
                i = n;
              } else {
                ue = n;
              }
            }
            if (o.from == t) {
              if (o.from != o.to && r != 'before') {
                i = n;
              } else {
                ue = n;
              }
            }
          }
          return i != null ? i : ue;
        }
        var ce = (function () {
          var e =
            'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN';
          var t =
            'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
          function r(r) {
            if (r <= 247) {
              return e.charAt(r);
            } else if (1424 <= r && r <= 1524) {
              return 'R';
            } else if (1536 <= r && r <= 1785) {
              return t.charAt(r - 1536);
            } else if (1774 <= r && r <= 2220) {
              return 'r';
            } else if (8192 <= r && r <= 8203) {
              return 'w';
            } else if (r == 8204) {
              return 'b';
            } else {
              return 'L';
            }
          }
          var i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
          var n = /[stwN]/,
            o = /[LRr]/,
            l = /[Lb1n]/,
            a = /[1n]/;
          function s(e, t, r) {
            this.level = e;
            this.from = t;
            this.to = r;
          }
          return function (e, t) {
            var u = t == 'ltr' ? 'L' : 'R';
            if (e.length == 0 || (t == 'ltr' && !i.test(e))) {
              return false;
            }
            var f = e.length,
              c = [];
            for (var h = 0; h < f; ++h) {
              c.push(r(e.charCodeAt(h)));
            }
            for (var d = 0, p = u; d < f; ++d) {
              var v = c[d];
              if (v == 'm') {
                c[d] = p;
              } else {
                p = v;
              }
            }
            for (var g = 0, m = u; g < f; ++g) {
              var y = c[g];
              if (y == '1' && m == 'r') {
                c[g] = 'n';
              } else if (o.test(y)) {
                m = y;
                if (y == 'r') {
                  c[g] = 'R';
                }
              }
            }
            for (var b = 1, w = c[0]; b < f - 1; ++b) {
              var x = c[b];
              if (x == '+' && w == '1' && c[b + 1] == '1') {
                c[b] = '1';
              } else if (x == ',' && w == c[b + 1] && (w == '1' || w == 'n')) {
                c[b] = w;
              }
              w = x;
            }
            for (var C = 0; C < f; ++C) {
              var S = c[C];
              if (S == ',') {
                c[C] = 'N';
              } else if (S == '%') {
                var L = void 0;
                for (L = C + 1; L < f && c[L] == '%'; ++L) {}
                var k = (C && c[C - 1] == '!') || (L < f && c[L] == '1') ? '1' : 'N';
                for (var T = C; T < L; ++T) {
                  c[T] = k;
                }
                C = L - 1;
              }
            }
            for (var M = 0, N = u; M < f; ++M) {
              var O = c[M];
              if (N == 'L' && O == '1') {
                c[M] = 'L';
              } else if (o.test(O)) {
                N = O;
              }
            }
            for (var A = 0; A < f; ++A) {
              if (n.test(c[A])) {
                var D = void 0;
                for (D = A + 1; D < f && n.test(c[D]); ++D) {}
                var W = (A ? c[A - 1] : u) == 'L';
                var H = (D < f ? c[D] : u) == 'L';
                var F = W == H ? (W ? 'L' : 'R') : u;
                for (var P = A; P < D; ++P) {
                  c[P] = F;
                }
                A = D - 1;
              }
            }
            var E = [],
              I;
            for (var z = 0; z < f; ) {
              if (l.test(c[z])) {
                var R = z;
                for (++z; z < f && l.test(c[z]); ++z) {}
                E.push(new s(0, R, z));
              } else {
                var B = z,
                  G = E.length,
                  U = t == 'rtl' ? 1 : 0;
                for (++z; z < f && c[z] != 'L'; ++z) {}
                for (var V = B; V < z; ) {
                  if (a.test(c[V])) {
                    if (B < V) {
                      E.splice(G, 0, new s(1, B, V));
                      G += U;
                    }
                    var K = V;
                    for (++V; V < z && a.test(c[V]); ++V) {}
                    E.splice(G, 0, new s(2, K, V));
                    G += U;
                    B = V;
                  } else {
                    ++V;
                  }
                }
                if (B < z) {
                  E.splice(G, 0, new s(1, B, z));
                }
              }
            }
            if (t == 'ltr') {
              if (E[0].level == 1 && (I = e.match(/^\s+/))) {
                E[0].from = I[0].length;
                E.unshift(new s(0, 0, I[0].length));
              }
              if ($(E).level == 1 && (I = e.match(/\s+$/))) {
                $(E).to -= I[0].length;
                E.push(new s(0, f - I[0].length, f));
              }
            }
            return t == 'rtl' ? E.reverse() : E;
          };
        })();
        function he(e, t) {
          var r = e.order;
          if (r == null) {
            r = e.order = ce(e.text, t);
          }
          return r;
        }
        var de = [];
        var pe = function (e, t, r) {
          if (e.addEventListener) {
            e.addEventListener(t, r, false);
          } else if (e.attachEvent) {
            e.attachEvent('on' + t, r);
          } else {
            var i = e._handlers || (e._handlers = {});
            i[t] = (i[t] || de).concat(r);
          }
        };
        function ve(e, t) {
          return (e._handlers && e._handlers[t]) || de;
        }
        function ge(e, t, r) {
          if (e.removeEventListener) {
            e.removeEventListener(t, r, false);
          } else if (e.detachEvent) {
            e.detachEvent('on' + t, r);
          } else {
            var i = e._handlers,
              n = i && i[t];
            if (n) {
              var o = B(n, r);
              if (o > -1) {
                i[t] = n.slice(0, o).concat(n.slice(o + 1));
              }
            }
          }
        }
        function me(e, t) {
          var r = ve(e, t);
          if (!r.length) {
            return;
          }
          var i = Array.prototype.slice.call(arguments, 2);
          for (var n = 0; n < r.length; ++n) {
            r[n].apply(null, i);
          }
        }
        function ye(e, t, r) {
          if (typeof t == 'string') {
            t = {
              type: t,
              preventDefault: function () {
                this.defaultPrevented = true;
              },
            };
          }
          me(e, r || t.type, e, t);
          return Le(t) || t.codemirrorIgnore;
        }
        function be(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (!t) {
            return;
          }
          var r =
            e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []);
          for (var i = 0; i < t.length; ++i) {
            if (B(r, t[i]) == -1) {
              r.push(t[i]);
            }
          }
        }
        function we(e, t) {
          return ve(e, t).length > 0;
        }
        function xe(e) {
          e.prototype.on = function (e, t) {
            pe(this, e, t);
          };
          e.prototype.off = function (e, t) {
            ge(this, e, t);
          };
        }
        function Ce(e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        function Se(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else {
            e.cancelBubble = true;
          }
        }
        function Le(e) {
          return e.defaultPrevented != null
            ? e.defaultPrevented
            : e.returnValue == false;
        }
        function ke(e) {
          Ce(e);
          Se(e);
        }
        function Te(e) {
          return e.target || e.srcElement;
        }
        function Me(e) {
          var t = e.which;
          if (t == null) {
            if (e.button & 1) {
              t = 1;
            } else if (e.button & 2) {
              t = 3;
            } else if (e.button & 4) {
              t = 2;
            }
          }
          if (y && e.ctrlKey && t == 1) {
            t = 3;
          }
          return t;
        }
        var Ne = (function () {
          if (l && a < 9) {
            return false;
          }
          var e = N('div');
          return 'draggable' in e || 'dragDrop' in e;
        })();
        var Oe;
        function Ae(e) {
          if (Oe == null) {
            var t = N('span', '​');
            M(e, N('span', [t, document.createTextNode('x')]));
            if (e.firstChild.offsetHeight != 0) {
              Oe = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && a < 8);
            }
          }
          var r = Oe
            ? N('span', '​')
            : N(
                'span',
                ' ',
                null,
                'display: inline-block; width: 1px; margin-right: -1px'
              );
          r.setAttribute('cm-text', '');
          return r;
        }
        var De;
        function We(e) {
          if (De != null) {
            return De;
          }
          var t = M(e, document.createTextNode('AخA'));
          var r = A(t, 0, 1).getBoundingClientRect();
          var i = A(t, 1, 2).getBoundingClientRect();
          T(e);
          if (!r || r.left == r.right) {
            return false;
          }
          return (De = i.right - r.right < 3);
        }
        var He =
          '\n\nb'.split(/\n/).length != 3
            ? function (e) {
                var t = 0,
                  r = [],
                  i = e.length;
                while (t <= i) {
                  var n = e.indexOf('\n', t);
                  if (n == -1) {
                    n = e.length;
                  }
                  var o = e.slice(t, e.charAt(n - 1) == '\r' ? n - 1 : n);
                  var l = o.indexOf('\r');
                  if (l != -1) {
                    r.push(o.slice(0, l));
                    t += l + 1;
                  } else {
                    r.push(o);
                    t = n + 1;
                  }
                }
                return r;
              }
            : function (e) {
                return e.split(/\r\n?|\n/);
              };
        var Fe = window.getSelection
          ? function (e) {
              try {
                return e.selectionStart != e.selectionEnd;
              } catch (t) {
                return false;
              }
            }
          : function (e) {
              var t;
              try {
                t = e.ownerDocument.selection.createRange();
              } catch (r) {}
              if (!t || t.parentElement() != e) {
                return false;
              }
              return t.compareEndPoints('StartToEnd', t) != 0;
            };
        var Pe = (function () {
          var e = N('div');
          if ('oncopy' in e) {
            return true;
          }
          e.setAttribute('oncopy', 'return;');
          return typeof e.oncopy == 'function';
        })();
        var Ee = null;
        function Ie(e) {
          if (Ee != null) {
            return Ee;
          }
          var t = M(e, N('span', 'x'));
          var r = t.getBoundingClientRect();
          var i = A(t, 0, 1).getBoundingClientRect();
          return (Ee = Math.abs(r.left - i.left) > 1);
        }
        var ze = {},
          Re = {};
        function Be(e, t) {
          if (arguments.length > 2) {
            t.dependencies = Array.prototype.slice.call(arguments, 2);
          }
          ze[e] = t;
        }
        function Ge(e, t) {
          Re[e] = t;
        }
        function Ue(e) {
          if (typeof e == 'string' && Re.hasOwnProperty(e)) {
            e = Re[e];
          } else if (e && typeof e.name == 'string' && Re.hasOwnProperty(e.name)) {
            var t = Re[e.name];
            if (typeof t == 'string') {
              t = { name: t };
            }
            e = J(t, e);
            e.name = t.name;
          } else if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) {
            return Ue('application/xml');
          } else if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) {
            return Ue('application/json');
          }
          if (typeof e == 'string') {
            return { name: e };
          } else {
            return e || { name: 'null' };
          }
        }
        function Ve(e, t) {
          t = Ue(t);
          var r = ze[t.name];
          if (!r) {
            return Ve(e, 'text/plain');
          }
          var i = r(e, t);
          if (Ke.hasOwnProperty(t.name)) {
            var n = Ke[t.name];
            for (var o in n) {
              if (!n.hasOwnProperty(o)) {
                continue;
              }
              if (i.hasOwnProperty(o)) {
                i['_' + o] = i[o];
              }
              i[o] = n[o];
            }
          }
          i.name = t.name;
          if (t.helperType) {
            i.helperType = t.helperType;
          }
          if (t.modeProps) {
            for (var l in t.modeProps) {
              i[l] = t.modeProps[l];
            }
          }
          return i;
        }
        var Ke = {};
        function je(e, t) {
          var r = Ke.hasOwnProperty(e) ? Ke[e] : (Ke[e] = {});
          I(t, r);
        }
        function Xe(e, t) {
          if (t === true) {
            return t;
          }
          if (e.copyState) {
            return e.copyState(t);
          }
          var r = {};
          for (var i in t) {
            var n = t[i];
            if (n instanceof Array) {
              n = n.concat([]);
            }
            r[i] = n;
          }
          return r;
        }
        function _e(e, t) {
          var r;
          while (e.innerMode) {
            r = e.innerMode(t);
            if (!r || r.mode == e) {
              break;
            }
            t = r.state;
            e = r.mode;
          }
          return r || { mode: e, state: t };
        }
        function Ye(e, t, r) {
          return e.startState ? e.startState(t, r) : true;
        }
        var $e = function (e, t, r) {
          this.pos = this.start = 0;
          this.string = e;
          this.tabSize = t || 8;
          this.lastColumnPos = this.lastColumnValue = 0;
          this.lineStart = 0;
          this.lineOracle = r;
        };
        $e.prototype.eol = function () {
          return this.pos >= this.string.length;
        };
        $e.prototype.sol = function () {
          return this.pos == this.lineStart;
        };
        $e.prototype.peek = function () {
          return this.string.charAt(this.pos) || undefined;
        };
        $e.prototype.next = function () {
          if (this.pos < this.string.length) {
            return this.string.charAt(this.pos++);
          }
        };
        $e.prototype.eat = function (e) {
          var t = this.string.charAt(this.pos);
          var r;
          if (typeof e == 'string') {
            r = t == e;
          } else {
            r = t && (e.test ? e.test(t) : e(t));
          }
          if (r) {
            ++this.pos;
            return t;
          }
        };
        $e.prototype.eatWhile = function (e) {
          var t = this.pos;
          while (this.eat(e)) {}
          return this.pos > t;
        };
        $e.prototype.eatSpace = function () {
          var e = this.pos;
          while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
            ++this.pos;
          }
          return this.pos > e;
        };
        $e.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        };
        $e.prototype.skipTo = function (e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) {
            this.pos = t;
            return true;
          }
        };
        $e.prototype.backUp = function (e) {
          this.pos -= e;
        };
        $e.prototype.column = function () {
          if (this.lastColumnPos < this.start) {
            this.lastColumnValue = z(
              this.string,
              this.start,
              this.tabSize,
              this.lastColumnPos,
              this.lastColumnValue
            );
            this.lastColumnPos = this.start;
          }
          return (
            this.lastColumnValue -
            (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
          );
        };
        $e.prototype.indentation = function () {
          return (
            z(this.string, null, this.tabSize) -
            (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
          );
        };
        $e.prototype.match = function (e, t, r) {
          if (typeof e == 'string') {
            var i = function (e) {
              return r ? e.toLowerCase() : e;
            };
            var n = this.string.substr(this.pos, e.length);
            if (i(n) == i(e)) {
              if (t !== false) {
                this.pos += e.length;
              }
              return true;
            }
          } else {
            var o = this.string.slice(this.pos).match(e);
            if (o && o.index > 0) {
              return null;
            }
            if (o && t !== false) {
              this.pos += o[0].length;
            }
            return o;
          }
        };
        $e.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        };
        $e.prototype.hideFirstChars = function (e, t) {
          this.lineStart += e;
          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        };
        $e.prototype.lookAhead = function (e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        };
        $e.prototype.baseToken = function () {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        };
        function qe(e, t) {
          t -= e.first;
          if (t < 0 || t >= e.size) {
            throw new Error('There is no line ' + (t + e.first) + ' in the document.');
          }
          var r = e;
          while (!r.lines) {
            for (var i = 0; ; ++i) {
              var n = r.children[i],
                o = n.chunkSize();
              if (t < o) {
                r = n;
                break;
              }
              t -= o;
            }
          }
          return r.lines[t];
        }
        function Ze(e, t, r) {
          var i = [],
            n = t.line;
          e.iter(t.line, r.line + 1, function (e) {
            var o = e.text;
            if (n == r.line) {
              o = o.slice(0, r.ch);
            }
            if (n == t.line) {
              o = o.slice(t.ch);
            }
            i.push(o);
            ++n;
          });
          return i;
        }
        function Qe(e, t, r) {
          var i = [];
          e.iter(t, r, function (e) {
            i.push(e.text);
          });
          return i;
        }
        function Je(e, t) {
          var r = t - e.height;
          if (r) {
            for (var i = e; i; i = i.parent) {
              i.height += r;
            }
          }
        }
        function et(e) {
          if (e.parent == null) {
            return null;
          }
          var t = e.parent,
            r = B(t.lines, e);
          for (var i = t.parent; i; t = i, i = i.parent) {
            for (var n = 0; ; ++n) {
              if (i.children[n] == t) {
                break;
              }
              r += i.children[n].chunkSize();
            }
          }
          return r + t.first;
        }
        function tt(e, t) {
          var r = e.first;
          e: do {
            for (var i = 0; i < e.children.length; ++i) {
              var n = e.children[i],
                o = n.height;
              if (t < o) {
                e = n;
                continue e;
              }
              t -= o;
              r += n.chunkSize();
            }
            return r;
          } while (!e.lines);
          var l = 0;
          for (; l < e.lines.length; ++l) {
            var a = e.lines[l],
              s = a.height;
            if (t < s) {
              break;
            }
            t -= s;
          }
          return r + l;
        }
        function rt(e, t) {
          return t >= e.first && t < e.first + e.size;
        }
        function it(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function nt(e, t, r) {
          if (r === void 0) r = null;
          if (!(this instanceof nt)) {
            return new nt(e, t, r);
          }
          this.line = e;
          this.ch = t;
          this.sticky = r;
        }
        function ot(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        function lt(e, t) {
          return e.sticky == t.sticky && ot(e, t) == 0;
        }
        function at(e) {
          return nt(e.line, e.ch);
        }
        function st(e, t) {
          return ot(e, t) < 0 ? t : e;
        }
        function ut(e, t) {
          return ot(e, t) < 0 ? e : t;
        }
        function ft(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function ct(e, t) {
          if (t.line < e.first) {
            return nt(e.first, 0);
          }
          var r = e.first + e.size - 1;
          if (t.line > r) {
            return nt(r, qe(e, r).text.length);
          }
          return ht(t, qe(e, t.line).text.length);
        }
        function ht(e, t) {
          var r = e.ch;
          if (r == null || r > t) {
            return nt(e.line, t);
          } else if (r < 0) {
            return nt(e.line, 0);
          } else {
            return e;
          }
        }
        function dt(e, t) {
          var r = [];
          for (var i = 0; i < t.length; i++) {
            r[i] = ct(e, t[i]);
          }
          return r;
        }
        var pt = function (e, t) {
          this.state = e;
          this.lookAhead = t;
        };
        var vt = function (e, t, r, i) {
          this.state = t;
          this.doc = e;
          this.line = r;
          this.maxLookAhead = i || 0;
          this.baseTokens = null;
          this.baseTokenPos = 1;
        };
        vt.prototype.lookAhead = function (e) {
          var t = this.doc.getLine(this.line + e);
          if (t != null && e > this.maxLookAhead) {
            this.maxLookAhead = e;
          }
          return t;
        };
        vt.prototype.baseToken = function (e) {
          if (!this.baseTokens) {
            return null;
          }
          while (this.baseTokens[this.baseTokenPos] <= e) {
            this.baseTokenPos += 2;
          }
          var t = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: t && t.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - e,
          };
        };
        vt.prototype.nextLine = function () {
          this.line++;
          if (this.maxLookAhead > 0) {
            this.maxLookAhead--;
          }
        };
        vt.fromSaved = function (e, t, r) {
          if (t instanceof pt) {
            return new vt(e, Xe(e.mode, t.state), r, t.lookAhead);
          } else {
            return new vt(e, Xe(e.mode, t), r);
          }
        };
        vt.prototype.save = function (e) {
          var t = e !== false ? Xe(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new pt(t, this.maxLookAhead) : t;
        };
        function gt(e, t, r, i) {
          var n = [e.state.modeGen],
            o = {};
          kt(
            e,
            t.text,
            e.doc.mode,
            r,
            function (e, t) {
              return n.push(e, t);
            },
            o,
            i
          );
          var l = r.state;
          var a = function (i) {
            r.baseTokens = n;
            var a = e.state.overlays[i],
              s = 1,
              u = 0;
            r.state = true;
            kt(
              e,
              t.text,
              a.mode,
              r,
              function (e, t) {
                var r = s;
                while (u < e) {
                  var i = n[s];
                  if (i > e) {
                    n.splice(s, 1, e, n[s + 1], i);
                  }
                  s += 2;
                  u = Math.min(e, i);
                }
                if (!t) {
                  return;
                }
                if (a.opaque) {
                  n.splice(r, s - r, e, 'overlay ' + t);
                  s = r + 2;
                } else {
                  for (; r < s; r += 2) {
                    var o = n[r + 1];
                    n[r + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                  }
                }
              },
              o
            );
            r.state = l;
            r.baseTokens = null;
            r.baseTokenPos = 1;
          };
          for (var s = 0; s < e.state.overlays.length; ++s) a(s);
          return { styles: n, classes: o.bgClass || o.textClass ? o : null };
        }
        function mt(e, t, r) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var i = yt(e, et(t));
            var n =
              t.text.length > e.options.maxHighlightLength && Xe(e.doc.mode, i.state);
            var o = gt(e, t, i);
            if (n) {
              i.state = n;
            }
            t.stateAfter = i.save(!n);
            t.styles = o.styles;
            if (o.classes) {
              t.styleClasses = o.classes;
            } else if (t.styleClasses) {
              t.styleClasses = null;
            }
            if (r === e.doc.highlightFrontier) {
              e.doc.modeFrontier = Math.max(
                e.doc.modeFrontier,
                ++e.doc.highlightFrontier
              );
            }
          }
          return t.styles;
        }
        function yt(e, t, r) {
          var i = e.doc,
            n = e.display;
          if (!i.mode.startState) {
            return new vt(i, true, t);
          }
          var o = Tt(e, t, r);
          var l = o > i.first && qe(i, o - 1).stateAfter;
          var a = l ? vt.fromSaved(i, l, o) : new vt(i, Ye(i.mode), o);
          i.iter(o, t, function (r) {
            bt(e, r.text, a);
            var i = a.line;
            r.stateAfter =
              i == t - 1 || i % 5 == 0 || (i >= n.viewFrom && i < n.viewTo)
                ? a.save()
                : null;
            a.nextLine();
          });
          if (r) {
            i.modeFrontier = a.line;
          }
          return a;
        }
        function bt(e, t, r, i) {
          var n = e.doc.mode;
          var o = new $e(t, e.options.tabSize, r);
          o.start = o.pos = i || 0;
          if (t == '') {
            wt(n, r.state);
          }
          while (!o.eol()) {
            xt(n, o, r.state);
            o.start = o.pos;
          }
        }
        function wt(e, t) {
          if (e.blankLine) {
            return e.blankLine(t);
          }
          if (!e.innerMode) {
            return;
          }
          var r = _e(e, t);
          if (r.mode.blankLine) {
            return r.mode.blankLine(r.state);
          }
        }
        function xt(e, t, r, i) {
          for (var n = 0; n < 10; n++) {
            if (i) {
              i[0] = _e(e, r).mode;
            }
            var o = e.token(t, r);
            if (t.pos > t.start) {
              return o;
            }
          }
          throw new Error('Mode ' + e.name + ' failed to advance stream.');
        }
        var Ct = function (e, t, r) {
          this.start = e.start;
          this.end = e.pos;
          this.string = e.current();
          this.type = t || null;
          this.state = r;
        };
        function St(e, t, r, i) {
          var n = e.doc,
            o = n.mode,
            l;
          t = ct(n, t);
          var a = qe(n, t.line),
            s = yt(e, t.line, r);
          var u = new $e(a.text, e.options.tabSize, s),
            f;
          if (i) {
            f = [];
          }
          while ((i || u.pos < t.ch) && !u.eol()) {
            u.start = u.pos;
            l = xt(o, u, s.state);
            if (i) {
              f.push(new Ct(u, l, Xe(n.mode, s.state)));
            }
          }
          return i ? f : new Ct(u, l, s.state);
        }
        function Lt(e, t) {
          if (e) {
            for (;;) {
              var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!r) {
                break;
              }
              e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
              var i = r[1] ? 'bgClass' : 'textClass';
              if (t[i] == null) {
                t[i] = r[2];
              } else if (!new RegExp('(?:^|\\s)' + r[2] + '(?:$|\\s)').test(t[i])) {
                t[i] += ' ' + r[2];
              }
            }
          }
          return e;
        }
        function kt(e, t, r, i, n, o, l) {
          var a = r.flattenSpans;
          if (a == null) {
            a = e.options.flattenSpans;
          }
          var s = 0,
            u = null;
          var f = new $e(t, e.options.tabSize, i),
            c;
          var h = e.options.addModeClass && [null];
          if (t == '') {
            Lt(wt(r, i.state), o);
          }
          while (!f.eol()) {
            if (f.pos > e.options.maxHighlightLength) {
              a = false;
              if (l) {
                bt(e, t, i, f.pos);
              }
              f.pos = t.length;
              c = null;
            } else {
              c = Lt(xt(r, f, i.state, h), o);
            }
            if (h) {
              var d = h[0].name;
              if (d) {
                c = 'm-' + (c ? d + ' ' + c : d);
              }
            }
            if (!a || u != c) {
              while (s < f.start) {
                s = Math.min(f.start, s + 5e3);
                n(s, u);
              }
              u = c;
            }
            f.start = f.pos;
          }
          while (s < f.pos) {
            var p = Math.min(f.pos, s + 5e3);
            n(p, u);
            s = p;
          }
        }
        function Tt(e, t, r) {
          var i,
            n,
            o = e.doc;
          var l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100);
          for (var a = t; a > l; --a) {
            if (a <= o.first) {
              return o.first;
            }
            var s = qe(o, a - 1),
              u = s.stateAfter;
            if (
              u &&
              (!r || a + (u instanceof pt ? u.lookAhead : 0) <= o.modeFrontier)
            ) {
              return a;
            }
            var f = z(s.text, null, e.options.tabSize);
            if (n == null || i > f) {
              n = a - 1;
              i = f;
            }
          }
          return n;
        }
        function Mt(e, t) {
          e.modeFrontier = Math.min(e.modeFrontier, t);
          if (e.highlightFrontier < t - 10) {
            return;
          }
          var r = e.first;
          for (var i = t - 1; i > r; i--) {
            var n = qe(e, i).stateAfter;
            if (n && (!(n instanceof pt) || i + n.lookAhead < t)) {
              r = i + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, r);
        }
        var Nt = false,
          Ot = false;
        function At() {
          Nt = true;
        }
        function Dt() {
          Ot = true;
        }
        function Wt(e, t, r) {
          this.marker = e;
          this.from = t;
          this.to = r;
        }
        function Ht(e, t) {
          if (e) {
            for (var r = 0; r < e.length; ++r) {
              var i = e[r];
              if (i.marker == t) {
                return i;
              }
            }
          }
        }
        function Ft(e, t) {
          var r;
          for (var i = 0; i < e.length; ++i) {
            if (e[i] != t) {
              (r || (r = [])).push(e[i]);
            }
          }
          return r;
        }
        function Pt(e, t, r) {
          var i =
            r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet()));
          if (i && i.has(e.markedSpans)) {
            e.markedSpans.push(t);
          } else {
            e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t];
            if (i) {
              i.add(e.markedSpans);
            }
          }
          t.marker.attachLine(e);
        }
        function Et(e, t, r) {
          var i;
          if (e) {
            for (var n = 0; n < e.length; ++n) {
              var o = e[n],
                l = o.marker;
              var a = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
              if (
                a ||
                (o.from == t && l.type == 'bookmark' && (!r || !o.marker.insertLeft))
              ) {
                var s = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
                (i || (i = [])).push(new Wt(l, o.from, s ? null : o.to));
              }
            }
          }
          return i;
        }
        function It(e, t, r) {
          var i;
          if (e) {
            for (var n = 0; n < e.length; ++n) {
              var o = e[n],
                l = o.marker;
              var a = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
              if (
                a ||
                (o.from == t && l.type == 'bookmark' && (!r || o.marker.insertLeft))
              ) {
                var s = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
                (i || (i = [])).push(
                  new Wt(l, s ? null : o.from - t, o.to == null ? null : o.to - t)
                );
              }
            }
          }
          return i;
        }
        function zt(e, t) {
          if (t.full) {
            return null;
          }
          var r = rt(e, t.from.line) && qe(e, t.from.line).markedSpans;
          var i = rt(e, t.to.line) && qe(e, t.to.line).markedSpans;
          if (!r && !i) {
            return null;
          }
          var n = t.from.ch,
            o = t.to.ch,
            l = ot(t.from, t.to) == 0;
          var a = Et(r, n, l);
          var s = It(i, o, l);
          var u = t.text.length == 1,
            f = $(t.text).length + (u ? n : 0);
          if (a) {
            for (var c = 0; c < a.length; ++c) {
              var h = a[c];
              if (h.to == null) {
                var d = Ht(s, h.marker);
                if (!d) {
                  h.to = n;
                } else if (u) {
                  h.to = d.to == null ? null : d.to + f;
                }
              }
            }
          }
          if (s) {
            for (var p = 0; p < s.length; ++p) {
              var v = s[p];
              if (v.to != null) {
                v.to += f;
              }
              if (v.from == null) {
                var g = Ht(a, v.marker);
                if (!g) {
                  v.from = f;
                  if (u) {
                    (a || (a = [])).push(v);
                  }
                }
              } else {
                v.from += f;
                if (u) {
                  (a || (a = [])).push(v);
                }
              }
            }
          }
          if (a) {
            a = Rt(a);
          }
          if (s && s != a) {
            s = Rt(s);
          }
          var m = [a];
          if (!u) {
            var y = t.text.length - 2,
              b;
            if (y > 0 && a) {
              for (var w = 0; w < a.length; ++w) {
                if (a[w].to == null) {
                  (b || (b = [])).push(new Wt(a[w].marker, null, null));
                }
              }
            }
            for (var x = 0; x < y; ++x) {
              m.push(b);
            }
            m.push(s);
          }
          return m;
        }
        function Rt(e) {
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            if (r.from != null && r.from == r.to && r.marker.clearWhenEmpty !== false) {
              e.splice(t--, 1);
            }
          }
          if (!e.length) {
            return null;
          }
          return e;
        }
        function Bt(e, t, r) {
          var i = null;
          e.iter(t.line, r.line + 1, function (e) {
            if (e.markedSpans) {
              for (var t = 0; t < e.markedSpans.length; ++t) {
                var r = e.markedSpans[t].marker;
                if (r.readOnly && (!i || B(i, r) == -1)) {
                  (i || (i = [])).push(r);
                }
              }
            }
          });
          if (!i) {
            return null;
          }
          var n = [{ from: t, to: r }];
          for (var o = 0; o < i.length; ++o) {
            var l = i[o],
              a = l.find(0);
            for (var s = 0; s < n.length; ++s) {
              var u = n[s];
              if (ot(u.to, a.from) < 0 || ot(u.from, a.to) > 0) {
                continue;
              }
              var f = [s, 1],
                c = ot(u.from, a.from),
                h = ot(u.to, a.to);
              if (c < 0 || (!l.inclusiveLeft && !c)) {
                f.push({ from: u.from, to: a.from });
              }
              if (h > 0 || (!l.inclusiveRight && !h)) {
                f.push({ from: a.to, to: u.to });
              }
              n.splice.apply(n, f);
              s += f.length - 3;
            }
          }
          return n;
        }
        function Gt(e) {
          var t = e.markedSpans;
          if (!t) {
            return;
          }
          for (var r = 0; r < t.length; ++r) {
            t[r].marker.detachLine(e);
          }
          e.markedSpans = null;
        }
        function Ut(e, t) {
          if (!t) {
            return;
          }
          for (var r = 0; r < t.length; ++r) {
            t[r].marker.attachLine(e);
          }
          e.markedSpans = t;
        }
        function Vt(e) {
          return e.inclusiveLeft ? -1 : 0;
        }
        function Kt(e) {
          return e.inclusiveRight ? 1 : 0;
        }
        function jt(e, t) {
          var r = e.lines.length - t.lines.length;
          if (r != 0) {
            return r;
          }
          var i = e.find(),
            n = t.find();
          var o = ot(i.from, n.from) || Vt(e) - Vt(t);
          if (o) {
            return -o;
          }
          var l = ot(i.to, n.to) || Kt(e) - Kt(t);
          if (l) {
            return l;
          }
          return t.id - e.id;
        }
        function Xt(e, t) {
          var r = Ot && e.markedSpans,
            i;
          if (r) {
            for (var n = void 0, o = 0; o < r.length; ++o) {
              n = r[o];
              if (
                n.marker.collapsed &&
                (t ? n.from : n.to) == null &&
                (!i || jt(i, n.marker) < 0)
              ) {
                i = n.marker;
              }
            }
          }
          return i;
        }
        function _t(e) {
          return Xt(e, true);
        }
        function Yt(e) {
          return Xt(e, false);
        }
        function $t(e, t) {
          var r = Ot && e.markedSpans,
            i;
          if (r) {
            for (var n = 0; n < r.length; ++n) {
              var o = r[n];
              if (
                o.marker.collapsed &&
                (o.from == null || o.from < t) &&
                (o.to == null || o.to > t) &&
                (!i || jt(i, o.marker) < 0)
              ) {
                i = o.marker;
              }
            }
          }
          return i;
        }
        function qt(e, t, r, i, n) {
          var o = qe(e, t);
          var l = Ot && o.markedSpans;
          if (l) {
            for (var a = 0; a < l.length; ++a) {
              var s = l[a];
              if (!s.marker.collapsed) {
                continue;
              }
              var u = s.marker.find(0);
              var f = ot(u.from, r) || Vt(s.marker) - Vt(n);
              var c = ot(u.to, i) || Kt(s.marker) - Kt(n);
              if ((f >= 0 && c <= 0) || (f <= 0 && c >= 0)) {
                continue;
              }
              if (
                (f <= 0 &&
                  (s.marker.inclusiveRight && n.inclusiveLeft
                    ? ot(u.to, r) >= 0
                    : ot(u.to, r) > 0)) ||
                (f >= 0 &&
                  (s.marker.inclusiveRight && n.inclusiveLeft
                    ? ot(u.from, i) <= 0
                    : ot(u.from, i) < 0))
              ) {
                return true;
              }
            }
          }
        }
        function Zt(e) {
          var t;
          while ((t = _t(e))) {
            e = t.find(-1, true).line;
          }
          return e;
        }
        function Qt(e) {
          var t;
          while ((t = Yt(e))) {
            e = t.find(1, true).line;
          }
          return e;
        }
        function Jt(e) {
          var t, r;
          while ((t = Yt(e))) {
            e = t.find(1, true).line;
            (r || (r = [])).push(e);
          }
          return r;
        }
        function er(e, t) {
          var r = qe(e, t),
            i = Zt(r);
          if (r == i) {
            return t;
          }
          return et(i);
        }
        function tr(e, t) {
          if (t > e.lastLine()) {
            return t;
          }
          var r = qe(e, t),
            i;
          if (!rr(e, r)) {
            return t;
          }
          while ((i = Yt(r))) {
            r = i.find(1, true).line;
          }
          return et(r) + 1;
        }
        function rr(e, t) {
          var r = Ot && t.markedSpans;
          if (r) {
            for (var i = void 0, n = 0; n < r.length; ++n) {
              i = r[n];
              if (!i.marker.collapsed) {
                continue;
              }
              if (i.from == null) {
                return true;
              }
              if (i.marker.widgetNode) {
                continue;
              }
              if (i.from == 0 && i.marker.inclusiveLeft && ir(e, t, i)) {
                return true;
              }
            }
          }
        }
        function ir(e, t, r) {
          if (r.to == null) {
            var i = r.marker.find(1, true);
            return ir(e, i.line, Ht(i.line.markedSpans, r.marker));
          }
          if (r.marker.inclusiveRight && r.to == t.text.length) {
            return true;
          }
          for (var n = void 0, o = 0; o < t.markedSpans.length; ++o) {
            n = t.markedSpans[o];
            if (
              n.marker.collapsed &&
              !n.marker.widgetNode &&
              n.from == r.to &&
              (n.to == null || n.to != r.from) &&
              (n.marker.inclusiveLeft || r.marker.inclusiveRight) &&
              ir(e, t, n)
            ) {
              return true;
            }
          }
        }
        function nr(e) {
          e = Zt(e);
          var t = 0,
            r = e.parent;
          for (var i = 0; i < r.lines.length; ++i) {
            var n = r.lines[i];
            if (n == e) {
              break;
            } else {
              t += n.height;
            }
          }
          for (var o = r.parent; o; r = o, o = r.parent) {
            for (var l = 0; l < o.children.length; ++l) {
              var a = o.children[l];
              if (a == r) {
                break;
              } else {
                t += a.height;
              }
            }
          }
          return t;
        }
        function or(e) {
          if (e.height == 0) {
            return 0;
          }
          var t = e.text.length,
            r,
            i = e;
          while ((r = _t(i))) {
            var n = r.find(0, true);
            i = n.from.line;
            t += n.from.ch - n.to.ch;
          }
          i = e;
          while ((r = Yt(i))) {
            var o = r.find(0, true);
            t -= i.text.length - o.from.ch;
            i = o.to.line;
            t += i.text.length - o.to.ch;
          }
          return t;
        }
        function lr(e) {
          var t = e.display,
            r = e.doc;
          t.maxLine = qe(r, r.first);
          t.maxLineLength = or(t.maxLine);
          t.maxLineChanged = true;
          r.iter(function (e) {
            var r = or(e);
            if (r > t.maxLineLength) {
              t.maxLineLength = r;
              t.maxLine = e;
            }
          });
        }
        var ar = function (e, t, r) {
          this.text = e;
          Ut(this, t);
          this.height = r ? r(this) : 1;
        };
        ar.prototype.lineNo = function () {
          return et(this);
        };
        xe(ar);
        function sr(e, t, r, i) {
          e.text = t;
          if (e.stateAfter) {
            e.stateAfter = null;
          }
          if (e.styles) {
            e.styles = null;
          }
          if (e.order != null) {
            e.order = null;
          }
          Gt(e);
          Ut(e, r);
          var n = i ? i(e) : 1;
          if (n != e.height) {
            Je(e, n);
          }
        }
        function ur(e) {
          e.parent = null;
          Gt(e);
        }
        var fr = {},
          cr = {};
        function hr(e, t) {
          if (!e || /^\s*$/.test(e)) {
            return null;
          }
          var r = t.addModeClass ? cr : fr;
          return r[e] || (r[e] = e.replace(/\S+/g, 'cm-$&'));
        }
        function dr(e, t) {
          var r = O('span', null, null, s ? 'padding-right: .1px' : null);
          var i = {
            pre: O('pre', [r], 'CodeMirror-line'),
            content: r,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: false,
            splitSpaces: e.getOption('lineWrapping'),
          };
          t.measure = {};
          for (var n = 0; n <= (t.rest ? t.rest.length : 0); n++) {
            var o = n ? t.rest[n - 1] : t.line,
              l = void 0;
            i.pos = 0;
            i.addToken = vr;
            if (We(e.display.measure) && (l = he(o, e.doc.direction))) {
              i.addToken = mr(i.addToken, l);
            }
            i.map = [];
            var a = t != e.display.externalMeasured && et(o);
            br(o, i, mt(e, o, a));
            if (o.styleClasses) {
              if (o.styleClasses.bgClass) {
                i.bgClass = F(o.styleClasses.bgClass, i.bgClass || '');
              }
              if (o.styleClasses.textClass) {
                i.textClass = F(o.styleClasses.textClass, i.textClass || '');
              }
            }
            if (i.map.length == 0) {
              i.map.push(0, 0, i.content.appendChild(Ae(e.display.measure)));
            }
            if (n == 0) {
              t.measure.map = i.map;
              t.measure.cache = {};
            } else {
              (t.measure.maps || (t.measure.maps = [])).push(i.map);
              (t.measure.caches || (t.measure.caches = [])).push({});
            }
          }
          if (s) {
            var u = i.content.lastChild;
            if (
              /\bcm-tab\b/.test(u.className) ||
              (u.querySelector && u.querySelector('.cm-tab'))
            ) {
              i.content.className = 'cm-tab-wrap-hack';
            }
          }
          me(e, 'renderLine', e, t.line, i.pre);
          if (i.pre.className) {
            i.textClass = F(i.pre.className, i.textClass || '');
          }
          return i;
        }
        function pr(e) {
          var t = N('span', '•', 'cm-invalidchar');
          t.title = '\\u' + e.charCodeAt(0).toString(16);
          t.setAttribute('aria-label', t.title);
          return t;
        }
        function vr(e, t, r, i, n, o, s) {
          if (!t) {
            return;
          }
          var u = e.splitSpaces ? gr(t, e.trailingSpace) : t;
          var f = e.cm.state.specialChars,
            c = false;
          var h;
          if (!f.test(t)) {
            e.col += t.length;
            h = document.createTextNode(u);
            e.map.push(e.pos, e.pos + t.length, h);
            if (l && a < 9) {
              c = true;
            }
            e.pos += t.length;
          } else {
            h = document.createDocumentFragment();
            var d = 0;
            while (true) {
              f.lastIndex = d;
              var p = f.exec(t);
              var v = p ? p.index - d : t.length - d;
              if (v) {
                var g = document.createTextNode(u.slice(d, d + v));
                if (l && a < 9) {
                  h.appendChild(N('span', [g]));
                } else {
                  h.appendChild(g);
                }
                e.map.push(e.pos, e.pos + v, g);
                e.col += v;
                e.pos += v;
              }
              if (!p) {
                break;
              }
              d += v + 1;
              var m = void 0;
              if (p[0] == '\t') {
                var y = e.cm.options.tabSize,
                  b = y - (e.col % y);
                m = h.appendChild(N('span', Y(b), 'cm-tab'));
                m.setAttribute('role', 'presentation');
                m.setAttribute('cm-text', '\t');
                e.col += b;
              } else if (p[0] == '\r' || p[0] == '\n') {
                m = h.appendChild(
                  N('span', p[0] == '\r' ? '␍' : '␤', 'cm-invalidchar')
                );
                m.setAttribute('cm-text', p[0]);
                e.col += 1;
              } else {
                m = e.cm.options.specialCharPlaceholder(p[0]);
                m.setAttribute('cm-text', p[0]);
                if (l && a < 9) {
                  h.appendChild(N('span', [m]));
                } else {
                  h.appendChild(m);
                }
                e.col += 1;
              }
              e.map.push(e.pos, e.pos + 1, m);
              e.pos++;
            }
          }
          e.trailingSpace = u.charCodeAt(t.length - 1) == 32;
          if (r || i || n || c || o || s) {
            var w = r || '';
            if (i) {
              w += i;
            }
            if (n) {
              w += n;
            }
            var x = N('span', [h], w, o);
            if (s) {
              for (var C in s) {
                if (s.hasOwnProperty(C) && C != 'style' && C != 'class') {
                  x.setAttribute(C, s[C]);
                }
              }
            }
            return e.content.appendChild(x);
          }
          e.content.appendChild(h);
        }
        function gr(e, t) {
          if (e.length > 1 && !/  /.test(e)) {
            return e;
          }
          var r = t,
            i = '';
          for (var n = 0; n < e.length; n++) {
            var o = e.charAt(n);
            if (o == ' ' && r && (n == e.length - 1 || e.charCodeAt(n + 1) == 32)) {
              o = ' ';
            }
            i += o;
            r = o == ' ';
          }
          return i;
        }
        function mr(e, t) {
          return function (r, i, n, o, l, a, s) {
            n = n ? n + ' cm-force-border' : 'cm-force-border';
            var u = r.pos,
              f = u + i.length;
            for (;;) {
              var c = void 0;
              for (var h = 0; h < t.length; h++) {
                c = t[h];
                if (c.to > u && c.from <= u) {
                  break;
                }
              }
              if (c.to >= f) {
                return e(r, i, n, o, l, a, s);
              }
              e(r, i.slice(0, c.to - u), n, o, null, a, s);
              o = null;
              i = i.slice(c.to - u);
              u = c.to;
            }
          };
        }
        function yr(e, t, r, i) {
          var n = !i && r.widgetNode;
          if (n) {
            e.map.push(e.pos, e.pos + t, n);
          }
          if (!i && e.cm.display.input.needsContentAttribute) {
            if (!n) {
              n = e.content.appendChild(document.createElement('span'));
            }
            n.setAttribute('cm-marker', r.id);
          }
          if (n) {
            e.cm.display.input.setUneditable(n);
            e.content.appendChild(n);
          }
          e.pos += t;
          e.trailingSpace = false;
        }
        function br(e, t, r) {
          var i = e.markedSpans,
            n = e.text,
            o = 0;
          if (!i) {
            for (var l = 1; l < r.length; l += 2) {
              t.addToken(t, n.slice(o, (o = r[l])), hr(r[l + 1], t.cm.options));
            }
            return;
          }
          var a = n.length,
            s = 0,
            u = 1,
            f = '',
            c,
            h;
          var d = 0,
            p,
            v,
            g,
            m,
            y;
          for (;;) {
            if (d == s) {
              p = v = g = h = '';
              y = null;
              m = null;
              d = Infinity;
              var b = [],
                w = void 0;
              for (var x = 0; x < i.length; ++x) {
                var C = i[x],
                  S = C.marker;
                if (S.type == 'bookmark' && C.from == s && S.widgetNode) {
                  b.push(S);
                } else if (
                  C.from <= s &&
                  (C.to == null ||
                    C.to > s ||
                    (S.collapsed && C.to == s && C.from == s))
                ) {
                  if (C.to != null && C.to != s && d > C.to) {
                    d = C.to;
                    v = '';
                  }
                  if (S.className) {
                    p += ' ' + S.className;
                  }
                  if (S.css) {
                    h = (h ? h + ';' : '') + S.css;
                  }
                  if (S.startStyle && C.from == s) {
                    g += ' ' + S.startStyle;
                  }
                  if (S.endStyle && C.to == d) {
                    (w || (w = [])).push(S.endStyle, C.to);
                  }
                  if (S.title) {
                    (y || (y = {})).title = S.title;
                  }
                  if (S.attributes) {
                    for (var L in S.attributes) {
                      (y || (y = {}))[L] = S.attributes[L];
                    }
                  }
                  if (S.collapsed && (!m || jt(m.marker, S) < 0)) {
                    m = C;
                  }
                } else if (C.from > s && d > C.from) {
                  d = C.from;
                }
              }
              if (w) {
                for (var k = 0; k < w.length; k += 2) {
                  if (w[k + 1] == d) {
                    v += ' ' + w[k];
                  }
                }
              }
              if (!m || m.from == s) {
                for (var T = 0; T < b.length; ++T) {
                  yr(t, 0, b[T]);
                }
              }
              if (m && (m.from || 0) == s) {
                yr(t, (m.to == null ? a + 1 : m.to) - s, m.marker, m.from == null);
                if (m.to == null) {
                  return;
                }
                if (m.to == s) {
                  m = false;
                }
              }
            }
            if (s >= a) {
              break;
            }
            var M = Math.min(a, d);
            while (true) {
              if (f) {
                var N = s + f.length;
                if (!m) {
                  var O = N > M ? f.slice(0, M - s) : f;
                  t.addToken(t, O, c ? c + p : p, g, s + O.length == d ? v : '', h, y);
                }
                if (N >= M) {
                  f = f.slice(M - s);
                  s = M;
                  break;
                }
                s = N;
                g = '';
              }
              f = n.slice(o, (o = r[u++]));
              c = hr(r[u++], t.cm.options);
            }
          }
        }
        function wr(e, t, r) {
          this.line = t;
          this.rest = Jt(t);
          this.size = this.rest ? et($(this.rest)) - r + 1 : 1;
          this.node = this.text = null;
          this.hidden = rr(e, t);
        }
        function xr(e, t, r) {
          var i = [],
            n;
          for (var o = t; o < r; o = n) {
            var l = new wr(e.doc, qe(e.doc, o), o);
            n = o + l.size;
            i.push(l);
          }
          return i;
        }
        var Cr = null;
        function Sr(e) {
          if (Cr) {
            Cr.ops.push(e);
          } else {
            e.ownsGroup = Cr = { ops: [e], delayedCallbacks: [] };
          }
        }
        function Lr(e) {
          var t = e.delayedCallbacks,
            r = 0;
          do {
            for (; r < t.length; r++) {
              t[r].call(null);
            }
            for (var i = 0; i < e.ops.length; i++) {
              var n = e.ops[i];
              if (n.cursorActivityHandlers) {
                while (n.cursorActivityCalled < n.cursorActivityHandlers.length) {
                  n.cursorActivityHandlers[n.cursorActivityCalled++].call(null, n.cm);
                }
              }
            }
          } while (r < t.length);
        }
        function kr(e, t) {
          var r = e.ownsGroup;
          if (!r) {
            return;
          }
          try {
            Lr(r);
          } finally {
            Cr = null;
            t(r);
          }
        }
        var Tr = null;
        function Mr(e, t) {
          var r = ve(e, t);
          if (!r.length) {
            return;
          }
          var i = Array.prototype.slice.call(arguments, 2),
            n;
          if (Cr) {
            n = Cr.delayedCallbacks;
          } else if (Tr) {
            n = Tr;
          } else {
            n = Tr = [];
            setTimeout(Nr, 0);
          }
          var o = function (e) {
            n.push(function () {
              return r[e].apply(null, i);
            });
          };
          for (var l = 0; l < r.length; ++l) o(l);
        }
        function Nr() {
          var e = Tr;
          Tr = null;
          for (var t = 0; t < e.length; ++t) {
            e[t]();
          }
        }
        function Or(e, t, r, i) {
          for (var n = 0; n < t.changes.length; n++) {
            var o = t.changes[n];
            if (o == 'text') {
              Hr(e, t);
            } else if (o == 'gutter') {
              Pr(e, t, r, i);
            } else if (o == 'class') {
              Fr(e, t);
            } else if (o == 'widget') {
              Er(e, t, i);
            }
          }
          t.changes = null;
        }
        function Ar(e) {
          if (e.node == e.text) {
            e.node = N('div', null, null, 'position: relative');
            if (e.text.parentNode) {
              e.text.parentNode.replaceChild(e.node, e.text);
            }
            e.node.appendChild(e.text);
            if (l && a < 8) {
              e.node.style.zIndex = 2;
            }
          }
          return e.node;
        }
        function Dr(e, t) {
          var r = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass;
          if (r) {
            r += ' CodeMirror-linebackground';
          }
          if (t.background) {
            if (r) {
              t.background.className = r;
            } else {
              t.background.parentNode.removeChild(t.background);
              t.background = null;
            }
          } else if (r) {
            var i = Ar(t);
            t.background = i.insertBefore(N('div', null, r), i.firstChild);
            e.display.input.setUneditable(t.background);
          }
        }
        function Wr(e, t) {
          var r = e.display.externalMeasured;
          if (r && r.line == t.line) {
            e.display.externalMeasured = null;
            t.measure = r.measure;
            return r.built;
          }
          return dr(e, t);
        }
        function Hr(e, t) {
          var r = t.text.className;
          var i = Wr(e, t);
          if (t.text == t.node) {
            t.node = i.pre;
          }
          t.text.parentNode.replaceChild(i.pre, t.text);
          t.text = i.pre;
          if (i.bgClass != t.bgClass || i.textClass != t.textClass) {
            t.bgClass = i.bgClass;
            t.textClass = i.textClass;
            Fr(e, t);
          } else if (r) {
            t.text.className = r;
          }
        }
        function Fr(e, t) {
          Dr(e, t);
          if (t.line.wrapClass) {
            Ar(t).className = t.line.wrapClass;
          } else if (t.node != t.text) {
            t.node.className = '';
          }
          var r = t.textClass
            ? t.textClass + ' ' + (t.line.textClass || '')
            : t.line.textClass;
          t.text.className = r || '';
        }
        function Pr(e, t, r, i) {
          if (t.gutter) {
            t.node.removeChild(t.gutter);
            t.gutter = null;
          }
          if (t.gutterBackground) {
            t.node.removeChild(t.gutterBackground);
            t.gutterBackground = null;
          }
          if (t.line.gutterClass) {
            var n = Ar(t);
            t.gutterBackground = N(
              'div',
              null,
              'CodeMirror-gutter-background ' + t.line.gutterClass,
              'left: ' +
                (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
                'px; width: ' +
                i.gutterTotalWidth +
                'px'
            );
            e.display.input.setUneditable(t.gutterBackground);
            n.insertBefore(t.gutterBackground, t.text);
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var l = Ar(t);
            var a = (t.gutter = N(
              'div',
              null,
              'CodeMirror-gutter-wrapper',
              'left: ' +
                (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
                'px'
            ));
            a.setAttribute('aria-hidden', 'true');
            e.display.input.setUneditable(a);
            l.insertBefore(a, t.text);
            if (t.line.gutterClass) {
              a.className += ' ' + t.line.gutterClass;
            }
            if (e.options.lineNumbers && (!o || !o['CodeMirror-linenumbers'])) {
              t.lineNumber = a.appendChild(
                N(
                  'div',
                  it(e.options, r),
                  'CodeMirror-linenumber CodeMirror-gutter-elt',
                  'left: ' +
                    i.gutterLeft['CodeMirror-linenumbers'] +
                    'px; width: ' +
                    e.display.lineNumInnerWidth +
                    'px'
                )
              );
            }
            if (o) {
              for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                var u = e.display.gutterSpecs[s].className,
                  f = o.hasOwnProperty(u) && o[u];
                if (f) {
                  a.appendChild(
                    N(
                      'div',
                      [f],
                      'CodeMirror-gutter-elt',
                      'left: ' +
                        i.gutterLeft[u] +
                        'px; width: ' +
                        i.gutterWidth[u] +
                        'px'
                    )
                  );
                }
              }
            }
          }
        }
        function Er(e, t, r) {
          if (t.alignable) {
            t.alignable = null;
          }
          var i = L('CodeMirror-linewidget');
          for (var n = t.node.firstChild, o = void 0; n; n = o) {
            o = n.nextSibling;
            if (i.test(n.className)) {
              t.node.removeChild(n);
            }
          }
          zr(e, t, r);
        }
        function Ir(e, t, r, i) {
          var n = Wr(e, t);
          t.text = t.node = n.pre;
          if (n.bgClass) {
            t.bgClass = n.bgClass;
          }
          if (n.textClass) {
            t.textClass = n.textClass;
          }
          Fr(e, t);
          Pr(e, t, r, i);
          zr(e, t, i);
          return t.node;
        }
        function zr(e, t, r) {
          Rr(e, t.line, t, r, true);
          if (t.rest) {
            for (var i = 0; i < t.rest.length; i++) {
              Rr(e, t.rest[i], t, r, false);
            }
          }
        }
        function Rr(e, t, r, i, n) {
          if (!t.widgets) {
            return;
          }
          var o = Ar(r);
          for (var l = 0, a = t.widgets; l < a.length; ++l) {
            var s = a[l],
              u = N(
                'div',
                [s.node],
                'CodeMirror-linewidget' + (s.className ? ' ' + s.className : '')
              );
            if (!s.handleMouseEvents) {
              u.setAttribute('cm-ignore-events', 'true');
            }
            Br(s, u, r, i);
            e.display.input.setUneditable(u);
            if (n && s.above) {
              o.insertBefore(u, r.gutter || r.text);
            } else {
              o.appendChild(u);
            }
            Mr(s, 'redraw');
          }
        }
        function Br(e, t, r, i) {
          if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var n = i.wrapperWidth;
            t.style.left = i.fixedPos + 'px';
            if (!e.coverGutter) {
              n -= i.gutterTotalWidth;
              t.style.paddingLeft = i.gutterTotalWidth + 'px';
            }
            t.style.width = n + 'px';
          }
          if (e.coverGutter) {
            t.style.zIndex = 5;
            t.style.position = 'relative';
            if (!e.noHScroll) {
              t.style.marginLeft = -i.gutterTotalWidth + 'px';
            }
          }
        }
        function Gr(e) {
          if (e.height != null) {
            return e.height;
          }
          var t = e.doc.cm;
          if (!t) {
            return 0;
          }
          if (!D(document.body, e.node)) {
            var r = 'position: relative;';
            if (e.coverGutter) {
              r += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;';
            }
            if (e.noHScroll) {
              r += 'width: ' + t.display.wrapper.clientWidth + 'px;';
            }
            M(t.display.measure, N('div', [e.node], null, r));
          }
          return (e.height = e.node.parentNode.offsetHeight);
        }
        function Ur(e, t) {
          for (var r = Te(t); r != e.wrapper; r = r.parentNode) {
            if (
              !r ||
              (r.nodeType == 1 && r.getAttribute('cm-ignore-events') == 'true') ||
              (r.parentNode == e.sizer && r != e.mover)
            ) {
              return true;
            }
          }
        }
        function Vr(e) {
          return e.lineSpace.offsetTop;
        }
        function Kr(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function jr(e) {
          if (e.cachedPaddingH) {
            return e.cachedPaddingH;
          }
          var t = M(e.measure, N('pre', 'x', 'CodeMirror-line-like'));
          var r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle;
          var i = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) };
          if (!isNaN(i.left) && !isNaN(i.right)) {
            e.cachedPaddingH = i;
          }
          return i;
        }
        function Xr(e) {
          return G - e.display.nativeBarWidth;
        }
        function _r(e) {
          return e.display.scroller.clientWidth - Xr(e) - e.display.barWidth;
        }
        function Yr(e) {
          return e.display.scroller.clientHeight - Xr(e) - e.display.barHeight;
        }
        function $r(e, t, r) {
          var i = e.options.lineWrapping;
          var n = i && _r(e);
          if (!t.measure.heights || (i && t.measure.width != n)) {
            var o = (t.measure.heights = []);
            if (i) {
              t.measure.width = n;
              var l = t.text.firstChild.getClientRects();
              for (var a = 0; a < l.length - 1; a++) {
                var s = l[a],
                  u = l[a + 1];
                if (Math.abs(s.bottom - u.bottom) > 2) {
                  o.push((s.bottom + u.top) / 2 - r.top);
                }
              }
            }
            o.push(r.bottom - r.top);
          }
        }
        function qr(e, t, r) {
          if (e.line == t) {
            return { map: e.measure.map, cache: e.measure.cache };
          }
          for (var i = 0; i < e.rest.length; i++) {
            if (e.rest[i] == t) {
              return { map: e.measure.maps[i], cache: e.measure.caches[i] };
            }
          }
          for (var n = 0; n < e.rest.length; n++) {
            if (et(e.rest[n]) > r) {
              return {
                map: e.measure.maps[n],
                cache: e.measure.caches[n],
                before: true,
              };
            }
          }
        }
        function Zr(e, t) {
          t = Zt(t);
          var r = et(t);
          var i = (e.display.externalMeasured = new wr(e.doc, t, r));
          i.lineN = r;
          var n = (i.built = dr(e, i));
          i.text = n.pre;
          M(e.display.lineMeasure, n.pre);
          return i;
        }
        function Qr(e, t, r, i) {
          return ti(e, ei(e, t), r, i);
        }
        function Jr(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo) {
            return e.display.view[Fi(e, t)];
          }
          var r = e.display.externalMeasured;
          if (r && t >= r.lineN && t < r.lineN + r.size) {
            return r;
          }
        }
        function ei(e, t) {
          var r = et(t);
          var i = Jr(e, r);
          if (i && !i.text) {
            i = null;
          } else if (i && i.changes) {
            Or(e, i, r, Oi(e));
            e.curOp.forceUpdate = true;
          }
          if (!i) {
            i = Zr(e, t);
          }
          var n = qr(i, t, r);
          return {
            line: t,
            view: i,
            rect: null,
            map: n.map,
            cache: n.cache,
            before: n.before,
            hasHeights: false,
          };
        }
        function ti(e, t, r, i, n) {
          if (t.before) {
            r = -1;
          }
          var o = r + (i || ''),
            l;
          if (t.cache.hasOwnProperty(o)) {
            l = t.cache[o];
          } else {
            if (!t.rect) {
              t.rect = t.view.text.getBoundingClientRect();
            }
            if (!t.hasHeights) {
              $r(e, t.view, t.rect);
              t.hasHeights = true;
            }
            l = oi(e, t, r, i);
            if (!l.bogus) {
              t.cache[o] = l;
            }
          }
          return {
            left: l.left,
            right: l.right,
            top: n ? l.rtop : l.top,
            bottom: n ? l.rbottom : l.bottom,
          };
        }
        var ri = { left: 0, right: 0, top: 0, bottom: 0 };
        function ii(e, t, r) {
          var i, n, o, l, a, s;
          for (var u = 0; u < e.length; u += 3) {
            a = e[u];
            s = e[u + 1];
            if (t < a) {
              n = 0;
              o = 1;
              l = 'left';
            } else if (t < s) {
              n = t - a;
              o = n + 1;
            } else if (u == e.length - 3 || (t == s && e[u + 3] > t)) {
              o = s - a;
              n = o - 1;
              if (t >= s) {
                l = 'right';
              }
            }
            if (n != null) {
              i = e[u + 2];
              if (a == s && r == (i.insertLeft ? 'left' : 'right')) {
                l = r;
              }
              if (r == 'left' && n == 0) {
                while (u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft) {
                  i = e[(u -= 3) + 2];
                  l = 'left';
                }
              }
              if (r == 'right' && n == s - a) {
                while (
                  u < e.length - 3 &&
                  e[u + 3] == e[u + 4] &&
                  !e[u + 5].insertLeft
                ) {
                  i = e[(u += 3) + 2];
                  l = 'right';
                }
              }
              break;
            }
          }
          return { node: i, start: n, end: o, collapse: l, coverStart: a, coverEnd: s };
        }
        function ni(e, t) {
          var r = ri;
          if (t == 'left') {
            for (var i = 0; i < e.length; i++) {
              if ((r = e[i]).left != r.right) {
                break;
              }
            }
          } else {
            for (var n = e.length - 1; n >= 0; n--) {
              if ((r = e[n]).left != r.right) {
                break;
              }
            }
          }
          return r;
        }
        function oi(e, t, r, i) {
          var n = ii(t.map, r, i);
          var o = n.node,
            s = n.start,
            u = n.end,
            f = n.collapse;
          var c;
          if (o.nodeType == 3) {
            for (var h = 0; h < 4; h++) {
              while (s && oe(t.line.text.charAt(n.coverStart + s))) {
                --s;
              }
              while (
                n.coverStart + u < n.coverEnd &&
                oe(t.line.text.charAt(n.coverStart + u))
              ) {
                ++u;
              }
              if (l && a < 9 && s == 0 && u == n.coverEnd - n.coverStart) {
                c = o.parentNode.getBoundingClientRect();
              } else {
                c = ni(A(o, s, u).getClientRects(), i);
              }
              if (c.left || c.right || s == 0) {
                break;
              }
              u = s;
              s = s - 1;
              f = 'right';
            }
            if (l && a < 11) {
              c = li(e.display.measure, c);
            }
          } else {
            if (s > 0) {
              f = i = 'right';
            }
            var d;
            if (e.options.lineWrapping && (d = o.getClientRects()).length > 1) {
              c = d[i == 'right' ? d.length - 1 : 0];
            } else {
              c = o.getBoundingClientRect();
            }
          }
          if (l && a < 9 && !s && (!c || (!c.left && !c.right))) {
            var p = o.parentNode.getClientRects()[0];
            if (p) {
              c = {
                left: p.left,
                right: p.left + Ni(e.display),
                top: p.top,
                bottom: p.bottom,
              };
            } else {
              c = ri;
            }
          }
          var v = c.top - t.rect.top,
            g = c.bottom - t.rect.top;
          var m = (v + g) / 2;
          var y = t.view.measure.heights;
          var b = 0;
          for (; b < y.length - 1; b++) {
            if (m < y[b]) {
              break;
            }
          }
          var w = b ? y[b - 1] : 0,
            x = y[b];
          var C = {
            left: (f == 'right' ? c.right : c.left) - t.rect.left,
            right: (f == 'left' ? c.left : c.right) - t.rect.left,
            top: w,
            bottom: x,
          };
          if (!c.left && !c.right) {
            C.bogus = true;
          }
          if (!e.options.singleCursorHeightPerLine) {
            C.rtop = v;
            C.rbottom = g;
          }
          return C;
        }
        function li(e, t) {
          if (
            !window.screen ||
            screen.logicalXDPI == null ||
            screen.logicalXDPI == screen.deviceXDPI ||
            !Ie(e)
          ) {
            return t;
          }
          var r = screen.logicalXDPI / screen.deviceXDPI;
          var i = screen.logicalYDPI / screen.deviceYDPI;
          return {
            left: t.left * r,
            right: t.right * r,
            top: t.top * i,
            bottom: t.bottom * i,
          };
        }
        function ai(e) {
          if (e.measure) {
            e.measure.cache = {};
            e.measure.heights = null;
            if (e.rest) {
              for (var t = 0; t < e.rest.length; t++) {
                e.measure.caches[t] = {};
              }
            }
          }
        }
        function si(e) {
          e.display.externalMeasure = null;
          T(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++) {
            ai(e.display.view[t]);
          }
        }
        function ui(e) {
          si(e);
          e.display.cachedCharWidth =
            e.display.cachedTextHeight =
            e.display.cachedPaddingH =
              null;
          if (!e.options.lineWrapping) {
            e.display.maxLineChanged = true;
          }
          e.display.lineNumChars = null;
        }
        function fi() {
          if (f && g) {
            return -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            );
          }
          return (
            window.pageXOffset || (document.documentElement || document.body).scrollLeft
          );
        }
        function ci() {
          if (f && g) {
            return -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            );
          }
          return (
            window.pageYOffset || (document.documentElement || document.body).scrollTop
          );
        }
        function hi(e) {
          var t = 0;
          if (e.widgets) {
            for (var r = 0; r < e.widgets.length; ++r) {
              if (e.widgets[r].above) {
                t += Gr(e.widgets[r]);
              }
            }
          }
          return t;
        }
        function di(e, t, r, i, n) {
          if (!n) {
            var o = hi(t);
            r.top += o;
            r.bottom += o;
          }
          if (i == 'line') {
            return r;
          }
          if (!i) {
            i = 'local';
          }
          var l = nr(t);
          if (i == 'local') {
            l += Vr(e.display);
          } else {
            l -= e.display.viewOffset;
          }
          if (i == 'page' || i == 'window') {
            var a = e.display.lineSpace.getBoundingClientRect();
            l += a.top + (i == 'window' ? 0 : ci());
            var s = a.left + (i == 'window' ? 0 : fi());
            r.left += s;
            r.right += s;
          }
          r.top += l;
          r.bottom += l;
          return r;
        }
        function pi(e, t, r) {
          if (r == 'div') {
            return t;
          }
          var i = t.left,
            n = t.top;
          if (r == 'page') {
            i -= fi();
            n -= ci();
          } else if (r == 'local' || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            i += o.left;
            n += o.top;
          }
          var l = e.display.lineSpace.getBoundingClientRect();
          return { left: i - l.left, top: n - l.top };
        }
        function vi(e, t, r, i, n) {
          if (!i) {
            i = qe(e.doc, t.line);
          }
          return di(e, i, Qr(e, i, t.ch, n), r);
        }
        function gi(e, t, r, i, n, o) {
          i = i || qe(e.doc, t.line);
          if (!n) {
            n = ei(e, i);
          }
          function l(t, l) {
            var a = ti(e, n, t, l ? 'right' : 'left', o);
            if (l) {
              a.left = a.right;
            } else {
              a.right = a.left;
            }
            return di(e, i, a, r);
          }
          var a = he(i, e.doc.direction),
            s = t.ch,
            u = t.sticky;
          if (s >= i.text.length) {
            s = i.text.length;
            u = 'before';
          } else if (s <= 0) {
            s = 0;
            u = 'after';
          }
          if (!a) {
            return l(u == 'before' ? s - 1 : s, u == 'before');
          }
          function f(e, t, r) {
            var i = a[t],
              n = i.level == 1;
            return l(r ? e - 1 : e, n != r);
          }
          var c = fe(a, s, u);
          var h = ue;
          var d = f(s, c, u == 'before');
          if (h != null) {
            d.other = f(s, h, u != 'before');
          }
          return d;
        }
        function mi(e, t) {
          var r = 0;
          t = ct(e.doc, t);
          if (!e.options.lineWrapping) {
            r = Ni(e.display) * t.ch;
          }
          var i = qe(e.doc, t.line);
          var n = nr(i) + Vr(e.display);
          return { left: r, right: r, top: n, bottom: n + i.height };
        }
        function yi(e, t, r, i, n) {
          var o = nt(e, t, r);
          o.xRel = n;
          if (i) {
            o.outside = i;
          }
          return o;
        }
        function bi(e, t, r) {
          var i = e.doc;
          r += e.display.viewOffset;
          if (r < 0) {
            return yi(i.first, 0, null, -1, -1);
          }
          var n = tt(i, r),
            o = i.first + i.size - 1;
          if (n > o) {
            return yi(i.first + i.size - 1, qe(i, o).text.length, null, 1, 1);
          }
          if (t < 0) {
            t = 0;
          }
          var l = qe(i, n);
          for (;;) {
            var a = Si(e, l, n, t, r);
            var s = $t(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
            if (!s) {
              return a;
            }
            var u = s.find(1);
            if (u.line == n) {
              return u;
            }
            l = qe(i, (n = u.line));
          }
        }
        function wi(e, t, r, i) {
          i -= hi(t);
          var n = t.text.length;
          var o = ae(
            function (t) {
              return ti(e, r, t - 1).bottom <= i;
            },
            n,
            0
          );
          n = ae(
            function (t) {
              return ti(e, r, t).top > i;
            },
            o,
            n
          );
          return { begin: o, end: n };
        }
        function xi(e, t, r, i) {
          if (!r) {
            r = ei(e, t);
          }
          var n = di(e, t, ti(e, r, i), 'line').top;
          return wi(e, t, r, n);
        }
        function Ci(e, t, r, i) {
          return e.bottom <= r ? false : e.top > r ? true : (i ? e.left : e.right) > t;
        }
        function Si(e, t, r, i, n) {
          n -= nr(t);
          var o = ei(e, t);
          var l = hi(t);
          var a = 0,
            s = t.text.length,
            u = true;
          var f = he(t, e.doc.direction);
          if (f) {
            var c = (e.options.lineWrapping ? ki : Li)(e, t, r, o, f, i, n);
            u = c.level != 1;
            a = u ? c.from : c.to - 1;
            s = u ? c.to : c.from - 1;
          }
          var h = null,
            d = null;
          var p = ae(
            function (t) {
              var r = ti(e, o, t);
              r.top += l;
              r.bottom += l;
              if (!Ci(r, i, n, false)) {
                return false;
              }
              if (r.top <= n && r.left <= i) {
                h = t;
                d = r;
              }
              return true;
            },
            a,
            s
          );
          var v,
            g,
            m = false;
          if (d) {
            var y = i - d.left < d.right - i,
              b = y == u;
            p = h + (b ? 0 : 1);
            g = b ? 'after' : 'before';
            v = y ? d.left : d.right;
          } else {
            if (!u && (p == s || p == a)) {
              p++;
            }
            g =
              p == 0
                ? 'after'
                : p == t.text.length
                ? 'before'
                : ti(e, o, p - (u ? 1 : 0)).bottom + l <= n == u
                ? 'after'
                : 'before';
            var w = gi(e, nt(r, p, g), 'line', t, o);
            v = w.left;
            m = n < w.top ? -1 : n >= w.bottom ? 1 : 0;
          }
          p = le(t.text, p, 1);
          return yi(r, p, g, m, i - v);
        }
        function Li(e, t, r, i, n, o, l) {
          var a = ae(
            function (a) {
              var s = n[a],
                u = s.level != 1;
              return Ci(
                gi(e, nt(r, u ? s.to : s.from, u ? 'before' : 'after'), 'line', t, i),
                o,
                l,
                true
              );
            },
            0,
            n.length - 1
          );
          var s = n[a];
          if (a > 0) {
            var u = s.level != 1;
            var f = gi(
              e,
              nt(r, u ? s.from : s.to, u ? 'after' : 'before'),
              'line',
              t,
              i
            );
            if (Ci(f, o, l, true) && f.top > l) {
              s = n[a - 1];
            }
          }
          return s;
        }
        function ki(e, t, r, i, n, o, l) {
          var a = wi(e, t, i, l);
          var s = a.begin;
          var u = a.end;
          if (/\s/.test(t.text.charAt(u - 1))) {
            u--;
          }
          var f = null,
            c = null;
          for (var h = 0; h < n.length; h++) {
            var d = n[h];
            if (d.from >= u || d.to <= s) {
              continue;
            }
            var p = d.level != 1;
            var v = ti(e, i, p ? Math.min(u, d.to) - 1 : Math.max(s, d.from)).right;
            var g = v < o ? o - v + 1e9 : v - o;
            if (!f || c > g) {
              f = d;
              c = g;
            }
          }
          if (!f) {
            f = n[n.length - 1];
          }
          if (f.from < s) {
            f = { from: s, to: f.to, level: f.level };
          }
          if (f.to > u) {
            f = { from: f.from, to: u, level: f.level };
          }
          return f;
        }
        var Ti;
        function Mi(e) {
          if (e.cachedTextHeight != null) {
            return e.cachedTextHeight;
          }
          if (Ti == null) {
            Ti = N('pre', null, 'CodeMirror-line-like');
            for (var t = 0; t < 49; ++t) {
              Ti.appendChild(document.createTextNode('x'));
              Ti.appendChild(N('br'));
            }
            Ti.appendChild(document.createTextNode('x'));
          }
          M(e.measure, Ti);
          var r = Ti.offsetHeight / 50;
          if (r > 3) {
            e.cachedTextHeight = r;
          }
          T(e.measure);
          return r || 1;
        }
        function Ni(e) {
          if (e.cachedCharWidth != null) {
            return e.cachedCharWidth;
          }
          var t = N('span', 'xxxxxxxxxx');
          var r = N('pre', [t], 'CodeMirror-line-like');
          M(e.measure, r);
          var i = t.getBoundingClientRect(),
            n = (i.right - i.left) / 10;
          if (n > 2) {
            e.cachedCharWidth = n;
          }
          return n || 10;
        }
        function Oi(e) {
          var t = e.display,
            r = {},
            i = {};
          var n = t.gutters.clientLeft;
          for (var o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
            var a = e.display.gutterSpecs[l].className;
            r[a] = o.offsetLeft + o.clientLeft + n;
            i[a] = o.clientWidth;
          }
          return {
            fixedPos: Ai(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: r,
            gutterWidth: i,
            wrapperWidth: t.wrapper.clientWidth,
          };
        }
        function Ai(e) {
          return (
            e.scroller.getBoundingClientRect().left -
            e.sizer.getBoundingClientRect().left
          );
        }
        function Di(e) {
          var t = Mi(e.display),
            r = e.options.lineWrapping;
          var i = r && Math.max(5, e.display.scroller.clientWidth / Ni(e.display) - 3);
          return function (n) {
            if (rr(e.doc, n)) {
              return 0;
            }
            var o = 0;
            if (n.widgets) {
              for (var l = 0; l < n.widgets.length; l++) {
                if (n.widgets[l].height) {
                  o += n.widgets[l].height;
                }
              }
            }
            if (r) {
              return o + (Math.ceil(n.text.length / i) || 1) * t;
            } else {
              return o + t;
            }
          };
        }
        function Wi(e) {
          var t = e.doc,
            r = Di(e);
          t.iter(function (e) {
            var t = r(e);
            if (t != e.height) {
              Je(e, t);
            }
          });
        }
        function Hi(e, t, r, i) {
          var n = e.display;
          if (!r && Te(t).getAttribute('cm-not-content') == 'true') {
            return null;
          }
          var o,
            l,
            a = n.lineSpace.getBoundingClientRect();
          try {
            o = t.clientX - a.left;
            l = t.clientY - a.top;
          } catch (c) {
            return null;
          }
          var s = bi(e, o, l),
            u;
          if (i && s.xRel > 0 && (u = qe(e.doc, s.line).text).length == s.ch) {
            var f = z(u, u.length, e.options.tabSize) - u.length;
            s = nt(
              s.line,
              Math.max(0, Math.round((o - jr(e.display).left) / Ni(e.display)) - f)
            );
          }
          return s;
        }
        function Fi(e, t) {
          if (t >= e.display.viewTo) {
            return null;
          }
          t -= e.display.viewFrom;
          if (t < 0) {
            return null;
          }
          var r = e.display.view;
          for (var i = 0; i < r.length; i++) {
            t -= r[i].size;
            if (t < 0) {
              return i;
            }
          }
        }
        function Pi(e, t, r, i) {
          if (t == null) {
            t = e.doc.first;
          }
          if (r == null) {
            r = e.doc.first + e.doc.size;
          }
          if (!i) {
            i = 0;
          }
          var n = e.display;
          if (
            i &&
            r < n.viewTo &&
            (n.updateLineNumbers == null || n.updateLineNumbers > t)
          ) {
            n.updateLineNumbers = t;
          }
          e.curOp.viewChanged = true;
          if (t >= n.viewTo) {
            if (Ot && er(e.doc, t) < n.viewTo) {
              Ii(e);
            }
          } else if (r <= n.viewFrom) {
            if (Ot && tr(e.doc, r + i) > n.viewFrom) {
              Ii(e);
            } else {
              n.viewFrom += i;
              n.viewTo += i;
            }
          } else if (t <= n.viewFrom && r >= n.viewTo) {
            Ii(e);
          } else if (t <= n.viewFrom) {
            var o = zi(e, r, r + i, 1);
            if (o) {
              n.view = n.view.slice(o.index);
              n.viewFrom = o.lineN;
              n.viewTo += i;
            } else {
              Ii(e);
            }
          } else if (r >= n.viewTo) {
            var l = zi(e, t, t, -1);
            if (l) {
              n.view = n.view.slice(0, l.index);
              n.viewTo = l.lineN;
            } else {
              Ii(e);
            }
          } else {
            var a = zi(e, t, t, -1);
            var s = zi(e, r, r + i, 1);
            if (a && s) {
              n.view = n.view
                .slice(0, a.index)
                .concat(xr(e, a.lineN, s.lineN))
                .concat(n.view.slice(s.index));
              n.viewTo += i;
            } else {
              Ii(e);
            }
          }
          var u = n.externalMeasured;
          if (u) {
            if (r < u.lineN) {
              u.lineN += i;
            } else if (t < u.lineN + u.size) {
              n.externalMeasured = null;
            }
          }
        }
        function Ei(e, t, r) {
          e.curOp.viewChanged = true;
          var i = e.display,
            n = e.display.externalMeasured;
          if (n && t >= n.lineN && t < n.lineN + n.size) {
            i.externalMeasured = null;
          }
          if (t < i.viewFrom || t >= i.viewTo) {
            return;
          }
          var o = i.view[Fi(e, t)];
          if (o.node == null) {
            return;
          }
          var l = o.changes || (o.changes = []);
          if (B(l, r) == -1) {
            l.push(r);
          }
        }
        function Ii(e) {
          e.display.viewFrom = e.display.viewTo = e.doc.first;
          e.display.view = [];
          e.display.viewOffset = 0;
        }
        function zi(e, t, r, i) {
          var n = Fi(e, t),
            o,
            l = e.display.view;
          if (!Ot || r == e.doc.first + e.doc.size) {
            return { index: n, lineN: r };
          }
          var a = e.display.viewFrom;
          for (var s = 0; s < n; s++) {
            a += l[s].size;
          }
          if (a != t) {
            if (i > 0) {
              if (n == l.length - 1) {
                return null;
              }
              o = a + l[n].size - t;
              n++;
            } else {
              o = a - t;
            }
            t += o;
            r += o;
          }
          while (er(e.doc, r) != r) {
            if (n == (i < 0 ? 0 : l.length - 1)) {
              return null;
            }
            r += i * l[n - (i < 0 ? 1 : 0)].size;
            n += i;
          }
          return { index: n, lineN: r };
        }
        function Ri(e, t, r) {
          var i = e.display,
            n = i.view;
          if (n.length == 0 || t >= i.viewTo || r <= i.viewFrom) {
            i.view = xr(e, t, r);
            i.viewFrom = t;
          } else {
            if (i.viewFrom > t) {
              i.view = xr(e, t, i.viewFrom).concat(i.view);
            } else if (i.viewFrom < t) {
              i.view = i.view.slice(Fi(e, t));
            }
            i.viewFrom = t;
            if (i.viewTo < r) {
              i.view = i.view.concat(xr(e, i.viewTo, r));
            } else if (i.viewTo > r) {
              i.view = i.view.slice(0, Fi(e, r));
            }
          }
          i.viewTo = r;
        }
        function Bi(e) {
          var t = e.display.view,
            r = 0;
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            if (!n.hidden && (!n.node || n.changes)) {
              ++r;
            }
          }
          return r;
        }
        function Gi(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function Ui(e, t) {
          if (t === void 0) t = true;
          var r = e.doc,
            i = {};
          var n = (i.cursors = document.createDocumentFragment());
          var o = (i.selection = document.createDocumentFragment());
          for (var l = 0; l < r.sel.ranges.length; l++) {
            if (!t && l == r.sel.primIndex) {
              continue;
            }
            var a = r.sel.ranges[l];
            if (a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom) {
              continue;
            }
            var s = a.empty();
            if (s || e.options.showCursorWhenSelecting) {
              Vi(e, a.head, n);
            }
            if (!s) {
              ji(e, a, o);
            }
          }
          return i;
        }
        function Vi(e, t, r) {
          var i = gi(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine);
          var n = r.appendChild(N('div', ' ', 'CodeMirror-cursor'));
          n.style.left = i.left + 'px';
          n.style.top = i.top + 'px';
          n.style.height =
            Math.max(0, i.bottom - i.top) * e.options.cursorHeight + 'px';
          if (i.other) {
            var o = r.appendChild(
              N('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
            );
            o.style.display = '';
            o.style.left = i.other.left + 'px';
            o.style.top = i.other.top + 'px';
            o.style.height = (i.other.bottom - i.other.top) * 0.85 + 'px';
          }
        }
        function Ki(e, t) {
          return e.top - t.top || e.left - t.left;
        }
        function ji(e, t, r) {
          var i = e.display,
            n = e.doc;
          var o = document.createDocumentFragment();
          var l = jr(e.display),
            a = l.left;
          var s = Math.max(i.sizerWidth, _r(e) - i.sizer.offsetLeft) - l.right;
          var u = n.direction == 'ltr';
          function f(e, t, r, i) {
            if (t < 0) {
              t = 0;
            }
            t = Math.round(t);
            i = Math.round(i);
            o.appendChild(
              N(
                'div',
                null,
                'CodeMirror-selected',
                'position: absolute; left: ' +
                  e +
                  'px;\n                             top: ' +
                  t +
                  'px; width: ' +
                  (r == null ? s - e : r) +
                  'px;\n                             height: ' +
                  (i - t) +
                  'px'
              )
            );
          }
          function c(t, r, i) {
            var o = qe(n, t);
            var l = o.text.length;
            var c, h;
            function d(r, i) {
              return vi(e, nt(t, r), 'div', o, i);
            }
            function p(t, r, i) {
              var n = xi(e, o, null, t);
              var l = (r == 'ltr') == (i == 'after') ? 'left' : 'right';
              var a =
                i == 'after'
                  ? n.begin
                  : n.end - (/\s/.test(o.text.charAt(n.end - 1)) ? 2 : 1);
              return d(a, l)[l];
            }
            var v = he(o, n.direction);
            se(v, r || 0, i == null ? l : i, function (e, t, n, o) {
              var g = n == 'ltr';
              var m = d(e, g ? 'left' : 'right');
              var y = d(t - 1, g ? 'right' : 'left');
              var b = r == null && e == 0,
                w = i == null && t == l;
              var x = o == 0,
                C = !v || o == v.length - 1;
              if (y.top - m.top <= 3) {
                var S = (u ? b : w) && x;
                var L = (u ? w : b) && C;
                var k = S ? a : (g ? m : y).left;
                var T = L ? s : (g ? y : m).right;
                f(k, m.top, T - k, m.bottom);
              } else {
                var M, N, O, A;
                if (g) {
                  M = u && b && x ? a : m.left;
                  N = u ? s : p(e, n, 'before');
                  O = u ? a : p(t, n, 'after');
                  A = u && w && C ? s : y.right;
                } else {
                  M = !u ? a : p(e, n, 'before');
                  N = !u && b && x ? s : m.right;
                  O = !u && w && C ? a : y.left;
                  A = !u ? s : p(t, n, 'after');
                }
                f(M, m.top, N - M, m.bottom);
                if (m.bottom < y.top) {
                  f(a, m.bottom, null, y.top);
                }
                f(O, y.top, A - O, y.bottom);
              }
              if (!c || Ki(m, c) < 0) {
                c = m;
              }
              if (Ki(y, c) < 0) {
                c = y;
              }
              if (!h || Ki(m, h) < 0) {
                h = m;
              }
              if (Ki(y, h) < 0) {
                h = y;
              }
            });
            return { start: c, end: h };
          }
          var h = t.from(),
            d = t.to();
          if (h.line == d.line) {
            c(h.line, h.ch, d.ch);
          } else {
            var p = qe(n, h.line),
              v = qe(n, d.line);
            var g = Zt(p) == Zt(v);
            var m = c(h.line, h.ch, g ? p.text.length + 1 : null).end;
            var y = c(d.line, g ? 0 : null, d.ch).start;
            if (g) {
              if (m.top < y.top - 2) {
                f(m.right, m.top, null, m.bottom);
                f(a, y.top, y.left, y.bottom);
              } else {
                f(m.right, m.top, y.left - m.right, m.bottom);
              }
            }
            if (m.bottom < y.top) {
              f(a, m.bottom, null, y.top);
            }
          }
          r.appendChild(o);
        }
        function Xi(e) {
          if (!e.state.focused) {
            return;
          }
          var t = e.display;
          clearInterval(t.blinker);
          var r = true;
          t.cursorDiv.style.visibility = '';
          if (e.options.cursorBlinkRate > 0) {
            t.blinker = setInterval(function () {
              if (!e.hasFocus()) {
                qi(e);
              }
              t.cursorDiv.style.visibility = (r = !r) ? '' : 'hidden';
            }, e.options.cursorBlinkRate);
          } else if (e.options.cursorBlinkRate < 0) {
            t.cursorDiv.style.visibility = 'hidden';
          }
        }
        function _i(e) {
          if (!e.hasFocus()) {
            e.display.input.focus();
            if (!e.state.focused) {
              $i(e);
            }
          }
        }
        function Yi(e) {
          e.state.delayingBlurEvent = true;
          setTimeout(function () {
            if (e.state.delayingBlurEvent) {
              e.state.delayingBlurEvent = false;
              if (e.state.focused) {
                qi(e);
              }
            }
          }, 100);
        }
        function $i(e, t) {
          if (e.state.delayingBlurEvent && !e.state.draggingText) {
            e.state.delayingBlurEvent = false;
          }
          if (e.options.readOnly == 'nocursor') {
            return;
          }
          if (!e.state.focused) {
            me(e, 'focus', e, t);
            e.state.focused = true;
            H(e.display.wrapper, 'CodeMirror-focused');
            if (!e.curOp && e.display.selForContextMenu != e.doc.sel) {
              e.display.input.reset();
              if (s) {
                setTimeout(function () {
                  return e.display.input.reset(true);
                }, 20);
              }
            }
            e.display.input.receivedFocus();
          }
          Xi(e);
        }
        function qi(e, t) {
          if (e.state.delayingBlurEvent) {
            return;
          }
          if (e.state.focused) {
            me(e, 'blur', e, t);
            e.state.focused = false;
            k(e.display.wrapper, 'CodeMirror-focused');
          }
          clearInterval(e.display.blinker);
          setTimeout(function () {
            if (!e.state.focused) {
              e.display.shift = false;
            }
          }, 150);
        }
        function Zi(e) {
          var t = e.display;
          var r = t.lineDiv.offsetTop;
          for (var i = 0; i < t.view.length; i++) {
            var n = t.view[i],
              o = e.options.lineWrapping;
            var s = void 0,
              u = 0;
            if (n.hidden) {
              continue;
            }
            if (l && a < 8) {
              var f = n.node.offsetTop + n.node.offsetHeight;
              s = f - r;
              r = f;
            } else {
              var c = n.node.getBoundingClientRect();
              s = c.bottom - c.top;
              if (!o && n.text.firstChild) {
                u = n.text.firstChild.getBoundingClientRect().right - c.left - 1;
              }
            }
            var h = n.line.height - s;
            if (h > 0.005 || h < -0.005) {
              Je(n.line, s);
              Qi(n.line);
              if (n.rest) {
                for (var d = 0; d < n.rest.length; d++) {
                  Qi(n.rest[d]);
                }
              }
            }
            if (u > e.display.sizerWidth) {
              var p = Math.ceil(u / Ni(e.display));
              if (p > e.display.maxLineLength) {
                e.display.maxLineLength = p;
                e.display.maxLine = n.line;
                e.display.maxLineChanged = true;
              }
            }
          }
        }
        function Qi(e) {
          if (e.widgets) {
            for (var t = 0; t < e.widgets.length; ++t) {
              var r = e.widgets[t],
                i = r.node.parentNode;
              if (i) {
                r.height = i.offsetHeight;
              }
            }
          }
        }
        function Ji(e, t, r) {
          var i = r && r.top != null ? Math.max(0, r.top) : e.scroller.scrollTop;
          i = Math.floor(i - Vr(e));
          var n = r && r.bottom != null ? r.bottom : i + e.wrapper.clientHeight;
          var o = tt(t, i),
            l = tt(t, n);
          if (r && r.ensure) {
            var a = r.ensure.from.line,
              s = r.ensure.to.line;
            if (a < o) {
              o = a;
              l = tt(t, nr(qe(t, a)) + e.wrapper.clientHeight);
            } else if (Math.min(s, t.lastLine()) >= l) {
              o = tt(t, nr(qe(t, s)) - e.wrapper.clientHeight);
              l = s;
            }
          }
          return { from: o, to: Math.max(l, o + 1) };
        }
        function en(e, t) {
          if (ye(e, 'scrollCursorIntoView')) {
            return;
          }
          var r = e.display,
            i = r.sizer.getBoundingClientRect(),
            n = null;
          if (t.top + i.top < 0) {
            n = true;
          } else if (
            t.bottom + i.top >
            (window.innerHeight || document.documentElement.clientHeight)
          ) {
            n = false;
          }
          if (n != null && !p) {
            var o = N(
              'div',
              '​',
              null,
              'position: absolute;\n                         top: ' +
                (t.top - r.viewOffset - Vr(e.display)) +
                'px;\n                         height: ' +
                (t.bottom - t.top + Xr(e) + r.barHeight) +
                'px;\n                         left: ' +
                t.left +
                'px; width: ' +
                Math.max(2, t.right - t.left) +
                'px;'
            );
            e.display.lineSpace.appendChild(o);
            o.scrollIntoView(n);
            e.display.lineSpace.removeChild(o);
          }
        }
        function tn(e, t, r, i) {
          if (i == null) {
            i = 0;
          }
          var n;
          if (!e.options.lineWrapping && t == r) {
            r = t.sticky == 'before' ? nt(t.line, t.ch + 1, 'before') : t;
            t = t.ch ? nt(t.line, t.sticky == 'before' ? t.ch - 1 : t.ch, 'after') : t;
          }
          for (var o = 0; o < 5; o++) {
            var l = false;
            var a = gi(e, t);
            var s = !r || r == t ? a : gi(e, r);
            n = {
              left: Math.min(a.left, s.left),
              top: Math.min(a.top, s.top) - i,
              right: Math.max(a.left, s.left),
              bottom: Math.max(a.bottom, s.bottom) + i,
            };
            var u = nn(e, n);
            var f = e.doc.scrollTop,
              c = e.doc.scrollLeft;
            if (u.scrollTop != null) {
              cn(e, u.scrollTop);
              if (Math.abs(e.doc.scrollTop - f) > 1) {
                l = true;
              }
            }
            if (u.scrollLeft != null) {
              dn(e, u.scrollLeft);
              if (Math.abs(e.doc.scrollLeft - c) > 1) {
                l = true;
              }
            }
            if (!l) {
              break;
            }
          }
          return n;
        }
        function rn(e, t) {
          var r = nn(e, t);
          if (r.scrollTop != null) {
            cn(e, r.scrollTop);
          }
          if (r.scrollLeft != null) {
            dn(e, r.scrollLeft);
          }
        }
        function nn(e, t) {
          var r = e.display,
            i = Mi(e.display);
          if (t.top < 0) {
            t.top = 0;
          }
          var n =
            e.curOp && e.curOp.scrollTop != null
              ? e.curOp.scrollTop
              : r.scroller.scrollTop;
          var o = Yr(e),
            l = {};
          if (t.bottom - t.top > o) {
            t.bottom = t.top + o;
          }
          var a = e.doc.height + Kr(r);
          var s = t.top < i,
            u = t.bottom > a - i;
          if (t.top < n) {
            l.scrollTop = s ? 0 : t.top;
          } else if (t.bottom > n + o) {
            var f = Math.min(t.top, (u ? a : t.bottom) - o);
            if (f != n) {
              l.scrollTop = f;
            }
          }
          var c = e.options.fixedGutter ? 0 : r.gutters.offsetWidth;
          var h =
            e.curOp && e.curOp.scrollLeft != null
              ? e.curOp.scrollLeft
              : r.scroller.scrollLeft - c;
          var d = _r(e) - r.gutters.offsetWidth;
          var p = t.right - t.left > d;
          if (p) {
            t.right = t.left + d;
          }
          if (t.left < 10) {
            l.scrollLeft = 0;
          } else if (t.left < h) {
            l.scrollLeft = Math.max(0, t.left + c - (p ? 0 : 10));
          } else if (t.right > d + h - 3) {
            l.scrollLeft = t.right + (p ? 0 : 10) - d;
          }
          return l;
        }
        function on(e, t) {
          if (t == null) {
            return;
          }
          un(e);
          e.curOp.scrollTop =
            (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t;
        }
        function ln(e) {
          un(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin,
          };
        }
        function an(e, t, r) {
          if (t != null || r != null) {
            un(e);
          }
          if (t != null) {
            e.curOp.scrollLeft = t;
          }
          if (r != null) {
            e.curOp.scrollTop = r;
          }
        }
        function sn(e, t) {
          un(e);
          e.curOp.scrollToPos = t;
        }
        function un(e) {
          var t = e.curOp.scrollToPos;
          if (t) {
            e.curOp.scrollToPos = null;
            var r = mi(e, t.from),
              i = mi(e, t.to);
            fn(e, r, i, t.margin);
          }
        }
        function fn(e, t, r, i) {
          var n = nn(e, {
            left: Math.min(t.left, r.left),
            top: Math.min(t.top, r.top) - i,
            right: Math.max(t.right, r.right),
            bottom: Math.max(t.bottom, r.bottom) + i,
          });
          an(e, n.scrollLeft, n.scrollTop);
        }
        function cn(e, t) {
          if (Math.abs(e.doc.scrollTop - t) < 2) {
            return;
          }
          if (!r) {
            Un(e, { top: t });
          }
          hn(e, t, true);
          if (r) {
            Un(e);
          }
          Fn(e, 100);
        }
        function hn(e, t, r) {
          t = Math.max(
            0,
            Math.min(
              e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
              t
            )
          );
          if (e.display.scroller.scrollTop == t && !r) {
            return;
          }
          e.doc.scrollTop = t;
          e.display.scrollbars.setScrollTop(t);
          if (e.display.scroller.scrollTop != t) {
            e.display.scroller.scrollTop = t;
          }
        }
        function dn(e, t, r, i) {
          t = Math.max(
            0,
            Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)
          );
          if ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !i) {
            return;
          }
          e.doc.scrollLeft = t;
          Xn(e);
          if (e.display.scroller.scrollLeft != t) {
            e.display.scroller.scrollLeft = t;
          }
          e.display.scrollbars.setScrollLeft(t);
        }
        function pn(e) {
          var t = e.display,
            r = t.gutters.offsetWidth;
          var i = Math.round(e.doc.height + Kr(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? r : 0,
            docHeight: i,
            scrollHeight: i + Xr(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: r,
          };
        }
        var vn = function (e, t, r) {
          this.cm = r;
          var i = (this.vert = N(
            'div',
            [N('div', null, null, 'min-width: 1px')],
            'CodeMirror-vscrollbar'
          ));
          var n = (this.horiz = N(
            'div',
            [N('div', null, null, 'height: 100%; min-height: 1px')],
            'CodeMirror-hscrollbar'
          ));
          i.tabIndex = n.tabIndex = -1;
          e(i);
          e(n);
          pe(i, 'scroll', function () {
            if (i.clientHeight) {
              t(i.scrollTop, 'vertical');
            }
          });
          pe(n, 'scroll', function () {
            if (n.clientWidth) {
              t(n.scrollLeft, 'horizontal');
            }
          });
          this.checkedZeroWidth = false;
          if (l && a < 8) {
            this.horiz.style.minHeight = this.vert.style.minWidth = '18px';
          }
        };
        vn.prototype.update = function (e) {
          var t = e.scrollWidth > e.clientWidth + 1;
          var r = e.scrollHeight > e.clientHeight + 1;
          var i = e.nativeBarWidth;
          if (r) {
            this.vert.style.display = 'block';
            this.vert.style.bottom = t ? i + 'px' : '0';
            var n = e.viewHeight - (t ? i : 0);
            this.vert.firstChild.style.height =
              Math.max(0, e.scrollHeight - e.clientHeight + n) + 'px';
          } else {
            this.vert.style.display = '';
            this.vert.firstChild.style.height = '0';
          }
          if (t) {
            this.horiz.style.display = 'block';
            this.horiz.style.right = r ? i + 'px' : '0';
            this.horiz.style.left = e.barLeft + 'px';
            var o = e.viewWidth - e.barLeft - (r ? i : 0);
            this.horiz.firstChild.style.width =
              Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
          } else {
            this.horiz.style.display = '';
            this.horiz.firstChild.style.width = '0';
          }
          if (!this.checkedZeroWidth && e.clientHeight > 0) {
            if (i == 0) {
              this.zeroWidthHack();
            }
            this.checkedZeroWidth = true;
          }
          return { right: r ? i : 0, bottom: t ? i : 0 };
        };
        vn.prototype.setScrollLeft = function (e) {
          if (this.horiz.scrollLeft != e) {
            this.horiz.scrollLeft = e;
          }
          if (this.disableHoriz) {
            this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
          }
        };
        vn.prototype.setScrollTop = function (e) {
          if (this.vert.scrollTop != e) {
            this.vert.scrollTop = e;
          }
          if (this.disableVert) {
            this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
          }
        };
        vn.prototype.zeroWidthHack = function () {
          var e = y && !d ? '12px' : '18px';
          this.horiz.style.height = this.vert.style.width = e;
          this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none';
          this.disableHoriz = new R();
          this.disableVert = new R();
        };
        vn.prototype.enableZeroWidthBar = function (e, t, r) {
          e.style.pointerEvents = 'auto';
          function i() {
            var n = e.getBoundingClientRect();
            var o =
              r == 'vert'
                ? document.elementFromPoint(n.right - 1, (n.top + n.bottom) / 2)
                : document.elementFromPoint((n.right + n.left) / 2, n.bottom - 1);
            if (o != e) {
              e.style.pointerEvents = 'none';
            } else {
              t.set(1e3, i);
            }
          }
          t.set(1e3, i);
        };
        vn.prototype.clear = function () {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz);
          e.removeChild(this.vert);
        };
        var gn = function () {};
        gn.prototype.update = function () {
          return { bottom: 0, right: 0 };
        };
        gn.prototype.setScrollLeft = function () {};
        gn.prototype.setScrollTop = function () {};
        gn.prototype.clear = function () {};
        function mn(e, t) {
          if (!t) {
            t = pn(e);
          }
          var r = e.display.barWidth,
            i = e.display.barHeight;
          yn(e, t);
          for (
            var n = 0;
            (n < 4 && r != e.display.barWidth) || i != e.display.barHeight;
            n++
          ) {
            if (r != e.display.barWidth && e.options.lineWrapping) {
              Zi(e);
            }
            yn(e, pn(e));
            r = e.display.barWidth;
            i = e.display.barHeight;
          }
        }
        function yn(e, t) {
          var r = e.display;
          var i = r.scrollbars.update(t);
          r.sizer.style.paddingRight = (r.barWidth = i.right) + 'px';
          r.sizer.style.paddingBottom = (r.barHeight = i.bottom) + 'px';
          r.heightForcer.style.borderBottom = i.bottom + 'px solid transparent';
          if (i.right && i.bottom) {
            r.scrollbarFiller.style.display = 'block';
            r.scrollbarFiller.style.height = i.bottom + 'px';
            r.scrollbarFiller.style.width = i.right + 'px';
          } else {
            r.scrollbarFiller.style.display = '';
          }
          if (
            i.bottom &&
            e.options.coverGutterNextToScrollbar &&
            e.options.fixedGutter
          ) {
            r.gutterFiller.style.display = 'block';
            r.gutterFiller.style.height = i.bottom + 'px';
            r.gutterFiller.style.width = t.gutterWidth + 'px';
          } else {
            r.gutterFiller.style.display = '';
          }
        }
        var bn = { native: vn, null: gn };
        function wn(e) {
          if (e.display.scrollbars) {
            e.display.scrollbars.clear();
            if (e.display.scrollbars.addClass) {
              k(e.display.wrapper, e.display.scrollbars.addClass);
            }
          }
          e.display.scrollbars = new bn[e.options.scrollbarStyle](
            function (t) {
              e.display.wrapper.insertBefore(t, e.display.scrollbarFiller);
              pe(t, 'mousedown', function () {
                if (e.state.focused) {
                  setTimeout(function () {
                    return e.display.input.focus();
                  }, 0);
                }
              });
              t.setAttribute('cm-not-content', 'true');
            },
            function (t, r) {
              if (r == 'horizontal') {
                dn(e, t);
              } else {
                cn(e, t);
              }
            },
            e
          );
          if (e.display.scrollbars.addClass) {
            H(e.display.wrapper, e.display.scrollbars.addClass);
          }
        }
        var xn = 0;
        function Cn(e) {
          e.curOp = {
            cm: e,
            viewChanged: false,
            startHeight: e.doc.height,
            forceUpdate: false,
            updateInput: 0,
            typing: false,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: false,
            updateMaxLine: false,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: false,
            id: ++xn,
            markArrays: null,
          };
          Sr(e.curOp);
        }
        function Sn(e) {
          var t = e.curOp;
          if (t) {
            kr(t, function (e) {
              for (var t = 0; t < e.ops.length; t++) {
                e.ops[t].cm.curOp = null;
              }
              Ln(e);
            });
          }
        }
        function Ln(e) {
          var t = e.ops;
          for (var r = 0; r < t.length; r++) {
            kn(t[r]);
          }
          for (var i = 0; i < t.length; i++) {
            Tn(t[i]);
          }
          for (var n = 0; n < t.length; n++) {
            Mn(t[n]);
          }
          for (var o = 0; o < t.length; o++) {
            Nn(t[o]);
          }
          for (var l = 0; l < t.length; l++) {
            On(t[l]);
          }
        }
        function kn(e) {
          var t = e.cm,
            r = t.display;
          In(t);
          if (e.updateMaxLine) {
            lr(t);
          }
          e.mustUpdate =
            e.viewChanged ||
            e.forceUpdate ||
            e.scrollTop != null ||
            (e.scrollToPos &&
              (e.scrollToPos.from.line < r.viewFrom ||
                e.scrollToPos.to.line >= r.viewTo)) ||
            (r.maxLineChanged && t.options.lineWrapping);
          e.update =
            e.mustUpdate &&
            new En(
              t,
              e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
              e.forceUpdate
            );
        }
        function Tn(e) {
          e.updatedDisplay = e.mustUpdate && Bn(e.cm, e.update);
        }
        function Mn(e) {
          var t = e.cm,
            r = t.display;
          if (e.updatedDisplay) {
            Zi(t);
          }
          e.barMeasure = pn(t);
          if (r.maxLineChanged && !t.options.lineWrapping) {
            e.adjustWidthTo = Qr(t, r.maxLine, r.maxLine.text.length).left + 3;
            t.display.sizerWidth = e.adjustWidthTo;
            e.barMeasure.scrollWidth = Math.max(
              r.scroller.clientWidth,
              r.sizer.offsetLeft + e.adjustWidthTo + Xr(t) + t.display.barWidth
            );
            e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - _r(t));
          }
          if (e.updatedDisplay || e.selectionChanged) {
            e.preparedSelection = r.input.prepareSelection();
          }
        }
        function Nn(e) {
          var t = e.cm;
          if (e.adjustWidthTo != null) {
            t.display.sizer.style.minWidth = e.adjustWidthTo + 'px';
            if (e.maxScrollLeft < t.doc.scrollLeft) {
              dn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), true);
            }
            t.display.maxLineChanged = false;
          }
          var r = e.focus && e.focus == W();
          if (e.preparedSelection) {
            t.display.input.showSelection(e.preparedSelection, r);
          }
          if (e.updatedDisplay || e.startHeight != t.doc.height) {
            mn(t, e.barMeasure);
          }
          if (e.updatedDisplay) {
            jn(t, e.barMeasure);
          }
          if (e.selectionChanged) {
            Xi(t);
          }
          if (t.state.focused && e.updateInput) {
            t.display.input.reset(e.typing);
          }
          if (r) {
            _i(e.cm);
          }
        }
        function On(e) {
          var t = e.cm,
            r = t.display,
            i = t.doc;
          if (e.updatedDisplay) {
            Gn(t, e.update);
          }
          if (
            r.wheelStartX != null &&
            (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos)
          ) {
            r.wheelStartX = r.wheelStartY = null;
          }
          if (e.scrollTop != null) {
            hn(t, e.scrollTop, e.forceScroll);
          }
          if (e.scrollLeft != null) {
            dn(t, e.scrollLeft, true, true);
          }
          if (e.scrollToPos) {
            var n = tn(
              t,
              ct(i, e.scrollToPos.from),
              ct(i, e.scrollToPos.to),
              e.scrollToPos.margin
            );
            en(t, n);
          }
          var o = e.maybeHiddenMarkers,
            l = e.maybeUnhiddenMarkers;
          if (o) {
            for (var a = 0; a < o.length; ++a) {
              if (!o[a].lines.length) {
                me(o[a], 'hide');
              }
            }
          }
          if (l) {
            for (var s = 0; s < l.length; ++s) {
              if (l[s].lines.length) {
                me(l[s], 'unhide');
              }
            }
          }
          if (r.wrapper.offsetHeight) {
            i.scrollTop = t.display.scroller.scrollTop;
          }
          if (e.changeObjs) {
            me(t, 'changes', t, e.changeObjs);
          }
          if (e.update) {
            e.update.finish();
          }
        }
        function An(e, t) {
          if (e.curOp) {
            return t();
          }
          Cn(e);
          try {
            return t();
          } finally {
            Sn(e);
          }
        }
        function Dn(e, t) {
          return function () {
            if (e.curOp) {
              return t.apply(e, arguments);
            }
            Cn(e);
            try {
              return t.apply(e, arguments);
            } finally {
              Sn(e);
            }
          };
        }
        function Wn(e) {
          return function () {
            if (this.curOp) {
              return e.apply(this, arguments);
            }
            Cn(this);
            try {
              return e.apply(this, arguments);
            } finally {
              Sn(this);
            }
          };
        }
        function Hn(e) {
          return function () {
            var t = this.cm;
            if (!t || t.curOp) {
              return e.apply(this, arguments);
            }
            Cn(t);
            try {
              return e.apply(this, arguments);
            } finally {
              Sn(t);
            }
          };
        }
        function Fn(e, t) {
          if (e.doc.highlightFrontier < e.display.viewTo) {
            e.state.highlight.set(t, E(Pn, e));
          }
        }
        function Pn(e) {
          var t = e.doc;
          if (t.highlightFrontier >= e.display.viewTo) {
            return;
          }
          var r = +new Date() + e.options.workTime;
          var i = yt(e, t.highlightFrontier);
          var n = [];
          t.iter(
            i.line,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function (o) {
              if (i.line >= e.display.viewFrom) {
                var l = o.styles;
                var a =
                  o.text.length > e.options.maxHighlightLength
                    ? Xe(t.mode, i.state)
                    : null;
                var s = gt(e, o, i, true);
                if (a) {
                  i.state = a;
                }
                o.styles = s.styles;
                var u = o.styleClasses,
                  f = s.classes;
                if (f) {
                  o.styleClasses = f;
                } else if (u) {
                  o.styleClasses = null;
                }
                var c =
                  !l ||
                  l.length != o.styles.length ||
                  (u != f &&
                    (!u || !f || u.bgClass != f.bgClass || u.textClass != f.textClass));
                for (var h = 0; !c && h < l.length; ++h) {
                  c = l[h] != o.styles[h];
                }
                if (c) {
                  n.push(i.line);
                }
                o.stateAfter = i.save();
                i.nextLine();
              } else {
                if (o.text.length <= e.options.maxHighlightLength) {
                  bt(e, o.text, i);
                }
                o.stateAfter = i.line % 5 == 0 ? i.save() : null;
                i.nextLine();
              }
              if (+new Date() > r) {
                Fn(e, e.options.workDelay);
                return true;
              }
            }
          );
          t.highlightFrontier = i.line;
          t.modeFrontier = Math.max(t.modeFrontier, i.line);
          if (n.length) {
            An(e, function () {
              for (var t = 0; t < n.length; t++) {
                Ei(e, n[t], 'text');
              }
            });
          }
        }
        var En = function (e, t, r) {
          var i = e.display;
          this.viewport = t;
          this.visible = Ji(i, e.doc, t);
          this.editorIsHidden = !i.wrapper.offsetWidth;
          this.wrapperHeight = i.wrapper.clientHeight;
          this.wrapperWidth = i.wrapper.clientWidth;
          this.oldDisplayWidth = _r(e);
          this.force = r;
          this.dims = Oi(e);
          this.events = [];
        };
        En.prototype.signal = function (e, t) {
          if (we(e, t)) {
            this.events.push(arguments);
          }
        };
        En.prototype.finish = function () {
          for (var e = 0; e < this.events.length; e++) {
            me.apply(null, this.events[e]);
          }
        };
        function In(e) {
          var t = e.display;
          if (!t.scrollbarsClipped && t.scroller.offsetWidth) {
            t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth;
            t.heightForcer.style.height = Xr(e) + 'px';
            t.sizer.style.marginBottom = -t.nativeBarWidth + 'px';
            t.sizer.style.borderRightWidth = Xr(e) + 'px';
            t.scrollbarsClipped = true;
          }
        }
        function zn(e) {
          if (e.hasFocus()) {
            return null;
          }
          var t = W();
          if (!t || !D(e.display.lineDiv, t)) {
            return null;
          }
          var r = { activeElt: t };
          if (window.getSelection) {
            var i = window.getSelection();
            if (i.anchorNode && i.extend && D(e.display.lineDiv, i.anchorNode)) {
              r.anchorNode = i.anchorNode;
              r.anchorOffset = i.anchorOffset;
              r.focusNode = i.focusNode;
              r.focusOffset = i.focusOffset;
            }
          }
          return r;
        }
        function Rn(e) {
          if (!e || !e.activeElt || e.activeElt == W()) {
            return;
          }
          e.activeElt.focus();
          if (
            !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
            e.anchorNode &&
            D(document.body, e.anchorNode) &&
            D(document.body, e.focusNode)
          ) {
            var t = window.getSelection(),
              r = document.createRange();
            r.setEnd(e.anchorNode, e.anchorOffset);
            r.collapse(false);
            t.removeAllRanges();
            t.addRange(r);
            t.extend(e.focusNode, e.focusOffset);
          }
        }
        function Bn(e, t) {
          var r = e.display,
            i = e.doc;
          if (t.editorIsHidden) {
            Ii(e);
            return false;
          }
          if (
            !t.force &&
            t.visible.from >= r.viewFrom &&
            t.visible.to <= r.viewTo &&
            (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo) &&
            r.renderedView == r.view &&
            Bi(e) == 0
          ) {
            return false;
          }
          if (_n(e)) {
            Ii(e);
            t.dims = Oi(e);
          }
          var n = i.first + i.size;
          var o = Math.max(t.visible.from - e.options.viewportMargin, i.first);
          var l = Math.min(n, t.visible.to + e.options.viewportMargin);
          if (r.viewFrom < o && o - r.viewFrom < 20) {
            o = Math.max(i.first, r.viewFrom);
          }
          if (r.viewTo > l && r.viewTo - l < 20) {
            l = Math.min(n, r.viewTo);
          }
          if (Ot) {
            o = er(e.doc, o);
            l = tr(e.doc, l);
          }
          var a =
            o != r.viewFrom ||
            l != r.viewTo ||
            r.lastWrapHeight != t.wrapperHeight ||
            r.lastWrapWidth != t.wrapperWidth;
          Ri(e, o, l);
          r.viewOffset = nr(qe(e.doc, r.viewFrom));
          e.display.mover.style.top = r.viewOffset + 'px';
          var s = Bi(e);
          if (
            !a &&
            s == 0 &&
            !t.force &&
            r.renderedView == r.view &&
            (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo)
          ) {
            return false;
          }
          var u = zn(e);
          if (s > 4) {
            r.lineDiv.style.display = 'none';
          }
          Vn(e, r.updateLineNumbers, t.dims);
          if (s > 4) {
            r.lineDiv.style.display = '';
          }
          r.renderedView = r.view;
          Rn(u);
          T(r.cursorDiv);
          T(r.selectionDiv);
          r.gutters.style.height = r.sizer.style.minHeight = 0;
          if (a) {
            r.lastWrapHeight = t.wrapperHeight;
            r.lastWrapWidth = t.wrapperWidth;
            Fn(e, 400);
          }
          r.updateLineNumbers = null;
          return true;
        }
        function Gn(e, t) {
          var r = t.viewport;
          for (var i = true; ; i = false) {
            if (!i || !e.options.lineWrapping || t.oldDisplayWidth == _r(e)) {
              if (r && r.top != null) {
                r = { top: Math.min(e.doc.height + Kr(e.display) - Yr(e), r.top) };
              }
              t.visible = Ji(e.display, e.doc, r);
              if (
                t.visible.from >= e.display.viewFrom &&
                t.visible.to <= e.display.viewTo
              ) {
                break;
              }
            } else if (i) {
              t.visible = Ji(e.display, e.doc, r);
            }
            if (!Bn(e, t)) {
              break;
            }
            Zi(e);
            var n = pn(e);
            Gi(e);
            mn(e, n);
            jn(e, n);
            t.force = false;
          }
          t.signal(e, 'update', e);
          if (
            e.display.viewFrom != e.display.reportedViewFrom ||
            e.display.viewTo != e.display.reportedViewTo
          ) {
            t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo);
            e.display.reportedViewFrom = e.display.viewFrom;
            e.display.reportedViewTo = e.display.viewTo;
          }
        }
        function Un(e, t) {
          var r = new En(e, t);
          if (Bn(e, r)) {
            Zi(e);
            Gn(e, r);
            var i = pn(e);
            Gi(e);
            mn(e, i);
            jn(e, i);
            r.finish();
          }
        }
        function Vn(e, t, r) {
          var i = e.display,
            n = e.options.lineNumbers;
          var o = i.lineDiv,
            l = o.firstChild;
          function a(t) {
            var r = t.nextSibling;
            if (s && y && e.display.currentWheelTarget == t) {
              t.style.display = 'none';
            } else {
              t.parentNode.removeChild(t);
            }
            return r;
          }
          var u = i.view,
            f = i.viewFrom;
          for (var c = 0; c < u.length; c++) {
            var h = u[c];
            if (h.hidden);
            else if (!h.node || h.node.parentNode != o) {
              var d = Ir(e, h, f, r);
              o.insertBefore(d, l);
            } else {
              while (l != h.node) {
                l = a(l);
              }
              var p = n && t != null && t <= f && h.lineNumber;
              if (h.changes) {
                if (B(h.changes, 'gutter') > -1) {
                  p = false;
                }
                Or(e, h, f, r);
              }
              if (p) {
                T(h.lineNumber);
                h.lineNumber.appendChild(document.createTextNode(it(e.options, f)));
              }
              l = h.node.nextSibling;
            }
            f += h.size;
          }
          while (l) {
            l = a(l);
          }
        }
        function Kn(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + 'px';
          Mr(e, 'gutterChanged', e);
        }
        function jn(e, t) {
          e.display.sizer.style.minHeight = t.docHeight + 'px';
          e.display.heightForcer.style.top = t.docHeight + 'px';
          e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + Xr(e) + 'px';
        }
        function Xn(e) {
          var t = e.display,
            r = t.view;
          if (!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter)) {
            return;
          }
          var i = Ai(t) - t.scroller.scrollLeft + e.doc.scrollLeft;
          var n = t.gutters.offsetWidth,
            o = i + 'px';
          for (var l = 0; l < r.length; l++) {
            if (!r[l].hidden) {
              if (e.options.fixedGutter) {
                if (r[l].gutter) {
                  r[l].gutter.style.left = o;
                }
                if (r[l].gutterBackground) {
                  r[l].gutterBackground.style.left = o;
                }
              }
              var a = r[l].alignable;
              if (a) {
                for (var s = 0; s < a.length; s++) {
                  a[s].style.left = o;
                }
              }
            }
          }
          if (e.options.fixedGutter) {
            t.gutters.style.left = i + n + 'px';
          }
        }
        function _n(e) {
          if (!e.options.lineNumbers) {
            return false;
          }
          var t = e.doc,
            r = it(e.options, t.first + t.size - 1),
            i = e.display;
          if (r.length != i.lineNumChars) {
            var n = i.measure.appendChild(
              N('div', [N('div', r)], 'CodeMirror-linenumber CodeMirror-gutter-elt')
            );
            var o = n.firstChild.offsetWidth,
              l = n.offsetWidth - o;
            i.lineGutter.style.width = '';
            i.lineNumInnerWidth = Math.max(o, i.lineGutter.offsetWidth - l) + 1;
            i.lineNumWidth = i.lineNumInnerWidth + l;
            i.lineNumChars = i.lineNumInnerWidth ? r.length : -1;
            i.lineGutter.style.width = i.lineNumWidth + 'px';
            Kn(e.display);
            return true;
          }
          return false;
        }
        function Yn(e, t) {
          var r = [],
            i = false;
          for (var n = 0; n < e.length; n++) {
            var o = e[n],
              l = null;
            if (typeof o != 'string') {
              l = o.style;
              o = o.className;
            }
            if (o == 'CodeMirror-linenumbers') {
              if (!t) {
                continue;
              } else {
                i = true;
              }
            }
            r.push({ className: o, style: l });
          }
          if (t && !i) {
            r.push({ className: 'CodeMirror-linenumbers', style: null });
          }
          return r;
        }
        function $n(e) {
          var t = e.gutters,
            r = e.gutterSpecs;
          T(t);
          e.lineGutter = null;
          for (var i = 0; i < r.length; ++i) {
            var n = r[i];
            var o = n.className;
            var l = n.style;
            var a = t.appendChild(N('div', null, 'CodeMirror-gutter ' + o));
            if (l) {
              a.style.cssText = l;
            }
            if (o == 'CodeMirror-linenumbers') {
              e.lineGutter = a;
              a.style.width = (e.lineNumWidth || 1) + 'px';
            }
          }
          t.style.display = r.length ? '' : 'none';
          Kn(e);
        }
        function qn(e) {
          $n(e.display);
          Pi(e);
          Xn(e);
        }
        function Zn(e, t, i, n) {
          var o = this;
          this.input = i;
          o.scrollbarFiller = N('div', null, 'CodeMirror-scrollbar-filler');
          o.scrollbarFiller.setAttribute('cm-not-content', 'true');
          o.gutterFiller = N('div', null, 'CodeMirror-gutter-filler');
          o.gutterFiller.setAttribute('cm-not-content', 'true');
          o.lineDiv = O('div', null, 'CodeMirror-code');
          o.selectionDiv = N('div', null, null, 'position: relative; z-index: 1');
          o.cursorDiv = N('div', null, 'CodeMirror-cursors');
          o.measure = N('div', null, 'CodeMirror-measure');
          o.lineMeasure = N('div', null, 'CodeMirror-measure');
          o.lineSpace = O(
            'div',
            [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
            null,
            'position: relative; outline: none'
          );
          var u = O('div', [o.lineSpace], 'CodeMirror-lines');
          o.mover = N('div', [u], null, 'position: relative');
          o.sizer = N('div', [o.mover], 'CodeMirror-sizer');
          o.sizerWidth = null;
          o.heightForcer = N(
            'div',
            null,
            null,
            'position: absolute; height: ' + G + 'px; width: 1px;'
          );
          o.gutters = N('div', null, 'CodeMirror-gutters');
          o.lineGutter = null;
          o.scroller = N(
            'div',
            [o.sizer, o.heightForcer, o.gutters],
            'CodeMirror-scroll'
          );
          o.scroller.setAttribute('tabIndex', '-1');
          o.wrapper = N(
            'div',
            [o.scrollbarFiller, o.gutterFiller, o.scroller],
            'CodeMirror'
          );
          if (l && a < 8) {
            o.gutters.style.zIndex = -1;
            o.scroller.style.paddingRight = 0;
          }
          if (!s && !(r && m)) {
            o.scroller.draggable = true;
          }
          if (e) {
            if (e.appendChild) {
              e.appendChild(o.wrapper);
            } else {
              e(o.wrapper);
            }
          }
          o.viewFrom = o.viewTo = t.first;
          o.reportedViewFrom = o.reportedViewTo = t.first;
          o.view = [];
          o.renderedView = null;
          o.externalMeasured = null;
          o.viewOffset = 0;
          o.lastWrapHeight = o.lastWrapWidth = 0;
          o.updateLineNumbers = null;
          o.nativeBarWidth = o.barHeight = o.barWidth = 0;
          o.scrollbarsClipped = false;
          o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null;
          o.alignWidgets = false;
          o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null;
          o.maxLine = null;
          o.maxLineLength = 0;
          o.maxLineChanged = false;
          o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null;
          o.shift = false;
          o.selForContextMenu = null;
          o.activeTouch = null;
          o.gutterSpecs = Yn(n.gutters, n.lineNumbers);
          $n(o);
          i.init(o);
        }
        var Qn = 0,
          Jn = null;
        if (l) {
          Jn = -0.53;
        } else if (r) {
          Jn = 15;
        } else if (f) {
          Jn = -0.7;
        } else if (h) {
          Jn = -1 / 3;
        }
        function eo(e) {
          var t = e.wheelDeltaX,
            r = e.wheelDeltaY;
          if (t == null && e.detail && e.axis == e.HORIZONTAL_AXIS) {
            t = e.detail;
          }
          if (r == null && e.detail && e.axis == e.VERTICAL_AXIS) {
            r = e.detail;
          } else if (r == null) {
            r = e.wheelDelta;
          }
          return { x: t, y: r };
        }
        function to(e) {
          var t = eo(e);
          t.x *= Jn;
          t.y *= Jn;
          return t;
        }
        function ro(e, t) {
          var i = eo(t),
            n = i.x,
            o = i.y;
          var l = e.display,
            a = l.scroller;
          var u = a.scrollWidth > a.clientWidth;
          var f = a.scrollHeight > a.clientHeight;
          if (!((n && u) || (o && f))) {
            return;
          }
          if (o && y && s) {
            e: for (var h = t.target, d = l.view; h != a; h = h.parentNode) {
              for (var p = 0; p < d.length; p++) {
                if (d[p].node == h) {
                  e.display.currentWheelTarget = h;
                  break e;
                }
              }
            }
          }
          if (n && !r && !c && Jn != null) {
            if (o && f) {
              cn(e, Math.max(0, a.scrollTop + o * Jn));
            }
            dn(e, Math.max(0, a.scrollLeft + n * Jn));
            if (!o || (o && f)) {
              Ce(t);
            }
            l.wheelStartX = null;
            return;
          }
          if (o && Jn != null) {
            var v = o * Jn;
            var g = e.doc.scrollTop,
              m = g + l.wrapper.clientHeight;
            if (v < 0) {
              g = Math.max(0, g + v - 50);
            } else {
              m = Math.min(e.doc.height, m + v + 50);
            }
            Un(e, { top: g, bottom: m });
          }
          if (Qn < 20) {
            if (l.wheelStartX == null) {
              l.wheelStartX = a.scrollLeft;
              l.wheelStartY = a.scrollTop;
              l.wheelDX = n;
              l.wheelDY = o;
              setTimeout(function () {
                if (l.wheelStartX == null) {
                  return;
                }
                var e = a.scrollLeft - l.wheelStartX;
                var t = a.scrollTop - l.wheelStartY;
                var r =
                  (t && l.wheelDY && t / l.wheelDY) ||
                  (e && l.wheelDX && e / l.wheelDX);
                l.wheelStartX = l.wheelStartY = null;
                if (!r) {
                  return;
                }
                Jn = (Jn * Qn + r) / (Qn + 1);
                ++Qn;
              }, 200);
            } else {
              l.wheelDX += n;
              l.wheelDY += o;
            }
          }
        }
        var io = function (e, t) {
          this.ranges = e;
          this.primIndex = t;
        };
        io.prototype.primary = function () {
          return this.ranges[this.primIndex];
        };
        io.prototype.equals = function (e) {
          if (e == this) {
            return true;
          }
          if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) {
            return false;
          }
          for (var t = 0; t < this.ranges.length; t++) {
            var r = this.ranges[t],
              i = e.ranges[t];
            if (!lt(r.anchor, i.anchor) || !lt(r.head, i.head)) {
              return false;
            }
          }
          return true;
        };
        io.prototype.deepCopy = function () {
          var e = [];
          for (var t = 0; t < this.ranges.length; t++) {
            e[t] = new no(at(this.ranges[t].anchor), at(this.ranges[t].head));
          }
          return new io(e, this.primIndex);
        };
        io.prototype.somethingSelected = function () {
          for (var e = 0; e < this.ranges.length; e++) {
            if (!this.ranges[e].empty()) {
              return true;
            }
          }
          return false;
        };
        io.prototype.contains = function (e, t) {
          if (!t) {
            t = e;
          }
          for (var r = 0; r < this.ranges.length; r++) {
            var i = this.ranges[r];
            if (ot(t, i.from()) >= 0 && ot(e, i.to()) <= 0) {
              return r;
            }
          }
          return -1;
        };
        var no = function (e, t) {
          this.anchor = e;
          this.head = t;
        };
        no.prototype.from = function () {
          return ut(this.anchor, this.head);
        };
        no.prototype.to = function () {
          return st(this.anchor, this.head);
        };
        no.prototype.empty = function () {
          return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        };
        function oo(e, t, r) {
          var i = e && e.options.selectionsMayTouch;
          var n = t[r];
          t.sort(function (e, t) {
            return ot(e.from(), t.from());
          });
          r = B(t, n);
          for (var o = 1; o < t.length; o++) {
            var l = t[o],
              a = t[o - 1];
            var s = ot(a.to(), l.from());
            if (i && !l.empty() ? s > 0 : s >= 0) {
              var u = ut(a.from(), l.from()),
                f = st(a.to(), l.to());
              var c = a.empty() ? l.from() == l.head : a.from() == a.head;
              if (o <= r) {
                --r;
              }
              t.splice(--o, 2, new no(c ? f : u, c ? u : f));
            }
          }
          return new io(t, r);
        }
        function lo(e, t) {
          return new io([new no(e, t || e)], 0);
        }
        function ao(e) {
          if (!e.text) {
            return e.to;
          }
          return nt(
            e.from.line + e.text.length - 1,
            $(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
          );
        }
        function so(e, t) {
          if (ot(e, t.from) < 0) {
            return e;
          }
          if (ot(e, t.to) <= 0) {
            return ao(t);
          }
          var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            i = e.ch;
          if (e.line == t.to.line) {
            i += ao(t).ch - t.to.ch;
          }
          return nt(r, i);
        }
        function uo(e, t) {
          var r = [];
          for (var i = 0; i < e.sel.ranges.length; i++) {
            var n = e.sel.ranges[i];
            r.push(new no(so(n.anchor, t), so(n.head, t)));
          }
          return oo(e.cm, r, e.sel.primIndex);
        }
        function fo(e, t, r) {
          if (e.line == t.line) {
            return nt(r.line, e.ch - t.ch + r.ch);
          } else {
            return nt(r.line + (e.line - t.line), e.ch);
          }
        }
        function co(e, t, r) {
          var i = [];
          var n = nt(e.first, 0),
            o = n;
          for (var l = 0; l < t.length; l++) {
            var a = t[l];
            var s = fo(a.from, n, o);
            var u = fo(ao(a), n, o);
            n = a.to;
            o = u;
            if (r == 'around') {
              var f = e.sel.ranges[l],
                c = ot(f.head, f.anchor) < 0;
              i[l] = new no(c ? u : s, c ? s : u);
            } else {
              i[l] = new no(s, s);
            }
          }
          return new io(i, e.sel.primIndex);
        }
        function ho(e) {
          e.doc.mode = Ve(e.options, e.doc.modeOption);
          po(e);
        }
        function po(e) {
          e.doc.iter(function (e) {
            if (e.stateAfter) {
              e.stateAfter = null;
            }
            if (e.styles) {
              e.styles = null;
            }
          });
          e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first;
          Fn(e, 100);
          e.state.modeGen++;
          if (e.curOp) {
            Pi(e);
          }
        }
        function vo(e, t) {
          return (
            t.from.ch == 0 &&
            t.to.ch == 0 &&
            $(t.text) == '' &&
            (!e.cm || e.cm.options.wholeLineUpdateBefore)
          );
        }
        function go(e, t, r, i) {
          function n(e) {
            return r ? r[e] : null;
          }
          function o(e, r, n) {
            sr(e, r, n, i);
            Mr(e, 'change', e, t);
          }
          function l(e, t) {
            var r = [];
            for (var o = e; o < t; ++o) {
              r.push(new ar(u[o], n(o), i));
            }
            return r;
          }
          var a = t.from,
            s = t.to,
            u = t.text;
          var f = qe(e, a.line),
            c = qe(e, s.line);
          var h = $(u),
            d = n(u.length - 1),
            p = s.line - a.line;
          if (t.full) {
            e.insert(0, l(0, u.length));
            e.remove(u.length, e.size - u.length);
          } else if (vo(e, t)) {
            var v = l(0, u.length - 1);
            o(c, c.text, d);
            if (p) {
              e.remove(a.line, p);
            }
            if (v.length) {
              e.insert(a.line, v);
            }
          } else if (f == c) {
            if (u.length == 1) {
              o(f, f.text.slice(0, a.ch) + h + f.text.slice(s.ch), d);
            } else {
              var g = l(1, u.length - 1);
              g.push(new ar(h + f.text.slice(s.ch), d, i));
              o(f, f.text.slice(0, a.ch) + u[0], n(0));
              e.insert(a.line + 1, g);
            }
          } else if (u.length == 1) {
            o(f, f.text.slice(0, a.ch) + u[0] + c.text.slice(s.ch), n(0));
            e.remove(a.line + 1, p);
          } else {
            o(f, f.text.slice(0, a.ch) + u[0], n(0));
            o(c, h + c.text.slice(s.ch), d);
            var m = l(1, u.length - 1);
            if (p > 1) {
              e.remove(a.line + 1, p - 1);
            }
            e.insert(a.line + 1, m);
          }
          Mr(e, 'change', e, t);
        }
        function mo(e, t, r) {
          function i(e, n, o) {
            if (e.linked) {
              for (var l = 0; l < e.linked.length; ++l) {
                var a = e.linked[l];
                if (a.doc == n) {
                  continue;
                }
                var s = o && a.sharedHist;
                if (r && !s) {
                  continue;
                }
                t(a.doc, s);
                i(a.doc, e, s);
              }
            }
          }
          i(e, null, true);
        }
        function yo(e, t) {
          if (t.cm) {
            throw new Error('This document is already in use.');
          }
          e.doc = t;
          t.cm = e;
          Wi(e);
          ho(e);
          bo(e);
          e.options.direction = t.direction;
          if (!e.options.lineWrapping) {
            lr(e);
          }
          e.options.mode = t.modeOption;
          Pi(e);
        }
        function bo(e) {
          (e.doc.direction == 'rtl' ? H : k)(e.display.lineDiv, 'CodeMirror-rtl');
        }
        function wo(e) {
          An(e, function () {
            bo(e);
            Pi(e);
          });
        }
        function xo(e) {
          this.done = [];
          this.undone = [];
          this.undoDepth = e ? e.undoDepth : Infinity;
          this.lastModTime = this.lastSelTime = 0;
          this.lastOp = this.lastSelOp = null;
          this.lastOrigin = this.lastSelOrigin = null;
          this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
        }
        function Co(e, t) {
          var r = { from: at(t.from), to: ao(t), text: Ze(e, t.from, t.to) };
          Oo(e, r, t.from.line, t.to.line + 1);
          mo(
            e,
            function (e) {
              return Oo(e, r, t.from.line, t.to.line + 1);
            },
            true
          );
          return r;
        }
        function So(e) {
          while (e.length) {
            var t = $(e);
            if (t.ranges) {
              e.pop();
            } else {
              break;
            }
          }
        }
        function Lo(e, t) {
          if (t) {
            So(e.done);
            return $(e.done);
          } else if (e.done.length && !$(e.done).ranges) {
            return $(e.done);
          } else if (e.done.length > 1 && !e.done[e.done.length - 2].ranges) {
            e.done.pop();
            return $(e.done);
          }
        }
        function ko(e, t, r, i) {
          var n = e.history;
          n.undone.length = 0;
          var o = +new Date(),
            l;
          var a;
          if (
            (n.lastOp == i ||
              (n.lastOrigin == t.origin &&
                t.origin &&
                ((t.origin.charAt(0) == '+' &&
                  n.lastModTime > o - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                  t.origin.charAt(0) == '*'))) &&
            (l = Lo(n, n.lastOp == i))
          ) {
            a = $(l.changes);
            if (ot(t.from, t.to) == 0 && ot(t.from, a.to) == 0) {
              a.to = ao(t);
            } else {
              l.changes.push(Co(e, t));
            }
          } else {
            var s = $(n.done);
            if (!s || !s.ranges) {
              No(e.sel, n.done);
            }
            l = { changes: [Co(e, t)], generation: n.generation };
            n.done.push(l);
            while (n.done.length > n.undoDepth) {
              n.done.shift();
              if (!n.done[0].ranges) {
                n.done.shift();
              }
            }
          }
          n.done.push(r);
          n.generation = ++n.maxGeneration;
          n.lastModTime = n.lastSelTime = o;
          n.lastOp = n.lastSelOp = i;
          n.lastOrigin = n.lastSelOrigin = t.origin;
          if (!a) {
            me(e, 'historyAdded');
          }
        }
        function To(e, t, r, i) {
          var n = t.charAt(0);
          return (
            n == '*' ||
            (n == '+' &&
              r.ranges.length == i.ranges.length &&
              r.somethingSelected() == i.somethingSelected() &&
              new Date() - e.history.lastSelTime <=
                (e.cm ? e.cm.options.historyEventDelay : 500))
          );
        }
        function Mo(e, t, r, i) {
          var n = e.history,
            o = i && i.origin;
          if (
            r == n.lastSelOp ||
            (o &&
              n.lastSelOrigin == o &&
              ((n.lastModTime == n.lastSelTime && n.lastOrigin == o) ||
                To(e, o, $(n.done), t)))
          ) {
            n.done[n.done.length - 1] = t;
          } else {
            No(t, n.done);
          }
          n.lastSelTime = +new Date();
          n.lastSelOrigin = o;
          n.lastSelOp = r;
          if (i && i.clearRedo !== false) {
            So(n.undone);
          }
        }
        function No(e, t) {
          var r = $(t);
          if (!(r && r.ranges && r.equals(e))) {
            t.push(e);
          }
        }
        function Oo(e, t, r, i) {
          var n = t['spans_' + e.id],
            o = 0;
          e.iter(Math.max(e.first, r), Math.min(e.first + e.size, i), function (r) {
            if (r.markedSpans) {
              (n || (n = t['spans_' + e.id] = {}))[o] = r.markedSpans;
            }
            ++o;
          });
        }
        function Ao(e) {
          if (!e) {
            return null;
          }
          var t;
          for (var r = 0; r < e.length; ++r) {
            if (e[r].marker.explicitlyCleared) {
              if (!t) {
                t = e.slice(0, r);
              }
            } else if (t) {
              t.push(e[r]);
            }
          }
          return !t ? e : t.length ? t : null;
        }
        function Do(e, t) {
          var r = t['spans_' + e.id];
          if (!r) {
            return null;
          }
          var i = [];
          for (var n = 0; n < t.text.length; ++n) {
            i.push(Ao(r[n]));
          }
          return i;
        }
        function Wo(e, t) {
          var r = Do(e, t);
          var i = zt(e, t);
          if (!r) {
            return i;
          }
          if (!i) {
            return r;
          }
          for (var n = 0; n < r.length; ++n) {
            var o = r[n],
              l = i[n];
            if (o && l) {
              e: for (var a = 0; a < l.length; ++a) {
                var s = l[a];
                for (var u = 0; u < o.length; ++u) {
                  if (o[u].marker == s.marker) {
                    continue e;
                  }
                }
                o.push(s);
              }
            } else if (l) {
              r[n] = l;
            }
          }
          return r;
        }
        function Ho(e, t, r) {
          var i = [];
          for (var n = 0; n < e.length; ++n) {
            var o = e[n];
            if (o.ranges) {
              i.push(r ? io.prototype.deepCopy.call(o) : o);
              continue;
            }
            var l = o.changes,
              a = [];
            i.push({ changes: a });
            for (var s = 0; s < l.length; ++s) {
              var u = l[s],
                f = void 0;
              a.push({ from: u.from, to: u.to, text: u.text });
              if (t) {
                for (var c in u) {
                  if ((f = c.match(/^spans_(\d+)$/))) {
                    if (B(t, Number(f[1])) > -1) {
                      $(a)[c] = u[c];
                      delete u[c];
                    }
                  }
                }
              }
            }
          }
          return i;
        }
        function Fo(e, t, r, i) {
          if (i) {
            var n = e.anchor;
            if (r) {
              var o = ot(t, n) < 0;
              if (o != ot(r, n) < 0) {
                n = t;
                t = r;
              } else if (o != ot(t, r) < 0) {
                t = r;
              }
            }
            return new no(n, t);
          } else {
            return new no(r || t, t);
          }
        }
        function Po(e, t, r, i, n) {
          if (n == null) {
            n = e.cm && (e.cm.display.shift || e.extend);
          }
          Go(e, new io([Fo(e.sel.primary(), t, r, n)], 0), i);
        }
        function Eo(e, t, r) {
          var i = [];
          var n = e.cm && (e.cm.display.shift || e.extend);
          for (var o = 0; o < e.sel.ranges.length; o++) {
            i[o] = Fo(e.sel.ranges[o], t[o], null, n);
          }
          var l = oo(e.cm, i, e.sel.primIndex);
          Go(e, l, r);
        }
        function Io(e, t, r, i) {
          var n = e.sel.ranges.slice(0);
          n[t] = r;
          Go(e, oo(e.cm, n, e.sel.primIndex), i);
        }
        function zo(e, t, r, i) {
          Go(e, lo(t, r), i);
        }
        function Ro(e, t, r) {
          var i = {
            ranges: t.ranges,
            update: function (t) {
              this.ranges = [];
              for (var r = 0; r < t.length; r++) {
                this.ranges[r] = new no(ct(e, t[r].anchor), ct(e, t[r].head));
              }
            },
            origin: r && r.origin,
          };
          me(e, 'beforeSelectionChange', e, i);
          if (e.cm) {
            me(e.cm, 'beforeSelectionChange', e.cm, i);
          }
          if (i.ranges != t.ranges) {
            return oo(e.cm, i.ranges, i.ranges.length - 1);
          } else {
            return t;
          }
        }
        function Bo(e, t, r) {
          var i = e.history.done,
            n = $(i);
          if (n && n.ranges) {
            i[i.length - 1] = t;
            Uo(e, t, r);
          } else {
            Go(e, t, r);
          }
        }
        function Go(e, t, r) {
          Uo(e, t, r);
          Mo(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
        }
        function Uo(e, t, r) {
          if (
            we(e, 'beforeSelectionChange') ||
            (e.cm && we(e.cm, 'beforeSelectionChange'))
          ) {
            t = Ro(e, t, r);
          }
          var i =
            (r && r.bias) || (ot(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          Vo(e, jo(e, t, i, true));
          if (
            !(r && r.scroll === false) &&
            e.cm &&
            e.cm.getOption('readOnly') != 'nocursor'
          ) {
            ln(e.cm);
          }
        }
        function Vo(e, t) {
          if (t.equals(e.sel)) {
            return;
          }
          e.sel = t;
          if (e.cm) {
            e.cm.curOp.updateInput = 1;
            e.cm.curOp.selectionChanged = true;
            be(e.cm);
          }
          Mr(e, 'cursorActivity', e);
        }
        function Ko(e) {
          Vo(e, jo(e, e.sel, null, false));
        }
        function jo(e, t, r, i) {
          var n;
          for (var o = 0; o < t.ranges.length; o++) {
            var l = t.ranges[o];
            var a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o];
            var s = _o(e, l.anchor, a && a.anchor, r, i);
            var u = _o(e, l.head, a && a.head, r, i);
            if (n || s != l.anchor || u != l.head) {
              if (!n) {
                n = t.ranges.slice(0, o);
              }
              n[o] = new no(s, u);
            }
          }
          return n ? oo(e.cm, n, t.primIndex) : t;
        }
        function Xo(e, t, r, i, n) {
          var o = qe(e, t.line);
          if (o.markedSpans) {
            for (var l = 0; l < o.markedSpans.length; ++l) {
              var a = o.markedSpans[l],
                s = a.marker;
              var u = 'selectLeft' in s ? !s.selectLeft : s.inclusiveLeft;
              var f = 'selectRight' in s ? !s.selectRight : s.inclusiveRight;
              if (
                (a.from == null || (u ? a.from <= t.ch : a.from < t.ch)) &&
                (a.to == null || (f ? a.to >= t.ch : a.to > t.ch))
              ) {
                if (n) {
                  me(s, 'beforeCursorEnter');
                  if (s.explicitlyCleared) {
                    if (!o.markedSpans) {
                      break;
                    } else {
                      --l;
                      continue;
                    }
                  }
                }
                if (!s.atomic) {
                  continue;
                }
                if (r) {
                  var c = s.find(i < 0 ? 1 : -1),
                    h = void 0;
                  if (i < 0 ? f : u) {
                    c = Yo(e, c, -i, c && c.line == t.line ? o : null);
                  }
                  if (
                    c &&
                    c.line == t.line &&
                    (h = ot(c, r)) &&
                    (i < 0 ? h < 0 : h > 0)
                  ) {
                    return Xo(e, c, t, i, n);
                  }
                }
                var d = s.find(i < 0 ? -1 : 1);
                if (i < 0 ? u : f) {
                  d = Yo(e, d, i, d.line == t.line ? o : null);
                }
                return d ? Xo(e, d, t, i, n) : null;
              }
            }
          }
          return t;
        }
        function _o(e, t, r, i, n) {
          var o = i || 1;
          var l =
            Xo(e, t, r, o, n) ||
            (!n && Xo(e, t, r, o, true)) ||
            Xo(e, t, r, -o, n) ||
            (!n && Xo(e, t, r, -o, true));
          if (!l) {
            e.cantEdit = true;
            return nt(e.first, 0);
          }
          return l;
        }
        function Yo(e, t, r, i) {
          if (r < 0 && t.ch == 0) {
            if (t.line > e.first) {
              return ct(e, nt(t.line - 1));
            } else {
              return null;
            }
          } else if (r > 0 && t.ch == (i || qe(e, t.line)).text.length) {
            if (t.line < e.first + e.size - 1) {
              return nt(t.line + 1, 0);
            } else {
              return null;
            }
          } else {
            return new nt(t.line, t.ch + r);
          }
        }
        function $o(e) {
          e.setSelection(nt(e.firstLine(), 0), nt(e.lastLine()), V);
        }
        function qo(e, t, r) {
          var i = {
            canceled: false,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function () {
              return (i.canceled = true);
            },
          };
          if (r) {
            i.update = function (t, r, n, o) {
              if (t) {
                i.from = ct(e, t);
              }
              if (r) {
                i.to = ct(e, r);
              }
              if (n) {
                i.text = n;
              }
              if (o !== undefined) {
                i.origin = o;
              }
            };
          }
          me(e, 'beforeChange', e, i);
          if (e.cm) {
            me(e.cm, 'beforeChange', e.cm, i);
          }
          if (i.canceled) {
            if (e.cm) {
              e.cm.curOp.updateInput = 2;
            }
            return null;
          }
          return { from: i.from, to: i.to, text: i.text, origin: i.origin };
        }
        function Zo(e, t, r) {
          if (e.cm) {
            if (!e.cm.curOp) {
              return Dn(e.cm, Zo)(e, t, r);
            }
            if (e.cm.state.suppressEdits) {
              return;
            }
          }
          if (we(e, 'beforeChange') || (e.cm && we(e.cm, 'beforeChange'))) {
            t = qo(e, t, true);
            if (!t) {
              return;
            }
          }
          var i = Nt && !r && Bt(e, t.from, t.to);
          if (i) {
            for (var n = i.length - 1; n >= 0; --n) {
              Qo(e, {
                from: i[n].from,
                to: i[n].to,
                text: n ? [''] : t.text,
                origin: t.origin,
              });
            }
          } else {
            Qo(e, t);
          }
        }
        function Qo(e, t) {
          if (t.text.length == 1 && t.text[0] == '' && ot(t.from, t.to) == 0) {
            return;
          }
          var r = uo(e, t);
          ko(e, t, r, e.cm ? e.cm.curOp.id : NaN);
          tl(e, t, r, zt(e, t));
          var i = [];
          mo(e, function (e, r) {
            if (!r && B(i, e.history) == -1) {
              ll(e.history, t);
              i.push(e.history);
            }
            tl(e, t, null, zt(e, t));
          });
        }
        function Jo(e, t, r) {
          var i = e.cm && e.cm.state.suppressEdits;
          if (i && !r) {
            return;
          }
          var n = e.history,
            o,
            l = e.sel;
          var a = t == 'undo' ? n.done : n.undone,
            s = t == 'undo' ? n.undone : n.done;
          var u = 0;
          for (; u < a.length; u++) {
            o = a[u];
            if (r ? o.ranges && !o.equals(e.sel) : !o.ranges) {
              break;
            }
          }
          if (u == a.length) {
            return;
          }
          n.lastOrigin = n.lastSelOrigin = null;
          for (;;) {
            o = a.pop();
            if (o.ranges) {
              No(o, s);
              if (r && !o.equals(e.sel)) {
                Go(e, o, { clearRedo: false });
                return;
              }
              l = o;
            } else if (i) {
              a.push(o);
              return;
            } else {
              break;
            }
          }
          var f = [];
          No(l, s);
          s.push({ changes: f, generation: n.generation });
          n.generation = o.generation || ++n.maxGeneration;
          var c = we(e, 'beforeChange') || (e.cm && we(e.cm, 'beforeChange'));
          var h = function (r) {
            var i = o.changes[r];
            i.origin = t;
            if (c && !qo(e, i, false)) {
              a.length = 0;
              return {};
            }
            f.push(Co(e, i));
            var n = r ? uo(e, i) : $(a);
            tl(e, i, n, Wo(e, i));
            if (!r && e.cm) {
              e.cm.scrollIntoView({ from: i.from, to: ao(i) });
            }
            var l = [];
            mo(e, function (e, t) {
              if (!t && B(l, e.history) == -1) {
                ll(e.history, i);
                l.push(e.history);
              }
              tl(e, i, null, Wo(e, i));
            });
          };
          for (var d = o.changes.length - 1; d >= 0; --d) {
            var p = h(d);
            if (p) return p.v;
          }
        }
        function el(e, t) {
          if (t == 0) {
            return;
          }
          e.first += t;
          e.sel = new io(
            q(e.sel.ranges, function (e) {
              return new no(
                nt(e.anchor.line + t, e.anchor.ch),
                nt(e.head.line + t, e.head.ch)
              );
            }),
            e.sel.primIndex
          );
          if (e.cm) {
            Pi(e.cm, e.first, e.first - t, t);
            for (var r = e.cm.display, i = r.viewFrom; i < r.viewTo; i++) {
              Ei(e.cm, i, 'gutter');
            }
          }
        }
        function tl(e, t, r, i) {
          if (e.cm && !e.cm.curOp) {
            return Dn(e.cm, tl)(e, t, r, i);
          }
          if (t.to.line < e.first) {
            el(e, t.text.length - 1 - (t.to.line - t.from.line));
            return;
          }
          if (t.from.line > e.lastLine()) {
            return;
          }
          if (t.from.line < e.first) {
            var n = t.text.length - 1 - (e.first - t.from.line);
            el(e, n);
            t = {
              from: nt(e.first, 0),
              to: nt(t.to.line + n, t.to.ch),
              text: [$(t.text)],
              origin: t.origin,
            };
          }
          var o = e.lastLine();
          if (t.to.line > o) {
            t = {
              from: t.from,
              to: nt(o, qe(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin,
            };
          }
          t.removed = Ze(e, t.from, t.to);
          if (!r) {
            r = uo(e, t);
          }
          if (e.cm) {
            rl(e.cm, t, i);
          } else {
            go(e, t, i);
          }
          Uo(e, r, V);
          if (e.cantEdit && _o(e, nt(e.firstLine(), 0))) {
            e.cantEdit = false;
          }
        }
        function rl(e, t, r) {
          var i = e.doc,
            n = e.display,
            o = t.from,
            l = t.to;
          var a = false,
            s = o.line;
          if (!e.options.lineWrapping) {
            s = et(Zt(qe(i, o.line)));
            i.iter(s, l.line + 1, function (e) {
              if (e == n.maxLine) {
                a = true;
                return true;
              }
            });
          }
          if (i.sel.contains(t.from, t.to) > -1) {
            be(e);
          }
          go(i, t, r, Di(e));
          if (!e.options.lineWrapping) {
            i.iter(s, o.line + t.text.length, function (e) {
              var t = or(e);
              if (t > n.maxLineLength) {
                n.maxLine = e;
                n.maxLineLength = t;
                n.maxLineChanged = true;
                a = false;
              }
            });
            if (a) {
              e.curOp.updateMaxLine = true;
            }
          }
          Mt(i, o.line);
          Fn(e, 400);
          var u = t.text.length - (l.line - o.line) - 1;
          if (t.full) {
            Pi(e);
          } else if (o.line == l.line && t.text.length == 1 && !vo(e.doc, t)) {
            Ei(e, o.line, 'text');
          } else {
            Pi(e, o.line, l.line + 1, u);
          }
          var f = we(e, 'changes'),
            c = we(e, 'change');
          if (c || f) {
            var h = {
              from: o,
              to: l,
              text: t.text,
              removed: t.removed,
              origin: t.origin,
            };
            if (c) {
              Mr(e, 'change', e, h);
            }
            if (f) {
              (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
            }
          }
          e.display.selForContextMenu = null;
        }
        function il(e, t, r, i, n) {
          var o;
          if (!i) {
            i = r;
          }
          if (ot(i, r) < 0) {
            (o = [i, r]), (r = o[0]), (i = o[1]);
          }
          if (typeof t == 'string') {
            t = e.splitLines(t);
          }
          Zo(e, { from: r, to: i, text: t, origin: n });
        }
        function nl(e, t, r, i) {
          if (r < e.line) {
            e.line += i;
          } else if (t < e.line) {
            e.line = t;
            e.ch = 0;
          }
        }
        function ol(e, t, r, i) {
          for (var n = 0; n < e.length; ++n) {
            var o = e[n],
              l = true;
            if (o.ranges) {
              if (!o.copied) {
                o = e[n] = o.deepCopy();
                o.copied = true;
              }
              for (var a = 0; a < o.ranges.length; a++) {
                nl(o.ranges[a].anchor, t, r, i);
                nl(o.ranges[a].head, t, r, i);
              }
              continue;
            }
            for (var s = 0; s < o.changes.length; ++s) {
              var u = o.changes[s];
              if (r < u.from.line) {
                u.from = nt(u.from.line + i, u.from.ch);
                u.to = nt(u.to.line + i, u.to.ch);
              } else if (t <= u.to.line) {
                l = false;
                break;
              }
            }
            if (!l) {
              e.splice(0, n + 1);
              n = 0;
            }
          }
        }
        function ll(e, t) {
          var r = t.from.line,
            i = t.to.line,
            n = t.text.length - (i - r) - 1;
          ol(e.done, r, i, n);
          ol(e.undone, r, i, n);
        }
        function al(e, t, r, i) {
          var n = t,
            o = t;
          if (typeof t == 'number') {
            o = qe(e, ft(e, t));
          } else {
            n = et(t);
          }
          if (n == null) {
            return null;
          }
          if (i(o, n) && e.cm) {
            Ei(e.cm, n, r);
          }
          return o;
        }
        function sl(e) {
          this.lines = e;
          this.parent = null;
          var t = 0;
          for (var r = 0; r < e.length; ++r) {
            e[r].parent = this;
            t += e[r].height;
          }
          this.height = t;
        }
        sl.prototype = {
          chunkSize: function () {
            return this.lines.length;
          },
          removeInner: function (e, t) {
            for (var r = e, i = e + t; r < i; ++r) {
              var n = this.lines[r];
              this.height -= n.height;
              ur(n);
              Mr(n, 'delete');
            }
            this.lines.splice(e, t);
          },
          collapse: function (e) {
            e.push.apply(e, this.lines);
          },
          insertInner: function (e, t, r) {
            this.height += r;
            this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
            for (var i = 0; i < t.length; ++i) {
              t[i].parent = this;
            }
          },
          iterN: function (e, t, r) {
            for (var i = e + t; e < i; ++e) {
              if (r(this.lines[e])) {
                return true;
              }
            }
          },
        };
        function ul(e) {
          this.children = e;
          var t = 0,
            r = 0;
          for (var i = 0; i < e.length; ++i) {
            var n = e[i];
            t += n.chunkSize();
            r += n.height;
            n.parent = this;
          }
          this.size = t;
          this.height = r;
          this.parent = null;
        }
        ul.prototype = {
          chunkSize: function () {
            return this.size;
          },
          removeInner: function (e, t) {
            this.size -= t;
            for (var r = 0; r < this.children.length; ++r) {
              var i = this.children[r],
                n = i.chunkSize();
              if (e < n) {
                var o = Math.min(t, n - e),
                  l = i.height;
                i.removeInner(e, o);
                this.height -= l - i.height;
                if (n == o) {
                  this.children.splice(r--, 1);
                  i.parent = null;
                }
                if ((t -= o) == 0) {
                  break;
                }
                e = 0;
              } else {
                e -= n;
              }
            }
            if (
              this.size - t < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof sl))
            ) {
              var a = [];
              this.collapse(a);
              this.children = [new sl(a)];
              this.children[0].parent = this;
            }
          },
          collapse: function (e) {
            for (var t = 0; t < this.children.length; ++t) {
              this.children[t].collapse(e);
            }
          },
          insertInner: function (e, t, r) {
            this.size += t.length;
            this.height += r;
            for (var i = 0; i < this.children.length; ++i) {
              var n = this.children[i],
                o = n.chunkSize();
              if (e <= o) {
                n.insertInner(e, t, r);
                if (n.lines && n.lines.length > 50) {
                  var l = (n.lines.length % 25) + 25;
                  for (var a = l; a < n.lines.length; ) {
                    var s = new sl(n.lines.slice(a, (a += 25)));
                    n.height -= s.height;
                    this.children.splice(++i, 0, s);
                    s.parent = this;
                  }
                  n.lines = n.lines.slice(0, l);
                  this.maybeSpill();
                }
                break;
              }
              e -= o;
            }
          },
          maybeSpill: function () {
            if (this.children.length <= 10) {
              return;
            }
            var e = this;
            do {
              var t = e.children.splice(e.children.length - 5, 5);
              var r = new ul(t);
              if (!e.parent) {
                var i = new ul(e.children);
                i.parent = e;
                e.children = [i, r];
                e = i;
              } else {
                e.size -= r.size;
                e.height -= r.height;
                var n = B(e.parent.children, e);
                e.parent.children.splice(n + 1, 0, r);
              }
              r.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          },
          iterN: function (e, t, r) {
            for (var i = 0; i < this.children.length; ++i) {
              var n = this.children[i],
                o = n.chunkSize();
              if (e < o) {
                var l = Math.min(t, o - e);
                if (n.iterN(e, l, r)) {
                  return true;
                }
                if ((t -= l) == 0) {
                  break;
                }
                e = 0;
              } else {
                e -= o;
              }
            }
          },
        };
        var fl = function (e, t, r) {
          if (r) {
            for (var i in r) {
              if (r.hasOwnProperty(i)) {
                this[i] = r[i];
              }
            }
          }
          this.doc = e;
          this.node = t;
        };
        fl.prototype.clear = function () {
          var e = this.doc.cm,
            t = this.line.widgets,
            r = this.line,
            i = et(r);
          if (i == null || !t) {
            return;
          }
          for (var n = 0; n < t.length; ++n) {
            if (t[n] == this) {
              t.splice(n--, 1);
            }
          }
          if (!t.length) {
            r.widgets = null;
          }
          var o = Gr(this);
          Je(r, Math.max(0, r.height - o));
          if (e) {
            An(e, function () {
              cl(e, r, -o);
              Ei(e, i, 'widget');
            });
            Mr(e, 'lineWidgetCleared', e, this, i);
          }
        };
        fl.prototype.changed = function () {
          var e = this;
          var t = this.height,
            r = this.doc.cm,
            i = this.line;
          this.height = null;
          var n = Gr(this) - t;
          if (!n) {
            return;
          }
          if (!rr(this.doc, i)) {
            Je(i, i.height + n);
          }
          if (r) {
            An(r, function () {
              r.curOp.forceUpdate = true;
              cl(r, i, n);
              Mr(r, 'lineWidgetChanged', r, e, et(i));
            });
          }
        };
        xe(fl);
        function cl(e, t, r) {
          if (nr(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop)) {
            on(e, r);
          }
        }
        function hl(e, t, r, i) {
          var n = new fl(e, r, i);
          var o = e.cm;
          if (o && n.noHScroll) {
            o.display.alignWidgets = true;
          }
          al(e, t, 'widget', function (t) {
            var r = t.widgets || (t.widgets = []);
            if (n.insertAt == null) {
              r.push(n);
            } else {
              r.splice(Math.min(r.length, Math.max(0, n.insertAt)), 0, n);
            }
            n.line = t;
            if (o && !rr(e, t)) {
              var i = nr(t) < e.scrollTop;
              Je(t, t.height + Gr(n));
              if (i) {
                on(o, n.height);
              }
              o.curOp.forceUpdate = true;
            }
            return true;
          });
          if (o) {
            Mr(o, 'lineWidgetAdded', o, n, typeof t == 'number' ? t : et(t));
          }
          return n;
        }
        var dl = 0;
        var pl = function (e, t) {
          this.lines = [];
          this.type = t;
          this.doc = e;
          this.id = ++dl;
        };
        pl.prototype.clear = function () {
          if (this.explicitlyCleared) {
            return;
          }
          var e = this.doc.cm,
            t = e && !e.curOp;
          if (t) {
            Cn(e);
          }
          if (we(this, 'clear')) {
            var r = this.find();
            if (r) {
              Mr(this, 'clear', r.from, r.to);
            }
          }
          var i = null,
            n = null;
          for (var o = 0; o < this.lines.length; ++o) {
            var l = this.lines[o];
            var a = Ht(l.markedSpans, this);
            if (e && !this.collapsed) {
              Ei(e, et(l), 'text');
            } else if (e) {
              if (a.to != null) {
                n = et(l);
              }
              if (a.from != null) {
                i = et(l);
              }
            }
            l.markedSpans = Ft(l.markedSpans, a);
            if (a.from == null && this.collapsed && !rr(this.doc, l) && e) {
              Je(l, Mi(e.display));
            }
          }
          if (e && this.collapsed && !e.options.lineWrapping) {
            for (var s = 0; s < this.lines.length; ++s) {
              var u = Zt(this.lines[s]),
                f = or(u);
              if (f > e.display.maxLineLength) {
                e.display.maxLine = u;
                e.display.maxLineLength = f;
                e.display.maxLineChanged = true;
              }
            }
          }
          if (i != null && e && this.collapsed) {
            Pi(e, i, n + 1);
          }
          this.lines.length = 0;
          this.explicitlyCleared = true;
          if (this.atomic && this.doc.cantEdit) {
            this.doc.cantEdit = false;
            if (e) {
              Ko(e.doc);
            }
          }
          if (e) {
            Mr(e, 'markerCleared', e, this, i, n);
          }
          if (t) {
            Sn(e);
          }
          if (this.parent) {
            this.parent.clear();
          }
        };
        pl.prototype.find = function (e, t) {
          if (e == null && this.type == 'bookmark') {
            e = 1;
          }
          var r, i;
          for (var n = 0; n < this.lines.length; ++n) {
            var o = this.lines[n];
            var l = Ht(o.markedSpans, this);
            if (l.from != null) {
              r = nt(t ? o : et(o), l.from);
              if (e == -1) {
                return r;
              }
            }
            if (l.to != null) {
              i = nt(t ? o : et(o), l.to);
              if (e == 1) {
                return i;
              }
            }
          }
          return r && { from: r, to: i };
        };
        pl.prototype.changed = function () {
          var e = this;
          var t = this.find(-1, true),
            r = this,
            i = this.doc.cm;
          if (!t || !i) {
            return;
          }
          An(i, function () {
            var n = t.line,
              o = et(t.line);
            var l = Jr(i, o);
            if (l) {
              ai(l);
              i.curOp.selectionChanged = i.curOp.forceUpdate = true;
            }
            i.curOp.updateMaxLine = true;
            if (!rr(r.doc, n) && r.height != null) {
              var a = r.height;
              r.height = null;
              var s = Gr(r) - a;
              if (s) {
                Je(n, n.height + s);
              }
            }
            Mr(i, 'markerChanged', i, e);
          });
        };
        pl.prototype.attachLine = function (e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            if (!t.maybeHiddenMarkers || B(t.maybeHiddenMarkers, this) == -1) {
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
            }
          }
          this.lines.push(e);
        };
        pl.prototype.detachLine = function (e) {
          this.lines.splice(B(this.lines, e), 1);
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        };
        xe(pl);
        function vl(e, t, r, i, n) {
          if (i && i.shared) {
            return ml(e, t, r, i, n);
          }
          if (e.cm && !e.cm.curOp) {
            return Dn(e.cm, vl)(e, t, r, i, n);
          }
          var o = new pl(e, n),
            l = ot(t, r);
          if (i) {
            I(i, o, false);
          }
          if (l > 0 || (l == 0 && o.clearWhenEmpty !== false)) {
            return o;
          }
          if (o.replacedWith) {
            o.collapsed = true;
            o.widgetNode = O('span', [o.replacedWith], 'CodeMirror-widget');
            if (!i.handleMouseEvents) {
              o.widgetNode.setAttribute('cm-ignore-events', 'true');
            }
            if (i.insertLeft) {
              o.widgetNode.insertLeft = true;
            }
          }
          if (o.collapsed) {
            if (
              qt(e, t.line, t, r, o) ||
              (t.line != r.line && qt(e, r.line, t, r, o))
            ) {
              throw new Error(
                'Inserting collapsed marker partially overlapping an existing one'
              );
            }
            Dt();
          }
          if (o.addToHistory) {
            ko(e, { from: t, to: r, origin: 'markText' }, e.sel, NaN);
          }
          var a = t.line,
            s = e.cm,
            u;
          e.iter(a, r.line + 1, function (i) {
            if (
              s &&
              o.collapsed &&
              !s.options.lineWrapping &&
              Zt(i) == s.display.maxLine
            ) {
              u = true;
            }
            if (o.collapsed && a != t.line) {
              Je(i, 0);
            }
            Pt(
              i,
              new Wt(o, a == t.line ? t.ch : null, a == r.line ? r.ch : null),
              e.cm && e.cm.curOp
            );
            ++a;
          });
          if (o.collapsed) {
            e.iter(t.line, r.line + 1, function (t) {
              if (rr(e, t)) {
                Je(t, 0);
              }
            });
          }
          if (o.clearOnEnter) {
            pe(o, 'beforeCursorEnter', function () {
              return o.clear();
            });
          }
          if (o.readOnly) {
            At();
            if (e.history.done.length || e.history.undone.length) {
              e.clearHistory();
            }
          }
          if (o.collapsed) {
            o.id = ++dl;
            o.atomic = true;
          }
          if (s) {
            if (u) {
              s.curOp.updateMaxLine = true;
            }
            if (o.collapsed) {
              Pi(s, t.line, r.line + 1);
            } else if (
              o.className ||
              o.startStyle ||
              o.endStyle ||
              o.css ||
              o.attributes ||
              o.title
            ) {
              for (var f = t.line; f <= r.line; f++) {
                Ei(s, f, 'text');
              }
            }
            if (o.atomic) {
              Ko(s.doc);
            }
            Mr(s, 'markerAdded', s, o);
          }
          return o;
        }
        var gl = function (e, t) {
          this.markers = e;
          this.primary = t;
          for (var r = 0; r < e.length; ++r) {
            e[r].parent = this;
          }
        };
        gl.prototype.clear = function () {
          if (this.explicitlyCleared) {
            return;
          }
          this.explicitlyCleared = true;
          for (var e = 0; e < this.markers.length; ++e) {
            this.markers[e].clear();
          }
          Mr(this, 'clear');
        };
        gl.prototype.find = function (e, t) {
          return this.primary.find(e, t);
        };
        xe(gl);
        function ml(e, t, r, i, n) {
          i = I(i);
          i.shared = false;
          var o = [vl(e, t, r, i, n)],
            l = o[0];
          var a = i.widgetNode;
          mo(e, function (e) {
            if (a) {
              i.widgetNode = a.cloneNode(true);
            }
            o.push(vl(e, ct(e, t), ct(e, r), i, n));
            for (var s = 0; s < e.linked.length; ++s) {
              if (e.linked[s].isParent) {
                return;
              }
            }
            l = $(o);
          });
          return new gl(o, l);
        }
        function yl(e) {
          return e.findMarks(nt(e.first, 0), e.clipPos(nt(e.lastLine())), function (e) {
            return e.parent;
          });
        }
        function bl(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r],
              n = i.find();
            var o = e.clipPos(n.from),
              l = e.clipPos(n.to);
            if (ot(o, l)) {
              var a = vl(e, o, l, i.primary, i.primary.type);
              i.markers.push(a);
              a.parent = i;
            }
          }
        }
        function wl(e) {
          var t = function (t) {
            var r = e[t],
              i = [r.primary.doc];
            mo(r.primary.doc, function (e) {
              return i.push(e);
            });
            for (var n = 0; n < r.markers.length; n++) {
              var o = r.markers[n];
              if (B(i, o.doc) == -1) {
                o.parent = null;
                r.markers.splice(n--, 1);
              }
            }
          };
          for (var r = 0; r < e.length; r++) t(r);
        }
        var xl = 0;
        var Cl = function (e, t, r, i, n) {
          if (!(this instanceof Cl)) {
            return new Cl(e, t, r, i, n);
          }
          if (r == null) {
            r = 0;
          }
          ul.call(this, [new sl([new ar('', null)])]);
          this.first = r;
          this.scrollTop = this.scrollLeft = 0;
          this.cantEdit = false;
          this.cleanGeneration = 1;
          this.modeFrontier = this.highlightFrontier = r;
          var o = nt(r, 0);
          this.sel = lo(o);
          this.history = new xo(null);
          this.id = ++xl;
          this.modeOption = t;
          this.lineSep = i;
          this.direction = n == 'rtl' ? 'rtl' : 'ltr';
          this.extend = false;
          if (typeof e == 'string') {
            e = this.splitLines(e);
          }
          go(this, { from: o, to: o, text: e });
          Go(this, lo(o), V);
        };
        Cl.prototype = J(ul.prototype, {
          constructor: Cl,
          iter: function (e, t, r) {
            if (r) {
              this.iterN(e - this.first, t - e, r);
            } else {
              this.iterN(this.first, this.first + this.size, e);
            }
          },
          insert: function (e, t) {
            var r = 0;
            for (var i = 0; i < t.length; ++i) {
              r += t[i].height;
            }
            this.insertInner(e - this.first, t, r);
          },
          remove: function (e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function (e) {
            var t = Qe(this, this.first, this.first + this.size);
            if (e === false) {
              return t;
            }
            return t.join(e || this.lineSeparator());
          },
          setValue: Hn(function (e) {
            var t = nt(this.first, 0),
              r = this.first + this.size - 1;
            Zo(
              this,
              {
                from: t,
                to: nt(r, qe(this, r).text.length),
                text: this.splitLines(e),
                origin: 'setValue',
                full: true,
              },
              true
            );
            if (this.cm) {
              an(this.cm, 0, 0);
            }
            Go(this, lo(t), V);
          }),
          replaceRange: function (e, t, r, i) {
            t = ct(this, t);
            r = r ? ct(this, r) : t;
            il(this, e, t, r, i);
          },
          getRange: function (e, t, r) {
            var i = Ze(this, ct(this, e), ct(this, t));
            if (r === false) {
              return i;
            }
            return i.join(r || this.lineSeparator());
          },
          getLine: function (e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function (e) {
            if (rt(this, e)) {
              return qe(this, e);
            }
          },
          getLineNumber: function (e) {
            return et(e);
          },
          getLineHandleVisualStart: function (e) {
            if (typeof e == 'number') {
              e = qe(this, e);
            }
            return Zt(e);
          },
          lineCount: function () {
            return this.size;
          },
          firstLine: function () {
            return this.first;
          },
          lastLine: function () {
            return this.first + this.size - 1;
          },
          clipPos: function (e) {
            return ct(this, e);
          },
          getCursor: function (e) {
            var t = this.sel.primary(),
              r;
            if (e == null || e == 'head') {
              r = t.head;
            } else if (e == 'anchor') {
              r = t.anchor;
            } else if (e == 'end' || e == 'to' || e === false) {
              r = t.to();
            } else {
              r = t.from();
            }
            return r;
          },
          listSelections: function () {
            return this.sel.ranges;
          },
          somethingSelected: function () {
            return this.sel.somethingSelected();
          },
          setCursor: Hn(function (e, t, r) {
            zo(this, ct(this, typeof e == 'number' ? nt(e, t || 0) : e), null, r);
          }),
          setSelection: Hn(function (e, t, r) {
            zo(this, ct(this, e), ct(this, t || e), r);
          }),
          extendSelection: Hn(function (e, t, r) {
            Po(this, ct(this, e), t && ct(this, t), r);
          }),
          extendSelections: Hn(function (e, t) {
            Eo(this, dt(this, e), t);
          }),
          extendSelectionsBy: Hn(function (e, t) {
            var r = q(this.sel.ranges, e);
            Eo(this, dt(this, r), t);
          }),
          setSelections: Hn(function (e, t, r) {
            if (!e.length) {
              return;
            }
            var i = [];
            for (var n = 0; n < e.length; n++) {
              i[n] = new no(ct(this, e[n].anchor), ct(this, e[n].head || e[n].anchor));
            }
            if (t == null) {
              t = Math.min(e.length - 1, this.sel.primIndex);
            }
            Go(this, oo(this.cm, i, t), r);
          }),
          addSelection: Hn(function (e, t, r) {
            var i = this.sel.ranges.slice(0);
            i.push(new no(ct(this, e), ct(this, t || e)));
            Go(this, oo(this.cm, i, i.length - 1), r);
          }),
          getSelection: function (e) {
            var t = this.sel.ranges,
              r;
            for (var i = 0; i < t.length; i++) {
              var n = Ze(this, t[i].from(), t[i].to());
              r = r ? r.concat(n) : n;
            }
            if (e === false) {
              return r;
            } else {
              return r.join(e || this.lineSeparator());
            }
          },
          getSelections: function (e) {
            var t = [],
              r = this.sel.ranges;
            for (var i = 0; i < r.length; i++) {
              var n = Ze(this, r[i].from(), r[i].to());
              if (e !== false) {
                n = n.join(e || this.lineSeparator());
              }
              t[i] = n;
            }
            return t;
          },
          replaceSelection: function (e, t, r) {
            var i = [];
            for (var n = 0; n < this.sel.ranges.length; n++) {
              i[n] = e;
            }
            this.replaceSelections(i, t, r || '+input');
          },
          replaceSelections: Hn(function (e, t, r) {
            var i = [],
              n = this.sel;
            for (var o = 0; o < n.ranges.length; o++) {
              var l = n.ranges[o];
              i[o] = {
                from: l.from(),
                to: l.to(),
                text: this.splitLines(e[o]),
                origin: r,
              };
            }
            var a = t && t != 'end' && co(this, i, t);
            for (var s = i.length - 1; s >= 0; s--) {
              Zo(this, i[s]);
            }
            if (a) {
              Bo(this, a);
            } else if (this.cm) {
              ln(this.cm);
            }
          }),
          undo: Hn(function () {
            Jo(this, 'undo');
          }),
          redo: Hn(function () {
            Jo(this, 'redo');
          }),
          undoSelection: Hn(function () {
            Jo(this, 'undo', true);
          }),
          redoSelection: Hn(function () {
            Jo(this, 'redo', true);
          }),
          setExtending: function (e) {
            this.extend = e;
          },
          getExtending: function () {
            return this.extend;
          },
          historySize: function () {
            var e = this.history,
              t = 0,
              r = 0;
            for (var i = 0; i < e.done.length; i++) {
              if (!e.done[i].ranges) {
                ++t;
              }
            }
            for (var n = 0; n < e.undone.length; n++) {
              if (!e.undone[n].ranges) {
                ++r;
              }
            }
            return { undo: t, redo: r };
          },
          clearHistory: function () {
            var e = this;
            this.history = new xo(this.history);
            mo(
              this,
              function (t) {
                return (t.history = e.history);
              },
              true
            );
          },
          markClean: function () {
            this.cleanGeneration = this.changeGeneration(true);
          },
          changeGeneration: function (e) {
            if (e) {
              this.history.lastOp =
                this.history.lastSelOp =
                this.history.lastOrigin =
                  null;
            }
            return this.history.generation;
          },
          isClean: function (e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function () {
            return { done: Ho(this.history.done), undone: Ho(this.history.undone) };
          },
          setHistory: function (e) {
            var t = (this.history = new xo(this.history));
            t.done = Ho(e.done.slice(0), null, true);
            t.undone = Ho(e.undone.slice(0), null, true);
          },
          setGutterMarker: Hn(function (e, t, r) {
            return al(this, e, 'gutter', function (e) {
              var i = e.gutterMarkers || (e.gutterMarkers = {});
              i[t] = r;
              if (!r && ie(i)) {
                e.gutterMarkers = null;
              }
              return true;
            });
          }),
          clearGutter: Hn(function (e) {
            var t = this;
            this.iter(function (r) {
              if (r.gutterMarkers && r.gutterMarkers[e]) {
                al(t, r, 'gutter', function () {
                  r.gutterMarkers[e] = null;
                  if (ie(r.gutterMarkers)) {
                    r.gutterMarkers = null;
                  }
                  return true;
                });
              }
            });
          }),
          lineInfo: function (e) {
            var t;
            if (typeof e == 'number') {
              if (!rt(this, e)) {
                return null;
              }
              t = e;
              e = qe(this, e);
              if (!e) {
                return null;
              }
            } else {
              t = et(e);
              if (t == null) {
                return null;
              }
            }
            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets,
            };
          },
          addLineClass: Hn(function (e, t, r) {
            return al(this, e, t == 'gutter' ? 'gutter' : 'class', function (e) {
              var i =
                t == 'text'
                  ? 'textClass'
                  : t == 'background'
                  ? 'bgClass'
                  : t == 'gutter'
                  ? 'gutterClass'
                  : 'wrapClass';
              if (!e[i]) {
                e[i] = r;
              } else if (L(r).test(e[i])) {
                return false;
              } else {
                e[i] += ' ' + r;
              }
              return true;
            });
          }),
          removeLineClass: Hn(function (e, t, r) {
            return al(this, e, t == 'gutter' ? 'gutter' : 'class', function (e) {
              var i =
                t == 'text'
                  ? 'textClass'
                  : t == 'background'
                  ? 'bgClass'
                  : t == 'gutter'
                  ? 'gutterClass'
                  : 'wrapClass';
              var n = e[i];
              if (!n) {
                return false;
              } else if (r == null) {
                e[i] = null;
              } else {
                var o = n.match(L(r));
                if (!o) {
                  return false;
                }
                var l = o.index + o[0].length;
                e[i] =
                  n.slice(0, o.index) +
                    (!o.index || l == n.length ? '' : ' ') +
                    n.slice(l) || null;
              }
              return true;
            });
          }),
          addLineWidget: Hn(function (e, t, r) {
            return hl(this, e, t, r);
          }),
          removeLineWidget: function (e) {
            e.clear();
          },
          markText: function (e, t, r) {
            return vl(this, ct(this, e), ct(this, t), r, (r && r.type) || 'range');
          },
          setBookmark: function (e, t) {
            var r = {
              replacedWith: t && (t.nodeType == null ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: false,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents,
            };
            e = ct(this, e);
            return vl(this, e, e, r, 'bookmark');
          },
          findMarksAt: function (e) {
            e = ct(this, e);
            var t = [],
              r = qe(this, e.line).markedSpans;
            if (r) {
              for (var i = 0; i < r.length; ++i) {
                var n = r[i];
                if (
                  (n.from == null || n.from <= e.ch) &&
                  (n.to == null || n.to >= e.ch)
                ) {
                  t.push(n.marker.parent || n.marker);
                }
              }
            }
            return t;
          },
          findMarks: function (e, t, r) {
            e = ct(this, e);
            t = ct(this, t);
            var i = [],
              n = e.line;
            this.iter(e.line, t.line + 1, function (o) {
              var l = o.markedSpans;
              if (l) {
                for (var a = 0; a < l.length; a++) {
                  var s = l[a];
                  if (
                    !(
                      (s.to != null && n == e.line && e.ch >= s.to) ||
                      (s.from == null && n != e.line) ||
                      (s.from != null && n == t.line && s.from >= t.ch)
                    ) &&
                    (!r || r(s.marker))
                  ) {
                    i.push(s.marker.parent || s.marker);
                  }
                }
              }
              ++n;
            });
            return i;
          },
          getAllMarks: function () {
            var e = [];
            this.iter(function (t) {
              var r = t.markedSpans;
              if (r) {
                for (var i = 0; i < r.length; ++i) {
                  if (r[i].from != null) {
                    e.push(r[i].marker);
                  }
                }
              }
            });
            return e;
          },
          posFromIndex: function (e) {
            var t,
              r = this.first,
              i = this.lineSeparator().length;
            this.iter(function (n) {
              var o = n.text.length + i;
              if (o > e) {
                t = e;
                return true;
              }
              e -= o;
              ++r;
            });
            return ct(this, nt(r, t));
          },
          indexFromPos: function (e) {
            e = ct(this, e);
            var t = e.ch;
            if (e.line < this.first || e.ch < 0) {
              return 0;
            }
            var r = this.lineSeparator().length;
            this.iter(this.first, e.line, function (e) {
              t += e.text.length + r;
            });
            return t;
          },
          copy: function (e) {
            var t = new Cl(
              Qe(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction
            );
            t.scrollTop = this.scrollTop;
            t.scrollLeft = this.scrollLeft;
            t.sel = this.sel;
            t.extend = false;
            if (e) {
              t.history.undoDepth = this.history.undoDepth;
              t.setHistory(this.getHistory());
            }
            return t;
          },
          linkedDoc: function (e) {
            if (!e) {
              e = {};
            }
            var t = this.first,
              r = this.first + this.size;
            if (e.from != null && e.from > t) {
              t = e.from;
            }
            if (e.to != null && e.to < r) {
              r = e.to;
            }
            var i = new Cl(
              Qe(this, t, r),
              e.mode || this.modeOption,
              t,
              this.lineSep,
              this.direction
            );
            if (e.sharedHist) {
              i.history = this.history;
            }
            (this.linked || (this.linked = [])).push({
              doc: i,
              sharedHist: e.sharedHist,
            });
            i.linked = [{ doc: this, isParent: true, sharedHist: e.sharedHist }];
            bl(i, yl(this));
            return i;
          },
          unlinkDoc: function (e) {
            if (e instanceof Ea) {
              e = e.doc;
            }
            if (this.linked) {
              for (var t = 0; t < this.linked.length; ++t) {
                var r = this.linked[t];
                if (r.doc != e) {
                  continue;
                }
                this.linked.splice(t, 1);
                e.unlinkDoc(this);
                wl(yl(this));
                break;
              }
            }
            if (e.history == this.history) {
              var i = [e.id];
              mo(
                e,
                function (e) {
                  return i.push(e.id);
                },
                true
              );
              e.history = new xo(null);
              e.history.done = Ho(this.history.done, i);
              e.history.undone = Ho(this.history.undone, i);
            }
          },
          iterLinkedDocs: function (e) {
            mo(this, e);
          },
          getMode: function () {
            return this.mode;
          },
          getEditor: function () {
            return this.cm;
          },
          splitLines: function (e) {
            if (this.lineSep) {
              return e.split(this.lineSep);
            }
            return He(e);
          },
          lineSeparator: function () {
            return this.lineSep || '\n';
          },
          setDirection: Hn(function (e) {
            if (e != 'rtl') {
              e = 'ltr';
            }
            if (e == this.direction) {
              return;
            }
            this.direction = e;
            this.iter(function (e) {
              return (e.order = null);
            });
            if (this.cm) {
              wo(this.cm);
            }
          }),
        });
        Cl.prototype.eachLine = Cl.prototype.iter;
        var Sl = 0;
        function Ll(e) {
          var t = this;
          Ml(t);
          if (ye(t, e) || Ur(t.display, e)) {
            return;
          }
          Ce(e);
          if (l) {
            Sl = +new Date();
          }
          var r = Hi(t, e, true),
            i = e.dataTransfer.files;
          if (!r || t.isReadOnly()) {
            return;
          }
          if (i && i.length && window.FileReader && window.File) {
            var n = i.length,
              o = Array(n),
              a = 0;
            var s = function () {
              if (++a == n) {
                Dn(t, function () {
                  r = ct(t.doc, r);
                  var e = {
                    from: r,
                    to: r,
                    text: t.doc.splitLines(
                      o
                        .filter(function (e) {
                          return e != null;
                        })
                        .join(t.doc.lineSeparator())
                    ),
                    origin: 'paste',
                  };
                  Zo(t.doc, e);
                  Bo(t.doc, lo(ct(t.doc, r), ct(t.doc, ao(e))));
                })();
              }
            };
            var u = function (e, r) {
              if (
                t.options.allowDropFileTypes &&
                B(t.options.allowDropFileTypes, e.type) == -1
              ) {
                s();
                return;
              }
              var i = new FileReader();
              i.onerror = function () {
                return s();
              };
              i.onload = function () {
                var e = i.result;
                if (/[\x00-\x08\x0e-\x1f]{2}/.test(e)) {
                  s();
                  return;
                }
                o[r] = e;
                s();
              };
              i.readAsText(e);
            };
            for (var f = 0; f < i.length; f++) {
              u(i[f], f);
            }
          } else {
            if (t.state.draggingText && t.doc.sel.contains(r) > -1) {
              t.state.draggingText(e);
              setTimeout(function () {
                return t.display.input.focus();
              }, 20);
              return;
            }
            try {
              var c = e.dataTransfer.getData('Text');
              if (c) {
                var h;
                if (t.state.draggingText && !t.state.draggingText.copy) {
                  h = t.listSelections();
                }
                Uo(t.doc, lo(r, r));
                if (h) {
                  for (var d = 0; d < h.length; ++d) {
                    il(t.doc, '', h[d].anchor, h[d].head, 'drag');
                  }
                }
                t.replaceSelection(c, 'around', 'paste');
                t.display.input.focus();
              }
            } catch (p) {}
          }
        }
        function kl(e, t) {
          if (l && (!e.state.draggingText || +new Date() - Sl < 100)) {
            ke(t);
            return;
          }
          if (ye(e, t) || Ur(e.display, t)) {
            return;
          }
          t.dataTransfer.setData('Text', e.getSelection());
          t.dataTransfer.effectAllowed = 'copyMove';
          if (t.dataTransfer.setDragImage && !h) {
            var r = N('img', null, null, 'position: fixed; left: 0; top: 0;');
            r.src =
              'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            if (c) {
              r.width = r.height = 1;
              e.display.wrapper.appendChild(r);
              r._top = r.offsetTop;
            }
            t.dataTransfer.setDragImage(r, 0, 0);
            if (c) {
              r.parentNode.removeChild(r);
            }
          }
        }
        function Tl(e, t) {
          var r = Hi(e, t);
          if (!r) {
            return;
          }
          var i = document.createDocumentFragment();
          Vi(e, r, i);
          if (!e.display.dragCursor) {
            e.display.dragCursor = N(
              'div',
              null,
              'CodeMirror-cursors CodeMirror-dragcursors'
            );
            e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv);
          }
          M(e.display.dragCursor, i);
        }
        function Ml(e) {
          if (e.display.dragCursor) {
            e.display.lineSpace.removeChild(e.display.dragCursor);
            e.display.dragCursor = null;
          }
        }
        function Nl(e) {
          if (!document.getElementsByClassName) {
            return;
          }
          var t = document.getElementsByClassName('CodeMirror'),
            r = [];
          for (var i = 0; i < t.length; i++) {
            var n = t[i].CodeMirror;
            if (n) {
              r.push(n);
            }
          }
          if (r.length) {
            r[0].operation(function () {
              for (var t = 0; t < r.length; t++) {
                e(r[t]);
              }
            });
          }
        }
        var Ol = false;
        function Al() {
          if (Ol) {
            return;
          }
          Dl();
          Ol = true;
        }
        function Dl() {
          var e;
          pe(window, 'resize', function () {
            if (e == null) {
              e = setTimeout(function () {
                e = null;
                Nl(Wl);
              }, 100);
            }
          });
          pe(window, 'blur', function () {
            return Nl(qi);
          });
        }
        function Wl(e) {
          var t = e.display;
          t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null;
          t.scrollbarsClipped = false;
          e.setSize();
        }
        var Hl = {
          3: 'Pause',
          8: 'Backspace',
          9: 'Tab',
          13: 'Enter',
          16: 'Shift',
          17: 'Ctrl',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Esc',
          32: 'Space',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'Left',
          38: 'Up',
          39: 'Right',
          40: 'Down',
          44: 'PrintScrn',
          45: 'Insert',
          46: 'Delete',
          59: ';',
          61: '=',
          91: 'Mod',
          92: 'Mod',
          93: 'Mod',
          106: '*',
          107: '=',
          109: '-',
          110: '.',
          111: '/',
          145: 'ScrollLock',
          173: '-',
          186: ';',
          187: '=',
          188: ',',
          189: '-',
          190: '.',
          191: '/',
          192: '`',
          219: '[',
          220: '\\',
          221: ']',
          222: "'",
          224: 'Mod',
          63232: 'Up',
          63233: 'Down',
          63234: 'Left',
          63235: 'Right',
          63272: 'Delete',
          63273: 'Home',
          63275: 'End',
          63276: 'PageUp',
          63277: 'PageDown',
          63302: 'Insert',
        };
        for (var Fl = 0; Fl < 10; Fl++) {
          Hl[Fl + 48] = Hl[Fl + 96] = String(Fl);
        }
        for (var Pl = 65; Pl <= 90; Pl++) {
          Hl[Pl] = String.fromCharCode(Pl);
        }
        for (var El = 1; El <= 12; El++) {
          Hl[El + 111] = Hl[El + 63235] = 'F' + El;
        }
        var Il = {};
        Il.basic = {
          Left: 'goCharLeft',
          Right: 'goCharRight',
          Up: 'goLineUp',
          Down: 'goLineDown',
          End: 'goLineEnd',
          Home: 'goLineStartSmart',
          PageUp: 'goPageUp',
          PageDown: 'goPageDown',
          Delete: 'delCharAfter',
          Backspace: 'delCharBefore',
          'Shift-Backspace': 'delCharBefore',
          Tab: 'defaultTab',
          'Shift-Tab': 'indentAuto',
          Enter: 'newlineAndIndent',
          Insert: 'toggleOverwrite',
          Esc: 'singleSelection',
        };
        Il.pcDefault = {
          'Ctrl-A': 'selectAll',
          'Ctrl-D': 'deleteLine',
          'Ctrl-Z': 'undo',
          'Shift-Ctrl-Z': 'redo',
          'Ctrl-Y': 'redo',
          'Ctrl-Home': 'goDocStart',
          'Ctrl-End': 'goDocEnd',
          'Ctrl-Up': 'goLineUp',
          'Ctrl-Down': 'goLineDown',
          'Ctrl-Left': 'goGroupLeft',
          'Ctrl-Right': 'goGroupRight',
          'Alt-Left': 'goLineStart',
          'Alt-Right': 'goLineEnd',
          'Ctrl-Backspace': 'delGroupBefore',
          'Ctrl-Delete': 'delGroupAfter',
          'Ctrl-S': 'save',
          'Ctrl-F': 'find',
          'Ctrl-G': 'findNext',
          'Shift-Ctrl-G': 'findPrev',
          'Shift-Ctrl-F': 'replace',
          'Shift-Ctrl-R': 'replaceAll',
          'Ctrl-[': 'indentLess',
          'Ctrl-]': 'indentMore',
          'Ctrl-U': 'undoSelection',
          'Shift-Ctrl-U': 'redoSelection',
          'Alt-U': 'redoSelection',
          fallthrough: 'basic',
        };
        Il.emacsy = {
          'Ctrl-F': 'goCharRight',
          'Ctrl-B': 'goCharLeft',
          'Ctrl-P': 'goLineUp',
          'Ctrl-N': 'goLineDown',
          'Ctrl-A': 'goLineStart',
          'Ctrl-E': 'goLineEnd',
          'Ctrl-V': 'goPageDown',
          'Shift-Ctrl-V': 'goPageUp',
          'Ctrl-D': 'delCharAfter',
          'Ctrl-H': 'delCharBefore',
          'Alt-Backspace': 'delWordBefore',
          'Ctrl-K': 'killLine',
          'Ctrl-T': 'transposeChars',
          'Ctrl-O': 'openLine',
        };
        Il.macDefault = {
          'Cmd-A': 'selectAll',
          'Cmd-D': 'deleteLine',
          'Cmd-Z': 'undo',
          'Shift-Cmd-Z': 'redo',
          'Cmd-Y': 'redo',
          'Cmd-Home': 'goDocStart',
          'Cmd-Up': 'goDocStart',
          'Cmd-End': 'goDocEnd',
          'Cmd-Down': 'goDocEnd',
          'Alt-Left': 'goGroupLeft',
          'Alt-Right': 'goGroupRight',
          'Cmd-Left': 'goLineLeft',
          'Cmd-Right': 'goLineRight',
          'Alt-Backspace': 'delGroupBefore',
          'Ctrl-Alt-Backspace': 'delGroupAfter',
          'Alt-Delete': 'delGroupAfter',
          'Cmd-S': 'save',
          'Cmd-F': 'find',
          'Cmd-G': 'findNext',
          'Shift-Cmd-G': 'findPrev',
          'Cmd-Alt-F': 'replace',
          'Shift-Cmd-Alt-F': 'replaceAll',
          'Cmd-[': 'indentLess',
          'Cmd-]': 'indentMore',
          'Cmd-Backspace': 'delWrappedLineLeft',
          'Cmd-Delete': 'delWrappedLineRight',
          'Cmd-U': 'undoSelection',
          'Shift-Cmd-U': 'redoSelection',
          'Ctrl-Up': 'goDocStart',
          'Ctrl-Down': 'goDocEnd',
          fallthrough: ['basic', 'emacsy'],
        };
        Il['default'] = y ? Il.macDefault : Il.pcDefault;
        function zl(e) {
          var t = e.split(/-(?!$)/);
          e = t[t.length - 1];
          var r, i, n, o;
          for (var l = 0; l < t.length - 1; l++) {
            var a = t[l];
            if (/^(cmd|meta|m)$/i.test(a)) {
              o = true;
            } else if (/^a(lt)?$/i.test(a)) {
              r = true;
            } else if (/^(c|ctrl|control)$/i.test(a)) {
              i = true;
            } else if (/^s(hift)?$/i.test(a)) {
              n = true;
            } else {
              throw new Error('Unrecognized modifier name: ' + a);
            }
          }
          if (r) {
            e = 'Alt-' + e;
          }
          if (i) {
            e = 'Ctrl-' + e;
          }
          if (o) {
            e = 'Cmd-' + e;
          }
          if (n) {
            e = 'Shift-' + e;
          }
          return e;
        }
        function Rl(e) {
          var t = {};
          for (var r in e) {
            if (e.hasOwnProperty(r)) {
              var i = e[r];
              if (/^(name|fallthrough|(de|at)tach)$/.test(r)) {
                continue;
              }
              if (i == '...') {
                delete e[r];
                continue;
              }
              var n = q(r.split(' '), zl);
              for (var o = 0; o < n.length; o++) {
                var l = void 0,
                  a = void 0;
                if (o == n.length - 1) {
                  a = n.join(' ');
                  l = i;
                } else {
                  a = n.slice(0, o + 1).join(' ');
                  l = '...';
                }
                var s = t[a];
                if (!s) {
                  t[a] = l;
                } else if (s != l) {
                  throw new Error('Inconsistent bindings for ' + a);
                }
              }
              delete e[r];
            }
          }
          for (var u in t) {
            e[u] = t[u];
          }
          return e;
        }
        function Bl(e, t, r, i) {
          t = Kl(t);
          var n = t.call ? t.call(e, i) : t[e];
          if (n === false) {
            return 'nothing';
          }
          if (n === '...') {
            return 'multi';
          }
          if (n != null && r(n)) {
            return 'handled';
          }
          if (t.fallthrough) {
            if (Object.prototype.toString.call(t.fallthrough) != '[object Array]') {
              return Bl(e, t.fallthrough, r, i);
            }
            for (var o = 0; o < t.fallthrough.length; o++) {
              var l = Bl(e, t.fallthrough[o], r, i);
              if (l) {
                return l;
              }
            }
          }
        }
        function Gl(e) {
          var t = typeof e == 'string' ? e : Hl[e.keyCode];
          return t == 'Ctrl' || t == 'Alt' || t == 'Shift' || t == 'Mod';
        }
        function Ul(e, t, r) {
          var i = e;
          if (t.altKey && i != 'Alt') {
            e = 'Alt-' + e;
          }
          if ((C ? t.metaKey : t.ctrlKey) && i != 'Ctrl') {
            e = 'Ctrl-' + e;
          }
          if ((C ? t.ctrlKey : t.metaKey) && i != 'Mod') {
            e = 'Cmd-' + e;
          }
          if (!r && t.shiftKey && i != 'Shift') {
            e = 'Shift-' + e;
          }
          return e;
        }
        function Vl(e, t) {
          if (c && e.keyCode == 34 && e['char']) {
            return false;
          }
          var r = Hl[e.keyCode];
          if (r == null || e.altGraphKey) {
            return false;
          }
          if (e.keyCode == 3 && e.code) {
            r = e.code;
          }
          return Ul(r, e, t);
        }
        function Kl(e) {
          return typeof e == 'string' ? Il[e] : e;
        }
        function jl(e, t) {
          var r = e.doc.sel.ranges,
            i = [];
          for (var n = 0; n < r.length; n++) {
            var o = t(r[n]);
            while (i.length && ot(o.from, $(i).to) <= 0) {
              var l = i.pop();
              if (ot(l.from, o.from) < 0) {
                o.from = l.from;
                break;
              }
            }
            i.push(o);
          }
          An(e, function () {
            for (var t = i.length - 1; t >= 0; t--) {
              il(e.doc, '', i[t].from, i[t].to, '+delete');
            }
            ln(e);
          });
        }
        function Xl(e, t, r) {
          var i = le(e.text, t + r, r);
          return i < 0 || i > e.text.length ? null : i;
        }
        function _l(e, t, r) {
          var i = Xl(e, t.ch, r);
          return i == null ? null : new nt(t.line, i, r < 0 ? 'after' : 'before');
        }
        function Yl(e, t, r, i, n) {
          if (e) {
            if (t.doc.direction == 'rtl') {
              n = -n;
            }
            var o = he(r, t.doc.direction);
            if (o) {
              var l = n < 0 ? $(o) : o[0];
              var a = n < 0 == (l.level == 1);
              var s = a ? 'after' : 'before';
              var u;
              if (l.level > 0 || t.doc.direction == 'rtl') {
                var f = ei(t, r);
                u = n < 0 ? r.text.length - 1 : 0;
                var c = ti(t, f, u).top;
                u = ae(
                  function (e) {
                    return ti(t, f, e).top == c;
                  },
                  n < 0 == (l.level == 1) ? l.from : l.to - 1,
                  u
                );
                if (s == 'before') {
                  u = Xl(r, u, 1);
                }
              } else {
                u = n < 0 ? l.to : l.from;
              }
              return new nt(i, u, s);
            }
          }
          return new nt(i, n < 0 ? r.text.length : 0, n < 0 ? 'before' : 'after');
        }
        function $l(e, t, r, i) {
          var n = he(t, e.doc.direction);
          if (!n) {
            return _l(t, r, i);
          }
          if (r.ch >= t.text.length) {
            r.ch = t.text.length;
            r.sticky = 'before';
          } else if (r.ch <= 0) {
            r.ch = 0;
            r.sticky = 'after';
          }
          var o = fe(n, r.ch, r.sticky),
            l = n[o];
          if (
            e.doc.direction == 'ltr' &&
            l.level % 2 == 0 &&
            (i > 0 ? l.to > r.ch : l.from < r.ch)
          ) {
            return _l(t, r, i);
          }
          var a = function (e, r) {
            return Xl(t, e instanceof nt ? e.ch : e, r);
          };
          var s;
          var u = function (r) {
            if (!e.options.lineWrapping) {
              return { begin: 0, end: t.text.length };
            }
            s = s || ei(e, t);
            return xi(e, t, s, r);
          };
          var f = u(r.sticky == 'before' ? a(r, -1) : r.ch);
          if (e.doc.direction == 'rtl' || l.level == 1) {
            var c = (l.level == 1) == i < 0;
            var h = a(r, c ? 1 : -1);
            if (
              h != null &&
              (!c ? h >= l.from && h >= f.begin : h <= l.to && h <= f.end)
            ) {
              var d = c ? 'before' : 'after';
              return new nt(r.line, h, d);
            }
          }
          var p = function (e, t, i) {
            var o = function (e, t) {
              return t ? new nt(r.line, a(e, 1), 'before') : new nt(r.line, e, 'after');
            };
            for (; e >= 0 && e < n.length; e += t) {
              var l = n[e];
              var s = t > 0 == (l.level != 1);
              var u = s ? i.begin : a(i.end, -1);
              if (l.from <= u && u < l.to) {
                return o(u, s);
              }
              u = s ? l.from : a(l.to, -1);
              if (i.begin <= u && u < i.end) {
                return o(u, s);
              }
            }
          };
          var v = p(o + i, i, f);
          if (v) {
            return v;
          }
          var g = i > 0 ? f.end : a(f.begin, -1);
          if (g != null && !(i > 0 && g == t.text.length)) {
            v = p(i > 0 ? 0 : n.length - 1, i, u(g));
            if (v) {
              return v;
            }
          }
          return null;
        }
        var ql = {
          selectAll: $o,
          singleSelection: function (e) {
            return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), V);
          },
          killLine: function (e) {
            return jl(e, function (t) {
              if (t.empty()) {
                var r = qe(e.doc, t.head.line).text.length;
                if (t.head.ch == r && t.head.line < e.lastLine()) {
                  return { from: t.head, to: nt(t.head.line + 1, 0) };
                } else {
                  return { from: t.head, to: nt(t.head.line, r) };
                }
              } else {
                return { from: t.from(), to: t.to() };
              }
            });
          },
          deleteLine: function (e) {
            return jl(e, function (t) {
              return {
                from: nt(t.from().line, 0),
                to: ct(e.doc, nt(t.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function (e) {
            return jl(e, function (e) {
              return { from: nt(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function (e) {
            return jl(e, function (t) {
              var r = e.charCoords(t.head, 'div').top + 5;
              var i = e.coordsChar({ left: 0, top: r }, 'div');
              return { from: i, to: t.from() };
            });
          },
          delWrappedLineRight: function (e) {
            return jl(e, function (t) {
              var r = e.charCoords(t.head, 'div').top + 5;
              var i = e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: r },
                'div'
              );
              return { from: t.from(), to: i };
            });
          },
          undo: function (e) {
            return e.undo();
          },
          redo: function (e) {
            return e.redo();
          },
          undoSelection: function (e) {
            return e.undoSelection();
          },
          redoSelection: function (e) {
            return e.redoSelection();
          },
          goDocStart: function (e) {
            return e.extendSelection(nt(e.firstLine(), 0));
          },
          goDocEnd: function (e) {
            return e.extendSelection(nt(e.lastLine()));
          },
          goLineStart: function (e) {
            return e.extendSelectionsBy(
              function (t) {
                return Zl(e, t.head.line);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineStartSmart: function (e) {
            return e.extendSelectionsBy(
              function (t) {
                return Jl(e, t.head);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineEnd: function (e) {
            return e.extendSelectionsBy(
              function (t) {
                return Ql(e, t.head.line);
              },
              { origin: '+move', bias: -1 }
            );
          },
          goLineRight: function (e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: r },
                'div'
              );
            }, j);
          },
          goLineLeft: function (e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar({ left: 0, top: r }, 'div');
            }, j);
          },
          goLineLeftSmart: function (e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, 'div').top + 5;
              var i = e.coordsChar({ left: 0, top: r }, 'div');
              if (i.ch < e.getLine(i.line).search(/\S/)) {
                return Jl(e, t.head);
              }
              return i;
            }, j);
          },
          goLineUp: function (e) {
            return e.moveV(-1, 'line');
          },
          goLineDown: function (e) {
            return e.moveV(1, 'line');
          },
          goPageUp: function (e) {
            return e.moveV(-1, 'page');
          },
          goPageDown: function (e) {
            return e.moveV(1, 'page');
          },
          goCharLeft: function (e) {
            return e.moveH(-1, 'char');
          },
          goCharRight: function (e) {
            return e.moveH(1, 'char');
          },
          goColumnLeft: function (e) {
            return e.moveH(-1, 'column');
          },
          goColumnRight: function (e) {
            return e.moveH(1, 'column');
          },
          goWordLeft: function (e) {
            return e.moveH(-1, 'word');
          },
          goGroupRight: function (e) {
            return e.moveH(1, 'group');
          },
          goGroupLeft: function (e) {
            return e.moveH(-1, 'group');
          },
          goWordRight: function (e) {
            return e.moveH(1, 'word');
          },
          delCharBefore: function (e) {
            return e.deleteH(-1, 'codepoint');
          },
          delCharAfter: function (e) {
            return e.deleteH(1, 'char');
          },
          delWordBefore: function (e) {
            return e.deleteH(-1, 'word');
          },
          delWordAfter: function (e) {
            return e.deleteH(1, 'word');
          },
          delGroupBefore: function (e) {
            return e.deleteH(-1, 'group');
          },
          delGroupAfter: function (e) {
            return e.deleteH(1, 'group');
          },
          indentAuto: function (e) {
            return e.indentSelection('smart');
          },
          indentMore: function (e) {
            return e.indentSelection('add');
          },
          indentLess: function (e) {
            return e.indentSelection('subtract');
          },
          insertTab: function (e) {
            return e.replaceSelection('\t');
          },
          insertSoftTab: function (e) {
            var t = [],
              r = e.listSelections(),
              i = e.options.tabSize;
            for (var n = 0; n < r.length; n++) {
              var o = r[n].from();
              var l = z(e.getLine(o.line), o.ch, i);
              t.push(Y(i - (l % i)));
            }
            e.replaceSelections(t);
          },
          defaultTab: function (e) {
            if (e.somethingSelected()) {
              e.indentSelection('add');
            } else {
              e.execCommand('insertTab');
            }
          },
          transposeChars: function (e) {
            return An(e, function () {
              var t = e.listSelections(),
                r = [];
              for (var i = 0; i < t.length; i++) {
                if (!t[i].empty()) {
                  continue;
                }
                var n = t[i].head,
                  o = qe(e.doc, n.line).text;
                if (o) {
                  if (n.ch == o.length) {
                    n = new nt(n.line, n.ch - 1);
                  }
                  if (n.ch > 0) {
                    n = new nt(n.line, n.ch + 1);
                    e.replaceRange(
                      o.charAt(n.ch - 1) + o.charAt(n.ch - 2),
                      nt(n.line, n.ch - 2),
                      n,
                      '+transpose'
                    );
                  } else if (n.line > e.doc.first) {
                    var l = qe(e.doc, n.line - 1).text;
                    if (l) {
                      n = new nt(n.line, 1);
                      e.replaceRange(
                        o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1),
                        nt(n.line - 1, l.length - 1),
                        n,
                        '+transpose'
                      );
                    }
                  }
                }
                r.push(new no(n, n));
              }
              e.setSelections(r);
            });
          },
          newlineAndIndent: function (e) {
            return An(e, function () {
              var t = e.listSelections();
              for (var r = t.length - 1; r >= 0; r--) {
                e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, '+input');
              }
              t = e.listSelections();
              for (var i = 0; i < t.length; i++) {
                e.indentLine(t[i].from().line, null, true);
              }
              ln(e);
            });
          },
          openLine: function (e) {
            return e.replaceSelection('\n', 'start');
          },
          toggleOverwrite: function (e) {
            return e.toggleOverwrite();
          },
        };
        function Zl(e, t) {
          var r = qe(e.doc, t);
          var i = Zt(r);
          if (i != r) {
            t = et(i);
          }
          return Yl(true, e, i, t, 1);
        }
        function Ql(e, t) {
          var r = qe(e.doc, t);
          var i = Qt(r);
          if (i != r) {
            t = et(i);
          }
          return Yl(true, e, r, t, -1);
        }
        function Jl(e, t) {
          var r = Zl(e, t.line);
          var i = qe(e.doc, r.line);
          var n = he(i, e.doc.direction);
          if (!n || n[0].level == 0) {
            var o = Math.max(r.ch, i.text.search(/\S/));
            var l = t.line == r.line && t.ch <= o && t.ch;
            return nt(r.line, l ? 0 : o, r.sticky);
          }
          return r;
        }
        function ea(e, t, r) {
          if (typeof t == 'string') {
            t = ql[t];
            if (!t) {
              return false;
            }
          }
          e.display.input.ensurePolled();
          var i = e.display.shift,
            n = false;
          try {
            if (e.isReadOnly()) {
              e.state.suppressEdits = true;
            }
            if (r) {
              e.display.shift = false;
            }
            n = t(e) != U;
          } finally {
            e.display.shift = i;
            e.state.suppressEdits = false;
          }
          return n;
        }
        function ta(e, t, r) {
          for (var i = 0; i < e.state.keyMaps.length; i++) {
            var n = Bl(t, e.state.keyMaps[i], r, e);
            if (n) {
              return n;
            }
          }
          return (
            (e.options.extraKeys && Bl(t, e.options.extraKeys, r, e)) ||
            Bl(t, e.options.keyMap, r, e)
          );
        }
        var ra = new R();
        function ia(e, t, r, i) {
          var n = e.state.keySeq;
          if (n) {
            if (Gl(t)) {
              return 'handled';
            }
            if (/\'$/.test(t)) {
              e.state.keySeq = null;
            } else {
              ra.set(50, function () {
                if (e.state.keySeq == n) {
                  e.state.keySeq = null;
                  e.display.input.reset();
                }
              });
            }
            if (na(e, n + ' ' + t, r, i)) {
              return true;
            }
          }
          return na(e, t, r, i);
        }
        function na(e, t, r, i) {
          var n = ta(e, t, i);
          if (n == 'multi') {
            e.state.keySeq = t;
          }
          if (n == 'handled') {
            Mr(e, 'keyHandled', e, t, r);
          }
          if (n == 'handled' || n == 'multi') {
            Ce(r);
            Xi(e);
          }
          return !!n;
        }
        function oa(e, t) {
          var r = Vl(t, true);
          if (!r) {
            return false;
          }
          if (t.shiftKey && !e.state.keySeq) {
            return (
              ia(e, 'Shift-' + r, t, function (t) {
                return ea(e, t, true);
              }) ||
              ia(e, r, t, function (t) {
                if (typeof t == 'string' ? /^go[A-Z]/.test(t) : t.motion) {
                  return ea(e, t);
                }
              })
            );
          } else {
            return ia(e, r, t, function (t) {
              return ea(e, t);
            });
          }
        }
        function la(e, t, r) {
          return ia(e, "'" + r + "'", t, function (t) {
            return ea(e, t, true);
          });
        }
        var aa = null;
        function sa(e) {
          var t = this;
          if (e.target && e.target != t.display.input.getField()) {
            return;
          }
          t.curOp.focus = W();
          if (ye(t, e)) {
            return;
          }
          if (l && a < 11 && e.keyCode == 27) {
            e.returnValue = false;
          }
          var i = e.keyCode;
          t.display.shift = i == 16 || e.shiftKey;
          var n = oa(t, e);
          if (c) {
            aa = n ? i : null;
            if (!n && i == 88 && !Pe && (y ? e.metaKey : e.ctrlKey)) {
              t.replaceSelection('', null, 'cut');
            }
          }
          if (
            r &&
            !y &&
            !n &&
            i == 46 &&
            e.shiftKey &&
            !e.ctrlKey &&
            document.execCommand
          ) {
            document.execCommand('cut');
          }
          if (
            i == 18 &&
            !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)
          ) {
            ua(t);
          }
        }
        function ua(e) {
          var t = e.display.lineDiv;
          H(t, 'CodeMirror-crosshair');
          function r(e) {
            if (e.keyCode == 18 || !e.altKey) {
              k(t, 'CodeMirror-crosshair');
              ge(document, 'keyup', r);
              ge(document, 'mouseover', r);
            }
          }
          pe(document, 'keyup', r);
          pe(document, 'mouseover', r);
        }
        function fa(e) {
          if (e.keyCode == 16) {
            this.doc.sel.shift = false;
          }
          ye(this, e);
        }
        function ca(e) {
          var t = this;
          if (e.target && e.target != t.display.input.getField()) {
            return;
          }
          if (
            Ur(t.display, e) ||
            ye(t, e) ||
            (e.ctrlKey && !e.altKey) ||
            (y && e.metaKey)
          ) {
            return;
          }
          var r = e.keyCode,
            i = e.charCode;
          if (c && r == aa) {
            aa = null;
            Ce(e);
            return;
          }
          if (c && (!e.which || e.which < 10) && oa(t, e)) {
            return;
          }
          var n = String.fromCharCode(i == null ? r : i);
          if (n == '\b') {
            return;
          }
          if (la(t, e, n)) {
            return;
          }
          t.display.input.onKeyPress(e);
        }
        var ha = 400;
        var da = function (e, t, r) {
          this.time = e;
          this.pos = t;
          this.button = r;
        };
        da.prototype.compare = function (e, t, r) {
          return this.time + ha > e && ot(t, this.pos) == 0 && r == this.button;
        };
        var pa, va;
        function ga(e, t) {
          var r = +new Date();
          if (va && va.compare(r, e, t)) {
            pa = va = null;
            return 'triple';
          } else if (pa && pa.compare(r, e, t)) {
            va = new da(r, e, t);
            pa = null;
            return 'double';
          } else {
            pa = new da(r, e, t);
            va = null;
            return 'single';
          }
        }
        function ma(e) {
          var t = this,
            r = t.display;
          if (ye(t, e) || (r.activeTouch && r.input.supportsTouch())) {
            return;
          }
          r.input.ensurePolled();
          r.shift = e.shiftKey;
          if (Ur(r, e)) {
            if (!s) {
              r.scroller.draggable = false;
              setTimeout(function () {
                return (r.scroller.draggable = true);
              }, 100);
            }
            return;
          }
          if (Ta(t, e)) {
            return;
          }
          var i = Hi(t, e),
            n = Me(e),
            o = i ? ga(i, n) : 'single';
          window.focus();
          if (n == 1 && t.state.selectingText) {
            t.state.selectingText(e);
          }
          if (i && ya(t, n, i, o, e)) {
            return;
          }
          if (n == 1) {
            if (i) {
              wa(t, i, o, e);
            } else if (Te(e) == r.scroller) {
              Ce(e);
            }
          } else if (n == 2) {
            if (i) {
              Po(t.doc, i);
            }
            setTimeout(function () {
              return r.input.focus();
            }, 20);
          } else if (n == 3) {
            if (S) {
              t.display.input.onContextMenu(e);
            } else {
              Yi(t);
            }
          }
        }
        function ya(e, t, r, i, n) {
          var o = 'Click';
          if (i == 'double') {
            o = 'Double' + o;
          } else if (i == 'triple') {
            o = 'Triple' + o;
          }
          o = (t == 1 ? 'Left' : t == 2 ? 'Middle' : 'Right') + o;
          return ia(e, Ul(o, n), n, function (t) {
            if (typeof t == 'string') {
              t = ql[t];
            }
            if (!t) {
              return false;
            }
            var i = false;
            try {
              if (e.isReadOnly()) {
                e.state.suppressEdits = true;
              }
              i = t(e, r) != U;
            } finally {
              e.state.suppressEdits = false;
            }
            return i;
          });
        }
        function ba(e, t, r) {
          var i = e.getOption('configureMouse');
          var n = i ? i(e, t, r) : {};
          if (n.unit == null) {
            var o = b ? r.shiftKey && r.metaKey : r.altKey;
            n.unit = o
              ? 'rectangle'
              : t == 'single'
              ? 'char'
              : t == 'double'
              ? 'word'
              : 'line';
          }
          if (n.extend == null || e.doc.extend) {
            n.extend = e.doc.extend || r.shiftKey;
          }
          if (n.addNew == null) {
            n.addNew = y ? r.metaKey : r.ctrlKey;
          }
          if (n.moveOnDrag == null) {
            n.moveOnDrag = !(y ? r.altKey : r.ctrlKey);
          }
          return n;
        }
        function wa(e, t, r, i) {
          if (l) {
            setTimeout(E(_i, e), 0);
          } else {
            e.curOp.focus = W();
          }
          var n = ba(e, r, i);
          var o = e.doc.sel,
            a;
          if (
            e.options.dragDrop &&
            Ne &&
            !e.isReadOnly() &&
            r == 'single' &&
            (a = o.contains(t)) > -1 &&
            (ot((a = o.ranges[a]).from(), t) < 0 || t.xRel > 0) &&
            (ot(a.to(), t) > 0 || t.xRel < 0)
          ) {
            xa(e, i, t, n);
          } else {
            Sa(e, i, t, n);
          }
        }
        function xa(e, t, r, i) {
          var n = e.display,
            o = false;
          var u = Dn(e, function (t) {
            if (s) {
              n.scroller.draggable = false;
            }
            e.state.draggingText = false;
            if (e.state.delayingBlurEvent) {
              if (e.hasFocus()) {
                e.state.delayingBlurEvent = false;
              } else {
                Yi(e);
              }
            }
            ge(n.wrapper.ownerDocument, 'mouseup', u);
            ge(n.wrapper.ownerDocument, 'mousemove', f);
            ge(n.scroller, 'dragstart', c);
            ge(n.scroller, 'drop', u);
            if (!o) {
              Ce(t);
              if (!i.addNew) {
                Po(e.doc, r, null, null, i.extend);
              }
              if ((s && !h) || (l && a == 9)) {
                setTimeout(function () {
                  n.wrapper.ownerDocument.body.focus({ preventScroll: true });
                  n.input.focus();
                }, 20);
              } else {
                n.input.focus();
              }
            }
          });
          var f = function (e) {
            o =
              o ||
              Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
          };
          var c = function () {
            return (o = true);
          };
          if (s) {
            n.scroller.draggable = true;
          }
          e.state.draggingText = u;
          u.copy = !i.moveOnDrag;
          pe(n.wrapper.ownerDocument, 'mouseup', u);
          pe(n.wrapper.ownerDocument, 'mousemove', f);
          pe(n.scroller, 'dragstart', c);
          pe(n.scroller, 'drop', u);
          e.state.delayingBlurEvent = true;
          setTimeout(function () {
            return n.input.focus();
          }, 20);
          if (n.scroller.dragDrop) {
            n.scroller.dragDrop();
          }
        }
        function Ca(e, t, r) {
          if (r == 'char') {
            return new no(t, t);
          }
          if (r == 'word') {
            return e.findWordAt(t);
          }
          if (r == 'line') {
            return new no(nt(t.line, 0), ct(e.doc, nt(t.line + 1, 0)));
          }
          var i = r(e, t);
          return new no(i.from, i.to);
        }
        function Sa(e, t, r, i) {
          if (l) {
            Yi(e);
          }
          var n = e.display,
            o = e.doc;
          Ce(t);
          var a,
            s,
            u = o.sel,
            f = u.ranges;
          if (i.addNew && !i.extend) {
            s = o.sel.contains(r);
            if (s > -1) {
              a = f[s];
            } else {
              a = new no(r, r);
            }
          } else {
            a = o.sel.primary();
            s = o.sel.primIndex;
          }
          if (i.unit == 'rectangle') {
            if (!i.addNew) {
              a = new no(r, r);
            }
            r = Hi(e, t, true, true);
            s = -1;
          } else {
            var c = Ca(e, r, i.unit);
            if (i.extend) {
              a = Fo(a, c.anchor, c.head, i.extend);
            } else {
              a = c;
            }
          }
          if (!i.addNew) {
            s = 0;
            Go(o, new io([a], 0), K);
            u = o.sel;
          } else if (s == -1) {
            s = f.length;
            Go(o, oo(e, f.concat([a]), s), { scroll: false, origin: '*mouse' });
          } else if (f.length > 1 && f[s].empty() && i.unit == 'char' && !i.extend) {
            Go(o, oo(e, f.slice(0, s).concat(f.slice(s + 1)), 0), {
              scroll: false,
              origin: '*mouse',
            });
            u = o.sel;
          } else {
            Io(o, s, a, K);
          }
          var h = r;
          function d(t) {
            if (ot(h, t) == 0) {
              return;
            }
            h = t;
            if (i.unit == 'rectangle') {
              var n = [],
                l = e.options.tabSize;
              var f = z(qe(o, r.line).text, r.ch, l);
              var c = z(qe(o, t.line).text, t.ch, l);
              var d = Math.min(f, c),
                p = Math.max(f, c);
              for (
                var v = Math.min(r.line, t.line),
                  g = Math.min(e.lastLine(), Math.max(r.line, t.line));
                v <= g;
                v++
              ) {
                var m = qe(o, v).text,
                  y = X(m, d, l);
                if (d == p) {
                  n.push(new no(nt(v, y), nt(v, y)));
                } else if (m.length > y) {
                  n.push(new no(nt(v, y), nt(v, X(m, p, l))));
                }
              }
              if (!n.length) {
                n.push(new no(r, r));
              }
              Go(o, oo(e, u.ranges.slice(0, s).concat(n), s), {
                origin: '*mouse',
                scroll: false,
              });
              e.scrollIntoView(t);
            } else {
              var b = a;
              var w = Ca(e, t, i.unit);
              var x = b.anchor,
                C;
              if (ot(w.anchor, x) > 0) {
                C = w.head;
                x = ut(b.from(), w.anchor);
              } else {
                C = w.anchor;
                x = st(b.to(), w.head);
              }
              var S = u.ranges.slice(0);
              S[s] = La(e, new no(ct(o, x), C));
              Go(o, oo(e, S, s), K);
            }
          }
          var p = n.wrapper.getBoundingClientRect();
          var v = 0;
          function g(t) {
            var r = ++v;
            var l = Hi(e, t, true, i.unit == 'rectangle');
            if (!l) {
              return;
            }
            if (ot(l, h) != 0) {
              e.curOp.focus = W();
              d(l);
              var a = Ji(n, o);
              if (l.line >= a.to || l.line < a.from) {
                setTimeout(
                  Dn(e, function () {
                    if (v == r) {
                      g(t);
                    }
                  }),
                  150
                );
              }
            } else {
              var s = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
              if (s) {
                setTimeout(
                  Dn(e, function () {
                    if (v != r) {
                      return;
                    }
                    n.scroller.scrollTop += s;
                    g(t);
                  }),
                  50
                );
              }
            }
          }
          function m(t) {
            e.state.selectingText = false;
            v = Infinity;
            if (t) {
              Ce(t);
              n.input.focus();
            }
            ge(n.wrapper.ownerDocument, 'mousemove', y);
            ge(n.wrapper.ownerDocument, 'mouseup', b);
            o.history.lastSelOrigin = null;
          }
          var y = Dn(e, function (e) {
            if (e.buttons === 0 || !Me(e)) {
              m(e);
            } else {
              g(e);
            }
          });
          var b = Dn(e, m);
          e.state.selectingText = b;
          pe(n.wrapper.ownerDocument, 'mousemove', y);
          pe(n.wrapper.ownerDocument, 'mouseup', b);
        }
        function La(e, t) {
          var r = t.anchor;
          var i = t.head;
          var n = qe(e.doc, r.line);
          if (ot(r, i) == 0 && r.sticky == i.sticky) {
            return t;
          }
          var o = he(n);
          if (!o) {
            return t;
          }
          var l = fe(o, r.ch, r.sticky),
            a = o[l];
          if (a.from != r.ch && a.to != r.ch) {
            return t;
          }
          var s = l + ((a.from == r.ch) == (a.level != 1) ? 0 : 1);
          if (s == 0 || s == o.length) {
            return t;
          }
          var u;
          if (i.line != r.line) {
            u = (i.line - r.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0;
          } else {
            var f = fe(o, i.ch, i.sticky);
            var c = f - l || (i.ch - r.ch) * (a.level == 1 ? -1 : 1);
            if (f == s - 1 || f == s) {
              u = c < 0;
            } else {
              u = c > 0;
            }
          }
          var h = o[s + (u ? -1 : 0)];
          var d = u == (h.level == 1);
          var p = d ? h.from : h.to,
            v = d ? 'after' : 'before';
          return r.ch == p && r.sticky == v ? t : new no(new nt(r.line, p, v), i);
        }
        function ka(e, t, r, i) {
          var n, o;
          if (t.touches) {
            n = t.touches[0].clientX;
            o = t.touches[0].clientY;
          } else {
            try {
              n = t.clientX;
              o = t.clientY;
            } catch (h) {
              return false;
            }
          }
          if (n >= Math.floor(e.display.gutters.getBoundingClientRect().right)) {
            return false;
          }
          if (i) {
            Ce(t);
          }
          var l = e.display;
          var a = l.lineDiv.getBoundingClientRect();
          if (o > a.bottom || !we(e, r)) {
            return Le(t);
          }
          o -= a.top - l.viewOffset;
          for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var u = l.gutters.childNodes[s];
            if (u && u.getBoundingClientRect().right >= n) {
              var f = tt(e.doc, o);
              var c = e.display.gutterSpecs[s];
              me(e, r, e, f, c.className, t);
              return Le(t);
            }
          }
        }
        function Ta(e, t) {
          return ka(e, t, 'gutterClick', true);
        }
        function Ma(e, t) {
          if (Ur(e.display, t) || Na(e, t)) {
            return;
          }
          if (ye(e, t, 'contextmenu')) {
            return;
          }
          if (!S) {
            e.display.input.onContextMenu(t);
          }
        }
        function Na(e, t) {
          if (!we(e, 'gutterContextMenu')) {
            return false;
          }
          return ka(e, t, 'gutterContextMenu', false);
        }
        function Oa(e) {
          e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
            e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-');
          ui(e);
        }
        var Aa = {
          toString: function () {
            return 'CodeMirror.Init';
          },
        };
        var Da = {};
        var Wa = {};
        function Ha(e) {
          var t = e.optionHandlers;
          function r(r, i, n, o) {
            e.defaults[r] = i;
            if (n) {
              t[r] = o
                ? function (e, t, r) {
                    if (r != Aa) {
                      n(e, t, r);
                    }
                  }
                : n;
            }
          }
          e.defineOption = r;
          e.Init = Aa;
          r(
            'value',
            '',
            function (e, t) {
              return e.setValue(t);
            },
            true
          );
          r(
            'mode',
            null,
            function (e, t) {
              e.doc.modeOption = t;
              ho(e);
            },
            true
          );
          r('indentUnit', 2, ho, true);
          r('indentWithTabs', false);
          r('smartIndent', true);
          r(
            'tabSize',
            4,
            function (e) {
              po(e);
              ui(e);
              Pi(e);
            },
            true
          );
          r('lineSeparator', null, function (e, t) {
            e.doc.lineSep = t;
            if (!t) {
              return;
            }
            var r = [],
              i = e.doc.first;
            e.doc.iter(function (e) {
              for (var n = 0; ; ) {
                var o = e.text.indexOf(t, n);
                if (o == -1) {
                  break;
                }
                n = o + t.length;
                r.push(nt(i, o));
              }
              i++;
            });
            for (var n = r.length - 1; n >= 0; n--) {
              il(e.doc, t, r[n], nt(r[n].line, r[n].ch + t.length));
            }
          });
          r(
            'specialChars',
            /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
            function (e, t, r) {
              e.state.specialChars = new RegExp(
                t.source + (t.test('\t') ? '' : '|\t'),
                'g'
              );
              if (r != Aa) {
                e.refresh();
              }
            }
          );
          r(
            'specialCharPlaceholder',
            pr,
            function (e) {
              return e.refresh();
            },
            true
          );
          r('electricChars', true);
          r(
            'inputStyle',
            m ? 'contenteditable' : 'textarea',
            function () {
              throw new Error(
                'inputStyle can not (yet) be changed in a running editor'
              );
            },
            true
          );
          r(
            'spellcheck',
            false,
            function (e, t) {
              return (e.getInputField().spellcheck = t);
            },
            true
          );
          r(
            'autocorrect',
            false,
            function (e, t) {
              return (e.getInputField().autocorrect = t);
            },
            true
          );
          r(
            'autocapitalize',
            false,
            function (e, t) {
              return (e.getInputField().autocapitalize = t);
            },
            true
          );
          r('rtlMoveVisually', !w);
          r('wholeLineUpdateBefore', true);
          r(
            'theme',
            'default',
            function (e) {
              Oa(e);
              qn(e);
            },
            true
          );
          r('keyMap', 'default', function (e, t, r) {
            var i = Kl(t);
            var n = r != Aa && Kl(r);
            if (n && n.detach) {
              n.detach(e, i);
            }
            if (i.attach) {
              i.attach(e, n || null);
            }
          });
          r('extraKeys', null);
          r('configureMouse', null);
          r('lineWrapping', false, Pa, true);
          r(
            'gutters',
            [],
            function (e, t) {
              e.display.gutterSpecs = Yn(t, e.options.lineNumbers);
              qn(e);
            },
            true
          );
          r(
            'fixedGutter',
            true,
            function (e, t) {
              e.display.gutters.style.left = t ? Ai(e.display) + 'px' : '0';
              e.refresh();
            },
            true
          );
          r(
            'coverGutterNextToScrollbar',
            false,
            function (e) {
              return mn(e);
            },
            true
          );
          r(
            'scrollbarStyle',
            'native',
            function (e) {
              wn(e);
              mn(e);
              e.display.scrollbars.setScrollTop(e.doc.scrollTop);
              e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
            },
            true
          );
          r(
            'lineNumbers',
            false,
            function (e, t) {
              e.display.gutterSpecs = Yn(e.options.gutters, t);
              qn(e);
            },
            true
          );
          r('firstLineNumber', 1, qn, true);
          r(
            'lineNumberFormatter',
            function (e) {
              return e;
            },
            qn,
            true
          );
          r('showCursorWhenSelecting', false, Gi, true);
          r('resetSelectionOnContextMenu', true);
          r('lineWiseCopyCut', true);
          r('pasteLinesPerSelection', true);
          r('selectionsMayTouch', false);
          r('readOnly', false, function (e, t) {
            if (t == 'nocursor') {
              qi(e);
              e.display.input.blur();
            }
            e.display.input.readOnlyChanged(t);
          });
          r('screenReaderLabel', null, function (e, t) {
            t = t === '' ? null : t;
            e.display.input.screenReaderLabelChanged(t);
          });
          r(
            'disableInput',
            false,
            function (e, t) {
              if (!t) {
                e.display.input.reset();
              }
            },
            true
          );
          r('dragDrop', true, Fa);
          r('allowDropFileTypes', null);
          r('cursorBlinkRate', 530);
          r('cursorScrollMargin', 0);
          r('cursorHeight', 1, Gi, true);
          r('singleCursorHeightPerLine', true, Gi, true);
          r('workTime', 100);
          r('workDelay', 100);
          r('flattenSpans', true, po, true);
          r('addModeClass', false, po, true);
          r('pollInterval', 100);
          r('undoDepth', 200, function (e, t) {
            return (e.doc.history.undoDepth = t);
          });
          r('historyEventDelay', 1250);
          r(
            'viewportMargin',
            10,
            function (e) {
              return e.refresh();
            },
            true
          );
          r('maxHighlightLength', 1e4, po, true);
          r('moveInputWithCursor', true, function (e, t) {
            if (!t) {
              e.display.input.resetPosition();
            }
          });
          r('tabindex', null, function (e, t) {
            return (e.display.input.getField().tabIndex = t || '');
          });
          r('autofocus', null);
          r(
            'direction',
            'ltr',
            function (e, t) {
              return e.doc.setDirection(t);
            },
            true
          );
          r('phrases', null);
        }
        function Fa(e, t, r) {
          var i = r && r != Aa;
          if (!t != !i) {
            var n = e.display.dragFunctions;
            var o = t ? pe : ge;
            o(e.display.scroller, 'dragstart', n.start);
            o(e.display.scroller, 'dragenter', n.enter);
            o(e.display.scroller, 'dragover', n.over);
            o(e.display.scroller, 'dragleave', n.leave);
            o(e.display.scroller, 'drop', n.drop);
          }
        }
        function Pa(e) {
          if (e.options.lineWrapping) {
            H(e.display.wrapper, 'CodeMirror-wrap');
            e.display.sizer.style.minWidth = '';
            e.display.sizerWidth = null;
          } else {
            k(e.display.wrapper, 'CodeMirror-wrap');
            lr(e);
          }
          Wi(e);
          Pi(e);
          ui(e);
          setTimeout(function () {
            return mn(e);
          }, 100);
        }
        function Ea(e, t) {
          var r = this;
          if (!(this instanceof Ea)) {
            return new Ea(e, t);
          }
          this.options = t = t ? I(t) : {};
          I(Da, t, false);
          var i = t.value;
          if (typeof i == 'string') {
            i = new Cl(i, t.mode, null, t.lineSeparator, t.direction);
          } else if (t.mode) {
            i.modeOption = t.mode;
          }
          this.doc = i;
          var n = new Ea.inputStyles[t.inputStyle](this);
          var o = (this.display = new Zn(e, i, n, t));
          o.wrapper.CodeMirror = this;
          Oa(this);
          if (t.lineWrapping) {
            this.display.wrapper.className += ' CodeMirror-wrap';
          }
          wn(this);
          this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: false,
            delayingBlurEvent: false,
            focused: false,
            suppressEdits: false,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: false,
            draggingText: false,
            highlight: new R(),
            keySeq: null,
            specialChars: null,
          };
          if (t.autofocus && !m) {
            o.input.focus();
          }
          if (l && a < 11) {
            setTimeout(function () {
              return r.display.input.reset(true);
            }, 20);
          }
          Ia(this);
          Al();
          Cn(this);
          this.curOp.forceUpdate = true;
          yo(this, i);
          if ((t.autofocus && !m) || this.hasFocus()) {
            setTimeout(function () {
              if (r.hasFocus() && !r.state.focused) {
                $i(r);
              }
            }, 20);
          } else {
            qi(this);
          }
          for (var u in Wa) {
            if (Wa.hasOwnProperty(u)) {
              Wa[u](this, t[u], Aa);
            }
          }
          _n(this);
          if (t.finishInit) {
            t.finishInit(this);
          }
          for (var f = 0; f < za.length; ++f) {
            za[f](this);
          }
          Sn(this);
          if (
            s &&
            t.lineWrapping &&
            getComputedStyle(o.lineDiv).textRendering == 'optimizelegibility'
          ) {
            o.lineDiv.style.textRendering = 'auto';
          }
        }
        Ea.defaults = Da;
        Ea.optionHandlers = Wa;
        function Ia(e) {
          var t = e.display;
          pe(t.scroller, 'mousedown', Dn(e, ma));
          if (l && a < 11) {
            pe(
              t.scroller,
              'dblclick',
              Dn(e, function (t) {
                if (ye(e, t)) {
                  return;
                }
                var r = Hi(e, t);
                if (!r || Ta(e, t) || Ur(e.display, t)) {
                  return;
                }
                Ce(t);
                var i = e.findWordAt(r);
                Po(e.doc, i.anchor, i.head);
              })
            );
          } else {
            pe(t.scroller, 'dblclick', function (t) {
              return ye(e, t) || Ce(t);
            });
          }
          pe(t.scroller, 'contextmenu', function (t) {
            return Ma(e, t);
          });
          pe(t.input.getField(), 'contextmenu', function (r) {
            if (!t.scroller.contains(r.target)) {
              Ma(e, r);
            }
          });
          var r,
            i = { end: 0 };
          function n() {
            if (t.activeTouch) {
              r = setTimeout(function () {
                return (t.activeTouch = null);
              }, 1e3);
              i = t.activeTouch;
              i.end = +new Date();
            }
          }
          function o(e) {
            if (e.touches.length != 1) {
              return false;
            }
            var t = e.touches[0];
            return t.radiusX <= 1 && t.radiusY <= 1;
          }
          function s(e, t) {
            if (t.left == null) {
              return true;
            }
            var r = t.left - e.left,
              i = t.top - e.top;
            return r * r + i * i > 20 * 20;
          }
          pe(t.scroller, 'touchstart', function (n) {
            if (!ye(e, n) && !o(n) && !Ta(e, n)) {
              t.input.ensurePolled();
              clearTimeout(r);
              var l = +new Date();
              t.activeTouch = {
                start: l,
                moved: false,
                prev: l - i.end <= 300 ? i : null,
              };
              if (n.touches.length == 1) {
                t.activeTouch.left = n.touches[0].pageX;
                t.activeTouch.top = n.touches[0].pageY;
              }
            }
          });
          pe(t.scroller, 'touchmove', function () {
            if (t.activeTouch) {
              t.activeTouch.moved = true;
            }
          });
          pe(t.scroller, 'touchend', function (r) {
            var i = t.activeTouch;
            if (
              i &&
              !Ur(t, r) &&
              i.left != null &&
              !i.moved &&
              new Date() - i.start < 300
            ) {
              var o = e.coordsChar(t.activeTouch, 'page'),
                l;
              if (!i.prev || s(i, i.prev)) {
                l = new no(o, o);
              } else if (!i.prev.prev || s(i, i.prev.prev)) {
                l = e.findWordAt(o);
              } else {
                l = new no(nt(o.line, 0), ct(e.doc, nt(o.line + 1, 0)));
              }
              e.setSelection(l.anchor, l.head);
              e.focus();
              Ce(r);
            }
            n();
          });
          pe(t.scroller, 'touchcancel', n);
          pe(t.scroller, 'scroll', function () {
            if (t.scroller.clientHeight) {
              cn(e, t.scroller.scrollTop);
              dn(e, t.scroller.scrollLeft, true);
              me(e, 'scroll', e);
            }
          });
          pe(t.scroller, 'mousewheel', function (t) {
            return ro(e, t);
          });
          pe(t.scroller, 'DOMMouseScroll', function (t) {
            return ro(e, t);
          });
          pe(t.wrapper, 'scroll', function () {
            return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
          });
          t.dragFunctions = {
            enter: function (t) {
              if (!ye(e, t)) {
                ke(t);
              }
            },
            over: function (t) {
              if (!ye(e, t)) {
                Tl(e, t);
                ke(t);
              }
            },
            start: function (t) {
              return kl(e, t);
            },
            drop: Dn(e, Ll),
            leave: function (t) {
              if (!ye(e, t)) {
                Ml(e);
              }
            },
          };
          var u = t.input.getField();
          pe(u, 'keyup', function (t) {
            return fa.call(e, t);
          });
          pe(u, 'keydown', Dn(e, sa));
          pe(u, 'keypress', Dn(e, ca));
          pe(u, 'focus', function (t) {
            return $i(e, t);
          });
          pe(u, 'blur', function (t) {
            return qi(e, t);
          });
        }
        var za = [];
        Ea.defineInitHook = function (e) {
          return za.push(e);
        };
        function Ra(e, t, r, i) {
          var n = e.doc,
            o;
          if (r == null) {
            r = 'add';
          }
          if (r == 'smart') {
            if (!n.mode.indent) {
              r = 'prev';
            } else {
              o = yt(e, t).state;
            }
          }
          var l = e.options.tabSize;
          var a = qe(n, t),
            s = z(a.text, null, l);
          if (a.stateAfter) {
            a.stateAfter = null;
          }
          var u = a.text.match(/^\s*/)[0],
            f;
          if (!i && !/\S/.test(a.text)) {
            f = 0;
            r = 'not';
          } else if (r == 'smart') {
            f = n.mode.indent(o, a.text.slice(u.length), a.text);
            if (f == U || f > 150) {
              if (!i) {
                return;
              }
              r = 'prev';
            }
          }
          if (r == 'prev') {
            if (t > n.first) {
              f = z(qe(n, t - 1).text, null, l);
            } else {
              f = 0;
            }
          } else if (r == 'add') {
            f = s + e.options.indentUnit;
          } else if (r == 'subtract') {
            f = s - e.options.indentUnit;
          } else if (typeof r == 'number') {
            f = s + r;
          }
          f = Math.max(0, f);
          var c = '',
            h = 0;
          if (e.options.indentWithTabs) {
            for (var d = Math.floor(f / l); d; --d) {
              h += l;
              c += '\t';
            }
          }
          if (h < f) {
            c += Y(f - h);
          }
          if (c != u) {
            il(n, c, nt(t, 0), nt(t, u.length), '+input');
            a.stateAfter = null;
            return true;
          } else {
            for (var p = 0; p < n.sel.ranges.length; p++) {
              var v = n.sel.ranges[p];
              if (v.head.line == t && v.head.ch < u.length) {
                var g = nt(t, u.length);
                Io(n, p, new no(g, g));
                break;
              }
            }
          }
        }
        var Ba = null;
        function Ga(e) {
          Ba = e;
        }
        function Ua(e, t, r, i, n) {
          var o = e.doc;
          e.display.shift = false;
          if (!i) {
            i = o.sel;
          }
          var l = +new Date() - 200;
          var a = n == 'paste' || e.state.pasteIncoming > l;
          var s = He(t),
            u = null;
          if (a && i.ranges.length > 1) {
            if (Ba && Ba.text.join('\n') == t) {
              if (i.ranges.length % Ba.text.length == 0) {
                u = [];
                for (var f = 0; f < Ba.text.length; f++) {
                  u.push(o.splitLines(Ba.text[f]));
                }
              }
            } else if (
              s.length == i.ranges.length &&
              e.options.pasteLinesPerSelection
            ) {
              u = q(s, function (e) {
                return [e];
              });
            }
          }
          var c = e.curOp.updateInput;
          for (var h = i.ranges.length - 1; h >= 0; h--) {
            var d = i.ranges[h];
            var p = d.from(),
              v = d.to();
            if (d.empty()) {
              if (r && r > 0) {
                p = nt(p.line, p.ch - r);
              } else if (e.state.overwrite && !a) {
                v = nt(v.line, Math.min(qe(o, v.line).text.length, v.ch + $(s).length));
              } else if (a && Ba && Ba.lineWise && Ba.text.join('\n') == s.join('\n')) {
                p = v = nt(p.line, 0);
              }
            }
            var g = {
              from: p,
              to: v,
              text: u ? u[h % u.length] : s,
              origin: n || (a ? 'paste' : e.state.cutIncoming > l ? 'cut' : '+input'),
            };
            Zo(e.doc, g);
            Mr(e, 'inputRead', e, g);
          }
          if (t && !a) {
            Ka(e, t);
          }
          ln(e);
          if (e.curOp.updateInput < 2) {
            e.curOp.updateInput = c;
          }
          e.curOp.typing = true;
          e.state.pasteIncoming = e.state.cutIncoming = -1;
        }
        function Va(e, t) {
          var r = e.clipboardData && e.clipboardData.getData('Text');
          if (r) {
            e.preventDefault();
            if (!t.isReadOnly() && !t.options.disableInput) {
              An(t, function () {
                return Ua(t, r, 0, null, 'paste');
              });
            }
            return true;
          }
        }
        function Ka(e, t) {
          if (!e.options.electricChars || !e.options.smartIndent) {
            return;
          }
          var r = e.doc.sel;
          for (var i = r.ranges.length - 1; i >= 0; i--) {
            var n = r.ranges[i];
            if (n.head.ch > 100 || (i && r.ranges[i - 1].head.line == n.head.line)) {
              continue;
            }
            var o = e.getModeAt(n.head);
            var l = false;
            if (o.electricChars) {
              for (var a = 0; a < o.electricChars.length; a++) {
                if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                  l = Ra(e, n.head.line, 'smart');
                  break;
                }
              }
            } else if (o.electricInput) {
              if (
                o.electricInput.test(qe(e.doc, n.head.line).text.slice(0, n.head.ch))
              ) {
                l = Ra(e, n.head.line, 'smart');
              }
            }
            if (l) {
              Mr(e, 'electricInput', e, n.head.line);
            }
          }
        }
        function ja(e) {
          var t = [],
            r = [];
          for (var i = 0; i < e.doc.sel.ranges.length; i++) {
            var n = e.doc.sel.ranges[i].head.line;
            var o = { anchor: nt(n, 0), head: nt(n + 1, 0) };
            r.push(o);
            t.push(e.getRange(o.anchor, o.head));
          }
          return { text: t, ranges: r };
        }
        function Xa(e, t, r, i) {
          e.setAttribute('autocorrect', r ? '' : 'off');
          e.setAttribute('autocapitalize', i ? '' : 'off');
          e.setAttribute('spellcheck', !!t);
        }
        function _a() {
          var e = N(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
          );
          var t = N(
            'div',
            [e],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;'
          );
          if (s) {
            e.style.width = '1000px';
          } else {
            e.setAttribute('wrap', 'off');
          }
          if (v) {
            e.style.border = '1px solid black';
          }
          Xa(e);
          return t;
        }
        function Ya(e) {
          var t = e.optionHandlers;
          var r = (e.helpers = {});
          e.prototype = {
            constructor: e,
            focus: function () {
              window.focus();
              this.display.input.focus();
            },
            setOption: function (e, r) {
              var i = this.options,
                n = i[e];
              if (i[e] == r && e != 'mode') {
                return;
              }
              i[e] = r;
              if (t.hasOwnProperty(e)) {
                Dn(this, t[e])(this, r, n);
              }
              me(this, 'optionChange', this, e);
            },
            getOption: function (e) {
              return this.options[e];
            },
            getDoc: function () {
              return this.doc;
            },
            addKeyMap: function (e, t) {
              this.state.keyMaps[t ? 'push' : 'unshift'](Kl(e));
            },
            removeKeyMap: function (e) {
              var t = this.state.keyMaps;
              for (var r = 0; r < t.length; ++r) {
                if (t[r] == e || t[r].name == e) {
                  t.splice(r, 1);
                  return true;
                }
              }
            },
            addOverlay: Wn(function (t, r) {
              var i = t.token ? t : e.getMode(this.options, t);
              if (i.startState) {
                throw new Error('Overlays may not be stateful.');
              }
              Z(
                this.state.overlays,
                {
                  mode: i,
                  modeSpec: t,
                  opaque: r && r.opaque,
                  priority: (r && r.priority) || 0,
                },
                function (e) {
                  return e.priority;
                }
              );
              this.state.modeGen++;
              Pi(this);
            }),
            removeOverlay: Wn(function (e) {
              var t = this.state.overlays;
              for (var r = 0; r < t.length; ++r) {
                var i = t[r].modeSpec;
                if (i == e || (typeof e == 'string' && i.name == e)) {
                  t.splice(r, 1);
                  this.state.modeGen++;
                  Pi(this);
                  return;
                }
              }
            }),
            indentLine: Wn(function (e, t, r) {
              if (typeof t != 'string' && typeof t != 'number') {
                if (t == null) {
                  t = this.options.smartIndent ? 'smart' : 'prev';
                } else {
                  t = t ? 'add' : 'subtract';
                }
              }
              if (rt(this.doc, e)) {
                Ra(this, e, t, r);
              }
            }),
            indentSelection: Wn(function (e) {
              var t = this.doc.sel.ranges,
                r = -1;
              for (var i = 0; i < t.length; i++) {
                var n = t[i];
                if (!n.empty()) {
                  var o = n.from(),
                    l = n.to();
                  var a = Math.max(r, o.line);
                  r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                  for (var s = a; s < r; ++s) {
                    Ra(this, s, e);
                  }
                  var u = this.doc.sel.ranges;
                  if (o.ch == 0 && t.length == u.length && u[i].from().ch > 0) {
                    Io(this.doc, i, new no(o, u[i].to()), V);
                  }
                } else if (n.head.line > r) {
                  Ra(this, n.head.line, e, true);
                  r = n.head.line;
                  if (i == this.doc.sel.primIndex) {
                    ln(this);
                  }
                }
              }
            }),
            getTokenAt: function (e, t) {
              return St(this, e, t);
            },
            getLineTokens: function (e, t) {
              return St(this, nt(e), t, true);
            },
            getTokenTypeAt: function (e) {
              e = ct(this.doc, e);
              var t = mt(this, qe(this.doc, e.line));
              var r = 0,
                i = (t.length - 1) / 2,
                n = e.ch;
              var o;
              if (n == 0) {
                o = t[2];
              } else {
                for (;;) {
                  var l = (r + i) >> 1;
                  if ((l ? t[l * 2 - 1] : 0) >= n) {
                    i = l;
                  } else if (t[l * 2 + 1] < n) {
                    r = l + 1;
                  } else {
                    o = t[l * 2 + 2];
                    break;
                  }
                }
              }
              var a = o ? o.indexOf('overlay ') : -1;
              return a < 0 ? o : a == 0 ? null : o.slice(0, a - 1);
            },
            getModeAt: function (t) {
              var r = this.doc.mode;
              if (!r.innerMode) {
                return r;
              }
              return e.innerMode(r, this.getTokenAt(t).state).mode;
            },
            getHelper: function (e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function (e, t) {
              var i = [];
              if (!r.hasOwnProperty(t)) {
                return i;
              }
              var n = r[t],
                o = this.getModeAt(e);
              if (typeof o[t] == 'string') {
                if (n[o[t]]) {
                  i.push(n[o[t]]);
                }
              } else if (o[t]) {
                for (var l = 0; l < o[t].length; l++) {
                  var a = n[o[t][l]];
                  if (a) {
                    i.push(a);
                  }
                }
              } else if (o.helperType && n[o.helperType]) {
                i.push(n[o.helperType]);
              } else if (n[o.name]) {
                i.push(n[o.name]);
              }
              for (var s = 0; s < n._global.length; s++) {
                var u = n._global[s];
                if (u.pred(o, this) && B(i, u.val) == -1) {
                  i.push(u.val);
                }
              }
              return i;
            },
            getStateAfter: function (e, t) {
              var r = this.doc;
              e = ft(r, e == null ? r.first + r.size - 1 : e);
              return yt(this, e + 1, t).state;
            },
            cursorCoords: function (e, t) {
              var r,
                i = this.doc.sel.primary();
              if (e == null) {
                r = i.head;
              } else if (typeof e == 'object') {
                r = ct(this.doc, e);
              } else {
                r = e ? i.from() : i.to();
              }
              return gi(this, r, t || 'page');
            },
            charCoords: function (e, t) {
              return vi(this, ct(this.doc, e), t || 'page');
            },
            coordsChar: function (e, t) {
              e = pi(this, e, t || 'page');
              return bi(this, e.left, e.top);
            },
            lineAtHeight: function (e, t) {
              e = pi(this, { top: e, left: 0 }, t || 'page').top;
              return tt(this.doc, e + this.display.viewOffset);
            },
            heightAtLine: function (e, t, r) {
              var i = false,
                n;
              if (typeof e == 'number') {
                var o = this.doc.first + this.doc.size - 1;
                if (e < this.doc.first) {
                  e = this.doc.first;
                } else if (e > o) {
                  e = o;
                  i = true;
                }
                n = qe(this.doc, e);
              } else {
                n = e;
              }
              return (
                di(this, n, { top: 0, left: 0 }, t || 'page', r || i).top +
                (i ? this.doc.height - nr(n) : 0)
              );
            },
            defaultTextHeight: function () {
              return Mi(this.display);
            },
            defaultCharWidth: function () {
              return Ni(this.display);
            },
            getViewport: function () {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function (e, t, r, i, n) {
              var o = this.display;
              e = gi(this, ct(this.doc, e));
              var l = e.bottom,
                a = e.left;
              t.style.position = 'absolute';
              t.setAttribute('cm-ignore-events', 'true');
              this.display.input.setUneditable(t);
              o.sizer.appendChild(t);
              if (i == 'over') {
                l = e.top;
              } else if (i == 'above' || i == 'near') {
                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                  u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                if (
                  (i == 'above' || e.bottom + t.offsetHeight > s) &&
                  e.top > t.offsetHeight
                ) {
                  l = e.top - t.offsetHeight;
                } else if (e.bottom + t.offsetHeight <= s) {
                  l = e.bottom;
                }
                if (a + t.offsetWidth > u) {
                  a = u - t.offsetWidth;
                }
              }
              t.style.top = l + 'px';
              t.style.left = t.style.right = '';
              if (n == 'right') {
                a = o.sizer.clientWidth - t.offsetWidth;
                t.style.right = '0px';
              } else {
                if (n == 'left') {
                  a = 0;
                } else if (n == 'middle') {
                  a = (o.sizer.clientWidth - t.offsetWidth) / 2;
                }
                t.style.left = a + 'px';
              }
              if (r) {
                rn(this, {
                  left: a,
                  top: l,
                  right: a + t.offsetWidth,
                  bottom: l + t.offsetHeight,
                });
              }
            },
            triggerOnKeyDown: Wn(sa),
            triggerOnKeyPress: Wn(ca),
            triggerOnKeyUp: fa,
            triggerOnMouseDown: Wn(ma),
            execCommand: function (e) {
              if (ql.hasOwnProperty(e)) {
                return ql[e].call(null, this);
              }
            },
            triggerElectric: Wn(function (e) {
              Ka(this, e);
            }),
            findPosH: function (e, t, r, i) {
              var n = 1;
              if (t < 0) {
                n = -1;
                t = -t;
              }
              var o = ct(this.doc, e);
              for (var l = 0; l < t; ++l) {
                o = $a(this.doc, o, n, r, i);
                if (o.hitSide) {
                  break;
                }
              }
              return o;
            },
            moveH: Wn(function (e, t) {
              var r = this;
              this.extendSelectionsBy(function (i) {
                if (r.display.shift || r.doc.extend || i.empty()) {
                  return $a(r.doc, i.head, e, t, r.options.rtlMoveVisually);
                } else {
                  return e < 0 ? i.from() : i.to();
                }
              }, j);
            }),
            deleteH: Wn(function (e, t) {
              var r = this.doc.sel,
                i = this.doc;
              if (r.somethingSelected()) {
                i.replaceSelection('', null, '+delete');
              } else {
                jl(this, function (r) {
                  var n = $a(i, r.head, e, t, false);
                  return e < 0 ? { from: n, to: r.head } : { from: r.head, to: n };
                });
              }
            }),
            findPosV: function (e, t, r, i) {
              var n = 1,
                o = i;
              if (t < 0) {
                n = -1;
                t = -t;
              }
              var l = ct(this.doc, e);
              for (var a = 0; a < t; ++a) {
                var s = gi(this, l, 'div');
                if (o == null) {
                  o = s.left;
                } else {
                  s.left = o;
                }
                l = qa(this, s, n, r);
                if (l.hitSide) {
                  break;
                }
              }
              return l;
            },
            moveV: Wn(function (e, t) {
              var r = this;
              var i = this.doc,
                n = [];
              var o = !this.display.shift && !i.extend && i.sel.somethingSelected();
              i.extendSelectionsBy(function (l) {
                if (o) {
                  return e < 0 ? l.from() : l.to();
                }
                var a = gi(r, l.head, 'div');
                if (l.goalColumn != null) {
                  a.left = l.goalColumn;
                }
                n.push(a.left);
                var s = qa(r, a, e, t);
                if (t == 'page' && l == i.sel.primary()) {
                  on(r, vi(r, s, 'div').top - a.top);
                }
                return s;
              }, j);
              if (n.length) {
                for (var l = 0; l < i.sel.ranges.length; l++) {
                  i.sel.ranges[l].goalColumn = n[l];
                }
              }
            }),
            findWordAt: function (e) {
              var t = this.doc,
                r = qe(t, e.line).text;
              var i = e.ch,
                n = e.ch;
              if (r) {
                var o = this.getHelper(e, 'wordChars');
                if ((e.sticky == 'before' || n == r.length) && i) {
                  --i;
                } else {
                  ++n;
                }
                var l = r.charAt(i);
                var a = re(l, o)
                  ? function (e) {
                      return re(e, o);
                    }
                  : /\s/.test(l)
                  ? function (e) {
                      return /\s/.test(e);
                    }
                  : function (e) {
                      return !/\s/.test(e) && !re(e);
                    };
                while (i > 0 && a(r.charAt(i - 1))) {
                  --i;
                }
                while (n < r.length && a(r.charAt(n))) {
                  ++n;
                }
              }
              return new no(nt(e.line, i), nt(e.line, n));
            },
            toggleOverwrite: function (e) {
              if (e != null && e == this.state.overwrite) {
                return;
              }
              if ((this.state.overwrite = !this.state.overwrite)) {
                H(this.display.cursorDiv, 'CodeMirror-overwrite');
              } else {
                k(this.display.cursorDiv, 'CodeMirror-overwrite');
              }
              me(this, 'overwriteToggle', this, this.state.overwrite);
            },
            hasFocus: function () {
              return this.display.input.getField() == W();
            },
            isReadOnly: function () {
              return !!(this.options.readOnly || this.doc.cantEdit);
            },
            scrollTo: Wn(function (e, t) {
              an(this, e, t);
            }),
            getScrollInfo: function () {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Xr(this) - this.display.barHeight,
                width: e.scrollWidth - Xr(this) - this.display.barWidth,
                clientHeight: Yr(this),
                clientWidth: _r(this),
              };
            },
            scrollIntoView: Wn(function (e, t) {
              if (e == null) {
                e = { from: this.doc.sel.primary().head, to: null };
                if (t == null) {
                  t = this.options.cursorScrollMargin;
                }
              } else if (typeof e == 'number') {
                e = { from: nt(e, 0), to: null };
              } else if (e.from == null) {
                e = { from: e, to: null };
              }
              if (!e.to) {
                e.to = e.from;
              }
              e.margin = t || 0;
              if (e.from.line != null) {
                sn(this, e);
              } else {
                fn(this, e.from, e.to, e.margin);
              }
            }),
            setSize: Wn(function (e, t) {
              var r = this;
              var i = function (e) {
                return typeof e == 'number' || /^\d+$/.test(String(e)) ? e + 'px' : e;
              };
              if (e != null) {
                this.display.wrapper.style.width = i(e);
              }
              if (t != null) {
                this.display.wrapper.style.height = i(t);
              }
              if (this.options.lineWrapping) {
                si(this);
              }
              var n = this.display.viewFrom;
              this.doc.iter(n, this.display.viewTo, function (e) {
                if (e.widgets) {
                  for (var t = 0; t < e.widgets.length; t++) {
                    if (e.widgets[t].noHScroll) {
                      Ei(r, n, 'widget');
                      break;
                    }
                  }
                }
                ++n;
              });
              this.curOp.forceUpdate = true;
              me(this, 'refresh', this);
            }),
            operation: function (e) {
              return An(this, e);
            },
            startOperation: function () {
              return Cn(this);
            },
            endOperation: function () {
              return Sn(this);
            },
            refresh: Wn(function () {
              var e = this.display.cachedTextHeight;
              Pi(this);
              this.curOp.forceUpdate = true;
              ui(this);
              an(this, this.doc.scrollLeft, this.doc.scrollTop);
              Kn(this.display);
              if (
                e == null ||
                Math.abs(e - Mi(this.display)) > 0.5 ||
                this.options.lineWrapping
              ) {
                Wi(this);
              }
              me(this, 'refresh', this);
            }),
            swapDoc: Wn(function (e) {
              var t = this.doc;
              t.cm = null;
              if (this.state.selectingText) {
                this.state.selectingText();
              }
              yo(this, e);
              ui(this);
              this.display.input.reset();
              an(this, e.scrollLeft, e.scrollTop);
              this.curOp.forceScroll = true;
              Mr(this, 'swapDoc', this, t);
              return t;
            }),
            phrase: function (e) {
              var t = this.options.phrases;
              return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
            },
            getInputField: function () {
              return this.display.input.getField();
            },
            getWrapperElement: function () {
              return this.display.wrapper;
            },
            getScrollerElement: function () {
              return this.display.scroller;
            },
            getGutterElement: function () {
              return this.display.gutters;
            },
          };
          xe(e);
          e.registerHelper = function (t, i, n) {
            if (!r.hasOwnProperty(t)) {
              r[t] = e[t] = { _global: [] };
            }
            r[t][i] = n;
          };
          e.registerGlobalHelper = function (t, i, n, o) {
            e.registerHelper(t, i, o);
            r[t]._global.push({ pred: n, val: o });
          };
        }
        function $a(e, t, r, i, n) {
          var o = t;
          var l = r;
          var a = qe(e, t.line);
          var s = n && e.direction == 'rtl' ? -r : r;
          function u() {
            var r = t.line + s;
            if (r < e.first || r >= e.first + e.size) {
              return false;
            }
            t = new nt(r, t.ch, t.sticky);
            return (a = qe(e, r));
          }
          function f(o) {
            var l;
            if (i == 'codepoint') {
              var f = a.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
              if (isNaN(f)) {
                l = null;
              } else {
                var c = r > 0 ? f >= 55296 && f < 56320 : f >= 56320 && f < 57343;
                l = new nt(
                  t.line,
                  Math.max(0, Math.min(a.text.length, t.ch + r * (c ? 2 : 1))),
                  -r
                );
              }
            } else if (n) {
              l = $l(e.cm, a, t, r);
            } else {
              l = _l(a, t, r);
            }
            if (l == null) {
              if (!o && u()) {
                t = Yl(n, e.cm, a, t.line, s);
              } else {
                return false;
              }
            } else {
              t = l;
            }
            return true;
          }
          if (i == 'char' || i == 'codepoint') {
            f();
          } else if (i == 'column') {
            f(true);
          } else if (i == 'word' || i == 'group') {
            var c = null,
              h = i == 'group';
            var d = e.cm && e.cm.getHelper(t, 'wordChars');
            for (var p = true; ; p = false) {
              if (r < 0 && !f(!p)) {
                break;
              }
              var v = a.text.charAt(t.ch) || '\n';
              var g = re(v, d)
                ? 'w'
                : h && v == '\n'
                ? 'n'
                : !h || /\s/.test(v)
                ? null
                : 'p';
              if (h && !p && !g) {
                g = 's';
              }
              if (c && c != g) {
                if (r < 0) {
                  r = 1;
                  f();
                  t.sticky = 'after';
                }
                break;
              }
              if (g) {
                c = g;
              }
              if (r > 0 && !f(!p)) {
                break;
              }
            }
          }
          var m = _o(e, t, o, l, true);
          if (lt(o, m)) {
            m.hitSide = true;
          }
          return m;
        }
        function qa(e, t, r, i) {
          var n = e.doc,
            o = t.left,
            l;
          if (i == 'page') {
            var a = Math.min(
              e.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            );
            var s = Math.max(a - 0.5 * Mi(e.display), 3);
            l = (r > 0 ? t.bottom : t.top) + r * s;
          } else if (i == 'line') {
            l = r > 0 ? t.bottom + 3 : t.top - 3;
          }
          var u;
          for (;;) {
            u = bi(e, o, l);
            if (!u.outside) {
              break;
            }
            if (r < 0 ? l <= 0 : l >= n.height) {
              u.hitSide = true;
              break;
            }
            l += r * 5;
          }
          return u;
        }
        var Za = function (e) {
          this.cm = e;
          this.lastAnchorNode =
            this.lastAnchorOffset =
            this.lastFocusNode =
            this.lastFocusOffset =
              null;
          this.polling = new R();
          this.composing = null;
          this.gracePeriod = false;
          this.readDOMTimeout = null;
        };
        Za.prototype.init = function (e) {
          var t = this;
          var r = this,
            i = r.cm;
          var n = (r.div = e.lineDiv);
          n.contentEditable = true;
          Xa(n, i.options.spellcheck, i.options.autocorrect, i.options.autocapitalize);
          function o(e) {
            for (var t = e.target; t; t = t.parentNode) {
              if (t == n) {
                return true;
              }
              if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) {
                break;
              }
            }
            return false;
          }
          pe(n, 'paste', function (e) {
            if (!o(e) || ye(i, e) || Va(e, i)) {
              return;
            }
            if (a <= 11) {
              setTimeout(
                Dn(i, function () {
                  return t.updateFromDOM();
                }),
                20
              );
            }
          });
          pe(n, 'compositionstart', function (e) {
            t.composing = { data: e.data, done: false };
          });
          pe(n, 'compositionupdate', function (e) {
            if (!t.composing) {
              t.composing = { data: e.data, done: false };
            }
          });
          pe(n, 'compositionend', function (e) {
            if (t.composing) {
              if (e.data != t.composing.data) {
                t.readFromDOMSoon();
              }
              t.composing.done = true;
            }
          });
          pe(n, 'touchstart', function () {
            return r.forceCompositionEnd();
          });
          pe(n, 'input', function () {
            if (!t.composing) {
              t.readFromDOMSoon();
            }
          });
          function l(e) {
            if (!o(e) || ye(i, e)) {
              return;
            }
            if (i.somethingSelected()) {
              Ga({ lineWise: false, text: i.getSelections() });
              if (e.type == 'cut') {
                i.replaceSelection('', null, 'cut');
              }
            } else if (!i.options.lineWiseCopyCut) {
              return;
            } else {
              var t = ja(i);
              Ga({ lineWise: true, text: t.text });
              if (e.type == 'cut') {
                i.operation(function () {
                  i.setSelections(t.ranges, 0, V);
                  i.replaceSelection('', null, 'cut');
                });
              }
            }
            if (e.clipboardData) {
              e.clipboardData.clearData();
              var l = Ba.text.join('\n');
              e.clipboardData.setData('Text', l);
              if (e.clipboardData.getData('Text') == l) {
                e.preventDefault();
                return;
              }
            }
            var a = _a(),
              s = a.firstChild;
            i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild);
            s.value = Ba.text.join('\n');
            var u = W();
            P(s);
            setTimeout(function () {
              i.display.lineSpace.removeChild(a);
              u.focus();
              if (u == n) {
                r.showPrimarySelection();
              }
            }, 50);
          }
          pe(n, 'copy', l);
          pe(n, 'cut', l);
        };
        Za.prototype.screenReaderLabelChanged = function (e) {
          if (e) {
            this.div.setAttribute('aria-label', e);
          } else {
            this.div.removeAttribute('aria-label');
          }
        };
        Za.prototype.prepareSelection = function () {
          var e = Ui(this.cm, false);
          e.focus = W() == this.div;
          return e;
        };
        Za.prototype.showSelection = function (e, t) {
          if (!e || !this.cm.display.view.length) {
            return;
          }
          if (e.focus || t) {
            this.showPrimarySelection();
          }
          this.showMultipleSelections(e);
        };
        Za.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        };
        Za.prototype.showPrimarySelection = function () {
          var e = this.getSelection(),
            t = this.cm,
            i = t.doc.sel.primary();
          var n = i.from(),
            o = i.to();
          if (
            t.display.viewTo == t.display.viewFrom ||
            n.line >= t.display.viewTo ||
            o.line < t.display.viewFrom
          ) {
            e.removeAllRanges();
            return;
          }
          var l = rs(t, e.anchorNode, e.anchorOffset);
          var a = rs(t, e.focusNode, e.focusOffset);
          if (
            l &&
            !l.bad &&
            a &&
            !a.bad &&
            ot(ut(l, a), n) == 0 &&
            ot(st(l, a), o) == 0
          ) {
            return;
          }
          var s = t.display.view;
          var u = (n.line >= t.display.viewFrom && Qa(t, n)) || {
            node: s[0].measure.map[2],
            offset: 0,
          };
          var f = o.line < t.display.viewTo && Qa(t, o);
          if (!f) {
            var c = s[s.length - 1].measure;
            var h = c.maps ? c.maps[c.maps.length - 1] : c.map;
            f = { node: h[h.length - 1], offset: h[h.length - 2] - h[h.length - 3] };
          }
          if (!u || !f) {
            e.removeAllRanges();
            return;
          }
          var d = e.rangeCount && e.getRangeAt(0),
            p;
          try {
            p = A(u.node, u.offset, f.offset, f.node);
          } catch (v) {}
          if (p) {
            if (!r && t.state.focused) {
              e.collapse(u.node, u.offset);
              if (!p.collapsed) {
                e.removeAllRanges();
                e.addRange(p);
              }
            } else {
              e.removeAllRanges();
              e.addRange(p);
            }
            if (d && e.anchorNode == null) {
              e.addRange(d);
            } else if (r) {
              this.startGracePeriod();
            }
          }
          this.rememberSelection();
        };
        Za.prototype.startGracePeriod = function () {
          var e = this;
          clearTimeout(this.gracePeriod);
          this.gracePeriod = setTimeout(function () {
            e.gracePeriod = false;
            if (e.selectionChanged()) {
              e.cm.operation(function () {
                return (e.cm.curOp.selectionChanged = true);
              });
            }
          }, 20);
        };
        Za.prototype.showMultipleSelections = function (e) {
          M(this.cm.display.cursorDiv, e.cursors);
          M(this.cm.display.selectionDiv, e.selection);
        };
        Za.prototype.rememberSelection = function () {
          var e = this.getSelection();
          this.lastAnchorNode = e.anchorNode;
          this.lastAnchorOffset = e.anchorOffset;
          this.lastFocusNode = e.focusNode;
          this.lastFocusOffset = e.focusOffset;
        };
        Za.prototype.selectionInEditor = function () {
          var e = this.getSelection();
          if (!e.rangeCount) {
            return false;
          }
          var t = e.getRangeAt(0).commonAncestorContainer;
          return D(this.div, t);
        };
        Za.prototype.focus = function () {
          if (this.cm.options.readOnly != 'nocursor') {
            if (!this.selectionInEditor() || W() != this.div) {
              this.showSelection(this.prepareSelection(), true);
            }
            this.div.focus();
          }
        };
        Za.prototype.blur = function () {
          this.div.blur();
        };
        Za.prototype.getField = function () {
          return this.div;
        };
        Za.prototype.supportsTouch = function () {
          return true;
        };
        Za.prototype.receivedFocus = function () {
          var e = this;
          if (this.selectionInEditor()) {
            this.pollSelection();
          } else {
            An(this.cm, function () {
              return (e.cm.curOp.selectionChanged = true);
            });
          }
          function t() {
            if (e.cm.state.focused) {
              e.pollSelection();
              e.polling.set(e.cm.options.pollInterval, t);
            }
          }
          this.polling.set(this.cm.options.pollInterval, t);
        };
        Za.prototype.selectionChanged = function () {
          var e = this.getSelection();
          return (
            e.anchorNode != this.lastAnchorNode ||
            e.anchorOffset != this.lastAnchorOffset ||
            e.focusNode != this.lastFocusNode ||
            e.focusOffset != this.lastFocusOffset
          );
        };
        Za.prototype.pollSelection = function () {
          if (
            this.readDOMTimeout != null ||
            this.gracePeriod ||
            !this.selectionChanged()
          ) {
            return;
          }
          var e = this.getSelection(),
            t = this.cm;
          if (g && f && this.cm.display.gutterSpecs.length && Ja(e.anchorNode)) {
            this.cm.triggerOnKeyDown({
              type: 'keydown',
              keyCode: 8,
              preventDefault: Math.abs,
            });
            this.blur();
            this.focus();
            return;
          }
          if (this.composing) {
            return;
          }
          this.rememberSelection();
          var r = rs(t, e.anchorNode, e.anchorOffset);
          var i = rs(t, e.focusNode, e.focusOffset);
          if (r && i) {
            An(t, function () {
              Go(t.doc, lo(r, i), V);
              if (r.bad || i.bad) {
                t.curOp.selectionChanged = true;
              }
            });
          }
        };
        Za.prototype.pollContent = function () {
          if (this.readDOMTimeout != null) {
            clearTimeout(this.readDOMTimeout);
            this.readDOMTimeout = null;
          }
          var e = this.cm,
            t = e.display,
            r = e.doc.sel.primary();
          var i = r.from(),
            n = r.to();
          if (i.ch == 0 && i.line > e.firstLine()) {
            i = nt(i.line - 1, qe(e.doc, i.line - 1).length);
          }
          if (n.ch == qe(e.doc, n.line).text.length && n.line < e.lastLine()) {
            n = nt(n.line + 1, 0);
          }
          if (i.line < t.viewFrom || n.line > t.viewTo - 1) {
            return false;
          }
          var o, l, a;
          if (i.line == t.viewFrom || (o = Fi(e, i.line)) == 0) {
            l = et(t.view[0].line);
            a = t.view[0].node;
          } else {
            l = et(t.view[o].line);
            a = t.view[o - 1].node.nextSibling;
          }
          var s = Fi(e, n.line);
          var u, f;
          if (s == t.view.length - 1) {
            u = t.viewTo - 1;
            f = t.lineDiv.lastChild;
          } else {
            u = et(t.view[s + 1].line) - 1;
            f = t.view[s + 1].node.previousSibling;
          }
          if (!a) {
            return false;
          }
          var c = e.doc.splitLines(ts(e, a, f, l, u));
          var h = Ze(e.doc, nt(l, 0), nt(u, qe(e.doc, u).text.length));
          while (c.length > 1 && h.length > 1) {
            if ($(c) == $(h)) {
              c.pop();
              h.pop();
              u--;
            } else if (c[0] == h[0]) {
              c.shift();
              h.shift();
              l++;
            } else {
              break;
            }
          }
          var d = 0,
            p = 0;
          var v = c[0],
            g = h[0],
            m = Math.min(v.length, g.length);
          while (d < m && v.charCodeAt(d) == g.charCodeAt(d)) {
            ++d;
          }
          var y = $(c),
            b = $(h);
          var w = Math.min(
            y.length - (c.length == 1 ? d : 0),
            b.length - (h.length == 1 ? d : 0)
          );
          while (
            p < w &&
            y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)
          ) {
            ++p;
          }
          if (c.length == 1 && h.length == 1 && l == i.line) {
            while (
              d &&
              d > i.ch &&
              y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)
            ) {
              d--;
              p++;
            }
          }
          c[c.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, '');
          c[0] = c[0].slice(d).replace(/\u200b+$/, '');
          var x = nt(l, d);
          var C = nt(u, h.length ? $(h).length - p : 0);
          if (c.length > 1 || c[0] || ot(x, C)) {
            il(e.doc, c, x, C, '+input');
            return true;
          }
        };
        Za.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        };
        Za.prototype.reset = function () {
          this.forceCompositionEnd();
        };
        Za.prototype.forceCompositionEnd = function () {
          if (!this.composing) {
            return;
          }
          clearTimeout(this.readDOMTimeout);
          this.composing = null;
          this.updateFromDOM();
          this.div.blur();
          this.div.focus();
        };
        Za.prototype.readFromDOMSoon = function () {
          var e = this;
          if (this.readDOMTimeout != null) {
            return;
          }
          this.readDOMTimeout = setTimeout(function () {
            e.readDOMTimeout = null;
            if (e.composing) {
              if (e.composing.done) {
                e.composing = null;
              } else {
                return;
              }
            }
            e.updateFromDOM();
          }, 80);
        };
        Za.prototype.updateFromDOM = function () {
          var e = this;
          if (this.cm.isReadOnly() || !this.pollContent()) {
            An(this.cm, function () {
              return Pi(e.cm);
            });
          }
        };
        Za.prototype.setUneditable = function (e) {
          e.contentEditable = 'false';
        };
        Za.prototype.onKeyPress = function (e) {
          if (e.charCode == 0 || this.composing) {
            return;
          }
          e.preventDefault();
          if (!this.cm.isReadOnly()) {
            Dn(this.cm, Ua)(
              this.cm,
              String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode),
              0
            );
          }
        };
        Za.prototype.readOnlyChanged = function (e) {
          this.div.contentEditable = String(e != 'nocursor');
        };
        Za.prototype.onContextMenu = function () {};
        Za.prototype.resetPosition = function () {};
        Za.prototype.needsContentAttribute = true;
        function Qa(e, t) {
          var r = Jr(e, t.line);
          if (!r || r.hidden) {
            return null;
          }
          var i = qe(e.doc, t.line);
          var n = qr(r, i, t.line);
          var o = he(i, e.doc.direction),
            l = 'left';
          if (o) {
            var a = fe(o, t.ch);
            l = a % 2 ? 'right' : 'left';
          }
          var s = ii(n.map, t.ch, l);
          s.offset = s.collapse == 'right' ? s.end : s.start;
          return s;
        }
        function Ja(e) {
          for (var t = e; t; t = t.parentNode) {
            if (/CodeMirror-gutter-wrapper/.test(t.className)) {
              return true;
            }
          }
          return false;
        }
        function es(e, t) {
          if (t) {
            e.bad = true;
          }
          return e;
        }
        function ts(e, t, r, i, n) {
          var o = '',
            l = false,
            a = e.doc.lineSeparator(),
            s = false;
          function u(e) {
            return function (t) {
              return t.id == e;
            };
          }
          function f() {
            if (l) {
              o += a;
              if (s) {
                o += a;
              }
              l = s = false;
            }
          }
          function c(e) {
            if (e) {
              f();
              o += e;
            }
          }
          function h(t) {
            if (t.nodeType == 1) {
              var r = t.getAttribute('cm-text');
              if (r) {
                c(r);
                return;
              }
              var o = t.getAttribute('cm-marker'),
                d;
              if (o) {
                var p = e.findMarks(nt(i, 0), nt(n + 1, 0), u(+o));
                if (p.length && (d = p[0].find(0))) {
                  c(Ze(e.doc, d.from, d.to).join(a));
                }
                return;
              }
              if (t.getAttribute('contenteditable') == 'false') {
                return;
              }
              var v = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
              if (!/^br$/i.test(t.nodeName) && t.textContent.length == 0) {
                return;
              }
              if (v) {
                f();
              }
              for (var g = 0; g < t.childNodes.length; g++) {
                h(t.childNodes[g]);
              }
              if (/^(pre|p)$/i.test(t.nodeName)) {
                s = true;
              }
              if (v) {
                l = true;
              }
            } else if (t.nodeType == 3) {
              c(t.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
            }
          }
          for (;;) {
            h(t);
            if (t == r) {
              break;
            }
            t = t.nextSibling;
            s = false;
          }
          return o;
        }
        function rs(e, t, r) {
          var i;
          if (t == e.display.lineDiv) {
            i = e.display.lineDiv.childNodes[r];
            if (!i) {
              return es(e.clipPos(nt(e.display.viewTo - 1)), true);
            }
            t = null;
            r = 0;
          } else {
            for (i = t; ; i = i.parentNode) {
              if (!i || i == e.display.lineDiv) {
                return null;
              }
              if (i.parentNode && i.parentNode == e.display.lineDiv) {
                break;
              }
            }
          }
          for (var n = 0; n < e.display.view.length; n++) {
            var o = e.display.view[n];
            if (o.node == i) {
              return is(o, t, r);
            }
          }
        }
        function is(e, t, r) {
          var i = e.text.firstChild,
            n = false;
          if (!t || !D(i, t)) {
            return es(nt(et(e.line), 0), true);
          }
          if (t == i) {
            n = true;
            t = i.childNodes[r];
            r = 0;
            if (!t) {
              var o = e.rest ? $(e.rest) : e.line;
              return es(nt(et(o), o.text.length), n);
            }
          }
          var l = t.nodeType == 3 ? t : null,
            a = t;
          if (!l && t.childNodes.length == 1 && t.firstChild.nodeType == 3) {
            l = t.firstChild;
            if (r) {
              r = l.nodeValue.length;
            }
          }
          while (a.parentNode != i) {
            a = a.parentNode;
          }
          var s = e.measure,
            u = s.maps;
          function f(t, r, i) {
            for (var n = -1; n < (u ? u.length : 0); n++) {
              var o = n < 0 ? s.map : u[n];
              for (var l = 0; l < o.length; l += 3) {
                var a = o[l + 2];
                if (a == t || a == r) {
                  var f = et(n < 0 ? e.line : e.rest[n]);
                  var c = o[l] + i;
                  if (i < 0 || a != t) {
                    c = o[l + (i ? 1 : 0)];
                  }
                  return nt(f, c);
                }
              }
            }
          }
          var c = f(l, a, r);
          if (c) {
            return es(c, n);
          }
          for (
            var h = a.nextSibling, d = l ? l.nodeValue.length - r : 0;
            h;
            h = h.nextSibling
          ) {
            c = f(h, h.firstChild, 0);
            if (c) {
              return es(nt(c.line, c.ch - d), n);
            } else {
              d += h.textContent.length;
            }
          }
          for (var p = a.previousSibling, v = r; p; p = p.previousSibling) {
            c = f(p, p.firstChild, -1);
            if (c) {
              return es(nt(c.line, c.ch + v), n);
            } else {
              v += p.textContent.length;
            }
          }
        }
        var ns = function (e) {
          this.cm = e;
          this.prevInput = '';
          this.pollingFast = false;
          this.polling = new R();
          this.hasSelection = false;
          this.composing = null;
        };
        ns.prototype.init = function (e) {
          var t = this;
          var r = this,
            i = this.cm;
          this.createField(e);
          var n = this.textarea;
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild);
          if (v) {
            n.style.width = '0px';
          }
          pe(n, 'input', function () {
            if (l && a >= 9 && t.hasSelection) {
              t.hasSelection = null;
            }
            r.poll();
          });
          pe(n, 'paste', function (e) {
            if (ye(i, e) || Va(e, i)) {
              return;
            }
            i.state.pasteIncoming = +new Date();
            r.fastPoll();
          });
          function o(e) {
            if (ye(i, e)) {
              return;
            }
            if (i.somethingSelected()) {
              Ga({ lineWise: false, text: i.getSelections() });
            } else if (!i.options.lineWiseCopyCut) {
              return;
            } else {
              var t = ja(i);
              Ga({ lineWise: true, text: t.text });
              if (e.type == 'cut') {
                i.setSelections(t.ranges, null, V);
              } else {
                r.prevInput = '';
                n.value = t.text.join('\n');
                P(n);
              }
            }
            if (e.type == 'cut') {
              i.state.cutIncoming = +new Date();
            }
          }
          pe(n, 'cut', o);
          pe(n, 'copy', o);
          pe(e.scroller, 'paste', function (t) {
            if (Ur(e, t) || ye(i, t)) {
              return;
            }
            if (!n.dispatchEvent) {
              i.state.pasteIncoming = +new Date();
              r.focus();
              return;
            }
            var o = new Event('paste');
            o.clipboardData = t.clipboardData;
            n.dispatchEvent(o);
          });
          pe(e.lineSpace, 'selectstart', function (t) {
            if (!Ur(e, t)) {
              Ce(t);
            }
          });
          pe(n, 'compositionstart', function () {
            var e = i.getCursor('from');
            if (r.composing) {
              r.composing.range.clear();
            }
            r.composing = {
              start: e,
              range: i.markText(e, i.getCursor('to'), {
                className: 'CodeMirror-composing',
              }),
            };
          });
          pe(n, 'compositionend', function () {
            if (r.composing) {
              r.poll();
              r.composing.range.clear();
              r.composing = null;
            }
          });
        };
        ns.prototype.createField = function (e) {
          this.wrapper = _a();
          this.textarea = this.wrapper.firstChild;
        };
        ns.prototype.screenReaderLabelChanged = function (e) {
          if (e) {
            this.textarea.setAttribute('aria-label', e);
          } else {
            this.textarea.removeAttribute('aria-label');
          }
        };
        ns.prototype.prepareSelection = function () {
          var e = this.cm,
            t = e.display,
            r = e.doc;
          var i = Ui(e);
          if (e.options.moveInputWithCursor) {
            var n = gi(e, r.sel.primary().head, 'div');
            var o = t.wrapper.getBoundingClientRect(),
              l = t.lineDiv.getBoundingClientRect();
            i.teTop = Math.max(
              0,
              Math.min(t.wrapper.clientHeight - 10, n.top + l.top - o.top)
            );
            i.teLeft = Math.max(
              0,
              Math.min(t.wrapper.clientWidth - 10, n.left + l.left - o.left)
            );
          }
          return i;
        };
        ns.prototype.showSelection = function (e) {
          var t = this.cm,
            r = t.display;
          M(r.cursorDiv, e.cursors);
          M(r.selectionDiv, e.selection);
          if (e.teTop != null) {
            this.wrapper.style.top = e.teTop + 'px';
            this.wrapper.style.left = e.teLeft + 'px';
          }
        };
        ns.prototype.reset = function (e) {
          if (this.contextMenuPending || this.composing) {
            return;
          }
          var t = this.cm;
          if (t.somethingSelected()) {
            this.prevInput = '';
            var r = t.getSelection();
            this.textarea.value = r;
            if (t.state.focused) {
              P(this.textarea);
            }
            if (l && a >= 9) {
              this.hasSelection = r;
            }
          } else if (!e) {
            this.prevInput = this.textarea.value = '';
            if (l && a >= 9) {
              this.hasSelection = null;
            }
          }
        };
        ns.prototype.getField = function () {
          return this.textarea;
        };
        ns.prototype.supportsTouch = function () {
          return false;
        };
        ns.prototype.focus = function () {
          if (this.cm.options.readOnly != 'nocursor' && (!m || W() != this.textarea)) {
            try {
              this.textarea.focus();
            } catch (e) {}
          }
        };
        ns.prototype.blur = function () {
          this.textarea.blur();
        };
        ns.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        };
        ns.prototype.receivedFocus = function () {
          this.slowPoll();
        };
        ns.prototype.slowPoll = function () {
          var e = this;
          if (this.pollingFast) {
            return;
          }
          this.polling.set(this.cm.options.pollInterval, function () {
            e.poll();
            if (e.cm.state.focused) {
              e.slowPoll();
            }
          });
        };
        ns.prototype.fastPoll = function () {
          var e = false,
            t = this;
          t.pollingFast = true;
          function r() {
            var i = t.poll();
            if (!i && !e) {
              e = true;
              t.polling.set(60, r);
            } else {
              t.pollingFast = false;
              t.slowPoll();
            }
          }
          t.polling.set(20, r);
        };
        ns.prototype.poll = function () {
          var e = this;
          var t = this.cm,
            r = this.textarea,
            i = this.prevInput;
          if (
            this.contextMenuPending ||
            !t.state.focused ||
            (Fe(r) && !i && !this.composing) ||
            t.isReadOnly() ||
            t.options.disableInput ||
            t.state.keySeq
          ) {
            return false;
          }
          var n = r.value;
          if (n == i && !t.somethingSelected()) {
            return false;
          }
          if (
            (l && a >= 9 && this.hasSelection === n) ||
            (y && /[\uf700-\uf7ff]/.test(n))
          ) {
            t.display.input.reset();
            return false;
          }
          if (t.doc.sel == t.display.selForContextMenu) {
            var o = n.charCodeAt(0);
            if (o == 8203 && !i) {
              i = '​';
            }
            if (o == 8666) {
              this.reset();
              return this.cm.execCommand('undo');
            }
          }
          var s = 0,
            u = Math.min(i.length, n.length);
          while (s < u && i.charCodeAt(s) == n.charCodeAt(s)) {
            ++s;
          }
          An(t, function () {
            Ua(t, n.slice(s), i.length - s, null, e.composing ? '*compose' : null);
            if (n.length > 1e3 || n.indexOf('\n') > -1) {
              r.value = e.prevInput = '';
            } else {
              e.prevInput = n;
            }
            if (e.composing) {
              e.composing.range.clear();
              e.composing.range = t.markText(e.composing.start, t.getCursor('to'), {
                className: 'CodeMirror-composing',
              });
            }
          });
          return true;
        };
        ns.prototype.ensurePolled = function () {
          if (this.pollingFast && this.poll()) {
            this.pollingFast = false;
          }
        };
        ns.prototype.onKeyPress = function () {
          if (l && a >= 9) {
            this.hasSelection = null;
          }
          this.fastPoll();
        };
        ns.prototype.onContextMenu = function (e) {
          var t = this,
            r = t.cm,
            i = r.display,
            n = t.textarea;
          if (t.contextMenuPending) {
            t.contextMenuPending();
          }
          var o = Hi(r, e),
            u = i.scroller.scrollTop;
          if (!o || c) {
            return;
          }
          var f = r.options.resetSelectionOnContextMenu;
          if (f && r.doc.sel.contains(o) == -1) {
            Dn(r, Go)(r.doc, lo(o), V);
          }
          var h = n.style.cssText,
            d = t.wrapper.style.cssText;
          var p = t.wrapper.offsetParent.getBoundingClientRect();
          t.wrapper.style.cssText = 'position: static';
          n.style.cssText =
            'position: absolute; width: 30px; height: 30px;\n      top: ' +
            (e.clientY - p.top - 5) +
            'px; left: ' +
            (e.clientX - p.left - 5) +
            'px;\n      z-index: 1000; background: ' +
            (l ? 'rgba(255, 255, 255, .05)' : 'transparent') +
            ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);';
          var v;
          if (s) {
            v = window.scrollY;
          }
          i.input.focus();
          if (s) {
            window.scrollTo(null, v);
          }
          i.input.reset();
          if (!r.somethingSelected()) {
            n.value = t.prevInput = ' ';
          }
          t.contextMenuPending = m;
          i.selForContextMenu = r.doc.sel;
          clearTimeout(i.detectingSelectAll);
          function g() {
            if (n.selectionStart != null) {
              var e = r.somethingSelected();
              var o = '​' + (e ? n.value : '');
              n.value = '⇚';
              n.value = o;
              t.prevInput = e ? '' : '​';
              n.selectionStart = 1;
              n.selectionEnd = o.length;
              i.selForContextMenu = r.doc.sel;
            }
          }
          function m() {
            if (t.contextMenuPending != m) {
              return;
            }
            t.contextMenuPending = false;
            t.wrapper.style.cssText = d;
            n.style.cssText = h;
            if (l && a < 9) {
              i.scrollbars.setScrollTop((i.scroller.scrollTop = u));
            }
            if (n.selectionStart != null) {
              if (!l || (l && a < 9)) {
                g();
              }
              var e = 0,
                o = function () {
                  if (
                    i.selForContextMenu == r.doc.sel &&
                    n.selectionStart == 0 &&
                    n.selectionEnd > 0 &&
                    t.prevInput == '​'
                  ) {
                    Dn(r, $o)(r);
                  } else if (e++ < 10) {
                    i.detectingSelectAll = setTimeout(o, 500);
                  } else {
                    i.selForContextMenu = null;
                    i.input.reset();
                  }
                };
              i.detectingSelectAll = setTimeout(o, 200);
            }
          }
          if (l && a >= 9) {
            g();
          }
          if (S) {
            ke(e);
            var y = function () {
              ge(window, 'mouseup', y);
              setTimeout(m, 20);
            };
            pe(window, 'mouseup', y);
          } else {
            setTimeout(m, 50);
          }
        };
        ns.prototype.readOnlyChanged = function (e) {
          if (!e) {
            this.reset();
          }
          this.textarea.disabled = e == 'nocursor';
          this.textarea.readOnly = !!e;
        };
        ns.prototype.setUneditable = function () {};
        ns.prototype.needsContentAttribute = false;
        function os(e, t) {
          t = t ? I(t) : {};
          t.value = e.value;
          if (!t.tabindex && e.tabIndex) {
            t.tabindex = e.tabIndex;
          }
          if (!t.placeholder && e.placeholder) {
            t.placeholder = e.placeholder;
          }
          if (t.autofocus == null) {
            var r = W();
            t.autofocus =
              r == e || (e.getAttribute('autofocus') != null && r == document.body);
          }
          function i() {
            e.value = a.getValue();
          }
          var n;
          if (e.form) {
            pe(e.form, 'submit', i);
            if (!t.leaveSubmitMethodAlone) {
              var o = e.form;
              n = o.submit;
              try {
                var l = (o.submit = function () {
                  i();
                  o.submit = n;
                  o.submit();
                  o.submit = l;
                });
              } catch (s) {}
            }
          }
          t.finishInit = function (r) {
            r.save = i;
            r.getTextArea = function () {
              return e;
            };
            r.toTextArea = function () {
              r.toTextArea = isNaN;
              i();
              e.parentNode.removeChild(r.getWrapperElement());
              e.style.display = '';
              if (e.form) {
                ge(e.form, 'submit', i);
                if (!t.leaveSubmitMethodAlone && typeof e.form.submit == 'function') {
                  e.form.submit = n;
                }
              }
            };
          };
          e.style.display = 'none';
          var a = Ea(function (t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return a;
        }
        function ls(e) {
          e.off = ge;
          e.on = pe;
          e.wheelEventPixels = to;
          e.Doc = Cl;
          e.splitLines = He;
          e.countColumn = z;
          e.findColumn = X;
          e.isWordChar = te;
          e.Pass = U;
          e.signal = me;
          e.Line = ar;
          e.changeEnd = ao;
          e.scrollbarModel = bn;
          e.Pos = nt;
          e.cmpPos = ot;
          e.modes = ze;
          e.mimeModes = Re;
          e.resolveMode = Ue;
          e.getMode = Ve;
          e.modeExtensions = Ke;
          e.extendMode = je;
          e.copyState = Xe;
          e.startState = Ye;
          e.innerMode = _e;
          e.commands = ql;
          e.keyMap = Il;
          e.keyName = Vl;
          e.isModifierKey = Gl;
          e.lookupKey = Bl;
          e.normalizeKeyMap = Rl;
          e.StringStream = $e;
          e.SharedTextMarker = gl;
          e.TextMarker = pl;
          e.LineWidget = fl;
          e.e_preventDefault = Ce;
          e.e_stopPropagation = Se;
          e.e_stop = ke;
          e.addClass = H;
          e.contains = D;
          e.rmClass = k;
          e.keyNames = Hl;
        }
        Ha(Ea);
        Ya(Ea);
        var as = 'iter insert remove copy getEditor constructor'.split(' ');
        for (var ss in Cl.prototype) {
          if (Cl.prototype.hasOwnProperty(ss) && B(as, ss) < 0) {
            Ea.prototype[ss] = (function (e) {
              return function () {
                return e.apply(this.doc, arguments);
              };
            })(Cl.prototype[ss]);
          }
        }
        xe(Cl);
        Ea.inputStyles = { textarea: ns, contenteditable: Za };
        Ea.defineMode = function (e) {
          if (!Ea.defaults.mode && e != 'null') {
            Ea.defaults.mode = e;
          }
          Be.apply(this, arguments);
        };
        Ea.defineMIME = Ge;
        Ea.defineMode('null', function () {
          return {
            token: function (e) {
              return e.skipToEnd();
            },
          };
        });
        Ea.defineMIME('text/plain', 'null');
        Ea.defineExtension = function (e, t) {
          Ea.prototype[e] = t;
        };
        Ea.defineDocExtension = function (e, t) {
          Cl.prototype[e] = t;
        };
        Ea.fromTextArea = os;
        ls(Ea);
        Ea.version = '5.61.1';
        return Ea;
      });
    },
  },
]);
//# sourceMappingURL=4631.96a143e70f005fef7b59.js.map?v=96a143e70f005fef7b59
