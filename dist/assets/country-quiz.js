'use strict';



;define("country-quiz/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("country-quiz/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "country-quiz/config/environment", "ember-truth-helpers/helpers/and"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"country-quiz/config/environment",0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("country-quiz/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("country-quiz/components/option", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div
    class="option flex-center-v
      {{if
        (and this.clicked this.correctAnswer)
        'correct'
        (if this.clicked 'incorrect' '')
      }}"
    {{on "click" (fn this.isCorrect @options.value)}}
  >
  
    <span class="option-num">{{@options.id}}</span>
    <span class="option-value"> {{@options.value}}</span>
  </div>
  */
  {
    "id": "inMzQb9+",
    "block": "[[[11,0],[16,0,[29,[\"option flex-center-v\\n    \",[52,[28,[37,1],[[30,0,[\"clicked\"]],[30,0,[\"correctAnswer\"]]],null],\"correct\",[52,[30,0,[\"clicked\"]],\"incorrect\",\"\"]]]]],[4,[38,2],[\"click\",[28,[37,3],[[30,0,[\"isCorrect\"]],[30,1,[\"value\"]]],null]],null],[12],[1,\"\\n\\n  \"],[10,1],[14,0,\"option-num\"],[12],[1,[30,1,[\"id\"]]],[13],[1,\"\\n  \"],[10,1],[14,0,\"option-value\"],[12],[1,\" \"],[1,[30,1,[\"value\"]]],[13],[1,\"\\n\"],[13]],[\"@options\"],false,[\"if\",\"and\",\"on\",\"fn\"]]",
    "moduleName": "country-quiz/components/option.hbs",
    "isStrictMode": false
  });
  let OptionComponent = (_dec = (0, _service.service)('score'), (_class = class OptionComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "answer", _descriptor, this);
      _initializerDefineProperty(this, "correctAnswer", _descriptor2, this);
      _initializerDefineProperty(this, "clicked", _descriptor3, this);
      _initializerDefineProperty(this, "score", _descriptor4, this);
    }
    isCorrect(value) {
      this.correctAnswer = value === this.answer;
      if (this.correctAnswer) {
        this.score.addScore();
      }
      this.clicked = true;
      this.args.handleClick();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "answer", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.answer;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "correctAnswer", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "clicked", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "score", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "isCorrect", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "isCorrect"), _class.prototype)), _class));
  _exports.default = OptionComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, OptionComponent);
});
;define("country-quiz/components/question-box", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <p class="question">{{this.demo.title}}</p>
  <ul class="options-box flex-col" {{on "click" this.handleClick}}>
    {{#each this.demo.option as |option|}}
      <li><Option
          @options={{option}}
          @answer={{this.correctOption}}
          @handleClick={{this.handleClick}}
          @optionClicked={{this.clicked}}
        /></li>
    {{/each}}
  </ul>
  
  {{#if this.isLastQn}}
    <LinkTo class="button btn-next" @route="result">Submit</LinkTo>
  {{else}}
    <button
      class="button btn-next"
      type="button"
      {{on "click" this.increment}}
    >Next</button>
  {{/if}}
  */
  {
    "id": "EfQ/20i7",
    "block": "[[[10,2],[14,0,\"question\"],[12],[1,[30,0,[\"demo\",\"title\"]]],[13],[1,\"\\n\"],[11,\"ul\"],[24,0,\"options-box flex-col\"],[4,[38,0],[\"click\",[30,0,[\"handleClick\"]]],null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"demo\",\"option\"]]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[12],[8,[39,3],null,[[\"@options\",\"@answer\",\"@handleClick\",\"@optionClicked\"],[[30,1],[30,0,[\"correctOption\"]],[30,0,[\"handleClick\"]],[30,0,[\"clicked\"]]]],null],[13],[1,\"\\n\"]],[1]],null],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isLastQn\"]],[[[1,\"  \"],[8,[39,5],[[24,0,\"button btn-next\"]],[[\"@route\"],[\"result\"]],[[\"default\"],[[[[1,\"Submit\"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"  \"],[11,\"button\"],[24,0,\"button btn-next\"],[24,4,\"button\"],[4,[38,0],[\"click\",[30,0,[\"increment\"]]],null],[12],[1,\"Next\"],[13],[1,\"\\n\"]],[]]]],[\"option\"],false,[\"on\",\"each\",\"-track-array\",\"option\",\"if\",\"link-to\"]]",
    "moduleName": "country-quiz/components/question-box.hbs",
    "isStrictMode": false
  });
  let QuestionBoxComponent = (_class = class QuestionBoxComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "qnCount", _descriptor, this);
      _initializerDefineProperty(this, "demo", _descriptor2, this);
      _initializerDefineProperty(this, "correctOption", _descriptor3, this);
    }
    increment() {
      if (this.qnCount < this.args.model.length - 1) {
        this.qnCount = this.qnCount + 1;
        this.demo = this.args.model[this.qnCount];
        this.correctOption = this.demo.answer;
      }
    }
    get isLastQn() {
      return this.qnCount == this.args.model.length - 1;
    }
    handleClick(event) {
      if (event) {
        let optionsBox = event.target.closest('.options-box');
        let childElements = event.target.querySelectorAll('.option-value');
        const options = optionsBox.querySelectorAll('.option-value');
        Array.from(options).forEach(option => {
          if (option.textContent.trim() === this.correctOption) {
            option.parentNode.classList.add('correct');
          }
        });
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "qnCount", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "demo", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model[this.qnCount];
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "correctOption", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.demo.answer;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "increment", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "increment"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype)), _class);
  _exports.default = QuestionBoxComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, QuestionBoxComponent);
});
;define("country-quiz/components/quiz", ["exports", "@glimmer/component", "@glimmer/tracking"], function (_exports, _component, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let QuizComponent = (_class = class QuizComponent extends _component.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "qnCount", _descriptor, this);
      _initializerDefineProperty(this, "demo", _descriptor2, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "qnCount", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "demo", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model;
    }
  })), _class);
  _exports.default = QuizComponent;
});
;define("country-quiz/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("country-quiz/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/app-version", ["exports", "@ember/component/helper", "country-quiz/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"country-quiz/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("country-quiz/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _eq.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEq.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("country-quiz/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("country-quiz/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("country-quiz/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("country-quiz/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("country-quiz/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "country-quiz/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"country-quiz/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("country-quiz/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("country-quiz/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("country-quiz/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("country-quiz/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("country-quiz/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("country-quiz/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("country-quiz/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("country-quiz/router", ["exports", "@ember/routing/router", "country-quiz/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"country-quiz/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('quiz');
    this.route('result');
  });
});
;define("country-quiz/routes/application", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ApplicationRoute extends _route.default {}
  _exports.default = ApplicationRoute;
});
;define("country-quiz/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class IndexRoute extends _route.default {}
  _exports.default = IndexRoute;
});
;define("country-quiz/routes/quiz", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class QuizRoute extends _route.default {
    async model() {
      return [{
        title: 'Which continent is home to the most countries?',
        option: [{
          id: 'A',
          value: 'Asia'
        }, {
          id: 'B',
          value: 'Europe'
        }, {
          id: 'C',
          value: 'South America'
        }, {
          id: 'D',
          value: 'Africa'
        }],
        answer: 'Africa',
        description: `Africa is first, with 54 countries, ahead of Asia’s 48 and Europe’s 44.`
      }, {
        title: 'Thanks to its overseas territories, which country technically spans 12 time zones?',
        option: [{
          id: 'A',
          value: 'France'
        }, {
          id: 'B',
          value: 'Russia'
        }, {
          id: 'C',
          value: 'China'
        }, {
          id: 'D',
          value: 'United States'
        }],
        answer: 'France',
        description: `France and its territories cover 12 time zones, just ahead of Russia and the U.S., which have 11 each.`
      }, {
        title: 'Which country has three capital cities—Pretoria, Cape Town, and Bloemfontein?',
        option: [{
          id: 'A',
          value: 'Nigeria'
        }, {
          id: 'B',
          value: 'Chile'
        }, {
          id: 'C',
          value: 'South Africa'
        }, {
          id: 'D',
          value: 'Australia'
        }],
        answer: 'South Africa',
        description: `South Africa’s executive and administrative capital is Pretoria, its legislative capital is Cape Town, and its judicial capital is Bloemfontein. It is the only country with three capital cities.
        `
      }, {
        title: 'In which country are the world’s 10 coldest cities located?',
        option: [{
          id: 'A',
          value: 'Canada'
        }, {
          id: 'B',
          value: 'Sweden'
        }, {
          id: 'C',
          value: 'United States'
        }, {
          id: 'D',
          value: 'Russia'
        }],
        answer: 'Russia',
        description: `Russia is home to 10 cities whose wintertime temperatures are regularly well below zero. Many of them are in Siberia.
        `
      }, {
        title: 'With an area of less than 0.2 square mile (0.5 square kilometer), which is the smallest country in the world?',
        option: [{
          id: 'A',
          value: 'Barbados'
        }, {
          id: 'B',
          value: 'Malta'
        }, {
          id: 'C',
          value: 'Vatican City'
        }, {
          id: 'D',
          value: 'Cyprus'
        }],
        answer: 'Vatican City',
        description: `Vatican City, home to the pope, is the smallest country in the world. It has an area of less than 0.2 square mile (0.5 square kilometer) and a population of some 800 people.`
      }, {
        title: 'Home to languages like Tok Pisin, Hiri Motu, and a German creole known as Unserdeutsch, which is the most linguistically diverse country in the world?',
        option: [{
          id: 'A',
          value: 'India'
        }, {
          id: 'B',
          value: 'Papua New Guinea'
        }, {
          id: 'C',
          value: 'Brazil'
        }, {
          id: 'D',
          value: 'Nigeria'
        }],
        answer: 'Papua New Guinea',
        description: `Papua New Guinea is home to 840 living languages, the most in the world.`
      }, {
        title: 'Supposedly home to a “monster,” Loch Ness is one of many inland seas—or “lochs”—in which country?',
        option: [{
          id: 'A',
          value: 'Scotland'
        }, {
          id: 'B',
          value: 'Wales'
        }, {
          id: 'C',
          value: 'Ireland'
        }, {
          id: 'D',
          value: 'England'
        }],
        answer: 'Scotland',
        description: `Although there were rumors of creatures in Scotland’s Loch Ness in the 1800s, interest really took off after a 1933 newspaper article quoted a businessman as claiming that he had seen a “most extraordinary form of animal” entering the loch. The legendary sea creature is now endearingly referred to as “Nessie."`
      }, {
        title: 'Which of these is NOT one of the 13 countries crossed by the Equator? ',
        option: [{
          id: 'A',
          value: 'Egypt'
        }, {
          id: 'B',
          value: 'Kenya'
        }, {
          id: 'C',
          value: 'Indonesia'
        }, {
          id: 'D',
          value: 'Ecuador'
        }],
        answer: 'Egypt',
        description: `Egypt lies above the Equator`
      }, {
        title: 'Thanks to the tombs built by the ancient kingdom of Kush, which country is home to—by far—the most pyramids in the world?',
        option: [{
          id: 'A',
          value: 'Cambodia'
        }, {
          id: 'B',
          value: 'Sudan'
        }, {
          id: 'C',
          value: 'Colombia'
        }, {
          id: 'D',
          value: 'Mexico'
        }],
        answer: 'Sudan',
        description: `Although many might associate pyramids with Egypt, Sudan has about 220, far ahead of second-place Egypt’s 138.`
      }];
    }
  }
  _exports.default = QuizRoute;
});
;define("country-quiz/routes/result", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ResultRoute = (_dec = (0, _service.service)('score'), (_class = class ResultRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "score", _descriptor, this);
    }
    model() {
      let score = this.score.get('score');
      return {
        score
      };
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "score", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ResultRoute;
});
;define("country-quiz/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("country-quiz/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("country-quiz/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("country-quiz/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("country-quiz/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("country-quiz/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("country-quiz/services/score", ["exports", "@ember/service"], function (_exports, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class ScoreService extends _service.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "score", 0);
    }
    addScore() {
      this.score += 1;
    }
  }
  _exports.default = ScoreService;
});
;define("country-quiz/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("country-quiz/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <body class="flex-center">{{outlet}}</body>
  */
  {
    "id": "r9pYF7xV",
    "block": "[[[10,\"body\"],[14,0,\"flex-center\"],[12],[46,[28,[37,1],null,null],null,null,null],[13]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "country-quiz/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("country-quiz/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Country Quiz"}}
  <section class="section-home">
    <header class="container-home flex-center-v">
      <h1 class="title">Country Quiz</h1>
      <div class="quiz-icon"><img
          src="/assets/images/undraw_adventure_4hum 1.svg"
          alt="icon depicting a person going around the world"
        /></div>
    </header>
    <LinkTo @route="quiz" class="button btn-start">Start</LinkTo>
  </section>
  */
  {
    "id": "zogD9NWl",
    "block": "[[[1,[28,[35,0],[\"Country Quiz\"],null]],[1,\"\\n\"],[10,\"section\"],[14,0,\"section-home\"],[12],[1,\"\\n  \"],[10,\"header\"],[14,0,\"container-home flex-center-v\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,0,\"title\"],[12],[1,\"Country Quiz\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"quiz-icon\"],[12],[10,\"img\"],[14,\"src\",\"/assets/images/undraw_adventure_4hum 1.svg\"],[14,\"alt\",\"icon depicting a person going around the world\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button btn-start\"]],[[\"@route\"],[\"quiz\"]],[[\"default\"],[[[[1,\"Start\"]],[]]]]],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"link-to\"]]",
    "moduleName": "country-quiz/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("country-quiz/templates/quiz", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Country Quiz"}}
  
  <section class="section-quiz">
    <header class="container-quiz flex-center-v">
      <h1 class="title title__quiz">Country Quiz</h1>
    </header>
    <main class="card quiz-card flex-col">
      <div class="quiz-icon quiz-icon__quiz"><img
          src="/assets/images/undraw_adventure_4hum 1.svg"
          alt="icon depicting a person going around the world"
        /></div>
      <QuestionBox @model={{@model}} />
    </main>
  </section>
  */
  {
    "id": "cKki7eS1",
    "block": "[[[1,[28,[35,0],[\"Country Quiz\"],null]],[1,\"\\n\\n\"],[10,\"section\"],[14,0,\"section-quiz\"],[12],[1,\"\\n  \"],[10,\"header\"],[14,0,\"container-quiz flex-center-v\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,0,\"title title__quiz\"],[12],[1,\"Country Quiz\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"main\"],[14,0,\"card quiz-card flex-col\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"quiz-icon quiz-icon__quiz\"],[12],[10,\"img\"],[14,\"src\",\"/assets/images/undraw_adventure_4hum 1.svg\"],[14,\"alt\",\"icon depicting a person going around the world\"],[12],[13],[13],[1,\"\\n    \"],[8,[39,1],null,[[\"@model\"],[[30,1]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@model\"],false,[\"page-title\",\"question-box\"]]",
    "moduleName": "country-quiz/templates/quiz.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("country-quiz/templates/result", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Country Quiz"}}
  <section class="section-quiz">
    <main class="card result-card flex-col">
      <div class="quiz-icon quiz-icon__result"><img
          src="/assets/images/undraw_winners_ao2o 2.svg"
          alt="icon depicting a person going around the world"
        /></div>
      <div class="result-description"><p class="title-result">Results</p>
        <p class="content-result">You got
          <span class="correct-ans-count">{{this.model.score}}</span>
          correct answers</p>
      </div>
      <LinkTo @route="index" class="button btn-replay">Try Again</LinkTo>
    </main>
  </section>
  */
  {
    "id": "xUpvFt1l",
    "block": "[[[1,[28,[35,0],[\"Country Quiz\"],null]],[1,\"\\n\"],[10,\"section\"],[14,0,\"section-quiz\"],[12],[1,\"\\n  \"],[10,\"main\"],[14,0,\"card result-card flex-col\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"quiz-icon quiz-icon__result\"],[12],[10,\"img\"],[14,\"src\",\"/assets/images/undraw_winners_ao2o 2.svg\"],[14,\"alt\",\"icon depicting a person going around the world\"],[12],[13],[13],[1,\"\\n    \"],[10,0],[14,0,\"result-description\"],[12],[10,2],[14,0,\"title-result\"],[12],[1,\"Results\"],[13],[1,\"\\n      \"],[10,2],[14,0,\"content-result\"],[12],[1,\"You got\\n        \"],[10,1],[14,0,\"correct-ans-count\"],[12],[1,[30,0,[\"model\",\"score\"]]],[13],[1,\"\\n        correct answers\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[8,[39,1],[[24,0,\"button btn-replay\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Try Again\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"link-to\"]]",
    "moduleName": "country-quiz/templates/result.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("country-quiz/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("country-quiz/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("country-quiz/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("country-quiz/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('country-quiz/config/environment', [], function() {
  var prefix = 'country-quiz';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("country-quiz/app")["default"].create({"name":"country-quiz","version":"0.0.0+62692e95"});
          }
        
//# sourceMappingURL=country-quiz.map
