(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [3992],
  {
    68462: (n, r, e) => {
      'use strict';
      e.d(r, { Z: () => s });
      var t = e(94015);
      var o = e.n(t);
      var i = e(23645);
      var c = e.n(i);
      var a = c()(o());
      a.push([
        n.id,
        '/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/night.css'],
          names: [],
          mappings:
            'AAAA,iDAAiD;;AAEjD,yBAAyB,mBAAmB,EAAE,cAAc,EAAE;AAC9D,sCAAsC,gBAAgB,EAAE;AACxD,iJAAiJ,kCAAkC,EAAE;AACrL,gKAAgK,kCAAkC,EAAE;AACpM,kCAAkC,mBAAmB,EAAE,4BAA4B,EAAE;AACrF,uCAAuC,YAAY,EAAE;AACrD,8CAA8C,WAAW,EAAE;AAC3D,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,4BAA4B,EAAE;;AAE/D,8BAA8B,cAAc,EAAE;AAC9C,2BAA2B,cAAc,EAAE;AAC3C,4DAA4D,cAAc,EAAE;AAC5E,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,2BAA2B,cAAc,EAAE;AAC3C,0DAA0D,cAAc,EAAE;AAC1E,oFAAoF,YAAY,EAAE;AAClG,8BAA8B,cAAc,EAAE;AAC9C,2DAA2D,cAAc,EAAE;AAC3E,2BAA2B,cAAc,EAAE;AAC3C,4BAA4B,cAAc,EAAE;;AAE5C,gDAAgD,mBAAmB,EAAE;AACrE,0CAA0C,sBAAsB,EAAE,sBAAsB,EAAE',
          sourcesContent: [
            '/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const s = a;
    },
    23645: (n) => {
      'use strict';
      n.exports = function (n) {
        var r = [];
        r.toString = function r() {
          return this.map(function (r) {
            var e = n(r);
            if (r[2]) {
              return '@media '.concat(r[2], ' {').concat(e, '}');
            }
            return e;
          }).join('');
        };
        r.i = function (n, e, t) {
          if (typeof n === 'string') {
            n = [[null, n, '']];
          }
          var o = {};
          if (t) {
            for (var i = 0; i < this.length; i++) {
              var c = this[i][0];
              if (c != null) {
                o[c] = true;
              }
            }
          }
          for (var a = 0; a < n.length; a++) {
            var s = [].concat(n[a]);
            if (t && o[s[0]]) {
              continue;
            }
            if (e) {
              if (!s[2]) {
                s[2] = e;
              } else {
                s[2] = ''.concat(e, ' and ').concat(s[2]);
              }
            }
            r.push(s);
          }
        };
        return r;
      };
    },
    94015: (n) => {
      'use strict';
      function r(n, r) {
        return c(n) || i(n, r) || t(n, r) || e();
      }
      function e() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function t(n, r) {
        if (!n) return;
        if (typeof n === 'string') return o(n, r);
        var e = Object.prototype.toString.call(n).slice(8, -1);
        if (e === 'Object' && n.constructor) e = n.constructor.name;
        if (e === 'Map' || e === 'Set') return Array.from(n);
        if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return o(n, r);
      }
      function o(n, r) {
        if (r == null || r > n.length) r = n.length;
        for (var e = 0, t = new Array(r); e < r; e++) {
          t[e] = n[e];
        }
        return t;
      }
      function i(n, r) {
        var e =
          n &&
          ((typeof Symbol !== 'undefined' && n[Symbol.iterator]) || n['@@iterator']);
        if (e == null) return;
        var t = [];
        var o = true;
        var i = false;
        var c, a;
        try {
          for (e = e.call(n); !(o = (c = e.next()).done); o = true) {
            t.push(c.value);
            if (r && t.length === r) break;
          }
        } catch (s) {
          i = true;
          a = s;
        } finally {
          try {
            if (!o && e['return'] != null) e['return']();
          } finally {
            if (i) throw a;
          }
        }
        return t;
      }
      function c(n) {
        if (Array.isArray(n)) return n;
      }
      n.exports = function n(e) {
        var t = r(e, 4),
          o = t[1],
          i = t[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(i))));
          var a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var s = '/*# '.concat(a, ' */');
          var A = i.sources.map(function (n) {
            return '/*# sourceURL='.concat(i.sourceRoot || '').concat(n, ' */');
          });
          return [o].concat(A).concat([s]).join('\n');
        }
        return [o].join('\n');
      };
    },
    23992: (n, r, e) => {
      'use strict';
      e.r(r);
      e.d(r, { default: () => s });
      var t = e(93379);
      var o = e.n(t);
      var i = e(68462);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var a = o()(i.Z, c);
      const s = i.Z.locals || {};
    },
    93379: (n, r, e) => {
      'use strict';
      var t = (function n() {
        var r;
        return function n() {
          if (typeof r === 'undefined') {
            r = Boolean(window && document && document.all && !window.atob);
          }
          return r;
        };
      })();
      var o = (function n() {
        var r = {};
        return function n(e) {
          if (typeof r[e] === 'undefined') {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {
              try {
                t = t.contentDocument.head;
              } catch (o) {
                t = null;
              }
            }
            r[e] = t;
          }
          return r[e];
        };
      })();
      var i = [];
      function c(n) {
        var r = -1;
        for (var e = 0; e < i.length; e++) {
          if (i[e].identifier === n) {
            r = e;
            break;
          }
        }
        return r;
      }
      function a(n, r) {
        var e = {};
        var t = [];
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          var s = r.base ? a[0] + r.base : a[0];
          var A = e[s] || 0;
          var l = ''.concat(s, ' ').concat(A);
          e[s] = A + 1;
          var m = c(l);
          var u = { css: a[1], media: a[2], sourceMap: a[3] };
          if (m !== -1) {
            i[m].references++;
            i[m].updater(u);
          } else {
            i.push({ identifier: l, updater: h(u, r), references: 1 });
          }
          t.push(l);
        }
        return t;
      }
      function s(n) {
        var r = document.createElement('style');
        var t = n.attributes || {};
        if (typeof t.nonce === 'undefined') {
          var i = true ? e.nc : 0;
          if (i) {
            t.nonce = i;
          }
        }
        Object.keys(t).forEach(function (n) {
          r.setAttribute(n, t[n]);
        });
        if (typeof n.insert === 'function') {
          n.insert(r);
        } else {
          var c = o(n.insert || 'head');
          if (!c) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          c.appendChild(r);
        }
        return r;
      }
      function A(n) {
        if (n.parentNode === null) {
          return false;
        }
        n.parentNode.removeChild(n);
      }
      var l = (function n() {
        var r = [];
        return function n(e, t) {
          r[e] = t;
          return r.filter(Boolean).join('\n');
        };
      })();
      function m(n, r, e, t) {
        var o = e
          ? ''
          : t.media
          ? '@media '.concat(t.media, ' {').concat(t.css, '}')
          : t.css;
        if (n.styleSheet) {
          n.styleSheet.cssText = l(r, o);
        } else {
          var i = document.createTextNode(o);
          var c = n.childNodes;
          if (c[r]) {
            n.removeChild(c[r]);
          }
          if (c.length) {
            n.insertBefore(i, c[r]);
          } else {
            n.appendChild(i);
          }
        }
      }
      function u(n, r, e) {
        var t = e.css;
        var o = e.media;
        var i = e.sourceMap;
        if (o) {
          n.setAttribute('media', o);
        } else {
          n.removeAttribute('media');
        }
        if (i && typeof btoa !== 'undefined') {
          t += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          );
        }
        if (n.styleSheet) {
          n.styleSheet.cssText = t;
        } else {
          while (n.firstChild) {
            n.removeChild(n.firstChild);
          }
          n.appendChild(document.createTextNode(t));
        }
      }
      var f = null;
      var d = 0;
      function h(n, r) {
        var e;
        var t;
        var o;
        if (r.singleton) {
          var i = d++;
          e = f || (f = s(r));
          t = m.bind(null, e, i, false);
          o = m.bind(null, e, i, true);
        } else {
          e = s(r);
          t = u.bind(null, e, r);
          o = function n() {
            A(e);
          };
        }
        t(n);
        return function r(e) {
          if (e) {
            if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) {
              return;
            }
            t((n = e));
          } else {
            o();
          }
        };
      }
      n.exports = function (n, r) {
        r = r || {};
        if (!r.singleton && typeof r.singleton !== 'boolean') {
          r.singleton = t();
        }
        n = n || [];
        var e = a(n, r);
        return function n(t) {
          t = t || [];
          if (Object.prototype.toString.call(t) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < e.length; o++) {
            var s = e[o];
            var A = c(s);
            i[A].references--;
          }
          var l = a(t, r);
          for (var m = 0; m < e.length; m++) {
            var u = e[m];
            var f = c(u);
            if (i[f].references === 0) {
              i[f].updater();
              i.splice(f, 1);
            }
          }
          e = l;
        };
      };
    },
  },
]);
//# sourceMappingURL=3992.6587b8bb22d3b162cc6b.js.map?v=6587b8bb22d3b162cc6b
