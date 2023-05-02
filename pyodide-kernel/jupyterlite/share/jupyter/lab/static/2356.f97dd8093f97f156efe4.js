(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [2356],
  {
    46392: (r, e, n) => {
      'use strict';
      n.d(e, { Z: () => i });
      var a = n(94015);
      var o = n.n(a);
      var t = n(23645);
      var c = n.n(t);
      var s = c()(o());
      s.push([
        r.id,
        '/*\n\n    Name:       Base16 Default Dark\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }\n.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }\n.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }\n.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }\n.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }\n.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }\n\n.cm-s-base16-dark span.cm-comment { color: #8f5536; }\n.cm-s-base16-dark span.cm-atom { color: #aa759f; }\n.cm-s-base16-dark span.cm-number { color: #aa759f; }\n\n.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }\n.cm-s-base16-dark span.cm-keyword { color: #ac4142; }\n.cm-s-base16-dark span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-dark span.cm-variable { color: #90a959; }\n.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-dark span.cm-def { color: #d28445; }\n.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }\n.cm-s-base16-dark span.cm-tag { color: #ac4142; }\n.cm-s-base16-dark span.cm-link { color: #aa759f; }\n.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }\n\n.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }\n.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/base16-dark.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;;CAQC;;AAED,+BAA+B,mBAAmB,EAAE,cAAc,EAAE;AACpE,4CAA4C,mBAAmB,EAAE;AACjE,mKAAmK,iCAAiC,EAAE;AACtM,kLAAkL,iCAAiC,EAAE;AACrN,wCAAwC,mBAAmB,EAAE,iBAAiB,EAAE;AAChF,6CAA6C,cAAc,EAAE;AAC7D,oDAAoD,cAAc,EAAE;AACpE,2CAA2C,cAAc,EAAE;AAC3D,uCAAuC,8BAA8B,EAAE;;AAEvE,oCAAoC,cAAc,EAAE;AACpD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;;AAEnD,0EAA0E,cAAc,EAAE;AAC1F,oCAAoC,cAAc,EAAE;AACpD,mCAAmC,cAAc,EAAE;;AAEnD,qCAAqC,cAAc,EAAE;AACrD,uCAAuC,cAAc,EAAE;AACvD,gCAAgC,cAAc,EAAE;AAChD,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,cAAc,EAAE;AAChD,iCAAiC,cAAc,EAAE;AACjD,kCAAkC,mBAAmB,EAAE,cAAc,EAAE;;AAEvE,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,0BAA0B,EAAE,uBAAuB,EAAE',
          sourcesContent: [
            '/*\n\n    Name:       Base16 Default Dark\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }\n.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }\n.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }\n.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }\n.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }\n.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }\n.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }\n\n.cm-s-base16-dark span.cm-comment { color: #8f5536; }\n.cm-s-base16-dark span.cm-atom { color: #aa759f; }\n.cm-s-base16-dark span.cm-number { color: #aa759f; }\n\n.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }\n.cm-s-base16-dark span.cm-keyword { color: #ac4142; }\n.cm-s-base16-dark span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-dark span.cm-variable { color: #90a959; }\n.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-dark span.cm-def { color: #d28445; }\n.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }\n.cm-s-base16-dark span.cm-tag { color: #ac4142; }\n.cm-s-base16-dark span.cm-link { color: #aa759f; }\n.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }\n\n.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }\n.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const i = s;
    },
    23645: (r) => {
      'use strict';
      r.exports = function (r) {
        var e = [];
        e.toString = function e() {
          return this.map(function (e) {
            var n = r(e);
            if (e[2]) {
              return '@media '.concat(e[2], ' {').concat(n, '}');
            }
            return n;
          }).join('');
        };
        e.i = function (r, n, a) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var o = {};
          if (a) {
            for (var t = 0; t < this.length; t++) {
              var c = this[t][0];
              if (c != null) {
                o[c] = true;
              }
            }
          }
          for (var s = 0; s < r.length; s++) {
            var i = [].concat(r[s]);
            if (a && o[i[0]]) {
              continue;
            }
            if (n) {
              if (!i[2]) {
                i[2] = n;
              } else {
                i[2] = ''.concat(n, ' and ').concat(i[2]);
              }
            }
            e.push(i);
          }
        };
        return e;
      };
    },
    94015: (r) => {
      'use strict';
      function e(r, e) {
        return c(r) || t(r, e) || a(r, e) || n();
      }
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function a(r, e) {
        if (!r) return;
        if (typeof r === 'string') return o(r, e);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        if (n === 'Object' && r.constructor) n = r.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(r);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return o(r, e);
      }
      function o(r, e) {
        if (e == null || e > r.length) e = r.length;
        for (var n = 0, a = new Array(e); n < e; n++) {
          a[n] = r[n];
        }
        return a;
      }
      function t(r, e) {
        var n =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (n == null) return;
        var a = [];
        var o = true;
        var t = false;
        var c, s;
        try {
          for (n = n.call(r); !(o = (c = n.next()).done); o = true) {
            a.push(c.value);
            if (e && a.length === e) break;
          }
        } catch (i) {
          t = true;
          s = i;
        } finally {
          try {
            if (!o && n['return'] != null) n['return']();
          } finally {
            if (t) throw s;
          }
        }
        return a;
      }
      function c(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(n) {
        var a = e(n, 4),
          o = a[1],
          t = a[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(t))));
          var s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var i = '/*# '.concat(s, ' */');
          var A = t.sources.map(function (r) {
            return '/*# sourceURL='.concat(t.sourceRoot || '').concat(r, ' */');
          });
          return [o].concat(A).concat([i]).join('\n');
        }
        return [o].join('\n');
      };
    },
    2356: (r, e, n) => {
      'use strict';
      n.r(e);
      n.d(e, { default: () => i });
      var a = n(93379);
      var o = n.n(a);
      var t = n(46392);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var s = o()(t.Z, c);
      const i = t.Z.locals || {};
    },
    93379: (r, e, n) => {
      'use strict';
      var a = (function r() {
        var e;
        return function r() {
          if (typeof e === 'undefined') {
            e = Boolean(window && document && document.all && !window.atob);
          }
          return e;
        };
      })();
      var o = (function r() {
        var e = {};
        return function r(n) {
          if (typeof e[n] === 'undefined') {
            var a = document.querySelector(n);
            if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement) {
              try {
                a = a.contentDocument.head;
              } catch (o) {
                a = null;
              }
            }
            e[n] = a;
          }
          return e[n];
        };
      })();
      var t = [];
      function c(r) {
        var e = -1;
        for (var n = 0; n < t.length; n++) {
          if (t[n].identifier === r) {
            e = n;
            break;
          }
        }
        return e;
      }
      function s(r, e) {
        var n = {};
        var a = [];
        for (var o = 0; o < r.length; o++) {
          var s = r[o];
          var i = e.base ? s[0] + e.base : s[0];
          var A = n[i] || 0;
          var d = ''.concat(i, ' ').concat(A);
          n[i] = A + 1;
          var l = c(d);
          var m = { css: s[1], media: s[2], sourceMap: s[3] };
          if (l !== -1) {
            t[l].references++;
            t[l].updater(m);
          } else {
            t.push({ identifier: d, updater: f(m, e), references: 1 });
          }
          a.push(d);
        }
        return a;
      }
      function i(r) {
        var e = document.createElement('style');
        var a = r.attributes || {};
        if (typeof a.nonce === 'undefined') {
          var t = true ? n.nc : 0;
          if (t) {
            a.nonce = t;
          }
        }
        Object.keys(a).forEach(function (r) {
          e.setAttribute(r, a[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(e);
        } else {
          var c = o(r.insert || 'head');
          if (!c) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          c.appendChild(e);
        }
        return e;
      }
      function A(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var d = (function r() {
        var e = [];
        return function r(n, a) {
          e[n] = a;
          return e.filter(Boolean).join('\n');
        };
      })();
      function l(r, e, n, a) {
        var o = n
          ? ''
          : a.media
          ? '@media '.concat(a.media, ' {').concat(a.css, '}')
          : a.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = d(e, o);
        } else {
          var t = document.createTextNode(o);
          var c = r.childNodes;
          if (c[e]) {
            r.removeChild(c[e]);
          }
          if (c.length) {
            r.insertBefore(t, c[e]);
          } else {
            r.appendChild(t);
          }
        }
      }
      function m(r, e, n) {
        var a = n.css;
        var o = n.media;
        var t = n.sourceMap;
        if (o) {
          r.setAttribute('media', o);
        } else {
          r.removeAttribute('media');
        }
        if (t && typeof btoa !== 'undefined') {
          a += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
            ' */'
          );
        }
        if (r.styleSheet) {
          r.styleSheet.cssText = a;
        } else {
          while (r.firstChild) {
            r.removeChild(r.firstChild);
          }
          r.appendChild(document.createTextNode(a));
        }
      }
      var u = null;
      var b = 0;
      function f(r, e) {
        var n;
        var a;
        var o;
        if (e.singleton) {
          var t = b++;
          n = u || (u = i(e));
          a = l.bind(null, n, t, false);
          o = l.bind(null, n, t, true);
        } else {
          n = i(e);
          a = m.bind(null, n, e);
          o = function r() {
            A(n);
          };
        }
        a(r);
        return function e(n) {
          if (n) {
            if (n.css === r.css && n.media === r.media && n.sourceMap === r.sourceMap) {
              return;
            }
            a((r = n));
          } else {
            o();
          }
        };
      }
      r.exports = function (r, e) {
        e = e || {};
        if (!e.singleton && typeof e.singleton !== 'boolean') {
          e.singleton = a();
        }
        r = r || [];
        var n = s(r, e);
        return function r(a) {
          a = a || [];
          if (Object.prototype.toString.call(a) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < n.length; o++) {
            var i = n[o];
            var A = c(i);
            t[A].references--;
          }
          var d = s(a, e);
          for (var l = 0; l < n.length; l++) {
            var m = n[l];
            var u = c(m);
            if (t[u].references === 0) {
              t[u].updater();
              t.splice(u, 1);
            }
          }
          n = d;
        };
      };
    },
  },
]);
//# sourceMappingURL=2356.f97dd8093f97f156efe4.js.map?v=f97dd8093f97f156efe4
