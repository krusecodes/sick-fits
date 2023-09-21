/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/noahkruse/Documents/krusecodes/prefixHack/prefixHack/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation UPDATE_PRODUCT_MUTATION(\\n    $id: ID!\\n    $name: String\\n    $description: String\\n    $price: Int\\n    $status: String\\n  ) {\\n    updateProduct(\\n      id: $id\\n      data: {\\n        name: $name\\n        description: $description\\n        price: $price\\n        status: $status\\n      }\\n    ) {\\n      id\\n      name\\n      description\\n      price\\n      status\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\\n    Product(where: { id: $id }) {\\n      id\\n      name\\n      description\\n      price\\n      status\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  // 1. We need to get the existing product\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // 2. We need to get the mutation to update the product\n\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(UPDATE_PRODUCT_MUTATION),\n      _useMutation2 = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading; // 2.5 Create some state for the form inputs:\n\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)(data === null || data === void 0 ? void 0 : data.Product),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  console.log(inputs);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n    children: \"loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 23\n  }, this); // const statusLabel = data.status;\n\n  var updateStatusLabel = function updateStatusLabel() {\n    var statusLabel = data.status;\n\n    if (statusLabel === 'DRAFT') {\n      return 'Submitted for Review';\n    }\n\n    if (statusLabel === 'AVAILABLE') {\n      return 'Review but not Submitted';\n    }\n\n    if (statusLabel === 'UNAVAILABLE') {\n      return 'Being worked on';\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var res;\n        return _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                _context.next = 3;\n                return updateProduct({\n                  variables: {\n                    id: id,\n                    name: inputs.name,\n                    description: inputs.description,\n                    price: inputs.price,\n                    status: inputs.status\n                  },\n                  refetchQueries: [{\n                    query: SINGLE_PRODUCT_QUERY\n                  }]\n                })[\"catch\"](console.error);\n\n              case 3:\n                res = _context.sent;\n                console.log(res);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {\n      error: error || updateError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"fieldset\", {\n      disabled: updateLoading,\n      \"aria-busy\": updateLoading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n        htmlFor: \"status\",\n        children: [\"Status\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"select\", {\n          id: \"status\",\n          name: \"status\",\n          value: inputs.status,\n          onChange: handleChange,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"option\", {\n            value: \"AVAILABLE\",\n            children: \"Reviewed\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"option\", {\n            value: \"UNAVAILABLE\",\n            children: \"Being worked on\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Update Status\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, this);\n}\n\n_s(UpdateProduct, \"+ElilaJyMyeJ07NkHv6NMUicoTQ=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZUxvYWRpbmciLCJ1c2VGb3JtIiwiUHJvZHVjdCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVTdGF0dXNMYWJlbCIsInN0YXR1c0xhYmVsIiwic3RhdHVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxvREFBSCxtQkFBMUI7QUFZQSxJQUFNQyx1QkFBdUIsR0FBR0Qsb0RBQUgsb0JBQTdCO0FBMEJlLFNBQVNFLGFBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQzVDO0FBRDRDLGtCQUVYQyx3REFBUSxDQUFDTCxvQkFBRCxFQUF1QjtBQUM5RE0sYUFBUyxFQUFFO0FBQUVGLFFBQUUsRUFBRkE7QUFBRjtBQURtRCxHQUF2QixDQUZHO0FBQUEsTUFFcENHLElBRm9DLGFBRXBDQSxJQUZvQztBQUFBLE1BRTlCQyxLQUY4QixhQUU5QkEsS0FGOEI7QUFBQSxNQUV2QkMsT0FGdUIsYUFFdkJBLE9BRnVCLEVB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QTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEOztHQS9EdUJmLGE7VUFFV0Usb0QsRUFPN0JLLHVELEVBRW1ESyxpRDs7O0tBWGpDWixhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgICAgc3RhdHVzXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBVUERBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgJGlkOiBJRCFcbiAgICAkbmFtZTogU3RyaW5nXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAkcHJpY2U6IEludFxuICAgICRzdGF0dXM6IFN0cmluZ1xuICApIHtcbiAgICB1cGRhdGVQcm9kdWN0KFxuICAgICAgaWQ6ICRpZFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiAkbmFtZVxuICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlOiAkcHJpY2VcbiAgICAgICAgc3RhdHVzOiAkc3RhdHVzXG4gICAgICB9XG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHByaWNlXG4gICAgICBzdGF0dXNcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoeyBpZCB9KSB7XG4gIC8vIDEuIFdlIG5lZWQgdG8gZ2V0IHRoZSBleGlzdGluZyBwcm9kdWN0XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gIH0pO1xuICAvLyAyLiBXZSBuZWVkIHRvIGdldCB0aGUgbXV0YXRpb24gdG8gdXBkYXRlIHRoZSBwcm9kdWN0XG4gIGNvbnN0IFtcbiAgICB1cGRhdGVQcm9kdWN0LFxuICAgIHsgZGF0YTogdXBkYXRlRGF0YSwgZXJyb3I6IHVwZGF0ZUVycm9yLCBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nIH0sXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTik7XG4gIC8vIDIuNSBDcmVhdGUgc29tZSBzdGF0ZSBmb3IgdGhlIGZvcm0gaW5wdXRzOlxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybShkYXRhPy5Qcm9kdWN0KTtcbiAgY29uc29sZS5sb2coaW5wdXRzKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5sb2FkaW5nLi4uPC9wPjtcbiAgLy8gY29uc3Qgc3RhdHVzTGFiZWwgPSBkYXRhLnN0YXR1cztcbiAgY29uc3QgdXBkYXRlU3RhdHVzTGFiZWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkYXRhLnN0YXR1cztcbiAgICBpZiAoc3RhdHVzTGFiZWwgPT09ICdEUkFGVCcpIHtcbiAgICAgIHJldHVybiAnU3VibWl0dGVkIGZvciBSZXZpZXcnO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzTGFiZWwgPT09ICdBVkFJTEFCTEUnKSB7XG4gICAgICByZXR1cm4gJ1JldmlldyBidXQgbm90IFN1Ym1pdHRlZCc7XG4gICAgfVxuICAgIGlmIChzdGF0dXNMYWJlbCA9PT0gJ1VOQVZBSUxBQkxFJykge1xuICAgICAgcmV0dXJuICdCZWluZyB3b3JrZWQgb24nO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlUHJvZHVjdCh7XG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWU6IGlucHV0cy5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGlucHV0cy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaWNlOiBpbnB1dHMucHJpY2UsXG4gICAgICAgICAgICBzdGF0dXM6IGlucHV0cy5zdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFNJTkdMRV9QUk9EVUNUX1FVRVJZIH1dLFxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3VwZGF0ZUxvYWRpbmd9IGFyaWEtYnVzeT17dXBkYXRlTG9hZGluZ30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhdHVzXCI+XG4gICAgICAgICAgU3RhdHVzXG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxuICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnN0YXR1c31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFWQUlMQUJMRVwiPlJldmlld2VkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVU5BVkFJTEFCTEVcIj5CZWluZyB3b3JrZWQgb248L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgU3RhdHVzPC9idXR0b24+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ })

});