(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [8428],
  {
    24539: (n, r, e) => {
      'use strict';
      e.d(r, { Z: () => s });
      var t = e(94015);
      var i = e.n(t);
      var o = e(23645);
      var c = e.n(o);
      var a = c()(i());
      a.push([
        n.id,
        '/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/midnight.css'],
          names: [],
          mappings:
            'AAAA,wEAAwE;;AAExE,oBAAoB;AACpB,mDAAmD,mBAAmB,EAAE;;AAExE;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,kCAAkC,EAAE;AAC9L,yKAAyK,kCAAkC,EAAE;AAC7M,qCAAqC,mBAAmB,EAAE,uBAAuB,EAAE;AACnF,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,cAAc,EAAE;AACxD,oCAAoC,8BAA8B,EAAE;;AAEpE,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;;AAEhD,oEAAoE,cAAc,EAAE;AACpF,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;;AAEhD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,6BAA6B,WAAW,EAAE;AAC1C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,WAAW,EAAE;AAC1C,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,mBAAmB,EAAE,cAAc,EAAE;;AAEpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
          sourcesContent: [
            '/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n',
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
          var i = {};
          if (t) {
            for (var o = 0; o < this.length; o++) {
              var c = this[o][0];
              if (c != null) {
                i[c] = true;
              }
            }
          }
          for (var a = 0; a < n.length; a++) {
            var s = [].concat(n[a]);
            if (t && i[s[0]]) {
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
        return c(n) || o(n, r) || t(n, r) || e();
      }
      function e() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function t(n, r) {
        if (!n) return;
        if (typeof n === 'string') return i(n, r);
        var e = Object.prototype.toString.call(n).slice(8, -1);
        if (e === 'Object' && n.constructor) e = n.constructor.name;
        if (e === 'Map' || e === 'Set') return Array.from(n);
        if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return i(n, r);
      }
      function i(n, r) {
        if (r == null || r > n.length) r = n.length;
        for (var e = 0, t = new Array(r); e < r; e++) {
          t[e] = n[e];
        }
        return t;
      }
      function o(n, r) {
        var e =
          n &&
          ((typeof Symbol !== 'undefined' && n[Symbol.iterator]) || n['@@iterator']);
        if (e == null) return;
        var t = [];
        var i = true;
        var o = false;
        var c, a;
        try {
          for (e = e.call(n); !(i = (c = e.next()).done); i = true) {
            t.push(c.value);
            if (r && t.length === r) break;
          }
        } catch (s) {
          o = true;
          a = s;
        } finally {
          try {
            if (!i && e['return'] != null) e['return']();
          } finally {
            if (o) throw a;
          }
        }
        return t;
      }
      function c(n) {
        if (Array.isArray(n)) return n;
      }
      n.exports = function n(e) {
        var t = r(e, 4),
          i = t[1],
          o = t[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(o))));
          var a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var s = '/*# '.concat(a, ' */');
          var A = o.sources.map(function (n) {
            return '/*# sourceURL='.concat(o.sourceRoot || '').concat(n, ' */');
          });
          return [i].concat(A).concat([s]).join('\n');
        }
        return [i].join('\n');
      };
    },
    8428: (n, r, e) => {
      'use strict';
      e.r(r);
      e.d(r, { default: () => s });
      var t = e(93379);
      var i = e.n(t);
      var o = e(24539);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var a = i()(o.Z, c);
      const s = o.Z.locals || {};
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
      var i = (function n() {
        var r = {};
        return function n(e) {
          if (typeof r[e] === 'undefined') {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {
              try {
                t = t.contentDocument.head;
              } catch (i) {
                t = null;
              }
            }
            r[e] = t;
          }
          return r[e];
        };
      })();
      var o = [];
      function c(n) {
        var r = -1;
        for (var e = 0; e < o.length; e++) {
          if (o[e].identifier === n) {
            r = e;
            break;
          }
        }
        return r;
      }
      function a(n, r) {
        var e = {};
        var t = [];
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          var s = r.base ? a[0] + r.base : a[0];
          var A = e[s] || 0;
          var m = ''.concat(s, ' ').concat(A);
          e[s] = A + 1;
          var d = c(m);
          var l = { css: a[1], media: a[2], sourceMap: a[3] };
          if (d !== -1) {
            o[d].references++;
            o[d].updater(l);
          } else {
            o.push({ identifier: m, updater: h(l, r), references: 1 });
          }
          t.push(m);
        }
        return t;
      }
      function s(n) {
        var r = document.createElement('style');
        var t = n.attributes || {};
        if (typeof t.nonce === 'undefined') {
          var o = true ? e.nc : 0;
          if (o) {
            t.nonce = o;
          }
        }
        Object.keys(t).forEach(function (n) {
          r.setAttribute(n, t[n]);
        });
        if (typeof n.insert === 'function') {
          n.insert(r);
        } else {
          var c = i(n.insert || 'head');
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
      var m = (function n() {
        var r = [];
        return function n(e, t) {
          r[e] = t;
          return r.filter(Boolean).join('\n');
        };
      })();
      function d(n, r, e, t) {
        var i = e
          ? ''
          : t.media
          ? '@media '.concat(t.media, ' {').concat(t.css, '}')
          : t.css;
        if (n.styleSheet) {
          n.styleSheet.cssText = m(r, i);
        } else {
          var o = document.createTextNode(i);
          var c = n.childNodes;
          if (c[r]) {
            n.removeChild(c[r]);
          }
          if (c.length) {
            n.insertBefore(o, c[r]);
          } else {
            n.appendChild(o);
          }
        }
      }
      function l(n, r, e) {
        var t = e.css;
        var i = e.media;
        var o = e.sourceMap;
        if (i) {
          n.setAttribute('media', i);
        } else {
          n.removeAttribute('media');
        }
        if (o && typeof btoa !== 'undefined') {
          t += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
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
      var u = null;
      var p = 0;
      function h(n, r) {
        var e;
        var t;
        var i;
        if (r.singleton) {
          var o = p++;
          e = u || (u = s(r));
          t = d.bind(null, e, o, false);
          i = d.bind(null, e, o, true);
        } else {
          e = s(r);
          t = l.bind(null, e, r);
          i = function n() {
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
            i();
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
          for (var i = 0; i < e.length; i++) {
            var s = e[i];
            var A = c(s);
            o[A].references--;
          }
          var m = a(t, r);
          for (var d = 0; d < e.length; d++) {
            var l = e[d];
            var u = c(l);
            if (o[u].references === 0) {
              o[u].updater();
              o.splice(u, 1);
            }
          }
          e = m;
        };
      };
    },
  },
]);
//# sourceMappingURL=8428.dd5a93f02f55af0d3d8c.js.map?v=dd5a93f02f55af0d3d8c
