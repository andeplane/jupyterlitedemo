(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [1044],
  {
    74415: (r, e, n) => {
      'use strict';
      n.d(e, { Z: () => u });
      var o = n(94015);
      var t = n.n(o);
      var c = n(23645);
      var a = n.n(c);
      var i = a()(t());
      i.push([
        r.id,
        '.cm-s-rubyblue.CodeMirror { background: #112435; color: white; }\n.cm-s-rubyblue div.CodeMirror-selected { background: #38566F; }\n.cm-s-rubyblue .CodeMirror-line::selection, .cm-s-rubyblue .CodeMirror-line > span::selection, .cm-s-rubyblue .CodeMirror-line > span > span::selection { background: rgba(56, 86, 111, 0.99); }\n.cm-s-rubyblue .CodeMirror-line::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 86, 111, 0.99); }\n.cm-s-rubyblue .CodeMirror-gutters { background: #1F4661; border-right: 7px solid #3E7087; }\n.cm-s-rubyblue .CodeMirror-guttermarker { color: white; }\n.cm-s-rubyblue .CodeMirror-guttermarker-subtle { color: #3E7087; }\n.cm-s-rubyblue .CodeMirror-linenumber { color: white; }\n.cm-s-rubyblue .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-rubyblue span.cm-comment { color: #999; font-style:italic; line-height: 1em; }\n.cm-s-rubyblue span.cm-atom { color: #F4C20B; }\n.cm-s-rubyblue span.cm-number, .cm-s-rubyblue span.cm-attribute { color: #82C6E0; }\n.cm-s-rubyblue span.cm-keyword { color: #F0F; }\n.cm-s-rubyblue span.cm-string { color: #F08047; }\n.cm-s-rubyblue span.cm-meta { color: #F0F; }\n.cm-s-rubyblue span.cm-variable-2, .cm-s-rubyblue span.cm-tag { color: #7BD827; }\n.cm-s-rubyblue span.cm-variable-3, .cm-s-rubyblue span.cm-def, .cm-s-rubyblue span.cm-type { color: white; }\n.cm-s-rubyblue span.cm-bracket { color: #F0F; }\n.cm-s-rubyblue span.cm-link { color: #F4C20B; }\n.cm-s-rubyblue span.CodeMirror-matchingbracket { color:#F0F !important; }\n.cm-s-rubyblue span.cm-builtin, .cm-s-rubyblue span.cm-special { color: #FF9D00; }\n.cm-s-rubyblue span.cm-error { color: #AF2018; }\n\n.cm-s-rubyblue .CodeMirror-activeline-background { background: #173047; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/rubyblue.css'],
          names: [],
          mappings:
            'AAAA,4BAA4B,mBAAmB,EAAE,YAAY,EAAE;AAC/D,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,mCAAmC,EAAE;AAC/L,yKAAyK,mCAAmC,EAAE;AAC9M,qCAAqC,mBAAmB,EAAE,+BAA+B,EAAE;AAC3F,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,YAAY,EAAE;AACtD,oCAAoC,4BAA4B,EAAE;;AAElE,iCAAiC,WAAW,EAAE,iBAAiB,EAAE,gBAAgB,EAAE;AACnF,8BAA8B,cAAc,EAAE;AAC9C,kEAAkE,cAAc,EAAE;AAClF,iCAAiC,WAAW,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,8BAA8B,WAAW,EAAE;AAC3C,gEAAgE,cAAc,EAAE;AAChF,6FAA6F,YAAY,EAAE;AAC3G,iCAAiC,WAAW,EAAE;AAC9C,8BAA8B,cAAc,EAAE;AAC9C,iDAAiD,qBAAqB,EAAE;AACxE,iEAAiE,cAAc,EAAE;AACjF,+BAA+B,cAAc,EAAE;;AAE/C,mDAAmD,mBAAmB,EAAE',
          sourcesContent: [
            '.cm-s-rubyblue.CodeMirror { background: #112435; color: white; }\n.cm-s-rubyblue div.CodeMirror-selected { background: #38566F; }\n.cm-s-rubyblue .CodeMirror-line::selection, .cm-s-rubyblue .CodeMirror-line > span::selection, .cm-s-rubyblue .CodeMirror-line > span > span::selection { background: rgba(56, 86, 111, 0.99); }\n.cm-s-rubyblue .CodeMirror-line::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span::-moz-selection, .cm-s-rubyblue .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 86, 111, 0.99); }\n.cm-s-rubyblue .CodeMirror-gutters { background: #1F4661; border-right: 7px solid #3E7087; }\n.cm-s-rubyblue .CodeMirror-guttermarker { color: white; }\n.cm-s-rubyblue .CodeMirror-guttermarker-subtle { color: #3E7087; }\n.cm-s-rubyblue .CodeMirror-linenumber { color: white; }\n.cm-s-rubyblue .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-rubyblue span.cm-comment { color: #999; font-style:italic; line-height: 1em; }\n.cm-s-rubyblue span.cm-atom { color: #F4C20B; }\n.cm-s-rubyblue span.cm-number, .cm-s-rubyblue span.cm-attribute { color: #82C6E0; }\n.cm-s-rubyblue span.cm-keyword { color: #F0F; }\n.cm-s-rubyblue span.cm-string { color: #F08047; }\n.cm-s-rubyblue span.cm-meta { color: #F0F; }\n.cm-s-rubyblue span.cm-variable-2, .cm-s-rubyblue span.cm-tag { color: #7BD827; }\n.cm-s-rubyblue span.cm-variable-3, .cm-s-rubyblue span.cm-def, .cm-s-rubyblue span.cm-type { color: white; }\n.cm-s-rubyblue span.cm-bracket { color: #F0F; }\n.cm-s-rubyblue span.cm-link { color: #F4C20B; }\n.cm-s-rubyblue span.CodeMirror-matchingbracket { color:#F0F !important; }\n.cm-s-rubyblue span.cm-builtin, .cm-s-rubyblue span.cm-special { color: #FF9D00; }\n.cm-s-rubyblue span.cm-error { color: #AF2018; }\n\n.cm-s-rubyblue .CodeMirror-activeline-background { background: #173047; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const u = i;
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
          var t = {};
          if (o) {
            for (var c = 0; c < this.length; c++) {
              var a = this[c][0];
              if (a != null) {
                t[a] = true;
              }
            }
          }
          for (var i = 0; i < r.length; i++) {
            var u = [].concat(r[i]);
            if (o && t[u[0]]) {
              continue;
            }
            if (n) {
              if (!u[2]) {
                u[2] = n;
              } else {
                u[2] = ''.concat(n, ' and ').concat(u[2]);
              }
            }
            e.push(u);
          }
        };
        return e;
      };
    },
    94015: (r) => {
      'use strict';
      function e(r, e) {
        return a(r) || c(r, e) || o(r, e) || n();
      }
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function o(r, e) {
        if (!r) return;
        if (typeof r === 'string') return t(r, e);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        if (n === 'Object' && r.constructor) n = r.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(r);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return t(r, e);
      }
      function t(r, e) {
        if (e == null || e > r.length) e = r.length;
        for (var n = 0, o = new Array(e); n < e; n++) {
          o[n] = r[n];
        }
        return o;
      }
      function c(r, e) {
        var n =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (n == null) return;
        var o = [];
        var t = true;
        var c = false;
        var a, i;
        try {
          for (n = n.call(r); !(t = (a = n.next()).done); t = true) {
            o.push(a.value);
            if (e && o.length === e) break;
          }
        } catch (u) {
          c = true;
          i = u;
        } finally {
          try {
            if (!t && n['return'] != null) n['return']();
          } finally {
            if (c) throw i;
          }
        }
        return o;
      }
      function a(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(n) {
        var o = e(n, 4),
          t = o[1],
          c = o[3];
        if (typeof btoa === 'function') {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(c))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            a
          );
          var u = '/*# '.concat(i, ' */');
          var s = c.sources.map(function (r) {
            return '/*# sourceURL='.concat(c.sourceRoot || '').concat(r, ' */');
          });
          return [t].concat(s).concat([u]).join('\n');
        }
        return [t].join('\n');
      };
    },
    71044: (r, e, n) => {
      'use strict';
      n.r(e);
      n.d(e, { default: () => u });
      var o = n(93379);
      var t = n.n(o);
      var c = n(74415);
      var a = {};
      a.insert = 'head';
      a.singleton = false;
      var i = t()(c.Z, a);
      const u = c.Z.locals || {};
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
      var t = (function r() {
        var e = {};
        return function r(n) {
          if (typeof e[n] === 'undefined') {
            var o = document.querySelector(n);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) {
              try {
                o = o.contentDocument.head;
              } catch (t) {
                o = null;
              }
            }
            e[n] = o;
          }
          return e[n];
        };
      })();
      var c = [];
      function a(r) {
        var e = -1;
        for (var n = 0; n < c.length; n++) {
          if (c[n].identifier === r) {
            e = n;
            break;
          }
        }
        return e;
      }
      function i(r, e) {
        var n = {};
        var o = [];
        for (var t = 0; t < r.length; t++) {
          var i = r[t];
          var u = e.base ? i[0] + e.base : i[0];
          var s = n[u] || 0;
          var l = ''.concat(u, ' ').concat(s);
          n[u] = s + 1;
          var A = a(l);
          var b = { css: i[1], media: i[2], sourceMap: i[3] };
          if (A !== -1) {
            c[A].references++;
            c[A].updater(b);
          } else {
            c.push({ identifier: l, updater: p(b, e), references: 1 });
          }
          o.push(l);
        }
        return o;
      }
      function u(r) {
        var e = document.createElement('style');
        var o = r.attributes || {};
        if (typeof o.nonce === 'undefined') {
          var c = true ? n.nc : 0;
          if (c) {
            o.nonce = c;
          }
        }
        Object.keys(o).forEach(function (r) {
          e.setAttribute(r, o[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(e);
        } else {
          var a = t(r.insert || 'head');
          if (!a) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          a.appendChild(e);
        }
        return e;
      }
      function s(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var l = (function r() {
        var e = [];
        return function r(n, o) {
          e[n] = o;
          return e.filter(Boolean).join('\n');
        };
      })();
      function A(r, e, n, o) {
        var t = n
          ? ''
          : o.media
          ? '@media '.concat(o.media, ' {').concat(o.css, '}')
          : o.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = l(e, t);
        } else {
          var c = document.createTextNode(t);
          var a = r.childNodes;
          if (a[e]) {
            r.removeChild(a[e]);
          }
          if (a.length) {
            r.insertBefore(c, a[e]);
          } else {
            r.appendChild(c);
          }
        }
      }
      function b(r, e, n) {
        var o = n.css;
        var t = n.media;
        var c = n.sourceMap;
        if (t) {
          r.setAttribute('media', t);
        } else {
          r.removeAttribute('media');
        }
        if (c && typeof btoa !== 'undefined') {
          o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
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
      var m = null;
      var d = 0;
      function p(r, e) {
        var n;
        var o;
        var t;
        if (e.singleton) {
          var c = d++;
          n = m || (m = u(e));
          o = A.bind(null, n, c, false);
          t = A.bind(null, n, c, true);
        } else {
          n = u(e);
          o = b.bind(null, n, e);
          t = function r() {
            s(n);
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
            t();
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
          for (var t = 0; t < n.length; t++) {
            var u = n[t];
            var s = a(u);
            c[s].references--;
          }
          var l = i(o, e);
          for (var A = 0; A < n.length; A++) {
            var b = n[A];
            var m = a(b);
            if (c[m].references === 0) {
              c[m].updater();
              c.splice(m, 1);
            }
          }
          n = l;
        };
      };
    },
  },
]);
//# sourceMappingURL=1044.4e54e3e338cfaccdfb46.js.map?v=4e54e3e338cfaccdfb46
