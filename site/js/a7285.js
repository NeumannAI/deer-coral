(window.webpackJsonp_cj86gji4 = window.webpackJsonp_cj86gji4 || []).push([
    [11], {
        560: function(e, t, o) {
            "use strict";
            o.r(t);
            o(36), o(46), o(47), o(32), o(61), o(27), o(13), o(59), o(24), o(16), o(17), o(48), o(37), o(33), o(49), o(65);
            var r, n = o(4),
                l = o(0),
                c = o(111),
                d = o.n(c),
                h = o(18),
                m = o.n(h),
                v = o(113),
                y = o(583),
                f = o.n(y),
                w = o(606),
                _ = o(14),
                P = (r = function(e, b) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, b) {
                            e.__proto__ = b
                        } || function(e, b) {
                            for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                        })(e, b)
                }, function(e, b) {
                    function t() {
                        this.constructor = e
                    }
                    r(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                }),
                S = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.showCompareBtn = !0, t.breakPointMedium = f.a.breakPointMedium ? parseInt(f.a.breakPointMedium, 10) : 1279, t.breakPointSmall = f.a.breakPointSmall ? parseInt(f.a.breakPointSmall, 10) : 731, t.rwdState = "", t.kvSummaryResult = {}, t.dpr = 1, t
                    }
                    return P(t, e), t.prototype.mounted = function() {
                        this.dpr = window.devicePixelRatio
                    }, Object.defineProperty(t.prototype, "hasBackgroundImage", {
                        get: function() {
                            var e, t, o, r, n, l, c, d, h;
                            return "desktop" === this.rwdState && "" !== (null === (o = null === (t = null === (e = this.kvSummaryResult) || void 0 === e ? void 0 : e.SysInfo) || void 0 === t ? void 0 : t.BackgroundImage) || void 0 === o ? void 0 : o.Desktop) || "tablet" === this.rwdState && "" !== (null === (l = null === (n = null === (r = this.kvSummaryResult) || void 0 === r ? void 0 : r.SysInfo) || void 0 === n ? void 0 : n.BackgroundImage) || void 0 === l ? void 0 : l.Tablet) || "mobile" === this.rwdState && "" !== (null === (h = null === (d = null === (c = this.kvSummaryResult) || void 0 === c ? void 0 : c.SysInfo) || void 0 === d ? void 0 : d.BackgroundImage) || void 0 === h ? void 0 : h.Mobile)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.setcolumnBannerToData = function() {
                        this.kvSummaryResult = m()(this.KvSummaryGetter)
                    }, t.prototype.reloadSource = function() {
                        this.rwdWidth > this.breakPointMedium ? this.rwdState = "desktop" : this.rwdWidth > this.breakPointSmall ? this.rwdState = "tablet" : this.rwdState = "mobile"
                    }, t.prototype.sendGA = function(data) {
                        this.gaDataLayerPush({
                            event: "data_layer_event",
                            event_category_DL: "buttons",
                            event_action_DL: "clicked",
                            event_label_DL: this.$route.params.productModel + "/" + (data ? "Add to comparison" : "Move out off comparison") + " -" + this.kvSummaryResult.Compare,
                            event_value_DL: "0"
                        })
                    }, t.prototype.dprImgSrc = function(e, t) {
                        return e === t ? e : this.dpr > 1 ? t : e
                    }, S([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), S([Object(l.Getter)("getPDInfoDataGetter")], t.prototype, "KvSummaryGetter", void 0), S([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), S([Object(l.Prop)()], t.prototype, "defLevelId", void 0), S([Object(l.Prop)()], t.prototype, "ProductID", void 0), S([Object(l.Prop)()], t.prototype, "showCompareBtn", void 0), S([Object(l.Watch)("KvSummaryGetter", {
                        immediate: !0
                    })], t.prototype, "setcolumnBannerToData", null), S([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), t = S([Object(l.Component)({
                        components: {
                            CompareCheckBox: w.a
                        }
                    })], t)
                }(Object(l.mixins)(_.a)),
                C = o(912),
                D = o(8);
            var k = Object(D.a)(I, (function() {
                    var e, t, o = this,
                        r = o.$createElement,
                        n = o._self._c || r;
                    return n("section", {
                        class: [(e = {}, e[o.$style.KvSummarySYS] = "SYS" === o.kvSummaryResult.PatternType, e[o.$style.KvSummaryOP] = "OP" === o.kvSummaryResult.PatternType, e), o.$style["theme" + o.themeColor]]
                    }, ["SYS" === o.kvSummaryResult.PatternType ? [n("div", {
                        class: o.$style.summaryTop
                    }, [n("div", {
                        class: o.$style.Text
                    }, ["pic" === o.kvSummaryResult.SysInfo.Slogan.Type ? n("div", {
                        class: o.$style.headingImgWrap
                    }, [n("img", {
                        attrs: {
                            src: "mobile" === o.rwdState ? "" + o.kvSummaryResult.SysInfo.Slogan.Content.Mobile : "" + o.kvSummaryResult.SysInfo.Slogan.Content.Desktop,
                            alt: "heading Img"
                        }
                    })]) : "text" === o.kvSummaryResult.SysInfo.Slogan.Type ? n("div", {
                        class: o.$style.headingTitle
                    }, ["desktop" === o.rwdState ? [o._v("\n            " + o._s(o.kvSummaryResult.SysInfo.Slogan.Content.Desktop) + "\n          ")] : [o._v("\n            " + o._s(o.kvSummaryResult.SysInfo.Slogan.Content.Mobile) + "\n          ")]], 2) : o._e()]), o._v(" "), n("div", {
                        class: o.$style.heading
                    }, ["pic" === o.kvSummaryResult.SysInfo.Title.Type ? n("div", {
                        class: o.$style.headingImgWrap
                    }, [n("img", {
                        attrs: {
                            src: "mobile" === o.rwdState ? "" + o.kvSummaryResult.SysInfo.Title.Content.Mobile : "" + o.kvSummaryResult.SysInfo.Title.Content.Desktop,
                            alt: "heading Img"
                        }
                    })]) : "text" === o.kvSummaryResult.SysInfo.Title.Type ? n("div", {
                        class: o.$style.headingTitle
                    }, ["desktop" === o.rwdState ? [o._v("\n            " + o._s(o.kvSummaryResult.SysInfo.Title.Content.Desktop) + "\n          ")] : [o._v("\n            " + o._s(o.kvSummaryResult.SysInfo.Title.Content.Mobile) + "\n          ")]], 2) : o._e()]), o._v(" "), n("div", {
                        class: o.$style.Tagline
                    }, ["pic" === o.kvSummaryResult.SysInfo.SubTitle.Type ? n("div", {
                        class: o.$style.headingImgWrap
                    }, [n("img", {
                        attrs: {
                            src: "mobile" === o.rwdState ? "" + o.kvSummaryResult.SysInfo.SubTitle.Content.Mobile : "" + o.kvSummaryResult.SysInfo.SubTitle.Content.Desktop,
                            alt: "heading Img"
                        }
                    })]) : "text" === o.kvSummaryResult.SysInfo.SubTitle.Type ? n("div", {
                        class: o.$style.headingTitle
                    }, ["desktop" === o.rwdState ? [o._v("\n            " + o._s(o.kvSummaryResult.SysInfo.SubTitle.Content.Desktop) + "\n          ")] : [o._v("\n            " + o._s(o.kvSummaryResult.SysInfo.SubTitle.Content.Mobile) + "\n          ")]], 2) : o._e()])]), o._v(" "), o.hasBackgroundImage ? n("div", {
                        class: o.$style.KeyVisionImage,
                        style: {
                            backgroundImage: "url(" + ("desktop" === o.rwdState ? o.kvSummaryResult.SysInfo.BackgroundImage.Desktop : "tablet" === o.rwdState ? o.kvSummaryResult.SysInfo.BackgroundImage.Tablet : o.kvSummaryResult.SysInfo.BackgroundImage.Mobile) + ")"
                        }
                    }, [n("img", {
                        attrs: {
                            src: "desktop" === o.rwdState ? o.kvSummaryResult.SysInfo.BackgroundImage.Desktop : "tablet" === o.rwdState ? o.kvSummaryResult.SysInfo.BackgroundImage.Tablet : o.kvSummaryResult.SysInfo.BackgroundImage.Mobile,
                            alt: ""
                        }
                    })]) : o._e(), o._v(" "), n("div", {
                        class: o.$style.summaryBottom
                    }, [n("div", {
                        class: o.$style.Info,
                        domProps: {
                            innerHTML: o._s(o.kvSummaryResult.SysInfo.Description)
                        }
                    })])] : "OP" === o.kvSummaryResult.PatternType ? [n("div", {
                        class: o.$style.KvSummaryOPInnerWrapper
                    }, [n("div", {
                        class: o.$style.content
                    }, [n("div", {
                        class: [o.$style.productHeadiing, o.$style["theme" + o.themeColor]],
                        domProps: {
                            innerHTML: o._s(o.kvSummaryResult.OPInfo.Slogan)
                        }
                    }), o._v(" "), n("div", {
                        class: [o.$style.productIntro, o.$style["theme" + o.themeColor]],
                        domProps: {
                            innerHTML: o._s(o.kvSummaryResult.OPInfo.Feature)
                        }
                    })]), o._v(" "), n("div", {
                        class: o.$style.OPProductMainImage
                    }, [o.kvSummaryResult.ProductLogo ? n("div", {
                        class: o.$style.logoWrapper
                    }, o._l(o.kvSummaryResult.ProductLogo, (function(e, t) {
                        return n("div", {
                            key: t,
                            class: o.$style.logoBox
                        }, ["" === e.LogoLink ? n("img", {
                            attrs: {
                                src: e.LogoImageURL.logo1x,
                                srcset: e.LogoImageURL.logo1x + " 1x, " + e.LogoImageURL.logo2x + " 2x",
                                alt: e.LogoAlt
                            }
                        }) : n("a", {
                            attrs: {
                                href: e.LogoLink,
                                target: "_blank"
                            }
                        }, [n("img", {
                            attrs: {
                                src: e.LogoImageURL.logo1x,
                                srcset: e.LogoImageURL.logo1x + " 1x, " + e.LogoImageURL.logo2x + " 2x",
                                alt: e.LogoAlt
                            }
                        })])])
                    })), 0) : o._e(), o._v(" "), n("div", {
                        class: [o.$style.imageWrapper, (t = {}, t[o.$style.hasLogo] = !!(o.kvSummaryResult.ProductLogo && o.kvSummaryResult.ProductLogo.length > 0), t)]
                    }, ["desktop" === o.rwdState ? [n("img", {
                        attrs: {
                            src: "" + o.dprImgSrc(o.kvSummaryResult.OPInfo.ProductImage.Desktop["1x"], o.kvSummaryResult.OPInfo.ProductImage.Desktop["2x"]),
                            alt: "OP product mainImage"
                        }
                    })] : "tablet" === o.rwdState ? [n("img", {
                        attrs: {
                            src: "" + o.dprImgSrc(o.kvSummaryResult.OPInfo.ProductImage.Tablet["1x"], o.kvSummaryResult.OPInfo.ProductImage.Tablet["2x"]),
                            alt: "OP product mainImage"
                        }
                    })] : [n("img", {
                        attrs: {
                            src: "" + o.dprImgSrc(o.kvSummaryResult.OPInfo.ProductImage.Mobile["1x"], o.kvSummaryResult.OPInfo.ProductImage.Mobile["2x"]),
                            alt: "OP product mainImage"
                        }
                    })]], 2), o._v(" "), n("div", {
                        class: [o.$style.compareRow, o.$style["theme" + o.themeColor]]
                    }, [!0 === o.showCompareBtn ? n("CompareCheckBox", {
                        class: o.$style.addToCompare,
                        attrs: {
                            ProductID: o.ProductID,
                            LevelId: o.defLevelId,
                            classType: "KvSummary"
                        },
                        on: {
                            gaClickTrigger: o.sendGA
                        }
                    }, [n("span", {
                        class: o.$style.text
                    }, [o._v("\n              " + o._s(o.kvSummaryResult.Compare) + "\n            ")])]) : o._e()], 1)])])] : [o.kvSummaryResult.HTMLInfo ? n("div", {
                        domProps: {
                            innerHTML: o._s(o.kvSummaryResult.HTMLInfo.Feature)
                        }
                    }) : o._e()]], 2)
                }), [], !1, (function(e) {
                    this.$style = C.default.locals || C.default
                }), null, null).exports,
                x = (o(114), o(112), o(25), o(45), o(66), o(914), function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }()),
                R = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                L = function(e, t, o, r) {
                    return new(o || (o = Promise))((function(n, l) {
                        function c(e) {
                            try {
                                h(r.next(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function d(e) {
                            try {
                                h(r.throw(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function h(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                                e(t)
                            }))).then(c, d)
                        }
                        h((r = r.apply(e, t || [])).next())
                    }))
                },
                O = function(e, body) {
                    var t, o, r, g, n = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return g = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                        return this
                    }), g;

                    function l(l) {
                        return function(c) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; n;) try {
                                    if (t = 1, o && (r = 2 & l[0] ? o.return : l[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, l[1])).done) return r;
                                    switch (o = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                        case 0:
                                        case 1:
                                            r = l;
                                            break;
                                        case 4:
                                            return n.label++, {
                                                value: l[1],
                                                done: !1
                                            };
                                        case 5:
                                            n.label++, o = l[1], l = [0];
                                            continue;
                                        case 7:
                                            l = n.ops.pop(), n.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = n.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                                n = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                n.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && n.label < r[1]) {
                                                n.label = r[1], r = l;
                                                break
                                            }
                                            if (r && n.label < r[2]) {
                                                n.label = r[2], n.ops.push(l);
                                                break
                                            }
                                            r[2] && n.ops.pop(), n.trys.pop();
                                            continue
                                    }
                                    l = body.call(e, n)
                                } catch (e) {
                                    l = [6, e], o = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, c])
                        }
                    }
                },
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.original = {
                            imageDom: {},
                            frameDiv: {},
                            small: {}
                        }, t.toggleGetFrameSizeClass = !1, t.enableZoomUp = !0, t.moveable = !1, t.options = {
                            dragScrollable: !0,
                            maxScale: 2.5,
                            speed: 50
                        }, t
                    }
                    return x(t, e), t.prototype.mounted = function() {
                        this.imageDom = this.$refs.originalImg, this.zoomContainer = this.$refs.zoomContainer, this.frameDiv = this.$refs.frameDiv, this.smallDiv = this.$refs.smallDiv
                    }, t.prototype.showImage = function() {
                        this.enableZoomUp = !0, void 0 !== this.imageDom && null !== this.imageDom && (this.imageDom.complete ? this.init() : this.imageDom.onload = this.init)
                    }, t.prototype.getImageNaturalSize = function() {
                        return L(this, void 0, void 0, (function() {
                            var e = this;
                            return O(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.zoomContainer.style.width = "auto", this.zoomContainer.style.height = "auto", this.rwdWidth < 732 ? window.innerWidth > window.innerHeight ? (this.frameDiv.style.width = window.innerHeight - 109 + "px", this.frameDiv.style.height = window.innerHeight - 109 + "px") : (this.frameDiv.style.width = window.innerWidth - 72 + "px", this.frameDiv.style.height = window.innerWidth - 72 + "px") : this.rwdWidth < 1279 ? window.innerWidth > window.innerHeight ? (this.frameDiv.style.width = window.innerHeight - 164 + "px", this.frameDiv.style.height = window.innerHeight - 164 + "px") : (this.frameDiv.style.width = window.innerWidth - 184 + "px", this.frameDiv.style.height = window.innerWidth - 184 + "px") : 1504 * (window.innerHeight - 185) / 1122 > window.innerWidth - 224 ? (this.frameDiv.style.width = window.innerWidth - 224 + "px", this.frameDiv.style.height = 1122 * (window.innerWidth - 224) / 1504 + "px") : (this.frameDiv.style.width = 1504 * (window.innerHeight - 185) / 1122 + "px", this.frameDiv.style.height = window.innerHeight - 185 + "px"), this.frameDiv.style.width = window.innerWidth + "px", this.frameDiv.style.height = window.innerHeight - 64 + "px", this.imageDom.removeAttribute("width"), this.imageDom.removeAttribute("height"), [4, this.$nextTick((function() {
                                            e.$set(e.original, "imageDom", {
                                                width: e.imageDom.offsetWidth,
                                                height: e.imageDom.offsetHeight
                                            })
                                        }))];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            }))
                        }))
                    }, t.prototype.getFrameDivSize = function() {
                        return L(this, void 0, void 0, (function() {
                            var e = this;
                            return O(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.toggleGetFrameSizeClass = !0, [4, this.$nextTick((function() {
                                            e.$set(e.original, "frameDiv", {
                                                width: e.frameDiv.offsetWidth,
                                                height: e.frameDiv.offsetHeight
                                            }), e.$set(e.original, "smallDiv", {
                                                width: e.smallDiv.offsetWidth,
                                                height: e.smallDiv.offsetHeight
                                            }), e.toggleGetFrameSizeClass = !1
                                        }))];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            }))
                        }))
                    }, t.prototype.init = function() {
                        var e = this;
                        this.getImageNaturalSize().then((function() {
                            e.getFrameDivSize().then(e.prepare)
                        }))
                    }, t.prototype.prepare = function() {
                        var e = Math.min(this.original.smallDiv.width / this.original.imageDom.width, this.original.smallDiv.height / this.original.imageDom.height);
                        this.correctX = Math.max(0, (this.original.frameDiv.width - this.original.imageDom.width * e) / 2), this.correctY = Math.max(0, (this.original.frameDiv.height - this.original.imageDom.height * e) / 2), this.imageDom.width = this.original.imageDom.width * e, this.imageDom.height = this.original.imageDom.height * e, this.zoomContainer.style.width = "".concat((this.imageDom.width + 2 * this.correctX).toString(), "px"), this.zoomContainer.style.height = "".concat((this.imageDom.height + 2 * this.correctY).toString(), "px"), this.frameDiv.style.width = "".concat(this.original.frameDiv.width, "px"), this.frameDiv.style.height = "".concat(this.original.frameDiv.height, "px"), !0 === this.options.dragScrollable && this.frameDiv.addEventListener("mousedown", this.mouseDownHandler), this.frameDiv.addEventListener("wheel", this._rescale), this.initTouchEvent(), window.addEventListener("resize", this.init)
                    }, t.prototype.initTouchEvent = function() {
                        var e = this,
                            t = {
                                onePoint: {
                                    pageX: 0,
                                    pageY: 0
                                },
                                twoPoint: {
                                    pageX: 0,
                                    pageY: 0
                                }
                            },
                            o = 0,
                            r = function(e, t) {
                                return Math.hypot(t.x - e.x, t.y - e.y)
                            },
                            n = function(e) {
                                return {
                                    x: t[e].pageX,
                                    y: t[e].pageY
                                }
                            },
                            l = function(e, o) {
                                var r = o[0],
                                    n = o[1];
                                t[e].pageX = r, t[e].pageY = n
                            };
                        this.frameDiv.addEventListener("touchstart", (function(t) {
                            t.preventDefault(), e.moveable = !0;
                            var c = t.touches,
                                d = c[0],
                                h = c[1];
                            l("onePoint", [d.pageX, d.pageY]), h && (l("twoPoint", [h.pageX, h.pageY]), o = r(n("onePoint"), n("twoPoint")))
                        })), this.frameDiv.addEventListener("touchend", (function() {
                            e.moveable = !1
                        })), this.frameDiv.addEventListener("touchmove", (function(c) {
                            if (e.moveable) {
                                c.preventDefault();
                                var d = c.touches,
                                    h = d[0],
                                    m = d[1];
                                if (m && h && t.twoPoint.pageX !== m.pageX) {
                                    l("onePoint", [h.pageX, h.pageY]), l("twoPoint", [m.pageX, m.pageY]);
                                    var v = r(n("onePoint"), n("twoPoint"));
                                    Math.abs(v - o) > 5 && (c.deltaY = o < v ? -1 : 1, e.options.speed = 80, o = v, e._rescale(c))
                                } else h && (e.frameDiv.scrollLeft = e.frameDiv.scrollLeft - 1.5 * (h.pageX - t.onePoint.pageX), e.frameDiv.scrollTop = e.frameDiv.scrollTop - 1.5 * (h.pageY - t.onePoint.pageY), l("onePoint", [h.pageX, h.pageY]))
                            }
                        }))
                    }, t.prototype.getCoords = function(element) {
                        var e = element.getBoundingClientRect(),
                            t = document,
                            body = t.body,
                            o = t.documentElement,
                            r = window.pageYOffset || o.scrollTop || body.scrollTop,
                            n = window.pageXOffset || o.scrollLeft || body.scrollLeft,
                            l = o.clientTop || body.clientTop || 0,
                            c = o.clientLeft || body.clientLeft || 0;
                        return {
                            top: e.top + r - l,
                            left: e.left + n - c
                        }
                    }, t.prototype._rescale = function(e) {
                        e.preventDefault();
                        var t, o = e.deltaY ? e.deltaY < 0 ? 1 : 2 === e.deltaY ? 2 : -1 : null,
                            r = this.imageDom.width,
                            n = this.imageDom.height,
                            l = r / this.original.imageDom.width,
                            c = Math.min(this.original.smallDiv.width / this.original.imageDom.width, this.original.smallDiv.height / this.original.imageDom.height);
                        t = (t = 2 === o ? 1 : o ? l + o / this.options.speed : c) < c ? c : t > this.options.maxScale ? this.options.maxScale : t, this.enableZoomUp = t === c;
                        var d = this.frameDiv.scrollLeft,
                            h = this.frameDiv.scrollTop,
                            m = this.imageDom.width = this.original.imageDom.width * t,
                            v = this.imageDom.height = this.original.imageDom.height * t,
                            y = m + 2 * this.correctX,
                            f = v + 2 * this.correctY;
                        this.zoomContainer.style.width = "".concat(y.toString(), "px"), this.zoomContainer.style.height = "".concat(f.toString(), "px");
                        var w = this.frameDiv.scrollLeft,
                            _ = this.frameDiv.scrollTop,
                            P = this.getCoords(this.frameDiv),
                            S = P.left + this.original.frameDiv.width / 2,
                            I = P.top + this.original.frameDiv.height / 2,
                            C = Math.round(S - P.left + this.frameDiv.scrollLeft - this.correctX),
                            D = Math.round(m * C / r) - C;
                        this.frameDiv.scrollLeft += D + (d - w);
                        var k = Math.round(I - P.top + this.frameDiv.scrollTop - this.correctY),
                            x = Math.round(v * k / n) - k;
                        this.frameDiv.scrollTop += x + (h - _)
                    }, t.prototype.mouseDownHandler = function(e) {
                        if (e.preventDefault(), 1 !== e.buttons) return !1;
                        this.coords = {
                            left: e.clientX,
                            top: e.clientY
                        }, this.hasMove = !1, document.addEventListener("mousemove", this.mouseMoveHandler), document.addEventListener("mouseup", this.removeEvent)
                    }, t.prototype.mouseMoveHandler = function(e) {
                        e.preventDefault(), this.frameDiv.scrollLeft = this.frameDiv.scrollLeft - (e.clientX - this.coords.left), this.frameDiv.scrollTop = this.frameDiv.scrollTop - (e.clientY - this.coords.top), this.coords = {
                            left: e.clientX,
                            top: e.clientY
                        }, this.hasMove = !0
                    }, t.prototype.removeEvent = function(e) {
                        this.enableZoomUp ? (this.$set(this.original, "imageDom", {
                            width: 2400,
                            height: 2400
                        }), this.clickZoomUp(), this.enableZoomUp = !1) : !1 === this.hasMove && this.zoomReset(), e.preventDefault(), document.removeEventListener("mouseup", this.removeEvent), document.removeEventListener("mousemove", this.mouseMoveHandler)
                    }, t.prototype.clickZoomUp = function() {
                        var e = this.getCoords(this.frameDiv),
                            t = new Event("wheel");
                        t.deltaY = 2, t.pageX = e.left + this.original.frameDiv.width / 2, t.pageY = e.top + this.original.frameDiv.height / 2, this._rescale(t)
                    }, t.prototype.zoomReset = function() {
                        var e = this.getCoords(this.frameDiv),
                            t = new Event("wheel");
                        t.deltaY = null, t.pageX = e.left + this.original.frameDiv.width / 2, t.pageY = e.top + this.original.frameDiv.height / 2, this._rescale(t), this.enableZoomUp = !0
                    }, R([Object(l.Prop)({
                        default: ""
                    })], t.prototype, "src", void 0), R([Object(l.Prop)({
                        default: "desktop-1279"
                    })], t.prototype, "propRwdKind", void 0), R([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), t = R([Object(l.Component)({})], t)
                }(l.Vue),
                M = o(915);
            var W = Object(D.a)(T, (function() {
                    var e, t, o, r = this,
                        n = r.$createElement,
                        l = r._self._c || n;
                    return l("div", {
                        ref: "frameDiv",
                        class: r.$style.frameDiv
                    }, [l("div", {
                        ref: "smallDiv",
                        class: (e = {}, e[r.$style.notZoomInStatus] = !0 === r.enableZoomUp, e)
                    }, [l("div", {
                        ref: "zoomContainer",
                        class: r.$style.zoomContainer
                    }, [l("picture", [r.src && r.src.includes("/gain/") ? l("source", {
                        attrs: {
                            type: "image/webp",
                            srcset: r.src + "/fwebp"
                        }
                    }) : r._e(), r._v(" "), r.src && r.src.includes("/media/Odin/") ? l("source", {
                        attrs: {
                            type: "image/webp",
                            srcset: r.src + "?webp"
                        }
                    }) : r._e(), r._v(" "), l("img", {
                        ref: "originalImg",
                        class: [(t = {}, t[r.$style.sizeLimit] = r.toggleGetFrameSizeClass, t), (o = {}, o[r.$style.isZoomInStatus] = !1 === r.enableZoomUp, o), r.$style.originalImg],
                        attrs: {
                            src: r.src,
                            alt: ""
                        }
                    })])])])])
                }), [], !1, (function(e) {
                    this.$style = M.default.locals || M.default
                }), null, null).exports,
                j = o(590),
                B = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                $ = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.timer = null, t.select = 0, t.rwdState = "", t.lightBoxOn = 0, t.viewDisplay = 6, t.imageGroup = 0, t.isRTL = !1, t.bodyClientWidth = 0, t.bodyClientHeight = 0, t.mainImageIndex = 0, t
                    }
                    return B(t, e), t.prototype.created = function() {
                        this.isRTL = this.$store.getters.RTLGetter
                    }, t.prototype.mounted = function() {
                        var e = this;
                        document && (this.bodyClientWidth = document.body.clientWidth, this.bodyClientHeight = document.body.clientHeight), this.autoPlay && (this.timer = setInterval((function() {
                            e.nextImage()
                        }), this.autoPlayTime)), this.onToggleLightBox(this.lightBoxOn), window.addEventListener("resize", this.closeLightBox)
                    }, t.prototype.beforeDestroy = function() {
                        document.removeEventListener("keydown", this.addKeyEvent), window.removeEventListener("resize", this.closeLightBox), this.autoPlay && clearInterval(this.timer)
                    }, Object.defineProperty(t.prototype, "rwdKind", {
                        get: function() {
                            return this.rwdWidth > 1279 ? "desktop" : this.rwdWidth > 731 ? "tablet" : "mobile"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "totalmageGroup", {
                        get: function() {
                            return Math.ceil(this.images.length / this.viewDisplay) - 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "imagesThumb", {
                        get: function() {
                            return this.images.map((function(e) {
                                return e.Thumb
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "previousIconSVG", {
                        get: function() {
                            return this.isRTL ? o(784) : o(785)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "nextThumbIconSVG", {
                        get: function() {
                            return this.isRTL ? o(785) : o(784)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "previousButtonSVG", {
                        get: function() {
                            return this.isRTL ? o(586) : o(587)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "nextThumbButtonSVG", {
                        get: function() {
                            return this.isRTL ? o(587) : o(586)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.triggerInit = function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.$refs.panZoom && e.$refs.panZoom.init()
                        }))
                    }, t.prototype.setLightBoxOn = function(e, t) {
                        null != document && this.onToggleLightBox(e)
                    }, t.prototype.showImage = function(e) {
                        var t = this;
                        this.$set(this, "lightBoxOn", !0), this.$set(this, "select", e), this.$nextTick((function() {
                            t.$refs.panZoom.showImage();
                            var o = document.getElementById("thumbnailWrapper"),
                                r = document.getElementById("thumbnails");
                            r.style.paddingLeft = o.offsetWidth / 2 - 32 + "px", r.style.paddingRight = o.offsetWidth / 2 + 32 + "px", o.scrollLeft = 64 * e
                        }))
                    }, t.prototype.isShowThisImage = function(e) {
                        return Math.floor(e / this.viewDisplay) === this.imageGroup
                    }, t.prototype.nextImage = function() {
                        var e = this.select + 1;
                        e >= this.images.length && (e = this.images.length - 1), this.$set(this, "select", e), this.showImage(e), this.$refs.panZoom && this.$refs.panZoom.zoomReset()
                    }, t.prototype.previousImage = function() {
                        var e = this.select - 1;
                        e < 0 && (e = 0), this.$set(this, "select", e), this.showImage(e), this.$refs.panZoom && this.$refs.panZoom.zoomReset()
                    }, t.prototype.lookPreviousImagesGroup = function() {
                        this.setLookScopeEndIndex(-1)
                    }, t.prototype.lookNextImagesGroup = function() {
                        this.setLookScopeEndIndex(1)
                    }, t.prototype.setLookScopeEndIndex = function(e) {
                        this.$set(this, "imageGroup", this.imageGroup + e)
                    }, t.prototype.onToggleLightBox = function(e) {
                        document && (this.disableScroll && (e ? document.querySelector("html").classList.add("no-scroll") : document.querySelector("html").classList.remove("no-scroll")), e ? document.querySelector("body").classList.add("vue-lb-open") : document.querySelector("body").classList.remove("vue-lb-open"), this.$emit("onOpened", e), e ? document.addEventListener("keydown", this.addKeyEvent) : document.removeEventListener("keydown", this.addKeyEvent))
                    }, t.prototype.addKeyEvent = function(e) {
                        37 === e.keyCode && this.previousImage(), 39 === e.keyCode && this.nextImage(), 27 === e.keyCode && this.closeLightBox()
                    }, t.prototype.closeLightBox = function() {
                        this.closable && this.$set(this, "lightBoxOn", !1)
                    }, $([Object(l.Prop)()], t.prototype, "images", void 0), $([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), $([Object(l.Prop)({
                        default: !0
                    })], t.prototype, "disableScroll", void 0), $([Object(l.Prop)({
                        default: !0
                    })], t.prototype, "showLightBox", void 0), $([Object(l.Prop)({
                        default: !0
                    })], t.prototype, "closable", void 0), $([Object(l.Prop)({
                        default: 6
                    })], t.prototype, "nThumbs", void 0), $([Object(l.Prop)({
                        default: !0
                    })], t.prototype, "showThumbs", void 0), $([Object(l.Prop)({
                        default: !1
                    })], t.prototype, "autoPlay", void 0), $([Object(l.Prop)({
                        default: 3e3
                    })], t.prototype, "autoPlayTime", void 0), $([Object(l.Prop)({
                        default: 0
                    })], t.prototype, "lengthToLoadMore", void 0), $([Object(l.Prop)({
                        default: "Close (Esc)"
                    })], t.prototype, "closeText", void 0), $([Object(l.Prop)({
                        default: "Previous"
                    })], t.prototype, "previousText", void 0), $([Object(l.Prop)({
                        default: "Next"
                    })], t.prototype, "nextText", void 0), $([Object(l.Prop)({
                        default: "Previous"
                    })], t.prototype, "previousThumbText", void 0), $([Object(l.Prop)({
                        default: "Next"
                    })], t.prototype, "nextThumbText", void 0), $([Object(l.Watch)("rwdKind", {
                        immediate: !0
                    })], t.prototype, "triggerInit", null), $([Object(l.Watch)("lightBoxOn")], t.prototype, "setLightBoxOn", null), t = $([Object(l.Component)({
                        components: {
                            PanZoom: W,
                            Indicator: j.a
                        }
                    })], t)
                }(l.Vue),
                A = o(916);
            var N = Object(D.a)(G, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", [e.images && e.images.length > 0 ? o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.lightBoxOn,
                            expression: "lightBoxOn"
                        }],
                        ref: "container",
                        class: e.$style["lb-container"],
                        on: {
                            click: function(t) {
                                return t.target !== t.currentTarget ? null : e.closeLightBox(t)
                            }
                        }
                    }, [o("div", {
                        class: e.$style["lb-content"]
                    }, [o("div", {
                        class: e.$style["lb-figure"]
                    }, [e.images.length > 1 && "mobile" != e.rwdKind ? o("div", {
                        class: e.$style.arrowButton,
                        attrs: {
                            title: e.previousText
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.previousImage()
                            }
                        }
                    }, [o("svg", {
                        attrs: {
                            width: "48",
                            height: "62",
                            viewBox: "0 0 48 62",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [o("rect", {
                        attrs: {
                            x: "48",
                            y: "62",
                            width: "48",
                            height: "62",
                            rx: "4",
                            transform: "rotate(180 48 62)",
                            fill: "#fff",
                            "fill-opacity": ".9"
                        }
                    }), o("g", {
                        attrs: {
                            "clip-path": "url(#clip0_138:12030)"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M31.5 46.481l-15-15 15-15",
                            stroke: "#818181",
                            "stroke-width": "2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })]), o("defs", [o("clipPath", {
                        attrs: {
                            id: "clip0_138:12030"
                        }
                    }, [o("path", {
                        attrs: {
                            fill: "#fff",
                            transform: "rotate(180 19 23.537)",
                            d: "M0 0h28v32.148H0z"
                        }
                    })])])])]) : e._e(), e._v(" "), o("div", {
                        class: e.$style.imgWrapper
                    }, [o("v-touch", {
                        class: e.$style.imgTouch,
                        attrs: {
                            enabled: {
                                swipeleft: !0,
                                swiperight: !0
                            }
                        },
                        on: {
                            swipeleft: function(t) {
                                "mobile" === e.rwdKind && e.nextImage()
                            },
                            swiperight: function(t) {
                                "mobile" === e.rwdKind && e.previousImage()
                            }
                        }
                    }, [o("PanZoom", {
                        ref: "panZoom",
                        attrs: {
                            src: e.images[e.select].ImgPath,
                            srcset: e.images[e.select].srcset || "",
                            propRwdKind: e.rwdKind,
                            rwdWidth: e.rwdWidth
                        }
                    })], 1)], 1), e._v(" "), e.images.length > 1 && "mobile" != e.rwdKind ? o("div", {
                        class: e.$style.arrowButton,
                        attrs: {
                            title: e.nextText
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.nextImage()
                            }
                        }
                    }, [o("svg", {
                        attrs: {
                            width: "48",
                            height: "62",
                            viewBox: "0 0 48 62",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [o("rect", {
                        attrs: {
                            width: "48",
                            height: "62",
                            rx: "4",
                            fill: "#fff",
                            "fill-opacity": ".9"
                        }
                    }), o("g", {
                        attrs: {
                            "clip-path": "url(#clip0_134:10188)"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M16.5 15.519l15 15-15 15",
                            stroke: "#818181",
                            "stroke-width": "2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })]), o("defs", [o("clipPath", {
                        attrs: {
                            id: "clip0_134:10188"
                        }
                    }, [o("path", {
                        attrs: {
                            fill: "#fff",
                            transform: "translate(10 14.926)",
                            d: "M0 0h28v32.148H0z"
                        }
                    })])])])]) : e._e()]), e._v(" "), o("div", {
                        class: e.$style.thumbnailsContainer
                    }, [o("div", {
                        class: e.$style.thumbnailWrapper,
                        attrs: {
                            id: "thumbnailWrapper"
                        }
                    }, [e.showThumbs ? o("div", {
                        class: e.$style.thumbnails,
                        attrs: {
                            id: "thumbnails"
                        }
                    }, e._l(e.imagesThumb, (function(image, t) {
                        var r;
                        return o("div", {
                            key: "string" == typeof image ? "" + image + t : t,
                            class: [e.$style.thumbnailsSlide, (r = {}, r[e.$style.thumbnailActive] = e.select === t, r)],
                            attrs: {
                                id: t
                            },
                            on: {
                                click: function(o) {
                                    return o.stopPropagation(), e.showImage(t)
                                }
                            }
                        }, [o("picture", [image && image.includes("/gain/") ? o("source", {
                            attrs: {
                                type: "image/webp",
                                srcset: image + "/fwebp"
                            }
                        }) : e._e(), e._v(" "), image && image.includes("/media/Odin/") ? o("source", {
                            attrs: {
                                type: "image/webp",
                                srcset: image + "?webp"
                            }
                        }) : e._e(), e._v(" "), o("img", {
                            attrs: {
                                src: image
                            }
                        })])])
                    })), 0) : e._e()])]), e._v(" "), e.closable ? o("button", {
                        class: e.$style["close-lightbox"],
                        attrs: {
                            type: "button",
                            title: e.closeText
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.closeLightBox(t)
                            }
                        }
                    }, [o("svg", {
                        attrs: {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [o("rect", {
                        attrs: {
                            width: "48",
                            height: "48",
                            rx: "4",
                            fill: "#fff",
                            "fill-opacity": ".9"
                        }
                    }), o("path", {
                        attrs: {
                            d: "M12.5 12.5l23 23M12.5 35.5l23-23",
                            stroke: "#818181",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]) : e._e()])]) : e._e()])
                }), [], !1, (function(e) {
                    this.$style = A.default.locals || A.default
                }), null, null).exports,
                z = o(758),
                H = (o(782), o(110)),
                F = o(7),
                E = o.n(F),
                K = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                Y = function() {
                    return (Y = Object.assign || function(e) {
                        for (var s, i = 1, t = arguments.length; i < t; i++)
                            for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                        return e
                    }).apply(this, arguments)
                },
                U = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                V = o(783);
            l.Vue.use(V);
            var Z = function(e) {
                    function t() {
                        var t, o, r = null !== e && e.apply(this, arguments) || this;
                        return r.verticalSwiperShow = !1, r.isClick = !1, r.horizontalSwiperShow = !1, r.OPSwiperShow = !1, r.rwdState = "", r.colorCodePicked = "", r.moveThumbnailWidth = 0, r.breakPointMedium = f.a.breakPointMedium ? parseInt(f.a.breakPointMedium, 10) : 1279, r.breakPointSmall = f.a.breakPointSmall ? parseInt(f.a.breakPointSmall, 10) : 731, r.breakGallerySmall = f.a.BreakGallerySmall ? parseInt(f.a.breakPointSmall, 10) : 730, r.slidesPerView = {
                            verticalSwiper: {
                                desktop: 6
                            },
                            horizontalSwiper: {
                                desktop: 5,
                                tablet: 5,
                                mobile: 4
                            },
                            OPSwiper: {
                                desktop: 7,
                                tablet: "auto",
                                mobile: "auto"
                            }
                        }, r.verticalSwiperOption = {
                            slidesPerView: r.slidesPerView.verticalSwiper.desktop,
                            direction: "vertical",
                            spaceBetween: 8,
                            noSwiping: !0,
                            watchOverflow: !0,
                            navigation: {
                                prevEl: "#vertical-swiper-prev",
                                nextEl: "#vertical-swiper-next"
                            }
                        }, r.horizontalSwiperOption = {
                            slidesPerView: r.slidesPerView.horizontalSwiper.desktop,
                            spaceBetween: 20,
                            noSwiping: !0,
                            watchOverflow: !0,
                            navigation: {
                                prevEl: "#horizontal-swiper-prev",
                                nextEl: "#horizontal-swiper-next"
                            },
                            breakpoints: (t = {}, t[r.breakPointMedium] = {
                                slidesPerView: r.slidesPerView.horizontalSwiper.tablet
                            }, t[r.breakPointSmall] = {
                                slidesPerView: r.slidesPerView.horizontalSwiper.mobile
                            }, t)
                        }, r.OPSwiperOption = {
                            slidesPerView: r.slidesPerView.OPSwiper.desktop,
                            spaceBetween: 23,
                            noSwiping: !0,
                            watchOverflow: !0,
                            autoResize: !1,
                            navigation: {
                                prevEl: "#ops-swiper-prev",
                                nextEl: "#ops-swiper-next"
                            },
                            breakpoints: (o = {}, o[r.breakPointMedium] = {
                                slidesPerView: r.slidesPerView.OPSwiper.tablet,
                                spaceBetween: 21
                            }, o[r.breakGallerySmall] = {
                                autoResize: !1,
                                slidesPerView: r.slidesPerView.OPSwiper.mobile,
                                spaceBetween: 19
                            }, o)
                        }, r.keyProductInfoResult = {}, r.mainImageIndex = 0, r.websiteCode = "", r
                    }
                    return K(t, e), t.prototype.created = function() {
                        var e = this;
                        this.websiteCode = Object(H.b)(this.$route.params.region), this.verticalSwiperOption.on = {
                            init: function() {
                                e.verticalSwiperShow = !0
                            }
                        }, this.horizontalSwiperOption.on = {
                            init: function() {
                                e.horizontalSwiperShow = !0
                            }
                        }, this.OPSwiperOption.on = {
                            init: function() {
                                e.OPSwiperShow = !0
                            }
                        }
                    }, t.prototype.mounted = function() {
                        var e = this;
                        this.reloadSource(), this.$nextTick((function() {
                            e.OPSwiperShow = !0
                        }))
                    }, Object.defineProperty(t.prototype, "getCurrentColorProductImageArray", {
                        get: function() {
                            var e, t = this;
                            return (e = this.colorCodePicked ? this.keyProductInfoResult.GalleryList.find((function(e) {
                                return e.ColorCode === t.colorCodePicked
                            })) : this.keyProductInfoResult.GalleryList && this.keyProductInfoResult.GalleryList.length > 0 ? this.keyProductInfoResult.GalleryList[0] : {}).ImageList && e.ImageList.length > 0 ? e.ImageList : []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ecInfoProductCard", {
                        get: function() {
                            return this.keyProductInfoResult.ProductCard
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isShowPrice", {
                        get: function() {
                            return "" !== this.ecInfoProductCard.Price
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "productImageNumber", {
                        get: function() {
                            return this.getCurrentColorProductImageArray ? this.getCurrentColorProductImageArray.length : 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "OPSwiperSlidesPerView", {
                        get: function() {
                            return this.slidesPerView.OPSwiper[this.rwdState]
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.reloadSource = function() {
                        this.rwdWidth > this.breakPointMedium ? (this.rwdState = "desktop", this.moveThumbnailWidth = 103) : this.rwdWidth > this.breakPointSmall ? (this.rwdState = "tablet", this.moveThumbnailWidth = 95) : (this.rwdState = "mobile", this.moveThumbnailWidth = 71)
                    }, t.prototype.setKeyProductInfoData = function() {
                        var e = this;
                        if (this.keyProductInfoResult = m()(this.getKeyProductInfoDataGetter), this.keyProductInfoResult && this.keyProductInfoResult.GalleryList) {
                            "" === this.colorCodePicked && this.keyProductInfoResult.GalleryList && this.keyProductInfoResult.GalleryList.length > 0 && (this.colorCodePicked = this.keyProductInfoResult.GalleryList[0].ColorCode);
                            var t = [],
                                o = [];
                            "R" === this.ProductID.toString().split("")[0] ? 1 === this.keyProductInfoResult.ProductCard.ModelBaseFlag ? t.push(this.keyProductInfoResult.ProductCard.RealProductID) : o.push(this.keyProductInfoResult.ProductCard.PartNo) : t.push(this.ProductID), this.$nextTick((function() {
                                if (e.websiteCode) {
                                    var r = void 0;
                                    r = void 0 === E.a.get("groupid_asus_" + e.websiteCode) ? "" : E.a.get("groupid_asus_" + e.websiteCode), e.dispatchPDPriceList({
                                        params: {
                                            SystemCode: "asus",
                                            WebsiteCode: e.websiteCode,
                                            ProductId: t.join(),
                                            ROGProduct: o.join(),
                                            group_id: r
                                        }
                                    })
                                }
                            }))
                        }
                    }, t.prototype.setPriceIdList = function() {
                        if (this.getPDPriceList.ProductList && this.getPDPriceList.ProductList.length > 0 && this.keyProductInfoResult.ProductCard) {
                            var e = this.getPDPriceList.ProductList;
                            "" !== e[0].Price && 0 !== e[0].Price || (this.keyProductInfoResult.ECInfoFlag = 0), this.$set(this.keyProductInfoResult, "ProductCard", Y(Y({}, this.keyProductInfoResult.ProductCard), {
                                Price: e[0] && "" !== e[0].Price ? e[0].Price : "",
                                Discount: e[0] && "" !== e[0].Discount ? e[0].Discount : "",
                                RegularPrice: !e[0] || "" !== e[0].Regular_Price && "" !== e[0].Discount ? e[0].Regular_Price : "",
                                Buy: Y(Y({}, this.keyProductInfoResult.ProductCard.Buy), {
                                    Link: e[0] && "" === e[0].Price ? "" : e[0].BuyLink,
                                    Text: e[0] && "" === e[0].Price ? "" : e[0].BuyText
                                })
                            }))
                        }
                    }, t.prototype.sendGA = function(data) {
                        this.gaDataLayerPush({
                            event: "data_layer_event",
                            event_category_DL: "buttons",
                            event_action_DL: "clicked",
                            event_label_DL: this.ecInfoProductCard.ProductName + "/" + (data ? "Add to comparison" : "Move out off comparison") + " -" + this.ecInfoProductCard.AddToCompare,
                            event_value_DL: "0"
                        }), this.gaHmtPush(["_trackEvent", "buttons", "clicked", this.ecInfoProductCard.ProductName + "/" + (data ? "Add to comparison" : "Move out off comparison") + " -" + this.ecInfoProductCard.AddToCompare])
                    }, t.prototype.sendSwitchImageGA = function(e) {
                        this.gaDataLayerPush({
                            event: "data_layer_event",
                            event_category_DL: "images",
                            event_action_DL: "switched",
                            event_label_DL: "" + e,
                            event_value_DL: "0"
                        })
                    }, t.prototype.openWindow = function(e) {
                        window.open(e, "_self")
                    }, t.prototype.redirect = function() {
                        try {
                            var e = Object(H.a)(this.$route.params.region),
                                t = this.$route.params.levelOneTopMenuName ? "/" + this.$route.params.levelOneTopMenuName : "",
                                o = this.$route.params.levelTwoProductLineName ? "/" + this.$route.params.levelTwoProductLineName : "",
                                r = this.$route.params.productModel ? "/" + this.$route.params.productModel : "",
                                n = this.$route.params.seriesName ? "/" + this.$route.params.seriesName : "";
                            window.location.href = "" + e + t + o + n + r + "/where-to-buy"
                        } catch (e) {}
                    }, t.prototype.openGallery = function(e) {
                        var t = this;
                        this.isClick = !0, this.$nextTick((function() {
                            t.$refs.lightbox && t.$refs.lightbox.showImage(e)
                        }))
                    }, t.prototype.selectMainImage = function(e, t) {
                        (e < 0 && (e = 0), e >= this.getCurrentColorProductImageArray.length && (e = this.getCurrentColorProductImageArray.length - 1), document.getElementById("galleryThumbnails")) && (document.getElementById("galleryThumbnails").scrollLeft = e * this.moveThumbnailWidth);
                        this.sendSwitchImageGA(t), this.mainImageIndex = e
                    }, t.prototype.colorSelectorPick = function(e) {
                        this.colorCodePicked = e, this.gaDataLayerPush({
                            event: "data_layer_event",
                            event_category_DL: "buttons",
                            event_action_DL: "clicked",
                            event_label_DL: this.keyProductInfoResult.ProductCard.ProductName + "/" + e,
                            event_value_DL: "0"
                        })
                    }, U([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), U([Object(l.Getter)("getKeyProductInfoDataGetter")], t.prototype, "getKeyProductInfoDataGetter", void 0), U([Object(l.Getter)("productTabListGetter")], t.prototype, "productTabList", void 0), U([Object(l.Getter)("PDPriceListGetter")], t.prototype, "getPDPriceList", void 0), U([Object(l.Action)("getPDPriceList")], t.prototype, "dispatchPDPriceList", void 0), U([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), U([Object(l.Prop)()], t.prototype, "showCompareBtn", void 0), U([Object(l.Prop)()], t.prototype, "defLevelId", void 0), U([Object(l.Prop)()], t.prototype, "ProductID", void 0), U([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), U([Object(l.Watch)("getKeyProductInfoDataGetter", {
                        immediate: !0
                    })], t.prototype, "setKeyProductInfoData", null), U([Object(l.Watch)("getPDPriceList")], t.prototype, "setPriceIdList", null), t = U([Object(l.Component)({
                        components: {
                            Lightbox: N,
                            CompareCheckBox: w.a,
                            ColorSelector: z.a
                        }
                    })], t)
                }(Object(l.mixins)(_.a)),
                J = o(917);
            var X = Object(D.a)(Z, (function() {
                    var e, t = this,
                        r = t.$createElement,
                        n = t._self._c || r;
                    return t.keyProductInfoResult ? n("div", {
                        class: [t.$style.galleryShow, t.$style["theme" + t.themeColor]]
                    }, [1 === t.keyProductInfoResult.ECInfoFlag ? n("div", {
                        class: t.$style.galleryShowHasECInfo
                    }, [n("div", {
                        class: t.$style["row-main"]
                    }, [n("div", {
                        class: t.$style["col-1"]
                    }, [t.getCurrentColorProductImageArray && t.getCurrentColorProductImageArray.length > 0 ? n("div", {
                        class: t.$style.verticalCarouselContainer
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.verticalSwiperShow,
                            expression: "verticalSwiperShow"
                        }, {
                            name: "swiper",
                            rawName: "v-swiper:verticalSwiper",
                            value: t.verticalSwiperOption,
                            expression: "verticalSwiperOption",
                            arg: "verticalSwiper"
                        }],
                        class: t.$style.swiperContent
                    }, [n("div", {
                        staticClass: "swiper-wrapper",
                        class: t.$style.swiperWrapper
                    }, t._l(t.getCurrentColorProductImageArray, (function(image, e) {
                        var o;
                        return n("div", {
                            key: e,
                            staticClass: "swiper-slide",
                            class: [t.$style.swiperSlide, t.$style["theme" + t.themeColor], (o = {}, o[t.$style.thumbnailImgActive] = e === t.mainImageIndex, o)],
                            on: {
                                mouseover: function(o) {
                                    "desktop" === t.rwdState && t.selectMainImage(e, image.Img)
                                }
                            }
                        }, [n("img", {
                            attrs: {
                                src: image.Thumb,
                                alt: image.ImageAlt
                            }
                        })])
                    })), 0)]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.verticalSwiperShow,
                            expression: "verticalSwiperShow"
                        }],
                        class: t.$style.verticalSwiperButtonPrev,
                        attrs: {
                            id: "vertical-swiper-prev"
                        }
                    }), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.verticalSwiperShow,
                            expression: "verticalSwiperShow"
                        }],
                        class: t.$style.verticalSwiperButtonNext,
                        attrs: {
                            id: "vertical-swiper-next"
                        }
                    })]) : t._e()]), t._v(" "), n("div", {
                        class: t.$style["col-2"]
                    }, [n("div", {
                        class: t.$style.chooseWrap
                    }, [n("div", {
                        class: [t.$style.searchIcon, t.$style["theme" + t.themeColor]]
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "18",
                            fill: "none",
                            viewBox: "0 0 15 18",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        },
                        on: {
                            click: function(e) {
                                return t.openGallery(t.mainImageIndex)
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            stroke: "#4D4D4D",
                            "stroke-linecap": "round",
                            "stroke-width": "1.2",
                            d: "M10.672 12.172L13.5 15m-1.457-6.729a5.272 5.272 0 11-10.543 0 5.272 5.272 0 0110.543 0z"
                        }
                    })])]), t._v(" "), "desktop" === t.rwdState || "tablet" === t.rwdState ? n("div", {
                        class: t.$style.chooseColor
                    }, [n("ColorSelector", {
                        attrs: {
                            colorList: t.keyProductInfoResult.GalleryList,
                            colorCodePicked: t.colorCodePicked
                        },
                        on: {
                            changeColorPick: t.colorSelectorPick
                        }
                    })], 1) : t._e()]), t._v(" "), n("div", {
                        class: t.$style.currentImage,
                        on: {
                            click: function(e) {
                                return t.openGallery(t.mainImageIndex)
                            }
                        }
                    }, [t.getCurrentColorProductImageArray[t.mainImageIndex] && t.getCurrentColorProductImageArray[t.mainImageIndex].ImgPath ? n("img", {
                        attrs: {
                            src: t.getCurrentColorProductImageArray[t.mainImageIndex].PreviewImg,
                            alt: t.getCurrentColorProductImageArray[t.mainImageIndex] ? t.getCurrentColorProductImageArray[t.mainImageIndex].ImageAlt : ""
                        }
                    }) : t._e()]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.getCurrentColorProductImageArray && t.getCurrentColorProductImageArray.length > 0 && ("tablet" === t.rwdState || "mobile" === t.rwdState),
                            expression: "\n      getCurrentColorProductImageArray &&\n      getCurrentColorProductImageArray.length > 0 &&\n      (rwdState === 'tablet' || rwdState === 'mobile')\n     "
                        }],
                        class: t.$style.horizontalCarouselContainer
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.horizontalSwiperShow,
                            expression: "horizontalSwiperShow"
                        }, {
                            name: "swiper",
                            rawName: "v-swiper:horizontalSwiper",
                            value: t.horizontalSwiperOption,
                            expression: "horizontalSwiperOption",
                            arg: "horizontalSwiper"
                        }],
                        class: t.$style.swiperContent
                    }, [n("div", {
                        staticClass: "swiper-wrapper",
                        class: t.$style.swiperWrapper
                    }, t._l(t.getCurrentColorProductImageArray, (function(image, e) {
                        var o;
                        return n("div", {
                            key: e,
                            staticClass: "swiper-slide",
                            class: [t.$style.swiperSlide, t.$style["theme" + t.themeColor], (o = {}, o[t.$style.thumbnailImgActive] = e === t.mainImageIndex, o)],
                            on: {
                                click: function(o) {
                                    ("tablet" === t.rwdState || "mobile" === t.rwdState) && t.selectMainImage(e, image.ImgPath)
                                }
                            }
                        }, [n("img", {
                            attrs: {
                                src: image.Thumb,
                                alt: image.ImageAlt
                            }
                        })])
                    })), 0)]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.horizontalSwiperShow,
                            expression: "horizontalSwiperShow"
                        }],
                        class: t.$style.swiperButtonPrev,
                        attrs: {
                            id: "horizontal-swiper-prev"
                        }
                    }), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.horizontalSwiperShow,
                            expression: "horizontalSwiperShow"
                        }],
                        class: t.$style.swiperButtonNext,
                        attrs: {
                            id: "horizontal-swiper-next"
                        }
                    })]), t._v(" "), "mobile" === t.rwdState ? n("div", {
                        class: t.$style.mobileChooseColor
                    }, [n("ColorSelector", {
                        attrs: {
                            colorList: t.keyProductInfoResult.GalleryList,
                            colorCodePicked: t.colorCodePicked
                        },
                        on: {
                            changeColorPick: t.colorSelectorPick
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        class: t.$style.choose3dOrAr,
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("div", [n("svg", {
                        attrs: {
                            viewBox: "0 0 28 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M14.266 1.076a.75.75 0 00-.626 0L1.458 6.672a.75.75 0 00-.437.682v13.499a.75.75 0 00.422.674l12.182 5.926c.207.101.45.101.656 0l12.182-5.926a.75.75 0 00.422-.674V7.354a.75.75 0 00-.437-.681L14.266 1.075zM2.521 8.882v11.501l10.682 5.197v-7.02h1.5v7.02l10.682-5.197v-11.5l-4.407 2.143-.629-1.362 4.38-2.13-10.776-4.952L3.178 7.533l4.38 2.13-.63 1.363-4.407-2.144z",
                            fill: "#999"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M11.583 14.626l.666 2.086h1.442L11.3 9.352H9.585l-2.36 7.36h1.388l.633-2.086h2.337zm-2.119-1.015l.568-1.813c.132-.437.24-.95.35-1.376h.022c.109.425.23.928.371 1.376l.579 1.813h-1.89zM14.715 16.712h1.332v-3.025h.677c.765.022 1.114.328 1.322 1.289.207.917.382 1.518.491 1.736h1.387c-.152-.284-.349-1.135-.578-2.053-.186-.71-.503-1.223-1.027-1.42v-.032c.688-.252 1.332-.896 1.332-1.846 0-.623-.229-1.136-.633-1.475-.492-.415-1.212-.59-2.272-.59-.775 0-1.529.066-2.031.154v7.262zm1.332-6.334c.131-.033.404-.066.83-.066.874 0 1.442.372 1.442 1.18 0 .732-.568 1.212-1.474 1.212h-.798v-2.326z",
                            fill: "#999"
                        }
                    })]), t._v(" "), n("span", {
                        class: t.$style.text
                    }, [t._v(" View on your table ")])]), t._v(" "), n("div", [n("svg", {
                        attrs: {
                            viewBox: "0 0 33 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.088 14.712a24.34 24.34 0 011.24-.307v1.538a22 22 0 00-.84.214c-1.263.35-2.233.754-2.87 1.17-.667.437-.79.764-.79.92 0 .152.09.418.542.777.445.352 1.139.708 2.077 1.038 1.87.656 4.542 1.145 7.657 1.348a.75.75 0 01-.097 1.497c-3.197-.208-6.014-.713-8.056-1.43-1.017-.357-1.884-.78-2.512-1.277-.62-.491-1.112-1.143-1.112-1.952 0-.942.683-1.66 1.47-2.176.82-.536 1.956-.99 3.291-1.36zm20.259 1.445c-.324-.09-.664-.175-1.02-.256v-1.536c.499.107.973.223 1.42.347 1.336.37 2.471.824 3.291 1.36.788.515 1.47 1.234 1.47 2.176 0 .941-.682 1.66-1.47 2.176-.82.535-1.955.99-3.29 1.36-2.474.685-5.777 1.122-9.41 1.186l.668.748a.75.75 0 11-1.118.999l-1.716-1.921-.438-.491.43-.499 1.715-1.99a.75.75 0 011.136.98l-.579.671c3.49-.07 6.615-.492 8.911-1.129 1.264-.35 2.234-.754 2.87-1.17.668-.437.792-.764.792-.92 0-.157-.124-.484-.792-.92-.636-.417-1.606-.82-2.87-1.17z",
                            fill: "#999"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M9.192 16.558c.455.299 1.34.585 2.366.585 2.093 0 3.29-1.131 3.29-2.561-.014-1.144-.833-1.911-1.86-2.106v-.026c1.04-.364 1.56-1.092 1.56-1.976 0-1.105-.884-2.067-2.639-2.067-1 0-1.95.325-2.43.65l.363 1.157c.351-.234 1.04-.533 1.73-.533.935 0 1.351.48 1.351 1.066 0 .832-.936 1.17-1.664 1.17h-.728v1.17h.728c.975 0 1.924.429 1.924 1.43 0 .663-.48 1.352-1.703 1.352-.806 0-1.599-.325-1.924-.52l-.364 1.209zM16.565 16.974c.533.065 1.235.117 2.158.117 1.703 0 3.094-.403 3.965-1.196.832-.754 1.365-1.911 1.365-3.484 0-1.482-.52-2.535-1.378-3.224-.806-.676-1.924-1.014-3.562-1.014-.949 0-1.833.078-2.548.182v8.619zm1.6-7.462c.233-.052.584-.091 1.091-.091 2.002 0 3.12 1.118 3.107 3.042 0 2.223-1.235 3.38-3.315 3.367-.325 0-.663 0-.884-.04V9.513z",
                            fill: "#999"
                        }
                    })]), t._v(" "), n("span", {
                        class: t.$style.text
                    }, [t._v(" View the model in 3D ")])])])]), t._v(" "), n("div", {
                        class: [t.$style["col-3"], t.$style["theme" + t.themeColor]]
                    }, [t.ecInfoProductCard ? n("div", {
                        class: t.$style.productInfo
                    }, [n("div", {
                        class: [t.$style.heading, t.$style["theme" + t.themeColor]]
                    }, [t._v("\n      " + t._s(t.ecInfoProductCard.ProductName) + "\n     ")]), t._v(" "), t.productTabList.ExternalID ? n("div", {
                        class: ["bazaaRatingSummary", t.$style.bazaaGalleryRating, "theme" + t.themeColor],
                        attrs: {
                            "data-bv-show": "rating_summary",
                            "data-bv-product-id": t.productTabList.ExternalID
                        }
                    }) : t._e(), t._v(" "), n("div", {
                        class: t.$style["row-star"],
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            "data-stars": "3"
                        }
                    }, [t._l(5, (function(e, o) {
                        return n("div", {
                            key: o,
                            class: t.$style.starIconWrap
                        }, [n("svg", {
                            attrs: {
                                viewBox: "0 0 14 14",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                "svg-inline": "",
                                role: "presentation",
                                focusable: "false",
                                tabindex: "-1"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M7.016.611l1.572 4.837h5.087L9.56 8.438l1.572 4.836-4.116-2.989-4.115 2.99 1.572-4.837-4.116-2.99h5.087L7.016.611z",
                                fill: "#FBBB00"
                            }
                        })])])
                    })), t._v(" "), n("span", {
                        class: [t.$style.starInfo, t.$style["theme" + t.themeColor]]
                    }, [t._v("\n       " + t._s(t.ecInfoProductCard.ReviewStar) + "\n       "), t.ecInfoProductCard.ReviewCount ? [t._v("\n        " + t._s("(" + t.ecInfoProductCard.ReviewCount + ")") + "\n       ")] : t._e()], 2)], 2), t._v(" "), n("div", {
                        class: [t.$style.info, t.isShowPrice ? [] : [t.$style.hideInfo], t.$style["theme" + t.themeColor]]
                    }, [t._v("\n      " + t._s(t.ecInfoProductCard.StartingAtWording) + "\n     ")]), t._v(" "), "global" !== t.websiteCode ? n("div", {
                        class: t.$style["row-price"]
                    }, [n("div", {
                        class: [t.$style.price, t.isShowPrice ? [] : [t.$style.hidePrice]],
                        style: {
                            color: t.ecInfoProductCard.PriceColor
                        }
                    }, [t._v("\n       " + t._s(t.ecInfoProductCard.Price) + "\n      ")]), t._v(" "), "" !== t.ecInfoProductCard.Price ? n("div", {
                        class: [t.$style.priceRow, t.isShowPrice ? [] : [t.$style.hidePrice]]
                    }, ["" !== t.ecInfoProductCard.Discount ? n("div", {
                        class: t.$style.regularPrice,
                        style: {
                            color: t.ecInfoProductCard.PriceColor
                        }
                    }, [t._v("\n        " + t._s(t.ecInfoProductCard.RegularPrice) + "\n       ")]) : t._e(), t._v(" "), t.ecInfoProductCard.Discount ? n("div", {
                        class: t.$style.save,
                        style: {
                            color: t.ecInfoProductCard.DiscountColor
                        }
                    }, [t._v("\n        " + t._s(t.ecInfoProductCard.DiscountWording) + t._s(" ") + t._s(t.ecInfoProductCard.Discount) + "\n       ")]) : t._e()]) : t._e()]) : t._e(), t._v(" "), n("div", {
                        class: [t.$style.info, t.$style["theme" + t.themeColor]],
                        staticStyle: {
                            display: "none"
                        }
                    }, [t._v("\n      " + t._s(t.ecInfoProductCard.EndTimeWording) + "\n      "), t.ecInfoProductCard.EndTimeWording && t.ecInfoProductCard.EndTime ? [t._v("\n       :\n      ")] : t._e(), t._v("\n      " + t._s(t.ecInfoProductCard.EndTime) + "\n      "), n("img", {
                        class: t.$style.bell,
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            src: o(913),
                            alt: "bell icon"
                        }
                    })], 2), t._v(" "), n("div", {
                        class: [t.$style.info, t.$style["theme" + t.themeColor]],
                        staticStyle: {
                            display: "none"
                        }
                    }, [t._v("\n      " + t._s(t.ecInfoProductCard.Notice) + "\n     ")]), t._v(" "), "" !== t.ecInfoProductCard.Buy.Link ? n("div", {
                        class: t.$style.primaryBtnGroup
                    }, [n("button", {
                        class: t.$style.button,
                        on: {
                            click: function(e) {
                                t.gaDataLayerPush({
                                    event: "data_layer_event",
                                    event_category_DL: "buttons",
                                    event_action_DL: "clicked",
                                    event_label_DL: t.ecInfoProductCard.ProductName + "/buyButton-" + t.ecInfoProductCard.Buy.Text,
                                    event_value_DL: "0"
                                }), t.gaHmtPush(["_trackEvent", "buttons", "clicked", t.ecInfoProductCard.ProductName + "/buyButton-" + t.ecInfoProductCard.Buy.Text]), t.openWindow(t.ecInfoProductCard.Buy.Link)
                            }
                        }
                    }, [t._v("\n       " + t._s(t.ecInfoProductCard.Buy.Text) + "\n      ")]), t._v(" "), n("div", {
                        class: t.$style.loveIcon,
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M11.47 6.121l.53.53.53-.53 1.001-1c1.203-1.203 2.922-1.64 4.573-1.21 4.524 1.338 5.29 6.238 2.574 8.955l-.7.7L12 21.541l-7.977-7.975-.7-.7c-2.718-2.717-1.95-7.617 2.573-8.954 1.65-.43 3.37.006 4.573 1.209l1 1z",
                            stroke: "#006ce1",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10"
                        }
                    })])])]) : t._e(), t._v(" "), "" === t.ecInfoProductCard.Buy.Link && 0 !== t.ecInfoProductCard.WhereToBuy.WTBFlag ? n("div", {
                        class: t.$style.primaryBtnGroup
                    }, [n("button", {
                        class: t.$style.button,
                        on: {
                            click: function(e) {
                                t.gaDataLayerPush({
                                    event: "data_layer_event",
                                    event_category_DL: "buttons",
                                    event_action_DL: "clicked",
                                    event_label_DL: t.ecInfoProductCard.ProductName + "/whereToBuy-" + t.ecInfoProductCard.WhereToBuy.Text,
                                    event_value_DL: "0"
                                }), t.gaHmtPush(["_trackEvent", "buttons", "clicked", t.ecInfoProductCard.ProductName + "/whereToBuy-" + t.ecInfoProductCard.WhereToBuy.Text]), t.redirect()
                            }
                        }
                    }, [t._v("\n       " + t._s(t.ecInfoProductCard.Buy.Text) + "\n      ")])]) : t._e(), t._v(" "), 0 !== t.ecInfoProductCard.WhereToBuy.WTBFlag ? n("button", {
                        class: [t.$style.secondaryBtn, t.$style["theme" + t.themeColor]],
                        on: {
                            click: function(e) {
                                t.gaDataLayerPush({
                                    event: "data_layer_event",
                                    event_category_DL: "buttons",
                                    event_action_DL: "clicked",
                                    event_label_DL: t.ecInfoProductCard.ProductName + "/whereToBuy-" + t.ecInfoProductCard.WhereToBuy.Text,
                                    event_value_DL: "0"
                                }), t.gaHmtPush(["_trackEvent", "buttons", "clicked", t.ecInfoProductCard.ProductName + "/whereToBuy-" + t.ecInfoProductCard.WhereToBuy.Text]), t.redirect()
                            }
                        }
                    }, [t._v("\n      " + t._s(t.ecInfoProductCard.WhereToBuy.Text) + "\n     ")]) : t._e(), t._v(" "), t.showCompareBtn ? n("CompareCheckBox", {
                        class: t.$style.addToCompare,
                        attrs: {
                            ProductID: t.ProductID,
                            LevelId: t.defLevelId
                        },
                        on: {
                            gaClickTrigger: t.sendGA
                        }
                    }, [n("span", {
                        class: [t.$style.text, t.$style["theme" + t.themeColor]]
                    }, [t._v("\n       " + t._s(t.ecInfoProductCard.AddToCompare) + "\n      ")])]) : t._e()], 1) : t._e()])]), t._v(" "), n("div", {
                        class: t.$style["row-download"],
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("button", {
                        class: t.$style.downloadBtn
                    }, [n("span", [t._v("Product Warranty")]), t._v(" "), n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M16.5 9L12 13.5 7.5 9",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M12 12.75V3",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M3.75 12.75v6h16.5v-6",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), t._v(" "), n("button", {
                        class: t.$style.downloadBtn
                    }, [n("span", [t._v("Product Guide")]), t._v(" "), n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M16.5 9L12 13.5 7.5 9",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M12 12.75V3",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M3.75 12.75v6h16.5v-6",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), t._v(" "), n("button", {
                        class: t.$style.downloadBtn
                    }, [n("span", [t._v("Data Sheet")]), t._v(" "), n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M16.5 9L12 13.5 7.5 9",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M12 12.75V3",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M3.75 12.75v6h16.5v-6",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])])]) : n("div", {
                        class: t.$style.galleryShowNormal
                    }, [n("div", {
                        class: t.$style.imgContainer
                    }, [n("div", {
                        class: [t.$style.searchIcon, t.$style["theme" + t.themeColor]]
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "18",
                            fill: "none",
                            viewBox: "0 0 15 18",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        },
                        on: {
                            click: function(e) {
                                return t.openGallery(t.mainImageIndex)
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            stroke: "#4D4D4D",
                            "stroke-linecap": "round",
                            "stroke-width": "1.2",
                            d: "M10.672 12.172L13.5 15m-1.457-6.729a5.272 5.272 0 11-10.543 0 5.272 5.272 0 0110.543 0z"
                        }
                    })])]), t._v(" "), "desktop" === t.rwdState || "tablet" === t.rwdState ? n("div", {
                        class: t.$style.chooseColor
                    }, [n("ColorSelector", {
                        attrs: {
                            colorList: t.keyProductInfoResult.GalleryList,
                            colorCodePicked: t.colorCodePicked
                        },
                        on: {
                            changeColorPick: t.colorSelectorPick
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        class: t.$style.currentImageWrap,
                        on: {
                            click: function(e) {
                                return t.openGallery(t.mainImageIndex)
                            }
                        }
                    }, [n("picture", [t.getCurrentColorProductImageArray[t.mainImageIndex] && t.getCurrentColorProductImageArray[t.mainImageIndex].PreviewImg.includes("/gain/") ? n("source", {
                        attrs: {
                            type: "image/webp",
                            srcset: t.getCurrentColorProductImageArray[t.mainImageIndex].PreviewImg + "/fwebp"
                        }
                    }) : t._e(), t._v(" "), t.getCurrentColorProductImageArray[t.mainImageIndex] && t.getCurrentColorProductImageArray[t.mainImageIndex].PreviewImg.includes("/media/Odin/") ? n("source", {
                        attrs: {
                            type: "image/webp",
                            srcset: t.getCurrentColorProductImageArray[t.mainImageIndex].PreviewImg + "?webp"
                        }
                    }) : t._e(), t._v(" "), n("img", {
                        attrs: {
                            src: t.getCurrentColorProductImageArray[t.mainImageIndex] ? t.getCurrentColorProductImageArray[t.mainImageIndex].PreviewImg : "",
                            alt: t.getCurrentColorProductImageArray[t.mainImageIndex] ? t.getCurrentColorProductImageArray[t.mainImageIndex].ImageAlt : ""
                        }
                    })])])]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.getCurrentColorProductImageArray && t.getCurrentColorProductImageArray.length > 0,
                            expression: "\n    getCurrentColorProductImageArray &&\n    getCurrentColorProductImageArray.length > 0\n   "
                        }],
                        class: [t.$style.galleryThumbnailsContainer, t.$style["theme" + t.themeColor]]
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.OPSwiperShow,
                            expression: "OPSwiperShow"
                        }],
                        class: t.$style.galleryThumbnails,
                        attrs: {
                            id: "galleryThumbnails"
                        }
                    }, [n("div", {
                        staticClass: "thumbnails-wrapper",
                        class: [t.$style.swiperWrapper, (e = {}, e[t.$style.fewImages] = t.productImageNumber < t.OPSwiperSlidesPerView, e)]
                    }, t._l(t.getCurrentColorProductImageArray, (function(image, e) {
                        var o;
                        return n("div", {
                            key: e,
                            staticClass: "thumbnails-slide",
                            class: [t.$style.thumbnailsSlide, t.$style["theme" + t.themeColor], (o = {}, o[t.$style.thumbnailActive] = e === t.mainImageIndex, o)],
                            on: {
                                click: function(o) {
                                    return t.selectMainImage(e, image.ImgPath)
                                }
                            }
                        }, [n("picture", [image && image.Thumb.includes("/gain/") ? n("source", {
                            attrs: {
                                type: "image/webp",
                                srcset: image.Thumb + "/fwebp"
                            }
                        }) : t._e(), t._v(" "), image && image.Thumb.includes("/media/Odin/") ? n("source", {
                            attrs: {
                                type: "image/webp",
                                srcset: image.Thumb + "?webp"
                            }
                        }) : t._e(), t._v(" "), n("img", {
                            attrs: {
                                src: image.Thumb,
                                alt: image.ImageAlt
                            }
                        })])])
                    })), 0)]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.OPSwiperShow,
                            expression: "OPSwiperShow"
                        }],
                        class: [t.$style.thumbnailsButtonPrev, t.$style["theme" + t.themeColor]],
                        attrs: {
                            id: "ops-thumbnails-prev"
                        },
                        on: {
                            click: function(e) {
                                t.selectMainImage(t.mainImageIndex - 1, t.getCurrentColorProductImageArray[t.mainImageIndex].ImgPath)
                            }
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "16",
                            height: "28",
                            viewBox: "0 0 16 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M14.5 27l-13-13 13-13",
                            stroke: "#818181",
                            "stroke-width": "2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.OPSwiperShow,
                            expression: "OPSwiperShow"
                        }],
                        class: [t.$style.thumbnailsButtonNext, t.$style["theme" + t.themeColor]],
                        attrs: {
                            id: "ops-thumbnails-next"
                        },
                        on: {
                            click: function(e) {
                                t.selectMainImage(t.mainImageIndex + 1, t.getCurrentColorProductImageArray[t.mainImageIndex].ImgPath)
                            }
                        }
                    }, [n("svg", {
                        attrs: {
                            width: "16",
                            height: "28",
                            viewBox: "0 0 16 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M1.5 1l13 13-13 13",
                            stroke: "#818181",
                            "stroke-width": "2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])]), t._v(" "), "mobile" === t.rwdState ? n("div", {
                        class: t.$style.mobileChooseColor
                    }, [n("ColorSelector", {
                        attrs: {
                            colorList: t.keyProductInfoResult.GalleryList,
                            colorCodePicked: t.colorCodePicked
                        },
                        on: {
                            changeColorPick: t.colorSelectorPick
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        class: t.$style.choose3dOrAr,
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("div", [n("svg", {
                        attrs: {
                            viewBox: "0 0 28 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M14.266 1.076a.75.75 0 00-.626 0L1.458 6.672a.75.75 0 00-.437.682v13.499a.75.75 0 00.422.674l12.182 5.926c.207.101.45.101.656 0l12.182-5.926a.75.75 0 00.422-.674V7.354a.75.75 0 00-.437-.681L14.266 1.075zM2.521 8.882v11.501l10.682 5.197v-7.02h1.5v7.02l10.682-5.197v-11.5l-4.407 2.143-.629-1.362 4.38-2.13-10.776-4.952L3.178 7.533l4.38 2.13-.63 1.363-4.407-2.144z",
                            fill: "#999"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M11.583 14.626l.666 2.086h1.442L11.3 9.352H9.585l-2.36 7.36h1.388l.633-2.086h2.337zm-2.119-1.015l.568-1.813c.132-.437.24-.95.35-1.376h.022c.109.425.23.928.371 1.376l.579 1.813h-1.89zM14.715 16.712h1.332v-3.025h.677c.765.022 1.114.328 1.322 1.289.207.917.382 1.518.491 1.736h1.387c-.152-.284-.349-1.135-.578-2.053-.186-.71-.503-1.223-1.027-1.42v-.032c.688-.252 1.332-.896 1.332-1.846 0-.623-.229-1.136-.633-1.475-.492-.415-1.212-.59-2.272-.59-.775 0-1.529.066-2.031.154v7.262zm1.332-6.334c.131-.033.404-.066.83-.066.874 0 1.442.372 1.442 1.18 0 .732-.568 1.212-1.474 1.212h-.798v-2.326z",
                            fill: "#999"
                        }
                    })]), t._v(" "), n("span", {
                        class: t.$style.text
                    }, [t._v("view on your table")])]), t._v(" "), n("div", [n("svg", {
                        attrs: {
                            viewBox: "0 0 33 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.088 14.712a24.34 24.34 0 011.24-.307v1.538a22 22 0 00-.84.214c-1.263.35-2.233.754-2.87 1.17-.667.437-.79.764-.79.92 0 .152.09.418.542.777.445.352 1.139.708 2.077 1.038 1.87.656 4.542 1.145 7.657 1.348a.75.75 0 01-.097 1.497c-3.197-.208-6.014-.713-8.056-1.43-1.017-.357-1.884-.78-2.512-1.277-.62-.491-1.112-1.143-1.112-1.952 0-.942.683-1.66 1.47-2.176.82-.536 1.956-.99 3.291-1.36zm20.259 1.445c-.324-.09-.664-.175-1.02-.256v-1.536c.499.107.973.223 1.42.347 1.336.37 2.471.824 3.291 1.36.788.515 1.47 1.234 1.47 2.176 0 .941-.682 1.66-1.47 2.176-.82.535-1.955.99-3.29 1.36-2.474.685-5.777 1.122-9.41 1.186l.668.748a.75.75 0 11-1.118.999l-1.716-1.921-.438-.491.43-.499 1.715-1.99a.75.75 0 011.136.98l-.579.671c3.49-.07 6.615-.492 8.911-1.129 1.264-.35 2.234-.754 2.87-1.17.668-.437.792-.764.792-.92 0-.157-.124-.484-.792-.92-.636-.417-1.606-.82-2.87-1.17z",
                            fill: "#999"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M9.192 16.558c.455.299 1.34.585 2.366.585 2.093 0 3.29-1.131 3.29-2.561-.014-1.144-.833-1.911-1.86-2.106v-.026c1.04-.364 1.56-1.092 1.56-1.976 0-1.105-.884-2.067-2.639-2.067-1 0-1.95.325-2.43.65l.363 1.157c.351-.234 1.04-.533 1.73-.533.935 0 1.351.48 1.351 1.066 0 .832-.936 1.17-1.664 1.17h-.728v1.17h.728c.975 0 1.924.429 1.924 1.43 0 .663-.48 1.352-1.703 1.352-.806 0-1.599-.325-1.924-.52l-.364 1.209zM16.565 16.974c.533.065 1.235.117 2.158.117 1.703 0 3.094-.403 3.965-1.196.832-.754 1.365-1.911 1.365-3.484 0-1.482-.52-2.535-1.378-3.224-.806-.676-1.924-1.014-3.562-1.014-.949 0-1.833.078-2.548.182v8.619zm1.6-7.462c.233-.052.584-.091 1.091-.091 2.002 0 3.12 1.118 3.107 3.042 0 2.223-1.235 3.38-3.315 3.367-.325 0-.663 0-.884-.04V9.513z",
                            fill: "#999"
                        }
                    })]), t._v(" "), n("span", {
                        class: t.$style.text
                    }, [t._v("View the model in 3D")])])]), t._v(" "), n("div", {
                        class: t.$style.downloadGroup,
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("button", {
                        class: t.$style.downloadBtn
                    }, [n("span", [t._v("Product Warranty")]), t._v(" "), n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M16.5 9L12 13.5 7.5 9",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M12 12.75V3",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M3.75 12.75v6h16.5v-6",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), t._v(" "), n("button", {
                        class: t.$style.downloadBtn
                    }, [n("span", [t._v("Product Guide")]), t._v(" "), n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M16.5 9L12 13.5 7.5 9",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M12 12.75V3",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M3.75 12.75v6h16.5v-6",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), t._v(" "), n("button", {
                        class: t.$style.downloadBtn
                    }, [n("span", [t._v("Data Sheet")]), t._v(" "), n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "svg-inline": "",
                            role: "presentation",
                            focusable: "false",
                            tabindex: "-1"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M16.5 9L12 13.5 7.5 9",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-miterlimit": "10",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M12 12.75V3",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M3.75 12.75v6h16.5v-6",
                            stroke: "#F5F5F5",
                            "stroke-width": "1.2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])])]), t._v(" "), t.isClick ? n("lightbox", {
                        ref: "lightbox",
                        attrs: {
                            images: t.getCurrentColorProductImageArray,
                            nThumbs: t.getCurrentColorProductImageArray.length,
                            "show-light-box": !0,
                            "rwd-width": t.rwdWidth
                        }
                    }) : t._e()], 1) : t._e()
                }), [], !1, (function(e) {
                    this.$style = J.default.locals || J.default
                }), null, null).exports,
                Q = o(594),
                ee = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                te = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                oe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return ee(t, e), te([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), te([Object(l.Getter)("PDFilesGetter")], t.prototype, "PDFilesGetter", void 0), t = te([Object(l.Component)({
                        components: {
                            BorderButton: Q.a
                        }
                    })], t)
                }(l.Vue),
                re = o(918);
            var ie = Object(D.a)(oe, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return e.PDFilesGetter && Object.keys(e.PDFilesGetter).length > 0 ? o("div", {
                        class: [e.$style.wrapper, e.$style["theme" + e.themeColor]]
                    }, [o("div", {
                        class: e.$style.container
                    }, e._l(e.PDFilesGetter, (function(button) {
                        return o("BorderButton", {
                            key: button.FileID,
                            class: [e.$style.borderButton, e.$style["theme" + e.themeColor]],
                            attrs: {
                                href: button.FilePath,
                                target: "_blank",
                                isDownload: !0
                            }
                        }, [e._v("\n      " + e._s(button.DisplayName) + "\n    ")])
                    })), 1)]) : e._e()
                }), [], !1, (function(e) {
                    this.$style = re.default.locals || re.default
                }), null, null).exports,
                ae = (o(60), o(53), o(584)),
                ne = o(759),
                se = o(597),
                le = o(605),
                ce = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                de = function() {
                    return (de = Object.assign || function(e) {
                        for (var s, i = 1, t = arguments.length; i < t; i++)
                            for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                        return e
                    }).apply(this, arguments)
                },
                ue = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                he = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.breakPointMedium = f.a.breakPointMedium ? parseInt(f.a.breakPointMedium, 10) : 1279, t.breakPointSmall = f.a.breakPointSmall ? parseInt(f.a.breakPointSmall, 10) : 731, t.rwdState = "", t.maxShowItem = 0, t
                    }
                    return ce(t, e), t.prototype.loadHeadingRow = function() {
                        this.isLoadHeadingRow && void 0 !== this.ProductCardResults.Recommends && this.getFieldHeight(this.ProductCardResults.Recommends, "recommendation")
                    }, t.prototype.reloadSource = function() {
                        void 0 !== this.ProductCardResults.Recommends && this.ProductCardResults.Recommends.length && (this.maxShowItem = this.ProductCardResults.Recommends.length), this.rwdWidth > this.breakPointMedium ? (this.rwdState = "desktop", this.maxShowItem > 12 && (this.maxShowItem = 12)) : this.rwdWidth > this.breakPointSmall ? (this.rwdState = "tablet", this.maxShowItem > 12 && (this.maxShowItem = 12)) : (this.rwdState = "mobile", this.maxShowItem > 8 && (this.maxShowItem = 8)), void 0 !== this.ProductCardResults.Recommends && this.checkHideProductCardContent(this.ProductCardResults.Recommends)
                    }, t.prototype.setProductCardResultsToData = function() {
                        if (this.ProductCardResults && this.ProductCardResults.Recommends && this.ProductCardResults.Recommends.length) {
                            var e = [];
                            this.ProductCardResults.Recommends && this.ProductCardResults.Recommends.length > 0 && this.ProductCardResults.Recommends.slice(0, 30).forEach((function(t, o) {
                                e.push({
                                    name: t.Name.replace(/<[^>]*>/g, ""),
                                    id: t.ProductID,
                                    dimension10: t.ProductID,
                                    price: t.Price,
                                    brand: "ASUS",
                                    category: t.Level1Path + "-" + t.Level2Path + "/" + t.CategoryName + "/" + t.Level3Path + "/" + (t.SubSeriesName ? t.SubSeriesName : "undefined"),
                                    list: "recommendation",
                                    position: o + 1
                                })
                            })), this.gaDataLayerPush({
                                event: "productImpression",
                                ecommerce: {
                                    currencyCode: this.loginInfoGetter.CurrencyCode,
                                    impressions: e
                                }
                            });
                            for (var t = [], o = [], i = 0; i < this.ProductCardResults.Recommends.length; i++) "R" === this.ProductCardResults.Recommends[i].ProductID.toString().split("")[0] ? 1 === this.ProductCardResults.Recommends[i].ModelBaseFlag ? t.push(this.ProductCardResults.Recommends[i].RealProductID) : o.push(this.ProductCardResults.Recommends[i].PartNo) : t.push(this.ProductCardResults.Recommends[i].ProductID);
                            if (this.websiteCode) {
                                var r = void 0;
                                r = void 0 === E.a.get("groupid_asus_" + this.websiteCode) ? "" : E.a.get("groupid_asus_" + this.websiteCode), this.dispatchPDPriceList({
                                    params: {
                                        SystemCode: "asus",
                                        WebsiteCode: this.websiteCode,
                                        ProductId: t.join(),
                                        ROGProduct: o.join(),
                                        group_id: r
                                    }
                                })
                            }
                        }
                        void 0 !== this.ProductCardResults.Recommends && this.checkHideProductCardContent(this.ProductCardResults.Recommends)
                    }, t.prototype.setPriceIdList = function() {
                        var e = this;
                        if (this.getPDPriceList.ProductList)
                            for (var t = function(i) {
                                    if (o.getPDPriceList.ProductList.length > 0) {
                                        var t = o.getPDPriceList.ProductList.filter((function(t) {
                                            return String(t.ProductID) === String(e.ProductCardResults.Recommends[i].ProductID) || String(t.ProductID) === String(e.ProductCardResults.Recommends[i].RealProductID) || String(t.ProductID) === String(e.ProductCardResults.Recommends[i].PartNo)
                                        }));
                                        o.$set(o.ProductCardResults.Recommends, i, de(de({}, o.ProductCardResults.Recommends[i]), {
                                            Price: t[0] && "" !== t[0].Price ? t[0].Price : "",
                                            Discount: t[0] && "" !== t[0].Discount ? t[0].Discount : "",
                                            RegularPrice: !t[0] || "" !== t[0].Regular_Price && "" !== t[0].Discount ? t[0].Regular_Price : "",
                                            Buy: de(de({}, o.ProductCardResults.Recommends[i].Buy), {
                                                Link: t[0] && "" === t[0].Price ? "" : t[0].BuyLink,
                                                Text: t[0] && "" === t[0].Price ? "" : t[0].BuyText
                                            })
                                        }))
                                    }
                                }, o = this, i = 0; i < this.ProductCardResults.Recommends.length; i++) t(i);
                        void 0 !== this.ProductCardResults.Recommends && (this.checkHideProductCardContent(this.ProductCardResults.Recommends), this.checkComplate())
                    }, t.prototype.checkComplate = function() {
                        var e = this,
                            t = 60,
                            o = setInterval((function() {
                                document && document.querySelectorAll(".recommendation .bv_numReviews_component_container").length === document.querySelectorAll(".recommendation .bazaaInlineRating").length && document.querySelectorAll(".recommendation .bazaaInlineRating").forEach((function(r, n) {
                                    r.offsetHeight > 12 || 0 == t ? (e.changeHeight(".bazaaInlineRating"), clearInterval(o)) : t -= 1
                                }))
                            }), 1e3)
                    }, t.prototype.changeHeight = function(e) {
                        var t = 0;
                        document.querySelectorAll(".recommendation .bazaaInlineRating").forEach((function(e, o) {
                            e.offsetHeight > 12 && (t = 32)
                        })), document.querySelectorAll(".recommendation .bazaaInlineRating").forEach((function(e, o) {
                            console.log("REC querySelectorAll" + t), e.style.height = t + "px", 0 == t && (e.style.padding = "0px")
                        })), console.log("REC changeHeight complate setHeight=" + t)
                    }, ue([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), ue([Object(l.Getter)("loginInfoGetter")], t.prototype, "loginInfoGetter", void 0), ue([Object(l.Getter)("PDPriceListGetter")], t.prototype, "getPDPriceList", void 0), ue([Object(l.Action)("getPDPriceList")], t.prototype, "dispatchPDPriceList", void 0), ue([Object(l.Prop)()], t.prototype, "ProductCardResults", void 0), ue([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), ue([Object(l.Prop)()], t.prototype, "defLevelId", void 0), ue([Object(l.Prop)()], t.prototype, "websiteCode", void 0), ue([Object(l.Prop)()], t.prototype, "isLoadHeadingRow", void 0), ue([Object(l.Watch)("isLoadHeadingRow")], t.prototype, "loadHeadingRow", null), ue([Object(l.Watch)("rwdWidth", {
                        immediate: !0
                    })], t.prototype, "reloadSource", null), ue([Object(l.Watch)("ProductCardResults", {
                        immediate: !0
                    })], t.prototype, "setProductCardResultsToData", null), ue([Object(l.Watch)("getPDPriceList")], t.prototype, "setPriceIdList", null), t = ue([Object(l.Component)({
                        components: {
                            GhostButton: ae.a,
                            ProductCard: ne.a,
                            CardCarousel: se.a
                        }
                    })], t)
                }(Object(l.mixins)(le.a, _.a)),
                pe = o(919);
            var me = Object(D.a)(he, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("section", {
                        class: [e.$style.section, e.$style["theme" + e.themeColor]]
                    }, [e.ProductCardResults && e.ProductCardResults.Recommends && e.ProductCardResults.Recommends.length ? o("div", {
                        class: e.$style.productCardWraper
                    }, [o("div", {
                        class: [e.$style.Heading, e.$style["theme" + e.themeColor]]
                    }, [e._v("\n      " + e._s(e.ProductCardResults.Title) + "\n    ")]), e._v(" "), o("div", {
                        staticClass: "recommendation",
                        class: e.$style.carouselContainer
                    }, [o("CardCarousel", {
                        attrs: {
                            rwdWidth: e.rwdWidth,
                            pageSizeList: [4, 3, 1],
                            showControllButtonList: [1, 0, 0],
                            totalCardsCount: e.maxShowItem,
                            spaceBetween: 12,
                            loop: !0,
                            isBottomIndicator: !0
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(e.ProductCardResults.Recommends, (function(r, n) {
                                    return o("ProductCard", {
                                        key: r.ProductID,
                                        style: t.cardInlineStyleObject,
                                        attrs: {
                                            gaActionField: "recommendation",
                                            rwdWidth: e.rwdWidth,
                                            "product-card-item": r,
                                            "card-index": n,
                                            productCardContent: e.productCardContent[n],
                                            isWhiteCard: "White" === e.themeColor,
                                            defLevelId: e.defLevelId
                                        }
                                    })
                                }))
                            }
                        }], null, !1, 142959829)
                    })], 1)]) : e._e()])
                }), [], !1, (function(e) {
                    this.$style = pe.default.locals || pe.default
                }), null, null).exports,
                ge = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                ve = function() {
                    return (ve = Object.assign || function(e) {
                        for (var s, i = 1, t = arguments.length; i < t; i++)
                            for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                        return e
                    }).apply(this, arguments)
                },
                ye = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.breakPointMedium = f.a.breakPointMedium ? parseInt(f.a.breakPointMedium, 10) : 1279, t.breakPointSmall = f.a.breakPointSmall ? parseInt(f.a.breakPointSmall, 10) : 731, t.rwdState = "", t.maxShowItem = 0, t
                    }
                    return ge(t, e), t.prototype.loadHeadingRow = function() {
                        this.isLoadHeadingRow && void 0 !== this.ProductCardResults.Relateds && this.getFieldHeight(this.ProductCardResults.Relateds, "related_products")
                    }, t.prototype.reloadSource = function() {
                        void 0 !== this.ProductCardResults.Relateds && this.ProductCardResults.Relateds && this.ProductCardResults.Relateds.length && (this.maxShowItem = this.ProductCardResults.Relateds.length), this.rwdWidth > this.breakPointMedium ? (this.rwdState = "desktop", this.maxShowItem > 12 && (this.maxShowItem = 12)) : this.rwdWidth > this.breakPointSmall ? (this.rwdState = "tablet", this.maxShowItem > 12 && (this.maxShowItem = 12)) : (this.rwdState = "mobile", this.maxShowItem > 8 && (this.maxShowItem = 8)), void 0 !== this.ProductCardResults.Relateds && this.checkHideProductCardContent(this.ProductCardResults.Relateds)
                    }, t.prototype.setProductCardResultsToData = function() {
                        if (this.ProductCardResults && this.ProductCardResults.Relateds && this.ProductCardResults.Relateds.length) {
                            var e = [];
                            this.ProductCardResults.Relateds && this.ProductCardResults.Relateds.length > 0 && this.ProductCardResults.Relateds.slice(0, 30).forEach((function(t, o) {
                                e.push({
                                    name: t.Name.replace(/<[^>]*>/g, ""),
                                    id: t.ProductID,
                                    dimension10: t.ProductID,
                                    price: t.Price,
                                    brand: "ASUS",
                                    category: t.Level1Path + "-" + t.Level2Path + "/" + t.CategoryName + "/" + t.Level3Path + "/" + (t.SubSeriesName ? t.SubSeriesName : "undefined"),
                                    list: "related_products",
                                    position: o + 1
                                })
                            })), this.gaDataLayerPush({
                                event: "productImpression",
                                ecommerce: {
                                    currencyCode: this.loginInfoGetter.CurrencyCode,
                                    impressions: e
                                }
                            });
                            for (var t = [], o = [], i = 0; i < this.ProductCardResults.Relateds.length; i++) "R" === this.ProductCardResults.Relateds[i].ProductID.toString().split("")[0] ? 1 === this.ProductCardResults.Relateds[i].ModelBaseFlag ? t.push(this.ProductCardResults.Relateds[i].RealProductID) : o.push(this.ProductCardResults.Relateds[i].PartNo) : t.push(this.ProductCardResults.Relateds[i].ProductID);
                            if (this.websiteCode) {
                                var r = void 0;
                                r = void 0 === E.a.get("groupid_asus_" + this.websiteCode) ? "" : E.a.get("groupid_asus_" + this.websiteCode), this.dispatchPDPriceList({
                                    params: {
                                        SystemCode: "asus",
                                        WebsiteCode: this.websiteCode,
                                        ProductId: t.join(),
                                        ROGProduct: o.join(),
                                        group_id: r
                                    }
                                })
                            }
                        }
                        void 0 !== this.ProductCardResults.Relateds && this.checkHideProductCardContent(this.ProductCardResults.Relateds)
                    }, t.prototype.setPriceIdList = function() {
                        var e = this;
                        if (this.getPDPriceList.ProductList)
                            for (var t = function(i) {
                                    if (o.getPDPriceList.ProductList.length > 0) {
                                        var t = o.getPDPriceList.ProductList.filter((function(t) {
                                            return String(t.ProductID) === String(e.ProductCardResults.Relateds[i].ProductID) || String(t.ProductID) === String(e.ProductCardResults.Relateds[i].RealProductID) || String(t.ProductID) === String(e.ProductCardResults.Relateds[i].PartNo)
                                        }));
                                        o.$set(o.ProductCardResults.Relateds, i, ve(ve({}, o.ProductCardResults.Relateds[i]), {
                                            Price: t[0] && "" !== t[0].Price ? t[0].Price : "",
                                            Discount: t[0] && "" !== t[0].Discount ? t[0].Discount : "",
                                            RegularPrice: !t[0] || "" !== t[0].Regular_Price && "" !== t[0].Discount ? t[0].Regular_Price : "",
                                            Buy: ve(ve({}, o.ProductCardResults.Relateds[i].Buy), {
                                                Link: t[0] && "" === t[0].Price ? "" : t[0].BuyLink,
                                                Text: t[0] && "" === t[0].Price ? "" : t[0].BuyText
                                            })
                                        }))
                                    }
                                }, o = this, i = 0; i < this.ProductCardResults.Relateds.length; i++) t(i);
                        void 0 !== this.ProductCardResults.Relateds && (this.checkHideProductCardContent(this.ProductCardResults.Relateds), this.checkComplate())
                    }, t.prototype.checkComplate = function() {
                        var e = this,
                            t = 60,
                            o = setInterval((function() {
                                document && document.querySelectorAll(".related_products .bv_numReviews_component_container").length === document.querySelectorAll(".related_products .bazaaInlineRating").length && document.querySelectorAll(".related_products .bazaaInlineRating").forEach((function(r, n) {
                                    r.offsetHeight > 12 || 0 == t ? (e.changeHeight(".bazaaInlineRating"), clearInterval(o)) : t -= 1
                                }))
                            }), 1e3)
                    }, t.prototype.changeHeight = function(e) {
                        var t = 0;
                        document.querySelectorAll(".related_products .bazaaInlineRating").forEach((function(e, o) {
                            e.offsetHeight > 12 && (t = 32)
                        })), document.querySelectorAll(".related_products .bazaaInlineRating").forEach((function(e, o) {
                            e.style.height = t + "px", 0 == t && (e.style.padding = "0px")
                        }))
                    }, ye([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), ye([Object(l.Getter)("loginInfoGetter")], t.prototype, "loginInfoGetter", void 0), ye([Object(l.Getter)("PDPriceListGetter")], t.prototype, "getPDPriceList", void 0), ye([Object(l.Action)("getPDPriceList")], t.prototype, "dispatchPDPriceList", void 0), ye([Object(l.Prop)()], t.prototype, "ProductCardResults", void 0), ye([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), ye([Object(l.Prop)()], t.prototype, "defLevelId", void 0), ye([Object(l.Prop)()], t.prototype, "isLoadHeadingRow", void 0), ye([Object(l.Prop)()], t.prototype, "websiteCode", void 0), ye([Object(l.Watch)("isLoadHeadingRow")], t.prototype, "loadHeadingRow", null), ye([Object(l.Watch)("rwdWidth", {
                        immediate: !0
                    })], t.prototype, "reloadSource", null), ye([Object(l.Watch)("ProductCardResults", {
                        immediate: !0
                    })], t.prototype, "setProductCardResultsToData", null), ye([Object(l.Watch)("getPDPriceList")], t.prototype, "setPriceIdList", null), t = ye([Object(l.Component)({
                        components: {
                            GhostButton: ae.a,
                            ProductCard: ne.a,
                            CardCarousel: se.a
                        }
                    })], t)
                }(Object(l.mixins)(le.a, _.a)),
                we = o(920);
            var _e = Object(D.a)(fe, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("section", {
                        class: [e.$style.section, e.$style["theme" + e.themeColor]]
                    }, [e.ProductCardResults && e.ProductCardResults.Relateds && e.ProductCardResults.Relateds.length ? o("div", {
                        class: e.$style.productCardWraper
                    }, [o("div", {
                        class: [e.$style.Heading, e.$style["theme" + e.themeColor]]
                    }, [e._v("\n      " + e._s(e.ProductCardResults.Title) + "\n    ")]), e._v(" "), o("div", {
                        class: e.$style.carouselContainer
                    }, [o("CardCarousel", {
                        attrs: {
                            rwdWidth: e.rwdWidth,
                            pageSizeList: [4, 3, 1],
                            showControllButtonList: [1, 0, 0],
                            totalCardsCount: e.maxShowItem,
                            spaceBetween: 12,
                            loop: !0,
                            isBottomIndicator: !0
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(e.ProductCardResults.Relateds, (function(r, n) {
                                    return o("ProductCard", {
                                        key: r.ProductID,
                                        staticClass: "related_products",
                                        style: t.cardInlineStyleObject,
                                        attrs: {
                                            gaActionField: "related_products",
                                            rwdWidth: e.rwdWidth,
                                            "product-card-item": r,
                                            "card-index": n,
                                            productCardContent: e.productCardContent[n],
                                            isWhiteCard: "White" === e.themeColor,
                                            defLevelId: e.defLevelId
                                        }
                                    })
                                }))
                            }
                        }], null, !1, 109292103)
                    })], 1)]) : e._e()])
                }), [], !1, (function(e) {
                    this.$style = we.default.locals || we.default
                }), null, null).exports,
                Pe = o(598),
                be = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                Se = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                Ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.bodyClientWidth = 0, t.currentSlide = 1, t.rwdState = "", t.oneCardDisplacement = 0, t.visibleDivWidth = 0, t.maxDisplacement = 0, t.firstCardWidth = 508, t.enableControllButton = !0, t.autoPlayInterval = null, t.firstCardInlineStyleObject = {
                            width: t.firstCardWidth + "px",
                            height: "calc(100% - " + t.spaceBetween + "px)",
                            marginTop: t.spaceBetween + "px",
                            marginRight: t.spaceBetween + "px",
                            flexGrow: "0",
                            flexShrink: "0"
                        }, t.cardInlineStyleObject = {
                            width: (t.getWidthWithoutFirstCard - t.spaceBetween) / 2 + "px",
                            height: "calc((100% - " + 2 * t.spaceBetween + "px) / 2)",
                            marginTop: t.spaceBetween + "px",
                            marginRight: t.spaceBetween + "px",
                            flexGrow: "0",
                            flexShrink: "0"
                        }, t
                    }
                    return be(t, e), Object.defineProperty(t.prototype, "totalSlide", {
                        get: function() {
                            return this.totalCardsCount <= 5 ? 1 : Math.ceil((this.totalCardsCount - 5) / 5) + 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.updateSlideWidth = function() {
                        var e = this.$refs.innerSlides;
                        e && e.hasChildNodes() && (this.oneCardDisplacement = this.visibleDivWidth + this.spaceBetween, this.maxDisplacement = e.offsetWidth - this.visibleDivWidth)
                    }, Object.defineProperty(t.prototype, "enablePrevButton", {
                        get: function() {
                            return (this.currentSlide > 1 || this.loop) && this.totalSlide > 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "enableNextButton", {
                        get: function() {
                            return (this.currentSlide !== this.totalSlide || this.loop) && this.totalSlide > 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "getWidthWithoutFirstCard", {
                        get: function() {
                            return this.visibleDivWidth - (this.firstCardWidth + this.spaceBetween)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "innerSlidesDisplacement", {
                        get: function() {
                            var e = this.oneCardDisplacement * (this.currentSlide - 1);
                            return e < 0 ? e = 0 : e > this.maxDisplacement && this.currentSlide >= this.totalSlide && 1 !== this.totalSlide && (e = this.maxDisplacement), -e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.reloadSource = function() {
                        this.rwdWidth >= this.rwdBreakPointMedium ? (this.rwdState = "desktop", this.enableControllButton = 1 === this.showControllButtonList[0]) : this.rwdWidth > this.rwdBreakPointSmall ? (this.rwdState = "tablet", this.enableControllButton = 1 === this.showControllButtonList[1]) : (this.rwdState = "mobile", this.enableControllButton = 1 === this.showControllButtonList[2])
                    }, t.prototype.autoPlayBind = function() {
                        this.autoPlay ? this.bindInterval() : this.autoPlayInterval && clearInterval(this.autoPlayInterval)
                    }, t.prototype.restartInterval = function() {
                        this.autoPlay && (this.autoPlayInterval && clearInterval(this.autoPlayInterval), this.bindInterval())
                    }, t.prototype.bindInterval = function() {
                        var e = this;
                        this.autoPlayInterval = setInterval((function() {
                            e.next(null, !0)
                        }), this.autoPlayDelay)
                    }, t.prototype.slideTo = function(e) {
                        this.restartInterval(), this.currentSlide = e + 1
                    }, t.prototype.next = function(e, t) {
                        void 0 === t && (t = !1), this.currentSlide++, this.currentSlide > this.totalSlide && (!0 === this.loop ? this.currentSlide = 1 : this.currentSlide = this.totalSlide), !1 === t && this.restartInterval()
                    }, t.prototype.prev = function(e, t) {
                        void 0 === t && (t = !1), this.currentSlide--, this.currentSlide <= 0 && (!0 === this.loop ? this.currentSlide = this.totalSlide : this.currentSlide = 1), !1 === t && this.restartInterval()
                    }, t.prototype.updateVisibleDivWidth = function() {
                        var e = this.$refs.visibleDiv;
                        e && (this.visibleDivWidth = e.offsetWidth, this.$set(this.cardInlineStyleObject, "width", (this.getWidthWithoutFirstCard - this.spaceBetween) / 2 + "px"))
                    }, t.prototype.updated = function() {
                        this.updateSlideWidth(), this.updateVisibleDivWidth(), window.addEventListener("resize", d()(this.getBodyClientWidth, 100, {
                            trailing: !0
                        })), this.getBodyClientWidth()
                    }, t.prototype.mounted = function() {
                        this.updateSlideWidth(), this.updateVisibleDivWidth(), this.getBodyClientWidth()
                    }, t.prototype.getBodyClientWidth = function() {
                        document && (this.bodyClientWidth = document.body.clientWidth)
                    }, Se([Object(l.Prop)({
                        default: 0
                    })], t.prototype, "spaceBetween", void 0), Se([Object(l.Prop)({
                        default: !1
                    })], t.prototype, "autoPlay", void 0), Se([Object(l.Prop)({
                        default: 5e3
                    })], t.prototype, "autoPlayDelay", void 0), Se([Object(l.Prop)({
                        default: function() {
                            return [1, 1, 1]
                        }
                    })], t.prototype, "showControllButtonList", void 0), Se([Object(l.Prop)({
                        default: !1
                    })], t.prototype, "loop", void 0), Se([Object(l.Prop)({
                        default: parseInt(f.a.breakPointSmall, 10)
                    })], t.prototype, "rwdBreakPointSmall", void 0), Se([Object(l.Prop)({
                        default: parseInt(f.a.breakPointMedium, 10)
                    })], t.prototype, "rwdBreakPointMedium", void 0), Se([Object(l.Prop)({
                        default: 0
                    })], t.prototype, "propMaxContainerWidth", void 0), Se([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), Se([Object(l.Prop)({
                        default: 0
                    })], t.prototype, "totalCardsCount", void 0), Se([Object(l.Watch)("rwdWidth", {
                        immediate: !0
                    })], t.prototype, "reloadSource", null), Se([Object(l.Watch)("autoPlay", {
                        immediate: !0
                    })], t.prototype, "autoPlayBind", null), t = Se([Object(l.Component)({
                        components: {
                            CarouselArrows: Pe.a,
                            Indicator: j.a
                        }
                    })], t)
                }(l.Vue),
                Ce = o(921);
            var De = Object(D.a)(Ie, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        class: e.$style.carouselContainer
                    }, [o("v-touch", {
                        style: {
                            width: "100%"
                        },
                        attrs: {
                            enabled: {
                                swipeleft: !0,
                                swiperight: !0
                            }
                        },
                        on: {
                            swipeleft: e.next,
                            swiperight: e.prev
                        }
                    }, [o("div", {
                        ref: "visibleDiv",
                        class: e.$style.visibleDiv
                    }, [o("div", {
                        ref: "innerSlides",
                        class: e.$style.innerSlides,
                        style: {
                            height: "desktop" === e.rwdState ? "728px" : "auto",
                            transform: "translateX(" + e.innerSlidesDisplacement + "px)"
                        }
                    }, [e._t("default", null, {
                        firstCardInlineStyleObject: e.firstCardInlineStyleObject,
                        cardInlineStyleObject: e.cardInlineStyleObject
                    })], 2)])]), e._v(" "), o("CarouselArrows", {
                        attrs: {
                            enableControllButton: e.enableControllButton,
                            enablePrevButton: e.enablePrevButton,
                            enableNextButton: e.enableNextButton
                        },
                        on: {
                            clickPrev: e.prev,
                            clickNext: e.next
                        }
                    }), e._v(" "), o("Indicator", {
                        attrs: {
                            autoPlay: e.autoPlay,
                            currentSlide: e.currentSlide,
                            totalSlide: e.totalSlide,
                            rwdWidth: e.rwdWidth,
                            transitionDuration: e.autoPlayDelay
                        },
                        on: {
                            slideToEvent: e.slideTo
                        }
                    })], 1)
                }), [], !1, (function(e) {
                    this.$style = Ce.default.locals || Ce.default
                }), null, null).exports,
                ke = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                xe = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                Re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.rwdState = "", t.breakPointMedium = f.a.breakPointMedium ? parseInt(f.a.breakPointMedium, 10) : 1279, t.breakPointSmall = f.a.breakPointSmall ? parseInt(f.a.breakPointSmall, 10) : 731, t.accessoriesData = {}, t
                    }
                    return ke(t, e), t.prototype.reloadSource = function() {
                        this.rwdWidth > this.breakPointMedium ? this.rwdState = "desktop" : this.rwdWidth > this.breakPointSmall ? this.rwdState = "tablet" : this.rwdState = "mobile"
                    }, t.prototype.setAccessoriesToData = function() {
                        this.accessoriesData = m()(this.PDAccessoriesGetter)
                    }, xe([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), xe([Object(l.Getter)("PDAccessoriesGetter")], t.prototype, "PDAccessoriesGetter", void 0), xe([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), xe([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), xe([Object(l.Watch)("PDAccessoriesGetter", {
                        immediate: !0
                    })], t.prototype, "setAccessoriesToData", null), t = xe([Object(l.Component)({
                        components: {
                            twoRowCarousel: De,
                            CardCarousel: se.a
                        }
                    })], t)
                }(Object(l.mixins)(_.a)),
                Le = o(922);
            var Oe = Object(D.a)(Re, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("section", {
                        class: [e.$style.wrapper, e.$style["theme" + e.themeColor]]
                    }, [e.accessoriesData && 0 != Object.values(e.accessoriesData).length ? o("div", {
                        class: e.$style.content
                    }, [o("div", {
                        class: [e.$style.heading, e.$style["theme" + e.themeColor]]
                    }, [e._v("\n      " + e._s(e.accessoriesData.Title) + "\n    ")]), e._v(" "), o("div", {
                        class: e.$style.carouselContainer
                    }, ["desktop" === e.rwdState && e.accessoriesData.Accessories ? o("twoRowCarousel", {
                        class: e.$style.cardCarousel,
                        attrs: {
                            rwdWidth: e.rwdWidth,
                            showControllButtonList: [1, 0, 0],
                            totalCardsCount: e.accessoriesData.Accessories ? e.accessoriesData.Accessories.length : 0,
                            spaceBetween: 12
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(e.accessoriesData.Accessories, (function(r, n) {
                                    var l;
                                    return o("div", {
                                        key: n,
                                        class: [e.$style.twoRowCarouselCard, e.$style["theme" + e.themeColor]],
                                        style: n % 5 == 0 ? t.firstCardInlineStyleObject : t.cardInlineStyleObject
                                    }, [o("a", {
                                        class: [e.$style.card, e.$style["theme" + e.themeColor], (l = {}, l[e.$style.bigItem] = n % 5 == 0, l)],
                                        attrs: {
                                            target: r.LinkTarget,
                                            rel: "_blank" === r.LinkTarget ? "noreferrer noopener" : "",
                                            href: r.Link
                                        },
                                        on: {
                                            click: function(t) {
                                                return e.gaDataLayerPush({
                                                    event: "data_layer_event",
                                                    event_category_DL: "images",
                                                    event_action_DL: "clicked",
                                                    event_label_DL: r.Name + "/ make_it_your_own",
                                                    event_value_DL: "0"
                                                })
                                            }
                                        }
                                    }, [o("div", {
                                        class: e.$style.image
                                    }, [o("img", {
                                        attrs: {
                                            loading: "lazy",
                                            src: r.ImageLink,
                                            alt: r.Name
                                        }
                                    })]), e._v(" "), o("div", {
                                        class: e.$style.text
                                    }, [o("p", {
                                        class: [e.$style.title, e.$style["theme" + e.themeColor]]
                                    }, [e._v("\n                  " + e._s(r.Name) + "\n                ")]), e._v(" "), o("p", {
                                        class: [e.$style.price, e.$style["theme" + e.themeColor]]
                                    }, [e._v("\n                  " + e._s(r.Price) + "\n                ")])])])])
                                }))
                            }
                        }], null, !1, 2033324019)
                    }) : o("CardCarousel", {
                        class: e.$style.cardCarousel,
                        attrs: {
                            rwdWidth: e.rwdWidth,
                            pageSizeList: [3, 3, 1],
                            showControllButtonList: [1, 0, 0],
                            totalCardsCount: e.accessoriesData.Accessories ? e.accessoriesData.Accessories.length : 0,
                            spaceBetween: 12
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(e.accessoriesData.Accessories, (function(r, n) {
                                    return o("div", {
                                        key: n,
                                        class: [e.$style.cardCarouselCard, e.$style["theme" + e.themeColor]],
                                        style: t.cardInlineStyleObject
                                    }, [o("a", {
                                        class: [e.$style.card, e.$style["theme" + e.themeColor]],
                                        attrs: {
                                            target: r.LinkTarget,
                                            rel: "_blank" === r.LinkTarget ? "noreferrer noopener" : "",
                                            href: r.Link
                                        }
                                    }, [o("div", {
                                        class: e.$style.image
                                    }, [o("img", {
                                        attrs: {
                                            loading: "lazy",
                                            src: r.ImageLink,
                                            alt: r.Name
                                        }
                                    })]), e._v(" "), o("div", {
                                        class: e.$style.text
                                    }, [o("p", {
                                        class: [e.$style.title, e.$style["theme" + e.themeColor]]
                                    }, [e._v("\n                  " + e._s(r.Name) + "\n                ")]), e._v(" "), o("p", {
                                        class: [e.$style.price, e.$style["theme" + e.themeColor]]
                                    }, [e._v("\n                  " + e._s(r.Price) + "\n                ")])])])])
                                }))
                            }
                        }], null, !1, 1316495518)
                    })], 1)]) : e._e()])
                }), [], !1, (function(e) {
                    this.$style = Le.default.locals || Le.default
                }), null, null).exports,
                Te = o(558),
                Me = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                We = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                je = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.currentImageIndex = 1, t.widthData = 0, t.itemWidth = 0, t.itemHeight = 0, t.carouselHeight = 0, t.carouselInnerHeight = 0, t.totalItem = 0, t.totalSlide = 1, t.pagesize = 6, t.movesize = 1, t.loop = !1, t.rwdState = "", t.keySpecData = [], t.hardwareBrief = [], t
                    }
                    return Me(t, e), t.prototype.update = function() {
                        this.resetCarousel()
                    }, t.prototype.mounted = function() {
                        this.resetCarousel()
                    }, t.prototype.reloadSource = function() {
                        this.rwdWidth >= 1200 ? this.rwdState = "desktop" : this.rwdWidth > 768 && this.rwdWidth < 1200 ? this.rwdState = "tablet" : this.rwdState = "mobile", this.currentImageIndex = 1, this.resetCarousel()
                    }, t.prototype.setPDKeySpecFlag = function() {
                        this.keySpecData = this.getPDKeySpec, this.hardwareBrief = this.keySpecData.KeySpec, this.totalItem = this.hardwareBrief ? this.hardwareBrief.length : 0, this.resetTotalSlide()
                    }, t.prototype.setImg = function(i) {
                        this.currentImageIndex = i
                    }, t.prototype.nextImg = function() {
                        this.currentImageIndex++, this.currentImageIndex > this.totalSlide && (!0 === this.loop ? this.currentImageIndex = 1 : this.currentImageIndex = this.totalSlide)
                    }, t.prototype.prevImg = function() {
                        this.currentImageIndex--, this.currentImageIndex <= 0 && (!0 === this.loop ? this.currentImageIndex = this.totalSlide : this.currentImageIndex = 1)
                    }, t.prototype.resetCarousel = function() {
                        var element = this.$refs.image_carousel;
                        this.widthData = element.offsetWidth, this.rwdWidth >= 1200 ? (this.pagesize = 6, this.itemWidth = (this.widthData - 24) / (this.pagesize / 2), this.itemHeight = 244, this.carouselInnerHeight = 2 * this.itemHeight + 50) : this.rwdWidth > 731 ? (this.pagesize = 4, this.itemWidth = (this.widthData - 12) / (this.pagesize / 2), this.itemHeight = 244, this.carouselInnerHeight = 2 * this.itemHeight) : (this.pagesize = 2, this.itemWidth = this.widthData, this.itemHeight = 244, this.carouselInnerHeight = this.itemHeight), this.carouselHeight = this.carouselInnerHeight + 30, this.resetTotalSlide()
                    }, t.prototype.resetTotalSlide = function() {
                        this.totalSlide = Math.ceil(this.totalItem / this.pagesize)
                    }, We([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), We([Object(l.Getter)("PDKeySpecGetter")], t.prototype, "getPDKeySpec", void 0), We([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), We([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), We([Object(l.Watch)("getPDKeySpec", {
                        immediate: !0
                    })], t.prototype, "setPDKeySpecFlag", null), t = We([Object(l.Component)({
                        components: {
                            CarouselArrows: Pe.a
                        }
                    })], t)
                }(l.Vue),
                Be = o(925);
            var $e = Object(D.a)(je, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("v-touch", {
                        attrs: {
                            enabled: {
                                swipeleft: !0,
                                swiperight: !0
                            }
                        },
                        on: {
                            swipeleft: e.nextImg,
                            swiperight: e.prevImg
                        }
                    }, [o("div", {
                        class: [e.$style.hardwareBriefLayout, e.$style["theme" + e.themeColor]]
                    }, [o("div", {
                        class: e.$style.carouselWrapper
                    }, [o("div", {
                        ref: "image_carousel",
                        class: [e.$style.imageCarousel, e.$style.productReview]
                    }, [o("div", {
                        style: {
                            overflow: "hidden",
                            position: "relative"
                        }
                    }, [o("div", {
                        ref: "inner",
                        class: e.$style.productReviewInner,
                        style: {
                            left: -e.widthData * (e.currentImageIndex - 1) + "px",
                            width: e.widthData * e.totalSlide + "px"
                        }
                    }, e._l(e.totalSlide, (function(t) {
                        return o("div", {
                            key: t,
                            class: [e.$style.productReviewInnerBox, e.$style["theme" + e.themeColor]],
                            style: {
                                width: e.widthData + "px"
                            }
                        }, [e._l(e.pagesize, (function(r) {
                            return [e.hardwareBrief && e.hardwareBrief[(t - 1) * e.pagesize + r - 1] ? o("div", {
                                key: r,
                                class: [e.$style.productReviewItem, e.$style["theme" + e.themeColor]],
                                style: [{
                                    backgroundPosition: "center"
                                }, {
                                    height: e.itemHeight + "px"
                                }, {
                                    width: e.itemWidth + "px"
                                }]
                            }, [o("div", {
                                class: e.$style.contentImage
                            }, [o("img", {
                                attrs: {
                                    src: "" + e.hardwareBrief[(t - 1) * e.pagesize + r - 1].Image,
                                    alt: e.hardwareBrief[(t - 1) * e.pagesize + r - 1].Text
                                }
                            })]), e._v(" "), o("div", {
                                class: e.$style.scenarioContent
                            }, [o("div", {
                                class: [e.$style.contentName, e.$style["theme" + e.themeColor]],
                                domProps: {
                                    innerHTML: e._s(e.hardwareBrief[(t - 1) * e.pagesize + r - 1].Text)
                                }
                            })])]) : e._e()]
                        }))], 2)
                    })), 0)])]), e._v(" "), o("CarouselArrows", {
                        attrs: {
                            enableControllButton: e.rwdWidth >= 1200,
                            enablePrevButton: (e.currentImageIndex > 1 || e.loop) && e.totalSlide > 1,
                            enableNextButton: (e.currentImageIndex !== e.totalSlide || e.loop) && e.totalSlide > 1
                        },
                        on: {
                            clickPrev: e.prevImg,
                            clickNext: e.nextImg
                        }
                    })], 1), e._v(" "), e.totalSlide > 0 && e.keySpecData.SeeallTechspec ? o("div", {
                        class: e.$style.productReviewSeeAll
                    }, [o("a", {
                        attrs: {
                            href: e.keySpecData.SeeallTechspec.Link
                        }
                    }, [e._v("\n        " + e._s(e.keySpecData.SeeallTechspec.Text) + "\n      ")])]) : e._e()])])
                }), [], !1, (function(e) {
                    this.$style = Be.default.locals || Be.default
                }), null, null).exports,
                Ge = o(596),
                Ae = o(591),
                Ne = o(589),
                ze = o(600),
                He = o(601),
                Fe = o(1),
                Ee = function() {
                    var e = function(t, b) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, b) {
                                e.__proto__ = b
                            } || function(e, b) {
                                for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                            })(t, b)
                    };
                    return function(t, b) {
                        function o() {
                            this.constructor = t
                        }
                        e(t, b), t.prototype = null === b ? Object.create(b) : (o.prototype = b.prototype, new o)
                    }
                }(),
                Ke = function(e, t, o, desc) {
                    var r, l = arguments.length,
                        c = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(n.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (l < 3 ? r(c) : l > 3 ? r(t, o, c) : r(t, o)) || c);
                    return l > 3 && c && Object.defineProperty(t, o, c), c
                },
                Ye = function(e, t, o, r) {
                    return new(o || (o = Promise))((function(n, l) {
                        function c(e) {
                            try {
                                h(r.next(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function d(e) {
                            try {
                                h(r.throw(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function h(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                                e(t)
                            }))).then(c, d)
                        }
                        h((r = r.apply(e, t || [])).next())
                    }))
                },
                Ue = function(e, body) {
                    var t, o, r, g, n = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return g = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                        return this
                    }), g;

                    function l(l) {
                        return function(c) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; n;) try {
                                    if (t = 1, o && (r = 2 & l[0] ? o.return : l[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, l[1])).done) return r;
                                    switch (o = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                        case 0:
                                        case 1:
                                            r = l;
                                            break;
                                        case 4:
                                            return n.label++, {
                                                value: l[1],
                                                done: !1
                                            };
                                        case 5:
                                            n.label++, o = l[1], l = [0];
                                            continue;
                                        case 7:
                                            l = n.ops.pop(), n.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = n.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                                n = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                n.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && n.label < r[1]) {
                                                n.label = r[1], r = l;
                                                break
                                            }
                                            if (r && n.label < r[2]) {
                                                n.label = r[2], n.ops.push(l);
                                                break
                                            }
                                            r[2] && n.ops.pop(), n.trys.pop();
                                            continue
                                    }
                                    l = body.call(e, n)
                                } catch (e) {
                                    l = [6, e], o = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, c])
                        }
                    }
                },
                Ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.windowWidth = 0, t.recommandForYouResults = {}, t.relatedProductsResults = {}, t.PDSectionList = {}, t.reviewShowList = {
                            video: 1,
                            award: 1,
                            media: 1
                        }, t.defLevelId = "", t.compareMenuList = {}, t.compareMenuShowState = !1, t.overviewTabList = [], t.kvSummaryResult = {}, t.onlineChat = {
                            URL: "TEST"
                        }, t.isLoadHeadingRow = !1, t.websiteCode = "", t
                    }
                    return Ee(t, e), t.prototype.asyncData = function(e) {
                        return Ye(this, void 0, Promise, (function() {
                            var t, o, r, n, l, c, d, h, m, v, y;
                            return Ue(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return t = e.params, o = e.route, e.query, e.env, r = e.redirect, n = e.store, l = Object(H.b)(t.region), c = e.store.getters.NDAAuthGetter, [4, Fe.a.getTopMenu({
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l
                                            }
                                        }).then((function(e) {
                                            void 0 === e ? r(302, "https://dlcdnimgs.asus.com/websites/server_500.html") : n.commit("setTopMenuData", e)
                                        }))];
                                    case 1:
                                        return f.sent(), [4, e.store.dispatch("getFooterData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                FooterPosition: 0
                                            }
                                        })];
                                    case 2:
                                        return f.sent(), [4, e.store.dispatch("getBottomListData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l
                                            }
                                        })];
                                    case 3:
                                        return f.sent(), [4, e.store.dispatch("getBreadcrumbData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                URL: "https://www.asus.com" + o.fullPath
                                            }
                                        })];
                                    case 4:
                                        return f.sent(), d = t.productModel, h = d, -1 !== d.indexOf("(") && (h = h.replace("(", "（")), -1 !== d.indexOf(")") && (h = h.replace(")", "）")), [4, Fe.a.getMetaData({
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductLevel1Code: t.levelOneTopMenuName,
                                                ProductLevel2Code: t.levelTwoProductLineName,
                                                SeriesWebPath: t.seriesName,
                                                ProductWebPath: h,
                                                Type: "ProductPage"
                                            }
                                        }).then((function(e) {
                                            void 0 === e ? r(302, "https://dlcdnimgs.asus.com/websites/server_500.html") : n.commit("setMetaData", e)
                                        }))];
                                    case 5:
                                        return f.sent(), [4, Fe.a.getPDSectionList({
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        }).then((function(e) {
                                            void 0 === e ? r(302, "https://dlcdnimgs.asus.com/websites/server_500.html") : n.commit("setPDSectionListData", e)
                                        }))];
                                    case 6:
                                        return f.sent(), [4, e.store.dispatch("getPDFiles", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        })];
                                    case 7:
                                        return f.sent(), (m = e.store.getters.getPDSectionListDataGetter) && m.ProductPageSection ? "Info" in m.ProductPageSection && 1 === m.ProductPageSection.Info ? [4, e.store.dispatch("getPDInfoData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                SeriesWebPath: "0",
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        })] : [3, 9] : [3, 21];
                                    case 8:
                                        f.sent(), f.label = 9;
                                    case 9:
                                        return "Gallery" in m.ProductPageSection && 1 === m.ProductPageSection.Gallery ? [4, e.store.dispatch("getKeyProductInfoData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        })] : [3, 11];
                                    case 10:
                                        f.sent(), f.label = 11;
                                    case 11:
                                        return "HardwareBrief" in m.ProductPageSection && 1 === m.ProductPageSection.HardwareBrief ? [4, e.store.dispatch("getPDKeySpecData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductLevel1Code: t.levelOneTopMenuName,
                                                ProductLevel2Code: t.levelTwoProductLineName,
                                                SeriesName: t.seriesName,
                                                ProductWebPath: h,
                                                BlackVersion: 1
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        })] : [3, 13];
                                    case 12:
                                        f.sent(), f.label = 13;
                                    case 13:
                                        return "Accessories" in m.ProductPageSection && 1 === m.ProductPageSection.Accessories ? [4, e.store.dispatch("getPDAccessoriesData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        })] : [3, 15];
                                    case 14:
                                        f.sent(), f.label = 15;
                                    case 15:
                                        return "Recommend" in m.ProductPageSection && 1 === m.ProductPageSection.Recommend ? [4, e.store.dispatch("getPDRecommendData", {
                                            params: {
                                                SystemCode: "ASUS",
                                                WebsiteCode: l,
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        })] : [3, 17];
                                    case 16:
                                        f.sent(), f.label = 17;
                                    case 17:
                                        return "Related" in m.ProductPageSection && 1 === m.ProductPageSection.Related ? [4, e.store.dispatch("getPDRelatedData", {
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        })] : [3, 19];
                                    case 18:
                                        f.sent(), f.label = 19;
                                    case 19:
                                        return v = "", v = "Overview" === o.name ? "o" : "Review" === o.name || "ReviewSingle" === o.name ? "r" : "", [4, Fe.a.getPDReview({
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductWebpath: h,
                                                PageType: v
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        }).then((function(e) {
                                            void 0 === e ? r(302, "https://dlcdnimgs.asus.com/websites/server_500.html") : n.commit("setProductReviewData", e)
                                        }))];
                                    case 20:
                                        f.sent(), f.label = 21;
                                    case 21:
                                        return f.trys.push([21, 26, , 27]), [3, 23];
                                    case 22:
                                        return [2, {
                                            overviewData: f.sent()
                                        }];
                                    case 23:
                                        return [4, Fe.a.getPDOverview({
                                            params: {
                                                SystemCode: "asus",
                                                WebsiteCode: l,
                                                ProductWebPath: h
                                            },
                                            headers: {
                                                NDAAuth: c
                                            }
                                        }).then((function(e) {
                                            return e.data.Result.Overview
                                        }))];
                                    case 24:
                                        return [2, {
                                            overviewData: f.sent()
                                        }];
                                    case 25:
                                        return [3, 27];
                                    case 26:
                                        return y = f.sent(), console.warn(y), [3, 27];
                                    case 27:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.head = function() {
                        return void 0 !== this.metaData.SEO && Object.keys(this.metaData.SEO).length && "ProductPage" === this.metaData.Type ? {
                            title: this.metaData.SEO.Title,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.metaData.SEO.Description
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: this.metaData.OG.Title
                            }, {
                                hid: "og:type",
                                property: "og:type",
                                content: "website"
                            }, {
                                hid: "og:site_name",
                                property: "og:site_name",
                                content: this.metaData.OG.SiteName
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: this.metaData.OG.Description
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: this.metaData.Canonical
                            }, {
                                hid: "og:image",
                                property: "og:image",
                                content: this.metaData.OG.Image
                            }, {
                                hid: "twitter:title",
                                property: "twitter:title",
                                content: this.metaData.Twitter.Title
                            }, {
                                hid: "twitter:site",
                                property: "twitter:site",
                                content: "@ASUS"
                            }, {
                                hid: "twitter:description",
                                property: "twitter:description",
                                content: this.metaData.Twitter.Description
                            }, {
                                hid: "twitter:card",
                                property: "twitter:card",
                                content: "summary_large_image"
                            }, {
                                hid: "twitter:image",
                                property: "twitter:image",
                                content: this.metaData.Twitter.Image
                            }],
                            link: [{
                                rel: "canonical",
                                href: this.metaData.Canonical
                            }]
                        } : ""
                    }, t.prototype.jsonld = function() {
                        var e = void 0 !== this.$store.getters.breadcrumbDataGetter ? this.$store.getters.breadcrumbDataGetter : [],
                            t = [];
                        return e.length > 0 && e.forEach((function(e, o) {
                            t.push({
                                "@type": "ListItem",
                                position: o + 1,
                                name: e.Content.LevelName,
                                item: e.Content.Link
                            })
                        })), void 0 !== this.metaData.SEO && Object.keys(this.metaData.SEO).length && void 0 !== this.metaData.Structure && Object.keys(this.metaData.Structure).length ? [{
                            "@context": "http://schema.org",
                            "@type": "Product",
                            "@id": this.metaData.Canonical,
                            name: this.metaData.Structure.Name,
                            image: this.metaData.Structure.Image,
                            description: this.metaData.Structure.Description,
                            sku: this.metaData.Structure.Sku,
                            brand: {
                                "@type": "Thing",
                                name: "ASUS"
                            },
                            offers: {
                                "@type": "Offer",
                                url: this.metaData.Structure.URL,
                                priceCurrency: this.metaData.Structure.PriceCurrency,
                                price: this.metaData.Structure.Price,
                                availability: "https://schema.org/" + this.metaData.Structure.Availability
                            }
                        }, {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: t
                        }] : [{
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: t
                        }]
                    }, t.prototype.created = function() {
                        this.websiteCode = Object(H.b)(this.$route.params.region), this.PDSectionListDataGetter && this.PDSectionListDataGetter.ProductPageSection && (this.reviewShowList = {
                            video: this.PDSectionListDataGetter.ProductPageSection.Video,
                            award: this.PDSectionListDataGetter.ProductPageSection.Award,
                            media: this.PDSectionListDataGetter.ProductPageSection.Media
                        }), this.defLevelId = this.$route.params.levelOneTopMenuName + "-" + this.$route.params.levelTwoProductLineName;
                        try {
                            window.overviewed && window.location.reload()
                        } catch (e) {
                            console.error(e)
                        }
                    }, t.prototype.mounted = function() {
                        var e = this;
                        try {
                            window.onload = function() {
                                e.isLoadHeadingRow = !0
                            }
                        } catch (e) {
                            console.error(e)
                        }
                        window.addEventListener("resize", d()(this.getWindowWidth, 100, {
                            trailing: !0
                        })), this.getWindowWidth(), this.gaDataLayerPush({
                            event: "data_layer_page_level_SPA",
                            "Page Type": "L4 - overview",
                            "Page Title": this.metaData.SEO ? this.metaData.SEO.Title : void 0
                        }), this.gaHmtPush(["_trackPageview", this.$route.fullPath]), "function" == typeof jQuery && jQuery.holdReady(!1);
                        try {
                            "function" == typeof window.tiggerReady && window.tiggerReady(), setTimeout((function() {
                                window.overviewed = !0
                            }), 7e3)
                        } catch (e) {
                            console.warn(e)
                        }
                        null === sessionStorage.getItem("compareMenuList") || "" === sessionStorage.getItem("compareMenuList") ? (this.compareMenuList = {
                            result: {},
                            currentID: this.defLevelId
                        }, sessionStorage.setItem("compareMenuList", JSON.stringify(this.compareMenuList))) : (this.compareMenuList = JSON.parse(sessionStorage.getItem("compareMenuList")), this.compareMenuList.result[this.defLevelId] && this.compareMenuList.result[this.defLevelId].length > 0 && this.changeMenu(this.compareMenuList.result[this.defLevelId])), this.compareMenuList && (this.compareMenuList.currentID = this.defLevelId, sessionStorage.setItem("compareMenuList", JSON.stringify(this.compareMenuList)))
                    }, t.prototype.beforeDestroy = function() {
                        window.removeEventListener("resize", this.getWindowWidth)
                    }, Object.defineProperty(t.prototype, "sectionList", {
                        get: function() {
                            return this.PDSectionListDataGetter.ProductPageSection
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isOverviewFirstSection", {
                        get: function() {
                            return 0 === this.sectionList.Info && 0 === this.sectionList.Gallery
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "getIsScrollToTop", {
                        get: function() {
                            var e = this.$store.getters.productTabListGetter.IsShowGoToTop;
                            return null == e || !!e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.setRecommandForYouToData = function() {
                        this.recommandForYouResults = m()(this.PDRecommendGetter)
                    }, t.prototype.setRelatedProductsToData = function() {
                        this.relatedProductsResults = m()(this.PDRelatedGetter)
                    }, t.prototype.setPDSectionListToData = function() {
                        0
                    }, t.prototype.setOverviewTab = function() {
                        0
                    }, t.prototype.setcolumnBannerToData = function() {
                        this.kvSummaryResult = m()(this.KvSummaryGetter)
                    }, t.prototype.getWindowWidth = function() {
                        this.windowWidth = window.innerWidth
                    }, t.prototype.compareMenuShow = function(e) {
                        this.compareMenuShowState = e
                    }, t.prototype.changeMenu = function(e) {
                        var t = JSON.stringify(e).replace(/\[|\]|"/g, "");
                        this.getCompare({
                            params: {
                                SystemCode: "asus",
                                WebsiteCode: this.websiteCode,
                                ProductIDList: t
                            }
                        })
                    }, Ke([Object(l.Getter)("metaData")], t.prototype, "metaData", void 0), Ke([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), Ke([Object(l.Getter)("onlineChatDataGetter")], t.prototype, "onlineChatDataGetter", void 0), Ke([Object(l.Getter)("getPDRecommendDataGetter")], t.prototype, "PDRecommendGetter", void 0), Ke([Object(l.Getter)("getPDRelatedDataGetter")], t.prototype, "PDRelatedGetter", void 0), Ke([Object(l.Getter)("getPDSectionListDataGetter")], t.prototype, "PDSectionListDataGetter", void 0), Ke([Object(l.Getter)("productTabListGetter")], t.prototype, "productTabList", void 0), Ke([Object(l.Getter)("getPDInfoDataGetter")], t.prototype, "KvSummaryGetter", void 0), Ke([Object(l.Action)("getCompare")], t.prototype, "getCompare", void 0), Ke([Object(l.Watch)("PDRecommendGetter", {
                        immediate: !0
                    })], t.prototype, "setRecommandForYouToData", null), Ke([Object(l.Watch)("PDRelatedGetter", {
                        immediate: !0
                    })], t.prototype, "setRelatedProductsToData", null), Ke([Object(l.Watch)("PDSectionListDataGetter", {
                        immediate: !0
                    })], t.prototype, "setPDSectionListToData", null), Ke([Object(l.Watch)("productTabList", {
                        immediate: !0
                    })], t.prototype, "setOverviewTab", null), Ke([Object(l.Watch)("KvSummaryGetter", {
                        immediate: !0
                    })], t.prototype, "setcolumnBannerToData", null), t = Ke([v.Jsonld, Object(l.Component)({
                        components: {
                            KvSummary: k,
                            GalleryShow: X,
                            DownloadFiles: ie,
                            RecommandForYou: me,
                            RelatedProducts: _e,
                            Accessories: Oe,
                            HardwareBrief: $e,
                            LevelFourProductReviewAllContent: Te.default,
                            Disclaimer: Ge.a,
                            ComparisonMenu: ze.a,
                            OnlineChat: Ae.a,
                            FloatingComparison: He.a,
                            ScrollTop: Ne.a
                        }
                    })], t)
                }(Object(l.mixins)(_.a)),
                Ze = o(926);
            o(927);
            var Je = Object(D.a)(Ve, (function() {
                var e, t, o = this,
                    r = o.$createElement,
                    n = o._self._c || r;
                return o.productTabList && o.productTabList.ProductID && o.sectionList ? n("div", {
                    class: o.$style.LevelFourProductOverviewPageWrapper
                }, [n("KvSummary", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === o.sectionList.Info,
                        expression: "sectionList.Info === 1"
                    }],
                    attrs: {
                        "rwd-width": o.windowWidth,
                        defLevelId: o.defLevelId,
                        ProductID: o.productTabList.ProductID,
                        showCompareBtn: 1 === o.productTabList.SpecFlag
                    }
                }), o._v(" "), n("GalleryShow", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === o.sectionList.Gallery,
                        expression: "sectionList.Gallery === 1"
                    }],
                    attrs: {
                        "rwd-width": o.windowWidth,
                        defLevelId: o.defLevelId,
                        showCompareBtn: 1 === o.productTabList.SpecFlag && 1 === o.sectionList.Gallery && (0 === o.sectionList.Info || 1 === o.sectionList.Info && "OP" !== o.kvSummaryResult.PatternType),
                        ProductID: o.productTabList.ProductID
                    }
                }), o._v(" "), n("DownloadFiles"), o._v(" "), 1 === o.reviewShowList.video || 1 === o.reviewShowList.award || 1 === o.reviewShowList.media ? n("LevelFourProductReviewAllContent", {
                    attrs: {
                        reviewShowList: o.reviewShowList,
                        "rwd-width": o.windowWidth,
                        classType: "overView"
                    }
                }) : o._e(), o._v(" "), void 0 !== o.overviewData && null !== o.overviewData ? n("div", {
                    class: [o.$style.overview],
                    style: [o.isOverviewFirstSection ? {
                        "margin-top": "0px"
                    } : {
                        "margin-top": "80px"
                    }],
                    attrs: {
                        id: "overviewContentInsertWrapper"
                    }
                }, [n("div", {
                    domProps: {
                        innerHTML: o._s(o.overviewData)
                    }
                })]) : o._e(), o._v(" "), n("HardwareBrief", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === o.sectionList.HardwareBrief,
                        expression: "sectionList.HardwareBrief === 1"
                    }],
                    attrs: {
                        "rwd-width": o.windowWidth
                    }
                }), o._v(" "), o.productTabList.ExternalID ? n("div", {
                    class: ["bazaaReviews", "theme" + o.themeColor],
                    attrs: {
                        id: "bv_reviews",
                        "data-bv-show": "reviews",
                        "data-bv-product-id": o.productTabList.ExternalID
                    }
                }) : o._e(), o._v(" "), n("Accessories", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === o.sectionList.Accessories,
                        expression: "sectionList.Accessories === 1"
                    }],
                    attrs: {
                        "rwd-width": o.windowWidth
                    }
                }), o._v(" "), n("RecommandForYou", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === o.sectionList.Recommend,
                        expression: "sectionList.Recommend === 1"
                    }],
                    class: (e = {}, e[o.$style.section] = 1 !== o.sectionList.Related, e),
                    attrs: {
                        "rwd-width": o.windowWidth,
                        ProductCardResults: o.recommandForYouResults,
                        defLevelId: o.defLevelId,
                        isLoadHeadingRow: o.isLoadHeadingRow,
                        websiteCode: o.websiteCode
                    }
                }), o._v(" "), n("RelatedProducts", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === o.sectionList.Related,
                        expression: "sectionList.Related === 1"
                    }],
                    class: (t = {}, t[o.$style.section] = 1 === o.sectionList.Related, t),
                    attrs: {
                        "rwd-width": o.windowWidth,
                        ProductCardResults: o.relatedProductsResults,
                        defLevelId: o.defLevelId,
                        isLoadHeadingRow: o.isLoadHeadingRow,
                        websiteCode: o.websiteCode
                    }
                }), o._v(" "), n("Disclaimer"), o._v(" "), o.compareMenuShowState ? o._e() : n("FloatingComparison", {
                    attrs: {
                        rwdWidth: o.windowWidth,
                        defLevelId: o.defLevelId,
                        classType: "overview"
                    },
                    on: {
                        compareMenuShow: o.compareMenuShow
                    }
                }), o._v(" "), o.getIsScrollToTop && o.onlineChat.URL ? n("OnlineChat", {
                    attrs: {
                        compareMenuShowState: o.compareMenuShowState,
                        rwdWidth: o.windowWidth
                    }
                }) : o._e(), o._v(" "), o.getIsScrollToTop ? n("ScrollTop", {
                    attrs: {
                        compareMenuShowState: o.compareMenuShowState,
                        rwdWidth: o.windowWidth,
                        hasChat: "co" === o.websiteCode || "cl" === o.websiteCode
                    }
                }) : o._e(), o._v(" "), n("ComparisonMenu", {
                    attrs: {
                        compareMenuShowState: o.compareMenuShowState,
                        rwdWidth: o.windowWidth,
                        defLevelId: o.defLevelId
                    },
                    on: {
                        compareMenuShow: o.compareMenuShow
                    }
                })], 1) : o._e()
            }), [], !1, (function(e) {
                this.$style = Ze.default.locals || Ze.default
            }), null, null);
            t.default = Je.exports
        },
        691: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                Tagline: "KvSummary__Tagline__fJ7_S",
                headingTitle: "KvSummary__headingTitle__6PmJM",
                summaryBottom: "KvSummary__summaryBottom__XnNpM",
                Info: "KvSummary__Info__vDsDc",
                KvSummaryOPInnerWrapper: "KvSummary__KvSummaryOPInnerWrapper__2Dwjy",
                content: "KvSummary__content__1uWlC",
                KvSummarySYS: "KvSummary__KvSummarySYS__2rY1R",
                themeWhite: "KvSummary__themeWhite__21KI0",
                summaryTop: "KvSummary__summaryTop__27IQB",
                KeyVisionImage: "KvSummary__KeyVisionImage__1NcQ-",
                Text: "KvSummary__Text__s6N7q",
                heading: "KvSummary__heading__2fe_1",
                headingImgWrap: "KvSummary__headingImgWrap__15KIW",
                KvSummaryOP: "KvSummary__KvSummaryOP__2kb6-",
                productHeadiing: "KvSummary__productHeadiing__UPRDo",
                productIntro: "KvSummary__productIntro__1WXF-",
                OPProductMainImage: "KvSummary__OPProductMainImage__1Dy4f",
                logoWrapper: "KvSummary__logoWrapper__2hRTy",
                logoBox: "KvSummary__logoBox__18N0x",
                imageWrapper: "KvSummary__imageWrapper__3tn4t",
                hasLogo: "KvSummary__hasLogo__1f140",
                square: "KvSummary__square__2UQjl",
                compareRow: "KvSummary__compareRow__1GC5a",
                addToCompare: "KvSummary__addToCompare__1meOI",
                "custom-control-input": "KvSummary__custom-control-input__3eYf7",
                "custom-control-label": "KvSummary__custom-control-label__YsRwN"
            }
        },
        692: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                frameDiv: "PanZoom__frameDiv__3G-id",
                zoomContainer: "PanZoom__zoomContainer__1Kb06",
                originalImg: "PanZoom__originalImg__nFo8x",
                isZoomInStatus: "PanZoom__isZoomInStatus__281sz",
                notZoomInStatus: "PanZoom__notZoomInStatus__1LtW5",
                sizeLimit: "PanZoom__sizeLimit__3doWX"
            }
        },
        693: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                "lb-container": "Lightbox__lb-container__18b2y",
                "lb-content": "Lightbox__lb-content__AeWCw",
                "close-lightbox": "Lightbox__close-lightbox__1gnWc",
                "lb-figure": "Lightbox__lb-figure__2TSL8",
                arrowButton: "Lightbox__arrowButton__1OfDj",
                indicatorWrapper: "Lightbox__indicatorWrapper__5BjW2",
                thumbnailsContainer: "Lightbox__thumbnailsContainer__3DS1L",
                thumbnailWrapper: "Lightbox__thumbnailWrapper__TLXmg",
                thumbnails: "Lightbox__thumbnails__1ajBR",
                thumbnailsSlide: "Lightbox__thumbnailsSlide__WAZJw",
                thumbnailActive: "Lightbox__thumbnailActive__HPmoh",
                visibilityHidden: "Lightbox__visibilityHidden__s58nu",
                imgWrapper: "Lightbox__imgWrapper__v0_hh",
                imgTouch: "Lightbox__imgTouch__30qPJ",
                progressBarWrapper: "Lightbox__progressBarWrapper__1lzGE",
                bar: "Lightbox__bar__1yZtt",
                progress: "Lightbox__progress__3pO7n"
            }
        },
        694: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                galleryShow: "GalleryShow__galleryShow__2MYTS",
                themeWhite: "GalleryShow__themeWhite__jJu42",
                galleryShowHasECInfo: "GalleryShow__galleryShowHasECInfo__GxbbX",
                "row-main": "GalleryShow__row-main__3adoq",
                "col-1": "GalleryShow__col-1__161Bt",
                verticalCarouselContainer: "GalleryShow__verticalCarouselContainer__1fyZn",
                swiperContent: "GalleryShow__swiperContent__EhB5d",
                swiperWrapper: "GalleryShow__swiperWrapper__2Nchz",
                swiperSlide: "GalleryShow__swiperSlide__2wWVd",
                thumbnailImgActive: "GalleryShow__thumbnailImgActive__33bii",
                "col-2": "GalleryShow__col-2__2WmaQ",
                chooseWrap: "GalleryShow__chooseWrap__3AD-v",
                searchIcon: "GalleryShow__searchIcon__41kPS",
                chooseColor: "GalleryShow__chooseColor__1bEUD",
                mobileChooseColor: "GalleryShow__mobileChooseColor__29M2y",
                currentImage: "GalleryShow__currentImage__BlDgV",
                choose3dOrAr: "GalleryShow__choose3dOrAr__1tC_7",
                text: "GalleryShow__text__1BPIF",
                "col-3": "GalleryShow__col-3__3WQnr",
                productInfo: "GalleryShow__productInfo__1LC6A",
                heading: "GalleryShow__heading__1B8GS",
                bazaaGalleryRating: "GalleryShow__bazaaGalleryRating__13wRm",
                "row-star": "GalleryShow__row-star__3Z7LA",
                starIconWrap: "GalleryShow__starIconWrap__1uXGw",
                starInfo: "GalleryShow__starInfo__1RTOe",
                "row-price": "GalleryShow__row-price__3ugqC",
                price: "GalleryShow__price__2Qald",
                hidePrice: "GalleryShow__hidePrice__24hx0",
                priceRow: "GalleryShow__priceRow__1awGQ",
                save: "GalleryShow__save__2wSr0",
                regularPrice: "GalleryShow__regularPrice__29cKO",
                info: "GalleryShow__info__E3LAw",
                bell: "GalleryShow__bell__1Usgg",
                hideInfo: "GalleryShow__hideInfo__3bj4Y",
                primaryBtnGroup: "GalleryShow__primaryBtnGroup__3r3U4",
                button: "GalleryShow__button__2IM5w",
                loveIcon: "GalleryShow__loveIcon__2NPzT",
                secondaryBtn: "GalleryShow__secondaryBtn__1oILt",
                addToCompare: "GalleryShow__addToCompare__1iH0C",
                "row-download": "GalleryShow__row-download__4-8lj",
                downloadBtn: "GalleryShow__downloadBtn__6pq_V",
                galleryShowNormal: "GalleryShow__galleryShowNormal__1vf8N",
                imgContainer: "GalleryShow__imgContainer__3eG46",
                currentImageWrap: "GalleryShow__currentImageWrap__3JJrj",
                CarouselContainer: "GalleryShow__CarouselContainer__2F0w5",
                swiperButtonPrev: "GalleryShow__swiperButtonPrev__2hQ0f",
                swiperButtonNext: "GalleryShow__swiperButtonNext__1uEMe",
                fewImages: "GalleryShow__fewImages__Kga0t",
                downloadGroup: "GalleryShow__downloadGroup__ffRdv",
                verticalSwiperButtonPrev: "GalleryShow__verticalSwiperButtonPrev__3_zWC",
                verticalSwiperButtonNext: "GalleryShow__verticalSwiperButtonNext__y7ySc",
                horizontalCarouselContainer: "GalleryShow__horizontalCarouselContainer__3L7FJ",
                bazzaGalleryRating: "GalleryShow__bazzaGalleryRating__37YF6",
                galleryThumbnailsContainer: "GalleryShow__galleryThumbnailsContainer__Kfy8w",
                galleryThumbnails: "GalleryShow__galleryThumbnails__cmXNk",
                thumbnailsSlide: "GalleryShow__thumbnailsSlide__3MDOc",
                thumbnailActive: "GalleryShow__thumbnailActive__3001r",
                thumbnailsButtonPrev: "GalleryShow__thumbnailsButtonPrev__6S6qZ",
                thumbnailsButtonNext: "GalleryShow__thumbnailsButtonNext__3TDJZ"
            }
        },
        695: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                wrapper: "DownloadFiles__wrapper__12Pk2",
                themeWhite: "DownloadFiles__themeWhite__lVLfY",
                container: "DownloadFiles__container__3xGF7",
                borderButton: "DownloadFiles__borderButton__1E0u3"
            }
        },
        696: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                section: "RecommandForYou__section__lvMp7",
                productCardWraper: "RecommandForYou__productCardWraper__1ju_C",
                Heading: "RecommandForYou__Heading__32ToX",
                themeWhite: "RecommandForYou__themeWhite__cLmJd",
                carouselContainer: "RecommandForYou__carouselContainer__1o42q"
            }
        },
        697: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                section: "RelatedProducts__section__1ZPDB",
                productCardWraper: "RelatedProducts__productCardWraper__3jz0h",
                Heading: "RelatedProducts__Heading__1OBqF",
                themeWhite: "RelatedProducts__themeWhite__3n8u-",
                carouselContainer: "RelatedProducts__carouselContainer__1eOPc"
            }
        },
        698: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                carouselContainer: "TwoRowCarousel__carouselContainer__8pTpM",
                visibleDiv: "TwoRowCarousel__visibleDiv__9j8YV",
                innerSlides: "TwoRowCarousel__innerSlides__3zMoK"
            }
        },
        699: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                wrapper: "Accessories__wrapper__3pTw1",
                heading: "Accessories__heading__3c4j7",
                themeWhite: "Accessories__themeWhite__1dt00",
                content: "Accessories__content__3TSHE",
                carouselContainer: "Accessories__carouselContainer__3EI-K",
                cardCarousel: "Accessories__cardCarousel__21e4S",
                twoRowCarouselCard: "Accessories__twoRowCarouselCard__3pjLJ",
                cardCarouselCard: "Accessories__cardCarouselCard__2uumL",
                card: "Accessories__card__1s6gV",
                image: "Accessories__image__1i1Bl",
                text: "Accessories__text__P7eYM",
                title: "Accessories__title__27SEs",
                price: "Accessories__price__3-oda",
                bigItem: "Accessories__bigItem__2OOT5"
            }
        },
        702: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                imageCarousel: "HardwareBrief__imageCarousel__3vFPU",
                inner: "HardwareBrief__inner__LAkSi",
                itemImg: "HardwareBrief__itemImg__1KdfY",
                item: "HardwareBrief__item__1NG_w",
                prevDiv: "HardwareBrief__prevDiv__3yac4",
                nextDiv: "HardwareBrief__nextDiv__3fiPL",
                bannerInfo: "HardwareBrief__bannerInfo__2K_oT",
                promotion: "HardwareBrief__promotion__fimzb",
                hardwareBriefLayout: "HardwareBrief__hardwareBriefLayout___uTMz",
                themeWhite: "HardwareBrief__themeWhite__2_LIU",
                carouselWrapper: "HardwareBrief__carouselWrapper__2iirX",
                productReview: "HardwareBrief__productReview__O6AzK",
                productReviewInner: "HardwareBrief__productReviewInner__2NpYg",
                productReviewItem: "HardwareBrief__productReviewItem__mjypg",
                contentImage: "HardwareBrief__contentImage__10UVU",
                scenarioContent: "HardwareBrief__scenarioContent__metvW",
                contentName: "HardwareBrief__contentName__3tYss",
                contentShortDesc: "HardwareBrief__contentShortDesc__lFikq",
                productReviewInnerBox: "HardwareBrief__productReviewInnerBox__2wC2i",
                indicator: "HardwareBrief__indicator__2SNz2",
                indicatorSingleline: "HardwareBrief__indicatorSingleline__2HDAo",
                indicatorLine: "HardwareBrief__indicatorLine__219rZ",
                indicatorActive: "HardwareBrief__indicatorActive__BJU99",
                active: "HardwareBrief__active__10EMW",
                touchRange: "HardwareBrief__touchRange__1TUGj",
                productReviewSeeAll: "HardwareBrief__productReviewSeeAll__iEIrN"
            }
        },
        703: function(e, t, o) {
            e.exports = {
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                overview: "LevelFourProductOverviewPage__overview__2UD32",
                isFirstSection: "LevelFourProductOverviewPage__isFirstSection__2tK1a",
                section: "LevelFourProductOverviewPage__section__26ixa"
            }
        },
        704: function(e, t, o) {},
        784: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNSAyLjVMMTAuNyA3Ljk5OTk5TDUgMTMuNSIgc3Ryb2tlPSIjMTgxODE4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="
        },
        785: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyAgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTExIDEzLjVMNS4zIDguMDAwMDFMMTEgMi41IiBzdHJva2U9IiMxODE4MTgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="
        },
        912: function(e, t, o) {
            "use strict";
            var r = o(691),
                n = o.n(r);
            t.default = n.a
        },
        913: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyAgdmlld0JveD0iMCAwIDE3IDE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjE1NDc1IDExLjMzMzRDNS4wODgwOSAxMi4xMzM0IDUuNTU0NzQgMTIuODY2NyA2LjI4ODA4IDEzLjIwMDFDNy4wODgwNyAxMy41MzM0IDcuODg4MDggMTMuMjY2NyA4LjQyMTQyIDEyLjY2NjdMNS4xNTQ3NSAxMS4zMzM0WiIgc3Ryb2tlPSIjQ0NDQ0NDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjIyNyAyLjQ3NjA4QzEwLjc1NjEgMi4yNzYwOCAxMC4xNTYxIDIuNDc2MDggOS45NTYwNSAzLjAwOTQyTDExLjY4OTQgMy43NDI3NUMxMS44ODk0IDMuMjA5NDIgMTEuNjg5NCAyLjY3NjA4IDExLjIyMjcgMi40NzYwOFoiIHN0cm9rZT0iI0NDQ0NDQyIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MjI2IDExLjMzMzRMMTMuMDIyOSA3LjUzMzM2QzEzLjYyMyA2LjAwMDAzIDEzLjAyMjkgNC4zMzMzNiAxMS42ODkzIDMuNzMzMzZMOS43NTU1MyAyLjkzMzM2QzguMzU1MjMgMi4zMzMzNiA2Ljc1NDg5IDMuMTMzMzYgNi4xNTQ3NiA0LjY2NjY5TDQuNTU0NCA4LjQ2NjY5TDMuNjg3NTUgOC44MDAwM0MzLjIyMDc5IDkuMDAwMDMgMi44MjA3IDkuMzMzMzYgMi42MjA2NSA5LjgwMDAzTDIuNDg3MyAxMC4xMzM0TDExLjY4OTMgMTMuOTMzNEwxMS44MjI2IDEzLjZDMTIuMDIyNyAxMy4xMzM0IDEyLjAyMjcgMTIuNiAxMS44MjI2IDEyLjEzMzRMMTEuNDIyNiAxMS4zMzM0WiIgc3Ryb2tlPSIjQ0NDQ0NDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="
        },
        914: function(e, t, o) {
            var r = o(6),
                n = Math.hypot,
                l = Math.abs,
                c = Math.sqrt;
            r({
                target: "Math",
                stat: !0,
                forced: !!n && n(1 / 0, NaN) !== 1 / 0
            }, {
                hypot: function(e, t) {
                    for (var o, div, r = 0, i = 0, n = arguments.length, d = 0; i < n;) d < (o = l(arguments[i++])) ? (r = r * (div = d / o) * div + 1, d = o) : r += o > 0 ? (div = o / d) * div : o;
                    return d === 1 / 0 ? 1 / 0 : d * c(r)
                }
            })
        },
        915: function(e, t, o) {
            "use strict";
            var r = o(692),
                n = o.n(r);
            t.default = n.a
        },
        916: function(e, t, o) {
            "use strict";
            var r = o(693),
                n = o.n(r);
            t.default = n.a
        },
        917: function(e, t, o) {
            "use strict";
            var r = o(694),
                n = o.n(r);
            t.default = n.a
        },
        918: function(e, t, o) {
            "use strict";
            var r = o(695),
                n = o.n(r);
            t.default = n.a
        },
        919: function(e, t, o) {
            "use strict";
            var r = o(696),
                n = o.n(r);
            t.default = n.a
        },
        920: function(e, t, o) {
            "use strict";
            var r = o(697),
                n = o.n(r);
            t.default = n.a
        },
        921: function(e, t, o) {
            "use strict";
            var r = o(698),
                n = o.n(r);
            t.default = n.a
        },
        922: function(e, t, o) {
            "use strict";
            var r = o(699),
                n = o.n(r);
            t.default = n.a
        },
        925: function(e, t, o) {
            "use strict";
            var r = o(702),
                n = o.n(r);
            t.default = n.a
        },
        926: function(e, t, o) {
            "use strict";
            var r = o(703),
                n = o.n(r);
            t.default = n.a
        },
        927: function(e, t, o) {
            "use strict";
            var r = o(704);
            o.n(r).a
        }
    }
]);