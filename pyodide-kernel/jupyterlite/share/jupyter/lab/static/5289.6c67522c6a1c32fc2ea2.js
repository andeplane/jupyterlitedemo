(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [5289],
  {
    61906: (e, r, o) => {
      'use strict';
      o.d(r, { Z: () => s });
      var n = o(94015);
      var t = o.n(n);
      var c = o(23645);
      var i = o.n(c);
      var a = i()(t());
      a.push([
        e.id,
        '/*\n\n    Name:       Isotope\n    Author:     David Desandro / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-isotope.CodeMirror {background: #000000; color: #e0e0e0;}\n.cm-s-isotope div.CodeMirror-selected {background: #404040 !important;}\n.cm-s-isotope .CodeMirror-gutters {background: #000000; border-right: 0px;}\n.cm-s-isotope .CodeMirror-linenumber {color: #808080;}\n.cm-s-isotope .CodeMirror-cursor {border-left: 1px solid #c0c0c0 !important;}\n\n.cm-s-isotope span.cm-comment {color: #3300ff;}\n.cm-s-isotope span.cm-atom {color: #cc00ff;}\n.cm-s-isotope span.cm-number {color: #cc00ff;}\n\n.cm-s-isotope span.cm-property, .cm-s-isotope span.cm-attribute {color: #33ff00;}\n.cm-s-isotope span.cm-keyword {color: #ff0000;}\n.cm-s-isotope span.cm-string {color: #ff0099;}\n\n.cm-s-isotope span.cm-variable {color: #33ff00;}\n.cm-s-isotope span.cm-variable-2 {color: #0066ff;}\n.cm-s-isotope span.cm-def {color: #ff9900;}\n.cm-s-isotope span.cm-error {background: #ff0000; color: #c0c0c0;}\n.cm-s-isotope span.cm-bracket {color: #e0e0e0;}\n.cm-s-isotope span.cm-tag {color: #ff0000;}\n.cm-s-isotope span.cm-link {color: #cc00ff;}\n\n.cm-s-isotope .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-isotope .CodeMirror-activeline-background { background: #202020; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/isotope.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;;CAQC;;AAED,0BAA0B,mBAAmB,EAAE,cAAc,CAAC;AAC9D,uCAAuC,8BAA8B,CAAC;AACtE,mCAAmC,mBAAmB,EAAE,iBAAiB,CAAC;AAC1E,sCAAsC,cAAc,CAAC;AACrD,kCAAkC,yCAAyC,CAAC;;AAE5E,+BAA+B,cAAc,CAAC;AAC9C,4BAA4B,cAAc,CAAC;AAC3C,8BAA8B,cAAc,CAAC;;AAE7C,iEAAiE,cAAc,CAAC;AAChF,+BAA+B,cAAc,CAAC;AAC9C,8BAA8B,cAAc,CAAC;;AAE7C,gCAAgC,cAAc,CAAC;AAC/C,kCAAkC,cAAc,CAAC;AACjD,2BAA2B,cAAc,CAAC;AAC1C,6BAA6B,mBAAmB,EAAE,cAAc,CAAC;AACjE,+BAA+B,cAAc,CAAC;AAC9C,2BAA2B,cAAc,CAAC;AAC1C,4BAA4B,cAAc,CAAC;;AAE3C,4CAA4C,0BAA0B,EAAE,uBAAuB,CAAC;AAChG,kDAAkD,mBAAmB,EAAE',
          sourcesContent: [
            '/*\n\n    Name:       Isotope\n    Author:     David Desandro / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-isotope.CodeMirror {background: #000000; color: #e0e0e0;}\n.cm-s-isotope div.CodeMirror-selected {background: #404040 !important;}\n.cm-s-isotope .CodeMirror-gutters {background: #000000; border-right: 0px;}\n.cm-s-isotope .CodeMirror-linenumber {color: #808080;}\n.cm-s-isotope .CodeMirror-cursor {border-left: 1px solid #c0c0c0 !important;}\n\n.cm-s-isotope span.cm-comment {color: #3300ff;}\n.cm-s-isotope span.cm-atom {color: #cc00ff;}\n.cm-s-isotope span.cm-number {color: #cc00ff;}\n\n.cm-s-isotope span.cm-property, .cm-s-isotope span.cm-attribute {color: #33ff00;}\n.cm-s-isotope span.cm-keyword {color: #ff0000;}\n.cm-s-isotope span.cm-string {color: #ff0099;}\n\n.cm-s-isotope span.cm-variable {color: #33ff00;}\n.cm-s-isotope span.cm-variable-2 {color: #0066ff;}\n.cm-s-isotope span.cm-def {color: #ff9900;}\n.cm-s-isotope span.cm-error {background: #ff0000; color: #c0c0c0;}\n.cm-s-isotope span.cm-bracket {color: #e0e0e0;}\n.cm-s-isotope span.cm-tag {color: #ff0000;}\n.cm-s-isotope span.cm-link {color: #cc00ff;}\n\n.cm-s-isotope .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-isotope .CodeMirror-activeline-background { background: #202020; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const s = a;
    },
    23645: (e) => {
      'use strict';
      e.exports = function (e) {
        var r = [];
        r.toString = function r() {
          return this.map(function (r) {
            var o = e(r);
            if (r[2]) {
              return '@media '.concat(r[2], ' {').concat(o, '}');
            }
            return o;
          }).join('');
        };
        r.i = function (e, o, n) {
          if (typeof e === 'string') {
            e = [[null, e, '']];
          }
          var t = {};
          if (n) {
            for (var c = 0; c < this.length; c++) {
              var i = this[c][0];
              if (i != null) {
                t[i] = true;
              }
            }
          }
          for (var a = 0; a < e.length; a++) {
            var s = [].concat(e[a]);
            if (n && t[s[0]]) {
              continue;
            }
            if (o) {
              if (!s[2]) {
                s[2] = o;
              } else {
                s[2] = ''.concat(o, ' and ').concat(s[2]);
              }
            }
            r.push(s);
          }
        };
        return r;
      };
    },
    94015: (e) => {
      'use strict';
      function r(e, r) {
        return i(e) || c(e, r) || n(e, r) || o();
      }
      function o() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function n(e, r) {
        if (!e) return;
        if (typeof e === 'string') return t(e, r);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        if (o === 'Object' && e.constructor) o = e.constructor.name;
        if (o === 'Map' || o === 'Set') return Array.from(e);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return t(e, r);
      }
      function t(e, r) {
        if (r == null || r > e.length) r = e.length;
        for (var o = 0, n = new Array(r); o < r; o++) {
          n[o] = e[o];
        }
        return n;
      }
      function c(e, r) {
        var o =
          e &&
          ((typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator']);
        if (o == null) return;
        var n = [];
        var t = true;
        var c = false;
        var i, a;
        try {
          for (o = o.call(e); !(t = (i = o.next()).done); t = true) {
            n.push(i.value);
            if (r && n.length === r) break;
          }
        } catch (s) {
          c = true;
          a = s;
        } finally {
          try {
            if (!t && o['return'] != null) o['return']();
          } finally {
            if (c) throw a;
          }
        }
        return n;
      }
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      e.exports = function e(o) {
        var n = r(o, 4),
          t = n[1],
          c = n[3];
        if (typeof btoa === 'function') {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(c))));
          var a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            i
          );
          var s = '/*# '.concat(a, ' */');
          var A = c.sources.map(function (e) {
            return '/*# sourceURL='.concat(c.sourceRoot || '').concat(e, ' */');
          });
          return [t].concat(A).concat([s]).join('\n');
        }
        return [t].join('\n');
      };
    },
    35289: (e, r, o) => {
      'use strict';
      o.r(r);
      o.d(r, { default: () => s });
      var n = o(93379);
      var t = o.n(n);
      var c = o(61906);
      var i = {};
      i.insert = 'head';
      i.singleton = false;
      var a = t()(c.Z, i);
      const s = c.Z.locals || {};
    },
    93379: (e, r, o) => {
      'use strict';
      var n = (function e() {
        var r;
        return function e() {
          if (typeof r === 'undefined') {
            r = Boolean(window && document && document.all && !window.atob);
          }
          return r;
        };
      })();
      var t = (function e() {
        var r = {};
        return function e(o) {
          if (typeof r[o] === 'undefined') {
            var n = document.querySelector(o);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) {
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            }
            r[o] = n;
          }
          return r[o];
        };
      })();
      var c = [];
      function i(e) {
        var r = -1;
        for (var o = 0; o < c.length; o++) {
          if (c[o].identifier === e) {
            r = o;
            break;
          }
        }
        return r;
      }
      function a(e, r) {
        var o = {};
        var n = [];
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          var s = r.base ? a[0] + r.base : a[0];
          var A = o[s] || 0;
          var u = ''.concat(s, ' ').concat(A);
          o[s] = A + 1;
          var f = i(u);
          var l = { css: a[1], media: a[2], sourceMap: a[3] };
          if (f !== -1) {
            c[f].references++;
            c[f].updater(l);
          } else {
            c.push({ identifier: u, updater: d(l, r), references: 1 });
          }
          n.push(u);
        }
        return n;
      }
      function s(e) {
        var r = document.createElement('style');
        var n = e.attributes || {};
        if (typeof n.nonce === 'undefined') {
          var c = true ? o.nc : 0;
          if (c) {
            n.nonce = c;
          }
        }
        Object.keys(n).forEach(function (e) {
          r.setAttribute(e, n[e]);
        });
        if (typeof e.insert === 'function') {
          e.insert(r);
        } else {
          var i = t(e.insert || 'head');
          if (!i) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          i.appendChild(r);
        }
        return r;
      }
      function A(e) {
        if (e.parentNode === null) {
          return false;
        }
        e.parentNode.removeChild(e);
      }
      var u = (function e() {
        var r = [];
        return function e(o, n) {
          r[o] = n;
          return r.filter(Boolean).join('\n');
        };
      })();
      function f(e, r, o, n) {
        var t = o
          ? ''
          : n.media
          ? '@media '.concat(n.media, ' {').concat(n.css, '}')
          : n.css;
        if (e.styleSheet) {
          e.styleSheet.cssText = u(r, t);
        } else {
          var c = document.createTextNode(t);
          var i = e.childNodes;
          if (i[r]) {
            e.removeChild(i[r]);
          }
          if (i.length) {
            e.insertBefore(c, i[r]);
          } else {
            e.appendChild(c);
          }
        }
      }
      function l(e, r, o) {
        var n = o.css;
        var t = o.media;
        var c = o.sourceMap;
        if (t) {
          e.setAttribute('media', t);
        } else {
          e.removeAttribute('media');
        }
        if (c && typeof btoa !== 'undefined') {
          n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
            ' */'
          );
        }
        if (e.styleSheet) {
          e.styleSheet.cssText = n;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(n));
        }
      }
      var p = null;
      var m = 0;
      function d(e, r) {
        var o;
        var n;
        var t;
        if (r.singleton) {
          var c = m++;
          o = p || (p = s(r));
          n = f.bind(null, o, c, false);
          t = f.bind(null, o, c, true);
        } else {
          o = s(r);
          n = l.bind(null, o, r);
          t = function e() {
            A(o);
          };
        }
        n(e);
        return function r(o) {
          if (o) {
            if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) {
              return;
            }
            n((e = o));
          } else {
            t();
          }
        };
      }
      e.exports = function (e, r) {
        r = r || {};
        if (!r.singleton && typeof r.singleton !== 'boolean') {
          r.singleton = n();
        }
        e = e || [];
        var o = a(e, r);
        return function e(n) {
          n = n || [];
          if (Object.prototype.toString.call(n) !== '[object Array]') {
            return;
          }
          for (var t = 0; t < o.length; t++) {
            var s = o[t];
            var A = i(s);
            c[A].references--;
          }
          var u = a(n, r);
          for (var f = 0; f < o.length; f++) {
            var l = o[f];
            var p = i(l);
            if (c[p].references === 0) {
              c[p].updater();
              c.splice(p, 1);
            }
          }
          o = u;
        };
      };
    },
  },
]);
//# sourceMappingURL=5289.6c67522c6a1c32fc2ea2.js.map?v=6c67522c6a1c32fc2ea2
