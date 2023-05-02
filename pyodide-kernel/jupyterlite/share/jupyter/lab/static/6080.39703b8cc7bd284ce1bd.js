(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6080, 3029],
  {
    14504: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = {};
        var r = /[^\s\u00a0]/;
        var n = e.Pos,
          i = e.cmpPos;
        function a(e) {
          var t = e.search(r);
          return t == -1 ? 0 : t;
        }
        e.commands.toggleComment = function (e) {
          e.toggleComment();
        };
        e.defineExtension('toggleComment', function (e) {
          if (!e) e = t;
          var r = this;
          var i = Infinity,
            a = this.listSelections(),
            o = null;
          for (var l = a.length - 1; l >= 0; l--) {
            var s = a[l].from(),
              c = a[l].to();
            if (s.line >= i) continue;
            if (c.line >= i) c = n(i, 0);
            i = s.line;
            if (o == null) {
              if (r.uncomment(s, c, e)) o = 'un';
              else {
                r.lineComment(s, c, e);
                o = 'line';
              }
            } else if (o == 'un') {
              r.uncomment(s, c, e);
            } else {
              r.lineComment(s, c, e);
            }
          }
        });
        function o(e, t, r) {
          return (
            /\bstring\b/.test(e.getTokenTypeAt(n(t.line, 0))) && !/^[\'\"\`]/.test(r)
          );
        }
        function l(e, t) {
          var r = e.getMode();
          return r.useInnerComments === false || !r.innerMode ? r : e.getModeAt(t);
        }
        e.defineExtension('lineComment', function (e, i, s) {
          if (!s) s = t;
          var c = this,
            u = l(c, e);
          var f = c.getLine(e.line);
          if (f == null || o(c, e, f)) return;
          var d = s.lineComment || u.lineComment;
          if (!d) {
            if (s.blockCommentStart || u.blockCommentStart) {
              s.fullLines = true;
              c.blockComment(e, i, s);
            }
            return;
          }
          var m = Math.min(
            i.ch != 0 || i.line == e.line ? i.line + 1 : i.line,
            c.lastLine() + 1
          );
          var p = s.padding == null ? ' ' : s.padding;
          var h = s.commentBlankLines || e.line == i.line;
          c.operation(function () {
            if (s.indent) {
              var t = null;
              for (var i = e.line; i < m; ++i) {
                var o = c.getLine(i);
                var l = o.slice(0, a(o));
                if (t == null || t.length > l.length) {
                  t = l;
                }
              }
              for (var i = e.line; i < m; ++i) {
                var o = c.getLine(i),
                  u = t.length;
                if (!h && !r.test(o)) continue;
                if (o.slice(0, u) != t) u = a(o);
                c.replaceRange(t + d + p, n(i, 0), n(i, u));
              }
            } else {
              for (var i = e.line; i < m; ++i) {
                if (h || r.test(c.getLine(i))) c.replaceRange(d + p, n(i, 0));
              }
            }
          });
        });
        e.defineExtension('blockComment', function (e, a, o) {
          if (!o) o = t;
          var s = this,
            c = l(s, e);
          var u = o.blockCommentStart || c.blockCommentStart;
          var f = o.blockCommentEnd || c.blockCommentEnd;
          if (!u || !f) {
            if ((o.lineComment || c.lineComment) && o.fullLines != false)
              s.lineComment(e, a, o);
            return;
          }
          if (/\bcomment\b/.test(s.getTokenTypeAt(n(e.line, 0)))) return;
          var d = Math.min(a.line, s.lastLine());
          if (d != e.line && a.ch == 0 && r.test(s.getLine(d))) --d;
          var m = o.padding == null ? ' ' : o.padding;
          if (e.line > d) return;
          s.operation(function () {
            if (o.fullLines != false) {
              var t = r.test(s.getLine(d));
              s.replaceRange(m + f, n(d));
              s.replaceRange(u + m, n(e.line, 0));
              var l = o.blockCommentLead || c.blockCommentLead;
              if (l != null)
                for (var p = e.line + 1; p <= d; ++p)
                  if (p != d || t) s.replaceRange(l + m, n(p, 0));
            } else {
              var h = i(s.getCursor('to'), a) == 0,
                g = !s.somethingSelected();
              s.replaceRange(f, a);
              if (h) s.setSelection(g ? a : s.getCursor('from'), a);
              s.replaceRange(u, e);
            }
          });
        });
        e.defineExtension('uncomment', function (e, i, a) {
          if (!a) a = t;
          var o = this,
            s = l(o, e);
          var c = Math.min(
              i.ch != 0 || i.line == e.line ? i.line : i.line - 1,
              o.lastLine()
            ),
            u = Math.min(e.line, c);
          var f = a.lineComment || s.lineComment,
            d = [];
          var m = a.padding == null ? ' ' : a.padding,
            p;
          e: {
            if (!f) break e;
            for (var h = u; h <= c; ++h) {
              var g = o.getLine(h);
              var v = g.indexOf(f);
              if (v > -1 && !/comment/.test(o.getTokenTypeAt(n(h, v + 1)))) v = -1;
              if (v == -1 && r.test(g)) break e;
              if (v > -1 && r.test(g.slice(0, v))) break e;
              d.push(g);
            }
            o.operation(function () {
              for (var e = u; e <= c; ++e) {
                var t = d[e - u];
                var r = t.indexOf(f),
                  i = r + f.length;
                if (r < 0) continue;
                if (t.slice(i, i + m.length) == m) i += m.length;
                p = true;
                o.replaceRange('', n(e, r), n(e, i));
              }
            });
            if (p) return true;
          }
          var b = a.blockCommentStart || s.blockCommentStart;
          var x = a.blockCommentEnd || s.blockCommentEnd;
          if (!b || !x) return false;
          var k = a.blockCommentLead || s.blockCommentLead;
          var y = o.getLine(u),
            w = y.indexOf(b);
          if (w == -1) return false;
          var C = c == u ? y : o.getLine(c);
          var _ = C.indexOf(x, c == u ? w + b.length : 0);
          var S = n(u, w + 1),
            L = n(c, _ + 1);
          if (
            _ == -1 ||
            !/comment/.test(o.getTokenTypeAt(S)) ||
            !/comment/.test(o.getTokenTypeAt(L)) ||
            o.getRange(S, L, '\n').indexOf(x) > -1
          )
            return false;
          var F = y.lastIndexOf(b, e.ch);
          var A = F == -1 ? -1 : y.slice(0, e.ch).indexOf(x, F + b.length);
          if (F != -1 && A != -1 && A + x.length != e.ch) return false;
          A = C.indexOf(x, i.ch);
          var T = C.slice(i.ch).lastIndexOf(b, A - i.ch);
          F = A == -1 || T == -1 ? -1 : i.ch + T;
          if (A != -1 && F != -1 && F != i.ch) return false;
          o.operation(function () {
            o.replaceRange(
              '',
              n(c, _ - (m && C.slice(_ - m.length, _) == m ? m.length : 0)),
              n(c, _ + x.length)
            );
            var e = w + b.length;
            if (m && y.slice(e, e + m.length) == m) e += m.length;
            o.replaceRange('', n(u, w), n(u, e));
            if (k)
              for (var t = u + 1; t <= c; ++t) {
                var i = o.getLine(t),
                  a = i.indexOf(k);
                if (a == -1 || r.test(i.slice(0, a))) continue;
                var l = a + k.length;
                if (m && i.slice(l, l + m.length) == m) l += m.length;
                o.replaceRange('', n(t, a), n(t, l));
              }
          });
          return true;
        });
      });
    },
    80511: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineOption('rulers', false, function (e, r) {
          if (e.state.rulerDiv) {
            e.state.rulerDiv.parentElement.removeChild(e.state.rulerDiv);
            e.state.rulerDiv = null;
            e.off('refresh', t);
          }
          if (r && r.length) {
            e.state.rulerDiv = e.display.lineSpace.parentElement.insertBefore(
              document.createElement('div'),
              e.display.lineSpace
            );
            e.state.rulerDiv.className = 'CodeMirror-rulers';
            t(e);
            e.on('refresh', t);
          }
        });
        function t(t) {
          t.state.rulerDiv.textContent = '';
          var r = t.getOption('rulers');
          var n = t.defaultCharWidth();
          var i = t.charCoords(e.Pos(t.firstLine(), 0), 'div').left;
          t.state.rulerDiv.style.minHeight =
            t.display.scroller.offsetHeight + 30 + 'px';
          for (var a = 0; a < r.length; a++) {
            var o = document.createElement('div');
            o.className = 'CodeMirror-ruler';
            var l,
              s = r[a];
            if (typeof s == 'number') {
              l = s;
            } else {
              l = s.column;
              if (s.className) o.className += ' ' + s.className;
              if (s.color) o.style.borderColor = s.color;
              if (s.lineStyle) o.style.borderLeftStyle = s.lineStyle;
              if (s.width) o.style.borderLeftWidth = s.width;
            }
            o.style.left = i + l * n + 'px';
            t.state.rulerDiv.appendChild(o);
          }
        }
      });
    },
    82801: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        var t = {
          pairs: '()[]{}\'\'""',
          closeBefore: ')]}\'":;>',
          triples: '',
          explode: '[]{}',
        };
        var r = e.Pos;
        e.defineOption('autoCloseBrackets', false, function (t, r, o) {
          if (o && o != e.Init) {
            t.removeKeyMap(i);
            t.state.closeBrackets = null;
          }
          if (r) {
            a(n(r, 'pairs'));
            t.state.closeBrackets = r;
            t.addKeyMap(i);
          }
        });
        function n(e, r) {
          if (r == 'pairs' && typeof e == 'string') return e;
          if (typeof e == 'object' && e[r] != null) return e[r];
          return t[r];
        }
        var i = { Backspace: s, Enter: c };
        function a(e) {
          for (var t = 0; t < e.length; t++) {
            var r = e.charAt(t),
              n = "'" + r + "'";
            if (!i[n]) i[n] = o(r);
          }
        }
        a(t.pairs + '`');
        function o(e) {
          return function (t) {
            return d(t, e);
          };
        }
        function l(e) {
          var t = e.state.closeBrackets;
          if (!t || t.override) return t;
          var r = e.getModeAt(e.getCursor());
          return r.closeBrackets || t;
        }
        function s(t) {
          var i = l(t);
          if (!i || t.getOption('disableInput')) return e.Pass;
          var a = n(i, 'pairs');
          var o = t.listSelections();
          for (var s = 0; s < o.length; s++) {
            if (!o[s].empty()) return e.Pass;
            var c = m(t, o[s].head);
            if (!c || a.indexOf(c) % 2 != 0) return e.Pass;
          }
          for (var s = o.length - 1; s >= 0; s--) {
            var u = o[s].head;
            t.replaceRange('', r(u.line, u.ch - 1), r(u.line, u.ch + 1), '+delete');
          }
        }
        function c(t) {
          var r = l(t);
          var i = r && n(r, 'explode');
          if (!i || t.getOption('disableInput')) return e.Pass;
          var a = t.listSelections();
          for (var o = 0; o < a.length; o++) {
            if (!a[o].empty()) return e.Pass;
            var s = m(t, a[o].head);
            if (!s || i.indexOf(s) % 2 != 0) return e.Pass;
          }
          t.operation(function () {
            var e = t.lineSeparator() || '\n';
            t.replaceSelection(e + e, null);
            u(t, -1);
            a = t.listSelections();
            for (var r = 0; r < a.length; r++) {
              var n = a[r].head.line;
              t.indentLine(n, null, true);
              t.indentLine(n + 1, null, true);
            }
          });
        }
        function u(e, t) {
          var r = [],
            n = e.listSelections(),
            i = 0;
          for (var a = 0; a < n.length; a++) {
            var o = n[a];
            if (o.head == e.getCursor()) i = a;
            var l =
              o.head.ch || t > 0
                ? { line: o.head.line, ch: o.head.ch + t }
                : { line: o.head.line - 1 };
            r.push({ anchor: l, head: l });
          }
          e.setSelections(r, i);
        }
        function f(t) {
          var n = e.cmpPos(t.anchor, t.head) > 0;
          return {
            anchor: new r(t.anchor.line, t.anchor.ch + (n ? -1 : 1)),
            head: new r(t.head.line, t.head.ch + (n ? 1 : -1)),
          };
        }
        function d(t, i) {
          var a = l(t);
          if (!a || t.getOption('disableInput')) return e.Pass;
          var o = n(a, 'pairs');
          var s = o.indexOf(i);
          if (s == -1) return e.Pass;
          var c = n(a, 'closeBefore');
          var d = n(a, 'triples');
          var m = o.charAt(s + 1) == i;
          var h = t.listSelections();
          var g = s % 2 == 0;
          var v;
          for (var b = 0; b < h.length; b++) {
            var x = h[b],
              k = x.head,
              y;
            var w = t.getRange(k, r(k.line, k.ch + 1));
            if (g && !x.empty()) {
              y = 'surround';
            } else if ((m || !g) && w == i) {
              if (m && p(t, k)) y = 'both';
              else if (
                d.indexOf(i) >= 0 &&
                t.getRange(k, r(k.line, k.ch + 3)) == i + i + i
              )
                y = 'skipThree';
              else y = 'skip';
            } else if (
              m &&
              k.ch > 1 &&
              d.indexOf(i) >= 0 &&
              t.getRange(r(k.line, k.ch - 2), k) == i + i
            ) {
              if (k.ch > 2 && /\bstring/.test(t.getTokenTypeAt(r(k.line, k.ch - 2))))
                return e.Pass;
              y = 'addFour';
            } else if (m) {
              var C = k.ch == 0 ? ' ' : t.getRange(r(k.line, k.ch - 1), k);
              if (!e.isWordChar(w) && C != i && !e.isWordChar(C)) y = 'both';
              else return e.Pass;
            } else if (g && (w.length === 0 || /\s/.test(w) || c.indexOf(w) > -1)) {
              y = 'both';
            } else {
              return e.Pass;
            }
            if (!v) v = y;
            else if (v != y) return e.Pass;
          }
          var _ = s % 2 ? o.charAt(s - 1) : i;
          var S = s % 2 ? i : o.charAt(s + 1);
          t.operation(function () {
            if (v == 'skip') {
              u(t, 1);
            } else if (v == 'skipThree') {
              u(t, 3);
            } else if (v == 'surround') {
              var e = t.getSelections();
              for (var r = 0; r < e.length; r++) e[r] = _ + e[r] + S;
              t.replaceSelections(e, 'around');
              e = t.listSelections().slice();
              for (var r = 0; r < e.length; r++) e[r] = f(e[r]);
              t.setSelections(e);
            } else if (v == 'both') {
              t.replaceSelection(_ + S, null);
              t.triggerElectric(_ + S);
              u(t, -1);
            } else if (v == 'addFour') {
              t.replaceSelection(_ + _ + _ + _, 'before');
              u(t, 1);
            }
          });
        }
        function m(e, t) {
          var n = e.getRange(r(t.line, t.ch - 1), r(t.line, t.ch + 1));
          return n.length == 2 ? n : null;
        }
        function p(e, t) {
          var n = e.getTokenAt(r(t.line, t.ch + 1));
          return (
            /\bstring/.test(n.type) &&
            n.start == t.ch &&
            (t.ch == 0 || !/\bstring/.test(e.getTokenTypeAt(t)))
          );
        }
      });
    },
    68216: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        e.defineOption('showTrailingSpace', false, function (t, r, n) {
          if (n == e.Init) n = false;
          if (n && !r) t.removeOverlay('trailingspace');
          else if (!n && r)
            t.addOverlay({
              token: function (e) {
                for (
                  var t = e.string.length, r = t;
                  r && /\s/.test(e.string.charAt(r - 1));
                  --r
                ) {}
                if (r > e.pos) {
                  e.pos = r;
                  return null;
                }
                e.pos = t;
                return 'trailingspace';
              },
              name: 'trailingspace',
            });
        });
      });
    },
    35688: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.registerHelper('fold', 'brace', function (t, r) {
          var n = r.line,
            i = t.getLine(n);
          var a;
          function o(o) {
            for (var l = r.ch, s = 0; ; ) {
              var c = l <= 0 ? -1 : i.lastIndexOf(o, l - 1);
              if (c == -1) {
                if (s == 1) break;
                s = 1;
                l = i.length;
                continue;
              }
              if (s == 1 && c < r.ch) break;
              a = t.getTokenTypeAt(e.Pos(n, c + 1));
              if (!/^(comment|string)/.test(a)) return c + 1;
              l = c - 1;
            }
          }
          var l = o('{'),
            s = o('[');
          var c, u, f;
          if (l != null && (s == null || s > l)) {
            f = l;
            c = '{';
            u = '}';
          } else if (s != null) {
            f = s;
            c = '[';
            u = ']';
          } else {
            return;
          }
          var d = 1,
            m = t.lastLine(),
            p,
            h;
          e: for (var g = n; g <= m; ++g) {
            var v = t.getLine(g),
              b = g == n ? f : 0;
            for (;;) {
              var x = v.indexOf(c, b),
                k = v.indexOf(u, b);
              if (x < 0) x = v.length;
              if (k < 0) k = v.length;
              b = Math.min(x, k);
              if (b == v.length) break;
              if (t.getTokenTypeAt(e.Pos(g, b + 1)) == a) {
                if (b == x) ++d;
                else if (!--d) {
                  p = g;
                  h = b;
                  break e;
                }
              }
              ++b;
            }
          }
          if (p == null || n == p) return;
          return { from: e.Pos(n, f), to: e.Pos(p, h) };
        });
        e.registerHelper('fold', 'import', function (t, r) {
          function n(r) {
            if (r < t.firstLine() || r > t.lastLine()) return null;
            var n = t.getTokenAt(e.Pos(r, 1));
            if (!/\S/.test(n.string)) n = t.getTokenAt(e.Pos(r, n.end + 1));
            if (n.type != 'keyword' || n.string != 'import') return null;
            for (var i = r, a = Math.min(t.lastLine(), r + 10); i <= a; ++i) {
              var o = t.getLine(i),
                l = o.indexOf(';');
              if (l != -1) return { startCh: n.end, end: e.Pos(i, l) };
            }
          }
          var i = r.line,
            a = n(i),
            o;
          if (!a || n(i - 1) || ((o = n(i - 2)) && o.end.line == i - 1)) return null;
          for (var l = a.end; ; ) {
            var s = n(l.line + 1);
            if (s == null) break;
            l = s.end;
          }
          return { from: t.clipPos(e.Pos(i, a.startCh + 1)), to: l };
        });
        e.registerHelper('fold', 'include', function (t, r) {
          function n(r) {
            if (r < t.firstLine() || r > t.lastLine()) return null;
            var n = t.getTokenAt(e.Pos(r, 1));
            if (!/\S/.test(n.string)) n = t.getTokenAt(e.Pos(r, n.end + 1));
            if (n.type == 'meta' && n.string.slice(0, 8) == '#include')
              return n.start + 8;
          }
          var i = r.line,
            a = n(i);
          if (a == null || n(i - 1) != null) return null;
          for (var o = i; ; ) {
            var l = n(o + 1);
            if (l == null) break;
            ++o;
          }
          return { from: e.Pos(i, a + 1), to: t.clipPos(e.Pos(o)) };
        });
      });
    },
    9898: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.registerGlobalHelper(
          'fold',
          'comment',
          function (e) {
            return e.blockCommentStart && e.blockCommentEnd;
          },
          function (t, r) {
            var n = t.getModeAt(r),
              i = n.blockCommentStart,
              a = n.blockCommentEnd;
            if (!i || !a) return;
            var o = r.line,
              l = t.getLine(o);
            var s;
            for (var c = r.ch, u = 0; ; ) {
              var f = c <= 0 ? -1 : l.lastIndexOf(i, c - 1);
              if (f == -1) {
                if (u == 1) return;
                u = 1;
                c = l.length;
                continue;
              }
              if (u == 1 && f < r.ch) return;
              if (
                /comment/.test(t.getTokenTypeAt(e.Pos(o, f + 1))) &&
                (f == 0 ||
                  l.slice(f - a.length, f) == a ||
                  !/comment/.test(t.getTokenTypeAt(e.Pos(o, f))))
              ) {
                s = f + i.length;
                break;
              }
              c = f - 1;
            }
            var d = 1,
              m = t.lastLine(),
              p,
              h;
            e: for (var g = o; g <= m; ++g) {
              var v = t.getLine(g),
                b = g == o ? s : 0;
              for (;;) {
                var x = v.indexOf(i, b),
                  k = v.indexOf(a, b);
                if (x < 0) x = v.length;
                if (k < 0) k = v.length;
                b = Math.min(x, k);
                if (b == v.length) break;
                if (b == x) ++d;
                else if (!--d) {
                  p = g;
                  h = b;
                  break e;
                }
                ++b;
              }
            }
            if (p == null || (o == p && h == s)) return;
            return { from: e.Pos(o, s), to: e.Pos(p, h) };
          }
        );
      });
    },
    88657: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(t, n, a, o) {
          if (a && a.call) {
            var l = a;
            a = null;
          } else {
            var l = i(t, a, 'rangeFinder');
          }
          if (typeof n == 'number') n = e.Pos(n, 0);
          var s = i(t, a, 'minFoldSize');
          function c(e) {
            var r = l(t, n);
            if (!r || r.to.line - r.from.line < s) return null;
            var i = t.findMarksAt(r.from);
            for (var a = 0; a < i.length; ++a) {
              if (i[a].__isFold && o !== 'fold') {
                if (!e) return null;
                r.cleared = true;
                i[a].clear();
              }
            }
            return r;
          }
          var u = c(true);
          if (i(t, a, 'scanUp'))
            while (!u && n.line > t.firstLine()) {
              n = e.Pos(n.line - 1, 0);
              u = c(false);
            }
          if (!u || u.cleared || o === 'unfold') return;
          var f = r(t, a, u);
          e.on(f, 'mousedown', function (t) {
            d.clear();
            e.e_preventDefault(t);
          });
          var d = t.markText(u.from, u.to, {
            replacedWith: f,
            clearOnEnter: i(t, a, 'clearOnEnter'),
            __isFold: true,
          });
          d.on('clear', function (r, n) {
            e.signal(t, 'unfold', t, r, n);
          });
          e.signal(t, 'fold', t, u.from, u.to);
        }
        function r(e, t, r) {
          var n = i(e, t, 'widget');
          if (typeof n == 'function') {
            n = n(r.from, r.to);
          }
          if (typeof n == 'string') {
            var a = document.createTextNode(n);
            n = document.createElement('span');
            n.appendChild(a);
            n.className = 'CodeMirror-foldmarker';
          } else if (n) {
            n = n.cloneNode(true);
          }
          return n;
        }
        e.newFoldFunction = function (e, r) {
          return function (n, i) {
            t(n, i, { rangeFinder: e, widget: r });
          };
        };
        e.defineExtension('foldCode', function (e, r, n) {
          t(this, e, r, n);
        });
        e.defineExtension('isFolded', function (e) {
          var t = this.findMarksAt(e);
          for (var r = 0; r < t.length; ++r) if (t[r].__isFold) return true;
        });
        e.commands.toggleFold = function (e) {
          e.foldCode(e.getCursor());
        };
        e.commands.fold = function (e) {
          e.foldCode(e.getCursor(), null, 'fold');
        };
        e.commands.unfold = function (e) {
          e.foldCode(e.getCursor(), null, 'unfold');
        };
        e.commands.foldAll = function (t) {
          t.operation(function () {
            for (var r = t.firstLine(), n = t.lastLine(); r <= n; r++)
              t.foldCode(e.Pos(r, 0), null, 'fold');
          });
        };
        e.commands.unfoldAll = function (t) {
          t.operation(function () {
            for (var r = t.firstLine(), n = t.lastLine(); r <= n; r++)
              t.foldCode(e.Pos(r, 0), null, 'unfold');
          });
        };
        e.registerHelper('fold', 'combine', function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return function (t, r) {
            for (var n = 0; n < e.length; ++n) {
              var i = e[n](t, r);
              if (i) return i;
            }
          };
        });
        e.registerHelper('fold', 'auto', function (e, t) {
          var r = e.getHelpers(t, 'fold');
          for (var n = 0; n < r.length; n++) {
            var i = r[n](e, t);
            if (i) return i;
          }
        });
        var n = {
          rangeFinder: e.fold.auto,
          widget: '↔',
          minFoldSize: 0,
          scanUp: false,
          clearOnEnter: true,
        };
        e.defineOption('foldOptions', null);
        function i(e, t, r) {
          if (t && t[r] !== undefined) return t[r];
          var i = e.options.foldOptions;
          if (i && i[r] !== undefined) return i[r];
          return n[r];
        }
        e.defineExtension('foldOption', function (e, t) {
          return i(this, e, t);
        });
      });
    },
    89700: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(88657));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineOption('foldGutter', false, function (t, i, a) {
          if (a && a != e.Init) {
            t.clearGutter(t.state.foldGutter.options.gutter);
            t.state.foldGutter = null;
            t.off('gutterClick', c);
            t.off('changes', u);
            t.off('viewportChange', f);
            t.off('fold', d);
            t.off('unfold', d);
            t.off('swapDoc', u);
          }
          if (i) {
            t.state.foldGutter = new r(n(i));
            s(t);
            t.on('gutterClick', c);
            t.on('changes', u);
            t.on('viewportChange', f);
            t.on('fold', d);
            t.on('unfold', d);
            t.on('swapDoc', u);
          }
        });
        var t = e.Pos;
        function r(e) {
          this.options = e;
          this.from = this.to = 0;
        }
        function n(e) {
          if (e === true) e = {};
          if (e.gutter == null) e.gutter = 'CodeMirror-foldgutter';
          if (e.indicatorOpen == null) e.indicatorOpen = 'CodeMirror-foldgutter-open';
          if (e.indicatorFolded == null)
            e.indicatorFolded = 'CodeMirror-foldgutter-folded';
          return e;
        }
        function i(e, r) {
          var n = e.findMarks(t(r, 0), t(r + 1, 0));
          for (var i = 0; i < n.length; ++i) {
            if (n[i].__isFold) {
              var a = n[i].find(-1);
              if (a && a.line === r) return n[i];
            }
          }
        }
        function a(e) {
          if (typeof e == 'string') {
            var t = document.createElement('div');
            t.className = e + ' CodeMirror-guttermarker-subtle';
            return t;
          } else {
            return e.cloneNode(true);
          }
        }
        function o(e, r, n) {
          var o = e.state.foldGutter.options,
            s = r - 1;
          var c = e.foldOption(o, 'minFoldSize');
          var u = e.foldOption(o, 'rangeFinder');
          var f = typeof o.indicatorFolded == 'string' && l(o.indicatorFolded);
          var d = typeof o.indicatorOpen == 'string' && l(o.indicatorOpen);
          e.eachLine(r, n, function (r) {
            ++s;
            var n = null;
            var l = r.gutterMarkers;
            if (l) l = l[o.gutter];
            if (i(e, s)) {
              if (f && l && f.test(l.className)) return;
              n = a(o.indicatorFolded);
            } else {
              var m = t(s, 0);
              var p = u && u(e, m);
              if (p && p.to.line - p.from.line >= c) {
                if (d && l && d.test(l.className)) return;
                n = a(o.indicatorOpen);
              }
            }
            if (!n && !l) return;
            e.setGutterMarker(r, o.gutter, n);
          });
        }
        function l(e) {
          return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
        }
        function s(e) {
          var t = e.getViewport(),
            r = e.state.foldGutter;
          if (!r) return;
          e.operation(function () {
            o(e, t.from, t.to);
          });
          r.from = t.from;
          r.to = t.to;
        }
        function c(e, r, n) {
          var a = e.state.foldGutter;
          if (!a) return;
          var o = a.options;
          if (n != o.gutter) return;
          var l = i(e, r);
          if (l) l.clear();
          else e.foldCode(t(r, 0), o);
        }
        function u(e) {
          var t = e.state.foldGutter;
          if (!t) return;
          var r = t.options;
          t.from = t.to = 0;
          clearTimeout(t.changeUpdate);
          t.changeUpdate = setTimeout(function () {
            s(e);
          }, r.foldOnChangeTimeSpan || 600);
        }
        function f(e) {
          var t = e.state.foldGutter;
          if (!t) return;
          var r = t.options;
          clearTimeout(t.changeUpdate);
          t.changeUpdate = setTimeout(function () {
            var r = e.getViewport();
            if (t.from == t.to || r.from - t.to > 20 || t.from - r.to > 20) {
              s(e);
            } else {
              e.operation(function () {
                if (r.from < t.from) {
                  o(e, r.from, t.from);
                  t.from = r.from;
                }
                if (r.to > t.to) {
                  o(e, t.to, r.to);
                  t.to = r.to;
                }
              });
            }
          }, r.updateViewportTimeSpan || 400);
        }
        function d(e, t) {
          var r = e.state.foldGutter;
          if (!r) return;
          var n = t.line;
          if (n >= r.from && n < r.to) o(e, n, n + 1);
        }
      });
    },
    86808: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(t, r) {
          var n = t.getLine(r);
          var i = n.search(/\S/);
          if (i == -1 || /\bcomment\b/.test(t.getTokenTypeAt(e.Pos(r, i + 1))))
            return -1;
          return e.countColumn(n, null, t.getOption('tabSize'));
        }
        e.registerHelper('fold', 'indent', function (r, n) {
          var i = t(r, n.line);
          if (i < 0) return;
          var a = null;
          for (var o = n.line + 1, l = r.lastLine(); o <= l; ++o) {
            var s = t(r, o);
            if (s == -1) {
            } else if (s > i) {
              a = o;
            } else {
              break;
            }
          }
          if (a)
            return {
              from: e.Pos(n.line, r.getLine(n.line).length),
              to: e.Pos(a, r.getLine(a).length),
            };
        });
      });
    },
    62764: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.registerHelper('fold', 'markdown', function (t, r) {
          var n = 100;
          function i(r) {
            var n = t.getTokenTypeAt(e.Pos(r, 0));
            return n && /\bheader\b/.test(n);
          }
          function a(e, t, r) {
            var a = t && t.match(/^#+/);
            if (a && i(e)) return a[0].length;
            a = r && r.match(/^[=\-]+\s*$/);
            if (a && i(e + 1)) return r[0] == '=' ? 1 : 2;
            return n;
          }
          var o = t.getLine(r.line),
            l = t.getLine(r.line + 1);
          var s = a(r.line, o, l);
          if (s === n) return undefined;
          var c = t.lastLine();
          var u = r.line,
            f = t.getLine(u + 2);
          while (u < c) {
            if (a(u + 1, l, f) <= s) break;
            ++u;
            l = f;
            f = t.getLine(u + 2);
          }
          return { from: e.Pos(r.line, o.length), to: e.Pos(u, t.getLine(u).length) };
        });
      });
    },
    4786: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = e.Pos;
        function r(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        var n =
          'A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
        var i = n + '-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
        var a = new RegExp('<(/?)([' + n + '][' + i + ']*)', 'g');
        function o(e, t, r, n) {
          this.line = t;
          this.ch = r;
          this.cm = e;
          this.text = e.getLine(t);
          this.min = n ? Math.max(n.from, e.firstLine()) : e.firstLine();
          this.max = n ? Math.min(n.to - 1, e.lastLine()) : e.lastLine();
        }
        function l(e, r) {
          var n = e.cm.getTokenTypeAt(t(e.line, r));
          return n && /\btag\b/.test(n);
        }
        function s(e) {
          if (e.line >= e.max) return;
          e.ch = 0;
          e.text = e.cm.getLine(++e.line);
          return true;
        }
        function c(e) {
          if (e.line <= e.min) return;
          e.text = e.cm.getLine(--e.line);
          e.ch = e.text.length;
          return true;
        }
        function u(e) {
          for (;;) {
            var t = e.text.indexOf('>', e.ch);
            if (t == -1) {
              if (s(e)) continue;
              else return;
            }
            if (!l(e, t + 1)) {
              e.ch = t + 1;
              continue;
            }
            var r = e.text.lastIndexOf('/', t);
            var n = r > -1 && !/\S/.test(e.text.slice(r + 1, t));
            e.ch = t + 1;
            return n ? 'selfClose' : 'regular';
          }
        }
        function f(e) {
          for (;;) {
            var t = e.ch ? e.text.lastIndexOf('<', e.ch - 1) : -1;
            if (t == -1) {
              if (c(e)) continue;
              else return;
            }
            if (!l(e, t + 1)) {
              e.ch = t;
              continue;
            }
            a.lastIndex = t;
            e.ch = t;
            var r = a.exec(e.text);
            if (r && r.index == t) return r;
          }
        }
        function d(e) {
          for (;;) {
            a.lastIndex = e.ch;
            var t = a.exec(e.text);
            if (!t) {
              if (s(e)) continue;
              else return;
            }
            if (!l(e, t.index + 1)) {
              e.ch = t.index + 1;
              continue;
            }
            e.ch = t.index + t[0].length;
            return t;
          }
        }
        function m(e) {
          for (;;) {
            var t = e.ch ? e.text.lastIndexOf('>', e.ch - 1) : -1;
            if (t == -1) {
              if (c(e)) continue;
              else return;
            }
            if (!l(e, t + 1)) {
              e.ch = t;
              continue;
            }
            var r = e.text.lastIndexOf('/', t);
            var n = r > -1 && !/\S/.test(e.text.slice(r + 1, t));
            e.ch = t + 1;
            return n ? 'selfClose' : 'regular';
          }
        }
        function p(e, r) {
          var n = [];
          for (;;) {
            var i = d(e),
              a,
              o = e.line,
              l = e.ch - (i ? i[0].length : 0);
            if (!i || !(a = u(e))) return;
            if (a == 'selfClose') continue;
            if (i[1]) {
              for (var s = n.length - 1; s >= 0; --s)
                if (n[s] == i[2]) {
                  n.length = s;
                  break;
                }
              if (s < 0 && (!r || r == i[2]))
                return { tag: i[2], from: t(o, l), to: t(e.line, e.ch) };
            } else {
              n.push(i[2]);
            }
          }
        }
        function h(e, r) {
          var n = [];
          for (;;) {
            var i = m(e);
            if (!i) return;
            if (i == 'selfClose') {
              f(e);
              continue;
            }
            var a = e.line,
              o = e.ch;
            var l = f(e);
            if (!l) return;
            if (l[1]) {
              n.push(l[2]);
            } else {
              for (var s = n.length - 1; s >= 0; --s)
                if (n[s] == l[2]) {
                  n.length = s;
                  break;
                }
              if (s < 0 && (!r || r == l[2]))
                return { tag: l[2], from: t(e.line, e.ch), to: t(a, o) };
            }
          }
        }
        e.registerHelper('fold', 'xml', function (e, n) {
          var i = new o(e, n.line, 0);
          for (;;) {
            var a = d(i);
            if (!a || i.line != n.line) return;
            var l = u(i);
            if (!l) return;
            if (!a[1] && l != 'selfClose') {
              var s = t(i.line, i.ch);
              var c = p(i, a[2]);
              return c && r(c.from, s) > 0 ? { from: s, to: c.from } : null;
            }
          }
        });
        e.findMatchingTag = function (e, n, i) {
          var a = new o(e, n.line, n.ch, i);
          if (a.text.indexOf('>') == -1 && a.text.indexOf('<') == -1) return;
          var l = u(a),
            s = l && t(a.line, a.ch);
          var c = l && f(a);
          if (!l || !c || r(a, n) > 0) return;
          var d = { from: t(a.line, a.ch), to: s, tag: c[2] };
          if (l == 'selfClose') return { open: d, close: null, at: 'open' };
          if (c[1]) {
            return { open: h(a, c[2]), close: d, at: 'close' };
          } else {
            a = new o(e, s.line, s.ch, i);
            return { open: d, close: p(a, c[2]), at: 'open' };
          }
        };
        e.findEnclosingTag = function (e, t, r, n) {
          var i = new o(e, t.line, t.ch, r);
          for (;;) {
            var a = h(i, n);
            if (!a) break;
            var l = new o(e, t.line, t.ch, r);
            var s = p(l, a.tag);
            if (s) return { open: a, close: s };
          }
        };
        e.scanForClosingTag = function (e, t, r, n) {
          var i = new o(e, t.line, t.ch, n ? { from: 0, to: n } : null);
          return p(i, r);
        };
      });
    },
    87093: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.multiplexingMode = function (t) {
          var r = Array.prototype.slice.call(arguments, 1);
          function n(e, t, r, n) {
            if (typeof t == 'string') {
              var i = e.indexOf(t, r);
              return n && i > -1 ? i + t.length : i;
            }
            var a = t.exec(r ? e.slice(r) : e);
            return a ? a.index + r + (n ? a[0].length : 0) : -1;
          }
          return {
            startState: function () {
              return {
                outer: e.startState(t),
                innerActive: null,
                inner: null,
                startingInner: false,
              };
            },
            copyState: function (r) {
              return {
                outer: e.copyState(t, r.outer),
                innerActive: r.innerActive,
                inner: r.innerActive && e.copyState(r.innerActive.mode, r.inner),
                startingInner: r.startingInner,
              };
            },
            token: function (i, a) {
              if (!a.innerActive) {
                var o = Infinity,
                  l = i.string;
                for (var s = 0; s < r.length; ++s) {
                  var c = r[s];
                  var u = n(l, c.open, i.pos);
                  if (u == i.pos) {
                    if (!c.parseDelimiters) i.match(c.open);
                    a.startingInner = !!c.parseDelimiters;
                    a.innerActive = c;
                    var f = 0;
                    if (t.indent) {
                      var d = t.indent(a.outer, '', '');
                      if (d !== e.Pass) f = d;
                    }
                    a.inner = e.startState(c.mode, f);
                    return c.delimStyle && c.delimStyle + ' ' + c.delimStyle + '-open';
                  } else if (u != -1 && u < o) {
                    o = u;
                  }
                }
                if (o != Infinity) i.string = l.slice(0, o);
                var m = t.token(i, a.outer);
                if (o != Infinity) i.string = l;
                return m;
              } else {
                var p = a.innerActive,
                  l = i.string;
                if (!p.close && i.sol()) {
                  a.innerActive = a.inner = null;
                  return this.token(i, a);
                }
                var u =
                  p.close && !a.startingInner
                    ? n(l, p.close, i.pos, p.parseDelimiters)
                    : -1;
                if (u == i.pos && !p.parseDelimiters) {
                  i.match(p.close);
                  a.innerActive = a.inner = null;
                  return p.delimStyle && p.delimStyle + ' ' + p.delimStyle + '-close';
                }
                if (u > -1) i.string = l.slice(0, u);
                var h = p.mode.token(i, a.inner);
                if (u > -1) i.string = l;
                else if (i.pos > i.start) a.startingInner = false;
                if (u == i.pos && p.parseDelimiters) a.innerActive = a.inner = null;
                if (p.innerStyle) {
                  if (h) h = h + ' ' + p.innerStyle;
                  else h = p.innerStyle;
                }
                return h;
              }
            },
            indent: function (r, n, i) {
              var a = r.innerActive ? r.innerActive.mode : t;
              if (!a.indent) return e.Pass;
              return a.indent(r.innerActive ? r.inner : r.outer, n, i);
            },
            blankLine: function (n) {
              var i = n.innerActive ? n.innerActive.mode : t;
              if (i.blankLine) {
                i.blankLine(n.innerActive ? n.inner : n.outer);
              }
              if (!n.innerActive) {
                for (var a = 0; a < r.length; ++a) {
                  var o = r[a];
                  if (o.open === '\n') {
                    n.innerActive = o;
                    n.inner = e.startState(
                      o.mode,
                      i.indent ? i.indent(n.outer, '', '') : 0
                    );
                  }
                }
              } else if (n.innerActive.close === '\n') {
                n.innerActive = n.inner = null;
              }
            },
            electricChars: t.electricChars,
            innerMode: function (e) {
              return e.inner
                ? { state: e.inner, mode: e.innerActive.mode }
                : { state: e.outer, mode: t };
            },
          };
        };
      });
    },
    14146: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.overlayMode = function (t, r, n) {
          return {
            startState: function () {
              return {
                base: e.startState(t),
                overlay: e.startState(r),
                basePos: 0,
                baseCur: null,
                overlayPos: 0,
                overlayCur: null,
                streamSeen: null,
              };
            },
            copyState: function (n) {
              return {
                base: e.copyState(t, n.base),
                overlay: e.copyState(r, n.overlay),
                basePos: n.basePos,
                baseCur: null,
                overlayPos: n.overlayPos,
                overlayCur: null,
              };
            },
            token: function (e, i) {
              if (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) {
                i.streamSeen = e;
                i.basePos = i.overlayPos = e.start;
              }
              if (e.start == i.basePos) {
                i.baseCur = t.token(e, i.base);
                i.basePos = e.pos;
              }
              if (e.start == i.overlayPos) {
                e.pos = e.start;
                i.overlayCur = r.token(e, i.overlay);
                i.overlayPos = e.pos;
              }
              e.pos = Math.min(i.basePos, i.overlayPos);
              if (i.overlayCur == null) return i.baseCur;
              else if (
                (i.baseCur != null && i.overlay.combineTokens) ||
                (n && i.overlay.combineTokens == null)
              )
                return i.baseCur + ' ' + i.overlayCur;
              else return i.overlayCur;
            },
            indent:
              t.indent &&
              function (e, r, n) {
                return t.indent(e.base, r, n);
              },
            electricChars: t.electricChars,
            innerMode: function (e) {
              return { state: e.base, mode: t };
            },
            blankLine: function (e) {
              var i, a;
              if (t.blankLine) i = t.blankLine(e.base);
              if (r.blankLine) a = r.blankLine(e.overlay);
              return a == null ? i : n && i != null ? i + ' ' + a : a;
            },
          };
        };
      });
    },
    40790: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineSimpleMode = function (t, r) {
          e.defineMode(t, function (t) {
            return e.simpleMode(t, r);
          });
        };
        e.simpleMode = function (r, n) {
          t(n, 'start');
          var o = {},
            l = n.meta || {},
            s = false;
          for (var u in n)
            if (u != l && n.hasOwnProperty(u)) {
              var f = (o[u] = []),
                d = n[u];
              for (var m = 0; m < d.length; m++) {
                var p = d[m];
                f.push(new i(p, n));
                if (p.indent || p.dedent) s = true;
              }
            }
          var h = {
            startState: function () {
              return {
                state: 'start',
                pending: null,
                local: null,
                localState: null,
                indent: s ? [] : null,
              };
            },
            copyState: function (t) {
              var r = {
                state: t.state,
                pending: t.pending,
                local: t.local,
                localState: null,
                indent: t.indent && t.indent.slice(0),
              };
              if (t.localState) r.localState = e.copyState(t.local.mode, t.localState);
              if (t.stack) r.stack = t.stack.slice(0);
              for (var n = t.persistentStates; n; n = n.next)
                r.persistentStates = {
                  mode: n.mode,
                  spec: n.spec,
                  state:
                    n.state == t.localState
                      ? r.localState
                      : e.copyState(n.mode, n.state),
                  next: r.persistentStates,
                };
              return r;
            },
            token: a(o, r),
            innerMode: function (e) {
              return e.local && { mode: e.local.mode, state: e.localState };
            },
            indent: c(o, l),
          };
          if (l) for (var g in l) if (l.hasOwnProperty(g)) h[g] = l[g];
          return h;
        };
        function t(e, t) {
          if (!e.hasOwnProperty(t))
            throw new Error('Undefined state ' + t + ' in simple mode');
        }
        function r(e, t) {
          if (!e) return /(?:)/;
          var r = '';
          if (e instanceof RegExp) {
            if (e.ignoreCase) r = 'i';
            if (e.unicode) r += 'u';
            e = e.source;
          } else {
            e = String(e);
          }
          return new RegExp((t === false ? '' : '^') + '(?:' + e + ')', r);
        }
        function n(e) {
          if (!e) return null;
          if (e.apply) return e;
          if (typeof e == 'string') return e.replace(/\./g, ' ');
          var t = [];
          for (var r = 0; r < e.length; r++) t.push(e[r] && e[r].replace(/\./g, ' '));
          return t;
        }
        function i(e, i) {
          if (e.next || e.push) t(i, e.next || e.push);
          this.regex = r(e.regex);
          this.token = n(e.token);
          this.data = e;
        }
        function a(e, t) {
          return function (r, n) {
            if (n.pending) {
              var i = n.pending.shift();
              if (n.pending.length == 0) n.pending = null;
              r.pos += i.text.length;
              return i.token;
            }
            if (n.local) {
              if (n.local.end && r.match(n.local.end)) {
                var a = n.local.endToken || null;
                n.local = n.localState = null;
                return a;
              } else {
                var a = n.local.mode.token(r, n.localState),
                  o;
                if (n.local.endScan && (o = n.local.endScan.exec(r.current())))
                  r.pos = r.start + o.index;
                return a;
              }
            }
            var s = e[n.state];
            for (var c = 0; c < s.length; c++) {
              var u = s[c];
              var f = (!u.data.sol || r.sol()) && r.match(u.regex);
              if (f) {
                if (u.data.next) {
                  n.state = u.data.next;
                } else if (u.data.push) {
                  (n.stack || (n.stack = [])).push(n.state);
                  n.state = u.data.push;
                } else if (u.data.pop && n.stack && n.stack.length) {
                  n.state = n.stack.pop();
                }
                if (u.data.mode) l(t, n, u.data.mode, u.token);
                if (u.data.indent) n.indent.push(r.indentation() + t.indentUnit);
                if (u.data.dedent) n.indent.pop();
                var d = u.token;
                if (d && d.apply) d = d(f);
                if (f.length > 2 && u.token && typeof u.token != 'string') {
                  for (var m = 2; m < f.length; m++)
                    if (f[m])
                      (n.pending || (n.pending = [])).push({
                        text: f[m],
                        token: u.token[m - 1],
                      });
                  r.backUp(f[0].length - (f[1] ? f[1].length : 0));
                  return d[0];
                } else if (d && d.join) {
                  return d[0];
                } else {
                  return d;
                }
              }
            }
            r.next();
            return null;
          };
        }
        function o(e, t) {
          if (e === t) return true;
          if (!e || typeof e != 'object' || !t || typeof t != 'object') return false;
          var r = 0;
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              if (!t.hasOwnProperty(n) || !o(e[n], t[n])) return false;
              r++;
            }
          for (var n in t) if (t.hasOwnProperty(n)) r--;
          return r == 0;
        }
        function l(t, n, i, a) {
          var l;
          if (i.persistent)
            for (var s = n.persistentStates; s && !l; s = s.next)
              if (i.spec ? o(i.spec, s.spec) : i.mode == s.mode) l = s;
          var c = l ? l.mode : i.mode || e.getMode(t, i.spec);
          var u = l ? l.state : e.startState(c);
          if (i.persistent && !l)
            n.persistentStates = {
              mode: c,
              spec: i.spec,
              state: u,
              next: n.persistentStates,
            };
          n.localState = u;
          n.local = {
            mode: c,
            end: i.end && r(i.end),
            endScan: i.end && i.forceEnd !== false && r(i.end, false),
            endToken: a && a.join ? a[a.length - 1] : a,
          };
        }
        function s(e, t) {
          for (var r = 0; r < t.length; r++) if (t[r] === e) return true;
        }
        function c(t, r) {
          return function (n, i, a) {
            if (n.local && n.local.mode.indent)
              return n.local.mode.indent(n.localState, i, a);
            if (
              n.indent == null ||
              n.local ||
              (r.dontIndentStates && s(n.state, r.dontIndentStates) > -1)
            )
              return e.Pass;
            var o = n.indent.length - 1,
              l = t[n.state];
            e: for (;;) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                if (u.data.dedent && u.data.dedentIfLineStart !== false) {
                  var f = u.regex.exec(i);
                  if (f && f[0]) {
                    o--;
                    if (u.next || u.push) l = t[u.next || u.push];
                    i = i.slice(f[0].length);
                    continue e;
                  }
                }
              }
              break;
            }
            return o < 0 ? 0 : n.indent[o];
          };
        }
      });
    },
    27165: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.runMode = function (t, r, n, i) {
          var a = e.getMode(e.defaults, r);
          var o = (i && i.tabSize) || e.defaults.tabSize;
          if (n.appendChild) {
            var l = /MSIE \d/.test(navigator.userAgent);
            var s = l && (document.documentMode == null || document.documentMode < 9);
            var c = n,
              u = 0;
            c.innerHTML = '';
            n = function (e, t) {
              if (e == '\n') {
                c.appendChild(document.createTextNode(s ? '\r' : e));
                u = 0;
                return;
              }
              var r = '';
              for (var n = 0; ; ) {
                var i = e.indexOf('\t', n);
                if (i == -1) {
                  r += e.slice(n);
                  u += e.length - n;
                  break;
                } else {
                  u += i - n;
                  r += e.slice(n, i);
                  var a = o - (u % o);
                  u += a;
                  for (var l = 0; l < a; ++l) r += ' ';
                  n = i + 1;
                }
              }
              if (t) {
                var f = c.appendChild(document.createElement('span'));
                f.className = 'cm-' + t.replace(/ +/g, ' cm-');
                f.appendChild(document.createTextNode(r));
              } else {
                c.appendChild(document.createTextNode(r));
              }
            };
          }
          var f = e.splitLines(t),
            d = (i && i.state) || e.startState(a);
          for (var m = 0, p = f.length; m < p; ++m) {
            if (m) n('\n');
            var h = new e.StringStream(f[m], null, {
              lookAhead: function (e) {
                return f[m + e];
              },
              baseToken: function () {},
            });
            if (!h.string && a.blankLine) a.blankLine(d);
            while (!h.eol()) {
              var g = a.token(h, d);
              n(h.current(), g, m, h.start, d, a);
              h.start = h.pos;
            }
          }
        };
      });
    },
    75615: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineOption('scrollPastEnd', false, function (n, i, a) {
          if (a && a != e.Init) {
            n.off('change', t);
            n.off('refresh', r);
            n.display.lineSpace.parentNode.style.paddingBottom = '';
            n.state.scrollPastEndPadding = null;
          }
          if (i) {
            n.on('change', t);
            n.on('refresh', r);
            r(n);
          }
        });
        function t(t, n) {
          if (e.changeEnd(n).line == t.lastLine()) r(t);
        }
        function r(e) {
          var t = '';
          if (e.lineCount() > 1) {
            var n = e.display.scroller.clientHeight - 30,
              i = e.getLineHandle(e.lastLine()).height;
            t = n - i + 'px';
          }
          if (e.state.scrollPastEndPadding != t) {
            e.state.scrollPastEndPadding = t;
            e.display.lineSpace.parentNode.style.paddingBottom = t;
            e.off('refresh', r);
            e.setSize();
            e.on('refresh', r);
          }
        }
      });
    },
    14568: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(55292));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineOption('search', { bottom: false });
        function t(e, t, r, n, i) {
          if (e.openDialog)
            e.openDialog(t, i, {
              value: n,
              selectValueOnOpen: true,
              bottom: e.options.search.bottom,
            });
          else i(prompt(r, n));
        }
        function r(e) {
          return (
            e.phrase('Jump to line:') +
            ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
            e.phrase('(Use line:column or scroll% syntax)') +
            '</span>'
          );
        }
        function n(e, t) {
          var r = Number(t);
          if (/^[-+]/.test(t)) return e.getCursor().line + r;
          else return r - 1;
        }
        e.commands.jumpToLine = function (e) {
          var i = e.getCursor();
          t(e, r(e), e.phrase('Jump to line:'), i.line + 1 + ':' + i.ch, function (t) {
            if (!t) return;
            var r;
            if ((r = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(t))) {
              e.setCursor(n(e, r[1]), Number(r[2]));
            } else if ((r = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(t))) {
              var a = Math.round((e.lineCount() * Number(r[1])) / 100);
              if (/^[-+]/.test(r[1])) a = i.line + a + 1;
              e.setCursor(a - 1, i.ch);
            } else if ((r = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(t))) {
              e.setCursor(n(e, r[1]), i.ch);
            }
          });
        };
        e.keyMap['default']['Alt-G'] = 'jumpToLine';
      });
    },
    81699: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(32095), r(55292));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineOption('search', { bottom: false });
        function t(e, t) {
          if (typeof e == 'string')
            e = new RegExp(
              e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'),
              t ? 'gi' : 'g'
            );
          else if (!e.global) e = new RegExp(e.source, e.ignoreCase ? 'gi' : 'g');
          return {
            token: function (t) {
              e.lastIndex = t.pos;
              var r = e.exec(t.string);
              if (r && r.index == t.pos) {
                t.pos += r[0].length || 1;
                return 'searching';
              } else if (r) {
                t.pos = r.index;
              } else {
                t.skipToEnd();
              }
            },
          };
        }
        function r() {
          this.posFrom = this.posTo = this.lastQuery = this.query = null;
          this.overlay = null;
        }
        function n(e) {
          return e.state.search || (e.state.search = new r());
        }
        function i(e) {
          return typeof e == 'string' && e == e.toLowerCase();
        }
        function a(e, t, r) {
          return e.getSearchCursor(t, r, { caseFold: i(t), multiline: true });
        }
        function o(e, t, r, n, i) {
          e.openDialog(t, n, {
            value: r,
            selectValueOnOpen: true,
            closeOnEnter: false,
            onClose: function () {
              p(e);
            },
            onKeyDown: i,
            bottom: e.options.search.bottom,
          });
        }
        function l(e, t, r, n, i) {
          if (e.openDialog)
            e.openDialog(t, i, {
              value: n,
              selectValueOnOpen: true,
              bottom: e.options.search.bottom,
            });
          else i(prompt(r, n));
        }
        function s(e, t, r, n) {
          if (e.openConfirm) e.openConfirm(t, n);
          else if (confirm(r)) n[0]();
        }
        function c(e) {
          return e.replace(/\\([nrt\\])/g, function (e, t) {
            if (t == 'n') return '\n';
            if (t == 'r') return '\r';
            if (t == 't') return '\t';
            if (t == '\\') return '\\';
            return e;
          });
        }
        function u(e) {
          var t = e.match(/^\/(.*)\/([a-z]*)$/);
          if (t) {
            try {
              e = new RegExp(t[1], t[2].indexOf('i') == -1 ? '' : 'i');
            } catch (r) {}
          } else {
            e = c(e);
          }
          if (typeof e == 'string' ? e == '' : e.test('')) e = /x^/;
          return e;
        }
        function f(e, r, n) {
          r.queryText = n;
          r.query = u(n);
          e.removeOverlay(r.overlay, i(r.query));
          r.overlay = t(r.query, i(r.query));
          e.addOverlay(r.overlay);
          if (e.showMatchesOnScrollbar) {
            if (r.annotate) {
              r.annotate.clear();
              r.annotate = null;
            }
            r.annotate = e.showMatchesOnScrollbar(r.query, i(r.query));
          }
        }
        function d(t, r, i, a) {
          var s = n(t);
          if (s.query) return m(t, r);
          var c = t.getSelection() || s.lastQuery;
          if (c instanceof RegExp && c.source == 'x^') c = null;
          if (i && t.openDialog) {
            var u = null;
            var d = function (r, n) {
              e.e_stop(n);
              if (!r) return;
              if (r != s.queryText) {
                f(t, s, r);
                s.posFrom = s.posTo = t.getCursor();
              }
              if (u) u.style.opacity = 1;
              m(t, n.shiftKey, function (e, r) {
                var n;
                if (
                  r.line < 3 &&
                  document.querySelector &&
                  (n = t.display.wrapper.querySelector('.CodeMirror-dialog')) &&
                  n.getBoundingClientRect().bottom - 4 > t.cursorCoords(r, 'window').top
                )
                  (u = n).style.opacity = 0.4;
              });
            };
            o(t, h(t), c, d, function (r, i) {
              var a = e.keyName(r);
              var o = t.getOption('extraKeys'),
                l = (o && o[a]) || e.keyMap[t.getOption('keyMap')][a];
              if (
                l == 'findNext' ||
                l == 'findPrev' ||
                l == 'findPersistentNext' ||
                l == 'findPersistentPrev'
              ) {
                e.e_stop(r);
                f(t, n(t), i);
                t.execCommand(l);
              } else if (l == 'find' || l == 'findPersistent') {
                e.e_stop(r);
                d(i, r);
              }
            });
            if (a && c) {
              f(t, s, c);
              m(t, r);
            }
          } else {
            l(t, h(t), 'Search for:', c, function (e) {
              if (e && !s.query)
                t.operation(function () {
                  f(t, s, e);
                  s.posFrom = s.posTo = t.getCursor();
                  m(t, r);
                });
            });
          }
        }
        function m(t, r, i) {
          t.operation(function () {
            var o = n(t);
            var l = a(t, o.query, r ? o.posFrom : o.posTo);
            if (!l.find(r)) {
              l = a(t, o.query, r ? e.Pos(t.lastLine()) : e.Pos(t.firstLine(), 0));
              if (!l.find(r)) return;
            }
            t.setSelection(l.from(), l.to());
            t.scrollIntoView({ from: l.from(), to: l.to() }, 20);
            o.posFrom = l.from();
            o.posTo = l.to();
            if (i) i(l.from(), l.to());
          });
        }
        function p(e) {
          e.operation(function () {
            var t = n(e);
            t.lastQuery = t.query;
            if (!t.query) return;
            t.query = t.queryText = null;
            e.removeOverlay(t.overlay);
            if (t.annotate) {
              t.annotate.clear();
              t.annotate = null;
            }
          });
        }
        function h(e) {
          return (
            '<span class="CodeMirror-search-label">' +
            e.phrase('Search:') +
            '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
            e.phrase('(Use /re/ syntax for regexp search)') +
            '</span>'
          );
        }
        function g(e) {
          return (
            ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
            e.phrase('(Use /re/ syntax for regexp search)') +
            '</span>'
          );
        }
        function v(e) {
          return (
            '<span class="CodeMirror-search-label">' +
            e.phrase('With:') +
            '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'
          );
        }
        function b(e) {
          return (
            '<span class="CodeMirror-search-label">' +
            e.phrase('Replace?') +
            '</span> <button>' +
            e.phrase('Yes') +
            '</button> <button>' +
            e.phrase('No') +
            '</button> <button>' +
            e.phrase('All') +
            '</button> <button>' +
            e.phrase('Stop') +
            '</button> '
          );
        }
        function x(e, t, r) {
          e.operation(function () {
            for (var n = a(e, t); n.findNext(); ) {
              if (typeof t != 'string') {
                var i = e.getRange(n.from(), n.to()).match(t);
                n.replace(
                  r.replace(/\$(\d)/g, function (e, t) {
                    return i[t];
                  })
                );
              } else n.replace(r);
            }
          });
        }
        function k(e, t) {
          if (e.getOption('readOnly')) return;
          var r = e.getSelection() || n(e).lastQuery;
          var i =
            '<span class="CodeMirror-search-label">' +
            (t ? e.phrase('Replace all:') : e.phrase('Replace:')) +
            '</span>';
          l(e, i + g(e), i, r, function (r) {
            if (!r) return;
            r = u(r);
            l(e, v(e), e.phrase('Replace with:'), '', function (n) {
              n = c(n);
              if (t) {
                x(e, r, n);
              } else {
                p(e);
                var i = a(e, r, e.getCursor('from'));
                var o = function () {
                  var t = i.from(),
                    c;
                  if (!(c = i.findNext())) {
                    i = a(e, r);
                    if (
                      !(c = i.findNext()) ||
                      (t && i.from().line == t.line && i.from().ch == t.ch)
                    )
                      return;
                  }
                  e.setSelection(i.from(), i.to());
                  e.scrollIntoView({ from: i.from(), to: i.to() });
                  s(e, b(e), e.phrase('Replace?'), [
                    function () {
                      l(c);
                    },
                    o,
                    function () {
                      x(e, r, n);
                    },
                  ]);
                };
                var l = function (e) {
                  i.replace(
                    typeof r == 'string'
                      ? n
                      : n.replace(/\$(\d)/g, function (t, r) {
                          return e[r];
                        })
                  );
                  o();
                };
                o();
              }
            });
          });
        }
        e.commands.find = function (e) {
          p(e);
          d(e);
        };
        e.commands.findPersistent = function (e) {
          p(e);
          d(e, false, true);
        };
        e.commands.findPersistentNext = function (e) {
          d(e, false, true, true);
        };
        e.commands.findPersistentPrev = function (e) {
          d(e, true, true, true);
        };
        e.commands.findNext = d;
        e.commands.findPrev = function (e) {
          d(e, true);
        };
        e.commands.clearSearch = p;
        e.commands.replace = k;
        e.commands.replaceAll = function (e) {
          k(e, true);
        };
      });
    },
    20017: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = 'CodeMirror-activeline';
        var r = 'CodeMirror-activeline-background';
        var n = 'CodeMirror-activeline-gutter';
        e.defineOption('styleActiveLine', false, function (t, r, n) {
          var a = n == e.Init ? false : n;
          if (r == a) return;
          if (a) {
            t.off('beforeSelectionChange', l);
            i(t);
            delete t.state.activeLines;
          }
          if (r) {
            t.state.activeLines = [];
            o(t, t.listSelections());
            t.on('beforeSelectionChange', l);
          }
        });
        function i(e) {
          for (var i = 0; i < e.state.activeLines.length; i++) {
            e.removeLineClass(e.state.activeLines[i], 'wrap', t);
            e.removeLineClass(e.state.activeLines[i], 'background', r);
            e.removeLineClass(e.state.activeLines[i], 'gutter', n);
          }
        }
        function a(e, t) {
          if (e.length != t.length) return false;
          for (var r = 0; r < e.length; r++) if (e[r] != t[r]) return false;
          return true;
        }
        function o(e, o) {
          var l = [];
          for (var s = 0; s < o.length; s++) {
            var c = o[s];
            var u = e.getOption('styleActiveLine');
            if (
              typeof u == 'object' && u.nonEmpty
                ? c.anchor.line != c.head.line
                : !c.empty()
            )
              continue;
            var f = e.getLineHandleVisualStart(c.head.line);
            if (l[l.length - 1] != f) l.push(f);
          }
          if (a(e.state.activeLines, l)) return;
          e.operation(function () {
            i(e);
            for (var a = 0; a < l.length; a++) {
              e.addLineClass(l[a], 'wrap', t);
              e.addLineClass(l[a], 'background', r);
              e.addLineClass(l[a], 'gutter', n);
            }
            e.state.activeLines = l;
          });
        }
        function l(e, t) {
          o(e, t.ranges);
        }
      });
    },
    64020: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineOption('styleSelectedText', false, function (n, i, a) {
          var o = a && a != e.Init;
          if (i && !o) {
            n.state.markedSelection = [];
            n.state.markedSelectionStyle =
              typeof i == 'string' ? i : 'CodeMirror-selectedtext';
            s(n);
            n.on('cursorActivity', t);
            n.on('change', r);
          } else if (!i && o) {
            n.off('cursorActivity', t);
            n.off('change', r);
            l(n);
            n.state.markedSelection = n.state.markedSelectionStyle = null;
          }
        });
        function t(e) {
          if (e.state.markedSelection)
            e.operation(function () {
              c(e);
            });
        }
        function r(e) {
          if (e.state.markedSelection && e.state.markedSelection.length)
            e.operation(function () {
              l(e);
            });
        }
        var n = 8;
        var i = e.Pos;
        var a = e.cmpPos;
        function o(e, t, r, o) {
          if (a(t, r) == 0) return;
          var l = e.state.markedSelection;
          var s = e.state.markedSelectionStyle;
          for (var c = t.line; ; ) {
            var u = c == t.line ? t : i(c, 0);
            var f = c + n,
              d = f >= r.line;
            var m = d ? r : i(f, 0);
            var p = e.markText(u, m, { className: s });
            if (o == null) l.push(p);
            else l.splice(o++, 0, p);
            if (d) break;
            c = f;
          }
        }
        function l(e) {
          var t = e.state.markedSelection;
          for (var r = 0; r < t.length; ++r) t[r].clear();
          t.length = 0;
        }
        function s(e) {
          l(e);
          var t = e.listSelections();
          for (var r = 0; r < t.length; r++) o(e, t[r].from(), t[r].to());
        }
        function c(e) {
          if (!e.somethingSelected()) return l(e);
          if (e.listSelections().length > 1) return s(e);
          var t = e.getCursor('start'),
            r = e.getCursor('end');
          var i = e.state.markedSelection;
          if (!i.length) return o(e, t, r);
          var c = i[0].find(),
            u = i[i.length - 1].find();
          if (!c || !u || r.line - t.line <= n || a(t, u.to) >= 0 || a(r, c.from) <= 0)
            return s(e);
          while (a(t, c.from) > 0) {
            i.shift().clear();
            c = i[0].find();
          }
          if (a(t, c.from) < 0) {
            if (c.to.line - t.line < n) {
              i.shift().clear();
              o(e, t, c.to, 0);
            } else {
              o(e, t, c.from, 0);
            }
          }
          while (a(r, u.to) < 0) {
            i.pop().clear();
            u = i[i.length - 1].find();
          }
          if (a(r, u.to) > 0) {
            if (r.line - u.from.line < n) {
              i.pop().clear();
              o(e, u.from, r);
            } else {
              o(e, u.to, r);
            }
          }
        }
      });
    },
    13656: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineOption('selectionPointer', false, function (i, a) {
          var o = i.state.selectionPointer;
          if (o) {
            e.off(i.getWrapperElement(), 'mousemove', o.mousemove);
            e.off(i.getWrapperElement(), 'mouseout', o.mouseout);
            e.off(window, 'scroll', o.windowScroll);
            i.off('cursorActivity', n);
            i.off('scroll', n);
            i.state.selectionPointer = null;
            i.display.lineDiv.style.cursor = '';
          }
          if (a) {
            o = i.state.selectionPointer = {
              value: typeof a == 'string' ? a : 'default',
              mousemove: function (e) {
                t(i, e);
              },
              mouseout: function (e) {
                r(i, e);
              },
              windowScroll: function () {
                n(i);
              },
              rects: null,
              mouseX: null,
              mouseY: null,
              willUpdate: false,
            };
            e.on(i.getWrapperElement(), 'mousemove', o.mousemove);
            e.on(i.getWrapperElement(), 'mouseout', o.mouseout);
            e.on(window, 'scroll', o.windowScroll);
            i.on('cursorActivity', n);
            i.on('scroll', n);
          }
        });
        function t(e, t) {
          var r = e.state.selectionPointer;
          if (t.buttons == null ? t.which : t.buttons) {
            r.mouseX = r.mouseY = null;
          } else {
            r.mouseX = t.clientX;
            r.mouseY = t.clientY;
          }
          i(e);
        }
        function r(e, t) {
          if (!e.getWrapperElement().contains(t.relatedTarget)) {
            var r = e.state.selectionPointer;
            r.mouseX = r.mouseY = null;
            i(e);
          }
        }
        function n(e) {
          e.state.selectionPointer.rects = null;
          i(e);
        }
        function i(e) {
          if (!e.state.selectionPointer.willUpdate) {
            e.state.selectionPointer.willUpdate = true;
            setTimeout(function () {
              a(e);
              e.state.selectionPointer.willUpdate = false;
            }, 50);
          }
        }
        function a(e) {
          var t = e.state.selectionPointer;
          if (!t) return;
          if (t.rects == null && t.mouseX != null) {
            t.rects = [];
            if (e.somethingSelected()) {
              for (var r = e.display.selectionDiv.firstChild; r; r = r.nextSibling)
                t.rects.push(r.getBoundingClientRect());
            }
          }
          var n = false;
          if (t.mouseX != null)
            for (var i = 0; i < t.rects.length; i++) {
              var a = t.rects[i];
              if (
                a.left <= t.mouseX &&
                a.right >= t.mouseX &&
                a.top <= t.mouseY &&
                a.bottom >= t.mouseY
              )
                n = true;
            }
          var o = n ? t.value : '';
          if (e.display.lineDiv.style.cursor != o) e.display.lineDiv.style.cursor = o;
        }
      });
    },
    73986: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = e.commands;
        var r = e.Pos;
        function n(e, t) {
          return e.line == t.line && e.ch == t.ch;
        }
        var i = [];
        function a(e) {
          i.push(e);
          if (i.length > 50) i.shift();
        }
        function o(e) {
          if (!i.length) return a(e);
          i[i.length - 1] += e;
        }
        function l(e) {
          return i[i.length - (e ? Math.min(e, 1) : 1)] || '';
        }
        function s() {
          if (i.length > 1) i.pop();
          return l();
        }
        var c = null;
        function u(e, t, r, i, l) {
          if (l == null) l = e.getRange(t, r);
          if (i == 'grow' && c && c.cm == e && n(t, c.pos) && e.isClean(c.gen)) o(l);
          else if (i !== false) a(l);
          e.replaceRange('', t, r, '+delete');
          if (i == 'grow') c = { cm: e, pos: t, gen: e.changeGeneration() };
          else c = null;
        }
        function f(e, t, r) {
          return e.findPosH(t, r, 'char', true);
        }
        function d(e, t, r) {
          return e.findPosH(t, r, 'word', true);
        }
        function m(e, t, r) {
          return e.findPosV(t, r, 'line', e.doc.sel.goalColumn);
        }
        function p(e, t, r) {
          return e.findPosV(t, r, 'page', e.doc.sel.goalColumn);
        }
        function h(e, t, n) {
          var i = t.line,
            a = e.getLine(i);
          var o = /\S/.test(n < 0 ? a.slice(0, t.ch) : a.slice(t.ch));
          var l = e.firstLine(),
            s = e.lastLine();
          for (;;) {
            i += n;
            if (i < l || i > s) return e.clipPos(r(i - n, n < 0 ? 0 : null));
            a = e.getLine(i);
            var c = /\S/.test(a);
            if (c) o = true;
            else if (o) return r(i, 0);
          }
        }
        function g(e, t, n) {
          var i = t.line,
            a = t.ch;
          var o = e.getLine(t.line),
            l = false;
          for (;;) {
            var s = o.charAt(a + (n < 0 ? -1 : 0));
            if (!s) {
              if (i == (n < 0 ? e.firstLine() : e.lastLine())) return r(i, a);
              o = e.getLine(i + n);
              if (!/\S/.test(o)) return r(i, a);
              i += n;
              a = n < 0 ? o.length : 0;
              continue;
            }
            if (l && /[!?.]/.test(s)) return r(i, a + (n > 0 ? 1 : 0));
            if (!l) l = /\w/.test(s);
            a += n;
          }
        }
        function v(e, t, i) {
          var a;
          if (
            e.findMatchingBracket &&
            (a = e.findMatchingBracket(t, { strict: true })) &&
            a.match &&
            (a.forward ? 1 : -1) == i
          )
            return i > 0 ? r(a.to.line, a.to.ch + 1) : a.to;
          for (var o = true; ; o = false) {
            var l = e.getTokenAt(t);
            var s = r(t.line, i < 0 ? l.start : l.end);
            if ((o && i > 0 && l.end == t.ch) || !/\w/.test(l.string)) {
              var c = e.findPosH(s, i, 'char');
              if (n(s, c)) return t;
              else t = c;
            } else {
              return s;
            }
          }
        }
        function b(e, t) {
          var r = e.state.emacsPrefix;
          if (!r) return t ? null : 1;
          F(e);
          return r == '-' ? -1 : Number(r);
        }
        function x(e) {
          var t =
            typeof e == 'string'
              ? function (t) {
                  t.execCommand(e);
                }
              : e;
          return function (e) {
            var r = b(e);
            t(e);
            for (var n = 1; n < r; ++n) t(e);
          };
        }
        function k(e, t, r, i) {
          var a = b(e);
          if (a < 0) {
            i = -i;
            a = -a;
          }
          for (var o = 0; o < a; ++o) {
            var l = r(e, t, i);
            if (n(l, t)) break;
            t = l;
          }
          return t;
        }
        function y(e, t) {
          var r = function (r) {
            r.extendSelection(k(r, r.getCursor(), e, t));
          };
          r.motion = true;
          return r;
        }
        function w(e, t, r, n) {
          var i = e.listSelections(),
            a;
          var o = i.length;
          while (o--) {
            a = i[o].head;
            u(e, a, k(e, a, t, r), n);
          }
        }
        function C(e, t) {
          if (e.somethingSelected()) {
            var r = e.listSelections(),
              n;
            var i = r.length;
            while (i--) {
              n = r[i];
              u(e, n.anchor, n.head, t);
            }
            return true;
          }
        }
        function _(e, t) {
          if (e.state.emacsPrefix) {
            if (t != '-') e.state.emacsPrefix += t;
            return;
          }
          e.state.emacsPrefix = t;
          e.on('keyHandled', L);
          e.on('inputRead', A);
        }
        var S = { 'Alt-G': true, 'Ctrl-X': true, 'Ctrl-Q': true, 'Ctrl-U': true };
        function L(e, t) {
          if (!e.state.emacsPrefixMap && !S.hasOwnProperty(t)) F(e);
        }
        function F(e) {
          e.state.emacsPrefix = null;
          e.off('keyHandled', L);
          e.off('inputRead', A);
        }
        function A(e, t) {
          var r = b(e);
          if (r > 1 && t.origin == '+input') {
            var n = t.text.join('\n'),
              i = '';
            for (var a = 1; a < r; ++a) i += n;
            e.replaceSelection(i);
          }
        }
        function T(e, t) {
          if (typeof t == 'string' && (/^\d$/.test(t) || t == 'Ctrl-U')) return;
          e.removeKeyMap(q);
          e.state.emacsPrefixMap = false;
          e.off('keyHandled', T);
          e.off('inputRead', T);
        }
        t.setMark = function (e) {
          e.setCursor(e.getCursor());
          e.setExtending(!e.getExtending());
          e.on('change', function () {
            e.setExtending(false);
          });
        };
        function M(e) {
          e.setExtending(false);
          e.setCursor(e.getCursor());
        }
        function E(e) {
          var t = document.createDocumentFragment();
          var r = document.createElement('input');
          r.setAttribute('type', 'text');
          r.style.width = '10em';
          t.appendChild(document.createTextNode(e + ': '));
          t.appendChild(r);
          return t;
        }
        function P(e, t, r) {
          if (e.openDialog) e.openDialog(E(t), r, { bottom: true });
          else r(prompt(t, ''));
        }
        function D(e, t) {
          var r = e.getCursor(),
            n = e.findPosH(r, 1, 'word');
          e.replaceRange(t(e.getRange(r, n)), r, n);
          e.setCursor(n);
        }
        function z(e) {
          var t = e.getCursor(),
            n = t.line,
            i = t.ch;
          var a = [];
          while (n >= e.firstLine()) {
            var o = e.getLine(n);
            for (var l = i == null ? o.length : i; l > 0; ) {
              var i = o.charAt(--l);
              if (i == ')') a.push('(');
              else if (i == ']') a.push('[');
              else if (i == '}') a.push('{');
              else if (/[\(\{\[]/.test(i) && (!a.length || a.pop() != i))
                return e.extendSelection(r(n, l));
            }
            --n;
            i = null;
          }
        }
        t.killRegion = function (e) {
          u(e, e.getCursor('start'), e.getCursor('end'), true);
        };
        t.killLineEmacs = x(function (e) {
          var t = e.getCursor(),
            n = e.clipPos(r(t.line));
          var i = e.getRange(t, n);
          if (!/\S/.test(i)) {
            i += '\n';
            n = r(t.line + 1, 0);
          }
          u(e, t, n, 'grow', i);
        });
        t.killRingSave = function (e) {
          a(e.getSelection());
          M(e);
        };
        t.yank = function (e) {
          var t = e.getCursor();
          e.replaceRange(l(b(e)), t, t, 'paste');
          e.setSelection(t, e.getCursor());
        };
        t.yankPop = function (e) {
          e.replaceSelection(s(), 'around', 'paste');
        };
        t.forwardChar = y(f, 1);
        t.backwardChar = y(f, -1);
        t.deleteChar = function (e) {
          w(e, f, 1, false);
        };
        t.deleteForwardChar = function (e) {
          C(e, false) || w(e, f, 1, false);
        };
        t.deleteBackwardChar = function (e) {
          C(e, false) || w(e, f, -1, false);
        };
        t.forwardWord = y(d, 1);
        t.backwardWord = y(d, -1);
        t.killWord = function (e) {
          w(e, d, 1, 'grow');
        };
        t.backwardKillWord = function (e) {
          w(e, d, -1, 'grow');
        };
        t.nextLine = y(m, 1);
        t.previousLine = y(m, -1);
        t.scrollDownCommand = y(p, 1);
        t.scrollUpCommand = y(p, -1);
        t.backwardParagraph = y(h, -1);
        t.forwardParagraph = y(h, 1);
        t.backwardSentence = y(g, -1);
        t.forwardSentence = y(g, 1);
        t.killSentence = function (e) {
          w(e, g, 1, 'grow');
        };
        t.backwardKillSentence = function (e) {
          u(e, e.getCursor(), g(e, e.getCursor(), 1), 'grow');
        };
        t.killSexp = function (e) {
          w(e, v, 1, 'grow');
        };
        t.backwardKillSexp = function (e) {
          w(e, v, -1, 'grow');
        };
        t.forwardSexp = y(v, 1);
        t.backwardSexp = y(v, -1);
        t.markSexp = function (e) {
          var t = e.getCursor();
          e.setSelection(k(e, t, v, 1), t);
        };
        t.transposeSexps = function (e) {
          var t = v(e, e.getCursor(), -1);
          var r = v(e, t, 1);
          var n = v(e, r, 1);
          var i = v(e, n, -1);
          e.replaceRange(e.getRange(i, n) + e.getRange(r, i) + e.getRange(t, r), t, n);
        };
        t.backwardUpList = x(z);
        t.justOneSpace = function (e) {
          var t = e.getCursor(),
            n = t.ch;
          var i = t.ch,
            a = e.getLine(t.line);
          while (n && /\s/.test(a.charAt(n - 1))) --n;
          while (i < a.length && /\s/.test(a.charAt(i))) ++i;
          e.replaceRange(' ', r(t.line, n), r(t.line, i));
        };
        t.openLine = x(function (e) {
          e.replaceSelection('\n', 'start');
        });
        t.transposeCharsRepeatable = x(function (e) {
          e.execCommand('transposeChars');
        });
        t.capitalizeWord = x(function (e) {
          D(e, function (e) {
            var t = e.search(/\w/);
            if (t == -1) return e;
            return (
              e.slice(0, t) + e.charAt(t).toUpperCase() + e.slice(t + 1).toLowerCase()
            );
          });
        });
        t.upcaseWord = x(function (e) {
          D(e, function (e) {
            return e.toUpperCase();
          });
        });
        t.downcaseWord = x(function (e) {
          D(e, function (e) {
            return e.toLowerCase();
          });
        });
        t.undoRepeatable = x('undo');
        t.keyboardQuit = function (e) {
          e.execCommand('clearSearch');
          M(e);
        };
        t.newline = x(function (e) {
          e.replaceSelection('\n', 'end');
        });
        t.gotoLine = function (e) {
          var t = b(e, true);
          if (t != null && t > 0) return e.setCursor(t - 1);
          P(e, 'Goto line', function (t) {
            var r;
            if (t && !isNaN((r = Number(t))) && r == (r | 0) && r > 0)
              e.setCursor(r - 1);
          });
        };
        t.indentRigidly = function (e) {
          e.indentSelection(b(e, true) || e.getOption('indentUnit'));
        };
        t.exchangePointAndMark = function (e) {
          e.setSelection(e.getCursor('head'), e.getCursor('anchor'));
        };
        t.quotedInsertTab = x('insertTab');
        t.universalArgument = function e(t) {
          t.state.emacsPrefixMap = true;
          t.addKeyMap(q);
          t.on('keyHandled', T);
          t.on('inputRead', T);
        };
        e.emacs = { kill: u, killRegion: C, repeated: x };
        var I = (e.keyMap.emacs = e.normalizeKeyMap({
          'Ctrl-W': 'killRegion',
          'Ctrl-K': 'killLineEmacs',
          'Alt-W': 'killRingSave',
          'Ctrl-Y': 'yank',
          'Alt-Y': 'yankPop',
          'Ctrl-Space': 'setMark',
          'Ctrl-Shift-2': 'setMark',
          'Ctrl-F': 'forwardChar',
          'Ctrl-B': 'backwardChar',
          Right: 'forwardChar',
          Left: 'backwardChar',
          'Ctrl-D': 'deleteChar',
          Delete: 'deleteForwardChar',
          'Ctrl-H': 'deleteBackwardChar',
          Backspace: 'deleteBackwardChar',
          'Alt-F': 'forwardWord',
          'Alt-B': 'backwardWord',
          'Alt-Right': 'forwardWord',
          'Alt-Left': 'backwardWord',
          'Alt-D': 'killWord',
          'Alt-Backspace': 'backwardKillWord',
          'Ctrl-N': 'nextLine',
          'Ctrl-P': 'previousLine',
          Down: 'nextLine',
          Up: 'previousLine',
          'Ctrl-A': 'goLineStart',
          'Ctrl-E': 'goLineEnd',
          End: 'goLineEnd',
          Home: 'goLineStart',
          'Alt-V': 'scrollDownCommand',
          'Ctrl-V': 'scrollUpCommand',
          PageUp: 'scrollUpCommand',
          PageDown: 'scrollDownCommand',
          'Ctrl-Up': 'backwardParagraph',
          'Ctrl-Down': 'forwardParagraph',
          'Alt-{': 'backwardParagraph',
          'Alt-}': 'forwardParagraph',
          'Alt-A': 'backwardSentence',
          'Alt-E': 'forwardSentence',
          'Alt-K': 'killSentence',
          'Ctrl-X Delete': 'backwardKillSentence',
          'Ctrl-Alt-K': 'killSexp',
          'Ctrl-Alt-Backspace': 'backwardKillSexp',
          'Ctrl-Alt-F': 'forwardSexp',
          'Ctrl-Alt-B': 'backwardSexp',
          'Shift-Ctrl-Alt-2': 'markSexp',
          'Ctrl-Alt-T': 'transposeSexps',
          'Ctrl-Alt-U': 'backwardUpList',
          'Alt-Space': 'justOneSpace',
          'Ctrl-O': 'openLine',
          'Ctrl-T': 'transposeCharsRepeatable',
          'Alt-C': 'capitalizeWord',
          'Alt-U': 'upcaseWord',
          'Alt-L': 'downcaseWord',
          'Alt-;': 'toggleComment',
          'Ctrl-/': 'undoRepeatable',
          'Shift-Ctrl--': 'undoRepeatable',
          'Ctrl-Z': 'undoRepeatable',
          'Cmd-Z': 'undoRepeatable',
          'Ctrl-X U': 'undoRepeatable',
          'Shift-Ctrl-Z': 'redo',
          'Shift-Alt-,': 'goDocStart',
          'Shift-Alt-.': 'goDocEnd',
          'Ctrl-S': 'findPersistentNext',
          'Ctrl-R': 'findPersistentPrev',
          'Ctrl-G': 'keyboardQuit',
          'Shift-Alt-5': 'replace',
          'Alt-/': 'autocomplete',
          Enter: 'newlineAndIndent',
          'Ctrl-J': 'newline',
          Tab: 'indentAuto',
          'Alt-G G': 'gotoLine',
          'Ctrl-X Tab': 'indentRigidly',
          'Ctrl-X Ctrl-X': 'exchangePointAndMark',
          'Ctrl-X Ctrl-S': 'save',
          'Ctrl-X Ctrl-W': 'save',
          'Ctrl-X S': 'saveAll',
          'Ctrl-X F': 'open',
          'Ctrl-X K': 'close',
          'Ctrl-X H': 'selectAll',
          'Ctrl-Q Tab': 'quotedInsertTab',
          'Ctrl-U': 'universalArgument',
          fallthrough: 'default',
        }));
        var q = { 'Ctrl-G': F };
        function O(e) {
          q[e] = function (t) {
            _(t, e);
          };
          I['Ctrl-' + e] = function (t) {
            _(t, e);
          };
          S['Ctrl-' + e] = true;
        }
        for (var j = 0; j < 10; ++j) O(String(j));
        O('-');
      });
    },
    23412: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(32095), r(4328));
        else {
        }
      })(function (e) {
        'use strict';
        var t = e.commands;
        var r = e.Pos;
        function n(t, n, i) {
          if (i < 0 && n.ch == 0) return t.clipPos(r(n.line - 1));
          var a = t.getLine(n.line);
          if (i > 0 && n.ch >= a.length) return t.clipPos(r(n.line + 1, 0));
          var o = 'start',
            l,
            s = n.ch;
          for (var c = s, u = i < 0 ? 0 : a.length, f = 0; c != u; c += i, f++) {
            var d = a.charAt(i < 0 ? c - 1 : c);
            var m = d != '_' && e.isWordChar(d) ? 'w' : 'o';
            if (m == 'w' && d.toUpperCase() == d) m = 'W';
            if (o == 'start') {
              if (m != 'o') {
                o = 'in';
                l = m;
              } else s = c + i;
            } else if (o == 'in') {
              if (l != m) {
                if (l == 'w' && m == 'W' && i < 0) c--;
                if (l == 'W' && m == 'w' && i > 0) {
                  if (c == s + 1) {
                    l = 'w';
                    continue;
                  } else c--;
                }
                break;
              }
            }
          }
          return r(n.line, c);
        }
        function i(e, t) {
          e.extendSelectionsBy(function (r) {
            if (e.display.shift || e.doc.extend || r.empty())
              return n(e.doc, r.head, t);
            else return t < 0 ? r.from() : r.to();
          });
        }
        t.goSubwordLeft = function (e) {
          i(e, -1);
        };
        t.goSubwordRight = function (e) {
          i(e, 1);
        };
        t.scrollLineUp = function (e) {
          var t = e.getScrollInfo();
          if (!e.somethingSelected()) {
            var r = e.lineAtHeight(t.top + t.clientHeight, 'local');
            if (e.getCursor().line >= r) e.execCommand('goLineUp');
          }
          e.scrollTo(null, t.top - e.defaultTextHeight());
        };
        t.scrollLineDown = function (e) {
          var t = e.getScrollInfo();
          if (!e.somethingSelected()) {
            var r = e.lineAtHeight(t.top, 'local') + 1;
            if (e.getCursor().line <= r) e.execCommand('goLineDown');
          }
          e.scrollTo(null, t.top + e.defaultTextHeight());
        };
        t.splitSelectionByLine = function (e) {
          var t = e.listSelections(),
            n = [];
          for (var i = 0; i < t.length; i++) {
            var a = t[i].from(),
              o = t[i].to();
            for (var l = a.line; l <= o.line; ++l)
              if (!(o.line > a.line && l == o.line && o.ch == 0))
                n.push({
                  anchor: l == a.line ? a : r(l, 0),
                  head: l == o.line ? o : r(l),
                });
          }
          e.setSelections(n, 0);
        };
        t.singleSelectionTop = function (e) {
          var t = e.listSelections()[0];
          e.setSelection(t.anchor, t.head, { scroll: false });
        };
        t.selectLine = function (e) {
          var t = e.listSelections(),
            n = [];
          for (var i = 0; i < t.length; i++) {
            var a = t[i];
            n.push({ anchor: r(a.from().line, 0), head: r(a.to().line + 1, 0) });
          }
          e.setSelections(n);
        };
        function a(t, n) {
          if (t.isReadOnly()) return e.Pass;
          t.operation(function () {
            var e = t.listSelections().length,
              i = [],
              a = -1;
            for (var o = 0; o < e; o++) {
              var l = t.listSelections()[o].head;
              if (l.line <= a) continue;
              var s = r(l.line + (n ? 0 : 1), 0);
              t.replaceRange('\n', s, null, '+insertLine');
              t.indentLine(s.line, null, true);
              i.push({ head: s, anchor: s });
              a = l.line + 1;
            }
            t.setSelections(i);
          });
          t.execCommand('indentAuto');
        }
        t.insertLineAfter = function (e) {
          return a(e, false);
        };
        t.insertLineBefore = function (e) {
          return a(e, true);
        };
        function o(t, n) {
          var i = n.ch,
            a = i,
            o = t.getLine(n.line);
          while (i && e.isWordChar(o.charAt(i - 1))) --i;
          while (a < o.length && e.isWordChar(o.charAt(a))) ++a;
          return { from: r(n.line, i), to: r(n.line, a), word: o.slice(i, a) };
        }
        t.selectNextOccurrence = function (t) {
          var n = t.getCursor('from'),
            i = t.getCursor('to');
          var a = t.state.sublimeFindFullWord == t.doc.sel;
          if (e.cmpPos(n, i) == 0) {
            var l = o(t, n);
            if (!l.word) return;
            t.setSelection(l.from, l.to);
            a = true;
          } else {
            var c = t.getRange(n, i);
            var u = a ? new RegExp('\\b' + c + '\\b') : c;
            var f = t.getSearchCursor(u, i);
            var d = f.findNext();
            if (!d) {
              f = t.getSearchCursor(u, r(t.firstLine(), 0));
              d = f.findNext();
            }
            if (!d || s(t.listSelections(), f.from(), f.to())) return;
            t.addSelection(f.from(), f.to());
          }
          if (a) t.state.sublimeFindFullWord = t.doc.sel;
        };
        t.skipAndSelectNextOccurrence = function (r) {
          var n = r.getCursor('anchor'),
            i = r.getCursor('head');
          t.selectNextOccurrence(r);
          if (e.cmpPos(n, i) != 0) {
            r.doc.setSelections(
              r.doc.listSelections().filter(function (e) {
                return e.anchor != n || e.head != i;
              })
            );
          }
        };
        function l(e, t) {
          var r = e.listSelections(),
            n = [];
          for (var i = 0; i < r.length; i++) {
            var a = r[i];
            var o = e.findPosV(a.anchor, t, 'line', a.anchor.goalColumn);
            var l = e.findPosV(a.head, t, 'line', a.head.goalColumn);
            o.goalColumn =
              a.anchor.goalColumn != null
                ? a.anchor.goalColumn
                : e.cursorCoords(a.anchor, 'div').left;
            l.goalColumn =
              a.head.goalColumn != null
                ? a.head.goalColumn
                : e.cursorCoords(a.head, 'div').left;
            var s = { anchor: o, head: l };
            n.push(a);
            n.push(s);
          }
          e.setSelections(n);
        }
        t.addCursorToPrevLine = function (e) {
          l(e, -1);
        };
        t.addCursorToNextLine = function (e) {
          l(e, 1);
        };
        function s(t, r, n) {
          for (var i = 0; i < t.length; i++)
            if (e.cmpPos(t[i].from(), r) == 0 && e.cmpPos(t[i].to(), n) == 0)
              return true;
          return false;
        }
        var c = '(){}[]';
        function u(t) {
          var n = t.listSelections(),
            i = [];
          for (var a = 0; a < n.length; a++) {
            var o = n[a],
              l = o.head,
              s = t.scanForBracket(l, -1);
            if (!s) return false;
            for (;;) {
              var u = t.scanForBracket(l, 1);
              if (!u) return false;
              if (u.ch == c.charAt(c.indexOf(s.ch) + 1)) {
                var f = r(s.pos.line, s.pos.ch + 1);
                if (e.cmpPos(f, o.from()) == 0 && e.cmpPos(u.pos, o.to()) == 0) {
                  s = t.scanForBracket(s.pos, -1);
                  if (!s) return false;
                } else {
                  i.push({ anchor: f, head: u.pos });
                  break;
                }
              }
              l = r(u.pos.line, u.pos.ch + 1);
            }
          }
          t.setSelections(i);
          return true;
        }
        t.selectScope = function (e) {
          u(e) || e.execCommand('selectAll');
        };
        t.selectBetweenBrackets = function (t) {
          if (!u(t)) return e.Pass;
        };
        function f(e) {
          return !e ? null : /\bpunctuation\b/.test(e) ? e : undefined;
        }
        t.goToBracket = function (t) {
          t.extendSelectionsBy(function (n) {
            var i = t.scanForBracket(n.head, 1, f(t.getTokenTypeAt(n.head)));
            if (i && e.cmpPos(i.pos, n.head) != 0) return i.pos;
            var a = t.scanForBracket(
              n.head,
              -1,
              f(t.getTokenTypeAt(r(n.head.line, n.head.ch + 1)))
            );
            return (a && r(a.pos.line, a.pos.ch + 1)) || n.head;
          });
        };
        t.swapLineUp = function (t) {
          if (t.isReadOnly()) return e.Pass;
          var n = t.listSelections(),
            i = [],
            a = t.firstLine() - 1,
            o = [];
          for (var l = 0; l < n.length; l++) {
            var s = n[l],
              c = s.from().line - 1,
              u = s.to().line;
            o.push({
              anchor: r(s.anchor.line - 1, s.anchor.ch),
              head: r(s.head.line - 1, s.head.ch),
            });
            if (s.to().ch == 0 && !s.empty()) --u;
            if (c > a) i.push(c, u);
            else if (i.length) i[i.length - 1] = u;
            a = u;
          }
          t.operation(function () {
            for (var e = 0; e < i.length; e += 2) {
              var n = i[e],
                a = i[e + 1];
              var l = t.getLine(n);
              t.replaceRange('', r(n, 0), r(n + 1, 0), '+swapLine');
              if (a > t.lastLine())
                t.replaceRange('\n' + l, r(t.lastLine()), null, '+swapLine');
              else t.replaceRange(l + '\n', r(a, 0), null, '+swapLine');
            }
            t.setSelections(o);
            t.scrollIntoView();
          });
        };
        t.swapLineDown = function (t) {
          if (t.isReadOnly()) return e.Pass;
          var n = t.listSelections(),
            i = [],
            a = t.lastLine() + 1;
          for (var o = n.length - 1; o >= 0; o--) {
            var l = n[o],
              s = l.to().line + 1,
              c = l.from().line;
            if (l.to().ch == 0 && !l.empty()) s--;
            if (s < a) i.push(s, c);
            else if (i.length) i[i.length - 1] = c;
            a = c;
          }
          t.operation(function () {
            for (var e = i.length - 2; e >= 0; e -= 2) {
              var n = i[e],
                a = i[e + 1];
              var o = t.getLine(n);
              if (n == t.lastLine()) t.replaceRange('', r(n - 1), r(n), '+swapLine');
              else t.replaceRange('', r(n, 0), r(n + 1, 0), '+swapLine');
              t.replaceRange(o + '\n', r(a, 0), null, '+swapLine');
            }
            t.scrollIntoView();
          });
        };
        t.toggleCommentIndented = function (e) {
          e.toggleComment({ indent: true });
        };
        t.joinLines = function (e) {
          var t = e.listSelections(),
            n = [];
          for (var i = 0; i < t.length; i++) {
            var a = t[i],
              o = a.from();
            var l = o.line,
              s = a.to().line;
            while (i < t.length - 1 && t[i + 1].from().line == s) s = t[++i].to().line;
            n.push({ start: l, end: s, anchor: !a.empty() && o });
          }
          e.operation(function () {
            var t = 0,
              i = [];
            for (var a = 0; a < n.length; a++) {
              var o = n[a];
              var l = o.anchor && r(o.anchor.line - t, o.anchor.ch),
                s;
              for (var c = o.start; c <= o.end; c++) {
                var u = c - t;
                if (c == o.end) s = r(u, e.getLine(u).length + 1);
                if (u < e.lastLine()) {
                  e.replaceRange(
                    ' ',
                    r(u),
                    r(u + 1, /^\s*/.exec(e.getLine(u + 1))[0].length)
                  );
                  ++t;
                }
              }
              i.push({ anchor: l || s, head: s });
            }
            e.setSelections(i, 0);
          });
        };
        t.duplicateLine = function (e) {
          e.operation(function () {
            var t = e.listSelections().length;
            for (var n = 0; n < t; n++) {
              var i = e.listSelections()[n];
              if (i.empty())
                e.replaceRange(e.getLine(i.head.line) + '\n', r(i.head.line, 0));
              else e.replaceRange(e.getRange(i.from(), i.to()), i.from());
            }
            e.scrollIntoView();
          });
        };
        function d(t, n, i) {
          if (t.isReadOnly()) return e.Pass;
          var a = t.listSelections(),
            o = [],
            l;
          for (var s = 0; s < a.length; s++) {
            var c = a[s];
            if (c.empty()) continue;
            var u = c.from().line,
              f = c.to().line;
            while (s < a.length - 1 && a[s + 1].from().line == f) f = a[++s].to().line;
            if (!a[s].to().ch) f--;
            o.push(u, f);
          }
          if (o.length) l = true;
          else o.push(t.firstLine(), t.lastLine());
          t.operation(function () {
            var e = [];
            for (var a = 0; a < o.length; a += 2) {
              var s = o[a],
                c = o[a + 1];
              var u = r(s, 0),
                f = r(c);
              var d = t.getRange(u, f, false);
              if (n)
                d.sort(function (e, t) {
                  return e < t ? -i : e == t ? 0 : i;
                });
              else
                d.sort(function (e, t) {
                  var r = e.toUpperCase(),
                    n = t.toUpperCase();
                  if (r != n) {
                    e = r;
                    t = n;
                  }
                  return e < t ? -i : e == t ? 0 : i;
                });
              t.replaceRange(d, u, f);
              if (l) e.push({ anchor: u, head: r(c + 1, 0) });
            }
            if (l) t.setSelections(e, 0);
          });
        }
        t.sortLines = function (e) {
          d(e, true, 1);
        };
        t.reverseSortLines = function (e) {
          d(e, true, -1);
        };
        t.sortLinesInsensitive = function (e) {
          d(e, false, 1);
        };
        t.reverseSortLinesInsensitive = function (e) {
          d(e, false, -1);
        };
        t.nextBookmark = function (e) {
          var t = e.state.sublimeBookmarks;
          if (t)
            while (t.length) {
              var r = t.shift();
              var n = r.find();
              if (n) {
                t.push(r);
                return e.setSelection(n.from, n.to);
              }
            }
        };
        t.prevBookmark = function (e) {
          var t = e.state.sublimeBookmarks;
          if (t)
            while (t.length) {
              t.unshift(t.pop());
              var r = t[t.length - 1].find();
              if (!r) t.pop();
              else return e.setSelection(r.from, r.to);
            }
        };
        t.toggleBookmark = function (e) {
          var t = e.listSelections();
          var r = e.state.sublimeBookmarks || (e.state.sublimeBookmarks = []);
          for (var n = 0; n < t.length; n++) {
            var i = t[n].from(),
              a = t[n].to();
            var o = t[n].empty() ? e.findMarksAt(i) : e.findMarks(i, a);
            for (var l = 0; l < o.length; l++) {
              if (o[l].sublimeBookmark) {
                o[l].clear();
                for (var s = 0; s < r.length; s++) if (r[s] == o[l]) r.splice(s--, 1);
                break;
              }
            }
            if (l == o.length)
              r.push(
                e.markText(i, a, { sublimeBookmark: true, clearWhenEmpty: false })
              );
          }
        };
        t.clearBookmarks = function (e) {
          var t = e.state.sublimeBookmarks;
          if (t) for (var r = 0; r < t.length; r++) t[r].clear();
          t.length = 0;
        };
        t.selectBookmarks = function (e) {
          var t = e.state.sublimeBookmarks,
            r = [];
          if (t)
            for (var n = 0; n < t.length; n++) {
              var i = t[n].find();
              if (!i) t.splice(n--, 0);
              else r.push({ anchor: i.from, head: i.to });
            }
          if (r.length) e.setSelections(r, 0);
        };
        function m(t, r) {
          t.operation(function () {
            var n = t.listSelections(),
              i = [],
              a = [];
            for (var l = 0; l < n.length; l++) {
              var s = n[l];
              if (s.empty()) {
                i.push(l);
                a.push('');
              } else a.push(r(t.getRange(s.from(), s.to())));
            }
            t.replaceSelections(a, 'around', 'case');
            for (var l = i.length - 1, c; l >= 0; l--) {
              var s = n[i[l]];
              if (c && e.cmpPos(s.head, c) > 0) continue;
              var u = o(t, s.head);
              c = u.from;
              t.replaceRange(r(u.word), u.from, u.to);
            }
          });
        }
        t.smartBackspace = function (t) {
          if (t.somethingSelected()) return e.Pass;
          t.operation(function () {
            var n = t.listSelections();
            var i = t.getOption('indentUnit');
            for (var a = n.length - 1; a >= 0; a--) {
              var o = n[a].head;
              var l = t.getRange({ line: o.line, ch: 0 }, o);
              var s = e.countColumn(l, null, t.getOption('tabSize'));
              var c = t.findPosH(o, -1, 'char', false);
              if (l && !/\S/.test(l) && s % i == 0) {
                var u = new r(o.line, e.findColumn(l, s - i, i));
                if (u.ch != o.ch) c = u;
              }
              t.replaceRange('', c, o, '+delete');
            }
          });
        };
        t.delLineRight = function (e) {
          e.operation(function () {
            var t = e.listSelections();
            for (var n = t.length - 1; n >= 0; n--)
              e.replaceRange('', t[n].anchor, r(t[n].to().line), '+delete');
            e.scrollIntoView();
          });
        };
        t.upcaseAtCursor = function (e) {
          m(e, function (e) {
            return e.toUpperCase();
          });
        };
        t.downcaseAtCursor = function (e) {
          m(e, function (e) {
            return e.toLowerCase();
          });
        };
        t.setSublimeMark = function (e) {
          if (e.state.sublimeMark) e.state.sublimeMark.clear();
          e.state.sublimeMark = e.setBookmark(e.getCursor());
        };
        t.selectToSublimeMark = function (e) {
          var t = e.state.sublimeMark && e.state.sublimeMark.find();
          if (t) e.setSelection(e.getCursor(), t);
        };
        t.deleteToSublimeMark = function (t) {
          var r = t.state.sublimeMark && t.state.sublimeMark.find();
          if (r) {
            var n = t.getCursor(),
              i = r;
            if (e.cmpPos(n, i) > 0) {
              var a = i;
              i = n;
              n = a;
            }
            t.state.sublimeKilled = t.getRange(n, i);
            t.replaceRange('', n, i);
          }
        };
        t.swapWithSublimeMark = function (e) {
          var t = e.state.sublimeMark && e.state.sublimeMark.find();
          if (t) {
            e.state.sublimeMark.clear();
            e.state.sublimeMark = e.setBookmark(e.getCursor());
            e.setCursor(t);
          }
        };
        t.sublimeYank = function (e) {
          if (e.state.sublimeKilled != null)
            e.replaceSelection(e.state.sublimeKilled, null, 'paste');
        };
        t.showInCenter = function (e) {
          var t = e.cursorCoords(null, 'local');
          e.scrollTo(null, (t.top + t.bottom) / 2 - e.getScrollInfo().clientHeight / 2);
        };
        function p(t) {
          var r = t.getCursor('from'),
            n = t.getCursor('to');
          if (e.cmpPos(r, n) == 0) {
            var i = o(t, r);
            if (!i.word) return;
            r = i.from;
            n = i.to;
          }
          return { from: r, to: n, query: t.getRange(r, n), word: i };
        }
        function h(e, t) {
          var n = p(e);
          if (!n) return;
          var i = n.query;
          var a = e.getSearchCursor(i, t ? n.to : n.from);
          if (t ? a.findNext() : a.findPrevious()) {
            e.setSelection(a.from(), a.to());
          } else {
            a = e.getSearchCursor(
              i,
              t ? r(e.firstLine(), 0) : e.clipPos(r(e.lastLine()))
            );
            if (t ? a.findNext() : a.findPrevious()) e.setSelection(a.from(), a.to());
            else if (n.word) e.setSelection(n.from, n.to);
          }
        }
        t.findUnder = function (e) {
          h(e, true);
        };
        t.findUnderPrevious = function (e) {
          h(e, false);
        };
        t.findAllUnder = function (e) {
          var t = p(e);
          if (!t) return;
          var r = e.getSearchCursor(t.query);
          var n = [];
          var i = -1;
          while (r.findNext()) {
            n.push({ anchor: r.from(), head: r.to() });
            if (r.from().line <= t.from.line && r.from().ch <= t.from.ch) i++;
          }
          e.setSelections(n, i);
        };
        var g = e.keyMap;
        g.macSublime = {
          'Cmd-Left': 'goLineStartSmart',
          'Shift-Tab': 'indentLess',
          'Shift-Ctrl-K': 'deleteLine',
          'Alt-Q': 'wrapLines',
          'Ctrl-Left': 'goSubwordLeft',
          'Ctrl-Right': 'goSubwordRight',
          'Ctrl-Alt-Up': 'scrollLineUp',
          'Ctrl-Alt-Down': 'scrollLineDown',
          'Cmd-L': 'selectLine',
          'Shift-Cmd-L': 'splitSelectionByLine',
          Esc: 'singleSelectionTop',
          'Cmd-Enter': 'insertLineAfter',
          'Shift-Cmd-Enter': 'insertLineBefore',
          'Cmd-D': 'selectNextOccurrence',
          'Shift-Cmd-Space': 'selectScope',
          'Shift-Cmd-M': 'selectBetweenBrackets',
          'Cmd-M': 'goToBracket',
          'Cmd-Ctrl-Up': 'swapLineUp',
          'Cmd-Ctrl-Down': 'swapLineDown',
          'Cmd-/': 'toggleCommentIndented',
          'Cmd-J': 'joinLines',
          'Shift-Cmd-D': 'duplicateLine',
          F5: 'sortLines',
          'Shift-F5': 'reverseSortLines',
          'Cmd-F5': 'sortLinesInsensitive',
          'Shift-Cmd-F5': 'reverseSortLinesInsensitive',
          F2: 'nextBookmark',
          'Shift-F2': 'prevBookmark',
          'Cmd-F2': 'toggleBookmark',
          'Shift-Cmd-F2': 'clearBookmarks',
          'Alt-F2': 'selectBookmarks',
          Backspace: 'smartBackspace',
          'Cmd-K Cmd-D': 'skipAndSelectNextOccurrence',
          'Cmd-K Cmd-K': 'delLineRight',
          'Cmd-K Cmd-U': 'upcaseAtCursor',
          'Cmd-K Cmd-L': 'downcaseAtCursor',
          'Cmd-K Cmd-Space': 'setSublimeMark',
          'Cmd-K Cmd-A': 'selectToSublimeMark',
          'Cmd-K Cmd-W': 'deleteToSublimeMark',
          'Cmd-K Cmd-X': 'swapWithSublimeMark',
          'Cmd-K Cmd-Y': 'sublimeYank',
          'Cmd-K Cmd-C': 'showInCenter',
          'Cmd-K Cmd-G': 'clearBookmarks',
          'Cmd-K Cmd-Backspace': 'delLineLeft',
          'Cmd-K Cmd-1': 'foldAll',
          'Cmd-K Cmd-0': 'unfoldAll',
          'Cmd-K Cmd-J': 'unfoldAll',
          'Ctrl-Shift-Up': 'addCursorToPrevLine',
          'Ctrl-Shift-Down': 'addCursorToNextLine',
          'Cmd-F3': 'findUnder',
          'Shift-Cmd-F3': 'findUnderPrevious',
          'Alt-F3': 'findAllUnder',
          'Shift-Cmd-[': 'fold',
          'Shift-Cmd-]': 'unfold',
          'Cmd-I': 'findIncremental',
          'Shift-Cmd-I': 'findIncrementalReverse',
          'Cmd-H': 'replace',
          F3: 'findNext',
          'Shift-F3': 'findPrev',
          fallthrough: 'macDefault',
        };
        e.normalizeKeyMap(g.macSublime);
        g.pcSublime = {
          'Shift-Tab': 'indentLess',
          'Shift-Ctrl-K': 'deleteLine',
          'Alt-Q': 'wrapLines',
          'Ctrl-T': 'transposeChars',
          'Alt-Left': 'goSubwordLeft',
          'Alt-Right': 'goSubwordRight',
          'Ctrl-Up': 'scrollLineUp',
          'Ctrl-Down': 'scrollLineDown',
          'Ctrl-L': 'selectLine',
          'Shift-Ctrl-L': 'splitSelectionByLine',
          Esc: 'singleSelectionTop',
          'Ctrl-Enter': 'insertLineAfter',
          'Shift-Ctrl-Enter': 'insertLineBefore',
          'Ctrl-D': 'selectNextOccurrence',
          'Shift-Ctrl-Space': 'selectScope',
          'Shift-Ctrl-M': 'selectBetweenBrackets',
          'Ctrl-M': 'goToBracket',
          'Shift-Ctrl-Up': 'swapLineUp',
          'Shift-Ctrl-Down': 'swapLineDown',
          'Ctrl-/': 'toggleCommentIndented',
          'Ctrl-J': 'joinLines',
          'Shift-Ctrl-D': 'duplicateLine',
          F9: 'sortLines',
          'Shift-F9': 'reverseSortLines',
          'Ctrl-F9': 'sortLinesInsensitive',
          'Shift-Ctrl-F9': 'reverseSortLinesInsensitive',
          F2: 'nextBookmark',
          'Shift-F2': 'prevBookmark',
          'Ctrl-F2': 'toggleBookmark',
          'Shift-Ctrl-F2': 'clearBookmarks',
          'Alt-F2': 'selectBookmarks',
          Backspace: 'smartBackspace',
          'Ctrl-K Ctrl-D': 'skipAndSelectNextOccurrence',
          'Ctrl-K Ctrl-K': 'delLineRight',
          'Ctrl-K Ctrl-U': 'upcaseAtCursor',
          'Ctrl-K Ctrl-L': 'downcaseAtCursor',
          'Ctrl-K Ctrl-Space': 'setSublimeMark',
          'Ctrl-K Ctrl-A': 'selectToSublimeMark',
          'Ctrl-K Ctrl-W': 'deleteToSublimeMark',
          'Ctrl-K Ctrl-X': 'swapWithSublimeMark',
          'Ctrl-K Ctrl-Y': 'sublimeYank',
          'Ctrl-K Ctrl-C': 'showInCenter',
          'Ctrl-K Ctrl-G': 'clearBookmarks',
          'Ctrl-K Ctrl-Backspace': 'delLineLeft',
          'Ctrl-K Ctrl-1': 'foldAll',
          'Ctrl-K Ctrl-0': 'unfoldAll',
          'Ctrl-K Ctrl-J': 'unfoldAll',
          'Ctrl-Alt-Up': 'addCursorToPrevLine',
          'Ctrl-Alt-Down': 'addCursorToNextLine',
          'Ctrl-F3': 'findUnder',
          'Shift-Ctrl-F3': 'findUnderPrevious',
          'Alt-F3': 'findAllUnder',
          'Shift-Ctrl-[': 'fold',
          'Shift-Ctrl-]': 'unfold',
          'Ctrl-I': 'findIncremental',
          'Shift-Ctrl-I': 'findIncrementalReverse',
          'Ctrl-H': 'replace',
          F3: 'findNext',
          'Shift-F3': 'findPrev',
          fallthrough: 'pcDefault',
        };
        e.normalizeKeyMap(g.pcSublime);
        var v = g.default == g.macDefault;
        g.sublime = v ? g.macSublime : g.pcSublime;
      });
    },
    99762: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e, t, r, n, i, a) {
          this.indented = e;
          this.column = t;
          this.type = r;
          this.info = n;
          this.align = i;
          this.prev = a;
        }
        function r(e, r, n, i) {
          var a = e.indented;
          if (e.context && e.context.type == 'statement' && n != 'statement')
            a = e.context.indented;
          return (e.context = new t(a, r, n, i, null, e.context));
        }
        function n(e) {
          var t = e.context.type;
          if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
          return (e.context = e.context.prev);
        }
        function i(e, t, r) {
          if (t.prevToken == 'variable' || t.prevToken == 'type') return true;
          if (/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, r))) return true;
          if (t.typeAtEndOfLine && e.column() == e.indentation()) return true;
        }
        function a(e) {
          for (;;) {
            if (!e || e.type == 'top') return true;
            if (e.type == '}' && e.prev.info != 'namespace') return false;
            e = e.prev;
          }
        }
        e.defineMode('clike', function (o, s) {
          var c = o.indentUnit,
            u = s.statementIndentUnit || c,
            f = s.dontAlignCalls,
            d = s.keywords || {},
            m = s.types || {},
            p = s.builtin || {},
            h = s.blockKeywords || {},
            g = s.defKeywords || {},
            v = s.atoms || {},
            b = s.hooks || {},
            x = s.multiLineStrings,
            k = s.indentStatements !== false,
            y = s.indentSwitch !== false,
            w = s.namespaceSeparator,
            C = s.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
            _ = s.numberStart || /[\d\.]/,
            S =
              s.number ||
              /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
            L = s.isOperatorChar || /[+\-*&%=<>!?|\/]/,
            F = s.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
            A = s.isReservedIdentifier || false;
          var T, M;
          function E(e, t) {
            var r = e.next();
            if (b[r]) {
              var n = b[r](e, t);
              if (n !== false) return n;
            }
            if (r == '"' || r == "'") {
              t.tokenize = P(r);
              return t.tokenize(e, t);
            }
            if (_.test(r)) {
              e.backUp(1);
              if (e.match(S)) return 'number';
              e.next();
            }
            if (C.test(r)) {
              T = r;
              return null;
            }
            if (r == '/') {
              if (e.eat('*')) {
                t.tokenize = D;
                return D(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (L.test(r)) {
              while (!e.match(/^\/[\/*]/, false) && e.eat(L)) {}
              return 'operator';
            }
            e.eatWhile(F);
            if (w) while (e.match(w)) e.eatWhile(F);
            var i = e.current();
            if (l(d, i)) {
              if (l(h, i)) T = 'newstatement';
              if (l(g, i)) M = true;
              return 'keyword';
            }
            if (l(m, i)) return 'type';
            if (l(p, i) || (A && A(i))) {
              if (l(h, i)) T = 'newstatement';
              return 'builtin';
            }
            if (l(v, i)) return 'atom';
            return 'variable';
          }
          function P(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !(n || x)) r.tokenize = null;
              return 'string';
            };
          }
          function D(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = null;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function z(e, t) {
            if (s.typeFirstDefinitions && e.eol() && a(t.context))
              t.typeAtEndOfLine = i(e, t, e.pos);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new t((e || 0) - c, 0, 'top', null, false),
                indented: 0,
                startOfLine: true,
                prevToken: null,
              };
            },
            token: function (e, t) {
              var o = t.context;
              if (e.sol()) {
                if (o.align == null) o.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) {
                z(e, t);
                return null;
              }
              T = M = null;
              var l = (t.tokenize || E)(e, t);
              if (l == 'comment' || l == 'meta') return l;
              if (o.align == null) o.align = true;
              if (
                T == ';' ||
                T == ':' ||
                (T == ',' && e.match(/^\s*(?:\/\/.*)?$/, false))
              )
                while (t.context.type == 'statement') n(t);
              else if (T == '{') r(t, e.column(), '}');
              else if (T == '[') r(t, e.column(), ']');
              else if (T == '(') r(t, e.column(), ')');
              else if (T == '}') {
                while (o.type == 'statement') o = n(t);
                if (o.type == '}') o = n(t);
                while (o.type == 'statement') o = n(t);
              } else if (T == o.type) n(t);
              else if (
                k &&
                (((o.type == '}' || o.type == 'top') && T != ';') ||
                  (o.type == 'statement' && T == 'newstatement'))
              ) {
                r(t, e.column(), 'statement', e.current());
              }
              if (
                l == 'variable' &&
                (t.prevToken == 'def' ||
                  (s.typeFirstDefinitions &&
                    i(e, t, e.start) &&
                    a(t.context) &&
                    e.match(/^\s*\(/, false)))
              )
                l = 'def';
              if (b.token) {
                var c = b.token(e, t, l);
                if (c !== undefined) l = c;
              }
              if (l == 'def' && s.styleDefs === false) l = 'variable';
              t.startOfLine = false;
              t.prevToken = M ? 'def' : l || T;
              z(e, t);
              return l;
            },
            indent: function (t, r) {
              if ((t.tokenize != E && t.tokenize != null) || t.typeAtEndOfLine)
                return e.Pass;
              var n = t.context,
                i = r && r.charAt(0);
              var a = i == n.type;
              if (n.type == 'statement' && i == '}') n = n.prev;
              if (s.dontIndentStatements)
                while (n.type == 'statement' && s.dontIndentStatements.test(n.info))
                  n = n.prev;
              if (b.indent) {
                var o = b.indent(t, n, r, c);
                if (typeof o == 'number') return o;
              }
              var l = n.prev && n.prev.info == 'switch';
              if (s.allmanIndentation && /[{(]/.test(i)) {
                while (n.type != 'top' && n.type != '}') n = n.prev;
                return n.indented;
              }
              if (n.type == 'statement') return n.indented + (i == '{' ? 0 : u);
              if (n.align && (!f || n.type != ')')) return n.column + (a ? 0 : 1);
              if (n.type == ')' && !a) return n.indented + u;
              return (
                n.indented +
                (a ? 0 : c) +
                (!a && l && !/^(?:case|default)\b/.test(r) ? c : 0)
              );
            },
            electricInput: y ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            blockCommentContinue: ' * ',
            lineComment: '//',
            fold: 'brace',
          };
        });
        function o(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        function l(e, t) {
          if (typeof e === 'function') {
            return e(t);
          } else {
            return e.propertyIsEnumerable(t);
          }
        }
        var s =
          'auto if break case register continue return default do sizeof ' +
          'static else struct switch extern typedef union for goto while enum const ' +
          'volatile inline restrict asm fortran';
        var c =
          'alignas alignof and and_eq audit axiom bitand bitor catch ' +
          'class compl concept constexpr const_cast decltype delete dynamic_cast ' +
          'explicit export final friend import module mutable namespace new noexcept ' +
          'not not_eq operator or or_eq override private protected public ' +
          'reinterpret_cast requires static_assert static_cast template this ' +
          'thread_local throw try typeid typename using virtual xor xor_eq';
        var u =
          'bycopy byref in inout oneway out self super atomic nonatomic retain copy ' +
          'readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd ' +
          '@interface @implementation @end @protocol @encode @property @synthesize @dynamic @class ' +
          '@public @package @private @protected @required @optional @try @catch @finally @import ' +
          '@selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available';
        var f =
          'FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION ' +
          ' NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER ' +
          'NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION ' +
          'NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT';
        var d = o('int long char short double float unsigned signed ' + 'void bool');
        var m = o('SEL instancetype id Class Protocol BOOL');
        function p(e) {
          return l(d, e) || /.+_t$/.test(e);
        }
        function h(e) {
          return p(e) || l(m, e);
        }
        var g = 'case do else for if switch while struct enum union';
        var v = 'struct enum union';
        function b(e, t) {
          if (!t.startOfLine) return false;
          for (var r, n = null; (r = e.peek()); ) {
            if (r == '\\' && e.match(/^.$/)) {
              n = b;
              break;
            } else if (r == '/' && e.match(/^\/[\/\*]/, false)) {
              break;
            }
            e.next();
          }
          t.tokenize = n;
          return 'meta';
        }
        function x(e, t) {
          if (t.prevToken == 'type') return 'type';
          return false;
        }
        function k(e) {
          if (!e || e.length < 2) return false;
          if (e[0] != '_') return false;
          return e[1] == '_' || e[1] !== e[1].toLowerCase();
        }
        function y(e) {
          e.eatWhile(/[\w\.']/);
          return 'number';
        }
        function w(e, t) {
          e.backUp(1);
          if (e.match(/^(?:R|u8R|uR|UR|LR)/)) {
            var r = e.match(/^"([^\s\\()]{0,16})\(/);
            if (!r) {
              return false;
            }
            t.cpp11RawStringDelim = r[1];
            t.tokenize = S;
            return S(e, t);
          }
          if (e.match(/^(?:u8|u|U|L)/)) {
            if (e.match(/^["']/, false)) {
              return 'string';
            }
            return false;
          }
          e.next();
          return false;
        }
        function C(e) {
          var t = /(\w+)::~?(\w+)$/.exec(e);
          return t && t[1] == t[2];
        }
        function _(e, t) {
          var r;
          while ((r = e.next()) != null) {
            if (r == '"' && !e.eat('"')) {
              t.tokenize = null;
              break;
            }
          }
          return 'string';
        }
        function S(e, t) {
          var r = t.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&');
          var n = e.match(new RegExp('.*?\\)' + r + '"'));
          if (n) t.tokenize = null;
          else e.skipToEnd();
          return 'string';
        }
        function L(t, r) {
          if (typeof t == 'string') t = [t];
          var n = [];
          function i(e) {
            if (e) for (var t in e) if (e.hasOwnProperty(t)) n.push(t);
          }
          i(r.keywords);
          i(r.types);
          i(r.builtin);
          i(r.atoms);
          if (n.length) {
            r.helperType = t[0];
            e.registerHelper('hintWords', t[0], n);
          }
          for (var a = 0; a < t.length; ++a) e.defineMIME(t[a], r);
        }
        L(['text/x-csrc', 'text/x-c', 'text/x-chdr'], {
          name: 'clike',
          keywords: o(s),
          types: p,
          blockKeywords: o(g),
          defKeywords: o(v),
          typeFirstDefinitions: true,
          atoms: o('NULL true false'),
          isReservedIdentifier: k,
          hooks: { '#': b, '*': x },
          modeProps: { fold: ['brace', 'include'] },
        });
        L(['text/x-c++src', 'text/x-c++hdr'], {
          name: 'clike',
          keywords: o(s + ' ' + c),
          types: p,
          blockKeywords: o(g + ' class try catch'),
          defKeywords: o(v + ' class namespace'),
          typeFirstDefinitions: true,
          atoms: o('true false NULL nullptr'),
          dontIndentStatements: /^template$/,
          isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
          isReservedIdentifier: k,
          hooks: {
            '#': b,
            '*': x,
            u: w,
            U: w,
            L: w,
            R: w,
            0: y,
            1: y,
            2: y,
            3: y,
            4: y,
            5: y,
            6: y,
            7: y,
            8: y,
            9: y,
            token: function (e, t, r) {
              if (
                r == 'variable' &&
                e.peek() == '(' &&
                (t.prevToken == ';' || t.prevToken == null || t.prevToken == '}') &&
                C(e.current())
              )
                return 'def';
            },
          },
          namespaceSeparator: '::',
          modeProps: { fold: ['brace', 'include'] },
        });
        L('text/x-java', {
          name: 'clike',
          keywords: o(
            'abstract assert break case catch class const continue default ' +
              'do else enum extends final finally for goto if implements import ' +
              'instanceof interface native new package private protected public ' +
              'return static strictfp super switch synchronized this throw throws transient ' +
              'try volatile while @interface'
          ),
          types: o(
            'byte short int long float double boolean char void Boolean Byte Character Double Float ' +
              'Integer Long Number Object Short String StringBuffer StringBuilder Void'
          ),
          blockKeywords: o('catch class do else finally for if switch try while'),
          defKeywords: o('class interface enum @interface'),
          typeFirstDefinitions: true,
          atoms: o('true false null'),
          number:
            /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
          hooks: {
            '@': function (e) {
              if (e.match('interface', false)) return false;
              e.eatWhile(/[\w\$_]/);
              return 'meta';
            },
          },
          modeProps: { fold: ['brace', 'import'] },
        });
        L('text/x-csharp', {
          name: 'clike',
          keywords: o(
            'abstract as async await base break case catch checked class const continue' +
              ' default delegate do else enum event explicit extern finally fixed for' +
              ' foreach goto if implicit in interface internal is lock namespace new' +
              ' operator out override params private protected public readonly ref return sealed' +
              ' sizeof stackalloc static struct switch this throw try typeof unchecked' +
              ' unsafe using virtual void volatile while add alias ascending descending dynamic from get' +
              ' global group into join let orderby partial remove select set value var yield'
          ),
          types: o(
            'Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func' +
              ' Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32' +
              ' UInt64 bool byte char decimal double short int long object' +
              ' sbyte float string ushort uint ulong'
          ),
          blockKeywords: o(
            'catch class do else finally for foreach if struct switch try while'
          ),
          defKeywords: o('class interface namespace struct var'),
          typeFirstDefinitions: true,
          atoms: o('true false null'),
          hooks: {
            '@': function (e, t) {
              if (e.eat('"')) {
                t.tokenize = _;
                return _(e, t);
              }
              e.eatWhile(/[\w\$_]/);
              return 'meta';
            },
          },
        });
        function F(e, t) {
          var r = false;
          while (!e.eol()) {
            if (!r && e.match('"""')) {
              t.tokenize = null;
              break;
            }
            r = e.next() == '\\' && !r;
          }
          return 'string';
        }
        function A(e) {
          return function (t, r) {
            var n;
            while ((n = t.next())) {
              if (n == '*' && t.eat('/')) {
                if (e == 1) {
                  r.tokenize = null;
                  break;
                } else {
                  r.tokenize = A(e - 1);
                  return r.tokenize(t, r);
                }
              } else if (n == '/' && t.eat('*')) {
                r.tokenize = A(e + 1);
                return r.tokenize(t, r);
              }
            }
            return 'comment';
          };
        }
        L('text/x-scala', {
          name: 'clike',
          keywords: o(
            'abstract case catch class def do else extends final finally for forSome if ' +
              'implicit import lazy match new null object override package private protected return ' +
              'sealed super this throw trait try type val var while with yield _ ' +
              'assert assume require print println printf readLine readBoolean readByte readShort ' +
              'readChar readInt readLong readFloat readDouble'
          ),
          types: o(
            'AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either ' +
              'Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable ' +
              'Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering ' +
              'Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder ' +
              'StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector ' +
              'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable ' +
              'Compiler Double Exception Float Integer Long Math Number Object Package Pair Process ' +
              'Runtime Runnable SecurityManager Short StackTraceElement StrictMath String ' +
              'StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void'
          ),
          multiLineStrings: true,
          blockKeywords: o(
            'catch class enum do else finally for forSome if match switch try while'
          ),
          defKeywords: o('class enum def object package trait type val var'),
          atoms: o('true false null'),
          indentStatements: false,
          indentSwitch: false,
          isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
          hooks: {
            '@': function (e) {
              e.eatWhile(/[\w\$_]/);
              return 'meta';
            },
            '"': function (e, t) {
              if (!e.match('""')) return false;
              t.tokenize = F;
              return t.tokenize(e, t);
            },
            "'": function (e) {
              e.eatWhile(/[\w\$_\xa1-\uffff]/);
              return 'atom';
            },
            '=': function (e, r) {
              var n = r.context;
              if (n.type == '}' && n.align && e.eat('>')) {
                r.context = new t(n.indented, n.column, n.type, n.info, null, n.prev);
                return 'operator';
              } else {
                return false;
              }
            },
            '/': function (e, t) {
              if (!e.eat('*')) return false;
              t.tokenize = A(1);
              return t.tokenize(e, t);
            },
          },
          modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } },
        });
        function T(e) {
          return function (t, r) {
            var n = false,
              i,
              a = false;
            while (!t.eol()) {
              if (!e && !n && t.match('"')) {
                a = true;
                break;
              }
              if (e && t.match('"""')) {
                a = true;
                break;
              }
              i = t.next();
              if (!n && i == '$' && t.match('{')) t.skipTo('}');
              n = !n && i == '\\' && !e;
            }
            if (a || !e) r.tokenize = null;
            return 'string';
          };
        }
        L('text/x-kotlin', {
          name: 'clike',
          keywords: o(
            'package as typealias class interface this super val operator ' +
              'var fun for is in This throw return annotation ' +
              'break continue object if else while do try when !in !is as? ' +
              'file import where by get set abstract enum open inner override private public internal ' +
              'protected catch finally out final vararg reified dynamic companion constructor init ' +
              'sealed field property receiver param sparam lateinit data inline noinline tailrec ' +
              'external annotation crossinline const operator infix suspend actual expect setparam value'
          ),
          types: o(
            'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable ' +
              'Compiler Double Exception Float Integer Long Math Number Object Package Pair Process ' +
              'Runtime Runnable SecurityManager Short StackTraceElement StrictMath String ' +
              'StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ' +
              'ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy ' +
              'LazyThreadSafetyMode LongArray Nothing ShortArray Unit'
          ),
          intendSwitch: false,
          indentStatements: false,
          multiLineStrings: true,
          number:
            /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
          blockKeywords: o('catch class do else finally for if where try while enum'),
          defKeywords: o('class val var object interface fun'),
          atoms: o('true false null this'),
          hooks: {
            '@': function (e) {
              e.eatWhile(/[\w\$_]/);
              return 'meta';
            },
            '*': function (e, t) {
              return t.prevToken == '.' ? 'variable' : 'operator';
            },
            '"': function (e, t) {
              t.tokenize = T(e.match('""'));
              return t.tokenize(e, t);
            },
            '/': function (e, t) {
              if (!e.eat('*')) return false;
              t.tokenize = A(1);
              return t.tokenize(e, t);
            },
            indent: function (e, t, r, n) {
              var i = r && r.charAt(0);
              if ((e.prevToken == '}' || e.prevToken == ')') && r == '')
                return e.indented;
              if (
                (e.prevToken == 'operator' && r != '}' && e.context.type != '}') ||
                (e.prevToken == 'variable' && i == '.') ||
                ((e.prevToken == '}' || e.prevToken == ')') && i == '.')
              )
                return n * 2 + t.indented;
              if (t.align && t.type == '}')
                return t.indented + (e.context.type == (r || '').charAt(0) ? 0 : n);
            },
          },
          modeProps: { closeBrackets: { triples: '"' } },
        });
        L(['x-shader/x-vertex', 'x-shader/x-fragment'], {
          name: 'clike',
          keywords: o(
            'sampler1D sampler2D sampler3D samplerCube ' +
              'sampler1DShadow sampler2DShadow ' +
              'const attribute uniform varying ' +
              'break continue discard return ' +
              'for while do if else struct ' +
              'in out inout'
          ),
          types: o(
            'float int bool void ' +
              'vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 ' +
              'mat2 mat3 mat4'
          ),
          blockKeywords: o('for while do if else struct'),
          builtin: o(
            'radians degrees sin cos tan asin acos atan ' +
              'pow exp log exp2 sqrt inversesqrt ' +
              'abs sign floor ceil fract mod min max clamp mix step smoothstep ' +
              'length distance dot cross normalize ftransform faceforward ' +
              'reflect refract matrixCompMult ' +
              'lessThan lessThanEqual greaterThan greaterThanEqual ' +
              'equal notEqual any all not ' +
              'texture1D texture1DProj texture1DLod texture1DProjLod ' +
              'texture2D texture2DProj texture2DLod texture2DProjLod ' +
              'texture3D texture3DProj texture3DLod texture3DProjLod ' +
              'textureCube textureCubeLod ' +
              'shadow1D shadow2D shadow1DProj shadow2DProj ' +
              'shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod ' +
              'dFdx dFdy fwidth ' +
              'noise1 noise2 noise3 noise4'
          ),
          atoms: o(
            'true false ' +
              'gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex ' +
              'gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 ' +
              'gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 ' +
              'gl_FogCoord gl_PointCoord ' +
              'gl_Position gl_PointSize gl_ClipVertex ' +
              'gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor ' +
              'gl_TexCoord gl_FogFragCoord ' +
              'gl_FragCoord gl_FrontFacing ' +
              'gl_FragData gl_FragDepth ' +
              'gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix ' +
              'gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse ' +
              'gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse ' +
              'gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose ' +
              'gl_ProjectionMatrixInverseTranspose ' +
              'gl_ModelViewProjectionMatrixInverseTranspose ' +
              'gl_TextureMatrixInverseTranspose ' +
              'gl_NormalScale gl_DepthRange gl_ClipPlane ' +
              'gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel ' +
              'gl_FrontLightModelProduct gl_BackLightModelProduct ' +
              'gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ ' +
              'gl_FogParameters ' +
              'gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords ' +
              'gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats ' +
              'gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits ' +
              'gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits ' +
              'gl_MaxDrawBuffers'
          ),
          indentSwitch: false,
          hooks: { '#': b },
          modeProps: { fold: ['brace', 'include'] },
        });
        L('text/x-nesc', {
          name: 'clike',
          keywords: o(
            s +
              ' as atomic async call command component components configuration event generic ' +
              'implementation includes interface module new norace nx_struct nx_union post provides ' +
              'signal task uses abstract extends'
          ),
          types: p,
          blockKeywords: o(g),
          atoms: o('null true false'),
          hooks: { '#': b },
          modeProps: { fold: ['brace', 'include'] },
        });
        L('text/x-objectivec', {
          name: 'clike',
          keywords: o(s + ' ' + u),
          types: h,
          builtin: o(f),
          blockKeywords: o(
            g + ' @synthesize @try @catch @finally @autoreleasepool @synchronized'
          ),
          defKeywords: o(v + ' @interface @implementation @protocol @class'),
          dontIndentStatements: /^@.*$/,
          typeFirstDefinitions: true,
          atoms: o('YES NO NULL Nil nil true false nullptr'),
          isReservedIdentifier: k,
          hooks: { '#': b, '*': x },
          modeProps: { fold: ['brace', 'include'] },
        });
        L('text/x-objectivec++', {
          name: 'clike',
          keywords: o(s + ' ' + u + ' ' + c),
          types: h,
          builtin: o(f),
          blockKeywords: o(
            g +
              ' @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch'
          ),
          defKeywords: o(
            v + ' @interface @implementation @protocol @class class namespace'
          ),
          dontIndentStatements: /^@.*$|^template$/,
          typeFirstDefinitions: true,
          atoms: o('YES NO NULL Nil nil true false nullptr'),
          isReservedIdentifier: k,
          hooks: {
            '#': b,
            '*': x,
            u: w,
            U: w,
            L: w,
            R: w,
            0: y,
            1: y,
            2: y,
            3: y,
            4: y,
            5: y,
            6: y,
            7: y,
            8: y,
            9: y,
            token: function (e, t, r) {
              if (
                r == 'variable' &&
                e.peek() == '(' &&
                (t.prevToken == ';' || t.prevToken == null || t.prevToken == '}') &&
                C(e.current())
              )
                return 'def';
            },
          },
          namespaceSeparator: '::',
          modeProps: { fold: ['brace', 'include'] },
        });
        L('text/x-squirrel', {
          name: 'clike',
          keywords: o(
            'base break clone continue const default delete enum extends function in class' +
              ' foreach local resume return this throw typeof yield constructor instanceof static'
          ),
          types: p,
          blockKeywords: o('case catch class else for foreach if switch try while'),
          defKeywords: o('function local class'),
          typeFirstDefinitions: true,
          atoms: o('true false null'),
          hooks: { '#': b },
          modeProps: { fold: ['brace', 'include'] },
        });
        var M = null;
        function E(e) {
          return function (t, r) {
            var n = false,
              i,
              a = false;
            while (!t.eol()) {
              if (!n && t.match('"') && (e == 'single' || t.match('""'))) {
                a = true;
                break;
              }
              if (!n && t.match('``')) {
                M = E(e);
                a = true;
                break;
              }
              i = t.next();
              n = e == 'single' && !n && i == '\\';
            }
            if (a) r.tokenize = null;
            return 'string';
          };
        }
        L('text/x-ceylon', {
          name: 'clike',
          keywords: o(
            'abstracts alias assembly assert assign break case catch class continue dynamic else' +
              ' exists extends finally for function given if import in interface is let module new' +
              ' nonempty object of out outer package return satisfies super switch then this throw' +
              ' try value void while'
          ),
          types: function (e) {
            var t = e.charAt(0);
            return t === t.toUpperCase() && t !== t.toLowerCase();
          },
          blockKeywords: o(
            'case catch class dynamic else finally for function if interface module new object switch try while'
          ),
          defKeywords: o(
            'class dynamic function interface module object package value'
          ),
          builtin: o(
            'abstract actual aliased annotation by default deprecated doc final formal late license' +
              ' native optional sealed see serializable shared suppressWarnings tagged throws variable'
          ),
          isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
          isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
          numberStart: /[\d#$]/,
          number:
            /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
          multiLineStrings: true,
          typeFirstDefinitions: true,
          atoms: o('true false null larger smaller equal empty finished'),
          indentSwitch: false,
          styleDefs: false,
          hooks: {
            '@': function (e) {
              e.eatWhile(/[\w\$_]/);
              return 'meta';
            },
            '"': function (e, t) {
              t.tokenize = E(e.match('""') ? 'triple' : 'single');
              return t.tokenize(e, t);
            },
            '`': function (e, t) {
              if (!M || !e.match('`')) return false;
              t.tokenize = M;
              M = null;
              return t.tokenize(e, t);
            },
            "'": function (e) {
              e.eatWhile(/[\w\$_\xa1-\uffff]/);
              return 'atom';
            },
            token: function (e, t, r) {
              if ((r == 'variable' || r == 'type') && t.prevToken == '.') {
                return 'variable-2';
              }
            },
          },
          modeProps: { fold: ['brace', 'import'], closeBrackets: { triples: '"' } },
        });
      });
    },
    36629: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('css', function (t, r) {
          var n = r.inline;
          if (!r.propertyKeywords) r = e.resolveMode('text/css');
          var i = t.indentUnit,
            a = r.tokenHooks,
            o = r.documentTypes || {},
            l = r.mediaTypes || {},
            s = r.mediaFeatures || {},
            c = r.mediaValueKeywords || {},
            u = r.propertyKeywords || {},
            f = r.nonStandardPropertyKeywords || {},
            d = r.fontProperties || {},
            m = r.counterDescriptors || {},
            p = r.colorKeywords || {},
            h = r.valueKeywords || {},
            g = r.allowNested,
            v = r.lineComment,
            b = r.supportsAtComponent === true,
            x = t.highlightNonStandardPropertyKeywords !== false;
          var k, y;
          function w(e, t) {
            k = t;
            return e;
          }
          function C(e, t) {
            var r = e.next();
            if (a[r]) {
              var n = a[r](e, t);
              if (n !== false) return n;
            }
            if (r == '@') {
              e.eatWhile(/[\w\\\-]/);
              return w('def', e.current());
            } else if (r == '=' || ((r == '~' || r == '|') && e.eat('='))) {
              return w(null, 'compare');
            } else if (r == '"' || r == "'") {
              t.tokenize = _(r);
              return t.tokenize(e, t);
            } else if (r == '#') {
              e.eatWhile(/[\w\\\-]/);
              return w('atom', 'hash');
            } else if (r == '!') {
              e.match(/^\s*\w*/);
              return w('keyword', 'important');
            } else if (/\d/.test(r) || (r == '.' && e.eat(/\d/))) {
              e.eatWhile(/[\w.%]/);
              return w('number', 'unit');
            } else if (r === '-') {
              if (/[\d.]/.test(e.peek())) {
                e.eatWhile(/[\w.%]/);
                return w('number', 'unit');
              } else if (e.match(/^-[\w\\\-]*/)) {
                e.eatWhile(/[\w\\\-]/);
                if (e.match(/^\s*:/, false))
                  return w('variable-2', 'variable-definition');
                return w('variable-2', 'variable');
              } else if (e.match(/^\w+-/)) {
                return w('meta', 'meta');
              }
            } else if (/[,+>*\/]/.test(r)) {
              return w(null, 'select-op');
            } else if (r == '.' && e.match(/^-?[_a-z][_a-z0-9-]*/i)) {
              return w('qualifier', 'qualifier');
            } else if (/[:;{}\[\]\(\)]/.test(r)) {
              return w(null, r);
            } else if (e.match(/^[\w-.]+(?=\()/)) {
              if (/^(url(-prefix)?|domain|regexp)$/i.test(e.current())) {
                t.tokenize = S;
              }
              return w('variable callee', 'variable');
            } else if (/[\w\\\-]/.test(r)) {
              e.eatWhile(/[\w\\\-]/);
              return w('property', 'word');
            } else {
              return w(null, null);
            }
          }
          function _(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  if (e == ')') t.backUp(1);
                  break;
                }
                n = !n && i == '\\';
              }
              if (i == e || (!n && e != ')')) r.tokenize = null;
              return w('string', 'string');
            };
          }
          function S(e, t) {
            e.next();
            if (!e.match(/^\s*[\"\')]/, false)) t.tokenize = _(')');
            else t.tokenize = null;
            return w(null, '(');
          }
          function L(e, t, r) {
            this.type = e;
            this.indent = t;
            this.prev = r;
          }
          function F(e, t, r, n) {
            e.context = new L(r, t.indentation() + (n === false ? 0 : i), e.context);
            return r;
          }
          function A(e) {
            if (e.context.prev) e.context = e.context.prev;
            return e.context.type;
          }
          function T(e, t, r) {
            return P[r.context.type](e, t, r);
          }
          function M(e, t, r, n) {
            for (var i = n || 1; i > 0; i--) r.context = r.context.prev;
            return T(e, t, r);
          }
          function E(e) {
            var t = e.current().toLowerCase();
            if (h.hasOwnProperty(t)) y = 'atom';
            else if (p.hasOwnProperty(t)) y = 'keyword';
            else y = 'variable';
          }
          var P = {};
          P.top = function (e, t, r) {
            if (e == '{') {
              return F(r, t, 'block');
            } else if (e == '}' && r.context.prev) {
              return A(r);
            } else if (b && /@component/i.test(e)) {
              return F(r, t, 'atComponentBlock');
            } else if (/^@(-moz-)?document$/i.test(e)) {
              return F(r, t, 'documentTypes');
            } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) {
              return F(r, t, 'atBlock');
            } else if (/^@(font-face|counter-style)/i.test(e)) {
              r.stateArg = e;
              return 'restricted_atBlock_before';
            } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) {
              return 'keyframes';
            } else if (e && e.charAt(0) == '@') {
              return F(r, t, 'at');
            } else if (e == 'hash') {
              y = 'builtin';
            } else if (e == 'word') {
              y = 'tag';
            } else if (e == 'variable-definition') {
              return 'maybeprop';
            } else if (e == 'interpolation') {
              return F(r, t, 'interpolation');
            } else if (e == ':') {
              return 'pseudo';
            } else if (g && e == '(') {
              return F(r, t, 'parens');
            }
            return r.context.type;
          };
          P.block = function (e, t, r) {
            if (e == 'word') {
              var n = t.current().toLowerCase();
              if (u.hasOwnProperty(n)) {
                y = 'property';
                return 'maybeprop';
              } else if (f.hasOwnProperty(n)) {
                y = x ? 'string-2' : 'property';
                return 'maybeprop';
              } else if (g) {
                y = t.match(/^\s*:(?:\s|$)/, false) ? 'property' : 'tag';
                return 'block';
              } else {
                y += ' error';
                return 'maybeprop';
              }
            } else if (e == 'meta') {
              return 'block';
            } else if (!g && (e == 'hash' || e == 'qualifier')) {
              y = 'error';
              return 'block';
            } else {
              return P.top(e, t, r);
            }
          };
          P.maybeprop = function (e, t, r) {
            if (e == ':') return F(r, t, 'prop');
            return T(e, t, r);
          };
          P.prop = function (e, t, r) {
            if (e == ';') return A(r);
            if (e == '{' && g) return F(r, t, 'propBlock');
            if (e == '}' || e == '{') return M(e, t, r);
            if (e == '(') return F(r, t, 'parens');
            if (
              e == 'hash' &&
              !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())
            ) {
              y += ' error';
            } else if (e == 'word') {
              E(t);
            } else if (e == 'interpolation') {
              return F(r, t, 'interpolation');
            }
            return 'prop';
          };
          P.propBlock = function (e, t, r) {
            if (e == '}') return A(r);
            if (e == 'word') {
              y = 'property';
              return 'maybeprop';
            }
            return r.context.type;
          };
          P.parens = function (e, t, r) {
            if (e == '{' || e == '}') return M(e, t, r);
            if (e == ')') return A(r);
            if (e == '(') return F(r, t, 'parens');
            if (e == 'interpolation') return F(r, t, 'interpolation');
            if (e == 'word') E(t);
            return 'parens';
          };
          P.pseudo = function (e, t, r) {
            if (e == 'meta') return 'pseudo';
            if (e == 'word') {
              y = 'variable-3';
              return r.context.type;
            }
            return T(e, t, r);
          };
          P.documentTypes = function (e, t, r) {
            if (e == 'word' && o.hasOwnProperty(t.current())) {
              y = 'tag';
              return r.context.type;
            } else {
              return P.atBlock(e, t, r);
            }
          };
          P.atBlock = function (e, t, r) {
            if (e == '(') return F(r, t, 'atBlock_parens');
            if (e == '}' || e == ';') return M(e, t, r);
            if (e == '{') return A(r) && F(r, t, g ? 'block' : 'top');
            if (e == 'interpolation') return F(r, t, 'interpolation');
            if (e == 'word') {
              var n = t.current().toLowerCase();
              if (n == 'only' || n == 'not' || n == 'and' || n == 'or') y = 'keyword';
              else if (l.hasOwnProperty(n)) y = 'attribute';
              else if (s.hasOwnProperty(n)) y = 'property';
              else if (c.hasOwnProperty(n)) y = 'keyword';
              else if (u.hasOwnProperty(n)) y = 'property';
              else if (f.hasOwnProperty(n)) y = x ? 'string-2' : 'property';
              else if (h.hasOwnProperty(n)) y = 'atom';
              else if (p.hasOwnProperty(n)) y = 'keyword';
              else y = 'error';
            }
            return r.context.type;
          };
          P.atComponentBlock = function (e, t, r) {
            if (e == '}') return M(e, t, r);
            if (e == '{') return A(r) && F(r, t, g ? 'block' : 'top', false);
            if (e == 'word') y = 'error';
            return r.context.type;
          };
          P.atBlock_parens = function (e, t, r) {
            if (e == ')') return A(r);
            if (e == '{' || e == '}') return M(e, t, r, 2);
            return P.atBlock(e, t, r);
          };
          P.restricted_atBlock_before = function (e, t, r) {
            if (e == '{') return F(r, t, 'restricted_atBlock');
            if (e == 'word' && r.stateArg == '@counter-style') {
              y = 'variable';
              return 'restricted_atBlock_before';
            }
            return T(e, t, r);
          };
          P.restricted_atBlock = function (e, t, r) {
            if (e == '}') {
              r.stateArg = null;
              return A(r);
            }
            if (e == 'word') {
              if (
                (r.stateArg == '@font-face' &&
                  !d.hasOwnProperty(t.current().toLowerCase())) ||
                (r.stateArg == '@counter-style' &&
                  !m.hasOwnProperty(t.current().toLowerCase()))
              )
                y = 'error';
              else y = 'property';
              return 'maybeprop';
            }
            return 'restricted_atBlock';
          };
          P.keyframes = function (e, t, r) {
            if (e == 'word') {
              y = 'variable';
              return 'keyframes';
            }
            if (e == '{') return F(r, t, 'top');
            return T(e, t, r);
          };
          P.at = function (e, t, r) {
            if (e == ';') return A(r);
            if (e == '{' || e == '}') return M(e, t, r);
            if (e == 'word') y = 'tag';
            else if (e == 'hash') y = 'builtin';
            return 'at';
          };
          P.interpolation = function (e, t, r) {
            if (e == '}') return A(r);
            if (e == '{' || e == ';') return M(e, t, r);
            if (e == 'word') y = 'variable';
            else if (e != 'variable' && e != '(' && e != ')') y = 'error';
            return 'interpolation';
          };
          return {
            startState: function (e) {
              return {
                tokenize: null,
                state: n ? 'block' : 'top',
                stateArg: null,
                context: new L(n ? 'block' : 'top', e || 0, null),
              };
            },
            token: function (e, t) {
              if (!t.tokenize && e.eatSpace()) return null;
              var r = (t.tokenize || C)(e, t);
              if (r && typeof r == 'object') {
                k = r[1];
                r = r[0];
              }
              y = r;
              if (k != 'comment') t.state = P[t.state](k, e, t);
              return y;
            },
            indent: function (e, t) {
              var r = e.context,
                n = t && t.charAt(0);
              var a = r.indent;
              if (r.type == 'prop' && (n == '}' || n == ')')) r = r.prev;
              if (r.prev) {
                if (
                  n == '}' &&
                  (r.type == 'block' ||
                    r.type == 'top' ||
                    r.type == 'interpolation' ||
                    r.type == 'restricted_atBlock')
                ) {
                  r = r.prev;
                  a = r.indent;
                } else if (
                  (n == ')' && (r.type == 'parens' || r.type == 'atBlock_parens')) ||
                  (n == '{' && (r.type == 'at' || r.type == 'atBlock'))
                ) {
                  a = Math.max(0, r.indent - i);
                }
              }
              return a;
            },
            electricChars: '}',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            blockCommentContinue: ' * ',
            lineComment: v,
            fold: 'brace',
          };
        });
        function t(e) {
          var t = {};
          for (var r = 0; r < e.length; ++r) {
            t[e[r].toLowerCase()] = true;
          }
          return t;
        }
        var r = ['domain', 'regexp', 'url', 'url-prefix'],
          n = t(r);
        var i = [
            'all',
            'aural',
            'braille',
            'handheld',
            'print',
            'projection',
            'screen',
            'tty',
            'tv',
            'embossed',
          ],
          a = t(i);
        var o = [
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'device-width',
            'min-device-width',
            'max-device-width',
            'device-height',
            'min-device-height',
            'max-device-height',
            'aspect-ratio',
            'min-aspect-ratio',
            'max-aspect-ratio',
            'device-aspect-ratio',
            'min-device-aspect-ratio',
            'max-device-aspect-ratio',
            'color',
            'min-color',
            'max-color',
            'color-index',
            'min-color-index',
            'max-color-index',
            'monochrome',
            'min-monochrome',
            'max-monochrome',
            'resolution',
            'min-resolution',
            'max-resolution',
            'scan',
            'grid',
            'orientation',
            'device-pixel-ratio',
            'min-device-pixel-ratio',
            'max-device-pixel-ratio',
            'pointer',
            'any-pointer',
            'hover',
            'any-hover',
            'prefers-color-scheme',
          ],
          l = t(o);
        var s = [
            'landscape',
            'portrait',
            'none',
            'coarse',
            'fine',
            'on-demand',
            'hover',
            'interlace',
            'progressive',
            'dark',
            'light',
          ],
          c = t(s);
        var u = [
            'align-content',
            'align-items',
            'align-self',
            'alignment-adjust',
            'alignment-baseline',
            'all',
            'anchor-point',
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'appearance',
            'azimuth',
            'backdrop-filter',
            'backface-visibility',
            'background',
            'background-attachment',
            'background-blend-mode',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-repeat',
            'background-size',
            'baseline-shift',
            'binding',
            'bleed',
            'block-size',
            'bookmark-label',
            'bookmark-level',
            'bookmark-state',
            'bookmark-target',
            'border',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-bottom-style',
            'border-bottom-width',
            'border-collapse',
            'border-color',
            'border-image',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
            'border-image-source',
            'border-image-width',
            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',
            'border-radius',
            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',
            'border-spacing',
            'border-style',
            'border-top',
            'border-top-color',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-top-style',
            'border-top-width',
            'border-width',
            'bottom',
            'box-decoration-break',
            'box-shadow',
            'box-sizing',
            'break-after',
            'break-before',
            'break-inside',
            'caption-side',
            'caret-color',
            'clear',
            'clip',
            'color',
            'color-profile',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'columns',
            'contain',
            'content',
            'counter-increment',
            'counter-reset',
            'crop',
            'cue',
            'cue-after',
            'cue-before',
            'cursor',
            'direction',
            'display',
            'dominant-baseline',
            'drop-initial-after-adjust',
            'drop-initial-after-align',
            'drop-initial-before-adjust',
            'drop-initial-before-align',
            'drop-initial-size',
            'drop-initial-value',
            'elevation',
            'empty-cells',
            'fit',
            'fit-position',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'float',
            'float-offset',
            'flow-from',
            'flow-into',
            'font',
            'font-family',
            'font-feature-settings',
            'font-kerning',
            'font-language-override',
            'font-optical-sizing',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-synthesis',
            'font-variant',
            'font-variant-alternates',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-position',
            'font-variation-settings',
            'font-weight',
            'gap',
            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            'grid-column-gap',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-gap',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',
            'hanging-punctuation',
            'height',
            'hyphens',
            'icon',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'inline-box-align',
            'inset',
            'inset-block',
            'inset-block-end',
            'inset-block-start',
            'inset-inline',
            'inset-inline-end',
            'inset-inline-start',
            'isolation',
            'justify-content',
            'justify-items',
            'justify-self',
            'left',
            'letter-spacing',
            'line-break',
            'line-height',
            'line-height-step',
            'line-stacking',
            'line-stacking-ruby',
            'line-stacking-shift',
            'line-stacking-strategy',
            'list-style',
            'list-style-image',
            'list-style-position',
            'list-style-type',
            'margin',
            'margin-bottom',
            'margin-left',
            'margin-right',
            'margin-top',
            'marks',
            'marquee-direction',
            'marquee-loop',
            'marquee-play-count',
            'marquee-speed',
            'marquee-style',
            'mask-clip',
            'mask-composite',
            'mask-image',
            'mask-mode',
            'mask-origin',
            'mask-position',
            'mask-repeat',
            'mask-size',
            'mask-type',
            'max-block-size',
            'max-height',
            'max-inline-size',
            'max-width',
            'min-block-size',
            'min-height',
            'min-inline-size',
            'min-width',
            'mix-blend-mode',
            'move-to',
            'nav-down',
            'nav-index',
            'nav-left',
            'nav-right',
            'nav-up',
            'object-fit',
            'object-position',
            'offset',
            'offset-anchor',
            'offset-distance',
            'offset-path',
            'offset-position',
            'offset-rotate',
            'opacity',
            'order',
            'orphans',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'outline-width',
            'overflow',
            'overflow-style',
            'overflow-wrap',
            'overflow-x',
            'overflow-y',
            'padding',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'padding-top',
            'page',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'page-policy',
            'pause',
            'pause-after',
            'pause-before',
            'perspective',
            'perspective-origin',
            'pitch',
            'pitch-range',
            'place-content',
            'place-items',
            'place-self',
            'play-during',
            'position',
            'presentation-level',
            'punctuation-trim',
            'quotes',
            'region-break-after',
            'region-break-before',
            'region-break-inside',
            'region-fragment',
            'rendering-intent',
            'resize',
            'rest',
            'rest-after',
            'rest-before',
            'richness',
            'right',
            'rotate',
            'rotation',
            'rotation-point',
            'row-gap',
            'ruby-align',
            'ruby-overhang',
            'ruby-position',
            'ruby-span',
            'scale',
            'scroll-behavior',
            'scroll-margin',
            'scroll-margin-block',
            'scroll-margin-block-end',
            'scroll-margin-block-start',
            'scroll-margin-bottom',
            'scroll-margin-inline',
            'scroll-margin-inline-end',
            'scroll-margin-inline-start',
            'scroll-margin-left',
            'scroll-margin-right',
            'scroll-margin-top',
            'scroll-padding',
            'scroll-padding-block',
            'scroll-padding-block-end',
            'scroll-padding-block-start',
            'scroll-padding-bottom',
            'scroll-padding-inline',
            'scroll-padding-inline-end',
            'scroll-padding-inline-start',
            'scroll-padding-left',
            'scroll-padding-right',
            'scroll-padding-top',
            'scroll-snap-align',
            'scroll-snap-type',
            'shape-image-threshold',
            'shape-inside',
            'shape-margin',
            'shape-outside',
            'size',
            'speak',
            'speak-as',
            'speak-header',
            'speak-numeral',
            'speak-punctuation',
            'speech-rate',
            'stress',
            'string-set',
            'tab-size',
            'table-layout',
            'target',
            'target-name',
            'target-new',
            'target-position',
            'text-align',
            'text-align-last',
            'text-combine-upright',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-skip',
            'text-decoration-skip-ink',
            'text-decoration-style',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-height',
            'text-indent',
            'text-justify',
            'text-orientation',
            'text-outline',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-size-adjust',
            'text-space-collapse',
            'text-transform',
            'text-underline-position',
            'text-wrap',
            'top',
            'touch-action',
            'transform',
            'transform-origin',
            'transform-style',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'translate',
            'unicode-bidi',
            'user-select',
            'vertical-align',
            'visibility',
            'voice-balance',
            'voice-duration',
            'voice-family',
            'voice-pitch',
            'voice-range',
            'voice-rate',
            'voice-stress',
            'voice-volume',
            'volume',
            'white-space',
            'widows',
            'width',
            'will-change',
            'word-break',
            'word-spacing',
            'word-wrap',
            'writing-mode',
            'z-index',
            'clip-path',
            'clip-rule',
            'mask',
            'enable-background',
            'filter',
            'flood-color',
            'flood-opacity',
            'lighting-color',
            'stop-color',
            'stop-opacity',
            'pointer-events',
            'color-interpolation',
            'color-interpolation-filters',
            'color-rendering',
            'fill',
            'fill-opacity',
            'fill-rule',
            'image-rendering',
            'marker',
            'marker-end',
            'marker-mid',
            'marker-start',
            'paint-order',
            'shape-rendering',
            'stroke',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'text-rendering',
            'baseline-shift',
            'dominant-baseline',
            'glyph-orientation-horizontal',
            'glyph-orientation-vertical',
            'text-anchor',
            'writing-mode',
          ],
          f = t(u);
        var d = [
            'border-block',
            'border-block-color',
            'border-block-end',
            'border-block-end-color',
            'border-block-end-style',
            'border-block-end-width',
            'border-block-start',
            'border-block-start-color',
            'border-block-start-style',
            'border-block-start-width',
            'border-block-style',
            'border-block-width',
            'border-inline',
            'border-inline-color',
            'border-inline-end',
            'border-inline-end-color',
            'border-inline-end-style',
            'border-inline-end-width',
            'border-inline-start',
            'border-inline-start-color',
            'border-inline-start-style',
            'border-inline-start-width',
            'border-inline-style',
            'border-inline-width',
            'margin-block',
            'margin-block-end',
            'margin-block-start',
            'margin-inline',
            'margin-inline-end',
            'margin-inline-start',
            'padding-block',
            'padding-block-end',
            'padding-block-start',
            'padding-inline',
            'padding-inline-end',
            'padding-inline-start',
            'scroll-snap-stop',
            'scrollbar-3d-light-color',
            'scrollbar-arrow-color',
            'scrollbar-base-color',
            'scrollbar-dark-shadow-color',
            'scrollbar-face-color',
            'scrollbar-highlight-color',
            'scrollbar-shadow-color',
            'scrollbar-track-color',
            'searchfield-cancel-button',
            'searchfield-decoration',
            'searchfield-results-button',
            'searchfield-results-decoration',
            'shape-inside',
            'zoom',
          ],
          m = t(d);
        var p = [
            'font-display',
            'font-family',
            'src',
            'unicode-range',
            'font-variant',
            'font-feature-settings',
            'font-stretch',
            'font-weight',
            'font-style',
          ],
          h = t(p);
        var g = [
            'additive-symbols',
            'fallback',
            'negative',
            'pad',
            'prefix',
            'range',
            'speak-as',
            'suffix',
            'symbols',
            'system',
          ],
          v = t(g);
        var b = [
            'aliceblue',
            'antiquewhite',
            'aqua',
            'aquamarine',
            'azure',
            'beige',
            'bisque',
            'black',
            'blanchedalmond',
            'blue',
            'blueviolet',
            'brown',
            'burlywood',
            'cadetblue',
            'chartreuse',
            'chocolate',
            'coral',
            'cornflowerblue',
            'cornsilk',
            'crimson',
            'cyan',
            'darkblue',
            'darkcyan',
            'darkgoldenrod',
            'darkgray',
            'darkgreen',
            'darkkhaki',
            'darkmagenta',
            'darkolivegreen',
            'darkorange',
            'darkorchid',
            'darkred',
            'darksalmon',
            'darkseagreen',
            'darkslateblue',
            'darkslategray',
            'darkturquoise',
            'darkviolet',
            'deeppink',
            'deepskyblue',
            'dimgray',
            'dodgerblue',
            'firebrick',
            'floralwhite',
            'forestgreen',
            'fuchsia',
            'gainsboro',
            'ghostwhite',
            'gold',
            'goldenrod',
            'gray',
            'grey',
            'green',
            'greenyellow',
            'honeydew',
            'hotpink',
            'indianred',
            'indigo',
            'ivory',
            'khaki',
            'lavender',
            'lavenderblush',
            'lawngreen',
            'lemonchiffon',
            'lightblue',
            'lightcoral',
            'lightcyan',
            'lightgoldenrodyellow',
            'lightgray',
            'lightgreen',
            'lightpink',
            'lightsalmon',
            'lightseagreen',
            'lightskyblue',
            'lightslategray',
            'lightsteelblue',
            'lightyellow',
            'lime',
            'limegreen',
            'linen',
            'magenta',
            'maroon',
            'mediumaquamarine',
            'mediumblue',
            'mediumorchid',
            'mediumpurple',
            'mediumseagreen',
            'mediumslateblue',
            'mediumspringgreen',
            'mediumturquoise',
            'mediumvioletred',
            'midnightblue',
            'mintcream',
            'mistyrose',
            'moccasin',
            'navajowhite',
            'navy',
            'oldlace',
            'olive',
            'olivedrab',
            'orange',
            'orangered',
            'orchid',
            'palegoldenrod',
            'palegreen',
            'paleturquoise',
            'palevioletred',
            'papayawhip',
            'peachpuff',
            'peru',
            'pink',
            'plum',
            'powderblue',
            'purple',
            'rebeccapurple',
            'red',
            'rosybrown',
            'royalblue',
            'saddlebrown',
            'salmon',
            'sandybrown',
            'seagreen',
            'seashell',
            'sienna',
            'silver',
            'skyblue',
            'slateblue',
            'slategray',
            'snow',
            'springgreen',
            'steelblue',
            'tan',
            'teal',
            'thistle',
            'tomato',
            'turquoise',
            'violet',
            'wheat',
            'white',
            'whitesmoke',
            'yellow',
            'yellowgreen',
          ],
          x = t(b);
        var k = [
            'above',
            'absolute',
            'activeborder',
            'additive',
            'activecaption',
            'afar',
            'after-white-space',
            'ahead',
            'alias',
            'all',
            'all-scroll',
            'alphabetic',
            'alternate',
            'always',
            'amharic',
            'amharic-abegede',
            'antialiased',
            'appworkspace',
            'arabic-indic',
            'armenian',
            'asterisks',
            'attr',
            'auto',
            'auto-flow',
            'avoid',
            'avoid-column',
            'avoid-page',
            'avoid-region',
            'axis-pan',
            'background',
            'backwards',
            'baseline',
            'below',
            'bidi-override',
            'binary',
            'bengali',
            'blink',
            'block',
            'block-axis',
            'bold',
            'bolder',
            'border',
            'border-box',
            'both',
            'bottom',
            'break',
            'break-all',
            'break-word',
            'bullets',
            'button',
            'button-bevel',
            'buttonface',
            'buttonhighlight',
            'buttonshadow',
            'buttontext',
            'calc',
            'cambodian',
            'capitalize',
            'caps-lock-indicator',
            'caption',
            'captiontext',
            'caret',
            'cell',
            'center',
            'checkbox',
            'circle',
            'cjk-decimal',
            'cjk-earthly-branch',
            'cjk-heavenly-stem',
            'cjk-ideographic',
            'clear',
            'clip',
            'close-quote',
            'col-resize',
            'collapse',
            'color',
            'color-burn',
            'color-dodge',
            'column',
            'column-reverse',
            'compact',
            'condensed',
            'contain',
            'content',
            'contents',
            'content-box',
            'context-menu',
            'continuous',
            'copy',
            'counter',
            'counters',
            'cover',
            'crop',
            'cross',
            'crosshair',
            'currentcolor',
            'cursive',
            'cyclic',
            'darken',
            'dashed',
            'decimal',
            'decimal-leading-zero',
            'default',
            'default-button',
            'dense',
            'destination-atop',
            'destination-in',
            'destination-out',
            'destination-over',
            'devanagari',
            'difference',
            'disc',
            'discard',
            'disclosure-closed',
            'disclosure-open',
            'document',
            'dot-dash',
            'dot-dot-dash',
            'dotted',
            'double',
            'down',
            'e-resize',
            'ease',
            'ease-in',
            'ease-in-out',
            'ease-out',
            'element',
            'ellipse',
            'ellipsis',
            'embed',
            'end',
            'ethiopic',
            'ethiopic-abegede',
            'ethiopic-abegede-am-et',
            'ethiopic-abegede-gez',
            'ethiopic-abegede-ti-er',
            'ethiopic-abegede-ti-et',
            'ethiopic-halehame-aa-er',
            'ethiopic-halehame-aa-et',
            'ethiopic-halehame-am-et',
            'ethiopic-halehame-gez',
            'ethiopic-halehame-om-et',
            'ethiopic-halehame-sid-et',
            'ethiopic-halehame-so-et',
            'ethiopic-halehame-ti-er',
            'ethiopic-halehame-ti-et',
            'ethiopic-halehame-tig',
            'ethiopic-numeric',
            'ew-resize',
            'exclusion',
            'expanded',
            'extends',
            'extra-condensed',
            'extra-expanded',
            'fantasy',
            'fast',
            'fill',
            'fill-box',
            'fixed',
            'flat',
            'flex',
            'flex-end',
            'flex-start',
            'footnotes',
            'forwards',
            'from',
            'geometricPrecision',
            'georgian',
            'graytext',
            'grid',
            'groove',
            'gujarati',
            'gurmukhi',
            'hand',
            'hangul',
            'hangul-consonant',
            'hard-light',
            'hebrew',
            'help',
            'hidden',
            'hide',
            'higher',
            'highlight',
            'highlighttext',
            'hiragana',
            'hiragana-iroha',
            'horizontal',
            'hsl',
            'hsla',
            'hue',
            'icon',
            'ignore',
            'inactiveborder',
            'inactivecaption',
            'inactivecaptiontext',
            'infinite',
            'infobackground',
            'infotext',
            'inherit',
            'initial',
            'inline',
            'inline-axis',
            'inline-block',
            'inline-flex',
            'inline-grid',
            'inline-table',
            'inset',
            'inside',
            'intrinsic',
            'invert',
            'italic',
            'japanese-formal',
            'japanese-informal',
            'justify',
            'kannada',
            'katakana',
            'katakana-iroha',
            'keep-all',
            'khmer',
            'korean-hangul-formal',
            'korean-hanja-formal',
            'korean-hanja-informal',
            'landscape',
            'lao',
            'large',
            'larger',
            'left',
            'level',
            'lighter',
            'lighten',
            'line-through',
            'linear',
            'linear-gradient',
            'lines',
            'list-item',
            'listbox',
            'listitem',
            'local',
            'logical',
            'loud',
            'lower',
            'lower-alpha',
            'lower-armenian',
            'lower-greek',
            'lower-hexadecimal',
            'lower-latin',
            'lower-norwegian',
            'lower-roman',
            'lowercase',
            'ltr',
            'luminosity',
            'malayalam',
            'manipulation',
            'match',
            'matrix',
            'matrix3d',
            'media-controls-background',
            'media-current-time-display',
            'media-fullscreen-button',
            'media-mute-button',
            'media-play-button',
            'media-return-to-realtime-button',
            'media-rewind-button',
            'media-seek-back-button',
            'media-seek-forward-button',
            'media-slider',
            'media-sliderthumb',
            'media-time-remaining-display',
            'media-volume-slider',
            'media-volume-slider-container',
            'media-volume-sliderthumb',
            'medium',
            'menu',
            'menulist',
            'menulist-button',
            'menulist-text',
            'menulist-textfield',
            'menutext',
            'message-box',
            'middle',
            'min-intrinsic',
            'mix',
            'mongolian',
            'monospace',
            'move',
            'multiple',
            'multiple_mask_images',
            'multiply',
            'myanmar',
            'n-resize',
            'narrower',
            'ne-resize',
            'nesw-resize',
            'no-close-quote',
            'no-drop',
            'no-open-quote',
            'no-repeat',
            'none',
            'normal',
            'not-allowed',
            'nowrap',
            'ns-resize',
            'numbers',
            'numeric',
            'nw-resize',
            'nwse-resize',
            'oblique',
            'octal',
            'opacity',
            'open-quote',
            'optimizeLegibility',
            'optimizeSpeed',
            'oriya',
            'oromo',
            'outset',
            'outside',
            'outside-shape',
            'overlay',
            'overline',
            'padding',
            'padding-box',
            'painted',
            'page',
            'paused',
            'persian',
            'perspective',
            'pinch-zoom',
            'plus-darker',
            'plus-lighter',
            'pointer',
            'polygon',
            'portrait',
            'pre',
            'pre-line',
            'pre-wrap',
            'preserve-3d',
            'progress',
            'push-button',
            'radial-gradient',
            'radio',
            'read-only',
            'read-write',
            'read-write-plaintext-only',
            'rectangle',
            'region',
            'relative',
            'repeat',
            'repeating-linear-gradient',
            'repeating-radial-gradient',
            'repeat-x',
            'repeat-y',
            'reset',
            'reverse',
            'rgb',
            'rgba',
            'ridge',
            'right',
            'rotate',
            'rotate3d',
            'rotateX',
            'rotateY',
            'rotateZ',
            'round',
            'row',
            'row-resize',
            'row-reverse',
            'rtl',
            'run-in',
            'running',
            's-resize',
            'sans-serif',
            'saturation',
            'scale',
            'scale3d',
            'scaleX',
            'scaleY',
            'scaleZ',
            'screen',
            'scroll',
            'scrollbar',
            'scroll-position',
            'se-resize',
            'searchfield',
            'searchfield-cancel-button',
            'searchfield-decoration',
            'searchfield-results-button',
            'searchfield-results-decoration',
            'self-start',
            'self-end',
            'semi-condensed',
            'semi-expanded',
            'separate',
            'serif',
            'show',
            'sidama',
            'simp-chinese-formal',
            'simp-chinese-informal',
            'single',
            'skew',
            'skewX',
            'skewY',
            'skip-white-space',
            'slide',
            'slider-horizontal',
            'slider-vertical',
            'sliderthumb-horizontal',
            'sliderthumb-vertical',
            'slow',
            'small',
            'small-caps',
            'small-caption',
            'smaller',
            'soft-light',
            'solid',
            'somali',
            'source-atop',
            'source-in',
            'source-out',
            'source-over',
            'space',
            'space-around',
            'space-between',
            'space-evenly',
            'spell-out',
            'square',
            'square-button',
            'start',
            'static',
            'status-bar',
            'stretch',
            'stroke',
            'stroke-box',
            'sub',
            'subpixel-antialiased',
            'svg_masks',
            'super',
            'sw-resize',
            'symbolic',
            'symbols',
            'system-ui',
            'table',
            'table-caption',
            'table-cell',
            'table-column',
            'table-column-group',
            'table-footer-group',
            'table-header-group',
            'table-row',
            'table-row-group',
            'tamil',
            'telugu',
            'text',
            'text-bottom',
            'text-top',
            'textarea',
            'textfield',
            'thai',
            'thick',
            'thin',
            'threeddarkshadow',
            'threedface',
            'threedhighlight',
            'threedlightshadow',
            'threedshadow',
            'tibetan',
            'tigre',
            'tigrinya-er',
            'tigrinya-er-abegede',
            'tigrinya-et',
            'tigrinya-et-abegede',
            'to',
            'top',
            'trad-chinese-formal',
            'trad-chinese-informal',
            'transform',
            'translate',
            'translate3d',
            'translateX',
            'translateY',
            'translateZ',
            'transparent',
            'ultra-condensed',
            'ultra-expanded',
            'underline',
            'unidirectional-pan',
            'unset',
            'up',
            'upper-alpha',
            'upper-armenian',
            'upper-greek',
            'upper-hexadecimal',
            'upper-latin',
            'upper-norwegian',
            'upper-roman',
            'uppercase',
            'urdu',
            'url',
            'var',
            'vertical',
            'vertical-text',
            'view-box',
            'visible',
            'visibleFill',
            'visiblePainted',
            'visibleStroke',
            'visual',
            'w-resize',
            'wait',
            'wave',
            'wider',
            'window',
            'windowframe',
            'windowtext',
            'words',
            'wrap',
            'wrap-reverse',
            'x-large',
            'x-small',
            'xor',
            'xx-large',
            'xx-small',
          ],
          y = t(k);
        var w = r.concat(i).concat(o).concat(s).concat(u).concat(d).concat(b).concat(k);
        e.registerHelper('hintWords', 'css', w);
        function C(e, t) {
          var r = false,
            n;
          while ((n = e.next()) != null) {
            if (r && n == '/') {
              t.tokenize = null;
              break;
            }
            r = n == '*';
          }
          return ['comment', 'comment'];
        }
        e.defineMIME('text/css', {
          documentTypes: n,
          mediaTypes: a,
          mediaFeatures: l,
          mediaValueKeywords: c,
          propertyKeywords: f,
          nonStandardPropertyKeywords: m,
          fontProperties: h,
          counterDescriptors: v,
          colorKeywords: x,
          valueKeywords: y,
          tokenHooks: {
            '/': function (e, t) {
              if (!e.eat('*')) return false;
              t.tokenize = C;
              return C(e, t);
            },
          },
          name: 'css',
        });
        e.defineMIME('text/x-scss', {
          mediaTypes: a,
          mediaFeatures: l,
          mediaValueKeywords: c,
          propertyKeywords: f,
          nonStandardPropertyKeywords: m,
          colorKeywords: x,
          valueKeywords: y,
          fontProperties: h,
          allowNested: true,
          lineComment: '//',
          tokenHooks: {
            '/': function (e, t) {
              if (e.eat('/')) {
                e.skipToEnd();
                return ['comment', 'comment'];
              } else if (e.eat('*')) {
                t.tokenize = C;
                return C(e, t);
              } else {
                return ['operator', 'operator'];
              }
            },
            ':': function (e) {
              if (e.match(/^\s*\{/, false)) return [null, null];
              return false;
            },
            $: function (e) {
              e.match(/^[\w-]+/);
              if (e.match(/^\s*:/, false)) return ['variable-2', 'variable-definition'];
              return ['variable-2', 'variable'];
            },
            '#': function (e) {
              if (!e.eat('{')) return false;
              return [null, 'interpolation'];
            },
          },
          name: 'css',
          helperType: 'scss',
        });
        e.defineMIME('text/x-less', {
          mediaTypes: a,
          mediaFeatures: l,
          mediaValueKeywords: c,
          propertyKeywords: f,
          nonStandardPropertyKeywords: m,
          colorKeywords: x,
          valueKeywords: y,
          fontProperties: h,
          allowNested: true,
          lineComment: '//',
          tokenHooks: {
            '/': function (e, t) {
              if (e.eat('/')) {
                e.skipToEnd();
                return ['comment', 'comment'];
              } else if (e.eat('*')) {
                t.tokenize = C;
                return C(e, t);
              } else {
                return ['operator', 'operator'];
              }
            },
            '@': function (e) {
              if (e.eat('{')) return [null, 'interpolation'];
              if (
                e.match(
                  /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                  false
                )
              )
                return false;
              e.eatWhile(/[\w\\\-]/);
              if (e.match(/^\s*:/, false)) return ['variable-2', 'variable-definition'];
              return ['variable-2', 'variable'];
            },
            '&': function () {
              return ['atom', 'atom'];
            },
          },
          name: 'css',
          helperType: 'less',
        });
        e.defineMIME('text/x-gss', {
          documentTypes: n,
          mediaTypes: a,
          mediaFeatures: l,
          propertyKeywords: f,
          nonStandardPropertyKeywords: m,
          fontProperties: h,
          counterDescriptors: v,
          colorKeywords: x,
          valueKeywords: y,
          supportsAtComponent: true,
          tokenHooks: {
            '/': function (e, t) {
              if (!e.eat('*')) return false;
              t.tokenize = C;
              return C(e, t);
            },
          },
          name: 'css',
          helperType: 'gss',
        });
      });
    },
    42425: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(49047), r(14146));
        else {
        }
      })(function (e) {
        'use strict';
        var t =
          /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
        e.defineMode(
          'gfm',
          function (r, n) {
            var i = 0;
            function a(e) {
              e.code = false;
              return null;
            }
            var o = {
              startState: function () {
                return { code: false, codeBlock: false, ateSpace: false };
              },
              copyState: function (e) {
                return { code: e.code, codeBlock: e.codeBlock, ateSpace: e.ateSpace };
              },
              token: function (e, r) {
                r.combineTokens = null;
                if (r.codeBlock) {
                  if (e.match(/^```+/)) {
                    r.codeBlock = false;
                    return null;
                  }
                  e.skipToEnd();
                  return null;
                }
                if (e.sol()) {
                  r.code = false;
                }
                if (e.sol() && e.match(/^```+/)) {
                  e.skipToEnd();
                  r.codeBlock = true;
                  return null;
                }
                if (e.peek() === '`') {
                  e.next();
                  var a = e.pos;
                  e.eatWhile('`');
                  var o = 1 + e.pos - a;
                  if (!r.code) {
                    i = o;
                    r.code = true;
                  } else {
                    if (o === i) {
                      r.code = false;
                    }
                  }
                  return null;
                } else if (r.code) {
                  e.next();
                  return null;
                }
                if (e.eatSpace()) {
                  r.ateSpace = true;
                  return null;
                }
                if (e.sol() || r.ateSpace) {
                  r.ateSpace = false;
                  if (n.gitHubSpice !== false) {
                    if (
                      e.match(
                        /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/
                      )
                    ) {
                      r.combineTokens = true;
                      return 'link';
                    } else if (
                      e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)
                    ) {
                      r.combineTokens = true;
                      return 'link';
                    }
                  }
                }
                if (
                  e.match(t) &&
                  e.string.slice(e.start - 2, e.start) != '](' &&
                  (e.start == 0 || /\W/.test(e.string.charAt(e.start - 1)))
                ) {
                  r.combineTokens = true;
                  return 'link';
                }
                e.next();
                return null;
              },
              blankLine: a,
            };
            var l = { taskLists: true, strikethrough: true, emoji: true };
            for (var s in n) {
              l[s] = n[s];
            }
            l.name = 'markdown';
            return e.overlayMode(e.getMode(r, l), o);
          },
          'markdown'
        );
        e.defineMIME('text/x-gfm', 'gfm');
      });
    },
    96876: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('javascript', function (t, r) {
          var n = t.indentUnit;
          var i = r.statementIndent;
          var a = r.jsonld;
          var o = r.json || a;
          var l = r.trackScope !== false;
          var s = r.typescript;
          var c = r.wordCharacters || /[\w$\xa1-\uffff]/;
          var u = (function () {
            function e(e) {
              return { type: e, style: 'keyword' };
            }
            var t = e('keyword a'),
              r = e('keyword b'),
              n = e('keyword c'),
              i = e('keyword d');
            var a = e('operator'),
              o = { type: 'atom', style: 'atom' };
            return {
              if: e('if'),
              while: t,
              with: t,
              else: r,
              do: r,
              try: r,
              finally: r,
              return: i,
              break: i,
              continue: i,
              new: e('new'),
              delete: n,
              void: n,
              throw: n,
              debugger: e('debugger'),
              var: e('var'),
              const: e('var'),
              let: e('var'),
              function: e('function'),
              catch: e('catch'),
              for: e('for'),
              switch: e('switch'),
              case: e('case'),
              default: e('default'),
              in: a,
              typeof: a,
              instanceof: a,
              true: o,
              false: o,
              null: o,
              undefined: o,
              NaN: o,
              Infinity: o,
              this: e('this'),
              class: e('class'),
              super: e('atom'),
              yield: n,
              export: e('export'),
              import: e('import'),
              extends: n,
              await: n,
            };
          })();
          var f = /[+\-*&%=<>!?|~^@]/;
          var d =
            /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
          function m(e) {
            var t = false,
              r,
              n = false;
            while ((r = e.next()) != null) {
              if (!t) {
                if (r == '/' && !n) return;
                if (r == '[') n = true;
                else if (n && r == ']') n = false;
              }
              t = !t && r == '\\';
            }
          }
          var p, h;
          function g(e, t, r) {
            p = e;
            h = r;
            return t;
          }
          function v(e, t) {
            var r = e.next();
            if (r == '"' || r == "'") {
              t.tokenize = b(r);
              return t.tokenize(e, t);
            } else if (r == '.' && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
              return g('number', 'number');
            } else if (r == '.' && e.match('..')) {
              return g('spread', 'meta');
            } else if (/[\[\]{}\(\),;\:\.]/.test(r)) {
              return g(r);
            } else if (r == '=' && e.eat('>')) {
              return g('=>', 'operator');
            } else if (r == '0' && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
              return g('number', 'number');
            } else if (/\d/.test(r)) {
              e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
              return g('number', 'number');
            } else if (r == '/') {
              if (e.eat('*')) {
                t.tokenize = x;
                return x(e, t);
              } else if (e.eat('/')) {
                e.skipToEnd();
                return g('comment', 'comment');
              } else if (it(e, t, 1)) {
                m(e);
                e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
                return g('regexp', 'string-2');
              } else {
                e.eat('=');
                return g('operator', 'operator', e.current());
              }
            } else if (r == '`') {
              t.tokenize = k;
              return k(e, t);
            } else if (r == '#' && e.peek() == '!') {
              e.skipToEnd();
              return g('meta', 'meta');
            } else if (r == '#' && e.eatWhile(c)) {
              return g('variable', 'property');
            } else if (
              (r == '<' && e.match('!--')) ||
              (r == '-' && e.match('->') && !/\S/.test(e.string.slice(0, e.start)))
            ) {
              e.skipToEnd();
              return g('comment', 'comment');
            } else if (f.test(r)) {
              if (r != '>' || !t.lexical || t.lexical.type != '>') {
                if (e.eat('=')) {
                  if (r == '!' || r == '=') e.eat('=');
                } else if (/[<>*+\-|&?]/.test(r)) {
                  e.eat(r);
                  if (r == '>') e.eat(r);
                }
              }
              if (r == '?' && e.eat('.')) return g('.');
              return g('operator', 'operator', e.current());
            } else if (c.test(r)) {
              e.eatWhile(c);
              var n = e.current();
              if (t.lastType != '.') {
                if (u.propertyIsEnumerable(n)) {
                  var i = u[n];
                  return g(i.type, i.style, n);
                }
                if (
                  n == 'async' &&
                  e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false)
                )
                  return g('async', 'keyword', n);
              }
              return g('variable', 'variable', n);
            }
          }
          function b(e) {
            return function (t, r) {
              var n = false,
                i;
              if (a && t.peek() == '@' && t.match(d)) {
                r.tokenize = v;
                return g('jsonld-keyword', 'meta');
              }
              while ((i = t.next()) != null) {
                if (i == e && !n) break;
                n = !n && i == '\\';
              }
              if (!n) r.tokenize = v;
              return g('string', 'string');
            };
          }
          function x(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = v;
                break;
              }
              r = n == '*';
            }
            return g('comment', 'comment');
          }
          function k(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (!r && (n == '`' || (n == '$' && e.eat('{')))) {
                t.tokenize = v;
                break;
              }
              r = !r && n == '\\';
            }
            return g('quasi', 'string-2', e.current());
          }
          var y = '([{}])';
          function w(e, t) {
            if (t.fatArrowAt) t.fatArrowAt = null;
            var r = e.string.indexOf('=>', e.start);
            if (r < 0) return;
            if (s) {
              var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                e.string.slice(e.start, r)
              );
              if (n) r = n.index;
            }
            var i = 0,
              a = false;
            for (var o = r - 1; o >= 0; --o) {
              var l = e.string.charAt(o);
              var u = y.indexOf(l);
              if (u >= 0 && u < 3) {
                if (!i) {
                  ++o;
                  break;
                }
                if (--i == 0) {
                  if (l == '(') a = true;
                  break;
                }
              } else if (u >= 3 && u < 6) {
                ++i;
              } else if (c.test(l)) {
                a = true;
              } else if (/["'\/`]/.test(l)) {
                for (; ; --o) {
                  if (o == 0) return;
                  var f = e.string.charAt(o - 1);
                  if (f == l && e.string.charAt(o - 2) != '\\') {
                    o--;
                    break;
                  }
                }
              } else if (a && !i) {
                ++o;
                break;
              }
            }
            if (a && !i) t.fatArrowAt = o;
          }
          var C = {
            atom: true,
            number: true,
            variable: true,
            string: true,
            regexp: true,
            this: true,
            import: true,
            'jsonld-keyword': true,
          };
          function _(e, t, r, n, i, a) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.prev = i;
            this.info = a;
            if (n != null) this.align = n;
          }
          function S(e, t) {
            if (!l) return false;
            for (var r = e.localVars; r; r = r.next) if (r.name == t) return true;
            for (var n = e.context; n; n = n.prev) {
              for (var r = n.vars; r; r = r.next) if (r.name == t) return true;
            }
          }
          function L(e, t, r, n, i) {
            var a = e.cc;
            F.state = e;
            F.stream = i;
            (F.marked = null), (F.cc = a);
            F.style = t;
            if (!e.lexical.hasOwnProperty('align')) e.lexical.align = true;
            while (true) {
              var l = a.length ? a.pop() : o ? W : $;
              if (l(r, n)) {
                while (a.length && a[a.length - 1].lex) a.pop()();
                if (F.marked) return F.marked;
                if (r == 'variable' && S(e, n)) return 'variable-2';
                return t;
              }
            }
          }
          var F = { state: null, column: null, marked: null, cc: null };
          function A() {
            for (var e = arguments.length - 1; e >= 0; e--) F.cc.push(arguments[e]);
          }
          function T() {
            A.apply(null, arguments);
            return true;
          }
          function M(e, t) {
            for (var r = t; r; r = r.next) if (r.name == e) return true;
            return false;
          }
          function E(e) {
            var t = F.state;
            F.marked = 'def';
            if (!l) return;
            if (t.context) {
              if (t.lexical.info == 'var' && t.context && t.context.block) {
                var n = P(e, t.context);
                if (n != null) {
                  t.context = n;
                  return;
                }
              } else if (!M(e, t.localVars)) {
                t.localVars = new I(e, t.localVars);
                return;
              }
            }
            if (r.globalVars && !M(e, t.globalVars))
              t.globalVars = new I(e, t.globalVars);
          }
          function P(e, t) {
            if (!t) {
              return null;
            } else if (t.block) {
              var r = P(e, t.prev);
              if (!r) return null;
              if (r == t.prev) return t;
              return new z(r, t.vars, true);
            } else if (M(e, t.vars)) {
              return t;
            } else {
              return new z(t.prev, new I(e, t.vars), false);
            }
          }
          function D(e) {
            return (
              e == 'public' ||
              e == 'private' ||
              e == 'protected' ||
              e == 'abstract' ||
              e == 'readonly'
            );
          }
          function z(e, t, r) {
            this.prev = e;
            this.vars = t;
            this.block = r;
          }
          function I(e, t) {
            this.name = e;
            this.next = t;
          }
          var q = new I('this', new I('arguments', null));
          function O() {
            F.state.context = new z(F.state.context, F.state.localVars, false);
            F.state.localVars = q;
          }
          function j() {
            F.state.context = new z(F.state.context, F.state.localVars, true);
            F.state.localVars = null;
          }
          function B() {
            F.state.localVars = F.state.context.vars;
            F.state.context = F.state.context.prev;
          }
          B.lex = true;
          function N(e, t) {
            var r = function () {
              var r = F.state,
                n = r.indented;
              if (r.lexical.type == 'stat') n = r.lexical.indented;
              else
                for (var i = r.lexical; i && i.type == ')' && i.align; i = i.prev)
                  n = i.indented;
              r.lexical = new _(n, F.stream.column(), e, null, r.lexical, t);
            };
            r.lex = true;
            return r;
          }
          function R() {
            var e = F.state;
            if (e.lexical.prev) {
              if (e.lexical.type == ')') e.indented = e.lexical.indented;
              e.lexical = e.lexical.prev;
            }
          }
          R.lex = true;
          function U(e) {
            function t(r) {
              if (r == e) return T();
              else if (e == ';' || r == '}' || r == ')' || r == ']') return A();
              else return T(t);
            }
            return t;
          }
          function $(e, t) {
            if (e == 'var') return T(N('vardef', t), Ae, U(';'), R);
            if (e == 'keyword a') return T(N('form'), V, $, R);
            if (e == 'keyword b') return T(N('form'), $, R);
            if (e == 'keyword d')
              return F.stream.match(/^\s*$/, false) ? T() : T(N('stat'), Q, U(';'), R);
            if (e == 'debugger') return T(U(';'));
            if (e == '{') return T(N('}'), j, de, R, B);
            if (e == ';') return T();
            if (e == 'if') {
              if (
                F.state.lexical.info == 'else' &&
                F.state.cc[F.state.cc.length - 1] == R
              )
                F.state.cc.pop()();
              return T(N('form'), V, $, R, ze);
            }
            if (e == 'function') return T(je);
            if (e == 'for') return T(N('form'), j, Ie, $, B, R);
            if (e == 'class' || (s && t == 'interface')) {
              F.marked = 'keyword';
              return T(N('form', e == 'class' ? e : t), $e, R);
            }
            if (e == 'variable') {
              if (s && t == 'declare') {
                F.marked = 'keyword';
                return T($);
              } else if (
                s &&
                (t == 'module' || t == 'enum' || t == 'type') &&
                F.stream.match(/^\s*\w/, false)
              ) {
                F.marked = 'keyword';
                if (t == 'enum') return T(tt);
                else if (t == 'type') return T(Ne, U('operator'), ve, U(';'));
                else return T(N('form'), Te, U('{'), N('}'), de, R, R);
              } else if (s && t == 'namespace') {
                F.marked = 'keyword';
                return T(N('form'), W, $, R);
              } else if (s && t == 'abstract') {
                F.marked = 'keyword';
                return T($);
              } else {
                return T(N('stat'), ae);
              }
            }
            if (e == 'switch')
              return T(N('form'), V, U('{'), N('}', 'switch'), j, de, R, R, B);
            if (e == 'case') return T(W, U(':'));
            if (e == 'default') return T(U(':'));
            if (e == 'catch') return T(N('form'), O, K, $, R, B);
            if (e == 'export') return T(N('stat'), Ve, R);
            if (e == 'import') return T(N('stat'), Qe, R);
            if (e == 'async') return T($);
            if (t == '@') return T(W, $);
            return A(N('stat'), W, U(';'), R);
          }
          function K(e) {
            if (e == '(') return T(Re, U(')'));
          }
          function W(e, t) {
            return G(e, t, false);
          }
          function H(e, t) {
            return G(e, t, true);
          }
          function V(e) {
            if (e != '(') return A();
            return T(N(')'), Q, U(')'), R);
          }
          function G(e, t, r) {
            if (F.state.fatArrowAt == F.stream.start) {
              var n = r ? te : ee;
              if (e == '(') return T(O, N(')'), ue(Re, ')'), R, U('=>'), n, B);
              else if (e == 'variable') return A(O, Te, U('=>'), n, B);
            }
            var i = r ? Z : X;
            if (C.hasOwnProperty(e)) return T(i);
            if (e == 'function') return T(je, i);
            if (e == 'class' || (s && t == 'interface')) {
              F.marked = 'keyword';
              return T(N('form'), Ue, R);
            }
            if (e == 'keyword c' || e == 'async') return T(r ? H : W);
            if (e == '(') return T(N(')'), Q, U(')'), R, i);
            if (e == 'operator' || e == 'spread') return T(r ? H : W);
            if (e == '[') return T(N(']'), et, R, i);
            if (e == '{') return fe(le, '}', null, i);
            if (e == 'quasi') return A(J, i);
            if (e == 'new') return T(re(r));
            return T();
          }
          function Q(e) {
            if (e.match(/[;\}\)\],]/)) return A();
            return A(W);
          }
          function X(e, t) {
            if (e == ',') return T(Q);
            return Z(e, t, false);
          }
          function Z(e, t, r) {
            var n = r == false ? X : Z;
            var i = r == false ? W : H;
            if (e == '=>') return T(O, r ? te : ee, B);
            if (e == 'operator') {
              if (/\+\+|--/.test(t) || (s && t == '!')) return T(n);
              if (s && t == '<' && F.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
                return T(N('>'), ue(ve, '>'), R, n);
              if (t == '?') return T(W, U(':'), i);
              return T(i);
            }
            if (e == 'quasi') {
              return A(J, n);
            }
            if (e == ';') return;
            if (e == '(') return fe(H, ')', 'call', n);
            if (e == '.') return T(oe, n);
            if (e == '[') return T(N(']'), Q, U(']'), R, n);
            if (s && t == 'as') {
              F.marked = 'keyword';
              return T(ve, n);
            }
            if (e == 'regexp') {
              F.state.lastType = F.marked = 'operator';
              F.stream.backUp(F.stream.pos - F.stream.start - 1);
              return T(i);
            }
          }
          function J(e, t) {
            if (e != 'quasi') return A();
            if (t.slice(t.length - 2) != '${') return T(J);
            return T(W, Y);
          }
          function Y(e) {
            if (e == '}') {
              F.marked = 'string-2';
              F.state.tokenize = k;
              return T(J);
            }
          }
          function ee(e) {
            w(F.stream, F.state);
            return A(e == '{' ? $ : W);
          }
          function te(e) {
            w(F.stream, F.state);
            return A(e == '{' ? $ : H);
          }
          function re(e) {
            return function (t) {
              if (t == '.') return T(e ? ie : ne);
              else if (t == 'variable' && s) return T(Se, e ? Z : X);
              else return A(e ? H : W);
            };
          }
          function ne(e, t) {
            if (t == 'target') {
              F.marked = 'keyword';
              return T(X);
            }
          }
          function ie(e, t) {
            if (t == 'target') {
              F.marked = 'keyword';
              return T(Z);
            }
          }
          function ae(e) {
            if (e == ':') return T(R, $);
            return A(X, U(';'), R);
          }
          function oe(e) {
            if (e == 'variable') {
              F.marked = 'property';
              return T();
            }
          }
          function le(e, t) {
            if (e == 'async') {
              F.marked = 'property';
              return T(le);
            } else if (e == 'variable' || F.style == 'keyword') {
              F.marked = 'property';
              if (t == 'get' || t == 'set') return T(se);
              var r;
              if (
                s &&
                F.state.fatArrowAt == F.stream.start &&
                (r = F.stream.match(/^\s*:\s*/, false))
              )
                F.state.fatArrowAt = F.stream.pos + r[0].length;
              return T(ce);
            } else if (e == 'number' || e == 'string') {
              F.marked = a ? 'property' : F.style + ' property';
              return T(ce);
            } else if (e == 'jsonld-keyword') {
              return T(ce);
            } else if (s && D(t)) {
              F.marked = 'keyword';
              return T(le);
            } else if (e == '[') {
              return T(W, me, U(']'), ce);
            } else if (e == 'spread') {
              return T(H, ce);
            } else if (t == '*') {
              F.marked = 'keyword';
              return T(le);
            } else if (e == ':') {
              return A(ce);
            }
          }
          function se(e) {
            if (e != 'variable') return A(ce);
            F.marked = 'property';
            return T(je);
          }
          function ce(e) {
            if (e == ':') return T(H);
            if (e == '(') return A(je);
          }
          function ue(e, t, r) {
            function n(i, a) {
              if (r ? r.indexOf(i) > -1 : i == ',') {
                var o = F.state.lexical;
                if (o.info == 'call') o.pos = (o.pos || 0) + 1;
                return T(function (r, n) {
                  if (r == t || n == t) return A();
                  return A(e);
                }, n);
              }
              if (i == t || a == t) return T();
              if (r && r.indexOf(';') > -1) return A(e);
              return T(U(t));
            }
            return function (r, i) {
              if (r == t || i == t) return T();
              return A(e, n);
            };
          }
          function fe(e, t, r) {
            for (var n = 3; n < arguments.length; n++) F.cc.push(arguments[n]);
            return T(N(t, r), ue(e, t), R);
          }
          function de(e) {
            if (e == '}') return T();
            return A($, de);
          }
          function me(e, t) {
            if (s) {
              if (e == ':') return T(ve);
              if (t == '?') return T(me);
            }
          }
          function pe(e, t) {
            if (s && (e == ':' || t == 'in')) return T(ve);
          }
          function he(e) {
            if (s && e == ':') {
              if (F.stream.match(/^\s*\w+\s+is\b/, false)) return T(W, ge, ve);
              else return T(ve);
            }
          }
          function ge(e, t) {
            if (t == 'is') {
              F.marked = 'keyword';
              return T();
            }
          }
          function ve(e, t) {
            if (t == 'keyof' || t == 'typeof' || t == 'infer' || t == 'readonly') {
              F.marked = 'keyword';
              return T(t == 'typeof' ? H : ve);
            }
            if (e == 'variable' || t == 'void') {
              F.marked = 'type';
              return T(_e);
            }
            if (t == '|' || t == '&') return T(ve);
            if (e == 'string' || e == 'number' || e == 'atom') return T(_e);
            if (e == '[') return T(N(']'), ue(ve, ']', ','), R, _e);
            if (e == '{') return T(N('}'), xe, R, _e);
            if (e == '(') return T(ue(Ce, ')'), be, _e);
            if (e == '<') return T(ue(ve, '>'), ve);
            if (e == 'quasi') {
              return A(ye, _e);
            }
          }
          function be(e) {
            if (e == '=>') return T(ve);
          }
          function xe(e) {
            if (e.match(/[\}\)\]]/)) return T();
            if (e == ',' || e == ';') return T(xe);
            return A(ke, xe);
          }
          function ke(e, t) {
            if (e == 'variable' || F.style == 'keyword') {
              F.marked = 'property';
              return T(ke);
            } else if (t == '?' || e == 'number' || e == 'string') {
              return T(ke);
            } else if (e == ':') {
              return T(ve);
            } else if (e == '[') {
              return T(U('variable'), pe, U(']'), ke);
            } else if (e == '(') {
              return A(Be, ke);
            } else if (!e.match(/[;\}\)\],]/)) {
              return T();
            }
          }
          function ye(e, t) {
            if (e != 'quasi') return A();
            if (t.slice(t.length - 2) != '${') return T(ye);
            return T(ve, we);
          }
          function we(e) {
            if (e == '}') {
              F.marked = 'string-2';
              F.state.tokenize = k;
              return T(ye);
            }
          }
          function Ce(e, t) {
            if ((e == 'variable' && F.stream.match(/^\s*[?:]/, false)) || t == '?')
              return T(Ce);
            if (e == ':') return T(ve);
            if (e == 'spread') return T(Ce);
            return A(ve);
          }
          function _e(e, t) {
            if (t == '<') return T(N('>'), ue(ve, '>'), R, _e);
            if (t == '|' || e == '.' || t == '&') return T(ve);
            if (e == '[') return T(ve, U(']'), _e);
            if (t == 'extends' || t == 'implements') {
              F.marked = 'keyword';
              return T(ve);
            }
            if (t == '?') return T(ve, U(':'), ve);
          }
          function Se(e, t) {
            if (t == '<') return T(N('>'), ue(ve, '>'), R, _e);
          }
          function Le() {
            return A(ve, Fe);
          }
          function Fe(e, t) {
            if (t == '=') return T(ve);
          }
          function Ae(e, t) {
            if (t == 'enum') {
              F.marked = 'keyword';
              return T(tt);
            }
            return A(Te, me, Pe, De);
          }
          function Te(e, t) {
            if (s && D(t)) {
              F.marked = 'keyword';
              return T(Te);
            }
            if (e == 'variable') {
              E(t);
              return T();
            }
            if (e == 'spread') return T(Te);
            if (e == '[') return fe(Ee, ']');
            if (e == '{') return fe(Me, '}');
          }
          function Me(e, t) {
            if (e == 'variable' && !F.stream.match(/^\s*:/, false)) {
              E(t);
              return T(Pe);
            }
            if (e == 'variable') F.marked = 'property';
            if (e == 'spread') return T(Te);
            if (e == '}') return A();
            if (e == '[') return T(W, U(']'), U(':'), Me);
            return T(U(':'), Te, Pe);
          }
          function Ee() {
            return A(Te, Pe);
          }
          function Pe(e, t) {
            if (t == '=') return T(H);
          }
          function De(e) {
            if (e == ',') return T(Ae);
          }
          function ze(e, t) {
            if (e == 'keyword b' && t == 'else') return T(N('form', 'else'), $, R);
          }
          function Ie(e, t) {
            if (t == 'await') return T(Ie);
            if (e == '(') return T(N(')'), qe, R);
          }
          function qe(e) {
            if (e == 'var') return T(Ae, Oe);
            if (e == 'variable') return T(Oe);
            return A(Oe);
          }
          function Oe(e, t) {
            if (e == ')') return T();
            if (e == ';') return T(Oe);
            if (t == 'in' || t == 'of') {
              F.marked = 'keyword';
              return T(W, Oe);
            }
            return A(W, Oe);
          }
          function je(e, t) {
            if (t == '*') {
              F.marked = 'keyword';
              return T(je);
            }
            if (e == 'variable') {
              E(t);
              return T(je);
            }
            if (e == '(') return T(O, N(')'), ue(Re, ')'), R, he, $, B);
            if (s && t == '<') return T(N('>'), ue(Le, '>'), R, je);
          }
          function Be(e, t) {
            if (t == '*') {
              F.marked = 'keyword';
              return T(Be);
            }
            if (e == 'variable') {
              E(t);
              return T(Be);
            }
            if (e == '(') return T(O, N(')'), ue(Re, ')'), R, he, B);
            if (s && t == '<') return T(N('>'), ue(Le, '>'), R, Be);
          }
          function Ne(e, t) {
            if (e == 'keyword' || e == 'variable') {
              F.marked = 'type';
              return T(Ne);
            } else if (t == '<') {
              return T(N('>'), ue(Le, '>'), R);
            }
          }
          function Re(e, t) {
            if (t == '@') T(W, Re);
            if (e == 'spread') return T(Re);
            if (s && D(t)) {
              F.marked = 'keyword';
              return T(Re);
            }
            if (s && e == 'this') return T(me, Pe);
            return A(Te, me, Pe);
          }
          function Ue(e, t) {
            if (e == 'variable') return $e(e, t);
            return Ke(e, t);
          }
          function $e(e, t) {
            if (e == 'variable') {
              E(t);
              return T(Ke);
            }
          }
          function Ke(e, t) {
            if (t == '<') return T(N('>'), ue(Le, '>'), R, Ke);
            if (t == 'extends' || t == 'implements' || (s && e == ',')) {
              if (t == 'implements') F.marked = 'keyword';
              return T(s ? ve : W, Ke);
            }
            if (e == '{') return T(N('}'), We, R);
          }
          function We(e, t) {
            if (
              e == 'async' ||
              (e == 'variable' &&
                (t == 'static' || t == 'get' || t == 'set' || (s && D(t))) &&
                F.stream.match(/^\s+[\w$\xa1-\uffff]/, false))
            ) {
              F.marked = 'keyword';
              return T(We);
            }
            if (e == 'variable' || F.style == 'keyword') {
              F.marked = 'property';
              return T(He, We);
            }
            if (e == 'number' || e == 'string') return T(He, We);
            if (e == '[') return T(W, me, U(']'), He, We);
            if (t == '*') {
              F.marked = 'keyword';
              return T(We);
            }
            if (s && e == '(') return A(Be, We);
            if (e == ';' || e == ',') return T(We);
            if (e == '}') return T();
            if (t == '@') return T(W, We);
          }
          function He(e, t) {
            if (t == '!') return T(He);
            if (t == '?') return T(He);
            if (e == ':') return T(ve, Pe);
            if (t == '=') return T(H);
            var r = F.state.lexical.prev,
              n = r && r.info == 'interface';
            return A(n ? Be : je);
          }
          function Ve(e, t) {
            if (t == '*') {
              F.marked = 'keyword';
              return T(Ye, U(';'));
            }
            if (t == 'default') {
              F.marked = 'keyword';
              return T(W, U(';'));
            }
            if (e == '{') return T(ue(Ge, '}'), Ye, U(';'));
            return A($);
          }
          function Ge(e, t) {
            if (t == 'as') {
              F.marked = 'keyword';
              return T(U('variable'));
            }
            if (e == 'variable') return A(H, Ge);
          }
          function Qe(e) {
            if (e == 'string') return T();
            if (e == '(') return A(W);
            if (e == '.') return A(X);
            return A(Xe, Ze, Ye);
          }
          function Xe(e, t) {
            if (e == '{') return fe(Xe, '}');
            if (e == 'variable') E(t);
            if (t == '*') F.marked = 'keyword';
            return T(Je);
          }
          function Ze(e) {
            if (e == ',') return T(Xe, Ze);
          }
          function Je(e, t) {
            if (t == 'as') {
              F.marked = 'keyword';
              return T(Xe);
            }
          }
          function Ye(e, t) {
            if (t == 'from') {
              F.marked = 'keyword';
              return T(W);
            }
          }
          function et(e) {
            if (e == ']') return T();
            return A(ue(H, ']'));
          }
          function tt() {
            return A(N('form'), Te, U('{'), N('}'), ue(rt, '}'), R, R);
          }
          function rt() {
            return A(Te, Pe);
          }
          function nt(e, t) {
            return (
              e.lastType == 'operator' ||
              e.lastType == ',' ||
              f.test(t.charAt(0)) ||
              /[,.]/.test(t.charAt(0))
            );
          }
          function it(e, t, r) {
            return (
              (t.tokenize == v &&
                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                  t.lastType
                )) ||
              (t.lastType == 'quasi' &&
                /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))))
            );
          }
          return {
            startState: function (e) {
              var t = {
                tokenize: v,
                lastType: 'sof',
                cc: [],
                lexical: new _((e || 0) - n, 0, 'block', false),
                localVars: r.localVars,
                context: r.localVars && new z(null, null, false),
                indented: e || 0,
              };
              if (r.globalVars && typeof r.globalVars == 'object')
                t.globalVars = r.globalVars;
              return t;
            },
            token: function (e, t) {
              if (e.sol()) {
                if (!t.lexical.hasOwnProperty('align')) t.lexical.align = false;
                t.indented = e.indentation();
                w(e, t);
              }
              if (t.tokenize != x && e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              if (p == 'comment') return r;
              t.lastType = p == 'operator' && (h == '++' || h == '--') ? 'incdec' : p;
              return L(t, r, p, h, e);
            },
            indent: function (t, a) {
              if (t.tokenize == x || t.tokenize == k) return e.Pass;
              if (t.tokenize != v) return 0;
              var o = a && a.charAt(0),
                l = t.lexical,
                s;
              if (!/^\s*else\b/.test(a))
                for (var c = t.cc.length - 1; c >= 0; --c) {
                  var u = t.cc[c];
                  if (u == R) l = l.prev;
                  else if (u != ze && u != B) break;
                }
              while (
                (l.type == 'stat' || l.type == 'form') &&
                (o == '}' ||
                  ((s = t.cc[t.cc.length - 1]) &&
                    (s == X || s == Z) &&
                    !/^[,\.=+\-*:?[\(]/.test(a)))
              )
                l = l.prev;
              if (i && l.type == ')' && l.prev.type == 'stat') l = l.prev;
              var f = l.type,
                d = o == f;
              if (f == 'vardef')
                return (
                  l.indented +
                  (t.lastType == 'operator' || t.lastType == ','
                    ? l.info.length + 1
                    : 0)
                );
              else if (f == 'form' && o == '{') return l.indented;
              else if (f == 'form') return l.indented + n;
              else if (f == 'stat') return l.indented + (nt(t, a) ? i || n : 0);
              else if (l.info == 'switch' && !d && r.doubleIndentSwitch != false)
                return l.indented + (/^(?:case|default)\b/.test(a) ? n : 2 * n);
              else if (l.align) return l.column + (d ? 0 : 1);
              else return l.indented + (d ? 0 : n);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: o ? null : '/*',
            blockCommentEnd: o ? null : '*/',
            blockCommentContinue: o ? null : ' * ',
            lineComment: o ? null : '//',
            fold: 'brace',
            closeBrackets: '()[]{}\'\'""``',
            helperType: o ? 'json' : 'javascript',
            jsonldMode: a,
            jsonMode: o,
            expressionAllowed: it,
            skipExpression: function (t) {
              L(t, 'atom', 'atom', 'true', new e.StringStream('', 2, null));
            },
          };
        });
        e.registerHelper('wordChars', 'javascript', /[\w$]/);
        e.defineMIME('text/javascript', 'javascript');
        e.defineMIME('text/ecmascript', 'javascript');
        e.defineMIME('application/javascript', 'javascript');
        e.defineMIME('application/x-javascript', 'javascript');
        e.defineMIME('application/ecmascript', 'javascript');
        e.defineMIME('application/json', { name: 'javascript', json: true });
        e.defineMIME('application/x-json', { name: 'javascript', json: true });
        e.defineMIME('application/manifest+json', { name: 'javascript', json: true });
        e.defineMIME('application/ld+json', { name: 'javascript', jsonld: true });
        e.defineMIME('text/typescript', { name: 'javascript', typescript: true });
        e.defineMIME('application/typescript', {
          name: 'javascript',
          typescript: true,
        });
      });
    },
    71548: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(29589), r(96876));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e, t, r, n) {
          this.state = e;
          this.mode = t;
          this.depth = r;
          this.prev = n;
        }
        function r(n) {
          return new t(
            e.copyState(n.mode, n.state),
            n.mode,
            n.depth,
            n.prev && r(n.prev)
          );
        }
        e.defineMode(
          'jsx',
          function (n, i) {
            var a = e.getMode(n, {
              name: 'xml',
              allowMissing: true,
              multilineTagIndentPastTag: false,
              allowMissingTagName: true,
            });
            var o = e.getMode(n, (i && i.base) || 'javascript');
            function l(e) {
              var t = e.tagName;
              e.tagName = null;
              var r = a.indent(e, '', '');
              e.tagName = t;
              return r;
            }
            function s(e, t) {
              if (t.context.mode == a) return c(e, t, t.context);
              else return u(e, t, t.context);
            }
            function c(r, i, c) {
              if (c.depth == 2) {
                if (r.match(/^.*?\*\//)) c.depth = 1;
                else r.skipToEnd();
                return 'comment';
              }
              if (r.peek() == '{') {
                a.skipAttribute(c.state);
                var u = l(c.state),
                  f = c.state.context;
                if (f && r.match(/^[^>]*>\s*$/, false)) {
                  while (f.prev && !f.startOfLine) f = f.prev;
                  if (f.startOfLine) u -= n.indentUnit;
                  else if (c.prev.state.lexical) u = c.prev.state.lexical.indented;
                } else if (c.depth == 1) {
                  u += n.indentUnit;
                }
                i.context = new t(e.startState(o, u), o, 0, i.context);
                return null;
              }
              if (c.depth == 1) {
                if (r.peek() == '<') {
                  a.skipAttribute(c.state);
                  i.context = new t(e.startState(a, l(c.state)), a, 0, i.context);
                  return null;
                } else if (r.match('//')) {
                  r.skipToEnd();
                  return 'comment';
                } else if (r.match('/*')) {
                  c.depth = 2;
                  return s(r, i);
                }
              }
              var d = a.token(r, c.state),
                m = r.current(),
                p;
              if (/\btag\b/.test(d)) {
                if (/>$/.test(m)) {
                  if (c.state.context) c.depth = 0;
                  else i.context = i.context.prev;
                } else if (/^</.test(m)) {
                  c.depth = 1;
                }
              } else if (!d && (p = m.indexOf('{')) > -1) {
                r.backUp(m.length - p);
              }
              return d;
            }
            function u(r, n, i) {
              if (r.peek() == '<' && o.expressionAllowed(r, i.state)) {
                n.context = new t(
                  e.startState(a, o.indent(i.state, '', '')),
                  a,
                  0,
                  n.context
                );
                o.skipExpression(i.state);
                return null;
              }
              var l = o.token(r, i.state);
              if (!l && i.depth != null) {
                var s = r.current();
                if (s == '{') {
                  i.depth++;
                } else if (s == '}') {
                  if (--i.depth == 0) n.context = n.context.prev;
                }
              }
              return l;
            }
            return {
              startState: function () {
                return { context: new t(e.startState(o), o) };
              },
              copyState: function (e) {
                return { context: r(e.context) };
              },
              token: s,
              indent: function (e, t, r) {
                return e.context.mode.indent(e.context.state, t, r);
              },
              innerMode: function (e) {
                return e.context;
              },
            };
          },
          'xml',
          'javascript'
        );
        e.defineMIME('text/jsx', 'jsx');
        e.defineMIME('text/typescript-jsx', {
          name: 'jsx',
          base: { name: 'javascript', typescript: true },
        });
      });
    },
    68059: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('julia', function (t, r) {
          function n(e, t) {
            if (typeof t === 'undefined') {
              t = '\\b';
            }
            return new RegExp('^((' + e.join(')|(') + '))' + t);
          }
          var i = '\\\\[0-7]{1,3}';
          var a = '\\\\x[A-Fa-f0-9]{1,2}';
          var o = '\\\\[abefnrtv0%?\'"\\\\]';
          var l =
            '([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])';
          var s =
            r.operators ||
            n(
              [
                '[<>]:',
                '[<>=]=',
                '<<=?',
                '>>>?=?',
                '=>',
                '->',
                '\\/\\/',
                '[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?',
                '\\?',
                '\\$',
                '~',
                ':',
                '\\u00D7',
                '\\u2208',
                '\\u2209',
                '\\u220B',
                '\\u220C',
                '\\u2218',
                '\\u221A',
                '\\u221B',
                '\\u2229',
                '\\u222A',
                '\\u2260',
                '\\u2264',
                '\\u2265',
                '\\u2286',
                '\\u2288',
                '\\u228A',
                '\\u22C5',
                '\\b(in|isa)\\b(?!.?\\()',
              ],
              ''
            );
          var c = r.delimiters || /^[;,()[\]{}]/;
          var u =
            r.identifiers ||
            /^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/;
          var f = n([i, a, o, l], "'");
          var d = [
            'begin',
            'function',
            'type',
            'struct',
            'immutable',
            'let',
            'macro',
            'for',
            'while',
            'quote',
            'if',
            'else',
            'elseif',
            'try',
            'finally',
            'catch',
            'do',
          ];
          var m = ['end', 'else', 'elseif', 'catch', 'finally'];
          var p = [
            'if',
            'else',
            'elseif',
            'while',
            'for',
            'begin',
            'let',
            'end',
            'do',
            'try',
            'catch',
            'finally',
            'return',
            'break',
            'continue',
            'global',
            'local',
            'const',
            'export',
            'import',
            'importall',
            'using',
            'function',
            'where',
            'macro',
            'module',
            'baremodule',
            'struct',
            'type',
            'mutable',
            'immutable',
            'quote',
            'typealias',
            'abstract',
            'primitive',
            'bitstype',
          ];
          var h = ['true', 'false', 'nothing', 'NaN', 'Inf'];
          e.registerHelper('hintWords', 'julia', p.concat(h));
          var g = n(d);
          var v = n(m);
          var b = n(p);
          var x = n(h);
          var k = /^@[_A-Za-z][\w]*/;
          var y = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/;
          var w = /^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;
          function C(e) {
            return e.nestedArrays > 0;
          }
          function _(e) {
            return e.nestedGenerators > 0;
          }
          function S(e, t) {
            if (typeof t === 'undefined') {
              t = 0;
            }
            if (e.scopes.length <= t) {
              return null;
            }
            return e.scopes[e.scopes.length - (t + 1)];
          }
          function L(e, t) {
            if (e.match('#=', false)) {
              t.tokenize = A;
              return t.tokenize(e, t);
            }
            var r = t.leavingExpr;
            if (e.sol()) {
              r = false;
            }
            t.leavingExpr = false;
            if (r) {
              if (e.match(/^'+/)) {
                return 'operator';
              }
            }
            if (e.match(/\.{4,}/)) {
              return 'error';
            } else if (e.match(/\.{1,3}/)) {
              return 'operator';
            }
            if (e.eatSpace()) {
              return null;
            }
            var n = e.peek();
            if (n === '#') {
              e.skipToEnd();
              return 'comment';
            }
            if (n === '[') {
              t.scopes.push('[');
              t.nestedArrays++;
            }
            if (n === '(') {
              t.scopes.push('(');
              t.nestedGenerators++;
            }
            if (C(t) && n === ']') {
              while (t.scopes.length && S(t) !== '[') {
                t.scopes.pop();
              }
              t.scopes.pop();
              t.nestedArrays--;
              t.leavingExpr = true;
            }
            if (_(t) && n === ')') {
              while (t.scopes.length && S(t) !== '(') {
                t.scopes.pop();
              }
              t.scopes.pop();
              t.nestedGenerators--;
              t.leavingExpr = true;
            }
            if (C(t)) {
              if (t.lastToken == 'end' && e.match(':')) {
                return 'operator';
              }
              if (e.match('end')) {
                return 'number';
              }
            }
            var i;
            if ((i = e.match(g, false))) {
              t.scopes.push(i[0]);
            }
            if (e.match(v, false)) {
              t.scopes.pop();
            }
            if (e.match(/^::(?![:\$])/)) {
              t.tokenize = F;
              return t.tokenize(e, t);
            }
            if (
              (!r && e.match(y)) ||
              e.match(
                /:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/
              )
            ) {
              return 'builtin';
            }
            if (e.match(s)) {
              return 'operator';
            }
            if (e.match(/^\.?\d/, false)) {
              var a = RegExp(/^im\b/);
              var o = false;
              if (e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)) {
                o = true;
              }
              if (e.match(/^0x[0-9a-f_]+/i)) {
                o = true;
              }
              if (e.match(/^0b[01_]+/i)) {
                o = true;
              }
              if (e.match(/^0o[0-7_]+/i)) {
                o = true;
              }
              if (
                e.match(
                  /^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i
                )
              ) {
                o = true;
              }
              if (e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)) {
                o = true;
              }
              if (o) {
                e.match(a);
                t.leavingExpr = true;
                return 'number';
              }
            }
            if (e.match("'")) {
              t.tokenize = T;
              return t.tokenize(e, t);
            }
            if (e.match(w)) {
              t.tokenize = M(e.current());
              return t.tokenize(e, t);
            }
            if (e.match(k)) {
              return 'meta';
            }
            if (e.match(c)) {
              return null;
            }
            if (e.match(b)) {
              return 'keyword';
            }
            if (e.match(x)) {
              return 'builtin';
            }
            var l =
              t.isDefinition ||
              t.lastToken == 'function' ||
              t.lastToken == 'macro' ||
              t.lastToken == 'type' ||
              t.lastToken == 'struct' ||
              t.lastToken == 'immutable';
            if (e.match(u)) {
              if (l) {
                if (e.peek() === '.') {
                  t.isDefinition = true;
                  return 'variable';
                }
                t.isDefinition = false;
                return 'def';
              }
              t.leavingExpr = true;
              return 'variable';
            }
            e.next();
            return 'error';
          }
          function F(e, t) {
            e.match(/.*?(?=[,;{}()=\s]|$)/);
            if (e.match('{')) {
              t.nestedParameters++;
            } else if (e.match('}') && t.nestedParameters > 0) {
              t.nestedParameters--;
            }
            if (t.nestedParameters > 0) {
              e.match(/.*?(?={|})/) || e.next();
            } else if (t.nestedParameters == 0) {
              t.tokenize = L;
            }
            return 'builtin';
          }
          function A(e, t) {
            if (e.match('#=')) {
              t.nestedComments++;
            }
            if (!e.match(/.*?(?=(#=|=#))/)) {
              e.skipToEnd();
            }
            if (e.match('=#')) {
              t.nestedComments--;
              if (t.nestedComments == 0) t.tokenize = L;
            }
            return 'comment';
          }
          function T(e, t) {
            var r = false,
              n;
            if (e.match(f)) {
              r = true;
            } else if ((n = e.match(/\\u([a-f0-9]{1,4})(?=')/i))) {
              var i = parseInt(n[1], 16);
              if (i <= 55295 || i >= 57344) {
                r = true;
                e.next();
              }
            } else if ((n = e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/))) {
              var i = parseInt(n[1], 16);
              if (i <= 1114111) {
                r = true;
                e.next();
              }
            }
            if (r) {
              t.leavingExpr = true;
              t.tokenize = L;
              return 'string';
            }
            if (!e.match(/^[^']+(?=')/)) {
              e.skipToEnd();
            }
            if (e.match("'")) {
              t.tokenize = L;
            }
            return 'error';
          }
          function M(e) {
            if (e.substr(-3) === '"""') {
              e = '"""';
            } else if (e.substr(-1) === '"') {
              e = '"';
            }
            function t(t, r) {
              if (t.eat('\\')) {
                t.next();
              } else if (t.match(e)) {
                r.tokenize = L;
                r.leavingExpr = true;
                return 'string';
              } else {
                t.eat(/[`"]/);
              }
              t.eatWhile(/[^\\`"]/);
              return 'string';
            }
            return t;
          }
          var E = {
            startState: function () {
              return {
                tokenize: L,
                scopes: [],
                lastToken: null,
                leavingExpr: false,
                isDefinition: false,
                nestedArrays: 0,
                nestedComments: 0,
                nestedGenerators: 0,
                nestedParameters: 0,
                firstParenPos: -1,
              };
            },
            token: function (e, t) {
              var r = t.tokenize(e, t);
              var n = e.current();
              if (n && r) {
                t.lastToken = n;
              }
              return r;
            },
            indent: function (e, r) {
              var n = 0;
              if (
                r === ']' ||
                r === ')' ||
                /^end\b/.test(r) ||
                /^else/.test(r) ||
                /^catch\b/.test(r) ||
                /^elseif\b/.test(r) ||
                /^finally/.test(r)
              ) {
                n = -1;
              }
              return (e.scopes.length + n) * t.indentUnit;
            },
            electricInput: /\b(end|else|catch|finally)\b/,
            blockCommentStart: '#=',
            blockCommentEnd: '=#',
            lineComment: '#',
            closeBrackets: '()[]{}""',
            fold: 'indent',
          };
          return E;
        });
        e.defineMIME('text/x-julia', 'julia');
      });
    },
    49047: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(29589), r(52539));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'markdown',
          function (t, r) {
            var n = e.getMode(t, 'text/html');
            var i = n.name == 'null';
            function a(r) {
              if (e.findModeByName) {
                var n = e.findModeByName(r);
                if (n) r = n.mime || n.mimes[0];
              }
              var i = e.getMode(t, r);
              return i.name == 'null' ? null : i;
            }
            if (r.highlightFormatting === undefined) r.highlightFormatting = false;
            if (r.maxBlockquoteDepth === undefined) r.maxBlockquoteDepth = 0;
            if (r.taskLists === undefined) r.taskLists = false;
            if (r.strikethrough === undefined) r.strikethrough = false;
            if (r.emoji === undefined) r.emoji = false;
            if (r.fencedCodeBlockHighlighting === undefined)
              r.fencedCodeBlockHighlighting = true;
            if (r.fencedCodeBlockDefaultMode === undefined)
              r.fencedCodeBlockDefaultMode = 'text/plain';
            if (r.xml === undefined) r.xml = true;
            if (r.tokenTypeOverrides === undefined) r.tokenTypeOverrides = {};
            var o = {
              header: 'header',
              code: 'comment',
              quote: 'quote',
              list1: 'variable-2',
              list2: 'variable-3',
              list3: 'keyword',
              hr: 'hr',
              image: 'image',
              imageAltText: 'image-alt-text',
              imageMarker: 'image-marker',
              formatting: 'formatting',
              linkInline: 'link',
              linkEmail: 'link',
              linkText: 'link',
              linkHref: 'string',
              em: 'em',
              strong: 'strong',
              strikethrough: 'strikethrough',
              emoji: 'builtin',
            };
            for (var l in o) {
              if (o.hasOwnProperty(l) && r.tokenTypeOverrides[l]) {
                o[l] = r.tokenTypeOverrides[l];
              }
            }
            var s = /^([*\-_])(?:\s*\1){2,}\s*$/,
              c = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
              u = /^\[(x| )\](?=\s)/i,
              f = r.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
              d = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
              m = /^[^#!\[\]*_\\<>` "'(~:]+/,
              p = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
              h = /^\s*\[[^\]]+?\]:.*$/,
              g =
                /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
              v = '    ';
            function b(e, t, r) {
              t.f = t.inline = r;
              return r(e, t);
            }
            function x(e, t, r) {
              t.f = t.block = r;
              return r(e, t);
            }
            function k(e) {
              return !e || !/\S/.test(e.string);
            }
            function y(t) {
              t.linkTitle = false;
              t.linkHref = false;
              t.linkText = false;
              t.em = false;
              t.strong = false;
              t.strikethrough = false;
              t.quote = 0;
              t.indentedCode = false;
              if (t.f == C) {
                var r = i;
                if (!r) {
                  var a = e.innerMode(n, t.htmlState);
                  r =
                    a.mode.name == 'xml' &&
                    a.state.tagStart === null &&
                    !a.state.context &&
                    a.state.tokenize.isInText;
                }
                if (r) {
                  t.f = F;
                  t.block = w;
                  t.htmlState = null;
                }
              }
              t.trailingSpace = 0;
              t.trailingSpaceNewLine = false;
              t.prevLine = t.thisLine;
              t.thisLine = { stream: null };
              return null;
            }
            function w(t, n) {
              var i = t.column() === n.indentation;
              var l = k(n.prevLine.stream);
              var m = n.indentedCode;
              var g = n.prevLine.hr;
              var v = n.list !== false;
              var x = (n.listStack[n.listStack.length - 1] || 0) + 3;
              n.indentedCode = false;
              var y = n.indentation;
              if (n.indentationDiff === null) {
                n.indentationDiff = n.indentation;
                if (v) {
                  n.list = null;
                  while (y < n.listStack[n.listStack.length - 1]) {
                    n.listStack.pop();
                    if (n.listStack.length) {
                      n.indentation = n.listStack[n.listStack.length - 1];
                    } else {
                      n.list = false;
                    }
                  }
                  if (n.list !== false) {
                    n.indentationDiff = y - n.listStack[n.listStack.length - 1];
                  }
                }
              }
              var w =
                !l &&
                !g &&
                !n.prevLine.header &&
                (!v || !m) &&
                !n.prevLine.fencedCodeEnd;
              var C = (n.list === false || g || l) && n.indentation <= x && t.match(s);
              var L = null;
              if (
                n.indentationDiff >= 4 &&
                (m || n.prevLine.fencedCodeEnd || n.prevLine.header || l)
              ) {
                t.skipToEnd();
                n.indentedCode = true;
                return o.code;
              } else if (t.eatSpace()) {
                return null;
              } else if (
                i &&
                n.indentation <= x &&
                (L = t.match(f)) &&
                L[1].length <= 6
              ) {
                n.quote = 0;
                n.header = L[1].length;
                n.thisLine.header = true;
                if (r.highlightFormatting) n.formatting = 'header';
                n.f = n.inline;
                return S(n);
              } else if (n.indentation <= x && t.eat('>')) {
                n.quote = i ? 1 : n.quote + 1;
                if (r.highlightFormatting) n.formatting = 'quote';
                t.eatSpace();
                return S(n);
              } else if (
                !C &&
                !n.setext &&
                i &&
                n.indentation <= x &&
                (L = t.match(c))
              ) {
                var F = L[1] ? 'ol' : 'ul';
                n.indentation = y + t.current().length;
                n.list = true;
                n.quote = 0;
                n.listStack.push(n.indentation);
                n.em = false;
                n.strong = false;
                n.code = false;
                n.strikethrough = false;
                if (r.taskLists && t.match(u, false)) {
                  n.taskList = true;
                }
                n.f = n.inline;
                if (r.highlightFormatting) n.formatting = ['list', 'list-' + F];
                return S(n);
              } else if (i && n.indentation <= x && (L = t.match(p, true))) {
                n.quote = 0;
                n.fencedEndRE = new RegExp(L[1] + '+ *$');
                n.localMode =
                  r.fencedCodeBlockHighlighting &&
                  a(L[2] || r.fencedCodeBlockDefaultMode);
                if (n.localMode) n.localState = e.startState(n.localMode);
                n.f = n.block = _;
                if (r.highlightFormatting) n.formatting = 'code-block';
                n.code = -1;
                return S(n);
              } else if (
                n.setext ||
                ((!w || !v) &&
                  !n.quote &&
                  n.list === false &&
                  !n.code &&
                  !C &&
                  !h.test(t.string) &&
                  (L = t.lookAhead(1)) &&
                  (L = L.match(d)))
              ) {
                if (!n.setext) {
                  n.header = L[0].charAt(0) == '=' ? 1 : 2;
                  n.setext = n.header;
                } else {
                  n.header = n.setext;
                  n.setext = 0;
                  t.skipToEnd();
                  if (r.highlightFormatting) n.formatting = 'header';
                }
                n.thisLine.header = true;
                n.f = n.inline;
                return S(n);
              } else if (C) {
                t.skipToEnd();
                n.hr = true;
                n.thisLine.hr = true;
                return o.hr;
              } else if (t.peek() === '[') {
                return b(t, n, P);
              }
              return b(t, n, n.inline);
            }
            function C(t, r) {
              var a = n.token(t, r.htmlState);
              if (!i) {
                var o = e.innerMode(n, r.htmlState);
                if (
                  (o.mode.name == 'xml' &&
                    o.state.tagStart === null &&
                    !o.state.context &&
                    o.state.tokenize.isInText) ||
                  (r.md_inside && t.current().indexOf('>') > -1)
                ) {
                  r.f = F;
                  r.block = w;
                  r.htmlState = null;
                }
              }
              return a;
            }
            function _(e, t) {
              var n = t.listStack[t.listStack.length - 1] || 0;
              var i = t.indentation < n;
              var a = n + 3;
              if (
                t.fencedEndRE &&
                t.indentation <= a &&
                (i || e.match(t.fencedEndRE))
              ) {
                if (r.highlightFormatting) t.formatting = 'code-block';
                var l;
                if (!i) l = S(t);
                t.localMode = t.localState = null;
                t.block = w;
                t.f = F;
                t.fencedEndRE = null;
                t.code = 0;
                t.thisLine.fencedCodeEnd = true;
                if (i) return x(e, t, t.block);
                return l;
              } else if (t.localMode) {
                return t.localMode.token(e, t.localState);
              } else {
                e.skipToEnd();
                return o.code;
              }
            }
            function S(e) {
              var t = [];
              if (e.formatting) {
                t.push(o.formatting);
                if (typeof e.formatting === 'string') e.formatting = [e.formatting];
                for (var n = 0; n < e.formatting.length; n++) {
                  t.push(o.formatting + '-' + e.formatting[n]);
                  if (e.formatting[n] === 'header') {
                    t.push(o.formatting + '-' + e.formatting[n] + '-' + e.header);
                  }
                  if (e.formatting[n] === 'quote') {
                    if (!r.maxBlockquoteDepth || r.maxBlockquoteDepth >= e.quote) {
                      t.push(o.formatting + '-' + e.formatting[n] + '-' + e.quote);
                    } else {
                      t.push('error');
                    }
                  }
                }
              }
              if (e.taskOpen) {
                t.push('meta');
                return t.length ? t.join(' ') : null;
              }
              if (e.taskClosed) {
                t.push('property');
                return t.length ? t.join(' ') : null;
              }
              if (e.linkHref) {
                t.push(o.linkHref, 'url');
              } else {
                if (e.strong) {
                  t.push(o.strong);
                }
                if (e.em) {
                  t.push(o.em);
                }
                if (e.strikethrough) {
                  t.push(o.strikethrough);
                }
                if (e.emoji) {
                  t.push(o.emoji);
                }
                if (e.linkText) {
                  t.push(o.linkText);
                }
                if (e.code) {
                  t.push(o.code);
                }
                if (e.image) {
                  t.push(o.image);
                }
                if (e.imageAltText) {
                  t.push(o.imageAltText, 'link');
                }
                if (e.imageMarker) {
                  t.push(o.imageMarker);
                }
              }
              if (e.header) {
                t.push(o.header, o.header + '-' + e.header);
              }
              if (e.quote) {
                t.push(o.quote);
                if (!r.maxBlockquoteDepth || r.maxBlockquoteDepth >= e.quote) {
                  t.push(o.quote + '-' + e.quote);
                } else {
                  t.push(o.quote + '-' + r.maxBlockquoteDepth);
                }
              }
              if (e.list !== false) {
                var i = (e.listStack.length - 1) % 3;
                if (!i) {
                  t.push(o.list1);
                } else if (i === 1) {
                  t.push(o.list2);
                } else {
                  t.push(o.list3);
                }
              }
              if (e.trailingSpaceNewLine) {
                t.push('trailing-space-new-line');
              } else if (e.trailingSpace) {
                t.push('trailing-space-' + (e.trailingSpace % 2 ? 'a' : 'b'));
              }
              return t.length ? t.join(' ') : null;
            }
            function L(e, t) {
              if (e.match(m, true)) {
                return S(t);
              }
              return undefined;
            }
            function F(t, i) {
              var a = i.text(t, i);
              if (typeof a !== 'undefined') return a;
              if (i.list) {
                i.list = null;
                return S(i);
              }
              if (i.taskList) {
                var l = t.match(u, true)[1] === ' ';
                if (l) i.taskOpen = true;
                else i.taskClosed = true;
                if (r.highlightFormatting) i.formatting = 'task';
                i.taskList = false;
                return S(i);
              }
              i.taskOpen = false;
              i.taskClosed = false;
              if (i.header && t.match(/^#+$/, true)) {
                if (r.highlightFormatting) i.formatting = 'header';
                return S(i);
              }
              var s = t.next();
              if (i.linkTitle) {
                i.linkTitle = false;
                var c = s;
                if (s === '(') {
                  c = ')';
                }
                c = (c + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1');
                var f = '^\\s*(?:[^' + c + '\\\\]+|\\\\\\\\|\\\\.)' + c;
                if (t.match(new RegExp(f), true)) {
                  return o.linkHref;
                }
              }
              if (s === '`') {
                var d = i.formatting;
                if (r.highlightFormatting) i.formatting = 'code';
                t.eatWhile('`');
                var m = t.current().length;
                if (i.code == 0 && (!i.quote || m == 1)) {
                  i.code = m;
                  return S(i);
                } else if (m == i.code) {
                  var p = S(i);
                  i.code = 0;
                  return p;
                } else {
                  i.formatting = d;
                  return S(i);
                }
              } else if (i.code) {
                return S(i);
              }
              if (s === '\\') {
                t.next();
                if (r.highlightFormatting) {
                  var h = S(i);
                  var v = o.formatting + '-escape';
                  return h ? h + ' ' + v : v;
                }
              }
              if (s === '!' && t.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
                i.imageMarker = true;
                i.image = true;
                if (r.highlightFormatting) i.formatting = 'image';
                return S(i);
              }
              if (
                s === '[' &&
                i.imageMarker &&
                t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)
              ) {
                i.imageMarker = false;
                i.imageAltText = true;
                if (r.highlightFormatting) i.formatting = 'image';
                return S(i);
              }
              if (s === ']' && i.imageAltText) {
                if (r.highlightFormatting) i.formatting = 'image';
                var h = S(i);
                i.imageAltText = false;
                i.image = false;
                i.inline = i.f = T;
                return h;
              }
              if (s === '[' && !i.image) {
                if (i.linkText && t.match(/^.*?\]/)) return S(i);
                i.linkText = true;
                if (r.highlightFormatting) i.formatting = 'link';
                return S(i);
              }
              if (s === ']' && i.linkText) {
                if (r.highlightFormatting) i.formatting = 'link';
                var h = S(i);
                i.linkText = false;
                i.inline = i.f = t.match(/\(.*?\)| ?\[.*?\]/, false) ? T : F;
                return h;
              }
              if (s === '<' && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
                i.f = i.inline = A;
                if (r.highlightFormatting) i.formatting = 'link';
                var h = S(i);
                if (h) {
                  h += ' ';
                } else {
                  h = '';
                }
                return h + o.linkInline;
              }
              if (s === '<' && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
                i.f = i.inline = A;
                if (r.highlightFormatting) i.formatting = 'link';
                var h = S(i);
                if (h) {
                  h += ' ';
                } else {
                  h = '';
                }
                return h + o.linkEmail;
              }
              if (
                r.xml &&
                s === '<' &&
                t.match(
                  /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                  false
                )
              ) {
                var b = t.string.indexOf('>', t.pos);
                if (b != -1) {
                  var k = t.string.substring(t.start, b);
                  if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k))
                    i.md_inside = true;
                }
                t.backUp(1);
                i.htmlState = e.startState(n);
                return x(t, i, C);
              }
              if (r.xml && s === '<' && t.match(/^\/\w*?>/)) {
                i.md_inside = false;
                return 'tag';
              } else if (s === '*' || s === '_') {
                var y = 1,
                  w = t.pos == 1 ? ' ' : t.string.charAt(t.pos - 2);
                while (y < 3 && t.eat(s)) y++;
                var _ = t.peek() || ' ';
                var L = !/\s/.test(_) && (!g.test(_) || /\s/.test(w) || g.test(w));
                var M = !/\s/.test(w) && (!g.test(w) || /\s/.test(_) || g.test(_));
                var E = null,
                  P = null;
                if (y % 2) {
                  if (!i.em && L && (s === '*' || !M || g.test(w))) E = true;
                  else if (i.em == s && M && (s === '*' || !L || g.test(_))) E = false;
                }
                if (y > 1) {
                  if (!i.strong && L && (s === '*' || !M || g.test(w))) P = true;
                  else if (i.strong == s && M && (s === '*' || !L || g.test(_)))
                    P = false;
                }
                if (P != null || E != null) {
                  if (r.highlightFormatting)
                    i.formatting =
                      E == null ? 'strong' : P == null ? 'em' : 'strong em';
                  if (E === true) i.em = s;
                  if (P === true) i.strong = s;
                  var p = S(i);
                  if (E === false) i.em = false;
                  if (P === false) i.strong = false;
                  return p;
                }
              } else if (s === ' ') {
                if (t.eat('*') || t.eat('_')) {
                  if (t.peek() === ' ') {
                    return S(i);
                  } else {
                    t.backUp(1);
                  }
                }
              }
              if (r.strikethrough) {
                if (s === '~' && t.eatWhile(s)) {
                  if (i.strikethrough) {
                    if (r.highlightFormatting) i.formatting = 'strikethrough';
                    var p = S(i);
                    i.strikethrough = false;
                    return p;
                  } else if (t.match(/^[^\s]/, false)) {
                    i.strikethrough = true;
                    if (r.highlightFormatting) i.formatting = 'strikethrough';
                    return S(i);
                  }
                } else if (s === ' ') {
                  if (t.match('~~', true)) {
                    if (t.peek() === ' ') {
                      return S(i);
                    } else {
                      t.backUp(2);
                    }
                  }
                }
              }
              if (
                r.emoji &&
                s === ':' &&
                t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
              ) {
                i.emoji = true;
                if (r.highlightFormatting) i.formatting = 'emoji';
                var D = S(i);
                i.emoji = false;
                return D;
              }
              if (s === ' ') {
                if (t.match(/^ +$/, false)) {
                  i.trailingSpace++;
                } else if (i.trailingSpace) {
                  i.trailingSpaceNewLine = true;
                }
              }
              return S(i);
            }
            function A(e, t) {
              var n = e.next();
              if (n === '>') {
                t.f = t.inline = F;
                if (r.highlightFormatting) t.formatting = 'link';
                var i = S(t);
                if (i) {
                  i += ' ';
                } else {
                  i = '';
                }
                return i + o.linkInline;
              }
              e.match(/^[^>]+/, true);
              return o.linkInline;
            }
            function T(e, t) {
              if (e.eatSpace()) {
                return null;
              }
              var n = e.next();
              if (n === '(' || n === '[') {
                t.f = t.inline = E(n === '(' ? ')' : ']');
                if (r.highlightFormatting) t.formatting = 'link-string';
                t.linkHref = true;
                return S(t);
              }
              return 'error';
            }
            var M = {
              ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
              ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
            };
            function E(e) {
              return function (t, n) {
                var i = t.next();
                if (i === e) {
                  n.f = n.inline = F;
                  if (r.highlightFormatting) n.formatting = 'link-string';
                  var a = S(n);
                  n.linkHref = false;
                  return a;
                }
                t.match(M[e]);
                n.linkHref = true;
                return S(n);
              };
            }
            function P(e, t) {
              if (e.match(/^([^\]\\]|\\.)*\]:/, false)) {
                t.f = D;
                e.next();
                if (r.highlightFormatting) t.formatting = 'link';
                t.linkText = true;
                return S(t);
              }
              return b(e, t, F);
            }
            function D(e, t) {
              if (e.match(']:', true)) {
                t.f = t.inline = z;
                if (r.highlightFormatting) t.formatting = 'link';
                var n = S(t);
                t.linkText = false;
                return n;
              }
              e.match(/^([^\]\\]|\\.)+/, true);
              return o.linkText;
            }
            function z(e, t) {
              if (e.eatSpace()) {
                return null;
              }
              e.match(/^[^\s]+/, true);
              if (e.peek() === undefined) {
                t.linkTitle = true;
              } else {
                e.match(
                  /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                  true
                );
              }
              t.f = t.inline = F;
              return o.linkHref + ' url';
            }
            var I = {
              startState: function () {
                return {
                  f: w,
                  prevLine: { stream: null },
                  thisLine: { stream: null },
                  block: w,
                  htmlState: null,
                  indentation: 0,
                  inline: F,
                  text: L,
                  formatting: false,
                  linkText: false,
                  linkHref: false,
                  linkTitle: false,
                  code: 0,
                  em: false,
                  strong: false,
                  header: 0,
                  setext: 0,
                  hr: false,
                  taskList: false,
                  list: false,
                  listStack: [],
                  quote: 0,
                  trailingSpace: 0,
                  trailingSpaceNewLine: false,
                  strikethrough: false,
                  emoji: false,
                  fencedEndRE: null,
                };
              },
              copyState: function (t) {
                return {
                  f: t.f,
                  prevLine: t.prevLine,
                  thisLine: t.thisLine,
                  block: t.block,
                  htmlState: t.htmlState && e.copyState(n, t.htmlState),
                  indentation: t.indentation,
                  localMode: t.localMode,
                  localState: t.localMode
                    ? e.copyState(t.localMode, t.localState)
                    : null,
                  inline: t.inline,
                  text: t.text,
                  formatting: false,
                  linkText: t.linkText,
                  linkTitle: t.linkTitle,
                  linkHref: t.linkHref,
                  code: t.code,
                  em: t.em,
                  strong: t.strong,
                  strikethrough: t.strikethrough,
                  emoji: t.emoji,
                  header: t.header,
                  setext: t.setext,
                  hr: t.hr,
                  taskList: t.taskList,
                  list: t.list,
                  listStack: t.listStack.slice(0),
                  quote: t.quote,
                  indentedCode: t.indentedCode,
                  trailingSpace: t.trailingSpace,
                  trailingSpaceNewLine: t.trailingSpaceNewLine,
                  md_inside: t.md_inside,
                  fencedEndRE: t.fencedEndRE,
                };
              },
              token: function (e, t) {
                t.formatting = false;
                if (e != t.thisLine.stream) {
                  t.header = 0;
                  t.hr = false;
                  if (e.match(/^\s*$/, true)) {
                    y(t);
                    return null;
                  }
                  t.prevLine = t.thisLine;
                  t.thisLine = { stream: e };
                  t.taskList = false;
                  t.trailingSpace = 0;
                  t.trailingSpaceNewLine = false;
                  if (!t.localState) {
                    t.f = t.block;
                    if (t.f != C) {
                      var r = e.match(/^\s*/, true)[0].replace(/\t/g, v).length;
                      t.indentation = r;
                      t.indentationDiff = null;
                      if (r > 0) return null;
                    }
                  }
                }
                return t.f(e, t);
              },
              innerMode: function (e) {
                if (e.block == C) return { state: e.htmlState, mode: n };
                if (e.localState) return { state: e.localState, mode: e.localMode };
                return { state: e, mode: I };
              },
              indent: function (t, r, i) {
                if (t.block == C && n.indent) return n.indent(t.htmlState, r, i);
                if (t.localState && t.localMode.indent)
                  return t.localMode.indent(t.localState, r, i);
                return e.Pass;
              },
              blankLine: y,
              getType: S,
              blockCommentStart: '\x3c!--',
              blockCommentEnd: '--\x3e',
              closeBrackets: '()[]{}\'\'""``',
              fold: 'markdown',
            };
            return I;
          },
          'xml'
        );
        e.defineMIME('text/markdown', 'markdown');
        e.defineMIME('text/x-markdown', 'markdown');
      });
    },
    52539: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.modeInfo = [
          { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
          {
            name: 'PGP',
            mimes: [
              'application/pgp',
              'application/pgp-encrypted',
              'application/pgp-keys',
              'application/pgp-signature',
            ],
            mode: 'asciiarmor',
            ext: ['asc', 'pgp', 'sig'],
          },
          {
            name: 'ASN.1',
            mime: 'text/x-ttcn-asn',
            mode: 'asn.1',
            ext: ['asn', 'asn1'],
          },
          {
            name: 'Asterisk',
            mime: 'text/x-asterisk',
            mode: 'asterisk',
            file: /^extensions\.conf$/i,
          },
          {
            name: 'Brainfuck',
            mime: 'text/x-brainfuck',
            mode: 'brainfuck',
            ext: ['b', 'bf'],
          },
          { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
          {
            name: 'C++',
            mime: 'text/x-c++src',
            mode: 'clike',
            ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
            alias: ['cpp'],
          },
          { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy'] },
          {
            name: 'C#',
            mime: 'text/x-csharp',
            mode: 'clike',
            ext: ['cs'],
            alias: ['csharp', 'cs'],
          },
          {
            name: 'Clojure',
            mime: 'text/x-clojure',
            mode: 'clojure',
            ext: ['clj', 'cljc', 'cljx'],
          },
          {
            name: 'ClojureScript',
            mime: 'text/x-clojurescript',
            mode: 'clojure',
            ext: ['cljs'],
          },
          {
            name: 'Closure Stylesheets (GSS)',
            mime: 'text/x-gss',
            mode: 'css',
            ext: ['gss'],
          },
          {
            name: 'CMake',
            mime: 'text/x-cmake',
            mode: 'cmake',
            ext: ['cmake', 'cmake.in'],
            file: /^CMakeLists\.txt$/,
          },
          {
            name: 'CoffeeScript',
            mimes: [
              'application/vnd.coffeescript',
              'text/coffeescript',
              'text/x-coffeescript',
            ],
            mode: 'coffeescript',
            ext: ['coffee'],
            alias: ['coffee', 'coffee-script'],
          },
          {
            name: 'Common Lisp',
            mime: 'text/x-common-lisp',
            mode: 'commonlisp',
            ext: ['cl', 'lisp', 'el'],
            alias: ['lisp'],
          },
          {
            name: 'Cypher',
            mime: 'application/x-cypher-query',
            mode: 'cypher',
            ext: ['cyp', 'cypher'],
          },
          {
            name: 'Cython',
            mime: 'text/x-cython',
            mode: 'python',
            ext: ['pyx', 'pxd', 'pxi'],
          },
          { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
          { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
          { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
          { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
          {
            name: 'Dart',
            mimes: ['application/dart', 'text/x-dart'],
            mode: 'dart',
            ext: ['dart'],
          },
          { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
          { name: 'Django', mime: 'text/x-django', mode: 'django' },
          {
            name: 'Dockerfile',
            mime: 'text/x-dockerfile',
            mode: 'dockerfile',
            file: /^Dockerfile$/,
          },
          { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
          {
            name: 'Dylan',
            mime: 'text/x-dylan',
            mode: 'dylan',
            ext: ['dylan', 'dyl', 'intr'],
          },
          { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
          { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
          { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
          { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
          { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
          {
            name: 'Embedded JavaScript',
            mime: 'application/x-ejs',
            mode: 'htmlembedded',
            ext: ['ejs'],
          },
          {
            name: 'Embedded Ruby',
            mime: 'application/x-erb',
            mode: 'htmlembedded',
            ext: ['erb'],
          },
          { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
          { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
          { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
          { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
          {
            name: 'Forth',
            mime: 'text/x-forth',
            mode: 'forth',
            ext: ['forth', 'fth', '4th'],
          },
          {
            name: 'Fortran',
            mime: 'text/x-fortran',
            mode: 'fortran',
            ext: ['f', 'for', 'f77', 'f90', 'f95'],
          },
          {
            name: 'F#',
            mime: 'text/x-fsharp',
            mode: 'mllike',
            ext: ['fs'],
            alias: ['fsharp'],
          },
          { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
          {
            name: 'Gherkin',
            mime: 'text/x-feature',
            mode: 'gherkin',
            ext: ['feature'],
          },
          {
            name: 'GitHub Flavored Markdown',
            mime: 'text/x-gfm',
            mode: 'gfm',
            file: /^(readme|contributing|history)\.md$/i,
          },
          { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
          {
            name: 'Groovy',
            mime: 'text/x-groovy',
            mode: 'groovy',
            ext: ['groovy', 'gradle'],
            file: /^Jenkinsfile$/,
          },
          { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
          { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
          {
            name: 'Haskell (Literate)',
            mime: 'text/x-literate-haskell',
            mode: 'haskell-literate',
            ext: ['lhs'],
          },
          { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
          { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
          {
            name: 'ASP.NET',
            mime: 'application/x-aspx',
            mode: 'htmlembedded',
            ext: ['aspx'],
            alias: ['asp', 'aspx'],
          },
          {
            name: 'HTML',
            mime: 'text/html',
            mode: 'htmlmixed',
            ext: ['html', 'htm', 'handlebars', 'hbs'],
            alias: ['xhtml'],
          },
          { name: 'HTTP', mime: 'message/http', mode: 'http' },
          { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
          {
            name: 'Pug',
            mime: 'text/x-pug',
            mode: 'pug',
            ext: ['jade', 'pug'],
            alias: ['jade'],
          },
          { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
          {
            name: 'Java Server Pages',
            mime: 'application/x-jsp',
            mode: 'htmlembedded',
            ext: ['jsp'],
            alias: ['jsp'],
          },
          {
            name: 'JavaScript',
            mimes: [
              'text/javascript',
              'text/ecmascript',
              'application/javascript',
              'application/x-javascript',
              'application/ecmascript',
            ],
            mode: 'javascript',
            ext: ['js'],
            alias: ['ecmascript', 'js', 'node'],
          },
          {
            name: 'JSON',
            mimes: ['application/json', 'application/x-json'],
            mode: 'javascript',
            ext: ['json', 'map'],
            alias: ['json5'],
          },
          {
            name: 'JSON-LD',
            mime: 'application/ld+json',
            mode: 'javascript',
            ext: ['jsonld'],
            alias: ['jsonld'],
          },
          { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
          {
            name: 'Jinja2',
            mime: 'text/jinja2',
            mode: 'jinja2',
            ext: ['j2', 'jinja', 'jinja2'],
          },
          {
            name: 'Julia',
            mime: 'text/x-julia',
            mode: 'julia',
            ext: ['jl'],
            alias: ['jl'],
          },
          { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
          { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
          {
            name: 'LiveScript',
            mime: 'text/x-livescript',
            mode: 'livescript',
            ext: ['ls'],
            alias: ['ls'],
          },
          { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
          {
            name: 'Markdown',
            mime: 'text/x-markdown',
            mode: 'markdown',
            ext: ['markdown', 'md', 'mkd'],
          },
          { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
          { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
          {
            name: 'Mathematica',
            mime: 'text/x-mathematica',
            mode: 'mathematica',
            ext: ['m', 'nb', 'wl', 'wls'],
          },
          { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
          { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
          { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
          { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
          { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
          {
            name: 'Nginx',
            mime: 'text/x-nginx-conf',
            mode: 'nginx',
            file: /nginx.*\.conf$/i,
          },
          { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
          {
            name: 'NTriples',
            mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
            mode: 'ntriples',
            ext: ['nt', 'nq'],
          },
          {
            name: 'Objective-C',
            mime: 'text/x-objectivec',
            mode: 'clike',
            ext: ['m'],
            alias: ['objective-c', 'objc'],
          },
          {
            name: 'Objective-C++',
            mime: 'text/x-objectivec++',
            mode: 'clike',
            ext: ['mm'],
            alias: ['objective-c++', 'objc++'],
          },
          {
            name: 'OCaml',
            mime: 'text/x-ocaml',
            mode: 'mllike',
            ext: ['ml', 'mli', 'mll', 'mly'],
          },
          { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
          { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
          { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
          { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
          { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
          {
            name: 'PHP',
            mimes: [
              'text/x-php',
              'application/x-httpd-php',
              'application/x-httpd-php-open',
            ],
            mode: 'php',
            ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
          },
          { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
          {
            name: 'Plain Text',
            mime: 'text/plain',
            mode: 'null',
            ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
          },
          { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
          { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
          {
            name: 'PowerShell',
            mime: 'application/x-powershell',
            mode: 'powershell',
            ext: ['ps1', 'psd1', 'psm1'],
          },
          {
            name: 'Properties files',
            mime: 'text/x-properties',
            mode: 'properties',
            ext: ['properties', 'ini', 'in'],
            alias: ['ini', 'properties'],
          },
          {
            name: 'ProtoBuf',
            mime: 'text/x-protobuf',
            mode: 'protobuf',
            ext: ['proto'],
          },
          {
            name: 'Python',
            mime: 'text/x-python',
            mode: 'python',
            ext: ['BUILD', 'bzl', 'py', 'pyw'],
            file: /^(BUCK|BUILD)$/,
          },
          { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
          { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
          {
            name: 'R',
            mime: 'text/x-rsrc',
            mode: 'r',
            ext: ['r', 'R'],
            alias: ['rscript'],
          },
          {
            name: 'reStructuredText',
            mime: 'text/x-rst',
            mode: 'rst',
            ext: ['rst'],
            alias: ['rst'],
          },
          { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
          { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
          {
            name: 'Ruby',
            mime: 'text/x-ruby',
            mode: 'ruby',
            ext: ['rb'],
            alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
          },
          { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
          { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
          { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
          { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
          { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
          { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
          {
            name: 'Shell',
            mimes: ['text/x-sh', 'application/x-sh'],
            mode: 'shell',
            ext: ['sh', 'ksh', 'bash'],
            alias: ['bash', 'sh', 'zsh'],
            file: /^PKGBUILD$/,
          },
          {
            name: 'Sieve',
            mime: 'application/sieve',
            mode: 'sieve',
            ext: ['siv', 'sieve'],
          },
          {
            name: 'Slim',
            mimes: ['text/x-slim', 'application/x-slim'],
            mode: 'slim',
            ext: ['slim'],
          },
          { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
          { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
          { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
          {
            name: 'SML',
            mime: 'text/x-sml',
            mode: 'mllike',
            ext: ['sml', 'sig', 'fun', 'smackspec'],
          },
          {
            name: 'Soy',
            mime: 'text/x-soy',
            mode: 'soy',
            ext: ['soy'],
            alias: ['closure template'],
          },
          {
            name: 'SPARQL',
            mime: 'application/sparql-query',
            mode: 'sparql',
            ext: ['rq', 'sparql'],
            alias: ['sparul'],
          },
          {
            name: 'Spreadsheet',
            mime: 'text/x-spreadsheet',
            mode: 'spreadsheet',
            alias: ['excel', 'formula'],
          },
          { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
          { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
          { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
          { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
          { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
          { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
          {
            name: 'LaTeX',
            mime: 'text/x-latex',
            mode: 'stex',
            ext: ['text', 'ltx', 'tex'],
            alias: ['tex'],
          },
          {
            name: 'SystemVerilog',
            mime: 'text/x-systemverilog',
            mode: 'verilog',
            ext: ['v', 'sv', 'svh'],
          },
          { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
          {
            name: 'Textile',
            mime: 'text/x-textile',
            mode: 'textile',
            ext: ['textile'],
          },
          { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
          { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
          { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
          { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
          {
            name: 'troff',
            mime: 'text/troff',
            mode: 'troff',
            ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
          },
          {
            name: 'TTCN',
            mime: 'text/x-ttcn',
            mode: 'ttcn',
            ext: ['ttcn', 'ttcn3', 'ttcnpp'],
          },
          { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
          { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
          {
            name: 'TypeScript',
            mime: 'application/typescript',
            mode: 'javascript',
            ext: ['ts'],
            alias: ['ts'],
          },
          {
            name: 'TypeScript-JSX',
            mime: 'text/typescript-jsx',
            mode: 'jsx',
            ext: ['tsx'],
            alias: ['tsx'],
          },
          { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
          { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
          { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
          { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
          { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
          { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
          { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
          {
            name: 'Vue.js Component',
            mimes: ['script/x-vue', 'text/x-vue'],
            mode: 'vue',
            ext: ['vue'],
          },
          {
            name: 'XML',
            mimes: ['application/xml', 'text/xml'],
            mode: 'xml',
            ext: ['xml', 'xsl', 'xsd', 'svg'],
            alias: ['rss', 'wsdl', 'xsd'],
          },
          {
            name: 'XQuery',
            mime: 'application/xquery',
            mode: 'xquery',
            ext: ['xy', 'xquery'],
          },
          { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
          {
            name: 'YAML',
            mimes: ['text/x-yaml', 'text/yaml'],
            mode: 'yaml',
            ext: ['yaml', 'yml'],
            alias: ['yml'],
          },
          { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
          {
            name: 'mscgen',
            mime: 'text/x-mscgen',
            mode: 'mscgen',
            ext: ['mscgen', 'mscin', 'msc'],
          },
          { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
          { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
          {
            name: 'WebAssembly',
            mime: 'text/webassembly',
            mode: 'wast',
            ext: ['wat', 'wast'],
          },
        ];
        for (var t = 0; t < e.modeInfo.length; t++) {
          var r = e.modeInfo[t];
          if (r.mimes) r.mime = r.mimes[0];
        }
        e.findModeByMIME = function (t) {
          t = t.toLowerCase();
          for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.mime == t) return n;
            if (n.mimes)
              for (var i = 0; i < n.mimes.length; i++) if (n.mimes[i] == t) return n;
          }
          if (/\+xml$/.test(t)) return e.findModeByMIME('application/xml');
          if (/\+json$/.test(t)) return e.findModeByMIME('application/json');
        };
        e.findModeByExtension = function (t) {
          t = t.toLowerCase();
          for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.ext)
              for (var i = 0; i < n.ext.length; i++) if (n.ext[i] == t) return n;
          }
        };
        e.findModeByFileName = function (t) {
          for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.file && n.file.test(t)) return n;
          }
          var i = t.lastIndexOf('.');
          var a = i > -1 && t.substring(i + 1, t.length);
          if (a) return e.findModeByExtension(a);
        };
        e.findModeByName = function (t) {
          t = t.toLowerCase();
          for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.name.toLowerCase() == t) return n;
            if (n.alias)
              for (var i = 0; i < n.alias.length; i++)
                if (n.alias[i].toLowerCase() == t) return n;
          }
        };
      });
    },
    5321: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          return new RegExp('^((' + e.join(')|(') + '))\\b');
        }
        var r = t(['and', 'or', 'not', 'is']);
        var n = [
          'as',
          'assert',
          'break',
          'class',
          'continue',
          'def',
          'del',
          'elif',
          'else',
          'except',
          'finally',
          'for',
          'from',
          'global',
          'if',
          'import',
          'lambda',
          'pass',
          'raise',
          'return',
          'try',
          'while',
          'with',
          'yield',
          'in',
        ];
        var i = [
          'abs',
          'all',
          'any',
          'bin',
          'bool',
          'bytearray',
          'callable',
          'chr',
          'classmethod',
          'compile',
          'complex',
          'delattr',
          'dict',
          'dir',
          'divmod',
          'enumerate',
          'eval',
          'filter',
          'float',
          'format',
          'frozenset',
          'getattr',
          'globals',
          'hasattr',
          'hash',
          'help',
          'hex',
          'id',
          'input',
          'int',
          'isinstance',
          'issubclass',
          'iter',
          'len',
          'list',
          'locals',
          'map',
          'max',
          'memoryview',
          'min',
          'next',
          'object',
          'oct',
          'open',
          'ord',
          'pow',
          'property',
          'range',
          'repr',
          'reversed',
          'round',
          'set',
          'setattr',
          'slice',
          'sorted',
          'staticmethod',
          'str',
          'sum',
          'super',
          'tuple',
          'type',
          'vars',
          'zip',
          '__import__',
          'NotImplemented',
          'Ellipsis',
          '__debug__',
        ];
        e.registerHelper('hintWords', 'python', n.concat(i));
        function a(e) {
          return e.scopes[e.scopes.length - 1];
        }
        e.defineMode('python', function (o, l) {
          var s = 'error';
          var c = l.delimiters || l.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/;
          var u = [
            l.singleOperators,
            l.doubleOperators,
            l.doubleDelimiters,
            l.tripleDelimiters,
            l.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
          ];
          for (var f = 0; f < u.length; f++) if (!u[f]) u.splice(f--, 1);
          var d = l.hangingIndent || o.indentUnit;
          var m = n,
            p = i;
          if (l.extra_keywords != undefined) m = m.concat(l.extra_keywords);
          if (l.extra_builtins != undefined) p = p.concat(l.extra_builtins);
          var h = !(l.version && Number(l.version) < 3);
          if (h) {
            var g =
              l.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
            m = m.concat(['nonlocal', 'False', 'True', 'None', 'async', 'await']);
            p = p.concat(['ascii', 'bytes', 'exec', 'print']);
            var v = new RegExp('^(([rbuf]|(br)|(fr))?(\'{3}|"{3}|[\'"]))', 'i');
          } else {
            var g = l.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
            m = m.concat(['exec', 'print']);
            p = p.concat([
              'apply',
              'basestring',
              'buffer',
              'cmp',
              'coerce',
              'execfile',
              'file',
              'intern',
              'long',
              'raw_input',
              'reduce',
              'reload',
              'unichr',
              'unicode',
              'xrange',
              'False',
              'True',
              'None',
            ]);
            var v = new RegExp('^(([rubf]|(ur)|(br))?(\'{3}|"{3}|[\'"]))', 'i');
          }
          var b = t(m);
          var x = t(p);
          function k(e, t) {
            var r = e.sol() && t.lastToken != '\\';
            if (r) t.indent = e.indentation();
            if (r && a(t).type == 'py') {
              var n = a(t).offset;
              if (e.eatSpace()) {
                var i = e.indentation();
                if (i > n) _(t);
                else if (i < n && L(e, t) && e.peek() != '#') t.errorToken = true;
                return null;
              } else {
                var o = y(e, t);
                if (n > 0 && L(e, t)) o += ' ' + s;
                return o;
              }
            }
            return y(e, t);
          }
          function y(e, t, n) {
            if (e.eatSpace()) return null;
            if (!n && e.match(/^#.*/)) return 'comment';
            if (e.match(/^[0-9\.]/, false)) {
              var i = false;
              if (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)) {
                i = true;
              }
              if (e.match(/^[\d_]+\.\d*/)) {
                i = true;
              }
              if (e.match(/^\.\d+/)) {
                i = true;
              }
              if (i) {
                e.eat(/J/i);
                return 'number';
              }
              var a = false;
              if (e.match(/^0x[0-9a-f_]+/i)) a = true;
              if (e.match(/^0b[01_]+/i)) a = true;
              if (e.match(/^0o[0-7_]+/i)) a = true;
              if (e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)) {
                e.eat(/J/i);
                a = true;
              }
              if (e.match(/^0(?![\dx])/i)) a = true;
              if (a) {
                e.eat(/L/i);
                return 'number';
              }
            }
            if (e.match(v)) {
              var o = e.current().toLowerCase().indexOf('f') !== -1;
              if (!o) {
                t.tokenize = C(e.current(), t.tokenize);
                return t.tokenize(e, t);
              } else {
                t.tokenize = w(e.current(), t.tokenize);
                return t.tokenize(e, t);
              }
            }
            for (var l = 0; l < u.length; l++) if (e.match(u[l])) return 'operator';
            if (e.match(c)) return 'punctuation';
            if (t.lastToken == '.' && e.match(g)) return 'property';
            if (e.match(b) || e.match(r)) return 'keyword';
            if (e.match(x)) return 'builtin';
            if (e.match(/^(self|cls)\b/)) return 'variable-2';
            if (e.match(g)) {
              if (t.lastToken == 'def' || t.lastToken == 'class') return 'def';
              return 'variable';
            }
            e.next();
            return n ? null : s;
          }
          function w(e, t) {
            while ('rubf'.indexOf(e.charAt(0).toLowerCase()) >= 0) e = e.substr(1);
            var r = e.length == 1;
            var n = 'string';
            function i(e) {
              return function (t, r) {
                var n = y(t, r, true);
                if (n == 'punctuation') {
                  if (t.current() == '{') {
                    r.tokenize = i(e + 1);
                  } else if (t.current() == '}') {
                    if (e > 1) r.tokenize = i(e - 1);
                    else r.tokenize = a;
                  }
                }
                return n;
              };
            }
            function a(a, o) {
              while (!a.eol()) {
                a.eatWhile(/[^'"\{\}\\]/);
                if (a.eat('\\')) {
                  a.next();
                  if (r && a.eol()) return n;
                } else if (a.match(e)) {
                  o.tokenize = t;
                  return n;
                } else if (a.match('{{')) {
                  return n;
                } else if (a.match('{', false)) {
                  o.tokenize = i(0);
                  if (a.current()) return n;
                  else return o.tokenize(a, o);
                } else if (a.match('}}')) {
                  return n;
                } else if (a.match('}')) {
                  return s;
                } else {
                  a.eat(/['"]/);
                }
              }
              if (r) {
                if (l.singleLineStringErrors) return s;
                else o.tokenize = t;
              }
              return n;
            }
            a.isString = true;
            return a;
          }
          function C(e, t) {
            while ('rubf'.indexOf(e.charAt(0).toLowerCase()) >= 0) e = e.substr(1);
            var r = e.length == 1;
            var n = 'string';
            function i(i, a) {
              while (!i.eol()) {
                i.eatWhile(/[^'"\\]/);
                if (i.eat('\\')) {
                  i.next();
                  if (r && i.eol()) return n;
                } else if (i.match(e)) {
                  a.tokenize = t;
                  return n;
                } else {
                  i.eat(/['"]/);
                }
              }
              if (r) {
                if (l.singleLineStringErrors) return s;
                else a.tokenize = t;
              }
              return n;
            }
            i.isString = true;
            return i;
          }
          function _(e) {
            while (a(e).type != 'py') e.scopes.pop();
            e.scopes.push({
              offset: a(e).offset + o.indentUnit,
              type: 'py',
              align: null,
            });
          }
          function S(e, t, r) {
            var n = e.match(/^[\s\[\{\(]*(?:#|$)/, false) ? null : e.column() + 1;
            t.scopes.push({ offset: t.indent + d, type: r, align: n });
          }
          function L(e, t) {
            var r = e.indentation();
            while (t.scopes.length > 1 && a(t).offset > r) {
              if (a(t).type != 'py') return true;
              t.scopes.pop();
            }
            return a(t).offset != r;
          }
          function F(e, t) {
            if (e.sol()) t.beginningOfLine = true;
            var r = t.tokenize(e, t);
            var n = e.current();
            if (t.beginningOfLine && n == '@')
              return e.match(g, false) ? 'meta' : h ? 'operator' : s;
            if (/\S/.test(n)) t.beginningOfLine = false;
            if ((r == 'variable' || r == 'builtin') && t.lastToken == 'meta')
              r = 'meta';
            if (n == 'pass' || n == 'return') t.dedent += 1;
            if (n == 'lambda') t.lambda = true;
            if (
              n == ':' &&
              !t.lambda &&
              a(t).type == 'py' &&
              e.match(/^\s*(?:#|$)/, false)
            )
              _(t);
            if (n.length == 1 && !/string|comment/.test(r)) {
              var i = '[({'.indexOf(n);
              if (i != -1) S(e, t, '])}'.slice(i, i + 1));
              i = '])}'.indexOf(n);
              if (i != -1) {
                if (a(t).type == n) t.indent = t.scopes.pop().offset - d;
                else return s;
              }
            }
            if (t.dedent > 0 && e.eol() && a(t).type == 'py') {
              if (t.scopes.length > 1) t.scopes.pop();
              t.dedent -= 1;
            }
            return r;
          }
          var A = {
            startState: function (e) {
              return {
                tokenize: k,
                scopes: [{ offset: e || 0, type: 'py', align: null }],
                indent: e || 0,
                lastToken: null,
                lambda: false,
                dedent: 0,
              };
            },
            token: function (e, t) {
              var r = t.errorToken;
              if (r) t.errorToken = false;
              var n = F(e, t);
              if (n && n != 'comment')
                t.lastToken = n == 'keyword' || n == 'punctuation' ? e.current() : n;
              if (n == 'punctuation') n = null;
              if (e.eol() && t.lambda) t.lambda = false;
              return r ? n + ' ' + s : n;
            },
            indent: function (t, r) {
              if (t.tokenize != k) return t.tokenize.isString ? e.Pass : 0;
              var n = a(t),
                i = n.type == r.charAt(0);
              if (n.align != null) return n.align - (i ? 1 : 0);
              else return n.offset - (i ? d : 0);
            },
            electricInput: /^\s*[\}\]\)]$/,
            closeBrackets: { triples: '\'"' },
            lineComment: '#',
            fold: 'indent',
          };
          return A;
        });
        e.defineMIME('text/x-python', 'python');
        var o = function (e) {
          return e.split(' ');
        };
        e.defineMIME('text/x-cython', {
          name: 'python',
          extra_keywords: o(
            'by cdef cimport cpdef ctypedef enum except ' +
              'extern gil include nogil property public ' +
              'readonly struct union DEF IF ELIF ELSE'
          ),
        });
      });
    },
    85420: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.registerHelper('wordChars', 'r', /[\w.]/);
        e.defineMode('r', function (t) {
          function r(e) {
            var t = {};
            for (var r = 0; r < e.length; ++r) t[e[r]] = true;
            return t;
          }
          var n = [
            'NULL',
            'NA',
            'Inf',
            'NaN',
            'NA_integer_',
            'NA_real_',
            'NA_complex_',
            'NA_character_',
            'TRUE',
            'FALSE',
          ];
          var i = [
            'list',
            'quote',
            'bquote',
            'eval',
            'return',
            'call',
            'parse',
            'deparse',
          ];
          var a = [
            'if',
            'else',
            'repeat',
            'while',
            'function',
            'for',
            'in',
            'next',
            'break',
          ];
          var o = ['if', 'else', 'repeat', 'while', 'function', 'for'];
          e.registerHelper('hintWords', 'r', n.concat(i, a));
          var l = r(n);
          var s = r(i);
          var c = r(a);
          var u = r(o);
          var f = /[+\-*\/^<>=!&|~$:]/;
          var d;
          function m(e, t) {
            d = null;
            var r = e.next();
            if (r == '#') {
              e.skipToEnd();
              return 'comment';
            } else if (r == '0' && e.eat('x')) {
              e.eatWhile(/[\da-f]/i);
              return 'number';
            } else if (r == '.' && e.eat(/\d/)) {
              e.match(/\d*(?:e[+\-]?\d+)?/);
              return 'number';
            } else if (/\d/.test(r)) {
              e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/);
              return 'number';
            } else if (r == "'" || r == '"') {
              t.tokenize = p(r);
              return 'string';
            } else if (r == '`') {
              e.match(/[^`]+`/);
              return 'variable-3';
            } else if (r == '.' && e.match(/.(?:[.]|\d+)/)) {
              return 'keyword';
            } else if (/[a-zA-Z\.]/.test(r)) {
              e.eatWhile(/[\w\.]/);
              var n = e.current();
              if (l.propertyIsEnumerable(n)) return 'atom';
              if (c.propertyIsEnumerable(n)) {
                if (u.propertyIsEnumerable(n) && !e.match(/\s*if(\s+|$)/, false))
                  d = 'block';
                return 'keyword';
              }
              if (s.propertyIsEnumerable(n)) return 'builtin';
              return 'variable';
            } else if (r == '%') {
              if (e.skipTo('%')) e.next();
              return 'operator variable-2';
            } else if (
              (r == '<' && e.eat('-')) ||
              (r == '<' && e.match('<-')) ||
              (r == '-' && e.match(/>>?/))
            ) {
              return 'operator arrow';
            } else if (r == '=' && t.ctx.argList) {
              return 'arg-is';
            } else if (f.test(r)) {
              if (r == '$') return 'operator dollar';
              e.eatWhile(f);
              return 'operator';
            } else if (/[\(\){}\[\];]/.test(r)) {
              d = r;
              if (r == ';') return 'semi';
              return null;
            } else {
              return null;
            }
          }
          function p(e) {
            return function (t, r) {
              if (t.eat('\\')) {
                var n = t.next();
                if (n == 'x') t.match(/^[a-f0-9]{2}/i);
                else if ((n == 'u' || n == 'U') && t.eat('{') && t.skipTo('}'))
                  t.next();
                else if (n == 'u') t.match(/^[a-f0-9]{4}/i);
                else if (n == 'U') t.match(/^[a-f0-9]{8}/i);
                else if (/[0-7]/.test(n)) t.match(/^[0-7]{1,2}/);
                return 'string-2';
              } else {
                var i;
                while ((i = t.next()) != null) {
                  if (i == e) {
                    r.tokenize = m;
                    break;
                  }
                  if (i == '\\') {
                    t.backUp(1);
                    break;
                  }
                }
                return 'string';
              }
            };
          }
          var h = 1,
            g = 2,
            v = 4;
          function b(e, t, r) {
            e.ctx = {
              type: t,
              indent: e.indent,
              flags: 0,
              column: r.column(),
              prev: e.ctx,
            };
          }
          function x(e, t) {
            var r = e.ctx;
            e.ctx = {
              type: r.type,
              indent: r.indent,
              flags: r.flags | t,
              column: r.column,
              prev: r.prev,
            };
          }
          function k(e) {
            e.indent = e.ctx.indent;
            e.ctx = e.ctx.prev;
          }
          return {
            startState: function () {
              return {
                tokenize: m,
                ctx: { type: 'top', indent: -t.indentUnit, flags: g },
                indent: 0,
                afterIdent: false,
              };
            },
            token: function (e, t) {
              if (e.sol()) {
                if ((t.ctx.flags & 3) == 0) t.ctx.flags |= g;
                if (t.ctx.flags & v) k(t);
                t.indent = e.indentation();
              }
              if (e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              if (r != 'comment' && (t.ctx.flags & g) == 0) x(t, h);
              if ((d == ';' || d == '{' || d == '}') && t.ctx.type == 'block') k(t);
              if (d == '{') b(t, '}', e);
              else if (d == '(') {
                b(t, ')', e);
                if (t.afterIdent) t.ctx.argList = true;
              } else if (d == '[') b(t, ']', e);
              else if (d == 'block') b(t, 'block', e);
              else if (d == t.ctx.type) k(t);
              else if (t.ctx.type == 'block' && r != 'comment') x(t, v);
              t.afterIdent = r == 'variable' || r == 'keyword';
              return r;
            },
            indent: function (e, r) {
              if (e.tokenize != m) return 0;
              var n = r && r.charAt(0),
                i = e.ctx,
                a = n == i.type;
              if (i.flags & v) i = i.prev;
              if (i.type == 'block') return i.indent + (n == '{' ? 0 : t.indentUnit);
              else if (i.flags & h) return i.column + (a ? 0 : 1);
              else return i.indent + (a ? 0 : t.indentUnit);
            },
            lineComment: '#',
          };
        });
        e.defineMIME('text/x-rsrc', 'r');
      });
    },
    31149: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('shell', function () {
          var t = {};
          function r(e, r) {
            for (var n = 0; n < r.length; n++) {
              t[r[n]] = e;
            }
          }
          var n = ['true', 'false'];
          var i = [
            'if',
            'then',
            'do',
            'else',
            'elif',
            'while',
            'until',
            'for',
            'in',
            'esac',
            'fi',
            'fin',
            'fil',
            'done',
            'exit',
            'set',
            'unset',
            'export',
            'function',
          ];
          var a = [
            'ab',
            'awk',
            'bash',
            'beep',
            'cat',
            'cc',
            'cd',
            'chown',
            'chmod',
            'chroot',
            'clear',
            'cp',
            'curl',
            'cut',
            'diff',
            'echo',
            'find',
            'gawk',
            'gcc',
            'get',
            'git',
            'grep',
            'hg',
            'kill',
            'killall',
            'ln',
            'ls',
            'make',
            'mkdir',
            'openssl',
            'mv',
            'nc',
            'nl',
            'node',
            'npm',
            'ping',
            'ps',
            'restart',
            'rm',
            'rmdir',
            'sed',
            'service',
            'sh',
            'shopt',
            'shred',
            'source',
            'sort',
            'sleep',
            'ssh',
            'start',
            'stop',
            'su',
            'sudo',
            'svn',
            'tee',
            'telnet',
            'top',
            'touch',
            'vi',
            'vim',
            'wall',
            'wc',
            'wget',
            'who',
            'write',
            'yes',
            'zsh',
          ];
          e.registerHelper('hintWords', 'shell', n.concat(i, a));
          r('atom', n);
          r('keyword', i);
          r('builtin', a);
          function o(e, r) {
            if (e.eatSpace()) return null;
            var n = e.sol();
            var i = e.next();
            if (i === '\\') {
              e.next();
              return null;
            }
            if (i === "'" || i === '"' || i === '`') {
              r.tokens.unshift(l(i, i === '`' ? 'quote' : 'string'));
              return f(e, r);
            }
            if (i === '#') {
              if (n && e.eat('!')) {
                e.skipToEnd();
                return 'meta';
              }
              e.skipToEnd();
              return 'comment';
            }
            if (i === '$') {
              r.tokens.unshift(c);
              return f(e, r);
            }
            if (i === '+' || i === '=') {
              return 'operator';
            }
            if (i === '-') {
              e.eat('-');
              e.eatWhile(/\w/);
              return 'attribute';
            }
            if (i == '<') {
              if (e.match('<<')) return 'operator';
              var a = e.match(/^<-?\s*['"]?([^'"]*)['"]?/);
              if (a) {
                r.tokens.unshift(u(a[1]));
                return 'string-2';
              }
            }
            if (/\d/.test(i)) {
              e.eatWhile(/\d/);
              if (e.eol() || !/\w/.test(e.peek())) {
                return 'number';
              }
            }
            e.eatWhile(/[\w-]/);
            var o = e.current();
            if (e.peek() === '=' && /\w+/.test(o)) return 'def';
            return t.hasOwnProperty(o) ? t[o] : null;
          }
          function l(e, t) {
            var r = e == '(' ? ')' : e == '{' ? '}' : e;
            return function (n, i) {
              var a,
                o = false;
              while ((a = n.next()) != null) {
                if (a === r && !o) {
                  i.tokens.shift();
                  break;
                } else if (a === '$' && !o && e !== "'" && n.peek() != r) {
                  o = true;
                  n.backUp(1);
                  i.tokens.unshift(c);
                  break;
                } else if (!o && e !== r && a === e) {
                  i.tokens.unshift(l(e, t));
                  return f(n, i);
                } else if (!o && /['"]/.test(a) && !/['"]/.test(e)) {
                  i.tokens.unshift(s(a, 'string'));
                  n.backUp(1);
                  break;
                }
                o = !o && a === '\\';
              }
              return t;
            };
          }
          function s(e, t) {
            return function (r, n) {
              n.tokens[0] = l(e, t);
              r.next();
              return f(r, n);
            };
          }
          var c = function (e, t) {
            if (t.tokens.length > 1) e.eat('$');
            var r = e.next();
            if (/['"({]/.test(r)) {
              t.tokens[0] = l(r, r == '(' ? 'quote' : r == '{' ? 'def' : 'string');
              return f(e, t);
            }
            if (!/\d/.test(r)) e.eatWhile(/\w/);
            t.tokens.shift();
            return 'def';
          };
          function u(e) {
            return function (t, r) {
              if (t.sol() && t.string == e) r.tokens.shift();
              t.skipToEnd();
              return 'string-2';
            };
          }
          function f(e, t) {
            return (t.tokens[0] || o)(e, t);
          }
          return {
            startState: function () {
              return { tokens: [] };
            },
            token: function (e, t) {
              return f(e, t);
            },
            closeBrackets: '()[]{}\'\'""``',
            lineComment: '#',
            fold: 'brace',
          };
        });
        e.defineMIME('text/x-sh', 'shell');
        e.defineMIME('application/x-sh', 'shell');
      });
    },
    54086: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('sql', function (t, r) {
          var n = r.client || {},
            i = r.atoms || { false: true, true: true, null: true },
            s = r.builtin || o(l),
            c = r.keywords || o(a),
            u = r.operatorChars || /^[*+\-%<>!=&|~^\/]/,
            f = r.support || {},
            d = r.hooks || {},
            m = r.dateSQL || { date: true, time: true, timestamp: true },
            p = r.backslashStringEscapes !== false,
            h = r.brackets || /^[\{}\(\)\[\]]/,
            g = r.punctuation || /^[;.,:]/;
          function v(e, t) {
            var r = e.next();
            if (d[r]) {
              var a = d[r](e, t);
              if (a !== false) return a;
            }
            if (
              f.hexNumber &&
              ((r == '0' && e.match(/^[xX][0-9a-fA-F]+/)) ||
                ((r == 'x' || r == 'X') && e.match(/^'[0-9a-fA-F]+'/)))
            ) {
              return 'number';
            } else if (
              f.binaryNumber &&
              (((r == 'b' || r == 'B') && e.match(/^'[01]+'/)) ||
                (r == '0' && e.match(/^b[01]+/)))
            ) {
              return 'number';
            } else if (r.charCodeAt(0) > 47 && r.charCodeAt(0) < 58) {
              e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/);
              f.decimallessFloat && e.match(/^\.(?!\.)/);
              return 'number';
            } else if (r == '?' && (e.eatSpace() || e.eol() || e.eat(';'))) {
              return 'variable-3';
            } else if (r == "'" || (r == '"' && f.doubleQuote)) {
              t.tokenize = b(r);
              return t.tokenize(e, t);
            } else if (
              ((f.nCharCast && (r == 'n' || r == 'N')) ||
                (f.charsetCast && r == '_' && e.match(/[a-z][a-z0-9]*/i))) &&
              (e.peek() == "'" || e.peek() == '"')
            ) {
              return 'keyword';
            } else if (
              f.escapeConstant &&
              (r == 'e' || r == 'E') &&
              (e.peek() == "'" || (e.peek() == '"' && f.doubleQuote))
            ) {
              t.tokenize = function (e, t) {
                return (t.tokenize = b(e.next(), true))(e, t);
              };
              return 'keyword';
            } else if (f.commentSlashSlash && r == '/' && e.eat('/')) {
              e.skipToEnd();
              return 'comment';
            } else if (
              (f.commentHash && r == '#') ||
              (r == '-' && e.eat('-') && (!f.commentSpaceRequired || e.eat(' ')))
            ) {
              e.skipToEnd();
              return 'comment';
            } else if (r == '/' && e.eat('*')) {
              t.tokenize = x(1);
              return t.tokenize(e, t);
            } else if (r == '.') {
              if (f.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i))
                return 'number';
              if (e.match(/^\.+/)) return null;
              if (f.ODBCdotTable && e.match(/^[\w\d_$#]+/)) return 'variable-2';
            } else if (u.test(r)) {
              e.eatWhile(u);
              return 'operator';
            } else if (h.test(r)) {
              return 'bracket';
            } else if (g.test(r)) {
              e.eatWhile(g);
              return 'punctuation';
            } else if (
              r == '{' &&
              (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) ||
                e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))
            ) {
              return 'number';
            } else {
              e.eatWhile(/^[_\w\d]/);
              var o = e.current().toLowerCase();
              if (
                m.hasOwnProperty(o) &&
                (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/))
              )
                return 'number';
              if (i.hasOwnProperty(o)) return 'atom';
              if (s.hasOwnProperty(o)) return 'builtin';
              if (c.hasOwnProperty(o)) return 'keyword';
              if (n.hasOwnProperty(o)) return 'string-2';
              return null;
            }
          }
          function b(e, t) {
            return function (r, n) {
              var i = false,
                a;
              while ((a = r.next()) != null) {
                if (a == e && !i) {
                  n.tokenize = v;
                  break;
                }
                i = (p || t) && !i && a == '\\';
              }
              return 'string';
            };
          }
          function x(e) {
            return function (t, r) {
              var n = t.match(/^.*?(\/\*|\*\/)/);
              if (!n) t.skipToEnd();
              else if (n[1] == '/*') r.tokenize = x(e + 1);
              else if (e > 1) r.tokenize = x(e - 1);
              else r.tokenize = v;
              return 'comment';
            };
          }
          function k(e, t, r) {
            t.context = {
              prev: t.context,
              indent: e.indentation(),
              col: e.column(),
              type: r,
            };
          }
          function y(e) {
            e.indent = e.context.indent;
            e.context = e.context.prev;
          }
          return {
            startState: function () {
              return { tokenize: v, context: null };
            },
            token: function (e, t) {
              if (e.sol()) {
                if (t.context && t.context.align == null) t.context.align = false;
              }
              if (t.tokenize == v && e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              if (r == 'comment') return r;
              if (t.context && t.context.align == null) t.context.align = true;
              var n = e.current();
              if (n == '(') k(e, t, ')');
              else if (n == '[') k(e, t, ']');
              else if (t.context && t.context.type == n) y(t);
              return r;
            },
            indent: function (r, n) {
              var i = r.context;
              if (!i) return e.Pass;
              var a = n.charAt(0) == i.type;
              if (i.align) return i.col + (a ? 0 : 1);
              else return i.indent + (a ? 0 : t.indentUnit);
            },
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: f.commentSlashSlash ? '//' : f.commentHash ? '#' : '--',
            closeBrackets: '()[]{}\'\'""``',
          };
        });
        function t(e) {
          var t;
          while ((t = e.next()) != null) {
            if (t == '`' && !e.eat('`')) return 'variable-2';
          }
          e.backUp(e.current().length - 1);
          return e.eatWhile(/\w/) ? 'variable-2' : null;
        }
        function r(e) {
          var t;
          while ((t = e.next()) != null) {
            if (t == '"' && !e.eat('"')) return 'variable-2';
          }
          e.backUp(e.current().length - 1);
          return e.eatWhile(/\w/) ? 'variable-2' : null;
        }
        function n(e) {
          if (e.eat('@')) {
            e.match('session.');
            e.match('local.');
            e.match('global.');
          }
          if (e.eat("'")) {
            e.match(/^.*'/);
            return 'variable-2';
          } else if (e.eat('"')) {
            e.match(/^.*"/);
            return 'variable-2';
          } else if (e.eat('`')) {
            e.match(/^.*`/);
            return 'variable-2';
          } else if (e.match(/^[0-9a-zA-Z$\.\_]+/)) {
            return 'variable-2';
          }
          return null;
        }
        function i(e) {
          if (e.eat('N')) {
            return 'atom';
          }
          return e.match(/^[a-zA-Z.#!?]/) ? 'variable-2' : null;
        }
        var a =
          'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ';
        function o(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        var l =
          'bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric';
        e.defineMIME('text/x-sql', {
          name: 'sql',
          keywords: o(a + 'begin'),
          builtin: o(l),
          atoms: o('false true null unknown'),
          dateSQL: o('date time timestamp'),
          support: o('ODBCdotTable doubleQuote binaryNumber hexNumber'),
        });
        e.defineMIME('text/x-mssql', {
          name: 'sql',
          client: o(
            '$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id'
          ),
          keywords: o(
            a +
              'begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with'
          ),
          builtin: o(
            'bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table '
          ),
          atoms: o(
            'is not null like and or in left right between inner outer join all any some cross unpivot pivot exists'
          ),
          operatorChars: /^[*+\-%<>!=^\&|\/]/,
          brackets: /^[\{}\(\)]/,
          punctuation: /^[;.,:/]/,
          backslashStringEscapes: false,
          dateSQL: o('date datetimeoffset datetime2 smalldatetime datetime time'),
          hooks: { '@': n },
        });
        e.defineMIME('text/x-mysql', {
          name: 'sql',
          client: o(
            'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
          ),
          keywords: o(
            a +
              'accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
          ),
          builtin: o(
            'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
          ),
          atoms: o('false true null unknown'),
          operatorChars: /^[*+\-%<>!=&|^]/,
          dateSQL: o('date time timestamp'),
          support: o(
            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
          ),
          hooks: { '@': n, '`': t, '\\': i },
        });
        e.defineMIME('text/x-mariadb', {
          name: 'sql',
          client: o(
            'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
          ),
          keywords: o(
            a +
              'accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
          ),
          builtin: o(
            'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
          ),
          atoms: o('false true null unknown'),
          operatorChars: /^[*+\-%<>!=&|^]/,
          dateSQL: o('date time timestamp'),
          support: o(
            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
          ),
          hooks: { '@': n, '`': t, '\\': i },
        });
        e.defineMIME('text/x-sqlite', {
          name: 'sql',
          client: o(
            'auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width'
          ),
          keywords: o(
            a +
              'abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without'
          ),
          builtin: o(
            'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real'
          ),
          atoms: o('null current_date current_time current_timestamp'),
          operatorChars: /^[*+\-%<>!=&|/~]/,
          dateSQL: o('date time timestamp datetime'),
          support: o('decimallessFloat zerolessFloat'),
          identifierQuote: '"',
          hooks: { '@': n, ':': n, '?': n, $: n, '"': r, '`': t },
        });
        e.defineMIME('text/x-cassandra', {
          name: 'sql',
          client: {},
          keywords: o(
            'add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime'
          ),
          builtin: o(
            'ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint'
          ),
          atoms: o('false true infinity NaN'),
          operatorChars: /^[<>=]/,
          dateSQL: {},
          support: o('commentSlashSlash decimallessFloat'),
          hooks: {},
        });
        e.defineMIME('text/x-plsql', {
          name: 'sql',
          client: o(
            'appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap'
          ),
          keywords: o(
            'abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work'
          ),
          builtin: o(
            'abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml'
          ),
          operatorChars: /^[*\/+\-%<>!=~]/,
          dateSQL: o('date time timestamp'),
          support: o('doubleQuote nCharCast zerolessFloat binaryNumber hexNumber'),
        });
        e.defineMIME('text/x-hive', {
          name: 'sql',
          keywords: o(
            'select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year'
          ),
          builtin: o(
            'bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar'
          ),
          atoms: o('false true null unknown'),
          operatorChars: /^[*+\-%<>!=]/,
          dateSQL: o('date timestamp'),
          support: o('ODBCdotTable doubleQuote binaryNumber hexNumber'),
        });
        e.defineMIME('text/x-pgsql', {
          name: 'sql',
          client: o('source'),
          keywords: o(
            a +
              'a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone'
          ),
          builtin: o(
            'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
          ),
          atoms: o('false true null unknown'),
          operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
          backslashStringEscapes: false,
          dateSQL: o('date time timestamp'),
          support: o(
            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant'
          ),
        });
        e.defineMIME('text/x-gql', {
          name: 'sql',
          keywords: o(
            'ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where'
          ),
          atoms: o('false true'),
          builtin: o(
            'blob datetime first key __key__ string integer double boolean null'
          ),
          operatorChars: /^[*+\-%<>!=]/,
        });
        e.defineMIME('text/x-gpsql', {
          name: 'sql',
          client: o('source'),
          keywords: o(
            'abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone'
          ),
          builtin: o(
            'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
          ),
          atoms: o('false true null unknown'),
          operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
          dateSQL: o('date time timestamp'),
          support: o(
            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast'
          ),
        });
        e.defineMIME('text/x-sparksql', {
          name: 'sql',
          keywords: o(
            'add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases data dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with'
          ),
          builtin: o(
            'tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat'
          ),
          atoms: o('false true null'),
          operatorChars: /^[*\/+\-%<>!=~&|^]/,
          dateSQL: o('date time timestamp'),
          support: o('ODBCdotTable doubleQuote zerolessFloat'),
        });
        e.defineMIME('text/x-esper', {
          name: 'sql',
          client: o('source'),
          keywords: o(
            'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window'
          ),
          builtin: {},
          atoms: o('false true null'),
          operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
          dateSQL: o('time'),
          support: o('decimallessFloat zerolessFloat binaryNumber hexNumber'),
        });
      });
    },
    80785: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('stex', function (e, t) {
          'use strict';
          function r(e, t) {
            e.cmdState.push(t);
          }
          function n(e) {
            if (e.cmdState.length > 0) {
              return e.cmdState[e.cmdState.length - 1];
            } else {
              return null;
            }
          }
          function i(e) {
            var t = e.cmdState.pop();
            if (t) {
              t.closeBracket();
            }
          }
          function a(e) {
            var t = e.cmdState;
            for (var r = t.length - 1; r >= 0; r--) {
              var n = t[r];
              if (n.name == 'DEFAULT') {
                continue;
              }
              return n;
            }
            return {
              styleIdentifier: function () {
                return null;
              },
            };
          }
          function o(e, t, r) {
            return function () {
              this.name = e;
              this.bracketNo = 0;
              this.style = t;
              this.styles = r;
              this.argument = null;
              this.styleIdentifier = function () {
                return this.styles[this.bracketNo - 1] || null;
              };
              this.openBracket = function () {
                this.bracketNo++;
                return 'bracket';
              };
              this.closeBracket = function () {};
            };
          }
          var l = {};
          l['importmodule'] = o('importmodule', 'tag', ['string', 'builtin']);
          l['documentclass'] = o('documentclass', 'tag', ['', 'atom']);
          l['usepackage'] = o('usepackage', 'tag', ['atom']);
          l['begin'] = o('begin', 'tag', ['atom']);
          l['end'] = o('end', 'tag', ['atom']);
          l['label'] = o('label', 'tag', ['atom']);
          l['ref'] = o('ref', 'tag', ['atom']);
          l['eqref'] = o('eqref', 'tag', ['atom']);
          l['cite'] = o('cite', 'tag', ['atom']);
          l['bibitem'] = o('bibitem', 'tag', ['atom']);
          l['Bibitem'] = o('Bibitem', 'tag', ['atom']);
          l['RBibitem'] = o('RBibitem', 'tag', ['atom']);
          l['DEFAULT'] = function () {
            this.name = 'DEFAULT';
            this.style = 'tag';
            this.styleIdentifier =
              this.openBracket =
              this.closeBracket =
                function () {};
          };
          function s(e, t) {
            e.f = t;
          }
          function c(e, t) {
            var i;
            if (e.match(/^\\[a-zA-Z@]+/)) {
              var o = e.current().slice(1);
              i = l.hasOwnProperty(o) ? l[o] : l['DEFAULT'];
              i = new i();
              r(t, i);
              s(t, f);
              return i.style;
            }
            if (e.match(/^\\[$&%#{}_]/)) {
              return 'tag';
            }
            if (e.match(/^\\[,;!\/\\]/)) {
              return 'tag';
            }
            if (e.match('\\[')) {
              s(t, function (e, t) {
                return u(e, t, '\\]');
              });
              return 'keyword';
            }
            if (e.match('\\(')) {
              s(t, function (e, t) {
                return u(e, t, '\\)');
              });
              return 'keyword';
            }
            if (e.match('$$')) {
              s(t, function (e, t) {
                return u(e, t, '$$');
              });
              return 'keyword';
            }
            if (e.match('$')) {
              s(t, function (e, t) {
                return u(e, t, '$');
              });
              return 'keyword';
            }
            var c = e.next();
            if (c == '%') {
              e.skipToEnd();
              return 'comment';
            } else if (c == '}' || c == ']') {
              i = n(t);
              if (i) {
                i.closeBracket(c);
                s(t, f);
              } else {
                return 'error';
              }
              return 'bracket';
            } else if (c == '{' || c == '[') {
              i = l['DEFAULT'];
              i = new i();
              r(t, i);
              return 'bracket';
            } else if (/\d/.test(c)) {
              e.eatWhile(/[\w.%]/);
              return 'atom';
            } else {
              e.eatWhile(/[\w\-_]/);
              i = a(t);
              if (i.name == 'begin') {
                i.argument = e.current();
              }
              return i.styleIdentifier();
            }
          }
          function u(e, t, r) {
            if (e.eatSpace()) {
              return null;
            }
            if (r && e.match(r)) {
              s(t, c);
              return 'keyword';
            }
            if (e.match(/^\\[a-zA-Z@]+/)) {
              return 'tag';
            }
            if (e.match(/^[a-zA-Z]+/)) {
              return 'variable-2';
            }
            if (e.match(/^\\[$&%#{}_]/)) {
              return 'tag';
            }
            if (e.match(/^\\[,;!\/]/)) {
              return 'tag';
            }
            if (e.match(/^[\^_&]/)) {
              return 'tag';
            }
            if (e.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) {
              return null;
            }
            if (e.match(/^(\d+\.\d*|\d*\.\d+|\d+)/)) {
              return 'number';
            }
            var n = e.next();
            if (n == '{' || n == '}' || n == '[' || n == ']' || n == '(' || n == ')') {
              return 'bracket';
            }
            if (n == '%') {
              e.skipToEnd();
              return 'comment';
            }
            return 'error';
          }
          function f(e, t) {
            var r = e.peek(),
              a;
            if (r == '{' || r == '[') {
              a = n(t);
              a.openBracket(r);
              e.eat(r);
              s(t, c);
              return 'bracket';
            }
            if (/[ \t\r]/.test(r)) {
              e.eat(r);
              return null;
            }
            s(t, c);
            i(t);
            return c(e, t);
          }
          return {
            startState: function () {
              var e = t.inMathMode
                ? function (e, t) {
                    return u(e, t);
                  }
                : c;
              return { cmdState: [], f: e };
            },
            copyState: function (e) {
              return { cmdState: e.cmdState.slice(), f: e.f };
            },
            token: function (e, t) {
              return t.f(e, t);
            },
            blankLine: function (e) {
              e.f = c;
              e.cmdState.length = 0;
            },
            lineComment: '%',
          };
        });
        e.defineMIME('text/x-stex', 'stex');
        e.defineMIME('text/x-latex', 'stex');
      });
    },
    29589: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = {
          autoSelfClosers: {
            area: true,
            base: true,
            br: true,
            col: true,
            command: true,
            embed: true,
            frame: true,
            hr: true,
            img: true,
            input: true,
            keygen: true,
            link: true,
            meta: true,
            param: true,
            source: true,
            track: true,
            wbr: true,
            menuitem: true,
          },
          implicitlyClosed: {
            dd: true,
            li: true,
            optgroup: true,
            option: true,
            p: true,
            rp: true,
            rt: true,
            tbody: true,
            td: true,
            tfoot: true,
            th: true,
            tr: true,
          },
          contextGrabbers: {
            dd: { dd: true, dt: true },
            dt: { dd: true, dt: true },
            li: { li: true },
            option: { option: true, optgroup: true },
            optgroup: { optgroup: true },
            p: {
              address: true,
              article: true,
              aside: true,
              blockquote: true,
              dir: true,
              div: true,
              dl: true,
              fieldset: true,
              footer: true,
              form: true,
              h1: true,
              h2: true,
              h3: true,
              h4: true,
              h5: true,
              h6: true,
              header: true,
              hgroup: true,
              hr: true,
              menu: true,
              nav: true,
              ol: true,
              p: true,
              pre: true,
              section: true,
              table: true,
              ul: true,
            },
            rp: { rp: true, rt: true },
            rt: { rp: true, rt: true },
            tbody: { tbody: true, tfoot: true },
            td: { td: true, th: true },
            tfoot: { tbody: true },
            th: { td: true, th: true },
            thead: { tbody: true, tfoot: true },
            tr: { tr: true },
          },
          doNotIndent: { pre: true },
          allowUnquoted: true,
          allowMissing: true,
          caseFold: true,
        };
        var r = {
          autoSelfClosers: {},
          implicitlyClosed: {},
          contextGrabbers: {},
          doNotIndent: {},
          allowUnquoted: false,
          allowMissing: false,
          allowMissingTagName: false,
          caseFold: false,
        };
        e.defineMode('xml', function (n, i) {
          var a = n.indentUnit;
          var o = {};
          var l = i.htmlMode ? t : r;
          for (var s in l) o[s] = l[s];
          for (var s in i) o[s] = i[s];
          var c, u;
          function f(e, t) {
            function r(r) {
              t.tokenize = r;
              return r(e, t);
            }
            var n = e.next();
            if (n == '<') {
              if (e.eat('!')) {
                if (e.eat('[')) {
                  if (e.match('CDATA[')) return r(p('atom', ']]>'));
                  else return null;
                } else if (e.match('--')) {
                  return r(p('comment', '--\x3e'));
                } else if (e.match('DOCTYPE', true, true)) {
                  e.eatWhile(/[\w\._\-]/);
                  return r(h(1));
                } else {
                  return null;
                }
              } else if (e.eat('?')) {
                e.eatWhile(/[\w\._\-]/);
                t.tokenize = p('meta', '?>');
                return 'meta';
              } else {
                c = e.eat('/') ? 'closeTag' : 'openTag';
                t.tokenize = d;
                return 'tag bracket';
              }
            } else if (n == '&') {
              var i;
              if (e.eat('#')) {
                if (e.eat('x')) {
                  i = e.eatWhile(/[a-fA-F\d]/) && e.eat(';');
                } else {
                  i = e.eatWhile(/[\d]/) && e.eat(';');
                }
              } else {
                i = e.eatWhile(/[\w\.\-:]/) && e.eat(';');
              }
              return i ? 'atom' : 'error';
            } else {
              e.eatWhile(/[^&<]/);
              return null;
            }
          }
          f.isInText = true;
          function d(e, t) {
            var r = e.next();
            if (r == '>' || (r == '/' && e.eat('>'))) {
              t.tokenize = f;
              c = r == '>' ? 'endTag' : 'selfcloseTag';
              return 'tag bracket';
            } else if (r == '=') {
              c = 'equals';
              return null;
            } else if (r == '<') {
              t.tokenize = f;
              t.state = x;
              t.tagName = t.tagStart = null;
              var n = t.tokenize(e, t);
              return n ? n + ' tag error' : 'tag error';
            } else if (/[\'\"]/.test(r)) {
              t.tokenize = m(r);
              t.stringStartCol = e.column();
              return t.tokenize(e, t);
            } else {
              e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
              return 'word';
            }
          }
          function m(e) {
            var t = function (t, r) {
              while (!t.eol()) {
                if (t.next() == e) {
                  r.tokenize = d;
                  break;
                }
              }
              return 'string';
            };
            t.isInAttribute = true;
            return t;
          }
          function p(e, t) {
            return function (r, n) {
              while (!r.eol()) {
                if (r.match(t)) {
                  n.tokenize = f;
                  break;
                }
                r.next();
              }
              return e;
            };
          }
          function h(e) {
            return function (t, r) {
              var n;
              while ((n = t.next()) != null) {
                if (n == '<') {
                  r.tokenize = h(e + 1);
                  return r.tokenize(t, r);
                } else if (n == '>') {
                  if (e == 1) {
                    r.tokenize = f;
                    break;
                  } else {
                    r.tokenize = h(e - 1);
                    return r.tokenize(t, r);
                  }
                }
              }
              return 'meta';
            };
          }
          function g(e, t, r) {
            this.prev = e.context;
            this.tagName = t || '';
            this.indent = e.indented;
            this.startOfLine = r;
            if (o.doNotIndent.hasOwnProperty(t) || (e.context && e.context.noIndent))
              this.noIndent = true;
          }
          function v(e) {
            if (e.context) e.context = e.context.prev;
          }
          function b(e, t) {
            var r;
            while (true) {
              if (!e.context) {
                return;
              }
              r = e.context.tagName;
              if (
                !o.contextGrabbers.hasOwnProperty(r) ||
                !o.contextGrabbers[r].hasOwnProperty(t)
              ) {
                return;
              }
              v(e);
            }
          }
          function x(e, t, r) {
            if (e == 'openTag') {
              r.tagStart = t.column();
              return k;
            } else if (e == 'closeTag') {
              return y;
            } else {
              return x;
            }
          }
          function k(e, t, r) {
            if (e == 'word') {
              r.tagName = t.current();
              u = 'tag';
              return _;
            } else if (o.allowMissingTagName && e == 'endTag') {
              u = 'tag bracket';
              return _(e, t, r);
            } else {
              u = 'error';
              return k;
            }
          }
          function y(e, t, r) {
            if (e == 'word') {
              var n = t.current();
              if (
                r.context &&
                r.context.tagName != n &&
                o.implicitlyClosed.hasOwnProperty(r.context.tagName)
              )
                v(r);
              if ((r.context && r.context.tagName == n) || o.matchClosing === false) {
                u = 'tag';
                return w;
              } else {
                u = 'tag error';
                return C;
              }
            } else if (o.allowMissingTagName && e == 'endTag') {
              u = 'tag bracket';
              return w(e, t, r);
            } else {
              u = 'error';
              return C;
            }
          }
          function w(e, t, r) {
            if (e != 'endTag') {
              u = 'error';
              return w;
            }
            v(r);
            return x;
          }
          function C(e, t, r) {
            u = 'error';
            return w(e, t, r);
          }
          function _(e, t, r) {
            if (e == 'word') {
              u = 'attribute';
              return S;
            } else if (e == 'endTag' || e == 'selfcloseTag') {
              var n = r.tagName,
                i = r.tagStart;
              r.tagName = r.tagStart = null;
              if (e == 'selfcloseTag' || o.autoSelfClosers.hasOwnProperty(n)) {
                b(r, n);
              } else {
                b(r, n);
                r.context = new g(r, n, i == r.indented);
              }
              return x;
            }
            u = 'error';
            return _;
          }
          function S(e, t, r) {
            if (e == 'equals') return L;
            if (!o.allowMissing) u = 'error';
            return _(e, t, r);
          }
          function L(e, t, r) {
            if (e == 'string') return F;
            if (e == 'word' && o.allowUnquoted) {
              u = 'string';
              return _;
            }
            u = 'error';
            return _(e, t, r);
          }
          function F(e, t, r) {
            if (e == 'string') return F;
            return _(e, t, r);
          }
          return {
            startState: function (e) {
              var t = {
                tokenize: f,
                state: x,
                indented: e || 0,
                tagName: null,
                tagStart: null,
                context: null,
              };
              if (e != null) t.baseIndent = e;
              return t;
            },
            token: function (e, t) {
              if (!t.tagName && e.sol()) t.indented = e.indentation();
              if (e.eatSpace()) return null;
              c = null;
              var r = t.tokenize(e, t);
              if ((r || c) && r != 'comment') {
                u = null;
                t.state = t.state(c || r, e, t);
                if (u) r = u == 'error' ? r + ' error' : u;
              }
              return r;
            },
            indent: function (t, r, n) {
              var i = t.context;
              if (t.tokenize.isInAttribute) {
                if (t.tagStart == t.indented) return t.stringStartCol + 1;
                else return t.indented + a;
              }
              if (i && i.noIndent) return e.Pass;
              if (t.tokenize != d && t.tokenize != f)
                return n ? n.match(/^(\s*)/)[0].length : 0;
              if (t.tagName) {
                if (o.multilineTagIndentPastTag !== false)
                  return t.tagStart + t.tagName.length + 2;
                else return t.tagStart + a * (o.multilineTagIndentFactor || 1);
              }
              if (o.alignCDATA && /<!\[CDATA\[/.test(r)) return 0;
              var l = r && /^<(\/)?([\w_:\.-]*)/.exec(r);
              if (l && l[1]) {
                while (i) {
                  if (i.tagName == l[2]) {
                    i = i.prev;
                    break;
                  } else if (o.implicitlyClosed.hasOwnProperty(i.tagName)) {
                    i = i.prev;
                  } else {
                    break;
                  }
                }
              } else if (l) {
                while (i) {
                  var s = o.contextGrabbers[i.tagName];
                  if (s && s.hasOwnProperty(l[2])) i = i.prev;
                  else break;
                }
              }
              while (i && i.prev && !i.startOfLine) i = i.prev;
              if (i) return i.indent + a;
              else return t.baseIndent || 0;
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: '\x3c!--',
            blockCommentEnd: '--\x3e',
            configuration: o.htmlMode ? 'html' : 'xml',
            helperType: o.htmlMode ? 'html' : 'xml',
            skipAttribute: function (e) {
              if (e.state == L) e.state = _;
            },
            xmlCurrentTag: function (e) {
              return e.tagName
                ? { name: e.tagName, close: e.type == 'closeTag' }
                : null;
            },
            xmlCurrentContext: function (e) {
              var t = [];
              for (var r = e.context; r; r = r.prev) t.push(r.tagName);
              return t.reverse();
            },
          };
        });
        e.defineMIME('text/xml', 'xml');
        e.defineMIME('application/xml', 'xml');
        if (!e.mimeModes.hasOwnProperty('text/html'))
          e.defineMIME('text/html', { name: 'xml', htmlMode: true });
      });
    },
    7049: (e, t, r) => {
      'use strict';
      r.d(t, { Z$: () => n, s7: () => o, Dp: () => l, $m: () => u });
      const n = (e) => e[e.length - 1];
      const i = () => [];
      const a = (e) => e.slice();
      const o = (e, t) => {
        for (let r = 0; r < t.length; r++) {
          e.push(t[r]);
        }
      };
      const l = Array.from;
      const s = (e, t) => e.every(t);
      const c = (e, t) => e.some(t);
      const u = (e, t) => e.length === t.length && s(e, (e, r) => e === t[r]);
      const f = (e) => e.reduce((e, t) => e.concat(t), []);
    },
    97027: (e, t, r) => {
      'use strict';
      r.d(t, { PP: () => a, UV: () => u, Hi: () => f });
      var n = r(7049);
      var i = r(59735);
      const a = (e, t, r = 0) => {
        try {
          for (; r < e.length; r++) {
            e[r](...t);
          }
        } finally {
          if (r < e.length) {
            a(e, t, r + 1);
          }
        }
      };
      const o = () => {};
      const l = (e) => e();
      const s = (e) => e;
      const c = (e, t) => e === t;
      const u = (e, t) =>
        e === t ||
        (e != null &&
          t != null &&
          e.constructor === t.constructor &&
          ((e instanceof Array && n.$m(e, t)) ||
            (typeof e === 'object' && i.$m(e, t))));
      const f = (e, t) => {
        if (e == null || t == null) {
          return c(e, t);
        }
        if (e.constructor !== t.constructor) {
          return false;
        }
        if (e === t) {
          return true;
        }
        switch (e.constructor) {
          case ArrayBuffer:
            e = new Uint8Array(e);
            t = new Uint8Array(t);
          case Uint8Array: {
            if (e.byteLength !== t.byteLength) {
              return false;
            }
            for (let r = 0; r < e.length; r++) {
              if (e[r] !== t[r]) {
                return false;
              }
            }
            break;
          }
          case Set: {
            if (e.size !== t.size) {
              return false;
            }
            for (const r of e) {
              if (!t.has(r)) {
                return false;
              }
            }
            break;
          }
          case Map: {
            if (e.size !== t.size) {
              return false;
            }
            for (const r of e.keys()) {
              if (!t.has(r) || !f(e.get(r), t.get(r))) {
                return false;
              }
            }
            break;
          }
          case Object:
            if (i.kE(e) !== i.kE(t)) {
              return false;
            }
            for (const r in e) {
              if (!i.l$(e, r) || !f(e[r], t[r])) {
                return false;
              }
            }
            break;
          case Array:
            if (e.length !== t.length) {
              return false;
            }
            for (let r = 0; r < e.length; r++) {
              if (!f(e[r], t[r])) {
                return false;
              }
            }
            break;
          default:
            return false;
        }
        return true;
      };
    },
    72382: (e, t, r) => {
      'use strict';
      r.d(t, { Ue: () => n, JG: () => i, Yu: () => a, UI: () => o, Yj: () => l });
      const n = () => new Map();
      const i = (e) => {
        const t = n();
        e.forEach((e, r) => {
          t.set(r, e);
        });
        return t;
      };
      const a = (e, t, r) => {
        let n = e.get(t);
        if (n === undefined) {
          e.set(t, (n = r()));
        }
        return n;
      };
      const o = (e, t) => {
        const r = [];
        for (const [n, i] of e) {
          r.push(t(i, n));
        }
        return r;
      };
      const l = (e, t) => {
        for (const [r, n] of e) {
          if (t(n, r)) {
            return true;
          }
        }
        return false;
      };
      const s = (e, t) => {
        for (const [r, n] of e) {
          if (!t(n, r)) {
            return false;
          }
        }
        return true;
      };
    },
    14247: (e, t, r) => {
      'use strict';
      r.d(t, {
        GW: () => n,
        Wn: () => a,
        mv: () => s,
        IH: () => d,
        VV: () => m,
        Fp: () => p,
        GR: () => x,
      });
      const n = Math.floor;
      const i = Math.ceil;
      const a = Math.abs;
      const o = Math.imul;
      const l = Math.round;
      const s = Math.log10;
      const c = Math.log2;
      const u = Math.log;
      const f = Math.sqrt;
      const d = (e, t) => e + t;
      const m = (e, t) => (e < t ? e : t);
      const p = (e, t) => (e > t ? e : t);
      const h = Number.isNaN;
      const g = Math.pow;
      const v = (e) => Math.pow(10, e);
      const b = Math.sign;
      const x = (e) => (e !== 0 ? e < 0 : 1 / e < 0);
    },
    13119: (e, t, r) => {
      'use strict';
      r.d(t, { M: () => n });
      const n = () => {
        let e = true;
        return (t, r) => {
          if (e) {
            e = false;
            try {
              t();
            } finally {
              e = true;
            }
          } else if (r !== undefined) {
            r();
          }
        };
      };
    },
    59735: (e, t, r) => {
      'use strict';
      r.d(t, { UI: () => l, kE: () => s, l$: () => f, $m: () => d });
      const n = () => Object.create(null);
      const i = Object.assign;
      const a = Object.keys;
      const o = (e, t) => {
        for (const r in e) {
          t(e[r], r);
        }
      };
      const l = (e, t) => {
        const r = [];
        for (const n in e) {
          r.push(t(e[n], n));
        }
        return r;
      };
      const s = (e) => a(e).length;
      const c = (e, t) => {
        for (const r in e) {
          if (t(e[r], r)) {
            return true;
          }
        }
        return false;
      };
      const u = (e, t) => {
        for (const r in e) {
          if (!t(e[r], r)) {
            return false;
          }
        }
        return true;
      };
      const f = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
      const d = (e, t) =>
        e === t ||
        (s(e) === s(t) && u(e, (e, r) => (e !== undefined || f(t, r)) && t[r] === e));
    },
    58290: (e, t, r) => {
      'use strict';
      r.d(t, { y: () => o });
      var n = r(72382);
      var i = r(48307);
      var a = r(7049);
      class o {
        constructor() {
          this._observers = n.Ue();
        }
        on(e, t) {
          n.Yu(this._observers, e, i.U).add(t);
        }
        once(e, t) {
          const r = (...n) => {
            this.off(e, r);
            t(...n);
          };
          this.on(e, r);
        }
        off(e, t) {
          const r = this._observers.get(e);
          if (r !== undefined) {
            r.delete(t);
            if (r.size === 0) {
              this._observers.delete(e);
            }
          }
        }
        emit(e, t) {
          return a
            .Dp((this._observers.get(e) || n.Ue()).values())
            .forEach((e) => e(...t));
        }
        destroy() {
          this._observers = n.Ue();
        }
      }
    },
    48307: (e, t, r) => {
      'use strict';
      r.d(t, { U: () => n });
      const n = () => new Set();
      const i = (e) => Array.from(e);
    },
    95191: (e, t, r) => {
      'use strict';
      r.d(t, { z$: () => D });
      var n = r(13119);
      var i = r(14247);
      var a = r(20073);
      var o = r(97027);
      let l = null && [];
      const s = () => {
        for (let e = 0; e < l.length; e++) {
          l[e]();
        }
        l = [];
      };
      const c = (e) => {
        l.push(e);
        if (l.length === 1) {
          setTimeout(s, 0);
        }
      };
      const u = (e) =>
        class t {
          constructor(e) {
            this._ = e;
          }
          destroy() {
            e(this._);
          }
        };
      const f = u(clearTimeout);
      const d = (e, t) => new f(setTimeout(t, e));
      const m = u(clearInterval);
      const p = (e, t) => new m(setInterval(t, e));
      const h = u(
        (e) => typeof requestAnimationFrame !== 'undefined' && cancelAnimationFrame(e)
      );
      const g = (e) =>
        typeof requestAnimationFrame === 'undefined'
          ? d(0, e)
          : new h(requestAnimationFrame(e));
      const v = u(
        (e) => typeof cancelIdleCallback !== 'undefined' && cancelIdleCallback(e)
      );
      const b = (e) =>
        typeof requestIdleCallback !== 'undefined'
          ? new v(requestIdleCallback(e))
          : d(1e3, e);
      const x = (e) => {
        let t = -1;
        return (r) => {
          clearTimeout(t);
          if (r) {
            t = setTimeout(r, e);
          }
        };
      };
      var k = r(58290);
      const y = (e, t) => {
        let r = 0;
        let n = 0;
        while (r < e.length && r < t.length && e[r] === t[r]) {
          r++;
        }
        if (r !== e.length || r !== t.length) {
          while (
            n + r < e.length &&
            n + r < t.length &&
            e[e.length - n - 1] === t[t.length - n - 1]
          ) {
            n++;
          }
        }
        return { index: r, remove: e.length - r - n, insert: t.slice(r, t.length - n) };
      };
      const w = null && y;
      const C = (e, t, r = equalityStrict) => {
        let n = 0;
        let i = 0;
        while (n < e.length && n < t.length && r(e[n], t[n])) {
          n++;
        }
        if (n !== e.length || n !== t.length) {
          while (
            i + n < e.length &&
            i + n < t.length &&
            r(e[e.length - i - 1], t[t.length - i - 1])
          ) {
            i++;
          }
        }
        return { index: n, remove: e.length - n - i, insert: t.slice(n, t.length - i) };
      };
      var _ = r(57886);
      var S = r.n(_);
      const L = 'y-codemirror';
      const F = (e, t) => {
        e._mux(() => {
          const r = e.cmDoc;
          const n = r.getEditor();
          let a = n.indexFromPos(n.getCursor('anchor'));
          let o = n.indexFromPos(n.getCursor('head'));
          const l = o < a;
          if (l) {
            const e = o;
            o = a;
            a = e;
          }
          const s = () => {
            const e = t.delta;
            let n = 0;
            for (let l = 0; l < t.delta.length; l++) {
              const t = e[l];
              if (t.retain) {
                n += t.retain;
              } else if (t.insert) {
                if (n < a || (a < o && n === a)) {
                  a += t.insert.length;
                }
                if (n < o) {
                  o += t.insert.length;
                }
                const e = r.posFromIndex(n);
                r.replaceRange(t.insert, e, e, L);
                n += t.insert.length;
              } else if (t.delete) {
                if (n < a) {
                  a = i.Fp(a - t.delete, n);
                }
                if (n < o) {
                  o = i.Fp(o - t.delete, n);
                }
                const e = r.posFromIndex(n);
                const l = r.posFromIndex(n + t.delete);
                r.replaceRange('', e, l, L);
              }
            }
          };
          if (n) {
            n.operation(s);
          } else {
            s();
          }
          if (l) {
            const e = o;
            o = a;
            a = e;
          }
          n.setSelection(n.posFromIndex(a), n.posFromIndex(o), { scroll: false });
        });
      };
      const A = (e, t) => {
        e._mux(() => {
          e.doc.transact(() => {
            const r = e.yUndoManager && t.some((e) => e.origin === 'paste');
            if (r) {
              e.yUndoManager.stopCapturing();
            }
            if (t.length > 1) {
              const t = y(e.type.toString(), e.cmDoc.getValue());
              e.type.delete(t.index, t.remove);
              e.type.insert(t.index, t.insert);
            } else {
              const r = t[0];
              const n = e.cmDoc.indexFromPos(r.from);
              const a =
                r.removed.map((e) => e.length).reduce(i.IH) + r.removed.length - 1;
              if (a > 0) {
                e.type.delete(n, a);
              }
              if (r.text.length > 0) {
                e.type.insert(n, r.text.join('\n'));
              }
            }
            if (r) {
              e.yUndoManager.stopCapturing();
            }
          }, e);
        });
        if (e._pendingCursorEvent) {
          e._pendingCursorEvent = false;
          e.emit('cursorActivity', [e]);
        }
      };
      const T = (e, t) => {
        const r = document.createElement('span');
        r.classList.add('remote-caret');
        r.setAttribute('style', `border-color: ${t}`);
        const n = document.createElement('div');
        n.setAttribute('style', `background-color: ${t}`);
        n.insertBefore(document.createTextNode(e), null);
        r.insertBefore(n, null);
        setTimeout(() => {
          r.classList.add('hide-name');
        }, 2e3);
        return r;
      };
      const M = (e) => {
        const t = document.createElement('span');
        t.setAttribute('style', 'user-select: none;');
        const r = document.createElement('span');
        r.insertBefore(document.createTextNode(''), null);
        const n = document.createElement('span');
        n.setAttribute('class', 'y-line-selection');
        n.setAttribute(
          'style',
          `display: inline-block; position: absolute; left: 4px; right: 4px; top: 0; bottom: 0; background-color: ${e}70`
        );
        t.insertBefore(n, null);
        t.insertBefore(r, null);
        return t;
      };
      const E = (e, t, r, n, i, l) => {
        const s = l.getStates().get(i);
        const c = n.get(i);
        if (c !== undefined) {
          if (c.caret) {
            c.caret.clear();
          }
          c.sel.forEach((e) => e.clear());
          n.delete(i);
        }
        if (s === undefined) {
          return;
        }
        const u = s.user || {};
        if (u.color == null) {
          u.color = '#ffa500';
        }
        if (u.name == null) {
          u.name = `User: ${i}`;
        }
        const f = s.cursor;
        if (f == null || f.anchor == null || f.head == null) {
          return;
        }
        const d = a.createAbsolutePositionFromRelativePosition(JSON.parse(f.anchor), e);
        const m = a.createAbsolutePositionFromRelativePosition(JSON.parse(f.head), e);
        if (d !== null && m !== null && d.type === r && m.type === r) {
          const e = t.posFromIndex(m.index);
          const r = t.posFromIndex(d.index);
          let a, l;
          if (m.index < d.index) {
            a = e;
            l = r;
          } else {
            a = r;
            l = e;
          }
          const p = T(u.name, u.color);
          if (
            c &&
            o.UV(s.cursor.anchor, c.awCursor.anchor) &&
            o.UV(s.cursor.head, c.awCursor.head)
          ) {
            p.classList.add('hide-name');
          }
          const h = [];
          if (m.index !== d.index) {
            if (a.line !== l.line && a.ch !== 0) {
              h.push(
                t.markText(a, new (S().Pos)(a.line + 1, 0), {
                  css: `background-color: ${u.color}70;`,
                  inclusiveRight: false,
                  inclusiveLeft: false,
                })
              );
              a = new (S().Pos)(a.line + 1, 0);
            }
            while (a.line !== l.line) {
              h.push(t.setBookmark(new (S().Pos)(a.line, 0), { widget: M(u.color) }));
              a = new (S().Pos)(a.line + 1, 0);
            }
            h.push(
              t.markText(a, l, {
                css: `background-color: ${u.color}70;`,
                inclusiveRight: false,
                inclusiveLeft: false,
              })
            );
          }
          const g =
            h.length > 0 && l === e && e.ch === 0
              ? null
              : t.setBookmark(e, { widget: p, insertLeft: true });
          n.set(i, { caret: g, sel: h, awCursor: f });
        }
      };
      const P = (e, t, r, n) => {
        const i = n.getLocalState();
        if (!t.hasFocus() || i == null || !t.display.wrapper.ownerDocument.hasFocus()) {
          return;
        }
        const o = a.createRelativePositionFromTypeIndex(
          r,
          t.indexFromPos(t.getCursor('anchor'))
        );
        const l = a.createRelativePositionFromTypeIndex(
          r,
          t.indexFromPos(t.getCursor('head'))
        );
        let s = null;
        let c = null;
        if (i.cursor != null) {
          s = a.createRelativePositionFromJSON(JSON.parse(i.cursor.anchor));
          c = a.createRelativePositionFromJSON(JSON.parse(i.cursor.head));
        }
        if (
          i.cursor == null ||
          !a.compareRelativePositions(s, o) ||
          !a.compareRelativePositions(c, l)
        ) {
          n.setLocalStateField('cursor', {
            anchor: JSON.stringify(o),
            head: JSON.stringify(l),
          });
        }
      };
      class D extends k.y {
        constructor(e, t, r = null, { yUndoManager: i = null } = {}) {
          super();
          const o = e.doc;
          const l = t.getDoc();
          this.doc = o;
          this.type = e;
          this.cm = t;
          this.cmDoc = l;
          this.awareness = r || null;
          this.yUndoManager = i;
          this._onStackItemAdded = ({ stackItem: t, changedParentTypes: r }) => {
            if (r.has(e) && this._beforeChangeSelection) {
              t.meta.set(this, this._beforeChangeSelection);
            }
          };
          this._onStackItemPopped = ({ stackItem: e }) => {
            const r = e.meta.get(this);
            if (r) {
              const e = a.createAbsolutePositionFromRelativePosition(r.anchor, o).index;
              const n = a.createAbsolutePositionFromRelativePosition(r.head, o).index;
              t.setSelection(t.posFromIndex(e), t.posFromIndex(n));
              this._beforeChange();
            }
          };
          if (i) {
            i.trackedOrigins.add(this);
            const e = (e) => {
              e.endOperation();
              i.undo();
              e.startOperation();
            };
            const r = (e) => {
              e.endOperation();
              i.redo();
              e.startOperation();
            };
            t.addKeyMap({
              'Ctrl-Z': e,
              'Shift-Ctrl-Z': r,
              'Ctrl-Y': r,
              'Cmd-Z': e,
              'Shift-Cmd-Z': r,
              'Cmd-Y': r,
            });
            i.on('stack-item-added', this._onStackItemAdded);
            i.on('stack-item-popped', this._onStackItemPopped);
          }
          this._mux = (0, n.M)();
          l.setValue(e.toString());
          this._typeObserver = (e) => F(this, e);
          this._targetObserver = (e, t) => {
            if (e.getDoc() === l) {
              A(this, t);
            }
          };
          this._cursors = new Map();
          this._changedCursors = new Set();
          this._debounceCursorEvent = x(10);
          this._awarenessListener = (n) => {
            if (t.getDoc() !== l) {
              return;
            }
            const i = (e) => {
              if (e !== o.clientID) {
                this._changedCursors.add(e);
              }
            };
            n.added.forEach(i);
            n.removed.forEach(i);
            n.updated.forEach(i);
            if (this._changedCursors.size > 0) {
              this._debounceCursorEvent(() => {
                this._changedCursors.forEach((n) => {
                  E(o, t, e, this._cursors, n, r);
                });
                this._changedCursors.clear();
              });
            }
          };
          this._pendingCursorEvent = false;
          this._cursorListener = () => {
            if (t.getDoc() === l) {
              this._pendingCursorEvent = true;
              setTimeout(() => {
                if (this._pendingCursorEvent) {
                  this._pendingCursorEvent = false;
                  this.emit('cursorActivity', [t]);
                }
              }, 0);
            }
          };
          this.on('cursorActivity', () => {
            P(o, t, e, r);
          });
          this._blurListeer = () => r.setLocalStateField('cursor', null);
          e.observe(this._typeObserver);
          t.on('changes', this._targetObserver);
          this._beforeChangeSelection = null;
          this._beforeChange = () => {
            this._mux(() => {
              const r = a.createRelativePositionFromTypeIndex(
                e,
                t.indexFromPos(t.getCursor('anchor'))
              );
              const n = a.createRelativePositionFromTypeIndex(
                e,
                t.indexFromPos(t.getCursor('head'))
              );
              this._beforeChangeSelection = { anchor: r, head: n };
            });
          };
          t.on('beforeChange', this._beforeChange);
          if (r) {
            t.on('swapDoc', this._blurListeer);
            r.on('change', this._awarenessListener);
            t.on('cursorActivity', this._cursorListener);
            t.on('blur', this._blurListeer);
            t.on('focus', this._cursorListener);
          }
        }
        destroy() {
          this.type.unobserve(this._typeObserver);
          this.cm.off('swapDoc', this._blurListeer);
          this.cm.off('changes', this._targetObserver);
          this.cm.off('beforeChange', this._beforeChange);
          this.cm.off('cursorActivity', this._cursorListener);
          this.cm.off('focus', this._cursorListener);
          this.cm.off('blur', this._blurListeer);
          if (this.awareness) {
            this.awareness.off('change', this._awarenessListener);
          }
          if (this.yUndoManager) {
            this.yUndoManager.off('stack-item-added', this._onStackItemAdded);
            this.yUndoManager.off('stack-item-popped', this._onStackItemPopped);
            this.yUndoManager.trackedOrigins.delete(this);
          }
          this.type = null;
          this.cm = null;
          this.cmDoc = null;
          super.destroy();
        }
      }
      const z = null && D;
    },
  },
]);
//# sourceMappingURL=6080.39703b8cc7bd284ce1bd.js.map?v=39703b8cc7bd284ce1bd
