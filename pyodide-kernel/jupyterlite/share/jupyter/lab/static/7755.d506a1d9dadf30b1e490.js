(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [7755],
  {
    55292: (e, t, n) => {
      (function (e) {
        if (true) e(n(4631));
        else {
        }
      })(function (e) {
        function t(t, n, i) {
          var r = t.getWrapperElement();
          var o;
          o = r.appendChild(document.createElement('div'));
          if (i) o.className = 'CodeMirror-dialog CodeMirror-dialog-bottom';
          else o.className = 'CodeMirror-dialog CodeMirror-dialog-top';
          if (typeof n == 'string') {
            o.innerHTML = n;
          } else {
            o.appendChild(n);
          }
          e.addClass(r, 'dialog-opened');
          return o;
        }
        function n(e, t) {
          if (e.state.currentNotificationClose) e.state.currentNotificationClose();
          e.state.currentNotificationClose = t;
        }
        e.defineExtension('openDialog', function (i, r, o) {
          if (!o) o = {};
          n(this, null);
          var l = t(this, i, o.bottom);
          var a = false,
            s = this;
          function f(t) {
            if (typeof t == 'string') {
              c.value = t;
            } else {
              if (a) return;
              a = true;
              e.rmClass(l.parentNode, 'dialog-opened');
              l.parentNode.removeChild(l);
              s.focus();
              if (o.onClose) o.onClose(l);
            }
          }
          var c = l.getElementsByTagName('input')[0],
            u;
          if (c) {
            c.focus();
            if (o.value) {
              c.value = o.value;
              if (o.selectValueOnOpen !== false) {
                c.select();
              }
            }
            if (o.onInput)
              e.on(c, 'input', function (e) {
                o.onInput(e, c.value, f);
              });
            if (o.onKeyUp)
              e.on(c, 'keyup', function (e) {
                o.onKeyUp(e, c.value, f);
              });
            e.on(c, 'keydown', function (t) {
              if (o && o.onKeyDown && o.onKeyDown(t, c.value, f)) {
                return;
              }
              if (t.keyCode == 27 || (o.closeOnEnter !== false && t.keyCode == 13)) {
                c.blur();
                e.e_stop(t);
                f();
              }
              if (t.keyCode == 13) r(c.value, t);
            });
            if (o.closeOnBlur !== false)
              e.on(l, 'focusout', function (e) {
                if (e.relatedTarget !== null) f();
              });
          } else if ((u = l.getElementsByTagName('button')[0])) {
            e.on(u, 'click', function () {
              f();
              s.focus();
            });
            if (o.closeOnBlur !== false) e.on(u, 'blur', f);
            u.focus();
          }
          return f;
        });
        e.defineExtension('openConfirm', function (i, r, o) {
          n(this, null);
          var l = t(this, i, o && o.bottom);
          var a = l.getElementsByTagName('button');
          var s = false,
            f = this,
            c = 1;
          function u() {
            if (s) return;
            s = true;
            e.rmClass(l.parentNode, 'dialog-opened');
            l.parentNode.removeChild(l);
            f.focus();
          }
          a[0].focus();
          for (var h = 0; h < a.length; ++h) {
            var g = a[h];
            (function (t) {
              e.on(g, 'click', function (n) {
                e.e_preventDefault(n);
                u();
                if (t) t(f);
              });
            })(r[h]);
            e.on(g, 'blur', function () {
              --c;
              setTimeout(function () {
                if (c <= 0) u();
              }, 200);
            });
            e.on(g, 'focus', function () {
              ++c;
            });
          }
        });
        e.defineExtension('openNotification', function (i, r) {
          n(this, f);
          var o = t(this, i, r && r.bottom);
          var l = false,
            a;
          var s = r && typeof r.duration !== 'undefined' ? r.duration : 5e3;
          function f() {
            if (l) return;
            l = true;
            clearTimeout(a);
            e.rmClass(o.parentNode, 'dialog-opened');
            o.parentNode.removeChild(o);
          }
          e.on(o, 'click', function (t) {
            e.e_preventDefault(t);
            f();
          });
          if (s) a = setTimeout(f, s);
          return f;
        });
      });
    },
    4328: (e, t, n) => {
      (function (e) {
        if (true) e(n(4631));
        else {
        }
      })(function (e) {
        var t =
          /MSIE \d/.test(navigator.userAgent) &&
          (document.documentMode == null || document.documentMode < 8);
        var n = e.Pos;
        var i = {
          '(': ')>',
          ')': '(<',
          '[': ']>',
          ']': '[<',
          '{': '}>',
          '}': '{<',
          '<': '>>',
          '>': '<<',
        };
        function r(e) {
          return (e && e.bracketRegex) || /[(){}[\]]/;
        }
        function o(e, t, o) {
          var a = e.getLineHandle(t.line),
            s = t.ch - 1;
          var f = o && o.afterCursor;
          if (f == null)
            f = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className);
          var c = r(o);
          var u =
            (!f && s >= 0 && c.test(a.text.charAt(s)) && i[a.text.charAt(s)]) ||
            (c.test(a.text.charAt(s + 1)) && i[a.text.charAt(++s)]);
          if (!u) return null;
          var h = u.charAt(1) == '>' ? 1 : -1;
          if (o && o.strict && h > 0 != (s == t.ch)) return null;
          var g = e.getTokenTypeAt(n(t.line, s + 1));
          var m = l(e, n(t.line, s + (h > 0 ? 1 : 0)), h, g, o);
          if (m == null) return null;
          return {
            from: n(t.line, s),
            to: m && m.pos,
            match: m && m.ch == u.charAt(0),
            forward: h > 0,
          };
        }
        function l(e, t, o, l, a) {
          var s = (a && a.maxScanLineLength) || 1e4;
          var f = (a && a.maxScanLines) || 1e3;
          var c = [];
          var u = r(a);
          var h =
            o > 0
              ? Math.min(t.line + f, e.lastLine() + 1)
              : Math.max(e.firstLine() - 1, t.line - f);
          for (var g = t.line; g != h; g += o) {
            var m = e.getLine(g);
            if (!m) continue;
            var v = o > 0 ? 0 : m.length - 1,
              d = o > 0 ? m.length : -1;
            if (m.length > s) continue;
            if (g == t.line) v = t.ch - (o < 0 ? 1 : 0);
            for (; v != d; v += o) {
              var p = m.charAt(v);
              if (
                u.test(p) &&
                (l === undefined || (e.getTokenTypeAt(n(g, v + 1)) || '') == (l || ''))
              ) {
                var x = i[p];
                if (x && (x.charAt(1) == '>') == o > 0) c.push(p);
                else if (!c.length) return { pos: n(g, v), ch: p };
                else c.pop();
              }
            }
          }
          return g - o == (o > 0 ? e.lastLine() : e.firstLine()) ? false : null;
        }
        function a(e, i, r) {
          var l = e.state.matchBrackets.maxHighlightLineLength || 1e3,
            a = r && r.highlightNonMatching;
          var s = [],
            f = e.listSelections();
          for (var c = 0; c < f.length; c++) {
            var u = f[c].empty() && o(e, f[c].head, r);
            if (u && (u.match || a !== false) && e.getLine(u.from.line).length <= l) {
              var h = u.match
                ? 'CodeMirror-matchingbracket'
                : 'CodeMirror-nonmatchingbracket';
              s.push(
                e.markText(u.from, n(u.from.line, u.from.ch + 1), { className: h })
              );
              if (u.to && e.getLine(u.to.line).length <= l)
                s.push(e.markText(u.to, n(u.to.line, u.to.ch + 1), { className: h }));
            }
          }
          if (s.length) {
            if (t && e.state.focused) e.focus();
            var g = function () {
              e.operation(function () {
                for (var e = 0; e < s.length; e++) s[e].clear();
              });
            };
            if (i) setTimeout(g, 800);
            else return g;
          }
        }
        function s(e) {
          e.operation(function () {
            if (e.state.matchBrackets.currentlyHighlighted) {
              e.state.matchBrackets.currentlyHighlighted();
              e.state.matchBrackets.currentlyHighlighted = null;
            }
            e.state.matchBrackets.currentlyHighlighted = a(
              e,
              false,
              e.state.matchBrackets
            );
          });
        }
        function f(e) {
          if (e.state.matchBrackets && e.state.matchBrackets.currentlyHighlighted) {
            e.state.matchBrackets.currentlyHighlighted();
            e.state.matchBrackets.currentlyHighlighted = null;
          }
        }
        e.defineOption('matchBrackets', false, function (t, n, i) {
          if (i && i != e.Init) {
            t.off('cursorActivity', s);
            t.off('focus', s);
            t.off('blur', f);
            f(t);
          }
          if (n) {
            t.state.matchBrackets = typeof n == 'object' ? n : {};
            t.on('cursorActivity', s);
            t.on('focus', s);
            t.on('blur', f);
          }
        });
        e.defineExtension('matchBrackets', function () {
          a(this, true);
        });
        e.defineExtension('findMatchingBracket', function (e, t, n) {
          if (n || typeof t == 'boolean') {
            if (!n) {
              t = t ? { strict: true } : null;
            } else {
              n.strict = t;
              t = n;
            }
          }
          return o(this, e, t);
        });
        e.defineExtension('scanForBracket', function (e, t, n, i) {
          return l(this, e, t, n, i);
        });
      });
    },
    32095: (e, t, n) => {
      (function (e) {
        if (true) e(n(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = e.Pos;
        function n(e) {
          var t = e.flags;
          return t != null
            ? t
            : (e.ignoreCase ? 'i' : '') +
                (e.global ? 'g' : '') +
                (e.multiline ? 'm' : '');
        }
        function i(e, t) {
          var i = n(e),
            r = i;
          for (var o = 0; o < t.length; o++)
            if (r.indexOf(t.charAt(o)) == -1) r += t.charAt(o);
          return i == r ? e : new RegExp(e.source, r);
        }
        function r(e) {
          return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
        }
        function o(e, n, r) {
          n = i(n, 'g');
          for (var o = r.line, l = r.ch, a = e.lastLine(); o <= a; o++, l = 0) {
            n.lastIndex = l;
            var s = e.getLine(o),
              f = n.exec(s);
            if (f)
              return { from: t(o, f.index), to: t(o, f.index + f[0].length), match: f };
          }
        }
        function l(e, n, l) {
          if (!r(n)) return o(e, n, l);
          n = i(n, 'gm');
          var a,
            s = 1;
          for (var f = l.line, c = e.lastLine(); f <= c; ) {
            for (var u = 0; u < s; u++) {
              if (f > c) break;
              var h = e.getLine(f++);
              a = a == null ? h : a + '\n' + h;
            }
            s = s * 2;
            n.lastIndex = l.ch;
            var g = n.exec(a);
            if (g) {
              var m = a.slice(0, g.index).split('\n'),
                v = g[0].split('\n');
              var d = l.line + m.length - 1,
                p = m[m.length - 1].length;
              return {
                from: t(d, p),
                to: t(
                  d + v.length - 1,
                  v.length == 1 ? p + v[0].length : v[v.length - 1].length
                ),
                match: g,
              };
            }
          }
        }
        function a(e, t, n) {
          var i,
            r = 0;
          while (r <= e.length) {
            t.lastIndex = r;
            var o = t.exec(e);
            if (!o) break;
            var l = o.index + o[0].length;
            if (l > e.length - n) break;
            if (!i || l > i.index + i[0].length) i = o;
            r = o.index + 1;
          }
          return i;
        }
        function s(e, n, r) {
          n = i(n, 'g');
          for (var o = r.line, l = r.ch, s = e.firstLine(); o >= s; o--, l = -1) {
            var f = e.getLine(o);
            var c = a(f, n, l < 0 ? 0 : f.length - l);
            if (c)
              return { from: t(o, c.index), to: t(o, c.index + c[0].length), match: c };
          }
        }
        function f(e, n, o) {
          if (!r(n)) return s(e, n, o);
          n = i(n, 'gm');
          var l,
            f = 1,
            c = e.getLine(o.line).length - o.ch;
          for (var u = o.line, h = e.firstLine(); u >= h; ) {
            for (var g = 0; g < f && u >= h; g++) {
              var m = e.getLine(u--);
              l = l == null ? m : m + '\n' + l;
            }
            f *= 2;
            var v = a(l, n, c);
            if (v) {
              var d = l.slice(0, v.index).split('\n'),
                p = v[0].split('\n');
              var x = u + d.length,
                L = d[d.length - 1].length;
              return {
                from: t(x, L),
                to: t(
                  x + p.length - 1,
                  p.length == 1 ? L + p[0].length : p[p.length - 1].length
                ),
                match: v,
              };
            }
          }
        }
        var c, u;
        if (String.prototype.normalize) {
          c = function (e) {
            return e.normalize('NFD').toLowerCase();
          };
          u = function (e) {
            return e.normalize('NFD');
          };
        } else {
          c = function (e) {
            return e.toLowerCase();
          };
          u = function (e) {
            return e;
          };
        }
        function h(e, t, n, i) {
          if (e.length == t.length) return n;
          for (var r = 0, o = n + Math.max(0, e.length - t.length); ; ) {
            if (r == o) return r;
            var l = (r + o) >> 1;
            var a = i(e.slice(0, l)).length;
            if (a == n) return l;
            else if (a > n) o = l;
            else r = l + 1;
          }
        }
        function g(e, n, i, r) {
          if (!n.length) return null;
          var o = r ? c : u;
          var l = o(n).split(/\r|\n\r?/);
          e: for (
            var a = i.line, s = i.ch, f = e.lastLine() + 1 - l.length;
            a <= f;
            a++, s = 0
          ) {
            var g = e.getLine(a).slice(s),
              m = o(g);
            if (l.length == 1) {
              var v = m.indexOf(l[0]);
              if (v == -1) continue e;
              var i = h(g, m, v, o) + s;
              return {
                from: t(a, h(g, m, v, o) + s),
                to: t(a, h(g, m, v + l[0].length, o) + s),
              };
            } else {
              var d = m.length - l[0].length;
              if (m.slice(d) != l[0]) continue e;
              for (var p = 1; p < l.length - 1; p++)
                if (o(e.getLine(a + p)) != l[p]) continue e;
              var x = e.getLine(a + l.length - 1),
                L = o(x),
                k = l[l.length - 1];
              if (L.slice(0, k.length) != k) continue e;
              return {
                from: t(a, h(g, m, d, o) + s),
                to: t(a + l.length - 1, h(x, L, k.length, o)),
              };
            }
          }
        }
        function m(e, n, i, r) {
          if (!n.length) return null;
          var o = r ? c : u;
          var l = o(n).split(/\r|\n\r?/);
          e: for (
            var a = i.line, s = i.ch, f = e.firstLine() - 1 + l.length;
            a >= f;
            a--, s = -1
          ) {
            var g = e.getLine(a);
            if (s > -1) g = g.slice(0, s);
            var m = o(g);
            if (l.length == 1) {
              var v = m.lastIndexOf(l[0]);
              if (v == -1) continue e;
              return {
                from: t(a, h(g, m, v, o)),
                to: t(a, h(g, m, v + l[0].length, o)),
              };
            } else {
              var d = l[l.length - 1];
              if (m.slice(0, d.length) != d) continue e;
              for (var p = 1, i = a - l.length + 1; p < l.length - 1; p++)
                if (o(e.getLine(i + p)) != l[p]) continue e;
              var x = e.getLine(a + 1 - l.length),
                L = o(x);
              if (L.slice(L.length - l[0].length) != l[0]) continue e;
              return {
                from: t(a + 1 - l.length, h(x, L, x.length - l[0].length, o)),
                to: t(a, h(g, m, d.length, o)),
              };
            }
          }
        }
        function v(e, n, r, a) {
          this.atOccurrence = false;
          this.doc = e;
          r = r ? e.clipPos(r) : t(0, 0);
          this.pos = { from: r, to: r };
          var c;
          if (typeof a == 'object') {
            c = a.caseFold;
          } else {
            c = a;
            a = null;
          }
          if (typeof n == 'string') {
            if (c == null) c = false;
            this.matches = function (t, i) {
              return (t ? m : g)(e, n, i, c);
            };
          } else {
            n = i(n, 'gm');
            if (!a || a.multiline !== false)
              this.matches = function (t, i) {
                return (t ? f : l)(e, n, i);
              };
            else
              this.matches = function (t, i) {
                return (t ? s : o)(e, n, i);
              };
          }
        }
        v.prototype = {
          findNext: function () {
            return this.find(false);
          },
          findPrevious: function () {
            return this.find(true);
          },
          find: function (n) {
            var i = this.matches(n, this.doc.clipPos(n ? this.pos.from : this.pos.to));
            while (i && e.cmpPos(i.from, i.to) == 0) {
              if (n) {
                if (i.from.ch) i.from = t(i.from.line, i.from.ch - 1);
                else if (i.from.line == this.doc.firstLine()) i = null;
                else i = this.matches(n, this.doc.clipPos(t(i.from.line - 1)));
              } else {
                if (i.to.ch < this.doc.getLine(i.to.line).length)
                  i.to = t(i.to.line, i.to.ch + 1);
                else if (i.to.line == this.doc.lastLine()) i = null;
                else i = this.matches(n, t(i.to.line + 1, 0));
              }
            }
            if (i) {
              this.pos = i;
              this.atOccurrence = true;
              return this.pos.match || true;
            } else {
              var r = t(n ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
              this.pos = { from: r, to: r };
              return (this.atOccurrence = false);
            }
          },
          from: function () {
            if (this.atOccurrence) return this.pos.from;
          },
          to: function () {
            if (this.atOccurrence) return this.pos.to;
          },
          replace: function (n, i) {
            if (!this.atOccurrence) return;
            var r = e.splitLines(n);
            this.doc.replaceRange(r, this.pos.from, this.pos.to, i);
            this.pos.to = t(
              this.pos.from.line + r.length - 1,
              r[r.length - 1].length + (r.length == 1 ? this.pos.from.ch : 0)
            );
          },
        };
        e.defineExtension('getSearchCursor', function (e, t, n) {
          return new v(this.doc, e, t, n);
        });
        e.defineDocExtension('getSearchCursor', function (e, t, n) {
          return new v(this, e, t, n);
        });
        e.defineExtension('selectMatches', function (t, n) {
          var i = [];
          var r = this.getSearchCursor(t, this.getCursor('from'), n);
          while (r.findNext()) {
            if (e.cmpPos(r.to(), this.getCursor('to')) > 0) break;
            i.push({ anchor: r.from(), head: r.to() });
          }
          if (i.length) this.setSelections(i, 0);
        });
      });
    },
  },
]);
//# sourceMappingURL=7755.d506a1d9dadf30b1e490.js.map?v=d506a1d9dadf30b1e490
