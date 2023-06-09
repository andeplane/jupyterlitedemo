(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [7796],
  {
    37796: (e, r, t) => {
      'use strict';
      t.r(r);
      t.d(r, { main: () => G });
      var o = t(2886);
      var n = t(95171);
      var l = t(48435);
      var s = t(69858);
      var a = t(89131);
      var i = t(85745);
      var c = t(99093);
      var u = t(28180);
      var f = t(2542);
      var p = t(7920);
      var h = t(38710);
      var d = t(21411);
      var y = t(81554);
      var v = t(67014);
      var b = t(77552);
      var x = t(71821);
      var j = t(13313);
      var m = t(23454);
      var g = t(34802);
      var w = t(42584);
      var C = t(54244);
      var P = t(93814);
      var E = t(64897);
      var S = t(72738);
      var _ = t(92121);
      var k = t(83344);
      var O = t(11706);
      var L = t(70987);
      var J = t(55337);
      var A = t(32977);
      var N = t(95528);
      var T = t(3268);
      var M = t(99204);
      var $ = t(28566);
      var B = t(50168);
      var D = t(52714);
      var R = t(43162);
      var F = t(57385);
      var I = t(65540);
      var U = t(1733);
      var Y = t(49857);
      var q = t(30124);
      if (Promise.allSettled === undefined) {
        Promise.allSettled = (e) =>
          Promise.all(
            e.map((e) =>
              e.then(
                (e) => ({ status: 'fulfilled', value: e }),
                (e) => ({ status: 'rejected', reason: e })
              )
            )
          );
      }
      async function z(e, r) {
        try {
          const t = await window._JUPYTERLAB[e].get(r);
          return t();
        } catch (t) {
          console.warn(`Failed to create module: package: ${e}; module: ${r}`);
          throw t;
        }
      }
      async function G() {
        var e = o.PageConfig.getOption('browserTest');
        if (e.toLowerCase() === 'true') {
          var r = document.createElement('div');
          r.id = 'browserTest';
          document.body.appendChild(r);
          r.textContent = '[]';
          r.style.display = 'none';
          var n = [];
          var l = false;
          var s = 25e3;
          var a = function () {
            if (l) {
              return;
            }
            l = true;
            r.className = 'completed';
          };
          window.onerror = function (e, t, o, l, s) {
            n.push(String(s));
            r.textContent = JSON.stringify(n);
          };
          console.error = function (e) {
            n.push(String(e));
            r.textContent = JSON.stringify(n);
          };
        }
        var i = t(29445).JupyterLab;
        var c = [];
        var u = [];
        var f = [];
        var p = [];
        const h = [];
        const d = [];
        const y = [];
        const v = JSON.parse(o.PageConfig.getOption('federated_extensions'));
        const b = [];
        v.forEach((e) => {
          if (e.extension) {
            b.push(e.name);
            h.push(z(e.name, e.extension));
          }
          if (e.mimeExtension) {
            b.push(e.name);
            d.push(z(e.name, e.mimeExtension));
          }
          if (e.style) {
            y.push(z(e.name, e.style));
          }
        });
        function* x(e) {
          let r;
          if (e.hasOwnProperty('__esModule')) {
            r = e.default;
          } else {
            r = e;
          }
          let t = Array.isArray(r) ? r : [r];
          for (let n of t) {
            if (o.PageConfig.Extension.isDisabled(n.id)) {
              c.push(n.id);
              continue;
            }
            if (o.PageConfig.Extension.isDeferred(n.id)) {
              u.push(n.id);
              f.push(n.id);
            }
            yield n;
          }
        }
        const j = [];
        if (!b.includes('@jupyterlab/javascript-extension')) {
          try {
            let e = t(98514);
            for (let r of x(e)) {
              j.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/json-extension')) {
          try {
            let e = t(47542);
            for (let r of x(e)) {
              j.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/pdf-extension')) {
          try {
            let e = t(38390);
            for (let r of x(e)) {
              j.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/vega5-extension')) {
          try {
            let e = t(22150);
            for (let r of x(e)) {
              j.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        const m = await Promise.allSettled(d);
        m.forEach((e) => {
          if (e.status === 'fulfilled') {
            for (let r of x(e.value)) {
              j.push(r);
            }
          } else {
            console.error(e.reason);
          }
        });
        if (!b.includes('@jupyterlab/application-extension')) {
          try {
            let e = t(89171);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/apputils-extension')) {
          try {
            let e = t(68562);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/cell-toolbar-extension')) {
          try {
            let e = t(17819);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/celltags-extension')) {
          try {
            let e = t(22552);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/codemirror-extension')) {
          try {
            let e = t(6094);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/completer-extension')) {
          try {
            let e = t(87961);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/console-extension')) {
          try {
            let e = t(53586);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/csvviewer-extension')) {
          try {
            let e = t(59285);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/debugger-extension')) {
          try {
            let e = t(90803);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/docmanager-extension')) {
          try {
            let e = t(38865);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/docprovider-extension')) {
          try {
            let e = t(96917);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/documentsearch-extension')) {
          try {
            let e = t(37357);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/extensionmanager-extension')) {
          try {
            let e = t(69354);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/filebrowser-extension')) {
          try {
            let e = t(72493);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/fileeditor-extension')) {
          try {
            let e = t(51749);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/help-extension')) {
          try {
            let e = t(79650);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/htmlviewer-extension')) {
          try {
            let e = t(82644);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/hub-extension')) {
          try {
            let e = t(58050);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/imageviewer-extension')) {
          try {
            let e = t(38042);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/inspector-extension')) {
          try {
            let e = t(62284);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/launcher-extension')) {
          try {
            let e = t(8870);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/logconsole-extension')) {
          try {
            let e = t(89687);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/mainmenu-extension')) {
          try {
            let e = t(44757);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/markdownviewer-extension')) {
          try {
            let e = t(82735);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/mathjax2-extension')) {
          try {
            let e = t(83432);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/notebook-extension')) {
          try {
            let e = t(65185);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/rendermime-extension')) {
          try {
            let e = t(49185);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/running-extension')) {
          try {
            let e = t(84661);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/settingeditor-extension')) {
          try {
            let e = t(98640);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/shortcuts-extension')) {
          try {
            let e = t(60785);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/statusbar-extension')) {
          try {
            let e = t(72329);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/terminal-extension')) {
          try {
            let e = t(27222);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/theme-dark-extension')) {
          try {
            let e = t(30522);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/theme-light-extension')) {
          try {
            let e = t(16129);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/toc-extension')) {
          try {
            let e = t(50303);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/tooltip-extension')) {
          try {
            let e = t(39765);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/translation-extension')) {
          try {
            let e = t(88436);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/ui-components-extension')) {
          try {
            let e = t(32184);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        if (!b.includes('@jupyterlab/vdom-extension')) {
          try {
            let e = t(28754);
            for (let r of x(e)) {
              p.push(r);
            }
          } catch (E) {
            console.error(E);
          }
        }
        const g = await Promise.allSettled(h);
        g.forEach((e) => {
          if (e.status === 'fulfilled') {
            for (let r of x(e.value)) {
              p.push(r);
            }
          } else {
            console.error(e.reason);
          }
        });
        (await Promise.allSettled(y))
          .filter(({ status: e }) => e === 'rejected')
          .forEach(({ reason: e }) => {
            console.error(e);
          });
        const w = new i({
          mimeExtensions: j,
          disabled: {
            matches: c,
            patterns: o.PageConfig.Extension.disabled.map(function (e) {
              return e.raw;
            }),
          },
          deferred: {
            matches: u,
            patterns: o.PageConfig.Extension.deferred.map(function (e) {
              return e.raw;
            }),
          },
        });
        p.forEach(function (e) {
          w.registerPluginModule(e);
        });
        w.start({ ignorePlugins: f });
        var C =
          (o.PageConfig.getOption('exposeAppInBrowser') || '').toLowerCase() === 'true';
        var P = (o.PageConfig.getOption('devMode') || '').toLowerCase() === 'true';
        if (C || P) {
          window.jupyterlab = w;
          window.jupyterapp = w;
        }
        if (e.toLowerCase() === 'true') {
          w.restored
            .then(function () {
              a(n);
            })
            .catch(function (e) {
              a([`RestoreError: ${e.message}`]);
            });
          window.setTimeout(function () {
            a(n);
          }, s);
        }
      }
    },
  },
]);
//# sourceMappingURL=7796.142687e98f4aedc65631.js.map?v=142687e98f4aedc65631
