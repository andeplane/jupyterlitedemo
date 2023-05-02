(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [8708],
  {
    29579: (n, e, r) => {
      'use strict';
      r.d(e, { Z: () => l });
      var a = r(94015);
      var o = r.n(a);
      var c = r(23645);
      var t = r.n(c);
      var i = t()(o());
      i.push([
        n.id,
        '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-ocean.CodeMirror {\n  background-color: #0F111A;\n  color: #8F93A2;\n}\n\n.cm-s-material-ocean .CodeMirror-gutters {\n  background: #0F111A;\n  color: #464B5D;\n  border: none;\n}\n\n.cm-s-material-ocean .CodeMirror-guttermarker,\n.cm-s-material-ocean .CodeMirror-guttermarker-subtle,\n.cm-s-material-ocean .CodeMirror-linenumber {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-ocean div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::selection,\n.cm-s-material-ocean .CodeMirror-line>span::selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-ocean .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-ocean .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-ocean .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-ocean .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-ocean .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-comment {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-ocean .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-ocean .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/material-ocean.css'],
          names: [],
          mappings:
            'AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB',
          sourcesContent: [
            '/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-ocean.CodeMirror {\n  background-color: #0F111A;\n  color: #8F93A2;\n}\n\n.cm-s-material-ocean .CodeMirror-gutters {\n  background: #0F111A;\n  color: #464B5D;\n  border: none;\n}\n\n.cm-s-material-ocean .CodeMirror-guttermarker,\n.cm-s-material-ocean .CodeMirror-guttermarker-subtle,\n.cm-s-material-ocean .CodeMirror-linenumber {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-ocean div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::selection,\n.cm-s-material-ocean .CodeMirror-line>span::selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-ocean .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-ocean .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-ocean .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-ocean .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-ocean .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-comment {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-ocean .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-ocean .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}',
          ],
          sourceRoot: '',
        },
      ]);
      const l = i;
    },
    23645: (n) => {
      'use strict';
      n.exports = function (n) {
        var e = [];
        e.toString = function e() {
          return this.map(function (e) {
            var r = n(e);
            if (e[2]) {
              return '@media '.concat(e[2], ' {').concat(r, '}');
            }
            return r;
          }).join('');
        };
        e.i = function (n, r, a) {
          if (typeof n === 'string') {
            n = [[null, n, '']];
          }
          var o = {};
          if (a) {
            for (var c = 0; c < this.length; c++) {
              var t = this[c][0];
              if (t != null) {
                o[t] = true;
              }
            }
          }
          for (var i = 0; i < n.length; i++) {
            var l = [].concat(n[i]);
            if (a && o[l[0]]) {
              continue;
            }
            if (r) {
              if (!l[2]) {
                l[2] = r;
              } else {
                l[2] = ''.concat(r, ' and ').concat(l[2]);
              }
            }
            e.push(l);
          }
        };
        return e;
      };
    },
    94015: (n) => {
      'use strict';
      function e(n, e) {
        return t(n) || c(n, e) || a(n, e) || r();
      }
      function r() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function a(n, e) {
        if (!n) return;
        if (typeof n === 'string') return o(n, e);
        var r = Object.prototype.toString.call(n).slice(8, -1);
        if (r === 'Object' && n.constructor) r = n.constructor.name;
        if (r === 'Map' || r === 'Set') return Array.from(n);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return o(n, e);
      }
      function o(n, e) {
        if (e == null || e > n.length) e = n.length;
        for (var r = 0, a = new Array(e); r < e; r++) {
          a[r] = n[r];
        }
        return a;
      }
      function c(n, e) {
        var r =
          n &&
          ((typeof Symbol !== 'undefined' && n[Symbol.iterator]) || n['@@iterator']);
        if (r == null) return;
        var a = [];
        var o = true;
        var c = false;
        var t, i;
        try {
          for (r = r.call(n); !(o = (t = r.next()).done); o = true) {
            a.push(t.value);
            if (e && a.length === e) break;
          }
        } catch (l) {
          c = true;
          i = l;
        } finally {
          try {
            if (!o && r['return'] != null) r['return']();
          } finally {
            if (c) throw i;
          }
        }
        return a;
      }
      function t(n) {
        if (Array.isArray(n)) return n;
      }
      n.exports = function n(r) {
        var a = e(r, 4),
          o = a[1],
          c = a[3];
        if (typeof btoa === 'function') {
          var t = btoa(unescape(encodeURIComponent(JSON.stringify(c))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            t
          );
          var l = '/*# '.concat(i, ' */');
          var A = c.sources.map(function (n) {
            return '/*# sourceURL='.concat(c.sourceRoot || '').concat(n, ' */');
          });
          return [o].concat(A).concat([l]).join('\n');
        }
        return [o].join('\n');
      };
    },
    98708: (n, e, r) => {
      'use strict';
      r.r(e);
      r.d(e, { default: () => l });
      var a = r(93379);
      var o = r.n(a);
      var c = r(29579);
      var t = {};
      t.insert = 'head';
      t.singleton = false;
      var i = o()(c.Z, t);
      const l = c.Z.locals || {};
    },
    93379: (n, e, r) => {
      'use strict';
      var a = (function n() {
        var e;
        return function n() {
          if (typeof e === 'undefined') {
            e = Boolean(window && document && document.all && !window.atob);
          }
          return e;
        };
      })();
      var o = (function n() {
        var e = {};
        return function n(r) {
          if (typeof e[r] === 'undefined') {
            var a = document.querySelector(r);
            if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement) {
              try {
                a = a.contentDocument.head;
              } catch (o) {
                a = null;
              }
            }
            e[r] = a;
          }
          return e[r];
        };
      })();
      var c = [];
      function t(n) {
        var e = -1;
        for (var r = 0; r < c.length; r++) {
          if (c[r].identifier === n) {
            e = r;
            break;
          }
        }
        return e;
      }
      function i(n, e) {
        var r = {};
        var a = [];
        for (var o = 0; o < n.length; o++) {
          var i = n[o];
          var l = e.base ? i[0] + e.base : i[0];
          var A = r[l] || 0;
          var m = ''.concat(l, ' ').concat(A);
          r[l] = A + 1;
          var s = t(m);
          var u = { css: i[1], media: i[2], sourceMap: i[3] };
          if (s !== -1) {
            c[s].references++;
            c[s].updater(u);
          } else {
            c.push({ identifier: m, updater: f(u, e), references: 1 });
          }
          a.push(m);
        }
        return a;
      }
      function l(n) {
        var e = document.createElement('style');
        var a = n.attributes || {};
        if (typeof a.nonce === 'undefined') {
          var c = true ? r.nc : 0;
          if (c) {
            a.nonce = c;
          }
        }
        Object.keys(a).forEach(function (n) {
          e.setAttribute(n, a[n]);
        });
        if (typeof n.insert === 'function') {
          n.insert(e);
        } else {
          var t = o(n.insert || 'head');
          if (!t) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          t.appendChild(e);
        }
        return e;
      }
      function A(n) {
        if (n.parentNode === null) {
          return false;
        }
        n.parentNode.removeChild(n);
      }
      var m = (function n() {
        var e = [];
        return function n(r, a) {
          e[r] = a;
          return e.filter(Boolean).join('\n');
        };
      })();
      function s(n, e, r, a) {
        var o = r
          ? ''
          : a.media
          ? '@media '.concat(a.media, ' {').concat(a.css, '}')
          : a.css;
        if (n.styleSheet) {
          n.styleSheet.cssText = m(e, o);
        } else {
          var c = document.createTextNode(o);
          var t = n.childNodes;
          if (t[e]) {
            n.removeChild(t[e]);
          }
          if (t.length) {
            n.insertBefore(c, t[e]);
          } else {
            n.appendChild(c);
          }
        }
      }
      function u(n, e, r) {
        var a = r.css;
        var o = r.media;
        var c = r.sourceMap;
        if (o) {
          n.setAttribute('media', o);
        } else {
          n.removeAttribute('media');
        }
        if (c && typeof btoa !== 'undefined') {
          a += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
            ' */'
          );
        }
        if (n.styleSheet) {
          n.styleSheet.cssText = a;
        } else {
          while (n.firstChild) {
            n.removeChild(n.firstChild);
          }
          n.appendChild(document.createTextNode(a));
        }
      }
      var d = null;
      var C = 0;
      function f(n, e) {
        var r;
        var a;
        var o;
        if (e.singleton) {
          var c = C++;
          r = d || (d = l(e));
          a = s.bind(null, r, c, false);
          o = s.bind(null, r, c, true);
        } else {
          r = l(e);
          a = u.bind(null, r, e);
          o = function n() {
            A(r);
          };
        }
        a(n);
        return function e(r) {
          if (r) {
            if (r.css === n.css && r.media === n.media && r.sourceMap === n.sourceMap) {
              return;
            }
            a((n = r));
          } else {
            o();
          }
        };
      }
      n.exports = function (n, e) {
        e = e || {};
        if (!e.singleton && typeof e.singleton !== 'boolean') {
          e.singleton = a();
        }
        n = n || [];
        var r = i(n, e);
        return function n(a) {
          a = a || [];
          if (Object.prototype.toString.call(a) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < r.length; o++) {
            var l = r[o];
            var A = t(l);
            c[A].references--;
          }
          var m = i(a, e);
          for (var s = 0; s < r.length; s++) {
            var u = r[s];
            var d = t(u);
            if (c[d].references === 0) {
              c[d].updater();
              c.splice(d, 1);
            }
          }
          r = m;
        };
      };
    },
  },
]);
//# sourceMappingURL=8708.35479b2d01be1e86804a.js.map?v=35479b2d01be1e86804a
