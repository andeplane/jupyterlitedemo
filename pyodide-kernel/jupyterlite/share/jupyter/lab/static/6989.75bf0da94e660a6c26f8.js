(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6989],
  {
    30970: (r, o, n) => {
      'use strict';
      n.d(o, { Z: () => l });
      var e = n(94015);
      var c = n.n(e);
      var a = n(23645);
      var i = n.n(a);
      var t = i()(c());
      t.push([
        r.id,
        '/*\n  Name:       lucario\n  Author:     Raphael Amorim\n\n  Original Lucario color scheme (https://github.com/raphamorim/lucario)\n*/\n\n.cm-s-lucario.CodeMirror, .cm-s-lucario .CodeMirror-gutters {\n  background-color: #2b3e50 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-lucario .CodeMirror-gutters { color: #2b3e50; }\n.cm-s-lucario .CodeMirror-cursor { border-left: solid thin #E6C845; }\n.cm-s-lucario .CodeMirror-linenumber { color: #f8f8f2; }\n.cm-s-lucario .CodeMirror-selected { background: #243443; }\n.cm-s-lucario .CodeMirror-line::selection, .cm-s-lucario .CodeMirror-line > span::selection, .cm-s-lucario .CodeMirror-line > span > span::selection { background: #243443; }\n.cm-s-lucario .CodeMirror-line::-moz-selection, .cm-s-lucario .CodeMirror-line > span::-moz-selection, .cm-s-lucario .CodeMirror-line > span > span::-moz-selection { background: #243443; }\n.cm-s-lucario span.cm-comment { color: #5c98cd; }\n.cm-s-lucario span.cm-string, .cm-s-lucario span.cm-string-2 { color: #E6DB74; }\n.cm-s-lucario span.cm-number { color: #ca94ff; }\n.cm-s-lucario span.cm-variable { color: #f8f8f2; }\n.cm-s-lucario span.cm-variable-2 { color: #f8f8f2; }\n.cm-s-lucario span.cm-def { color: #72C05D; }\n.cm-s-lucario span.cm-operator { color: #66D9EF; }\n.cm-s-lucario span.cm-keyword { color: #ff6541; }\n.cm-s-lucario span.cm-atom { color: #bd93f9; }\n.cm-s-lucario span.cm-meta { color: #f8f8f2; }\n.cm-s-lucario span.cm-tag { color: #ff6541; }\n.cm-s-lucario span.cm-attribute { color: #66D9EF; }\n.cm-s-lucario span.cm-qualifier { color: #72C05D; }\n.cm-s-lucario span.cm-property { color: #f8f8f2; }\n.cm-s-lucario span.cm-builtin { color: #72C05D; }\n.cm-s-lucario span.cm-variable-3, .cm-s-lucario span.cm-type { color: #ffb86c; }\n\n.cm-s-lucario .CodeMirror-activeline-background { background: #243443; }\n.cm-s-lucario .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/lucario.css'],
          names: [],
          mappings:
            'AAAA;;;;;CAKC;;AAED;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA,oCAAoC,cAAc,EAAE;AACpD,mCAAmC,+BAA+B,EAAE;AACpE,uCAAuC,cAAc,EAAE;AACvD,qCAAqC,mBAAmB,EAAE;AAC1D,uJAAuJ,mBAAmB,EAAE;AAC5K,sKAAsK,mBAAmB,EAAE;AAC3L,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;AAC/E,+BAA+B,cAAc,EAAE;AAC/C,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,4BAA4B,cAAc,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,kCAAkC,cAAc,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;;AAE/E,kDAAkD,mBAAmB,EAAE;AACvE,4CAA4C,0BAA0B,EAAE,uBAAuB,EAAE',
          sourcesContent: [
            '/*\n  Name:       lucario\n  Author:     Raphael Amorim\n\n  Original Lucario color scheme (https://github.com/raphamorim/lucario)\n*/\n\n.cm-s-lucario.CodeMirror, .cm-s-lucario .CodeMirror-gutters {\n  background-color: #2b3e50 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-lucario .CodeMirror-gutters { color: #2b3e50; }\n.cm-s-lucario .CodeMirror-cursor { border-left: solid thin #E6C845; }\n.cm-s-lucario .CodeMirror-linenumber { color: #f8f8f2; }\n.cm-s-lucario .CodeMirror-selected { background: #243443; }\n.cm-s-lucario .CodeMirror-line::selection, .cm-s-lucario .CodeMirror-line > span::selection, .cm-s-lucario .CodeMirror-line > span > span::selection { background: #243443; }\n.cm-s-lucario .CodeMirror-line::-moz-selection, .cm-s-lucario .CodeMirror-line > span::-moz-selection, .cm-s-lucario .CodeMirror-line > span > span::-moz-selection { background: #243443; }\n.cm-s-lucario span.cm-comment { color: #5c98cd; }\n.cm-s-lucario span.cm-string, .cm-s-lucario span.cm-string-2 { color: #E6DB74; }\n.cm-s-lucario span.cm-number { color: #ca94ff; }\n.cm-s-lucario span.cm-variable { color: #f8f8f2; }\n.cm-s-lucario span.cm-variable-2 { color: #f8f8f2; }\n.cm-s-lucario span.cm-def { color: #72C05D; }\n.cm-s-lucario span.cm-operator { color: #66D9EF; }\n.cm-s-lucario span.cm-keyword { color: #ff6541; }\n.cm-s-lucario span.cm-atom { color: #bd93f9; }\n.cm-s-lucario span.cm-meta { color: #f8f8f2; }\n.cm-s-lucario span.cm-tag { color: #ff6541; }\n.cm-s-lucario span.cm-attribute { color: #66D9EF; }\n.cm-s-lucario span.cm-qualifier { color: #72C05D; }\n.cm-s-lucario span.cm-property { color: #f8f8f2; }\n.cm-s-lucario span.cm-builtin { color: #72C05D; }\n.cm-s-lucario span.cm-variable-3, .cm-s-lucario span.cm-type { color: #ffb86c; }\n\n.cm-s-lucario .CodeMirror-activeline-background { background: #243443; }\n.cm-s-lucario .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const l = t;
    },
    23645: (r) => {
      'use strict';
      r.exports = function (r) {
        var o = [];
        o.toString = function o() {
          return this.map(function (o) {
            var n = r(o);
            if (o[2]) {
              return '@media '.concat(o[2], ' {').concat(n, '}');
            }
            return n;
          }).join('');
        };
        o.i = function (r, n, e) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var c = {};
          if (e) {
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0];
              if (i != null) {
                c[i] = true;
              }
            }
          }
          for (var t = 0; t < r.length; t++) {
            var l = [].concat(r[t]);
            if (e && c[l[0]]) {
              continue;
            }
            if (n) {
              if (!l[2]) {
                l[2] = n;
              } else {
                l[2] = ''.concat(n, ' and ').concat(l[2]);
              }
            }
            o.push(l);
          }
        };
        return o;
      };
    },
    94015: (r) => {
      'use strict';
      function o(r, o) {
        return i(r) || a(r, o) || e(r, o) || n();
      }
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function e(r, o) {
        if (!r) return;
        if (typeof r === 'string') return c(r, o);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        if (n === 'Object' && r.constructor) n = r.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(r);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return c(r, o);
      }
      function c(r, o) {
        if (o == null || o > r.length) o = r.length;
        for (var n = 0, e = new Array(o); n < o; n++) {
          e[n] = r[n];
        }
        return e;
      }
      function a(r, o) {
        var n =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (n == null) return;
        var e = [];
        var c = true;
        var a = false;
        var i, t;
        try {
          for (n = n.call(r); !(c = (i = n.next()).done); c = true) {
            e.push(i.value);
            if (o && e.length === o) break;
          }
        } catch (l) {
          a = true;
          t = l;
        } finally {
          try {
            if (!c && n['return'] != null) n['return']();
          } finally {
            if (a) throw t;
          }
        }
        return e;
      }
      function i(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(n) {
        var e = o(n, 4),
          c = e[1],
          a = e[3];
        if (typeof btoa === 'function') {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(a))));
          var t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            i
          );
          var l = '/*# '.concat(t, ' */');
          var s = a.sources.map(function (r) {
            return '/*# sourceURL='.concat(a.sourceRoot || '').concat(r, ' */');
          });
          return [c].concat(s).concat([l]).join('\n');
        }
        return [c].join('\n');
      };
    },
    96989: (r, o, n) => {
      'use strict';
      n.r(o);
      n.d(o, { default: () => l });
      var e = n(93379);
      var c = n.n(e);
      var a = n(30970);
      var i = {};
      i.insert = 'head';
      i.singleton = false;
      var t = c()(a.Z, i);
      const l = a.Z.locals || {};
    },
    93379: (r, o, n) => {
      'use strict';
      var e = (function r() {
        var o;
        return function r() {
          if (typeof o === 'undefined') {
            o = Boolean(window && document && document.all && !window.atob);
          }
          return o;
        };
      })();
      var c = (function r() {
        var o = {};
        return function r(n) {
          if (typeof o[n] === 'undefined') {
            var e = document.querySelector(n);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
              try {
                e = e.contentDocument.head;
              } catch (c) {
                e = null;
              }
            }
            o[n] = e;
          }
          return o[n];
        };
      })();
      var a = [];
      function i(r) {
        var o = -1;
        for (var n = 0; n < a.length; n++) {
          if (a[n].identifier === r) {
            o = n;
            break;
          }
        }
        return o;
      }
      function t(r, o) {
        var n = {};
        var e = [];
        for (var c = 0; c < r.length; c++) {
          var t = r[c];
          var l = o.base ? t[0] + o.base : t[0];
          var s = n[l] || 0;
          var u = ''.concat(l, ' ').concat(s);
          n[l] = s + 1;
          var A = i(u);
          var m = { css: t[1], media: t[2], sourceMap: t[3] };
          if (A !== -1) {
            a[A].references++;
            a[A].updater(m);
          } else {
            a.push({ identifier: u, updater: d(m, o), references: 1 });
          }
          e.push(u);
        }
        return e;
      }
      function l(r) {
        var o = document.createElement('style');
        var e = r.attributes || {};
        if (typeof e.nonce === 'undefined') {
          var a = true ? n.nc : 0;
          if (a) {
            e.nonce = a;
          }
        }
        Object.keys(e).forEach(function (r) {
          o.setAttribute(r, e[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(o);
        } else {
          var i = c(r.insert || 'head');
          if (!i) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          i.appendChild(o);
        }
        return o;
      }
      function s(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var u = (function r() {
        var o = [];
        return function r(n, e) {
          o[n] = e;
          return o.filter(Boolean).join('\n');
        };
      })();
      function A(r, o, n, e) {
        var c = n
          ? ''
          : e.media
          ? '@media '.concat(e.media, ' {').concat(e.css, '}')
          : e.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = u(o, c);
        } else {
          var a = document.createTextNode(c);
          var i = r.childNodes;
          if (i[o]) {
            r.removeChild(i[o]);
          }
          if (i.length) {
            r.insertBefore(a, i[o]);
          } else {
            r.appendChild(a);
          }
        }
      }
      function m(r, o, n) {
        var e = n.css;
        var c = n.media;
        var a = n.sourceMap;
        if (c) {
          r.setAttribute('media', c);
        } else {
          r.removeAttribute('media');
        }
        if (a && typeof btoa !== 'undefined') {
          e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */'
          );
        }
        if (r.styleSheet) {
          r.styleSheet.cssText = e;
        } else {
          while (r.firstChild) {
            r.removeChild(r.firstChild);
          }
          r.appendChild(document.createTextNode(e));
        }
      }
      var f = null;
      var p = 0;
      function d(r, o) {
        var n;
        var e;
        var c;
        if (o.singleton) {
          var a = p++;
          n = f || (f = l(o));
          e = A.bind(null, n, a, false);
          c = A.bind(null, n, a, true);
        } else {
          n = l(o);
          e = m.bind(null, n, o);
          c = function r() {
            s(n);
          };
        }
        e(r);
        return function o(n) {
          if (n) {
            if (n.css === r.css && n.media === r.media && n.sourceMap === r.sourceMap) {
              return;
            }
            e((r = n));
          } else {
            c();
          }
        };
      }
      r.exports = function (r, o) {
        o = o || {};
        if (!o.singleton && typeof o.singleton !== 'boolean') {
          o.singleton = e();
        }
        r = r || [];
        var n = t(r, o);
        return function r(e) {
          e = e || [];
          if (Object.prototype.toString.call(e) !== '[object Array]') {
            return;
          }
          for (var c = 0; c < n.length; c++) {
            var l = n[c];
            var s = i(l);
            a[s].references--;
          }
          var u = t(e, o);
          for (var A = 0; A < n.length; A++) {
            var m = n[A];
            var f = i(m);
            if (a[f].references === 0) {
              a[f].updater();
              a.splice(f, 1);
            }
          }
          n = u;
        };
      };
    },
  },
]);
//# sourceMappingURL=6989.75bf0da94e660a6c26f8.js.map?v=75bf0da94e660a6c26f8
