"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 2752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcart_absolutePagePath_private_next_pages_2Fcart_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/cart.js
var cart_namespaceObject = {};
__webpack_require__.r(cart_namespaceObject);
__webpack_require__.d(cart_namespaceObject, {
  "default": () => (Cart)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(4097);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./pages/cart.js





function Cart() {
    const { cart , removeFromCart  } = (0,external_react_.useContext)(_app.CartContext);
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const total = cart.reduce((acc, p)=>acc + p.price * p.qty, 0);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "container mx-auto py-10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-2xl font-bold mb-6",
                        children: t("cart")
                    }),
                    cart.length === 0 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: "Кошик порожній"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: "w-full border",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "bg-green-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            children: "Товар"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            children: "Кількість"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            children: "Ціна"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                children: cart.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        className: "border-b",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "p-2",
                                                children: item.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "p-2",
                                                children: item.qty
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                className: "p-2",
                                                children: [
                                                    item.price * item.qty,
                                                    " ₴"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "p-2",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>removeFromCart(item.id),
                                                    className: "bg-red-500 text-white px-3 py-1 rounded",
                                                    children: "Видалити"
                                                })
                                            })
                                        ]
                                    }, item.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-4 text-right font-bold text-lg",
                        children: [
                            "Всього: ",
                            total,
                            " ₴"
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcart&absolutePagePath=private-next-pages%2Fcart.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcart_absolutePagePath_private_next_pages_2Fcart_js_preferredRegion_ = ((0,helpers/* hoist */.l)(cart_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(cart_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(cart_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(cart_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(cart_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/cart","pathname":"/cart","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: cart_namespaceObject })
        
        
    

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,4,97], () => (__webpack_exec__(2752)));
module.exports = __webpack_exports__;

})();