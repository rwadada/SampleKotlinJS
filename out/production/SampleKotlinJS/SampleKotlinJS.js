if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'SampleKotlinJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'SampleKotlinJS'.");
}
var SampleKotlinJS = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var inputList;
  function main(args) {
    println('Hello Kotlin/JS!');
  }
  function sample() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var input1 = Kotlin.isType(tmp$ = document.getElementsByName('input1')[0], HTMLInputElement) ? tmp$ : throwCCE();
    var input2 = Kotlin.isType(tmp$_0 = document.getElementsByName('input2')[0], HTMLInputElement) ? tmp$_0 : throwCCE();
    if ((Kotlin.isType(tmp$_1 = document.getElementsByName('selector')[0], HTMLInputElement) ? tmp$_1 : throwCCE()).checked) {
      tmp$_4 = Kotlin.isType(tmp$_2 = document.getElementsByName('selector')[0], HTMLInputElement) ? tmp$_2 : throwCCE();
    }
     else {
      tmp$_4 = Kotlin.isType(tmp$_3 = document.getElementsByName('selector')[1], HTMLInputElement) ? tmp$_3 : throwCCE();
    }
    var selector1 = tmp$_4;
    println(input1.value + input2.value + selector1.value);
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
