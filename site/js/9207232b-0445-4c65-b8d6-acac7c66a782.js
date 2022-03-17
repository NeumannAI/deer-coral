var e = function(e) {
    this.pfl = e.pfL;
    this.efg = e.efg;
    this.projectId = e.projectId;
    this.CDNKey = e.ck;
    this.FCURL = e.fcURL;
    this.environment = e.environment;
    this.supportedFormats = e.supportedFormat.split(",");
    this.dFCURL = e.dfcURL;
    this.fontFolder = e.fontFolder;
    this.selectorMap = e.selectorFontMap
};
e.prototype = function() {
    var s = "",
        t = function(e) {
            for (var t = 0; t < e.pfl.length; t++) {
                var n = e.pfl[t],
                    r = n["fontfamily"],
                    o = n["contentIds"],
                    f = n["subsetOption"],
                    i = n["fontWeight"],
                    a = n["fontStyle"];
                s += "@font-face{";
                s += "font-family:'" + r + "';";
                if (i) {
                    s += "font-weight:" + i + ";"
                }
                if (a) {
                    s += "font-style:" + a + ";"
                }
                s += "src:";
                var p = e.supportedFormats.length;
                for (var d = 0; d < p; d++) {
                    s += "url('" + c(o, r, i, a, e.supportedFormats[d], f, e) + "')";
                    if (e.supportedFormats[d].toLowerCase() != "ttf") {
                        s += "format('" + e.supportedFormats[d].toLowerCase() + "')"
                    } else {
                        s += "format('truetype')"
                    }
                    if (d != p - 1) {
                        s += ","
                    } else {
                        s += ";"
                    }
                }
                s += "}"
            }
            return s
        },
        c = function(e, t, n, r, o, f, i) {
            var a = e[o.toUpperCase()],
                p = "https://";
            var d = i.environment;
            var s = i.FCURL.replace("http://", "").replace("https://", "");
            if (!v(f)) {
                s = p + s;
                url = s + i.fontFolder[o.toLowerCase()] + "/" + a + "." + o.toLowerCase() + "?" + i.CDNKey;
                url += "&projectId=" + i.projectId
            } else {
                dfcURL = i.dFCURL.replace("http://", "").replace("https://", "");
                a = e["TTF"];
                dfcURL = p + dfcURL + "?" + i.CDNKey + "&fctypeId=" + i.fontFolder[o] + "&fcId=" + a + "&env=" + i.environment + "&projectId=" + i.projectId;
                if (f != undefined) {
                    var c = f["unicode"];
                    var l = f["text"];
                    var u = f["lang"];
                    var h = f["ot"];
                    if (c != undefined) {
                        dfcURL += "&ranges=" + c
                    }
                    if (l != undefined) {
                        dfcURL += "&content=" + l.replace('"', "%22").replace("'", "%27").replace("#", "%23").replace("?", "%3F").replace("&", "%26")
                    }
                    if (u != undefined) {
                        dfcURL += "&languages=" + u
                    }
                    if (h != undefined) {
                        dfcURL += "&ot=" + h
                    }
                }
                url = dfcURL
            }
            return url
        },
        v = function(e) {
            var t = false;
            if (typeof e != undefined && e != null && e != "") {
                if (typeof e["lang"] != undefined && e["lang"] != null && e["lang"] != "") {
                    t = true
                } else if (typeof e["unicode"] != undefined && e["unicode"] != null && e["unicode"] != "") {
                    t = true
                } else if (typeof e["text"] != undefined && e["text"] != null && e["text"] != "") {
                    t = true
                }
            }
            return t
        },
        e = function() {
            var e = '@import url("https://fast.fonts.net/t/1.css?apiType=js&projectid=' + this.projectId + '");';
            e += t(this);
            e += n(this);
            r("style", "", e, this)
        },
        n = function(e) {
            var t = "";
            if (e.selectorMap) {
                for (var n in e.selectorMap) {
                    var r = e.selectorMap[n];
                    var o = r["familyName"];
                    t += n + "{font-family:'" + o + "';";
                    if (e.efg) {
                        if (r["fontStyle"]) {
                            t += "font-style:" + r["fontStyle"] + ";"
                        }
                        if (r["fontWeight"]) {
                            t += "font-weight:" + r["fontWeight"] + ";"
                        }
                    }
                    t += "}"
                }
            }
            return t
        },
        r = function(e, t, n, r) {
            var o = document.createElement("style");
            o.type = "text/css";
            o.id = "mti_fontface_" + r.projectId;
            o.innerText = n;
            document.head.appendChild(o)
        };
    return {
        createAppendFontFace: e
    }
}();
var t = new e({
    efg: false,
    pfL: [{
        'fontfamily': "DIN W05 Cond Bold",
        contentIds: {
            WOFF: 'f3ba2a48-9a09-417b-9ab6-ba31aa5197ee',
            WOFF2: 'afc44321-9b59-4a13-9352-2ceca0a144b6',
            TTF: '7f1c8e16-c4a6-482b-ae44-603ccdf306fa'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-17f,18e-18f,192-192,1a0-1a1,1af-1b0,1b5-1b6,1cd-1e3,1e6-1ed,1f0-1f0,1f4-1f5,1f8-21b,226-233,237-237,259-259,2bb-2bc,2c0-2c0,2c6-2c7,2d8-2dd,300-304,306-30c,30f-313,316-317,31b-31c,323-328,32c-331,340-341,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,400-45f,462-463,472-475,490-493,496-497,49a-49d,4a2-4a3,4ae-4b3,4b6-4bb,4c0-4c0,4cf-4cf,4d8-4d9,4e2-4e3,4e8-4e9,4ee-4ef,1e00-1e99,1e9b-1e9b,1e9e-1e9e,1ea0-1ef9,2007-2008,2013-2015,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2032-2033,2039-203a,2044-2044,2070-2071,2074-2079,207f-2089,2090-2094,20ab-20ac,20b4-20b4,20b8-20b8,20ba-20ba,20bd-20bd,2116-2117,2122-2122,2126-2126,2150-215f,2189-2189,2190-2193,2196-2199,2202-2202,2206-2206,220f-220f,2211-2212,2219-221c,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,22c5-22c5,2460-2473,24ea-24f4,24ff-24ff,2776-2793,fb01-fb02",
            ot: "false"
        }
    }, {
        'fontfamily': "Kairos Sans W05 Cond Medium",
        contentIds: {
            WOFF: '8eeff4ae-fc76-450e-9c16-7463780055df',
            WOFF2: '478b0965-dedf-415c-81cb-d6ca71277b15',
            TTF: '5994f38a-dfd1-483d-8fea-f176f4e321eb'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-17f,18f-18f,192-192,1a0-1a1,1af-1b0,1fa-1ff,218-21b,237-237,259-259,2bc-2bc,2c6-2c7,2c9-2c9,2d8-2dd,300-301,303-303,309-309,312-312,323-323,326-326,374-375,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,400-45f,490-493,496-497,49a-49d,4a2-4a3,4ae-4b3,4b6-4bb,4c0-4c0,4cf-4cf,4d8-4d9,4e8-4e9,e3f-e3f,1e80-1e85,1e9e-1e9e,1ef2-1ef3,2010-2010,2013-2015,2017-201e,2020-2022,2026-2026,2030-2030,2032-2033,2039-203a,203c-203e,2044-2044,2070-2070,2074-208e,2099-2099,20a0-20bd,2105-2105,2113-2113,2116-2117,2122-2122,2126-2126,212e-212e,215b-215e,2166-2166,2190-2199,21a8-21a8,2202-2202,2206-2206,220f-220f,2211-2212,2215-2215,2219-221a,221e-221f,2229-2229,222b-222b,2248-2248,2260-2261,2264-2265,2302-2302,2310-2310,2320-2321,25ca-25ca,f8ff-f8ff,fb00-fb04",
            ot: "false"
        }
    }, {
        'fontfamily': "Kairos Sans W05 Condensed Bold",
        contentIds: {
            WOFF: '1f8a2a41-7ff3-4f5d-a967-73e16f0008ae',
            WOFF2: '12525846-78d3-46b8-9b6e-29d114140c84',
            TTF: '2f07c774-96a3-42f6-aa0b-8083f2346dac'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-17f,18f-18f,192-192,1a0-1a1,1af-1b0,1fa-1ff,218-21b,237-237,259-259,2bc-2bc,2c6-2c7,2c9-2c9,2d8-2dd,300-301,303-303,309-309,312-312,323-323,326-326,374-375,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,400-45f,490-493,496-497,49a-49d,4a2-4a3,4ae-4b3,4b6-4bb,4c0-4c0,4cf-4cf,4d8-4d9,4e8-4e9,e3f-e3f,1e80-1e85,1e9e-1e9e,1ef2-1ef3,2010-2010,2013-2015,2017-201e,2020-2022,2026-2026,2030-2030,2032-2033,2039-203a,203c-203e,2044-2044,2070-2070,2074-208e,2099-2099,20a0-20bd,2105-2105,2113-2113,2116-2117,2122-2122,2126-2126,212e-212e,215b-215e,2166-2166,2190-2199,21a8-21a8,2202-2202,2206-2206,220f-220f,2211-2212,2215-2215,2219-221a,221e-221f,2229-2229,222b-222b,2248-2248,2260-2261,2264-2265,2302-2302,2310-2310,2320-2321,25ca-25ca,fb00-fb04",
            ot: "false"
        }
    }, {
        'fontfamily': "Myriad W08 Light",
        contentIds: {
            WOFF: '15d8d76f-cedb-4b89-9907-249e6a46adbb',
            WOFF2: 'fad2e496-dc97-4966-b0a0-daef9334cdc7',
            TTF: 'bfa35483-6ce3-45f0-9e53-7653dc92487b'
        },
        enableSubsetting: false,
        enableOtf: true,
        variationId: 1166622,
        otfJsContentId: 'bfa35483-6ce3-45f0-9e53-7653dc92487b',
        subsetOption: {
            unicode: "20-7e,a0-17e,192-192,1a0-1a1,1af-1b0,1fa-1ff,218-21d,232-233,2c6-2c7,2c9-2c9,2d8-2dd,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,401-40c,40e-44f,451-45c,45e-45f,490-491,4d9-4d9,1e80-1e85,1ea0-1ef9,2010-2010,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,2044-2044,2070-2070,2074-2079,207d-207e,2080-2089,208d-208e,20ab-20ac,20b9-20b9,2113-2113,2116-2116,2122-2122,2126-2126,212e-212e,2202-2202,2206-2206,220f-220f,2211-2212,2215-2215,2219-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,25ca-25ca,e000-e008,e184-e184,e300-e309,e310-e319,e320-e321,efed-efee,eff1-eff3,eff5-eff5,eff7-eff7,f629-f634,f638-f64c,f64e-f66c,f6ae-f6bd,f6c1-f6c3,f6c9-f6d8,f6dc-f6dc,f6df-f6e8,f730-f739,fb00-fb04",
            ot: "true"
        }
    }, {
        'fontfamily': "Myriad W08 Regular",
        contentIds: {
            WOFF: '01932eb5-2a4e-4bd4-b8a8-8e04f69b2d66',
            WOFF2: '31f16622-b72f-4fa0-9e3b-cb48f7d62990',
            TTF: 'b1811139-1d49-42a2-8353-e29ca087433c'
        },
        enableSubsetting: false,
        enableOtf: true,
        variationId: 1167301,
        otfJsContentId: 'b1811139-1d49-42a2-8353-e29ca087433c',
        subsetOption: {
            unicode: "20-7e,a0-17e,192-192,1a0-1a1,1af-1b0,1fa-1ff,218-21d,232-233,2c6-2c7,2c9-2c9,2d8-2dd,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,401-40c,40e-44f,451-45c,45e-45f,490-491,4d9-4d9,1e80-1e85,1ea0-1ef9,2010-2010,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,2044-2044,2070-2070,2074-2079,207d-207e,2080-2089,208d-208e,20ab-20ac,20b9-20b9,2113-2113,2116-2116,2122-2122,2126-2126,212e-212e,2202-2202,2206-2206,220f-220f,2211-2212,2215-2215,2219-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,25ca-25ca,e000-e008,e184-e184,e300-e309,e310-e319,e320-e321,efed-efee,eff1-eff3,eff5-eff5,eff7-eff7,f629-f634,f638-f64c,f64e-f66c,f6ae-f6bd,f6c1-f6c3,f6c9-f6d8,f6dc-f6dc,f6df-f6e8,f730-f739,fb00-fb04",
            ot: "false"
        }
    }, {
        'fontfamily': "Myriad W08 Semibold",
        contentIds: {
            WOFF: '4aa4296f-63c3-43a5-810a-58279e79fa8b',
            WOFF2: 'a98febbb-b853-4188-9645-fe2df19c0301',
            TTF: 'f90d27fc-fd02-4e0b-877a-4213c293ceec'
        },
        enableSubsetting: false,
        enableOtf: true,
        variationId: 1167307,
        otfJsContentId: 'f90d27fc-fd02-4e0b-877a-4213c293ceec',
        subsetOption: {
            unicode: "20-7e,a0-17e,192-192,1a0-1a1,1af-1b0,1fa-1ff,218-21d,232-233,2c6-2c7,2c9-2c9,2d8-2dd,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,401-40c,40e-44f,451-45c,45e-45f,490-491,4d9-4d9,1e80-1e85,1ea0-1ef9,2010-2010,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,2044-2044,2070-2070,2074-2079,207d-207e,2080-2089,208d-208e,20ab-20ac,20b9-20b9,2113-2113,2116-2116,2122-2122,2126-2126,212e-212e,2202-2202,2206-2206,220f-220f,2211-2212,2215-2215,2219-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,25ca-25ca,e000-e008,e184-e184,e300-e309,e310-e319,e320-e321,efed-efee,eff1-eff3,eff5-eff5,eff7-eff7,f629-f634,f638-f64c,f64e-f66c,f6ae-f6bd,f6c1-f6c3,f6c9-f6d8,f6dc-f6dc,f6df-f6e8,f730-f739,fb00-fb04",
            ot: "false"
        }
    }, {
        'fontfamily': "Myriad W08 Bold_1166607",
        contentIds: {
            WOFF: '9dd01b57-2acd-409e-a6b1-24a1f09cd5b8',
            WOFF2: 'dc57799c-1f41-4676-a6b2-17f43d772188',
            TTF: '9d36f96f-09f5-43fc-9ee5-243da6a7b82e'
        },
        enableSubsetting: false,
        enableOtf: true,
        variationId: 1166607,
        otfJsContentId: '9d36f96f-09f5-43fc-9ee5-243da6a7b82e',
        subsetOption: {
            unicode: "20-7e,a0-17e,192-192,1a0-1a1,1af-1b0,1fa-1ff,218-21d,232-233,2c6-2c7,2c9-2c9,2d8-2dd,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,401-40c,40e-44f,451-45c,45e-45f,490-491,4d9-4d9,1e80-1e85,1ea0-1ef9,2010-2010,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,2044-2044,2070-2070,2074-2079,207d-207e,2080-2089,208d-208e,20ab-20ac,20b9-20b9,2113-2113,2116-2116,2122-2122,2126-2126,212e-212e,2202-2202,2206-2206,220f-220f,2211-2212,2215-2215,2219-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,25ca-25ca,e000-e008,e184-e184,e300-e309,e310-e319,e320-e321,efed-efee,eff1-eff3,eff5-eff5,eff7-eff7,f629-f634,f638-f64c,f64e-f66c,f6ae-f6bd,f6c1-f6c3,f6c9-f6d8,f6dc-f6dc,f6df-f6e8,f730-f739,fb00-fb04",
            ot: "false"
        }
    }, {
        'fontfamily': "Myriad W01 Lt It",
        contentIds: {
            WOFF: '3efa8eef-d81a-4a5b-ba15-94c5afa463cf',
            WOFF2: '6ad65c4a-999a-4b06-92ad-075dd9a6c0a7',
            TTF: '0ac3a8d1-ea58-4bc8-b995-cd7fce51290e'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-ff,152-153,160-161,178-178,17d-17e,192-192,2c6-2c6,2dc-2dc,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,20ac-20ac,2122-2122",
            ot: "false"
        }
    }, {
        'fontfamily': "TT Norms W05 Regular",
        contentIds: {
            WOFF: 'c8404df4-5d4a-481e-8c1c-338358900567',
            WOFF2: '4e4a15a5-5f3a-48db-a970-df7108274d92',
            TTF: '38ac445e-4890-4731-9502-b364f715c77d'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-137,139-17e,18f-18f,192-192,1a0-1a1,1af-1b0,1f4-1f5,1fa-1ff,218-21b,232-233,237-237,244-244,259-259,289-289,2bc-2bc,2c6-2c7,2d8-2dd,300-304,306-30c,312-312,31b-31b,323-323,326-328,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,400-45f,462-463,472-475,48a-4a5,4a8-4ff,510-513,51a-51d,524-529,52e-52f,1e80-1e85,1e9e-1e9e,1ea0-1ef9,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,203d-203d,2044-2044,2070-2070,2074-2079,2080-2089,20a9-20a9,20ab-20ac,20b4-20b4,20b8-20ba,20bd-20bd,20bf-20bf,2113-2113,2116-2117,2122-2122,2126-2126,212e-212e,2150-215f,2190-2199,2202-2202,2205-2206,220f-220f,2211-2212,221a-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,2318-2318,2460-2473,24ea-24f4,24ff-24ff,25ca-25ca,2776-277f,f49a-f49b,f4cc-f4cd,f4d4-f4d5,f50e-f511,f516-f51d,f520-f523,f526-f52f,f6d1-f6d1,f6d4-f6d4,f730-f739,f830-f831,f836-f837,f839-f83a,f83c-f83d,f842-f843,fb00-fb03,fb06-fb06",
            ot: "false"
        }
    }, {
        'fontfamily': "TT Norms W05 Normal",
        contentIds: {
            WOFF: '62d260d0-d25a-403d-8ef1-232fa3eb6a30',
            WOFF2: '102caeb7-9c5e-4d5b-960c-1ab2157ccb87',
            TTF: '08717779-1b43-4392-9928-fef9e2b1a2eb'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-137,139-17e,18f-18f,192-192,1a0-1a1,1af-1b0,1fa-1ff,218-21b,232-233,244-244,259-259,289-289,2bc-2bc,2c6-2c7,2d8-2dd,301-302,304-304,306-30a,30c-30c,31b-31b,323-323,326-326,386-386,388-38a,38c-38c,38e-3a1,3a3-3ce,400-45f,462-463,46a-46b,472-475,48a-4d3,4d6-4ff,510-513,1e80-1e85,1e9e-1e9e,1ea0-1ef9,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,203d-203d,2044-2044,2070-2070,2074-2079,2080-2089,20a9-20a9,20ab-20ac,20b4-20b4,20b8-20ba,20bd-20bd,20bf-20bf,2113-2113,2116-2117,2122-2122,2126-2126,212e-212e,2150-215f,2190-2199,2202-2202,2205-2206,220f-220f,2211-2212,221a-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,2318-2318,2460-2473,24ea-24f4,24ff-24ff,25ca-25ca,2776-277f,f49a-f49b,f4cc-f4cd,f4d4-f4d5,f50e-f511,f516-f51d,f520-f523,f526-f52f,f6d1-f6d1,f6d4-f6d4,f730-f739,f830-f831,f836-f837,f839-f83a,f83c-f83d,f842-f843,fb00-fb03,fb06-fb06",
            ot: "false"
        }
    }, {
        'fontfamily': "TT Norms W05 Medium",
        contentIds: {
            WOFF: '6fe3f6f7-4149-42ec-b6fb-f6998918b6f7',
            WOFF2: 'e96d873a-22d7-44e5-afe5-3fe947e1fafd',
            TTF: '33e545ea-519f-42d6-91fb-c8437fbf058f'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-137,139-17e,18f-18f,192-192,1a0-1a1,1af-1b0,1f4-1f5,1fa-1ff,218-21b,232-233,237-237,244-244,259-259,289-289,2bc-2bc,2c6-2c7,2d8-2dd,300-304,306-30c,312-312,31b-31b,323-323,326-328,37e-37e,384-38a,38c-38c,38e-3a1,3a3-3ce,400-45f,462-463,472-475,48a-4a5,4a8-4ff,510-513,51a-51d,524-529,52e-52f,1e80-1e85,1e9e-1e9e,1ea0-1ef9,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,203d-203d,2044-2044,2070-2070,2074-2079,2080-2089,20a9-20a9,20ab-20ac,20b4-20b4,20b8-20ba,20bd-20bd,20bf-20bf,2113-2113,2116-2117,2122-2122,2126-2126,212e-212e,2150-215f,2190-2199,2202-2202,2205-2206,220f-220f,2211-2212,221a-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,2318-2318,2460-2473,24ea-24f4,24ff-24ff,25ca-25ca,2776-277f,f49a-f49b,f4cc-f4cd,f4d4-f4d5,f50e-f511,f516-f51d,f520-f523,f526-f52f,f6d1-f6d1,f6d4-f6d4,f730-f739,f830-f831,f836-f837,f839-f83a,f83c-f83d,f842-f843,fb00-fb03,fb06-fb06",
            ot: "false"
        }
    }, {
        'fontfamily': "Trade Gothic LT W05 Bold",
        contentIds: {
            WOFF: '59cd5e10-9d20-4b86-850d-78b9beb6dfcd',
            WOFF2: '30aba873-93af-406b-b54a-66c5b5e82896',
            TTF: '8a5a2596-7d4b-4689-89da-ba7606665099'
        },
        enableSubsetting: false,
        enableOtf: false,
        subsetOption: {
            unicode: "20-7e,a0-12b,12e-137,139-149,14c-17e,192-192,218-21b,237-237,2c6-2c7,2c9-2c9,2d8-2dd,394-394,3a9-3a9,3bc-3bc,3c0-3c0,1e9e-1e9e,2013-2014,2018-201a,201c-201e,2020-2022,2026-2026,2030-2030,2039-203a,2044-2044,20ac-20ac,20b9-20ba,20bc-20bd,2113-2113,2122-2122,2126-2126,212e-212e,2202-2202,2206-2206,220f-220f,2211-2212,2215-2215,2219-221a,221e-221e,222b-222b,2248-2248,2260-2260,2264-2265,25ca-25ca,e300-e30d,f8ff-f8ff,fb01-fb02",
            ot: "false"
        }
    }],
    selectorFontMap: {},
    ck: 'd44f19a684109620e4841670a190e8182597ce726d3a726202e157f71f158a31ccc849c5468b99a8de900a01902e1fc4c81e487df5776b3b130be29ea0c2226278b848b83c0c57406681e689ee6511be6d451832625c60a1461a66a4ccbc0cc1b60e6a112abe142ef16da9855ef2eeee8df68be0e433ddbb1cd69760110046232a6524b469aa4c673e94f5e9abc026c606082d67eaaf611cbecbb261b728c8064d92c14732b60606a8e88e7f3389553eadde678398c683c2b3880e24caaeabf24ebc0c710d524a733a71e60a861cc7f90276fbd1364779ca25983a88362a79e2c830ab0ded0384201ea3b1c1d038c9f53b947d4c9edf2683f9b6dc067d605983581827d03394c9712c16d4e4ec467b85ee2238466b533642a128c5166f84d2c6245819dbd69d0bd3',
    fcURL: 'http://fast.fonts.net/dv2/',
    projectId: '9207232b-0445-4c65-b8d6-acac7c66a782',
    dfcURL: 'https://api2.fonts.com/FontSubsetter.ashx',
    supportedFormat: "WOFF,WOFF2",
    fontFolder: {
        'ttf': '1',
        'eot': '2',
        'woff': '3',
        'svg': '11',
        'otf': '13',
        'woff2': '14'
    },
    environment: ''
});
t.createAppendFontFace();