(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [1358, 3236],
  {
    11358: (e, a, t) => {
      !(function (a, r) {
        true ? (e.exports = r(t(77865))) : 0;
      })(t.g, function (e) {
        return (function (e) {
          var a = {};
          function t(r) {
            if (a[r]) return a[r].exports;
            var n = (a[r] = { i: r, l: !1, exports: {} });
            return e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
          }
          return (
            (t.m = e),
            (t.c = a),
            (t.d = function (e, a, r) {
              t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: r });
            }),
            (t.r = function (e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (t.t = function (e, a) {
              if ((1 & a && (e = t(e)), 8 & a)) return e;
              if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (t.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & a && 'string' != typeof e)
              )
                for (var n in e)
                  t.d(
                    r,
                    n,
                    function (a) {
                      return e[a];
                    }.bind(null, n)
                  );
              return r;
            }),
            (t.n = function (e) {
              var a =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return t.d(a, 'a', a), a;
            }),
            (t.o = function (e, a) {
              return Object.prototype.hasOwnProperty.call(e, a);
            }),
            (t.p = ''),
            t((t.s = 4))
          );
        })([
          function (e, a, t) {
            e.exports = t(2)();
          },
          function (a, t) {
            a.exports = e;
          },
          function (e, a, t) {
            'use strict';
            var r = t(3);
            function n() {}
            function i() {}
            (i.resetWarningCache = n),
              (e.exports = function () {
                function e(e, a, t, n, i, o) {
                  if (o !== r) {
                    var s = new Error(
                      'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                    );
                    throw ((s.name = 'Invariant Violation'), s);
                  }
                }
                function a() {
                  return e;
                }
                e.isRequired = e;
                var t = {
                  array: e,
                  bool: e,
                  func: e,
                  number: e,
                  object: e,
                  string: e,
                  symbol: e,
                  any: e,
                  arrayOf: a,
                  element: e,
                  elementType: e,
                  instanceOf: a,
                  node: e,
                  objectOf: a,
                  oneOf: a,
                  oneOfType: a,
                  shape: a,
                  exact: a,
                  checkPropTypes: i,
                  resetWarningCache: n,
                };
                return (t.PropTypes = t), t;
              });
          },
          function (e, a, t) {
            'use strict';
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
          },
          function (e, t, r) {
            'use strict';
            r.r(t);
            var n = r(1),
              i = r.n(n),
              o = r(0),
              s = r.n(o);
            function l() {
              return (l =
                Object.assign ||
                function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            var c = function (e) {
              var a = e.pageClassName,
                t = e.pageLinkClassName,
                r = e.page,
                n = e.selected,
                o = e.activeClassName,
                s = e.activeLinkClassName,
                c = e.getEventListener,
                u = e.pageSelectedHandler,
                p = e.href,
                f = e.extraAriaContext,
                d = e.ariaLabel || 'Page ' + r + (f ? ' ' + f : ''),
                g = null;
              return (
                n &&
                  ((g = 'page'),
                  (d = e.ariaLabel || 'Page ' + r + ' is your current page'),
                  (a = void 0 !== a ? a + ' ' + o : o),
                  void 0 !== t ? void 0 !== s && (t = t + ' ' + s) : (t = s)),
                i.a.createElement(
                  'li',
                  { className: a },
                  i.a.createElement(
                    'a',
                    l(
                      {
                        role: 'button',
                        className: t,
                        href: p,
                        tabIndex: '0',
                        'aria-label': d,
                        'aria-current': g,
                        onKeyPress: u,
                      },
                      c(u)
                    ),
                    r
                  )
                )
              );
            };
            c.propTypes = {
              pageSelectedHandler: s.a.func.isRequired,
              selected: s.a.bool.isRequired,
              pageClassName: s.a.string,
              pageLinkClassName: s.a.string,
              activeClassName: s.a.string,
              activeLinkClassName: s.a.string,
              extraAriaContext: s.a.string,
              href: s.a.string,
              ariaLabel: s.a.string,
              page: s.a.number.isRequired,
              getEventListener: s.a.func.isRequired,
            };
            var u = c;
            function p() {
              return (p =
                Object.assign ||
                function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            !(function () {
              var e =
                'undefined' != typeof reactHotLoaderGlobal
                  ? reactHotLoaderGlobal.default
                  : void 0;
              if (e) {
                var r = void 0 !== t ? t : a;
                if (r)
                  if ('function' != typeof r) {
                    for (var n in r)
                      if (Object.prototype.hasOwnProperty.call(r, n)) {
                        var i = void 0;
                        try {
                          i = r[n];
                        } catch (e) {
                          continue;
                        }
                        e.register(
                          i,
                          n,
                          '/home/adele/workspace/react-paginate/react_components/PageView.js'
                        );
                      }
                  } else
                    e.register(
                      r,
                      'module.exports',
                      '/home/adele/workspace/react-paginate/react_components/PageView.js'
                    );
              }
            })();
            var f = function (e) {
              var a = e.breakLabel,
                t = e.breakClassName,
                r = e.breakLinkClassName,
                n = e.breakHandler,
                o = e.getEventListener,
                s = t || 'break';
              return i.a.createElement(
                'li',
                { className: s },
                i.a.createElement(
                  'a',
                  p(
                    { className: r, role: 'button', tabIndex: '0', onKeyPress: n },
                    o(n)
                  ),
                  a
                )
              );
            };
            f.propTypes = {
              breakLabel: s.a.oneOfType([s.a.string, s.a.node]),
              breakClassName: s.a.string,
              breakLinkClassName: s.a.string,
              breakHandler: s.a.func.isRequired,
              getEventListener: s.a.func.isRequired,
            };
            var d = f;
            function g(e) {
              return (g =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    })(e);
            }
            function b() {
              return (b =
                Object.assign ||
                function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            function v(e, a) {
              for (var t = 0; t < a.length; t++) {
                var r = a[t];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function m(e, a) {
              return (m =
                Object.setPrototypeOf ||
                function (e, a) {
                  return (e.__proto__ = a), e;
                })(e, a);
            }
            function h(e) {
              var a = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })();
              return function () {
                var t,
                  r = k(e);
                if (a) {
                  var n = k(this).constructor;
                  t = Reflect.construct(r, arguments, n);
                } else t = r.apply(this, arguments);
                return y(this, t);
              };
            }
            function y(e, a) {
              return !a || ('object' !== g(a) && 'function' != typeof a) ? C(e) : a;
            }
            function C(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            function k(e) {
              return (k = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            function P(e, a, t) {
              return (
                a in e
                  ? Object.defineProperty(e, a, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[a] = t),
                e
              );
            }
            !(function () {
              var e =
                'undefined' != typeof reactHotLoaderGlobal
                  ? reactHotLoaderGlobal.default
                  : void 0;
              if (e) {
                var r = void 0 !== t ? t : a;
                if (r)
                  if ('function' != typeof r) {
                    for (var n in r)
                      if (Object.prototype.hasOwnProperty.call(r, n)) {
                        var i = void 0;
                        try {
                          i = r[n];
                        } catch (e) {
                          continue;
                        }
                        e.register(
                          i,
                          n,
                          '/home/adele/workspace/react-paginate/react_components/BreakView.js'
                        );
                      }
                  } else
                    e.register(
                      r,
                      'module.exports',
                      '/home/adele/workspace/react-paginate/react_components/BreakView.js'
                    );
              }
            })();
            var L = (function (e) {
              !(function (e, a) {
                if ('function' != typeof a && null !== a)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (e.prototype = Object.create(a && a.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  a && m(e, a);
              })(o, e);
              var a,
                t,
                r,
                n = h(o);
              function o(e) {
                var a, t;
                return (
                  (function (e, a) {
                    if (!(e instanceof a))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, o),
                  P(C((a = n.call(this, e))), 'handlePreviousPage', function (e) {
                    var t = a.state.selected;
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                      t > 0 && a.handlePageSelected(t - 1, e);
                  }),
                  P(C(a), 'handleNextPage', function (e) {
                    var t = a.state.selected,
                      r = a.props.pageCount;
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                      t < r - 1 && a.handlePageSelected(t + 1, e);
                  }),
                  P(C(a), 'handlePageSelected', function (e, t) {
                    t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                      a.state.selected !== e &&
                        (a.setState({ selected: e }), a.callCallback(e));
                  }),
                  P(C(a), 'getEventListener', function (e) {
                    return P({}, a.props.eventListener, e);
                  }),
                  P(C(a), 'handleBreakClick', function (e, t) {
                    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
                    var r = a.state.selected;
                    a.handlePageSelected(
                      r < e ? a.getForwardJump() : a.getBackwardJump(),
                      t
                    );
                  }),
                  P(C(a), 'callCallback', function (e) {
                    void 0 !== a.props.onPageChange &&
                      'function' == typeof a.props.onPageChange &&
                      a.props.onPageChange({ selected: e });
                  }),
                  P(C(a), 'pagination', function () {
                    var e = [],
                      t = a.props,
                      r = t.pageRangeDisplayed,
                      n = t.pageCount,
                      o = t.marginPagesDisplayed,
                      s = t.breakLabel,
                      l = t.breakClassName,
                      c = t.breakLinkClassName,
                      u = a.state.selected;
                    if (n <= r) for (var p = 0; p < n; p++) e.push(a.getPageElement(p));
                    else {
                      var f,
                        g,
                        b,
                        v = r / 2,
                        m = r - v;
                      u > n - r / 2
                        ? (v = r - (m = n - u))
                        : u < r / 2 && (m = r - (v = u));
                      var h = function (e) {
                        return a.getPageElement(e);
                      };
                      for (f = 0; f < n; f++)
                        (g = f + 1) <= o || g > n - o || (f >= u - v && f <= u + m)
                          ? e.push(h(f))
                          : s &&
                            e[e.length - 1] !== b &&
                            ((b = i.a.createElement(d, {
                              key: f,
                              breakLabel: s,
                              breakClassName: l,
                              breakLinkClassName: c,
                              breakHandler: a.handleBreakClick.bind(null, f),
                              getEventListener: a.getEventListener,
                            })),
                            e.push(b));
                    }
                    return e;
                  }),
                  (t = e.initialPage ? e.initialPage : e.forcePage ? e.forcePage : 0),
                  (a.state = { selected: t }),
                  a
                );
              }
              return (
                (a = o),
                (t = [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        a = e.initialPage,
                        t = e.disableInitialCallback,
                        r = e.extraAriaContext;
                      void 0 === a || t || this.callCallback(a),
                        r &&
                          console.warn(
                            'DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.'
                          );
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      void 0 !== this.props.forcePage &&
                        this.props.forcePage !== e.forcePage &&
                        this.setState({ selected: this.props.forcePage });
                    },
                  },
                  {
                    key: 'getForwardJump',
                    value: function () {
                      var e = this.state.selected,
                        a = this.props,
                        t = a.pageCount,
                        r = e + a.pageRangeDisplayed;
                      return r >= t ? t - 1 : r;
                    },
                  },
                  {
                    key: 'getBackwardJump',
                    value: function () {
                      var e = this.state.selected - this.props.pageRangeDisplayed;
                      return e < 0 ? 0 : e;
                    },
                  },
                  {
                    key: 'hrefBuilder',
                    value: function (e) {
                      var a = this.props,
                        t = a.hrefBuilder,
                        r = a.pageCount;
                      if (t && e !== this.state.selected && e >= 0 && e < r)
                        return t(e + 1);
                    },
                  },
                  {
                    key: 'ariaLabelBuilder',
                    value: function (e) {
                      var a = e === this.state.selected;
                      if (
                        this.props.ariaLabelBuilder &&
                        e >= 0 &&
                        e < this.props.pageCount
                      ) {
                        var t = this.props.ariaLabelBuilder(e + 1, a);
                        return (
                          this.props.extraAriaContext &&
                            !a &&
                            (t = t + ' ' + this.props.extraAriaContext),
                          t
                        );
                      }
                    },
                  },
                  {
                    key: 'getPageElement',
                    value: function (e) {
                      var a = this.state.selected,
                        t = this.props,
                        r = t.pageClassName,
                        n = t.pageLinkClassName,
                        o = t.activeClassName,
                        s = t.activeLinkClassName,
                        l = t.extraAriaContext;
                      return i.a.createElement(u, {
                        key: e,
                        pageSelectedHandler: this.handlePageSelected.bind(null, e),
                        selected: a === e,
                        pageClassName: r,
                        pageLinkClassName: n,
                        activeClassName: o,
                        activeLinkClassName: s,
                        extraAriaContext: l,
                        href: this.hrefBuilder(e),
                        ariaLabel: this.ariaLabelBuilder(e),
                        page: e + 1,
                        getEventListener: this.getEventListener,
                      });
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        a = e.disabledClassName,
                        t = e.pageCount,
                        r = e.containerClassName,
                        n = e.previousLabel,
                        o = e.previousClassName,
                        s = e.previousLinkClassName,
                        l = e.previousAriaLabel,
                        c = e.nextLabel,
                        u = e.nextClassName,
                        p = e.nextLinkClassName,
                        f = e.nextAriaLabel,
                        d = this.state.selected,
                        g = o + (0 === d ? ' '.concat(a) : ''),
                        v = u + (d === t - 1 ? ' '.concat(a) : ''),
                        m = 0 === d ? 'true' : 'false',
                        h = d === t - 1 ? 'true' : 'false';
                      return i.a.createElement(
                        'ul',
                        { className: r },
                        i.a.createElement(
                          'li',
                          { className: g },
                          i.a.createElement(
                            'a',
                            b(
                              {
                                className: s,
                                href: this.hrefBuilder(d - 1),
                                tabIndex: '0',
                                role: 'button',
                                onKeyPress: this.handlePreviousPage,
                                'aria-disabled': m,
                                'aria-label': l,
                              },
                              this.getEventListener(this.handlePreviousPage)
                            ),
                            n
                          )
                        ),
                        this.pagination(),
                        i.a.createElement(
                          'li',
                          { className: v },
                          i.a.createElement(
                            'a',
                            b(
                              {
                                className: p,
                                href: this.hrefBuilder(d + 1),
                                tabIndex: '0',
                                role: 'button',
                                onKeyPress: this.handleNextPage,
                                'aria-disabled': h,
                                'aria-label': f,
                              },
                              this.getEventListener(this.handleNextPage)
                            ),
                            c
                          )
                        )
                      );
                    },
                  },
                ]) && v(a.prototype, t),
                r && v(a, r),
                o
              );
            })(n.Component);
            P(L, 'propTypes', {
              pageCount: s.a.number.isRequired,
              pageRangeDisplayed: s.a.number.isRequired,
              marginPagesDisplayed: s.a.number.isRequired,
              previousLabel: s.a.node,
              previousAriaLabel: s.a.string,
              nextLabel: s.a.node,
              nextAriaLabel: s.a.string,
              breakLabel: s.a.oneOfType([s.a.string, s.a.node]),
              hrefBuilder: s.a.func,
              onPageChange: s.a.func,
              initialPage: s.a.number,
              forcePage: s.a.number,
              disableInitialCallback: s.a.bool,
              containerClassName: s.a.string,
              pageClassName: s.a.string,
              pageLinkClassName: s.a.string,
              activeClassName: s.a.string,
              activeLinkClassName: s.a.string,
              previousClassName: s.a.string,
              nextClassName: s.a.string,
              previousLinkClassName: s.a.string,
              nextLinkClassName: s.a.string,
              disabledClassName: s.a.string,
              breakClassName: s.a.string,
              breakLinkClassName: s.a.string,
              extraAriaContext: s.a.string,
              ariaLabelBuilder: s.a.func,
              eventListener: s.a.string,
            }),
              P(L, 'defaultProps', {
                pageCount: 10,
                pageRangeDisplayed: 2,
                marginPagesDisplayed: 3,
                activeClassName: 'selected',
                previousLabel: 'Previous',
                previousClassName: 'previous',
                previousAriaLabel: 'Previous page',
                nextLabel: 'Next',
                nextClassName: 'next',
                nextAriaLabel: 'Next page',
                breakLabel: '...',
                disabledClassName: 'disabled',
                disableInitialCallback: !1,
                eventListener: 'onClick',
              }),
              (function () {
                var e =
                  'undefined' != typeof reactHotLoaderGlobal
                    ? reactHotLoaderGlobal.default
                    : void 0;
                if (e) {
                  var r = void 0 !== t ? t : a;
                  if (r)
                    if ('function' != typeof r) {
                      for (var n in r)
                        if (Object.prototype.hasOwnProperty.call(r, n)) {
                          var i = void 0;
                          try {
                            i = r[n];
                          } catch (e) {
                            continue;
                          }
                          e.register(
                            i,
                            n,
                            '/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js'
                          );
                        }
                    } else
                      e.register(
                        r,
                        'module.exports',
                        '/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js'
                      );
                }
              })();
            t.default = L;
            !(function () {
              var e =
                'undefined' != typeof reactHotLoaderGlobal
                  ? reactHotLoaderGlobal.default
                  : void 0;
              if (e) {
                var r = void 0 !== t ? t : a;
                if (r)
                  if ('function' != typeof r) {
                    for (var n in r)
                      if (Object.prototype.hasOwnProperty.call(r, n)) {
                        var i = void 0;
                        try {
                          i = r[n];
                        } catch (e) {
                          continue;
                        }
                        e.register(
                          i,
                          n,
                          '/home/adele/workspace/react-paginate/react_components/index.js'
                        );
                      }
                  } else
                    e.register(
                      r,
                      'module.exports',
                      '/home/adele/workspace/react-paginate/react_components/index.js'
                    );
              }
            })();
          },
        ]);
      });
    },
  },
]);
//# sourceMappingURL=1358.9ab4f57e8227ce75f427.js.map?v=9ab4f57e8227ce75f427
