(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6005],
  {
    88334: (e, r, n) => {
      'use strict';
      n.d(r, { Z: () => a });
      var t = n(94015);
      var o = n.n(t);
      var c = n(23645);
      var i = n.n(c);
      var s = i()(o());
      s.push([
        e.id,
        '/*\n\n    Name:       seti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)\n\n*/\n\n\n.cm-s-seti.CodeMirror {\n  background-color: #151718 !important;\n  color: #CFD2D1 !important;\n  border: none;\n}\n.cm-s-seti .CodeMirror-gutters {\n  color: #404b53;\n  background-color: #0E1112;\n  border: none;\n}\n.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti span.cm-comment { color: #41535b; }\n.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }\n.cm-s-seti span.cm-number { color: #cd3f45; }\n.cm-s-seti span.cm-variable { color: #55b5db; }\n.cm-s-seti span.cm-variable-2 { color: #a074c4; }\n.cm-s-seti span.cm-def { color: #55b5db; }\n.cm-s-seti span.cm-keyword { color: #ff79c6; }\n.cm-s-seti span.cm-operator { color: #9fca56; }\n.cm-s-seti span.cm-keyword { color: #e6cd69; }\n.cm-s-seti span.cm-atom { color: #cd3f45; }\n.cm-s-seti span.cm-meta { color: #55b5db; }\n.cm-s-seti span.cm-tag { color: #55b5db; }\n.cm-s-seti span.cm-attribute { color: #9fca56; }\n.cm-s-seti span.cm-qualifier { color: #9fca56; }\n.cm-s-seti span.cm-property { color: #a074c4; }\n.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }\n.cm-s-seti span.cm-builtin { color: #9fca56; }\n.cm-s-seti .CodeMirror-activeline-background { background: #101213; }\n.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/seti.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;AACA,gCAAgC,+BAA+B,EAAE;AACjE,oCAAoC,cAAc,EAAE;AACpD,wDAAwD,qCAAqC,EAAE;AAC/F,8IAA8I,qCAAqC,EAAE;AACrL,6JAA6J,qCAAqC,EAAE;AACpM,6BAA6B,cAAc,EAAE;AAC7C,yDAAyD,cAAc,EAAE;AACzE,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yBAAyB,cAAc,EAAE;AACzC,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,0BAA0B,cAAc,EAAE;AAC1C,yBAAyB,cAAc,EAAE;AACzC,+BAA+B,cAAc,EAAE;AAC/C,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,yDAAyD,cAAc,EAAE;AACzE,6BAA6B,cAAc,EAAE;AAC7C,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,0BAA0B,EAAE,uBAAuB,EAAE',
          sourcesContent: [
            '/*\n\n    Name:       seti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)\n\n*/\n\n\n.cm-s-seti.CodeMirror {\n  background-color: #151718 !important;\n  color: #CFD2D1 !important;\n  border: none;\n}\n.cm-s-seti .CodeMirror-gutters {\n  color: #404b53;\n  background-color: #0E1112;\n  border: none;\n}\n.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-seti span.cm-comment { color: #41535b; }\n.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }\n.cm-s-seti span.cm-number { color: #cd3f45; }\n.cm-s-seti span.cm-variable { color: #55b5db; }\n.cm-s-seti span.cm-variable-2 { color: #a074c4; }\n.cm-s-seti span.cm-def { color: #55b5db; }\n.cm-s-seti span.cm-keyword { color: #ff79c6; }\n.cm-s-seti span.cm-operator { color: #9fca56; }\n.cm-s-seti span.cm-keyword { color: #e6cd69; }\n.cm-s-seti span.cm-atom { color: #cd3f45; }\n.cm-s-seti span.cm-meta { color: #55b5db; }\n.cm-s-seti span.cm-tag { color: #55b5db; }\n.cm-s-seti span.cm-attribute { color: #9fca56; }\n.cm-s-seti span.cm-qualifier { color: #9fca56; }\n.cm-s-seti span.cm-property { color: #a074c4; }\n.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }\n.cm-s-seti span.cm-builtin { color: #9fca56; }\n.cm-s-seti .CodeMirror-activeline-background { background: #101213; }\n.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const a = s;
    },
    23645: (e) => {
      'use strict';
      e.exports = function (e) {
        var r = [];
        r.toString = function r() {
          return this.map(function (r) {
            var n = e(r);
            if (r[2]) {
              return '@media '.concat(r[2], ' {').concat(n, '}');
            }
            return n;
          }).join('');
        };
        r.i = function (e, n, t) {
          if (typeof e === 'string') {
            e = [[null, e, '']];
          }
          var o = {};
          if (t) {
            for (var c = 0; c < this.length; c++) {
              var i = this[c][0];
              if (i != null) {
                o[i] = true;
              }
            }
          }
          for (var s = 0; s < e.length; s++) {
            var a = [].concat(e[s]);
            if (t && o[a[0]]) {
              continue;
            }
            if (n) {
              if (!a[2]) {
                a[2] = n;
              } else {
                a[2] = ''.concat(n, ' and ').concat(a[2]);
              }
            }
            r.push(a);
          }
        };
        return r;
      };
    },
    94015: (e) => {
      'use strict';
      function r(e, r) {
        return i(e) || c(e, r) || t(e, r) || n();
      }
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function t(e, r) {
        if (!e) return;
        if (typeof e === 'string') return o(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === 'Object' && e.constructor) n = e.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(e);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return o(e, r);
      }
      function o(e, r) {
        if (r == null || r > e.length) r = e.length;
        for (var n = 0, t = new Array(r); n < r; n++) {
          t[n] = e[n];
        }
        return t;
      }
      function c(e, r) {
        var n =
          e &&
          ((typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator']);
        if (n == null) return;
        var t = [];
        var o = true;
        var c = false;
        var i, s;
        try {
          for (n = n.call(e); !(o = (i = n.next()).done); o = true) {
            t.push(i.value);
            if (r && t.length === r) break;
          }
        } catch (a) {
          c = true;
          s = a;
        } finally {
          try {
            if (!o && n['return'] != null) n['return']();
          } finally {
            if (c) throw s;
          }
        }
        return t;
      }
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      e.exports = function e(n) {
        var t = r(n, 4),
          o = t[1],
          c = t[3];
        if (typeof btoa === 'function') {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(c))));
          var s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            i
          );
          var a = '/*# '.concat(s, ' */');
          var A = c.sources.map(function (e) {
            return '/*# sourceURL='.concat(c.sourceRoot || '').concat(e, ' */');
          });
          return [o].concat(A).concat([a]).join('\n');
        }
        return [o].join('\n');
      };
    },
    26005: (e, r, n) => {
      'use strict';
      n.r(r);
      n.d(r, { default: () => a });
      var t = n(93379);
      var o = n.n(t);
      var c = n(88334);
      var i = {};
      i.insert = 'head';
      i.singleton = false;
      var s = o()(c.Z, i);
      const a = c.Z.locals || {};
    },
    93379: (e, r, n) => {
      'use strict';
      var t = (function e() {
        var r;
        return function e() {
          if (typeof r === 'undefined') {
            r = Boolean(window && document && document.all && !window.atob);
          }
          return r;
        };
      })();
      var o = (function e() {
        var r = {};
        return function e(n) {
          if (typeof r[n] === 'undefined') {
            var t = document.querySelector(n);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {
              try {
                t = t.contentDocument.head;
              } catch (o) {
                t = null;
              }
            }
            r[n] = t;
          }
          return r[n];
        };
      })();
      var c = [];
      function i(e) {
        var r = -1;
        for (var n = 0; n < c.length; n++) {
          if (c[n].identifier === e) {
            r = n;
            break;
          }
        }
        return r;
      }
      function s(e, r) {
        var n = {};
        var t = [];
        for (var o = 0; o < e.length; o++) {
          var s = e[o];
          var a = r.base ? s[0] + r.base : s[0];
          var A = n[a] || 0;
          var l = ''.concat(a, ' ').concat(A);
          n[a] = A + 1;
          var m = i(l);
          var u = { css: s[1], media: s[2], sourceMap: s[3] };
          if (m !== -1) {
            c[m].references++;
            c[m].updater(u);
          } else {
            c.push({ identifier: l, updater: p(u, r), references: 1 });
          }
          t.push(l);
        }
        return t;
      }
      function a(e) {
        var r = document.createElement('style');
        var t = e.attributes || {};
        if (typeof t.nonce === 'undefined') {
          var c = true ? n.nc : 0;
          if (c) {
            t.nonce = c;
          }
        }
        Object.keys(t).forEach(function (e) {
          r.setAttribute(e, t[e]);
        });
        if (typeof e.insert === 'function') {
          e.insert(r);
        } else {
          var i = o(e.insert || 'head');
          if (!i) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          i.appendChild(r);
        }
        return r;
      }
      function A(e) {
        if (e.parentNode === null) {
          return false;
        }
        e.parentNode.removeChild(e);
      }
      var l = (function e() {
        var r = [];
        return function e(n, t) {
          r[n] = t;
          return r.filter(Boolean).join('\n');
        };
      })();
      function m(e, r, n, t) {
        var o = n
          ? ''
          : t.media
          ? '@media '.concat(t.media, ' {').concat(t.css, '}')
          : t.css;
        if (e.styleSheet) {
          e.styleSheet.cssText = l(r, o);
        } else {
          var c = document.createTextNode(o);
          var i = e.childNodes;
          if (i[r]) {
            e.removeChild(i[r]);
          }
          if (i.length) {
            e.insertBefore(c, i[r]);
          } else {
            e.appendChild(c);
          }
        }
      }
      function u(e, r, n) {
        var t = n.css;
        var o = n.media;
        var c = n.sourceMap;
        if (o) {
          e.setAttribute('media', o);
        } else {
          e.removeAttribute('media');
        }
        if (c && typeof btoa !== 'undefined') {
          t += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
            ' */'
          );
        }
        if (e.styleSheet) {
          e.styleSheet.cssText = t;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(t));
        }
      }
      var d = null;
      var f = 0;
      function p(e, r) {
        var n;
        var t;
        var o;
        if (r.singleton) {
          var c = f++;
          n = d || (d = a(r));
          t = m.bind(null, n, c, false);
          o = m.bind(null, n, c, true);
        } else {
          n = a(r);
          t = u.bind(null, n, r);
          o = function e() {
            A(n);
          };
        }
        t(e);
        return function r(n) {
          if (n) {
            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) {
              return;
            }
            t((e = n));
          } else {
            o();
          }
        };
      }
      e.exports = function (e, r) {
        r = r || {};
        if (!r.singleton && typeof r.singleton !== 'boolean') {
          r.singleton = t();
        }
        e = e || [];
        var n = s(e, r);
        return function e(t) {
          t = t || [];
          if (Object.prototype.toString.call(t) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < n.length; o++) {
            var a = n[o];
            var A = i(a);
            c[A].references--;
          }
          var l = s(t, r);
          for (var m = 0; m < n.length; m++) {
            var u = n[m];
            var d = i(u);
            if (c[d].references === 0) {
              c[d].updater();
              c.splice(d, 1);
            }
          }
          n = l;
        };
      };
    },
  },
]);
//# sourceMappingURL=6005.cda1ecd972909c2a0250.js.map?v=cda1ecd972909c2a0250
