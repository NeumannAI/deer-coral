(window.webpackJsonp_cj86gji4 = window.webpackJsonp_cj86gji4 || []).push([
    [2], {
        589: function(e, t, o) {
            "use strict";
            o(27), o(13), o(24);
            var c, l = o(4),
                r = o(0),
                d = o(111),
                n = o.n(d),
                f = o(7),
                h = o.n(f),
                m = o(14),
                _ = o(110),
                x = (c = function(e, b) {
                    return (c = Object.setPrototypeOf || {
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
                    c(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                }),
                v = function(e, t, o, desc) {
                    var c, r = arguments.length,
                        d = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(c = e[i]) && (d = (r < 3 ? c(d) : r > 3 ? c(t, o, d) : c(t, o)) || d);
                    return r > 3 && d && Object.defineProperty(t, o, d), d
                },
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.websiteCode = "", t.isShow = !1, t.breakPointMedium = 1023, t.breakPointSmall = 731, t.rwdState = "", t.rwdDevice = "", t.rwdWidth = 0, t.urlFeedBack = "", t.nowTime = "", t.offlineDate = "", t.isShowFeedBack = !1, t.cookieExpires = "", t.classType = "", t
                    }
                    return x(t, e), t.prototype.created = function() {
                        this.websiteCode = Object(_.b)(this.$route.params.region)
                    }, t.prototype.mounted = function() {
                        window.addEventListener("resize", n()(this.setWindowWidth, 100, {
                            trailing: !0
                        })), this.cookieExpires = new Date(+new Date + 314496e5), "true" === h.a.get("isHideFBK") && h.a.set("isHideFBK", !0, {
                            domain: ".asus.com",
                            expires: this.cookieExpires,
                            secure: !0
                        }), "undefined" === h.a.get("isHideFBK") && h.a.set("isHideFBK", "undefined", {
                            domain: ".asus.com",
                            expires: this.cookieExpires,
                            secure: !0
                        }), void 0 === h.a.get("isHideFBK") && h.a.set("isHideFBK", "undefined", {
                            domain: ".asus.com",
                            expires: this.cookieExpires,
                            secure: !0
                        }), this.dataFeedBack = {
                            "be-nl": {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1116&code=5f089ae3-5158-45b7-9785-e3f11f99c90b&lang=nl_NL&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1116&code=5f089ae3-5158-45b7-9785-e3f11f99c90b&lang=nl_NL&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1116&code=5f089ae3-5158-45b7-9785-e3f11f99c90b&lang=nl_NL&size=mobileofficial"
                            },
                            "be-fr": {
                                width: "159px",
                                right: "-88px",
                                top: "-121px",
                                widthMobile: "152px",
                                rightMobile: "-74px",
                                topMobile: "-109px",
                                buttomName: "Commentaires",
                                desktop: "https://eSurvey.asus.com/?id=1115&code=b3afbdd1-ccdf-4b62-b544-2bff67afad47&lang=fr_FR&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1115&code=b3afbdd1-ccdf-4b62-b544-2bff67afad47&lang=fr_FR&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1115&code=b3afbdd1-ccdf-4b62-b544-2bff67afad47&lang=fr_FR&size=mobileofficial"
                            },
                            it: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1112&code=5a81fe96-bd1b-4fc1-8d50-a8af41ec88f2&lang=it_IT&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1112&code=5a81fe96-bd1b-4fc1-8d50-a8af41ec88f2&lang=it_IT&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1112&code=5a81fe96-bd1b-4fc1-8d50-a8af41ec88f2&lang=it_IT&size=mobileofficial"
                            },
                            es: {
                                width: "117px",
                                right: "-67px",
                                top: "-97px",
                                widthMobile: "112px",
                                rightMobile: "-55px",
                                topMobile: "-96px",
                                buttomName: "Opinión",
                                desktop: "https://eSurvey.asus.com/?id=1111&code=3f92b935-e0c9-4978-b033-a857e733a75b&lang=es_ES&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1111&code=3f92b935-e0c9-4978-b033-a857e733a75b&lang=es_ES&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1111&code=3f92b935-e0c9-4978-b033-a857e733a75b&lang=es_ES&size=mobileofficial"
                            },
                            de: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1110&code=27b251b0-13c3-4c0a-9751-d52da0a1dc54&lang=de_DE&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1110&code=27b251b0-13c3-4c0a-9751-d52da0a1dc54&lang=de_DE&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1110&code=27b251b0-13c3-4c0a-9751-d52da0a1dc54&lang=de_DE&size=mobileofficial"
                            },
                            pt: {
                                width: "149px",
                                right: "-83px",
                                top: "-114px",
                                widthMobile: "144px",
                                rightMobile: "-70px",
                                topMobile: "-100px",
                                buttomName: "Comentários",
                                desktop: "https://eSurvey.asus.com/?id=1109&code=304a2dbe-1f07-4795-a83e-6710a742d668&lang=pt_PT&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1109&code=304a2dbe-1f07-4795-a83e-6710a742d668&lang=pt_PT&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1109&code=304a2dbe-1f07-4795-a83e-6710a742d668&lang=pt_PT&size=mobileofficial"
                            },
                            pl: {
                                width: "190px",
                                right: "-103px",
                                top: "-136px",
                                widthMobile: "184px",
                                rightMobile: "-90px",
                                topMobile: "-120px",
                                buttomName: "Informacje zwrotne",
                                desktop: "https://eSurvey.asus.com/?id=1108&code=de3e1a70-b268-4f9e-b5f5-3e121c7bbbc9&lang=pl_PL&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1108&code=de3e1a70-b268-4f9e-b5f5-3e121c7bbbc9&lang=pl_PL&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1108&code=de3e1a70-b268-4f9e-b5f5-3e121c7bbbc9&lang=pl_PL&size=mobileofficial"
                            },
                            cz: {
                                width: "152px",
                                right: "-84px",
                                top: "-117px",
                                widthMobile: "145px",
                                rightMobile: "-71px",
                                topMobile: "-106px",
                                buttomName: "Zpětná vazba",
                                desktop: "https://eSurvey.asus.com/?id=1107&code=7c2f405f-3dca-46f1-a4f1-2a0b34d44440&lang=cs_CZ&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1107&code=7c2f405f-3dca-46f1-a4f1-2a0b34d44440&lang=cs_CZ&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1107&code=7c2f405f-3dca-46f1-a4f1-2a0b34d44440&lang=cs_CZ&size=mobileofficial"
                            },
                            hu: {
                                width: "144px",
                                right: "-80px",
                                top: "-110px",
                                widthMobile: "135px",
                                rightMobile: "-64px",
                                topMobile: "-94px",
                                buttomName: "Visszajelzés",
                                desktop: "https://eSurvey.asus.com/?id=1106&code=7bc7b2ac-ca97-4d6c-9121-2338379d72be&lang=hu_HU&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1106&code=7bc7b2ac-ca97-4d6c-9121-2338379d72be&lang=hu_HU&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1106&code=7bc7b2ac-ca97-4d6c-9121-2338379d72be&lang=hu_HU&size=mobileofficial"
                            },
                            fi: {
                                width: "116px",
                                right: "-66px",
                                top: "-100px",
                                widthMobile: "109px",
                                rightMobile: "-53px",
                                topMobile: "-88px",
                                buttomName: "Palaute",
                                desktop: "https://eSurvey.asus.com/?id=1105&code=32b9fb2b-e703-4523-aff9-edb80c43e6b2&lang=fi_FI&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1105&code=32b9fb2b-e703-4523-aff9-edb80c43e6b2&lang=fi_FI&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1105&code=32b9fb2b-e703-4523-aff9-edb80c43e6b2&lang=fi_FI&size=mobileofficial"
                            },
                            dk: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1104&code=eeb8cb58-6f64-493c-a0a9-776907cb8b47&lang=da_DK&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1104&code=eeb8cb58-6f64-493c-a0a9-776907cb8b47&lang=da_DK&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1104&code=eeb8cb58-6f64-493c-a0a9-776907cb8b47&lang=da_DK&size=mobileofficial"
                            },
                            se: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1103&code=7d773c47-b141-4157-92ff-54a92fb7971f&lang=sv_SE&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1103&code=7d773c47-b141-4157-92ff-54a92fb7971f&lang=sv_SE&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1103&code=7d773c47-b141-4157-92ff-54a92fb7971f&lang=sv_SE&size=mobileofficial"
                            },
                            fr: {
                                width: "160px",
                                right: "-87px",
                                top: "-114px",
                                widthMobile: "154px",
                                rightMobile: "-75px",
                                topMobile: "-104px",
                                buttomName: "Commentaires",
                                desktop: "https://eSurvey.asus.com/?id=1113&code=4ea73bd2-c55a-4e1f-8650-ed981ca2d970&lang=fr_FR&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1113&code=4ea73bd2-c55a-4e1f-8650-ed981ca2d970&lang=fr_FR&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1113&code=4ea73bd2-c55a-4e1f-8650-ed981ca2d970&lang=fr_FR&size=mobileofficial"
                            },
                            nl: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1114&code=f68b1351-4da6-4489-becf-c741332f4cc0&lang=nl_NL&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1114&code=f68b1351-4da6-4489-becf-c741332f4cc0&lang=nl_NL&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1114&code=f68b1351-4da6-4489-becf-c741332f4cc0&lang=nl_NL&size=mobileofficial"
                            },
                            us: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1152&code=6c3d9676-ef79-4624-8ab8-752799b1be23&lang=en_US&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1152&code=6c3d9676-ef79-4624-8ab8-752799b1be23&lang=en_US&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1152&code=6c3d9676-ef79-4624-8ab8-752799b1be23&lang=en_US&size=mobileofficial"
                            },
                            tw: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "意見回饋",
                                desktop: "https://eSurvey.asus.com/?id=1151&code=b5c4173d-5e39-40bb-aa88-a1a7c01a60ec&lang=zh_TW&size=pcofficial",
                                tablet: "https://eSurvey.asus.com/?id=1151&code=b5c4173d-5e39-40bb-aa88-a1a7c01a60ec&lang=zh_TW&size=tabletofficial",
                                mobile: "https://eSurvey.asus.com/?id=1151&code=b5c4173d-5e39-40bb-aa88-a1a7c01a60ec&lang=zh_TW&size=mobileofficial"
                            },
                            "ch-de": {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1181&code=06dfccb5-7b0e-47a5-95bd-543cd8691e66&lang=nl_NL&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1181&code=06dfccb5-7b0e-47a5-95bd-543cd8691e66&lang=nl_NL&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1181&code=06dfccb5-7b0e-47a5-95bd-543cd8691e66&lang=nl_NL&size=mobile_official"
                            },
                            "ch-en": {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1178&code=e8205f8e-0378-456f-9ac2-f92aad3bbdd3&lang=en_US&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1178&code=e8205f8e-0378-456f-9ac2-f92aad3bbdd3&lang=en_US&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1178&code=e8205f8e-0378-456f-9ac2-f92aad3bbdd3&lang=en_US&size=mobile_official"
                            },
                            "ch-fr": {
                                width: "161px",
                                right: "-89px",
                                top: "-99px",
                                widthMobile: "155px",
                                rightMobile: "-75px",
                                topMobile: "-100px",
                                buttomName: "Commentaires",
                                desktop: "https://eSurvey.asus.com/?id=1177&code=43a7c6a8-3b3d-4401-938f-f57fe178daf7&lang=fr_FR&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1177&code=43a7c6a8-3b3d-4401-938f-f57fe178daf7&lang=fr_FR&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1177&code=43a7c6a8-3b3d-4401-938f-f57fe178daf7&lang=fr_FR&size=mobile_official"
                            },
                            tr: {
                                width: "152px",
                                right: "-84px",
                                top: "-117px",
                                widthMobile: "145px",
                                rightMobile: "-71px",
                                topMobile: "-106px",
                                buttomName: "Geri bildirim",
                                desktop: "https://eSurvey.asus.com/?id=1175&code=a73a633a-8d7b-47d7-9b18-c9900270b43f&lang=tr_TR&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1175&code=a73a633a-8d7b-47d7-9b18-c9900270b43f&lang=tr_TR&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1175&code=a73a633a-8d7b-47d7-9b18-c9900270b43f&lang=tr_TR&size=mobile_official"
                            },
                            uk: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1179&code=d070e1f3-15af-44dc-a8bb-a7cfafb4cf6d&lang=en_US&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1179&code=d070e1f3-15af-44dc-a8bb-a7cfafb4cf6d&lang=en_US&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1179&code=d070e1f3-15af-44dc-a8bb-a7cfafb4cf6d&lang=en_US&size=mobile_official"
                            },
                            no: {
                                width: "166px",
                                right: "-91px",
                                top: "-121px",
                                widthMobile: "159px",
                                rightMobile: "-78px",
                                topMobile: "-109px",
                                buttomName: "Tilbakemelding",
                                desktop: "https://eSurvey.asus.com/?id=1182&code=f165601a-13cd-4776-86f9-79f625a8fad0&lang=nb_NO&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1182&code=f165601a-13cd-4776-86f9-79f625a8fad0&lang=nb_NO&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1182&code=f165601a-13cd-4776-86f9-79f625a8fad0&lang=nb_NO&size=mobile_official"
                            },
                            ru: {
                                width: "170px",
                                right: "-93px",
                                top: "-121px",
                                widthMobile: "163px",
                                rightMobile: "-80px",
                                topMobile: "-109px",
                                buttomName: "Обратная связь",
                                desktop: "https://eSurvey.asus.com/?id=1176&code=330edd01-cce7-40f4-b745-f8b0215877e6&lang=ru_RU&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1176&code=330edd01-cce7-40f4-b745-f8b0215877e6&lang=ru_RU&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1176&code=330edd01-cce7-40f4-b745-f8b0215877e6&lang=ru_RU&size=mobile_official"
                            },
                            ie: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1180&code=917f60a7-4aaa-4bc1-ba87-85e6ecaf681c&lang=en_US&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1180&code=917f60a7-4aaa-4bc1-ba87-85e6ecaf681c&lang=en_US&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1180&code=917f60a7-4aaa-4bc1-ba87-85e6ecaf681c&lang=en_US&size=mobile_official"
                            },
                            hk: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "意見回饋",
                                desktop: "https://eSurvey.asus.com/?id=1167&code=7c67ee71-8c0b-494c-acb0-d7f81efda74a&lang=zh_hk&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1167&code=7c67ee71-8c0b-494c-acb0-d7f81efda74a&lang=zh_hk&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1167&code=7c67ee71-8c0b-494c-acb0-d7f81efda74a&lang=zh_hk&size=mobile_official"
                            },
                            "hk-en": {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1168&code=041e3237-4cd2-4c13-83c0-b4ea733df5ef&lang=en_US&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1168&code=041e3237-4cd2-4c13-83c0-b4ea733df5ef&lang=en_US&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1168&code=041e3237-4cd2-4c13-83c0-b4ea733df5ef&lang=en_US&size=mobile_official"
                            },
                            cn: {
                                width: "100px",
                                right: "-59px",
                                top: "-121px",
                                widthMobile: "93px",
                                rightMobile: "-45px",
                                topMobile: "-96px",
                                buttomName: "反馈",
                                desktop: "https://eSurvey.asus.com/?id=1166&code=905d39b6-903e-46fb-ac89-b1f48f8d2528&lang=zh_CN&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1166&code=905d39b6-903e-46fb-ac89-b1f48f8d2528&lang=zh_CN&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1166&code=905d39b6-903e-46fb-ac89-b1f48f8d2528&lang=zh_CN&size=mobile_official"
                            },
                            th: {
                                width: "143px",
                                right: "-80px",
                                top: "-114px",
                                widthMobile: "138px",
                                rightMobile: "-67px",
                                topMobile: "-100px",
                                buttomName: "ข้อเสนอแนะ",
                                desktop: "https://eSurvey.asus.com/?id=1171&code=60be3d63-e8cd-4548-a7a9-fcf8f5a26c80&lang=th_TH&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1171&code=60be3d63-e8cd-4548-a7a9-fcf8f5a26c80&lang=th_TH&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1171&code=60be3d63-e8cd-4548-a7a9-fcf8f5a26c80&lang=th_TH&size=mobile_official"
                            },
                            jp: {
                                width: "171px",
                                right: "-94px",
                                top: "-114px",
                                widthMobile: "164px",
                                rightMobile: "-80px",
                                topMobile: "-100px",
                                buttomName: "フィードバック",
                                desktop: "https://eSurvey.asus.com/?id=1172&code=933c2c27-066c-46d0-96d3-c272c59f3774&lang=ja_JP&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1172&code=933c2c27-066c-46d0-96d3-c272c59f3774&lang=ja_JP&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1172&code=933c2c27-066c-46d0-96d3-c272c59f3774&lang=ja_JP&size=mobile_official"
                            },
                            vn: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Phản hồi",
                                desktop: "https://eSurvey.asus.com/?id=1173&code=6aa4eafd-1e19-4c5d-b219-4272545196c0&lang=vi_VN&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1173&code=6aa4eafd-1e19-4c5d-b219-4272545196c0&lang=vi_VN&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1173&code=6aa4eafd-1e19-4c5d-b219-4272545196c0&lang=vi_VN&size=mobile_official"
                            },
                            kr: {
                                width: "109px",
                                right: "-63px",
                                top: "-121px",
                                widthMobile: "103px",
                                rightMobile: "-50px",
                                topMobile: "-96px",
                                buttomName: "피드백",
                                desktop: "https://eSurvey.asus.com/?id=1174&code=7f82fcef-e2aa-4151-bded-abf90ab5a11e&lang=ko_KR&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1174&code=7f82fcef-e2aa-4151-bded-abf90ab5a11e&lang=ko_KR&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1174&code=7f82fcef-e2aa-4151-bded-abf90ab5a11e&lang=ko_KR&size=mobile_official"
                            },
                            au: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=pc_au_official",
                                tablet: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=tablet_au_official",
                                mobile: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=mobile_au_official"
                            },
                            nz: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=pc_nz_official",
                                tablet: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=tablet_nz_official",
                                mobile: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=mobile_nz_official"
                            },
                            ph: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=pc_ph_official",
                                tablet: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=tablet_ph_official",
                                mobile: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=mobile_ph_official"
                            },
                            sg: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=pc_sg_official",
                                tablet: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=tablet_sg_official",
                                mobile: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=mobile_sg_official"
                            },
                            my: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=pc_my_official",
                                tablet: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=tablet_my_official",
                                mobile: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=mobile_my_official"
                            },
                            in: {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=pc_in_official",
                                tablet: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=tablet_in_official",
                                mobile: "https://eSurvey.asus.com/?id=1165&code=f6812da1-82a2-4eac-9d5e-5cee30859a7b&lang=en_US&size=mobile_in_official"
                            },
                            mx: {
                                width: "150px",
                                right: "-83px",
                                top: "-99px",
                                widthMobile: "144px",
                                rightMobile: "-70px",
                                topMobile: "-100px",
                                buttomName: "Comentarios",
                                desktop: "https://eSurvey.asus.com/?id=1169&code=6ea4aa39-e8fa-4796-afca-822911e9603f&lang=es_ES&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1169&code=6ea4aa39-e8fa-4796-afca-822911e9603f&lang=es_ES&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1169&code=6ea4aa39-e8fa-4796-afca-822911e9603f&lang=es_ES&size=mobile_official"
                            },
                            br: {
                                width: "150px",
                                right: "-83px",
                                top: "-99px",
                                widthMobile: "144px",
                                rightMobile: "-70px",
                                topMobile: "-100px",
                                buttomName: "Comentários",
                                desktop: "https://eSurvey.asus.com/?id=1170&code=64e740c5-4501-4eed-9c5d-3866235ed669&lang=pt_BR&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1170&code=64e740c5-4501-4eed-9c5d-3866235ed669&lang=pt_BR&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1170&code=64e740c5-4501-4eed-9c5d-3866235ed669&lang=pt_BR&size=mobile_official"
                            },
                            "ca-en": {
                                width: "126px",
                                right: "-71px",
                                top: "-121px",
                                widthMobile: "121px",
                                rightMobile: "-59px",
                                topMobile: "-96px",
                                buttomName: "Feedback",
                                desktop: "https://eSurvey.asus.com/?id=1185&code=8fab80fc-4c7c-4710-a1d2-f44e4d99e889&lang=en_US&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1185&code=8fab80fc-4c7c-4710-a1d2-f44e4d99e889&lang=en_US&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1185&code=8fab80fc-4c7c-4710-a1d2-f44e4d99e889&lang=en_US&size=mobile_official"
                            },
                            "ca-fr": {
                                width: "160px",
                                right: "-88px",
                                top: "-99px",
                                widthMobile: "154px",
                                rightMobile: "-75px",
                                topMobile: "-100px",
                                buttomName: "Commentaires",
                                desktop: "https://eSurvey.asus.com/?id=1186&code=0f889141-5981-43f4-bf7b-5486ee375249&lang=fr_FR&size=pc_official",
                                tablet: "https://eSurvey.asus.com/?id=1186&code=0f889141-5981-43f4-bf7b-5486ee375249&lang=fr_FR&size=tablet_official",
                                mobile: "https://eSurvey.asus.com/?id=1186&code=0f889141-5981-43f4-bf7b-5486ee375249&lang=fr_FR&size=mobile_official"
                            }
                        };
                        var e = new Date,
                            t = e.getUTCFullYear(),
                            o = e.getUTCMonth() + 1,
                            c = e.getUTCDate(),
                            l = e.getUTCHours() + 8,
                            r = e.getUTCMinutes(),
                            s = e.getUTCSeconds();
                        new Date(t, o, c, l, r, s).getTime() < new Date(2022, 11, 31, 23, 59, 59).getTime() && -1 !== ",es,it,fr,se,dk,fi,cz,pl,hu,de,nl,pt,be-nl,be-fr,us,tw,ch-de,ch-en,ch-fr,tr,uk,no,ru,ie,hk,hk-en,cn,th,jp,vn,kr,au,nz,ph,sg,my,in,mx,br,ca-en,ca-fr,".indexOf("," + this.websiteCode.toLowerCase() + ",") && "undefined" === h.a.get("isHideFBK") ? this.isShowFeedBack = !0 : this.isShowFeedBack = !1, window && (window.addEventListener("scroll", this.showScrollTop), this.showScrollTop()), "" === this.classType && (this.classType = this.$route.name), this.showScrollTop(), !0 === this.isShowFeedBack && (this.rwdWidth > this.breakPointMedium ? this.rwdDevice = "pc" : this.rwdWidth > this.breakPointSmall ? this.rwdDevice = "tablet" : this.rwdDevice = "mobile", this.gaDataLayerPush({
                            event: "data_layer_event",
                            event_category_DL: "sticker",
                            event_action_DL: "displayed",
                            event_label_DL: "2 in 1 website survey|" + this.websiteCode.toLowerCase() + "|" + this.rwdDevice + "|official"
                        }))
                    }, t.prototype.showScrollTop = function() {
                        this.rwdWidth = window.innerWidth, (window.scrollY > 2 * window.innerHeight || window.pageYOffset > 2 * window.innerHeight) && (this.isShow = !0), 0 !== window.scrollY && 0 !== window.pageYOffset || (this.isShow = !1)
                    }, t.prototype.scrollTop = function() {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }), this.gaDataLayerPush({
                            event: "data_layer_event",
                            event_category_DL: "buttons",
                            event_action_DL: "clicked",
                            event_label_DL: "back_to_top",
                            event_value_DL: "0"
                        })
                    }, t.prototype.clickFeedBack = function(e) {
                        this.gaDataLayerPush({
                            event: "data_layer_event",
                            event_category_DL: "sticker",
                            event_action_DL: "clicked",
                            event_label_DL: "2 in 1 website survey|" + this.websiteCode.toLowerCase() + "|" + this.rwdDevice + "|official"
                        }), this.isShowFeedBack = !1, h.a.set("isHideFBK", !0, {
                            domain: ".asus.com",
                            expires: this.cookieExpires,
                            secure: !0
                        }), window.open(e, "_blank")
                    }, t.prototype.reloadSource = function() {
                        this.rwdWidth > this.breakPointMedium ? (this.rwdState = "desktop", this.rwdDevice = "pc") : this.rwdWidth > this.breakPointSmall ? (this.rwdState = "tablet", this.rwdDevice = "tablet") : (this.rwdState = "mobile", this.rwdDevice = "mobile"), this.dataFeedBack[this.websiteCode.toLowerCase()] && this.dataFeedBack[this.websiteCode.toLowerCase()][this.rwdState] && (this.urlFeedBack = this.dataFeedBack[this.websiteCode.toLowerCase()][this.rwdState])
                    }, t.prototype.setWindowWidth = function() {
                        try {
                            this.rwdWidth = window.innerWidth
                        } catch (e) {}
                    }, v([Object(r.Prop)()], t.prototype, "hasChat", void 0), v([Object(r.Prop)()], t.prototype, "compareMenuShowState", void 0), v([Object(r.Prop)()], t.prototype, "compareNum", void 0), v([Object(r.Watch)("rwdWidth")], t.prototype, "reloadSource", null), t = v([Object(r.Component)({})], t)
                }(Object(r.mixins)(m.a)),
                w = o(844),
                S = o(8);
            var component = Object(S.a)(y, (function() {
                var e, t, o, c = this,
                    l = c.$createElement,
                    r = c._self._c || l;
                return r("div", {
                    class: [c.$style.feedBackWrapper, (e = {}, e[c.$style.hasChat] = c.hasChat, e[c.$style.compare] = ("Filter" === c.classType || "Overview" === c.classType || "Deals" === c.classType || "DealsWebPath" === c.classType) && c.rwdWidth > 731 && c.compareNum > 0, e[c.$style.compareUp] = ("Filter" === c.classType || "Overview" === c.classType || "Deals" === c.classType || "DealsWebPath" === c.classType) && c.rwdWidth > 731 && c.compareNum > 0 && c.compareMenuShowState, e[c.$style.compareDown] = ("Filter" === c.classType || "Overview" === c.classType || "Deals" === c.classType || "DealsWebPath" === c.classType) && c.rwdWidth > 731 && c.compareNum > 0 && !1 === c.compareMenuShowState && c.hasChat, e[c.$style.compareDownNoChat] = ("Filter" === c.classType || "Overview" === c.classType || "Deals" === c.classType || "Deals" === c.classType) && c.rwdWidth > 731 && c.compareNum > 0 && !1 === c.compareMenuShowState && !c.hasChat, e)]
                }, [c.isShowFeedBack ? r("div", {
                    class: [c.$style.feedBackDiv, (t = {}, t[c.$style.scrollTopShow] = !c.isShow, t)],
                    style: [c.rwdWidth > 731 ? {
                        width: c.dataFeedBack[c.websiteCode.toLowerCase()].width
                    } : {
                        width: c.dataFeedBack[c.websiteCode.toLowerCase()].widthMobile
                    }, c.rwdWidth > 731 ? {
                        right: c.dataFeedBack[c.websiteCode.toLowerCase()].right
                    } : {
                        right: c.dataFeedBack[c.websiteCode.toLowerCase()].rightMobile
                    }, !0 === c.isShow ? c.rwdWidth > 731 ? {
                        top: c.dataFeedBack[c.websiteCode.toLowerCase()].top
                    } : {
                        top: c.dataFeedBack[c.websiteCode.toLowerCase()].topMobile
                    } : "", !1 === c.isShow ? c.rwdWidth > 731 ? {
                        top: "-99px"
                    } : {
                        top: "-61px"
                    } : ""],
                    on: {
                        click: function(e) {
                            return c.clickFeedBack(c.urlFeedBack)
                        }
                    }
                }, [r("div", {
                    class: c.$style.feedBackDivText
                }, [c._v("\n      " + c._s(c.dataFeedBack[c.websiteCode.toLowerCase()].buttomName) + "\n    ")])]) : c._e(), c._v(" "), r("div", {
                    class: [c.$style.scrollTopWrapper, (o = {}, o[c.$style.isShow] = c.isShow, o)],
                    on: {
                        click: function(e) {
                            return c.scrollTop()
                        }
                    }
                }, [r("svg", {
                    class: c.$style.scrollTopIcon,
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 44 44",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [r("circle", {
                    attrs: {
                        cx: "22",
                        cy: "22",
                        r: "22",
                        fill: "#000",
                        "fill-opacity": ".4"
                    }
                }), r("path", {
                    attrs: {
                        stroke: "#fff",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "1.2",
                        d: "M12.925 26.95L22 17.545l9.075 9.405"
                    }
                })])])])
            }), [], !1, (function(e) {
                this.$style = w.default.locals || w.default
            }), null, null);
            t.a = component.exports
        },
        595: function(e, t, o) {
            "use strict";
            o(13), o(24);
            var c, l = o(4),
                r = o(0),
                d = (c = function(e, b) {
                    return (c = Object.setPrototypeOf || {
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
                    c(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                }),
                n = function(e, t, o, desc) {
                    var c, r = arguments.length,
                        d = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(c = e[i]) && (d = (r < 3 ? c(d) : r > 3 ? c(t, o, d) : c(t, o)) || d);
                    return r > 3 && d && Object.defineProperty(t, o, d), d
                },
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isOpen = !1, t
                    }
                    return d(t, e), t.prototype.mounted = function() {
                        window.addEventListener("click", this.clickOutside)
                    }, t.prototype.beforeDestroy = function() {
                        window.removeEventListener("click", this.clickOutside)
                    }, t.prototype.clickSort = function(e) {
                        this.$emit("click-sort", e)
                    }, t.prototype.clickOutside = function(e) {
                        var t = this.$refs.select,
                            o = this.$refs.selectList,
                            c = this.$refs.selectLabel,
                            l = e.target;
                        c === l || c.contains(l) ? this.isOpen = !this.isOpen : t.contains(l) && o !== l ? this.isOpen = !1 : t === l || t.contains(l) ? this.isOpen = !0 : this.isOpen = !1
                    }, n([Object(r.Prop)()], t.prototype, "selectListData", void 0), n([Object(r.Prop)()], t.prototype, "sortValue", void 0), n([Object(r.Prop)()], t.prototype, "isFullWidth", void 0), n([Object(r.Prop)()], t.prototype, "isBorder", void 0), t = n([Object(r.Component)({})], t)
                }(r.Vue),
                h = o(881),
                m = o(8);
            var component = Object(m.a)(f, (function() {
                var e, t, o = this,
                    c = o.$createElement,
                    l = o._self._c || c;
                return l("div", {
                    class: o.$style.selectListWrapper
                }, [l("div", {
                    ref: "select",
                    class: [o.$style.selectWrapper, (e = {}, e[o.$style.isBorder] = o.isBorder, e[o.$style.isOpen] = o.isOpen, e[o.$style.isFullWidth] = o.isFullWidth, e)]
                }, [l("div", {
                    ref: "selectLabel"
                }, [l("div", {
                    class: o.$style.select
                }, [o._t("default")], 2), o._v(" "), o.isOpen ? l("svg", {
                    class: "svg-icon",
                    attrs: {
                        viewBox: "0 0 12 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [l("path", {
                    attrs: {
                        d: "M.5 7L6 1.3 11.5 7",
                        stroke: "#999",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })]) : l("svg", {
                    class: "svg-icon",
                    attrs: {
                        viewBox: "0 0 12 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [l("path", {
                    attrs: {
                        d: "M11.5 1L6 6.7.5 1",
                        stroke: "#999",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])]), o._v(" "), o.selectListData ? l("div", {
                    ref: "selectList",
                    class: [o.$style.selectList, (t = {}, t[o.$style.isOpen] = o.isOpen, t)]
                }, [l("div", {
                    staticClass: "selectListContent"
                }, o._l(o.selectListData, (function(e, t) {
                    var c;
                    return l("div", {
                        key: t,
                        class: [o.$style.selectListOption, (c = {}, c[o.$style.selected] = o.sortValue === e.Value, c)],
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: function(t) {
                                return o.clickSort(e.Value)
                            }
                        }
                    }, [o._v("\n          " + o._s(e.Text) + "\n        ")])
                })), 0)]) : o._e()])])
            }), [], !1, (function(e) {
                this.$style = h.default.locals || h.default
            }), null, null);
            t.a = component.exports
        },
        637: function(e, t, o) {
            e.exports = {
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                feedBackWrapper: "ScrollTop__feedBackWrapper__1XqYH",
                hasChat: "ScrollTop__hasChat__3ZWRA",
                compare: "ScrollTop__compare__3xKCt",
                isShow: "ScrollTop__isShow__FF0GY",
                fadein: "ScrollTop__fadein__2zBA3",
                compareUp: "ScrollTop__compareUp__1rCk4",
                compareDown: "ScrollTop__compareDown__2TwLD",
                buttonDown: "ScrollTop__buttonDown__2IZ1l",
                buttonDownMobile: "ScrollTop__buttonDownMobile__3k1sM",
                compareDownNoChat: "ScrollTop__compareDownNoChat__fJvGb",
                buttonDownNoChat: "ScrollTop__buttonDownNoChat__2CyAl",
                buttonDownMobileNoChat: "ScrollTop__buttonDownMobileNoChat__1l9RR",
                scrollTopWrapper: "ScrollTop__scrollTopWrapper__m4MVR",
                scrollTopWrapperShow: "ScrollTop__scrollTopWrapperShow__1vWT2",
                scrollTopIcon: "ScrollTop__scrollTopIcon__32D5F",
                feedBackDiv: "ScrollTop__feedBackDiv__25ltd",
                feedBackDivText: "ScrollTop__feedBackDivText__2NS7T",
                scrollTopShow: "ScrollTop__scrollTopShow__w3B0F",
                feedBackTitle: "ScrollTop__feedBackTitle__2Nc-S"
            }
        },
        663: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                selectListWrapper: "SortSelect__selectListWrapper__1-trC",
                selectWrapper: "SortSelect__selectWrapper__3da1R",
                isBorder: "SortSelect__isBorder__PoxIH",
                select: "SortSelect__select__2AqKu",
                isOpen: "SortSelect__isOpen__Q79J7",
                selectList: "SortSelect__selectList__3diny",
                selectListOption: "SortSelect__selectListOption__1XVra",
                selected: "SortSelect__selected__3Dvak"
            }
        },
        672: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                breakPointMedium: "1279px",
                breakPointHeaderTablet: "1023px",
                breakPointSmall: "731px",
                IconTabsMenu: "DealsTabBar__IconTabsMenu__2YB9k",
                IconTabsBox: "DealsTabBar__IconTabsBox__31HlX",
                IconTabsList: "DealsTabBar__IconTabsList__28xlZ",
                IconTabsListDiv: "DealsTabBar__IconTabsListDiv__7X3bG",
                IconTabsIndicatorLine: "DealsTabBar__IconTabsIndicatorLine__9il-1",
                IconTabsIndicator: "DealsTabBar__IconTabsIndicator__1GGDd",
                IconTabsIndicatorLineBg: "DealsTabBar__IconTabsIndicatorLineBg__1a1iI",
                active: "DealsTabBar__active__2j8qs",
                nextArea: "DealsTabBar__nextArea__2uaZO",
                prevArea: "DealsTabBar__prevArea__SLWN7",
                prev: "DealsTabBar__prev__zCC3r",
                next: "DealsTabBar__next__2kvgs",
                listDivTitle: "DealsTabBar__listDivTitle__T5B9I",
                chrstmasColor: "DealsTabBar__chrstmasColor__2nqd_",
                outletColor: "DealsTabBar__outletColor__2pPF9",
                listDivSubTitle: "DealsTabBar__listDivSubTitle__2TE23",
                showType: "DealsTabBar__showType__1dt8G",
                seriesTab: "DealsTabBar__seriesTab__167cf",
                listDivImg: "DealsTabBar__listDivImg__3Skv0",
                hotDealsTab: "DealsTabBar__hotDealsTab__mYJqJ",
                tabsLayout: "DealsTabBar__tabsLayout__3QPQe",
                seriesLayoutLine: "DealsTabBar__seriesLayoutLine__1kSLY",
                dealsTabBar: "DealsTabBar__dealsTabBar__2Ntcx"
            }
        },
        734: function(e, t, o) {
            e.exports = {
                fontFamilyRegular: '"TT Norms W05 Regular","Myriad W08 Regular","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                fontFamilyBold: '"TT Norms W05 Medium","Myriad W08 Semibold","Segoe UI","Arial","PingFang TC","Microsoft JhengHei",sans-serif',
                paginationWrapper: "Pagination__paginationWrapper__16rpA",
                prevPage: "Pagination__prevPage__E67wd",
                disabled: "Pagination__disabled__1BBkI",
                nextPage: "Pagination__nextPage__1hzzE",
                pageNumber: "Pagination__pageNumber__3gI9N",
                numberActive: "Pagination__numberActive__1Buqn"
            }
        },
        761: function(e, t, o) {
            "use strict";
            o(304), o(13), o(24);
            var c, l = o(4),
                r = o(0),
                d = (c = function(e, b) {
                    return (c = Object.setPrototypeOf || {
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
                    c(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                }),
                n = function(e, t, o, desc) {
                    var c, r = arguments.length,
                        d = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(c = e[i]) && (d = (r < 3 ? c(d) : r > 3 ? c(t, o, d) : c(t, o)) || d);
                    return r > 3 && d && Object.defineProperty(t, o, d), d
                },
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.maxPage = 1, t.prevDisabled = !0, t.nextDisabled = !0, t.max = 1, t.min = 1, t.pageList = [], t
                    }
                    return d(t, e), t.prototype.getPageCount = function() {
                        this.setPagination()
                    }, t.prototype.pageNumberClick = function() {
                        this.setPagination()
                    }, t.prototype.pageSizeChange = function() {
                        this.setPagination()
                    }, t.prototype.mounted = function() {
                        this.setPagination()
                    }, t.prototype.setPagination = function() {
                        this.pageList = [], this.maxPage = Math.ceil(Number(this.pageCount) / Number(this.pageSize)), this.prevDisabled = this.pageClick <= 5, this.nextDisabled = this.maxPage < 6 || this.pageClick >= this.maxPage, this.max = this.maxPage, this.pageClick < 6 && this.maxPage > 5 ? (this.max = 5, this.min = 1) : this.pageClick > 5 && this.pageClick % 5 == 1 ? (this.min = this.pageClick, this.max = this.pageClick + 4) : this.pageClick > 5 && this.pageClick % 5 == 2 ? (this.min = this.pageClick - 1, this.max = this.pageClick + 3) : this.pageClick > 5 && this.pageClick % 5 == 3 ? (this.min = this.pageClick - 2, this.max = this.pageClick + 2) : this.pageClick > 5 && this.pageClick % 5 == 4 ? (this.min = this.pageClick - 3, this.max = this.pageClick + 1) : this.pageClick > 5 && this.pageClick % 5 == 0 && this.pageClick <= this.maxPage && (this.min = this.pageClick - 4, this.max = this.pageClick);
                        for (var i = this.min; i <= this.max; i++) i === this.maxPage && (this.nextDisabled = !0), i <= this.maxPage && this.pageList.push(i)
                    }, Object.defineProperty(t.prototype, "getPrevPage", {
                        get: function() {
                            if (this.min - 5 > 0) return this.min - 5
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "getNextPage", {
                        get: function() {
                            return this.max + 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.changePage = function(e) {
                        e !== this.pageClick && this.$emit("change-page", e)
                    }, n([Object(r.Prop)()], t.prototype, "pageCount", void 0), n([Object(r.Prop)()], t.prototype, "pageSize", void 0), n([Object(r.Prop)()], t.prototype, "pageClick", void 0), n([Object(r.Watch)("pageCount")], t.prototype, "getPageCount", null), n([Object(r.Watch)("pageClick")], t.prototype, "pageNumberClick", null), n([Object(r.Watch)("pageSize")], t.prototype, "pageSizeChange", null), t = n([Object(r.Component)({})], t)
                }(r.Vue),
                h = o(957),
                m = o(8);
            var component = Object(m.a)(f, (function() {
                var e, t, o = this,
                    c = o.$createElement,
                    l = o._self._c || c;
                return o.pageList ? l("div", {
                    class: o.$style.paginationWrapper
                }, [l("div", {
                    class: [o.$style.prevPage, (e = {}, e[o.$style.disabled] = o.prevDisabled, e)],
                    attrs: {
                        tabindex: o.prevDisabled ? -1 : 0
                    },
                    on: {
                        click: function(e) {
                            !o.prevDisabled && o.changePage(o.getPrevPage)
                        }
                    }
                }, [l("svg", {
                    class: "svg-icon",
                    attrs: {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [l("path", {
                    attrs: {
                        d: "M11 13.5L5.3 8 11 2.5",
                        stroke: "#181818",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])]), o._v(" "), o._l(o.pageList, (function(e, t) {
                    var c;
                    return l("div", {
                        key: t,
                        class: [o.$style.pageNumber, (c = {}, c[o.$style.numberActive] = e === o.pageClick, c)],
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: function(t) {
                                return o.changePage(e)
                            }
                        }
                    }, [o._v("\n    " + o._s(e) + "\n  ")])
                })), o._v(" "), l("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !o.nextDisabled,
                        expression: "!nextDisabled"
                    }],
                    class: o.$style.pageNumber,
                    attrs: {
                        tabindex: "0"
                    },
                    on: {
                        click: function(e) {
                            return o.changePage(o.getNextPage)
                        }
                    }
                }, [o._v("\n     ...\n  ")]), o._v(" "), l("div", {
                    class: [o.$style.nextPage, (t = {}, t[o.$style.disabled] = o.nextDisabled, t)],
                    attrs: {
                        tabindex: o.nextDisabled ? -1 : 0
                    },
                    on: {
                        click: function(e) {
                            !o.nextDisabled && o.changePage(o.getNextPage)
                        }
                    }
                }, [l("svg", {
                    class: "svg-icon",
                    attrs: {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "svg-inline": "",
                        role: "presentation",
                        focusable: "false",
                        tabindex: "-1"
                    }
                }, [l("path", {
                    attrs: {
                        d: "M5 2.5L10.7 8 5 13.5",
                        stroke: "#181818",
                        "stroke-miterlimit": "10",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])], 2) : o._e()
            }), [], !1, (function(e) {
                this.$style = h.default.locals || h.default
            }), null, null);
            t.a = component.exports
        },
        794: function(e, t, o) {
            "use strict";
            o(776), o(27), o(13), o(24), o(65);
            var c, l = o(4),
                r = o(0),
                d = o(14),
                n = o(110),
                f = (c = function(e, b) {
                    return (c = Object.setPrototypeOf || {
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
                    c(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                }),
                h = function(e, t, o, desc) {
                    var c, r = arguments.length,
                        d = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, t, o, desc);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(c = e[i]) && (d = (r < 3 ? c(d) : r > 3 ? c(t, o, d) : c(t, o)) || d);
                    return r > 3 && d && Object.defineProperty(t, o, d), d
                },
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.currentImageIndex = 1, t.currentItemIndex = 1, t.currentX = 0, t.totalSlide = 0, t.totalItems = 0, t.itemWidth = 176, t.itemsBoxWidth = 0, t.iconTabsMenuWidth = 0, t.pageSize = 0, t.showSubTitle = !1, t.marginBottom = 0, t.rwdState = "", t.loop = !1, t.currentPageIndex = 0, t.websiteCode = "", t
                    }
                    return f(t, e), t.prototype.mounted = function() {
                        var element = this.$refs.itemsBox;
                        this.itemsBoxWidth = element.offsetWidth;
                        var e = this.$refs.iconTabsMenu;
                        this.iconTabsMenuWidth = e.offsetWidth
                    }, t.prototype.routeChange = function() {
                        this.websiteCode = Object(n.b)(this.$route.params.region)
                    }, t.prototype.reloadSource = function() {
                        this.getItemWidth();
                        var element = this.$refs.itemsBox;
                        this.itemsBoxWidth = element.offsetWidth, this.pageSize = Math.floor(this.itemsBoxWidth / this.itemWidth), this.seriesTabData && (this.totalSlide = Math.ceil(this.seriesTabData.length / this.pageSize)), this.setImg(Math.floor(this.currentPageIndex / this.pageSize) + 1)
                    }, t.prototype.setSeriesTabData = function() {
                        var e = this;
                        void 0 !== this.seriesTabData && this.$nextTick((function() {
                            e.totalItems = e.seriesTabData.length, e.pageSize = Math.floor(e.itemsBoxWidth / e.itemWidth), e.totalSlide = Math.ceil(e.totalItems / e.pageSize)
                        }))
                    }, t.prototype.getSeriesName = function() {
                        var e = this;
                        if (this.seriesTabData) {
                            var t = this.seriesTabData.findIndex((function(t) {
                                return t.WebPath === e.$route.params.seriesName
                            }));
                            this.highlightIndicator(t), this.currentPageIndex = t + 1
                        }
                    }, t.prototype.highlightIndicator = function(e) {
                        this.currentItemIndex = e + 1
                    }, t.prototype.resetIndicator = function() {
                        this.currentItemIndex = this.currentPageIndex
                    }, t.prototype.isTabActive = function(e) {
                        return "DealsEvent" === this.$route.name ? e === this.$route.params.dealsEventName : "Deals" === this.$route.name && "All-Deals" === e || ("Outlet" === this.$route.name && "outlet" === e || (void 0 !== e && void 0 !== this.$route.params.ProductLevel1Code ? e.toLowerCase() === this.$route.params.ProductLevel1Code.toLowerCase() : void 0))
                    }, t.prototype.tabClick = function(e, t, o, c, l) {
                        return "All-Deals" === e ? {
                            name: "Deals"
                        } : "outlet" === e ? {
                            name: "Outlet"
                        } : 1 === t ? {
                            name: "DealsEvent",
                            params: {
                                dealsEventName: e
                            }
                        } : e !== this.$route.params.ProductLevel1Code ? (l && (this.currentPageIndex = l + 1), {
                            name: "DealsWebPath",
                            params: {
                                ProductLevel1Code: e
                            }
                        }) : {}
                    }, t.prototype.setImg = function(i) {
                        this.currentImageIndex = i, this.triggerScrolling("auto")
                    }, t.prototype.nextImg = function() {
                        this.currentImageIndex++, this.currentImageIndex > this.totalSlide && (this.currentImageIndex = this.totalSlide), this.triggerScrolling()
                    }, t.prototype.prevImg = function() {
                        this.currentImageIndex--, this.currentImageIndex <= 0 && (this.currentImageIndex = 1), this.triggerScrolling()
                    }, t.prototype.triggerScrolling = function(e) {
                        void 0 === e && (e = "smooth");
                        var t = 0;
                        this.seriesTabData && (t = this.seriesTabData.length * this.itemWidth - (this.currentImageIndex - 1) * this.itemWidth * this.pageSize), 1 === this.currentImageIndex ? this.currentX = 0 : this.currentImageIndex === this.totalSlide ? this.currentX = this.iconTabsMenuWidth - this.itemWidth : t < this.itemsBoxWidth ? this.currentX = this.seriesTabData.length * this.itemWidth - this.itemsBoxWidth : t >= this.itemsBoxWidth && (this.currentX = (this.currentImageIndex - 1) * this.pageSize * this.itemWidth);
                        var element = this.$refs.itemsBox;
                        if (element.scrollTo) element.scrollTo({
                            top: 0,
                            left: this.currentX,
                            behavior: e
                        });
                        else var o = this.currentX - element.scrollLeft,
                            c = this.currentX,
                            l = setInterval((function() {
                                element.scrollLeft == c ? clearInterval(l) : element.scrollLeft = Math.abs(c - element.scrollLeft) <= Math.abs(o / 5) ? c : element.scrollLeft + o / 5
                            }), 33)
                    }, t.prototype.getItemWidth = function() {
                        this.rwdWidth >= 1280 ? this.itemWidth = 176 : this.rwdWidth > 731 && this.rwdWidth < 1280 ? this.itemWidth = 168 : this.itemWidth = 120
                    }, h([Object(r.Prop)()], t.prototype, "gaEventLabel", void 0), h([Object(r.Prop)()], t.prototype, "rwdWidth", void 0), h([Object(r.Prop)()], t.prototype, "seriesTabData", void 0), h([Object(r.Prop)()], t.prototype, "showType", void 0), h([Object(r.Watch)("$route", {
                        immediate: !0,
                        deep: !0
                    })], t.prototype, "routeChange", null), h([Object(r.Watch)("rwdWidth")], t.prototype, "reloadSource", null), h([Object(r.Watch)("seriesTabData", {
                        immediate: !0
                    })], t.prototype, "setSeriesTabData", null), h([Object(r.Watch)("$route", {
                        immediate: !0
                    })], t.prototype, "getSeriesName", null), t = h([Object(r.Component)({
                        components: {}
                    })], t)
                }(Object(r.mixins)(d.a)),
                _ = o(891),
                x = o(8);
            var component = Object(x.a)(m, (function() {
                var e = this,
                    t = e.$createElement,
                    c = e._self._c || t;
                return e.seriesTabData ? c("div", {
                    class: [e.$style.tabsLayout, e.$style.dealsTabBar]
                }, [c("div", {
                    ref: "iconTabsMenu",
                    class: e.$style.IconTabsMenu
                }, [c("div", {
                    ref: "itemsBox",
                    class: e.$style.IconTabsBox,
                    style: [e.itemsBoxWidth > e.totalItems * e.itemWidth ? {
                        display: "flex",
                        "justify-content": "center"
                    } : {}]
                }, [c("div", {
                    ref: "iconBox",
                    class: e.$style.IconTabsList
                }, [e._l(e.seriesTabData, (function(t, o) {
                    var l, r, d;
                    return [c("nuxt-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 === t.ShowWeb,
                            expression: "item.ShowWeb === 1"
                        }],
                        key: o,
                        class: [e.$style.IconTabsListDiv, (l = {}, l[e.$style.active] = e.isTabActive(t.WebPath), l)],
                        attrs: {
                            tabindex: "0",
                            to: e.tabClick(t.WebPath, t.Type, o),
                            target: 2 === t.Type ? "_self" : "_blank"
                        },
                        on: {
                            click: function(o) {
                                o.preventDefault(), e.gaDataLayerPush({
                                    event: "data_layer_event",
                                    event_category_DL: "internal-links",
                                    event_action_DL: "clicked",
                                    event_label_DL: e.gaEventLabel + "/" + t.Name,
                                    event_value_DL: "0"
                                }), e.gaHmtPush(["_trackEvent", "buttons", "clicked", e.gaEventLabel + "/" + t.Name])
                            },
                            mouseover: function(t) {
                                return e.highlightIndicator(o)
                            },
                            mouseleave: e.resetIndicator
                        }
                    }, [c("div", {
                        class: e.$style.listDivImg
                    }, [c("img", {
                        class: e.$style.itemImg,
                        attrs: {
                            src: "" + (t.ImageUrl ? t.ImageUrl : t.IconUrl),
                            alt: ""
                        }
                    })]), e._v(" "), c("div", {
                        class: [e.$style.listDivTitle, (r = {}, r[e.$style.chrstmasColor] = "Christmas" === t.WebPath, r), (d = {}, d[e.$style.outletColor] = "outlet" === t.WebPath, d)]
                    }, [e._v("\n              " + e._s(t.Name) + "\n            ")]), e._v(" "), c("div", {
                        class: e.$style.listDivSubTitle
                    }, [e._v("\n              " + e._s(t.ShortDesc) + "\n            ")]), e._v(" "), c("div", {
                        class: e.$style.IconTabsIndicatorLine
                    })])]
                }))], 2)]), e._v(" "), c("div", {
                    class: e.$style.IconTabsIndicator
                }, [c("div", {
                    class: e.$style.IconTabsIndicatorLineBg
                })]), e._v(" "), e.seriesTabData && 1 !== e.currentImageIndex && e.iconTabsMenuWidth < e.totalItems * e.itemWidth ? c("div", {
                    class: e.$style.prevArea,
                    on: {
                        click: e.prevImg
                    }
                }, [c("div", {
                    ref: "prev",
                    class: e.$style.prev
                }, [e.rwdWidth >= 1280 ? c("img", {
                    attrs: {
                        src: o(631),
                        alt: "previous icon"
                    }
                }) : e._e()])]) : e._e(), e._v(" "), e.seriesTabData && e.currentImageIndex !== e.totalSlide && e.iconTabsMenuWidth < e.totalItems * e.itemWidth ? c("div", {
                    class: e.$style.nextArea,
                    on: {
                        click: e.nextImg
                    }
                }, [c("div", {
                    ref: "next",
                    class: e.$style.next
                }, [e.rwdWidth >= 1280 ? c("img", {
                    attrs: {
                        src: o(632),
                        alt: "next icon"
                    }
                }) : e._e()])]) : e._e()])]) : e._e()
            }), [], !1, (function(e) {
                this.$style = _.default.locals || _.default
            }), null, null);
            t.a = component.exports
        },
        844: function(e, t, o) {
            "use strict";
            var c = o(637),
                l = o.n(c);
            t.default = l.a
        },
        881: function(e, t, o) {
            "use strict";
            var c = o(663),
                l = o.n(c);
            t.default = l.a
        },
        891: function(e, t, o) {
            "use strict";
            var c = o(672),
                l = o.n(c);
            t.default = l.a
        },
        957: function(e, t, o) {
            "use strict";
            var c = o(734),
                l = o.n(c);
            t.default = l.a
        }
    }
]);