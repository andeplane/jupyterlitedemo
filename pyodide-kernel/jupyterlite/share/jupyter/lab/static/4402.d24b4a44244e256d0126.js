(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [4402],
  {
    433: (r, e, t) => {
      'use strict';
      t.d(e, { Z: () => s });
      var n = t(94015);
      var o = t.n(n);
      var a = t(23645);
      var c = t.n(a);
      var i = c()(o());
      i.push([
        r.id,
        '.cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }\n.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }\n.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }\n.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }\n.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }\n.cm-s-the-matrix span.cm-atom { color: #3FF; }\n.cm-s-the-matrix span.cm-number { color: #FFB94F; }\n.cm-s-the-matrix span.cm-def { color: #99C; }\n.cm-s-the-matrix span.cm-variable { color: #F6C; }\n.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }\n.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }\n.cm-s-the-matrix span.cm-property { color: #62FFA0; }\n.cm-s-the-matrix span.cm-operator { color: #999; }\n.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }\n.cm-s-the-matrix span.cm-string { color: #39C; }\n.cm-s-the-matrix span.cm-meta { color: #C9F; }\n.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }\n.cm-s-the-matrix span.cm-builtin { color: #30a; }\n.cm-s-the-matrix span.cm-bracket { color: #cc7; }\n.cm-s-the-matrix span.cm-tag { color: #FFBD40; }\n.cm-s-the-matrix span.cm-attribute { color: #FFF700; }\n.cm-s-the-matrix span.cm-error { color: #FF0000; }\n\n.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/the-matrix.css'],
          names: [],
          mappings:
            'AAAA,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,2CAA2C,mBAAmB,EAAE;AAChE,gKAAgK,kCAAkC,EAAE;AACpM,+KAA+K,kCAAkC,EAAE;AACnN,uCAAuC,gBAAgB,EAAE,+BAA+B,EAAE;AAC1F,4CAA4C,WAAW,EAAE;AACzD,mDAAmD,YAAY,EAAE;AACjE,0CAA0C,cAAc,EAAE;AAC1D,sCAAsC,8BAA8B,EAAE;;AAEtE,mCAAmC,cAAc,EAAE,iBAAiB,EAAE;AACtE,gCAAgC,WAAW,EAAE;AAC7C,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,WAAW,EAAE;AAC5C,oCAAoC,WAAW,EAAE;AACjD,sCAAsC,WAAW,EAAE;AACnD,qEAAqE,WAAW,EAAE;AAClF,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,WAAW,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,WAAW,EAAE;AAC/C,gCAAgC,WAAW,EAAE;AAC7C,qCAAqC,cAAc,EAAE;AACrD,mCAAmC,WAAW,EAAE;AAChD,mCAAmC,WAAW,EAAE;AAChD,+BAA+B,cAAc,EAAE;AAC/C,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,cAAc,EAAE;;AAEjD,qDAAqD,gBAAgB,EAAE',
          sourcesContent: [
            '.cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }\n.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }\n.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }\n.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }\n.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }\n.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }\n.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }\n.cm-s-the-matrix span.cm-atom { color: #3FF; }\n.cm-s-the-matrix span.cm-number { color: #FFB94F; }\n.cm-s-the-matrix span.cm-def { color: #99C; }\n.cm-s-the-matrix span.cm-variable { color: #F6C; }\n.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }\n.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }\n.cm-s-the-matrix span.cm-property { color: #62FFA0; }\n.cm-s-the-matrix span.cm-operator { color: #999; }\n.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }\n.cm-s-the-matrix span.cm-string { color: #39C; }\n.cm-s-the-matrix span.cm-meta { color: #C9F; }\n.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }\n.cm-s-the-matrix span.cm-builtin { color: #30a; }\n.cm-s-the-matrix span.cm-bracket { color: #cc7; }\n.cm-s-the-matrix span.cm-tag { color: #FFBD40; }\n.cm-s-the-matrix span.cm-attribute { color: #FFF700; }\n.cm-s-the-matrix span.cm-error { color: #FF0000; }\n\n.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }\n',
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
            var t = r(e);
            if (e[2]) {
              return '@media '.concat(e[2], ' {').concat(t, '}');
            }
            return t;
          }).join('');
        };
        e.i = function (r, t, n) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var o = {};
          if (n) {
            for (var a = 0; a < this.length; a++) {
              var c = this[a][0];
              if (c != null) {
                o[c] = true;
              }
            }
          }
          for (var i = 0; i < r.length; i++) {
            var s = [].concat(r[i]);
            if (n && o[s[0]]) {
              continue;
            }
            if (t) {
              if (!s[2]) {
                s[2] = t;
              } else {
                s[2] = ''.concat(t, ' and ').concat(s[2]);
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
        return c(r) || a(r, e) || n(r, e) || t();
      }
      function t() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function n(r, e) {
        if (!r) return;
        if (typeof r === 'string') return o(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        if (t === 'Object' && r.constructor) t = r.constructor.name;
        if (t === 'Map' || t === 'Set') return Array.from(r);
        if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return o(r, e);
      }
      function o(r, e) {
        if (e == null || e > r.length) e = r.length;
        for (var t = 0, n = new Array(e); t < e; t++) {
          n[t] = r[t];
        }
        return n;
      }
      function a(r, e) {
        var t =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (t == null) return;
        var n = [];
        var o = true;
        var a = false;
        var c, i;
        try {
          for (t = t.call(r); !(o = (c = t.next()).done); o = true) {
            n.push(c.value);
            if (e && n.length === e) break;
          }
        } catch (s) {
          a = true;
          i = s;
        } finally {
          try {
            if (!o && t['return'] != null) t['return']();
          } finally {
            if (a) throw i;
          }
        }
        return n;
      }
      function c(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(t) {
        var n = e(t, 4),
          o = n[1],
          a = n[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(a))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var s = '/*# '.concat(i, ' */');
          var m = a.sources.map(function (r) {
            return '/*# sourceURL='.concat(a.sourceRoot || '').concat(r, ' */');
          });
          return [o].concat(m).concat([s]).join('\n');
        }
        return [o].join('\n');
      };
    },
    84402: (r, e, t) => {
      'use strict';
      t.r(e);
      t.d(e, { default: () => s });
      var n = t(93379);
      var o = t.n(n);
      var a = t(433);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var i = o()(a.Z, c);
      const s = a.Z.locals || {};
    },
    93379: (r, e, t) => {
      'use strict';
      var n = (function r() {
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
        return function r(t) {
          if (typeof e[t] === 'undefined') {
            var n = document.querySelector(t);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) {
              try {
                n = n.contentDocument.head;
              } catch (o) {
                n = null;
              }
            }
            e[t] = n;
          }
          return e[t];
        };
      })();
      var a = [];
      function c(r) {
        var e = -1;
        for (var t = 0; t < a.length; t++) {
          if (a[t].identifier === r) {
            e = t;
            break;
          }
        }
        return e;
      }
      function i(r, e) {
        var t = {};
        var n = [];
        for (var o = 0; o < r.length; o++) {
          var i = r[o];
          var s = e.base ? i[0] + e.base : i[0];
          var m = t[s] || 0;
          var A = ''.concat(s, ' ').concat(m);
          t[s] = m + 1;
          var l = c(A);
          var u = { css: i[1], media: i[2], sourceMap: i[3] };
          if (l !== -1) {
            a[l].references++;
            a[l].updater(u);
          } else {
            a.push({ identifier: A, updater: p(u, e), references: 1 });
          }
          n.push(A);
        }
        return n;
      }
      function s(r) {
        var e = document.createElement('style');
        var n = r.attributes || {};
        if (typeof n.nonce === 'undefined') {
          var a = true ? t.nc : 0;
          if (a) {
            n.nonce = a;
          }
        }
        Object.keys(n).forEach(function (r) {
          e.setAttribute(r, n[r]);
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
      function m(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var A = (function r() {
        var e = [];
        return function r(t, n) {
          e[t] = n;
          return e.filter(Boolean).join('\n');
        };
      })();
      function l(r, e, t, n) {
        var o = t
          ? ''
          : n.media
          ? '@media '.concat(n.media, ' {').concat(n.css, '}')
          : n.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = A(e, o);
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
      function u(r, e, t) {
        var n = t.css;
        var o = t.media;
        var a = t.sourceMap;
        if (o) {
          r.setAttribute('media', o);
        } else {
          r.removeAttribute('media');
        }
        if (a && typeof btoa !== 'undefined') {
          n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */'
          );
        }
        if (r.styleSheet) {
          r.styleSheet.cssText = n;
        } else {
          while (r.firstChild) {
            r.removeChild(r.firstChild);
          }
          r.appendChild(document.createTextNode(n));
        }
      }
      var d = null;
      var C = 0;
      function p(r, e) {
        var t;
        var n;
        var o;
        if (e.singleton) {
          var a = C++;
          t = d || (d = s(e));
          n = l.bind(null, t, a, false);
          o = l.bind(null, t, a, true);
        } else {
          t = s(e);
          n = u.bind(null, t, e);
          o = function r() {
            m(t);
          };
        }
        n(r);
        return function e(t) {
          if (t) {
            if (t.css === r.css && t.media === r.media && t.sourceMap === r.sourceMap) {
              return;
            }
            n((r = t));
          } else {
            o();
          }
        };
      }
      r.exports = function (r, e) {
        e = e || {};
        if (!e.singleton && typeof e.singleton !== 'boolean') {
          e.singleton = n();
        }
        r = r || [];
        var t = i(r, e);
        return function r(n) {
          n = n || [];
          if (Object.prototype.toString.call(n) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < t.length; o++) {
            var s = t[o];
            var m = c(s);
            a[m].references--;
          }
          var A = i(n, e);
          for (var l = 0; l < t.length; l++) {
            var u = t[l];
            var d = c(u);
            if (a[d].references === 0) {
              a[d].updater();
              a.splice(d, 1);
            }
          }
          t = A;
        };
      };
    },
  },
]);
//# sourceMappingURL=4402.d24b4a44244e256d0126.js.map?v=d24b4a44244e256d0126
