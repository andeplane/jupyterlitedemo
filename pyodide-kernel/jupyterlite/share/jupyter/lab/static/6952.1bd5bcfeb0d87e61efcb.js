(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6952],
  {
    36439: (r, a, n) => {
      'use strict';
      n.d(a, { Z: () => s });
      var e = n(94015);
      var c = n.n(e);
      var o = n(23645);
      var t = n.n(o);
      var i = t()(c());
      i.push([
        r.id,
        '/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/dracula.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA,oCAAoC,cAAc,EAAE;AACpD,mCAAmC,+BAA+B,EAAE;AACpE,uCAAuC,cAAc,EAAE;AACvD,qCAAqC,qCAAqC,EAAE;AAC5E,uJAAuJ,qCAAqC,EAAE;AAC9L,sKAAsK,qCAAqC,EAAE;AAC7M,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;AAC/E,+BAA+B,cAAc,EAAE;AAC/C,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,YAAY,EAAE;AACjD,4BAA4B,cAAc,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,kCAAkC,cAAc,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;;AAE/E,kDAAkD,iCAAiC,EAAE;AACrF,4CAA4C,0BAA0B,EAAE,uBAAuB,EAAE',
          sourcesContent: [
            '/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const s = i;
    },
    23645: (r) => {
      'use strict';
      r.exports = function (r) {
        var a = [];
        a.toString = function a() {
          return this.map(function (a) {
            var n = r(a);
            if (a[2]) {
              return '@media '.concat(a[2], ' {').concat(n, '}');
            }
            return n;
          }).join('');
        };
        a.i = function (r, n, e) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var c = {};
          if (e) {
            for (var o = 0; o < this.length; o++) {
              var t = this[o][0];
              if (t != null) {
                c[t] = true;
              }
            }
          }
          for (var i = 0; i < r.length; i++) {
            var s = [].concat(r[i]);
            if (e && c[s[0]]) {
              continue;
            }
            if (n) {
              if (!s[2]) {
                s[2] = n;
              } else {
                s[2] = ''.concat(n, ' and ').concat(s[2]);
              }
            }
            a.push(s);
          }
        };
        return a;
      };
    },
    94015: (r) => {
      'use strict';
      function a(r, a) {
        return t(r) || o(r, a) || e(r, a) || n();
      }
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function e(r, a) {
        if (!r) return;
        if (typeof r === 'string') return c(r, a);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        if (n === 'Object' && r.constructor) n = r.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(r);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return c(r, a);
      }
      function c(r, a) {
        if (a == null || a > r.length) a = r.length;
        for (var n = 0, e = new Array(a); n < a; n++) {
          e[n] = r[n];
        }
        return e;
      }
      function o(r, a) {
        var n =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (n == null) return;
        var e = [];
        var c = true;
        var o = false;
        var t, i;
        try {
          for (n = n.call(r); !(c = (t = n.next()).done); c = true) {
            e.push(t.value);
            if (a && e.length === a) break;
          }
        } catch (s) {
          o = true;
          i = s;
        } finally {
          try {
            if (!c && n['return'] != null) n['return']();
          } finally {
            if (o) throw i;
          }
        }
        return e;
      }
      function t(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(n) {
        var e = a(n, 4),
          c = e[1],
          o = e[3];
        if (typeof btoa === 'function') {
          var t = btoa(unescape(encodeURIComponent(JSON.stringify(o))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            t
          );
          var s = '/*# '.concat(i, ' */');
          var l = o.sources.map(function (r) {
            return '/*# sourceURL='.concat(o.sourceRoot || '').concat(r, ' */');
          });
          return [c].concat(l).concat([s]).join('\n');
        }
        return [c].join('\n');
      };
    },
    26952: (r, a, n) => {
      'use strict';
      n.r(a);
      n.d(a, { default: () => s });
      var e = n(93379);
      var c = n.n(e);
      var o = n(36439);
      var t = {};
      t.insert = 'head';
      t.singleton = false;
      var i = c()(o.Z, t);
      const s = o.Z.locals || {};
    },
    93379: (r, a, n) => {
      'use strict';
      var e = (function r() {
        var a;
        return function r() {
          if (typeof a === 'undefined') {
            a = Boolean(window && document && document.all && !window.atob);
          }
          return a;
        };
      })();
      var c = (function r() {
        var a = {};
        return function r(n) {
          if (typeof a[n] === 'undefined') {
            var e = document.querySelector(n);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
              try {
                e = e.contentDocument.head;
              } catch (c) {
                e = null;
              }
            }
            a[n] = e;
          }
          return a[n];
        };
      })();
      var o = [];
      function t(r) {
        var a = -1;
        for (var n = 0; n < o.length; n++) {
          if (o[n].identifier === r) {
            a = n;
            break;
          }
        }
        return a;
      }
      function i(r, a) {
        var n = {};
        var e = [];
        for (var c = 0; c < r.length; c++) {
          var i = r[c];
          var s = a.base ? i[0] + a.base : i[0];
          var l = n[s] || 0;
          var u = ''.concat(s, ' ').concat(l);
          n[s] = l + 1;
          var A = t(u);
          var d = { css: i[1], media: i[2], sourceMap: i[3] };
          if (A !== -1) {
            o[A].references++;
            o[A].updater(d);
          } else {
            o.push({ identifier: u, updater: p(d, a), references: 1 });
          }
          e.push(u);
        }
        return e;
      }
      function s(r) {
        var a = document.createElement('style');
        var e = r.attributes || {};
        if (typeof e.nonce === 'undefined') {
          var o = true ? n.nc : 0;
          if (o) {
            e.nonce = o;
          }
        }
        Object.keys(e).forEach(function (r) {
          a.setAttribute(r, e[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(a);
        } else {
          var t = c(r.insert || 'head');
          if (!t) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          t.appendChild(a);
        }
        return a;
      }
      function l(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var u = (function r() {
        var a = [];
        return function r(n, e) {
          a[n] = e;
          return a.filter(Boolean).join('\n');
        };
      })();
      function A(r, a, n, e) {
        var c = n
          ? ''
          : e.media
          ? '@media '.concat(e.media, ' {').concat(e.css, '}')
          : e.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = u(a, c);
        } else {
          var o = document.createTextNode(c);
          var t = r.childNodes;
          if (t[a]) {
            r.removeChild(t[a]);
          }
          if (t.length) {
            r.insertBefore(o, t[a]);
          } else {
            r.appendChild(o);
          }
        }
      }
      function d(r, a, n) {
        var e = n.css;
        var c = n.media;
        var o = n.sourceMap;
        if (c) {
          r.setAttribute('media', c);
        } else {
          r.removeAttribute('media');
        }
        if (o && typeof btoa !== 'undefined') {
          e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
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
      var m = null;
      var f = 0;
      function p(r, a) {
        var n;
        var e;
        var c;
        if (a.singleton) {
          var o = f++;
          n = m || (m = s(a));
          e = A.bind(null, n, o, false);
          c = A.bind(null, n, o, true);
        } else {
          n = s(a);
          e = d.bind(null, n, a);
          c = function r() {
            l(n);
          };
        }
        e(r);
        return function a(n) {
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
      r.exports = function (r, a) {
        a = a || {};
        if (!a.singleton && typeof a.singleton !== 'boolean') {
          a.singleton = e();
        }
        r = r || [];
        var n = i(r, a);
        return function r(e) {
          e = e || [];
          if (Object.prototype.toString.call(e) !== '[object Array]') {
            return;
          }
          for (var c = 0; c < n.length; c++) {
            var s = n[c];
            var l = t(s);
            o[l].references--;
          }
          var u = i(e, a);
          for (var A = 0; A < n.length; A++) {
            var d = n[A];
            var m = t(d);
            if (o[m].references === 0) {
              o[m].updater();
              o.splice(m, 1);
            }
          }
          n = u;
        };
      };
    },
  },
]);
//# sourceMappingURL=6952.1bd5bcfeb0d87e61efcb.js.map?v=1bd5bcfeb0d87e61efcb
