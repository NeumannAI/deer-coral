(window.webpackJsonp_cj86gji4=window.webpackJsonp_cj86gji4||[]).push([[15], {
	563:function(e, t, o) {
		"use strict";
		o.r(t);
		o(36), o(46), o(47), o(61), o(27), o(13), o(24), o(16), o(17), o(48), o(37), o(45), o(49);
		var r, n=o(4), c=o(0), l=o(111), d=o.n(l), h=(o(32), o(33), o(65), o(594)), m=o(585), _=o(583), v=o.n(_);
		!function(e) {
			e.overview="Overview", e.specifications="TechSpec", e.ProductTab="ProductTab", e.review="Review", e.support="Helpdesk"
		}
		(r||(r= {}
		));
		var f, T=o(14), y=o(110), L=(f=function(e, b) {
			return(f=Object.setPrototypeOf|| {
				__proto__: []
			}
			instanceof Array&&function(e, b) {
				e.__proto__=b
			}
			||function(e, b) {
				for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])
			}
			)(e, b)
		}
		, function(e, b) {
			function t() {
				this.constructor=e
			}
			f(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), P=function(e, t, o, desc) {
			var r, c=arguments.length, l=c<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, o):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e, t, o, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(r=e[i])&&(l=(c<3?r(l): c>3?r(t, o, l):r(t, o))||l);
			return c>3&&l&&Object.defineProperty(t, o, l), l
		}
		, w=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.subTabListToDisplay=[], t.isOpenSubTabList=!1, t.isStick=!1, t.breakPointHeaderTablet=parseInt(v.a.breakPointHeaderTablet, 10), t.wordLevelChangeFlag=!1, t.innerWrapperWidth=0, t.modelNameWidth=0, t.buttonContainerWidth=0, t.subTabWidth=0, t.tabListWidth=0, t.tabList=r, t
			}
			return L(t, e), t.prototype.mounted=function() {
				this.menuStickToggle(), window.addEventListener("scroll", this.menuStickToggle), this.modelNameContainer=this.$refs.modelNameContainer, this.modelName=this.$refs.modelName
			}
			, t.prototype.updated=function() {
				this.modelNameContainer=this.$refs.modelNameContainer, this.modelName=this.$refs.modelName, this.modelName&&this.modelNameContainer&&this.modelName.offsetWidth>=this.modelNameContainer.offsetWidth&&(this.wordLevelChangeFlag=!0)
			}
			, Object.defineProperty(t.prototype, "isShowDiffWhereToBuyButton", {
				get:function() {
					return""===this.productTabList.Buy.ButtonLink
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "isShowCTO", {
				get:function() {
					return!!this.productTabList.CTO&&""!==this.productTabList.CTO.ButtonLink
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "isPageDarkTheme", {
				get:function() {
					return"Dark"===this.themeColor
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "isSubTabOverflowWidth", {
				get:function() {
					return this.innerWrapperWidth-500<this.subTabWidth
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "isOverflowWidth", {
				get:function() {
					return this.innerWrapperWidth-500<this.tabListWidth
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.getProductTabList=function() {
				var e=this;
				this.$nextTick((function() {
					e.getWidth()
				}
				))
			}
			, t.prototype.getRwdWidth=function() {
				var e=this;
				this.$nextTick((function() {
					e.getWidth()
				}
				))
			}
			, t.prototype.getWidth=function() {
				if("object"==("undefined"==typeof document?"undefined": Object(n.a)(document))) {
					var e=0;
					document.querySelectorAll(".tabItem").forEach((function(t) {
						e+=t.offsetWidth+32
					}
					)), this.$set(this, "tabListWidth", e);
					var t=this.$refs.innerWrapper, o=this.$refs.modelNameContainer, r=this.$refs.buttonContainer;
					this.innerWrapperWidth=null==t?void 0:t.offsetWidth, this.modelNameWidth=null==o?void 0:o.offsetWidth, this.buttonContainerWidth=null==r?void 0:r.offsetWidth
				}
			}
			, t.prototype.isTabActived=function(e) {
				var t=this.$route.params.contentName===e.Link, o=this.$route.name===this.tabList[e.Webpath], r=this.$route.name===this.tabList[e.WebPath];
				return"ProductTab"===e.WebPath?t: o||r
			}
			, t.prototype.isSubTabActived=function(e) {
				for(var i=0;
				i<e.SubTab.length;
				i++)if(this.$route.name===this.tabList[e.SubTab[i].WebPath])return!0;
				return!1
			}
			, t.prototype.toggleSubTab=function(e, t, o) {
				var r=this;
				switch(void 0===t&&(t=[]), void 0===o&&(o=null), o&&(this.mainTabCurrent=o.target), e) {
					case"open": this.subTabListToDisplay=t, this.isOpenSubTabList=!0;
					var n=0;
					this.$nextTick((function() {
						document.querySelectorAll(".subTab").forEach((function(e, t) {
							e.tabIndex=0, setTimeout((function() {
								0===t&&e.focus()
							}
							), 301), n+=e.offsetWidth+32
						}
						)), r.$set(r, "subTabWidth", n), r.$set(r, "tabListWidth", 0)
					}
					));
					break;
					case"close":this.mainTabCurrent.focus(), this.isOpenSubTabList=!1;
					var c=0;
					this.$nextTick((function() {
						document.querySelectorAll(".tabItem").forEach((function(e) {
							c+=e.offsetWidth+32
						}
						)), document.querySelectorAll(".subTab").forEach((function(e) {
							e.tabIndex=-1
						}
						)), r.$set(r, "tabListWidth", c), r.$set(r, "subTabWidth", 0)
					}
					))
				}
			}
			, t.prototype.ifLastOneMoveToNextMainItem=function(e) {
				e===this.subTabListToDisplay.length-1&&(this.toggleSubTab("close"), this.mainTabCurrent.parentNode.nextSibling.childNodes[0].focus())
			}
			, t.prototype.menuStickToggle=function() {
				document.getElementsByTagName("html")[0].clientWidth<=this.breakPointHeaderTablet?window.pageYOffset>=48?this.isStick=!0: this.isStick=!1:window.pageYOffset>=85?this.isStick=!0:this.isStick=!1
			}
			, t.prototype.routerRedirect=function(e, t) {
				var o=this.$route.params.levelOneTopMenuName, r=this.$route.params.levelTwoProductLineName, n=this.$route.params.seriesName, c=this.$route.params.productModel, l=Object(y.a)(this.$route.params.region);
				switch(e) {
					case"overview": this.redirect("overview");
					break;
					case"specifications": this.redirect("techSpec");
					break;
					case"ProductTab": this.redirect("productTab", t);
					break;
					case"review": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c+"/review/";
					break;
					case"support": this.routerPush("support")
				}
			}
			, t.prototype.routerPush=function(e) {
				switch(e) {
					case"review":this.$router.push( {
						name: "Review"
					}
					);
					break;
					case"support":this.$router.push( {
						name:"Helpdesk", params: {
							tabName: "_knowledge"
						}
					}
					)
				}
			}
			, t.prototype.redirect=function(e, t) {
				var o=this.$route.params.levelOneTopMenuName, r=this.$route.params.levelTwoProductLineName, n=this.$route.params.seriesName, c=this.$route.params.productModel, l=Object(y.a)(this.$route.params.region);
				switch(e) {
					case"overview": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c+"/";
					break;
					case"techSpec": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c+"/techspec/";
					break;
					case"productTab": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c+"/overview/"+t+"/"
				}
			}
			, P([Object(c.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), P([Object(c.Getter)("productTabListGetter")], t.prototype, "productTabList", void 0), P([Object(c.Prop)()], t.prototype, "rwdWidth", void 0), P([Object(c.Watch)("productTabList", {				immediate: !0			}			)], t.prototype, "getProductTabList", null), P([Object(c.Watch)("rwdWidth", {				immediate: !0			}			)], t.prototype, "getRwdWidth", null), t=P([Object(c.Component)( {				components: {					BorderButton: h.a, SolidButton:m.a				}			}			)], t)
		}
		(Object(c.mixins)(T.a)), k=o(908), D=o(8);
		var W=Object(D.a)(w, (function() {
			var e, t, o, r, n, c, l, d=this, h=d.$createElement, m=d._self._c||h;
			return m("div", {
				class: d.$style.wrapper
			}
			, [d.productTabList&&d.productTabList.ModelName?m("div", {				ref:"innerWrapper", class:[d.$style.innerWrapper, (e= {}				, e[d.$style.black]=1===d.productTabList.EnableBlackVersion&&d.isPageDarkTheme, e)]
			}
			, [m("div", {				ref: "modelNameContainer", class:d.$style.modelNameContainer			}			, [d.productTabList.ModelNameImage?m("img", {				class:d.$style.modelNameImage, attrs: {					src: d.productTabList.ModelNameImage, alt:d.productTabList.ModelName				}			}			):m("h1", {				ref:"modelName", class:[d.$style.modelName, (t= {}				, t[d.$style.modelName17px]=d.wordLevelChangeFlag, t)], attrs: {
					tabindex: "0"
				}
				, on: {
					click:function(e) {
						return d.routerRedirect("overview")
					}
				}
			}
			, [d._v("\n        "+d._s(d.productTabList.ModelName)+"\n      ")])]), d._v(" "), m("div", {
				ref:"tabListContainer", class:[d.$style.productTabListContainer, (o= {}
				, o[d.$style.tabListContainer]=d.isOverflowWidth||d.isSubTabOverflowWidth, o)]
			}
			, [m("ul", {				class:[d.$style.mainTab, (r= {}				, r[d.$style.up]=d.isOpenSubTabList, r), (n= {}
				, n[d.$style.moveToStart]=d.isOverflowWidth, n)]
			}
			, d._l(d.productTabList.TabList, (function(e, t) {
				var o, r, n;
				return m("li", {
					key: "productTab-"+t+"-"+e.Name, staticClass:"tabItem", class:d.$style.tabItem
				}
				, [e.SubTab&&0===e.SubTab.length?[""!==e.Webpath?m("div", {					class:[d.$style.tabItemLink, (o= {}					, o[d.$style.tabItemActive]=d.isTabActived(e)||d.isSubTabActived(e), o)], attrs: {
						tabindex: "0"
					}
					, on: {
						click:function(t) {
							d.routerRedirect(e.Webpath), d.gaDataLayerPush( {
								event: "data_layer_event", event_category_DL:"navigations", event_action_DL:"clicked", event_label_DL:"product_menu/"+e.Name, event_value_DL:"0"
							}
							), d.gaHmtPush(["_trackEvent", "navigations", "clicked", "product_menu/"+e.Name])
						}
					}
				}
				, [d._v("\n              "+d._s(e.Name)+"\n            ")]):""===e.Webpath?m("a", {
					class:[d.$style.tabItemLink, (r= {}
					, r[d.$style.tabItemActive]=d.isTabActived(e)||d.isSubTabActived(e), r)], attrs: {
						href: e.Link, target:e.LinkTarget, rel:"_blank"===e.LinkTarget?"noreferrer noopener":""
					}
					, on: {
						click:function(t) {
							d.gaDataLayerPush( {
								event: "data_layer_event", event_category_DL:"navigations", event_action_DL:"clicked", event_label_DL:"product_menu/"+e.Name, event_value_DL:"0"
							}
							), d.gaHmtPush(["_trackEvent", "navigations", "clicked", "product_menu/"+e.Name])
						}
					}
				}
				, [d._v("\n              "+d._s(e.Name)+"\n            ")]):d._e()]:[m("div", {					class:[d.$style.tabItemLink, (n= {}					, n[d.$style.tabItemActive]=d.isTabActived(e)||d.isSubTabActived(e), n)], attrs: {
						tabindex: "0"
					}
					, on: {
						click:function(t) {
							d.toggleSubTab("open", e.SubTab, t), d.gaDataLayerPush( {
								event: "data_layer_event", event_category_DL:"navigations", event_action_DL:"clicked", event_label_DL:"product_menu/"+e.Name, event_value_DL:"0"
							}
							), d.gaHmtPush(["_trackEvent", "navigations", "clicked", "product_menu/"+e.Name])
						}
					}
				}
				, [d._v("\n              "+d._s(e.Name)+"\n              "), m("span", {					class: d.$style.arrowDown				}				)])]], 2)
			}
			)), 0), d._v(" "), m("ul", {
				class:[d.$style.subTab, (c= {}
				, c[d.$style.up]=d.isOpenSubTabList, c), (l= {}
				, l[d.$style.moveToStart]=d.isSubTabOverflowWidth, l)]
			}
			, [d._l(d.subTabListToDisplay, (function(e, t) {				var o;				return m("li", {					key:"subTab-"+t+"-"+e.Name, staticClass:"subTab", class:[d.$style.tabItem, (o= {}					, o[d.$style.tabItemActive]=d.isTabActived(e), o)], attrs: {
						tabindex: "0"
					}
					, on: {
						click:function(t) {
							return d.routerRedirect(e.WebPath, e.Link)
						}
						, keyup:[function(e) {							return!e.type.indexOf("key")&&d._k(e.keyCode, "tab", 9, e.key, "Tab")?null: d.ifLastOneMoveToNextMainItem(t)						}						, function(e) {							return!e.type.indexOf("key")&&d._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])?null: d.toggleSubTab("close")
						}
						]
					}
				}
				, [d._v("\n          "+d._s(e.Name)+"\n        ")])
			}
			)), d._v(" "), m("li", {
				class:[d.$style.tabItem, d.$style.closeBtn], on: {
					click:function(e) {
						return d.toggleSubTab("close")
					}
				}
			}
			, [m("svg", {				class:d.$style.closeBtnImage, attrs: {					viewBox: "0 0 26 26", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"				}			}			, [m("path", {				attrs: {					d: "M7.68 6.83a.6.6 0 10-.85.85l.85-.85zM18.32 19.17a.6.6 0 00.849-.849l-.849.849zm-11.49-.849a.6.6 0 10.848.849l-.848-.849zM19.17 7.68a.6.6 0 00-.849-.848l.849.848zm-12.34 0l11.491 11.49.849-.848L7.68 6.831l-.85.848zm.85 11.49L19.17 7.68l-.849-.848-11.49 11.49.848.849z", fill:"#181818"				}			}			)])])], 2)]), d._v(" "), m("div", {
				ref: "buttonContainer", class:d.$style.ecButtonContainer
			}
			, [0===d.productTabList.WTB.WTBFlag||"WhereToBuy"===d.$route.name||d.isShowDiffWhereToBuyButton?d._e():m("nuxt-link", {				class:[d.$style.ecButton, d.$style.whereToBuyBTN], attrs: {
					to: {
						name: "WhereToBuy"
					}
				}
				, nativeOn: {
					click:function(e) {
						d.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:"product_menu/"+d.productTabList.ModelName+"/whereToBuy-"+d.productTabList.WhereToBuy.ButtonText, event_value_DL:"0"
						}
						), d.gaHmtPush(["_trackEvent", "buttons", "clicked", "product_menu/"+d.productTabList.ModelName+"/whereToBuy-"+d.productTabList.WhereToBuy.ButtonText])
					}
				}
			}
			, [d._v("\n        "+d._s(d.productTabList.WTB.WTBText)+"\n      ")]), d._v(" "), 0!==d.productTabList.WTB.WTBFlag&&"WhereToBuy"!==d.$route.name&&d.isShowDiffWhereToBuyButton?m("nuxt-link", {
				class:[d.$style.normal, d.$style.ecButton, d.$style.whereToBuyDiffBTN, d.$style.buyBTN], attrs: {
					to: {
						name: "WhereToBuy"
					}
				}
				, nativeOn: {
					click:function(e) {
						d.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:"product_menu/"+d.productTabList.ModelName+"/whereToBuy-"+d.productTabList.WhereToBuy.ButtonText, event_value_DL:"0"
						}
						), d.gaHmtPush(["_trackEvent", "buttons", "clicked", "product_menu/"+d.productTabList.ModelName+"/whereToBuy-"+d.productTabList.WhereToBuy.ButtonText])
					}
				}
			}
			, [m("span", {				class: [d.$style.btnText]
			}
			, [d._v("\n          "+d._s(d.productTabList.WTB.WTBText)+"\n        ")])]):d._e(), d._v(" "), d.isShowCTO?m("a", {
				class:[d.$style.ecButton, d.$style.whereToBuyBTN], attrs: {
					href: d.productTabList.CTO.ButtonLink
				}
				, nativeOn: {
					click:function(e) {
						return d.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:"product_menu/"+d.productTabList.ModelName+"/whereToBuy-"+d.productTabList.CTO.ButtonText, event_value_DL:"0"
						}
						)
					}
				}
			}
			, [d._v("\n        "+d._s(d.productTabList.CTO?d.productTabList.CTO.ButtonText:"")+"\n      ")]):d._e(), d._v(" "), ""!==d.productTabList.Buy.ButtonLink&&"WhereToBuy"!==d.$route.name?m("SolidButton", {
				class:[d.$style.ecButton, d.$style.buyBTN], attrs: {
					theme: "PrimaryAzure", href:d.productTabList.Buy.ButtonLink, needCallEvent:!0
				}
				, on: {
					click:function(e) {
						d.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:"product_menu/"+d.productTabList.ModelName+"/buyButton-"+d.productTabList.Buy.ButtonText, event_value_DL:"0"
						}
						), d.gaHmtPush(["_trackEvent", "buttons", "clicked", "product_menu/"+d.productTabList.ModelName+"/buyButton-"+d.productTabList.Buy.ButtonText])
					}
				}
			}
			, [d._v("\n        "+d._s(d.productTabList.Buy.ButtonText)+"\n      ")]):d._e()], 1)]):d._e()])
		}
		), [], !1, (function(e) {
			this.$style=k.default.locals||k.default
		}
		), null, null).exports, N=function() {
			var e=function(t, b) {
				return(e=Object.setPrototypeOf|| {
					__proto__: []
				}
				instanceof Array&&function(e, b) {
					e.__proto__=b
				}
				||function(e, b) {
					for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])
				}
				)(t, b)
			}
			;
			return function(t, b) {
				function o() {
					this.constructor=t
				}
				e(t, b), t.prototype=null===b?Object.create(b):(o.prototype=b.prototype, new o)
			}
		}
		(), O=function(e, t, o, desc) {
			var r, c=arguments.length, l=c<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, o):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e, t, o, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(r=e[i])&&(l=(c<3?r(l): c>3?r(t, o, l):r(t, o))||l);
			return c>3&&l&&Object.defineProperty(t, o, l), l
		}
		, $=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.isDropDownListExpand=!1, t.overviewSubTab=[], t.wordLevelChangeFlag=!1, t.tabList=r, t
			}
			return N(t, e), t.prototype.updated=function() {
				this.changModelNameLineHeight()
			}
			, t.prototype.mounted=function() {
				this.changModelNameLineHeight()
			}
			, Object.defineProperty(t.prototype, "isPageDarkTheme", {
				get:function() {
					return"Dark"===this.themeColor
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.collapseDropDownList=function() {
				this.isDropDownListExpand=!1
			}
			, t.prototype.setOverviewTab=function() {
				var e=this;
				this.productTabList.TabList&&this.productTabList.TabList.forEach((function(t) {
					t.SubTab&&t.SubTab.length>0&&(e.overviewSubTab=t.SubTab)
				}
				))
			}
			, t.prototype.changModelNameLineHeight=function() {
				this.modelNameContoainer=this.$refs.modelNameContoainer, this.modelName=this.$refs.modelName, this.modelName&&this.modelNameContoainer&&this.modelName.offsetWidth>=this.modelNameContoainer.offsetWidth&&(this.wordLevelChangeFlag=!0)
			}
			, t.prototype.isTabActived=function(e) {
				var t=this.$route.params.contentName===e.Link, o=this.$route.name===this.tabList[e.Webpath], r=this.$route.name===this.tabList[e.WebPath];
				return"ProductTab"===e.WebPath?t: o||r
			}
			, t.prototype.dropDownListToggle=function() {
				this.isDropDownListExpand=!this.isDropDownListExpand
			}
			, t.prototype.routerRedirect=function(e, t) {
				var o=this.$route.params.levelOneTopMenuName, r=this.$route.params.levelTwoProductLineName, n=this.$route.params.seriesName, c=this.$route.params.productModel, l=Object(y.a)(this.$route.params.region);
				switch(e) {
					case"overview": this.redirect("overview");
					break;
					case"specifications": this.redirect("techSpec");
					break;
					case"ProductTab": this.redirect("productTab", t);
					break;
					case"review": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c+"/review";
					break;
					case"support": this.routerPush("support")
				}
			}
			, t.prototype.routerPush=function(e) {
				switch(e) {
					case"review":this.$router.push( {
						name: "Review"
					}
					);
					break;
					case"support":this.$router.push( {
						name:"Helpdesk", params: {
							tabName: "_knowledge"
						}
					}
					)
				}
			}
			, t.prototype.redirect=function(e, t) {
				var o=this.$route.params.levelOneTopMenuName, r=this.$route.params.levelTwoProductLineName, n=this.$route.params.seriesName, c=this.$route.params.productModel, l=Object(y.a)(this.$route.params.region);
				switch(e) {
					case"overview": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c;
					break;
					case"techSpec": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c+"/techspec";
					break;
					case"productTab": window.location.href=l+"/"+o+"/"+r+"/"+n+"/"+c+"/overview/"+t
				}
			}
			, O([Object(c.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), O([Object(c.Getter)("productTabListGetter")], t.prototype, "productTabList", void 0), O([Object(c.Watch)("$route")], t.prototype, "collapseDropDownList", null), O([Object(c.Watch)("productTabList", {				immediate: !0			}			)], t.prototype, "setOverviewTab", null), t=O([Object(c.Component)( {				components: {					BorderButton: h.a, SolidButton:m.a				}			}			)], t)
		}
		(Object(c.mixins)(T.a)), B=o(909);
		var S=Object(D.a)($, (function() {
			var e, t, o, r, n, c, l=this, d=l.$createElement, h=l._self._c||d;
			return l.productTabList&&l.productTabList.TabList?h("div", {
				class:[l.$style.wrapper, (e= {}
				, e[l.$style.fill]=l.isDropDownListExpand, e), (t= {}
				, t[l.$style.black]=1===l.productTabList.EnableBlackVersion&&l.isPageDarkTheme, t)]
			}
			, [h("div", {				class:[l.$style.mask, (o= {}				, o[l.$style.active]=l.isDropDownListExpand, o)], on: {
					click:function(e) {
						return e.stopPropagation(), l.dropDownListToggle(e)
					}
				}
			}
			), l._v(" "), l.productTabList.ModelName?h("div", {
				class: l.$style.innerWrapper
			}
			, [h("div", {				ref: "modelNameContoainer", class:l.$style.modelNameContoainer			}			, [l.productTabList.ModelNameImage?h("img", {				class:l.$style.modelNameImage, attrs: {					src: l.productTabList.ModelNameImage, alt:l.productTabList.ModelName				}			}			):h("h1", {				ref:"modelName", class:[l.$style.modelName, (r= {}				, r[l.$style.modelName17px]=l.wordLevelChangeFlag, r)], on: {
					click:function(e) {
						return l.routerRedirect("overview")
					}
				}
			}
			, [l._v("\n        "+l._s(l.productTabList.ModelName)+"\n      ")])]), l._v(" "), h("div", {
				class: l.$style.ecButtonContainer
			}
			, [h("div", {				class:l.$style.expandButton, attrs: {					tabindex: "0"				}				, on: {					click:function(e) {						l.dropDownListToggle(), l.gaDataLayerPush( {							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:"display the product menu", event_value_DL:"0"						}						)					}				}			}			, [h("div", {				class:[l.$style.arrowDown, (n= {}				, n[l.$style.arrowUp]=l.isDropDownListExpand, n)]
			}
			)]), l._v(" "), ""!==l.productTabList.Buy.ButtonLink&&"WhereToBuy"!==l.$route.name?h("SolidButton", {
				class:[l.$style.ecButton, l.$style.buyBTN], attrs: {
					theme: "PrimaryAzure", href:l.productTabList.Buy.ButtonLink, needCallEvent:!0, tabindex:"0"
				}
				, on: {
					click:function(e) {
						l.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:"product_menu/"+l.productTabList.ModelName+"/buyButton-"+l.productTabList.Buy.ButtonText, event_value_DL:"0"
						}
						), l.gaHmtPush(["_trackEvent", "buttons", "clicked", "product_menu/"+l.productTabList.ModelName+"/buyButton-"+l.productTabList.Buy.ButtonText])
					}
				}
			}
			, [l._v("\n        "+l._s(l.productTabList.Buy.ButtonText)+"\n      ")]):l._e()], 1)]):l._e(), l._v(" "), h("div", {
				class:[l.$style.dropDownListWrapper, (c= {}
				, c[l.$style.expand]=l.isDropDownListExpand, c)]
			}
			, [h("ul", {				class: l.$style.list			}			, [0!==l.productTabList.WTB.WTBFlag&&"WhereToBuy"!==l.$route.name?h("nuxt-link", {				class:l.$style.listItem, attrs: {					tag:"li", to: {						name: "WhereToBuy"					}				}			}			, [l._v("\n        "+l._s(l.productTabList.WTB.WTBText)+"\n      ")]):l._e(), l._v(" "), l.overviewSubTab&&l.overviewSubTab.length>0?l._l(l.overviewSubTab, (function(e, t) {
				var o;
				return h("li", {
					key: "subTab-"+t, class:l.$style.listItem
				}
				, [h("div", {					class:[l.$style.tabItemLink, (o= {}					, o[l.$style.tabItemActive]=l.isTabActived(e), o)], attrs: {
						tabindex: "0"
					}
					, on: {
						click:function(t) {
							return l.routerRedirect(e.WebPath, e.Link)
						}
					}
				}
				, [l._v("\n            "+l._s(e.Name)+"\n          ")])])
			}
			)):l._e(), l._v(" "), l._l(l.productTabList.TabList, (function(e, t) {
				var o;
				return[e.SubTab.length?l._e():h("li", {
					key: "productTab-"+t+"-"+e.Name, class:l.$style.listItem
				}
				, [h("div", {					class:[l.$style.tabItemLink, (o= {}					, o[l.$style.tabItemActive]=l.isTabActived(e), o)], attrs: {
						tabindex: "0"
					}
					, on: {
						click:function(t) {
							l.routerRedirect(e.Webpath), l.gaDataLayerPush( {
								event: "data_layer_event", event_category_DL:"navigations", event_action_DL:"clicked", event_label_DL:"product_menu/"+e.Name, event_value_DL:"0"
							}
							), l.gaHmtPush(["_trackEvent", "navigations", "clicked", "product_menu/"+e.Name])
						}
					}
				}
				, [l._v("\n            "+l._s(e.Name)+"\n          ")])])]
			}
			))], 2)])]):l._e()
		}
		), [], !1, (function(e) {
			this.$style=B.default.locals||B.default
		}
		), null, null).exports, C=function() {
			var e=function(t, b) {
				return(e=Object.setPrototypeOf|| {
					__proto__: []
				}
				instanceof Array&&function(e, b) {
					e.__proto__=b
				}
				||function(e, b) {
					for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])
				}
				)(t, b)
			}
			;
			return function(t, b) {
				function o() {
					this.constructor=t
				}
				e(t, b), t.prototype=null===b?Object.create(b):(o.prototype=b.prototype, new o)
			}
		}
		(), M=function(e, t, o, desc) {
			var r, c=arguments.length, l=c<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, o):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e, t, o, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(r=e[i])&&(l=(c<3?r(l): c>3?r(t, o, l):r(t, o))||l);
			return c>3&&l&&Object.defineProperty(t, o, l), l
		}
		, A=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.subTabListToDisplay=[], t.isOpenSubTabList=!1, t.isStick=!1, t.breakPointHeaderTablet=parseInt(v.a.breakPointHeaderTablet, 10), t.pathArray=[], t.productTabListData= {}
				, t.windowWidth=0, t.websiteCode="", t.NDAAuth="", t
			}
			return C(t, e), t.prototype.created=function() {
				this.websiteCode=Object(y.b)(this.$route.params.region)
			}
			, t.prototype.mounted=function() {
				this.menuStickToggle(), window.addEventListener("scroll", this.menuStickToggle), window.addEventListener("resize", d()(this.getWindowWidth, 100, {
					trailing: !0
				}
				)), this.getWindowWidth()
			}
			, Object.defineProperty(t.prototype, "isPageDarkTheme", {
				get:function() {
					return"Dark"===this.themeColor
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.setNDAAuth=function() {
				this.NDAAuth=this.getNDAAuth
			}
			, t.prototype.toggleSubTab=function(e, t) {
				switch(void 0===t&&(t=[]), e) {
					case"open": this.subTabListToDisplay=t, this.isOpenSubTabList=!0;
					break;
					case"close": this.isOpenSubTabList=!1
				}
			}
			, t.prototype.menuStickToggle=function() {
				var e=document.getElementsByTagName("html")[0].clientWidth, t=document.getElementById("cookie-policy-info"), o=t?t.offsetHeight: 0;
				e<=this.breakPointHeaderTablet?window.pageYOffset>=48?this.isStick=!0: this.isStick=!1:window.pageYOffset>=85+o?this.isStick=!0:this.isStick=!1
			}
			, t.prototype.getWindowWidth=function() {
				this.windowWidth=window.innerWidth
			}
			, M([Object(c.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), M([Object(c.Getter)("productTabListGetter")], t.prototype, "productTabList", void 0), M([Object(c.Getter)("NDAAuthGetter")], t.prototype, "getNDAAuth", void 0), M([Object(c.Watch)("getNDAAuth", {				immediate: !0			}			)], t.prototype, "setNDAAuth", null), t=M([Object(c.Component)( {				components: {					LevelFourProductPageHeaderDesktop: W, LevelFourProductPageHeaderTabletAndMobile:S				}			}			)], t)
		}
		(c.Vue), H=o(910);
		var x=Object(D.a)(A, (function() {
			var e, t=this, o=t.$createElement, r=t._self._c||o;
			return r("div", {
				ref:"levelFourProductPageHeaderWrapper", staticClass:"asusOfficialProductMenu", class:[t.$style.wrapper, (e= {}
				, e[t.$style.stick]=t.isStick, e)], style:[t.isPageDarkTheme? {					"background-color": "rgba(0, 0, 0, "+t.productTabList.Opacity+")"				}				: {					"background-color": "rgba(255, 255, 255, "+t.productTabList.Opacity+")"				}				]
			}
			, [t.windowWidth>1023&&t.productTabList.ProductID?r("LevelFourProductPageHeaderDesktop", {				class:t.$style.desktop, attrs: {					rwdWidth: t.windowWidth				}			}			):t._e(), t._v(" "), t.windowWidth<=1023&&t.productTabList.ProductID?r("LevelFourProductPageHeaderTabletAndMobile", {				class: t.$style.tabletAndMobile			}			):t._e()], 1)
		}
		), [], !1, (function(e) {
			this.$style=H.default.locals||H.default
		}
		), null, null).exports, F=o(589), j=o(591), I=o(1), R=function() {
			var e=function(t, b) {
				return(e=Object.setPrototypeOf|| {
					__proto__: []
				}
				instanceof Array&&function(e, b) {
					e.__proto__=b
				}
				||function(e, b) {
					for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])
				}
				)(t, b)
			}
			;
			return function(t, b) {
				function o() {
					this.constructor=t
				}
				e(t, b), t.prototype=null===b?Object.create(b):(o.prototype=b.prototype, new o)
			}
		}
		(), E=function(e, t, o, desc) {
			var r, c=arguments.length, l=c<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, o):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e, t, o, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(r=e[i])&&(l=(c<3?r(l): c>3?r(t, o, l):r(t, o))||l);
			return c>3&&l&&Object.defineProperty(t, o, l), l
		}
		, G=function(e, t, o, r) {
			return new(o||(o=Promise))((function(n, c) {
				function l(e) {
					try {
						h(r.next(e))
					}
					catch(e) {
						c(e)
					}
				}
				function d(e) {
					try {
						h(r.throw(e))
					}
					catch(e) {
						c(e)
					}
				}
				function h(e) {
					var t;
					e.done?n(e.value):(t=e.value, t instanceof o?t:new o((function(e) {
						e(t)
					}
					))).then(l, d)
				}
				h((r=r.apply(e, t||[])).next())
			}
			))
		}
		, U=function(e, body) {
			var t, o, r, g, n= {
				label:0, sent:function() {
					if(1&r[0])throw r[1];
					return r[1]
				}
				, trys:[], ops:[]
			}
			;
			return g= {
				next: c(0), throw:c(1), return:c(2)
			}
			, "function"==typeof Symbol&&(g[Symbol.iterator]=function() {
				return this
			}
			), g;
			function c(c) {
				return function(l) {
					return function(c) {
						if(t)throw new TypeError("Generator is already executing.");
						for(;
						n;
						)try {
							if(t=1, o&&(r=2&c[0]?o.return: c[0]?o.throw||((r=o.return)&&r.call(o), 0):o.next)&&!(r=r.call(o, c[1])).done)return r;
							switch(o=0, r&&(c=[2&c[0], r.value]), c[0]) {
								case 0: case 1:r=c;
								break;
								case 4:return n.label++, {
									value: c[1], done:!1
								}
								;
								case 5:n.label++, o=c[1], c=[0];
								continue;
								case 7:c=n.ops.pop(), n.trys.pop();
								continue;
								default:if(!(r=n.trys, (r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])) {
									n=0;
									continue
								}
								if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])) {
									n.label=c[1];
									break
								}
								if(6===c[0]&&n.label<r[1]) {
									n.label=r[1], r=c;
									break
								}
								if(r&&n.label<r[2]) {
									n.label=r[2], n.ops.push(c);
									break
								}
								r[2]&&n.ops.pop(), n.trys.pop();
								continue
							}
							c=body.call(e, n)
						}
						catch(e) {
							c=[6, e], o=0
						}
						finally {
							t=r=0
						}
						if(5&c[0])throw c[1];
						return {
							value: c[0]?c[1]:void 0, done:!0
						}
					}
					([c, l])
				}
			}
		}
		, z=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.websiteCode="", t.windowWidth=0, t.isShowScrollTop=!0, t.pathArray=[], t.productTabList= {}
				, t.onlineChat= {
					URL: "TEST"
				}
				, t.isOverviewPage=!0, t
			}
			return R(t, e), t.prototype.asyncData=function(e) {
				return G(this, void 0, Promise, (function() {
					var t, o, r, n, c, l, d, h, m, _, v;
					return U(this, (function(f) {
						switch(f.label) {
							case 0:return t=e.params, o=e.route, r=e.env, n=e.store, c=e.redirect, l=Object(y.b)(t.region), void 0===o.query.apilist||"odinapi.asus.com"===r.baseUrl||"odinapi.asus.com.cn"===r.baseUrl?[3, 2]:[4, e.store.dispatch("getAPIList", {
								pageName: o.name, websiteCode:l, URL:"https://www.asus.com"+o.fullPath, fullPath:o.fullPath, reviewType:t.reviewtype?t.reviewtype:"", productLevel1Code:t.levelOneTopMenuName, productLevel2Code:t.levelTwoProductLineName, seriesWebPath:t.seriesName, productWebPath:t.productModel?t.productModel:"", tabWebpath:"ProductTab"===o.name?t.contentName:""
							}
							)];
							case 1:f.sent(), f.label=2;
							case 2:if(d="", -1!==r.baseUrl.indexOf("odinviewapi.asus.com")||-1!==r.baseUrl.indexOf("stage-asgardapi.asus.com"))try {
								d=e.req.headers.authorization?e.req.headers.authorization.split(" ")[1]: "", n.commit("setNDAAuth", d)
							}
							catch(e) {
								console.error(e)
							}
							return[4, I.a.getTopMenu( {								params: {									SystemCode: "asus", WebsiteCode:l								}							}							).then((function(e) {								void 0===e?c(302, "https://dlcdnimgs.asus.com/websites/server_500.html"): n.commit("setTopMenuData", e)							}							))];
							case 3:return f.sent(), [4, e.store.dispatch("getFooterData", {								params: {									SystemCode: "asus", WebsiteCode:l, FooterPosition:0								}							}							)];
							case 4:return f.sent(), [4, e.store.dispatch("getBottomListData", {								params: {									SystemCode: "asus", WebsiteCode:l								}							}							)];
							case 5:return f.sent(), [4, e.store.dispatch("getBreadcrumbData", {								params: {									SystemCode: "asus", WebsiteCode:l, URL:"https://www.asus.com"+o.fullPath								}							}							)];
							case 6:return f.sent(), h="", h="Overview"===o.name?"o":"Review"===o.name||"ReviewSingle"===o.name?"r":"", [4, I.a.getPDReview( {								params: {									SystemCode: "asus", WebsiteCode:l, ProductWebpath:t.productModel, PageType:h								}								, headers: {									NDAAuth: d								}							}							).then((function(e) {								void 0===e?c(302, "https://dlcdnimgs.asus.com/websites/server_500.html"): n.commit("setProductReviewData", e)							}							))];
							case 7:return f.sent(), m=t.productModel, _=m, -1!==m.indexOf("(")&&(_=_.replace("(", "（")), -1!==m.indexOf(")")&&(_=_.replace(")", "）")), [4, I.a.getPDTabList( {								params: {									SystemCode: "asus", WebsiteCode:l, ProductLevel1Code:t.levelOneTopMenuName, ProductLevel2Code:t.levelTwoProductLineName, SeriesWebPath:"SupportOnly"===o.name?"supportonly":t.seriesName, ProductWebPath:_, ProductTabWebPath:"ProductTab"===o.name?t.contentName:""								}								, headers: {									NDAAuth: d								}							}							).then((function(e) {								void 0===e?c(302, "https://dlcdnimgs.asus.com/websites/server_500.html"): n.commit("setProductTabListData", e)							}							))];
							case 8:return f.sent(), v="global"===l?"/":"/"+l+"/", n.getters.productTabListGetter&&null===n.getters.productTabListGetter.ProductID&&c(301, {
								path: ""+v
							}
							), [2]
						}
					}
					))
				}
				))
			}
			, t.prototype.created=function() {
				this.websiteCode=Object(y.b)(this.$route.params.region)
			}
			, t.prototype.mounted=function() {
				var e=this;
				window.addEventListener("resize", d()(this.setWindowWidth, 100, {
					trailing: !0
				}
				)), this.setWindowWidth(), this.$nextTick((function() {
					"Overview"===e.$route.name?e.isOverviewPage=!0: e.isOverviewPage=!1
				}
				))
			}
			, t.prototype.beforeDestroy=function() {
				window.removeEventListener("resize", this.setWindowWidth), this.MutationProductTabListData( {
					data: {
						Result: {}
					}
				}
				)
			}
			, Object.defineProperty(t.prototype, "getMDADataGetter", {
				get:function() {
					return this.$store.state.MDA.MDA
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "getIsScrollToTop", {
				get:function() {
					return this.$store.getters.productTabListGetter.IsShowGoToTop
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.windowReload=function() {
				"Overview"===this.$route.name?this.isOverviewPage=!0: this.isOverviewPage=!1
			}
			, t.prototype.setIsShowScrollTop=function() {
				this.isOverviewPage?this.isShowScrollTop=this.getIsScrollToTop: this.isShowScrollTop=!0
			}
			, t.prototype.setWindowWidth=function() {
				this.windowWidth=window.innerWidth
			}
			, E([Object(c.Getter)("onlineChatDataGetter")], t.prototype, "onlineChatDataGetter", void 0), E([Object(c.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), E([Object(c.Mutation)("setProductTabListData")], t.prototype, "MutationProductTabListData", void 0), E([Object(c.Watch)("$route")], t.prototype, "windowReload", null), E([Object(c.Watch)("getIsScrollToTop", {				immediate: !0			}			)], t.prototype, "setIsShowScrollTop", null), t=E([Object(c.Component)( {				components: {					LevelFourProductPageHeader: x, OnlineChat:j.a, ScrollTop:F.a				}			}			)], t)
		}
		(c.Vue), J=o(911);
		var V=Object(D.a)(z, (function() {
			var e=this, t=e.$createElement, o=e._self._c||t;
			return e.getMDADataGetter?o("div", {
				class: [e.$style.wrapper, e.$style["theme"+e.themeColor]]
			}
			, [o("LevelFourProductPageHeader"), e._v(" "), e.$route.params.levelOneTopMenuName&&e.getMDADataGetter.MDANameHtml?o("div", {				class: e.$style.MDA			}			, [o("div", {				class:e.$style.MDANameHtml, domProps: {					innerHTML: e._s(e.getMDADataGetter.MDANameHtml)				}			}			)]):e._e(), e._v(" "), o("router-view"), e._v(" "), e.isOverviewPage?e._e():o("ScrollTop", {
				style:[e.isShowScrollTop||!e.isOverviewPage? {
					display: "unset"
				}
				: {
					display: "none"
				}
				], attrs: {
					hasChat: "co"===e.websiteCode||"cl"===e.websiteCode
				}
			}
			), e._v(" "), !e.isOverviewPage&&e.onlineChat.URL?o("OnlineChat", {
				style:[e.isShowScrollTop? {
					display: "unset"
				}
				: {
					display: "none"
				}
				], attrs: {
					rwdWidth: e.windowWidth
				}
			}
			):e._e()], 1):e._e()
		}
		), [], !1, (function(e) {
			this.$style=J.default.locals||J.default
		}
		), null, null);
		t.default=V.exports
	}
	, 687:function(e, t, o) {
		e.exports= {
			fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"LevelFourProductPageHeaderDesktop__wrapper__B0HQg", mainTab:"LevelFourProductPageHeaderDesktop__mainTab__D-Ulu", tabItem:"LevelFourProductPageHeaderDesktop__tabItem__1nItb", tabItemLink:"LevelFourProductPageHeaderDesktop__tabItemLink__2FT_1", modelNameContainer:"LevelFourProductPageHeaderDesktop__modelNameContainer__C0N01", modelName:"LevelFourProductPageHeaderDesktop__modelName__1L-le", innerWrapper:"LevelFourProductPageHeaderDesktop__innerWrapper__3r9zR", black:"LevelFourProductPageHeaderDesktop__black__3lK1m", active:"LevelFourProductPageHeaderDesktop__active__1V3Ai", tabItemActive:"LevelFourProductPageHeaderDesktop__tabItemActive__2SqgO", arrowDown:"LevelFourProductPageHeaderDesktop__arrowDown__3Fs0n", subTab:"LevelFourProductPageHeaderDesktop__subTab__2GvWz", closeBtn:"LevelFourProductPageHeaderDesktop__closeBtn__2QohJ", closeBtnImage:"LevelFourProductPageHeaderDesktop__closeBtnImage__3GNtG", ecButtonContainer:"LevelFourProductPageHeaderDesktop__ecButtonContainer__ofjz3", whereToBuyBTN:"LevelFourProductPageHeaderDesktop__whereToBuyBTN__18LaC", modelName17px:"LevelFourProductPageHeaderDesktop__modelName17px__weY40", modelNameImage:"LevelFourProductPageHeaderDesktop__modelNameImage__37F1R", productTabListContainer:"LevelFourProductPageHeaderDesktop__productTabListContainer__3y1ff", tabListContainer:"LevelFourProductPageHeaderDesktop__tabListContainer__1A7NO", up:"LevelFourProductPageHeaderDesktop__up__2WIgE", moveToStart:"LevelFourProductPageHeaderDesktop__moveToStart__3FDt6", subNavContainer:"LevelFourProductPageHeaderDesktop__subNavContainer__1sKQt", ecButton:"LevelFourProductPageHeaderDesktop__ecButton__2pDut", buyBTN:"LevelFourProductPageHeaderDesktop__buyBTN__2wkv7", whereToBuyDiffBTN:"LevelFourProductPageHeaderDesktop__whereToBuyDiffBTN__3Gl5f", normal:"LevelFourProductPageHeaderDesktop__normal__1jaei", btnText:"LevelFourProductPageHeaderDesktop__btnText__34TzW"
		}
	}
	, 688:function(e, t, o) {
		e.exports= {
			fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"LevelFourProductPageHeaderTabletAndMobile__wrapper__1Z9hv", innerWrapper:"LevelFourProductPageHeaderTabletAndMobile__innerWrapper__1XAU5", modelNameContoainer:"LevelFourProductPageHeaderTabletAndMobile__modelNameContoainer__1wNdh", modelName:"LevelFourProductPageHeaderTabletAndMobile__modelName__29wqt", black:"LevelFourProductPageHeaderTabletAndMobile__black__Lwled", fill:"LevelFourProductPageHeaderTabletAndMobile__fill__dYnQi", mask:"LevelFourProductPageHeaderTabletAndMobile__mask__2gc-Z", ecButtonContainer:"LevelFourProductPageHeaderTabletAndMobile__ecButtonContainer__w_0Zt", expandButton:"LevelFourProductPageHeaderTabletAndMobile__expandButton__1WIkB", arrowDown:"LevelFourProductPageHeaderTabletAndMobile__arrowDown__re7qQ", dropDownListWrapper:"LevelFourProductPageHeaderTabletAndMobile__dropDownListWrapper__1bpjJ", expand:"LevelFourProductPageHeaderTabletAndMobile__expand__2OdOl", list:"LevelFourProductPageHeaderTabletAndMobile__list__1Kwtn", listItem:"LevelFourProductPageHeaderTabletAndMobile__listItem__2rXyt", tabItemLink:"LevelFourProductPageHeaderTabletAndMobile__tabItemLink__3VdfV", tabItemActive:"LevelFourProductPageHeaderTabletAndMobile__tabItemActive__3Mgtn", active:"LevelFourProductPageHeaderTabletAndMobile__active__3P0v6", modelName17px:"LevelFourProductPageHeaderTabletAndMobile__modelName17px__2M0ZQ", modelNameImage:"LevelFourProductPageHeaderTabletAndMobile__modelNameImage__L2bou", arrowUp:"LevelFourProductPageHeaderTabletAndMobile__arrowUp__CqBzB", ecButton:"LevelFourProductPageHeaderTabletAndMobile__ecButton__3zii8", buyBTN:"LevelFourProductPageHeaderTabletAndMobile__buyBTN__1ffel"
		}
	}
	, 689:function(e, t, o) {
		e.exports= {
			fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"LevelFourProductPageHeader__wrapper__1tvNu", stick:"LevelFourProductPageHeader__stick__2Daul", tabletAndMobile:"LevelFourProductPageHeader__tabletAndMobile__1XEK1", desktop:"LevelFourProductPageHeader__desktop__3fx69"
		}
	}
	, 690:function(e, t, o) {
		e.exports= {
			fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"LevelFourProductPage__wrapper__1C9P7", MDA:"LevelFourProductPage__MDA__sKq1k", themeWhite:"LevelFourProductPage__themeWhite__1M-qy"
		}
	}
	, 908:function(e, t, o) {
		"use strict";
		var r=o(687), n=o.n(r);
		t.default=n.a
	}
	, 909:function(e, t, o) {
		"use strict";
		var r=o(688), n=o.n(r);
		t.default=n.a
	}
	, 910:function(e, t, o) {
		"use strict";
		var r=o(689), n=o.n(r);
		t.default=n.a
	}
	, 911:function(e, t, o) {
		"use strict";
		var r=o(690), n=o.n(r);
		t.default=n.a
	}
}

]);