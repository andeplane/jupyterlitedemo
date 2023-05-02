(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6550],
  {
    23448: (r, e, n) => {
      'use strict';
      n.d(e, { Z: () => A });
      var s = n(94015);
      var o = n.n(s);
      var a = n(23645);
      var c = n.n(a);
      var t = c()(o());
      t.push([
        r.id,
        '/*\nhttp://lesscss.org/ dark theme\nPorted to CodeMirror by Peter Kroon\n*/\n.cm-s-lesser-dark {\n  line-height: 1.3em;\n}\n.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }\n.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/\n.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/\n\n.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/\n\n.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }\n.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }\n.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }\n\n.cm-s-lesser-dark span.cm-header { color: #a0a; }\n.cm-s-lesser-dark span.cm-quote { color: #090; }\n.cm-s-lesser-dark span.cm-keyword { color: #599eff; }\n.cm-s-lesser-dark span.cm-atom { color: #C2B470; }\n.cm-s-lesser-dark span.cm-number { color: #B35E4D; }\n.cm-s-lesser-dark span.cm-def { color: white; }\n.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }\n.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }\n.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }\n.cm-s-lesser-dark span.cm-property { color: #92A75C; }\n.cm-s-lesser-dark span.cm-operator { color: #92A75C; }\n.cm-s-lesser-dark span.cm-comment { color: #666; }\n.cm-s-lesser-dark span.cm-string { color: #BCD279; }\n.cm-s-lesser-dark span.cm-string-2 { color: #f50; }\n.cm-s-lesser-dark span.cm-meta { color: #738C73; }\n.cm-s-lesser-dark span.cm-qualifier { color: #555; }\n.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }\n.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }\n.cm-s-lesser-dark span.cm-tag { color: #669199; }\n.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }\n.cm-s-lesser-dark span.cm-hr { color: #999; }\n.cm-s-lesser-dark span.cm-link { color: #7070E6; }\n.cm-s-lesser-dark span.cm-error { color: #9d1e15; }\n\n.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }\n.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/lesser-dark.css'],
          names: [],
          mappings:
            'AAAA;;;CAGC;AACD;EACE,kBAAkB;AACpB;AACA,+BAA+B,mBAAmB,EAAE,cAAc,EAAE,+BAA+B,EAAE;AACrG,4CAA4C,mBAAmB,EAAE,EAAE,UAAU;AAC7E,mKAAmK,iCAAiC,EAAE;AACtM,kLAAkL,iCAAiC,EAAE;AACrN,uCAAuC,4BAA4B,EAAE;AACrE,wBAAwB,cAAc,EAAE,CAAC,uBAAuB;;AAEhE,+DAA+D,cAAc,EAAE,CAAC,SAAS;;AAEzF,wCAAwC,mBAAmB,EAAE,2BAA2B,EAAE;AAC1F,6CAA6C,cAAc,EAAE;AAC7D,oDAAoD,WAAW,EAAE;AACjE,2CAA2C,WAAW,EAAE;;AAExD,mCAAmC,WAAW,EAAE;AAChD,kCAAkC,WAAW,EAAE;AAC/C,oCAAoC,cAAc,EAAE;AACpD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,gCAAgC,YAAY,EAAE;AAC9C,qCAAqC,aAAa,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uEAAuE,YAAY,EAAE;AACrF,qCAAqC,cAAc,EAAE;AACrD,qCAAqC,cAAc,EAAE;AACrD,oCAAoC,WAAW,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,qCAAqC,WAAW,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,sCAAsC,WAAW,EAAE;AACnD,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,cAAc,EAAE;AAChD,sCAAsC,cAAc,EAAE;AACtD,+BAA+B,WAAW,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,kCAAkC,cAAc,EAAE;;AAElD,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE',
          sourcesContent: [
            '/*\nhttp://lesscss.org/ dark theme\nPorted to CodeMirror by Peter Kroon\n*/\n.cm-s-lesser-dark {\n  line-height: 1.3em;\n}\n.cm-s-lesser-dark.CodeMirror { background: #262626; color: #EBEFE7; text-shadow: 0 -1px 1px #262626; }\n.cm-s-lesser-dark div.CodeMirror-selected { background: #45443B; } /* 33322B*/\n.cm-s-lesser-dark .CodeMirror-line::selection, .cm-s-lesser-dark .CodeMirror-line > span::selection, .cm-s-lesser-dark .CodeMirror-line > span > span::selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-line::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span::-moz-selection, .cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(69, 68, 59, .99); }\n.cm-s-lesser-dark .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-lesser-dark pre { padding: 0 8px; }/*editable code holder*/\n\n.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket { color: #7EFC7E; }/*65FC65*/\n\n.cm-s-lesser-dark .CodeMirror-gutters { background: #262626; border-right:1px solid #aaa; }\n.cm-s-lesser-dark .CodeMirror-guttermarker { color: #599eff; }\n.cm-s-lesser-dark .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-lesser-dark .CodeMirror-linenumber { color: #777; }\n\n.cm-s-lesser-dark span.cm-header { color: #a0a; }\n.cm-s-lesser-dark span.cm-quote { color: #090; }\n.cm-s-lesser-dark span.cm-keyword { color: #599eff; }\n.cm-s-lesser-dark span.cm-atom { color: #C2B470; }\n.cm-s-lesser-dark span.cm-number { color: #B35E4D; }\n.cm-s-lesser-dark span.cm-def { color: white; }\n.cm-s-lesser-dark span.cm-variable { color:#D9BF8C; }\n.cm-s-lesser-dark span.cm-variable-2 { color: #669199; }\n.cm-s-lesser-dark span.cm-variable-3, .cm-s-lesser-dark span.cm-type { color: white; }\n.cm-s-lesser-dark span.cm-property { color: #92A75C; }\n.cm-s-lesser-dark span.cm-operator { color: #92A75C; }\n.cm-s-lesser-dark span.cm-comment { color: #666; }\n.cm-s-lesser-dark span.cm-string { color: #BCD279; }\n.cm-s-lesser-dark span.cm-string-2 { color: #f50; }\n.cm-s-lesser-dark span.cm-meta { color: #738C73; }\n.cm-s-lesser-dark span.cm-qualifier { color: #555; }\n.cm-s-lesser-dark span.cm-builtin { color: #ff9e59; }\n.cm-s-lesser-dark span.cm-bracket { color: #EBEFE7; }\n.cm-s-lesser-dark span.cm-tag { color: #669199; }\n.cm-s-lesser-dark span.cm-attribute { color: #81a4d5; }\n.cm-s-lesser-dark span.cm-hr { color: #999; }\n.cm-s-lesser-dark span.cm-link { color: #7070E6; }\n.cm-s-lesser-dark span.cm-error { color: #9d1e15; }\n\n.cm-s-lesser-dark .CodeMirror-activeline-background { background: #3C3A3A; }\n.cm-s-lesser-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const A = t;
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
        e.i = function (r, n, s) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var o = {};
          if (s) {
            for (var a = 0; a < this.length; a++) {
              var c = this[a][0];
              if (c != null) {
                o[c] = true;
              }
            }
          }
          for (var t = 0; t < r.length; t++) {
            var A = [].concat(r[t]);
            if (s && o[A[0]]) {
              continue;
            }
            if (n) {
              if (!A[2]) {
                A[2] = n;
              } else {
                A[2] = ''.concat(n, ' and ').concat(A[2]);
              }
            }
            e.push(A);
          }
        };
        return e;
      };
    },
    94015: (r) => {
      'use strict';
      function e(r, e) {
        return c(r) || a(r, e) || s(r, e) || n();
      }
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function s(r, e) {
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
        for (var n = 0, s = new Array(e); n < e; n++) {
          s[n] = r[n];
        }
        return s;
      }
      function a(r, e) {
        var n =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (n == null) return;
        var s = [];
        var o = true;
        var a = false;
        var c, t;
        try {
          for (n = n.call(r); !(o = (c = n.next()).done); o = true) {
            s.push(c.value);
            if (e && s.length === e) break;
          }
        } catch (A) {
          a = true;
          t = A;
        } finally {
          try {
            if (!o && n['return'] != null) n['return']();
          } finally {
            if (a) throw t;
          }
        }
        return s;
      }
      function c(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(n) {
        var s = e(n, 4),
          o = s[1],
          a = s[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(a))));
          var t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var A = '/*# '.concat(t, ' */');
          var l = a.sources.map(function (r) {
            return '/*# sourceURL='.concat(a.sourceRoot || '').concat(r, ' */');
          });
          return [o].concat(l).concat([A]).join('\n');
        }
        return [o].join('\n');
      };
    },
    66550: (r, e, n) => {
      'use strict';
      n.r(e);
      n.d(e, { default: () => A });
      var s = n(93379);
      var o = n.n(s);
      var a = n(23448);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var t = o()(a.Z, c);
      const A = a.Z.locals || {};
    },
    93379: (r, e, n) => {
      'use strict';
      var s = (function r() {
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
            var s = document.querySelector(n);
            if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) {
              try {
                s = s.contentDocument.head;
              } catch (o) {
                s = null;
              }
            }
            e[n] = s;
          }
          return e[n];
        };
      })();
      var a = [];
      function c(r) {
        var e = -1;
        for (var n = 0; n < a.length; n++) {
          if (a[n].identifier === r) {
            e = n;
            break;
          }
        }
        return e;
      }
      function t(r, e) {
        var n = {};
        var s = [];
        for (var o = 0; o < r.length; o++) {
          var t = r[o];
          var A = e.base ? t[0] + e.base : t[0];
          var l = n[A] || 0;
          var i = ''.concat(A, ' ').concat(l);
          n[A] = l + 1;
          var d = c(i);
          var m = { css: t[1], media: t[2], sourceMap: t[3] };
          if (d !== -1) {
            a[d].references++;
            a[d].updater(m);
          } else {
            a.push({ identifier: i, updater: p(m, e), references: 1 });
          }
          s.push(i);
        }
        return s;
      }
      function A(r) {
        var e = document.createElement('style');
        var s = r.attributes || {};
        if (typeof s.nonce === 'undefined') {
          var a = true ? n.nc : 0;
          if (a) {
            s.nonce = a;
          }
        }
        Object.keys(s).forEach(function (r) {
          e.setAttribute(r, s[r]);
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
      function l(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var i = (function r() {
        var e = [];
        return function r(n, s) {
          e[n] = s;
          return e.filter(Boolean).join('\n');
        };
      })();
      function d(r, e, n, s) {
        var o = n
          ? ''
          : s.media
          ? '@media '.concat(s.media, ' {').concat(s.css, '}')
          : s.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = i(e, o);
        } else {
          var a = document.createTextNode(o);
          var c = r.childNodes;
          if (c[e]) {
            r.removeChild(c[e]);
          }
          if (c.length) {
            r.insertBefore(a, c[e]);
          } else {
            r.appendChild(a);
          }
        }
      }
      function m(r, e, n) {
        var s = n.css;
        var o = n.media;
        var a = n.sourceMap;
        if (o) {
          r.setAttribute('media', o);
        } else {
          r.removeAttribute('media');
        }
        if (a && typeof btoa !== 'undefined') {
          s += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */'
          );
        }
        if (r.styleSheet) {
          r.styleSheet.cssText = s;
        } else {
          while (r.firstChild) {
            r.removeChild(r.firstChild);
          }
          r.appendChild(document.createTextNode(s));
        }
      }
      var u = null;
      var C = 0;
      function p(r, e) {
        var n;
        var s;
        var o;
        if (e.singleton) {
          var a = C++;
          n = u || (u = A(e));
          s = d.bind(null, n, a, false);
          o = d.bind(null, n, a, true);
        } else {
          n = A(e);
          s = m.bind(null, n, e);
          o = function r() {
            l(n);
          };
        }
        s(r);
        return function e(n) {
          if (n) {
            if (n.css === r.css && n.media === r.media && n.sourceMap === r.sourceMap) {
              return;
            }
            s((r = n));
          } else {
            o();
          }
        };
      }
      r.exports = function (r, e) {
        e = e || {};
        if (!e.singleton && typeof e.singleton !== 'boolean') {
          e.singleton = s();
        }
        r = r || [];
        var n = t(r, e);
        return function r(s) {
          s = s || [];
          if (Object.prototype.toString.call(s) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < n.length; o++) {
            var A = n[o];
            var l = c(A);
            a[l].references--;
          }
          var i = t(s, e);
          for (var d = 0; d < n.length; d++) {
            var m = n[d];
            var u = c(m);
            if (a[u].references === 0) {
              a[u].updater();
              a.splice(u, 1);
            }
          }
          n = i;
        };
      };
    },
  },
]);
//# sourceMappingURL=6550.f5dbb748ddae3ef4b27e.js.map?v=f5dbb748ddae3ef4b27e
