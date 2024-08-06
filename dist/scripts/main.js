"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * TIMER
 */
var hoursCellArray = document.getElementsByClassName('hours');
var minutesCellArray = document.getElementsByClassName('minutes');
var secondsCellArray = document.getElementsByClassName('seconds');
function showTimeToMidnight() {
  var now = new Date();
  var nowHours = now.getHours();
  var nowMinutes = now.getMinutes();
  var nowSeconds = now.getSeconds();
  var hoursToMidnight = 0;
  var minutesToMidnight = 0;
  var secondsToMidnight = 0;

  // Get hours to midnight
  function getHoursToMidnight() {
    if (nowMinutes === 0 && nowSeconds === 0) {
      hoursToMidnight = 24 - nowHours;
    } else {
      hoursToMidnight = 23 - nowHours;
    }
    hoursToMidnight = String(hoursToMidnight);
    return hoursToMidnight.length === 2 ? hoursToMidnight : '0' + hoursToMidnight;
  }

  // Get minutes to midnight
  function getMinutesToMidnight() {
    if (nowMinutes === 0 && nowSeconds === 0) {
      minutesToMidnight = 0;
    } else {
      minutesToMidnight = 59 - nowMinutes;
    }
    minutesToMidnight = String(minutesToMidnight);
    return minutesToMidnight.length === 2 ? minutesToMidnight : '0' + minutesToMidnight;
  }

  // Get seconds to midnight
  function getSecondsToMidnight() {
    if (nowSeconds === 0) {
      secondsToMidnight = 0;
    } else {
      secondsToMidnight = 60 - nowSeconds;
    }
    secondsToMidnight = String(secondsToMidnight);
    return secondsToMidnight.length === 2 ? secondsToMidnight : '0' + secondsToMidnight;
  }

  // Update timer cells
  var _iterator = _createForOfIteratorHelper(hoursCellArray),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.textContent = getHoursToMidnight();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(minutesCellArray),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _item = _step2.value;
      _item.textContent = getMinutesToMidnight();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(secondsCellArray),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _item2 = _step3.value;
      _item2.textContent = getSecondsToMidnight();
    }
    // console.log(`${getHoursToMidnight()}:${getMinutesToMidnight()}:${getSecondsToMidnight()}`);
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  setTimeout(showTimeToMidnight, 200);
}
showTimeToMidnight();

/**
 * 
 * 
 * - - - SLIDER - - -
 * 
 * 
 */
var sliderBlock = document.querySelector('.slider');
var sliderRow = document.querySelector('.slider__row');
var arrowsBlock = document.querySelector('.slider__arrows');
var widthSliderCell = 440;
sliderRow.style.left = '-440px';
function clickHandler(event) {
  var leftCoordinate = Number(sliderRow.style.left.slice(0, -2));
  var dotsLiveCollection = sliderBlock.getElementsByClassName('slider-dots__item');
  var dotActiveNowElement = sliderBlock.getElementsByClassName('slider-dots__item_active')[0];
  var numberActiveElementNow = Array.from(dotsLiveCollection).indexOf(dotActiveNowElement);
  var nextNumberActiveElement = 0;
  function removeActiveClass(acitveElement) {
    acitveElement.classList.remove('slider-dots__item_active');
  }
  removeActiveClass(dotActiveNowElement);
  // Processing click on left arrow
  if (event.target.classList.contains('slider__arrows_left')) {
    if (leftCoordinate === 0) {
      nextNumberActiveElement = dotsLiveCollection.length - 1;
      sliderRow.style.left = '-880px';
    } else {
      nextNumberActiveElement = numberActiveElementNow - 1;
      sliderRow.style.left = leftCoordinate + widthSliderCell + 'px';
    }
  }
  // Processing click on right arrow
  if (event.target.classList.contains('slider__arrows_right')) {
    if (leftCoordinate === -880) {
      sliderRow.style.left = '0px';
      nextNumberActiveElement = 0;
    } else {
      nextNumberActiveElement = numberActiveElementNow + 1;
      sliderRow.style.left = leftCoordinate - widthSliderCell + 'px';
    }
  }
  dotsLiveCollection[nextNumberActiveElement].classList.add('slider-dots__item_active');
}
sliderBlock.addEventListener('click', clickHandler);

/**
 * 
 * 
 * - - - TELEGRAM BOT - - -
 * 
 */
// import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "./telegbot-tok.js";

// // Bot name - order processing
// // Username for bot - sadovShopBot
// // Name of group with bot - sadovShop

// // API - адрес куда посылаем запрос
var API = "https://api.telegram.org/bot".concat(TELEGRAM_TOKEN, "/sendMessage");
function sendEmailTelegram(_x) {
  return _sendEmailTelegram.apply(this, arguments);
}
/**
 * 
 * 
 * - - - FORM VALIDATION - - -
 * 
 * 
 */
// let form = document.getElementById('form-order');
// function validation(form) {
//     let result = true;
//     const arrInputs = form.querySelectorAll('input'); // array of input tags
//     function removeError(input) {
//         const parentOfInput = input.parentNode;
//         if (parentOfInput.classList.contains('error')) {
//             parentOfInput.querySelector('.error-label').remove();
//             parentOfInput.classList.remove('error');
//         }
//     }
//     function createError(input, text) {
//         const parentOfInput = input.parentNode;
//         const errorLabel = document.createElement('label');
//         errorLabel.classList.add('error-label');
//         errorLabel.textContent = text + input.placeholder[0].toLowerCase() + input.placeholder.slice(1);
//         parentOfInput.classList.add('error');
//         parentOfInput.append(errorLabel);
//     }
//     arrInputs.forEach( input => {
//         removeError(input);
//         if (input.value === '') {
//             createError(input, 'Будь-ласка, ');
//             result = false;
//         }
//     })
//     return result;
// }
// function handlerForm(event) {
//     event.preventDefault();
//     // validation(this) // "this" - это тег form, форма которую мы обрабатываем
//     alert('The form has been validated in HTML.')
//     // if (validation(this) === true) {
//     //     // Скорее всего в этом блоке нужно будет передавать данные в Телеграм
//     //     alert('The form has been validated.');
//     // }
// }
// form.addEventListener('submit', handlerForm);
function _sendEmailTelegram() {
  _sendEmailTelegram = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var form, formBtn, formData, fromDataObject, name, phone, dataStrFromSite, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          form = event.target;
          formBtn = document.querySelector('#form-order #order-button'); // Оборачиваем в обёртку нашу форму
          formData = new FormData(form); // Получаем данные в виде объекта
          fromDataObject = Object.fromEntries(formData.entries());
          name = fromDataObject.name, phone = fromDataObject.phone;
          dataStrFromSite = "\u0406\u043C'\u044F \u043F\u043E\u043A\u0443\u043F\u0446\u044F: ".concat(name, " \n\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430: ").concat(phone);
          console.log(dataStrFromSite);
          _context.prev = 8;
          formBtn.textContent = 'Не закривайте цю сторінку, доки надсилаються дані...';
          _context.next = 12;
          return fetch(API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: dataStrFromSite
            })
          });
        case 12:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 18;
            break;
          }
          alert('Дякуємо! Ваше замовлення прийнято. Ми зв`яжемось з Вами найближчим часом.');
          // Чистим форму
          form.reset();
          _context.next = 19;
          break;
        case 18:
          throw new Error(response.statusText);
        case 19:
          _context.next = 25;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](8);
          console.error();
          alert('Нажаль ми не отримали Ваші дані. Будь-ласка, знову введіть Ваші дані та натисність на кноку "ОФОРМИТИ ЗАМОВЛЕННЯ".');
        case 25:
          _context.prev = 25;
          formBtn.textContent = 'ОФОРМИТИ ЗАМОВЛЕННЯ';
          return _context.finish(25);
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[8, 21, 25, 28]]);
  }));
  return _sendEmailTelegram.apply(this, arguments);
}
//# sourceMappingURL=main.js.map
