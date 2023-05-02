'use strict';
(self.webpackChunkandeplane_pyodide_kernel_extension =
  self.webpackChunkandeplane_pyodide_kernel_extension || []).push([
  [465, 330],
  {
    938: (e, t, n) => {
      n.r(t),
        n.d(t, {
          PIPLITE_INDEX_SCHEMA: () => g,
          PyodideKernel: () => v,
          PyodideRemoteKernel: () => U.O,
          allJSONUrl: () => s,
          ipykernelWheelUrl: () => i,
          pipliteWheelUrl: () => l,
          pyodide_kernelWheelUrl: () => c,
          widgetsnbextensionWheelUrl: () => u,
          widgetsnbextensionWheelUrl1: () => m,
        });
      const r = n.p + 'pypi/all.json';
      var s = n.t(r);
      const a = n.p + 'pypi/ipykernel-6.9.2-py3-none-any.whl';
      var i = n.t(a);
      const o = n.p + 'pypi/piplite-0.0.7-py3-none-any.whl';
      var l = n.t(o);
      const p = n.p + 'pypi/pyodide_kernel-0.0.13-py3-none-any.whl';
      var c = n.t(p);
      const d = n.p + 'pypi/widgetsnbextension-3.6.4-py3-none-any.whl';
      var u = n.t(d);
      const h = n.p + 'pypi/widgetsnbextension-4.0.7-py3-none-any.whl';
      var m = n.t(h),
        y = n(526),
        _ = n(671),
        b = n(289),
        k = n(83),
        w = n(542);
      n.n(w)().init('fb25742efb56d116b736515a0ad5f6ef', { debug: !1 });
      class v extends b.BaseKernel {
        constructor(e) {
          super(e),
            (this._ready = new y.PromiseDelegate()),
            (this._worker = this.initWorker(e)),
            (this._worker.onmessage = (e) => this._processWorkerMessage(e.data)),
            (this._remoteKernel = (0, k.Ud)(this._worker)),
            this.initRemote(e);
        }
        initWorker(e) {
          return new Worker(new URL(n.p + n.u(168), n.b), { type: void 0 });
        }
        async initRemote(e) {
          const t = this.initRemoteOptions(e);
          await this._remoteKernel.initialize(t), this._ready.resolve();
        }
        initRemoteOptions(e) {
          const { pyodideUrl: t } = e,
            n = t.slice(0, t.lastIndexOf('/') + 1),
            s = _.PageConfig.getBaseUrl(),
            a = [...(e.pipliteUrls || []), r],
            i = !!e.disablePyPIFallback;
          return {
            baseUrl: s,
            pyodideUrl: t,
            indexUrl: n,
            pipliteWheelUrl: e.pipliteWheelUrl || o,
            pipliteUrls: a,
            disablePyPIFallback: i,
            location: this.location,
            mountDrive: e.mountDrive,
          };
        }
        dispose() {
          this.isDisposed ||
            (this._worker.terminate(), (this._worker = null), super.dispose());
        }
        get ready() {
          return this._ready.promise;
        }
        _processWorkerMessage(e) {
          var t, n, r, s, a, i, o;
          if (e.type)
            switch (e.type) {
              case 'stream': {
                const n =
                  null !== (t = e.bundle) && void 0 !== t
                    ? t
                    : { name: 'stdout', text: '' };
                this.stream(n, e.parentHeader);
                break;
              }
              case 'input_request': {
                const t =
                  null !== (n = e.content) && void 0 !== n
                    ? n
                    : { prompt: '', password: !1 };
                this.inputRequest(t, e.parentHeader);
                break;
              }
              case 'display_data': {
                const t =
                  null !== (r = e.bundle) && void 0 !== r
                    ? r
                    : { data: {}, metadata: {}, transient: {} };
                this.displayData(t, e.parentHeader);
                break;
              }
              case 'update_display_data': {
                const t =
                  null !== (s = e.bundle) && void 0 !== s
                    ? s
                    : { data: {}, metadata: {}, transient: {} };
                this.updateDisplayData(t, e.parentHeader);
                break;
              }
              case 'clear_output': {
                const t = null !== (a = e.bundle) && void 0 !== a ? a : { wait: !1 };
                this.clearOutput(t, e.parentHeader);
                break;
              }
              case 'execute_result': {
                const t =
                  null !== (i = e.bundle) && void 0 !== i
                    ? i
                    : { execution_count: 0, data: {}, metadata: {} };
                this.publishExecuteResult(t, e.parentHeader);
                break;
              }
              case 'execute_error': {
                const t =
                  null !== (o = e.bundle) && void 0 !== o
                    ? o
                    : { ename: '', evalue: '', traceback: [] };
                this.publishExecuteError(t, e.parentHeader);
                break;
              }
              case 'comm_msg':
              case 'comm_open':
              case 'comm_close':
                this.handleComm(
                  e.type,
                  e.content,
                  e.metadata,
                  e.buffers,
                  e.parentHeader
                );
            }
        }
        async kernelInfoRequest() {
          return {
            implementation: 'pyodide',
            implementation_version: '0.1.0',
            language_info: {
              codemirror_mode: { name: 'python', version: 3 },
              file_extension: '.py',
              mimetype: 'text/x-python',
              name: 'python',
              nbconvert_exporter: 'python',
              pygments_lexer: 'ipython3',
              version: '3.8',
            },
            protocol_version: '5.3',
            status: 'ok',
            banner: 'A WebAssembly-powered Python kernel backed by Pyodide',
            help_links: [{ text: 'Python (WASM) Kernel', url: 'https://pyodide.org' }],
          };
        }
        async executeRequest(e) {
          await this.ready;
          const t = await this._remoteKernel.execute(e, this.parent);
          return (t.execution_count = this.executionCount), t;
        }
        async completeRequest(e) {
          return await this._remoteKernel.complete(e, this.parent);
        }
        async inspectRequest(e) {
          return await this._remoteKernel.inspect(e, this.parent);
        }
        async isCompleteRequest(e) {
          return await this._remoteKernel.isComplete(e, this.parent);
        }
        async commInfoRequest(e) {
          return await this._remoteKernel.commInfo(e, this.parent);
        }
        async commOpen(e) {
          return await this._remoteKernel.commOpen(e, this.parent);
        }
        async commMsg(e) {
          return await this._remoteKernel.commMsg(e, this.parent);
        }
        async commClose(e) {
          return await this._remoteKernel.commClose(e, this.parent);
        }
        async inputReply(e) {
          return await this._remoteKernel.inputReply(e, this.parent);
        }
      }
      const x = n.p + 'schema/piplite.v0.schema.json';
      var g = n.t(x),
        U = n(951);
    },
  },
]);
//# sourceMappingURL=465.e2c920139f08cff8da7d.js.map?v=e2c920139f08cff8da7d
