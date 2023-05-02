(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [4151],
  {
    13119: (e, s, n) => {
      'use strict';
      n.d(s, { M: () => t });
      const t = () => {
        let e = true;
        return (s, n) => {
          if (e) {
            e = false;
            try {
              s();
            } finally {
              e = true;
            }
          } else if (n !== undefined) {
            n();
          }
        };
      };
    },
    64151: (e, s, n) => {
      'use strict';
      n.d(s, { V: () => J });
      var t = n(20073);
      var c = n(72382);
      var o = n(65679);
      var a = n(62794);
      const i = new Map();
      class r {
        constructor(e) {
          this.room = e;
          this.onmessage = null;
          a.z(
            (s) =>
              s.key === e &&
              this.onmessage !== null &&
              this.onmessage({ data: o.Gh(s.newValue || '') })
          );
        }
        postMessage(e) {
          a.X.setItem(this.room, o.s3(o.eh(e)));
        }
      }
      const d = typeof BroadcastChannel === 'undefined' ? r : BroadcastChannel;
      const l = (e) =>
        c.Yu(i, e, () => {
          const s = new Set();
          const n = new d(e);
          n.onmessage = (e) => s.forEach((s) => s(e.data));
          return { bc: n, subs: s };
        });
      const h = (e, s) => l(e).subs.add(s);
      const f = (e, s) => l(e).subs.delete(s);
      const u = (e, s) => {
        const n = l(e);
        n.bc.postMessage(s);
        n.subs.forEach((e) => e(s));
      };
      var w = n(20817);
      var p = n(29194);
      var b = n(64485);
      const y = 0;
      const m = 1;
      const _ = 2;
      const g = (e, s) => {
        p.uE(e, y);
        const n = t.encodeStateVector(s);
        p.mP(e, n);
      };
      const v = (e, s, n) => {
        p.uE(e, m);
        p.mP(e, t.encodeStateAsUpdate(s, n));
      };
      const U = (e, s, n) => v(s, n, b.HN(e));
      const C = (e, s, n) => {
        try {
          t.applyUpdate(s, b.HN(e), n);
        } catch (c) {
          console.error('Caught error while handling a Yjs update', c);
        }
      };
      const E = (e, s) => {
        p.uE(e, _);
        p.mP(e, s);
      };
      const I = C;
      const M = (e, s, n, t) => {
        const c = b.yg(e);
        switch (c) {
          case y:
            U(e, s, n);
            break;
          case m:
            C(e, n, t);
            break;
          case _:
            I(e, n, t);
            break;
          default:
            throw new Error('Unknown message type');
        }
        return c;
      };
      const k = 0;
      const H = (e, s) => {
        encoding.writeVarUint(e, k);
        encoding.writeVarString(e, s);
      };
      const S = (e, s, n) => {
        switch (b.yg(e)) {
          case k:
            n(s, b.kf(e));
        }
      };
      var x = n(1057);
      var R = n(13119);
      var P = n(58290);
      var L = n(14247);
      var A = n(59735);
      const V = (e) => {
        const s = {};
        const n = e.split('?');
        const t = n[n.length - 1].split('&');
        for (var c = 0; c < t.length; c++) {
          const e = t[c];
          if (e.length > 0) {
            const n = e.split('=');
            s[decodeURIComponent(n[0])] = decodeURIComponent(n[1] || '');
          }
        }
        return s;
      };
      const B = (e) =>
        A.UI(e, (e, s) => `${encodeURIComponent(s)}=${encodeURIComponent(e)}`).join(
          '&'
        );
      var q = n(34155);
      const D = 0;
      const G = 3;
      const j = 1;
      const W = 2;
      const $ = [];
      $[D] = (e, s, n, t, c) => {
        p.uE(e, D);
        const o = M(s, e, n.doc, n);
        if (t && o === m && !n.synced) {
          n.synced = true;
        }
      };
      $[G] = (e, s, n, t, c) => {
        p.uE(e, j);
        p.mP(e, x.xq(n.awareness, Array.from(n.awareness.getStates().keys())));
      };
      $[j] = (e, s, n, t, c) => {
        x.oy(n.awareness, b.HN(s), n);
      };
      $[W] = (e, s, n, t, c) => {
        S(s, n.doc, Y);
      };
      const N = 1200;
      const Z = 2500;
      const T = 3e4;
      const Y = (e, s) => console.warn(`Permission denied to access ${e.url}.\n${s}`);
      const z = (e, s, n) => {
        const t = b.l1(s);
        const c = p.Mf();
        const o = b.yg(t);
        const a = e.messageHandlers[o];
        if (a) {
          a(c, t, e, n, o);
        } else {
          console.error('Unable to compute message');
        }
        return c;
      };
      const X = (e) => {
        if (e.shouldConnect && e.ws === null) {
          const s = new e._WS(e.url);
          s.binaryType = 'arraybuffer';
          e.ws = s;
          e.wsconnecting = true;
          e.wsconnected = false;
          e.synced = false;
          s.onmessage = (n) => {
            e.wsLastMessageReceived = w.ZG();
            const t = z(e, new Uint8Array(n.data), true);
            if (p.kE(t) > 1) {
              s.send(p._f(t));
            }
          };
          s.onclose = () => {
            e.ws = null;
            e.wsconnecting = false;
            if (e.wsconnected) {
              e.wsconnected = false;
              e.synced = false;
              x.Ag(
                e.awareness,
                Array.from(e.awareness.getStates().keys()).filter(
                  (s) => s !== e.doc.clientID
                ),
                e
              );
              e.emit('status', [{ status: 'disconnected' }]);
            } else {
              e.wsUnsuccessfulReconnects++;
            }
            setTimeout(X, L.VV(L.mv(e.wsUnsuccessfulReconnects + 1) * N, Z), e);
          };
          s.onopen = () => {
            e.wsLastMessageReceived = w.ZG();
            e.wsconnecting = false;
            e.wsconnected = true;
            e.wsUnsuccessfulReconnects = 0;
            e.emit('status', [{ status: 'connected' }]);
            const n = p.Mf();
            p.uE(n, D);
            g(n, e.doc);
            s.send(p._f(n));
            if (e.awareness.getLocalState() !== null) {
              const n = p.Mf();
              p.uE(n, j);
              p.mP(n, x.xq(e.awareness, [e.doc.clientID]));
              s.send(p._f(n));
            }
          };
          e.emit('status', [{ status: 'connecting' }]);
        }
      };
      const F = (e, s) => {
        if (e.wsconnected) {
          e.ws.send(s);
        }
        if (e.bcconnected) {
          e.mux(() => {
            u(e.bcChannel, s);
          });
        }
      };
      class J extends P.y {
        constructor(
          e,
          s,
          n,
          {
            connect: t = true,
            awareness: c = new x.GL(n),
            params: o = {},
            WebSocketPolyfill: a = WebSocket,
            resyncInterval: i = -1,
          } = {}
        ) {
          super();
          while (e[e.length - 1] === '/') {
            e = e.slice(0, e.length - 1);
          }
          const r = B(o);
          this.bcChannel = e + '/' + s;
          this.url = e + '/' + s + (r.length === 0 ? '' : '?' + r);
          this.roomname = s;
          this.doc = n;
          this._WS = a;
          this.awareness = c;
          this.wsconnected = false;
          this.wsconnecting = false;
          this.bcconnected = false;
          this.wsUnsuccessfulReconnects = 0;
          this.messageHandlers = $.slice();
          this.mux = R.M();
          this._synced = false;
          this.ws = null;
          this.wsLastMessageReceived = 0;
          this.shouldConnect = t;
          this._resyncInterval = 0;
          if (i > 0) {
            this._resyncInterval = setInterval(() => {
              if (this.ws) {
                const e = p.Mf();
                p.uE(e, D);
                g(e, n);
                this.ws.send(p._f(e));
              }
            }, i);
          }
          this._bcSubscriber = (e) => {
            this.mux(() => {
              const s = z(this, new Uint8Array(e), false);
              if (p.kE(s) > 1) {
                u(this.bcChannel, p._f(s));
              }
            });
          };
          this._updateHandler = (e, s) => {
            if (s !== this) {
              const s = p.Mf();
              p.uE(s, D);
              E(s, e);
              F(this, p._f(s));
            }
          };
          this.doc.on('update', this._updateHandler);
          this._awarenessUpdateHandler = ({ added: e, updated: s, removed: n }, t) => {
            const o = e.concat(s).concat(n);
            const a = p.Mf();
            p.uE(a, j);
            p.mP(a, x.xq(c, o));
            F(this, p._f(a));
          };
          this._beforeUnloadHandler = () => {
            x.Ag(this.awareness, [n.clientID], 'window unload');
          };
          if (typeof window !== 'undefined') {
            window.addEventListener('beforeunload', this._beforeUnloadHandler);
          } else if (typeof q !== 'undefined') {
            q.on('exit', () => this._beforeUnloadHandler);
          }
          c.on('update', this._awarenessUpdateHandler);
          this._checkInterval = setInterval(() => {
            if (this.wsconnected && T < w.ZG() - this.wsLastMessageReceived) {
              this.ws.close();
            }
          }, T / 10);
          if (t) {
            this.connect();
          }
        }
        get synced() {
          return this._synced;
        }
        set synced(e) {
          if (this._synced !== e) {
            this._synced = e;
            this.emit('synced', [e]);
            this.emit('sync', [e]);
          }
        }
        destroy() {
          if (this._resyncInterval !== 0) {
            clearInterval(this._resyncInterval);
          }
          clearInterval(this._checkInterval);
          this.disconnect();
          if (typeof window !== 'undefined') {
            window.removeEventListener('beforeunload', this._beforeUnloadHandler);
          } else if (typeof q !== 'undefined') {
            q.off('exit', () => this._beforeUnloadHandler);
          }
          this.awareness.off('update', this._awarenessUpdateHandler);
          this.doc.off('update', this._updateHandler);
          super.destroy();
        }
        connectBc() {
          if (!this.bcconnected) {
            h(this.bcChannel, this._bcSubscriber);
            this.bcconnected = true;
          }
          this.mux(() => {
            const e = p.Mf();
            p.uE(e, D);
            g(e, this.doc);
            u(this.bcChannel, p._f(e));
            const s = p.Mf();
            p.uE(s, D);
            v(s, this.doc);
            u(this.bcChannel, p._f(s));
            const n = p.Mf();
            p.uE(n, G);
            u(this.bcChannel, p._f(n));
            const t = p.Mf();
            p.uE(t, j);
            p.mP(t, x.xq(this.awareness, [this.doc.clientID]));
            u(this.bcChannel, p._f(t));
          });
        }
        disconnectBc() {
          const e = p.Mf();
          p.uE(e, j);
          p.mP(e, x.xq(this.awareness, [this.doc.clientID], new Map()));
          F(this, p._f(e));
          if (this.bcconnected) {
            f(this.bcChannel, this._bcSubscriber);
            this.bcconnected = false;
          }
        }
        disconnect() {
          this.shouldConnect = false;
          this.disconnectBc();
          if (this.ws !== null) {
            this.ws.close();
          }
        }
        connect() {
          this.shouldConnect = true;
          if (!this.wsconnected && this.ws === null) {
            X(this);
            this.connectBc();
          }
        }
      }
    },
  },
]);
//# sourceMappingURL=4151.fd7ca59b64f0adc97032.js.map?v=fd7ca59b64f0adc97032
