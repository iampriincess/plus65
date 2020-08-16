/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function forEach(arr, callback) {
  Array.prototype.forEach.call(arr, callback);
}

function mobileNav() {
  var trigger = document.getElementById('menuMobileTrigger');
  var mainHeader = document.getElementById('main-header');
  trigger.addEventListener('click', function (e) {
    if (mainHeader.classList.contains('show-mobile-nav')) {
      mainHeader.classList.remove('show-mobile-nav');
    } else {
      mainHeader.classList.add('show-mobile-nav');
    }

    e.preventDefault();
  });
}

function validateForm() {
  var form = document.getElementById('contactForm');

  if (_typeof(form) != undefined && form != null) {
    var formGroup = form.querySelectorAll('.form-group');
    var submit = document.getElementById('submitForm');

    var validateEmail = function validateEmail(email) {
      var se = /^[\w\.\-_]{1,}@[\w\.\-]{6,}/;
      return se.test(email);
    };

    submit.addEventListener('click', function (e) {
      e.preventDefault();
      forEach(formGroup, function (formField) {
        var input = formField.getElementsByClassName('form-control');
        var errorMessage = formField.getElementsByClassName('error-message');
        var thisValue = input[0].value;
        input[0].classList.remove('error');
        thisValue = thisValue.trim();

        if (thisValue == '' && input[0].type !== 'textarea') {
          input[0].classList.add('error');
          errorMessage[0].innerHTML = 'this field is required.';
        } else {
          if (input[0].type == 'email') {
            if (!validateEmail(thisValue)) {
              input[0].classList.add('error');
              errorMessage[0].innerHTML = 'email is invalid.';
            }
          }
        }
      });
    });
  }
}

function scrollTo() {
  var pageToScroll = document.querySelectorAll('.page-scroll');

  if (pageToScroll.length > 0) {
    forEach(pageToScroll, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        hash = hash.replace('#', '');
        var target = document.getElementById(hash);
        console.log(target);
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: target.offsetTop
        });
      });
    });
  }
}

mobileNav();
validateForm();
scrollTo();
window.addEventListener('scroll', function (e) {
  var currentScroll = window.pageYOffset;
  var service = document.getElementById('services');
  var expertise = document.getElementById('expertise');
  var magic = document.getElementById('magic');
  var footer = document.getElementById('footer');
  var about = document.getElementById('about');
  var contact = document.getElementById('contact');
  var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  var reduce = vh / 2;

  if (_typeof(expertise) != undefined && expertise != null) {
    var expertisePosition = expertise.offsetTop;

    if (currentScroll >= expertisePosition - reduce) {
      var expertisebarItem = expertise.querySelectorAll('.expertisebar-bar');
      var expertiseTitle = expertise.querySelectorAll('.animate__animated');
      expertiseTitle[0].classList.add('animate__fadeInUp');
      forEach(expertisebarItem, function (el) {
        el.classList.add('animate');
      });
    }
  }

  if (_typeof(service) != undefined && service != null) {
    var servicePosition = service.offsetTop;

    if (currentScroll >= servicePosition - reduce) {
      var serviceItem = service.querySelectorAll('.animate__animated');
      forEach(serviceItem, function (el) {
        el.classList.add('animate__fadeInUp');
      });
    }
  }

  if (_typeof(magic) != undefined && magic != null) {
    var magicPosition = magic.offsetTop;

    if (currentScroll >= magicPosition - reduce) {
      var magicItem = magic.querySelectorAll('.animate__animated');
      forEach(magicItem, function (el) {
        el.classList.add('animate__fadeInUp');
      });
    }
  }

  if (_typeof(footer) != undefined && footer != null) {
    var footerPosition = footer.offsetTop;

    if (currentScroll >= footerPosition - reduce) {
      var footerItem = footer.querySelectorAll('.animate__animated');
      forEach(footerItem, function (el) {
        el.classList.add('animate__fadeInUp');
      });
    }
  }

  if (_typeof(about) != undefined && about != null) {
    var aboutPosition = about.offsetTop;

    if (currentScroll >= aboutPosition - reduce) {
      var aboutItemLeft = about.querySelectorAll('.animate-left');
      var aboutItemRight = about.querySelectorAll('.animate-right');
      aboutItemLeft[0].classList.add('animate__fadeInLeft');
      aboutItemRight[0].classList.add('animate__fadeInRight');
    }
  }

  if (_typeof(contact) != undefined && contact != null) {
    var contactPosition = contact.offsetTop;

    if (currentScroll >= contactPosition - reduce) {
      var contactItemLeft = contact.querySelectorAll('.animate-left');
      var contactItemRight = contact.querySelectorAll('.animate-right');
      contactItemLeft[0].classList.add('animate__fadeInLeft');
      contactItemRight[0].classList.add('animate__fadeInRight');
    }
  }
});

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fretz\frontend-coding-challenge\resources\js\script.js */"./resources/js/script.js");


/***/ })

/******/ });