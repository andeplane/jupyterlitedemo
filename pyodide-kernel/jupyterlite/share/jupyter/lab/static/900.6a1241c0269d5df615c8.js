(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [900],
  {
    44915: (e, n, t) => {
      'use strict';
      t.d(n, { Z: () => s });
      var r = t(94015);
      var a = t.n(r);
      var o = t(23645);
      var c = t.n(o);
      var i = c()(a());
      i.push([
        e.id,
        '.cm-s-elegant span.cm-number, .cm-s-elegant span.cm-string, .cm-s-elegant span.cm-atom { color: #762; }\n.cm-s-elegant span.cm-comment { color: #262; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-meta { color: #555; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-variable { color: black; }\n.cm-s-elegant span.cm-variable-2 { color: #b11; }\n.cm-s-elegant span.cm-qualifier { color: #555; }\n.cm-s-elegant span.cm-keyword { color: #730; }\n.cm-s-elegant span.cm-builtin { color: #30a; }\n.cm-s-elegant span.cm-link { color: #762; }\n.cm-s-elegant span.cm-error { background-color: #fdd; }\n\n.cm-s-elegant .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-elegant .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/elegant.css'],
          names: [],
          mappings:
            'AAAA,yFAAyF,WAAW,EAAE;AACtG,gCAAgC,WAAW,EAAE,kBAAkB,EAAE,gBAAgB,EAAE;AACnF,6BAA6B,WAAW,EAAE,kBAAkB,EAAE,gBAAgB,EAAE;AAChF,iCAAiC,YAAY,EAAE;AAC/C,mCAAmC,WAAW,EAAE;AAChD,kCAAkC,WAAW,EAAE;AAC/C,gCAAgC,WAAW,EAAE;AAC7C,gCAAgC,WAAW,EAAE;AAC7C,6BAA6B,WAAW,EAAE;AAC1C,8BAA8B,sBAAsB,EAAE;;AAEtD,kDAAkD,mBAAmB,EAAE;AACvE,4CAA4C,sBAAsB,EAAE,sBAAsB,EAAE',
          sourcesContent: [
            '.cm-s-elegant span.cm-number, .cm-s-elegant span.cm-string, .cm-s-elegant span.cm-atom { color: #762; }\n.cm-s-elegant span.cm-comment { color: #262; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-meta { color: #555; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-variable { color: black; }\n.cm-s-elegant span.cm-variable-2 { color: #b11; }\n.cm-s-elegant span.cm-qualifier { color: #555; }\n.cm-s-elegant span.cm-keyword { color: #730; }\n.cm-s-elegant span.cm-builtin { color: #30a; }\n.cm-s-elegant span.cm-link { color: #762; }\n.cm-s-elegant span.cm-error { background-color: #fdd; }\n\n.cm-s-elegant .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-elegant .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const s = i;
    },
    23645: (e) => {
      'use strict';
      e.exports = function (e) {
        var n = [];
        n.toString = function n() {
          return this.map(function (n) {
            var t = e(n);
            if (n[2]) {
              return '@media '.concat(n[2], ' {').concat(t, '}');
            }
            return t;
          }).join('');
        };
        n.i = function (e, t, r) {
          if (typeof e === 'string') {
            e = [[null, e, '']];
          }
          var a = {};
          if (r) {
            for (var o = 0; o < this.length; o++) {
              var c = this[o][0];
              if (c != null) {
                a[c] = true;
              }
            }
          }
          for (var i = 0; i < e.length; i++) {
            var s = [].concat(e[i]);
            if (r && a[s[0]]) {
              continue;
            }
            if (t) {
              if (!s[2]) {
                s[2] = t;
              } else {
                s[2] = ''.concat(t, ' and ').concat(s[2]);
              }
            }
            n.push(s);
          }
        };
        return n;
      };
    },
    94015: (e) => {
      'use strict';
      function n(e, n) {
        return c(e) || o(e, n) || r(e, n) || t();
      }
      function t() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function r(e, n) {
        if (!e) return;
        if (typeof e === 'string') return a(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === 'Object' && e.constructor) t = e.constructor.name;
        if (t === 'Map' || t === 'Set') return Array.from(e);
        if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return a(e, n);
      }
      function a(e, n) {
        if (n == null || n > e.length) n = e.length;
        for (var t = 0, r = new Array(n); t < n; t++) {
          r[t] = e[t];
        }
        return r;
      }
      function o(e, n) {
        var t =
          e &&
          ((typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator']);
        if (t == null) return;
        var r = [];
        var a = true;
        var o = false;
        var c, i;
        try {
          for (t = t.call(e); !(a = (c = t.next()).done); a = true) {
            r.push(c.value);
            if (n && r.length === n) break;
          }
        } catch (s) {
          o = true;
          i = s;
        } finally {
          try {
            if (!a && t['return'] != null) t['return']();
          } finally {
            if (o) throw i;
          }
        }
        return r;
      }
      function c(e) {
        if (Array.isArray(e)) return e;
      }
      e.exports = function e(t) {
        var r = n(t, 4),
          a = r[1],
          o = r[3];
        if (typeof btoa === 'function') {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(o))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            c
          );
          var s = '/*# '.concat(i, ' */');
          var l = o.sources.map(function (e) {
            return '/*# sourceURL='.concat(o.sourceRoot || '').concat(e, ' */');
          });
          return [a].concat(l).concat([s]).join('\n');
        }
        return [a].join('\n');
      };
    },
    50900: (e, n, t) => {
      'use strict';
      t.r(n);
      t.d(n, { default: () => s });
      var r = t(93379);
      var a = t.n(r);
      var o = t(44915);
      var c = {};
      c.insert = 'head';
      c.singleton = false;
      var i = a()(o.Z, c);
      const s = o.Z.locals || {};
    },
    93379: (e, n, t) => {
      'use strict';
      var r = (function e() {
        var n;
        return function e() {
          if (typeof n === 'undefined') {
            n = Boolean(window && document && document.all && !window.atob);
          }
          return n;
        };
      })();
      var a = (function e() {
        var n = {};
        return function e(t) {
          if (typeof n[t] === 'undefined') {
            var r = document.querySelector(t);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) {
              try {
                r = r.contentDocument.head;
              } catch (a) {
                r = null;
              }
            }
            n[t] = r;
          }
          return n[t];
        };
      })();
      var o = [];
      function c(e) {
        var n = -1;
        for (var t = 0; t < o.length; t++) {
          if (o[t].identifier === e) {
            n = t;
            break;
          }
        }
        return n;
      }
      function i(e, n) {
        var t = {};
        var r = [];
        for (var a = 0; a < e.length; a++) {
          var i = e[a];
          var s = n.base ? i[0] + n.base : i[0];
          var l = t[s] || 0;
          var u = ''.concat(s, ' ').concat(l);
          t[s] = l + 1;
          var f = c(u);
          var A = { css: i[1], media: i[2], sourceMap: i[3] };
          if (f !== -1) {
            o[f].references++;
            o[f].updater(A);
          } else {
            o.push({ identifier: u, updater: d(A, n), references: 1 });
          }
          r.push(u);
        }
        return r;
      }
      function s(e) {
        var n = document.createElement('style');
        var r = e.attributes || {};
        if (typeof r.nonce === 'undefined') {
          var o = true ? t.nc : 0;
          if (o) {
            r.nonce = o;
          }
        }
        Object.keys(r).forEach(function (e) {
          n.setAttribute(e, r[e]);
        });
        if (typeof e.insert === 'function') {
          e.insert(n);
        } else {
          var c = a(e.insert || 'head');
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
      var u = (function e() {
        var n = [];
        return function e(t, r) {
          n[t] = r;
          return n.filter(Boolean).join('\n');
        };
      })();
      function f(e, n, t, r) {
        var a = t
          ? ''
          : r.media
          ? '@media '.concat(r.media, ' {').concat(r.css, '}')
          : r.css;
        if (e.styleSheet) {
          e.styleSheet.cssText = u(n, a);
        } else {
          var o = document.createTextNode(a);
          var c = e.childNodes;
          if (c[n]) {
            e.removeChild(c[n]);
          }
          if (c.length) {
            e.insertBefore(o, c[n]);
          } else {
            e.appendChild(o);
          }
        }
      }
      function A(e, n, t) {
        var r = t.css;
        var a = t.media;
        var o = t.sourceMap;
        if (a) {
          e.setAttribute('media', a);
        } else {
          e.removeAttribute('media');
        }
        if (o && typeof btoa !== 'undefined') {
          r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            ' */'
          );
        }
        if (e.styleSheet) {
          e.styleSheet.cssText = r;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(r));
        }
      }
      var m = null;
      var p = 0;
      function d(e, n) {
        var t;
        var r;
        var a;
        if (n.singleton) {
          var o = p++;
          t = m || (m = s(n));
          r = f.bind(null, t, o, false);
          a = f.bind(null, t, o, true);
        } else {
          t = s(n);
          r = A.bind(null, t, n);
          a = function e() {
            l(t);
          };
        }
        r(e);
        return function n(t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) {
              return;
            }
            r((e = t));
          } else {
            a();
          }
        };
      }
      e.exports = function (e, n) {
        n = n || {};
        if (!n.singleton && typeof n.singleton !== 'boolean') {
          n.singleton = r();
        }
        e = e || [];
        var t = i(e, n);
        return function e(r) {
          r = r || [];
          if (Object.prototype.toString.call(r) !== '[object Array]') {
            return;
          }
          for (var a = 0; a < t.length; a++) {
            var s = t[a];
            var l = c(s);
            o[l].references--;
          }
          var u = i(r, n);
          for (var f = 0; f < t.length; f++) {
            var A = t[f];
            var m = c(A);
            if (o[m].references === 0) {
              o[m].updater();
              o.splice(m, 1);
            }
          }
          t = u;
        };
      };
    },
  },
]);
//# sourceMappingURL=900.6a1241c0269d5df615c8.js.map?v=6a1241c0269d5df615c8
