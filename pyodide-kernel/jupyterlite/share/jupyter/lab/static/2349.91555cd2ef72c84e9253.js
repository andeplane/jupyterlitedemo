(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [2349],
  {
    84732: (r, o, e) => {
      'use strict';
      e.d(o, { Z: () => s });
      var n = e(94015);
      var c = e.n(n);
      var t = e(23645);
      var a = e.n(t);
      var i = a()(c());
      i.push([
        r.id,
        "/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n",
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/mbo.css'],
          names: [],
          mappings:
            'AAAA,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;;AAEjE,uBAAuB,mBAAmB,EAAE,cAAc,EAAE;AAC5D,oCAAoC,mBAAmB,EAAE;AACzD,2IAA2I,mCAAmC,EAAE;AAChL,0JAA0J,mCAAmC,EAAE;AAC/L,gCAAgC,mBAAmB,EAAE,iBAAiB,EAAE;AACxE,qCAAqC,YAAY,EAAE;AACnD,4CAA4C,WAAW,EAAE;AACzD,mCAAmC,cAAc,EAAE;AACnD,+BAA+B,8BAA8B,EAAE;;AAE/D,4BAA4B,cAAc,EAAE;AAC5C,yBAAyB,cAAc,EAAE;AACzC,2BAA2B,cAAc,EAAE;;AAE3C,0DAA0D,cAAc,EAAE;AAC1E,4BAA4B,cAAc,EAAE;AAC5C,2BAA2B,cAAc,EAAE;AAC3C,uCAAuC,cAAc,EAAE;;AAEvD,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,cAAc,EAAE;AAC/C,wBAAwB,cAAc,EAAE;AACxC,4BAA4B,cAAc,EAAE,iBAAiB,EAAE;AAC/D,wBAAwB,cAAc,EAAE;AACxC,yBAAyB,cAAc,EAAE;AACzC,0BAA0B,sBAAsB,EAAE,cAAc,EAAE;AAClE,8BAA8B,cAAc,EAAE;;AAE9C,8CAA8C,mBAAmB,EAAE;AACnE,wCAAwC,yBAAyB,EAAE;AACnE,oCAAoC,oCAAoC,EAAE',
          sourcesContent: [
            "/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n",
          ],
          sourceRoot: '',
        },
      ]);
      const s = i;
    },
    23645: (r) => {
      'use strict';
      r.exports = function (r) {
        var o = [];
        o.toString = function o() {
          return this.map(function (o) {
            var e = r(o);
            if (o[2]) {
              return '@media '.concat(o[2], ' {').concat(e, '}');
            }
            return e;
          }).join('');
        };
        o.i = function (r, e, n) {
          if (typeof r === 'string') {
            r = [[null, r, '']];
          }
          var c = {};
          if (n) {
            for (var t = 0; t < this.length; t++) {
              var a = this[t][0];
              if (a != null) {
                c[a] = true;
              }
            }
          }
          for (var i = 0; i < r.length; i++) {
            var s = [].concat(r[i]);
            if (n && c[s[0]]) {
              continue;
            }
            if (e) {
              if (!s[2]) {
                s[2] = e;
              } else {
                s[2] = ''.concat(e, ' and ').concat(s[2]);
              }
            }
            o.push(s);
          }
        };
        return o;
      };
    },
    94015: (r) => {
      'use strict';
      function o(r, o) {
        return a(r) || t(r, o) || n(r, o) || e();
      }
      function e() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function n(r, o) {
        if (!r) return;
        if (typeof r === 'string') return c(r, o);
        var e = Object.prototype.toString.call(r).slice(8, -1);
        if (e === 'Object' && r.constructor) e = r.constructor.name;
        if (e === 'Map' || e === 'Set') return Array.from(r);
        if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return c(r, o);
      }
      function c(r, o) {
        if (o == null || o > r.length) o = r.length;
        for (var e = 0, n = new Array(o); e < o; e++) {
          n[e] = r[e];
        }
        return n;
      }
      function t(r, o) {
        var e =
          r &&
          ((typeof Symbol !== 'undefined' && r[Symbol.iterator]) || r['@@iterator']);
        if (e == null) return;
        var n = [];
        var c = true;
        var t = false;
        var a, i;
        try {
          for (e = e.call(r); !(c = (a = e.next()).done); c = true) {
            n.push(a.value);
            if (o && n.length === o) break;
          }
        } catch (s) {
          t = true;
          i = s;
        } finally {
          try {
            if (!c && e['return'] != null) e['return']();
          } finally {
            if (t) throw i;
          }
        }
        return n;
      }
      function a(r) {
        if (Array.isArray(r)) return r;
      }
      r.exports = function r(e) {
        var n = o(e, 4),
          c = n[1],
          t = n[3];
        if (typeof btoa === 'function') {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(t))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            a
          );
          var s = '/*# '.concat(i, ' */');
          var m = t.sources.map(function (r) {
            return '/*# sourceURL='.concat(t.sourceRoot || '').concat(r, ' */');
          });
          return [c].concat(m).concat([s]).join('\n');
        }
        return [c].join('\n');
      };
    },
    42349: (r, o, e) => {
      'use strict';
      e.r(o);
      e.d(o, { default: () => s });
      var n = e(93379);
      var c = e.n(n);
      var t = e(84732);
      var a = {};
      a.insert = 'head';
      a.singleton = false;
      var i = c()(t.Z, a);
      const s = t.Z.locals || {};
    },
    93379: (r, o, e) => {
      'use strict';
      var n = (function r() {
        var o;
        return function r() {
          if (typeof o === 'undefined') {
            o = Boolean(window && document && document.all && !window.atob);
          }
          return o;
        };
      })();
      var c = (function r() {
        var o = {};
        return function r(e) {
          if (typeof o[e] === 'undefined') {
            var n = document.querySelector(e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) {
              try {
                n = n.contentDocument.head;
              } catch (c) {
                n = null;
              }
            }
            o[e] = n;
          }
          return o[e];
        };
      })();
      var t = [];
      function a(r) {
        var o = -1;
        for (var e = 0; e < t.length; e++) {
          if (t[e].identifier === r) {
            o = e;
            break;
          }
        }
        return o;
      }
      function i(r, o) {
        var e = {};
        var n = [];
        for (var c = 0; c < r.length; c++) {
          var i = r[c];
          var s = o.base ? i[0] + o.base : i[0];
          var m = e[s] || 0;
          var A = ''.concat(s, ' ').concat(m);
          e[s] = m + 1;
          var f = a(A);
          var l = { css: i[1], media: i[2], sourceMap: i[3] };
          if (f !== -1) {
            t[f].references++;
            t[f].updater(l);
          } else {
            t.push({ identifier: A, updater: d(l, o), references: 1 });
          }
          n.push(A);
        }
        return n;
      }
      function s(r) {
        var o = document.createElement('style');
        var n = r.attributes || {};
        if (typeof n.nonce === 'undefined') {
          var t = true ? e.nc : 0;
          if (t) {
            n.nonce = t;
          }
        }
        Object.keys(n).forEach(function (r) {
          o.setAttribute(r, n[r]);
        });
        if (typeof r.insert === 'function') {
          r.insert(o);
        } else {
          var a = c(r.insert || 'head');
          if (!a) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          a.appendChild(o);
        }
        return o;
      }
      function m(r) {
        if (r.parentNode === null) {
          return false;
        }
        r.parentNode.removeChild(r);
      }
      var A = (function r() {
        var o = [];
        return function r(e, n) {
          o[e] = n;
          return o.filter(Boolean).join('\n');
        };
      })();
      function f(r, o, e, n) {
        var c = e
          ? ''
          : n.media
          ? '@media '.concat(n.media, ' {').concat(n.css, '}')
          : n.css;
        if (r.styleSheet) {
          r.styleSheet.cssText = A(o, c);
        } else {
          var t = document.createTextNode(c);
          var a = r.childNodes;
          if (a[o]) {
            r.removeChild(a[o]);
          }
          if (a.length) {
            r.insertBefore(t, a[o]);
          } else {
            r.appendChild(t);
          }
        }
      }
      function l(r, o, e) {
        var n = e.css;
        var c = e.media;
        var t = e.sourceMap;
        if (c) {
          r.setAttribute('media', c);
        } else {
          r.removeAttribute('media');
        }
        if (t && typeof btoa !== 'undefined') {
          n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
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
      var u = null;
      var b = 0;
      function d(r, o) {
        var e;
        var n;
        var c;
        if (o.singleton) {
          var t = b++;
          e = u || (u = s(o));
          n = f.bind(null, e, t, false);
          c = f.bind(null, e, t, true);
        } else {
          e = s(o);
          n = l.bind(null, e, o);
          c = function r() {
            m(e);
          };
        }
        n(r);
        return function o(e) {
          if (e) {
            if (e.css === r.css && e.media === r.media && e.sourceMap === r.sourceMap) {
              return;
            }
            n((r = e));
          } else {
            c();
          }
        };
      }
      r.exports = function (r, o) {
        o = o || {};
        if (!o.singleton && typeof o.singleton !== 'boolean') {
          o.singleton = n();
        }
        r = r || [];
        var e = i(r, o);
        return function r(n) {
          n = n || [];
          if (Object.prototype.toString.call(n) !== '[object Array]') {
            return;
          }
          for (var c = 0; c < e.length; c++) {
            var s = e[c];
            var m = a(s);
            t[m].references--;
          }
          var A = i(n, o);
          for (var f = 0; f < e.length; f++) {
            var l = e[f];
            var u = a(l);
            if (t[u].references === 0) {
              t[u].updater();
              t.splice(u, 1);
            }
          }
          e = A;
        };
      };
    },
  },
]);
//# sourceMappingURL=2349.91555cd2ef72c84e9253.js.map?v=91555cd2ef72c84e9253
