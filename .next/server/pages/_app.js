/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/Components/HeaderUser/index.tsx":
/*!*********************************************!*\
  !*** ./src/Components/HeaderUser/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ \"(pages-dir-node)/./src/Components/HeaderUser/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst HeaderUser = ()=>{\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container__logo),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container__logo__items),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: '/',\n                                        children: \"Tarefas\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, undefined),\n                            session?.user?.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: '/dashboard',\n                                children: \"Meu painel\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, undefined),\n                status === 'loading' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, undefined) : session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container__saudation),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        title: \"Deslogar\",\n                        children: [\n                            \"Ol\\xe1 \",\n                            session.user?.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container__saudation),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        title: \"Logar\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\Components\\\\HeaderUser\\\\index.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9Db21wb25lbnRzL0hlYWRlclVzZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDakM7QUFFWTtBQUd4QyxNQUFNSyxhQUFhO0lBRWYsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHUiwyREFBVUE7SUFFNUMscUJBQ0ksOERBQUNTO2tCQUNHLDRFQUFDQztZQUFPQyxXQUFXUCxxRUFBZ0I7OzhCQUMvQiw4REFBQ0s7b0JBQUlFLFdBQVdQLDJFQUFzQjs4QkFDbEMsNEVBQUNLO3dCQUFJRSxXQUFXUCxrRkFBNkI7OzBDQUV6Qyw4REFBQ1c7O2tEQUNHLDhEQUFDWixrREFBSUE7d0NBQUNhLE1BQU07a0RBQUs7Ozs7OztrREFJakIsOERBQUNDO2tEQUFLOzs7Ozs7Ozs7Ozs7NEJBR1RWLFNBQVNXLE1BQU1DLHVCQUNaLDhEQUFDaEIsa0RBQUlBO2dDQUFDYSxNQUFNOzBDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFVckNSLFdBQVcsMEJBQ1IsOERBQUNDOzs7O2dDQUdERix3QkFFQSw4REFBQ0U7b0JBQUlFLFdBQVdQLGdGQUEyQjtvQkFBRWlCLFNBQVMsSUFBTW5CLHdEQUFPQTs4QkFFL0QsNEVBQUNhO3dCQUFFTyxPQUFNOzs0QkFBVzs0QkFDWGYsUUFBUVcsSUFBSSxFQUFFSzs7Ozs7Ozs7Ozs7OENBSTNCLDhEQUFDZDtvQkFBSUUsV0FBV1AsZ0ZBQTJCO29CQUFFaUIsU0FBUyxJQUFNcEIsdURBQU1BLENBQUM7OEJBQy9ELDRFQUFDYzt3QkFBRU8sT0FBTTtrQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QztBQUVBLGlFQUFlakIsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYXVsb1xcT25lRHJpdmVcXHRhcmVmYXNcXHNyY1xcQ29tcG9uZW50c1xcSGVhZGVyVXNlclxcaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlclVzZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2xvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19sb2dvX19pdGVtc30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFyZWZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uPy51c2VyPy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Rhc2hib2FyZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldSBwYWluZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7c3RhdHVzID09PSAnbG9hZGluZycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogc2Vzc2lvbiA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3NhdWRhdGlvbn0gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHRpdGxlPSdEZXNsb2dhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbMOhIHtzZXNzaW9uLnVzZXI/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3NhdWRhdGlvbn0gb25DbGljaz17KCkgPT4gc2lnbkluKFwiZ29vZ2xlXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdGl0bGU9J0xvZ2FyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJVc2VyXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJMaW5rIiwic3R5bGVzIiwiSGVhZGVyVXNlciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZGl2IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19sb2dvIiwiY29udGFpbmVyX19sb2dvX19pdGVtcyIsInAiLCJocmVmIiwic3BhbiIsInVzZXIiLCJlbWFpbCIsImNvbnRhaW5lcl9fc2F1ZGF0aW9uIiwib25DbGljayIsInRpdGxlIiwibmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/Components/HeaderUser/index.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/Components/HeaderUser/style.module.scss":
/*!*****************************************************!*\
  !*** ./src/Components/HeaderUser/style.module.scss ***!
  \*****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"style_container__ISs1u\",\n\t\"container__logo__items\": \"style_container__logo__items__H_aoY\",\n\t\"container__saudation\": \"style_container__saudation__3NcdS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9Db21wb25lbnRzL0hlYWRlclVzZXIvc3R5bGUubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHBhdWxvXFxPbmVEcml2ZVxcdGFyZWZhc1xcc3JjXFxDb21wb25lbnRzXFxIZWFkZXJVc2VyXFxzdHlsZS5tb2R1bGUuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZV9jb250YWluZXJfX0lTczF1XCIsXG5cdFwiY29udGFpbmVyX19sb2dvX19pdGVtc1wiOiBcInN0eWxlX2NvbnRhaW5lcl9fbG9nb19faXRlbXNfX0hfYW9ZXCIsXG5cdFwiY29udGFpbmVyX19zYXVkYXRpb25cIjogXCJzdHlsZV9jb250YWluZXJfX3NhdWRhdGlvbl9fM05jZFNcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/Components/HeaderUser/style.module.scss\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_HeaderUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/HeaderUser */ \"(pages-dir-node)/./src/Components/HeaderUser/index.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: pageProps.session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_HeaderUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\tarefas\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDRDtBQUVuQjtBQUdmLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQWE7SUFDN0QscUJBRUUsOERBQUNKLDREQUFlQTtRQUFDSyxTQUFTRCxVQUFVQyxPQUFPOzswQkFDekMsOERBQUNKLDhEQUFVQTs7Ozs7MEJBQ1gsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUk5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYXVsb1xcT25lRHJpdmVcXHRhcmVmYXNcXHNyY1xccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBIZWFkZXJVc2VyIGZyb20gXCJAL0NvbXBvbmVudHMvSGVhZGVyVXNlclwiO1xuXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICA8SGVhZGVyVXNlciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuXG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiSGVhZGVyVXNlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();