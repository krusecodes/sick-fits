/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProduct; }\n/* harmony export */ });\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/noahkruse/Documents/krusecodes/prefixHack/prefixHack/frontend/components/SingleProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation UPDATE_PRODUCT_STATUS_MUTATION($productId: ID!, $status: String!) {\\n    updateProduct(where: { id: $productId }, data: { status: $status }) {\\n      id\\n      price\\n      description\\n      name\\n      status\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  query SINGLE_ITEM_QUERY($id: ID!) {\\n    Product(where: { id: $id }) {\\n      name\\n      price\\n      description\\n      id\\n      status\\n      photo {\\n        id\\n        altText\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar ProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({\n  displayName: \"SingleProduct__ProductStyles\",\n  componentId: \"sc-1kapz8w-0\"\n})([\"display:grid;grid-auto-columns:1fr;grid-auto-flow:column;max-width:var(--maxWidth);justify-content:center;align-items:top;gap:2rem;img{width:100%;object-fit:contain;}\"]);\n_c = ProductStyles;\nvar SINGLE_ITEM_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject());\nvar UPDATE_PRODUCT_STATUS_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject2());\nfunction SingleProduct(_ref) {\n  _s();\n\n  var _Product$photo, _Product$photo$image;\n\n  var id = _ref.id;\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)({\n    name: 'Broken Fridge',\n    description: 'The fridge is too warm',\n    image: '',\n    updateStatus: '' // Add a state for the updateStatus input\n\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(UPDATE_PRODUCT_STATUS_MUTATION, {\n    refetchQueries: [{\n      query: SINGLE_ITEM_QUERY,\n      variables: {\n        id: id\n      }\n    }] // Refetch with the current product ID\n\n  }),\n      _useMutation2 = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      updateProductStatus = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateLoading = _useMutation2$.loading,\n      updateError = _useMutation2$.error,\n      updateData = _useMutation2$.data;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 21\n  }, this);\n  var Product = data.Product;\n  console.log(Product); // Function to handle status update\n\n  var handleStatusUpdate = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      return _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return updateProductStatus({\n                variables: {\n                  productId: id,\n                  status: inputs.updateStatus\n                }\n              });\n\n            case 3:\n              _context.next = 8;\n              break;\n\n            case 5:\n              _context.prev = 5;\n              _context.t0 = _context[\"catch\"](0);\n              console.error('Error updating status:', _context.t0);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 5]]);\n    }));\n\n    return function handleStatusUpdate() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ProductStyles, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: [\"Sick Fits | \", Product.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), (Product === null || Product === void 0 ? void 0 : (_Product$photo = Product.photo) === null || _Product$photo === void 0 ? void 0 : (_Product$photo$image = _Product$photo.image) === null || _Product$photo$image === void 0 ? void 0 : _Product$photo$image.publicUrlTransformed) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n      src: Product.photo.image.publicUrlTransformed,\n      alt: Product.photo.altText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"details\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        children: Product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: Product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: Product.status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_8__.default, {\n        onSubmit: /*#__PURE__*/function () {\n          var _ref3 = (0,_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {\n            return _Users_noahkruse_Documents_krusecodes_prefixHack_prefixHack_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n              while (1) {\n                switch (_context2.prev = _context2.next) {\n                  case 0:\n                    e.preventDefault();\n                    console.log(inputs); // Submit the inputfields to the backend:\n\n                    _context2.next = 4;\n                    return updateProductStatus();\n\n                  case 4:\n                    clearForm();\n\n                  case 5:\n                  case \"end\":\n                    return _context2.stop();\n                }\n              }\n            }, _callee2);\n          }));\n\n          return function (_x) {\n            return _ref3.apply(this, arguments);\n          };\n        }(),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n          htmlFor: \"updateStatus\",\n          children: [\"Update Status\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"updateStatus\",\n            name: \"updateStatus\",\n            placeholder: \"Sent For Review\",\n            value: inputs.updateStatus,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          onClick: handleStatusUpdate,\n          type: \"submit\",\n          children: \"Update Status\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SingleProduct, \"wbE24XbmHLJR0vSR4B0nHDhG6rY=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation];\n});\n\n_c2 = SingleProduct;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductStyles\");\n$RefreshReg$(_c2, \"SingleProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzP2Q5MWQiXSwibmFtZXMiOlsiUHJvZHVjdFN0eWxlcyIsInN0eWxlZCIsIlNJTkdMRV9JVEVNX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfU1RBVFVTX01VVEFUSU9OIiwiU2luZ2xlUHJvZHVjdCIsImlkIiwidXNlRm9ybSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidXBkYXRlU3RhdHVzIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlTXV0YXRpb24iLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwidXBkYXRlUHJvZHVjdFN0YXR1cyIsInVwZGF0ZUxvYWRpbmciLCJ1cGRhdGVFcnJvciIsInVwZGF0ZURhdGEiLCJQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN0YXR1c1VwZGF0ZSIsInByb2R1Y3RJZCIsInN0YXR1cyIsInBob3RvIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJhbHRUZXh0IiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhLQUFuQjtLQUFNRCxhO0FBY04sSUFBTUUsaUJBQWlCLEdBQUdDLHFEQUFILG1CQUF2QjtBQW1CQSxJQUFNQyw4QkFBOEIsR0FBR0QscURBQUgsb0JBQXBDO0FBWWUsU0FBU0UsYUFBVCxPQUErQjtBQUFBOztBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFBQSxpQkFDQUMscURBQU8sQ0FBQztBQUNsREMsUUFBSSxFQUFFLGVBRDRD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SztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLDhEQUFDLGlEQUFEO0FBQ0UsZ0JBQVE7QUFBQSxzWUFBRSxrQkFBT0ksQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLHFCQUFDLENBQUNDLGNBQUY7QUFDQVQsMkJBQU8sQ0FBQ0MsR0FBUixDQUFZakIsTUFBWixFQUZRLENBR1I7O0FBSFE7QUFBQSwyQkFJRlcsbUJBQW1CLEVBSmpCOztBQUFBO0FBS1JULDZCQUFTOztBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVjtBQUFBLGdDQVNFO0FBQU8saUJBQU8sRUFBQyxjQUFmO0FBQUEsbURBRUU7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxjQUFFLEVBQUMsY0FGTDtBQUdFLGdCQUFJLEVBQUMsY0FIUDtBQUlFLHVCQUFXLEVBQUMsaUJBSmQ7QUFLRSxpQkFBSyxFQUFFRixNQUFNLENBQUNELFlBTGhCO0FBTUUsb0JBQVEsRUFBRUU7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQW9CRTtBQUFRLGlCQUFPLEVBQUVpQixrQkFBakI7QUFBcUMsY0FBSSxFQUFDLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0FsRnVCekIsYTtVQUNzQkUsaUQsRUFPWFEscUQsRUFTN0JLLHdEOzs7TUFqQmtCZixhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuXG5jb25zdCBQcm9kdWN0U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXhXaWR0aCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogdG9wO1xuICBnYXA6IDJyZW07XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuYDtcblxuY29uc3QgU0lOR0xFX0lURU1fUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNJTkdMRV9JVEVNX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcbiAgICAgIG5hbWVcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgaWRcbiAgICAgIHN0YXR1c1xuICAgICAgcGhvdG8ge1xuICAgICAgICBpZFxuICAgICAgICBhbHRUZXh0XG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBVUERBVEVfUFJPRFVDVF9TVEFUVVNfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX1NUQVRVU19NVVRBVElPTigkcHJvZHVjdElkOiBJRCEsICRzdGF0dXM6IFN0cmluZyEpIHtcbiAgICB1cGRhdGVQcm9kdWN0KHdoZXJlOiB7IGlkOiAkcHJvZHVjdElkIH0sIGRhdGE6IHsgc3RhdHVzOiAkc3RhdHVzIH0pIHtcbiAgICAgIGlkXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIG5hbWVcbiAgICAgIHN0YXR1c1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUHJvZHVjdCh7IGlkIH0pIHtcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtIH0gPSB1c2VGb3JtKHtcbiAgICBuYW1lOiAnQnJva2VuIEZyaWRnZScsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgZnJpZGdlIGlzIHRvbyB3YXJtJyxcbiAgICBpbWFnZTogJycsXG4gICAgdXBkYXRlU3RhdHVzOiAnJywgLy8gQWRkIGEgc3RhdGUgZm9yIHRoZSB1cGRhdGVTdGF0dXMgaW5wdXRcbiAgfSk7XG5cbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IFtcbiAgICB1cGRhdGVQcm9kdWN0U3RhdHVzLFxuICAgIHsgbG9hZGluZzogdXBkYXRlTG9hZGluZywgZXJyb3I6IHVwZGF0ZUVycm9yLCBkYXRhOiB1cGRhdGVEYXRhIH0sXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9TVEFUVVNfTVVUQVRJT04sIHtcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFNJTkdMRV9JVEVNX1FVRVJZLCB2YXJpYWJsZXM6IHsgaWQgfSB9XSwgLy8gUmVmZXRjaCB3aXRoIHRoZSBjdXJyZW50IHByb2R1Y3QgSURcbiAgfSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICBjb25zdCB7IFByb2R1Y3QgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKFByb2R1Y3QpO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBzdGF0dXMgdXBkYXRlXG4gIGNvbnN0IGhhbmRsZVN0YXR1c1VwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlUHJvZHVjdFN0YXR1cyh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHByb2R1Y3RJZDogaWQsXG4gICAgICAgICAgc3RhdHVzOiBpbnB1dHMudXBkYXRlU3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHN0YXR1czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RTdHlsZXM+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpY2sgRml0cyB8IHtQcm9kdWN0Lm5hbWV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtQcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkICYmIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17UHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICBhbHQ9e1Byb2R1Y3QucGhvdG8uYWx0VGV4dH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgPGgyPntQcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgPHA+e1Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cD57UHJvZHVjdC5zdGF0dXN9PC9wPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5wdXRzKTtcbiAgICAgICAgICAgIC8vIFN1Ym1pdCB0aGUgaW5wdXRmaWVsZHMgdG8gdGhlIGJhY2tlbmQ6XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVQcm9kdWN0U3RhdHVzKCk7XG4gICAgICAgICAgICBjbGVhckZvcm0oKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1cGRhdGVTdGF0dXNcIj5cbiAgICAgICAgICAgIFVwZGF0ZSBTdGF0dXNcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwidXBkYXRlU3RhdHVzXCJcbiAgICAgICAgICAgICAgbmFtZT1cInVwZGF0ZVN0YXR1c1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VudCBGb3IgUmV2aWV3XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy51cGRhdGVTdGF0dXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdGF0dXNVcGRhdGV9IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFVwZGF0ZSBTdGF0dXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm9kdWN0U3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

/***/ })

});