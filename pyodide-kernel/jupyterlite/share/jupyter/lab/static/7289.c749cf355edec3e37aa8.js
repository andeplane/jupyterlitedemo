(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [7289],
  {
    61504: (r, n, e) => {
      'use strict';
      e.d(n, { Z: () => A });
      var t = e(94015);
      var i = e.n(t);
      var o = e(23645);
      var c = e.n(o);
      var a = c()(i());
      a.push([
        r.id,
        '/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/vibrant-ink.css'],
          names: [],
          mappings:
            'AAAA,4DAA4D;;AAE5D,+BAA+B,iBAAiB,EAAE,YAAY,EAAE;AAChE,4CAA4C,mBAAmB,EAAE;AACjE,mKAAmK,kCAAkC,EAAE;AACvM,kLAAkL,kCAAkC,EAAE;;AAEtN,wCAAwC,mBAAmB,EAAE,4BAA4B,EAAE;AAC3F,6CAA6C,YAAY,EAAE;AAC3D,oDAAoD,cAAc,EAAE;AACpE,2CAA2C,cAAc,EAAE;AAC3D,uCAAuC,4BAA4B,EAAE;;AAErE,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,WAAW,EAAE;AAC1C,+BAA+B,eAAe,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kEAAkE,cAAc,EAAE;AAClF,8FAA8F,cAAc,EAAE;AAC9G,iCAAiC,WAAW,EAAE;AAC9C,gCAAgC,WAAW,EAAE,iBAAiB,EAAE;AAChE,+BAA+B,eAAe,EAAE;AAChD,iCAAiC,UAAU,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,gCAAgC,cAAc,EAAE;AAChD,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,cAAc,EAAE;AAC/C,2BAA2B,cAAc,EAAE;AAC3C,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,4BAA4B,EAAE;;AAE5D,sDAAsD,mBAAmB,EAAE;AAC3E,gDAAgD,sBAAsB,EAAE,sBAAsB,EAAE',
          sourcesContent: [
            '/* Taken from the popular Visual Studio Vibrant Ink Schema */\n\n.cm-s-vibrant-ink.CodeMirror { background: black; color: white; }\n.cm-s-vibrant-ink div.CodeMirror-selected { background: #35493c; }\n.cm-s-vibrant-ink .CodeMirror-line::selection, .cm-s-vibrant-ink .CodeMirror-line > span::selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::selection { background: rgba(53, 73, 60, 0.99); }\n.cm-s-vibrant-ink .CodeMirror-line::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span::-moz-selection, .cm-s-vibrant-ink .CodeMirror-line > span > span::-moz-selection { background: rgba(53, 73, 60, 0.99); }\n\n.cm-s-vibrant-ink .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker { color: white; }\n.cm-s-vibrant-ink .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-vibrant-ink .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-vibrant-ink .cm-keyword { color: #CC7832; }\n.cm-s-vibrant-ink .cm-atom { color: #FC0; }\n.cm-s-vibrant-ink .cm-number { color:  #FFEE98; }\n.cm-s-vibrant-ink .cm-def { color: #8DA6CE; }\n.cm-s-vibrant-ink span.cm-variable-2, .cm-s-vibrant span.cm-tag { color: #FFC66D; }\n.cm-s-vibrant-ink span.cm-variable-3, .cm-s-vibrant span.cm-def, .cm-s-vibrant span.cm-type { color: #FFC66D; }\n.cm-s-vibrant-ink .cm-operator { color: #888; }\n.cm-s-vibrant-ink .cm-comment { color: gray; font-weight: bold; }\n.cm-s-vibrant-ink .cm-string { color:  #A5C25C; }\n.cm-s-vibrant-ink .cm-string-2 { color: red; }\n.cm-s-vibrant-ink .cm-meta { color: #D8FA3C; }\n.cm-s-vibrant-ink .cm-builtin { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-tag { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-attribute { color: #8DA6CE; }\n.cm-s-vibrant-ink .cm-header { color: #FF6400; }\n.cm-s-vibrant-ink .cm-hr { color: #AEAEAE; }\n.cm-s-vibrant-ink .cm-link { color: #5656F3; }\n.cm-s-vibrant-ink .cm-error { border-bottom: 1px solid red; }\n\n.cm-s-vibrant-ink .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-vibrant-ink .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const A = a;
    },
    23645: (r) => {
      'use strict';
      r.exports = function (r) {
        var n = [];
        n.toString = function n() {
          return this.map(function (n) {
            var e = r(n);
            if (n[2]) {
              return '@media '.concat(n[2], ' {').concat(e, '}');
            }
            return e;
          }).join('');
        };
        n.i = function (r, e, t) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var i = {};
          if (t) {
            for (var o = 0; o < this.length; o++) {
              var c = this[o][0];
              if (c != null) {
                i[c] = true;
              }
            }
          }
          for (var a = 0; a < r.length; a++) {
            var A = [].concat(r[a]);
            if (t && i[A[0]]) {
              continue;
            }
            if (e) {
              if (!A[2]) {
                A[2] = e;
              } else {
                A[2] = ''.concat(e, ' and ').concat(A[2]);
              }
            }
            n.push(A);
          }
        };
        return n;
      };
    },
    94015: (r) => {
      'use strict';
      function n(r, n) {
        return c(r) || o(r, n) || t(r, n) || e();
      }
      function e() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function t(r, n) {
        if (!r) return;
        if (typeof r === 'string') return i(r, n);
        var e = Object.prototype.toString.call(r).slice(8, -1);
        if (e === 'Object' && r.constructor) e = r.constructor.name;
        if (e === 'Map' || e === 'Set') return Array.from(r);
        if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return i(r, n);
      }
      function i(r, n) {
        if (n == null || n > r.length) n = r.length;
        for (var e = 0, t = new Array(n); e < n; e++) {
          t[e] = r[e];
        }
        return t;
      }
      function o(r, n) {
        var e =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (e == null) return;
        var t = [];
        var i = true;
        var o = false;
        var c, a;
        try {
          for (e = e.call(r); !(i = (c = e.next()).done); i = true) {
            t.push(c.value);
            if (n && t.length === n) break;
          }
        } catch (A) {
          o = true;
          a = A;
        } finally {
          try {
            if (!i && e['return'] != null) e['return']();
          } finally {
            if (o) throw a;
          }
        }
        return t;
      }
      function c(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(e) {
        var t = n(e, 4),
          i = t[1],
          o = t[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(o))));
          var a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var A = '/*# '.concat(a, ' */');
          var s = o.sources.map(function (r) {
            return '/*# sourceURL='.concat(o.sourceRoot || '').concat(r, ' */');
          });
          return [i].concat(s).concat([A]).join('\n');
        }
        return [i].join('\n');
      };
    },
    87289: (r, n, e) => {
      'use strict';
      e.r(n);
      e.d(n, { default: () => A });
      var t = e(93379);
      var i = e.n(t);
      var o = e(61504);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var a = i()(o.Z, c);
      const A = o.Z.locals || {};
    },
    93379: (r, n, e) => {
      'use strict';
      var t = (function r() {
        var n;
        return function r() {
          if (typeof n === 'undefined') {
            n = Boolean(window && document && document.all && !window.atob);
          }
          return n;
        };
      })();
      var i = (function r() {
        var n = {};
        return function r(e) {
          if (typeof n[e] === 'undefined') {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {
              try {
                t = t.contentDocument.head;
              } catch (i) {
                t = null;
              }
            }
            n[e] = t;
          }
          return n[e];
        };
      })();
      var o = [];
      function c(r) {
        var n = -1;
        for (var e = 0; e < o.length; e++) {
          if (o[e].identifier === r) {
            n = e;
            break;
          }
        }
        return n;
      }
      function a(r, n) {
        var e = {};
        var t = [];
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          var A = n.base ? a[0] + n.base : a[0];
          var s = e[A] || 0;
          var l = ''.concat(A, ' ').concat(s);
          e[A] = s + 1;
          var m = c(l);
          var u = { css: a[1], media: a[2], sourceMap: a[3] };
          if (m !== -1) {
            o[m].references++;
            o[m].updater(u);
          } else {
            o.push({ identifier: l, updater: b(u, n), references: 1 });
          }
          t.push(l);
        }
        return t;
      }
      function A(r) {
        var n = document.createElement('style');
        var t = r.attributes || {};
        if (typeof t.nonce === 'undefined') {
          var o = true ? e.nc : 0;
          if (o) {
            t.nonce = o;
          }
        }
        Object.keys(t).forEach(function (r) {
          n.setAttribute(r, t[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(n);
        } else {
          var c = i(r.insert || 'head');
          if (!c) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          c.appendChild(n);
        }
        return n;
      }
      function s(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var l = (function r() {
        var n = [];
        return function r(e, t) {
          n[e] = t;
          return n.filter(Boolean).join('\n');
        };
      })();
      function m(r, n, e, t) {
        var i = e
          ? ''
          : t.media
          ? '@media '.concat(t.media, ' {').concat(t.css, '}')
          : t.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = l(n, i);
        } else {
          var o = document.createTextNode(i);
          var c = r.childNodes;
          if (c[n]) {
            r.removeChild(c[n]);
          }
          if (c.length) {
            r.insertBefore(o, c[n]);
          } else {
            r.appendChild(o);
          }
        }
      }
      function u(r, n, e) {
        var t = e.css;
        var i = e.media;
        var o = e.sourceMap;
        if (i) {
          r.setAttribute('media', i);
        } else {
          r.removeAttribute('media');
        }
        if (o && typeof btoa !== 'undefined') {
          t += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            ' */'
          );
        }
        if (r.styleSheet) {
          r.styleSheet.cssText = t;
        } else {
          while (r.firstChild) {
            r.removeChild(r.firstChild);
          }
          r.appendChild(document.createTextNode(t));
        }
      }
      var d = null;
      var v = 0;
      function b(r, n) {
        var e;
        var t;
        var i;
        if (n.singleton) {
          var o = v++;
          e = d || (d = A(n));
          t = m.bind(null, e, o, false);
          i = m.bind(null, e, o, true);
        } else {
          e = A(n);
          t = u.bind(null, e, n);
          i = function r() {
            s(e);
          };
        }
        t(r);
        return function n(e) {
          if (e) {
            if (e.css === r.css && e.media === r.media && e.sourceMap === r.sourceMap) {
              return;
            }
            t((r = e));
          } else {
            i();
          }
        };
      }
      r.exports = function (r, n) {
        n = n || {};
        if (!n.singleton && typeof n.singleton !== 'boolean') {
          n.singleton = t();
        }
        r = r || [];
        var e = a(r, n);
        return function r(t) {
          t = t || [];
          if (Object.prototype.toString.call(t) !== '[object Array]') {
            return;
          }
          for (var i = 0; i < e.length; i++) {
            var A = e[i];
            var s = c(A);
            o[s].references--;
          }
          var l = a(t, n);
          for (var m = 0; m < e.length; m++) {
            var u = e[m];
            var d = c(u);
            if (o[d].references === 0) {
              o[d].updater();
              o.splice(d, 1);
            }
          }
          e = l;
        };
      };
    },
  },
]);
//# sourceMappingURL=7289.c749cf355edec3e37aa8.js.map?v=c749cf355edec3e37aa8
