(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [3443],
  {
    71637: (e, n, t) => {
      'use strict';
      t.d(n, { Z: () => s });
      var r = t(94015);
      var a = t.n(r);
      var o = t(23645);
      var i = t.n(o);
      var c = i()(a());
      c.push([
        e.id,
        '.cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/neat.css'],
          names: [],
          mappings:
            'AAAA,6BAA6B,WAAW,EAAE;AAC1C,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,4BAA4B,WAAW,EAAE;AACzC,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AAC/E,8BAA8B,YAAY,EAAE;AAC5C,qDAAqD,WAAW,EAAE;AAClE,0BAA0B,WAAW,EAAE;AACvC,0BAA0B,WAAW,EAAE;;AAEvC,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,sBAAsB,EAAE,sBAAsB,EAAE',
          sourcesContent: [
            '.cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const s = c;
    },
    23645: (e) => {
      'use strict';
      e.exports = function (e) {
        var n = [];
        n.toString = function n() {
          return this.map(function (n) {
            var t = e(n);
            if (n[2]) {
              return '@media '.concat(n[2], ' {').concat(t, '}');
            }
            return t;
          }).join('');
        };
        n.i = function (e, t, r) {
          if (typeof e === 'string') {
            e = [[null, e, '']];
          }
          var a = {};
          if (r) {
            for (var o = 0; o < this.length; o++) {
              var i = this[o][0];
              if (i != null) {
                a[i] = true;
              }
            }
          }
          for (var c = 0; c < e.length; c++) {
            var s = [].concat(e[c]);
            if (r && a[s[0]]) {
              continue;
            }
            if (t) {
              if (!s[2]) {
                s[2] = t;
              } else {
                s[2] = ''.concat(t, ' and ').concat(s[2]);
              }
            }
            n.push(s);
          }
        };
        return n;
      };
    },
    94015: (e) => {
      'use strict';
      function n(e, n) {
        return i(e) || o(e, n) || r(e, n) || t();
      }
      function t() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function r(e, n) {
        if (!e) return;
        if (typeof e === 'string') return a(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === 'Object' && e.constructor) t = e.constructor.name;
        if (t === 'Map' || t === 'Set') return Array.from(e);
        if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return a(e, n);
      }
      function a(e, n) {
        if (n == null || n > e.length) n = e.length;
        for (var t = 0, r = new Array(n); t < n; t++) {
          r[t] = e[t];
        }
        return r;
      }
      function o(e, n) {
        var t =
          e &&
          ((typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator']);
        if (t == null) return;
        var r = [];
        var a = true;
        var o = false;
        var i, c;
        try {
          for (t = t.call(e); !(a = (i = t.next()).done); a = true) {
            r.push(i.value);
            if (n && r.length === n) break;
          }
        } catch (s) {
          o = true;
          c = s;
        } finally {
          try {
            if (!a && t['return'] != null) t['return']();
          } finally {
            if (o) throw c;
          }
        }
        return r;
      }
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      e.exports = function e(t) {
        var r = n(t, 4),
          a = r[1],
          o = r[3];
        if (typeof btoa === 'function') {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(o))));
          var c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            i
          );
          var s = '/*# '.concat(c, ' */');
          var l = o.sources.map(function (e) {
            return '/*# sourceURL='.concat(o.sourceRoot || '').concat(e, ' */');
          });
          return [a].concat(l).concat([s]).join('\n');
        }
        return [a].join('\n');
      };
    },
    33443: (e, n, t) => {
      'use strict';
      t.r(n);
      t.d(n, { default: () => s });
      var r = t(93379);
      var a = t.n(r);
      var o = t(71637);
      var i = {};
      i.insert = 'head';
      i.singleton = false;
      var c = a()(o.Z, i);
      const s = o.Z.locals || {};
    },
    93379: (e, n, t) => {
      'use strict';
      var r = (function e() {
        var n;
        return function e() {
          if (typeof n === 'undefined') {
            n = Boolean(window && document && document.all && !window.atob);
          }
          return n;
        };
      })();
      var a = (function e() {
        var n = {};
        return function e(t) {
          if (typeof n[t] === 'undefined') {
            var r = document.querySelector(t);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) {
              try {
                r = r.contentDocument.head;
              } catch (a) {
                r = null;
              }
            }
            n[t] = r;
          }
          return n[t];
        };
      })();
      var o = [];
      function i(e) {
        var n = -1;
        for (var t = 0; t < o.length; t++) {
          if (o[t].identifier === e) {
            n = t;
            break;
          }
        }
        return n;
      }
      function c(e, n) {
        var t = {};
        var r = [];
        for (var a = 0; a < e.length; a++) {
          var c = e[a];
          var s = n.base ? c[0] + n.base : c[0];
          var l = t[s] || 0;
          var u = ''.concat(s, ' ').concat(l);
          t[s] = l + 1;
          var f = i(u);
          var A = { css: c[1], media: c[2], sourceMap: c[3] };
          if (f !== -1) {
            o[f].references++;
            o[f].updater(A);
          } else {
            o.push({ identifier: u, updater: d(A, n), references: 1 });
          }
          r.push(u);
        }
        return r;
      }
      function s(e) {
        var n = document.createElement('style');
        var r = e.attributes || {};
        if (typeof r.nonce === 'undefined') {
          var o = true ? t.nc : 0;
          if (o) {
            r.nonce = o;
          }
        }
        Object.keys(r).forEach(function (e) {
          n.setAttribute(e, r[e]);
        });
        if (typeof e.insert === 'function') {
          e.insert(n);
        } else {
          var i = a(e.insert || 'head');
          if (!i) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          i.appendChild(n);
        }
        return n;
      }
      function l(e) {
        if (e.parentNode === null) {
          return false;
        }
        e.parentNode.removeChild(e);
      }
      var u = (function e() {
        var n = [];
        return function e(t, r) {
          n[t] = r;
          return n.filter(Boolean).join('\n');
        };
      })();
      function f(e, n, t, r) {
        var a = t
          ? ''
          : r.media
          ? '@media '.concat(r.media, ' {').concat(r.css, '}')
          : r.css;
        if (e.styleSheet) {
          e.styleSheet.cssText = u(n, a);
        } else {
          var o = document.createTextNode(a);
          var i = e.childNodes;
          if (i[n]) {
            e.removeChild(i[n]);
          }
          if (i.length) {
            e.insertBefore(o, i[n]);
          } else {
            e.appendChild(o);
          }
        }
      }
      function A(e, n, t) {
        var r = t.css;
        var a = t.media;
        var o = t.sourceMap;
        if (a) {
          e.setAttribute('media', a);
        } else {
          e.removeAttribute('media');
        }
        if (o && typeof btoa !== 'undefined') {
          r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            ' */'
          );
        }
        if (e.styleSheet) {
          e.styleSheet.cssText = r;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(r));
        }
      }
      var m = null;
      var p = 0;
      function d(e, n) {
        var t;
        var r;
        var a;
        if (n.singleton) {
          var o = p++;
          t = m || (m = s(n));
          r = f.bind(null, t, o, false);
          a = f.bind(null, t, o, true);
        } else {
          t = s(n);
          r = A.bind(null, t, n);
          a = function e() {
            l(t);
          };
        }
        r(e);
        return function n(t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) {
              return;
            }
            r((e = t));
          } else {
            a();
          }
        };
      }
      e.exports = function (e, n) {
        n = n || {};
        if (!n.singleton && typeof n.singleton !== 'boolean') {
          n.singleton = r();
        }
        e = e || [];
        var t = c(e, n);
        return function e(r) {
          r = r || [];
          if (Object.prototype.toString.call(r) !== '[object Array]') {
            return;
          }
          for (var a = 0; a < t.length; a++) {
            var s = t[a];
            var l = i(s);
            o[l].references--;
          }
          var u = c(r, n);
          for (var f = 0; f < t.length; f++) {
            var A = t[f];
            var m = i(A);
            if (o[m].references === 0) {
              o[m].updater();
              o.splice(m, 1);
            }
          }
          t = u;
        };
      };
    },
  },
]);
//# sourceMappingURL=3443.868b4f89289beb97adec.js.map?v=868b4f89289beb97adec
