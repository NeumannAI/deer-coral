/*! For license information please see LICENSES */
(window.webpackJsonp_cj86gji4 = window.webpackJsonp_cj86gji4 || []).push([
    [3], {
        588: function(e, t, n) {
            "use strict";
            var r = n(6),
                o = n(115),
                l = n(67),
                d = n(28),
                h = n(41),
                c = n(308),
                f = n(116),
                v = n(117),
                m = n(55),
                w = v("splice"),
                y = m("splice", {
                    ACCESSORS: !0,
                    0: 0,
                    1: 2
                }),
                C = Math.max,
                x = Math.min;
            r({
                target: "Array",
                proto: !0,
                forced: !w || !y
            }, {
                splice: function(e, t) {
                    var n, r, v, m, w, y, T = h(this),
                        E = d(T.length),
                        S = o(e, E),
                        P = arguments.length;
                    if (0 === P ? n = r = 0 : 1 === P ? (n = 0, r = E - S) : (n = P - 2, r = x(C(l(t), 0), E - S)), E + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
                    for (v = c(T, r), m = 0; m < r; m++)(w = S + m) in T && f(v, m, T[w]);
                    if (v.length = r, n < r) {
                        for (m = S; m < E - r; m++) y = m + n, (w = m + r) in T ? T[y] = T[w] : delete T[y];
                        for (m = E; m > E - r + n; m--) delete T[m - 1]
                    } else if (n > r)
                        for (m = E - r; m > S; m--) y = m + n - 1, (w = m + r - 1) in T ? T[y] = T[w] : delete T[y];
                    for (m = 0; m < n; m++) T[m + S] = arguments[m + 2];
                    return T.length = E - r + n, v
                }
            })
        },
        592: function(e, t, n) {
            "use strict";
            n(36), n(46), n(47), n(114), n(32), n(54), n(13), n(24), n(16), n(48), n(33), n(49), n(65);
            var r, o = n(4),
                l = n(3),
                d = n(81),
                h = (r = function(e, b) {
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
                c = function(e, t, n, desc) {
                    var r, l = arguments.length,
                        d = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(o.a)(Reflect)) && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, n, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (d = (l < 3 ? r(d) : l > 3 ? r(t, n, d) : r(t, n)) || d);
                    return l > 3 && d && Object.defineProperty(t, n, d), d
                },
                f = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, l) {
                        function d(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function h(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(d, h)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                },
                v = function(e, body) {
                    var t, n, r, g, o = {
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
                        return function(d) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                                    switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                        case 0:
                                        case 1:
                                            r = l;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: l[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = l[1], l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < r[1]) {
                                                o.label = r[1], r = l;
                                                break
                                            }
                                            if (r && o.label < r[2]) {
                                                o.label = r[2], o.ops.push(l);
                                                break
                                            }
                                            r[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    l = body.call(e, o)
                                } catch (e) {
                                    l = [6, e], n = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, d])
                        }
                    }
                },
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.checkProductCardArray = [], t.productCardRowNumber = 0, t.productCardContentTemp = {
                            contentCount: {
                                mainImageRow: 0,
                                logoRow: 0,
                                awardIconRow: 0,
                                productInfoBox: 0,
                                featureDescriptionRow: 0,
                                primaryBtnAndWishlistBtnRow: 0,
                                whereToBuyRow: 0,
                                colorSelectorRow: 0,
                                compareRow: 0,
                                headingRow: 0,
                                subHeadingRow: 0,
                                discountRow: 0
                            },
                            contentLayout: {
                                headingRowHeight: 0,
                                checkHeadingRowHeight: !1
                            }
                        }, t.productCardContent = [], t.productCardLayoutListObj = [], t
                    }
                    return h(t, e), t.prototype.getProductCardRowNumber = function(e) {
                        switch (e) {
                            case "desktop":
                                return 3;
                            case "tablet":
                                return 2;
                            case "mobile":
                                return 1;
                            default:
                                return 3
                        }
                    }, t.prototype.getProductCardContentLayout = function(e, t, n) {
                        var r = [];
                        document.querySelectorAll("." + n + " .headingRow h2").forEach((function(desc) {
                            r.push({
                                headingRowHeight: desc.offsetHeight
                            })
                        })), this.productCardLayoutListObj = r, this.checkHideProductCardContent(e, t)
                    }, t.prototype.checkHideProductCardContent = function(e, t) {
                        return f(this, void 0, Promise, (function() {
                            var n, i, r, o = this;
                            return v(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        for (n = 0, i = 0; i < e.length; i++) r = {
                                            rowNum: 0,
                                            mainImageRow: 0,
                                            logoRow: 0,
                                            awardIconRow: 0,
                                            productInfoBox: 0,
                                            featureDescriptionRow: 0,
                                            primaryBtnAndWishlistBtnRow: 0,
                                            whereToBuyRow: 0,
                                            colorSelectorRow: 0,
                                            compareRow: 0,
                                            headingRow: 0,
                                            subHeadingRow: 0,
                                            discountRow: 0
                                        }, e[i].ProductLogo && e[i].ProductLogo.length > 0 && (r.logoRow += 1), "" !== e[i].Price && (r.productInfoBox += 1), "" === e[i].RegularPrice && "" === e[i].Discount || (r.discountRow += 1), null !== e[i].ImageList && (r.mainImageRow += 1, !Array.isArray(e[i].ImageList) || 1 === e[i].ImageList.length && "Y" === e[i].ImageList[0].DefaultFlag || (r.colorSelectorRow += 1)), "" !== e[i].ModelSpec && (r.featureDescriptionRow += 1), (void 0 !== e[i].RightHeader && 0 !== e[i].RightHeader.length || void 0 !== e[i].LeftHeader && ("Y" === e[i].LeftHeader.NewsFlag || "Y" === e[i].LeftHeader.DealFlag)) && (r.awardIconRow += 1), "" === e[i].Buy.Link && 1 !== parseInt(e[i].WhereToBuy.WTBFlag) && "" === e[i].LearnMore || (r.primaryBtnAndWishlistBtnRow += 1), ("" !== e[i].Buy.Link && (1 === parseInt(e[i].WhereToBuy.WTBFlag) || "" !== e[i].LearnMore) || 1 === parseInt(e[i].WhereToBuy.WTBFlag) && "" !== e[i].LearnMore) && (r.whereToBuyRow += 1), "" !== e[i].Compare && (r.compareRow += 1), "" === e[i].Name && "" === e[i].Size || (r.headingRow += 1), "" !== e[i].Size && (r.subHeadingRow += 1), r.rowNum = n, (i + 1) % this.getProductCardRowNumber(t) == 0 && (r.rowNum = n, n += 1), this.$set(this.checkProductCardArray, i, r);
                                        return [4, this.getHideProductCardContent(e, t)];
                                    case 1:
                                        return l.sent(), window.onfocus = function() {
                                            o.displayBlockBVIfHasComment()
                                        }, setTimeout((function() {
                                            try {
                                                o.displayBlockBVIfHasComment()
                                            } catch (e) {}
                                        }), 2e3), [2]
                                }
                            }))
                        }))
                    }, t.prototype.displayBlockBVIfHasComment = function() {
                        Array.from(document.getElementsByClassName("bv_numReviews_component_container")).find((function(e) {
                            e.closest(".bazaaInlineRating").style.display = "block", "(0)" === e.textContent && e.closest(".bazaaInlineRating > div > .bv_main_container").style.setProperty("display", "none", "important")
                        }))
                    }, t.prototype.initProductCardContentCount = function() {
                        this.productCardContentTemp.contentCount.mainImageRow = 0, this.productCardContentTemp.contentCount.logoRow = 0, this.productCardContentTemp.contentCount.colorSelectorRow = 0, this.productCardContentTemp.contentCount.productInfoBox = 0, this.productCardContentTemp.contentCount.awardIconRow = 0, this.productCardContentTemp.contentCount.featureDescriptionRow = 0, this.productCardContentTemp.contentCount.primaryBtnAndWishlistBtnRow = 0, this.productCardContentTemp.contentCount.whereToBuyRow = 0, this.productCardContentTemp.contentCount.compareRow = 0, this.productCardContentTemp.contentCount.headingRow = 0, this.productCardContentTemp.contentCount.subHeadingRow = 0, this.productCardContentTemp.contentCount.discountRow = 0, this.productCardContentTemp.contentLayout.headingRowHeight = 0, this.productCardContentTemp.contentLayout.checkHeadingRowHeight = !1
                    }, t.prototype.getHideProductCardContent = function(e, t) {
                        var n, r;
                        this.productCardContentTemp.contentLayout.checkHeadingRowHeight = !1;
                        var o;
                        o = e.length / this.getProductCardRowNumber(t), this.productCardRowNumber = Math.ceil(o);
                        for (var i = 0; i < this.productCardRowNumber; i++) {
                            for (var l = 0; l < this.checkProductCardArray.length; l++) i === this.checkProductCardArray[l].rowNum && (this.productCardContentTemp.contentCount.mainImageRow += this.checkProductCardArray[l].mainImageRow, this.productCardContentTemp.contentCount.logoRow += this.checkProductCardArray[l].logoRow, this.productCardContentTemp.contentCount.colorSelectorRow += this.checkProductCardArray[l].colorSelectorRow, this.productCardContentTemp.contentCount.productInfoBox += this.checkProductCardArray[l].productInfoBox, this.productCardContentTemp.contentCount.awardIconRow += this.checkProductCardArray[l].awardIconRow, this.productCardContentTemp.contentCount.featureDescriptionRow += this.checkProductCardArray[l].featureDescriptionRow, this.productCardContentTemp.contentCount.primaryBtnAndWishlistBtnRow += this.checkProductCardArray[l].primaryBtnAndWishlistBtnRow, this.productCardContentTemp.contentCount.whereToBuyRow += this.checkProductCardArray[l].whereToBuyRow, this.productCardContentTemp.contentCount.compareRow += this.checkProductCardArray[l].compareRow, this.productCardContentTemp.contentCount.headingRow += this.checkProductCardArray[l].headingRow, this.productCardContentTemp.contentCount.subHeadingRow += this.checkProductCardArray[l].subHeadingRow, this.productCardContentTemp.contentCount.discountRow += this.checkProductCardArray[l].discountRow, (null === (n = this.productCardLayoutListObj[l]) || void 0 === n ? void 0 : n.headingRowHeight) > this.productCardContentTemp.contentLayout.headingRowHeight && (this.productCardContentTemp.contentLayout.checkHeadingRowHeight = !0, this.productCardContentTemp.contentLayout.headingRowHeight = null === (r = this.productCardLayoutListObj[l]) || void 0 === r ? void 0 : r.headingRowHeight));
                            for (var d = 0; d < e.length; d++) {
                                var h = {
                                    isHideContent: {
                                        mainImageRow: !1,
                                        logoRow: !1,
                                        awardIconRow: !1,
                                        productInfoBox: !1,
                                        featureDescriptionRow: !1,
                                        primaryBtnAndWishlistBtnRow: !1,
                                        whereToBuyRow: !1,
                                        colorSelectorRow: !1,
                                        compareRow: !1,
                                        headingRow: !1,
                                        subHeadingRow: !1,
                                        discountRow: !1
                                    },
                                    contentLayout: {
                                        headingRowHeight: 0,
                                        checkHeadingRowHeight: !1
                                    }
                                };
                                i === this.checkProductCardArray[d].rowNum && (h.isHideContent.mainImageRow = 0 === this.productCardContentTemp.contentCount.mainImageRow, h.isHideContent.logoRow = 0 === this.productCardContentTemp.contentCount.logoRow, h.isHideContent.colorSelectorRow = 0 === this.productCardContentTemp.contentCount.colorSelectorRow, h.isHideContent.productInfoBox = 0 === this.productCardContentTemp.contentCount.productInfoBox, h.isHideContent.awardIconRow = 0 === this.productCardContentTemp.contentCount.awardIconRow, h.isHideContent.featureDescriptionRow = 0 === this.productCardContentTemp.contentCount.featureDescriptionRow, h.isHideContent.primaryBtnAndWishlistBtnRow = 0 === this.productCardContentTemp.contentCount.primaryBtnAndWishlistBtnRow, h.isHideContent.whereToBuyRow = 0 === this.productCardContentTemp.contentCount.whereToBuyRow, h.isHideContent.compareRow = 0 === this.productCardContentTemp.contentCount.compareRow, h.isHideContent.headingRow = 0 === this.productCardContentTemp.contentCount.headingRow, h.isHideContent.subHeadingRow = 0 === this.productCardContentTemp.contentCount.subHeadingRow, h.isHideContent.discountRow = 0 === this.productCardContentTemp.contentCount.discountRow, h.contentLayout.headingRowHeight = this.productCardContentTemp.contentLayout.headingRowHeight, h.contentLayout.checkHeadingRowHeight = this.productCardContentTemp.contentLayout.checkHeadingRowHeight, this.$set(this.productCardContent, d, h))
                            }
                            this.initProductCardContentCount()
                        }
                    }, t = c([Object(d.Component)({})], t)
                }(l.default);
            t.a = m
        },
        599: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
                return o
            }
        },
        602: function(e, t, n) {
            var r = n(392),
                o = n(815),
                l = n(816);

            function d(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.__data__ = new r; ++t < n;) this.add(e[t])
            }
            d.prototype.add = d.prototype.push = o, d.prototype.has = l, e.exports = d
        },
        603: function(e, t) {
            e.exports = function(e, t) {
                return e.has(t)
            }
        },
        604: function(e, t, n) {
            var r = n(390);
            e.exports = function(e) {
                if ("string" == typeof e || r(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }
        },
        605: function(e, t, n) {
            "use strict";
            n(36), n(46), n(47), n(114), n(32), n(54), n(13), n(24), n(16), n(48), n(33), n(49), n(65);
            var r, o = n(4),
                l = n(3),
                d = n(81),
                h = (r = function(e, b) {
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
                c = function(e, t, n, desc) {
                    var r, l = arguments.length,
                        d = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(o.a)(Reflect)) && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, n, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (d = (l < 3 ? r(d) : l > 3 ? r(t, n, d) : r(t, n)) || d);
                    return l > 3 && d && Object.defineProperty(t, n, d), d
                },
                f = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, l) {
                        function d(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function h(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                l(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(d, h)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                },
                v = function(e, body) {
                    var t, n, r, g, o = {
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
                        return function(d) {
                            return function(l) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                                    switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                        case 0:
                                        case 1:
                                            r = l;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: l[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = l[1], l = [0];
                                            continue;
                                        case 7:
                                            l = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                o.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && o.label < r[1]) {
                                                o.label = r[1], r = l;
                                                break
                                            }
                                            if (r && o.label < r[2]) {
                                                o.label = r[2], o.ops.push(l);
                                                break
                                            }
                                            r[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    l = body.call(e, o)
                                } catch (e) {
                                    l = [6, e], n = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, d])
                        }
                    }
                },
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.checkProductCardArray = [], t.productCardRowNumber = 0, t.hideProductCardContentCount = {
                            mainImageRow: 0,
                            awardIconRow: 0,
                            productInfoBox: 0,
                            featureDescriptionRow: 0,
                            primaryBtnAndWishlistBtnRow: 0,
                            whereToBuyRow: 0,
                            colorSelectorRow: 0,
                            compareRow: 0,
                            headingRow: 0,
                            discountRow: 0
                        }, t.productCardContent = [], t
                    }
                    return h(t, e), t.prototype.getFieldHeight = function(e, t) {
                        var n = 0;
                        document.querySelectorAll("." + t + " .headingRow").forEach((function(desc) {
                            desc.offsetHeight > n && (n = desc.offsetHeight)
                        })), this.productCardLayoutObj = {
                            headingRowHeight: n
                        }, this.checkHideProductCardContent(e)
                    }, t.prototype.checkHideProductCardContent = function(e) {
                        return f(this, void 0, Promise, (function() {
                            var i, t, n = this;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        for (0, i = 0; i < e.length; i++) t = {
                                            rowNum: 0,
                                            mainImageRow: 0,
                                            awardIconRow: 0,
                                            productInfoBox: 0,
                                            featureDescriptionRow: 0,
                                            primaryBtnAndWishlistBtnRow: 0,
                                            whereToBuyRow: 0,
                                            colorSelectorRow: 0,
                                            compareRow: 0,
                                            headingRow: 0,
                                            discountRow: 0
                                        }, "" !== e[i].Price && (t.productInfoBox += 1), "" === e[i].RegularPrice && "" === e[i].Discount || (t.discountRow += 1), null !== e[i].ImageList && (t.mainImageRow += 1, !Array.isArray(e[i].ImageList) || 1 === e[i].ImageList.length && "Y" === e[i].ImageList[0].DefaultFlag || (t.colorSelectorRow += 1)), "" !== e[i].ModelSpec && (t.featureDescriptionRow += 1), (void 0 !== e[i].RightHeader && 0 !== e[i].RightHeader.length || void 0 !== e[i].LeftHeader && ("Y" === e[i].LeftHeader.NewsFlag || "Y" === e[i].LeftHeader.DealFlag)) && (t.awardIconRow += 1), "" === e[i].Buy.Link && 1 !== e[i].WhereToBuy.WTBFlag && "" === e[i].LearnMore || (t.primaryBtnAndWishlistBtnRow += 1), ("" !== e[i].Buy.Link && (1 === e[i].WhereToBuy.WTBFlag || "" !== e[i].LearnMore) || 1 === e[i].WhereToBuy.WTBFlag && "" !== e[i].LearnMore) && (t.whereToBuyRow += 1), "" !== e[i].Compare && (t.compareRow += 1), "" === e[i].Name && "" === e[i].Size || (t.headingRow += 1), t.rowNum = 0, this.$set(this.checkProductCardArray, i, t);
                                        return [4, this.getHideProductCardContent(e)];
                                    case 1:
                                        return r.sent(), window.onfocus = function() {
                                            n.displayBlockBVIfHasComment()
                                        }, setTimeout((function() {
                                            try {
                                                n.displayBlockBVIfHasComment()
                                            } catch (e) {}
                                        }), 2e3), [2]
                                }
                            }))
                        }))
                    }, t.prototype.displayBlockBVIfHasComment = function() {
                        Array.from(document.getElementsByClassName("bv_numReviews_component_container")).find((function(e) {
                            e.closest(".bazaaInlineRating").style.display = "block", "(0)" === e.textContent && e.closest(".bazaaInlineRating > div > .bv_main_container").style.setProperty("display", "none", "important")
                        }))
                    }, t.prototype.initProductCardContentCount = function() {
                        this.hideProductCardContentCount.mainImageRow = 0, this.hideProductCardContentCount.colorSelectorRow = 0, this.hideProductCardContentCount.productInfoBox = 0, this.hideProductCardContentCount.awardIconRow = 0, this.hideProductCardContentCount.featureDescriptionRow = 0, this.hideProductCardContentCount.primaryBtnAndWishlistBtnRow = 0, this.hideProductCardContentCount.whereToBuyRow = 0, this.hideProductCardContentCount.compareRow = 0, this.hideProductCardContentCount.headingRow = 0, this.hideProductCardContentCount.discountRow = 0
                    }, t.prototype.getHideProductCardContent = function(e) {
                        this.initProductCardContentCount();
                        for (var t = 0; t < this.checkProductCardArray.length; t++) this.hideProductCardContentCount.mainImageRow += this.checkProductCardArray[t].mainImageRow, this.hideProductCardContentCount.colorSelectorRow += this.checkProductCardArray[t].colorSelectorRow, this.hideProductCardContentCount.productInfoBox += this.checkProductCardArray[t].productInfoBox, this.hideProductCardContentCount.awardIconRow += this.checkProductCardArray[t].awardIconRow, this.hideProductCardContentCount.featureDescriptionRow += this.checkProductCardArray[t].featureDescriptionRow, this.hideProductCardContentCount.primaryBtnAndWishlistBtnRow += this.checkProductCardArray[t].primaryBtnAndWishlistBtnRow, this.hideProductCardContentCount.whereToBuyRow += this.checkProductCardArray[t].whereToBuyRow, this.hideProductCardContentCount.compareRow += this.checkProductCardArray[t].compareRow, this.hideProductCardContentCount.headingRow += this.checkProductCardArray[t].headingRow, this.hideProductCardContentCount.discountRow += this.checkProductCardArray[t].discountRow;
                        for (var n = 0; n < e.length; n++) {
                            var r = {
                                isHideContent: {
                                    mainImageRow: !1,
                                    awardIconRow: !1,
                                    productInfoBox: !1,
                                    featureDescriptionRow: !1,
                                    primaryBtnAndWishlistBtnRow: !1,
                                    whereToBuyRow: !1,
                                    colorSelectorRow: !1,
                                    compareRow: !1,
                                    headingRow: !1,
                                    discountRow: !1
                                },
                                contentLayout: {}
                            };
                            r.isHideContent.mainImageRow = 0 === this.hideProductCardContentCount.mainImageRow, r.isHideContent.colorSelectorRow = 0 === this.hideProductCardContentCount.colorSelectorRow, r.isHideContent.productInfoBox = 0 === this.hideProductCardContentCount.productInfoBox, r.isHideContent.awardIconRow = 0 === this.hideProductCardContentCount.awardIconRow, r.isHideContent.featureDescriptionRow = 0 === this.hideProductCardContentCount.featureDescriptionRow, r.isHideContent.primaryBtnAndWishlistBtnRow = 0 === this.hideProductCardContentCount.primaryBtnAndWishlistBtnRow, r.isHideContent.whereToBuyRow = 0 === this.hideProductCardContentCount.whereToBuyRow, r.isHideContent.compareRow = 0 === this.hideProductCardContentCount.compareRow, r.isHideContent.headingRow = 0 === this.hideProductCardContentCount.headingRow, r.isHideContent.discountRow = 0 === this.hideProductCardContentCount.discountRow, r.contentLayout = void 0 !== this.productCardLayoutObj ? this.productCardLayoutObj : {}, this.$set(this.productCardContent, n, r)
                        }
                    }, t = c([Object(d.Component)({})], t)
                }(l.default);
            t.a = m
        },
        621: function(e, t, n) {
            var r = n(766),
                o = n(767),
                l = n(774),
                d = Math.max;
            e.exports = function(e, t, n) {
                var h = null == e ? 0 : e.length;
                if (!h) return -1;
                var c = null == n ? 0 : l(n);
                return c < 0 && (c = d(h + c, 0)), r(e, o(t, 3), c)
            }
        },
        622: function(e, t, n) {
            var r = n(814),
                o = n(75);
            e.exports = function e(t, n, l, d, h) {
                return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, l, d, e, h))
            }
        },
        623: function(e, t) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }
        },
        624: function(e, t, n) {
            var r = n(158),
                o = n(390),
                l = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                d = /^\w*$/;
            e.exports = function(e, object) {
                if (r(e)) return !1;
                var t = typeof e;
                return !("number" != t && "symbol" != t && "boolean" != t && null != e && !o(e)) || (d.test(e) || !l.test(e) || null != object && e in Object(object))
            }
        },
        625: function(e, t) {
            e.exports = function(e) {
                return e
            }
        },
        627: function(e, t, n) {
            "use strict";
            n(13), n(24), n(17), n(37);
            var r, o = n(4),
                l = n(0),
                d = n(837),
                h = n.n(d),
                c = (r = function(e, b) {
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
                f = function(e, t, n, desc) {
                    var r, l = arguments.length,
                        d = l < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(o.a)(Reflect)) && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, n, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (d = (l < 3 ? r(d) : l > 3 ? r(t, n, d) : r(t, n)) || d);
                    return l > 3 && d && Object.defineProperty(t, n, d), d
                },
                v = {
                    addToCompare: h()("_c_uuid_")
                },
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.idMixinInstanceUid = null, t
                    }
                    return c(t, e), t.prototype.mounted = function() {
                        var e = null;
                        this.instanceName && this.instanceName in v && (e = v[this.instanceName].uniqueId), this.idMixinInstanceUid = e ? e("_" + this.instanceName + "_uuid_") : h()("_g_uuid_")
                    }, Object.defineProperty(t.prototype, "getComponentId", {
                        get: function() {
                            var e = this;
                            return function(t) {
                                var n = e.idMixinInstanceUid || "";
                                return n ? (t = String(t || "").replace(/\s+/g, "_")) ? t + "_" + n : n : null
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), f([Object(l.Prop)()], t.prototype, "instanceName", void 0), t = f([Object(l.Component)({})], t)
                }(l.Vue);
            t.a = m
        },
        652: function(e, t, n) {
            var r = n(6),
                o = n(404).values;
            r({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return o(e)
                }
            })
        },
        653: function(e, t, n) {
            var r = n(622);
            e.exports = function(e, t) {
                return r(e, t)
            }
        },
        654: function(e, t, n) {
            var r = n(865),
                o = n(779),
                l = n(780),
                d = n(781),
                h = l((function(e, t) {
                    return d(e) ? r(e, o(t, 1, d, !0)) : []
                }));
            e.exports = h
        },
        655: function(e, t, n) {
            var r = n(778);
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
            }
        },
        656: function(e, t) {
            e.exports = function(e, t, n) {
                for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
                    if (n(t, e[r])) return !0;
                return !1
            }
        },
        657: function(e, t, n) {
            var r = n(307),
                o = n(779),
                l = n(399),
                d = n(158);
            e.exports = function() {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], h = e; h--;) t[h - 1] = arguments[h];
                return r(d(n) ? l(n) : [n], o(t, 1))
            }
        },
        658: function(e, t, n) {
            var r = n(873);
            e.exports = function(e) {
                return e && e.length ? r(e) : []
            }
        },
        659: function(e, t, n) {
            var r = n(599),
                o = n(876),
                l = n(780),
                d = n(877),
                h = l((function(e) {
                    var t = r(e, d);
                    return t.length && t[0] === e[0] ? o(t) : []
                }));
            e.exports = h
        },
        762: function(e, t, n) {
            var r = n(6),
                o = n(10),
                l = n(394).f;
            r({
                target: "Object",
                stat: !0,
                forced: o((function() {
                    return !Object.getOwnPropertyNames(1)
                }))
            }, {
                getOwnPropertyNames: l
            })
        },
        766: function(e, t) {
            e.exports = function(e, t, n, r) {
                for (var o = e.length, l = n + (r ? 1 : -1); r ? l-- : ++l < o;)
                    if (t(e[l], l, e)) return l;
                return -1
            }
        },
        767: function(e, t, n) {
            var r = n(812),
                o = n(822),
                l = n(625),
                d = n(158),
                h = n(831);
            e.exports = function(e) {
                return "function" == typeof e ? e : null == e ? l : "object" == typeof e ? d(e) ? o(e[0], e[1]) : r(e) : h(e)
            }
        },
        768: function(e, t, n) {
            var r = n(602),
                o = n(817),
                l = n(603);
            e.exports = function(e, t, n, d, h, c) {
                var f = 1 & n,
                    v = e.length,
                    m = t.length;
                if (v != m && !(f && m > v)) return !1;
                var w = c.get(e);
                if (w && c.get(t)) return w == t;
                var y = -1,
                    C = !0,
                    x = 2 & n ? new r : void 0;
                for (c.set(e, t), c.set(t, e); ++y < v;) {
                    var T = e[y],
                        E = t[y];
                    if (d) var S = f ? d(E, T, y, t, e, c) : d(T, E, y, e, t, c);
                    if (void 0 !== S) {
                        if (S) continue;
                        C = !1;
                        break
                    }
                    if (x) {
                        if (!o(t, (function(e, t) {
                                if (!l(x, t) && (T === e || h(T, e, n, d, c))) return x.push(t)
                            }))) {
                            C = !1;
                            break
                        }
                    } else if (T !== E && !h(T, E, n, d, c)) {
                        C = !1;
                        break
                    }
                }
                return c.delete(e), c.delete(t), C
            }
        },
        769: function(e, t, n) {
            var r = n(62);
            e.exports = function(e) {
                return e == e && !r(e)
            }
        },
        770: function(e, t) {
            e.exports = function(e, t) {
                return function(object) {
                    return null != object && (object[e] === t && (void 0 !== t || e in Object(object)))
                }
            }
        },
        771: function(e, t, n) {
            var r = n(772),
                o = n(604);
            e.exports = function(object, path) {
                for (var e = 0, t = (path = r(path, object)).length; null != object && e < t;) object = object[o(path[e++])];
                return e && e == t ? object : void 0
            }
        },
        772: function(e, t, n) {
            var r = n(158),
                o = n(624),
                l = n(824),
                d = n(773);
            e.exports = function(e, object) {
                return r(e) ? e : o(e, object) ? [e] : l(d(e))
            }
        },
        773: function(e, t, n) {
            var r = n(827);
            e.exports = function(e) {
                return null == e ? "" : r(e)
            }
        },
        774: function(e, t, n) {
            var r = n(834);
            e.exports = function(e) {
                var t = r(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        775: function(e, t, n) {
            var r = n(835)(n(621));
            e.exports = r
        },
        776: function(e, t, n) {
            "use strict";
            var r = n(6),
                o = n(68).findIndex,
                l = n(163),
                d = n(55),
                h = !0,
                c = d("findIndex");
            "findIndex" in [] && Array(1).findIndex((function() {
                h = !1
            })), r({
                target: "Array",
                proto: !0,
                forced: h || !c
            }, {
                findIndex: function(e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), l("findIndex")
        },
        777: function(e, t, n) {
            var r = n(778),
                o = n(305),
                l = n(855),
                d = n(774),
                h = n(856),
                c = Math.max;
            e.exports = function(e, t, n, f) {
                e = o(e) ? e : h(e), n = n && !f ? d(n) : 0;
                var v = e.length;
                return n < 0 && (n = c(v + n, 0)), l(e) ? n <= v && e.indexOf(t, n) > -1 : !!v && r(e, t, n) > -1
            }
        },
        778: function(e, t, n) {
            var r = n(766),
                o = n(853),
                l = n(854);
            e.exports = function(e, t, n) {
                return t == t ? l(e, t, n) : r(e, o, n)
            }
        },
        779: function(e, t, n) {
            var r = n(307),
                o = n(866);
            e.exports = function e(t, n, l, d, h) {
                var c = -1,
                    f = t.length;
                for (l || (l = o), h || (h = []); ++c < f;) {
                    var v = t[c];
                    n > 0 && l(v) ? n > 1 ? e(v, n - 1, l, d, h) : r(h, v) : d || (h[h.length] = v)
                }
                return h
            }
        },
        780: function(e, t, n) {
            var r = n(625),
                o = n(867),
                l = n(869);
            e.exports = function(e, t) {
                return l(o(e, t, r), e + "")
            }
        },
        781: function(e, t, n) {
            var r = n(305),
                o = n(75);
            e.exports = function(e) {
                return o(e) && r(e)
            }
        },
        782: function(e, t, n) {},
        783: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.install = t.swiper = t.Swiper = void 0;
            var r = l(n(902)),
                o = l(n(903));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = window.Swiper || r.default,
                h = ["beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize"],
                c = function(e) {
                    var t = function(e, t, n) {
                        var r = null;
                        return t.arg ? r = t.arg : n.data.attrs && (n.data.attrs.instanceName || n.data.attrs["instance-name"]) ? r = n.data.attrs.instanceName || n.data.attrs["instance-name"] : e.id && (r = e.id), r || "swiper"
                    };
                    return {
                        bind: function(e, t, n) {
                            n.context; - 1 === e.className.indexOf("swiper-container") && (e.className += (e.className ? " " : "") + "swiper-container")
                        },
                        inserted: function(n, r, l) {
                            var c = l.context,
                                f = r.value,
                                v = t(n, r, l),
                                m = c[v],
                                w = function(e, t, data) {
                                    var n = e.data && e.data.on || e.componentOptions && e.componentOptions.listeners;
                                    n && n[t] && n[t].fns(data)
                                };
                            if (!m) {
                                var y = (0, o.default)({}, e, f);
                                m = c[v] = new d(n, y), h.forEach((function(e) {
                                    m.on(e, (function() {
                                        w.apply(void 0, [l, e].concat(Array.prototype.slice.call(arguments))), w.apply(void 0, [l, e.replace(/([A-Z])/g, "-$1")].concat(Array.prototype.slice.call(arguments)))
                                    }))
                                }))
                            }
                            w(l, "ready", m)
                        },
                        componentUpdated: function(e, n, r) {
                            var o = t(e, n, r),
                                l = r.context[o];
                            l && (l.update && l.update(), l.navigation && l.navigation.update(), l.pagination && l.pagination.render(), l.pagination && l.pagination.update())
                        },
                        unbind: function(e, n, r) {
                            var o = t(e, n, r),
                                l = r.context[o];
                            l && (l.destroy && l.destroy(), delete r.context[o])
                        }
                    }
                },
                f = c({}),
                v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.directive("swiper", c(t))
                },
                m = {
                    Swiper: d,
                    swiper: f,
                    install: v
                };
            t.Swiper = d, t.swiper = f, t.install = v, t.default = m
        },
        812: function(e, t, n) {
            var r = n(813),
                o = n(821),
                l = n(770);
            e.exports = function(source) {
                var e = o(source);
                return 1 == e.length && e[0][2] ? l(e[0][0], e[0][1]) : function(object) {
                    return object === source || r(object, source, e)
                }
            }
        },
        813: function(e, t, n) {
            var r = n(391),
                o = n(622);
            e.exports = function(object, source, e, t) {
                var n = e.length,
                    l = n,
                    d = !t;
                if (null == object) return !l;
                for (object = Object(object); n--;) {
                    var data = e[n];
                    if (d && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return !1
                }
                for (; ++n < l;) {
                    var h = (data = e[n])[0],
                        c = object[h],
                        f = data[1];
                    if (d && data[2]) {
                        if (void 0 === c && !(h in object)) return !1
                    } else {
                        var v = new r;
                        if (t) var m = t(c, f, h, object, source, v);
                        if (!(void 0 === m ? o(f, c, 3, t, v) : m)) return !1
                    }
                }
                return !0
            }
        },
        814: function(e, t, n) {
            var r = n(391),
                o = n(768),
                l = n(818),
                d = n(820),
                h = n(164),
                c = n(158),
                f = n(310),
                v = n(398),
                m = "[object Object]",
                w = Object.prototype.hasOwnProperty;
            e.exports = function(object, e, t, n, y, C) {
                var x = c(object),
                    T = c(e),
                    E = x ? "[object Array]" : h(object),
                    S = T ? "[object Array]" : h(e),
                    P = (E = "[object Arguments]" == E ? m : E) == m,
                    M = (S = "[object Arguments]" == S ? m : S) == m,
                    k = E == S;
                if (k && f(object)) {
                    if (!f(e)) return !1;
                    x = !0, P = !1
                }
                if (k && !P) return C || (C = new r), x || v(object) ? o(object, e, t, n, y, C) : l(object, e, E, t, n, y, C);
                if (!(1 & t)) {
                    var I = P && w.call(object, "__wrapped__"),
                        R = M && w.call(e, "__wrapped__");
                    if (I || R) {
                        var z = I ? object.value() : object,
                            L = R ? e.value() : e;
                        return C || (C = new r), y(z, L, t, n, C)
                    }
                }
                return !!k && (C || (C = new r), d(object, e, t, n, y, C))
            }
        },
        815: function(e, t) {
            e.exports = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            }
        },
        816: function(e, t) {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        817: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }
        },
        818: function(e, t, n) {
            var r = n(160),
                o = n(402),
                l = n(309),
                d = n(768),
                h = n(819),
                c = n(623),
                f = r ? r.prototype : void 0,
                v = f ? f.valueOf : void 0;
            e.exports = function(object, e, t, n, r, f, m) {
                switch (t) {
                    case "[object DataView]":
                        if (object.byteLength != e.byteLength || object.byteOffset != e.byteOffset) return !1;
                        object = object.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        return !(object.byteLength != e.byteLength || !f(new o(object), new o(e)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return l(+object, +e);
                    case "[object Error]":
                        return object.name == e.name && object.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return object == e + "";
                    case "[object Map]":
                        var w = h;
                    case "[object Set]":
                        var y = 1 & n;
                        if (w || (w = c), object.size != e.size && !y) return !1;
                        var C = m.get(object);
                        if (C) return C == e;
                        n |= 2, m.set(object, e);
                        var x = d(w(object), w(e), n, r, f, m);
                        return m.delete(object), x;
                    case "[object Symbol]":
                        if (v) return v.call(object) == v.call(e)
                }
                return !1
            }
        },
        819: function(e, t) {
            e.exports = function(map) {
                var e = -1,
                    t = Array(map.size);
                return map.forEach((function(n, r) {
                    t[++e] = [r, n]
                })), t
            }
        },
        820: function(e, t, n) {
            var r = n(400),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(object, e, t, n, l, d) {
                var h = 1 & t,
                    c = r(object),
                    f = c.length;
                if (f != r(e).length && !h) return !1;
                for (var v = f; v--;) {
                    var m = c[v];
                    if (!(h ? m in e : o.call(e, m))) return !1
                }
                var w = d.get(object);
                if (w && d.get(e)) return w == e;
                var y = !0;
                d.set(object, e), d.set(e, object);
                for (var C = h; ++v < f;) {
                    var x = object[m = c[v]],
                        T = e[m];
                    if (n) var E = h ? n(T, x, m, e, object, d) : n(x, T, m, object, e, d);
                    if (!(void 0 === E ? x === T || l(x, T, t, n, d) : E)) {
                        y = !1;
                        break
                    }
                    C || (C = "constructor" == m)
                }
                if (y && !C) {
                    var S = object.constructor,
                        P = e.constructor;
                    S == P || !("constructor" in object) || !("constructor" in e) || "function" == typeof S && S instanceof S && "function" == typeof P && P instanceof P || (y = !1)
                }
                return d.delete(object), d.delete(e), y
            }
        },
        821: function(e, t, n) {
            var r = n(769),
                o = n(161);
            e.exports = function(object) {
                for (var e = o(object), t = e.length; t--;) {
                    var n = e[t],
                        l = object[n];
                    e[t] = [n, l, r(l)]
                }
                return e
            }
        },
        822: function(e, t, n) {
            var r = n(622),
                o = n(823),
                l = n(828),
                d = n(624),
                h = n(769),
                c = n(770),
                f = n(604);
            e.exports = function(path, e) {
                return d(path) && h(e) ? c(f(path), e) : function(object) {
                    var t = o(object, path);
                    return void 0 === t && t === e ? l(object, path) : r(e, t, 3)
                }
            }
        },
        823: function(e, t, n) {
            var r = n(771);
            e.exports = function(object, path, e) {
                var t = null == object ? void 0 : r(object, path);
                return void 0 === t ? e : t
            }
        },
        824: function(e, t, n) {
            var r = n(825),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                l = /\\(\\)?/g,
                d = r((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function(e, n, r, o) {
                        t.push(r ? o.replace(l, "$1") : n || e)
                    })), t
                }));
            e.exports = d
        },
        825: function(e, t, n) {
            var r = n(826);
            e.exports = function(e) {
                var t = r(e, (function(e) {
                        return 500 === n.size && n.clear(), e
                    })),
                    n = t.cache;
                return t
            }
        },
        826: function(e, t, n) {
            var r = n(392);

            function o(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        o = t ? t.apply(this, r) : r[0],
                        l = n.cache;
                    if (l.has(o)) return l.get(o);
                    var d = e.apply(this, r);
                    return n.cache = l.set(o, d) || l, d
                };
                return n.cache = new(o.Cache || r), n
            }
            o.Cache = r, e.exports = o
        },
        827: function(e, t, n) {
            var r = n(160),
                o = n(599),
                l = n(158),
                d = n(390),
                h = r ? r.prototype : void 0,
                c = h ? h.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t) return t;
                if (l(t)) return o(t, e) + "";
                if (d(t)) return c ? c.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -1 / 0 ? "-0" : n
            }
        },
        828: function(e, t, n) {
            var r = n(829),
                o = n(830);
            e.exports = function(object, path) {
                return null != object && o(object, path, r)
            }
        },
        829: function(e, t) {
            e.exports = function(object, e) {
                return null != object && e in Object(object)
            }
        },
        830: function(e, t, n) {
            var r = n(772),
                o = n(393),
                l = n(158),
                d = n(397),
                h = n(311),
                c = n(604);
            e.exports = function(object, path, e) {
                for (var t = -1, n = (path = r(path, object)).length, f = !1; ++t < n;) {
                    var v = c(path[t]);
                    if (!(f = null != object && e(object, v))) break;
                    object = object[v]
                }
                return f || ++t != n ? f : !!(n = null == object ? 0 : object.length) && h(n) && d(v, n) && (l(object) || o(object))
            }
        },
        831: function(e, t, n) {
            var r = n(832),
                o = n(833),
                l = n(624),
                d = n(604);
            e.exports = function(path) {
                return l(path) ? r(d(path)) : o(path)
            }
        },
        832: function(e, t) {
            e.exports = function(e) {
                return function(object) {
                    return null == object ? void 0 : object[e]
                }
            }
        },
        833: function(e, t, n) {
            var r = n(771);
            e.exports = function(path) {
                return function(object) {
                    return r(object, path)
                }
            }
        },
        834: function(e, t, n) {
            var r = n(403);
            e.exports = function(e) {
                return e ? (e = r(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
            }
        },
        835: function(e, t, n) {
            var r = n(767),
                o = n(305),
                l = n(161);
            e.exports = function(e) {
                return function(t, n, d) {
                    var h = Object(t);
                    if (!o(t)) {
                        var c = r(n, 3);
                        t = l(t), n = function(e) {
                            return c(h[e], e, h)
                        }
                    }
                    var f = e(t, n, d);
                    return f > -1 ? h[c ? t[f] : f] : void 0
                }
            }
        },
        837: function(e, t, n) {
            var r = n(773),
                o = 0;
            e.exports = function(e) {
                var t = ++o;
                return r(e) + t
            }
        },
        853: function(e, t) {
            e.exports = function(e) {
                return e != e
            }
        },
        854: function(e, t) {
            e.exports = function(e, t, n) {
                for (var r = n - 1, o = e.length; ++r < o;)
                    if (e[r] === t) return r;
                return -1
            }
        },
        855: function(e, t, n) {
            var r = n(82),
                o = n(158),
                l = n(75);
            e.exports = function(e) {
                return "string" == typeof e || !o(e) && l(e) && "[object String]" == r(e)
            }
        },
        856: function(e, t, n) {
            var r = n(857),
                o = n(161);
            e.exports = function(object) {
                return null == object ? [] : r(object, o(object))
            }
        },
        857: function(e, t, n) {
            var r = n(599);
            e.exports = function(object, e) {
                return r(e, (function(e) {
                    return object[e]
                }))
            }
        },
        865: function(e, t, n) {
            var r = n(602),
                o = n(655),
                l = n(656),
                d = n(599),
                h = n(162),
                c = n(603);
            e.exports = function(e, t, n, f) {
                var v = -1,
                    m = o,
                    w = !0,
                    y = e.length,
                    C = [],
                    x = t.length;
                if (!y) return C;
                n && (t = d(t, h(n))), f ? (m = l, w = !1) : t.length >= 200 && (m = c, w = !1, t = new r(t));
                e: for (; ++v < y;) {
                    var T = e[v],
                        E = null == n ? T : n(T);
                    if (T = f || 0 !== T ? T : 0, w && E == E) {
                        for (var S = x; S--;)
                            if (t[S] === E) continue e;
                        C.push(T)
                    } else m(t, E, f) || C.push(T)
                }
                return C
            }
        },
        866: function(e, t, n) {
            var r = n(160),
                o = n(393),
                l = n(158),
                d = r ? r.isConcatSpreadable : void 0;
            e.exports = function(e) {
                return l(e) || o(e) || !!(d && e && e[d])
            }
        },
        867: function(e, t, n) {
            var r = n(868),
                o = Math.max;
            e.exports = function(e, t, n) {
                return t = o(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var l = arguments, d = -1, h = o(l.length - t, 0), c = Array(h); ++d < h;) c[d] = l[t + d];
                        d = -1;
                        for (var f = Array(t + 1); ++d < t;) f[d] = l[d];
                        return f[t] = n(c), r(e, this, f)
                    }
            }
        },
        868: function(e, t) {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        869: function(e, t, n) {
            var r = n(870),
                o = n(872)(r);
            e.exports = o
        },
        870: function(e, t, n) {
            var r = n(871),
                o = n(396),
                l = n(625),
                d = o ? function(e, t) {
                    return o(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : l;
            e.exports = d
        },
        871: function(e, t) {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        872: function(e, t) {
            var n = Date.now;
            e.exports = function(e) {
                var t = 0,
                    r = 0;
                return function() {
                    var o = n(),
                        l = 16 - (o - r);
                    if (r = o, l > 0) {
                        if (++t >= 800) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        873: function(e, t, n) {
            var r = n(602),
                o = n(655),
                l = n(656),
                d = n(603),
                h = n(874),
                c = n(623);
            e.exports = function(e, t, n) {
                var f = -1,
                    v = o,
                    m = e.length,
                    w = !0,
                    y = [],
                    C = y;
                if (n) w = !1, v = l;
                else if (m >= 200) {
                    var x = t ? null : h(e);
                    if (x) return c(x);
                    w = !1, v = d, C = new r
                } else C = t ? [] : y;
                e: for (; ++f < m;) {
                    var T = e[f],
                        E = t ? t(T) : T;
                    if (T = n || 0 !== T ? T : 0, w && E == E) {
                        for (var S = C.length; S--;)
                            if (C[S] === E) continue e;
                        t && C.push(E), y.push(T)
                    } else v(C, E, n) || (C !== y && C.push(E), y.push(T))
                }
                return y
            }
        },
        874: function(e, t, n) {
            var r = n(401),
                o = n(875),
                l = n(623),
                d = r && 1 / l(new r([, -0]))[1] == 1 / 0 ? function(e) {
                    return new r(e)
                } : o;
            e.exports = d
        },
        875: function(e, t) {
            e.exports = function() {}
        },
        876: function(e, t, n) {
            var r = n(602),
                o = n(655),
                l = n(656),
                d = n(599),
                h = n(162),
                c = n(603),
                f = Math.min;
            e.exports = function(e, t, n) {
                for (var v = n ? l : o, m = e[0].length, w = e.length, y = w, C = Array(w), x = 1 / 0, T = []; y--;) {
                    var E = e[y];
                    y && t && (E = d(E, h(t))), x = f(E.length, x), C[y] = !n && (t || m >= 120 && E.length >= 120) ? new r(y && E) : void 0
                }
                E = e[0];
                var S = -1,
                    P = C[0];
                e: for (; ++S < m && T.length < x;) {
                    var M = E[S],
                        k = t ? t(M) : M;
                    if (M = n || 0 !== M ? M : 0, !(P ? c(P, k) : v(T, k, n))) {
                        for (y = w; --y;) {
                            var I = C[y];
                            if (!(I ? c(I, k) : v(e[y], k, n))) continue e
                        }
                        P && P.push(k), T.push(M)
                    }
                }
                return T
            }
        },
        877: function(e, t, n) {
            var r = n(781);
            e.exports = function(e) {
                return r(e) ? e : []
            }
        },
        902: function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = "undefined" == typeof document ? {
                        body: {},
                        addEventListener: function() {},
                        removeEventListener: function() {},
                        activeElement: {
                            blur: function() {},
                            nodeName: ""
                        },
                        querySelector: function() {
                            return null
                        },
                        querySelectorAll: function() {
                            return []
                        },
                        getElementById: function() {
                            return null
                        },
                        createEvent: function() {
                            return {
                                initEvent: function() {}
                            }
                        },
                        createElement: function() {
                            return {
                                children: [],
                                childNodes: [],
                                style: {},
                                setAttribute: function() {},
                                getElementsByTagName: function() {
                                    return []
                                }
                            }
                        },
                        location: {
                            hash: ""
                        }
                    } : document,
                    t = "undefined" == typeof window ? {
                        document: e,
                        navigator: {
                            userAgent: ""
                        },
                        location: {},
                        history: {},
                        CustomEvent: function() {
                            return this
                        },
                        addEventListener: function() {},
                        removeEventListener: function() {},
                        getComputedStyle: function() {
                            return {
                                getPropertyValue: function() {
                                    return ""
                                }
                            }
                        },
                        Image: function() {},
                        Date: function() {},
                        screen: {},
                        setTimeout: function() {},
                        clearTimeout: function() {}
                    } : window,
                    n = function(e) {
                        for (var i = 0; i < e.length; i += 1) this[i] = e[i];
                        return this.length = e.length, this
                    };

                function r(r, o) {
                    var l = [],
                        i = 0;
                    if (r && !o && r instanceof n) return r;
                    if (r)
                        if ("string" == typeof r) {
                            var d, h, html = r.trim();
                            if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                                var c = "div";
                                for (0 === html.indexOf("<li") && (c = "ul"), 0 === html.indexOf("<tr") && (c = "tbody"), 0 !== html.indexOf("<td") && 0 !== html.indexOf("<th") || (c = "tr"), 0 === html.indexOf("<tbody") && (c = "table"), 0 === html.indexOf("<option") && (c = "select"), (h = e.createElement(c)).innerHTML = html, i = 0; i < h.childNodes.length; i += 1) l.push(h.childNodes[i])
                            } else
                                for (d = o || "#" !== r[0] || r.match(/[ .<>:~]/) ? (o || e).querySelectorAll(r.trim()) : [e.getElementById(r.trim().split("#")[1])], i = 0; i < d.length; i += 1) d[i] && l.push(d[i])
                        } else if (r.nodeType || r === t || r === e) l.push(r);
                    else if (r.length > 0 && r[0].nodeType)
                        for (i = 0; i < r.length; i += 1) l.push(r[i]);
                    return new n(l)
                }

                function o(e) {
                    for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t
                }
                r.fn = n.prototype, r.Class = n, r.Dom7 = n;
                var l = {
                    addClass: function(e) {
                        if (void 0 === e) return this;
                        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                            for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
                        return this
                    },
                    removeClass: function(e) {
                        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                            for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
                        return this
                    },
                    hasClass: function(e) {
                        return !!this[0] && this[0].classList.contains(e)
                    },
                    toggleClass: function(e) {
                        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                            for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
                        return this
                    },
                    attr: function(e, t) {
                        var n = arguments;
                        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                        for (var i = 0; i < this.length; i += 1)
                            if (2 === n.length) this[i].setAttribute(e, t);
                            else
                                for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
                        return this
                    },
                    removeAttr: function(e) {
                        for (var i = 0; i < this.length; i += 1) this[i].removeAttribute(e);
                        return this
                    },
                    data: function(e, t) {
                        var n;
                        if (void 0 !== t) {
                            for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                            return this
                        }
                        if (n = this[0]) {
                            if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                            var r = n.getAttribute("data-" + e);
                            return r || void 0
                        }
                    },
                    transform: function(e) {
                        for (var i = 0; i < this.length; i += 1) {
                            var t = this[i].style;
                            t.webkitTransform = e, t.transform = e
                        }
                        return this
                    },
                    transition: function(e) {
                        "string" != typeof e && (e += "ms");
                        for (var i = 0; i < this.length; i += 1) {
                            var t = this[i].style;
                            t.webkitTransitionDuration = e, t.transitionDuration = e
                        }
                        return this
                    },
                    on: function() {
                        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                        var o = t[0],
                            l = t[1],
                            d = t[2],
                            h = t[3];

                        function c(e) {
                            var t = e.target;
                            if (t) {
                                var n = e.target.dom7EventData || [];
                                if (n.indexOf(e) < 0 && n.unshift(e), r(t).is(l)) d.apply(t, n);
                                else
                                    for (var o = r(t).parents(), h = 0; h < o.length; h += 1) r(o[h]).is(l) && d.apply(o[h], n)
                            }
                        }

                        function f(e) {
                            var t = e && e.target && e.target.dom7EventData || [];
                            t.indexOf(e) < 0 && t.unshift(e), d.apply(this, t)
                        }
                        "function" == typeof t[1] && (o = (e = t)[0], d = e[1], h = e[2], l = void 0), h || (h = !1);
                        for (var v, m = o.split(" "), i = 0; i < this.length; i += 1) {
                            var w = this[i];
                            if (l)
                                for (v = 0; v < m.length; v += 1) {
                                    var y = m[v];
                                    w.dom7LiveListeners || (w.dom7LiveListeners = {}), w.dom7LiveListeners[y] || (w.dom7LiveListeners[y] = []), w.dom7LiveListeners[y].push({
                                        listener: d,
                                        proxyListener: c
                                    }), w.addEventListener(y, c, h)
                                } else
                                    for (v = 0; v < m.length; v += 1) {
                                        var C = m[v];
                                        w.dom7Listeners || (w.dom7Listeners = {}), w.dom7Listeners[C] || (w.dom7Listeners[C] = []), w.dom7Listeners[C].push({
                                            listener: d,
                                            proxyListener: f
                                        }), w.addEventListener(C, f, h)
                                    }
                        }
                        return this
                    },
                    off: function() {
                        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                        var r = t[0],
                            o = t[1],
                            l = t[2],
                            d = t[3];
                        "function" == typeof t[1] && (r = (e = t)[0], l = e[1], d = e[2], o = void 0), d || (d = !1);
                        for (var h = r.split(" "), i = 0; i < h.length; i += 1)
                            for (var c = h[i], f = 0; f < this.length; f += 1) {
                                var v = this[f],
                                    m = void 0;
                                if (!o && v.dom7Listeners ? m = v.dom7Listeners[c] : o && v.dom7LiveListeners && (m = v.dom7LiveListeners[c]), m && m.length)
                                    for (var w = m.length - 1; w >= 0; w -= 1) {
                                        var y = m[w];
                                        l && y.listener === l || l && y.listener && y.listener.dom7proxy && y.listener.dom7proxy === l ? (v.removeEventListener(c, y.proxyListener, d), m.splice(w, 1)) : l || (v.removeEventListener(c, y.proxyListener, d), m.splice(w, 1))
                                    }
                            }
                        return this
                    },
                    trigger: function() {
                        for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                        for (var o = n[0].split(" "), l = n[1], i = 0; i < o.length; i += 1)
                            for (var d = o[i], h = 0; h < this.length; h += 1) {
                                var c = this[h],
                                    f = void 0;
                                try {
                                    f = new t.CustomEvent(d, {
                                        detail: l,
                                        bubbles: !0,
                                        cancelable: !0
                                    })
                                } catch (t) {
                                    (f = e.createEvent("Event")).initEvent(d, !0, !0), f.detail = l
                                }
                                c.dom7EventData = n.filter((function(data, e) {
                                    return e > 0
                                })), c.dispatchEvent(f), c.dom7EventData = [], delete c.dom7EventData
                            }
                        return this
                    },
                    transitionEnd: function(e) {
                        var i, t = ["webkitTransitionEnd", "transitionend"],
                            n = this;

                        function r(o) {
                            if (o.target === this)
                                for (e.call(this, o), i = 0; i < t.length; i += 1) n.off(t[i], r)
                        }
                        if (e)
                            for (i = 0; i < t.length; i += 1) n.on(t[i], r);
                        return this
                    },
                    outerWidth: function(e) {
                        if (this.length > 0) {
                            if (e) {
                                var t = this.styles();
                                return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                            }
                            return this[0].offsetWidth
                        }
                        return null
                    },
                    outerHeight: function(e) {
                        if (this.length > 0) {
                            if (e) {
                                var t = this.styles();
                                return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                            }
                            return this[0].offsetHeight
                        }
                        return null
                    },
                    offset: function() {
                        if (this.length > 0) {
                            var n = this[0],
                                r = n.getBoundingClientRect(),
                                body = e.body,
                                o = n.clientTop || body.clientTop || 0,
                                l = n.clientLeft || body.clientLeft || 0,
                                d = n === t ? t.scrollY : n.scrollTop,
                                h = n === t ? t.scrollX : n.scrollLeft;
                            return {
                                top: r.top + d - o,
                                left: r.left + h - l
                            }
                        }
                        return null
                    },
                    css: function(e, n) {
                        var i;
                        if (1 === arguments.length) {
                            if ("string" != typeof e) {
                                for (i = 0; i < this.length; i += 1)
                                    for (var r in e) this[i].style[r] = e[r];
                                return this
                            }
                            if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
                        }
                        if (2 === arguments.length && "string" == typeof e) {
                            for (i = 0; i < this.length; i += 1) this[i].style[e] = n;
                            return this
                        }
                        return this
                    },
                    each: function(e) {
                        if (!e) return this;
                        for (var i = 0; i < this.length; i += 1)
                            if (!1 === e.call(this[i], i, this[i])) return this;
                        return this
                    },
                    html: function(html) {
                        if (void 0 === html) return this[0] ? this[0].innerHTML : void 0;
                        for (var i = 0; i < this.length; i += 1) this[i].innerHTML = html;
                        return this
                    },
                    text: function(text) {
                        if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
                        for (var i = 0; i < this.length; i += 1) this[i].textContent = text;
                        return this
                    },
                    is: function(o) {
                        var l, i, d = this[0];
                        if (!d || void 0 === o) return !1;
                        if ("string" == typeof o) {
                            if (d.matches) return d.matches(o);
                            if (d.webkitMatchesSelector) return d.webkitMatchesSelector(o);
                            if (d.msMatchesSelector) return d.msMatchesSelector(o);
                            for (l = r(o), i = 0; i < l.length; i += 1)
                                if (l[i] === d) return !0;
                            return !1
                        }
                        if (o === e) return d === e;
                        if (o === t) return d === t;
                        if (o.nodeType || o instanceof n) {
                            for (l = o.nodeType ? [o] : o, i = 0; i < l.length; i += 1)
                                if (l[i] === d) return !0;
                            return !1
                        }
                        return !1
                    },
                    index: function() {
                        var i, e = this[0];
                        if (e) {
                            for (i = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (i += 1);
                            return i
                        }
                    },
                    eq: function(e) {
                        if (void 0 === e) return this;
                        var t, r = this.length;
                        return new n(e > r - 1 ? [] : e < 0 ? (t = r + e) < 0 ? [] : [this[t]] : [this[e]])
                    },
                    append: function() {
                        for (var t, r = [], o = arguments.length; o--;) r[o] = arguments[o];
                        for (var l = 0; l < r.length; l += 1) {
                            t = r[l];
                            for (var i = 0; i < this.length; i += 1)
                                if ("string" == typeof t) {
                                    var d = e.createElement("div");
                                    for (d.innerHTML = t; d.firstChild;) this[i].appendChild(d.firstChild)
                                } else if (t instanceof n)
                                for (var h = 0; h < t.length; h += 1) this[i].appendChild(t[h]);
                            else this[i].appendChild(t)
                        }
                        return this
                    },
                    prepend: function(t) {
                        var i, r;
                        for (i = 0; i < this.length; i += 1)
                            if ("string" == typeof t) {
                                var o = e.createElement("div");
                                for (o.innerHTML = t, r = o.childNodes.length - 1; r >= 0; r -= 1) this[i].insertBefore(o.childNodes[r], this[i].childNodes[0])
                            } else if (t instanceof n)
                            for (r = 0; r < t.length; r += 1) this[i].insertBefore(t[r], this[i].childNodes[0]);
                        else this[i].insertBefore(t, this[i].childNodes[0]);
                        return this
                    },
                    next: function(e) {
                        return this.length > 0 ? e ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e) ? new n([this[0].nextElementSibling]) : new n([]) : this[0].nextElementSibling ? new n([this[0].nextElementSibling]) : new n([]) : new n([])
                    },
                    nextAll: function(e) {
                        var t = [],
                            o = this[0];
                        if (!o) return new n([]);
                        for (; o.nextElementSibling;) {
                            var l = o.nextElementSibling;
                            e ? r(l).is(e) && t.push(l) : t.push(l), o = l
                        }
                        return new n(t)
                    },
                    prev: function(e) {
                        if (this.length > 0) {
                            var t = this[0];
                            return e ? t.previousElementSibling && r(t.previousElementSibling).is(e) ? new n([t.previousElementSibling]) : new n([]) : t.previousElementSibling ? new n([t.previousElementSibling]) : new n([])
                        }
                        return new n([])
                    },
                    prevAll: function(e) {
                        var t = [],
                            o = this[0];
                        if (!o) return new n([]);
                        for (; o.previousElementSibling;) {
                            var l = o.previousElementSibling;
                            e ? r(l).is(e) && t.push(l) : t.push(l), o = l
                        }
                        return new n(t)
                    },
                    parent: function(e) {
                        for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? r(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                        return r(o(t))
                    },
                    parents: function(e) {
                        for (var t = [], i = 0; i < this.length; i += 1)
                            for (var n = this[i].parentNode; n;) e ? r(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                        return r(o(t))
                    },
                    closest: function(e) {
                        var t = this;
                        return void 0 === e ? new n([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                    },
                    find: function(e) {
                        for (var t = [], i = 0; i < this.length; i += 1)
                            for (var r = this[i].querySelectorAll(e), o = 0; o < r.length; o += 1) t.push(r[o]);
                        return new n(t)
                    },
                    children: function(e) {
                        for (var t = [], i = 0; i < this.length; i += 1)
                            for (var l = this[i].childNodes, d = 0; d < l.length; d += 1) e ? 1 === l[d].nodeType && r(l[d]).is(e) && t.push(l[d]) : 1 === l[d].nodeType && t.push(l[d]);
                        return new n(o(t))
                    },
                    remove: function() {
                        for (var i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                        return this
                    },
                    add: function() {
                        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                        var i, n, o = this;
                        for (i = 0; i < e.length; i += 1) {
                            var l = r(e[i]);
                            for (n = 0; n < l.length; n += 1) o[o.length] = l[n], o.length += 1
                        }
                        return o
                    },
                    styles: function() {
                        return this[0] ? t.getComputedStyle(this[0], null) : {}
                    }
                };
                Object.keys(l).forEach((function(e) {
                    r.fn[e] = r.fn[e] || l[e]
                }));
                var d, style, h, c = {
                        deleteProps: function(e) {
                            var object = e;
                            Object.keys(object).forEach((function(e) {
                                try {
                                    object[e] = null
                                } catch (e) {}
                                try {
                                    delete object[e]
                                } catch (e) {}
                            }))
                        },
                        nextTick: function(e, t) {
                            return void 0 === t && (t = 0), setTimeout(e, t)
                        },
                        now: function() {
                            return Date.now()
                        },
                        getTranslate: function(e, n) {
                            var r, o, l;
                            void 0 === n && (n = "x");
                            var d = t.getComputedStyle(e, null);
                            return t.WebKitCSSMatrix ? ((o = d.transform || d.webkitTransform).split(",").length > 6 && (o = o.split(", ").map((function(a) {
                                return a.replace(",", ".")
                            })).join(", ")), l = new t.WebKitCSSMatrix("none" === o ? "" : o)) : r = (l = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === n && (o = t.WebKitCSSMatrix ? l.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === n && (o = t.WebKitCSSMatrix ? l.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), o || 0
                        },
                        parseUrlQuery: function(e) {
                            var i, n, param, r, o = {},
                                l = e || t.location.href;
                            if ("string" == typeof l && l.length)
                                for (r = (n = (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                                        return "" !== e
                                    }))).length, i = 0; i < r; i += 1) param = n[i].replace(/#\S+/g, "").split("="), o[decodeURIComponent(param[0])] = void 0 === param[1] ? void 0 : decodeURIComponent(param[1]) || "";
                            return o
                        },
                        isObject: function(e) {
                            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                        },
                        extend: function() {
                            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                            for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                                var r = e[i];
                                if (null != r)
                                    for (var o = Object.keys(Object(r)), l = 0, d = o.length; l < d; l += 1) {
                                        var h = o[l],
                                            desc = Object.getOwnPropertyDescriptor(r, h);
                                        void 0 !== desc && desc.enumerable && (c.isObject(n[h]) && c.isObject(r[h]) ? c.extend(n[h], r[h]) : !c.isObject(n[h]) && c.isObject(r[h]) ? (n[h] = {}, c.extend(n[h], r[h])) : n[h] = r[h])
                                    }
                            }
                            return n
                        }
                    },
                    f = (h = e.createElement("div"), {
                        touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                        pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0),
                        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
                        transition: (style = h.style, "transition" in style || "webkitTransition" in style || "MozTransition" in style),
                        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || function() {
                            var style = h.style;
                            return "webkitPerspective" in style || "MozPerspective" in style || "OPerspective" in style || "MsPerspective" in style || "perspective" in style
                        }(),
                        flexbox: function() {
                            for (var style = h.style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i += 1)
                                if (e[i] in style) return !0;
                            return !1
                        }(),
                        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                        passiveListener: function() {
                            var e = !1;
                            try {
                                var n = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        e = !0
                                    }
                                });
                                t.addEventListener("testPassiveListener", null, n)
                            } catch (e) {}
                            return e
                        }(),
                        gestures: "ongesturestart" in t
                    }),
                    v = {
                        isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                        isEdge: !!t.navigator.userAgent.match(/Edge/g),
                        isSafari: (d = t.navigator.userAgent.toLowerCase(), d.indexOf("safari") >= 0 && d.indexOf("chrome") < 0 && d.indexOf("android") < 0),
                        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
                    },
                    m = function(e) {
                        void 0 === e && (e = {});
                        var t = this;
                        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
                            t.on(e, t.params.on[e])
                        }))
                    },
                    w = {
                        components: {
                            configurable: !0
                        }
                    };
                m.prototype.on = function(e, t, n) {
                    var r = this;
                    if ("function" != typeof t) return r;
                    var o = n ? "unshift" : "push";
                    return e.split(" ").forEach((function(e) {
                        r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][o](t)
                    })), r
                }, m.prototype.once = function(e, t, n) {
                    var r = this;
                    if ("function" != typeof t) return r;

                    function o() {
                        for (var n = [], l = arguments.length; l--;) n[l] = arguments[l];
                        t.apply(r, n), r.off(e, o), o.f7proxy && delete o.f7proxy
                    }
                    return o.f7proxy = t, r.on(e, o, n)
                }, m.prototype.off = function(e, t) {
                    var n = this;
                    return n.eventsListeners ? (e.split(" ").forEach((function(e) {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach((function(r, o) {
                            (r === t || r.f7proxy && r.f7proxy === t) && n.eventsListeners[e].splice(o, 1)
                        }))
                    })), n) : n
                }, m.prototype.emit = function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    var n, data, r, o = this;
                    if (!o.eventsListeners) return o;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], data = e.slice(1, e.length), r = o) : (n = e[0].events, data = e[0].data, r = e[0].context || o);
                    var l = Array.isArray(n) ? n : n.split(" ");
                    return l.forEach((function(e) {
                        if (o.eventsListeners && o.eventsListeners[e]) {
                            var t = [];
                            o.eventsListeners[e].forEach((function(e) {
                                t.push(e)
                            })), t.forEach((function(e) {
                                e.apply(r, data)
                            }))
                        }
                    })), o
                }, m.prototype.useModulesParams = function(e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function(n) {
                        var r = t.modules[n];
                        r.params && c.extend(e, r.params)
                    }))
                }, m.prototype.useModules = function(e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function(n) {
                        var r = t.modules[n],
                            o = e[n] || {};
                        r.instance && Object.keys(r.instance).forEach((function(e) {
                            var n = r.instance[e];
                            t[e] = "function" == typeof n ? n.bind(t) : n
                        })), r.on && t.on && Object.keys(r.on).forEach((function(e) {
                            t.on(e, r.on[e])
                        })), r.create && r.create.bind(t)(o)
                    }))
                }, w.components.set = function(e) {
                    this.use && this.use(e)
                }, m.installModule = function(e) {
                    for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
                    var r = this;
                    r.prototype.modules || (r.prototype.modules = {});
                    var o = e.name || Object.keys(r.prototype.modules).length + "_" + c.now();
                    return r.prototype.modules[o] = e, e.proto && Object.keys(e.proto).forEach((function(t) {
                        r.prototype[t] = e.proto[t]
                    })), e.static && Object.keys(e.static).forEach((function(t) {
                        r[t] = e.static[t]
                    })), e.install && e.install.apply(r, t), r
                }, m.use = function(e) {
                    for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
                    var r = this;
                    return Array.isArray(e) ? (e.forEach((function(e) {
                        return r.installModule(e)
                    })), r) : r.installModule.apply(r, [e].concat(t))
                }, Object.defineProperties(m, w);
                var y = {
                        updateSize: function() {
                            var e, t, n = this.$el;
                            e = void 0 !== this.params.width ? this.params.width : n[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : n[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), c.extend(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            var e = this.params,
                                n = this.$wrapperEl,
                                r = this.size,
                                o = this.rtlTranslate,
                                l = this.wrongRTL,
                                d = this.virtual && e.virtual.enabled,
                                h = d ? this.virtual.slides.length : this.slides.length,
                                m = n.children("." + this.params.slideClass),
                                w = d ? this.virtual.slides.length : m.length,
                                y = [],
                                C = [],
                                x = [],
                                T = e.slidesOffsetBefore;
                            "function" == typeof T && (T = e.slidesOffsetBefore.call(this));
                            var E = e.slidesOffsetAfter;
                            "function" == typeof E && (E = e.slidesOffsetAfter.call(this));
                            var S = this.snapGrid.length,
                                P = this.snapGrid.length,
                                M = e.spaceBetween,
                                k = -T,
                                I = 0,
                                R = 0;
                            if (void 0 !== r) {
                                var z, L;
                                "string" == typeof M && M.indexOf("%") >= 0 && (M = parseFloat(M.replace("%", "")) / 100 * r), this.virtualSize = -M, o ? m.css({
                                    marginLeft: "",
                                    marginTop: ""
                                }) : m.css({
                                    marginRight: "",
                                    marginBottom: ""
                                }), e.slidesPerColumn > 1 && (z = Math.floor(w / e.slidesPerColumn) === w / this.params.slidesPerColumn ? w : Math.ceil(w / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (z = Math.max(z, e.slidesPerView * e.slidesPerColumn)));
                                for (var $, O = e.slidesPerColumn, A = z / O, B = Math.floor(w / e.slidesPerColumn), i = 0; i < w; i += 1) {
                                    L = 0;
                                    var D = m.eq(i);
                                    if (e.slidesPerColumn > 1) {
                                        var H = void 0,
                                            N = void 0,
                                            j = void 0;
                                        if ("column" === e.slidesPerColumnFill || "row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                                            if ("column" === e.slidesPerColumnFill) j = i - (N = Math.floor(i / O)) * O, (N > B || N === B && j === O - 1) && (j += 1) >= O && (j = 0, N += 1);
                                            else {
                                                var G = Math.floor(i / e.slidesPerGroup);
                                                N = i - (j = Math.floor(i / e.slidesPerView) - G * e.slidesPerColumn) * e.slidesPerView - G * e.slidesPerView
                                            }
                                            H = N + j * z / O, D.css({
                                                "-webkit-box-ordinal-group": H,
                                                "-moz-box-ordinal-group": H,
                                                "-ms-flex-order": H,
                                                "-webkit-order": H,
                                                order: H
                                            })
                                        } else N = i - (j = Math.floor(i / A)) * A;
                                        D.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== j && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", N).attr("data-swiper-row", j)
                                    }
                                    if ("none" !== D.css("display")) {
                                        if ("auto" === e.slidesPerView) {
                                            var V = t.getComputedStyle(D[0], null),
                                                Y = D[0].style.transform,
                                                X = D[0].style.webkitTransform;
                                            if (Y && (D[0].style.transform = "none"), X && (D[0].style.webkitTransform = "none"), e.roundLengths) L = this.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                                            else if (this.isHorizontal()) {
                                                var _ = parseFloat(V.getPropertyValue("width")),
                                                    F = parseFloat(V.getPropertyValue("padding-left")),
                                                    W = parseFloat(V.getPropertyValue("padding-right")),
                                                    U = parseFloat(V.getPropertyValue("margin-left")),
                                                    K = parseFloat(V.getPropertyValue("margin-right")),
                                                    Z = V.getPropertyValue("box-sizing");
                                                L = Z && "border-box" === Z && !v.isIE ? _ + U + K : _ + F + W + U + K
                                            } else {
                                                var J = parseFloat(V.getPropertyValue("height")),
                                                    Q = parseFloat(V.getPropertyValue("padding-top")),
                                                    ee = parseFloat(V.getPropertyValue("padding-bottom")),
                                                    te = parseFloat(V.getPropertyValue("margin-top")),
                                                    ie = parseFloat(V.getPropertyValue("margin-bottom")),
                                                    se = V.getPropertyValue("box-sizing");
                                                L = se && "border-box" === se && !v.isIE ? J + te + ie : J + Q + ee + te + ie
                                            }
                                            Y && (D[0].style.transform = Y), X && (D[0].style.webkitTransform = X), e.roundLengths && (L = Math.floor(L))
                                        } else L = (r - (e.slidesPerView - 1) * M) / e.slidesPerView, e.roundLengths && (L = Math.floor(L)), m[i] && (this.isHorizontal() ? m[i].style.width = L + "px" : m[i].style.height = L + "px");
                                        m[i] && (m[i].swiperSlideSize = L), x.push(L), e.centeredSlides ? (k = k + L / 2 + I / 2 + M, 0 === I && 0 !== i && (k = k - r / 2 - M), 0 === i && (k = k - r / 2 - M), Math.abs(k) < .001 && (k = 0), e.roundLengths && (k = Math.floor(k)), R % e.slidesPerGroup == 0 && y.push(k), C.push(k)) : (e.roundLengths && (k = Math.floor(k)), R % e.slidesPerGroup == 0 && y.push(k), C.push(k), k = k + L + M), this.virtualSize += L + M, I = L, R += 1
                                    }
                                }
                                if (this.virtualSize = Math.max(this.virtualSize, r) + E, o && l && ("slide" === e.effect || "coverflow" === e.effect) && n.css({
                                        width: this.virtualSize + e.spaceBetween + "px"
                                    }), f.flexbox && !e.setWrapperSize || (this.isHorizontal() ? n.css({
                                        width: this.virtualSize + e.spaceBetween + "px"
                                    }) : n.css({
                                        height: this.virtualSize + e.spaceBetween + "px"
                                    })), e.slidesPerColumn > 1 && (this.virtualSize = (L + e.spaceBetween) * z, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? n.css({
                                        width: this.virtualSize + e.spaceBetween + "px"
                                    }) : n.css({
                                        height: this.virtualSize + e.spaceBetween + "px"
                                    }), e.centeredSlides)) {
                                    $ = [];
                                    for (var ae = 0; ae < y.length; ae += 1) {
                                        var ne = y[ae];
                                        e.roundLengths && (ne = Math.floor(ne)), y[ae] < this.virtualSize + y[0] && $.push(ne)
                                    }
                                    y = $
                                }
                                if (!e.centeredSlides) {
                                    $ = [];
                                    for (var re = 0; re < y.length; re += 1) {
                                        var oe = y[re];
                                        e.roundLengths && (oe = Math.floor(oe)), y[re] <= this.virtualSize - r && $.push(oe)
                                    }
                                    y = $, Math.floor(this.virtualSize - r) - Math.floor(y[y.length - 1]) > 1 && y.push(this.virtualSize - r)
                                }
                                if (0 === y.length && (y = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? o ? m.css({
                                        marginLeft: M + "px"
                                    }) : m.css({
                                        marginRight: M + "px"
                                    }) : m.css({
                                        marginBottom: M + "px"
                                    })), e.centerInsufficientSlides) {
                                    var le = 0;
                                    if (x.forEach((function(t) {
                                            le += t + (e.spaceBetween ? e.spaceBetween : 0)
                                        })), (le -= e.spaceBetween) < r) {
                                        var de = (r - le) / 2;
                                        y.forEach((function(e, t) {
                                            y[t] = e - de
                                        })), C.forEach((function(e, t) {
                                            C[t] = e + de
                                        }))
                                    }
                                }
                                c.extend(this, {
                                    slides: m,
                                    snapGrid: y,
                                    slidesGrid: C,
                                    slidesSizesGrid: x
                                }), w !== h && this.emit("slidesLengthChange"), y.length !== S && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), C.length !== P && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                            }
                        },
                        updateAutoHeight: function(e) {
                            var i, t = [],
                                n = 0;
                            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                                for (i = 0; i < Math.ceil(this.params.slidesPerView); i += 1) {
                                    var r = this.activeIndex + i;
                                    if (r > this.slides.length) break;
                                    t.push(this.slides.eq(r)[0])
                                } else t.push(this.slides.eq(this.activeIndex)[0]);
                            for (i = 0; i < t.length; i += 1)
                                if (void 0 !== t[i]) {
                                    var o = t[i].offsetHeight;
                                    n = o > n ? o : n
                                } n && this.$wrapperEl.css("height", n + "px")
                        },
                        updateSlidesOffset: function() {
                            for (var e = this.slides, i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            var t = this.params,
                                n = this.slides,
                                o = this.rtlTranslate;
                            if (0 !== n.length) {
                                void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset();
                                var l = -e;
                                o && (l = e), n.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                                for (var i = 0; i < n.length; i += 1) {
                                    var d = n[i],
                                        h = (l + (t.centeredSlides ? this.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + t.spaceBetween);
                                    if (t.watchSlidesVisibility) {
                                        var c = -(l - d.swiperSlideOffset),
                                            f = c + this.slidesSizesGrid[i];
                                        (c >= 0 && c < this.size - 1 || f > 1 && f <= this.size || c <= 0 && f >= this.size) && (this.visibleSlides.push(d), this.visibleSlidesIndexes.push(i), n.eq(i).addClass(t.slideVisibleClass))
                                    }
                                    d.progress = o ? -h : h
                                }
                                this.visibleSlides = r(this.visibleSlides)
                            }
                        },
                        updateProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            var t = this.params,
                                n = this.maxTranslate() - this.minTranslate(),
                                progress = this.progress,
                                r = this.isBeginning,
                                o = this.isEnd,
                                l = r,
                                d = o;
                            0 === n ? (progress = 0, r = !0, o = !0) : (r = (progress = (e - this.minTranslate()) / n) <= 0, o = progress >= 1), c.extend(this, {
                                progress: progress,
                                isBeginning: r,
                                isEnd: o
                            }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", progress)
                        },
                        updateSlidesClasses: function() {
                            var e, t = this.slides,
                                n = this.params,
                                r = this.$wrapperEl,
                                o = this.activeIndex,
                                l = this.realIndex,
                                d = this.virtual && n.virtual.enabled;
                            t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = d ? this.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + o + '"]') : t.eq(o)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l + '"]').addClass(n.slideDuplicateActiveClass));
                            var h = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                            n.loop && 0 === h.length && (h = t.eq(0)).addClass(n.slideNextClass);
                            var c = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                            n.loop && 0 === c.length && (c = t.eq(-1)).addClass(n.slidePrevClass), n.loop && (h.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
                        },
                        updateActiveIndex: function(e) {
                            var t, n = this.rtlTranslate ? this.translate : -this.translate,
                                r = this.slidesGrid,
                                o = this.snapGrid,
                                l = this.params,
                                d = this.activeIndex,
                                h = this.realIndex,
                                f = this.snapIndex,
                                v = e;
                            if (void 0 === v) {
                                for (var i = 0; i < r.length; i += 1) void 0 !== r[i + 1] ? n >= r[i] && n < r[i + 1] - (r[i + 1] - r[i]) / 2 ? v = i : n >= r[i] && n < r[i + 1] && (v = i + 1) : n >= r[i] && (v = i);
                                l.normalizeSlideIndex && (v < 0 || void 0 === v) && (v = 0)
                            }
                            if ((t = o.indexOf(n) >= 0 ? o.indexOf(n) : Math.floor(v / l.slidesPerGroup)) >= o.length && (t = o.length - 1), v !== d) {
                                var m = parseInt(this.slides.eq(v).attr("data-swiper-slide-index") || v, 10);
                                c.extend(this, {
                                    snapIndex: t,
                                    realIndex: m,
                                    previousIndex: d,
                                    activeIndex: v
                                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), h !== m && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                            } else t !== f && (this.snapIndex = t, this.emit("snapIndexChange"))
                        },
                        updateClickedSlide: function(e) {
                            var t = this.params,
                                n = r(e.target).closest("." + t.slideClass)[0],
                                o = !1;
                            if (n)
                                for (var i = 0; i < this.slides.length; i += 1) this.slides[i] === n && (o = !0);
                            if (!n || !o) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                            this.clickedSlide = n, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r(n).attr("data-swiper-slide-index"), 10) : this.clickedIndex = r(n).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    C = {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            var t = this.params,
                                n = this.rtlTranslate,
                                r = this.translate,
                                o = this.$wrapperEl;
                            if (t.virtualTranslate) return n ? -r : r;
                            var l = c.getTranslate(o[0], e);
                            return n && (l = -l), l || 0
                        },
                        setTranslate: function(e, t) {
                            var n = this.rtlTranslate,
                                r = this.params,
                                o = this.$wrapperEl,
                                progress = this.progress,
                                l = 0,
                                d = 0;
                            this.isHorizontal() ? l = n ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.virtualTranslate || (f.transforms3d ? o.transform("translate3d(" + l + "px, " + d + "px, 0px)") : o.transform("translate(" + l + "px, " + d + "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : d;
                            var h = this.maxTranslate() - this.minTranslate();
                            (0 === h ? 0 : (e - this.minTranslate()) / h) !== progress && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        }
                    },
                    x = {
                        setTransition: function(e, t) {
                            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            var n = this.activeIndex,
                                r = this.params,
                                o = this.previousIndex;
                            r.autoHeight && this.updateAutoHeight();
                            var l = t;
                            if (l || (l = n > o ? "next" : n < o ? "prev" : "reset"), this.emit("transitionStart"), e && n !== o) {
                                if ("reset" === l) return void this.emit("slideResetTransitionStart");
                                this.emit("slideChangeTransitionStart"), "next" === l ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                            }
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            var n = this.activeIndex,
                                r = this.previousIndex;
                            this.animating = !1, this.setTransition(0);
                            var o = t;
                            if (o || (o = n > r ? "next" : n < r ? "prev" : "reset"), this.emit("transitionEnd"), e && n !== r) {
                                if ("reset" === o) return void this.emit("slideResetTransitionEnd");
                                this.emit("slideChangeTransitionEnd"), "next" === o ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                            }
                        }
                    },
                    T = {
                        slideTo: function(e, t, n, r) {
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                            var o = this,
                                l = e;
                            l < 0 && (l = 0);
                            var d = o.params,
                                h = o.snapGrid,
                                c = o.slidesGrid,
                                v = o.previousIndex,
                                m = o.activeIndex,
                                w = o.rtlTranslate;
                            if (o.animating && d.preventInteractionOnTransition) return !1;
                            var y = Math.floor(l / d.slidesPerGroup);
                            y >= h.length && (y = h.length - 1), (m || d.initialSlide || 0) === (v || 0) && n && o.emit("beforeSlideChangeStart");
                            var C, x = -h[y];
                            if (o.updateProgress(x), d.normalizeSlideIndex)
                                for (var i = 0; i < c.length; i += 1) - Math.floor(100 * x) >= Math.floor(100 * c[i]) && (l = i);
                            if (o.initialized && l !== m) {
                                if (!o.allowSlideNext && x < o.translate && x < o.minTranslate()) return !1;
                                if (!o.allowSlidePrev && x > o.translate && x > o.maxTranslate() && (m || 0) !== l) return !1
                            }
                            return C = l > m ? "next" : l < m ? "prev" : "reset", w && -x === o.translate || !w && x === o.translate ? (o.updateActiveIndex(l), d.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== d.effect && o.setTranslate(x), "reset" !== C && (o.transitionStart(n, C), o.transitionEnd(n, C)), !1) : (0 !== t && f.transition ? (o.setTransition(t), o.setTranslate(x), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, C), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                                o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, C))
                            }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd))) : (o.setTransition(0), o.setTranslate(x), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, C), o.transitionEnd(n, C)), !0)
                        },
                        slideToLoop: function(e, t, n, r) {
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                            var o = e;
                            return this.params.loop && (o += this.loopedSlides), this.slideTo(o, t, n, r)
                        },
                        slideNext: function(e, t, n) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            var r = this.params,
                                o = this.animating;
                            return r.loop ? !o && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + r.slidesPerGroup, e, t, n)) : this.slideTo(this.activeIndex + r.slidesPerGroup, e, t, n)
                        },
                        slidePrev: function(e, t, n) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            var r = this.params,
                                o = this.animating,
                                l = this.snapGrid,
                                d = this.slidesGrid,
                                h = this.rtlTranslate;
                            if (r.loop) {
                                if (o) return !1;
                                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                            }

                            function c(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            var f, v = c(h ? this.translate : -this.translate),
                                m = l.map((function(e) {
                                    return c(e)
                                })),
                                w = (d.map((function(e) {
                                    return c(e)
                                })), l[m.indexOf(v)], l[m.indexOf(v) - 1]);
                            return void 0 !== w && (f = d.indexOf(w)) < 0 && (f = this.activeIndex - 1), this.slideTo(f, e, t, n)
                        },
                        slideReset: function(e, t, n) {
                            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
                        },
                        slideToClosest: function(e, t, n) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            var r = this.activeIndex,
                                o = Math.floor(r / this.params.slidesPerGroup);
                            if (o < this.snapGrid.length - 1) {
                                var l = this.rtlTranslate ? this.translate : -this.translate,
                                    d = this.snapGrid[o];
                                l - d > (this.snapGrid[o + 1] - d) / 2 && (r = this.params.slidesPerGroup)
                            }
                            return this.slideTo(r, e, t, n)
                        },
                        slideToClickedSlide: function() {
                            var e, t = this,
                                n = t.params,
                                o = t.$wrapperEl,
                                l = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                                d = t.clickedIndex;
                            if (n.loop) {
                                if (t.animating) return;
                                e = parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? d < t.loopedSlides - l / 2 || d > t.slides.length - t.loopedSlides + l / 2 ? (t.loopFix(), d = o.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), c.nextTick((function() {
                                    t.slideTo(d)
                                }))) : t.slideTo(d) : d > t.slides.length - l ? (t.loopFix(), d = o.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), c.nextTick((function() {
                                    t.slideTo(d)
                                }))) : t.slideTo(d)
                            } else t.slideTo(d)
                        }
                    },
                    E = {
                        loopCreate: function() {
                            var t = this,
                                n = t.params,
                                o = t.$wrapperEl;
                            o.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                            var l = o.children("." + n.slideClass);
                            if (n.loopFillGroupWithBlank) {
                                var d = n.slidesPerGroup - l.length % n.slidesPerGroup;
                                if (d !== n.slidesPerGroup) {
                                    for (var i = 0; i < d; i += 1) {
                                        var h = r(e.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                                        o.append(h)
                                    }
                                    l = o.children("." + n.slideClass)
                                }
                            }
                            "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = l.length), t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), t.loopedSlides += n.loopAdditionalSlides, t.loopedSlides > l.length && (t.loopedSlides = l.length);
                            var c = [],
                                f = [];
                            l.each((function(e, n) {
                                var o = r(n);
                                e < t.loopedSlides && f.push(n), e < l.length && e >= l.length - t.loopedSlides && c.push(n), o.attr("data-swiper-slide-index", e)
                            }));
                            for (var v = 0; v < f.length; v += 1) o.append(r(f[v].cloneNode(!0)).addClass(n.slideDuplicateClass));
                            for (var m = c.length - 1; m >= 0; m -= 1) o.prepend(r(c[m].cloneNode(!0)).addClass(n.slideDuplicateClass))
                        },
                        loopFix: function() {
                            var e, t = this.params,
                                n = this.activeIndex,
                                r = this.slides,
                                o = this.loopedSlides,
                                l = this.allowSlidePrev,
                                d = this.allowSlideNext,
                                h = this.snapGrid,
                                c = this.rtlTranslate;
                            this.allowSlidePrev = !0, this.allowSlideNext = !0;
                            var f = -h[n] - this.getTranslate();
                            n < o ? (e = r.length - 3 * o + n, e += o, this.slideTo(e, 0, !1, !0) && 0 !== f && this.setTranslate((c ? -this.translate : this.translate) - f)) : ("auto" === t.slidesPerView && n >= 2 * o || n >= r.length - o) && (e = -r.length + n + o, e += o, this.slideTo(e, 0, !1, !0) && 0 !== f && this.setTranslate((c ? -this.translate : this.translate) - f)), this.allowSlidePrev = l, this.allowSlideNext = d
                        },
                        loopDestroy: function() {
                            var e = this.$wrapperEl,
                                t = this.params,
                                n = this.slides;
                            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), n.removeAttr("data-swiper-slide-index")
                        }
                    },
                    S = {
                        setGrabCursor: function(e) {
                            if (!(f.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                                var t = this.el;
                                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                            }
                        },
                        unsetGrabCursor: function() {
                            f.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
                        }
                    },
                    P = {
                        appendSlide: function(e) {
                            var t = this.$wrapperEl,
                                n = this.params;
                            if (n.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                                for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
                            else t.append(e);
                            n.loop && this.loopCreate(), n.observer && f.observer || this.update()
                        },
                        prependSlide: function(e) {
                            var t = this.params,
                                n = this.$wrapperEl,
                                r = this.activeIndex;
                            t.loop && this.loopDestroy();
                            var o = r + 1;
                            if ("object" == typeof e && "length" in e) {
                                for (var i = 0; i < e.length; i += 1) e[i] && n.prepend(e[i]);
                                o = r + e.length
                            } else n.prepend(e);
                            t.loop && this.loopCreate(), t.observer && f.observer || this.update(), this.slideTo(o, 0, !1)
                        },
                        addSlide: function(e, t) {
                            var n = this.$wrapperEl,
                                r = this.params,
                                o = this.activeIndex;
                            r.loop && (o -= this.loopedSlides, this.loopDestroy(), this.slides = n.children("." + r.slideClass));
                            var l = this.slides.length;
                            if (e <= 0) this.prependSlide(t);
                            else if (e >= l) this.appendSlide(t);
                            else {
                                for (var d = o > e ? o + 1 : o, h = [], i = l - 1; i >= e; i -= 1) {
                                    var c = this.slides.eq(i);
                                    c.remove(), h.unshift(c)
                                }
                                if ("object" == typeof t && "length" in t) {
                                    for (var v = 0; v < t.length; v += 1) t[v] && n.append(t[v]);
                                    d = o > e ? o + t.length : o
                                } else n.append(t);
                                for (var m = 0; m < h.length; m += 1) n.append(h[m]);
                                r.loop && this.loopCreate(), r.observer && f.observer || this.update(), r.loop ? this.slideTo(d + this.loopedSlides, 0, !1) : this.slideTo(d, 0, !1)
                            }
                        },
                        removeSlide: function(e) {
                            var t = this.params,
                                n = this.$wrapperEl,
                                r = this.activeIndex;
                            t.loop && (r -= this.loopedSlides, this.loopDestroy(), this.slides = n.children("." + t.slideClass));
                            var o, l = r;
                            if ("object" == typeof e && "length" in e) {
                                for (var i = 0; i < e.length; i += 1) o = e[i], this.slides[o] && this.slides.eq(o).remove(), o < l && (l -= 1);
                                l = Math.max(l, 0)
                            } else o = e, this.slides[o] && this.slides.eq(o).remove(), o < l && (l -= 1), l = Math.max(l, 0);
                            t.loop && this.loopCreate(), t.observer && f.observer || this.update(), t.loop ? this.slideTo(l + this.loopedSlides, 0, !1) : this.slideTo(l, 0, !1)
                        },
                        removeAllSlides: function() {
                            for (var e = [], i = 0; i < this.slides.length; i += 1) e.push(i);
                            this.removeSlide(e)
                        }
                    },
                    M = function() {
                        var n = t.navigator.userAgent,
                            r = {
                                ios: !1,
                                android: !1,
                                androidChrome: !1,
                                desktop: !1,
                                windows: !1,
                                iphone: !1,
                                ipod: !1,
                                ipad: !1,
                                cordova: t.cordova || t.phonegap,
                                phonegap: t.cordova || t.phonegap
                            },
                            o = n.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                            l = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                            d = n.match(/(iPad).*OS\s([\d_]+)/),
                            h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                            c = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                        if (o && (r.os = "windows", r.osVersion = o[2], r.windows = !0), l && !o && (r.os = "android", r.osVersion = l[2], r.android = !0, r.androidChrome = n.toLowerCase().indexOf("chrome") >= 0), (d || c || h) && (r.os = "ios", r.ios = !0), c && !h && (r.osVersion = c[2].replace(/_/g, "."), r.iphone = !0), d && (r.osVersion = d[2].replace(/_/g, "."), r.ipad = !0), h && (r.osVersion = h[3] ? h[3].replace(/_/g, ".") : null, r.iphone = !0), r.ios && r.osVersion && n.indexOf("Version/") >= 0 && "10" === r.osVersion.split(".")[0] && (r.osVersion = n.toLowerCase().split("version/")[1].split(" ")[0]), r.desktop = !(r.os || r.android || r.webView), r.webView = (c || d || h) && n.match(/.*AppleWebKit(?!.*Safari)/i), r.os && "ios" === r.os) {
                            var f = r.osVersion.split("."),
                                v = e.querySelector('meta[name="viewport"]');
                            r.minimalUi = !r.webView && (h || c) && (1 * f[0] == 7 ? 1 * f[1] >= 1 : 1 * f[0] > 7) && v && v.getAttribute("content").indexOf("minimal-ui") >= 0
                        }
                        return r.pixelRatio = t.devicePixelRatio || 1, r
                    }();

                function k(n) {
                    var data = this.touchEventsData,
                        o = this.params,
                        l = this.touches;
                    if (!this.animating || !o.preventInteractionOnTransition) {
                        var d = n;
                        if (d.originalEvent && (d = d.originalEvent), data.isTouchEvent = "touchstart" === d.type, (data.isTouchEvent || !("which" in d) || 3 !== d.which) && !(!data.isTouchEvent && "button" in d && d.button > 0 || data.isTouched && data.isMoved))
                            if (o.noSwiping && r(d.target).closest(o.noSwipingSelector ? o.noSwipingSelector : "." + o.noSwipingClass)[0]) this.allowClick = !0;
                            else if (!o.swipeHandler || r(d).closest(o.swipeHandler)[0]) {
                            l.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, l.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
                            var h = l.currentX,
                                f = l.currentY,
                                v = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                                m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                            if (!v || !(h <= m || h >= t.screen.width - m)) {
                                if (c.extend(data, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }), l.startX = h, l.startY = f, data.touchStartTime = c.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, o.threshold > 0 && (data.allowThresholdMove = !1), "touchstart" !== d.type) {
                                    var w = !0;
                                    r(d.target).is(data.formElements) && (w = !1), e.activeElement && r(e.activeElement).is(data.formElements) && e.activeElement !== d.target && e.activeElement.blur();
                                    var y = w && this.allowTouchMove && o.touchStartPreventDefault;
                                    (o.touchStartForcePreventDefault || y) && d.preventDefault()
                                }
                                this.emit("touchStart", d)
                            }
                        }
                    }
                }

                function I(t) {
                    var data = this.touchEventsData,
                        n = this.params,
                        o = this.touches,
                        l = this.rtlTranslate,
                        d = t;
                    if (d.originalEvent && (d = d.originalEvent), data.isTouched) {
                        if (!data.isTouchEvent || "mousemove" !== d.type) {
                            var h = "touchmove" === d.type ? d.targetTouches[0].pageX : d.pageX,
                                f = "touchmove" === d.type ? d.targetTouches[0].pageY : d.pageY;
                            if (d.preventedByNestedSwiper) return o.startX = h, void(o.startY = f);
                            if (!this.allowTouchMove) return this.allowClick = !1, void(data.isTouched && (c.extend(o, {
                                startX: h,
                                startY: f,
                                currentX: h,
                                currentY: f
                            }), data.touchStartTime = c.now()));
                            if (data.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                                if (this.isVertical()) {
                                    if (f < o.startY && this.translate <= this.maxTranslate() || f > o.startY && this.translate >= this.minTranslate()) return data.isTouched = !1, void(data.isMoved = !1)
                                } else if (h < o.startX && this.translate <= this.maxTranslate() || h > o.startX && this.translate >= this.minTranslate()) return;
                            if (data.isTouchEvent && e.activeElement && d.target === e.activeElement && r(d.target).is(data.formElements)) return data.isMoved = !0, void(this.allowClick = !1);
                            if (data.allowTouchCallbacks && this.emit("touchMove", d), !(d.targetTouches && d.targetTouches.length > 1)) {
                                o.currentX = h, o.currentY = f;
                                var v, m = o.currentX - o.startX,
                                    w = o.currentY - o.startY;
                                if (!(this.params.threshold && Math.sqrt(Math.pow(m, 2) + Math.pow(w, 2)) < this.params.threshold))
                                    if (void 0 === data.isScrolling && (this.isHorizontal() && o.currentY === o.startY || this.isVertical() && o.currentX === o.startX ? data.isScrolling = !1 : m * m + w * w >= 25 && (v = 180 * Math.atan2(Math.abs(w), Math.abs(m)) / Math.PI, data.isScrolling = this.isHorizontal() ? v > n.touchAngle : 90 - v > n.touchAngle)), data.isScrolling && this.emit("touchMoveOpposite", d), void 0 === data.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (data.startMoving = !0)), data.isScrolling) data.isTouched = !1;
                                    else if (data.startMoving) {
                                    this.allowClick = !1, d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation(), data.isMoved || (n.loop && this.loopFix(), data.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), data.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", d)), this.emit("sliderMove", d), data.isMoved = !0;
                                    var y = this.isHorizontal() ? m : w;
                                    o.diff = y, y *= n.touchRatio, l && (y = -y), this.swipeDirection = y > 0 ? "prev" : "next", data.currentTranslate = y + data.startTranslate;
                                    var C = !0,
                                        x = n.resistanceRatio;
                                    if (n.touchReleaseOnEdges && (x = 0), y > 0 && data.currentTranslate > this.minTranslate() ? (C = !1, n.resistance && (data.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + data.startTranslate + y, x))) : y < 0 && data.currentTranslate < this.maxTranslate() && (C = !1, n.resistance && (data.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - data.startTranslate - y, x))), C && (d.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate), n.threshold > 0) {
                                        if (!(Math.abs(y) > n.threshold || data.allowThresholdMove)) return void(data.currentTranslate = data.startTranslate);
                                        if (!data.allowThresholdMove) return data.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, data.currentTranslate = data.startTranslate, void(o.diff = this.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
                                    }
                                    n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === data.velocities.length && data.velocities.push({
                                        position: o[this.isHorizontal() ? "startX" : "startY"],
                                        time: data.touchStartTime
                                    }), data.velocities.push({
                                        position: o[this.isHorizontal() ? "currentX" : "currentY"],
                                        time: c.now()
                                    })), this.updateProgress(data.currentTranslate), this.setTranslate(data.currentTranslate))
                                }
                            }
                        }
                    } else data.startMoving && data.isScrolling && this.emit("touchMoveOpposite", d)
                }

                function R(e) {
                    var t = this,
                        data = t.touchEventsData,
                        n = t.params,
                        r = t.touches,
                        o = t.rtlTranslate,
                        l = t.$wrapperEl,
                        d = t.slidesGrid,
                        h = t.snapGrid,
                        f = e;
                    if (f.originalEvent && (f = f.originalEvent), data.allowTouchCallbacks && t.emit("touchEnd", f), data.allowTouchCallbacks = !1, !data.isTouched) return data.isMoved && n.grabCursor && t.setGrabCursor(!1), data.isMoved = !1, void(data.startMoving = !1);
                    n.grabCursor && data.isMoved && data.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var v, m = c.now(),
                        w = m - data.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(f), t.emit("tap", f), w < 300 && m - data.lastClickTime > 300 && (data.clickTimeout && clearTimeout(data.clickTimeout), data.clickTimeout = c.nextTick((function() {
                            t && !t.destroyed && t.emit("click", f)
                        }), 300)), w < 300 && m - data.lastClickTime < 300 && (data.clickTimeout && clearTimeout(data.clickTimeout), t.emit("doubleTap", f))), data.lastClickTime = c.now(), c.nextTick((function() {
                            t.destroyed || (t.allowClick = !0)
                        })), !data.isTouched || !data.isMoved || !t.swipeDirection || 0 === r.diff || data.currentTranslate === data.startTranslate) return data.isTouched = !1, data.isMoved = !1, void(data.startMoving = !1);
                    if (data.isTouched = !1, data.isMoved = !1, data.startMoving = !1, v = n.followFinger ? o ? t.translate : -t.translate : -data.currentTranslate, n.freeMode) {
                        if (v < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (v > -t.maxTranslate()) return void(t.slides.length < h.length ? t.slideTo(h.length - 1) : t.slideTo(t.slides.length - 1));
                        if (n.freeModeMomentum) {
                            if (data.velocities.length > 1) {
                                var y = data.velocities.pop(),
                                    C = data.velocities.pop(),
                                    x = y.position - C.position,
                                    time = y.time - C.time;
                                t.velocity = x / time, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (time > 150 || c.now() - y.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= n.freeModeMomentumVelocityRatio, data.velocities.length = 0;
                            var T = 1e3 * n.freeModeMomentumRatio,
                                E = t.velocity * T,
                                S = t.translate + E;
                            o && (S = -S);
                            var P, M, k = !1,
                                I = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                            if (S < t.maxTranslate()) n.freeModeMomentumBounce ? (S + t.maxTranslate() < -I && (S = t.maxTranslate() - I), P = t.maxTranslate(), k = !0, data.allowMomentumBounce = !0) : S = t.maxTranslate(), n.loop && n.centeredSlides && (M = !0);
                            else if (S > t.minTranslate()) n.freeModeMomentumBounce ? (S - t.minTranslate() > I && (S = t.minTranslate() + I), P = t.minTranslate(), k = !0, data.allowMomentumBounce = !0) : S = t.minTranslate(), n.loop && n.centeredSlides && (M = !0);
                            else if (n.freeModeSticky) {
                                for (var R, z = 0; z < h.length; z += 1)
                                    if (h[z] > -S) {
                                        R = z;
                                        break
                                    } S = -(S = Math.abs(h[R] - S) < Math.abs(h[R - 1] - S) || "next" === t.swipeDirection ? h[R] : h[R - 1])
                            }
                            if (M && t.once("transitionEnd", (function() {
                                    t.loopFix()
                                })), 0 !== t.velocity) T = o ? Math.abs((-S - t.translate) / t.velocity) : Math.abs((S - t.translate) / t.velocity);
                            else if (n.freeModeSticky) return void t.slideToClosest();
                            n.freeModeMomentumBounce && k ? (t.updateProgress(P), t.setTransition(T), t.setTranslate(S), t.transitionStart(!0, t.swipeDirection), t.animating = !0, l.transitionEnd((function() {
                                t && !t.destroyed && data.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(P), l.transitionEnd((function() {
                                    t && !t.destroyed && t.transitionEnd()
                                })))
                            }))) : t.velocity ? (t.updateProgress(S), t.setTransition(T), t.setTranslate(S), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, l.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(S), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else if (n.freeModeSticky) return void t.slideToClosest();
                        (!n.freeModeMomentum || w >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    } else {
                        for (var L = 0, $ = t.slidesSizesGrid[0], i = 0; i < d.length; i += n.slidesPerGroup) void 0 !== d[i + n.slidesPerGroup] ? v >= d[i] && v < d[i + n.slidesPerGroup] && (L = i, $ = d[i + n.slidesPerGroup] - d[i]) : v >= d[i] && (L = i, $ = d[d.length - 1] - d[d.length - 2]);
                        var O = (v - d[L]) / $;
                        if (w > n.longSwipesMs) {
                            if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (O >= n.longSwipesRatio ? t.slideTo(L + n.slidesPerGroup) : t.slideTo(L)), "prev" === t.swipeDirection && (O > 1 - n.longSwipesRatio ? t.slideTo(L + n.slidesPerGroup) : t.slideTo(L))
                        } else {
                            if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(L + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(L)
                        }
                    }
                }

                function z() {
                    var e = this.params,
                        t = this.el;
                    if (!t || 0 !== t.offsetWidth) {
                        e.breakpoints && this.setBreakpoint();
                        var n = this.allowSlideNext,
                            r = this.allowSlidePrev,
                            o = this.snapGrid;
                        if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                            var l = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                            this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
                        } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                        this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = r, this.allowSlideNext = n, this.params.watchOverflow && o !== this.snapGrid && this.checkOverflow()
                    }
                }

                function L(e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }
                var $ = {
                        init: !0,
                        direction: "horizontal",
                        touchEventsTarget: "container",
                        initialSlide: 0,
                        speed: 300,
                        preventInteractionOnTransition: !1,
                        edgeSwipeDetection: !1,
                        edgeSwipeThreshold: 20,
                        freeMode: !1,
                        freeModeMomentum: !0,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: !0,
                        freeModeMomentumBounceRatio: 1,
                        freeModeMomentumVelocityRatio: 1,
                        freeModeSticky: !1,
                        freeModeMinimumVelocity: .02,
                        autoHeight: !1,
                        setWrapperSize: !1,
                        virtualTranslate: !1,
                        effect: "slide",
                        breakpoints: void 0,
                        breakpointsInverse: !1,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: "column",
                        slidesPerGroup: 1,
                        centeredSlides: !1,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        normalizeSlideIndex: !0,
                        centerInsufficientSlides: !1,
                        watchOverflow: !1,
                        roundLengths: !1,
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: !0,
                        shortSwipes: !0,
                        longSwipes: !0,
                        longSwipesRatio: .5,
                        longSwipesMs: 300,
                        followFinger: !0,
                        allowTouchMove: !0,
                        threshold: 0,
                        touchMoveStopPropagation: !0,
                        touchStartPreventDefault: !0,
                        touchStartForcePreventDefault: !1,
                        touchReleaseOnEdges: !1,
                        uniqueNavElements: !0,
                        resistance: !0,
                        resistanceRatio: .85,
                        watchSlidesProgress: !1,
                        watchSlidesVisibility: !1,
                        grabCursor: !1,
                        preventClicks: !0,
                        preventClicksPropagation: !0,
                        slideToClickedSlide: !1,
                        preloadImages: !0,
                        updateOnImagesReady: !0,
                        loop: !1,
                        loopAdditionalSlides: 0,
                        loopedSlides: null,
                        loopFillGroupWithBlank: !1,
                        allowSlidePrev: !0,
                        allowSlideNext: !0,
                        swipeHandler: null,
                        noSwiping: !0,
                        noSwipingClass: "swiper-no-swiping",
                        noSwipingSelector: null,
                        passiveListeners: !0,
                        containerModifierClass: "swiper-container-",
                        slideClass: "swiper-slide",
                        slideBlankClass: "swiper-slide-invisible-blank",
                        slideActiveClass: "swiper-slide-active",
                        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                        slideVisibleClass: "swiper-slide-visible",
                        slideDuplicateClass: "swiper-slide-duplicate",
                        slideNextClass: "swiper-slide-next",
                        slideDuplicateNextClass: "swiper-slide-duplicate-next",
                        slidePrevClass: "swiper-slide-prev",
                        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                        wrapperClass: "swiper-wrapper",
                        runCallbacksOnInit: !0
                    },
                    O = {
                        update: y,
                        translate: C,
                        transition: x,
                        slide: T,
                        loop: E,
                        grabCursor: S,
                        manipulation: P,
                        events: {
                            attachEvents: function() {
                                var t = this.params,
                                    n = this.touchEvents,
                                    r = this.el,
                                    o = this.wrapperEl;
                                this.onTouchStart = k.bind(this), this.onTouchMove = I.bind(this), this.onTouchEnd = R.bind(this), this.onClick = L.bind(this);
                                var l = "container" === t.touchEventsTarget ? r : o,
                                    d = !!t.nested;
                                if (f.touch || !f.pointerEvents && !f.prefixedPointerEvents) {
                                    if (f.touch) {
                                        var h = !("touchstart" !== n.start || !f.passiveListener || !t.passiveListeners) && {
                                            passive: !0,
                                            capture: !1
                                        };
                                        l.addEventListener(n.start, this.onTouchStart, h), l.addEventListener(n.move, this.onTouchMove, f.passiveListener ? {
                                            passive: !1,
                                            capture: d
                                        } : d), l.addEventListener(n.end, this.onTouchEnd, h)
                                    }(t.simulateTouch && !M.ios && !M.android || t.simulateTouch && !f.touch && M.ios) && (l.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, d), e.addEventListener("mouseup", this.onTouchEnd, !1))
                                } else l.addEventListener(n.start, this.onTouchStart, !1), e.addEventListener(n.move, this.onTouchMove, d), e.addEventListener(n.end, this.onTouchEnd, !1);
                                (t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", this.onClick, !0), this.on(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0)
                            },
                            detachEvents: function() {
                                var t = this.params,
                                    n = this.touchEvents,
                                    r = this.el,
                                    o = this.wrapperEl,
                                    l = "container" === t.touchEventsTarget ? r : o,
                                    d = !!t.nested;
                                if (f.touch || !f.pointerEvents && !f.prefixedPointerEvents) {
                                    if (f.touch) {
                                        var h = !("onTouchStart" !== n.start || !f.passiveListener || !t.passiveListeners) && {
                                            passive: !0,
                                            capture: !1
                                        };
                                        l.removeEventListener(n.start, this.onTouchStart, h), l.removeEventListener(n.move, this.onTouchMove, d), l.removeEventListener(n.end, this.onTouchEnd, h)
                                    }(t.simulateTouch && !M.ios && !M.android || t.simulateTouch && !f.touch && M.ios) && (l.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, d), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                                } else l.removeEventListener(n.start, this.onTouchStart, !1), e.removeEventListener(n.move, this.onTouchMove, d), e.removeEventListener(n.end, this.onTouchEnd, !1);
                                (t.preventClicks || t.preventClicksPropagation) && l.removeEventListener("click", this.onClick, !0), this.off(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z)
                            }
                        },
                        breakpoints: {
                            setBreakpoint: function() {
                                var e = this.activeIndex,
                                    t = this.initialized,
                                    n = this.loopedSlides;
                                void 0 === n && (n = 0);
                                var r = this.params,
                                    o = r.breakpoints;
                                if (o && (!o || 0 !== Object.keys(o).length)) {
                                    var l = this.getBreakpoint(o);
                                    if (l && this.currentBreakpoint !== l) {
                                        var d = l in o ? o[l] : void 0;
                                        d && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((function(param) {
                                            var e = d[param];
                                            void 0 !== e && (d[param] = "slidesPerView" !== param || "AUTO" !== e && "auto" !== e ? "slidesPerView" === param ? parseFloat(e) : parseInt(e, 10) : "auto")
                                        }));
                                        var h = d || this.originalParams,
                                            f = h.direction && h.direction !== r.direction,
                                            v = r.loop && (h.slidesPerView !== r.slidesPerView || f);
                                        f && t && this.changeDirection(), c.extend(this.params, h), c.extend(this, {
                                            allowTouchMove: this.params.allowTouchMove,
                                            allowSlideNext: this.params.allowSlideNext,
                                            allowSlidePrev: this.params.allowSlidePrev
                                        }), this.currentBreakpoint = l, v && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - n + this.loopedSlides, 0, !1)), this.emit("breakpoint", h)
                                    }
                                }
                            },
                            getBreakpoint: function(e) {
                                if (e) {
                                    var n = !1,
                                        r = [];
                                    Object.keys(e).forEach((function(e) {
                                        r.push(e)
                                    })), r.sort((function(a, b) {
                                        return parseInt(a, 10) - parseInt(b, 10)
                                    }));
                                    for (var i = 0; i < r.length; i += 1) {
                                        var o = r[i];
                                        this.params.breakpointsInverse ? o <= t.innerWidth && (n = o) : o >= t.innerWidth && !n && (n = o)
                                    }
                                    return n || "max"
                                }
                            }
                        },
                        checkOverflow: {
                            checkOverflow: function() {
                                var e = this.isLocked;
                                this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                            }
                        },
                        classes: {
                            addClasses: function() {
                                var e = this.classNames,
                                    t = this.params,
                                    n = this.rtl,
                                    r = this.$el,
                                    o = [];
                                o.push("initialized"), o.push(t.direction), t.freeMode && o.push("free-mode"), f.flexbox || o.push("no-flexbox"), t.autoHeight && o.push("autoheight"), n && o.push("rtl"), t.slidesPerColumn > 1 && o.push("multirow"), M.android && o.push("android"), M.ios && o.push("ios"), (v.isIE || v.isEdge) && (f.pointerEvents || f.prefixedPointerEvents) && o.push("wp8-" + t.direction), o.forEach((function(n) {
                                    e.push(t.containerModifierClass + n)
                                })), r.addClass(e.join(" "))
                            },
                            removeClasses: function() {
                                var e = this.$el,
                                    t = this.classNames;
                                e.removeClass(t.join(" "))
                            }
                        },
                        images: {
                            loadImage: function(e, n, r, o, l, d) {
                                var image;

                                function h() {
                                    d && d()
                                }
                                e.complete && l ? h() : n ? ((image = new t.Image).onload = h, image.onerror = h, o && (image.sizes = o), r && (image.srcset = r), n && (image.src = n)) : h()
                            },
                            preloadImages: function() {
                                var e = this;

                                function t() {
                                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                                }
                                e.imagesToLoad = e.$el.find("img");
                                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                                    var n = e.imagesToLoad[i];
                                    e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                                }
                            }
                        }
                    },
                    A = {},
                    B = function(e) {
                        function t() {
                            for (var n, o, l, d = [], h = arguments.length; h--;) d[h] = arguments[h];
                            1 === d.length && d[0].constructor && d[0].constructor === Object ? l = d[0] : (o = (n = d)[0], l = n[1]), l || (l = {}), l = c.extend({}, l), o && !l.el && (l.el = o), e.call(this, l), Object.keys(O).forEach((function(e) {
                                Object.keys(O[e]).forEach((function(n) {
                                    t.prototype[n] || (t.prototype[n] = O[e][n])
                                }))
                            }));
                            var v = this;
                            void 0 === v.modules && (v.modules = {}), Object.keys(v.modules).forEach((function(e) {
                                var t = v.modules[e];
                                if (t.params) {
                                    var n = Object.keys(t.params)[0],
                                        r = t.params[n];
                                    if ("object" != typeof r || null === r) return;
                                    if (!(n in l) || !("enabled" in r)) return;
                                    !0 === l[n] && (l[n] = {
                                        enabled: !0
                                    }), "object" != typeof l[n] || "enabled" in l[n] || (l[n].enabled = !0), l[n] || (l[n] = {
                                        enabled: !1
                                    })
                                }
                            }));
                            var m = c.extend({}, $);
                            v.useModulesParams(m), v.params = c.extend({}, m, A, l), v.originalParams = c.extend({}, v.params), v.passedParams = c.extend({}, l), v.$ = r;
                            var w = r(v.params.el);
                            if (o = w[0]) {
                                if (w.length > 1) {
                                    var y = [];
                                    return w.each((function(e, n) {
                                        var r = c.extend({}, l, {
                                            el: n
                                        });
                                        y.push(new t(r))
                                    })), y
                                }
                                o.swiper = v, w.data("swiper", v);
                                var C, x, T = w.children("." + v.params.wrapperClass);
                                return c.extend(v, {
                                    $el: w,
                                    el: o,
                                    $wrapperEl: T,
                                    wrapperEl: T[0],
                                    classNames: [],
                                    slides: r(),
                                    slidesGrid: [],
                                    snapGrid: [],
                                    slidesSizesGrid: [],
                                    isHorizontal: function() {
                                        return "horizontal" === v.params.direction
                                    },
                                    isVertical: function() {
                                        return "vertical" === v.params.direction
                                    },
                                    rtl: "rtl" === o.dir.toLowerCase() || "rtl" === w.css("direction"),
                                    rtlTranslate: "horizontal" === v.params.direction && ("rtl" === o.dir.toLowerCase() || "rtl" === w.css("direction")),
                                    wrongRTL: "-webkit-box" === T.css("display"),
                                    activeIndex: 0,
                                    realIndex: 0,
                                    isBeginning: !0,
                                    isEnd: !1,
                                    translate: 0,
                                    previousTranslate: 0,
                                    progress: 0,
                                    velocity: 0,
                                    animating: !1,
                                    allowSlideNext: v.params.allowSlideNext,
                                    allowSlidePrev: v.params.allowSlidePrev,
                                    touchEvents: (C = ["touchstart", "touchmove", "touchend"], x = ["mousedown", "mousemove", "mouseup"], f.pointerEvents ? x = ["pointerdown", "pointermove", "pointerup"] : f.prefixedPointerEvents && (x = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEventsTouch = {
                                        start: C[0],
                                        move: C[1],
                                        end: C[2]
                                    }, v.touchEventsDesktop = {
                                        start: x[0],
                                        move: x[1],
                                        end: x[2]
                                    }, f.touch || !v.params.simulateTouch ? v.touchEventsTouch : v.touchEventsDesktop),
                                    touchEventsData: {
                                        isTouched: void 0,
                                        isMoved: void 0,
                                        allowTouchCallbacks: void 0,
                                        touchStartTime: void 0,
                                        isScrolling: void 0,
                                        currentTranslate: void 0,
                                        startTranslate: void 0,
                                        allowThresholdMove: void 0,
                                        formElements: "input, select, option, textarea, button, video",
                                        lastClickTime: c.now(),
                                        clickTimeout: void 0,
                                        velocities: [],
                                        allowMomentumBounce: void 0,
                                        isTouchEvent: void 0,
                                        startMoving: void 0
                                    },
                                    allowClick: !0,
                                    allowTouchMove: v.params.allowTouchMove,
                                    touches: {
                                        startX: 0,
                                        startY: 0,
                                        currentX: 0,
                                        currentY: 0,
                                        diff: 0
                                    },
                                    imagesToLoad: [],
                                    imagesLoaded: 0
                                }), v.useModules(), v.params.init && v.init(), v
                            }
                        }
                        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                        var n = {
                            extendedDefaults: {
                                configurable: !0
                            },
                            defaults: {
                                configurable: !0
                            },
                            Class: {
                                configurable: !0
                            },
                            $: {
                                configurable: !0
                            }
                        };
                        return t.prototype.slidesPerViewDynamic = function() {
                            var e = this.params,
                                t = this.slides,
                                n = this.slidesGrid,
                                r = this.size,
                                o = this.activeIndex,
                                l = 1;
                            if (e.centeredSlides) {
                                for (var d, h = t[o].swiperSlideSize, i = o + 1; i < t.length; i += 1) t[i] && !d && (l += 1, (h += t[i].swiperSlideSize) > r && (d = !0));
                                for (var c = o - 1; c >= 0; c -= 1) t[c] && !d && (l += 1, (h += t[c].swiperSlideSize) > r && (d = !0))
                            } else
                                for (var f = o + 1; f < t.length; f += 1) n[f] - n[o] < r && (l += 1);
                            return l
                        }, t.prototype.update = function() {
                            var e = this;
                            if (e && !e.destroyed) {
                                var t = e.snapGrid,
                                    n = e.params;
                                n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                            }

                            function r() {
                                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                            }
                        }, t.prototype.changeDirection = function(e, t) {
                            void 0 === t && (t = !0);
                            var n = this.params.direction;
                            return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + n + " wp8-" + n).addClass("" + this.params.containerModifierClass + e), (v.isIE || v.isEdge) && (f.pointerEvents || f.prefixedPointerEvents) && this.$el.addClass(this.params.containerModifierClass + "wp8-" + e), this.params.direction = e, this.slides.each((function(t, n) {
                                "vertical" === e ? n.style.width = "" : n.style.height = ""
                            })), this.emit("changeDirection"), t && this.update()), this
                        }, t.prototype.init = function() {
                            this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                        }, t.prototype.destroy = function(e, t) {
                            void 0 === e && (e = !0), void 0 === t && (t = !0);
                            var n = this,
                                r = n.params,
                                o = n.$el,
                                l = n.$wrapperEl,
                                d = n.slides;
                            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), o.removeAttr("style"), l.removeAttr("style"), d && d.length && d.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((function(e) {
                                n.off(e)
                            })), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), c.deleteProps(n)), n.destroyed = !0), null
                        }, t.extendDefaults = function(e) {
                            c.extend(A, e)
                        }, n.extendedDefaults.get = function() {
                            return A
                        }, n.defaults.get = function() {
                            return $
                        }, n.Class.get = function() {
                            return e
                        }, n.$.get = function() {
                            return r
                        }, Object.defineProperties(t, n), t
                    }(m),
                    D = {
                        name: "device",
                        proto: {
                            device: M
                        },
                        static: {
                            device: M
                        }
                    },
                    H = {
                        name: "support",
                        proto: {
                            support: f
                        },
                        static: {
                            support: f
                        }
                    },
                    N = {
                        name: "browser",
                        proto: {
                            browser: v
                        },
                        static: {
                            browser: v
                        }
                    },
                    j = {
                        name: "resize",
                        create: function() {
                            var e = this;
                            c.extend(e, {
                                resize: {
                                    resizeHandler: function() {
                                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                    },
                                    orientationChangeHandler: function() {
                                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                    }
                                }
                            })
                        },
                        on: {
                            init: function() {
                                t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                            },
                            destroy: function() {
                                t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                            }
                        }
                    },
                    G = {
                        func: t.MutationObserver || t.WebkitMutationObserver,
                        attach: function(e, n) {
                            void 0 === n && (n = {});
                            var r = this,
                                o = new(0, G.func)((function(e) {
                                    if (1 !== e.length) {
                                        var n = function() {
                                            r.emit("observerUpdate", e[0])
                                        };
                                        t.requestAnimationFrame ? t.requestAnimationFrame(n) : t.setTimeout(n, 0)
                                    } else r.emit("observerUpdate", e[0])
                                }));
                            o.observe(e, {
                                attributes: void 0 === n.attributes || n.attributes,
                                childList: void 0 === n.childList || n.childList,
                                characterData: void 0 === n.characterData || n.characterData
                            }), r.observer.observers.push(o)
                        },
                        init: function() {
                            if (f.observer && this.params.observer) {
                                if (this.params.observeParents)
                                    for (var e = this.$el.parents(), i = 0; i < e.length; i += 1) this.observer.attach(e[i]);
                                this.observer.attach(this.$el[0], {
                                    childList: this.params.observeSlideChildren
                                }), this.observer.attach(this.$wrapperEl[0], {
                                    attributes: !1
                                })
                            }
                        },
                        destroy: function() {
                            this.observer.observers.forEach((function(e) {
                                e.disconnect()
                            })), this.observer.observers = []
                        }
                    },
                    V = {
                        name: "observer",
                        params: {
                            observer: !1,
                            observeParents: !1,
                            observeSlideChildren: !1
                        },
                        create: function() {
                            c.extend(this, {
                                observer: {
                                    init: G.init.bind(this),
                                    attach: G.attach.bind(this),
                                    destroy: G.destroy.bind(this),
                                    observers: []
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.observer.init()
                            },
                            destroy: function() {
                                this.observer.destroy()
                            }
                        }
                    },
                    Y = {
                        update: function(e) {
                            var t = this,
                                n = t.params,
                                r = n.slidesPerView,
                                o = n.slidesPerGroup,
                                l = n.centeredSlides,
                                d = t.params.virtual,
                                h = d.addSlidesBefore,
                                f = d.addSlidesAfter,
                                v = t.virtual,
                                m = v.from,
                                w = v.to,
                                y = v.slides,
                                C = v.slidesGrid,
                                x = v.renderSlide,
                                T = v.offset;
                            t.updateActiveIndex();
                            var E, S, P, M = t.activeIndex || 0;
                            E = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", l ? (S = Math.floor(r / 2) + o + h, P = Math.floor(r / 2) + o + f) : (S = r + (o - 1) + h, P = o + f);
                            var k = Math.max((M || 0) - P, 0),
                                I = Math.min((M || 0) + S, y.length - 1),
                                R = (t.slidesGrid[k] || 0) - (t.slidesGrid[0] || 0);

                            function z() {
                                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                            }
                            if (c.extend(t.virtual, {
                                    from: k,
                                    to: I,
                                    offset: R,
                                    slidesGrid: t.slidesGrid
                                }), m === k && w === I && !e) return t.slidesGrid !== C && R !== T && t.slides.css(E, R + "px"), void t.updateProgress();
                            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                                offset: R,
                                from: k,
                                to: I,
                                slides: function() {
                                    for (var e = [], i = k; i <= I; i += 1) e.push(y[i]);
                                    return e
                                }()
                            }), void z();
                            var L = [],
                                $ = [];
                            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                            else
                                for (var i = m; i <= w; i += 1)(i < k || i > I) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + i + '"]').remove();
                            for (var O = 0; O < y.length; O += 1) O >= k && O <= I && (void 0 === w || e ? $.push(O) : (O > w && $.push(O), O < m && L.push(O)));
                            $.forEach((function(e) {
                                t.$wrapperEl.append(x(y[e], e))
                            })), L.sort((function(a, b) {
                                return b - a
                            })).forEach((function(e) {
                                t.$wrapperEl.prepend(x(y[e], e))
                            })), t.$wrapperEl.children(".swiper-slide").css(E, R + "px"), z()
                        },
                        renderSlide: function(e, t) {
                            var n = this.params.virtual;
                            if (n.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                            var o = n.renderSlide ? r(n.renderSlide.call(this, e, t)) : r('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                            return o.attr("data-swiper-slide-index") || o.attr("data-swiper-slide-index", t), n.cache && (this.virtual.cache[t] = o), o
                        },
                        appendSlide: function(e) {
                            if ("object" == typeof e && "length" in e)
                                for (var i = 0; i < e.length; i += 1) e[i] && this.virtual.slides.push(e[i]);
                            else this.virtual.slides.push(e);
                            this.virtual.update(!0)
                        },
                        prependSlide: function(e) {
                            var t = this.activeIndex,
                                n = t + 1,
                                r = 1;
                            if (Array.isArray(e)) {
                                for (var i = 0; i < e.length; i += 1) e[i] && this.virtual.slides.unshift(e[i]);
                                n = t + e.length, r = e.length
                            } else this.virtual.slides.unshift(e);
                            if (this.params.virtual.cache) {
                                var o = this.virtual.cache,
                                    l = {};
                                Object.keys(o).forEach((function(e) {
                                    l[parseInt(e, 10) + r] = o[e]
                                })), this.virtual.cache = l
                            }
                            this.virtual.update(!0), this.slideTo(n, 0)
                        },
                        removeSlide: function(e) {
                            if (null != e) {
                                var t = this.activeIndex;
                                if (Array.isArray(e))
                                    for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                                else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                                this.virtual.update(!0), this.slideTo(t, 0)
                            }
                        },
                        removeAllSlides: function() {
                            this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
                        }
                    },
                    X = {
                        name: "virtual",
                        params: {
                            virtual: {
                                enabled: !1,
                                slides: [],
                                cache: !0,
                                renderSlide: null,
                                renderExternal: null,
                                addSlidesBefore: 0,
                                addSlidesAfter: 0
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                virtual: {
                                    update: Y.update.bind(this),
                                    appendSlide: Y.appendSlide.bind(this),
                                    prependSlide: Y.prependSlide.bind(this),
                                    removeSlide: Y.removeSlide.bind(this),
                                    removeAllSlides: Y.removeAllSlides.bind(this),
                                    renderSlide: Y.renderSlide.bind(this),
                                    slides: this.params.virtual.slides,
                                    cache: {}
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                if (this.params.virtual.enabled) {
                                    this.classNames.push(this.params.containerModifierClass + "virtual");
                                    var e = {
                                        watchSlidesProgress: !0
                                    };
                                    c.extend(this.params, e), c.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                                }
                            },
                            setTranslate: function() {
                                this.params.virtual.enabled && this.virtual.update()
                            }
                        }
                    },
                    _ = {
                        handle: function(n) {
                            var r = this.rtlTranslate,
                                o = n;
                            o.originalEvent && (o = o.originalEvent);
                            var l = o.keyCode || o.charCode;
                            if (!this.allowSlideNext && (this.isHorizontal() && 39 === l || this.isVertical() && 40 === l || 34 === l)) return !1;
                            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === l || this.isVertical() && 38 === l || 33 === l)) return !1;
                            if (!(o.shiftKey || o.altKey || o.ctrlKey || o.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                                if (this.params.keyboard.onlyInViewport && (33 === l || 34 === l || 37 === l || 39 === l || 38 === l || 40 === l)) {
                                    var d = !1;
                                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                                    var h = t.innerWidth,
                                        c = t.innerHeight,
                                        f = this.$el.offset();
                                    r && (f.left -= this.$el[0].scrollLeft);
                                    for (var v = [
                                            [f.left, f.top],
                                            [f.left + this.width, f.top],
                                            [f.left, f.top + this.height],
                                            [f.left + this.width, f.top + this.height]
                                        ], i = 0; i < v.length; i += 1) {
                                        var m = v[i];
                                        m[0] >= 0 && m[0] <= h && m[1] >= 0 && m[1] <= c && (d = !0)
                                    }
                                    if (!d) return
                                }
                                this.isHorizontal() ? (33 !== l && 34 !== l && 37 !== l && 39 !== l || (o.preventDefault ? o.preventDefault() : o.returnValue = !1), (34 !== l && 39 !== l || r) && (33 !== l && 37 !== l || !r) || this.slideNext(), (33 !== l && 37 !== l || r) && (34 !== l && 39 !== l || !r) || this.slidePrev()) : (33 !== l && 34 !== l && 38 !== l && 40 !== l || (o.preventDefault ? o.preventDefault() : o.returnValue = !1), 34 !== l && 40 !== l || this.slideNext(), 33 !== l && 38 !== l || this.slidePrev()), this.emit("keyPress", l)
                            }
                        },
                        enable: function() {
                            this.keyboard.enabled || (r(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                        },
                        disable: function() {
                            this.keyboard.enabled && (r(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                        }
                    },
                    F = {
                        name: "keyboard",
                        params: {
                            keyboard: {
                                enabled: !1,
                                onlyInViewport: !0
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                keyboard: {
                                    enabled: !1,
                                    enable: _.enable.bind(this),
                                    disable: _.disable.bind(this),
                                    handle: _.handle.bind(this)
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.params.keyboard.enabled && this.keyboard.enable()
                            },
                            destroy: function() {
                                this.keyboard.enabled && this.keyboard.disable()
                            }
                        }
                    },
                    W = {
                        lastScrollTime: c.now(),
                        event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                            var t = "onwheel" in e;
                            if (!t) {
                                var element = e.createElement("div");
                                element.setAttribute("onwheel", "return;"), t = "function" == typeof element.onwheel
                            }
                            return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                        }() ? "wheel" : "mousewheel",
                        normalize: function(e) {
                            var t = 0,
                                n = 0,
                                r = 0,
                                o = 0;
                            return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, o = 10 * n, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, o *= 40) : (r *= 800, o *= 800)), r && !t && (t = r < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: n,
                                pixelX: r,
                                pixelY: o
                            }
                        },
                        handleMouseEnter: function() {
                            this.mouseEntered = !0
                        },
                        handleMouseLeave: function() {
                            this.mouseEntered = !1
                        },
                        handle: function(e) {
                            var n = e,
                                r = this,
                                o = r.params.mousewheel;
                            if (!r.mouseEntered && !o.releaseOnEdges) return !0;
                            n.originalEvent && (n = n.originalEvent);
                            var l = 0,
                                d = r.rtlTranslate ? -1 : 1,
                                data = W.normalize(n);
                            if (o.forceToAxis)
                                if (r.isHorizontal()) {
                                    if (!(Math.abs(data.pixelX) > Math.abs(data.pixelY))) return !0;
                                    l = data.pixelX * d
                                } else {
                                    if (!(Math.abs(data.pixelY) > Math.abs(data.pixelX))) return !0;
                                    l = data.pixelY
                                }
                            else l = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * d : -data.pixelY;
                            if (0 === l) return !0;
                            if (o.invert && (l = -l), r.params.freeMode) {
                                r.params.loop && r.loopFix();
                                var h = r.getTranslate() + l * o.sensitivity,
                                    f = r.isBeginning,
                                    v = r.isEnd;
                                if (h >= r.minTranslate() && (h = r.minTranslate()), h <= r.maxTranslate() && (h = r.maxTranslate()), r.setTransition(0), r.setTranslate(h), r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses(), (!f && r.isBeginning || !v && r.isEnd) && r.updateSlidesClasses(), r.params.freeModeSticky && (clearTimeout(r.mousewheel.timeout), r.mousewheel.timeout = c.nextTick((function() {
                                        r.slideToClosest()
                                    }), 300)), r.emit("scroll", n), r.params.autoplay && r.params.autoplayDisableOnInteraction && r.autoplay.stop(), h === r.minTranslate() || h === r.maxTranslate()) return !0
                            } else {
                                if (c.now() - r.mousewheel.lastScrollTime > 60)
                                    if (l < 0)
                                        if (r.isEnd && !r.params.loop || r.animating) {
                                            if (o.releaseOnEdges) return !0
                                        } else r.slideNext(), r.emit("scroll", n);
                                else if (r.isBeginning && !r.params.loop || r.animating) {
                                    if (o.releaseOnEdges) return !0
                                } else r.slidePrev(), r.emit("scroll", n);
                                r.mousewheel.lastScrollTime = (new t.Date).getTime()
                            }
                            return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
                        },
                        enable: function() {
                            if (!W.event) return !1;
                            if (this.mousewheel.enabled) return !1;
                            var e = this.$el;
                            return "container" !== this.params.mousewheel.eventsTarged && (e = r(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(W.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
                        },
                        disable: function() {
                            if (!W.event) return !1;
                            if (!this.mousewheel.enabled) return !1;
                            var e = this.$el;
                            return "container" !== this.params.mousewheel.eventsTarged && (e = r(this.params.mousewheel.eventsTarged)), e.off(W.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
                        }
                    },
                    U = {
                        update: function() {
                            var e = this.params.navigation;
                            if (!this.params.loop) {
                                var t = this.navigation,
                                    n = t.$nextEl,
                                    r = t.$prevEl;
                                r && r.length > 0 && (this.isBeginning ? r.addClass(e.disabledClass) : r.removeClass(e.disabledClass), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), n && n.length > 0 && (this.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                            }
                        },
                        onPrevClick: function(e) {
                            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
                        },
                        onNextClick: function(e) {
                            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
                        },
                        init: function() {
                            var e, t, n = this.params.navigation;
                            (n.nextEl || n.prevEl) && (n.nextEl && (e = r(n.nextEl), this.params.uniqueNavElements && "string" == typeof n.nextEl && e.length > 1 && 1 === this.$el.find(n.nextEl).length && (e = this.$el.find(n.nextEl))), n.prevEl && (t = r(n.prevEl), this.params.uniqueNavElements && "string" == typeof n.prevEl && t.length > 1 && 1 === this.$el.find(n.prevEl).length && (t = this.$el.find(n.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), c.extend(this.navigation, {
                                $nextEl: e,
                                nextEl: e && e[0],
                                $prevEl: t,
                                prevEl: t && t[0]
                            }))
                        },
                        destroy: function() {
                            var e = this.navigation,
                                t = e.$nextEl,
                                n = e.$prevEl;
                            t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), n && n.length && (n.off("click", this.navigation.onPrevClick), n.removeClass(this.params.navigation.disabledClass))
                        }
                    },
                    K = {
                        update: function() {
                            var e = this.rtl,
                                t = this.params.pagination;
                            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                                var n, o = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                                    l = this.pagination.$el,
                                    d = this.params.loop ? Math.ceil((o - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                                if (this.params.loop ? ((n = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > o - 1 - 2 * this.loopedSlides && (n -= o - 2 * this.loopedSlides), n > d - 1 && (n -= d), n < 0 && "bullets" !== this.params.paginationType && (n = d + n)) : n = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                                    var h, c, f, v = this.pagination.bullets;
                                    if (t.dynamicBullets && (this.pagination.bulletSize = v.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), l.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += n - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), h = n - this.pagination.dynamicBulletIndex, f = ((c = h + (Math.min(v.length, t.dynamicMainBullets) - 1)) + h) / 2), v.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), l.length > 1) v.each((function(e, o) {
                                        var l = r(o),
                                            d = l.index();
                                        d === n && l.addClass(t.bulletActiveClass), t.dynamicBullets && (d >= h && d <= c && l.addClass(t.bulletActiveClass + "-main"), d === h && l.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), d === c && l.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                                    }));
                                    else if (v.eq(n).addClass(t.bulletActiveClass), t.dynamicBullets) {
                                        for (var m = v.eq(h), w = v.eq(c), i = h; i <= c; i += 1) v.eq(i).addClass(t.bulletActiveClass + "-main");
                                        m.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), w.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                                    }
                                    if (t.dynamicBullets) {
                                        var y = Math.min(v.length, t.dynamicMainBullets + 4),
                                            C = (this.pagination.bulletSize * y - this.pagination.bulletSize) / 2 - f * this.pagination.bulletSize,
                                            x = e ? "right" : "left";
                                        v.css(this.isHorizontal() ? x : "top", C + "px")
                                    }
                                }
                                if ("fraction" === t.type && (l.find("." + t.currentClass).text(t.formatFractionCurrent(n + 1)), l.find("." + t.totalClass).text(t.formatFractionTotal(d))), "progressbar" === t.type) {
                                    var T;
                                    T = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                                    var E = (n + 1) / d,
                                        S = 1,
                                        P = 1;
                                    "horizontal" === T ? S = E : P = E, l.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + S + ") scaleY(" + P + ")").transition(this.params.speed)
                                }
                                "custom" === t.type && t.renderCustom ? (l.html(t.renderCustom(this, n + 1, d)), this.emit("paginationRender", this, l[0])) : this.emit("paginationUpdate", this, l[0]), l[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                            }
                        },
                        render: function() {
                            var e = this.params.pagination;
                            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                                    n = this.pagination.$el,
                                    r = "";
                                if ("bullets" === e.type) {
                                    for (var o = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, i = 0; i < o; i += 1) e.renderBullet ? r += e.renderBullet.call(this, i, e.bulletClass) : r += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                                    n.html(r), this.pagination.bullets = n.find("." + e.bulletClass)
                                }
                                "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', n.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', n.html(r)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                            }
                        },
                        init: function() {
                            var e = this,
                                t = e.params.pagination;
                            if (t.el) {
                                var n = r(t.el);
                                0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && 1 === e.$el.find(t.el).length && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", "." + t.bulletClass, (function(t) {
                                    t.preventDefault();
                                    var n = r(this).index() * e.params.slidesPerGroup;
                                    e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                                })), c.extend(e.pagination, {
                                    $el: n,
                                    el: n[0]
                                }))
                            }
                        },
                        destroy: function() {
                            var e = this.params.pagination;
                            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                                var t = this.pagination.$el;
                                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                            }
                        }
                    },
                    Z = {
                        setTranslate: function() {
                            if (this.params.scrollbar.el && this.scrollbar.el) {
                                var e = this.scrollbar,
                                    t = this.rtlTranslate,
                                    progress = this.progress,
                                    n = e.dragSize,
                                    r = e.trackSize,
                                    o = e.$dragEl,
                                    l = e.$el,
                                    d = this.params.scrollbar,
                                    h = n,
                                    c = (r - n) * progress;
                                t ? (c = -c) > 0 ? (h = n - c, c = 0) : -c + n > r && (h = r + c) : c < 0 ? (h = n + c, c = 0) : c + n > r && (h = r - c), this.isHorizontal() ? (f.transforms3d ? o.transform("translate3d(" + c + "px, 0, 0)") : o.transform("translateX(" + c + "px)"), o[0].style.width = h + "px") : (f.transforms3d ? o.transform("translate3d(0px, " + c + "px, 0)") : o.transform("translateY(" + c + "px)"), o[0].style.height = h + "px"), d.hide && (clearTimeout(this.scrollbar.timeout), l[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function() {
                                    l[0].style.opacity = 0, l.transition(400)
                                }), 1e3))
                            }
                        },
                        setTransition: function(e) {
                            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                        },
                        updateSize: function() {
                            if (this.params.scrollbar.el && this.scrollbar.el) {
                                var e = this.scrollbar,
                                    t = e.$dragEl,
                                    n = e.$el;
                                t[0].style.width = "", t[0].style.height = "";
                                var r, o = this.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                                    l = this.size / this.virtualSize,
                                    d = l * (o / this.size);
                                r = "auto" === this.params.scrollbar.dragSize ? o * l : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = r + "px" : t[0].style.height = r + "px", n[0].style.display = l >= 1 ? "none" : "", this.params.scrollbar.hide && (n[0].style.opacity = 0), c.extend(e, {
                                    trackSize: o,
                                    divider: l,
                                    moveDivider: d,
                                    dragSize: r
                                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                            }
                        },
                        getPointerPosition: function(e) {
                            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                        },
                        setDragPosition: function(e) {
                            var t, n = this.scrollbar,
                                r = this.rtlTranslate,
                                o = n.$el,
                                l = n.dragSize,
                                d = n.trackSize,
                                h = n.dragStartPos;
                            t = (n.getPointerPosition(e) - o.offset()[this.isHorizontal() ? "left" : "top"] - (null !== h ? h : l / 2)) / (d - l), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
                            var c = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                            this.updateProgress(c), this.setTranslate(c), this.updateActiveIndex(), this.updateSlidesClasses()
                        },
                        onDragStart: function(e) {
                            var t = this.params.scrollbar,
                                n = this.scrollbar,
                                r = this.$wrapperEl,
                                o = n.$el,
                                l = n.$dragEl;
                            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === l[0] || e.target === l ? n.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.transition(100), l.transition(100), n.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), o.transition(0), t.hide && o.css("opacity", 1), this.emit("scrollbarDragStart", e)
                        },
                        onDragMove: function(e) {
                            var t = this.scrollbar,
                                n = this.$wrapperEl,
                                r = t.$el,
                                o = t.$dragEl;
                            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), r.transition(0), o.transition(0), this.emit("scrollbarDragMove", e))
                        },
                        onDragEnd: function(e) {
                            var t = this.params.scrollbar,
                                n = this.scrollbar.$el;
                            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = c.nextTick((function() {
                                n.css("opacity", 0), n.transition(400)
                            }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
                        },
                        enableDraggable: function() {
                            if (this.params.scrollbar.el) {
                                var t = this.scrollbar,
                                    n = this.touchEventsTouch,
                                    r = this.touchEventsDesktop,
                                    o = this.params,
                                    l = t.$el[0],
                                    d = !(!f.passiveListener || !o.passiveListeners) && {
                                        passive: !1,
                                        capture: !1
                                    },
                                    h = !(!f.passiveListener || !o.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                f.touch ? (l.addEventListener(n.start, this.scrollbar.onDragStart, d), l.addEventListener(n.move, this.scrollbar.onDragMove, d), l.addEventListener(n.end, this.scrollbar.onDragEnd, h)) : (l.addEventListener(r.start, this.scrollbar.onDragStart, d), e.addEventListener(r.move, this.scrollbar.onDragMove, d), e.addEventListener(r.end, this.scrollbar.onDragEnd, h))
                            }
                        },
                        disableDraggable: function() {
                            if (this.params.scrollbar.el) {
                                var t = this.scrollbar,
                                    n = this.touchEventsTouch,
                                    r = this.touchEventsDesktop,
                                    o = this.params,
                                    l = t.$el[0],
                                    d = !(!f.passiveListener || !o.passiveListeners) && {
                                        passive: !1,
                                        capture: !1
                                    },
                                    h = !(!f.passiveListener || !o.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                f.touch ? (l.removeEventListener(n.start, this.scrollbar.onDragStart, d), l.removeEventListener(n.move, this.scrollbar.onDragMove, d), l.removeEventListener(n.end, this.scrollbar.onDragEnd, h)) : (l.removeEventListener(r.start, this.scrollbar.onDragStart, d), e.removeEventListener(r.move, this.scrollbar.onDragMove, d), e.removeEventListener(r.end, this.scrollbar.onDragEnd, h))
                            }
                        },
                        init: function() {
                            if (this.params.scrollbar.el) {
                                var e = this.scrollbar,
                                    t = this.$el,
                                    n = this.params.scrollbar,
                                    o = r(n.el);
                                this.params.uniqueNavElements && "string" == typeof n.el && o.length > 1 && 1 === t.find(n.el).length && (o = t.find(n.el));
                                var l = o.find("." + this.params.scrollbar.dragClass);
                                0 === l.length && (l = r('<div class="' + this.params.scrollbar.dragClass + '"></div>'), o.append(l)), c.extend(e, {
                                    $el: o,
                                    el: o[0],
                                    $dragEl: l,
                                    dragEl: l[0]
                                }), n.draggable && e.enableDraggable()
                            }
                        },
                        destroy: function() {
                            this.scrollbar.disableDraggable()
                        }
                    },
                    J = {
                        setTransform: function(e, progress) {
                            var t = this.rtl,
                                n = r(e),
                                o = t ? -1 : 1,
                                p = n.attr("data-swiper-parallax") || "0",
                                l = n.attr("data-swiper-parallax-x"),
                                d = n.attr("data-swiper-parallax-y"),
                                h = n.attr("data-swiper-parallax-scale"),
                                c = n.attr("data-swiper-parallax-opacity");
                            if (l || d ? (l = l || "0", d = d || "0") : this.isHorizontal() ? (l = p, d = "0") : (d = p, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * progress * o + "%" : l * progress * o + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * progress + "%" : d * progress + "px", null != c) {
                                var f = c - (c - 1) * (1 - Math.abs(progress));
                                n[0].style.opacity = f
                            }
                            if (null == h) n.transform("translate3d(" + l + ", " + d + ", 0px)");
                            else {
                                var v = h - (h - 1) * (1 - Math.abs(progress));
                                n.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + v + ")")
                            }
                        },
                        setTranslate: function() {
                            var e = this,
                                t = e.$el,
                                n = e.slides,
                                progress = e.progress,
                                o = e.snapGrid;
                            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, n) {
                                e.parallax.setTransform(n, progress)
                            })), n.each((function(t, n) {
                                var l = n.progress;
                                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (l += Math.ceil(t / 2) - progress * (o.length - 1)), l = Math.min(Math.max(l, -1), 1), r(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, n) {
                                    e.parallax.setTransform(n, l)
                                }))
                            }))
                        },
                        setTransition: function(e) {
                            void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, n) {
                                var o = r(n),
                                    l = parseInt(o.attr("data-swiper-parallax-duration"), 10) || e;
                                0 === e && (l = 0), o.transition(l)
                            }))
                        }
                    },
                    Q = {
                        getDistanceBetweenTouches: function(e) {
                            if (e.targetTouches.length < 2) return 1;
                            var t = e.targetTouches[0].pageX,
                                n = e.targetTouches[0].pageY,
                                r = e.targetTouches[1].pageX,
                                o = e.targetTouches[1].pageY;
                            return Math.sqrt(Math.pow(r - t, 2) + Math.pow(o - n, 2))
                        },
                        onGestureStart: function(e) {
                            var t = this.params.zoom,
                                n = this.zoom,
                                o = n.gesture;
                            if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !f.gestures) {
                                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                                n.fakeGestureTouched = !0, o.scaleStart = Q.getDistanceBetweenTouches(e)
                            }
                            o.$slideEl && o.$slideEl.length || (o.$slideEl = r(e.target).closest(".swiper-slide"), 0 === o.$slideEl.length && (o.$slideEl = this.slides.eq(this.activeIndex)), o.$imageEl = o.$slideEl.find("img, svg, canvas"), o.$imageWrapEl = o.$imageEl.parent("." + t.containerClass), o.maxRatio = o.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== o.$imageWrapEl.length) ? (o.$imageEl.transition(0), this.zoom.isScaling = !0) : o.$imageEl = void 0
                        },
                        onGestureChange: function(e) {
                            var t = this.params.zoom,
                                n = this.zoom,
                                r = n.gesture;
                            if (!f.gestures) {
                                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                n.fakeGestureMoved = !0, r.scaleMove = Q.getDistanceBetweenTouches(e)
                            }
                            r.$imageEl && 0 !== r.$imageEl.length && (n.scale = f.gestures ? e.scale * n.currentScale : r.scaleMove / r.scaleStart * n.currentScale, n.scale > r.maxRatio && (n.scale = r.maxRatio - 1 + Math.pow(n.scale - r.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                        },
                        onGestureEnd: function(e) {
                            var t = this.params.zoom,
                                n = this.zoom,
                                r = n.gesture;
                            if (!f.gestures) {
                                if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !M.android) return;
                                n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                            }
                            r.$imageEl && 0 !== r.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, r.maxRatio), t.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (r.$slideEl = void 0))
                        },
                        onTouchStart: function(e) {
                            var t = this.zoom,
                                n = t.gesture,
                                image = t.image;
                            n.$imageEl && 0 !== n.$imageEl.length && (image.isTouched || (M.android && e.preventDefault(), image.isTouched = !0, image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                        },
                        onTouchMove: function(e) {
                            var t = this.zoom,
                                n = t.gesture,
                                image = t.image,
                                r = t.velocity;
                            if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1, image.isTouched && n.$slideEl)) {
                                image.isMoved || (image.width = n.$imageEl[0].offsetWidth, image.height = n.$imageEl[0].offsetHeight, image.startX = c.getTranslate(n.$imageWrapEl[0], "x") || 0, image.startY = c.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), this.rtl && (image.startX = -image.startX, image.startY = -image.startY));
                                var o = image.width * t.scale,
                                    l = image.height * t.scale;
                                if (!(o < n.slideWidth && l < n.slideHeight)) {
                                    if (image.minX = Math.min(n.slideWidth / 2 - o / 2, 0), image.maxX = -image.minX, image.minY = Math.min(n.slideHeight / 2 - l / 2, 0), image.maxY = -image.minY, image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !image.isMoved && !t.isScaling) {
                                        if (this.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) return void(image.isTouched = !1);
                                        if (!this.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) return void(image.isTouched = !1)
                                    }
                                    e.preventDefault(), e.stopPropagation(), image.isMoved = !0, image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX, image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY, image.currentX < image.minX && (image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, .8)), image.currentX > image.maxX && (image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, .8)), image.currentY < image.minY && (image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, .8)), image.currentY > image.maxY && (image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = image.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = image.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (image.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (image.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(image.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(image.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = image.touchesCurrent.x, r.prevPositionY = image.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)")
                                }
                            }
                        },
                        onTouchEnd: function() {
                            var e = this.zoom,
                                t = e.gesture,
                                image = e.image,
                                n = e.velocity;
                            if (t.$imageEl && 0 !== t.$imageEl.length) {
                                if (!image.isTouched || !image.isMoved) return image.isTouched = !1, void(image.isMoved = !1);
                                image.isTouched = !1, image.isMoved = !1;
                                var r = 300,
                                    o = 300,
                                    l = n.x * r,
                                    d = image.currentX + l,
                                    h = n.y * o,
                                    c = image.currentY + h;
                                0 !== n.x && (r = Math.abs((d - image.currentX) / n.x)), 0 !== n.y && (o = Math.abs((c - image.currentY) / n.y));
                                var f = Math.max(r, o);
                                image.currentX = d, image.currentY = c;
                                var v = image.width * e.scale,
                                    m = image.height * e.scale;
                                image.minX = Math.min(t.slideWidth / 2 - v / 2, 0), image.maxX = -image.minX, image.minY = Math.min(t.slideHeight / 2 - m / 2, 0), image.maxY = -image.minY, image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX), image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY), t.$imageWrapEl.transition(f).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)")
                            }
                        },
                        onTransitionEnd: function() {
                            var e = this.zoom,
                                t = e.gesture;
                            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
                        },
                        toggle: function(e) {
                            var t = this.zoom;
                            t.scale && 1 !== t.scale ? t.out() : t.in(e)
                        },
                        in: function(e) {
                            var t, n, o, l, d, h, c, f, v, m, w, y, C, x, T, E, S = this.zoom,
                                P = this.params.zoom,
                                M = S.gesture,
                                image = S.image;
                            M.$slideEl || (M.$slideEl = this.clickedSlide ? r(this.clickedSlide) : this.slides.eq(this.activeIndex), M.$imageEl = M.$slideEl.find("img, svg, canvas"), M.$imageWrapEl = M.$imageEl.parent("." + P.containerClass)), M.$imageEl && 0 !== M.$imageEl.length && (M.$slideEl.addClass("" + P.zoomedSlideClass), void 0 === image.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = image.touchesStart.x, n = image.touchesStart.y), S.scale = M.$imageWrapEl.attr("data-swiper-zoom") || P.maxRatio, S.currentScale = M.$imageWrapEl.attr("data-swiper-zoom") || P.maxRatio, e ? (T = M.$slideEl[0].offsetWidth, E = M.$slideEl[0].offsetHeight, o = M.$slideEl.offset().left + T / 2 - t, l = M.$slideEl.offset().top + E / 2 - n, c = M.$imageEl[0].offsetWidth, f = M.$imageEl[0].offsetHeight, v = c * S.scale, m = f * S.scale, C = -(w = Math.min(T / 2 - v / 2, 0)), x = -(y = Math.min(E / 2 - m / 2, 0)), (d = o * S.scale) < w && (d = w), d > C && (d = C), (h = l * S.scale) < y && (h = y), h > x && (h = x)) : (d = 0, h = 0), M.$imageWrapEl.transition(300).transform("translate3d(" + d + "px, " + h + "px,0)"), M.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + S.scale + ")"))
                        },
                        out: function() {
                            var e = this.zoom,
                                t = this.params.zoom,
                                n = e.gesture;
                            n.$slideEl || (n.$slideEl = this.clickedSlide ? r(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (e.scale = 1, e.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + t.zoomedSlideClass), n.$slideEl = void 0)
                        },
                        enable: function() {
                            var e = this.zoom;
                            if (!e.enabled) {
                                e.enabled = !0;
                                var t = !("touchstart" !== this.touchEvents.start || !f.passiveListener || !this.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                f.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                            }
                        },
                        disable: function() {
                            var e = this.zoom;
                            if (e.enabled) {
                                this.zoom.enabled = !1;
                                var t = !("touchstart" !== this.touchEvents.start || !f.passiveListener || !this.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                f.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                            }
                        }
                    },
                    ee = {
                        loadInSlide: function(e, t) {
                            void 0 === t && (t = !0);
                            var n = this,
                                o = n.params.lazy;
                            if (void 0 !== e && 0 !== n.slides.length) {
                                var l = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
                                    d = l.find("." + o.elementClass + ":not(." + o.loadedClass + "):not(." + o.loadingClass + ")");
                                !l.hasClass(o.elementClass) || l.hasClass(o.loadedClass) || l.hasClass(o.loadingClass) || (d = d.add(l[0])), 0 !== d.length && d.each((function(e, d) {
                                    var h = r(d);
                                    h.addClass(o.loadingClass);
                                    var c = h.attr("data-background"),
                                        f = h.attr("data-src"),
                                        v = h.attr("data-srcset"),
                                        m = h.attr("data-sizes");
                                    n.loadImage(h[0], f || c, v, m, !1, (function() {
                                        if (null != n && n && (!n || n.params) && !n.destroyed) {
                                            if (c ? (h.css("background-image", 'url("' + c + '")'), h.removeAttr("data-background")) : (v && (h.attr("srcset", v), h.removeAttr("data-srcset")), m && (h.attr("sizes", m), h.removeAttr("data-sizes")), f && (h.attr("src", f), h.removeAttr("data-src"))), h.addClass(o.loadedClass).removeClass(o.loadingClass), l.find("." + o.preloaderClass).remove(), n.params.loop && t) {
                                                var e = l.attr("data-swiper-slide-index");
                                                if (l.hasClass(n.params.slideDuplicateClass)) {
                                                    var r = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                                    n.lazy.loadInSlide(r.index(), !1)
                                                } else {
                                                    var d = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    n.lazy.loadInSlide(d.index(), !1)
                                                }
                                            }
                                            n.emit("lazyImageReady", l[0], h[0])
                                        }
                                    })), n.emit("lazyImageLoad", l[0], h[0])
                                }))
                            }
                        },
                        load: function() {
                            var e = this,
                                t = e.$wrapperEl,
                                n = e.params,
                                o = e.slides,
                                l = e.activeIndex,
                                d = e.virtual && n.virtual.enabled,
                                h = n.lazy,
                                c = n.slidesPerView;

                            function f(e) {
                                if (d) {
                                    if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                                } else if (o[e]) return !0;
                                return !1
                            }

                            function v(e) {
                                return d ? r(e).attr("data-swiper-slide-index") : r(e).index()
                            }
                            if ("auto" === c && (c = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each((function(t, n) {
                                var o = d ? r(n).attr("data-swiper-slide-index") : r(n).index();
                                e.lazy.loadInSlide(o)
                            }));
                            else if (c > 1)
                                for (var i = l; i < l + c; i += 1) f(i) && e.lazy.loadInSlide(i);
                            else e.lazy.loadInSlide(l);
                            if (h.loadPrevNext)
                                if (c > 1 || h.loadPrevNextAmount && h.loadPrevNextAmount > 1) {
                                    for (var m = h.loadPrevNextAmount, w = c, y = Math.min(l + w + Math.max(m, w), o.length), C = Math.max(l - Math.max(w, m), 0), x = l + c; x < y; x += 1) f(x) && e.lazy.loadInSlide(x);
                                    for (var T = C; T < l; T += 1) f(T) && e.lazy.loadInSlide(T)
                                } else {
                                    var E = t.children("." + n.slideNextClass);
                                    E.length > 0 && e.lazy.loadInSlide(v(E));
                                    var S = t.children("." + n.slidePrevClass);
                                    S.length > 0 && e.lazy.loadInSlide(v(S))
                                }
                        }
                    },
                    te = {
                        LinearSpline: function(e, t) {
                            var n, r, o, l, d, h = function(e, t) {
                                for (r = -1, n = e.length; n - r > 1;) e[o = n + r >> 1] <= t ? r = o : n = o;
                                return n
                            };
                            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                                return e ? (d = h(this.x, e), l = d - 1, (e - this.x[l]) * (this.y[d] - this.y[l]) / (this.x[d] - this.x[l]) + this.y[l]) : 0
                            }, this
                        },
                        getInterpolateFunction: function(e) {
                            this.controller.spline || (this.controller.spline = this.params.loop ? new te.LinearSpline(this.slidesGrid, e.slidesGrid) : new te.LinearSpline(this.snapGrid, e.snapGrid))
                        },
                        setTranslate: function(e, t) {
                            var n, r, o = this,
                                l = o.controller.control;

                            function d(e) {
                                var t = o.rtlTranslate ? -o.translate : o.translate;
                                "slide" === o.params.controller.by && (o.controller.getInterpolateFunction(e), r = -o.controller.spline.interpolate(-t)), r && "container" !== o.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()), r = (t - o.minTranslate()) * n + e.minTranslate()), o.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, o), e.updateActiveIndex(), e.updateSlidesClasses()
                            }
                            if (Array.isArray(l))
                                for (var i = 0; i < l.length; i += 1) l[i] !== t && l[i] instanceof B && d(l[i]);
                            else l instanceof B && t !== l && d(l)
                        },
                        setTransition: function(e, t) {
                            var i, n = this,
                                r = n.controller.control;

                            function o(t) {
                                t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && c.nextTick((function() {
                                    t.updateAutoHeight()
                                })), t.$wrapperEl.transitionEnd((function() {
                                    r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                                })))
                            }
                            if (Array.isArray(r))
                                for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof B && o(r[i]);
                            else r instanceof B && t !== r && o(r)
                        }
                    },
                    ie = {
                        name: "controller",
                        params: {
                            controller: {
                                control: void 0,
                                inverse: !1,
                                by: "slide"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                controller: {
                                    control: this.params.controller.control,
                                    getInterpolateFunction: te.getInterpolateFunction.bind(this),
                                    setTranslate: te.setTranslate.bind(this),
                                    setTransition: te.setTransition.bind(this)
                                }
                            })
                        },
                        on: {
                            update: function() {
                                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                            },
                            resize: function() {
                                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                            },
                            observerUpdate: function() {
                                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                            },
                            setTranslate: function(e, t) {
                                this.controller.control && this.controller.setTranslate(e, t)
                            },
                            setTransition: function(e, t) {
                                this.controller.control && this.controller.setTransition(e, t)
                            }
                        }
                    },
                    se = {
                        makeElFocusable: function(e) {
                            return e.attr("tabIndex", "0"), e
                        },
                        addElRole: function(e, t) {
                            return e.attr("role", t), e
                        },
                        addElLabel: function(e, label) {
                            return e.attr("aria-label", label), e
                        },
                        disableEl: function(e) {
                            return e.attr("aria-disabled", !0), e
                        },
                        enableEl: function(e) {
                            return e.attr("aria-disabled", !1), e
                        },
                        onEnterKey: function(e) {
                            var t = this.params.a11y;
                            if (13 === e.keyCode) {
                                var n = r(e.target);
                                this.navigation && this.navigation.$nextEl && n.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && n.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && n.is("." + this.params.pagination.bulletClass) && n[0].click()
                            }
                        },
                        notify: function(e) {
                            var t = this.a11y.liveRegion;
                            0 !== t.length && (t.html(""), t.html(e))
                        },
                        updateNavigation: function() {
                            if (!this.params.loop) {
                                var e = this.navigation,
                                    t = e.$nextEl,
                                    n = e.$prevEl;
                                n && n.length > 0 && (this.isBeginning ? this.a11y.disableEl(n) : this.a11y.enableEl(n)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                            }
                        },
                        updatePagination: function() {
                            var e = this,
                                t = e.params.a11y;
                            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(n, o) {
                                var l = r(o);
                                e.a11y.makeElFocusable(l), e.a11y.addElRole(l, "button"), e.a11y.addElLabel(l, t.paginationBulletMessage.replace(/{{index}}/, l.index() + 1))
                            }))
                        },
                        init: function() {
                            this.$el.append(this.a11y.liveRegion);
                            var e, t, n = this.params.a11y;
                            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, n.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, n.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                        },
                        destroy: function() {
                            var e, t;
                            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                        }
                    },
                    ae = {
                        init: function() {
                            if (this.params.history) {
                                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                                var e = this.history;
                                e.initialized = !0, e.paths = ae.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                            }
                        },
                        destroy: function() {
                            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
                        },
                        setHistoryPopState: function() {
                            this.history.paths = ae.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                        },
                        getPathValues: function() {
                            var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                                    return "" !== e
                                })),
                                n = e.length;
                            return {
                                key: e[n - 2],
                                value: e[n - 1]
                            }
                        },
                        setHistory: function(e, n) {
                            if (this.history.initialized && this.params.history.enabled) {
                                var r = this.slides.eq(n),
                                    o = ae.slugify(r.attr("data-history"));
                                t.location.pathname.includes(e) || (o = e + "/" + o);
                                var l = t.history.state;
                                l && l.value === o || (this.params.history.replaceState ? t.history.replaceState({
                                    value: o
                                }, null, o) : t.history.pushState({
                                    value: o
                                }, null, o))
                            }
                        },
                        slugify: function(text) {
                            return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        },
                        scrollToSlide: function(e, t, n) {
                            if (t)
                                for (var i = 0, r = this.slides.length; i < r; i += 1) {
                                    var o = this.slides.eq(i);
                                    if (ae.slugify(o.attr("data-history")) === t && !o.hasClass(this.params.slideDuplicateClass)) {
                                        var l = o.index();
                                        this.slideTo(l, e, n)
                                    }
                                } else this.slideTo(0, e, n)
                        }
                    },
                    ne = {
                        onHashCange: function() {
                            var t = e.location.hash.replace("#", "");
                            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                                var n = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                                if (void 0 === n) return;
                                this.slideTo(n)
                            }
                        },
                        setHash: function() {
                            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                                if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || !1);
                                else {
                                    var n = this.slides.eq(this.activeIndex),
                                        r = n.attr("data-hash") || n.attr("data-history");
                                    e.location.hash = r || ""
                                }
                        },
                        init: function() {
                            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                                this.hashNavigation.initialized = !0;
                                var n = e.location.hash.replace("#", "");
                                if (n)
                                    for (var i = 0, o = this.slides.length; i < o; i += 1) {
                                        var l = this.slides.eq(i);
                                        if ((l.attr("data-hash") || l.attr("data-history")) === n && !l.hasClass(this.params.slideDuplicateClass)) {
                                            var d = l.index();
                                            this.slideTo(d, 0, this.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                this.params.hashNavigation.watchState && r(t).on("hashchange", this.hashNavigation.onHashCange)
                            }
                        },
                        destroy: function() {
                            this.params.hashNavigation.watchState && r(t).off("hashchange", this.hashNavigation.onHashCange)
                        }
                    },
                    re = {
                        run: function() {
                            var e = this,
                                t = e.slides.eq(e.activeIndex),
                                n = e.params.autoplay.delay;
                            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = c.nextTick((function() {
                                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                            }), n)
                        },
                        start: function() {
                            return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                        },
                        stop: function() {
                            return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                        },
                        pause: function(e) {
                            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                        }
                    },
                    oe = {
                        setTranslate: function() {
                            for (var e = this.slides, i = 0; i < e.length; i += 1) {
                                var t = this.slides.eq(i),
                                    n = -t[0].swiperSlideOffset;
                                this.params.virtualTranslate || (n -= this.translate);
                                var r = 0;
                                this.isHorizontal() || (r = n, n = 0);
                                var o = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({
                                    opacity: o
                                }).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            var t = this,
                                n = t.slides,
                                r = t.$wrapperEl;
                            if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                                var o = !1;
                                n.transitionEnd((function() {
                                    if (!o && t && !t.destroyed) {
                                        o = !0, t.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                                    }
                                }))
                            }
                        }
                    },
                    le = {
                        setTranslate: function() {
                            var e, t = this.$el,
                                n = this.$wrapperEl,
                                o = this.slides,
                                l = this.width,
                                d = this.height,
                                h = this.rtlTranslate,
                                c = this.size,
                                f = this.params.cubeEffect,
                                m = this.isHorizontal(),
                                w = this.virtual && this.params.virtual.enabled,
                                y = 0;
                            f.shadow && (m ? (0 === (e = n.find(".swiper-cube-shadow")).length && (e = r('<div class="swiper-cube-shadow"></div>'), n.append(e)), e.css({
                                height: l + "px"
                            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = r('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                            for (var i = 0; i < o.length; i += 1) {
                                var C = o.eq(i),
                                    x = i;
                                w && (x = parseInt(C.attr("data-swiper-slide-index"), 10));
                                var T = 90 * x,
                                    E = Math.floor(T / 360);
                                h && (T = -T, E = Math.floor(-T / 360));
                                var progress = Math.max(Math.min(C[0].progress, 1), -1),
                                    S = 0,
                                    P = 0,
                                    M = 0;
                                x % 4 == 0 ? (S = 4 * -E * c, M = 0) : (x - 1) % 4 == 0 ? (S = 0, M = 4 * -E * c) : (x - 2) % 4 == 0 ? (S = c + 4 * E * c, M = c) : (x - 3) % 4 == 0 && (S = -c, M = 3 * c + 4 * c * E), h && (S = -S), m || (P = S, S = 0);
                                var k = "rotateX(" + (m ? 0 : -T) + "deg) rotateY(" + (m ? T : 0) + "deg) translate3d(" + S + "px, " + P + "px, " + M + "px)";
                                if (progress <= 1 && progress > -1 && (y = 90 * x + 90 * progress, h && (y = 90 * -x - 90 * progress)), C.transform(k), f.slideShadows) {
                                    var I = m ? C.find(".swiper-slide-shadow-left") : C.find(".swiper-slide-shadow-top"),
                                        R = m ? C.find(".swiper-slide-shadow-right") : C.find(".swiper-slide-shadow-bottom");
                                    0 === I.length && (I = r('<div class="swiper-slide-shadow-' + (m ? "left" : "top") + '"></div>'), C.append(I)), 0 === R.length && (R = r('<div class="swiper-slide-shadow-' + (m ? "right" : "bottom") + '"></div>'), C.append(R)), I.length && (I[0].style.opacity = Math.max(-progress, 0)), R.length && (R[0].style.opacity = Math.max(progress, 0))
                                }
                            }
                            if (n.css({
                                    "-webkit-transform-origin": "50% 50% -" + c / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + c / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + c / 2 + "px",
                                    "transform-origin": "50% 50% -" + c / 2 + "px"
                                }), f.shadow)
                                if (m) e.transform("translate3d(0px, " + (l / 2 + f.shadowOffset) + "px, " + -l / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + f.shadowScale + ")");
                                else {
                                    var z = Math.abs(y) - 90 * Math.floor(Math.abs(y) / 90),
                                        L = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
                                        $ = f.shadowScale,
                                        O = f.shadowScale / L,
                                        A = f.shadowOffset;
                                    e.transform("scale3d(" + $ + ", 1, " + O + ") translate3d(0px, " + (d / 2 + A) + "px, " + -d / 2 / O + "px) rotateX(-90deg)")
                                } var B = v.isSafari || v.isUiWebView ? -c / 2 : 0;
                            n.transform("translate3d(0px,0," + B + "px) rotateX(" + (this.isHorizontal() ? 0 : y) + "deg) rotateY(" + (this.isHorizontal() ? -y : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            var t = this.$el;
                            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    de = {
                        setTranslate: function() {
                            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                                var n = e.eq(i),
                                    progress = n[0].progress;
                                this.params.flipEffect.limitRotation && (progress = Math.max(Math.min(n[0].progress, 1), -1));
                                var o = -180 * progress,
                                    l = 0,
                                    d = -n[0].swiperSlideOffset,
                                    h = 0;
                                if (this.isHorizontal() ? t && (o = -o) : (h = d, d = 0, l = -o, o = 0), n[0].style.zIndex = -Math.abs(Math.round(progress)) + e.length, this.params.flipEffect.slideShadows) {
                                    var c = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                        f = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(c)), 0 === f.length && (f = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(f)), c.length && (c[0].style.opacity = Math.max(-progress, 0)), f.length && (f[0].style.opacity = Math.max(progress, 0))
                                }
                                n.transform("translate3d(" + d + "px, " + h + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                            }
                        },
                        setTransition: function(e) {
                            var t = this,
                                n = t.slides,
                                r = t.activeIndex,
                                o = t.$wrapperEl;
                            if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                                var l = !1;
                                n.eq(r).transitionEnd((function() {
                                    if (!l && t && !t.destroyed) {
                                        l = !0, t.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) o.trigger(e[i])
                                    }
                                }))
                            }
                        }
                    },
                    he = {
                        setTranslate: function() {
                            for (var e = this.width, t = this.height, n = this.slides, o = this.$wrapperEl, l = this.slidesSizesGrid, d = this.params.coverflowEffect, h = this.isHorizontal(), c = this.translate, v = h ? e / 2 - c : t / 2 - c, m = h ? d.rotate : -d.rotate, w = d.depth, i = 0, y = n.length; i < y; i += 1) {
                                var C = n.eq(i),
                                    x = l[i],
                                    T = (v - C[0].swiperSlideOffset - x / 2) / x * d.modifier,
                                    E = h ? m * T : 0,
                                    S = h ? 0 : m * T,
                                    P = -w * Math.abs(T),
                                    M = h ? 0 : d.stretch * T,
                                    k = h ? d.stretch * T : 0;
                                Math.abs(k) < .001 && (k = 0), Math.abs(M) < .001 && (M = 0), Math.abs(P) < .001 && (P = 0), Math.abs(E) < .001 && (E = 0), Math.abs(S) < .001 && (S = 0);
                                var I = "translate3d(" + k + "px," + M + "px," + P + "px)  rotateX(" + S + "deg) rotateY(" + E + "deg)";
                                if (C.transform(I), C[0].style.zIndex = 1 - Math.abs(Math.round(T)), d.slideShadows) {
                                    var R = h ? C.find(".swiper-slide-shadow-left") : C.find(".swiper-slide-shadow-top"),
                                        z = h ? C.find(".swiper-slide-shadow-right") : C.find(".swiper-slide-shadow-bottom");
                                    0 === R.length && (R = r('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), C.append(R)), 0 === z.length && (z = r('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), C.append(z)), R.length && (R[0].style.opacity = T > 0 ? T : 0), z.length && (z[0].style.opacity = -T > 0 ? -T : 0)
                                }
                            }(f.pointerEvents || f.prefixedPointerEvents) && (o[0].style.perspectiveOrigin = v + "px 50%")
                        },
                        setTransition: function(e) {
                            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    },
                    ce = {
                        init: function() {
                            var e = this.params.thumbs,
                                t = this.constructor;
                            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, c.extend(this.thumbs.swiper.originalParams, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1
                            }), c.extend(this.thumbs.swiper.params, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1
                            })) : c.isObject(e.swiper) && (this.thumbs.swiper = new t(c.extend({}, e.swiper, {
                                watchSlidesVisibility: !0,
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1
                            })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
                        },
                        onThumbClick: function() {
                            var e = this.thumbs.swiper;
                            if (e) {
                                var t = e.clickedIndex,
                                    n = e.clickedSlide;
                                if (!(n && r(n).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                                    var o;
                                    if (o = e.params.loop ? parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                                        var l = this.activeIndex;
                                        this.slides.eq(l).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, l = this.activeIndex);
                                        var d = this.slides.eq(l).prevAll('[data-swiper-slide-index="' + o + '"]').eq(0).index(),
                                            h = this.slides.eq(l).nextAll('[data-swiper-slide-index="' + o + '"]').eq(0).index();
                                        o = void 0 === d ? h : void 0 === h ? d : h - l < l - d ? h : d
                                    }
                                    this.slideTo(o)
                                }
                            }
                        },
                        update: function(e) {
                            var t = this.thumbs.swiper;
                            if (t) {
                                var n = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                                if (this.realIndex !== t.realIndex) {
                                    var r, o = t.activeIndex;
                                    if (t.params.loop) {
                                        t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
                                        var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                            d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                                        r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l
                                    } else r = this.realIndex;
                                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : r > o && (r = r - n + 1), t.slideTo(r, e ? 0 : void 0))
                                }
                                var h = 1,
                                    c = this.params.thumbs.slideThumbActiveClass;
                                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), t.slides.removeClass(c), t.params.loop || t.params.virtual)
                                    for (var i = 0; i < h; i += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + i) + '"]').addClass(c);
                                else
                                    for (var f = 0; f < h; f += 1) t.slides.eq(this.realIndex + f).addClass(c)
                            }
                        }
                    },
                    ue = [D, H, N, j, V, X, F, {
                        name: "mousewheel",
                        params: {
                            mousewheel: {
                                enabled: !1,
                                releaseOnEdges: !1,
                                invert: !1,
                                forceToAxis: !1,
                                sensitivity: 1,
                                eventsTarged: "container"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                mousewheel: {
                                    enabled: !1,
                                    enable: W.enable.bind(this),
                                    disable: W.disable.bind(this),
                                    handle: W.handle.bind(this),
                                    handleMouseEnter: W.handleMouseEnter.bind(this),
                                    handleMouseLeave: W.handleMouseLeave.bind(this),
                                    lastScrollTime: c.now()
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.params.mousewheel.enabled && this.mousewheel.enable()
                            },
                            destroy: function() {
                                this.mousewheel.enabled && this.mousewheel.disable()
                            }
                        }
                    }, {
                        name: "navigation",
                        params: {
                            navigation: {
                                nextEl: null,
                                prevEl: null,
                                hideOnClick: !1,
                                disabledClass: "swiper-button-disabled",
                                hiddenClass: "swiper-button-hidden",
                                lockClass: "swiper-button-lock"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                navigation: {
                                    init: U.init.bind(this),
                                    update: U.update.bind(this),
                                    destroy: U.destroy.bind(this),
                                    onNextClick: U.onNextClick.bind(this),
                                    onPrevClick: U.onPrevClick.bind(this)
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.navigation.init(), this.navigation.update()
                            },
                            toEdge: function() {
                                this.navigation.update()
                            },
                            fromEdge: function() {
                                this.navigation.update()
                            },
                            destroy: function() {
                                this.navigation.destroy()
                            },
                            click: function(e) {
                                var t, n = this.navigation,
                                    o = n.$nextEl,
                                    l = n.$prevEl;
                                !this.params.navigation.hideOnClick || r(e.target).is(l) || r(e.target).is(o) || (o ? t = o.hasClass(this.params.navigation.hiddenClass) : l && (t = l.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), o && o.toggleClass(this.params.navigation.hiddenClass), l && l.toggleClass(this.params.navigation.hiddenClass))
                            }
                        }
                    }, {
                        name: "pagination",
                        params: {
                            pagination: {
                                el: null,
                                bulletElement: "span",
                                clickable: !1,
                                hideOnClick: !1,
                                renderBullet: null,
                                renderProgressbar: null,
                                renderFraction: null,
                                renderCustom: null,
                                progressbarOpposite: !1,
                                type: "bullets",
                                dynamicBullets: !1,
                                dynamicMainBullets: 1,
                                formatFractionCurrent: function(e) {
                                    return e
                                },
                                formatFractionTotal: function(e) {
                                    return e
                                },
                                bulletClass: "swiper-pagination-bullet",
                                bulletActiveClass: "swiper-pagination-bullet-active",
                                modifierClass: "swiper-pagination-",
                                currentClass: "swiper-pagination-current",
                                totalClass: "swiper-pagination-total",
                                hiddenClass: "swiper-pagination-hidden",
                                progressbarFillClass: "swiper-pagination-progressbar-fill",
                                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                                clickableClass: "swiper-pagination-clickable",
                                lockClass: "swiper-pagination-lock"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                pagination: {
                                    init: K.init.bind(this),
                                    render: K.render.bind(this),
                                    update: K.update.bind(this),
                                    destroy: K.destroy.bind(this),
                                    dynamicBulletIndex: 0
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.pagination.init(), this.pagination.render(), this.pagination.update()
                            },
                            activeIndexChange: function() {
                                (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
                            },
                            snapIndexChange: function() {
                                this.params.loop || this.pagination.update()
                            },
                            slidesLengthChange: function() {
                                this.params.loop && (this.pagination.render(), this.pagination.update())
                            },
                            snapGridLengthChange: function() {
                                this.params.loop || (this.pagination.render(), this.pagination.update())
                            },
                            destroy: function() {
                                this.pagination.destroy()
                            },
                            click: function(e) {
                                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !r(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                            }
                        }
                    }, {
                        name: "scrollbar",
                        params: {
                            scrollbar: {
                                el: null,
                                dragSize: "auto",
                                hide: !1,
                                draggable: !1,
                                snapOnRelease: !0,
                                lockClass: "swiper-scrollbar-lock",
                                dragClass: "swiper-scrollbar-drag"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                scrollbar: {
                                    init: Z.init.bind(this),
                                    destroy: Z.destroy.bind(this),
                                    updateSize: Z.updateSize.bind(this),
                                    setTranslate: Z.setTranslate.bind(this),
                                    setTransition: Z.setTransition.bind(this),
                                    enableDraggable: Z.enableDraggable.bind(this),
                                    disableDraggable: Z.disableDraggable.bind(this),
                                    setDragPosition: Z.setDragPosition.bind(this),
                                    getPointerPosition: Z.getPointerPosition.bind(this),
                                    onDragStart: Z.onDragStart.bind(this),
                                    onDragMove: Z.onDragMove.bind(this),
                                    onDragEnd: Z.onDragEnd.bind(this),
                                    isTouched: !1,
                                    timeout: null,
                                    dragTimeout: null
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                            },
                            update: function() {
                                this.scrollbar.updateSize()
                            },
                            resize: function() {
                                this.scrollbar.updateSize()
                            },
                            observerUpdate: function() {
                                this.scrollbar.updateSize()
                            },
                            setTranslate: function() {
                                this.scrollbar.setTranslate()
                            },
                            setTransition: function(e) {
                                this.scrollbar.setTransition(e)
                            },
                            destroy: function() {
                                this.scrollbar.destroy()
                            }
                        }
                    }, {
                        name: "parallax",
                        params: {
                            parallax: {
                                enabled: !1
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                parallax: {
                                    setTransform: J.setTransform.bind(this),
                                    setTranslate: J.setTranslate.bind(this),
                                    setTransition: J.setTransition.bind(this)
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                            },
                            init: function() {
                                this.params.parallax.enabled && this.parallax.setTranslate()
                            },
                            setTranslate: function() {
                                this.params.parallax.enabled && this.parallax.setTranslate()
                            },
                            setTransition: function(e) {
                                this.params.parallax.enabled && this.parallax.setTransition(e)
                            }
                        }
                    }, {
                        name: "zoom",
                        params: {
                            zoom: {
                                enabled: !1,
                                maxRatio: 3,
                                minRatio: 1,
                                toggle: !0,
                                containerClass: "swiper-zoom-container",
                                zoomedSlideClass: "swiper-slide-zoomed"
                            }
                        },
                        create: function() {
                            var e = this,
                                t = {
                                    enabled: !1,
                                    scale: 1,
                                    currentScale: 1,
                                    isScaling: !1,
                                    gesture: {
                                        $slideEl: void 0,
                                        slideWidth: void 0,
                                        slideHeight: void 0,
                                        $imageEl: void 0,
                                        $imageWrapEl: void 0,
                                        maxRatio: 3
                                    },
                                    image: {
                                        isTouched: void 0,
                                        isMoved: void 0,
                                        currentX: void 0,
                                        currentY: void 0,
                                        minX: void 0,
                                        minY: void 0,
                                        maxX: void 0,
                                        maxY: void 0,
                                        width: void 0,
                                        height: void 0,
                                        startX: void 0,
                                        startY: void 0,
                                        touchesStart: {},
                                        touchesCurrent: {}
                                    },
                                    velocity: {
                                        x: void 0,
                                        y: void 0,
                                        prevPositionX: void 0,
                                        prevPositionY: void 0,
                                        prevTime: void 0
                                    }
                                };
                            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(n) {
                                t[n] = Q[n].bind(e)
                            })), c.extend(e, {
                                zoom: t
                            });
                            var n = 1;
                            Object.defineProperty(e.zoom, "scale", {
                                get: function() {
                                    return n
                                },
                                set: function(t) {
                                    if (n !== t) {
                                        var r = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                            o = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                        e.emit("zoomChange", t, r, o)
                                    }
                                    n = t
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.params.zoom.enabled && this.zoom.enable()
                            },
                            destroy: function() {
                                this.zoom.disable()
                            },
                            touchStart: function(e) {
                                this.zoom.enabled && this.zoom.onTouchStart(e)
                            },
                            touchEnd: function(e) {
                                this.zoom.enabled && this.zoom.onTouchEnd(e)
                            },
                            doubleTap: function(e) {
                                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                            },
                            transitionEnd: function() {
                                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                            }
                        }
                    }, {
                        name: "lazy",
                        params: {
                            lazy: {
                                enabled: !1,
                                loadPrevNext: !1,
                                loadPrevNextAmount: 1,
                                loadOnTransitionStart: !1,
                                elementClass: "swiper-lazy",
                                loadingClass: "swiper-lazy-loading",
                                loadedClass: "swiper-lazy-loaded",
                                preloaderClass: "swiper-lazy-preloader"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                lazy: {
                                    initialImageLoaded: !1,
                                    load: ee.load.bind(this),
                                    loadInSlide: ee.loadInSlide.bind(this)
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                            },
                            init: function() {
                                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                            },
                            scroll: function() {
                                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                            },
                            resize: function() {
                                this.params.lazy.enabled && this.lazy.load()
                            },
                            scrollbarDragMove: function() {
                                this.params.lazy.enabled && this.lazy.load()
                            },
                            transitionStart: function() {
                                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                            },
                            transitionEnd: function() {
                                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                            }
                        }
                    }, ie, {
                        name: "a11y",
                        params: {
                            a11y: {
                                enabled: !0,
                                notificationClass: "swiper-notification",
                                prevSlideMessage: "Previous slide",
                                nextSlideMessage: "Next slide",
                                firstSlideMessage: "This is the first slide",
                                lastSlideMessage: "This is the last slide",
                                paginationBulletMessage: "Go to slide {{index}}"
                            }
                        },
                        create: function() {
                            var e = this;
                            c.extend(e, {
                                a11y: {
                                    liveRegion: r('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                                }
                            }), Object.keys(se).forEach((function(t) {
                                e.a11y[t] = se[t].bind(e)
                            }))
                        },
                        on: {
                            init: function() {
                                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                            },
                            toEdge: function() {
                                this.params.a11y.enabled && this.a11y.updateNavigation()
                            },
                            fromEdge: function() {
                                this.params.a11y.enabled && this.a11y.updateNavigation()
                            },
                            paginationUpdate: function() {
                                this.params.a11y.enabled && this.a11y.updatePagination()
                            },
                            destroy: function() {
                                this.params.a11y.enabled && this.a11y.destroy()
                            }
                        }
                    }, {
                        name: "history",
                        params: {
                            history: {
                                enabled: !1,
                                replaceState: !1,
                                key: "slides"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                history: {
                                    init: ae.init.bind(this),
                                    setHistory: ae.setHistory.bind(this),
                                    setHistoryPopState: ae.setHistoryPopState.bind(this),
                                    scrollToSlide: ae.scrollToSlide.bind(this),
                                    destroy: ae.destroy.bind(this)
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.params.history.enabled && this.history.init()
                            },
                            destroy: function() {
                                this.params.history.enabled && this.history.destroy()
                            },
                            transitionEnd: function() {
                                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                            }
                        }
                    }, {
                        name: "hash-navigation",
                        params: {
                            hashNavigation: {
                                enabled: !1,
                                replaceState: !1,
                                watchState: !1
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                hashNavigation: {
                                    initialized: !1,
                                    init: ne.init.bind(this),
                                    destroy: ne.destroy.bind(this),
                                    setHash: ne.setHash.bind(this),
                                    onHashCange: ne.onHashCange.bind(this)
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.params.hashNavigation.enabled && this.hashNavigation.init()
                            },
                            destroy: function() {
                                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                            },
                            transitionEnd: function() {
                                this.hashNavigation.initialized && this.hashNavigation.setHash()
                            }
                        }
                    }, {
                        name: "autoplay",
                        params: {
                            autoplay: {
                                enabled: !1,
                                delay: 3e3,
                                waitForTransition: !0,
                                disableOnInteraction: !0,
                                stopOnLastSlide: !1,
                                reverseDirection: !1
                            }
                        },
                        create: function() {
                            var e = this;
                            c.extend(e, {
                                autoplay: {
                                    running: !1,
                                    paused: !1,
                                    run: re.run.bind(e),
                                    start: re.start.bind(e),
                                    stop: re.stop.bind(e),
                                    pause: re.pause.bind(e),
                                    onTransitionEnd: function(t) {
                                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                                    }
                                }
                            })
                        },
                        on: {
                            init: function() {
                                this.params.autoplay.enabled && this.autoplay.start()
                            },
                            beforeTransitionStart: function(e, t) {
                                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                            },
                            sliderFirstMove: function() {
                                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                            },
                            destroy: function() {
                                this.autoplay.running && this.autoplay.stop()
                            }
                        }
                    }, {
                        name: "effect-fade",
                        params: {
                            fadeEffect: {
                                crossFade: !1
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                fadeEffect: {
                                    setTranslate: oe.setTranslate.bind(this),
                                    setTransition: oe.setTransition.bind(this)
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                if ("fade" === this.params.effect) {
                                    this.classNames.push(this.params.containerModifierClass + "fade");
                                    var e = {
                                        slidesPerView: 1,
                                        slidesPerColumn: 1,
                                        slidesPerGroup: 1,
                                        watchSlidesProgress: !0,
                                        spaceBetween: 0,
                                        virtualTranslate: !0
                                    };
                                    c.extend(this.params, e), c.extend(this.originalParams, e)
                                }
                            },
                            setTranslate: function() {
                                "fade" === this.params.effect && this.fadeEffect.setTranslate()
                            },
                            setTransition: function(e) {
                                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                            }
                        }
                    }, {
                        name: "effect-cube",
                        params: {
                            cubeEffect: {
                                slideShadows: !0,
                                shadow: !0,
                                shadowOffset: 20,
                                shadowScale: .94
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                cubeEffect: {
                                    setTranslate: le.setTranslate.bind(this),
                                    setTransition: le.setTransition.bind(this)
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                if ("cube" === this.params.effect) {
                                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                                    var e = {
                                        slidesPerView: 1,
                                        slidesPerColumn: 1,
                                        slidesPerGroup: 1,
                                        watchSlidesProgress: !0,
                                        resistanceRatio: 0,
                                        spaceBetween: 0,
                                        centeredSlides: !1,
                                        virtualTranslate: !0
                                    };
                                    c.extend(this.params, e), c.extend(this.originalParams, e)
                                }
                            },
                            setTranslate: function() {
                                "cube" === this.params.effect && this.cubeEffect.setTranslate()
                            },
                            setTransition: function(e) {
                                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                            }
                        }
                    }, {
                        name: "effect-flip",
                        params: {
                            flipEffect: {
                                slideShadows: !0,
                                limitRotation: !0
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                flipEffect: {
                                    setTranslate: de.setTranslate.bind(this),
                                    setTransition: de.setTransition.bind(this)
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                if ("flip" === this.params.effect) {
                                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                                    var e = {
                                        slidesPerView: 1,
                                        slidesPerColumn: 1,
                                        slidesPerGroup: 1,
                                        watchSlidesProgress: !0,
                                        spaceBetween: 0,
                                        virtualTranslate: !0
                                    };
                                    c.extend(this.params, e), c.extend(this.originalParams, e)
                                }
                            },
                            setTranslate: function() {
                                "flip" === this.params.effect && this.flipEffect.setTranslate()
                            },
                            setTransition: function(e) {
                                "flip" === this.params.effect && this.flipEffect.setTransition(e)
                            }
                        }
                    }, {
                        name: "effect-coverflow",
                        params: {
                            coverflowEffect: {
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: !0
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                coverflowEffect: {
                                    setTranslate: he.setTranslate.bind(this),
                                    setTransition: he.setTransition.bind(this)
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                            },
                            setTranslate: function() {
                                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                            },
                            setTransition: function(e) {
                                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                            }
                        }
                    }, {
                        name: "thumbs",
                        params: {
                            thumbs: {
                                swiper: null,
                                slideThumbActiveClass: "swiper-slide-thumb-active",
                                thumbsContainerClass: "swiper-container-thumbs"
                            }
                        },
                        create: function() {
                            c.extend(this, {
                                thumbs: {
                                    swiper: null,
                                    init: ce.init.bind(this),
                                    update: ce.update.bind(this),
                                    onThumbClick: ce.onThumbClick.bind(this)
                                }
                            })
                        },
                        on: {
                            beforeInit: function() {
                                var e = this.params.thumbs;
                                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                            },
                            slideChange: function() {
                                this.thumbs.swiper && this.thumbs.update()
                            },
                            update: function() {
                                this.thumbs.swiper && this.thumbs.update()
                            },
                            resize: function() {
                                this.thumbs.swiper && this.thumbs.update()
                            },
                            observerUpdate: function() {
                                this.thumbs.swiper && this.thumbs.update()
                            },
                            setTransition: function(e) {
                                var t = this.thumbs.swiper;
                                t && t.setTransition(e)
                            },
                            beforeDestroy: function() {
                                var e = this.thumbs.swiper;
                                e && this.thumbs.swiperCreated && e && e.destroy()
                            }
                        }
                    }];
                return void 0 === B.use && (B.use = B.Class.use, B.installModule = B.Class.installModule), B.use(ue), B
            }()
        },
        903: function(e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable;

            function d(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, source) {
                for (var t, n, h = d(e), s = 1; s < arguments.length; s++) {
                    for (var c in t = Object(arguments[s])) o.call(t, c) && (h[c] = t[c]);
                    if (r) {
                        n = r(t);
                        for (var i = 0; i < n.length; i++) l.call(t, n[i]) && (h[n[i]] = t[n[i]])
                    }
                }
                return h
            }
        }
    }
]);