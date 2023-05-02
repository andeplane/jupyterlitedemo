/*! For license information please see 951.8b2f42a81d35ca63eecb.js.LICENSE.txt */
(self.webpackChunkandeplane_pyodide_kernel_extension =
  self.webpackChunkandeplane_pyodide_kernel_extension || []).push([
  [951],
  {
    951: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { O: () => Va });
      var process = __webpack_require__(406),
        Dl = Object.create,
        Fi = Object.defineProperty,
        Pl = Object.getOwnPropertyDescriptor,
        Rl = Object.getOwnPropertyNames,
        Cl = Object.getPrototypeOf,
        Tl = Object.prototype.hasOwnProperty,
        Ln = __webpack_require__(954),
        gt = (t, e) => () => (t && (e = t((t = 0))), e),
        fe = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
        Il = (t, e) => {
          for (var i in e) Fi(t, i, { get: e[i], enumerable: !0 });
        },
        Yl = (t, e, i, n) => {
          if ((e && 'object' == typeof e) || 'function' == typeof e)
            for (let a of Rl(e))
              !Tl.call(t, a) &&
                a !== i &&
                Fi(t, a, {
                  get: () => e[a],
                  enumerable: !(n = Pl(e, a)) || n.enumerable,
                });
          return t;
        },
        nt = (t, e, i) => (
          (i = null != t ? Dl(Cl(t)) : {}),
          Yl(
            !e && t && t.__esModule
              ? i
              : Fi(i, 'default', { value: t, enumerable: !0 }),
            t
          )
        ),
        Hn = fe((t, e) => {
          var i, n;
          (i = t),
            (n = function (t) {
              function e(t) {
                return 'function' == typeof t.iter ? t.iter() : new a(t);
              }
              function i(t, i) {
                for (var n, a = 0, o = e(t); void 0 !== (n = o.next()); )
                  if (!1 === i(n, a++)) return;
              }
              (t.ArrayExt = void 0),
                (function (t) {
                  function e(t, e, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = -1);
                    var a,
                      o = t.length;
                    if (0 === o) return -1;
                    (i = i < 0 ? Math.max(0, i + o) : Math.min(i, o - 1)),
                      (a =
                        (n = n < 0 ? Math.max(0, n + o) : Math.min(n, o - 1)) < i
                          ? n + 1 + (o - i)
                          : n - i + 1);
                    for (var r = 0; r < a; ++r) {
                      var s = (i + r) % o;
                      if (t[s] === e) return s;
                    }
                    return -1;
                  }
                  function i(t, e, i, n) {
                    void 0 === i && (i = -1), void 0 === n && (n = 0);
                    var a,
                      o = t.length;
                    if (0 === o) return -1;
                    a =
                      (i = i < 0 ? Math.max(0, i + o) : Math.min(i, o - 1)) <
                      (n = n < 0 ? Math.max(0, n + o) : Math.min(n, o - 1))
                        ? i + 1 + (o - n)
                        : i - n + 1;
                    for (var r = 0; r < a; ++r) {
                      var s = (i - r + o) % o;
                      if (t[s] === e) return s;
                    }
                    return -1;
                  }
                  function n(t, e, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = -1);
                    var a,
                      o = t.length;
                    if (0 === o) return -1;
                    (i = i < 0 ? Math.max(0, i + o) : Math.min(i, o - 1)),
                      (a =
                        (n = n < 0 ? Math.max(0, n + o) : Math.min(n, o - 1)) < i
                          ? n + 1 + (o - i)
                          : n - i + 1);
                    for (var r = 0; r < a; ++r) {
                      var s = (i + r) % o;
                      if (e(t[s], s)) return s;
                    }
                    return -1;
                  }
                  function a(t, e, i, n) {
                    void 0 === i && (i = -1), void 0 === n && (n = 0);
                    var a,
                      o = t.length;
                    if (0 === o) return -1;
                    a =
                      (i = i < 0 ? Math.max(0, i + o) : Math.min(i, o - 1)) <
                      (n = n < 0 ? Math.max(0, n + o) : Math.min(n, o - 1))
                        ? i + 1 + (o - n)
                        : i - n + 1;
                    for (var r = 0; r < a; ++r) {
                      var s = (i - r + o) % o;
                      if (e(t[s], s)) return s;
                    }
                    return -1;
                  }
                  function o(t, e, i) {
                    void 0 === e && (e = 0), void 0 === i && (i = -1);
                    var n = t.length;
                    if (!(n <= 1))
                      for (
                        e = e < 0 ? Math.max(0, e + n) : Math.min(e, n - 1),
                          i = i < 0 ? Math.max(0, i + n) : Math.min(i, n - 1);
                        e < i;

                      ) {
                        var a = t[e],
                          o = t[i];
                        (t[e++] = o), (t[i--] = a);
                      }
                  }
                  function r(t, e) {
                    var i = t.length;
                    if ((e < 0 && (e += i), !(e < 0 || e >= i))) {
                      for (var n = t[e], a = e + 1; a < i; ++a) t[a - 1] = t[a];
                      return (t.length = i - 1), n;
                    }
                  }
                  (t.firstIndexOf = e),
                    (t.lastIndexOf = i),
                    (t.findFirstIndex = n),
                    (t.findLastIndex = a),
                    (t.findFirstValue = function (t, e, i, a) {
                      void 0 === i && (i = 0), void 0 === a && (a = -1);
                      var o = n(t, e, i, a);
                      return -1 !== o ? t[o] : void 0;
                    }),
                    (t.findLastValue = function (t, e, i, n) {
                      void 0 === i && (i = -1), void 0 === n && (n = 0);
                      var o = a(t, e, i, n);
                      return -1 !== o ? t[o] : void 0;
                    }),
                    (t.lowerBound = function (t, e, i, n, a) {
                      void 0 === n && (n = 0), void 0 === a && (a = -1);
                      var o = t.length;
                      if (0 === o) return 0;
                      for (
                        var r = (n = n < 0 ? Math.max(0, n + o) : Math.min(n, o - 1)),
                          s =
                            (a = a < 0 ? Math.max(0, a + o) : Math.min(a, o - 1)) -
                            n +
                            1;
                        s > 0;

                      ) {
                        var l = s >> 1,
                          c = r + l;
                        i(t[c], e) < 0 ? ((r = c + 1), (s -= l + 1)) : (s = l);
                      }
                      return r;
                    }),
                    (t.upperBound = function (t, e, i, n, a) {
                      void 0 === n && (n = 0), void 0 === a && (a = -1);
                      var o = t.length;
                      if (0 === o) return 0;
                      for (
                        var r = (n = n < 0 ? Math.max(0, n + o) : Math.min(n, o - 1)),
                          s =
                            (a = a < 0 ? Math.max(0, a + o) : Math.min(a, o - 1)) -
                            n +
                            1;
                        s > 0;

                      ) {
                        var l = s >> 1,
                          c = r + l;
                        i(t[c], e) > 0 ? (s = l) : ((r = c + 1), (s -= l + 1));
                      }
                      return r;
                    }),
                    (t.shallowEqual = function (t, e, i) {
                      if (t === e) return !0;
                      if (t.length !== e.length) return !1;
                      for (var n = 0, a = t.length; n < a; ++n)
                        if (i ? !i(t[n], e[n]) : t[n] !== e[n]) return !1;
                      return !0;
                    }),
                    (t.slice = function (t, e) {
                      void 0 === e && (e = {});
                      var i = e.start,
                        n = e.stop,
                        a = e.step;
                      if ((void 0 === a && (a = 1), 0 === a))
                        throw new Error('Slice `step` cannot be zero.');
                      var o,
                        r = t.length;
                      void 0 === i
                        ? (i = a < 0 ? r - 1 : 0)
                        : i < 0
                        ? (i = Math.max(i + r, a < 0 ? -1 : 0))
                        : i >= r && (i = a < 0 ? r - 1 : r),
                        void 0 === n
                          ? (n = a < 0 ? -1 : r)
                          : n < 0
                          ? (n = Math.max(n + r, a < 0 ? -1 : 0))
                          : n >= r && (n = a < 0 ? r - 1 : r),
                        (o =
                          (a < 0 && n >= i) || (a > 0 && i >= n)
                            ? 0
                            : a < 0
                            ? Math.floor((n - i + 1) / a + 1)
                            : Math.floor((n - i - 1) / a + 1));
                      for (var s = [], l = 0; l < o; ++l) s[l] = t[i + l * a];
                      return s;
                    }),
                    (t.move = function (t, e, i) {
                      var n = t.length;
                      if (
                        !(n <= 1) &&
                        (e = e < 0 ? Math.max(0, e + n) : Math.min(e, n - 1)) !==
                          (i = i < 0 ? Math.max(0, i + n) : Math.min(i, n - 1))
                      ) {
                        for (var a = t[e], o = e < i ? 1 : -1, r = e; r !== i; r += o)
                          t[r] = t[r + o];
                        t[i] = a;
                      }
                    }),
                    (t.reverse = o),
                    (t.rotate = function (t, e, i, n) {
                      void 0 === i && (i = 0), void 0 === n && (n = -1);
                      var a = t.length;
                      if (
                        !(
                          a <= 1 ||
                          ((i = i < 0 ? Math.max(0, i + a) : Math.min(i, a - 1)),
                          (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1)),
                          i >= n)
                        )
                      ) {
                        var r = n - i + 1;
                        if (
                          (e > 0 ? (e %= r) : e < 0 && (e = ((e % r) + r) % r), 0 !== e)
                        ) {
                          var s = i + e;
                          o(t, i, s - 1), o(t, s, n), o(t, i, n);
                        }
                      }
                    }),
                    (t.fill = function (t, e, i, n) {
                      void 0 === i && (i = 0), void 0 === n && (n = -1);
                      var a = t.length;
                      if (0 !== a) {
                        var o;
                        (i = i < 0 ? Math.max(0, i + a) : Math.min(i, a - 1)),
                          (o =
                            (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1)) < i
                              ? n + 1 + (a - i)
                              : n - i + 1);
                        for (var r = 0; r < o; ++r) t[(i + r) % a] = e;
                      }
                    }),
                    (t.insert = function (t, e, i) {
                      var n = t.length;
                      e = e < 0 ? Math.max(0, e + n) : Math.min(e, n);
                      for (var a = n; a > e; --a) t[a] = t[a - 1];
                      t[e] = i;
                    }),
                    (t.removeAt = r),
                    (t.removeFirstOf = function (t, i, n, a) {
                      void 0 === n && (n = 0), void 0 === a && (a = -1);
                      var o = e(t, i, n, a);
                      return -1 !== o && r(t, o), o;
                    }),
                    (t.removeLastOf = function (t, e, n, a) {
                      void 0 === n && (n = -1), void 0 === a && (a = 0);
                      var o = i(t, e, n, a);
                      return -1 !== o && r(t, o), o;
                    }),
                    (t.removeAllOf = function (t, e, i, n) {
                      void 0 === i && (i = 0), void 0 === n && (n = -1);
                      var a = t.length;
                      if (0 === a) return 0;
                      (i = i < 0 ? Math.max(0, i + a) : Math.min(i, a - 1)),
                        (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1));
                      for (var o = 0, r = 0; r < a; ++r)
                        (i <= n && r >= i && r <= n && t[r] === e) ||
                        (n < i && (r <= n || r >= i) && t[r] === e)
                          ? o++
                          : o > 0 && (t[r - o] = t[r]);
                      return o > 0 && (t.length = a - o), o;
                    }),
                    (t.removeFirstWhere = function (t, e, i, a) {
                      void 0 === i && (i = 0), void 0 === a && (a = -1);
                      var o,
                        s = n(t, e, i, a);
                      return -1 !== s && (o = r(t, s)), { index: s, value: o };
                    }),
                    (t.removeLastWhere = function (t, e, i, n) {
                      void 0 === i && (i = -1), void 0 === n && (n = 0);
                      var o,
                        s = a(t, e, i, n);
                      return -1 !== s && (o = r(t, s)), { index: s, value: o };
                    }),
                    (t.removeAllWhere = function (t, e, i, n) {
                      void 0 === i && (i = 0), void 0 === n && (n = -1);
                      var a = t.length;
                      if (0 === a) return 0;
                      (i = i < 0 ? Math.max(0, i + a) : Math.min(i, a - 1)),
                        (n = n < 0 ? Math.max(0, n + a) : Math.min(n, a - 1));
                      for (var o = 0, r = 0; r < a; ++r)
                        (i <= n && r >= i && r <= n && e(t[r], r)) ||
                        (n < i && (r <= n || r >= i) && e(t[r], r))
                          ? o++
                          : o > 0 && (t[r - o] = t[r]);
                      return o > 0 && (t.length = a - o), o;
                    });
                })(t.ArrayExt || (t.ArrayExt = {}));
              var n,
                a = (function () {
                  function t(t) {
                    (this._index = 0), (this._source = t);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      if (!(this._index >= this._source.length))
                        return this._source[this._index++];
                    }),
                    t
                  );
                })(),
                o = (function () {
                  function t(t, e) {
                    void 0 === e && (e = Object.keys(t)),
                      (this._index = 0),
                      (this._source = t),
                      (this._keys = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source, this._keys);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      if (!(this._index >= this._keys.length)) {
                        var t = this._keys[this._index++];
                        return t in this._source ? t : this.next();
                      }
                    }),
                    t
                  );
                })(),
                r = (function () {
                  function t(t, e) {
                    void 0 === e && (e = Object.keys(t)),
                      (this._index = 0),
                      (this._source = t),
                      (this._keys = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source, this._keys);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      if (!(this._index >= this._keys.length)) {
                        var t = this._keys[this._index++];
                        return t in this._source ? this._source[t] : this.next();
                      }
                    }),
                    t
                  );
                })(),
                s = (function () {
                  function t(t, e) {
                    void 0 === e && (e = Object.keys(t)),
                      (this._index = 0),
                      (this._source = t),
                      (this._keys = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source, this._keys);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      if (!(this._index >= this._keys.length)) {
                        var t = this._keys[this._index++];
                        return t in this._source ? [t, this._source[t]] : this.next();
                      }
                    }),
                    t
                  );
                })(),
                l = (function () {
                  function t(t) {
                    this._fn = t;
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      throw new Error('An `FnIterator` cannot be cloned.');
                    }),
                    (t.prototype.next = function () {
                      return this._fn.call(void 0);
                    }),
                    t
                  );
                })(),
                c = (function () {
                  function t(t) {
                    (this._cloned = !1), (this._source = t), (this._active = void 0);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source.clone());
                      return (
                        (e._active = this._active && this._active.clone()),
                        (e._cloned = !0),
                        (this._cloned = !0),
                        e
                      );
                    }),
                    (t.prototype.next = function () {
                      if (void 0 === this._active) {
                        var t = this._source.next();
                        if (void 0 === t) return;
                        this._active = this._cloned ? t.clone() : t;
                      }
                      var e = this._active.next();
                      return void 0 !== e ? e : ((this._active = void 0), this.next());
                    }),
                    t
                  );
                })(),
                p = (function () {
                  function t() {}
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      return new t();
                    }),
                    (t.prototype.next = function () {}),
                    t
                  );
                })(),
                d = (function () {
                  function t(t, e) {
                    (this._source = t), (this._index = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      return new t(this._source.clone(), this._index);
                    }),
                    (t.prototype.next = function () {
                      var t = this._source.next();
                      if (void 0 !== t) return [this._index++, t];
                    }),
                    t
                  );
                })(),
                u = (function () {
                  function t(t, e) {
                    (this._index = 0), (this._source = t), (this._fn = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source.clone(), this._fn);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      for (
                        var t, e = this._fn, i = this._source;
                        void 0 !== (t = i.next());

                      )
                        if (e(t, this._index++)) return t;
                    }),
                    t
                  );
                })(),
                h = (function () {
                  function t(t, e) {
                    (this._index = 0), (this._source = t), (this._fn = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source.clone(), this._fn);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      var t = this._source.next();
                      if (void 0 !== t) return this._fn.call(void 0, t, this._index++);
                    }),
                    t
                  );
                })(),
                m = (function () {
                  function t(t, e, i) {
                    (this._index = 0),
                      (this._start = t),
                      (this._stop = e),
                      (this._step = i),
                      (this._length = n.rangeLength(t, e, i));
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._start, this._stop, this._step);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      if (!(this._index >= this._length))
                        return this._start + this._step * this._index++;
                    }),
                    t
                  );
                })();
              (n || (n = {})).rangeLength = function (t, e, i) {
                return 0 === i
                  ? 1 / 0
                  : (t > e && i > 0) || (t < e && i < 0)
                  ? 0
                  : Math.ceil((e - t) / i);
              };
              var f = (function () {
                  function t(t, e) {
                    (this._value = t), (this._count = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      return new t(this._value, this._count);
                    }),
                    (t.prototype.next = function () {
                      if (!(this._count <= 0)) return this._count--, this._value;
                    }),
                    t
                  );
                })(),
                v = (function () {
                  function t(t) {
                    (this._source = t), (this._index = t.length - 1);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      var e = new t(this._source);
                      return (e._index = this._index), e;
                    }),
                    (t.prototype.next = function () {
                      if (!(this._index < 0 || this._index >= this._source.length))
                        return this._source[this._index--];
                    }),
                    t
                  );
                })(),
                g = (function () {
                  function t(t, e) {
                    (this._source = t), (this._step = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      return new t(this._source.clone(), this._step);
                    }),
                    (t.prototype.next = function () {
                      for (var t = this._source.next(), e = this._step - 1; e > 0; --e)
                        this._source.next();
                      return t;
                    }),
                    t
                  );
                })();
              (t.StringExt = void 0),
                (function (t) {
                  function e(t, e, i) {
                    void 0 === i && (i = 0);
                    for (
                      var n = new Array(e.length), a = 0, o = i, r = e.length;
                      a < r;
                      ++a, ++o
                    ) {
                      if (-1 === (o = t.indexOf(e[a], o))) return null;
                      n[a] = o;
                    }
                    return n;
                  }
                  (t.findIndices = e),
                    (t.matchSumOfSquares = function (t, i, n) {
                      void 0 === n && (n = 0);
                      var a = e(t, i, n);
                      if (!a) return null;
                      for (var o = 0, r = 0, s = a.length; r < s; ++r) {
                        var l = a[r] - n;
                        o += l * l;
                      }
                      return { score: o, indices: a };
                    }),
                    (t.matchSumOfDeltas = function (t, i, n) {
                      void 0 === n && (n = 0);
                      var a = e(t, i, n);
                      if (!a) return null;
                      for (var o = 0, r = n - 1, s = 0, l = a.length; s < l; ++s) {
                        var c = a[s];
                        (o += c - r - 1), (r = c);
                      }
                      return { score: o, indices: a };
                    }),
                    (t.highlight = function (t, e, i) {
                      for (var n = [], a = 0, o = 0, r = e.length; a < r; ) {
                        for (var s = e[a], l = e[a]; ++a < r && e[a] === l + 1; ) l++;
                        o < s && n.push(t.slice(o, s)),
                          s < l + 1 && n.push(i(t.slice(s, l + 1))),
                          (o = l + 1);
                      }
                      return o < t.length && n.push(t.slice(o)), n;
                    }),
                    (t.cmp = function (t, e) {
                      return t < e ? -1 : t > e ? 1 : 0;
                    });
                })(t.StringExt || (t.StringExt = {}));
              var x = (function () {
                  function t(t, e) {
                    (this._source = t), (this._count = e);
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      return new t(this._source.clone(), this._count);
                    }),
                    (t.prototype.next = function () {
                      if (!(this._count <= 0)) {
                        var t = this._source.next();
                        if (void 0 !== t) return this._count--, t;
                      }
                    }),
                    t
                  );
                })(),
                _ = (function () {
                  function t(t) {
                    this._source = t;
                  }
                  return (
                    (t.prototype.iter = function () {
                      return this;
                    }),
                    (t.prototype.clone = function () {
                      return new t(
                        this._source.map(function (t) {
                          return t.clone();
                        })
                      );
                    }),
                    (t.prototype.next = function () {
                      for (
                        var t = new Array(this._source.length),
                          e = 0,
                          i = this._source.length;
                        e < i;
                        ++e
                      ) {
                        var n = this._source[e].next();
                        if (void 0 === n) return;
                        t[e] = n;
                      }
                      return t;
                    }),
                    t
                  );
                })();
              (t.ArrayIterator = a),
                (t.ChainIterator = c),
                (t.EmptyIterator = p),
                (t.EnumerateIterator = d),
                (t.FilterIterator = u),
                (t.FnIterator = l),
                (t.ItemIterator = s),
                (t.KeyIterator = o),
                (t.MapIterator = h),
                (t.RangeIterator = m),
                (t.RepeatIterator = f),
                (t.RetroArrayIterator = v),
                (t.StrideIterator = g),
                (t.TakeIterator = x),
                (t.ValueIterator = r),
                (t.ZipIterator = _),
                (t.chain = function () {
                  for (var t = [], i = 0; i < arguments.length; i++)
                    t[i] = arguments[i];
                  return new c(e(t.map(e)));
                }),
                (t.each = i),
                (t.empty = function () {
                  return new p();
                }),
                (t.enumerate = function (t, i) {
                  return void 0 === i && (i = 0), new d(e(t), i);
                }),
                (t.every = function (t, i) {
                  for (var n, a = 0, o = e(t); void 0 !== (n = o.next()); )
                    if (!i(n, a++)) return !1;
                  return !0;
                }),
                (t.filter = function (t, i) {
                  return new u(e(t), i);
                }),
                (t.find = function (t, i) {
                  for (var n, a = 0, o = e(t); void 0 !== (n = o.next()); )
                    if (i(n, a++)) return n;
                }),
                (t.findIndex = function (t, i) {
                  for (var n, a = 0, o = e(t); void 0 !== (n = o.next()); )
                    if (i(n, a++)) return a - 1;
                  return -1;
                }),
                (t.iter = e),
                (t.iterFn = function (t) {
                  return new l(t);
                }),
                (t.iterItems = function (t) {
                  return new s(t);
                }),
                (t.iterKeys = function (t) {
                  return new o(t);
                }),
                (t.iterValues = function (t) {
                  return new r(t);
                }),
                (t.map = function (t, i) {
                  return new h(e(t), i);
                }),
                (t.max = function (t, i) {
                  var n = e(t),
                    a = n.next();
                  if (void 0 !== a) {
                    for (var o = a; void 0 !== (a = n.next()); ) i(a, o) > 0 && (o = a);
                    return o;
                  }
                }),
                (t.min = function (t, i) {
                  var n = e(t),
                    a = n.next();
                  if (void 0 !== a) {
                    for (var o = a; void 0 !== (a = n.next()); ) i(a, o) < 0 && (o = a);
                    return o;
                  }
                }),
                (t.minmax = function (t, i) {
                  var n = e(t),
                    a = n.next();
                  if (void 0 !== a) {
                    for (var o = a, r = a; void 0 !== (a = n.next()); )
                      i(a, o) < 0 ? (o = a) : i(a, r) > 0 && (r = a);
                    return [o, r];
                  }
                }),
                (t.once = function (t) {
                  return new f(t, 1);
                }),
                (t.range = function (t, e, i) {
                  return void 0 === e
                    ? new m(0, t, 1)
                    : new m(t, e, void 0 === i ? 1 : i);
                }),
                (t.reduce = function (t, i, n) {
                  var a = 0,
                    o = e(t),
                    r = o.next();
                  if (void 0 === r && void 0 === n)
                    throw new TypeError(
                      'Reduce of empty iterable with no initial value.'
                    );
                  if (void 0 === r) return n;
                  var s,
                    l,
                    c = o.next();
                  if (void 0 === c && void 0 === n) return r;
                  if (void 0 === c) return i(n, r, a++);
                  for (
                    s = i(void 0 === n ? r : i(n, r, a++), c, a++);
                    void 0 !== (l = o.next());

                  )
                    s = i(s, l, a++);
                  return s;
                }),
                (t.repeat = function (t, e) {
                  return new f(t, e);
                }),
                (t.retro = function (t) {
                  return 'function' == typeof t.retro ? t.retro() : new v(t);
                }),
                (t.some = function (t, i) {
                  for (var n, a = 0, o = e(t); void 0 !== (n = o.next()); )
                    if (i(n, a++)) return !0;
                  return !1;
                }),
                (t.stride = function (t, i) {
                  return new g(e(t), i);
                }),
                (t.take = function (t, i) {
                  return new x(e(t), i);
                }),
                (t.toArray = function (t) {
                  for (var i, n = 0, a = [], o = e(t); void 0 !== (i = o.next()); )
                    a[n++] = i;
                  return a;
                }),
                (t.toObject = function (t) {
                  for (var i, n = e(t), a = {}; void 0 !== (i = n.next()); )
                    a[i[0]] = i[1];
                  return a;
                }),
                (t.topologicSort = function (t) {
                  var e = [],
                    n = new Set(),
                    a = new Map();
                  return (
                    i(t, function (t) {
                      var e = t[0],
                        i = t[1],
                        n = a.get(i);
                      n ? n.push(e) : a.set(i, [e]);
                    }),
                    a.forEach(function (t, e) {
                      o(e);
                    }),
                    e
                  );
                  function o(t) {
                    if (!n.has(t)) {
                      n.add(t);
                      var i = a.get(t);
                      i && i.forEach(o), e.push(t);
                    }
                  }
                }),
                (t.zip = function () {
                  for (var t = [], i = 0; i < arguments.length; i++)
                    t[i] = arguments[i];
                  return new _(t.map(e));
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            'object' == typeof t && void 0 !== e
              ? n(t)
              : 'function' == typeof define && __webpack_require__.amdO
              ? define(['exports'], n)
              : n(
                  ((i =
                    'undefined' != typeof globalThis
                      ? globalThis
                      : i || self).lumino_algorithm = {})
                );
        }),
        Vn = fe((t, e) => {
          var i, n;
          (i = t),
            (n = function (t) {
              var e, i, n;
              (t.AttachedProperty = (function () {
                function t(t) {
                  (this._pid = e.nextPID()),
                    (this.name = t.name),
                    (this._create = t.create),
                    (this._coerce = t.coerce || null),
                    (this._compare = t.compare || null),
                    (this._changed = t.changed || null);
                }
                return (
                  (t.prototype.get = function (t) {
                    var i = e.ensureMap(t);
                    return this._pid in i
                      ? i[this._pid]
                      : (i[this._pid] = this._createValue(t));
                  }),
                  (t.prototype.set = function (t, i) {
                    var n,
                      a = e.ensureMap(t);
                    n =
                      this._pid in a
                        ? a[this._pid]
                        : (a[this._pid] = this._createValue(t));
                    var o = this._coerceValue(t, i);
                    this._maybeNotify(t, n, (a[this._pid] = o));
                  }),
                  (t.prototype.coerce = function (t) {
                    var i,
                      n = e.ensureMap(t);
                    i =
                      this._pid in n
                        ? n[this._pid]
                        : (n[this._pid] = this._createValue(t));
                    var a = this._coerceValue(t, i);
                    this._maybeNotify(t, i, (n[this._pid] = a));
                  }),
                  (t.prototype._createValue = function (t) {
                    return (0, this._create)(t);
                  }),
                  (t.prototype._coerceValue = function (t, e) {
                    var i = this._coerce;
                    return i ? i(t, e) : e;
                  }),
                  (t.prototype._compareValue = function (t, e) {
                    var i = this._compare;
                    return i ? i(t, e) : t === e;
                  }),
                  (t.prototype._maybeNotify = function (t, e, i) {
                    var n = this._changed;
                    n && !this._compareValue(e, i) && n(t, e, i);
                  }),
                  t
                );
              })()),
                ((t.AttachedProperty || (t.AttachedProperty = {})).clearData =
                  function (t) {
                    e.ownerData.delete(t);
                  }),
                ((i = e || (e = {})).ownerData = new WeakMap()),
                (i.nextPID =
                  ((n = 0),
                  function () {
                    return 'pid-' + ('' + Math.random()).slice(2) + '-' + n++;
                  })),
                (i.ensureMap = function (t) {
                  var e = i.ownerData.get(t);
                  return e || ((e = Object.create(null)), i.ownerData.set(t, e), e);
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            'object' == typeof t && void 0 !== e
              ? n(t)
              : 'function' == typeof define && __webpack_require__.amdO
              ? define(['exports'], n)
              : n(
                  ((i =
                    'undefined' != typeof globalThis
                      ? globalThis
                      : i || self).lumino_properties = {})
                );
        }),
        Gn = fe((t, e) => {
          var i, n;
          (i = t),
            (n = function (t, e, i) {
              var n, a;
              (t.Signal = (function () {
                function t(t) {
                  (this._blockedCount = 0), (this.sender = t);
                }
                return (
                  (t.prototype.block = function (t) {
                    this._blockedCount++;
                    try {
                      t();
                    } finally {
                      this._blockedCount--;
                    }
                  }),
                  (t.prototype.connect = function (t, e) {
                    return a.connect(this, t, e);
                  }),
                  (t.prototype.disconnect = function (t, e) {
                    return a.disconnect(this, t, e);
                  }),
                  (t.prototype.emit = function (t) {
                    this._blockedCount || a.emit(this, t);
                  }),
                  t
                );
              })()),
                ((n = t.Signal || (t.Signal = {})).blockAll = function (t, e) {
                  var i = a.blockedProperty;
                  i.set(t, i.get(t) + 1);
                  try {
                    e();
                  } finally {
                    i.set(t, i.get(t) - 1);
                  }
                }),
                (n.disconnectBetween = function (t, e) {
                  a.disconnectBetween(t, e);
                }),
                (n.disconnectSender = function (t) {
                  a.disconnectSender(t);
                }),
                (n.disconnectReceiver = function (t) {
                  a.disconnectReceiver(t);
                }),
                (n.disconnectAll = function (t) {
                  a.disconnectAll(t);
                }),
                (n.clearData = function (t) {
                  a.disconnectAll(t);
                }),
                (n.getExceptionHandler = function () {
                  return a.exceptionHandler;
                }),
                (n.setExceptionHandler = function (t) {
                  var e = a.exceptionHandler;
                  return (a.exceptionHandler = t), e;
                }),
                (function (t) {
                  function n(t) {
                    var i = o.get(t);
                    !i ||
                      0 === i.length ||
                      (e.each(i, function (t) {
                        if (t.signal) {
                          var e = t.thisArg || t.slot;
                          (t.signal = null), d(r.get(e));
                        }
                      }),
                      d(i));
                  }
                  function a(t) {
                    var i = r.get(t);
                    !i ||
                      0 === i.length ||
                      (e.each(i, function (t) {
                        if (t.signal) {
                          var e = t.signal.sender;
                          (t.signal = null), d(o.get(e));
                        }
                      }),
                      d(i));
                  }
                  (t.exceptionHandler = function (t) {
                    console.error(t);
                  }),
                    (t.connect = function (t, e, i) {
                      i = i || void 0;
                      var n = o.get(t.sender);
                      if ((n || ((n = []), o.set(t.sender, n)), c(n, t, e, i)))
                        return !1;
                      var a = i || e,
                        s = r.get(a);
                      s || ((s = []), r.set(a, s));
                      var l = { signal: t, slot: e, thisArg: i };
                      return n.push(l), s.push(l), !0;
                    }),
                    (t.disconnect = function (t, e, i) {
                      i = i || void 0;
                      var n = o.get(t.sender);
                      if (!n || 0 === n.length) return !1;
                      var a = c(n, t, e, i);
                      if (!a) return !1;
                      var s = i || e,
                        l = r.get(s);
                      return (a.signal = null), d(n), d(l), !0;
                    }),
                    (t.disconnectBetween = function (t, i) {
                      var n = o.get(t);
                      if (n && 0 !== n.length) {
                        var a = r.get(i);
                        !a ||
                          0 === a.length ||
                          (e.each(a, function (e) {
                            e.signal && e.signal.sender === t && (e.signal = null);
                          }),
                          d(n),
                          d(a));
                      }
                    }),
                    (t.disconnectSender = n),
                    (t.disconnectReceiver = a),
                    (t.disconnectAll = function (t) {
                      n(t), a(t);
                    }),
                    (t.emit = function (e, i) {
                      if (!(t.blockedProperty.get(e.sender) > 0)) {
                        var n = o.get(e.sender);
                        if (n && 0 !== n.length)
                          for (var a = 0, r = n.length; a < r; ++a) {
                            var s = n[a];
                            s.signal === e && p(s, i);
                          }
                      }
                    });
                  var o = new WeakMap(),
                    r = new WeakMap(),
                    s = new Set(),
                    l =
                      'function' == typeof requestAnimationFrame
                        ? requestAnimationFrame
                        : setImmediate;
                  function c(t, i, n, a) {
                    return e.find(t, function (t) {
                      return t.signal === i && t.slot === n && t.thisArg === a;
                    });
                  }
                  function p(e, i) {
                    var n = e.signal,
                      a = e.slot,
                      o = e.thisArg;
                    try {
                      a.call(o, n.sender, i);
                    } catch (e) {
                      t.exceptionHandler(e);
                    }
                  }
                  function d(t) {
                    0 === s.size && l(u), s.add(t);
                  }
                  function u() {
                    s.forEach(h), s.clear();
                  }
                  function h(t) {
                    e.ArrayExt.removeAllWhere(t, m);
                  }
                  function m(t) {
                    return null === t.signal;
                  }
                  t.blockedProperty = new i.AttachedProperty({
                    name: 'blocked',
                    create: function () {
                      return 0;
                    },
                  });
                })(a || (a = {})),
                Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            'object' == typeof t && void 0 !== e
              ? n(t, Hn(), Vn())
              : 'function' == typeof define && __webpack_require__.amdO
              ? define(['exports', '@lumino/algorithm', '@lumino/properties'], n)
              : n(
                  ((i =
                    'undefined' != typeof globalThis
                      ? globalThis
                      : i || self).lumino_signaling = {}),
                  i.lumino_algorithm,
                  i.lumino_properties
                );
        }),
        Zn = fe((t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.ActivityMonitor = void 0);
          var e = Gn();
          t.ActivityMonitor = class {
            constructor(t) {
              (this._timer = -1),
                (this._timeout = -1),
                (this._isDisposed = !1),
                (this._activityStopped = new e.Signal(this)),
                t.signal.connect(this._onSignalFired, this),
                (this._timeout = t.timeout || 1e3);
            }
            get activityStopped() {
              return this._activityStopped;
            }
            get timeout() {
              return this._timeout;
            }
            set timeout(t) {
              this._timeout = t;
            }
            get isDisposed() {
              return this._isDisposed;
            }
            dispose() {
              this._isDisposed || ((this._isDisposed = !0), e.Signal.clearData(this));
            }
            _onSignalFired(t, e) {
              clearTimeout(this._timer),
                (this._sender = t),
                (this._args = e),
                (this._timer = setTimeout(() => {
                  this._activityStopped.emit({
                    sender: this._sender,
                    args: this._args,
                  });
                }, this._timeout));
            }
          };
        }),
        Kn = fe((t) => {
          Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        Qn = fe((t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.MarkdownCodeBlocks = void 0),
            (function (t) {
              t.CODE_BLOCK_MARKER = '```';
              let e = [
                '.markdown',
                '.mdown',
                '.mkdn',
                '.md',
                '.mkd',
                '.mdwn',
                '.mdtxt',
                '.mdtext',
                '.text',
                '.txt',
                '.Rmd',
              ];
              class i {
                constructor(t) {
                  (this.startLine = t), (this.code = ''), (this.endLine = -1);
                }
              }
              (t.MarkdownCodeBlock = i),
                (t.isMarkdown = function (t) {
                  return e.indexOf(t) > -1;
                }),
                (t.findMarkdownCodeBlocks = function (e) {
                  if (!e || '' === e) return [];
                  let n = e.split('\n'),
                    a = [],
                    o = null;
                  for (let e = 0; e < n.length; e++) {
                    let r = n[e],
                      s = 0 === r.indexOf(t.CODE_BLOCK_MARKER),
                      l = null != o;
                    if (s || l)
                      if (l)
                        o &&
                          (s
                            ? ((o.endLine = e - 1), a.push(o), (o = null))
                            : (o.code += r + '\n'));
                      else {
                        o = new i(e);
                        let n = r.indexOf(t.CODE_BLOCK_MARKER),
                          s = r.lastIndexOf(t.CODE_BLOCK_MARKER);
                        n !== s &&
                          ((o.code = r.substring(n + t.CODE_BLOCK_MARKER.length, s)),
                          (o.endLine = e),
                          a.push(o),
                          (o = null));
                      }
                  }
                  return a;
                });
            })(t.MarkdownCodeBlocks || (t.MarkdownCodeBlocks = {}));
        }),
        oi = fe((t, e) => {
          var i, n;
          (i = t),
            (n = function (t) {
              (t.JSONExt = void 0),
                (function (t) {
                  function e(t) {
                    return (
                      null === t ||
                      'boolean' == typeof t ||
                      'number' == typeof t ||
                      'string' == typeof t
                    );
                  }
                  function i(t) {
                    return Array.isArray(t);
                  }
                  (t.emptyObject = Object.freeze({})),
                    (t.emptyArray = Object.freeze([])),
                    (t.isPrimitive = e),
                    (t.isArray = i),
                    (t.isObject = function (t) {
                      return !e(t) && !i(t);
                    }),
                    (t.deepEqual = function t(n, a) {
                      if (n === a) return !0;
                      if (e(n) || e(a)) return !1;
                      var o = i(n),
                        r = i(a);
                      return (
                        o === r &&
                        (o && r
                          ? (function (e, i) {
                              if (e === i) return !0;
                              if (e.length !== i.length) return !1;
                              for (var n = 0, a = e.length; n < a; ++n)
                                if (!t(e[n], i[n])) return !1;
                              return !0;
                            })(n, a)
                          : (function (e, i) {
                              if (e === i) return !0;
                              for (var n in e)
                                if (void 0 !== e[n] && !(n in i)) return !1;
                              for (var n in i)
                                if (void 0 !== i[n] && !(n in e)) return !1;
                              for (var n in e) {
                                var a = e[n],
                                  o = i[n];
                                if (
                                  !(
                                    (void 0 === a && void 0 === o) ||
                                    (void 0 !== a && void 0 !== o && t(a, o))
                                  )
                                )
                                  return !1;
                              }
                              return !0;
                            })(n, a))
                      );
                    }),
                    (t.deepCopy = function t(n) {
                      return e(n)
                        ? n
                        : i(n)
                        ? (function (e) {
                            for (
                              var i = new Array(e.length), n = 0, a = e.length;
                              n < a;
                              ++n
                            )
                              i[n] = t(e[n]);
                            return i;
                          })(n)
                        : (function (e) {
                            var i = {};
                            for (var n in e) {
                              var a = e[n];
                              void 0 !== a && (i[n] = t(a));
                            }
                            return i;
                          })(n);
                    });
                })(t.JSONExt || (t.JSONExt = {}));
              var e,
                i = (function () {
                  function t() {
                    (this._types = []), (this._values = []);
                  }
                  return (
                    (t.prototype.types = function () {
                      return this._types.slice();
                    }),
                    (t.prototype.hasData = function (t) {
                      return -1 !== this._types.indexOf(t);
                    }),
                    (t.prototype.getData = function (t) {
                      var e = this._types.indexOf(t);
                      return -1 !== e ? this._values[e] : void 0;
                    }),
                    (t.prototype.setData = function (t, e) {
                      this.clearData(t), this._types.push(t), this._values.push(e);
                    }),
                    (t.prototype.clearData = function (t) {
                      var e = this._types.indexOf(t);
                      -1 !== e && (this._types.splice(e, 1), this._values.splice(e, 1));
                    }),
                    (t.prototype.clear = function () {
                      (this._types.length = 0), (this._values.length = 0);
                    }),
                    t
                  );
                })(),
                n = (function () {
                  function t() {
                    var t = this;
                    this.promise = new Promise(function (e, i) {
                      (t._resolve = e), (t._reject = i);
                    });
                  }
                  return (
                    (t.prototype.resolve = function (t) {
                      (0, this._resolve)(t);
                    }),
                    (t.prototype.reject = function (t) {
                      (0, this._reject)(t);
                    }),
                    t
                  );
                })();
              (t.Random = void 0),
                ((t.Random || (t.Random = {})).getRandomValues =
                  (e =
                    ('undefined' != typeof window &&
                      (window.crypto || window.msCrypto)) ||
                    null) && 'function' == typeof e.getRandomValues
                    ? function (t) {
                        return e.getRandomValues(t);
                      }
                    : function (t) {
                        for (var e = 0, i = 0, n = t.length; i < n; ++i)
                          i % 4 == 0 && (e = (4294967295 * Math.random()) >>> 0),
                            (t[i] = 255 & e),
                            (e >>>= 8);
                      }),
                (t.UUID = void 0),
                ((t.UUID || (t.UUID = {})).uuid4 = (function (t) {
                  for (
                    var e = new Uint8Array(16), i = new Array(256), n = 0;
                    n < 16;
                    ++n
                  )
                    i[n] = '0' + n.toString(16);
                  for (n = 16; n < 256; ++n) i[n] = n.toString(16);
                  return function () {
                    return (
                      t(e),
                      (e[6] = 64 | (15 & e[6])),
                      (e[8] = 128 | (63 & e[8])),
                      i[e[0]] +
                        i[e[1]] +
                        i[e[2]] +
                        i[e[3]] +
                        '-' +
                        i[e[4]] +
                        i[e[5]] +
                        '-' +
                        i[e[6]] +
                        i[e[7]] +
                        '-' +
                        i[e[8]] +
                        i[e[9]] +
                        '-' +
                        i[e[10]] +
                        i[e[11]] +
                        i[e[12]] +
                        i[e[13]] +
                        i[e[14]] +
                        i[e[15]]
                    );
                  };
                })(t.Random.getRandomValues)),
                (t.MimeData = i),
                (t.PromiseDelegate = n),
                (t.Token = function (t) {
                  (this.name = t), (this._tokenStructuralPropertyT = null);
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            'object' == typeof t && void 0 !== e
              ? n(t)
              : 'function' == typeof define && __webpack_require__.amdO
              ? define(['exports'], n)
              : n(
                  ((i =
                    'undefined' != typeof globalThis
                      ? globalThis
                      : i || self).lumino_coreutils = {})
                );
        }),
        na = fe((t, e) => {
          function i(t) {
            return (
              !('number' != typeof t && !/^0x[0-9a-f]+$/i.test(t)) ||
              /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t)
            );
          }
          function n(t, e) {
            return (
              ('constructor' === e && 'function' == typeof t[e]) || '__proto__' === e
            );
          }
          e.exports = function (t, e) {
            e || (e = {});
            var a = { bools: {}, strings: {}, unknownFn: null };
            'function' == typeof e.unknown && (a.unknownFn = e.unknown),
              'boolean' == typeof e.boolean && e.boolean
                ? (a.allBools = !0)
                : []
                    .concat(e.boolean)
                    .filter(Boolean)
                    .forEach(function (t) {
                      a.bools[t] = !0;
                    });
            var o = {};
            function r(t) {
              return o[t].some(function (t) {
                return a.bools[t];
              });
            }
            Object.keys(e.alias || {}).forEach(function (t) {
              (o[t] = [].concat(e.alias[t])),
                o[t].forEach(function (e) {
                  o[e] = [t].concat(
                    o[t].filter(function (t) {
                      return e !== t;
                    })
                  );
                });
            }),
              []
                .concat(e.string)
                .filter(Boolean)
                .forEach(function (t) {
                  (a.strings[t] = !0),
                    o[t] &&
                      [].concat(o[t]).forEach(function (t) {
                        a.strings[t] = !0;
                      });
                });
            var s = e.default || {},
              l = { _: [] };
            function c(t, e, i) {
              for (var o = t, r = 0; r < e.length - 1; r++) {
                var s = e[r];
                if (n(o, s)) return;
                void 0 === o[s] && (o[s] = {}),
                  (o[s] === Object.prototype ||
                    o[s] === Number.prototype ||
                    o[s] === String.prototype) &&
                    (o[s] = {}),
                  o[s] === Array.prototype && (o[s] = []),
                  (o = o[s]);
              }
              var l = e[e.length - 1];
              n(o, l) ||
                ((o === Object.prototype ||
                  o === Number.prototype ||
                  o === String.prototype) &&
                  (o = {}),
                o === Array.prototype && (o = []),
                void 0 === o[l] || a.bools[l] || 'boolean' == typeof o[l]
                  ? (o[l] = i)
                  : Array.isArray(o[l])
                  ? o[l].push(i)
                  : (o[l] = [o[l], i]));
            }
            function p(t, e, n) {
              if (
                !n ||
                !a.unknownFn ||
                (function (t, e) {
                  return (
                    (a.allBools && /^--[^=]+$/.test(e)) ||
                    a.strings[t] ||
                    a.bools[t] ||
                    o[t]
                  );
                })(t, n) ||
                !1 !== a.unknownFn(n)
              ) {
                var r = !a.strings[t] && i(e) ? Number(e) : e;
                c(l, t.split('.'), r),
                  (o[t] || []).forEach(function (t) {
                    c(l, t.split('.'), r);
                  });
              }
            }
            Object.keys(a.bools).forEach(function (t) {
              p(t, void 0 !== s[t] && s[t]);
            });
            var d = [];
            -1 !== t.indexOf('--') &&
              ((d = t.slice(t.indexOf('--') + 1)), (t = t.slice(0, t.indexOf('--'))));
            for (var u = 0; u < t.length; u++) {
              var h,
                m,
                f = t[u];
              if (/^--.+=/.test(f)) {
                var v = f.match(/^--([^=]+)=([\s\S]*)$/);
                h = v[1];
                var g = v[2];
                a.bools[h] && (g = 'false' !== g), p(h, g, f);
              } else if (/^--no-.+/.test(f)) p((h = f.match(/^--no-(.+)/)[1]), !1, f);
              else if (/^--.+/.test(f))
                (h = f.match(/^--(.+)/)[1]),
                  void 0 === (m = t[u + 1]) ||
                  /^(-|--)[^-]/.test(m) ||
                  a.bools[h] ||
                  a.allBools ||
                  (o[h] && r(h))
                    ? /^(true|false)$/.test(m)
                      ? (p(h, 'true' === m, f), (u += 1))
                      : p(h, !a.strings[h] || '', f)
                    : (p(h, m, f), (u += 1));
              else if (/^-[^-]+/.test(f)) {
                for (var x = f.slice(1, -1).split(''), _ = !1, y = 0; y < x.length; y++)
                  if ('-' !== (m = f.slice(y + 2))) {
                    if (/[A-Za-z]/.test(x[y]) && '=' === m[0]) {
                      p(x[y], m.slice(1), f), (_ = !0);
                      break;
                    }
                    if (/[A-Za-z]/.test(x[y]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(m)) {
                      p(x[y], m, f), (_ = !0);
                      break;
                    }
                    if (x[y + 1] && x[y + 1].match(/\W/)) {
                      p(x[y], f.slice(y + 2), f), (_ = !0);
                      break;
                    }
                    p(x[y], !a.strings[x[y]] || '', f);
                  } else p(x[y], m, f);
                (h = f.slice(-1)[0]),
                  !_ &&
                    '-' !== h &&
                    (!t[u + 1] ||
                    /^(-|--)[^-]/.test(t[u + 1]) ||
                    a.bools[h] ||
                    (o[h] && r(h))
                      ? t[u + 1] && /^(true|false)$/.test(t[u + 1])
                        ? (p(h, 'true' === t[u + 1], f), (u += 1))
                        : p(h, !a.strings[h] || '', f)
                      : (p(h, t[u + 1], f), (u += 1)));
              } else if (
                ((!a.unknownFn || !1 !== a.unknownFn(f)) &&
                  l._.push(a.strings._ || !i(f) ? f : Number(f)),
                e.stopEarly)
              ) {
                l._.push.apply(l._, t.slice(u + 1));
                break;
              }
            }
            return (
              Object.keys(s).forEach(function (t) {
                (function (t, e) {
                  var i = t;
                  return (
                    e.slice(0, -1).forEach(function (t) {
                      i = i[t] || {};
                    }),
                    e[e.length - 1] in i
                  );
                })(l, t.split('.')) ||
                  (c(l, t.split('.'), s[t]),
                  (o[t] || []).forEach(function (e) {
                    c(l, e.split('.'), s[t]);
                  }));
              }),
              e['--']
                ? (l['--'] = d.slice())
                : d.forEach(function (t) {
                    l._.push(t);
                  }),
              l
            );
          };
        }),
        li = fe((t, e) => {
          function i(t) {
            if ('string' != typeof t)
              throw new TypeError(
                'Path must be a string. Received ' + JSON.stringify(t)
              );
          }
          function n(t, e) {
            for (var i, n = '', a = 0, o = -1, r = 0, s = 0; s <= t.length; ++s) {
              if (s < t.length) i = t.charCodeAt(s);
              else {
                if (47 === i) break;
                i = 47;
              }
              if (47 === i) {
                if (o !== s - 1 && 1 !== r)
                  if (o !== s - 1 && 2 === r) {
                    if (
                      n.length < 2 ||
                      2 !== a ||
                      46 !== n.charCodeAt(n.length - 1) ||
                      46 !== n.charCodeAt(n.length - 2)
                    )
                      if (n.length > 2) {
                        var l = n.lastIndexOf('/');
                        if (l !== n.length - 1) {
                          -1 === l
                            ? ((n = ''), (a = 0))
                            : (a = (n = n.slice(0, l)).length - 1 - n.lastIndexOf('/')),
                            (o = s),
                            (r = 0);
                          continue;
                        }
                      } else if (2 === n.length || 1 === n.length) {
                        (n = ''), (a = 0), (o = s), (r = 0);
                        continue;
                      }
                    e && (n.length > 0 ? (n += '/..') : (n = '..'), (a = 2));
                  } else
                    n.length > 0
                      ? (n += '/' + t.slice(o + 1, s))
                      : (n = t.slice(o + 1, s)),
                      (a = s - o - 1);
                (o = s), (r = 0);
              } else 46 === i && -1 !== r ? ++r : (r = -1);
            }
            return n;
          }
          var a = {
            resolve: function () {
              for (
                var t, e = '', a = !1, o = arguments.length - 1;
                o >= -1 && !a;
                o--
              ) {
                var r;
                o >= 0
                  ? (r = arguments[o])
                  : (void 0 === t && (t = process.cwd()), (r = t)),
                  i(r),
                  0 !== r.length && ((e = r + '/' + e), (a = 47 === r.charCodeAt(0)));
              }
              return (
                (e = n(e, !a)),
                a ? (e.length > 0 ? '/' + e : '/') : e.length > 0 ? e : '.'
              );
            },
            normalize: function (t) {
              if ((i(t), 0 === t.length)) return '.';
              var e = 47 === t.charCodeAt(0),
                a = 47 === t.charCodeAt(t.length - 1);
              return (
                0 === (t = n(t, !e)).length && !e && (t = '.'),
                t.length > 0 && a && (t += '/'),
                e ? '/' + t : t
              );
            },
            isAbsolute: function (t) {
              return i(t), t.length > 0 && 47 === t.charCodeAt(0);
            },
            join: function () {
              if (0 === arguments.length) return '.';
              for (var t, e = 0; e < arguments.length; ++e) {
                var n = arguments[e];
                i(n), n.length > 0 && (void 0 === t ? (t = n) : (t += '/' + n));
              }
              return void 0 === t ? '.' : a.normalize(t);
            },
            relative: function (t, e) {
              if ((i(t), i(e), t === e || (t = a.resolve(t)) === (e = a.resolve(e))))
                return '';
              for (var n = 1; n < t.length && 47 === t.charCodeAt(n); ++n);
              for (
                var o = t.length, r = o - n, s = 1;
                s < e.length && 47 === e.charCodeAt(s);
                ++s
              );
              for (
                var l = e.length - s, c = r < l ? r : l, p = -1, d = 0;
                d <= c;
                ++d
              ) {
                if (d === c) {
                  if (l > c) {
                    if (47 === e.charCodeAt(s + d)) return e.slice(s + d + 1);
                    if (0 === d) return e.slice(s + d);
                  } else
                    r > c &&
                      (47 === t.charCodeAt(n + d) ? (p = d) : 0 === d && (p = 0));
                  break;
                }
                var u = t.charCodeAt(n + d);
                if (u !== e.charCodeAt(s + d)) break;
                47 === u && (p = d);
              }
              var h = '';
              for (d = n + p + 1; d <= o; ++d)
                (d === o || 47 === t.charCodeAt(d)) &&
                  (0 === h.length ? (h += '..') : (h += '/..'));
              return h.length > 0
                ? h + e.slice(s + p)
                : ((s += p), 47 === e.charCodeAt(s) && ++s, e.slice(s));
            },
            _makeLong: function (t) {
              return t;
            },
            dirname: function (t) {
              if ((i(t), 0 === t.length)) return '.';
              for (
                var e = t.charCodeAt(0), n = 47 === e, a = -1, o = !0, r = t.length - 1;
                r >= 1;
                --r
              )
                if (47 === (e = t.charCodeAt(r))) {
                  if (!o) {
                    a = r;
                    break;
                  }
                } else o = !1;
              return -1 === a ? (n ? '/' : '.') : n && 1 === a ? '//' : t.slice(0, a);
            },
            basename: function (t, e) {
              if (void 0 !== e && 'string' != typeof e)
                throw new TypeError('"ext" argument must be a string');
              i(t);
              var n,
                a = 0,
                o = -1,
                r = !0;
              if (void 0 !== e && e.length > 0 && e.length <= t.length) {
                if (e.length === t.length && e === t) return '';
                var s = e.length - 1,
                  l = -1;
                for (n = t.length - 1; n >= 0; --n) {
                  var c = t.charCodeAt(n);
                  if (47 === c) {
                    if (!r) {
                      a = n + 1;
                      break;
                    }
                  } else
                    -1 === l && ((r = !1), (l = n + 1)),
                      s >= 0 &&
                        (c === e.charCodeAt(s)
                          ? -1 == --s && (o = n)
                          : ((s = -1), (o = l)));
                }
                return a === o ? (o = l) : -1 === o && (o = t.length), t.slice(a, o);
              }
              for (n = t.length - 1; n >= 0; --n)
                if (47 === t.charCodeAt(n)) {
                  if (!r) {
                    a = n + 1;
                    break;
                  }
                } else -1 === o && ((r = !1), (o = n + 1));
              return -1 === o ? '' : t.slice(a, o);
            },
            extname: function (t) {
              i(t);
              for (
                var e = -1, n = 0, a = -1, o = !0, r = 0, s = t.length - 1;
                s >= 0;
                --s
              ) {
                var l = t.charCodeAt(s);
                if (47 !== l)
                  -1 === a && ((o = !1), (a = s + 1)),
                    46 === l
                      ? -1 === e
                        ? (e = s)
                        : 1 !== r && (r = 1)
                      : -1 !== e && (r = -1);
                else if (!o) {
                  n = s + 1;
                  break;
                }
              }
              return -1 === e ||
                -1 === a ||
                0 === r ||
                (1 === r && e === a - 1 && e === n + 1)
                ? ''
                : t.slice(e, a);
            },
            format: function (t) {
              if (null === t || 'object' != typeof t)
                throw new TypeError(
                  'The "pathObject" argument must be of type Object. Received type ' +
                    typeof t
                );
              return (function (t, e) {
                var i = e.dir || e.root,
                  n = e.base || (e.name || '') + (e.ext || '');
                return i ? (i === e.root ? i + n : i + '/' + n) : n;
              })(0, t);
            },
            parse: function (t) {
              i(t);
              var e = { root: '', dir: '', base: '', ext: '', name: '' };
              if (0 === t.length) return e;
              var n,
                a = t.charCodeAt(0),
                o = 47 === a;
              o ? ((e.root = '/'), (n = 1)) : (n = 0);
              for (
                var r = -1, s = 0, l = -1, c = !0, p = t.length - 1, d = 0;
                p >= n;
                --p
              )
                if (47 !== (a = t.charCodeAt(p)))
                  -1 === l && ((c = !1), (l = p + 1)),
                    46 === a
                      ? -1 === r
                        ? (r = p)
                        : 1 !== d && (d = 1)
                      : -1 !== r && (d = -1);
                else if (!c) {
                  s = p + 1;
                  break;
                }
              return (
                -1 === r ||
                -1 === l ||
                0 === d ||
                (1 === d && r === l - 1 && r === s + 1)
                  ? -1 !== l &&
                    (e.base = e.name = 0 === s && o ? t.slice(1, l) : t.slice(s, l))
                  : (0 === s && o
                      ? ((e.name = t.slice(1, r)), (e.base = t.slice(1, l)))
                      : ((e.name = t.slice(s, r)), (e.base = t.slice(s, l))),
                    (e.ext = t.slice(r, l))),
                s > 0 ? (e.dir = t.slice(0, s - 1)) : o && (e.dir = '/'),
                e
              );
            },
            sep: '/',
            delimiter: ':',
            win32: null,
            posix: null,
          };
          (a.posix = a), (e.exports = a);
        }),
        oa = fe((t, e) => {
          e.exports = function (t, e) {
            if (((e = e.split(':')[0]), !(t = +t))) return !1;
            switch (e) {
              case 'http':
              case 'ws':
                return 80 !== t;
              case 'https':
              case 'wss':
                return 443 !== t;
              case 'ftp':
                return 21 !== t;
              case 'gopher':
                return 70 !== t;
              case 'file':
                return !1;
            }
            return 0 !== t;
          };
        }),
        da = fe((t) => {
          var e = Object.prototype.hasOwnProperty;
          function i(t) {
            try {
              return decodeURIComponent(t.replace(/\+/g, ' '));
            } catch {
              return null;
            }
          }
          function n(t) {
            try {
              return encodeURIComponent(t);
            } catch {
              return null;
            }
          }
          (t.stringify = function (t, i) {
            i = i || '';
            var a,
              o,
              r = [];
            for (o in ('string' != typeof i && (i = '?'), t))
              if (e.call(t, o)) {
                if (
                  (!(a = t[o]) && (null == a || isNaN(a)) && (a = ''),
                  (o = n(o)),
                  (a = n(a)),
                  null === o || null === a)
                )
                  continue;
                r.push(o + '=' + a);
              }
            return r.length ? i + r.join('&') : '';
          }),
            (t.parse = function (t) {
              for (var e, n = /([^=?#&]+)=?([^&]*)/g, a = {}; (e = n.exec(t)); ) {
                var o = i(e[1]),
                  r = i(e[2]);
                null === o || null === r || o in a || (a[o] = r);
              }
              return a;
            });
        }),
        _a = fe((t, e) => {
          var i = oa(),
            n = da(),
            a =
              /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
            o = /[\n\r\t]/g,
            r = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            s = /:\d+$/,
            l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            c = /^[a-zA-Z]:/;
          function p(t) {
            return (t || '').toString().replace(a, '');
          }
          var d = [
              ['#', 'hash'],
              ['?', 'query'],
              function (t, e) {
                return m(e.protocol) ? t.replace(/\\/g, '/') : t;
              },
              ['/', 'pathname'],
              ['@', 'auth', 1],
              [NaN, 'host', void 0, 1, 1],
              [/:(\d*)$/, 'port', void 0, 1],
              [NaN, 'hostname', void 0, 1, 1],
            ],
            u = { hash: 1, query: 1 };
          function h(t) {
            var e,
              i =
                ('undefined' != typeof window
                  ? window
                  : void 0 !== __webpack_require__.g
                  ? __webpack_require__.g
                  : 'undefined' != typeof self
                  ? self
                  : {}
                ).location || {},
              n = {},
              a = typeof (t = t || i);
            if ('blob:' === t.protocol) n = new v(unescape(t.pathname), {});
            else if ('string' === a) for (e in ((n = new v(t, {})), u)) delete n[e];
            else if ('object' === a) {
              for (e in t) e in u || (n[e] = t[e]);
              void 0 === n.slashes && (n.slashes = r.test(t.href));
            }
            return n;
          }
          function m(t) {
            return (
              'file:' === t ||
              'ftp:' === t ||
              'http:' === t ||
              'https:' === t ||
              'ws:' === t ||
              'wss:' === t
            );
          }
          function f(t, e) {
            (t = (t = p(t)).replace(o, '')), (e = e || {});
            var i,
              n = l.exec(t),
              a = n[1] ? n[1].toLowerCase() : '',
              r = !!n[2],
              s = !!n[3],
              c = 0;
            return (
              r
                ? s
                  ? ((i = n[2] + n[3] + n[4]), (c = n[2].length + n[3].length))
                  : ((i = n[2] + n[4]), (c = n[2].length))
                : s
                ? ((i = n[3] + n[4]), (c = n[3].length))
                : (i = n[4]),
              'file:' === a
                ? c >= 2 && (i = i.slice(2))
                : m(a)
                ? (i = n[4])
                : a
                ? r && (i = i.slice(2))
                : c >= 2 && m(e.protocol) && (i = n[4]),
              { protocol: a, slashes: r || m(a), slashesCount: c, rest: i }
            );
          }
          function v(t, e, a) {
            if (((t = (t = p(t)).replace(o, '')), !(this instanceof v)))
              return new v(t, e, a);
            var r,
              s,
              l,
              u,
              g,
              x,
              _ = d.slice(),
              y = typeof e,
              w = this,
              b = 0;
            for (
              'object' !== y && 'string' !== y && ((a = e), (e = null)),
                a && 'function' != typeof a && (a = n.parse),
                r = !(s = f(t || '', (e = h(e)))).protocol && !s.slashes,
                w.slashes = s.slashes || (r && e.slashes),
                w.protocol = s.protocol || e.protocol || '',
                t = s.rest,
                (('file:' === s.protocol && (2 !== s.slashesCount || c.test(t))) ||
                  (!s.slashes &&
                    (s.protocol || s.slashesCount < 2 || !m(w.protocol)))) &&
                  (_[3] = [/(.*)/, 'pathname']);
              b < _.length;
              b++
            )
              'function' != typeof (u = _[b])
                ? ((l = u[0]),
                  (x = u[1]),
                  l != l
                    ? (w[x] = t)
                    : 'string' == typeof l
                    ? ~(g = '@' === l ? t.lastIndexOf(l) : t.indexOf(l)) &&
                      ('number' == typeof u[2]
                        ? ((w[x] = t.slice(0, g)), (t = t.slice(g + u[2])))
                        : ((w[x] = t.slice(g)), (t = t.slice(0, g))))
                    : (g = l.exec(t)) && ((w[x] = g[1]), (t = t.slice(0, g.index))),
                  (w[x] = w[x] || (r && u[3] && e[x]) || ''),
                  u[4] && (w[x] = w[x].toLowerCase()))
                : (t = u(t, w));
            a && (w.query = a(w.query)),
              r &&
                e.slashes &&
                '/' !== w.pathname.charAt(0) &&
                ('' !== w.pathname || '' !== e.pathname) &&
                (w.pathname = (function (t, e) {
                  if ('' === t) return e;
                  for (
                    var i = (e || '/').split('/').slice(0, -1).concat(t.split('/')),
                      n = i.length,
                      a = i[n - 1],
                      o = !1,
                      r = 0;
                    n--;

                  )
                    '.' === i[n]
                      ? i.splice(n, 1)
                      : '..' === i[n]
                      ? (i.splice(n, 1), r++)
                      : r && (0 === n && (o = !0), i.splice(n, 1), r--);
                  return (
                    o && i.unshift(''),
                    ('.' === a || '..' === a) && i.push(''),
                    i.join('/')
                  );
                })(w.pathname, e.pathname)),
              '/' !== w.pathname.charAt(0) &&
                m(w.protocol) &&
                (w.pathname = '/' + w.pathname),
              i(w.port, w.protocol) || ((w.host = w.hostname), (w.port = '')),
              (w.username = w.password = ''),
              w.auth &&
                (~(g = w.auth.indexOf(':'))
                  ? ((w.username = w.auth.slice(0, g)),
                    (w.username = encodeURIComponent(decodeURIComponent(w.username))),
                    (w.password = w.auth.slice(g + 1)),
                    (w.password = encodeURIComponent(decodeURIComponent(w.password))))
                  : (w.username = encodeURIComponent(decodeURIComponent(w.auth))),
                (w.auth = w.password ? w.username + ':' + w.password : w.username)),
              (w.origin =
                'file:' !== w.protocol && m(w.protocol) && w.host
                  ? w.protocol + '//' + w.host
                  : 'null'),
              (w.href = w.toString());
          }
          (v.prototype = {
            set: function (t, e, a) {
              var o = this;
              switch (t) {
                case 'query':
                  'string' == typeof e && e.length && (e = (a || n.parse)(e)),
                    (o[t] = e);
                  break;
                case 'port':
                  (o[t] = e),
                    i(e, o.protocol)
                      ? e && (o.host = o.hostname + ':' + e)
                      : ((o.host = o.hostname), (o[t] = ''));
                  break;
                case 'hostname':
                  (o[t] = e), o.port && (e += ':' + o.port), (o.host = e);
                  break;
                case 'host':
                  (o[t] = e),
                    s.test(e)
                      ? ((e = e.split(':')),
                        (o.port = e.pop()),
                        (o.hostname = e.join(':')))
                      : ((o.hostname = e), (o.port = ''));
                  break;
                case 'protocol':
                  (o.protocol = e.toLowerCase()), (o.slashes = !a);
                  break;
                case 'pathname':
                case 'hash':
                  if (e) {
                    var r = 'pathname' === t ? '/' : '#';
                    o[t] = e.charAt(0) !== r ? r + e : e;
                  } else o[t] = e;
                  break;
                case 'username':
                case 'password':
                  o[t] = encodeURIComponent(e);
                  break;
                case 'auth':
                  var l = e.indexOf(':');
                  ~l
                    ? ((o.username = e.slice(0, l)),
                      (o.username = encodeURIComponent(decodeURIComponent(o.username))),
                      (o.password = e.slice(l + 1)),
                      (o.password = encodeURIComponent(decodeURIComponent(o.password))))
                    : (o.username = encodeURIComponent(decodeURIComponent(e)));
              }
              for (var c = 0; c < d.length; c++) {
                var p = d[c];
                p[4] && (o[p[1]] = o[p[1]].toLowerCase());
              }
              return (
                (o.auth = o.password ? o.username + ':' + o.password : o.username),
                (o.origin =
                  'file:' !== o.protocol && m(o.protocol) && o.host
                    ? o.protocol + '//' + o.host
                    : 'null'),
                (o.href = o.toString()),
                o
              );
            },
            toString: function (t) {
              (!t || 'function' != typeof t) && (t = n.stringify);
              var e,
                i = this,
                a = i.host,
                o = i.protocol;
              o && ':' !== o.charAt(o.length - 1) && (o += ':');
              var r = o + ((i.protocol && i.slashes) || m(i.protocol) ? '//' : '');
              return (
                i.username
                  ? ((r += i.username),
                    i.password && (r += ':' + i.password),
                    (r += '@'))
                  : i.password
                  ? ((r += ':' + i.password), (r += '@'))
                  : 'file:' !== i.protocol &&
                    m(i.protocol) &&
                    !a &&
                    '/' !== i.pathname &&
                    (r += '@'),
                (':' === a[a.length - 1] || (s.test(i.hostname) && !i.port)) &&
                  (a += ':'),
                (r += a + i.pathname),
                (e = 'object' == typeof i.query ? t(i.query) : i.query) &&
                  (r += '?' !== e.charAt(0) ? '?' + e : e),
                i.hash && (r += i.hash),
                r
              );
            },
          }),
            (v.extractProtocol = f),
            (v.location = h),
            (v.trimLeft = p),
            (v.qs = n),
            (e.exports = v);
        }),
        $i = fe((t) => {
          var e =
            (t && t.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.URLExt = void 0);
          var i = li(),
            n = e(_a());
          !(function (t) {
            function e(t) {
              if ('undefined' != typeof document && document) {
                let e = document.createElement('a');
                return (e.href = t), e;
              }
              return n.default(t);
            }
            function a(...t) {
              let e = n.default(t[0], {}),
                a = `${e.protocol}${e.slashes ? '//' : ''}${e.auth}${
                  e.auth ? '@' : ''
                }${e.host}`,
                o = i.posix.join(
                  `${a && '/' !== e.pathname[0] ? '/' : ''}${e.pathname}`,
                  ...t.slice(1)
                );
              return `${a}${'.' === o ? '' : o}`;
            }
            (t.parse = e),
              (t.getHostName = function (t) {
                return n.default(t).hostname;
              }),
              (t.normalize = function (t) {
                return t && e(t).toString();
              }),
              (t.join = a),
              (t.encodeParts = function (t) {
                return a(...t.split('/').map(encodeURIComponent));
              }),
              (t.objectToQueryString = function (t) {
                let e = Object.keys(t).filter((t) => t.length > 0);
                return e.length
                  ? '?' +
                      e
                        .map((e) => {
                          let i = encodeURIComponent(String(t[e]));
                          return e + (i ? '=' + i : '');
                        })
                        .join('&')
                  : '';
              }),
              (t.queryStringToObject = function (t) {
                return t
                  .replace(/^\?/, '')
                  .split('&')
                  .reduce((t, e) => {
                    let [i, n] = e.split('=');
                    return i.length > 0 && (t[i] = decodeURIComponent(n || '')), t;
                  }, {});
              }),
              (t.isLocal = function (t) {
                let { protocol: i } = e(t);
                return (!i || 0 !== t.toLowerCase().indexOf(i)) && 0 !== t.indexOf('/');
              });
          })(t.URLExt || (t.URLExt = {}));
        }),
        xa = fe((exports, module) => {
          var __importDefault =
            (exports && exports.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(exports, '__esModule', { value: !0 }),
            (exports.PageConfig = void 0);
          var coreutils_1 = oi(),
            minimist_1 = __importDefault(na()),
            url_1 = $i(),
            PageConfig;
          (function (PageConfig) {
            function getOption(name) {
              if (configData) return configData[name] || getBodyData(name);
              configData = Object.create(null);
              let found = !1;
              if ('undefined' != typeof document && document) {
                let t = document.getElementById('jupyter-config-data');
                t && ((configData = JSON.parse(t.textContent || '')), (found = !0));
              }
              if (!found && void 0 !== process && process.argv)
                try {
                  let cli = minimist_1.default(process.argv.slice(2)),
                    path = li(),
                    fullPath = '';
                  'jupyter-config-data' in cli
                    ? (fullPath = path.resolve(cli['jupyter-config-data']))
                    : 'JUPYTER_CONFIG_DATA' in process.env &&
                      (fullPath = path.resolve(process.env.JUPYTER_CONFIG_DATA)),
                    fullPath && (configData = eval('require')(fullPath));
                } catch (t) {
                  console.error(t);
                }
              if (coreutils_1.JSONExt.isObject(configData))
                for (let t in configData)
                  'string' != typeof configData[t] &&
                    (configData[t] = JSON.stringify(configData[t]));
              else configData = Object.create(null);
              return configData[name] || getBodyData(name);
            }
            function setOption(t, e) {
              let i = getOption(t);
              return (configData[t] = e), i;
            }
            function getBaseUrl() {
              return url_1.URLExt.normalize(getOption('baseUrl') || '/');
            }
            function getTreeUrl() {
              return url_1.URLExt.join(getBaseUrl(), getOption('treeUrl'));
            }
            function getShareUrl() {
              return url_1.URLExt.normalize(getOption('shareUrl') || getBaseUrl());
            }
            function getTreeShareUrl() {
              return url_1.URLExt.normalize(
                url_1.URLExt.join(getShareUrl(), getOption('treeUrl'))
              );
            }
            function getUrl(t) {
              var e, i, n, a;
              let o = t.toShare ? getShareUrl() : getBaseUrl(),
                r = null !== (e = t.mode) && void 0 !== e ? e : getOption('mode'),
                s =
                  null !== (i = t.workspace) && void 0 !== i
                    ? i
                    : getOption('workspace'),
                l = 'single-document' === r ? 'doc' : 'lab';
              (o = url_1.URLExt.join(o, l)),
                s !== PageConfig.defaultWorkspace &&
                  (o = url_1.URLExt.join(
                    o,
                    'workspaces',
                    encodeURIComponent(
                      null !== (n = getOption('workspace')) && void 0 !== n
                        ? n
                        : PageConfig.defaultWorkspace
                    )
                  ));
              let c =
                null !== (a = t.treePath) && void 0 !== a ? a : getOption('treePath');
              return (
                c && (o = url_1.URLExt.join(o, 'tree', url_1.URLExt.encodeParts(c))), o
              );
            }
            function getWsUrl(t) {
              let e = getOption('wsUrl');
              if (!e) {
                if (
                  0 !==
                  (t = t ? url_1.URLExt.normalize(t) : getBaseUrl()).indexOf('http')
                )
                  return '';
                e = 'ws' + t.slice(4);
              }
              return url_1.URLExt.normalize(e);
            }
            function getNBConvertURL({ path: t, format: e, download: i }) {
              let n = url_1.URLExt.encodeParts(t),
                a = url_1.URLExt.join(getBaseUrl(), 'nbconvert', e, n);
              return i ? a + '?download=true' : a;
            }
            function getToken() {
              return getOption('token') || getBodyData('jupyterApiToken');
            }
            function getNotebookVersion() {
              let t = getOption('notebookVersion');
              return '' === t ? [0, 0, 0] : JSON.parse(t);
            }
            (PageConfig.getOption = getOption),
              (PageConfig.setOption = setOption),
              (PageConfig.getBaseUrl = getBaseUrl),
              (PageConfig.getTreeUrl = getTreeUrl),
              (PageConfig.getShareUrl = getShareUrl),
              (PageConfig.getTreeShareUrl = getTreeShareUrl),
              (PageConfig.getUrl = getUrl),
              (PageConfig.defaultWorkspace = 'default'),
              (PageConfig.getWsUrl = getWsUrl),
              (PageConfig.getNBConvertURL = getNBConvertURL),
              (PageConfig.getToken = getToken),
              (PageConfig.getNotebookVersion = getNotebookVersion);
            let configData = null,
              Extension;
            function getBodyData(t) {
              if ('undefined' == typeof document || !document.body) return '';
              let e = document.body.dataset[t];
              return void 0 === e ? '' : decodeURIComponent(e);
            }
            !(function (t) {
              function e(t) {
                try {
                  let e = getOption(t);
                  if (e) return JSON.parse(e);
                } catch (e) {
                  console.warn(`Unable to parse ${t}.`, e);
                }
                return [];
              }
              (t.deferred = e('deferredExtensions')),
                (t.disabled = e('disabledExtensions')),
                (t.isDeferred = function (e) {
                  let i = e.indexOf(':'),
                    n = '';
                  return (
                    -1 !== i && (n = e.slice(0, i)),
                    t.deferred.some((t) => t === e || (n && t === n))
                  );
                }),
                (t.isDisabled = function (e) {
                  let i = e.indexOf(':'),
                    n = '';
                  return (
                    -1 !== i && (n = e.slice(0, i)),
                    t.disabled.some((t) => t === e || (n && t === n))
                  );
                });
            })((Extension = PageConfig.Extension || (PageConfig.Extension = {})));
          })((PageConfig = exports.PageConfig || (exports.PageConfig = {})));
        }),
        ya = fe((t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.PathExt = void 0);
          var e = li();
          !(function (t) {
            function i(t) {
              return 0 === t.indexOf('/') && (t = t.slice(1)), t;
            }
            (t.join = function (...t) {
              let n = e.posix.join(...t);
              return '.' === n ? '' : i(n);
            }),
              (t.basename = function (t, i) {
                return e.posix.basename(t, i);
              }),
              (t.dirname = function (t) {
                let n = i(e.posix.dirname(t));
                return '.' === n ? '' : n;
              }),
              (t.extname = function (t) {
                return e.posix.extname(t);
              }),
              (t.normalize = function (t) {
                return '' === t ? '' : i(e.posix.normalize(t));
              }),
              (t.resolve = function (...t) {
                return i(e.posix.resolve(...t));
              }),
              (t.relative = function (t, n) {
                return i(e.posix.relative(t, n));
              }),
              (t.normalizeExtension = function (t) {
                return t.length > 0 && 0 !== t.indexOf('.') && (t = `.${t}`), t;
              }),
              (t.removeSlash = i);
          })(t.PathExt || (t.PathExt = {}));
        }),
        wa = fe((t) => {
          var e;
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.Text = void 0),
            ((e = t.Text || (t.Text = {})).jsIndexToCharIndex = function (t, e) {
              return t;
            }),
            (e.charIndexToJsIndex = function (t, e) {
              return t;
            }),
            (e.camelCase = function (t, e = !1) {
              return t.replace(/^(\w)|[\s-_:]+(\w)/g, function (t, i, n) {
                return n ? n.toUpperCase() : e ? i.toUpperCase() : i.toLowerCase();
              });
            }),
            (e.titleCase = function (t) {
              return (t || '')
                .toLowerCase()
                .split(' ')
                .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
                .join(' ');
            });
        }),
        ba = fe((t, e) => {
          var i, n;
          (i = t),
            (n = function () {
              var t, i;
              function n() {
                return t.apply(null, arguments);
              }
              function a(t) {
                return (
                  t instanceof Array ||
                  '[object Array]' === Object.prototype.toString.call(t)
                );
              }
              function o(t) {
                return (
                  null != t && '[object Object]' === Object.prototype.toString.call(t)
                );
              }
              function r(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }
              function s(t) {
                if (Object.getOwnPropertyNames)
                  return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t) if (r(t, e)) return !1;
                return !0;
              }
              function l(t) {
                return void 0 === t;
              }
              function c(t) {
                return (
                  'number' == typeof t ||
                  '[object Number]' === Object.prototype.toString.call(t)
                );
              }
              function p(t) {
                return (
                  t instanceof Date ||
                  '[object Date]' === Object.prototype.toString.call(t)
                );
              }
              function d(t, e) {
                var i,
                  n = [],
                  a = t.length;
                for (i = 0; i < a; ++i) n.push(e(t[i], i));
                return n;
              }
              function u(t, e) {
                for (var i in e) r(e, i) && (t[i] = e[i]);
                return (
                  r(e, 'toString') && (t.toString = e.toString),
                  r(e, 'valueOf') && (t.valueOf = e.valueOf),
                  t
                );
              }
              function h(t, e, i, n) {
                return Ye(t, e, i, n, !0).utc();
              }
              function m(t) {
                return (
                  null == t._pf &&
                    (t._pf = {
                      empty: !1,
                      unusedTokens: [],
                      unusedInput: [],
                      overflow: -2,
                      charsLeftOver: 0,
                      nullInput: !1,
                      invalidEra: null,
                      invalidMonth: null,
                      invalidFormat: !1,
                      userInvalidated: !1,
                      iso: !1,
                      parsedDateParts: [],
                      era: null,
                      meridiem: null,
                      rfc2822: !1,
                      weekdayMismatch: !1,
                    }),
                  t._pf
                );
              }
              function f(t) {
                if (null == t._isValid) {
                  var e = m(t),
                    n = i.call(e.parsedDateParts, function (t) {
                      return null != t;
                    }),
                    a =
                      !isNaN(t._d.getTime()) &&
                      e.overflow < 0 &&
                      !e.empty &&
                      !e.invalidEra &&
                      !e.invalidMonth &&
                      !e.invalidWeekday &&
                      !e.weekdayMismatch &&
                      !e.nullInput &&
                      !e.invalidFormat &&
                      !e.userInvalidated &&
                      (!e.meridiem || (e.meridiem && n));
                  if (
                    (t._strict &&
                      (a =
                        a &&
                        0 === e.charsLeftOver &&
                        0 === e.unusedTokens.length &&
                        void 0 === e.bigHour),
                    null != Object.isFrozen && Object.isFrozen(t))
                  )
                    return a;
                  t._isValid = a;
                }
                return t._isValid;
              }
              function v(t) {
                var e = h(NaN);
                return null != t ? u(m(e), t) : (m(e).userInvalidated = !0), e;
              }
              i = Array.prototype.some
                ? Array.prototype.some
                : function (t) {
                    var e,
                      i = Object(this),
                      n = i.length >>> 0;
                    for (e = 0; e < n; e++)
                      if (e in i && t.call(this, i[e], e, i)) return !0;
                    return !1;
                  };
              var g = (n.momentProperties = []),
                x = !1;
              function _(t, e) {
                var i,
                  n,
                  a,
                  o = g.length;
                if (
                  (l(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
                  l(e._i) || (t._i = e._i),
                  l(e._f) || (t._f = e._f),
                  l(e._l) || (t._l = e._l),
                  l(e._strict) || (t._strict = e._strict),
                  l(e._tzm) || (t._tzm = e._tzm),
                  l(e._isUTC) || (t._isUTC = e._isUTC),
                  l(e._offset) || (t._offset = e._offset),
                  l(e._pf) || (t._pf = m(e)),
                  l(e._locale) || (t._locale = e._locale),
                  o > 0)
                )
                  for (i = 0; i < o; i++) l((a = e[(n = g[i])])) || (t[n] = a);
                return t;
              }
              function y(t) {
                _(this, t),
                  (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
                  this.isValid() || (this._d = new Date(NaN)),
                  !1 === x && ((x = !0), n.updateOffset(this), (x = !1));
              }
              function w(t) {
                return t instanceof y || (null != t && null != t._isAMomentObject);
              }
              function b(t) {
                !1 === n.suppressDeprecationWarnings &&
                  'undefined' != typeof console &&
                  console.warn &&
                  console.warn('Deprecation warning: ' + t);
              }
              function k(t, e) {
                var i = !0;
                return u(function () {
                  if (
                    (null != n.deprecationHandler && n.deprecationHandler(null, t), i)
                  ) {
                    var a,
                      o,
                      s,
                      l = [],
                      c = arguments.length;
                    for (o = 0; o < c; o++) {
                      if (((a = ''), 'object' == typeof arguments[o])) {
                        for (s in ((a += '\n[' + o + '] '), arguments[0]))
                          r(arguments[0], s) &&
                            (a += s + ': ' + arguments[0][s] + ', ');
                        a = a.slice(0, -2);
                      } else a = arguments[o];
                      l.push(a);
                    }
                    b(
                      t +
                        '\nArguments: ' +
                        Array.prototype.slice.call(l).join('') +
                        '\n' +
                        new Error().stack
                    ),
                      (i = !1);
                  }
                  return e.apply(this, arguments);
                }, e);
              }
              var S,
                M = {};
              function O(t, e) {
                null != n.deprecationHandler && n.deprecationHandler(t, e),
                  M[t] || (b(e), (M[t] = !0));
              }
              function D(t) {
                return (
                  ('undefined' != typeof Function && t instanceof Function) ||
                  '[object Function]' === Object.prototype.toString.call(t)
                );
              }
              function j(t, e) {
                var i,
                  n = u({}, t);
                for (i in e)
                  r(e, i) &&
                    (o(t[i]) && o(e[i])
                      ? ((n[i] = {}), u(n[i], t[i]), u(n[i], e[i]))
                      : null != e[i]
                      ? (n[i] = e[i])
                      : delete n[i]);
                for (i in t) r(t, i) && !r(e, i) && o(t[i]) && (n[i] = u({}, n[i]));
                return n;
              }
              function P(t) {
                null != t && this.set(t);
              }
              function C(t, e, i) {
                var n = '' + Math.abs(t),
                  a = e - n.length;
                return (
                  (t >= 0 ? (i ? '+' : '') : '-') +
                  Math.pow(10, Math.max(0, a)).toString().substr(1) +
                  n
                );
              }
              (n.suppressDeprecationWarnings = !1),
                (n.deprecationHandler = null),
                (S = Object.keys
                  ? Object.keys
                  : function (t) {
                      var e,
                        i = [];
                      for (e in t) r(t, e) && i.push(e);
                      return i;
                    });
              var R =
                  /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                T = {},
                Y = {};
              function N(t, e, i, n) {
                var a = n;
                'string' == typeof n &&
                  (a = function () {
                    return this[n]();
                  }),
                  t && (Y[t] = a),
                  e &&
                    (Y[e[0]] = function () {
                      return C(a.apply(this, arguments), e[1], e[2]);
                    }),
                  i &&
                    (Y[i] = function () {
                      return this.localeData().ordinal(a.apply(this, arguments), t);
                    });
              }
              function U(t) {
                return t.match(/\[[\s\S]/)
                  ? t.replace(/^\[|\]$/g, '')
                  : t.replace(/\\/g, '');
              }
              function I(t, e) {
                return t.isValid()
                  ? ((e = A(e, t.localeData())),
                    (T[e] =
                      T[e] ||
                      (function (t) {
                        var e,
                          i,
                          n = t.match(R);
                        for (e = 0, i = n.length; e < i; e++)
                          Y[n[e]] ? (n[e] = Y[n[e]]) : (n[e] = U(n[e]));
                        return function (e) {
                          var a,
                            o = '';
                          for (a = 0; a < i; a++) o += D(n[a]) ? n[a].call(e, t) : n[a];
                          return o;
                        };
                      })(e)),
                    T[e](t))
                  : t.localeData().invalidDate();
              }
              function A(t, e) {
                var i = 5;
                function n(t) {
                  return e.longDateFormat(t) || t;
                }
                for (E.lastIndex = 0; i >= 0 && E.test(t); )
                  (t = t.replace(E, n)), (E.lastIndex = 0), (i -= 1);
                return t;
              }
              var z = {};
              function L(t, e) {
                var i = t.toLowerCase();
                z[i] = z[i + 's'] = z[e] = t;
              }
              function F(t) {
                return 'string' == typeof t ? z[t] || z[t.toLowerCase()] : void 0;
              }
              function W(t) {
                var e,
                  i,
                  n = {};
                for (i in t) r(t, i) && (e = F(i)) && (n[e] = t[i]);
                return n;
              }
              var H = {};
              function q(t, e) {
                H[t] = e;
              }
              function V(t) {
                return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
              }
              function $(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
              }
              function G(t) {
                var e = +t,
                  i = 0;
                return 0 !== e && isFinite(e) && (i = $(e)), i;
              }
              function B(t, e) {
                return function (i) {
                  return null != i
                    ? (J(this, t, i), n.updateOffset(this, e), this)
                    : Z(this, t);
                };
              }
              function Z(t, e) {
                return t.isValid() ? t._d['get' + (t._isUTC ? 'UTC' : '') + e]() : NaN;
              }
              function J(t, e, i) {
                t.isValid() &&
                  !isNaN(i) &&
                  ('FullYear' === e && V(t.year()) && 1 === t.month() && 29 === t.date()
                    ? ((i = G(i)),
                      t._d['set' + (t._isUTC ? 'UTC' : '') + e](
                        i,
                        t.month(),
                        Rt(i, t.month())
                      ))
                    : t._d['set' + (t._isUTC ? 'UTC' : '') + e](i));
              }
              var K,
                Q = /\d/,
                X = /\d\d/,
                tt = /\d{3}/,
                et = /\d{4}/,
                it = /[+-]?\d{6}/,
                nt = /\d\d?/,
                at = /\d\d\d\d?/,
                ot = /\d\d\d\d\d\d?/,
                rt = /\d{1,3}/,
                st = /\d{1,4}/,
                lt = /[+-]?\d{1,6}/,
                ct = /\d+/,
                pt = /[+-]?\d+/,
                dt = /Z|[+-]\d\d:?\d\d/gi,
                ut = /Z|[+-]\d\d(?::?\d\d)?/gi,
                ht =
                  /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
              function mt(t, e, i) {
                K[t] = D(e)
                  ? e
                  : function (t, n) {
                      return t && i ? i : e;
                    };
              }
              function ft(t, e) {
                return r(K, t)
                  ? K[t](e._strict, e._locale)
                  : new RegExp(
                      (function (t) {
                        return vt(
                          t
                            .replace('\\', '')
                            .replace(
                              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                              function (t, e, i, n, a) {
                                return e || i || n || a;
                              }
                            )
                        );
                      })(t)
                    );
              }
              function vt(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
              }
              K = {};
              var gt = {};
              function xt(t, e) {
                var i,
                  n,
                  a = e;
                for (
                  'string' == typeof t && (t = [t]),
                    c(e) &&
                      (a = function (t, i) {
                        i[e] = G(t);
                      }),
                    n = t.length,
                    i = 0;
                  i < n;
                  i++
                )
                  gt[t[i]] = a;
              }
              function _t(t, e) {
                xt(t, function (t, i, n, a) {
                  (n._w = n._w || {}), e(t, n._w, n, a);
                });
              }
              function yt(t, e, i) {
                null != e && r(gt, t) && gt[t](e, i._a, i, t);
              }
              var wt,
                bt = 0,
                kt = 1,
                St = 2,
                Mt = 3,
                Ot = 4,
                Dt = 5,
                jt = 6,
                Pt = 7,
                Ct = 8;
              function Rt(t, e) {
                if (isNaN(t) || isNaN(e)) return NaN;
                var i = (function (t, e) {
                  return ((t % 12) + 12) % 12;
                })(e);
                return (
                  (t += (e - i) / 12), 1 === i ? (V(t) ? 29 : 28) : 31 - ((i % 7) % 2)
                );
              }
              (wt = Array.prototype.indexOf
                ? Array.prototype.indexOf
                : function (t) {
                    var e;
                    for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
                    return -1;
                  }),
                N('M', ['MM', 2], 'Mo', function () {
                  return this.month() + 1;
                }),
                N('MMM', 0, 0, function (t) {
                  return this.localeData().monthsShort(this, t);
                }),
                N('MMMM', 0, 0, function (t) {
                  return this.localeData().months(this, t);
                }),
                L('month', 'M'),
                q('month', 8),
                mt('M', nt),
                mt('MM', nt, X),
                mt('MMM', function (t, e) {
                  return e.monthsShortRegex(t);
                }),
                mt('MMMM', function (t, e) {
                  return e.monthsRegex(t);
                }),
                xt(['M', 'MM'], function (t, e) {
                  e[kt] = G(t) - 1;
                }),
                xt(['MMM', 'MMMM'], function (t, e, i, n) {
                  var a = i._locale.monthsParse(t, n, i._strict);
                  null != a ? (e[kt] = a) : (m(i).invalidMonth = t);
                });
              var Et =
                  'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                    '_'
                  ),
                Tt = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                Yt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Nt = ht,
                Ut = ht;
              function It(t, e, i) {
                var n,
                  a,
                  o,
                  r = t.toLocaleLowerCase();
                if (!this._monthsParse)
                  for (
                    this._monthsParse = [],
                      this._longMonthsParse = [],
                      this._shortMonthsParse = [],
                      n = 0;
                    n < 12;
                    ++n
                  )
                    (o = h([2e3, n])),
                      (this._shortMonthsParse[n] = this.monthsShort(
                        o,
                        ''
                      ).toLocaleLowerCase()),
                      (this._longMonthsParse[n] = this.months(
                        o,
                        ''
                      ).toLocaleLowerCase());
                return i
                  ? 'MMM' === e
                    ? -1 !== (a = wt.call(this._shortMonthsParse, r))
                      ? a
                      : null
                    : -1 !== (a = wt.call(this._longMonthsParse, r))
                    ? a
                    : null
                  : 'MMM' === e
                  ? -1 !== (a = wt.call(this._shortMonthsParse, r)) ||
                    -1 !== (a = wt.call(this._longMonthsParse, r))
                    ? a
                    : null
                  : -1 !== (a = wt.call(this._longMonthsParse, r)) ||
                    -1 !== (a = wt.call(this._shortMonthsParse, r))
                  ? a
                  : null;
              }
              function At(t, e) {
                var i;
                if (!t.isValid()) return t;
                if ('string' == typeof e)
                  if (/^\d+$/.test(e)) e = G(e);
                  else if (!c((e = t.localeData().monthsParse(e)))) return t;
                return (
                  (i = Math.min(t.date(), Rt(t.year(), e))),
                  t._d['set' + (t._isUTC ? 'UTC' : '') + 'Month'](e, i),
                  t
                );
              }
              function zt(t) {
                return null != t
                  ? (At(this, t), n.updateOffset(this, !0), this)
                  : Z(this, 'Month');
              }
              function Lt() {
                function t(t, e) {
                  return e.length - t.length;
                }
                var e,
                  i,
                  n = [],
                  a = [],
                  o = [];
                for (e = 0; e < 12; e++)
                  (i = h([2e3, e])),
                    n.push(this.monthsShort(i, '')),
                    a.push(this.months(i, '')),
                    o.push(this.months(i, '')),
                    o.push(this.monthsShort(i, ''));
                for (n.sort(t), a.sort(t), o.sort(t), e = 0; e < 12; e++)
                  (n[e] = vt(n[e])), (a[e] = vt(a[e]));
                for (e = 0; e < 24; e++) o[e] = vt(o[e]);
                (this._monthsRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
                  (this._monthsShortRegex = this._monthsRegex),
                  (this._monthsStrictRegex = new RegExp('^(' + a.join('|') + ')', 'i')),
                  (this._monthsShortStrictRegex = new RegExp(
                    '^(' + n.join('|') + ')',
                    'i'
                  ));
              }
              function Ft(t) {
                return V(t) ? 366 : 365;
              }
              N('Y', 0, 0, function () {
                var t = this.year();
                return t <= 9999 ? C(t, 4) : '+' + t;
              }),
                N(0, ['YY', 2], 0, function () {
                  return this.year() % 100;
                }),
                N(0, ['YYYY', 4], 0, 'year'),
                N(0, ['YYYYY', 5], 0, 'year'),
                N(0, ['YYYYYY', 6, !0], 0, 'year'),
                L('year', 'y'),
                q('year', 1),
                mt('Y', pt),
                mt('YY', nt, X),
                mt('YYYY', st, et),
                mt('YYYYY', lt, it),
                mt('YYYYYY', lt, it),
                xt(['YYYYY', 'YYYYYY'], bt),
                xt('YYYY', function (t, e) {
                  e[bt] = 2 === t.length ? n.parseTwoDigitYear(t) : G(t);
                }),
                xt('YY', function (t, e) {
                  e[bt] = n.parseTwoDigitYear(t);
                }),
                xt('Y', function (t, e) {
                  e[bt] = parseInt(t, 10);
                }),
                (n.parseTwoDigitYear = function (t) {
                  return G(t) + (G(t) > 68 ? 1900 : 2e3);
                });
              var Wt = B('FullYear', !0);
              function Ht(t, e, i, n, a, o, r) {
                var s;
                return (
                  t < 100 && t >= 0
                    ? ((s = new Date(t + 400, e, i, n, a, o, r)),
                      isFinite(s.getFullYear()) && s.setFullYear(t))
                    : (s = new Date(t, e, i, n, a, o, r)),
                  s
                );
              }
              function qt(t) {
                var e, i;
                return (
                  t < 100 && t >= 0
                    ? (((i = Array.prototype.slice.call(arguments))[0] = t + 400),
                      (e = new Date(Date.UTC.apply(null, i))),
                      isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t))
                    : (e = new Date(Date.UTC.apply(null, arguments))),
                  e
                );
              }
              function Vt(t, e, i) {
                var n = 7 + e - i;
                return (-(7 + qt(t, 0, n).getUTCDay() - e) % 7) + n - 1;
              }
              function $t(t, e, i, n, a) {
                var o,
                  r,
                  s = 1 + 7 * (e - 1) + ((7 + i - n) % 7) + Vt(t, n, a);
                return (
                  s <= 0
                    ? (r = Ft((o = t - 1)) + s)
                    : s > Ft(t)
                    ? ((o = t + 1), (r = s - Ft(t)))
                    : ((o = t), (r = s)),
                  { year: o, dayOfYear: r }
                );
              }
              function Gt(t, e, i) {
                var n,
                  a,
                  o = Vt(t.year(), e, i),
                  r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                return (
                  r < 1
                    ? (n = r + Bt((a = t.year() - 1), e, i))
                    : r > Bt(t.year(), e, i)
                    ? ((n = r - Bt(t.year(), e, i)), (a = t.year() + 1))
                    : ((a = t.year()), (n = r)),
                  { week: n, year: a }
                );
              }
              function Bt(t, e, i) {
                var n = Vt(t, e, i),
                  a = Vt(t + 1, e, i);
                return (Ft(t) - n + a) / 7;
              }
              function Zt(t, e) {
                return t.slice(e, 7).concat(t.slice(0, e));
              }
              N('w', ['ww', 2], 'wo', 'week'),
                N('W', ['WW', 2], 'Wo', 'isoWeek'),
                L('week', 'w'),
                L('isoWeek', 'W'),
                q('week', 5),
                q('isoWeek', 5),
                mt('w', nt),
                mt('ww', nt, X),
                mt('W', nt),
                mt('WW', nt, X),
                _t(['w', 'ww', 'W', 'WW'], function (t, e, i, n) {
                  e[n.substr(0, 1)] = G(t);
                }),
                N('d', 0, 'do', 'day'),
                N('dd', 0, 0, function (t) {
                  return this.localeData().weekdaysMin(this, t);
                }),
                N('ddd', 0, 0, function (t) {
                  return this.localeData().weekdaysShort(this, t);
                }),
                N('dddd', 0, 0, function (t) {
                  return this.localeData().weekdays(this, t);
                }),
                N('e', 0, 0, 'weekday'),
                N('E', 0, 0, 'isoWeekday'),
                L('day', 'd'),
                L('weekday', 'e'),
                L('isoWeekday', 'E'),
                q('day', 11),
                q('weekday', 11),
                q('isoWeekday', 11),
                mt('d', nt),
                mt('e', nt),
                mt('E', nt),
                mt('dd', function (t, e) {
                  return e.weekdaysMinRegex(t);
                }),
                mt('ddd', function (t, e) {
                  return e.weekdaysShortRegex(t);
                }),
                mt('dddd', function (t, e) {
                  return e.weekdaysRegex(t);
                }),
                _t(['dd', 'ddd', 'dddd'], function (t, e, i, n) {
                  var a = i._locale.weekdaysParse(t, n, i._strict);
                  null != a ? (e.d = a) : (m(i).invalidWeekday = t);
                }),
                _t(['d', 'e', 'E'], function (t, e, i, n) {
                  e[n] = G(t);
                });
              var Jt = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                  '_'
                ),
                Kt = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                Qt = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                Xt = ht,
                te = ht,
                ee = ht;
              function ie(t, e, i) {
                var n,
                  a,
                  o,
                  r = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                  for (
                    this._weekdaysParse = [],
                      this._shortWeekdaysParse = [],
                      this._minWeekdaysParse = [],
                      n = 0;
                    n < 7;
                    ++n
                  )
                    (o = h([2e3, 1]).day(n)),
                      (this._minWeekdaysParse[n] = this.weekdaysMin(
                        o,
                        ''
                      ).toLocaleLowerCase()),
                      (this._shortWeekdaysParse[n] = this.weekdaysShort(
                        o,
                        ''
                      ).toLocaleLowerCase()),
                      (this._weekdaysParse[n] = this.weekdays(
                        o,
                        ''
                      ).toLocaleLowerCase());
                return i
                  ? 'dddd' === e
                    ? -1 !== (a = wt.call(this._weekdaysParse, r))
                      ? a
                      : null
                    : 'ddd' === e
                    ? -1 !== (a = wt.call(this._shortWeekdaysParse, r))
                      ? a
                      : null
                    : -1 !== (a = wt.call(this._minWeekdaysParse, r))
                    ? a
                    : null
                  : 'dddd' === e
                  ? -1 !== (a = wt.call(this._weekdaysParse, r)) ||
                    -1 !== (a = wt.call(this._shortWeekdaysParse, r)) ||
                    -1 !== (a = wt.call(this._minWeekdaysParse, r))
                    ? a
                    : null
                  : 'ddd' === e
                  ? -1 !== (a = wt.call(this._shortWeekdaysParse, r)) ||
                    -1 !== (a = wt.call(this._weekdaysParse, r)) ||
                    -1 !== (a = wt.call(this._minWeekdaysParse, r))
                    ? a
                    : null
                  : -1 !== (a = wt.call(this._minWeekdaysParse, r)) ||
                    -1 !== (a = wt.call(this._weekdaysParse, r)) ||
                    -1 !== (a = wt.call(this._shortWeekdaysParse, r))
                  ? a
                  : null;
              }
              function ne() {
                function t(t, e) {
                  return e.length - t.length;
                }
                var e,
                  i,
                  n,
                  a,
                  o,
                  r = [],
                  s = [],
                  l = [],
                  c = [];
                for (e = 0; e < 7; e++)
                  (i = h([2e3, 1]).day(e)),
                    (n = vt(this.weekdaysMin(i, ''))),
                    (a = vt(this.weekdaysShort(i, ''))),
                    (o = vt(this.weekdays(i, ''))),
                    r.push(n),
                    s.push(a),
                    l.push(o),
                    c.push(n),
                    c.push(a),
                    c.push(o);
                r.sort(t),
                  s.sort(t),
                  l.sort(t),
                  c.sort(t),
                  (this._weekdaysRegex = new RegExp('^(' + c.join('|') + ')', 'i')),
                  (this._weekdaysShortRegex = this._weekdaysRegex),
                  (this._weekdaysMinRegex = this._weekdaysRegex),
                  (this._weekdaysStrictRegex = new RegExp(
                    '^(' + l.join('|') + ')',
                    'i'
                  )),
                  (this._weekdaysShortStrictRegex = new RegExp(
                    '^(' + s.join('|') + ')',
                    'i'
                  )),
                  (this._weekdaysMinStrictRegex = new RegExp(
                    '^(' + r.join('|') + ')',
                    'i'
                  ));
              }
              function ae() {
                return this.hours() % 12 || 12;
              }
              function oe(t, e) {
                N(t, 0, 0, function () {
                  return this.localeData().meridiem(this.hours(), this.minutes(), e);
                });
              }
              function re(t, e) {
                return e._meridiemParse;
              }
              N('H', ['HH', 2], 0, 'hour'),
                N('h', ['hh', 2], 0, ae),
                N('k', ['kk', 2], 0, function () {
                  return this.hours() || 24;
                }),
                N('hmm', 0, 0, function () {
                  return '' + ae.apply(this) + C(this.minutes(), 2);
                }),
                N('hmmss', 0, 0, function () {
                  return (
                    '' + ae.apply(this) + C(this.minutes(), 2) + C(this.seconds(), 2)
                  );
                }),
                N('Hmm', 0, 0, function () {
                  return '' + this.hours() + C(this.minutes(), 2);
                }),
                N('Hmmss', 0, 0, function () {
                  return (
                    '' + this.hours() + C(this.minutes(), 2) + C(this.seconds(), 2)
                  );
                }),
                oe('a', !0),
                oe('A', !1),
                L('hour', 'h'),
                q('hour', 13),
                mt('a', re),
                mt('A', re),
                mt('H', nt),
                mt('h', nt),
                mt('k', nt),
                mt('HH', nt, X),
                mt('hh', nt, X),
                mt('kk', nt, X),
                mt('hmm', at),
                mt('hmmss', ot),
                mt('Hmm', at),
                mt('Hmmss', ot),
                xt(['H', 'HH'], Mt),
                xt(['k', 'kk'], function (t, e, i) {
                  var n = G(t);
                  e[Mt] = 24 === n ? 0 : n;
                }),
                xt(['a', 'A'], function (t, e, i) {
                  (i._isPm = i._locale.isPM(t)), (i._meridiem = t);
                }),
                xt(['h', 'hh'], function (t, e, i) {
                  (e[Mt] = G(t)), (m(i).bigHour = !0);
                }),
                xt('hmm', function (t, e, i) {
                  var n = t.length - 2;
                  (e[Mt] = G(t.substr(0, n))),
                    (e[Ot] = G(t.substr(n))),
                    (m(i).bigHour = !0);
                }),
                xt('hmmss', function (t, e, i) {
                  var n = t.length - 4,
                    a = t.length - 2;
                  (e[Mt] = G(t.substr(0, n))),
                    (e[Ot] = G(t.substr(n, 2))),
                    (e[Dt] = G(t.substr(a))),
                    (m(i).bigHour = !0);
                }),
                xt('Hmm', function (t, e, i) {
                  var n = t.length - 2;
                  (e[Mt] = G(t.substr(0, n))), (e[Ot] = G(t.substr(n)));
                }),
                xt('Hmmss', function (t, e, i) {
                  var n = t.length - 4,
                    a = t.length - 2;
                  (e[Mt] = G(t.substr(0, n))),
                    (e[Ot] = G(t.substr(n, 2))),
                    (e[Dt] = G(t.substr(a)));
                });
              var se,
                le = B('Hours', !0),
                ce = {
                  calendar: {
                    sameDay: '[Today at] LT',
                    nextDay: '[Tomorrow at] LT',
                    nextWeek: 'dddd [at] LT',
                    lastDay: '[Yesterday at] LT',
                    lastWeek: '[Last] dddd [at] LT',
                    sameElse: 'L',
                  },
                  longDateFormat: {
                    LTS: 'h:mm:ss A',
                    LT: 'h:mm A',
                    L: 'MM/DD/YYYY',
                    LL: 'MMMM D, YYYY',
                    LLL: 'MMMM D, YYYY h:mm A',
                    LLLL: 'dddd, MMMM D, YYYY h:mm A',
                  },
                  invalidDate: 'Invalid date',
                  ordinal: '%d',
                  dayOfMonthOrdinalParse: /\d{1,2}/,
                  relativeTime: {
                    future: 'in %s',
                    past: '%s ago',
                    s: 'a few seconds',
                    ss: '%d seconds',
                    m: 'a minute',
                    mm: '%d minutes',
                    h: 'an hour',
                    hh: '%d hours',
                    d: 'a day',
                    dd: '%d days',
                    w: 'a week',
                    ww: '%d weeks',
                    M: 'a month',
                    MM: '%d months',
                    y: 'a year',
                    yy: '%d years',
                  },
                  months: Et,
                  monthsShort: Tt,
                  week: { dow: 0, doy: 6 },
                  weekdays: Jt,
                  weekdaysMin: Qt,
                  weekdaysShort: Kt,
                  meridiemParse: /[ap]\.?m?\.?/i,
                },
                pe = {},
                de = {};
              function ue(t, e) {
                var i,
                  n = Math.min(t.length, e.length);
                for (i = 0; i < n; i += 1) if (t[i] !== e[i]) return i;
                return n;
              }
              function he(t) {
                return t && t.toLowerCase().replace('_', '-');
              }
              function me(t) {
                var i = null;
                if (
                  void 0 === pe[t] &&
                  void 0 !== e &&
                  e &&
                  e.exports &&
                  (function (t) {
                    return null != t.match('^[^/\\\\]*$');
                  })(t)
                )
                  try {
                    (i = se._abbr), Ln('./locale/' + t), fe(i);
                  } catch {
                    pe[t] = null;
                  }
                return pe[t];
              }
              function fe(t, e) {
                var i;
                return (
                  t &&
                    ((i = l(e) ? ge(t) : ve(t, e))
                      ? (se = i)
                      : 'undefined' != typeof console &&
                        console.warn &&
                        console.warn(
                          'Locale ' + t + ' not found. Did you forget to load it?'
                        )),
                  se._abbr
                );
              }
              function ve(t, e) {
                if (null !== e) {
                  var i,
                    n = ce;
                  if (((e.abbr = t), null != pe[t]))
                    O(
                      'defineLocaleOverride',
                      'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                    ),
                      (n = pe[t]._config);
                  else if (null != e.parentLocale)
                    if (null != pe[e.parentLocale]) n = pe[e.parentLocale]._config;
                    else {
                      if (null == (i = me(e.parentLocale)))
                        return (
                          de[e.parentLocale] || (de[e.parentLocale] = []),
                          de[e.parentLocale].push({ name: t, config: e }),
                          null
                        );
                      n = i._config;
                    }
                  return (
                    (pe[t] = new P(j(n, e))),
                    de[t] &&
                      de[t].forEach(function (t) {
                        ve(t.name, t.config);
                      }),
                    fe(t),
                    pe[t]
                  );
                }
                return delete pe[t], null;
              }
              function ge(t) {
                var e;
                if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
                  return se;
                if (!a(t)) {
                  if ((e = me(t))) return e;
                  t = [t];
                }
                return (function (t) {
                  for (var e, i, n, a, o = 0; o < t.length; ) {
                    for (
                      e = (a = he(t[o]).split('-')).length,
                        i = (i = he(t[o + 1])) ? i.split('-') : null;
                      e > 0;

                    ) {
                      if ((n = me(a.slice(0, e).join('-')))) return n;
                      if (i && i.length >= e && ue(a, i) >= e - 1) break;
                      e--;
                    }
                    o++;
                  }
                  return se;
                })(t);
              }
              function xe(t) {
                var e,
                  i = t._a;
                return (
                  i &&
                    -2 === m(t).overflow &&
                    ((e =
                      i[kt] < 0 || i[kt] > 11
                        ? kt
                        : i[St] < 1 || i[St] > Rt(i[bt], i[kt])
                        ? St
                        : i[Mt] < 0 ||
                          i[Mt] > 24 ||
                          (24 === i[Mt] && (0 !== i[Ot] || 0 !== i[Dt] || 0 !== i[jt]))
                        ? Mt
                        : i[Ot] < 0 || i[Ot] > 59
                        ? Ot
                        : i[Dt] < 0 || i[Dt] > 59
                        ? Dt
                        : i[jt] < 0 || i[jt] > 999
                        ? jt
                        : -1),
                    m(t)._overflowDayOfYear && (e < bt || e > St) && (e = St),
                    m(t)._overflowWeeks && -1 === e && (e = Pt),
                    m(t)._overflowWeekday && -1 === e && (e = Ct),
                    (m(t).overflow = e)),
                  t
                );
              }
              var _e =
                  /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ye =
                  /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                we = /Z|[+-]\d\d(?::?\d\d)?/,
                be = [
                  ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
                  ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
                  ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
                  ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
                  ['YYYY-DDD', /\d{4}-\d{3}/],
                  ['YYYY-MM', /\d{4}-\d\d/, !1],
                  ['YYYYYYMMDD', /[+-]\d{10}/],
                  ['YYYYMMDD', /\d{8}/],
                  ['GGGG[W]WWE', /\d{4}W\d{3}/],
                  ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
                  ['YYYYDDD', /\d{7}/],
                  ['YYYYMM', /\d{6}/, !1],
                  ['YYYY', /\d{4}/, !1],
                ],
                ke = [
                  ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
                  ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
                  ['HH:mm:ss', /\d\d:\d\d:\d\d/],
                  ['HH:mm', /\d\d:\d\d/],
                  ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
                  ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
                  ['HHmmss', /\d\d\d\d\d\d/],
                  ['HHmm', /\d\d\d\d/],
                  ['HH', /\d\d/],
                ],
                Se = /^\/?Date\((-?\d+)/i,
                Me =
                  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Oe = {
                  UT: 0,
                  GMT: 0,
                  EDT: -240,
                  EST: -300,
                  CDT: -300,
                  CST: -360,
                  MDT: -360,
                  MST: -420,
                  PDT: -420,
                  PST: -480,
                };
              function De(t) {
                var e,
                  i,
                  n,
                  a,
                  o,
                  r,
                  s = t._i,
                  l = _e.exec(s) || ye.exec(s),
                  c = be.length,
                  p = ke.length;
                if (l) {
                  for (m(t).iso = !0, e = 0, i = c; e < i; e++)
                    if (be[e][1].exec(l[1])) {
                      (a = be[e][0]), (n = !1 !== be[e][2]);
                      break;
                    }
                  if (null == a) return void (t._isValid = !1);
                  if (l[3]) {
                    for (e = 0, i = p; e < i; e++)
                      if (ke[e][1].exec(l[3])) {
                        o = (l[2] || ' ') + ke[e][0];
                        break;
                      }
                    if (null == o) return void (t._isValid = !1);
                  }
                  if (!n && null != o) return void (t._isValid = !1);
                  if (l[4]) {
                    if (!we.exec(l[4])) return void (t._isValid = !1);
                    r = 'Z';
                  }
                  (t._f = a + (o || '') + (r || '')), Ee(t);
                } else t._isValid = !1;
              }
              function je(t) {
                var e = parseInt(t, 10);
                return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
              }
              function Pe(t) {
                var e,
                  i = Me.exec(
                    (function (t) {
                      return t
                        .replace(/\([^()]*\)|[\n\t]/g, ' ')
                        .replace(/(\s\s+)/g, ' ')
                        .replace(/^\s\s*/, '')
                        .replace(/\s\s*$/, '');
                    })(t._i)
                  );
                if (i) {
                  if (
                    ((e = (function (t, e, i, n, a, o) {
                      var r = [
                        je(t),
                        Tt.indexOf(e),
                        parseInt(i, 10),
                        parseInt(n, 10),
                        parseInt(a, 10),
                      ];
                      return o && r.push(parseInt(o, 10)), r;
                    })(i[4], i[3], i[2], i[5], i[6], i[7])),
                    !(function (t, e, i) {
                      return (
                        !t ||
                        Kt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
                        ((m(i).weekdayMismatch = !0), (i._isValid = !1), !1)
                      );
                    })(i[1], e, t))
                  )
                    return;
                  (t._a = e),
                    (t._tzm = (function (t, e, i) {
                      if (t) return Oe[t];
                      if (e) return 0;
                      var n = parseInt(i, 10),
                        a = n % 100;
                      return ((n - a) / 100) * 60 + a;
                    })(i[8], i[9], i[10])),
                    (t._d = qt.apply(null, t._a)),
                    t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                    (m(t).rfc2822 = !0);
                } else t._isValid = !1;
              }
              function Ce(t, e, i) {
                return null != t ? t : null != e ? e : i;
              }
              function Re(t) {
                var e,
                  i,
                  a,
                  o,
                  r,
                  s = [];
                if (!t._d) {
                  for (
                    a = (function (t) {
                      var e = new Date(n.now());
                      return t._useUTC
                        ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
                        : [e.getFullYear(), e.getMonth(), e.getDate()];
                    })(t),
                      t._w &&
                        null == t._a[St] &&
                        null == t._a[kt] &&
                        (function (t) {
                          var e, i, n, a, o, r, s, l, c;
                          null != (e = t._w).GG || null != e.W || null != e.E
                            ? ((o = 1),
                              (r = 4),
                              (i = Ce(e.GG, t._a[bt], Gt(Ne(), 1, 4).year)),
                              (n = Ce(e.W, 1)),
                              ((a = Ce(e.E, 1)) < 1 || a > 7) && (l = !0))
                            : ((o = t._locale._week.dow),
                              (r = t._locale._week.doy),
                              (c = Gt(Ne(), o, r)),
                              (i = Ce(e.gg, t._a[bt], c.year)),
                              (n = Ce(e.w, c.week)),
                              null != e.d
                                ? ((a = e.d) < 0 || a > 6) && (l = !0)
                                : null != e.e
                                ? ((a = e.e + o), (e.e < 0 || e.e > 6) && (l = !0))
                                : (a = o)),
                            n < 1 || n > Bt(i, o, r)
                              ? (m(t)._overflowWeeks = !0)
                              : null != l
                              ? (m(t)._overflowWeekday = !0)
                              : ((s = $t(i, n, a, o, r)),
                                (t._a[bt] = s.year),
                                (t._dayOfYear = s.dayOfYear));
                        })(t),
                      null != t._dayOfYear &&
                        ((r = Ce(t._a[bt], a[bt])),
                        (t._dayOfYear > Ft(r) || 0 === t._dayOfYear) &&
                          (m(t)._overflowDayOfYear = !0),
                        (i = qt(r, 0, t._dayOfYear)),
                        (t._a[kt] = i.getUTCMonth()),
                        (t._a[St] = i.getUTCDate())),
                      e = 0;
                    e < 3 && null == t._a[e];
                    ++e
                  )
                    t._a[e] = s[e] = a[e];
                  for (; e < 7; e++)
                    t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
                  24 === t._a[Mt] &&
                    0 === t._a[Ot] &&
                    0 === t._a[Dt] &&
                    0 === t._a[jt] &&
                    ((t._nextDay = !0), (t._a[Mt] = 0)),
                    (t._d = (t._useUTC ? qt : Ht).apply(null, s)),
                    (o = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
                    null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                    t._nextDay && (t._a[Mt] = 24),
                    t._w &&
                      void 0 !== t._w.d &&
                      t._w.d !== o &&
                      (m(t).weekdayMismatch = !0);
                }
              }
              function Ee(t) {
                if (t._f !== n.ISO_8601)
                  if (t._f !== n.RFC_2822) {
                    (t._a = []), (m(t).empty = !0);
                    var e,
                      i,
                      a,
                      o,
                      r,
                      s,
                      l,
                      c = '' + t._i,
                      p = c.length,
                      d = 0;
                    for (
                      l = (a = A(t._f, t._locale).match(R) || []).length, e = 0;
                      e < l;
                      e++
                    )
                      (o = a[e]),
                        (i = (c.match(ft(o, t)) || [])[0]) &&
                          ((r = c.substr(0, c.indexOf(i))).length > 0 &&
                            m(t).unusedInput.push(r),
                          (c = c.slice(c.indexOf(i) + i.length)),
                          (d += i.length)),
                        Y[o]
                          ? (i ? (m(t).empty = !1) : m(t).unusedTokens.push(o),
                            yt(o, i, t))
                          : t._strict && !i && m(t).unusedTokens.push(o);
                    (m(t).charsLeftOver = p - d),
                      c.length > 0 && m(t).unusedInput.push(c),
                      t._a[Mt] <= 12 &&
                        !0 === m(t).bigHour &&
                        t._a[Mt] > 0 &&
                        (m(t).bigHour = void 0),
                      (m(t).parsedDateParts = t._a.slice(0)),
                      (m(t).meridiem = t._meridiem),
                      (t._a[Mt] = (function (t, e, i) {
                        var n;
                        return null == i
                          ? e
                          : null != t.meridiemHour
                          ? t.meridiemHour(e, i)
                          : (null != t.isPM &&
                              ((n = t.isPM(i)) && e < 12 && (e += 12),
                              !n && 12 === e && (e = 0)),
                            e);
                      })(t._locale, t._a[Mt], t._meridiem)),
                      null !== (s = m(t).era) &&
                        (t._a[bt] = t._locale.erasConvertYear(s, t._a[bt])),
                      Re(t),
                      xe(t);
                  } else Pe(t);
                else De(t);
              }
              function Te(t) {
                var e = t._i,
                  i = t._f;
                return (
                  (t._locale = t._locale || ge(t._l)),
                  null === e || (void 0 === i && '' === e)
                    ? v({ nullInput: !0 })
                    : ('string' == typeof e && (t._i = e = t._locale.preparse(e)),
                      w(e)
                        ? new y(xe(e))
                        : (p(e)
                            ? (t._d = e)
                            : a(i)
                            ? (function (t) {
                                var e,
                                  i,
                                  n,
                                  a,
                                  o,
                                  r,
                                  s = !1,
                                  l = t._f.length;
                                if (0 === l)
                                  return (
                                    (m(t).invalidFormat = !0),
                                    void (t._d = new Date(NaN))
                                  );
                                for (a = 0; a < l; a++)
                                  (o = 0),
                                    (r = !1),
                                    (e = _({}, t)),
                                    null != t._useUTC && (e._useUTC = t._useUTC),
                                    (e._f = t._f[a]),
                                    Ee(e),
                                    f(e) && (r = !0),
                                    (o += m(e).charsLeftOver),
                                    (o += 10 * m(e).unusedTokens.length),
                                    (m(e).score = o),
                                    s
                                      ? o < n && ((n = o), (i = e))
                                      : (null == n || o < n || r) &&
                                        ((n = o), (i = e), r && (s = !0));
                                u(t, i || e);
                              })(t)
                            : i
                            ? Ee(t)
                            : (function (t) {
                                var e = t._i;
                                l(e)
                                  ? (t._d = new Date(n.now()))
                                  : p(e)
                                  ? (t._d = new Date(e.valueOf()))
                                  : 'string' == typeof e
                                  ? (function (t) {
                                      var e = Se.exec(t._i);
                                      null === e
                                        ? (De(t),
                                          !1 === t._isValid &&
                                            (delete t._isValid,
                                            Pe(t),
                                            !1 === t._isValid &&
                                              (delete t._isValid,
                                              t._strict
                                                ? (t._isValid = !1)
                                                : n.createFromInputFallback(t))))
                                        : (t._d = new Date(+e[1]));
                                    })(t)
                                  : a(e)
                                  ? ((t._a = d(e.slice(0), function (t) {
                                      return parseInt(t, 10);
                                    })),
                                    Re(t))
                                  : o(e)
                                  ? (function (t) {
                                      if (!t._d) {
                                        var e = W(t._i),
                                          i = void 0 === e.day ? e.date : e.day;
                                        (t._a = d(
                                          [
                                            e.year,
                                            e.month,
                                            i,
                                            e.hour,
                                            e.minute,
                                            e.second,
                                            e.millisecond,
                                          ],
                                          function (t) {
                                            return t && parseInt(t, 10);
                                          }
                                        )),
                                          Re(t);
                                      }
                                    })(t)
                                  : c(e)
                                  ? (t._d = new Date(e))
                                  : n.createFromInputFallback(t);
                              })(t),
                          f(t) || (t._d = null),
                          t))
                );
              }
              function Ye(t, e, i, n, r) {
                var l = {};
                return (
                  (!0 === e || !1 === e) && ((n = e), (e = void 0)),
                  (!0 === i || !1 === i) && ((n = i), (i = void 0)),
                  ((o(t) && s(t)) || (a(t) && 0 === t.length)) && (t = void 0),
                  (l._isAMomentObject = !0),
                  (l._useUTC = l._isUTC = r),
                  (l._l = i),
                  (l._i = t),
                  (l._f = e),
                  (l._strict = n),
                  (function (t) {
                    var e = new y(xe(Te(t)));
                    return e._nextDay && (e.add(1, 'd'), (e._nextDay = void 0)), e;
                  })(l)
                );
              }
              function Ne(t, e, i, n) {
                return Ye(t, e, i, n, !1);
              }
              (n.createFromInputFallback = k(
                'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
                function (t) {
                  t._d = new Date(t._i + (t._useUTC ? ' UTC' : ''));
                }
              )),
                (n.ISO_8601 = function () {}),
                (n.RFC_2822 = function () {});
              var Ue = k(
                  'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
                  function () {
                    var t = Ne.apply(null, arguments);
                    return this.isValid() && t.isValid() ? (t < this ? this : t) : v();
                  }
                ),
                Ie = k(
                  'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
                  function () {
                    var t = Ne.apply(null, arguments);
                    return this.isValid() && t.isValid() ? (t > this ? this : t) : v();
                  }
                );
              function Ae(t, e) {
                var i, n;
                if ((1 === e.length && a(e[0]) && (e = e[0]), !e.length)) return Ne();
                for (i = e[0], n = 1; n < e.length; ++n)
                  (!e[n].isValid() || e[n][t](i)) && (i = e[n]);
                return i;
              }
              var ze = [
                'year',
                'quarter',
                'month',
                'week',
                'day',
                'hour',
                'minute',
                'second',
                'millisecond',
              ];
              function Le(t) {
                var e = W(t),
                  i = e.year || 0,
                  n = e.quarter || 0,
                  a = e.month || 0,
                  o = e.week || e.isoWeek || 0,
                  s = e.day || 0,
                  l = e.hour || 0,
                  c = e.minute || 0,
                  p = e.second || 0,
                  d = e.millisecond || 0;
                (this._isValid = (function (t) {
                  var e,
                    i,
                    n = !1,
                    a = ze.length;
                  for (e in t)
                    if (
                      r(t, e) &&
                      (-1 === wt.call(ze, e) || (null != t[e] && isNaN(t[e])))
                    )
                      return !1;
                  for (i = 0; i < a; ++i)
                    if (t[ze[i]]) {
                      if (n) return !1;
                      parseFloat(t[ze[i]]) !== G(t[ze[i]]) && (n = !0);
                    }
                  return !0;
                })(e)),
                  (this._milliseconds = +d + 1e3 * p + 6e4 * c + 1e3 * l * 60 * 60),
                  (this._days = +s + 7 * o),
                  (this._months = +a + 3 * n + 12 * i),
                  (this._data = {}),
                  (this._locale = ge()),
                  this._bubble();
              }
              function Fe(t) {
                return t instanceof Le;
              }
              function We(t) {
                return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
              }
              function He(t, e) {
                N(t, 0, 0, function () {
                  var t = this.utcOffset(),
                    i = '+';
                  return (
                    t < 0 && ((t = -t), (i = '-')),
                    i + C(~~(t / 60), 2) + e + C(~~t % 60, 2)
                  );
                });
              }
              He('Z', ':'),
                He('ZZ', ''),
                mt('Z', ut),
                mt('ZZ', ut),
                xt(['Z', 'ZZ'], function (t, e, i) {
                  (i._useUTC = !0), (i._tzm = Ve(ut, t));
                });
              var qe = /([\+\-]|\d\d)/gi;
              function Ve(t, e) {
                var i,
                  n,
                  a = (e || '').match(t);
                return null === a
                  ? null
                  : 0 ===
                    (n =
                      60 *
                        (i = ((a[a.length - 1] || []) + '').match(qe) || [
                          '-',
                          0,
                          0,
                        ])[1] +
                      G(i[2]))
                  ? 0
                  : '+' === i[0]
                  ? n
                  : -n;
              }
              function $e(t, e) {
                var i, a;
                return e._isUTC
                  ? ((i = e.clone()),
                    (a = (w(t) || p(t) ? t.valueOf() : Ne(t).valueOf()) - i.valueOf()),
                    i._d.setTime(i._d.valueOf() + a),
                    n.updateOffset(i, !1),
                    i)
                  : Ne(t).local();
              }
              function Ge(t) {
                return -Math.round(t._d.getTimezoneOffset());
              }
              function Be() {
                return !!this.isValid() && this._isUTC && 0 === this._offset;
              }
              n.updateOffset = function () {};
              var Ze = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                Je =
                  /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
              function Ke(t, e) {
                var i,
                  n,
                  a,
                  o = t,
                  s = null;
                return (
                  Fe(t)
                    ? (o = { ms: t._milliseconds, d: t._days, M: t._months })
                    : c(t) || !isNaN(+t)
                    ? ((o = {}), e ? (o[e] = +t) : (o.milliseconds = +t))
                    : (s = Ze.exec(t))
                    ? ((i = '-' === s[1] ? -1 : 1),
                      (o = {
                        y: 0,
                        d: G(s[St]) * i,
                        h: G(s[Mt]) * i,
                        m: G(s[Ot]) * i,
                        s: G(s[Dt]) * i,
                        ms: G(We(1e3 * s[jt])) * i,
                      }))
                    : (s = Je.exec(t))
                    ? ((i = '-' === s[1] ? -1 : 1),
                      (o = {
                        y: Qe(s[2], i),
                        M: Qe(s[3], i),
                        w: Qe(s[4], i),
                        d: Qe(s[5], i),
                        h: Qe(s[6], i),
                        m: Qe(s[7], i),
                        s: Qe(s[8], i),
                      }))
                    : null == o
                    ? (o = {})
                    : 'object' == typeof o &&
                      ('from' in o || 'to' in o) &&
                      ((a = (function (t, e) {
                        var i;
                        return t.isValid() && e.isValid()
                          ? ((e = $e(e, t)),
                            t.isBefore(e)
                              ? (i = Xe(t, e))
                              : (((i = Xe(e, t)).milliseconds = -i.milliseconds),
                                (i.months = -i.months)),
                            i)
                          : { milliseconds: 0, months: 0 };
                      })(Ne(o.from), Ne(o.to))),
                      ((o = {}).ms = a.milliseconds),
                      (o.M = a.months)),
                  (n = new Le(o)),
                  Fe(t) && r(t, '_locale') && (n._locale = t._locale),
                  Fe(t) && r(t, '_isValid') && (n._isValid = t._isValid),
                  n
                );
              }
              function Qe(t, e) {
                var i = t && parseFloat(t.replace(',', '.'));
                return (isNaN(i) ? 0 : i) * e;
              }
              function Xe(t, e) {
                var i = {};
                return (
                  (i.months = e.month() - t.month() + 12 * (e.year() - t.year())),
                  t.clone().add(i.months, 'M').isAfter(e) && --i.months,
                  (i.milliseconds = +e - +t.clone().add(i.months, 'M')),
                  i
                );
              }
              function ti(t, e) {
                return function (i, n) {
                  var a;
                  return (
                    null !== n &&
                      !isNaN(+n) &&
                      (O(
                        e,
                        'moment().' +
                          e +
                          '(period, number) is deprecated. Please use moment().' +
                          e +
                          '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                      ),
                      (a = i),
                      (i = n),
                      (n = a)),
                    ei(this, Ke(i, n), t),
                    this
                  );
                };
              }
              function ei(t, e, i, a) {
                var o = e._milliseconds,
                  r = We(e._days),
                  s = We(e._months);
                t.isValid() &&
                  ((a = null == a || a),
                  s && At(t, Z(t, 'Month') + s * i),
                  r && J(t, 'Date', Z(t, 'Date') + r * i),
                  o && t._d.setTime(t._d.valueOf() + o * i),
                  a && n.updateOffset(t, r || s));
              }
              (Ke.fn = Le.prototype),
                (Ke.invalid = function () {
                  return Ke(NaN);
                });
              var ii = ti(1, 'add'),
                ni = ti(-1, 'subtract');
              function ai(t) {
                return 'string' == typeof t || t instanceof String;
              }
              function oi(t, e) {
                if (t.date() < e.date()) return -oi(e, t);
                var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                  n = t.clone().add(i, 'months');
                return (
                  -(
                    i +
                    (e - n < 0
                      ? (e - n) / (n - t.clone().add(i - 1, 'months'))
                      : (e - n) / (t.clone().add(i + 1, 'months') - n))
                  ) || 0
                );
              }
              function ri(t) {
                var e;
                return void 0 === t
                  ? this._locale._abbr
                  : (null != (e = ge(t)) && (this._locale = e), this);
              }
              (n.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
                (n.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
              var si = k(
                'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
                function (t) {
                  return void 0 === t ? this.localeData() : this.locale(t);
                }
              );
              function li() {
                return this._locale;
              }
              var ci = 1e3,
                pi = 6e4,
                di = 60 * pi,
                ui = 3506328 * di;
              function hi(t, e) {
                return ((t % e) + e) % e;
              }
              function mi(t, e, i) {
                return t < 100 && t >= 0
                  ? new Date(t + 400, e, i) - ui
                  : new Date(t, e, i).valueOf();
              }
              function fi(t, e, i) {
                return t < 100 && t >= 0
                  ? Date.UTC(t + 400, e, i) - ui
                  : Date.UTC(t, e, i);
              }
              function vi(t, e) {
                return e.erasAbbrRegex(t);
              }
              function gi() {
                var t,
                  e,
                  i = [],
                  n = [],
                  a = [],
                  o = [],
                  r = this.eras();
                for (t = 0, e = r.length; t < e; ++t)
                  n.push(vt(r[t].name)),
                    i.push(vt(r[t].abbr)),
                    a.push(vt(r[t].narrow)),
                    o.push(vt(r[t].name)),
                    o.push(vt(r[t].abbr)),
                    o.push(vt(r[t].narrow));
                (this._erasRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
                  (this._erasNameRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
                  (this._erasAbbrRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
                  (this._erasNarrowRegex = new RegExp('^(' + a.join('|') + ')', 'i'));
              }
              function xi(t, e) {
                N(0, [t, t.length], 0, e);
              }
              function _i(t, e, i, n, a) {
                var o;
                return null == t
                  ? Gt(this, n, a).year
                  : (e > (o = Bt(t, n, a)) && (e = o), yi.call(this, t, e, i, n, a));
              }
              function yi(t, e, i, n, a) {
                var o = $t(t, e, i, n, a),
                  r = qt(o.year, 0, o.dayOfYear);
                return (
                  this.year(r.getUTCFullYear()),
                  this.month(r.getUTCMonth()),
                  this.date(r.getUTCDate()),
                  this
                );
              }
              N('N', 0, 0, 'eraAbbr'),
                N('NN', 0, 0, 'eraAbbr'),
                N('NNN', 0, 0, 'eraAbbr'),
                N('NNNN', 0, 0, 'eraName'),
                N('NNNNN', 0, 0, 'eraNarrow'),
                N('y', ['y', 1], 'yo', 'eraYear'),
                N('y', ['yy', 2], 0, 'eraYear'),
                N('y', ['yyy', 3], 0, 'eraYear'),
                N('y', ['yyyy', 4], 0, 'eraYear'),
                mt('N', vi),
                mt('NN', vi),
                mt('NNN', vi),
                mt('NNNN', function (t, e) {
                  return e.erasNameRegex(t);
                }),
                mt('NNNNN', function (t, e) {
                  return e.erasNarrowRegex(t);
                }),
                xt(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (t, e, i, n) {
                  var a = i._locale.erasParse(t, n, i._strict);
                  a ? (m(i).era = a) : (m(i).invalidEra = t);
                }),
                mt('y', ct),
                mt('yy', ct),
                mt('yyy', ct),
                mt('yyyy', ct),
                mt('yo', function (t, e) {
                  return e._eraYearOrdinalRegex || ct;
                }),
                xt(['y', 'yy', 'yyy', 'yyyy'], bt),
                xt(['yo'], function (t, e, i, n) {
                  var a;
                  i._locale._eraYearOrdinalRegex &&
                    (a = t.match(i._locale._eraYearOrdinalRegex)),
                    i._locale.eraYearOrdinalParse
                      ? (e[bt] = i._locale.eraYearOrdinalParse(t, a))
                      : (e[bt] = parseInt(t, 10));
                }),
                N(0, ['gg', 2], 0, function () {
                  return this.weekYear() % 100;
                }),
                N(0, ['GG', 2], 0, function () {
                  return this.isoWeekYear() % 100;
                }),
                xi('gggg', 'weekYear'),
                xi('ggggg', 'weekYear'),
                xi('GGGG', 'isoWeekYear'),
                xi('GGGGG', 'isoWeekYear'),
                L('weekYear', 'gg'),
                L('isoWeekYear', 'GG'),
                q('weekYear', 1),
                q('isoWeekYear', 1),
                mt('G', pt),
                mt('g', pt),
                mt('GG', nt, X),
                mt('gg', nt, X),
                mt('GGGG', st, et),
                mt('gggg', st, et),
                mt('GGGGG', lt, it),
                mt('ggggg', lt, it),
                _t(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (t, e, i, n) {
                  e[n.substr(0, 2)] = G(t);
                }),
                _t(['gg', 'GG'], function (t, e, i, a) {
                  e[a] = n.parseTwoDigitYear(t);
                }),
                N('Q', 0, 'Qo', 'quarter'),
                L('quarter', 'Q'),
                q('quarter', 7),
                mt('Q', Q),
                xt('Q', function (t, e) {
                  e[kt] = 3 * (G(t) - 1);
                }),
                N('D', ['DD', 2], 'Do', 'date'),
                L('date', 'D'),
                q('date', 9),
                mt('D', nt),
                mt('DD', nt, X),
                mt('Do', function (t, e) {
                  return t
                    ? e._dayOfMonthOrdinalParse || e._ordinalParse
                    : e._dayOfMonthOrdinalParseLenient;
                }),
                xt(['D', 'DD'], St),
                xt('Do', function (t, e) {
                  e[St] = G(t.match(nt)[0]);
                });
              var wi = B('Date', !0);
              N('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
                L('dayOfYear', 'DDD'),
                q('dayOfYear', 4),
                mt('DDD', rt),
                mt('DDDD', tt),
                xt(['DDD', 'DDDD'], function (t, e, i) {
                  i._dayOfYear = G(t);
                }),
                N('m', ['mm', 2], 0, 'minute'),
                L('minute', 'm'),
                q('minute', 14),
                mt('m', nt),
                mt('mm', nt, X),
                xt(['m', 'mm'], Ot);
              var bi = B('Minutes', !1);
              N('s', ['ss', 2], 0, 'second'),
                L('second', 's'),
                q('second', 15),
                mt('s', nt),
                mt('ss', nt, X),
                xt(['s', 'ss'], Dt);
              var ki,
                Si,
                Mi = B('Seconds', !1);
              for (
                N('S', 0, 0, function () {
                  return ~~(this.millisecond() / 100);
                }),
                  N(0, ['SS', 2], 0, function () {
                    return ~~(this.millisecond() / 10);
                  }),
                  N(0, ['SSS', 3], 0, 'millisecond'),
                  N(0, ['SSSS', 4], 0, function () {
                    return 10 * this.millisecond();
                  }),
                  N(0, ['SSSSS', 5], 0, function () {
                    return 100 * this.millisecond();
                  }),
                  N(0, ['SSSSSS', 6], 0, function () {
                    return 1e3 * this.millisecond();
                  }),
                  N(0, ['SSSSSSS', 7], 0, function () {
                    return 1e4 * this.millisecond();
                  }),
                  N(0, ['SSSSSSSS', 8], 0, function () {
                    return 1e5 * this.millisecond();
                  }),
                  N(0, ['SSSSSSSSS', 9], 0, function () {
                    return 1e6 * this.millisecond();
                  }),
                  L('millisecond', 'ms'),
                  q('millisecond', 16),
                  mt('S', rt, Q),
                  mt('SS', rt, X),
                  mt('SSS', rt, tt),
                  ki = 'SSSS';
                ki.length <= 9;
                ki += 'S'
              )
                mt(ki, ct);
              function Oi(t, e) {
                e[jt] = G(1e3 * ('0.' + t));
              }
              for (ki = 'S'; ki.length <= 9; ki += 'S') xt(ki, Oi);
              (Si = B('Milliseconds', !1)),
                N('z', 0, 0, 'zoneAbbr'),
                N('zz', 0, 0, 'zoneName');
              var Di = y.prototype;
              function ji(t) {
                return t;
              }
              (Di.add = ii),
                (Di.calendar = function (t, e) {
                  1 === arguments.length &&
                    (arguments[0]
                      ? (function (t) {
                          return (
                            w(t) ||
                            p(t) ||
                            ai(t) ||
                            c(t) ||
                            (function (t) {
                              var e = a(t),
                                i = !1;
                              return (
                                e &&
                                  (i =
                                    0 ===
                                    t.filter(function (e) {
                                      return !c(e) && ai(t);
                                    }).length),
                                e && i
                              );
                            })(t) ||
                            (function (t) {
                              var e,
                                i = o(t) && !s(t),
                                n = !1,
                                a = [
                                  'years',
                                  'year',
                                  'y',
                                  'months',
                                  'month',
                                  'M',
                                  'days',
                                  'day',
                                  'd',
                                  'dates',
                                  'date',
                                  'D',
                                  'hours',
                                  'hour',
                                  'h',
                                  'minutes',
                                  'minute',
                                  'm',
                                  'seconds',
                                  'second',
                                  's',
                                  'milliseconds',
                                  'millisecond',
                                  'ms',
                                ],
                                l = a.length;
                              for (e = 0; e < l; e += 1) n = n || r(t, a[e]);
                              return i && n;
                            })(t) ||
                            null == t
                          );
                        })(arguments[0])
                        ? ((t = arguments[0]), (e = void 0))
                        : (function (t) {
                            var e,
                              i = o(t) && !s(t),
                              n = !1,
                              a = [
                                'sameDay',
                                'nextDay',
                                'lastDay',
                                'nextWeek',
                                'lastWeek',
                                'sameElse',
                              ];
                            for (e = 0; e < a.length; e += 1) n = n || r(t, a[e]);
                            return i && n;
                          })(arguments[0]) && ((e = arguments[0]), (t = void 0))
                      : ((t = void 0), (e = void 0)));
                  var i = t || Ne(),
                    l = $e(i, this).startOf('day'),
                    d = n.calendarFormat(this, l) || 'sameElse',
                    u = e && (D(e[d]) ? e[d].call(this, i) : e[d]);
                  return this.format(u || this.localeData().calendar(d, this, Ne(i)));
                }),
                (Di.clone = function () {
                  return new y(this);
                }),
                (Di.diff = function (t, e, i) {
                  var n, a, o;
                  if (!this.isValid()) return NaN;
                  if (!(n = $e(t, this)).isValid()) return NaN;
                  switch (
                    ((a = 6e4 * (n.utcOffset() - this.utcOffset())), (e = F(e)))
                  ) {
                    case 'year':
                      o = oi(this, n) / 12;
                      break;
                    case 'month':
                      o = oi(this, n);
                      break;
                    case 'quarter':
                      o = oi(this, n) / 3;
                      break;
                    case 'second':
                      o = (this - n) / 1e3;
                      break;
                    case 'minute':
                      o = (this - n) / 6e4;
                      break;
                    case 'hour':
                      o = (this - n) / 36e5;
                      break;
                    case 'day':
                      o = (this - n - a) / 864e5;
                      break;
                    case 'week':
                      o = (this - n - a) / 6048e5;
                      break;
                    default:
                      o = this - n;
                  }
                  return i ? o : $(o);
                }),
                (Di.endOf = function (t) {
                  var e, i;
                  if (void 0 === (t = F(t)) || 'millisecond' === t || !this.isValid())
                    return this;
                  switch (((i = this._isUTC ? fi : mi), t)) {
                    case 'year':
                      e = i(this.year() + 1, 0, 1) - 1;
                      break;
                    case 'quarter':
                      e = i(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                      break;
                    case 'month':
                      e = i(this.year(), this.month() + 1, 1) - 1;
                      break;
                    case 'week':
                      e =
                        i(this.year(), this.month(), this.date() - this.weekday() + 7) -
                        1;
                      break;
                    case 'isoWeek':
                      e =
                        i(
                          this.year(),
                          this.month(),
                          this.date() - (this.isoWeekday() - 1) + 7
                        ) - 1;
                      break;
                    case 'day':
                    case 'date':
                      e = i(this.year(), this.month(), this.date() + 1) - 1;
                      break;
                    case 'hour':
                      (e = this._d.valueOf()),
                        (e +=
                          di -
                          hi(e + (this._isUTC ? 0 : this.utcOffset() * pi), di) -
                          1);
                      break;
                    case 'minute':
                      (e = this._d.valueOf()), (e += pi - hi(e, pi) - 1);
                      break;
                    case 'second':
                      (e = this._d.valueOf()), (e += ci - hi(e, ci) - 1);
                  }
                  return this._d.setTime(e), n.updateOffset(this, !0), this;
                }),
                (Di.format = function (t) {
                  t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                  var e = I(this, t);
                  return this.localeData().postformat(e);
                }),
                (Di.from = function (t, e) {
                  return this.isValid() && ((w(t) && t.isValid()) || Ne(t).isValid())
                    ? Ke({ to: this, from: t }).locale(this.locale()).humanize(!e)
                    : this.localeData().invalidDate();
                }),
                (Di.fromNow = function (t) {
                  return this.from(Ne(), t);
                }),
                (Di.to = function (t, e) {
                  return this.isValid() && ((w(t) && t.isValid()) || Ne(t).isValid())
                    ? Ke({ from: this, to: t }).locale(this.locale()).humanize(!e)
                    : this.localeData().invalidDate();
                }),
                (Di.toNow = function (t) {
                  return this.to(Ne(), t);
                }),
                (Di.get = function (t) {
                  return D(this[(t = F(t))]) ? this[t]() : this;
                }),
                (Di.invalidAt = function () {
                  return m(this).overflow;
                }),
                (Di.isAfter = function (t, e) {
                  var i = w(t) ? t : Ne(t);
                  return (
                    !(!this.isValid() || !i.isValid()) &&
                    ('millisecond' === (e = F(e) || 'millisecond')
                      ? this.valueOf() > i.valueOf()
                      : i.valueOf() < this.clone().startOf(e).valueOf())
                  );
                }),
                (Di.isBefore = function (t, e) {
                  var i = w(t) ? t : Ne(t);
                  return (
                    !(!this.isValid() || !i.isValid()) &&
                    ('millisecond' === (e = F(e) || 'millisecond')
                      ? this.valueOf() < i.valueOf()
                      : this.clone().endOf(e).valueOf() < i.valueOf())
                  );
                }),
                (Di.isBetween = function (t, e, i, n) {
                  var a = w(t) ? t : Ne(t),
                    o = w(e) ? e : Ne(e);
                  return (
                    !!(this.isValid() && a.isValid() && o.isValid()) &&
                    ('(' === (n = n || '()')[0]
                      ? this.isAfter(a, i)
                      : !this.isBefore(a, i)) &&
                    (')' === n[1] ? this.isBefore(o, i) : !this.isAfter(o, i))
                  );
                }),
                (Di.isSame = function (t, e) {
                  var i,
                    n = w(t) ? t : Ne(t);
                  return (
                    !(!this.isValid() || !n.isValid()) &&
                    ('millisecond' === (e = F(e) || 'millisecond')
                      ? this.valueOf() === n.valueOf()
                      : ((i = n.valueOf()),
                        this.clone().startOf(e).valueOf() <= i &&
                          i <= this.clone().endOf(e).valueOf()))
                  );
                }),
                (Di.isSameOrAfter = function (t, e) {
                  return this.isSame(t, e) || this.isAfter(t, e);
                }),
                (Di.isSameOrBefore = function (t, e) {
                  return this.isSame(t, e) || this.isBefore(t, e);
                }),
                (Di.isValid = function () {
                  return f(this);
                }),
                (Di.lang = si),
                (Di.locale = ri),
                (Di.localeData = li),
                (Di.max = Ie),
                (Di.min = Ue),
                (Di.parsingFlags = function () {
                  return u({}, m(this));
                }),
                (Di.set = function (t, e) {
                  if ('object' == typeof t) {
                    var i,
                      n = (function (t) {
                        var e,
                          i = [];
                        for (e in t) r(t, e) && i.push({ unit: e, priority: H[e] });
                        return (
                          i.sort(function (t, e) {
                            return t.priority - e.priority;
                          }),
                          i
                        );
                      })((t = W(t))),
                      a = n.length;
                    for (i = 0; i < a; i++) this[n[i].unit](t[n[i].unit]);
                  } else if (D(this[(t = F(t))])) return this[t](e);
                  return this;
                }),
                (Di.startOf = function (t) {
                  var e, i;
                  if (void 0 === (t = F(t)) || 'millisecond' === t || !this.isValid())
                    return this;
                  switch (((i = this._isUTC ? fi : mi), t)) {
                    case 'year':
                      e = i(this.year(), 0, 1);
                      break;
                    case 'quarter':
                      e = i(this.year(), this.month() - (this.month() % 3), 1);
                      break;
                    case 'month':
                      e = i(this.year(), this.month(), 1);
                      break;
                    case 'week':
                      e = i(this.year(), this.month(), this.date() - this.weekday());
                      break;
                    case 'isoWeek':
                      e = i(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1)
                      );
                      break;
                    case 'day':
                    case 'date':
                      e = i(this.year(), this.month(), this.date());
                      break;
                    case 'hour':
                      (e = this._d.valueOf()),
                        (e -= hi(e + (this._isUTC ? 0 : this.utcOffset() * pi), di));
                      break;
                    case 'minute':
                      (e = this._d.valueOf()), (e -= hi(e, pi));
                      break;
                    case 'second':
                      (e = this._d.valueOf()), (e -= hi(e, ci));
                  }
                  return this._d.setTime(e), n.updateOffset(this, !0), this;
                }),
                (Di.subtract = ni),
                (Di.toArray = function () {
                  var t = this;
                  return [
                    t.year(),
                    t.month(),
                    t.date(),
                    t.hour(),
                    t.minute(),
                    t.second(),
                    t.millisecond(),
                  ];
                }),
                (Di.toObject = function () {
                  var t = this;
                  return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds(),
                  };
                }),
                (Di.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (Di.toISOString = function (t) {
                  if (!this.isValid()) return null;
                  var e = !0 !== t,
                    i = e ? this.clone().utc() : this;
                  return i.year() < 0 || i.year() > 9999
                    ? I(
                        i,
                        e
                          ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                          : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
                      )
                    : D(Date.prototype.toISOString)
                    ? e
                      ? this.toDate().toISOString()
                      : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                          .toISOString()
                          .replace('Z', I(i, 'Z'))
                    : I(
                        i,
                        e
                          ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                          : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
                      );
                }),
                (Di.inspect = function () {
                  if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
                  var t,
                    e,
                    i,
                    n = 'moment',
                    a = '';
                  return (
                    this.isLocal() ||
                      ((n = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'),
                      (a = 'Z')),
                    (t = '[' + n + '("]'),
                    (e = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
                    (i = a + '[")]'),
                    this.format(t + e + '-MM-DD[T]HH:mm:ss.SSS' + i)
                  );
                }),
                'undefined' != typeof Symbol &&
                  null != Symbol.for &&
                  (Di[Symbol.for('nodejs.util.inspect.custom')] = function () {
                    return 'Moment<' + this.format() + '>';
                  }),
                (Di.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (Di.toString = function () {
                  return this.clone()
                    .locale('en')
                    .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
                }),
                (Di.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (Di.valueOf = function () {
                  return this._d.valueOf() - 6e4 * (this._offset || 0);
                }),
                (Di.creationData = function () {
                  return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict,
                  };
                }),
                (Di.eraName = function () {
                  var t,
                    e,
                    i,
                    n = this.localeData().eras();
                  for (t = 0, e = n.length; t < e; ++t)
                    if (
                      ((i = this.clone().startOf('day').valueOf()),
                      (n[t].since <= i && i <= n[t].until) ||
                        (n[t].until <= i && i <= n[t].since))
                    )
                      return n[t].name;
                  return '';
                }),
                (Di.eraNarrow = function () {
                  var t,
                    e,
                    i,
                    n = this.localeData().eras();
                  for (t = 0, e = n.length; t < e; ++t)
                    if (
                      ((i = this.clone().startOf('day').valueOf()),
                      (n[t].since <= i && i <= n[t].until) ||
                        (n[t].until <= i && i <= n[t].since))
                    )
                      return n[t].narrow;
                  return '';
                }),
                (Di.eraAbbr = function () {
                  var t,
                    e,
                    i,
                    n = this.localeData().eras();
                  for (t = 0, e = n.length; t < e; ++t)
                    if (
                      ((i = this.clone().startOf('day').valueOf()),
                      (n[t].since <= i && i <= n[t].until) ||
                        (n[t].until <= i && i <= n[t].since))
                    )
                      return n[t].abbr;
                  return '';
                }),
                (Di.eraYear = function () {
                  var t,
                    e,
                    i,
                    a,
                    o = this.localeData().eras();
                  for (t = 0, e = o.length; t < e; ++t)
                    if (
                      ((i = o[t].since <= o[t].until ? 1 : -1),
                      (a = this.clone().startOf('day').valueOf()),
                      (o[t].since <= a && a <= o[t].until) ||
                        (o[t].until <= a && a <= o[t].since))
                    )
                      return (this.year() - n(o[t].since).year()) * i + o[t].offset;
                  return this.year();
                }),
                (Di.year = Wt),
                (Di.isLeapYear = function () {
                  return V(this.year());
                }),
                (Di.weekYear = function (t) {
                  return _i.call(
                    this,
                    t,
                    this.week(),
                    this.weekday(),
                    this.localeData()._week.dow,
                    this.localeData()._week.doy
                  );
                }),
                (Di.isoWeekYear = function (t) {
                  return _i.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
                }),
                (Di.quarter = Di.quarters =
                  function (t) {
                    return null == t
                      ? Math.ceil((this.month() + 1) / 3)
                      : this.month(3 * (t - 1) + (this.month() % 3));
                  }),
                (Di.month = zt),
                (Di.daysInMonth = function () {
                  return Rt(this.year(), this.month());
                }),
                (Di.week = Di.weeks =
                  function (t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), 'd');
                  }),
                (Di.isoWeek = Di.isoWeeks =
                  function (t) {
                    var e = Gt(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), 'd');
                  }),
                (Di.weeksInYear = function () {
                  var t = this.localeData()._week;
                  return Bt(this.year(), t.dow, t.doy);
                }),
                (Di.weeksInWeekYear = function () {
                  var t = this.localeData()._week;
                  return Bt(this.weekYear(), t.dow, t.doy);
                }),
                (Di.isoWeeksInYear = function () {
                  return Bt(this.year(), 1, 4);
                }),
                (Di.isoWeeksInISOWeekYear = function () {
                  return Bt(this.isoWeekYear(), 1, 4);
                }),
                (Di.date = wi),
                (Di.day = Di.days =
                  function (t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t
                      ? ((t = (function (t, e) {
                          return 'string' != typeof t
                            ? t
                            : isNaN(t)
                            ? 'number' == typeof (t = e.weekdaysParse(t))
                              ? t
                              : null
                            : parseInt(t, 10);
                        })(t, this.localeData())),
                        this.add(t - e, 'd'))
                      : e;
                  }),
                (Di.weekday = function (t) {
                  if (!this.isValid()) return null != t ? this : NaN;
                  var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                  return null == t ? e : this.add(t - e, 'd');
                }),
                (Di.isoWeekday = function (t) {
                  if (!this.isValid()) return null != t ? this : NaN;
                  if (null != t) {
                    var e = (function (t, e) {
                      return 'string' == typeof t
                        ? e.weekdaysParse(t) % 7 || 7
                        : isNaN(t)
                        ? null
                        : t;
                    })(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7);
                  }
                  return this.day() || 7;
                }),
                (Di.dayOfYear = function (t) {
                  var e =
                    Math.round(
                      (this.clone().startOf('day') - this.clone().startOf('year')) /
                        864e5
                    ) + 1;
                  return null == t ? e : this.add(t - e, 'd');
                }),
                (Di.hour = Di.hours = le),
                (Di.minute = Di.minutes = bi),
                (Di.second = Di.seconds = Mi),
                (Di.millisecond = Di.milliseconds = Si),
                (Di.utcOffset = function (t, e, i) {
                  var a,
                    o = this._offset || 0;
                  if (!this.isValid()) return null != t ? this : NaN;
                  if (null != t) {
                    if ('string' == typeof t) {
                      if (null === (t = Ve(ut, t))) return this;
                    } else Math.abs(t) < 16 && !i && (t *= 60);
                    return (
                      !this._isUTC && e && (a = Ge(this)),
                      (this._offset = t),
                      (this._isUTC = !0),
                      null != a && this.add(a, 'm'),
                      o !== t &&
                        (!e || this._changeInProgress
                          ? ei(this, Ke(t - o, 'm'), 1, !1)
                          : this._changeInProgress ||
                            ((this._changeInProgress = !0),
                            n.updateOffset(this, !0),
                            (this._changeInProgress = null))),
                      this
                    );
                  }
                  return this._isUTC ? o : Ge(this);
                }),
                (Di.utc = function (t) {
                  return this.utcOffset(0, t);
                }),
                (Di.local = function (t) {
                  return (
                    this._isUTC &&
                      (this.utcOffset(0, t),
                      (this._isUTC = !1),
                      t && this.subtract(Ge(this), 'm')),
                    this
                  );
                }),
                (Di.parseZone = function () {
                  if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                  else if ('string' == typeof this._i) {
                    var t = Ve(dt, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
                  }
                  return this;
                }),
                (Di.hasAlignedHourOffset = function (t) {
                  return (
                    !!this.isValid() &&
                    ((t = t ? Ne(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
                  );
                }),
                (Di.isDST = function () {
                  return (
                    this.utcOffset() > this.clone().month(0).utcOffset() ||
                    this.utcOffset() > this.clone().month(5).utcOffset()
                  );
                }),
                (Di.isLocal = function () {
                  return !!this.isValid() && !this._isUTC;
                }),
                (Di.isUtcOffset = function () {
                  return !!this.isValid() && this._isUTC;
                }),
                (Di.isUtc = Be),
                (Di.isUTC = Be),
                (Di.zoneAbbr = function () {
                  return this._isUTC ? 'UTC' : '';
                }),
                (Di.zoneName = function () {
                  return this._isUTC ? 'Coordinated Universal Time' : '';
                }),
                (Di.dates = k('dates accessor is deprecated. Use date instead.', wi)),
                (Di.months = k('months accessor is deprecated. Use month instead', zt)),
                (Di.years = k('years accessor is deprecated. Use year instead', Wt)),
                (Di.zone = k(
                  'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
                  function (t, e) {
                    return null != t
                      ? ('string' != typeof t && (t = -t), this.utcOffset(t, e), this)
                      : -this.utcOffset();
                  }
                )),
                (Di.isDSTShifted = k(
                  'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
                  function () {
                    if (!l(this._isDSTShifted)) return this._isDSTShifted;
                    var t,
                      e = {};
                    return (
                      _(e, this),
                      (e = Te(e))._a
                        ? ((t = e._isUTC ? h(e._a) : Ne(e._a)),
                          (this._isDSTShifted =
                            this.isValid() &&
                            (function (t, e, i) {
                              var n,
                                a = Math.min(t.length, e.length),
                                o = Math.abs(t.length - e.length),
                                r = 0;
                              for (n = 0; n < a; n++) G(t[n]) !== G(e[n]) && r++;
                              return r + o;
                            })(e._a, t.toArray()) > 0))
                        : (this._isDSTShifted = !1),
                      this._isDSTShifted
                    );
                  }
                ));
              var Pi = P.prototype;
              function Ci(t, e, i, n) {
                var a = ge(),
                  o = h().set(n, e);
                return a[i](o, t);
              }
              function Ri(t, e, i) {
                if ((c(t) && ((e = t), (t = void 0)), (t = t || ''), null != e))
                  return Ci(t, e, i, 'month');
                var n,
                  a = [];
                for (n = 0; n < 12; n++) a[n] = Ci(t, n, i, 'month');
                return a;
              }
              function Ei(t, e, i, n) {
                'boolean' == typeof t
                  ? (c(e) && ((i = e), (e = void 0)), (e = e || ''))
                  : ((i = e = t),
                    (t = !1),
                    c(e) && ((i = e), (e = void 0)),
                    (e = e || ''));
                var a,
                  o = ge(),
                  r = t ? o._week.dow : 0,
                  s = [];
                if (null != i) return Ci(e, (i + r) % 7, n, 'day');
                for (a = 0; a < 7; a++) s[a] = Ci(e, (a + r) % 7, n, 'day');
                return s;
              }
              (Pi.calendar = function (t, e, i) {
                var n = this._calendar[t] || this._calendar.sameElse;
                return D(n) ? n.call(e, i) : n;
              }),
                (Pi.longDateFormat = function (t) {
                  var e = this._longDateFormat[t],
                    i = this._longDateFormat[t.toUpperCase()];
                  return e || !i
                    ? e
                    : ((this._longDateFormat[t] = i
                        .match(R)
                        .map(function (t) {
                          return 'MMMM' === t ||
                            'MM' === t ||
                            'DD' === t ||
                            'dddd' === t
                            ? t.slice(1)
                            : t;
                        })
                        .join('')),
                      this._longDateFormat[t]);
                }),
                (Pi.invalidDate = function () {
                  return this._invalidDate;
                }),
                (Pi.ordinal = function (t) {
                  return this._ordinal.replace('%d', t);
                }),
                (Pi.preparse = ji),
                (Pi.postformat = ji),
                (Pi.relativeTime = function (t, e, i, n) {
                  var a = this._relativeTime[i];
                  return D(a) ? a(t, e, i, n) : a.replace(/%d/i, t);
                }),
                (Pi.pastFuture = function (t, e) {
                  var i = this._relativeTime[t > 0 ? 'future' : 'past'];
                  return D(i) ? i(e) : i.replace(/%s/i, e);
                }),
                (Pi.set = function (t) {
                  var e, i;
                  for (i in t)
                    r(t, i) && (D((e = t[i])) ? (this[i] = e) : (this['_' + i] = e));
                  (this._config = t),
                    (this._dayOfMonthOrdinalParseLenient = new RegExp(
                      (this._dayOfMonthOrdinalParse.source ||
                        this._ordinalParse.source) +
                        '|' +
                        /\d{1,2}/.source
                    ));
                }),
                (Pi.eras = function (t, e) {
                  var i,
                    a,
                    o,
                    r = this._eras || ge('en')._eras;
                  for (i = 0, a = r.length; i < a; ++i)
                    switch (
                      ('string' == typeof r[i].since &&
                        ((o = n(r[i].since).startOf('day')),
                        (r[i].since = o.valueOf())),
                      typeof r[i].until)
                    ) {
                      case 'undefined':
                        r[i].until = 1 / 0;
                        break;
                      case 'string':
                        (o = n(r[i].until).startOf('day').valueOf()),
                          (r[i].until = o.valueOf());
                    }
                  return r;
                }),
                (Pi.erasParse = function (t, e, i) {
                  var n,
                    a,
                    o,
                    r,
                    s,
                    l = this.eras();
                  for (t = t.toUpperCase(), n = 0, a = l.length; n < a; ++n)
                    if (
                      ((o = l[n].name.toUpperCase()),
                      (r = l[n].abbr.toUpperCase()),
                      (s = l[n].narrow.toUpperCase()),
                      i)
                    )
                      switch (e) {
                        case 'N':
                        case 'NN':
                        case 'NNN':
                          if (r === t) return l[n];
                          break;
                        case 'NNNN':
                          if (o === t) return l[n];
                          break;
                        case 'NNNNN':
                          if (s === t) return l[n];
                      }
                    else if ([o, r, s].indexOf(t) >= 0) return l[n];
                }),
                (Pi.erasConvertYear = function (t, e) {
                  var i = t.since <= t.until ? 1 : -1;
                  return void 0 === e
                    ? n(t.since).year()
                    : n(t.since).year() + (e - t.offset) * i;
                }),
                (Pi.erasAbbrRegex = function (t) {
                  return (
                    r(this, '_erasAbbrRegex') || gi.call(this),
                    t ? this._erasAbbrRegex : this._erasRegex
                  );
                }),
                (Pi.erasNameRegex = function (t) {
                  return (
                    r(this, '_erasNameRegex') || gi.call(this),
                    t ? this._erasNameRegex : this._erasRegex
                  );
                }),
                (Pi.erasNarrowRegex = function (t) {
                  return (
                    r(this, '_erasNarrowRegex') || gi.call(this),
                    t ? this._erasNarrowRegex : this._erasRegex
                  );
                }),
                (Pi.months = function (t, e) {
                  return t
                    ? a(this._months)
                      ? this._months[t.month()]
                      : this._months[
                          (this._months.isFormat || Yt).test(e)
                            ? 'format'
                            : 'standalone'
                        ][t.month()]
                    : a(this._months)
                    ? this._months
                    : this._months.standalone;
                }),
                (Pi.monthsShort = function (t, e) {
                  return t
                    ? a(this._monthsShort)
                      ? this._monthsShort[t.month()]
                      : this._monthsShort[Yt.test(e) ? 'format' : 'standalone'][
                          t.month()
                        ]
                    : a(this._monthsShort)
                    ? this._monthsShort
                    : this._monthsShort.standalone;
                }),
                (Pi.monthsParse = function (t, e, i) {
                  var n, a, o;
                  if (this._monthsParseExact) return It.call(this, t, e, i);
                  for (
                    this._monthsParse ||
                      ((this._monthsParse = []),
                      (this._longMonthsParse = []),
                      (this._shortMonthsParse = [])),
                      n = 0;
                    n < 12;
                    n++
                  ) {
                    if (
                      ((a = h([2e3, n])),
                      i &&
                        !this._longMonthsParse[n] &&
                        ((this._longMonthsParse[n] = new RegExp(
                          '^' + this.months(a, '').replace('.', '') + '$',
                          'i'
                        )),
                        (this._shortMonthsParse[n] = new RegExp(
                          '^' + this.monthsShort(a, '').replace('.', '') + '$',
                          'i'
                        ))),
                      !i &&
                        !this._monthsParse[n] &&
                        ((o =
                          '^' + this.months(a, '') + '|^' + this.monthsShort(a, '')),
                        (this._monthsParse[n] = new RegExp(o.replace('.', ''), 'i'))),
                      i && 'MMMM' === e && this._longMonthsParse[n].test(t))
                    )
                      return n;
                    if (i && 'MMM' === e && this._shortMonthsParse[n].test(t)) return n;
                    if (!i && this._monthsParse[n].test(t)) return n;
                  }
                }),
                (Pi.monthsRegex = function (t) {
                  return this._monthsParseExact
                    ? (r(this, '_monthsRegex') || Lt.call(this),
                      t ? this._monthsStrictRegex : this._monthsRegex)
                    : (r(this, '_monthsRegex') || (this._monthsRegex = Ut),
                      this._monthsStrictRegex && t
                        ? this._monthsStrictRegex
                        : this._monthsRegex);
                }),
                (Pi.monthsShortRegex = function (t) {
                  return this._monthsParseExact
                    ? (r(this, '_monthsRegex') || Lt.call(this),
                      t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                    : (r(this, '_monthsShortRegex') || (this._monthsShortRegex = Nt),
                      this._monthsShortStrictRegex && t
                        ? this._monthsShortStrictRegex
                        : this._monthsShortRegex);
                }),
                (Pi.week = function (t) {
                  return Gt(t, this._week.dow, this._week.doy).week;
                }),
                (Pi.firstDayOfYear = function () {
                  return this._week.doy;
                }),
                (Pi.firstDayOfWeek = function () {
                  return this._week.dow;
                }),
                (Pi.weekdays = function (t, e) {
                  var i = a(this._weekdays)
                    ? this._weekdays
                    : this._weekdays[
                        t && !0 !== t && this._weekdays.isFormat.test(e)
                          ? 'format'
                          : 'standalone'
                      ];
                  return !0 === t ? Zt(i, this._week.dow) : t ? i[t.day()] : i;
                }),
                (Pi.weekdaysMin = function (t) {
                  return !0 === t
                    ? Zt(this._weekdaysMin, this._week.dow)
                    : t
                    ? this._weekdaysMin[t.day()]
                    : this._weekdaysMin;
                }),
                (Pi.weekdaysShort = function (t) {
                  return !0 === t
                    ? Zt(this._weekdaysShort, this._week.dow)
                    : t
                    ? this._weekdaysShort[t.day()]
                    : this._weekdaysShort;
                }),
                (Pi.weekdaysParse = function (t, e, i) {
                  var n, a, o;
                  if (this._weekdaysParseExact) return ie.call(this, t, e, i);
                  for (
                    this._weekdaysParse ||
                      ((this._weekdaysParse = []),
                      (this._minWeekdaysParse = []),
                      (this._shortWeekdaysParse = []),
                      (this._fullWeekdaysParse = [])),
                      n = 0;
                    n < 7;
                    n++
                  ) {
                    if (
                      ((a = h([2e3, 1]).day(n)),
                      i &&
                        !this._fullWeekdaysParse[n] &&
                        ((this._fullWeekdaysParse[n] = new RegExp(
                          '^' + this.weekdays(a, '').replace('.', '\\.?') + '$',
                          'i'
                        )),
                        (this._shortWeekdaysParse[n] = new RegExp(
                          '^' + this.weekdaysShort(a, '').replace('.', '\\.?') + '$',
                          'i'
                        )),
                        (this._minWeekdaysParse[n] = new RegExp(
                          '^' + this.weekdaysMin(a, '').replace('.', '\\.?') + '$',
                          'i'
                        ))),
                      this._weekdaysParse[n] ||
                        ((o =
                          '^' +
                          this.weekdays(a, '') +
                          '|^' +
                          this.weekdaysShort(a, '') +
                          '|^' +
                          this.weekdaysMin(a, '')),
                        (this._weekdaysParse[n] = new RegExp(o.replace('.', ''), 'i'))),
                      i && 'dddd' === e && this._fullWeekdaysParse[n].test(t))
                    )
                      return n;
                    if (i && 'ddd' === e && this._shortWeekdaysParse[n].test(t))
                      return n;
                    if (i && 'dd' === e && this._minWeekdaysParse[n].test(t)) return n;
                    if (!i && this._weekdaysParse[n].test(t)) return n;
                  }
                }),
                (Pi.weekdaysRegex = function (t) {
                  return this._weekdaysParseExact
                    ? (r(this, '_weekdaysRegex') || ne.call(this),
                      t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                    : (r(this, '_weekdaysRegex') || (this._weekdaysRegex = Xt),
                      this._weekdaysStrictRegex && t
                        ? this._weekdaysStrictRegex
                        : this._weekdaysRegex);
                }),
                (Pi.weekdaysShortRegex = function (t) {
                  return this._weekdaysParseExact
                    ? (r(this, '_weekdaysRegex') || ne.call(this),
                      t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                    : (r(this, '_weekdaysShortRegex') ||
                        (this._weekdaysShortRegex = te),
                      this._weekdaysShortStrictRegex && t
                        ? this._weekdaysShortStrictRegex
                        : this._weekdaysShortRegex);
                }),
                (Pi.weekdaysMinRegex = function (t) {
                  return this._weekdaysParseExact
                    ? (r(this, '_weekdaysRegex') || ne.call(this),
                      t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                    : (r(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = ee),
                      this._weekdaysMinStrictRegex && t
                        ? this._weekdaysMinStrictRegex
                        : this._weekdaysMinRegex);
                }),
                (Pi.isPM = function (t) {
                  return 'p' === (t + '').toLowerCase().charAt(0);
                }),
                (Pi.meridiem = function (t, e, i) {
                  return t > 11 ? (i ? 'pm' : 'PM') : i ? 'am' : 'AM';
                }),
                fe('en', {
                  eras: [
                    {
                      since: '0001-01-01',
                      until: 1 / 0,
                      offset: 1,
                      name: 'Anno Domini',
                      narrow: 'AD',
                      abbr: 'AD',
                    },
                    {
                      since: '0000-12-31',
                      until: -1 / 0,
                      offset: 1,
                      name: 'Before Christ',
                      narrow: 'BC',
                      abbr: 'BC',
                    },
                  ],
                  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                  ordinal: function (t) {
                    var e = t % 10;
                    return (
                      t +
                      (1 === G((t % 100) / 10)
                        ? 'th'
                        : 1 === e
                        ? 'st'
                        : 2 === e
                        ? 'nd'
                        : 3 === e
                        ? 'rd'
                        : 'th')
                    );
                  },
                }),
                (n.lang = k(
                  'moment.lang is deprecated. Use moment.locale instead.',
                  fe
                )),
                (n.langData = k(
                  'moment.langData is deprecated. Use moment.localeData instead.',
                  ge
                ));
              var Ti = Math.abs;
              function Yi(t, e, i, n) {
                var a = Ke(e, i);
                return (
                  (t._milliseconds += n * a._milliseconds),
                  (t._days += n * a._days),
                  (t._months += n * a._months),
                  t._bubble()
                );
              }
              function Ni(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t);
              }
              function Ui(t) {
                return (4800 * t) / 146097;
              }
              function Ii(t) {
                return (146097 * t) / 4800;
              }
              function Ai(t) {
                return function () {
                  return this.as(t);
                };
              }
              var zi = Ai('ms'),
                Li = Ai('s'),
                Fi = Ai('m'),
                Wi = Ai('h'),
                Hi = Ai('d'),
                qi = Ai('w'),
                Vi = Ai('M'),
                $i = Ai('Q'),
                Gi = Ai('y');
              function Bi(t) {
                return function () {
                  return this.isValid() ? this._data[t] : NaN;
                };
              }
              var Zi = Bi('milliseconds'),
                Ji = Bi('seconds'),
                Ki = Bi('minutes'),
                Qi = Bi('hours'),
                Xi = Bi('days'),
                tn = Bi('months'),
                en = Bi('years'),
                nn = Math.round,
                an = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
              function on(t, e, i, n, a) {
                return a.relativeTime(e || 1, !!i, t, n);
              }
              var rn = Math.abs;
              function sn(t) {
                return (t > 0) - (t < 0) || +t;
              }
              function ln() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t,
                  e,
                  i,
                  n,
                  a,
                  o,
                  r,
                  s,
                  l = rn(this._milliseconds) / 1e3,
                  c = rn(this._days),
                  p = rn(this._months),
                  d = this.asSeconds();
                return d
                  ? ((t = $(l / 60)),
                    (e = $(t / 60)),
                    (l %= 60),
                    (t %= 60),
                    (i = $(p / 12)),
                    (p %= 12),
                    (n = l ? l.toFixed(3).replace(/\.?0+$/, '') : ''),
                    (a = d < 0 ? '-' : ''),
                    (o = sn(this._months) !== sn(d) ? '-' : ''),
                    (r = sn(this._days) !== sn(d) ? '-' : ''),
                    (s = sn(this._milliseconds) !== sn(d) ? '-' : ''),
                    a +
                      'P' +
                      (i ? o + i + 'Y' : '') +
                      (p ? o + p + 'M' : '') +
                      (c ? r + c + 'D' : '') +
                      (e || t || l ? 'T' : '') +
                      (e ? s + e + 'H' : '') +
                      (t ? s + t + 'M' : '') +
                      (l ? s + n + 'S' : ''))
                  : 'P0D';
              }
              var cn = Le.prototype;
              return (
                (cn.isValid = function () {
                  return this._isValid;
                }),
                (cn.abs = function () {
                  var t = this._data;
                  return (
                    (this._milliseconds = Ti(this._milliseconds)),
                    (this._days = Ti(this._days)),
                    (this._months = Ti(this._months)),
                    (t.milliseconds = Ti(t.milliseconds)),
                    (t.seconds = Ti(t.seconds)),
                    (t.minutes = Ti(t.minutes)),
                    (t.hours = Ti(t.hours)),
                    (t.months = Ti(t.months)),
                    (t.years = Ti(t.years)),
                    this
                  );
                }),
                (cn.add = function (t, e) {
                  return Yi(this, t, e, 1);
                }),
                (cn.subtract = function (t, e) {
                  return Yi(this, t, e, -1);
                }),
                (cn.as = function (t) {
                  if (!this.isValid()) return NaN;
                  var e,
                    i,
                    n = this._milliseconds;
                  if ('month' === (t = F(t)) || 'quarter' === t || 'year' === t)
                    switch (
                      ((e = this._days + n / 864e5), (i = this._months + Ui(e)), t)
                    ) {
                      case 'month':
                        return i;
                      case 'quarter':
                        return i / 3;
                      case 'year':
                        return i / 12;
                    }
                  else
                    switch (((e = this._days + Math.round(Ii(this._months))), t)) {
                      case 'week':
                        return e / 7 + n / 6048e5;
                      case 'day':
                        return e + n / 864e5;
                      case 'hour':
                        return 24 * e + n / 36e5;
                      case 'minute':
                        return 1440 * e + n / 6e4;
                      case 'second':
                        return 86400 * e + n / 1e3;
                      case 'millisecond':
                        return Math.floor(864e5 * e) + n;
                      default:
                        throw new Error('Unknown unit ' + t);
                    }
                }),
                (cn.asMilliseconds = zi),
                (cn.asSeconds = Li),
                (cn.asMinutes = Fi),
                (cn.asHours = Wi),
                (cn.asDays = Hi),
                (cn.asWeeks = qi),
                (cn.asMonths = Vi),
                (cn.asQuarters = $i),
                (cn.asYears = Gi),
                (cn.valueOf = function () {
                  return this.isValid()
                    ? this._milliseconds +
                        864e5 * this._days +
                        (this._months % 12) * 2592e6 +
                        31536e6 * G(this._months / 12)
                    : NaN;
                }),
                (cn._bubble = function () {
                  var t,
                    e,
                    i,
                    n,
                    a,
                    o = this._milliseconds,
                    r = this._days,
                    s = this._months,
                    l = this._data;
                  return (
                    (o >= 0 && r >= 0 && s >= 0) ||
                      (o <= 0 && r <= 0 && s <= 0) ||
                      ((o += 864e5 * Ni(Ii(s) + r)), (r = 0), (s = 0)),
                    (l.milliseconds = o % 1e3),
                    (t = $(o / 1e3)),
                    (l.seconds = t % 60),
                    (e = $(t / 60)),
                    (l.minutes = e % 60),
                    (i = $(e / 60)),
                    (l.hours = i % 24),
                    (r += $(i / 24)),
                    (s += a = $(Ui(r))),
                    (r -= Ni(Ii(a))),
                    (n = $(s / 12)),
                    (s %= 12),
                    (l.days = r),
                    (l.months = s),
                    (l.years = n),
                    this
                  );
                }),
                (cn.clone = function () {
                  return Ke(this);
                }),
                (cn.get = function (t) {
                  return (t = F(t)), this.isValid() ? this[t + 's']() : NaN;
                }),
                (cn.milliseconds = Zi),
                (cn.seconds = Ji),
                (cn.minutes = Ki),
                (cn.hours = Qi),
                (cn.days = Xi),
                (cn.weeks = function () {
                  return $(this.days() / 7);
                }),
                (cn.months = tn),
                (cn.years = en),
                (cn.humanize = function (t, e) {
                  if (!this.isValid()) return this.localeData().invalidDate();
                  var i,
                    n,
                    a = !1,
                    o = an;
                  return (
                    'object' == typeof t && ((e = t), (t = !1)),
                    'boolean' == typeof t && (a = t),
                    'object' == typeof e &&
                      ((o = Object.assign({}, an, e)),
                      null != e.s && null == e.ss && (o.ss = e.s - 1)),
                    (n = (function (t, e, i, n) {
                      var a = Ke(t).abs(),
                        o = nn(a.as('s')),
                        r = nn(a.as('m')),
                        s = nn(a.as('h')),
                        l = nn(a.as('d')),
                        c = nn(a.as('M')),
                        p = nn(a.as('w')),
                        d = nn(a.as('y')),
                        u =
                          (o <= i.ss && ['s', o]) ||
                          (o < i.s && ['ss', o]) ||
                          (r <= 1 && ['m']) ||
                          (r < i.m && ['mm', r]) ||
                          (s <= 1 && ['h']) ||
                          (s < i.h && ['hh', s]) ||
                          (l <= 1 && ['d']) ||
                          (l < i.d && ['dd', l]);
                      return (
                        null != i.w &&
                          (u = u || (p <= 1 && ['w']) || (p < i.w && ['ww', p])),
                        ((u = u ||
                          (c <= 1 && ['M']) ||
                          (c < i.M && ['MM', c]) ||
                          (d <= 1 && ['y']) || ['yy', d])[2] = e),
                        (u[3] = +t > 0),
                        (u[4] = n),
                        on.apply(null, u)
                      );
                    })(this, !a, o, (i = this.localeData()))),
                    a && (n = i.pastFuture(+this, n)),
                    i.postformat(n)
                  );
                }),
                (cn.toISOString = ln),
                (cn.toString = ln),
                (cn.toJSON = ln),
                (cn.locale = ri),
                (cn.localeData = li),
                (cn.toIsoString = k(
                  'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
                  ln
                )),
                (cn.lang = si),
                N('X', 0, 0, 'unix'),
                N('x', 0, 0, 'valueOf'),
                mt('x', pt),
                mt('X', /[+-]?\d+(\.\d{1,3})?/),
                xt('X', function (t, e, i) {
                  i._d = new Date(1e3 * parseFloat(t));
                }),
                xt('x', function (t, e, i) {
                  i._d = new Date(G(t));
                }),
                (n.version = '2.29.4'),
                (t = Ne),
                (n.fn = Di),
                (n.min = function () {
                  return Ae('isBefore', [].slice.call(arguments, 0));
                }),
                (n.max = function () {
                  return Ae('isAfter', [].slice.call(arguments, 0));
                }),
                (n.now = function () {
                  return Date.now ? Date.now() : +new Date();
                }),
                (n.utc = h),
                (n.unix = function (t) {
                  return Ne(1e3 * t);
                }),
                (n.months = function (t, e) {
                  return Ri(t, e, 'months');
                }),
                (n.isDate = p),
                (n.locale = fe),
                (n.invalid = v),
                (n.duration = Ke),
                (n.isMoment = w),
                (n.weekdays = function (t, e, i) {
                  return Ei(t, e, i, 'weekdays');
                }),
                (n.parseZone = function () {
                  return Ne.apply(null, arguments).parseZone();
                }),
                (n.localeData = ge),
                (n.isDuration = Fe),
                (n.monthsShort = function (t, e) {
                  return Ri(t, e, 'monthsShort');
                }),
                (n.weekdaysMin = function (t, e, i) {
                  return Ei(t, e, i, 'weekdaysMin');
                }),
                (n.defineLocale = ve),
                (n.updateLocale = function (t, e) {
                  if (null != e) {
                    var i,
                      n,
                      a = ce;
                    null != pe[t] && null != pe[t].parentLocale
                      ? pe[t].set(j(pe[t]._config, e))
                      : (null != (n = me(t)) && (a = n._config),
                        (e = j(a, e)),
                        null == n && (e.abbr = t),
                        ((i = new P(e)).parentLocale = pe[t]),
                        (pe[t] = i)),
                      fe(t);
                  } else
                    null != pe[t] &&
                      (null != pe[t].parentLocale
                        ? ((pe[t] = pe[t].parentLocale), t === fe() && fe(t))
                        : null != pe[t] && delete pe[t]);
                  return pe[t];
                }),
                (n.locales = function () {
                  return S(pe);
                }),
                (n.weekdaysShort = function (t, e, i) {
                  return Ei(t, e, i, 'weekdaysShort');
                }),
                (n.normalizeUnits = F),
                (n.relativeTimeRounding = function (t) {
                  return void 0 === t ? nn : 'function' == typeof t && ((nn = t), !0);
                }),
                (n.relativeTimeThreshold = function (t, e) {
                  return (
                    void 0 !== an[t] &&
                    (void 0 === e
                      ? an[t]
                      : ((an[t] = e), 's' === t && (an.ss = e - 1), !0))
                  );
                }),
                (n.calendarFormat = function (t, e) {
                  var i = t.diff(e, 'days', !0);
                  return i < -6
                    ? 'sameElse'
                    : i < -1
                    ? 'lastWeek'
                    : i < 0
                    ? 'lastDay'
                    : i < 1
                    ? 'sameDay'
                    : i < 2
                    ? 'nextDay'
                    : i < 7
                    ? 'nextWeek'
                    : 'sameElse';
                }),
                (n.prototype = Di),
                (n.HTML5_FMT = {
                  DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
                  DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
                  DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
                  DATE: 'YYYY-MM-DD',
                  TIME: 'HH:mm',
                  TIME_SECONDS: 'HH:mm:ss',
                  TIME_MS: 'HH:mm:ss.SSS',
                  WEEK: 'GGGG-[W]WW',
                  MONTH: 'YYYY-MM',
                }),
                n
              );
            }),
            'object' == typeof t && void 0 !== e
              ? (e.exports = n())
              : 'function' == typeof define && __webpack_require__.amdO
              ? define(n)
              : (i.moment = n());
        }),
        ka = fe((t) => {
          var e =
            (t && t.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.Time = void 0);
          var i,
            n = e(ba());
          ((i = t.Time || (t.Time = {})).formatHuman = function (t) {
            n.default.locale(document.documentElement.lang);
            let e = n.default(t).fromNow();
            return (e = 'a few seconds ago' === e ? 'seconds ago' : e), e;
          }),
            (i.format = function (t, e = 'YYYY-MM-DD HH:mm') {
              return n.default(t).format(e);
            });
        }),
        Et = fe((t) => {
          var e =
              (t && t.__createBinding) ||
              (Object.create
                ? function (t, e, i, n) {
                    void 0 === n && (n = i),
                      Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function () {
                          return e[i];
                        },
                      });
                  }
                : function (t, e, i, n) {
                    void 0 === n && (n = i), (t[n] = e[i]);
                  }),
            i =
              (t && t.__exportStar) ||
              function (t, i) {
                for (var n in t)
                  'default' !== n &&
                    !Object.prototype.hasOwnProperty.call(i, n) &&
                    e(i, t, n);
              };
          Object.defineProperty(t, '__esModule', { value: !0 }),
            i(Zn(), t),
            i(Kn(), t),
            i(Qn(), t),
            i(xa(), t),
            i(ya(), t),
            i(wa(), t),
            i(ka(), t),
            i($i(), t);
        }),
        Ma = fe((t, e) => {
          function i() {
            (this._types = Object.create(null)),
              (this._extensions = Object.create(null));
            for (let t = 0; t < arguments.length; t++) this.define(arguments[t]);
            (this.define = this.define.bind(this)),
              (this.getType = this.getType.bind(this)),
              (this.getExtension = this.getExtension.bind(this));
          }
          (i.prototype.define = function (t, e) {
            for (let i in t) {
              let n = t[i].map(function (t) {
                return t.toLowerCase();
              });
              i = i.toLowerCase();
              for (let t = 0; t < n.length; t++) {
                let a = n[t];
                if ('*' !== a[0]) {
                  if (!e && a in this._types)
                    throw new Error(
                      'Attempt to change mapping for "' +
                        a +
                        '" extension from "' +
                        this._types[a] +
                        '" to "' +
                        i +
                        '". Pass `force=true` to allow this, otherwise remove "' +
                        a +
                        '" from the list of extensions for "' +
                        i +
                        '".'
                    );
                  this._types[a] = i;
                }
              }
              if (e || !this._extensions[i]) {
                let t = n[0];
                this._extensions[i] = '*' !== t[0] ? t : t.substr(1);
              }
            }
          }),
            (i.prototype.getType = function (t) {
              let e = (t = String(t)).replace(/^.*[/\\]/, '').toLowerCase(),
                i = e.replace(/^.*\./, '').toLowerCase(),
                n = e.length < t.length;
              return ((i.length < e.length - 1 || !n) && this._types[i]) || null;
            }),
            (i.prototype.getExtension = function (t) {
              return (
                ((t = /^\s*([^;\s]*)/.test(t) && RegExp.$1) &&
                  this._extensions[t.toLowerCase()]) ||
                null
              );
            }),
            (e.exports = i);
        }),
        Da = fe((t, e) => {
          e.exports = {
            'application/andrew-inset': ['ez'],
            'application/applixware': ['aw'],
            'application/atom+xml': ['atom'],
            'application/atomcat+xml': ['atomcat'],
            'application/atomdeleted+xml': ['atomdeleted'],
            'application/atomsvc+xml': ['atomsvc'],
            'application/atsc-dwd+xml': ['dwd'],
            'application/atsc-held+xml': ['held'],
            'application/atsc-rsat+xml': ['rsat'],
            'application/bdoc': ['bdoc'],
            'application/calendar+xml': ['xcs'],
            'application/ccxml+xml': ['ccxml'],
            'application/cdfx+xml': ['cdfx'],
            'application/cdmi-capability': ['cdmia'],
            'application/cdmi-container': ['cdmic'],
            'application/cdmi-domain': ['cdmid'],
            'application/cdmi-object': ['cdmio'],
            'application/cdmi-queue': ['cdmiq'],
            'application/cu-seeme': ['cu'],
            'application/dash+xml': ['mpd'],
            'application/davmount+xml': ['davmount'],
            'application/docbook+xml': ['dbk'],
            'application/dssc+der': ['dssc'],
            'application/dssc+xml': ['xdssc'],
            'application/ecmascript': ['es', 'ecma'],
            'application/emma+xml': ['emma'],
            'application/emotionml+xml': ['emotionml'],
            'application/epub+zip': ['epub'],
            'application/exi': ['exi'],
            'application/express': ['exp'],
            'application/fdt+xml': ['fdt'],
            'application/font-tdpfr': ['pfr'],
            'application/geo+json': ['geojson'],
            'application/gml+xml': ['gml'],
            'application/gpx+xml': ['gpx'],
            'application/gxf': ['gxf'],
            'application/gzip': ['gz'],
            'application/hjson': ['hjson'],
            'application/hyperstudio': ['stk'],
            'application/inkml+xml': ['ink', 'inkml'],
            'application/ipfix': ['ipfix'],
            'application/its+xml': ['its'],
            'application/java-archive': ['jar', 'war', 'ear'],
            'application/java-serialized-object': ['ser'],
            'application/java-vm': ['class'],
            'application/javascript': ['js', 'mjs'],
            'application/json': ['json', 'map'],
            'application/json5': ['json5'],
            'application/jsonml+json': ['jsonml'],
            'application/ld+json': ['jsonld'],
            'application/lgr+xml': ['lgr'],
            'application/lost+xml': ['lostxml'],
            'application/mac-binhex40': ['hqx'],
            'application/mac-compactpro': ['cpt'],
            'application/mads+xml': ['mads'],
            'application/manifest+json': ['webmanifest'],
            'application/marc': ['mrc'],
            'application/marcxml+xml': ['mrcx'],
            'application/mathematica': ['ma', 'nb', 'mb'],
            'application/mathml+xml': ['mathml'],
            'application/mbox': ['mbox'],
            'application/mediaservercontrol+xml': ['mscml'],
            'application/metalink+xml': ['metalink'],
            'application/metalink4+xml': ['meta4'],
            'application/mets+xml': ['mets'],
            'application/mmt-aei+xml': ['maei'],
            'application/mmt-usd+xml': ['musd'],
            'application/mods+xml': ['mods'],
            'application/mp21': ['m21', 'mp21'],
            'application/mp4': ['mp4s', 'm4p'],
            'application/msword': ['doc', 'dot'],
            'application/mxf': ['mxf'],
            'application/n-quads': ['nq'],
            'application/n-triples': ['nt'],
            'application/node': ['cjs'],
            'application/octet-stream': [
              'bin',
              'dms',
              'lrf',
              'mar',
              'so',
              'dist',
              'distz',
              'pkg',
              'bpk',
              'dump',
              'elc',
              'deploy',
              'exe',
              'dll',
              'deb',
              'dmg',
              'iso',
              'img',
              'msi',
              'msp',
              'msm',
              'buffer',
            ],
            'application/oda': ['oda'],
            'application/oebps-package+xml': ['opf'],
            'application/ogg': ['ogx'],
            'application/omdoc+xml': ['omdoc'],
            'application/onenote': ['onetoc', 'onetoc2', 'onetmp', 'onepkg'],
            'application/oxps': ['oxps'],
            'application/p2p-overlay+xml': ['relo'],
            'application/patch-ops-error+xml': ['xer'],
            'application/pdf': ['pdf'],
            'application/pgp-encrypted': ['pgp'],
            'application/pgp-signature': ['asc', 'sig'],
            'application/pics-rules': ['prf'],
            'application/pkcs10': ['p10'],
            'application/pkcs7-mime': ['p7m', 'p7c'],
            'application/pkcs7-signature': ['p7s'],
            'application/pkcs8': ['p8'],
            'application/pkix-attr-cert': ['ac'],
            'application/pkix-cert': ['cer'],
            'application/pkix-crl': ['crl'],
            'application/pkix-pkipath': ['pkipath'],
            'application/pkixcmp': ['pki'],
            'application/pls+xml': ['pls'],
            'application/postscript': ['ai', 'eps', 'ps'],
            'application/provenance+xml': ['provx'],
            'application/pskc+xml': ['pskcxml'],
            'application/raml+yaml': ['raml'],
            'application/rdf+xml': ['rdf', 'owl'],
            'application/reginfo+xml': ['rif'],
            'application/relax-ng-compact-syntax': ['rnc'],
            'application/resource-lists+xml': ['rl'],
            'application/resource-lists-diff+xml': ['rld'],
            'application/rls-services+xml': ['rs'],
            'application/route-apd+xml': ['rapd'],
            'application/route-s-tsid+xml': ['sls'],
            'application/route-usd+xml': ['rusd'],
            'application/rpki-ghostbusters': ['gbr'],
            'application/rpki-manifest': ['mft'],
            'application/rpki-roa': ['roa'],
            'application/rsd+xml': ['rsd'],
            'application/rss+xml': ['rss'],
            'application/rtf': ['rtf'],
            'application/sbml+xml': ['sbml'],
            'application/scvp-cv-request': ['scq'],
            'application/scvp-cv-response': ['scs'],
            'application/scvp-vp-request': ['spq'],
            'application/scvp-vp-response': ['spp'],
            'application/sdp': ['sdp'],
            'application/senml+xml': ['senmlx'],
            'application/sensml+xml': ['sensmlx'],
            'application/set-payment-initiation': ['setpay'],
            'application/set-registration-initiation': ['setreg'],
            'application/shf+xml': ['shf'],
            'application/sieve': ['siv', 'sieve'],
            'application/smil+xml': ['smi', 'smil'],
            'application/sparql-query': ['rq'],
            'application/sparql-results+xml': ['srx'],
            'application/srgs': ['gram'],
            'application/srgs+xml': ['grxml'],
            'application/sru+xml': ['sru'],
            'application/ssdl+xml': ['ssdl'],
            'application/ssml+xml': ['ssml'],
            'application/swid+xml': ['swidtag'],
            'application/tei+xml': ['tei', 'teicorpus'],
            'application/thraud+xml': ['tfi'],
            'application/timestamped-data': ['tsd'],
            'application/toml': ['toml'],
            'application/trig': ['trig'],
            'application/ttml+xml': ['ttml'],
            'application/ubjson': ['ubj'],
            'application/urc-ressheet+xml': ['rsheet'],
            'application/urc-targetdesc+xml': ['td'],
            'application/voicexml+xml': ['vxml'],
            'application/wasm': ['wasm'],
            'application/widget': ['wgt'],
            'application/winhlp': ['hlp'],
            'application/wsdl+xml': ['wsdl'],
            'application/wspolicy+xml': ['wspolicy'],
            'application/xaml+xml': ['xaml'],
            'application/xcap-att+xml': ['xav'],
            'application/xcap-caps+xml': ['xca'],
            'application/xcap-diff+xml': ['xdf'],
            'application/xcap-el+xml': ['xel'],
            'application/xcap-ns+xml': ['xns'],
            'application/xenc+xml': ['xenc'],
            'application/xhtml+xml': ['xhtml', 'xht'],
            'application/xliff+xml': ['xlf'],
            'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
            'application/xml-dtd': ['dtd'],
            'application/xop+xml': ['xop'],
            'application/xproc+xml': ['xpl'],
            'application/xslt+xml': ['*xsl', 'xslt'],
            'application/xspf+xml': ['xspf'],
            'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
            'application/yang': ['yang'],
            'application/yin+xml': ['yin'],
            'application/zip': ['zip'],
            'audio/3gpp': ['*3gpp'],
            'audio/adpcm': ['adp'],
            'audio/amr': ['amr'],
            'audio/basic': ['au', 'snd'],
            'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
            'audio/mobile-xmf': ['mxmf'],
            'audio/mp3': ['*mp3'],
            'audio/mp4': ['m4a', 'mp4a'],
            'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
            'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
            'audio/s3m': ['s3m'],
            'audio/silk': ['sil'],
            'audio/wav': ['wav'],
            'audio/wave': ['*wav'],
            'audio/webm': ['weba'],
            'audio/xm': ['xm'],
            'font/collection': ['ttc'],
            'font/otf': ['otf'],
            'font/ttf': ['ttf'],
            'font/woff': ['woff'],
            'font/woff2': ['woff2'],
            'image/aces': ['exr'],
            'image/apng': ['apng'],
            'image/avif': ['avif'],
            'image/bmp': ['bmp'],
            'image/cgm': ['cgm'],
            'image/dicom-rle': ['drle'],
            'image/emf': ['emf'],
            'image/fits': ['fits'],
            'image/g3fax': ['g3'],
            'image/gif': ['gif'],
            'image/heic': ['heic'],
            'image/heic-sequence': ['heics'],
            'image/heif': ['heif'],
            'image/heif-sequence': ['heifs'],
            'image/hej2k': ['hej2'],
            'image/hsj2': ['hsj2'],
            'image/ief': ['ief'],
            'image/jls': ['jls'],
            'image/jp2': ['jp2', 'jpg2'],
            'image/jpeg': ['jpeg', 'jpg', 'jpe'],
            'image/jph': ['jph'],
            'image/jphc': ['jhc'],
            'image/jpm': ['jpm'],
            'image/jpx': ['jpx', 'jpf'],
            'image/jxr': ['jxr'],
            'image/jxra': ['jxra'],
            'image/jxrs': ['jxrs'],
            'image/jxs': ['jxs'],
            'image/jxsc': ['jxsc'],
            'image/jxsi': ['jxsi'],
            'image/jxss': ['jxss'],
            'image/ktx': ['ktx'],
            'image/ktx2': ['ktx2'],
            'image/png': ['png'],
            'image/sgi': ['sgi'],
            'image/svg+xml': ['svg', 'svgz'],
            'image/t38': ['t38'],
            'image/tiff': ['tif', 'tiff'],
            'image/tiff-fx': ['tfx'],
            'image/webp': ['webp'],
            'image/wmf': ['wmf'],
            'message/disposition-notification': ['disposition-notification'],
            'message/global': ['u8msg'],
            'message/global-delivery-status': ['u8dsn'],
            'message/global-disposition-notification': ['u8mdn'],
            'message/global-headers': ['u8hdr'],
            'message/rfc822': ['eml', 'mime'],
            'model/3mf': ['3mf'],
            'model/gltf+json': ['gltf'],
            'model/gltf-binary': ['glb'],
            'model/iges': ['igs', 'iges'],
            'model/mesh': ['msh', 'mesh', 'silo'],
            'model/mtl': ['mtl'],
            'model/obj': ['obj'],
            'model/step+xml': ['stpx'],
            'model/step+zip': ['stpz'],
            'model/step-xml+zip': ['stpxz'],
            'model/stl': ['stl'],
            'model/vrml': ['wrl', 'vrml'],
            'model/x3d+binary': ['*x3db', 'x3dbz'],
            'model/x3d+fastinfoset': ['x3db'],
            'model/x3d+vrml': ['*x3dv', 'x3dvz'],
            'model/x3d+xml': ['x3d', 'x3dz'],
            'model/x3d-vrml': ['x3dv'],
            'text/cache-manifest': ['appcache', 'manifest'],
            'text/calendar': ['ics', 'ifb'],
            'text/coffeescript': ['coffee', 'litcoffee'],
            'text/css': ['css'],
            'text/csv': ['csv'],
            'text/html': ['html', 'htm', 'shtml'],
            'text/jade': ['jade'],
            'text/jsx': ['jsx'],
            'text/less': ['less'],
            'text/markdown': ['markdown', 'md'],
            'text/mathml': ['mml'],
            'text/mdx': ['mdx'],
            'text/n3': ['n3'],
            'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
            'text/richtext': ['rtx'],
            'text/rtf': ['*rtf'],
            'text/sgml': ['sgml', 'sgm'],
            'text/shex': ['shex'],
            'text/slim': ['slim', 'slm'],
            'text/spdx': ['spdx'],
            'text/stylus': ['stylus', 'styl'],
            'text/tab-separated-values': ['tsv'],
            'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
            'text/turtle': ['ttl'],
            'text/uri-list': ['uri', 'uris', 'urls'],
            'text/vcard': ['vcard'],
            'text/vtt': ['vtt'],
            'text/xml': ['*xml'],
            'text/yaml': ['yaml', 'yml'],
            'video/3gpp': ['3gp', '3gpp'],
            'video/3gpp2': ['3g2'],
            'video/h261': ['h261'],
            'video/h263': ['h263'],
            'video/h264': ['h264'],
            'video/iso.segment': ['m4s'],
            'video/jpeg': ['jpgv'],
            'video/jpm': ['*jpm', 'jpgm'],
            'video/mj2': ['mj2', 'mjp2'],
            'video/mp2t': ['ts'],
            'video/mp4': ['mp4', 'mp4v', 'mpg4'],
            'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
            'video/ogg': ['ogv'],
            'video/quicktime': ['qt', 'mov'],
            'video/webm': ['webm'],
          };
        }),
        Ra = fe((t, e) => {
          e.exports = {
            'application/prs.cww': ['cww'],
            'application/vnd.1000minds.decision-model+xml': ['1km'],
            'application/vnd.3gpp.pic-bw-large': ['plb'],
            'application/vnd.3gpp.pic-bw-small': ['psb'],
            'application/vnd.3gpp.pic-bw-var': ['pvb'],
            'application/vnd.3gpp2.tcap': ['tcap'],
            'application/vnd.3m.post-it-notes': ['pwn'],
            'application/vnd.accpac.simply.aso': ['aso'],
            'application/vnd.accpac.simply.imp': ['imp'],
            'application/vnd.acucobol': ['acu'],
            'application/vnd.acucorp': ['atc', 'acutc'],
            'application/vnd.adobe.air-application-installer-package+zip': ['air'],
            'application/vnd.adobe.formscentral.fcdt': ['fcdt'],
            'application/vnd.adobe.fxp': ['fxp', 'fxpl'],
            'application/vnd.adobe.xdp+xml': ['xdp'],
            'application/vnd.adobe.xfdf': ['xfdf'],
            'application/vnd.ahead.space': ['ahead'],
            'application/vnd.airzip.filesecure.azf': ['azf'],
            'application/vnd.airzip.filesecure.azs': ['azs'],
            'application/vnd.amazon.ebook': ['azw'],
            'application/vnd.americandynamics.acc': ['acc'],
            'application/vnd.amiga.ami': ['ami'],
            'application/vnd.android.package-archive': ['apk'],
            'application/vnd.anser-web-certificate-issue-initiation': ['cii'],
            'application/vnd.anser-web-funds-transfer-initiation': ['fti'],
            'application/vnd.antix.game-component': ['atx'],
            'application/vnd.apple.installer+xml': ['mpkg'],
            'application/vnd.apple.keynote': ['key'],
            'application/vnd.apple.mpegurl': ['m3u8'],
            'application/vnd.apple.numbers': ['numbers'],
            'application/vnd.apple.pages': ['pages'],
            'application/vnd.apple.pkpass': ['pkpass'],
            'application/vnd.aristanetworks.swi': ['swi'],
            'application/vnd.astraea-software.iota': ['iota'],
            'application/vnd.audiograph': ['aep'],
            'application/vnd.balsamiq.bmml+xml': ['bmml'],
            'application/vnd.blueice.multipass': ['mpm'],
            'application/vnd.bmi': ['bmi'],
            'application/vnd.businessobjects': ['rep'],
            'application/vnd.chemdraw+xml': ['cdxml'],
            'application/vnd.chipnuts.karaoke-mmd': ['mmd'],
            'application/vnd.cinderella': ['cdy'],
            'application/vnd.citationstyles.style+xml': ['csl'],
            'application/vnd.claymore': ['cla'],
            'application/vnd.cloanto.rp9': ['rp9'],
            'application/vnd.clonk.c4group': ['c4g', 'c4d', 'c4f', 'c4p', 'c4u'],
            'application/vnd.cluetrust.cartomobile-config': ['c11amc'],
            'application/vnd.cluetrust.cartomobile-config-pkg': ['c11amz'],
            'application/vnd.commonspace': ['csp'],
            'application/vnd.contact.cmsg': ['cdbcmsg'],
            'application/vnd.cosmocaller': ['cmc'],
            'application/vnd.crick.clicker': ['clkx'],
            'application/vnd.crick.clicker.keyboard': ['clkk'],
            'application/vnd.crick.clicker.palette': ['clkp'],
            'application/vnd.crick.clicker.template': ['clkt'],
            'application/vnd.crick.clicker.wordbank': ['clkw'],
            'application/vnd.criticaltools.wbs+xml': ['wbs'],
            'application/vnd.ctc-posml': ['pml'],
            'application/vnd.cups-ppd': ['ppd'],
            'application/vnd.curl.car': ['car'],
            'application/vnd.curl.pcurl': ['pcurl'],
            'application/vnd.dart': ['dart'],
            'application/vnd.data-vision.rdz': ['rdz'],
            'application/vnd.dbf': ['dbf'],
            'application/vnd.dece.data': ['uvf', 'uvvf', 'uvd', 'uvvd'],
            'application/vnd.dece.ttml+xml': ['uvt', 'uvvt'],
            'application/vnd.dece.unspecified': ['uvx', 'uvvx'],
            'application/vnd.dece.zip': ['uvz', 'uvvz'],
            'application/vnd.denovo.fcselayout-link': ['fe_launch'],
            'application/vnd.dna': ['dna'],
            'application/vnd.dolby.mlp': ['mlp'],
            'application/vnd.dpgraph': ['dpg'],
            'application/vnd.dreamfactory': ['dfac'],
            'application/vnd.ds-keypoint': ['kpxx'],
            'application/vnd.dvb.ait': ['ait'],
            'application/vnd.dvb.service': ['svc'],
            'application/vnd.dynageo': ['geo'],
            'application/vnd.ecowin.chart': ['mag'],
            'application/vnd.enliven': ['nml'],
            'application/vnd.epson.esf': ['esf'],
            'application/vnd.epson.msf': ['msf'],
            'application/vnd.epson.quickanime': ['qam'],
            'application/vnd.epson.salt': ['slt'],
            'application/vnd.epson.ssf': ['ssf'],
            'application/vnd.eszigno3+xml': ['es3', 'et3'],
            'application/vnd.ezpix-album': ['ez2'],
            'application/vnd.ezpix-package': ['ez3'],
            'application/vnd.fdf': ['fdf'],
            'application/vnd.fdsn.mseed': ['mseed'],
            'application/vnd.fdsn.seed': ['seed', 'dataless'],
            'application/vnd.flographit': ['gph'],
            'application/vnd.fluxtime.clip': ['ftc'],
            'application/vnd.framemaker': ['fm', 'frame', 'maker', 'book'],
            'application/vnd.frogans.fnc': ['fnc'],
            'application/vnd.frogans.ltf': ['ltf'],
            'application/vnd.fsc.weblaunch': ['fsc'],
            'application/vnd.fujitsu.oasys': ['oas'],
            'application/vnd.fujitsu.oasys2': ['oa2'],
            'application/vnd.fujitsu.oasys3': ['oa3'],
            'application/vnd.fujitsu.oasysgp': ['fg5'],
            'application/vnd.fujitsu.oasysprs': ['bh2'],
            'application/vnd.fujixerox.ddd': ['ddd'],
            'application/vnd.fujixerox.docuworks': ['xdw'],
            'application/vnd.fujixerox.docuworks.binder': ['xbd'],
            'application/vnd.fuzzysheet': ['fzs'],
            'application/vnd.genomatix.tuxedo': ['txd'],
            'application/vnd.geogebra.file': ['ggb'],
            'application/vnd.geogebra.tool': ['ggt'],
            'application/vnd.geometry-explorer': ['gex', 'gre'],
            'application/vnd.geonext': ['gxt'],
            'application/vnd.geoplan': ['g2w'],
            'application/vnd.geospace': ['g3w'],
            'application/vnd.gmx': ['gmx'],
            'application/vnd.google-apps.document': ['gdoc'],
            'application/vnd.google-apps.presentation': ['gslides'],
            'application/vnd.google-apps.spreadsheet': ['gsheet'],
            'application/vnd.google-earth.kml+xml': ['kml'],
            'application/vnd.google-earth.kmz': ['kmz'],
            'application/vnd.grafeq': ['gqf', 'gqs'],
            'application/vnd.groove-account': ['gac'],
            'application/vnd.groove-help': ['ghf'],
            'application/vnd.groove-identity-message': ['gim'],
            'application/vnd.groove-injector': ['grv'],
            'application/vnd.groove-tool-message': ['gtm'],
            'application/vnd.groove-tool-template': ['tpl'],
            'application/vnd.groove-vcard': ['vcg'],
            'application/vnd.hal+xml': ['hal'],
            'application/vnd.handheld-entertainment+xml': ['zmm'],
            'application/vnd.hbci': ['hbci'],
            'application/vnd.hhe.lesson-player': ['les'],
            'application/vnd.hp-hpgl': ['hpgl'],
            'application/vnd.hp-hpid': ['hpid'],
            'application/vnd.hp-hps': ['hps'],
            'application/vnd.hp-jlyt': ['jlt'],
            'application/vnd.hp-pcl': ['pcl'],
            'application/vnd.hp-pclxl': ['pclxl'],
            'application/vnd.hydrostatix.sof-data': ['sfd-hdstx'],
            'application/vnd.ibm.minipay': ['mpy'],
            'application/vnd.ibm.modcap': ['afp', 'listafp', 'list3820'],
            'application/vnd.ibm.rights-management': ['irm'],
            'application/vnd.ibm.secure-container': ['sc'],
            'application/vnd.iccprofile': ['icc', 'icm'],
            'application/vnd.igloader': ['igl'],
            'application/vnd.immervision-ivp': ['ivp'],
            'application/vnd.immervision-ivu': ['ivu'],
            'application/vnd.insors.igm': ['igm'],
            'application/vnd.intercon.formnet': ['xpw', 'xpx'],
            'application/vnd.intergeo': ['i2g'],
            'application/vnd.intu.qbo': ['qbo'],
            'application/vnd.intu.qfx': ['qfx'],
            'application/vnd.ipunplugged.rcprofile': ['rcprofile'],
            'application/vnd.irepository.package+xml': ['irp'],
            'application/vnd.is-xpr': ['xpr'],
            'application/vnd.isac.fcs': ['fcs'],
            'application/vnd.jam': ['jam'],
            'application/vnd.jcp.javame.midlet-rms': ['rms'],
            'application/vnd.jisp': ['jisp'],
            'application/vnd.joost.joda-archive': ['joda'],
            'application/vnd.kahootz': ['ktz', 'ktr'],
            'application/vnd.kde.karbon': ['karbon'],
            'application/vnd.kde.kchart': ['chrt'],
            'application/vnd.kde.kformula': ['kfo'],
            'application/vnd.kde.kivio': ['flw'],
            'application/vnd.kde.kontour': ['kon'],
            'application/vnd.kde.kpresenter': ['kpr', 'kpt'],
            'application/vnd.kde.kspread': ['ksp'],
            'application/vnd.kde.kword': ['kwd', 'kwt'],
            'application/vnd.kenameaapp': ['htke'],
            'application/vnd.kidspiration': ['kia'],
            'application/vnd.kinar': ['kne', 'knp'],
            'application/vnd.koan': ['skp', 'skd', 'skt', 'skm'],
            'application/vnd.kodak-descriptor': ['sse'],
            'application/vnd.las.las+xml': ['lasxml'],
            'application/vnd.llamagraphics.life-balance.desktop': ['lbd'],
            'application/vnd.llamagraphics.life-balance.exchange+xml': ['lbe'],
            'application/vnd.lotus-1-2-3': ['123'],
            'application/vnd.lotus-approach': ['apr'],
            'application/vnd.lotus-freelance': ['pre'],
            'application/vnd.lotus-notes': ['nsf'],
            'application/vnd.lotus-organizer': ['org'],
            'application/vnd.lotus-screencam': ['scm'],
            'application/vnd.lotus-wordpro': ['lwp'],
            'application/vnd.macports.portpkg': ['portpkg'],
            'application/vnd.mapbox-vector-tile': ['mvt'],
            'application/vnd.mcd': ['mcd'],
            'application/vnd.medcalcdata': ['mc1'],
            'application/vnd.mediastation.cdkey': ['cdkey'],
            'application/vnd.mfer': ['mwf'],
            'application/vnd.mfmp': ['mfm'],
            'application/vnd.micrografx.flo': ['flo'],
            'application/vnd.micrografx.igx': ['igx'],
            'application/vnd.mif': ['mif'],
            'application/vnd.mobius.daf': ['daf'],
            'application/vnd.mobius.dis': ['dis'],
            'application/vnd.mobius.mbk': ['mbk'],
            'application/vnd.mobius.mqy': ['mqy'],
            'application/vnd.mobius.msl': ['msl'],
            'application/vnd.mobius.plc': ['plc'],
            'application/vnd.mobius.txf': ['txf'],
            'application/vnd.mophun.application': ['mpn'],
            'application/vnd.mophun.certificate': ['mpc'],
            'application/vnd.mozilla.xul+xml': ['xul'],
            'application/vnd.ms-artgalry': ['cil'],
            'application/vnd.ms-cab-compressed': ['cab'],
            'application/vnd.ms-excel': ['xls', 'xlm', 'xla', 'xlc', 'xlt', 'xlw'],
            'application/vnd.ms-excel.addin.macroenabled.12': ['xlam'],
            'application/vnd.ms-excel.sheet.binary.macroenabled.12': ['xlsb'],
            'application/vnd.ms-excel.sheet.macroenabled.12': ['xlsm'],
            'application/vnd.ms-excel.template.macroenabled.12': ['xltm'],
            'application/vnd.ms-fontobject': ['eot'],
            'application/vnd.ms-htmlhelp': ['chm'],
            'application/vnd.ms-ims': ['ims'],
            'application/vnd.ms-lrm': ['lrm'],
            'application/vnd.ms-officetheme': ['thmx'],
            'application/vnd.ms-outlook': ['msg'],
            'application/vnd.ms-pki.seccat': ['cat'],
            'application/vnd.ms-pki.stl': ['*stl'],
            'application/vnd.ms-powerpoint': ['ppt', 'pps', 'pot'],
            'application/vnd.ms-powerpoint.addin.macroenabled.12': ['ppam'],
            'application/vnd.ms-powerpoint.presentation.macroenabled.12': ['pptm'],
            'application/vnd.ms-powerpoint.slide.macroenabled.12': ['sldm'],
            'application/vnd.ms-powerpoint.slideshow.macroenabled.12': ['ppsm'],
            'application/vnd.ms-powerpoint.template.macroenabled.12': ['potm'],
            'application/vnd.ms-project': ['mpp', 'mpt'],
            'application/vnd.ms-word.document.macroenabled.12': ['docm'],
            'application/vnd.ms-word.template.macroenabled.12': ['dotm'],
            'application/vnd.ms-works': ['wps', 'wks', 'wcm', 'wdb'],
            'application/vnd.ms-wpl': ['wpl'],
            'application/vnd.ms-xpsdocument': ['xps'],
            'application/vnd.mseq': ['mseq'],
            'application/vnd.musician': ['mus'],
            'application/vnd.muvee.style': ['msty'],
            'application/vnd.mynfc': ['taglet'],
            'application/vnd.neurolanguage.nlu': ['nlu'],
            'application/vnd.nitf': ['ntf', 'nitf'],
            'application/vnd.noblenet-directory': ['nnd'],
            'application/vnd.noblenet-sealer': ['nns'],
            'application/vnd.noblenet-web': ['nnw'],
            'application/vnd.nokia.n-gage.ac+xml': ['*ac'],
            'application/vnd.nokia.n-gage.data': ['ngdat'],
            'application/vnd.nokia.n-gage.symbian.install': ['n-gage'],
            'application/vnd.nokia.radio-preset': ['rpst'],
            'application/vnd.nokia.radio-presets': ['rpss'],
            'application/vnd.novadigm.edm': ['edm'],
            'application/vnd.novadigm.edx': ['edx'],
            'application/vnd.novadigm.ext': ['ext'],
            'application/vnd.oasis.opendocument.chart': ['odc'],
            'application/vnd.oasis.opendocument.chart-template': ['otc'],
            'application/vnd.oasis.opendocument.database': ['odb'],
            'application/vnd.oasis.opendocument.formula': ['odf'],
            'application/vnd.oasis.opendocument.formula-template': ['odft'],
            'application/vnd.oasis.opendocument.graphics': ['odg'],
            'application/vnd.oasis.opendocument.graphics-template': ['otg'],
            'application/vnd.oasis.opendocument.image': ['odi'],
            'application/vnd.oasis.opendocument.image-template': ['oti'],
            'application/vnd.oasis.opendocument.presentation': ['odp'],
            'application/vnd.oasis.opendocument.presentation-template': ['otp'],
            'application/vnd.oasis.opendocument.spreadsheet': ['ods'],
            'application/vnd.oasis.opendocument.spreadsheet-template': ['ots'],
            'application/vnd.oasis.opendocument.text': ['odt'],
            'application/vnd.oasis.opendocument.text-master': ['odm'],
            'application/vnd.oasis.opendocument.text-template': ['ott'],
            'application/vnd.oasis.opendocument.text-web': ['oth'],
            'application/vnd.olpc-sugar': ['xo'],
            'application/vnd.oma.dd2+xml': ['dd2'],
            'application/vnd.openblox.game+xml': ['obgx'],
            'application/vnd.openofficeorg.extension': ['oxt'],
            'application/vnd.openstreetmap.data+xml': ['osm'],
            'application/vnd.openxmlformats-officedocument.presentationml.presentation':
              ['pptx'],
            'application/vnd.openxmlformats-officedocument.presentationml.slide': [
              'sldx',
            ],
            'application/vnd.openxmlformats-officedocument.presentationml.slideshow': [
              'ppsx',
            ],
            'application/vnd.openxmlformats-officedocument.presentationml.template': [
              'potx',
            ],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
              'xlsx',
            ],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.template': [
              'xltx',
            ],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
              'docx',
            ],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.template': [
              'dotx',
            ],
            'application/vnd.osgeo.mapguide.package': ['mgp'],
            'application/vnd.osgi.dp': ['dp'],
            'application/vnd.osgi.subsystem': ['esa'],
            'application/vnd.palm': ['pdb', 'pqa', 'oprc'],
            'application/vnd.pawaafile': ['paw'],
            'application/vnd.pg.format': ['str'],
            'application/vnd.pg.osasli': ['ei6'],
            'application/vnd.picsel': ['efif'],
            'application/vnd.pmi.widget': ['wg'],
            'application/vnd.pocketlearn': ['plf'],
            'application/vnd.powerbuilder6': ['pbd'],
            'application/vnd.previewsystems.box': ['box'],
            'application/vnd.proteus.magazine': ['mgz'],
            'application/vnd.publishare-delta-tree': ['qps'],
            'application/vnd.pvi.ptid1': ['ptid'],
            'application/vnd.quark.quarkxpress': [
              'qxd',
              'qxt',
              'qwd',
              'qwt',
              'qxl',
              'qxb',
            ],
            'application/vnd.rar': ['rar'],
            'application/vnd.realvnc.bed': ['bed'],
            'application/vnd.recordare.musicxml': ['mxl'],
            'application/vnd.recordare.musicxml+xml': ['musicxml'],
            'application/vnd.rig.cryptonote': ['cryptonote'],
            'application/vnd.rim.cod': ['cod'],
            'application/vnd.rn-realmedia': ['rm'],
            'application/vnd.rn-realmedia-vbr': ['rmvb'],
            'application/vnd.route66.link66+xml': ['link66'],
            'application/vnd.sailingtracker.track': ['st'],
            'application/vnd.seemail': ['see'],
            'application/vnd.sema': ['sema'],
            'application/vnd.semd': ['semd'],
            'application/vnd.semf': ['semf'],
            'application/vnd.shana.informed.formdata': ['ifm'],
            'application/vnd.shana.informed.formtemplate': ['itp'],
            'application/vnd.shana.informed.interchange': ['iif'],
            'application/vnd.shana.informed.package': ['ipk'],
            'application/vnd.simtech-mindmapper': ['twd', 'twds'],
            'application/vnd.smaf': ['mmf'],
            'application/vnd.smart.teacher': ['teacher'],
            'application/vnd.software602.filler.form+xml': ['fo'],
            'application/vnd.solent.sdkm+xml': ['sdkm', 'sdkd'],
            'application/vnd.spotfire.dxp': ['dxp'],
            'application/vnd.spotfire.sfs': ['sfs'],
            'application/vnd.stardivision.calc': ['sdc'],
            'application/vnd.stardivision.draw': ['sda'],
            'application/vnd.stardivision.impress': ['sdd'],
            'application/vnd.stardivision.math': ['smf'],
            'application/vnd.stardivision.writer': ['sdw', 'vor'],
            'application/vnd.stardivision.writer-global': ['sgl'],
            'application/vnd.stepmania.package': ['smzip'],
            'application/vnd.stepmania.stepchart': ['sm'],
            'application/vnd.sun.wadl+xml': ['wadl'],
            'application/vnd.sun.xml.calc': ['sxc'],
            'application/vnd.sun.xml.calc.template': ['stc'],
            'application/vnd.sun.xml.draw': ['sxd'],
            'application/vnd.sun.xml.draw.template': ['std'],
            'application/vnd.sun.xml.impress': ['sxi'],
            'application/vnd.sun.xml.impress.template': ['sti'],
            'application/vnd.sun.xml.math': ['sxm'],
            'application/vnd.sun.xml.writer': ['sxw'],
            'application/vnd.sun.xml.writer.global': ['sxg'],
            'application/vnd.sun.xml.writer.template': ['stw'],
            'application/vnd.sus-calendar': ['sus', 'susp'],
            'application/vnd.svd': ['svd'],
            'application/vnd.symbian.install': ['sis', 'sisx'],
            'application/vnd.syncml+xml': ['xsm'],
            'application/vnd.syncml.dm+wbxml': ['bdm'],
            'application/vnd.syncml.dm+xml': ['xdm'],
            'application/vnd.syncml.dmddf+xml': ['ddf'],
            'application/vnd.tao.intent-module-archive': ['tao'],
            'application/vnd.tcpdump.pcap': ['pcap', 'cap', 'dmp'],
            'application/vnd.tmobile-livetv': ['tmo'],
            'application/vnd.trid.tpt': ['tpt'],
            'application/vnd.triscape.mxs': ['mxs'],
            'application/vnd.trueapp': ['tra'],
            'application/vnd.ufdl': ['ufd', 'ufdl'],
            'application/vnd.uiq.theme': ['utz'],
            'application/vnd.umajin': ['umj'],
            'application/vnd.unity': ['unityweb'],
            'application/vnd.uoml+xml': ['uoml'],
            'application/vnd.vcx': ['vcx'],
            'application/vnd.visio': ['vsd', 'vst', 'vss', 'vsw'],
            'application/vnd.visionary': ['vis'],
            'application/vnd.vsf': ['vsf'],
            'application/vnd.wap.wbxml': ['wbxml'],
            'application/vnd.wap.wmlc': ['wmlc'],
            'application/vnd.wap.wmlscriptc': ['wmlsc'],
            'application/vnd.webturbo': ['wtb'],
            'application/vnd.wolfram.player': ['nbp'],
            'application/vnd.wordperfect': ['wpd'],
            'application/vnd.wqd': ['wqd'],
            'application/vnd.wt.stf': ['stf'],
            'application/vnd.xara': ['xar'],
            'application/vnd.xfdl': ['xfdl'],
            'application/vnd.yamaha.hv-dic': ['hvd'],
            'application/vnd.yamaha.hv-script': ['hvs'],
            'application/vnd.yamaha.hv-voice': ['hvp'],
            'application/vnd.yamaha.openscoreformat': ['osf'],
            'application/vnd.yamaha.openscoreformat.osfpvg+xml': ['osfpvg'],
            'application/vnd.yamaha.smaf-audio': ['saf'],
            'application/vnd.yamaha.smaf-phrase': ['spf'],
            'application/vnd.yellowriver-custom-menu': ['cmp'],
            'application/vnd.zul': ['zir', 'zirz'],
            'application/vnd.zzazz.deck+xml': ['zaz'],
            'application/x-7z-compressed': ['7z'],
            'application/x-abiword': ['abw'],
            'application/x-ace-compressed': ['ace'],
            'application/x-apple-diskimage': ['*dmg'],
            'application/x-arj': ['arj'],
            'application/x-authorware-bin': ['aab', 'x32', 'u32', 'vox'],
            'application/x-authorware-map': ['aam'],
            'application/x-authorware-seg': ['aas'],
            'application/x-bcpio': ['bcpio'],
            'application/x-bdoc': ['*bdoc'],
            'application/x-bittorrent': ['torrent'],
            'application/x-blorb': ['blb', 'blorb'],
            'application/x-bzip': ['bz'],
            'application/x-bzip2': ['bz2', 'boz'],
            'application/x-cbr': ['cbr', 'cba', 'cbt', 'cbz', 'cb7'],
            'application/x-cdlink': ['vcd'],
            'application/x-cfs-compressed': ['cfs'],
            'application/x-chat': ['chat'],
            'application/x-chess-pgn': ['pgn'],
            'application/x-chrome-extension': ['crx'],
            'application/x-cocoa': ['cco'],
            'application/x-conference': ['nsc'],
            'application/x-cpio': ['cpio'],
            'application/x-csh': ['csh'],
            'application/x-debian-package': ['*deb', 'udeb'],
            'application/x-dgc-compressed': ['dgc'],
            'application/x-director': [
              'dir',
              'dcr',
              'dxr',
              'cst',
              'cct',
              'cxt',
              'w3d',
              'fgd',
              'swa',
            ],
            'application/x-doom': ['wad'],
            'application/x-dtbncx+xml': ['ncx'],
            'application/x-dtbook+xml': ['dtb'],
            'application/x-dtbresource+xml': ['res'],
            'application/x-dvi': ['dvi'],
            'application/x-envoy': ['evy'],
            'application/x-eva': ['eva'],
            'application/x-font-bdf': ['bdf'],
            'application/x-font-ghostscript': ['gsf'],
            'application/x-font-linux-psf': ['psf'],
            'application/x-font-pcf': ['pcf'],
            'application/x-font-snf': ['snf'],
            'application/x-font-type1': ['pfa', 'pfb', 'pfm', 'afm'],
            'application/x-freearc': ['arc'],
            'application/x-futuresplash': ['spl'],
            'application/x-gca-compressed': ['gca'],
            'application/x-glulx': ['ulx'],
            'application/x-gnumeric': ['gnumeric'],
            'application/x-gramps-xml': ['gramps'],
            'application/x-gtar': ['gtar'],
            'application/x-hdf': ['hdf'],
            'application/x-httpd-php': ['php'],
            'application/x-install-instructions': ['install'],
            'application/x-iso9660-image': ['*iso'],
            'application/x-iwork-keynote-sffkey': ['*key'],
            'application/x-iwork-numbers-sffnumbers': ['*numbers'],
            'application/x-iwork-pages-sffpages': ['*pages'],
            'application/x-java-archive-diff': ['jardiff'],
            'application/x-java-jnlp-file': ['jnlp'],
            'application/x-keepass2': ['kdbx'],
            'application/x-latex': ['latex'],
            'application/x-lua-bytecode': ['luac'],
            'application/x-lzh-compressed': ['lzh', 'lha'],
            'application/x-makeself': ['run'],
            'application/x-mie': ['mie'],
            'application/x-mobipocket-ebook': ['prc', 'mobi'],
            'application/x-ms-application': ['application'],
            'application/x-ms-shortcut': ['lnk'],
            'application/x-ms-wmd': ['wmd'],
            'application/x-ms-wmz': ['wmz'],
            'application/x-ms-xbap': ['xbap'],
            'application/x-msaccess': ['mdb'],
            'application/x-msbinder': ['obd'],
            'application/x-mscardfile': ['crd'],
            'application/x-msclip': ['clp'],
            'application/x-msdos-program': ['*exe'],
            'application/x-msdownload': ['*exe', '*dll', 'com', 'bat', '*msi'],
            'application/x-msmediaview': ['mvb', 'm13', 'm14'],
            'application/x-msmetafile': ['*wmf', '*wmz', '*emf', 'emz'],
            'application/x-msmoney': ['mny'],
            'application/x-mspublisher': ['pub'],
            'application/x-msschedule': ['scd'],
            'application/x-msterminal': ['trm'],
            'application/x-mswrite': ['wri'],
            'application/x-netcdf': ['nc', 'cdf'],
            'application/x-ns-proxy-autoconfig': ['pac'],
            'application/x-nzb': ['nzb'],
            'application/x-perl': ['pl', 'pm'],
            'application/x-pilot': ['*prc', '*pdb'],
            'application/x-pkcs12': ['p12', 'pfx'],
            'application/x-pkcs7-certificates': ['p7b', 'spc'],
            'application/x-pkcs7-certreqresp': ['p7r'],
            'application/x-rar-compressed': ['*rar'],
            'application/x-redhat-package-manager': ['rpm'],
            'application/x-research-info-systems': ['ris'],
            'application/x-sea': ['sea'],
            'application/x-sh': ['sh'],
            'application/x-shar': ['shar'],
            'application/x-shockwave-flash': ['swf'],
            'application/x-silverlight-app': ['xap'],
            'application/x-sql': ['sql'],
            'application/x-stuffit': ['sit'],
            'application/x-stuffitx': ['sitx'],
            'application/x-subrip': ['srt'],
            'application/x-sv4cpio': ['sv4cpio'],
            'application/x-sv4crc': ['sv4crc'],
            'application/x-t3vm-image': ['t3'],
            'application/x-tads': ['gam'],
            'application/x-tar': ['tar'],
            'application/x-tcl': ['tcl', 'tk'],
            'application/x-tex': ['tex'],
            'application/x-tex-tfm': ['tfm'],
            'application/x-texinfo': ['texinfo', 'texi'],
            'application/x-tgif': ['*obj'],
            'application/x-ustar': ['ustar'],
            'application/x-virtualbox-hdd': ['hdd'],
            'application/x-virtualbox-ova': ['ova'],
            'application/x-virtualbox-ovf': ['ovf'],
            'application/x-virtualbox-vbox': ['vbox'],
            'application/x-virtualbox-vbox-extpack': ['vbox-extpack'],
            'application/x-virtualbox-vdi': ['vdi'],
            'application/x-virtualbox-vhd': ['vhd'],
            'application/x-virtualbox-vmdk': ['vmdk'],
            'application/x-wais-source': ['src'],
            'application/x-web-app-manifest+json': ['webapp'],
            'application/x-x509-ca-cert': ['der', 'crt', 'pem'],
            'application/x-xfig': ['fig'],
            'application/x-xliff+xml': ['*xlf'],
            'application/x-xpinstall': ['xpi'],
            'application/x-xz': ['xz'],
            'application/x-zmachine': ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8'],
            'audio/vnd.dece.audio': ['uva', 'uvva'],
            'audio/vnd.digital-winds': ['eol'],
            'audio/vnd.dra': ['dra'],
            'audio/vnd.dts': ['dts'],
            'audio/vnd.dts.hd': ['dtshd'],
            'audio/vnd.lucent.voice': ['lvp'],
            'audio/vnd.ms-playready.media.pya': ['pya'],
            'audio/vnd.nuera.ecelp4800': ['ecelp4800'],
            'audio/vnd.nuera.ecelp7470': ['ecelp7470'],
            'audio/vnd.nuera.ecelp9600': ['ecelp9600'],
            'audio/vnd.rip': ['rip'],
            'audio/x-aac': ['aac'],
            'audio/x-aiff': ['aif', 'aiff', 'aifc'],
            'audio/x-caf': ['caf'],
            'audio/x-flac': ['flac'],
            'audio/x-m4a': ['*m4a'],
            'audio/x-matroska': ['mka'],
            'audio/x-mpegurl': ['m3u'],
            'audio/x-ms-wax': ['wax'],
            'audio/x-ms-wma': ['wma'],
            'audio/x-pn-realaudio': ['ram', 'ra'],
            'audio/x-pn-realaudio-plugin': ['rmp'],
            'audio/x-realaudio': ['*ra'],
            'audio/x-wav': ['*wav'],
            'chemical/x-cdx': ['cdx'],
            'chemical/x-cif': ['cif'],
            'chemical/x-cmdf': ['cmdf'],
            'chemical/x-cml': ['cml'],
            'chemical/x-csml': ['csml'],
            'chemical/x-xyz': ['xyz'],
            'image/prs.btif': ['btif'],
            'image/prs.pti': ['pti'],
            'image/vnd.adobe.photoshop': ['psd'],
            'image/vnd.airzip.accelerator.azv': ['azv'],
            'image/vnd.dece.graphic': ['uvi', 'uvvi', 'uvg', 'uvvg'],
            'image/vnd.djvu': ['djvu', 'djv'],
            'image/vnd.dvb.subtitle': ['*sub'],
            'image/vnd.dwg': ['dwg'],
            'image/vnd.dxf': ['dxf'],
            'image/vnd.fastbidsheet': ['fbs'],
            'image/vnd.fpx': ['fpx'],
            'image/vnd.fst': ['fst'],
            'image/vnd.fujixerox.edmics-mmr': ['mmr'],
            'image/vnd.fujixerox.edmics-rlc': ['rlc'],
            'image/vnd.microsoft.icon': ['ico'],
            'image/vnd.ms-dds': ['dds'],
            'image/vnd.ms-modi': ['mdi'],
            'image/vnd.ms-photo': ['wdp'],
            'image/vnd.net-fpx': ['npx'],
            'image/vnd.pco.b16': ['b16'],
            'image/vnd.tencent.tap': ['tap'],
            'image/vnd.valve.source.texture': ['vtf'],
            'image/vnd.wap.wbmp': ['wbmp'],
            'image/vnd.xiff': ['xif'],
            'image/vnd.zbrush.pcx': ['pcx'],
            'image/x-3ds': ['3ds'],
            'image/x-cmu-raster': ['ras'],
            'image/x-cmx': ['cmx'],
            'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
            'image/x-icon': ['*ico'],
            'image/x-jng': ['jng'],
            'image/x-mrsid-image': ['sid'],
            'image/x-ms-bmp': ['*bmp'],
            'image/x-pcx': ['*pcx'],
            'image/x-pict': ['pic', 'pct'],
            'image/x-portable-anymap': ['pnm'],
            'image/x-portable-bitmap': ['pbm'],
            'image/x-portable-graymap': ['pgm'],
            'image/x-portable-pixmap': ['ppm'],
            'image/x-rgb': ['rgb'],
            'image/x-tga': ['tga'],
            'image/x-xbitmap': ['xbm'],
            'image/x-xpixmap': ['xpm'],
            'image/x-xwindowdump': ['xwd'],
            'message/vnd.wfa.wsc': ['wsc'],
            'model/vnd.collada+xml': ['dae'],
            'model/vnd.dwf': ['dwf'],
            'model/vnd.gdl': ['gdl'],
            'model/vnd.gtw': ['gtw'],
            'model/vnd.mts': ['mts'],
            'model/vnd.opengex': ['ogex'],
            'model/vnd.parasolid.transmit.binary': ['x_b'],
            'model/vnd.parasolid.transmit.text': ['x_t'],
            'model/vnd.sap.vds': ['vds'],
            'model/vnd.usdz+zip': ['usdz'],
            'model/vnd.valve.source.compiled-map': ['bsp'],
            'model/vnd.vtu': ['vtu'],
            'text/prs.lines.tag': ['dsc'],
            'text/vnd.curl': ['curl'],
            'text/vnd.curl.dcurl': ['dcurl'],
            'text/vnd.curl.mcurl': ['mcurl'],
            'text/vnd.curl.scurl': ['scurl'],
            'text/vnd.dvb.subtitle': ['sub'],
            'text/vnd.fly': ['fly'],
            'text/vnd.fmi.flexstor': ['flx'],
            'text/vnd.graphviz': ['gv'],
            'text/vnd.in3d.3dml': ['3dml'],
            'text/vnd.in3d.spot': ['spot'],
            'text/vnd.sun.j2me.app-descriptor': ['jad'],
            'text/vnd.wap.wml': ['wml'],
            'text/vnd.wap.wmlscript': ['wmls'],
            'text/x-asm': ['s', 'asm'],
            'text/x-c': ['c', 'cc', 'cxx', 'cpp', 'h', 'hh', 'dic'],
            'text/x-component': ['htc'],
            'text/x-fortran': ['f', 'for', 'f77', 'f90'],
            'text/x-handlebars-template': ['hbs'],
            'text/x-java-source': ['java'],
            'text/x-lua': ['lua'],
            'text/x-markdown': ['mkd'],
            'text/x-nfo': ['nfo'],
            'text/x-opml': ['opml'],
            'text/x-org': ['*org'],
            'text/x-pascal': ['p', 'pas'],
            'text/x-processing': ['pde'],
            'text/x-sass': ['sass'],
            'text/x-scss': ['scss'],
            'text/x-setext': ['etx'],
            'text/x-sfv': ['sfv'],
            'text/x-suse-ymp': ['ymp'],
            'text/x-uuencode': ['uu'],
            'text/x-vcalendar': ['vcs'],
            'text/x-vcard': ['vcf'],
            'video/vnd.dece.hd': ['uvh', 'uvvh'],
            'video/vnd.dece.mobile': ['uvm', 'uvvm'],
            'video/vnd.dece.pd': ['uvp', 'uvvp'],
            'video/vnd.dece.sd': ['uvs', 'uvvs'],
            'video/vnd.dece.video': ['uvv', 'uvvv'],
            'video/vnd.dvb.file': ['dvb'],
            'video/vnd.fvt': ['fvt'],
            'video/vnd.mpegurl': ['mxu', 'm4u'],
            'video/vnd.ms-playready.media.pyv': ['pyv'],
            'video/vnd.uvvu.mp4': ['uvu', 'uvvu'],
            'video/vnd.vivo': ['viv'],
            'video/x-f4v': ['f4v'],
            'video/x-fli': ['fli'],
            'video/x-flv': ['flv'],
            'video/x-m4v': ['m4v'],
            'video/x-matroska': ['mkv', 'mk3d', 'mks'],
            'video/x-mng': ['mng'],
            'video/x-ms-asf': ['asf', 'asx'],
            'video/x-ms-vob': ['vob'],
            'video/x-ms-wm': ['wm'],
            'video/x-ms-wmv': ['wmv'],
            'video/x-ms-wmx': ['wmx'],
            'video/x-ms-wvx': ['wvx'],
            'video/x-msvideo': ['avi'],
            'video/x-sgi-movie': ['movie'],
            'video/x-smv': ['smv'],
            'x-conference/x-cooltalk': ['ice'],
          };
        }),
        Ta = fe((t, e) => {
          var i = Ma();
          e.exports = new i(Da(), Ra());
        }),
        Ia,
        Ya,
        Zi,
        nc,
        Me,
        Ee,
        ac,
        Ji = gt(() => {
          var t;
          (Ia = nt(Et())),
            (Ya = nt(Ta())),
            (Zi = nt(oi())),
            (nc = new Zi.Token('@jupyterlite/contents:IContents')),
            ((t = Me || (Me = {})).JSON = 'application/json'),
            (t.PLAIN_TEXT = 'text/plain'),
            (t.OCTET_STREAM = 'octet/stream'),
            (function (t) {
              let e = JSON.parse(Ia.PageConfig.getOption('fileTypes') || '{}');
              (t.getType = function (t, i = null) {
                t = t.toLowerCase();
                for (let i of Object.values(e))
                  for (let e of i.extensions || [])
                    if (e === t && i.mimeTypes && i.mimeTypes.length)
                      return i.mimeTypes[0];
                return Ya.default.getType(t) || i || Me.OCTET_STREAM;
              }),
                (t.hasFormat = function (t, i) {
                  t = t.toLowerCase();
                  for (let n of Object.values(e))
                    if (n.fileFormat === i)
                      for (let e of n.extensions || []) if (e === t) return !0;
                  return !1;
                });
            })(Ee || (Ee = {})),
            (ac = new Zi.Token('@jupyterlite/contents:IBroadcastChannelWrapper'));
        }),
        qe,
        Re,
        Na,
        ja,
        Ea,
        Ki,
        ui,
        Aa = gt(() => {
          (qe = nt(Et())),
            (Re = nt(Et())),
            Ji(),
            (Na = nt(oi())),
            (ja = 'JupyterLite Storage'),
            (Ea = 5),
            (Ki = class {
              constructor(t) {
                (this.reduceBytesToString = (t, e) => t + String.fromCharCode(e)),
                  (this._serverContents = new Map()),
                  (this._storageName = ja),
                  (this._storageDrivers = null),
                  (this._localforage = t.localforage),
                  (this._storageName = t.storageName || ja),
                  (this._storageDrivers = t.storageDrivers || null),
                  (this._ready = new Na.PromiseDelegate());
              }
              async initialize() {
                await this.initStorage(), this._ready.resolve(void 0);
              }
              async initStorage() {
                (this._storage = this.createDefaultStorage()),
                  (this._counters = this.createDefaultCounters()),
                  (this._checkpoints = this.createDefaultCheckpoints());
              }
              get ready() {
                return this._ready.promise;
              }
              get storage() {
                return this.ready.then(() => this._storage);
              }
              get counters() {
                return this.ready.then(() => this._counters);
              }
              get checkpoints() {
                return this.ready.then(() => this._checkpoints);
              }
              get defaultStorageOptions() {
                let t =
                  this._storageDrivers && this._storageDrivers.length
                    ? this._storageDrivers
                    : null;
                return {
                  version: 1,
                  name: this._storageName,
                  ...(t ? { driver: t } : {}),
                };
              }
              createDefaultStorage() {
                return this._localforage.createInstance({
                  description: 'Offline Storage for Notebooks and Files',
                  storeName: 'files',
                  ...this.defaultStorageOptions,
                });
              }
              createDefaultCounters() {
                return this._localforage.createInstance({
                  description: 'Store the current file suffix counters',
                  storeName: 'counters',
                  ...this.defaultStorageOptions,
                });
              }
              createDefaultCheckpoints() {
                return this._localforage.createInstance({
                  description: 'Offline Storage for Checkpoints',
                  storeName: 'checkpoints',
                  ...this.defaultStorageOptions,
                });
              }
              async newUntitled(t) {
                var e, i, n;
                let a,
                  o =
                    null !== (e = null == t ? void 0 : t.path) && void 0 !== e ? e : '',
                  r =
                    null !== (i = null == t ? void 0 : t.type) && void 0 !== i
                      ? i
                      : 'notebook',
                  s = new Date().toISOString(),
                  l = Re.PathExt.dirname(o),
                  c = Re.PathExt.basename(o),
                  p = Re.PathExt.extname(o),
                  d = await this.get(l),
                  u = '';
                switch (
                  (o && !p && d
                    ? ((l = `${o}/`), (u = ''))
                    : l && c
                    ? ((l = `${l}/`), (u = c))
                    : ((l = ''), (u = o)),
                  r)
                ) {
                  case 'directory':
                    (u = `Untitled Folder${
                      (await this._incrementCounter('directory')) || ''
                    }`),
                      (a = {
                        name: u,
                        path: `${l}${u}`,
                        last_modified: s,
                        created: s,
                        format: 'json',
                        mimetype: '',
                        content: null,
                        size: 0,
                        writable: !0,
                        type: 'directory',
                      });
                    break;
                  case 'notebook': {
                    let t = await this._incrementCounter('notebook');
                    (u = u || `Untitled${t || ''}.ipynb`),
                      (a = {
                        name: u,
                        path: `${l}${u}`,
                        last_modified: s,
                        created: s,
                        format: 'json',
                        mimetype: Me.JSON,
                        content: ui.EMPTY_NB,
                        size: JSON.stringify(ui.EMPTY_NB).length,
                        writable: !0,
                        type: 'notebook',
                      });
                    break;
                  }
                  default: {
                    let e,
                      i =
                        null !== (n = null == t ? void 0 : t.ext) && void 0 !== n
                          ? n
                          : '.txt',
                      o = await this._incrementCounter('file'),
                      r = Ee.getType(i) || Me.OCTET_STREAM;
                    (e =
                      Ee.hasFormat(i, 'text') || -1 !== r.indexOf('text')
                        ? 'text'
                        : -1 !== i.indexOf('json') || -1 !== i.indexOf('ipynb')
                        ? 'json'
                        : 'base64'),
                      (u = u || `untitled${o || ''}${i}`),
                      (a = {
                        name: u,
                        path: `${l}${u}`,
                        last_modified: s,
                        created: s,
                        format: e,
                        mimetype: r,
                        content: '',
                        size: 0,
                        writable: !0,
                        type: 'file',
                      });
                    break;
                  }
                }
                let h = a.path;
                return await (await this.storage).setItem(h, a), a;
              }
              async copy(t, e) {
                let i = Re.PathExt.basename(t);
                for (
                  e = '' === e ? '' : `${e.slice(1)}/`;
                  await this.get(`${e}${i}`, { content: !0 });

                ) {
                  let t = Re.PathExt.extname(i);
                  i = `${i.replace(t, '')} (copy)${t}`;
                }
                let n = `${e}${i}`,
                  a = await this.get(t, { content: !0 });
                if (!a) throw Error(`Could not find file with path ${t}`);
                return (
                  (a = { ...a, name: i, path: n }),
                  await (await this.storage).setItem(n, a),
                  a
                );
              }
              async get(t, e) {
                if ('' === (t = decodeURIComponent(t.replace(/^\//, ''))))
                  return await this._getFolder(t);
                let i = await this.storage,
                  n = await i.getItem(t),
                  a = await this._getServerContents(t, e),
                  o = n || a;
                if (!o) return null;
                if (null == e || !e.content) return { size: 0, ...o, content: null };
                if ('directory' === o.type) {
                  let e = new Map();
                  await i.iterate((i, n) => {
                    n === `${t}/${i.name}` && e.set(i.name, i);
                  });
                  let n = a
                    ? a.content
                    : Array.from((await this._getServerDirectory(t)).values());
                  for (let t of n) e.has(t.name) || e.set(t.name, t);
                  let r = [...e.values()];
                  return {
                    name: Re.PathExt.basename(t),
                    path: t,
                    last_modified: o.last_modified,
                    created: o.created,
                    format: 'json',
                    mimetype: Me.JSON,
                    content: r,
                    size: 0,
                    writable: !0,
                    type: 'directory',
                  };
                }
                return o;
              }
              async rename(t, e) {
                let i = decodeURIComponent(t),
                  n = await this.get(i, { content: !0 });
                if (!n) throw Error(`Could not find file with path ${i}`);
                let a = new Date().toISOString(),
                  o = Re.PathExt.basename(e),
                  r = { ...n, name: o, path: e, last_modified: a },
                  s = await this.storage;
                if (
                  (await s.setItem(e, r),
                  await s.removeItem(i),
                  await (await this.checkpoints).removeItem(i),
                  'directory' === n.type)
                ) {
                  let i;
                  for (i of n.content)
                    await this.rename(
                      qe.URLExt.join(t, i.name),
                      qe.URLExt.join(e, i.name)
                    );
                }
                return r;
              }
              async save(t, e = {}) {
                var i;
                t = decodeURIComponent(t);
                let n = Re.PathExt.extname(
                    null !== (i = e.name) && void 0 !== i ? i : ''
                  ),
                  a = await this.get(t);
                if (
                  (a || (a = await this.newUntitled({ path: t, ext: n, type: 'file' })),
                  !a)
                )
                  return null;
                let o = new Date().toISOString();
                if (
                  ((a = { ...a, ...e, last_modified: o }),
                  e.content && 'base64' === e.format)
                )
                  if ('.ipynb' === n) {
                    let t = this.unescapeContent(e.content),
                      i = t.length;
                    a = {
                      ...a,
                      content: JSON.parse(t),
                      format: 'json',
                      type: 'notebook',
                      size: i,
                    };
                  } else if (Ee.hasFormat(n, 'json')) {
                    let t = this.unescapeContent(e.content),
                      i = t.length;
                    a = {
                      ...a,
                      content: JSON.parse(t),
                      format: 'json',
                      type: 'file',
                      size: i,
                    };
                  } else if (Ee.hasFormat(n, 'text')) {
                    let t = this.unescapeContent(e.content),
                      i = t.length;
                    a = { ...a, content: t, format: 'text', type: 'file', size: i };
                  } else a = { ...a, size: atob(e.content).length };
                return await (await this.storage).setItem(t, a), a;
              }
              unescapeContent(t) {
                return decodeURIComponent(escape(atob(t)));
              }
              async delete(t) {
                let e = `${(t = decodeURIComponent(t))}/`,
                  i = (await (await this.storage).keys()).filter(
                    (i) => i === t || i.startsWith(e)
                  );
                await Promise.all(i.map(this.forgetPath, this));
              }
              async forgetPath(t) {
                await Promise.all([
                  (await this.storage).removeItem(t),
                  (await this.checkpoints).removeItem(t),
                ]);
              }
              async createCheckpoint(t) {
                var e;
                let i = await this.checkpoints;
                t = decodeURIComponent(t);
                let n = await this.get(t, { content: !0 });
                if (!n) throw Error(`Could not find file with path ${t}`);
                let a = (
                  null !== (e = await i.getItem(t)) && void 0 !== e ? e : []
                ).filter(Boolean);
                return (
                  a.push(n),
                  a.length > Ea && a.splice(0, a.length - Ea),
                  await i.setItem(t, a),
                  { id: '' + (a.length - 1), last_modified: n.last_modified }
                );
              }
              async listCheckpoints(t) {
                return ((await (await this.checkpoints).getItem(t)) || [])
                  .filter(Boolean)
                  .map(this.normalizeCheckpoint, this);
              }
              normalizeCheckpoint(t, e) {
                return { id: e.toString(), last_modified: t.last_modified };
              }
              async restoreCheckpoint(t, e) {
                t = decodeURIComponent(t);
                let i = ((await (await this.checkpoints).getItem(t)) || [])[
                  parseInt(e)
                ];
                await (await this.storage).setItem(t, i);
              }
              async deleteCheckpoint(t, e) {
                t = decodeURIComponent(t);
                let i = (await (await this.checkpoints).getItem(t)) || [],
                  n = parseInt(e);
                i.splice(n, 1), await (await this.checkpoints).setItem(t, i);
              }
              async _getFolder(t) {
                let e = new Map();
                await (
                  await this.storage
                ).iterate((t, i) => {
                  i.includes('/') || e.set(t.path, t);
                });
                for (let i of (await this._getServerDirectory(t)).values())
                  e.has(i.path) || e.set(i.path, i);
                return t && 0 === e.size
                  ? null
                  : {
                      name: '',
                      path: t,
                      last_modified: new Date(0).toISOString(),
                      created: new Date(0).toISOString(),
                      format: 'json',
                      mimetype: Me.JSON,
                      content: Array.from(e.values()),
                      size: 0,
                      writable: !0,
                      type: 'directory',
                    };
              }
              async _getServerContents(t, e) {
                let i = Re.PathExt.basename(t),
                  n = (await this._getServerDirectory(qe.URLExt.join(t, '..'))).get(i);
                if (!n) return null;
                if (
                  ((n = n || {
                    name: i,
                    path: t,
                    last_modified: new Date(0).toISOString(),
                    created: new Date(0).toISOString(),
                    format: 'text',
                    mimetype: Me.PLAIN_TEXT,
                    type: 'file',
                    writable: !0,
                    size: 0,
                    content: '',
                  }),
                  null != e && e.content)
                )
                  if ('directory' === n.type) {
                    let e = await this._getServerDirectory(t);
                    n = { ...n, content: Array.from(e.values()) };
                  } else {
                    let e = qe.URLExt.join(qe.PageConfig.getBaseUrl(), 'files', t),
                      a = await fetch(e);
                    if (!a.ok) return null;
                    let o = n.mimetype || a.headers.get('Content-Type'),
                      r = Re.PathExt.extname(i);
                    if (
                      'notebook' === n.type ||
                      Ee.hasFormat(r, 'json') ||
                      -1 !== (null == o ? void 0 : o.indexOf('json')) ||
                      t.match(/\.(ipynb|[^/]*json[^/]*)$/)
                    ) {
                      let t = await a.text();
                      n = {
                        ...n,
                        content: JSON.parse(t),
                        format: 'json',
                        mimetype: n.mimetype || Me.JSON,
                        size: t.length,
                      };
                    } else if (Ee.hasFormat(r, 'text') || -1 !== o.indexOf('text')) {
                      let t = await a.text();
                      n = {
                        ...n,
                        content: t,
                        format: 'text',
                        mimetype: o || Me.PLAIN_TEXT,
                        size: t.length,
                      };
                    } else {
                      let t = await a.arrayBuffer(),
                        e = new Uint8Array(t);
                      n = {
                        ...n,
                        content: btoa(e.reduce(this.reduceBytesToString, '')),
                        format: 'base64',
                        mimetype: o || Me.OCTET_STREAM,
                        size: e.length,
                      };
                    }
                  }
                return n;
              }
              async _getServerDirectory(t) {
                let e = this._serverContents.get(t) || new Map();
                if (!this._serverContents.has(t)) {
                  let i = qe.URLExt.join(
                    qe.PageConfig.getBaseUrl(),
                    'api/contents',
                    t,
                    'all.json'
                  );
                  try {
                    let t = await fetch(i),
                      n = JSON.parse(await t.text());
                    for (let t of n.content) e.set(t.name, t);
                  } catch (t) {
                    console.warn(
                      `don't worry, about ${t}... nothing's broken. If there had been a\n          file at ${i}, you might see some more files.`
                    );
                  }
                  this._serverContents.set(t, e);
                }
                return e;
              }
              async _incrementCounter(t) {
                var e;
                let i = await this.counters,
                  n = (null !== (e = await i.getItem(t)) && void 0 !== e ? e : -1) + 1;
                return await i.setItem(t, n), n;
              }
            }),
            ((ui || (ui = {})).EMPTY_NB = {
              metadata: { orig_nbformat: 4 },
              nbformat_minor: 4,
              nbformat: 4,
              cells: [],
            });
        }),
        fi,
        Ua,
        rc,
        sc,
        za = gt(() => {
          (fi = 16895), (Ua = 33206), (rc = 1), (sc = 2);
        }),
        La,
        Xi,
        vi,
        oc,
        lc,
        Fa,
        pi,
        hi,
        mi,
        Qi,
        en = gt(() => {
          (La = ':'),
            (Xi = '/api/drive.v1'),
            (vi = 4096),
            (oc = new TextEncoder()),
            (lc = new TextDecoder('utf-8')),
            (Fa = {
              0: !1,
              1: !0,
              2: !0,
              64: !0,
              65: !0,
              66: !0,
              129: !0,
              193: !0,
              514: !0,
              577: !0,
              578: !0,
              705: !0,
              706: !0,
              1024: !0,
              1025: !0,
              1026: !0,
              1089: !0,
              1090: !0,
              1153: !0,
              1154: !0,
              1217: !0,
              1218: !0,
              4096: !0,
              4098: !0,
            }),
            (pi = class {
              constructor(t) {
                this.fs = t;
              }
              open(t) {
                let e = this.fs.realPath(t.node);
                this.fs.FS.isFile(t.node.mode) && (t.file = this.fs.API.get(e));
              }
              close(t) {
                if (!this.fs.FS.isFile(t.node.mode) || !t.file) return;
                let e = this.fs.realPath(t.node),
                  i = t.flags,
                  n = 'string' == typeof i ? parseInt(i, 10) : i;
                n &= 8191;
                let a = !0;
                n in Fa && (a = Fa[n]),
                  a && this.fs.API.put(e, t.file),
                  (t.file = void 0);
              }
              read(t, e, i, n, a) {
                if (n <= 0 || void 0 === t.file || a >= (t.file.data.length || 0))
                  return 0;
                let o = Math.min(t.file.data.length - a, n);
                return e.set(t.file.data.subarray(a, a + o), i), o;
              }
              write(t, e, i, n, a) {
                var o;
                if (n <= 0 || void 0 === t.file) return 0;
                if (
                  ((t.node.timestamp = Date.now()),
                  a + n >
                    ((null === (o = t.file) || void 0 === o ? void 0 : o.data.length) ||
                      0))
                ) {
                  let e = t.file.data ? t.file.data : new Uint8Array();
                  (t.file.data = new Uint8Array(a + n)), t.file.data.set(e);
                }
                return t.file.data.set(e.subarray(i, i + n), a), n;
              }
              llseek(t, e, i) {
                let n = e;
                if (1 === i) n += t.position;
                else if (2 === i && this.fs.FS.isFile(t.node.mode)) {
                  if (void 0 === t.file)
                    throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);
                  n += t.file.data.length;
                }
                if (n < 0) throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EINVAL);
                return n;
              }
            }),
            (hi = class {
              constructor(t) {
                this.fs = t;
              }
              getattr(t) {
                return {
                  ...this.fs.API.getattr(this.fs.realPath(t)),
                  mode: t.mode,
                  ino: t.id,
                };
              }
              setattr(t, e) {
                for (let [i, n] of Object.entries(e))
                  switch (i) {
                    case 'mode':
                      t.mode = n;
                      break;
                    case 'timestamp':
                      t.timestamp = n;
                      break;
                    default:
                      console.warn(
                        'setattr',
                        i,
                        'of',
                        n,
                        'on',
                        t,
                        'not yet implemented'
                      );
                  }
              }
              lookup(t, e) {
                let i = this.fs.PATH.join2(this.fs.realPath(t), e),
                  n = this.fs.API.lookup(i);
                if (!n.ok) throw this.fs.FS.genericErrors[this.fs.ERRNO_CODES.ENOENT];
                return this.fs.createNode(t, e, n.mode, 0);
              }
              mknod(t, e, i, n) {
                let a = this.fs.PATH.join2(this.fs.realPath(t), e);
                return this.fs.API.mknod(a, i), this.fs.createNode(t, e, i, n);
              }
              rename(t, e, i) {
                this.fs.API.rename(
                  t.parent
                    ? this.fs.PATH.join2(this.fs.realPath(t.parent), t.name)
                    : t.name,
                  this.fs.PATH.join2(this.fs.realPath(e), i)
                ),
                  (t.name = i),
                  (t.parent = e);
              }
              unlink(t, e) {
                this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t), e));
              }
              rmdir(t, e) {
                this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t), e));
              }
              readdir(t) {
                return this.fs.API.readdir(this.fs.realPath(t));
              }
              symlink(t, e, i) {
                throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);
              }
              readlink(t) {
                throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);
              }
            }),
            (mi = class {
              constructor(t, e, i, n, a) {
                (this._baseUrl = t),
                  (this._driveName = e),
                  (this._mountpoint = i),
                  (this.FS = n),
                  (this.ERRNO_CODES = a);
              }
              request(t) {
                let e = new XMLHttpRequest();
                e.open('POST', encodeURI(this.endpoint), !1);
                try {
                  e.send(JSON.stringify(t));
                } catch (t) {
                  console.error(t);
                }
                if (e.status >= 400)
                  throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);
                return JSON.parse(e.responseText);
              }
              lookup(t) {
                return this.request({ method: 'lookup', path: this.normalizePath(t) });
              }
              getmode(t) {
                return Number.parseInt(
                  this.request({ method: 'getmode', path: this.normalizePath(t) })
                );
              }
              mknod(t, e) {
                return this.request({
                  method: 'mknod',
                  path: this.normalizePath(t),
                  data: { mode: e },
                });
              }
              rename(t, e) {
                return this.request({
                  method: 'rename',
                  path: this.normalizePath(t),
                  data: { newPath: this.normalizePath(e) },
                });
              }
              readdir(t) {
                let e = this.request({
                  method: 'readdir',
                  path: this.normalizePath(t),
                });
                return e.push('.'), e.push('..'), e;
              }
              rmdir(t) {
                return this.request({ method: 'rmdir', path: this.normalizePath(t) });
              }
              get(t) {
                let e = this.request({ method: 'get', path: this.normalizePath(t) }),
                  i = e.content,
                  n = e.format;
                switch (n) {
                  case 'json':
                  case 'text':
                    return { data: oc.encode(i), format: n };
                  case 'base64': {
                    let t = atob(i),
                      e = t.length,
                      a = new Uint8Array(e);
                    for (let i = 0; i < e; i++) a[i] = t.charCodeAt(i);
                    return { data: a, format: n };
                  }
                  default:
                    throw new this.FS.ErrnoError(this.ERRNO_CODES.ENOENT);
                }
              }
              put(t, e) {
                switch (e.format) {
                  case 'json':
                  case 'text':
                    return this.request({
                      method: 'put',
                      path: this.normalizePath(t),
                      data: { format: e.format, data: lc.decode(e.data) },
                    });
                  case 'base64': {
                    let i = '';
                    for (let t = 0; t < e.data.byteLength; t++)
                      i += String.fromCharCode(e.data[t]);
                    return this.request({
                      method: 'put',
                      path: this.normalizePath(t),
                      data: { format: e.format, data: btoa(i) },
                    });
                  }
                }
              }
              getattr(t) {
                let e = this.request({
                  method: 'getattr',
                  path: this.normalizePath(t),
                });
                return (
                  (e.atime = new Date(e.atime)),
                  (e.mtime = new Date(e.mtime)),
                  (e.ctime = new Date(e.ctime)),
                  (e.size = e.size || 0),
                  e
                );
              }
              normalizePath(t) {
                return (
                  t.startsWith(this._mountpoint) &&
                    (t = t.slice(this._mountpoint.length)),
                  this._driveName && (t = `${this._driveName}${La}${t}`),
                  t
                );
              }
              get endpoint() {
                return `${this._baseUrl}api/drive`;
              }
            }),
            (Qi = class {
              constructor(t) {
                (this.FS = t.FS),
                  (this.PATH = t.PATH),
                  (this.ERRNO_CODES = t.ERRNO_CODES),
                  (this.API = new mi(
                    t.baseUrl,
                    t.driveName,
                    t.mountpoint,
                    this.FS,
                    this.ERRNO_CODES
                  )),
                  (this.driveName = t.driveName),
                  (this.node_ops = new hi(this)),
                  (this.stream_ops = new pi(this));
              }
              mount(t) {
                return this.createNode(null, t.mountpoint, 16895, 0);
              }
              createNode(t, e, i, n) {
                let a = this.FS;
                if (!a.isDir(i) && !a.isFile(i))
                  throw new a.ErrnoError(this.ERRNO_CODES.EINVAL);
                let o = a.createNode(t, e, i, n);
                return (
                  (o.node_ops = this.node_ops), (o.stream_ops = this.stream_ops), o
                );
              }
              getMode(t) {
                return this.API.getmode(t);
              }
              realPath(t) {
                let e = [],
                  i = t;
                for (e.push(i.name); i.parent !== i; ) (i = i.parent), e.push(i.name);
                return e.reverse(), this.PATH.join.apply(null, e);
              }
            });
        }),
        tn,
        nn,
        Wa = gt(() => {
          (tn = nt(Et())),
            en(),
            (nn = class {
              constructor(t) {
                (this.isDisposed = !1),
                  (this._onMessage = async (t) => {
                    if (!this._channel) return;
                    let e,
                      { _contents: i } = this,
                      n = t.data,
                      { path: a } = n,
                      o = null;
                    switch (n.method) {
                      case 'readdir':
                        (e = await i.get(a, { content: !0 })),
                          (o = []),
                          'directory' === e.type &&
                            e.content &&
                            (o = e.content.map((t) => t.name));
                        break;
                      case 'rmdir':
                        await i.delete(a);
                        break;
                      case 'rename':
                        await i.rename(a, n.data.newPath);
                        break;
                      case 'getmode':
                        (e = await i.get(a)),
                          (o = 'directory' === e.type ? 16895 : 33206);
                        break;
                      case 'lookup':
                        try {
                          (e = await i.get(a)),
                            (o = {
                              ok: !0,
                              mode: 'directory' === e.type ? 16895 : 33206,
                            });
                        } catch {
                          o = { ok: !1 };
                        }
                        break;
                      case 'mknod':
                        (e = await i.newUntitled({
                          path: tn.PathExt.dirname(a),
                          type:
                            16895 === Number.parseInt(n.data.mode)
                              ? 'directory'
                              : 'file',
                          ext: tn.PathExt.extname(a),
                        })),
                          await i.rename(e.path, a);
                        break;
                      case 'getattr':
                        (e = await i.get(a)),
                          (o = {
                            dev: 1,
                            nlink: 1,
                            uid: 0,
                            gid: 0,
                            rdev: 0,
                            size: e.size || 0,
                            blksize: vi,
                            blocks: Math.ceil(e.size || 0 / vi),
                            atime: e.last_modified,
                            mtime: e.last_modified,
                            ctime: e.created,
                            timestamp: 0,
                          });
                        break;
                      case 'get':
                        if (
                          ((e = await i.get(a, { content: !0 })),
                          'directory' === e.type)
                        )
                          break;
                        o = {
                          content:
                            'json' === e.format ? JSON.stringify(e.content) : e.content,
                          format: e.format,
                        };
                        break;
                      case 'put':
                        await i.save(a, {
                          content:
                            'json' === n.data.format
                              ? JSON.parse(n.data.data)
                              : n.data.data,
                          type: 'file',
                          format: n.data.format,
                        });
                        break;
                      default:
                        o = null;
                    }
                    this._channel.postMessage(o);
                  }),
                  (this._channel = null),
                  (this._enabled = !1),
                  (this._contents = t.contents);
              }
              get enabled() {
                return this._enabled;
              }
              enable() {
                this._channel
                  ? console.warn('BroadcastChannel already created and enabled')
                  : ((this._channel = new BroadcastChannel(Xi)),
                    this._channel.addEventListener('message', this._onMessage),
                    (this._enabled = !0));
              }
              disable() {
                this._channel &&
                  (this._channel.removeEventListener('message', this._onMessage),
                  (this._channel = null)),
                  (this._enabled = !1);
              }
              dispose() {
                this.isDisposed || (this.disable(), (this.isDisposed = !0));
              }
            });
        }),
        Ha = {};
      Il(Ha, {
        BLOCK_SIZE: () => vi,
        BroadcastChannelWrapper: () => nn,
        Contents: () => Ki,
        ContentsAPI: () => mi,
        DIR_MODE: () => fi,
        DRIVE_API_PATH: () => Xi,
        DRIVE_SEPARATOR: () => La,
        DriveFS: () => Qi,
        DriveFSEmscriptenNodeOps: () => hi,
        DriveFSEmscriptenStreamOps: () => pi,
        FILE: () => Ee,
        FILE_MODE: () => Ua,
        IBroadcastChannelWrapper: () => ac,
        IContents: () => nc,
        MIME: () => Me,
        SEEK_CUR: () => rc,
        SEEK_END: () => sc,
      });
      var qa = gt(() => {
          Aa(), en(), Ji(), Wa(), za();
        }),
        Va = class {
          constructor() {
            (this._options = null),
              (this._initializer = null),
              (this._pyodide = null),
              (this._localPath = ''),
              (this._driveName = ''),
              (this._driveFS = null),
              (this._initialized = new Promise((t, e) => {
                this._initializer = { resolve: t, reject: e };
              }));
          }
          async initialize(t) {
            var e;
            if (((this._options = t), t.location.includes(':'))) {
              let e = t.location.split(':');
              (this._driveName = e[0]), (this._localPath = e[1]);
            } else (this._driveName = ''), (this._localPath = t.location);
            await this.initRuntime(t),
              await this.initFilesystem(t),
              await this.initPackageManager(t),
              await this.initKernel(t),
              await this.initGlobals(t),
              null == (e = this._initializer) || e.resolve();
          }
          async initRuntime(t) {
            let e,
              { pyodideUrl: i, indexUrl: n } = t;
            i.endsWith('.mjs')
              ? (e = (await __webpack_require__(693)(i)).loadPyodide)
              : (importScripts(i), (e = self.loadPyodide)),
              (this._pyodide = await e({ indexURL: n }));
          }
          async initPackageManager(t) {
            if (!this._options) throw new Error('Uninitialized');
            let {
              pipliteWheelUrl: e,
              disablePyPIFallback: i,
              pipliteUrls: n,
            } = this._options;
            await this._pyodide.loadPackage(['micropip']),
              await this._pyodide.runPythonAsync(
                `\n      import micropip\n      await micropip.install('${e}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${
                  i ? 'True' : 'False'
                }\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(n)}\n    `
              );
          }
          async initKernel(t) {
            await this._pyodide.runPythonAsync(
              "\n      await piplite.install(['sqlite3'], keep_going=True);\n      await piplite.install(['ipykernel'], keep_going=True);\n      await piplite.install(['pyodide_kernel'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyodide_kernel\n      import os\n      os.environ[\"FUCK\"] = \"Yes\"\n    "
            ),
              t.mountDrive &&
                this._localPath &&
                (await this._pyodide.runPythonAsync(
                  `\n        import os;\n        os.chdir("${this._localPath}");\n      `
                ));
          }
          async initGlobals(t) {
            let { globals: e } = this._pyodide;
            (this._kernel = e.get('pyodide_kernel').kernel_instance.copy()),
              (this._stdout_stream = e.get('pyodide_kernel').stdout_stream.copy()),
              (this._stderr_stream = e.get('pyodide_kernel').stderr_stream.copy()),
              (this._interpreter = this._kernel.interpreter.copy()),
              (this._interpreter.send_comm = this.sendComm.bind(this));
          }
          async initFilesystem(t) {
            if (t.mountDrive) {
              let e = '/drive',
                { FS: i, PATH: n, ERRNO_CODES: a } = this._pyodide,
                { baseUrl: o } = t,
                { DriveFS: r } = await Promise.resolve().then(() => (qa(), Ha)),
                s = new r({
                  FS: i,
                  PATH: n,
                  ERRNO_CODES: a,
                  baseUrl: o,
                  driveName: this._driveName,
                  mountpoint: e,
                });
              i.mkdir(e), i.mount(s, {}, e), i.chdir(e), (this._driveFS = s);
            }
          }
          mapToObject(t) {
            let e = t instanceof Array ? [] : {};
            return (
              t.forEach((t, i) => {
                e[i] = t instanceof Map || t instanceof Array ? this.mapToObject(t) : t;
              }),
              e
            );
          }
          formatResult(t) {
            if (!(t instanceof this._pyodide.ffi.PyProxy)) return t;
            let e = t.toJs();
            return this.mapToObject(e);
          }
          async setup(t) {
            await this._initialized,
              (this._kernel._parent_header = this._pyodide.toPy(t));
          }
          async execute(t, e) {
            await this.setup(e);
            let i = (t, e) => {
              let i = { name: this.formatResult(t), text: this.formatResult(e) };
              postMessage({
                parentHeader: this.formatResult(this._kernel._parent_header).header,
                bundle: i,
                type: 'stream',
              });
            };
            (this._stdout_stream.publish_stream_callback = i),
              (this._stderr_stream.publish_stream_callback = i),
              (this._interpreter.display_pub.clear_output_callback = (t) => {
                let e = { wait: this.formatResult(t) };
                postMessage({
                  parentHeader: this.formatResult(this._kernel._parent_header).header,
                  bundle: e,
                  type: 'clear_output',
                });
              }),
              (this._interpreter.display_pub.display_data_callback = (t, e, i) => {
                let n = {
                  data: this.formatResult(t),
                  metadata: this.formatResult(e),
                  transient: this.formatResult(i),
                };
                postMessage({
                  parentHeader: this.formatResult(this._kernel._parent_header).header,
                  bundle: n,
                  type: 'display_data',
                });
              }),
              (this._interpreter.display_pub.update_display_data_callback = (
                t,
                e,
                i
              ) => {
                let n = {
                  data: this.formatResult(t),
                  metadata: this.formatResult(e),
                  transient: this.formatResult(i),
                };
                postMessage({
                  parentHeader: this.formatResult(this._kernel._parent_header).header,
                  bundle: n,
                  type: 'update_display_data',
                });
              }),
              (this._interpreter.displayhook.publish_execution_result = (t, e, i) => {
                let n = {
                  execution_count: t,
                  data: this.formatResult(e),
                  metadata: this.formatResult(i),
                };
                postMessage({
                  parentHeader: this.formatResult(this._kernel._parent_header).header,
                  bundle: n,
                  type: 'execute_result',
                });
              }),
              (this._interpreter.input = this.input.bind(this)),
              (this._interpreter.getpass = this.getpass.bind(this));
            let n = await this._kernel.run(t.code),
              a = this.formatResult(n);
            return (
              'error' === a.status &&
                ((t, e, i) => {
                  let n = { ename: t, evalue: e, traceback: i };
                  postMessage({
                    parentHeader: this.formatResult(this._kernel._parent_header).header,
                    bundle: n,
                    type: 'execute_error',
                  });
                })(a.ename, a.evalue, a.traceback),
              a
            );
          }
          async complete(t, e) {
            await this.setup(e);
            let i = this._kernel.complete(t.code, t.cursor_pos);
            return this.formatResult(i);
          }
          async inspect(t, e) {
            await this.setup(e);
            let i = this._kernel.inspect(t.code, t.cursor_pos, t.detail_level);
            return this.formatResult(i);
          }
          async isComplete(t, e) {
            await this.setup(e);
            let i = this._kernel.is_complete(t.code);
            return this.formatResult(i);
          }
          async commInfo(t, e) {
            await this.setup(e);
            let i = this._kernel.comm_info(t.target_name);
            return { comms: this.formatResult(i), status: 'ok' };
          }
          async commOpen(t, e) {
            await this.setup(e);
            let i = this._kernel.comm_manager.comm_open(this._pyodide.toPy(t));
            return this.formatResult(i);
          }
          async commMsg(t, e) {
            await this.setup(e);
            let i = this._kernel.comm_manager.comm_msg(this._pyodide.toPy(t));
            return this.formatResult(i);
          }
          async commClose(t, e) {
            await this.setup(e);
            let i = this._kernel.comm_manager.comm_close(this._pyodide.toPy(t));
            return this.formatResult(i);
          }
          async inputReply(t, e) {
            await this.setup(e), this._resolveInputReply(t);
          }
          async sendInputRequest(t, e) {
            let i = { prompt: t, password: e };
            postMessage({
              type: 'input_request',
              parentHeader: this.formatResult(this._kernel._parent_header).header,
              content: i,
            });
          }
          async getpass(t) {
            return (
              (t = void 0 === t ? '' : t),
              await this.sendInputRequest(t, !0),
              (
                await new Promise((t) => {
                  this._resolveInputReply = t;
                })
              ).value
            );
          }
          async input(t) {
            return (
              (t = void 0 === t ? '' : t),
              await this.sendInputRequest(t, !1),
              (
                await new Promise((t) => {
                  this._resolveInputReply = t;
                })
              ).value
            );
          }
          async sendComm(t, e, i, n, a) {
            postMessage({
              type: t,
              content: this.formatResult(e),
              metadata: this.formatResult(i),
              ident: this.formatResult(n),
              buffers: this.formatResult(a),
              parentHeader: this.formatResult(this._kernel._parent_header).header,
            });
          }
        };
    },
    693: (t) => {
      function e(t) {
        return Promise.resolve().then(() => {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (e.keys = () => []), (e.resolve = e), (e.id = 693), (t.exports = e);
    },
    954: (t) => {
      function e(t) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (e.keys = () => []), (e.resolve = e), (e.id = 954), (t.exports = e);
    },
  },
]);
//# sourceMappingURL=951.8b2f42a81d35ca63eecb.js.map?v=8b2f42a81d35ca63eecb
