(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [3308],
  {
    53308: (e, t, n) => {
      'use strict';
      n.d(t, { TU: () => N });
      function s() {
        return {
          baseUrl: null,
          breaks: false,
          extensions: null,
          gfm: true,
          headerIds: true,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: true,
          pedantic: false,
          renderer: null,
          sanitize: false,
          sanitizer: null,
          silent: false,
          smartLists: false,
          smartypants: false,
          tokenizer: null,
          walkTokens: null,
          xhtml: false,
        };
      }
      let i = s();
      function r(e) {
        i = e;
      }
      const l = /[&<>"']/;
      const o = /[&<>"']/g;
      const a = /[<>"']|&(?!#?\w+;)/;
      const c = /[<>"']|&(?!#?\w+;)/g;
      const h = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
      const p = (e) => h[e];
      function u(e, t) {
        if (t) {
          if (l.test(e)) {
            return e.replace(o, p);
          }
        } else {
          if (a.test(e)) {
            return e.replace(c, p);
          }
        }
        return e;
      }
      const f = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
      function g(e) {
        return e.replace(f, (e, t) => {
          t = t.toLowerCase();
          if (t === 'colon') return ':';
          if (t.charAt(0) === '#') {
            return t.charAt(1) === 'x'
              ? String.fromCharCode(parseInt(t.substring(2), 16))
              : String.fromCharCode(+t.substring(1));
          }
          return '';
        });
      }
      const k = /(^|[^\[])\^/g;
      function d(e, t) {
        e = typeof e === 'string' ? e : e.source;
        t = t || '';
        const n = {
          replace: (t, s) => {
            s = s.source || s;
            s = s.replace(k, '$1');
            e = e.replace(t, s);
            return n;
          },
          getRegex: () => new RegExp(e, t),
        };
        return n;
      }
      const x = /[^\w:]/g;
      const m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
      function b(e, t, n) {
        if (e) {
          let e;
          try {
            e = decodeURIComponent(g(n)).replace(x, '').toLowerCase();
          } catch (s) {
            return null;
          }
          if (
            e.indexOf('javascript:') === 0 ||
            e.indexOf('vbscript:') === 0 ||
            e.indexOf('data:') === 0
          ) {
            return null;
          }
        }
        if (t && !m.test(n)) {
          n = z(t, n);
        }
        try {
          n = encodeURI(n).replace(/%25/g, '%');
        } catch (s) {
          return null;
        }
        return n;
      }
      const w = {};
      const _ = /^[^:]+:\/*[^/]*$/;
      const y = /^([^:]+:)[\s\S]*$/;
      const $ = /^([^:]+:\/*[^/]*)[\s\S]*$/;
      function z(e, t) {
        if (!w[' ' + e]) {
          if (_.test(e)) {
            w[' ' + e] = e + '/';
          } else {
            w[' ' + e] = T(e, '/', true);
          }
        }
        e = w[' ' + e];
        const n = e.indexOf(':') === -1;
        if (t.substring(0, 2) === '//') {
          if (n) {
            return t;
          }
          return e.replace(y, '$1') + t;
        } else if (t.charAt(0) === '/') {
          if (n) {
            return t;
          }
          return e.replace($, '$1') + t;
        } else {
          return e + t;
        }
      }
      const S = { exec: function e() {} };
      function R(e) {
        let t = 1,
          n,
          s;
        for (; t < arguments.length; t++) {
          n = arguments[t];
          for (s in n) {
            if (Object.prototype.hasOwnProperty.call(n, s)) {
              e[s] = n[s];
            }
          }
        }
        return e;
      }
      function A(e, t) {
        const n = e.replace(/\|/g, (e, t, n) => {
            let s = false,
              i = t;
            while (--i >= 0 && n[i] === '\\') s = !s;
            if (s) {
              return '|';
            } else {
              return ' |';
            }
          }),
          s = n.split(/ \|/);
        let i = 0;
        if (!s[0].trim()) {
          s.shift();
        }
        if (s.length > 0 && !s[s.length - 1].trim()) {
          s.pop();
        }
        if (s.length > t) {
          s.splice(t);
        } else {
          while (s.length < t) s.push('');
        }
        for (; i < s.length; i++) {
          s[i] = s[i].trim().replace(/\\\|/g, '|');
        }
        return s;
      }
      function T(e, t, n) {
        const s = e.length;
        if (s === 0) {
          return '';
        }
        let i = 0;
        while (i < s) {
          const r = e.charAt(s - i - 1);
          if (r === t && !n) {
            i++;
          } else if (r !== t && n) {
            i++;
          } else {
            break;
          }
        }
        return e.slice(0, s - i);
      }
      function I(e, t) {
        if (e.indexOf(t[1]) === -1) {
          return -1;
        }
        const n = e.length;
        let s = 0,
          i = 0;
        for (; i < n; i++) {
          if (e[i] === '\\') {
            i++;
          } else if (e[i] === t[0]) {
            s++;
          } else if (e[i] === t[1]) {
            s--;
            if (s < 0) {
              return i;
            }
          }
        }
        return -1;
      }
      function E(e) {
        if (e && e.sanitize && !e.silent) {
          console.warn(
            'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
          );
        }
      }
      function Z(e, t) {
        if (t < 1) {
          return '';
        }
        let n = '';
        while (t > 1) {
          if (t & 1) {
            n += e;
          }
          t >>= 1;
          e += e;
        }
        return n + e;
      }
      function q(e, t, n, s) {
        const i = t.href;
        const r = t.title ? u(t.title) : null;
        const l = e[1].replace(/\\([\[\]])/g, '$1');
        if (e[0].charAt(0) !== '!') {
          s.state.inLink = true;
          const e = {
            type: 'link',
            raw: n,
            href: i,
            title: r,
            text: l,
            tokens: s.inlineTokens(l, []),
          };
          s.state.inLink = false;
          return e;
        }
        return { type: 'image', raw: n, href: i, title: r, text: u(l) };
      }
      function L(e, t) {
        const n = e.match(/^(\s+)(?:```)/);
        if (n === null) {
          return t;
        }
        const s = n[1];
        return t
          .split('\n')
          .map((e) => {
            const t = e.match(/^\s+/);
            if (t === null) {
              return e;
            }
            const [n] = t;
            if (n.length >= s.length) {
              return e.slice(s.length);
            }
            return e;
          })
          .join('\n');
      }
      class C {
        constructor(e) {
          this.options = e || i;
        }
        space(e) {
          const t = this.rules.block.newline.exec(e);
          if (t && t[0].length > 0) {
            return { type: 'space', raw: t[0] };
          }
        }
        code(e) {
          const t = this.rules.block.code.exec(e);
          if (t) {
            const e = t[0].replace(/^ {1,4}/gm, '');
            return {
              type: 'code',
              raw: t[0],
              codeBlockStyle: 'indented',
              text: !this.options.pedantic ? T(e, '\n') : e,
            };
          }
        }
        fences(e) {
          const t = this.rules.block.fences.exec(e);
          if (t) {
            const e = t[0];
            const n = L(e, t[3] || '');
            return { type: 'code', raw: e, lang: t[2] ? t[2].trim() : t[2], text: n };
          }
        }
        heading(e) {
          const t = this.rules.block.heading.exec(e);
          if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
              const t = T(e, '#');
              if (this.options.pedantic) {
                e = t.trim();
              } else if (!t || / $/.test(t)) {
                e = t.trim();
              }
            }
            const n = {
              type: 'heading',
              raw: t[0],
              depth: t[1].length,
              text: e,
              tokens: [],
            };
            this.lexer.inline(n.text, n.tokens);
            return n;
          }
        }
        hr(e) {
          const t = this.rules.block.hr.exec(e);
          if (t) {
            return { type: 'hr', raw: t[0] };
          }
        }
        blockquote(e) {
          const t = this.rules.block.blockquote.exec(e);
          if (t) {
            const e = t[0].replace(/^ *>[ \t]?/gm, '');
            return {
              type: 'blockquote',
              raw: t[0],
              tokens: this.lexer.blockTokens(e, []),
              text: e,
            };
          }
        }
        list(e) {
          let t = this.rules.block.list.exec(e);
          if (t) {
            let n, s, i, r, l, o, a, c, h, p, u, f;
            let g = t[1].trim();
            const k = g.length > 1;
            const d = {
              type: 'list',
              raw: '',
              ordered: k,
              start: k ? +g.slice(0, -1) : '',
              loose: false,
              items: [],
            };
            g = k ? `\\d{1,9}\\${g.slice(-1)}` : `\\${g}`;
            if (this.options.pedantic) {
              g = k ? g : '[*+-]';
            }
            const x = new RegExp(`^( {0,3}${g})((?:[\t ][^\\n]*)?(?:\\n|$))`);
            while (e) {
              f = false;
              if (!(t = x.exec(e))) {
                break;
              }
              if (this.rules.block.hr.test(e)) {
                break;
              }
              n = t[0];
              e = e.substring(n.length);
              c = t[2].split('\n', 1)[0];
              h = e.split('\n', 1)[0];
              if (this.options.pedantic) {
                r = 2;
                u = c.trimLeft();
              } else {
                r = t[2].search(/[^ ]/);
                r = r > 4 ? 1 : r;
                u = c.slice(r);
                r += t[1].length;
              }
              o = false;
              if (!c && /^ *$/.test(h)) {
                n += h + '\n';
                e = e.substring(h.length + 1);
                f = true;
              }
              if (!f) {
                const t = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    r - 1
                  )}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`
                );
                const s = new RegExp(
                  `^ {0,${Math.min(
                    3,
                    r - 1
                  )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
                );
                const i = new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`);
                const l = new RegExp(`^ {0,${Math.min(3, r - 1)}}#`);
                while (e) {
                  p = e.split('\n', 1)[0];
                  c = p;
                  if (this.options.pedantic) {
                    c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
                  }
                  if (i.test(c)) {
                    break;
                  }
                  if (l.test(c)) {
                    break;
                  }
                  if (t.test(c)) {
                    break;
                  }
                  if (s.test(e)) {
                    break;
                  }
                  if (c.search(/[^ ]/) >= r || !c.trim()) {
                    u += '\n' + c.slice(r);
                  } else if (!o) {
                    u += '\n' + c;
                  } else {
                    break;
                  }
                  if (!o && !c.trim()) {
                    o = true;
                  }
                  n += p + '\n';
                  e = e.substring(p.length + 1);
                }
              }
              if (!d.loose) {
                if (a) {
                  d.loose = true;
                } else if (/\n *\n *$/.test(n)) {
                  a = true;
                }
              }
              if (this.options.gfm) {
                s = /^\[[ xX]\] /.exec(u);
                if (s) {
                  i = s[0] !== '[ ] ';
                  u = u.replace(/^\[[ xX]\] +/, '');
                }
              }
              d.items.push({
                type: 'list_item',
                raw: n,
                task: !!s,
                checked: i,
                loose: false,
                text: u,
              });
              d.raw += n;
            }
            d.items[d.items.length - 1].raw = n.trimRight();
            d.items[d.items.length - 1].text = u.trimRight();
            d.raw = d.raw.trimRight();
            const m = d.items.length;
            for (l = 0; l < m; l++) {
              this.lexer.state.top = false;
              d.items[l].tokens = this.lexer.blockTokens(d.items[l].text, []);
              const e = d.items[l].tokens.filter((e) => e.type === 'space');
              const t = e.every((e) => {
                const t = e.raw.split('');
                let n = 0;
                for (const s of t) {
                  if (s === '\n') {
                    n += 1;
                  }
                  if (n > 1) {
                    return true;
                  }
                }
                return false;
              });
              if (!d.loose && e.length && t) {
                d.loose = true;
                d.items[l].loose = true;
              }
            }
            return d;
          }
        }
        html(e) {
          const t = this.rules.block.html.exec(e);
          if (t) {
            const e = {
              type: 'html',
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                (t[1] === 'pre' || t[1] === 'script' || t[1] === 'style'),
              text: t[0],
            };
            if (this.options.sanitize) {
              e.type = 'paragraph';
              e.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : u(t[0]);
              e.tokens = [];
              this.lexer.inline(e.text, e.tokens);
            }
            return e;
          }
        }
        def(e) {
          const t = this.rules.block.def.exec(e);
          if (t) {
            if (t[3]) t[3] = t[3].substring(1, t[3].length - 1);
            const e = t[1].toLowerCase().replace(/\s+/g, ' ');
            return { type: 'def', tag: e, raw: t[0], href: t[2], title: t[3] };
          }
        }
        table(e) {
          const t = this.rules.block.table.exec(e);
          if (t) {
            const e = {
              type: 'table',
              header: A(t[1]).map((e) => ({ text: e })),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              rows:
                t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, '').split('\n') : [],
            };
            if (e.header.length === e.align.length) {
              e.raw = t[0];
              let n = e.align.length;
              let s, i, r, l;
              for (s = 0; s < n; s++) {
                if (/^ *-+: *$/.test(e.align[s])) {
                  e.align[s] = 'right';
                } else if (/^ *:-+: *$/.test(e.align[s])) {
                  e.align[s] = 'center';
                } else if (/^ *:-+ *$/.test(e.align[s])) {
                  e.align[s] = 'left';
                } else {
                  e.align[s] = null;
                }
              }
              n = e.rows.length;
              for (s = 0; s < n; s++) {
                e.rows[s] = A(e.rows[s], e.header.length).map((e) => ({ text: e }));
              }
              n = e.header.length;
              for (i = 0; i < n; i++) {
                e.header[i].tokens = [];
                this.lexer.inline(e.header[i].text, e.header[i].tokens);
              }
              n = e.rows.length;
              for (i = 0; i < n; i++) {
                l = e.rows[i];
                for (r = 0; r < l.length; r++) {
                  l[r].tokens = [];
                  this.lexer.inline(l[r].text, l[r].tokens);
                }
              }
              return e;
            }
          }
        }
        lheading(e) {
          const t = this.rules.block.lheading.exec(e);
          if (t) {
            const e = {
              type: 'heading',
              raw: t[0],
              depth: t[2].charAt(0) === '=' ? 1 : 2,
              text: t[1],
              tokens: [],
            };
            this.lexer.inline(e.text, e.tokens);
            return e;
          }
        }
        paragraph(e) {
          const t = this.rules.block.paragraph.exec(e);
          if (t) {
            const e = {
              type: 'paragraph',
              raw: t[0],
              text: t[1].charAt(t[1].length - 1) === '\n' ? t[1].slice(0, -1) : t[1],
              tokens: [],
            };
            this.lexer.inline(e.text, e.tokens);
            return e;
          }
        }
        text(e) {
          const t = this.rules.block.text.exec(e);
          if (t) {
            const e = { type: 'text', raw: t[0], text: t[0], tokens: [] };
            this.lexer.inline(e.text, e.tokens);
            return e;
          }
        }
        escape(e) {
          const t = this.rules.inline.escape.exec(e);
          if (t) {
            return { type: 'escape', raw: t[0], text: u(t[1]) };
          }
        }
        tag(e) {
          const t = this.rules.inline.tag.exec(e);
          if (t) {
            if (!this.lexer.state.inLink && /^<a /i.test(t[0])) {
              this.lexer.state.inLink = true;
            } else if (this.lexer.state.inLink && /^<\/a>/i.test(t[0])) {
              this.lexer.state.inLink = false;
            }
            if (
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
            ) {
              this.lexer.state.inRawBlock = true;
            } else if (
              this.lexer.state.inRawBlock &&
              /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])
            ) {
              this.lexer.state.inRawBlock = false;
            }
            return {
              type: this.options.sanitize ? 'text' : 'html',
              raw: t[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : u(t[0])
                : t[0],
            };
          }
        }
        link(e) {
          const t = this.rules.inline.link.exec(e);
          if (t) {
            const e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
              if (!/>$/.test(e)) {
                return;
              }
              const t = T(e.slice(0, -1), '\\');
              if ((e.length - t.length) % 2 === 0) {
                return;
              }
            } else {
              const e = I(t[2], '()');
              if (e > -1) {
                const n = t[0].indexOf('!') === 0 ? 5 : 4;
                const s = n + t[1].length + e;
                t[2] = t[2].substring(0, e);
                t[0] = t[0].substring(0, s).trim();
                t[3] = '';
              }
            }
            let n = t[2];
            let s = '';
            if (this.options.pedantic) {
              const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
              if (e) {
                n = e[1];
                s = e[3];
              }
            } else {
              s = t[3] ? t[3].slice(1, -1) : '';
            }
            n = n.trim();
            if (/^</.test(n)) {
              if (this.options.pedantic && !/>$/.test(e)) {
                n = n.slice(1);
              } else {
                n = n.slice(1, -1);
              }
            }
            return q(
              t,
              {
                href: n ? n.replace(this.rules.inline._escapes, '$1') : n,
                title: s ? s.replace(this.rules.inline._escapes, '$1') : s,
              },
              t[0],
              this.lexer
            );
          }
        }
        reflink(e, t) {
          let n;
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            let e = (n[2] || n[1]).replace(/\s+/g, ' ');
            e = t[e.toLowerCase()];
            if (!e || !e.href) {
              const e = n[0].charAt(0);
              return { type: 'text', raw: e, text: e };
            }
            return q(n, e, n[0], this.lexer);
          }
        }
        emStrong(e, t, n = '') {
          let s = this.rules.inline.emStrong.lDelim.exec(e);
          if (!s) return;
          if (s[3] && n.match(/[\p{L}\p{N}]/u)) return;
          const i = s[1] || s[2] || '';
          if (!i || (i && (n === '' || this.rules.inline.punctuation.exec(n)))) {
            const n = s[0].length - 1;
            let i,
              r,
              l = n,
              o = 0;
            const a =
              s[0][0] === '*'
                ? this.rules.inline.emStrong.rDelimAst
                : this.rules.inline.emStrong.rDelimUnd;
            a.lastIndex = 0;
            t = t.slice(-1 * e.length + n);
            while ((s = a.exec(t)) != null) {
              i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6];
              if (!i) continue;
              r = i.length;
              if (s[3] || s[4]) {
                l += r;
                continue;
              } else if (s[5] || s[6]) {
                if (n % 3 && !((n + r) % 3)) {
                  o += r;
                  continue;
                }
              }
              l -= r;
              if (l > 0) continue;
              r = Math.min(r, r + l + o);
              if (Math.min(n, r) % 2) {
                const t = e.slice(1, n + s.index + r);
                return {
                  type: 'em',
                  raw: e.slice(0, n + s.index + r + 1),
                  text: t,
                  tokens: this.lexer.inlineTokens(t, []),
                };
              }
              const t = e.slice(2, n + s.index + r - 1);
              return {
                type: 'strong',
                raw: e.slice(0, n + s.index + r + 1),
                text: t,
                tokens: this.lexer.inlineTokens(t, []),
              };
            }
          }
        }
        codespan(e) {
          const t = this.rules.inline.code.exec(e);
          if (t) {
            let e = t[2].replace(/\n/g, ' ');
            const n = /[^ ]/.test(e);
            const s = /^ /.test(e) && / $/.test(e);
            if (n && s) {
              e = e.substring(1, e.length - 1);
            }
            e = u(e, true);
            return { type: 'codespan', raw: t[0], text: e };
          }
        }
        br(e) {
          const t = this.rules.inline.br.exec(e);
          if (t) {
            return { type: 'br', raw: t[0] };
          }
        }
        del(e) {
          const t = this.rules.inline.del.exec(e);
          if (t) {
            return {
              type: 'del',
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2], []),
            };
          }
        }
        autolink(e, t) {
          const n = this.rules.inline.autolink.exec(e);
          if (n) {
            let e, s;
            if (n[2] === '@') {
              e = u(this.options.mangle ? t(n[1]) : n[1]);
              s = 'mailto:' + e;
            } else {
              e = u(n[1]);
              s = e;
            }
            return {
              type: 'link',
              raw: n[0],
              text: e,
              href: s,
              tokens: [{ type: 'text', raw: e, text: e }],
            };
          }
        }
        url(e, t) {
          let n;
          if ((n = this.rules.inline.url.exec(e))) {
            let e, s;
            if (n[2] === '@') {
              e = u(this.options.mangle ? t(n[0]) : n[0]);
              s = 'mailto:' + e;
            } else {
              let t;
              do {
                t = n[0];
                n[0] = this.rules.inline._backpedal.exec(n[0])[0];
              } while (t !== n[0]);
              e = u(n[0]);
              if (n[1] === 'www.') {
                s = 'http://' + e;
              } else {
                s = e;
              }
            }
            return {
              type: 'link',
              raw: n[0],
              text: e,
              href: s,
              tokens: [{ type: 'text', raw: e, text: e }],
            };
          }
        }
        inlineText(e, t) {
          const n = this.rules.inline.text.exec(e);
          if (n) {
            let e;
            if (this.lexer.state.inRawBlock) {
              e = this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(n[0])
                  : u(n[0])
                : n[0];
            } else {
              e = u(this.options.smartypants ? t(n[0]) : n[0]);
            }
            return { type: 'text', raw: n[0], text: e };
          }
        }
      }
      const O = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences:
          /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html:
          '^ {0,3}(?:' +
          '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' +
          '|comment[^\\n]*(\\n+|$)' +
          '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' +
          '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' +
          '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' +
          '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' +
          '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' +
          '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' +
          ')',
        def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: S,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph:
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/,
      };
      O._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
      O._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
      O.def = d(O.def).replace('label', O._label).replace('title', O._title).getRegex();
      O.bullet = /(?:[*+-]|\d{1,9}[.)])/;
      O.listItemStart = d(/^( *)(bull) */)
        .replace('bull', O.bullet)
        .getRegex();
      O.list = d(O.list)
        .replace(/bull/g, O.bullet)
        .replace(
          'hr',
          '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
        )
        .replace('def', '\\n+(?=' + O.def.source + ')')
        .getRegex();
      O._tag =
        'address|article|aside|base|basefont|blockquote|body|caption' +
        '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' +
        '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' +
        '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' +
        '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' +
        '|track|ul';
      O._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
      O.html = d(O.html, 'i')
        .replace('comment', O._comment)
        .replace('tag', O._tag)
        .replace(
          'attribute',
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
        )
        .getRegex();
      O.paragraph = d(O._paragraph)
        .replace('hr', O.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('|lheading', '')
        .replace('|table', '')
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', O._tag)
        .getRegex();
      O.blockquote = d(O.blockquote).replace('paragraph', O.paragraph).getRegex();
      O.normal = R({}, O);
      O.gfm = R({}, O.normal, {
        table:
          '^ *([^\\n ].*\\|.*)\\n' +
          ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' +
          '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      });
      O.gfm.table = d(O.gfm.table)
        .replace('hr', O.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('blockquote', ' {0,3}>')
        .replace('code', ' {4}[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', O._tag)
        .getRegex();
      O.gfm.paragraph = d(O._paragraph)
        .replace('hr', O.hr)
        .replace('heading', ' {0,3}#{1,6} ')
        .replace('|lheading', '')
        .replace('table', O.gfm.table)
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', O._tag)
        .getRegex();
      O.pedantic = R({}, O.normal, {
        html: d(
          '^ *(?:comment *(?:\\n|\\s*$)' +
            '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' +
            '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
        )
          .replace('comment', O._comment)
          .replace(
            /tag/g,
            '(?!(?:' +
              'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' +
              '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' +
              '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: S,
        paragraph: d(O.normal._paragraph)
          .replace('hr', O.hr)
          .replace('heading', ' *#{1,6} *[^\n]')
          .replace('lheading', O.lheading)
          .replace('blockquote', ' {0,3}>')
          .replace('|fences', '')
          .replace('|list', '')
          .replace('|html', '')
          .getRegex(),
      });
      const v = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: S,
        tag:
          '^comment' +
          '|^</[a-zA-Z][\\w:-]*\\s*>' +
          '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' +
          '|^<\\?[\\s\\S]*?\\?>' +
          '|^<![a-zA-Z]+\\s[\\s\\S]*?>' +
          '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: 'reflink|nolink(?!\\()',
        emStrong: {
          lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
          rDelimAst:
            /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
          rDelimUnd:
            /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: S,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/,
      };
      v._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
      v.punctuation = d(v.punctuation)
        .replace(/punctuation/g, v._punctuation)
        .getRegex();
      v.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
      v.escapedEmSt = /\\\*|\\_/g;
      v._comment = d(O._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex();
      v.emStrong.lDelim = d(v.emStrong.lDelim)
        .replace(/punct/g, v._punctuation)
        .getRegex();
      v.emStrong.rDelimAst = d(v.emStrong.rDelimAst, 'g')
        .replace(/punct/g, v._punctuation)
        .getRegex();
      v.emStrong.rDelimUnd = d(v.emStrong.rDelimUnd, 'g')
        .replace(/punct/g, v._punctuation)
        .getRegex();
      v._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
      v._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
      v._email =
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
      v.autolink = d(v.autolink)
        .replace('scheme', v._scheme)
        .replace('email', v._email)
        .getRegex();
      v._attribute =
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
      v.tag = d(v.tag)
        .replace('comment', v._comment)
        .replace('attribute', v._attribute)
        .getRegex();
      v._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
      v._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
      v._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
      v.link = d(v.link)
        .replace('label', v._label)
        .replace('href', v._href)
        .replace('title', v._title)
        .getRegex();
      v.reflink = d(v.reflink)
        .replace('label', v._label)
        .replace('ref', O._label)
        .getRegex();
      v.nolink = d(v.nolink).replace('ref', O._label).getRegex();
      v.reflinkSearch = d(v.reflinkSearch, 'g')
        .replace('reflink', v.reflink)
        .replace('nolink', v.nolink)
        .getRegex();
      v.normal = R({}, v);
      v.pedantic = R({}, v.normal, {
        strong: {
          start: /^__|\*\*/,
          middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g,
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g,
        },
        link: d(/^!?\[(label)\]\((.*?)\)/)
          .replace('label', v._label)
          .getRegex(),
        reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace('label', v._label)
          .getRegex(),
      });
      v.gfm = R({}, v.normal, {
        escape: d(v.escape).replace('])', '~|])').getRegex(),
        _extended_email:
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal:
          /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      });
      v.gfm.url = d(v.gfm.url, 'i').replace('email', v.gfm._extended_email).getRegex();
      v.breaks = R({}, v.gfm, {
        br: d(v.br).replace('{2,}', '*').getRegex(),
        text: d(v.gfm.text)
          .replace('\\b_', '\\b_| {2,}\\n')
          .replace(/\{2,\}/g, '*')
          .getRegex(),
      });
      function D(e) {
        return e
          .replace(/---/g, '—')
          .replace(/--/g, '–')
          .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
          .replace(/'/g, '’')
          .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
          .replace(/"/g, '”')
          .replace(/\.{3}/g, '…');
      }
      function B(e) {
        let t = '',
          n,
          s;
        const i = e.length;
        for (n = 0; n < i; n++) {
          s = e.charCodeAt(n);
          if (Math.random() > 0.5) {
            s = 'x' + s.toString(16);
          }
          t += '&#' + s + ';';
        }
        return t;
      }
      class Q {
        constructor(e) {
          this.tokens = [];
          this.tokens.links = Object.create(null);
          this.options = e || i;
          this.options.tokenizer = this.options.tokenizer || new C();
          this.tokenizer = this.options.tokenizer;
          this.tokenizer.options = this.options;
          this.tokenizer.lexer = this;
          this.inlineQueue = [];
          this.state = { inLink: false, inRawBlock: false, top: true };
          const t = { block: O.normal, inline: v.normal };
          if (this.options.pedantic) {
            t.block = O.pedantic;
            t.inline = v.pedantic;
          } else if (this.options.gfm) {
            t.block = O.gfm;
            if (this.options.breaks) {
              t.inline = v.breaks;
            } else {
              t.inline = v.gfm;
            }
          }
          this.tokenizer.rules = t;
        }
        static get rules() {
          return { block: O, inline: v };
        }
        static lex(e, t) {
          const n = new Q(t);
          return n.lex(e);
        }
        static lexInline(e, t) {
          const n = new Q(t);
          return n.inlineTokens(e);
        }
        lex(e) {
          e = e.replace(/\r\n|\r/g, '\n');
          this.blockTokens(e, this.tokens);
          let t;
          while ((t = this.inlineQueue.shift())) {
            this.inlineTokens(t.src, t.tokens);
          }
          return this.tokens;
        }
        blockTokens(e, t = []) {
          if (this.options.pedantic) {
            e = e.replace(/\t/g, '    ').replace(/^ +$/gm, '');
          } else {
            e = e.replace(/^( *)(\t+)/gm, (e, t, n) => t + '    '.repeat(n.length));
          }
          let n, s, i, r;
          while (e) {
            if (
              this.options.extensions &&
              this.options.extensions.block &&
              this.options.extensions.block.some((s) => {
                if ((n = s.call({ lexer: this }, e, t))) {
                  e = e.substring(n.raw.length);
                  t.push(n);
                  return true;
                }
                return false;
              })
            ) {
              continue;
            }
            if ((n = this.tokenizer.space(e))) {
              e = e.substring(n.raw.length);
              if (n.raw.length === 1 && t.length > 0) {
                t[t.length - 1].raw += '\n';
              } else {
                t.push(n);
              }
              continue;
            }
            if ((n = this.tokenizer.code(e))) {
              e = e.substring(n.raw.length);
              s = t[t.length - 1];
              if (s && (s.type === 'paragraph' || s.type === 'text')) {
                s.raw += '\n' + n.raw;
                s.text += '\n' + n.text;
                this.inlineQueue[this.inlineQueue.length - 1].src = s.text;
              } else {
                t.push(n);
              }
              continue;
            }
            if ((n = this.tokenizer.fences(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.heading(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.hr(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.blockquote(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.list(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.html(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.def(e))) {
              e = e.substring(n.raw.length);
              s = t[t.length - 1];
              if (s && (s.type === 'paragraph' || s.type === 'text')) {
                s.raw += '\n' + n.raw;
                s.text += '\n' + n.raw;
                this.inlineQueue[this.inlineQueue.length - 1].src = s.text;
              } else if (!this.tokens.links[n.tag]) {
                this.tokens.links[n.tag] = { href: n.href, title: n.title };
              }
              continue;
            }
            if ((n = this.tokenizer.table(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.lheading(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            i = e;
            if (this.options.extensions && this.options.extensions.startBlock) {
              let t = Infinity;
              const n = e.slice(1);
              let s;
              this.options.extensions.startBlock.forEach(function (e) {
                s = e.call({ lexer: this }, n);
                if (typeof s === 'number' && s >= 0) {
                  t = Math.min(t, s);
                }
              });
              if (t < Infinity && t >= 0) {
                i = e.substring(0, t + 1);
              }
            }
            if (this.state.top && (n = this.tokenizer.paragraph(i))) {
              s = t[t.length - 1];
              if (r && s.type === 'paragraph') {
                s.raw += '\n' + n.raw;
                s.text += '\n' + n.text;
                this.inlineQueue.pop();
                this.inlineQueue[this.inlineQueue.length - 1].src = s.text;
              } else {
                t.push(n);
              }
              r = i.length !== e.length;
              e = e.substring(n.raw.length);
              continue;
            }
            if ((n = this.tokenizer.text(e))) {
              e = e.substring(n.raw.length);
              s = t[t.length - 1];
              if (s && s.type === 'text') {
                s.raw += '\n' + n.raw;
                s.text += '\n' + n.text;
                this.inlineQueue.pop();
                this.inlineQueue[this.inlineQueue.length - 1].src = s.text;
              } else {
                t.push(n);
              }
              continue;
            }
            if (e) {
              const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
              if (this.options.silent) {
                console.error(t);
                break;
              } else {
                throw new Error(t);
              }
            }
          }
          this.state.top = true;
          return t;
        }
        inline(e, t) {
          this.inlineQueue.push({ src: e, tokens: t });
        }
        inlineTokens(e, t = []) {
          let n, s, i;
          let r = e;
          let l;
          let o, a;
          if (this.tokens.links) {
            const e = Object.keys(this.tokens.links);
            if (e.length > 0) {
              while ((l = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null) {
                if (e.includes(l[0].slice(l[0].lastIndexOf('[') + 1, -1))) {
                  r =
                    r.slice(0, l.index) +
                    '[' +
                    Z('a', l[0].length - 2) +
                    ']' +
                    r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
              }
            }
          }
          while ((l = this.tokenizer.rules.inline.blockSkip.exec(r)) != null) {
            r =
              r.slice(0, l.index) +
              '[' +
              Z('a', l[0].length - 2) +
              ']' +
              r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          }
          while ((l = this.tokenizer.rules.inline.escapedEmSt.exec(r)) != null) {
            r =
              r.slice(0, l.index) +
              '++' +
              r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
          }
          while (e) {
            if (!o) {
              a = '';
            }
            o = false;
            if (
              this.options.extensions &&
              this.options.extensions.inline &&
              this.options.extensions.inline.some((s) => {
                if ((n = s.call({ lexer: this }, e, t))) {
                  e = e.substring(n.raw.length);
                  t.push(n);
                  return true;
                }
                return false;
              })
            ) {
              continue;
            }
            if ((n = this.tokenizer.escape(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.tag(e))) {
              e = e.substring(n.raw.length);
              s = t[t.length - 1];
              if (s && n.type === 'text' && s.type === 'text') {
                s.raw += n.raw;
                s.text += n.text;
              } else {
                t.push(n);
              }
              continue;
            }
            if ((n = this.tokenizer.link(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.reflink(e, this.tokens.links))) {
              e = e.substring(n.raw.length);
              s = t[t.length - 1];
              if (s && n.type === 'text' && s.type === 'text') {
                s.raw += n.raw;
                s.text += n.text;
              } else {
                t.push(n);
              }
              continue;
            }
            if ((n = this.tokenizer.emStrong(e, r, a))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.codespan(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.br(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.del(e))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if ((n = this.tokenizer.autolink(e, B))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            if (!this.state.inLink && (n = this.tokenizer.url(e, B))) {
              e = e.substring(n.raw.length);
              t.push(n);
              continue;
            }
            i = e;
            if (this.options.extensions && this.options.extensions.startInline) {
              let t = Infinity;
              const n = e.slice(1);
              let s;
              this.options.extensions.startInline.forEach(function (e) {
                s = e.call({ lexer: this }, n);
                if (typeof s === 'number' && s >= 0) {
                  t = Math.min(t, s);
                }
              });
              if (t < Infinity && t >= 0) {
                i = e.substring(0, t + 1);
              }
            }
            if ((n = this.tokenizer.inlineText(i, D))) {
              e = e.substring(n.raw.length);
              if (n.raw.slice(-1) !== '_') {
                a = n.raw.slice(-1);
              }
              o = true;
              s = t[t.length - 1];
              if (s && s.type === 'text') {
                s.raw += n.raw;
                s.text += n.text;
              } else {
                t.push(n);
              }
              continue;
            }
            if (e) {
              const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
              if (this.options.silent) {
                console.error(t);
                break;
              } else {
                throw new Error(t);
              }
            }
          }
          return t;
        }
      }
      class U {
        constructor(e) {
          this.options = e || i;
        }
        code(e, t, n) {
          const s = (t || '').match(/\S*/)[0];
          if (this.options.highlight) {
            const t = this.options.highlight(e, s);
            if (t != null && t !== e) {
              n = true;
              e = t;
            }
          }
          e = e.replace(/\n$/, '') + '\n';
          if (!s) {
            return '<pre><code>' + (n ? e : u(e, true)) + '</code></pre>\n';
          }
          return (
            '<pre><code class="' +
            this.options.langPrefix +
            u(s, true) +
            '">' +
            (n ? e : u(e, true)) +
            '</code></pre>\n'
          );
        }
        blockquote(e) {
          return `<blockquote>\n${e}</blockquote>\n`;
        }
        html(e) {
          return e;
        }
        heading(e, t, n, s) {
          if (this.options.headerIds) {
            const i = this.options.headerPrefix + s.slug(n);
            return `<h${t} id="${i}">${e}</h${t}>\n`;
          }
          return `<h${t}>${e}</h${t}>\n`;
        }
        hr() {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        }
        list(e, t, n) {
          const s = t ? 'ol' : 'ul',
            i = t && n !== 1 ? ' start="' + n + '"' : '';
          return '<' + s + i + '>\n' + e + '</' + s + '>\n';
        }
        listitem(e) {
          return `<li>${e}</li>\n`;
        }
        checkbox(e) {
          return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          );
        }
        paragraph(e) {
          return `<p>${e}</p>\n`;
        }
        table(e, t) {
          if (t) t = `<tbody>${t}</tbody>`;
          return '<table>\n' + '<thead>\n' + e + '</thead>\n' + t + '</table>\n';
        }
        tablerow(e) {
          return `<tr>\n${e}</tr>\n`;
        }
        tablecell(e, t) {
          const n = t.header ? 'th' : 'td';
          const s = t.align ? `<${n} align="${t.align}">` : `<${n}>`;
          return s + e + `</${n}>\n`;
        }
        strong(e) {
          return `<strong>${e}</strong>`;
        }
        em(e) {
          return `<em>${e}</em>`;
        }
        codespan(e) {
          return `<code>${e}</code>`;
        }
        br() {
          return this.options.xhtml ? '<br/>' : '<br>';
        }
        del(e) {
          return `<del>${e}</del>`;
        }
        link(e, t, n) {
          e = b(this.options.sanitize, this.options.baseUrl, e);
          if (e === null) {
            return n;
          }
          let s = '<a href="' + u(e) + '"';
          if (t) {
            s += ' title="' + t + '"';
          }
          s += '>' + n + '</a>';
          return s;
        }
        image(e, t, n) {
          e = b(this.options.sanitize, this.options.baseUrl, e);
          if (e === null) {
            return n;
          }
          let s = `<img src="${e}" alt="${n}"`;
          if (t) {
            s += ` title="${t}"`;
          }
          s += this.options.xhtml ? '/>' : '>';
          return s;
        }
        text(e) {
          return e;
        }
      }
      class j {
        strong(e) {
          return e;
        }
        em(e) {
          return e;
        }
        codespan(e) {
          return e;
        }
        del(e) {
          return e;
        }
        html(e) {
          return e;
        }
        text(e) {
          return e;
        }
        link(e, t, n) {
          return '' + n;
        }
        image(e, t, n) {
          return '' + n;
        }
        br() {
          return '';
        }
      }
      class P {
        constructor() {
          this.seen = {};
        }
        serialize(e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-');
        }
        getNextSafeSlug(e, t) {
          let n = e;
          let s = 0;
          if (this.seen.hasOwnProperty(n)) {
            s = this.seen[e];
            do {
              s++;
              n = e + '-' + s;
            } while (this.seen.hasOwnProperty(n));
          }
          if (!t) {
            this.seen[e] = s;
            this.seen[n] = 0;
          }
          return n;
        }
        slug(e, t = {}) {
          const n = this.serialize(e);
          return this.getNextSafeSlug(n, t.dryrun);
        }
      }
      class M {
        constructor(e) {
          this.options = e || i;
          this.options.renderer = this.options.renderer || new U();
          this.renderer = this.options.renderer;
          this.renderer.options = this.options;
          this.textRenderer = new j();
          this.slugger = new P();
        }
        static parse(e, t) {
          const n = new M(t);
          return n.parse(e);
        }
        static parseInline(e, t) {
          const n = new M(t);
          return n.parseInline(e);
        }
        parse(e, t = true) {
          let n = '',
            s,
            i,
            r,
            l,
            o,
            a,
            c,
            h,
            p,
            u,
            f,
            k,
            d,
            x,
            m,
            b,
            w,
            _,
            y;
          const $ = e.length;
          for (s = 0; s < $; s++) {
            u = e[s];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[u.type]
            ) {
              y = this.options.extensions.renderers[u.type].call({ parser: this }, u);
              if (
                y !== false ||
                ![
                  'space',
                  'hr',
                  'heading',
                  'code',
                  'table',
                  'blockquote',
                  'list',
                  'html',
                  'paragraph',
                  'text',
                ].includes(u.type)
              ) {
                n += y || '';
                continue;
              }
            }
            switch (u.type) {
              case 'space': {
                continue;
              }
              case 'hr': {
                n += this.renderer.hr();
                continue;
              }
              case 'heading': {
                n += this.renderer.heading(
                  this.parseInline(u.tokens),
                  u.depth,
                  g(this.parseInline(u.tokens, this.textRenderer)),
                  this.slugger
                );
                continue;
              }
              case 'code': {
                n += this.renderer.code(u.text, u.lang, u.escaped);
                continue;
              }
              case 'table': {
                h = '';
                c = '';
                l = u.header.length;
                for (i = 0; i < l; i++) {
                  c += this.renderer.tablecell(this.parseInline(u.header[i].tokens), {
                    header: true,
                    align: u.align[i],
                  });
                }
                h += this.renderer.tablerow(c);
                p = '';
                l = u.rows.length;
                for (i = 0; i < l; i++) {
                  a = u.rows[i];
                  c = '';
                  o = a.length;
                  for (r = 0; r < o; r++) {
                    c += this.renderer.tablecell(this.parseInline(a[r].tokens), {
                      header: false,
                      align: u.align[r],
                    });
                  }
                  p += this.renderer.tablerow(c);
                }
                n += this.renderer.table(h, p);
                continue;
              }
              case 'blockquote': {
                p = this.parse(u.tokens);
                n += this.renderer.blockquote(p);
                continue;
              }
              case 'list': {
                f = u.ordered;
                k = u.start;
                d = u.loose;
                l = u.items.length;
                p = '';
                for (i = 0; i < l; i++) {
                  m = u.items[i];
                  b = m.checked;
                  w = m.task;
                  x = '';
                  if (m.task) {
                    _ = this.renderer.checkbox(b);
                    if (d) {
                      if (m.tokens.length > 0 && m.tokens[0].type === 'paragraph') {
                        m.tokens[0].text = _ + ' ' + m.tokens[0].text;
                        if (
                          m.tokens[0].tokens &&
                          m.tokens[0].tokens.length > 0 &&
                          m.tokens[0].tokens[0].type === 'text'
                        ) {
                          m.tokens[0].tokens[0].text =
                            _ + ' ' + m.tokens[0].tokens[0].text;
                        }
                      } else {
                        m.tokens.unshift({ type: 'text', text: _ });
                      }
                    } else {
                      x += _;
                    }
                  }
                  x += this.parse(m.tokens, d);
                  p += this.renderer.listitem(x, w, b);
                }
                n += this.renderer.list(p, f, k);
                continue;
              }
              case 'html': {
                n += this.renderer.html(u.text);
                continue;
              }
              case 'paragraph': {
                n += this.renderer.paragraph(this.parseInline(u.tokens));
                continue;
              }
              case 'text': {
                p = u.tokens ? this.parseInline(u.tokens) : u.text;
                while (s + 1 < $ && e[s + 1].type === 'text') {
                  u = e[++s];
                  p += '\n' + (u.tokens ? this.parseInline(u.tokens) : u.text);
                }
                n += t ? this.renderer.paragraph(p) : p;
                continue;
              }
              default: {
                const e = 'Token with "' + u.type + '" type was not found.';
                if (this.options.silent) {
                  console.error(e);
                  return;
                } else {
                  throw new Error(e);
                }
              }
            }
          }
          return n;
        }
        parseInline(e, t) {
          t = t || this.renderer;
          let n = '',
            s,
            i,
            r;
          const l = e.length;
          for (s = 0; s < l; s++) {
            i = e[s];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type]
            ) {
              r = this.options.extensions.renderers[i.type].call({ parser: this }, i);
              if (
                r !== false ||
                ![
                  'escape',
                  'html',
                  'link',
                  'image',
                  'strong',
                  'em',
                  'codespan',
                  'br',
                  'del',
                  'text',
                ].includes(i.type)
              ) {
                n += r || '';
                continue;
              }
            }
            switch (i.type) {
              case 'escape': {
                n += t.text(i.text);
                break;
              }
              case 'html': {
                n += t.html(i.text);
                break;
              }
              case 'link': {
                n += t.link(i.href, i.title, this.parseInline(i.tokens, t));
                break;
              }
              case 'image': {
                n += t.image(i.href, i.title, i.text);
                break;
              }
              case 'strong': {
                n += t.strong(this.parseInline(i.tokens, t));
                break;
              }
              case 'em': {
                n += t.em(this.parseInline(i.tokens, t));
                break;
              }
              case 'codespan': {
                n += t.codespan(i.text);
                break;
              }
              case 'br': {
                n += t.br();
                break;
              }
              case 'del': {
                n += t.del(this.parseInline(i.tokens, t));
                break;
              }
              case 'text': {
                n += t.text(i.text);
                break;
              }
              default: {
                const e = 'Token with "' + i.type + '" type was not found.';
                if (this.options.silent) {
                  console.error(e);
                  return;
                } else {
                  throw new Error(e);
                }
              }
            }
          }
          return n;
        }
      }
      function N(e, t, n) {
        if (typeof e === 'undefined' || e === null) {
          throw new Error('marked(): input parameter is undefined or null');
        }
        if (typeof e !== 'string') {
          throw new Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(e) +
              ', string expected'
          );
        }
        if (typeof t === 'function') {
          n = t;
          t = null;
        }
        t = R({}, N.defaults, t || {});
        E(t);
        if (n) {
          const i = t.highlight;
          let r;
          try {
            r = Q.lex(e, t);
          } catch (s) {
            return n(s);
          }
          const l = function (e) {
            let l;
            if (!e) {
              try {
                if (t.walkTokens) {
                  N.walkTokens(r, t.walkTokens);
                }
                l = M.parse(r, t);
              } catch (s) {
                e = s;
              }
            }
            t.highlight = i;
            return e ? n(e) : n(null, l);
          };
          if (!i || i.length < 3) {
            return l();
          }
          delete t.highlight;
          if (!r.length) return l();
          let o = 0;
          N.walkTokens(r, function (e) {
            if (e.type === 'code') {
              o++;
              setTimeout(() => {
                i(e.text, e.lang, function (t, n) {
                  if (t) {
                    return l(t);
                  }
                  if (n != null && n !== e.text) {
                    e.text = n;
                    e.escaped = true;
                  }
                  o--;
                  if (o === 0) {
                    l();
                  }
                });
              }, 0);
            }
          });
          if (o === 0) {
            l();
          }
          return;
        }
        try {
          const n = Q.lex(e, t);
          if (t.walkTokens) {
            N.walkTokens(n, t.walkTokens);
          }
          return M.parse(n, t);
        } catch (s) {
          s.message += '\nPlease report this to https://github.com/markedjs/marked.';
          if (t.silent) {
            return (
              '<p>An error occurred:</p><pre>' + u(s.message + '', true) + '</pre>'
            );
          }
          throw s;
        }
      }
      N.options = N.setOptions = function (e) {
        R(N.defaults, e);
        r(N.defaults);
        return N;
      };
      N.getDefaults = s;
      N.defaults = i;
      N.use = function (...e) {
        const t = R({}, ...e);
        const n = N.defaults.extensions || { renderers: {}, childTokens: {} };
        let s;
        e.forEach((e) => {
          if (e.extensions) {
            s = true;
            e.extensions.forEach((e) => {
              if (!e.name) {
                throw new Error('extension name required');
              }
              if (e.renderer) {
                const t = n.renderers ? n.renderers[e.name] : null;
                if (t) {
                  n.renderers[e.name] = function (...n) {
                    let s = e.renderer.apply(this, n);
                    if (s === false) {
                      s = t.apply(this, n);
                    }
                    return s;
                  };
                } else {
                  n.renderers[e.name] = e.renderer;
                }
              }
              if (e.tokenizer) {
                if (!e.level || (e.level !== 'block' && e.level !== 'inline')) {
                  throw new Error("extension level must be 'block' or 'inline'");
                }
                if (n[e.level]) {
                  n[e.level].unshift(e.tokenizer);
                } else {
                  n[e.level] = [e.tokenizer];
                }
                if (e.start) {
                  if (e.level === 'block') {
                    if (n.startBlock) {
                      n.startBlock.push(e.start);
                    } else {
                      n.startBlock = [e.start];
                    }
                  } else if (e.level === 'inline') {
                    if (n.startInline) {
                      n.startInline.push(e.start);
                    } else {
                      n.startInline = [e.start];
                    }
                  }
                }
              }
              if (e.childTokens) {
                n.childTokens[e.name] = e.childTokens;
              }
            });
          }
          if (e.renderer) {
            const n = N.defaults.renderer || new U();
            for (const t in e.renderer) {
              const s = n[t];
              n[t] = (...i) => {
                let r = e.renderer[t].apply(n, i);
                if (r === false) {
                  r = s.apply(n, i);
                }
                return r;
              };
            }
            t.renderer = n;
          }
          if (e.tokenizer) {
            const n = N.defaults.tokenizer || new C();
            for (const t in e.tokenizer) {
              const s = n[t];
              n[t] = (...i) => {
                let r = e.tokenizer[t].apply(n, i);
                if (r === false) {
                  r = s.apply(n, i);
                }
                return r;
              };
            }
            t.tokenizer = n;
          }
          if (e.walkTokens) {
            const n = N.defaults.walkTokens;
            t.walkTokens = function (t) {
              e.walkTokens.call(this, t);
              if (n) {
                n.call(this, t);
              }
            };
          }
          if (s) {
            t.extensions = n;
          }
          N.setOptions(t);
        });
      };
      N.walkTokens = function (e, t) {
        for (const n of e) {
          t.call(N, n);
          switch (n.type) {
            case 'table': {
              for (const e of n.header) {
                N.walkTokens(e.tokens, t);
              }
              for (const e of n.rows) {
                for (const n of e) {
                  N.walkTokens(n.tokens, t);
                }
              }
              break;
            }
            case 'list': {
              N.walkTokens(n.items, t);
              break;
            }
            default: {
              if (
                N.defaults.extensions &&
                N.defaults.extensions.childTokens &&
                N.defaults.extensions.childTokens[n.type]
              ) {
                N.defaults.extensions.childTokens[n.type].forEach(function (e) {
                  N.walkTokens(n[e], t);
                });
              } else if (n.tokens) {
                N.walkTokens(n.tokens, t);
              }
            }
          }
        }
      };
      N.parseInline = function (e, t) {
        if (typeof e === 'undefined' || e === null) {
          throw new Error('marked.parseInline(): input parameter is undefined or null');
        }
        if (typeof e !== 'string') {
          throw new Error(
            'marked.parseInline(): input parameter is of type ' +
              Object.prototype.toString.call(e) +
              ', string expected'
          );
        }
        t = R({}, N.defaults, t || {});
        E(t);
        try {
          const n = Q.lexInline(e, t);
          if (t.walkTokens) {
            N.walkTokens(n, t.walkTokens);
          }
          return M.parseInline(n, t);
        } catch (n) {
          n.message += '\nPlease report this to https://github.com/markedjs/marked.';
          if (t.silent) {
            return (
              '<p>An error occurred:</p><pre>' + u(n.message + '', true) + '</pre>'
            );
          }
          throw n;
        }
      };
      N.Parser = M;
      N.parser = M.parse;
      N.Renderer = U;
      N.TextRenderer = j;
      N.Lexer = Q;
      N.lexer = Q.lex;
      N.Tokenizer = C;
      N.Slugger = P;
      N.parse = N;
      const F = N.options;
      const X = N.setOptions;
      const G = N.use;
      const V = N.walkTokens;
      const H = N.parseInline;
      const J = null && N;
      const K = M.parse;
      const W = Q.lex;
    },
  },
]);
//# sourceMappingURL=3308.3a94151c0d57440646ab.js.map?v=3a94151c0d57440646ab
