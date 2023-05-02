'use strict';
(self.webpackChunk_jupyter_widgets_jupyterlab_manager =
  self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [595],
  {
    9185: (e, t, s) => {
      s.r(t),
        s.d(t, {
          BROKEN_FILE_SVG_ICON: () => f,
          DOMWidgetModel: () => W,
          DOMWidgetView: () => J,
          ErrorWidgetView: () => K,
          IJupyterWidgetRegistry: () => q,
          JUPYTER_WIDGETS_VERSION: () => x,
          JupyterLuminoPanelWidget: () => I,
          JupyterLuminoWidget: () => N,
          JupyterPhosphorWidget: () => V,
          LayoutModel: () => U,
          LayoutView: () => $,
          PROTOCOL_VERSION: () => S,
          StyleModel: () => R,
          StyleView: () => B,
          ViewList: () => G,
          WidgetModel: () => A,
          WidgetView: () => T,
          assign: () => a,
          createErrorWidgetModel: () => F,
          createErrorWidgetView: () => Y,
          difference: () => r,
          isEqual: () => l,
          isObject: () => m,
          isSerializable: () => _,
          pack_models: () => z,
          put_buffers: () => u,
          reject: () => d,
          remove_buffers: () => g,
          resolvePromisesDict: () => h,
          shims: () => H,
          unpack_models: () => C,
          uuid: () => c,
        });
      var i = s(1526),
        n = s(8149),
        o = s.n(n);
      function r(e, t) {
        return e.filter((e) => -1 === t.indexOf(e));
      }
      function l(e, t) {
        return o()(e, t);
      }
      const a =
        Object.assign ||
        function (e, ...t) {
          for (let s = 1; s < t.length; s++) {
            const i = t[s];
            for (const t in i)
              Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
          }
          return e;
        };
      function c() {
        return i.UUID.uuid4();
      }
      function h(e) {
        const t = Object.keys(e),
          s = [];
        return (
          t.forEach(function (t) {
            s.push(e[t]);
          }),
          Promise.all(s).then((e) => {
            const s = {};
            for (let i = 0; i < t.length; i++) s[t[i]] = e[i];
            return s;
          })
        );
      }
      function d(e, t) {
        return function (s) {
          throw (t && console.error(new Error(e)), s);
        };
      }
      function u(e, t, s) {
        for (let i = 0; i < t.length; i++) {
          const n = t[i];
          let o = s[i];
          o instanceof DataView ||
            (o = new DataView(o instanceof ArrayBuffer ? o : o.buffer));
          let r = e;
          for (let e = 0; e < n.length - 1; e++) r = r[n[e]];
          r[n[n.length - 1]] = o;
        }
      }
      function _(e) {
        var t;
        return (
          null !== (t = 'object' == typeof e && e && 'toJSON' in e) && void 0 !== t && t
        );
      }
      function m(e) {
        return i.JSONExt.isObject(e);
      }
      function g(e) {
        const t = [],
          s = [];
        return {
          state: (function e(i, n) {
            if ((_(i) && (i = i.toJSON()), Array.isArray(i))) {
              let o = !1;
              for (let r = 0; r < i.length; r++) {
                const l = i[r];
                if (l)
                  if (l instanceof ArrayBuffer || ArrayBuffer.isView(l))
                    o || ((i = i.slice()), (o = !0)),
                      t.push(ArrayBuffer.isView(l) ? l.buffer : l),
                      s.push(n.concat([r])),
                      (i[r] = null);
                  else {
                    const t = e(l, n.concat([r]));
                    t !== l && (o || ((i = i.slice()), (o = !0)), (i[r] = t));
                  }
              }
            } else if (m(i))
              for (const o in i) {
                let r = !1;
                if (Object.prototype.hasOwnProperty.call(i, o)) {
                  const l = i[o];
                  if (l)
                    if (l instanceof ArrayBuffer || ArrayBuffer.isView(l))
                      r || ((i = Object.assign({}, i)), (r = !0)),
                        t.push(ArrayBuffer.isView(l) ? l.buffer : l),
                        s.push(n.concat([o])),
                        delete i[o];
                    else {
                      const t = e(l, n.concat([o]));
                      t !== l &&
                        (r || ((i = Object.assign({}, i)), (r = !0)), (i[o] = t));
                    }
                }
              }
            return i;
          })(e, []),
          buffers: t,
          buffer_paths: s,
        };
      }
      const f =
        '<svg style="height:50%;max-height: 50px;" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">\n<g >\n  <g transform="translate(0.24520123,0.93464292)">\n    <path  d="M 8.2494641,21.074514 V 5.6225142 c 0,-0.314 0.254,-0.567 0.57,-0.567 H 29.978464 c 2.388,0 9.268,5.8269998 9.268,8.3029998 v 5.5835 l -3.585749,4.407396 -2.772971,-3.535534 -5.126524,3.414213 -5.944543,-3.237436 -5.722718,3.06066 z m 30.9969999,3.8675 v 15.5835 c 0,0.314 -0.254,0.567 -0.57,0.567 H 8.8194641 c -0.315,0.002 -0.57,-0.251 -0.57,-0.566 v -15.452 l 7.8444949,2.628449 5.656854,-2.65165 4.24264,3.005204 5.833631,-3.237437 3.712311,3.944543 z" style="fill:url(#linearGradient3448);stroke:#888a85"  />\n    <path d="m 30.383464,12.110514 c 4.108,0.159 7.304,-0.978 8.867,1.446 0.304,-3.9679998 -7.254,-8.8279998 -9.285,-8.4979998 0.813,0.498 0.418,7.0519998 0.418,7.0519998 z" style="fill:url(#linearGradient3445);stroke:#868a84" />\n    <path enable-background="new" d="m 31.443464,11.086514 c 2.754,-0.019 4.106,-0.49 5.702,0.19 -1.299,-1.8809998 -4.358,-3.3439998 -5.728,-4.0279998 0.188,0.775 0.026,3.8379998 0.026,3.8379998 z" style="opacity:0.36930003;fill:none;stroke:url(#linearGradient3442)" />\n  </g>\n</g>\n</svg>';
      function p(e, t, s) {
        if (null == e) return this;
        let n;
        if (
          (i.JSONExt.isObject(e) ? ((n = e), (s = t)) : ((n = {})[e] = t),
          s || (s = {}),
          !this._validate(n, s))
        )
          return !1;
        const o = s.unset,
          r = s.silent,
          a = [],
          c = this._changing;
        this._changing = !0;
        try {
          c ||
            ((this._previousAttributes = Object.assign({}, this.attributes)),
            (this.changed = {}));
          const e = this.attributes,
            i = this.changed,
            h = this._previousAttributes;
          for (const s in n)
            (t = n[s]),
              l(e[s], t) || a.push(s),
              l(h[s], t) ? delete i[s] : (i[s] = t),
              o ? delete e[s] : (e[s] = t);
          if (((this.id = this.get(this.idAttribute)), !r)) {
            a.length && (this._pending = s);
            for (let t = 0; t < a.length; t++)
              this.trigger('change:' + a[t], this, e[a[t]], s);
          }
          if (c) return this;
          if (!r)
            for (; this._pending; )
              (s = this._pending),
                (this._pending = !1),
                this.trigger('change', this, s);
        } finally {
          (this._pending = !1), (this._changing = !1);
        }
        return this;
      }
      var v = s(7298),
        b = s(2994),
        y = s.n(b);
      const w = 'undefined' != typeof Element ? Element.prototype : void 0;
      const k =
        (w &&
          (w.matches ||
            w.webkitMatchesSelector ||
            w.mozMatchesSelector ||
            w.msMatchesSelector ||
            w.oMatchesSelector)) ||
        function (e) {
          const t = (this.document || this.ownerDocument).querySelectorAll(e);
          let s = t.length;
          for (; --s >= 0 && t.item(s) !== this; );
          return s > -1;
        };
      class j extends v.View {
        _removeElement() {
          this.undelegateEvents(),
            this.el.parentNode && this.el.parentNode.removeChild(this.el);
        }
        _setElement(e) {
          this.el = e;
        }
        _setAttributes(e) {
          for (const t in e)
            t in this.el ? (this.el[t] = e[t]) : this.el.setAttribute(t, e[t]);
        }
        delegate(e, t, s) {
          'string' != typeof t && ((s = t), (t = null)),
            void 0 === this._domEvents && (this._domEvents = []);
          const i = this.el,
            n = t
              ? function (e) {
                  let n = e.target || e.srcElement;
                  for (; n && n !== i; n = n.parentNode)
                    if (k.call(n, t))
                      return (
                        (e.delegateTarget = n), s.handleEvent ? s.handleEvent(e) : s(e)
                      );
                }
              : s;
          return (
            this.el.addEventListener(e, n, !1),
            this._domEvents.push({
              eventName: e,
              handler: n,
              listener: s,
              selector: t,
            }),
            n
          );
        }
        undelegate(e, t, s) {
          if (
            ('function' == typeof t && ((s = t), (t = null)),
            this.el && this._domEvents)
          ) {
            const i = this._domEvents.slice();
            let n = i.length;
            for (; n--; ) {
              const o = i[n];
              !(
                o.eventName !== e ||
                (s && o.listener !== s) ||
                (t && o.selector !== t)
              ) &&
                (this.el.removeEventListener(o.eventName, o.handler, !1),
                this._domEvents.splice(n, 1));
            }
          }
          return this;
        }
        undelegateEvents() {
          if (this.el && this._domEvents) {
            const e = this._domEvents.length;
            for (let t = 0; t < e; t++) {
              const e = this._domEvents[t];
              this.el.removeEventListener(e.eventName, e.handler, !1);
            }
            this._domEvents.length = 0;
          }
          return this;
        }
      }
      var O = s(2720),
        E = s(3992);
      const x = '2.0.0',
        S = '2.1.0',
        M = 'IPY_MODEL_',
        P = (e) => JSON.parse(JSON.stringify(e)),
        L = globalThis.structuredClone || P;
      function C(e, t) {
        if (Array.isArray(e)) {
          const s = [];
          for (const i of e) s.push(C(i, t));
          return Promise.all(s);
        }
        if (e instanceof Object && 'string' != typeof e) {
          const s = {};
          for (const [i, n] of Object.entries(e)) s[i] = C(n, t);
          return h(s);
        }
        return 'string' == typeof e && e.slice(0, 10) === M
          ? t.get_model(e.slice(10, e.length))
          : Promise.resolve(e);
      }
      function z(e, t) {
        if (Array.isArray(e)) {
          const s = [];
          for (const i of e) s.push(z(i, t));
          return s;
        }
        if (e instanceof A) return `${M}${e.model_id}`;
        if (!(e instanceof Object && 'string' != typeof e)) return e;
        {
          const s = {};
          for (const [i, n] of Object.entries(e)) s[i] = z(n, t);
        }
      }
      class A extends v.Model {
        defaults() {
          return {
            _model_module: '@jupyter-widgets/base',
            _model_name: 'WidgetModel',
            _model_module_version: x,
            _view_module: '@jupyter-widgets/base',
            _view_name: null,
            _view_module_version: x,
            _view_count: null,
          };
        }
        isNew() {
          return !1;
        }
        initialize(e, t) {
          (this._expectedEchoMsgIds = new Map()),
            (this._attrsToUpdate = new Set()),
            super.initialize(e, t),
            (this.widget_manager = t.widget_manager),
            (this.model_id = t.model_id);
          const s = t.comm;
          (this.views = Object.create(null)),
            (this.state_change = Promise.resolve()),
            (this._closed = !1),
            (this._state_lock = null),
            (this._msg_buffer = null),
            (this._msg_buffer_callbacks = null),
            (this._pending_msgs = 0),
            (this._buffered_state_diff = {}),
            s
              ? ((this.comm = s),
                s.on_close(this._handle_comm_closed.bind(this)),
                s.on_msg(this._handle_comm_msg.bind(this)),
                (this.comm_live = !0))
              : (this.comm_live = !1);
        }
        get comm_live() {
          return this._comm_live;
        }
        set comm_live(e) {
          (this._comm_live = e), this.trigger('comm_live_update');
        }
        send(e, t, s) {
          if (void 0 !== this.comm) {
            const i = { method: 'custom', content: e };
            this.comm.send(i, t, {}, s);
          }
        }
        close(e = !1) {
          if (this._closed) return Promise.resolve();
          if (
            ((this._closed = !0),
            this.comm && !e && this.comm.close(),
            this.stopListening(),
            this.trigger('destroy', this),
            this.comm && delete this.comm,
            this.views)
          ) {
            const e = Object.keys(this.views).map((e) =>
              this.views[e].then((e) => e.remove())
            );
            return delete this.views, Promise.all(e).then(() => {});
          }
          return Promise.resolve();
        }
        _handle_comm_closed(e) {
          this.trigger('comm:close'), this.close(!0);
        }
        _handle_comm_msg(e) {
          const t = e.content.data,
            s = t.method;
          switch (s) {
            case 'update':
            case 'echo_update':
              return (
                (this.state_change = this.state_change
                  .then(() => {
                    var i, n, o;
                    const r = t.state,
                      l = null !== (i = t.buffer_paths) && void 0 !== i ? i : [],
                      a =
                        null !==
                          (o =
                            null === (n = e.buffers) || void 0 === n
                              ? void 0
                              : n.slice(0, l.length)) && void 0 !== o
                          ? o
                          : [];
                    if ((u(r, l, a), e.parent_header && 'echo_update' === s)) {
                      const t = e.parent_header.msg_id;
                      Object.keys(r)
                        .filter((e) => this._expectedEchoMsgIds.has(e))
                        .forEach((e) => {
                          this._expectedEchoMsgIds.get(e) !== t
                            ? delete r[e]
                            : (this._expectedEchoMsgIds.delete(e),
                              null !== this._msg_buffer &&
                                Object.prototype.hasOwnProperty.call(
                                  this._msg_buffer,
                                  e
                                ) &&
                                delete r[e]);
                        });
                    }
                    return this.constructor._deserialize_state(r, this.widget_manager);
                  })
                  .then((e) => {
                    this.set_state(e);
                  })
                  .catch(
                    d(`Could not process update msg for model id: ${this.model_id}`, !0)
                  )),
                this.state_change
              );
            case 'custom':
              return (
                this.trigger('msg:custom', t.content, e.buffers), Promise.resolve()
              );
          }
          return Promise.resolve();
        }
        set_state(e) {
          this._state_lock = e;
          try {
            this.set(e);
          } catch (e) {
            console.error(`Error setting state: ${e instanceof Error ? e.message : e}`);
          } finally {
            this._state_lock = null;
          }
        }
        get_state(e) {
          const t = this.attributes;
          if (e) {
            const e = this.defaults,
              s = 'function' == typeof e ? e.call(this) : e,
              i = {};
            return (
              Object.keys(t).forEach((e) => {
                l(t[e], s[e]) || (i[e] = t[e]);
              }),
              i
            );
          }
          return Object.assign({}, t);
        }
        _handle_status(e) {
          if (
            void 0 !== this.comm &&
            'idle' === e.content.execution_state &&
            (this._pending_msgs--,
            this._pending_msgs < 0 &&
              (console.error(
                `Jupyter Widgets message throttle: Pending messages < 0 (=${this._pending_msgs}), which is unexpected. Resetting to 0 to continue.`
              ),
              (this._pending_msgs = 0)),
            null !== this._msg_buffer && this._pending_msgs < 1)
          ) {
            const e = this.send_sync_message(
              this._msg_buffer,
              this._msg_buffer_callbacks
            );
            this.rememberLastUpdateFor(e),
              (this._msg_buffer = null),
              (this._msg_buffer_callbacks = null);
          }
        }
        callbacks(e) {
          return this.widget_manager.callbacks(e);
        }
        set(e, t, s) {
          const i = p.call(this, e, t, s);
          if (void 0 !== this._buffered_state_diff) {
            const e = this.changedAttributes() || {};
            if (this._state_lock)
              for (const t of Object.keys(this._state_lock))
                e[t] === this._state_lock[t] && delete e[t];
            if (this._buffered_state_diff_synced)
              for (const t of Object.keys(this._buffered_state_diff_synced))
                e[t] === this._buffered_state_diff_synced[t] && delete e[t];
            this._buffered_state_diff = a(this._buffered_state_diff, e);
          }
          return !1 === this._changing && (this._buffered_state_diff_synced = {}), i;
        }
        sync(e, t, s = {}) {
          if (void 0 === this.comm) throw 'Syncing error: no comm channel defined';
          const i = 'patch' === e ? s.attrs : t.get_state(s.drop_defaults);
          if (this._state_lock)
            for (const e of Object.keys(this._state_lock))
              i[e] === this._state_lock[e] && delete i[e];
          Object.keys(i).forEach((e) => {
            this._attrsToUpdate.add(e);
          });
          const n = this.serialize(i);
          if (Object.keys(n).length > 0) {
            const t = s.callbacks || this.callbacks();
            if (this._pending_msgs >= 1) {
              switch (e) {
                case 'patch':
                  this._msg_buffer = a(this._msg_buffer || {}, n);
                  break;
                case 'update':
                case 'create':
                  this._msg_buffer = n;
                  break;
                default:
                  throw 'unrecognized syncing method';
              }
              this._msg_buffer_callbacks = t;
            } else {
              const e = this.send_sync_message(i, t);
              this.rememberLastUpdateFor(e);
            }
          }
        }
        rememberLastUpdateFor(e) {
          this._attrsToUpdate.forEach((t) => {
            this._expectedEchoMsgIds.set(t, e);
          }),
            (this._attrsToUpdate = new Set());
        }
        serialize(e) {
          const t = this.constructor.serializers || i.JSONExt.emptyObject;
          for (const s of Object.keys(e))
            try {
              const n = t[s] || i.JSONExt.emptyObject;
              let { serialize: o } = n;
              null == o && n.deserialize === C && (o = P),
                (e[s] = o ? o(e[s], this) : L(e[s])),
                e[s] && e[s].toJSON && (e[s] = e[s].toJSON());
            } catch (e) {
              throw (console.error('Error serializing widget state attribute: ', s), e);
            }
          return e;
        }
        send_sync_message(e, t = {}) {
          if (!this.comm) return '';
          try {
            const s = (t = {
              shell: Object.assign({}, t.shell),
              iopub: Object.assign({}, t.iopub),
              input: t.input,
            }).iopub.status;
            t.iopub.status = (e) => {
              this._handle_status(e), s && s(e);
            };
            const i = g(e),
              n = this.comm.send(
                { method: 'update', state: i.state, buffer_paths: i.buffer_paths },
                t,
                {},
                i.buffers
              );
            return this._pending_msgs++, n;
          } catch (e) {
            console.error('Could not send widget sync message', e);
          }
          return '';
        }
        save_changes(e) {
          if (this.comm_live) {
            const t = { patch: !0 };
            e && (t.callbacks = e),
              this.save(this._buffered_state_diff, t),
              this._changing &&
                a(this._buffered_state_diff_synced, this._buffered_state_diff),
              (this._buffered_state_diff = {});
          }
        }
        on_some_change(e, t, s) {
          this.on(
            'change',
            (...i) => {
              e.some(this.hasChanged, this) && t.apply(s, i);
            },
            this
          );
        }
        toJSON(e) {
          return `IPY_MODEL_${this.model_id}`;
        }
        static _deserialize_state(e, t) {
          const s = this.serializers;
          let i;
          if (s) {
            i = {};
            for (const n in e)
              s[n] && s[n].deserialize
                ? (i[n] = s[n].deserialize(e[n], t))
                : (i[n] = e[n]);
          } else i = e;
          return h(i);
        }
      }
      class W extends A {
        defaults() {
          return a(super.defaults(), {
            _dom_classes: [],
            tabbable: null,
            tooltip: null,
          });
        }
      }
      W.serializers = Object.assign(Object.assign({}, A.serializers), {
        layout: { deserialize: C },
        style: { deserialize: C },
      });
      class T extends j {
        constructor(e) {
          super(e);
        }
        initialize(e) {
          this.listenTo(this.model, 'change', (e, t) => {
            const s = Object.keys(this.model.changedAttributes() || {});
            ('_view_count' === s[0] && 1 === s.length) || this.update(t);
          }),
            (this.options = e.options),
            this.once('remove', () => {
              'number' == typeof this.model.get('_view_count') &&
                (this.model.set('_view_count', this.model.get('_view_count') - 1),
                this.model.save_changes());
            }),
            this.once('displayed', () => {
              'number' == typeof this.model.get('_view_count') &&
                (this.model.set('_view_count', this.model.get('_view_count') + 1),
                this.model.save_changes());
            }),
            (this.displayed = new Promise((e, t) => {
              this.once('displayed', e),
                this.model.on('msg:custom', this.handle_message.bind(this));
            }));
        }
        handle_message(e) {
          'focus' === e.do ? this.el.focus() : 'blur' === e.do && this.el.blur();
        }
        update(e) {}
        render() {}
        create_child_view(e, t = {}) {
          return (
            (t = Object.assign({ parent: this }, t)),
            this.model.widget_manager
              .create_view(e, t)
              .catch(d('Could not create child view', !0))
          );
        }
        callbacks() {
          return this.model.callbacks(this);
        }
        send(e, t) {
          this.model.send(e, this.callbacks(), t);
        }
        touch() {
          this.model.save_changes(this.callbacks());
        }
        remove() {
          return super.remove(), this.trigger('remove'), this;
        }
      }
      class N extends E.Widget {
        constructor(e) {
          const t = e.view;
          delete e.view, super(e), (this._view = t);
        }
        dispose() {
          this.isDisposed ||
            (super.dispose(), this._view.remove(), (this._view = null));
        }
        processMessage(e) {
          super.processMessage(e), this._view.processLuminoMessage(e);
        }
      }
      const V = N;
      class I extends E.Panel {
        constructor(e) {
          const t = e.view;
          delete e.view, super(e), (this._view = t);
        }
        processMessage(e) {
          super.processMessage(e), this._view.processLuminoMessage(e);
        }
        dispose() {
          var e;
          this.isDisposed ||
            (super.dispose(),
            null === (e = this._view) || void 0 === e || e.remove(),
            (this._view = null));
        }
      }
      class J extends T {
        initialize(e) {
          super.initialize(e),
            this.listenTo(this.model, 'change:_dom_classes', (e, t) => {
              const s = e.previous('_dom_classes');
              this.update_classes(s, t);
            }),
            (this.layoutPromise = Promise.resolve()),
            this.listenTo(this.model, 'change:layout', (e, t) => {
              this.setLayout(t, e.previous('layout'));
            }),
            (this.stylePromise = Promise.resolve()),
            this.listenTo(this.model, 'change:style', (e, t) => {
              this.setStyle(t, e.previous('style'));
            }),
            this.displayed.then(() => {
              this.update_classes([], this.model.get('_dom_classes')),
                this.setLayout(this.model.get('layout')),
                this.setStyle(this.model.get('style'));
            }),
            this._comm_live_update(),
            this.listenTo(this.model, 'comm_live_update', () => {
              this._comm_live_update();
            }),
            this.listenTo(this.model, 'change:tooltip', this.updateTooltip),
            this.updateTooltip();
        }
        setLayout(e, t) {
          e &&
            (this.layoutPromise = this.layoutPromise.then(
              (t) => (
                t && (t.unlayout(), this.stopListening(t.model), t.remove()),
                this.create_child_view(e)
                  .then((e) =>
                    this.displayed.then(
                      () => (
                        e.trigger('displayed'),
                        this.listenTo(e.model, 'change', () => {
                          O.MessageLoop.postMessage(
                            this.luminoWidget,
                            E.Widget.ResizeMessage.UnknownSize
                          );
                        }),
                        O.MessageLoop.postMessage(
                          this.luminoWidget,
                          E.Widget.ResizeMessage.UnknownSize
                        ),
                        this.trigger('layout-changed'),
                        e
                      )
                    )
                  )
                  .catch(d('Could not add LayoutView to DOMWidgetView', !0))
              )
            ));
        }
        setStyle(e, t) {
          e &&
            (this.stylePromise = this.stylePromise.then(
              (t) => (
                t && (t.unstyle(), this.stopListening(t.model), t.remove()),
                this.create_child_view(e)
                  .then((e) =>
                    this.displayed.then(
                      () => (e.trigger('displayed'), this.trigger('style-changed'), e)
                    )
                  )
                  .catch(d('Could not add styleView to DOMWidgetView', !0))
              )
            ));
        }
        updateTooltip() {
          const e = this.model.get('tooltip');
          e
            ? 0 === this.model.get('description').length &&
              this.el.setAttribute('title', e)
            : this.el.removeAttribute('title');
        }
        update_classes(e, t, s) {
          void 0 === s && (s = this.el),
            r(e, t).map(function (e) {
              s.classList
                ? s.classList.remove(e)
                : s.setAttribute('class', s.getAttribute('class').replace(e, ''));
            }),
            r(t, e).map(function (e) {
              s.classList
                ? s.classList.add(e)
                : s.setAttribute('class', s.getAttribute('class').concat(' ', e));
            });
        }
        update_mapped_classes(e, t, s) {
          let i = this.model.previous(t);
          const n = e[i] ? e[i] : [];
          i = this.model.get(t);
          const o = e[i] ? e[i] : [];
          this.update_classes(n, o, s || this.el);
        }
        set_mapped_classes(e, t, s) {
          const i = this.model.get(t),
            n = e[i] ? e[i] : [];
          this.update_classes([], n, s || this.el);
        }
        _setElement(e) {
          this.luminoWidget && this.luminoWidget.dispose(),
            (this.$el = e instanceof y() ? e : y()(e)),
            (this.el = this.$el[0]),
            (this.luminoWidget = new N({ node: e, view: this }));
        }
        remove() {
          return this.luminoWidget && this.luminoWidget.dispose(), super.remove();
        }
        processLuminoMessage(e) {
          switch (e.type) {
            case 'after-attach':
              this.trigger('displayed');
              break;
            case 'show':
              this.trigger('shown');
          }
        }
        _comm_live_update() {
          this.model.comm_live
            ? this.luminoWidget.removeClass('jupyter-widgets-disconnected')
            : this.luminoWidget.addClass('jupyter-widgets-disconnected');
        }
        updateTabindex() {
          const e = this.model.get('tabbable');
          !0 === e
            ? this.el.setAttribute('tabIndex', '0')
            : !1 === e
            ? this.el.setAttribute('tabIndex', '-1')
            : null === e && this.el.removeAttribute('tabIndex');
        }
        get pWidget() {
          return this.luminoWidget;
        }
      }
      const D = {
        align_content: null,
        align_items: null,
        align_self: null,
        border_top: null,
        border_right: null,
        border_bottom: null,
        border_left: null,
        bottom: null,
        display: null,
        flex: null,
        flex_flow: null,
        height: null,
        justify_content: null,
        justify_items: null,
        left: null,
        margin: null,
        max_height: null,
        max_width: null,
        min_height: null,
        min_width: null,
        overflow: null,
        order: null,
        padding: null,
        right: null,
        top: null,
        visibility: null,
        width: null,
        object_fit: null,
        object_position: null,
        grid_auto_columns: null,
        grid_auto_flow: null,
        grid_auto_rows: null,
        grid_gap: null,
        grid_template_rows: null,
        grid_template_columns: null,
        grid_template_areas: null,
        grid_row: null,
        grid_column: null,
        grid_area: null,
      };
      class U extends A {
        defaults() {
          return a(
            super.defaults(),
            { _model_name: 'LayoutModel', _view_name: 'LayoutView' },
            D
          );
        }
      }
      class $ extends T {
        initialize(e) {
          (this._traitNames = []), super.initialize(e);
          for (const e of Object.keys(D)) this.registerTrait(e);
        }
        registerTrait(e) {
          this._traitNames.push(e),
            this.listenTo(this.model, 'change:' + e, (t, s) => {
              this.handleChange(e, s);
            }),
            this.handleChange(e, this.model.get(e));
        }
        css_name(e) {
          return e.replace(/_/g, '-');
        }
        handleChange(e, t) {
          const s = this.options.parent;
          s
            ? null === t
              ? s.el.style.removeProperty(this.css_name(e))
              : s.el.style.setProperty(this.css_name(e), t)
            : console.warn('Style not applied because a parent view does not exist');
        }
        unlayout() {
          const e = this.options.parent;
          this._traitNames.forEach((t) => {
            e
              ? e.el.style.removeProperty(this.css_name(t))
              : console.warn('Style not removed because a parent view does not exist');
          }, this);
        }
      }
      class R extends A {
        defaults() {
          const e = this.constructor;
          return a(
            super.defaults(),
            { _model_name: 'StyleModel', _view_name: 'StyleView' },
            Object.keys(e.styleProperties).reduce(
              (t, s) => ((t[s] = e.styleProperties[s].default), t),
              {}
            )
          );
        }
      }
      R.styleProperties = {};
      class B extends T {
        initialize(e) {
          (this._traitNames = []), super.initialize(e);
          const t = this.model.constructor;
          for (const e of Object.keys(t.styleProperties)) this.registerTrait(e);
          this.style();
        }
        registerTrait(e) {
          this._traitNames.push(e),
            this.listenTo(this.model, 'change:' + e, (t, s) => {
              this.handleChange(e, s);
            });
        }
        handleChange(e, t) {
          const s = this.options.parent;
          if (s) {
            const i = this.model.constructor.styleProperties,
              n = i[e].attribute,
              o = i[e].selector,
              r = o ? s.el.querySelectorAll(o) : [s.el];
            if (null === t)
              for (let e = 0; e !== r.length; ++e) r[e].style.removeProperty(n);
            else for (let e = 0; e !== r.length; ++e) r[e].style.setProperty(n, t);
          } else console.warn('Style not applied because a parent view does not exist');
        }
        style() {
          for (const e of this._traitNames) this.handleChange(e, this.model.get(e));
        }
        unstyle() {
          const e = this.options.parent,
            t = this.model.constructor.styleProperties;
          this._traitNames.forEach((s) => {
            if (e) {
              const i = t[s].attribute,
                n = t[s].selector,
                o = n ? e.el.querySelectorAll(n) : [e.el];
              for (let e = 0; e !== o.length; ++e) o[e].style.removeProperty(i);
            } else
              console.warn('Style not removed because a parent view does not exist');
          }, this);
        }
      }
      var H;
      !(function (e) {
        let t;
        !(function (e) {
          e.CommManager = class {
            constructor(e) {
              (this.targets = Object.create(null)),
                (this.comms = Object.create(null)),
                this.init_kernel(e);
            }
            init_kernel(e) {
              (this.kernel = e), (this.jsServicesKernel = e);
            }
            async new_comm(e, s, i, n, o, r) {
              const l = this.jsServicesKernel.createComm(e, o),
                a = new t(l);
              return this.register_comm(a), a.open(s, i, n, r), a;
            }
            register_target(e, s) {
              const i = this.jsServicesKernel.registerCommTarget(e, (e, i) => {
                const n = new t(e);
                this.register_comm(n);
                try {
                  return s(n, i);
                } catch (e) {
                  n.close(),
                    console.error(e),
                    console.error(new Error('Exception opening new comm'));
                }
              });
              this.targets[e] = i;
            }
            unregister_target(e, t) {
              this.targets[e].dispose(), delete this.targets[e];
            }
            register_comm(e) {
              return (
                (this.comms[e.comm_id] = Promise.resolve(e)),
                (e.kernel = this.kernel),
                e.comm_id
              );
            }
          };
          class t {
            constructor(e) {
              this.jsServicesComm = e;
            }
            get comm_id() {
              return this.jsServicesComm.commId;
            }
            get target_name() {
              return this.jsServicesComm.targetName;
            }
            open(e, t, s, i) {
              const n = this.jsServicesComm.open(e, s, i);
              return this._hookupCallbacks(n, t), n.msg.header.msg_id;
            }
            send(e, t, s, i) {
              const n = this.jsServicesComm.send(e, s, i);
              return this._hookupCallbacks(n, t), n.msg.header.msg_id;
            }
            close(e, t, s, i) {
              const n = this.jsServicesComm.close(e, s, i);
              return this._hookupCallbacks(n, t), n.msg.header.msg_id;
            }
            on_msg(e) {
              this.jsServicesComm.onMsg = e.bind(this);
            }
            on_close(e) {
              this.jsServicesComm.onClose = e.bind(this);
            }
            _hookupCallbacks(e, t) {
              t &&
                ((e.onReply = function (e) {
                  t.shell && t.shell.reply && t.shell.reply(e);
                }),
                (e.onStdin = function (e) {
                  t.input && t.input(e);
                }),
                (e.onIOPub = function (e) {
                  if (t.iopub)
                    if (t.iopub.status && 'status' === e.header.msg_type)
                      t.iopub.status(e);
                    else if (
                      t.iopub.clear_output &&
                      'clear_output' === e.header.msg_type
                    )
                      t.iopub.clear_output(e);
                    else if (t.iopub.output)
                      switch (e.header.msg_type) {
                        case 'display_data':
                        case 'execute_result':
                        case 'stream':
                        case 'error':
                          t.iopub.output(e);
                      }
                }));
            }
          }
          e.Comm = t;
        })((t = e.services || (e.services = {})));
      })(H || (H = {}));
      class G {
        constructor(e, t, s) {
          this.initialize(e, t, s);
        }
        initialize(e, t, s) {
          (this._handler_context = s || this),
            (this._models = []),
            (this.views = []),
            (this._create_view = e),
            (this._remove_view =
              t ||
              function (e) {
                e.remove();
              });
        }
        update(e, t, s, i) {
          const n = s || this._remove_view,
            o = t || this._create_view;
          i = i || this._handler_context;
          let r = 0;
          for (
            ;
            r < e.length && !(r >= this._models.length || e[r] !== this._models[r]);
            r++
          );
          const l = r,
            a = this.views.splice(l, this.views.length - l);
          for (let e = 0; e < a.length; e++)
            a[e].then(function (e) {
              n.call(i, e);
            });
          for (; r < e.length; r++)
            this.views.push(Promise.resolve(o.call(i, e[r], r)));
          return (this._models = e.slice()), Promise.all(this.views);
        }
        remove() {
          return Promise.all(this.views).then((e) => {
            e.forEach((e) => this._remove_view.call(this._handler_context, e)),
              (this.views = []),
              (this._models = []);
          });
        }
        dispose() {
          (this.views = null), (this._models = null);
        }
      }
      const q = new i.Token('jupyter.extensions.jupyterWidgetRegistry');
      function F(e, t) {
        return class extends W {
          constructor(s, i) {
            super(
              (s = Object.assign(Object.assign({}, s), {
                _view_name: 'ErrorWidgetView',
                _view_module: '@jupyter-widgets/base',
                _model_module_version: x,
                _view_module_version: x,
                msg: t,
                error: e,
              })),
              i
            ),
              (this.comm_live = !0);
          }
        };
      }
      class K extends J {
        generateErrorMessage() {
          return {
            msg: this.model.get('msg'),
            stack: String(this.model.get('error').stack),
          };
        }
        render() {
          const { msg: e, stack: t } = this.generateErrorMessage();
          this.el.classList.add('jupyter-widgets');
          const s = document.createElement('div');
          s.classList.add('jupyter-widgets-error-widget', 'icon-error'),
            (s.innerHTML = f);
          const i = document.createElement('pre');
          let n, o;
          (i.style.textAlign = 'center'),
            (i.innerText = 'Click to show javascript error.'),
            s.append(i),
            this.el.appendChild(s),
            (this.el.onclick = () => {
              s.classList.contains('icon-error') &&
                ((o = o || s.clientHeight),
                (n = n || s.clientWidth),
                s.classList.remove('icon-error'),
                (s.innerHTML = `\n        <pre>[Open Browser Console for more detailed log - Double click to close this message]\n${e}\n${t}</pre>\n        `),
                (s.style.height = `${o}px`),
                (s.style.width = `${n}px`),
                s.classList.add('text-error'));
            }),
            (this.el.ondblclick = () => {
              s.classList.contains('text-error') &&
                (s.classList.remove('text-error'),
                (s.innerHTML = f),
                s.append(i),
                s.classList.add('icon-error'));
            });
        }
      }
      function Y(e, t) {
        return class extends K {
          generateErrorMessage() {
            return { msg: t, stack: String(e instanceof Error ? e.stack : e) };
          }
        };
      }
    },
  },
]);
