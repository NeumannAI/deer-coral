! function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.leproductFeatures = t() : e.leproductFeatures = t()
}(window, (function () {
	return function (e) {
		var t = {};

		function o(n) {
			if (t[n]) return t[n].exports;
			var i = t[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
		}
		return o.m = e, o.c = t, o.d = function (e, t, n) {
			o.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: n
			})
		}, o.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, o.t = function (e, t) {
			if (1 & t && (e = o(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (o.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var i in e) o.d(n, i, function (t) {
					return e[t]
				}.bind(null, i));
			return n
		}, o.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return o.d(t, "a", t), t
		}, o.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, o.p = "", o(o.s = 44)
	}({
		0: function (e, t, o) {
			"use strict";
			const n = (e, t) => t ? e.find(".section-headline") : e.find("h2 > span[role=button].arrow"),
				i = (e, t, o, n) => {
					const {
						ariaLabel: i,
						headerClick: a
					} = n;
					let s = (a ? t.find("h2").text() : t.parent("h2").text()) || i;
					s = s + " " + (e ? translate("expanded") : translate("collapsed")), t.attr("aria-expanded", e).attr("aria-label", s), o.attr("aria-hidden", !e)
				},
				a = {
					arrowClicked: function (e, t) {
						const {
							expandedCB: o,
							headerClick: a
						} = t;
						let s = n(e, a);
						s.on("click", n => {
							try {
								let a = $(n.currentTarget),
									s = a.parents(".container"),
									l = s.find(".inner");
								s.hasClass("expanded") ? (s.removeClass("expanded").addClass("collapsed"), i(!1, a, l, t)) : (s.addClass("expanded").removeClass("collapsed"), i(!0, a, l, t), o && o(e))
							} catch (n) {
								console.error(n)
							}
						}), a || s.on("keyup", flash_fe_core_tool.$util.$accessibility.defaultEnterEvent)
					}
				};
			t.a = {
				$eventRegister: a,
				removeContainer: e => {
					const t = e.attr("name");
					$(".nav_container").find('a[href="#'.concat(t, '"]')).parents(".menuitem").remove(), e.remove()
				},
				setAriaAttr: i,
				init: function (e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const o = e.find(".section-headline").length > 0;
					t.headerClick = o;
					const s = n(e, o),
						l = e.hasClass("expanded"),
						r = e.find(".inner");
					s.each((e, o) => {
						i(l, $(o), r, t)
					}), a.arrowClicked(e, t)
				}
			}
		},
		34: function (e, t, o) {
			"use strict";
			var n = o(0);
			o(36);
			const i = {
				id: "",
				videoId: "",
				autoplay: !0,
				popup: !1,
				bgImg: null,
				bgWrapper: ".youtube-video",
				el: null,
				width: "100%",
				height: "100%",
				controls: 0,
				loop: 1,
				customBtnSelector: "",
				onPopUp: null,
				onClose: null,
				onPause: null,
				onPlay: null,
				onPlayerReady: null,
				onPlayerStateChange: null
			};
			const a = e => {
				e.find(".youtube-video").each((e, t) => {
					new class {
						constructor(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							this.options = null, this.config = null, this.player = null, this.popUpEl = null, this.initOption(e, t), this.initConfig(), this.onceLoadYouTuBeAPI()
						}
						initOption(e, t) {
							this.options = Object.assign({}, i, t, e.data(), {
								id: e.attr("id"),
								el: e
							})
						}
						initConfig() {
							const {
								height: e,
								width: t,
								videoId: o,
								autoplay: n,
								controls: i,
								loop: a
							} = this.options;
							this.config = {
								height: e,
								width: t,
								videoId: o,
								playerVars: {
									autoplay: n ? 1 : 0,
									controls: i,
									enablejsapi: 1,
									origin: window.location.origin,
									playlist: o,
									loop: a
								},
								events: {
									onReady: this.onPlayerReady.bind(this),
									onStateChange: this.onPlayerStateChange.bind(this)
								}
							}
						}
						onYouTubeIframeAPIReady() {
							console.log(this.options), this.options.id && "string" == typeof this.options.id ? this.options.videoId ? window.YT.ready(() => {
								if (this.options.popup) {
									const {
										bgImg: e,
										bgWrapper: t,
										el: o
									} = this.options;
									let n, i = '<div class="popup-mask" style="display: none">\n                                <div class="popup-wrapper">\n                                    <div id="'.concat(this.options.id, '_win"></div>\n                                </div>\n                            </div>'),
										a = this.options.customBtnSelector,
										s = "";
									e && $(t).css("background", 'center / cover no-repeat url("'.concat(e, '")')), a ? (n = $(a), o.append("".concat(i))) : (s = '<button aria-label="Click to watch video" class="play-video">\n                                    <i class="triangle"></i>\n                                </button>', o.append("".concat(s).concat(i)), n = o.find("button.play-video")), n.on("click", e => {
										this.popUp(e)
									})
								} else this.player = new YT.Player(this.options.id, this.config)
							}) : console.error("Youtube Id Not Found!") : console.error("Please define id<String> for your youtube container!")
						}
						onceLoadYouTuBeAPI() {
							if (!window.YT) {
								let e = this,
									t = document.createElement("script");
								t.src = "https://www.youtube.com/iframe_api", t.onload = function () {
									e.onYouTubeIframeAPIReady()
								};
								let o = document.getElementsByTagName("script")[0];
								o.parentNode.insertBefore(t, o)
							}
						}
						createPopUpPlayer() {
							this.popUpEl || (this.player = new YT.Player(this.options.id + "_win", this.config), this.popUpEl = this.options.el.find(".popup-mask"), this.popUpEl.find(".popup-wrapper").prepend('<button class="close-win-button"></button>'), this.popUpEl.find(".close-win-button").on("click", e => {
								this.close(e)
							}), this.popUpEl.on("click", e => {
								this.close(e)
							}))
						}
						onPlayerReady(e) {
							const {
								autoplay: t,
								popup: o,
								onPlayerReady: n
							} = this.options;
							t && !o && e.target.mute(), o && (this.play(e), this.popUpEl.show()), n && n.call(this, e)
						}
						onPlayerStateChange(e) {
							this.options.onPlayerStateChange && this.options.onPlayerStateChange.call(this, e)
						}
						adobeTrack(e) {
							let t = flash_fe_core_tool.$util.$coreMethods.getMetaContent("adobeParam"),
								o = {
									videoInfo: {
										videoName: "".concat(t, " : We're here to support your business"),
										videoStatus: "".concat(e)
									}
								};
							window.lmd = Object.assign({}, flash_fe_core_tool.$adobe._lmd, o), flash_fe_core_tool.$adobe.doit("VideoTracking")
						}
						play(e) {
							this.adobeTrack("Start"), this.player.playVideo(), this.options.onPlay && this.options.onPlay.call(this, e)
						}
						pause(e) {
							this.adobeTrack("Pause"), this.player.pauseVideo(), this.options.onPause && this.options.onPause.call(this, e)
						}
						popUp(e) {
							this.popUpEl ? (this.play(e), this.popUpEl.show()) : this.createPopUpPlayer(), this.options.onPopUp && this.options.onPopUp.call(this, e)
						}
						close(e) {
							this.pause(e), this.popUpEl.hide(), this.options.onClose && this.options.onClose.call(this, e)
						}
					}($(t))
				})
			};
			t.a = e => {
				const t = $(".features_container");
				n.a.init(t), document.querySelectorAll(".feature-item .feature-media[data-bg-image]").forEach(e => {
					const t = $(e),
						o = t.data("bg-image");
					if (o) {
						const e = t.parents(".feature-item");
						t.css("background-image", 'url("'.concat(o, '")')), e.hasClass("blade_3") && t.addClass("have-bg-image"), e.hasClass("blade_4") && 0 === t.find(".youtube-video").length && t.find(".caption").appendTo(e)
					}
				}), e.find(".feature-item.blade_6 .gallery-section").eq(0).addClass("active"), e.find(".feature-item.blade_6 .nav-title:first-child").addClass("active"), e.find(".nav-title").on("click", "button", t => {
					let o = $(t.currentTarget).parents(".nav-title");
					e.find(".nav-title").removeClass("active"), o.addClass("active"), e.find(".feature-item.blade_6 .gallery-section").removeClass("active"), e.find(".feature-item.blade_6 .gallery-section[data-gallery-id=".concat(o.data("tabIdx"), "]")).addClass("active")
				}), a(t)
			}
		},
		36: function (e, t, o) {},
		44: function (e, t, o) {
			"use strict";
			o.r(t);
			o(45);
			var n = o(34);
			t.default = n.a
		},
		45: function (e, t, o) {}
	}).default
}));
! function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.letechSpecs = t() : e.letechSpecs = t()
}(window, (function () {
	return function (e) {
		var t = {};

		function n(r) {
			if (t[r]) return t[r].exports;
			var o = t[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
		}
		return n.m = e, n.c = t, n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		}, n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.t = function (e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var o in e) n.d(r, o, function (t) {
					return e[t]
				}.bind(null, o));
			return r
		}, n.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 47)
	}({
		0: function (e, t, n) {
			"use strict";
			const r = (e, t) => t ? e.find(".section-headline") : e.find("h2 > span[role=button].arrow"),
				o = (e, t, n, r) => {
					const {
						ariaLabel: o,
						headerClick: a
					} = r;
					let i = (a ? t.find("h2").text() : t.parent("h2").text()) || o;
					i = i + " " + (e ? "expanded" : "collapsed"), t.attr("aria-expanded", e).attr("aria-label", i), n.attr("aria-hidden", !e)
				},
				a = {
					arrowClicked: function (e, t) {
						const {
							expandedCB: n,
							headerClick: a
						} = t;
						let i = r(e, a);
						i.on("click", r => {
							try {
								let a = $(r.currentTarget),
									i = a.parents(".container"),
									s = i.find(".inner");
								i.hasClass("expanded") ? (i.removeClass("expanded").addClass("collapsed"), o(!1, a, s, t)) : (i.addClass("expanded").removeClass("collapsed"), o(!0, a, s, t), n && n(e))
							} catch (r) {
								console.error(r)
							}
						}), a || i.on("keyup", )
					}
				};
			t.a = {
				$eventRegister: a,
				removeContainer: e => {
					const t = e.attr("name");
					$(".nav_container").find('a[href="#'.concat(t, '"]')).parents(".menuitem").remove(), e.remove()
				},
				setAriaAttr: o,
				init: function (e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const n = e.find(".section-headline").length > 0;
					t.headerClick = n;
					const i = r(e, n),
						s = e.hasClass("expanded"),
						c = e.find(".inner");
					i.each((e, n) => {
						o(s, $(n), c, t)
					}), a.arrowClicked(e, t)
				}
			}
		},
		24: function (e, t, n) {
			"use strict";
			var r = n(0);
			t.a = () => {
				const e = $(".tech_specs_container");
				r.a.init(e);
				const t = e.find(".specs-wrapper"),
					n = t.data("displayLimit");
				let o = !0;
				(t.find(".specs-group>h3").length ? t.find(".specs-group") : t.find(".item")).each((e, t) => {
					e >= n && ($(t).addClass("limited"), o = !1)
				}), o && t.find(".specs_bottom .view-specs-btns").hide(), e.find(".specs_bottom .arrow").off("click"), e.find(".specs_bottom button").on("click", e => {
					let t = $(e.currentTarget).parents(".specs-wrapper");
					t.hasClass("collapsed") ? t.removeClass("collapsed").addClass("expanded") : (t.removeClass("expanded").addClass("collapsed"), $(window).scrollTop(t.offset().top))
				})
			}
		},
		47: function (e, t, n) {
			"use strict";
			n.r(t);
			n(48);
			var r = n(24);
			$((function () {
				Object(r.a)()
			}))
		},
		48: function (e, t, n) {}
	}).default
}));
