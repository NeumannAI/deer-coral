				(window.webpackJsonp_cj86gji4=window.webpackJsonp_cj86gji4||[]).push([[1], {
	558:function(e, t, r) {
		"use strict";
		r.r(t);
		r(27), r(13), r(24);
		var o, n=r(4), l=r(0), c=r(111), d=r.n(c), h=(r(61), r(17), r(45), r(757)), m=r(598), _=r(590), f=r(14), C=(o=function(e, b) {
			return(o=Object.setPrototypeOf|| {
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
			o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), y=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, v=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.currentImageIndex=1, t.widthData=0, t.carouselWidth=0, t.lastItemNum=0, t.itemWidth=0, t.itemHeight=0, t.videoImageHeight=227, t.videoTextHeight=64, t.itemPaddingRight=12, t.itemPaddingBottom=20, t.carouselHeight=0, t.carouselInnerHeight=0, t.totalItem=0, t.totalSlide=1, t.pagesize=6, t.movesize=1, t.loop=!1, t.rwdState="", t.propVideoUrl="", t.isRTL=!1, t
			}
			return C(t, e), t.prototype.created=function() {
				this.isRTL=this.$store.getters.RTLGetter
			}
			, t.prototype.mounted=function() {
				window&&window.scroll( {
					top: 0, left:0, behavior:"smooth"
				}
				);
				var element=this.$refs.image_carousel;
				this.widthData=element.offsetWidth, "video"===this.productReviewType&&(this.itemPaddingBottom=12), this.reloadSource()
			}
			, Object.defineProperty(t.prototype, "getproductReviewResult", {
				get:function() {
					return this.productReviewResult&&(this.totalItem=this.productReviewResult.length), this.productReviewResult
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "isProductReviewResultOverflow", {
				get:function() {
					return!(this.productReviewResult.length<=this.pagesize/2)
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.setproductReviewResult=function() {
				this.resetTotalSlide()
			}
			, t.prototype.reloadSource=function() {
				this.rwdWidth>=1200?this.rwdState="desktop": this.rwdWidth>768&&this.rwdWidth<1200?this.rwdState="tablet":this.rwdState="mobile", this.currentImageIndex=1, this.resetCarousel(), this.resetTotalSlide()
			}
			, t.prototype.getVideoId=function(e) {
				if(e) {
					var t="";
					return-1!==e.indexOf("embed/")&&(t=(e||"").split("embed/")[1], -1!==e.indexOf("?")&&(t=(e||"").split("?")[0])), t
				}
				return""
			}
			, t.prototype.setImg=function(i) {
				this.currentImageIndex=i
			}
			, t.prototype.checkSwipe=function(e) {
				switch(e) {
					case"left": this.isRTL?this.prevImg():this.nextImg();
					break;
					case"right": this.isRTL?this.nextImg():this.prevImg()
				}
			}
			, t.prototype.nextImg=function() {
				this.currentImageIndex++, this.currentImageIndex>this.totalSlide&&(!0===this.loop?this.currentImageIndex=1: this.currentImageIndex=this.totalSlide)
			}
			, t.prototype.prevImg=function() {
				this.currentImageIndex--, this.currentImageIndex<=0&&(!0===this.loop?this.currentImageIndex=this.totalSlide: this.currentImageIndex=1)
			}
			, t.prototype.resetCarousel=function() {
				var element=this.$refs.image_carousel;
				element&&(this.widthData=element.offsetWidth), this.carouselWidth=this.widthData, this.rwdWidth>=1260?(this.pagesize=6, this.videoTextHeight=64, this.itemWidth=(this.widthData-2*this.itemPaddingRight)/3, this.itemHeight=249, this.videoImageHeight=.5625*this.itemWidth, this.videoTextHeight=64, this.lastItemNum=this.totalItem%(this.pagesize/2)): this.rwdWidth>=732?(this.pagesize=4, this.itemWidth=(this.widthData-this.itemPaddingRight)/2, this.itemHeight=261, this.videoImageHeight=.5625*this.itemWidth, this.videoTextHeight=68, this.lastItemNum=this.totalItem%(this.pagesize/2)):this.rwdWidth<732&&this.rwdWidth>=516?(this.pagesize=2, this.itemWidth=490, this.itemHeight=261, this.videoImageHeight=.5625*this.itemWidth, this.videoTextHeight=68, this.carouselWidth=this.itemWidth, this.lastItemNum=0):(this.pagesize=2, this.itemWidth=this.widthData, this.itemHeight=261, this.videoTextHeight=68, this.videoImageHeight=.5625*this.itemWidth, this.carouselWidth=this.itemWidth, this.lastItemNum=0), "video"===this.productReviewType&&(this.itemHeight=this.videoImageHeight+this.videoTextHeight), "video"===this.productReviewType&&(2===this.productReviewResult.length&&this.rwdWidth>=1260&&(this.itemWidth=612, this.videoTextHeight=64), 1===this.productReviewResult.length&&this.rwdWidth>=732&&(this.itemWidth=820, this.videoTextHeight=64), this.videoImageHeight=.5625*this.itemWidth, this.itemHeight=this.videoImageHeight+this.videoTextHeight), 1===this.productReviewResult.length&&this.rwdWidth>=732&&(this.carouselWidth=this.itemWidth), this.pagesize>1&&(this.productReviewResult.length>this.pagesize/2?this.carouselInnerHeight=2*this.itemHeight+this.itemPaddingBottom:this.carouselInnerHeight=this.itemHeight), this.resetTotalSlide()
			}
			, t.prototype.resetTotalSlide=function() {
				this.rwdWidth>=1260?(this.totalSlide=Math.ceil(this.totalItem/this.pagesize), this.totalSlide>5&&(this.totalSlide=5)): this.rwdWidth>731?(this.totalSlide=Math.ceil(this.totalItem/this.pagesize), this.totalSlide>4&&(this.totalSlide=4)):(this.totalSlide=Math.ceil(this.totalItem/this.pagesize), this.totalSlide>8&&(this.totalSlide=8))
			}
			, t.prototype.LinkTrans=function(e, t, r) {
				(this.gaDataLayerPush( {
					event: "data_layer_event", event_category_DL:"internal-links", event_action_DL:"clicked", event_label_DL:r||t, event_value_DL:"0"
				}
				), this.gaHmtPush(["_trackEvent", "internal-links", "clicked", r||t]), "video"===e)&&this.$refs.lightbox.LinkTransChild(t)
			}
			, y([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), y([Object(l.Prop)()], t.prototype, "productReviewResult", void 0), y([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), y([Object(l.Prop)()], t.prototype, "productReviewType", void 0), y([Object(l.Watch)("getproductReviewResult")], t.prototype, "setproductReviewResult", null), y([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), t=y([Object(l.Component)( {				components: {					LightboxYouTube: h.a, CarouselArrows:m.a, Indicator:_.a				}			}			)], t)
		}
		(Object(l.mixins)(f.a)), I=r(923), S=r(8);
		var P=Object(S.a)(v, (function() {
			var e=this, t=e.$createElement, r=e._self._c||t;
			return r("v-touch", {
				attrs: {
					enabled: {
						swipeleft: !0, swiperight:!0
					}
				}
				, on: {
					swipeleft:function(t) {
						e.rwdWidth<1280&&e.checkSwipe("left")
					}
					, swiperight:function(t) {
						e.rwdWidth<1280&&e.checkSwipe("right")
					}
				}
			}
			, [r("div", {				class:[e.$style.layoutBox, e.$style.productReview, e.$style["theme"+e.themeColor]], style:[1===e.productReviewResult.length&&e.rwdWidth>=732? {					"max-width": "820px"				}				: {}				]
			}
			, [r("div", {				ref: "image_carousel", class:[e.$style.imageCarousel, e.$style[e.productReviewType], e.$style[e.$route.name], e.$style["theme"+e.themeColor]]
			}
			, [r("div", {				class:e.$style.layoutCarousel, style: {					height: e.carouselInnerHeight+"px", width:e.carouselWidth+"px"				}			}			, [e.productReviewResult?r("div", {				ref:"inner", class:e.$style.productReviewInner, style:[!1===e.isRTL? {					left: -e.widthData*(e.currentImageIndex-1)+"px"				}				: {					right: -e.widthData*(e.currentImageIndex-1)+"px"				}				, {					height: e.carouselInnerHeight+"px", width:e.carouselWidth*e.totalSlide+"px"				}				]
			}
			, e._l(e.totalSlide, (function(t) {
				var o, n;
				return r("div", {
					key:t, class:[e.$style.productReviewInnerBox, (o= {}
					, o[e.$style.totalItemTwo]=2===e.productReviewResult.length&&e.rwdWidth>=1260, o), (n= {}
					, n[e.$style.totalItemsingle]=1===e.productReviewResult.length&&e.rwdWidth>=732, n)], style: {
						height: e.carouselInnerHeight+"px", width:e.carouselWidth+"px"
					}
				}
				, [e._l(e.pagesize, (function(o) {					return[e.productReviewResult[(t-1)*e.pagesize+o-1]?r("a", {
						key:o, attrs: {
							href: "video"!==e.productReviewType&&e.productReviewResult[(t-1)*e.pagesize+o-1].link, target:"video"!==e.productReviewType&&"_blank", tabIndex:"video"===e.productReviewType&&0
						}
						, on: {
							click:function(r) {
								e.LinkTrans(e.productReviewType, e.productReviewResult[(t-1)*e.pagesize+o-1].link, e.productReviewResult[(t-1)*e.pagesize+o-1].comments)
							}
							, keyup:function(r) {
								if(!r.type.indexOf("key")&&e._k(r.keyCode, "enter", 13, r.key, "Enter"))return null;
								e.LinkTrans(e.productReviewType, e.productReviewResult[(t-1)*e.pagesize+o-1].link, e.productReviewResult[(t-1)*e.pagesize+o-1].comments)
							}
						}
					}
					, [r("div", {						key:o, class:[e.$style.productReviewItem, e.$style[e.productReviewType+"ReviewItem"], e.$style["theme"+e.themeColor]], style:[ {							backgroundPosition: "center"						}						, {							height: e.itemHeight+"px"						}						, {							width: e.itemWidth+"px"						}						]
					}
					, ["video"!==e.productReviewType?r("div", [r("div", {						class: e.$style.contentImage					}					, [r("div", {						class: e.$style.imageBox					}					, [r("img", {						attrs: {							src: ""+e.productReviewResult[(t-1)*e.pagesize+o-1].imagelink, loading:"lazy"
						}
					}
					)])]), e._v(" "), r("div", {
						class: [e.$style.scenarioContent, e.$style["theme"+e.themeColor]]
					}
					, [r("div", {						class: [e.$style.contentTitle, e.$style["theme"+e.themeColor]]
					}
					, [e._v("\n                        "+e._s(e.productReviewResult[(t-1)*e.pagesize+o-1].comments)+"\n                      ")])])]):e._e(), e._v(" "), "video"===e.productReviewType?r("div", [r("div", {						class:e.$style.videoWrapper, style:[ {							width: e.itemWidth+"px"						}						, {							height: e.videoImageHeight+"px"						}						]
					}
					, [r("div", {						class:e.$style.videoBox, style: {							height: e.videoImageHeight+"px", backgroundImage:"url(https://i3.ytimg.com/vi/"+e.getVideoId(e.productReviewResult[(t-1)*e.pagesize+o-1].link)+"/maxresdefault.jpg)"
						}
					}
					), e._v(" "), r("div", {
						class: e.$style.playVedioButton
					}
					)]), e._v(" "), r("div", {
						class:[e.$style.scenarioVideoContent, e.$style["theme"+e.themeColor]], style:[ {
							height: e.videoTextHeight+"px"
						}
						]
					}
					, [r("div", {						class: [e.$style.contentTitle, e.$style["theme"+e.themeColor]]
					}
					, [e._v("\n                        "+e._s(e.productReviewResult[(t-1)*e.pagesize+o-1].comments)+"\n                      ")])])]):e._e()])]):e._e()]
				}
				))], 2)
			}
			)), 0):e._e()]), e._v(" "), r("LightboxYouTube", {
				ref:"lightbox", attrs: {
					propVideoUrl: e.propVideoUrl, "show-light-box":!0, "rwd-width":e.rwdWidth
				}
			}
			)], 1), e._v(" "), r("CarouselArrows", {
				attrs: {
					enableControllButton: e.rwdWidth>=1260, enablePrevButton:(e.currentImageIndex>1||e.loop)&&e.totalSlide>1, enableNextButton:(e.currentImageIndex!==e.totalSlide||e.loop)&&e.totalSlide>1
				}
				, on: {
					clickPrev:function(t) {
						return e.checkSwipe("right")
					}
					, clickNext:function(t) {
						return e.checkSwipe("left")
					}
				}
			}
			), e._v(" "), e.rwdWidth<1260&&e.totalSlide>1?r("div", {
				class: [e.$style.imageCarousel, e.$style.imageCarouselindicator]
			}
			, [r("Indicator", {				ref:"indicator", class:[e.$style.indicator, e.$style["indicator"+e.productReviewType]], attrs: {
					autoPlay: !1, currentSlide:e.currentImageIndex, totalSlide:e.totalSlide, rwdWidth:e.rwdWidth
				}
				, on: {
					slideToEvent: e.setImg
				}
			}
			)], 1):e._e()], 1)])
		}
		), [], !1, (function(e) {
			this.$style=I.default.locals||I.default
		}
		), null, null).exports, w=function() {
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
				function r() {
					this.constructor=t
				}
				e(t, b), t.prototype=null===b?Object.create(b):(r.prototype=b.prototype, new r)
			}
		}
		(), L=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, k=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.windowWidth=0, t.productReviewType="", t.productReviewResult= {}
				, t.selectedReviewTypeHover=!1, t.showList= {
					video: 1, award:1, custom:1, media:1
				}
				, t.isRTL=!1, t.rwdState="", t
			}
			return w(t, e), t.prototype.created=function() {
				this.isRTL=this.$store.getters.RTLGetter
			}
			, t.prototype.mounted=function() {
				window.addEventListener("resize", d()(this.onResize, 100, {
					trailing: !0
				}
				)), this.onResize(), this.gaDataLayerPush( {
					event: "data_layer_page_level_SPA", "Page Type":"L4 - review all", "Page Title":this.metaData.SEO?this.metaData.SEO.Title:void 0
				}
				), this.gaHmtPush(["_trackPageview", this.$route.fullPath]), "overView"===this.classType&&this.reviewShowList&&(this.showList=this.reviewShowList)
			}
			, t.prototype.beforeDestroy=function() {
				window.removeEventListener("resize", this.onResize)
			}
			, t.prototype.setProductReview=function() {
				this.productReviewResult=this.getProductReview
			}
			, t.prototype.reloadSource=function() {
				this.rwdWidth>=1200?this.rwdState="desktop": this.rwdWidth>768&&this.rwdWidth<1200?this.rwdState="tablet":this.rwdState="mobile"
			}
			, t.prototype.checkSeeAllShow=function(e) {
				if("Overview"===this.$route.name)return!0;
				switch(this.rwdState) {
					case"desktop": return this.productReviewResult.content[e].list.length>6;
					case"tablet": return this.productReviewResult.content[e].list.length>4;
					case"mobile": return this.productReviewResult.content[e].list.length>2
				}
				return!0
			}
			, t.prototype.onResize=function() {
				this.windowWidth=window.innerWidth, this.windowWidth>1200&&(this.selectedReviewTypeHover=!0)
			}
			, t.prototype.routerPush=function(e) {
				this.$router.push( {
					name:"ReviewSingle", params: {
						reviewtype: e.toLowerCase()
					}
				}
				)
			}
			, L([Object(l.Getter)("productReviewGetter")], t.prototype, "getProductReview", void 0), L([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), L([Object(l.Getter)("metaData")], t.prototype, "metaData", void 0), L([Object(l.Getter)("productTabListGetter")], t.prototype, "tabList", void 0), L([Object(l.Prop)()], t.prototype, "reviewShowList", void 0), L([Object(l.Prop)()], t.prototype, "classType", void 0), L([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), L([Object(l.Watch)("getProductReview", {				immediate: !0			}			)], t.prototype, "setProductReview", null), L([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), t=L([Object(l.Component)( {				components: {					ProductReviewListWithCarousel: P				}			}			)], t)
		}
		(Object(l.mixins)(f.a)), D=r(924);
		var x=Object(S.a)(k, (function() {
			var e=this, t=e.$createElement, r=e._self._c||t;
			return e.productReviewResult&&e.productReviewResult.content?r("div", {
				class: [e.$style.productReviewlayout, e.$style[e.classType], e.$style["theme"+e.themeColor]]
			}
			, [e._l(e.productReviewResult.content, (function(t, o) {				var n, l, c;				return[t&&""!==t.title&&t.list&&t.list.length>0&&1===e.showList[o]?[t.title?r("div", {					key: "title_"+o, class:[e.$style.productReviewTitle, e.$style["theme"+e.themeColor]]
				}
				, [e._v("\n        "+e._s(t.title)+"\n      ")]):e._e(), e._v(" "), t.list?r("ProductReviewListWithCarousel", {
					key:o, class:[(n= {}
					, n[e.$style.overViewMargin]="overView"===e.classType, n)], attrs: {
						rwdWidth: e.windowWidth, productReviewType:o.toLowerCase(), productReviewResult:t.list
					}
				}
				):e._e(), e._v(" "), t.seeall&&("overView"!==e.classType||"video"!==o)&&e.checkSeeAllShow(o)?r("div", {
					key:"buttom_"+o, class:[e.$style.productReviewSeeAll, (l= {}
					, l[e.$style.productReviewSeeAllVideo]="video"===o, l)]
				}
				, [r("a", {					key:"link_"+o, class:e.$style.nuxtLink, attrs: {						target: t.seeall.linkTarget, rel:"_blank"===t.seeall.linkTarget?"noreferrer noopener":""					}					, on: {						click:function(r) {							e.gaDataLayerPush( {								event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:t.title+"/"+t.seeall, event_value_DL:"0"							}							), e.routerPush(o)						}					}				}				, [e._v("\n          "+e._s(t.seeall)+"\n          "), r("svg", {					class:(c= {}					, c[e.$style.arrowRight]=e.isRTL, c), attrs: {
						xmlns: "http://www.w3.org/2000/svg", width:"12", height:"12", fill:"none", viewBox:"0 0 9 9", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
					}
				}
				, [r("path", {					attrs: {						stroke: "#006ce1", "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-miterlimit":"10", d:"M3.375 1.406L6.581 4.5 3.375 7.594"					}				}				)])])]):e._e()]:e._e()]
			}
			)), e._v(" "), e.productReviewResult.tab.custom?r("div", {
				class: [e.$style.productReviewTitle, e.$style["theme"+e.themeColor]]
			}
			, [e._v("\n    "+e._s(e.productReviewResult.content.custom.title)+"\n  ")]):e._e(), e._v(" "), e.productReviewResult.tab.custom&&e.tabList.ExternalID&&"overView"!==e.classType?r("div", {
				class:["bazaaReviews", "theme"+e.themeColor], attrs: {
					id: "bv_reviews", "data-bv-show":"reviews", "data-bv-product-id":e.tabList.ExternalID
				}
			}
			):e._e()], 2):e._e()
		}
		), [], !1, (function(e) {
			this.$style=D.default.locals||D.default
		}
		), null, null);
		t.default=x.exports
	}
	, 590:function(e, t, r) {
		"use strict";
		r(13), r(24);
		var o, n=r(4), l=r(0), c=(o=function(e, b) {
			return(o=Object.setPrototypeOf|| {
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
			o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), d=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, h=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.activeInit=!1, t.indicatorWidth=0, t.setBarMargin= {}
				, t.indicatorMaxWidth=0, t.indicatorBarMargin=0, t.indicatorBarWidth=0, t.isRTL=!1, t
			}
			return c(t, e), t.prototype.created=function() {
				this.isRTL=this.$store.getters.RTLGetter
			}
			, t.prototype.mounted=function() {
				this.totalSlide>0&&this.resetIndicator()
			}
			, Object.defineProperty(t.prototype, "getSlideBarMovesNumber", {
				get:function() {
					return(this.currentSlide-1)*(this.indicatorBarWidth+2*this.indicatorBarMargin)
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.beforeUpdate=function() {
				var element=this.$refs.indicator_width;
				this.indicatorWidth=null==element?void 0: element.clientWidth
			}
			, t.prototype.slideTo=function(e) {
				this.$emit("slideToEvent", e+1)
			}
			, t.prototype.initActive=function() {
				var e=this;
				this.activeInit=!1, this.$nextTick((function() {
					e.activeInit=!0, e.resetIndicator()
				}
				))
			}
			, t.prototype.reloadWidth=function() {
				this.resetIndicator()
			}
			, t.prototype.resetIndicator=function() {
				var element=this.$refs.indicator_width;
				this.indicatorWidth=null==element?void 0: element.clientWidth, this.totalSlide>4&&(this.indicatorMaxWidth=284, this.indicatorBarWidth=this.indicatorMaxWidth/this.totalSlide), this.totalSlide<=4&&(this.rwdWidth>=1279?(this.indicatorBarMargin=10, this.indicatorBarWidth=80):(this.indicatorBarMargin=6, this.indicatorBarWidth=62), this.indicatorMaxWidth=this.indicatorBarWidth*this.totalSlide+2*(this.totalSlide-1)*this.indicatorBarMargin), "herobanner"===this.typeStyle&&this.totalSlide>1&&(this.indicatorWidth>380?this.indicatorMaxWidth=380:this.indicatorMaxWidth=this.indicatorWidth, this.indicatorBarMargin=16, this.indicatorBarWidth=(this.indicatorWidth-this.indicatorBarMargin*(this.totalSlide-1)-32)/this.totalSlide, this.indicatorBarWidth>80&&(this.indicatorBarWidth=80))
			}
			, d([Object(l.Prop)( {				default: !1			}			)], t.prototype, "autoPlay", void 0), d([Object(l.Prop)( {				default: !1			}			)], t.prototype, "timerBtn", void 0), d([Object(l.Prop)( {				default: 5e3			}			)], t.prototype, "transitionDuration", void 0), d([Object(l.Prop)( {				default: 0			}			)], t.prototype, "totalSlide", void 0), d([Object(l.Prop)( {				default: 1			}			)], t.prototype, "currentSlide", void 0), d([Object(l.Prop)( {				default: 4			}			)], t.prototype, "singleLineBreakPoint", void 0), d([Object(l.Prop)()], t.prototype, "type", void 0), d([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), d([Object(l.Prop)( {				default: ""			}			)], t.prototype, "typeStyle", void 0), d([Object(l.Watch)("totalSlide", {				immediate: !0			}			)], t.prototype, "initActive", null), d([Object(l.Watch)("rwdWidth")], t.prototype, "reloadWidth", null), t=d([Object(l.Component)( {}			)], t)
		}
		(l.Vue), m=r(806), _=r(8);
		var component=Object(_.a)(h, (function() {
			var e, t=this, r=t.$createElement, o=t._self._c||r;
			return void 0!==t.totalSlide&&void 0!==t.currentSlide&&t.totalSlide>1?o("div", {
				ref:"indicator_width", class:[t.$style.indicator, (e= {}
				, e[t.$style.herobanner]="herobanner"===t.typeStyle, e)], style:["herobanner"!==t.typeStyle? {					width: t.indicatorMaxWidth+"px"				}				: {}				]
			}
			, ["herobanner"===t.typeStyle?t._l(t.totalSlide, (function(e, r) {				return o("div", {					key:e, class:t.$style.indicatorArea, style:[ {						width: t.indicatorBarWidth+"px"					}					], on: {
						click:function(e) {
							return t.slideTo(r)
						}
					}
				}
				, [o("div", {					class:t.$style.indicatorDiv, style:[ {						width: t.indicatorBarWidth+"px"					}					], attrs: {
						tabindex: "0"
					}
				}
				, [o("div", {					class:t.$style.touchRange, style:[ {						width: t.indicatorBarWidth+"px"					}					]
				}
				), t._v(" "), !1===t.timerBtn?o("div", {
					class: [t.$style.bar, t.totalSlide<=6?[t.$style.initRadius]:[], 0===r&&t.totalSlide>6?[t.$style.barLeftRadius]:[], r===t.totalSlide-1&&t.totalSlide>6?[t.$style.barRightRadius]:[]]
				}
				, [o("span", {					class:[t.$style.progress, t.currentSlide==r+1&&t.activeInit?[t.$style.active]:[t.$style.notActive]], style:[t.autoPlay&&t.totalSlide<=6? {}					: {						transition: "none"					}					, {						transitionDuration: (t.transitionDuration/1e3).toString()+"s"					}					]
				}
				)]):t._e(), t._v(" "), !0===t.timerBtn?o("div", {
					class: t.$style.timerBtnDiv
				}
				, [o("div", {					class: [t.$style.timerBtn, t.currentSlide==r+1&&t.activeInit?[t.$style.activeTimer]:[t.$style.notActiveTimer]]
				}
				)]):t._e()])])
			}
			)):t._e(), t._v(" "), "herobanner"!==t.typeStyle?[t._l(t.totalSlide, (function(e, r) {				return o("div", {					key:e, class:t.$style.indicatorDiv, style:[r!==t.totalSlide-1&&0!==r&&t.totalSlide<=4? {						margin: "0px "+t.indicatorBarMargin+"px"					}					: {}					, 0===r&&t.totalSlide<=4?t.isRTL? {						margin: "0px 0px 0px "+t.indicatorBarMargin+"px"					}					: {						margin: "0px "+t.indicatorBarMargin+"px 0px 0px"					}					: {}					, r===t.totalSlide-1&&t.totalSlide<=4?t.isRTL? {						margin: "0px "+t.indicatorBarMargin+"px 0px 0px"					}					: {						margin: "0px 0px 0px "+t.indicatorBarMargin+"px"					}					: {}					, {						width: t.indicatorBarWidth+"px"					}					], attrs: {
						tabindex: "0"
					}
					, on: {
						click:function(e) {
							return t.slideTo(r)
						}
					}
				}
				, [o("div", {					class:t.$style.touchRange, style:[ {						width: t.indicatorBarWidth+"px"					}					], on: {
						click:function(e) {
							return t.slideTo(r)
						}
					}
				}
				), t._v(" "), !1===t.timerBtn?o("div", {
					class: [t.$style.bar, t.totalSlide<=4?[t.$style.initRadius]:[], 0===r&&t.totalSlide>4?[t.$style.barLeftRadius]:[], r===t.totalSlide-1&&t.totalSlide>4?[t.$style.barRightRadius]:[]]
				}
				, [o("span", {					class:[t.$style.progress, t.currentSlide==r+1&&t.activeInit?[t.$style.active]:[t.$style.notActive]], style:[t.autoPlay&&t.totalSlide<=4? {}					: {						transition: "none"					}					, {						transitionDuration: (t.transitionDuration/1e3).toString()+"s"					}					]
				}
				)]):t._e(), t._v(" "), !0===t.timerBtn?o("div", {
					class: t.$style.timerBtnDiv
				}
				, [o("div", {					class: [t.$style.timerBtn, t.currentSlide==r+1&&t.activeInit?[t.$style.activeTimer]:[t.$style.notActiveTimer]]
				}
				)]):t._e()])
			}
			)), t._v(" "), !1===t.timerBtn?o("div", {
				class:[t.$style.indicatorDiv, t.$style.slideBarIndicatorDiv], style:[t.totalSlide>t.singleLineBreakPoint&&!1===t.isRTL? {
					width: t.indicatorWidth/t.totalSlide+"px", left:(t.currentSlide-1)*(t.indicatorWidth/t.totalSlide)+"px"
				}
				: {
					left: t.getSlideBarMovesNumber+"px", width:t.indicatorBarWidth+"px"
				}
				, t.totalSlide>t.singleLineBreakPoint&&t.isRTL? {
					width: t.indicatorWidth/t.totalSlide+"px", right:(t.currentSlide-1)*(t.indicatorWidth/t.totalSlide)+"px"
				}
				: {
					right: t.getSlideBarMovesNumber+"px", width:t.indicatorBarWidth+"px"
				}
				]
			}
			, [o("div", {				class: [t.$style.bar, t.$style.slideBar]
			}
			, [o("span", {				class:[t.$style.progress, t.$style.active, t.$style.slideBarActive], style:[t.autoPlay? {}				: {					transition: "none"				}				, {					transitionDuration: (t.transitionDuration/1e3).toString()+"s"				}				]
			}
			)])]):t._e()]:t._e()], 2):t._e()
		}
		), [], !1, (function(e) {
			this.$style=m.default.locals||m.default
		}
		), null, null);
		t.a=component.exports
	}
	, 591:function(e, t, r) {
		"use strict";
		var o=r(635).a, n=r(843), l=r(8);
		var component=Object(l.a)(o, (function() {
			var e, t, r, o, n, l=this, c=l.$createElement, d=l._self._c||c;
			return"co"===l.websiteCode||"cl"===l.websiteCode||"pe"===l.websiteCode?d("div", [d("div", {
				class:[l.$style.wrapper, (e= {}
				, e[l.$style.expand]=l.expandWrpper, e), (t= {}
				, t[l.$style.compare]=("Filter"===l.classType||"Overview"===l.classType||"Deals"===l.classType||"DealsWebPath"===l.classType)&&l.rwdWidth>731&&l.compareNum>0, t), (r= {}
				, r[l.$style.compareUp]=("Filter"===l.classType||"Overview"===l.classType||"Deals"===l.classType||"DealsWebPath"===l.classType)&&l.rwdWidth>731&&l.compareNum>0&&l.compareMenuShowState, r), (o= {}
				, o[l.$style.compareDown]=("Filter"===l.classType||"Overview"===l.classType||"Deals"===l.classType||"DealsWebPath"===l.classType)&&l.rwdWidth>731&&l.compareNum>0&&!1===l.compareMenuShowState, o), (n= {}
				, n[l.$style.TabletAndMobile]=l.rwdWidth<1280&&!l.expandWrpper, n)], attrs: {
					id: "pingpongchat"
				}
				, on: {
					click:function(e) {
						l.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:"online_chat", event_value_DL:"0"
						}
						), l.gaHmtPush(["_trackEvent", "buttons", "clicked", "online_chat"])
					}
				}
			}
			)]):l._e()
		}
		), [], !1, (function(e) {
			this.$style=n.default.locals||n.default
		}
		), null, null);
		t.a=component.exports
	}
	, 593:function(e, t, r) {
		"use strict";
		r(32), r(13), r(24), r(16), r(17), r(25), r(37), r(33);
		var o, n=r(4), l=r(0), c=r(621), d=r.n(c), h=r(775), m=r.n(h), _=r(584), f=r(606), C=r(758), y=r(797), v=r(14), I=r(110), S=(o=function(e, b) {
			return(o=Object.setPrototypeOf|| {
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
			o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), P=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, w=function() {
			for(var s=0, i=0, e=arguments.length;
			i<e;
			i++)s+=arguments[i].length;
			var t=Array(s), r=0;
			for(i=0;
			i<e;
			i++)for(var a=arguments[i], o=0, n=a.length;
			o<n;
			o++, r++)t[r]=a[o];
			return t
		}
		, L=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.colorCodePicked="", t.mainImageArray=[], t.fadeInAnimation=!1, t.compareMenuList= {}
				, t.websiteCode="", t.mainImageArrayOriginalLength=0, t.isRTL=!1, t
			}
			return S(t, e), t.prototype.created=function() {
				this.isRTL=this.$store.getters.RTLGetter, this.websiteCode=Object(I.b)(this.$route.params.region), this.mainImageArrayOriginalLength=this.mainImageArray?this.mainImageArray.length: 0
			}
			, Object.defineProperty(t.prototype, "hasComingSoon", {
				get:function() {
					return""===this.productCardItem.Buy.Link
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "themeColor", {
				get:function() {
					return this.$store.getters.themeColorGetter
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "hasBuyText", {
				get:function() {
					return null!==this.productCardItem.Buy.Text&&""!==this.productCardItem.Buy.Text
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "hasWereToBuy", {
				get:function() {
					return 1===parseInt(this.productCardItem.WhereToBuy.WTBFlag)
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "hasPrice", {
				get:function() {
					return!!this.productCardItem.Price
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "getSlideCount", {
				get:function() {
					return this.mainImageArray&&this.mainImageArray.length>0?1===this.mainImageArrayOriginalLength?1: this.mainImageArray.length:0
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "getHeadingRowHeight", {
				get:function() {
					return this.productCardContent?this.productCardContent.contentLayout.headingRowHeight: 24
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "isUseDiscountHeight", {
				get:function() {
					return!this.productCardContent||!this.productCardContent.isHideContent.discountRow
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.AddMainImageArray=function(e) {
				this.$set(this.mainImageArray, e, this.mainImageArray[e%this.mainImageArrayOriginalLength])
			}
			, t.prototype.setDefaultProductColor=function() {
				var e;
				if(this.productCardItem.ImageList&&this.productCardItem.ImageList.forEach((function(e) {
					e.displayColorBtn="Y"!==e.DefaultFlag
				}
				)), ""===this.colorCodePicked&&(null===(e=this.productCardItem.ImageList)||void 0===e?void 0:e.length)>0) {
					var t=d()(this.productCardItem.ImageList, (function(e) {
						return"Y"===e.DefaultFlag
					}
					));
					t=-1===t?0:t, this.colorCodePicked=this.productCardItem.ImageList[t].ColorCode
				}
				this.initMainImageArray()
			}
			, t.prototype.changeMainPage=function() {
				this.initMainImageArray()
			}
			, t.prototype.initMainImageArray=function() {
				var e, t, r=this;
				this.colorCodePicked&&(void 0!==(t=m()(this.productCardItem.ImageList, (function(element) {
					return element.ColorCode===r.colorCodePicked
				}
				)))&&(e=w(t.ImageURL), this.mainImageArrayOriginalLength=t.ImageURL.length), e&&(this.$set(this, "mainImageArray", e), this.fadeInAnimationActive()))
			}
			, t.prototype.colorSelectorPick=function(e) {
				this.colorCodePicked=e, this.gaDataLayerPush( {
					event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+e, event_value_DL:"0"
				}
				), this.gaHmtPush(["_trackEvent", "buttons", "clicked", this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+e])
			}
			, t.prototype.sendGA=function(data) {
				this.gaDataLayerPush( {
					event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+(data?"Add to comparison":"Move out off comparison")+" - "+this.productCardItem.Compare, event_value_DL:"0"
				}
				), this.gaHmtPush(["_trackEvent", "buttons", "clicked", this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+(data?"Add to comparison":"Move out off comparison")+" - "+this.productCardItem.Compare])
			}
			, t.prototype.clickImageGA=function(data) {
				this.gaDataLayerPush( {
					event: "data_layer_event", event_category_DL:"images", event_action_DL:"clicked", event_label_DL:this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+data, event_value_DL:"0"
				}
				), this.gaHmtPush(["_trackEvent", "images", "clicked", this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+data])
			}
			, t.prototype.fadeInAnimationActive=function() {
				var e=this;
				this.fadeInAnimation=!1, this.$nextTick((function() {
					e.fadeInAnimation=!0
				}
				))
			}
			, t.prototype.redirect=function(e) {
				try {
					var t=Object(I.a)(this.$route.params.region);
					"1"===this.productCardItem.GetURLFlag.toString()?window.open(this.productCardItem.ProductURL): window.location.href=t+"/"+e.levelOneTopMenuName+"/"+e.levelTwoProductLineName+"/"+e.seriesName+"/"+e.productModel
				}
				catch(e) {}
			}
			, t.prototype.WTBredirectWay=function(e) {
				null!==this.productCardItem.GetURLFlag&&"1"!==this.productCardItem.GetURLFlag.toString()&&this.$router.push( {
					name:"WhereToBuy", params: {
						levelOneTopMenuName: e.levelOneTopMenuName, levelTwoProductLineName:e.levelTwoProductLineName, seriesName:e.seriesName, productModel:e.productModel
					}
				}
				)
			}
			, t.prototype.getButtonLink=function(e) {
				try {
					var t=Object(I.a)(this.$route.params.region)+"/"+e.levelOneTopMenuName+"/"+e.levelTwoProductLineName+"/"+e.seriesName+"/"+e.productModel, r="";
					switch(e.linkText) {
						case"learn-more": r="1"===this.productCardItem.GetURLFlag.toString()?this.productCardItem.ProductURL:t;
						break;
						case"where-to-buy": r=null!==this.productCardItem.GetURLFlag&&"1"===this.productCardItem.GetURLFlag.toString()&&""!==this.productCardItem.WhereToBuy.WTBLink?this.productCardItem.WhereToBuy.WTBLink:t+"/"+e.linkText
					}
					return r
				}
				catch(e) {
					return""
				}
			}
			, t.prototype.getHrefTarget=function() {
				return"1"===this.productCardItem.GetURLFlag.toString()?"_blank": ""
			}
			, t.prototype.getRel=function() {
				return"_blank"===this.getHrefTarget()?"noreferrer noopener": ""
			}
			, t.prototype.getProductCardItemLink=function(e) {
				return""!==e?e: "javascript:void(0)"
			}
			, P([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), P([Object(l.Prop)( {				default: !1			}			)], t.prototype, "isWhiteCard", void 0), P([Object(l.Prop)( {				default: !1			}			)], t.prototype, "isHideCompare", void 0), P([Object(l.Prop)( {				default: !0			}			)], t.prototype, "isColorSelector", void 0), P([Object(l.Prop)()], t.prototype, "productCardItem", void 0), P([Object(l.Prop)()], t.prototype, "cardIndex", void 0), P([Object(l.Prop)( {				default: ""			}			)], t.prototype, "gaActionField", void 0), P([Object(l.Prop)()], t.prototype, "defLevelId", void 0), P([Object(l.Prop)()], t.prototype, "productCardContent", void 0), P([Object(l.Prop)( {				default: ""			}			)], t.prototype, "pageName", void 0), P([Object(l.Watch)("productCardItem", {				deep: !0, immediate:!0			}			)], t.prototype, "setDefaultProductColor", null), P([Object(l.Watch)("colorCodePicked", {				immediate: !0			}			)], t.prototype, "changeMainPage", null), t=P([Object(l.Component)( {				components: {					GhostButton: _.a, CompareCheckBox:f.a, ColorSelector:C.a, SingleSlideCarousel:y.a				}			}			)], t)
		}
		(Object(l.mixins)(v.a)), k=r(840), D=r(8);
		var component=Object(D.a)(L, (function() {
			var e, t, r, o, n, l, c, d, h, m, _, f, C, y, v=this, I=v.$createElement, S=v._self._c||I;
			return S("div", {
				class:[v.$style.productCardContainer, (e= {}
				, e[v.$style.isWhiteCard]=v.isWhiteCard, e[v.$style.isNew]="Y"===v.productCardItem.LeftHeader.NewsFlag, e)]
			}
			, [S("div", {				class:[v.$style.AwardIconRow, (t= {}				, t[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.awardIconRow, t)]
			}
			, [S("div", {				directives:[ {					name: "show", rawName:"v-show", value:"Y"===v.productCardItem.LeftHeader.NewsFlag, expression:"productCardItem.LeftHeader.NewsFlag === 'Y'"				}				], class:v.$style.newFlagWrapper
			}
			, [v._v("\n   "+v._s(v.productCardItem.LeftHeader.NewsFlagWording)+"\n  ")]), v._v(" "), S("div", {
				directives:[ {
					name: "show", rawName:"v-show", value:"Y"===v.productCardItem.LeftHeader.DealFlag, expression:"productCardItem.LeftHeader.DealFlag === 'Y'"
				}
				], class:v.$style.dealFlagWrapper
			}
			, [v._v("\n   "+v._s(v.productCardItem.LeftHeader.DealFlagWording)+"\n  ")]), v._v(" "), v.productCardItem.RightHeader?S("div", {
				class: v.$style.awardIcons
			}
			, [v._l(v.productCardItem.RightHeader, (function(e, t) {				return[S("img", {					directives:[ {						name: "show", rawName:"v-show", value:1==e.Show, expression:"AwardItem.Show == 1"					}					], key:"AwardItem.Content_"+t, class:v.$style.awardIcon, attrs: {
						src: e.ImageUrl, alt:"award icon"
					}
				}
				)]
			}
			))], 2):v._e()]), v._v(" "), S("a", {
				class:[v.$style.mainImageRow, (r= {}
				, r[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.mainImageRow, r)], attrs: {
					href: v.productCardItem.ProductURL, target:v.getHrefTarget(), rel:v.getRel()
				}
				, on: {
					click:function(e) {
						v.gaDataLayerPush( {
							event:"productClick", ecommerce: {
								click: {
									actionField: {
										list: v.gaActionField
									}
									, products:[ {
										name: ""+v.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, dimension10:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, price:""+v.productCardItem.Price, brand:0===v.productCardItem.GetURLFlag?"ASUS":"ROG", category:v.productCardItem.Level1Path+"-"+v.productCardItem.Level2Path+"/"+v.productCardItem.CategoryName+"/"+v.productCardItem.Level3Path+"/"+(v.productCardItem.SubSeriesName?v.productCardItem.SubSeriesName:"undefined"), list:v.gaActionField, position:""+(v.cardIndex+1)
									}
									]
								}
							}
						}
						)
					}
				}
			}
			, [S("SingleSlideCarousel", {				ref:"SingleSlideCarousel", class:v.$style.mainImageCarousel, attrs: {					rwdWidth: v.rwdWidth, totalSlide:v.getSlideCount, loop:!1				}				, on: {					AddMainImageArray: v.AddMainImageArray				}				, scopedSlots:v._u([ {					key:"default", fn:function(e) {						return v._l(v.mainImageArray, (function(t, r) {							return S("div", {								key: r, class:[v.$style.imageWrapper], style:[e.inlineStyleObject]
							}
							, [S("picture", [t&&t.includes("/gain/")?S("source", {								attrs: {									type: "image/webp", srcset:t+"/fwebp"								}							}							):v._e(), v._v(" "), t&&t.includes("/media/Odin/")?S("source", {								attrs: {									type: "image/webp", srcset:t+"?webp"								}							}							):v._e(), v._v(" "), S("img", {								attrs: {									src: ""+t, alt:v.productCardItem.Name.replace(/<[^>]*>/g, "")
								}
								, on: {
									click:function(e) {
										return v.clickImageGA(t)
									}
								}
							}
							)])])
						}
						))
					}
				}
				, {
					key:"prevButton", fn:function() {
						return[S("svg", {
							class:v.$style.svgControllButton, style:[!1===v.isRTL? {}
							: {
								transform: "rotateY(180deg)"
							}
							], attrs: {
								viewBox: "0 0 16 16", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
							}
						}
						, [S("path", {
							attrs: {
								d: "M11 13.5L5.3 8 11 2.5", stroke:"#999", "stroke-miterlimit":"10", "stroke-linecap":"round", "stroke-linejoin":"round"
							}
						}
						)])]
					}
					, proxy:!0
				}
				, {
					key:"nextButton", fn:function() {
						return[S("svg", {
							class:v.$style.svgControllButton, style:[!1===v.isRTL? {}
							: {
								transform: "rotateY(180deg)"
							}
							], attrs: {
								viewBox: "0 0 16 16", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
							}
						}
						, [S("path", {
							attrs: {
								d: "M5 2.5L10.7 8 5 13.5", stroke:"#999", "stroke-miterlimit":"10", "stroke-linecap":"round", "stroke-linejoin":"round"
							}
						}
						)])]
					}
					, proxy:!0
				}
				])
			}
			)], 1), v._v(" "), S("div", {
				directives:[ {
					name: "show", rawName:"v-show", value:v.productCardContent&&!v.productCardContent.isHideContent.logoRow, expression:"productCardContent && !productCardContent.isHideContent.logoRow"
				}
				], class:v.$style.logoWrapper
			}
			, [v.productCardItem.ProductLogo?v._l(v.productCardItem.ProductLogo, (function(e, t) {				return S("div", {					key: t, class:v.$style.logoBox				}				, [""===e.LogoLink?S("img", {					attrs: {						src: e.LogoImageURL.logo1x, srcset:e.LogoImageURL.logo1x+" 1x, "+e.LogoImageURL.logo2x+" 2x", alt:e.LogoAlt					}				}				):S("a", {					attrs: {						href: e.LogoLink, target:"_blank"					}				}				, [S("img", {					attrs: {						src: e.LogoImageURL.logo1x, srcset:e.LogoImageURL.logo1x+" 1x, "+e.LogoImageURL.logo2x+" 2x", alt:e.LogoAlt					}				}				)])])
			}
			)):v._e()], 2), v._v(" "), S("div", {
				directives:[ {
					name: "show", rawName:"v-show", value:v.productCardContent&&!v.productCardContent.isHideContent.subHeadingRow, expression:"productCardContent && !productCardContent.isHideContent.subHeadingRow"
				}
				], class:v.$style.subHeadingRow
			}
			, [v._v("\n  "+v._s(v.productCardItem.Size)+"\n  ")]), v._v(" "), S("a", {
				staticClass:"headingRow", class:[v.$style.headingRow, (o= {}
				, o[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.headingRow, o)], style:v.productCardContent&&v.productCardContent.contentLayout.checkHeadingRowHeight? {
					height: v.getHeadingRowHeight+"px"
				}
				: {}
				, attrs: {
					href: v.productCardItem.ProductURL, target:v.getHrefTarget(), rel:v.getRel()
				}
				, domProps: {
					innerHTML: v._s(v.productCardItem.Name)
				}
				, on: {
					click:function(e) {
						v.gaDataLayerPush( {
							event:"productClick", ecommerce: {
								click: {
									actionField: {
										list: v.gaActionField
									}
									, products:[ {
										name: ""+v.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, dimension10:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, price:""+v.productCardItem.Price, brand:0===v.productCardItem.GetURLFlag?"ASUS":"ROG", category:v.productCardItem.Level1Path+"-"+v.productCardItem.Level2Path+"/"+v.productCardItem.CategoryName+"/"+v.productCardItem.Level3Path+"/"+(v.productCardItem.SubSeriesName?v.productCardItem.SubSeriesName:"undefined"), list:v.gaActionField, position:""+(v.cardIndex+1)
									}
									]
								}
							}
						}
						), v.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"texts", event_action_DL:"clicked", event_label_DL:v.productCardItem.Name.replace(/<[^>]*>/g, ""), event_value_DL:"0"
						}
						), v.gaHmtPush(["_trackEvent", "texts", "clicked", v.productCardItem.Name.replace(/<[^>]*>/g, "")])
					}
				}
			}
			), v._v(" "), v.productCardItem.ExternalID?S("div", {
				class:["bazaaInlineRating", "theme"+v.themeColor], attrs: {
					"data-bv-show": "inline_rating", "data-bv-seo":"false", "data-bv-product-id":v.productCardItem.ExternalID
				}
			}
			):v._e(), v._v(" "), v.productCardItem.ExternalID?v._e():S("div", {
				staticClass:"bazaaInlineRating themeDark", attrs: {
					"data-bv-show": "inline_rating", "data-bv-ready":"true"
				}
			}
			, [v._m(0)]), v._v(" "), "global"!==v.websiteCode?S("div", {
				class:[v.$style.productInfoBox, (n= {}
				, n[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.productInfoBox, n)], style: {
					visibility: v.hasPrice?"visible":"hidden"
				}
			}
			, [S("hr", {				class:[v.$style.hrBehindDiscount], style:""!==v.productCardItem.Discount? {
					borderTop: "1px solid "+v.productCardItem.DiscountColor
				}
				: {
					borderTop: "1px solid "+v.productCardItem.PriceLineColor
				}
			}
			), v._v(" "), S("div", {
				class: v.$style.purchaseInfoRow
			}
			, [S("div", {				class: v.$style.priceType			}			, [v._v("\n    "+v._s(v.hasPrice?v.productCardItem.StartingAtWording:"")+"\n   ")]), v._v(" "), S("div", {
				class: v.$style.priceWrap
			}
			, [S("div", {				class:v.$style.price, style:""!==v.productCardItem.Discount? {					color: v.productCardItem.DiscountColor				}				: {					color: v.productCardItem.PriceColor				}			}			, [v._v("\n     "+v._s(v.productCardItem.Price)+"\n    ")])]), v._v(" "), S("div", {
				staticClass:"WrapPriceDiscount", class:[v.$style.priceWrap, v.$style.priceWrapFull, (l= {}
				, l[v.$style.discountHeight]=v.isUseDiscountHeight, l)]
			}
			, [v.hasPrice&&v.productCardItem.RegularPrice&&""!==v.productCardItem.Discount?S("div", {				class:v.$style.regularPrice, style: {					color: v.productCardItem.PriceColor				}			}			, [v._v("\n     "+v._s(v.productCardItem.RegularPrice)+"\n    ")]):v._e(), v._v(" "), v.productCardItem.Discount?S("div", {
				class:v.$style.save, style: {
					color: v.productCardItem.DiscountColor
				}
			}
			, [v._v("\n     "+v._s(v.productCardItem.DiscountWording)+v._s(" ")+v._s(v.productCardItem.Discount)+"\n    ")]):v._e()])]), v._v(" "), S("hr", {
				class:[v.$style.hrAfterDiscount], style:""!==v.productCardItem.Discount? {
					borderTop: "1px solid "+v.productCardItem.DiscountColor
				}
				: {
					borderTop: "1px solid "+v.productCardItem.PriceLineColor
				}
			}
			)]):v._e(), v._v(" "), S("div", {
				class:[v.$style.colorSelectorRow, (c= {}
				, c[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.colorSelectorRow, c)]
			}
			, [v.isColorSelector?S("ColorSelector", {				attrs: {					colorList: v.productCardItem.ImageList, colorCodePicked:v.colorCodePicked, isWhiteCard:v.isWhiteCard				}				, on: {					changeColorPick: v.colorSelectorPick				}			}			):v._e()], 1), v._v(" "), S("div", {
				class:[v.$style.featureDescriptionRow, (d= {}
				, d[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.featureDescriptionRow, d)], domProps: {
					innerHTML: v._s(v.productCardItem.ModelSpec)
				}
			}
			), v._v(" "), S("div", {
				class: v.$style.cardItemBottom
			}
			, [S("div", {				class:[v.$style.primaryBtnAndWishlistBtnRow, (h= {}				, h[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.primaryBtnAndWishlistBtnRow, h)]
			}
			, [v.hasBuyText?S("a", {				class:[(m= {}				, m[v.$style.disabledButton]=v.hasComingSoon, m), v.$style.button], attrs: {
					href: v.getProductCardItemLink(v.productCardItem.Buy.Link), target:v.getHrefTarget(), rel:v.getRel()
				}
				, on: {
					click:function(e) {
						v.gaDataLayerPush( {
							event:"productClick", ecommerce: {
								click: {
									actionField: {
										list: v.gaActionField
									}
									, products:[ {
										name: ""+v.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, dimension10:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, price:""+v.productCardItem.Price, brand:0===v.productCardItem.GetURLFlag?"ASUS":"ROG", category:v.productCardItem.Level1Path+"-"+v.productCardItem.Level2Path+"/"+v.productCardItem.CategoryName+"/"+v.productCardItem.Level3Path+"/"+(v.productCardItem.SubSeriesName?v.productCardItem.SubSeriesName:"undefined"), list:v.gaActionField, position:""+(v.cardIndex+1)
									}
									]
								}
							}
						}
						), v.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+v.productCardItem.Buy.Code+"Button-"+v.productCardItem.Buy.Text, event_value_DL:"0"
						}
						), v.gaHmtPush(["_trackEvent", "buttons", "clicked", v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+v.productCardItem.Buy.Code+"Button-"+v.productCardItem.Buy.Text])
					}
				}
			}
			, [v._v("\n    "+v._s(v.productCardItem.Buy.Text)+"\n   ")]):v.hasWereToBuy?S("a", {
				class:v.$style.button, attrs: {
					href: v.productCardItem.WhereToBuy.WTBLink, target:v.getHrefTarget(), rel:v.getRel()
				}
				, on: {
					click:function(e) {
						v.gaDataLayerPush( {
							event:"productClick", ecommerce: {
								click: {
									actionField: {
										list: v.gaActionField
									}
									, products:[ {
										name: ""+v.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, dimension10:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, price:""+v.productCardItem.Price, brand:0===v.productCardItem.GetURLFlag?"ASUS":"ROG", category:v.productCardItem.Level1Path+"-"+v.productCardItem.Level2Path+"/"+v.productCardItem.CategoryName+"/"+v.productCardItem.Level3Path+"/"+(v.productCardItem.SubSeriesName?v.productCardItem.SubSeriesName:"undefined"), list:v.gaActionField, position:""+(v.cardIndex+1)
									}
									]
								}
							}
						}
						), v.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+v.productCardItem.WhereToBuy.WTBText, event_value_DL:"0"
						}
						), v.gaHmtPush(["_trackEvent", "buttons", "clicked", v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+v.productCardItem.WhereToBuy.WTBText])
					}
				}
			}
			, [v._v("\n    "+v._s(v.productCardItem.WhereToBuy.WTBText)+"\n   ")]):v.hasBuyText||v.hasWereToBuy?v._e():S("a", {
				class:[v.$style.button, (_= {}
				, _[v.$style.hasBuyBtn]=v.hasBuyText&&v.hasWereToBuy||v.hasBuyText||v.hasWereToBuy, _)], attrs: {
					theme: "Blue", href:v.productCardItem.ProductURL, target:v.getHrefTarget(), rel:v.getRel()
				}
				, on: {
					click:function(e) {
						v.gaDataLayerPush( {
							event:"productClick", ecommerce: {
								click: {
									actionField: {
										list: v.gaActionField
									}
									, products:[ {
										name: ""+v.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, dimension10:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, price:""+v.productCardItem.Price, brand:0===v.productCardItem.GetURLFlag?"ASUS":"ROG", category:v.productCardItem.Level1Path+"-"+v.productCardItem.Level2Path+"/"+v.productCardItem.CategoryName+"/"+v.productCardItem.Level3Path+"/"+(v.productCardItem.SubSeriesName?v.productCardItem.SubSeriesName:"undefined"), list:v.gaActionField, position:""+(v.cardIndex+1)
									}
									]
								}
							}
						}
						), v.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+v.productCardItem.LearnMore, event_value_DL:"0"
						}
						), v.gaHmtPush(["_trackEvent", "buttons", "clicked", v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+v.productCardItem.LearnMore])
					}
				}
			}
			, [v._v("\n    "+v._s(v.productCardItem.LearnMore)+"\n   ")])]), v._v(" "), S("div", {
				class:[v.$style.whereToBuyRow, (f= {}
				, f[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.whereToBuyRow, f)]
			}
			, [v.hasBuyText&&v.hasWereToBuy||v.hasBuyText||v.hasWereToBuy?S("a", {				class:[v.$style.borderButton], attrs: {
					href: v.productCardItem.ProductURL
				}
				, on: {
					click:function(e) {
						v.gaDataLayerPush( {
							event:"productClick", ecommerce: {
								click: {
									actionField: {
										list: v.gaActionField
									}
									, products:[ {
										name: ""+v.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, dimension10:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, price:""+v.productCardItem.Price, brand:0===v.productCardItem.GetURLFlag?"ASUS":"ROG", category:v.productCardItem.Level1Path+"-"+v.productCardItem.Level2Path+"/"+v.productCardItem.CategoryName+"/"+v.productCardItem.Level3Path+"/"+(v.productCardItem.SubSeriesName?v.productCardItem.SubSeriesName:"undefined"), list:v.gaActionField, position:""+(v.cardIndex+1)
									}
									]
								}
							}
						}
						), v.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+v.productCardItem.LearnMore, event_value_DL:"0"
						}
						), v.gaHmtPush(["_trackEvent", "buttons", "clicked", v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+v.productCardItem.LearnMore])
					}
				}
			}
			, [v._v("\n    "+v._s(v.productCardItem.LearnMore)+"\n   ")]):v._e(), v._v(" "), v.hasBuyText&&v.hasWereToBuy?S("a", {
				class:v.$style.whereToBuy, attrs: {
					href: v.productCardItem.WhereToBuy.WTBLink, target:v.getHrefTarget(), rel:v.getRel()
				}
				, on: {
					click:function(e) {
						v.gaDataLayerPush( {
							event:"productClick", ecommerce: {
								click: {
									actionField: {
										list: v.gaActionField
									}
									, products:[ {
										name: ""+v.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, dimension10:0===v.productCardItem.GetURLFlag?v.productCardItem.ProductID:v.productCardItem.PartNo, price:""+v.productCardItem.Price, brand:0===v.productCardItem.GetURLFlag?"ASUS":"ROG", category:v.productCardItem.Level1Path+"-"+v.productCardItem.Level2Path+"/"+v.productCardItem.CategoryName+"/"+v.productCardItem.Level3Path+"/"+(v.productCardItem.SubSeriesName?v.productCardItem.SubSeriesName:"undefined"), list:v.gaActionField, position:""+(v.cardIndex+1)
									}
									]
								}
							}
						}
						), v.gaDataLayerPush( {
							event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+v.productCardItem.WhereToBuy.WTBText, event_value_DL:"0"
						}
						), v.gaHmtPush(["_trackEvent", "buttons", "clicked", v.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+v.productCardItem.WhereToBuy.WTBText])
					}
				}
			}
			, [S("svg", {				class:v.$style.pinIcon, attrs: {					width: "24", height:"24", viewBox:"0 0 24 24", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"				}			}			, [S("path", {				attrs: {					d: "M20 8.868c0 6.526-8 13.632-8 13.632S4 15.394 4 8.868C4 4.798 7.582 1.5 12 1.5s8 3.299 8 7.368z", stroke:"#006CE1", "stroke-width":"2.2"				}			}			), S("circle", {				attrs: {					cx: "12", cy:"9", r:"2.535", stroke:"#006CE1", "stroke-width":"2.2"				}			}			)])]):v._e()]), v._v(" "), S("hr", {
				class:[v.$style.hrGray, (C= {}
				, C[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.compareRow, C)]
			}
			), v._v(" "), S("div", {
				class:[v.$style.compareRow, (y= {}
				, y[v.$style.hideBlock]=!!v.productCardContent&&v.productCardContent.isHideContent.compareRow, y)]
			}
			, [v.isHideCompare||1!==v.productCardItem.SpecFlag?v._e():S("CompareCheckBox", {				class:v.$style.addToCompare, attrs: {					ProductID: v.productCardItem.ProductID, LevelId:v.defLevelId				}				, on: {					gaClickTrigger: v.sendGA				}			}			, [S("span", {				class: v.$style.text			}			, [v._v("\n     "+v._s(v.productCardItem.Compare)+"\n    ")])])], 1)])])
		}
		), [function() {			var e=this.$createElement, t=this._self._c||e;			return t("div", [t("div", {				staticClass:"bv_main_container", staticStyle: {					display: "none !important"				}				, attrs: {					id: "81d20693-1386-4a82-9405-0455d52b9daf"				}			}			, [t("div", {				staticClass:"bv_stars_component_container", attrs: {					"aria-hidden": "true"				}			}			, [t("div", {				staticClass: "bv_stars_button_container"			}			, [t("span", {				staticClass:"bv_stars_svg_no_wrap", attrs: {					"aria-hidden": "true"				}			}			)])]), this._v(" "), t("div", {
				staticClass:"bv_averageRating_component_container", attrs: {
					"aria-hidden": "true"
				}
			}
			, [t("div", {				staticClass: "bv_text"			}			, [this._v("0.0")])]), this._v(" "), t("div", {
				staticClass:"bv_numReviews_component_container", attrs: {
					"aria-hidden": "true"
				}
			}
			, [t("div", {				staticClass: "bv_text"			}			, [this._v("(0)")])]), this._v(" "), t("div", {
				staticClass: "bv-off-screen"
			}
			, [this._v("0.0 out of 5 stars.  ")])]), this._v(" "), t("div", {
				staticClass: "bv_incentivized_review_container bv_text"
			}
			)])
		}
		], !1, (function(e) {
			this.$style=k.default.locals||k.default
		}
		), null, null);
		t.a=component.exports
	}
	, 596:function(e, t, r) {
		"use strict";
		r(27), r(13), r(24);
		var o, n=r(4), l=r(0), c=r(18), d=r.n(c), h=r(110), m=(o=function(e, b) {
			return(o=Object.setPrototypeOf|| {
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
			o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), _=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, f=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.disclaimerData= {}
				, t.websiteCode="", t
			}
			return m(t, e), t.prototype.created=function() {
				this.websiteCode=Object(h.b)(this.$route.params.region), this.getDisclaimerByAPI()
			}
			, t.prototype.routeChange=function() {
				"Store"!==this.$route.name&&"StoreWebPath"!==this.$route.name||this.getStoreDisclaimer( {
					params: {
						SystemCode: "asus", WebsiteCode:this.websiteCode, TabKey:"Store"!==this.$route.name?this.$route.params.ProductLevel1Code:""
					}
				}
				)
			}
			, t.prototype.setDisclaimerData=function() {
				this.disclaimerData=d()(this.disclaimerDataGetter)
			}
			, t.prototype.getDisclaimerByAPI=function() {
				"Store"===this.$route.name||"StoreWebPath"===this.$route.name?this.getStoreDisclaimer( {
					params: {
						SystemCode: "asus", WebsiteCode:this.websiteCode, TabKey:"Store"!==this.$route.name?this.$route.params.ProductLevel1Code:""
					}
				}
				):this.getDisclaimer( {
					params: {
						SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.$route.params.levelOneTopMenuName, ProductLevel2Code:this.$route.params.levelTwoProductLineName, SeriesWebPath:this.$route.params.seriesName, ProductWebPath:this.$route.params.productModel
					}
				}
				)
			}
			, _([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), _([Object(l.Getter)("disclaimerDataGetter")], t.prototype, "disclaimerDataGetter", void 0), _([Object(l.Action)("getDisclaimer")], t.prototype, "getDisclaimer", void 0), _([Object(l.Action)("getStoreDisclaimer")], t.prototype, "getStoreDisclaimer", void 0), _([Object(l.Watch)("$route")], t.prototype, "routeChange", null), _([Object(l.Watch)("disclaimerDataGetter")], t.prototype, "setDisclaimerData", null), t=_([Object(l.Component)( {}			)], t)
		}
		(l.Vue), C=r(886), y=r(8);
		var component=Object(y.a)(f, (function() {
			var e, t, r=this, o=r.$createElement, n=r._self._c||o;
			return n("div", {
				staticClass: "disclaimerWrapper", class:[r.$style.wrapper, r.$style["theme"+r.themeColor]]
			}
			, [n("div", {				class: r.$style.content			}			, ["Filter"===r.$route.name&&""!==r.disclaimerData.SeriesPageDisclaimer?n("div", {				class:[r.$style.SeriesPageDisclaimer], domProps: {
					innerHTML: r._s(r.disclaimerData.SeriesPageDisclaimer)
				}
			}
			):r._e(), r._v(" "), "Filter"!==r.$route.name&&""!==r.disclaimerData.Disclaimer?n("div", {
				class:[r.$style.disclaimer, (e= {}
				, e[r.$style.fullWidth]=""==r.disclaimerData.LevelDisclaimer, e)]
			}
			, ["Y"===r.disclaimerData.HDMIFlag?n("img", {				class:r.$style.HDMIImage, attrs: {					src: r.disclaimerData.HDMIImage, alt:"HDMI"				}			}			):r._e(), r._v(" "), n("div", {				class:r.$style.disclaimerContent, domProps: {					innerHTML: r._s(r.disclaimerData.Disclaimer)				}			}			)]):r._e(), r._v(" "), "Filter"!==r.$route.name&&""!==r.disclaimerData.LevelDisclaimer?n("div", {
				class:[r.$style.levelDisclaimer, (t= {}
				, t[r.$style.fullWidth]=""==r.disclaimerData.Disclaimer, t)], domProps: {
					innerHTML: r._s(r.disclaimerData.LevelDisclaimer)
				}
			}
			):r._e()])])
		}
		), [], !1, (function(e) {
			this.$style=C.default.locals||C.default
		}
		), null, null);
		t.a=component.exports
	}
	, 597:function(e, t, r) {
		"use strict";
		r(13), r(24), r(65);
		var o, n=r(4), l=r(0), c=r(111), d=r.n(c), h=r(583), m=r.n(h), _=r(598), f=r(590), C=(o=function(e, b) {
			return(o=Object.setPrototypeOf|| {
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
			o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), y=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, v=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.bodyClientWidth=0, t.currentSlide=1, t.pageSize=1, t.rwdState="", t.oneCardDisplacement=0, t.enableControllButton=!0, t.autoPlayInterval=null, t.isRTL=!1, t.cardInlineStyleObject= {
					flexGrow: "0", flexShrink:"0", maxWidth:"none"
				}
				, t
			}
			return C(t, e), t.prototype.created=function() {
				this.isRTL=this.$store.getters.RTLGetter, this.isRTL?this.cardInlineStyleObject.marginLeft=this.spaceBetween+"px": this.cardInlineStyleObject.marginRight=this.spaceBetween+"px"
			}
			, Object.defineProperty(t.prototype, "totalSlide", {
				get:function() {
					return Math.ceil(this.totalCardsCount/this.pageSize)
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "visibleWidth", {
				get:function() {
					var e=this.pageSize>this.totalCardsCount?this.totalCardsCount: this.pageSize;
					return this.oneCardDisplacement*e-this.spaceBetween
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "enablePrevButton", {
				get:function() {
					return this.currentSlide>1&&this.totalSlide>1
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "enableNextButton", {
				get:function() {
					return this.currentSlide!==this.totalSlide&&this.totalSlide>1
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "maxVisibleWidth", {
				get:function() {
					return this.propMaxContainerWidth>0?this.propMaxContainerWidth: this.bodyClientWidth
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "innerSlidesDisplacement", {
				get:function() {
					var e=(this.visibleWidth+this.spaceBetween)*(this.currentSlide-1), t=this.oneCardDisplacement*(this.totalCardsCount-this.pageSize);
					return e<0?e=0: e>t&&this.currentSlide>=this.totalSlide&&1!==this.totalSlide&&(e=t), -e
				}
				, enumerable:!0, configurable:!0
			}
			), Object.defineProperty(t.prototype, "getProgressPercent", {
				get:function() {
					return this.totalCardsCount>0?this.currentSlide*this.pageSize>=this.totalCardsCount?100: Math.floor(this.currentSlide*this.pageSize/this.totalCardsCount*100):0
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.bindProgressPercent=function() {
				this.$emit("getProgressPercentEvent", this.getProgressPercent)
			}
			, t.prototype.reloadSource=function() {
				this.rwdWidth>this.rwdBreakPointMedium?(this.rwdState="desktop", this.pageSize=this.pageSizeList[0], this.enableControllButton=1===this.showControllButtonList[0]): this.rwdWidth>this.rwdBreakPointSmall?(this.rwdState="tablet", this.pageSize=this.pageSizeList[1], this.enableControllButton=1===this.showControllButtonList[1]):(this.rwdState="mobile", this.pageSize=this.pageSizeList[2], this.enableControllButton=1===this.showControllButtonList[2])
			}
			, t.prototype.autoPlayBind=function() {
				this.autoPlay?this.bindInterval(): this.autoPlayInterval&&clearInterval(this.autoPlayInterval)
			}
			, t.prototype.restartInterval=function() {
				this.autoPlay&&(this.autoPlayInterval&&clearInterval(this.autoPlayInterval), this.bindInterval())
			}
			, t.prototype.bindInterval=function() {
				var e=this;
				this.autoPlayInterval=setInterval((function() {
					e.next(null, !0)
				}
				), this.autoPlayDelay)
			}
			, t.prototype.slideTo=function(e) {
				this.restartInterval(), this.currentSlide=e
			}
			, t.prototype.next=function(e, t) {
				void 0===t&&(t=!1), this.currentSlide++, this.currentSlide>this.totalSlide&&(!0===this.loop?this.currentSlide=1: this.currentSlide=this.totalSlide), !1===t&&this.restartInterval()
			}
			, t.prototype.prev=function(e, t) {
				void 0===t&&(t=!1), this.currentSlide--, this.currentSlide<=0&&(!0===this.loop?this.currentSlide=this.totalSlide: this.currentSlide=1), !1===t&&this.restartInterval()
			}
			, t.prototype.updateSlideWidth=function() {
				var e=this.$refs.innerSlides;
				if(e&&e.hasChildNodes()) {
					var t=e.childNodes[0].offsetWidth;
					this.oneCardDisplacement=t+this.spaceBetween
				}
				this.$set(this.cardInlineStyleObject, "maxWidth", (this.maxVisibleWidth-this.spaceBetween*(this.pageSize-1))/this.pageSize+"px")
			}
			, t.prototype.updated=function() {
				this.updateSlideWidth()
			}
			, t.prototype.mounted=function() {
				window.addEventListener("resize", d()(this.getBodyClientWidth, 100, {
					trailing: !0
				}
				)), this.updateSlideWidth(), this.getBodyClientWidth()
			}
			, t.prototype.beforeDestroy=function() {
				window.removeEventListener("resize", this.getBodyClientWidth)
			}
			, t.prototype.getBodyClientWidth=function() {
				document&&(this.bodyClientWidth=document.body.clientWidth)
			}
			, y([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), y([Object(l.Prop)( {				default: 0			}			)], t.prototype, "spaceBetween", void 0), y([Object(l.Prop)( {				default: 0			}			)], t.prototype, "spaceBetweenIndicator", void 0), y([Object(l.Prop)( {				default: !1			}			)], t.prototype, "autoPlay", void 0), y([Object(l.Prop)( {				default: !1			}			)], t.prototype, "isBottomIndicator", void 0), y([Object(l.Prop)( {				default: 5e3			}			)], t.prototype, "autoPlayDelay", void 0), y([Object(l.Prop)( {				default:function() {					return[3, 2, 1]
				}
			}
			)], t.prototype, "pageSizeList", void 0), y([Object(l.Prop)( {				default:function() {					return[1, 1, 1]
				}
			}
			)], t.prototype, "showControllButtonList", void 0), y([Object(l.Prop)( {				default: !1			}			)], t.prototype, "loop", void 0), y([Object(l.Prop)( {				default: parseInt(m.a.breakPointSmall, 10)			}			)], t.prototype, "rwdBreakPointSmall", void 0), y([Object(l.Prop)( {				default: parseInt(m.a.breakPointMedium, 10)			}			)], t.prototype, "rwdBreakPointMedium", void 0), y([Object(l.Prop)( {				default: 0			}			)], t.prototype, "propMaxContainerWidth", void 0), y([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), y([Object(l.Prop)( {				default: 0			}			)], t.prototype, "totalCardsCount", void 0), y([Object(l.Watch)("getProgressPercent", {				immediate: !0			}			)], t.prototype, "bindProgressPercent", null), y([Object(l.Watch)("rwdWidth", {				immediate: !0			}			)], t.prototype, "reloadSource", null), y([Object(l.Watch)("autoPlay", {				immediate: !0			}			)], t.prototype, "autoPlayBind", null), t=y([Object(l.Component)( {				components: {					CarouselArrows: _.a, Indicator:f.a				}			}			)], t)
		}
		(l.Vue), I=r(807), S=r(8);
		var component=Object(S.a)(v, (function() {
			var e=this, t=e.$createElement, r=e._self._c||t;
			return r("div", {
				class: e.$style.carouselContainer
			}
			, [r("v-touch", {				attrs: {					enabled: {						swipeleft: !0, swiperight:!0					}				}				, on: {					swipeleft: e.next, swiperight:e.prev				}			}			, [r("div", {				class:e.$style.visibleDiv, style:[ {					width: e.visibleWidth+"px"				}				, {					maxWidth: e.maxVisibleWidth+"px"				}				, e.spaceBetweenIndicator>0? {					"margin-bottom": e.spaceBetweenIndicator+"px"				}				: {}				]
			}
			, [r("div", {				ref:"innerSlides", class:e.$style.innerSlides, style:[e.isRTL? {					transform: "translateX("+-1*e.innerSlidesDisplacement+"px)"				}				: {					transform: "translateX("+e.innerSlidesDisplacement+"px)"				}				]
			}
			, [e._t("default", null, {				cardInlineStyleObject: e.cardInlineStyleObject			}			)], 2)])]), e._v(" "), r("CarouselArrows", {
				attrs: {
					enableControllButton: e.enableControllButton, enablePrevButton:e.enablePrevButton, enableNextButton:e.enableNextButton
				}
				, on: {
					clickPrev: e.prev, clickNext:e.next
				}
			}
			), e._v(" "), e.isBottomIndicator?r("div", {
				class: e.$style.bottomIndicator
			}
			, [r("Indicator", {				attrs: {					autoPlay: e.autoPlay, currentSlide:e.currentSlide, rwdWidth:e.rwdWidth, totalSlide:e.totalSlide, transitionDuration:e.autoPlayDelay				}				, on: {					slideToEvent: e.slideTo				}			}			)], 1):e._e(), e._v(" "), e.isBottomIndicator?e._e():r("Indicator", {
				attrs: {
					autoPlay: e.autoPlay, currentSlide:e.currentSlide, rwdWidth:e.rwdWidth, totalSlide:e.totalSlide, transitionDuration:e.autoPlayDelay
				}
				, on: {
					slideToEvent: e.slideTo
				}
			}
			)], 1)
		}
		), [], !1, (function(e) {
			this.$style=I.default.locals||I.default
		}
		), null, null);
		t.a=component.exports
	}
	, 598:function(e, t, r) {
		"use strict";
		r(13), r(24);
		var o, n=r(4), l=r(0), c=(o=function(e, b) {
			return(o=Object.setPrototypeOf|| {
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
			o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), d=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, h=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.isRTL=!1, t.iconSVG="", t
			}
			return c(t, e), t.prototype.created=function() {
				this.isRTL=this.$store.getters.RTLGetter
			}
			, Object.defineProperty(t.prototype, "isWhiteTheme", {
				get:function() {
					return"White"===this.themeColor
				}
				, enumerable:!0, configurable:!0
			}
			), t.prototype.prev=function() {
				this.$emit("clickPrev")
			}
			, t.prototype.next=function() {
				this.$emit("clickNext")
			}
			, t.prototype.IconSVG=function(e) {
				var t="";
				switch(e) {
					case"previous": t=this.isRTL?this.isWhiteTheme?r(586):r(763):this.isWhiteTheme?r(587):r(764);
					break;
					case"next": t=this.isRTL?this.isWhiteTheme?r(587):r(764):this.isWhiteTheme?r(586):r(763)
				}
				return t
			}
			, d([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), d([Object(l.Prop)( {				default: !1			}			)], t.prototype, "enableControllButton", void 0), d([Object(l.Prop)( {				default: !1			}			)], t.prototype, "enablePrevButton", void 0), d([Object(l.Prop)( {				default: !1			}			)], t.prototype, "enableNextButton", void 0), t=d([Object(l.Component)( {}			)], t)
		}
		(l.Vue), m=r(805), _=r(8);
		var component=Object(_.a)(h, (function() {
			var e=this, t=e.$createElement, r=e._self._c||t;
			return e.enableControllButton?r("div", {
				class: e.$style.carouselArrows
			}
			, [e.enablePrevButton?r("div", {				class:e.$style.prev, attrs: {					role: "presentation", focusable:"false", tabindex:"-1"				}				, on: {					click: e.prev				}			}			, [e._t("prevButton", [r("img", {				attrs: {					"svg-inline": "", src:e.IconSVG("previous"), alt:"previous image"				}			}			)])], 2):e._e(), e._v(" "), e.enableNextButton?r("div", {
				class:e.$style.next, attrs: {
					role: "presentation", focusable:"false", tabindex:"-1"
				}
				, on: {
					click: e.next
				}
			}
			, [e._t("nextButton", [r("img", {				attrs: {					"svg-inline": "", src:e.IconSVG("next"), alt:"next image"				}			}			)])], 2):e._e()]):e._e()
		}
		), [], !1, (function(e) {
			this.$style=m.default.locals||m.default
		}
		), null, null);
		t.a=component.exports
	}
	, 600:function(e, t, r) {
		"use strict";
		r(60), r(32), r(15), r(112), r(588), r(27), r(13), r(24), r(16), r(17), r(25), r(19), r(37), r(45), r(33);
		var o, n=r(4), l=r(0), c=r(110), d=r(7), h=r.n(d), m=(o=function(e, b) {
			return(o=Object.setPrototypeOf|| {
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
			o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
		}
		), _=function() {
			return(_=Object.assign||function(e) {
				for(var s, i=1, t=arguments.length;
				i<t;
				i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s, p)&&(e[p]=s[p]);
				return e
			}
			).apply(this, arguments)
		}
		, f=function(e, t, r, desc) {
			var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
			if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
			else for(var i=e.length-1;
			i>=0;
			i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
			return l>3&&c&&Object.defineProperty(t, r, c), c
		}
		, C=function(e) {
			function t() {
				var t=null!==e&&e.apply(this, arguments)||this;
				return t.itemNum=0, t.rwdState="", t.showMenu=!1, t.compareData="", t.comparisonMenu=[], t.compareMenuList= {}
				, t.compareNum=0, t.comparedProductLimit=4, t.mobileShowWidth=731, t.compareUrlID="", t.isbreakLine=[], t.isButtonDisable=!1, t.websiteCode="", t
			}
			return m(t, e), t.prototype.created=function() {
				this.websiteCode=Object(c.b)(this.$route.params.region), this.getCompare( {
					params: {
						SystemCode: "asus", WebsiteCode:this.websiteCode, ProductIDList:""
					}
				}
				)
			}
			, t.prototype.mounted=function() {
				this.compareMenuList=JSON.parse(sessionStorage.getItem("compareMenuList"))
			}
			, t.prototype.isShowMenu=function() {
				this.rwdWidth<this.mobileShowWidth&&this.compareNum>0&&this.compareMenuShowState&&document.querySelector("html").classList.add("fixed")
			}
			, t.prototype.setCompareData=function() {
				if(this.compareMenuList=JSON.parse(sessionStorage.getItem("compareMenuList")), this.compareData=this.getCompareData, this.comparisonMenu=this.compareData.ProductList, this.comparisonMenu?(this.compareNum=this.comparisonMenu.length, this.setCompareNum(this.comparisonMenu.length)): this.compareNum=0, this.rwdWidth>731&&(this.comparisonMenu?this.compareNum>0&&(this.showMenu=!0):this.showMenu=!1, this.$emit("compareMenuShow", this.showMenu), this.mutationCompareMenuShowState(this.showMenu)), 1===this.compareNum?this.$set(this, "isButtonDisable", !0):this.$set(this, "isButtonDisable", !1), this.comparisonMenu&&this.comparisonMenu.length>0) {
					for(var e=[], t=[], i=0;
					i<this.comparisonMenu.length;
					i++)"R"===this.comparisonMenu[i].ProductID.toString().split("")[0]?1===this.comparisonMenu[i].ModelBaseFlag?e.push(this.comparisonMenu[i].RealProductID): t.push(this.comparisonMenu[i].PartNo):e.push(this.comparisonMenu[i].ProductID);
					if(this.websiteCode) {
						var r=void 0;
						r=void 0===h.a.get("groupid_asus_"+this.websiteCode)?"":h.a.get("groupid_asus_"+this.websiteCode), this.dispatchPDPriceList( {
							params: {
								SystemCode: "asus", WebsiteCode:this.websiteCode, ProductId:e.join(), ROGProduct:t.join(), group_id:r
							}
						}
						)
					}
				}
			}
			, t.prototype.setPriceIdList=function() {
				var e=this;
				if(this.getPDPriceList&&this.getPDPriceList.ProductList)for(var t=function(i) {
					if(r.getPDPriceList.ProductList.length>0) {
						var t=r.getPDPriceList.ProductList.filter((function(t) {
							return String(t.ProductID)===String(e.comparisonMenu[i].ProductID)||String(t.ProductID)===String(e.comparisonMenu[i].RealProductID)||String(t.ProductID)===String(e.comparisonMenu[i].PartNo)
						}
						));
						r.$set(r.comparisonMenu, i, _(_( {}
						, r.comparisonMenu[i]), {
							Price:t[0]&&""!==t[0].Price?t[0].Price:"", Discount:t[0]&&""!==t[0].Discount?t[0].Discount:"", RegularPrice:!t[0]||""!==t[0].Regular_Price&&""!==t[0].Discount?t[0].Regular_Price:"", Buy:_(_( {}
							, r.comparisonMenu[i].Buy), {
								Link: t[0]&&""===t[0].Price?"":t[0].BuyLink, Text:t[0]&&""===t[0].Price?"":t[0].BuyText
							}
							)
						}
						))
					}
				}
				, r=this, i=0;
				i<this.comparisonMenu.length;
				i++)t(i)
			}
			, t.prototype.setCompareMenuShowState=function() {
				this.$set(this, "showMenu", this.compareMenuShowState)
			}
			, t.prototype.priceSaveBreakLineFunc=function() {
				this.rwdWidth<this.mobileShowWidth&&!0===this.showMenu?(this.priceSaveBreakLine(), document.querySelector("html").classList.add("fixed")): document.querySelector("html").classList.remove("fixed")
			}
			, t.prototype.priceSaveBreakLine=function() {
				var e=this;
				this.$nextTick((function() {
					var t=e.$refs.ItemInfo;
					if(t)for(var i=0;
					i<t.length;
					i++) {
						var r=t[i].children[3];
						r&&r.className.includes("comparisonItemNamePriceSave")&&(r.offsetHeight>15?e.$set(e.comparisonMenu, i, Object.assign( {}
						, e.comparisonMenu[i], {
							isbreakLine: !0
						}
						)):e.$set(e.comparisonMenu, i, Object.assign( {}
						, e.comparisonMenu[i], {
							isbreakLine: !1
						}
						)))
					}
				}
				))
			}
			, t.prototype.changeShowMenu=function() {
				this.$emit("compareMenuShow", !this.showMenu), this.mutationCompareMenuShowState(!this.showMenu), this.$set(this, "showMenu", !this.showMenu)
			}
			, t.prototype.delCompare=function(e, t) {
				for(var r=[], o=!1, n=0, i=0;
				i<this.comparedProductLimit;
				i++)String(this.compareMenuList.result[e][i])!==String(t)?(r[n]=this.compareMenuList.result[e][i], n++): o=!0;
				if(o) {
					this.compareMenuList.result[e]=[];
					for(i=0;
					i<this.comparedProductLimit;
					i++)r[i]&&void 0!==r[i]&&this.$set(this.compareMenuList.result[e], i, r[i]);
					if(sessionStorage.setItem("compareMenuList", JSON.stringify(this.compareMenuList)), this.compareMenuList.result[e].length>0) {
						var l=this;
						this.compareData.ProductList.forEach((function(i, e) {
							String(i.ProductID)==String(t)&&l.compareData.ProductList.splice(e, 1)
						}
						));
						var c=JSON.stringify(this.compareMenuList.result[e]).replace(/\[|\]|"/g,"");"Compare"===this.$route.name&&this.$router.push({name:"Compare",query:{ProductID:c,LevelId:this.defLevelId}}),this.updateCompare(this.compareData)}else this.dispatchClearCompare(),document.querySelector("html").classList.remove("fixed")}},t.prototype.clearCompare=function(e){""!==e&&(this.$set(this.compareMenuList.result,e,[]),sessionStorage.setItem("compareMenuList",JSON.stringify(this.compareMenuList)),this.dispatchClearCompare(),document.querySelector("html").classList.remove("fixed"))},t.prototype.changeMenu=function(e){var t=JSON.stringify(e).replace(/\[|\]|"/g, "");
						"Compare"===this.$route.name&&this.$router.push( {
							name:"Compare", query: {
								ProductID: t, LevelId:this.defLevelId
							}
						}
						), this.getCompare( {
							params: {
								SystemCode: "asus", WebsiteCode:this.websiteCode, ProductIDList:t
							}
						}
						)
					}
					, t.prototype.routerPush=function() {
						this.compareNum>1&&this.$router.push( {
							name:"Compare", query: {
								ProductID: JSON.stringify(this.compareMenuList.result[this.defLevelId]).replace(/\[|\]|"/g,""),LevelId:this.defLevelId}})},f([Object(l.Getter)("compareDataGetter")],t.prototype,"getCompareData",void 0),f([Object(l.Getter)("PDPriceListGetter")],t.prototype,"getPDPriceList",void 0),f([Object(l.Action)("getCompare")],t.prototype,"getCompare",void 0),f([Object(l.Action)("updateCompare")],t.prototype,"updateCompare",void 0),f([Object(l.Action)("clearCompare")],t.prototype,"dispatchClearCompare",void 0),f([Object(l.Action)("getPDPriceList")],t.prototype,"dispatchPDPriceList",void 0),f([Object(l.Mutation)("setCompareMenuShowState")],t.prototype,"mutationCompareMenuShowState",void 0),f([Object(l.Mutation)("setCompareNum")],t.prototype,"setCompareNum",void 0),f([Object(l.Prop)()],t.prototype,"rwdWidth",void 0),f([Object(l.Prop)()],t.prototype,"defLevelId",void 0),f([Object(l.Prop)()],t.prototype,"compareMenuShowState",void 0),f([Object(l.Watch)("compareNum")],t.prototype,"isShowMenu",null),f([Object(l.Watch)("getCompareData",{immediate:!0})],t.prototype,"setCompareData",null),f([Object(l.Watch)("getPDPriceList")],t.prototype,"setPriceIdList",null),f([Object(l.Watch)("compareMenuShowState",{immediate:!0})],t.prototype,"setCompareMenuShowState",null),f([Object(l.Watch)("showMenu",{immediate:!0})],t.prototype,"priceSaveBreakLineFunc",null),t=f([Object(l.Component)({})],t)}(l.Vue),y=r(883),v=r(8);var component=Object(v.a)(C,(function(){var e,t,r,o,n,l,c=this,d=c.$createElement,h=c._self._c||d;return c.compareNum>0?h("div",{class:[c.$style.comparisonMenuLayout,(e={},e[c.$style.showMenu]=!0===c.showMenu&&c.rwdWidth<c.mobileShowWidth,e),(t={},t[c.$style.hideMenu]=!1===c.showMenu,t)]},[!0===c.compareMenuShowState?h("div",{class:c.$style.comparisonMenuButton,on:{click:function(e){return c.changeShowMenu()}}},[h("div",{class:[c.$style.collapseMenuButton,(r={},r[c.$style.expandMenuButton]=c.showMenu,r)]})]):c._e(),c._v(" "),!0===c.showMenu&&c.rwdWidth<c.mobileShowWidth?h("div",{class:c.$style.comparisonMobileHeader,on:{click:function(e){return c.routerPush()}}},[c._v("\n "+c._s(c.compareData.CompareMobileTitle)+"\n "),h("div",{class:c.$style.comparisonMobileClearAll,on:{click:function(e){return c.clearCompare(c.defLevelId)}}},[c._v("\n "+c._s(c.compareData.Clearall)+"\n ")])]):c._e(),c._v(" "),h("div",{class:[c.$style.comparisonMenuContent,(o={},o[c.$style.expandMenuButton]=c.showMenu,o)]},[c.comparisonMenu?c._e():h("div",{class:c.$style.comparisonMenuList},[h("div",{class:[c.$style.comparisonItem,c.$style.comparisonNoItem]}),c._v(" "),h("div",{class:[c.$style.comparisonItem,c.$style.comparisonNoItem]}),c._v(" "),h("div",{class:[c.$style.comparisonItem,c.$style.comparisonNoItem]}),c._v(" "),h("div",{class:[c.$style.comparisonItem,c.$style.comparisonNoItem]})]),c._v(" "),c.comparisonMenu?h("div",{class:c.$style.comparisonMenuList},[c._l(c.comparedProductLimit,(function(e,t){var r,o;return[h("div",{key:t,class:[c.$style.comparisonItem,(r={},r[c.$style.comparisonNoItem]=!c.comparisonMenu[t],r)]},[c.comparisonMenu&&c.comparisonMenu[t]?[h("div",{class:c.$style.comparisonItemDelete,attrs:{"aria-label":"remove "+c.comparisonMenu[t].Name,tabindex:"0",role:"button"},on:{click:function(e){return c.delCompare(c.defLevelId,c.comparisonMenu[t].ProductID)}}}),c._v(" "),"global"!==c.websiteCode?h("div",{class:c.$style.comparisonItemPrice},[h("div",{class:c.$style.comparisonItemSavePrice,style:{color:c.comparisonMenu[t].PriceColor}},[c._v("\n "+c._s(c.comparisonMenu[t].Price)+"\n ")])]):c._e(),c._v(" "),h("div",{class:c.$style.comparisonItemImg},[h("img",{attrs:{src:c.comparisonMenu[t].ProductImage,alt:c.comparisonMenu[t].Name}})]),c._v(" "),h("div",{ref:"ItemInfo",refInFor:!0,class:c.$style.comparisonItemInfo},[h("div",{class:c.$style.comparisonItemName,domProps:{innerHTML:c._s(""+c.comparisonMenu[t].Name)}}),c._v(" "),c.comparisonMenu[t].ShortDesc?h("div",{class:c.$style.comparisonItemNamePs},[c._v("\n "+c._s(c.comparisonMenu[t].ShortDesc)+"\n ")]):c._e(),c._v(" "),"Y"===c.comparisonMenu[t].DiscountFlag&&c.rwdWidth<c.mobileShowWidth?h("div",{class:c.$style.StartingAtWording},[c._v("\n "+c._s(c.comparisonMenu[t].StartingAtWording)+"\n ")]):c._e(),c._v(" "),"global"!==c.websiteCode?[h("div",{class:c.$style.comparisonItemNamePrice,style:{color:c.comparisonMenu[t].PriceColor}},[c._v("\n "+c._s(c.comparisonMenu[t].Price)+"\n ")]),c._v(" "),"Y"===c.comparisonMenu[t].DiscountFlag?h("span",{class:[c.$style.comparisonItemNamePriceSave,(o={},o[c.$style.breakLine]=c.comparisonMenu[t].isbreakLine&&c.rwdWidth<c.mobileShowWidth,o)],style:{color:c.comparisonMenu[t].DiscountColor}},[c._v("\n "+c._s(c.comparisonMenu[t].DiscountWording)+c._s(" ")+c._s(c.comparisonMenu[t].Discount)+"\n ")]):c._e()]:c._e(),c._v(" "),h("div",{staticStyle:{clear:"both"}})],2)]:c._e()],2)]}))],2):c._e(),c._v(" "),h("div",{class:c.$style.comparisonItemContent},[h("div",{class:c.$style.comparisonItemClearAll,on:{click:function(e){return c.clearCompare(c.defLevelId)}}},[c._v("\n "+c._s(c.compareData.Clearall)+"\n ")]),c._v(" "),c.comparisonMenu?h("div",{class:c.$style.comparisonItemContentPs},[c._v("\n "+c._s(c.compareData.MaxProductText)+"\n ")]):c._e(),c._v(" "),h("div",{class:[c.$style.comparisonItemContentCompare,(n={},n[c.$style.disableButton]=c.isButtonDisable,n)],on:{click:function(e){return c.routerPush()}}},[c._v("\n "+c._s(c.compareData.Compare)+" ("+c._s(c.compareNum)+")\n ")])])]),c._v(" "),!0===c.showMenu&&c.rwdWidth<c.mobileShowWidth?h("div",{class:c.$style.comparisonMobileFooter},[h("div",{class:c.$style.comparisonMobileCancel,on:{click:function(e){return c.changeShowMenu()}}},[c._v("\n "+c._s(c.compareData.Cancel)+"\n ")]),c._v(" "),h("div",{class:[c.$style.comparisonItemContentCompare,(l={},l[c.$style.disableButton]=c.isButtonDisable,l)],on:{click:function(e){return c.routerPush()}}},[c._v("\n "+c._s(c.compareData.Compare)+" ("+c._s(c.compareNum)+")\n ")])]):c._e()]):c._e()}),[],!1,(function(e){this.$style=y.default.locals||y.default}),null,null);t.a=component.exports},601:function(e,t,r){"use strict";r(27),r(13),r(24);var o,n=r(4),l=r(0),c=r(14),d=(o=function(e,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])})(e,b)},function(e,b){function t(){this.constructor=e}o(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),h=function(e,t,r,desc){var o,l=arguments.length,c=l<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(l<3?o(c):l>3?o(t,r,c):o(t,r))||c);return l>3&&c&&Object.defineProperty(t,r,c),c},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.moveUpWrpper=!1,t.moveDownWrpper=!1,t.expandWrpper=!1,t.collapseWrpper=!1,t.firstItem=!1,t.noItem=!1,t.changItemNum=!1,t.scrollWrpper=!1,t.compareData="",t.compareNumInit=0,t.compareNum=0,t.compareNumBefore=0,t.btOpenWidth=60,t.compareMenuShowState=!1,t.rwdState="",t.classType="",t}return d(t,e),t.prototype.mounted=function(){window&&this.rwdWidth<732&&window.addEventListener("scroll",this.collapseWrapperWhenScroll),""===this.classType&&(this.classType=this.$route.name)},t.prototype.setCompareData=function(e){if(this.compareData=this.getCompareData,this.compareData&&this.compareData.ProductList?(this.compareNumBefore=this.compareNum,this.compareNum=this.compareData.ProductList.length):this.compareNum=0,void 0!==e&&this.rwdWidth<732){var t=this.collapseWrpper;this.noItem=!1,this.firstItem=!1,this.expandWrpper=!1,this.collapseWrpper=!1,this.moveDownWrpper=!1,this.compareNum&&1===this.compareNum&&0===this.compareNumBefore?this.firstItem=!0:0===this.compareNum?t?this.moveDownWrpper=!0:this.noItem=!0:this.expandWrpper=!0}this.compareNumInit=this.compareNum},t.prototype.reloadSource=function(){var e=this.rwdState;this.rwdWidth>=1279?this.rwdState="desktop":this.rwdWidth>731&&this.rwdWidth<1280?this.rwdState="tablet":this.rwdState="mobile","mobile"!==e&&"mobile"===this.rwdState&&!0===this.noItem&&(this.noItem=!1)},t.prototype.collapseWrapperWhenScroll=function(){this.rwdWidth<732&&(!0===this.expandWrpper||!0===this.firstItem)&&(this.moveUpWrpper=!1,this.expandWrpper=!1,this.firstItem=!1,this.collapseWrpper=!0)},t.prototype.routerPush=function(){this.compareMenuShowState=!this.compareMenuShowState,this.$emit("compareMenuShow",this.compareMenuShowState),this.mutationCompareMenuShowState(this.compareMenuShowState)},h([Object(l.Mutation)("setCompareMenuShowState")],t.prototype,"mutationCompareMenuShowState",void 0),h([Object(l.Getter)("compareDataGetter")],t.prototype,"getCompareData",void 0),h([Object(l.Prop)()],t.prototype,"rwdWidth",void 0),h([Object(l.Prop)()],t.prototype,"defLevelId",void 0),h([Object(l.Watch)("getCompareData",{immediate:!0})],t.prototype,"setCompareData",null),h([Object(l.Watch)("rwdWidth")],t.prototype,"reloadSource",null),t=h([Object(l.Component)({})],t)}(Object(l.mixins)(c.a)),_=r(885),f=r(8);var component=Object(f.a)(m,(function(){var e,t,o,n,l,c,d,h,m,_,f,C,y,v=this,I=v.$createElement,S=v._self._c||I;return S("a",{directives:[{name:"show",rawName:"v-show",value:v.compareNum>0,expression:"compareNum > 0"}],class:v.$style[v.classType]},[S("div",{ref:"floatMenu",class:[v.$style.wrapper,(e={},e[v.$style.moveUp]=v.moveUpWrpper&&"overview"!==v.classType,e),(t={},t[v.$style.moveDown]=v.moveDownWrpper&&"overview"!==v.classType,t),(o={},o[v.$style.expand]=v.expandWrpper,o),(n={},n[v.$style.expandDeals]="Deals"===v.classType,n),(l={},l[v.$style.collapse]=v.collapseWrpper&&"overview"!==v.classType,l),(c={},c[v.$style.collapseDeals]=v.collapseWrpper&&"overview"!==v.classType&&"Deals"===v.classType,c),(d={},d[v.$style.noItem]=v.noItem&&v.rwdWidth<732&&"Deals"!==v.classType,d),(h={},h[v.$style.noItemDeals]=v.noItem&&v.rwdWidth<732&&"Deals"===v.classType,h),(m={},m[v.$style.firstItem]=v.firstItem&&v.rwdWidth<732&&"Deals"!==v.classType,m),(_={},_[v.$style.firstItemDeals]=v.firstItem&&v.rwdWidth<732&&"Deals"===v.classType,_),(f={},f[v.$style.moveDown]=!1===v.compareMenuShowState&&v.rwdWidth>=732,f),(C={},C[v.$style.overviewFixed]="overview"===v.classType,C)],on:{click:function(e){v.gaDataLayerPush({event:"data_layer_event",event_category_DL:"images",event_action_DL:"clicked",event_label_DL:"compare",event_value_DL:"0"}),v.gaHmtPush(["_trackEvent","buttons","clicked","compare_collapsed"]),v.routerPush()}}},[S("div",{class:v.$style.iconDiv},[S("img",{class:v.$style.icon,attrs:{"svg-inline":"",src:r(884),alt:"comparison icon"}})]),v._v(" "),S("div",{class:[v.$style.text,(y={},y[v.$style.textDisplayUp]=v.moveUpWrpper,y)]},[v._v("\n Compare ("+v._s(v.compareNum)+")\n ")])])])}),[],!1,(function(e){this.$style=_.default.locals||_.default}),null,null);t.a=component.exports},606:function(e,t,r){"use strict";r(32),r(588),r(13),r(24),r(17),r(37),r(33);var o,n=r(4),l=r(0),c=r(110),d=(o=function(e,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])})(e,b)},function(e,b){function t(){this.constructor=e}o(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),h=function(e,t,r,desc){var o,l=arguments.length,c=l<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(l<3?o(c):l>3?o(t,r,c):o(t,r))||c);return l>3&&c&&Object.defineProperty(t,r,c),c},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.compareMenuList={},t.productIDApi="",t.isChecked="false",t.comparedProductLimit=4,t.compareData="",t.websiteCode="",t}return d(t,e),t.prototype.created=function(){this.websiteCode=Object(c.b)(this.$route.params.region)},t.prototype.mounted=function(){if(this.compareMenuList=JSON.parse(sessionStorage.getItem("compareMenuList")),this.compareMenuList&&this.compareMenuList.result[this.LevelId])for(var i=0;i<this.comparedProductLimit;i++)this.compareMenuList.result[this.LevelId][i]===this.ProductID&&this.$set(this,"isChecked",this.ProductID)},t.prototype.setCompareData=function(){if(this.compareMenuList=JSON.parse(sessionStorage.getItem("compareMenuList")),this.compareMenuList&&this.compareMenuList.result[this.LevelId]&&this.ProductID){this.$set(this,"isChecked","false");for(var i=0;i<this.comparedProductLimit;i++)String(this.compareMenuList.result[this.LevelId][i])===String(this.ProductID)&&this.$set(this,"isChecked",this.ProductID)}this.compareData=this.getCompareData},t.prototype.handleChange=function(){if(null===sessionStorage.getItem("compareMenuList")||""===sessionStorage.getItem("compareMenuList")?(this.compareMenuList={result:{},currentID:""},sessionStorage.setItem("compareMenuList",JSON.stringify(this.compareMenuList))):this.compareMenuList=JSON.parse(sessionStorage.getItem("compareMenuList")),""!==this.ProductID)if("false"===this.isChecked){this.$emit("gaClickTrigger",!0),this.$set(this,"isChecked",this.ProductID);var e=!1;this.compareMenuList.result[this.LevelId]||(this.compareMenuList.result[this.LevelId]=[]);for(var i=0;i<this.comparedProductLimit;i++)String(this.compareMenuList.result[this.LevelId][i])===String(this.ProductID)&&(e=!0);!1===e&&(this.compareMenuList.result[this.LevelId].length>=this.comparedProductLimit?(alert(this.compareData.CompareFullWording),this.$set(this,"isChecked","false")):(this.$set(this.compareMenuList.result[this.LevelId],this.compareMenuList.result[this.LevelId].length,String(this.ProductID)),sessionStorage.setItem("compareMenuList",JSON.stringify(this.compareMenuList)),this.changeMenu(this.compareMenuList.result[this.LevelId])))}else{this.$emit("gaClickTrigger",!1),this.$set(this,"isChecked","false");var t=[],r=!1,o=0;for(i=0;i<this.comparedProductLimit;i++)String(this.compareMenuList.result[this.LevelId][i])!==String(this.ProductID)&&""!==this.compareMenuList.result[this.LevelId][i]?(t[o]=this.compareMenuList.result[this.LevelId][i],o++):r=!0;if(r){this.compareMenuList.result[this.LevelId]=[];for(i=0;i<this.comparedProductLimit;i++)t[i]&&void 0!==t[i]&&this.$set(this.compareMenuList.result[this.LevelId],i,t[i]);sessionStorage.setItem("compareMenuList",JSON.stringify(this.compareMenuList));var n=this;this.compareData&&this.compareData.ProductList&&this.compareData.ProductList.length&&this.compareData.ProductList.forEach((function(i,e){i.ProductID==n.ProductID&&n.compareData.ProductList.splice(e,1)})),this.updateCompare(this.compareData)}}},t.prototype.changeMenu=function(e){this.productIDApi=JSON.stringify(e).replace(/\[|\]|"/g, ""), this.getCompare( {
									params: {
										SystemCode:"asus", WebsiteCode:this.websiteCode, ProductIDList:this.productIDApi
									}
								}
								)
							}
							, h([Object(l.Getter)("compareDataGetter")], t.prototype, "getCompareData", void 0), h([Object(l.Action)("updateCompare")], t.prototype, "updateCompare", void 0), h([Object(l.Action)("getCompare")], t.prototype, "getCompare", void 0), h([Object(l.Prop)()], t.prototype, "LevelId", void 0), h([Object(l.Prop)()], t.prototype, "ProductID", void 0), h([Object(l.Prop)()], t.prototype, "classType", void 0), h([Object(l.Watch)("getCompareData")], t.prototype, "setCompareData", null), t=h([l.Component], t)
						}
						(l.Vue), _=r(836), f=r(8);
						var component=Object(f.a)(m, (function() {
							var e, t=this, r=t.$createElement, o=t._self._c||r;
							return o("div", {
								class:[t.$style.wrapper, t.$style.wrapperCenter, t.$style[t.classType]], attrs: {
									tabindex: "0"
								}
								, on: {
									click:function(e) {
										return t.handleChange()
									}
								}
							}
							, [o("div", {								class:[t.$style.divCheckBox, (e= {}								, e[t.$style.ckecked]="false"!==t.isChecked, e)]
							}
							), t._v(" "), o("label", {
								class: t.$style.customCheckBox
							}
							, [o("span", {								class: t.$style.labelText							}							, [t._t("default")], 2)])])
						}
						), [], !1, (function(e) {
							this.$style=_.default.locals||_.default
						}
						), null, null);
						t.a=component.exports
					}
					, 611:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", mobilePromotionFlagWrap:"PromotionFlag__mobilePromotionFlagWrap__335hc", triangle:"PromotionFlag__triangle__4b3pK", promotionFlagWrap:"PromotionFlag__promotionFlagWrap__3qTYY", promotionTitle:"PromotionFlag__promotionTitle__1_Ju-", promotionInfo:"PromotionFlag__promotionInfo__3ayOj", headerMargin:"PromotionFlag__headerMargin__2GUj9", promotionBannerMargin:"PromotionFlag__promotionBannerMargin__q0J3O"
						}
					}
					, 614:function(e, t, r) {
						e.exports= {
							carouselArrows: "CarouselArrows__carouselArrows__UqyPk", next:"CarouselArrows__next__MFuuz", prev:"CarouselArrows__prev__16nvn"
						}
					}
					, 615:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", indicator:"Indicator__indicator__1nUx-", indicatorSingleline:"Indicator__indicatorSingleline__ZnYtD", indicatorDiv:"Indicator__indicatorDiv__WkYXS", touchRange:"Indicator__touchRange__foYfm", bar:"Indicator__bar__1hZV0", progress:"Indicator__progress__3EQZ0", active:"Indicator__active__3gXhs", notActive:"Indicator__notActive__1AgCL", slideBar:"Indicator__slideBar__3iO82", slideBarActive:"Indicator__slideBarActive__1vHY8", slideBarIndicatorDiv:"Indicator__slideBarIndicatorDiv__hzA4c", initRadius:"Indicator__initRadius__EMyoz", barRightRadius:"Indicator__barRightRadius__QWHeE", barLeftRadius:"Indicator__barLeftRadius__2M12Y", timerBtnDiv:"Indicator__timerBtnDiv__38Adf", timerBtn:"Indicator__timerBtn__1QqEw", activeTimer:"Indicator__activeTimer__3rtGz", herobanner:"Indicator__herobanner__Q1B0K", indicatorArea:"Indicator__indicatorArea__8eEhs"
						}
					}
					, 616:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", carouselContainer:"CardCarousel__carouselContainer__22EKB", visibleDiv:"CardCarousel__visibleDiv__OTlco", innerSlides:"CardCarousel__innerSlides__3foyp", bottomIndicator:"CardCarousel__bottomIndicator__17NMJ"
						}
					}
					, 619:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", "lb-container":"LightboxYouTube__lb-container__MmvUY", "lb-content":"LightboxYouTube__lb-content__2G7b9", "video-container":"LightboxYouTube__video-container__QFYm4", video:"LightboxYouTube__video__2GU19", "close-lightbox":"LightboxYouTube__close-lightbox__1IINc", "lb-figure":"LightboxYouTube__lb-figure__9waDw", arrowButton:"LightboxYouTube__arrowButton__S1fsY", imgWrapper:"LightboxYouTube__imgWrapper__kbdZJ"
						}
					}
					, 626:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"CompareCheckBox__wrapper__320u6", defaultInput:"CompareCheckBox__defaultInput__8WD6R", divCheckBox:"CompareCheckBox__divCheckBox__VSl5G", ckecked:"CompareCheckBox__ckecked__22ma6", customCheckBox:"CompareCheckBox__customCheckBox__2BBVU", labelText:"CompareCheckBox__labelText__2PsDG", wrapperCenter:"CompareCheckBox__wrapperCenter__1nHp1", KvSummary:"CompareCheckBox__KvSummary__3OReY"
						}
					}
					, 628:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", chooseColor:"ColorSelector__chooseColor__3gNDu", themeWhite:"ColorSelector__themeWhite__2dflW", isWhiteCard:"ColorSelector__isWhiteCard___RJng"
						}
					}
					, 629:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", carouselContainer:"SingleSlideCarousel__carouselContainer__3iM-u", visibleDiv:"SingleSlideCarousel__visibleDiv__3aWnx", innerSlides:"SingleSlideCarousel__innerSlides__1lHTK", next:"SingleSlideCarousel__next__hpULD", prev:"SingleSlideCarousel__prev__3Qy4C", notmouseover:"SingleSlideCarousel__notmouseover__2fUQ-"
						}
					}
					, 630:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", productCardContainer:"ProductCardNormal__productCardContainer__2Zaq_", featureDescriptionRow:"ProductCardNormal__featureDescriptionRow__oiDqm", compareRow:"ProductCardNormal__compareRow__25Lma", addToCompare:"ProductCardNormal__addToCompare__3ENsH", text:"ProductCardNormal__text__1sGfz", headingRow:"ProductCardNormal__headingRow__3WJW8", primaryBtnAndWishlistBtnRow:"ProductCardNormal__primaryBtnAndWishlistBtnRow__S2E1C", button:"ProductCardNormal__button__peEUy", whereToBuyRow:"ProductCardNormal__whereToBuyRow__2Fnaz", borderButton:"ProductCardNormal__borderButton__fBQ2E", isNew:"ProductCardNormal__isNew__6AsSq", purchaseInfoRow:"ProductCardNormal__purchaseInfoRow__1e9_O", priceWrap:"ProductCardNormal__priceWrap__3YDt4", price:"ProductCardNormal__price__16J79", AwardIconRow:"ProductCardNormal__AwardIconRow__1dztr", newFlagWrapper:"ProductCardNormal__newFlagWrapper__4FFst", dealFlagWrapper:"ProductCardNormal__dealFlagWrapper__1G-7g", awardIcons:"ProductCardNormal__awardIcons__3wl9_", awardIcon:"ProductCardNormal__awardIcon__3cMU2", mainImageRow:"ProductCardNormal__mainImageRow__1_b1n", fadeinActive:"ProductCardNormal__fadeinActive__1nO2R", fadein:"ProductCardNormal__fadein__2mWr3", imageWrapper:"ProductCardNormal__imageWrapper__32rhU", mainImageCarousel:"ProductCardNormal__mainImageCarousel__2h2QI", svgControllButton:"ProductCardNormal__svgControllButton__3BjlX", logoWrapper:"ProductCardNormal__logoWrapper__1wVsI", logoBox:"ProductCardNormal__logoBox__3kvFd", subHeadingRow:"ProductCardNormal__subHeadingRow__1OOiL", productInfoBox:"ProductCardNormal__productInfoBox__2v3q1", hrBehindDiscount:"ProductCardNormal__hrBehindDiscount__2Jnm0", hrAfterDiscount:"ProductCardNormal__hrAfterDiscount__1aJVy", hrGray:"ProductCardNormal__hrGray__3KKk-", priceType:"ProductCardNormal__priceType__5KnSq", save:"ProductCardNormal__save__3EpjB", regularPrice:"ProductCardNormal__regularPrice__cDiO-", discountHeight:"ProductCardNormal__discountHeight__BBWlv", priceWrapFull:"ProductCardNormal__priceWrapFull__vSCqs", saleTimeCounter:"ProductCardNormal__saleTimeCounter__uV59C", limitedPurchaseHint:"ProductCardNormal__limitedPurchaseHint__23Pp9", shippingHint:"ProductCardNormal__shippingHint__3bZVu", bell:"ProductCardNormal__bell__wCBO5", colorSelectorRow:"ProductCardNormal__colorSelectorRow__3J-py", hasBuyBtn:"ProductCardNormal__hasBuyBtn__8anlG", disabledButton:"ProductCardNormal__disabledButton__pzD5t", loveIcon:"ProductCardNormal__loveIcon__coOmK", cardItemBottom:"ProductCardNormal__cardItemBottom__c917y", whereToBuy:"ProductCardNormal__whereToBuy__1KUhL", ghostButton:"ProductCardNormal__ghostButton__1r1Vn", isWhiteCard:"ProductCardNormal__isWhiteCard__DUBB1", hasDiscount:"ProductCardNormal__hasDiscount__2nr_x", hideBlock:"ProductCardNormal__hideBlock__2x4Hd"
						}
					}
					, 635:function(module, __webpack_exports__, __webpack_require__) {
						"use strict";
						var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27), core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__), core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13), core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__), core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24), core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__), _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4), nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0), nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__), _mixin_GAMixins__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14), _lib_domain__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(110), __extends=(_extendStatics=function(e, b) {
							return(_extendStatics=Object.setPrototypeOf|| {
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
							_extendStatics(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), _extendStatics, __decorate=function(e, t, r, desc) {
							var o, n=arguments.length, l=n<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(l=(n<3?o(l): n>3?o(t, r, l):o(t, r))||l);
							return n>3&&l&&Object.defineProperty(t, r, l), l
						}
						, OnlineChat=function(_super) {
							function OnlineChat() {
								var e=null!==_super&&_super.apply(this, arguments)||this;
								return e.onlineChatData= {
									co: {
										client: "5ea8c377f0135d3e2f55bdc7148e7227122e547b", botHash:"014e257cd60bbe103301fe4dff368135576e96bd"
									}
									, cl: {
										client: "5ea8c377f0135d3e2f55bdc7148e7227122e547b", botHash:"1cbb9a9342a38638380deedb8451a12a896d2980"
									}
									, pe: {
										client: "5ea8c377f0135d3e2f55bdc7148e7227122e547b", botHash:"2fe956353ac72d9e370957a4c5138e5155d7cad5"
									}
								}
								, e.expandWrpper=!0, e.onlineChat= {
									URL: "TEST"
								}
								, e.classType="", e.websiteCode="", e.fcWidgetInit= {}
								, e.topMenuData= {}
								, e
							}
							return __extends(OnlineChat, _super), OnlineChat.prototype.mounted=function() {
								if(this.websiteCode=Object(_lib_domain__WEBPACK_IMPORTED_MODULE_6__.b)(this.$route.params.region), window&&window.addEventListener("scroll", this.collapseWrapperWhenScroll), ""===this.classType&&(this.classType=this.$route.name), "cl"===this.websiteCode||"co"===this.websiteCode||"pe"===this.websiteCode) {
									var _this_2=this;
									!function(d, w, c) {
										if(!d.getElementById("spd-busns-spt")) {
											var n=d.getElementsByTagName("script")[0], s=d.createElement("script"), loaded=!1;
											s.id="spd-busns-spt", s.async="async", s.setAttribute("data-self-init", "false"), s.setAttribute("data-init-type", "opt"), s.src="https://cdn.freshbots.ai/assets/share/js/freshbots.min.js", s.setAttribute("data-client", _this_2.onlineChatData[_this_2.websiteCode].client), s.setAttribute("data-bot-hash", _this_2.onlineChatData[_this_2.websiteCode].botHash), s.setAttribute("data-env", "prod"), s.setAttribute("data-region", "us"), c&&(s.onreadystatechange=s.onload=function() {
												if(!loaded) {
													c();
													var x=eval("Freshbots");
													x.initiateWidget( {
														autoInitChat:!1, getClientParams:function() {}
													}
													, (function(e) {
														null!==document.querySelector("#pingpongchat")&&document.querySelector("#mobile-chat-container")&&(document.querySelector("#pingpongchat").appendChild(document.querySelector("#mobile-chat-container")), document.querySelector("#mobile-chat-container").style.bottom="0px", document.querySelector("#mobile-chat-container").style.right="0px", document.querySelector("#mobile-chat-container").style.position="relative", document.querySelector("#mobile-chat-container").setAttribute("alt", _this_2.topMenuData.ProductLine.LiveChat))
													}
													), (function(e) {}
													))
												}
												loaded=!0
											}
											), n.parentNode.insertBefore(s, n)
										}
									}
									(document, window, (function() {}
									))
								}
							}
							, OnlineChat.prototype.setTopMenuData=function() {
								this.topMenuDataGetter&&this.topMenuDataGetter.ProductLine&&(this.topMenuData=this.topMenuDataGetter)
							}
							, OnlineChat.prototype.collapseWrapperWhenScroll=function() {
								window.scrollY>300||window.pageYOffset>300?this.expandWrpper=!1: this.expandWrpper=!0
							}
							, __decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.Getter)("topMenuDataGetter")], OnlineChat.prototype, "topMenuDataGetter", void 0), __decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.Getter)("onlineChatDataGetter")], OnlineChat.prototype, "onlineChatDataGetter", void 0), __decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.Prop)()], OnlineChat.prototype, "rwdWidth", void 0), __decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.Prop)()], OnlineChat.prototype, "compareMenuShowState", void 0), __decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.Prop)()], OnlineChat.prototype, "compareNum", void 0), __decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.Watch)("topMenuDataGetter", {
								immediate: !0
							}
							)], OnlineChat.prototype, "setTopMenuData", null), OnlineChat=__decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.Component)( {}
							)], OnlineChat), OnlineChat
						}
						(Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_4__.mixins)(_mixin_GAMixins__WEBPACK_IMPORTED_MODULE_5__.a));
						__webpack_exports__.a=OnlineChat
					}
					, 636:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"OnlineChat__wrapper__14rUZ", compare:"OnlineChat__compare__bPtmj", compareUp:"OnlineChat__compareUp__1os13", compareDown:"OnlineChat__compareDown__3tAuq", buttonDown:"OnlineChat__buttonDown__1oKDN", text:"OnlineChat__text__34VpN", buttonDownMobile:"OnlineChat__buttonDownMobile__2-nlL", icon:"OnlineChat__icon__mpKGT", TabletAndMobile:"OnlineChat__TabletAndMobile__2IcKK", textDisplay:"OnlineChat__textDisplay__85FnQ", textDisplayDown:"OnlineChat__textDisplayDown__3L5VX"
						}
					}
					, 642:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", productCardContainer:"ProductCardSpotlight__productCardContainer__2-1CF", spotlightItemImg:"ProductCardSpotlight__spotlightItemImg__1NMET", spotlighItem:"ProductCardSpotlight__spotlighItem__3KkCJ", spotlightTitle:"ProductCardSpotlight__spotlightTitle__eYtVQ", spotlightContent:"ProductCardSpotlight__spotlightContent__3k-am", AwardIconRow:"ProductCardSpotlight__AwardIconRow__z1lnC", newFlagWrapper:"ProductCardSpotlight__newFlagWrapper__1_mQT"
						}
					}
					, 643:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", section:"CardCarouselSpotlight__section__3VrYP", productCardWraper:"CardCarouselSpotlight__productCardWraper__cwMuN", Heading:"CardCarouselSpotlight__Heading__1f54g", carouselContainer:"CardCarouselSpotlight__carouselContainer__286uE", visibleDiv:"CardCarouselSpotlight__visibleDiv__2uRII", innerSlides:"CardCarouselSpotlight__innerSlides__2a5U0", bottomIndicator:"CardCarouselSpotlight__bottomIndicator__LXJA0"
						}
					}
					, 644:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", section:"Spotlight__section__2bkIC", productCardWraper:"Spotlight__productCardWraper__1WI-y", Heading:"Spotlight__Heading__3F3Di", carouselContainer:"Spotlight__carouselContainer__1acVq"
						}
					}
					, 645:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", checkBoxContainer:"SingleCheckBox__checkBoxContainer__5DTcW", "custom-control-input":"SingleCheckBox__custom-control-input__1WRHO", "custom-control-label":"SingleCheckBox__custom-control-label__1PSFi"
						}
					}
					, 646:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", checkBoxContainer:"CheckBoxGroupItem__checkBoxContainer__1GW0X", "custom-control-input":"CheckBoxGroupItem__custom-control-input__1JUTj", "custom-control-label":"CheckBoxGroupItem__custom-control-label__2MhGH", notInEnableList:"CheckBoxGroupItem__notInEnableList__2PG1o"
						}
					}
					, 647:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", collapseWrapper:"CheckBoxGroup__collapseWrapper__2JvEz", collapsible:"CheckBoxGroup__collapsible__3msxd", answerOptions:"CheckBoxGroup__answerOptions__2f0E8", svgBox:"CheckBoxGroup__svgBox__1QZTE"
						}
					}
					, 648:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", productCardContainer:"ProductCard__productCardContainer__3Fh7_", featureDescriptionRow:"ProductCard__featureDescriptionRow__2P_Ye", headingRow:"ProductCard__headingRow__18OVH", AwardIconRow:"ProductCard__AwardIconRow__16gMg", newFlagWrapper:"ProductCard__newFlagWrapper__19osU", dealFlagWrapper:"ProductCard__dealFlagWrapper__3VRWh", awardIcons:"ProductCard__awardIcons__2mBaf", awardIcon:"ProductCard__awardIcon__2InTr", mainImageRow:"ProductCard__mainImageRow__K0Qhw", fadeinActive:"ProductCard__fadeinActive__2u5c1", fadein:"ProductCard__fadein__3rmea", imageWrapper:"ProductCard__imageWrapper__3IbYa", mainImageCarousel:"ProductCard__mainImageCarousel__3Lmwr", svgControllButton:"ProductCard__svgControllButton__1wIaU", subHeadingRow:"ProductCard__subHeadingRow__3huEM", productInfoBox:"ProductCard__productInfoBox__1OmUE", hrBehindDiscount:"ProductCard__hrBehindDiscount__wPyIb", hasDiscount:"ProductCard__hasDiscount__3Cisi", hrAfterDiscount:"ProductCard__hrAfterDiscount__2VRCO", hrGray:"ProductCard__hrGray__2BHJg", purchaseInfoRow:"ProductCard__purchaseInfoRow__1E3rL", priceType:"ProductCard__priceType__1XuwD", priceWrap:"ProductCard__priceWrap__1rttq", price:"ProductCard__price__21KZk", save:"ProductCard__save__1puJ4", regularPrice:"ProductCard__regularPrice__1YuPT", discountHeight:"ProductCard__discountHeight__3ilsF", priceWrapFull:"ProductCard__priceWrapFull__2nksk", saleTimeCounter:"ProductCard__saleTimeCounter__3Vqkh", limitedPurchaseHint:"ProductCard__limitedPurchaseHint__2Zvbo", shippingHint:"ProductCard__shippingHint__rKXaU", bell:"ProductCard__bell__2xBR4", colorSelectorRow:"ProductCard__colorSelectorRow__1K97L", primaryBtnAndWishlistBtnRow:"ProductCard__primaryBtnAndWishlistBtnRow__2Simn", button:"ProductCard__button__1bpXj", loveIcon:"ProductCard__loveIcon__47_AR", cardItemBottom:"ProductCard__cardItemBottom__3rk5S", whereToBuyRow:"ProductCard__whereToBuyRow___EiXf", whereToBuy:"ProductCard__whereToBuy__MOpDq", ghostButton:"ProductCard__ghostButton__3YteJ", compareRow:"ProductCard__compareRow__3-Psg", addToCompare:"ProductCard__addToCompare__dbAJR", text:"ProductCard__text__2k6Zm", hideBlock:"ProductCard__hideBlock__cDQ8d", isWhiteCard:"ProductCard__isWhiteCard__chlB-"
						}
					}
					, 649:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", section:"HelpMeChooseResult__section__UxAuq", productCardWraper:"HelpMeChooseResult__productCardWraper__3REhe", Heading:"HelpMeChooseResult__Heading__18oXG", carouselContainer:"HelpMeChooseResult__carouselContainer__3GLdo"
						}
					}
					, 651:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", chooseYourLaptopsSection:"HelpMeChoose__chooseYourLaptopsSection__2WoE4", chooseYourLaptopsContainer:"HelpMeChoose__chooseYourLaptopsContainer__150EH", titleContainer:"HelpMeChoose__titleContainer__3Pxe2", Heading:"HelpMeChoose__Heading__1JMk7", qaSelectWrapper:"HelpMeChoose__qaSelectWrapper__31X6i", controllButtonGroup:"HelpMeChoose__controllButtonGroup__361CT", resetButton:"HelpMeChoose__resetButton__3gpNX", collapseAll:"HelpMeChoose__collapseAll__2JteE", viewMyLaptops:"HelpMeChoose__viewMyLaptops__zy57h"
						}
					}
					, 660:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"FilterCheckBox__wrapper__2QsXG", customCheckBox:"FilterCheckBox__customCheckBox__1mjkE", disabled:"FilterCheckBox__disabled__1zgRT", defaultInput:"FilterCheckBox__defaultInput__26Sn0", partialChecked:"FilterCheckBox__partialChecked__18Ia9", wrapperCenter:"FilterCheckBox__wrapperCenter__1aXoR"
						}
					}
					, 661:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"SeriesFilter__wrapper__2aKT4", hasOrder:"SeriesFilter__hasOrder__1iMfr", filterSection:"SeriesFilter__filterSection__dOwkx", orderItem:"SeriesFilter__orderItem__3fWdO", filterToggleButton:"SeriesFilter__filterToggleButton__3oXyH", partialCheckedFakeMask:"SeriesFilter__partialCheckedFakeMask__HSS2z", showMoreToggleBtn:"SeriesFilter__showMoreToggleBtn__2rVKp", title:"SeriesFilter__title__2VI99", toggleIcon:"SeriesFilter__toggleIcon__9DTC5", collapseIcon:"SeriesFilter__collapseIcon__1X9rW", listContainer:"SeriesFilter__listContainer__1jYq9", showMoreBtn:"SeriesFilter__showMoreBtn__3_NTW", subListContainer:"SeriesFilter__subListContainer__2BrLf", expand:"SeriesFilter__expand__2b_a8", listItem:"SeriesFilter__listItem__2a7MM", toggleBtn:"SeriesFilter__toggleBtn__2oUbN", collapseBtn:"SeriesFilter__collapseBtn__3Zh2Y"
						}
					}
					, 665:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", comparisonMobileHeader:"ComparisonMenu__comparisonMobileHeader__2dugq", comparisonMobileClearAll:"ComparisonMenu__comparisonMobileClearAll__2WoEk", comparisonItem:"ComparisonMenu__comparisonItem__37gyi", comparisonItemInfo:"ComparisonMenu__comparisonItemInfo__Ph4zO", comparisonItemName:"ComparisonMenu__comparisonItemName__1Mz8h", comparisonMobileFooter:"ComparisonMenu__comparisonMobileFooter__1BoDG", comparisonMobileCancel:"ComparisonMenu__comparisonMobileCancel__12H9L", comparisonItemContentCompare:"ComparisonMenu__comparisonItemContentCompare__3S7LM", comparisonMenuLayout:"ComparisonMenu__comparisonMenuLayout__2_IQx", hideMenu:"ComparisonMenu__hideMenu__1ZhHf", comparisonMenuButton:"ComparisonMenu__comparisonMenuButton__2HXD4", collapseMenuButton:"ComparisonMenu__collapseMenuButton__EzfcL", expandMenuButton:"ComparisonMenu__expandMenuButton__2OygA", comparisonMenuContent:"ComparisonMenu__comparisonMenuContent__MeKV1", comparisonMenuList:"ComparisonMenu__comparisonMenuList__3GNFF", comparisonItemContent:"ComparisonMenu__comparisonItemContent__2TmOM", comparisonItemDelete:"ComparisonMenu__comparisonItemDelete__E20ML", comparisonItemPrice:"ComparisonMenu__comparisonItemPrice__32LF9", comparisonItemImg:"ComparisonMenu__comparisonItemImg__1HP9t", comparisonItemNamePs:"ComparisonMenu__comparisonItemNamePs__2UDUS", StartingAtWording:"ComparisonMenu__StartingAtWording__1COWe", comparisonItemNamePrice:"ComparisonMenu__comparisonItemNamePrice__zQmNs", comparisonItemNamePriceSave:"ComparisonMenu__comparisonItemNamePriceSave__1zZpz", breakLine:"ComparisonMenu__breakLine__TBcW3", comparisonNoItem:"ComparisonMenu__comparisonNoItem__FVR9S", comparisonItemClearAll:"ComparisonMenu__comparisonItemClearAll__6ks8_", comparisonItemContentPs:"ComparisonMenu__comparisonItemContentPs__3g2dA", disableButton:"ComparisonMenu__disableButton__2TZKY", showMenu:"ComparisonMenu__showMenu__2xVDu"
						}
					}
					, 666:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", wrapper:"FloatingComparison__wrapper__6Eoh1", iconDiv:"FloatingComparison__iconDiv__1hVE8", expand:"FloatingComparison__expand__2qqYF", text:"FloatingComparison__text__3UM9P", fadeIn:"FloatingComparison__fadeIn__FhPgN", expandDeals:"FloatingComparison__expandDeals__2fgxt", moveUp:"FloatingComparison__moveUp__3LLrI", buttonUp:"FloatingComparison__buttonUp__1cJ5z", buttonUpMobile:"FloatingComparison__buttonUpMobile__34ZQ2", moveDown:"FloatingComparison__moveDown__3bclH", buttonDown:"FloatingComparison__buttonDown__AaR6h", buttonDownMobile:"FloatingComparison__buttonDownMobile__mUjkY", collapse:"FloatingComparison__collapse__1AOSP", fadeOut:"FloatingComparison__fadeOut__2C6Lf", collapseDeals:"FloatingComparison__collapseDeals__21jmZ", icon:"FloatingComparison__icon__10SzK", textDisplayUp:"FloatingComparison__textDisplayUp__3vH9s", "textDisplayUp-ltr":"FloatingComparison__textDisplayUp-ltr__2dKE7", "textDisplayUp-rtl":"FloatingComparison__textDisplayUp-rtl__3tF_F", overview:"FloatingComparison__overview__1ZDVH", overviewFixed:"FloatingComparison__overviewFixed__nL7gF", firstItem:"FloatingComparison__firstItem__m_F9Q", textDisplay:"FloatingComparison__textDisplay__15R5s", noItem:"FloatingComparison__noItem__3HVIf", firstItemDeals:"FloatingComparison__firstItemDeals__3CDRk", noItemDeals:"FloatingComparison__noItemDeals__2Zr40"
						}
					}
					, 667:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", content:"Disclaimer__content__3XxG-", disclaimer:"Disclaimer__disclaimer__m8mZD", SeriesPageDisclaimer:"Disclaimer__SeriesPageDisclaimer__108Rq", levelDisclaimer:"Disclaimer__levelDisclaimer__2Zgnp", wrapper:"Disclaimer__wrapper__2btGc", themeWhite:"Disclaimer__themeWhite__3RVLp", fullWidth:"Disclaimer__fullWidth__1-5rZ", HDMIImage:"Disclaimer__HDMIImage__1f0Pn"
						}
					}
					, 683:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", sliderSection:"FeaturedAccessories__sliderSection__wypXP", swiperWrapper:"FeaturedAccessories__swiperWrapper__1udPq", swiperSlide:"FeaturedAccessories__swiperSlide__1KOW-", slideDescription:"FeaturedAccessories__slideDescription__1a_dH", slideTitle:"FeaturedAccessories__slideTitle__2P42v", sectionHeadingWrapper:"FeaturedAccessories__sectionHeadingWrapper__18DSW", sectionHeading:"FeaturedAccessories__sectionHeading__E76tm", swiperNextButton:"FeaturedAccessories__swiperNextButton__2p2br", swiperPrevButton:"FeaturedAccessories__swiperPrevButton__3-sth", swiperMainSlide:"FeaturedAccessories__swiperMainSlide__3wAIK", slideInfo:"FeaturedAccessories__slideInfo__3gA4y", ghostButton:"FeaturedAccessories__ghostButton__1rD4c", featuredAccessoriesWrapper:"FeaturedAccessories__featuredAccessoriesWrapper__1I_lr", sectionWrapper:"FeaturedAccessories__sectionWrapper__3XT4x", fadein:"FeaturedAccessories__fadein__vDnNu", slideImageWrapper:"FeaturedAccessories__slideImageWrapper__2Uu6_", slideImage:"FeaturedAccessories__slideImage__hi9HN"
						}
					}
					, 700:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", imageCarousel:"ProductReviewListWithCarousel__imageCarousel__38m8l", inner:"ProductReviewListWithCarousel__inner__HFU73", itemImg:"ProductReviewListWithCarousel__itemImg__iZSHx", item:"ProductReviewListWithCarousel__item__2Ddcg", prevDiv:"ProductReviewListWithCarousel__prevDiv__2geze", nextDiv:"ProductReviewListWithCarousel__nextDiv__1ziuR", bannerInfo:"ProductReviewListWithCarousel__bannerInfo__2xD06", promotion:"ProductReviewListWithCarousel__promotion__22NIC", productReview:"ProductReviewListWithCarousel__productReview__1cn5l", imageCarouselindicator:"ProductReviewListWithCarousel__imageCarouselindicator__27OT5", indicator:"ProductReviewListWithCarousel__indicator__2TQr0", indicatorSingleline:"ProductReviewListWithCarousel__indicatorSingleline__3tBeG", indicatorvideo:"ProductReviewListWithCarousel__indicatorvideo__1JZVl", productReviewInner:"ProductReviewListWithCarousel__productReviewInner__30Vxl", productReviewItem:"ProductReviewListWithCarousel__productReviewItem__dfXLV", contentImage:"ProductReviewListWithCarousel__contentImage__wT1ic", imageBox:"ProductReviewListWithCarousel__imageBox__1R8gx", videoWrapper:"ProductReviewListWithCarousel__videoWrapper__1Zqiw", videoBox:"ProductReviewListWithCarousel__videoBox__3Nx1y", scenarioContent:"ProductReviewListWithCarousel__scenarioContent__2qmhM", themeWhite:"ProductReviewListWithCarousel__themeWhite__1GhEe", contentTitle:"ProductReviewListWithCarousel__contentTitle__zz0Sm", scenarioVideoContent:"ProductReviewListWithCarousel__scenarioVideoContent__25rgW", productReviewInnerBox:"ProductReviewListWithCarousel__productReviewInnerBox__1LiEi", indicatorLine:"ProductReviewListWithCarousel__indicatorLine__qCQpu", indicatorActive:"ProductReviewListWithCarousel__indicatorActive__Qw34S", awardReviewItem:"ProductReviewListWithCarousel__awardReviewItem__XEirS", awardsReviewItem:"ProductReviewListWithCarousel__awardsReviewItem__2UQOB", mediaReviewItem:"ProductReviewListWithCarousel__mediaReviewItem__AFxwg", indicatorLayout:"ProductReviewListWithCarousel__indicatorLayout__2R3qQ", videoReviewItem:"ProductReviewListWithCarousel__videoReviewItem__3WnJH", playVedioButton:"ProductReviewListWithCarousel__playVedioButton__XbqBa", layoutBox:"ProductReviewListWithCarousel__layoutBox__19ada", layoutCarousel:"ProductReviewListWithCarousel__layoutCarousel__216Ky", productReviewALL:"ProductReviewListWithCarousel__productReviewALL__20wPH", award:"ProductReviewListWithCarousel__award__2cAHs", media:"ProductReviewListWithCarousel__media__Ksayo", totalItemTwo:"ProductReviewListWithCarousel__totalItemTwo__65Us9", totalItemsingle:"ProductReviewListWithCarousel__totalItemsingle__24iWR", video:"ProductReviewListWithCarousel__video__1D8Jp", lastItemsingle:"ProductReviewListWithCarousel__lastItemsingle__3lu0U"
						}
					}
					, 701:function(e, t, r) {
						e.exports= {
							fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', fontFamilyBold:'"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif', breakPointMedium:"1279px", breakPointHeaderTablet:"1023px", breakPointSmall:"731px", productReviewTitle:"LevelFourProductReviewAllContent__productReviewTitle__1-E5P", productReviewlayout:"LevelFourProductReviewAllContent__productReviewlayout__2N6n7", themeWhite:"LevelFourProductReviewAllContent__themeWhite__1CKSx", productReviewTab:"LevelFourProductReviewAllContent__productReviewTab__2xMAr", productReviewSelected:"LevelFourProductReviewAllContent__productReviewSelected__1AF59", productReviewTabIcon:"LevelFourProductReviewAllContent__productReviewTabIcon__P_2C1", productReviewBlueLine:"LevelFourProductReviewAllContent__productReviewBlueLine__b0gmJ", productReviewHref:"LevelFourProductReviewAllContent__productReviewHref__VZOAF", arrowRight:"LevelFourProductReviewAllContent__arrowRight__26RoQ", overView:"LevelFourProductReviewAllContent__overView__3UDFL", overViewMargin:"LevelFourProductReviewAllContent__overViewMargin__2V3C2", productReviewSeeAll:"LevelFourProductReviewAllContent__productReviewSeeAll__396RM", productReviewSeeAllVideo:"LevelFourProductReviewAllContent__productReviewSeeAllVideo__2LJX6"
						}
					}
					, 756:function(e, t, r) {
						"use strict";
						r(13), r(24);
						var o, n=r(4), l=r(0), c=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), d=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, h=function(e) {
							function t() {
								return null!==e&&e.apply(this, arguments)||this
							}
							return c(t, e), d([Object(l.Prop)()], t.prototype, "href", void 0), d([Object(l.Prop)()], t.prototype, "title", void 0), d([Object(l.Prop)()], t.prototype, "rwdState", void 0), d([Object(l.Prop)( {
								default: "#fced8e"
							}
							)], t.prototype, "PromoFontColorStart", void 0), d([Object(l.Prop)( {
								default: "#93f1cf"
							}
							)], t.prototype, "PromoFontColorEnd", void 0), d([Object(l.Prop)( {
								default: ""
							}
							)], t.prototype, "headerMargin", void 0), d([Object(l.Prop)( {
								default: ""
							}
							)], t.prototype, "promotionBannerMargin", void 0), t=d([Object(l.Component)( {}
							)], t)
						}
						(l.Vue), m=r(802), _=r(8);
						var component=Object(_.a)(h, (function() {
							var e, t, r=this, o=r.$createElement, n=r._self._c||o;
							return n("a", {
								class:[(e= {}
								, e[r.$style.headerMargin]=1===r.headerMargin, e), (t= {}
								, t[r.$style.promotionBannerMargin]=1===r.promotionBannerMargin, t)], attrs: {
									href: !(!r.href||r.disabled)&&r.href
								}
							}
							, ["mobile"===r.rwdState?n("div", {
								class: r.$style.mobilePromotionFlagWrap
							}
							, [n("div", {
								class: r.$style.triangle
							}
							), r._v(" "), n("svg", {
								attrs: {
									xmlns: "http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 36 36", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
								}
							}
							, [n("path", {
								attrs: {
									stroke: "#fff", "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-miterlimit":"10", "stroke-width":"1.5", d:"M21.4 16.962s-2.8-2.855-2.8-8.176c0-4.282 1.333-6.359 2.8-7.786m9.467 19.985L31 7.748l-13.6.13L3 21.893l1.867 1.817 9.733 9.473L16.467 35l14.4-14.015zm-12.134-1.298c-1.6-1.557-1.6-4.153-.133-5.58 1.6-1.557 4.133-1.557 5.733.13 1.6 1.557 1.6 4.152.134 5.58-1.6 1.557-4.134 1.427-5.734-.13z"
								}
							}
							)])]):n("div", {
								class: r.$style.promotionFlagWrap
							}
							, [n("span", {
								class: r.$style.promotionTitle
							}
							, [r._v(r._s(r.title))]), r._v(" "), n("br"), r._v(" "), n("span", {
								class:r.$style.promotionInfo, style: {
									backgroundImage: "linear-gradient(to right, "+r.PromoFontColorStart+", "+r.PromoFontColorEnd+")"
								}
							}
							, [r._t("default")], 2)])])
						}
						), [], !1, (function(e) {
							this.$style=m.default.locals||m.default
						}
						), null, null);
						t.a=component.exports
					}
					, 757:function(e, t, r) {
						"use strict";
						r(13), r(24);
						var o, n=r(4), l=r(0), c=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), d=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, h=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.rwdState="", t.lightBoxOn=!1, t.videoUrl="", t
							}
							return c(t, e), t.prototype.LinkTransChild=function(e) {
								this.videoUrl=e, this.lightBoxOn=!0, null!=document&&this.onToggleLightBox(e)
							}
							, t.prototype.addKeyEvent=function(e) {
								27===e.keyCode&&this.closeLightBox()
							}
							, t.prototype.closeLightBox=function() {
								this.closable&&(this.$set(this, "lightBoxOn", !1), document.querySelector("html").classList.remove("no-scroll"), this.videoUrl="")
							}
							, t.prototype.onToggleLightBox=function(e) {
								document&&(this.disableScroll&&(e?document.querySelector("html").classList.add("no-scroll"): document.querySelector("html").classList.remove("no-scroll")), e?document.addEventListener("keydown", this.addKeyEvent):document.removeEventListener("keydown", this.addKeyEvent))
							}
							, t.prototype.mounted=function() {
								this.onToggleLightBox(this.lightBoxOn)
							}
							, d([Object(l.Prop)()], t.prototype, "propVideoUrl", void 0), d([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), d([Object(l.Prop)()], t.prototype, "videoWidth", void 0), d([Object(l.Prop)()], t.prototype, "videoheight", void 0), d([Object(l.Prop)( {
								default: !0
							}
							)], t.prototype, "disableScroll", void 0), d([Object(l.Prop)( {
								default: !0
							}
							)], t.prototype, "showLightBox", void 0), d([Object(l.Prop)( {
								default: !0
							}
							)], t.prototype, "closable", void 0), d([Object(l.Prop)( {
								default: "Close (Esc)"
							}
							)], t.prototype, "closeText", void 0), t=d([Object(l.Component)( {
								components: {}
							}
							)], t)
						}
						(l.Vue), m=r(810), _=r(8);
						var component=Object(_.a)(h, (function() {
							var e=this, t=e.$createElement, r=e._self._c||t;
							return r("div", [r("div", {
								directives:[ {
									name: "show", rawName:"v-show", value:e.lightBoxOn, expression:"lightBoxOn"
								}
								], ref:"container", class:e.$style["lb-container"], on: {
									click:function(t) {
										return t.target!==t.currentTarget?null: e.closeLightBox(t)
									}
								}
							}
							, [r("div", {
								class: e.$style["lb-content"]
							}
							, [r("div", {
								class: e.$style["video-container"]
							}
							, [r("iframe", {
								class:e.$style.video, attrs: {
									src: e.videoUrl, frameborder:"0", allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen:""
								}
							}
							)]), e._v(" "), e.closable?r("button", {
								class:e.$style["close-lightbox"], attrs: {
									type: "button", title:e.closeText
								}
								, on: {
									click:function(t) {
										return t.stopPropagation(), e.closeLightBox(t)
									}
								}
							}
							, [e._t("close", [r("svg", {								attrs: {									viewBox: "0 0 26 26", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"								}							}							, [r("path", {								attrs: {									d: "M7.68 6.83a.6.6 0 10-.85.85l.85-.85zM18.32 19.17a.6.6 0 00.849-.849l-.849.849zm-11.49-.849a.6.6 0 10.848.849l-.848-.849zM19.17 7.68a.6.6 0 00-.849-.848l.849.848zm-12.34 0l11.491 11.49.849-.848L7.68 6.831l-.85.848zm.85 11.49L19.17 7.68l-.849-.848-11.49 11.49.848.849z", fill:"#181818"								}							}							)])])], 2):e._e()])])])
						}
						), [], !1, (function(e) {
							this.$style=m.default.locals||m.default
						}
						), null, null);
						t.a=component.exports
					}
					, 758:function(e, t, r) {
						"use strict";
						r(13), r(24), r(395);
						var o, n=r(4), l=r(0), c=r(627), d=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), h=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, m=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.componentId=null, t
							}
							return d(t, e), t.prototype.mounted=function() {
								this.componentId=this.getComponentId("colorSelector")
							}
							, Object.defineProperty(t.prototype, "checked", {
								get:function() {
									return this.colorCodePicked
								}
								, set:function(e) {
									this.$emit("changeColorPick", e)
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.checkedColor=function(e) {
								this.checked=e
							}
							, t.prototype.getColorCode=function(e) {
								if(e.ColorCode||e.colorCode) {
									var t=e.ColorCode||e.colorCode;
									return!1===t.startsWith("#")&&(t="#"+t), t
								}
								return""
							}
							, h([Object(l.Getter)("themeColorGetter")], t.prototype, "themeColor", void 0), h([Object(l.Prop)()], t.prototype, "colorCodePicked", void 0), h([Object(l.Prop)()], t.prototype, "colorList", void 0), h([Object(l.Prop)( {								default: !1							}							)], t.prototype, "isWhiteCard", void 0), t=h([Object(l.Component)( {								components: {}							}							)], t)
						}
						(Object(l.mixins)(c.a)), _=r(838), f=r(8);
						var component=Object(f.a)(m, (function() {
							var e, t=this, r=t.$createElement, o=t._self._c||r;
							return t.colorList?o("div", {
								class:[t.$style.chooseColor, (e= {}
								, e[t.$style.isWhiteCard]=t.isWhiteCard, e)], attrs: {
									role: "radiogroup"
								}
							}
							, [t._l(t.colorList, (function(e, r) {								return[o("div", {									directives:[ {										name: "show", rawName:"v-show", value:e.displayColorBtn||null==e.displayColorBtn, expression:"item.displayColorBtn || item.displayColorBtn == undefined"									}									], key:r, attrs: {
										role: "radio", tabindex:e.displayColorBtn||null==e.displayColorBtn?0:-1, "aria-checked":"false"
									}
									, on: {
										keyup:function(r) {
											return!r.type.indexOf("key")&&t._k(r.keyCode, "enter", 13, r.key, "Enter")?null: t.checkedColor(e.ColorCode||e.colorCode)
										}
										, keydown:function(r) {
											return!r.type.indexOf("key")&&t._k(r.keyCode, "space", 32, r.key, [" ", "Spacebar"])?null: (r.preventDefault(), t.checkedColor(e.ColorCode||e.colorCode))
										}
									}
								}
								, [o("input", {									directives:[ {										name: "model", rawName:"v-model", value:t.checked, expression:"checked"									}									], key:t.componentId+"-"+r, class:t.$style["theme"+t.themeColor], attrs: {
										id: t.componentId+"-"+r, type:"radio", name:"colorSelector-"+t.componentId
									}
									, domProps: {
										value: e.ColorCode||e.colorCode, checked:t._q(t.checked, e.ColorCode||e.colorCode)
									}
									, on: {
										change:function(r) {
											t.checked=e.ColorCode||e.colorCode
										}
									}
								}
								), t._v(" "), o("label", {
									key:t.componentId+"-label-"+r, style: {
										backgroundColor: t.getColorCode(e)
									}
									, attrs: {
										for: t.componentId+"-"+r
									}
								}
								)])]
							}
							))], 2):t._e()
						}
						), [], !1, (function(e) {
							this.$style=_.default.locals||_.default
						}
						), null, null);
						t.a=component.exports
					}
					, 759:function(e, t, r) {
						"use strict";
						r(32), r(13), r(24), r(16), r(17), r(25), r(37), r(33);
						var o, n=r(4), l=r(0), c=r(621), d=r.n(c), h=r(775), m=r.n(h), _=r(584), f=r(606), C=r(758), y=r(797), v=r(14), I=r(110), S=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), P=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, w=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.colorCodePicked="", t.mainImageArray=[], t.fadeInAnimation=!1, t.compareMenuList= {}
								, t.websiteCode="", t.mainImageArrayOriginalLength=0, t
							}
							return S(t, e), t.prototype.created=function() {
								this.websiteCode=Object(I.b)(this.$route.params.region), this.mainImageArrayOriginalLength=this.mainImageArray?this.mainImageArray.length: 0
							}
							, Object.defineProperty(t.prototype, "themeColor", {
								get:function() {
									return this.$store.getters.themeColorGetter
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "hasBuyLink", {
								get:function() {
									return!!this.productCardItem.Buy.Link
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "hasWereToBuy", {
								get:function() {
									return 1===this.productCardItem.WhereToBuy.WTBFlag
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "hasPrice", {
								get:function() {
									return!!this.productCardItem.Price
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "getSlideCount", {
								get:function() {
									return this.mainImageArray&&this.mainImageArray.length>0?1===this.mainImageArrayOriginalLength?1: this.mainImageArray.length:0
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "getHeadingRowHeight", {
								get:function() {
									return this.productCardContent.contentLayout.headingRowHeight
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "isUseDiscountHeight", {
								get:function() {
									return!this.productCardContent.isHideContent.discountRow
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.setDefaultProductColor=function() {
								var e;
								if(this.productCardItem.ImageList&&this.productCardItem.ImageList.forEach((function(e) {
									e.displayColorBtn="Y"!==e.DefaultFlag
								}
								)), ""===this.colorCodePicked&&(null===(e=this.productCardItem.ImageList)||void 0===e?void 0:e.length)>0) {
									var t=d()(this.productCardItem.ImageList, (function(e) {
										return"Y"===e.DefaultFlag
									}
									));
									t=-1===t?0:t, this.colorCodePicked=this.productCardItem.ImageList[t].ColorCode
								}
							}
							, t.prototype.changeMainPage=function() {
								var e, t=this;
								this.colorCodePicked&&(e=m()(this.productCardItem.ImageList, (function(element) {
									return element.ColorCode===t.colorCodePicked
								}
								)))&&(this.mainImageArray=e.ImageURL, this.fadeInAnimationActive())
							}
							, t.prototype.AddMainImageArray=function(e) {
								this.$set(this.mainImageArray, e, this.mainImageArray[e%this.mainImageArrayOriginalLength])
							}
							, t.prototype.colorSelectorPick=function(e) {
								this.colorCodePicked=e, this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+e, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "buttons", "clicked", this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+e])
							}
							, t.prototype.sendGA=function(data) {
								this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+(data?"Add to comparison":"Move out off comparison")+" - "+this.productCardItem.Compare, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "buttons", "clicked", this.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+(data?"Add to comparison":"Move out off comparison")+" - "+this.productCardItem.Compare])
							}
							, t.prototype.fadeInAnimationActive=function() {
								var e=this;
								this.fadeInAnimation=!1, this.$nextTick((function() {
									e.fadeInAnimation=!0
								}
								))
							}
							, t.prototype.redirect=function(e) {
								try {
									var t=Object(I.a)(this.$route.params.region);
									"1"===this.productCardItem.GetURLFlag.toString()?window.open(this.productCardItem.ProductURL): window.location.href=t+"/"+e.levelOneTopMenuName+"/"+e.levelTwoProductLineName+"/"+e.seriesName+"/"+e.productModel
								}
								catch(e) {}
							}
							, t.prototype.WTBredirectWay=function(e) {
								null!==this.productCardItem.GetURLFlag&&"1"!==this.productCardItem.GetURLFlag.toString()&&this.$router.push( {
									name:"WhereToBuy", params: {
										levelOneTopMenuName: e.levelOneTopMenuName, levelTwoProductLineName:e.levelTwoProductLineName, seriesName:e.seriesName, productModel:e.productModel
									}
								}
								)
							}
							, t.prototype.getButtonLink=function(e) {
								try {
									var t=Object(I.a)(this.$route.params.region)+"/"+e.levelOneTopMenuName+"/"+e.levelTwoProductLineName+"/"+e.seriesName+"/"+e.productModel, r="";
									switch(e.linkText) {
										case"learn-more": r="1"===this.productCardItem.GetURLFlag.toString()?this.productCardItem.ProductURL:t;
										break;
										case"where-to-buy": r=null!==this.productCardItem.GetURLFlag&&"1"===this.productCardItem.GetURLFlag.toString()&&""!==this.productCardItem.WhereToBuy.WTBLink?this.productCardItem.WhereToBuy.WTBLink:t+"/"+e.linkText
									}
									return r
								}
								catch(e) {
									return""
								}
							}
							, t.prototype.getHrefTarget=function() {
								return null!==this.productCardItem.GetURLFlag&&"1"===this.productCardItem.GetURLFlag.toString()?"_blank": "_self"
							}
							, t.prototype.getRel=function() {
								return"_blank"===this.getHrefTarget()?"noreferrer noopener": ""
							}
							, P([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), P([Object(l.Prop)( {								default: !1							}							)], t.prototype, "isWhiteCard", void 0), P([Object(l.Prop)()], t.prototype, "productCardItem", void 0), P([Object(l.Prop)()], t.prototype, "cardIndex", void 0), P([Object(l.Prop)( {								default: ""							}							)], t.prototype, "gaActionField", void 0), P([Object(l.Prop)()], t.prototype, "defLevelId", void 0), P([Object(l.Prop)()], t.prototype, "productCardContent", void 0), P([Object(l.Prop)()], t.prototype, "checkProductCardArray", void 0), P([Object(l.Watch)("productCardItem", {								deep: !0, immediate:!0							}							)], t.prototype, "setDefaultProductColor", null), P([Object(l.Watch)("colorCodePicked", {								immediate: !0							}							)], t.prototype, "changeMainPage", null), t=P([Object(l.Component)( {								components: {									GhostButton: _.a, CompareCheckBox:f.a, ColorSelector:C.a, SingleSlideCarousel:y.a								}							}							)], t)
						}
						(Object(l.mixins)(v.a)), L=r(861), k=r(8);
						var component=Object(k.a)(w, (function() {
							var e, t, r, o, n, l, c, d, h, m, _, f, C, y=this, v=y.$createElement, I=y._self._c||v;
							return I("div", {
								class:[y.$style.productCardContainer, (e= {}
								, e[y.$style.isWhiteCard]=y.isWhiteCard, e[y.$style.isNew]="Y"===y.productCardItem.LeftHeader.NewsFlag, e)]
							}
							, [I("div", {								class:[y.$style.AwardIconRow, (t= {}								, t[y.$style.hideBlock]=y.productCardContent.isHideContent.awardIconRow, t)]
							}
							, [I("div", {								directives:[ {									name: "show", rawName:"v-show", value:"Y"===y.productCardItem.LeftHeader.NewsFlag, expression:"productCardItem.LeftHeader.NewsFlag === 'Y'"								}								], class:y.$style.newFlagWrapper
							}
							, [y._v("\n   "+y._s(y.productCardItem.LeftHeader.NewsFlagWording)+"\n  ")]), y._v(" "), I("div", {
								directives:[ {
									name: "show", rawName:"v-show", value:"Y"===y.productCardItem.LeftHeader.DealFlag, expression:"productCardItem.LeftHeader.DealFlag === 'Y'"
								}
								], class:y.$style.dealFlagWrapper
							}
							, [y._v("\n   "+y._s(y.productCardItem.LeftHeader.DealFlagWording)+"\n  ")]), y._v(" "), y.productCardItem.RightHeader?I("div", {
								class: y.$style.awardIcons
							}
							, [y._l(y.productCardItem.RightHeader, (function(e, t) {								return[I("img", {									directives:[ {										name: "show", rawName:"v-show", value:1==e.Show, expression:"AwardItem.Show == 1"									}									], key:"AwardItem.Content_"+t, class:y.$style.awardIcon, attrs: {
										src: e.ImageUrl, alt:"award icon"
									}
								}
								)]
							}
							))], 2):y._e()]), y._v(" "), I("a", {
								class:[y.$style.mainImageRow, (r= {}
								, r[y.$style.hideBlock]=y.productCardContent.isHideContent.mainImageRow, r)], attrs: {
									href:y.getButtonLink( {
										levelOneTopMenuName: y.productCardItem.Level1Path, levelTwoProductLineName:y.productCardItem.Level2Path, seriesName:y.productCardItem.Level3Path, productModel:y.productCardItem.PDWebPath, linkText:"learn-more"
									}
									)
								}
								, on: {
									click:function(e) {
										y.gaDataLayerPush( {
											event:"productClick", ecommerce: {
												click: {
													actionField: {
														list: y.gaActionField
													}
													, products:[ {
														name: ""+y.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, dimension10:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, price:""+y.productCardItem.Price, brand:0===y.productCardItem.GetURLFlag?"ASUS":"ROG", category:y.productCardItem.Level1Path+"-"+y.productCardItem.Level2Path+"/"+y.productCardItem.CategoryName+"/"+y.productCardItem.Level3Path+"/"+(y.productCardItem.SubSeriesName?y.productCardItem.SubSeriesName:"undefined"), list:y.gaActionField, position:""+(y.cardIndex+1)
													}
													]
												}
											}
										}
										), y.gaDataLayerPush( {
											event: "data_layer_event", event_category_DL:"images", event_action_DL:"clicked", event_label_DL:y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+(0===y.getSlideCount?"":y.AddMainImageArray[0]), event_value_DL:"0"
										}
										), y.gaHmtPush(["_trackEvent", "images", "clicked", y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/"+(0===y.getSlideCount?"":y.AddMainImageArray[0])])
									}
								}
							}
							, [I("SingleSlideCarousel", {								ref:"SingleSlideCarousel", class:y.$style.mainImageCarousel, attrs: {									rwdWidth: y.rwdWidth, totalSlide:y.getSlideCount, loop:!1								}								, on: {									AddMainImageArray: y.AddMainImageArray								}								, scopedSlots:y._u([ {									key:"default", fn:function(e) {										return y._l(y.mainImageArray, (function(t, r) {											return I("div", {												key: r, class:[y.$style.imageWrapper], style:[e.inlineStyleObject]
											}
											, [I("picture", [t&&t.includes("/gain/")?I("source", {												attrs: {													type: "image/webp", srcset:t+"/fwebp"												}											}											):y._e(), y._v(" "), t&&t.includes("/media/Odin/")?I("source", {												attrs: {													type: "image/webp", srcset:t+"?webp"												}											}											):y._e(), y._v(" "), I("img", {												attrs: {													src: ""+t, alt:y.productCardItem.Name.replace(/<[^>]*>/g, "")
												}
											}
											)])])
										}
										))
									}
								}
								, {
									key:"prevButton", fn:function() {
										return[I("svg", {
											class:y.$style.svgControllButton, attrs: {
												viewBox: "0 0 16 16", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
											}
										}
										, [I("path", {
											attrs: {
												d: "M11 13.5L5.3 8 11 2.5", stroke:"#999", "stroke-miterlimit":"10", "stroke-linecap":"round", "stroke-linejoin":"round"
											}
										}
										)])]
									}
									, proxy:!0
								}
								, {
									key:"nextButton", fn:function() {
										return[I("svg", {
											class:y.$style.svgControllButton, attrs: {
												viewBox: "0 0 16 16", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
											}
										}
										, [I("path", {
											attrs: {
												d: "M5 2.5L10.7 8 5 13.5", stroke:"#999", "stroke-miterlimit":"10", "stroke-linecap":"round", "stroke-linejoin":"round"
											}
										}
										)])]
									}
									, proxy:!0
								}
								])
							}
							)], 1), y._v(" "), I("div", {
								class:[y.$style.subHeadingRow, (o= {}
								, o[y.$style.hideBlock]=y.productCardContent.isHideContent.headingRow, o)]
							}
							, [y._v("\n  "+y._s(y.productCardItem.Size)+"\n  ")]), y._v(" "), I("a", {
								staticClass:"headingRow", class:[y.$style.headingRow, (n= {}
								, n[y.$style.hideBlock]=y.productCardContent.isHideContent.headingRow, n)], style: {
									height: y.getHeadingRowHeight+"px"
								}
								, attrs: {
									href:y.getButtonLink( {
										levelOneTopMenuName: y.productCardItem.Level1Path, levelTwoProductLineName:y.productCardItem.Level2Path, seriesName:y.productCardItem.Level3Path, productModel:y.productCardItem.PDWebPath, linkText:"learn-more"
									}
									)
								}
								, domProps: {
									innerHTML: y._s(y.productCardItem.Name)
								}
								, on: {
									click:function(e) {
										y.gaDataLayerPush( {
											event:"productClick", ecommerce: {
												click: {
													actionField: {
														list: y.gaActionField
													}
													, products:[ {
														name: ""+y.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, dimension10:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, price:""+y.productCardItem.Price, brand:0===y.productCardItem.GetURLFlag?"ASUS":"ROG", category:y.productCardItem.Level1Path+"-"+y.productCardItem.Level2Path+"/"+y.productCardItem.CategoryName+"/"+y.productCardItem.Level3Path+"/"+(y.productCardItem.SubSeriesName?y.productCardItem.SubSeriesName:"undefined"), list:y.gaActionField, position:""+(y.cardIndex+1)
													}
													]
												}
											}
										}
										), y.gaDataLayerPush( {
											event: "data_layer_event", event_category_DL:"texts", event_action_DL:"clicked", event_label_DL:y.productCardItem.Name.replace(/<[^>]*>/g, ""), event_value_DL:"0"
										}
										), y.gaHmtPush(["_trackEvent", "texts", "clicked", y.productCardItem.Name.replace(/<[^>]*>/g, "")])
									}
								}
							}
							), y._v(" "), y.productCardItem.ExternalID?I("div", {
								class:["bazaaInlineRating", "theme"+y.themeColor], attrs: {
									"data-bv-show": "inline_rating", "data-bv-seo":"false", "data-bv-product-id":y.productCardItem.ExternalID
								}
							}
							):y._e(), y._v(" "), y.productCardItem.ExternalID?y._e():I("div", {
								staticClass:"bazaaInlineRating themeDark", attrs: {
									"data-bv-show": "inline_rating", "data-bv-ready":"true"
								}
							}
							, [y._m(0)]), y._v(" "), "global"!==y.websiteCode?I("div", {
								class:[y.$style.productInfoBox, (l= {}
								, l[y.$style.hideBlock]=y.productCardContent.isHideContent.productInfoBox, l)], style: {
									visibility: y.hasPrice?"visible":"hidden"
								}
							}
							, [I("hr", {								class:[y.$style.hrBehindDiscount], style:""!==y.productCardItem.Discount? {
									borderTop: "1px solid "+y.productCardItem.DiscountColor
								}
								: {
									borderTop: "1px solid "+y.productCardItem.PriceLineColor
								}
							}
							), y._v(" "), I("div", {
								class: y.$style.purchaseInfoRow
							}
							, [I("div", {								class: y.$style.priceType							}							, [y._v("\n    "+y._s(y.hasPrice?y.productCardItem.StartingAtWording:"")+"\n   ")]), y._v(" "), I("div", {
								class: y.$style.priceWrap
							}
							, [I("div", {								class:y.$style.price, style:""!==y.productCardItem.Discount? {									color: y.productCardItem.DiscountColor								}								: {									color: y.productCardItem.PriceColor								}							}							, [y._v("\n     "+y._s(y.productCardItem.Price)+"\n    ")])]), y._v(" "), y.productCardItem.Price?I("div", {
								class:[y.$style.priceWrap, y.$style.priceWrapFull, (c= {}
								, c[y.$style.discountHeight]=y.isUseDiscountHeight, c)]
							}
							, [y.productCardItem.RegularPrice?I("div", {								class:y.$style.regularPrice, style: {									color: y.productCardItem.PriceColor								}							}							, [y._v("\n     "+y._s(y.productCardItem.RegularPrice)+"\n    ")]):y._e(), y._v(" "), y.productCardItem.Discount?I("div", {
								class:y.$style.save, style: {
									color: y.productCardItem.DiscountColor
								}
							}
							, [y._v("\n     "+y._s(y.productCardItem.DiscountWording)+y._s(" ")+y._s(y.productCardItem.Discount)+"\n    ")]):y._e()]):y._e()]), y._v(" "), I("hr", {
								class:[y.$style.hrAfterDiscount], style:""!==y.productCardItem.Discount? {
									borderTop: "1px solid "+y.productCardItem.DiscountColor
								}
								: {
									borderTop: "1px solid "+y.productCardItem.PriceLineColor
								}
							}
							)]):y._e(), y._v(" "), I("div", {
								class:[y.$style.colorSelectorRow, (d= {}
								, d[y.$style.hideBlock]=y.productCardContent.isHideContent.colorSelectorRow, d)]
							}
							, [I("ColorSelector", {								attrs: {									colorList: y.productCardItem.ImageList, colorCodePicked:y.colorCodePicked, isWhiteCard:y.isWhiteCard								}								, on: {									changeColorPick: y.colorSelectorPick								}							}							)], 1), y._v(" "), I("div", {
								class:[y.$style.featureDescriptionRow, (h= {}
								, h[y.$style.hideBlock]=y.productCardContent.isHideContent.featureDescriptionRow, h)], domProps: {
									innerHTML: y._s(y.productCardItem.ModelSpec)
								}
							}
							), y._v(" "), I("div", {
								class: y.$style.cardItemBottom
							}
							, [I("div", {								class:[y.$style.primaryBtnAndWishlistBtnRow, (m= {}								, m[y.$style.hideBlock]=y.productCardContent.isHideContent.primaryBtnAndWishlistBtnRow, m)]
							}
							, [y.hasBuyLink?I("a", {								class:y.$style.button, attrs: {									href: y.productCardItem.Buy.Link								}								, on: {									click:function(e) {										y.gaDataLayerPush( {											event:"productClick", ecommerce: {												click: {													actionField: {														list: y.gaActionField													}													, products:[ {														name: ""+y.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, dimension10:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, price:""+y.productCardItem.Price, brand:0===y.productCardItem.GetURLFlag?"ASUS":"ROG", category:y.productCardItem.Level1Path+"-"+y.productCardItem.Level2Path+"/"+y.productCardItem.CategoryName+"/"+y.productCardItem.Level3Path+"/"+(y.productCardItem.SubSeriesName?y.productCardItem.SubSeriesName:"undefined"), list:y.gaActionField, position:""+(y.cardIndex+1)
													}
													]
												}
											}
										}
										), y.gaDataLayerPush( {
											event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/buyButton-"+y.productCardItem.Buy.Text, event_value_DL:"0"
										}
										), y.gaHmtPush(["_trackEvent", "buttons", "clicked", y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/buyButton-"+y.productCardItem.Buy.Text])
									}
								}
							}
							, [y._v("\n    "+y._s(y.productCardItem.Buy.Text)+"\n   ")]):y.hasWereToBuy?I("a", {
								class:y.$style.button, attrs: {
									href:y.getButtonLink( {
										levelOneTopMenuName: y.productCardItem.Level1Path, levelTwoProductLineName:y.productCardItem.Level2Path, seriesName:y.productCardItem.Level3Path, productModel:y.productCardItem.PDWebPath, linkText:"where-to-buy"
									}
									), target:y.getHrefTarget, rel:y.getRel
								}
								, on: {
									click:function(e) {
										y.gaDataLayerPush( {
											event:"productClick", ecommerce: {
												click: {
													actionField: {
														list: y.gaActionField
													}
													, products:[ {
														name: ""+y.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, dimension10:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, price:""+y.productCardItem.Price, brand:0===y.productCardItem.GetURLFlag?"ASUS":"ROG", category:y.productCardItem.Level1Path+"-"+y.productCardItem.Level2Path+"/"+y.productCardItem.CategoryName+"/"+y.productCardItem.Level3Path+"/"+(y.productCardItem.SubSeriesName?y.productCardItem.SubSeriesName:"undefined"), list:y.gaActionField, position:""+(y.cardIndex+1)
													}
													]
												}
											}
										}
										), y.gaDataLayerPush( {
											event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+y.productCardItem.WhereToBuy.WTBText, event_value_DL:"0"
										}
										), y.gaHmtPush(["_trackEvent", "buttons", "clicked", y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+y.productCardItem.WhereToBuy.WTBText])
									}
								}
							}
							, [y._v("\n    "+y._s(y.productCardItem.WhereToBuy.WTBText)+"\n   ")]):y.hasWereToBuy||y.hasBuyLink?y._e():I("a", {
								class:y.$style.button, attrs: {
									theme:"Blue", href:y.getButtonLink( {
										levelOneTopMenuName: y.productCardItem.Level1Path, levelTwoProductLineName:y.productCardItem.Level2Path, seriesName:y.productCardItem.Level3Path, productModel:y.productCardItem.PDWebPath, linkText:"learn-more"
									}
									)
								}
								, on: {
									click:function(e) {
										y.gaDataLayerPush( {
											event:"productClick", ecommerce: {
												click: {
													actionField: {
														list: y.gaActionField
													}
													, products:[ {
														name: ""+y.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, dimension10:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, price:""+y.productCardItem.Price, brand:0===y.productCardItem.GetURLFlag?"ASUS":"ROG", category:y.productCardItem.Level1Path+"-"+y.productCardItem.Level2Path+"/"+y.productCardItem.CategoryName+"/"+y.productCardItem.Level3Path+"/"+(y.productCardItem.SubSeriesName?y.productCardItem.SubSeriesName:"undefined"), list:y.gaActionField, position:""+(y.cardIndex+1)
													}
													]
												}
											}
										}
										), y.gaDataLayerPush( {
											event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+y.productCardItem.LearnMore, event_value_DL:"0"
										}
										), y.gaHmtPush(["_trackEvent", "buttons", "clicked", y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+y.productCardItem.LearnMore])
									}
								}
							}
							, [y._v("\n    "+y._s(y.productCardItem.LearnMore)+"\n   ")])]), y._v(" "), I("div", {
								class:[y.$style.whereToBuyRow, (_= {}
								, _[y.$style.hideBlock]=y.productCardContent.isHideContent.whereToBuyRow, _)]
							}
							, [y.hasBuyLink&&y.hasWereToBuy?I("a", {								class:y.$style.whereToBuy, attrs: {									href:y.getButtonLink( {										levelOneTopMenuName: y.productCardItem.Level1Path, levelTwoProductLineName:y.productCardItem.Level2Path, seriesName:y.productCardItem.Level3Path, productModel:y.productCardItem.PDWebPath, linkText:"where-to-buy"									}									), target:y.getHrefTarget, rel:y.getRel								}								, on: {									click:function(e) {										y.gaDataLayerPush( {											event:"productClick", ecommerce: {												click: {													actionField: {														list: y.gaActionField													}													, products:[ {														name: ""+y.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, dimension10:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, price:""+y.productCardItem.Price, brand:0===y.productCardItem.GetURLFlag?"ASUS":"ROG", category:y.productCardItem.Level1Path+"-"+y.productCardItem.Level2Path+"/"+y.productCardItem.CategoryName+"/"+y.productCardItem.Level3Path+"/"+(y.productCardItem.SubSeriesName?y.productCardItem.SubSeriesName:"undefined"), list:y.gaActionField, position:""+(y.cardIndex+1)
													}
													]
												}
											}
										}
										), y.gaDataLayerPush( {
											event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+y.productCardItem.WhereToBuy.WTBText, event_value_DL:"0"
										}
										), y.gaHmtPush(["_trackEvent", "buttons", "clicked", y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/whereToBuy-"+y.productCardItem.WhereToBuy.WTBText])
									}
								}
							}
							, [I("svg", {								class:y.$style.pinIcon, attrs: {									viewBox: "0 0 32 32", fill:"none", xmlns:"http://www.w3.org/2000/svg", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"								}							}							, [I("path", {								attrs: {									d: "M23.5 12.218c0 7.72-8.5 16.128-8.5 16.128S6.5 19.94 6.5 12.218C6.5 7.403 10.306 3.5 15 3.5s8.5 3.903 8.5 8.718z", stroke:"#006ce1", "stroke-width":"1.5", "stroke-linejoin":"round"								}							}							), I("circle", {								attrs: {									cx: "15", cy:"12", r:"3.827", stroke:"#006ce1", "stroke-width":"1.5"								}							}							)]), y._v(" "), I("span", [y._v(y._s(y.productCardItem.WhereToBuy.WTBText))])]):y._e(), y._v(" "), y.hasBuyLink&&y.hasWereToBuy||y.hasBuyLink||y.hasWereToBuy?I("ghost-button", {
								class:y.$style.ghostButton, attrs: {
									theme:"Blue", needCallEvent:!0, href:y.getButtonLink( {
										levelOneTopMenuName: y.productCardItem.Level1Path, levelTwoProductLineName:y.productCardItem.Level2Path, seriesName:y.productCardItem.Level3Path, productModel:y.productCardItem.PDWebPath, linkText:"learn-more"
									}
									)
								}
								, on: {
									click:function(e) {
										y.gaDataLayerPush( {
											event:"productClick", ecommerce: {
												click: {
													actionField: {
														list: y.gaActionField
													}
													, products:[ {
														name: ""+y.productCardItem.Name.replace(/<[^>]*>/g, ""), id:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, dimension10:0===y.productCardItem.GetURLFlag?y.productCardItem.ProductID:y.productCardItem.PartNo, price:""+y.productCardItem.Price, brand:0===y.productCardItem.GetURLFlag?"ASUS":"ROG", category:y.productCardItem.Level1Path+"-"+y.productCardItem.Level2Path+"/"+y.productCardItem.CategoryName+"/"+y.productCardItem.Level3Path+"/"+(y.productCardItem.SubSeriesName?y.productCardItem.SubSeriesName:"undefined"), list:y.gaActionField, position:""+(y.cardIndex+1)
													}
													]
												}
											}
										}
										), y.gaDataLayerPush( {
											event: "data_layer_event", event_category_DL:"buttons", event_action_DL:"clicked", event_label_DL:y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+y.productCardItem.LearnMore, event_value_DL:"0"
										}
										), y.gaHmtPush(["_trackEvent", "buttons", "clicked", y.productCardItem.Name.replace(/<[^>]*>/g, "")+"/LearnMore-"+y.productCardItem.LearnMore]), y.redirect( {
											levelOneTopMenuName: y.productCardItem.Level1Path, levelTwoProductLineName:y.productCardItem.Level2Path, seriesName:y.productCardItem.Level3Path, productModel:y.productCardItem.PDWebPath
										}
										)
									}
								}
							}
							, [y._v("\n    "+y._s(y.productCardItem.LearnMore)+"\n   ")]):y._e()], 1), y._v(" "), "help_me_choose"!==y.gaActionField?[I("hr", {								class:[y.$style.hrGray, (f= {}								, f[y.$style.hideBlock]=y.productCardContent.isHideContent.compareRow, f)]
							}
							), y._v(" "), I("div", {
								class:[y.$style.compareRow, (C= {}
								, C[y.$style.hideBlock]=y.productCardContent.isHideContent.compareRow, C)]
							}
							, [1===y.productCardItem.SpecFlag?I("CompareCheckBox", {								class:y.$style.addToCompare, attrs: {									ProductID: y.productCardItem.ProductID, LevelId:y.defLevelId								}								, on: {									gaClickTrigger: y.sendGA								}							}							, [I("span", {								class: y.$style.text							}							, [y._v("\n      "+y._s(y.productCardItem.Compare)+"\n     ")])]):y._e()], 1)]:y._e()], 2)])
						}
						), [function() {							var e=this.$createElement, t=this._self._c||e;							return t("div", [t("div", {								staticClass:"bv_main_container", staticStyle: {									display: "none !important"								}								, attrs: {									id: "81d20693-1386-4a82-9405-0455d52b9daf"								}							}							, [t("div", {								staticClass:"bv_stars_component_container", attrs: {									"aria-hidden": "true"								}							}							, [t("div", {								staticClass: "bv_stars_button_container"							}							, [t("span", {								staticClass:"bv_stars_svg_no_wrap", attrs: {									"aria-hidden": "true"								}							}							)])]), this._v(" "), t("div", {
								staticClass:"bv_averageRating_component_container", attrs: {
									"aria-hidden": "true"
								}
							}
							, [t("div", {								staticClass: "bv_text"							}							, [this._v("0.0")])]), this._v(" "), t("div", {
								staticClass:"bv_numReviews_component_container", attrs: {
									"aria-hidden": "true"
								}
							}
							, [t("div", {								staticClass: "bv_text"							}							, [this._v("(0)")])]), this._v(" "), t("div", {
								staticClass: "bv-off-screen"
							}
							, [this._v("0.0 out of 5 stars.  ")])]), this._v(" "), t("div", {
								staticClass: "bv_incentivized_review_container bv_text"
							}
							)])
						}
						], !1, (function(e) {
							this.$style=L.default.locals||L.default
						}
						), null, null);
						t.a=component.exports
					}
					, 760:function(e, t, r) {
						"use strict";
						r(32), r(13), r(24), r(33);
						var o, n=r(4), l=r(0), c=r(627), d=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), h=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, m=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.uniqueId=null, t.isDisabled=!1, t
							}
							return d(t, e), t.prototype.mounted=function() {
								this.uniqueId=this.getComponentId("checkbox")
							}
							, Object.defineProperty(t.prototype, "filterChecked", {
								get:function() {
									return this.value
								}
								, set:function(e) {
									this.$emit("input", e)
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.enableCheck=function() {
								var e=this, t=!0;
								null===this.enableList?t=!1:this.enableList&&0===this.enableList.length?t=!0:this.enableList&&this.enableList.forEach((function(r) {
									r===e.filterID&&(t=!1)
								}
								)), this.isDisabled=t
							}
							, h([Object(l.Prop)()], t.prototype, "value", void 0), h([Object(l.Prop)()], t.prototype, "filterID", void 0), h([Object(l.Prop)()], t.prototype, "enableList", void 0), h([Object(l.Prop)()], t.prototype, "isPartialChecked", void 0), h([Object(l.Watch)("enableList")], t.prototype, "enableCheck", null), t=h([l.Component], t)
						}
						(Object(l.mixins)(c.a)), _=r(878), f=r(8);
						var component=Object(f.a)(m, (function() {
							var e, t, r=this, o=r.$createElement, n=r._self._c||o;
							return n("div", {
								class:[r.$style.wrapper, (e= {}
								, e[r.$style.disabled]=r.isDisabled, e)]
							}
							, [n("input", {								directives:[ {									name: "model", rawName:"v-model", value:r.filterChecked, expression:"filterChecked"								}								], ref:r.uniqueId, class:[r.$style.defaultInput, (t= {}								, t[r.$style.partialChecked]=r.isPartialChecked, t)], attrs: {
									id: r.uniqueId, type:"checkbox", tabindex:"-1", disabled:!!r.isDisabled&&(-1===r.filterChecked.indexOf(r.filterID)&&r.isDisabled)
								}
								, domProps: {
									value: r.filterID, checked:Array.isArray(r.filterChecked)?r._i(r.filterChecked, r.filterID)>-1:r.filterChecked
								}
								, on: {
									change:function(e) {
										var t=r.filterChecked, o=e.target, n=!!o.checked;
										if(Array.isArray(t)) {
											var l=r.filterID, c=r._i(t, l);
											o.checked?c<0&&(r.filterChecked=t.concat([l])): c>-1&&(r.filterChecked=t.slice(0, c).concat(t.slice(c+1)))
										}
										else r.filterChecked=n
									}
								}
							}
							), r._v(" "), n("label", {
								class:r.$style.customCheckBox, attrs: {
									for: r.uniqueId, tabindex:r.isDisabled?-1:0
								}
							}
							, [r._t("default")], 2)])
						}
						), [], !1, (function(e) {
							this.$style=_.default.locals||_.default
						}
						), null, null);
						t.a=component.exports
					}
					, 788:function(e, t, r) {
						"use strict";
						r(60), r(114), r(32), r(112), r(13), r(59), r(24), r(16), r(17), r(25), r(45), r(33);
						var o, n=r(4), l=r(0), c=r(111), d=r.n(c), h=r(18), m=r.n(h), _=r(777), f=r.n(_), C=r(791), y=(r(27), o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), v=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, I=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.uniqueId=null, t
							}
							return y(t, e), Object.defineProperty(t.prototype, "isEnableCheck", {
								get:function() {
									return null!==this.enableResult.ItemIdList&&(this.enableResult&&this.enableResult.ItemIdList&&f()(this.enableResult.ItemIdList, this.currentInputVal))
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "checked", {
								get:function() {
									return this.checkedList
								}
								, set:function(e) {
									this.$emit("emitCheckedListUpdate", e), this.$emit("triggerHelpMeChooseEnable"), this.$emit("triggerSendGA")
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.resetRadio=function(e) {
								"radio"===this.type&&this.checked&&this.checked.toString()===e.target.value&&(this.checked=null)
							}
							, t.prototype.mounted=function() {
								this.uniqueId=this.$parent.$options.name+"_checkbox_"+this.currentInputVal
							}
							, v([Object(l.Prop)()], t.prototype, "progressState", void 0), v([Object(l.Prop)()], t.prototype, "enableResult", void 0), v([Object(l.Prop)()], t.prototype, "currentInputVal", void 0), v([Object(l.Prop)()], t.prototype, "name", void 0), v([Object(l.Prop)()], t.prototype, "checkedList", void 0), v([Object(l.Prop)( {								default: "checkbox"							}							)], t.prototype, "type", void 0), t=v([l.Component], t)
						}
						(l.Vue), S=r(859), P=r(8);
						var w=Object(P.a)(I, (function() {
							var e, t, r=this, o=r.$createElement, n=r._self._c||o;
							return n("div", {
								class: r.$style.checkBoxContainer
							}
							, ["checkbox"===r.type?n("input", {								directives:[ {									name: "model", rawName:"v-model", value:r.checked, expression:"checked"								}								], ref:r.uniqueId, class:[r.$style["custom-control-input"], (e= {}
								, e[r.$style.notInEnableList]=!1===r.isEnableCheck, e)], attrs: {
									id: r.uniqueId, type:"checkbox", disabled:r.progressState||!1===r.isEnableCheck||null===r.enableResult.ItemIdList, name:"radio"===r.type&&r.name, tabindex:"-1"
								}
								, domProps: {
									value: r.currentInputVal, checked:Array.isArray(r.checked)?r._i(r.checked, r.currentInputVal)>-1:r.checked
								}
								, on: {
									click:r.resetRadio, change:function(e) {
										var t=r.checked, o=e.target, n=!!o.checked;
										if(Array.isArray(t)) {
											var l=r.currentInputVal, c=r._i(t, l);
											o.checked?c<0&&(r.checked=t.concat([l])): c>-1&&(r.checked=t.slice(0, c).concat(t.slice(c+1)))
										}
										else r.checked=n
									}
								}
							}
							):r._e(), r._v(" "), "radio"===r.type?n("input", {
								directives:[ {
									name: "model", rawName:"v-model", value:r.checked, expression:"checked"
								}
								], ref:r.uniqueId, class:[r.$style["custom-control-input"], (t= {}
								, t[r.$style.notInEnableList]=!1===r.isEnableCheck, t)], attrs: {
									id: r.uniqueId, type:"radio", disabled:r.progressState||!1===r.isEnableCheck, name:"radio"===r.type&&r.name, tabindex:"-1"
								}
								, domProps: {
									value: r.currentInputVal, checked:r._q(r.checked, r.currentInputVal)
								}
								, on: {
									click:r.resetRadio, change:function(e) {
										r.checked=r.currentInputVal
									}
								}
							}
							):r._e(), r._v(" "), n("label", {
								class:r.$style["custom-control-label"], attrs: {
									tabindex: !1===(r.progressState||r.isEnableCheck)?-1:0, for:r.uniqueId
								}
							}
							, [r._t("default")], 2)])
						}
						), [], !1, (function(e) {
							this.$style=S.default.locals||S.default
						}
						), null, null).exports, L=function() {
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
								function r() {
									this.constructor=t
								}
								e(t, b), t.prototype=null===b?Object.create(b):(r.prototype=b.prototype, new r)
							}
						}
						(), k=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, D=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.selectedItems=[], t.isCollapseOpen=!0, t.answerOptionsMaxHeight=0, t
							}
							return L(t, e), Object.defineProperty(t.prototype, "isSelectedPart", {
								get:function() {
									return!!this.optionObjList&&(this.selectedItems.length<this.optionObjList.length&&this.selectedItems.length>0)
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "selectAll", {
								get:function() {
									return!!this.optionObjList&&this.selectedItems.length===this.optionObjList.length
								}
								, set:function(e) {
									var t=[];
									e&&this.optionObjList.forEach((function(e) {
										t.push(e.val)
									}
									)), this.selectedItems=t
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.created=function() {
								0===this.index&&(this.isCollapseOpen=!1)
							}
							, t.prototype.changeRwdWidth=function() {
								var e=this.$refs.answerOptionsDiv;
								e&&(this.isCollapseOpen||"desktop"===this.rwdState)&&(this.answerOptionsMaxHeight=e.scrollHeight)
							}
							, t.prototype.changeIsCollapseOpen=function() {
								this.$emit("triggerCollapseStatusChange")
							}
							, t.prototype.emitCheckedListUpdate=function(e) {
								this.selectedItems=e, this.$emit("expandNext", this.index+1)
							}
							, t.prototype.removeAllSelected=function() {
								this.selectedItems=[]
							}
							, t.prototype.getSelectedItems=function() {
								return this.selectedItems
							}
							, t.prototype.getCollapseStatus=function() {
								return this.isCollapseOpen
							}
							, t.prototype.triggerHelpMeChooseEnable=function(e) {
								this.$emit("triggerHelpMeChooseEnable")
							}
							, t.prototype.triggerSendGA=function(e) {
								this.$emit("triggerSendGA", e)
							}
							, t.prototype.toggleCollapse=function(e) {
								void 0===e&&(e=!1);
								var t=this.$refs.answerOptionsDiv;
								t&&(e||this.isCollapseOpen&&"desktop"!=this.rwdState?(this.answerOptionsMaxHeight=0, this.isCollapseOpen=!1): (this.answerOptionsMaxHeight=t.scrollHeight, this.isCollapseOpen=!0))
							}
							, t.prototype.expand=function() {
								var e=this.$refs.answerOptionsDiv;
								e&&(this.answerOptionsMaxHeight=e.scrollHeight, this.isCollapseOpen=!0)
							}
							, k([Object(l.Prop)()], t.prototype, "optionObjList", void 0), k([Object(l.Prop)()], t.prototype, "progressState", void 0), k([Object(l.Prop)()], t.prototype, "rwdState", void 0), k([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), k([Object(l.Prop)()], t.prototype, "enableResult", void 0), k([Object(l.Prop)( {								default: !0							}							)], t.prototype, "enableSelectAll", void 0), k([Object(l.Prop)()], t.prototype, "questionType", void 0), k([Object(l.Prop)()], t.prototype, "questionId", void 0), k([Object(l.Prop)()], t.prototype, "index", void 0), k([Object(l.Watch)("rwdWidth", {								immediate: !0							}							)], t.prototype, "changeRwdWidth", null), k([Object(l.Watch)("isCollapseOpen", {								immediate: !0							}							)], t.prototype, "changeIsCollapseOpen", null), t=k([Object(l.Component)( {								components: {									SingleCheckBox: C.a, CheckBoxGroupItem:w								}							}							)], t)
						}
						(l.Vue), x=r(860);
						var O=Object(P.a)(D, (function() {
							var e=this, t=e.$createElement, r=e._self._c||t;
							return r("div", {
								class: e.$style.collapseWrapper
							}
							, [r("div", {								ref:"collapsibleDiv", staticClass:"equal-heigh", class:e.$style.collapsible, attrs: {									tabindex: "desktop"===e.rwdState?-1:0								}								, on: {									click:function(t) {										"desktop"!==e.rwdState&&e.toggleCollapse()									}								}							}							, [e.enableSelectAll?r("SingleCheckBox", {								attrs: {									isSelectedPart: e.isSelectedPart								}								, model: {									value:e.selectAll, callback:function(t) {										e.selectAll=t									}									, expression:"selectAll"								}							}							):e._e(), e._v(" "), e._t("default"), e._v(" "), "desktop"!==e.rwdState?[r("div", {								class: e.$style.svgBox							}							, [!0===e.isCollapseOpen?r("svg", {								attrs: {									xmlns: "http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 12 12", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"								}							}							, [r("path", {								attrs: {									stroke: "#666", "stroke-linecap":"round", d:"M2.5 5.5h8"								}							}							)]):r("svg", {
								attrs: {
									xmlns: "http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 12 12", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
								}
							}
							, [r("path", {								attrs: {									stroke: "#666", "stroke-linecap":"round", d:"M2.5 5.5h8m-4-4v8"								}							}							)])])]:e._e()], 2), e._v(" "), r("div", {
								ref:"answerOptionsDiv", class:e.$style.answerOptions, style:e.answerOptionsMaxHeight&&e.answerOptionsMaxHeight>0? {
									maxHeight: e.answerOptionsMaxHeight.toString()+"px"
								}
								:null
							}
							, e._l(e.optionObjList, (function(t, o) {
								return r("CheckBoxGroupItem", {
									key:o, attrs: {
										checkedList: e.selectedItems, currentInputVal:t.val, progressState:e.progressState, enableResult:e.enableResult, type:e.questionType, name:e.questionId
									}
									, on: {
										triggerHelpMeChooseEnable:e.triggerHelpMeChooseEnable, triggerSendGA:function(r) {
											return e.triggerSendGA(t)
										}
										, emitCheckedListUpdate:function(t) {
											return e.emitCheckedListUpdate(t)
										}
									}
								}
								, [e._v("\n      "+e._s(t.content)+"\n    ")])
							}
							)), 1)])
						}
						), [], !1, (function(e) {
							this.$style=x.default.locals||x.default
						}
						), null, null).exports, R=(r(53), r(762), r(37), r(584)), M=r(759), W=r(597), F=r(583), T=r.n(F), B=r(605), $=r(14), A=function() {
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
								function r() {
									this.constructor=t
								}
								e(t, b), t.prototype=null===b?Object.create(b):(r.prototype=b.prototype, new r)
							}
						}
						(), j=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, N=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.breakPointMedium=T.a.breakPointMedium?parseInt(T.a.breakPointMedium, 10):1279, t.breakPointSmall=T.a.breakPointSmall?parseInt(T.a.breakPointSmall, 10):731, t.rwdState="", t.classField= {
									headingRowClass: "help_me_choose"
								}
								, t
							}
							return A(t, e), t.prototype.mounted=function() {
								var e=this;
								try {
									window.onload=function() {
										void 0!==e.ProductCardResults.ProductList&&e.getFieldHeight(e.ProductCardResults.ProductList, "help_me_choose")
									}
								}
								catch(e) {}
							}
							, t.prototype.reloadSource=function() {
								this.rwdWidth>this.breakPointMedium?this.rwdState="desktop": this.rwdWidth>this.breakPointSmall?this.rwdState="tablet":this.rwdState="mobile", void 0!==this.ProductCardResults.ProductList&&this.checkHideProductCardContent(this.ProductCardResults.ProductList)
							}
							, t.prototype.setProductCardResultsToData=function() {
								if(this.ProductCardResults&&0!==Object.getOwnPropertyNames(this.ProductCardResults).length) {
									var e=[];
									this.ProductCardResults.ProductList&&this.ProductCardResults.ProductList.length>0&&this.ProductCardResults.ProductList.slice(0, 30).forEach((function(t, r) {
										e.push( {
											name: t.Name.replace(/<[^>]*>/g, ""), id:t.ProductID, dimension10:t.ProductID, price:t.Price, brand:"ASUS", category:t.Level1Path+"-"+t.Level2Path+"/"+t.CategoryName+"/"+t.Level3Path+"/"+(t.SubSeriesName?t.SubSeriesName:"undefined"), list:"help_me_choose", position:r+1
										}
										)
									}
									)), this.gaDataLayerPush( {
										event:"productImpression", ecommerce: {
											currencyCode: this.loginInfoGetter.CurrencyCode, impressions:e
										}
									}
									)
								}
								this.checkHideProductCardContent(this.ProductCardResults.ProductList)
							}
							, j([Object(l.Getter)("loginInfoGetter")], t.prototype, "loginInfoGetter", void 0), j([Object(l.Prop)()], t.prototype, "ProductCardResults", void 0), j([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), j([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), j([Object(l.Watch)("ProductCardResults", {								immediate: !0							}							)], t.prototype, "setProductCardResultsToData", null), t=j([Object(l.Component)( {								components: {									GhostButton: R.a, ProductCard:M.a, CardCarousel:W.a								}							}							)], t)
						}
						(Object(l.mixins)(B.a, $.a)), E=r(862);
						var H=Object(P.a)(N, (function() {
							var e=this, t=e.$createElement, r=e._self._c||t;
							return r("section", {
								class: e.$style.section
							}
							, [e.ProductCardResults&&e.ProductCardResults.ProductList?r("div", {								class: e.$style.productCardWraper							}							, [r("div", {								class: e.$style.carouselContainer							}							, [r("CardCarousel", {								attrs: {									rwdWidth: e.rwdWidth, pageSizeList:[4, 3, 1], showControllButtonList:[1, 0, 0], totalCardsCount:e.ProductCardResults&&e.ProductCardResults.ProductList?e.ProductCardResults.ProductList.length:0, spaceBetween:12, loop:!0
								}
								, scopedSlots:e._u([ {									key:"default", fn:function(t) {										return e._l(e.ProductCardResults.ProductList, (function(o, n) {											return r("ProductCard", {												key:o.ProductID, staticClass:"help_me_choose", style:t.cardInlineStyleObject, attrs: {													gaActionField: "help_me_choose", rwdWidth:e.rwdWidth, isWhiteCard:!0, productCardContent:e.productCardContent[n], "product-card-item":o, "card-index":n
												}
											}
											)
										}
										))
									}
								}
								], null, !1, 2305145380)
							}
							)], 1)]):e._e()])
						}
						), [], !1, (function(e) {
							this.$style=E.default.locals||E.default
						}
						), null, null).exports, G=r(585), U=r(796), z=r(110), J=function() {
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
								function r() {
									this.constructor=t
								}
								e(t, b), t.prototype=null===b?Object.create(b):(r.prototype=b.prototype, new r)
							}
						}
						(), V=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, K=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.breakPointMedium=T.a.breakPointMedium?parseInt(T.a.breakPointMedium, 10):1279, t.breakPointSmall=T.a.breakPointSmall?parseInt(T.a.breakPointSmall, 10):731, t.rwdState="", t.enableCollapseAllButten=!1, t.helpMeChooseFilterResult= {}
								, t.helpMeChooseEnableResult= {}
								, t.helpMeChooseResult= {}
								, t.windowWidth=0, t.websiteCode="", t
							}
							return J(t, e), Object.defineProperty(t.prototype, "getAllAnswerIdList", {
								get:function() {
									var e=[];
									return this.helpMeChooseFilterResult.Question&&this.helpMeChooseFilterResult.Question.length>0&&this.helpMeChooseFilterResult.Question.forEach((function(t) {
										t.Answer&&t.Answer.length>0&&t.Answer.forEach((function(r) {
											void 0!==t.Id&&e.push(r.Id)
										}
										))
									}
									)), e
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "getEnableIdList", {
								get:function() {
									return this.getHelpMeChooseEnableDataGetter.ItemIdList&&0!==this.getHelpMeChooseEnableDataGetter.ItemIdList.length?this.getHelpMeChooseEnableDataGetter.ItemIdList.split(","): []
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.setHelpMeChooseFilterToData=function() {
								var e=this;
								this.getHelpMeChooseFilterDataGetter&&Object.keys(this.getHelpMeChooseFilterDataGetter).length&&(this.helpMeChooseFilterResult=m()(this.getHelpMeChooseFilterDataGetter), this.$nextTick((function() {
									e.checkBoxGroupArray=e.$refs.checkBoxGroupArray, e.checkBoxGroupArray&&e.checkBoxGroupArray.forEach((function(e) {
										e.toggleCollapse()
									}
									)), e.updateQuestionRowEqualHeigth(), e.resetEvent()
								}
								)))
							}
							, t.prototype.setHelpMeChooseEnableToData=function() {
								this.helpMeChooseEnableResult=m()(this.getHelpMeChooseEnableDataGetter)
							}
							, t.prototype.setHelpMeChooseResultToData=function() {
								this.helpMeChooseResult=m()(this.getHelpMeChooseResultDataGetter)
							}
							, t.prototype.update=function() {
								this.rwdWidth>this.breakPointMedium?this.rwdState="desktop": this.rwdWidth>this.breakPointSmall?this.rwdState="tablet":this.rwdState="mobile"
							}
							, t.prototype.rwdStateChange=function() {
								this.updateQuestionRowEqualHeigth()
							}
							, t.prototype.updateQuestionRowEqualHeigth=function() {
								var e=this.$refs.qaSelectWrapper;
								if(e) {
									var t=e.querySelectorAll(".equal-heigh");
									if(this.$refs&&this.$refs.qaSelectWrapper&&"desktop"===this.rwdState) {
										var r=[];
										t.forEach((function(element) {
											return r.push(element.scrollHeight)
										}
										));
										var o=Math.max.apply(null, r);
										t.forEach((function(element) {
											element.style.height=o.toString()+"px"
										}
										))
									}
									else t.forEach((function(element) {
										element.style.height="auto"
									}
									))
								}
							}
							, t.prototype.getAnswerIdQueryString=function() {
								var e=this, t=[];
								return this.checkBoxGroupArray&&this.checkBoxGroupArray.forEach((function(r) {
									var o=r.getSelectedItems();
									if(Array.isArray(o)&&o.length>0) {
										var n=o.filter((function(t) {
											return f()(e.getEnableIdList, t.toString())
										}
										));
										t.push(n.join(","))
									}
									else!1===Array.isArray(o)&&"number"==typeof o&&f()(e.getEnableIdList, o.toString())&&t.push(o.toString())
								}
								)), t.join(";")
							}
							, t.prototype.helpMeChooseEnable=function() {
								0===this.getAnswerIdQueryString().length?this.resetEvent(): this.dispatchHelpMeChooseEnableData()
							}
							, t.prototype.dispatchHelpMeChooseEnableData=function() {
								var e= {
									AnswerID: this.getAnswerIdQueryString(), SystemCode:"asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.$route.params.levelOneTopMenuName, ProductLevel2Code:this.$route.params.levelTwoProductLineName, SeriesWebPath:this.$route.params.seriesName
								}
								;
								this.getHelpMeChooseEnableData( {
									params: e
								}
								)
							}
							, t.prototype.searchHelpMeChooseResult=function() {
								this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"filter", event_action_DL:"clicked", event_label_DL:"Choose your laptops/View my laptops", event_value_DL:"0"
								}
								);
								var e=this.getAnswerIdQueryString(), t= {
									SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Name:this.$route.params.levelOneTopMenuName, ProductLevel2Name:this.$route.params.levelTwoProductLineName, SeriesName:this.$route.params.seriesName
								}
								;
								e&&(t.AnswerID=e), this.getHelpMeChooseResultData( {
									params: t
								}
								)
							}
							, t.prototype.triggerSendGA=function(e, t) {
								this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"filter", event_action_DL:"clicked", event_label_DL:this.helpMeChooseFilterResult.Translation.Title+"/"+e.content, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "filter", "clicked", this.helpMeChooseFilterResult.Translation.Title+"/"+e.content])
							}
							, t.prototype.allowAllAnswerCheckBoxClick=function() {
								this.enableAllAnswer(this.getAllAnswerIdList)
							}
							, t.prototype.collapseStatusChange=function() {
								var e=this;
								this.enableCollapseAllButten=!0, this.checkBoxGroupArray&&this.checkBoxGroupArray.forEach((function(t) {
									!1===t.getCollapseStatus()&&(e.enableCollapseAllButten=!1)
								}
								))
							}
							, t.prototype.resetEvent=function() {
								this.checkBoxGroupArray&&this.checkBoxGroupArray.forEach((function(e) {
									e.removeAllSelected()
								}
								)), this.dispatchHelpMeChooseEnableData()
							}
							, t.prototype.collapseAll=function() {
								this.checkBoxGroupArray&&this.checkBoxGroupArray.forEach((function(e) {
									e.toggleCollapse(!0)
								}
								))
							}
							, t.prototype.expandAll=function() {
								this.checkBoxGroupArray&&this.checkBoxGroupArray.forEach((function(e) {
									e.expand()
								}
								))
							}
							, t.prototype.getWindowWidth=function() {
								this.windowWidth=window.innerWidth
							}
							, t.prototype.expandNext=function(i) {
								if(this.checkBoxGroupArray) {
									var e=this.checkBoxGroupArray.find((function(e, t) {
										return t===i
									}
									));
									e&&e.expand()
								}
							}
							, t.prototype.created=function() {
								this.websiteCode=Object(z.b)(this.$route.params.region)
							}
							, t.prototype.mounted=function() {
								window.addEventListener("resize", d()(this.getWindowWidth, 100, {
									trailing: !0
								}
								)), this.getWindowWidth()
							}
							, t.prototype.beforeDestroy=function() {
								window.removeEventListener("resize", this.getWindowWidth)
							}
							, V([Object(l.Getter)("getHelpMeChooseFilterDataGetter")], t.prototype, "getHelpMeChooseFilterDataGetter", void 0), V([Object(l.Getter)("getHelpMeChooseEnableDataGetter")], t.prototype, "getHelpMeChooseEnableDataGetter", void 0), V([Object(l.Getter)("getHelpMeChooseResultDataGetter")], t.prototype, "getHelpMeChooseResultDataGetter", void 0), V([Object(l.Getter)("getProgressStateGetter")], t.prototype, "getProgressStateGetter", void 0), V([Object(l.Action)("getHelpMeChooseEnableData")], t.prototype, "getHelpMeChooseEnableData", void 0), V([Object(l.Action)("getHelpMeChooseResultData")], t.prototype, "getHelpMeChooseResultData", void 0), V([Object(l.Action)("enableAllAnswer")], t.prototype, "enableAllAnswer", void 0), V([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), V([Object(l.Watch)("getHelpMeChooseFilterDataGetter", {								immediate: !0							}							)], t.prototype, "setHelpMeChooseFilterToData", null), V([Object(l.Watch)("getHelpMeChooseEnableDataGetter", {								immediate: !0							}							)], t.prototype, "setHelpMeChooseEnableToData", null), V([Object(l.Watch)("getHelpMeChooseResultDataGetter", {								immediate: !0							}							)], t.prototype, "setHelpMeChooseResultToData", null), V([Object(l.Watch)("rwdWidth", {								immediate: !0							}							)], t.prototype, "update", null), V([Object(l.Watch)("rwdState", {								immediate: !0							}							)], t.prototype, "rwdStateChange", null), t=V([Object(l.Component)( {								components: {									CheckBoxGroup: O, SolidButton:G.a, TextLink:U.a, helpMeChooseResult:H								}							}							)], t)
						}
						(Object(l.mixins)($.a)), Y=r(864);
						var Q=Object(P.a)(K, (function() {
							var e=this, t=e.$createElement, o=e._self._c||t;
							return e.helpMeChooseFilterResult&&e.helpMeChooseFilterResult.Question&&e.helpMeChooseFilterResult.Question.length>0&&-1!=e.helpMeChooseFilterResult.Question.map((function(i) {
								return i.Answer.length>0
							}
							)).indexOf(!0)?o("section", {
								class: e.$style.chooseYourLaptopsSection
							}
							, [o("div", {								class: e.$style.chooseYourLaptopsContainer							}							, [o("div", {								class: e.$style.titleContainer							}							, [o("span", {								class: e.$style.Heading							}							, [e._v("\n        "+e._s(e.helpMeChooseFilterResult.Translation.Title)+"\n      ")]), e._v(" "), "tablet"===e.rwdState||"mobile"===e.rwdState?[e.enableCollapseAllButten?o("TextLink", {								class:e.$style.collapseAll, attrs: {									enableArrow: !1, theme:"Azure"								}								, nativeOn: {									click:function(t) {										return e.collapseAll(t)									}								}							}							, [e._v("\n          Collapse All\n        ")]):o("TextLink", {
								class:e.$style.collapseAll, attrs: {
									enableArrow: !1, theme:"Azure"
								}
								, nativeOn: {
									click:function(t) {
										return e.expandAll(t)
									}
								}
							}
							, [e._v("\n          Expand All\n        ")])]:e._e()], 2), e._v(" "), e.helpMeChooseFilterResult.Question?o("div", {
								ref: "qaSelectWrapper", class:e.$style.qaSelectWrapper
							}
							, e._l(e.helpMeChooseFilterResult.Question, (function(t, r) {
								return o("checkBoxGroup", {
									key:t.Id, ref:"checkBoxGroupArray", refInFor:!0, attrs: {
										index:r, questionId:t.Id, rwdWidth:e.rwdWidth, rwdState:e.rwdState, enableSelectAll:!1, progressState:e.getProgressStateGetter, enableResult:e.helpMeChooseEnableResult, optionObjList:t.Answer.map((function(e) {
											return {
												val: e.Id, content:e.Name
											}
										}
										)), questionType:0===t.QuestionType?"radio":"checkbox"
									}
									, on: {
										expandNext:e.expandNext, triggerCollapseStatusChange:e.collapseStatusChange, triggerHelpMeChooseEnable:e.helpMeChooseEnable, triggerSendGA:function(r) {
											return e.triggerSendGA(r, t)
										}
									}
								}
								, [e._v("\n        "+e._s(t.Name)+"\n      ")])
							}
							)), 1):e._e(), e._v(" "), e.helpMeChooseFilterResult.Translation?o("div", {
								class: e.$style.controllButtonGroup
							}
							, [o("TextLink", {								class:e.$style.resetButton, attrs: {									enableArrow: !1, theme:"Black", arrowIcon:!1								}								, nativeOn: {									click:function(t) {										return e.resetEvent(t)									}								}							}							, [o("img", {								attrs: {									src: r(852), alt:"cross_normal icon"								}							}							), e._v("\n        "+e._s(e.helpMeChooseFilterResult.Translation.ResetAll)+"\n      ")]), e._v(" "), o("SolidButton", {
								class:e.$style.viewMyLaptops, attrs: {
									theme: "Blue60", needCallEvent:!0
								}
								, nativeOn: {
									click:function(t) {
										return e.searchHelpMeChooseResult(t)
									}
								}
							}
							, [e._v("\n        "+e._s(e.helpMeChooseFilterResult.Translation.ViewMyPDLine)+"\n      ")])], 1):e._e()]), e._v(" "), e.helpMeChooseResult&&e.helpMeChooseResult.ProductList&&e.helpMeChooseResult.ProductList.length>0?o("helpMeChooseResult", {
								attrs: {
									"rwd-width": e.windowWidth, ProductCardResults:e.helpMeChooseResult
								}
							}
							):e._e()], 1):e._e()
						}
						), [], !1, (function(e) {
							this.$style=Y.default.locals||Y.default
						}
						), null, null);
						t.a=Q.exports
					}
					, 789:function(e, t, r) {
						"use strict";
						r(13), r(24);
						var o, n=r(4), l=r(0), c=r(584), d=(r(65), r(583)), h=r.n(d), m=r(598), _=r(590), f=(r(114), r(14)), C=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), y=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, v=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.colorCodePicked="", t
							}
							return C(t, e), t.prototype.setDefaultProductColor=function() {
								""===this.colorCodePicked&&this.ProductCardItem.ColorImage&&this.ProductCardItem.ColorImage.length>0&&(this.colorCodePicked=this.ProductCardItem.ColorImage[0].ColorCode)
							}
							, t.prototype.changeMainPage=function() {
								var e, t=this;
								this.colorCodePicked&&(e=this.ProductCardItem.ColorImage.find((function(element) {
									return element.ColorCode===t.colorCodePicked
								}
								)))&&(this.mainImage=e.ImageURL[0])
							}
							, y([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), y([Object(l.Prop)()], t.prototype, "ProductCardItem", void 0), y([Object(l.Prop)()], t.prototype, "cardIndex", void 0), y([Object(l.Watch)("ProductCardItem", {								deep: !0, immediate:!0							}							)], t.prototype, "setDefaultProductColor", null), y([Object(l.Watch)("colorCodePicked", {								immediate: !0							}							)], t.prototype, "changeMainPage", null), t=y([Object(l.Component)( {								components: {									GhostButton: c.a								}							}							)], t)
						}
						(Object(l.mixins)(f.a)), I=r(849), S=r(8);
						var P=Object(S.a)(v, (function() {
							var e=this, t=e.$createElement, r=e._self._c||t;
							return r("div", {
								class: e.$style.productCardContainer
							}
							, [r("a", {								attrs: {									href: e.ProductCardItem.Link, target:"_blank", rel:"noreferrer noopener"								}								, on: {									click:function(t) {										e.gaDataLayerPush( {											event: "data_layer_event", event_category_DL:"internal-link", event_action_DL:"clicked", event_label_DL:"spotlight/"+e.ProductCardItem.Title, event_value_DL:"0"										}										), e.gaHmtPush(["_trackEvent", "internal-links", "clicked", "spotlight/"+e.ProductCardItem.Title])
									}
								}
							}
							, [r("div", {								class: e.$style.spotlightItemImg							}							, [r("picture", [e.ProductCardItem.ImageUrl&&e.ProductCardItem.ImageUrl.includes("/gain/")?r("source", {								attrs: {									type: "image/webp", srcset:e.ProductCardItem.ImageUrl+"/fwebp"								}							}							):e._e(), e._v(" "), e.ProductCardItem.ImageUrl&&e.ProductCardItem.ImageUrl.includes("/media/Odin/")?r("source", {								attrs: {									type: "image/webp", srcset:e.ProductCardItem.ImageUrl+"?webp"								}							}							):e._e(), e._v(" "), r("img", {								attrs: {									src: ""+e.ProductCardItem.ImageUrl, alt:e.ProductCardItem.Title								}							}							)])]), e._v(" "), r("div", {
								class: e.$style.spotlighItem
							}
							, [r("div", {								class: e.$style.spotlightTitle							}							, [e._v("\n    "+e._s(e.ProductCardItem.Title)+"\n   ")]), e._v(" "), r("div", {
								class: e.$style.spotlightContent
							}
							, [e._v("\n    "+e._s(e.ProductCardItem.Description)+"\n   ")])])])])
						}
						), [], !1, (function(e) {
							this.$style=I.default.locals||I.default
						}
						), null, null).exports, w=function() {
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
								function r() {
									this.constructor=t
								}
								e(t, b), t.prototype=null===b?Object.create(b):(r.prototype=b.prototype, new r)
							}
						}
						(), L=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, k=function() {
							for(var s=0, i=0, e=arguments.length;
							i<e;
							i++)s+=arguments[i].length;
							var t=Array(s), r=0;
							for(i=0;
							i<e;
							i++)for(var a=arguments[i], o=0, n=a.length;
							o<n;
							o++, r++)t[r]=a[o];
							return t
						}
						, D=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.currentSlide=1, t.pageSize=1, t.rwdState="", t.oneCardDisplacement=0, t.enableControllButton=!0, t.autoPlayInterval=null, t.slideStyleObject= {}
								, t.totalCardsCountEd=0, t.spotlightArray=[], t.cardInlineStyleObject= {
									marginRight: t.spaceBetween+"px", flexGrow:"0", flexShrink:"0", maxWidth:"none"
								}
								, t
							}
							return w(t, e), t.prototype.created=function() {
								this.totalCardsCountEd=this.totalCardsCount
							}
							, t.prototype.mounted=function() {
								"mobile"===this.rwdState?this.spotlightArray=k(this.spotlightData, this.spotlightData): this.spotlightArray=k(this.spotlightData)
							}
							, Object.defineProperty(t.prototype, "totalSlide", {
								get:function() {
									return Math.ceil(this.spotlightArray.length/this.pageSize)
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "visibleWidth", {
								get:function() {
									var e=this.pageSize>this.totalCardsCount?this.totalCardsCount: this.pageSize;
									return this.oneCardDisplacement*e-this.spaceBetween
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "isVisibleWidthOutOfViewport", {
								get:function() {
									return this.visibleWidth>=this.maxVisibleWidth
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "maxVisibleWidth", {
								get:function() {
									return this.maxContainerWidth>0?this.maxContainerWidth: this.rwdWidth
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "innerSlidesDisplacement", {
								get:function() {
									var e=this.visibleWidth+this.spaceBetween, t=e*(this.currentSlide-1), r=this.oneCardDisplacement*(this.totalCardsCount-this.pageSize);
									return"mobile"===this.rwdState?t<0&&(t=0): (t<0?t=0:t>r&&this.currentSlide>=this.totalSlide&&1!==this.totalSlide&&(t=r), e*this.totalCardsCount-t<this.rwdWidth-20&&0!==t&&(t=e*this.totalCardsCount-(this.rwdWidth-20))), -t
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "getProgressPercent", {
								get:function() {
									return this.totalCardsCount>0?this.currentSlide*this.pageSize>=this.totalCardsCount?100: Math.floor(this.currentSlide*this.pageSize/this.totalCardsCount*100):0
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.bindProgressPercent=function() {
								this.$emit("getProgressPercentEvent", this.getProgressPercent)
							}
							, t.prototype.bindInlieStyle=function() {
								this.bindSlideStyle(this.cardInlineStyleObject)
							}
							, t.prototype.reloadSource=function() {
								this.currentSlide=1, this.rwdWidth>=this.rwdBreakPointMedium&&this.spotlightData&&this.spotlightArray?(this.rwdState="desktop", this.pageSize=this.pageSizeList[0], this.spotlightData.length!==this.spotlightArray.length&&(this.spotlightArray=k(this.spotlightData)), this.enableControllButton=1===this.showControllButtonList[0], this.spotlightArray=this.spotlightData): this.rwdWidth>this.rwdBreakPointSmall?(this.rwdState="tablet", this.pageSize=this.pageSizeList[1], this.spotlightData.length!==this.spotlightArray.length&&(this.spotlightArray=k(this.spotlightData)), this.enableControllButton=1===this.showControllButtonList[1], this.spotlightArray=this.spotlightData):(this.rwdState="mobile", this.pageSize=this.pageSizeList[2], this.spotlightArray=k(this.spotlightData, this.spotlightData), this.enableControllButton=1===this.showControllButtonList[2])
							}
							, t.prototype.autoPlayBind=function() {
								this.autoPlay?this.bindInterval(): this.autoPlayInterval&&clearInterval(this.autoPlayInterval)
							}
							, t.prototype.restartInterval=function() {
								this.autoPlay&&(this.autoPlayInterval&&clearInterval(this.autoPlayInterval), this.bindInterval())
							}
							, t.prototype.bindInterval=function() {
								var e=this;
								this.autoPlayInterval=setInterval((function() {
									e.next(null, !0)
								}
								), this.autoPlayDelay)
							}
							, t.prototype.slideTo=function(e) {
								this.restartInterval(), this.currentSlide=e
							}
							, t.prototype.next=function(e, t) {
								void 0===t&&(t=!1), "mobile"===this.rwdState&&this.totalSlide-this.currentSlide<2*this.totalCardsCountEd&&(this.spotlightArray=k(this.spotlightArray, this.spotlightData)), this.currentSlide++, this.currentSlide>this.totalSlide&&(!0===this.loop?this.currentSlide=1: this.currentSlide=this.totalSlide), !1===t&&this.restartInterval()
							}
							, t.prototype.prev=function(e, t) {
								void 0===t&&(t=!1), this.currentSlide--, this.currentSlide<=0&&(!0===this.loop?this.currentSlide=this.totalSlide: this.currentSlide=1), !1===t&&this.restartInterval()
							}
							, t.prototype.updateSlideWidth=function() {
								var e=this.$refs.innerSlides;
								if(e&&e.hasChildNodes()) {
									var t=e.childNodes[0].offsetWidth;
									this.oneCardDisplacement=t+this.spaceBetween
								}
								this.$set(this.cardInlineStyleObject, "maxWidth", (this.maxVisibleWidth-this.spaceBetween*(this.pageSize-1))/this.pageSize+"px")
							}
							, t.prototype.updated=function() {
								this.updateSlideWidth()
							}
							, t.prototype.bindSlideStyle=function(e) {
								this.slideStyleObject=e
							}
							, L([Object(l.Prop)()], t.prototype, "spotlightData", void 0), L([Object(l.Prop)( {								default: 0							}							)], t.prototype, "spaceBetween", void 0), L([Object(l.Prop)( {								default: !1							}							)], t.prototype, "autoPlay", void 0), L([Object(l.Prop)( {								default: 5e3							}							)], t.prototype, "autoPlayDelay", void 0), L([Object(l.Prop)( {								default:function() {									return[3, 2, 1]
								}
							}
							)], t.prototype, "pageSizeList", void 0), L([Object(l.Prop)( {								default:function() {									return[1, 1, 1]
								}
							}
							)], t.prototype, "showControllButtonList", void 0), L([Object(l.Prop)( {								default: !1							}							)], t.prototype, "loop", void 0), L([Object(l.Prop)( {								default: parseInt(h.a.breakPointSmall, 10)							}							)], t.prototype, "rwdBreakPointSmall", void 0), L([Object(l.Prop)( {								default: parseInt(h.a.breakPointMedium, 10)							}							)], t.prototype, "rwdBreakPointMedium", void 0), L([Object(l.Prop)( {								default: 0							}							)], t.prototype, "maxContainerWidth", void 0), L([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), L([Object(l.Prop)( {								default: 0							}							)], t.prototype, "totalCardsCount", void 0), L([Object(l.Watch)("getProgressPercent", {								immediate: !0							}							)], t.prototype, "bindProgressPercent", null), L([Object(l.Watch)("cardInlineStyleObject", {								deep: !0, immediate:!0							}							)], t.prototype, "bindInlieStyle", null), L([Object(l.Watch)("rwdWidth", {								immediate: !0							}							)], t.prototype, "reloadSource", null), L([Object(l.Watch)("autoPlay", {								immediate: !0							}							)], t.prototype, "autoPlayBind", null), t=L([Object(l.Component)( {								components: {									CarouselArrows: m.a, ProductCardSpotlight:P, Indicator:_.a								}							}							)], t)
						}
						(l.Vue), x=r(850);
						var O=Object(S.a)(D, (function() {
							var e=this, t=e.$createElement, r=e._self._c||t;
							return r("div", {
								class: e.$style.carouselContainer
							}
							, [r("v-touch", {								attrs: {									enabled: {										swipeleft: !0, swiperight:!0									}								}								, on: {									swipeleft: e.next, swiperight:e.prev								}							}							, [r("div", {								ref:"visibleDiv", class:e.$style.visibleDiv, style:[e.rwdWidth>731? {									width: e.visibleWidth+"px"								}								: {									width: e.rwdWidth-20+"px"								}								, e.rwdWidth>731? {									maxWidth: e.maxVisibleWidth+"px"								}								: {}								]
							}
							, [r("div", {								ref:"innerSlides", class:e.$style.innerSlides, style: {									transform: "translateX("+e.innerSlidesDisplacement+"px)"								}							}							, e._l(e.spotlightArray, (function(t, o) {								return r("ProductCardSpotlight", {									key:t.ProductID, style:e.slideStyleObject, attrs: {										"product-card-item": t, "card-index":o									}								}								)							}							)), 1)])]), e._v(" "), r("CarouselArrows", {
								attrs: {
									enableControllButton: e.enableControllButton, enablePrevButton:e.currentSlide>1&&e.totalSlide>1, enableNextButton:e.currentSlide!==e.totalSlide&&e.totalSlide>1
								}
								, on: {
									clickPrev: e.prev, clickNext:e.next
								}
							}
							), e._v(" "), r("Indicator", {
								attrs: {
									autoPlay: e.autoPlay, rwdWidth:e.rwdWidth, currentSlide:e.currentSlide%e.totalCardsCountEd!=0?e.currentSlide%e.totalCardsCountEd:e.totalCardsCountEd, totalSlide:"mobile"!=e.rwdState?e.totalSlide:e.totalCardsCountEd, transitionDuration:e.autoPlayDelay
								}
								, on: {
									slideToEvent: e.slideTo
								}
							}
							)], 1)
						}
						), [], !1, (function(e) {
							this.$style=x.default.locals||x.default
						}
						), null, null).exports, R=function() {
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
								function r() {
									this.constructor=t
								}
								e(t, b), t.prototype=null===b?Object.create(b):(r.prototype=b.prototype, new r)
							}
						}
						(), M=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, W=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.breakPointMedium=h.a.breakPointMedium?parseInt(h.a.breakPointMedium, 10):1279, t.breakPointSmall=h.a.breakPointSmall?parseInt(h.a.breakPointSmall, 10):731, t.rwdState="", t.ProductCardResults= {}
								, t.slideStyleObject= {}
								, t
							}
							return R(t, e), t.prototype.reloadSource=function() {
								this.rwdWidth>this.breakPointMedium?this.rwdState="desktop": this.rwdWidth>this.breakPointSmall?this.rwdState="tablet":this.rwdState="mobile"
							}
							, t.prototype.bindSlideStyle=function(e) {
								this.slideStyleObject=e
							}
							, M([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), M([Object(l.Prop)()], t.prototype, "spotlightData", void 0), M([Object(l.Watch)("rwdWidth")], t.prototype, "reloadSource", null), t=M([Object(l.Component)( {								components: {									GhostButton: c.a, CardCarousel:O								}							}							)], t)
						}
						(l.Vue), F=r(851);
						var T=Object(S.a)(W, (function() {
							var e=this, t=e.$createElement, r=e._self._c||t;
							return e.spotlightData&&e.spotlightData.length>0?r("section", {
								class: e.$style.section
							}
							, [r("div", {								class: e.$style.productCardWraper							}							, [r("CardCarousel", {								class:e.$style.carouselSpotlight, attrs: {									rwdWidth: e.rwdWidth, spotlightData:e.spotlightData, pageSizeList:[4, 3, 1], showControllButtonList:[1, 0, 0], totalCardsCount:e.spotlightData?e.spotlightData.length:0, spaceBetween:12, loop:!0
								}
								, on: {
									bindSlideInlineStyleEvent: e.bindSlideStyle
								}
							}
							)], 1)]):e._e()
						}
						), [], !1, (function(e) {
							this.$style=F.default.locals||F.default
						}
						), null, null);
						t.a=T.exports
					}
					, 791:function(e, t, r) {
						"use strict";
						r(13), r(24);
						var o, n=r(4), l=r(0), c=r(627), d=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), h=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, m=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.uniqueId=null, t
							}
							return d(t, e), t.prototype.mounted=function() {
								this.uniqueId=this.getComponentId("checkbox")
							}
							, Object.defineProperty(t.prototype, "checked", {
								get:function() {
									return this.value
								}
								, set:function(e) {
									this.$emit("input", e), this.$emit("gaClickTrigger", e)
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.handelIndeterminate=function() {
								if(this.$refs&&this.uniqueId&&this.$refs[this.uniqueId]) {
									var e=this.$refs[this.uniqueId];
									e&&(e.indeterminate=Boolean(this.isSelectedPart))
								}
							}
							, h([Object(l.Prop)( {								default: !1							}							)], t.prototype, "isSelectedPart", void 0), h([Object(l.Prop)()], t.prototype, "value", void 0), h([Object(l.Prop)()], t.prototype, "name", void 0), h([Object(l.Prop)( {								default: "checkbox"							}							)], t.prototype, "type", void 0), h([Object(l.Watch)("isSelectedPart", {								immediate: !0							}							)], t.prototype, "handelIndeterminate", null), t=h([l.Component], t)
						}
						(Object(l.mixins)(c.a)), _=r(858), f=r(8);
						var component=Object(f.a)(m, (function() {
							var e=this, t=e.$createElement, r=e._self._c||t;
							return r("div", {
								class: e.$style.checkBoxContainer
							}
							, ["checkbox"===e.type?r("input", {								directives:[ {									name: "model", rawName:"v-model", value:e.checked, expression:"checked"								}								], ref:e.uniqueId, class:e.$style["custom-control-input"], attrs: {
									id: e.uniqueId, "true-value":!0, "false-value":!1, name:e.name||!1, "aria-checked":e.checked, tabindex:"-1", type:"checkbox"
								}
								, domProps: {
									checked: Array.isArray(e.checked)?e._i(e.checked, null)>-1:e.checked
								}
								, on: {
									change:function(t) {
										var r=e.checked, o=t.target, n=!!o.checked;
										if(Array.isArray(r)) {
											var l=e._i(r, null);
											o.checked?l<0&&(e.checked=r.concat([null])): l>-1&&(e.checked=r.slice(0, l).concat(r.slice(l+1)))
										}
										else e.checked=n
									}
								}
							}
							):"radio"===e.type?r("input", {
								directives:[ {
									name: "model", rawName:"v-model", value:e.checked, expression:"checked"
								}
								], ref:e.uniqueId, class:e.$style["custom-control-input"], attrs: {
									id: e.uniqueId, "true-value":!0, "false-value":!1, name:e.name||!1, "aria-checked":e.checked, tabindex:"-1", type:"radio"
								}
								, domProps: {
									checked: e._q(e.checked, null)
								}
								, on: {
									change:function(t) {
										e.checked=null
									}
								}
							}
							):r("input", {
								directives:[ {
									name: "model", rawName:"v-model", value:e.checked, expression:"checked"
								}
								], ref:e.uniqueId, class:e.$style["custom-control-input"], attrs: {
									id: e.uniqueId, "true-value":!0, "false-value":!1, name:e.name||!1, "aria-checked":e.checked, tabindex:"-1", type:e.type
								}
								, domProps: {
									value: e.checked
								}
								, on: {
									input:function(t) {
										t.target.composing||(e.checked=t.target.value)
									}
								}
							}
							), e._v(" "), r("label", {
								class:e.$style["custom-control-label"], attrs: {
									for: e.uniqueId, tabindex:"0"
								}
							}
							, [e._t("default")], 2)])
						}
						), [], !1, (function(e) {
							this.$style=_.default.locals||_.default
						}
						), null, null);
						t.a=component.exports
					}
					, 792:function(e, t, r) {
						"use strict";
						r(74), r(60), r(32), r(61), r(66), r(53), r(588), r(27), r(304), r(13), r(59), r(24), r(16), r(652), r(17), r(25), r(45), r(33);
						var o, n=r(4), l=r(0), c=r(18), d=r.n(c), h=r(653), m=r.n(h), _=r(654), f=r.n(_), C=r(657), y=r.n(C), v=r(658), I=r.n(v), S=r(659), P=r.n(S), w=r(306), L=r.n(w), k=r(760), D=r(14), x=r(110), O=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), R=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, M=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.seriesFilter= {}
								, t.seriesFilterEnable= {
									Category: null, Series:null, SubSeries:null, Spec:null, SubSpec:null
								}
								, t.websiteCode="", t.collapsibleFilterList= {}
								, t.seriesFilterPartialChecked= {}
								, t.specFilterPartialChecked= {}
								, t.hasMoreFilterList= {}
								, t.productLevelOneCode="", t.productLevelTwoCode="", t.isMobile=!1, t.isShowExpandAll=!1, t.isShowCollapseAll=!1, t.isShowToggleButton=!1, t.pageSize=20, t.filterChecked= {
									categoryCheckedList: [], seriesCheckedList:[], subSeriesCheckedList:[], specCheckedList:[], subSpecCheckedList:[]
								}
								, t.mobileFilterChecked= {
									categoryCheckedList: [], seriesCheckedList:[], subSeriesCheckedList:[], specCheckedList:[], subSpecCheckedList:[]
								}
								, t
							}
							return O(t, e), t.prototype.mounted=function() {
								this.getWidth()
							}
							, Object.defineProperty(t.prototype, "hasOrder", {
								get:function() {
									return this.seriesFilter.HasStock
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "hasCategory", {
								get:function() {
									return null!==this.seriesFilter.Category.CategoryList&&this.seriesFilter.Category.CategoryList.length>0
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "hasSeries", {
								get:function() {
									return null!==this.seriesFilter.Series.SeriesList&&this.seriesFilter.Series.SeriesList.length>0
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "hasSpecCategory", {
								get:function() {
									return null!==this.seriesFilter.SpecCategory&&this.seriesFilter.SpecCategory.length>0
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "translationCollapse", {
								get:function() {
									return this.$store.getters.seriesFilterGetter.Translation.CollapseAll
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "translationExpand", {
								get:function() {
									return this.$store.getters.seriesFilterGetter.Translation.ExpandAll
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "translationMore", {
								get:function() {
									return this.$store.getters.seriesFilterGetter.Translation.More
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.routeCategorychange=function() {
								this.websiteCode=Object(x.b)(this.$route.params.region), this.productLevelOneCode=this.$route.params.levelOneTopMenuName, this.productLevelTwoCode=this.$route.params.levelTwoProductLineName, (this.filterCheckedCounter(this.filterChecked)<2||0===Object.keys(this.seriesFilterGetter).length)&&"Series"!==this.$route.name&&this.getSeriesFilterByAPI(), Object.keys(this.seriesFilterGetter).length>0&&this.setFilterCheckByURLParam(), this.filterParams()
							}
							, t.prototype.setSeriesFilter=function() {
								this.websiteCode=Object(x.b)(this.$route.params.region), this.productLevelOneCode=this.$route.params.levelOneTopMenuName, this.productLevelTwoCode=this.$route.params.levelTwoProductLineName, "Series"!==this.$route.name?this.initSeriesFilter(): (this.seriesFilter=d()(this.seriesFilterGetter), this.initialCollapsibleFilterList())
							}
							, t.prototype.setSeriesFilterEnable=function() {
								this.resetFilterEnable(), "Series"!==this.$route.name&&(this.seriesFilterEnable=this.seriesFilterEnableGetter)
							}
							, t.prototype.getWidth=function() {
								this.rwdWidth<=731&&0!==this.rwdWidth?(this.isMobile=!0, this.getCheckedCount(this.filterChecked)): this.isMobile=!1
							}
							, t.prototype.getSort=function() {
								var e=this.filterCheckedCounter(this.filterChecked);
								if(e>0&&""!==this.sort) {
									this.filterChecked.categoryCheckedList.toString(), this.filterChecked.seriesCheckedList.toString(), this.filterChecked.subSeriesCheckedList.toString();
									var t=this.filterChecked.specCheckedList.toString(), r=this.filterChecked.subSpecCheckedList.toString();
									this.getSeriesFilterResultByAPI( {
										params: {
											SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode, PageSize:this.pageSize, PageIndex:1, CategoryName:this.$route.query.Category?this.$route.query.Category.toString():"", SeriesName:this.$route.query.Series?this.$route.query.Series.toString():"", SubSeriesName:this.$route.query.SubSeries?this.$route.query.SubSeries.toString():"", Spec:t, SubSpec:r, Sort:this.sort
										}
									}
									)
								}
								else"Filter"===this.$route.name&&0===e&&""!==this.sort&&this.getSeriesFilterResultByAPI( {
									params: {
										SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode, PageSize:this.pageSize, PageIndex:1, CategoryName:this.$route.query.Category?this.$route.query.Category.toString():"", SeriesName:this.$route.query.Series?this.$route.query.Series.toString():"", SubSeriesName:this.$route.query.SubSeries?this.$route.query.SubSeries.toString():"", Spec:"", SubSpec:"", Sort:this.sort
									}
								}
								)
							}
							, t.prototype.checkTagsList=function() {
								0===this.filterCheckedCounter(this.$store.getters.filterTagsList)&&(this.filterChecked= {
									categoryCheckedList: [], seriesCheckedList:[], subSeriesCheckedList:[], specCheckedList:[], subSpecCheckedList:[]
								}
								, this.resetFilterEnable(), this.clearFilterPartialChecked())
							}
							, t.prototype.isClearAllData=function() {
								if(void 0!==this.isFilterCancel)this.isMobile&&(this.filterChecked= {
									categoryCheckedList: [], seriesCheckedList:[], subSeriesCheckedList:[], specCheckedList:[], subSpecCheckedList:[]
								}
								, this.resetFilterEnable(), this.clearFilterPartialChecked(), this.getCheckedCount(this.filterChecked));
								else if(0===this.$store.getters.subSeriesDataGetter.List.length) {
									this.setFilterTagsList( {
										category: "", series:"", subSeries:"", spec:"", subSpec:""
									}
									), this.$router.push( {
										name: "Filter"
									}
									)
								}
								else this.resetFilterEnable(), this.$router.push( {
									name: "Series"
								}
								)
							}
							, t.prototype.isFilterCancelData=function() {
								void 0!==this.isFilterCancel&&(this.$set(this.filterChecked, "categoryCheckedList", this.mobileFilterChecked.categoryCheckedList), this.$set(this.filterChecked, "seriesCheckedList", this.mobileFilterChecked.seriesCheckedList), this.$set(this.filterChecked, "subSeriesCheckedList", this.mobileFilterChecked.subSeriesCheckedList), this.$set(this.filterChecked, "specCheckedList", this.mobileFilterChecked.specCheckedList), this.$set(this.filterChecked, "subSpecCheckedList", this.mobileFilterChecked.subSpecCheckedList), this.getCheckedCount(this.filterChecked), this.setSeriesFilterEnable(), this.initialSeriesFilterPartialCheckedList(), this.initialSpecFilterPartialCheckedList(), document.getElementsByTagName("html")[0].classList.remove("fixed"))
							}
							, t.prototype.isFilterApplyData=function() {
								var e, t, r, o, n;
								if(void 0!==this.isFilterCancel) {
									var l=(null===(e=this.filterChecked.categoryCheckedList)||void 0===e?void 0: e.length)>0||(null===(t=this.filterChecked.seriesCheckedList)||void 0===t?void 0:t.length)>0||(null===(r=this.filterChecked.subSeriesCheckedList)||void 0===r?void 0:r.length)>0||(null===(o=this.filterChecked.specCheckedList)||void 0===o?void 0:o.length)>0||(null===(n=this.filterChecked.subSpecCheckedList)||void 0===n?void 0:n.length)>0;
									if(l||0===this.$store.getters.subSeriesDataGetter.List.length)if(l||0!==this.$store.getters.subSeriesDataGetter.List.length)l&&this.mobileFilterChecked!==this.filterChecked&&(this.$set(this.mobileFilterChecked, "categoryCheckedList", this.filterChecked.categoryCheckedList), this.$set(this.mobileFilterChecked, "seriesCheckedList", this.filterChecked.seriesCheckedList), this.$set(this.mobileFilterChecked, "subSeriesCheckedList", this.filterChecked.subSeriesCheckedList), this.$set(this.mobileFilterChecked, "specCheckedList", this.filterChecked.specCheckedList), this.$set(this.mobileFilterChecked, "subSpecCheckedList", this.filterChecked.subSpecCheckedList), this.updateFilterList());
									else {
										this.setFilterTagsList( {
											category: "", series:"", subSeries:"", spec:"", subSpec:""
										}
										), this.$router.push( {
											name: "Filter"
										}
										)
									}
									else this.resetFilterEnable(), this.$router.push( {
										name: "Series"
									}
									);
									document.getElementsByTagName("html")[0].classList.remove("fixed")
								}
							}
							, t.prototype.idMapping=function(e, data) {
								if("category"===e) {
									for(var t=[], r=this.seriesFilterGetter.IdNameMapping.Category, i=0;
									i<r.length;
									i++)t[r[i].ID]=r[i].Name;
									return Object.values(this.filterChecked.categoryCheckedList).map((function(e) {
										return t[e]
									}
									)).toString()
								}
								if("series"===e) {
									var o=[], n=this.seriesFilterGetter.IdNameMapping.Series;
									for(i=0;
									i<n.length;
									i++)o[n[i].SeriesID]=n[i].Name;
									return Object.values(this.filterChecked.seriesCheckedList).map((function(e) {
										return o[e]
									}
									)).toString()
								}
								if("subSeries"===e) {
									var l=[], c=this.seriesFilterGetter.IdNameMapping.SubSeries;
									for(i=0;
									i<c.length;
									i++)l[c[i].ID]=c[i].Name;
									return Object.values(this.filterChecked.subSeriesCheckedList).map((function(e) {
										return l[e]
									}
									)).toString()
								}
							}
							, t.prototype.nameMapping=function(e, data) {
								if("category"===e) {
									for(var t=[], r=this.seriesFilterGetter.IdNameMapping.Category, i=0;
									i<r.length;
									i++)t[r[i].Name]=r[i].ID;
									return data.split(",").map((function(e) {
										return t[e]
									}
									))
								}
								if("series"===e) {
									var o=[], n=this.seriesFilterGetter.IdNameMapping.Series;
									for(i=0;
									i<n.length;
									i++)o[n[i].Name]=n[i].SeriesID;
									return data.split(",").map((function(e) {
										return o[e]
									}
									))
								}
								if("subSeries"===e) {
									var l=[], c=this.seriesFilterGetter.IdNameMapping.SubSeries;
									for(i=0;
									i<c.length;
									i++)l[c[i].Name]=c[i].ID;
									return data.split(",").map((function(e) {
										return l[e]
									}
									))
								}
							}
							, t.prototype.getEnableData=function() {
								if(this.filterCheckedCounter(this.filterChecked)>0) {
									var e=this.filterChecked.categoryCheckedList.toString(), t=this.filterChecked.seriesCheckedList.toString(), r=this.filterChecked.subSeriesCheckedList.toString(), o=this.filterChecked.specCheckedList.toString(), n=this.filterChecked.subSpecCheckedList.toString();
									this.getSeriesFilterEnableByAPI( {
										params: {
											SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode, Category:e, Series:t, SubSeries:r, Spec:o, SubSpec:n
										}
									}
									)
								}
							}
							, t.prototype.updateFilterList=function() {
								var e=this.filterCheckedCounter(this.filterChecked);
								if(e>0) {
									this.isMobile&&this.$emit("checked-count", e);
									var t=this.filterChecked.categoryCheckedList.toString(), r=this.filterChecked.seriesCheckedList.toString(), o=this.filterChecked.subSeriesCheckedList.toString(), n=this.filterChecked.specCheckedList.toString(), l=this.filterChecked.subSpecCheckedList.toString(), c= {}
									;
									if(t.length>0) {
										var d=this.idMapping("category", t);
										c.Category=d
									}
									if(r.length>0) {
										var h=this.idMapping("series", r);
										c.Series=h
									}
									if(o.length>0) {
										var m=this.idMapping("subSeries", o);
										c.SubSeries=m
									}
									n.length>0&&(c.Spec=n), l.length>0&&(c.SubSpec=l), "Filter"===this.$route.name?(this.isMobile&&this.getSeriesFilterResultByAPI( {
										params: {
											SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode, PageSize:this.pageSize, PageIndex:1, CategoryName:this.$route.query.Category?this.$route.query.Category.toString():"", SeriesName:this.$route.query.Series?this.$route.query.Series.toString():"", SubSeriesName:this.$route.query.SubSeries?this.$route.query.SubSeries.toString():"", Spec:n, SubSpec:l, Sort:this.sort
										}
									}
									), this.setURLQuery(c)):this.$router.push( {
										name: "Filter", query:c
									}
									)
								}
								else if(0===this.$store.getters.seriesTabDataGetter.length) {
									this.setFilterTagsList( {
										category: "", series:"", subSeries:"", spec:"", subSpec:""
									}
									), this.$router.push( {
										name: "Filter"
									}
									)
								}
								else this.resetFilterEnable(), this.$router.push( {
									name:"Series", params: {
										comeFrom: "cancelFilter"
									}
								}
								)
							}
							, t.prototype.initialUpdateFilterList=function() {
								var e=this.filterChecked.categoryCheckedList.toString(), t=this.filterChecked.seriesCheckedList.toString(), r=this.filterChecked.subSeriesCheckedList.toString(), o=this.filterChecked.specCheckedList.toString(), n=this.filterChecked.subSpecCheckedList.toString();
								this.$set(this.mobileFilterChecked, "categoryCheckedList", this.filterChecked.categoryCheckedList), this.$set(this.mobileFilterChecked, "seriesCheckedList", this.filterChecked.seriesCheckedList), this.$set(this.mobileFilterChecked, "subSeriesCheckedList", this.filterChecked.subSeriesCheckedList), this.$set(this.mobileFilterChecked, "specCheckedList", this.filterChecked.specCheckedList), this.$set(this.mobileFilterChecked, "subSpecCheckedList", this.filterChecked.subSpecCheckedList), this.getSeriesFilterEnableByAPI( {
									params: {
										SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode, Category:e, Series:t, SubSeries:r, Spec:o, SubSpec:n
									}
								}
								), this.$emit("initLevelThreeFilter"), this.getSeriesFilterResultByAPI( {
									params: {
										SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode, PageSize:this.pageSize, PageIndex:1, CategoryName:this.$route.query.Category?this.$route.query.Category.toString():"", SeriesName:this.$route.query.Series?this.$route.query.Series.toString():"", SubSeriesName:this.$route.query.SubSeries?this.$route.query.SubSeries.toString():"", Spec:o, SubSpec:n, Sort:this.sort
									}
								}
								)
							}
							, t.prototype.setURLQuery=function(e) {
								this.$router.push( {
									query: e
								}
								)
							}
							, t.prototype.setFilterCheckByURLParam=function() {
								var e, t, r, o, n, l, c, d, h, m, _=this.$route.query;
								if((null===(e=_.Category)||void 0===e?void 0: e.length)>0||(null===(t=_.Series)||void 0===t?void 0:t.length)>0||(null===(r=_.SubSeries)||void 0===r?void 0:r.length)>0||(null===(o=_.Spec)||void 0===o?void 0:o.length)>0||(null===(n=_.SubSpec)||void 0===n?void 0:n.length)>0) {
									var f= {
										categoryCheckedList:(null===(l=_.Category)||void 0===l?void 0:l.length)>0?this.nameMapping("category", _.Category):[], seriesCheckedList:(null===(c=_.Series)||void 0===c?void 0:c.length)>0?this.nameMapping("series", _.Series):[], subSeriesCheckedList:(null===(d=_.SubSeries)||void 0===d?void 0:d.length)>0?this.nameMapping("subSeries", _.SubSeries):[], specCheckedList:(null===(h=_.Spec)||void 0===h?void 0:h.length)>0?this.splitAndParseInt(_.Spec):[], subSpecCheckedList:(null===(m=_.SubSpec)||void 0===m?void 0:m.length)>0?this.splitAndParseInt(_.SubSpec):[]
									}
									;
									this.$emit("urlQueryCheckList", f), this.$set(this.filterChecked, "categoryCheckedList", f.categoryCheckedList), this.$set(this.filterChecked, "seriesCheckedList", f.seriesCheckedList), this.$set(this.filterChecked, "subSeriesCheckedList", f.subSeriesCheckedList), this.$set(this.filterChecked, "specCheckedList", f.specCheckedList), this.$set(this.filterChecked, "subSpecCheckedList", f.subSpecCheckedList), this.initialUpdateFilterList()
								}
								else if("Filter"===this.$route.name&&0===Object.keys(_).length)this.initialUpdateFilterList();
								else if("Filter"!==this.$route.name||0!==this.$store.getters.subSeriesDataGetter.List.length&&void 0!==_.length)"Filter"===this.$route.name?(this.resetFilterEnable(), this.$router.push( {
									name: "Series"
								}
								)):"Series"===this.$route.name&&this.getSeriesFilterEnableByAPI( {
									params: {
										SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode, Category:"", Series:"", SubSeries:"", Spec:"", SubSpec:""
									}
								}
								);
								else {
									this.setFilterTagsList( {
										category: "", series:"", subSeries:"", spec:"", subSpec:""
									}
									), this.initialUpdateFilterList()
								}
							}
							, t.prototype.splitAndParseInt=function(e) {
								return e.split(",").map((function(e) {
									return Number(e)
								}
								))
							}
							, t.prototype.getSeriesFilterByAPI=function() {
								this.getSeriesFilter( {
									params: {
										SystemCode: "asus", WebsiteCode:this.websiteCode, ProductLevel1Code:this.productLevelOneCode, ProductLevel2Code:this.productLevelTwoCode
									}
								}
								)
							}
							, t.prototype.initialCollapsibleFilterList=function() {
								var e=this, t=0;
								this.hasCategory&&(t++, this.$set(this.collapsibleFilterList, this.seriesFilter.Category.CategoryName, !0), this.seriesFilter.Category.CategoryList.length>=8&&void 0===this.$route.query.Category&&this.$set(this.hasMoreFilterList, this.seriesFilter.Category.CategoryName, !0)), this.hasSeries&&(t++, this.$set(this.collapsibleFilterList, this.seriesFilter.Series.SeriesName, !0), this.seriesFilter.Series.SeriesList.length>=8&&void 0===this.$route.query.Series&&this.$set(this.hasMoreFilterList, this.seriesFilter.Series.SeriesName, !0), this.seriesFilter.Series.SeriesList.forEach((function(r) {
									t<=3?e.$set(e.collapsibleFilterList, r.Name+"_"+r.SeriesID, !1): e.$set(e.collapsibleFilterList, r.Name+"_"+r.SeriesID, !0)
								}
								)), "Filter"===this.$route.name&&void 0!==this.$route.query.SubSeries&&this.seriesFilter.Series.SeriesList.filter((function(e) {
									return null!==e.Item
								}
								)).forEach((function(t) {
									var r=[];
									for(var o in t.Item)r.push(t.Item[o].ID);
									P()(r, e.nameMapping("subSeries", e.$route.query.SubSeries).map((function(e) {
										return+e
									}
									))).length>0&&(e.$set(e.collapsibleFilterList, t.Name+"_"+t.SeriesID, !0), e.$set(e.hasMoreFilterList, e.seriesFilter.Series.SeriesName, !1))
								}
								))), this.hasSpecCategory&&this.seriesFilter.SpecCategory.forEach((function(r) {
									++t>3?e.$set(e.collapsibleFilterList, r.Name+"_"+r.Id, !1):e.$set(e.collapsibleFilterList, r.Name+"_"+r.Id, !0), r.Item.length>0&&(r.Item.length>=8&&e.$set(e.hasMoreFilterList, r.Name, !0), r.Item.forEach((function(t) {
										if(t.SubItem&&t.SubItem.length>0&&e.$set(e.collapsibleFilterList, t.Name+"_"+t.Id, !0), void 0!==e.$route.query.Spec) {
											var o=[];
											o.push(t.Id), P()(o, e.$route.query.Spec.split(",").map((function(e) {
												return+e
											}
											))).length>0&&(e.$set(e.collapsibleFilterList, r.Name+"_"+r.Id, !0), e.$set(e.hasMoreFilterList, r.Name, !1))
										}
									}
									)), "Filter"===e.$route.name&&void 0!==e.$route.query.SubSpec&&r.Item.filter((function(e) {
										return null!==e.SubItem
									}
									)).forEach((function(t) {
										var o=[];
										for(var n in t.SubItem)o.push(t.SubItem[n].Id);
										P()(o, e.$route.query.SubSpec.split(",").map((function(e) {
											return+e
										}
										))).length>0&&(e.$set(e.collapsibleFilterList, t.Name+"_"+t.Id, !0), e.$set(e.collapsibleFilterList, r.Name+"_"+r.Id, !0), e.$set(e.hasMoreFilterList, r.Name, !1))
									}
									)))
								}
								))
							}
							, t.prototype.initialSeriesFilterPartialCheckedList=function() {
								var e=this;
								this.hasSeries&&this.seriesFilter.Series.SeriesList.forEach((function(t) {
									e.$set(e.seriesFilterPartialChecked, t.SeriesID, !1)
								}
								))
							}
							, t.prototype.initialSpecFilterPartialCheckedList=function() {
								var e=this;
								if(this.hasSpecCategory) {
									var t=","+this.filterChecked.subSpecCheckedList+",";
									this.seriesFilter.SpecCategory.forEach((function(r) {
										r.Item.forEach((function(r) {
											r.SubItem&&r.SubItem.length>0&&e.$set(e.specFilterPartialChecked, r.Id, !1), r.SubItem.forEach((function(o) {
												o.Id;
												t.indexOf(o.Id)>-1&&e.$set(e.specFilterPartialChecked, r.Id, !0)
											}
											))
										}
										))
									}
									))
								}
							}
							, t.prototype.collapsibleListToggle=function(e) {
								this.collapsibleFilterList[e]=!this.collapsibleFilterList[e];
								var t=this.collapsibleFilterList, r=this.seriesFilter.SpecCategory.filter((function(e) {
									return t[e.Name+"_"+e.Id]
								}
								)).length;
								(r+=Object.keys(this.collapsibleFilterList).filter((function(e) {
									return-1==e.indexOf("_")&&t[e]
								}
								)).length)>=this.seriesFilter.SpecCategory.length+Object.keys(this.collapsibleFilterList).filter((function(e) {
									return-1==e.indexOf("_")
								}
								)).length?(this.isShowCollapseAll=!0, this.isShowExpandAll=!1):0==r&&(this.isShowCollapseAll=!1, this.isShowExpandAll=!0)
							}
							, t.prototype.filterCheckedCounter=function(data) {
								var e=0;
								for(var t in data)e+=data[t].length;
								return e
							}
							, t.prototype.resetFilterEnable=function() {
								this.seriesFilterEnable.Category=null, this.seriesFilterEnable.Series=null, this.seriesFilterEnable.SubSeries=null, this.seriesFilterEnable.Spec=null, this.seriesFilterEnable.SubSpec=null
							}
							, t.prototype.clearFilterPartialChecked=function() {
								this.seriesFilterPartialChecked= {}
								, this.specFilterPartialChecked= {}
							}
							, t.prototype.clearFilterChecked=function() {
								var e= {
									categoryCheckedList: [], seriesCheckedList:[], subSeriesCheckedList:[], specCheckedList:[], subSpecCheckedList:[]
								}
								, t=this.seriesFilterEnable.Category, r=this.seriesFilterEnable.Series, o=this.seriesFilterEnable.SubSeries, n=this.seriesFilterEnable.Spec, l=this.seriesFilterEnable.SubSpec;
								if(null!==t&&t.length>0) {
									var c=y()(this.filterChecked.categoryCheckedList, t), h=this.findDuplicates(c);
									e.categoryCheckedList=h
								}
								if(null!==r&&r.length>0) {
									var m=y()(this.filterChecked.seriesCheckedList, r), _=this.findDuplicates(m);
									e.seriesCheckedList=_
								}
								if(null!==o&&o.length>0) {
									var f=y()(this.filterChecked.seriesCheckedList, o), C=this.findDuplicates(f);
									e.seriesCheckedList=C
								}
								if(null!==n&&n.length>0) {
									var v=y()(this.filterChecked.specCheckedList, n), I=this.findDuplicates(v);
									e.specCheckedList=I
								}
								if(null!==l&&l.length>0) {
									var S=y()(this.filterChecked.subSpecCheckedList, l), P=this.findDuplicates(S);
									e.subSpecCheckedList=P
								}
								this.filterChecked=d()(e)
							}
							, t.prototype.findDuplicates=function(e) {
								for(var t=e.slice().sort(), r=[], i=0;
								i<t.length-1;
								i++)t[i+1]===t[i]&&r.push(t[i]);
								return I()(r)
							}
							, t.prototype.categorySelect=function(e, label) {
								this.onFilterChecked(), -1!==this.filterChecked.categoryCheckedList.indexOf(e)&&(this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"filter", event_action_DL:"clicked", event_label_DL:label, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "filter", "clicked", label]))
							}
							, t.prototype.seriesSelectJudge=function(e, t, label) {
								var r=this;
								-1!==this.filterChecked.subSeriesCheckedList.indexOf(e)&&(this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"filter", event_action_DL:"clicked", event_label_DL:label, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "filter", "clicked", label]));
								var o=d()(this.filterChecked.seriesCheckedList);
								this.seriesFilter.Series.SeriesList.forEach((function(e) {
									if(e.Item&&e.Item.length>0&&e.SeriesID===t) {
										var n=[], l=[];
										e.Item.forEach((function(e) {
											l.push(e.ID), r.filterChecked.subSeriesCheckedList.forEach((function(t) {
												t===e.ID&&n.push(e.ID)
											}
											))
										}
										));
										var c=P()(l, r.seriesFilterEnable.SubSeries), d=P()(n, r.seriesFilterEnable.SubSeries);
										if(m()(l, n)||c.length===d.length&&null!==r.seriesFilterEnable.SubSeries)o.push(e.SeriesID), r.seriesFilterPartialChecked[e.SeriesID]=!1;
										else {
											var h=r.filterChecked.seriesCheckedList.indexOf(e.SeriesID);
											h>-1&&o.splice(h, 1), 0!==n.length?r.seriesFilterPartialChecked[e.SeriesID]=!0: r.seriesFilterPartialChecked[e.SeriesID]=!1
										}
									}
								}
								)), this.filterChecked.seriesCheckedList=d()(o), this.onFilterChecked()
							}
							, t.prototype.subSeriesSelectAllJudge=function(e, label) {
								var t=this;
								void 0===label&&(label=""), -1!==this.filterChecked.seriesCheckedList.indexOf(e)&&(this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"filter", event_action_DL:"clicked", event_label_DL:label, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "filter", "clicked", label]));
								var r=d()(this.filterChecked.subSeriesCheckedList);
								this.seriesFilter.Series.SeriesList.forEach((function(o) {
									if(o.SeriesID===e&&o.Item&&o.Item.length>0) {
										var n=!1, l=[];
										if(o.Item.forEach((function(e) {
											l.push(e.ID)
										}
										)), t.filterChecked.seriesCheckedList.forEach((function(e) {
											o.SeriesID===e&&(n=!0)
										}
										)), t.seriesFilterPartialChecked[o.SeriesID]=!1, n)if(t.collapsibleFilterList[o.Name+"_"+o.SeriesID]=!0, null!==t.seriesFilterEnable.SubSeries) {
											var c=P()(l, t.seriesFilterEnable.SubSeries);
											if(0!==c.length) {
												var d=f()(c, r);
												r=y()(d, r)
											}
										}
										else {
											d=f()(l, r);
											r=y()(d, r)
										}
										else l.forEach((function(e) {
											var t=r.indexOf(e);
											t>-1&&r.splice(t, 1)
										}
										))
									}
								}
								)), this.filterChecked.subSeriesCheckedList=d()(r), this.onFilterChecked()
							}
							, t.prototype.detectSeriesDisabledSubItem=function(e) {
								var t=this, r=!1, o=d()(this.filterChecked.subSeriesCheckedList);
								this.seriesFilter.Series.SeriesList.forEach((function(n) {
									if(n.SeriesID===e&&n.Item&&n.Item.length>0) {
										var l=[];
										n.Item.forEach((function(e) {
											l.push(e.ID)
										}
										));
										var c=P()(l, t.seriesFilterEnable.SubSeries);
										P()(l, t.filterChecked.subSeriesCheckedList);
										if(c.length!==n.Item.length&&c.length!==l.length&&0!==c.length)r=!0;
										else if(-1===t.filterChecked.seriesCheckedList.indexOf(e))t.filterChecked.seriesCheckedList.push(e);
										else {
											var h=d()(t.filterChecked.seriesCheckedList);
											t.filterChecked.seriesCheckedList.forEach((function(e) {
												var r=t.filterChecked.seriesCheckedList.indexOf(e);
												r>-1&&h.splice(r, 1)
											}
											)), t.filterChecked.seriesCheckedList=d()(h)
										}
										r?(t.seriesFilterPartialChecked[n.SeriesID]=!1, l.forEach((function(e) {
											var r=o.indexOf(e);
											r>-1&&o.splice(r, 1), t.filterChecked.subSeriesCheckedList=d()(o), t.onFilterChecked()
										}
										))):t.subSeriesSelectAllJudge(e)
									}
								}
								))
							}
							, t.prototype.specSelectJudge=function(e, t, label) {
								var r=this;
								if(-1!==this.filterChecked.subSpecCheckedList.indexOf(e)&&(this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"filter", event_action_DL:"clicked", event_label_DL:label, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "filter", "clicked", label])), this.hasSpecCategory) {
									var o=d()(this.filterChecked.specCheckedList);
									this.seriesFilter.SpecCategory.forEach((function(e) {
										e.Item&&e.Item.length>0&&e.Item.forEach((function(e) {
											if(e.Id===t&&e.SubItem&&e.SubItem.length>0) {
												var n=[], l=[];
												e.SubItem.forEach((function(e) {
													n.push(e.Id), r.filterChecked.subSpecCheckedList.forEach((function(t) {
														t===e.Id&&l.push(e.Id)
													}
													))
												}
												));
												var c=P()(n, r.seriesFilterEnable.SubSpec), d=P()(l, r.seriesFilterEnable.SubSpec);
												if(m()(n, l)||c.length===d.length&&null!==r.seriesFilterEnable.SubSpec)o.push(e.Id), r.specFilterPartialChecked[e.Id]=!1;
												else {
													var h=r.filterChecked.specCheckedList.indexOf(e.Id);
													h>-1&&o.splice(h, 1), 0!==l.length?r.specFilterPartialChecked[e.Id]=!0: r.specFilterPartialChecked[e.Id]=!1
												}
											}
										}
										))
									}
									)), this.filterChecked.specCheckedList=d()(o), this.onFilterChecked()
								}
							}
							, t.prototype.subSpecSelectAllJudge=function(e, label) {
								var t=this;
								if(void 0===label&&(label=""), -1!==this.filterChecked.specCheckedList.indexOf(e)&&(this.gaDataLayerPush( {
									event: "data_layer_event", event_category_DL:"filter", event_action_DL:"clicked", event_label_DL:label, event_value_DL:"0"
								}
								), this.gaHmtPush(["_trackEvent", "filter", "clicked", label])), this.hasSpecCategory) {
									var r=d()(this.filterChecked.subSpecCheckedList);
									this.seriesFilter.SpecCategory.forEach((function(o) {
										o.Item&&o.Item.length>0&&o.Item.forEach((function(o) {
											if(o.Id===e&&o.SubItem&&o.SubItem.length>0) {
												var n=!1, l=[];
												if(o.SubItem.forEach((function(e) {
													l.push(e.Id)
												}
												)), t.filterChecked.specCheckedList.forEach((function(e) {
													o.Id===e&&(n=!0)
												}
												)), t.specFilterPartialChecked[o.Id]=!1, n)if(t.collapsibleFilterList[o.Name+"_"+o.Id]=!0, null!==t.seriesFilterEnable.SubSpec) {
													var c=P()(l, t.seriesFilterEnable.SubSpec);
													if(0!==c.length) {
														var d=f()(c, r);
														r=y()(d, r)
													}
												}
												else {
													d=f()(l, r);
													r=y()(d, r)
												}
												else l.forEach((function(e) {
													var t=r.indexOf(e);
													t>-1&&r.splice(t, 1)
												}
												))
											}
										}
										))
									}
									)), this.filterChecked.subSpecCheckedList=d()(r), this.onFilterChecked()
								}
							}
							, t.prototype.detectSpecDisabledSubItem=function(e) {
								var t=this, r=!1, o=d()(this.filterChecked.subSpecCheckedList);
								this.seriesFilter.SpecCategory.forEach((function(n) {
									n.Item&&n.Item.length>0&&n.Item.forEach((function(n) {
										if(n.Id===e&&n.SubItem&&n.SubItem.length>0) {
											var l=[];
											n.SubItem.forEach((function(e) {
												l.push(e.Id)
											}
											));
											var c=P()(l, t.seriesFilterEnable.SubSpec);
											P()(l, t.filterChecked.subSpecCheckedList);
											if(c.length!==n.SubItem.length&&c.length!==l.length&&0!==c.length)r=!0;
											else if(-1===t.filterChecked.specCheckedList.indexOf(e))t.filterChecked.specCheckedList.push(e);
											else {
												var h=d()(t.filterChecked.specCheckedList);
												t.filterChecked.specCheckedList.forEach((function(e) {
													var r=t.filterChecked.specCheckedList.indexOf(e);
													r>-1&&h.splice(r, 1)
												}
												)), t.filterChecked.specCheckedList=d()(h)
											}
											r?(t.specFilterPartialChecked[n.Id]=!1, l.forEach((function(e) {
												var t=o.indexOf(e);
												t>-1&&o.splice(t, 1)
											}
											)), t.filterChecked.subSpecCheckedList=d()(o), t.onFilterChecked()):t.subSpecSelectAllJudge(e)
										}
									}
									))
								}
								))
							}
							, t.prototype.filterParams=function() {
								var e=this, t=this.$route.query, r=[], o=[], n=[], l=[], c=[];
								0!==Object.keys(this.seriesFilterGetter).length?(this.seriesFilterGetter.Category.CategoryList.length>0?1: 0)+(this.seriesFilterGetter.Series.SeriesList.length>0?1:0)+this.seriesFilterGetter.SpecCategory.length>5?(this.isShowExpandAll=!0, this.isShowCollapseAll=!1, this.isShowToggleButton=!0):(this.isShowExpandAll=!1, this.isShowCollapseAll=!1, this.isShowToggleButton=!1):(this.isShowExpandAll=!1, this.isShowCollapseAll=!1, this.isShowToggleButton=!1);
								if(void 0!==this.seriesFilter.Category||void 0!==this.seriesFilter.Series||void 0!==this.seriesFilter.SpecCategory) {
									if(void 0!==t.Category&&""!==t.Category&&(r=this.seriesFilter.Category.CategoryList.filter((function(r) {
										return-1!==e.nameMapping("category", t.Category).indexOf(r.ID)
									}
									)).map((function(e) {
										return {
											ID: e.ID, Name:e.Name, type:"category"
										}
									}
									))), void 0!==t.Series&&""!==t.Series)this.seriesFilter.Series.SeriesList.filter((function(r) {
										return-1!==e.nameMapping("series", t.Series).indexOf(r.SeriesID)
									}
									)).forEach((function(r) {
										if(null!==r.Item&&void 0!==r.Item&&0!==r.Item.length&&void 0!==t.SubSeries&&""!==t.SubSeries) {
											var n=[];
											for(var l in r.Item)n.push(r.Item[l].ID);
											var c=P()(n, e.seriesFilterEnable.SubSeries).length, d=P()(n, e.nameMapping("subSeries", t.SubSeries).map((function(e) {
												return+e
											}
											))).length;
											c!==d&&n.length!==d&&o.push( {
												ID: r.SeriesID, Name:r.Name, type:"series"
											}
											)
										}
										else o.push( {
											ID: r.SeriesID, Name:r.Name, type:"series"
										}
										)
									}
									));
									void 0!==t.SubSeries&&""!==t.SubSeries&&this.seriesFilter.Series.SeriesList.forEach((function(r) {
										if(null!==r.Item&&void 0!==r.Item&&0!==r.Item.length) {
											var o=r.Item.filter((function(r) {
												return-1!==e.nameMapping("subSeries", t.SubSeries).indexOf(r.ID)
											}
											)).map((function(e) {
												return {
													ID: e.ID, Name:e.Name, type:"subSeries"
												}
											}
											));
											for(var l in o)n.push( {
												ID: o[l].ID, Name:o[l].Name, type:o[l].type
											}
											);
											var c=void 0!==t.Series&&-1!==e.nameMapping("series", t.Series).indexOf(r.SeriesID);
											o.length>0&&o.length!==r.Item.length&&!c&&(e.seriesFilterPartialChecked[r.SeriesID]=!0)
										}
									}
									)), void 0!==t.Spec&&""!==t.Spec&&this.seriesFilter.SpecCategory.forEach((function(r) {
										if(null!==r.Item&&void 0!==r.Item&&0!==r.Item.length) {
											var o=r.Item.filter((function(e) {
												return-1!==t.Spec.split(",").indexOf(e.Id.toString())
											}
											)), n=o.map((function(e) {
												return {
													ID: e.Id, Name:e.Name, type:"spec"
												}
											}
											));
											l=0!==n.length?l.concat(n):l, o.forEach((function(r) {
												if(null!==r.SubItem&&void 0!==r.SubItem&&0!==r.SubItem.length&&void 0!==t.SubSpec&&""!==t.SubSpec) {
													var o=[];
													for(var n in r.SubItem)o.push(r.SubItem[n].Id);
													var c=P()(o, e.seriesFilterEnable.SubSpec).length, d=P()(o, t.SubSpec.split(",").map((function(e) {
														return+e
													}
													))).length;
													c!==d&&o.length!==d||l.splice(l.indexOf(r.Id), 1)
												}
											}
											))
										}
									}
									)), void 0!==t.SubSpec&&""!==t.SubSpec&&this.seriesFilter.SpecCategory.forEach((function(r) {
										null!==r.Item&&void 0!==r.Item&&0!==r.Item.length&&r.Item.forEach((function(o) {
											if(null!==o.SubItem&&void 0!==o.SubItem&&0!==o.SubItem.length) {
												var n=o.SubItem.filter((function(e) {
													return-1!==t.SubSpec.split(",").indexOf(e.Id.toString())
												}
												)).map((function(e) {
													return {
														ID: e.Id, Name:e.Name, type:"subSpec"
													}
												}
												));
												for(var l in n)c.push( {
													ID: n[l].ID, Name:n[l].Name, type:n[l].type
												}
												);
												var d=void 0!==t.Spec&&-1!==t.Spec.indexOf(r.Id);
												n.length>0&&n.length!==o.SubItem.length&&!d&&(e.specFilterPartialChecked[o.Id]=!0)
											}
										}
										))
									}
									));
									var d= {
										category: r, series:o, subSeries:n, spec:l, subSpec:c
									}
									;
									this.getCheckedCount(d), this.setFilterTagsList(d)
								}
							}
							, t.prototype.onFilterChecked=function() {
								this.isMobile?(this.getCheckedCount(this.filterChecked), this.getEnableData()): this.updateFilterList()
							}
							, t.prototype.getSeriesSubCount=function(e) {
								var t=this, r=0;
								return this.seriesFilter.Series.SeriesList.forEach((function(o) {
									o.SeriesID===e&&o.Item&&o.Item.length>0&&o.Item.forEach((function(e) {
										t.filterChecked.subSeriesCheckedList.forEach((function(t) {
											t===e.ID&&r++
										}
										))
									}
									))
								}
								)), r
							}
							, t.prototype.getSpecSubCount=function(e) {
								var t=this, r=0;
								return this.seriesFilter.SpecCategory.forEach((function(o) {
									o.Id===e&&o.SubItem&&o.SubItem&&o.SubItem.forEach((function(e) {
										t.filterChecked.subSpecCheckedList.forEach((function(t) {
											t===e.Id&&r++
										}
										))
									}
									))
								}
								)), r
							}
							, t.prototype.expandAll=function() {
								for(var e in this.collapsibleFilterList)this.collapsibleFilterList[e]=!0;
								this.isShowExpandAll=!1, this.isShowCollapseAll=!0
							}
							, t.prototype.collapseAll=function() {
								for(var e in this.collapsibleFilterList)this.collapsibleFilterList[e]=!1;
								this.isShowExpandAll=!0, this.isShowCollapseAll=!1
							}
							, t.prototype.showMoreFilterItem=function(e) {
								this.hasMoreFilterList[e]=!1
							}
							, t.prototype.initSeriesFilter=function() {
								this.setFilterCheckByURLParam(), this.seriesFilter=d()(this.seriesFilterGetter), this.initialCollapsibleFilterList(), this.initialSeriesFilterPartialCheckedList(), this.initialSpecFilterPartialCheckedList(), this.filterParams()
							}
							, t.prototype.getCheckedCount=function(e) {
								var t=this.filterCheckedCounter(e);
								try {
									window.innerWidth<=731&&this.$emit("checked-count", t)
								}
								catch(e) {}
								0===t&&(this.resetFilterEnable(), this.clearFilterPartialChecked())
							}
							, R([Object(l.Getter)("filterTagsList")], t.prototype, "filterTagsList", void 0), R([Object(l.Getter)("seriesFilterGetter")], t.prototype, "seriesFilterGetter", void 0), R([Object(l.Getter)("seriesFilterEnableGetter")], t.prototype, "seriesFilterEnableGetter", void 0), R([Object(l.Action)("getSeriesFilter")], t.prototype, "getSeriesFilter", void 0), R([Object(l.Action)("getSeriesFilterEnable")], t.prototype, "getSeriesFilterEnableByAPI", void 0), R([Object(l.Action)("getSeriesFilterResult")], t.prototype, "getSeriesFilterResultByAPI", void 0), R([Object(l.Mutation)("setFilterTagsList")], t.prototype, "setFilterTagsList", void 0), R([Object(l.Prop)()], t.prototype, "isClearAll", void 0), R([Object(l.Prop)()], t.prototype, "isFilterApply", void 0), R([Object(l.Prop)()], t.prototype, "isFilterCancel", void 0), R([Object(l.Prop)()], t.prototype, "sort", void 0), R([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), R([Object(l.Watch)("$route")], t.prototype, "routeCategorychange", null), R([Object(l.Watch)("seriesFilterGetter", {								immediate: !0							}							)], t.prototype, "setSeriesFilter", null), R([Object(l.Watch)("seriesFilterEnableGetter")], t.prototype, "setSeriesFilterEnable", null), R([Object(l.Watch)("rwdWidth")], t.prototype, "getWidth", null), R([Object(l.Watch)("sort")], t.prototype, "getSort", null), R([Object(l.Watch)("filterTagsList")], t.prototype, "checkTagsList", null), R([Object(l.Watch)("isClearAll")], t.prototype, "isClearAllData", null), R([Object(l.Watch)("isFilterCancel")], t.prototype, "isFilterCancelData", null), R([Object(l.Watch)("isFilterApply")], t.prototype, "isFilterApplyData", null), R([L()(1e3)], t.prototype, "onFilterChecked", null), t=R([Object(l.Component)( {								components: {									FilterCheckBox: k.a								}							}							)], t)
						}
						(Object(l.mixins)(D.a)), W=r(879), F=r(8);
						var component=Object(F.a)(M, (function() {
							var e, t, r, o, n, l, c, d=this, h=d.$createElement, m=d._self._c||h;
							return d.seriesFilter&&d.seriesFilter.Category?m("div", {
								class:[d.$style.wrapper, (e= {}
								, e[d.$style.hasOrder]=d.hasOrder, e)]
							}
							, [d.hasCategory?m("div", {								class: d.$style.filterSection							}							, [m("div", {								class:[d.$style.title, (t= {}								, t[d.$style.toggleIcon]=d.seriesFilter.Category.CategoryList.length>0, t), (r= {}
								, r[d.$style.collapseIcon]=d.collapsibleFilterList[d.seriesFilter.Category.CategoryName], r)], attrs: {
									tabindex: "0"
								}
								, on: {
									click:function(e) {
										return d.collapsibleListToggle(d.seriesFilter.Category.CategoryName)
									}
								}
							}
							, [d._v("\n      "+d._s(d.seriesFilter.Category.CategoryName)+"\n    ")]), d._v(" "), d.seriesFilter.Category.CategoryList?m("div", {
								class:[d.$style.listContainer, (o= {}
								, o[d.$style.expand]=d.collapsibleFilterList[d.seriesFilter.Category.CategoryName], o[d.$style.showMoreBtn]=d.hasMoreFilterList[d.seriesFilter.Category.CategoryName], o)]
							}
							, [d._l(d.seriesFilter.Category.CategoryList, (function(e) {								return m("div", {									key: e.Name+"_"+e.ID								}								, [m("div", {									class: d.$style.listItem								}								, [m("FilterCheckBox", {									attrs: {										filterID: e.ID, enableList:d.seriesFilterEnable.Category									}									, on: {										input:function(t) {											return d.categorySelect(e.ID, d.seriesFilter.Category.CategoryName+"/"+e.Name)										}									}									, model: {										value:d.filterChecked.categoryCheckedList, callback:function(e) {											d.$set(d.filterChecked, "categoryCheckedList", e)										}										, expression:"filterChecked.categoryCheckedList"									}								}								, [d._v("\n            "+d._s(e.Name)+"\n          ")])], 1)])
							}
							)), d._v(" "), m("div", {
								class:d.$style.showMoreToggleBtn, attrs: {
									tabindex: "0"
								}
								, on: {
									click:function(e) {
										return d.showMoreFilterItem(d.seriesFilter.Category.CategoryName)
									}
								}
							}
							, [d._v("\n        "+d._s(d.translationMore)+"\n      ")])], 2):d._e()]):d._e(), d._v(" "), d.hasSeries?m("div", {
								class: d.$style.filterSection
							}
							, [m("div", {								class:[d.$style.title, (n= {}								, n[d.$style.toggleIcon]=d.seriesFilter.Series.SeriesList.length>0, n), (l= {}
								, l[d.$style.collapseIcon]=d.collapsibleFilterList[d.seriesFilter.Series.SeriesName], l)], attrs: {
									tabindex: "0"
								}
								, on: {
									click:function(e) {
										return d.collapsibleListToggle(d.seriesFilter.Series.SeriesName)
									}
								}
							}
							, [d._v("\n      "+d._s(d.seriesFilter.Series.SeriesName)+"\n    ")]), d._v(" "), d.seriesFilter.Series.SeriesList?m("div", {
								class:[d.$style.listContainer, (c= {}
								, c[d.$style.expand]=d.collapsibleFilterList[d.seriesFilter.Series.SeriesName], c[d.$style.showMoreBtn]=d.hasMoreFilterList[d.seriesFilter.Series.SeriesName], c)]
							}
							, [d._l(d.seriesFilter.Series.SeriesList, (function(e) {								var t, r, o;								return m("div", {									key: e.Name+"_"+e.SeriesID								}								, [m("div", {									class: d.$style.listItem								}								, [d.seriesFilterPartialChecked[e.SeriesID]?m("div", {
									class:d.$style.partialCheckedFakeMask, attrs: {
										tabindex: "0"
									}
									, on: {
										click:function(t) {
											return d.detectSeriesDisabledSubItem(e.SeriesID)
										}
									}
								}
								):d._e(), d._v(" "), m("FilterCheckBox", {
									attrs: {
										filterID: e.SeriesID, enableList:d.seriesFilterEnable.Series, isPartialChecked:!!d.seriesFilterPartialChecked[e.SeriesID]
									}
									, on: {
										input:function(t) {
											return d.subSeriesSelectAllJudge(e.SeriesID, d.seriesFilter.Series.SeriesName+"/"+e.Name)
										}
									}
									, model: {
										value:d.filterChecked.seriesCheckedList, callback:function(e) {
											d.$set(d.filterChecked, "seriesCheckedList", e)
										}
										, expression:"filterChecked.seriesCheckedList"
									}
								}
								, [d._v("\n            "+d._s(e.Name)+"\n            "), d.collapsibleFilterList[e.Name+"_"+e.SeriesID]||0===d.getSeriesSubCount(e.SeriesID)||!d.seriesFilterPartialChecked[e.SeriesID]?d._e():m("span", [d._v("\n              ("+d._s(d.getSeriesSubCount(e.SeriesID))+")\n            ")])]), d._v(" "), m("div", {
									class:[(t= {}
									, t[d.$style.toggleBtn]=e.Item&&e.Item.length>0, t), (r= {}
									, r[d.$style.collapseBtn]=d.collapsibleFilterList[e.Name+"_"+e.SeriesID], r)], attrs: {
										tabindex: "0"
									}
									, on: {
										click:function(t) {
											return t.stopPropagation(), d.collapsibleListToggle(e.Name+"_"+e.SeriesID)
										}
									}
								}
								)], 1), d._v(" "), e.Item&&e.Item.length>0?m("div", {
									class:[d.$style.subListContainer, (o= {}
									, o[d.$style.expand]=d.collapsibleFilterList[e.Name+"_"+e.SeriesID], o)]
								}
								, d._l(e.Item, (function(t) {
									return m("div", {
										key: t.Name+"_"+t.ID
									}
									, [m("div", {										class: d.$style.listItem									}									, [m("FilterCheckBox", {										attrs: {											filterID: t.ID, enableList:d.seriesFilterEnable.SubSeries										}										, on: {											input:function(r) {												return d.seriesSelectJudge(t.ID, e.SeriesID, d.seriesFilter.Series.SeriesName+"/"+t.Name)											}										}										, model: {											value:d.filterChecked.subSeriesCheckedList, callback:function(e) {												d.$set(d.filterChecked, "subSeriesCheckedList", e)											}											, expression:"filterChecked.subSeriesCheckedList"										}									}									, [d._v("\n                "+d._s(t.Name)+"\n              ")])], 1)])
								}
								)), 0):d._e()])
							}
							)), d._v(" "), m("div", {
								class:d.$style.showMoreToggleBtn, attrs: {
									tabindex: "0"
								}
								, on: {
									click:function(e) {
										return d.showMoreFilterItem(d.seriesFilter.Series.SeriesName)
									}
								}
							}
							, [d._v("\n        "+d._s(d.translationMore)+"\n      ")])], 2):d._e()]):d._e(), d._v(" "), d.hasSpecCategory?d._l(d.seriesFilter.SpecCategory, (function(e, t) {
								var r, o, n, l;
								return e&&e.Item.length>0?m("div", {
									key:e.Name+"_"+e.Id, class:[d.$style.filterSection, (r= {}
									, r[d.$style.orderItem]=0===t, r)]
								}
								, [m("div", {									class:[d.$style.title, (o= {}									, o[d.$style.toggleIcon]=e.Item.length>0, o), (n= {}
									, n[d.$style.collapseIcon]=d.collapsibleFilterList[e.Name+"_"+e.Id], n)], attrs: {
										tabindex: "0"
									}
									, on: {
										click:function(t) {
											return d.collapsibleListToggle(e.Name+"_"+e.Id)
										}
									}
								}
								, [d._v("\n        "+d._s(e.Name)+"\n      ")]), d._v(" "), m("div", {
									class:[d.$style.listContainer, (l= {}
									, l[d.$style.expand]=d.collapsibleFilterList[e.Name+"_"+e.Id], l[d.$style.showMoreBtn]=d.hasMoreFilterList[e.Name], l)]
								}
								, [d._l(e.Item, (function(t) {									var r, o, n;									return m("div", {										key: t.Name+"_"+t.Id									}									, [m("div", {										class: d.$style.listItem									}									, [d.specFilterPartialChecked[t.Id]?m("div", {
										class:d.$style.partialCheckedFakeMask, attrs: {
											tabindex: "0"
										}
										, on: {
											click:function(e) {
												return d.detectSpecDisabledSubItem(t.Id)
											}
										}
									}
									):d._e(), d._v(" "), m("FilterCheckBox", {
										attrs: {
											filterID: t.Id, enableList:d.seriesFilterEnable.Spec, isPartialChecked:!!d.specFilterPartialChecked[t.Id]
										}
										, on: {
											input:function(r) {
												return d.subSpecSelectAllJudge(t.Id, e.Name+"/"+t.Name)
											}
										}
										, model: {
											value:d.filterChecked.specCheckedList, callback:function(e) {
												d.$set(d.filterChecked, "specCheckedList", e)
											}
											, expression:"filterChecked.specCheckedList"
										}
									}
									, [d._v("\n              "+d._s(t.Name)+"\n              "), d.collapsibleFilterList[t.Name+"_"+t.Id]||0===d.getSpecSubCount(t.Id)||!d.specFilterPartialChecked[t.Id]?d._e():m("span", [d._v("\n                ("+d._s(d.getSpecSubCount(t.Id))+")\n              ")])]), d._v(" "), m("div", {
										class:[(r= {}
										, r[d.$style.toggleBtn]=t.SubItem&&t.SubItem.length>0, r), (o= {}
										, o[d.$style.collapseBtn]=d.collapsibleFilterList[t.Name+"_"+t.Id], o)], attrs: {
											tabindex: "0"
										}
										, on: {
											click:function(e) {
												return e.stopPropagation(), d.collapsibleListToggle(t.Name+"_"+t.Id)
											}
										}
									}
									)], 1), d._v(" "), t.SubItem&&t.SubItem.length>0?m("div", {
										class:[d.$style.subListContainer, (n= {}
										, n[d.$style.expand]=d.collapsibleFilterList[t.Name+"_"+t.Id], n)]
									}
									, d._l(t.SubItem, (function(r) {
										return m("div", {
											key: r.Name+"_"+r.Id
										}
										, [m("div", {											class: d.$style.listItem										}										, [m("FilterCheckBox", {											attrs: {												filterID: r.Id, enableList:d.seriesFilterEnable.SubSpec											}											, on: {												input:function(o) {													return d.specSelectJudge(r.Id, t.Id, e.Name+"/"+r.Name)												}											}											, model: {												value:d.filterChecked.subSpecCheckedList, callback:function(e) {													d.$set(d.filterChecked, "subSpecCheckedList", e)												}												, expression:"filterChecked.subSpecCheckedList"											}										}										, [d._v("\n                  "+d._s(r.Name)+"\n                ")])], 1)])
									}
									)), 0):d._e()])
								}
								)), d._v(" "), m("div", {
									class:d.$style.showMoreToggleBtn, attrs: {
										tabindex: "0"
									}
									, on: {
										click:function(t) {
											return d.showMoreFilterItem(e.Name)
										}
									}
								}
								, [d._v("\n          "+d._s(d.translationMore)+"\n        ")])], 2)]):d._e()
							}
							)):d._e(), d._v(" "), d.isShowToggleButton?m("div", {
								class: d.$style.filterToggleButton
							}
							, [d.isShowCollapseAll?m("span", {								attrs: {									tabindex: "0"								}								, on: {									click:function(e) {										return d.collapseAll()									}								}							}							, [d._v(d._s(d.translationCollapse))]):d._e(), d._v(" "), d.isShowExpandAll?m("span", {
								attrs: {
									tabindex: "0"
								}
								, on: {
									click:function(e) {
										return d.expandAll()
									}
								}
							}
							, [d._v(d._s(d.translationExpand))]):d._e()]):d._e()], 2):d._e()
						}
						), [], !1, (function(e) {
							this.$style=W.default.locals||W.default
						}
						), null, null);
						t.a=component.exports
					}
					, 795:function(e, t, r) {
						"use strict";
						r(60), r(112), r(27), r(13), r(24), r(16), r(17), r(25), r(45);
						var o, n=r(4), l=r(0), c=(r(782), r(111)), d=r.n(c), h=r(592), m=r(593), _=r(584), f=r(14), C=r(110), y=r(7), v=r.n(y), I=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), S=function() {
							return(S=Object.assign||function(e) {
								for(var s, i=1, t=arguments.length;
								i<t;
								i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s, p)&&(e[p]=s[p]);
								return e
							}
							).apply(this, arguments)
						}
						, P=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, w=r(783);
						l.Vue.use(w);
						var L=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.gaImpressions=[], t.featureAccessoriesList=[], t.windowWidth=0, t.websiteCode="", t.swiperFeatureOption= {
									slidesPerView:"auto", spaceBetween:12, slidesPerGroup:3, direction:"horizontal", navigation: {
										nextEl: ".swiper-feature-button-next", prevEl:".swiper-feature-button-prev"
									}
									, breakpoints: {
										1023: {
											slidesPerGroup: 1
										}
									}
								}
								, t
							}
							return I(t, e), t.prototype.routeChange=function() {
								this.websiteCode=Object(C.b)(this.$route.params.region), this.getStoreFeatureAccessories( {
									params: {
										SystemCode: "ASUS", WebsiteCode:this.websiteCode, TabKey:"Store"!==this.$route.name?this.$route.params.ProductLevel1Code:""
									}
								}
								)
							}
							, t.prototype.setStoreFeatureAccessories=function() {
								if(this.featureAccessoriesList=this.storeFeatureAccessoriesGetter, this.websiteCode&&this.featureAccessoriesList&&this.featureAccessoriesList.ProductList&&this.featureAccessoriesList.ProductList.length) {
									for(var e=[], t=[], i=0;
									i<this.featureAccessoriesList.ProductList.length;
									i++)"R"===this.featureAccessoriesList.ProductList[i].ProductID.toString().split("")[0]?1===this.featureAccessoriesList.ProductList[i].ModelBaseFlag?e.push(this.featureAccessoriesList.ProductList[i].RealProductID): t.push(this.featureAccessoriesList.ProductList[i].PartNo):e.push(this.featureAccessoriesList.ProductList[i].ProductID);
									if(this.websiteCode) {
										var r=void 0;
										r=void 0===v.a.get("groupid_asus_"+this.websiteCode)?"":v.a.get("groupid_asus_"+this.websiteCode), this.dispatchPDPriceList( {
											params: {
												SystemCode: "asus", WebsiteCode:this.websiteCode, ProductId:e.join(), ROGProduct:t.join(), group_id:r
											}
										}
										)
									}
								}
							}
							, t.prototype.setPriceIdList=function() {
								var e=this, t=this.PDPriceListGetter;
								if(t&&t.ProductList)for(var r=function(i) {
									if(t.ProductList) {
										var r=t.ProductList.filter((function(t) {
											return t.ProductID===e.featureAccessoriesList.ProductList[i].ProductID||t.ProductID===e.featureAccessoriesList.ProductList[i].RealProductID||t.ProductID===e.featureAccessoriesList.ProductList[i].PartNo
										}
										));
										r.length>0&&o.$set(o.featureAccessoriesList.ProductList, i, S(S( {}
										, o.featureAccessoriesList.ProductList[i]), {
											Price:r[0]&&""!==r[0].Price?r[0].Price:"", Discount:r[0]&&""!==r[0].Discount?r[0].Discount:"", RegularPrice:!r[0]||""!==r[0].Regular_Price&&""!==r[0].Discount?r[0].Regular_Price:"", Buy:S(S( {}
											, o.featureAccessoriesList.ProductList[i].Buy), {
												Link: r[0]&&""===r[0].Price?"":r[0].BuyLink, Text:r[0]&&""===r[0].Price?"":r[0].BuyText
											}
											)
										}
										))
									}
								}
								, o=this, i=0;
								i<this.featureAccessoriesList.ProductList.length;
								i++)r(i)
							}
							, t.prototype.mounted=function() {
								try {
									window.addEventListener("resize", d()(this.setWindowWidth, 100, {
										trailing: !0
									}
									))
								}
								catch(e) {
									console.error(e)
								}
								this.setWindowWidth(), window.addEventListener("resize", this.setWindowWidth);
								var e=this.storeFeatureAccessoriesGetter.ProductList;
								for(var t in e)this.gaImpressions.push( {
									name: e[t].Name, id:e[t].ProductID, dimension10:e[t].ProductID, price:e[t].Price, brand:0===e[t].GetURLFlag?"ASUS":"ROG", category:e[t].Level1Path+"-"+e[t].Level2Path+"/"+e[t].CategoryName+"/"+e[t].Level3Path+"/"+(e[t].SubSeriesName?e[t].SubSeriesName:"undefined"), list:"store_accessory_list", position:t+1
								}
								);
								this.gaDataLayerPush( {
									event:"productImpression", ecommerce: {
										currencyCode: this.loginInfoGetter.CurrencyCode, impressions:this.gaImpressions
									}
								}
								)
							}
							, t.prototype.setWindowWidth=function() {
								try {
									this.windowWidth=window.innerWidth
								}
								catch(e) {}
							}
							, t.prototype.beforeDestroy=function() {
								window.removeEventListener("resize", d()(this.setWindowWidth, 100, {
									trailing: !0
								}
								))
							}
							, P([Object(l.Getter)("storeFeatureAccessoriesGetter")], t.prototype, "storeFeatureAccessoriesGetter", void 0), P([Object(l.Getter)("loginInfoGetter")], t.prototype, "loginInfoGetter", void 0), P([Object(l.Getter)("PDPriceListGetter")], t.prototype, "PDPriceListGetter", void 0), P([Object(l.Action)("getPDPriceList")], t.prototype, "dispatchPDPriceList", void 0), P([Object(l.Action)("getStoreFeatureAccessories")], t.prototype, "getStoreFeatureAccessories", void 0), P([Object(l.Prop)( {								default: ""							}							)], t.prototype, "paddingTop", void 0), P([Object(l.Prop)()], t.prototype, "defLevelId", void 0), P([Object(l.Watch)("$route", {								immediate: !0							}							)], t.prototype, "routeChange", null), P([Object(l.Watch)("storeFeatureAccessoriesGetter")], t.prototype, "setStoreFeatureAccessories", null), P([Object(l.Watch)("PDPriceListGetter")], t.prototype, "setPriceIdList", null), t=P([Object(l.Component)( {								components: {									ProductCardNormal: m.a, GhostButton:_.a								}							}							)], t)
						}
						(Object(l.mixins)(h.a, f.a)), k=r(904), D=r(8);
						var component=Object(D.a)(L, (function() {
							var e, t=this, r=t.$createElement, o=t._self._c||r;
							return t.storeFeatureAccessoriesGetter&&Object.keys(t.storeFeatureAccessoriesGetter).length>0&&t.storeFeatureAccessoriesGetter.ProductList&&Object.keys(t.storeFeatureAccessoriesGetter.ProductList).length>0?o("div", {
								class:t.$style.featuredAccessoriesWrapper, style: {
									paddingTop: t.paddingTop+"px"
								}
								, attrs: {
									id: "featuredAccessories"
								}
							}
							, [o("div", {								class: t.$style.sectionHeadingWrapper							}							, [o("h2", {								class: t.$style.sectionHeading							}							, [t._v(t._s(t.storeFeatureAccessoriesGetter.FeaturedAccessoriesTitle))])]), t._v(" "), o("div", {
								class: t.$style.sectionWrapper
							}
							, [o("div", {								directives:[ {									name: "swiper", rawName:"v-swiper:featureSwiper", value:t.swiperFeatureOption, expression:"swiperFeatureOption", arg:"featureSwiper"								}								], class:t.$style.sliderSection
							}
							, [o("div", {								ref: "swiper", class:["swiper-wrapper", t.$style.swiperWrapper]
							}
							, [t.storeFeatureAccessoriesGetter.FeaturedAccessories&&Object.keys(t.storeFeatureAccessoriesGetter.FeaturedAccessories).length>0?o("div", {								class:["swiper-slide", t.$style.swiperSlide, (e= {}								, e[t.$style.swiperMainSlide]=!0, e)], style: {
									backgroundColor: t.storeFeatureAccessoriesGetter.FeaturedAccessories.BackgroundColor, order:0
								}
							}
							, [o("div", {								class: t.$style.slideInfo							}							, [o("div", {								class: t.$style.slideTitle							}							, [t._v(t._s(t.storeFeatureAccessoriesGetter.FeaturedAccessories.Title))]), t._v(" "), o("div", {
								class: t.$style.slideDescription
							}
							, [t._v(t._s(t.storeFeatureAccessoriesGetter.FeaturedAccessories.FeatureDesc))]), t._v(" "), t.storeFeatureAccessoriesGetter.FeaturedAccessories.LinkText&&t.storeFeatureAccessoriesGetter.FeaturedAccessories.Link?o("GhostButton", {
								class:t.$style.ghostButton, attrs: {
									theme: "Blue", color:"#006ce1", href:t.storeFeatureAccessoriesGetter.FeaturedAccessories.Link, needCallEvent:!0, noHover:!0
								}
								, on: {
									click:function(e) {
										return t.sendGA(t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["1x"], t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["1x"], 0, t.storeFeatureAccessoriesGetter.FeaturedAccessories.LinkText, t.storeFeatureAccessoriesGetter.FeaturedAccessories.Link, "LearnMore")
									}
								}
							}
							, [t._v("\n               "+t._s(t.storeFeatureAccessoriesGetter.FeaturedAccessories.LinkText)+"\n             ")]):t._e()], 1), t._v(" "), o("div", {
								class: t.$style.slideImageWrapper
							}
							, [o("picture", [t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["1x"]?o("source", {
								attrs: {
									srcset: t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["1x"]+" 1x, "+t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["2x"]+" 2x"
								}
							}
							):t._e(), t._v(" "), t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["1x"]?o("source", {
								attrs: {
									type: "image/webp", srcset:t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["1x"]+"?webp 1x, "+t.storeFeatureAccessoriesGetter.FeaturedAccessories.ImageURL["2x"]+"?webp 2x"
								}
							}
							):t._e(), t._v(" "), o("img", {
								attrs: {
									loading: "lazy", alt:t.storeFeatureAccessoriesGetter.FeaturedAccessories.Title
								}
							}
							)])])]):t._e(), t._v(" "), t._l(t.featureAccessoriesList.ProductList, (function(e, r) {
								return o("div", {
									key: r, class:["swiper-slide", t.$style.swiperSlide]
								}
								, [o("ProductCardNormal", {									attrs: {										rwdWidth: t.windowWidth, "card-index":r, isWhiteCard:!0, isColorSelector:!1, productCardContent:t.productCardContent[r], productCardItem:e, defLevelId:t.defLevelId, gaActionField:"store_accessory_list", pageName:"accessory"
									}
								}
								)], 1)
							}
							))], 2)]), t._v(" "), o("div", {
								class:["swiper-button-prev", "swiper-feature-button-prev", t.$style.swiperPrevButton], attrs: {
									slot: "button-prev"
								}
								, slot:"button-prev"
							}
							, [o("svg", {								class:t.$style.icon, attrs: {									xmlns: "http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 16 16", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"								}							}							, [o("path", {								attrs: {									stroke: "#B3B3B3", "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-miterlimit":"10", d:"M11 13.5L5.3 8 11 2.5"								}							}							)])]), t._v(" "), o("div", {
								class:["swiper-button-next", "swiper-feature-button-next", t.$style.swiperNextButton], attrs: {
									slot: "button-next"
								}
								, slot:"button-next"
							}
							, [o("svg", {								class:t.$style.icon, attrs: {									xmlns: "http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 16 16", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"								}							}							, [o("path", {								attrs: {									stroke: "#B3B3B3", "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-miterlimit":"10", d:"M5 2.5L10.7 8 5 13.5"								}							}							)])])])]):t._e()
						}
						), [], !1, (function(e) {
							this.$style=k.default.locals||k.default
						}
						), null, null);
						t.a=component.exports
					}
					, 797:function(e, t, r) {
						"use strict";
						r(13), r(24), r(65);
						var o, n=r(4), l=r(0), c=r(583), d=r.n(c), h=(o=function(e, b) {
							return(o=Object.setPrototypeOf|| {
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
							o(e, b), e.prototype=null===b?Object.create(b):(t.prototype=b.prototype, new t)
						}
						), m=function(e, t, r, desc) {
							var o, l=arguments.length, c=l<3?t: null===desc?desc=Object.getOwnPropertyDescriptor(t, r):desc;
							if("object"===("undefined"==typeof Reflect?"undefined": Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e, t, r, desc);
							else for(var i=e.length-1;
							i>=0;
							i--)(o=e[i])&&(c=(l<3?o(c): l>3?o(t, r, c):o(t, r))||c);
							return l>3&&c&&Object.defineProperty(t, r, c), c
						}
						, _=function(e) {
							function t() {
								var t=null!==e&&e.apply(this, arguments)||this;
								return t.currentSlide=1, t.pageSize=1, t.rwdState="", t.oneSlideDisplacement=0, t.controlButtonWidth=20, t.timeoutId=null, t.mouseovered=!1, t.enableControllButton=!0, t.isRTL=!1, t.inlineStyleObject= {
									flexGrow: "0", flexShrink:"0", maxWidth:"none"
								}
								, t.isTranslateX=!0, t
							}
							return h(t, e), t.prototype.created=function() {
								this.isRTL=this.$store.getters.RTLGetter
							}
							, Object.defineProperty(t.prototype, "styleTranslate", {
								get:function() {
									return this.isTranslateX? {
										transition: "transform 200ms ease-out", transform:"translateX("+this.innerSlidesDisplacement+"px)"
									}
									: {
										transition: "transform 0ms ease-out", transform:"translateX("+this.innerSlidesDisplacement+"px)"
									}
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "visibleWidth", {
								get:function() {
									return this.oneSlideDisplacement
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "getControlButtonWidth", {
								get:function() {
									return this.enableControllButton?this.controlButtonWidth: 10
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "getMaxContainerWidth", {
								get:function() {
									return this.maxContainerWidth>0?this.maxContainerWidth: this.rwdWidth
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "maxVisibleWidth", {
								get:function() {
									return this.getMaxContainerWidth-2*this.getControlButtonWidth
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "innerSlidesDisplacement", {
								get:function() {
									var e=this.visibleWidth*(this.currentSlide-1), t=this.visibleWidth*this.totalSlide;
									return this.currentSlide>=this.totalSlide&&this.AddMainImageArray(this.currentSlide), e<0?e=0: e>t&&this.currentSlide>=this.totalSlide&&1!==this.totalSlide&&(e=t), this.isRTL?e:-e
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "enablePrevButton", {
								get:function() {
									return this.enableControllButton&&(this.currentSlide>1||this.loop)&&this.totalSlide>1
								}
								, enumerable:!0, configurable:!0
							}
							), Object.defineProperty(t.prototype, "enableNextButton", {
								get:function() {
									return this.enableControllButton&&(this.currentSlide!==this.totalSlide||this.loop)&&this.totalSlide>1
								}
								, enumerable:!0, configurable:!0
							}
							), t.prototype.reloadSource=function() {
								this.rwdWidth>=this.rwdBreakPointMedium?(this.rwdState="desktop", this.enableControllButton=1===this.showControllButtonList[0]): this.rwdWidth>this.rwdBreakPointSmall?(this.rwdState="tablet", this.enableControllButton=1===this.showControllButtonList[1]):(this.rwdState="mobile", this.enableControllButton=1===this.showControllButtonList[2])
							}
							, t.prototype.hover2Seounds=function() {
								var e=this;
								this.mouseovered=!0, this.timeoutId||(this.isTranslateX=!0, this.$forceUpdate(), this.next(null), this.timeoutId=window.setInterval((function() {
									e.next(null)
								}
								), 2e3))
							}
							, t.prototype.hover2SeoundsOut=function() {
								this.timeoutId&&(this.isTranslateX=!1, window.clearInterval(this.timeoutId), this.timeoutId=null, this.$forceUpdate(), this.currentSlide=1)
							}
							, t.prototype.slideTo=function(e) {
								this.currentSlide=e+1
							}
							, t.prototype.next=function(e) {
								this.mouseovered=!0, this.currentSlide++, this.currentSlide>this.totalSlide&&(!0===this.loop?this.currentSlide=1: this.currentSlide=this.totalSlide)
							}
							, t.prototype.prev=function(e) {
								this.mouseovered=!0, this.currentSlide--, this.currentSlide<=0&&(!0===this.loop?this.currentSlide=this.totalSlide: this.currentSlide=1)
							}
							, t.prototype.updateSlideWidth=function() {
								var e=this.$refs.innerSlides;
								if(e&&e.hasChildNodes()) {
									var t=e.childNodes[0].offsetWidth;
									this.oneSlideDisplacement=t
								}
								this.$set(this.inlineStyleObject, "maxWidth", this.maxVisibleWidth+"px")
							}
							, t.prototype.AddMainImageArray=function(e) {
								this.$emit("AddMainImageArray", e)
							}
							, t.prototype.updated=function() {
								this.updateSlideWidth()
							}
							, t.prototype.mounted=function() {
								this.updateSlideWidth()
							}
							, m([Object(l.Prop)( {								default:function() {									return[1, 1, 1]
								}
							}
							)], t.prototype, "showControllButtonList", void 0), m([Object(l.Prop)( {								default: !1							}							)], t.prototype, "loop", void 0), m([Object(l.Prop)( {								default: parseInt(d.a.breakPointSmall, 10)							}							)], t.prototype, "rwdBreakPointSmall", void 0), m([Object(l.Prop)( {								default: parseInt(d.a.breakPointMedium, 10)							}							)], t.prototype, "rwdBreakPointMedium", void 0), m([Object(l.Prop)( {								default: 0							}							)], t.prototype, "maxContainerWidth", void 0), m([Object(l.Prop)()], t.prototype, "rwdWidth", void 0), m([Object(l.Prop)( {								default: 0							}							)], t.prototype, "totalSlide", void 0), m([Object(l.Watch)("rwdWidth", {								immediate: !0							}							)], t.prototype, "reloadSource", null), t=m([l.Component], t)
						}
						(l.Vue), f=r(839), C=r(8);
						var component=Object(C.a)(_, (function() {
							var e, t=this, r=t.$createElement, o=t._self._c||r;
							return o("div", {
								class:t.$style.carouselContainer, style: {
									paddingRight: t.getControlButtonWidth.toString()+"px", paddingLeft:t.getControlButtonWidth.toString()+"px"
								}
							}
							, [o("v-touch", {								attrs: {									enabled: {										swipeleft: !0, swiperight:!0									}								}								, on: {									swipeleft: t.next, swiperight:t.prev								}							}							, [o("div", {								ref:"visibleDiv", class:[t.$style.visibleDiv, (e= {}								, e[t.$style.notmouseover]=!t.mouseovered, e)], style: {
									width: t.visibleWidth+"px", maxWidth:t.maxVisibleWidth+"px"
								}
								, on: {
									mouseover:function(e) {
										return t.hover2Seounds()
									}
									, mouseleave:function(e) {
										return t.hover2SeoundsOut()
									}
								}
							}
							, [o("div", {								ref: "innerSlides", class:t.$style.innerSlides, style:t.styleTranslate							}							, [t._t("default", null, {								inlineStyleObject: t.inlineStyleObject							}							)], 2)])]), t._v(" "), t.enablePrevButton&&"desktop"!==t.rwdState?o("div", {
								class:t.$style.prev, on: {
									click:function(e) {
										return e.stopPropagation(), e.preventDefault(), t.prev(e)
									}
								}
							}
							, [t._t("prevButton", [o("svg", {								style:[!1===t.isRTL? {}								: {									transform: "rotateY(180deg)"								}								], attrs: {
									xmlns: "http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 40 54", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
								}
							}
							, [o("rect", {								attrs: {									width: "39", height:"53", x:".5", y:".5", fill:"#fff", "fill-opacity":".4", stroke:"#181818", rx:"3.5"								}							}							), o("path", {								attrs: {									stroke: "#000", "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-miterlimit":"10", "stroke-width":"1.5", d:"M24.5 36.975L14.525 27l9.975-9.975"								}							}							)])])], 2):t._e(), t._v(" "), t.enableNextButton&&"desktop"!==t.rwdState?o("div", {
								class:t.$style.next, on: {
									click:function(e) {
										return e.stopPropagation(), e.preventDefault(), t.next(e)
									}
								}
							}
							, [t._t("nextButton", [o("svg", {								style:[!1===t.isRTL? {}								: {									transform: "rotateY(180deg)"								}								], attrs: {
									xmlns: "http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 40 54", "svg-inline":"", role:"presentation", focusable:"false", tabindex:"-1"
								}
							}
							, [o("rect", {								attrs: {									width: "39", height:"53", x:".5", y:".5", fill:"#fff", "fill-opacity":".4", stroke:"#181818", rx:"3.5"								}							}							), o("path", {								attrs: {									stroke: "#181818", "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-miterlimit":"10", "stroke-width":"1.5", d:"M15.5 17.025L25.475 27 15.5 36.975"								}							}							)])])], 2):t._e()], 1)
						}
						), [], !1, (function(e) {
							this.$style=f.default.locals||f.default
						}
						), null, null);
						t.a=component.exports
					}
					, 802:function(e, t, r) {
						"use strict";
						var o=r(611), n=r.n(o);
						t.default=n.a
					}
					, 805:function(e, t, r) {
						"use strict";
						var o=r(614), n=r.n(o);
						t.default=n.a
					}
					, 806:function(e, t, r) {
						"use strict";
						var o=r(615), n=r.n(o);
						t.default=n.a
					}
					, 807:function(e, t, r) {
						"use strict";
						var o=r(616), n=r.n(o);
						t.default=n.a
					}
					, 810:function(e, t, r) {
						"use strict";
						var o=r(619), n=r.n(o);
						t.default=n.a
					}
					, 836:function(e, t, r) {
						"use strict";
						var o=r(626), n=r.n(o);
						t.default=n.a
					}
					, 838:function(e, t, r) {
						"use strict";
						var o=r(628), n=r.n(o);
						t.default=n.a
					}
					, 839:function(e, t, r) {
						"use strict";
						var o=r(629), n=r.n(o);
						t.default=n.a
					}
					, 840:function(e, t, r) {
						"use strict";
						var o=r(630), n=r.n(o);
						t.default=n.a
					}
					, 843:function(e, t, r) {
						"use strict";
						var o=r(636), n=r.n(o);
						t.default=n.a
					}
					, 849:function(e, t, r) {
						"use strict";
						var o=r(642), n=r.n(o);
						t.default=n.a
					}
					, 850:function(e, t, r) {
						"use strict";
						var o=r(643), n=r.n(o);
						t.default=n.a
					}
					, 851:function(e, t, r) {
						"use strict";
						var o=r(644), n=r.n(o);
						t.default=n.a
					}
					, 858:function(e, t, r) {
						"use strict";
						var o=r(645), n=r.n(o);
						t.default=n.a
					}
					, 859:function(e, t, r) {
						"use strict";
						var o=r(646), n=r.n(o);
						t.default=n.a
					}
					, 860:function(e, t, r) {
						"use strict";
						var o=r(647), n=r.n(o);
						t.default=n.a
					}
					, 861:function(e, t, r) {
						"use strict";
						var o=r(648), n=r.n(o);
						t.default=n.a
					}
					, 862:function(e, t, r) {
						"use strict";
						var o=r(649), n=r.n(o);
						t.default=n.a
					}
					, 864:function(e, t, r) {
						"use strict";
						var o=r(651), n=r.n(o);
						t.default=n.a
					}
					, 878:function(e, t, r) {
						"use strict";
						var o=r(660), n=r.n(o);
						t.default=n.a
					}
					, 879:function(e, t, r) {
						"use strict";
						var o=r(661), n=r.n(o);
						t.default=n.a
					}
					, 883:function(e, t, r) {
						"use strict";
						var o=r(665), n=r.n(o);
						t.default=n.a
					}
					, 885:function(e, t, r) {
						"use strict";
						var o=r(666), n=r.n(o);
						t.default=n.a
					}
					, 886:function(e, t, r) {
						"use strict";
						var o=r(667), n=r.n(o);
						t.default=n.a
					}
					, 904:function(e, t, r) {
						"use strict";
						var o=r(683), n=r.n(o);
						t.default=n.a
					}
					, 923:function(e, t, r) {
						"use strict";
						var o=r(700), n=r.n(o);
						t.default=n.a
					}
					, 924:function(e, t, r) {
						"use strict";
						var o=r(701), n=r.n(o);
						t.default=n.a
					}
				}
				]);