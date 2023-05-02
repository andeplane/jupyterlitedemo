(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [2249],
  {
    81938: (r, e, n) => {
      'use strict';
      n.d(e, { Z: () => s });
      var o = n(94015);
      var c = n.n(o);
      var a = n(23645);
      var t = n.n(a);
      var i = t()(c());
      i.push([
        r.id,
        '/*\n\n    Name:       gruvbox-dark\n    Author:     kRkk (https://github.com/krkk)\n\n    Original gruvbox color scheme by Pavel Pertsev (https://github.com/morhetz/gruvbox)\n\n*/\n\n.cm-s-gruvbox-dark.CodeMirror, .cm-s-gruvbox-dark .CodeMirror-gutters { background-color: #282828; color: #bdae93; }\n.cm-s-gruvbox-dark .CodeMirror-gutters {background: #282828; border-right: 0px;}\n.cm-s-gruvbox-dark .CodeMirror-linenumber {color: #7c6f64;}\n.cm-s-gruvbox-dark .CodeMirror-cursor { border-left: 1px solid #ebdbb2; }\n.cm-s-gruvbox-dark div.CodeMirror-selected { background: #928374; }\n.cm-s-gruvbox-dark span.cm-meta { color: #83a598; }\n\n.cm-s-gruvbox-dark span.cm-comment { color: #928374; }\n.cm-s-gruvbox-dark span.cm-number, span.cm-atom { color: #d3869b; }\n.cm-s-gruvbox-dark span.cm-keyword { color: #f84934; }\n\n.cm-s-gruvbox-dark span.cm-variable { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-2 { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-3, .cm-s-gruvbox-dark span.cm-type { color: #fabd2f; }\n.cm-s-gruvbox-dark span.cm-operator { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-callee { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-def { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-property { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-string { color: #b8bb26; }\n.cm-s-gruvbox-dark span.cm-string-2 { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-qualifier { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-attribute { color: #8ec07c; }\n\n.cm-s-gruvbox-dark .CodeMirror-activeline-background { background: #3c3836; }\n.cm-s-gruvbox-dark .CodeMirror-matchingbracket { background: #928374; color:#282828 !important; }\n\n.cm-s-gruvbox-dark span.cm-builtin { color: #fe8019; }\n.cm-s-gruvbox-dark span.cm-tag { color: #fe8019; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/gruvbox-dark.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;CAOC;;AAED,wEAAwE,yBAAyB,EAAE,cAAc,EAAE;AACnH,wCAAwC,mBAAmB,EAAE,iBAAiB,CAAC;AAC/E,2CAA2C,cAAc,CAAC;AAC1D,wCAAwC,8BAA8B,EAAE;AACxE,6CAA6C,mBAAmB,EAAE;AAClE,kCAAkC,cAAc,EAAE;;AAElD,qCAAqC,cAAc,EAAE;AACrD,kDAAkD,cAAc,EAAE;AAClE,qCAAqC,cAAc,EAAE;;AAErD,sCAAsC,cAAc,EAAE;AACtD,wCAAwC,cAAc,EAAE;AACxD,yEAAyE,cAAc,EAAE;AACzF,sCAAsC,cAAc,EAAE;AACtD,oCAAoC,cAAc,EAAE;AACpD,iCAAiC,cAAc,EAAE;AACjD,sCAAsC,cAAc,EAAE;AACtD,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;;AAEvD,uDAAuD,mBAAmB,EAAE;AAC5E,iDAAiD,mBAAmB,EAAE,wBAAwB,EAAE;;AAEhG,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,cAAc,EAAE',
          sourcesContent: [
            '/*\n\n    Name:       gruvbox-dark\n    Author:     kRkk (https://github.com/krkk)\n\n    Original gruvbox color scheme by Pavel Pertsev (https://github.com/morhetz/gruvbox)\n\n*/\n\n.cm-s-gruvbox-dark.CodeMirror, .cm-s-gruvbox-dark .CodeMirror-gutters { background-color: #282828; color: #bdae93; }\n.cm-s-gruvbox-dark .CodeMirror-gutters {background: #282828; border-right: 0px;}\n.cm-s-gruvbox-dark .CodeMirror-linenumber {color: #7c6f64;}\n.cm-s-gruvbox-dark .CodeMirror-cursor { border-left: 1px solid #ebdbb2; }\n.cm-s-gruvbox-dark div.CodeMirror-selected { background: #928374; }\n.cm-s-gruvbox-dark span.cm-meta { color: #83a598; }\n\n.cm-s-gruvbox-dark span.cm-comment { color: #928374; }\n.cm-s-gruvbox-dark span.cm-number, span.cm-atom { color: #d3869b; }\n.cm-s-gruvbox-dark span.cm-keyword { color: #f84934; }\n\n.cm-s-gruvbox-dark span.cm-variable { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-2 { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-3, .cm-s-gruvbox-dark span.cm-type { color: #fabd2f; }\n.cm-s-gruvbox-dark span.cm-operator { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-callee { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-def { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-property { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-string { color: #b8bb26; }\n.cm-s-gruvbox-dark span.cm-string-2 { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-qualifier { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-attribute { color: #8ec07c; }\n\n.cm-s-gruvbox-dark .CodeMirror-activeline-background { background: #3c3836; }\n.cm-s-gruvbox-dark .CodeMirror-matchingbracket { background: #928374; color:#282828 !important; }\n\n.cm-s-gruvbox-dark span.cm-builtin { color: #fe8019; }\n.cm-s-gruvbox-dark span.cm-tag { color: #fe8019; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const s = i;
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
        e.i = function (r, n, o) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var c = {};
          if (o) {
            for (var a = 0; a < this.length; a++) {
              var t = this[a][0];
              if (t != null) {
                c[t] = true;
              }
            }
          }
          for (var i = 0; i < r.length; i++) {
            var s = [].concat(r[i]);
            if (o && c[s[0]]) {
              continue;
            }
            if (n) {
              if (!s[2]) {
                s[2] = n;
              } else {
                s[2] = ''.concat(n, ' and ').concat(s[2]);
              }
            }
            e.push(s);
          }
        };
        return e;
      };
    },
    94015: (r) => {
      'use strict';
      function e(r, e) {
        return t(r) || a(r, e) || o(r, e) || n();
      }
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function o(r, e) {
        if (!r) return;
        if (typeof r === 'string') return c(r, e);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        if (n === 'Object' && r.constructor) n = r.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(r);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return c(r, e);
      }
      function c(r, e) {
        if (e == null || e > r.length) e = r.length;
        for (var n = 0, o = new Array(e); n < e; n++) {
          o[n] = r[n];
        }
        return o;
      }
      function a(r, e) {
        var n =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (n == null) return;
        var o = [];
        var c = true;
        var a = false;
        var t, i;
        try {
          for (n = n.call(r); !(c = (t = n.next()).done); c = true) {
            o.push(t.value);
            if (e && o.length === e) break;
          }
        } catch (s) {
          a = true;
          i = s;
        } finally {
          try {
            if (!c && n['return'] != null) n['return']();
          } finally {
            if (a) throw i;
          }
        }
        return o;
      }
      function t(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(n) {
        var o = e(n, 4),
          c = o[1],
          a = o[3];
        if (typeof btoa === 'function') {
          var t = btoa(unescape(encodeURIComponent(JSON.stringify(a))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            t
          );
          var s = '/*# '.concat(i, ' */');
          var u = a.sources.map(function (r) {
            return '/*# sourceURL='.concat(a.sourceRoot || '').concat(r, ' */');
          });
          return [c].concat(u).concat([s]).join('\n');
        }
        return [c].join('\n');
      };
    },
    12249: (r, e, n) => {
      'use strict';
      n.r(e);
      n.d(e, { default: () => s });
      var o = n(93379);
      var c = n.n(o);
      var a = n(81938);
      var t = {};
      t.insert = 'head';
      t.singleton = false;
      var i = c()(a.Z, t);
      const s = a.Z.locals || {};
    },
    93379: (r, e, n) => {
      'use strict';
      var o = (function r() {
        var e;
        return function r() {
          if (typeof e === 'undefined') {
            e = Boolean(window && document && document.all && !window.atob);
          }
          return e;
        };
      })();
      var c = (function r() {
        var e = {};
        return function r(n) {
          if (typeof e[n] === 'undefined') {
            var o = document.querySelector(n);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) {
              try {
                o = o.contentDocument.head;
              } catch (c) {
                o = null;
              }
            }
            e[n] = o;
          }
          return e[n];
        };
      })();
      var a = [];
      function t(r) {
        var e = -1;
        for (var n = 0; n < a.length; n++) {
          if (a[n].identifier === r) {
            e = n;
            break;
          }
        }
        return e;
      }
      function i(r, e) {
        var n = {};
        var o = [];
        for (var c = 0; c < r.length; c++) {
          var i = r[c];
          var s = e.base ? i[0] + e.base : i[0];
          var u = n[s] || 0;
          var A = ''.concat(s, ' ').concat(u);
          n[s] = u + 1;
          var d = t(A);
          var b = { css: i[1], media: i[2], sourceMap: i[3] };
          if (d !== -1) {
            a[d].references++;
            a[d].updater(b);
          } else {
            a.push({ identifier: A, updater: v(b, e), references: 1 });
          }
          o.push(A);
        }
        return o;
      }
      function s(r) {
        var e = document.createElement('style');
        var o = r.attributes || {};
        if (typeof o.nonce === 'undefined') {
          var a = true ? n.nc : 0;
          if (a) {
            o.nonce = a;
          }
        }
        Object.keys(o).forEach(function (r) {
          e.setAttribute(r, o[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(e);
        } else {
          var t = c(r.insert || 'head');
          if (!t) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          t.appendChild(e);
        }
        return e;
      }
      function u(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var A = (function r() {
        var e = [];
        return function r(n, o) {
          e[n] = o;
          return e.filter(Boolean).join('\n');
        };
      })();
      function d(r, e, n, o) {
        var c = n
          ? ''
          : o.media
          ? '@media '.concat(o.media, ' {').concat(o.css, '}')
          : o.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = A(e, c);
        } else {
          var a = document.createTextNode(c);
          var t = r.childNodes;
          if (t[e]) {
            r.removeChild(t[e]);
          }
          if (t.length) {
            r.insertBefore(a, t[e]);
          } else {
            r.appendChild(a);
          }
        }
      }
      function b(r, e, n) {
        var o = n.css;
        var c = n.media;
        var a = n.sourceMap;
        if (c) {
          r.setAttribute('media', c);
        } else {
          r.removeAttribute('media');
        }
        if (a && typeof btoa !== 'undefined') {
          o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */'
          );
        }
        if (r.styleSheet) {
          r.styleSheet.cssText = o;
        } else {
          while (r.firstChild) {
            r.removeChild(r.firstChild);
          }
          r.appendChild(document.createTextNode(o));
        }
      }
      var l = null;
      var m = 0;
      function v(r, e) {
        var n;
        var o;
        var c;
        if (e.singleton) {
          var a = m++;
          n = l || (l = s(e));
          o = d.bind(null, n, a, false);
          c = d.bind(null, n, a, true);
        } else {
          n = s(e);
          o = b.bind(null, n, e);
          c = function r() {
            u(n);
          };
        }
        o(r);
        return function e(n) {
          if (n) {
            if (n.css === r.css && n.media === r.media && n.sourceMap === r.sourceMap) {
              return;
            }
            o((r = n));
          } else {
            c();
          }
        };
      }
      r.exports = function (r, e) {
        e = e || {};
        if (!e.singleton && typeof e.singleton !== 'boolean') {
          e.singleton = o();
        }
        r = r || [];
        var n = i(r, e);
        return function r(o) {
          o = o || [];
          if (Object.prototype.toString.call(o) !== '[object Array]') {
            return;
          }
          for (var c = 0; c < n.length; c++) {
            var s = n[c];
            var u = t(s);
            a[u].references--;
          }
          var A = i(o, e);
          for (var d = 0; d < n.length; d++) {
            var b = n[d];
            var l = t(b);
            if (a[l].references === 0) {
              a[l].updater();
              a.splice(l, 1);
            }
          }
          n = A;
        };
      };
    },
  },
]);
//# sourceMappingURL=2249.0cc057d5b7da618aa4e0.js.map?v=0cc057d5b7da618aa4e0
