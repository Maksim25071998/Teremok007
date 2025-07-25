"use strict";
exports.id = 97;
exports.ids = [97];
exports.modules = {

/***/ 4097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/LanguageSwitcher.js


function LanguageSwitcher() {
    const router = (0,router_.useRouter)();
    const { locale , locales , pathname , query , asPath  } = router;
    const changeLanguage = (l)=>{
        router.push({
            pathname,
            query
        }, asPath, {
            locale: l
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: locales.map((l)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: ()=>changeLanguage(l),
                disabled: l === locale,
                className: `mx-1 px-2 py-1 rounded ${l === locale ? "bg-white text-green-600" : "bg-green-800 text-white"}`,
                children: l === "ua" ? "\uD83C\uDDFA\uD83C\uDDE6" : "\uD83C\uDDEC\uD83C\uDDE7"
            }, l))
    });
}

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Header.js







function Header() {
    const { user , logout  } = (0,external_react_.useContext)(_app.AuthContext);
    const { cart  } = (0,external_react_.useContext)(_app.CartContext);
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "bg-green-600 text-white p-4 flex justify-between items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    className: "font-bold text-xl",
                    children: "Теремок"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(LanguageSwitcher, {}),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/cart",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            children: [
                                t("cart"),
                                " (",
                                cart.reduce((acc, p)=>acc + p.qty, 0),
                                ")"
                            ]
                        })
                    }),
                    user ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: user.email
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: logout,
                                className: "ml-2 underline",
                                children: t("logout")
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/login",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            children: t("login")
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;