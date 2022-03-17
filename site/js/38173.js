(window.webpackJsonp_cj86gji4 = window.webpackJsonp_cj86gji4 || []).push([
    [0], {
        583: function(t, e, n) {
            t.exports = {
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px"
            }
        },
        584: function(t, e, n) {
            "use strict";
            n(13), n(24);
            var o, r = n(4),
                l = n(0),
                c = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                d = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                m = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.isRTL = !1, e
                    }
                    return c(e, t), e.prototype.created = function() {
                        this.isRTL = this.$store.getters.RTLGetter
                    }, e.prototype.callEvent = function(t) {
                        "" === this.href && t.preventDefault(), this.$emit("click", t)
                    }, d([Object(l.Prop)({
                        default: ""
                    })], e.prototype, "href", void 0), d([Object(l.Prop)({
                        default: "_self"
                    })], e.prototype, "target", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "needCallEvent", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "noHover", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "disabled", void 0), d([Object(l.Prop)()], e.prototype, "fontw", void 0), d([Object(l.Prop)({
                        default: "White"
                    })], e.prototype, "theme", void 0), d([Object(l.Prop)()], e.prototype, "className", void 0), d([Object(l.Prop)()], e.prototype, "color", void 0), e = d([Object(l.Component)({})], e)
                }(l.Vue),
                h = n(800),
                f = n(8);
            var component = Object(f.a)(m, (function() {
                var t, e, n, o, r, l, c = this,
                    d = c.$createElement,
                    m = c._self._c || d;
                return m("a", {
                    class: [(t = {}, t[c.$style.disabled] = c.disabled, t), (e = {}, e[c.$style.normal] = !c.disabled, e), (n = {}, n[c.$style.specificColor] = c.color, n), (o = {}, o[c.$style.noHover] = c.noHover, o), c.$style.link, c.$style[c.className]],
                    style: {
                        color: !!c.color && c.color
                    },
                    attrs: {
                        href: c.href && !c.disabled ? c.href : "#",
                        "data-theme": !c.color && c.theme,
                        target: c.target,
                        rel: "_blank" === c.target ? "noreferrer noopener" : ""
                    },
                    on: {
                        click: function(t) {
                            !c.disabled && c.needCallEvent && c.callEvent(t)
                        }
                    }
                }, [m("span", {
                    class: [c.$style.LinkText, (r = {}, r[c.$style.fontw300] = 300 === c.fontw, r), (l = {}, l[c.$style.fontw600] = 600 === c.fontw, l)]
                }, [c._t("default"), c._v(" "), m("svg", {
                    class: c.$style.arrowRightSVG,
                    style: [!1 === c.isRTL ? {} : {
                        transform: "rotateY(180deg)"
                    }],
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        fill: "none",
                        viewBox: "0 0 9 9",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [m("path", {
                    attrs: {
                        stroke: "#006ce1",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        d: "M3.375 1.406L6.581 4.5 3.375 7.594"
                    }
                })])], 2)])
            }), [], !1, (function(t) {
                this.$style = h.default.locals || h.default
            }), null, null);
            e.a = component.exports
        },
        585: function(t, e, n) {
            "use strict";
            n(13), n(24);
            var o, r = n(4),
                l = n(0),
                c = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                d = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                m = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return c(e, t), e.prototype.callEvent = function(t) {
                        "" === this.href && t.preventDefault(), this.$emit("click", t)
                    }, d([Object(l.Prop)({
                        default: ""
                    })], e.prototype, "href", void 0), d([Object(l.Prop)({
                        default: "_self"
                    })], e.prototype, "target", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "needCallEvent", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "disabled", void 0), d([Object(l.Prop)()], e.prototype, "fontw", void 0), d([Object(l.Prop)({
                        default: "Blue"
                    })], e.prototype, "theme", void 0), e = d([Object(l.Component)({})], e)
                }(l.Vue),
                h = n(863),
                f = n(8);
            var component = Object(f.a)(m, (function() {
                var t, e, n, o, r = this,
                    l = r.$createElement,
                    c = r._self._c || l;
                return c("a", {
                    class: [(t = {}, t[r.$style.disabled] = r.disabled, t), (e = {}, e[r.$style.normal] = !r.disabled, e), r.$style.btn],
                    attrs: {
                        href: r.href && !r.disabled ? r.href : "#",
                        "data-theme": r.theme,
                        target: r.target,
                        rel: "_blank" === r.target ? "noreferrer noopener" : ""
                    },
                    on: {
                        click: function(t) {
                            !r.disabled && r.needCallEvent && r.callEvent(t)
                        }
                    }
                }, [c("span", {
                    class: [r.$style.btnText, (n = {}, n[r.$style.fontw300] = 300 === r.fontw, n), (o = {}, o[r.$style.fontw600] = 600 === r.fontw, o)]
                }, [r._t("default")], 2)])
            }), [], !1, (function(t) {
                this.$style = h.default.locals || h.default
            }), null, null);
            e.a = component.exports
        },
        586: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNDAgNTQiPg0KICAgIDxyZWN0IHdpZHRoPSIzOSIgaGVpZ2h0PSI1MyIgeD0iLjUiIHk9Ii41IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii40IiBzdHJva2U9IiMxODE4MTgiIHJ4PSIzLjUiLz4NCiAgICA8cGF0aCBzdHJva2U9IiMxODE4MTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE1LjUgMTcuMDI1TDI1LjQ3NSAyNyAxNS41IDM2Ljk3NSIvPg0KPC9zdmc+DQo="
        },
        587: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA1NCI+DQogICAgPHJlY3Qgd2lkdGg9IjM5IiBoZWlnaHQ9IjUzIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjQiIHN0cm9rZT0iIzE4MTgxOCIgcng9IjMuNSIvPg0KICAgIDxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjQuNSAzNi45NzVMMTQuNTI1IDI3bDkuOTc1LTkuOTc1Ii8+DQo8L3N2Zz4NCg=="
        },
        594: function(t, e, n) {
            "use strict";
            n(61), n(13), n(24);
            var o, r = n(4),
                l = n(0),
                c = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                d = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                m = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.hover = !1, e.hoverTextColor = "white", e
                    }
                    return c(e, t), Object.defineProperty(e.prototype, "hexToRGB", {
                        get: function() {
                            var t = this.color,
                                e = 0,
                                g = 0,
                                b = 0;
                            return t && 0 === t.indexOf("#") ? (3 === (t = t.substr(t.indexOf("#") + 1)).length ? (e = parseInt(t.substr(0, 1) + t.substr(0, 1), 16), g = parseInt(t.substr(1, 1) + t.substr(1, 1), 16), b = parseInt(t.substr(2, 1) + t.substr(2, 1), 16)) : 6 === t.length && (e = parseInt(t.substr(0, 2), 16), g = parseInt(t.substr(2, 2), 16), b = parseInt(t.substr(4, 2), 16)), [e, g, b]) : []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.getSpecificHoverTextColor = function() {
                        if (this.hexToRGB && this.hexToRGB.length > 0) {
                            var t = Math.round((299 * this.hexToRGB[0] + 587 * this.hexToRGB[1] + 114 * this.hexToRGB[2]) / 1e3);
                            this.hoverTextColor = t > 200 ? "black" : "white"
                        }
                    }, e.prototype.callEvent = function(t) {
                        "" === this.href && t.preventDefault(), this.$emit("click", t)
                    }, d([Object(l.Prop)({
                        default: ""
                    })], e.prototype, "href", void 0), d([Object(l.Prop)({
                        default: "_self"
                    })], e.prototype, "target", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "needCallEvent", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "disabled", void 0), d([Object(l.Prop)()], e.prototype, "fontw", void 0), d([Object(l.Prop)({
                        default: "White"
                    })], e.prototype, "theme", void 0), d([Object(l.Prop)()], e.prototype, "color", void 0), d([Object(l.Prop)()], e.prototype, "className", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "isDownload", void 0), d([Object(l.Watch)("color", {
                        immediate: !0
                    })], e.prototype, "getSpecificHoverTextColor", null), e = d([Object(l.Component)({})], e)
                }(l.Vue),
                h = n(799),
                f = n(8);
            var component = Object(f.a)(m, (function() {
                var t, e, n, o, r, l = this,
                    c = l.$createElement,
                    d = l._self._c || c;
                return d("a", {
                    class: [(t = {}, t[l.$style.disabled] = l.disabled, t), (e = {}, e[l.$style.normal] = !l.disabled, e), (n = {}, n[l.$style.specificColor] = l.color, n), l.$style.btn, l.$style[l.className]],
                    style: {
                        color: !!l.color && l.color
                    },
                    attrs: {
                        href: l.href && !l.disabled ? l.href : "#",
                        "data-theme": !l.color && l.theme,
                        target: l.target,
                        rel: "_blank" === l.target ? "noreferrer noopener" : ""
                    },
                    on: {
                        mouseover: function(t) {
                            l.hover = !0
                        },
                        mouseleave: function(t) {
                            l.hover = !1
                        },
                        click: function(t) {
                            !l.disabled && l.needCallEvent && l.callEvent(t)
                        }
                    }
                }, [d("span", {
                    class: [l.$style.btnText, (o = {}, o[l.$style.fontw300] = 300 === l.fontw, o), (r = {}, r[l.$style.fontw600] = 600 === l.fontw, r)],
                    style: {
                        color: !!l.color && (l.hover ? l.hoverTextColor : l.color)
                    }
                }, [l._t("default")], 2), l._v(" "), l.isDownload ? d("svg", {
                    class: l.$style.arrowDownloadSVG,
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [d("path", {
                    attrs: {
                        stroke: "#F5F5F5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "1.2",
                        d: "M16.5 9L12 13.5 7.5 9"
                    }
                }), d("path", {
                    attrs: {
                        stroke: "#F5F5F5",
                        "stroke-linecap": "round",
                        "stroke-width": "1.2",
                        d: "M12 12.75V3"
                    }
                }), d("path", {
                    attrs: {
                        stroke: "#F5F5F5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1.2",
                        d: "M3.75 12.75v6h16.5v-6"
                    }
                })]) : l._e()])
            }), [], !1, (function(t) {
                this.$style = h.default.locals || h.default
            }), null, null);
            e.a = component.exports
        },
        607: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                wrapper: "PromotionBanner__wrapper__boR2j",
                icon: "PromotionBanner__icon__LGgKl",
                link: "PromotionBanner__link__1DWli",
                text: "PromotionBanner__text__1HGpW",
                blackColor: "PromotionBanner__blackColor__2AU_B"
            }
        },
        608: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                btn: "BorderButton__btn__1TkBO",
                normal: "BorderButton__normal__1JqS5",
                btnText: "BorderButton__btnText__co1Jf",
                fontw300: "BorderButton__fontw300__2nZBM",
                disabled: "BorderButton__disabled__1rmrW",
                fontw600: "BorderButton__fontw600__32TuX",
                specificColor: "BorderButton__specificColor__7wRTu",
                heroBanner: "BorderButton__heroBanner__1JzzG",
                arrowDownloadSVG: "BorderButton__arrowDownloadSVG__1VFiv"
            }
        },
        609: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                link: "GhostButton__link__xTS-3",
                normal: "GhostButton__normal__MPeDn",
                LinkText: "GhostButton__LinkText__1DiK4",
                fontw300: "GhostButton__fontw300__CmtBq",
                disabled: "GhostButton__disabled__269WV",
                fontw600: "GhostButton__fontw600__2LzcK",
                arrowRightSVG: "GhostButton__arrowRightSVG__eqY5j",
                specificColor: "GhostButton__specificColor__1m_6e",
                btn: "GhostButton__btn__3AOxn",
                btnText: "GhostButton__btnText__2id1e",
                noHover: "GhostButton__noHover__1Cp1H"
            }
        },
        613: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                link: "TextLink__link__2Xbkj",
                normal: "TextLink__normal__1TTQw",
                LinkText: "TextLink__LinkText__3SIPQ",
                fontw300: "TextLink__fontw300__1et-N",
                disabled: "TextLink__disabled__qeehh",
                fontw600: "TextLink__fontw600__1q2wE",
                enableArrow: "TextLink__enableArrow__30-YZ"
            }
        },
        618: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                imgDrp: "HeroBanner__imgDrp__1V5_X",
                imageCarousel: "HeroBanner__imageCarousel__36Rvp",
                inner: "HeroBanner__inner__1Ym3L",
                itemImg: "HeroBanner__itemImg__2GHNj",
                item: "HeroBanner__item__3nU6C",
                itemBackgroudImage: "HeroBanner__itemBackgroudImage__2lBz_",
                bannerInfo: "HeroBanner__bannerInfo__djQPV",
                prevDiv: "HeroBanner__prevDiv__1uS2Q",
                nextDiv: "HeroBanner__nextDiv__3NPN6",
                prev: "HeroBanner__prev__1Zio4",
                next: "HeroBanner__next__1CVoi",
                headerMargin: "HeroBanner__headerMargin__30p2_",
                promotionBannerMargin: "HeroBanner__promotionBannerMargin__3swBt",
                borderButtonSpace: "HeroBanner__borderButtonSpace__ziNbE",
                promotion: "HeroBanner__promotion__2kGGx",
                noItemImage: "HeroBanner__noItemImage__3fnYY",
                infoHead: "HeroBanner__infoHead__16Zhu",
                infoHeadImg: "HeroBanner__infoHeadImg__24Wyw",
                infoTag: "HeroBanner__infoTag__2jbKP",
                infoDesc: "HeroBanner__infoDesc__EVGSR",
                infoBtn: "HeroBanner__infoBtn__FQazy",
                disabled: "HeroBanner__disabled__3z3A4",
                microsoftFlagContainer: "HeroBanner__microsoftFlagContainer__2uQAU",
                microsoftFlagContent: "HeroBanner__microsoftFlagContent__pWQj1",
                imageCarouselHeroBanner: "HeroBanner__imageCarouselHeroBanner__3ELYr",
                subHerobanner: "HeroBanner__subHerobanner__2T1BQ",
                asusContainer: "HeroBanner__asusContainer__lrfF8",
                BannerItemTop: "HeroBanner__BannerItemTop__19Bty",
                BannerItemBottom: "HeroBanner__BannerItemBottom__1BdC2",
                BannerItemLeft: "HeroBanner__BannerItemLeft__3Z5bM",
                BannerItemRight: "HeroBanner__BannerItemRight__2E4nW",
                ghostButton: "HeroBanner__ghostButton__1wHb6",
                BannerItemCenter: "HeroBanner__BannerItemCenter__2Zl59",
                BannerItemNoitems: "HeroBanner__BannerItemNoitems__1Q4i_",
                indicator: "HeroBanner__indicator__1Gm1o",
                firstTiming: "HeroBanner__firstTiming__2nUpz",
                noLink: "HeroBanner__noLink__3Y9rl"
            }
        },
        620: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                imageCarousel: "ContentHub__imageCarousel__1Odv4",
                inner: "ContentHub__inner__trMnZ",
                itemImg: "ContentHub__itemImg__3U6TH",
                item: "ContentHub__item__iYT1p",
                prevDiv: "ContentHub__prevDiv__2cfMl",
                nextDiv: "ContentHub__nextDiv__36dBx",
                bannerInfo: "ContentHub__bannerInfo__3XNGh",
                promotion: "ContentHub__promotion___9KN_",
                contentHub: "ContentHub__contentHub__fBXRj",
                contentHubInner: "ContentHub__contentHubInner__3QQc8",
                contentHubItem: "ContentHub__contentHubItem__1YZ4v",
                contentHubItemImg: "ContentHub__contentHubItemImg__3V7d-",
                scenarioImg: "ContentHub__scenarioImg__11Wh9",
                scenarioContent: "ContentHub__scenarioContent__epC2V",
                contentTitle: "ContentHub__contentTitle__1b-IK",
                contentInfo: "ContentHub__contentInfo__A-qoS",
                indicator: "ContentHub__indicator__2VVtG"
            }
        },
        631: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA1NCI+DQogICAgPHJlY3Qgd2lkdGg9IjM5IiBoZWlnaHQ9IjUzIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjQiIHN0cm9rZT0iI2RjZGNkYyIgcng9IjMuNSIvPg0KICAgIDxwYXRoIHN0cm9rZT0iI2RjZGNkYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjQuNSAzNi45NzVMMTQuNTI1IDI3bDkuOTc1LTkuOTc1Ii8+DQo8L3N2Zz4NCg=="
        },
        632: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNDAgNTQiPg0KICAgIDxyZWN0IHdpZHRoPSIzOSIgaGVpZ2h0PSI1MyIgeD0iLjUiIHk9Ii41IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii40IiBzdHJva2U9IiNkY2RjZGMiIHJ4PSIzLjUiLz4NCiAgICA8cGF0aCBzdHJva2U9IiNkY2RjZGMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE1LjUgMTcuMDI1TDI1LjQ3NSAyNyAxNS41IDM2Ljk3NSIvPg0KPC9zdmc+DQo="
        },
        650: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                btn: "SolidButton__btn__1NmTw",
                normal: "SolidButton__normal__3XdQd",
                btnText: "SolidButton__btnText__GZc-q",
                fontw300: "SolidButton__fontw300__3uWEc",
                disabled: "SolidButton__disabled__3p51u",
                fontw600: "SolidButton__fontw600__20V3O"
            }
        },
        670: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                slogan: "TextBanner__slogan__2HWjP",
                title: "TextBanner__title__1O57y",
                textBannerWrapper: "TextBanner__textBannerWrapper__3SdCl",
                inner: "TextBanner__inner__MpOd4",
                textBannerBackgroundImage: "TextBanner__textBannerBackgroundImage__3xmYs",
                description: "TextBanner__description__1Ybgn"
            }
        },
        754: function(t, e, n) {
            "use strict";
            n(32), n(588), n(13), n(24), n(33), n(65);
            var o, r = n(4),
                l = n(0),
                c = n(18),
                d = n.n(c),
                m = n(594),
                h = n(584),
                f = n(756),
                _ = n(765),
                I = n.n(_),
                y = n(590),
                v = n(14),
                B = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                x = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                w = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.currentImageIndex = 1, e.widthData = 0, e.itemWidth = 0, e.itemHeight = 0, e.totalItem = 0, e.totalSlide = 0, e.totalSlideMax = 6, e.pagesize = 0, e.pagesizeDefault = 0, e.movesize = 1, e.autoPlay = !0, e.percentageHeight = !1, e.loop = !0, e.firstTiming = !0, e.LayoutType = "", e.backgroundSize = 2560, e.heroBannerResult = [], e.hero2bannerResult = [{
                            Banners: [],
                            Layout: ""
                        }], e.hero2bannerData = [], e.heroBannerData = [], e.rwdState = "", e.autoPlayInterval = null, e.fadeInAnimation = !1, e.fontFamilyRegular = I.a.fontFamilyRegular, e.fontFamilyBold = I.a.fontFamilyBold, e.isRTL = !1, e
                    }
                    return B(e, t), e.prototype.created = function() {
                        this.getWebsiteCode({
                            route: this.$route
                        }), this.isRTL = this.$store.getters.RTLGetter
                    }, e.prototype.mounted = function() {
                        var t = this,
                            element = this.$refs.image_carousel;
                        this.widthData = element.offsetWidth, this.fadeInAnimation || this.$nextTick((function() {
                            t.fadeInAnimation = !0, t.bindInterval(), setTimeout((function() {
                                t.firstTiming = !1
                            }), 3e3)
                        })), this.$nextTick((function() {
                            t.resetCarousel()
                        }))
                    }, e.prototype.setHeroBannerToData = function() {
                        var t = this;
                        if (!1 === this.isHero2banner && this.heroBannerGetter && (this.heroBannerResult = d()(this.heroBannerGetter), this.heroBannerResult && (this.totalSlide = Math.ceil(this.heroBannerResult.length / this.movesize), this.totalSlide > this.totalSlideMax && (this.totalSlide = this.totalSlideMax), this.reSetData()), this.heroBannerData && 0 !== this.heroBannerData.length)) {
                            var e = [];
                            this.heroBannerData.length > 0 && this.heroBannerData.forEach((function(element, n) {
                                e.push({
                                    id: element.DesktopItems[0].BackgroudImage["1x"] || "",
                                    name: "" !== element.BannerName ? element.BannerName : element.DesktopItems[0].BackgroudImage["1x"] || "",
                                    position: t.gaPromoViewName + "_" + (n + 1)
                                })
                            })), this.gaDataLayerPush({
                                event: "promotionView",
                                ecommerce: {
                                    promoView: {
                                        promotions: e
                                    }
                                }
                            })
                        }
                    }, e.prototype.setVideoBannerToData = function() {
                        var t = this;
                        if (this.isHero2banner && this.videoBannerGetter && this.hero2bannerResult[0].Banners && (this.hero2bannerData = [d()(this.videoBannerGetter)], this.hero2bannerResult[0].Banners[0] = this.hero2bannerData[0].Banners.Banners, this.hero2bannerResult && (this.heroBannerResult = this.hero2bannerResult, this.totalSlide = Math.ceil(this.hero2bannerResult.length / this.movesize), this.totalSlide > this.totalSlideMax && (this.totalSlide = this.totalSlideMax)), this.heroBannerResult = this.hero2bannerResult, this.reSetData(), this.heroBannerData && 0 !== this.heroBannerData.length)) {
                            var e = [];
                            this.heroBannerData.length > 0 && this.heroBannerData.forEach((function(element, n) {
                                e.push({
                                    id: element.DesktopItems[0].BackgroudImage["1x"] || "",
                                    name: "" !== element.BannerName ? element.BannerName : element.DesktopItems[0].BackgroudImage["1x"] || "",
                                    position: t.gaPromoViewName + "_" + (n + 1)
                                })
                            })), this.gaDataLayerPush({
                                event: "promotionView",
                                ecommerce: {
                                    promoView: {
                                        promotions: e
                                    }
                                }
                            })
                        }
                    }, e.prototype.reloadSource = function() {
                        this.rwdWidth >= 1279 ? this.rwdState = "desktop" : this.rwdWidth > 731 && this.rwdWidth < 1280 ? this.rwdState = "tablet" : this.rwdState = "mobile", this.resetCarousel()
                    }, e.prototype.reloadState = function() {
                        this.reSetData()
                    }, e.prototype.judgeLayoutType = function() {
                        this.LayoutType = this.LayoutTypeGetter
                    }, e.prototype.checkSwipe = function(t) {
                        switch (t) {
                            case "left":
                                this.isRTL ? this.prevImg() : this.nextImg();
                                break;
                            case "right":
                                this.isRTL ? this.nextImg() : this.prevImg()
                        }
                    }, e.prototype.resetCarousel = function() {
                        var element = this.$refs.image_carousel;
                        element && element.hasChildNodes() && (this.widthData = element.childNodes[0].offsetWidth), this.widthData = element.offsetWidth, this.itemWidth = this.widthData, this.rwdWidth >= 1280 ? (this.rwdState = "desktop", this.itemHeight = 777, this.backgroundSize = 2560, this.isHero2banner && (this.itemHeight = 692)) : this.rwdWidth > 731 && this.rwdWidth < 1280 ? (this.rwdState = "tablet", this.itemHeight = 698, this.backgroundSize = 1280, this.isHero2banner && (this.itemHeight = 650)) : (this.rwdState = "mobile", this.itemHeight = 548, this.backgroundSize = 730, this.isHero2banner && (this.itemHeight = 500))
                    }, e.prototype.listItemStyle = function() {
                        var style = {};
                        return style.width = this.widthData + "px", style.height = this.itemHeight + "px", style
                    }, e.prototype.reSetData = function() {
                        if (this.heroBannerResult) {
                            for (var t in this.heroBannerResult) this.heroBannerResult[t].Banners && (this.heroBannerData[t] = this.heroBannerResult[t].Banners[0], this.rwdWidth >= 1280 ? this.heroBannerData[t].item = this.heroBannerResult[t].Banners[0].DesktopItems[0] : this.rwdWidth > 731 && this.rwdWidth < 1280 ? this.heroBannerData[t].item = this.heroBannerResult[t].Banners[0].TabletItems[0] : this.heroBannerData[t].item = this.heroBannerResult[t].Banners[0].MobileItems[0], "" === this.heroBannerData[t].Link ? this.heroBannerData[t].defaultLink = "" : this.heroBannerData[t].defaultLink = this.heroBannerData[t].Link);
                            this.heroBannerData.splice(6)
                        }
                    }, e.prototype.setImg = function(i) {
                        this.currentImageIndex = i, this.restartInterval()
                    }, e.prototype.nextImg = function() {
                        this.currentImageIndex++, this.currentImageIndex > this.totalSlide && (!0 === this.loop ? this.currentImageIndex = 1 : this.currentImageIndex = this.totalSlide), this.restartInterval()
                    }, e.prototype.prevImg = function() {
                        this.currentImageIndex--, this.currentImageIndex <= 0 && (!0 === this.loop ? this.currentImageIndex = this.totalSlide : this.currentImageIndex = 1), this.restartInterval()
                    }, e.prototype.restartInterval = function() {
                        this.firstTiming = !1, this.autoPlay && this.autoPlayInterval && clearInterval(this.autoPlayInterval), this.bindInterval()
                    }, e.prototype.bindInterval = function() {
                        var t = this;
                        this.autoPlayInterval = setInterval((function() {
                            t.nextImg()
                        }), 5e3)
                    }, e.prototype.stopInterval = function() {
                        this.autoPlay && this.autoPlayInterval && clearInterval(this.autoPlayInterval)
                    }, e.prototype.redirect = function(t) {
                        t && (window.location.href = t)
                    }, x([Object(l.Getter)("heroBannerGetter")], e.prototype, "heroBannerGetter", void 0), x([Object(l.Getter)("videoBannerGetter")], e.prototype, "videoBannerGetter", void 0), x([Object(l.Getter)("getLayoutType")], e.prototype, "LayoutTypeGetter", void 0), x([Object(l.Getter)("heroBannerAriaLabelGetter")], e.prototype, "heroBannerAriaLabelGetter", void 0), x([Object(l.Action)("getWebsiteCode")], e.prototype, "getWebsiteCode", void 0), x([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "isHero2banner", void 0), x([Object(l.Prop)({
                        default: ""
                    })], e.prototype, "headerMargin", void 0), x([Object(l.Prop)({
                        default: ""
                    })], e.prototype, "promotionBannerMargin", void 0), x([Object(l.Prop)()], e.prototype, "rwdWidth", void 0), x([Object(l.Prop)({
                        default: ""
                    })], e.prototype, "gaPromoViewName", void 0), x([Object(l.Watch)("heroBannerGetter", {
                        immediate: !0
                    })], e.prototype, "setHeroBannerToData", null), x([Object(l.Watch)("videoBannerGetter", {
                        immediate: !0
                    })], e.prototype, "setVideoBannerToData", null), x([Object(l.Watch)("rwdWidth")], e.prototype, "reloadSource", null), x([Object(l.Watch)("rwdState", {
                        immediate: !0
                    })], e.prototype, "reloadState", null), x([Object(l.Watch)("LayoutTypeGetter", {
                        immediate: !0
                    })], e.prototype, "judgeLayoutType", null), e = x([Object(l.Component)({
                        components: {
                            BorderButton: m.a,
                            GhostButton: h.a,
                            PromotionFlag: f.a,
                            Indicator: y.a
                        }
                    })], e)
                }(Object(l.mixins)(v.a)),
                k = n(809),
                T = n(8);
            var component = Object(T.a)(w, (function() {
                var t, e, o, r, l = this,
                    c = l.$createElement,
                    d = l._self._c || c;
                return d("v-touch", {
                    attrs: {
                        enabled: {
                            swipeleft: !0,
                            swiperight: !0
                        }
                    },
                    on: {
                        swipeleft: function(t) {
                            return l.checkSwipe("left")
                        },
                        swiperight: function(t) {
                            return l.checkSwipe("right")
                        }
                    }
                }, [l.heroBannerGetter && l.heroBannerData && l.heroBannerData.length > 0 ? d("div", {
                    ref: "image_carousel",
                    class: [l.$style.imageCarousel, l.$style.imageCarouselHeroBanner, (t = {}, t[l.$style.headerMargin] = 1 === l.headerMargin, t), (e = {}, e[l.$style.promotionBannerMargin] = 1 === l.promotionBannerMargin, e), (o = {}, o[l.$style.subHerobanner] = !0 === l.isHero2banner, o)]
                }, [d("div", {
                    ref: "inner",
                    class: [l.$style.inner, (r = {}, r[l.$style.firstTiming] = !0 === l.firstTiming, r)],
                    style: [l.isRTL ? {
                        right: -100 * (l.currentImageIndex - 1) + "%"
                    } : {
                        left: -100 * (l.currentImageIndex - 1) + "%"
                    }, {
                        width: 100 * l.totalSlide + "%"
                    }]
                }, l._l(l.heroBannerData, (function(t, e) {
                    var n, o, r, c, m, h, f, _, I, y, v;
                    return d("div", {
                        key: e,
                        ref: "itemBox",
                        refInFor: !0,
                        class: l.$style.item
                    }, [t && t.DesktopItems && t.DesktopItems[0].BackgroudImage && t.TabletItems[0].BackgroudImage && t.MobileItems[0].BackgroudImage ? d("a", {
                        class: (n = {}, n[l.$style.noLink] = "" === t.Link, n),
                        attrs: {
                            href: !!t.Link && t.Link,
                            target: !(!t.LinkTarget || "" === t.Link) && t.LinkTarget,
                            rel: "_blank" === t.LinkTarget ? "noreferrer noopener" : ""
                        },
                        on: {
                            click: function(n) {
                                l.gaDataLayerPush({
                                    event: "promotionClick",
                                    ecommerce: {
                                        promoClick: {
                                            promotions: [{
                                                id: t.DesktopItems[0].BackgroudImage["1x"],
                                                name: "" !== t.BannerName ? t.BannerName : t.DesktopItems[0].BackgroudImage["1x"],
                                                position: l.gaPromoViewName + "_" + (e + 1)
                                            }]
                                        }
                                    }
                                })
                            }
                        }
                    }, [d("picture", [void 0 === t.UsingWebp || t.UsingWebp ? d("source", {
                        attrs: {
                            type: "image/webp",
                            media: "(min-width: 1280px)",
                            srcset: t.DesktopItems[0].BackgroudImage["1x"] + "?webp  1x, " + t.DesktopItems[0].BackgroudImage["2x"] + "?webp 2x"
                        }
                    }) : l._e(), l._v(" "), d("source", {
                        attrs: {
                            media: "(min-width: 1280px)",
                            srcset: t.DesktopItems[0].BackgroudImage["1x"] + " 1x, " + t.DesktopItems[0].BackgroudImage["2x"] + " 2x"
                        }
                    }), l._v(" "), void 0 === t.UsingWebp || t.UsingWebp ? d("source", {
                        attrs: {
                            type: "image/webp",
                            media: "(min-width: 731px) and (max-width:1279px)",
                            srcset: t.TabletItems[0].BackgroudImage["1x"] + "?webp 1x, " + t.TabletItems[0].BackgroudImage["2x"] + "?webp 2x"
                        }
                    }) : l._e(), l._v(" "), d("source", {
                        attrs: {
                            media: "(min-width: 731px) and (max-width:1279px)",
                            srcset: t.TabletItems[0].BackgroudImage["1x"] + " 1x, " + t.TabletItems[0].BackgroudImage["2x"] + " 2x"
                        }
                    }), l._v(" "), void 0 === t.UsingWebp || t.UsingWebp ? d("source", {
                        attrs: {
                            type: "image/webp",
                            media: "(max-width: 730px)",
                            srcset: t.MobileItems[0].BackgroudImage["1x"] + "?webp 1x, " + t.MobileItems[0].BackgroudImage["2x"] + "?webp 2x"
                        }
                    }) : l._e(), l._v(" "), d("source", {
                        attrs: {
                            media: "(max-width: 730px)",
                            srcset: t.MobileItems[0].BackgroudImage["1x"] + " 1x, " + t.MobileItems[0].BackgroudImage["2x"] + " 2x"
                        }
                    }), l._v(" "), d("img", {
                        class: l.$style.itemBackgroudImage,
                        attrs: {
                            loading: "lazy",
                            src: "" + t.DesktopItems[0].BackgroudImage["1x"],
                            alt: t.Alt
                        }
                    })])]) : l._e(), l._v(" "), t && t.item && void 0 !== t.item ? d("div", {
                        class: [l.$style.bannerInfo, (o = {}, o[l.$style["BannerItem" + t.item.Position]] = !0 == (!1 === l.isRTL || !0 === l.isRTL && "Left" !== t.item.Position && "Right" !== t.item.Position), o), (r = {}, r[l.$style.BannerItemLeft] = !0 == (!0 === l.isRTL && "Right" === t.item.Position), r), (c = {}, c[l.$style.BannerItemRight] = !0 == (!0 === l.isRTL && "Left" === t.item.Position), c)]
                    }, ["1" === t.item.title.Show ? d("div", {
                        class: [(m = {}, m[l.$style.infoHead] = "text" === t.item.title.Type, m), (h = {}, h[l.$style.infoHeadImg] = "pic" === t.item.title.Type, h)]
                    }, [d("a", {
                        class: (f = {}, f[l.$style.noLink] = "" === t.item.title.Link && "" === t.defaultLink, f),
                        style: {
                            color: t.item.title.Color
                        },
                        attrs: {
                            href: t.item.title.Link ? t.item.title.Link : t.defaultLink
                        }
                    }, ["pic" === t.item.title.Type ? d("picture", [void 0 === t.UsingWebp || t.UsingWebp ? d("source", {
                        attrs: {
                            type: "image/webp",
                            media: "only screen and (-moz-min-device-pixel-ratio: 1.25), only screen and (-o-min-device-pixel-ratio: 1.25/1), only screen and (-webkit-min-device-pixel-ratio: 1.25), only screen and (min-device-pixel-ratio: 1.25)",
                            srcset: t.item.title.Content["1x"] + "?webp  1x, " + t.item.title.Content["2x"] + "?webp  2x"
                        }
                    }) : l._e(), l._v(" "), d("source", {
                        attrs: {
                            media: "only screen and (-moz-min-device-pixel-ratio: 1.25), only screen and (-o-min-device-pixel-ratio: 1.25/1), only screen and (-webkit-min-device-pixel-ratio: 1.25), only screen and (min-device-pixel-ratio: 1.25)",
                            srcset: t.item.title.Content["1x"] + " 1x, " + t.item.title.Content["2x"] + " 2x"
                        }
                    }), l._v(" "), d("img", {
                        attrs: {
                            loading: "lazy",
                            src: "" + t.item.title.Content["1x"],
                            alt: t.Alt
                        }
                    })]) : l._e(), l._v(" "), "text" === t.item.title.Type ? d("span", {
                        style: [{
                            "font-family": t.item.title.FontFamily || l.fontFamilyBold
                        }, t.item.title.FontSize ? {
                            "font-size": t.item.title.FontSize
                        } : {}, {
                            "line-height": "1.16em"
                        }],
                        domProps: {
                            innerHTML: l._s(t.item.title.Content.Text)
                        }
                    }) : l._e()])]) : l._e(), l._v(" "), "1" === t.item.slogan.Show ? d("div", {
                        class: [l.$style.infoTag]
                    }, [d("a", {
                        class: (_ = {}, _[l.$style.noLink] = "" === t.item.slogan.Link && "" === t.defaultLink, _),
                        style: {
                            color: t.item.slogan.Color
                        },
                        attrs: {
                            href: t.item.slogan.Link ? t.item.slogan.Link : t.defaultLink
                        }
                    }, ["pic" === t.item.slogan.Type ? d("img", {
                        attrs: {
                            src: t.item.slogan.Content,
                            alt: t.item.title.Content.Text
                        }
                    }) : l._e(), l._v(" "), "text" === t.item.slogan.Type ? d("span", {
                        style: "font-family: " + (t.item.slogan.FontFamily || l.fontFamilyRegular),
                        domProps: {
                            innerHTML: l._s(t.item.slogan.Content)
                        }
                    }) : l._e()])]) : l._e(), l._v(" "), t.item.price && "1" === t.item.price.Show ? d("div", {
                        class: [l.$style.infoDesc]
                    }, [d("a", {
                        class: (I = {}, I[l.$style.noLink] = "" === t.item.price.Link && "" === t.defaultLink, I),
                        style: {
                            color: t.item.price.Color
                        },
                        attrs: {
                            href: t.item.price.Link ? t.item.price.Link : t.defaultLink
                        }
                    }, ["pic" === t.item.price.Type ? d("img", {
                        attrs: {
                            src: t.item.price.Content,
                            alt: t.item.title.Content.Text
                        }
                    }) : l._e(), l._v(" "), "text" === t.item.price.Type ? d("span", {
                        style: "font-family: " + (t.item.price.FontFamily || l.fontFamilyRegular),
                        domProps: {
                            innerHTML: l._s(t.item.price.Content)
                        }
                    }) : l._e()])]) : l._e(), l._v(" "), d("div", {
                        class: [l.$style.infoBtn, (y = {}, y[l.$style.borderButtonSpace] = "1" === t.item.buy.Show && "1" === t.item.learnmore.Show, y)]
                    }, ["1" === t.item.buy.Show ? d("border-button", {
                        class: [l.$style.borderButton],
                        attrs: {
                            theme: t.ButtonTheme,
                            color: t.item.buy.Color,
                            className: "heroBanner",
                            href: t.item.buy.Link ? t.item.buy.Link : t.defaultLink,
                            needCallEvent: !0
                        },
                        nativeOn: {
                            click: function(n) {
                                l.gaDataLayerPush({
                                    event: "data_layer_event",
                                    event_category_DL: "buttons",
                                    event_action_DL: "clicked",
                                    event_label_DL: l.gaPromoViewName + "_" + (e + 1) + "/buyButton-" + t.item.buy.Content + "/" + t.BannerName,
                                    event_value_DL: "0"
                                }), l.gaHmtPush(["_trackEvent", "buttons", "clicked", l.gaPromoViewName + "_" + (e + 1) + "/buyButton-" + t.item.buy.Content + "/" + t.BannerName])
                            }
                        }
                    }, [l._v("\n              " + l._s(t.item.buy.Content) + "\n            ")]) : l._e(), l._v(" "), "1" === t.item.learnmore.Show ? d("ghost-button", {
                        class: l.$style.ghostButton,
                        attrs: {
                            theme: t.ButtonTheme,
                            className: "herobanner",
                            color: t.item.learnmore.Color,
                            href: t.item.learnmore.Link ? t.item.learnmore.Link : t.defaultLink,
                            needCallEvent: !0
                        },
                        nativeOn: {
                            click: function(n) {
                                l.gaDataLayerPush({
                                    event: "data_layer_event",
                                    event_category_DL: "buttons",
                                    event_action_DL: "clicked",
                                    event_label_DL: l.gaPromoViewName + "_" + (e + 1) + "/LearnMore-" + t.item.learnmore.Content + "/" + t.BannerName,
                                    event_value_DL: "0"
                                }), l.gaHmtPush(["_trackEvent", "buttons", "clicked", l.gaPromoViewName + "_" + (e + 1) + "/LearnMore-" + t.item.learnmore.Content + "/" + t.BannerName])
                            }
                        }
                    }, [l._v("\n              " + l._s(t.item.learnmore.Content) + "\n            ")]) : l._e()], 1)]) : l._e(), l._v(" "), d("div", {
                        class: l.$style.promotionFlagContainer
                    }, [t && "1" === t.PromotionFlag ? d("promotion-flag", {
                        attrs: {
                            "rwd-state": l.rwdState,
                            title: t.PromotionTitle,
                            PromoFontColorStart: t.PromoFontColorStart,
                            PromoFontColorEnd: t.PromoFontColorEnd,
                            headerMargin: l.headerMargin,
                            promotionBannerMargin: l.promotionBannerMargin
                        }
                    }, [l._v("\n            " + l._s(t.PromotionText) + "\n          ")]) : l._e()], 1), l._v(" "), t && "1" === t.MDAFlag ? d("div", {
                        class: [l.$style.microsoftFlagContainer, (v = {}, v[l.$style.tabletHeader] = l.rwdWidth >= 1023 && "tablet" === l.LayoutType, v)]
                    }, [t.MDATagLine && t.MDATagLine.ImageLink ? d("div", [d("a", {
                        attrs: {
                            href: t.MDATagLine.Link
                        }
                    }, [void 0 === t.MDATagLine.ImageLink_2x ? d("img", {
                        attrs: {
                            src: t.MDATagLine.ImageLink,
                            alt: t.MDATagLine.Text
                        }
                    }) : d("img", {
                        attrs: {
                            src: t.MDATagLine.ImageLink,
                            srcset: t.MDATagLine.ImageLink + " 1x, " + t.MDATagLine.ImageLink_2x + " 2x",
                            alt: t.MDATagLine.Text
                        }
                    })])]) : l._e()]) : l._e()])
                })), 0), l._v(" "), d("Indicator", {
                    class: l.$style.indicator,
                    attrs: {
                        timerBtn: !0,
                        autoPlay: l.autoPlay,
                        rwdWidth: l.rwdWidth,
                        currentSlide: l.currentImageIndex,
                        totalSlide: l.totalSlide,
                        typeStyle: "herobanner"
                    },
                    on: {
                        slideToEvent: l.setImg
                    }
                }), l._v(" "), l.rwdWidth >= 1280 ? d("div", {
                    class: l.$style.prevDiv
                }) : l._e(), l._v(" "), (l.currentImageIndex > 1 || l.loop) && l.totalSlide > 1 && l.rwdWidth >= 1280 ? d("div", {
                    ref: "prev",
                    class: l.$style.prev,
                    attrs: {
                        "aria-label": l.heroBannerAriaLabelGetter.PreviousSlide
                    }
                }, [d("img", {
                    attrs: {
                        src: !1 === l.isRTL ? n(587) : n(586),
                        alt: !1 === l.isRTL ? "previous image" : "next image"
                    },
                    on: {
                        click: l.prevImg
                    }
                })]) : l._e(), l._v(" "), l.rwdWidth >= 1280 ? d("div", {
                    class: l.$style.nextDiv
                }) : l._e(), l._v(" "), (l.currentImageIndex !== l.totalSlide || l.loop) && l.totalSlide > 1 && l.rwdWidth >= 1280 ? d("div", {
                    ref: "next",
                    class: l.$style.next,
                    attrs: {
                        "aria-label": l.heroBannerAriaLabelGetter.NextSlide
                    }
                }, [d("img", {
                    attrs: {
                        src: !1 === l.isRTL ? n(586) : n(587),
                        alt: !1 === l.isRTL ? "next image" : "previous image"
                    },
                    on: {
                        click: l.nextImg
                    }
                })]) : l._e()], 1) : l._e()])
            }), [], !1, (function(t) {
                this.$style = k.default.locals || k.default
            }), null, null);
            e.a = component.exports
        },
        755: function(t, e, n) {
            "use strict";
            n(32), n(53), n(13), n(24), n(33);
            var o, r = n(4),
                l = n(0),
                c = n(18),
                d = n.n(c),
                m = n(757),
                h = n(598),
                f = n(590),
                _ = n(14),
                I = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                y = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                v = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.currentImageIndex = 1, e.widthData = 0, e.widthIndicator = 0, e.paddingIndicator = 30, e.itemWidth = 0, e.itemHeight = 0, e.carouselHeight = 0, e.carouselInnerHeight = 0, e.totalItem = 0, e.totalSlide = 1, e.pagesize = 3, e.movesize = 1, e.moveMaxIndex = 0, e.moveLeft = 0, e.moveLeftIndicator = 0, e.loop = !1, e.rwdState = "", e.contentHubResult = [], e.propVideoUrl = "", e.isRTL = !0, e
                    }
                    return I(e, t), e.prototype.created = function() {
                        this.isRTL = this.$store.getters.RTLGetter
                    }, e.prototype.mounted = function() {
                        var element = this.$refs.image_carousel;
                        this.widthData = element.offsetWidth;
                        var t = this.$refs.indicator;
                        this.widthIndicator = t.offsetWidth - 2 * this.paddingIndicator, this.itemWidth = this.widthData / 4, this.itemHeight = .625 * this.itemWidth, this.rwdWidth >= 1200 ? this.rwdState = "desktop" : this.rwdWidth > 731 && this.rwdWidth < 1200 ? this.rwdState = "tablet" : this.rwdState = "mobile", this.resetCarousel(), this.resetTotalSlide()
                    }, e.prototype.setContentHubToData = function() {
                        var t = this;
                        this.contentHubResult = d()(this.contentHubGetter), this.totalItem = this.contentHubResult ? this.contentHubResult.length : 0, this.moveMaxIndex = Math.ceil((this.totalItem - 1) / 2) + 2, this.rwdWidth >= 1280 ? this.totalSlide = Math.ceil((this.totalItem - 5) / 8) + 1 : (this.totalSlide = this.totalItem, this.moveMaxIndex = this.totalItem), this.totalItem > 0 && this.$nextTick((function() {
                            t.resetCarousel();
                            var e = Array.prototype.slice.call(document.querySelectorAll(".blockbackground"));
                            if (window.IntersectionObserver) {
                                var n = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        t.isIntersecting && (t.target.classList.remove("blockbackground"), n.unobserve(t.target))
                                    }))
                                }));
                                e.forEach((function(t) {
                                    return n.observe(t)
                                }))
                            } else e.forEach((function(t) {
                                return t.classList.remove("blockbackground")
                            }))
                        }))
                    }, e.prototype.reloadSource = function() {
                        this.rwdWidth >= 1280 ? this.rwdState = "desktop" : this.rwdWidth > 731 && this.rwdWidth < 1280 ? this.rwdState = "tablet" : this.rwdState = "mobile", this.currentImageIndex = 1, this.resetCarousel()
                    }, e.prototype.listItemStyle = function(i, t) {
                        var style = {};
                        return style.height = this.itemHeight + "px", style.width = this.itemWidth + "px", this.rwdWidth >= 1280 && 0 === i && (style.height = 2 * this.itemHeight + "px", style.width = 2 * this.itemWidth + "px"), style
                    }, e.prototype.setImg = function(i) {
                        this.currentImageIndex = i, this.resetCarousel()
                    }, e.prototype.nextImg = function() {
                        this.currentImageIndex++, this.currentImageIndex > this.totalSlide && (!0 === this.loop ? this.currentImageIndex = 1 : this.currentImageIndex = this.totalSlide), this.resetCarousel()
                    }, e.prototype.prevImg = function() {
                        this.currentImageIndex--, this.currentImageIndex <= 0 && (!0 === this.loop ? this.currentImageIndex = this.totalSlide : this.currentImageIndex = 1), this.resetCarousel()
                    }, e.prototype.resetCarousel = function() {
                        var element = this.$refs.image_carousel;
                        this.widthData = element.offsetWidth;
                        var t = this.$refs.indicator;
                        this.widthIndicator = t.offsetWidth - 2 * this.paddingIndicator, this.moveMaxIndex = Math.ceil((this.totalItem - 1) / 2) + 2, this.rwdWidth > 1279 ? (this.pagesize = 4, this.movesize = 4) : (this.pagesize = 1, this.movesize = 1, this.moveMaxIndex = this.totalItem), this.itemWidth = this.widthData / this.pagesize, this.rwdWidth > 731 ? this.itemHeight = .625 * this.itemWidth : this.itemHeight = 457, this.resetTotalSlide()
                    }, e.prototype.resetTotalSlide = function() {
                        this.rwdWidth > 1279 ? this.totalSlide = Math.ceil((this.totalItem - 5) / 8) + 1 : this.totalSlide = this.totalItem, this.itemWidth = this.widthData / this.pagesize, this.rwdWidth > 731 ? this.itemHeight = .625 * this.itemWidth : this.itemHeight = 457, this.rwdWidth >= 1280 ? this.carouselHeight = 2 * this.itemHeight : this.carouselHeight = this.itemHeight, this.carouselInnerHeight = this.carouselHeight + 70, 1 === this.currentImageIndex ? (this.moveLeft = 0, this.moveLeftIndicator = 0) : this.moveMaxIndex - (this.currentImageIndex - 1) * this.pagesize > this.pagesize ? this.moveLeft = (this.currentImageIndex - 1) * this.pagesize * this.itemWidth : this.moveLeft = (this.moveMaxIndex - this.pagesize) * this.itemWidth, 1 === this.currentImageIndex ? this.moveLeftIndicator = this.paddingIndicator : this.moveLeftIndicator = (this.currentImageIndex - 1) * (this.widthIndicator / this.totalSlide) + this.paddingIndicator
                    }, e.prototype.LinkTrans = function(t, e) {
                        "2" === t ? this.$refs.lightbox.LinkTransChild(e) : window.open(e, "_blank")
                    }, y([Object(l.Getter)("contentHubGetter")], e.prototype, "contentHubGetter", void 0), y([Object(l.Prop)()], e.prototype, "rwdWidth", void 0), y([Object(l.Watch)("contentHubGetter")], e.prototype, "setContentHubToData", null), y([Object(l.Watch)("rwdWidth")], e.prototype, "reloadSource", null), e = y([Object(l.Component)({
                        components: {
                            LightboxYouTube: m.a,
                            CarouselArrows: h.a,
                            Indicator: f.a
                        }
                    })], e)
                }(Object(l.mixins)(_.a)),
                B = n(811),
                x = n(8);
            var component = Object(x.a)(v, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("v-touch", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: void 0 !== t.contentHubResult && t.contentHubResult && t.contentHubResult.length > 0,
                        expression: "contentHubResult !== undefined && contentHubResult && contentHubResult.length > 0"
                    }],
                    attrs: {
                        enabled: {
                            swipeleft: !0,
                            swiperight: !0
                        }
                    },
                    on: {
                        swipeleft: function(e) {
                            t.rwdWidth < 1280 && t.nextImg()
                        },
                        swiperight: function(e) {
                            t.rwdWidth < 1280 && t.prevImg()
                        }
                    }
                }, [n("div", {
                    ref: "image_carousel",
                    class: [t.$style.imageCarousel, t.$style.contentHub],
                    style: {
                        height: t.carouselHeight + "px"
                    }
                }, [n("div", {
                    ref: "inner",
                    class: t.$style.contentHubInner,
                    style: [{
                        height: t.carouselInnerHeight + "px"
                    }, (t.isRTL, {
                        left: -t.moveLeft + "px"
                    })]
                }, [t._l(t.contentHubResult, (function(e, o) {
                    return [n("div", {
                        key: o,
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: function(n) {
                                t.gaDataLayerPush({
                                    event: "data_layer_event",
                                    event_category_DL: "internal-links",
                                    event_action_DL: "clicked",
                                    event_label_DL: "content_hub/" + e.Title,
                                    event_value_DL: "0"
                                }), t.gaHmtPush(["_trackEvent", "internal-links", "clicked", "content_hub/" + e.Title]), t.LinkTrans(e.Type, e.Link)
                            }
                        }
                    }, [n("div", {
                        key: o,
                        class: t.$style.contentHubItem,
                        style: t.listItemStyle(o, e.ImgUrl)
                    }, [e.ImgUrl ? n("img", {
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            loading: "lazy",
                            src: e.ImgUrl.pc,
                            alt: e.Title
                        }
                    }) : t._e(), t._v(" "), e.ImgUrl ? n("div", {
                        class: [t.$style.contentHubItemImg, "blockbackground"],
                        style: [t.rwdWidth > 731 ? {
                            backgroundImage: "url(" + e.ImgUrl.pc + ")"
                        } : {
                            backgroundImage: "url(" + e.ImgUrl.mobile + ")"
                        }, t.listItemStyle(o, e.ImgUrl)]
                    }) : t._e(), t._v(" "), n("div", {
                        class: t.$style.scenarioContent
                    }, [n("div", {
                        class: t.$style.contentTitle,
                        attrs: {
                            "data-i18n": "pageMain.mainScenario.item0.title"
                        }
                    }, [t._v("\n                " + t._s(e.Title) + "\n              ")]), t._v(" "), n("div", {
                        class: t.$style.contentInfo,
                        attrs: {
                            "data-i18n": "pageMain.mainScenario.item0.info"
                        }
                    }, [n("span", {
                        domProps: {
                            innerHTML: t._s(e.Description)
                        }
                    })])])])])]
                }))], 2), t._v(" "), n("CarouselArrows", {
                    attrs: {
                        isRTL: t.isRTL,
                        enableControllButton: t.rwdWidth >= 1280,
                        enablePrevButton: (t.currentImageIndex > 1 || t.loop) && t.totalSlide > 1,
                        enableNextButton: (t.currentImageIndex !== t.totalSlide || t.loop) && t.totalSlide > 1
                    },
                    on: {
                        clickPrev: t.prevImg,
                        clickNext: t.nextImg
                    }
                }), t._v(" "), n("Indicator", {
                    ref: "indicator",
                    class: t.$style.indicator,
                    attrs: {
                        autoPlay: !1,
                        currentSlide: t.currentImageIndex,
                        totalSlide: t.totalSlide,
                        rwdWidth: t.rwdWidth
                    },
                    on: {
                        slideToEvent: t.setImg
                    }
                }), t._v(" "), n("LightboxYouTube", {
                    ref: "lightbox",
                    attrs: {
                        propVideoUrl: t.propVideoUrl,
                        "show-light-box": !0,
                        "rwd-width": t.rwdWidth
                    }
                })], 1)])
            }), [], !1, (function(t) {
                this.$style = B.default.locals || B.default
            }), null, null);
            e.a = component.exports
        },
        763: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA0MCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMzkiIGhlaWdodD0iNTMiIHJ4PSIzLjUiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIgc3Ryb2tlPSIjNjY2NjY2Ii8+DQo8cGF0aCBkPSJNMTUuNSAxNy4wMjVMMjUuNDc1IDI3TDE1LjUgMzYuOTc1IiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="
        },
        764: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA0MCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMzkiIGhlaWdodD0iNTMiIHJ4PSIzLjUiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIgc3Ryb2tlPSIjNjY2NjY2Ii8+DQo8cGF0aCBkPSJNMjQuNSAzNi45NzVMMTQuNTI1IDI3TDI0LjUgMTcuMDI1IiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="
        },
        765: function(t, e, n) {
            t.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif'
            }
        },
        790: function(t, e, n) {
            "use strict";
            n(13), n(59), n(24);
            var o, r = n(4),
                l = n(0),
                c = n(18),
                d = n.n(c),
                m = n(14),
                h = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                f = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                _ = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.promotionBannerResult = {}, e.promotionBannerData = {}, e
                    }
                    return h(e, t), e.prototype.setPromotionBannerToData = function() {
                        this.promotionBannerGetter && Object.keys(this.promotionBannerGetter).length > 0 && (this.promotionBannerData = d()(this.promotionBannerGetter), void 0 !== this.promotionBannerData.Banners && void 0 !== this.promotionBannerData.Banners.length && this.promotionBannerData.Banners.length > 0 && (this.promotionBannerResult = this.promotionBannerData.Banners[0], this.gaDataLayerPush({
                            event: "promotionView",
                            ecommerce: {
                                promoView: {
                                    promotions: [{
                                        id: this.promotionBannerResult.Link,
                                        name: this.promotionBannerResult.Content,
                                        position: "promotion_banner"
                                    }]
                                }
                            }
                        })))
                    }, e.prototype.setStorePromotionBannerToData = function() {
                        this.storePromotionBannerGetter && Object.keys(this.storePromotionBannerGetter).length > 0 && (this.promotionBannerData = d()(this.storePromotionBannerGetter), void 0 !== this.promotionBannerData.PromotionBar.length && this.promotionBannerData.PromotionBar.length > 0 && (this.promotionBannerResult = this.promotionBannerData.PromotionBar[0], this.gaDataLayerPush({
                            event: "promotionView",
                            ecommerce: {
                                promoView: {
                                    promotions: [{
                                        id: this.promotionBannerResult.Link,
                                        name: this.promotionBannerResult.Content,
                                        position: "store_bar_banner"
                                    }]
                                }
                            }
                        })))
                    }, f([Object(l.Getter)("promotionBannerGetter")], e.prototype, "promotionBannerGetter", void 0), f([Object(l.Getter)("storePromotionBannerGetter")], e.prototype, "storePromotionBannerGetter", void 0), f([Object(l.Prop)({
                        default: ""
                    })], e.prototype, "page", void 0), f([Object(l.Watch)("promotionBannerGetter", {
                        immediate: !0
                    })], e.prototype, "setPromotionBannerToData", null), f([Object(l.Watch)("storePromotionBannerGetter", {
                        immediate: !0
                    })], e.prototype, "setStorePromotionBannerToData", null), e = f([Object(l.Component)({
                        components: {}
                    })], e)
                }(Object(l.mixins)(m.a)),
                I = n(798),
                y = n(8);
            var component = Object(y.a)(_, (function() {
                var t, e = this,
                    n = e.$createElement,
                    o = e._self._c || n;
                return (e.promotionBannerGetter || e.storePromotionBannerGetter) && e.promotionBannerResult && Object.keys(e.promotionBannerResult).length > 0 ? o("div", {
                    class: e.$style.wrapper,
                    style: {
                        backgroundColor: e.promotionBannerResult.BackgroundColor
                    }
                }, [e.promotionBannerResult.ImagePath ? o("div", {
                    class: e.$style.icon
                }, [o("img", {
                    attrs: {
                        src: e.promotionBannerResult.ImagePath,
                        alt: e.promotionBannerResult.Content
                    }
                })]) : e._e(), e._v(" "), o("div", {
                    class: [e.$style.link, (t = {}, t[e.$style.blackColor] = "store" === e.page, t)]
                }, [e.promotionBannerResult.Link ? o("a", {
                    attrs: {
                        href: e.promotionBannerResult.Link,
                        target: e.promotionBannerResult.LinkTarget,
                        rel: "_blank" === e.promotionBannerResult.LinkTarget ? "noreferrer noopener" : ""
                    },
                    on: {
                        click: function(t) {
                            return e.gaDataLayerPush({
                                event: "promotionClick",
                                ecommerce: {
                                    promoClick: {
                                        promotions: [{
                                            id: e.promotionBannerResult.Link,
                                            name: e.promotionBannerResult.Content,
                                            position: "promotion_banner"
                                        }]
                                    }
                                }
                            })
                        }
                    }
                }, [e._v("\n      " + e._s(e.promotionBannerResult.Content) + "\n    ")]) : o("div", {
                    class: e.$style.text,
                    on: {
                        click: function(t) {
                            return e.gaDataLayerPush({
                                event: "promotionClick",
                                ecommerce: {
                                    promoClick: {
                                        promotions: [{
                                            id: e.promotionBannerResult.Link,
                                            name: e.promotionBannerResult.Content,
                                            position: "promotion_banner"
                                        }]
                                    }
                                }
                            })
                        }
                    }
                }, [e._v("\n      " + e._s(e.promotionBannerResult.Content) + "\n    ")])])]) : e._e()
            }), [], !1, (function(t) {
                this.$style = I.default.locals || I.default
            }), null, null);
            e.a = component.exports
        },
        793: function(t, e, n) {
            "use strict";
            n(13), n(24);
            var o, r = n(4),
                l = n(0),
                c = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                d = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                m = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.rwdState = "", e.bannerTitleData = {}, e.bannerSloganData = {}, e.dpr = 1, e.backgroundSize = 2560, e.widthData = 0, e.itemHeight = 0, e
                    }
                    return c(e, t), e.prototype.judgeLayoutType = function() {
                        "tablet" === this.LayoutType && (this.rwdState = "tablet", this.$refs.textBannerWrapper.style.marginTop = "-48px")
                    }, e.prototype.reloadSource = function() {
                        var element = this.$refs.textBannerWrapper;
                        window && element && (this.widthData = element.offsetWidth), this.rwdWidth > 1060 ? (this.rwdState = "desktop", this.backgroundSize = 2560, this.itemHeight = 428) : this.rwdWidth > 731 && this.rwdWidth <= 1060 ? (this.rwdState = "tablet", this.backgroundSize = 1280, this.itemHeight = 480) : (this.rwdState = "mobile", this.backgroundSize = 730, this.itemHeight = 440)
                    }, e.prototype.getBannerData = function() {
                        this.rwdWidth > 1060 ? (this.bannerTitleData = this.bannerData.DesktopItems[0].title, this.bannerSloganData = this.bannerData.DesktopItems[0].slogan) : this.rwdWidth > 731 && this.rwdWidth <= 1060 ? (this.bannerTitleData = this.bannerData.TabletItems[0].title, this.bannerSloganData = this.bannerData.TabletItems[0].slogan) : (this.bannerTitleData = this.bannerData.MobileItems[0].title, this.bannerSloganData = this.bannerData.MobileItems[0].slogan)
                    }, e.prototype.mounted = function() {
                        var t = this;
                        this.dpr = window.devicePixelRatio, this.getBannerData(), this.reloadSource(), window.removeEventListener("resize", this.getBannerData), this.$nextTick((function() {
                            var element = t.$refs.textBannerWrapper;
                            window && element && (t.widthData = element.offsetWidth)
                        }))
                    }, e.prototype.dprImgSrc = function(t, e) {
                        return t === e ? t : this.dpr > 1 ? e : t
                    }, d([Object(l.Getter)("getLayoutType")], e.prototype, "LayoutType", void 0), d([Object(l.Prop)()], e.prototype, "rwdWidth", void 0), d([Object(l.Prop)()], e.prototype, "bannerData", void 0), d([Object(l.Watch)("LayoutType", {
                        immediate: !0
                    })], e.prototype, "judgeLayoutType", null), d([Object(l.Watch)("rwdWidth")], e.prototype, "reloadSource", null), d([Object(l.Watch)("bannerData")], e.prototype, "getBannerData", null), e = d([Object(l.Component)({})], e)
                }(l.Vue),
                h = n(889),
                f = n(8);
            var component = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.bannerData ? n("div", {
                    ref: "textBannerWrapper",
                    class: t.$style.textBannerWrapper
                }, [t.bannerData.DesktopItems && t.bannerData.DesktopItems[0].BackgroudImage && t.bannerData.TabletItems[0].BackgroudImage && t.bannerData.MobileItems[0].BackgroudImage ? n("div", {
                    class: t.$style.textBannerBackgroundImage,
                    style: [{
                        "background-size": t.backgroundSize + "px"
                    }]
                }, [n("picture", [n("source", {
                    attrs: {
                        media: "(min-width: 1280px)",
                        srcset: t.bannerData.DesktopItems[0].BackgroudImage["1x"] + " 1x, " + t.bannerData.DesktopItems[0].BackgroudImage["2x"] + " 2x"
                    }
                }), t._v(" "), n("source", {
                    attrs: {
                        media: "(min-width: 731px) and (max-width:1279px)",
                        srcset: t.bannerData.TabletItems[0].BackgroudImage["1x"] + " 1x, " + t.bannerData.TabletItems[0].BackgroudImage["2x"] + " 2x"
                    }
                }), t._v(" "), n("source", {
                    attrs: {
                        media: "(max-width: 730px)",
                        srcset: t.bannerData.MobileItems[0].BackgroudImage["1x"] + " 1x, " + t.bannerData.MobileItems[0].BackgroudImage["2x"] + " 2x"
                    }
                }), t._v(" "), n("img", {
                    style: {
                        width: t.rwdWidth + "px",
                        height: t.itemHeight + "px"
                    },
                    attrs: {
                        loading: "lazy",
                        srcset: t.bannerData.DesktopItems[0].BackgroudImage["1x"] + " 1x, " + t.bannerData.DesktopItems[0].BackgroudImage["2x"] + " 2x",
                        src: "" + t.bannerData.DesktopItems[0].BackgroudImage["1x"],
                        alt: t.bannerData.Alt
                    }
                })]), t._v(" "), "1" === t.bannerTitleData.Show || "1" === t.bannerSloganData.Show ? n("div", {
                    class: t.$style.inner,
                    style: {
                        width: t.rwdWidth + "px"
                    }
                }, [n("div", {
                    class: t.$style.slogan
                }, ["" !== t.bannerTitleData.Content["1x"] && "" !== t.bannerTitleData.Content["2x"] ? n("h1", {
                    class: t.$style.title
                }, [n("img", {
                    attrs: {
                        src: "desktop" === t.rwdState ? t.bannerTitleData.Content["1x"] : (t.rwdState, t.bannerTitleData.Content["2x"]),
                        alt: t.bannerTitleData.Content.Text
                    }
                })]) : t._e(), t._v(" "), "1" === t.bannerTitleData.Show ? n("h1", {
                    class: t.$style.title,
                    style: {
                        color: t.bannerTitleData.Color
                    }
                }, [t._v("\n          " + t._s(t.bannerTitleData.Content.Text) + "\n        ")]) : t._e(), t._v(" "), "1" === t.bannerSloganData.Show ? n("div", {
                    class: t.$style.description,
                    style: {
                        color: t.bannerSloganData.Color
                    }
                }, [t._v("\n          " + t._s(t.bannerSloganData.Content) + "\n        ")]) : t._e()])]) : t._e()]) : t._e()]) : t._e()
            }), [], !1, (function(t) {
                this.$style = h.default.locals || h.default
            }), null, null);
            e.a = component.exports
        },
        796: function(t, e, n) {
            "use strict";
            n(13), n(24);
            var o, r = n(4),
                l = n(0),
                c = (o = function(t, b) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, b) {
                            t.__proto__ = b
                        } || function(t, b) {
                            for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                        })(t, b)
                }, function(t, b) {
                    function e() {
                        this.constructor = t
                    }
                    o(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
                }),
                d = function(t, e, n, desc) {
                    var o, l = arguments.length,
                        c = l < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(r.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (l < 3 ? o(c) : l > 3 ? o(e, n, c) : o(e, n)) || c);
                    return l > 3 && c && Object.defineProperty(e, n, c), c
                },
                m = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return c(e, t), d([Object(l.Prop)()], e.prototype, "href", void 0), d([Object(l.Prop)()], e.prototype, "target", void 0), d([Object(l.Prop)()], e.prototype, "disabled", void 0), d([Object(l.Prop)()], e.prototype, "fontw", void 0), d([Object(l.Prop)()], e.prototype, "enableArrow", void 0), d([Object(l.Prop)({
                        default: "Blue"
                    })], e.prototype, "theme", void 0), d([Object(l.Prop)({
                        default: !1
                    })], e.prototype, "arrowIcon", void 0), e = d([Object(l.Component)({})], e)
                }(l.Vue),
                h = n(804),
                f = n(8);
            var component = Object(f.a)(m, (function() {
                var t, e, n, o, r, l = this,
                    c = l.$createElement,
                    d = l._self._c || c;
                return d("a", {
                    class: [(t = {}, t[l.$style.disabled] = l.disabled, t), (e = {}, e[l.$style.normal] = !l.disabled, e), (n = {}, n[l.$style.enableArrow] = !1 !== l.enableArrow, n), l.$style.link],
                    attrs: {
                        href: !(!l.href || l.disabled) && l.href,
                        target: l.target,
                        rel: "_blank" === l.target ? "noreferrer noopener" : "",
                        tabindex: "0",
                        "data-theme": l.theme
                    }
                }, [d("span", {
                    class: [l.$style.LinkText, (o = {}, o[l.$style.fontw300] = 300 === l.fontw, o), (r = {}, r[l.$style.fontw600] = 600 === l.fontw, r)]
                }, [l._t("default")], 2), l._v(" "), l.arrowIcon ? d("svg", {
                    class: l.$style.arrowRightSVG,
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        fill: "none",
                        viewBox: "0 0 9 9",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [d("path", {
                    attrs: {
                        stroke: "#006ce1",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        d: "M3.375 1.406L6.581 4.5 3.375 7.594"
                    }
                })]) : l._e()])
            }), [], !1, (function(t) {
                this.$style = h.default.locals || h.default
            }), null, null);
            e.a = component.exports
        },
        798: function(t, e, n) {
            "use strict";
            var o = n(607),
                r = n.n(o);
            e.default = r.a
        },
        799: function(t, e, n) {
            "use strict";
            var o = n(608),
                r = n.n(o);
            e.default = r.a
        },
        800: function(t, e, n) {
            "use strict";
            var o = n(609),
                r = n.n(o);
            e.default = r.a
        },
        804: function(t, e, n) {
            "use strict";
            var o = n(613),
                r = n.n(o);
            e.default = r.a
        },
        809: function(t, e, n) {
            "use strict";
            var o = n(618),
                r = n.n(o);
            e.default = r.a
        },
        811: function(t, e, n) {
            "use strict";
            var o = n(620),
                r = n.n(o);
            e.default = r.a
        },
        852: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABlSURBVHgB7ZHBCYAwDEWjmSGQMVzFSV3FDRwgMwQkh0L5fsHite8UXppPQ0QmD9z9MrMNfbnqoV9RZOauqkcfUnW56uH7RQg40OqIOD8F9CHtV2yYrjDK7xXoMF6CuVdGzzgRuQF9kzNI2ZDCmgAAAABJRU5ErkJggg=="
        },
        863: function(t, e, n) {
            "use strict";
            var o = n(650),
                r = n.n(o);
            e.default = r.a
        },
        884: function(t, e, n) {
            t.exports = n.p + "img/comparison.bc31f76.png"
        },
        889: function(t, e, n) {
            "use strict";
            var o = n(670),
                r = n.n(o);
            e.default = r.a
        }
    }
]);