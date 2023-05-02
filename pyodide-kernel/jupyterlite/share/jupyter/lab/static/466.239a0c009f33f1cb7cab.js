(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [466],
  {
    10859: (e, t, n) => {
      'use strict';
      n.r(t);
      n.d(t, {
        Cache: () => m,
        Selector: () => _,
        Style: () => w,
        Rule: () => S,
        FreeStyle: () => x,
        create: () => b,
      });
      let r = 0;
      const s = Object.create(null);
      const i = [
        'animation-iteration-count',
        'border-image-outset',
        'border-image-slice',
        'border-image-width',
        'box-flex',
        'box-flex-group',
        'box-ordinal-group',
        'column-count',
        'columns',
        'counter-increment',
        'counter-reset',
        'flex',
        'flex-grow',
        'flex-positive',
        'flex-shrink',
        'flex-negative',
        'flex-order',
        'font-weight',
        'grid-area',
        'grid-column',
        'grid-column-end',
        'grid-column-span',
        'grid-column-start',
        'grid-row',
        'grid-row-end',
        'grid-row-span',
        'grid-row-start',
        'line-clamp',
        'line-height',
        'opacity',
        'order',
        'orphans',
        'tab-size',
        'widows',
        'z-index',
        'zoom',
        'fill-opacity',
        'flood-opacity',
        'stop-opacity',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',
      ];
      for (const k of i) {
        for (const e of ['-webkit-', '-ms-', '-moz-', '-o-', '']) {
          s[e + k] = true;
        }
      }
      function a(e) {
        return e.replace(/[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g, '\\$&');
      }
      function o(e) {
        return e
          .replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)
          .replace(/^ms-/, '-ms-');
      }
      function c(e) {
        let t = 5381;
        let n = e.length;
        while (n--) t = (t * 33) ^ e.charCodeAt(n);
        return (t >>> 0).toString(36);
      }
      function u(e, t) {
        if (t && typeof t === 'number' && !s[e]) {
          return `${e}:${t}px`;
        }
        return `${e}:${t}`;
      }
      function l(e) {
        return e.sort((e, t) => (e[0] > t[0] ? 1 : -1));
      }
      function h(e, t) {
        const n = [];
        const r = [];
        for (const s of Object.keys(e)) {
          const t = s.trim();
          const i = e[s];
          if (t.charCodeAt(0) !== 36 && i != null) {
            if (typeof i === 'object' && !Array.isArray(i)) {
              r.push([t, i]);
            } else {
              n.push([o(t), i]);
            }
          }
        }
        return { style: f(l(n)), nested: t ? r : l(r), isUnique: !!e.$unique };
      }
      function f(e) {
        return e
          .map(([e, t]) => {
            if (!Array.isArray(t)) return u(e, t);
            return t.map((t) => u(e, t)).join(';');
          })
          .join(';');
      }
      function d(e, t) {
        if (e.indexOf('&') === -1) return `${t} ${e}`;
        return e.replace(/&/g, t);
      }
      function g(e, t, n, r, s) {
        const { style: i, nested: a, isUnique: o } = h(t, e !== '');
        let c = i;
        if (e.charCodeAt(0) === 64) {
          const t = { selector: e, styles: [], rules: [], style: s ? '' : i };
          n.push(t);
          if (i && s) {
            t.styles.push({ selector: s, style: i, isUnique: o });
          }
          for (const [e, n] of a) {
            c += e + g(e, n, t.rules, t.styles, s);
          }
        } else {
          const t = s ? d(e, s) : e;
          if (i) r.push({ selector: t, style: i, isUnique: o });
          for (const [e, s] of a) {
            c += e + g(e, s, n, r, t);
          }
        }
        return c;
      }
      function y(e, t, n, s, i, a) {
        for (const { selector: o, style: c, isUnique: u } of s) {
          const n = a ? d(o, i) : o;
          const s = u ? `u\0${(++r).toString(36)}` : `s\0${t}\0${c}`;
          const l = new w(c, s);
          l.add(new _(n, `k\0${t}\0${n}`));
          e.add(l);
        }
        for (const { selector: r, style: o, rules: c, styles: u } of n) {
          const n = new S(r, o, `r\0${t}\0${r}\0${o}`);
          y(n, t, c, u, i, a);
          e.add(n);
        }
      }
      function p(e) {
        let t = '';
        for (let n = 0; n < e.length; n++) t += e[n];
        return t;
      }
      const v = {
        add: () => undefined,
        change: () => undefined,
        remove: () => undefined,
      };
      class m {
        constructor(e = v) {
          this.changes = e;
          this.sheet = [];
          this.changeId = 0;
          this._keys = [];
          this._children = Object.create(null);
          this._counters = Object.create(null);
        }
        add(e) {
          const t = this._counters[e.id] || 0;
          const n = this._children[e.id] || e.clone();
          this._counters[e.id] = t + 1;
          if (t === 0) {
            this._children[n.id] = n;
            this._keys.push(n.id);
            this.sheet.push(n.getStyles());
            this.changeId++;
            this.changes.add(n, this._keys.length - 1);
          } else if (n instanceof m && e instanceof m) {
            const t = this._keys.indexOf(e.id);
            const r = n.changeId;
            n.merge(e);
            if (n.changeId !== r) {
              this.sheet.splice(t, 1, n.getStyles());
              this.changeId++;
              this.changes.change(n, t, t);
            }
          }
        }
        remove(e) {
          const t = this._counters[e.id];
          if (t) {
            this._counters[e.id] = t - 1;
            const n = this._children[e.id];
            const r = this._keys.indexOf(n.id);
            if (t === 1) {
              delete this._counters[e.id];
              delete this._children[e.id];
              this._keys.splice(r, 1);
              this.sheet.splice(r, 1);
              this.changeId++;
              this.changes.remove(n, r);
            } else if (n instanceof m && e instanceof m) {
              const t = n.changeId;
              n.unmerge(e);
              if (n.changeId !== t) {
                this.sheet.splice(r, 1, n.getStyles());
                this.changeId++;
                this.changes.change(n, r, r);
              }
            }
          }
        }
        values() {
          return this._keys.map((e) => this._children[e]);
        }
        merge(e) {
          for (const t of e.values()) this.add(t);
          return this;
        }
        unmerge(e) {
          for (const t of e.values()) this.remove(t);
          return this;
        }
        clone() {
          return new m().merge(this);
        }
      }
      class _ {
        constructor(e, t) {
          this.selector = e;
          this.id = t;
        }
        getStyles() {
          return this.selector;
        }
        clone() {
          return this;
        }
      }
      class w extends m {
        constructor(e, t) {
          super();
          this.style = e;
          this.id = t;
        }
        getStyles() {
          return `${this.sheet.join(',')}{${this.style}}`;
        }
        clone() {
          return new w(this.style, this.id).merge(this);
        }
      }
      class S extends m {
        constructor(e, t, n) {
          super();
          this.rule = e;
          this.style = t;
          this.id = n;
        }
        getStyles() {
          return `${this.rule}{${this.style}${p(this.sheet)}}`;
        }
        clone() {
          return new S(this.rule, this.style, this.id).merge(this);
        }
      }
      function $(e, t) {
        const n = `f${c(e)}`;
        if (true) return n;
        return `${t.$displayName}_${n}`;
      }
      class x extends m {
        constructor(e, t) {
          super(t);
          this.id = e;
        }
        registerStyle(e) {
          const t = [];
          const n = [];
          const r = g('&', e, t, n);
          const s = $(r, e);
          const i = `.${true ? s : 0}`;
          y(this, r, t, n, i, true);
          return s;
        }
        registerKeyframes(e) {
          return this.registerHashRule('@keyframes', e);
        }
        registerHashRule(e, t) {
          const n = [];
          const r = [];
          const s = g('', t, n, r);
          const i = $(s, t);
          const a = `${e} ${true ? i : 0}`;
          const o = new S(a, '', `h\0${s}\0${e}`);
          y(o, s, n, r, '', false);
          this.add(o);
          return i;
        }
        registerRule(e, t) {
          const n = [];
          const r = [];
          const s = g(e, t, n, r);
          y(this, s, n, r, '', false);
        }
        registerCss(e) {
          return this.registerRule('', e);
        }
        getStyles() {
          return p(this.sheet);
        }
        clone() {
          return new x(this.id, this.changes).merge(this);
        }
      }
      function b(e) {
        return new x(`f${(++r).toString(36)}`, e);
      }
    },
    466: (e, t, n) => {
      'use strict';
      n.r(t);
      n.d(t, {
        TypeStyle: () => f,
        classes: () => o,
        createTypeStyle: () => k,
        cssRaw: () => p,
        cssRule: () => v,
        extend: () => c,
        fontFace: () => _,
        forceRenderStyles: () => m,
        getStyles: () => w,
        keyframes: () => S,
        media: () => u,
        reinit: () => $,
        setStylesTarget: () => y,
        style: () => x,
        stylesheet: () => b,
        types: () => d,
      });
      var r = n(10859);
      function s(e) {
        var t = {};
        for (var n in e) {
          var r = e[n];
          if (n === '$nest') {
            var i = r;
            for (var a in i) {
              var o = i[a];
              t[a] = s(o);
            }
          } else if (n === '$debugName') {
            t.$displayName = r;
          } else {
            t[n] = r;
          }
        }
        return t;
      }
      function i(e) {
        var t = {};
        for (var n in e) {
          if (n !== '$debugName') {
            t[n] = e[n];
          }
        }
        if (e.$debugName) {
          t.$displayName = e.$debugName;
        }
        return t;
      }
      var a =
        typeof requestAnimationFrame === 'undefined'
          ? function (e) {
              return setTimeout(e);
            }
          : typeof window === 'undefined'
          ? requestAnimationFrame
          : requestAnimationFrame.bind(window);
      function o() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        return e
          .map(function (e) {
            return e && typeof e === 'object'
              ? Object.keys(e).map(function (t) {
                  return !!e[t] && t;
                })
              : [e];
          })
          .reduce(function (e, t) {
            return e.concat(t);
          }, [])
          .filter(function (e) {
            return !!e;
          })
          .join(' ');
      }
      function c() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        var n = {};
        for (var r = 0, s = e; r < s.length; r++) {
          var i = s[r];
          if (i == null || i === false) {
            continue;
          }
          for (var a in i) {
            var o = i[a];
            if (!o && o !== 0) {
              continue;
            }
            if (a === '$nest' && o) {
              n[a] = n['$nest'] ? c(n['$nest'], o) : o;
            } else if (a.indexOf('&') !== -1 || a.indexOf('@media') === 0) {
              n[a] = n[a] ? c(n[a], o) : o;
            } else {
              n[a] = o;
            }
          }
        }
        return n;
      }
      var u = function (e) {
        var t;
        var n = [];
        for (var r = 1; r < arguments.length; r++) {
          n[r - 1] = arguments[r];
        }
        var s = [];
        if (e.type) s.push(e.type);
        if (e.orientation) s.push('(orientation: ' + e.orientation + ')');
        if (e.minWidth) s.push('(min-width: ' + l(e.minWidth) + ')');
        if (e.maxWidth) s.push('(max-width: ' + l(e.maxWidth) + ')');
        if (e.minHeight) s.push('(min-height: ' + l(e.minHeight) + ')');
        if (e.maxHeight) s.push('(max-height: ' + l(e.maxHeight) + ')');
        var i = '@media ' + s.join(' and ');
        var a = { $nest: ((t = {}), (t[i] = c.apply(void 0, n)), t) };
        return a;
      };
      var l = function (e) {
        return typeof e === 'string' ? e : e + 'px';
      };
      var h = function () {
        return r.create();
      };
      var f = (function () {
        function e(e) {
          var t = this;
          var n = e.autoGenerateTag;
          this.cssRaw = function (e) {
            if (!e) {
              return;
            }
            t._raw += e || '';
            t._pendingRawChange = true;
            t._styleUpdated();
          };
          this.cssRule = function (e) {
            var n = [];
            for (var r = 1; r < arguments.length; r++) {
              n[r - 1] = arguments[r];
            }
            var i = s(c.apply(void 0, n));
            t._freeStyle.registerRule(e, i);
            t._styleUpdated();
            return;
          };
          this.forceRenderStyles = function () {
            var e = t._getTag();
            if (!e) {
              return;
            }
            e.textContent = t.getStyles();
          };
          this.fontFace = function () {
            var e = [];
            for (var n = 0; n < arguments.length; n++) {
              e[n] = arguments[n];
            }
            var r = t._freeStyle;
            for (var s = 0, i = e; s < i.length; s++) {
              var a = i[s];
              r.registerRule('@font-face', a);
            }
            t._styleUpdated();
            return;
          };
          this.getStyles = function () {
            return (t._raw || '') + t._freeStyle.getStyles();
          };
          this.keyframes = function (e) {
            var n = i(e);
            var r = t._freeStyle.registerKeyframes(n);
            t._styleUpdated();
            return r;
          };
          this.reinit = function () {
            var e = h();
            t._freeStyle = e;
            t._lastFreeStyleChangeId = e.changeId;
            t._raw = '';
            t._pendingRawChange = false;
            var n = t._getTag();
            if (n) {
              n.textContent = '';
            }
          };
          this.setStylesTarget = function (e) {
            if (t._tag) {
              t._tag.textContent = '';
            }
            t._tag = e;
            t.forceRenderStyles();
          };
          this.stylesheet = function (e) {
            var n = Object.getOwnPropertyNames(e);
            var r = {};
            for (var s = 0, i = n; s < i.length; s++) {
              var a = i[s];
              var o = e[a];
              if (o) {
                o.$debugName = a;
                r[a] = t.style(o);
              }
            }
            return r;
          };
          var r = h();
          this._autoGenerateTag = n;
          this._freeStyle = r;
          this._lastFreeStyleChangeId = r.changeId;
          this._pending = 0;
          this._pendingRawChange = false;
          this._raw = '';
          this._tag = undefined;
          this.style = this.style.bind(this);
        }
        e.prototype._afterAllSync = function (e) {
          var t = this;
          this._pending++;
          var n = this._pending;
          a(function () {
            if (n !== t._pending) {
              return;
            }
            e();
          });
        };
        e.prototype._getTag = function () {
          if (this._tag) {
            return this._tag;
          }
          if (this._autoGenerateTag) {
            var e =
              typeof window === 'undefined'
                ? { textContent: '' }
                : document.createElement('style');
            if (typeof document !== 'undefined') {
              document.head.appendChild(e);
            }
            this._tag = e;
            return e;
          }
          return undefined;
        };
        e.prototype._styleUpdated = function () {
          var e = this;
          var t = this._freeStyle.changeId;
          var n = this._lastFreeStyleChangeId;
          if (!this._pendingRawChange && t === n) {
            return;
          }
          this._lastFreeStyleChangeId = t;
          this._pendingRawChange = false;
          this._afterAllSync(function () {
            return e.forceRenderStyles();
          });
        };
        e.prototype.style = function () {
          var e = this._freeStyle.registerStyle(s(c.apply(undefined, arguments)));
          this._styleUpdated();
          return e;
        };
        return e;
      })();
      var d = n(92131);
      var g = new f({ autoGenerateTag: true });
      var y = g.setStylesTarget;
      var p = g.cssRaw;
      var v = g.cssRule;
      var m = g.forceRenderStyles;
      var _ = g.fontFace;
      var w = g.getStyles;
      var S = g.keyframes;
      var $ = g.reinit;
      var x = g.style;
      var b = g.stylesheet;
      function k(e) {
        var t = new f({ autoGenerateTag: false });
        if (e) {
          t.setStylesTarget(e);
        }
        return t;
      }
    },
    92131: () => {},
  },
]);
//# sourceMappingURL=466.239a0c009f33f1cb7cab.js.map?v=239a0c009f33f1cb7cab
