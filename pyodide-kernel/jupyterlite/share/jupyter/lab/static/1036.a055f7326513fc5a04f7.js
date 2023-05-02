/*! For license information please see 1036.a055f7326513fc5a04f7.js.LICENSE.txt */
(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [1036, 4155],
  {
    9996: (e) => {
      'use strict';
      var t = function e(t) {
        return r(t) && !i(t);
      };
      function r(e) {
        return !!e && typeof e === 'object';
      }
      function i(e) {
        var t = Object.prototype.toString.call(e);
        return t === '[object RegExp]' || t === '[object Date]' || o(e);
      }
      var n = typeof Symbol === 'function' && Symbol.for;
      var s = n ? Symbol.for('react.element') : 60103;
      function o(e) {
        return e.$$typeof === s;
      }
      function a(e) {
        return Array.isArray(e) ? [] : {};
      }
      function l(e, t) {
        return t.clone !== false && t.isMergeableObject(e) ? g(a(e), e, t) : e;
      }
      function u(e, t, r) {
        return e.concat(t).map(function (e) {
          return l(e, r);
        });
      }
      function c(e, t) {
        if (!t.customMerge) {
          return g;
        }
        var r = t.customMerge(e);
        return typeof r === 'function' ? r : g;
      }
      function f(e) {
        return Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols(e).filter(function (t) {
              return e.propertyIsEnumerable(t);
            })
          : [];
      }
      function h(e) {
        return Object.keys(e).concat(f(e));
      }
      function p(e, t) {
        try {
          return t in e;
        } catch (r) {
          return false;
        }
      }
      function d(e, t) {
        return (
          p(e, t) &&
          !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
        );
      }
      function m(e, t, r) {
        var i = {};
        if (r.isMergeableObject(e)) {
          h(e).forEach(function (t) {
            i[t] = l(e[t], r);
          });
        }
        h(t).forEach(function (n) {
          if (d(e, n)) {
            return;
          }
          if (p(e, n) && r.isMergeableObject(t[n])) {
            i[n] = c(n, r)(e[n], t[n], r);
          } else {
            i[n] = l(t[n], r);
          }
        });
        return i;
      }
      function g(e, r, i) {
        i = i || {};
        i.arrayMerge = i.arrayMerge || u;
        i.isMergeableObject = i.isMergeableObject || t;
        i.cloneUnlessOtherwiseSpecified = l;
        var n = Array.isArray(r);
        var s = Array.isArray(e);
        var o = n === s;
        if (!o) {
          return l(r, i);
        } else if (n) {
          return i.arrayMerge(e, r, i);
        } else {
          return m(e, r, i);
        }
      }
      g.all = function e(t, r) {
        if (!Array.isArray(t)) {
          throw new Error('first argument should be an array');
        }
        return t.reduce(function (e, t) {
          return g(e, t, r);
        }, {});
      };
      var b = g;
      e.exports = b;
    },
    17837: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.attributeNames = t.elementNames = void 0;
      t.elementNames = new Map([
        ['altglyph', 'altGlyph'],
        ['altglyphdef', 'altGlyphDef'],
        ['altglyphitem', 'altGlyphItem'],
        ['animatecolor', 'animateColor'],
        ['animatemotion', 'animateMotion'],
        ['animatetransform', 'animateTransform'],
        ['clippath', 'clipPath'],
        ['feblend', 'feBlend'],
        ['fecolormatrix', 'feColorMatrix'],
        ['fecomponenttransfer', 'feComponentTransfer'],
        ['fecomposite', 'feComposite'],
        ['feconvolvematrix', 'feConvolveMatrix'],
        ['fediffuselighting', 'feDiffuseLighting'],
        ['fedisplacementmap', 'feDisplacementMap'],
        ['fedistantlight', 'feDistantLight'],
        ['fedropshadow', 'feDropShadow'],
        ['feflood', 'feFlood'],
        ['fefunca', 'feFuncA'],
        ['fefuncb', 'feFuncB'],
        ['fefuncg', 'feFuncG'],
        ['fefuncr', 'feFuncR'],
        ['fegaussianblur', 'feGaussianBlur'],
        ['feimage', 'feImage'],
        ['femerge', 'feMerge'],
        ['femergenode', 'feMergeNode'],
        ['femorphology', 'feMorphology'],
        ['feoffset', 'feOffset'],
        ['fepointlight', 'fePointLight'],
        ['fespecularlighting', 'feSpecularLighting'],
        ['fespotlight', 'feSpotLight'],
        ['fetile', 'feTile'],
        ['feturbulence', 'feTurbulence'],
        ['foreignobject', 'foreignObject'],
        ['glyphref', 'glyphRef'],
        ['lineargradient', 'linearGradient'],
        ['radialgradient', 'radialGradient'],
        ['textpath', 'textPath'],
      ]);
      t.attributeNames = new Map([
        ['definitionurl', 'definitionURL'],
        ['attributename', 'attributeName'],
        ['attributetype', 'attributeType'],
        ['basefrequency', 'baseFrequency'],
        ['baseprofile', 'baseProfile'],
        ['calcmode', 'calcMode'],
        ['clippathunits', 'clipPathUnits'],
        ['diffuseconstant', 'diffuseConstant'],
        ['edgemode', 'edgeMode'],
        ['filterunits', 'filterUnits'],
        ['glyphref', 'glyphRef'],
        ['gradienttransform', 'gradientTransform'],
        ['gradientunits', 'gradientUnits'],
        ['kernelmatrix', 'kernelMatrix'],
        ['kernelunitlength', 'kernelUnitLength'],
        ['keypoints', 'keyPoints'],
        ['keysplines', 'keySplines'],
        ['keytimes', 'keyTimes'],
        ['lengthadjust', 'lengthAdjust'],
        ['limitingconeangle', 'limitingConeAngle'],
        ['markerheight', 'markerHeight'],
        ['markerunits', 'markerUnits'],
        ['markerwidth', 'markerWidth'],
        ['maskcontentunits', 'maskContentUnits'],
        ['maskunits', 'maskUnits'],
        ['numoctaves', 'numOctaves'],
        ['pathlength', 'pathLength'],
        ['patterncontentunits', 'patternContentUnits'],
        ['patterntransform', 'patternTransform'],
        ['patternunits', 'patternUnits'],
        ['pointsatx', 'pointsAtX'],
        ['pointsaty', 'pointsAtY'],
        ['pointsatz', 'pointsAtZ'],
        ['preservealpha', 'preserveAlpha'],
        ['preserveaspectratio', 'preserveAspectRatio'],
        ['primitiveunits', 'primitiveUnits'],
        ['refx', 'refX'],
        ['refy', 'refY'],
        ['repeatcount', 'repeatCount'],
        ['repeatdur', 'repeatDur'],
        ['requiredextensions', 'requiredExtensions'],
        ['requiredfeatures', 'requiredFeatures'],
        ['specularconstant', 'specularConstant'],
        ['specularexponent', 'specularExponent'],
        ['spreadmethod', 'spreadMethod'],
        ['startoffset', 'startOffset'],
        ['stddeviation', 'stdDeviation'],
        ['stitchtiles', 'stitchTiles'],
        ['surfacescale', 'surfaceScale'],
        ['systemlanguage', 'systemLanguage'],
        ['tablevalues', 'tableValues'],
        ['targetx', 'targetX'],
        ['targety', 'targetY'],
        ['textlength', 'textLength'],
        ['viewbox', 'viewBox'],
        ['viewtarget', 'viewTarget'],
        ['xchannelselector', 'xChannelSelector'],
        ['ychannelselector', 'yChannelSelector'],
        ['zoomandpan', 'zoomAndPan'],
      ]);
    },
    97220: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__assign) ||
        function () {
          i =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++) {
                t = arguments[r];
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
              }
              return e;
            };
          return i.apply(this, arguments);
        };
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, i) {
              if (i === undefined) i = r;
              Object.defineProperty(e, i, {
                enumerable: true,
                get: function () {
                  return t[r];
                },
              });
            }
          : function (e, t, r, i) {
              if (i === undefined) i = r;
              e[i] = t[r];
            });
      var s =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: true, value: t });
            }
          : function (e, t) {
              e['default'] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null)
            for (var r in e)
              if (r !== 'default' && Object.prototype.hasOwnProperty.call(e, r))
                n(t, e, r);
          s(t, e);
          return t;
        };
      Object.defineProperty(t, '__esModule', { value: true });
      var a = o(r(99960));
      var l = r(45863);
      var u = r(17837);
      var c = new Set([
        'style',
        'script',
        'xmp',
        'iframe',
        'noembed',
        'noframes',
        'plaintext',
        'noscript',
      ]);
      function f(e, t) {
        if (!e) return;
        return Object.keys(e)
          .map(function (r) {
            var i, n;
            var s = (i = e[r]) !== null && i !== void 0 ? i : '';
            if (t.xmlMode === 'foreign') {
              r = (n = u.attributeNames.get(r)) !== null && n !== void 0 ? n : r;
            }
            if (!t.emptyAttrs && !t.xmlMode && s === '') {
              return r;
            }
            return (
              r +
              '="' +
              (t.decodeEntities !== false
                ? l.encodeXML(s)
                : s.replace(/"/g, '&quot;')) +
              '"'
            );
          })
          .join(' ');
      }
      var h = new Set([
        'area',
        'base',
        'basefont',
        'br',
        'col',
        'command',
        'embed',
        'frame',
        'hr',
        'img',
        'input',
        'isindex',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
      ]);
      function p(e, t) {
        if (t === void 0) {
          t = {};
        }
        var r = 'length' in e ? e : [e];
        var i = '';
        for (var n = 0; n < r.length; n++) {
          i += d(r[n], t);
        }
        return i;
      }
      t.default = p;
      function d(e, t) {
        switch (e.type) {
          case a.Root:
            return p(e.children, t);
          case a.Directive:
          case a.Doctype:
            return y(e);
          case a.Comment:
            return x(e);
          case a.CDATA:
            return w(e);
          case a.Script:
          case a.Style:
          case a.Tag:
            return b(e, t);
          case a.Text:
            return v(e, t);
        }
      }
      var m = new Set([
        'mi',
        'mo',
        'mn',
        'ms',
        'mtext',
        'annotation-xml',
        'foreignObject',
        'desc',
        'title',
      ]);
      var g = new Set(['svg', 'math']);
      function b(e, t) {
        var r;
        if (t.xmlMode === 'foreign') {
          e.name =
            (r = u.elementNames.get(e.name)) !== null && r !== void 0 ? r : e.name;
          if (e.parent && m.has(e.parent.name)) {
            t = i(i({}, t), { xmlMode: false });
          }
        }
        if (!t.xmlMode && g.has(e.name)) {
          t = i(i({}, t), { xmlMode: 'foreign' });
        }
        var n = '<' + e.name;
        var s = f(e.attribs, t);
        if (s) {
          n += ' ' + s;
        }
        if (
          e.children.length === 0 &&
          (t.xmlMode ? t.selfClosingTags !== false : t.selfClosingTags && h.has(e.name))
        ) {
          if (!t.xmlMode) n += ' ';
          n += '/>';
        } else {
          n += '>';
          if (e.children.length > 0) {
            n += p(e.children, t);
          }
          if (t.xmlMode || !h.has(e.name)) {
            n += '</' + e.name + '>';
          }
        }
        return n;
      }
      function y(e) {
        return '<' + e.data + '>';
      }
      function v(e, t) {
        var r = e.data || '';
        if (
          t.decodeEntities !== false &&
          !(!t.xmlMode && e.parent && c.has(e.parent.name))
        ) {
          r = l.encodeXML(r);
        }
        return r;
      }
      function w(e) {
        return '<![CDATA[' + e.children[0].data + ']]>';
      }
      function x(e) {
        return '\x3c!--' + e.data + '--\x3e';
      }
    },
    99960: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.Doctype =
        t.CDATA =
        t.Tag =
        t.Style =
        t.Script =
        t.Comment =
        t.Directive =
        t.Text =
        t.Root =
        t.isTag =
        t.ElementType =
          void 0;
      var r;
      (function (e) {
        e['Root'] = 'root';
        e['Text'] = 'text';
        e['Directive'] = 'directive';
        e['Comment'] = 'comment';
        e['Script'] = 'script';
        e['Style'] = 'style';
        e['Tag'] = 'tag';
        e['CDATA'] = 'cdata';
        e['Doctype'] = 'doctype';
      })((r = t.ElementType || (t.ElementType = {})));
      function i(e) {
        return e.type === r.Tag || e.type === r.Script || e.type === r.Style;
      }
      t.isTag = i;
      t.Root = r.Root;
      t.Text = r.Text;
      t.Directive = r.Directive;
      t.Comment = r.Comment;
      t.Script = r.Script;
      t.Style = r.Style;
      t.Tag = r.Tag;
      t.CDATA = r.CDATA;
      t.Doctype = r.Doctype;
    },
    47915: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, i) {
              if (i === undefined) i = r;
              Object.defineProperty(e, i, {
                enumerable: true,
                get: function () {
                  return t[r];
                },
              });
            }
          : function (e, t, r, i) {
              if (i === undefined) i = r;
              e[i] = t[r];
            });
      var n =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var r in e)
            if (r !== 'default' && !Object.prototype.hasOwnProperty.call(t, r))
              i(t, e, r);
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.DomHandler = void 0;
      var s = r(99960);
      var o = r(97790);
      n(r(97790), t);
      var a = /\s+/g;
      var l = {
        normalizeWhitespace: false,
        withStartIndices: false,
        withEndIndices: false,
      };
      var u = (function () {
        function e(e, t, r) {
          this.dom = [];
          this.root = new o.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof t === 'function') {
            r = t;
            t = l;
          }
          if (typeof e === 'object') {
            t = e;
            e = undefined;
          }
          this.callback = e !== null && e !== void 0 ? e : null;
          this.options = t !== null && t !== void 0 ? t : l;
          this.elementCB = r !== null && r !== void 0 ? r : null;
        }
        e.prototype.onparserinit = function (e) {
          this.parser = e;
        };
        e.prototype.onreset = function () {
          var e;
          this.dom = [];
          this.root = new o.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = (e = this.parser) !== null && e !== void 0 ? e : null;
        };
        e.prototype.onend = function () {
          if (this.done) return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        e.prototype.onerror = function (e) {
          this.handleCallback(e);
        };
        e.prototype.onclosetag = function () {
          this.lastNode = null;
          var e = this.tagStack.pop();
          if (this.options.withEndIndices) {
            e.endIndex = this.parser.endIndex;
          }
          if (this.elementCB) this.elementCB(e);
        };
        e.prototype.onopentag = function (e, t) {
          var r = this.options.xmlMode ? s.ElementType.Tag : undefined;
          var i = new o.Element(e, t, undefined, r);
          this.addNode(i);
          this.tagStack.push(i);
        };
        e.prototype.ontext = function (e) {
          var t = this.options.normalizeWhitespace;
          var r = this.lastNode;
          if (r && r.type === s.ElementType.Text) {
            if (t) {
              r.data = (r.data + e).replace(a, ' ');
            } else {
              r.data += e;
            }
          } else {
            if (t) {
              e = e.replace(a, ' ');
            }
            var i = new o.Text(e);
            this.addNode(i);
            this.lastNode = i;
          }
        };
        e.prototype.oncomment = function (e) {
          if (this.lastNode && this.lastNode.type === s.ElementType.Comment) {
            this.lastNode.data += e;
            return;
          }
          var t = new o.Comment(e);
          this.addNode(t);
          this.lastNode = t;
        };
        e.prototype.oncommentend = function () {
          this.lastNode = null;
        };
        e.prototype.oncdatastart = function () {
          var e = new o.Text('');
          var t = new o.NodeWithChildren(s.ElementType.CDATA, [e]);
          this.addNode(t);
          e.parent = t;
          this.lastNode = e;
        };
        e.prototype.oncdataend = function () {
          this.lastNode = null;
        };
        e.prototype.onprocessinginstruction = function (e, t) {
          var r = new o.ProcessingInstruction(e, t);
          this.addNode(r);
        };
        e.prototype.handleCallback = function (e) {
          if (typeof this.callback === 'function') {
            this.callback(e, this.dom);
          } else if (e) {
            throw e;
          }
        };
        e.prototype.addNode = function (e) {
          var t = this.tagStack[this.tagStack.length - 1];
          var r = t.children[t.children.length - 1];
          if (this.options.withStartIndices) {
            e.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            e.endIndex = this.parser.endIndex;
          }
          t.children.push(e);
          if (r) {
            e.prev = r;
            r.next = e;
          }
          e.parent = t;
          this.lastNode = null;
        };
        return e;
      })();
      t.DomHandler = u;
      t.default = u;
    },
    97790: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Class extends value ' + String(r) + ' is not a constructor or null'
              );
            e(t, r);
            function i() {
              this.constructor = t;
            }
            t.prototype =
              r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++) {
                t = arguments[r];
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
              }
              return e;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.cloneNode =
        t.hasChildren =
        t.isDocument =
        t.isDirective =
        t.isComment =
        t.isText =
        t.isCDATA =
        t.isTag =
        t.Element =
        t.Document =
        t.NodeWithChildren =
        t.ProcessingInstruction =
        t.Comment =
        t.Text =
        t.DataNode =
        t.Node =
          void 0;
      var s = r(99960);
      var o = new Map([
        [s.ElementType.Tag, 1],
        [s.ElementType.Script, 1],
        [s.ElementType.Style, 1],
        [s.ElementType.Directive, 1],
        [s.ElementType.Text, 3],
        [s.ElementType.CDATA, 4],
        [s.ElementType.Comment, 8],
        [s.ElementType.Root, 9],
      ]);
      var a = (function () {
        function e(e) {
          this.type = e;
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(e.prototype, 'nodeType', {
          get: function () {
            var e;
            return (e = o.get(this.type)) !== null && e !== void 0 ? e : 1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'parentNode', {
          get: function () {
            return this.parent;
          },
          set: function (e) {
            this.parent = e;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'previousSibling', {
          get: function () {
            return this.prev;
          },
          set: function (e) {
            this.prev = e;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, 'nextSibling', {
          get: function () {
            return this.next;
          },
          set: function (e) {
            this.next = e;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.cloneNode = function (e) {
          if (e === void 0) {
            e = false;
          }
          return S(this, e);
        };
        return e;
      })();
      t.Node = a;
      var l = (function (e) {
        i(t, e);
        function t(t, r) {
          var i = e.call(this, t) || this;
          i.data = r;
          return i;
        }
        Object.defineProperty(t.prototype, 'nodeValue', {
          get: function () {
            return this.data;
          },
          set: function (e) {
            this.data = e;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(a);
      t.DataNode = l;
      var u = (function (e) {
        i(t, e);
        function t(t) {
          return e.call(this, s.ElementType.Text, t) || this;
        }
        return t;
      })(l);
      t.Text = u;
      var c = (function (e) {
        i(t, e);
        function t(t) {
          return e.call(this, s.ElementType.Comment, t) || this;
        }
        return t;
      })(l);
      t.Comment = c;
      var f = (function (e) {
        i(t, e);
        function t(t, r) {
          var i = e.call(this, s.ElementType.Directive, r) || this;
          i.name = t;
          return i;
        }
        return t;
      })(l);
      t.ProcessingInstruction = f;
      var h = (function (e) {
        i(t, e);
        function t(t, r) {
          var i = e.call(this, t) || this;
          i.children = r;
          return i;
        }
        Object.defineProperty(t.prototype, 'firstChild', {
          get: function () {
            var e;
            return (e = this.children[0]) !== null && e !== void 0 ? e : null;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'lastChild', {
          get: function () {
            return this.children.length > 0
              ? this.children[this.children.length - 1]
              : null;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'childNodes', {
          get: function () {
            return this.children;
          },
          set: function (e) {
            this.children = e;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(a);
      t.NodeWithChildren = h;
      var p = (function (e) {
        i(t, e);
        function t(t) {
          return e.call(this, s.ElementType.Root, t) || this;
        }
        return t;
      })(h);
      t.Document = p;
      var d = (function (e) {
        i(t, e);
        function t(t, r, i, n) {
          if (i === void 0) {
            i = [];
          }
          if (n === void 0) {
            n =
              t === 'script'
                ? s.ElementType.Script
                : t === 'style'
                ? s.ElementType.Style
                : s.ElementType.Tag;
          }
          var o = e.call(this, n, i) || this;
          o.name = t;
          o.attribs = r;
          return o;
        }
        Object.defineProperty(t.prototype, 'tagName', {
          get: function () {
            return this.name;
          },
          set: function (e) {
            this.name = e;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, 'attributes', {
          get: function () {
            var e = this;
            return Object.keys(this.attribs).map(function (t) {
              var r, i;
              return {
                name: t,
                value: e.attribs[t],
                namespace:
                  (r = e['x-attribsNamespace']) === null || r === void 0
                    ? void 0
                    : r[t],
                prefix:
                  (i = e['x-attribsPrefix']) === null || i === void 0 ? void 0 : i[t],
              };
            });
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h);
      t.Element = d;
      function m(e) {
        return s.isTag(e);
      }
      t.isTag = m;
      function g(e) {
        return e.type === s.ElementType.CDATA;
      }
      t.isCDATA = g;
      function b(e) {
        return e.type === s.ElementType.Text;
      }
      t.isText = b;
      function y(e) {
        return e.type === s.ElementType.Comment;
      }
      t.isComment = y;
      function v(e) {
        return e.type === s.ElementType.Directive;
      }
      t.isDirective = v;
      function w(e) {
        return e.type === s.ElementType.Root;
      }
      t.isDocument = w;
      function x(e) {
        return Object.prototype.hasOwnProperty.call(e, 'children');
      }
      t.hasChildren = x;
      function S(e, t) {
        if (t === void 0) {
          t = false;
        }
        var r;
        if (b(e)) {
          r = new u(e.data);
        } else if (y(e)) {
          r = new c(e.data);
        } else if (m(e)) {
          var i = t ? _(e.children) : [];
          var o = new d(e.name, n({}, e.attribs), i);
          i.forEach(function (e) {
            return (e.parent = o);
          });
          if (e['x-attribsNamespace']) {
            o['x-attribsNamespace'] = n({}, e['x-attribsNamespace']);
          }
          if (e['x-attribsPrefix']) {
            o['x-attribsPrefix'] = n({}, e['x-attribsPrefix']);
          }
          r = o;
        } else if (g(e)) {
          var i = t ? _(e.children) : [];
          var a = new h(s.ElementType.CDATA, i);
          i.forEach(function (e) {
            return (e.parent = a);
          });
          r = a;
        } else if (w(e)) {
          var i = t ? _(e.children) : [];
          var l = new p(i);
          i.forEach(function (e) {
            return (e.parent = l);
          });
          if (e['x-mode']) {
            l['x-mode'] = e['x-mode'];
          }
          r = l;
        } else if (v(e)) {
          var x = new f(e.name, e.data);
          if (e['x-name'] != null) {
            x['x-name'] = e['x-name'];
            x['x-publicId'] = e['x-publicId'];
            x['x-systemId'] = e['x-systemId'];
          }
          r = x;
        } else {
          throw new Error('Not implemented yet: ' + e.type);
        }
        r.startIndex = e.startIndex;
        r.endIndex = e.endIndex;
        return r;
      }
      t.cloneNode = S;
      function _(e) {
        var t = e.map(function (e) {
          return S(e, true);
        });
        for (var r = 1; r < t.length; r++) {
          t[r].prev = t[r - 1];
          t[r - 1].next = t[r];
        }
        return t;
      }
    },
    74975: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.uniqueSort = t.compareDocumentPosition = t.removeSubsets = void 0;
      var i = r(47915);
      function n(e) {
        var t = e.length;
        while (--t >= 0) {
          var r = e[t];
          if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
            e.splice(t, 1);
            continue;
          }
          for (var i = r.parent; i; i = i.parent) {
            if (e.includes(i)) {
              e.splice(t, 1);
              break;
            }
          }
        }
        return e;
      }
      t.removeSubsets = n;
      function s(e, t) {
        var r = [];
        var n = [];
        if (e === t) {
          return 0;
        }
        var s = i.hasChildren(e) ? e : e.parent;
        while (s) {
          r.unshift(s);
          s = s.parent;
        }
        s = i.hasChildren(t) ? t : t.parent;
        while (s) {
          n.unshift(s);
          s = s.parent;
        }
        var o = Math.min(r.length, n.length);
        var a = 0;
        while (a < o && r[a] === n[a]) {
          a++;
        }
        if (a === 0) {
          return 1;
        }
        var l = r[a - 1];
        var u = l.children;
        var c = r[a];
        var f = n[a];
        if (u.indexOf(c) > u.indexOf(f)) {
          if (l === t) {
            return 4 | 16;
          }
          return 4;
        }
        if (l === e) {
          return 2 | 8;
        }
        return 2;
      }
      t.compareDocumentPosition = s;
      function o(e) {
        e = e.filter(function (e, t, r) {
          return !r.includes(e, t + 1);
        });
        e.sort(function (e, t) {
          var r = s(e, t);
          if (r & 2) {
            return -1;
          } else if (r & 4) {
            return 1;
          }
          return 0;
        });
        return e;
      }
      t.uniqueSort = o;
    },
    89432: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, i) {
              if (i === undefined) i = r;
              Object.defineProperty(e, i, {
                enumerable: true,
                get: function () {
                  return t[r];
                },
              });
            }
          : function (e, t, r, i) {
              if (i === undefined) i = r;
              e[i] = t[r];
            });
      var n =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var r in e)
            if (r !== 'default' && !Object.prototype.hasOwnProperty.call(t, r))
              i(t, e, r);
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.hasChildren =
        t.isDocument =
        t.isComment =
        t.isText =
        t.isCDATA =
        t.isTag =
          void 0;
      n(r(43346), t);
      n(r(85010), t);
      n(r(26765), t);
      n(r(98043), t);
      n(r(23905), t);
      n(r(74975), t);
      var s = r(47915);
      Object.defineProperty(t, 'isTag', {
        enumerable: true,
        get: function () {
          return s.isTag;
        },
      });
      Object.defineProperty(t, 'isCDATA', {
        enumerable: true,
        get: function () {
          return s.isCDATA;
        },
      });
      Object.defineProperty(t, 'isText', {
        enumerable: true,
        get: function () {
          return s.isText;
        },
      });
      Object.defineProperty(t, 'isComment', {
        enumerable: true,
        get: function () {
          return s.isComment;
        },
      });
      Object.defineProperty(t, 'isDocument', {
        enumerable: true,
        get: function () {
          return s.isDocument;
        },
      });
      Object.defineProperty(t, 'hasChildren', {
        enumerable: true,
        get: function () {
          return s.hasChildren;
        },
      });
    },
    23905: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.getElementsByTagType =
        t.getElementsByTagName =
        t.getElementById =
        t.getElements =
        t.testElement =
          void 0;
      var i = r(47915);
      var n = r(98043);
      var s = {
        tag_name: function (e) {
          if (typeof e === 'function') {
            return function (t) {
              return i.isTag(t) && e(t.name);
            };
          } else if (e === '*') {
            return i.isTag;
          }
          return function (t) {
            return i.isTag(t) && t.name === e;
          };
        },
        tag_type: function (e) {
          if (typeof e === 'function') {
            return function (t) {
              return e(t.type);
            };
          }
          return function (t) {
            return t.type === e;
          };
        },
        tag_contains: function (e) {
          if (typeof e === 'function') {
            return function (t) {
              return i.isText(t) && e(t.data);
            };
          }
          return function (t) {
            return i.isText(t) && t.data === e;
          };
        },
      };
      function o(e, t) {
        if (typeof t === 'function') {
          return function (r) {
            return i.isTag(r) && t(r.attribs[e]);
          };
        }
        return function (r) {
          return i.isTag(r) && r.attribs[e] === t;
        };
      }
      function a(e, t) {
        return function (r) {
          return e(r) || t(r);
        };
      }
      function l(e) {
        var t = Object.keys(e).map(function (t) {
          var r = e[t];
          return t in s ? s[t](r) : o(t, r);
        });
        return t.length === 0 ? null : t.reduce(a);
      }
      function u(e, t) {
        var r = l(e);
        return r ? r(t) : true;
      }
      t.testElement = u;
      function c(e, t, r, i) {
        if (i === void 0) {
          i = Infinity;
        }
        var s = l(e);
        return s ? n.filter(s, t, r, i) : [];
      }
      t.getElements = c;
      function f(e, t, r) {
        if (r === void 0) {
          r = true;
        }
        if (!Array.isArray(t)) t = [t];
        return n.findOne(o('id', e), t, r);
      }
      t.getElementById = f;
      function h(e, t, r, i) {
        if (r === void 0) {
          r = true;
        }
        if (i === void 0) {
          i = Infinity;
        }
        return n.filter(s.tag_name(e), t, r, i);
      }
      t.getElementsByTagName = h;
      function p(e, t, r, i) {
        if (r === void 0) {
          r = true;
        }
        if (i === void 0) {
          i = Infinity;
        }
        return n.filter(s.tag_type(e), t, r, i);
      }
      t.getElementsByTagType = p;
    },
    26765: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.prepend =
        t.prependChild =
        t.append =
        t.appendChild =
        t.replaceElement =
        t.removeElement =
          void 0;
      function r(e) {
        if (e.prev) e.prev.next = e.next;
        if (e.next) e.next.prev = e.prev;
        if (e.parent) {
          var t = e.parent.children;
          t.splice(t.lastIndexOf(e), 1);
        }
      }
      t.removeElement = r;
      function i(e, t) {
        var r = (t.prev = e.prev);
        if (r) {
          r.next = t;
        }
        var i = (t.next = e.next);
        if (i) {
          i.prev = t;
        }
        var n = (t.parent = e.parent);
        if (n) {
          var s = n.children;
          s[s.lastIndexOf(e)] = t;
        }
      }
      t.replaceElement = i;
      function n(e, t) {
        r(t);
        t.next = null;
        t.parent = e;
        if (e.children.push(t) > 1) {
          var i = e.children[e.children.length - 2];
          i.next = t;
          t.prev = i;
        } else {
          t.prev = null;
        }
      }
      t.appendChild = n;
      function s(e, t) {
        r(t);
        var i = e.parent;
        var n = e.next;
        t.next = n;
        t.prev = e;
        e.next = t;
        t.parent = i;
        if (n) {
          n.prev = t;
          if (i) {
            var s = i.children;
            s.splice(s.lastIndexOf(n), 0, t);
          }
        } else if (i) {
          i.children.push(t);
        }
      }
      t.append = s;
      function o(e, t) {
        r(t);
        t.parent = e;
        t.prev = null;
        if (e.children.unshift(t) !== 1) {
          var i = e.children[1];
          i.prev = t;
          t.next = i;
        } else {
          t.next = null;
        }
      }
      t.prependChild = o;
      function a(e, t) {
        r(t);
        var i = e.parent;
        if (i) {
          var n = i.children;
          n.splice(n.indexOf(e), 0, t);
        }
        if (e.prev) {
          e.prev.next = t;
        }
        t.parent = i;
        t.prev = e.prev;
        t.next = e;
        e.prev = t;
      }
      t.prepend = a;
    },
    98043: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.findAll = t.existsOne = t.findOne = t.findOneChild = t.find = t.filter = void 0;
      var i = r(47915);
      function n(e, t, r, i) {
        if (r === void 0) {
          r = true;
        }
        if (i === void 0) {
          i = Infinity;
        }
        if (!Array.isArray(t)) t = [t];
        return s(e, t, r, i);
      }
      t.filter = n;
      function s(e, t, r, n) {
        var o = [];
        for (var a = 0, l = t; a < l.length; a++) {
          var u = l[a];
          if (e(u)) {
            o.push(u);
            if (--n <= 0) break;
          }
          if (r && i.hasChildren(u) && u.children.length > 0) {
            var c = s(e, u.children, r, n);
            o.push.apply(o, c);
            n -= c.length;
            if (n <= 0) break;
          }
        }
        return o;
      }
      t.find = s;
      function o(e, t) {
        return t.find(e);
      }
      t.findOneChild = o;
      function a(e, t, r) {
        if (r === void 0) {
          r = true;
        }
        var n = null;
        for (var s = 0; s < t.length && !n; s++) {
          var o = t[s];
          if (!i.isTag(o)) {
            continue;
          } else if (e(o)) {
            n = o;
          } else if (r && o.children.length > 0) {
            n = a(e, o.children);
          }
        }
        return n;
      }
      t.findOne = a;
      function l(e, t) {
        return t.some(function (t) {
          return i.isTag(t) && (e(t) || (t.children.length > 0 && l(e, t.children)));
        });
      }
      t.existsOne = l;
      function u(e, t) {
        var r;
        var n = [];
        var s = t.filter(i.isTag);
        var o;
        while ((o = s.shift())) {
          var a =
            (r = o.children) === null || r === void 0 ? void 0 : r.filter(i.isTag);
          if (a && a.length > 0) {
            s.unshift.apply(s, a);
          }
          if (e(o)) n.push(o);
        }
        return n;
      }
      t.findAll = u;
    },
    43346: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.innerText =
        t.textContent =
        t.getText =
        t.getInnerHTML =
        t.getOuterHTML =
          void 0;
      var n = r(47915);
      var s = i(r(97220));
      var o = r(99960);
      function a(e, t) {
        return s.default(e, t);
      }
      t.getOuterHTML = a;
      function l(e, t) {
        return n.hasChildren(e)
          ? e.children
              .map(function (e) {
                return a(e, t);
              })
              .join('')
          : '';
      }
      t.getInnerHTML = l;
      function u(e) {
        if (Array.isArray(e)) return e.map(u).join('');
        if (n.isTag(e)) return e.name === 'br' ? '\n' : u(e.children);
        if (n.isCDATA(e)) return u(e.children);
        if (n.isText(e)) return e.data;
        return '';
      }
      t.getText = u;
      function c(e) {
        if (Array.isArray(e)) return e.map(c).join('');
        if (n.isTag(e)) return c(e.children);
        if (n.isCDATA(e)) return c(e.children);
        if (n.isText(e)) return e.data;
        return '';
      }
      t.textContent = c;
      function f(e) {
        if (Array.isArray(e)) return e.map(f).join('');
        if (n.hasChildren(e) && e.type === o.ElementType.Tag) {
          return f(e.children);
        }
        if (n.isCDATA(e)) return f(e.children);
        if (n.isText(e)) return e.data;
        return '';
      }
      t.innerText = f;
    },
    85010: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.prevElementSibling =
        t.nextElementSibling =
        t.getName =
        t.hasAttrib =
        t.getAttributeValue =
        t.getSiblings =
        t.getParent =
        t.getChildren =
          void 0;
      var i = r(47915);
      var n = [];
      function s(e) {
        var t;
        return (t = e.children) !== null && t !== void 0 ? t : n;
      }
      t.getChildren = s;
      function o(e) {
        return e.parent || null;
      }
      t.getParent = o;
      function a(e) {
        var t, r;
        var i = o(e);
        if (i != null) return s(i);
        var n = [e];
        var a = e.prev,
          l = e.next;
        while (a != null) {
          n.unshift(a);
          (t = a), (a = t.prev);
        }
        while (l != null) {
          n.push(l);
          (r = l), (l = r.next);
        }
        return n;
      }
      t.getSiblings = a;
      function l(e, t) {
        var r;
        return (r = e.attribs) === null || r === void 0 ? void 0 : r[t];
      }
      t.getAttributeValue = l;
      function u(e, t) {
        return (
          e.attribs != null &&
          Object.prototype.hasOwnProperty.call(e.attribs, t) &&
          e.attribs[t] != null
        );
      }
      t.hasAttrib = u;
      function c(e) {
        return e.name;
      }
      t.getName = c;
      function f(e) {
        var t;
        var r = e.next;
        while (r !== null && !i.isTag(r)) (t = r), (r = t.next);
        return r;
      }
      t.nextElementSibling = f;
      function h(e) {
        var t;
        var r = e.prev;
        while (r !== null && !i.isTag(r)) (t = r), (r = t.prev);
        return r;
      }
      t.prevElementSibling = h;
    },
    44076: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.decodeHTML = t.decodeHTMLStrict = t.decodeXML = void 0;
      var n = i(r(84007));
      var s = i(r(17802));
      var o = i(r(2228));
      var a = i(r(26));
      var l = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
      t.decodeXML = u(o.default);
      t.decodeHTMLStrict = u(n.default);
      function u(e) {
        var t = f(e);
        return function (e) {
          return String(e).replace(l, t);
        };
      }
      var c = function (e, t) {
        return e < t ? 1 : -1;
      };
      t.decodeHTML = (function () {
        var e = Object.keys(s.default).sort(c);
        var t = Object.keys(n.default).sort(c);
        for (var r = 0, i = 0; r < t.length; r++) {
          if (e[i] === t[r]) {
            t[r] += ';?';
            i++;
          } else {
            t[r] += ';';
          }
        }
        var o = new RegExp('&(?:' + t.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)', 'g');
        var a = f(n.default);
        function l(e) {
          if (e.substr(-1) !== ';') e += ';';
          return a(e);
        }
        return function (e) {
          return String(e).replace(o, l);
        };
      })();
      function f(e) {
        return function t(r) {
          if (r.charAt(1) === '#') {
            var i = r.charAt(2);
            if (i === 'X' || i === 'x') {
              return a.default(parseInt(r.substr(3), 16));
            }
            return a.default(parseInt(r.substr(2), 10));
          }
          return e[r.slice(1, -1)] || r;
        };
      }
    },
    26: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      var n = i(r(14589));
      var s =
        String.fromCodePoint ||
        function (e) {
          var t = '';
          if (e > 65535) {
            e -= 65536;
            t += String.fromCharCode(((e >>> 10) & 1023) | 55296);
            e = 56320 | (e & 1023);
          }
          t += String.fromCharCode(e);
          return t;
        };
      function o(e) {
        if ((e >= 55296 && e <= 57343) || e > 1114111) {
          return '�';
        }
        if (e in n.default) {
          e = n.default[e];
        }
        return s(e);
      }
      t.default = o;
    },
    87322: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.escapeUTF8 =
        t.escape =
        t.encodeNonAsciiHTML =
        t.encodeHTML =
        t.encodeXML =
          void 0;
      var n = i(r(2228));
      var s = c(n.default);
      var o = f(s);
      t.encodeXML = v(s);
      var a = i(r(84007));
      var l = c(a.default);
      var u = f(l);
      t.encodeHTML = m(l, u);
      t.encodeNonAsciiHTML = v(l);
      function c(e) {
        return Object.keys(e)
          .sort()
          .reduce(function (t, r) {
            t[e[r]] = '&' + r + ';';
            return t;
          }, {});
      }
      function f(e) {
        var t = [];
        var r = [];
        for (var i = 0, n = Object.keys(e); i < n.length; i++) {
          var s = n[i];
          if (s.length === 1) {
            t.push('\\' + s);
          } else {
            r.push(s);
          }
        }
        t.sort();
        for (var o = 0; o < t.length - 1; o++) {
          var a = o;
          while (
            a < t.length - 1 &&
            t[a].charCodeAt(1) + 1 === t[a + 1].charCodeAt(1)
          ) {
            a += 1;
          }
          var l = 1 + a - o;
          if (l < 3) continue;
          t.splice(o, l, t[o] + '-' + t[a]);
        }
        r.unshift('[' + t.join('') + ']');
        return new RegExp(r.join('|'), 'g');
      }
      var h =
        /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
      var p =
        String.prototype.codePointAt != null
          ? function (e) {
              return e.codePointAt(0);
            }
          : function (e) {
              return (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536;
            };
      function d(e) {
        return (
          '&#x' +
          (e.length > 1 ? p(e) : e.charCodeAt(0)).toString(16).toUpperCase() +
          ';'
        );
      }
      function m(e, t) {
        return function (r) {
          return r
            .replace(t, function (t) {
              return e[t];
            })
            .replace(h, d);
        };
      }
      var g = new RegExp(o.source + '|' + h.source, 'g');
      function b(e) {
        return e.replace(g, d);
      }
      t.escape = b;
      function y(e) {
        return e.replace(o, d);
      }
      t.escapeUTF8 = y;
      function v(e) {
        return function (t) {
          return t.replace(g, function (t) {
            return e[t] || d(t);
          });
        };
      }
    },
    45863: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      t.decodeXMLStrict =
        t.decodeHTML5Strict =
        t.decodeHTML4Strict =
        t.decodeHTML5 =
        t.decodeHTML4 =
        t.decodeHTMLStrict =
        t.decodeHTML =
        t.decodeXML =
        t.encodeHTML5 =
        t.encodeHTML4 =
        t.escapeUTF8 =
        t.escape =
        t.encodeNonAsciiHTML =
        t.encodeHTML =
        t.encodeXML =
        t.encode =
        t.decodeStrict =
        t.decode =
          void 0;
      var i = r(44076);
      var n = r(87322);
      function s(e, t) {
        return (!t || t <= 0 ? i.decodeXML : i.decodeHTML)(e);
      }
      t.decode = s;
      function o(e, t) {
        return (!t || t <= 0 ? i.decodeXML : i.decodeHTMLStrict)(e);
      }
      t.decodeStrict = o;
      function a(e, t) {
        return (!t || t <= 0 ? n.encodeXML : n.encodeHTML)(e);
      }
      t.encode = a;
      var l = r(87322);
      Object.defineProperty(t, 'encodeXML', {
        enumerable: true,
        get: function () {
          return l.encodeXML;
        },
      });
      Object.defineProperty(t, 'encodeHTML', {
        enumerable: true,
        get: function () {
          return l.encodeHTML;
        },
      });
      Object.defineProperty(t, 'encodeNonAsciiHTML', {
        enumerable: true,
        get: function () {
          return l.encodeNonAsciiHTML;
        },
      });
      Object.defineProperty(t, 'escape', {
        enumerable: true,
        get: function () {
          return l.escape;
        },
      });
      Object.defineProperty(t, 'escapeUTF8', {
        enumerable: true,
        get: function () {
          return l.escapeUTF8;
        },
      });
      Object.defineProperty(t, 'encodeHTML4', {
        enumerable: true,
        get: function () {
          return l.encodeHTML;
        },
      });
      Object.defineProperty(t, 'encodeHTML5', {
        enumerable: true,
        get: function () {
          return l.encodeHTML;
        },
      });
      var u = r(44076);
      Object.defineProperty(t, 'decodeXML', {
        enumerable: true,
        get: function () {
          return u.decodeXML;
        },
      });
      Object.defineProperty(t, 'decodeHTML', {
        enumerable: true,
        get: function () {
          return u.decodeHTML;
        },
      });
      Object.defineProperty(t, 'decodeHTMLStrict', {
        enumerable: true,
        get: function () {
          return u.decodeHTMLStrict;
        },
      });
      Object.defineProperty(t, 'decodeHTML4', {
        enumerable: true,
        get: function () {
          return u.decodeHTML;
        },
      });
      Object.defineProperty(t, 'decodeHTML5', {
        enumerable: true,
        get: function () {
          return u.decodeHTML;
        },
      });
      Object.defineProperty(t, 'decodeHTML4Strict', {
        enumerable: true,
        get: function () {
          return u.decodeHTMLStrict;
        },
      });
      Object.defineProperty(t, 'decodeHTML5Strict', {
        enumerable: true,
        get: function () {
          return u.decodeHTMLStrict;
        },
      });
      Object.defineProperty(t, 'decodeXMLStrict', {
        enumerable: true,
        get: function () {
          return u.decodeXML;
        },
      });
    },
    14589: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}'
      );
    },
    84007: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}'
      );
    },
    17802: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}'
      );
    },
    2228: (e) => {
      'use strict';
      e.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');
    },
    63870: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Class extends value ' + String(r) + ' is not a constructor or null'
              );
            e(t, r);
            function i() {
              this.constructor = t;
            }
            t.prototype =
              r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, i) {
              if (i === undefined) i = r;
              Object.defineProperty(e, i, {
                enumerable: true,
                get: function () {
                  return t[r];
                },
              });
            }
          : function (e, t, r, i) {
              if (i === undefined) i = r;
              e[i] = t[r];
            });
      var s =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: true, value: t });
            }
          : function (e, t) {
              e['default'] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null)
            for (var r in e)
              if (r !== 'default' && Object.prototype.hasOwnProperty.call(e, r))
                n(t, e, r);
          s(t, e);
          return t;
        };
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.parseFeed = t.FeedHandler = void 0;
      var l = a(r(47915));
      var u = o(r(89432));
      var c = r(50763);
      var f;
      (function (e) {
        e[(e['image'] = 0)] = 'image';
        e[(e['audio'] = 1)] = 'audio';
        e[(e['video'] = 2)] = 'video';
        e[(e['document'] = 3)] = 'document';
        e[(e['executable'] = 4)] = 'executable';
      })(f || (f = {}));
      var h;
      (function (e) {
        e[(e['sample'] = 0)] = 'sample';
        e[(e['full'] = 1)] = 'full';
        e[(e['nonstop'] = 2)] = 'nonstop';
      })(h || (h = {}));
      var p = (function (e) {
        i(t, e);
        function t(t, r) {
          var i = this;
          if (typeof t === 'object') {
            t = undefined;
            r = t;
          }
          i = e.call(this, t, r) || this;
          return i;
        }
        t.prototype.onend = function () {
          var e, t;
          var r = g(w, this.dom);
          if (!r) {
            this.handleCallback(new Error("couldn't find root of feed"));
            return;
          }
          var i = {};
          if (r.name === 'feed') {
            var n = r.children;
            i.type = 'atom';
            v(i, 'id', 'id', n);
            v(i, 'title', 'title', n);
            var s = y('href', g('link', n));
            if (s) {
              i.link = s;
            }
            v(i, 'description', 'subtitle', n);
            var o = b('updated', n);
            if (o) {
              i.updated = new Date(o);
            }
            v(i, 'author', 'email', n, true);
            i.items = m('entry', n).map(function (e) {
              var t = {};
              var r = e.children;
              v(t, 'id', 'id', r);
              v(t, 'title', 'title', r);
              var i = y('href', g('link', r));
              if (i) {
                t.link = i;
              }
              var n = b('summary', r) || b('content', r);
              if (n) {
                t.description = n;
              }
              var s = b('updated', r);
              if (s) {
                t.pubDate = new Date(s);
              }
              t.media = d(r);
              return t;
            });
          } else {
            var n =
              (t =
                (e = g('channel', r.children)) === null || e === void 0
                  ? void 0
                  : e.children) !== null && t !== void 0
                ? t
                : [];
            i.type = r.name.substr(0, 3);
            i.id = '';
            v(i, 'title', 'title', n);
            v(i, 'link', 'link', n);
            v(i, 'description', 'description', n);
            var o = b('lastBuildDate', n);
            if (o) {
              i.updated = new Date(o);
            }
            v(i, 'author', 'managingEditor', n, true);
            i.items = m('item', r.children).map(function (e) {
              var t = {};
              var r = e.children;
              v(t, 'id', 'guid', r);
              v(t, 'title', 'title', r);
              v(t, 'link', 'link', r);
              v(t, 'description', 'description', r);
              var i = b('pubDate', r);
              if (i) t.pubDate = new Date(i);
              t.media = d(r);
              return t;
            });
          }
          this.feed = i;
          this.handleCallback(null);
        };
        return t;
      })(l.default);
      t.FeedHandler = p;
      function d(e) {
        return m('media:content', e).map(function (e) {
          var t = { medium: e.attribs.medium, isDefault: !!e.attribs.isDefault };
          if (e.attribs.url) {
            t.url = e.attribs.url;
          }
          if (e.attribs.fileSize) {
            t.fileSize = parseInt(e.attribs.fileSize, 10);
          }
          if (e.attribs.type) {
            t.type = e.attribs.type;
          }
          if (e.attribs.expression) {
            t.expression = e.attribs.expression;
          }
          if (e.attribs.bitrate) {
            t.bitrate = parseInt(e.attribs.bitrate, 10);
          }
          if (e.attribs.framerate) {
            t.framerate = parseInt(e.attribs.framerate, 10);
          }
          if (e.attribs.samplingrate) {
            t.samplingrate = parseInt(e.attribs.samplingrate, 10);
          }
          if (e.attribs.channels) {
            t.channels = parseInt(e.attribs.channels, 10);
          }
          if (e.attribs.duration) {
            t.duration = parseInt(e.attribs.duration, 10);
          }
          if (e.attribs.height) {
            t.height = parseInt(e.attribs.height, 10);
          }
          if (e.attribs.width) {
            t.width = parseInt(e.attribs.width, 10);
          }
          if (e.attribs.lang) {
            t.lang = e.attribs.lang;
          }
          return t;
        });
      }
      function m(e, t) {
        return u.getElementsByTagName(e, t, true);
      }
      function g(e, t) {
        return u.getElementsByTagName(e, t, true, 1)[0];
      }
      function b(e, t, r) {
        if (r === void 0) {
          r = false;
        }
        return u.getText(u.getElementsByTagName(e, t, r, 1)).trim();
      }
      function y(e, t) {
        if (!t) {
          return null;
        }
        var r = t.attribs;
        return r[e];
      }
      function v(e, t, r, i, n) {
        if (n === void 0) {
          n = false;
        }
        var s = b(r, i, n);
        if (s) e[t] = s;
      }
      function w(e) {
        return e === 'rss' || e === 'feed' || e === 'rdf:RDF';
      }
      function x(e, t) {
        if (t === void 0) {
          t = { xmlMode: true };
        }
        var r = new p(t);
        new c.Parser(r, t).end(e);
        return r.feed;
      }
      t.parseFeed = x;
    },
    50763: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.Parser = void 0;
      var n = i(r(39889));
      var s = new Set([
        'input',
        'option',
        'optgroup',
        'select',
        'button',
        'datalist',
        'textarea',
      ]);
      var o = new Set(['p']);
      var a = {
        tr: new Set(['tr', 'th', 'td']),
        th: new Set(['th']),
        td: new Set(['thead', 'th', 'td']),
        body: new Set(['head', 'link', 'script']),
        li: new Set(['li']),
        p: o,
        h1: o,
        h2: o,
        h3: o,
        h4: o,
        h5: o,
        h6: o,
        select: s,
        input: s,
        output: s,
        button: s,
        datalist: s,
        textarea: s,
        option: new Set(['option']),
        optgroup: new Set(['optgroup', 'option']),
        dd: new Set(['dt', 'dd']),
        dt: new Set(['dt', 'dd']),
        address: o,
        article: o,
        aside: o,
        blockquote: o,
        details: o,
        div: o,
        dl: o,
        fieldset: o,
        figcaption: o,
        figure: o,
        footer: o,
        form: o,
        header: o,
        hr: o,
        main: o,
        nav: o,
        ol: o,
        pre: o,
        section: o,
        table: o,
        ul: o,
        rt: new Set(['rt', 'rp']),
        rp: new Set(['rt', 'rp']),
        tbody: new Set(['thead', 'tbody']),
        tfoot: new Set(['thead', 'tbody']),
      };
      var l = new Set([
        'area',
        'base',
        'basefont',
        'br',
        'col',
        'command',
        'embed',
        'frame',
        'hr',
        'img',
        'input',
        'isindex',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
      ]);
      var u = new Set(['math', 'svg']);
      var c = new Set([
        'mi',
        'mo',
        'mn',
        'ms',
        'mtext',
        'annotation-xml',
        'foreignObject',
        'desc',
        'title',
      ]);
      var f = /\s|\//;
      var h = (function () {
        function e(e, t) {
          if (t === void 0) {
            t = {};
          }
          var r, i, s, o, a;
          this.startIndex = 0;
          this.endIndex = null;
          this.tagname = '';
          this.attribname = '';
          this.attribvalue = '';
          this.attribs = null;
          this.stack = [];
          this.foreignContext = [];
          this.options = t;
          this.cbs = e !== null && e !== void 0 ? e : {};
          this.lowerCaseTagNames =
            (r = t.lowerCaseTags) !== null && r !== void 0 ? r : !t.xmlMode;
          this.lowerCaseAttributeNames =
            (i = t.lowerCaseAttributeNames) !== null && i !== void 0 ? i : !t.xmlMode;
          this.tokenizer = new (
            (s = t.Tokenizer) !== null && s !== void 0 ? s : n.default
          )(this.options, this);
          (a = (o = this.cbs).onparserinit) === null || a === void 0
            ? void 0
            : a.call(o, this);
        }
        e.prototype.updatePosition = function (e) {
          if (this.endIndex === null) {
            if (this.tokenizer.sectionStart <= e) {
              this.startIndex = 0;
            } else {
              this.startIndex = this.tokenizer.sectionStart - e;
            }
          } else {
            this.startIndex = this.endIndex + 1;
          }
          this.endIndex = this.tokenizer.getAbsoluteIndex();
        };
        e.prototype.ontext = function (e) {
          var t, r;
          this.updatePosition(1);
          this.endIndex--;
          (r = (t = this.cbs).ontext) === null || r === void 0 ? void 0 : r.call(t, e);
        };
        e.prototype.onopentagname = function (e) {
          var t, r;
          if (this.lowerCaseTagNames) {
            e = e.toLowerCase();
          }
          this.tagname = e;
          if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(a, e)) {
            var i = void 0;
            while (
              this.stack.length > 0 &&
              a[e].has((i = this.stack[this.stack.length - 1]))
            ) {
              this.onclosetag(i);
            }
          }
          if (this.options.xmlMode || !l.has(e)) {
            this.stack.push(e);
            if (u.has(e)) {
              this.foreignContext.push(true);
            } else if (c.has(e)) {
              this.foreignContext.push(false);
            }
          }
          (r = (t = this.cbs).onopentagname) === null || r === void 0
            ? void 0
            : r.call(t, e);
          if (this.cbs.onopentag) this.attribs = {};
        };
        e.prototype.onopentagend = function () {
          var e, t;
          this.updatePosition(1);
          if (this.attribs) {
            (t = (e = this.cbs).onopentag) === null || t === void 0
              ? void 0
              : t.call(e, this.tagname, this.attribs);
            this.attribs = null;
          }
          if (!this.options.xmlMode && this.cbs.onclosetag && l.has(this.tagname)) {
            this.cbs.onclosetag(this.tagname);
          }
          this.tagname = '';
        };
        e.prototype.onclosetag = function (e) {
          this.updatePosition(1);
          if (this.lowerCaseTagNames) {
            e = e.toLowerCase();
          }
          if (u.has(e) || c.has(e)) {
            this.foreignContext.pop();
          }
          if (this.stack.length && (this.options.xmlMode || !l.has(e))) {
            var t = this.stack.lastIndexOf(e);
            if (t !== -1) {
              if (this.cbs.onclosetag) {
                t = this.stack.length - t;
                while (t--) {
                  this.cbs.onclosetag(this.stack.pop());
                }
              } else this.stack.length = t;
            } else if (e === 'p' && !this.options.xmlMode) {
              this.onopentagname(e);
              this.closeCurrentTag();
            }
          } else if (!this.options.xmlMode && (e === 'br' || e === 'p')) {
            this.onopentagname(e);
            this.closeCurrentTag();
          }
        };
        e.prototype.onselfclosingtag = function () {
          if (
            this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]
          ) {
            this.closeCurrentTag();
          } else {
            this.onopentagend();
          }
        };
        e.prototype.closeCurrentTag = function () {
          var e, t;
          var r = this.tagname;
          this.onopentagend();
          if (this.stack[this.stack.length - 1] === r) {
            (t = (e = this.cbs).onclosetag) === null || t === void 0
              ? void 0
              : t.call(e, r);
            this.stack.pop();
          }
        };
        e.prototype.onattribname = function (e) {
          if (this.lowerCaseAttributeNames) {
            e = e.toLowerCase();
          }
          this.attribname = e;
        };
        e.prototype.onattribdata = function (e) {
          this.attribvalue += e;
        };
        e.prototype.onattribend = function (e) {
          var t, r;
          (r = (t = this.cbs).onattribute) === null || r === void 0
            ? void 0
            : r.call(t, this.attribname, this.attribvalue, e);
          if (
            this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)
          ) {
            this.attribs[this.attribname] = this.attribvalue;
          }
          this.attribname = '';
          this.attribvalue = '';
        };
        e.prototype.getInstructionName = function (e) {
          var t = e.search(f);
          var r = t < 0 ? e : e.substr(0, t);
          if (this.lowerCaseTagNames) {
            r = r.toLowerCase();
          }
          return r;
        };
        e.prototype.ondeclaration = function (e) {
          if (this.cbs.onprocessinginstruction) {
            var t = this.getInstructionName(e);
            this.cbs.onprocessinginstruction('!' + t, '!' + e);
          }
        };
        e.prototype.onprocessinginstruction = function (e) {
          if (this.cbs.onprocessinginstruction) {
            var t = this.getInstructionName(e);
            this.cbs.onprocessinginstruction('?' + t, '?' + e);
          }
        };
        e.prototype.oncomment = function (e) {
          var t, r, i, n;
          this.updatePosition(4);
          (r = (t = this.cbs).oncomment) === null || r === void 0
            ? void 0
            : r.call(t, e);
          (n = (i = this.cbs).oncommentend) === null || n === void 0
            ? void 0
            : n.call(i);
        };
        e.prototype.oncdata = function (e) {
          var t, r, i, n, s, o;
          this.updatePosition(1);
          if (this.options.xmlMode || this.options.recognizeCDATA) {
            (r = (t = this.cbs).oncdatastart) === null || r === void 0
              ? void 0
              : r.call(t);
            (n = (i = this.cbs).ontext) === null || n === void 0
              ? void 0
              : n.call(i, e);
            (o = (s = this.cbs).oncdataend) === null || o === void 0
              ? void 0
              : o.call(s);
          } else {
            this.oncomment('[CDATA[' + e + ']]');
          }
        };
        e.prototype.onerror = function (e) {
          var t, r;
          (r = (t = this.cbs).onerror) === null || r === void 0 ? void 0 : r.call(t, e);
        };
        e.prototype.onend = function () {
          var e, t;
          if (this.cbs.onclosetag) {
            for (
              var r = this.stack.length;
              r > 0;
              this.cbs.onclosetag(this.stack[--r])
            );
          }
          (t = (e = this.cbs).onend) === null || t === void 0 ? void 0 : t.call(e);
        };
        e.prototype.reset = function () {
          var e, t, r, i;
          (t = (e = this.cbs).onreset) === null || t === void 0 ? void 0 : t.call(e);
          this.tokenizer.reset();
          this.tagname = '';
          this.attribname = '';
          this.attribs = null;
          this.stack = [];
          (i = (r = this.cbs).onparserinit) === null || i === void 0
            ? void 0
            : i.call(r, this);
        };
        e.prototype.parseComplete = function (e) {
          this.reset();
          this.end(e);
        };
        e.prototype.write = function (e) {
          this.tokenizer.write(e);
        };
        e.prototype.end = function (e) {
          this.tokenizer.end(e);
        };
        e.prototype.pause = function () {
          this.tokenizer.pause();
        };
        e.prototype.resume = function () {
          this.tokenizer.resume();
        };
        e.prototype.parseChunk = function (e) {
          this.write(e);
        };
        e.prototype.done = function (e) {
          this.end(e);
        };
        return e;
      })();
      t.Parser = h;
    },
    39889: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      var n = i(r(26));
      var s = i(r(84007));
      var o = i(r(17802));
      var a = i(r(2228));
      function l(e) {
        return e === ' ' || e === '\n' || e === '\t' || e === '\f' || e === '\r';
      }
      function u(e) {
        return (e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z');
      }
      function c(e, t, r) {
        var i = e.toLowerCase();
        if (e === i) {
          return function (e, n) {
            if (n === i) {
              e._state = t;
            } else {
              e._state = r;
              e._index--;
            }
          };
        }
        return function (n, s) {
          if (s === i || s === e) {
            n._state = t;
          } else {
            n._state = r;
            n._index--;
          }
        };
      }
      function f(e, t) {
        var r = e.toLowerCase();
        return function (i, n) {
          if (n === r || n === e) {
            i._state = t;
          } else {
            i._state = 3;
            i._index--;
          }
        };
      }
      var h = c('C', 24, 16);
      var p = c('D', 25, 16);
      var d = c('A', 26, 16);
      var m = c('T', 27, 16);
      var g = c('A', 28, 16);
      var b = f('R', 35);
      var y = f('I', 36);
      var v = f('P', 37);
      var w = f('T', 38);
      var x = c('R', 40, 1);
      var S = c('I', 41, 1);
      var _ = c('P', 42, 1);
      var T = c('T', 43, 1);
      var O = f('Y', 45);
      var C = f('L', 46);
      var k = f('E', 47);
      var A = c('Y', 49, 1);
      var E = c('L', 50, 1);
      var D = c('E', 51, 1);
      var P = f('I', 54);
      var L = f('T', 55);
      var q = f('L', 56);
      var M = f('E', 57);
      var N = c('I', 58, 1);
      var j = c('T', 59, 1);
      var I = c('L', 60, 1);
      var R = c('E', 61, 1);
      var B = c('#', 63, 64);
      var U = c('X', 66, 65);
      var H = (function () {
        function e(e, t) {
          var r;
          this._state = 1;
          this.buffer = '';
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.special = 1;
          this.running = true;
          this.ended = false;
          this.cbs = t;
          this.xmlMode = !!(e === null || e === void 0 ? void 0 : e.xmlMode);
          this.decodeEntities =
            (r = e === null || e === void 0 ? void 0 : e.decodeEntities) !== null &&
            r !== void 0
              ? r
              : true;
        }
        e.prototype.reset = function () {
          this._state = 1;
          this.buffer = '';
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.special = 1;
          this.running = true;
          this.ended = false;
        };
        e.prototype.write = function (e) {
          if (this.ended) this.cbs.onerror(Error('.write() after done!'));
          this.buffer += e;
          this.parse();
        };
        e.prototype.end = function (e) {
          if (this.ended) this.cbs.onerror(Error('.end() after done!'));
          if (e) this.write(e);
          this.ended = true;
          if (this.running) this.finish();
        };
        e.prototype.pause = function () {
          this.running = false;
        };
        e.prototype.resume = function () {
          this.running = true;
          if (this._index < this.buffer.length) {
            this.parse();
          }
          if (this.ended) {
            this.finish();
          }
        };
        e.prototype.getAbsoluteIndex = function () {
          return this.bufferOffset + this._index;
        };
        e.prototype.stateText = function (e) {
          if (e === '<') {
            if (this._index > this.sectionStart) {
              this.cbs.ontext(this.getSection());
            }
            this._state = 2;
            this.sectionStart = this._index;
          } else if (
            this.decodeEntities &&
            e === '&' &&
            (this.special === 1 || this.special === 4)
          ) {
            if (this._index > this.sectionStart) {
              this.cbs.ontext(this.getSection());
            }
            this.baseState = 1;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        e.prototype.isTagStartChar = function (e) {
          return u(e) || (this.xmlMode && !l(e) && e !== '/' && e !== '>');
        };
        e.prototype.stateBeforeTagName = function (e) {
          if (e === '/') {
            this._state = 5;
          } else if (e === '<') {
            this.cbs.ontext(this.getSection());
            this.sectionStart = this._index;
          } else if (e === '>' || this.special !== 1 || l(e)) {
            this._state = 1;
          } else if (e === '!') {
            this._state = 15;
            this.sectionStart = this._index + 1;
          } else if (e === '?') {
            this._state = 17;
            this.sectionStart = this._index + 1;
          } else if (!this.isTagStartChar(e)) {
            this._state = 1;
          } else {
            this._state =
              !this.xmlMode && (e === 's' || e === 'S')
                ? 32
                : !this.xmlMode && (e === 't' || e === 'T')
                ? 52
                : 3;
            this.sectionStart = this._index;
          }
        };
        e.prototype.stateInTagName = function (e) {
          if (e === '/' || e === '>' || l(e)) {
            this.emitToken('onopentagname');
            this._state = 8;
            this._index--;
          }
        };
        e.prototype.stateBeforeClosingTagName = function (e) {
          if (l(e)) {
          } else if (e === '>') {
            this._state = 1;
          } else if (this.special !== 1) {
            if (this.special !== 4 && (e === 's' || e === 'S')) {
              this._state = 33;
            } else if (this.special === 4 && (e === 't' || e === 'T')) {
              this._state = 53;
            } else {
              this._state = 1;
              this._index--;
            }
          } else if (!this.isTagStartChar(e)) {
            this._state = 20;
            this.sectionStart = this._index;
          } else {
            this._state = 6;
            this.sectionStart = this._index;
          }
        };
        e.prototype.stateInClosingTagName = function (e) {
          if (e === '>' || l(e)) {
            this.emitToken('onclosetag');
            this._state = 7;
            this._index--;
          }
        };
        e.prototype.stateAfterClosingTagName = function (e) {
          if (e === '>') {
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        e.prototype.stateBeforeAttributeName = function (e) {
          if (e === '>') {
            this.cbs.onopentagend();
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (e === '/') {
            this._state = 4;
          } else if (!l(e)) {
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        e.prototype.stateInSelfClosingTag = function (e) {
          if (e === '>') {
            this.cbs.onselfclosingtag();
            this._state = 1;
            this.sectionStart = this._index + 1;
            this.special = 1;
          } else if (!l(e)) {
            this._state = 8;
            this._index--;
          }
        };
        e.prototype.stateInAttributeName = function (e) {
          if (e === '=' || e === '/' || e === '>' || l(e)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10;
            this._index--;
          }
        };
        e.prototype.stateAfterAttributeName = function (e) {
          if (e === '=') {
            this._state = 11;
          } else if (e === '/' || e === '>') {
            this.cbs.onattribend(undefined);
            this._state = 8;
            this._index--;
          } else if (!l(e)) {
            this.cbs.onattribend(undefined);
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        e.prototype.stateBeforeAttributeValue = function (e) {
          if (e === '"') {
            this._state = 12;
            this.sectionStart = this._index + 1;
          } else if (e === "'") {
            this._state = 13;
            this.sectionStart = this._index + 1;
          } else if (!l(e)) {
            this._state = 14;
            this.sectionStart = this._index;
            this._index--;
          }
        };
        e.prototype.handleInAttributeValue = function (e, t) {
          if (e === t) {
            this.emitToken('onattribdata');
            this.cbs.onattribend(t);
            this._state = 8;
          } else if (this.decodeEntities && e === '&') {
            this.emitToken('onattribdata');
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        e.prototype.stateInAttributeValueDoubleQuotes = function (e) {
          this.handleInAttributeValue(e, '"');
        };
        e.prototype.stateInAttributeValueSingleQuotes = function (e) {
          this.handleInAttributeValue(e, "'");
        };
        e.prototype.stateInAttributeValueNoQuotes = function (e) {
          if (l(e) || e === '>') {
            this.emitToken('onattribdata');
            this.cbs.onattribend(null);
            this._state = 8;
            this._index--;
          } else if (this.decodeEntities && e === '&') {
            this.emitToken('onattribdata');
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        e.prototype.stateBeforeDeclaration = function (e) {
          this._state = e === '[' ? 23 : e === '-' ? 18 : 16;
        };
        e.prototype.stateInDeclaration = function (e) {
          if (e === '>') {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        e.prototype.stateInProcessingInstruction = function (e) {
          if (e === '>') {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        e.prototype.stateBeforeComment = function (e) {
          if (e === '-') {
            this._state = 19;
            this.sectionStart = this._index + 1;
          } else {
            this._state = 16;
          }
        };
        e.prototype.stateInComment = function (e) {
          if (e === '-') this._state = 21;
        };
        e.prototype.stateInSpecialComment = function (e) {
          if (e === '>') {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        e.prototype.stateAfterComment1 = function (e) {
          if (e === '-') {
            this._state = 22;
          } else {
            this._state = 19;
          }
        };
        e.prototype.stateAfterComment2 = function (e) {
          if (e === '>') {
            this.cbs.oncomment(
              this.buffer.substring(this.sectionStart, this._index - 2)
            );
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (e !== '-') {
            this._state = 19;
          }
        };
        e.prototype.stateBeforeCdata6 = function (e) {
          if (e === '[') {
            this._state = 29;
            this.sectionStart = this._index + 1;
          } else {
            this._state = 16;
            this._index--;
          }
        };
        e.prototype.stateInCdata = function (e) {
          if (e === ']') this._state = 30;
        };
        e.prototype.stateAfterCdata1 = function (e) {
          if (e === ']') this._state = 31;
          else this._state = 29;
        };
        e.prototype.stateAfterCdata2 = function (e) {
          if (e === '>') {
            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (e !== ']') {
            this._state = 29;
          }
        };
        e.prototype.stateBeforeSpecialS = function (e) {
          if (e === 'c' || e === 'C') {
            this._state = 34;
          } else if (e === 't' || e === 'T') {
            this._state = 44;
          } else {
            this._state = 3;
            this._index--;
          }
        };
        e.prototype.stateBeforeSpecialSEnd = function (e) {
          if (this.special === 2 && (e === 'c' || e === 'C')) {
            this._state = 39;
          } else if (this.special === 3 && (e === 't' || e === 'T')) {
            this._state = 48;
          } else this._state = 1;
        };
        e.prototype.stateBeforeSpecialLast = function (e, t) {
          if (e === '/' || e === '>' || l(e)) {
            this.special = t;
          }
          this._state = 3;
          this._index--;
        };
        e.prototype.stateAfterSpecialLast = function (e, t) {
          if (e === '>' || l(e)) {
            this.special = 1;
            this._state = 6;
            this.sectionStart = this._index - t;
            this._index--;
          } else this._state = 1;
        };
        e.prototype.parseFixedEntity = function (e) {
          if (e === void 0) {
            e = this.xmlMode ? a.default : s.default;
          }
          if (this.sectionStart + 1 < this._index) {
            var t = this.buffer.substring(this.sectionStart + 1, this._index);
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              this.emitPartial(e[t]);
              this.sectionStart = this._index + 1;
            }
          }
        };
        e.prototype.parseLegacyEntity = function () {
          var e = this.sectionStart + 1;
          var t = Math.min(this._index - e, 6);
          while (t >= 2) {
            var r = this.buffer.substr(e, t);
            if (Object.prototype.hasOwnProperty.call(o.default, r)) {
              this.emitPartial(o.default[r]);
              this.sectionStart += t + 1;
              return;
            }
            t--;
          }
        };
        e.prototype.stateInNamedEntity = function (e) {
          if (e === ';') {
            this.parseFixedEntity();
            if (
              this.baseState === 1 &&
              this.sectionStart + 1 < this._index &&
              !this.xmlMode
            ) {
              this.parseLegacyEntity();
            }
            this._state = this.baseState;
          } else if ((e < '0' || e > '9') && !u(e)) {
            if (this.xmlMode || this.sectionStart + 1 === this._index) {
            } else if (this.baseState !== 1) {
              if (e !== '=') {
                this.parseFixedEntity(o.default);
              }
            } else {
              this.parseLegacyEntity();
            }
            this._state = this.baseState;
            this._index--;
          }
        };
        e.prototype.decodeNumericEntity = function (e, t, r) {
          var i = this.sectionStart + e;
          if (i !== this._index) {
            var s = this.buffer.substring(i, this._index);
            var o = parseInt(s, t);
            this.emitPartial(n.default(o));
            this.sectionStart = r ? this._index + 1 : this._index;
          }
          this._state = this.baseState;
        };
        e.prototype.stateInNumericEntity = function (e) {
          if (e === ';') {
            this.decodeNumericEntity(2, 10, true);
          } else if (e < '0' || e > '9') {
            if (!this.xmlMode) {
              this.decodeNumericEntity(2, 10, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          }
        };
        e.prototype.stateInHexEntity = function (e) {
          if (e === ';') {
            this.decodeNumericEntity(3, 16, true);
          } else if (
            (e < 'a' || e > 'f') &&
            (e < 'A' || e > 'F') &&
            (e < '0' || e > '9')
          ) {
            if (!this.xmlMode) {
              this.decodeNumericEntity(3, 16, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          }
        };
        e.prototype.cleanup = function () {
          if (this.sectionStart < 0) {
            this.buffer = '';
            this.bufferOffset += this._index;
            this._index = 0;
          } else if (this.running) {
            if (this._state === 1) {
              if (this.sectionStart !== this._index) {
                this.cbs.ontext(this.buffer.substr(this.sectionStart));
              }
              this.buffer = '';
              this.bufferOffset += this._index;
              this._index = 0;
            } else if (this.sectionStart === this._index) {
              this.buffer = '';
              this.bufferOffset += this._index;
              this._index = 0;
            } else {
              this.buffer = this.buffer.substr(this.sectionStart);
              this._index -= this.sectionStart;
              this.bufferOffset += this.sectionStart;
            }
            this.sectionStart = 0;
          }
        };
        e.prototype.parse = function () {
          while (this._index < this.buffer.length && this.running) {
            var e = this.buffer.charAt(this._index);
            if (this._state === 1) {
              this.stateText(e);
            } else if (this._state === 12) {
              this.stateInAttributeValueDoubleQuotes(e);
            } else if (this._state === 9) {
              this.stateInAttributeName(e);
            } else if (this._state === 19) {
              this.stateInComment(e);
            } else if (this._state === 20) {
              this.stateInSpecialComment(e);
            } else if (this._state === 8) {
              this.stateBeforeAttributeName(e);
            } else if (this._state === 3) {
              this.stateInTagName(e);
            } else if (this._state === 6) {
              this.stateInClosingTagName(e);
            } else if (this._state === 2) {
              this.stateBeforeTagName(e);
            } else if (this._state === 10) {
              this.stateAfterAttributeName(e);
            } else if (this._state === 13) {
              this.stateInAttributeValueSingleQuotes(e);
            } else if (this._state === 11) {
              this.stateBeforeAttributeValue(e);
            } else if (this._state === 5) {
              this.stateBeforeClosingTagName(e);
            } else if (this._state === 7) {
              this.stateAfterClosingTagName(e);
            } else if (this._state === 32) {
              this.stateBeforeSpecialS(e);
            } else if (this._state === 21) {
              this.stateAfterComment1(e);
            } else if (this._state === 14) {
              this.stateInAttributeValueNoQuotes(e);
            } else if (this._state === 4) {
              this.stateInSelfClosingTag(e);
            } else if (this._state === 16) {
              this.stateInDeclaration(e);
            } else if (this._state === 15) {
              this.stateBeforeDeclaration(e);
            } else if (this._state === 22) {
              this.stateAfterComment2(e);
            } else if (this._state === 18) {
              this.stateBeforeComment(e);
            } else if (this._state === 33) {
              this.stateBeforeSpecialSEnd(e);
            } else if (this._state === 53) {
              N(this, e);
            } else if (this._state === 39) {
              x(this, e);
            } else if (this._state === 40) {
              S(this, e);
            } else if (this._state === 41) {
              _(this, e);
            } else if (this._state === 34) {
              b(this, e);
            } else if (this._state === 35) {
              y(this, e);
            } else if (this._state === 36) {
              v(this, e);
            } else if (this._state === 37) {
              w(this, e);
            } else if (this._state === 38) {
              this.stateBeforeSpecialLast(e, 2);
            } else if (this._state === 42) {
              T(this, e);
            } else if (this._state === 43) {
              this.stateAfterSpecialLast(e, 6);
            } else if (this._state === 44) {
              O(this, e);
            } else if (this._state === 29) {
              this.stateInCdata(e);
            } else if (this._state === 45) {
              C(this, e);
            } else if (this._state === 46) {
              k(this, e);
            } else if (this._state === 47) {
              this.stateBeforeSpecialLast(e, 3);
            } else if (this._state === 48) {
              A(this, e);
            } else if (this._state === 49) {
              E(this, e);
            } else if (this._state === 50) {
              D(this, e);
            } else if (this._state === 51) {
              this.stateAfterSpecialLast(e, 5);
            } else if (this._state === 52) {
              P(this, e);
            } else if (this._state === 54) {
              L(this, e);
            } else if (this._state === 55) {
              q(this, e);
            } else if (this._state === 56) {
              M(this, e);
            } else if (this._state === 57) {
              this.stateBeforeSpecialLast(e, 4);
            } else if (this._state === 58) {
              j(this, e);
            } else if (this._state === 59) {
              I(this, e);
            } else if (this._state === 60) {
              R(this, e);
            } else if (this._state === 61) {
              this.stateAfterSpecialLast(e, 5);
            } else if (this._state === 17) {
              this.stateInProcessingInstruction(e);
            } else if (this._state === 64) {
              this.stateInNamedEntity(e);
            } else if (this._state === 23) {
              h(this, e);
            } else if (this._state === 62) {
              B(this, e);
            } else if (this._state === 24) {
              p(this, e);
            } else if (this._state === 25) {
              d(this, e);
            } else if (this._state === 30) {
              this.stateAfterCdata1(e);
            } else if (this._state === 31) {
              this.stateAfterCdata2(e);
            } else if (this._state === 26) {
              m(this, e);
            } else if (this._state === 27) {
              g(this, e);
            } else if (this._state === 28) {
              this.stateBeforeCdata6(e);
            } else if (this._state === 66) {
              this.stateInHexEntity(e);
            } else if (this._state === 65) {
              this.stateInNumericEntity(e);
            } else if (this._state === 63) {
              U(this, e);
            } else {
              this.cbs.onerror(Error('unknown _state'), this._state);
            }
            this._index++;
          }
          this.cleanup();
        };
        e.prototype.finish = function () {
          if (this.sectionStart < this._index) {
            this.handleTrailingData();
          }
          this.cbs.onend();
        };
        e.prototype.handleTrailingData = function () {
          var e = this.buffer.substr(this.sectionStart);
          if (this._state === 29 || this._state === 30 || this._state === 31) {
            this.cbs.oncdata(e);
          } else if (this._state === 19 || this._state === 21 || this._state === 22) {
            this.cbs.oncomment(e);
          } else if (this._state === 64 && !this.xmlMode) {
            this.parseLegacyEntity();
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state === 65 && !this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state === 66 && !this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (
            this._state !== 3 &&
            this._state !== 8 &&
            this._state !== 11 &&
            this._state !== 10 &&
            this._state !== 9 &&
            this._state !== 13 &&
            this._state !== 12 &&
            this._state !== 14 &&
            this._state !== 6
          ) {
            this.cbs.ontext(e);
          }
        };
        e.prototype.getSection = function () {
          return this.buffer.substring(this.sectionStart, this._index);
        };
        e.prototype.emitToken = function (e) {
          this.cbs[e](this.getSection());
          this.sectionStart = -1;
        };
        e.prototype.emitPartial = function (e) {
          if (this.baseState !== 1) {
            this.cbs.onattribdata(e);
          } else {
            this.cbs.ontext(e);
          }
        };
        return e;
      })();
      t.default = H;
    },
    23719: function (e, t, r) {
      'use strict';
      var i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, i) {
              if (i === undefined) i = r;
              Object.defineProperty(e, i, {
                enumerable: true,
                get: function () {
                  return t[r];
                },
              });
            }
          : function (e, t, r, i) {
              if (i === undefined) i = r;
              e[i] = t[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: true, value: t });
            }
          : function (e, t) {
              e['default'] = t;
            });
      var s =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null)
            for (var r in e)
              if (r !== 'default' && Object.prototype.hasOwnProperty.call(e, r))
                i(t, e, r);
          n(t, e);
          return t;
        };
      var o =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var r in e)
            if (r !== 'default' && !Object.prototype.hasOwnProperty.call(t, r))
              i(t, e, r);
        };
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: true });
      t.RssHandler =
        t.DefaultHandler =
        t.DomUtils =
        t.ElementType =
        t.Tokenizer =
        t.createDomStream =
        t.parseDOM =
        t.parseDocument =
        t.DomHandler =
        t.Parser =
          void 0;
      var l = r(50763);
      Object.defineProperty(t, 'Parser', {
        enumerable: true,
        get: function () {
          return l.Parser;
        },
      });
      var u = r(47915);
      Object.defineProperty(t, 'DomHandler', {
        enumerable: true,
        get: function () {
          return u.DomHandler;
        },
      });
      Object.defineProperty(t, 'DefaultHandler', {
        enumerable: true,
        get: function () {
          return u.DomHandler;
        },
      });
      function c(e, t) {
        var r = new u.DomHandler(undefined, t);
        new l.Parser(r, t).end(e);
        return r.root;
      }
      t.parseDocument = c;
      function f(e, t) {
        return c(e, t).children;
      }
      t.parseDOM = f;
      function h(e, t, r) {
        var i = new u.DomHandler(e, t, r);
        return new l.Parser(i, t);
      }
      t.createDomStream = h;
      var p = r(39889);
      Object.defineProperty(t, 'Tokenizer', {
        enumerable: true,
        get: function () {
          return a(p).default;
        },
      });
      var d = s(r(99960));
      t.ElementType = d;
      o(r(63870), t);
      t.DomUtils = s(r(89432));
      var m = r(63870);
      Object.defineProperty(t, 'RssHandler', {
        enumerable: true,
        get: function () {
          return m.FeedHandler;
        },
      });
    },
    36394: (e) => {
      let t = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
      let r = (e, t) => () => {
        let r = '';
        let i = t;
        while (i--) {
          r += e[(Math.random() * e.length) | 0];
        }
        return r;
      };
      let i = (e = 21) => {
        let r = '';
        let i = e;
        while (i--) {
          r += t[(Math.random() * 64) | 0];
        }
        return r;
      };
      e.exports = { nanoid: i, customAlphabet: r };
    },
    79430: function (e, t) {
      var r, i, n;
      (function (s, o) {
        if (true) {
          !((i = []),
          (r = o),
          (n = typeof r === 'function' ? r.apply(t, i) : r),
          n !== undefined && (e.exports = n));
        } else {
        }
      })(this, function () {
        return function (e) {
          function t(e) {
            return e === ' ' || e === '\t' || e === '\n' || e === '\f' || e === '\r';
          }
          function r(t) {
            var r,
              i = t.exec(e.substring(m));
            if (i) {
              r = i[0];
              m += r.length;
              return r;
            }
          }
          var i = e.length,
            n = /^[ \t\n\r\u000c]+/,
            s = /^[, \t\n\r\u000c]+/,
            o = /^[^ \t\n\r\u000c]+/,
            a = /[,]+$/,
            l = /^\d+$/,
            u = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
            c,
            f,
            h,
            p,
            d,
            m = 0,
            g = [];
          while (true) {
            r(s);
            if (m >= i) {
              return g;
            }
            c = r(o);
            f = [];
            if (c.slice(-1) === ',') {
              c = c.replace(a, '');
              y();
            } else {
              b();
            }
          }
          function b() {
            r(n);
            h = '';
            p = 'in descriptor';
            while (true) {
              d = e.charAt(m);
              if (p === 'in descriptor') {
                if (t(d)) {
                  if (h) {
                    f.push(h);
                    h = '';
                    p = 'after descriptor';
                  }
                } else if (d === ',') {
                  m += 1;
                  if (h) {
                    f.push(h);
                  }
                  y();
                  return;
                } else if (d === '(') {
                  h = h + d;
                  p = 'in parens';
                } else if (d === '') {
                  if (h) {
                    f.push(h);
                  }
                  y();
                  return;
                } else {
                  h = h + d;
                }
              } else if (p === 'in parens') {
                if (d === ')') {
                  h = h + d;
                  p = 'in descriptor';
                } else if (d === '') {
                  f.push(h);
                  y();
                  return;
                } else {
                  h = h + d;
                }
              } else if (p === 'after descriptor') {
                if (t(d)) {
                } else if (d === '') {
                  y();
                  return;
                } else {
                  p = 'in descriptor';
                  m -= 1;
                }
              }
              m += 1;
            }
          }
          function y() {
            var t = false,
              r,
              i,
              n,
              s,
              o = {},
              a,
              h,
              p,
              d,
              m;
            for (s = 0; s < f.length; s++) {
              a = f[s];
              h = a[a.length - 1];
              p = a.substring(0, a.length - 1);
              d = parseInt(p, 10);
              m = parseFloat(p);
              if (l.test(p) && h === 'w') {
                if (r || i) {
                  t = true;
                }
                if (d === 0) {
                  t = true;
                } else {
                  r = d;
                }
              } else if (u.test(p) && h === 'x') {
                if (r || i || n) {
                  t = true;
                }
                if (m < 0) {
                  t = true;
                } else {
                  i = m;
                }
              } else if (l.test(p) && h === 'h') {
                if (n || i) {
                  t = true;
                }
                if (d === 0) {
                  t = true;
                } else {
                  n = d;
                }
              } else {
                t = true;
              }
            }
            if (!t) {
              o.url = c;
              if (r) {
                o.w = r;
              }
              if (i) {
                o.d = i;
              }
              if (n) {
                o.h = n;
              }
              g.push(o);
            } else if (console && console.log) {
              console.log(
                "Invalid srcset descriptor found in '" + e + "' at '" + a + "'."
              );
            }
          }
        };
      });
    },
    74241: (e) => {
      var t = String;
      var r = function () {
        return {
          isColorSupported: false,
          reset: t,
          bold: t,
          dim: t,
          italic: t,
          underline: t,
          inverse: t,
          hidden: t,
          strikethrough: t,
          black: t,
          red: t,
          green: t,
          yellow: t,
          blue: t,
          magenta: t,
          cyan: t,
          white: t,
          gray: t,
          bgBlack: t,
          bgRed: t,
          bgGreen: t,
          bgYellow: t,
          bgBlue: t,
          bgMagenta: t,
          bgCyan: t,
          bgWhite: t,
        };
      };
      e.exports = r();
      e.exports.createColors = r;
    },
    41353: (e, t, r) => {
      'use strict';
      let i = r(21019);
      class n extends i {
        constructor(e) {
          super(e);
          this.type = 'atrule';
        }
        append(...e) {
          if (!this.proxyOf.nodes) this.nodes = [];
          return super.append(...e);
        }
        prepend(...e) {
          if (!this.proxyOf.nodes) this.nodes = [];
          return super.prepend(...e);
        }
      }
      e.exports = n;
      n.default = n;
      i.registerAtRule(n);
    },
    69932: (e, t, r) => {
      'use strict';
      let i = r(65631);
      class n extends i {
        constructor(e) {
          super(e);
          this.type = 'comment';
        }
      }
      e.exports = n;
      n.default = n;
    },
    21019: (e, t, r) => {
      'use strict';
      let { isClean: i, my: n } = r(65513);
      let s = r(94258);
      let o = r(69932);
      let a = r(65631);
      let l, u, c;
      function f(e) {
        return e.map((e) => {
          if (e.nodes) e.nodes = f(e.nodes);
          delete e.source;
          return e;
        });
      }
      function h(e) {
        e[i] = false;
        if (e.proxyOf.nodes) {
          for (let t of e.proxyOf.nodes) {
            h(t);
          }
        }
      }
      class p extends a {
        push(e) {
          e.parent = this;
          this.proxyOf.nodes.push(e);
          return this;
        }
        each(e) {
          if (!this.proxyOf.nodes) return undefined;
          let t = this.getIterator();
          let r, i;
          while (this.indexes[t] < this.proxyOf.nodes.length) {
            r = this.indexes[t];
            i = e(this.proxyOf.nodes[r], r);
            if (i === false) break;
            this.indexes[t] += 1;
          }
          delete this.indexes[t];
          return i;
        }
        walk(e) {
          return this.each((t, r) => {
            let i;
            try {
              i = e(t, r);
            } catch (n) {
              throw t.addToError(n);
            }
            if (i !== false && t.walk) {
              i = t.walk(e);
            }
            return i;
          });
        }
        walkDecls(e, t) {
          if (!t) {
            t = e;
            return this.walk((e, r) => {
              if (e.type === 'decl') {
                return t(e, r);
              }
            });
          }
          if (e instanceof RegExp) {
            return this.walk((r, i) => {
              if (r.type === 'decl' && e.test(r.prop)) {
                return t(r, i);
              }
            });
          }
          return this.walk((r, i) => {
            if (r.type === 'decl' && r.prop === e) {
              return t(r, i);
            }
          });
        }
        walkRules(e, t) {
          if (!t) {
            t = e;
            return this.walk((e, r) => {
              if (e.type === 'rule') {
                return t(e, r);
              }
            });
          }
          if (e instanceof RegExp) {
            return this.walk((r, i) => {
              if (r.type === 'rule' && e.test(r.selector)) {
                return t(r, i);
              }
            });
          }
          return this.walk((r, i) => {
            if (r.type === 'rule' && r.selector === e) {
              return t(r, i);
            }
          });
        }
        walkAtRules(e, t) {
          if (!t) {
            t = e;
            return this.walk((e, r) => {
              if (e.type === 'atrule') {
                return t(e, r);
              }
            });
          }
          if (e instanceof RegExp) {
            return this.walk((r, i) => {
              if (r.type === 'atrule' && e.test(r.name)) {
                return t(r, i);
              }
            });
          }
          return this.walk((r, i) => {
            if (r.type === 'atrule' && r.name === e) {
              return t(r, i);
            }
          });
        }
        walkComments(e) {
          return this.walk((t, r) => {
            if (t.type === 'comment') {
              return e(t, r);
            }
          });
        }
        append(...e) {
          for (let t of e) {
            let e = this.normalize(t, this.last);
            for (let t of e) this.proxyOf.nodes.push(t);
          }
          this.markDirty();
          return this;
        }
        prepend(...e) {
          e = e.reverse();
          for (let t of e) {
            let e = this.normalize(t, this.first, 'prepend').reverse();
            for (let t of e) this.proxyOf.nodes.unshift(t);
            for (let t in this.indexes) {
              this.indexes[t] = this.indexes[t] + e.length;
            }
          }
          this.markDirty();
          return this;
        }
        cleanRaws(e) {
          super.cleanRaws(e);
          if (this.nodes) {
            for (let t of this.nodes) t.cleanRaws(e);
          }
        }
        insertBefore(e, t) {
          e = this.index(e);
          let r = e === 0 ? 'prepend' : false;
          let i = this.normalize(t, this.proxyOf.nodes[e], r).reverse();
          for (let s of i) this.proxyOf.nodes.splice(e, 0, s);
          let n;
          for (let s in this.indexes) {
            n = this.indexes[s];
            if (e <= n) {
              this.indexes[s] = n + i.length;
            }
          }
          this.markDirty();
          return this;
        }
        insertAfter(e, t) {
          e = this.index(e);
          let r = this.normalize(t, this.proxyOf.nodes[e]).reverse();
          for (let n of r) this.proxyOf.nodes.splice(e + 1, 0, n);
          let i;
          for (let n in this.indexes) {
            i = this.indexes[n];
            if (e < i) {
              this.indexes[n] = i + r.length;
            }
          }
          this.markDirty();
          return this;
        }
        removeChild(e) {
          e = this.index(e);
          this.proxyOf.nodes[e].parent = undefined;
          this.proxyOf.nodes.splice(e, 1);
          let t;
          for (let r in this.indexes) {
            t = this.indexes[r];
            if (t >= e) {
              this.indexes[r] = t - 1;
            }
          }
          this.markDirty();
          return this;
        }
        removeAll() {
          for (let e of this.proxyOf.nodes) e.parent = undefined;
          this.proxyOf.nodes = [];
          this.markDirty();
          return this;
        }
        replaceValues(e, t, r) {
          if (!r) {
            r = t;
            t = {};
          }
          this.walkDecls((i) => {
            if (t.props && !t.props.includes(i.prop)) return;
            if (t.fast && !i.value.includes(t.fast)) return;
            i.value = i.value.replace(e, r);
          });
          this.markDirty();
          return this;
        }
        every(e) {
          return this.nodes.every(e);
        }
        some(e) {
          return this.nodes.some(e);
        }
        index(e) {
          if (typeof e === 'number') return e;
          if (e.proxyOf) e = e.proxyOf;
          return this.proxyOf.nodes.indexOf(e);
        }
        get first() {
          if (!this.proxyOf.nodes) return undefined;
          return this.proxyOf.nodes[0];
        }
        get last() {
          if (!this.proxyOf.nodes) return undefined;
          return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        }
        normalize(e, t) {
          if (typeof e === 'string') {
            e = f(l(e).nodes);
          } else if (Array.isArray(e)) {
            e = e.slice(0);
            for (let t of e) {
              if (t.parent) t.parent.removeChild(t, 'ignore');
            }
          } else if (e.type === 'root' && this.type !== 'document') {
            e = e.nodes.slice(0);
            for (let t of e) {
              if (t.parent) t.parent.removeChild(t, 'ignore');
            }
          } else if (e.type) {
            e = [e];
          } else if (e.prop) {
            if (typeof e.value === 'undefined') {
              throw new Error('Value field is missed in node creation');
            } else if (typeof e.value !== 'string') {
              e.value = String(e.value);
            }
            e = [new s(e)];
          } else if (e.selector) {
            e = [new u(e)];
          } else if (e.name) {
            e = [new c(e)];
          } else if (e.text) {
            e = [new o(e)];
          } else {
            throw new Error('Unknown node type in node creation');
          }
          let r = e.map((e) => {
            if (!e[n]) p.rebuild(e);
            e = e.proxyOf;
            if (e.parent) e.parent.removeChild(e);
            if (e[i]) h(e);
            if (typeof e.raws.before === 'undefined') {
              if (t && typeof t.raws.before !== 'undefined') {
                e.raws.before = t.raws.before.replace(/\S/g, '');
              }
            }
            e.parent = this;
            return e;
          });
          return r;
        }
        getProxyProcessor() {
          return {
            set(e, t, r) {
              if (e[t] === r) return true;
              e[t] = r;
              if (t === 'name' || t === 'params' || t === 'selector') {
                e.markDirty();
              }
              return true;
            },
            get(e, t) {
              if (t === 'proxyOf') {
                return e;
              } else if (!e[t]) {
                return e[t];
              } else if (
                t === 'each' ||
                (typeof t === 'string' && t.startsWith('walk'))
              ) {
                return (...r) =>
                  e[t](
                    ...r.map((e) => {
                      if (typeof e === 'function') {
                        return (t, r) => e(t.toProxy(), r);
                      } else {
                        return e;
                      }
                    })
                  );
              } else if (t === 'every' || t === 'some') {
                return (r) => e[t]((e, ...t) => r(e.toProxy(), ...t));
              } else if (t === 'root') {
                return () => e.root().toProxy();
              } else if (t === 'nodes') {
                return e.nodes.map((e) => e.toProxy());
              } else if (t === 'first' || t === 'last') {
                return e[t].toProxy();
              } else {
                return e[t];
              }
            },
          };
        }
        getIterator() {
          if (!this.lastEach) this.lastEach = 0;
          if (!this.indexes) this.indexes = {};
          this.lastEach += 1;
          let e = this.lastEach;
          this.indexes[e] = 0;
          return e;
        }
      }
      p.registerParse = (e) => {
        l = e;
      };
      p.registerRule = (e) => {
        u = e;
      };
      p.registerAtRule = (e) => {
        c = e;
      };
      e.exports = p;
      p.default = p;
      p.rebuild = (e) => {
        if (e.type === 'atrule') {
          Object.setPrototypeOf(e, c.prototype);
        } else if (e.type === 'rule') {
          Object.setPrototypeOf(e, u.prototype);
        } else if (e.type === 'decl') {
          Object.setPrototypeOf(e, s.prototype);
        } else if (e.type === 'comment') {
          Object.setPrototypeOf(e, o.prototype);
        }
        e[n] = true;
        if (e.nodes) {
          e.nodes.forEach((e) => {
            p.rebuild(e);
          });
        }
      };
    },
    42671: (e, t, r) => {
      'use strict';
      let i = r(74241);
      let n = r(22868);
      class s extends Error {
        constructor(e, t, r, i, n, o) {
          super(e);
          this.name = 'CssSyntaxError';
          this.reason = e;
          if (n) {
            this.file = n;
          }
          if (i) {
            this.source = i;
          }
          if (o) {
            this.plugin = o;
          }
          if (typeof t !== 'undefined' && typeof r !== 'undefined') {
            this.line = t;
            this.column = r;
          }
          this.setMessage();
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, s);
          }
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ': ' : '';
          this.message += this.file ? this.file : '<css input>';
          if (typeof this.line !== 'undefined') {
            this.message += ':' + this.line + ':' + this.column;
          }
          this.message += ': ' + this.reason;
        }
        showSourceCode(e) {
          if (!this.source) return '';
          let t = this.source;
          if (e == null) e = i.isColorSupported;
          if (n) {
            if (e) t = n(t);
          }
          let r = t.split(/\r?\n/);
          let s = Math.max(this.line - 3, 0);
          let o = Math.min(this.line + 2, r.length);
          let a = String(o).length;
          let l, u;
          if (e) {
            let { bold: e, red: t, gray: r } = i.createColors(true);
            l = (r) => e(t(r));
            u = (e) => r(e);
          } else {
            l = u = (e) => e;
          }
          return r
            .slice(s, o)
            .map((e, t) => {
              let r = s + 1 + t;
              let i = ' ' + (' ' + r).slice(-a) + ' | ';
              if (r === this.line) {
                let t =
                  u(i.replace(/\d/g, ' ')) +
                  e.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
                return l('>') + u(i) + e + '\n ' + t + l('^');
              }
              return ' ' + u(i) + e;
            })
            .join('\n');
        }
        toString() {
          let e = this.showSourceCode();
          if (e) {
            e = '\n\n' + e + '\n';
          }
          return this.name + ': ' + this.message + e;
        }
      }
      e.exports = s;
      s.default = s;
    },
    94258: (e, t, r) => {
      'use strict';
      let i = r(65631);
      class n extends i {
        constructor(e) {
          if (e && typeof e.value !== 'undefined' && typeof e.value !== 'string') {
            e = { ...e, value: String(e.value) };
          }
          super(e);
          this.type = 'decl';
        }
        get variable() {
          return this.prop.startsWith('--') || this.prop[0] === '$';
        }
      }
      e.exports = n;
      n.default = n;
    },
    26461: (e, t, r) => {
      'use strict';
      let i = r(21019);
      let n, s;
      class o extends i {
        constructor(e) {
          super({ type: 'document', ...e });
          if (!this.nodes) {
            this.nodes = [];
          }
        }
        toResult(e = {}) {
          let t = new n(new s(), this, e);
          return t.stringify();
        }
      }
      o.registerLazyResult = (e) => {
        n = e;
      };
      o.registerProcessor = (e) => {
        s = e;
      };
      e.exports = o;
      o.default = o;
    },
    50250: (e, t, r) => {
      'use strict';
      let i = r(94258);
      let n = r(47981);
      let s = r(69932);
      let o = r(41353);
      let a = r(5995);
      let l = r(41025);
      let u = r(31675);
      function c(e, t) {
        if (Array.isArray(e)) return e.map((e) => c(e));
        let { inputs: r, ...f } = e;
        if (r) {
          t = [];
          for (let e of r) {
            let r = { ...e, __proto__: a.prototype };
            if (r.map) {
              r.map = { ...r.map, __proto__: n.prototype };
            }
            t.push(r);
          }
        }
        if (f.nodes) {
          f.nodes = e.nodes.map((e) => c(e, t));
        }
        if (f.source) {
          let { inputId: e, ...r } = f.source;
          f.source = r;
          if (e != null) {
            f.source.input = t[e];
          }
        }
        if (f.type === 'root') {
          return new l(f);
        } else if (f.type === 'decl') {
          return new i(f);
        } else if (f.type === 'rule') {
          return new u(f);
        } else if (f.type === 'comment') {
          return new s(f);
        } else if (f.type === 'atrule') {
          return new o(f);
        } else {
          throw new Error('Unknown node type: ' + e.type);
        }
      }
      e.exports = c;
      c.default = c;
    },
    5995: (e, t, r) => {
      'use strict';
      let { SourceMapConsumer: i, SourceMapGenerator: n } = r(70209);
      let { fileURLToPath: s, pathToFileURL: o } = r(87414);
      let { resolve: a, isAbsolute: l } = r(99830);
      let { nanoid: u } = r(36394);
      let c = r(22868);
      let f = r(42671);
      let h = r(47981);
      let p = Symbol('fromOffsetCache');
      let d = Boolean(i && n);
      let m = Boolean(a && l);
      class g {
        constructor(e, t = {}) {
          if (
            e === null ||
            typeof e === 'undefined' ||
            (typeof e === 'object' && !e.toString)
          ) {
            throw new Error(`PostCSS received ${e} instead of CSS string`);
          }
          this.css = e.toString();
          if (this.css[0] === '\ufeff' || this.css[0] === '￾') {
            this.hasBOM = true;
            this.css = this.css.slice(1);
          } else {
            this.hasBOM = false;
          }
          if (t.from) {
            if (!m || /^\w+:\/\//.test(t.from) || l(t.from)) {
              this.file = t.from;
            } else {
              this.file = a(t.from);
            }
          }
          if (m && d) {
            let e = new h(this.css, t);
            if (e.text) {
              this.map = e;
              let t = e.consumer().file;
              if (!this.file && t) this.file = this.mapResolve(t);
            }
          }
          if (!this.file) {
            this.id = '<input css ' + u(6) + '>';
          }
          if (this.map) this.map.file = this.from;
        }
        fromOffset(e) {
          let t, r;
          if (!this[p]) {
            let e = this.css.split('\n');
            r = new Array(e.length);
            let t = 0;
            for (let i = 0, n = e.length; i < n; i++) {
              r[i] = t;
              t += e[i].length + 1;
            }
            this[p] = r;
          } else {
            r = this[p];
          }
          t = r[r.length - 1];
          let i = 0;
          if (e >= t) {
            i = r.length - 1;
          } else {
            let t = r.length - 2;
            let n;
            while (i < t) {
              n = i + ((t - i) >> 1);
              if (e < r[n]) {
                t = n - 1;
              } else if (e >= r[n + 1]) {
                i = n + 1;
              } else {
                i = n;
                break;
              }
            }
          }
          return { line: i + 1, col: e - r[i] + 1 };
        }
        error(e, t, r, i = {}) {
          let n;
          if (!r) {
            let e = this.fromOffset(t);
            t = e.line;
            r = e.col;
          }
          let s = this.origin(t, r);
          if (s) {
            n = new f(e, s.line, s.column, s.source, s.file, i.plugin);
          } else {
            n = new f(e, t, r, this.css, this.file, i.plugin);
          }
          n.input = { line: t, column: r, source: this.css };
          if (this.file) {
            if (o) {
              n.input.url = o(this.file).toString();
            }
            n.input.file = this.file;
          }
          return n;
        }
        origin(e, t) {
          if (!this.map) return false;
          let r = this.map.consumer();
          let i = r.originalPositionFor({ line: e, column: t });
          if (!i.source) return false;
          let n;
          if (l(i.source)) {
            n = o(i.source);
          } else {
            n = new URL(
              i.source,
              this.map.consumer().sourceRoot || o(this.map.mapFile)
            );
          }
          let a = { url: n.toString(), line: i.line, column: i.column };
          if (n.protocol === 'file:') {
            if (s) {
              a.file = s(n);
            } else {
              throw new Error(`file: protocol is not available in this PostCSS build`);
            }
          }
          let u = r.sourceContentFor(i.source);
          if (u) a.source = u;
          return a;
        }
        mapResolve(e) {
          if (/^\w+:\/\//.test(e)) {
            return e;
          }
          return a(this.map.consumer().sourceRoot || this.map.root || '.', e);
        }
        get from() {
          return this.file || this.id;
        }
        toJSON() {
          let e = {};
          for (let t of ['hasBOM', 'css', 'file', 'id']) {
            if (this[t] != null) {
              e[t] = this[t];
            }
          }
          if (this.map) {
            e.map = { ...this.map };
            if (e.map.consumerCache) {
              e.map.consumerCache = undefined;
            }
          }
          return e;
        }
      }
      e.exports = g;
      g.default = g;
      if (c && c.registerInput) {
        c.registerInput(g);
      }
    },
    21939: (e, t, r) => {
      'use strict';
      let { isClean: i, my: n } = r(65513);
      let s = r(48505);
      let o = r(67088);
      let a = r(21019);
      let l = r(26461);
      let u = r(72448);
      let c = r(83632);
      let f = r(66939);
      let h = r(41025);
      const p = {
        document: 'Document',
        root: 'Root',
        atrule: 'AtRule',
        rule: 'Rule',
        decl: 'Declaration',
        comment: 'Comment',
      };
      const d = {
        postcssPlugin: true,
        prepare: true,
        Once: true,
        Document: true,
        Root: true,
        Declaration: true,
        Rule: true,
        AtRule: true,
        Comment: true,
        DeclarationExit: true,
        RuleExit: true,
        AtRuleExit: true,
        CommentExit: true,
        RootExit: true,
        DocumentExit: true,
        OnceExit: true,
      };
      const m = { postcssPlugin: true, prepare: true, Once: true };
      const g = 0;
      function b(e) {
        return typeof e === 'object' && typeof e.then === 'function';
      }
      function y(e) {
        let t = false;
        let r = p[e.type];
        if (e.type === 'decl') {
          t = e.prop.toLowerCase();
        } else if (e.type === 'atrule') {
          t = e.name.toLowerCase();
        }
        if (t && e.append) {
          return [r, r + '-' + t, g, r + 'Exit', r + 'Exit-' + t];
        } else if (t) {
          return [r, r + '-' + t, r + 'Exit', r + 'Exit-' + t];
        } else if (e.append) {
          return [r, g, r + 'Exit'];
        } else {
          return [r, r + 'Exit'];
        }
      }
      function v(e) {
        let t;
        if (e.type === 'document') {
          t = ['Document', g, 'DocumentExit'];
        } else if (e.type === 'root') {
          t = ['Root', g, 'RootExit'];
        } else {
          t = y(e);
        }
        return {
          node: e,
          events: t,
          eventIndex: 0,
          visitors: [],
          visitorIndex: 0,
          iterator: 0,
        };
      }
      function w(e) {
        e[i] = false;
        if (e.nodes) e.nodes.forEach((e) => w(e));
        return e;
      }
      let x = {};
      class S {
        constructor(e, t, r) {
          this.stringified = false;
          this.processed = false;
          let i;
          if (
            typeof t === 'object' &&
            t !== null &&
            (t.type === 'root' || t.type === 'document')
          ) {
            i = w(t);
          } else if (t instanceof S || t instanceof c) {
            i = w(t.root);
            if (t.map) {
              if (typeof r.map === 'undefined') r.map = {};
              if (!r.map.inline) r.map.inline = false;
              r.map.prev = t.map;
            }
          } else {
            let e = f;
            if (r.syntax) e = r.syntax.parse;
            if (r.parser) e = r.parser;
            if (e.parse) e = e.parse;
            try {
              i = e(t, r);
            } catch (s) {
              this.processed = true;
              this.error = s;
            }
            if (i && !i[n]) {
              a.rebuild(i);
            }
          }
          this.result = new c(e, i, r);
          this.helpers = { ...x, result: this.result, postcss: x };
          this.plugins = this.processor.plugins.map((e) => {
            if (typeof e === 'object' && e.prepare) {
              return { ...e, ...e.prepare(this.result) };
            } else {
              return e;
            }
          });
        }
        get [Symbol.toStringTag]() {
          return 'LazyResult';
        }
        get processor() {
          return this.result.processor;
        }
        get opts() {
          return this.result.opts;
        }
        get css() {
          return this.stringify().css;
        }
        get content() {
          return this.stringify().content;
        }
        get map() {
          return this.stringify().map;
        }
        get root() {
          return this.sync().root;
        }
        get messages() {
          return this.sync().messages;
        }
        warnings() {
          return this.sync().warnings();
        }
        toString() {
          return this.css;
        }
        then(e, t) {
          if (false) {
          }
          return this.async().then(e, t);
        }
        catch(e) {
          return this.async().catch(e);
        }
        finally(e) {
          return this.async().then(e, e);
        }
        async() {
          if (this.error) return Promise.reject(this.error);
          if (this.processed) return Promise.resolve(this.result);
          if (!this.processing) {
            this.processing = this.runAsync();
          }
          return this.processing;
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          this.processed = true;
          if (this.processing) {
            throw this.getAsyncError();
          }
          for (let e of this.plugins) {
            let t = this.runOnRoot(e);
            if (b(t)) {
              throw this.getAsyncError();
            }
          }
          this.prepareVisitors();
          if (this.hasListener) {
            let e = this.result.root;
            while (!e[i]) {
              e[i] = true;
              this.walkSync(e);
            }
            if (this.listeners.OnceExit) {
              if (e.type === 'document') {
                for (let t of e.nodes) {
                  this.visitSync(this.listeners.OnceExit, t);
                }
              } else {
                this.visitSync(this.listeners.OnceExit, e);
              }
            }
          }
          return this.result;
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = true;
          this.sync();
          let e = this.result.opts;
          let t = o;
          if (e.syntax) t = e.syntax.stringify;
          if (e.stringifier) t = e.stringifier;
          if (t.stringify) t = t.stringify;
          let r = new s(t, this.result.root, this.result.opts);
          let i = r.generate();
          this.result.css = i[0];
          this.result.map = i[1];
          return this.result;
        }
        walkSync(e) {
          e[i] = true;
          let t = y(e);
          for (let r of t) {
            if (r === g) {
              if (e.nodes) {
                e.each((e) => {
                  if (!e[i]) this.walkSync(e);
                });
              }
            } else {
              let t = this.listeners[r];
              if (t) {
                if (this.visitSync(t, e.toProxy())) return;
              }
            }
          }
        }
        visitSync(e, t) {
          for (let [i, n] of e) {
            this.result.lastPlugin = i;
            let e;
            try {
              e = n(t, this.helpers);
            } catch (r) {
              throw this.handleError(r, t.proxyOf);
            }
            if (t.type !== 'root' && t.type !== 'document' && !t.parent) {
              return true;
            }
            if (b(e)) {
              throw this.getAsyncError();
            }
          }
        }
        runOnRoot(e) {
          this.result.lastPlugin = e;
          try {
            if (typeof e === 'object' && e.Once) {
              if (this.result.root.type === 'document') {
                let t = this.result.root.nodes.map((t) => e.Once(t, this.helpers));
                if (b(t[0])) {
                  return Promise.all(t);
                }
                return t;
              }
              return e.Once(this.result.root, this.helpers);
            } else if (typeof e === 'function') {
              return e(this.result.root, this.result);
            }
          } catch (t) {
            throw this.handleError(t);
          }
        }
        getAsyncError() {
          throw new Error('Use process(css).then(cb) to work with async plugins');
        }
        handleError(e, t) {
          let r = this.result.lastPlugin;
          try {
            if (t) t.addToError(e);
            this.error = e;
            if (e.name === 'CssSyntaxError' && !e.plugin) {
              e.plugin = r.postcssPlugin;
              e.setMessage();
            } else if (r.postcssVersion) {
              if (false) {
              }
            }
          } catch (i) {
            if (console && console.error) console.error(i);
          }
          return e;
        }
        async runAsync() {
          this.plugin = 0;
          for (let r = 0; r < this.plugins.length; r++) {
            let t = this.plugins[r];
            let i = this.runOnRoot(t);
            if (b(i)) {
              try {
                await i;
              } catch (e) {
                throw this.handleError(e);
              }
            }
          }
          this.prepareVisitors();
          if (this.hasListener) {
            let e = this.result.root;
            while (!e[i]) {
              e[i] = true;
              let r = [v(e)];
              while (r.length > 0) {
                let e = this.visitTick(r);
                if (b(e)) {
                  try {
                    await e;
                  } catch (t) {
                    let e = r[r.length - 1].node;
                    throw this.handleError(t, e);
                  }
                }
              }
            }
            if (this.listeners.OnceExit) {
              for (let [r, i] of this.listeners.OnceExit) {
                this.result.lastPlugin = r;
                try {
                  if (e.type === 'document') {
                    let t = e.nodes.map((e) => i(e, this.helpers));
                    await Promise.all(t);
                  } else {
                    await i(e, this.helpers);
                  }
                } catch (t) {
                  throw this.handleError(t);
                }
              }
            }
          }
          this.processed = true;
          return this.stringify();
        }
        prepareVisitors() {
          this.listeners = {};
          let e = (e, t, r) => {
            if (!this.listeners[t]) this.listeners[t] = [];
            this.listeners[t].push([e, r]);
          };
          for (let t of this.plugins) {
            if (typeof t === 'object') {
              for (let r in t) {
                if (!d[r] && /^[A-Z]/.test(r)) {
                  throw new Error(
                    `Unknown event ${r} in ${t.postcssPlugin}. ` +
                      `Try to update PostCSS (${this.processor.version} now).`
                  );
                }
                if (!m[r]) {
                  if (typeof t[r] === 'object') {
                    for (let i in t[r]) {
                      if (i === '*') {
                        e(t, r, t[r][i]);
                      } else {
                        e(t, r + '-' + i.toLowerCase(), t[r][i]);
                      }
                    }
                  } else if (typeof t[r] === 'function') {
                    e(t, r, t[r]);
                  }
                }
              }
            }
          }
          this.hasListener = Object.keys(this.listeners).length > 0;
        }
        visitTick(e) {
          let t = e[e.length - 1];
          let { node: r, visitors: n } = t;
          if (r.type !== 'root' && r.type !== 'document' && !r.parent) {
            e.pop();
            return;
          }
          if (n.length > 0 && t.visitorIndex < n.length) {
            let [e, i] = n[t.visitorIndex];
            t.visitorIndex += 1;
            if (t.visitorIndex === n.length) {
              t.visitors = [];
              t.visitorIndex = 0;
            }
            this.result.lastPlugin = e;
            try {
              return i(r.toProxy(), this.helpers);
            } catch (o) {
              throw this.handleError(o, r);
            }
          }
          if (t.iterator !== 0) {
            let n = t.iterator;
            let s;
            while ((s = r.nodes[r.indexes[n]])) {
              r.indexes[n] += 1;
              if (!s[i]) {
                s[i] = true;
                e.push(v(s));
                return;
              }
            }
            t.iterator = 0;
            delete r.indexes[n];
          }
          let s = t.events;
          while (t.eventIndex < s.length) {
            let e = s[t.eventIndex];
            t.eventIndex += 1;
            if (e === g) {
              if (r.nodes && r.nodes.length) {
                r[i] = true;
                t.iterator = r.getIterator();
              }
              return;
            } else if (this.listeners[e]) {
              t.visitors = this.listeners[e];
              return;
            }
          }
          e.pop();
        }
      }
      S.registerPostcss = (e) => {
        x = e;
      };
      e.exports = S;
      S.default = S;
      h.registerLazyResult(S);
      l.registerLazyResult(S);
    },
    54715: (e) => {
      'use strict';
      let t = {
        split(e, t, r) {
          let i = [];
          let n = '';
          let s = false;
          let o = 0;
          let a = false;
          let l = false;
          for (let u of e) {
            if (l) {
              l = false;
            } else if (u === '\\') {
              l = true;
            } else if (a) {
              if (u === a) {
                a = false;
              }
            } else if (u === '"' || u === "'") {
              a = u;
            } else if (u === '(') {
              o += 1;
            } else if (u === ')') {
              if (o > 0) o -= 1;
            } else if (o === 0) {
              if (t.includes(u)) s = true;
            }
            if (s) {
              if (n !== '') i.push(n.trim());
              n = '';
              s = false;
            } else {
              n += u;
            }
          }
          if (r || n !== '') i.push(n.trim());
          return i;
        },
        space(e) {
          let r = [' ', '\n', '\t'];
          return t.split(e, r);
        },
        comma(e) {
          return t.split(e, [','], true);
        },
      };
      e.exports = t;
      t.default = t;
    },
    48505: (e, t, r) => {
      'use strict';
      let { SourceMapConsumer: i, SourceMapGenerator: n } = r(70209);
      let { dirname: s, resolve: o, relative: a, sep: l } = r(99830);
      let { pathToFileURL: u } = r(87414);
      let c = Boolean(i && n);
      let f = Boolean(s && o && a && l);
      class h {
        constructor(e, t, r) {
          this.stringify = e;
          this.mapOpts = r.map || {};
          this.root = t;
          this.opts = r;
        }
        isMap() {
          if (typeof this.opts.map !== 'undefined') {
            return !!this.opts.map;
          }
          return this.previous().length > 0;
        }
        previous() {
          if (!this.previousMaps) {
            this.previousMaps = [];
            this.root.walk((e) => {
              if (e.source && e.source.input.map) {
                let t = e.source.input.map;
                if (!this.previousMaps.includes(t)) {
                  this.previousMaps.push(t);
                }
              }
            });
          }
          return this.previousMaps;
        }
        isInline() {
          if (typeof this.mapOpts.inline !== 'undefined') {
            return this.mapOpts.inline;
          }
          let e = this.mapOpts.annotation;
          if (typeof e !== 'undefined' && e !== true) {
            return false;
          }
          if (this.previous().length) {
            return this.previous().some((e) => e.inline);
          }
          return true;
        }
        isSourcesContent() {
          if (typeof this.mapOpts.sourcesContent !== 'undefined') {
            return this.mapOpts.sourcesContent;
          }
          if (this.previous().length) {
            return this.previous().some((e) => e.withContent());
          }
          return true;
        }
        clearAnnotation() {
          if (this.mapOpts.annotation === false) return;
          let e;
          for (let t = this.root.nodes.length - 1; t >= 0; t--) {
            e = this.root.nodes[t];
            if (e.type !== 'comment') continue;
            if (e.text.indexOf('# sourceMappingURL=') === 0) {
              this.root.removeChild(t);
            }
          }
        }
        setSourcesContent() {
          let e = {};
          this.root.walk((t) => {
            if (t.source) {
              let r = t.source.input.from;
              if (r && !e[r]) {
                e[r] = true;
                this.map.setSourceContent(this.toUrl(this.path(r)), t.source.input.css);
              }
            }
          });
        }
        applyPrevMaps() {
          for (let e of this.previous()) {
            let t = this.toUrl(this.path(e.file));
            let r = e.root || s(e.file);
            let n;
            if (this.mapOpts.sourcesContent === false) {
              n = new i(e.text);
              if (n.sourcesContent) {
                n.sourcesContent = n.sourcesContent.map(() => null);
              }
            } else {
              n = e.consumer();
            }
            this.map.applySourceMap(n, t, this.toUrl(this.path(r)));
          }
        }
        isAnnotation() {
          if (this.isInline()) {
            return true;
          }
          if (typeof this.mapOpts.annotation !== 'undefined') {
            return this.mapOpts.annotation;
          }
          if (this.previous().length) {
            return this.previous().some((e) => e.annotation);
          }
          return true;
        }
        toBase64(e) {
          if (Buffer) {
            return Buffer.from(e).toString('base64');
          } else {
            return window.btoa(unescape(encodeURIComponent(e)));
          }
        }
        addAnnotation() {
          let e;
          if (this.isInline()) {
            e = 'data:application/json;base64,' + this.toBase64(this.map.toString());
          } else if (typeof this.mapOpts.annotation === 'string') {
            e = this.mapOpts.annotation;
          } else if (typeof this.mapOpts.annotation === 'function') {
            e = this.mapOpts.annotation(this.opts.to, this.root);
          } else {
            e = this.outputFile() + '.map';
          }
          let t = '\n';
          if (this.css.includes('\r\n')) t = '\r\n';
          this.css += t + '/*# sourceMappingURL=' + e + ' */';
        }
        outputFile() {
          if (this.opts.to) {
            return this.path(this.opts.to);
          }
          if (this.opts.from) {
            return this.path(this.opts.from);
          }
          return 'to.css';
        }
        generateMap() {
          this.generateString();
          if (this.isSourcesContent()) this.setSourcesContent();
          if (this.previous().length > 0) this.applyPrevMaps();
          if (this.isAnnotation()) this.addAnnotation();
          if (this.isInline()) {
            return [this.css];
          }
          return [this.css, this.map];
        }
        path(e) {
          if (e.indexOf('<') === 0) return e;
          if (/^\w+:\/\//.test(e)) return e;
          if (this.mapOpts.absolute) return e;
          let t = this.opts.to ? s(this.opts.to) : '.';
          if (typeof this.mapOpts.annotation === 'string') {
            t = s(o(t, this.mapOpts.annotation));
          }
          e = a(t, e);
          return e;
        }
        toUrl(e) {
          if (l === '\\') {
            e = e.replace(/\\/g, '/');
          }
          return encodeURI(e).replace(/[#?]/g, encodeURIComponent);
        }
        sourcePath(e) {
          if (this.mapOpts.from) {
            return this.toUrl(this.mapOpts.from);
          } else if (this.mapOpts.absolute) {
            if (u) {
              return u(e.source.input.from).toString();
            } else {
              throw new Error(
                '`map.absolute` option is not available in this PostCSS build'
              );
            }
          } else {
            return this.toUrl(this.path(e.source.input.from));
          }
        }
        generateString() {
          this.css = '';
          this.map = new n({ file: this.outputFile() });
          let e = 1;
          let t = 1;
          let r = '<no source>';
          let i = {
            source: '',
            generated: { line: 0, column: 0 },
            original: { line: 0, column: 0 },
          };
          let s, o;
          this.stringify(this.root, (n, a, l) => {
            this.css += n;
            if (a && l !== 'end') {
              i.generated.line = e;
              i.generated.column = t - 1;
              if (a.source && a.source.start) {
                i.source = this.sourcePath(a);
                i.original.line = a.source.start.line;
                i.original.column = a.source.start.column - 1;
                this.map.addMapping(i);
              } else {
                i.source = r;
                i.original.line = 1;
                i.original.column = 0;
                this.map.addMapping(i);
              }
            }
            s = n.match(/\n/g);
            if (s) {
              e += s.length;
              o = n.lastIndexOf('\n');
              t = n.length - o;
            } else {
              t += n.length;
            }
            if (a && l !== 'start') {
              let n = a.parent || { raws: {} };
              if (a.type !== 'decl' || a !== n.last || n.raws.semicolon) {
                if (a.source && a.source.end) {
                  i.source = this.sourcePath(a);
                  i.original.line = a.source.end.line;
                  i.original.column = a.source.end.column - 1;
                  i.generated.line = e;
                  i.generated.column = t - 2;
                  this.map.addMapping(i);
                } else {
                  i.source = r;
                  i.original.line = 1;
                  i.original.column = 0;
                  i.generated.line = e;
                  i.generated.column = t - 1;
                  this.map.addMapping(i);
                }
              }
            }
          });
        }
        generate() {
          this.clearAnnotation();
          if (f && c && this.isMap()) {
            return this.generateMap();
          }
          let e = '';
          this.stringify(this.root, (t) => {
            e += t;
          });
          return [e];
        }
      }
      e.exports = h;
    },
    65631: (e, t, r) => {
      'use strict';
      let { isClean: i, my: n } = r(65513);
      let s = r(42671);
      let o = r(1062);
      let a = r(67088);
      function l(e, t) {
        let r = new e.constructor();
        for (let i in e) {
          if (!Object.prototype.hasOwnProperty.call(e, i)) {
            continue;
          }
          if (i === 'proxyCache') continue;
          let n = e[i];
          let s = typeof n;
          if (i === 'parent' && s === 'object') {
            if (t) r[i] = t;
          } else if (i === 'source') {
            r[i] = n;
          } else if (Array.isArray(n)) {
            r[i] = n.map((e) => l(e, r));
          } else {
            if (s === 'object' && n !== null) n = l(n);
            r[i] = n;
          }
        }
        return r;
      }
      class u {
        constructor(e = {}) {
          this.raws = {};
          this[i] = false;
          this[n] = true;
          for (let t in e) {
            if (t === 'nodes') {
              this.nodes = [];
              for (let r of e[t]) {
                if (typeof r.clone === 'function') {
                  this.append(r.clone());
                } else {
                  this.append(r);
                }
              }
            } else {
              this[t] = e[t];
            }
          }
        }
        error(e, t = {}) {
          if (this.source) {
            let r = this.positionBy(t);
            return this.source.input.error(e, r.line, r.column, t);
          }
          return new s(e);
        }
        warn(e, t, r) {
          let i = { node: this };
          for (let n in r) i[n] = r[n];
          return e.warn(t, i);
        }
        remove() {
          if (this.parent) {
            this.parent.removeChild(this);
          }
          this.parent = undefined;
          return this;
        }
        toString(e = a) {
          if (e.stringify) e = e.stringify;
          let t = '';
          e(this, (e) => {
            t += e;
          });
          return t;
        }
        assign(e = {}) {
          for (let t in e) {
            this[t] = e[t];
          }
          return this;
        }
        clone(e = {}) {
          let t = l(this);
          for (let r in e) {
            t[r] = e[r];
          }
          return t;
        }
        cloneBefore(e = {}) {
          let t = this.clone(e);
          this.parent.insertBefore(this, t);
          return t;
        }
        cloneAfter(e = {}) {
          let t = this.clone(e);
          this.parent.insertAfter(this, t);
          return t;
        }
        replaceWith(...e) {
          if (this.parent) {
            let t = this;
            let r = false;
            for (let i of e) {
              if (i === this) {
                r = true;
              } else if (r) {
                this.parent.insertAfter(t, i);
                t = i;
              } else {
                this.parent.insertBefore(t, i);
              }
            }
            if (!r) {
              this.remove();
            }
          }
          return this;
        }
        next() {
          if (!this.parent) return undefined;
          let e = this.parent.index(this);
          return this.parent.nodes[e + 1];
        }
        prev() {
          if (!this.parent) return undefined;
          let e = this.parent.index(this);
          return this.parent.nodes[e - 1];
        }
        before(e) {
          this.parent.insertBefore(this, e);
          return this;
        }
        after(e) {
          this.parent.insertAfter(this, e);
          return this;
        }
        root() {
          let e = this;
          while (e.parent && e.parent.type !== 'document') {
            e = e.parent;
          }
          return e;
        }
        raw(e, t) {
          let r = new o();
          return r.raw(this, e, t);
        }
        cleanRaws(e) {
          delete this.raws.before;
          delete this.raws.after;
          if (!e) delete this.raws.between;
        }
        toJSON(e, t) {
          let r = {};
          let i = t == null;
          t = t || new Map();
          let n = 0;
          for (let s in this) {
            if (!Object.prototype.hasOwnProperty.call(this, s)) {
              continue;
            }
            if (s === 'parent' || s === 'proxyCache') continue;
            let e = this[s];
            if (Array.isArray(e)) {
              r[s] = e.map((e) => {
                if (typeof e === 'object' && e.toJSON) {
                  return e.toJSON(null, t);
                } else {
                  return e;
                }
              });
            } else if (typeof e === 'object' && e.toJSON) {
              r[s] = e.toJSON(null, t);
            } else if (s === 'source') {
              let i = t.get(e.input);
              if (i == null) {
                i = n;
                t.set(e.input, n);
                n++;
              }
              r[s] = { inputId: i, start: e.start, end: e.end };
            } else {
              r[s] = e;
            }
          }
          if (i) {
            r.inputs = [...t.keys()].map((e) => e.toJSON());
          }
          return r;
        }
        positionInside(e) {
          let t = this.toString();
          let r = this.source.start.column;
          let i = this.source.start.line;
          for (let n = 0; n < e; n++) {
            if (t[n] === '\n') {
              r = 1;
              i += 1;
            } else {
              r += 1;
            }
          }
          return { line: i, column: r };
        }
        positionBy(e) {
          let t = this.source.start;
          if (e.index) {
            t = this.positionInside(e.index);
          } else if (e.word) {
            let r = this.toString().indexOf(e.word);
            if (r !== -1) t = this.positionInside(r);
          }
          return t;
        }
        getProxyProcessor() {
          return {
            set(e, t, r) {
              if (e[t] === r) return true;
              e[t] = r;
              if (
                t === 'prop' ||
                t === 'value' ||
                t === 'name' ||
                t === 'params' ||
                t === 'important' ||
                t === 'text'
              ) {
                e.markDirty();
              }
              return true;
            },
            get(e, t) {
              if (t === 'proxyOf') {
                return e;
              } else if (t === 'root') {
                return () => e.root().toProxy();
              } else {
                return e[t];
              }
            },
          };
        }
        toProxy() {
          if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
          }
          return this.proxyCache;
        }
        addToError(e) {
          e.postcssNode = this;
          if (e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
            let t = this.source;
            e.stack = e.stack.replace(
              /\n\s{4}at /,
              `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
            );
          }
          return e;
        }
        markDirty() {
          if (this[i]) {
            this[i] = false;
            let e = this;
            while ((e = e.parent)) {
              e[i] = false;
            }
          }
        }
        get proxyOf() {
          return this;
        }
      }
      e.exports = u;
      u.default = u;
    },
    66939: (e, t, r) => {
      'use strict';
      let i = r(21019);
      let n = r(68867);
      let s = r(5995);
      function o(e, t) {
        let r = new s(e, t);
        let i = new n(r);
        try {
          i.parse();
        } catch (o) {
          if (false) {
          }
          throw o;
        }
        return i.root;
      }
      e.exports = o;
      o.default = o;
      i.registerParse(o);
    },
    68867: (e, t, r) => {
      'use strict';
      let i = r(94258);
      let n = r(83852);
      let s = r(69932);
      let o = r(41353);
      let a = r(41025);
      let l = r(31675);
      class u {
        constructor(e) {
          this.input = e;
          this.root = new a();
          this.current = this.root;
          this.spaces = '';
          this.semicolon = false;
          this.customProperty = false;
          this.createTokenizer();
          this.root.source = { input: e, start: { offset: 0, line: 1, column: 1 } };
        }
        createTokenizer() {
          this.tokenizer = n(this.input);
        }
        parse() {
          let e;
          while (!this.tokenizer.endOfFile()) {
            e = this.tokenizer.nextToken();
            switch (e[0]) {
              case 'space':
                this.spaces += e[1];
                break;
              case ';':
                this.freeSemicolon(e);
                break;
              case '}':
                this.end(e);
                break;
              case 'comment':
                this.comment(e);
                break;
              case 'at-word':
                this.atrule(e);
                break;
              case '{':
                this.emptyRule(e);
                break;
              default:
                this.other(e);
                break;
            }
          }
          this.endFile();
        }
        comment(e) {
          let t = new s();
          this.init(t, e[2]);
          t.source.end = this.getPosition(e[3] || e[2]);
          let r = e[1].slice(2, -2);
          if (/^\s*$/.test(r)) {
            t.text = '';
            t.raws.left = r;
            t.raws.right = '';
          } else {
            let e = r.match(/^(\s*)([^]*\S)(\s*)$/);
            t.text = e[2];
            t.raws.left = e[1];
            t.raws.right = e[3];
          }
        }
        emptyRule(e) {
          let t = new l();
          this.init(t, e[2]);
          t.selector = '';
          t.raws.between = '';
          this.current = t;
        }
        other(e) {
          let t = false;
          let r = null;
          let i = false;
          let n = null;
          let s = [];
          let o = e[1].startsWith('--');
          let a = [];
          let l = e;
          while (l) {
            r = l[0];
            a.push(l);
            if (r === '(' || r === '[') {
              if (!n) n = l;
              s.push(r === '(' ? ')' : ']');
            } else if (o && i && r === '{') {
              if (!n) n = l;
              s.push('}');
            } else if (s.length === 0) {
              if (r === ';') {
                if (i) {
                  this.decl(a, o);
                  return;
                } else {
                  break;
                }
              } else if (r === '{') {
                this.rule(a);
                return;
              } else if (r === '}') {
                this.tokenizer.back(a.pop());
                t = true;
                break;
              } else if (r === ':') {
                i = true;
              }
            } else if (r === s[s.length - 1]) {
              s.pop();
              if (s.length === 0) n = null;
            }
            l = this.tokenizer.nextToken();
          }
          if (this.tokenizer.endOfFile()) t = true;
          if (s.length > 0) this.unclosedBracket(n);
          if (t && i) {
            while (a.length) {
              l = a[a.length - 1][0];
              if (l !== 'space' && l !== 'comment') break;
              this.tokenizer.back(a.pop());
            }
            this.decl(a, o);
          } else {
            this.unknownWord(a);
          }
        }
        rule(e) {
          e.pop();
          let t = new l();
          this.init(t, e[0][2]);
          t.raws.between = this.spacesAndCommentsFromEnd(e);
          this.raw(t, 'selector', e);
          this.current = t;
        }
        decl(e, t) {
          let r = new i();
          this.init(r, e[0][2]);
          let n = e[e.length - 1];
          if (n[0] === ';') {
            this.semicolon = true;
            e.pop();
          }
          r.source.end = this.getPosition(n[3] || n[2]);
          while (e[0][0] !== 'word') {
            if (e.length === 1) this.unknownWord(e);
            r.raws.before += e.shift()[1];
          }
          r.source.start = this.getPosition(e[0][2]);
          r.prop = '';
          while (e.length) {
            let t = e[0][0];
            if (t === ':' || t === 'space' || t === 'comment') {
              break;
            }
            r.prop += e.shift()[1];
          }
          r.raws.between = '';
          let s;
          while (e.length) {
            s = e.shift();
            if (s[0] === ':') {
              r.raws.between += s[1];
              break;
            } else {
              if (s[0] === 'word' && /\w/.test(s[1])) {
                this.unknownWord([s]);
              }
              r.raws.between += s[1];
            }
          }
          if (r.prop[0] === '_' || r.prop[0] === '*') {
            r.raws.before += r.prop[0];
            r.prop = r.prop.slice(1);
          }
          let o = this.spacesAndCommentsFromStart(e);
          this.precheckMissedSemicolon(e);
          for (let i = e.length - 1; i >= 0; i--) {
            s = e[i];
            if (s[1].toLowerCase() === '!important') {
              r.important = true;
              let t = this.stringFrom(e, i);
              t = this.spacesFromEnd(e) + t;
              if (t !== ' !important') r.raws.important = t;
              break;
            } else if (s[1].toLowerCase() === 'important') {
              let t = e.slice(0);
              let n = '';
              for (let e = i; e > 0; e--) {
                let r = t[e][0];
                if (n.trim().indexOf('!') === 0 && r !== 'space') {
                  break;
                }
                n = t.pop()[1] + n;
              }
              if (n.trim().indexOf('!') === 0) {
                r.important = true;
                r.raws.important = n;
                e = t;
              }
            }
            if (s[0] !== 'space' && s[0] !== 'comment') {
              break;
            }
          }
          let a = e.some((e) => e[0] !== 'space' && e[0] !== 'comment');
          this.raw(r, 'value', e);
          if (a) {
            r.raws.between += o;
          } else {
            r.value = o + r.value;
          }
          if (r.value.includes(':') && !t) {
            this.checkMissedSemicolon(e);
          }
        }
        atrule(e) {
          let t = new o();
          t.name = e[1].slice(1);
          if (t.name === '') {
            this.unnamedAtrule(t, e);
          }
          this.init(t, e[2]);
          let r;
          let i;
          let n;
          let s = false;
          let a = false;
          let l = [];
          let u = [];
          while (!this.tokenizer.endOfFile()) {
            e = this.tokenizer.nextToken();
            r = e[0];
            if (r === '(' || r === '[') {
              u.push(r === '(' ? ')' : ']');
            } else if (r === '{' && u.length > 0) {
              u.push('}');
            } else if (r === u[u.length - 1]) {
              u.pop();
            }
            if (u.length === 0) {
              if (r === ';') {
                t.source.end = this.getPosition(e[2]);
                this.semicolon = true;
                break;
              } else if (r === '{') {
                a = true;
                break;
              } else if (r === '}') {
                if (l.length > 0) {
                  n = l.length - 1;
                  i = l[n];
                  while (i && i[0] === 'space') {
                    i = l[--n];
                  }
                  if (i) {
                    t.source.end = this.getPosition(i[3] || i[2]);
                  }
                }
                this.end(e);
                break;
              } else {
                l.push(e);
              }
            } else {
              l.push(e);
            }
            if (this.tokenizer.endOfFile()) {
              s = true;
              break;
            }
          }
          t.raws.between = this.spacesAndCommentsFromEnd(l);
          if (l.length) {
            t.raws.afterName = this.spacesAndCommentsFromStart(l);
            this.raw(t, 'params', l);
            if (s) {
              e = l[l.length - 1];
              t.source.end = this.getPosition(e[3] || e[2]);
              this.spaces = t.raws.between;
              t.raws.between = '';
            }
          } else {
            t.raws.afterName = '';
            t.params = '';
          }
          if (a) {
            t.nodes = [];
            this.current = t;
          }
        }
        end(e) {
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
          }
          this.semicolon = false;
          this.current.raws.after = (this.current.raws.after || '') + this.spaces;
          this.spaces = '';
          if (this.current.parent) {
            this.current.source.end = this.getPosition(e[2]);
            this.current = this.current.parent;
          } else {
            this.unexpectedClose(e);
          }
        }
        endFile() {
          if (this.current.parent) this.unclosedBlock();
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
          }
          this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        }
        freeSemicolon(e) {
          this.spaces += e[1];
          if (this.current.nodes) {
            let e = this.current.nodes[this.current.nodes.length - 1];
            if (e && e.type === 'rule' && !e.raws.ownSemicolon) {
              e.raws.ownSemicolon = this.spaces;
              this.spaces = '';
            }
          }
        }
        getPosition(e) {
          let t = this.input.fromOffset(e);
          return { offset: e, line: t.line, column: t.col };
        }
        init(e, t) {
          this.current.push(e);
          e.source = { start: this.getPosition(t), input: this.input };
          e.raws.before = this.spaces;
          this.spaces = '';
          if (e.type !== 'comment') this.semicolon = false;
        }
        raw(e, t, r) {
          let i, n;
          let s = r.length;
          let o = '';
          let a = true;
          let l, u;
          let c = /^([#.|])?(\w)+/i;
          for (let f = 0; f < s; f += 1) {
            i = r[f];
            n = i[0];
            if (n === 'comment' && e.type === 'rule') {
              u = r[f - 1];
              l = r[f + 1];
              if (
                u[0] !== 'space' &&
                l[0] !== 'space' &&
                c.test(u[1]) &&
                c.test(l[1])
              ) {
                o += i[1];
              } else {
                a = false;
              }
              continue;
            }
            if (n === 'comment' || (n === 'space' && f === s - 1)) {
              a = false;
            } else {
              o += i[1];
            }
          }
          if (!a) {
            let i = r.reduce((e, t) => e + t[1], '');
            e.raws[t] = { value: o, raw: i };
          }
          e[t] = o;
        }
        spacesAndCommentsFromEnd(e) {
          let t;
          let r = '';
          while (e.length) {
            t = e[e.length - 1][0];
            if (t !== 'space' && t !== 'comment') break;
            r = e.pop()[1] + r;
          }
          return r;
        }
        spacesAndCommentsFromStart(e) {
          let t;
          let r = '';
          while (e.length) {
            t = e[0][0];
            if (t !== 'space' && t !== 'comment') break;
            r += e.shift()[1];
          }
          return r;
        }
        spacesFromEnd(e) {
          let t;
          let r = '';
          while (e.length) {
            t = e[e.length - 1][0];
            if (t !== 'space') break;
            r = e.pop()[1] + r;
          }
          return r;
        }
        stringFrom(e, t) {
          let r = '';
          for (let i = t; i < e.length; i++) {
            r += e[i][1];
          }
          e.splice(t, e.length - t);
          return r;
        }
        colon(e) {
          let t = 0;
          let r, i, n;
          for (let [s, o] of e.entries()) {
            r = o;
            i = r[0];
            if (i === '(') {
              t += 1;
            }
            if (i === ')') {
              t -= 1;
            }
            if (t === 0 && i === ':') {
              if (!n) {
                this.doubleColon(r);
              } else if (n[0] === 'word' && n[1] === 'progid') {
                continue;
              } else {
                return s;
              }
            }
            n = r;
          }
          return false;
        }
        unclosedBracket(e) {
          throw this.input.error('Unclosed bracket', e[2]);
        }
        unknownWord(e) {
          throw this.input.error('Unknown word', e[0][2]);
        }
        unexpectedClose(e) {
          throw this.input.error('Unexpected }', e[2]);
        }
        unclosedBlock() {
          let e = this.current.source.start;
          throw this.input.error('Unclosed block', e.line, e.column);
        }
        doubleColon(e) {
          throw this.input.error('Double colon', e[2]);
        }
        unnamedAtrule(e, t) {
          throw this.input.error('At-rule without name', t[2]);
        }
        precheckMissedSemicolon() {}
        checkMissedSemicolon(e) {
          let t = this.colon(e);
          if (t === false) return;
          let r = 0;
          let i;
          for (let n = t - 1; n >= 0; n--) {
            i = e[n];
            if (i[0] !== 'space') {
              r += 1;
              if (r === 2) break;
            }
          }
          throw this.input.error('Missed semicolon', i[0] === 'word' ? i[3] + 1 : i[2]);
        }
      }
      e.exports = u;
    },
    50020: (e, t, r) => {
      'use strict';
      var i = r(34155);
      let n = r(42671);
      let s = r(94258);
      let o = r(21939);
      let a = r(21019);
      let l = r(71723);
      let u = r(67088);
      let c = r(50250);
      let f = r(26461);
      let h = r(11728);
      let p = r(69932);
      let d = r(41353);
      let m = r(83632);
      let g = r(5995);
      let b = r(66939);
      let y = r(54715);
      let v = r(31675);
      let w = r(41025);
      let x = r(65631);
      function S(...e) {
        if (e.length === 1 && Array.isArray(e[0])) {
          e = e[0];
        }
        return new l(e);
      }
      S.plugin = function e(t, r) {
        if (console && console.warn) {
          console.warn(
            t +
              ': postcss.plugin was deprecated. Migration guide:\n' +
              'https://evilmartians.com/chronicles/postcss-8-plugin-migration'
          );
          if (i.env.LANG && i.env.LANG.startsWith('cn')) {
            console.warn(
              t +
                ': 里面 postcss.plugin 被弃用. 迁移指南:\n' +
                'https://www.w3ctech.com/topic/2226'
            );
          }
        }
        function n(...e) {
          let i = r(...e);
          i.postcssPlugin = t;
          i.postcssVersion = new l().version;
          return i;
        }
        let s;
        Object.defineProperty(n, 'postcss', {
          get() {
            if (!s) s = n();
            return s;
          },
        });
        n.process = function (e, t, r) {
          return S([n(r)]).process(e, t);
        };
        return n;
      };
      S.stringify = u;
      S.parse = b;
      S.fromJSON = c;
      S.list = y;
      S.comment = (e) => new p(e);
      S.atRule = (e) => new d(e);
      S.decl = (e) => new s(e);
      S.rule = (e) => new v(e);
      S.root = (e) => new w(e);
      S.document = (e) => new f(e);
      S.CssSyntaxError = n;
      S.Declaration = s;
      S.Container = a;
      S.Document = f;
      S.Comment = p;
      S.Warning = h;
      S.AtRule = d;
      S.Result = m;
      S.Input = g;
      S.Rule = v;
      S.Root = w;
      S.Node = x;
      o.registerPostcss(S);
      e.exports = S;
      S.default = S;
    },
    47981: (e, t, r) => {
      'use strict';
      let { SourceMapConsumer: i, SourceMapGenerator: n } = r(70209);
      let { existsSync: s, readFileSync: o } = r(14777);
      let { dirname: a, join: l } = r(99830);
      function u(e) {
        if (Buffer) {
          return Buffer.from(e, 'base64').toString();
        } else {
          return window.atob(e);
        }
      }
      class c {
        constructor(e, t) {
          if (t.map === false) return;
          this.loadAnnotation(e);
          this.inline = this.startWith(this.annotation, 'data:');
          let r = t.map ? t.map.prev : undefined;
          let i = this.loadMap(t.from, r);
          if (!this.mapFile && t.from) {
            this.mapFile = t.from;
          }
          if (this.mapFile) this.root = a(this.mapFile);
          if (i) this.text = i;
        }
        consumer() {
          if (!this.consumerCache) {
            this.consumerCache = new i(this.text);
          }
          return this.consumerCache;
        }
        withContent() {
          return !!(
            this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0
          );
        }
        startWith(e, t) {
          if (!e) return false;
          return e.substr(0, t.length) === t;
        }
        getAnnotationURL(e) {
          return e.replace(/^\/\*\s*# sourceMappingURL=/, '').trim();
        }
        loadAnnotation(e) {
          let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!t) return;
          let r = e.lastIndexOf(t.pop());
          let i = e.indexOf('*/', r);
          if (r > -1 && i > -1) {
            this.annotation = this.getAnnotationURL(e.substring(r, i));
          }
        }
        decodeInline(e) {
          let t = /^data:application\/json;charset=utf-?8;base64,/;
          let r = /^data:application\/json;base64,/;
          let i = /^data:application\/json;charset=utf-?8,/;
          let n = /^data:application\/json,/;
          if (i.test(e) || n.test(e)) {
            return decodeURIComponent(e.substr(RegExp.lastMatch.length));
          }
          if (t.test(e) || r.test(e)) {
            return u(e.substr(RegExp.lastMatch.length));
          }
          let s = e.match(/data:application\/json;([^,]+),/)[1];
          throw new Error('Unsupported source map encoding ' + s);
        }
        loadFile(e) {
          this.root = a(e);
          if (s(e)) {
            this.mapFile = e;
            return o(e, 'utf-8').toString().trim();
          }
        }
        loadMap(e, t) {
          if (t === false) return false;
          if (t) {
            if (typeof t === 'string') {
              return t;
            } else if (typeof t === 'function') {
              let r = t(e);
              if (r) {
                let e = this.loadFile(r);
                if (!e) {
                  throw new Error(
                    'Unable to load previous source map: ' + r.toString()
                  );
                }
                return e;
              }
            } else if (t instanceof i) {
              return n.fromSourceMap(t).toString();
            } else if (t instanceof n) {
              return t.toString();
            } else if (this.isMap(t)) {
              return JSON.stringify(t);
            } else {
              throw new Error(
                'Unsupported previous source map format: ' + t.toString()
              );
            }
          } else if (this.inline) {
            return this.decodeInline(this.annotation);
          } else if (this.annotation) {
            let t = this.annotation;
            if (e) t = l(a(e), t);
            return this.loadFile(t);
          }
        }
        isMap(e) {
          if (typeof e !== 'object') return false;
          return (
            typeof e.mappings === 'string' ||
            typeof e._mappings === 'string' ||
            Array.isArray(e.sections)
          );
        }
      }
      e.exports = c;
      c.default = c;
    },
    71723: (e, t, r) => {
      'use strict';
      let i = r(21939);
      let n = r(26461);
      let s = r(41025);
      class o {
        constructor(e = []) {
          this.version = '8.3.11';
          this.plugins = this.normalize(e);
        }
        use(e) {
          this.plugins = this.plugins.concat(this.normalize([e]));
          return this;
        }
        process(e, t = {}) {
          if (
            this.plugins.length === 0 &&
            typeof t.parser === 'undefined' &&
            typeof t.stringifier === 'undefined' &&
            typeof t.syntax === 'undefined' &&
            !t.hideNothingWarning
          ) {
            if (false) {
            }
          }
          return new i(this, e, t);
        }
        normalize(e) {
          let t = [];
          for (let r of e) {
            if (r.postcss === true) {
              r = r();
            } else if (r.postcss) {
              r = r.postcss;
            }
            if (typeof r === 'object' && Array.isArray(r.plugins)) {
              t = t.concat(r.plugins);
            } else if (typeof r === 'object' && r.postcssPlugin) {
              t.push(r);
            } else if (typeof r === 'function') {
              t.push(r);
            } else if (typeof r === 'object' && (r.parse || r.stringify)) {
              if (false) {
              }
            } else {
              throw new Error(r + ' is not a PostCSS plugin');
            }
          }
          return t;
        }
      }
      e.exports = o;
      o.default = o;
      s.registerProcessor(o);
      n.registerProcessor(o);
    },
    83632: (e, t, r) => {
      'use strict';
      let i = r(11728);
      class n {
        constructor(e, t, r) {
          this.processor = e;
          this.messages = [];
          this.root = t;
          this.opts = r;
          this.css = undefined;
          this.map = undefined;
        }
        toString() {
          return this.css;
        }
        warn(e, t = {}) {
          if (!t.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
              t.plugin = this.lastPlugin.postcssPlugin;
            }
          }
          let r = new i(e, t);
          this.messages.push(r);
          return r;
        }
        warnings() {
          return this.messages.filter((e) => e.type === 'warning');
        }
        get content() {
          return this.css;
        }
      }
      e.exports = n;
      n.default = n;
    },
    41025: (e, t, r) => {
      'use strict';
      let i = r(21019);
      let n, s;
      class o extends i {
        constructor(e) {
          super(e);
          this.type = 'root';
          if (!this.nodes) this.nodes = [];
        }
        removeChild(e, t) {
          let r = this.index(e);
          if (!t && r === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[r].raws.before;
          }
          return super.removeChild(e);
        }
        normalize(e, t, r) {
          let i = super.normalize(e);
          if (t) {
            if (r === 'prepend') {
              if (this.nodes.length > 1) {
                t.raws.before = this.nodes[1].raws.before;
              } else {
                delete t.raws.before;
              }
            } else if (this.first !== t) {
              for (let e of i) {
                e.raws.before = t.raws.before;
              }
            }
          }
          return i;
        }
        toResult(e = {}) {
          let t = new n(new s(), this, e);
          return t.stringify();
        }
      }
      o.registerLazyResult = (e) => {
        n = e;
      };
      o.registerProcessor = (e) => {
        s = e;
      };
      e.exports = o;
      o.default = o;
    },
    31675: (e, t, r) => {
      'use strict';
      let i = r(21019);
      let n = r(54715);
      class s extends i {
        constructor(e) {
          super(e);
          this.type = 'rule';
          if (!this.nodes) this.nodes = [];
        }
        get selectors() {
          return n.comma(this.selector);
        }
        set selectors(e) {
          let t = this.selector ? this.selector.match(/,\s*/) : null;
          let r = t ? t[0] : ',' + this.raw('between', 'beforeOpen');
          this.selector = e.join(r);
        }
      }
      e.exports = s;
      s.default = s;
      i.registerRule(s);
    },
    1062: (e) => {
      'use strict';
      const t = {
        colon: ': ',
        indent: '    ',
        beforeDecl: '\n',
        beforeRule: '\n',
        beforeOpen: ' ',
        beforeClose: '\n',
        beforeComment: '\n',
        after: '\n',
        emptyBody: '',
        commentLeft: ' ',
        commentRight: ' ',
        semicolon: false,
      };
      function r(e) {
        return e[0].toUpperCase() + e.slice(1);
      }
      class i {
        constructor(e) {
          this.builder = e;
        }
        stringify(e, t) {
          if (!this[e.type]) {
            throw new Error(
              'Unknown AST node type ' +
                e.type +
                '. ' +
                'Maybe you need to change PostCSS stringifier.'
            );
          }
          this[e.type](e, t);
        }
        document(e) {
          this.body(e);
        }
        root(e) {
          this.body(e);
          if (e.raws.after) this.builder(e.raws.after);
        }
        comment(e) {
          let t = this.raw(e, 'left', 'commentLeft');
          let r = this.raw(e, 'right', 'commentRight');
          this.builder('/*' + t + e.text + r + '*/', e);
        }
        decl(e, t) {
          let r = this.raw(e, 'between', 'colon');
          let i = e.prop + r + this.rawValue(e, 'value');
          if (e.important) {
            i += e.raws.important || ' !important';
          }
          if (t) i += ';';
          this.builder(i, e);
        }
        rule(e) {
          this.block(e, this.rawValue(e, 'selector'));
          if (e.raws.ownSemicolon) {
            this.builder(e.raws.ownSemicolon, e, 'end');
          }
        }
        atrule(e, t) {
          let r = '@' + e.name;
          let i = e.params ? this.rawValue(e, 'params') : '';
          if (typeof e.raws.afterName !== 'undefined') {
            r += e.raws.afterName;
          } else if (i) {
            r += ' ';
          }
          if (e.nodes) {
            this.block(e, r + i);
          } else {
            let n = (e.raws.between || '') + (t ? ';' : '');
            this.builder(r + i + n, e);
          }
        }
        body(e) {
          let t = e.nodes.length - 1;
          while (t > 0) {
            if (e.nodes[t].type !== 'comment') break;
            t -= 1;
          }
          let r = this.raw(e, 'semicolon');
          for (let i = 0; i < e.nodes.length; i++) {
            let n = e.nodes[i];
            let s = this.raw(n, 'before');
            if (s) this.builder(s);
            this.stringify(n, t !== i || r);
          }
        }
        block(e, t) {
          let r = this.raw(e, 'between', 'beforeOpen');
          this.builder(t + r + '{', e, 'start');
          let i;
          if (e.nodes && e.nodes.length) {
            this.body(e);
            i = this.raw(e, 'after');
          } else {
            i = this.raw(e, 'after', 'emptyBody');
          }
          if (i) this.builder(i);
          this.builder('}', e, 'end');
        }
        raw(e, i, n) {
          let s;
          if (!n) n = i;
          if (i) {
            s = e.raws[i];
            if (typeof s !== 'undefined') return s;
          }
          let o = e.parent;
          if (n === 'before') {
            if (!o || (o.type === 'root' && o.first === e)) {
              return '';
            }
            if (o && o.type === 'document') {
              return '';
            }
          }
          if (!o) return t[n];
          let a = e.root();
          if (!a.rawCache) a.rawCache = {};
          if (typeof a.rawCache[n] !== 'undefined') {
            return a.rawCache[n];
          }
          if (n === 'before' || n === 'after') {
            return this.beforeAfter(e, n);
          } else {
            let t = 'raw' + r(n);
            if (this[t]) {
              s = this[t](a, e);
            } else {
              a.walk((e) => {
                s = e.raws[i];
                if (typeof s !== 'undefined') return false;
              });
            }
          }
          if (typeof s === 'undefined') s = t[n];
          a.rawCache[n] = s;
          return s;
        }
        rawSemicolon(e) {
          let t;
          e.walk((e) => {
            if (e.nodes && e.nodes.length && e.last.type === 'decl') {
              t = e.raws.semicolon;
              if (typeof t !== 'undefined') return false;
            }
          });
          return t;
        }
        rawEmptyBody(e) {
          let t;
          e.walk((e) => {
            if (e.nodes && e.nodes.length === 0) {
              t = e.raws.after;
              if (typeof t !== 'undefined') return false;
            }
          });
          return t;
        }
        rawIndent(e) {
          if (e.raws.indent) return e.raws.indent;
          let t;
          e.walk((r) => {
            let i = r.parent;
            if (i && i !== e && i.parent && i.parent === e) {
              if (typeof r.raws.before !== 'undefined') {
                let e = r.raws.before.split('\n');
                t = e[e.length - 1];
                t = t.replace(/\S/g, '');
                return false;
              }
            }
          });
          return t;
        }
        rawBeforeComment(e, t) {
          let r;
          e.walkComments((e) => {
            if (typeof e.raws.before !== 'undefined') {
              r = e.raws.before;
              if (r.includes('\n')) {
                r = r.replace(/[^\n]+$/, '');
              }
              return false;
            }
          });
          if (typeof r === 'undefined') {
            r = this.raw(t, null, 'beforeDecl');
          } else if (r) {
            r = r.replace(/\S/g, '');
          }
          return r;
        }
        rawBeforeDecl(e, t) {
          let r;
          e.walkDecls((e) => {
            if (typeof e.raws.before !== 'undefined') {
              r = e.raws.before;
              if (r.includes('\n')) {
                r = r.replace(/[^\n]+$/, '');
              }
              return false;
            }
          });
          if (typeof r === 'undefined') {
            r = this.raw(t, null, 'beforeRule');
          } else if (r) {
            r = r.replace(/\S/g, '');
          }
          return r;
        }
        rawBeforeRule(e) {
          let t;
          e.walk((r) => {
            if (r.nodes && (r.parent !== e || e.first !== r)) {
              if (typeof r.raws.before !== 'undefined') {
                t = r.raws.before;
                if (t.includes('\n')) {
                  t = t.replace(/[^\n]+$/, '');
                }
                return false;
              }
            }
          });
          if (t) t = t.replace(/\S/g, '');
          return t;
        }
        rawBeforeClose(e) {
          let t;
          e.walk((e) => {
            if (e.nodes && e.nodes.length > 0) {
              if (typeof e.raws.after !== 'undefined') {
                t = e.raws.after;
                if (t.includes('\n')) {
                  t = t.replace(/[^\n]+$/, '');
                }
                return false;
              }
            }
          });
          if (t) t = t.replace(/\S/g, '');
          return t;
        }
        rawBeforeOpen(e) {
          let t;
          e.walk((e) => {
            if (e.type !== 'decl') {
              t = e.raws.between;
              if (typeof t !== 'undefined') return false;
            }
          });
          return t;
        }
        rawColon(e) {
          let t;
          e.walkDecls((e) => {
            if (typeof e.raws.between !== 'undefined') {
              t = e.raws.between.replace(/[^\s:]/g, '');
              return false;
            }
          });
          return t;
        }
        beforeAfter(e, t) {
          let r;
          if (e.type === 'decl') {
            r = this.raw(e, null, 'beforeDecl');
          } else if (e.type === 'comment') {
            r = this.raw(e, null, 'beforeComment');
          } else if (t === 'before') {
            r = this.raw(e, null, 'beforeRule');
          } else {
            r = this.raw(e, null, 'beforeClose');
          }
          let i = e.parent;
          let n = 0;
          while (i && i.type !== 'root') {
            n += 1;
            i = i.parent;
          }
          if (r.includes('\n')) {
            let t = this.raw(e, null, 'indent');
            if (t.length) {
              for (let e = 0; e < n; e++) r += t;
            }
          }
          return r;
        }
        rawValue(e, t) {
          let r = e[t];
          let i = e.raws[t];
          if (i && i.value === r) {
            return i.raw;
          }
          return r;
        }
      }
      e.exports = i;
    },
    67088: (e, t, r) => {
      'use strict';
      let i = r(1062);
      function n(e, t) {
        let r = new i(t);
        r.stringify(e);
      }
      e.exports = n;
      n.default = n;
    },
    65513: (e) => {
      'use strict';
      e.exports.isClean = Symbol('isClean');
      e.exports.my = Symbol('my');
    },
    83852: (e) => {
      'use strict';
      const t = "'".charCodeAt(0);
      const r = '"'.charCodeAt(0);
      const i = '\\'.charCodeAt(0);
      const n = '/'.charCodeAt(0);
      const s = '\n'.charCodeAt(0);
      const o = ' '.charCodeAt(0);
      const a = '\f'.charCodeAt(0);
      const l = '\t'.charCodeAt(0);
      const u = '\r'.charCodeAt(0);
      const c = '['.charCodeAt(0);
      const f = ']'.charCodeAt(0);
      const h = '('.charCodeAt(0);
      const p = ')'.charCodeAt(0);
      const d = '{'.charCodeAt(0);
      const m = '}'.charCodeAt(0);
      const g = ';'.charCodeAt(0);
      const b = '*'.charCodeAt(0);
      const y = ':'.charCodeAt(0);
      const v = '@'.charCodeAt(0);
      const w = /[\t\n\f\r "#'()/;[\\\]{}]/g;
      const x = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
      const S = /.[\n"'(/\\]/;
      const _ = /[\da-f]/i;
      e.exports = function e(T, O = {}) {
        let C = T.css.valueOf();
        let k = O.ignoreErrors;
        let A, E, D, P, L;
        let q, M, N, j, I;
        let R = C.length;
        let B = 0;
        let U = [];
        let H = [];
        function F() {
          return B;
        }
        function V(e) {
          throw T.error('Unclosed ' + e, B);
        }
        function z() {
          return H.length === 0 && B >= R;
        }
        function G(e) {
          if (H.length) return H.pop();
          if (B >= R) return;
          let T = e ? e.ignoreUnclosed : false;
          A = C.charCodeAt(B);
          switch (A) {
            case s:
            case o:
            case l:
            case u:
            case a: {
              E = B;
              do {
                E += 1;
                A = C.charCodeAt(E);
              } while (A === o || A === s || A === l || A === u || A === a);
              I = ['space', C.slice(B, E)];
              B = E - 1;
              break;
            }
            case c:
            case f:
            case d:
            case m:
            case y:
            case g:
            case p: {
              let e = String.fromCharCode(A);
              I = [e, e, B];
              break;
            }
            case h: {
              N = U.length ? U.pop()[1] : '';
              j = C.charCodeAt(B + 1);
              if (
                N === 'url' &&
                j !== t &&
                j !== r &&
                j !== o &&
                j !== s &&
                j !== l &&
                j !== a &&
                j !== u
              ) {
                E = B;
                do {
                  q = false;
                  E = C.indexOf(')', E + 1);
                  if (E === -1) {
                    if (k || T) {
                      E = B;
                      break;
                    } else {
                      V('bracket');
                    }
                  }
                  M = E;
                  while (C.charCodeAt(M - 1) === i) {
                    M -= 1;
                    q = !q;
                  }
                } while (q);
                I = ['brackets', C.slice(B, E + 1), B, E];
                B = E;
              } else {
                E = C.indexOf(')', B + 1);
                P = C.slice(B, E + 1);
                if (E === -1 || S.test(P)) {
                  I = ['(', '(', B];
                } else {
                  I = ['brackets', P, B, E];
                  B = E;
                }
              }
              break;
            }
            case t:
            case r: {
              D = A === t ? "'" : '"';
              E = B;
              do {
                q = false;
                E = C.indexOf(D, E + 1);
                if (E === -1) {
                  if (k || T) {
                    E = B + 1;
                    break;
                  } else {
                    V('string');
                  }
                }
                M = E;
                while (C.charCodeAt(M - 1) === i) {
                  M -= 1;
                  q = !q;
                }
              } while (q);
              I = ['string', C.slice(B, E + 1), B, E];
              B = E;
              break;
            }
            case v: {
              w.lastIndex = B + 1;
              w.test(C);
              if (w.lastIndex === 0) {
                E = C.length - 1;
              } else {
                E = w.lastIndex - 2;
              }
              I = ['at-word', C.slice(B, E + 1), B, E];
              B = E;
              break;
            }
            case i: {
              E = B;
              L = true;
              while (C.charCodeAt(E + 1) === i) {
                E += 1;
                L = !L;
              }
              A = C.charCodeAt(E + 1);
              if (L && A !== n && A !== o && A !== s && A !== l && A !== u && A !== a) {
                E += 1;
                if (_.test(C.charAt(E))) {
                  while (_.test(C.charAt(E + 1))) {
                    E += 1;
                  }
                  if (C.charCodeAt(E + 1) === o) {
                    E += 1;
                  }
                }
              }
              I = ['word', C.slice(B, E + 1), B, E];
              B = E;
              break;
            }
            default: {
              if (A === n && C.charCodeAt(B + 1) === b) {
                E = C.indexOf('*/', B + 2) + 1;
                if (E === 0) {
                  if (k || T) {
                    E = C.length;
                  } else {
                    V('comment');
                  }
                }
                I = ['comment', C.slice(B, E + 1), B, E];
                B = E;
              } else {
                x.lastIndex = B + 1;
                x.test(C);
                if (x.lastIndex === 0) {
                  E = C.length - 1;
                } else {
                  E = x.lastIndex - 2;
                }
                I = ['word', C.slice(B, E + 1), B, E];
                U.push(I);
                B = E;
              }
              break;
            }
          }
          B++;
          return I;
        }
        function $(e) {
          H.push(e);
        }
        return { back: $, nextToken: G, endOfFile: z, position: F };
      };
    },
    72448: (e) => {
      'use strict';
      let t = {};
      e.exports = function e(r) {
        if (t[r]) return;
        t[r] = true;
        if (typeof console !== 'undefined' && console.warn) {
          console.warn(r);
        }
      };
    },
    11728: (e) => {
      'use strict';
      class t {
        constructor(e, t = {}) {
          this.type = 'warning';
          this.text = e;
          if (t.node && t.node.source) {
            let e = t.node.positionBy(t);
            this.line = e.line;
            this.column = e.column;
          }
          for (let r in t) this[r] = t[r];
        }
        toString() {
          if (this.node) {
            return this.node.error(this.text, {
              plugin: this.plugin,
              index: this.index,
              word: this.word,
            }).message;
          }
          if (this.plugin) {
            return this.plugin + ': ' + this.text;
          }
          return this.text;
        }
      }
      e.exports = t;
      t.default = t;
    },
    34155: (e) => {
      var t = (e.exports = {});
      var r;
      var i;
      function n() {
        throw new Error('setTimeout has not been defined');
      }
      function s() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            r = setTimeout;
          } else {
            r = n;
          }
        } catch (e) {
          r = n;
        }
        try {
          if (typeof clearTimeout === 'function') {
            i = clearTimeout;
          } else {
            i = s;
          }
        } catch (e) {
          i = s;
        }
      })();
      function o(e) {
        if (r === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((r === n || !r) && setTimeout) {
          r = setTimeout;
          return setTimeout(e, 0);
        }
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      function a(e) {
        if (i === clearTimeout) {
          return clearTimeout(e);
        }
        if ((i === s || !i) && clearTimeout) {
          i = clearTimeout;
          return clearTimeout(e);
        }
        try {
          return i(e);
        } catch (t) {
          try {
            return i.call(null, e);
          } catch (t) {
            return i.call(this, e);
          }
        }
      }
      var l = [];
      var u = false;
      var c;
      var f = -1;
      function h() {
        if (!u || !c) {
          return;
        }
        u = false;
        if (c.length) {
          l = c.concat(l);
        } else {
          f = -1;
        }
        if (l.length) {
          p();
        }
      }
      function p() {
        if (u) {
          return;
        }
        var e = o(h);
        u = true;
        var t = l.length;
        while (t) {
          c = l;
          l = [];
          while (++f < t) {
            if (c) {
              c[f].run();
            }
          }
          f = -1;
          t = l.length;
        }
        c = null;
        u = false;
        a(e);
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
        }
        l.push(new d(e, t));
        if (l.length === 1 && !u) {
          o(p);
        }
      };
      function d(e, t) {
        this.fun = e;
        this.array = t;
      }
      d.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      t.title = 'browser';
      t.browser = true;
      t.env = {};
      t.argv = [];
      t.version = '';
      t.versions = {};
      function m() {}
      t.on = m;
      t.addListener = m;
      t.once = m;
      t.off = m;
      t.removeListener = m;
      t.removeAllListeners = m;
      t.emit = m;
      t.prependListener = m;
      t.prependOnceListener = m;
      t.listeners = function (e) {
        return [];
      };
      t.binding = function (e) {
        throw new Error('process.binding is not supported');
      };
      t.cwd = function () {
        return '/';
      };
      t.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      };
      t.umask = function () {
        return 0;
      };
    },
    91036: (e, t, r) => {
      const i = r(23719);
      const n = r(22997);
      const { isPlainObject: s } = r(10977);
      const o = r(9996);
      const a = r(79430);
      const { parse: l } = r(50020);
      const u = [
        'img',
        'audio',
        'video',
        'picture',
        'svg',
        'object',
        'map',
        'iframe',
        'embed',
      ];
      const c = ['script', 'style'];
      function f(e, t) {
        if (e) {
          Object.keys(e).forEach(function (r) {
            t(e[r], r);
          });
        }
      }
      function h(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }
      function p(e, t) {
        const r = [];
        f(e, function (e) {
          if (t(e)) {
            r.push(e);
          }
        });
        return r;
      }
      function d(e) {
        for (const t in e) {
          if (h(e, t)) {
            return false;
          }
        }
        return true;
      }
      function m(e) {
        return e
          .map(function (e) {
            if (!e.url) {
              throw new Error('URL missing');
            }
            return (
              e.url +
              (e.w ? ` ${e.w}w` : '') +
              (e.h ? ` ${e.h}h` : '') +
              (e.d ? ` ${e.d}x` : '')
            );
          })
          .join(', ');
      }
      e.exports = b;
      const g = /^[^\0\t\n\f\r /<=>]+$/;
      function b(e, t, r) {
        if (e == null) {
          return '';
        }
        let v = '';
        let w = '';
        function x(e, t) {
          const r = this;
          this.tag = e;
          this.attribs = t || {};
          this.tagPosition = v.length;
          this.text = '';
          this.mediaChildren = [];
          this.updateParentNodeText = function () {
            if (P.length) {
              const e = P[P.length - 1];
              e.text += r.text;
            }
          };
          this.updateParentNodeMediaChildren = function () {
            if (P.length && u.includes(this.tag)) {
              const e = P[P.length - 1];
              e.mediaChildren.push(this.tag);
            }
          };
        }
        t = Object.assign({}, b.defaults, t);
        t.parser = Object.assign({}, y, t.parser);
        c.forEach(function (e) {
          if (
            t.allowedTags !== false &&
            (t.allowedTags || []).indexOf(e) > -1 &&
            !t.allowVulnerableTags
          ) {
            console.warn(
              `\n\n⚠️ Your \`allowedTags\` option includes, \`${e}\`, which is inherently\nvulnerable to XSS attacks. Please remove it from \`allowedTags\`.\nOr, to disable this warning, add the \`allowVulnerableTags\` option\nand ensure you are accounting for this risk.\n\n`
            );
          }
        });
        const S = t.nonTextTags || ['script', 'style', 'textarea', 'option'];
        let _;
        let T;
        if (t.allowedAttributes) {
          _ = {};
          T = {};
          f(t.allowedAttributes, function (e, t) {
            _[t] = [];
            const r = [];
            e.forEach(function (e) {
              if (typeof e === 'string' && e.indexOf('*') >= 0) {
                r.push(n(e).replace(/\\\*/g, '.*'));
              } else {
                _[t].push(e);
              }
            });
            if (r.length) {
              T[t] = new RegExp('^(' + r.join('|') + ')$');
            }
          });
        }
        const O = {};
        const C = {};
        const k = {};
        f(t.allowedClasses, function (e, t) {
          if (_) {
            if (!h(_, t)) {
              _[t] = [];
            }
            _[t].push('class');
          }
          O[t] = [];
          k[t] = [];
          const r = [];
          e.forEach(function (e) {
            if (typeof e === 'string' && e.indexOf('*') >= 0) {
              r.push(n(e).replace(/\\\*/g, '.*'));
            } else if (e instanceof RegExp) {
              k[t].push(e);
            } else {
              O[t].push(e);
            }
          });
          if (r.length) {
            C[t] = new RegExp('^(' + r.join('|') + ')$');
          }
        });
        const A = {};
        let E;
        f(t.transformTags, function (e, t) {
          let r;
          if (typeof e === 'function') {
            r = e;
          } else if (typeof e === 'string') {
            r = b.simpleTransform(e);
          }
          if (t === '*') {
            E = r;
          } else {
            A[t] = r;
          }
        });
        let D;
        let P;
        let L;
        let q;
        let M;
        let N;
        let j = false;
        R();
        const I = new i.Parser(
          {
            onopentag: function (e, r) {
              if (t.enforceHtmlBoundary && e === 'html') {
                R();
              }
              if (M) {
                N++;
                return;
              }
              const i = new x(e, r);
              P.push(i);
              let n = false;
              const u = !!i.text;
              let c;
              if (h(A, e)) {
                c = A[e](e, r);
                i.attribs = r = c.attribs;
                if (c.text !== undefined) {
                  i.innerText = c.text;
                }
                if (e !== c.tagName) {
                  i.name = e = c.tagName;
                  q[D] = c.tagName;
                }
              }
              if (E) {
                c = E(e, r);
                i.attribs = r = c.attribs;
                if (e !== c.tagName) {
                  i.name = e = c.tagName;
                  q[D] = c.tagName;
                }
              }
              if (
                (t.allowedTags !== false && (t.allowedTags || []).indexOf(e) === -1) ||
                (t.disallowedTagsMode === 'recursiveEscape' && !d(L)) ||
                (t.nestingLimit != null && D >= t.nestingLimit)
              ) {
                n = true;
                L[D] = true;
                if (t.disallowedTagsMode === 'discard') {
                  if (S.indexOf(e) !== -1) {
                    M = true;
                    N = 1;
                  }
                }
                L[D] = true;
              }
              D++;
              if (n) {
                if (t.disallowedTagsMode === 'discard') {
                  return;
                }
                w = v;
                v = '';
              }
              v += '<' + e;
              if (e === 'script') {
                if (t.allowedScriptHostnames || t.allowedScriptDomains) {
                  i.innerText = '';
                }
              }
              if (!_ || h(_, e) || _['*']) {
                f(r, function (r, n) {
                  if (!g.test(n)) {
                    delete i.attribs[n];
                    return;
                  }
                  let u = false;
                  if (
                    !_ ||
                    (h(_, e) && _[e].indexOf(n) !== -1) ||
                    (_['*'] && _['*'].indexOf(n) !== -1) ||
                    (h(T, e) && T[e].test(n)) ||
                    (T['*'] && T['*'].test(n))
                  ) {
                    u = true;
                  } else if (_ && _[e]) {
                    for (const t of _[e]) {
                      if (s(t) && t.name && t.name === n) {
                        u = true;
                        let e = '';
                        if (t.multiple === true) {
                          const i = r.split(' ');
                          for (const r of i) {
                            if (t.values.indexOf(r) !== -1) {
                              if (e === '') {
                                e = r;
                              } else {
                                e += ' ' + r;
                              }
                            }
                          }
                        } else if (t.values.indexOf(r) >= 0) {
                          e = r;
                        }
                        r = e;
                      }
                    }
                  }
                  if (u) {
                    if (t.allowedSchemesAppliedToAttributes.indexOf(n) !== -1) {
                      if (U(e, r)) {
                        delete i.attribs[n];
                        return;
                      }
                    }
                    if (e === 'script' && n === 'src') {
                      let e = true;
                      try {
                        const i = H(r);
                        if (t.allowedScriptHostnames || t.allowedScriptDomains) {
                          const r = (t.allowedScriptHostnames || []).find(function (e) {
                            return e === i.url.hostname;
                          });
                          const n = (t.allowedScriptDomains || []).find(function (e) {
                            return (
                              i.url.hostname === e || i.url.hostname.endsWith(`.${e}`)
                            );
                          });
                          e = r || n;
                        }
                      } catch (c) {
                        e = false;
                      }
                      if (!e) {
                        delete i.attribs[n];
                        return;
                      }
                    }
                    if (e === 'iframe' && n === 'src') {
                      let e = true;
                      try {
                        const i = H(r);
                        if (i.isRelativeUrl) {
                          e = h(t, 'allowIframeRelativeUrls')
                            ? t.allowIframeRelativeUrls
                            : !t.allowedIframeHostnames && !t.allowedIframeDomains;
                        } else if (t.allowedIframeHostnames || t.allowedIframeDomains) {
                          const r = (t.allowedIframeHostnames || []).find(function (e) {
                            return e === i.url.hostname;
                          });
                          const n = (t.allowedIframeDomains || []).find(function (e) {
                            return (
                              i.url.hostname === e || i.url.hostname.endsWith(`.${e}`)
                            );
                          });
                          e = r || n;
                        }
                      } catch (c) {
                        e = false;
                      }
                      if (!e) {
                        delete i.attribs[n];
                        return;
                      }
                    }
                    if (n === 'srcset') {
                      try {
                        let e = a(r);
                        e.forEach(function (e) {
                          if (U('srcset', e.url)) {
                            e.evil = true;
                          }
                        });
                        e = p(e, function (e) {
                          return !e.evil;
                        });
                        if (!e.length) {
                          delete i.attribs[n];
                          return;
                        } else {
                          r = m(
                            p(e, function (e) {
                              return !e.evil;
                            })
                          );
                          i.attribs[n] = r;
                        }
                      } catch (c) {
                        delete i.attribs[n];
                        return;
                      }
                    }
                    if (n === 'class') {
                      const t = O[e];
                      const s = O['*'];
                      const a = C[e];
                      const l = k[e];
                      const u = C['*'];
                      const c = [a, u].concat(l).filter(function (e) {
                        return e;
                      });
                      if (t && s) {
                        r = G(r, o(t, s), c);
                      } else {
                        r = G(r, t || s, c);
                      }
                      if (!r.length) {
                        delete i.attribs[n];
                        return;
                      }
                    }
                    if (n === 'style') {
                      try {
                        const s = l(e + ' {' + r + '}');
                        const o = F(s, t.allowedStyles);
                        r = V(o);
                        if (r.length === 0) {
                          delete i.attribs[n];
                          return;
                        }
                      } catch (c) {
                        delete i.attribs[n];
                        return;
                      }
                    }
                    v += ' ' + n;
                    if (r && r.length) {
                      v += '="' + B(r, true) + '"';
                    }
                  } else {
                    delete i.attribs[n];
                  }
                });
              }
              if (t.selfClosing.indexOf(e) !== -1) {
                v += ' />';
              } else {
                v += '>';
                if (i.innerText && !u && !t.textFilter) {
                  v += B(i.innerText);
                  j = true;
                }
              }
              if (n) {
                v = w + B(v);
                w = '';
              }
            },
            ontext: function (e) {
              if (M) {
                return;
              }
              const r = P[P.length - 1];
              let i;
              if (r) {
                i = r.tag;
                e = r.innerText !== undefined ? r.innerText : e;
              }
              if (
                t.disallowedTagsMode === 'discard' &&
                (i === 'script' || i === 'style')
              ) {
                v += e;
              } else {
                const r = B(e, false);
                if (t.textFilter && !j) {
                  v += t.textFilter(r, i);
                } else if (!j) {
                  v += r;
                }
              }
              if (P.length) {
                const t = P[P.length - 1];
                t.text += e;
              }
            },
            onclosetag: function (e) {
              if (M) {
                N--;
                if (!N) {
                  M = false;
                } else {
                  return;
                }
              }
              const r = P.pop();
              if (!r) {
                return;
              }
              if (r.tag !== e) {
                P.push(r);
                return;
              }
              M = t.enforceHtmlBoundary ? e === 'html' : false;
              D--;
              const i = L[D];
              if (i) {
                delete L[D];
                if (t.disallowedTagsMode === 'discard') {
                  r.updateParentNodeText();
                  return;
                }
                w = v;
                v = '';
              }
              if (q[D]) {
                e = q[D];
                delete q[D];
              }
              if (t.exclusiveFilter && t.exclusiveFilter(r)) {
                v = v.substr(0, r.tagPosition);
                return;
              }
              r.updateParentNodeMediaChildren();
              r.updateParentNodeText();
              if (t.selfClosing.indexOf(e) !== -1) {
                if (i) {
                  v = w;
                  w = '';
                }
                return;
              }
              v += '</' + e + '>';
              if (i) {
                v = w + B(v);
                w = '';
              }
              j = false;
            },
          },
          t.parser
        );
        I.write(e);
        I.end();
        return v;
        function R() {
          v = '';
          D = 0;
          P = [];
          L = {};
          q = {};
          M = false;
          N = 0;
        }
        function B(e, r) {
          if (typeof e !== 'string') {
            e = e + '';
          }
          if (t.parser.decodeEntities) {
            e = e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            if (r) {
              e = e.replace(/"/g, '&quot;');
            }
          }
          e = e
            .replace(/&(?![a-zA-Z0-9#]{1,20};)/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
          if (r) {
            e = e.replace(/"/g, '&quot;');
          }
          return e;
        }
        function U(e, r) {
          r = r.replace(/[\x00-\x20]+/g, '');
          while (true) {
            const e = r.indexOf('\x3c!--');
            if (e === -1) {
              break;
            }
            const t = r.indexOf('--\x3e', e + 4);
            if (t === -1) {
              break;
            }
            r = r.substring(0, e) + r.substring(t + 3);
          }
          const i = r.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
          if (!i) {
            if (r.match(/^[/\\]{2}/)) {
              return !t.allowProtocolRelative;
            }
            return false;
          }
          const n = i[1].toLowerCase();
          if (h(t.allowedSchemesByTag, e)) {
            return t.allowedSchemesByTag[e].indexOf(n) === -1;
          }
          return !t.allowedSchemes || t.allowedSchemes.indexOf(n) === -1;
        }
        function H(e) {
          e = e.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, '$1//');
          if (e.startsWith('relative:')) {
            throw new Error('relative: exploit attempt');
          }
          let t = 'relative://relative-site';
          for (let n = 0; n < 100; n++) {
            t += `/${n}`;
          }
          const r = new URL(e, t);
          const i = r && r.hostname === 'relative-site' && r.protocol === 'relative:';
          return { isRelativeUrl: i, url: r };
        }
        function F(e, t) {
          if (!t) {
            return e;
          }
          const r = e.nodes[0];
          let i;
          if (t[r.selector] && t['*']) {
            i = o(t[r.selector], t['*']);
          } else {
            i = t[r.selector] || t['*'];
          }
          if (i) {
            e.nodes[0].nodes = r.nodes.reduce(z(i), []);
          }
          return e;
        }
        function V(e) {
          return e.nodes[0].nodes
            .reduce(function (e, t) {
              e.push(`${t.prop}:${t.value}${t.important ? ' !important' : ''}`);
              return e;
            }, [])
            .join(';');
        }
        function z(e) {
          return function (t, r) {
            if (h(e, r.prop)) {
              const i = e[r.prop].some(function (e) {
                return e.test(r.value);
              });
              if (i) {
                t.push(r);
              }
            }
            return t;
          };
        }
        function G(e, t, r) {
          if (!t) {
            return e;
          }
          e = e.split(/\s+/);
          return e
            .filter(function (e) {
              return (
                t.indexOf(e) !== -1 ||
                r.some(function (t) {
                  return t.test(e);
                })
              );
            })
            .join(' ');
        }
      }
      const y = { decodeEntities: true };
      b.defaults = {
        allowedTags: [
          'address',
          'article',
          'aside',
          'footer',
          'header',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'hgroup',
          'main',
          'nav',
          'section',
          'blockquote',
          'dd',
          'div',
          'dl',
          'dt',
          'figcaption',
          'figure',
          'hr',
          'li',
          'main',
          'ol',
          'p',
          'pre',
          'ul',
          'a',
          'abbr',
          'b',
          'bdi',
          'bdo',
          'br',
          'cite',
          'code',
          'data',
          'dfn',
          'em',
          'i',
          'kbd',
          'mark',
          'q',
          'rb',
          'rp',
          'rt',
          'rtc',
          'ruby',
          's',
          'samp',
          'small',
          'span',
          'strong',
          'sub',
          'sup',
          'time',
          'u',
          'var',
          'wbr',
          'caption',
          'col',
          'colgroup',
          'table',
          'tbody',
          'td',
          'tfoot',
          'th',
          'thead',
          'tr',
        ],
        disallowedTagsMode: 'discard',
        allowedAttributes: {
          a: ['href', 'name', 'target'],
          img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
        },
        selfClosing: [
          'img',
          'br',
          'hr',
          'area',
          'base',
          'basefont',
          'input',
          'link',
          'meta',
        ],
        allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel'],
        allowedSchemesByTag: {},
        allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
        allowProtocolRelative: true,
        enforceHtmlBoundary: false,
      };
      b.simpleTransform = function (e, t, r) {
        r = r === undefined ? true : r;
        t = t || {};
        return function (i, n) {
          let s;
          if (r) {
            for (s in t) {
              n[s] = t[s];
            }
          } else {
            n = t;
          }
          return { tagName: e, attribs: n };
        };
      };
    },
    22997: (e) => {
      'use strict';
      e.exports = (e) => {
        if (typeof e !== 'string') {
          throw new TypeError('Expected a string');
        }
        return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
      };
    },
    10977: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      function r(e) {
        return Object.prototype.toString.call(e) === '[object Object]';
      }
      function i(e) {
        var t, i;
        if (r(e) === false) return false;
        t = e.constructor;
        if (t === undefined) return true;
        i = t.prototype;
        if (r(i) === false) return false;
        if (i.hasOwnProperty('isPrototypeOf') === false) {
          return false;
        }
        return true;
      }
      t.isPlainObject = i;
    },
  },
]);
//# sourceMappingURL=1036.a055f7326513fc5a04f7.js.map?v=a055f7326513fc5a04f7
