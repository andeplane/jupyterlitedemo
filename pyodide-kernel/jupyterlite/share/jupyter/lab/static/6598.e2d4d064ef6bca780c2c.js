(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6598],
  {
    11480: (r, n, o) => {
      'use strict';
      o.d(n, { Z: () => i });
      var e = o(94015);
      var c = o.n(e);
      var t = o(23645);
      var a = o.n(t);
      var s = a()(c());
      s.push([
        r.id,
        "/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n",
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/nord.css'],
          names: [],
          mappings:
            'AAAA,0CAA0C;AAC1C,4CAA4C;;AAE5C,wBAAwB,mBAAmB,EAAE,cAAc,EAAE;AAC7D,qCAAqC,mBAAmB,EAAE;AAC1D,8IAA8I,mBAAmB,EAAE;AACnK,6JAA6J,mBAAmB,EAAE;AAClL,iCAAiC,mBAAmB,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE;AACtD,6CAA6C,cAAc,EAAE;AAC7D,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,8BAA8B,EAAE;;AAEhE,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,4BAA4B,cAAc,EAAE;;AAE5C,0CAA0C,cAAc,EAAE;AAC1D,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;;AAErD,4DAA4D,cAAc,EAAE;AAC5E,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;;AAE5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yDAAyD,cAAc,EAAE;AACzE,yBAAyB,cAAc,EAAE;AACzC,6BAA6B,cAAc,EAAE;AAC7C,yBAAyB,cAAc,EAAE;AACzC,4BAA4B,cAAc,EAAE;AAC5C,0BAA0B,cAAc,EAAE;AAC1C,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;;AAEhE,+CAA+C,mBAAmB,EAAE;AACpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
          sourcesContent: [
            "/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n",
          ],
          sourceRoot: '',
        },
      ]);
      const i = s;
    },
    23645: (r) => {
      'use strict';
      r.exports = function (r) {
        var n = [];
        n.toString = function n() {
          return this.map(function (n) {
            var o = r(n);
            if (n[2]) {
              return '@media '.concat(n[2], ' {').concat(o, '}');
            }
            return o;
          }).join('');
        };
        n.i = function (r, o, e) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var c = {};
          if (e) {
            for (var t = 0; t < this.length; t++) {
              var a = this[t][0];
              if (a != null) {
                c[a] = true;
              }
            }
          }
          for (var s = 0; s < r.length; s++) {
            var i = [].concat(r[s]);
            if (e && c[i[0]]) {
              continue;
            }
            if (o) {
              if (!i[2]) {
                i[2] = o;
              } else {
                i[2] = ''.concat(o, ' and ').concat(i[2]);
              }
            }
            n.push(i);
          }
        };
        return n;
      };
    },
    94015: (r) => {
      'use strict';
      function n(r, n) {
        return a(r) || t(r, n) || e(r, n) || o();
      }
      function o() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function e(r, n) {
        if (!r) return;
        if (typeof r === 'string') return c(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if (o === 'Object' && r.constructor) o = r.constructor.name;
        if (o === 'Map' || o === 'Set') return Array.from(r);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return c(r, n);
      }
      function c(r, n) {
        if (n == null || n > r.length) n = r.length;
        for (var o = 0, e = new Array(n); o < n; o++) {
          e[o] = r[o];
        }
        return e;
      }
      function t(r, n) {
        var o =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (o == null) return;
        var e = [];
        var c = true;
        var t = false;
        var a, s;
        try {
          for (o = o.call(r); !(c = (a = o.next()).done); c = true) {
            e.push(a.value);
            if (n && e.length === n) break;
          }
        } catch (i) {
          t = true;
          s = i;
        } finally {
          try {
            if (!c && o['return'] != null) o['return']();
          } finally {
            if (t) throw s;
          }
        }
        return e;
      }
      function a(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(o) {
        var e = n(o, 4),
          c = e[1],
          t = e[3];
        if (typeof btoa === 'function') {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(t))));
          var s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            a
          );
          var i = '/*# '.concat(s, ' */');
          var A = t.sources.map(function (r) {
            return '/*# sourceURL='.concat(t.sourceRoot || '').concat(r, ' */');
          });
          return [c].concat(A).concat([i]).join('\n');
        }
        return [c].join('\n');
      };
    },
    76598: (r, n, o) => {
      'use strict';
      o.r(n);
      o.d(n, { default: () => i });
      var e = o(93379);
      var c = o.n(e);
      var t = o(11480);
      var a = {};
      a.insert = 'head';
      a.singleton = false;
      var s = c()(t.Z, a);
      const i = t.Z.locals || {};
    },
    93379: (r, n, o) => {
      'use strict';
      var e = (function r() {
        var n;
        return function r() {
          if (typeof n === 'undefined') {
            n = Boolean(window && document && document.all && !window.atob);
          }
          return n;
        };
      })();
      var c = (function r() {
        var n = {};
        return function r(o) {
          if (typeof n[o] === 'undefined') {
            var e = document.querySelector(o);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
              try {
                e = e.contentDocument.head;
              } catch (c) {
                e = null;
              }
            }
            n[o] = e;
          }
          return n[o];
        };
      })();
      var t = [];
      function a(r) {
        var n = -1;
        for (var o = 0; o < t.length; o++) {
          if (t[o].identifier === r) {
            n = o;
            break;
          }
        }
        return n;
      }
      function s(r, n) {
        var o = {};
        var e = [];
        for (var c = 0; c < r.length; c++) {
          var s = r[c];
          var i = n.base ? s[0] + n.base : s[0];
          var A = o[i] || 0;
          var d = ''.concat(i, ' ').concat(A);
          o[i] = A + 1;
          var m = a(d);
          var l = { css: s[1], media: s[2], sourceMap: s[3] };
          if (m !== -1) {
            t[m].references++;
            t[m].updater(l);
          } else {
            t.push({ identifier: d, updater: f(l, n), references: 1 });
          }
          e.push(d);
        }
        return e;
      }
      function i(r) {
        var n = document.createElement('style');
        var e = r.attributes || {};
        if (typeof e.nonce === 'undefined') {
          var t = true ? o.nc : 0;
          if (t) {
            e.nonce = t;
          }
        }
        Object.keys(e).forEach(function (r) {
          n.setAttribute(r, e[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(n);
        } else {
          var a = c(r.insert || 'head');
          if (!a) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          a.appendChild(n);
        }
        return n;
      }
      function A(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var d = (function r() {
        var n = [];
        return function r(o, e) {
          n[o] = e;
          return n.filter(Boolean).join('\n');
        };
      })();
      function m(r, n, o, e) {
        var c = o
          ? ''
          : e.media
          ? '@media '.concat(e.media, ' {').concat(e.css, '}')
          : e.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = d(n, c);
        } else {
          var t = document.createTextNode(c);
          var a = r.childNodes;
          if (a[n]) {
            r.removeChild(a[n]);
          }
          if (a.length) {
            r.insertBefore(t, a[n]);
          } else {
            r.appendChild(t);
          }
        }
      }
      function l(r, n, o) {
        var e = o.css;
        var c = o.media;
        var t = o.sourceMap;
        if (c) {
          r.setAttribute('media', c);
        } else {
          r.removeAttribute('media');
        }
        if (t && typeof btoa !== 'undefined') {
          e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
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
      var u = null;
      var p = 0;
      function f(r, n) {
        var o;
        var e;
        var c;
        if (n.singleton) {
          var t = p++;
          o = u || (u = i(n));
          e = m.bind(null, o, t, false);
          c = m.bind(null, o, t, true);
        } else {
          o = i(n);
          e = l.bind(null, o, n);
          c = function r() {
            A(o);
          };
        }
        e(r);
        return function n(o) {
          if (o) {
            if (o.css === r.css && o.media === r.media && o.sourceMap === r.sourceMap) {
              return;
            }
            e((r = o));
          } else {
            c();
          }
        };
      }
      r.exports = function (r, n) {
        n = n || {};
        if (!n.singleton && typeof n.singleton !== 'boolean') {
          n.singleton = e();
        }
        r = r || [];
        var o = s(r, n);
        return function r(e) {
          e = e || [];
          if (Object.prototype.toString.call(e) !== '[object Array]') {
            return;
          }
          for (var c = 0; c < o.length; c++) {
            var i = o[c];
            var A = a(i);
            t[A].references--;
          }
          var d = s(e, n);
          for (var m = 0; m < o.length; m++) {
            var l = o[m];
            var u = a(l);
            if (t[u].references === 0) {
              t[u].updater();
              t.splice(u, 1);
            }
          }
          o = d;
        };
      };
    },
  },
]);
//# sourceMappingURL=6598.e2d4d064ef6bca780c2c.js.map?v=e2d4d064ef6bca780c2c
