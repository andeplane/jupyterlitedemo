'use strict';
(self.webpackChunk_jupyter_widgets_jupyterlab_manager =
  self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [495],
  {
    2495: (e, t, s) => {
      s.r(t),
        s.d(t, {
          AccordionModel: () => kt,
          AccordionView: () => Vt,
          AudioModel: () => q,
          AudioView: () => G,
          BaseIntSliderView: () => Te,
          BoolModel: () => f,
          BoundedFloatModel: () => De,
          BoundedFloatTextModel: () => Ke,
          BoundedIntModel: () => ye,
          BoundedIntTextModel: () => Le,
          BoxModel: () => E,
          BoxView: () => D,
          ButtonModel: () => O,
          ButtonStyleModel: () => S,
          ButtonView: () => k,
          CheckboxModel: () => w,
          CheckboxStyleModel: () => v,
          CheckboxView: () => y,
          ColorPickerModel: () => Y,
          ColorPickerView: () => Z,
          ColorsInputModel: () => $t,
          ColorsInputView: () => Ht,
          ComboboxModel: () => bs,
          ComboboxView: () => vs,
          ControllerAxisModel: () => Ze,
          ControllerAxisView: () => Qe,
          ControllerButtonModel: () => Je,
          ControllerButtonView: () => Ye,
          ControllerModel: () => Xe,
          ControllerView: () => et,
          DatePickerModel: () => ee,
          DatePickerView: () => te,
          DatetimeModel: () => ue,
          DatetimeView: () => ce,
          DescriptionModel: () => r,
          DescriptionStyleModel: () => o,
          DescriptionView: () => h,
          DirectionalLinkModel: () => _,
          DropdownModel: () => it,
          DropdownView: () => at,
          FileUploadModel: () => xs,
          FileUploadView: () => fs,
          FloatLogSliderModel: () => Ue,
          FloatLogSliderView: () => Ne,
          FloatModel: () => ze,
          FloatProgressModel: () => Ge,
          FloatRangeSliderModel: () => Fe,
          FloatRangeSliderView: () => $e,
          FloatSliderModel: () => Pe,
          FloatSliderView: () => Re,
          FloatTextModel: () => He,
          FloatTextView: () => qe,
          FloatsInputModel: () => Gt,
          FloatsInputView: () => Jt,
          GridBoxModel: () => R,
          GridBoxView: () => F,
          HBoxModel: () => B,
          HBoxView: () => P,
          HTMLMathModel: () => ns,
          HTMLMathStyleModel: () => es,
          HTMLMathView: () => os,
          HTMLModel: () => ls,
          HTMLStyleModel: () => Xt,
          HTMLView: () => ds,
          ImageModel: () => N,
          ImageView: () => $,
          IntModel: () => we,
          IntProgressModel: () => We,
          IntRangeSliderModel: () => je,
          IntRangeSliderView: () => Se,
          IntSliderModel: () => Me,
          IntSliderView: () => Oe,
          IntTextModel: () => ke,
          IntTextView: () => Ve,
          IntsInputModel: () => Yt,
          IntsInputView: () => Zt,
          JUPYTER_CONTROLS_VERSION: () => n.N,
          JupyterLuminoAccordionWidget: () => Lt,
          JupyterLuminoTabPanelWidget: () => Wt,
          LabelModel: () => rs,
          LabelStyleModel: () => ts,
          LabelView: () => hs,
          LabeledDOMWidgetModel: () => u,
          LabeledDOMWidgetView: () => c,
          LinkModel: () => b,
          MultipleSelectionModel: () => gt,
          NaiveDatetimeModel: () => be,
          PasswordModel: () => ms,
          PasswordView: () => _s,
          PlayModel: () => Ee,
          PlayView: () => Be,
          ProgressStyleModel: () => Ie,
          ProgressView: () => Ae,
          RadioButtonsModel: () => nt,
          RadioButtonsView: () => ot,
          SelectModel: () => lt,
          SelectMultipleModel: () => mt,
          SelectMultipleView: () => _t,
          SelectView: () => dt,
          SelectionContainerModel: () => Ot,
          SelectionModel: () => tt,
          SelectionRangeSliderModel: () => bt,
          SelectionRangeSliderView: () => vt,
          SelectionSliderModel: () => ct,
          SelectionSliderView: () => pt,
          SelectionView: () => st,
          SliderStyleModel: () => Ce,
          StackModel: () => Et,
          StackView: () => Bt,
          StringModel: () => is,
          StringView: () => as,
          TabModel: () => It,
          TabView: () => At,
          TagsInputModel: () => Rt,
          TagsInputView: () => Nt,
          TextModel: () => ps,
          TextStyleModel: () => ss,
          TextView: () => gs,
          TextareaModel: () => us,
          TextareaView: () => cs,
          TimeModel: () => de,
          TimeView: () => ne,
          ToggleButtonModel: () => C,
          ToggleButtonStyleModel: () => x,
          ToggleButtonView: () => M,
          ToggleButtonsModel: () => ht,
          ToggleButtonsStyleModel: () => rt,
          ToggleButtonsView: () => ut,
          VBoxModel: () => z,
          VBoxView: () => U,
          ValidModel: () => j,
          ValidView: () => T,
          VideoModel: () => H,
          VideoView: () => K,
          datetime_serializers: () => he,
          deserialize_date: () => X,
          deserialize_datetime: () => re,
          deserialize_naive: () => me,
          deserialize_time: () => ae,
          escape_html: () => l,
          naive_serializers: () => _e,
          reject: () => d,
          resolvePromisesDict: () => i.resolvePromisesDict,
          serialize_date: () => Q,
          serialize_datetime: () => oe,
          serialize_naive: () => ge,
          serialize_time: () => ie,
          time_serializers: () => le,
          typeset: () => a,
          uuid: () => i.uuid,
          version: () => ws,
        });
      var i = s(7193);
      function a(e, t) {
        void 0 !== t && (e.textContent = t),
          void 0 !== window.MathJax && MathJax.Hub.Queue(['Typeset', MathJax.Hub, e]);
      }
      function l(e) {
        const t = document.createElement('div');
        return (t.textContent = e), t.innerHTML;
      }
      function d(e, t) {
        return function (s) {
          throw (t && console.error(new Error(e)), s);
        };
      }
      var n = s(61);
      class o extends i.StyleModel {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'DescriptionStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: n.N,
          });
        }
      }
      o.styleProperties = {
        description_width: {
          selector: '.widget-label',
          attribute: 'width',
          default: null,
        },
      };
      class r extends i.DOMWidgetModel {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'DescriptionModel',
            _view_name: 'DescriptionView',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: n.N,
            _model_module_version: n.N,
            description: '',
            description_allow_html: !1,
          });
        }
      }
      class h extends i.DOMWidgetView {
        render() {
          (this.label = document.createElement('label')),
            this.el.appendChild(this.label),
            (this.label.className = 'widget-label'),
            (this.label.style.display = 'none'),
            this.listenTo(this.model, 'change:description', this.updateDescription),
            this.listenTo(
              this.model,
              'change:description_allow_html',
              this.updateDescription
            ),
            this.listenTo(this.model, 'change:tabbable', this.updateTabindex),
            this.updateDescription(),
            this.updateTabindex(),
            this.updateTooltip();
        }
        typeset(e, t) {
          this.displayed.then(() => a(e, t));
        }
        updateDescription() {
          const e = this.model.get('description');
          0 === e.length
            ? (this.label.style.display = 'none')
            : (this.model.get('description_allow_html')
                ? (this.label.innerHTML = this.model.widget_manager.inline_sanitize(e))
                : (this.label.textContent = e),
              this.typeset(this.label),
              (this.label.style.display = ''));
        }
        updateTooltip() {
          this.label && (this.label.title = this.model.get('tooltip'));
        }
      }
      class u extends r {}
      class c extends h {}
      class p extends i.WidgetModel {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'CoreWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: n.N,
            _model_module_version: n.N,
          });
        }
      }
      class g extends i.DOMWidgetModel {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'CoreDOMWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: n.N,
            _model_module_version: n.N,
          });
        }
      }
      class m extends r {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'CoreDescriptionModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: n.N,
            _model_module_version: n.N,
          });
        }
      }
      class _ extends p {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            target: void 0,
            source: void 0,
            _model_name: 'DirectionalLinkModel',
          });
        }
        initialize(e, t) {
          super.initialize(e, t),
            this.on('change', this.updateBindings, this),
            this.updateBindings();
        }
        updateValue(e, t, s, i) {
          if (!this._updating) {
            this._updating = !0;
            try {
              s && (s.set(i, e.get(t)), s.save_changes());
            } finally {
              this._updating = !1;
            }
          }
        }
        updateBindings() {
          this.cleanup(),
            ([this.sourceModel, this.sourceAttr] = this.get('source') || [null, null]),
            ([this.targetModel, this.targetAttr] = this.get('target') || [null, null]),
            this.sourceModel &&
              (this.listenTo(this.sourceModel, 'change:' + this.sourceAttr, () => {
                this.updateValue(
                  this.sourceModel,
                  this.sourceAttr,
                  this.targetModel,
                  this.targetAttr
                );
              }),
              this.updateValue(
                this.sourceModel,
                this.sourceAttr,
                this.targetModel,
                this.targetAttr
              ),
              this.listenToOnce(this.sourceModel, 'destroy', this.cleanup)),
            this.targetModel &&
              this.listenToOnce(this.targetModel, 'destroy', this.cleanup);
        }
        cleanup() {
          this.sourceModel &&
            (this.stopListening(this.sourceModel, 'change:' + this.sourceAttr, void 0),
            this.stopListening(this.sourceModel, 'destroy', void 0)),
            this.targetModel && this.stopListening(this.targetModel, 'destroy', void 0);
        }
      }
      _.serializers = Object.assign(Object.assign({}, p.serializers), {
        target: { deserialize: i.unpack_models },
        source: { deserialize: i.unpack_models },
      });
      class b extends _ {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'LinkModel',
          });
        }
        updateBindings() {
          super.updateBindings(),
            this.targetModel &&
              this.listenTo(this.targetModel, 'change:' + this.targetAttr, () => {
                this.updateValue(
                  this.targetModel,
                  this.targetAttr,
                  this.sourceModel,
                  this.sourceAttr
                );
              });
        }
        cleanup() {
          super.cleanup(),
            this.targetModel &&
              this.stopListening(this.targetModel, 'change:' + this.targetAttr, void 0);
        }
      }
      class v extends o {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'CheckboxStyleModel',
          });
        }
      }
      v.styleProperties = Object.assign(Object.assign({}, o.styleProperties), {
        background: { selector: '', attribute: 'background', default: null },
      });
      class x extends o {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ToggleButtonStyleModel',
          });
        }
      }
      x.styleProperties = Object.assign(Object.assign({}, o.styleProperties), {
        font_family: { selector: '', attribute: 'font-family', default: '' },
        font_size: { selector: '', attribute: 'font-size', default: '' },
        font_style: { selector: '', attribute: 'font-style', default: '' },
        font_variant: { selector: '', attribute: 'font-variant', default: '' },
        font_weight: { selector: '', attribute: 'font-weight', default: '' },
        text_color: { selector: '', attribute: 'color', default: '' },
        text_decoration: { selector: '', attribute: 'text-decoration', default: '' },
      });
      class f extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            value: !1,
            disabled: !1,
            _model_name: 'BoolModel',
          });
        }
      }
      class w extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            indent: !0,
            style: null,
            _view_name: 'CheckboxView',
            _model_name: 'CheckboxModel',
          });
        }
      }
      class y extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-checkbox'),
            (this.label.innerHTML = '&#8203;'),
            (this.checkboxLabel = document.createElement('label')),
            this.checkboxLabel.classList.add('widget-label-basic'),
            this.el.appendChild(this.checkboxLabel),
            (this.checkbox = document.createElement('input')),
            this.checkbox.setAttribute('type', 'checkbox'),
            this.checkboxLabel.appendChild(this.checkbox),
            (this.descriptionSpan = document.createElement('span')),
            this.checkboxLabel.appendChild(this.descriptionSpan),
            this.listenTo(this.model, 'change:indent', this.updateIndent),
            this.listenTo(this.model, 'change:tabbable', this.updateTabindex),
            this.update(),
            this.updateDescription(),
            this.updateIndent(),
            this.updateTabindex(),
            this.updateTooltip();
        }
        updateDescription() {
          if (null == this.checkboxLabel) return;
          const e = this.model.get('description');
          this.model.get('description_allow_html')
            ? (this.descriptionSpan.innerHTML =
                this.model.widget_manager.inline_sanitize(e))
            : (this.descriptionSpan.textContent = e),
            this.typeset(this.descriptionSpan),
            (this.descriptionSpan.title = e),
            (this.checkbox.title = e);
        }
        updateIndent() {
          const e = this.model.get('indent');
          this.label.style.display = e ? '' : 'none';
        }
        updateTabindex() {
          if (!this.checkbox) return;
          const e = this.model.get('tabbable');
          !0 === e
            ? this.checkbox.setAttribute('tabIndex', '0')
            : !1 === e
            ? this.checkbox.setAttribute('tabIndex', '-1')
            : null === e && this.checkbox.removeAttribute('tabIndex');
        }
        updateTooltip() {
          if (!this.checkbox) return;
          const e = this.model.get('tooltip');
          e
            ? 0 === this.model.get('description').length &&
              this.checkbox.setAttribute('title', e)
            : this.checkbox.removeAttribute('title');
        }
        events() {
          return { 'click input[type="checkbox"]': '_handle_click' };
        }
        _handle_click() {
          const e = this.model.get('value');
          this.model.set('value', !e, { updated_view: this }), this.touch();
        }
        update(e) {
          return (
            (this.checkbox.checked = this.model.get('value')),
            (void 0 !== e && e.updated_view == this) ||
              (this.checkbox.disabled = this.model.get('disabled')),
            super.update()
          );
        }
        handle_message(e) {
          'focus' == e.do
            ? this.checkbox.focus()
            : 'blur' == e.do && this.checkbox.blur();
        }
      }
      class C extends f {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'ToggleButtonView',
            _model_name: 'ToggleButtonModel',
            tooltip: '',
            icon: '',
            button_style: '',
            style: null,
          });
        }
      }
      class M extends i.DOMWidgetView {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('jupyter-button'),
            this.el.classList.add('widget-toggle-button'),
            this.listenTo(this.model, 'change:button_style', this.update_button_style),
            this.listenTo(this.model, 'change:tabbable', this.updateTabindex),
            this.set_button_style(),
            this.update();
        }
        update_button_style() {
          this.update_mapped_classes(M.class_map, 'button_style');
        }
        set_button_style() {
          this.set_mapped_classes(M.class_map, 'button_style');
        }
        update(e) {
          if (
            (this.model.get('value')
              ? this.el.classList.add('mod-active')
              : this.el.classList.remove('mod-active'),
            void 0 === e || e.updated_view !== this)
          ) {
            (this.el.disabled = this.model.get('disabled')),
              this.el.setAttribute('tabbable', this.model.get('tabbable')),
              this.el.setAttribute('title', this.model.get('tooltip'));
            const e = this.model.get('description'),
              t = this.model.get('icon');
            if (0 === e.trim().length && 0 === t.trim().length)
              this.el.innerHTML = '&nbsp;';
            else {
              if (((this.el.textContent = ''), t.trim().length)) {
                const e = document.createElement('i');
                this.el.appendChild(e),
                  e.classList.add('fa'),
                  e.classList.add('fa-' + t);
              }
              this.el.appendChild(document.createTextNode(e));
            }
          }
          return this.updateTabindex(), super.update();
        }
        events() {
          return { click: '_handle_click' };
        }
        _handle_click(e) {
          e.preventDefault();
          const t = this.model.get('value');
          this.model.set('value', !t, { updated_view: this }), this.touch();
        }
        preinitialize() {
          this.tagName = 'button';
        }
      }
      M.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger'],
      };
      class j extends f {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            readout: 'Invalid',
            _view_name: 'ValidView',
            _model_name: 'ValidModel',
          });
        }
      }
      class T extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-valid'),
            this.el.classList.add('widget-inline-hbox'),
            (this.icon = document.createElement('i')),
            this.icon.classList.add('fa', 'fa-fw'),
            this.el.appendChild(this.icon),
            (this.readout = document.createElement('span')),
            this.readout.classList.add('widget-valid-readout'),
            this.readout.classList.add('widget-readout'),
            this.el.appendChild(this.readout),
            this.update();
        }
        update() {
          this.el.classList.remove('mod-valid'),
            this.el.classList.remove('mod-invalid'),
            this.icon.classList.remove('fa-check'),
            this.icon.classList.remove('fa-times'),
            (this.readout.textContent = this.model.get('readout')),
            this.model.get('value')
              ? (this.el.classList.add('mod-valid'),
                this.icon.classList.add('fa-check'))
              : (this.el.classList.add('mod-invalid'),
                this.icon.classList.add('fa-times'));
        }
      }
      class S extends i.StyleModel {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ButtonStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: n.N,
          });
        }
      }
      S.styleProperties = {
        button_color: { selector: '', attribute: 'background-color', default: null },
        font_family: { selector: '', attribute: 'font-family', default: '' },
        font_size: { selector: '', attribute: 'font-size', default: '' },
        font_style: { selector: '', attribute: 'font-style', default: '' },
        font_variant: { selector: '', attribute: 'font-variant', default: '' },
        font_weight: { selector: '', attribute: 'font-weight', default: '' },
        text_color: { selector: '', attribute: 'color', default: '' },
        text_decoration: { selector: '', attribute: 'text-decoration', default: '' },
      };
      class O extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            description: '',
            tooltip: '',
            disabled: !1,
            icon: '',
            button_style: '',
            _view_name: 'ButtonView',
            _model_name: 'ButtonModel',
            style: null,
          });
        }
      }
      class k extends i.DOMWidgetView {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('jupyter-button'),
            this.el.classList.add('widget-button'),
            this.listenTo(this.model, 'change:button_style', this.update_button_style),
            this.listenTo(this.model, 'change:tabbable', this.updateTabindex),
            this.set_button_style(),
            this.update();
        }
        update() {
          (this.el.disabled = this.model.get('disabled')), this.updateTabindex();
          const e = this.model.get('tooltip'),
            t = this.model.get('description'),
            s = this.model.get('icon');
          if (
            (this.el.setAttribute('title', null != e ? e : t), t.length || s.length)
          ) {
            if (((this.el.textContent = ''), s.length)) {
              const e = document.createElement('i');
              e.classList.add('fa'),
                e.classList.add(
                  ...s
                    .split(/[\s]+/)
                    .filter(Boolean)
                    .map((e) => `fa-${e}`)
                ),
                0 === t.length && e.classList.add('center'),
                this.el.appendChild(e);
            }
            this.el.appendChild(document.createTextNode(t));
          }
          return super.update();
        }
        update_button_style() {
          this.update_mapped_classes(k.class_map, 'button_style');
        }
        set_button_style() {
          this.set_mapped_classes(k.class_map, 'button_style');
        }
        events() {
          return { click: '_handle_click' };
        }
        _handle_click(e) {
          e.preventDefault(), this.send({ event: 'click' });
        }
        preinitialize() {
          this.tagName = 'button';
        }
      }
      k.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger'],
      };
      var L = s(8918),
        V = s(2720),
        I = s(3992),
        W = s(2994),
        A = s.n(W);
      class E extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'BoxView',
            _model_name: 'BoxModel',
            children: [],
            box_style: '',
          });
        }
      }
      E.serializers = Object.assign(Object.assign({}, g.serializers), {
        children: { deserialize: i.unpack_models },
      });
      class B extends E {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'HBoxView',
            _model_name: 'HBoxModel',
          });
        }
      }
      class z extends E {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'VBoxView',
            _model_name: 'VBoxModel',
          });
        }
      }
      class D extends i.DOMWidgetView {
        _createElement(e) {
          return (
            (this.luminoWidget = new i.JupyterLuminoPanelWidget({ view: this })),
            this.luminoWidget.node
          );
        }
        _setElement(e) {
          if (this.el || e !== this.luminoWidget.node)
            throw new Error('Cannot reset the DOM element.');
          (this.el = this.luminoWidget.node), (this.$el = A()(this.luminoWidget.node));
        }
        initialize(e) {
          super.initialize(e),
            (this.children_views = new i.ViewList(this.add_child_model, null, this)),
            this.listenTo(this.model, 'change:children', this.update_children),
            this.listenTo(this.model, 'change:box_style', this.update_box_style),
            this.luminoWidget.addClass('jupyter-widgets'),
            this.luminoWidget.addClass('widget-container'),
            this.luminoWidget.addClass('widget-box');
        }
        render() {
          super.render(), this.update_children(), this.set_box_style();
        }
        update_children() {
          var e;
          null === (e = this.children_views) ||
            void 0 === e ||
            e.update(this.model.get('children')).then((e) => {
              e.forEach((e) => {
                V.MessageLoop.postMessage(
                  e.luminoWidget,
                  I.Widget.ResizeMessage.UnknownSize
                );
              });
            });
        }
        update_box_style() {
          this.update_mapped_classes(D.class_map, 'box_style');
        }
        set_box_style() {
          this.set_mapped_classes(D.class_map, 'box_style');
        }
        add_child_model(e) {
          const t = new I.Widget();
          return (
            this.luminoWidget.addWidget(t),
            this.create_child_view(e)
              .then((e) => {
                const s = L.ArrayExt.firstIndexOf(this.luminoWidget.widgets, t);
                return (
                  this.luminoWidget.insertWidget(s, e.luminoWidget), t.dispose(), e
                );
              })
              .catch((0, i.reject)('Could not add child view to box', !0))
          );
        }
        remove() {
          (this.children_views = null), super.remove();
        }
      }
      D.class_map = {
        success: ['alert', 'alert-success'],
        info: ['alert', 'alert-info'],
        warning: ['alert', 'alert-warning'],
        danger: ['alert', 'alert-danger'],
      };
      class P extends D {
        initialize(e) {
          super.initialize(e), this.luminoWidget.addClass('widget-hbox');
        }
      }
      class U extends D {
        initialize(e) {
          super.initialize(e), this.luminoWidget.addClass('widget-vbox');
        }
      }
      class F extends D {
        initialize(e) {
          super.initialize(e),
            this.luminoWidget.addClass('widget-gridbox'),
            this.luminoWidget.removeClass('widget-box');
        }
      }
      class R extends E {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'GridBoxView',
            _model_name: 'GridBoxModel',
          });
        }
      }
      class N extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ImageModel',
            _view_name: 'ImageView',
            format: 'png',
            width: '',
            height: '',
            value: new DataView(new ArrayBuffer(0)),
          });
        }
      }
      N.serializers = Object.assign(Object.assign({}, g.serializers), {
        value: { serialize: (e) => new DataView(e.buffer.slice(0)) },
      });
      class $ extends i.DOMWidgetView {
        render() {
          super.render(),
            this.luminoWidget.addClass('jupyter-widgets'),
            this.luminoWidget.addClass('widget-image'),
            this.update();
        }
        update() {
          let e;
          const t = this.model.get('format'),
            s = this.model.get('value');
          if ('url' !== t) {
            const t = new Blob([s], { type: `image/${this.model.get('format')}` });
            e = URL.createObjectURL(t);
          } else e = new TextDecoder('utf-8').decode(s.buffer);
          const i = this.el.src;
          (this.el.src = e), i && URL.revokeObjectURL(i);
          const a = this.model.get('width');
          void 0 !== a && a.length > 0
            ? this.el.setAttribute('width', a)
            : this.el.removeAttribute('width');
          const l = this.model.get('height');
          return (
            void 0 !== l && l.length > 0
              ? this.el.setAttribute('height', l)
              : this.el.removeAttribute('height'),
            super.update()
          );
        }
        remove() {
          this.el.src && URL.revokeObjectURL(this.el.src), super.remove();
        }
        preinitialize() {
          this.tagName = 'img';
        }
      }
      class H extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'VideoModel',
            _view_name: 'VideoView',
            format: 'mp4',
            width: '',
            height: '',
            autoplay: !0,
            loop: !0,
            controls: !0,
            value: new DataView(new ArrayBuffer(0)),
          });
        }
      }
      H.serializers = Object.assign(Object.assign({}, g.serializers), {
        value: { serialize: (e) => new DataView(e.buffer.slice(0)) },
      });
      class K extends i.DOMWidgetView {
        render() {
          super.render(),
            this.luminoWidget.addClass('jupyter-widgets'),
            this.luminoWidget.addClass('widget-image'),
            this.update();
        }
        update() {
          let e;
          const t = this.model.get('format'),
            s = this.model.get('value');
          if ('url' !== t) {
            const t = new Blob([s], { type: `video/${this.model.get('format')}` });
            e = URL.createObjectURL(t);
          } else e = new TextDecoder('utf-8').decode(s.buffer);
          const i = this.el.src;
          (this.el.src = e), i && URL.revokeObjectURL(i);
          const a = this.model.get('width');
          void 0 !== a && a.length > 0
            ? this.el.setAttribute('width', a)
            : this.el.removeAttribute('width');
          const l = this.model.get('height');
          return (
            void 0 !== l && l.length > 0
              ? this.el.setAttribute('height', l)
              : this.el.removeAttribute('height'),
            (this.el.loop = this.model.get('loop')),
            (this.el.autoplay = this.model.get('autoplay')),
            (this.el.controls = this.model.get('controls')),
            super.update()
          );
        }
        remove() {
          this.el.src && URL.revokeObjectURL(this.el.src), super.remove();
        }
        preinitialize() {
          this.tagName = 'video';
        }
      }
      class q extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'AudioModel',
            _view_name: 'AudioView',
            format: 'mp3',
            autoplay: !0,
            loop: !0,
            controls: !0,
            value: new DataView(new ArrayBuffer(0)),
          });
        }
      }
      q.serializers = Object.assign(Object.assign({}, g.serializers), {
        value: { serialize: (e) => new DataView(e.buffer.slice(0)) },
      });
      class G extends i.DOMWidgetView {
        render() {
          super.render(), this.luminoWidget.addClass('jupyter-widgets'), this.update();
        }
        update() {
          let e;
          const t = this.model.get('format'),
            s = this.model.get('value');
          if ('url' !== t) {
            const t = new Blob([s], { type: `audio/${this.model.get('format')}` });
            e = URL.createObjectURL(t);
          } else e = new TextDecoder('utf-8').decode(s.buffer);
          const i = this.el.src;
          return (
            (this.el.src = e),
            i && URL.revokeObjectURL(i),
            (this.el.loop = this.model.get('loop')),
            (this.el.autoplay = this.model.get('autoplay')),
            (this.el.controls = this.model.get('controls')),
            super.update()
          );
        }
        remove() {
          this.el.src && URL.revokeObjectURL(this.el.src), super.remove();
        }
        preinitialize() {
          this.tagName = 'audio';
        }
      }
      const J = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgrey: '#a9a9a9',
        darkgreen: '#006400',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        grey: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgreen: '#90ee90',
        lightgray: '#d3d3d3',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32',
      };
      class Y extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            value: 'black',
            concise: !1,
            _model_name: 'ColorPickerModel',
            _view_name: 'ColorPickerView',
          });
        }
      }
      class Z extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-colorpicker'),
            (this._color_container = document.createElement('div')),
            (this._color_container.className =
              'widget-inline-hbox widget-colorpicker-input'),
            this.el.appendChild(this._color_container),
            (this._textbox = document.createElement('input')),
            this._textbox.setAttribute('type', 'text'),
            (this._textbox.id = this.label.htmlFor = (0, i.uuid)()),
            this._color_container.appendChild(this._textbox),
            (this._textbox.value = this.model.get('value')),
            (this._colorpicker = document.createElement('input')),
            this._colorpicker.setAttribute('type', 'color'),
            this._color_container.appendChild(this._colorpicker),
            this.listenTo(this.model, 'change:value', this._update_value),
            this.listenTo(this.model, 'change:concise', this._update_concise),
            this._update_concise(),
            this._update_value(),
            this.update();
        }
        update(e) {
          if (void 0 === e || e.updated_view != this) {
            const e = this.model.get('disabled');
            (this._textbox.disabled = e), (this._colorpicker.disabled = e);
          }
          return super.update();
        }
        events() {
          return (
            this._picker_change,
            this._text_change,
            {
              'change [type="color"]': '_picker_change',
              'change [type="text"]': '_text_change',
            }
          );
        }
        _update_value() {
          const e = this.model.get('value');
          var t, s;
          (this._colorpicker.value =
            J[(t = e).toLowerCase()] ||
            (7 === (s = t).length
              ? s
              : '#' +
                s.charAt(1) +
                s.charAt(1) +
                s.charAt(2) +
                s.charAt(2) +
                s.charAt(3) +
                s.charAt(3))),
            (this._textbox.value = e);
        }
        _update_concise() {
          this.model.get('concise')
            ? (this.el.classList.add('concise'), (this._textbox.style.display = 'none'))
            : (this.el.classList.remove('concise'), (this._textbox.style.display = ''));
        }
        _picker_change() {
          this.model.set('value', this._colorpicker.value), this.touch();
        }
        _text_change() {
          const e = this._validate_color(this._textbox.value, this.model.get('value'));
          this.model.set('value', e), this.touch();
        }
        _validate_color(e, t) {
          return e.match(/#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?$/) || J[e.toLowerCase()]
            ? e
            : t;
        }
      }
      function Q(e) {
        return null === e
          ? null
          : { year: e.getUTCFullYear(), month: e.getUTCMonth(), date: e.getUTCDate() };
      }
      function X(e) {
        if (null === e) return null;
        {
          const t = new Date();
          return (
            t.setUTCFullYear(e.year, e.month, e.date), t.setUTCHours(0, 0, 0, 0), t
          );
        }
      }
      class ee extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            value: null,
            _model_name: 'DatePickerModel',
            _view_name: 'DatePickerView',
          });
        }
      }
      ee.serializers = Object.assign(Object.assign({}, m.serializers), {
        value: { serialize: Q, deserialize: X },
      });
      class te extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-datepicker'),
            (this._datepicker = document.createElement('input')),
            this._datepicker.setAttribute('type', 'date'),
            (this._datepicker.id = this.label.htmlFor = (0, i.uuid)()),
            this.el.appendChild(this._datepicker),
            this.listenTo(this.model, 'change:value', this._update_value),
            this._update_value(),
            this.update();
        }
        update(e) {
          return (
            (void 0 !== e && e.updated_view === this) ||
              (this._datepicker.disabled = this.model.get('disabled')),
            super.update()
          );
        }
        events() {
          return (
            this._picker_change,
            this._picker_focusout,
            {
              'change [type="date"]': '_picker_change',
              'focusout [type="date"]': '_picker_focusout',
            }
          );
        }
        _update_value() {
          const e = this.model.get('value');
          this._datepicker.valueAsDate = e;
        }
        _picker_change() {
          this._datepicker.validity.badInput ||
            (this.model.set('value', this._datepicker.valueAsDate), this.touch());
        }
        _picker_focusout() {
          this._datepicker.validity.badInput &&
            (this.model.set('value', null), this.touch());
        }
      }
      const se = /(\d\d):(\d\d)(:(\d\d)(.(\d{1,3})\d*)?)?/;
      function ie(e) {
        if (null === e) return null;
        {
          const t = se.exec(e);
          return null === t
            ? null
            : {
                hours: Math.min(23, parseInt(t[1], 10)),
                minutes: Math.min(59, parseInt(t[2], 10)),
                seconds: t[4] ? Math.min(59, parseInt(t[4], 10)) : 0,
                milliseconds: t[6] ? parseInt(t[6], 10) : 0,
              };
        }
      }
      function ae(e) {
        if (null === e) return null;
        {
          const t = [
            `${e.hours.toString().padStart(2, '0')}:${e.minutes
              .toString()
              .padStart(2, '0')}`,
          ];
          return (
            (e.seconds > 0 || e.milliseconds > 0) &&
              (t.push(`:${e.seconds.toString().padStart(2, '0')}`),
              e.milliseconds > 0 &&
                t.push(`.${e.milliseconds.toString().padStart(3, '0')}`)),
            t.join('')
          );
        }
      }
      const le = { serialize: ie, deserialize: ae };
      class de extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: de.model_name,
            _view_name: de.view_name,
            value: null,
            disabled: !1,
            min: null,
            max: null,
            step: 60,
          });
        }
      }
      (de.serializers = Object.assign(Object.assign({}, m.serializers), {
        value: le,
        min: le,
        max: le,
      })),
        (de.model_name = 'TimeModel'),
        (de.view_name = 'TimeView');
      class ne extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-timepicker'),
            (this._timepicker = document.createElement('input')),
            this._timepicker.setAttribute('type', 'time'),
            (this._timepicker.id = this.label.htmlFor = (0, i.uuid)()),
            this.el.appendChild(this._timepicker),
            this.listenTo(this.model, 'change:value', this._update_value),
            this.listenTo(this.model, 'change', this.update2),
            this._update_value(),
            this.update2();
        }
        update2(e, t) {
          return (
            (void 0 !== t && t.updated_view === this) ||
              ((this._timepicker.disabled = this.model.get('disabled')),
              (this._timepicker.min = this.model.get('min')),
              (this._timepicker.max = this.model.get('max')),
              (this._timepicker.step = this.model.get('step'))),
            super.update()
          );
        }
        events() {
          return (
            this._picker_change,
            this._picker_focusout,
            {
              'change [type="time"]': '_picker_change',
              'focusout [type="time"]': '_picker_focusout',
            }
          );
        }
        _update_value(e, t, s) {
          (void 0 !== s && s.updated_view === this) ||
            (this._timepicker.value = this.model.get('value'));
        }
        _picker_change() {
          this._timepicker.validity.badInput ||
            (this.model.set('value', this._timepicker.value, { updated_view: this }),
            this.touch());
        }
        _picker_focusout() {
          this._timepicker.validity.badInput &&
            (this.model.set('value', null, { updated_view: this }), this.touch());
        }
      }
      function oe(e) {
        return null === e
          ? null
          : {
              year: e.getUTCFullYear(),
              month: e.getUTCMonth(),
              date: e.getUTCDate(),
              hours: e.getUTCHours(),
              minutes: e.getUTCMinutes(),
              seconds: e.getUTCSeconds(),
              milliseconds: e.getUTCMilliseconds(),
            };
      }
      function re(e) {
        if (null === e) return null;
        {
          const t = new Date();
          return (
            t.setUTCFullYear(e.year, e.month, e.date),
            t.setUTCHours(e.hours, e.minutes, e.seconds, e.milliseconds),
            t
          );
        }
      }
      const he = { serialize: oe, deserialize: re };
      class ue extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'DatetimeModel',
            _view_name: 'DatetimeView',
            value: null,
            disabled: !1,
            min: null,
            max: null,
          });
        }
      }
      ue.serializers = Object.assign(Object.assign({}, m.serializers), {
        value: he,
        min: he,
        max: he,
      });
      class ce extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-datetimepicker');
          const e = document.createElement('input');
          (e.type = 'datetime-local'),
            'text' === e.type
              ? ((this._datepicker = document.createElement('input')),
                this._datepicker.setAttribute('type', 'date'),
                (this._datepicker.id = this.label.htmlFor = (0, i.uuid)()),
                (this._timepicker = document.createElement('input')),
                this._timepicker.setAttribute('type', 'time'),
                (this._timepicker.id = (0, i.uuid)()),
                this.el.appendChild(this._datepicker),
                this.el.appendChild(this._timepicker))
              : ((this._datetimepicker = e),
                (this._datetimepicker.id = this.label.htmlFor = (0, i.uuid)()),
                this.el.appendChild(this._datetimepicker)),
            this.listenTo(this.model, 'change:value', this._update_value),
            this.listenTo(this.model, 'change', this.update2),
            this._update_value(),
            this.update2();
        }
        update2(e, t) {
          if (void 0 === t || t.updated_view !== this) {
            const e = this.model.get('min'),
              t = this.model.get('max');
            this._datetimepicker
              ? ((this._datetimepicker.disabled = this.model.get('disabled')),
                (this._datetimepicker.min = pe.dt_as_dt_string(e)),
                (this._datetimepicker.max = pe.dt_as_dt_string(t)))
              : ((this._datepicker.disabled = this.model.get('disabled')),
                (this._datepicker.min = pe.dt_as_date_string(e)),
                (this._datepicker.max = pe.dt_as_date_string(t)),
                (this._timepicker.disabled = this.model.get('disabled')));
          }
        }
        events() {
          return (
            this._picker_change,
            this._picker_focusout,
            {
              'change [type="date"]': '_picker_change',
              'change [type="time"]': '_picker_change',
              'change [type="datetime-local"]': '_picker_change',
              'focusout [type="date"]': '_picker_focusout',
              'focusout [type="datetime-local"]': '_picker_focusout',
              'focusout [type="time"]': '_picker_focusout',
            }
          );
        }
        _update_value(e, t, s) {
          if (void 0 === s || s.updated_view !== this) {
            const e = this.model.get('value');
            this._datetimepicker
              ? (this._datetimepicker.value = pe.dt_as_dt_string(e))
              : ((this._datepicker.valueAsDate = e),
                (this._timepicker.value = pe.dt_as_time_string(e)));
          }
        }
        _picker_change() {
          if (this._datetimepicker) {
            if (!this._datetimepicker.validity.badInput) {
              const e = this._datetimepicker.value;
              let t = e ? new Date(e) : null;
              t && isNaN(t.valueOf()) && (t = null),
                this.model.set('value', t, { updated_view: this }),
                this.touch();
            }
          } else if (
            !this._datepicker.validity.badInput &&
            !this._timepicker.validity.badInput
          ) {
            const e = this._datepicker.valueAsDate,
              t = ie(this._timepicker.value);
            null !== e &&
              null !== t &&
              e.setHours(t.hours, t.minutes, t.seconds, t.milliseconds),
              this.model.set('value', null !== t && e, { updated_view: this }),
              this.touch();
          }
        }
        _picker_focusout() {
          [this._datetimepicker, this._datepicker, this._timepicker].some(
            (e) => e && e.validity.badInput
          ) && (this.model.set('value', null), this.touch());
        }
      }
      var pe;
      function ge(e) {
        return null === e
          ? null
          : {
              year: e.getFullYear(),
              month: e.getMonth(),
              date: e.getDate(),
              hours: e.getHours(),
              minutes: e.getMinutes(),
              seconds: e.getSeconds(),
              milliseconds: e.getMilliseconds(),
            };
      }
      function me(e) {
        if (null === e) return null;
        {
          const t = new Date();
          return (
            t.setFullYear(e.year, e.month, e.date),
            t.setHours(e.hours, e.minutes, e.seconds, e.milliseconds),
            t
          );
        }
      }
      !(function (e) {
        function t(e) {
          if (null === e) return '';
          const t = [];
          return (
            t.push(`${e.getFullYear().toString().padStart(4, '0')}`),
            t.push(`-${(e.getMonth() + 1).toString().padStart(2, '0')}`),
            t.push(`-${e.getDate().toString().padStart(2, '0')}`),
            t.push(`T${e.getHours().toString().padStart(2, '0')}`),
            t.push(`:${e.getMinutes().toString().padStart(2, '0')}`),
            (e.getSeconds() > 0 || e.getMilliseconds() > 0) &&
              (t.push(`:${e.getSeconds().toString().padStart(2, '0')}`),
              e.getMilliseconds() > 0 &&
                t.push(`.${e.getMilliseconds().toString().padStart(3, '0')}`)),
            t.join('')
          );
        }
        (e.dt_as_dt_string = t),
          (e.dt_as_date_string = function (e) {
            return e ? t(e).split('T', 2)[0] : '';
          }),
          (e.dt_as_time_string = function (e) {
            return e ? t(e).split('T', 2)[1] : '';
          });
      })(pe || (pe = {}));
      const _e = { serialize: ge, deserialize: me };
      class be extends ue {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'NaiveDatetimeModel',
          });
        }
      }
      be.serializers = Object.assign(Object.assign({}, m.serializers), {
        value: _e,
        min: _e,
        max: _e,
      });
      var ve = s(4359),
        xe = s(6547),
        fe = s.n(xe);
      class we extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'IntModel',
            value: 0,
          });
        }
      }
      class ye extends we {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'BoundedIntModel',
            max: 100,
            min: 0,
          });
        }
      }
      class Ce extends o {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'SliderStyleModel',
          });
        }
      }
      Ce.styleProperties = Object.assign(Object.assign({}, o.styleProperties), {
        handle_color: {
          selector: '.noUi-handle',
          attribute: 'background-color',
          default: null,
        },
      });
      class Me extends ye {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'IntSliderModel',
            _view_name: 'IntSliderView',
            step: 1,
            orientation: 'horizontal',
            readout: !0,
            readout_format: 'd',
            continuous_update: !0,
            style: null,
            disabled: !1,
          });
        }
        initialize(e, t) {
          super.initialize(e, t),
            this.on('change:readout_format', this.update_readout_format, this),
            this.update_readout_format();
        }
        update_readout_format() {
          this.readout_formatter = (0, ve.WU)(this.get('readout_format'));
        }
      }
      class je extends Me {}
      class Te extends h {
        constructor() {
          super(...arguments), (this._parse_value = parseInt);
        }
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-slider'),
            this.el.classList.add('widget-hslider'),
            (this.$slider = document.createElement('div')),
            this.$slider.classList.add('slider'),
            (this.slider_container = document.createElement('div')),
            this.slider_container.classList.add('slider-container'),
            this.slider_container.appendChild(this.$slider),
            this.el.appendChild(this.slider_container),
            (this.readout = document.createElement('div')),
            this.el.appendChild(this.readout),
            this.readout.classList.add('widget-readout'),
            (this.readout.contentEditable = 'true'),
            (this.readout.style.display = 'none'),
            this.createSlider(),
            this.model.on('change:orientation', this.regenSlider, this),
            this.model.on('change:max', this.updateSliderOptions, this),
            this.model.on('change:min', this.updateSliderOptions, this),
            this.model.on('change:step', this.updateSliderOptions, this),
            this.model.on('change:value', this.updateSliderValue, this),
            this.update();
        }
        update(e) {
          return (
            (void 0 !== e && e.updated_view === this) ||
              (this.model.get('disabled')
                ? ((this.readout.contentEditable = 'false'),
                  this.$slider.setAttribute('disabled', !0))
                : ((this.readout.contentEditable = 'true'),
                  this.$slider.removeAttribute('disabled')),
              'vertical' === this.model.get('orientation')
                ? (this.el.classList.remove('widget-hslider'),
                  this.el.classList.add('widget-vslider'),
                  this.el.classList.remove('widget-inline-hbox'),
                  this.el.classList.add('widget-inline-vbox'))
                : (this.el.classList.remove('widget-vslider'),
                  this.el.classList.add('widget-hslider'),
                  this.el.classList.remove('widget-inline-vbox'),
                  this.el.classList.add('widget-inline-hbox')),
              this.model.get('readout')
                ? ((this.readout.style.display = ''),
                  this.displayed.then(() => {
                    this.readout_overflow()
                      ? this.readout.classList.add('overflow')
                      : this.readout.classList.remove('overflow');
                  }))
                : (this.readout.style.display = 'none')),
            super.update()
          );
        }
        readout_overflow() {
          return this.readout.scrollWidth > this.readout.clientWidth;
        }
        events() {
          return {
            'blur [contentEditable=true]': 'handleTextChange',
            'keydown [contentEditable=true]': 'handleKeyDown',
          };
        }
        handleKeyDown(e) {
          13 === e.keyCode && (e.preventDefault(), this.handleTextChange());
        }
        createSlider() {
          const e = this.model.get('orientation'),
            t = this.model.get('behavior');
          fe().create(this.$slider, {
            start: this.model.get('value'),
            connect: !0,
            behaviour: t,
            range: { min: this.model.get('min'), max: this.model.get('max') },
            step: this.model.get('step'),
            animate: !1,
            orientation: e,
            direction: 'horizontal' === e ? 'ltr' : 'rtl',
            format: {
              from: (e) => Number(e),
              to: (e) => this._validate_slide_value(e),
            },
          }),
            this.$slider.noUiSlider.on('update', (e, t) => {
              this.handleSliderUpdateEvent(e, t);
            }),
            this.$slider.noUiSlider.on('change', (e, t) => {
              this.handleSliderChangeEvent(e, t);
            });
        }
        regenSlider(e) {
          this.$slider.noUiSlider.destroy(), this.createSlider();
        }
        _validate_slide_value(e) {
          return Math.round(e);
        }
      }
      class Se extends Te {
        constructor() {
          super(...arguments),
            (this._range_regex = /^\s*([+-]?\d+)\s*[-:–]\s*([+-]?\d+)/);
        }
        update(e) {
          super.update(e);
          const t = this.model.get('value');
          (this.readout.textContent = this.valueToString(t)),
            this.model.get('value') !== t &&
              (this.model.set('value', t, { updated_view: this }), this.touch());
        }
        valueToString(e) {
          const t = this.model.readout_formatter;
          return e
            .map(function (e) {
              return t(e);
            })
            .join(' – ');
        }
        stringToValue(e) {
          if (null === e) return null;
          const t = this._range_regex.exec(e);
          return t ? [this._parse_value(t[1]), this._parse_value(t[2])] : null;
        }
        handleTextChange() {
          let e = this.stringToValue(this.readout.textContent);
          const t = this.model.get('min'),
            s = this.model.get('max');
          null === e || isNaN(e[0]) || isNaN(e[1]) || e[0] > e[1]
            ? (this.readout.textContent = this.valueToString(this.model.get('value')))
            : ((e = [Math.max(Math.min(e[0], s), t), Math.max(Math.min(e[1], s), t)]),
              e[0] !== this.model.get('value')[0] || e[1] !== this.model.get('value')[1]
                ? ((this.readout.textContent = this.valueToString(e)),
                  this.model.set('value', e),
                  this.touch())
                : (this.readout.textContent = this.valueToString(
                    this.model.get('value')
                  )));
        }
        handleSliderChangeEvent(e, t) {
          const s = e.map(this._validate_slide_value);
          (this.readout.textContent = this.valueToString(s)),
            this.handleSliderChanged(e, t);
        }
        handleSliderUpdateEvent(e, t) {
          const s = e.map(this._validate_slide_value);
          (this.readout.textContent = this.valueToString(s)),
            this.model.get('continuous_update') && this.handleSliderChanged(e, t);
        }
        handleSliderChanged(e, t) {
          const s = e.map(this._validate_slide_value);
          this.model.set('value', s, { updated_view: this }), this.touch();
        }
        updateSliderOptions(e) {
          this.$slider.noUiSlider.updateOptions({
            start: this.model.get('value'),
            range: { min: this.model.get('min'), max: this.model.get('max') },
            step: this.model.get('step'),
          });
        }
        updateSliderValue(e, t, s) {
          if (s.updated_view === this) return;
          const i = this.$slider.noUiSlider.get(),
            a = this.model.get('value');
          (i[0] === a[0] && i[1] === a[1]) || this.$slider.noUiSlider.set(a);
        }
      }
      class Oe extends Te {
        update(e) {
          super.update(e);
          const t = this.model.get('min'),
            s = this.model.get('max');
          let i = this.model.get('value');
          i > s ? (i = s) : i < t && (i = t),
            (this.readout.textContent = this.valueToString(i)),
            this.model.get('value') !== i &&
              (this.model.set('value', i, { updated_view: this }), this.touch());
        }
        valueToString(e) {
          return (0, this.model.readout_formatter)(e);
        }
        stringToValue(e) {
          return this._parse_value(e);
        }
        handleTextChange() {
          var e;
          let t = this.stringToValue(
            null !== (e = this.readout.textContent) && void 0 !== e ? e : ''
          );
          const s = this.model.get('min'),
            i = this.model.get('max');
          isNaN(t)
            ? (this.readout.textContent = this.valueToString(this.model.get('value')))
            : ((t = Math.max(Math.min(t, i), s)),
              t !== this.model.get('value')
                ? ((this.readout.textContent = this.valueToString(t)),
                  this.model.set('value', t),
                  this.touch())
                : (this.readout.textContent = this.valueToString(
                    this.model.get('value')
                  )));
        }
        handleSliderChangeEvent(e, t) {
          const s = e.map(this._validate_slide_value);
          (this.readout.textContent = this.valueToString(s)),
            this.handleSliderChanged(e, t);
        }
        handleSliderUpdateEvent(e, t) {
          const s = e.map(this._validate_slide_value);
          (this.readout.textContent = this.valueToString(s)),
            this.model.get('continuous_update') && this.handleSliderChanged(e, t);
        }
        handleSliderChanged(e, t) {
          const s = this._validate_slide_value(e[t]),
            i = this.model.get('value');
          parseFloat(i) !== s &&
            (this.model.set('value', s, { updated_view: this }), this.touch());
        }
        updateSliderOptions(e) {
          this.$slider.noUiSlider.updateOptions({
            start: this.model.get('value'),
            range: { min: this.model.get('min'), max: this.model.get('max') },
            step: this.model.get('step'),
          });
        }
        updateSliderValue(e, t, s) {
          if (s.updated_view === this) return;
          const i = this.$slider.noUiSlider.get(),
            a = this.model.get('value');
          i !== a && this.$slider.noUiSlider.set(a);
        }
      }
      class ke extends we {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'IntTextModel',
            _view_name: 'IntTextView',
            disabled: !1,
            continuous_update: !1,
          });
        }
      }
      class Le extends ye {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'BoundedIntTextModel',
            _view_name: 'IntTextView',
            disabled: !1,
            continuous_update: !1,
            step: 1,
          });
        }
      }
      class Ve extends h {
        constructor() {
          super(...arguments),
            (this._parse_value = parseInt),
            (this._default_step = '1');
        }
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-text'),
            (this.textbox = document.createElement('input')),
            (this.textbox.type = 'number'),
            (this.textbox.required = !0),
            (this.textbox.id = this.label.htmlFor = (0, i.uuid)()),
            this.el.appendChild(this.textbox),
            this.update();
        }
        update(e) {
          if (void 0 === e || e.updated_view !== this) {
            const e = this.model.get('value');
            this._parse_value(this.textbox.value) !== e &&
              (this.textbox.value = e.toString()),
              void 0 !== this.model.get('min') &&
                (this.textbox.min = this.model.get('min')),
              void 0 !== this.model.get('max') &&
                (this.textbox.max = this.model.get('max')),
              void 0 !== this.model.get('step') && null !== this.model.get('step')
                ? (this.textbox.step = this.model.get('step'))
                : (this.textbox.step = this._default_step),
              (this.textbox.disabled = this.model.get('disabled'));
          }
          return super.update();
        }
        events() {
          return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'keyup input': 'handleKeyUp',
            'input input': 'handleChanging',
            'change input': 'handleChanged',
          };
        }
        handleKeyDown(e) {
          e.stopPropagation();
        }
        handleKeypress(e) {
          /[e,. ]/.test(String.fromCharCode(e.keyCode)) && e.preventDefault();
        }
        handleKeyUp(e) {
          if (e.altKey || e.ctrlKey) return;
          const t = e.target;
          let s = t.value;
          if (((s = s.replace(/[e,.\s]/g, '')), s.length >= 1)) {
            const e = s.substr(1);
            s = s[0] + e.replace(/[+-]/g, '');
          }
          t.value !== s && (e.preventDefault(), (t.value = s));
        }
        handleChanging(e) {
          const t = e.target.value.trim();
          '' === t ||
            ['-', '-.', '.', '+.', '+'].indexOf(t) >= 0 ||
            (this.model.get('continuous_update') && this.handleChanged(e));
        }
        handleChanged(e) {
          const t = e.target;
          let s = this._parse_value(t.value);
          if (isNaN(s)) t.value = this.model.get('value');
          else {
            let e = s;
            void 0 !== this.model.get('max') &&
              (e = Math.min(this.model.get('max'), e)),
              void 0 !== this.model.get('min') &&
                (e = Math.max(this.model.get('min'), e)),
              e !== s && ((t.value = e), (s = e)),
              s !== this.model.get('value') &&
                (this.model.set('value', s, { updated_view: this }), this.touch());
          }
        }
      }
      class Ie extends o {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ProgressStyleModel',
          });
        }
      }
      Ie.styleProperties = Object.assign(Object.assign({}, o.styleProperties), {
        bar_color: {
          selector: '.progress-bar',
          attribute: 'background-color',
          default: null,
        },
      });
      class We extends ye {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'IntProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null,
          });
        }
      }
      class Ae extends h {
        initialize(e) {
          super.initialize(e),
            this.listenTo(this.model, 'change:bar_style', this.update_bar_style),
            this.luminoWidget.addClass('jupyter-widgets');
        }
        render() {
          super.render();
          const e =
            'horizontal' === this.model.get('orientation')
              ? 'widget-hprogress'
              : 'widget-vprogress';
          this.el.classList.add(e),
            (this.progress = document.createElement('div')),
            this.progress.classList.add('progress'),
            (this.progress.style.position = 'relative'),
            this.el.appendChild(this.progress),
            (this.bar = document.createElement('div')),
            this.bar.classList.add('progress-bar'),
            (this.bar.style.position = 'absolute'),
            (this.bar.style.bottom = '0px'),
            (this.bar.style.left = '0px'),
            this.progress.appendChild(this.bar),
            this.update(),
            this.set_bar_style();
        }
        update() {
          const e = this.model.get('value'),
            t = this.model.get('max'),
            s = this.model.get('min'),
            i = (100 * (e - s)) / (t - s);
          return (
            'horizontal' === this.model.get('orientation')
              ? (this.el.classList.remove('widget-inline-vbox'),
                this.el.classList.remove('widget-vprogress'),
                this.el.classList.add('widget-inline-hbox'),
                this.el.classList.add('widget-hprogress'),
                (this.bar.style.width = i + '%'),
                (this.bar.style.height = '100%'))
              : (this.el.classList.remove('widget-inline-hbox'),
                this.el.classList.remove('widget-hprogress'),
                this.el.classList.add('widget-inline-vbox'),
                this.el.classList.add('widget-vprogress'),
                (this.bar.style.width = '100%'),
                (this.bar.style.height = i + '%')),
            super.update()
          );
        }
        update_bar_style() {
          this.update_mapped_classes(Ae.class_map, 'bar_style', this.bar);
        }
        set_bar_style() {
          this.set_mapped_classes(Ae.class_map, 'bar_style', this.bar);
        }
      }
      Ae.class_map = {
        success: ['progress-bar-success'],
        info: ['progress-bar-info'],
        warning: ['progress-bar-warning'],
        danger: ['progress-bar-danger'],
      };
      class Ee extends ye {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'PlayModel',
            _view_name: 'PlayView',
            repeat: !1,
            playing: !1,
            show_repeat: !0,
            interval: 100,
            step: 1,
            disabled: !1,
          });
        }
        initialize(e, t) {
          super.initialize(e, t);
        }
        loop() {
          if (!this.get('playing')) return;
          const e = this.get('value') + this.get('step');
          e <= this.get('max')
            ? (this.set('value', e), this.schedule_next())
            : this.get('repeat')
            ? (this.set('value', this.get('min')), this.schedule_next())
            : this.pause(),
            this.save_changes();
        }
        schedule_next() {
          this._timerId = window.setTimeout(this.loop.bind(this), this.get('interval'));
        }
        stop() {
          this.pause(), this.set('value', this.get('min')), this.save_changes();
        }
        pause() {
          window.clearTimeout(this._timerId),
            (this._timerId = void 0),
            this.set('playing', !1),
            this.save_changes();
        }
        animate() {
          void 0 === this._timerId &&
            (this.get('value') === this.get('max')
              ? (this.set('value', this.get('min')),
                this.schedule_next(),
                this.save_changes())
              : this.loop(),
            this.save_changes());
        }
        play() {
          this.set('playing', !this.get('playing')), this.save_changes();
        }
        repeat() {
          this.set('repeat', !this.get('repeat')), this.save_changes();
        }
      }
      class Be extends i.DOMWidgetView {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox'),
            this.el.classList.add('widget-play'),
            (this.playPauseButton = document.createElement('button')),
            (this.stopButton = document.createElement('button')),
            (this.repeatButton = document.createElement('button')),
            (this.playPauseButton.className = 'jupyter-button'),
            (this.stopButton.className = 'jupyter-button'),
            (this.repeatButton.className = 'jupyter-button'),
            this.el.appendChild(this.playPauseButton),
            this.el.appendChild(this.stopButton),
            this.el.appendChild(this.repeatButton);
          const e = document.createElement('i');
          (e.className = 'fa fa-play'), this.playPauseButton.appendChild(e);
          const t = document.createElement('i');
          (t.className = 'fa fa-stop'), this.stopButton.appendChild(t);
          const s = document.createElement('i');
          (s.className = 'fa fa-retweet'),
            this.repeatButton.appendChild(s),
            (this.playPauseButton.onclick = this.model.play.bind(this.model)),
            (this.stopButton.onclick = this.model.stop.bind(this.model)),
            (this.repeatButton.onclick = this.model.repeat.bind(this.model)),
            this.listenTo(this.model, 'change:playing', this.onPlayingChanged),
            this.listenTo(this.model, 'change:repeat', this.updateRepeat),
            this.listenTo(this.model, 'change:show_repeat', this.updateRepeat),
            this.updatePlaying(),
            this.updateRepeat(),
            this.update();
        }
        update() {
          const e = this.model.get('disabled');
          (this.playPauseButton.disabled = e),
            (this.stopButton.disabled = e),
            (this.repeatButton.disabled = e),
            this.updatePlaying();
        }
        onPlayingChanged() {
          this.updatePlaying();
          const e = this.model.previous('playing'),
            t = this.model.get('playing');
          !e && t ? this.model.animate() : this.model.pause();
        }
        updatePlaying() {
          const e = this.model.get('playing');
          this.playPauseButton.getElementsByTagName('i')[0].className = e
            ? 'fa fa-pause'
            : 'fa fa-play';
        }
        updateRepeat() {
          const e = this.model.get('repeat');
          (this.repeatButton.style.display = this.model.get('show_repeat')
            ? this.playPauseButton.style.display
            : 'none'),
            e
              ? this.repeatButton.classList.add('mod-active')
              : this.repeatButton.classList.remove('mod-active');
        }
      }
      class ze extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'FloatModel',
            value: 0,
          });
        }
      }
      class De extends ze {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'BoundedFloatModel',
            max: 100,
            min: 0,
          });
        }
      }
      class Pe extends De {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'FloatSliderModel',
            _view_name: 'FloatSliderView',
            step: 1,
            orientation: 'horizontal',
            _range: !1,
            readout: !0,
            readout_format: '.2f',
            slider_color: null,
            continuous_update: !0,
            disabled: !1,
          });
        }
        initialize(e, t) {
          super.initialize(e, t),
            this.on('change:readout_format', this.update_readout_format, this),
            this.update_readout_format();
        }
        update_readout_format() {
          this.readout_formatter = (0, ve.WU)(this.get('readout_format'));
        }
      }
      class Ue extends De {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'FloatLogSliderModel',
            _view_name: 'FloatLogSliderView',
            step: 0.1,
            orientation: 'horizontal',
            _range: !1,
            readout: !0,
            readout_format: '.3g',
            slider_color: null,
            continuous_update: !0,
            disabled: !1,
            base: 10,
            value: 1,
            min: 0,
            max: 4,
          });
        }
        initialize(e, t) {
          super.initialize(e, t),
            this.on('change:readout_format', this.update_readout_format, this),
            this.update_readout_format();
        }
        update_readout_format() {
          this.readout_formatter = (0, ve.WU)(this.get('readout_format'));
        }
      }
      class Fe extends Pe {}
      class Re extends Oe {
        constructor() {
          super(...arguments), (this._parse_value = parseFloat);
        }
        _validate_slide_value(e) {
          return e;
        }
      }
      class Ne extends Te {
        constructor() {
          super(...arguments), (this._parse_value = parseFloat);
        }
        update(e) {
          super.update(e);
          const t = this.model.get('value');
          this.readout.textContent = this.valueToString(t);
        }
        logCalc(e) {
          const t = this.model.get('min'),
            s = this.model.get('max'),
            i = this.model.get('base');
          let a = Math.log(e) / Math.log(i);
          return a > s ? (a = s) : a < t && (a = t), a;
        }
        createSlider() {
          var e;
          const t = this.model.get('orientation'),
            s = this.model.get('behavior');
          fe().create(this.$slider, {
            start: this.logCalc(this.model.get('value')),
            behaviour: s,
            range: { min: this.model.get('min'), max: this.model.get('max') },
            step: null !== (e = this.model.get('step')) && void 0 !== e ? e : void 0,
            animate: !1,
            orientation: t,
            direction: 'horizontal' === t ? 'ltr' : 'rtl',
            format: { from: (e) => Number(e), to: (e) => e },
          }),
            this.$slider.noUiSlider.on('update', (e, t) => {
              this.handleSliderUpdateEvent(e, t);
            }),
            this.$slider.noUiSlider.on('change', (e, t) => {
              this.handleSliderChangeEvent(e, t);
            });
        }
        valueToString(e) {
          return (0, this.model.readout_formatter)(e);
        }
        stringToValue(e) {
          return null === e ? NaN : this._parse_value(e);
        }
        handleTextChange() {
          let e = this.stringToValue(this.readout.textContent);
          const t = this.model.get('min'),
            s = this.model.get('max'),
            i = this.model.get('base');
          isNaN(e)
            ? (this.readout.textContent = this.valueToString(this.model.get('value')))
            : ((e = Math.max(Math.min(e, Math.pow(i, s)), Math.pow(i, t))),
              e !== this.model.get('value')
                ? ((this.readout.textContent = this.valueToString(e)),
                  this.model.set('value', e),
                  this.touch())
                : (this.readout.textContent = this.valueToString(
                    this.model.get('value')
                  )));
        }
        handleSliderUpdateEvent(e, t) {
          const s = this.model.get('base'),
            i = Math.pow(s, this._validate_slide_value(e[0]));
          (this.readout.textContent = this.valueToString(i)),
            this.model.get('continuous_update') && this.handleSliderChanged(e, t);
        }
        handleSliderChangeEvent(e, t) {
          const s = this.model.get('base'),
            i = Math.pow(s, this._validate_slide_value(e[0]));
          (this.readout.textContent = this.valueToString(i)),
            this.handleSliderChanged(e, t);
        }
        handleSliderChanged(e, t) {
          if (this._updating_slider) return;
          const s = this.model.get('base'),
            i = Math.pow(s, this._validate_slide_value(e[0]));
          this.model.set('value', i, { updated_view: this }), this.touch();
        }
        updateSliderValue(e, t, s) {
          if (s.updated_view === this) return;
          const i = this.logCalc(this.model.get('value'));
          this.$slider.noUiSlider.set(i);
        }
        updateSliderOptions(e) {
          this.$slider.noUiSlider.updateOptions({
            start: this.logCalc(this.model.get('value')),
            range: { min: this.model.get('min'), max: this.model.get('max') },
            step: this.model.get('step'),
          });
        }
        _validate_slide_value(e) {
          return e;
        }
      }
      class $e extends Se {
        constructor() {
          super(...arguments),
            (this._parse_value = parseFloat),
            (this._range_regex =
              /^\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][-:]?\d+)?)\s*[-:–]\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][+-]?\d+)?)/);
        }
        _validate_slide_value(e) {
          return e;
        }
      }
      class He extends ze {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'FloatTextModel',
            _view_name: 'FloatTextView',
            disabled: !1,
            continuous_update: !1,
          });
        }
      }
      class Ke extends De {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'BoundedFloatTextModel',
            _view_name: 'FloatTextView',
            disabled: !1,
            continuous_update: !1,
            step: 0.1,
          });
        }
      }
      class qe extends Ve {
        constructor() {
          super(...arguments),
            (this._parse_value = parseFloat),
            (this._default_step = 'any');
        }
        handleKeypress(e) {
          e.stopPropagation();
        }
        handleKeyUp(e) {}
      }
      class Ge extends De {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'FloatProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null,
          });
        }
      }
      class Je extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ControllerButtonModel',
            _view_name: 'ControllerButtonView',
            value: 0,
            pressed: !1,
          });
        }
      }
      class Ye extends i.DOMWidgetView {
        render() {
          this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-controller-button'),
            (this.el.style.width = 'fit-content'),
            (this.support = document.createElement('div')),
            (this.support.style.position = 'relative'),
            (this.support.style.margin = '1px'),
            (this.support.style.width = '16px'),
            (this.support.style.height = '16px'),
            (this.support.style.border = '1px solid black'),
            (this.support.style.background = 'lightgray'),
            this.el.appendChild(this.support),
            (this.bar = document.createElement('div')),
            (this.bar.style.position = 'absolute'),
            (this.bar.style.width = '100%'),
            (this.bar.style.bottom = '0px'),
            (this.bar.style.background = 'gray'),
            this.support.appendChild(this.bar),
            this.update(),
            (this.label = document.createElement('div')),
            (this.label.textContent = this.model.get('description')),
            (this.label.style.textAlign = 'center'),
            this.el.appendChild(this.label);
        }
        update() {
          this.bar.style.height = 100 * this.model.get('value') + '%';
        }
      }
      class Ze extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ControllerAxisModel',
            _view_name: 'ControllerAxisView',
            value: 0,
          });
        }
      }
      class Qe extends i.DOMWidgetView {
        render() {
          this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-controller-axis'),
            (this.el.style.width = '16px'),
            (this.el.style.padding = '4px'),
            (this.support = document.createElement('div')),
            (this.support.style.position = 'relative'),
            (this.support.style.margin = '1px'),
            (this.support.style.width = '4px'),
            (this.support.style.height = '64px'),
            (this.support.style.border = '1px solid black'),
            (this.support.style.background = 'lightgray'),
            (this.bullet = document.createElement('div')),
            (this.bullet.style.position = 'absolute'),
            (this.bullet.style.margin = '-3px'),
            (this.bullet.style.boxSizing = 'unset'),
            (this.bullet.style.width = '10px'),
            (this.bullet.style.height = '10px'),
            (this.bullet.style.background = 'gray'),
            (this.label = document.createElement('div')),
            (this.label.textContent = this.model.get('description')),
            (this.label.style.textAlign = 'center'),
            this.support.appendChild(this.bullet),
            this.el.appendChild(this.support),
            this.el.appendChild(this.label),
            this.update();
        }
        update() {
          this.bullet.style.top = 50 * (this.model.get('value') + 1) + '%';
        }
      }
      class Xe extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ControllerModel',
            _view_name: 'ControllerView',
            index: 0,
            name: '',
            mapping: '',
            connected: !1,
            timestamp: 0,
            buttons: [],
            axes: [],
          });
        }
        initialize(e, t) {
          super.initialize(e, t),
            void 0 === navigator.getGamepads
              ? ((this.readout = 'This browser does not support gamepads.'),
                console.error(this.readout))
              : ((this.readout = 'Connect gamepad and press any button.'),
                this.get('connected') ? this.update_loop() : this.wait_loop());
        }
        wait_loop() {
          const e = this.get('index'),
            t = navigator.getGamepads()[e];
          t
            ? this.setup(t).then((e) => {
                this.set(e),
                  this.save_changes(),
                  window.requestAnimationFrame(this.update_loop.bind(this));
              })
            : window.requestAnimationFrame(this.wait_loop.bind(this));
        }
        setup(e) {
          return (
            this.set({
              name: e.id,
              mapping: e.mapping,
              connected: e.connected,
              timestamp: e.timestamp,
            }),
            i.resolvePromisesDict({
              buttons: Promise.all(
                e.buttons.map((e, t) => this._create_button_model(t))
              ),
              axes: Promise.all(e.axes.map((e, t) => this._create_axis_model(t))),
            })
          );
        }
        update_loop() {
          const e = this.get('index'),
            t = this.get('name'),
            s = navigator.getGamepads()[e];
          s && e === s.index && t === s.id
            ? (this.set({ timestamp: s.timestamp, connected: s.connected }),
              this.save_changes(),
              this.get('buttons').forEach(function (e, t) {
                e.set({ value: s.buttons[t].value, pressed: s.buttons[t].pressed }),
                  e.save_changes();
              }),
              this.get('axes').forEach(function (e, t) {
                e.set('value', s.axes[t]), e.save_changes();
              }),
              window.requestAnimationFrame(this.update_loop.bind(this)))
            : this.reset_gamepad();
        }
        reset_gamepad() {
          this.get('buttons').forEach(function (e) {
            e.close();
          }),
            this.get('axes').forEach(function (e) {
              e.close();
            }),
            this.set({
              name: '',
              mapping: '',
              connected: !1,
              timestamp: 0,
              buttons: [],
              axes: [],
            }),
            this.save_changes(),
            window.requestAnimationFrame(this.wait_loop.bind(this));
        }
        _create_button_model(e) {
          return this.widget_manager
            .new_widget({
              model_name: 'ControllerButtonModel',
              model_module: '@jupyter-widgets/controls',
              model_module_version: this.get('_model_module_version'),
              view_name: 'ControllerButtonView',
              view_module: '@jupyter-widgets/controls',
              view_module_version: this.get('_view_module_version'),
            })
            .then(function (t) {
              return t.set('description', e), t;
            });
        }
        _create_axis_model(e) {
          return this.widget_manager
            .new_widget({
              model_name: 'ControllerAxisModel',
              model_module: '@jupyter-widgets/controls',
              model_module_version: this.get('_model_module_version'),
              view_name: 'ControllerAxisView',
              view_module: '@jupyter-widgets/controls',
              view_module_version: this.get('_view_module_version'),
            })
            .then(function (t) {
              return t.set('description', e), t;
            });
        }
      }
      Xe.serializers = Object.assign(Object.assign({}, g.serializers), {
        buttons: { deserialize: i.unpack_models },
        axes: { deserialize: i.unpack_models },
      });
      class et extends i.DOMWidgetView {
        _createElement(e) {
          return (
            (this.luminoWidget = new i.JupyterLuminoPanelWidget({ view: this })),
            this.luminoWidget.node
          );
        }
        _setElement(e) {
          if (this.el || e !== this.luminoWidget.node)
            throw new Error('Cannot reset the DOM element.');
          (this.el = this.luminoWidget.node), (this.$el = A()(this.luminoWidget.node));
        }
        initialize(e) {
          super.initialize(e),
            (this.button_views = new i.ViewList(this.add_button, null, this)),
            this.listenTo(this.model, 'change:buttons', (e, t) => {
              this.button_views.update(t);
            }),
            (this.axis_views = new i.ViewList(this.add_axis, null, this)),
            this.listenTo(this.model, 'change:axes', (e, t) => {
              this.axis_views.update(t);
            }),
            this.listenTo(this.model, 'change:name', this.update_label);
        }
        render() {
          this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-controller'),
            (this.label = document.createElement('div')),
            this.el.appendChild(this.label),
            (this.axis_box = new I.Panel()),
            (this.axis_box.node.style.display = 'flex'),
            this.luminoWidget.addWidget(this.axis_box),
            (this.button_box = new I.Panel()),
            (this.button_box.node.style.display = 'flex'),
            this.luminoWidget.addWidget(this.button_box),
            this.button_views.update(this.model.get('buttons')),
            this.axis_views.update(this.model.get('axes')),
            this.update_label();
        }
        update_label() {
          this.label.textContent = this.model.get('name') || this.model.readout;
        }
        add_button(e) {
          const t = new I.Widget();
          return (
            this.button_box.addWidget(t),
            this.create_child_view(e)
              .then((e) => {
                const s = L.ArrayExt.firstIndexOf(this.button_box.widgets, t);
                return this.button_box.insertWidget(s, e.luminoWidget), t.dispose(), e;
              })
              .catch((0, i.reject)('Could not add child button view to controller', !0))
          );
        }
        add_axis(e) {
          const t = new I.Widget();
          return (
            this.axis_box.addWidget(t),
            this.create_child_view(e)
              .then((e) => {
                const s = L.ArrayExt.firstIndexOf(this.axis_box.widgets, t);
                return this.axis_box.insertWidget(s, e.luminoWidget), t.dispose(), e;
              })
              .catch((0, i.reject)('Could not add child axis view to controller', !0))
          );
        }
        remove() {
          super.remove(), this.button_views.remove(), this.axis_views.remove();
        }
      }
      class tt extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'SelectionModel',
            index: '',
            _options_labels: [],
            disabled: !1,
          });
        }
      }
      class st extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox');
        }
        update() {
          super.update(),
            this.listbox && (this.listbox.disabled = this.model.get('disabled')),
            this.updateTabindex(),
            this.updateTooltip();
        }
        updateTabindex() {
          if (!this.listbox) return;
          const e = this.model.get('tabbable');
          !0 === e
            ? this.listbox.setAttribute('tabIndex', '0')
            : !1 === e
            ? this.listbox.setAttribute('tabIndex', '-1')
            : null === e && this.listbox.removeAttribute('tabIndex');
        }
        updateTooltip() {
          if (!this.listbox) return;
          const e = this.model.get('tooltip');
          e
            ? 0 === this.model.get('description').length &&
              this.listbox.setAttribute('title', e)
            : this.listbox.removeAttribute('title');
        }
      }
      class it extends tt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'DropdownModel',
            _view_name: 'DropdownView',
            button_style: '',
          });
        }
      }
      class at extends st {
        render() {
          super.render(),
            this.el.classList.add('widget-dropdown'),
            (this.listbox = document.createElement('select')),
            (this.listbox.id = this.label.htmlFor = (0, i.uuid)()),
            this.el.appendChild(this.listbox),
            this._updateOptions(),
            this.update();
        }
        update(e) {
          (null == e ? void 0 : e.updated_view) !== this &&
            this.model.hasChanged('_options_labels') &&
            this._updateOptions();
          const t = this.model.get('index');
          return (this.listbox.selectedIndex = null === t ? -1 : t), super.update();
        }
        _updateOptions() {
          this.listbox.textContent = '';
          const e = this.model.get('_options_labels');
          for (let t = 0; t < e.length; t++) {
            const s = e[t],
              i = document.createElement('option');
            (i.textContent = s.replace(/ /g, ' ')),
              i.setAttribute('data-value', encodeURIComponent(s)),
              (i.value = s),
              this.listbox.appendChild(i);
          }
        }
        events() {
          return { 'change select': '_handle_change' };
        }
        _handle_change() {
          this.model.set(
            'index',
            -1 === this.listbox.selectedIndex ? null : this.listbox.selectedIndex,
            { updated_view: this }
          ),
            this.touch();
        }
        handle_message(e) {
          'focus' === e.do
            ? this.listbox.focus()
            : 'blur' === e.do && this.listbox.blur();
        }
      }
      class lt extends tt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'SelectModel',
            _view_name: 'SelectView',
            rows: 5,
          });
        }
      }
      class dt extends st {
        initialize(e) {
          super.initialize(e), (this.listbox = document.createElement('select'));
        }
        render() {
          super.render(),
            this.el.classList.add('widget-select'),
            (this.listbox.id = this.label.htmlFor = (0, i.uuid)()),
            this.el.appendChild(this.listbox),
            this._updateOptions(),
            this.update(),
            this.updateSelection();
        }
        update(e) {
          if ((null == e ? void 0 : e.updated_view) !== this) {
            const e = this.model.hasChanged('_options_labels'),
              t = this.model.hasChanged('index');
            if (e || t) {
              const t = this.model.get('index');
              e && this._updateOptions(), this.updateSelection(t);
            }
          }
          super.update();
          let t = this.model.get('rows');
          null === t && (t = ''), this.listbox.setAttribute('size', t);
        }
        updateSelection(e) {
          (e = e || this.model.get('index')),
            (this.listbox.selectedIndex = null === e ? -1 : e);
        }
        _updateOptions() {
          this.listbox.textContent = '';
          const e = this.model.get('_options_labels');
          for (let t = 0; t < e.length; t++) {
            const s = e[t],
              i = document.createElement('option');
            (i.textContent = s.replace(/ /g, ' ')),
              i.setAttribute('data-value', encodeURIComponent(s)),
              (i.value = s),
              this.listbox.appendChild(i);
          }
        }
        events() {
          return { 'change select': '_handle_change' };
        }
        _handle_change() {
          this.model.set('index', this.listbox.selectedIndex, { updated_view: this }),
            this.touch();
        }
        handle_message(e) {
          'focus' == e.do
            ? this.listbox.focus()
            : 'blur' == e.do && this.listbox.blur();
        }
      }
      class nt extends tt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'RadioButtonsModel',
            _view_name: 'RadioButtonsView',
            tooltips: [],
            icons: [],
            button_style: '',
          });
        }
      }
      class ot extends h {
        render() {
          super.render(),
            this.el.classList.add('widget-radio'),
            (this.container = document.createElement('div')),
            this.el.appendChild(this.container),
            this.container.classList.add('widget-radio-box'),
            this.update();
        }
        update(e) {
          const t = this.model.get('_options_labels'),
            s = Array.from(this.container.querySelectorAll('input[type="radio"]')).map(
              (e) => e.value
            );
          let i = t.length !== s.length;
          if (!i)
            for (let e = 0, a = t.length; e < a; ++e)
              if (s[e] !== t[e]) {
                i = !0;
                break;
              }
          return (
            !i ||
              (void 0 !== e && e.updated_view === this) ||
              ((this.container.textContent = ''),
              t.forEach((e, t) => {
                const s = document.createElement('label');
                (s.textContent = e), this.container.appendChild(s);
                const i = document.createElement('input');
                i.setAttribute('type', 'radio'),
                  (i.value = t.toString()),
                  i.setAttribute('data-value', encodeURIComponent(e)),
                  s.appendChild(i);
              })),
            t.forEach((e, t) => {
              const s = 'input[data-value="' + encodeURIComponent(e) + '"]',
                i = this.container.querySelectorAll(s);
              if (i.length > 0) {
                const e = i[0];
                (e.checked = this.model.get('index') === t),
                  (e.disabled = this.model.get('disabled'));
              }
            }),
            setTimeout(this.adjustPadding, 0, this),
            super.update(e)
          );
        }
        adjustPadding(e) {
          const t = window.getComputedStyle(e.el),
            s = parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10),
            i = e.label.offsetHeight + s,
            a = window.getComputedStyle(e.container),
            l = parseInt(a.marginBottom, 10),
            d = (e.el.offsetHeight + s - l) % i,
            n = 0 === d ? 0 : i - d;
          e.container.style.marginBottom = n + 'px';
        }
        events() {
          return { 'click input[type="radio"]': '_handle_click' };
        }
        _handle_click(e) {
          const t = e.target;
          this.model.set('index', parseInt(t.value, 10), { updated_view: this }),
            this.touch();
        }
        handle_message(e) {
          if ('focus' == e.do) this.container.firstElementChild.focus();
          else if ('blur' == e.do)
            for (let e = 0; e < this.container.children.length; e++)
              this.container.children[e].blur();
        }
      }
      class rt extends o {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ToggleButtonsStyleModel',
          });
        }
      }
      rt.styleProperties = Object.assign(Object.assign({}, o.styleProperties), {
        button_width: {
          selector: '.widget-toggle-button',
          attribute: 'width',
          default: null,
        },
        font_weight: {
          selector: '.widget-toggle-button',
          attribute: 'font-weight',
          default: '',
        },
      });
      class ht extends tt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ToggleButtonsModel',
            _view_name: 'ToggleButtonsView',
          });
        }
      }
      class ut extends h {
        initialize(e) {
          (this._css_state = {}),
            super.initialize(e),
            this.listenTo(this.model, 'change:button_style', this.update_button_style);
        }
        render() {
          super.render(),
            this.el.classList.add('widget-toggle-buttons'),
            (this.buttongroup = document.createElement('div')),
            this.el.appendChild(this.buttongroup),
            this.update(),
            this.set_button_style();
        }
        update(e) {
          const t = this.model.get('_options_labels'),
            s = this.model.get('icons') || [],
            i = this.model.previous('icons') || [],
            a = ut.classMap[this.model.previous('button_style')] || '',
            d = this.model.get('tooltips') || [],
            n = this.model.get('disabled'),
            o = this.buttongroup.querySelectorAll('button'),
            r = Array.from(o).map((e) => e.value);
          let h = !1;
          for (let e = 0, a = t.length; e < a; ++e)
            if (r[e] !== t[e] || s[e] !== i[e]) {
              h = !0;
              break;
            }
          return (
            !h ||
              (void 0 !== e && e.updated_view === this) ||
              ((this.buttongroup.textContent = ''),
              t.forEach((e, t) => {
                let i;
                i =
                  0 !== e.trim().length || (s[t] && 0 !== s[t].trim().length)
                    ? l(e)
                    : '&nbsp;';
                const o = document.createElement('i'),
                  r = document.createElement('button');
                s[t] && (o.className = 'fa fa-' + s[t]),
                  r.setAttribute('type', 'button'),
                  (r.className = 'widget-toggle-button jupyter-button'),
                  a && r.classList.add(a),
                  (r.innerHTML = i),
                  r.setAttribute('data-value', encodeURIComponent(e)),
                  r.setAttribute('value', t.toString()),
                  r.appendChild(o),
                  (r.disabled = n),
                  d[t] && r.setAttribute('title', d[t]),
                  this.update_style_traits(r),
                  this.buttongroup.appendChild(r);
              })),
            t.forEach((e, t) => {
              const s = '[data-value="' + encodeURIComponent(e) + '"]',
                i = this.buttongroup.querySelector(s);
              this.model.get('index') === t
                ? i.classList.add('mod-active')
                : i.classList.remove('mod-active');
            }),
            this.stylePromise.then(function (e) {
              e && e.style();
            }),
            super.update(e)
          );
        }
        update_style_traits(e) {
          for (const t in this._css_state)
            if (Object.prototype.hasOwnProperty.call(this._css_state, 'name'))
              if ('margin' === t) this.buttongroup.style[t] = this._css_state[t];
              else if ('width' !== t)
                if (e) e.style[t] = this._css_state[t];
                else {
                  const e = this.buttongroup.querySelectorAll('button');
                  e.length && (e[0].style[t] = this._css_state[t]);
                }
        }
        update_button_style() {
          const e = this.buttongroup.querySelectorAll('button');
          for (let t = 0; t < e.length; t++)
            this.update_mapped_classes(ut.classMap, 'button_style', e[t]);
        }
        set_button_style() {
          const e = this.buttongroup.querySelectorAll('button');
          for (let t = 0; t < e.length; t++)
            this.set_mapped_classes(ut.classMap, 'button_style', e[t]);
        }
        events() {
          return { 'click button': '_handle_click' };
        }
        _handle_click(e) {
          const t = e.target;
          this.model.set('index', parseInt(t.value, 10), { updated_view: this }),
            this.touch(),
            this.send({ event: 'click' });
        }
      }
      !(function (e) {
        e.classMap = {
          primary: ['mod-primary'],
          success: ['mod-success'],
          info: ['mod-info'],
          warning: ['mod-warning'],
          danger: ['mod-danger'],
        };
      })(ut || (ut = {}));
      class ct extends tt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'SelectionSliderModel',
            _view_name: 'SelectionSliderView',
            orientation: 'horizontal',
            readout: !0,
            continuous_update: !0,
          });
        }
      }
      class pt extends h {
        render() {
          super.render(),
            this.el.classList.add('widget-hslider'),
            this.el.classList.add('widget-slider'),
            (this.$slider = document.createElement('div')),
            this.$slider.classList.add('slider'),
            (this.slider_container = document.createElement('div')),
            this.slider_container.classList.add('slider-container'),
            this.slider_container.appendChild(this.$slider),
            this.el.appendChild(this.slider_container),
            (this.readout = document.createElement('div')),
            this.el.appendChild(this.readout),
            this.readout.classList.add('widget-readout'),
            (this.readout.style.display = 'none'),
            this.createSlider(),
            this.model.on('change:orientation', this.regenSlider, this),
            this.model.on('change:index', this.updateSliderValue, this),
            this.update();
        }
        update(e) {
          if ((null == e ? void 0 : e.updated_view) !== this) {
            this.updateSliderOptions(this.model);
            const e = this.model.get('orientation');
            this.model.get('disabled')
              ? ((this.readout.contentEditable = 'false'),
                this.$slider.setAttribute('disabled', !0))
              : ((this.readout.contentEditable = 'true'),
                this.$slider.removeAttribute('disabled')),
              'vertical' === e
                ? (this.el.classList.remove('widget-hslider'),
                  this.el.classList.remove('widget-inline-hbox'),
                  this.el.classList.add('widget-vslider'),
                  this.el.classList.add('widget-inline-vbox'))
                : (this.el.classList.remove('widget-vslider'),
                  this.el.classList.remove('widget-inline-vbox'),
                  this.el.classList.add('widget-hslider'),
                  this.el.classList.add('widget-inline-hbox'));
            const t = this.model.get('readout');
            (this.readout.style.display = t ? '' : 'none'), this.updateSelection();
          }
          return super.update(e);
        }
        regenSlider(e) {
          this.$slider.noUiSlider.destroy(), this.createSlider();
        }
        createSlider() {
          const e = this.model.get('_options_labels').length - 1,
            t = this.model.get('orientation'),
            s = this.model.get('behavior');
          fe().create(this.$slider, {
            start: this.model.get('index'),
            connect: !0,
            behaviour: s,
            range: { min: 0, max: e },
            step: 1,
            animate: !1,
            orientation: t,
            direction: 'horizontal' === t ? 'ltr' : 'rtl',
            format: { from: (e) => Number(e), to: (e) => Math.round(e) },
          }),
            this.$slider.noUiSlider.on('update', (e, t) => {
              this.handleSliderUpdateEvent(e, t);
            }),
            this.$slider.noUiSlider.on('change', (e, t) => {
              this.handleSliderChangeEvent(e, t);
            });
        }
        events() {
          return { slide: 'handleSliderChange', slidestop: 'handleSliderChanged' };
        }
        updateSelection() {
          const e = this.model.get('index');
          this.updateReadout(e);
        }
        updateReadout(e) {
          const t = this.model.get('_options_labels')[e];
          this.readout.textContent = t;
        }
        handleSliderUpdateEvent(e, t) {
          const s = e[0];
          this.updateReadout(s),
            this.model.get('continuous_update') && this.handleSliderChanged(e, t);
        }
        handleSliderChangeEvent(e, t) {
          const s = e[0];
          this.updateReadout(s), this.handleSliderChanged(e, t);
        }
        handleSliderChanged(e, t) {
          const s = e[0];
          this.updateReadout(s),
            this.model.set('index', s, { updated_view: this }),
            this.touch();
        }
        updateSliderOptions(e) {
          const t = this.model.get('_options_labels').length - 1;
          this.$slider.noUiSlider.updateOptions({
            start: this.model.get('index'),
            range: { min: 0, max: t },
            step: 1,
          });
        }
        updateSliderValue(e, t, s) {
          if (s.updated_view === this) return;
          const i = this.$slider.noUiSlider.get(),
            a = this.model.get('index');
          i !== a && this.$slider.noUiSlider.set(a);
        }
      }
      class gt extends tt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'MultipleSelectionModel',
          });
        }
      }
      class mt extends gt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'SelectMultipleModel',
            _view_name: 'SelectMultipleView',
            rows: null,
          });
        }
      }
      class _t extends dt {
        initialize(e) {
          super.initialize(e), (this.listbox.multiple = !0);
        }
        render() {
          super.render(), this.el.classList.add('widget-select-multiple');
        }
        updateSelection() {
          const e = this.model.get('index') || [],
            t = this.listbox.options;
          (this.listbox.selectedIndex = -1),
            e.forEach((e) => {
              t[e].selected = !0;
            });
        }
        _handle_change() {
          const e = Array.prototype.map.call(
            this.listbox.selectedOptions || [],
            function (e) {
              return e.index;
            }
          );
          this.model.set('index', e, { updated_view: this }), this.touch();
        }
      }
      class bt extends gt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'SelectionSliderModel',
            _view_name: 'SelectionSliderView',
            orientation: 'horizontal',
            readout: !0,
            continuous_update: !0,
          });
        }
      }
      class vt extends pt {
        render() {
          super.render();
        }
        updateSelection(e) {
          (e = e || this.model.get('index')), this.updateReadout(e);
        }
        updateReadout(e) {
          const t = this.model.get('_options_labels'),
            s = t[e[0]],
            i = t[e[1]];
          this.readout.textContent = `${s}-${i}`;
        }
        handleSliderUpdateEvent(e, t) {
          const s = e.map(Math.trunc);
          this.updateReadout(s),
            this.model.get('continuous_update') && this.handleSliderChanged(e, t);
        }
        handleSliderChanged(e, t) {
          const s = e.map(Math.round);
          this.updateReadout(s),
            this.model.set('index', s.slice(), { updated_view: this }),
            this.touch();
        }
        updateSliderValue(e, t, s) {
          if (s.updated_view === this) return;
          const i = this.$slider.noUiSlider.get().map(Math.round),
            a = this.model.get('index').map(Math.round);
          (i[0] === a[0] && i[1] === a[1]) || this.$slider.noUiSlider.set(a);
        }
      }
      var xt = s(1840),
        ft = s(9520);
      class wt extends I.Panel {
        constructor() {
          super(...arguments), (this._widgetRemoved = new xt.Signal(this));
        }
        get widgetRemoved() {
          return this._widgetRemoved;
        }
        onChildRemoved(e) {
          this._widgetRemoved.emit(e.child);
        }
      }
      class yt extends I.Widget {
        constructor(e = {}) {
          super(),
            (this._currentChanged = new xt.Signal(this)),
            this.addClass('jupyter-widget-TabPanel'),
            (this.tabBar = new I.TabBar(e)),
            this.tabBar.addClass('jupyter-widget-TabPanel-tabBar'),
            (this.tabContents = new wt()),
            this.tabContents.addClass('jupyter-widget-TabPanel-tabContents'),
            this.tabBar.tabMoved.connect(this._onTabMoved, this),
            this.tabBar.currentChanged.connect(this._onCurrentChanged, this),
            this.tabBar.tabCloseRequested.connect(this._onTabCloseRequested, this),
            this.tabBar.tabActivateRequested.connect(
              this._onTabActivateRequested,
              this
            ),
            this.tabContents.widgetRemoved.connect(this._onWidgetRemoved, this);
          const t = new I.PanelLayout();
          t.addWidget(this.tabBar), t.addWidget(this.tabContents), (this.layout = t);
        }
        get currentChanged() {
          return this._currentChanged;
        }
        get currentIndex() {
          const e = this.tabBar.currentIndex;
          return -1 === e ? null : e;
        }
        set currentIndex(e) {
          this.tabBar.currentIndex = null === e ? -1 : e;
        }
        get currentWidget() {
          const e = this.tabBar.currentTitle;
          return e ? e.owner : null;
        }
        set currentWidget(e) {
          this.tabBar.currentTitle = e ? e.title : null;
        }
        get tabsMovable() {
          return this.tabBar.tabsMovable;
        }
        set tabsMovable(e) {
          this.tabBar.tabsMovable = e;
        }
        get widgets() {
          return this.tabContents.widgets;
        }
        addWidget(e) {
          this.insertWidget(this.widgets.length, e);
        }
        insertWidget(e, t) {
          t !== this.currentWidget && t.hide(),
            this.tabContents.insertWidget(e, t),
            this.tabBar.insertTab(e, t.title);
        }
        _onCurrentChanged(e, t) {
          const {
              previousIndex: s,
              previousTitle: i,
              currentIndex: a,
              currentTitle: l,
            } = t,
            d = i ? i.owner : null,
            n = l ? l.owner : null;
          d && d.hide(),
            n && n.show(),
            this._currentChanged.emit({
              previousIndex: s,
              previousWidget: d,
              currentIndex: a,
              currentWidget: n,
            }),
            (ft.Platform.IS_EDGE || ft.Platform.IS_IE) && V.MessageLoop.flush();
        }
        _onTabActivateRequested(e, t) {
          t.title.owner.activate();
        }
        _onTabCloseRequested(e, t) {
          t.title.owner.close();
        }
        _onTabMoved(e, t) {
          this.tabContents.insertWidget(t.toIndex, t.title.owner);
        }
        _onWidgetRemoved(e, t) {
          this.tabBar.removeTab(t.title);
        }
      }
      class Ct {
        constructor(e, t = {}) {
          (this._array = null),
            (this._value = null),
            (this._previousValue = null),
            (this._selectionChanged = new xt.Signal(this)),
            (this._array = e),
            (this._insertBehavior = t.insertBehavior || 'select-item-if-needed'),
            (this._removeBehavior = t.removeBehavior || 'select-item-after');
        }
        get selectionChanged() {
          return this._selectionChanged;
        }
        adjustSelectionForSet(e) {
          const t = this.index,
            s = this.value;
          if (e !== t) return;
          this._updateSelectedValue();
          const i = this.value;
          (this._previousValue = null),
            s !== i &&
              this._selectionChanged.emit({
                previousIndex: t,
                previousValue: s,
                currentIndex: t,
                currentValue: i,
              });
        }
        get value() {
          return this._value;
        }
        set value(e) {
          null === e || null === this._array
            ? (this.index = null)
            : (this.index = L.ArrayExt.firstIndexOf(this._array, e));
        }
        get index() {
          return this._index;
        }
        set index(e) {
          let t;
          if (
            (null !== e && null !== this._array
              ? ((t = Math.floor(e)), (t < 0 || t >= this._array.length) && (t = null))
              : (t = null),
            this._index === t)
          )
            return;
          const s = this._index,
            i = this._value;
          (this._index = t),
            this._updateSelectedValue(),
            (this._previousValue = i),
            this._selectionChanged.emit({
              previousIndex: s,
              previousValue: i,
              currentIndex: t,
              currentValue: this._value,
            });
        }
        get insertBehavior() {
          return this._insertBehavior;
        }
        set insertBehavior(e) {
          this._insertBehavior = e;
        }
        get removeBehavior() {
          return this._removeBehavior;
        }
        set removeBehavior(e) {
          this._removeBehavior = e;
        }
        adjustSelectionForInsert(e, t) {
          const s = this._value,
            i = this._index,
            a = this._insertBehavior;
          if ('select-item' === a || ('select-item-if-needed' === a && null === i))
            return (
              (this._index = e),
              (this._value = t),
              (this._previousValue = s),
              void this._selectionChanged.emit({
                previousIndex: i,
                previousValue: s,
                currentIndex: e,
                currentValue: t,
              })
            );
          null !== i && i >= e && this._index++;
        }
        clearSelection() {
          const e = this._index,
            t = this._value;
          (this._index = null),
            (this._value = null),
            (this._previousValue = null),
            null !== e &&
              this._selectionChanged.emit({
                previousIndex: e,
                previousValue: t,
                currentIndex: this._index,
                currentValue: this._value,
              });
        }
        adjustSelectionForRemove(e, t) {
          if (null === this._index) return;
          const s = this._index,
            i = this._removeBehavior;
          if (s === e) {
            if (!this._array || 0 === this._array.length)
              return (
                (this._index = null),
                (this._value = null),
                (this._previousValue = null),
                void this._selectionChanged.emit({
                  previousIndex: e,
                  previousValue: t,
                  currentIndex: this._index,
                  currentValue: this._value,
                })
              );
            if ('select-item-after' === i)
              return (
                (this._index = Math.min(e, this._array.length - 1)),
                this._updateSelectedValue(),
                (this._previousValue = null),
                void this._selectionChanged.emit({
                  previousIndex: e,
                  previousValue: t,
                  currentIndex: this._index,
                  currentValue: this._value,
                })
              );
            if ('select-item-before' === i)
              return (
                (this._index = Math.max(0, e - 1)),
                this._updateSelectedValue(),
                (this._previousValue = null),
                void this._selectionChanged.emit({
                  previousIndex: e,
                  previousValue: t,
                  currentIndex: this._index,
                  currentValue: this._value,
                })
              );
            if ('select-previous-item' === i)
              return (
                this._previousValue
                  ? (this.value = this._previousValue)
                  : ((this._index = Math.min(e, this._array.length - 1)),
                    this._updateSelectedValue()),
                (this._previousValue = null),
                void this._selectionChanged.emit({
                  previousIndex: e,
                  previousValue: t,
                  currentIndex: this._index,
                  currentValue: this.value,
                })
              );
            (this._index = null),
              (this._value = null),
              (this._previousValue = null),
              this._selectionChanged.emit({
                previousIndex: e,
                previousValue: t,
                currentIndex: this._index,
                currentValue: this._value,
              });
          } else s > e && this._index--;
        }
        _updateSelectedValue() {
          const e = this._index;
          this._value = null !== e && this._array ? this._array[e] : null;
        }
      }
      const Mt = 'jupyter-widget-Collapse-open';
      class jt extends I.Widget {
        constructor(e) {
          super(e),
            (this._collapseChanged = new xt.Signal(this)),
            this.addClass('jupyter-widget-Collapse'),
            (this._header = new I.Widget()),
            this._header.addClass('jupyter-widget-Collapse-header'),
            this._header.node.addEventListener('click', this);
          const t = document.createElement('i');
          t.classList.add('fa', 'fa-fw', 'fa-caret-right'),
            this._header.node.appendChild(t),
            this._header.node.appendChild(document.createElement('span')),
            (this._content = new I.Panel()),
            this._content.addClass('jupyter-widget-Collapse-contents');
          const s = new I.PanelLayout();
          (this.layout = s),
            s.addWidget(this._header),
            s.addWidget(this._content),
            e.widget && (this.widget = e.widget),
            (this.collapsed = !1);
        }
        dispose() {
          this.isDisposed ||
            (super.dispose(),
            (this._header = null),
            (this._widget = null),
            (this._content = null));
        }
        get widget() {
          return this._widget;
        }
        set widget(e) {
          const t = this._widget;
          t &&
            (t.disposed.disconnect(this._onChildDisposed, this),
            t.title.changed.disconnect(this._onTitleChanged, this),
            (t.parent = null)),
            (this._widget = e),
            e.disposed.connect(this._onChildDisposed, this),
            e.title.changed.connect(this._onTitleChanged, this),
            this._onTitleChanged(e.title),
            this._content.addWidget(e);
        }
        get collapsed() {
          return this._collapsed;
        }
        set collapsed(e) {
          e !== this._collapsed && (e ? this._collapse() : this._uncollapse());
        }
        toggle() {
          this.collapsed = !this.collapsed;
        }
        get collapseChanged() {
          return this._collapseChanged;
        }
        _collapse() {
          (this._collapsed = !0),
            this._content && this._content.hide(),
            this.removeClass(Mt),
            this._header.node.children[0].classList.add('fa-caret-right'),
            this._header.node.children[0].classList.remove('fa-caret-down'),
            this._collapseChanged.emit(void 0);
        }
        _uncollapse() {
          (this._collapsed = !1),
            this._content && this._content.show(),
            this.addClass(Mt),
            this._header.node.children[0].classList.add('fa-caret-down'),
            this._header.node.children[0].classList.remove('fa-caret-right'),
            this._collapseChanged.emit(void 0);
        }
        handleEvent(e) {
          'click' === e.type && this._evtClick(e);
        }
        _evtClick(e) {
          this.toggle();
        }
        _onTitleChanged(e) {
          this._header.node.children[1].textContent = this._widget.title.label;
        }
        _onChildDisposed(e) {
          this.dispose();
        }
      }
      const Tt = 'jupyter-widget-Accordion-child-active';
      class St extends I.Panel {
        constructor(e) {
          super(e),
            (this._selection = new Ct(this.widgets)),
            this._selection.selectionChanged.connect(this._onSelectionChanged, this),
            this.addClass('jupyter-widget-Accordion');
        }
        get collapseWidgets() {
          return this.layout.widgets;
        }
        get selection() {
          return this._selection;
        }
        indexOf(e) {
          return L.ArrayExt.findFirstIndex(this.collapseWidgets, (t) => t.widget === e);
        }
        addWidget(e) {
          const t = this._wrapWidget(e);
          return (
            (t.collapsed = !0),
            super.addWidget(t),
            this._selection.adjustSelectionForInsert(this.widgets.length - 1, t),
            t
          );
        }
        insertWidget(e, t) {
          const s = this._wrapWidget(t);
          (s.collapsed = !0),
            super.insertWidget(e, s),
            this._selection.adjustSelectionForInsert(e, s);
        }
        removeWidget(e) {
          const t = this.indexOf(e);
          if (t >= 0) {
            const s = this.collapseWidgets[t];
            (e.parent = null),
              s.dispose(),
              this._selection.adjustSelectionForRemove(t, null);
          }
        }
        _wrapWidget(e) {
          const t = new jt({ widget: e });
          return (
            t.addClass('jupyter-widget-Accordion-child'),
            t.collapseChanged.connect(this._onCollapseChange, this),
            t
          );
        }
        _onCollapseChange(e) {
          e.collapsed
            ? this._selection.value === e &&
              e.collapsed &&
              (this._selection.value = null)
            : (this._selection.value = e);
        }
        _onSelectionChanged(e, t) {
          const s = t.previousValue,
            i = t.currentValue;
          s && ((s.collapsed = !0), s.removeClass(Tt)),
            i && ((i.collapsed = !1), i.addClass(Tt));
        }
      }
      class Ot extends E {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'SelectionContainerModel',
            selected_index: null,
            titles: [],
          });
        }
      }
      class kt extends Ot {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'AccordionModel',
            _view_name: 'AccordionView',
          });
        }
      }
      class Lt extends St {
        constructor(e) {
          const t = e.view;
          delete e.view, super(e), (this._view = t);
        }
        processMessage(e) {
          var t;
          super.processMessage(e),
            null === (t = this._view) || void 0 === t || t.processLuminoMessage(e);
        }
        dispose() {
          this.isDisposed ||
            (super.dispose(), this._view.remove(), (this._view = null));
        }
      }
      class Vt extends i.DOMWidgetView {
        _createElement(e) {
          return (this.luminoWidget = new Lt({ view: this })), this.luminoWidget.node;
        }
        _setElement(e) {
          if (this.el || e !== this.luminoWidget.node)
            throw new Error('Cannot reset the DOM element.');
          (this.el = this.luminoWidget.node), (this.$el = A()(this.luminoWidget.node));
        }
        initialize(e) {
          super.initialize(e),
            (this.children_views = new i.ViewList(
              this.add_child_view,
              this.remove_child_view,
              this
            )),
            this.listenTo(this.model, 'change:children', () => this.updateChildren()),
            this.listenTo(this.model, 'change:selected_index', () =>
              this.update_selected_index()
            ),
            this.listenTo(this.model, 'change:titles', () => this.update_titles());
        }
        render() {
          var e;
          super.render();
          const t = this.luminoWidget;
          t.addClass('jupyter-widgets'),
            t.addClass('widget-accordion'),
            t.addClass('widget-container'),
            t.selection.selectionChanged.connect((e) => {
              this.updatingChildren ||
                (this.model.set('selected_index', t.selection.index), this.touch());
            }),
            null === (e = this.children_views) ||
              void 0 === e ||
              e.update(this.model.get('children')),
            this.update_titles(),
            this.update_selected_index();
        }
        updateChildren() {
          var e;
          (this.updatingChildren = !0),
            (this.luminoWidget.selection.index = null),
            null === (e = this.children_views) ||
              void 0 === e ||
              e.update(this.model.get('children')),
            this.update_selected_index(),
            (this.updatingChildren = !1);
        }
        update_titles() {
          const e = this.luminoWidget.collapseWidgets,
            t = this.model.get('titles');
          for (let s = 0; s < e.length; s++)
            void 0 !== t[s] && (e[s].widget.title.label = t[s]);
        }
        update_selected_index() {
          this.luminoWidget.selection.index = this.model.get('selected_index');
        }
        remove_child_view(e) {
          this.luminoWidget.removeWidget(e.luminoWidget), e.remove();
        }
        add_child_view(e, t) {
          const s = this.luminoWidget,
            a = new I.Widget();
          return (
            (a.title.label = this.model.get('titles')[t] || ''),
            s.addWidget(a),
            this.create_child_view(e)
              .then((e) => {
                const t = e.luminoWidget;
                return (
                  (t.title.label = a.title.label),
                  (s.collapseWidgets[s.indexOf(a)].widget = t),
                  a.dispose(),
                  e
                );
              })
              .catch((0, i.reject)('Could not add child view to box', !0))
          );
        }
        remove() {
          (this.children_views = null), super.remove();
        }
      }
      class It extends Ot {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'TabModel',
            _view_name: 'TabView',
          });
        }
      }
      class Wt extends yt {
        constructor(e) {
          const t = e.view;
          delete e.view,
            super(e),
            (this._view = t),
            V.MessageLoop.installMessageHook(
              this.tabContents,
              (e, t) => (this._view.processLuminoMessage(t), !0)
            );
        }
        dispose() {
          this.isDisposed ||
            (super.dispose(), this._view.remove(), (this._view = null));
        }
      }
      class At extends i.DOMWidgetView {
        constructor() {
          super(...arguments), (this.updatingTabs = !1);
        }
        _createElement(e) {
          return (this.luminoWidget = new Wt({ view: this })), this.luminoWidget.node;
        }
        _setElement(e) {
          if (this.el || e !== this.luminoWidget.node)
            throw new Error('Cannot reset the DOM element.');
          (this.el = this.luminoWidget.node), (this.$el = A()(this.luminoWidget.node));
        }
        initialize(e) {
          super.initialize(e),
            (this.childrenViews = new i.ViewList(
              this.addChildView,
              (e) => {
                e.remove();
              },
              this
            )),
            this.listenTo(this.model, 'change:children', () => this.updateTabs()),
            this.listenTo(this.model, 'change:titles', () => this.updateTitles());
        }
        render() {
          super.render();
          const e = this.luminoWidget;
          e.addClass('jupyter-widgets'),
            e.addClass('widget-container'),
            e.addClass('widget-tab'),
            (e.tabsMovable = !0),
            (e.tabBar.insertBehavior = 'none'),
            e.tabBar.currentChanged.connect(this._onTabChanged, this),
            e.tabBar.tabMoved.connect(this._onTabMoved, this),
            e.tabBar.addClass('widget-tab-bar'),
            e.tabContents.addClass('widget-tab-contents'),
            (e.tabBar.tabsMovable = !1),
            this.updateTabs(),
            this.update();
        }
        updateTabs() {
          var e;
          (this.updatingTabs = !0),
            (this.luminoWidget.currentIndex = null),
            null === (e = this.childrenViews) ||
              void 0 === e ||
              e.update(this.model.get('children')),
            (this.luminoWidget.currentIndex = this.model.get('selected_index')),
            (this.updatingTabs = !1);
        }
        addChildView(e, t) {
          const s = this.model.get('titles')[t] || '',
            a = this.luminoWidget,
            l = new I.Widget();
          return (
            (l.title.label = s),
            a.addWidget(l),
            this.create_child_view(e)
              .then((e) => {
                const t = e.luminoWidget;
                (t.title.label = l.title.label), (t.title.closable = !1);
                const s = L.ArrayExt.firstIndexOf(a.widgets, l);
                return a.insertWidget(s + 1, t), l.dispose(), e;
              })
              .catch((0, i.reject)('Could not add child view to box', !0))
          );
        }
        update() {
          return this.updateSelectedIndex(), super.update();
        }
        updateTitles() {
          const e = this.model.get('titles') || [];
          (0, L.each)(this.luminoWidget.widgets, (t, s) => {
            t.title.label = e[s] || '';
          });
        }
        updateSelectedIndex() {
          this.luminoWidget.currentIndex = this.model.get('selected_index');
        }
        remove() {
          (this.childrenViews = null), super.remove();
        }
        _onTabChanged(e, t) {
          if (!this.updatingTabs) {
            const e = t.currentIndex;
            this.model.set('selected_index', -1 === e ? null : e), this.touch();
          }
        }
        _onTabMoved(e, t) {
          const s = this.model.get('children').slice();
          L.ArrayExt.move(s, t.fromIndex, t.toIndex),
            this.model.set('children', s),
            this.touch();
        }
      }
      class Et extends Ot {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'StackModel',
            _view_name: 'StackView',
          });
        }
      }
      class Bt extends D {
        initialize(e) {
          super.initialize(e),
            this.listenTo(this.model, 'change:selected_index', this.update_children);
        }
        update_children() {
          var e;
          let t;
          (t =
            null === this.model.get('selected_index')
              ? []
              : [this.model.get('children')[this.model.get('selected_index')]]),
            null === (e = this.children_views) ||
              void 0 === e ||
              e.update(t).then((e) => {
                e.forEach((e) => {
                  V.MessageLoop.postMessage(
                    e.luminoWidget,
                    I.Widget.ResizeMessage.UnknownSize
                  );
                });
              });
        }
      }
      var zt = s(6129);
      function Dt(e) {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
      }
      class Pt {
        constructor(e, t, s) {
          (this.start = e), (this.dx = t), (this.max = s);
        }
        isSelected(e) {
          let t, s;
          return (
            this.dx >= 0
              ? ((t = this.start), (s = this.start + this.dx))
              : ((t = this.start + this.dx), (s = this.start)),
            t <= e && e < s
          );
        }
        updateSelection(e) {
          (this.dx += e),
            this.start + this.dx > this.max && (this.dx = this.max - this.start),
            this.start + this.dx < 0 && (this.dx = -this.start);
        }
      }
      class Ut extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            value: [],
            placeholder: '​',
            allowed_tags: null,
            allow_duplicates: !0,
          });
        }
      }
      class Ft extends i.DOMWidgetView {
        constructor() {
          super(...arguments), (this.hoveredTag = null), (this.hoveredTagIndex = null);
        }
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('jupyter-widget-tagsinput'),
            (this.taginputWrapper = document.createElement('div')),
            this.model.get('value').length
              ? (this.taginputWrapper.style.display = 'none')
              : (this.taginputWrapper.style.display = 'inline-block'),
            (this.datalistID = (0, i.uuid)()),
            (this.taginput = document.createElement('input')),
            this.taginput.classList.add('jupyter-widget-tag'),
            this.taginput.classList.add('jupyter-widget-taginput'),
            this.taginput.setAttribute('list', this.datalistID),
            this.taginput.setAttribute('type', 'text'),
            (this.autocompleteList = document.createElement('datalist')),
            (this.autocompleteList.id = this.datalistID),
            this.updateAutocomplete(),
            this.model.on('change:allowed_tags', this.updateAutocomplete.bind(this)),
            this.updatePlaceholder(),
            this.model.on('change:placeholder', this.updatePlaceholder.bind(this)),
            this.taginputWrapper.classList.add('widget-text'),
            this.taginputWrapper.appendChild(this.taginput),
            this.taginputWrapper.appendChild(this.autocompleteList),
            (this.el.onclick = this.focus.bind(this)),
            (this.el.ondrop = (e) => {
              const t =
                null == this.hoveredTagIndex ? this.tags.length : this.hoveredTagIndex;
              return this.ondrop(e, t);
            }),
            (this.el.ondragover = this.ondragover.bind(this)),
            (this.taginput.onchange = this.handleValueAdded.bind(this)),
            (this.taginput.oninput = this.resizeInput.bind(this)),
            (this.taginput.onkeydown = this.handleKeyEvent.bind(this)),
            (this.taginput.onblur = this.loseFocus.bind(this)),
            this.resizeInput(),
            (this.inputIndex = this.model.get('value').length),
            (this.selection = null),
            (this.preventLoosingFocus = !1),
            this.update();
        }
        update() {
          (this.preventLoosingFocus = !0), Dt(this.el), (this.tags = []);
          const e = this.model.get('value');
          for (const t in e) {
            const s = parseInt(t),
              i = this.createTag(
                e[s],
                s,
                null != this.selection && this.selection.isSelected(s)
              );
            (i.draggable = !0),
              (i.ondragstart = ((e, t) => (s) => {
                this.ondragstart(s, e, t, this.model.model_id);
              })(s, e[s])),
              (i.ondrop = ((e) => (t) => {
                this.ondrop(t, e);
              })(s)),
              (i.ondragover = this.ondragover.bind(this)),
              (i.ondragenter = ((e) => (t) => {
                this.ondragenter(t, e);
              })(s)),
              (i.ondragend = this.ondragend.bind(this)),
              this.tags.push(i),
              this.el.appendChild(i);
          }
          return (
            this.el.insertBefore(
              this.taginputWrapper,
              this.el.children[this.inputIndex]
            ),
            this.model.get('value').length
              ? (this.taginputWrapper.style.display = 'none')
              : (this.taginputWrapper.style.display = 'inline-block'),
            (this.preventLoosingFocus = !1),
            super.update()
          );
        }
        updateAutocomplete() {
          Dt(this.autocompleteList);
          const e = this.model.get('allowed_tags');
          for (const t of e) {
            const e = document.createElement('option');
            (e.value = t), this.autocompleteList.appendChild(e);
          }
        }
        updatePlaceholder() {
          (this.taginput.placeholder = this.model.get('placeholder')),
            this.resizeInput();
        }
        updateTags() {
          const e = this.model.get('value');
          for (const t in this.tags) {
            const s = parseInt(t);
            this.updateTag(
              this.tags[s],
              e[s],
              s,
              null != this.selection && this.selection.isSelected(s)
            );
          }
        }
        handleValueAdded(e) {
          const t = this.taginput.value.replace(/^\s+|\s+$/g, ''),
            s = this.inputIndex;
          '' != t &&
            (this.inputIndex++,
            this.addTag(s, t) &&
              ((this.taginput.value = ''), this.resizeInput(), this.focus()));
        }
        addTag(e, t) {
          const s = this.model.get('value');
          let i;
          try {
            i = this.validateValue(t);
          } catch (e) {
            return !1;
          }
          const a = this.model.get('allowed_tags');
          if (a.length && !a.includes(i)) return !1;
          if (!this.model.get('allow_duplicates') && s.includes(i)) return !1;
          this.selection = null;
          const l = [...s];
          return (
            l.splice(e, 0, i), this.model.set('value', l), this.model.save_changes(), !0
          );
        }
        resizeInput() {
          let e;
          e =
            0 != this.taginput.value.length
              ? this.taginput.value
              : this.model.get('placeholder');
          const t = e.length + 1;
          this.taginput.setAttribute('size', String(t));
        }
        handleKeyEvent(e) {
          const t = this.model.get('value').length;
          if (this.taginput.value.length) return;
          const s = this.inputIndex;
          switch (e.key) {
            case 'ArrowLeft':
              e.ctrlKey && e.shiftKey && this.select(s, -s),
                !e.ctrlKey && e.shiftKey && this.select(s, -1),
                e.ctrlKey ? (this.inputIndex = 0) : this.inputIndex--;
              break;
            case 'ArrowRight':
              e.ctrlKey && e.shiftKey && this.select(s, t - s),
                !e.ctrlKey && e.shiftKey && this.select(s, 1),
                e.ctrlKey ? (this.inputIndex = t) : this.inputIndex++;
              break;
            case 'Backspace':
              this.selection
                ? this.removeSelectedTags()
                : this.removeTag(this.inputIndex - 1);
              break;
            case 'Delete':
              this.selection
                ? this.removeSelectedTags()
                : this.removeTag(this.inputIndex);
              break;
            default:
              return;
          }
          var i, a;
          e.shiftKey || (this.selection = null),
            (this.inputIndex =
              ((i = this.inputIndex), 0, (a = t), Math.min(Math.max(i, 0), a))),
            this.update(),
            this.focus();
        }
        ondragstart(e, t, s, i) {
          null != e.dataTransfer &&
            (e.dataTransfer.setData('index', String(t)),
            e.dataTransfer.setData('tagValue', String(s)),
            e.dataTransfer.setData('origin', i));
        }
        ondrop(e, t) {
          if (null == e.dataTransfer) return;
          e.preventDefault(), e.stopPropagation();
          const s = e.dataTransfer.getData('tagValue'),
            i = parseInt(e.dataTransfer.getData('index')),
            a = e.dataTransfer.getData('origin') == this.model.model_id;
          if (!isNaN(i)) {
            if (a) {
              const e = [...this.model.get('value')];
              return (
                i < t && t--,
                e.splice(i, 1),
                e.splice(t, 0, s),
                this.model.set('value', e),
                void this.model.save_changes()
              );
            }
            this.addTag(t, s);
          }
        }
        ondragover(e) {
          e.preventDefault();
        }
        ondragenter(e, t) {
          null != this.hoveredTag &&
            this.hoveredTag != this.tags[t] &&
            (this.hoveredTag.style.marginLeft = '1px'),
            (this.hoveredTag = this.tags[t]),
            (this.hoveredTagIndex = t),
            (this.hoveredTag.style.marginLeft = '30px');
        }
        ondragend() {
          null != this.hoveredTag && (this.hoveredTag.style.marginLeft = '1px'),
            (this.hoveredTag = null),
            (this.hoveredTagIndex = null);
        }
        select(e, t) {
          const s = this.model.get('value').length;
          this.selection
            ? this.selection.updateSelection(t)
            : (this.selection = new Pt(e, t, s));
        }
        removeSelectedTags() {
          const e = [...this.model.get('value')];
          for (let t = e.length - 1; t >= 0; t--)
            null != this.selection &&
              this.selection.isSelected(t) &&
              (e.splice(t, 1), t < this.inputIndex && this.inputIndex--);
          this.model.set('value', e), this.model.save_changes();
        }
        removeTag(e) {
          const t = [...this.model.get('value')];
          t.splice(e, 1),
            e < this.inputIndex && this.inputIndex--,
            this.model.set('value', t),
            this.model.save_changes();
        }
        focus() {
          (this.taginputWrapper.style.display = 'inline-block'), this.taginput.focus();
        }
        loseFocus() {
          this.preventLoosingFocus ||
            (this.model.get('value').length &&
              (this.taginputWrapper.style.display = 'none'),
            (this.selection = null),
            this.updateTags());
        }
        preinitialize() {
          this.tagName = 'div';
        }
        validateValue(e) {
          return e;
        }
      }
      class Rt extends Ut {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            value: [],
            tag_style: '',
            _view_name: 'TagsInputView',
            _model_name: 'TagsInputModel',
          });
        }
      }
      class Nt extends Ft {
        createTag(e, t, s) {
          const i = document.createElement('div'),
            a = this.model.get('tag_style');
          i.classList.add('jupyter-widget-tag'),
            i.classList.add(Nt.class_map[a]),
            s && i.classList.add('mod-active'),
            i.appendChild(document.createTextNode(this.getTagText(e)));
          const l = document.createElement('i');
          return (
            l.classList.add('fa'),
            l.classList.add('fa-times'),
            l.classList.add('jupyter-widget-tag-close'),
            i.appendChild(l),
            (l.onmousedown = ((e) => () => {
              this.removeTag(e), this.loseFocus();
            })(t)),
            i
          );
        }
        getTagText(e) {
          return e;
        }
        updateTag(e, t, s, i) {
          i ? e.classList.add('mod-active') : e.classList.remove('mod-active');
        }
      }
      Nt.class_map = {
        primary: 'mod-primary',
        success: 'mod-success',
        info: 'mod-info',
        warning: 'mod-warning',
        danger: 'mod-danger',
      };
      class $t extends Ut {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            value: [],
            _view_name: 'ColorsInputView',
            _model_name: 'ColorsInputModel',
          });
        }
      }
      class Ht extends Ft {
        createTag(e, t, s) {
          const i = document.createElement('div'),
            a = e,
            l = zt.ZP(e).darker().toString();
          i.classList.add('jupyter-widget-tag'),
            i.classList.add('jupyter-widget-colortag'),
            s
              ? (i.classList.add('mod-active'), (i.style.backgroundColor = l))
              : (i.style.backgroundColor = a);
          const d = document.createElement('i');
          return (
            d.classList.add('fa'),
            d.classList.add('fa-times'),
            d.classList.add('jupyter-widget-tag-close'),
            i.appendChild(d),
            (d.onmousedown = ((e) => () => {
              this.removeTag(e), this.loseFocus();
            })(t)),
            i
          );
        }
        updateTag(e, t, s, i) {
          const a = t,
            l = zt.ZP(t).darker().toString();
          i
            ? (e.classList.add('mod-active'), (e.style.backgroundColor = l))
            : (e.classList.remove('mod-active'), (e.style.backgroundColor = a));
        }
        validateValue(e) {
          if (null == zt.ZP(e)) throw e + ' is not a valid Color';
          return e;
        }
      }
      class Kt extends Rt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            min: null,
            max: null,
          });
        }
      }
      class qt extends Nt {
        render() {
          this.model.on('change:format', () => {
            (this.formatter = ve.WU(this.model.get('format'))), this.update();
          }),
            (this.formatter = ve.WU(this.model.get('format'))),
            super.render();
        }
        getTagText(e) {
          return this.formatter(this.parseNumber(e));
        }
        validateValue(e) {
          const t = this.parseNumber(e),
            s = this.model.get('min'),
            i = this.model.get('max');
          if (isNaN(t) || (null != s && t < s) || (null != i && t > i))
            throw (
              e +
              ' is not a valid number, it should be in the range [' +
              s +
              ', ' +
              i +
              ']'
            );
          return t;
        }
      }
      class Gt extends Kt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'FloatsInputView',
            _model_name: 'FloatsInputModel',
            format: '.1f',
          });
        }
      }
      class Jt extends qt {
        parseNumber(e) {
          return parseFloat(e);
        }
      }
      class Yt extends Kt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'IntsInputView',
            _model_name: 'IntsInputModel',
            format: 'd',
          });
        }
      }
      class Zt extends qt {
        parseNumber(e) {
          const t = parseInt(e);
          if (t != parseFloat(e)) throw e + ' should be an integer';
          return t;
        }
      }
      class Qt extends o {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'StringStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: n.N,
          });
        }
      }
      Qt.styleProperties = Object.assign(Object.assign({}, o.styleProperties), {
        background: { selector: '', attribute: 'background', default: null },
        font_size: { selector: '', attribute: 'font-size', default: '' },
        text_color: { selector: '', attribute: 'color', default: '' },
      });
      class Xt extends Qt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'HTMLStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: n.N,
          });
        }
      }
      Xt.styleProperties = Object.assign({}, Qt.styleProperties);
      class es extends Qt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'HTMLMathStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: n.N,
          });
        }
      }
      es.styleProperties = Object.assign({}, Qt.styleProperties);
      class ts extends Qt {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'LabelStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: n.N,
          });
        }
      }
      ts.styleProperties = Object.assign(Object.assign({}, Qt.styleProperties), {
        font_family: { selector: '', attribute: 'font-family', default: '' },
        font_style: { selector: '', attribute: 'font-style', default: '' },
        font_variant: { selector: '', attribute: 'font-variant', default: '' },
        font_weight: { selector: '', attribute: 'font-weight', default: '' },
        text_decoration: { selector: '', attribute: 'text-decoration', default: '' },
      });
      class ss extends o {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'TextStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: n.N,
          });
        }
      }
      ss.styleProperties = Object.assign(Object.assign({}, o.styleProperties), {
        background: {
          selector: '.widget-input',
          attribute: 'background',
          default: null,
        },
        font_size: { selector: '.widget-input', attribute: 'font-size', default: '' },
        text_color: { selector: '.widget-input', attribute: 'color', default: '' },
      });
      class is extends m {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            value: '',
            disabled: !1,
            placeholder: '​',
            _model_name: 'StringModel',
          });
        }
      }
      class as extends h {
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-inline-hbox');
        }
      }
      class ls extends is {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'HTMLView',
            _model_name: 'HTMLModel',
          });
        }
      }
      class ds extends as {
        render() {
          super.render(),
            this.el.classList.add('widget-html'),
            (this.content = document.createElement('div')),
            this.content.classList.add('widget-html-content'),
            this.el.appendChild(this.content),
            this.update();
        }
        update() {
          return (this.content.innerHTML = this.model.get('value')), super.update();
        }
        handle_message(e) {
          'focus' === e.do
            ? this.content.focus()
            : 'blur' === e.do && this.content.blur();
        }
      }
      class ns extends is {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'HTMLMathView',
            _model_name: 'HTMLMathModel',
          });
        }
      }
      class os extends as {
        render() {
          super.render(),
            this.el.classList.add('widget-htmlmath'),
            (this.content = document.createElement('div')),
            this.content.classList.add('widget-htmlmath-content'),
            this.el.appendChild(this.content),
            this.update();
        }
        update() {
          return (
            (this.content.innerHTML = this.model.get('value')),
            this.typeset(this.content),
            super.update()
          );
        }
        handle_message(e) {
          'focus' === e.do
            ? this.content.focus()
            : 'blur' === e.do && this.content.blur();
        }
      }
      class rs extends is {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'LabelView',
            _model_name: 'LabelModel',
          });
        }
      }
      class hs extends as {
        render() {
          super.render(), this.el.classList.add('widget-label'), this.update();
        }
        update() {
          return this.typeset(this.el, this.model.get('value')), super.update();
        }
      }
      class us extends is {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'TextareaView',
            _model_name: 'TextareaModel',
            rows: null,
            continuous_update: !0,
          });
        }
      }
      class cs extends as {
        render() {
          super.render(),
            this.el.classList.add('widget-textarea'),
            (this.textbox = document.createElement('textarea')),
            this.textbox.setAttribute('rows', '5'),
            (this.textbox.id = this.label.htmlFor = (0, i.uuid)()),
            this.textbox.classList.add('widget-input'),
            this.el.appendChild(this.textbox),
            this.update(),
            this.listenTo(this.model, 'change:placeholder', (e, t, s) => {
              this.update_placeholder(t);
            }),
            this.update_placeholder(),
            this.updateTooltip();
        }
        update_placeholder(e) {
          const t = e || this.model.get('placeholder');
          this.textbox.setAttribute('placeholder', t.toString());
        }
        update(e) {
          if (void 0 === e || e.updated_view !== this) {
            this.textbox.value = this.model.get('value');
            let e = this.model.get('rows');
            null === e && (e = ''),
              this.textbox.setAttribute('rows', e),
              (this.textbox.disabled = this.model.get('disabled'));
          }
          return this.updateTabindex(), this.updateTooltip(), super.update();
        }
        updateTabindex() {
          if (!this.textbox) return;
          const e = this.model.get('tabbable');
          !0 === e
            ? this.textbox.setAttribute('tabIndex', '0')
            : !1 === e
            ? this.textbox.setAttribute('tabIndex', '-1')
            : null === e && this.textbox.removeAttribute('tabIndex');
        }
        updateTooltip() {
          if (!this.textbox) return;
          const e = this.model.get('tooltip');
          e
            ? 0 === this.model.get('description').length &&
              this.textbox.setAttribute('title', e)
            : this.textbox.removeAttribute('title');
        }
        events() {
          return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input textarea': 'handleChanging',
            'change textarea': 'handleChanged',
          };
        }
        handleKeyDown(e) {
          e.stopPropagation();
        }
        handleKeypress(e) {
          e.stopPropagation();
        }
        handleChanging(e) {
          this.model.get('continuous_update') && this.handleChanged(e);
        }
        handleChanged(e) {
          const t = e.target;
          this.model.set('value', t.value, { updated_view: this }), this.touch();
        }
        handle_message(e) {
          'focus' === e.do
            ? this.textbox.focus()
            : 'blur' === e.do && this.textbox.blur();
        }
      }
      class ps extends is {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'TextView',
            _model_name: 'TextModel',
            continuous_update: !0,
          });
        }
      }
      class gs extends as {
        constructor() {
          super(...arguments), (this.inputType = 'text');
        }
        render() {
          super.render(),
            this.el.classList.add('widget-text'),
            (this.textbox = document.createElement('input')),
            this.textbox.setAttribute('type', this.inputType),
            (this.textbox.id = this.label.htmlFor = (0, i.uuid)()),
            this.textbox.classList.add('widget-input'),
            this.el.appendChild(this.textbox),
            this.update(),
            this.listenTo(this.model, 'change:placeholder', (e, t, s) => {
              this.update_placeholder(t);
            }),
            this.update_placeholder(),
            this.updateTabindex(),
            this.updateTooltip();
        }
        update_placeholder(e) {
          this.textbox.setAttribute('placeholder', e || this.model.get('placeholder'));
        }
        updateTabindex() {
          if (!this.textbox) return;
          const e = this.model.get('tabbable');
          !0 === e
            ? this.textbox.setAttribute('tabIndex', '0')
            : !1 === e
            ? this.textbox.setAttribute('tabIndex', '-1')
            : null === e && this.textbox.removeAttribute('tabIndex');
        }
        updateTooltip() {
          if (!this.textbox) return;
          const e = this.model.get('tooltip');
          e
            ? 0 === this.model.get('description').length &&
              this.textbox.setAttribute('title', e)
            : this.textbox.removeAttribute('title');
        }
        update(e) {
          return (
            (void 0 !== e && e.updated_view === this) ||
              (this.textbox.value !== this.model.get('value') &&
                (this.textbox.value = this.model.get('value')),
              (this.textbox.disabled = this.model.get('disabled'))),
            super.update()
          );
        }
        events() {
          return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input input': 'handleChanging',
            'change input': 'handleChanged',
          };
        }
        handleKeyDown(e) {
          e.stopPropagation();
        }
        handleKeypress(e) {
          e.stopPropagation(), 13 === e.keyCode && this.send({ event: 'submit' });
        }
        handleChanging(e) {
          this.model.get('continuous_update') && this.handleChanged(e);
        }
        handleChanged(e) {
          const t = e.target;
          this.model.set('value', t.value, { updated_view: this }), this.touch();
        }
        handle_message(e) {
          'focus' === e.do
            ? this.textbox.focus()
            : 'blur' === e.do && this.textbox.blur();
        }
      }
      class ms extends ps {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _view_name: 'PasswordView',
            _model_name: 'PasswordModel',
          });
        }
      }
      class _s extends gs {
        constructor() {
          super(...arguments), (this.inputType = 'password');
        }
      }
      class bs extends ps {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'ComboboxModel',
            _view_name: 'ComboboxView',
            options: [],
            ensure_options: !1,
          });
        }
      }
      class vs extends gs {
        constructor() {
          super(...arguments), (this.isInitialRender = !0);
        }
        render() {
          (this.datalist = document.createElement('datalist')),
            (this.datalist.id = (0, i.uuid)()),
            super.render(),
            this.textbox.setAttribute('list', this.datalist.id),
            this.el.appendChild(this.datalist),
            this.updateTooltip();
        }
        update(e) {
          if ((super.update(e), !this.datalist)) return;
          const t = this.isValid(this.model.get('value'));
          if (
            (this.highlightValidState(t),
            (void 0 !== e && e.updated_view) ||
              (!this.model.hasChanged('options') && !this.isInitialRender))
          )
            return;
          this.isInitialRender = !1;
          const s = this.model.get('options'),
            i = document.createDocumentFragment();
          for (const e of s) {
            const t = document.createElement('option');
            (t.value = e), i.appendChild(t);
          }
          this.datalist.replaceChildren(...i.children);
        }
        isValid(e) {
          return (
            !0 !== this.model.get('ensure_option') ||
            -1 !== this.model.get('options').indexOf(e)
          );
        }
        handleChanging(e) {
          const t = e.target,
            s = this.isValid(t.value);
          this.highlightValidState(s), s && super.handleChanging(e);
        }
        handleChanged(e) {
          const t = e.target,
            s = this.isValid(t.value);
          this.highlightValidState(s), s && super.handleChanged(e);
        }
        handle_message(e) {
          'focus' === e.do
            ? this.textbox.focus()
            : 'blur' === e.do && this.textbox.blur();
        }
        highlightValidState(e) {
          this.textbox.classList.toggle('jpwidgets-invalidComboValue', !e);
        }
      }
      class xs extends g {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: 'FileUploadModel',
            _view_name: 'FileUploadView',
            accept: '',
            description: 'Upload',
            disabled: !1,
            icon: 'upload',
            button_style: '',
            multiple: !1,
            value: [],
            error: '',
            style: null,
          });
        }
      }
      xs.serializers = Object.assign(Object.assign({}, g.serializers), {
        value: { serialize: (e) => e },
      });
      class fs extends i.DOMWidgetView {
        preinitialize() {
          this.tagName = 'button';
        }
        render() {
          super.render(),
            this.el.classList.add('jupyter-widgets'),
            this.el.classList.add('widget-upload'),
            this.el.classList.add('jupyter-button'),
            (this.fileInput = document.createElement('input')),
            (this.fileInput.type = 'file'),
            (this.fileInput.style.display = 'none'),
            this.el.addEventListener('click', () => {
              this.fileInput.click();
            }),
            this.fileInput.addEventListener('click', () => {
              this.fileInput.value = '';
            }),
            this.fileInput.addEventListener('change', () => {
              var e;
              const t = [];
              Array.from(
                null !== (e = this.fileInput.files) && void 0 !== e ? e : []
              ).forEach((e) => {
                t.push(
                  new Promise((t, s) => {
                    const i = new FileReader();
                    (i.onload = () => {
                      const s = i.result;
                      t({
                        content: s,
                        name: e.name,
                        type: e.type,
                        size: e.size,
                        last_modified: e.lastModified,
                      });
                    }),
                      (i.onerror = () => {
                        s();
                      }),
                      (i.onabort = i.onerror),
                      i.readAsArrayBuffer(e);
                  })
                );
              }),
                Promise.all(t)
                  .then((e) => {
                    this.model.set({ value: e, error: '' }), this.touch();
                  })
                  .catch((e) => {
                    console.error('error in file upload: %o', e),
                      this.model.set({ error: e }),
                      this.touch();
                  });
            }),
            this.listenTo(this.model, 'change:button_style', this.update_button_style),
            this.set_button_style(),
            this.update();
        }
        update() {
          (this.el.disabled = this.model.get('disabled')),
            this.el.setAttribute('title', this.model.get('tooltip'));
          const e = this.model.get('value'),
            t = `${this.model.get('description')} (${e.length})`,
            s = this.model.get('icon');
          if (t.length || s.length) {
            if (((this.el.textContent = ''), s.length)) {
              const e = document.createElement('i');
              e.classList.add('fa'),
                e.classList.add('fa-' + s),
                0 === t.length && e.classList.add('center'),
                this.el.appendChild(e);
            }
            this.el.appendChild(document.createTextNode(t));
          }
          return (
            (this.fileInput.accept = this.model.get('accept')),
            (this.fileInput.multiple = this.model.get('multiple')),
            super.update()
          );
        }
        update_button_style() {
          this.update_mapped_classes(fs.class_map, 'button_style', this.el);
        }
        set_button_style() {
          this.set_mapped_classes(fs.class_map, 'button_style', this.el);
        }
      }
      fs.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger'],
      };
      const ws = s(7021).i8;
    },
    7021: (e) => {
      e.exports = { i8: '5.0.5' };
    },
  },
]);
