if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'SampleKotlinJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'SampleKotlinJS'.");
}
var SampleKotlinJS = function (_, Kotlin) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var throwCCE = Kotlin.throwCCE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  ElementsList.prototype = Object.create(Enum.prototype);
  ElementsList.prototype.constructor = ElementsList;
  function Elements() {
    Elements_instance = this;
    this.mElements_0 = null;
    this.input1Element_s9qmro$_0 = this.input1Element_s9qmro$_0;
    this.input2Element_cv9ef1$_0 = this.input2Element_cv9ef1$_0;
    this.selectorElement_vputl8$_0 = this.selectorElement_vputl8$_0;
  }
  Object.defineProperty(Elements.prototype, 'input1Element_0', {
    get: function () {
      if (this.input1Element_s9qmro$_0 == null)
        return throwUPAE('input1Element');
      return this.input1Element_s9qmro$_0;
    },
    set: function (input1Element) {
      this.input1Element_s9qmro$_0 = input1Element;
    }
  });
  Object.defineProperty(Elements.prototype, 'input2Element_0', {
    get: function () {
      if (this.input2Element_cv9ef1$_0 == null)
        return throwUPAE('input2Element');
      return this.input2Element_cv9ef1$_0;
    },
    set: function (input2Element) {
      this.input2Element_cv9ef1$_0 = input2Element;
    }
  });
  Object.defineProperty(Elements.prototype, 'selectorElement_0', {
    get: function () {
      if (this.selectorElement_vputl8$_0 == null)
        return throwUPAE('selectorElement');
      return this.selectorElement_vputl8$_0;
    },
    set: function (selectorElement) {
      this.selectorElement_vputl8$_0 = selectorElement;
    }
  });
  Elements.prototype.getElements = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (Kotlin.isType(this.mElements_0, Elements)) {
      tmp$_3 = Kotlin.isType(tmp$ = this.mElements_0, Elements) ? tmp$ : throwCCE();
    }
     else {
      this.getElements_0(Kotlin.isType(tmp$_0 = ElementsList$INPUT1_getInstance().value[0], HTMLInputElement) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = ElementsList$INPUT2_getInstance().value[0], HTMLInputElement) ? tmp$_1 : throwCCE(), ElementsList$SELECTOR_getInstance().value);
      tmp$_3 = Kotlin.isType(tmp$_2 = this.mElements_0, Elements) ? tmp$_2 : throwCCE();
    }
    return tmp$_3;
  };
  Elements.prototype.getElements_0 = function (input1, input2, selector) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.input1Element_0 = input1;
    this.input2Element_0 = input2;
    if ((Kotlin.isType(tmp$ = selector[0], HTMLInputElement) ? tmp$ : throwCCE()).checked) {
      tmp$_2 = Kotlin.isType(tmp$_0 = selector[0], HTMLInputElement) ? tmp$_0 : throwCCE();
    }
     else {
      tmp$_2 = Kotlin.isType(tmp$_1 = selector[1], HTMLInputElement) ? tmp$_1 : throwCCE();
    }
    this.selectorElement_0 = tmp$_2;
    this.mElements_0 = this;
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  Elements.prototype.getValues = function () {
    var valuesMap = LinkedHashMap_init();
    valuesMap.put_xwzc9p$('input1', this.input1Element_0.value);
    valuesMap.put_xwzc9p$('input2', this.input2Element_0.value);
    valuesMap.put_xwzc9p$('selector', this.selectorElement_0.value);
    return valuesMap;
  };
  Elements.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Elements',
    interfaces: []
  };
  var Elements_instance = null;
  function Elements_getInstance() {
    if (Elements_instance === null) {
      new Elements();
    }
    return Elements_instance;
  }
  function ElementsList(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElementsList_initFields() {
    ElementsList_initFields = function () {
    };
    ElementsList$INPUT1_instance = new ElementsList('INPUT1', 0, document.getElementsByName('input1'));
    ElementsList$INPUT2_instance = new ElementsList('INPUT2', 1, document.getElementsByName('input2'));
    ElementsList$SELECTOR_instance = new ElementsList('SELECTOR', 2, document.getElementsByName('selector'));
  }
  var ElementsList$INPUT1_instance;
  function ElementsList$INPUT1_getInstance() {
    ElementsList_initFields();
    return ElementsList$INPUT1_instance;
  }
  var ElementsList$INPUT2_instance;
  function ElementsList$INPUT2_getInstance() {
    ElementsList_initFields();
    return ElementsList$INPUT2_instance;
  }
  var ElementsList$SELECTOR_instance;
  function ElementsList$SELECTOR_getInstance() {
    ElementsList_initFields();
    return ElementsList$SELECTOR_instance;
  }
  ElementsList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElementsList',
    interfaces: [Enum]
  };
  function ElementsList$values() {
    return [ElementsList$INPUT1_getInstance(), ElementsList$INPUT2_getInstance(), ElementsList$SELECTOR_getInstance()];
  }
  ElementsList.values = ElementsList$values;
  function ElementsList$valueOf(name) {
    switch (name) {
      case 'INPUT1':
        return ElementsList$INPUT1_getInstance();
      case 'INPUT2':
        return ElementsList$INPUT2_getInstance();
      case 'SELECTOR':
        return ElementsList$SELECTOR_getInstance();
      default:throwISE('No enum constant ElementsList.' + name);
    }
  }
  ElementsList.valueOf_61zpoe$ = ElementsList$valueOf;
  var inputList;
  function main(args) {
    println('Hello Kotlin/JS!');
  }
  function sample() {
    var elements = Elements_getInstance().getElements();
    var elementsMap = elements.getValues();
    println(elementsMap.get_11rb$('input1') + toString(elementsMap.get_11rb$('input2')) + elementsMap.get_11rb$('selector'));
    println('Sample');
    var textArea = document.getElementsByName('textArea')[0];
    println(textArea);
  }
  function add() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var input1 = Kotlin.isType(tmp$ = document.getElementsByName('input1')[0], HTMLInputElement) ? tmp$ : throwCCE();
    var input2 = Kotlin.isType(tmp$_0 = document.getElementsByName('input2')[0], HTMLInputElement) ? tmp$_0 : throwCCE();
    if ((Kotlin.isType(tmp$_1 = document.getElementsByName('selector')[0], HTMLInputElement) ? tmp$_1 : throwCCE()).checked) {
      tmp$_4 = Kotlin.isType(tmp$_2 = document.getElementsByName('selector')[0], HTMLInputElement) ? tmp$_2 : throwCCE();
    }
     else {
      tmp$_4 = Kotlin.isType(tmp$_3 = document.getElementsByName('selector')[1], HTMLInputElement) ? tmp$_3 : throwCCE();
    }
    var selector1 = tmp$_4;
    if (equals(input1.value, '') || equals(input2.value, '')) {
      return;
    }
    inputList.add_11rb$(new Input(input1.value, input2.value, selector1.value));
    input1.value = '';
    input2.value = '';
    selector1.checked = false;
    var textArea = Kotlin.isType(tmp$_5 = document.getElementsByName('textArea')[0], HTMLTextAreaElement) ? tmp$_5 : throwCCE();
    var text = '{[';
    tmp$_6 = inputList.iterator();
    while (tmp$_6.hasNext()) {
      var input = tmp$_6.next();
      var item = trimIndent('\n' + '            {' + '\n' + '                ' + '"' + 'input1' + '"' + ': ' + '"' + input.input1 + '"' + ',' + '\n' + '                ' + '"' + 'input2' + '"' + ': ' + '"' + input.input2 + '"' + ',' + '\n' + '                ' + '"' + 'selector1' + '"' + ': ' + '"' + input.selector1 + '"' + '\n' + '            },' + '\n' + '        ');
      text += item;
    }
    var $receiver = text;
    var endIndex = text.length - 1 | 0;
    text = $receiver.substring(0, endIndex);
    text += ']}';
    textArea.value = text;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function clear() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var input1 = Kotlin.isType(tmp$ = document.getElementsByName('input1')[0], HTMLInputElement) ? tmp$ : throwCCE();
    var input2 = Kotlin.isType(tmp$_0 = document.getElementsByName('input2')[0], HTMLInputElement) ? tmp$_0 : throwCCE();
    if ((Kotlin.isType(tmp$_1 = document.getElementsByName('selector')[0], HTMLInputElement) ? tmp$_1 : throwCCE()).checked) {
      tmp$_4 = Kotlin.isType(tmp$_2 = document.getElementsByName('selector')[0], HTMLInputElement) ? tmp$_2 : throwCCE();
    }
     else {
      tmp$_4 = Kotlin.isType(tmp$_3 = document.getElementsByName('selector')[1], HTMLInputElement) ? tmp$_3 : throwCCE();
    }
    var selector1 = tmp$_4;
    var textArea = Kotlin.isType(tmp$_5 = document.getElementsByName('textArea')[0], HTMLTextAreaElement) ? tmp$_5 : throwCCE();
    input1.value = '';
    input2.value = '';
    selector1.checked = false;
    textArea.value = '';
    inputList = ArrayList_init();
  }
  function Input(input1, input2, selector1) {
    this.input1 = input1;
    this.input2 = input2;
    this.selector1 = selector1;
  }
  Input.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Input',
    interfaces: []
  };
  Input.prototype.component1 = function () {
    return this.input1;
  };
  Input.prototype.component2 = function () {
    return this.input2;
  };
  Input.prototype.component3 = function () {
    return this.selector1;
  };
  Input.prototype.copy_6hosri$ = function (input1, input2, selector1) {
    return new Input(input1 === void 0 ? this.input1 : input1, input2 === void 0 ? this.input2 : input2, selector1 === void 0 ? this.selector1 : selector1);
  };
  Input.prototype.toString = function () {
    return 'Input(input1=' + Kotlin.toString(this.input1) + (', input2=' + Kotlin.toString(this.input2)) + (', selector1=' + Kotlin.toString(this.selector1)) + ')';
  };
  Input.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.input1) | 0;
    result = result * 31 + Kotlin.hashCode(this.input2) | 0;
    result = result * 31 + Kotlin.hashCode(this.selector1) | 0;
    return result;
  };
  Input.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.input1, other.input1) && Kotlin.equals(this.input2, other.input2) && Kotlin.equals(this.selector1, other.selector1)))));
  };
  Object.defineProperty(_, 'Elements', {
    get: Elements_getInstance
  });
  Object.defineProperty(ElementsList, 'INPUT1', {
    get: ElementsList$INPUT1_getInstance
  });
  Object.defineProperty(ElementsList, 'INPUT2', {
    get: ElementsList$INPUT2_getInstance
  });
  Object.defineProperty(ElementsList, 'SELECTOR', {
    get: ElementsList$SELECTOR_getInstance
  });
  _.ElementsList = ElementsList;
  Object.defineProperty(_, 'inputList', {
    get: function () {
      return inputList;
    },
    set: function (value) {
      inputList = value;
    }
  });
  _.main_kand9s$ = main;
  _.sample = sample;
  _.add = add;
  _.clear = clear;
  _.Input = Input;
  inputList = ArrayList_init();
  main([]);
  Kotlin.defineModule('SampleKotlinJS', _);
  return _;
}(typeof SampleKotlinJS === 'undefined' ? {} : SampleKotlinJS, kotlin);
