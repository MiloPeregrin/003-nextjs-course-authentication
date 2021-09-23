module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2X8D":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "profile-form_form__3U8O4",
	"control": "profile-form_control__3DY65",
	"action": "profile-form_action__23LLQ"
};


/***/ }),

/***/ "5Zka":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profile": "user-profile_profile__2YJCq"
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("W+IF");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "W+IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/profile/profile-form.module.css
var profile_form_module = __webpack_require__("2X8D");
var profile_form_module_default = /*#__PURE__*/__webpack_require__.n(profile_form_module);

// CONCATENATED MODULE: ./components/profile/profile-form.js





function ProfileForm(props) {
  const newPasswordRef = Object(external_react_["useRef"])();
  const oldPasswordRef = Object(external_react_["useRef"])();

  function submitHandler(event) {
    event.preventDefault();
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;
    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    className: profile_form_module_default.a.form,
    onSubmit: submitHandler,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: profile_form_module_default.a.control,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "new-password",
        children: "New Password"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "password",
        id: "new-password",
        ref: newPasswordRef
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: profile_form_module_default.a.control,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "old-password",
        children: "Old Password"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "password",
        id: "old-password",
        ref: oldPasswordRef
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: profile_form_module_default.a.action,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        children: "Change Password"
      })
    })]
  });
}

/* harmony default export */ var profile_form = (ProfileForm);
// EXTERNAL MODULE: ./components/profile/user-profile.module.css
var user_profile_module = __webpack_require__("5Zka");
var user_profile_module_default = /*#__PURE__*/__webpack_require__.n(user_profile_module);

// CONCATENATED MODULE: ./components/profile/user-profile.js





function UserProfile() {
  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: user_profile_module_default.a.profile,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: "Your User Profile"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(profile_form, {
      onChangePassword: changePasswordHandler
    })]
  });
}

/* harmony default export */ var user_profile = (UserProfile);
// CONCATENATED MODULE: ./pages/profile.js




function ProfilePage() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(user_profile, {});
}

async function getServerSideProps(context) {
  const session = await Object(client_["getSession"])({
    req: context.req
  });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
}
/* harmony default export */ var profile = __webpack_exports__["default"] = (ProfilePage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });