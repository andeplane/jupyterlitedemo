(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [3387],
  {
    8248: (e, n, r) => {
      'use strict';
      r.d(n, { Z: () => a });
      var o = r(94015);
      var A = r.n(o);
      var i = r(23645);
      var c = r.n(i);
      var t = c()(A());
      t.push([
        e.id,
        '/*\n  MDN-LIKE Theme - Mozilla\n  Ported to CodeMirror by Peter Kroon <plakroon@gmail.com>\n  Report bugs/issues here: https://github.com/codemirror/CodeMirror/issues\n  GitHub: @peterkroon\n\n  The mdn-like theme is inspired on the displayed code examples at: https://developer.mozilla.org/en-US/docs/Web/CSS/animation\n\n*/\n.cm-s-mdn-like.CodeMirror { color: #999; background-color: #fff; }\n.cm-s-mdn-like div.CodeMirror-selected { background: #cfc; }\n.cm-s-mdn-like .CodeMirror-line::selection, .cm-s-mdn-like .CodeMirror-line > span::selection, .cm-s-mdn-like .CodeMirror-line > span > span::selection { background: #cfc; }\n.cm-s-mdn-like .CodeMirror-line::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span > span::-moz-selection { background: #cfc; }\n\n.cm-s-mdn-like .CodeMirror-gutters { background: #f8f8f8; border-left: 6px solid rgba(0,83,159,0.65); color: #333; }\n.cm-s-mdn-like .CodeMirror-linenumber { color: #aaa; padding-left: 8px; }\n.cm-s-mdn-like .CodeMirror-cursor { border-left: 2px solid #222; }\n\n.cm-s-mdn-like .cm-keyword { color: #6262FF; }\n.cm-s-mdn-like .cm-atom { color: #F90; }\n.cm-s-mdn-like .cm-number { color:  #ca7841; }\n.cm-s-mdn-like .cm-def { color: #8DA6CE; }\n.cm-s-mdn-like span.cm-variable-2, .cm-s-mdn-like span.cm-tag { color: #690; }\n.cm-s-mdn-like span.cm-variable-3, .cm-s-mdn-like span.cm-def, .cm-s-mdn-like span.cm-type { color: #07a; }\n\n.cm-s-mdn-like .cm-variable { color: #07a; }\n.cm-s-mdn-like .cm-property { color: #905; }\n.cm-s-mdn-like .cm-qualifier { color: #690; }\n\n.cm-s-mdn-like .cm-operator { color: #cda869; }\n.cm-s-mdn-like .cm-comment { color:#777; font-weight:normal; }\n.cm-s-mdn-like .cm-string { color:#07a; font-style:italic; }\n.cm-s-mdn-like .cm-string-2 { color:#bd6b18; } /*?*/\n.cm-s-mdn-like .cm-meta { color: #000; } /*?*/\n.cm-s-mdn-like .cm-builtin { color: #9B7536; } /*?*/\n.cm-s-mdn-like .cm-tag { color: #997643; }\n.cm-s-mdn-like .cm-attribute { color: #d6bb6d; } /*?*/\n.cm-s-mdn-like .cm-header { color: #FF6400; }\n.cm-s-mdn-like .cm-hr { color: #AEAEAE; }\n.cm-s-mdn-like .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }\n.cm-s-mdn-like .cm-error { border-bottom: 1px solid red; }\n\ndiv.cm-s-mdn-like .CodeMirror-activeline-background { background: #efefff; }\ndiv.cm-s-mdn-like span.CodeMirror-matchingbracket { outline:1px solid grey; color: inherit; }\n\n.cm-s-mdn-like.CodeMirror { background-image: url(data:image/png;base64,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); }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/mdn-like.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;;CAQC;AACD,4BAA4B,WAAW,EAAE,sBAAsB,EAAE;AACjE,yCAAyC,gBAAgB,EAAE;AAC3D,0JAA0J,gBAAgB,EAAE;AAC5K,yKAAyK,gBAAgB,EAAE;;AAE3L,qCAAqC,mBAAmB,EAAE,0CAA0C,EAAE,WAAW,EAAE;AACnH,wCAAwC,WAAW,EAAE,iBAAiB,EAAE;AACxE,oCAAoC,2BAA2B,EAAE;;AAEjE,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,WAAW,EAAE;AACvC,4BAA4B,eAAe,EAAE;AAC7C,yBAAyB,cAAc,EAAE;AACzC,gEAAgE,WAAW,EAAE;AAC7E,6FAA6F,WAAW,EAAE;;AAE1G,8BAA8B,WAAW,EAAE;AAC3C,8BAA8B,WAAW,EAAE;AAC3C,+BAA+B,WAAW,EAAE;;AAE5C,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,UAAU,EAAE,kBAAkB,EAAE;AAC7D,4BAA4B,UAAU,EAAE,iBAAiB,EAAE;AAC3D,8BAA8B,aAAa,EAAE,EAAE,IAAI;AACnD,0BAA0B,WAAW,EAAE,EAAE,IAAI;AAC7C,6BAA6B,cAAc,EAAE,EAAE,IAAI;AACnD,yBAAyB,cAAc,EAAE;AACzC,+BAA+B,cAAc,EAAE,EAAE,IAAI;AACrD,4BAA4B,cAAc,EAAE;AAC5C,wBAAwB,cAAc,EAAE;AACxC,0BAA0B,aAAa,EAAE,iBAAiB,EAAE,oBAAoB,EAAE;AAClF,2BAA2B,4BAA4B,EAAE;;AAEzD,sDAAsD,mBAAmB,EAAE;AAC3E,oDAAoD,sBAAsB,EAAE,cAAc,EAAE;;AAE5F,4BAA4B,6sFAA6sF,EAAE',
          sourcesContent: [
            '/*\n  MDN-LIKE Theme - Mozilla\n  Ported to CodeMirror by Peter Kroon <plakroon@gmail.com>\n  Report bugs/issues here: https://github.com/codemirror/CodeMirror/issues\n  GitHub: @peterkroon\n\n  The mdn-like theme is inspired on the displayed code examples at: https://developer.mozilla.org/en-US/docs/Web/CSS/animation\n\n*/\n.cm-s-mdn-like.CodeMirror { color: #999; background-color: #fff; }\n.cm-s-mdn-like div.CodeMirror-selected { background: #cfc; }\n.cm-s-mdn-like .CodeMirror-line::selection, .cm-s-mdn-like .CodeMirror-line > span::selection, .cm-s-mdn-like .CodeMirror-line > span > span::selection { background: #cfc; }\n.cm-s-mdn-like .CodeMirror-line::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span > span::-moz-selection { background: #cfc; }\n\n.cm-s-mdn-like .CodeMirror-gutters { background: #f8f8f8; border-left: 6px solid rgba(0,83,159,0.65); color: #333; }\n.cm-s-mdn-like .CodeMirror-linenumber { color: #aaa; padding-left: 8px; }\n.cm-s-mdn-like .CodeMirror-cursor { border-left: 2px solid #222; }\n\n.cm-s-mdn-like .cm-keyword { color: #6262FF; }\n.cm-s-mdn-like .cm-atom { color: #F90; }\n.cm-s-mdn-like .cm-number { color:  #ca7841; }\n.cm-s-mdn-like .cm-def { color: #8DA6CE; }\n.cm-s-mdn-like span.cm-variable-2, .cm-s-mdn-like span.cm-tag { color: #690; }\n.cm-s-mdn-like span.cm-variable-3, .cm-s-mdn-like span.cm-def, .cm-s-mdn-like span.cm-type { color: #07a; }\n\n.cm-s-mdn-like .cm-variable { color: #07a; }\n.cm-s-mdn-like .cm-property { color: #905; }\n.cm-s-mdn-like .cm-qualifier { color: #690; }\n\n.cm-s-mdn-like .cm-operator { color: #cda869; }\n.cm-s-mdn-like .cm-comment { color:#777; font-weight:normal; }\n.cm-s-mdn-like .cm-string { color:#07a; font-style:italic; }\n.cm-s-mdn-like .cm-string-2 { color:#bd6b18; } /*?*/\n.cm-s-mdn-like .cm-meta { color: #000; } /*?*/\n.cm-s-mdn-like .cm-builtin { color: #9B7536; } /*?*/\n.cm-s-mdn-like .cm-tag { color: #997643; }\n.cm-s-mdn-like .cm-attribute { color: #d6bb6d; } /*?*/\n.cm-s-mdn-like .cm-header { color: #FF6400; }\n.cm-s-mdn-like .cm-hr { color: #AEAEAE; }\n.cm-s-mdn-like .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }\n.cm-s-mdn-like .cm-error { border-bottom: 1px solid red; }\n\ndiv.cm-s-mdn-like .CodeMirror-activeline-background { background: #efefff; }\ndiv.cm-s-mdn-like span.CodeMirror-matchingbracket { outline:1px solid grey; color: inherit; }\n\n.cm-s-mdn-like.CodeMirror { background-image: url(data:image/png;base64,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); }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const a = t;
    },
    23645: (e) => {
      'use strict';
      e.exports = function (e) {
        var n = [];
        n.toString = function n() {
          return this.map(function (n) {
            var r = e(n);
            if (n[2]) {
              return '@media '.concat(n[2], ' {').concat(r, '}');
            }
            return r;
          }).join('');
        };
        n.i = function (e, r, o) {
          if (typeof e === 'string') {
            e = [[null, e, '']];
          }
          var A = {};
          if (o) {
            for (var i = 0; i < this.length; i++) {
              var c = this[i][0];
              if (c != null) {
                A[c] = true;
              }
            }
          }
          for (var t = 0; t < e.length; t++) {
            var a = [].concat(e[t]);
            if (o && A[a[0]]) {
              continue;
            }
            if (r) {
              if (!a[2]) {
                a[2] = r;
              } else {
                a[2] = ''.concat(r, ' and ').concat(a[2]);
              }
            }
            n.push(a);
          }
        };
        return n;
      };
    },
    94015: (e) => {
      'use strict';
      function n(e, n) {
        return c(e) || i(e, n) || o(e, n) || r();
      }
      function r() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function o(e, n) {
        if (!e) return;
        if (typeof e === 'string') return A(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === 'Object' && e.constructor) r = e.constructor.name;
        if (r === 'Map' || r === 'Set') return Array.from(e);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return A(e, n);
      }
      function A(e, n) {
        if (n == null || n > e.length) n = e.length;
        for (var r = 0, o = new Array(n); r < n; r++) {
          o[r] = e[r];
        }
        return o;
      }
      function i(e, n) {
        var r =
          e &&
          ((typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator']);
        if (r == null) return;
        var o = [];
        var A = true;
        var i = false;
        var c, t;
        try {
          for (r = r.call(e); !(A = (c = r.next()).done); A = true) {
            o.push(c.value);
            if (n && o.length === n) break;
          }
        } catch (a) {
          i = true;
          t = a;
        } finally {
          try {
            if (!A && r['return'] != null) r['return']();
          } finally {
            if (i) throw t;
          }
        }
        return o;
      }
      function c(e) {
        if (Array.isArray(e)) return e;
      }
      e.exports = function e(r) {
        var o = n(r, 4),
          A = o[1],
          i = o[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(i))));
          var t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var a = '/*# '.concat(t, ' */');
          var l = i.sources.map(function (e) {
            return '/*# sourceURL='.concat(i.sourceRoot || '').concat(e, ' */');
          });
          return [A].concat(l).concat([a]).join('\n');
        }
        return [A].join('\n');
      };
    },
    33387: (e, n, r) => {
      'use strict';
      r.r(n);
      r.d(n, { default: () => a });
      var o = r(93379);
      var A = r.n(o);
      var i = r(8248);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var t = A()(i.Z, c);
      const a = i.Z.locals || {};
    },
    93379: (e, n, r) => {
      'use strict';
      var o = (function e() {
        var n;
        return function e() {
          if (typeof n === 'undefined') {
            n = Boolean(window && document && document.all && !window.atob);
          }
          return n;
        };
      })();
      var A = (function e() {
        var n = {};
        return function e(r) {
          if (typeof n[r] === 'undefined') {
            var o = document.querySelector(r);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) {
              try {
                o = o.contentDocument.head;
              } catch (A) {
                o = null;
              }
            }
            n[r] = o;
          }
          return n[r];
        };
      })();
      var i = [];
      function c(e) {
        var n = -1;
        for (var r = 0; r < i.length; r++) {
          if (i[r].identifier === e) {
            n = r;
            break;
          }
        }
        return n;
      }
      function t(e, n) {
        var r = {};
        var o = [];
        for (var A = 0; A < e.length; A++) {
          var t = e[A];
          var a = n.base ? t[0] + n.base : t[0];
          var l = r[a] || 0;
          var s = ''.concat(a, ' ').concat(l);
          r[a] = l + 1;
          var d = c(s);
          var m = { css: t[1], media: t[2], sourceMap: t[3] };
          if (d !== -1) {
            i[d].references++;
            i[d].updater(m);
          } else {
            i.push({ identifier: s, updater: E(m, n), references: 1 });
          }
          o.push(s);
        }
        return o;
      }
      function a(e) {
        var n = document.createElement('style');
        var o = e.attributes || {};
        if (typeof o.nonce === 'undefined') {
          var i = true ? r.nc : 0;
          if (i) {
            o.nonce = i;
          }
        }
        Object.keys(o).forEach(function (e) {
          n.setAttribute(e, o[e]);
        });
        if (typeof e.insert === 'function') {
          e.insert(n);
        } else {
          var c = A(e.insert || 'head');
          if (!c) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          c.appendChild(n);
        }
        return n;
      }
      function l(e) {
        if (e.parentNode === null) {
          return false;
        }
        e.parentNode.removeChild(e);
      }
      var s = (function e() {
        var n = [];
        return function e(r, o) {
          n[r] = o;
          return n.filter(Boolean).join('\n');
        };
      })();
      function d(e, n, r, o) {
        var A = r
          ? ''
          : o.media
          ? '@media '.concat(o.media, ' {').concat(o.css, '}')
          : o.css;
        if (e.styleSheet) {
          e.styleSheet.cssText = s(n, A);
        } else {
          var i = document.createTextNode(A);
          var c = e.childNodes;
          if (c[n]) {
            e.removeChild(c[n]);
          }
          if (c.length) {
            e.insertBefore(i, c[n]);
          } else {
            e.appendChild(i);
          }
        }
      }
      function m(e, n, r) {
        var o = r.css;
        var A = r.media;
        var i = r.sourceMap;
        if (A) {
          e.setAttribute('media', A);
        } else {
          e.removeAttribute('media');
        }
        if (i && typeof btoa !== 'undefined') {
          o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          );
        }
        if (e.styleSheet) {
          e.styleSheet.cssText = o;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(o));
        }
      }
      var u = null;
      var f = 0;
      function E(e, n) {
        var r;
        var o;
        var A;
        if (n.singleton) {
          var i = f++;
          r = u || (u = a(n));
          o = d.bind(null, r, i, false);
          A = d.bind(null, r, i, true);
        } else {
          r = a(n);
          o = m.bind(null, r, n);
          A = function e() {
            l(r);
          };
        }
        o(e);
        return function n(r) {
          if (r) {
            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) {
              return;
            }
            o((e = r));
          } else {
            A();
          }
        };
      }
      e.exports = function (e, n) {
        n = n || {};
        if (!n.singleton && typeof n.singleton !== 'boolean') {
          n.singleton = o();
        }
        e = e || [];
        var r = t(e, n);
        return function e(o) {
          o = o || [];
          if (Object.prototype.toString.call(o) !== '[object Array]') {
            return;
          }
          for (var A = 0; A < r.length; A++) {
            var a = r[A];
            var l = c(a);
            i[l].references--;
          }
          var s = t(o, n);
          for (var d = 0; d < r.length; d++) {
            var m = r[d];
            var u = c(m);
            if (i[u].references === 0) {
              i[u].updater();
              i.splice(u, 1);
            }
          }
          r = s;
        };
      };
    },
  },
]);
//# sourceMappingURL=3387.bb8976de803b341fe7a3.js.map?v=bb8976de803b341fe7a3
