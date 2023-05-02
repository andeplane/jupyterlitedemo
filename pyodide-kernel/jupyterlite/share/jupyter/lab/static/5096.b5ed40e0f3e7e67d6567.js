/*! For license information please see 5096.b5ed40e0f3e7e67d6567.js.LICENSE.txt */
(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [5096],
  {
    65096: (e, r, a) => {
      'use strict';
      var t = a(47153),
        s = a(83610),
        i = a(47531),
        o = a(74022),
        n = a(35035),
        l = a(1516),
        f = a(47753),
        u = a(3978),
        c = a(42889);
      e.exports = y;
      y.prototype.validate = g;
      y.prototype.compile = P;
      y.prototype.addSchema = E;
      y.prototype.addMetaSchema = w;
      y.prototype.validateSchema = b;
      y.prototype.getSchema = _;
      y.prototype.removeSchema = x;
      y.prototype.addFormat = L;
      y.prototype.errorsText = C;
      y.prototype._addSchema = D;
      y.prototype._compile = j;
      y.prototype.compileAsync = a(42931);
      var h = a(14895);
      y.prototype.addKeyword = h.add;
      y.prototype.getKeyword = h.get;
      y.prototype.removeKeyword = h.remove;
      y.prototype.validateKeyword = h.validate;
      var d = a(87802);
      y.ValidationError = d.Validation;
      y.MissingRefError = d.MissingRef;
      y.$dataMetaSchema = u;
      var v = 'http://json-schema.org/draft-07/schema';
      var p = ['removeAdditional', 'useDefaults', 'coerceTypes', 'strictDefaults'];
      var m = ['/properties'];
      function y(e) {
        if (!(this instanceof y)) return new y(e);
        e = this._opts = c.copy(e) || {};
        U(this);
        this._schemas = {};
        this._refs = {};
        this._fragments = {};
        this._formats = l(e.format);
        this._cache = e.cache || new i();
        this._loadingSchemas = {};
        this._compilations = [];
        this.RULES = f();
        this._getId = O(e);
        e.loopRequired = e.loopRequired || Infinity;
        if (e.errorDataPath == 'property') e._errorDataPathProperty = true;
        if (e.serialize === undefined) e.serialize = n;
        this._metaOpts = V(this);
        if (e.formats) T(this);
        if (e.keywords) q(this);
        N(this);
        if (typeof e.meta == 'object') this.addMetaSchema(e.meta);
        if (e.nullable)
          this.addKeyword('nullable', { metaSchema: { type: 'boolean' } });
        z(this);
      }
      function g(e, r) {
        var a;
        if (typeof e == 'string') {
          a = this.getSchema(e);
          if (!a) throw new Error('no schema with key or ref "' + e + '"');
        } else {
          var t = this._addSchema(e);
          a = t.validate || this._compile(t);
        }
        var s = a(r);
        if (a.$async !== true) this.errors = a.errors;
        return s;
      }
      function P(e, r) {
        var a = this._addSchema(e, undefined, r);
        return a.validate || this._compile(a);
      }
      function E(e, r, a, t) {
        if (Array.isArray(e)) {
          for (var i = 0; i < e.length; i++) this.addSchema(e[i], undefined, a, t);
          return this;
        }
        var o = this._getId(e);
        if (o !== undefined && typeof o != 'string')
          throw new Error('schema id must be string');
        r = s.normalizeId(r || o);
        Q(this, r);
        this._schemas[r] = this._addSchema(e, a, t, true);
        return this;
      }
      function w(e, r, a) {
        this.addSchema(e, r, a, true);
        return this;
      }
      function b(e, r) {
        var a = e.$schema;
        if (a !== undefined && typeof a != 'string')
          throw new Error('$schema must be a string');
        a = a || this._opts.defaultMeta || S(this);
        if (!a) {
          this.logger.warn('meta-schema not available');
          this.errors = null;
          return true;
        }
        var t = this.validate(a, e);
        if (!t && r) {
          var s = 'schema is invalid: ' + this.errorsText();
          if (this._opts.validateSchema == 'log') this.logger.error(s);
          else throw new Error(s);
        }
        return t;
      }
      function S(e) {
        var r = e._opts.meta;
        e._opts.defaultMeta =
          typeof r == 'object' ? e._getId(r) || r : e.getSchema(v) ? v : undefined;
        return e._opts.defaultMeta;
      }
      function _(e) {
        var r = $(this, e);
        switch (typeof r) {
          case 'object':
            return r.validate || this._compile(r);
          case 'string':
            return this.getSchema(r);
          case 'undefined':
            return F(this, e);
        }
      }
      function F(e, r) {
        var a = s.schema.call(e, { schema: {} }, r);
        if (a) {
          var i = a.schema,
            n = a.root,
            l = a.baseId;
          var f = t.call(e, i, n, undefined, l);
          e._fragments[r] = new o({
            ref: r,
            fragment: true,
            schema: i,
            root: n,
            baseId: l,
            validate: f,
          });
          return f;
        }
      }
      function $(e, r) {
        r = s.normalizeId(r);
        return e._schemas[r] || e._refs[r] || e._fragments[r];
      }
      function x(e) {
        if (e instanceof RegExp) {
          R(this, this._schemas, e);
          R(this, this._refs, e);
          return this;
        }
        switch (typeof e) {
          case 'undefined':
            R(this, this._schemas);
            R(this, this._refs);
            this._cache.clear();
            return this;
          case 'string':
            var r = $(this, e);
            if (r) this._cache.del(r.cacheKey);
            delete this._schemas[e];
            delete this._refs[e];
            return this;
          case 'object':
            var a = this._opts.serialize;
            var t = a ? a(e) : e;
            this._cache.del(t);
            var i = this._getId(e);
            if (i) {
              i = s.normalizeId(i);
              delete this._schemas[i];
              delete this._refs[i];
            }
        }
        return this;
      }
      function R(e, r, a) {
        for (var t in r) {
          var s = r[t];
          if (!s.meta && (!a || a.test(t))) {
            e._cache.del(s.cacheKey);
            delete r[t];
          }
        }
      }
      function D(e, r, a, t) {
        if (typeof e != 'object' && typeof e != 'boolean')
          throw new Error('schema should be object or boolean');
        var i = this._opts.serialize;
        var n = i ? i(e) : e;
        var l = this._cache.get(n);
        if (l) return l;
        t = t || this._opts.addUsedSchema !== false;
        var f = s.normalizeId(this._getId(e));
        if (f && t) Q(this, f);
        var u = this._opts.validateSchema !== false && !r;
        var c;
        if (u && !(c = f && f == s.normalizeId(e.$schema)))
          this.validateSchema(e, true);
        var h = s.ids.call(this, e);
        var d = new o({ id: f, schema: e, localRefs: h, cacheKey: n, meta: a });
        if (f[0] != '#' && t) this._refs[f] = d;
        this._cache.put(n, d);
        if (u && c) this.validateSchema(e, true);
        return d;
      }
      function j(e, r) {
        if (e.compiling) {
          e.validate = i;
          i.schema = e.schema;
          i.errors = null;
          i.root = r ? r : i;
          if (e.schema.$async === true) i.$async = true;
          return i;
        }
        e.compiling = true;
        var a;
        if (e.meta) {
          a = this._opts;
          this._opts = this._metaOpts;
        }
        var s;
        try {
          s = t.call(this, e.schema, r, e.localRefs);
        } catch (o) {
          delete e.validate;
          throw o;
        } finally {
          e.compiling = false;
          if (e.meta) this._opts = a;
        }
        e.validate = s;
        e.refs = s.refs;
        e.refVal = s.refVal;
        e.root = s.root;
        return s;
        function i() {
          var r = e.validate;
          var a = r.apply(this, arguments);
          i.errors = r.errors;
          return a;
        }
      }
      function O(e) {
        switch (e.schemaId) {
          case 'auto':
            return k;
          case 'id':
            return I;
          default:
            return A;
        }
      }
      function I(e) {
        if (e.$id) this.logger.warn('schema $id ignored', e.$id);
        return e.id;
      }
      function A(e) {
        if (e.id) this.logger.warn('schema id ignored', e.id);
        return e.$id;
      }
      function k(e) {
        if (e.$id && e.id && e.$id != e.id)
          throw new Error('schema $id is different from id');
        return e.$id || e.id;
      }
      function C(e, r) {
        e = e || this.errors;
        if (!e) return 'No errors';
        r = r || {};
        var a = r.separator === undefined ? ', ' : r.separator;
        var t = r.dataVar === undefined ? 'data' : r.dataVar;
        var s = '';
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          if (o) s += t + o.dataPath + ' ' + o.message + a;
        }
        return s.slice(0, -a.length);
      }
      function L(e, r) {
        if (typeof r == 'string') r = new RegExp(r);
        this._formats[e] = r;
        return this;
      }
      function N(e) {
        var r;
        if (e._opts.$data) {
          r = a(66835);
          e.addMetaSchema(r, r.$id, true);
        }
        if (e._opts.meta === false) return;
        var t = a(40038);
        if (e._opts.$data) t = u(t, m);
        e.addMetaSchema(t, v, true);
        e._refs['http://json-schema.org/schema'] = v;
      }
      function z(e) {
        var r = e._opts.schemas;
        if (!r) return;
        if (Array.isArray(r)) e.addSchema(r);
        else for (var a in r) e.addSchema(r[a], a);
      }
      function T(e) {
        for (var r in e._opts.formats) {
          var a = e._opts.formats[r];
          e.addFormat(r, a);
        }
      }
      function q(e) {
        for (var r in e._opts.keywords) {
          var a = e._opts.keywords[r];
          e.addKeyword(r, a);
        }
      }
      function Q(e, r) {
        if (e._schemas[r] || e._refs[r])
          throw new Error('schema with key or id "' + r + '" already exists');
      }
      function V(e) {
        var r = c.copy(e._opts);
        for (var a = 0; a < p.length; a++) delete r[p[a]];
        return r;
      }
      function U(e) {
        var r = e._opts.logger;
        if (r === false) {
          e.logger = { log: H, warn: H, error: H };
        } else {
          if (r === undefined) r = console;
          if (!(typeof r == 'object' && r.log && r.warn && r.error))
            throw new Error('logger must implement log, warn and error methods');
          e.logger = r;
        }
      }
      function H() {}
    },
    47531: (e) => {
      'use strict';
      var r = (e.exports = function e() {
        this._cache = {};
      });
      r.prototype.put = function e(r, a) {
        this._cache[r] = a;
      };
      r.prototype.get = function e(r) {
        return this._cache[r];
      };
      r.prototype.del = function e(r) {
        delete this._cache[r];
      };
      r.prototype.clear = function e() {
        this._cache = {};
      };
    },
    42931: (e, r, a) => {
      'use strict';
      var t = a(87802).MissingRef;
      e.exports = s;
      function s(e, r, a) {
        var i = this;
        if (typeof this._opts.loadSchema != 'function')
          throw new Error('options.loadSchema should be a function');
        if (typeof r == 'function') {
          a = r;
          r = undefined;
        }
        var o = n(e).then(function () {
          var a = i._addSchema(e, undefined, r);
          return a.validate || l(a);
        });
        if (a) {
          o.then(function (e) {
            a(null, e);
          }, a);
        }
        return o;
        function n(e) {
          var r = e.$schema;
          return r && !i.getSchema(r)
            ? s.call(i, { $ref: r }, true)
            : Promise.resolve();
        }
        function l(e) {
          try {
            return i._compile(e);
          } catch (s) {
            if (s instanceof t) return a(s);
            throw s;
          }
          function a(a) {
            var t = a.missingSchema;
            if (f(t))
              throw new Error(
                'Schema ' + t + ' is loaded but ' + a.missingRef + ' cannot be resolved'
              );
            var s = i._loadingSchemas[t];
            if (!s) {
              s = i._loadingSchemas[t] = i._opts.loadSchema(t);
              s.then(o, o);
            }
            return s
              .then(function (e) {
                if (!f(t)) {
                  return n(e).then(function () {
                    if (!f(t)) i.addSchema(e, t, undefined, r);
                  });
                }
              })
              .then(function () {
                return l(e);
              });
            function o() {
              delete i._loadingSchemas[t];
            }
            function f(e) {
              return i._refs[e] || i._schemas[e];
            }
          }
        }
      }
    },
    87802: (e, r, a) => {
      'use strict';
      var t = a(83610);
      e.exports = { Validation: o(s), MissingRef: o(i) };
      function s(e) {
        this.message = 'validation failed';
        this.errors = e;
        this.ajv = this.validation = true;
      }
      i.message = function (e, r) {
        return "can't resolve reference " + r + ' from id ' + e;
      };
      function i(e, r, a) {
        this.message = a || i.message(e, r);
        this.missingRef = t.url(e, r);
        this.missingSchema = t.normalizeId(t.fullPath(this.missingRef));
      }
      function o(e) {
        e.prototype = Object.create(Error.prototype);
        e.prototype.constructor = e;
        return e;
      }
    },
    1516: (e, r, a) => {
      'use strict';
      var t = a(42889);
      var s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
      var i = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var o = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
      var n =
        /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
      var l =
        /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
      var f =
        /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
      var u =
        /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
      var c =
        /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
      var h = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
      var d = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
      var v = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
      var p = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
      e.exports = m;
      function m(e) {
        e = e == 'full' ? 'full' : 'fast';
        return t.copy(m[e]);
      }
      m.fast = {
        date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
        time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
        'date-time':
          /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
        uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
        'uri-reference':
          /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        'uri-template': u,
        url: c,
        email:
          /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        hostname: n,
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
        ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
        regex: F,
        uuid: h,
        'json-pointer': d,
        'json-pointer-uri-fragment': v,
        'relative-json-pointer': p,
      };
      m.full = {
        date: g,
        time: P,
        'date-time': w,
        uri: S,
        'uri-reference': f,
        'uri-template': u,
        url: c,
        email:
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        hostname: n,
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
        ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
        regex: F,
        uuid: h,
        'json-pointer': d,
        'json-pointer-uri-fragment': v,
        'relative-json-pointer': p,
      };
      function y(e) {
        return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
      }
      function g(e) {
        var r = e.match(s);
        if (!r) return false;
        var a = +r[1];
        var t = +r[2];
        var o = +r[3];
        return t >= 1 && t <= 12 && o >= 1 && o <= (t == 2 && y(a) ? 29 : i[t]);
      }
      function P(e, r) {
        var a = e.match(o);
        if (!a) return false;
        var t = a[1];
        var s = a[2];
        var i = a[3];
        var n = a[5];
        return (
          ((t <= 23 && s <= 59 && i <= 59) || (t == 23 && s == 59 && i == 60)) &&
          (!r || n)
        );
      }
      var E = /t|\s/i;
      function w(e) {
        var r = e.split(E);
        return r.length == 2 && g(r[0]) && P(r[1], true);
      }
      var b = /\/|:/;
      function S(e) {
        return b.test(e) && l.test(e);
      }
      var _ = /[^\\]\\Z/;
      function F(e) {
        if (_.test(e)) return false;
        try {
          new RegExp(e);
          return true;
        } catch (r) {
          return false;
        }
      }
    },
    47153: (e, r, a) => {
      'use strict';
      var t = a(83610),
        s = a(42889),
        i = a(87802),
        o = a(35035);
      var n = a(19508);
      var l = s.ucs2length;
      var f = a(64063);
      var u = i.Validation;
      e.exports = c;
      function c(e, r, a, v) {
        var E = this,
          w = this._opts,
          b = [undefined],
          S = {},
          _ = [],
          F = {},
          $ = [],
          x = {},
          R = [];
        r = r || { schema: e, refVal: b, refs: S };
        var D = h.call(this, e, r, v);
        var j = this._compilations[D.index];
        if (D.compiling) return (j.callValidate = C);
        var O = this._formats;
        var I = this.RULES;
        try {
          var A = L(e, r, a, v);
          j.validate = A;
          var k = j.callValidate;
          if (k) {
            k.schema = A.schema;
            k.errors = null;
            k.refs = A.refs;
            k.refVal = A.refVal;
            k.root = A.root;
            k.$async = A.$async;
            if (w.sourceCode) k.source = A.source;
          }
          return A;
        } finally {
          d.call(this, e, r, v);
        }
        function C() {
          var e = j.validate;
          var r = e.apply(this, arguments);
          C.errors = e.errors;
          return r;
        }
        function L(e, a, o, h) {
          var d = !a || (a && a.schema == e);
          if (a.schema != r.schema) return c.call(E, e, a, o, h);
          var v = e.$async === true;
          var F = n({
            isTop: true,
            schema: e,
            isRoot: d,
            baseId: h,
            root: a,
            schemaPath: '',
            errSchemaPath: '#',
            errorPath: '""',
            MissingRefError: i.MissingRef,
            RULES: I,
            validate: n,
            util: s,
            resolve: t,
            resolveRef: N,
            usePattern: V,
            useDefault: U,
            useCustomRule: H,
            opts: w,
            formats: O,
            logger: E.logger,
            self: E,
          });
          F = P(b, y) + P(_, p) + P($, m) + P(R, g) + F;
          if (w.processCode) F = w.processCode(F, e);
          var x;
          try {
            var D = new Function(
              'self',
              'RULES',
              'formats',
              'root',
              'refVal',
              'defaults',
              'customRules',
              'equal',
              'ucs2length',
              'ValidationError',
              F
            );
            x = D(E, I, O, r, b, $, R, f, l, u);
            b[0] = x;
          } catch (j) {
            E.logger.error('Error compiling schema, function code:', F);
            throw j;
          }
          x.schema = e;
          x.errors = null;
          x.refs = S;
          x.refVal = b;
          x.root = d ? x : a;
          if (v) x.$async = true;
          if (w.sourceCode === true) {
            x.source = { code: F, patterns: _, defaults: $ };
          }
          return x;
        }
        function N(e, s, i) {
          s = t.url(e, s);
          var o = S[s];
          var n, l;
          if (o !== undefined) {
            n = b[o];
            l = 'refVal[' + o + ']';
            return Q(n, l);
          }
          if (!i && r.refs) {
            var f = r.refs[s];
            if (f !== undefined) {
              n = r.refVal[f];
              l = z(s, n);
              return Q(n, l);
            }
          }
          l = z(s);
          var u = t.call(E, L, r, s);
          if (u === undefined) {
            var h = a && a[s];
            if (h) {
              u = t.inlineRef(h, w.inlineRefs) ? h : c.call(E, h, r, a, e);
            }
          }
          if (u === undefined) {
            T(s);
          } else {
            q(s, u);
            return Q(u, l);
          }
        }
        function z(e, r) {
          var a = b.length;
          b[a] = r;
          S[e] = a;
          return 'refVal' + a;
        }
        function T(e) {
          delete S[e];
        }
        function q(e, r) {
          var a = S[e];
          b[a] = r;
        }
        function Q(e, r) {
          return typeof e == 'object' || typeof e == 'boolean'
            ? { code: r, schema: e, inline: true }
            : { code: r, $async: e && !!e.$async };
        }
        function V(e) {
          var r = F[e];
          if (r === undefined) {
            r = F[e] = _.length;
            _[r] = e;
          }
          return 'pattern' + r;
        }
        function U(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
              return '' + e;
            case 'string':
              return s.toQuotedString(e);
            case 'object':
              if (e === null) return 'null';
              var r = o(e);
              var a = x[r];
              if (a === undefined) {
                a = x[r] = $.length;
                $[a] = e;
              }
              return 'default' + a;
          }
        }
        function H(e, r, a, t) {
          if (E._opts.validateSchema !== false) {
            var s = e.definition.dependencies;
            if (
              s &&
              !s.every(function (e) {
                return Object.prototype.hasOwnProperty.call(a, e);
              })
            )
              throw new Error(
                'parent schema must have all required keywords: ' + s.join(',')
              );
            var i = e.definition.validateSchema;
            if (i) {
              var o = i(r);
              if (!o) {
                var n = 'keyword schema is invalid: ' + E.errorsText(i.errors);
                if (E._opts.validateSchema == 'log') E.logger.error(n);
                else throw new Error(n);
              }
            }
          }
          var l = e.definition.compile,
            f = e.definition.inline,
            u = e.definition.macro;
          var c;
          if (l) {
            c = l.call(E, r, a, t);
          } else if (u) {
            c = u.call(E, r, a, t);
            if (w.validateSchema !== false) E.validateSchema(c, true);
          } else if (f) {
            c = f.call(E, t, e.keyword, r, a);
          } else {
            c = e.definition.validate;
            if (!c) return;
          }
          if (c === undefined)
            throw new Error('custom keyword "' + e.keyword + '"failed to compile');
          var h = R.length;
          R[h] = c;
          return { code: 'customRule' + h, validate: c };
        }
      }
      function h(e, r, a) {
        var t = v.call(this, e, r, a);
        if (t >= 0) return { index: t, compiling: true };
        t = this._compilations.length;
        this._compilations[t] = { schema: e, root: r, baseId: a };
        return { index: t, compiling: false };
      }
      function d(e, r, a) {
        var t = v.call(this, e, r, a);
        if (t >= 0) this._compilations.splice(t, 1);
      }
      function v(e, r, a) {
        for (var t = 0; t < this._compilations.length; t++) {
          var s = this._compilations[t];
          if (s.schema == e && s.root == r && s.baseId == a) return t;
        }
        return -1;
      }
      function p(e, r) {
        return 'var pattern' + e + ' = new RegExp(' + s.toQuotedString(r[e]) + ');';
      }
      function m(e) {
        return 'var default' + e + ' = defaults[' + e + '];';
      }
      function y(e, r) {
        return r[e] === undefined ? '' : 'var refVal' + e + ' = refVal[' + e + '];';
      }
      function g(e) {
        return 'var customRule' + e + ' = customRules[' + e + '];';
      }
      function P(e, r) {
        if (!e.length) return '';
        var a = '';
        for (var t = 0; t < e.length; t++) a += r(t, e);
        return a;
      }
    },
    83610: (e, r, a) => {
      'use strict';
      var t = a(60540),
        s = a(64063),
        i = a(42889),
        o = a(74022),
        n = a(49461);
      e.exports = l;
      l.normalizeId = E;
      l.fullPath = y;
      l.url = w;
      l.ids = b;
      l.inlineRef = v;
      l.schema = f;
      function l(e, r, a) {
        var t = this._refs[a];
        if (typeof t == 'string') {
          if (this._refs[t]) t = this._refs[t];
          else return l.call(this, e, r, t);
        }
        t = t || this._schemas[a];
        if (t instanceof o) {
          return v(t.schema, this._opts.inlineRefs)
            ? t.schema
            : t.validate || this._compile(t);
        }
        var s = f.call(this, r, a);
        var i, n, u;
        if (s) {
          i = s.schema;
          r = s.root;
          u = s.baseId;
        }
        if (i instanceof o) {
          n = i.validate || e.call(this, i.schema, r, undefined, u);
        } else if (i !== undefined) {
          n = v(i, this._opts.inlineRefs) ? i : e.call(this, i, r, undefined, u);
        }
        return n;
      }
      function f(e, r) {
        var a = t.parse(r),
          s = g(a),
          i = y(this._getId(e.schema));
        if (Object.keys(e.schema).length === 0 || s !== i) {
          var n = E(s);
          var l = this._refs[n];
          if (typeof l == 'string') {
            return u.call(this, e, l, a);
          } else if (l instanceof o) {
            if (!l.validate) this._compile(l);
            e = l;
          } else {
            l = this._schemas[n];
            if (l instanceof o) {
              if (!l.validate) this._compile(l);
              if (n == E(r)) return { schema: l, root: e, baseId: i };
              e = l;
            } else {
              return;
            }
          }
          if (!e.schema) return;
          i = y(this._getId(e.schema));
        }
        return h.call(this, a, i, e.schema, e);
      }
      function u(e, r, a) {
        var t = f.call(this, e, r);
        if (t) {
          var s = t.schema;
          var i = t.baseId;
          e = t.root;
          var o = this._getId(s);
          if (o) i = w(i, o);
          return h.call(this, a, i, s, e);
        }
      }
      var c = i.toHash([
        'properties',
        'patternProperties',
        'enum',
        'dependencies',
        'definitions',
      ]);
      function h(e, r, a, t) {
        e.fragment = e.fragment || '';
        if (e.fragment.slice(0, 1) != '/') return;
        var s = e.fragment.split('/');
        for (var o = 1; o < s.length; o++) {
          var n = s[o];
          if (n) {
            n = i.unescapeFragment(n);
            a = a[n];
            if (a === undefined) break;
            var l;
            if (!c[n]) {
              l = this._getId(a);
              if (l) r = w(r, l);
              if (a.$ref) {
                var u = w(r, a.$ref);
                var h = f.call(this, t, u);
                if (h) {
                  a = h.schema;
                  t = h.root;
                  r = h.baseId;
                }
              }
            }
          }
        }
        if (a !== undefined && a !== t.schema) return { schema: a, root: t, baseId: r };
      }
      var d = i.toHash([
        'type',
        'format',
        'pattern',
        'maxLength',
        'minLength',
        'maxProperties',
        'minProperties',
        'maxItems',
        'minItems',
        'maximum',
        'minimum',
        'uniqueItems',
        'multipleOf',
        'required',
        'enum',
      ]);
      function v(e, r) {
        if (r === false) return false;
        if (r === undefined || r === true) return p(e);
        else if (r) return m(e) <= r;
      }
      function p(e) {
        var r;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a++) {
            r = e[a];
            if (typeof r == 'object' && !p(r)) return false;
          }
        } else {
          for (var t in e) {
            if (t == '$ref') return false;
            r = e[t];
            if (typeof r == 'object' && !p(r)) return false;
          }
        }
        return true;
      }
      function m(e) {
        var r = 0,
          a;
        if (Array.isArray(e)) {
          for (var t = 0; t < e.length; t++) {
            a = e[t];
            if (typeof a == 'object') r += m(a);
            if (r == Infinity) return Infinity;
          }
        } else {
          for (var s in e) {
            if (s == '$ref') return Infinity;
            if (d[s]) {
              r++;
            } else {
              a = e[s];
              if (typeof a == 'object') r += m(a) + 1;
              if (r == Infinity) return Infinity;
            }
          }
        }
        return r;
      }
      function y(e, r) {
        if (r !== false) e = E(e);
        var a = t.parse(e);
        return g(a);
      }
      function g(e) {
        return t.serialize(e).split('#')[0] + '#';
      }
      var P = /#\/?$/;
      function E(e) {
        return e ? e.replace(P, '') : '';
      }
      function w(e, r) {
        r = E(r);
        return t.resolve(e, r);
      }
      function b(e) {
        var r = E(this._getId(e));
        var a = { '': r };
        var o = { '': y(r, false) };
        var l = {};
        var f = this;
        n(e, { allKeys: true }, function (e, r, n, u, c, h, d) {
          if (r === '') return;
          var v = f._getId(e);
          var p = a[u];
          var m = o[u] + '/' + c;
          if (d !== undefined)
            m += '/' + (typeof d == 'number' ? d : i.escapeFragment(d));
          if (typeof v == 'string') {
            v = p = E(p ? t.resolve(p, v) : v);
            var y = f._refs[v];
            if (typeof y == 'string') y = f._refs[y];
            if (y && y.schema) {
              if (!s(e, y.schema))
                throw new Error('id "' + v + '" resolves to more than one schema');
            } else if (v != E(m)) {
              if (v[0] == '#') {
                if (l[v] && !s(e, l[v]))
                  throw new Error('id "' + v + '" resolves to more than one schema');
                l[v] = e;
              } else {
                f._refs[v] = m;
              }
            }
          }
          a[r] = p;
          o[r] = m;
        });
        return l;
      }
    },
    47753: (e, r, a) => {
      'use strict';
      var t = a(66674),
        s = a(42889).toHash;
      e.exports = function e() {
        var r = [
          {
            type: 'number',
            rules: [
              { maximum: ['exclusiveMaximum'] },
              { minimum: ['exclusiveMinimum'] },
              'multipleOf',
              'format',
            ],
          },
          { type: 'string', rules: ['maxLength', 'minLength', 'pattern', 'format'] },
          {
            type: 'array',
            rules: ['maxItems', 'minItems', 'items', 'contains', 'uniqueItems'],
          },
          {
            type: 'object',
            rules: [
              'maxProperties',
              'minProperties',
              'required',
              'dependencies',
              'propertyNames',
              { properties: ['additionalProperties', 'patternProperties'] },
            ],
          },
          { rules: ['$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if'] },
        ];
        var a = ['type', '$comment'];
        var i = [
          '$schema',
          '$id',
          'id',
          '$data',
          '$async',
          'title',
          'description',
          'default',
          'definitions',
          'examples',
          'readOnly',
          'writeOnly',
          'contentMediaType',
          'contentEncoding',
          'additionalItems',
          'then',
          'else',
        ];
        var o = ['number', 'integer', 'string', 'array', 'object', 'boolean', 'null'];
        r.all = s(a);
        r.types = s(o);
        r.forEach(function (e) {
          e.rules = e.rules.map(function (e) {
            var s;
            if (typeof e == 'object') {
              var i = Object.keys(e)[0];
              s = e[i];
              e = i;
              s.forEach(function (e) {
                a.push(e);
                r.all[e] = true;
              });
            }
            a.push(e);
            var o = (r.all[e] = { keyword: e, code: t[e], implements: s });
            return o;
          });
          r.all.$comment = { keyword: '$comment', code: t.$comment };
          if (e.type) r.types[e.type] = e;
        });
        r.keywords = s(a.concat(i));
        r.custom = {};
        return r;
      };
    },
    74022: (e, r, a) => {
      'use strict';
      var t = a(42889);
      e.exports = s;
      function s(e) {
        t.copy(e, this);
      }
    },
    4442: (e) => {
      'use strict';
      e.exports = function e(r) {
        var a = 0,
          t = r.length,
          s = 0,
          i;
        while (s < t) {
          a++;
          i = r.charCodeAt(s++);
          if (i >= 55296 && i <= 56319 && s < t) {
            i = r.charCodeAt(s);
            if ((i & 64512) == 56320) s++;
          }
        }
        return a;
      };
    },
    42889: (e, r, a) => {
      'use strict';
      e.exports = {
        copy: t,
        checkDataType: s,
        checkDataTypes: i,
        coerceToTypes: n,
        toHash: l,
        getProperty: c,
        escapeQuotes: h,
        equal: a(64063),
        ucs2length: a(4442),
        varOccurences: d,
        varReplace: v,
        schemaHasRules: p,
        schemaHasRulesExcept: m,
        schemaUnknownRules: y,
        toQuotedString: g,
        getPathExpr: P,
        getPath: E,
        getData: S,
        unescapeFragment: F,
        unescapeJsonPointer: R,
        escapeFragment: $,
        escapeJsonPointer: x,
      };
      function t(e, r) {
        r = r || {};
        for (var a in e) r[a] = e[a];
        return r;
      }
      function s(e, r, a, t) {
        var s = t ? ' !== ' : ' === ',
          i = t ? ' || ' : ' && ',
          o = t ? '!' : '',
          n = t ? '' : '!';
        switch (e) {
          case 'null':
            return r + s + 'null';
          case 'array':
            return o + 'Array.isArray(' + r + ')';
          case 'object':
            return (
              '(' +
              o +
              r +
              i +
              'typeof ' +
              r +
              s +
              '"object"' +
              i +
              n +
              'Array.isArray(' +
              r +
              '))'
            );
          case 'integer':
            return (
              '(typeof ' +
              r +
              s +
              '"number"' +
              i +
              n +
              '(' +
              r +
              ' % 1)' +
              i +
              r +
              s +
              r +
              (a ? i + o + 'isFinite(' + r + ')' : '') +
              ')'
            );
          case 'number':
            return (
              '(typeof ' +
              r +
              s +
              '"' +
              e +
              '"' +
              (a ? i + o + 'isFinite(' + r + ')' : '') +
              ')'
            );
          default:
            return 'typeof ' + r + s + '"' + e + '"';
        }
      }
      function i(e, r, a) {
        switch (e.length) {
          case 1:
            return s(e[0], r, a, true);
          default:
            var t = '';
            var i = l(e);
            if (i.array && i.object) {
              t = i.null ? '(' : '(!' + r + ' || ';
              t += 'typeof ' + r + ' !== "object")';
              delete i.null;
              delete i.array;
              delete i.object;
            }
            if (i.number) delete i.integer;
            for (var o in i) t += (t ? ' && ' : '') + s(o, r, a, true);
            return t;
        }
      }
      var o = l(['string', 'number', 'integer', 'boolean', 'null']);
      function n(e, r) {
        if (Array.isArray(r)) {
          var a = [];
          for (var t = 0; t < r.length; t++) {
            var s = r[t];
            if (o[s]) a[a.length] = s;
            else if (e === 'array' && s === 'array') a[a.length] = s;
          }
          if (a.length) return a;
        } else if (o[r]) {
          return [r];
        } else if (e === 'array' && r === 'array') {
          return ['array'];
        }
      }
      function l(e) {
        var r = {};
        for (var a = 0; a < e.length; a++) r[e[a]] = true;
        return r;
      }
      var f = /^[a-z$_][a-z$_0-9]*$/i;
      var u = /'|\\/g;
      function c(e) {
        return typeof e == 'number'
          ? '[' + e + ']'
          : f.test(e)
          ? '.' + e
          : "['" + h(e) + "']";
      }
      function h(e) {
        return e
          .replace(u, '\\$&')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/\f/g, '\\f')
          .replace(/\t/g, '\\t');
      }
      function d(e, r) {
        r += '[^0-9]';
        var a = e.match(new RegExp(r, 'g'));
        return a ? a.length : 0;
      }
      function v(e, r, a) {
        r += '([^0-9])';
        a = a.replace(/\$/g, '$$$$');
        return e.replace(new RegExp(r, 'g'), a + '$1');
      }
      function p(e, r) {
        if (typeof e == 'boolean') return !e;
        for (var a in e) if (r[a]) return true;
      }
      function m(e, r, a) {
        if (typeof e == 'boolean') return !e && a != 'not';
        for (var t in e) if (t != a && r[t]) return true;
      }
      function y(e, r) {
        if (typeof e == 'boolean') return;
        for (var a in e) if (!r[a]) return a;
      }
      function g(e) {
        return "'" + h(e) + "'";
      }
      function P(e, r, a, t) {
        var s = a
          ? "'/' + " + r + (t ? '' : ".replace(/~/g, '~0').replace(/\\//g, '~1')")
          : t
          ? "'[' + " + r + " + ']'"
          : "'[\\'' + " + r + " + '\\']'";
        return _(e, s);
      }
      function E(e, r, a) {
        var t = a ? g('/' + x(r)) : g(c(r));
        return _(e, t);
      }
      var w = /^\/(?:[^~]|~0|~1)*$/;
      var b = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
      function S(e, r, a) {
        var t, s, i, o;
        if (e === '') return 'rootData';
        if (e[0] == '/') {
          if (!w.test(e)) throw new Error('Invalid JSON-pointer: ' + e);
          s = e;
          i = 'rootData';
        } else {
          o = e.match(b);
          if (!o) throw new Error('Invalid JSON-pointer: ' + e);
          t = +o[1];
          s = o[2];
          if (s == '#') {
            if (t >= r)
              throw new Error(
                'Cannot access property/index ' +
                  t +
                  ' levels up, current level is ' +
                  r
              );
            return a[r - t];
          }
          if (t > r)
            throw new Error(
              'Cannot access data ' + t + ' levels up, current level is ' + r
            );
          i = 'data' + (r - t || '');
          if (!s) return i;
        }
        var n = i;
        var l = s.split('/');
        for (var f = 0; f < l.length; f++) {
          var u = l[f];
          if (u) {
            i += c(R(u));
            n += ' && ' + i;
          }
        }
        return n;
      }
      function _(e, r) {
        if (e == '""') return r;
        return (e + ' + ' + r).replace(/([^\\])' \+ '/g, '$1');
      }
      function F(e) {
        return R(decodeURIComponent(e));
      }
      function $(e) {
        return encodeURIComponent(x(e));
      }
      function x(e) {
        return e.replace(/~/g, '~0').replace(/\//g, '~1');
      }
      function R(e) {
        return e.replace(/~1/g, '/').replace(/~0/g, '~');
      }
    },
    3978: (e) => {
      'use strict';
      var r = [
        'multipleOf',
        'maximum',
        'exclusiveMaximum',
        'minimum',
        'exclusiveMinimum',
        'maxLength',
        'minLength',
        'pattern',
        'additionalItems',
        'maxItems',
        'minItems',
        'uniqueItems',
        'maxProperties',
        'minProperties',
        'required',
        'additionalProperties',
        'enum',
        'format',
        'const',
      ];
      e.exports = function (e, a) {
        for (var t = 0; t < a.length; t++) {
          e = JSON.parse(JSON.stringify(e));
          var s = a[t].split('/');
          var i = e;
          var o;
          for (o = 1; o < s.length; o++) i = i[s[o]];
          for (o = 0; o < r.length; o++) {
            var n = r[o];
            var l = i[n];
            if (l) {
              i[n] = {
                anyOf: [
                  l,
                  {
                    $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
                  },
                ],
              };
            }
          }
        }
        return e;
      };
    },
    61128: (e, r, a) => {
      'use strict';
      var t = a(40038);
      e.exports = {
        $id: 'https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js',
        definitions: { simpleTypes: t.definitions.simpleTypes },
        type: 'object',
        dependencies: {
          schema: ['validate'],
          $data: ['validate'],
          statements: ['inline'],
          valid: { not: { required: ['macro'] } },
        },
        properties: {
          type: t.properties.type,
          schema: { type: 'boolean' },
          statements: { type: 'boolean' },
          dependencies: { type: 'array', items: { type: 'string' } },
          metaSchema: { type: 'object' },
          modifying: { type: 'boolean' },
          valid: { type: 'boolean' },
          $data: { type: 'boolean' },
          async: { type: 'boolean' },
          errors: { anyOf: [{ type: 'boolean' }, { const: 'full' }] },
        },
      };
    },
    18210: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c;
        var h = 'data' + (o || '');
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        var p = a == 'maximum',
          m = p ? 'exclusiveMaximum' : 'exclusiveMinimum',
          y = r.schema[m],
          g = r.opts.$data && y && y.$data,
          P = p ? '<' : '>',
          E = p ? '>' : '<',
          c = undefined;
        if (!(d || typeof n == 'number' || n === undefined)) {
          throw new Error(a + ' must be number');
        }
        if (!(g || y === undefined || typeof y == 'number' || typeof y == 'boolean')) {
          throw new Error(m + ' must be number or boolean');
        }
        if (g) {
          var w = r.util.getData(y.$data, o, r.dataPathArr),
            b = 'exclusive' + i,
            S = 'exclType' + i,
            _ = 'exclIsNumber' + i,
            F = 'op' + i,
            $ = "' + " + F + " + '";
          s += ' var schemaExcl' + i + ' = ' + w + '; ';
          w = 'schemaExcl' + i;
          s +=
            ' var ' +
            b +
            '; var ' +
            S +
            ' = typeof ' +
            w +
            '; if (' +
            S +
            " != 'boolean' && " +
            S +
            " != 'undefined' && " +
            S +
            " != 'number') { ";
          var c = m;
          var x = x || [];
          x.push(s);
          s = '';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              (c || '_exclusiveLimit') +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              ' , params: {} ';
            if (r.opts.messages !== false) {
              s += " , message: '" + m + " should be boolean' ";
            }
            if (r.opts.verbose) {
              s +=
                ' , schema: validate.schema' +
                l +
                ' , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                h +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          var R = s;
          s = x.pop();
          if (!r.compositeRule && u) {
            if (r.async) {
              s += ' throw new ValidationError([' + R + ']); ';
            } else {
              s += ' validate.errors = [' + R + ']; return false; ';
            }
          } else {
            s +=
              ' var err = ' +
              R +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          s += ' } else if ( ';
          if (d) {
            s += ' (' + v + ' !== undefined && typeof ' + v + " != 'number') || ";
          }
          s +=
            ' ' +
            S +
            " == 'number' ? ( (" +
            b +
            ' = ' +
            v +
            ' === undefined || ' +
            w +
            ' ' +
            P +
            '= ' +
            v +
            ') ? ' +
            h +
            ' ' +
            E +
            '= ' +
            w +
            ' : ' +
            h +
            ' ' +
            E +
            ' ' +
            v +
            ' ) : ( (' +
            b +
            ' = ' +
            w +
            ' === true) ? ' +
            h +
            ' ' +
            E +
            '= ' +
            v +
            ' : ' +
            h +
            ' ' +
            E +
            ' ' +
            v +
            ' ) || ' +
            h +
            ' !== ' +
            h +
            ') { var op' +
            i +
            ' = ' +
            b +
            " ? '" +
            P +
            "' : '" +
            P +
            "='; ";
          if (n === undefined) {
            c = m;
            f = r.errSchemaPath + '/' + m;
            v = w;
            d = g;
          }
        } else {
          var _ = typeof y == 'number',
            $ = P;
          if (_ && d) {
            var F = "'" + $ + "'";
            s += ' if ( ';
            if (d) {
              s += ' (' + v + ' !== undefined && typeof ' + v + " != 'number') || ";
            }
            s +=
              ' ( ' +
              v +
              ' === undefined || ' +
              y +
              ' ' +
              P +
              '= ' +
              v +
              ' ? ' +
              h +
              ' ' +
              E +
              '= ' +
              y +
              ' : ' +
              h +
              ' ' +
              E +
              ' ' +
              v +
              ' ) || ' +
              h +
              ' !== ' +
              h +
              ') { ';
          } else {
            if (_ && n === undefined) {
              b = true;
              c = m;
              f = r.errSchemaPath + '/' + m;
              v = y;
              E += '=';
            } else {
              if (_) v = Math[p ? 'min' : 'max'](y, n);
              if (y === (_ ? v : true)) {
                b = true;
                c = m;
                f = r.errSchemaPath + '/' + m;
                E += '=';
              } else {
                b = false;
                $ += '=';
              }
            }
            var F = "'" + $ + "'";
            s += ' if ( ';
            if (d) {
              s += ' (' + v + ' !== undefined && typeof ' + v + " != 'number') || ";
            }
            s += ' ' + h + ' ' + E + ' ' + v + ' || ' + h + ' !== ' + h + ') { ';
          }
        }
        c = c || a;
        var x = x || [];
        x.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            (c || '_limit') +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { comparison: ' +
            F +
            ', limit: ' +
            v +
            ', exclusive: ' +
            b +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should be " + $ + ' ';
            if (d) {
              s += "' + " + v;
            } else {
              s += '' + v + "'";
            }
          }
          if (r.opts.verbose) {
            s += ' , schema:  ';
            if (d) {
              s += 'validate.schema' + l;
            } else {
              s += '' + n;
            }
            s +=
              '         , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              h +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var R = s;
        s = x.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + R + ']); ';
          } else {
            s += ' validate.errors = [' + R + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            R +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += ' } ';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    33038: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c;
        var h = 'data' + (o || '');
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        if (!(d || typeof n == 'number')) {
          throw new Error(a + ' must be number');
        }
        var p = a == 'maxItems' ? '>' : '<';
        s += 'if ( ';
        if (d) {
          s += ' (' + v + ' !== undefined && typeof ' + v + " != 'number') || ";
        }
        s += ' ' + h + '.length ' + p + ' ' + v + ') { ';
        var c = a;
        var m = m || [];
        m.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            (c || '_limitItems') +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { limit: ' +
            v +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should NOT have ";
            if (a == 'maxItems') {
              s += 'more';
            } else {
              s += 'fewer';
            }
            s += ' than ';
            if (d) {
              s += "' + " + v + " + '";
            } else {
              s += '' + n;
            }
            s += " items' ";
          }
          if (r.opts.verbose) {
            s += ' , schema:  ';
            if (d) {
              s += 'validate.schema' + l;
            } else {
              s += '' + n;
            }
            s +=
              '         , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              h +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var y = s;
        s = m.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + y + ']); ';
          } else {
            s += ' validate.errors = [' + y + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            y +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += '} ';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    80425: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c;
        var h = 'data' + (o || '');
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        if (!(d || typeof n == 'number')) {
          throw new Error(a + ' must be number');
        }
        var p = a == 'maxLength' ? '>' : '<';
        s += 'if ( ';
        if (d) {
          s += ' (' + v + ' !== undefined && typeof ' + v + " != 'number') || ";
        }
        if (r.opts.unicode === false) {
          s += ' ' + h + '.length ';
        } else {
          s += ' ucs2length(' + h + ') ';
        }
        s += ' ' + p + ' ' + v + ') { ';
        var c = a;
        var m = m || [];
        m.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            (c || '_limitLength') +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { limit: ' +
            v +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should NOT be ";
            if (a == 'maxLength') {
              s += 'longer';
            } else {
              s += 'shorter';
            }
            s += ' than ';
            if (d) {
              s += "' + " + v + " + '";
            } else {
              s += '' + n;
            }
            s += " characters' ";
          }
          if (r.opts.verbose) {
            s += ' , schema:  ';
            if (d) {
              s += 'validate.schema' + l;
            } else {
              s += '' + n;
            }
            s +=
              '         , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              h +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var y = s;
        s = m.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + y + ']); ';
          } else {
            s += ' validate.errors = [' + y + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            y +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += '} ';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    78204: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c;
        var h = 'data' + (o || '');
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        if (!(d || typeof n == 'number')) {
          throw new Error(a + ' must be number');
        }
        var p = a == 'maxProperties' ? '>' : '<';
        s += 'if ( ';
        if (d) {
          s += ' (' + v + ' !== undefined && typeof ' + v + " != 'number') || ";
        }
        s += ' Object.keys(' + h + ').length ' + p + ' ' + v + ') { ';
        var c = a;
        var m = m || [];
        m.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            (c || '_limitProperties') +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { limit: ' +
            v +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should NOT have ";
            if (a == 'maxProperties') {
              s += 'more';
            } else {
              s += 'fewer';
            }
            s += ' than ';
            if (d) {
              s += "' + " + v + " + '";
            } else {
              s += '' + n;
            }
            s += " properties' ";
          }
          if (r.opts.verbose) {
            s += ' , schema:  ';
            if (d) {
              s += 'validate.schema' + l;
            } else {
              s += '' + n;
            }
            s +=
              '         , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              h +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var y = s;
        s = m.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + y + ']); ';
          } else {
            s += ' validate.errors = [' + y + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            y +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += '} ';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    42988: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.schema[a];
        var o = r.schemaPath + r.util.getProperty(a);
        var n = r.errSchemaPath + '/' + a;
        var l = !r.opts.allErrors;
        var f = r.util.copy(r);
        var u = '';
        f.level++;
        var c = 'valid' + f.level;
        var h = f.baseId,
          d = true;
        var v = i;
        if (v) {
          var p,
            m = -1,
            y = v.length - 1;
          while (m < y) {
            p = v[(m += 1)];
            if (
              r.opts.strictKeywords
                ? (typeof p == 'object' && Object.keys(p).length > 0) || p === false
                : r.util.schemaHasRules(p, r.RULES.all)
            ) {
              d = false;
              f.schema = p;
              f.schemaPath = o + '[' + m + ']';
              f.errSchemaPath = n + '/' + m;
              s += '  ' + r.validate(f) + ' ';
              f.baseId = h;
              if (l) {
                s += ' if (' + c + ') { ';
                u += '}';
              }
            }
          }
        }
        if (l) {
          if (d) {
            s += ' if (true) { ';
          } else {
            s += ' ' + u.slice(0, -1) + ' ';
          }
        }
        return s;
      };
    },
    39996: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = 'errs__' + i;
        var v = r.util.copy(r);
        var p = '';
        v.level++;
        var m = 'valid' + v.level;
        var y = n.every(function (e) {
          return r.opts.strictKeywords
            ? (typeof e == 'object' && Object.keys(e).length > 0) || e === false
            : r.util.schemaHasRules(e, r.RULES.all);
        });
        if (y) {
          var g = v.baseId;
          s += ' var ' + d + ' = errors; var ' + h + ' = false;  ';
          var P = r.compositeRule;
          r.compositeRule = v.compositeRule = true;
          var E = n;
          if (E) {
            var w,
              b = -1,
              S = E.length - 1;
            while (b < S) {
              w = E[(b += 1)];
              v.schema = w;
              v.schemaPath = l + '[' + b + ']';
              v.errSchemaPath = f + '/' + b;
              s += '  ' + r.validate(v) + ' ';
              v.baseId = g;
              s += ' ' + h + ' = ' + h + ' || ' + m + '; if (!' + h + ') { ';
              p += '}';
            }
          }
          r.compositeRule = v.compositeRule = P;
          s += ' ' + p + ' if (!' + h + ') {   var err =   ';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              'anyOf' +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              ' , params: {} ';
            if (r.opts.messages !== false) {
              s += " , message: 'should match some schema in anyOf' ";
            }
            if (r.opts.verbose) {
              s +=
                ' , schema: validate.schema' +
                l +
                ' , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                c +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          s +=
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          if (!r.compositeRule && u) {
            if (r.async) {
              s += ' throw new ValidationError(vErrors); ';
            } else {
              s += ' validate.errors = vErrors; return false; ';
            }
          }
          s +=
            ' } else {  errors = ' +
            d +
            '; if (vErrors !== null) { if (' +
            d +
            ') vErrors.length = ' +
            d +
            '; else vErrors = null; } ';
          if (r.opts.allErrors) {
            s += ' } ';
          }
        } else {
          if (u) {
            s += ' if (true) { ';
          }
        }
        return s;
      };
    },
    57812: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.schema[a];
        var o = r.errSchemaPath + '/' + a;
        var n = !r.opts.allErrors;
        var l = r.util.toQuotedString(i);
        if (r.opts.$comment === true) {
          s += ' console.log(' + l + ');';
        } else if (typeof r.opts.$comment == 'function') {
          s +=
            ' self._opts.$comment(' +
            l +
            ', ' +
            r.util.toQuotedString(o) +
            ', validate.root.schema);';
        }
        return s;
      };
    },
    25306: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        if (!d) {
          s += ' var schema' + i + ' = validate.schema' + l + ';';
        }
        s += 'var ' + h + ' = equal(' + c + ', schema' + i + '); if (!' + h + ') {   ';
        var p = p || [];
        p.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            'const' +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { allowedValue: schema' +
            i +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should be equal to constant' ";
          }
          if (r.opts.verbose) {
            s +=
              ' , schema: validate.schema' +
              l +
              ' , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              c +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var m = s;
        s = p.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + m + ']); ';
          } else {
            s += ' validate.errors = [' + m + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            m +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += ' }';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    92471: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = 'errs__' + i;
        var v = r.util.copy(r);
        var p = '';
        v.level++;
        var m = 'valid' + v.level;
        var y = 'i' + i,
          g = (v.dataLevel = r.dataLevel + 1),
          P = 'data' + g,
          E = r.baseId,
          w = r.opts.strictKeywords
            ? (typeof n == 'object' && Object.keys(n).length > 0) || n === false
            : r.util.schemaHasRules(n, r.RULES.all);
        s += 'var ' + d + ' = errors;var ' + h + ';';
        if (w) {
          var b = r.compositeRule;
          r.compositeRule = v.compositeRule = true;
          v.schema = n;
          v.schemaPath = l;
          v.errSchemaPath = f;
          s +=
            ' var ' +
            m +
            ' = false; for (var ' +
            y +
            ' = 0; ' +
            y +
            ' < ' +
            c +
            '.length; ' +
            y +
            '++) { ';
          v.errorPath = r.util.getPathExpr(r.errorPath, y, r.opts.jsonPointers, true);
          var S = c + '[' + y + ']';
          v.dataPathArr[g] = y;
          var _ = r.validate(v);
          v.baseId = E;
          if (r.util.varOccurences(_, P) < 2) {
            s += ' ' + r.util.varReplace(_, P, S) + ' ';
          } else {
            s += ' var ' + P + ' = ' + S + '; ' + _ + ' ';
          }
          s += ' if (' + m + ') break; }  ';
          r.compositeRule = v.compositeRule = b;
          s += ' ' + p + ' if (!' + m + ') {';
        } else {
          s += ' if (' + c + '.length == 0) {';
        }
        var F = F || [];
        F.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            'contains' +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: {} ';
          if (r.opts.messages !== false) {
            s += " , message: 'should contain a valid item' ";
          }
          if (r.opts.verbose) {
            s +=
              ' , schema: validate.schema' +
              l +
              ' , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              c +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var $ = s;
        s = F.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + $ + ']); ';
          } else {
            s += ' validate.errors = [' + $ + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            $ +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += ' } else { ';
        if (w) {
          s +=
            '  errors = ' +
            d +
            '; if (vErrors !== null) { if (' +
            d +
            ') vErrors.length = ' +
            d +
            '; else vErrors = null; } ';
        }
        if (r.opts.allErrors) {
          s += ' } ';
        }
        return s;
      };
    },
    14165: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c;
        var h = 'data' + (o || '');
        var d = 'valid' + i;
        var v = 'errs__' + i;
        var p = r.opts.$data && n && n.$data,
          m;
        if (p) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          m = 'schema' + i;
        } else {
          m = n;
        }
        var y = this,
          g = 'definition' + i,
          P = y.definition,
          E = '';
        var w, b, S, _, F;
        if (p && P.$data) {
          F = 'keywordValidate' + i;
          var $ = P.validateSchema;
          s +=
            ' var ' +
            g +
            " = RULES.custom['" +
            a +
            "'].definition; var " +
            F +
            ' = ' +
            g +
            '.validate;';
        } else {
          _ = r.useCustomRule(y, n, r.schema, r);
          if (!_) return;
          m = 'validate.schema' + l;
          F = _.code;
          w = P.compile;
          b = P.inline;
          S = P.macro;
        }
        var x = F + '.errors',
          R = 'i' + i,
          D = 'ruleErr' + i,
          j = P.async;
        if (j && !r.async) throw new Error('async keyword in sync schema');
        if (!(b || S)) {
          s += '' + x + ' = null;';
        }
        s += 'var ' + v + ' = errors;var ' + d + ';';
        if (p && P.$data) {
          E += '}';
          s += ' if (' + m + ' === undefined) { ' + d + ' = true; } else { ';
          if ($) {
            E += '}';
            s += ' ' + d + ' = ' + g + '.validateSchema(' + m + '); if (' + d + ') { ';
          }
        }
        if (b) {
          if (P.statements) {
            s += ' ' + _.validate + ' ';
          } else {
            s += ' ' + d + ' = ' + _.validate + '; ';
          }
        } else if (S) {
          var O = r.util.copy(r);
          var E = '';
          O.level++;
          var I = 'valid' + O.level;
          O.schema = _.validate;
          O.schemaPath = '';
          var A = r.compositeRule;
          r.compositeRule = O.compositeRule = true;
          var k = r.validate(O).replace(/validate\.schema/g, F);
          r.compositeRule = O.compositeRule = A;
          s += ' ' + k;
        } else {
          var C = C || [];
          C.push(s);
          s = '';
          s += '  ' + F + '.call( ';
          if (r.opts.passContext) {
            s += 'this';
          } else {
            s += 'self';
          }
          if (w || P.schema === false) {
            s += ' , ' + h + ' ';
          } else {
            s += ' , ' + m + ' , ' + h + ' , validate.schema' + r.schemaPath + ' ';
          }
          s += " , (dataPath || '')";
          if (r.errorPath != '""') {
            s += ' + ' + r.errorPath;
          }
          var L = o ? 'data' + (o - 1 || '') : 'parentData',
            N = o ? r.dataPathArr[o] : 'parentDataProperty';
          s += ' , ' + L + ' , ' + N + ' , rootData )  ';
          var z = s;
          s = C.pop();
          if (P.errors === false) {
            s += ' ' + d + ' = ';
            if (j) {
              s += 'await ';
            }
            s += '' + z + '; ';
          } else {
            if (j) {
              x = 'customErrors' + i;
              s +=
                ' var ' +
                x +
                ' = null; try { ' +
                d +
                ' = await ' +
                z +
                '; } catch (e) { ' +
                d +
                ' = false; if (e instanceof ValidationError) ' +
                x +
                ' = e.errors; else throw e; } ';
            } else {
              s += ' ' + x + ' = null; ' + d + ' = ' + z + '; ';
            }
          }
        }
        if (P.modifying) {
          s += ' if (' + L + ') ' + h + ' = ' + L + '[' + N + '];';
        }
        s += '' + E;
        if (P.valid) {
          if (u) {
            s += ' if (true) { ';
          }
        } else {
          s += ' if ( ';
          if (P.valid === undefined) {
            s += ' !';
            if (S) {
              s += '' + I;
            } else {
              s += '' + d;
            }
          } else {
            s += ' ' + !P.valid + ' ';
          }
          s += ') { ';
          c = y.keyword;
          var C = C || [];
          C.push(s);
          s = '';
          var C = C || [];
          C.push(s);
          s = '';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              (c || 'custom') +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              " , params: { keyword: '" +
              y.keyword +
              "' } ";
            if (r.opts.messages !== false) {
              s +=
                ' , message: \'should pass "' + y.keyword + '" keyword validation\' ';
            }
            if (r.opts.verbose) {
              s +=
                ' , schema: validate.schema' +
                l +
                ' , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                h +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          var T = s;
          s = C.pop();
          if (!r.compositeRule && u) {
            if (r.async) {
              s += ' throw new ValidationError([' + T + ']); ';
            } else {
              s += ' validate.errors = [' + T + ']; return false; ';
            }
          } else {
            s +=
              ' var err = ' +
              T +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          var q = s;
          s = C.pop();
          if (b) {
            if (P.errors) {
              if (P.errors != 'full') {
                s +=
                  '  for (var ' +
                  R +
                  '=' +
                  v +
                  '; ' +
                  R +
                  '<errors; ' +
                  R +
                  '++) { var ' +
                  D +
                  ' = vErrors[' +
                  R +
                  ']; if (' +
                  D +
                  '.dataPath === undefined) ' +
                  D +
                  ".dataPath = (dataPath || '') + " +
                  r.errorPath +
                  '; if (' +
                  D +
                  '.schemaPath === undefined) { ' +
                  D +
                  '.schemaPath = "' +
                  f +
                  '"; } ';
                if (r.opts.verbose) {
                  s += ' ' + D + '.schema = ' + m + '; ' + D + '.data = ' + h + '; ';
                }
                s += ' } ';
              }
            } else {
              if (P.errors === false) {
                s += ' ' + q + ' ';
              } else {
                s +=
                  ' if (' +
                  v +
                  ' == errors) { ' +
                  q +
                  ' } else {  for (var ' +
                  R +
                  '=' +
                  v +
                  '; ' +
                  R +
                  '<errors; ' +
                  R +
                  '++) { var ' +
                  D +
                  ' = vErrors[' +
                  R +
                  ']; if (' +
                  D +
                  '.dataPath === undefined) ' +
                  D +
                  ".dataPath = (dataPath || '') + " +
                  r.errorPath +
                  '; if (' +
                  D +
                  '.schemaPath === undefined) { ' +
                  D +
                  '.schemaPath = "' +
                  f +
                  '"; } ';
                if (r.opts.verbose) {
                  s += ' ' + D + '.schema = ' + m + '; ' + D + '.data = ' + h + '; ';
                }
                s += ' } } ';
              }
            }
          } else if (S) {
            s += '   var err =   ';
            if (r.createErrors !== false) {
              s +=
                " { keyword: '" +
                (c || 'custom') +
                "' , dataPath: (dataPath || '') + " +
                r.errorPath +
                ' , schemaPath: ' +
                r.util.toQuotedString(f) +
                " , params: { keyword: '" +
                y.keyword +
                "' } ";
              if (r.opts.messages !== false) {
                s +=
                  ' , message: \'should pass "' + y.keyword + '" keyword validation\' ';
              }
              if (r.opts.verbose) {
                s +=
                  ' , schema: validate.schema' +
                  l +
                  ' , parentSchema: validate.schema' +
                  r.schemaPath +
                  ' , data: ' +
                  h +
                  ' ';
              }
              s += ' } ';
            } else {
              s += ' {} ';
            }
            s +=
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            if (!r.compositeRule && u) {
              if (r.async) {
                s += ' throw new ValidationError(vErrors); ';
              } else {
                s += ' validate.errors = vErrors; return false; ';
              }
            }
          } else {
            if (P.errors === false) {
              s += ' ' + q + ' ';
            } else {
              s +=
                ' if (Array.isArray(' +
                x +
                ')) { if (vErrors === null) vErrors = ' +
                x +
                '; else vErrors = vErrors.concat(' +
                x +
                '); errors = vErrors.length;  for (var ' +
                R +
                '=' +
                v +
                '; ' +
                R +
                '<errors; ' +
                R +
                '++) { var ' +
                D +
                ' = vErrors[' +
                R +
                ']; if (' +
                D +
                '.dataPath === undefined) ' +
                D +
                ".dataPath = (dataPath || '') + " +
                r.errorPath +
                ';  ' +
                D +
                '.schemaPath = "' +
                f +
                '";  ';
              if (r.opts.verbose) {
                s += ' ' + D + '.schema = ' + m + '; ' + D + '.data = ' + h + '; ';
              }
              s += ' } } else { ' + q + ' } ';
            }
          }
          s += ' } ';
          if (u) {
            s += ' else { ';
          }
        }
        return s;
      };
    },
    66659: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'errs__' + i;
        var d = r.util.copy(r);
        var v = '';
        d.level++;
        var p = 'valid' + d.level;
        var m = {},
          y = {},
          g = r.opts.ownProperties;
        for (b in n) {
          if (b == '__proto__') continue;
          var P = n[b];
          var E = Array.isArray(P) ? y : m;
          E[b] = P;
        }
        s += 'var ' + h + ' = errors;';
        var w = r.errorPath;
        s += 'var missing' + i + ';';
        for (var b in y) {
          E = y[b];
          if (E.length) {
            s += ' if ( ' + c + r.util.getProperty(b) + ' !== undefined ';
            if (g) {
              s +=
                ' && Object.prototype.hasOwnProperty.call(' +
                c +
                ", '" +
                r.util.escapeQuotes(b) +
                "') ";
            }
            if (u) {
              s += ' && ( ';
              var S = E;
              if (S) {
                var _,
                  F = -1,
                  $ = S.length - 1;
                while (F < $) {
                  _ = S[(F += 1)];
                  if (F) {
                    s += ' || ';
                  }
                  var x = r.util.getProperty(_),
                    R = c + x;
                  s += ' ( ( ' + R + ' === undefined ';
                  if (g) {
                    s +=
                      ' || ! Object.prototype.hasOwnProperty.call(' +
                      c +
                      ", '" +
                      r.util.escapeQuotes(_) +
                      "') ";
                  }
                  s +=
                    ') && (missing' +
                    i +
                    ' = ' +
                    r.util.toQuotedString(r.opts.jsonPointers ? _ : x) +
                    ') ) ';
                }
              }
              s += ')) {  ';
              var D = 'missing' + i,
                j = "' + " + D + " + '";
              if (r.opts._errorDataPathProperty) {
                r.errorPath = r.opts.jsonPointers
                  ? r.util.getPathExpr(w, D, true)
                  : w + ' + ' + D;
              }
              var O = O || [];
              O.push(s);
              s = '';
              if (r.createErrors !== false) {
                s +=
                  " { keyword: '" +
                  'dependencies' +
                  "' , dataPath: (dataPath || '') + " +
                  r.errorPath +
                  ' , schemaPath: ' +
                  r.util.toQuotedString(f) +
                  " , params: { property: '" +
                  r.util.escapeQuotes(b) +
                  "', missingProperty: '" +
                  j +
                  "', depsCount: " +
                  E.length +
                  ", deps: '" +
                  r.util.escapeQuotes(E.length == 1 ? E[0] : E.join(', ')) +
                  "' } ";
                if (r.opts.messages !== false) {
                  s += " , message: 'should have ";
                  if (E.length == 1) {
                    s += 'property ' + r.util.escapeQuotes(E[0]);
                  } else {
                    s += 'properties ' + r.util.escapeQuotes(E.join(', '));
                  }
                  s += ' when property ' + r.util.escapeQuotes(b) + " is present' ";
                }
                if (r.opts.verbose) {
                  s +=
                    ' , schema: validate.schema' +
                    l +
                    ' , parentSchema: validate.schema' +
                    r.schemaPath +
                    ' , data: ' +
                    c +
                    ' ';
                }
                s += ' } ';
              } else {
                s += ' {} ';
              }
              var I = s;
              s = O.pop();
              if (!r.compositeRule && u) {
                if (r.async) {
                  s += ' throw new ValidationError([' + I + ']); ';
                } else {
                  s += ' validate.errors = [' + I + ']; return false; ';
                }
              } else {
                s +=
                  ' var err = ' +
                  I +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
            } else {
              s += ' ) { ';
              var A = E;
              if (A) {
                var _,
                  k = -1,
                  C = A.length - 1;
                while (k < C) {
                  _ = A[(k += 1)];
                  var x = r.util.getProperty(_),
                    j = r.util.escapeQuotes(_),
                    R = c + x;
                  if (r.opts._errorDataPathProperty) {
                    r.errorPath = r.util.getPath(w, _, r.opts.jsonPointers);
                  }
                  s += ' if ( ' + R + ' === undefined ';
                  if (g) {
                    s +=
                      ' || ! Object.prototype.hasOwnProperty.call(' +
                      c +
                      ", '" +
                      r.util.escapeQuotes(_) +
                      "') ";
                  }
                  s += ') {  var err =   ';
                  if (r.createErrors !== false) {
                    s +=
                      " { keyword: '" +
                      'dependencies' +
                      "' , dataPath: (dataPath || '') + " +
                      r.errorPath +
                      ' , schemaPath: ' +
                      r.util.toQuotedString(f) +
                      " , params: { property: '" +
                      r.util.escapeQuotes(b) +
                      "', missingProperty: '" +
                      j +
                      "', depsCount: " +
                      E.length +
                      ", deps: '" +
                      r.util.escapeQuotes(E.length == 1 ? E[0] : E.join(', ')) +
                      "' } ";
                    if (r.opts.messages !== false) {
                      s += " , message: 'should have ";
                      if (E.length == 1) {
                        s += 'property ' + r.util.escapeQuotes(E[0]);
                      } else {
                        s += 'properties ' + r.util.escapeQuotes(E.join(', '));
                      }
                      s += ' when property ' + r.util.escapeQuotes(b) + " is present' ";
                    }
                    if (r.opts.verbose) {
                      s +=
                        ' , schema: validate.schema' +
                        l +
                        ' , parentSchema: validate.schema' +
                        r.schemaPath +
                        ' , data: ' +
                        c +
                        ' ';
                    }
                    s += ' } ';
                  } else {
                    s += ' {} ';
                  }
                  s +=
                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
                }
              }
            }
            s += ' }   ';
            if (u) {
              v += '}';
              s += ' else { ';
            }
          }
        }
        r.errorPath = w;
        var L = d.baseId;
        for (var b in m) {
          var P = m[b];
          if (
            r.opts.strictKeywords
              ? (typeof P == 'object' && Object.keys(P).length > 0) || P === false
              : r.util.schemaHasRules(P, r.RULES.all)
          ) {
            s +=
              ' ' +
              p +
              ' = true; if ( ' +
              c +
              r.util.getProperty(b) +
              ' !== undefined ';
            if (g) {
              s +=
                ' && Object.prototype.hasOwnProperty.call(' +
                c +
                ", '" +
                r.util.escapeQuotes(b) +
                "') ";
            }
            s += ') { ';
            d.schema = P;
            d.schemaPath = l + r.util.getProperty(b);
            d.errSchemaPath = f + '/' + r.util.escapeFragment(b);
            s += '  ' + r.validate(d) + ' ';
            d.baseId = L;
            s += ' }  ';
            if (u) {
              s += ' if (' + p + ') { ';
              v += '}';
            }
          }
        }
        if (u) {
          s += '   ' + v + ' if (' + h + ' == errors) {';
        }
        return s;
      };
    },
    31740: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        var p = 'i' + i,
          m = 'schema' + i;
        if (!d) {
          s += ' var ' + m + ' = validate.schema' + l + ';';
        }
        s += 'var ' + h + ';';
        if (d) {
          s +=
            ' if (schema' +
            i +
            ' === undefined) ' +
            h +
            ' = true; else if (!Array.isArray(schema' +
            i +
            ')) ' +
            h +
            ' = false; else {';
        }
        s +=
          '' +
          h +
          ' = false;for (var ' +
          p +
          '=0; ' +
          p +
          '<' +
          m +
          '.length; ' +
          p +
          '++) if (equal(' +
          c +
          ', ' +
          m +
          '[' +
          p +
          '])) { ' +
          h +
          ' = true; break; }';
        if (d) {
          s += '  }  ';
        }
        s += ' if (!' + h + ') {   ';
        var y = y || [];
        y.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            'enum' +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { allowedValues: schema' +
            i +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should be equal to one of the allowed values' ";
          }
          if (r.opts.verbose) {
            s +=
              ' , schema: validate.schema' +
              l +
              ' , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              c +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var g = s;
        s = y.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + g + ']); ';
          } else {
            s += ' validate.errors = [' + g + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            g +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += ' }';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    39014: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        if (r.opts.format === false) {
          if (u) {
            s += ' if (true) { ';
          }
          return s;
        }
        var h = r.opts.$data && n && n.$data,
          d;
        if (h) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          d = 'schema' + i;
        } else {
          d = n;
        }
        var v = r.opts.unknownFormats,
          p = Array.isArray(v);
        if (h) {
          var m = 'format' + i,
            y = 'isObject' + i,
            g = 'formatType' + i;
          s +=
            ' var ' +
            m +
            ' = formats[' +
            d +
            ']; var ' +
            y +
            ' = typeof ' +
            m +
            " == 'object' && !(" +
            m +
            ' instanceof RegExp) && ' +
            m +
            '.validate; var ' +
            g +
            ' = ' +
            y +
            ' && ' +
            m +
            ".type || 'string'; if (" +
            y +
            ') { ';
          if (r.async) {
            s += ' var async' + i + ' = ' + m + '.async; ';
          }
          s += ' ' + m + ' = ' + m + '.validate; } if (  ';
          if (h) {
            s += ' (' + d + ' !== undefined && typeof ' + d + " != 'string') || ";
          }
          s += ' (';
          if (v != 'ignore') {
            s += ' (' + d + ' && !' + m + ' ';
            if (p) {
              s += ' && self._opts.unknownFormats.indexOf(' + d + ') == -1 ';
            }
            s += ') || ';
          }
          s +=
            ' (' +
            m +
            ' && ' +
            g +
            " == '" +
            t +
            "' && !(typeof " +
            m +
            " == 'function' ? ";
          if (r.async) {
            s +=
              ' (async' + i + ' ? await ' + m + '(' + c + ') : ' + m + '(' + c + ')) ';
          } else {
            s += ' ' + m + '(' + c + ') ';
          }
          s += ' : ' + m + '.test(' + c + '))))) {';
        } else {
          var m = r.formats[n];
          if (!m) {
            if (v == 'ignore') {
              r.logger.warn(
                'unknown format "' +
                  n +
                  '" ignored in schema at path "' +
                  r.errSchemaPath +
                  '"'
              );
              if (u) {
                s += ' if (true) { ';
              }
              return s;
            } else if (p && v.indexOf(n) >= 0) {
              if (u) {
                s += ' if (true) { ';
              }
              return s;
            } else {
              throw new Error(
                'unknown format "' +
                  n +
                  '" is used in schema at path "' +
                  r.errSchemaPath +
                  '"'
              );
            }
          }
          var y = typeof m == 'object' && !(m instanceof RegExp) && m.validate;
          var g = (y && m.type) || 'string';
          if (y) {
            var P = m.async === true;
            m = m.validate;
          }
          if (g != t) {
            if (u) {
              s += ' if (true) { ';
            }
            return s;
          }
          if (P) {
            if (!r.async) throw new Error('async format in sync schema');
            var E = 'formats' + r.util.getProperty(n) + '.validate';
            s += ' if (!(await ' + E + '(' + c + '))) { ';
          } else {
            s += ' if (! ';
            var E = 'formats' + r.util.getProperty(n);
            if (y) E += '.validate';
            if (typeof m == 'function') {
              s += ' ' + E + '(' + c + ') ';
            } else {
              s += ' ' + E + '.test(' + c + ') ';
            }
            s += ') { ';
          }
        }
        var w = w || [];
        w.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            'format' +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { format:  ';
          if (h) {
            s += '' + d;
          } else {
            s += '' + r.util.toQuotedString(n);
          }
          s += '  } ';
          if (r.opts.messages !== false) {
            s += ' , message: \'should match format "';
            if (h) {
              s += "' + " + d + " + '";
            } else {
              s += '' + r.util.escapeQuotes(n);
            }
            s += '"\' ';
          }
          if (r.opts.verbose) {
            s += ' , schema:  ';
            if (h) {
              s += 'validate.schema' + l;
            } else {
              s += '' + r.util.toQuotedString(n);
            }
            s +=
              '         , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              c +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var b = s;
        s = w.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + b + ']); ';
          } else {
            s += ' validate.errors = [' + b + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            b +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += ' } ';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    17231: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = 'errs__' + i;
        var v = r.util.copy(r);
        v.level++;
        var p = 'valid' + v.level;
        var m = r.schema['then'],
          y = r.schema['else'],
          g =
            m !== undefined &&
            (r.opts.strictKeywords
              ? (typeof m == 'object' && Object.keys(m).length > 0) || m === false
              : r.util.schemaHasRules(m, r.RULES.all)),
          P =
            y !== undefined &&
            (r.opts.strictKeywords
              ? (typeof y == 'object' && Object.keys(y).length > 0) || y === false
              : r.util.schemaHasRules(y, r.RULES.all)),
          E = v.baseId;
        if (g || P) {
          var w;
          v.createErrors = false;
          v.schema = n;
          v.schemaPath = l;
          v.errSchemaPath = f;
          s += ' var ' + d + ' = errors; var ' + h + ' = true;  ';
          var b = r.compositeRule;
          r.compositeRule = v.compositeRule = true;
          s += '  ' + r.validate(v) + ' ';
          v.baseId = E;
          v.createErrors = true;
          s +=
            '  errors = ' +
            d +
            '; if (vErrors !== null) { if (' +
            d +
            ') vErrors.length = ' +
            d +
            '; else vErrors = null; }  ';
          r.compositeRule = v.compositeRule = b;
          if (g) {
            s += ' if (' + p + ') {  ';
            v.schema = r.schema['then'];
            v.schemaPath = r.schemaPath + '.then';
            v.errSchemaPath = r.errSchemaPath + '/then';
            s += '  ' + r.validate(v) + ' ';
            v.baseId = E;
            s += ' ' + h + ' = ' + p + '; ';
            if (g && P) {
              w = 'ifClause' + i;
              s += ' var ' + w + " = 'then'; ";
            } else {
              w = "'then'";
            }
            s += ' } ';
            if (P) {
              s += ' else { ';
            }
          } else {
            s += ' if (!' + p + ') { ';
          }
          if (P) {
            v.schema = r.schema['else'];
            v.schemaPath = r.schemaPath + '.else';
            v.errSchemaPath = r.errSchemaPath + '/else';
            s += '  ' + r.validate(v) + ' ';
            v.baseId = E;
            s += ' ' + h + ' = ' + p + '; ';
            if (g && P) {
              w = 'ifClause' + i;
              s += ' var ' + w + " = 'else'; ";
            } else {
              w = "'else'";
            }
            s += ' } ';
          }
          s += ' if (!' + h + ') {   var err =   ';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              'if' +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              ' , params: { failingKeyword: ' +
              w +
              ' } ';
            if (r.opts.messages !== false) {
              s += " , message: 'should match \"' + " + w + " + '\" schema' ";
            }
            if (r.opts.verbose) {
              s +=
                ' , schema: validate.schema' +
                l +
                ' , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                c +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          s +=
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          if (!r.compositeRule && u) {
            if (r.async) {
              s += ' throw new ValidationError(vErrors); ';
            } else {
              s += ' validate.errors = vErrors; return false; ';
            }
          }
          s += ' }   ';
          if (u) {
            s += ' else { ';
          }
        } else {
          if (u) {
            s += ' if (true) { ';
          }
        }
        return s;
      };
    },
    66674: (e, r, a) => {
      'use strict';
      e.exports = {
        $ref: a(62392),
        allOf: a(42988),
        anyOf: a(39996),
        $comment: a(57812),
        const: a(25306),
        contains: a(92471),
        dependencies: a(66659),
        enum: a(31740),
        format: a(39014),
        if: a(17231),
        items: a(37482),
        maximum: a(18210),
        minimum: a(18210),
        maxItems: a(33038),
        minItems: a(33038),
        maxLength: a(80425),
        minLength: a(80425),
        maxProperties: a(78204),
        minProperties: a(78204),
        multipleOf: a(43673),
        not: a(28528),
        oneOf: a(59709),
        pattern: a(49614),
        properties: a(81175),
        propertyNames: a(58441),
        required: a(71287),
        uniqueItems: a(3603),
        validate: a(19508),
      };
    },
    37482: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = 'errs__' + i;
        var v = r.util.copy(r);
        var p = '';
        v.level++;
        var m = 'valid' + v.level;
        var y = 'i' + i,
          g = (v.dataLevel = r.dataLevel + 1),
          P = 'data' + g,
          E = r.baseId;
        s += 'var ' + d + ' = errors;var ' + h + ';';
        if (Array.isArray(n)) {
          var w = r.schema.additionalItems;
          if (w === false) {
            s += ' ' + h + ' = ' + c + '.length <= ' + n.length + '; ';
            var b = f;
            f = r.errSchemaPath + '/additionalItems';
            s += '  if (!' + h + ') {   ';
            var S = S || [];
            S.push(s);
            s = '';
            if (r.createErrors !== false) {
              s +=
                " { keyword: '" +
                'additionalItems' +
                "' , dataPath: (dataPath || '') + " +
                r.errorPath +
                ' , schemaPath: ' +
                r.util.toQuotedString(f) +
                ' , params: { limit: ' +
                n.length +
                ' } ';
              if (r.opts.messages !== false) {
                s += " , message: 'should NOT have more than " + n.length + " items' ";
              }
              if (r.opts.verbose) {
                s +=
                  ' , schema: false , parentSchema: validate.schema' +
                  r.schemaPath +
                  ' , data: ' +
                  c +
                  ' ';
              }
              s += ' } ';
            } else {
              s += ' {} ';
            }
            var _ = s;
            s = S.pop();
            if (!r.compositeRule && u) {
              if (r.async) {
                s += ' throw new ValidationError([' + _ + ']); ';
              } else {
                s += ' validate.errors = [' + _ + ']; return false; ';
              }
            } else {
              s +=
                ' var err = ' +
                _ +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
            s += ' } ';
            f = b;
            if (u) {
              p += '}';
              s += ' else { ';
            }
          }
          var F = n;
          if (F) {
            var $,
              x = -1,
              R = F.length - 1;
            while (x < R) {
              $ = F[(x += 1)];
              if (
                r.opts.strictKeywords
                  ? (typeof $ == 'object' && Object.keys($).length > 0) || $ === false
                  : r.util.schemaHasRules($, r.RULES.all)
              ) {
                s += ' ' + m + ' = true; if (' + c + '.length > ' + x + ') { ';
                var D = c + '[' + x + ']';
                v.schema = $;
                v.schemaPath = l + '[' + x + ']';
                v.errSchemaPath = f + '/' + x;
                v.errorPath = r.util.getPathExpr(
                  r.errorPath,
                  x,
                  r.opts.jsonPointers,
                  true
                );
                v.dataPathArr[g] = x;
                var j = r.validate(v);
                v.baseId = E;
                if (r.util.varOccurences(j, P) < 2) {
                  s += ' ' + r.util.varReplace(j, P, D) + ' ';
                } else {
                  s += ' var ' + P + ' = ' + D + '; ' + j + ' ';
                }
                s += ' }  ';
                if (u) {
                  s += ' if (' + m + ') { ';
                  p += '}';
                }
              }
            }
          }
          if (
            typeof w == 'object' &&
            (r.opts.strictKeywords
              ? (typeof w == 'object' && Object.keys(w).length > 0) || w === false
              : r.util.schemaHasRules(w, r.RULES.all))
          ) {
            v.schema = w;
            v.schemaPath = r.schemaPath + '.additionalItems';
            v.errSchemaPath = r.errSchemaPath + '/additionalItems';
            s +=
              ' ' +
              m +
              ' = true; if (' +
              c +
              '.length > ' +
              n.length +
              ') {  for (var ' +
              y +
              ' = ' +
              n.length +
              '; ' +
              y +
              ' < ' +
              c +
              '.length; ' +
              y +
              '++) { ';
            v.errorPath = r.util.getPathExpr(r.errorPath, y, r.opts.jsonPointers, true);
            var D = c + '[' + y + ']';
            v.dataPathArr[g] = y;
            var j = r.validate(v);
            v.baseId = E;
            if (r.util.varOccurences(j, P) < 2) {
              s += ' ' + r.util.varReplace(j, P, D) + ' ';
            } else {
              s += ' var ' + P + ' = ' + D + '; ' + j + ' ';
            }
            if (u) {
              s += ' if (!' + m + ') break; ';
            }
            s += ' } }  ';
            if (u) {
              s += ' if (' + m + ') { ';
              p += '}';
            }
          }
        } else if (
          r.opts.strictKeywords
            ? (typeof n == 'object' && Object.keys(n).length > 0) || n === false
            : r.util.schemaHasRules(n, r.RULES.all)
        ) {
          v.schema = n;
          v.schemaPath = l;
          v.errSchemaPath = f;
          s +=
            '  for (var ' +
            y +
            ' = ' +
            0 +
            '; ' +
            y +
            ' < ' +
            c +
            '.length; ' +
            y +
            '++) { ';
          v.errorPath = r.util.getPathExpr(r.errorPath, y, r.opts.jsonPointers, true);
          var D = c + '[' + y + ']';
          v.dataPathArr[g] = y;
          var j = r.validate(v);
          v.baseId = E;
          if (r.util.varOccurences(j, P) < 2) {
            s += ' ' + r.util.varReplace(j, P, D) + ' ';
          } else {
            s += ' var ' + P + ' = ' + D + '; ' + j + ' ';
          }
          if (u) {
            s += ' if (!' + m + ') break; ';
          }
          s += ' }';
        }
        if (u) {
          s += ' ' + p + ' if (' + d + ' == errors) {';
        }
        return s;
      };
    },
    43673: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = r.opts.$data && n && n.$data,
          d;
        if (h) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          d = 'schema' + i;
        } else {
          d = n;
        }
        if (!(h || typeof n == 'number')) {
          throw new Error(a + ' must be number');
        }
        s += 'var division' + i + ';if (';
        if (h) {
          s += ' ' + d + ' !== undefined && ( typeof ' + d + " != 'number' || ";
        }
        s += ' (division' + i + ' = ' + c + ' / ' + d + ', ';
        if (r.opts.multipleOfPrecision) {
          s +=
            ' Math.abs(Math.round(division' +
            i +
            ') - division' +
            i +
            ') > 1e-' +
            r.opts.multipleOfPrecision +
            ' ';
        } else {
          s += ' division' + i + ' !== parseInt(division' + i + ') ';
        }
        s += ' ) ';
        if (h) {
          s += '  )  ';
        }
        s += ' ) {   ';
        var v = v || [];
        v.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            'multipleOf' +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { multipleOf: ' +
            d +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should be multiple of ";
            if (h) {
              s += "' + " + d;
            } else {
              s += '' + d + "'";
            }
          }
          if (r.opts.verbose) {
            s += ' , schema:  ';
            if (h) {
              s += 'validate.schema' + l;
            } else {
              s += '' + n;
            }
            s +=
              '         , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              c +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var p = s;
        s = v.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + p + ']); ';
          } else {
            s += ' validate.errors = [' + p + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            p +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += '} ';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    28528: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'errs__' + i;
        var d = r.util.copy(r);
        d.level++;
        var v = 'valid' + d.level;
        if (
          r.opts.strictKeywords
            ? (typeof n == 'object' && Object.keys(n).length > 0) || n === false
            : r.util.schemaHasRules(n, r.RULES.all)
        ) {
          d.schema = n;
          d.schemaPath = l;
          d.errSchemaPath = f;
          s += ' var ' + h + ' = errors;  ';
          var p = r.compositeRule;
          r.compositeRule = d.compositeRule = true;
          d.createErrors = false;
          var m;
          if (d.opts.allErrors) {
            m = d.opts.allErrors;
            d.opts.allErrors = false;
          }
          s += ' ' + r.validate(d) + ' ';
          d.createErrors = true;
          if (m) d.opts.allErrors = m;
          r.compositeRule = d.compositeRule = p;
          s += ' if (' + v + ') {   ';
          var y = y || [];
          y.push(s);
          s = '';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              'not' +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              ' , params: {} ';
            if (r.opts.messages !== false) {
              s += " , message: 'should NOT be valid' ";
            }
            if (r.opts.verbose) {
              s +=
                ' , schema: validate.schema' +
                l +
                ' , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                c +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          var g = s;
          s = y.pop();
          if (!r.compositeRule && u) {
            if (r.async) {
              s += ' throw new ValidationError([' + g + ']); ';
            } else {
              s += ' validate.errors = [' + g + ']; return false; ';
            }
          } else {
            s +=
              ' var err = ' +
              g +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          s +=
            ' } else {  errors = ' +
            h +
            '; if (vErrors !== null) { if (' +
            h +
            ') vErrors.length = ' +
            h +
            '; else vErrors = null; } ';
          if (r.opts.allErrors) {
            s += ' } ';
          }
        } else {
          s += '  var err =   ';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              'not' +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              ' , params: {} ';
            if (r.opts.messages !== false) {
              s += " , message: 'should NOT be valid' ";
            }
            if (r.opts.verbose) {
              s +=
                ' , schema: validate.schema' +
                l +
                ' , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                c +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          s +=
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          if (u) {
            s += ' if (false) { ';
          }
        }
        return s;
      };
    },
    59709: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = 'errs__' + i;
        var v = r.util.copy(r);
        var p = '';
        v.level++;
        var m = 'valid' + v.level;
        var y = v.baseId,
          g = 'prevValid' + i,
          P = 'passingSchemas' + i;
        s +=
          'var ' +
          d +
          ' = errors , ' +
          g +
          ' = false , ' +
          h +
          ' = false , ' +
          P +
          ' = null; ';
        var E = r.compositeRule;
        r.compositeRule = v.compositeRule = true;
        var w = n;
        if (w) {
          var b,
            S = -1,
            _ = w.length - 1;
          while (S < _) {
            b = w[(S += 1)];
            if (
              r.opts.strictKeywords
                ? (typeof b == 'object' && Object.keys(b).length > 0) || b === false
                : r.util.schemaHasRules(b, r.RULES.all)
            ) {
              v.schema = b;
              v.schemaPath = l + '[' + S + ']';
              v.errSchemaPath = f + '/' + S;
              s += '  ' + r.validate(v) + ' ';
              v.baseId = y;
            } else {
              s += ' var ' + m + ' = true; ';
            }
            if (S) {
              s +=
                ' if (' +
                m +
                ' && ' +
                g +
                ') { ' +
                h +
                ' = false; ' +
                P +
                ' = [' +
                P +
                ', ' +
                S +
                ']; } else { ';
              p += '}';
            }
            s +=
              ' if (' +
              m +
              ') { ' +
              h +
              ' = ' +
              g +
              ' = true; ' +
              P +
              ' = ' +
              S +
              '; }';
          }
        }
        r.compositeRule = v.compositeRule = E;
        s += '' + p + 'if (!' + h + ') {   var err =   ';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            'oneOf' +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { passingSchemas: ' +
            P +
            ' } ';
          if (r.opts.messages !== false) {
            s += " , message: 'should match exactly one schema in oneOf' ";
          }
          if (r.opts.verbose) {
            s +=
              ' , schema: validate.schema' +
              l +
              ' , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              c +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        s +=
          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError(vErrors); ';
          } else {
            s += ' validate.errors = vErrors; return false; ';
          }
        }
        s +=
          '} else {  errors = ' +
          d +
          '; if (vErrors !== null) { if (' +
          d +
          ') vErrors.length = ' +
          d +
          '; else vErrors = null; }';
        if (r.opts.allErrors) {
          s += ' } ';
        }
        return s;
      };
    },
    49614: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = r.opts.$data && n && n.$data,
          d;
        if (h) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          d = 'schema' + i;
        } else {
          d = n;
        }
        var v = h ? '(new RegExp(' + d + '))' : r.usePattern(n);
        s += 'if ( ';
        if (h) {
          s += ' (' + d + ' !== undefined && typeof ' + d + " != 'string') || ";
        }
        s += ' !' + v + '.test(' + c + ') ) {   ';
        var p = p || [];
        p.push(s);
        s = '';
        if (r.createErrors !== false) {
          s +=
            " { keyword: '" +
            'pattern' +
            "' , dataPath: (dataPath || '') + " +
            r.errorPath +
            ' , schemaPath: ' +
            r.util.toQuotedString(f) +
            ' , params: { pattern:  ';
          if (h) {
            s += '' + d;
          } else {
            s += '' + r.util.toQuotedString(n);
          }
          s += '  } ';
          if (r.opts.messages !== false) {
            s += ' , message: \'should match pattern "';
            if (h) {
              s += "' + " + d + " + '";
            } else {
              s += '' + r.util.escapeQuotes(n);
            }
            s += '"\' ';
          }
          if (r.opts.verbose) {
            s += ' , schema:  ';
            if (h) {
              s += 'validate.schema' + l;
            } else {
              s += '' + r.util.toQuotedString(n);
            }
            s +=
              '         , parentSchema: validate.schema' +
              r.schemaPath +
              ' , data: ' +
              c +
              ' ';
          }
          s += ' } ';
        } else {
          s += ' {} ';
        }
        var m = s;
        s = p.pop();
        if (!r.compositeRule && u) {
          if (r.async) {
            s += ' throw new ValidationError([' + m + ']); ';
          } else {
            s += ' validate.errors = [' + m + ']; return false; ';
          }
        } else {
          s +=
            ' var err = ' +
            m +
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        s += '} ';
        if (u) {
          s += ' else { ';
        }
        return s;
      };
    },
    81175: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'errs__' + i;
        var d = r.util.copy(r);
        var v = '';
        d.level++;
        var p = 'valid' + d.level;
        var m = 'key' + i,
          y = 'idx' + i,
          g = (d.dataLevel = r.dataLevel + 1),
          P = 'data' + g,
          E = 'dataProperties' + i;
        var w = Object.keys(n || {}).filter(k),
          b = r.schema.patternProperties || {},
          S = Object.keys(b).filter(k),
          _ = r.schema.additionalProperties,
          F = w.length || S.length,
          $ = _ === false,
          x = typeof _ == 'object' && Object.keys(_).length,
          R = r.opts.removeAdditional,
          D = $ || x || R,
          j = r.opts.ownProperties,
          O = r.baseId;
        var I = r.schema.required;
        if (I && !(r.opts.$data && I.$data) && I.length < r.opts.loopRequired) {
          var A = r.util.toHash(I);
        }
        function k(e) {
          return e !== '__proto__';
        }
        s += 'var ' + h + ' = errors;var ' + p + ' = true;';
        if (j) {
          s += ' var ' + E + ' = undefined;';
        }
        if (D) {
          if (j) {
            s +=
              ' ' +
              E +
              ' = ' +
              E +
              ' || Object.keys(' +
              c +
              '); for (var ' +
              y +
              '=0; ' +
              y +
              '<' +
              E +
              '.length; ' +
              y +
              '++) { var ' +
              m +
              ' = ' +
              E +
              '[' +
              y +
              ']; ';
          } else {
            s += ' for (var ' + m + ' in ' + c + ') { ';
          }
          if (F) {
            s += ' var isAdditional' + i + ' = !(false ';
            if (w.length) {
              if (w.length > 8) {
                s += ' || validate.schema' + l + '.hasOwnProperty(' + m + ') ';
              } else {
                var C = w;
                if (C) {
                  var L,
                    N = -1,
                    z = C.length - 1;
                  while (N < z) {
                    L = C[(N += 1)];
                    s += ' || ' + m + ' == ' + r.util.toQuotedString(L) + ' ';
                  }
                }
              }
            }
            if (S.length) {
              var T = S;
              if (T) {
                var q,
                  Q = -1,
                  V = T.length - 1;
                while (Q < V) {
                  q = T[(Q += 1)];
                  s += ' || ' + r.usePattern(q) + '.test(' + m + ') ';
                }
              }
            }
            s += ' ); if (isAdditional' + i + ') { ';
          }
          if (R == 'all') {
            s += ' delete ' + c + '[' + m + ']; ';
          } else {
            var U = r.errorPath;
            var H = "' + " + m + " + '";
            if (r.opts._errorDataPathProperty) {
              r.errorPath = r.util.getPathExpr(r.errorPath, m, r.opts.jsonPointers);
            }
            if ($) {
              if (R) {
                s += ' delete ' + c + '[' + m + ']; ';
              } else {
                s += ' ' + p + ' = false; ';
                var M = f;
                f = r.errSchemaPath + '/additionalProperties';
                var K = K || [];
                K.push(s);
                s = '';
                if (r.createErrors !== false) {
                  s +=
                    " { keyword: '" +
                    'additionalProperties' +
                    "' , dataPath: (dataPath || '') + " +
                    r.errorPath +
                    ' , schemaPath: ' +
                    r.util.toQuotedString(f) +
                    " , params: { additionalProperty: '" +
                    H +
                    "' } ";
                  if (r.opts.messages !== false) {
                    s += " , message: '";
                    if (r.opts._errorDataPathProperty) {
                      s += 'is an invalid additional property';
                    } else {
                      s += 'should NOT have additional properties';
                    }
                    s += "' ";
                  }
                  if (r.opts.verbose) {
                    s +=
                      ' , schema: false , parentSchema: validate.schema' +
                      r.schemaPath +
                      ' , data: ' +
                      c +
                      ' ';
                  }
                  s += ' } ';
                } else {
                  s += ' {} ';
                }
                var B = s;
                s = K.pop();
                if (!r.compositeRule && u) {
                  if (r.async) {
                    s += ' throw new ValidationError([' + B + ']); ';
                  } else {
                    s += ' validate.errors = [' + B + ']; return false; ';
                  }
                } else {
                  s +=
                    ' var err = ' +
                    B +
                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                }
                f = M;
                if (u) {
                  s += ' break; ';
                }
              }
            } else if (x) {
              if (R == 'failing') {
                s += ' var ' + h + ' = errors;  ';
                var J = r.compositeRule;
                r.compositeRule = d.compositeRule = true;
                d.schema = _;
                d.schemaPath = r.schemaPath + '.additionalProperties';
                d.errSchemaPath = r.errSchemaPath + '/additionalProperties';
                d.errorPath = r.opts._errorDataPathProperty
                  ? r.errorPath
                  : r.util.getPathExpr(r.errorPath, m, r.opts.jsonPointers);
                var Z = c + '[' + m + ']';
                d.dataPathArr[g] = m;
                var G = r.validate(d);
                d.baseId = O;
                if (r.util.varOccurences(G, P) < 2) {
                  s += ' ' + r.util.varReplace(G, P, Z) + ' ';
                } else {
                  s += ' var ' + P + ' = ' + Z + '; ' + G + ' ';
                }
                s +=
                  ' if (!' +
                  p +
                  ') { errors = ' +
                  h +
                  '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' +
                  c +
                  '[' +
                  m +
                  ']; }  ';
                r.compositeRule = d.compositeRule = J;
              } else {
                d.schema = _;
                d.schemaPath = r.schemaPath + '.additionalProperties';
                d.errSchemaPath = r.errSchemaPath + '/additionalProperties';
                d.errorPath = r.opts._errorDataPathProperty
                  ? r.errorPath
                  : r.util.getPathExpr(r.errorPath, m, r.opts.jsonPointers);
                var Z = c + '[' + m + ']';
                d.dataPathArr[g] = m;
                var G = r.validate(d);
                d.baseId = O;
                if (r.util.varOccurences(G, P) < 2) {
                  s += ' ' + r.util.varReplace(G, P, Z) + ' ';
                } else {
                  s += ' var ' + P + ' = ' + Z + '; ' + G + ' ';
                }
                if (u) {
                  s += ' if (!' + p + ') break; ';
                }
              }
            }
            r.errorPath = U;
          }
          if (F) {
            s += ' } ';
          }
          s += ' }  ';
          if (u) {
            s += ' if (' + p + ') { ';
            v += '}';
          }
        }
        var Y = r.opts.useDefaults && !r.compositeRule;
        if (w.length) {
          var W = w;
          if (W) {
            var L,
              X = -1,
              ee = W.length - 1;
            while (X < ee) {
              L = W[(X += 1)];
              var re = n[L];
              if (
                r.opts.strictKeywords
                  ? (typeof re == 'object' && Object.keys(re).length > 0) ||
                    re === false
                  : r.util.schemaHasRules(re, r.RULES.all)
              ) {
                var ae = r.util.getProperty(L),
                  Z = c + ae,
                  te = Y && re.default !== undefined;
                d.schema = re;
                d.schemaPath = l + ae;
                d.errSchemaPath = f + '/' + r.util.escapeFragment(L);
                d.errorPath = r.util.getPath(r.errorPath, L, r.opts.jsonPointers);
                d.dataPathArr[g] = r.util.toQuotedString(L);
                var G = r.validate(d);
                d.baseId = O;
                if (r.util.varOccurences(G, P) < 2) {
                  G = r.util.varReplace(G, P, Z);
                  var se = Z;
                } else {
                  var se = P;
                  s += ' var ' + P + ' = ' + Z + '; ';
                }
                if (te) {
                  s += ' ' + G + ' ';
                } else {
                  if (A && A[L]) {
                    s += ' if ( ' + se + ' === undefined ';
                    if (j) {
                      s +=
                        ' || ! Object.prototype.hasOwnProperty.call(' +
                        c +
                        ", '" +
                        r.util.escapeQuotes(L) +
                        "') ";
                    }
                    s += ') { ' + p + ' = false; ';
                    var U = r.errorPath,
                      M = f,
                      ie = r.util.escapeQuotes(L);
                    if (r.opts._errorDataPathProperty) {
                      r.errorPath = r.util.getPath(U, L, r.opts.jsonPointers);
                    }
                    f = r.errSchemaPath + '/required';
                    var K = K || [];
                    K.push(s);
                    s = '';
                    if (r.createErrors !== false) {
                      s +=
                        " { keyword: '" +
                        'required' +
                        "' , dataPath: (dataPath || '') + " +
                        r.errorPath +
                        ' , schemaPath: ' +
                        r.util.toQuotedString(f) +
                        " , params: { missingProperty: '" +
                        ie +
                        "' } ";
                      if (r.opts.messages !== false) {
                        s += " , message: '";
                        if (r.opts._errorDataPathProperty) {
                          s += 'is a required property';
                        } else {
                          s += "should have required property \\'" + ie + "\\'";
                        }
                        s += "' ";
                      }
                      if (r.opts.verbose) {
                        s +=
                          ' , schema: validate.schema' +
                          l +
                          ' , parentSchema: validate.schema' +
                          r.schemaPath +
                          ' , data: ' +
                          c +
                          ' ';
                      }
                      s += ' } ';
                    } else {
                      s += ' {} ';
                    }
                    var B = s;
                    s = K.pop();
                    if (!r.compositeRule && u) {
                      if (r.async) {
                        s += ' throw new ValidationError([' + B + ']); ';
                      } else {
                        s += ' validate.errors = [' + B + ']; return false; ';
                      }
                    } else {
                      s +=
                        ' var err = ' +
                        B +
                        ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                    }
                    f = M;
                    r.errorPath = U;
                    s += ' } else { ';
                  } else {
                    if (u) {
                      s += ' if ( ' + se + ' === undefined ';
                      if (j) {
                        s +=
                          ' || ! Object.prototype.hasOwnProperty.call(' +
                          c +
                          ", '" +
                          r.util.escapeQuotes(L) +
                          "') ";
                      }
                      s += ') { ' + p + ' = true; } else { ';
                    } else {
                      s += ' if (' + se + ' !== undefined ';
                      if (j) {
                        s +=
                          ' &&   Object.prototype.hasOwnProperty.call(' +
                          c +
                          ", '" +
                          r.util.escapeQuotes(L) +
                          "') ";
                      }
                      s += ' ) { ';
                    }
                  }
                  s += ' ' + G + ' } ';
                }
              }
              if (u) {
                s += ' if (' + p + ') { ';
                v += '}';
              }
            }
          }
        }
        if (S.length) {
          var oe = S;
          if (oe) {
            var q,
              ne = -1,
              le = oe.length - 1;
            while (ne < le) {
              q = oe[(ne += 1)];
              var re = b[q];
              if (
                r.opts.strictKeywords
                  ? (typeof re == 'object' && Object.keys(re).length > 0) ||
                    re === false
                  : r.util.schemaHasRules(re, r.RULES.all)
              ) {
                d.schema = re;
                d.schemaPath =
                  r.schemaPath + '.patternProperties' + r.util.getProperty(q);
                d.errSchemaPath =
                  r.errSchemaPath + '/patternProperties/' + r.util.escapeFragment(q);
                if (j) {
                  s +=
                    ' ' +
                    E +
                    ' = ' +
                    E +
                    ' || Object.keys(' +
                    c +
                    '); for (var ' +
                    y +
                    '=0; ' +
                    y +
                    '<' +
                    E +
                    '.length; ' +
                    y +
                    '++) { var ' +
                    m +
                    ' = ' +
                    E +
                    '[' +
                    y +
                    ']; ';
                } else {
                  s += ' for (var ' + m + ' in ' + c + ') { ';
                }
                s += ' if (' + r.usePattern(q) + '.test(' + m + ')) { ';
                d.errorPath = r.util.getPathExpr(r.errorPath, m, r.opts.jsonPointers);
                var Z = c + '[' + m + ']';
                d.dataPathArr[g] = m;
                var G = r.validate(d);
                d.baseId = O;
                if (r.util.varOccurences(G, P) < 2) {
                  s += ' ' + r.util.varReplace(G, P, Z) + ' ';
                } else {
                  s += ' var ' + P + ' = ' + Z + '; ' + G + ' ';
                }
                if (u) {
                  s += ' if (!' + p + ') break; ';
                }
                s += ' } ';
                if (u) {
                  s += ' else ' + p + ' = true; ';
                }
                s += ' }  ';
                if (u) {
                  s += ' if (' + p + ') { ';
                  v += '}';
                }
              }
            }
          }
        }
        if (u) {
          s += ' ' + v + ' if (' + h + ' == errors) {';
        }
        return s;
      };
    },
    58441: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'errs__' + i;
        var d = r.util.copy(r);
        var v = '';
        d.level++;
        var p = 'valid' + d.level;
        s += 'var ' + h + ' = errors;';
        if (
          r.opts.strictKeywords
            ? (typeof n == 'object' && Object.keys(n).length > 0) || n === false
            : r.util.schemaHasRules(n, r.RULES.all)
        ) {
          d.schema = n;
          d.schemaPath = l;
          d.errSchemaPath = f;
          var m = 'key' + i,
            y = 'idx' + i,
            g = 'i' + i,
            P = "' + " + m + " + '",
            E = (d.dataLevel = r.dataLevel + 1),
            w = 'data' + E,
            b = 'dataProperties' + i,
            S = r.opts.ownProperties,
            _ = r.baseId;
          if (S) {
            s += ' var ' + b + ' = undefined; ';
          }
          if (S) {
            s +=
              ' ' +
              b +
              ' = ' +
              b +
              ' || Object.keys(' +
              c +
              '); for (var ' +
              y +
              '=0; ' +
              y +
              '<' +
              b +
              '.length; ' +
              y +
              '++) { var ' +
              m +
              ' = ' +
              b +
              '[' +
              y +
              ']; ';
          } else {
            s += ' for (var ' + m + ' in ' + c + ') { ';
          }
          s += ' var startErrs' + i + ' = errors; ';
          var F = m;
          var $ = r.compositeRule;
          r.compositeRule = d.compositeRule = true;
          var x = r.validate(d);
          d.baseId = _;
          if (r.util.varOccurences(x, w) < 2) {
            s += ' ' + r.util.varReplace(x, w, F) + ' ';
          } else {
            s += ' var ' + w + ' = ' + F + '; ' + x + ' ';
          }
          r.compositeRule = d.compositeRule = $;
          s +=
            ' if (!' +
            p +
            ') { for (var ' +
            g +
            '=startErrs' +
            i +
            '; ' +
            g +
            '<errors; ' +
            g +
            '++) { vErrors[' +
            g +
            '].propertyName = ' +
            m +
            '; }   var err =   ';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              'propertyNames' +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              " , params: { propertyName: '" +
              P +
              "' } ";
            if (r.opts.messages !== false) {
              s += " , message: 'property name \\'" + P + "\\' is invalid' ";
            }
            if (r.opts.verbose) {
              s +=
                ' , schema: validate.schema' +
                l +
                ' , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                c +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          s +=
            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          if (!r.compositeRule && u) {
            if (r.async) {
              s += ' throw new ValidationError(vErrors); ';
            } else {
              s += ' validate.errors = vErrors; return false; ';
            }
          }
          if (u) {
            s += ' break; ';
          }
          s += ' } }';
        }
        if (u) {
          s += ' ' + v + ' if (' + h + ' == errors) {';
        }
        return s;
      };
    },
    62392: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.errSchemaPath + '/' + a;
        var f = !r.opts.allErrors;
        var u = 'data' + (o || '');
        var c = 'valid' + i;
        var h, d;
        if (n == '#' || n == '#/') {
          if (r.isRoot) {
            h = r.async;
            d = 'validate';
          } else {
            h = r.root.schema.$async === true;
            d = 'root.refVal[0]';
          }
        } else {
          var v = r.resolveRef(r.baseId, n, r.isRoot);
          if (v === undefined) {
            var p = r.MissingRefError.message(r.baseId, n);
            if (r.opts.missingRefs == 'fail') {
              r.logger.error(p);
              var m = m || [];
              m.push(s);
              s = '';
              if (r.createErrors !== false) {
                s +=
                  " { keyword: '" +
                  '$ref' +
                  "' , dataPath: (dataPath || '') + " +
                  r.errorPath +
                  ' , schemaPath: ' +
                  r.util.toQuotedString(l) +
                  " , params: { ref: '" +
                  r.util.escapeQuotes(n) +
                  "' } ";
                if (r.opts.messages !== false) {
                  s +=
                    " , message: 'can\\'t resolve reference " +
                    r.util.escapeQuotes(n) +
                    "' ";
                }
                if (r.opts.verbose) {
                  s +=
                    ' , schema: ' +
                    r.util.toQuotedString(n) +
                    ' , parentSchema: validate.schema' +
                    r.schemaPath +
                    ' , data: ' +
                    u +
                    ' ';
                }
                s += ' } ';
              } else {
                s += ' {} ';
              }
              var y = s;
              s = m.pop();
              if (!r.compositeRule && f) {
                if (r.async) {
                  s += ' throw new ValidationError([' + y + ']); ';
                } else {
                  s += ' validate.errors = [' + y + ']; return false; ';
                }
              } else {
                s +=
                  ' var err = ' +
                  y +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              if (f) {
                s += ' if (false) { ';
              }
            } else if (r.opts.missingRefs == 'ignore') {
              r.logger.warn(p);
              if (f) {
                s += ' if (true) { ';
              }
            } else {
              throw new r.MissingRefError(r.baseId, n, p);
            }
          } else if (v.inline) {
            var g = r.util.copy(r);
            g.level++;
            var P = 'valid' + g.level;
            g.schema = v.schema;
            g.schemaPath = '';
            g.errSchemaPath = n;
            var E = r.validate(g).replace(/validate\.schema/g, v.code);
            s += ' ' + E + ' ';
            if (f) {
              s += ' if (' + P + ') { ';
            }
          } else {
            h = v.$async === true || (r.async && v.$async !== false);
            d = v.code;
          }
        }
        if (d) {
          var m = m || [];
          m.push(s);
          s = '';
          if (r.opts.passContext) {
            s += ' ' + d + '.call(this, ';
          } else {
            s += ' ' + d + '( ';
          }
          s += ' ' + u + ", (dataPath || '')";
          if (r.errorPath != '""') {
            s += ' + ' + r.errorPath;
          }
          var w = o ? 'data' + (o - 1 || '') : 'parentData',
            b = o ? r.dataPathArr[o] : 'parentDataProperty';
          s += ' , ' + w + ' , ' + b + ', rootData)  ';
          var S = s;
          s = m.pop();
          if (h) {
            if (!r.async) throw new Error('async schema referenced by sync schema');
            if (f) {
              s += ' var ' + c + '; ';
            }
            s += ' try { await ' + S + '; ';
            if (f) {
              s += ' ' + c + ' = true; ';
            }
            s +=
              ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
            if (f) {
              s += ' ' + c + ' = false; ';
            }
            s += ' } ';
            if (f) {
              s += ' if (' + c + ') { ';
            }
          } else {
            s +=
              ' if (!' +
              S +
              ') { if (vErrors === null) vErrors = ' +
              d +
              '.errors; else vErrors = vErrors.concat(' +
              d +
              '.errors); errors = vErrors.length; } ';
            if (f) {
              s += ' else { ';
            }
          }
        }
        return s;
      };
    },
    71287: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        var p = 'schema' + i;
        if (!d) {
          if (
            n.length < r.opts.loopRequired &&
            r.schema.properties &&
            Object.keys(r.schema.properties).length
          ) {
            var m = [];
            var y = n;
            if (y) {
              var g,
                P = -1,
                E = y.length - 1;
              while (P < E) {
                g = y[(P += 1)];
                var w = r.schema.properties[g];
                if (
                  !(
                    w &&
                    (r.opts.strictKeywords
                      ? (typeof w == 'object' && Object.keys(w).length > 0) ||
                        w === false
                      : r.util.schemaHasRules(w, r.RULES.all))
                  )
                ) {
                  m[m.length] = g;
                }
              }
            }
          } else {
            var m = n;
          }
        }
        if (d || m.length) {
          var b = r.errorPath,
            S = d || m.length >= r.opts.loopRequired,
            _ = r.opts.ownProperties;
          if (u) {
            s += ' var missing' + i + '; ';
            if (S) {
              if (!d) {
                s += ' var ' + p + ' = validate.schema' + l + '; ';
              }
              var F = 'i' + i,
                $ = 'schema' + i + '[' + F + ']',
                x = "' + " + $ + " + '";
              if (r.opts._errorDataPathProperty) {
                r.errorPath = r.util.getPathExpr(b, $, r.opts.jsonPointers);
              }
              s += ' var ' + h + ' = true; ';
              if (d) {
                s +=
                  ' if (schema' +
                  i +
                  ' === undefined) ' +
                  h +
                  ' = true; else if (!Array.isArray(schema' +
                  i +
                  ')) ' +
                  h +
                  ' = false; else {';
              }
              s +=
                ' for (var ' +
                F +
                ' = 0; ' +
                F +
                ' < ' +
                p +
                '.length; ' +
                F +
                '++) { ' +
                h +
                ' = ' +
                c +
                '[' +
                p +
                '[' +
                F +
                ']] !== undefined ';
              if (_) {
                s +=
                  ' &&   Object.prototype.hasOwnProperty.call(' +
                  c +
                  ', ' +
                  p +
                  '[' +
                  F +
                  ']) ';
              }
              s += '; if (!' + h + ') break; } ';
              if (d) {
                s += '  }  ';
              }
              s += '  if (!' + h + ') {   ';
              var R = R || [];
              R.push(s);
              s = '';
              if (r.createErrors !== false) {
                s +=
                  " { keyword: '" +
                  'required' +
                  "' , dataPath: (dataPath || '') + " +
                  r.errorPath +
                  ' , schemaPath: ' +
                  r.util.toQuotedString(f) +
                  " , params: { missingProperty: '" +
                  x +
                  "' } ";
                if (r.opts.messages !== false) {
                  s += " , message: '";
                  if (r.opts._errorDataPathProperty) {
                    s += 'is a required property';
                  } else {
                    s += "should have required property \\'" + x + "\\'";
                  }
                  s += "' ";
                }
                if (r.opts.verbose) {
                  s +=
                    ' , schema: validate.schema' +
                    l +
                    ' , parentSchema: validate.schema' +
                    r.schemaPath +
                    ' , data: ' +
                    c +
                    ' ';
                }
                s += ' } ';
              } else {
                s += ' {} ';
              }
              var D = s;
              s = R.pop();
              if (!r.compositeRule && u) {
                if (r.async) {
                  s += ' throw new ValidationError([' + D + ']); ';
                } else {
                  s += ' validate.errors = [' + D + ']; return false; ';
                }
              } else {
                s +=
                  ' var err = ' +
                  D +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              s += ' } else { ';
            } else {
              s += ' if ( ';
              var j = m;
              if (j) {
                var O,
                  F = -1,
                  I = j.length - 1;
                while (F < I) {
                  O = j[(F += 1)];
                  if (F) {
                    s += ' || ';
                  }
                  var A = r.util.getProperty(O),
                    k = c + A;
                  s += ' ( ( ' + k + ' === undefined ';
                  if (_) {
                    s +=
                      ' || ! Object.prototype.hasOwnProperty.call(' +
                      c +
                      ", '" +
                      r.util.escapeQuotes(O) +
                      "') ";
                  }
                  s +=
                    ') && (missing' +
                    i +
                    ' = ' +
                    r.util.toQuotedString(r.opts.jsonPointers ? O : A) +
                    ') ) ';
                }
              }
              s += ') {  ';
              var $ = 'missing' + i,
                x = "' + " + $ + " + '";
              if (r.opts._errorDataPathProperty) {
                r.errorPath = r.opts.jsonPointers
                  ? r.util.getPathExpr(b, $, true)
                  : b + ' + ' + $;
              }
              var R = R || [];
              R.push(s);
              s = '';
              if (r.createErrors !== false) {
                s +=
                  " { keyword: '" +
                  'required' +
                  "' , dataPath: (dataPath || '') + " +
                  r.errorPath +
                  ' , schemaPath: ' +
                  r.util.toQuotedString(f) +
                  " , params: { missingProperty: '" +
                  x +
                  "' } ";
                if (r.opts.messages !== false) {
                  s += " , message: '";
                  if (r.opts._errorDataPathProperty) {
                    s += 'is a required property';
                  } else {
                    s += "should have required property \\'" + x + "\\'";
                  }
                  s += "' ";
                }
                if (r.opts.verbose) {
                  s +=
                    ' , schema: validate.schema' +
                    l +
                    ' , parentSchema: validate.schema' +
                    r.schemaPath +
                    ' , data: ' +
                    c +
                    ' ';
                }
                s += ' } ';
              } else {
                s += ' {} ';
              }
              var D = s;
              s = R.pop();
              if (!r.compositeRule && u) {
                if (r.async) {
                  s += ' throw new ValidationError([' + D + ']); ';
                } else {
                  s += ' validate.errors = [' + D + ']; return false; ';
                }
              } else {
                s +=
                  ' var err = ' +
                  D +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              s += ' } else { ';
            }
          } else {
            if (S) {
              if (!d) {
                s += ' var ' + p + ' = validate.schema' + l + '; ';
              }
              var F = 'i' + i,
                $ = 'schema' + i + '[' + F + ']',
                x = "' + " + $ + " + '";
              if (r.opts._errorDataPathProperty) {
                r.errorPath = r.util.getPathExpr(b, $, r.opts.jsonPointers);
              }
              if (d) {
                s += ' if (' + p + ' && !Array.isArray(' + p + ')) {  var err =   ';
                if (r.createErrors !== false) {
                  s +=
                    " { keyword: '" +
                    'required' +
                    "' , dataPath: (dataPath || '') + " +
                    r.errorPath +
                    ' , schemaPath: ' +
                    r.util.toQuotedString(f) +
                    " , params: { missingProperty: '" +
                    x +
                    "' } ";
                  if (r.opts.messages !== false) {
                    s += " , message: '";
                    if (r.opts._errorDataPathProperty) {
                      s += 'is a required property';
                    } else {
                      s += "should have required property \\'" + x + "\\'";
                    }
                    s += "' ";
                  }
                  if (r.opts.verbose) {
                    s +=
                      ' , schema: validate.schema' +
                      l +
                      ' , parentSchema: validate.schema' +
                      r.schemaPath +
                      ' , data: ' +
                      c +
                      ' ';
                  }
                  s += ' } ';
                } else {
                  s += ' {} ';
                }
                s +=
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' +
                  p +
                  ' !== undefined) { ';
              }
              s +=
                ' for (var ' +
                F +
                ' = 0; ' +
                F +
                ' < ' +
                p +
                '.length; ' +
                F +
                '++) { if (' +
                c +
                '[' +
                p +
                '[' +
                F +
                ']] === undefined ';
              if (_) {
                s +=
                  ' || ! Object.prototype.hasOwnProperty.call(' +
                  c +
                  ', ' +
                  p +
                  '[' +
                  F +
                  ']) ';
              }
              s += ') {  var err =   ';
              if (r.createErrors !== false) {
                s +=
                  " { keyword: '" +
                  'required' +
                  "' , dataPath: (dataPath || '') + " +
                  r.errorPath +
                  ' , schemaPath: ' +
                  r.util.toQuotedString(f) +
                  " , params: { missingProperty: '" +
                  x +
                  "' } ";
                if (r.opts.messages !== false) {
                  s += " , message: '";
                  if (r.opts._errorDataPathProperty) {
                    s += 'is a required property';
                  } else {
                    s += "should have required property \\'" + x + "\\'";
                  }
                  s += "' ";
                }
                if (r.opts.verbose) {
                  s +=
                    ' , schema: validate.schema' +
                    l +
                    ' , parentSchema: validate.schema' +
                    r.schemaPath +
                    ' , data: ' +
                    c +
                    ' ';
                }
                s += ' } ';
              } else {
                s += ' {} ';
              }
              s +=
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
              if (d) {
                s += '  }  ';
              }
            } else {
              var C = m;
              if (C) {
                var O,
                  L = -1,
                  N = C.length - 1;
                while (L < N) {
                  O = C[(L += 1)];
                  var A = r.util.getProperty(O),
                    x = r.util.escapeQuotes(O),
                    k = c + A;
                  if (r.opts._errorDataPathProperty) {
                    r.errorPath = r.util.getPath(b, O, r.opts.jsonPointers);
                  }
                  s += ' if ( ' + k + ' === undefined ';
                  if (_) {
                    s +=
                      ' || ! Object.prototype.hasOwnProperty.call(' +
                      c +
                      ", '" +
                      r.util.escapeQuotes(O) +
                      "') ";
                  }
                  s += ') {  var err =   ';
                  if (r.createErrors !== false) {
                    s +=
                      " { keyword: '" +
                      'required' +
                      "' , dataPath: (dataPath || '') + " +
                      r.errorPath +
                      ' , schemaPath: ' +
                      r.util.toQuotedString(f) +
                      " , params: { missingProperty: '" +
                      x +
                      "' } ";
                    if (r.opts.messages !== false) {
                      s += " , message: '";
                      if (r.opts._errorDataPathProperty) {
                        s += 'is a required property';
                      } else {
                        s += "should have required property \\'" + x + "\\'";
                      }
                      s += "' ";
                    }
                    if (r.opts.verbose) {
                      s +=
                        ' , schema: validate.schema' +
                        l +
                        ' , parentSchema: validate.schema' +
                        r.schemaPath +
                        ' , data: ' +
                        c +
                        ' ';
                    }
                    s += ' } ';
                  } else {
                    s += ' {} ';
                  }
                  s +=
                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
                }
              }
            }
          }
          r.errorPath = b;
        } else if (u) {
          s += ' if (true) {';
        }
        return s;
      };
    },
    3603: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = ' ';
        var i = r.level;
        var o = r.dataLevel;
        var n = r.schema[a];
        var l = r.schemaPath + r.util.getProperty(a);
        var f = r.errSchemaPath + '/' + a;
        var u = !r.opts.allErrors;
        var c = 'data' + (o || '');
        var h = 'valid' + i;
        var d = r.opts.$data && n && n.$data,
          v;
        if (d) {
          s +=
            ' var schema' +
            i +
            ' = ' +
            r.util.getData(n.$data, o, r.dataPathArr) +
            '; ';
          v = 'schema' + i;
        } else {
          v = n;
        }
        if ((n || d) && r.opts.uniqueItems !== false) {
          if (d) {
            s +=
              ' var ' +
              h +
              '; if (' +
              v +
              ' === false || ' +
              v +
              ' === undefined) ' +
              h +
              ' = true; else if (typeof ' +
              v +
              " != 'boolean') " +
              h +
              ' = false; else { ';
          }
          s += ' var i = ' + c + '.length , ' + h + ' = true , j; if (i > 1) { ';
          var p = r.schema.items && r.schema.items.type,
            m = Array.isArray(p);
          if (
            !p ||
            p == 'object' ||
            p == 'array' ||
            (m && (p.indexOf('object') >= 0 || p.indexOf('array') >= 0))
          ) {
            s +=
              ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' +
              c +
              '[i], ' +
              c +
              '[j])) { ' +
              h +
              ' = false; break outer; } } } ';
          } else {
            s += ' var itemIndices = {}, item; for (;i--;) { var item = ' + c + '[i]; ';
            var y = 'checkDataType' + (m ? 's' : '');
            s +=
              ' if (' +
              r.util[y](p, 'item', r.opts.strictNumbers, true) +
              ') continue; ';
            if (m) {
              s += " if (typeof item == 'string') item = '\"' + item; ";
            }
            s +=
              " if (typeof itemIndices[item] == 'number') { " +
              h +
              ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
          }
          s += ' } ';
          if (d) {
            s += '  }  ';
          }
          s += ' if (!' + h + ') {   ';
          var g = g || [];
          g.push(s);
          s = '';
          if (r.createErrors !== false) {
            s +=
              " { keyword: '" +
              'uniqueItems' +
              "' , dataPath: (dataPath || '') + " +
              r.errorPath +
              ' , schemaPath: ' +
              r.util.toQuotedString(f) +
              ' , params: { i: i, j: j } ';
            if (r.opts.messages !== false) {
              s +=
                " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ";
            }
            if (r.opts.verbose) {
              s += ' , schema:  ';
              if (d) {
                s += 'validate.schema' + l;
              } else {
                s += '' + n;
              }
              s +=
                '         , parentSchema: validate.schema' +
                r.schemaPath +
                ' , data: ' +
                c +
                ' ';
            }
            s += ' } ';
          } else {
            s += ' {} ';
          }
          var P = s;
          s = g.pop();
          if (!r.compositeRule && u) {
            if (r.async) {
              s += ' throw new ValidationError([' + P + ']); ';
            } else {
              s += ' validate.errors = [' + P + ']; return false; ';
            }
          } else {
            s +=
              ' var err = ' +
              P +
              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          s += ' } ';
          if (u) {
            s += ' else { ';
          }
        } else {
          if (u) {
            s += ' if (true) { ';
          }
        }
        return s;
      };
    },
    19508: (e) => {
      'use strict';
      e.exports = function e(r, a, t) {
        var s = '';
        var i = r.schema.$async === true,
          o = r.util.schemaHasRulesExcept(r.schema, r.RULES.all, '$ref'),
          n = r.self._getId(r.schema);
        if (r.opts.strictKeywords) {
          var l = r.util.schemaUnknownRules(r.schema, r.RULES.keywords);
          if (l) {
            var f = 'unknown keyword: ' + l;
            if (r.opts.strictKeywords === 'log') r.logger.warn(f);
            else throw new Error(f);
          }
        }
        if (r.isTop) {
          s += ' var validate = ';
          if (i) {
            r.async = true;
            s += 'async ';
          }
          s +=
            "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ";
          if (n && (r.opts.sourceCode || r.opts.processCode)) {
            s += ' ' + ('/*# sourceURL=' + n + ' */') + ' ';
          }
        }
        if (typeof r.schema == 'boolean' || !(o || r.schema.$ref)) {
          var a = 'false schema';
          var u = r.level;
          var c = r.dataLevel;
          var h = r.schema[a];
          var d = r.schemaPath + r.util.getProperty(a);
          var v = r.errSchemaPath + '/' + a;
          var p = !r.opts.allErrors;
          var m;
          var y = 'data' + (c || '');
          var g = 'valid' + u;
          if (r.schema === false) {
            if (r.isTop) {
              p = true;
            } else {
              s += ' var ' + g + ' = false; ';
            }
            var P = P || [];
            P.push(s);
            s = '';
            if (r.createErrors !== false) {
              s +=
                " { keyword: '" +
                (m || 'false schema') +
                "' , dataPath: (dataPath || '') + " +
                r.errorPath +
                ' , schemaPath: ' +
                r.util.toQuotedString(v) +
                ' , params: {} ';
              if (r.opts.messages !== false) {
                s += " , message: 'boolean schema is false' ";
              }
              if (r.opts.verbose) {
                s +=
                  ' , schema: false , parentSchema: validate.schema' +
                  r.schemaPath +
                  ' , data: ' +
                  y +
                  ' ';
              }
              s += ' } ';
            } else {
              s += ' {} ';
            }
            var E = s;
            s = P.pop();
            if (!r.compositeRule && p) {
              if (r.async) {
                s += ' throw new ValidationError([' + E + ']); ';
              } else {
                s += ' validate.errors = [' + E + ']; return false; ';
              }
            } else {
              s +=
                ' var err = ' +
                E +
                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          } else {
            if (r.isTop) {
              if (i) {
                s += ' return data; ';
              } else {
                s += ' validate.errors = null; return true; ';
              }
            } else {
              s += ' var ' + g + ' = true; ';
            }
          }
          if (r.isTop) {
            s += ' }; return validate; ';
          }
          return s;
        }
        if (r.isTop) {
          var w = r.isTop,
            u = (r.level = 0),
            c = (r.dataLevel = 0),
            y = 'data';
          r.rootId = r.resolve.fullPath(r.self._getId(r.root.schema));
          r.baseId = r.baseId || r.rootId;
          delete r.isTop;
          r.dataPathArr = [''];
          if (
            r.schema.default !== undefined &&
            r.opts.useDefaults &&
            r.opts.strictDefaults
          ) {
            var b = 'default is ignored in the schema root';
            if (r.opts.strictDefaults === 'log') r.logger.warn(b);
            else throw new Error(b);
          }
          s += ' var vErrors = null; ';
          s += ' var errors = 0;     ';
          s += ' if (rootData === undefined) rootData = data; ';
        } else {
          var u = r.level,
            c = r.dataLevel,
            y = 'data' + (c || '');
          if (n) r.baseId = r.resolve.url(r.baseId, n);
          if (i && !r.async) throw new Error('async schema in sync schema');
          s += ' var errs_' + u + ' = errors;';
        }
        var g = 'valid' + u,
          p = !r.opts.allErrors,
          S = '',
          _ = '';
        var m;
        var F = r.schema.type,
          $ = Array.isArray(F);
        if (F && r.opts.nullable && r.schema.nullable === true) {
          if ($) {
            if (F.indexOf('null') == -1) F = F.concat('null');
          } else if (F != 'null') {
            F = [F, 'null'];
            $ = true;
          }
        }
        if ($ && F.length == 1) {
          F = F[0];
          $ = false;
        }
        if (r.schema.$ref && o) {
          if (r.opts.extendRefs == 'fail') {
            throw new Error(
              '$ref: validation keywords used in schema at path "' +
                r.errSchemaPath +
                '" (see option extendRefs)'
            );
          } else if (r.opts.extendRefs !== true) {
            o = false;
            r.logger.warn(
              '$ref: keywords ignored in schema at path "' + r.errSchemaPath + '"'
            );
          }
        }
        if (r.schema.$comment && r.opts.$comment) {
          s += ' ' + r.RULES.all.$comment.code(r, '$comment');
        }
        if (F) {
          if (r.opts.coerceTypes) {
            var x = r.util.coerceToTypes(r.opts.coerceTypes, F);
          }
          var R = r.RULES.types[F];
          if (x || $ || R === true || (R && !re(R))) {
            var d = r.schemaPath + '.type',
              v = r.errSchemaPath + '/type';
            var d = r.schemaPath + '.type',
              v = r.errSchemaPath + '/type',
              D = $ ? 'checkDataTypes' : 'checkDataType';
            s += ' if (' + r.util[D](F, y, r.opts.strictNumbers, true) + ') { ';
            if (x) {
              var j = 'dataType' + u,
                O = 'coerced' + u;
              s += ' var ' + j + ' = typeof ' + y + '; var ' + O + ' = undefined; ';
              if (r.opts.coerceTypes == 'array') {
                s +=
                  ' if (' +
                  j +
                  " == 'object' && Array.isArray(" +
                  y +
                  ') && ' +
                  y +
                  '.length == 1) { ' +
                  y +
                  ' = ' +
                  y +
                  '[0]; ' +
                  j +
                  ' = typeof ' +
                  y +
                  '; if (' +
                  r.util.checkDataType(r.schema.type, y, r.opts.strictNumbers) +
                  ') ' +
                  O +
                  ' = ' +
                  y +
                  '; } ';
              }
              s += ' if (' + O + ' !== undefined) ; ';
              var I = x;
              if (I) {
                var A,
                  k = -1,
                  C = I.length - 1;
                while (k < C) {
                  A = I[(k += 1)];
                  if (A == 'string') {
                    s +=
                      ' else if (' +
                      j +
                      " == 'number' || " +
                      j +
                      " == 'boolean') " +
                      O +
                      " = '' + " +
                      y +
                      '; else if (' +
                      y +
                      ' === null) ' +
                      O +
                      " = ''; ";
                  } else if (A == 'number' || A == 'integer') {
                    s +=
                      ' else if (' +
                      j +
                      " == 'boolean' || " +
                      y +
                      ' === null || (' +
                      j +
                      " == 'string' && " +
                      y +
                      ' && ' +
                      y +
                      ' == +' +
                      y +
                      ' ';
                    if (A == 'integer') {
                      s += ' && !(' + y + ' % 1)';
                    }
                    s += ')) ' + O + ' = +' + y + '; ';
                  } else if (A == 'boolean') {
                    s +=
                      ' else if (' +
                      y +
                      " === 'false' || " +
                      y +
                      ' === 0 || ' +
                      y +
                      ' === null) ' +
                      O +
                      ' = false; else if (' +
                      y +
                      " === 'true' || " +
                      y +
                      ' === 1) ' +
                      O +
                      ' = true; ';
                  } else if (A == 'null') {
                    s +=
                      ' else if (' +
                      y +
                      " === '' || " +
                      y +
                      ' === 0 || ' +
                      y +
                      ' === false) ' +
                      O +
                      ' = null; ';
                  } else if (r.opts.coerceTypes == 'array' && A == 'array') {
                    s +=
                      ' else if (' +
                      j +
                      " == 'string' || " +
                      j +
                      " == 'number' || " +
                      j +
                      " == 'boolean' || " +
                      y +
                      ' == null) ' +
                      O +
                      ' = [' +
                      y +
                      ']; ';
                  }
                }
              }
              s += ' else {   ';
              var P = P || [];
              P.push(s);
              s = '';
              if (r.createErrors !== false) {
                s +=
                  " { keyword: '" +
                  (m || 'type') +
                  "' , dataPath: (dataPath || '') + " +
                  r.errorPath +
                  ' , schemaPath: ' +
                  r.util.toQuotedString(v) +
                  " , params: { type: '";
                if ($) {
                  s += '' + F.join(',');
                } else {
                  s += '' + F;
                }
                s += "' } ";
                if (r.opts.messages !== false) {
                  s += " , message: 'should be ";
                  if ($) {
                    s += '' + F.join(',');
                  } else {
                    s += '' + F;
                  }
                  s += "' ";
                }
                if (r.opts.verbose) {
                  s +=
                    ' , schema: validate.schema' +
                    d +
                    ' , parentSchema: validate.schema' +
                    r.schemaPath +
                    ' , data: ' +
                    y +
                    ' ';
                }
                s += ' } ';
              } else {
                s += ' {} ';
              }
              var E = s;
              s = P.pop();
              if (!r.compositeRule && p) {
                if (r.async) {
                  s += ' throw new ValidationError([' + E + ']); ';
                } else {
                  s += ' validate.errors = [' + E + ']; return false; ';
                }
              } else {
                s +=
                  ' var err = ' +
                  E +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              s += ' } if (' + O + ' !== undefined) {  ';
              var L = c ? 'data' + (c - 1 || '') : 'parentData',
                N = c ? r.dataPathArr[c] : 'parentDataProperty';
              s += ' ' + y + ' = ' + O + '; ';
              if (!c) {
                s += 'if (' + L + ' !== undefined)';
              }
              s += ' ' + L + '[' + N + '] = ' + O + '; } ';
            } else {
              var P = P || [];
              P.push(s);
              s = '';
              if (r.createErrors !== false) {
                s +=
                  " { keyword: '" +
                  (m || 'type') +
                  "' , dataPath: (dataPath || '') + " +
                  r.errorPath +
                  ' , schemaPath: ' +
                  r.util.toQuotedString(v) +
                  " , params: { type: '";
                if ($) {
                  s += '' + F.join(',');
                } else {
                  s += '' + F;
                }
                s += "' } ";
                if (r.opts.messages !== false) {
                  s += " , message: 'should be ";
                  if ($) {
                    s += '' + F.join(',');
                  } else {
                    s += '' + F;
                  }
                  s += "' ";
                }
                if (r.opts.verbose) {
                  s +=
                    ' , schema: validate.schema' +
                    d +
                    ' , parentSchema: validate.schema' +
                    r.schemaPath +
                    ' , data: ' +
                    y +
                    ' ';
                }
                s += ' } ';
              } else {
                s += ' {} ';
              }
              var E = s;
              s = P.pop();
              if (!r.compositeRule && p) {
                if (r.async) {
                  s += ' throw new ValidationError([' + E + ']); ';
                } else {
                  s += ' validate.errors = [' + E + ']; return false; ';
                }
              } else {
                s +=
                  ' var err = ' +
                  E +
                  ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
            }
            s += ' } ';
          }
        }
        if (r.schema.$ref && !o) {
          s += ' ' + r.RULES.all.$ref.code(r, '$ref') + ' ';
          if (p) {
            s += ' } if (errors === ';
            if (w) {
              s += '0';
            } else {
              s += 'errs_' + u;
            }
            s += ') { ';
            _ += '}';
          }
        } else {
          var z = r.RULES;
          if (z) {
            var R,
              T = -1,
              q = z.length - 1;
            while (T < q) {
              R = z[(T += 1)];
              if (re(R)) {
                if (R.type) {
                  s +=
                    ' if (' +
                    r.util.checkDataType(R.type, y, r.opts.strictNumbers) +
                    ') { ';
                }
                if (r.opts.useDefaults) {
                  if (R.type == 'object' && r.schema.properties) {
                    var h = r.schema.properties,
                      Q = Object.keys(h);
                    var V = Q;
                    if (V) {
                      var U,
                        H = -1,
                        M = V.length - 1;
                      while (H < M) {
                        U = V[(H += 1)];
                        var K = h[U];
                        if (K.default !== undefined) {
                          var B = y + r.util.getProperty(U);
                          if (r.compositeRule) {
                            if (r.opts.strictDefaults) {
                              var b = 'default is ignored for: ' + B;
                              if (r.opts.strictDefaults === 'log') r.logger.warn(b);
                              else throw new Error(b);
                            }
                          } else {
                            s += ' if (' + B + ' === undefined ';
                            if (r.opts.useDefaults == 'empty') {
                              s += ' || ' + B + ' === null || ' + B + " === '' ";
                            }
                            s += ' ) ' + B + ' = ';
                            if (r.opts.useDefaults == 'shared') {
                              s += ' ' + r.useDefault(K.default) + ' ';
                            } else {
                              s += ' ' + JSON.stringify(K.default) + ' ';
                            }
                            s += '; ';
                          }
                        }
                      }
                    }
                  } else if (R.type == 'array' && Array.isArray(r.schema.items)) {
                    var J = r.schema.items;
                    if (J) {
                      var K,
                        k = -1,
                        Z = J.length - 1;
                      while (k < Z) {
                        K = J[(k += 1)];
                        if (K.default !== undefined) {
                          var B = y + '[' + k + ']';
                          if (r.compositeRule) {
                            if (r.opts.strictDefaults) {
                              var b = 'default is ignored for: ' + B;
                              if (r.opts.strictDefaults === 'log') r.logger.warn(b);
                              else throw new Error(b);
                            }
                          } else {
                            s += ' if (' + B + ' === undefined ';
                            if (r.opts.useDefaults == 'empty') {
                              s += ' || ' + B + ' === null || ' + B + " === '' ";
                            }
                            s += ' ) ' + B + ' = ';
                            if (r.opts.useDefaults == 'shared') {
                              s += ' ' + r.useDefault(K.default) + ' ';
                            } else {
                              s += ' ' + JSON.stringify(K.default) + ' ';
                            }
                            s += '; ';
                          }
                        }
                      }
                    }
                  }
                }
                var G = R.rules;
                if (G) {
                  var Y,
                    W = -1,
                    X = G.length - 1;
                  while (W < X) {
                    Y = G[(W += 1)];
                    if (ae(Y)) {
                      var ee = Y.code(r, Y.keyword, R.type);
                      if (ee) {
                        s += ' ' + ee + ' ';
                        if (p) {
                          S += '}';
                        }
                      }
                    }
                  }
                }
                if (p) {
                  s += ' ' + S + ' ';
                  S = '';
                }
                if (R.type) {
                  s += ' } ';
                  if (F && F === R.type && !x) {
                    s += ' else { ';
                    var d = r.schemaPath + '.type',
                      v = r.errSchemaPath + '/type';
                    var P = P || [];
                    P.push(s);
                    s = '';
                    if (r.createErrors !== false) {
                      s +=
                        " { keyword: '" +
                        (m || 'type') +
                        "' , dataPath: (dataPath || '') + " +
                        r.errorPath +
                        ' , schemaPath: ' +
                        r.util.toQuotedString(v) +
                        " , params: { type: '";
                      if ($) {
                        s += '' + F.join(',');
                      } else {
                        s += '' + F;
                      }
                      s += "' } ";
                      if (r.opts.messages !== false) {
                        s += " , message: 'should be ";
                        if ($) {
                          s += '' + F.join(',');
                        } else {
                          s += '' + F;
                        }
                        s += "' ";
                      }
                      if (r.opts.verbose) {
                        s +=
                          ' , schema: validate.schema' +
                          d +
                          ' , parentSchema: validate.schema' +
                          r.schemaPath +
                          ' , data: ' +
                          y +
                          ' ';
                      }
                      s += ' } ';
                    } else {
                      s += ' {} ';
                    }
                    var E = s;
                    s = P.pop();
                    if (!r.compositeRule && p) {
                      if (r.async) {
                        s += ' throw new ValidationError([' + E + ']); ';
                      } else {
                        s += ' validate.errors = [' + E + ']; return false; ';
                      }
                    } else {
                      s +=
                        ' var err = ' +
                        E +
                        ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                    }
                    s += ' } ';
                  }
                }
                if (p) {
                  s += ' if (errors === ';
                  if (w) {
                    s += '0';
                  } else {
                    s += 'errs_' + u;
                  }
                  s += ') { ';
                  _ += '}';
                }
              }
            }
          }
        }
        if (p) {
          s += ' ' + _ + ' ';
        }
        if (w) {
          if (i) {
            s += ' if (errors === 0) return data;           ';
            s += ' else throw new ValidationError(vErrors); ';
          } else {
            s += ' validate.errors = vErrors; ';
            s += ' return errors === 0;       ';
          }
          s += ' }; return validate;';
        } else {
          s += ' var ' + g + ' = errors === errs_' + u + ';';
        }
        function re(e) {
          var r = e.rules;
          for (var a = 0; a < r.length; a++) if (ae(r[a])) return true;
        }
        function ae(e) {
          return r.schema[e.keyword] !== undefined || (e.implements && te(e));
        }
        function te(e) {
          var a = e.implements;
          for (var t = 0; t < a.length; t++)
            if (r.schema[a[t]] !== undefined) return true;
        }
        return s;
      };
    },
    14895: (e, r, a) => {
      'use strict';
      var t = /^[a-z_$][a-z0-9_$-]*$/i;
      var s = a(14165);
      var i = a(61128);
      e.exports = { add: o, get: n, remove: l, validate: f };
      function o(e, r) {
        var a = this.RULES;
        if (a.keywords[e]) throw new Error('Keyword ' + e + ' is already defined');
        if (!t.test(e)) throw new Error('Keyword ' + e + ' is not a valid identifier');
        if (r) {
          this.validateKeyword(r, true);
          var i = r.type;
          if (Array.isArray(i)) {
            for (var o = 0; o < i.length; o++) l(e, i[o], r);
          } else {
            l(e, i, r);
          }
          var n = r.metaSchema;
          if (n) {
            if (r.$data && this._opts.$data) {
              n = {
                anyOf: [
                  n,
                  {
                    $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
                  },
                ],
              };
            }
            r.validateSchema = this.compile(n, true);
          }
        }
        a.keywords[e] = a.all[e] = true;
        function l(e, r, t) {
          var i;
          for (var o = 0; o < a.length; o++) {
            var n = a[o];
            if (n.type == r) {
              i = n;
              break;
            }
          }
          if (!i) {
            i = { type: r, rules: [] };
            a.push(i);
          }
          var l = {
            keyword: e,
            definition: t,
            custom: true,
            code: s,
            implements: t.implements,
          };
          i.rules.push(l);
          a.custom[e] = l;
        }
        return this;
      }
      function n(e) {
        var r = this.RULES.custom[e];
        return r ? r.definition : this.RULES.keywords[e] || false;
      }
      function l(e) {
        var r = this.RULES;
        delete r.keywords[e];
        delete r.all[e];
        delete r.custom[e];
        for (var a = 0; a < r.length; a++) {
          var t = r[a].rules;
          for (var s = 0; s < t.length; s++) {
            if (t[s].keyword == e) {
              t.splice(s, 1);
              break;
            }
          }
        }
        return this;
      }
      function f(e, r) {
        f.errors = null;
        var a = (this._validateKeyword =
          this._validateKeyword || this.compile(i, true));
        if (a(e)) return true;
        f.errors = a.errors;
        if (r)
          throw new Error(
            'custom keyword definition is invalid: ' + this.errorsText(a.errors)
          );
        else return false;
      }
    },
    66835: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON Schema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}'
      );
    },
    40038: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}'
      );
    },
    64063: (e) => {
      'use strict';
      e.exports = function e(r, a) {
        if (r === a) return true;
        if (r && a && typeof r == 'object' && typeof a == 'object') {
          if (r.constructor !== a.constructor) return false;
          var t, s, i;
          if (Array.isArray(r)) {
            t = r.length;
            if (t != a.length) return false;
            for (s = t; s-- !== 0; ) if (!e(r[s], a[s])) return false;
            return true;
          }
          if (r.constructor === RegExp)
            return r.source === a.source && r.flags === a.flags;
          if (r.valueOf !== Object.prototype.valueOf)
            return r.valueOf() === a.valueOf();
          if (r.toString !== Object.prototype.toString)
            return r.toString() === a.toString();
          i = Object.keys(r);
          t = i.length;
          if (t !== Object.keys(a).length) return false;
          for (s = t; s-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(a, i[s])) return false;
          for (s = t; s-- !== 0; ) {
            var o = i[s];
            if (!e(r[o], a[o])) return false;
          }
          return true;
        }
        return r !== r && a !== a;
      };
    },
    35035: (e) => {
      'use strict';
      e.exports = function (e, r) {
        if (!r) r = {};
        if (typeof r === 'function') r = { cmp: r };
        var a = typeof r.cycles === 'boolean' ? r.cycles : false;
        var t =
          r.cmp &&
          (function (e) {
            return function (r) {
              return function (a, t) {
                var s = { key: a, value: r[a] };
                var i = { key: t, value: r[t] };
                return e(s, i);
              };
            };
          })(r.cmp);
        var s = [];
        return (function e(r) {
          if (r && r.toJSON && typeof r.toJSON === 'function') {
            r = r.toJSON();
          }
          if (r === undefined) return;
          if (typeof r == 'number') return isFinite(r) ? '' + r : 'null';
          if (typeof r !== 'object') return JSON.stringify(r);
          var i, o;
          if (Array.isArray(r)) {
            o = '[';
            for (i = 0; i < r.length; i++) {
              if (i) o += ',';
              o += e(r[i]) || 'null';
            }
            return o + ']';
          }
          if (r === null) return 'null';
          if (s.indexOf(r) !== -1) {
            if (a) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
          }
          var n = s.push(r) - 1;
          var l = Object.keys(r).sort(t && t(r));
          o = '';
          for (i = 0; i < l.length; i++) {
            var f = l[i];
            var u = e(r[f]);
            if (!u) continue;
            if (o) o += ',';
            o += JSON.stringify(f) + ':' + u;
          }
          s.splice(n, 1);
          return '{' + o + '}';
        })(e);
      };
    },
    49461: (e) => {
      'use strict';
      var r = (e.exports = function (e, r, t) {
        if (typeof r == 'function') {
          t = r;
          r = {};
        }
        t = r.cb || t;
        var s = typeof t == 'function' ? t : t.pre || function () {};
        var i = t.post || function () {};
        a(r, s, i, e, '', e);
      });
      r.keywords = {
        additionalItems: true,
        items: true,
        contains: true,
        additionalProperties: true,
        propertyNames: true,
        not: true,
      };
      r.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
      r.propsKeywords = {
        definitions: true,
        properties: true,
        patternProperties: true,
        dependencies: true,
      };
      r.skipKeywords = {
        default: true,
        enum: true,
        const: true,
        required: true,
        maximum: true,
        minimum: true,
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        multipleOf: true,
        maxLength: true,
        minLength: true,
        pattern: true,
        format: true,
        maxItems: true,
        minItems: true,
        uniqueItems: true,
        maxProperties: true,
        minProperties: true,
      };
      function a(e, s, i, o, n, l, f, u, c, h) {
        if (o && typeof o == 'object' && !Array.isArray(o)) {
          s(o, n, l, f, u, c, h);
          for (var d in o) {
            var v = o[d];
            if (Array.isArray(v)) {
              if (d in r.arrayKeywords) {
                for (var p = 0; p < v.length; p++)
                  a(e, s, i, v[p], n + '/' + d + '/' + p, l, n, d, o, p);
              }
            } else if (d in r.propsKeywords) {
              if (v && typeof v == 'object') {
                for (var m in v)
                  a(e, s, i, v[m], n + '/' + d + '/' + t(m), l, n, d, o, m);
              }
            } else if (d in r.keywords || (e.allKeys && !(d in r.skipKeywords))) {
              a(e, s, i, v, n + '/' + d, l, n, d, o);
            }
          }
          i(o, n, l, f, u, c, h);
        }
      }
      function t(e) {
        return e.replace(/~/g, '~0').replace(/\//g, '~1');
      }
    },
    60540: function (e, r) {
      (function (e, a) {
        true ? a(r) : 0;
      })(this, function (e) {
        'use strict';
        function r() {
          for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) {
            r[a] = arguments[a];
          }
          if (r.length > 1) {
            r[0] = r[0].slice(0, -1);
            var t = r.length - 1;
            for (var s = 1; s < t; ++s) {
              r[s] = r[s].slice(1, -1);
            }
            r[t] = r[t].slice(1);
            return r.join('');
          } else {
            return r[0];
          }
        }
        function a(e) {
          return '(?:' + e + ')';
        }
        function t(e) {
          return e === undefined
            ? 'undefined'
            : e === null
            ? 'null'
            : Object.prototype.toString
                .call(e)
                .split(' ')
                .pop()
                .split(']')
                .shift()
                .toLowerCase();
        }
        function s(e) {
          return e.toUpperCase();
        }
        function i(e) {
          return e !== undefined && e !== null
            ? e instanceof Array
              ? e
              : typeof e.length !== 'number' || e.split || e.setInterval || e.call
              ? [e]
              : Array.prototype.slice.call(e)
            : [];
        }
        function o(e, r) {
          var a = e;
          if (r) {
            for (var t in r) {
              a[t] = r[t];
            }
          }
          return a;
        }
        function n(e) {
          var t = '[A-Za-z]',
            s = '[\\x0D]',
            i = '[0-9]',
            o = '[\\x22]',
            n = r(i, '[A-Fa-f]'),
            l = '[\\x0A]',
            f = '[\\x20]',
            u = a(
              a('%[EFef]' + n + '%' + n + n + '%' + n + n) +
                '|' +
                a('%[89A-Fa-f]' + n + '%' + n + n) +
                '|' +
                a('%' + n + n)
            ),
            c = '[\\:\\/\\?\\#\\[\\]\\@]',
            h = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
            d = r(c, h),
            v = e
              ? '[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]'
              : '[]',
            p = e ? '[\\uE000-\\uF8FF]' : '[]',
            m = r(t, i, '[\\-\\.\\_\\~]', v),
            y = a(t + r(t, i, '[\\+\\-\\.]') + '*'),
            g = a(a(u + '|' + r(m, h, '[\\:]')) + '*'),
            P = a(
              a('25[0-5]') +
                '|' +
                a('2[0-4]' + i) +
                '|' +
                a('1' + i + i) +
                '|' +
                a('[1-9]' + i) +
                '|' +
                i
            ),
            E = a(
              a('25[0-5]') +
                '|' +
                a('2[0-4]' + i) +
                '|' +
                a('1' + i + i) +
                '|' +
                a('0?[1-9]' + i) +
                '|0?0?' +
                i
            ),
            w = a(E + '\\.' + E + '\\.' + E + '\\.' + E),
            b = a(n + '{1,4}'),
            S = a(a(b + '\\:' + b) + '|' + w),
            _ = a(a(b + '\\:') + '{6}' + S),
            F = a('\\:\\:' + a(b + '\\:') + '{5}' + S),
            $ = a(a(b) + '?\\:\\:' + a(b + '\\:') + '{4}' + S),
            x = a(a(a(b + '\\:') + '{0,1}' + b) + '?\\:\\:' + a(b + '\\:') + '{3}' + S),
            R = a(a(a(b + '\\:') + '{0,2}' + b) + '?\\:\\:' + a(b + '\\:') + '{2}' + S),
            D = a(a(a(b + '\\:') + '{0,3}' + b) + '?\\:\\:' + b + '\\:' + S),
            j = a(a(a(b + '\\:') + '{0,4}' + b) + '?\\:\\:' + S),
            O = a(a(a(b + '\\:') + '{0,5}' + b) + '?\\:\\:' + b),
            I = a(a(a(b + '\\:') + '{0,6}' + b) + '?\\:\\:'),
            A = a([_, F, $, x, R, D, j, O, I].join('|')),
            k = a(a(m + '|' + u) + '+'),
            C = a(A + '\\%25' + k),
            L = a(A + a('\\%25|\\%(?!' + n + '{2})') + k),
            N = a('[vV]' + n + '+\\.' + r(m, h, '[\\:]') + '+'),
            z = a('\\[' + a(L + '|' + A + '|' + N) + '\\]'),
            T = a(a(u + '|' + r(m, h)) + '*'),
            q = a(z + '|' + w + '(?!' + T + ')' + '|' + T),
            Q = a(i + '*'),
            V = a(a(g + '@') + '?' + q + a('\\:' + Q) + '?'),
            U = a(u + '|' + r(m, h, '[\\:\\@]')),
            H = a(U + '*'),
            M = a(U + '+'),
            K = a(a(u + '|' + r(m, h, '[\\@]')) + '+'),
            B = a(a('\\/' + H) + '*'),
            J = a('\\/' + a(M + B) + '?'),
            Z = a(K + B),
            G = a(M + B),
            Y = '(?!' + U + ')',
            W = a(B + '|' + J + '|' + Z + '|' + G + '|' + Y),
            X = a(a(U + '|' + r('[\\/\\?]', p)) + '*'),
            ee = a(a(U + '|[\\/\\?]') + '*'),
            re = a(a('\\/\\/' + V + B) + '|' + J + '|' + G + '|' + Y),
            ae = a(y + '\\:' + re + a('\\?' + X) + '?' + a('\\#' + ee) + '?'),
            te = a(a('\\/\\/' + V + B) + '|' + J + '|' + Z + '|' + Y),
            se = a(te + a('\\?' + X) + '?' + a('\\#' + ee) + '?'),
            ie = a(ae + '|' + se),
            oe = a(y + '\\:' + re + a('\\?' + X) + '?'),
            ne =
              '^(' +
              y +
              ')\\:' +
              a(
                a(
                  '\\/\\/(' +
                    a('(' + g + ')@') +
                    '?(' +
                    q +
                    ')' +
                    a('\\:(' + Q + ')') +
                    '?)'
                ) +
                  '?(' +
                  B +
                  '|' +
                  J +
                  '|' +
                  G +
                  '|' +
                  Y +
                  ')'
              ) +
              a('\\?(' + X + ')') +
              '?' +
              a('\\#(' + ee + ')') +
              '?$',
            le =
              '^(){0}' +
              a(
                a(
                  '\\/\\/(' +
                    a('(' + g + ')@') +
                    '?(' +
                    q +
                    ')' +
                    a('\\:(' + Q + ')') +
                    '?)'
                ) +
                  '?(' +
                  B +
                  '|' +
                  J +
                  '|' +
                  Z +
                  '|' +
                  Y +
                  ')'
              ) +
              a('\\?(' + X + ')') +
              '?' +
              a('\\#(' + ee + ')') +
              '?$',
            fe =
              '^(' +
              y +
              ')\\:' +
              a(
                a(
                  '\\/\\/(' +
                    a('(' + g + ')@') +
                    '?(' +
                    q +
                    ')' +
                    a('\\:(' + Q + ')') +
                    '?)'
                ) +
                  '?(' +
                  B +
                  '|' +
                  J +
                  '|' +
                  G +
                  '|' +
                  Y +
                  ')'
              ) +
              a('\\?(' + X + ')') +
              '?$',
            ue = '^' + a('\\#(' + ee + ')') + '?$',
            ce = '^' + a('(' + g + ')@') + '?(' + q + ')' + a('\\:(' + Q + ')') + '?$';
          return {
            NOT_SCHEME: new RegExp(r('[^]', t, i, '[\\+\\-\\.]'), 'g'),
            NOT_USERINFO: new RegExp(r('[^\\%\\:]', m, h), 'g'),
            NOT_HOST: new RegExp(r('[^\\%\\[\\]\\:]', m, h), 'g'),
            NOT_PATH: new RegExp(r('[^\\%\\/\\:\\@]', m, h), 'g'),
            NOT_PATH_NOSCHEME: new RegExp(r('[^\\%\\/\\@]', m, h), 'g'),
            NOT_QUERY: new RegExp(r('[^\\%]', m, h, '[\\:\\@\\/\\?]', p), 'g'),
            NOT_FRAGMENT: new RegExp(r('[^\\%]', m, h, '[\\:\\@\\/\\?]'), 'g'),
            ESCAPE: new RegExp(r('[^]', m, h), 'g'),
            UNRESERVED: new RegExp(m, 'g'),
            OTHER_CHARS: new RegExp(r('[^\\%]', m, d), 'g'),
            PCT_ENCODED: new RegExp(u, 'g'),
            IPV4ADDRESS: new RegExp('^(' + w + ')$'),
            IPV6ADDRESS: new RegExp(
              '^\\[?(' +
                A +
                ')' +
                a(a('\\%25|\\%(?!' + n + '{2})') + '(' + k + ')') +
                '?\\]?$'
            ),
          };
        }
        var l = n(false);
        var f = n(true);
        var u = (function () {
          function e(e, r) {
            var a = [];
            var t = true;
            var s = false;
            var i = undefined;
            try {
              for (
                var o = e[Symbol.iterator](), n;
                !(t = (n = o.next()).done);
                t = true
              ) {
                a.push(n.value);
                if (r && a.length === r) break;
              }
            } catch (l) {
              s = true;
              i = l;
            } finally {
              try {
                if (!t && o['return']) o['return']();
              } finally {
                if (s) throw i;
              }
            }
            return a;
          }
          return function (r, a) {
            if (Array.isArray(r)) {
              return r;
            } else if (Symbol.iterator in Object(r)) {
              return e(r, a);
            } else {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              );
            }
          };
        })();
        var c = function (e) {
          if (Array.isArray(e)) {
            for (var r = 0, a = Array(e.length); r < e.length; r++) a[r] = e[r];
            return a;
          } else {
            return Array.from(e);
          }
        };
        var h = 2147483647;
        var d = 36;
        var v = 1;
        var p = 26;
        var m = 38;
        var y = 700;
        var g = 72;
        var P = 128;
        var E = '-';
        var w = /^xn--/;
        var b = /[^\0-\x7E]/;
        var S = /[\x2E\u3002\uFF0E\uFF61]/g;
        var _ = {
          overflow: 'Overflow: input needs wider integers to process',
          'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
          'invalid-input': 'Invalid input',
        };
        var F = d - v;
        var $ = Math.floor;
        var x = String.fromCharCode;
        function R(e) {
          throw new RangeError(_[e]);
        }
        function D(e, r) {
          var a = [];
          var t = e.length;
          while (t--) {
            a[t] = r(e[t]);
          }
          return a;
        }
        function j(e, r) {
          var a = e.split('@');
          var t = '';
          if (a.length > 1) {
            t = a[0] + '@';
            e = a[1];
          }
          e = e.replace(S, '.');
          var s = e.split('.');
          var i = D(s, r).join('.');
          return t + i;
        }
        function O(e) {
          var r = [];
          var a = 0;
          var t = e.length;
          while (a < t) {
            var s = e.charCodeAt(a++);
            if (s >= 55296 && s <= 56319 && a < t) {
              var i = e.charCodeAt(a++);
              if ((i & 64512) == 56320) {
                r.push(((s & 1023) << 10) + (i & 1023) + 65536);
              } else {
                r.push(s);
                a--;
              }
            } else {
              r.push(s);
            }
          }
          return r;
        }
        var I = function e(r) {
          return String.fromCodePoint.apply(String, c(r));
        };
        var A = function e(r) {
          if (r - 48 < 10) {
            return r - 22;
          }
          if (r - 65 < 26) {
            return r - 65;
          }
          if (r - 97 < 26) {
            return r - 97;
          }
          return d;
        };
        var k = function e(r, a) {
          return r + 22 + 75 * (r < 26) - ((a != 0) << 5);
        };
        var C = function e(r, a, t) {
          var s = 0;
          r = t ? $(r / y) : r >> 1;
          r += $(r / a);
          for (; r > (F * p) >> 1; s += d) {
            r = $(r / F);
          }
          return $(s + ((F + 1) * r) / (r + m));
        };
        var L = function e(r) {
          var a = [];
          var t = r.length;
          var s = 0;
          var i = P;
          var o = g;
          var n = r.lastIndexOf(E);
          if (n < 0) {
            n = 0;
          }
          for (var l = 0; l < n; ++l) {
            if (r.charCodeAt(l) >= 128) {
              R('not-basic');
            }
            a.push(r.charCodeAt(l));
          }
          for (var f = n > 0 ? n + 1 : 0; f < t; ) {
            var u = s;
            for (var c = 1, m = d; ; m += d) {
              if (f >= t) {
                R('invalid-input');
              }
              var y = A(r.charCodeAt(f++));
              if (y >= d || y > $((h - s) / c)) {
                R('overflow');
              }
              s += y * c;
              var w = m <= o ? v : m >= o + p ? p : m - o;
              if (y < w) {
                break;
              }
              var b = d - w;
              if (c > $(h / b)) {
                R('overflow');
              }
              c *= b;
            }
            var S = a.length + 1;
            o = C(s - u, S, u == 0);
            if ($(s / S) > h - i) {
              R('overflow');
            }
            i += $(s / S);
            s %= S;
            a.splice(s++, 0, i);
          }
          return String.fromCodePoint.apply(String, a);
        };
        var N = function e(r) {
          var a = [];
          r = O(r);
          var t = r.length;
          var s = P;
          var i = 0;
          var o = g;
          var n = true;
          var l = false;
          var f = undefined;
          try {
            for (
              var u = r[Symbol.iterator](), c;
              !(n = (c = u.next()).done);
              n = true
            ) {
              var m = c.value;
              if (m < 128) {
                a.push(x(m));
              }
            }
          } catch (B) {
            l = true;
            f = B;
          } finally {
            try {
              if (!n && u.return) {
                u.return();
              }
            } finally {
              if (l) {
                throw f;
              }
            }
          }
          var y = a.length;
          var w = y;
          if (y) {
            a.push(E);
          }
          while (w < t) {
            var b = h;
            var S = true;
            var _ = false;
            var F = undefined;
            try {
              for (
                var D = r[Symbol.iterator](), j;
                !(S = (j = D.next()).done);
                S = true
              ) {
                var I = j.value;
                if (I >= s && I < b) {
                  b = I;
                }
              }
            } catch (B) {
              _ = true;
              F = B;
            } finally {
              try {
                if (!S && D.return) {
                  D.return();
                }
              } finally {
                if (_) {
                  throw F;
                }
              }
            }
            var A = w + 1;
            if (b - s > $((h - i) / A)) {
              R('overflow');
            }
            i += (b - s) * A;
            s = b;
            var L = true;
            var N = false;
            var z = undefined;
            try {
              for (
                var T = r[Symbol.iterator](), q;
                !(L = (q = T.next()).done);
                L = true
              ) {
                var Q = q.value;
                if (Q < s && ++i > h) {
                  R('overflow');
                }
                if (Q == s) {
                  var V = i;
                  for (var U = d; ; U += d) {
                    var H = U <= o ? v : U >= o + p ? p : U - o;
                    if (V < H) {
                      break;
                    }
                    var M = V - H;
                    var K = d - H;
                    a.push(x(k(H + (M % K), 0)));
                    V = $(M / K);
                  }
                  a.push(x(k(V, 0)));
                  o = C(i, A, w == y);
                  i = 0;
                  ++w;
                }
              }
            } catch (B) {
              N = true;
              z = B;
            } finally {
              try {
                if (!L && T.return) {
                  T.return();
                }
              } finally {
                if (N) {
                  throw z;
                }
              }
            }
            ++i;
            ++s;
          }
          return a.join('');
        };
        var z = function e(r) {
          return j(r, function (e) {
            return w.test(e) ? L(e.slice(4).toLowerCase()) : e;
          });
        };
        var T = function e(r) {
          return j(r, function (e) {
            return b.test(e) ? 'xn--' + N(e) : e;
          });
        };
        var q = {
          version: '2.1.0',
          ucs2: { decode: O, encode: I },
          decode: L,
          encode: N,
          toASCII: T,
          toUnicode: z,
        };
        var Q = {};
        function V(e) {
          var r = e.charCodeAt(0);
          var a = void 0;
          if (r < 16) a = '%0' + r.toString(16).toUpperCase();
          else if (r < 128) a = '%' + r.toString(16).toUpperCase();
          else if (r < 2048)
            a =
              '%' +
              ((r >> 6) | 192).toString(16).toUpperCase() +
              '%' +
              ((r & 63) | 128).toString(16).toUpperCase();
          else
            a =
              '%' +
              ((r >> 12) | 224).toString(16).toUpperCase() +
              '%' +
              (((r >> 6) & 63) | 128).toString(16).toUpperCase() +
              '%' +
              ((r & 63) | 128).toString(16).toUpperCase();
          return a;
        }
        function U(e) {
          var r = '';
          var a = 0;
          var t = e.length;
          while (a < t) {
            var s = parseInt(e.substr(a + 1, 2), 16);
            if (s < 128) {
              r += String.fromCharCode(s);
              a += 3;
            } else if (s >= 194 && s < 224) {
              if (t - a >= 6) {
                var i = parseInt(e.substr(a + 4, 2), 16);
                r += String.fromCharCode(((s & 31) << 6) | (i & 63));
              } else {
                r += e.substr(a, 6);
              }
              a += 6;
            } else if (s >= 224) {
              if (t - a >= 9) {
                var o = parseInt(e.substr(a + 4, 2), 16);
                var n = parseInt(e.substr(a + 7, 2), 16);
                r += String.fromCharCode(((s & 15) << 12) | ((o & 63) << 6) | (n & 63));
              } else {
                r += e.substr(a, 9);
              }
              a += 9;
            } else {
              r += e.substr(a, 3);
              a += 3;
            }
          }
          return r;
        }
        function H(e, r) {
          function a(e) {
            var a = U(e);
            return !a.match(r.UNRESERVED) ? e : a;
          }
          if (e.scheme)
            e.scheme = String(e.scheme)
              .replace(r.PCT_ENCODED, a)
              .toLowerCase()
              .replace(r.NOT_SCHEME, '');
          if (e.userinfo !== undefined)
            e.userinfo = String(e.userinfo)
              .replace(r.PCT_ENCODED, a)
              .replace(r.NOT_USERINFO, V)
              .replace(r.PCT_ENCODED, s);
          if (e.host !== undefined)
            e.host = String(e.host)
              .replace(r.PCT_ENCODED, a)
              .toLowerCase()
              .replace(r.NOT_HOST, V)
              .replace(r.PCT_ENCODED, s);
          if (e.path !== undefined)
            e.path = String(e.path)
              .replace(r.PCT_ENCODED, a)
              .replace(e.scheme ? r.NOT_PATH : r.NOT_PATH_NOSCHEME, V)
              .replace(r.PCT_ENCODED, s);
          if (e.query !== undefined)
            e.query = String(e.query)
              .replace(r.PCT_ENCODED, a)
              .replace(r.NOT_QUERY, V)
              .replace(r.PCT_ENCODED, s);
          if (e.fragment !== undefined)
            e.fragment = String(e.fragment)
              .replace(r.PCT_ENCODED, a)
              .replace(r.NOT_FRAGMENT, V)
              .replace(r.PCT_ENCODED, s);
          return e;
        }
        function M(e) {
          return e.replace(/^0*(.*)/, '$1') || '0';
        }
        function K(e, r) {
          var a = e.match(r.IPV4ADDRESS) || [];
          var t = u(a, 2),
            s = t[1];
          if (s) {
            return s.split('.').map(M).join('.');
          } else {
            return e;
          }
        }
        function B(e, r) {
          var a = e.match(r.IPV6ADDRESS) || [];
          var t = u(a, 3),
            s = t[1],
            i = t[2];
          if (s) {
            var o = s.toLowerCase().split('::').reverse(),
              n = u(o, 2),
              l = n[0],
              f = n[1];
            var c = f ? f.split(':').map(M) : [];
            var h = l.split(':').map(M);
            var d = r.IPV4ADDRESS.test(h[h.length - 1]);
            var v = d ? 7 : 8;
            var p = h.length - v;
            var m = Array(v);
            for (var y = 0; y < v; ++y) {
              m[y] = c[y] || h[p + y] || '';
            }
            if (d) {
              m[v - 1] = K(m[v - 1], r);
            }
            var g = m.reduce(function (e, r, a) {
              if (!r || r === '0') {
                var t = e[e.length - 1];
                if (t && t.index + t.length === a) {
                  t.length++;
                } else {
                  e.push({ index: a, length: 1 });
                }
              }
              return e;
            }, []);
            var P = g.sort(function (e, r) {
              return r.length - e.length;
            })[0];
            var E = void 0;
            if (P && P.length > 1) {
              var w = m.slice(0, P.index);
              var b = m.slice(P.index + P.length);
              E = w.join(':') + '::' + b.join(':');
            } else {
              E = m.join(':');
            }
            if (i) {
              E += '%' + i;
            }
            return E;
          } else {
            return e;
          }
        }
        var J =
          /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
        var Z = ''.match(/(){0}/)[1] === undefined;
        function G(e) {
          var r =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var a = {};
          var t = r.iri !== false ? f : l;
          if (r.reference === 'suffix') e = (r.scheme ? r.scheme + ':' : '') + '//' + e;
          var s = e.match(J);
          if (s) {
            if (Z) {
              a.scheme = s[1];
              a.userinfo = s[3];
              a.host = s[4];
              a.port = parseInt(s[5], 10);
              a.path = s[6] || '';
              a.query = s[7];
              a.fragment = s[8];
              if (isNaN(a.port)) {
                a.port = s[5];
              }
            } else {
              a.scheme = s[1] || undefined;
              a.userinfo = e.indexOf('@') !== -1 ? s[3] : undefined;
              a.host = e.indexOf('//') !== -1 ? s[4] : undefined;
              a.port = parseInt(s[5], 10);
              a.path = s[6] || '';
              a.query = e.indexOf('?') !== -1 ? s[7] : undefined;
              a.fragment = e.indexOf('#') !== -1 ? s[8] : undefined;
              if (isNaN(a.port)) {
                a.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? s[4] : undefined;
              }
            }
            if (a.host) {
              a.host = B(K(a.host, t), t);
            }
            if (
              a.scheme === undefined &&
              a.userinfo === undefined &&
              a.host === undefined &&
              a.port === undefined &&
              !a.path &&
              a.query === undefined
            ) {
              a.reference = 'same-document';
            } else if (a.scheme === undefined) {
              a.reference = 'relative';
            } else if (a.fragment === undefined) {
              a.reference = 'absolute';
            } else {
              a.reference = 'uri';
            }
            if (
              r.reference &&
              r.reference !== 'suffix' &&
              r.reference !== a.reference
            ) {
              a.error = a.error || 'URI is not a ' + r.reference + ' reference.';
            }
            var i = Q[(r.scheme || a.scheme || '').toLowerCase()];
            if (!r.unicodeSupport && (!i || !i.unicodeSupport)) {
              if (a.host && (r.domainHost || (i && i.domainHost))) {
                try {
                  a.host = q.toASCII(a.host.replace(t.PCT_ENCODED, U).toLowerCase());
                } catch (o) {
                  a.error =
                    a.error ||
                    "Host's domain name can not be converted to ASCII via punycode: " +
                      o;
                }
              }
              H(a, l);
            } else {
              H(a, t);
            }
            if (i && i.parse) {
              i.parse(a, r);
            }
          } else {
            a.error = a.error || 'URI can not be parsed.';
          }
          return a;
        }
        function Y(e, r) {
          var a = r.iri !== false ? f : l;
          var t = [];
          if (e.userinfo !== undefined) {
            t.push(e.userinfo);
            t.push('@');
          }
          if (e.host !== undefined) {
            t.push(
              B(K(String(e.host), a), a).replace(a.IPV6ADDRESS, function (e, r, a) {
                return '[' + r + (a ? '%25' + a : '') + ']';
              })
            );
          }
          if (typeof e.port === 'number' || typeof e.port === 'string') {
            t.push(':');
            t.push(String(e.port));
          }
          return t.length ? t.join('') : undefined;
        }
        var W = /^\.\.?\//;
        var X = /^\/\.(\/|$)/;
        var ee = /^\/\.\.(\/|$)/;
        var re = /^\/?(?:.|\n)*?(?=\/|$)/;
        function ae(e) {
          var r = [];
          while (e.length) {
            if (e.match(W)) {
              e = e.replace(W, '');
            } else if (e.match(X)) {
              e = e.replace(X, '/');
            } else if (e.match(ee)) {
              e = e.replace(ee, '/');
              r.pop();
            } else if (e === '.' || e === '..') {
              e = '';
            } else {
              var a = e.match(re);
              if (a) {
                var t = a[0];
                e = e.slice(t.length);
                r.push(t);
              } else {
                throw new Error('Unexpected dot segment condition');
              }
            }
          }
          return r.join('');
        }
        function te(e) {
          var r =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var a = r.iri ? f : l;
          var t = [];
          var s = Q[(r.scheme || e.scheme || '').toLowerCase()];
          if (s && s.serialize) s.serialize(e, r);
          if (e.host) {
            if (a.IPV6ADDRESS.test(e.host)) {
            } else if (r.domainHost || (s && s.domainHost)) {
              try {
                e.host = !r.iri
                  ? q.toASCII(e.host.replace(a.PCT_ENCODED, U).toLowerCase())
                  : q.toUnicode(e.host);
              } catch (n) {
                e.error =
                  e.error ||
                  "Host's domain name can not be converted to " +
                    (!r.iri ? 'ASCII' : 'Unicode') +
                    ' via punycode: ' +
                    n;
              }
            }
          }
          H(e, a);
          if (r.reference !== 'suffix' && e.scheme) {
            t.push(e.scheme);
            t.push(':');
          }
          var i = Y(e, r);
          if (i !== undefined) {
            if (r.reference !== 'suffix') {
              t.push('//');
            }
            t.push(i);
            if (e.path && e.path.charAt(0) !== '/') {
              t.push('/');
            }
          }
          if (e.path !== undefined) {
            var o = e.path;
            if (!r.absolutePath && (!s || !s.absolutePath)) {
              o = ae(o);
            }
            if (i === undefined) {
              o = o.replace(/^\/\//, '/%2F');
            }
            t.push(o);
          }
          if (e.query !== undefined) {
            t.push('?');
            t.push(e.query);
          }
          if (e.fragment !== undefined) {
            t.push('#');
            t.push(e.fragment);
          }
          return t.join('');
        }
        function se(e, r) {
          var a =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var t = arguments[3];
          var s = {};
          if (!t) {
            e = G(te(e, a), a);
            r = G(te(r, a), a);
          }
          a = a || {};
          if (!a.tolerant && r.scheme) {
            s.scheme = r.scheme;
            s.userinfo = r.userinfo;
            s.host = r.host;
            s.port = r.port;
            s.path = ae(r.path || '');
            s.query = r.query;
          } else {
            if (
              r.userinfo !== undefined ||
              r.host !== undefined ||
              r.port !== undefined
            ) {
              s.userinfo = r.userinfo;
              s.host = r.host;
              s.port = r.port;
              s.path = ae(r.path || '');
              s.query = r.query;
            } else {
              if (!r.path) {
                s.path = e.path;
                if (r.query !== undefined) {
                  s.query = r.query;
                } else {
                  s.query = e.query;
                }
              } else {
                if (r.path.charAt(0) === '/') {
                  s.path = ae(r.path);
                } else {
                  if (
                    (e.userinfo !== undefined ||
                      e.host !== undefined ||
                      e.port !== undefined) &&
                    !e.path
                  ) {
                    s.path = '/' + r.path;
                  } else if (!e.path) {
                    s.path = r.path;
                  } else {
                    s.path = e.path.slice(0, e.path.lastIndexOf('/') + 1) + r.path;
                  }
                  s.path = ae(s.path);
                }
                s.query = r.query;
              }
              s.userinfo = e.userinfo;
              s.host = e.host;
              s.port = e.port;
            }
            s.scheme = e.scheme;
          }
          s.fragment = r.fragment;
          return s;
        }
        function ie(e, r, a) {
          var t = o({ scheme: 'null' }, a);
          return te(se(G(e, t), G(r, t), t, true), t);
        }
        function oe(e, r) {
          if (typeof e === 'string') {
            e = te(G(e, r), r);
          } else if (t(e) === 'object') {
            e = G(te(e, r), r);
          }
          return e;
        }
        function ne(e, r, a) {
          if (typeof e === 'string') {
            e = te(G(e, a), a);
          } else if (t(e) === 'object') {
            e = te(e, a);
          }
          if (typeof r === 'string') {
            r = te(G(r, a), a);
          } else if (t(r) === 'object') {
            r = te(r, a);
          }
          return e === r;
        }
        function le(e, r) {
          return e && e.toString().replace(!r || !r.iri ? l.ESCAPE : f.ESCAPE, V);
        }
        function fe(e, r) {
          return (
            e && e.toString().replace(!r || !r.iri ? l.PCT_ENCODED : f.PCT_ENCODED, U)
          );
        }
        var ue = {
          scheme: 'http',
          domainHost: true,
          parse: function e(r, a) {
            if (!r.host) {
              r.error = r.error || 'HTTP URIs must have a host.';
            }
            return r;
          },
          serialize: function e(r, a) {
            var t = String(r.scheme).toLowerCase() === 'https';
            if (r.port === (t ? 443 : 80) || r.port === '') {
              r.port = undefined;
            }
            if (!r.path) {
              r.path = '/';
            }
            return r;
          },
        };
        var ce = {
          scheme: 'https',
          domainHost: ue.domainHost,
          parse: ue.parse,
          serialize: ue.serialize,
        };
        function he(e) {
          return typeof e.secure === 'boolean'
            ? e.secure
            : String(e.scheme).toLowerCase() === 'wss';
        }
        var de = {
          scheme: 'ws',
          domainHost: true,
          parse: function e(r, a) {
            var t = r;
            t.secure = he(t);
            t.resourceName = (t.path || '/') + (t.query ? '?' + t.query : '');
            t.path = undefined;
            t.query = undefined;
            return t;
          },
          serialize: function e(r, a) {
            if (r.port === (he(r) ? 443 : 80) || r.port === '') {
              r.port = undefined;
            }
            if (typeof r.secure === 'boolean') {
              r.scheme = r.secure ? 'wss' : 'ws';
              r.secure = undefined;
            }
            if (r.resourceName) {
              var t = r.resourceName.split('?'),
                s = u(t, 2),
                i = s[0],
                o = s[1];
              r.path = i && i !== '/' ? i : undefined;
              r.query = o;
              r.resourceName = undefined;
            }
            r.fragment = undefined;
            return r;
          },
        };
        var ve = {
          scheme: 'wss',
          domainHost: de.domainHost,
          parse: de.parse,
          serialize: de.serialize,
        };
        var pe = {};
        var me = true;
        var ye =
          '[A-Za-z0-9\\-\\.\\_\\~' +
          (me
            ? '\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF'
            : '') +
          ']';
        var ge = '[0-9A-Fa-f]';
        var Pe = a(
          a('%[EFef]' + ge + '%' + ge + ge + '%' + ge + ge) +
            '|' +
            a('%[89A-Fa-f]' + ge + '%' + ge + ge) +
            '|' +
            a('%' + ge + ge)
        );
        var Ee = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
        var we = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
        var be = r(we, '[\\"\\\\]');
        var Se = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
        var _e = new RegExp(ye, 'g');
        var Fe = new RegExp(Pe, 'g');
        var $e = new RegExp(r('[^]', Ee, '[\\.]', '[\\"]', be), 'g');
        var xe = new RegExp(r('[^]', ye, Se), 'g');
        var Re = xe;
        function De(e) {
          var r = U(e);
          return !r.match(_e) ? e : r;
        }
        var je = {
          scheme: 'mailto',
          parse: function e(r, a) {
            var t = r;
            var s = (t.to = t.path ? t.path.split(',') : []);
            t.path = undefined;
            if (t.query) {
              var i = false;
              var o = {};
              var n = t.query.split('&');
              for (var l = 0, f = n.length; l < f; ++l) {
                var u = n[l].split('=');
                switch (u[0]) {
                  case 'to':
                    var c = u[1].split(',');
                    for (var h = 0, d = c.length; h < d; ++h) {
                      s.push(c[h]);
                    }
                    break;
                  case 'subject':
                    t.subject = fe(u[1], a);
                    break;
                  case 'body':
                    t.body = fe(u[1], a);
                    break;
                  default:
                    i = true;
                    o[fe(u[0], a)] = fe(u[1], a);
                    break;
                }
              }
              if (i) t.headers = o;
            }
            t.query = undefined;
            for (var v = 0, p = s.length; v < p; ++v) {
              var m = s[v].split('@');
              m[0] = fe(m[0]);
              if (!a.unicodeSupport) {
                try {
                  m[1] = q.toASCII(fe(m[1], a).toLowerCase());
                } catch (y) {
                  t.error =
                    t.error ||
                    "Email address's domain name can not be converted to ASCII via punycode: " +
                      y;
                }
              } else {
                m[1] = fe(m[1], a).toLowerCase();
              }
              s[v] = m.join('@');
            }
            return t;
          },
          serialize: function e(r, a) {
            var t = r;
            var o = i(r.to);
            if (o) {
              for (var n = 0, l = o.length; n < l; ++n) {
                var f = String(o[n]);
                var u = f.lastIndexOf('@');
                var c = f.slice(0, u).replace(Fe, De).replace(Fe, s).replace($e, V);
                var h = f.slice(u + 1);
                try {
                  h = !a.iri ? q.toASCII(fe(h, a).toLowerCase()) : q.toUnicode(h);
                } catch (m) {
                  t.error =
                    t.error ||
                    "Email address's domain name can not be converted to " +
                      (!a.iri ? 'ASCII' : 'Unicode') +
                      ' via punycode: ' +
                      m;
                }
                o[n] = c + '@' + h;
              }
              t.path = o.join(',');
            }
            var d = (r.headers = r.headers || {});
            if (r.subject) d['subject'] = r.subject;
            if (r.body) d['body'] = r.body;
            var v = [];
            for (var p in d) {
              if (d[p] !== pe[p]) {
                v.push(
                  p.replace(Fe, De).replace(Fe, s).replace(xe, V) +
                    '=' +
                    d[p].replace(Fe, De).replace(Fe, s).replace(Re, V)
                );
              }
            }
            if (v.length) {
              t.query = v.join('&');
            }
            return t;
          },
        };
        var Oe = /^([^\:]+)\:(.*)/;
        var Ie = {
          scheme: 'urn',
          parse: function e(r, a) {
            var t = r.path && r.path.match(Oe);
            var s = r;
            if (t) {
              var i = a.scheme || s.scheme || 'urn';
              var o = t[1].toLowerCase();
              var n = t[2];
              var l = i + ':' + (a.nid || o);
              var f = Q[l];
              s.nid = o;
              s.nss = n;
              s.path = undefined;
              if (f) {
                s = f.parse(s, a);
              }
            } else {
              s.error = s.error || 'URN can not be parsed.';
            }
            return s;
          },
          serialize: function e(r, a) {
            var t = a.scheme || r.scheme || 'urn';
            var s = r.nid;
            var i = t + ':' + (a.nid || s);
            var o = Q[i];
            if (o) {
              r = o.serialize(r, a);
            }
            var n = r;
            var l = r.nss;
            n.path = (s || a.nid) + ':' + l;
            return n;
          },
        };
        var Ae = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
        var ke = {
          scheme: 'urn:uuid',
          parse: function e(r, a) {
            var t = r;
            t.uuid = t.nss;
            t.nss = undefined;
            if (!a.tolerant && (!t.uuid || !t.uuid.match(Ae))) {
              t.error = t.error || 'UUID is not valid.';
            }
            return t;
          },
          serialize: function e(r, a) {
            var t = r;
            t.nss = (r.uuid || '').toLowerCase();
            return t;
          },
        };
        Q[ue.scheme] = ue;
        Q[ce.scheme] = ce;
        Q[de.scheme] = de;
        Q[ve.scheme] = ve;
        Q[je.scheme] = je;
        Q[Ie.scheme] = Ie;
        Q[ke.scheme] = ke;
        e.SCHEMES = Q;
        e.pctEncChar = V;
        e.pctDecChars = U;
        e.parse = G;
        e.removeDotSegments = ae;
        e.serialize = te;
        e.resolveComponents = se;
        e.resolve = ie;
        e.normalize = oe;
        e.equal = ne;
        e.escapeComponent = le;
        e.unescapeComponent = fe;
        Object.defineProperty(e, '__esModule', { value: true });
      });
    },
  },
]);
//# sourceMappingURL=5096.b5ed40e0f3e7e67d6567.js.map?v=b5ed40e0f3e7e67d6567
