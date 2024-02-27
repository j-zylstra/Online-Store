// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var cartElement = document.querySelector(".cart-items");
var productsElement = document.querySelector(".products");
var subtotalElement = document.querySelector(".subtotal");
var totalItemsInCart = document.querySelector(".quantity");
document.addEventListener("DOMContentLoaded", function () {
  var navigationItems = [{
    id: "home",
    url: "index.html"
  }, {
    id: "sale",
    url: "sale"
  }, {
    id: "review",
    url: "reviews"
  }, {
    id: "cart-link",
    url: "cart"
  }, {
    id: "new",
    url: "new"
  }, {
    id: "bass",
    url: "bass"
  }, {
    id: "classic",
    url: "classic"
  }, {
    id: "accessories",
    url: "accessories"
  }];
  var handleNavigation = function handleNavigation(item) {
    console.log("Clicked on", item.id);
    window.location = item.url;
    console.log("New URL:", window.location);
    updateCartDisplay();
  };
  var handleCartPage = function handleCartPage() {
    if (window.location.pathname.endsWith("cart")) {
      updateCart();
      updateUI();
    }
  };
  var handleSalePage = function handleSalePage() {
    if (window.location.pathname.endsWith("sale")) {
      renderSaleProducts();
    }
  };
  navigationItems.forEach(function (item) {
    var element = document.getElementById(item.id);
    if (element) {
      element.addEventListener("click", function () {
        return handleNavigation(item);
      });
    }
  });
  handleCartPage();
  handleSalePage();
});
var pageToProductType = {
  "/new": "new",
  "/bass": "bass",
  "/classic": "classic",
  "/accessories": "accessories"
};
document.addEventListener("DOMContentLoaded", function () {
  var page = window.location.pathname;
  var productType = pageToProductType[page];
  if (productType) {
    renderProducts(productType);
  }
});
function renderCartItems(cart) {
  var newContent = '';
  cart.forEach(function (product) {
    newContent += "\n            <div class=\"cart-item\">\n                <div class=\"item-info\">\n                    <img src=\"".concat(product.product.imgsrc, "\" alt=\"").concat(product.product.name, "\">\n                        <h4>").concat(product.product.name, "</h4>\n                        <span><ion-icon class=\"icon-close\" onclick=\"removeItemFromCart(").concat(product.id, ")\" name=\"close-circle-outline\"></ion-icon></span>\n                </div>\n                <div class=\"unit-price\">\n                    <h2><small>$</small>").concat(product.product.price, "</h2>\n                </div>\n                <div class=\"units\">\n                    <div class=\"btn minus\" onclick=\"changeNumberOfUnits('minus', ").concat(product.product.id, ")\">-</div>\n                    <div class=\"number\">").concat(product.numberOfUnits, "</div>\n                    <div class=\"btn plus\" onclick=\"changeNumberOfUnits('plus', ").concat(product.product.id, ")\">+</div>\n                </div>\n            </div>");
  });
  cartElement.innerHTML = newContent;
}
;
function addToCart(id) {
  var storedCartData = localStorage.getItem('cart');
  var cart = storedCartData ? JSON.parse(storedCartData) : [];
  fetch("https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/products/".concat(id)).then(function (response) {
    return response.json();
  }).then(function (product) {
    var existingCartItem = cart.find(function (item) {
      return item.product.id === id;
    });
    if (existingCartItem) {
      if (existingCartItem.numberOfUnits < product.instock) {
        existingCartItem.numberOfUnits++;
      } else {
        console.warn('exceeded available stock for this product.');
      }
    } else {
      cart.push({
        product: product,
        numberOfUnits: 1
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }).catch(function (error) {
    console.error('Error:', error);
  });
}
;
function changeNumberOfUnits(action, id) {
  var storedCartData = localStorage.getItem('cart');
  var cart = storedCartData ? JSON.parse(storedCartData) : [];
  cart = cart.map(function (product) {
    if (product.product.id === id) {
      var numberOfUnits = product.numberOfUnits;
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < product.product.instock) {
        numberOfUnits++;
      }
      return _objectSpread(_objectSpread({}, product), {}, {
        numberOfUnits: numberOfUnits
      });
    }
    return product;
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}
;
function renderSubtotal(action, id) {
  var totalPrice = 0,
    totalItems = 0;
  cart.forEach(function (product) {
    totalPrice += product.product.price * product.numberOfUnits;
    totalItems += product.numberOfUnits;
  });
  subtotalElement.innerHTML = "Subtotal (".concat(totalItems, " items): $").concat(totalPrice.toFixed(2));
  totalItemsInCart.innerHTML = totalItems;
}
;
function removeItemFromCart(id) {
  var storedCartData = localStorage.getItem('cart');
  var cart = storedCartData ? JSON.parse(storedCartData) : [];
  var itemIndex = cart.findIndex(function (product) {
    return product.id === id;
  });
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateUI();
  }
  ;
}
function renderProducts(type) {
  var productsElement = document.querySelector(".".concat(type, "Products"));
  var path = window.location.pathname;
  var productType = path.split('/').pop().replace('.html', '');
  fetch("https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/products/type/".concat(productType)).then(function (response) {
    return response.json();
  }).then(function (products) {
    console.log(products);
    products.forEach(function (product) {
      if (product.type === type) {
        var card = document.createElement("div");
        card.classList.add("card-border");
        card.innerHTML = "\n                            <img class=\"card\" src=\"".concat(product.imgsrc, "\" alt=\"\">\n                            <h3>").concat(product.name, "</h3>\n                            <h2 id=\"price\"><small>$</small>").concat(product.price, "</h2>\n                            <button type=\"button\" onclick=\"addToCart(").concat(product.id, ")\">Add To Cart</button>\n                        ");
        productsElement.appendChild(card);
      }
    });
  }).catch(function (error) {
    console.log('Error:', error);
  });
}
;
function renderSaleProducts() {
  var saleProductsElement = document.querySelector(".saleProducts");
  fetch("https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/products/type/sale").then(function (response) {
    return response.json();
  }).then(function (products) {
    console.log(products);
    products.forEach(function (product) {
      var card = document.createElement("div");
      card.classList.add("card-border");
      card.innerHTML = "\n                            <img class=\"card\" src=\"".concat(product.imgsrc, "\" alt=\"\">\n                            <h3>").concat(product.name, "</h3>\n                            <h2 id=\"old-price\"><small>$</small>").concat(product.oldprice, "</h2>\n                            <h2 id=\"price\"><small>$</small>").concat(product.price, "</h2>\n                            <button type=\"button\" onclick=\"addToCart(").concat(product.id, ")\">Add To Cart</button>\n                        ");
      saleProductsElement.appendChild(card);
    });
  }).catch(function (error) {
    console.log('Error:', error);
  });
}
;
function updateCartDisplay() {
  var totalItemsInCart = document.querySelector(".quantity");
  var storedCartData = localStorage.getItem('cart');
  var cart = storedCartData ? JSON.parse(storedCartData) : [];
  var itemCount = cart.reduce(function (total, item) {
    return total + item.numberOfUnits;
  }, 0);
  totalItemsInCart.textContent = itemCount;
}
;
function updateUI() {
  var cartEmpty = document.getElementById('empty-cart-message');
  var cartView = document.getElementById('cart-container');
  var cartData = localStorage.getItem('cart');
  var cart = cartData ? JSON.parse(cartData) : [];
  if (cart.length === 0) {
    cartView.style.display = 'none';
    cartEmpty.style.display = 'block';
  } else {
    cartView.style.display = 'block';
    cartEmpty.style.display = 'none';
  }
}
;
function updateCart() {
  var storedCartData = localStorage.getItem('cart');
  if (storedCartData) {
    cart = JSON.parse(storedCartData);
  }
  renderCartItems(cart);
  renderSubtotal();
  updateCartDisplay();
}
;
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  var reviewForm, reviewContent, existingReviews, fetchExistingReviews, _fetchExistingReviews, displayReview;
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        displayReview = function _displayReview(review) {
          var reviewList = document.getElementById('reviewsList');
          var reviewItem = document.createElement('div');
          reviewItem.innerHTML = "<div class=\"user-review\">\n                                    <h2>".concat(review.userName, "</h2>\n                                    <p>\"").concat(review.content, "\"</p>\n                                </div>");
          reviewList.appendChild(reviewItem);
        };
        _fetchExistingReviews = function _fetchExistingReviews3() {
          _fetchExistingReviews = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var response, text, reviews;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return fetch('https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/reviews/DB', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                case 3:
                  response = _context2.sent;
                  if (response.ok) {
                    _context2.next = 6;
                    break;
                  }
                  throw new Error("Error: ".concat(response.status, " - ").concat(response.statusText));
                case 6:
                  _context2.next = 8;
                  return response.text();
                case 8:
                  text = _context2.sent;
                  _context2.prev = 9;
                  reviews = JSON.parse(text);
                  console.log('Fetched reviews:', reviews); // Log the reviews before returning
                  return _context2.abrupt("return", reviews || []);
                case 15:
                  _context2.prev = 15;
                  _context2.t0 = _context2["catch"](9);
                  console.error('Error parsing JSON:', _context2.t0);
                  return _context2.abrupt("return", []);
                case 19:
                  _context2.next = 25;
                  break;
                case 21:
                  _context2.prev = 21;
                  _context2.t1 = _context2["catch"](0);
                  console.error(_context2.t1.message);
                  return _context2.abrupt("return", []);
                case 25:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 21], [9, 15]]);
          }));
          return _fetchExistingReviews.apply(this, arguments);
        };
        fetchExistingReviews = function _fetchExistingReviews2() {
          return _fetchExistingReviews.apply(this, arguments);
        };
        reviewForm = document.getElementById('reviewForm');
        reviewContent = document.getElementById('reviewContent');
        if (reviewForm) {
          reviewForm.addEventListener('submit', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
              var comment, userId, response, data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    event.preventDefault();
                    comment = reviewContent.value;
                    userId = sessionStorage.getItem('userId');
                    _context.prev = 3;
                    _context.next = 6;
                    return fetch('https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/reviews', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        userId: userId,
                        comment: comment
                      })
                    });
                  case 6:
                    response = _context.sent;
                    if (!response.ok) {
                      _context.next = 15;
                      break;
                    }
                    _context.next = 10;
                    return response.json();
                  case 10:
                    data = _context.sent;
                    if (data.content.trim() !== "") {
                      // Display the review only if it's not empty
                      displayReview(data);
                    } else {
                      console.error('Received an empty review from the server:', data);
                    }

                    // Clear the form after submission
                    reviewContent.value = '';
                    _context.next = 16;
                    break;
                  case 15:
                    console.error("Error: ".concat(response.status, " - ").concat(response.statusText));
                  case 16:
                    _context.next = 21;
                    break;
                  case 18:
                    _context.prev = 18;
                    _context.t0 = _context["catch"](3);
                    console.error(_context.t0);
                  case 21:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[3, 18]]);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
        }

        // Check if the current URL is reviews.html
        if (!(window.location.href === 'https://riff-wired-27891913b14e.herokuapp.com/reviews')) {
          _context3.next = 17;
          break;
        }
        _context3.prev = 7;
        _context3.next = 10;
        return fetchExistingReviews();
      case 10:
        existingReviews = _context3.sent;
        // Ensure existingReviews is an array
        if (Array.isArray(existingReviews)) {
          // Display each existing review
          existingReviews.forEach(function (review) {
            return displayReview(review);
          });
        } else if (existingReviews && Array.isArray(existingReviews.reviews)) {
          // Extract the reviews property and display each existing review
          existingReviews.reviews.forEach(function (review) {
            return displayReview(review);
          });
        } else {
          console.error('Unable to find reviews in the response:', existingReviews);
        }

        // Rest of your code
        _context3.next = 17;
        break;
      case 14:
        _context3.prev = 14;
        _context3.t0 = _context3["catch"](7);
        console.error(_context3.t0);
      case 17:
        ;
      case 18:
      case "end":
        return _context3.stop();
    }
  }, _callee3, null, [[7, 14]]);
})));
var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector('.login-link');
var registerLink = document.querySelector('.register-link');
var btnPopup = document.querySelector('.btnLogin-popup');
var btnClose = document.querySelector('.icon-close');
document.addEventListener('click', function (event) {
  var target = event.target;
  if (target === registerLink) {
    wrapper.classList.add('active');
  }
  if (target === loginLink) {
    wrapper.classList.remove('active');
  }
  if (target === btnPopup) {
    wrapper.classList.add('active-popup');
  }
  if (target === btnClose) {
    event.preventDefault();
    wrapper.classList.remove('active-popup');
  }
});
function subscribe() {
  try {
    var emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
      alert("A confirmation email has been sent to " + emailInput + ". You are now subscribed to the mailing list.");
    } else {
      alert("Please enter a valid email address.");
    }
  } catch (error) {
    console.error('Error in subscribe function:', error);
  }
}
document.getElementById('check').addEventListener('click', function () {
  var menu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];
  var navList = document.getElementById('nav-list');

  // Check the current value of menu.style.left
  if (menu.style.left === '-100%') {
    menu.style.left = '0';
    navList.style.backdropFilter = 'blur(30px)';
  } else {
    menu.style.left = '-100%';
    navList.style.backdropFilter = 'blur(0)';
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var loginElement = document.getElementById('login');

  // Check if the element with ID 'login' exists
  if (loginElement) {
    loginElement.addEventListener('click', function () {
      var bottomMenu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];
      if (window.innerWidth < 613) {
        bottomMenu.style.left = '-100%';
      }
    });
  }
});
var closeLoginButton = document.getElementById('close-login');
if (closeLoginButton) {
  closeLoginButton.addEventListener('click', function () {
    var bottomMenu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];
    if (window.innerWidth < 613) {
      bottomMenu.style.left = '0';
    }
  });
}
;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56951" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map