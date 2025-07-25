exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthContext: () => (/* binding */ AuthContext),
/* harmony export */   CartContext: () => (/* binding */ CartContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
function MyApp({ Component , pageProps  }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const login = (email)=>setUser({
            email
        });
    const logout = ()=>setUser(null);
    const addToCart = (product)=>{
        setCart((prev)=>{
            const exist = prev.find((p)=>p.id === product.id);
            if (exist) {
                return prev.map((p)=>p.id === product.id ? {
                        ...p,
                        qty: p.qty + 1
                    } : p);
            }
            return [
                ...prev,
                {
                    ...product,
                    qty: 1
                }
            ];
        });
    };
    const removeFromCart = (productId)=>{
        setCart((prev)=>prev.filter((p)=>p.id !== productId));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            login,
            logout
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
            value: {
                cart,
                addToCart,
                removeFromCart
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.appWithTranslation)(MyApp));


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;