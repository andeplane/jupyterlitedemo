(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [3502],
  {
    73502: (t, e, n) => {
      'use strict';
      n.r(e);
      n.d(e, {
        AbstractConnector: () => ne,
        AbstractStruct: () => Mr,
        AbstractType: () => Ns,
        Array: () => Xs,
        ContentAny: () => jr,
        ContentBinary: () => Or,
        ContentDeleted: () => Lr,
        ContentEmbed: () => Vr,
        ContentFormat: () => $r,
        ContentJSON: () => Hr,
        ContentString: () => Yr,
        ContentType: () => ni,
        Doc: () => me,
        GC: () => Nr,
        ID: () => qe,
        Item: () => li,
        Map: () => tr,
        PermanentUserData: () => sn,
        RelativePosition: () => rn,
        Snapshot: () => kn,
        Text: () => mr,
        Transaction: () => Hn,
        UndoManager: () => Qn,
        XmlElement: () => Er,
        XmlFragment: () => _r,
        XmlHook: () => Dr,
        XmlText: () => vr,
        YArrayEvent: () => Ks,
        YEvent: () => ys,
        YMapEvent: () => Qs,
        YTextEvent: () => wr,
        YXmlEvent: () => Cr,
        applyUpdate: () => Le,
        applyUpdateV2: () => Ue,
        compareIDs: () => Ke,
        compareRelativePositions: () => mn,
        createAbsolutePositionFromRelativePosition: () => wn,
        createDeleteSet: () => de,
        createDeleteSetFromStructStore: () => ue,
        createDocFromSnapshot: () => Mn,
        createID: () => Xe,
        createRelativePositionFromJSON: () => cn,
        createRelativePositionFromTypeIndex: () => dn,
        createSnapshot: () => Cn,
        decodeRelativePosition: () => pn,
        decodeSnapshot: () => Sn,
        decodeSnapshotV2: () => En,
        decodeStateVector: () => Fe,
        diffUpdate: () => fs,
        diffUpdateV2: () => us,
        emptySnapshot: () => Dn,
        encodeRelativePosition: () => fn,
        encodeSnapshot: () => bn,
        encodeSnapshotV2: () => _n,
        encodeStateAsUpdate: () => Pe,
        encodeStateAsUpdateV2: () => Re,
        encodeStateVector: () => We,
        encodeStateVectorFromUpdate: () => cs,
        encodeStateVectorFromUpdateV2: () => os,
        equalSnapshots: () => yn,
        findIndexSS: () => Ln,
        findRootTypeKey: () => tn,
        getItem: () => Rn,
        getState: () => On,
        getTypeChildren: () => Ms,
        isDeleted: () => ce,
        isParentOf: () => en,
        iterateDeletedStructs: () => ie,
        logType: () => nn,
        logUpdate: () => ns,
        logUpdateV2: () => ss,
        mergeUpdates: () => is,
        mergeUpdatesV2: () => ds,
        parseUpdateMeta: () => hs,
        parseUpdateMetaV2: () => ls,
        readUpdate: () => Oe,
        readUpdateV2: () => Ne,
        relativePositionToJSON: () => on,
        snapshot: () => An,
        transact: () => Kn,
        tryGc: () => Gn,
        typeListToArraySnapshot: () => Ls,
        typeMapGetSnapshot: () => Gs,
      });
      var s = n(58290);
      var r = n(7049);
      var i = n(14247);
      var o = n(72382);
      var c = n(29194);
      var l = n(64485);
      const h =
        typeof window === 'undefined'
          ? null
          : (typeof window.performance !== 'undefined' && window.performance) || null;
      const a = typeof crypto === 'undefined' ? null : crypto;
      const d =
        a !== null
          ? (t) => {
              const e = new ArrayBuffer(t);
              const n = new Uint8Array(e);
              a.getRandomValues(n);
              return e;
            }
          : (t) => {
              const e = new ArrayBuffer(t);
              const n = new Uint8Array(e);
              for (let s = 0; s < t; s++) {
                n[s] = Math.ceil((Math.random() * 4294967295) >>> 0);
              }
              return e;
            };
      const u = Math.random;
      const f = () => new Uint32Array(d(4))[0];
      const g = (t) => t[math.floor(u() * t.length)];
      const p = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
      const w = () =>
        p.replace(/[018]/g, (t) => (t ^ (f() & (15 >> (t / 4)))).toString(16));
      var m = n(65679);
      const k = (t) => new Error(t);
      const y = () => {
        throw k('Method unimplemented');
      };
      const _ = () => {
        throw k('Unexpected case');
      };
      var b = n(15966);
      var E = n(97027);
      var S = n(48307);
      var C = n(90421);
      const D = Symbol;
      const A = (t) => typeof t === 'symbol';
      class v {
        constructor(t, e) {
          this.left = t;
          this.right = e;
        }
      }
      const x = (t, e) => new v(t, e);
      const M = (t, e) => new v(e, t);
      const I = (t, e) => t.forEach((t) => e(t.left, t.right));
      const N = (t, e) => t.map((t) => e(t.left, t.right));
      const O = typeof document !== 'undefined' ? document : {};
      const U = (t) => O.createElement(t);
      const L = () => O.createDocumentFragment();
      const T = (t) => O.createTextNode(t);
      const R = typeof DOMParser !== 'undefined' ? new DOMParser() : null;
      const P = (t, e, n) => t.dispatchEvent(new CustomEvent(e, n));
      const V = (t, e) => {
        pair.forEach(e, (e, n) => {
          if (n === false) {
            t.removeAttribute(e);
          } else if (n === true) {
            t.setAttribute(e, '');
          } else {
            t.setAttribute(e, n);
          }
        });
        return t;
      };
      const F = (t, e) => {
        e.forEach((e, n) => {
          t.setAttribute(n, e);
        });
        return t;
      };
      const $ = (t) => {
        const e = L();
        for (let n = 0; n < t.length; n++) {
          ct(e, t[n]);
        }
        return e;
      };
      const J = (t, e) => {
        ct(t, $(e));
        return t;
      };
      const H = (t) => t.remove();
      const W = (t, e, n) => t.addEventListener(e, n);
      const j = (t, e, n) => t.removeEventListener(e, n);
      const z = (t, e) => {
        pair.forEach(e, (e, n) => W(t, e, n));
        return t;
      };
      const Y = (t, e) => {
        pair.forEach(e, (e, n) => j(t, e, n));
        return t;
      };
      const B = (t, e = [], n = []) => J(V(U(t), e), n);
      const G = (t, e) => {
        const n = U('canvas');
        n.height = e;
        n.width = t;
        return n;
      };
      const q = null && T;
      const K = (t) => `${t.left}:${t.right};`;
      const X = (t) => t.map(K).join('');
      const Z = (t) => o.UI(t, (t, e) => `${e}:${t};`).join('');
      const Q = (t, e) => t.querySelector(e);
      const tt = (t, e) => t.querySelectorAll(e);
      const et = (t) => O.getElementById(t);
      const nt = (t) =>
        R.parseFromString(`<html><body>${t}</body></html>`, 'text/html').body;
      const st = (t) => $(nt(t).childNodes);
      const rt = (t) => nt(t).firstElementChild;
      const it = (t, e) => t.replaceWith(e);
      const ot = (t, e, n) => t.insertBefore(e, n);
      const ct = (t, e) => t.appendChild(e);
      const lt = O.ELEMENT_NODE;
      const ht = O.TEXT_NODE;
      const at = O.CDATA_SECTION_NODE;
      const dt = O.COMMENT_NODE;
      const ut = O.DOCUMENT_NODE;
      const ft = O.DOCUMENT_TYPE_NODE;
      const gt = O.DOCUMENT_FRAGMENT_NODE;
      const pt = (t, e) => t.nodeType === e;
      const wt = (t, e) => {
        let n = e.parentNode;
        while (n && n !== t) {
          n = n.parentNode;
        }
        return n === t;
      };
      var mt = n(20817);
      const kt = D();
      const yt = D();
      const _t = D();
      const bt = D();
      const Et = D();
      const St = D();
      const Ct = D();
      const Dt = D();
      const At = D();
      const vt = {
        [kt]: x('font-weight', 'bold'),
        [yt]: x('font-weight', 'normal'),
        [_t]: x('color', 'blue'),
        [Et]: x('color', 'green'),
        [bt]: x('color', 'grey'),
        [St]: x('color', 'red'),
        [Ct]: x('color', 'purple'),
        [Dt]: x('color', 'orange'),
        [At]: x('color', 'black'),
      };
      const xt = {
        [kt]: '[1m',
        [yt]: '[2m',
        [_t]: '[34m',
        [Et]: '[32m',
        [bt]: '[37m',
        [St]: '[31m',
        [Ct]: '[35m',
        [Dt]: '[38;5;208m',
        [At]: '[0m',
      };
      const Mt = (t) => {
        const e = [];
        const n = [];
        const s = o.Ue();
        let r = [];
        let i = 0;
        for (; i < t.length; i++) {
          const r = t[i];
          const o = vt[r];
          if (o !== undefined) {
            s.set(o.left, o.right);
          } else {
            if (r.constructor === String || r.constructor === Number) {
              const t = Z(s);
              if (i > 0 || t.length > 0) {
                e.push('%c' + r);
                n.push(t);
              } else {
                e.push(r);
              }
            } else {
              break;
            }
          }
        }
        if (i > 0) {
          r = n;
          r.unshift(e.join(''));
        }
        for (; i < t.length; i++) {
          const e = t[i];
          if (!(e instanceof Symbol)) {
            r.push(e);
          }
        }
        return r;
      };
      const It = (t) => {
        const e = [];
        const n = [];
        let s = 0;
        for (; s < t.length; s++) {
          const n = t[s];
          const r = xt[n];
          if (r !== undefined) {
            e.push(r);
          } else {
            if (n.constructor === String || n.constructor === Number) {
              e.push(n);
            } else {
              break;
            }
          }
        }
        if (s > 0) {
          e.push('[0m');
          n.push(e.join(''));
        }
        for (; s < t.length; s++) {
          const e = t[s];
          if (!(e instanceof Symbol)) {
            n.push(e);
          }
        }
        return n;
      };
      const Nt = C.UG ? It : Mt;
      const Ot = (...t) => {
        console.log(...Nt(t));
        Ht.forEach((e) => e.print(t));
      };
      const Ut = (...t) => {
        console.warn(...Nt(t));
        t.unshift(Dt);
        Ht.forEach((e) => e.print(t));
      };
      const Lt = (t) => {
        console.error(t);
        Ht.forEach((e) => e.printError(t));
      };
      const Tt = (t, e) => {
        if (env.isBrowser) {
          console.log(
            '%c                      ',
            `font-size: ${e}px; background-size: contain; background-repeat: no-repeat; background-image: url(${t})`
          );
        }
        Ht.forEach((n) => n.printImg(t, e));
      };
      const Rt = (t, e) => Tt(`data:image/gif;base64,${t}`, e);
      const Pt = (...t) => {
        console.group(...Nt(t));
        Ht.forEach((e) => e.group(t));
      };
      const Vt = (...t) => {
        console.groupCollapsed(...Nt(t));
        Ht.forEach((e) => e.groupCollapsed(t));
      };
      const Ft = () => {
        console.groupEnd();
        Ht.forEach((t) => t.groupEnd());
      };
      const $t = (t) => Ht.forEach((e) => e.printDom(t()));
      const Jt = (t, e) => Tt(t.toDataURL(), e);
      const Ht = new Set();
      const Wt = (t) => {
        const e = [];
        const n = new Map();
        let s = 0;
        for (; s < t.length; s++) {
          const r = t[s];
          const i = vt[r];
          if (i !== undefined) {
            n.set(i.left, i.right);
          } else {
            if (r.constructor === String || r.constructor === Number) {
              const t = dom.element(
                'span',
                [pair.create('style', dom.mapToStyleString(n))],
                [dom.text(r)]
              );
              if (t.innerHTML === '') {
                t.innerHTML = '&nbsp;';
              }
              e.push(t);
            } else {
              break;
            }
          }
        }
        for (; s < t.length; s++) {
          let n = t[s];
          if (!(n instanceof Symbol)) {
            if (n.constructor !== String && n.constructor !== Number) {
              n = ' ' + json.stringify(n) + ' ';
            }
            e.push(dom.element('span', [], [dom.text(n)]));
          }
        }
        return e;
      };
      const jt = 'font-family:monospace;border-bottom:1px solid #e2e2e2;padding:2px;';
      class zt {
        constructor(t) {
          this.dom = t;
          this.ccontainer = this.dom;
          this.depth = 0;
          Ht.add(this);
        }
        group(t, e = false) {
          eventloop.enqueue(() => {
            const n = dom.element(
              'span',
              [
                pair.create('hidden', e),
                pair.create('style', 'color:grey;font-size:120%;'),
              ],
              [dom.text('▼')]
            );
            const s = dom.element(
              'span',
              [
                pair.create('hidden', !e),
                pair.create('style', 'color:grey;font-size:125%;'),
              ],
              [dom.text('▶')]
            );
            const r = dom.element(
              'div',
              [pair.create('style', `${jt};padding-left:${this.depth * 10}px`)],
              [n, s, dom.text(' ')].concat(Wt(t))
            );
            const i = dom.element('div', [pair.create('hidden', e)]);
            const o = dom.element('div', [], [r, i]);
            dom.append(this.ccontainer, [o]);
            this.ccontainer = i;
            this.depth++;
            dom.addEventListener(r, 'click', (t) => {
              i.toggleAttribute('hidden');
              n.toggleAttribute('hidden');
              s.toggleAttribute('hidden');
            });
          });
        }
        groupCollapsed(t) {
          this.group(t, true);
        }
        groupEnd() {
          eventloop.enqueue(() => {
            if (this.depth > 0) {
              this.depth--;
              this.ccontainer = this.ccontainer.parentElement.parentElement;
            }
          });
        }
        print(t) {
          eventloop.enqueue(() => {
            dom.append(this.ccontainer, [
              dom.element(
                'div',
                [pair.create('style', `${jt};padding-left:${this.depth * 10}px`)],
                Wt(t)
              ),
            ]);
          });
        }
        printError(t) {
          this.print([St, kt, t.toString()]);
        }
        printImg(t, e) {
          eventloop.enqueue(() => {
            dom.append(this.ccontainer, [
              dom.element('img', [
                pair.create('src', t),
                pair.create('height', `${math.round(e * 1.5)}px`),
              ]),
            ]);
          });
        }
        printDom(t) {
          eventloop.enqueue(() => {
            dom.append(this.ccontainer, [t]);
          });
        }
        destroy() {
          eventloop.enqueue(() => {
            Ht.delete(this);
          });
        }
      }
      const Yt = (t) => new zt(t);
      const Bt = [Et, Ct, Dt, _t];
      let Gt = 0;
      let qt = mt.ZG();
      const Kt = (t) => {
        const e = Bt[Gt];
        const n = env.getVariable('log');
        const s =
          n !== null && (n === '*' || n === 'true' || new RegExp(n, 'gi').test(t));
        Gt = (Gt + 1) % Bt.length;
        t += ': ';
        return !s
          ? func.nop
          : (...n) => {
              const s = time.getUnixTime();
              const r = s - qt;
              qt = s;
              Ot(
                e,
                t,
                At,
                ...n.map((t) =>
                  typeof t === 'string' || typeof t === 'symbol' ? t : JSON.stringify(t)
                ),
                e,
                ' +' + r + 'ms'
              );
            };
      };
      const Xt = (t, e) => ({
        [Symbol.iterator]() {
          return this;
        },
        next() {
          const n = t.next();
          return { value: n.done ? undefined : e(n.value), done: n.done };
        },
      });
      const Zt = (t) => ({
        [Symbol.iterator]() {
          return this;
        },
        next: t,
      });
      const Qt = (t, e) =>
        Zt(() => {
          let n;
          do {
            n = t.next();
          } while (!n.done && !e(n.value));
          return n;
        });
      const te = (t, e) =>
        Zt(() => {
          const { done: n, value: s } = t.next();
          return { done: n, value: n ? undefined : e(s) };
        });
      var ee = n(59735);
      class ne extends s.y {
        constructor(t, e) {
          super();
          this.doc = t;
          this.awareness = e;
        }
      }
      class se {
        constructor(t, e) {
          this.clock = t;
          this.len = e;
        }
      }
      class re {
        constructor() {
          this.clients = new Map();
        }
      }
      const ie = (t, e, n) =>
        e.clients.forEach((e, s) => {
          const r = t.doc.store.clients.get(s);
          for (let i = 0; i < e.length; i++) {
            const s = e[i];
            Jn(t, r, s.clock, s.len, n);
          }
        });
      const oe = (t, e) => {
        let n = 0;
        let s = t.length - 1;
        while (n <= s) {
          const r = i.GW((n + s) / 2);
          const o = t[r];
          const c = o.clock;
          if (c <= e) {
            if (e < c + o.len) {
              return r;
            }
            n = r + 1;
          } else {
            s = r - 1;
          }
        }
        return null;
      };
      const ce = (t, e) => {
        const n = t.clients.get(e.client);
        return n !== undefined && oe(n, e.clock) !== null;
      };
      const le = (t) => {
        t.clients.forEach((t) => {
          t.sort((t, e) => t.clock - e.clock);
          let e, n;
          for (e = 1, n = 1; e < t.length; e++) {
            const s = t[n - 1];
            const r = t[e];
            if (s.clock + s.len >= r.clock) {
              s.len = i.Fp(s.len, r.clock + r.len - s.clock);
            } else {
              if (n < e) {
                t[n] = r;
              }
              n++;
            }
          }
          t.length = n;
        });
      };
      const he = (t) => {
        const e = new re();
        for (let n = 0; n < t.length; n++) {
          t[n].clients.forEach((s, i) => {
            if (!e.clients.has(i)) {
              const o = s.slice();
              for (let e = n + 1; e < t.length; e++) {
                r.s7(o, t[e].clients.get(i) || []);
              }
              e.clients.set(i, o);
            }
          });
        }
        le(e);
        return e;
      };
      const ae = (t, e, n, s) => {
        o.Yu(t.clients, e, () => []).push(new se(n, s));
      };
      const de = () => new re();
      const ue = (t) => {
        const e = de();
        t.clients.forEach((t, n) => {
          const s = [];
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (n.deleted) {
              const r = n.id.clock;
              let i = n.length;
              if (e + 1 < t.length) {
                for (let n = t[e + 1]; e + 1 < t.length && n.deleted; n = t[++e + 1]) {
                  i += n.length;
                }
              }
              s.push(new se(r, i));
            }
          }
          if (s.length > 0) {
            e.clients.set(n, s);
          }
        });
        return e;
      };
      const fe = (t, e) => {
        c.uE(t.restEncoder, e.clients.size);
        e.clients.forEach((e, n) => {
          t.resetDsCurVal();
          c.uE(t.restEncoder, n);
          const s = e.length;
          c.uE(t.restEncoder, s);
          for (let r = 0; r < s; r++) {
            const n = e[r];
            t.writeDsClock(n.clock);
            t.writeDsLen(n.len);
          }
        });
      };
      const ge = (t) => {
        const e = new re();
        const n = l.yg(t.restDecoder);
        for (let s = 0; s < n; s++) {
          t.resetDsCurVal();
          const n = l.yg(t.restDecoder);
          const s = l.yg(t.restDecoder);
          if (s > 0) {
            const r = o.Yu(e.clients, n, () => []);
            for (let e = 0; e < s; e++) {
              r.push(new se(t.readDsClock(), t.readDsLen()));
            }
          }
        }
        return e;
      };
      const pe = (t, e, n) => {
        const s = new re();
        const r = l.yg(t.restDecoder);
        for (let i = 0; i < r; i++) {
          t.resetDsCurVal();
          const r = l.yg(t.restDecoder);
          const i = l.yg(t.restDecoder);
          const o = n.clients.get(r) || [];
          const c = On(n, r);
          for (let n = 0; n < i; n++) {
            const n = t.readDsClock();
            const i = n + t.readDsLen();
            if (n < c) {
              if (c < i) {
                ae(s, r, c, i - c);
              }
              let t = Ln(o, n);
              let l = o[t];
              if (!l.deleted && l.id.clock < n) {
                o.splice(t + 1, 0, oi(e, l, n - l.id.clock));
                t++;
              }
              while (t < o.length) {
                l = o[t++];
                if (l.id.clock < i) {
                  if (!l.deleted) {
                    if (i < l.id.clock + l.length) {
                      o.splice(t, 0, oi(e, l, i - l.id.clock));
                    }
                    l.delete(e);
                  }
                } else {
                  break;
                }
              }
            } else {
              ae(s, r, n, i - n);
            }
          }
        }
        if (s.clients.size > 0) {
          const t = new De();
          c.uE(t.restEncoder, 0);
          fe(t, s);
          return t.toUint8Array();
        }
        return null;
      };
      const we = f;
      class me extends s.y {
        constructor({
          guid: t = w(),
          collectionid: e = null,
          gc: n = true,
          gcFilter: s = () => true,
          meta: r = null,
          autoLoad: i = false,
        } = {}) {
          super();
          this.gc = n;
          this.gcFilter = s;
          this.clientID = we();
          this.guid = t;
          this.collectionid = e;
          this.share = new Map();
          this.store = new In();
          this._transaction = null;
          this._transactionCleanups = [];
          this.subdocs = new Set();
          this._item = null;
          this.shouldLoad = i;
          this.autoLoad = i;
          this.meta = r;
        }
        load() {
          const t = this._item;
          if (t !== null && !this.shouldLoad) {
            Kn(
              t.parent.doc,
              (t) => {
                t.subdocsLoaded.add(this);
              },
              null,
              true
            );
          }
          this.shouldLoad = true;
        }
        getSubdocs() {
          return this.subdocs;
        }
        getSubdocGuids() {
          return new Set(Array.from(this.subdocs).map((t) => t.guid));
        }
        transact(t, e = null) {
          Kn(this, t, e);
        }
        get(t, e = Ns) {
          const n = o.Yu(this.share, t, () => {
            const t = new e();
            t._integrate(this, null);
            return t;
          });
          const s = n.constructor;
          if (e !== Ns && s !== e) {
            if (s === Ns) {
              const s = new e();
              s._map = n._map;
              n._map.forEach((t) => {
                for (; t !== null; t = t.left) {
                  t.parent = s;
                }
              });
              s._start = n._start;
              for (let t = s._start; t !== null; t = t.right) {
                t.parent = s;
              }
              s._length = n._length;
              this.share.set(t, s);
              s._integrate(this, null);
              return s;
            } else {
              throw new Error(
                `Type with the name ${t} has already been defined with a different constructor`
              );
            }
          }
          return n;
        }
        getArray(t = '') {
          return this.get(t, Xs);
        }
        getText(t = '') {
          return this.get(t, mr);
        }
        getMap(t = '') {
          return this.get(t, tr);
        }
        getXmlFragment(t = '') {
          return this.get(t, _r);
        }
        toJSON() {
          const t = {};
          this.share.forEach((e, n) => {
            t[n] = e.toJSON();
          });
          return t;
        }
        destroy() {
          r.Dp(this.subdocs).forEach((t) => t.destroy());
          const t = this._item;
          if (t !== null) {
            this._item = null;
            const e = t.content;
            if (t.deleted) {
              e.doc = null;
            } else {
              e.doc = new me({ guid: this.guid, ...e.opts });
              e.doc._item = t;
            }
            Kn(
              t.parent.doc,
              (n) => {
                if (!t.deleted) {
                  n.subdocsAdded.add(e.doc);
                }
                n.subdocsRemoved.add(this);
              },
              null,
              true
            );
          }
          this.emit('destroyed', [true]);
          this.emit('destroy', [this]);
          super.destroy();
        }
        on(t, e) {
          super.on(t, e);
        }
        off(t, e) {
          super.off(t, e);
        }
      }
      class ke {
        constructor(t) {
          this.restDecoder = t;
        }
        resetDsCurVal() {}
        readDsClock() {
          return l.yg(this.restDecoder);
        }
        readDsLen() {
          return l.yg(this.restDecoder);
        }
      }
      class ye extends ke {
        readLeftID() {
          return Xe(l.yg(this.restDecoder), l.yg(this.restDecoder));
        }
        readRightID() {
          return Xe(l.yg(this.restDecoder), l.yg(this.restDecoder));
        }
        readClient() {
          return l.yg(this.restDecoder);
        }
        readInfo() {
          return l.kj(this.restDecoder);
        }
        readString() {
          return l.kf(this.restDecoder);
        }
        readParentInfo() {
          return l.yg(this.restDecoder) === 1;
        }
        readTypeRef() {
          return l.yg(this.restDecoder);
        }
        readLen() {
          return l.yg(this.restDecoder);
        }
        readAny() {
          return l.v_(this.restDecoder);
        }
        readBuf() {
          return m.f9(l.HN(this.restDecoder));
        }
        readJSON() {
          return JSON.parse(l.kf(this.restDecoder));
        }
        readKey() {
          return l.kf(this.restDecoder);
        }
      }
      class _e {
        constructor(t) {
          this.dsCurrVal = 0;
          this.restDecoder = t;
        }
        resetDsCurVal() {
          this.dsCurrVal = 0;
        }
        readDsClock() {
          this.dsCurrVal += l.yg(this.restDecoder);
          return this.dsCurrVal;
        }
        readDsLen() {
          const t = l.yg(this.restDecoder) + 1;
          this.dsCurrVal += t;
          return t;
        }
      }
      class be extends _e {
        constructor(t) {
          super(t);
          this.keys = [];
          l.yg(t);
          this.keyClockDecoder = new l.dD(l.HN(t));
          this.clientDecoder = new l.UF(l.HN(t));
          this.leftClockDecoder = new l.dD(l.HN(t));
          this.rightClockDecoder = new l.dD(l.HN(t));
          this.infoDecoder = new l.XW(l.HN(t), l.kj);
          this.stringDecoder = new l.sO(l.HN(t));
          this.parentInfoDecoder = new l.XW(l.HN(t), l.kj);
          this.typeRefDecoder = new l.UF(l.HN(t));
          this.lenDecoder = new l.UF(l.HN(t));
        }
        readLeftID() {
          return new qe(this.clientDecoder.read(), this.leftClockDecoder.read());
        }
        readRightID() {
          return new qe(this.clientDecoder.read(), this.rightClockDecoder.read());
        }
        readClient() {
          return this.clientDecoder.read();
        }
        readInfo() {
          return this.infoDecoder.read();
        }
        readString() {
          return this.stringDecoder.read();
        }
        readParentInfo() {
          return this.parentInfoDecoder.read() === 1;
        }
        readTypeRef() {
          return this.typeRefDecoder.read();
        }
        readLen() {
          return this.lenDecoder.read();
        }
        readAny() {
          return l.v_(this.restDecoder);
        }
        readBuf() {
          return l.HN(this.restDecoder);
        }
        readJSON() {
          return l.v_(this.restDecoder);
        }
        readKey() {
          const t = this.keyClockDecoder.read();
          if (t < this.keys.length) {
            return this.keys[t];
          } else {
            const t = this.stringDecoder.read();
            this.keys.push(t);
            return t;
          }
        }
      }
      class Ee {
        constructor() {
          this.restEncoder = c.Mf();
        }
        toUint8Array() {
          return c._f(this.restEncoder);
        }
        resetDsCurVal() {}
        writeDsClock(t) {
          c.uE(this.restEncoder, t);
        }
        writeDsLen(t) {
          c.uE(this.restEncoder, t);
        }
      }
      class Se extends Ee {
        writeLeftID(t) {
          c.uE(this.restEncoder, t.client);
          c.uE(this.restEncoder, t.clock);
        }
        writeRightID(t) {
          c.uE(this.restEncoder, t.client);
          c.uE(this.restEncoder, t.clock);
        }
        writeClient(t) {
          c.uE(this.restEncoder, t);
        }
        writeInfo(t) {
          c.$F(this.restEncoder, t);
        }
        writeString(t) {
          c.uw(this.restEncoder, t);
        }
        writeParentInfo(t) {
          c.uE(this.restEncoder, t ? 1 : 0);
        }
        writeTypeRef(t) {
          c.uE(this.restEncoder, t);
        }
        writeLen(t) {
          c.uE(this.restEncoder, t);
        }
        writeAny(t) {
          c.EM(this.restEncoder, t);
        }
        writeBuf(t) {
          c.mP(this.restEncoder, t);
        }
        writeJSON(t) {
          c.uw(this.restEncoder, JSON.stringify(t));
        }
        writeKey(t) {
          c.uw(this.restEncoder, t);
        }
      }
      class Ce {
        constructor() {
          this.restEncoder = c.Mf();
          this.dsCurrVal = 0;
        }
        toUint8Array() {
          return c._f(this.restEncoder);
        }
        resetDsCurVal() {
          this.dsCurrVal = 0;
        }
        writeDsClock(t) {
          const e = t - this.dsCurrVal;
          this.dsCurrVal = t;
          c.uE(this.restEncoder, e);
        }
        writeDsLen(t) {
          if (t === 0) {
            _();
          }
          c.uE(this.restEncoder, t - 1);
          this.dsCurrVal += t;
        }
      }
      class De extends Ce {
        constructor() {
          super();
          this.keyMap = new Map();
          this.keyClock = 0;
          this.keyClockEncoder = new c.sX();
          this.clientEncoder = new c.HE();
          this.leftClockEncoder = new c.sX();
          this.rightClockEncoder = new c.sX();
          this.infoEncoder = new c.GF(c.$F);
          this.stringEncoder = new c.TS();
          this.parentInfoEncoder = new c.GF(c.$F);
          this.typeRefEncoder = new c.HE();
          this.lenEncoder = new c.HE();
        }
        toUint8Array() {
          const t = c.Mf();
          c.uE(t, 0);
          c.mP(t, this.keyClockEncoder.toUint8Array());
          c.mP(t, this.clientEncoder.toUint8Array());
          c.mP(t, this.leftClockEncoder.toUint8Array());
          c.mP(t, this.rightClockEncoder.toUint8Array());
          c.mP(t, c._f(this.infoEncoder));
          c.mP(t, this.stringEncoder.toUint8Array());
          c.mP(t, c._f(this.parentInfoEncoder));
          c.mP(t, this.typeRefEncoder.toUint8Array());
          c.mP(t, this.lenEncoder.toUint8Array());
          c.HK(t, c._f(this.restEncoder));
          return c._f(t);
        }
        writeLeftID(t) {
          this.clientEncoder.write(t.client);
          this.leftClockEncoder.write(t.clock);
        }
        writeRightID(t) {
          this.clientEncoder.write(t.client);
          this.rightClockEncoder.write(t.clock);
        }
        writeClient(t) {
          this.clientEncoder.write(t);
        }
        writeInfo(t) {
          this.infoEncoder.write(t);
        }
        writeString(t) {
          this.stringEncoder.write(t);
        }
        writeParentInfo(t) {
          this.parentInfoEncoder.write(t ? 1 : 0);
        }
        writeTypeRef(t) {
          this.typeRefEncoder.write(t);
        }
        writeLen(t) {
          this.lenEncoder.write(t);
        }
        writeAny(t) {
          c.EM(this.restEncoder, t);
        }
        writeBuf(t) {
          c.mP(this.restEncoder, t);
        }
        writeJSON(t) {
          c.EM(this.restEncoder, t);
        }
        writeKey(t) {
          const e = this.keyMap.get(t);
          if (e === undefined) {
            this.keyClockEncoder.write(this.keyClock++);
            this.stringEncoder.write(t);
          } else {
            this.keyClockEncoder.write(this.keyClock++);
          }
        }
      }
      const Ae = (t, e, n, s) => {
        s = i.Fp(s, e[0].id.clock);
        const r = Ln(e, s);
        c.uE(t.restEncoder, e.length - r);
        t.writeClient(n);
        c.uE(t.restEncoder, s);
        const o = e[r];
        o.write(t, s - o.id.clock);
        for (let i = r + 1; i < e.length; i++) {
          e[i].write(t, 0);
        }
      };
      const ve = (t, e, n) => {
        const s = new Map();
        n.forEach((t, n) => {
          if (On(e, n) > t) {
            s.set(n, t);
          }
        });
        Nn(e).forEach((t, e) => {
          if (!n.has(e)) {
            s.set(e, 0);
          }
        });
        c.uE(t.restEncoder, s.size);
        Array.from(s.entries())
          .sort((t, e) => e[0] - t[0])
          .forEach(([n, s]) => {
            Ae(t, e.clients.get(n), n, s);
          });
      };
      const xe = (t, e) => {
        const n = o.Ue();
        const s = l.yg(t.restDecoder);
        for (let r = 0; r < s; r++) {
          const s = l.yg(t.restDecoder);
          const r = new Array(s);
          const i = t.readClient();
          let o = l.yg(t.restDecoder);
          n.set(i, { i: 0, refs: r });
          for (let n = 0; n < s; n++) {
            const s = t.readInfo();
            switch (b.kr & s) {
              case 0: {
                const e = t.readLen();
                r[n] = new Nr(Xe(i, o), e);
                o += e;
                break;
              }
              case 10: {
                const e = l.yg(t.restDecoder);
                r[n] = new ui(Xe(i, o), e);
                o += e;
                break;
              }
              default: {
                const c = (s & (b.rc | b.x1)) === 0;
                const l = new li(
                  Xe(i, o),
                  null,
                  (s & b.x1) === b.x1 ? t.readLeftID() : null,
                  null,
                  (s & b.rc) === b.rc ? t.readRightID() : null,
                  c
                    ? t.readParentInfo()
                      ? e.get(t.readString())
                      : t.readLeftID()
                    : null,
                  c && (s & b.cq) === b.cq ? t.readString() : null,
                  hi(t, s)
                );
                r[n] = l;
                o += l.length;
              }
            }
          }
        }
        return n;
      };
      const Me = (t, e, n) => {
        const s = [];
        let r = Array.from(n.keys()).sort((t, e) => t - e);
        if (r.length === 0) {
          return null;
        }
        const i = () => {
          if (r.length === 0) {
            return null;
          }
          let t = n.get(r[r.length - 1]);
          while (t.refs.length === t.i) {
            r.pop();
            if (r.length > 0) {
              t = n.get(r[r.length - 1]);
            } else {
              return null;
            }
          }
          return t;
        };
        let l = i();
        if (l === null && s.length === 0) {
          return null;
        }
        const h = new In();
        const a = new Map();
        const d = (t, e) => {
          const n = a.get(t);
          if (n == null || n > e) {
            a.set(t, e);
          }
        };
        let u = l.refs[l.i++];
        const f = new Map();
        const g = () => {
          for (const t of s) {
            const e = t.id.client;
            const s = n.get(e);
            if (s) {
              s.i--;
              h.clients.set(e, s.refs.slice(s.i));
              n.delete(e);
              s.i = 0;
              s.refs = [];
            } else {
              h.clients.set(e, [t]);
            }
            r = r.filter((t) => t !== e);
          }
          s.length = 0;
        };
        while (true) {
          if (u.constructor !== ui) {
            const r = o.Yu(f, u.id.client, () => On(e, u.id.client));
            const i = r - u.id.clock;
            if (i < 0) {
              s.push(u);
              d(u.id.client, u.id.clock - 1);
              g();
            } else {
              const r = u.getMissing(t, e);
              if (r !== null) {
                s.push(u);
                const t = n.get(r) || { refs: [], i: 0 };
                if (t.refs.length === t.i) {
                  d(r, On(e, r));
                  g();
                } else {
                  u = t.refs[t.i++];
                  continue;
                }
              } else if (i === 0 || i < u.length) {
                u.integrate(t, i);
                f.set(u.id.client, u.id.clock + u.length);
              }
            }
          }
          if (s.length > 0) {
            u = s.pop();
          } else if (l !== null && l.i < l.refs.length) {
            u = l.refs[l.i++];
          } else {
            l = i();
            if (l === null) {
              break;
            } else {
              u = l.refs[l.i++];
            }
          }
        }
        if (h.clients.size > 0) {
          const t = new De();
          ve(t, h, new Map());
          c.uE(t.restEncoder, 0);
          return { missing: a, update: t.toUint8Array() };
        }
        return null;
      };
      const Ie = (t, e) => ve(t, e.doc.store, e.beforeState);
      const Ne = (t, e, n, s = new be(t)) =>
        Kn(
          e,
          (t) => {
            t.local = false;
            let e = false;
            const n = t.doc;
            const r = n.store;
            const i = xe(s, n);
            const o = Me(t, r, i);
            const c = r.pendingStructs;
            if (c) {
              for (const [t, n] of c.missing) {
                if (n < On(r, t)) {
                  e = true;
                  break;
                }
              }
              if (o) {
                for (const [t, e] of o.missing) {
                  const n = c.missing.get(t);
                  if (n == null || n > e) {
                    c.missing.set(t, e);
                  }
                }
                c.update = ds([c.update, o.update]);
              }
            } else {
              r.pendingStructs = o;
            }
            const h = pe(s, t, r);
            if (r.pendingDs) {
              const e = new be(l.l1(r.pendingDs));
              l.yg(e.restDecoder);
              const n = pe(e, t, r);
              if (h && n) {
                r.pendingDs = ds([h, n]);
              } else {
                r.pendingDs = h || n;
              }
            } else {
              r.pendingDs = h;
            }
            if (e) {
              const e = r.pendingStructs.update;
              r.pendingStructs = null;
              Ue(t.doc, e);
            }
          },
          n,
          false
        );
      const Oe = (t, e, n) => Ne(t, e, n, new ye(t));
      const Ue = (t, e, n, s = be) => {
        const r = l.l1(e);
        Ne(r, t, n, new s(r));
      };
      const Le = (t, e, n) => Ue(t, e, n, ye);
      const Te = (t, e, n = new Map()) => {
        ve(t, e.store, n);
        fe(t, ue(e.store));
      };
      const Re = (t, e = new Uint8Array([0]), n = new De()) => {
        const s = Fe(e);
        Te(n, t, s);
        const r = [n.toUint8Array()];
        if (t.store.pendingDs) {
          r.push(t.store.pendingDs);
        }
        if (t.store.pendingStructs) {
          r.push(us(t.store.pendingStructs.update, e));
        }
        if (r.length > 1) {
          if (n.constructor === Se) {
            return is(r.map((t, e) => (e === 0 ? t : ks(t))));
          } else if (n.constructor === De) {
            return ds(r);
          }
        }
        return r[0];
      };
      const Pe = (t, e) => Re(t, e, new Se());
      const Ve = (t) => {
        const e = new Map();
        const n = l.yg(t.restDecoder);
        for (let s = 0; s < n; s++) {
          const n = l.yg(t.restDecoder);
          const s = l.yg(t.restDecoder);
          e.set(n, s);
        }
        return e;
      };
      const Fe = (t) => Ve(new ke(l.l1(t)));
      const $e = (t, e) => {
        c.uE(t.restEncoder, e.size);
        e.forEach((e, n) => {
          c.uE(t.restEncoder, n);
          c.uE(t.restEncoder, e);
        });
        return t;
      };
      const Je = (t, e) => $e(t, Nn(e.store));
      const He = (t, e = new Ce()) => {
        if (t instanceof Map) {
          $e(e, t);
        } else {
          Je(e, t);
        }
        return e.toUint8Array();
      };
      const We = (t) => He(t, new Ee());
      class je {
        constructor() {
          this.l = [];
        }
      }
      const ze = () => new je();
      const Ye = (t, e) => t.l.push(e);
      const Be = (t, e) => {
        const n = t.l;
        const s = n.length;
        t.l = n.filter((t) => e !== t);
        if (s === t.l.length) {
          console.error("[yjs] Tried to remove event handler that doesn't exist.");
        }
      };
      const Ge = (t, e, n) => E.PP(t.l, [e, n]);
      class qe {
        constructor(t, e) {
          this.client = t;
          this.clock = e;
        }
      }
      const Ke = (t, e) =>
        t === e ||
        (t !== null && e !== null && t.client === e.client && t.clock === e.clock);
      const Xe = (t, e) => new qe(t, e);
      const Ze = (t, e) => {
        c.uE(t, e.client);
        c.uE(t, e.clock);
      };
      const Qe = (t) => Xe(l.yg(t), l.yg(t));
      const tn = (t) => {
        for (const [e, n] of t.doc.share.entries()) {
          if (n === t) {
            return e;
          }
        }
        throw _();
      };
      const en = (t, e) => {
        while (e !== null) {
          if (e.parent === t) {
            return true;
          }
          e = e.parent._item;
        }
        return false;
      };
      const nn = (t) => {
        const e = [];
        let n = t._start;
        while (n) {
          e.push(n);
          n = n.right;
        }
        console.log('Children: ', e);
        console.log(
          'Children content: ',
          e.filter((t) => !t.deleted).map((t) => t.content)
        );
      };
      class sn {
        constructor(t, e = t.getMap('users')) {
          const n = new Map();
          this.yusers = e;
          this.doc = t;
          this.clients = new Map();
          this.dss = n;
          const s = (t, e) => {
            const n = t.get('ds');
            const s = t.get('ids');
            const r = (t) => this.clients.set(t, e);
            n.observe((t) => {
              t.changes.added.forEach((t) => {
                t.content.getContent().forEach((t) => {
                  if (t instanceof Uint8Array) {
                    this.dss.set(e, he([this.dss.get(e) || de(), ge(new ke(l.l1(t)))]));
                  }
                });
              });
            });
            this.dss.set(e, he(n.map((t) => ge(new ke(l.l1(t))))));
            s.observe((t) =>
              t.changes.added.forEach((t) => t.content.getContent().forEach(r))
            );
            s.forEach(r);
          };
          e.observe((t) => {
            t.keysChanged.forEach((t) => s(e.get(t), t));
          });
          e.forEach(s);
        }
        setUserMapping(t, e, n, { filter: s = () => true } = {}) {
          const r = this.yusers;
          let i = r.get(n);
          if (!i) {
            i = new tr();
            i.set('ids', new Xs());
            i.set('ds', new Xs());
            r.set(n, i);
          }
          i.get('ids').push([e]);
          r.observe((t) => {
            setTimeout(() => {
              const t = r.get(n);
              if (t !== i) {
                i = t;
                this.clients.forEach((t, e) => {
                  if (n === t) {
                    i.get('ids').push([e]);
                  }
                });
                const e = new Ee();
                const s = this.dss.get(n);
                if (s) {
                  fe(e, s);
                  i.get('ds').push([e.toUint8Array()]);
                }
              }
            }, 0);
          });
          t.on('afterTransaction', (t) => {
            setTimeout(() => {
              const e = i.get('ds');
              const n = t.deleteSet;
              if (t.local && n.clients.size > 0 && s(t, n)) {
                const t = new Ee();
                fe(t, n);
                e.push([t.toUint8Array()]);
              }
            });
          });
        }
        getUserByClientId(t) {
          return this.clients.get(t) || null;
        }
        getUserByDeletedId(t) {
          for (const [e, n] of this.dss.entries()) {
            if (ce(n, t)) {
              return e;
            }
          }
          return null;
        }
      }
      class rn {
        constructor(t, e, n, s = 0) {
          this.type = t;
          this.tname = e;
          this.item = n;
          this.assoc = s;
        }
      }
      const on = (t) => {
        const e = {};
        if (t.type) {
          e.type = t.type;
        }
        if (t.tname) {
          e.tname = t.tname;
        }
        if (t.item) {
          e.item = t.item;
        }
        if (t.assoc != null) {
          e.assoc = t.assoc;
        }
        return e;
      };
      const cn = (t) =>
        new rn(
          t.type == null ? null : Xe(t.type.client, t.type.clock),
          t.tname || null,
          t.item == null ? null : Xe(t.item.client, t.item.clock),
          t.assoc == null ? 0 : t.assoc
        );
      class ln {
        constructor(t, e, n = 0) {
          this.type = t;
          this.index = e;
          this.assoc = n;
        }
      }
      const hn = (t, e, n = 0) => new ln(t, e, n);
      const an = (t, e, n) => {
        let s = null;
        let r = null;
        if (t._item === null) {
          r = tn(t);
        } else {
          s = Xe(t._item.id.client, t._item.id.clock);
        }
        return new rn(s, r, e, n);
      };
      const dn = (t, e, n = 0) => {
        let s = t._start;
        if (n < 0) {
          if (e === 0) {
            return an(t, null, n);
          }
          e--;
        }
        while (s !== null) {
          if (!s.deleted && s.countable) {
            if (s.length > e) {
              return an(t, Xe(s.id.client, s.id.clock + e), n);
            }
            e -= s.length;
          }
          if (s.right === null && n < 0) {
            return an(t, s.lastId, n);
          }
          s = s.right;
        }
        return an(t, null, n);
      };
      const un = (t, e) => {
        const { type: n, tname: s, item: r, assoc: i } = e;
        if (r !== null) {
          c.uE(t, 0);
          Ze(t, r);
        } else if (s !== null) {
          c.$F(t, 1);
          c.uw(t, s);
        } else if (n !== null) {
          c.$F(t, 2);
          Ze(t, n);
        } else {
          throw _();
        }
        c.pY(t, i);
        return t;
      };
      const fn = (t) => {
        const e = c.Mf();
        un(e, t);
        return c._f(e);
      };
      const gn = (t) => {
        let e = null;
        let n = null;
        let s = null;
        switch (l.yg(t)) {
          case 0:
            s = Qe(t);
            break;
          case 1:
            n = l.kf(t);
            break;
          case 2: {
            e = Qe(t);
          }
        }
        const r = l.v3(t) ? l.F7(t) : 0;
        return new rn(e, n, s, r);
      };
      const pn = (t) => gn(l.l1(t));
      const wn = (t, e) => {
        const n = e.store;
        const s = t.item;
        const r = t.type;
        const i = t.tname;
        const o = t.assoc;
        let c = null;
        let l = 0;
        if (s !== null) {
          if (On(n, s.client) <= s.clock) {
            return null;
          }
          const t = ri(n, s);
          const e = t.item;
          if (!(e instanceof li)) {
            return null;
          }
          c = e.parent;
          if (c._item === null || !c._item.deleted) {
            l = e.deleted || !e.countable ? 0 : t.diff + (o >= 0 ? 0 : 1);
            let n = e.left;
            while (n !== null) {
              if (!n.deleted && n.countable) {
                l += n.length;
              }
              n = n.left;
            }
          }
        } else {
          if (i !== null) {
            c = e.get(i);
          } else if (r !== null) {
            if (On(n, r.client) <= r.clock) {
              return null;
            }
            const { item: t } = ri(n, r);
            if (t instanceof li && t.content instanceof ni) {
              c = t.content.type;
            } else {
              return null;
            }
          } else {
            throw _();
          }
          if (o >= 0) {
            l = c._length;
          } else {
            l = 0;
          }
        }
        return hn(c, l, t.assoc);
      };
      const mn = (t, e) =>
        t === e ||
        (t !== null &&
          e !== null &&
          t.tname === e.tname &&
          Ke(t.item, e.item) &&
          Ke(t.type, e.type) &&
          t.assoc === e.assoc);
      class kn {
        constructor(t, e) {
          this.ds = t;
          this.sv = e;
        }
      }
      const yn = (t, e) => {
        const n = t.ds.clients;
        const s = e.ds.clients;
        const r = t.sv;
        const i = e.sv;
        if (r.size !== i.size || n.size !== s.size) {
          return false;
        }
        for (const [o, c] of r.entries()) {
          if (i.get(o) !== c) {
            return false;
          }
        }
        for (const [o, c] of n.entries()) {
          const t = s.get(o) || [];
          if (c.length !== t.length) {
            return false;
          }
          for (let e = 0; e < c.length; e++) {
            const n = c[e];
            const s = t[e];
            if (n.clock !== s.clock || n.len !== s.len) {
              return false;
            }
          }
        }
        return true;
      };
      const _n = (t, e = new Ce()) => {
        fe(e, t.ds);
        $e(e, t.sv);
        return e.toUint8Array();
      };
      const bn = (t) => _n(t, new Ee());
      const En = (t, e = new _e(l.l1(t))) => new kn(ge(e), Ve(e));
      const Sn = (t) => En(t, new ke(l.l1(t)));
      const Cn = (t, e) => new kn(t, e);
      const Dn = Cn(de(), new Map());
      const An = (t) => Cn(ue(t.store), Nn(t.store));
      const vn = (t, e) =>
        e === undefined
          ? !t.deleted
          : e.sv.has(t.id.client) &&
            (e.sv.get(t.id.client) || 0) > t.id.clock &&
            !ce(e.ds, t.id);
      const xn = (t, e) => {
        const n = o.Yu(t.meta, xn, S.U);
        const s = t.doc.store;
        if (!n.has(e)) {
          e.sv.forEach((e, n) => {
            if (e < On(s, n)) {
              Vn(t, Xe(n, e));
            }
          });
          ie(t, e.ds, (t) => {});
          n.add(e);
        }
      };
      const Mn = (t, e, n = new me()) => {
        if (t.gc) {
          throw new Error('originDoc must not be garbage collected');
        }
        const { sv: s, ds: r } = e;
        const i = new De();
        t.transact((e) => {
          let n = 0;
          s.forEach((t) => {
            if (t > 0) {
              n++;
            }
          });
          c.uE(i.restEncoder, n);
          for (const [r, o] of s) {
            if (o === 0) {
              continue;
            }
            if (o < On(t.store, r)) {
              Vn(e, Xe(r, o));
            }
            const n = t.store.clients.get(r) || [];
            const s = Ln(n, o - 1);
            c.uE(i.restEncoder, s + 1);
            i.writeClient(r);
            c.uE(i.restEncoder, 0);
            for (let t = 0; t <= s; t++) {
              n[t].write(i, 0);
            }
          }
          fe(i, r);
        });
        Ue(n, i.toUint8Array(), 'snapshot');
        return n;
      };
      class In {
        constructor() {
          this.clients = new Map();
          this.pendingStructs = null;
          this.pendingDs = null;
        }
      }
      const Nn = (t) => {
        const e = new Map();
        t.clients.forEach((t, n) => {
          const s = t[t.length - 1];
          e.set(n, s.id.clock + s.length);
        });
        return e;
      };
      const On = (t, e) => {
        const n = t.clients.get(e);
        if (n === undefined) {
          return 0;
        }
        const s = n[n.length - 1];
        return s.id.clock + s.length;
      };
      const Un = (t, e) => {
        let n = t.clients.get(e.id.client);
        if (n === undefined) {
          n = [];
          t.clients.set(e.id.client, n);
        } else {
          const t = n[n.length - 1];
          if (t.id.clock + t.length !== e.id.clock) {
            throw _();
          }
        }
        n.push(e);
      };
      const Ln = (t, e) => {
        let n = 0;
        let s = t.length - 1;
        let r = t[s];
        let o = r.id.clock;
        if (o === e) {
          return s;
        }
        let c = i.GW((e / (o + r.length - 1)) * s);
        while (n <= s) {
          r = t[c];
          o = r.id.clock;
          if (o <= e) {
            if (e < o + r.length) {
              return c;
            }
            n = c + 1;
          } else {
            s = c - 1;
          }
          c = i.GW((n + s) / 2);
        }
        throw _();
      };
      const Tn = (t, e) => {
        const n = t.clients.get(e.client);
        return n[Ln(n, e.clock)];
      };
      const Rn = Tn;
      const Pn = (t, e, n) => {
        const s = Ln(e, n);
        const r = e[s];
        if (r.id.clock < n && r instanceof li) {
          e.splice(s + 1, 0, oi(t, r, n - r.id.clock));
          return s + 1;
        }
        return s;
      };
      const Vn = (t, e) => {
        const n = t.doc.store.clients.get(e.client);
        return n[Pn(t, n, e.clock)];
      };
      const Fn = (t, e, n) => {
        const s = e.clients.get(n.client);
        const r = Ln(s, n.clock);
        const i = s[r];
        if (n.clock !== i.id.clock + i.length - 1 && i.constructor !== Nr) {
          s.splice(r + 1, 0, oi(t, i, n.clock - i.id.clock + 1));
        }
        return i;
      };
      const $n = (t, e, n) => {
        const s = t.clients.get(e.id.client);
        s[Ln(s, e.id.clock)] = n;
      };
      const Jn = (t, e, n, s, r) => {
        if (s === 0) {
          return;
        }
        const i = n + s;
        let o = Pn(t, e, n);
        let c;
        do {
          c = e[o++];
          if (i < c.id.clock + c.length) {
            Pn(t, e, i);
          }
          r(c);
        } while (o < e.length && e[o].id.clock < i);
      };
      class Hn {
        constructor(t, e, n) {
          this.doc = t;
          this.deleteSet = new re();
          this.beforeState = Nn(t.store);
          this.afterState = new Map();
          this.changed = new Map();
          this.changedParentTypes = new Map();
          this._mergeStructs = [];
          this.origin = e;
          this.meta = new Map();
          this.local = n;
          this.subdocsAdded = new Set();
          this.subdocsRemoved = new Set();
          this.subdocsLoaded = new Set();
        }
      }
      const Wn = (t, e) => {
        if (
          e.deleteSet.clients.size === 0 &&
          !o.Yj(e.afterState, (t, n) => e.beforeState.get(n) !== t)
        ) {
          return false;
        }
        le(e.deleteSet);
        Ie(t, e);
        fe(t, e.deleteSet);
        return true;
      };
      const jn = (t, e, n) => {
        const s = e._item;
        if (
          s === null ||
          (s.id.clock < (t.beforeState.get(s.id.client) || 0) && !s.deleted)
        ) {
          o.Yu(t.changed, e, S.U).add(n);
        }
      };
      const zn = (t, e) => {
        const n = t[e - 1];
        const s = t[e];
        if (n.deleted === s.deleted && n.constructor === s.constructor) {
          if (n.mergeWith(s)) {
            t.splice(e, 1);
            if (
              s instanceof li &&
              s.parentSub !== null &&
              s.parent._map.get(s.parentSub) === s
            ) {
              s.parent._map.set(s.parentSub, n);
            }
          }
        }
      };
      const Yn = (t, e, n) => {
        for (const [s, r] of t.clients.entries()) {
          const t = e.clients.get(s);
          for (let s = r.length - 1; s >= 0; s--) {
            const i = r[s];
            const o = i.clock + i.len;
            for (
              let s = Ln(t, i.clock), r = t[s];
              s < t.length && r.id.clock < o;
              r = t[++s]
            ) {
              const r = t[s];
              if (i.clock + i.len <= r.id.clock) {
                break;
              }
              if (r instanceof li && r.deleted && !r.keep && n(r)) {
                r.gc(e, false);
              }
            }
          }
        }
      };
      const Bn = (t, e) => {
        t.clients.forEach((t, n) => {
          const s = e.clients.get(n);
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            const r = i.VV(s.length - 1, 1 + Ln(s, n.clock + n.len - 1));
            for (let t = r, e = s[t]; t > 0 && e.id.clock >= n.clock; e = s[--t]) {
              zn(s, t);
            }
          }
        });
      };
      const Gn = (t, e, n) => {
        Yn(t, e, n);
        Bn(t, e);
      };
      const qn = (t, e) => {
        if (e < t.length) {
          const n = t[e];
          const s = n.doc;
          const r = s.store;
          const o = n.deleteSet;
          const c = n._mergeStructs;
          try {
            le(o);
            n.afterState = Nn(n.doc.store);
            s._transaction = null;
            s.emit('beforeObserverCalls', [n, s]);
            const l = [];
            n.changed.forEach((t, e) =>
              l.push(() => {
                if (e._item === null || !e._item.deleted) {
                  e._callObserver(n, t);
                }
              })
            );
            l.push(() => {
              n.changedParentTypes.forEach((t, e) =>
                l.push(() => {
                  if (e._item === null || !e._item.deleted) {
                    t = t.filter(
                      (t) => t.target._item === null || !t.target._item.deleted
                    );
                    t.forEach((t) => {
                      t.currentTarget = e;
                    });
                    t.sort((t, e) => t.path.length - e.path.length);
                    Ge(e._dEH, t, n);
                  }
                })
              );
              l.push(() => s.emit('afterTransaction', [n, s]));
            });
            (0, E.PP)(l, []);
          } finally {
            if (s.gc) {
              Yn(o, r, s.gcFilter);
            }
            Bn(o, r);
            n.afterState.forEach((t, e) => {
              const s = n.beforeState.get(e) || 0;
              if (s !== t) {
                const t = r.clients.get(e);
                const n = i.Fp(Ln(t, s), 1);
                for (let e = t.length - 1; e >= n; e--) {
                  zn(t, e);
                }
              }
            });
            for (let t = 0; t < c.length; t++) {
              const { client: e, clock: n } = c[t].id;
              const s = r.clients.get(e);
              const i = Ln(s, n);
              if (i + 1 < s.length) {
                zn(s, i + 1);
              }
              if (i > 0) {
                zn(s, i);
              }
            }
            if (
              !n.local &&
              n.afterState.get(s.clientID) !== n.beforeState.get(s.clientID)
            ) {
              s.clientID = we();
              Ot(
                Dt,
                kt,
                '[yjs] ',
                yt,
                St,
                'Changed the client-id because another client seems to be using it.'
              );
            }
            s.emit('afterTransactionCleanup', [n, s]);
            if (s._observers.has('update')) {
              const t = new Se();
              const e = Wn(t, n);
              if (e) {
                s.emit('update', [t.toUint8Array(), n.origin, s, n]);
              }
            }
            if (s._observers.has('updateV2')) {
              const t = new De();
              const e = Wn(t, n);
              if (e) {
                s.emit('updateV2', [t.toUint8Array(), n.origin, s, n]);
              }
            }
            const { subdocsAdded: l, subdocsLoaded: h, subdocsRemoved: a } = n;
            if (l.size > 0 || a.size > 0 || h.size > 0) {
              l.forEach((t) => {
                t.clientID = s.clientID;
                if (t.collectionid == null) {
                  t.collectionid = s.collectionid;
                }
                s.subdocs.add(t);
              });
              a.forEach((t) => s.subdocs.delete(t));
              s.emit('subdocs', [{ loaded: h, added: l, removed: a }]);
              a.forEach((t) => t.destroy());
            }
            if (t.length <= e + 1) {
              s._transactionCleanups = [];
              s.emit('afterAllTransactions', [s, t]);
            } else {
              qn(t, e + 1);
            }
          }
        }
      };
      const Kn = (t, e, n = null, s = true) => {
        const r = t._transactionCleanups;
        let i = false;
        if (t._transaction === null) {
          i = true;
          t._transaction = new Hn(t, n, s);
          r.push(t._transaction);
          if (r.length === 1) {
            t.emit('beforeAllTransactions', [t]);
          }
          t.emit('beforeTransaction', [t._transaction, t]);
        }
        try {
          e(t._transaction);
        } finally {
          if (i && r[0] === t._transaction) {
            qn(r, 0);
          }
        }
      };
      class Xn {
        constructor(t, e) {
          this.insertions = e;
          this.deletions = t;
          this.meta = new Map();
        }
      }
      const Zn = (t, e, n) => {
        let s = null;
        let r = null;
        const i = t.doc;
        const o = t.scope;
        Kn(
          i,
          (n) => {
            while (e.length > 0 && s === null) {
              const r = i.store;
              const c = e.pop();
              const l = new Set();
              const h = [];
              let a = false;
              ie(n, c.insertions, (t) => {
                if (t instanceof li) {
                  if (t.redone !== null) {
                    let { item: e, diff: s } = ri(r, t.id);
                    if (s > 0) {
                      e = Vn(n, Xe(e.id.client, e.id.clock + s));
                    }
                    t = e;
                  }
                  if (!t.deleted && o.some((e) => en(e, t))) {
                    h.push(t);
                  }
                }
              });
              ie(n, c.deletions, (t) => {
                if (
                  t instanceof li &&
                  o.some((e) => en(e, t)) &&
                  !ce(c.insertions, t.id)
                ) {
                  l.add(t);
                }
              });
              l.forEach((t) => {
                a = ci(n, t, l, h) !== null || a;
              });
              for (let e = h.length - 1; e >= 0; e--) {
                const s = h[e];
                if (t.deleteFilter(s)) {
                  s.delete(n);
                  a = true;
                }
              }
              s = a ? c : null;
            }
            n.changed.forEach((t, e) => {
              if (t.has(null) && e._searchMarker) {
                e._searchMarker.length = 0;
              }
            });
            r = n;
          },
          t
        );
        if (s != null) {
          const e = r.changedParentTypes;
          t.emit('stack-item-popped', [
            { stackItem: s, type: n, changedParentTypes: e },
            t,
          ]);
        }
        return s;
      };
      class Qn extends s.y {
        constructor(
          t,
          {
            captureTimeout: e = 500,
            deleteFilter: n = () => true,
            trackedOrigins: s = new Set([null]),
          } = {}
        ) {
          super();
          this.scope = t instanceof Array ? t : [t];
          this.deleteFilter = n;
          s.add(this);
          this.trackedOrigins = s;
          this.undoStack = [];
          this.redoStack = [];
          this.undoing = false;
          this.redoing = false;
          this.doc = this.scope[0].doc;
          this.lastChange = 0;
          this.doc.on('afterTransaction', (t) => {
            if (
              !this.scope.some((e) => t.changedParentTypes.has(e)) ||
              (!this.trackedOrigins.has(t.origin) &&
                (!t.origin || !this.trackedOrigins.has(t.origin.constructor)))
            ) {
              return;
            }
            const n = this.undoing;
            const s = this.redoing;
            const r = n ? this.redoStack : this.undoStack;
            if (n) {
              this.stopCapturing();
            } else if (!s) {
              this.redoStack = [];
            }
            const i = new re();
            t.afterState.forEach((e, n) => {
              const s = t.beforeState.get(n) || 0;
              const r = e - s;
              if (r > 0) {
                ae(i, n, s, r);
              }
            });
            const o = mt.ZG();
            if (o - this.lastChange < e && r.length > 0 && !n && !s) {
              const e = r[r.length - 1];
              e.deletions = he([e.deletions, t.deleteSet]);
              e.insertions = he([e.insertions, i]);
            } else {
              r.push(new Xn(t.deleteSet, i));
            }
            if (!n && !s) {
              this.lastChange = o;
            }
            ie(t, t.deleteSet, (t) => {
              if (t instanceof li && this.scope.some((e) => en(e, t))) {
                ii(t, true);
              }
            });
            this.emit('stack-item-added', [
              {
                stackItem: r[r.length - 1],
                origin: t.origin,
                type: n ? 'redo' : 'undo',
                changedParentTypes: t.changedParentTypes,
              },
              this,
            ]);
          });
        }
        clear() {
          this.doc.transact((t) => {
            const e = (e) => {
              ie(t, e.deletions, (t) => {
                if (t instanceof li && this.scope.some((e) => en(e, t))) {
                  ii(t, false);
                }
              });
            };
            this.undoStack.forEach(e);
            this.redoStack.forEach(e);
          });
          this.undoStack = [];
          this.redoStack = [];
        }
        stopCapturing() {
          this.lastChange = 0;
        }
        undo() {
          this.undoing = true;
          let t;
          try {
            t = Zn(this, this.undoStack, 'undo');
          } finally {
            this.undoing = false;
          }
          return t;
        }
        redo() {
          this.redoing = true;
          let t;
          try {
            t = Zn(this, this.redoStack, 'redo');
          } finally {
            this.redoing = false;
          }
          return t;
        }
      }
      function* ts(t) {
        const e = l.yg(t.restDecoder);
        for (let n = 0; n < e; n++) {
          const e = l.yg(t.restDecoder);
          const n = t.readClient();
          let s = l.yg(t.restDecoder);
          for (let r = 0; r < e; r++) {
            const e = t.readInfo();
            if (e === 10) {
              const e = l.yg(t.restDecoder);
              yield new ui(Xe(n, s), e);
              s += e;
            } else if ((b.kr & e) !== 0) {
              const r = (e & (b.rc | b.x1)) === 0;
              const i = new li(
                Xe(n, s),
                null,
                (e & b.x1) === b.x1 ? t.readLeftID() : null,
                null,
                (e & b.rc) === b.rc ? t.readRightID() : null,
                r ? (t.readParentInfo() ? t.readString() : t.readLeftID()) : null,
                r && (e & b.cq) === b.cq ? t.readString() : null,
                hi(t, e)
              );
              yield i;
              s += i.length;
            } else {
              const e = t.readLen();
              yield new Nr(Xe(n, s), e);
              s += e;
            }
          }
        }
      }
      class es {
        constructor(t, e) {
          this.gen = ts(t);
          this.curr = null;
          this.done = false;
          this.filterSkips = e;
          this.next();
        }
        next() {
          do {
            this.curr = this.gen.next().value || null;
          } while (
            this.filterSkips &&
            this.curr !== null &&
            this.curr.constructor === ui
          );
          return this.curr;
        }
      }
      const ns = (t) => ss(t, ye);
      const ss = (t, e = be) => {
        const n = [];
        const s = new e(l.l1(t));
        const r = new es(s, false);
        for (let o = r.curr; o !== null; o = r.next()) {
          n.push(o);
        }
        Ot('Structs: ', n);
        const i = ge(s);
        Ot('DeleteSet: ', i);
      };
      class rs {
        constructor(t) {
          this.currClient = 0;
          this.startClock = 0;
          this.written = 0;
          this.encoder = t;
          this.clientStructs = [];
        }
      }
      const is = (t) => ds(t, ye, Se);
      const os = (t, e = Ce, n = be) => {
        const s = new e();
        const r = new es(new n(l.l1(t)), false);
        let i = r.curr;
        if (i !== null) {
          let t = 0;
          let e = i.id.client;
          let n = i.id.clock !== 0;
          let o = n ? 0 : i.id.clock + i.length;
          for (; i !== null; i = r.next()) {
            if (e !== i.id.client) {
              if (o !== 0) {
                t++;
                c.uE(s.restEncoder, e);
                c.uE(s.restEncoder, o);
              }
              e = i.id.client;
              o = 0;
              n = i.id.clock !== 0;
            }
            if (i.constructor === ui) {
              n = true;
            }
            if (!n) {
              o = i.id.clock + i.length;
            }
          }
          if (o !== 0) {
            t++;
            c.uE(s.restEncoder, e);
            c.uE(s.restEncoder, o);
          }
          const l = c.Mf();
          c.uE(l, t);
          c.mK(l, s.restEncoder);
          s.restEncoder = l;
          return s.toUint8Array();
        } else {
          c.uE(s.restEncoder, 0);
          return s.toUint8Array();
        }
      };
      const cs = (t) => os(t, Ee, ye);
      const ls = (t, e = be) => {
        const n = new Map();
        const s = new Map();
        const r = new es(new e(l.l1(t)), false);
        let i = r.curr;
        if (i !== null) {
          let t = i.id.client;
          let e = i.id.clock;
          n.set(t, e);
          for (; i !== null; i = r.next()) {
            if (t !== i.id.client) {
              s.set(t, e);
              n.set(i.id.client, i.id.clock);
              t = i.id.client;
            }
            e = i.id.clock + i.length;
          }
          s.set(t, e);
        }
        return { from: n, to: s };
      };
      const hs = (t) => ls(t, ye);
      const as = (t, e) => {
        if (t.constructor === Nr) {
          const { client: n, clock: s } = t.id;
          return new Nr(Xe(n, s + e), t.length - e);
        } else if (t.constructor === ui) {
          const { client: n, clock: s } = t.id;
          return new ui(Xe(n, s + e), t.length - e);
        } else {
          const n = t;
          const { client: s, clock: r } = n.id;
          return new li(
            Xe(s, r + e),
            null,
            Xe(s, r + e - 1),
            null,
            n.rightOrigin,
            n.parent,
            n.parentSub,
            n.content.splice(e)
          );
        }
      };
      const ds = (t, e = be, n = De) => {
        if (t.length === 1) {
          return t[0];
        }
        const s = t.map((t) => new e(l.l1(t)));
        let r = s.map((t) => new es(t, true));
        let i = null;
        const o = new n();
        const c = new rs(o);
        while (true) {
          r = r.filter((t) => t.curr !== null);
          r.sort((t, e) => {
            if (t.curr.id.client === e.curr.id.client) {
              const n = t.curr.id.clock - e.curr.id.clock;
              if (n === 0) {
                return t.curr.constructor === e.curr.constructor
                  ? 0
                  : t.curr.constructor === ui
                  ? 1
                  : -1;
              } else {
                return n;
              }
            } else {
              return e.curr.id.client - t.curr.id.client;
            }
          });
          if (r.length === 0) {
            break;
          }
          const t = r[0];
          const e = t.curr.id.client;
          if (i !== null) {
            let n = t.curr;
            let s = false;
            while (
              n !== null &&
              n.id.clock + n.length <= i.struct.id.clock + i.struct.length &&
              n.id.client >= i.struct.id.client
            ) {
              n = t.next();
              s = true;
            }
            if (
              n === null ||
              n.id.client !== e ||
              (s && n.id.clock > i.struct.id.clock + i.struct.length)
            ) {
              continue;
            }
            if (e !== i.struct.id.client) {
              ps(c, i.struct, i.offset);
              i = { struct: n, offset: 0 };
              t.next();
            } else {
              if (i.struct.id.clock + i.struct.length < n.id.clock) {
                if (i.struct.constructor === ui) {
                  i.struct.length = n.id.clock + n.length - i.struct.id.clock;
                } else {
                  ps(c, i.struct, i.offset);
                  const t = n.id.clock - i.struct.id.clock - i.struct.length;
                  const s = new ui(Xe(e, i.struct.id.clock + i.struct.length), t);
                  i = { struct: s, offset: 0 };
                }
              } else {
                const e = i.struct.id.clock + i.struct.length - n.id.clock;
                if (e > 0) {
                  if (i.struct.constructor === ui) {
                    i.struct.length -= e;
                  } else {
                    n = as(n, e);
                  }
                }
                if (!i.struct.mergeWith(n)) {
                  ps(c, i.struct, i.offset);
                  i = { struct: n, offset: 0 };
                  t.next();
                }
              }
            }
          } else {
            i = { struct: t.curr, offset: 0 };
            t.next();
          }
          for (
            let n = t.curr;
            n !== null &&
            n.id.client === e &&
            n.id.clock === i.struct.id.clock + i.struct.length &&
            n.constructor !== ui;
            n = t.next()
          ) {
            ps(c, i.struct, i.offset);
            i = { struct: n, offset: 0 };
          }
        }
        if (i !== null) {
          ps(c, i.struct, i.offset);
          i = null;
        }
        ws(c);
        const h = s.map((t) => ge(t));
        const a = he(h);
        fe(o, a);
        return o.toUint8Array();
      };
      const us = (t, e, n = be, s = De) => {
        const r = Fe(e);
        const o = new s();
        const c = new rs(o);
        const h = new n(l.l1(t));
        const a = new es(h, false);
        while (a.curr) {
          const t = a.curr;
          const e = t.id.client;
          const n = r.get(e) || 0;
          if (a.curr.constructor === ui) {
            a.next();
            continue;
          }
          if (t.id.clock + t.length > n) {
            ps(c, t, i.Fp(n - t.id.clock, 0));
            a.next();
            while (a.curr && a.curr.id.client === e) {
              ps(c, a.curr, 0);
              a.next();
            }
          } else {
            while (
              a.curr &&
              a.curr.id.client === e &&
              a.curr.id.clock + a.curr.length <= n
            ) {
              a.next();
            }
          }
        }
        ws(c);
        const d = ge(h);
        fe(o, d);
        return o.toUint8Array();
      };
      const fs = (t, e) => us(t, e, ye, Se);
      const gs = (t) => {
        if (t.written > 0) {
          t.clientStructs.push({
            written: t.written,
            restEncoder: c._f(t.encoder.restEncoder),
          });
          t.encoder.restEncoder = c.Mf();
          t.written = 0;
        }
      };
      const ps = (t, e, n) => {
        if (t.written > 0 && t.currClient !== e.id.client) {
          gs(t);
        }
        if (t.written === 0) {
          t.currClient = e.id.client;
          t.encoder.writeClient(e.id.client);
          c.uE(t.encoder.restEncoder, e.id.clock + n);
        }
        e.write(t.encoder, n);
        t.written++;
      };
      const ws = (t) => {
        gs(t);
        const e = t.encoder.restEncoder;
        c.uE(e, t.clientStructs.length);
        for (let n = 0; n < t.clientStructs.length; n++) {
          const s = t.clientStructs[n];
          c.uE(e, s.written);
          c.HK(e, s.restEncoder);
        }
      };
      const ms = (t, e, n) => {
        const s = new e(l.l1(t));
        const r = new es(s, false);
        const i = new n();
        const o = new rs(i);
        for (let l = r.curr; l !== null; l = r.next()) {
          ps(o, l, 0);
        }
        ws(o);
        const c = ge(s);
        fe(i, c);
        return i.toUint8Array();
      };
      const ks = (t) => ms(t, be, Se);
      class ys {
        constructor(t, e) {
          this.target = t;
          this.currentTarget = t;
          this.transaction = e;
          this._changes = null;
          this._keys = null;
          this._delta = null;
        }
        get path() {
          return _s(this.currentTarget, this.target);
        }
        deletes(t) {
          return ce(this.transaction.deleteSet, t.id);
        }
        get keys() {
          if (this._keys === null) {
            const t = new Map();
            const e = this.target;
            const n = this.transaction.changed.get(e);
            n.forEach((n) => {
              if (n !== null) {
                const s = e._map.get(n);
                let i;
                let o;
                if (this.adds(s)) {
                  let t = s.left;
                  while (t !== null && this.adds(t)) {
                    t = t.left;
                  }
                  if (this.deletes(s)) {
                    if (t !== null && this.deletes(t)) {
                      i = 'delete';
                      o = r.Z$(t.content.getContent());
                    } else {
                      return;
                    }
                  } else {
                    if (t !== null && this.deletes(t)) {
                      i = 'update';
                      o = r.Z$(t.content.getContent());
                    } else {
                      i = 'add';
                      o = undefined;
                    }
                  }
                } else {
                  if (this.deletes(s)) {
                    i = 'delete';
                    o = r.Z$(s.content.getContent());
                  } else {
                    return;
                  }
                }
                t.set(n, { action: i, oldValue: o });
              }
            });
            this._keys = t;
          }
          return this._keys;
        }
        get delta() {
          return this.changes.delta;
        }
        adds(t) {
          return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0);
        }
        get changes() {
          let t = this._changes;
          if (t === null) {
            const e = this.target;
            const n = S.U();
            const s = S.U();
            const r = [];
            t = { added: n, deleted: s, delta: r, keys: this.keys };
            const i = this.transaction.changed.get(e);
            if (i.has(null)) {
              let t = null;
              const i = () => {
                if (t) {
                  r.push(t);
                }
              };
              for (let r = e._start; r !== null; r = r.right) {
                if (r.deleted) {
                  if (this.deletes(r) && !this.adds(r)) {
                    if (t === null || t.delete === undefined) {
                      i();
                      t = { delete: 0 };
                    }
                    t.delete += r.length;
                    s.add(r);
                  }
                } else {
                  if (this.adds(r)) {
                    if (t === null || t.insert === undefined) {
                      i();
                      t = { insert: [] };
                    }
                    t.insert = t.insert.concat(r.content.getContent());
                    n.add(r);
                  } else {
                    if (t === null || t.retain === undefined) {
                      i();
                      t = { retain: 0 };
                    }
                    t.retain += r.length;
                  }
                }
              }
              if (t !== null && t.retain === undefined) {
                i();
              }
            }
            this._changes = t;
          }
          return t;
        }
      }
      const _s = (t, e) => {
        const n = [];
        while (e._item !== null && e !== t) {
          if (e._item.parentSub !== null) {
            n.unshift(e._item.parentSub);
          } else {
            let t = 0;
            let s = e._item.parent._start;
            while (s !== e._item && s !== null) {
              if (!s.deleted) {
                t++;
              }
              s = s.right;
            }
            n.unshift(t);
          }
          e = e._item.parent;
        }
        return n;
      };
      const bs = 80;
      let Es = 0;
      class Ss {
        constructor(t, e) {
          t.marker = true;
          this.p = t;
          this.index = e;
          this.timestamp = Es++;
        }
      }
      const Cs = (t) => {
        t.timestamp = Es++;
      };
      const Ds = (t, e, n) => {
        t.p.marker = false;
        t.p = e;
        e.marker = true;
        t.index = n;
        t.timestamp = Es++;
      };
      const As = (t, e, n) => {
        if (t.length >= bs) {
          const s = t.reduce((t, e) => (t.timestamp < e.timestamp ? t : e));
          Ds(s, e, n);
          return s;
        } else {
          const s = new Ss(e, n);
          t.push(s);
          return s;
        }
      };
      const vs = (t, e) => {
        if (t._start === null || e === 0 || t._searchMarker === null) {
          return null;
        }
        const n =
          t._searchMarker.length === 0
            ? null
            : t._searchMarker.reduce((t, n) =>
                i.Wn(e - t.index) < i.Wn(e - n.index) ? t : n
              );
        let s = t._start;
        let r = 0;
        if (n !== null) {
          s = n.p;
          r = n.index;
          Cs(n);
        }
        while (s.right !== null && r < e) {
          if (!s.deleted && s.countable) {
            if (e < r + s.length) {
              break;
            }
            r += s.length;
          }
          s = s.right;
        }
        while (s.left !== null && r > e) {
          s = s.left;
          if (!s.deleted && s.countable) {
            r -= s.length;
          }
        }
        while (
          s.left !== null &&
          s.left.id.client === s.id.client &&
          s.left.id.clock + s.left.length === s.id.clock
        ) {
          s = s.left;
          if (!s.deleted && s.countable) {
            r -= s.length;
          }
        }
        if (n !== null && i.Wn(n.index - r) < s.parent.length / bs) {
          Ds(n, s, r);
          return n;
        } else {
          return As(t._searchMarker, s, r);
        }
      };
      const xs = (t, e, n) => {
        for (let s = t.length - 1; s >= 0; s--) {
          const r = t[s];
          if (n > 0) {
            let e = r.p;
            e.marker = false;
            while (e && (e.deleted || !e.countable)) {
              e = e.left;
              if (e && !e.deleted && e.countable) {
                r.index -= e.length;
              }
            }
            if (e === null || e.marker === true) {
              t.splice(s, 1);
              continue;
            }
            r.p = e;
            e.marker = true;
          }
          if (e < r.index || (n > 0 && e === r.index)) {
            r.index = i.Fp(e, r.index + n);
          }
        }
      };
      const Ms = (t) => {
        let e = t._start;
        const n = [];
        while (e) {
          n.push(e);
          e = e.right;
        }
        return n;
      };
      const Is = (t, e, n) => {
        const s = t;
        const r = e.changedParentTypes;
        while (true) {
          o.Yu(r, t, () => []).push(n);
          if (t._item === null) {
            break;
          }
          t = t._item.parent;
        }
        Ge(s._eH, n, e);
      };
      class Ns {
        constructor() {
          this._item = null;
          this._map = new Map();
          this._start = null;
          this.doc = null;
          this._length = 0;
          this._eH = ze();
          this._dEH = ze();
          this._searchMarker = null;
        }
        get parent() {
          return this._item ? this._item.parent : null;
        }
        _integrate(t, e) {
          this.doc = t;
          this._item = e;
        }
        _copy() {
          throw y();
        }
        clone() {
          throw y();
        }
        _write(t) {}
        get _first() {
          let t = this._start;
          while (t !== null && t.deleted) {
            t = t.right;
          }
          return t;
        }
        _callObserver(t, e) {
          if (!t.local && this._searchMarker) {
            this._searchMarker.length = 0;
          }
        }
        observe(t) {
          Ye(this._eH, t);
        }
        observeDeep(t) {
          Ye(this._dEH, t);
        }
        unobserve(t) {
          Be(this._eH, t);
        }
        unobserveDeep(t) {
          Be(this._dEH, t);
        }
        toJSON() {}
      }
      const Os = (t, e, n) => {
        if (e < 0) {
          e = t._length + e;
        }
        if (n < 0) {
          n = t._length + n;
        }
        let s = n - e;
        const r = [];
        let i = t._start;
        while (i !== null && s > 0) {
          if (i.countable && !i.deleted) {
            const t = i.content.getContent();
            if (t.length <= e) {
              e -= t.length;
            } else {
              for (let n = e; n < t.length && s > 0; n++) {
                r.push(t[n]);
                s--;
              }
              e = 0;
            }
          }
          i = i.right;
        }
        return r;
      };
      const Us = (t) => {
        const e = [];
        let n = t._start;
        while (n !== null) {
          if (n.countable && !n.deleted) {
            const t = n.content.getContent();
            for (let n = 0; n < t.length; n++) {
              e.push(t[n]);
            }
          }
          n = n.right;
        }
        return e;
      };
      const Ls = (t, e) => {
        const n = [];
        let s = t._start;
        while (s !== null) {
          if (s.countable && vn(s, e)) {
            const t = s.content.getContent();
            for (let e = 0; e < t.length; e++) {
              n.push(t[e]);
            }
          }
          s = s.right;
        }
        return n;
      };
      const Ts = (t, e) => {
        let n = 0;
        let s = t._start;
        while (s !== null) {
          if (s.countable && !s.deleted) {
            const r = s.content.getContent();
            for (let s = 0; s < r.length; s++) {
              e(r[s], n++, t);
            }
          }
          s = s.right;
        }
      };
      const Rs = (t, e) => {
        const n = [];
        Ts(t, (s, r) => {
          n.push(e(s, r, t));
        });
        return n;
      };
      const Ps = (t) => {
        let e = t._start;
        let n = null;
        let s = 0;
        return {
          [Symbol.iterator]() {
            return this;
          },
          next: () => {
            if (n === null) {
              while (e !== null && e.deleted) {
                e = e.right;
              }
              if (e === null) {
                return { done: true, value: undefined };
              }
              n = e.content.getContent();
              s = 0;
              e = e.right;
            }
            const t = n[s++];
            if (n.length <= s) {
              n = null;
            }
            return { done: false, value: t };
          },
        };
      };
      const Vs = (t, e) => {
        const n = vs(t, e);
        let s = t._start;
        if (n !== null) {
          s = n.p;
          e -= n.index;
        }
        for (; s !== null; s = s.right) {
          if (!s.deleted && s.countable) {
            if (e < s.length) {
              return s.content.getContent()[e];
            }
            e -= s.length;
          }
        }
      };
      const Fs = (t, e, n, s) => {
        let r = n;
        const i = t.doc;
        const o = i.clientID;
        const c = i.store;
        const l = n === null ? e._start : n.right;
        let h = [];
        const a = () => {
          if (h.length > 0) {
            r = new li(
              Xe(o, On(c, o)),
              r,
              r && r.lastId,
              l,
              l && l.id,
              e,
              null,
              new jr(h)
            );
            r.integrate(t, 0);
            h = [];
          }
        };
        s.forEach((n) => {
          if (n === null) {
            h.push(n);
          } else {
            switch (n.constructor) {
              case Number:
              case Object:
              case Boolean:
              case Array:
              case String:
                h.push(n);
                break;
              default:
                a();
                switch (n.constructor) {
                  case Uint8Array:
                  case ArrayBuffer:
                    r = new li(
                      Xe(o, On(c, o)),
                      r,
                      r && r.lastId,
                      l,
                      l && l.id,
                      e,
                      null,
                      new Or(new Uint8Array(n))
                    );
                    r.integrate(t, 0);
                    break;
                  case me:
                    r = new li(
                      Xe(o, On(c, o)),
                      r,
                      r && r.lastId,
                      l,
                      l && l.id,
                      e,
                      null,
                      new Rr(n)
                    );
                    r.integrate(t, 0);
                    break;
                  default:
                    if (n instanceof Ns) {
                      r = new li(
                        Xe(o, On(c, o)),
                        r,
                        r && r.lastId,
                        l,
                        l && l.id,
                        e,
                        null,
                        new ni(n)
                      );
                      r.integrate(t, 0);
                    } else {
                      throw new Error('Unexpected content type in insert operation');
                    }
                }
            }
          }
        });
        a();
      };
      const $s = k('Length exceeded!');
      const Js = (t, e, n, s) => {
        if (n > e._length) {
          throw $s;
        }
        if (n === 0) {
          if (e._searchMarker) {
            xs(e._searchMarker, n, s.length);
          }
          return Fs(t, e, null, s);
        }
        const r = n;
        const i = vs(e, n);
        let o = e._start;
        if (i !== null) {
          o = i.p;
          n -= i.index;
          if (n === 0) {
            o = o.prev;
            n += o && o.countable && !o.deleted ? o.length : 0;
          }
        }
        for (; o !== null; o = o.right) {
          if (!o.deleted && o.countable) {
            if (n <= o.length) {
              if (n < o.length) {
                Vn(t, Xe(o.id.client, o.id.clock + n));
              }
              break;
            }
            n -= o.length;
          }
        }
        if (e._searchMarker) {
          xs(e._searchMarker, r, s.length);
        }
        return Fs(t, e, o, s);
      };
      const Hs = (t, e, n, s) => {
        if (s === 0) {
          return;
        }
        const r = n;
        const i = s;
        const o = vs(e, n);
        let c = e._start;
        if (o !== null) {
          c = o.p;
          n -= o.index;
        }
        for (; c !== null && n > 0; c = c.right) {
          if (!c.deleted && c.countable) {
            if (n < c.length) {
              Vn(t, Xe(c.id.client, c.id.clock + n));
            }
            n -= c.length;
          }
        }
        while (s > 0 && c !== null) {
          if (!c.deleted) {
            if (s < c.length) {
              Vn(t, Xe(c.id.client, c.id.clock + s));
            }
            c.delete(t);
            s -= c.length;
          }
          c = c.right;
        }
        if (s > 0) {
          throw $s;
        }
        if (e._searchMarker) {
          xs(e._searchMarker, r, -i + s);
        }
      };
      const Ws = (t, e, n) => {
        const s = e._map.get(n);
        if (s !== undefined) {
          s.delete(t);
        }
      };
      const js = (t, e, n, s) => {
        const r = e._map.get(n) || null;
        const i = t.doc;
        const o = i.clientID;
        let c;
        if (s == null) {
          c = new jr([s]);
        } else {
          switch (s.constructor) {
            case Number:
            case Object:
            case Boolean:
            case Array:
            case String:
              c = new jr([s]);
              break;
            case Uint8Array:
              c = new Or(s);
              break;
            case me:
              c = new Rr(s);
              break;
            default:
              if (s instanceof Ns) {
                c = new ni(s);
              } else {
                throw new Error('Unexpected content type');
              }
          }
        }
        new li(Xe(o, On(i.store, o)), r, r && r.lastId, null, null, e, n, c).integrate(
          t,
          0
        );
      };
      const zs = (t, e) => {
        const n = t._map.get(e);
        return n !== undefined && !n.deleted
          ? n.content.getContent()[n.length - 1]
          : undefined;
      };
      const Ys = (t) => {
        const e = {};
        t._map.forEach((t, n) => {
          if (!t.deleted) {
            e[n] = t.content.getContent()[t.length - 1];
          }
        });
        return e;
      };
      const Bs = (t, e) => {
        const n = t._map.get(e);
        return n !== undefined && !n.deleted;
      };
      const Gs = (t, e, n) => {
        let s = t._map.get(e) || null;
        while (
          s !== null &&
          (!n.sv.has(s.id.client) || s.id.clock >= (n.sv.get(s.id.client) || 0))
        ) {
          s = s.left;
        }
        return s !== null && vn(s, n)
          ? s.content.getContent()[s.length - 1]
          : undefined;
      };
      const qs = (t) => Qt(t.entries(), (t) => !t[1].deleted);
      class Ks extends ys {
        constructor(t, e) {
          super(t, e);
          this._transaction = e;
        }
      }
      class Xs extends Ns {
        constructor() {
          super();
          this._prelimContent = [];
          this._searchMarker = [];
        }
        static from(t) {
          const e = new Xs();
          e.push(t);
          return e;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this.insert(0, this._prelimContent);
          this._prelimContent = null;
        }
        _copy() {
          return new Xs();
        }
        clone() {
          const t = new Xs();
          t.insert(
            0,
            this.toArray().map((t) => (t instanceof Ns ? t.clone() : t))
          );
          return t;
        }
        get length() {
          return this._prelimContent === null
            ? this._length
            : this._prelimContent.length;
        }
        _callObserver(t, e) {
          super._callObserver(t, e);
          Is(this, t, new Ks(this, t));
        }
        insert(t, e) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              Js(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, 0, ...e);
          }
        }
        push(t) {
          this.insert(this.length, t);
        }
        unshift(t) {
          this.insert(0, t);
        }
        delete(t, e = 1) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              Hs(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, e);
          }
        }
        get(t) {
          return Vs(this, t);
        }
        toArray() {
          return Us(this);
        }
        slice(t = 0, e = this.length) {
          return Os(this, t, e);
        }
        toJSON() {
          return this.map((t) => (t instanceof Ns ? t.toJSON() : t));
        }
        map(t) {
          return Rs(this, t);
        }
        forEach(t) {
          Ts(this, t);
        }
        [Symbol.iterator]() {
          return Ps(this);
        }
        _write(t) {
          t.writeTypeRef(qr);
        }
      }
      const Zs = (t) => new Xs();
      class Qs extends ys {
        constructor(t, e, n) {
          super(t, e);
          this.keysChanged = n;
        }
      }
      class tr extends Ns {
        constructor(t) {
          super();
          this._prelimContent = null;
          if (t === undefined) {
            this._prelimContent = new Map();
          } else {
            this._prelimContent = new Map(t);
          }
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this._prelimContent.forEach((t, e) => {
            this.set(e, t);
          });
          this._prelimContent = null;
        }
        _copy() {
          return new tr();
        }
        clone() {
          const t = new tr();
          this.forEach((e, n) => {
            t.set(n, e instanceof Ns ? e.clone() : e);
          });
          return t;
        }
        _callObserver(t, e) {
          Is(this, t, new Qs(this, t, e));
        }
        toJSON() {
          const t = {};
          this._map.forEach((e, n) => {
            if (!e.deleted) {
              const s = e.content.getContent()[e.length - 1];
              t[n] = s instanceof Ns ? s.toJSON() : s;
            }
          });
          return t;
        }
        get size() {
          return [...qs(this._map)].length;
        }
        keys() {
          return te(qs(this._map), (t) => t[0]);
        }
        values() {
          return te(qs(this._map), (t) => t[1].content.getContent()[t[1].length - 1]);
        }
        entries() {
          return te(qs(this._map), (t) => [
            t[0],
            t[1].content.getContent()[t[1].length - 1],
          ]);
        }
        forEach(t) {
          const e = {};
          this._map.forEach((e, n) => {
            if (!e.deleted) {
              t(e.content.getContent()[e.length - 1], n, this);
            }
          });
          return e;
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        delete(t) {
          if (this.doc !== null) {
            Kn(this.doc, (e) => {
              Ws(e, this, t);
            });
          } else {
            this._prelimContent.delete(t);
          }
        }
        set(t, e) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              js(n, this, t, e);
            });
          } else {
            this._prelimContent.set(t, e);
          }
          return e;
        }
        get(t) {
          return zs(this, t);
        }
        has(t) {
          return Bs(this, t);
        }
        clear() {
          if (this.doc !== null) {
            Kn(this.doc, (t) => {
              this.forEach(function (e, n, s) {
                Ws(t, s, n);
              });
            });
          } else {
            this._prelimContent.clear();
          }
        }
        _write(t) {
          t.writeTypeRef(Kr);
        }
      }
      const er = (t) => new tr();
      const nr = (t, e) =>
        t === e ||
        (typeof t === 'object' && typeof e === 'object' && t && e && ee.$m(t, e));
      class sr {
        constructor(t, e, n, s) {
          this.left = t;
          this.right = e;
          this.index = n;
          this.currentAttributes = s;
        }
        forward() {
          if (this.right === null) {
            _();
          }
          switch (this.right.content.constructor) {
            case $r:
              if (!this.right.deleted) {
                cr(this.currentAttributes, this.right.content);
              }
              break;
            default:
              if (!this.right.deleted) {
                this.index += this.right.length;
              }
              break;
          }
          this.left = this.right;
          this.right = this.right.right;
        }
      }
      const rr = (t, e, n) => {
        while (e.right !== null && n > 0) {
          switch (e.right.content.constructor) {
            case $r:
              if (!e.right.deleted) {
                cr(e.currentAttributes, e.right.content);
              }
              break;
            default:
              if (!e.right.deleted) {
                if (n < e.right.length) {
                  Vn(t, Xe(e.right.id.client, e.right.id.clock + n));
                }
                e.index += e.right.length;
                n -= e.right.length;
              }
              break;
          }
          e.left = e.right;
          e.right = e.right.right;
        }
        return e;
      };
      const ir = (t, e, n) => {
        const s = new Map();
        const r = vs(e, n);
        if (r) {
          const e = new sr(r.p.left, r.p, r.index, s);
          return rr(t, e, n - r.index);
        } else {
          const r = new sr(null, e._start, 0, s);
          return rr(t, r, n);
        }
      };
      const or = (t, e, n, s) => {
        while (
          n.right !== null &&
          (n.right.deleted === true ||
            (n.right.content.constructor === $r &&
              nr(s.get(n.right.content.key), n.right.content.value)))
        ) {
          if (!n.right.deleted) {
            s.delete(n.right.content.key);
          }
          n.forward();
        }
        const r = t.doc;
        const i = r.clientID;
        s.forEach((s, o) => {
          const c = n.left;
          const l = n.right;
          const h = new li(
            Xe(i, On(r.store, i)),
            c,
            c && c.lastId,
            l,
            l && l.id,
            e,
            null,
            new $r(o, s)
          );
          h.integrate(t, 0);
          n.right = h;
          n.forward();
        });
      };
      const cr = (t, e) => {
        const { key: n, value: s } = e;
        if (s === null) {
          t.delete(n);
        } else {
          t.set(n, s);
        }
      };
      const lr = (t, e) => {
        while (true) {
          if (t.right === null) {
            break;
          } else if (
            t.right.deleted ||
            (t.right.content.constructor === $r &&
              nr(e[t.right.content.key] || null, t.right.content.value))
          );
          else {
            break;
          }
          t.forward();
        }
      };
      const hr = (t, e, n, s) => {
        const r = t.doc;
        const i = r.clientID;
        const o = new Map();
        for (const c in s) {
          const l = s[c];
          const h = n.currentAttributes.get(c) || null;
          if (!nr(h, l)) {
            o.set(c, h);
            const { left: s, right: a } = n;
            n.right = new li(
              Xe(i, On(r.store, i)),
              s,
              s && s.lastId,
              a,
              a && a.id,
              e,
              null,
              new $r(c, l)
            );
            n.right.integrate(t, 0);
            n.forward();
          }
        }
        return o;
      };
      const ar = (t, e, n, s, r) => {
        n.currentAttributes.forEach((t, e) => {
          if (r[e] === undefined) {
            r[e] = null;
          }
        });
        const i = t.doc;
        const o = i.clientID;
        lr(n, r);
        const c = hr(t, e, n, r);
        const l =
          s.constructor === String
            ? new Yr(s)
            : s instanceof Ns
            ? new ni(s)
            : new Vr(s);
        let { left: h, right: a, index: d } = n;
        if (e._searchMarker) {
          xs(e._searchMarker, n.index, l.getLength());
        }
        a = new li(Xe(o, On(i.store, o)), h, h && h.lastId, a, a && a.id, e, null, l);
        a.integrate(t, 0);
        n.right = a;
        n.index = d;
        n.forward();
        or(t, e, n, c);
      };
      const dr = (t, e, n, s, r) => {
        const i = t.doc;
        const o = i.clientID;
        lr(n, r);
        const c = hr(t, e, n, r);
        while (s > 0 && n.right !== null) {
          if (!n.right.deleted) {
            switch (n.right.content.constructor) {
              case $r: {
                const { key: e, value: s } = n.right.content;
                const i = r[e];
                if (i !== undefined) {
                  if (nr(i, s)) {
                    c.delete(e);
                  } else {
                    c.set(e, s);
                  }
                  n.right.delete(t);
                }
                break;
              }
              default:
                if (s < n.right.length) {
                  Vn(t, Xe(n.right.id.client, n.right.id.clock + s));
                }
                s -= n.right.length;
                break;
            }
          }
          n.forward();
        }
        if (s > 0) {
          let r = '';
          for (; s > 0; s--) {
            r += '\n';
          }
          n.right = new li(
            Xe(o, On(i.store, o)),
            n.left,
            n.left && n.left.lastId,
            n.right,
            n.right && n.right.id,
            e,
            null,
            new Yr(r)
          );
          n.right.integrate(t, 0);
          n.forward();
        }
        or(t, e, n, c);
      };
      const ur = (t, e, n, s, r) => {
        while (n && (!n.countable || n.deleted)) {
          if (!n.deleted && n.content.constructor === $r) {
            cr(r, n.content);
          }
          n = n.right;
        }
        let i = 0;
        while (e !== n) {
          if (!e.deleted) {
            const n = e.content;
            switch (n.constructor) {
              case $r: {
                const { key: o, value: c } = n;
                if ((r.get(o) || null) !== c || (s.get(o) || null) === c) {
                  e.delete(t);
                  i++;
                }
                break;
              }
            }
          }
          e = e.right;
        }
        return i;
      };
      const fr = (t, e) => {
        while (e && e.right && (e.right.deleted || !e.right.countable)) {
          e = e.right;
        }
        const n = new Set();
        while (e && (e.deleted || !e.countable)) {
          if (!e.deleted && e.content.constructor === $r) {
            const s = e.content.key;
            if (n.has(s)) {
              e.delete(t);
            } else {
              n.add(s);
            }
          }
          e = e.left;
        }
      };
      const gr = (t) => {
        let e = 0;
        Kn(t.doc, (n) => {
          let s = t._start;
          let r = t._start;
          let i = o.Ue();
          const c = o.JG(i);
          while (r) {
            if (r.deleted === false) {
              switch (r.content.constructor) {
                case $r:
                  cr(c, r.content);
                  break;
                default:
                  e += ur(n, s, r, i, c);
                  i = o.JG(c);
                  s = r;
                  break;
              }
            }
            r = r.right;
          }
        });
        return e;
      };
      const pr = (t, e, n) => {
        const s = n;
        const r = o.JG(e.currentAttributes);
        const i = e.right;
        while (n > 0 && e.right !== null) {
          if (e.right.deleted === false) {
            switch (e.right.content.constructor) {
              case ni:
              case Vr:
              case Yr:
                if (n < e.right.length) {
                  Vn(t, Xe(e.right.id.client, e.right.id.clock + n));
                }
                n -= e.right.length;
                e.right.delete(t);
                break;
            }
          }
          e.forward();
        }
        if (i) {
          ur(t, i, e.right, r, o.JG(e.currentAttributes));
        }
        const c = (e.left || e.right).parent;
        if (c._searchMarker) {
          xs(c._searchMarker, e.index, -s + n);
        }
        return e;
      };
      class wr extends ys {
        constructor(t, e, n) {
          super(t, e);
          this.childListChanged = false;
          this.keysChanged = new Set();
          n.forEach((t) => {
            if (t === null) {
              this.childListChanged = true;
            } else {
              this.keysChanged.add(t);
            }
          });
        }
        get changes() {
          if (this._changes === null) {
            const t = {
              keys: this.keys,
              delta: this.delta,
              added: new Set(),
              deleted: new Set(),
            };
            this._changes = t;
          }
          return this._changes;
        }
        get delta() {
          if (this._delta === null) {
            const t = this.target.doc;
            const e = [];
            Kn(t, (t) => {
              const n = new Map();
              const s = new Map();
              let r = this.target._start;
              let i = null;
              const o = {};
              let c = '';
              let l = 0;
              let h = 0;
              const a = () => {
                if (i !== null) {
                  let t;
                  switch (i) {
                    case 'delete':
                      t = { delete: h };
                      h = 0;
                      break;
                    case 'insert':
                      t = { insert: c };
                      if (n.size > 0) {
                        t.attributes = {};
                        n.forEach((e, n) => {
                          if (e !== null) {
                            t.attributes[n] = e;
                          }
                        });
                      }
                      c = '';
                      break;
                    case 'retain':
                      t = { retain: l };
                      if (Object.keys(o).length > 0) {
                        t.attributes = {};
                        for (const e in o) {
                          t.attributes[e] = o[e];
                        }
                      }
                      l = 0;
                      break;
                  }
                  e.push(t);
                  i = null;
                }
              };
              while (r !== null) {
                switch (r.content.constructor) {
                  case ni:
                  case Vr:
                    if (this.adds(r)) {
                      if (!this.deletes(r)) {
                        a();
                        i = 'insert';
                        c = r.content.getContent()[0];
                        a();
                      }
                    } else if (this.deletes(r)) {
                      if (i !== 'delete') {
                        a();
                        i = 'delete';
                      }
                      h += 1;
                    } else if (!r.deleted) {
                      if (i !== 'retain') {
                        a();
                        i = 'retain';
                      }
                      l += 1;
                    }
                    break;
                  case Yr:
                    if (this.adds(r)) {
                      if (!this.deletes(r)) {
                        if (i !== 'insert') {
                          a();
                          i = 'insert';
                        }
                        c += r.content.str;
                      }
                    } else if (this.deletes(r)) {
                      if (i !== 'delete') {
                        a();
                        i = 'delete';
                      }
                      h += r.length;
                    } else if (!r.deleted) {
                      if (i !== 'retain') {
                        a();
                        i = 'retain';
                      }
                      l += r.length;
                    }
                    break;
                  case $r: {
                    const { key: e, value: c } = r.content;
                    if (this.adds(r)) {
                      if (!this.deletes(r)) {
                        const l = n.get(e) || null;
                        if (!nr(l, c)) {
                          if (i === 'retain') {
                            a();
                          }
                          if (nr(c, s.get(e) || null)) {
                            delete o[e];
                          } else {
                            o[e] = c;
                          }
                        } else {
                          r.delete(t);
                        }
                      }
                    } else if (this.deletes(r)) {
                      s.set(e, c);
                      const t = n.get(e) || null;
                      if (!nr(t, c)) {
                        if (i === 'retain') {
                          a();
                        }
                        o[e] = t;
                      }
                    } else if (!r.deleted) {
                      s.set(e, c);
                      const n = o[e];
                      if (n !== undefined) {
                        if (!nr(n, c)) {
                          if (i === 'retain') {
                            a();
                          }
                          if (c === null) {
                            o[e] = c;
                          } else {
                            delete o[e];
                          }
                        } else {
                          r.delete(t);
                        }
                      }
                    }
                    if (!r.deleted) {
                      if (i === 'insert') {
                        a();
                      }
                      cr(n, r.content);
                    }
                    break;
                  }
                }
                r = r.right;
              }
              a();
              while (e.length > 0) {
                const t = e[e.length - 1];
                if (t.retain !== undefined && t.attributes === undefined) {
                  e.pop();
                } else {
                  break;
                }
              }
            });
            this._delta = e;
          }
          return this._delta;
        }
      }
      class mr extends Ns {
        constructor(t) {
          super();
          this._pending = t !== undefined ? [() => this.insert(0, t)] : [];
          this._searchMarker = [];
        }
        get length() {
          return this._length;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          try {
            this._pending.forEach((t) => t());
          } catch (n) {
            console.error(n);
          }
          this._pending = null;
        }
        _copy() {
          return new mr();
        }
        clone() {
          const t = new mr();
          t.applyDelta(this.toDelta());
          return t;
        }
        _callObserver(t, e) {
          super._callObserver(t, e);
          const n = new wr(this, t, e);
          const s = t.doc;
          Is(this, t, n);
          if (!t.local) {
            let e = false;
            for (const [n, r] of t.afterState.entries()) {
              const i = t.beforeState.get(n) || 0;
              if (r === i) {
                continue;
              }
              Jn(t, s.store.clients.get(n), i, r, (t) => {
                if (!t.deleted && t.content.constructor === $r) {
                  e = true;
                }
              });
              if (e) {
                break;
              }
            }
            if (!e) {
              ie(t, t.deleteSet, (t) => {
                if (t instanceof Nr || e) {
                  return;
                }
                if (t.parent === this && t.content.constructor === $r) {
                  e = true;
                }
              });
            }
            Kn(s, (t) => {
              if (e) {
                gr(this);
              } else {
                ie(t, t.deleteSet, (e) => {
                  if (e instanceof Nr) {
                    return;
                  }
                  if (e.parent === this) {
                    fr(t, e);
                  }
                });
              }
            });
          }
        }
        toString() {
          let t = '';
          let e = this._start;
          while (e !== null) {
            if (!e.deleted && e.countable && e.content.constructor === Yr) {
              t += e.content.str;
            }
            e = e.right;
          }
          return t;
        }
        toJSON() {
          return this.toString();
        }
        applyDelta(t, { sanitize: e = true } = {}) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              const s = new sr(null, this._start, 0, new Map());
              for (let r = 0; r < t.length; r++) {
                const i = t[r];
                if (i.insert !== undefined) {
                  const o =
                    !e &&
                    typeof i.insert === 'string' &&
                    r === t.length - 1 &&
                    s.right === null &&
                    i.insert.slice(-1) === '\n'
                      ? i.insert.slice(0, -1)
                      : i.insert;
                  if (typeof o !== 'string' || o.length > 0) {
                    ar(n, this, s, o, i.attributes || {});
                  }
                } else if (i.retain !== undefined) {
                  dr(n, this, s, i.retain, i.attributes || {});
                } else if (i.delete !== undefined) {
                  pr(n, s, i.delete);
                }
              }
            });
          } else {
            this._pending.push(() => this.applyDelta(t));
          }
        }
        toDelta(t, e, n) {
          const s = [];
          const r = new Map();
          const i = this.doc;
          let o = '';
          let c = this._start;
          function l() {
            if (o.length > 0) {
              const t = {};
              let e = false;
              r.forEach((n, s) => {
                e = true;
                t[s] = n;
              });
              const n = { insert: o };
              if (e) {
                n.attributes = t;
              }
              s.push(n);
              o = '';
            }
          }
          Kn(
            i,
            (i) => {
              if (t) {
                xn(i, t);
              }
              if (e) {
                xn(i, e);
              }
              while (c !== null) {
                if (vn(c, t) || (e !== undefined && vn(c, e))) {
                  switch (c.content.constructor) {
                    case Yr: {
                      const s = r.get('ychange');
                      if (t !== undefined && !vn(c, t)) {
                        if (
                          s === undefined ||
                          s.user !== c.id.client ||
                          s.state !== 'removed'
                        ) {
                          l();
                          r.set(
                            'ychange',
                            n ? n('removed', c.id) : { type: 'removed' }
                          );
                        }
                      } else if (e !== undefined && !vn(c, e)) {
                        if (
                          s === undefined ||
                          s.user !== c.id.client ||
                          s.state !== 'added'
                        ) {
                          l();
                          r.set('ychange', n ? n('added', c.id) : { type: 'added' });
                        }
                      } else if (s !== undefined) {
                        l();
                        r.delete('ychange');
                      }
                      o += c.content.str;
                      break;
                    }
                    case ni:
                    case Vr: {
                      l();
                      const t = { insert: c.content.getContent()[0] };
                      if (r.size > 0) {
                        const e = {};
                        t.attributes = e;
                        r.forEach((t, n) => {
                          e[n] = t;
                        });
                      }
                      s.push(t);
                      break;
                    }
                    case $r:
                      if (vn(c, t)) {
                        l();
                        cr(r, c.content);
                      }
                      break;
                  }
                }
                c = c.right;
              }
              l();
            },
            xn
          );
          return s;
        }
        insert(t, e, n) {
          if (e.length <= 0) {
            return;
          }
          const s = this.doc;
          if (s !== null) {
            Kn(s, (s) => {
              const r = ir(s, this, t);
              if (!n) {
                n = {};
                r.currentAttributes.forEach((t, e) => {
                  n[e] = t;
                });
              }
              ar(s, this, r, e, n);
            });
          } else {
            this._pending.push(() => this.insert(t, e, n));
          }
        }
        insertEmbed(t, e, n = {}) {
          const s = this.doc;
          if (s !== null) {
            Kn(s, (s) => {
              const r = ir(s, this, t);
              ar(s, this, r, e, n);
            });
          } else {
            this._pending.push(() => this.insertEmbed(t, e, n));
          }
        }
        delete(t, e) {
          if (e === 0) {
            return;
          }
          const n = this.doc;
          if (n !== null) {
            Kn(n, (n) => {
              pr(n, ir(n, this, t), e);
            });
          } else {
            this._pending.push(() => this.delete(t, e));
          }
        }
        format(t, e, n) {
          if (e === 0) {
            return;
          }
          const s = this.doc;
          if (s !== null) {
            Kn(s, (s) => {
              const r = ir(s, this, t);
              if (r.right === null) {
                return;
              }
              dr(s, this, r, e, n);
            });
          } else {
            this._pending.push(() => this.format(t, e, n));
          }
        }
        removeAttribute(t) {
          if (this.doc !== null) {
            Kn(this.doc, (e) => {
              Ws(e, this, t);
            });
          } else {
            this._pending.push(() => this.removeAttribute(t));
          }
        }
        setAttribute(t, e) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              js(n, this, t, e);
            });
          } else {
            this._pending.push(() => this.setAttribute(t, e));
          }
        }
        getAttribute(t) {
          return zs(this, t);
        }
        getAttributes(t) {
          return Ys(this);
        }
        _write(t) {
          t.writeTypeRef(Xr);
        }
      }
      const kr = (t) => new mr();
      class yr {
        constructor(t, e = () => true) {
          this._filter = e;
          this._root = t;
          this._currentNode = t._start;
          this._firstCall = true;
        }
        [Symbol.iterator]() {
          return this;
        }
        next() {
          let t = this._currentNode;
          let e = t && t.content && t.content.type;
          if (t !== null && (!this._firstCall || t.deleted || !this._filter(e))) {
            do {
              e = t.content.type;
              if (
                !t.deleted &&
                (e.constructor === Er || e.constructor === _r) &&
                e._start !== null
              ) {
                t = e._start;
              } else {
                while (t !== null) {
                  if (t.right !== null) {
                    t = t.right;
                    break;
                  } else if (t.parent === this._root) {
                    t = null;
                  } else {
                    t = t.parent._item;
                  }
                }
              }
            } while (t !== null && (t.deleted || !this._filter(t.content.type)));
          }
          this._firstCall = false;
          if (t === null) {
            return { value: undefined, done: true };
          }
          this._currentNode = t;
          return { value: t.content.type, done: false };
        }
      }
      class _r extends Ns {
        constructor() {
          super();
          this._prelimContent = [];
        }
        get firstChild() {
          const t = this._first;
          return t ? t.content.getContent()[0] : null;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this.insert(0, this._prelimContent);
          this._prelimContent = null;
        }
        _copy() {
          return new _r();
        }
        clone() {
          const t = new _r();
          t.insert(
            0,
            this.toArray().map((t) => (t instanceof Ns ? t.clone() : t))
          );
          return t;
        }
        get length() {
          return this._prelimContent === null
            ? this._length
            : this._prelimContent.length;
        }
        createTreeWalker(t) {
          return new yr(this, t);
        }
        querySelector(t) {
          t = t.toUpperCase();
          const e = new yr(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t);
          const n = e.next();
          if (n.done) {
            return null;
          } else {
            return n.value;
          }
        }
        querySelectorAll(t) {
          t = t.toUpperCase();
          return Array.from(
            new yr(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t)
          );
        }
        _callObserver(t, e) {
          Is(this, t, new Cr(this, e, t));
        }
        toString() {
          return Rs(this, (t) => t.toString()).join('');
        }
        toJSON() {
          return this.toString();
        }
        toDOM(t = document, e = {}, n) {
          const s = t.createDocumentFragment();
          if (n !== undefined) {
            n._createAssociation(s, this);
          }
          Ts(this, (r) => {
            s.insertBefore(r.toDOM(t, e, n), null);
          });
          return s;
        }
        insert(t, e) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              Js(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, 0, ...e);
          }
        }
        insertAfter(t, e) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              const s = t && t instanceof Ns ? t._item : t;
              Fs(n, this, s, e);
            });
          } else {
            const n = this._prelimContent;
            const s = t === null ? 0 : n.findIndex((e) => e === t) + 1;
            if (s === 0 && t !== null) {
              throw k('Reference item not found');
            }
            n.splice(s, 0, ...e);
          }
        }
        delete(t, e = 1) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              Hs(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, e);
          }
        }
        toArray() {
          return Us(this);
        }
        push(t) {
          this.insert(this.length, t);
        }
        unshift(t) {
          this.insert(0, t);
        }
        get(t) {
          return Vs(this, t);
        }
        slice(t = 0, e = this.length) {
          return Os(this, t, e);
        }
        _write(t) {
          t.writeTypeRef(Qr);
        }
      }
      const br = (t) => new _r();
      class Er extends _r {
        constructor(t = 'UNDEFINED') {
          super();
          this.nodeName = t;
          this._prelimAttrs = new Map();
        }
        get nextSibling() {
          const t = this._item ? this._item.next : null;
          return t ? t.content.type : null;
        }
        get prevSibling() {
          const t = this._item ? this._item.prev : null;
          return t ? t.content.type : null;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this._prelimAttrs.forEach((t, e) => {
            this.setAttribute(e, t);
          });
          this._prelimAttrs = null;
        }
        _copy() {
          return new Er(this.nodeName);
        }
        clone() {
          const t = new Er(this.nodeName);
          const e = this.getAttributes();
          for (const n in e) {
            t.setAttribute(n, e[n]);
          }
          t.insert(
            0,
            this.toArray().map((t) => (t instanceof Ns ? t.clone() : t))
          );
          return t;
        }
        toString() {
          const t = this.getAttributes();
          const e = [];
          const n = [];
          for (const o in t) {
            n.push(o);
          }
          n.sort();
          const s = n.length;
          for (let o = 0; o < s; o++) {
            const s = n[o];
            e.push(s + '="' + t[s] + '"');
          }
          const r = this.nodeName.toLocaleLowerCase();
          const i = e.length > 0 ? ' ' + e.join(' ') : '';
          return `<${r}${i}>${super.toString()}</${r}>`;
        }
        removeAttribute(t) {
          if (this.doc !== null) {
            Kn(this.doc, (e) => {
              Ws(e, this, t);
            });
          } else {
            this._prelimAttrs.delete(t);
          }
        }
        setAttribute(t, e) {
          if (this.doc !== null) {
            Kn(this.doc, (n) => {
              js(n, this, t, e);
            });
          } else {
            this._prelimAttrs.set(t, e);
          }
        }
        getAttribute(t) {
          return zs(this, t);
        }
        hasAttribute(t) {
          return Bs(this, t);
        }
        getAttributes(t) {
          return Ys(this);
        }
        toDOM(t = document, e = {}, n) {
          const s = t.createElement(this.nodeName);
          const r = this.getAttributes();
          for (const i in r) {
            s.setAttribute(i, r[i]);
          }
          Ts(this, (r) => {
            s.appendChild(r.toDOM(t, e, n));
          });
          if (n !== undefined) {
            n._createAssociation(s, this);
          }
          return s;
        }
        _write(t) {
          t.writeTypeRef(Zr);
          t.writeKey(this.nodeName);
        }
      }
      const Sr = (t) => new Er(t.readKey());
      class Cr extends ys {
        constructor(t, e, n) {
          super(t, n);
          this.childListChanged = false;
          this.attributesChanged = new Set();
          e.forEach((t) => {
            if (t === null) {
              this.childListChanged = true;
            } else {
              this.attributesChanged.add(t);
            }
          });
        }
      }
      class Dr extends tr {
        constructor(t) {
          super();
          this.hookName = t;
        }
        _copy() {
          return new Dr(this.hookName);
        }
        clone() {
          const t = new Dr(this.hookName);
          this.forEach((e, n) => {
            t.set(n, e);
          });
          return t;
        }
        toDOM(t = document, e = {}, n) {
          const s = e[this.hookName];
          let r;
          if (s !== undefined) {
            r = s.createDom(this);
          } else {
            r = document.createElement(this.hookName);
          }
          r.setAttribute('data-yjs-hook', this.hookName);
          if (n !== undefined) {
            n._createAssociation(r, this);
          }
          return r;
        }
        _write(t) {
          t.writeTypeRef(ti);
          t.writeKey(this.hookName);
        }
      }
      const Ar = (t) => new Dr(t.readKey());
      class vr extends mr {
        get nextSibling() {
          const t = this._item ? this._item.next : null;
          return t ? t.content.type : null;
        }
        get prevSibling() {
          const t = this._item ? this._item.prev : null;
          return t ? t.content.type : null;
        }
        _copy() {
          return new vr();
        }
        clone() {
          const t = new vr();
          t.applyDelta(this.toDelta());
          return t;
        }
        toDOM(t = document, e, n) {
          const s = t.createTextNode(this.toString());
          if (n !== undefined) {
            n._createAssociation(s, this);
          }
          return s;
        }
        toString() {
          return this.toDelta()
            .map((t) => {
              const e = [];
              for (const s in t.attributes) {
                const n = [];
                for (const e in t.attributes[s]) {
                  n.push({ key: e, value: t.attributes[s][e] });
                }
                n.sort((t, e) => (t.key < e.key ? -1 : 1));
                e.push({ nodeName: s, attrs: n });
              }
              e.sort((t, e) => (t.nodeName < e.nodeName ? -1 : 1));
              let n = '';
              for (let s = 0; s < e.length; s++) {
                const t = e[s];
                n += `<${t.nodeName}`;
                for (let e = 0; e < t.attrs.length; e++) {
                  const s = t.attrs[e];
                  n += ` ${s.key}="${s.value}"`;
                }
                n += '>';
              }
              n += t.insert;
              for (let s = e.length - 1; s >= 0; s--) {
                n += `</${e[s].nodeName}>`;
              }
              return n;
            })
            .join('');
        }
        toJSON() {
          return this.toString();
        }
        _write(t) {
          t.writeTypeRef(ei);
        }
      }
      const xr = (t) => new vr();
      class Mr {
        constructor(t, e) {
          this.id = t;
          this.length = e;
        }
        get deleted() {
          throw y();
        }
        mergeWith(t) {
          return false;
        }
        write(t, e, n) {
          throw y();
        }
        integrate(t, e) {
          throw y();
        }
      }
      const Ir = 0;
      class Nr extends Mr {
        get deleted() {
          return true;
        }
        delete() {}
        mergeWith(t) {
          if (this.constructor !== t.constructor) {
            return false;
          }
          this.length += t.length;
          return true;
        }
        integrate(t, e) {
          if (e > 0) {
            this.id.clock += e;
            this.length -= e;
          }
          Un(t.doc.store, this);
        }
        write(t, e) {
          t.writeInfo(Ir);
          t.writeLen(this.length - e);
        }
        getMissing(t, e) {
          return null;
        }
      }
      class Or {
        constructor(t) {
          this.content = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.content];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Or(this.content);
        }
        splice(t) {
          throw y();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeBuf(this.content);
        }
        getRef() {
          return 3;
        }
      }
      const Ur = (t) => new Or(t.readBuf());
      class Lr {
        constructor(t) {
          this.len = t;
        }
        getLength() {
          return this.len;
        }
        getContent() {
          return [];
        }
        isCountable() {
          return false;
        }
        copy() {
          return new Lr(this.len);
        }
        splice(t) {
          const e = new Lr(this.len - t);
          this.len = t;
          return e;
        }
        mergeWith(t) {
          this.len += t.len;
          return true;
        }
        integrate(t, e) {
          ae(t.deleteSet, e.id.client, e.id.clock, this.len);
          e.markDeleted();
        }
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeLen(this.len - e);
        }
        getRef() {
          return 1;
        }
      }
      const Tr = (t) => new Lr(t.readLen());
      class Rr {
        constructor(t) {
          if (t._item) {
            console.error(
              'This document was already integrated as a sub-document. You should create a second instance instead with the same guid.'
            );
          }
          this.doc = t;
          const e = {};
          this.opts = e;
          if (!t.gc) {
            e.gc = false;
          }
          if (t.autoLoad) {
            e.autoLoad = true;
          }
          if (t.meta !== null) {
            e.meta = t.meta;
          }
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.doc];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Rr(this.doc);
        }
        splice(t) {
          throw y();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {
          this.doc._item = e;
          t.subdocsAdded.add(this.doc);
          if (this.doc.shouldLoad) {
            t.subdocsLoaded.add(this.doc);
          }
        }
        delete(t) {
          if (t.subdocsAdded.has(this.doc)) {
            t.subdocsAdded.delete(this.doc);
          } else {
            t.subdocsRemoved.add(this.doc);
          }
        }
        gc(t) {}
        write(t, e) {
          t.writeString(this.doc.guid);
          t.writeAny(this.opts);
        }
        getRef() {
          return 9;
        }
      }
      const Pr = (t) => new Rr(new me({ guid: t.readString(), ...t.readAny() }));
      class Vr {
        constructor(t) {
          this.embed = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.embed];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Vr(this.embed);
        }
        splice(t) {
          throw y();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeJSON(this.embed);
        }
        getRef() {
          return 5;
        }
      }
      const Fr = (t) => new Vr(t.readJSON());
      class $r {
        constructor(t, e) {
          this.key = t;
          this.value = e;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [];
        }
        isCountable() {
          return false;
        }
        copy() {
          return new $r(this.key, this.value);
        }
        splice(t) {
          throw y();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {
          e.parent._searchMarker = null;
        }
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeKey(this.key);
          t.writeJSON(this.value);
        }
        getRef() {
          return 6;
        }
      }
      const Jr = (t) => new $r(t.readString(), t.readJSON());
      class Hr {
        constructor(t) {
          this.arr = t;
        }
        getLength() {
          return this.arr.length;
        }
        getContent() {
          return this.arr;
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Hr(this.arr);
        }
        splice(t) {
          const e = new Hr(this.arr.slice(t));
          this.arr = this.arr.slice(0, t);
          return e;
        }
        mergeWith(t) {
          this.arr = this.arr.concat(t.arr);
          return true;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          const n = this.arr.length;
          t.writeLen(n - e);
          for (let s = e; s < n; s++) {
            const e = this.arr[s];
            t.writeString(e === undefined ? 'undefined' : JSON.stringify(e));
          }
        }
        getRef() {
          return 2;
        }
      }
      const Wr = (t) => {
        const e = t.readLen();
        const n = [];
        for (let s = 0; s < e; s++) {
          const e = t.readString();
          if (e === 'undefined') {
            n.push(undefined);
          } else {
            n.push(JSON.parse(e));
          }
        }
        return new Hr(n);
      };
      class jr {
        constructor(t) {
          this.arr = t;
        }
        getLength() {
          return this.arr.length;
        }
        getContent() {
          return this.arr;
        }
        isCountable() {
          return true;
        }
        copy() {
          return new jr(this.arr);
        }
        splice(t) {
          const e = new jr(this.arr.slice(t));
          this.arr = this.arr.slice(0, t);
          return e;
        }
        mergeWith(t) {
          this.arr = this.arr.concat(t.arr);
          return true;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          const n = this.arr.length;
          t.writeLen(n - e);
          for (let s = e; s < n; s++) {
            const e = this.arr[s];
            t.writeAny(e);
          }
        }
        getRef() {
          return 8;
        }
      }
      const zr = (t) => {
        const e = t.readLen();
        const n = [];
        for (let s = 0; s < e; s++) {
          n.push(t.readAny());
        }
        return new jr(n);
      };
      class Yr {
        constructor(t) {
          this.str = t;
        }
        getLength() {
          return this.str.length;
        }
        getContent() {
          return this.str.split('');
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Yr(this.str);
        }
        splice(t) {
          const e = new Yr(this.str.slice(t));
          this.str = this.str.slice(0, t);
          const n = this.str.charCodeAt(t - 1);
          if (n >= 55296 && n <= 56319) {
            this.str = this.str.slice(0, t - 1) + '�';
            e.str = '�' + e.str.slice(1);
          }
          return e;
        }
        mergeWith(t) {
          this.str += t.str;
          return true;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeString(e === 0 ? this.str : this.str.slice(e));
        }
        getRef() {
          return 4;
        }
      }
      const Br = (t) => new Yr(t.readString());
      const Gr = [Zs, er, kr, Sr, br, Ar, xr];
      const qr = 0;
      const Kr = 1;
      const Xr = 2;
      const Zr = 3;
      const Qr = 4;
      const ti = 5;
      const ei = 6;
      class ni {
        constructor(t) {
          this.type = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.type];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new ni(this.type._copy());
        }
        splice(t) {
          throw y();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {
          this.type._integrate(t.doc, e);
        }
        delete(t) {
          let e = this.type._start;
          while (e !== null) {
            if (!e.deleted) {
              e.delete(t);
            } else {
              t._mergeStructs.push(e);
            }
            e = e.right;
          }
          this.type._map.forEach((e) => {
            if (!e.deleted) {
              e.delete(t);
            } else {
              t._mergeStructs.push(e);
            }
          });
          t.changed.delete(this.type);
        }
        gc(t) {
          let e = this.type._start;
          while (e !== null) {
            e.gc(t, true);
            e = e.right;
          }
          this.type._start = null;
          this.type._map.forEach((e) => {
            while (e !== null) {
              e.gc(t, true);
              e = e.left;
            }
          });
          this.type._map = new Map();
        }
        write(t, e) {
          this.type._write(t);
        }
        getRef() {
          return 7;
        }
      }
      const si = (t) => new ni(Gr[t.readTypeRef()](t));
      const ri = (t, e) => {
        let n = e;
        let s = 0;
        let r;
        do {
          if (s > 0) {
            n = Xe(n.client, n.clock + s);
          }
          r = Rn(t, n);
          s = n.clock - r.id.clock;
          n = r.redone;
        } while (n !== null && r instanceof li);
        return { item: r, diff: s };
      };
      const ii = (t, e) => {
        while (t !== null && t.keep !== e) {
          t.keep = e;
          t = t.parent._item;
        }
      };
      const oi = (t, e, n) => {
        const { client: s, clock: r } = e.id;
        const i = new li(
          Xe(s, r + n),
          e,
          Xe(s, r + n - 1),
          e.right,
          e.rightOrigin,
          e.parent,
          e.parentSub,
          e.content.splice(n)
        );
        if (e.deleted) {
          i.markDeleted();
        }
        if (e.keep) {
          i.keep = true;
        }
        if (e.redone !== null) {
          i.redone = Xe(e.redone.client, e.redone.clock + n);
        }
        e.right = i;
        if (i.right !== null) {
          i.right.left = i;
        }
        t._mergeStructs.push(i);
        if (i.parentSub !== null && i.right === null) {
          i.parent._map.set(i.parentSub, i);
        }
        e.length = n;
        return i;
      };
      const ci = (t, e, n, s) => {
        const r = t.doc;
        const i = r.store;
        const o = r.clientID;
        const c = e.redone;
        if (c !== null) {
          return Vn(t, c);
        }
        let l = e.parent._item;
        let h;
        let a;
        if (e.parentSub === null) {
          h = e.left;
          a = e;
        } else {
          h = e;
          while (h.right !== null) {
            h = h.right;
            if (h.id.client !== o) {
              return null;
            }
          }
          if (h.right !== null) {
            h = e.parent._map.get(e.parentSub);
          }
          a = null;
        }
        if (l !== null && l.deleted === true && l.redone === null) {
          if (!n.has(l) || ci(t, l, n, s) === null) {
            return null;
          }
        }
        if (l !== null && l.redone !== null) {
          while (l.redone !== null) {
            l = Vn(t, l.redone);
          }
          while (h !== null) {
            let e = h;
            while (e !== null && e.parent._item !== l) {
              e = e.redone === null ? null : Vn(t, e.redone);
            }
            if (e !== null && e.parent._item === l) {
              h = e;
              break;
            }
            h = h.left;
          }
          while (a !== null) {
            let e = a;
            while (e !== null && e.parent._item !== l) {
              e = e.redone === null ? null : Vn(t, e.redone);
            }
            if (e !== null && e.parent._item === l) {
              a = e;
              break;
            }
            a = a.right;
          }
          while (
            h !== null &&
            h.right !== null &&
            h.right !== a &&
            s.findIndex((t) => t === h.right) >= 0
          ) {
            h = h.right;
          }
        }
        const d = On(i, o);
        const u = Xe(o, d);
        const f = new li(
          u,
          h,
          h && h.lastId,
          a,
          a && a.id,
          l === null ? e.parent : l.content.type,
          e.parentSub,
          e.content.copy()
        );
        e.redone = u;
        ii(f, true);
        f.integrate(t, 0);
        return f;
      };
      class li extends Mr {
        constructor(t, e, n, s, r, i, o, c) {
          super(t, c.getLength());
          this.origin = n;
          this.left = e;
          this.right = s;
          this.rightOrigin = r;
          this.parent = i;
          this.parentSub = o;
          this.redone = null;
          this.content = c;
          this.info = this.content.isCountable() ? b.Qn : 0;
        }
        set marker(t) {
          if ((this.info & b.Ko) > 0 !== t) {
            this.info ^= b.Ko;
          }
        }
        get marker() {
          return (this.info & b.Ko) > 0;
        }
        get keep() {
          return (this.info & b.Vw) > 0;
        }
        set keep(t) {
          if (this.keep !== t) {
            this.info ^= b.Vw;
          }
        }
        get countable() {
          return (this.info & b.Qn) > 0;
        }
        get deleted() {
          return (this.info & b.CY) > 0;
        }
        set deleted(t) {
          if (this.deleted !== t) {
            this.info ^= b.CY;
          }
        }
        markDeleted() {
          this.info |= b.CY;
        }
        getMissing(t, e) {
          if (
            this.origin &&
            this.origin.client !== this.id.client &&
            this.origin.clock >= On(e, this.origin.client)
          ) {
            return this.origin.client;
          }
          if (
            this.rightOrigin &&
            this.rightOrigin.client !== this.id.client &&
            this.rightOrigin.clock >= On(e, this.rightOrigin.client)
          ) {
            return this.rightOrigin.client;
          }
          if (
            this.parent &&
            this.parent.constructor === qe &&
            this.id.client !== this.parent.client &&
            this.parent.clock >= On(e, this.parent.client)
          ) {
            return this.parent.client;
          }
          if (this.origin) {
            this.left = Fn(t, e, this.origin);
            this.origin = this.left.lastId;
          }
          if (this.rightOrigin) {
            this.right = Vn(t, this.rightOrigin);
            this.rightOrigin = this.right.id;
          }
          if (
            (this.left && this.left.constructor === Nr) ||
            (this.right && this.right.constructor === Nr)
          ) {
            this.parent = null;
          }
          if (!this.parent) {
            if (this.left && this.left.constructor === li) {
              this.parent = this.left.parent;
              this.parentSub = this.left.parentSub;
            }
            if (this.right && this.right.constructor === li) {
              this.parent = this.right.parent;
              this.parentSub = this.right.parentSub;
            }
          } else if (this.parent.constructor === qe) {
            const t = Rn(e, this.parent);
            if (t.constructor === Nr) {
              this.parent = null;
            } else {
              this.parent = t.content.type;
            }
          }
          return null;
        }
        integrate(t, e) {
          if (e > 0) {
            this.id.clock += e;
            this.left = Fn(t, t.doc.store, Xe(this.id.client, this.id.clock - 1));
            this.origin = this.left.lastId;
            this.content = this.content.splice(e);
            this.length -= e;
          }
          if (this.parent) {
            if (
              (!this.left && (!this.right || this.right.left !== null)) ||
              (this.left && this.left.right !== this.right)
            ) {
              let e = this.left;
              let n;
              if (e !== null) {
                n = e.right;
              } else if (this.parentSub !== null) {
                n = this.parent._map.get(this.parentSub) || null;
                while (n !== null && n.left !== null) {
                  n = n.left;
                }
              } else {
                n = this.parent._start;
              }
              const s = new Set();
              const r = new Set();
              while (n !== null && n !== this.right) {
                r.add(n);
                s.add(n);
                if (Ke(this.origin, n.origin)) {
                  if (n.id.client < this.id.client) {
                    e = n;
                    s.clear();
                  } else if (Ke(this.rightOrigin, n.rightOrigin)) {
                    break;
                  }
                } else if (n.origin !== null && r.has(Rn(t.doc.store, n.origin))) {
                  if (!s.has(Rn(t.doc.store, n.origin))) {
                    e = n;
                    s.clear();
                  }
                } else {
                  break;
                }
                n = n.right;
              }
              this.left = e;
            }
            if (this.left !== null) {
              const t = this.left.right;
              this.right = t;
              this.left.right = this;
            } else {
              let t;
              if (this.parentSub !== null) {
                t = this.parent._map.get(this.parentSub) || null;
                while (t !== null && t.left !== null) {
                  t = t.left;
                }
              } else {
                t = this.parent._start;
                this.parent._start = this;
              }
              this.right = t;
            }
            if (this.right !== null) {
              this.right.left = this;
            } else if (this.parentSub !== null) {
              this.parent._map.set(this.parentSub, this);
              if (this.left !== null) {
                this.left.delete(t);
              }
            }
            if (this.parentSub === null && this.countable && !this.deleted) {
              this.parent._length += this.length;
            }
            Un(t.doc.store, this);
            this.content.integrate(t, this);
            jn(t, this.parent, this.parentSub);
            if (
              (this.parent._item !== null && this.parent._item.deleted) ||
              (this.parentSub !== null && this.right !== null)
            ) {
              this.delete(t);
            }
          } else {
            new Nr(this.id, this.length).integrate(t, 0);
          }
        }
        get next() {
          let t = this.right;
          while (t !== null && t.deleted) {
            t = t.right;
          }
          return t;
        }
        get prev() {
          let t = this.left;
          while (t !== null && t.deleted) {
            t = t.left;
          }
          return t;
        }
        get lastId() {
          return this.length === 1
            ? this.id
            : Xe(this.id.client, this.id.clock + this.length - 1);
        }
        mergeWith(t) {
          if (
            this.constructor === t.constructor &&
            Ke(t.origin, this.lastId) &&
            this.right === t &&
            Ke(this.rightOrigin, t.rightOrigin) &&
            this.id.client === t.id.client &&
            this.id.clock + this.length === t.id.clock &&
            this.deleted === t.deleted &&
            this.redone === null &&
            t.redone === null &&
            this.content.constructor === t.content.constructor &&
            this.content.mergeWith(t.content)
          ) {
            const e = this.parent._searchMarker;
            if (e) {
              e.forEach((e) => {
                if (e.p === t) {
                  e.p = this;
                  if (!this.deleted && this.countable) {
                    e.index -= this.length;
                  }
                }
              });
            }
            if (t.keep) {
              this.keep = true;
            }
            this.right = t.right;
            if (this.right !== null) {
              this.right.left = this;
            }
            this.length += t.length;
            return true;
          }
          return false;
        }
        delete(t) {
          if (!this.deleted) {
            const e = this.parent;
            if (this.countable && this.parentSub === null) {
              e._length -= this.length;
            }
            this.markDeleted();
            ae(t.deleteSet, this.id.client, this.id.clock, this.length);
            jn(t, e, this.parentSub);
            this.content.delete(t);
          }
        }
        gc(t, e) {
          if (!this.deleted) {
            throw _();
          }
          this.content.gc(t);
          if (e) {
            $n(t, this, new Nr(this.id, this.length));
          } else {
            this.content = new Lr(this.length);
          }
        }
        write(t, e) {
          const n = e > 0 ? Xe(this.id.client, this.id.clock + e - 1) : this.origin;
          const s = this.rightOrigin;
          const r = this.parentSub;
          const i =
            (this.content.getRef() & b.kr) |
            (n === null ? 0 : b.x1) |
            (s === null ? 0 : b.rc) |
            (r === null ? 0 : b.cq);
          t.writeInfo(i);
          if (n !== null) {
            t.writeLeftID(n);
          }
          if (s !== null) {
            t.writeRightID(s);
          }
          if (n === null && s === null) {
            const e = this.parent;
            if (e._item !== undefined) {
              const n = e._item;
              if (n === null) {
                const n = tn(e);
                t.writeParentInfo(true);
                t.writeString(n);
              } else {
                t.writeParentInfo(false);
                t.writeLeftID(n.id);
              }
            } else if (e.constructor === String) {
              t.writeParentInfo(true);
              t.writeString(e);
            } else if (e.constructor === qe) {
              t.writeParentInfo(false);
              t.writeLeftID(e);
            } else {
              _();
            }
            if (r !== null) {
              t.writeString(r);
            }
          }
          this.content.write(t, e);
        }
      }
      const hi = (t, e) => ai[e & b.kr](t);
      const ai = [
        () => {
          _();
        },
        Tr,
        Wr,
        Ur,
        Br,
        Fr,
        Jr,
        si,
        zr,
        Pr,
        () => {
          _();
        },
      ];
      const di = 10;
      class ui extends Mr {
        get deleted() {
          return true;
        }
        delete() {}
        mergeWith(t) {
          if (this.constructor !== t.constructor) {
            return false;
          }
          this.length += t.length;
          return true;
        }
        integrate(t, e) {
          _();
        }
        write(t, e) {
          t.writeInfo(di);
          c.uE(t.restEncoder, this.length - e);
        }
        getMissing(t, e) {
          return null;
        }
      }
      const fi =
        typeof window !== 'undefined' ? window : typeof n.g !== 'undefined' ? n.g : {};
      const gi = '__ $YJS$ __';
      if (fi[gi] === true) {
        console.warn(
          'Yjs was already imported. Importing different versions of Yjs often leads to issues.'
        );
      }
      fi[gi] = true;
    },
  },
]);
//# sourceMappingURL=3502.c915d993b864739407e3.js.map?v=c915d993b864739407e3
