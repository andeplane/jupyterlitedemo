(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [8059],
  {
    82663: (e, r, c) => {
      'use strict';
      c.d(r, { Z: () => a });
      var n = c(94015);
      var o = c.n(n);
      var A = c(23645);
      var t = c.n(A);
      var i = t()(o());
      i.push([
        e.id,
        '/*\nICEcoder default theme by Matt Pass, used in code editor available at https://icecoder.net\n*/\n\n.cm-s-icecoder { color: #666; background: #1d1d1b; }\n\n.cm-s-icecoder span.cm-keyword { color: #eee; font-weight:bold; }  /* off-white 1 */\n.cm-s-icecoder span.cm-atom { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-number { color: #6cb5d9; }                  /* blue */\n.cm-s-icecoder span.cm-def { color: #b9ca4a; }                     /* green */\n\n.cm-s-icecoder span.cm-variable { color: #6cb5d9; }                /* blue */\n.cm-s-icecoder span.cm-variable-2 { color: #cc1e5c; }              /* pink */\n.cm-s-icecoder span.cm-variable-3, .cm-s-icecoder span.cm-type { color: #f9602c; } /* orange */\n\n.cm-s-icecoder span.cm-property { color: #eee; }                   /* off-white 1 */\n.cm-s-icecoder span.cm-operator { color: #9179bb; }                /* purple */\n.cm-s-icecoder span.cm-comment { color: #97a3aa; }                 /* grey-blue */\n\n.cm-s-icecoder span.cm-string { color: #b9ca4a; }                  /* green */\n.cm-s-icecoder span.cm-string-2 { color: #6cb5d9; }                /* blue */\n\n.cm-s-icecoder span.cm-meta { color: #555; }                       /* grey */\n\n.cm-s-icecoder span.cm-qualifier { color: #555; }                  /* grey */\n.cm-s-icecoder span.cm-builtin { color: #214e7b; }                 /* bright blue */\n.cm-s-icecoder span.cm-bracket { color: #cc7; }                    /* grey-yellow */\n\n.cm-s-icecoder span.cm-tag { color: #e8e8e8; }                     /* off-white 2 */\n.cm-s-icecoder span.cm-attribute { color: #099; }                  /* teal */\n\n.cm-s-icecoder span.cm-header { color: #6a0d6a; }                  /* purple-pink */\n.cm-s-icecoder span.cm-quote { color: #186718; }                   /* dark green */\n.cm-s-icecoder span.cm-hr { color: #888; }                         /* mid-grey */\n.cm-s-icecoder span.cm-link { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-error { color: #d00; }                      /* red */\n\n.cm-s-icecoder .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-icecoder div.CodeMirror-selected { color: #fff; background: #037; }\n.cm-s-icecoder .CodeMirror-gutters { background: #1d1d1b; min-width: 41px; border-right: 0; }\n.cm-s-icecoder .CodeMirror-linenumber { color: #555; cursor: default; }\n.cm-s-icecoder .CodeMirror-matchingbracket { color: #fff !important; background: #555 !important; }\n.cm-s-icecoder .CodeMirror-activeline-background { background: #000; }\n',
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/icecoder.css'],
          names: [],
          mappings:
            'AAAA;;CAEC;;AAED,iBAAiB,WAAW,EAAE,mBAAmB,EAAE;;AAEnD,iCAAiC,WAAW,EAAE,gBAAgB,EAAE,GAAG,gBAAgB;AACnF,8BAA8B,cAAc,EAAE,qBAAqB,WAAW;AAC9E,gCAAgC,cAAc,EAAE,mBAAmB,SAAS;AAC5E,6BAA6B,cAAc,EAAE,sBAAsB,UAAU;;AAE7E,kCAAkC,cAAc,EAAE,iBAAiB,SAAS;AAC5E,oCAAoC,cAAc,EAAE,eAAe,SAAS;AAC5E,iEAAiE,cAAc,EAAE,EAAE,WAAW;;AAE9F,kCAAkC,WAAW,EAAE,oBAAoB,gBAAgB;AACnF,kCAAkC,cAAc,EAAE,iBAAiB,WAAW;AAC9E,iCAAiC,cAAc,EAAE,kBAAkB,cAAc;;AAEjF,gCAAgC,cAAc,EAAE,mBAAmB,UAAU;AAC7E,kCAAkC,cAAc,EAAE,iBAAiB,SAAS;;AAE5E,8BAA8B,WAAW,EAAE,wBAAwB,SAAS;;AAE5E,mCAAmC,WAAW,EAAE,mBAAmB,SAAS;AAC5E,iCAAiC,cAAc,EAAE,kBAAkB,gBAAgB;AACnF,iCAAiC,WAAW,EAAE,qBAAqB,gBAAgB;;AAEnF,6BAA6B,cAAc,EAAE,sBAAsB,gBAAgB;AACnF,mCAAmC,WAAW,EAAE,mBAAmB,SAAS;;AAE5E,gCAAgC,cAAc,EAAE,mBAAmB,gBAAgB;AACnF,+BAA+B,cAAc,EAAE,oBAAoB,eAAe;AAClF,4BAA4B,WAAW,EAAE,0BAA0B,aAAa;AAChF,8BAA8B,cAAc,EAAE,qBAAqB,WAAW;AAC9E,+BAA+B,WAAW,EAAE,uBAAuB,QAAQ;;AAE3E,oCAAoC,4BAA4B,EAAE;AAClE,yCAAyC,WAAW,EAAE,gBAAgB,EAAE;AACxE,qCAAqC,mBAAmB,EAAE,eAAe,EAAE,eAAe,EAAE;AAC5F,wCAAwC,WAAW,EAAE,eAAe,EAAE;AACtE,6CAA6C,sBAAsB,EAAE,2BAA2B,EAAE;AAClG,mDAAmD,gBAAgB,EAAE',
          sourcesContent: [
            '/*\nICEcoder default theme by Matt Pass, used in code editor available at https://icecoder.net\n*/\n\n.cm-s-icecoder { color: #666; background: #1d1d1b; }\n\n.cm-s-icecoder span.cm-keyword { color: #eee; font-weight:bold; }  /* off-white 1 */\n.cm-s-icecoder span.cm-atom { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-number { color: #6cb5d9; }                  /* blue */\n.cm-s-icecoder span.cm-def { color: #b9ca4a; }                     /* green */\n\n.cm-s-icecoder span.cm-variable { color: #6cb5d9; }                /* blue */\n.cm-s-icecoder span.cm-variable-2 { color: #cc1e5c; }              /* pink */\n.cm-s-icecoder span.cm-variable-3, .cm-s-icecoder span.cm-type { color: #f9602c; } /* orange */\n\n.cm-s-icecoder span.cm-property { color: #eee; }                   /* off-white 1 */\n.cm-s-icecoder span.cm-operator { color: #9179bb; }                /* purple */\n.cm-s-icecoder span.cm-comment { color: #97a3aa; }                 /* grey-blue */\n\n.cm-s-icecoder span.cm-string { color: #b9ca4a; }                  /* green */\n.cm-s-icecoder span.cm-string-2 { color: #6cb5d9; }                /* blue */\n\n.cm-s-icecoder span.cm-meta { color: #555; }                       /* grey */\n\n.cm-s-icecoder span.cm-qualifier { color: #555; }                  /* grey */\n.cm-s-icecoder span.cm-builtin { color: #214e7b; }                 /* bright blue */\n.cm-s-icecoder span.cm-bracket { color: #cc7; }                    /* grey-yellow */\n\n.cm-s-icecoder span.cm-tag { color: #e8e8e8; }                     /* off-white 2 */\n.cm-s-icecoder span.cm-attribute { color: #099; }                  /* teal */\n\n.cm-s-icecoder span.cm-header { color: #6a0d6a; }                  /* purple-pink */\n.cm-s-icecoder span.cm-quote { color: #186718; }                   /* dark green */\n.cm-s-icecoder span.cm-hr { color: #888; }                         /* mid-grey */\n.cm-s-icecoder span.cm-link { color: #e1c76e; }                    /* yellow */\n.cm-s-icecoder span.cm-error { color: #d00; }                      /* red */\n\n.cm-s-icecoder .CodeMirror-cursor { border-left: 1px solid white; }\n.cm-s-icecoder div.CodeMirror-selected { color: #fff; background: #037; }\n.cm-s-icecoder .CodeMirror-gutters { background: #1d1d1b; min-width: 41px; border-right: 0; }\n.cm-s-icecoder .CodeMirror-linenumber { color: #555; cursor: default; }\n.cm-s-icecoder .CodeMirror-matchingbracket { color: #fff !important; background: #555 !important; }\n.cm-s-icecoder .CodeMirror-activeline-background { background: #000; }\n',
          ],
          sourceRoot: '',
        },
      ]);
      const a = i;
    },
    23645: (e) => {
      'use strict';
      e.exports = function (e) {
        var r = [];
        r.toString = function r() {
          return this.map(function (r) {
            var c = e(r);
            if (r[2]) {
              return '@media '.concat(r[2], ' {').concat(c, '}');
            }
            return c;
          }).join('');
        };
        r.i = function (e, c, n) {
          if (typeof e === 'string') {
            e = [[null, e, '']];
          }
          var o = {};
          if (n) {
            for (var A = 0; A < this.length; A++) {
              var t = this[A][0];
              if (t != null) {
                o[t] = true;
              }
            }
          }
          for (var i = 0; i < e.length; i++) {
            var a = [].concat(e[i]);
            if (n && o[a[0]]) {
              continue;
            }
            if (c) {
              if (!a[2]) {
                a[2] = c;
              } else {
                a[2] = ''.concat(c, ' and ').concat(a[2]);
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
        return t(e) || A(e, r) || n(e, r) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function n(e, r) {
        if (!e) return;
        if (typeof e === 'string') return o(e, r);
        var c = Object.prototype.toString.call(e).slice(8, -1);
        if (c === 'Object' && e.constructor) c = e.constructor.name;
        if (c === 'Map' || c === 'Set') return Array.from(e);
        if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
          return o(e, r);
      }
      function o(e, r) {
        if (r == null || r > e.length) r = e.length;
        for (var c = 0, n = new Array(r); c < r; c++) {
          n[c] = e[c];
        }
        return n;
      }
      function A(e, r) {
        var c =
          e &&
          ((typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator']);
        if (c == null) return;
        var n = [];
        var o = true;
        var A = false;
        var t, i;
        try {
          for (c = c.call(e); !(o = (t = c.next()).done); o = true) {
            n.push(t.value);
            if (r && n.length === r) break;
          }
        } catch (a) {
          A = true;
          i = a;
        } finally {
          try {
            if (!o && c['return'] != null) c['return']();
          } finally {
            if (A) throw i;
          }
        }
        return n;
      }
      function t(e) {
        if (Array.isArray(e)) return e;
      }
      e.exports = function e(c) {
        var n = r(c, 4),
          o = n[1],
          A = n[3];
        if (typeof btoa === 'function') {
          var t = btoa(unescape(encodeURIComponent(JSON.stringify(A))));
          var i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            t
          );
          var a = '/*# '.concat(i, ' */');
          var s = A.sources.map(function (e) {
            return '/*# sourceURL='.concat(A.sourceRoot || '').concat(e, ' */');
          });
          return [o].concat(s).concat([a]).join('\n');
        }
        return [o].join('\n');
      };
    },
    78059: (e, r, c) => {
      'use strict';
      c.r(r);
      c.d(r, { default: () => a });
      var n = c(93379);
      var o = c.n(n);
      var A = c(82663);
      var t = {};
      t.insert = 'head';
      t.singleton = false;
      var i = o()(A.Z, t);
      const a = A.Z.locals || {};
    },
    93379: (e, r, c) => {
      'use strict';
      var n = (function e() {
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
        return function e(c) {
          if (typeof r[c] === 'undefined') {
            var n = document.querySelector(c);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) {
              try {
                n = n.contentDocument.head;
              } catch (o) {
                n = null;
              }
            }
            r[c] = n;
          }
          return r[c];
        };
      })();
      var A = [];
      function t(e) {
        var r = -1;
        for (var c = 0; c < A.length; c++) {
          if (A[c].identifier === e) {
            r = c;
            break;
          }
        }
        return r;
      }
      function i(e, r) {
        var c = {};
        var n = [];
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          var a = r.base ? i[0] + r.base : i[0];
          var s = c[a] || 0;
          var l = ''.concat(a, ' ').concat(s);
          c[a] = s + 1;
          var d = t(l);
          var m = { css: i[1], media: i[2], sourceMap: i[3] };
          if (d !== -1) {
            A[d].references++;
            A[d].updater(m);
          } else {
            A.push({ identifier: l, updater: p(m, r), references: 1 });
          }
          n.push(l);
        }
        return n;
      }
      function a(e) {
        var r = document.createElement('style');
        var n = e.attributes || {};
        if (typeof n.nonce === 'undefined') {
          var A = true ? c.nc : 0;
          if (A) {
            n.nonce = A;
          }
        }
        Object.keys(n).forEach(function (e) {
          r.setAttribute(e, n[e]);
        });
        if (typeof e.insert === 'function') {
          e.insert(r);
        } else {
          var t = o(e.insert || 'head');
          if (!t) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          t.appendChild(r);
        }
        return r;
      }
      function s(e) {
        if (e.parentNode === null) {
          return false;
        }
        e.parentNode.removeChild(e);
      }
      var l = (function e() {
        var r = [];
        return function e(c, n) {
          r[c] = n;
          return r.filter(Boolean).join('\n');
        };
      })();
      function d(e, r, c, n) {
        var o = c
          ? ''
          : n.media
          ? '@media '.concat(n.media, ' {').concat(n.css, '}')
          : n.css;
        if (e.styleSheet) {
          e.styleSheet.cssText = l(r, o);
        } else {
          var A = document.createTextNode(o);
          var t = e.childNodes;
          if (t[r]) {
            e.removeChild(t[r]);
          }
          if (t.length) {
            e.insertBefore(A, t[r]);
          } else {
            e.appendChild(A);
          }
        }
      }
      function m(e, r, c) {
        var n = c.css;
        var o = c.media;
        var A = c.sourceMap;
        if (o) {
          e.setAttribute('media', o);
        } else {
          e.removeAttribute('media');
        }
        if (A && typeof btoa !== 'undefined') {
          n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(A)))),
            ' */'
          );
        }
        if (e.styleSheet) {
          e.styleSheet.cssText = n;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(n));
        }
      }
      var u = null;
      var f = 0;
      function p(e, r) {
        var c;
        var n;
        var o;
        if (r.singleton) {
          var A = f++;
          c = u || (u = a(r));
          n = d.bind(null, c, A, false);
          o = d.bind(null, c, A, true);
        } else {
          c = a(r);
          n = m.bind(null, c, r);
          o = function e() {
            s(c);
          };
        }
        n(e);
        return function r(c) {
          if (c) {
            if (c.css === e.css && c.media === e.media && c.sourceMap === e.sourceMap) {
              return;
            }
            n((e = c));
          } else {
            o();
          }
        };
      }
      e.exports = function (e, r) {
        r = r || {};
        if (!r.singleton && typeof r.singleton !== 'boolean') {
          r.singleton = n();
        }
        e = e || [];
        var c = i(e, r);
        return function e(n) {
          n = n || [];
          if (Object.prototype.toString.call(n) !== '[object Array]') {
            return;
          }
          for (var o = 0; o < c.length; o++) {
            var a = c[o];
            var s = t(a);
            A[s].references--;
          }
          var l = i(n, r);
          for (var d = 0; d < c.length; d++) {
            var m = c[d];
            var u = t(m);
            if (A[u].references === 0) {
              A[u].updater();
              A.splice(u, 1);
            }
          }
          c = l;
        };
      };
    },
  },
]);
//# sourceMappingURL=8059.6011120485fc3c4868d4.js.map?v=6011120485fc3c4868d4
