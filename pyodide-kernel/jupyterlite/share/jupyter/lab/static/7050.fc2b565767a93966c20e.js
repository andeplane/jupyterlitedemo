(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [7050],
  {
    24468: (o, n, r) => {
      'use strict';
      r.d(n, { Z: () => m });
      var e = r(94015);
      var c = r.n(e);
      var a = r(23645);
      var t = r.n(a);
      var i = t()(c());
      i.push([
        o.id,
        "/* Based on Sublime Text's Monokai theme */\n\n.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }\n.cm-s-monokai div.CodeMirror-selected { background: #49483E; }\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }\n.cm-s-monokai .CodeMirror-guttermarker { color: white; }\n.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment { color: #75715e; }\n.cm-s-monokai span.cm-atom { color: #ae81ff; }\n.cm-s-monokai span.cm-number { color: #ae81ff; }\n\n.cm-s-monokai span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-monokai span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-monokai span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-monokai span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }\n.cm-s-monokai span.cm-keyword { color: #f92672; }\n.cm-s-monokai span.cm-builtin { color: #66d9ef; }\n.cm-s-monokai span.cm-string { color: #e6db74; }\n\n.cm-s-monokai span.cm-variable { color: #f8f8f2; }\n.cm-s-monokai span.cm-variable-2 { color: #9effff; }\n.cm-s-monokai span.cm-variable-3, .cm-s-monokai span.cm-type { color: #66d9ef; }\n.cm-s-monokai span.cm-def { color: #fd971f; }\n.cm-s-monokai span.cm-bracket { color: #f8f8f2; }\n.cm-s-monokai span.cm-tag { color: #f92672; }\n.cm-s-monokai span.cm-header { color: #ae81ff; }\n.cm-s-monokai span.cm-link { color: #ae81ff; }\n.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n",
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/monokai.css'],
          names: [],
          mappings:
            'AAAA,0CAA0C;;AAE1C,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;AAChE,wCAAwC,mBAAmB,EAAE;AAC7D,uJAAuJ,iCAAiC,EAAE;AAC1L,sKAAsK,iCAAiC,EAAE;AACzM,oCAAoC,mBAAmB,EAAE,iBAAiB,EAAE;AAC5E,yCAAyC,YAAY,EAAE;AACvD,gDAAgD,cAAc,EAAE;AAChE,uCAAuC,cAAc,EAAE;AACvD,mCAAmC,8BAA8B,EAAE;;AAEnE,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,cAAc,EAAE;;AAE/C,6CAA6C,cAAc,EAAE;AAC7D,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,wCAAwC,cAAc,EAAE;;AAExD,kEAAkE,cAAc,EAAE;AAClF,gCAAgC,cAAc,EAAE;AAChD,gCAAgC,cAAc,EAAE;AAChD,+BAA+B,cAAc,EAAE;;AAE/C,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,+DAA+D,cAAc,EAAE;AAC/E,4BAA4B,cAAc,EAAE;AAC5C,gCAAgC,cAAc,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,+BAA+B,cAAc,EAAE;AAC/C,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;;AAEnE,kDAAkD,mBAAmB,EAAE;AACvE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
          sourcesContent: [
            "/* Based on Sublime Text's Monokai theme */\n\n.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }\n.cm-s-monokai div.CodeMirror-selected { background: #49483E; }\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }\n.cm-s-monokai .CodeMirror-guttermarker { color: white; }\n.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment { color: #75715e; }\n.cm-s-monokai span.cm-atom { color: #ae81ff; }\n.cm-s-monokai span.cm-number { color: #ae81ff; }\n\n.cm-s-monokai span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-monokai span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-monokai span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-monokai span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }\n.cm-s-monokai span.cm-keyword { color: #f92672; }\n.cm-s-monokai span.cm-builtin { color: #66d9ef; }\n.cm-s-monokai span.cm-string { color: #e6db74; }\n\n.cm-s-monokai span.cm-variable { color: #f8f8f2; }\n.cm-s-monokai span.cm-variable-2 { color: #9effff; }\n.cm-s-monokai span.cm-variable-3, .cm-s-monokai span.cm-type { color: #66d9ef; }\n.cm-s-monokai span.cm-def { color: #fd971f; }\n.cm-s-monokai span.cm-bracket { color: #f8f8f2; }\n.cm-s-monokai span.cm-tag { color: #f92672; }\n.cm-s-monokai span.cm-header { color: #ae81ff; }\n.cm-s-monokai span.cm-link { color: #ae81ff; }\n.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n",
          ],
          sourceRoot: '',
        },
      ]);
      const m = i;
    },
    23645: (o) => {
      'use strict';
      o.exports = function (o) {
        var n = [];
        n.toString = function n() {
          return this.map(function (n) {
            var r = o(n);
            if (n[2]) {
              return '@media '.concat(n[2], ' {').concat(r, '}');
            }
            return r;
          }).join('');
        };
        n.i = function (o, r, e) {
          if (typeof o === 'string') {
            o = [[null, o, '']];
          }
          var c = {};
          if (e) {
            for (var a = 0; a < this.length; a++) {
              var t = this[a][0];
              if (t != null) {
                c[t] = true;
              }
            }
          }
          for (var i = 0; i < o.length; i++) {
            var m = [].concat(o[i]);
            if (e && c[m[0]]) {
              continue;
            }
            if (r) {
              if (!m[2]) {
                m[2] = r;
              } else {
                m[2] = ''.concat(r, ' and ').concat(m[2]);
              }
            }
            n.push(m);
          }
        };
        return n;
      };
    },
    94015: (o) => {
      'use strict';
      function n(o, n) {
        return t(o) || a(o, n) || e(o, n) || r();
      }
      function r() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function e(o, n) {
        if (!o) return;
        if (typeof o === 'string') return c(o, n);
        var r = Object.prototype.toString.call(o).slice(8, -1);
        if (r === 'Object' && o.constructor) r = o.constructor.name;
        if (r === 'Map' || r === 'Set') return Array.from(o);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return c(o, n);
      }
      function c(o, n) {
        if (n == null || n > o.length) n = o.length;
        for (var r = 0, e = new Array(n); r < n; r++) {
          e[r] = o[r];
        }
        return e;
      }
      function a(o, n) {
        var r =
          o &&
          ((typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator']);
        if (r == null) return;
        var e = [];
        var c = true;
        var a = false;
        var t, i;
        try {
          for (r = r.call(o); !(c = (t = r.next()).done); c = true) {
            e.push(t.value);
            if (n && e.length === n) break;
          }
        } catch (m) {
          a = true;
          i = m;
        } finally {
          try {
            if (!c && r['return'] != null) r['return']();
          } finally {
            if (a) throw i;
          }
        }
        return e;
      }
      function t(o) {
        if (Array.isArray(o)) return o;
      }
      o.exports = function o(r) {
        var e = n(r, 4),
          c = e[1],
          a = e[3];
        if (typeof btoa === 'function') {
          var t = btoa(unescape(encodeURIComponent(JSON.stringify(a))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            t
          );
          var m = '/*# '.concat(i, ' */');
          var s = a.sources.map(function (o) {
            return '/*# sourceURL='.concat(a.sourceRoot || '').concat(o, ' */');
          });
          return [c].concat(s).concat([m]).join('\n');
        }
        return [c].join('\n');
      };
    },
    37050: (o, n, r) => {
      'use strict';
      r.r(n);
      r.d(n, { default: () => m });
      var e = r(93379);
      var c = r.n(e);
      var a = r(24468);
      var t = {};
      t.insert = 'head';
      t.singleton = false;
      var i = c()(a.Z, t);
      const m = a.Z.locals || {};
    },
    93379: (o, n, r) => {
      'use strict';
      var e = (function o() {
        var n;
        return function o() {
          if (typeof n === 'undefined') {
            n = Boolean(window && document && document.all && !window.atob);
          }
          return n;
        };
      })();
      var c = (function o() {
        var n = {};
        return function o(r) {
          if (typeof n[r] === 'undefined') {
            var e = document.querySelector(r);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
              try {
                e = e.contentDocument.head;
              } catch (c) {
                e = null;
              }
            }
            n[r] = e;
          }
          return n[r];
        };
      })();
      var a = [];
      function t(o) {
        var n = -1;
        for (var r = 0; r < a.length; r++) {
          if (a[r].identifier === o) {
            n = r;
            break;
          }
        }
        return n;
      }
      function i(o, n) {
        var r = {};
        var e = [];
        for (var c = 0; c < o.length; c++) {
          var i = o[c];
          var m = n.base ? i[0] + n.base : i[0];
          var s = r[m] || 0;
          var A = ''.concat(m, ' ').concat(s);
          r[m] = s + 1;
          var l = t(A);
          var f = { css: i[1], media: i[2], sourceMap: i[3] };
          if (l !== -1) {
            a[l].references++;
            a[l].updater(f);
          } else {
            a.push({ identifier: A, updater: p(f, n), references: 1 });
          }
          e.push(A);
        }
        return e;
      }
      function m(o) {
        var n = document.createElement('style');
        var e = o.attributes || {};
        if (typeof e.nonce === 'undefined') {
          var a = true ? r.nc : 0;
          if (a) {
            e.nonce = a;
          }
        }
        Object.keys(e).forEach(function (o) {
          n.setAttribute(o, e[o]);
        });
        if (typeof o.insert === 'function') {
          o.insert(n);
        } else {
          var t = c(o.insert || 'head');
          if (!t) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          t.appendChild(n);
        }
        return n;
      }
      function s(o) {
        if (o.parentNode === null) {
          return false;
        }
        o.parentNode.removeChild(o);
      }
      var A = (function o() {
        var n = [];
        return function o(r, e) {
          n[r] = e;
          return n.filter(Boolean).join('\n');
        };
      })();
      function l(o, n, r, e) {
        var c = r
          ? ''
          : e.media
          ? '@media '.concat(e.media, ' {').concat(e.css, '}')
          : e.css;
        if (o.styleSheet) {
          o.styleSheet.cssText = A(n, c);
        } else {
          var a = document.createTextNode(c);
          var t = o.childNodes;
          if (t[n]) {
            o.removeChild(t[n]);
          }
          if (t.length) {
            o.insertBefore(a, t[n]);
          } else {
            o.appendChild(a);
          }
        }
      }
      function f(o, n, r) {
        var e = r.css;
        var c = r.media;
        var a = r.sourceMap;
        if (c) {
          o.setAttribute('media', c);
        } else {
          o.removeAttribute('media');
        }
        if (a && typeof btoa !== 'undefined') {
          e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */'
          );
        }
        if (o.styleSheet) {
          o.styleSheet.cssText = e;
        } else {
          while (o.firstChild) {
            o.removeChild(o.firstChild);
          }
          o.appendChild(document.createTextNode(e));
        }
      }
      var u = null;
      var d = 0;
      function p(o, n) {
        var r;
        var e;
        var c;
        if (n.singleton) {
          var a = d++;
          r = u || (u = m(n));
          e = l.bind(null, r, a, false);
          c = l.bind(null, r, a, true);
        } else {
          r = m(n);
          e = f.bind(null, r, n);
          c = function o() {
            s(r);
          };
        }
        e(o);
        return function n(r) {
          if (r) {
            if (r.css === o.css && r.media === o.media && r.sourceMap === o.sourceMap) {
              return;
            }
            e((o = r));
          } else {
            c();
          }
        };
      }
      o.exports = function (o, n) {
        n = n || {};
        if (!n.singleton && typeof n.singleton !== 'boolean') {
          n.singleton = e();
        }
        o = o || [];
        var r = i(o, n);
        return function o(e) {
          e = e || [];
          if (Object.prototype.toString.call(e) !== '[object Array]') {
            return;
          }
          for (var c = 0; c < r.length; c++) {
            var m = r[c];
            var s = t(m);
            a[s].references--;
          }
          var A = i(e, n);
          for (var l = 0; l < r.length; l++) {
            var f = r[l];
            var u = t(f);
            if (a[u].references === 0) {
              a[u].updater();
              a.splice(u, 1);
            }
          }
          r = A;
        };
      };
    },
  },
]);
//# sourceMappingURL=7050.fc2b565767a93966c20e.js.map?v=fc2b565767a93966c20e
