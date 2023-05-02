(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [8012],
  {
    38758: (n, e, t) => {
      'use strict';
      t.d(e, { Z: () => s });
      var r = t(94015);
      var o = t.n(r);
      var i = t(23645);
      var a = t.n(i);
      var c = a()(o());
      c.push([
        n.id,
        '/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/xq-light.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;;;;;;;;;;;;;;;CAqBC;AACD,iCAAiC,gBAAgB,EAAE,iBAAiB,EAAE,cAAc,EAAE;AACtF,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,WAAW,EAAE;AAC7C,6BAA6B,yBAAyB,EAAE;AACxD,kCAAkC,YAAY,EAAE;AAChD,oCAAoC,WAAW,EAAE;AACjD,iEAAiE,YAAY,EAAE;AAC/E,iCAAiC;AACjC,iCAAiC;AACjC,iCAAiC,cAAc,EAAE,kBAAkB,EAAE;AACrE,gCAAgC,UAAU,EAAE;AAC5C,8BAA8B,aAAa,EAAE;AAC7C,mCAAmC,WAAW,EAAE;AAChD,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,WAAW,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,mCAAmC,cAAc,EAAE;AACnD,+BAA+B,WAAW,EAAE;;AAE5C,mDAAmD,mBAAmB,EAAE;AACxE,6CAA6C,sBAAsB,CAAC,sBAAsB,CAAC,iBAAiB,EAAE',
          sourcesContent: [
            '/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const s = c;
    },
    23645: (n) => {
      'use strict';
      n.exports = function (n) {
        var e = [];
        e.toString = function e() {
          return this.map(function (e) {
            var t = n(e);
            if (e[2]) {
              return '@media '.concat(e[2], ' {').concat(t, '}');
            }
            return t;
          }).join('');
        };
        e.i = function (n, t, r) {
          if (typeof n === 'string') {
            n = [[null, n, '']];
          }
          var o = {};
          if (r) {
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              if (a != null) {
                o[a] = true;
              }
            }
          }
          for (var c = 0; c < n.length; c++) {
            var s = [].concat(n[c]);
            if (r && o[s[0]]) {
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
    94015: (n) => {
      'use strict';
      function e(n, e) {
        return a(n) || i(n, e) || r(n, e) || t();
      }
      function t() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function r(n, e) {
        if (!n) return;
        if (typeof n === 'string') return o(n, e);
        var t = Object.prototype.toString.call(n).slice(8, -1);
        if (t === 'Object' && n.constructor) t = n.constructor.name;
        if (t === 'Map' || t === 'Set') return Array.from(n);
        if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return o(n, e);
      }
      function o(n, e) {
        if (e == null || e > n.length) e = n.length;
        for (var t = 0, r = new Array(e); t < e; t++) {
          r[t] = n[t];
        }
        return r;
      }
      function i(n, e) {
        var t =
          n &&
          ((typeof Symbol !== 'undefined' && n[Symbol.iterator]) || n['@@iterator']);
        if (t == null) return;
        var r = [];
        var o = true;
        var i = false;
        var a, c;
        try {
          for (t = t.call(n); !(o = (a = t.next()).done); o = true) {
            r.push(a.value);
            if (e && r.length === e) break;
          }
        } catch (s) {
          i = true;
          c = s;
        } finally {
          try {
            if (!o && t['return'] != null) t['return']();
          } finally {
            if (i) throw c;
          }
        }
        return r;
      }
      function a(n) {
        if (Array.isArray(n)) return n;
      }
      n.exports = function n(t) {
        var r = e(t, 4),
          o = r[1],
          i = r[3];
        if (typeof btoa === 'function') {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(i))));
          var c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            a
          );
          var s = '/*# '.concat(c, ' */');
          var l = i.sources.map(function (n) {
            return '/*# sourceURL='.concat(i.sourceRoot || '').concat(n, ' */');
          });
          return [o].concat(l).concat([s]).join('\n');
        }
        return [o].join('\n');
      };
    },
    48012: (n, e, t) => {
      'use strict';
      t.r(e);
      t.d(e, { default: () => s });
      var r = t(93379);
      var o = t.n(r);
      var i = t(38758);
      var a = {};
      a.insert = 'head';
      a.singleton = false;
      var c = o()(i.Z, a);
      const s = i.Z.locals || {};
    },
    93379: (n, e, t) => {
      'use strict';
      var r = (function n() {
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
        return function n(t) {
          if (typeof e[t] === 'undefined') {
            var r = document.querySelector(t);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) {
              try {
                r = r.contentDocument.head;
              } catch (o) {
                r = null;
              }
            }
            e[t] = r;
          }
          return e[t];
        };
      })();
      var i = [];
      function a(n) {
        var e = -1;
        for (var t = 0; t < i.length; t++) {
          if (i[t].identifier === n) {
            e = t;
            break;
          }
        }
        return e;
      }
      function c(n, e) {
        var t = {};
        var r = [];
        for (var o = 0; o < n.length; o++) {
          var c = n[o];
          var s = e.base ? c[0] + e.base : c[0];
          var l = t[s] || 0;
          var A = ''.concat(s, ' ').concat(l);
          t[s] = l + 1;
          var u = a(A);
          var m = { css: c[1], media: c[2], sourceMap: c[3] };
          if (u !== -1) {
            i[u].references++;
            i[u].updater(m);
          } else {
            i.push({ identifier: A, updater: p(m, e), references: 1 });
          }
          r.push(A);
        }
        return r;
      }
      function s(n) {
        var e = document.createElement('style');
        var r = n.attributes || {};
        if (typeof r.nonce === 'undefined') {
          var i = true ? t.nc : 0;
          if (i) {
            r.nonce = i;
          }
        }
        Object.keys(r).forEach(function (n) {
          e.setAttribute(n, r[n]);
        });
        if (typeof n.insert === 'function') {
          n.insert(e);
        } else {
          var a = o(n.insert || 'head');
          if (!a) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          a.appendChild(e);
        }
        return e;
      }
      function l(n) {
        if (n.parentNode === null) {
          return false;
        }
        n.parentNode.removeChild(n);
      }
      var A = (function n() {
        var e = [];
        return function n(t, r) {
          e[t] = r;
          return e.filter(Boolean).join('\n');
        };
      })();
      function u(n, e, t, r) {
        var o = t
          ? ''
          : r.media
          ? '@media '.concat(r.media, ' {').concat(r.css, '}')
          : r.css;
        if (n.styleSheet) {
          n.styleSheet.cssText = A(e, o);
        } else {
          var i = document.createTextNode(o);
          var a = n.childNodes;
          if (a[e]) {
            n.removeChild(a[e]);
          }
          if (a.length) {
            n.insertBefore(i, a[e]);
          } else {
            n.appendChild(i);
          }
        }
      }
      function m(n, e, t) {
        var r = t.css;
        var o = t.media;
        var i = t.sourceMap;
        if (o) {
          n.setAttribute('media', o);
        } else {
          n.removeAttribute('media');
        }
        if (i && typeof btoa !== 'undefined') {
          r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          );
        }
        if (n.styleSheet) {
          n.styleSheet.cssText = r;
        } else {
          while (n.firstChild) {
            n.removeChild(n.firstChild);
          }
          n.appendChild(document.createTextNode(r));
        }
      }
      var f = null;
      var h = 0;
      function p(n, e) {
        var t;
        var r;
        var o;
        if (e.singleton) {
          var i = h++;
          t = f || (f = s(e));
          r = u.bind(null, t, i, false);
          o = u.bind(null, t, i, true);
        } else {
          t = s(e);
          r = m.bind(null, t, e);
          o = function n() {
            l(t);
          };
        }
        r(n);
        return function e(t) {
          if (t) {
            if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap) {
              return;
            }
            r((n = t));
          } else {
            o();
          }
        };
      }
      n.exports = function (n, e) {
        e = e || {};
        if (!e.singleton && typeof e.singleton !== 'boolean') {
          e.singleton = r();
        }
        n = n || [];
        var t = c(n, e);
        return function n(r) {
          r = r || [];
          if (Object.prototype.toString.call(r) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < t.length; o++) {
            var s = t[o];
            var l = a(s);
            i[l].references--;
          }
          var A = c(r, e);
          for (var u = 0; u < t.length; u++) {
            var m = t[u];
            var f = a(m);
            if (i[f].references === 0) {
              i[f].updater();
              i.splice(f, 1);
            }
          }
          t = A;
        };
      };
    },
  },
]);
//# sourceMappingURL=8012.e4c8f67dc497d26c16fc.js.map?v=e4c8f67dc497d26c16fc
