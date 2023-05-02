(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [5383],
  {
    99932: (t, n, e) => {
      'use strict';
      e.d(n, { Z: () => s });
      var o = e(94015);
      var r = e.n(o);
      var c = e(23645);
      var a = e.n(c);
      var i = a()(r());
      i.push([
        t.id,
        "/*\nName:   DuoTone-Light\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-light.CodeMirror { background: #faf8f5; color: #b29762; }\n.cm-s-duotone-light div.CodeMirror-selected { background: #e3dcce !important; }\n.cm-s-duotone-light .CodeMirror-gutters { background: #faf8f5; border-right: 0px; }\n.cm-s-duotone-light .CodeMirror-linenumber { color: #cdc4b1; }\n\n/* begin cursor */\n.cm-s-duotone-light .CodeMirror-cursor { border-left: 1px solid #93abdc; /* border-left: 1px solid #93abdc80; */ border-right: .5em solid #93abdc; /* border-right: .5em solid #93abdc80; */ opacity: .5; }\n.cm-s-duotone-light .CodeMirror-activeline-background { background: #e3dcce;  /* background: #e3dcce80; */ opacity: .5; }\n.cm-s-duotone-light .cm-fat-cursor .CodeMirror-cursor { background: #93abdc; /* #93abdc80; */ opacity: .5; }\n/* end cursor */\n\n.cm-s-duotone-light span.cm-atom, .cm-s-duotone-light span.cm-number, .cm-s-duotone-light span.cm-keyword, .cm-s-duotone-light span.cm-variable, .cm-s-duotone-light span.cm-attribute, .cm-s-duotone-light span.cm-quote, .cm-s-duotone-light-light span.cm-hr, .cm-s-duotone-light-light span.cm-link { color: #063289; }\n\n.cm-s-duotone-light span.cm-property { color: #b29762; }\n.cm-s-duotone-light span.cm-punctuation, .cm-s-duotone-light span.cm-unit, .cm-s-duotone-light span.cm-negative { color: #063289; }\n.cm-s-duotone-light span.cm-string, .cm-s-duotone-light span.cm-operator { color: #1659df; }\n.cm-s-duotone-light span.cm-positive { color: #896724; }\n\n.cm-s-duotone-light span.cm-variable-2, .cm-s-duotone-light span.cm-variable-3, .cm-s-duotone-light span.cm-type, .cm-s-duotone-light span.cm-string-2, .cm-s-duotone-light span.cm-url { color: #896724; }\n.cm-s-duotone-light span.cm-def, .cm-s-duotone-light span.cm-tag, .cm-s-duotone-light span.cm-builtin, .cm-s-duotone-light span.cm-qualifier, .cm-s-duotone-light span.cm-header, .cm-s-duotone-light span.cm-em { color: #2d2006; }\n.cm-s-duotone-light span.cm-bracket, .cm-s-duotone-light span.cm-comment { color: #b6ad9a; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n/* .cm-s-duotone-light span.cm-error { background: #896724; color: #728fcb; } */\n.cm-s-duotone-light span.cm-error, .cm-s-duotone-light span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-light span.cm-header { font-weight: normal; }\n.cm-s-duotone-light .CodeMirror-matchingbracket { text-decoration: underline; color: #faf8f5 !important; }\n\n",
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/duotone-light.css'],
          names: [],
          mappings:
            'AAAA;;;;;CAKC;;AAED,iCAAiC,mBAAmB,EAAE,cAAc,EAAE;AACtE,8CAA8C,8BAA8B,EAAE;AAC9E,0CAA0C,mBAAmB,EAAE,iBAAiB,EAAE;AAClF,6CAA6C,cAAc,EAAE;;AAE7D,iBAAiB;AACjB,yCAAyC,8BAA8B,EAAE,sCAAsC,EAAE,gCAAgC,EAAE,wCAAwC,EAAE,WAAW,EAAE;AAC1M,wDAAwD,mBAAmB,GAAG,2BAA2B,EAAE,WAAW,EAAE;AACxH,wDAAwD,mBAAmB,EAAE,eAAe,EAAE,WAAW,EAAE;AAC3G,eAAe;;AAEf,0SAA0S,cAAc,EAAE;;AAE1T,uCAAuC,cAAc,EAAE;AACvD,kHAAkH,cAAc,EAAE;AAClI,2EAA2E,cAAc,EAAE;AAC3F,uCAAuC,cAAc,EAAE;;AAEvD,0LAA0L,cAAc,EAAE;AAC1M,mNAAmN,cAAc,EAAE;AACnO,2EAA2E,cAAc,EAAE;;AAE3F,iJAAiJ;AACjJ,+EAA+E;AAC/E,6EAA6E,WAAW,EAAE;;AAE1F,qCAAqC,mBAAmB,EAAE;AAC1D,kDAAkD,0BAA0B,EAAE,yBAAyB,EAAE',
          sourcesContent: [
            "/*\nName:   DuoTone-Light\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-light.CodeMirror { background: #faf8f5; color: #b29762; }\n.cm-s-duotone-light div.CodeMirror-selected { background: #e3dcce !important; }\n.cm-s-duotone-light .CodeMirror-gutters { background: #faf8f5; border-right: 0px; }\n.cm-s-duotone-light .CodeMirror-linenumber { color: #cdc4b1; }\n\n/* begin cursor */\n.cm-s-duotone-light .CodeMirror-cursor { border-left: 1px solid #93abdc; /* border-left: 1px solid #93abdc80; */ border-right: .5em solid #93abdc; /* border-right: .5em solid #93abdc80; */ opacity: .5; }\n.cm-s-duotone-light .CodeMirror-activeline-background { background: #e3dcce;  /* background: #e3dcce80; */ opacity: .5; }\n.cm-s-duotone-light .cm-fat-cursor .CodeMirror-cursor { background: #93abdc; /* #93abdc80; */ opacity: .5; }\n/* end cursor */\n\n.cm-s-duotone-light span.cm-atom, .cm-s-duotone-light span.cm-number, .cm-s-duotone-light span.cm-keyword, .cm-s-duotone-light span.cm-variable, .cm-s-duotone-light span.cm-attribute, .cm-s-duotone-light span.cm-quote, .cm-s-duotone-light-light span.cm-hr, .cm-s-duotone-light-light span.cm-link { color: #063289; }\n\n.cm-s-duotone-light span.cm-property { color: #b29762; }\n.cm-s-duotone-light span.cm-punctuation, .cm-s-duotone-light span.cm-unit, .cm-s-duotone-light span.cm-negative { color: #063289; }\n.cm-s-duotone-light span.cm-string, .cm-s-duotone-light span.cm-operator { color: #1659df; }\n.cm-s-duotone-light span.cm-positive { color: #896724; }\n\n.cm-s-duotone-light span.cm-variable-2, .cm-s-duotone-light span.cm-variable-3, .cm-s-duotone-light span.cm-type, .cm-s-duotone-light span.cm-string-2, .cm-s-duotone-light span.cm-url { color: #896724; }\n.cm-s-duotone-light span.cm-def, .cm-s-duotone-light span.cm-tag, .cm-s-duotone-light span.cm-builtin, .cm-s-duotone-light span.cm-qualifier, .cm-s-duotone-light span.cm-header, .cm-s-duotone-light span.cm-em { color: #2d2006; }\n.cm-s-duotone-light span.cm-bracket, .cm-s-duotone-light span.cm-comment { color: #b6ad9a; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n/* .cm-s-duotone-light span.cm-error { background: #896724; color: #728fcb; } */\n.cm-s-duotone-light span.cm-error, .cm-s-duotone-light span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-light span.cm-header { font-weight: normal; }\n.cm-s-duotone-light .CodeMirror-matchingbracket { text-decoration: underline; color: #faf8f5 !important; }\n\n",
          ],
          sourceRoot: '',
        },
      ]);
      const s = i;
    },
    23645: (t) => {
      'use strict';
      t.exports = function (t) {
        var n = [];
        n.toString = function n() {
          return this.map(function (n) {
            var e = t(n);
            if (n[2]) {
              return '@media '.concat(n[2], ' {').concat(e, '}');
            }
            return e;
          }).join('');
        };
        n.i = function (t, e, o) {
          if (typeof t === 'string') {
            t = [[null, t, '']];
          }
          var r = {};
          if (o) {
            for (var c = 0; c < this.length; c++) {
              var a = this[c][0];
              if (a != null) {
                r[a] = true;
              }
            }
          }
          for (var i = 0; i < t.length; i++) {
            var s = [].concat(t[i]);
            if (o && r[s[0]]) {
              continue;
            }
            if (e) {
              if (!s[2]) {
                s[2] = e;
              } else {
                s[2] = ''.concat(e, ' and ').concat(s[2]);
              }
            }
            n.push(s);
          }
        };
        return n;
      };
    },
    94015: (t) => {
      'use strict';
      function n(t, n) {
        return a(t) || c(t, n) || o(t, n) || e();
      }
      function e() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function o(t, n) {
        if (!t) return;
        if (typeof t === 'string') return r(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === 'Object' && t.constructor) e = t.constructor.name;
        if (e === 'Map' || e === 'Set') return Array.from(t);
        if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return r(t, n);
      }
      function r(t, n) {
        if (n == null || n > t.length) n = t.length;
        for (var e = 0, o = new Array(n); e < n; e++) {
          o[e] = t[e];
        }
        return o;
      }
      function c(t, n) {
        var e =
          t &&
          ((typeof Symbol !== 'undefined' && t[Symbol.iterator]) || t['@@iterator']);
        if (e == null) return;
        var o = [];
        var r = true;
        var c = false;
        var a, i;
        try {
          for (e = e.call(t); !(r = (a = e.next()).done); r = true) {
            o.push(a.value);
            if (n && o.length === n) break;
          }
        } catch (s) {
          c = true;
          i = s;
        } finally {
          try {
            if (!r && e['return'] != null) e['return']();
          } finally {
            if (c) throw i;
          }
        }
        return o;
      }
      function a(t) {
        if (Array.isArray(t)) return t;
      }
      t.exports = function t(e) {
        var o = n(e, 4),
          r = o[1],
          c = o[3];
        if (typeof btoa === 'function') {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(c))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            a
          );
          var s = '/*# '.concat(i, ' */');
          var u = c.sources.map(function (t) {
            return '/*# sourceURL='.concat(c.sourceRoot || '').concat(t, ' */');
          });
          return [r].concat(u).concat([s]).join('\n');
        }
        return [r].join('\n');
      };
    },
    5383: (t, n, e) => {
      'use strict';
      e.r(n);
      e.d(n, { default: () => s });
      var o = e(93379);
      var r = e.n(o);
      var c = e(99932);
      var a = {};
      a.insert = 'head';
      a.singleton = false;
      var i = r()(c.Z, a);
      const s = c.Z.locals || {};
    },
    93379: (t, n, e) => {
      'use strict';
      var o = (function t() {
        var n;
        return function t() {
          if (typeof n === 'undefined') {
            n = Boolean(window && document && document.all && !window.atob);
          }
          return n;
        };
      })();
      var r = (function t() {
        var n = {};
        return function t(e) {
          if (typeof n[e] === 'undefined') {
            var o = document.querySelector(e);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) {
              try {
                o = o.contentDocument.head;
              } catch (r) {
                o = null;
              }
            }
            n[e] = o;
          }
          return n[e];
        };
      })();
      var c = [];
      function a(t) {
        var n = -1;
        for (var e = 0; e < c.length; e++) {
          if (c[e].identifier === t) {
            n = e;
            break;
          }
        }
        return n;
      }
      function i(t, n) {
        var e = {};
        var o = [];
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          var s = n.base ? i[0] + n.base : i[0];
          var u = e[s] || 0;
          var d = ''.concat(s, ' ').concat(u);
          e[s] = u + 1;
          var l = a(d);
          var m = { css: i[1], media: i[2], sourceMap: i[3] };
          if (l !== -1) {
            c[l].references++;
            c[l].updater(m);
          } else {
            c.push({ identifier: d, updater: p(m, n), references: 1 });
          }
          o.push(d);
        }
        return o;
      }
      function s(t) {
        var n = document.createElement('style');
        var o = t.attributes || {};
        if (typeof o.nonce === 'undefined') {
          var c = true ? e.nc : 0;
          if (c) {
            o.nonce = c;
          }
        }
        Object.keys(o).forEach(function (t) {
          n.setAttribute(t, o[t]);
        });
        if (typeof t.insert === 'function') {
          t.insert(n);
        } else {
          var a = r(t.insert || 'head');
          if (!a) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          a.appendChild(n);
        }
        return n;
      }
      function u(t) {
        if (t.parentNode === null) {
          return false;
        }
        t.parentNode.removeChild(t);
      }
      var d = (function t() {
        var n = [];
        return function t(e, o) {
          n[e] = o;
          return n.filter(Boolean).join('\n');
        };
      })();
      function l(t, n, e, o) {
        var r = e
          ? ''
          : o.media
          ? '@media '.concat(o.media, ' {').concat(o.css, '}')
          : o.css;
        if (t.styleSheet) {
          t.styleSheet.cssText = d(n, r);
        } else {
          var c = document.createTextNode(r);
          var a = t.childNodes;
          if (a[n]) {
            t.removeChild(a[n]);
          }
          if (a.length) {
            t.insertBefore(c, a[n]);
          } else {
            t.appendChild(c);
          }
        }
      }
      function m(t, n, e) {
        var o = e.css;
        var r = e.media;
        var c = e.sourceMap;
        if (r) {
          t.setAttribute('media', r);
        } else {
          t.removeAttribute('media');
        }
        if (c && typeof btoa !== 'undefined') {
          o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
            ' */'
          );
        }
        if (t.styleSheet) {
          t.styleSheet.cssText = o;
        } else {
          while (t.firstChild) {
            t.removeChild(t.firstChild);
          }
          t.appendChild(document.createTextNode(o));
        }
      }
      var A = null;
      var h = 0;
      function p(t, n) {
        var e;
        var o;
        var r;
        if (n.singleton) {
          var c = h++;
          e = A || (A = s(n));
          o = l.bind(null, e, c, false);
          r = l.bind(null, e, c, true);
        } else {
          e = s(n);
          o = m.bind(null, e, n);
          r = function t() {
            u(e);
          };
        }
        o(t);
        return function n(e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) {
              return;
            }
            o((t = e));
          } else {
            r();
          }
        };
      }
      t.exports = function (t, n) {
        n = n || {};
        if (!n.singleton && typeof n.singleton !== 'boolean') {
          n.singleton = o();
        }
        t = t || [];
        var e = i(t, n);
        return function t(o) {
          o = o || [];
          if (Object.prototype.toString.call(o) !== '[object Array]') {
            return;
          }
          for (var r = 0; r < e.length; r++) {
            var s = e[r];
            var u = a(s);
            c[u].references--;
          }
          var d = i(o, n);
          for (var l = 0; l < e.length; l++) {
            var m = e[l];
            var A = a(m);
            if (c[A].references === 0) {
              c[A].updater();
              c.splice(A, 1);
            }
          }
          e = d;
        };
      };
    },
  },
]);
//# sourceMappingURL=5383.d630abf49f5cb82bb76f.js.map?v=d630abf49f5cb82bb76f
