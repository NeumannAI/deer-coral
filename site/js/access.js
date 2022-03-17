/**
 * @license
 * Copyright (C) Level Access 2015-2021 - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * By using this code you automatically agree to Section 2 Service Terms, Section 5.2 License and Use Restrictions; and Section 6 Representations, Warranties, Remedies and Disclaimers of Level Access??? Master Subscription Agreement (http://www.levelaccess.com/msa/)
 */
'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$$, $property$$, $descriptor$$) {
    if ($target$$ == Array.prototype || $target$$ == Object.prototype) return $target$$;
    $target$$[$property$$] = $descriptor$$.value;
    return $target$$
};
$jscomp.getGlobal = function($passedInThis_possibleGlobals$$) {
    $passedInThis_possibleGlobals$$ = ["object" == typeof globalThis && globalThis, $passedInThis_possibleGlobals$$, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var $i$$ = 0; $i$$ < $passedInThis_possibleGlobals$$.length; ++$i$$) {
        var $maybeGlobal$$ = $passedInThis_possibleGlobals$$[$i$$];
        if ($maybeGlobal$$ && $maybeGlobal$$.Math == Math) return $maybeGlobal$$
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function($target$$, $property$$) {
    var $obfuscatedName_polyfill$$ = $jscomp.propertyToPolyfillSymbol[$property$$];
    if (null == $obfuscatedName_polyfill$$) return $target$$[$property$$];
    $obfuscatedName_polyfill$$ = $target$$[$obfuscatedName_polyfill$$];
    return void 0 !== $obfuscatedName_polyfill$$ ? $obfuscatedName_polyfill$$ : $target$$[$property$$]
};
$jscomp.polyfill = function($target$$, $polyfill$$, $fromLang$$, $toLang$$) {
    $polyfill$$ && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated($target$$, $polyfill$$, $fromLang$$, $toLang$$) : $jscomp.polyfillUnisolated($target$$, $polyfill$$, $fromLang$$, $toLang$$))
};
$jscomp.polyfillUnisolated = function($property$jscomp$7_split_target$$, $impl_polyfill$$, $fromLang$jscomp$1_obj$$, $i$jscomp$4_orig_toLang$$) {
    $fromLang$jscomp$1_obj$$ = $jscomp.global;
    $property$jscomp$7_split_target$$ = $property$jscomp$7_split_target$$.split(".");
    for ($i$jscomp$4_orig_toLang$$ = 0; $i$jscomp$4_orig_toLang$$ < $property$jscomp$7_split_target$$.length - 1; $i$jscomp$4_orig_toLang$$++) {
        var $key$$ = $property$jscomp$7_split_target$$[$i$jscomp$4_orig_toLang$$];
        if (!($key$$ in $fromLang$jscomp$1_obj$$)) return;
        $fromLang$jscomp$1_obj$$ = $fromLang$jscomp$1_obj$$[$key$$]
    }
    $property$jscomp$7_split_target$$ = $property$jscomp$7_split_target$$[$property$jscomp$7_split_target$$.length - 1];
    $i$jscomp$4_orig_toLang$$ = $fromLang$jscomp$1_obj$$[$property$jscomp$7_split_target$$];
    $impl_polyfill$$ = $impl_polyfill$$($i$jscomp$4_orig_toLang$$);
    $impl_polyfill$$ != $i$jscomp$4_orig_toLang$$ && null != $impl_polyfill$$ && $jscomp.defineProperty($fromLang$jscomp$1_obj$$, $property$jscomp$7_split_target$$, {
        configurable: !0,
        writable: !0,
        value: $impl_polyfill$$
    })
};
$jscomp.polyfillIsolated = function($isSimpleName_target$$, $impl$jscomp$1_polyfill$$, $BIN_ID_fromLang$$, $ownerObject_root$jscomp$3_toLang$$) {
    var $property$jscomp$8_split$$ = $isSimpleName_target$$.split(".");
    $isSimpleName_target$$ = 1 === $property$jscomp$8_split$$.length;
    $ownerObject_root$jscomp$3_toLang$$ = $property$jscomp$8_split$$[0];
    $ownerObject_root$jscomp$3_toLang$$ = !$isSimpleName_target$$ && $ownerObject_root$jscomp$3_toLang$$ in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var $i$$ = 0; $i$$ <
        $property$jscomp$8_split$$.length - 1; $i$$++) {
        var $key$$ = $property$jscomp$8_split$$[$i$$];
        if (!($key$$ in $ownerObject_root$jscomp$3_toLang$$)) return;
        $ownerObject_root$jscomp$3_toLang$$ = $ownerObject_root$jscomp$3_toLang$$[$key$$]
    }
    $property$jscomp$8_split$$ = $property$jscomp$8_split$$[$property$jscomp$8_split$$.length - 1];
    $BIN_ID_fromLang$$ = $jscomp.IS_SYMBOL_NATIVE && "es6" === $BIN_ID_fromLang$$ ? $ownerObject_root$jscomp$3_toLang$$[$property$jscomp$8_split$$] : null;
    $impl$jscomp$1_polyfill$$ = $impl$jscomp$1_polyfill$$($BIN_ID_fromLang$$);
    null != $impl$jscomp$1_polyfill$$ && ($isSimpleName_target$$ ? $jscomp.defineProperty($jscomp.polyfills, $property$jscomp$8_split$$, {
        configurable: !0,
        writable: !0,
        value: $impl$jscomp$1_polyfill$$
    }) : $impl$jscomp$1_polyfill$$ !== $BIN_ID_fromLang$$ && (void 0 === $jscomp.propertyToPolyfillSymbol[$property$jscomp$8_split$$] && ($BIN_ID_fromLang$$ = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[$property$jscomp$8_split$$] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol($property$jscomp$8_split$$) : $jscomp.POLYFILL_PREFIX +
        $BIN_ID_fromLang$$ + "$" + $property$jscomp$8_split$$), $jscomp.defineProperty($ownerObject_root$jscomp$3_toLang$$, $jscomp.propertyToPolyfillSymbol[$property$jscomp$8_split$$], {
        configurable: !0,
        writable: !0,
        value: $impl$jscomp$1_polyfill$$
    })))
};
$jscomp.polyfill("Array.prototype.includes", function($orig$$) {
    return $orig$$ ? $orig$$ : function($searchElement$$, $i$jscomp$6_opt_fromIndex$$) {
        var $array$$ = this;
        $array$$ instanceof String && ($array$$ = String($array$$));
        var $len$$ = $array$$.length;
        $i$jscomp$6_opt_fromIndex$$ = $i$jscomp$6_opt_fromIndex$$ || 0;
        for (0 > $i$jscomp$6_opt_fromIndex$$ && ($i$jscomp$6_opt_fromIndex$$ = Math.max($i$jscomp$6_opt_fromIndex$$ + $len$$, 0)); $i$jscomp$6_opt_fromIndex$$ < $len$$; $i$jscomp$6_opt_fromIndex$$++) {
            var $element$$ = $array$$[$i$jscomp$6_opt_fromIndex$$];
            if ($element$$ === $searchElement$$ || Object.is($element$$, $searchElement$$)) return !0
        }
        return !1
    }
}, "es7", "es3");
var LevelAccess_AccessJS_AccessEngine = function($exports$$) {
    function $aeArFunc$$($ae_ar_node$$) {
        $ae_ar_node$$ = $ae_ar_node$$.getAttribute("data-ae_ar");
        return null === $ae_ar_node$$ ? "null" : $ae_ar_node$$
    }

    function $isRunningTooLong$$() {
        if ($markdownStageExecutionTimeout$$ && $startTime$$) {
            const $didMarkdownStageExecutionTimeOut$jscomp$0$$ = performance.now() - $startTime$$ > $markdownStageExecutionTimeout$$;
            $didMarkdownStageExecutionTimeOut$jscomp$0$$ && ($didMarkdownStageExecutionTimeOut$$ = $didMarkdownStageExecutionTimeOut$jscomp$0$$);
            return $didMarkdownStageExecutionTimeOut$jscomp$0$$
        }
        return !1
    }

    function $getRuntimeExceededMessage$$() {
        return `markdown runtime execution limit of ${$markdownStageExecutionTimeout$$}ms exceeded`
    }

    function $stage1_markDown_liveDOM_copyInfo$$($testWind$$, $testDoc$$, $stage1MarkdownFuncs$$) {
        try {
            $detectShadowDOM$$ = !1;
            $stage1_markDownFunc_errors$$ = {};
            let $addedStage1Funcs$$ = Object.keys($stage1MarkdownFuncs$$),
                $markEach$$ = function($n$$) {
                    do {
                        if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                        if (1 ===
                            $n$$.nodeType) {
                            let $styleFromOriginal$$ = $testWind$$.getComputedStyle($n$$, null),
                                $oI$$ = [];
                            var $JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$ = "hidden" === $styleFromOriginal$$.visibility ? "visibility;hidden" : null;
                            null !== $JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$ && $oI$$.push($JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$);
                            for (let $prop$$ in $blockStyles$$)($JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$ = $styleFromOriginal$$.getPropertyValue($prop$$)) &&
                                $oI$$.push(`${$prop$$};${$JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$}`);
                            for ($JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$ = $addedStage1Funcs$$.length; $JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$--;) {
                                if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                                try {
                                    let $extractedData$$ = $stage1MarkdownFuncs$$[$addedStage1Funcs$$[$JSCompiler_inline_result$jscomp$0_i$jscomp$7_propValue_visibility$$]]($styleFromOriginal$$, $testWind$$,
                                        $n$$);
                                    null !== $extractedData$$ && $oI$$.push($extractedData$$)
                                } catch ($err$$) {
                                    $logger$$.error("Error", $err$$), $stage1_markDownFunc_errors$$.push("name of function")
                                }
                            }
                            $n$$.setAttribute("data-ae_styles", $oI$$.join(";"));
                            $n$$.shadowRoot && (!1 === $detectShadowDOM$$ && ($detectShadowDOM$$ = !0), null !== $n$$.shadowRoot.firstElementChild && $markEach$$($n$$.shadowRoot.firstElementChild));
                            $n$$.hasChildNodes() ? null !== $n$$.firstChild && $markEach$$($n$$.firstChild) : $n$$.childNodes && 0 < $n$$.childNodes.length && $markEach$$($n$$.childNodes[0])
                        }
                    } while ($n$$ =
                        $n$$.nextSibling)
                };
            $markEach$$($testDoc$$.querySelector("body, frameset"));
            return 1
        } catch ($err$$) {
            return $logger$$.error("Error", "stage1_markDown_liveDOM_copyInfo", $err$$), $stage1_markDownFunc_errors$$.markViewable_stage1_MarkDownDOM = $err$$, 0
        }
    }

    function $cloneThisNode$$($node$$, $deep$$) {
        try {
            if (3 === $node$$.nodeType) return document.createTextNode($node$$.textContent);
            var $tree$$ = null,
                $treeTagName$$ = $node$$.tagName.toLowerCase();
            const $createDiv$$ = () => {
                $tree$$ = document.createElement("div");
                $tree$$.setAttribute("data-ae_origTagName",
                    $treeTagName$$)
            };
            if (-1 !== $treeTagName$$.indexOf("-")) $createDiv$$();
            else try {
                $tree$$ = document.createElement($treeTagName$$)
            } catch ($err$$) {
                if ($err$$ instanceof DOMException) $createDiv$$();
                else throw $err$$;
            }
            for (var $attrs$$ = $node$$.attributes, $j$$ = $attrs$$.length; $j$$--;) {
                var $attr$$ = $attrs$$[$j$$];
                if ("is" !== $attr$$.name) try {
                    $tree$$.setAttribute($attr$$.name, $attr$$.value)
                } catch ($err$$) {}
            }
            if (void 0 === $deep$$ || !1 === $deep$$) return $tree$$;
            var $parentEl$$ = $tree$$,
                $origTagName$$ = !1;
            let $markEach$$ = function($n$$) {
                do {
                    if (1 ===
                        $n$$.nodeType) {
                        $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$ = $n$$.tagName;
                        let $childElement$$;
                        if (-1 !== $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$.indexOf("-")) $origTagName$$ = $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$.toLowerCase(), $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$ = "div", $childElement$$ = document.createElement($attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$);
                        else try {
                            $childElement$$ = document.createElement($attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$)
                        } catch ($err$$) {
                            if ($err$$ instanceof DOMException) $origTagName$$ = $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$.toLowerCase(), $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$ = "div", $childElement$$ = document.createElement($attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$);
                            else throw $err$$;
                        }
                        for (var $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$ = $n$$.attributes, $j$$ = $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$.length; $j$$--;) {
                            var $attr$$ = $attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$[$j$$],
                                $attrName$$ = $attr$$.name;
                            $attr$$ = $attr$$.value;
                            if ("is" !== $attrName$$) try {
                                $childElement$$.setAttribute($attrName$$, $attr$$)
                            } catch ($err$$) {}
                        }
                        $n$$.childNodes && 0 < $n$$.childNodes.length ? ($childElement$$.setAttribute("data-ae_uel", $n$$.getAttribute("data-ae_uel")), !1 !== $origTagName$$ && ($childElement$$.setAttribute("data-ae_origTagName", $origTagName$$), $origTagName$$ = !1), $childElement$$.setAttribute("data-ae_justadded", "true"), $parentEl$$.appendChild($childElement$$), $parentEl$$ = $parentEl$$.querySelector("[data-ae_justadded]"),
                            $parentEl$$.removeAttribute("data-ae_justadded"), ($attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$ = $n$$.childNodes[0]) && $markEach$$($attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$)) : (!1 !== $origTagName$$ && ($childElement$$.setAttribute("data-ae_origTagName", $origTagName$$), $origTagName$$ = !1), $childElement$$.innerHTML = $n$$.innerHTML, $parentEl$$.appendChild($childElement$$))
                    }
                    3 === $n$$.nodeType && ($attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$ = document.createTextNode($n$$.textContent),
                        $parentEl$$.appendChild($attrs$jscomp$1_firstChild$jscomp$2_tagName$jscomp$6_textNode$$));
                    null === $n$$.nextSibling && ($parentEl$$ = $getParent$$($parentEl$$))
                } while ($n$$ = $n$$.nextSibling)
            };
            var $firstChild$$ = $node$$.firstChild;
            $firstChild$$ ? $markEach$$($firstChild$$) : $tree$$.innerHTML = $node$$.innerHTML;
            return $tree$$
        } catch ($err$$) {
            return $logger$$.error($err$$), null
        }
    }

    function $cloneThisNodeForMarkDown$$($node$$, $deep$$) {
        if (!1 === $detectShadowDOM$$ || $node$$.nodeType === Node.COMMENT_NODE) return $node$$.cloneNode($deep$$);
        if (3 === $node$$.nodeType) return document.createTextNode($node$$.textContent);
        var $tree$$ = null,
            $attrs$jscomp$2_treeTagName$$ = $node$$.tagName.toLowerCase();
        $tree$$ = document.createElement("div");
        $tree$$.setAttribute("data-ae_origTagName", $attrs$jscomp$2_treeTagName$$);
        $attrs$jscomp$2_treeTagName$$ = $node$$.attributes;
        for (var $j$jscomp$0$$ = $attrs$jscomp$2_treeTagName$$.length; $j$jscomp$0$$--;) {
            if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
            var $attr$$ = $attrs$jscomp$2_treeTagName$$[$j$jscomp$0$$];
            if ("is" !== $attr$$.name) try {
                $tree$$.setAttribute($attr$$.name, $attr$$.value)
            } catch ($err$$) {}
        }
        if (void 0 === $deep$$ || !1 === $deep$$) return $tree$$;
        var $parentEl$$ = $tree$$,
            $origTagName$$ = !1;
        try {
            let $markEach$$ = function($n$$) {
                do {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    if (1 === $n$$.nodeType) {
                        $origTagName$$ = $n$$.tagName.toLowerCase();
                        var $childElement$jscomp$1_firstChild$jscomp$3_textNode$$ = document.createElement("div");
                        $childElement$jscomp$1_firstChild$jscomp$3_textNode$$.setAttribute("data-ae_origTagName",
                            $origTagName$$);
                        for (var $attrs$$ = $n$$.attributes, $j$$ = $attrs$$.length; $j$$--;) {
                            var $attr$jscomp$3_attrValue$$ = $attrs$$[$j$$],
                                $attrName$$ = $attr$jscomp$3_attrValue$$.name;
                            $attr$jscomp$3_attrValue$$ = $attr$jscomp$3_attrValue$$.value;
                            if ("is" !== $attrName$$) try {
                                $childElement$jscomp$1_firstChild$jscomp$3_textNode$$.setAttribute($attrName$$, $attr$jscomp$3_attrValue$$)
                            } catch ($err$$) {}
                        }
                        $n$$.childNodes && 0 < $n$$.childNodes.length ? ($childElement$jscomp$1_firstChild$jscomp$3_textNode$$.setAttribute("data-ae_uel",
                            $n$$.getAttribute("data-ae_uel")), $childElement$jscomp$1_firstChild$jscomp$3_textNode$$.setAttribute("data-ae_justadded", "true"), $parentEl$$.appendChild($childElement$jscomp$1_firstChild$jscomp$3_textNode$$), $parentEl$$ = $parentEl$$.querySelector("[data-ae_justadded]"), $parentEl$$.removeAttribute("data-ae_justadded"), ($childElement$jscomp$1_firstChild$jscomp$3_textNode$$ = $n$$.childNodes[0]) && $markEach$$($childElement$jscomp$1_firstChild$jscomp$3_textNode$$)) : ("script" !== $origTagName$$ && "style" !== $origTagName$$ &&
                            "template" !== $origTagName$$ && "noscript" !== $origTagName$$ && ($childElement$jscomp$1_firstChild$jscomp$3_textNode$$.innerHTML = $n$$.innerHTML), $parentEl$$.appendChild($childElement$jscomp$1_firstChild$jscomp$3_textNode$$))
                    }
                    3 === $n$$.nodeType && ($childElement$jscomp$1_firstChild$jscomp$3_textNode$$ = document.createTextNode($n$$.textContent), $parentEl$$.appendChild($childElement$jscomp$1_firstChild$jscomp$3_textNode$$));
                    null === $n$$.nextSibling && ($parentEl$$ = $getParent$$($parentEl$$))
                } while ($n$$ = $n$$.nextSibling)
            };
            $fixChildren$$($node$$);
            0 < $node$$.children.length ? $markEach$$($node$$.children[0]) : "script" !== $origTagName$$ && "style" !== $origTagName$$ && "template" !== $origTagName$$ && "noscript" !== $origTagName$$ && ($tree$$.innerHTML = $node$$.innerHTML);
            return $tree$$
        } catch ($err$$) {
            return $logger$$.error($err$$), null
        }
    }

    function $retrieveComputedCssStyles$$($node$jscomp$8_oI$$, $pseudoElt$$) {
        $node$jscomp$8_oI$$ = $node$jscomp$8_oI$$.getAttribute("data-ae_styles");
        $node$jscomp$8_oI$$ = null !== $node$jscomp$8_oI$$ ? $node$jscomp$8_oI$$.split(";") : [];
        const $originalInformation$$ = {};
        for (let $j$$ = $node$jscomp$8_oI$$.length; $j$$--;) {
            if (0 !== $j$$ % 2) continue;
            let $propName$$;
            if ($pseudoElt$$)
                if (-1 !== $node$jscomp$8_oI$$[$j$$].indexOf($pseudoElt$$)) $propName$$ = $node$jscomp$8_oI$$[$j$$].replace($pseudoElt$$, "");
                else continue;
            else if (-1 === $node$jscomp$8_oI$$[$j$$].indexOf(":before") && -1 === $node$jscomp$8_oI$$[$j$$].indexOf(":after")) $propName$$ = $node$jscomp$8_oI$$[$j$$];
            else continue;
            if ($propName$$) {
                let $propValue$$ = $node$jscomp$8_oI$$[$j$$ + 1];
                "content" ===
                $propName$$ && ($propValue$$ = $propValue$$.replace(/^"|\\|"$/g, ""));
                $originalInformation$$[$propName$$] = $propValue$$
            }
        }
        return $originalInformation$$
    }

    function $aeSibFunc$$($node$$) {
        var $sib$$ = "1";
        ($node$$ = $node$$.previousElementSibling) && ($node$$ = $node$$.getAttribute("data-ae_sib")) && ($sib$$ = parseInt($node$$) + 1);
        return $sib$$
    }

    function $getParent$$($element$$) {
        let $parentElement$$ = $element$$.parentElement;
        void 0 === $parentElement$$ && ($parentElement$$ = $element$$.parentNode);
        return $parentElement$$
    }

    function $getPositionInParent$$($element$$,
        $tagSpecific$$ = !1) {
        let $position$$ = 1,
            $selectedElement$$ = $element$$;
        for (; null !== ($selectedElement$$ = $selectedElement$$.previousElementSibling);) $tagSpecific$$ && $selectedElement$$.tagName !== $element$$.tagName || $position$$++;
        return $position$$
    }

    function $uelAccurate_FromRoot$$($element$$) {
        if ($specialTagNames$$.includes($element$$.tagName)) return $element$$.tagName.toLowerCase();
        var $locator_locatorSecondPart$$ = `*:nth-child(${$getPositionInParent$$($element$$)})`;
        let $parent$$ = $getParent$$($element$$);
        for (var $locatorFirstPart_previousParent$$ = $element$$;
            "HTML" !== $parent$$.tagName;) {
            $element$$ = $parent$$.tagName;
            if ($specialTagNames$$.includes($element$$)) {
                const $posSecondBracket$$ = $locator_locatorSecondPart$$.indexOf(")") + 1;
                $locator_locatorSecondPart$$ = $locator_locatorSecondPart$$.slice($posSecondBracket$$, $locator_locatorSecondPart$$.length);
                $locatorFirstPart_previousParent$$ = `${$locatorFirstPart_previousParent$$.tagName.toLowerCase()}:nth-of-type(${$getPositionInParent$$($locatorFirstPart_previousParent$$,
!0)})`;
                $locator_locatorSecondPart$$ = `${$element$$.toLowerCase()}>${$locatorFirstPart_previousParent$$}${$locator_locatorSecondPart$$}`
            } else $locator_locatorSecondPart$$ = `*:nth-child(${$getPositionInParent$$($parent$$)})>${$locator_locatorSecondPart$$}`;
            $locatorFirstPart_previousParent$$ = $parent$$;
            $parent$$ = $getParent$$($parent$$)
        }
        return $locator_locatorSecondPart$$
    }

    function $aeBaseUELFunc$$($node$$, $attUel$$, $attSib$$) {
        let $uel$$ = null;
        const $parent$$ = $getParent$$($node$$);
        try {
            var $host_nameTagName$$ =
                $node$$.getRootNode().host
        } catch ($err$$) {
            $host_nameTagName$$ = void 0
        }
        null === $parent$$ && "undefined" !== typeof $host_nameTagName$$ && ($uel$$ = $host_nameTagName$$.getAttribute($attUel$$) + "|");
        $host_nameTagName$$ = $node$$.tagName;
        $specialTagNames$$.includes($host_nameTagName$$) ? $uel$$ = $host_nameTagName$$.toLowerCase() : (null !== $parent$$ && ($uel$$ = $parent$$.getAttribute($attUel$$)), $uel$$ = null === $uel$$ ? $uelAccurate_FromRoot$$($node$$) : "|" === $uel$$.charAt($uel$$.length - 1) ? `${$uel$$}:host>*:nth-child(${$node$$.getAttribute($attSib$$)})` :
            $specialTagNames$$.includes($uel$$.toUpperCase()) ? `${$uel$$}>${$node$$.tagName.toLowerCase()}:nth-of-type(${$getPositionInParent$$($node$$,!0)})` : `${$uel$$}>*:nth-child(${$node$$.getAttribute($attSib$$)})`);
        return $uel$$
    }

    function $findElementThroughTreeBranch$$($startNode$$, $locator$$) {
        var $locatedNode$$ = null;
        (function $markEach$$($n$$) {
            do
                if (1 === $n$$.nodeType) {
                    if ($n$$.getAttribute("data-ae_domuel") === $locator$$) {
                        $locatedNode$$ = $n$$;
                        break
                    }
                    $n$$.shadowRoot && null !== $n$$.shadowRoot.firstElementChild &&
                        $markEach$$($n$$.shadowRoot.firstElementChild);
                    $n$$.hasChildNodes() ? null !== $n$$.firstChild && $markEach$$($n$$.firstChild) : $n$$.childNodes && 0 < $n$$.childNodes.length && $markEach$$($n$$.childNodes[0])
                } while ($n$$ = $n$$.nextSibling)
        })($startNode$$);
        return $locatedNode$$
    }

    function $getElementFromOrigShadowRoot$$($elementShdwrtLocation$$, $testDoc$$) {
        var $element$$ = null;
        try {
            for (var $levels$$ = $elementShdwrtLocation$$.split("|"), $currentShadowDOMHost$$ = null, $i$$ = 0, $len$$ = $levels$$.length; $i$$ < $len$$; $i$$++) {
                var $locator$$ =
                    $levels$$[$i$$];
                if ($i$$ !== $len$$ - 1)
                    if (null === $currentShadowDOMHost$$) $currentShadowDOMHost$$ = $testDoc$$.querySelector($locator$$);
                    else if (0 === $locator$$.indexOf("*:nth-child(") && -1 === $locator$$.indexOf(">")) {
                    var $number$$ = parseInt($locator$$.substring(12, $locator$$.indexOf(")")));
                    $fixChildren$$($currentShadowDOMHost$$);
                    $currentShadowDOMHost$$ = $currentShadowDOMHost$$.shadowRoot.children[$number$$ - 1]
                } else $currentShadowDOMHost$$ = $currentShadowDOMHost$$.shadowRoot.querySelector($locator$$);
                else null ===
                    $currentShadowDOMHost$$ ? $element$$ = $testDoc$$.querySelector($locator$$) : 0 === $locator$$.indexOf("*:nth-child(") && -1 === $locator$$.indexOf(">") ? ($number$$ = parseInt($locator$$.substring(12, $locator$$.indexOf(")"))), $fixChildren$$($currentShadowDOMHost$$), $element$$ = $currentShadowDOMHost$$.shadowRoot.children[$number$$ - 1]) : $element$$ = $currentShadowDOMHost$$.shadowRoot.querySelector($locator$$)
            }
            null === $element$$ && ($element$$ = $findElementThroughTreeBranch$$($testDoc$$.querySelector("body, frameset"), $elementShdwrtLocation$$))
        } catch ($err$$) {
            $logger$$.error("Error",
                "aeUtils: getElementFromOrigShadowRoot", $err$$)
        }
        return $element$$
    }

    function $rebuildShadowDOMFromOrig$$($n$$, $testDoc$$) {
        try {
            const $domuel$$ = $n$$.getAttribute("data-ae_domuel"),
                $origElement$$ = $getElementFromOrigShadowRoot$$($domuel$$, $testDoc$$);
            if ($origElement$$) {
                const $origShadRoot$$ = $origElement$$.shadowRoot;
                if ($origShadRoot$$)
                    if ($n$$.shadowRoot) {
                        $n$$.shadowRoot.innerHTML = "";
                        $fixChildren$$($origShadRoot$$);
                        const $childrenOfOrigElementShadowRoot$$ = $origShadRoot$$.childNodes;
                        for (let $c$$ = 0, $len$$ =
                                $childrenOfOrigElementShadowRoot$$.length; $c$$ < $len$$; $c$$++) $n$$.shadowRoot.appendChild($cloneThisNodeForMarkDown$$($childrenOfOrigElementShadowRoot$$[$c$$], !0))
                    } else {
                        const $addedShadowRoot$$ = $n$$.attachShadow({
                            mode: "open"
                        });
                        $fixChildren$$($origShadRoot$$);
                        const $childrenOfOrigElementShadowRoot$$ = $origShadRoot$$.childNodes;
                        for (let $c$$ = 0, $len$$ = $childrenOfOrigElementShadowRoot$$.length; $c$$ < $len$$; $c$$++) $addedShadowRoot$$.appendChild($cloneThisNodeForMarkDown$$($childrenOfOrigElementShadowRoot$$[$c$$],
                            !0))
                    }
            }
        } catch ($err$$) {
            $logger$$.error("Error", "aeUtils: rebuildShadowDOMFromOrig", $err$$)
        }
    }

    function $isValidIdOrName$$($attValue_id$$) {
        $attValue_id$$ = $attValue_id$$.trim();
        return "" !== $attValue_id$$ && -1 === $attValue_id$$.indexOf(" ") ? !0 : !1
    }

    function $fixChildren$$($node$$) {
        if ("undefined" === typeof $node$$.children) {
            for (var $children$$ = [], $theChildren$$ = $node$$.childNodes, $i$$ = 0, $len_theChildren$$ = $theChildren$$.length; $i$$ < $len_theChildren$$; $i$$++) {
                var $nodeToCheck$$ = $theChildren$$[$i$$];
                1 === $nodeToCheck$$.nodeType &&
                    ($children$$[$children$$.length] = $nodeToCheck$$)
            }
            $node$$.children = $children$$
        }
        return $node$$
    }

    function $isInt$$($value$jscomp$91_x$$) {
        if (isNaN($value$jscomp$91_x$$)) return !1;
        $value$jscomp$91_x$$ = parseFloat($value$jscomp$91_x$$);
        return ($value$jscomp$91_x$$ | 0) === $value$jscomp$91_x$$
    }

    function $removeAEAttributes$$($clone_node$$) {
        $clone_node$$ = $cloneThisNode$$($clone_node$$, !0);
        var $attributes$$ = $clone_node$$.attributes;
        for (var $i$jscomp$11_j$$ = $attributes$$.length; $i$jscomp$11_j$$--;) {
            var $desc_name$$ =
                $attributes$$[$i$jscomp$11_j$$].name;
            "data-ae_" !== $desc_name$$.substring(0, 8) && "data-la-" !== $desc_name$$.substring(0, 8) || $clone_node$$.removeAttribute($desc_name$$)
        }
        $attributes$$ = $clone_node$$.querySelectorAll("*");
        for ($i$jscomp$11_j$$ = $attributes$$.length; $i$jscomp$11_j$$--;) {
            $desc_name$$ = $attributes$$[$i$jscomp$11_j$$];
            const $descAttributes$$ = $desc_name$$.attributes;
            for (let $k$$ = $descAttributes$$.length; $k$$--;) {
                const $dname$$ = $descAttributes$$[$k$$].name;
                "data-ae_" !== $dname$$.substring(0, 8) && "data-la-" !==
                    $dname$$.substring(0, 8) || $desc_name$$.removeAttribute($dname$$)
            }
        }
        return $clone_node$$
    }

    function $stage0_markDown_liveDOM_domuels$$($testDoc$$) {
        try {
            $startTime$$ = performance.now();
            $didMarkdownStageExecutionTimeOut$$ = !1;
            $stage0_markDownFunc_errors$$ = {};
            const $headNode$$ = $testDoc$$.querySelector("head");
            if ($headNode$$) {
                const $firstHeadChild$$ = $headNode$$.firstChild;
                if ($firstHeadChild$$) {
                    const $markEachInHead$$ = function($n$$) {
                        do {
                            if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                            if (1 === $n$$.nodeType) {
                                "base link meta noscript script style template title".split(" ").includes($n$$.tagName.toLowerCase()) ||
                                    $n$$.setAttribute("data-ae_removefromclone", "true");
                                if ($n$$.shadowRoot) {
                                    var $firstChild$jscomp$5_firstChild$jscomp$6_firstChild$$ = $n$$.shadowRoot.firstElementChild;
                                    $firstChild$jscomp$5_firstChild$jscomp$6_firstChild$$ && $markEachInHead$$($firstChild$jscomp$5_firstChild$jscomp$6_firstChild$$)
                                }
                                $n$$.hasChildNodes() ? ($firstChild$jscomp$5_firstChild$jscomp$6_firstChild$$ = $n$$.firstChild) && $markEachInHead$$($firstChild$jscomp$5_firstChild$jscomp$6_firstChild$$) : $n$$.childNodes && 0 < $n$$.childNodes.length &&
                                    ($firstChild$jscomp$5_firstChild$jscomp$6_firstChild$$ = $n$$.childNodes[0]) && $markEachInHead$$($firstChild$jscomp$5_firstChild$jscomp$6_firstChild$$)
                            }
                        } while ($n$$ = $n$$.nextSibling)
                    };
                    $markEachInHead$$($firstHeadChild$$)
                }
            }
            let $markEach$$ = function($n$$) {
                do {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    if (1 === $n$$.nodeType) {
                        $n$$.hasAttribute("data-ae_ignore") && $n$$.hasAttribute("src") && $n$$.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
                        $n$$.tagName && ["audio", "video"].includes($n$$.tagName.toLowerCase()) && ($JSCompiler_temp_const$jscomp$2_calcUel_duration$$ = $n$$.duration) && 3 < $JSCompiler_temp_const$jscomp$2_calcUel_duration$$ && $n$$.setAttribute("data-ae_durationtoolong", $JSCompiler_temp_const$jscomp$2_calcUel_duration$$);
                        var $JSCompiler_temp_const$jscomp$2_calcUel_duration$$ = $n$$,
                            $JSCompiler_temp_const$$ = $JSCompiler_temp_const$jscomp$2_calcUel_duration$$.setAttribute,
                            $sib$$ = "1",
                            $prevSib$jscomp$inline_30_previousSibling$$ = $n$$.previousElementSibling;
                        $prevSib$jscomp$inline_30_previousSibling$$ && ($prevSib$jscomp$inline_30_previousSibling$$ = $prevSib$jscomp$inline_30_previousSibling$$.getAttribute("data-ae_domsib")) && ($sib$$ = parseInt($prevSib$jscomp$inline_30_previousSibling$$) + 1);
                        $JSCompiler_temp_const$$.call($JSCompiler_temp_const$jscomp$2_calcUel_duration$$, "data-ae_domsib", $sib$$);
                        $JSCompiler_temp_const$jscomp$2_calcUel_duration$$ = $aeBaseUELFunc$$($n$$, "data-ae_domuel", "data-ae_domsib");
                        $n$$.setAttribute("data-ae_domuel", $JSCompiler_temp_const$jscomp$2_calcUel_duration$$);
                        $n$$.shadowRoot && ($n$$.setAttribute("data-ae_shdwrt", $JSCompiler_temp_const$jscomp$2_calcUel_duration$$), null !== $n$$.shadowRoot.firstElementChild && $markEach$$($n$$.shadowRoot.firstElementChild));
                        $n$$.hasChildNodes() ? null !== $n$$.firstChild && $markEach$$($n$$.firstChild) : $n$$.childNodes && 0 < $n$$.childNodes.length && $markEach$$($n$$.childNodes[0])
                    }
                } while ($n$$ = $n$$.nextSibling)
            };
            $markEach$$($testDoc$$.querySelector("body, frameset"));
            return 1
        } catch ($err$$) {
            return $logger$$.error("Error", "stage0_markDown_liveDOM_domuels",
                $err$$), $stage0_markDownFunc_errors$$.markViewable_stage0_MarkDownDOM = $err$$, 0
        }
    }

    function $stage3_cleanUpLiveDOM$$($testDoc$$) {
        try {
            $stage3_markDownFunc_errors$$ = {};
            const $markEachInHead$$ = function($n$$) {
                do
                    if (1 === $n$$.nodeType) {
                        $n$$.removeAttribute("data-ae_removefromclone");
                        if ($n$$.shadowRoot) {
                            var $firstChild$jscomp$10_firstChild$jscomp$11_firstChild$$ = $n$$.shadowRoot.firstElementChild;
                            $firstChild$jscomp$10_firstChild$jscomp$11_firstChild$$ && $markEachInHead$$($firstChild$jscomp$10_firstChild$jscomp$11_firstChild$$)
                        }
                        $n$$.hasChildNodes() ?
                            ($firstChild$jscomp$10_firstChild$jscomp$11_firstChild$$ = $n$$.firstChild) && $markEachInHead$$($firstChild$jscomp$10_firstChild$jscomp$11_firstChild$$) : $n$$.childNodes && 0 < $n$$.childNodes.length && ($firstChild$jscomp$10_firstChild$jscomp$11_firstChild$$ = $n$$.childNodes[0]) && $markEachInHead$$($firstChild$jscomp$10_firstChild$jscomp$11_firstChild$$)
                    } while ($n$$ = $n$$.nextSibling)
            };
            $markEachInHead$$($testDoc$$.querySelector("head"));
            const $markEach$$ = function($n$$) {
                do
                    if (1 === $n$$.nodeType) {
                        $n$$.removeAttribute("data-ae_durationtoolong");
                        $n$$.removeAttribute("data-ae_styles");
                        $n$$.removeAttribute("data-ae_shdwrt");
                        $n$$.removeAttribute("data-ae_domuel");
                        $n$$.removeAttribute("data-ae_domsib");
                        if ($n$$.shadowRoot) {
                            var $firstChild$jscomp$12_firstChild$jscomp$13_firstChild$$ = $n$$.shadowRoot.firstElementChild;
                            $firstChild$jscomp$12_firstChild$jscomp$13_firstChild$$ && $markEach$$($firstChild$jscomp$12_firstChild$jscomp$13_firstChild$$)
                        }
                        $n$$.hasChildNodes() ? ($firstChild$jscomp$12_firstChild$jscomp$13_firstChild$$ = $n$$.firstChild) && $markEach$$($firstChild$jscomp$12_firstChild$jscomp$13_firstChild$$) :
                            $n$$.childNodes && 0 < $n$$.childNodes.length && ($firstChild$jscomp$12_firstChild$jscomp$13_firstChild$$ = $n$$.childNodes[0]) && $markEach$$($firstChild$jscomp$12_firstChild$jscomp$13_firstChild$$)
                    } while ($n$$ = $n$$.nextSibling)
            };
            $markEach$$($testDoc$$.querySelector("body, frameset"));
            return 1
        } catch ($err$$) {
            return $stage3_markDownFunc_errors$$.markViewable_stage2_CleanUpLiveDOM = $err$$, 0
        }
    }

    function $stage3a_CopyOverShadowHosts$$($rootTestNode$$, $testDoc$$) {
        try {
            $stage3a_markDownFunc_errors$$ = {};
            let $markEach$$ =
                function($n$$) {
                    do {
                        if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                        1 === $n$$.nodeType && ($rebuildShadowDOMFromOrig$$($n$$, $testDoc$$), $n$$.shadowRoot && null !== $n$$.shadowRoot.firstElementChild && $markEach$$($n$$.shadowRoot.firstElementChild), $n$$.hasChildNodes() ? null !== $n$$.firstChild && $markEach$$($n$$.firstChild) : $n$$.childNodes && 0 < $n$$.childNodes.length && $markEach$$($n$$.childNodes[0]))
                    } while ($n$$ = $n$$.nextSibling)
                };
            $markEach$$($rootTestNode$$.querySelector('[data-ae_origTagName="body"], [data-ae_origTagName="frameset"]'));
            return $rootTestNode$$
        } catch ($err$$) {
            return $logger$$.error("Error", "stage3a_markDownFunc_errors", $err$$), $stage3a_markDownFunc_errors$$.markViewable_stage3a_MarkDownDOM = $err$$, null
        }
    }

    function $buildOutVirtualDOMNode$$($node$$, $childNs_shadDOM$$, $testDoc$$) {
        $childNs_shadDOM$$ = $childNs_shadDOM$$.childNodes;
        for (var $c$$ = 0, $len$$ = $childNs_shadDOM$$.length; $c$$ < $len$$; $c$$++) {
            var $childN_childTextNClone$$ = $childNs_shadDOM$$[$c$$];
            if ("undefined" !== typeof $childN_childTextNClone$$) {
                var $nodeType$$ = $childN_childTextNClone$$.nodeType;
                if ("undefined" !== typeof $nodeType$$) {
                    if (1 === $nodeType$$) {
                        var $childNClone_elInClone$$ = null;
                        $childNClone_elInClone$$ = $cloneThisNodeForMarkDown$$($childN_childTextNClone$$, !0);
                        $childNClone_elInClone$$.setAttribute("data-ae_tempcloneid", "");
                        $node$$.appendChild($childNClone_elInClone$$);
                        if ($childNClone_elInClone$$ = $node$$.querySelector("[data-ae_tempcloneid]"))
                            if ($childNClone_elInClone$$.removeAttribute("data-ae_tempcloneid"), $childNClone_elInClone$$.shadowRoot && $rebuildShadowDOMFromOrig$$($childNClone_elInClone$$,
                                    $testDoc$$), 0 < $childNClone_elInClone$$.children.length) {
                                let $markEachChild$$ = function($n$$) {
                                    do 1 === $n$$.nodeType && ($fixChildren$$($n$$), $rebuildShadowDOMFromOrig$$($n$$, $testDoc$$), 0 < $n$$.children.length && $markEachChild$$($n$$.children[0])); while ($n$$ = $n$$.nextSibling)
                                };
                                $markEachChild$$($childNClone_elInClone$$.children[0])
                            }
                    }
                    3 === $nodeType$$ && ($childN_childTextNClone$$ = $cloneThisNodeForMarkDown$$($childN_childTextNClone$$, !0), $node$$.appendChild($childN_childTextNClone$$))
                }
            }
        }
        return $node$$
    }

    function $stage3c_BuildOutShadowDOM$$($rootTestNode$$,
        $testDoc$jscomp$0$$) {
        try {
            $stage3c_markDownFunc_errors$$ = {};
            let $markEach$$ = function($n$$) {
                do {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    if (1 === $n$$.nodeType) {
                        $rebuildShadowDOMFromOrig$$($n$$, $testDoc$jscomp$0$$);
                        if ($n$$.shadowRoot) {
                            for (var $firstChild$jscomp$16_node$$ = $n$$, $shadDOM$$ = $n$$.shadowRoot, $testDoc$$ = $testDoc$jscomp$0$$; $shadDOM$$.querySelector('[data-ae_origTagName="slot"]');) {
                                var $slotToReplace$$ = $shadDOM$$.querySelector('[data-ae_origTagName="slot"]'),
                                    $parent$$ = $getParent$$($slotToReplace$$);
                                null === $parent$$ && ($parent$$ = $shadDOM$$);
                                var $contentInSlot$jscomp$inline_38_slotFromLiveDOM$$ = $getElementFromOrigShadowRoot$$($slotToReplace$$.getAttribute("data-ae_domuel"), $testDoc$$);
                                if ($contentInSlot$jscomp$inline_38_slotFromLiveDOM$$ && "assignedNodes" in $contentInSlot$jscomp$inline_38_slotFromLiveDOM$$ && ($contentInSlot$jscomp$inline_38_slotFromLiveDOM$$ = $contentInSlot$jscomp$inline_38_slotFromLiveDOM$$.assignedNodes({
                                        flatten: !0
                                    }), "undefined" !== typeof $contentInSlot$jscomp$inline_38_slotFromLiveDOM$$))
                                    for (var $i$$ =
                                            0, $len$$ = $contentInSlot$jscomp$inline_38_slotFromLiveDOM$$.length; $i$$ < $len$$; $i$$++) {
                                        var $contentInSlotClone$$ = $cloneThisNodeForMarkDown$$($contentInSlot$jscomp$inline_38_slotFromLiveDOM$$[$i$$], !0);
                                        $parent$$.insertBefore($contentInSlotClone$$, $slotToReplace$$.nextSibling)
                                    }
                                $parent$$.removeChild($slotToReplace$$)
                            }
                            $firstChild$jscomp$16_node$$.innerHTML = "";
                            $buildOutVirtualDOMNode$$($n$$, $n$$.shadowRoot, $testDoc$jscomp$0$$);
                            $n$$.shadowRoot.innerHTML = ""
                        }
                        $fixChildren$$($n$$);
                        0 < $n$$.children.length && ($firstChild$jscomp$16_node$$ =
                            $n$$.children[0], null !== $firstChild$jscomp$16_node$$ && $markEach$$($firstChild$jscomp$16_node$$))
                    }
                } while ($n$$ = $n$$.nextSibling)
            };
            $markEach$$($rootTestNode$$.querySelector('[data-ae_origTagName="body"], [data-ae_origTagName="frameset"]'));
            return $rootTestNode$$
        } catch ($err$$) {
            return $logger$$.error("Error", "stage3c_markDownFunc_errors", $err$$), $stage3c_markDownFunc_errors$$.stage3c_BuildOutShadowDOM = $err$$, null
        }
    }

    function $stage3d_RevertElementsToOrigTagName$$($node$$) {
        $stage3d_markDownFunc_errors$$ = {};
        var $tree$jscomp$2_treeTagName$$ = $node$$.getAttribute("data-ae_origTagName");
        $tree$jscomp$2_treeTagName$$ = document.createElement($tree$jscomp$2_treeTagName$$);
        for (var $attrs$jscomp$4_markEach$$ = $node$$.attributes, $j$$ = $attrs$jscomp$4_markEach$$.length; $j$$--;) {
            var $attr$jscomp$0$$ = $attrs$jscomp$4_markEach$$[$j$$];
            $tree$jscomp$2_treeTagName$$.setAttribute($attr$jscomp$0$$.name, $attr$jscomp$0$$.value)
        }
        var $parentEl$$ = $tree$jscomp$2_treeTagName$$;
        try {
            return $attrs$jscomp$4_markEach$$ = function $markEach$$($n$$) {
                do {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    if (1 === $n$$.nodeType && ($fixChildren$$($n$$), $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ = $n$$.getAttribute("data-ae_origTagName"), "html" !== $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$)) {
                        let $childElement$$;
                        if (-1 !== $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$.indexOf("-")) $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ = "div", $childElement$$ = document.createElement($attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$);
                        else try {
                            $childElement$$ =
                                document.createElement($attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$)
                        } catch ($err$$) {
                            if ($err$$ instanceof DOMException) $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ = "div", $childElement$$ = document.createElement($attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$);
                            else throw $err$$;
                        }
                        for (var $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ = $n$$.attributes, $childVal_j$$ = $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$.length; $childVal_j$$--;) {
                            var $attr$$ =
                                $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$[$childVal_j$$];
                            $childElement$$.setAttribute($attr$$.name, $attr$$.value)
                        }
                        0 < $n$$.childNodes.length ? ($childElement$$.setAttribute("data-ae_justadded", "true"), $parentEl$$.appendChild($childElement$$), $parentEl$$ = $parentEl$$.querySelector("[data-ae_justadded]"), $parentEl$$.removeAttribute("data-ae_justadded"), $markEach$$($n$$.childNodes[0])) : ($childElement$$.innerHTML = $n$$.innerHTML, "INPUT" === $childElement$$.tagName && !0 === $childElement$$.hasAttribute("value") &&
                            ($attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ = $n$$.getAttribute("value"), $childVal_j$$ = $childElement$$.getAttribute("value"), $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ !== $childVal_j$$ && $childElement$$.setAttribute("value", $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$)), $parentEl$$.appendChild($childElement$$))
                    }
                    3 === $n$$.nodeType && ($attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ = $n$$.parentElement.getAttribute("data-ae_origTagName"),
                        "style" !== $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ && "script" !== $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ && "noscript" !== $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ && "template" !== $attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ && ($attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$ = document.createTextNode($n$$.textContent), $parentEl$$.appendChild($attrs$jscomp$5_nVal_orig$jscomp$2_tagName$jscomp$8_textNode$$)));
                    null ===
                        $n$$.nextSibling && ($parentEl$$ = $getParent$$($parentEl$$))
                } while ($n$$ = $n$$.nextSibling)
            }, $fixChildren$$($node$$), 0 < $node$$.children.length && $attrs$jscomp$4_markEach$$($node$$.children[0]), $tree$jscomp$2_treeTagName$$ = (new DOMParser).parseFromString($tree$jscomp$2_treeTagName$$.outerHTML, "text/html").documentElement
        } catch ($err$$) {
            return $logger$$.error("Error: stage3d_markDownFunc_errors", $err$$), $stage3d_markDownFunc_errors$$.stage3d_RevertElementsToOrigTagName = $err$$, null
        }
    }

    function $stage5_markDown_clonedDOM$$($rootTestNode$$,
        $stage5MarkdownFuncs$$) {
        try {
            $stage5_markDownFunc_errors$$ = {};
            let $addedStage5Funcs$$ = Object.keys($stage5MarkdownFuncs$$);

            function $runOffFunc$$($n$$) {
                do {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    if (1 === $n$$.nodeType) {
                        $n$$.setAttribute("data-ae_ar", $aeArFunc$$($n$$));
                        null === $n$$.getAttribute("data-ae_invis") && $n$$.setAttribute("data-ae_vis", "true");
                        $n$$.setAttribute("data-ae_sib", $aeSibFunc$$($n$$));
                        $n$$.setAttribute("data-ae_uel", $aeBaseUELFunc$$($n$$, "data-ae_uel", "data-ae_sib"));
                        var $firstChild$jscomp$17_originalInformation$$ = $retrieveComputedCssStyles$$($n$$);
                        for (let $i$$ = $addedStage5Funcs$$.length; $i$$--;) {
                            if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                            var $attrToAdd$$ = $stage5MarkdownFuncs$$[$addedStage5Funcs$$[$i$$]]($firstChild$jscomp$17_originalInformation$$, $n$$);
                            null !== $attrToAdd$$ && $n$$.setAttribute($attrToAdd$$[0], $attrToAdd$$[1])
                        }($firstChild$jscomp$17_originalInformation$$ = $n$$.firstChild) && $runOffFunc$$($firstChild$jscomp$17_originalInformation$$)
                    } else 3 ===
                        $n$$.nodeType && ($n$$.textContent = $n$$.textContent.trim())
                } while ($n$$ = $n$$.nextSibling)
            }
            $runOffFunc$$($rootTestNode$$.querySelector("body, frameset"));
            return $rootTestNode$$
        } catch ($err$$) {
            return $stage5_markDownFunc_errors$$.stage5_markDown_clonedDOM = $err$$, null
        }
    }

    function $stage6_markDown_clonedDOM$$($rootTestNode$$, $stage6MarkdownFuncs$$) {
        try {
            $stage6_markDownFunc_errors$$ = {};
            "HTML" === $rootTestNode$$.tagName && $rootTestNode$$.setAttribute("data-ae_uel", "html");
            let $addedStage6Funcs$$ = Object.keys($stage6MarkdownFuncs$$);

            function $runOffFunc$$($n$$) {
                do {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    if (1 === $n$$.nodeType) {
                        if ("BODY" === $n$$.tagName) break;
                        $n$$.setAttribute("data-ae_sib", $aeSibFunc$$($n$$));
                        $n$$.setAttribute("data-ae_uel", $aeBaseUELFunc$$($n$$, "data-ae_uel", "data-ae_sib"));
                        $n$$.setAttribute("data-ae_ar", $aeArFunc$$($n$$));
                        for (let $i$$ = $addedStage6Funcs$$.length; $i$$--;) {
                            if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                            var $attrToAdd$$ = $stage6MarkdownFuncs$$[$addedStage6Funcs$$[$i$$]]($n$$);
                            null !== $attrToAdd$$ && $n$$.setAttribute($attrToAdd$$[0], $attrToAdd$$[1])
                        }
                        $n$$.hasChildNodes() && $runOffFunc$$($n$$.firstChild)
                    }
                } while ($n$$ = $n$$.nextSibling)
            }
            $runOffFunc$$($rootTestNode$$.querySelector("head"));
            $startTime$$ = null;
            $didMarkdownStageExecutionTimeOut$$ = !1;
            return $rootTestNode$$
        } catch ($err$$) {
            return $startTime$$ = null, $didMarkdownStageExecutionTimeOut$$ = !1, $stage6_markDownFunc_errors$$.stage6_markDown_clonedDOM = $err$$, null
        }
    }

    function $fromStyles$$($computedStyle_computedStyles$$, $props$jscomp$2_pseudoEltFormattedContent_testWind$$,
        $node$$, $pseudoElt$$) {
        $computedStyle_computedStyles$$ = $props$jscomp$2_pseudoEltFormattedContent_testWind$$.getComputedStyle($node$$, $pseudoElt$$);
        $props$jscomp$2_pseudoEltFormattedContent_testWind$$ = $computedStyle_computedStyles$$.getPropertyValue("content").replace(/^"|\\|"$/g, "");
        if ("" === $props$jscomp$2_pseudoEltFormattedContent_testWind$$ || "none" === $props$jscomp$2_pseudoEltFormattedContent_testWind$$) return null;
        $props$jscomp$2_pseudoEltFormattedContent_testWind$$ = [`content${$pseudoElt$$};${$props$jscomp$2_pseudoEltFormattedContent_testWind$$}`];
        for (let $prop$$ in $blockStyles$$) $props$jscomp$2_pseudoEltFormattedContent_testWind$$.push(`${$prop$$}${$pseudoElt$$};${$computedStyle_computedStyles$$.getPropertyValue($prop$$)}`);
        return $props$jscomp$2_pseudoEltFormattedContent_testWind$$.join(";")
    }

    function $getBefore_FromStyles$$($computedStyles$$, $testWind$$, $node$$) {
        return $fromStyles$$($computedStyles$$, $testWind$$, $node$$, ":before")
    }

    function $getAfter_FromStyles$$($computedStyles$$, $testWind$$, $node$$) {
        return $fromStyles$$($computedStyles$$,
            $testWind$$, $node$$, ":after")
    }

    function $invokeCalcNames$$($rootTestDocument$$, $node$jscomp$0$$) {
        return $calcNames$$($node$jscomp$0$$, null, !1, {
            document: $rootTestDocument$$,
            isHidden: function($node$$, $refNode$$) {
                return $node$$ && 1 === $node$$.nodeType && $node$$ !== $refNode$$ ? $node$$.hasAttribute("data-ae_invis") : !1
            },
            getStyleObject: function($node$$) {
                return $retrieveComputedCssStyles$$($node$$)
            },
            getPseudoElStyleObj: function($node$$, $position$$) {
                return $retrieveComputedCssStyles$$($node$$, $position$$)
            }
        })
    }

    function $calcAccNamesForCertainElements$$($rootTestNode$$) {
        try {
            const $els$$ =
                $rootTestNode$$.querySelectorAll("a:not([data-ae_ar]), area:not([data-ae_ar]), audio:not([data-ae_ar]), button:not([data-ae_ar]), canvas:not([data-ae_ar]), embed:not([data-ae_ar]), fieldset:not([data-ae_ar]), frame:not([data-ae_ar]), iframe, img:not([data-ae_ar]), input:not([data-ae_ar]), meter:not([data-ae_ar]), object:not([data-ae_ar]), optgroup:not([data-ae_ar]), progress:not([data-ae_ar]), select:not([data-ae_ar]), svg:not([data-ae_ar]), svg[data-ae_ar*='graphics-'], textarea:not([data-ae_ar]), video:not([data-ae_ar]), *[data-ae_ar^='img'], *[data-ae_ar='link'], *[data-ae_ar='radiogroup'], *[data-ae_ar='checkbox'], *[data-ae_ar='radio'], *[data-ae_ar='slider'], *[data-ae_ar='textbox'], *[data-ae_ar='combobox'], *[data-ae_ar='button'], *[data-ae_ar='spinbutton'], aside:not(data-ae_ar), main:not([data-ae_ar]), nav:not([data-ae_ar]), *[data-ae_ar='dialog'], dialog:not([data-ae_ar]), picture:not([data-ae_ar]), figure:not([data-ae_ar]), summary:not([data-ae_ar]), *[data-ae_ar^='graphics'], *[data-ae_ar='region'], *[data-ae_ar='progressbar']");
            for (let $i$$ = $els$$.length; $i$$--;) {
                if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                const $el$$ = $els$$[$i$$],
                    $payload$$ = $invokeCalcNames$$($rootTestNode$$.ownerDocument, $el$$);
                if ($payload$$.error) throw $payload$$.error;
                const $accessibleName$$ = $payload$$.name || null;
                null !== $accessibleName$$ && ($el$$.setAttribute("data-ae_an", $accessibleName$$.toLowerCase()), $payload$$.placeholder && $el$$.setAttribute("data-ae_anp", "true"), $payload$$.userAgent && $el$$.setAttribute("data-ae_anua", "true"))
            }
            return $rootTestNode$$
        } catch ($err$$) {
            return $logger$$.error("stage4_calcAccNamesForCertainElements",
                $err$$), null
        }
    }

    function $testUtil_ifDiff$$($res2AsArray_rootTestNode$$, $funcArgs$jscomp$3_i$$) {
        var $diff$$ = [],
            $res1$$ = $res2AsArray_rootTestNode$$.querySelectorAll($funcArgs$jscomp$3_i$$[0]);
        $funcArgs$jscomp$3_i$$ = $res2AsArray_rootTestNode$$.querySelectorAll($funcArgs$jscomp$3_i$$[1]);
        $res2AsArray_rootTestNode$$ = [];
        for (var $len_res1_x$$ = 0, $len_res2_res$$ = $funcArgs$jscomp$3_i$$.length; $len_res1_x$$ < $len_res2_res$$; $len_res1_x$$++) $res2AsArray_rootTestNode$$[$res2AsArray_rootTestNode$$.length] = $funcArgs$jscomp$3_i$$[$len_res1_x$$];
        $funcArgs$jscomp$3_i$$ = 0;
        for ($len_res1_x$$ = $res1$$.length; $funcArgs$jscomp$3_i$$ < $len_res1_x$$; $funcArgs$jscomp$3_i$$++) $len_res2_res$$ = $res1$$[$funcArgs$jscomp$3_i$$], -1 === $res2AsArray_rootTestNode$$.indexOf($len_res2_res$$) && ($diff$$[$diff$$.length] = $len_res2_res$$);
        return $diff$$
    }

    function $identifiesDataTables$$($rootTestNode$$) {
        try {
            const $potentialTables$$ = $rootTestNode$$.querySelectorAll("table");
            for (let $i$$ = 0, $len_potTables$$ = $potentialTables$$.length; $i$$ < $len_potTables$$; $i$$++) {
                if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                const $potentialTable$$ = $potentialTables$$[$i$$],
                    $cells$$ = $potentialTable$$.querySelectorAll("td"),
                    $numberOfCells$$ = $cells$$.length;
                let $numberOfCellsWhichContainOnlyText$$ = 0;
                const $cell$$ = document.createElement("td");
                for (let $j$$ = $numberOfCells$$; $j$$--;) {
                    $cell$$.innerHTML = $cells$$[$j$$].innerHTML;
                    const $thingsToStrip$$ = $cell$$.querySelectorAll("b,em,i,span,strong,br,a,bdi,label");
                    for (let $k$$ = $thingsToStrip$$.length; $k$$--;) $thingsToStrip$$[$k$$].outerHTML = $thingsToStrip$$[$k$$].innerHTML;
                    $cell$$.normalize();
                    1 === $cell$$.childNodes.length && 3 === $cell$$.childNodes[0].nodeType && ($numberOfCellsWhichContainOnlyText$$ += 1)
                }
                65 < Math.round($numberOfCellsWhichContainOnlyText$$ / $numberOfCells$$ * 100) && $potentialTable$$.setAttribute("data-ae_dtab", "true")
            }
            return $rootTestNode$$
        } catch ($err$$) {
            return $logger$$.error($err$$), null
        }
    }

    function $addAEEventAtts$$($rootTestNode$$) {
        try {
            for (var $els$$ = $rootTestNode$$.querySelectorAll("*[data-ae_styles*='events;'], *[onclick]:not([onclick='']), *[ondblclick]:not([ondblclick='']), *[onmouseout]:not([onmouseout='']), *[onmouseover]:not([onmouseover='']), *[onmousedown]:not([onmousedown='']), *[onmouseup]:not([onmouseup='']), *[onkeydown]:not([onkeydown='']), *[onkeypress]:not([onkeypress='']), *[onkeyup]:not([onkeyup='']), *[onblur]:not([onblur='']), *[onfocus]:not([onfocus=''])"),
                    $i$$ = $els$$.length; $i$$--;) {
                if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                var $el$$ = $els$$[$i$$],
                    $eventList$$ = [],
                    $events$$ = $retrieveComputedCssStyles$$($el$$).events;
                $events$$ && ($eventList$$ = $eventList$$.concat($events$$.split(",")));
                for (var $intrinsicEvents$$ = "onclick ondblclick onmouseout onmouseover onmousedown onmouseup onkeydown onkeypress onkeyup onblur onfocus".split(" "), $k$$ = $intrinsicEvents$$.length; $k$$--;) {
                    var $intEv$$ = $intrinsicEvents$$[$k$$];
                    if ($el$$.getAttribute($intEv$$)) {
                        var $shortIntEv$$ =
                            $intEv$$.substr(2); - 1 === $eventList$$.indexOf($shortIntEv$$) && $eventList$$.push($shortIntEv$$)
                    }
                }
                $el$$.setAttribute("data-ae_ev", $eventList$$.toString())
            }
            return $rootTestNode$$
        } catch ($err$$) {
            return $logger$$.error($err$$), null
        }
    }

    function $correctChildren$$($nodes$jscomp$16_tag$$, $allowed$$, $i$jscomp$61_rootTestNode$$, $testChildFilter$$) {
        const $badnodes$$ = [];
        $nodes$jscomp$16_tag$$ = $i$jscomp$61_rootTestNode$$.querySelectorAll($nodes$jscomp$16_tag$$ + '[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
        for ($i$jscomp$61_rootTestNode$$ = 0; $i$jscomp$61_rootTestNode$$ < $nodes$jscomp$16_tag$$.length; $i$jscomp$61_rootTestNode$$++) {
            const $tagchildren$$ = $nodes$jscomp$16_tag$$[$i$jscomp$61_rootTestNode$$].children;
            let $fail$$ = !1;
            for (let $j$$ = 0; $j$$ < $tagchildren$$.length && !1 === $fail$$; $j$$++) {
                const $testchild$$ = $tagchildren$$[$j$$],
                    $role$$ = $testchild$$.getAttribute("data-ae_ar");
                if ("LI" !== $testchild$$.tagName || "listitem" !== $role$$)
                    if ($allowed$$[$testchild$$.tagName]) {
                        if ("null" !== $role$$ || $testChildFilter$$ &&
                            !$testChildFilter$$($tagchildren$$, $testchild$$)) $badnodes$$.push($nodes$jscomp$16_tag$$[$i$jscomp$61_rootTestNode$$]), $fail$$ = !0
                    } else "listitem" !== $role$$ && ($badnodes$$.push($nodes$jscomp$16_tag$$[$i$jscomp$61_rootTestNode$$]), $fail$$ = !0)
            }
        }
        return $badnodes$$
    }

    function $getBackgroundImage_FromStyles$$($computedStyles$$) {
        return "none" !== $computedStyles$$["background-image"] ? "background-image;yes" : null
    }

    function $setBackgroundImage$$($originalInformation$$, $node$$) {
        try {
            return void 0 !== $originalInformation$$["background-image"] ? ["data-ae_bckimg", "true"] : null
        } catch ($err$$) {
            return $logger$$.error("stage5_setBackgroundImage", $err$$), null
        }
    }

    function $timer_api_shell$$($testType$$, $processTest$$, $callback$$) {
        function $stage3_capture_proxy$$() {
            return $aeKernel$$.stage3_capture()
        }

        function $timer_tasks$$() {
            try {
                $tasks$$.shift()() && 0 < $tasks$$.length && setTimeout($timer_tasks$$, 25)
            } finally {
                $aeKernel$$.isLiveDOMMarkedUp && $stage3_capture_proxy$$()
            }
        }
        $aeKernel$$.updateSuccess(null);
        const $tasks$$ = [function() {
                return $aeKernel$$.stage0_capture()
            },
            function() {
                return $aeKernel$$.stage1_capture()
            },
            function() {
                return $aeKernel$$.stage2_capture()
            },
            function() {
                return $aeKernel$$.stage3a_capture()
            },
            function() {
                return $aeKernel$$.stage3c_capture()
            },
            function() {
                return $aeKernel$$.stage3d_capture()
            },
            $stage3_capture_proxy$$,
            function() {
                return $aeKernel$$.stage4_capture()
            },
            function() {
                return $aeKernel$$.stage5_capture()
            },
            function() {
                return $aeKernel$$.stage6_capture()
            },
            function() {
                function $timer_tests$$() {
                    if (0 < $batchOne_iterations$$) {
                        for (; $batchOne_iterations$$;) $processTest$$($tests$$[$testIds$$[$i$$--]]),
                            $batchOne_iterations$$--;
                        setTimeout($timer_tests$$, 25)
                    }
                    0 === $batchOne_iterations$$ && 0 < $remainingIterations$$ && ($processTest$$($tests$$[$testIds$$[$i$$--]]), $processTest$$($tests$$[$testIds$$[$i$$--]]), $processTest$$($tests$$[$testIds$$[$i$$--]]), $processTest$$($tests$$[$testIds$$[$i$$--]]), $processTest$$($tests$$[$testIds$$[$i$$--]]), $processTest$$($tests$$[$testIds$$[$i$$--]]), $processTest$$($tests$$[$testIds$$[$i$$--]]), $processTest$$($tests$$[$testIds$$[$i$$--]]), $remainingIterations$$--, 0 < $remainingIterations$$ ?
                        setTimeout($timer_tests$$, 25) : ($aeKernel$$.updateSuccess(), $callback$$ && $callback$$()))
                }
                const $tests$$ = $aeKernel$$.getTestsToRun($testType$$),
                    $testIds$$ = Object.keys($tests$$),
                    $testsLength$$ = $testIds$$.length;
                let $batchOne_iterations$$ = $testsLength$$ % 8,
                    $remainingIterations$$ = Math.floor($testsLength$$ / 8),
                    $i$$ = $testsLength$$ - 1;
                if (0 < $batchOne_iterations$$ && 0 === $remainingIterations$$) {
                    for (; $batchOne_iterations$$;) $processTest$$($tests$$[$testIds$$[$i$$--]]), $batchOne_iterations$$--;
                    $aeKernel$$.updateSuccess();
                    $callback$$ && $callback$$()
                } else setTimeout($timer_tests$$, 25)
            }
        ];
        setTimeout($timer_tasks$$, 25);
        return 1
    }

    function $getFingerprint$$($JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$, $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$, $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$, $fingerprint_version$$) {
        $fingerprint_version$$ = {
            version: $fingerprint_version$$ || "1"
        };
        if (!0 === $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$ ||
            $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$ === $fixTypes$$.TAG) $fingerprint_version$$.url = window.location.href;
        $fingerprint_version$$.css = $getCssForFingerprint$$($JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$);
        $fingerprint_version$$.attNo = $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$.attributes.length;
        $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$ = $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$.innerHTML;
        if ("" === $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$.trim())
            for ($JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$ = [], $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$ = 38; $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$--;) $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$.push(0);
        else {
            $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$ = {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 0,
                f: 0,
                g: 0,
                h: 0,
                i: 0,
                j: 0,
                k: 0,
                l: 0,
                m: 0,
                n: 0,
                o: 0,
                p: 0,
                q: 0,
                r: 0,
                s: 0,
                t: 0,
                u: 0,
                v: 0,
                w: 0,
                x: 0,
                y: 0,
                z: 0,
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                "<": 0,
                ">": 0
            };
            $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$ =
                $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$.toLowerCase().split("");
            for (var $i$jscomp$inline_56_total$$ = 0, $k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$ = $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$.length; $i$jscomp$inline_56_total$$ < $k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$; $i$jscomp$inline_56_total$$++) {
                var $a$jscomp$inline_63_char$$ = $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$[$i$jscomp$inline_56_total$$];
                try {
                    "undefined" !== typeof $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$[$a$jscomp$inline_63_char$$] && ($JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$[$a$jscomp$inline_63_char$$] += $i$jscomp$inline_56_total$$ + 1)
                } catch ($err$$) {}
            }
            $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$ = Object.keys($JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$);
            $i$jscomp$inline_56_total$$ = 0;
            for ($k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$ =
                $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$.length; $k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$--;) $i$jscomp$inline_56_total$$ += $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$[$charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$[$k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$]];
            $k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$ = [];
            $a$jscomp$inline_63_char$$ = 0;
            for (var $len_keys$$ =
                    $charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$.length; $a$jscomp$inline_63_char$$ < $len_keys$$; $a$jscomp$inline_63_char$$++) $k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$[$a$jscomp$inline_63_char$$] = 0 !== $i$jscomp$inline_56_total$$ ? parseInt(($JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$[$charArray$jscomp$inline_55_d$jscomp$inline_53_domSpec_keys$jscomp$inline_59_text$$[$a$jscomp$inline_63_char$$]] / $i$jscomp$inline_56_total$$ * 100).toFixed(0)) :
                0;
            $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$ = $k$jscomp$inline_61_len$jscomp$inline_57_onehotencoding$$
        }
        $fingerprint_version$$.encoding = $JSCompiler_inline_result$jscomp$8_arr$jscomp$inline_52_fixType_freq$$;
        "1" === $fingerprint_version$$.version && ($JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$ = "html" === $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$.tagName.toLowerCase() ? "" : $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$.innerHTML, "" === $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$ ?
            $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$ = [] : ($JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$ = $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$.replace(/[^a-zA-Z]/g, " "), $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$ = $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$.replace(/\s\s+/g, " "), $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$ = $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$.trim().split(" ")), $fingerprint_version$$.wordArray = $JSCompiler_inline_result$jscomp$7_el$jscomp$5_val$$);
        return $fingerprint_version$$
    }

    function $getCssForFingerprint$$($css_element$$) {
        const $qualifyingAttributes$$ = [];
        var $characterBudgetRemaining_numCharactersInQualifyingAttributes$$ = 0,
            $attributes$jscomp$2_i$$ = $css_element$$.attributes;
        for (var $attribute$jscomp$3_i$$ = $attributes$jscomp$2_i$$.length; $attribute$jscomp$3_i$$--;) {
            var $attribute$jscomp$0$$ = $attributes$jscomp$2_i$$[$attribute$jscomp$3_i$$];
            "style" !== $attribute$jscomp$0$$.name && -1 === $attribute$jscomp$0$$.name.indexOf("data-ae_") && -1 === $attribute$jscomp$0$$.name.indexOf("data-la-") &&
                -1 === $attribute$jscomp$0$$.name.indexOf(":") && -1 === $attribute$jscomp$0$$.value.indexOf("\r") && -1 === $attribute$jscomp$0$$.value.indexOf("\n") && "xmlns" !== $attribute$jscomp$0$$.name && ($attribute$jscomp$0$$ = {
                    name: $attribute$jscomp$0$$.name,
                    value: $attribute$jscomp$0$$.value.replace(/"/g, '\\"')
                }, $characterBudgetRemaining_numCharactersInQualifyingAttributes$$ += $attribute$jscomp$0$$.name.length + $attribute$jscomp$0$$.value.length, $qualifyingAttributes$$.push($attribute$jscomp$0$$))
        }
        $css_element$$ = $css_element$$.tagName.toLowerCase();
        if (2E3 >= $characterBudgetRemaining_numCharactersInQualifyingAttributes$$) $css_element$$ = $qualifyingAttributes$$.reduce(($accumulator$$, $attribute$$) => `${$accumulator$$}[${$attribute$$.name}="${$attribute$$.value}"]`, $css_element$$);
        else
            for ($qualifyingAttributes$$.sort(($a$$, $b$$) => $a$$.name.length + $a$$.value.length - ($b$$.name.length + $b$$.value.length)), $characterBudgetRemaining_numCharactersInQualifyingAttributes$$ = 2E3, $attributes$jscomp$2_i$$ = 0; $attributes$jscomp$2_i$$ < $qualifyingAttributes$$.length; $attributes$jscomp$2_i$$++) {
                $attribute$jscomp$3_i$$ =
                    $qualifyingAttributes$$[$attributes$jscomp$2_i$$];
                $attribute$jscomp$0$$ = $attribute$jscomp$3_i$$.name.length + $attribute$jscomp$3_i$$.value.length;
                if ($characterBudgetRemaining_numCharactersInQualifyingAttributes$$ < $attribute$jscomp$0$$) break;
                $css_element$$ += `[${$attribute$jscomp$3_i$$.name}="${$attribute$jscomp$3_i$$.value}"]`;
                $characterBudgetRemaining_numCharactersInQualifyingAttributes$$ -= $attribute$jscomp$0$$
            }
        return $css_element$$
    }

    function $formatOutcomeForToolbar$$($fixType$jscomp$1_instance$$,
        $test$$, $type$$, $ver_version$$) {
        let $outcome$$ = {};
        $ver_version$$ = $ver_version$$ || 2;
        $outcome$$.engineTestId = $test$$.testId;
        $outcome$$.bestPracticeId = $test$$.bestPractice;
        var $detail$jscomp$3_element$$ = $test$$.metaText;
        $outcome$$.attribute = void 0 !== $detail$jscomp$3_element$$ ? $detail$jscomp$3_element$$ : "";
        $detail$jscomp$3_element$$ = $test$$.metaTextDetail;
        if (void 0 == $detail$jscomp$3_element$$) $outcome$$.attributeDetail = $outcome$$.attribute;
        else {
            if (-1 !== $detail$jscomp$3_element$$.indexOf("{{")) {
                $detail$jscomp$3_element$$ =
                    $detail$jscomp$3_element$$.replace("{{tag-name}}", $fixType$jscomp$1_instance$$.tagName);
                $detail$jscomp$3_element$$ = $detail$jscomp$3_element$$.replace("{{optional_data-ae_ar}}", "null" !== $fixType$jscomp$1_instance$$.getAttribute("data-ae_ar") ? ` with a role of ${$fixType$jscomp$1_instance$$.getAttribute("data-ae_ar")}` : "");
                var $matches$$ = $detail$jscomp$3_element$$.match(/({{([^}}]+)}})/gi);
                if (null !== $matches$$)
                    for (var $i$$ = 0; $i$$ < $matches$$.length; $i$$++) {
                        var $attributeNameToken$$ = $matches$$[$i$$],
                            $attributeName$jscomp$1_color$$ =
                            $attributeNameToken$$.replace("{{", "").replace("}}", ""),
                            $attributeValue$$ = $fixType$jscomp$1_instance$$.getAttribute($attributeName$jscomp$1_color$$);
                        if (null !== $attributeValue$$) {
                            if ("data-ae_color" === $attributeName$jscomp$1_color$$ || "data-ae_bgcolor" === $attributeName$jscomp$1_color$$) {
                                $attributeName$jscomp$1_color$$ = $attributeValue$$.replace("rgb(", "").replace(")", "").split(",");
                                for (var $i$jscomp$0$$ = 0; $i$jscomp$0$$ < $attributeName$jscomp$1_color$$.length; $i$jscomp$0$$++) {
                                    var $JSCompiler_temp_const$$ =
                                        $i$jscomp$0$$,
                                        $hex$$ = parseInt($attributeName$jscomp$1_color$$[$i$jscomp$0$$]).toString(16);
                                    $attributeName$jscomp$1_color$$[$JSCompiler_temp_const$$] = 1 === $hex$$.length ? "0" + $hex$$ : $hex$$
                                }
                                $attributeValue$$ = `${"#"+$attributeName$jscomp$1_color$$.join("")} ${$attributeValue$$}`
                            }
                            $detail$jscomp$3_element$$ = $detail$jscomp$3_element$$.replace($attributeNameToken$$, $attributeValue$$)
                        }
                    }
            }
            $outcome$$.attributeDetail = $detail$jscomp$3_element$$.substring(0, 2998)
        }
        $detail$jscomp$3_element$$ = $removeAEAttributes$$($fixType$jscomp$1_instance$$);
        $outcome$$.element = $detail$jscomp$3_element$$.outerHTML.substring(0, 2998);
        switch ($type$$) {
            case $testTypes$$.GUIDED_AUTOMATIC:
                $outcome$$.testResult = 3;
                break;
            default:
                $outcome$$.testResult = 0
        }
        $outcome$$.path = $fixType$jscomp$1_instance$$.getAttribute("data-ae_domuel");
        null === $outcome$$.path && ($outcome$$.path = $fixType$jscomp$1_instance$$.getAttribute("data-ae_uel"));
        $fixType$jscomp$1_instance$$ = $test$$.fixType;
        void 0 !== $fixType$jscomp$1_instance$$ ? ($outcome$$.fixType = $fixType$jscomp$1_instance$$, $outcome$$.fingerprint =
            4 == $fixType$jscomp$1_instance$$.fixType ? {
                attNo: 0,
                css: "html",
                version: 2,
                encoding: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            } : $getFingerprint$$($detail$jscomp$3_element$$, void 0 !== $fixType$jscomp$1_instance$$.fixType ? $fixType$jscomp$1_instance$$.fixType : -1, void 0 !== $fixType$jscomp$1_instance$$.domSpec ? $fixType$jscomp$1_instance$$.domSpec : !1, $ver_version$$)) : $outcome$$.fixType = "";
        return $outcome$$
    }

    function $formatOutcomeForAnalytics$$($instance$$, $test$$, $outcome$jscomp$15_type$$) {
        $outcome$jscomp$15_type$$ = {};
        $outcome$jscomp$15_type$$.t = $test$$.testId;
        $outcome$jscomp$15_type$$.b = $test$$.bestPractice;
        if (4 == $test$$.fixType.fixType) $outcome$jscomp$15_type$$.css = "html", $outcome$jscomp$15_type$$.attNo = 0, $outcome$jscomp$15_type$$.version = 2, $outcome$jscomp$15_type$$.encoding = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        else {
            var $fingerprint$$ = $getFingerprint$$($removeAEAttributes$$($instance$$), void 0, void 0, 2);
            $outcome$jscomp$15_type$$.css = $fingerprint$$.css;
            $outcome$jscomp$15_type$$.attNo =
                $fingerprint$$.attNo;
            $outcome$jscomp$15_type$$.encoding = $fingerprint$$.encoding;
            $outcome$jscomp$15_type$$.version = $fingerprint$$.version
        }
        $outcome$jscomp$15_type$$.r = 0;
        $outcome$jscomp$15_type$$.uel = $instance$$.getAttribute("data-ae_domuel");
        null === $outcome$jscomp$15_type$$.uel && ($outcome$jscomp$15_type$$.uel = $instance$$.getAttribute("data-ae_uel"));
        $outcome$jscomp$15_type$$.fixable = "" == $test$$.fixType ? 0 : 1;
        return $outcome$jscomp$15_type$$
    }
    class $Logger$$ {
        constructor($logging$$) {
            $Logger$$.instance ||
                (void 0 === $logging$$ && ($logging$$ = !1), this._logging = $logging$$, $Logger$$.instance = this);
            return $Logger$$.instance
        }
        get logging() {
            return this._logging
        }
        set logging($logging$$) {
            this._logging = $logging$$
        }
        log() {
            this._logging && console.log.apply(window, arguments)
        }
        error() {
            this._logging && (console.error ? console.error.apply(window, arguments) : console.log.apply(window, arguments))
        }
    }
    const $logger$$ = new $Logger$$;
    let $markdownStageExecutionTimeout$$ = null,
        $didMarkdownStageExecutionTimeOut$$ = !1;
    const $blockStyles$$ = {
        display: ["block", "grid", "table", "flow-root", "flex"],
        position: ["absolute", "fixed"],
        float: ["left", "right", "inline"],
        clear: ["left", "right", "both", "inline"],
        overflow: ["hidden", "scroll", "auto"],
        "column-count": ["!auto"],
        "column-width": ["!auto"],
        "column-span": ["all"],
        contain: ["layout", "content", "strict"]
    };
    let $startTime$$, $detectShadowDOM$$ = null,
        $stage1_markDownFunc_errors$$ = {};
    window.AccNamePrototypeNameSpace = "LevelAccess_CalcNames";
    const $testTypes$$ = {
            GLOBAL: 2,
            IMPLIED_GLOBAL: 3,
            AUTOMATIC: 4,
            GUIDED_AUTOMATIC: 5,
            MANUAL: 6,
            GUIDED_MANUAL: 30,
            ADVISORY: 31,
            PREVIEW_MODE: -2
        },
        $fixTypes$$ = {
            ATTRIBUTE: 1,
            TAG: 2,
            INNERHTML: 3
        },
        $ACCEPTED_LANGUAGE_SUBTAGS$$ = {
            aa: !0,
            ab: !0,
            ae: !0,
            af: !0,
            ak: !0,
            am: !0,
            an: !0,
            ar: !0,
            as: !0,
            av: !0,
            ay: !0,
            az: !0,
            ba: !0,
            be: !0,
            bg: !0,
            bh: !0,
            bi: !0,
            bm: !0,
            bn: !0,
            bo: !0,
            br: !0,
            bs: !0,
            ca: !0,
            ce: !0,
            ch: !0,
            co: !0,
            cr: !0,
            cs: !0,
            cu: !0,
            cv: !0,
            cy: !0,
            da: !0,
            de: !0,
            dv: !0,
            dz: !0,
            ee: !0,
            el: !0,
            en: !0,
            eo: !0,
            es: !0,
            et: !0,
            eu: !0,
            fa: !0,
            ff: !0,
            fi: !0,
            fj: !0,
            fo: !0,
            fr: !0,
            fy: !0,
            ga: !0,
            gd: !0,
            gl: !0,
            gn: !0,
            gu: !0,
            gv: !0,
            ha: !0,
            he: !0,
            hi: !0,
            ho: !0,
            hr: !0,
            ht: !0,
            hu: !0,
            hy: !0,
            hz: !0,
            ia: !0,
            id: !0,
            ie: !0,
            ig: !0,
            ii: !0,
            ik: !0,
            in: !0,
            io: !0,
            is: !0,
            it: !0,
            iu: !0,
            iw: !0,
            ja: !0,
            ji: !0,
            jv: !0,
            jw: !0,
            ka: !0,
            kg: !0,
            ki: !0,
            kj: !0,
            kk: !0,
            kl: !0,
            km: !0,
            kn: !0,
            ko: !0,
            kr: !0,
            ks: !0,
            ku: !0,
            kv: !0,
            kw: !0,
            ky: !0,
            la: !0,
            lb: !0,
            lg: !0,
            li: !0,
            ln: !0,
            lo: !0,
            lt: !0,
            lu: !0,
            lv: !0,
            mg: !0,
            mh: !0,
            mi: !0,
            mk: !0,
            ml: !0,
            mn: !0,
            mo: !0,
            mr: !0,
            ms: !0,
            mt: !0,
            my: !0,
            na: !0,
            nb: !0,
            nd: !0,
            ne: !0,
            ng: !0,
            nl: !0,
            nn: !0,
            no: !0,
            nr: !0,
            nv: !0,
            ny: !0,
            oc: !0,
            oj: !0,
            om: !0,
            or: !0,
            os: !0,
            pa: !0,
            pi: !0,
            pl: !0,
            ps: !0,
            pt: !0,
            qu: !0,
            rm: !0,
            rn: !0,
            ro: !0,
            ru: !0,
            rw: !0,
            sa: !0,
            sc: !0,
            sd: !0,
            se: !0,
            sg: !0,
            sh: !0,
            si: !0,
            sk: !0,
            sl: !0,
            sm: !0,
            sn: !0,
            so: !0,
            sq: !0,
            sr: !0,
            ss: !0,
            st: !0,
            su: !0,
            sv: !0,
            sw: !0,
            ta: !0,
            te: !0,
            tg: !0,
            th: !0,
            ti: !0,
            tk: !0,
            tl: !0,
            tn: !0,
            to: !0,
            tr: !0,
            ts: !0,
            tt: !0,
            tw: !0,
            ty: !0,
            ug: !0,
            uk: !0,
            ur: !0,
            uz: !0,
            ve: !0,
            vi: !0,
            vo: !0,
            wa: !0,
            wo: !0,
            xh: !0,
            yi: !0,
            yo: !0,
            za: !0,
            zh: !0,
            zu: !0,
            bsq: !0,
            cdo: !0,
            chk: !0,
            cho: !0,
            chr: !0,
            cjy: !0,
            cmn: !0,
            cpx: !0,
            czh: !0,
            czo: !0,
            din: !0,
            fil: !0,
            gan: !0,
            hak: !0,
            haw: !0,
            hmn: !0,
            hsn: !0,
            kar: !0,
            lzh: !0,
            mnp: !0,
            nan: !0,
            pon: !0,
            wuu: !0,
            yue: !0,
            zhx: !0
        },
        $IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES$$ = '[data-ae_an*=".gif"] [data-ae_an*=".jpg"] [data-ae_an*=".png"] [data-ae_an="img"] [data-ae_an="spacer"] [data-ae_an="alt"] [data-ae_an="blank"] [data-ae_an="_"] [data-ae_an="null"] [data-ae_an="photo"] [data-ae_an="image"] [data-ae_an="corner"] [data-ae_an="tag"] [data-ae_an="picture"] [data-ae_an="header"] [data-ae_an="histogram"] [data-ae_an="chart"] [data-ae_an="undefined"]'.split(" "),
        $specialTagNames$$ = ["HTML", "HEAD", "BODY", "FRAMESET"];
    let $stage0_markDownFunc_errors$$ = {},
        $stage2_markDownFunc_errors$$ = {},
        $stage3_markDownFunc_errors$$ = {},
        $stage3a_markDownFunc_errors$$ = {},
        $stage3c_markDownFunc_errors$$ = {},
        $stage3d_markDownFunc_errors$$ = {},
        $stage4_markDownFunc_errors$$ = {},
        $stage5_markDownFunc_errors$$ = {},
        $stage6_markDownFunc_errors$$ = {},
        $success$$ = null;
    class $AEKernel$$ {
        constructor() {
            $AEKernel$$.instance || (this._version = "2.20.0", this._stage1MarkdownFuncs = {}, this._stage2MarkdownFuncs = {}, this._stage4MarkdownFuncs = {}, this._stage5MarkdownFuncs = {}, this._stage6MarkdownFuncs = {}, this._rootTestNode = null, this._automaticTests = {}, this._guidedAutomaticTests = {}, this._advisoryAutomaticTests = {}, this._previewModes = {}, this._window = window, this._document = document, this._markdownFuncs_failedToRun = {}, this._tests_failedToRun = {}, this._test_outcomes = {}, this._test_analytics_outcomes = [], this._getTestInfo = {}, this._isLiveDOMMarkedUp = !1, $AEKernel$$.instance = this);
            return $AEKernel$$.instance
        }
        get version() {
            return this._version
        }
        set version($version$$) {
            this._version =
                $version$$
        }
        get stage1MarkdownFuncs() {
            return this._stage1MarkdownFuncs
        }
        get stage2MarkdownFuncs() {
            return this._stage2MarkdownFuncs
        }
        get window() {
            return this._window
        }
        get document() {
            return this._document
        }
        get markdownFuncs_failedToRun() {
            return this._markdownFuncs_failedToRun
        }
        set markdownFuncs_failedToRun($markdownFuncs_failedToRun$$) {
            this._markdownFuncs_failedToRun = $markdownFuncs_failedToRun$$
        }
        get tests_failedToRun() {
            return this._tests_failedToRun
        }
        set tests_failedToRun($tests_failedToRun$$) {
            this._tests_failedToRun =
                $tests_failedToRun$$
        }
        get rootTestNode() {
            return this._rootTestNode
        }
        set rootTestNode($rootTestNode$$) {
            this._rootTestNode = $rootTestNode$$
        }
        get stage4MarkdownFuncs() {
            return this._stage4MarkdownFuncs
        }
        set stage4MarkdownFuncs($stage4MarkdownFuncs$$) {
            this._stage4MarkdownFuncs = $stage4MarkdownFuncs$$
        }
        get stage5MarkdownFuncs() {
            return this._stage5MarkdownFuncs
        }
        set stage5MarkdownFuncs($stage5MarkdownFuncs$$) {
            this._stage5MarkdownFuncs = $stage5MarkdownFuncs$$
        }
        get stage6MarkdownFuncs() {
            return this._stage6MarkdownFuncs
        }
        set stage6MarkdownFuncs($stage6MarkdownFuncs$$) {
            this._stage6MarkdownFuncs =
                $stage6MarkdownFuncs$$
        }
        get test_outcomes() {
            return this._test_outcomes
        }
        set test_outcomes($test_outcomes$$) {
            this._test_outcomes = $test_outcomes$$
        }
        get test_analytics_outcomes() {
            return this._test_analytics_outcomes
        }
        set test_analytics_outcomes($test_analytics_outcomes$$) {
            this._test_analytics_outcomes = $test_analytics_outcomes$$
        }
        get isLiveDOMMarkedUp() {
            return this._isLiveDOMMarkedUp
        }
        set isLiveDOMMarkedUp($isLiveDOMMarkedUp$$) {
            this._isLiveDOMMarkedUp = $isLiveDOMMarkedUp$$
        }
        setWindowUnderTest($refWindow$$) {
            this._window =
                $refWindow$$;
            this._document = $refWindow$$.document
        }
        setRootTestNode($testNode$$) {
            this._rootTestNode = $testNode$$
        }
        getCloneRootTestNode() {
            return $cloneThisNode$$(this._rootTestNode, !0)
        }
        addFailedToRunFuncs($targetCollectionToAddTo$$, $collectionOfFuncsWhichFailedToRun$$) {
            for (var $funcNames$$ = Object.keys($collectionOfFuncsWhichFailedToRun$$), $i$$ = $funcNames$$.length; $i$$--;) {
                var $funcName$$ = $funcNames$$[$i$$];
                $targetCollectionToAddTo$$[$funcName$$] = $collectionOfFuncsWhichFailedToRun$$[$funcName$$]
            }
        }
        addStage1MarkdownFunc($name$$,
            $func$$) {
            this._stage1MarkdownFuncs[$name$$] = $func$$
        }
        addStage4MarkdownFunc($name$$, $func$$) {
            this._stage4MarkdownFuncs[$name$$] = $func$$
        }
        addStage5MarkdownFunc($name$$, $func$$) {
            this._stage5MarkdownFuncs[$name$$] = $func$$
        }
        addStage6MarkdownFunc($name$$, $func$$) {
            this._stage6MarkdownFuncs[$name$$] = $func$$
        }
        stage0_capture() {
            const $result$$ = $stage0_markDown_liveDOM_domuels$$(this.document);
            this.isLiveDOMMarkedUp = !0;
            this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage0_markDownFunc_errors$$);
            return $result$$
        }
        stage1_capture() {
            const $result$$ =
                $stage1_markDown_liveDOM_copyInfo$$(this.window, this.document, this.stage1MarkdownFuncs);
            this.isLiveDOMMarkedUp = !0;
            this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage1_markDownFunc_errors$$);
            return $result$$
        }
        stage2_capture() {
            var $i$jscomp$inline_87_testDoc$$ = this.document;
            try {
                $stage2_markDownFunc_errors$$ = {};
                let $clone$$;
                if (!1 === $detectShadowDOM$$) {
                    const $innerHTMLByUEL$$ = {};
                    var $i$jscomp$inline_83_noscriptElements$$ = $i$jscomp$inline_87_testDoc$$.querySelectorAll("noscript");
                    for (let $i$$ =
                            0; $i$$ < $i$jscomp$inline_83_noscriptElements$$.length; $i$$++) {
                        const $element$$ = $i$jscomp$inline_83_noscriptElements$$[$i$$],
                            $uel$$ = $element$$.getAttribute("data-ae_domuel");
                        $innerHTMLByUEL$$[$uel$$] = $element$$.innerHTML;
                        $element$$.innerHTML = ""
                    }
                    $clone$$ = (new DOMParser).parseFromString($i$jscomp$inline_87_testDoc$$.documentElement.outerHTML, "text/html").documentElement;
                    const $noscriptUELs$$ = Object.keys($innerHTMLByUEL$$);
                    for ($i$jscomp$inline_83_noscriptElements$$ = 0; $i$jscomp$inline_83_noscriptElements$$ <
                        $noscriptUELs$$.length; $i$jscomp$inline_83_noscriptElements$$++) {
                        const $uel$$ = $noscriptUELs$$[$i$jscomp$inline_83_noscriptElements$$],
                            $innerHTML$$ = $innerHTMLByUEL$$[$uel$$],
                            $element$$ = $i$jscomp$inline_87_testDoc$$.querySelector($uel$$);
                        $element$$ && ($element$$.innerHTML = $innerHTML$$)
                    }
                    var $i$jscomp$inline_89_nodesToRemoveFromClone$$ = $clone$$.querySelectorAll("*[data-ae_removefromclone]");
                    for ($i$jscomp$inline_87_testDoc$$ = 0; $i$jscomp$inline_87_testDoc$$ < $i$jscomp$inline_89_nodesToRemoveFromClone$$.length; $i$jscomp$inline_87_testDoc$$++) {
                        const $nodeToRemoveFromClone$$ =
                            $i$jscomp$inline_89_nodesToRemoveFromClone$$[$i$jscomp$inline_87_testDoc$$];
                        $nodeToRemoveFromClone$$.parentNode.removeChild($nodeToRemoveFromClone$$)
                    }
                    const $nodesToStrip$$ = $clone$$.querySelectorAll("script, style, template");
                    for ($i$jscomp$inline_89_nodesToRemoveFromClone$$ = 0; $i$jscomp$inline_89_nodesToRemoveFromClone$$ < $nodesToStrip$$.length; $i$jscomp$inline_89_nodesToRemoveFromClone$$++) $nodesToStrip$$[$i$jscomp$inline_89_nodesToRemoveFromClone$$].innerHTML = ""
                } else $clone$$ = $cloneThisNodeForMarkDown$$($i$jscomp$inline_87_testDoc$$.documentElement,
                    !0);
                var $JSCompiler_inline_result$$ = $clone$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage2_cloneDOM", $err$$), $stage2_markDownFunc_errors$$.stage2_cloneDOM = $err$$, $JSCompiler_inline_result$$ = null
            }
            this.rootTestNode = $JSCompiler_inline_result$$;
            this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage2_markDownFunc_errors$$);
            return this.rootTestNode
        }
        stage3a_capture() {
            !0 === $detectShadowDOM$$ && (this.rootTestNode = $stage3a_CopyOverShadowHosts$$(this.rootTestNode, this.document), this.addFailedToRunFuncs(this._markdownFuncs_failedToRun,
                $stage3a_markDownFunc_errors$$));
            return this.rootTestNode
        }
        stage3c_capture() {
            !0 === $detectShadowDOM$$ && (this.rootTestNode = $stage3c_BuildOutShadowDOM$$(this.rootTestNode, this.document), this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage3c_markDownFunc_errors$$));
            return this.rootTestNode
        }
        stage3d_capture() {
            !0 === $detectShadowDOM$$ && (this.rootTestNode = $stage3d_RevertElementsToOrigTagName$$(this.rootTestNode), this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage3d_markDownFunc_errors$$));
            return this.rootTestNode
        }
        stage3_capture() {
            const $result$$ = $stage3_cleanUpLiveDOM$$(this.document);
            $result$$ && (this.isLiveDOMMarkedUp = !1);
            this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage3_markDownFunc_errors$$);
            return $result$$
        }
        stage4_capture() {
            var $rootTestNode$$ = this.rootTestNode,
                $stage4MarkdownFuncs$$ = this.stage4MarkdownFuncs;
            $stage4_markDownFunc_errors$$ = {};
            var $rootTestNode$jscomp$inline_139_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$$ = $rootTestNode$jscomp$inline_139_rootTestNode$$.querySelectorAll("*[role]:not([role=''])"),
                        $i$$ = $els$$.length; $i$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    var $el$$ = $els$$[$i$$],
                        $firstRole$$ = $el$$.getAttribute("role").trim().split(" ")[0];
                    $el$$.setAttribute("data-ae_ar", $firstRole$$.toLowerCase())
                }
                $rootTestNode$$ = $rootTestNode$jscomp$inline_139_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage4_addRoleAtt", $err$$), $stage4_markDownFunc_errors$$.stage4_addRoleAtt = $err$$, $rootTestNode$$ = null
            }
            $rootTestNode$jscomp$inline_139_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$jscomp$inline_147_rootTestNode$$ = $rootTestNode$jscomp$inline_139_rootTestNode$$.querySelectorAll("*[data-ae_styles*='visibility;hidden'], *[data-ae_styles*='display;none']:not(datalist):not(param):not(script):not(template), noscript"), $i$jscomp$0$$ = $els$jscomp$inline_147_rootTestNode$$.length; $i$jscomp$0$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $els$jscomp$inline_147_rootTestNode$$[$i$jscomp$0$$].setAttribute("data-ae_invis", "true")
                }
                $rootTestNode$$ = $rootTestNode$jscomp$inline_139_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error",
                    "stage4_invisEls", $err$$), $stage4_markDownFunc_errors$$.stage4_invisEls = $err$$, $rootTestNode$$ = null
            }
            $els$jscomp$inline_147_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$jscomp$inline_152_rootTestNode$$ = $els$jscomp$inline_147_rootTestNode$$.querySelectorAll("*[data-ae_invis] *"), $i$jscomp$1$$ = $els$jscomp$inline_152_rootTestNode$$.length; $i$jscomp$1$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $els$jscomp$inline_152_rootTestNode$$[$i$jscomp$1$$].setAttribute("data-ae_invis",
                        "true")
                }
                $rootTestNode$$ = $els$jscomp$inline_147_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage4_invisElsDescendants", $err$$), $stage4_markDownFunc_errors$$.stage4_invisElsDescendants = $err$$, $rootTestNode$$ = null
            }
            $els$jscomp$inline_152_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$jscomp$inline_157_rootTestNode$$ = $els$jscomp$inline_152_rootTestNode$$.querySelectorAll("*[aria-hidden='true']"), $i$jscomp$2$$ = $els$jscomp$inline_157_rootTestNode$$.length; $i$jscomp$2$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $els$jscomp$inline_157_rootTestNode$$[$i$jscomp$2$$].setAttribute("data-ae_at_hidden", "true")
                }
                $rootTestNode$$ = $els$jscomp$inline_152_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage4_ariaHiddenEls", $err$$), $stage4_markDownFunc_errors$$.stage4_ariaHiddenEls = $err$$, $rootTestNode$$ = null
            }
            $els$jscomp$inline_157_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$jscomp$inline_162_rootTestNode$$ = $els$jscomp$inline_157_rootTestNode$$.querySelectorAll("*[data-ae_at_hidden] *"), $i$jscomp$3$$ = $els$jscomp$inline_162_rootTestNode$$.length; $i$jscomp$3$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $els$jscomp$inline_162_rootTestNode$$[$i$jscomp$3$$].setAttribute("data-ae_at_hidden", "true")
                }
                $rootTestNode$$ = $els$jscomp$inline_157_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage4_ariaHiddenElsDescendants", $err$$), $stage4_markDownFunc_errors$$.stage4_ariaHiddenElsDescendants = $err$$, $rootTestNode$$ = null
            }
            $els$jscomp$inline_162_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$jscomp$inline_167_rootTestNode$$ = $els$jscomp$inline_162_rootTestNode$$.querySelectorAll("*[data-ae_ar='none'], *[data-ae_ar='presentation']"),
                        $i$jscomp$4$$ = $els$jscomp$inline_167_rootTestNode$$.length; $i$jscomp$4$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $els$jscomp$inline_167_rootTestNode$$[$i$jscomp$4$$].setAttribute("data-ae_at_none", "true")
                }
                $rootTestNode$$ = $els$jscomp$inline_162_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage4_ariaRolePreNone", $err$$), $stage4_markDownFunc_errors$$.stage4_ariaRolePreNone = $err$$, $rootTestNode$$ = null
            }
            $els$jscomp$inline_167_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$jscomp$inline_172_rootTestNode$$ =
                        $els$jscomp$inline_167_rootTestNode$$.querySelectorAll("*[data-ae_at_none] *[data-ae_ar='columnheader'], *[data-ae_at_none] *[data-ae_ar='gridcell'], *[data-ae_at_none] *[data-ae_ar='rowheader'], *[data-ae_at_none] *[data-ae_ar='row'], *[data-ae_at_none] *[data-ae_ar='listitem'], *[data-ae_at_none] *[data-ae_ar='menuitem'], *[data-ae_at_none] *[data-ae_ar='menuitemcheckbox'], *[data-ae_at_none] *[data-ae_ar='menuitemradio'], *[data-ae_at_none] *[data-ae_ar='option'], *[data-ae_at_none] *[data-ae_ar='rowgroup'], *[data-ae_at_none] *[data-ae_ar='tab'], *[data-ae_at_none] *[data-ae_ar='treeitem'], *[data-ae_at_none] *[data-ae_ar='menubar'], *[data-ae_at_none] *[data-ae_ar='grid'], *[data-ae_at_none] thead:not([data-ae_ar]), *[data-ae_at_none] tbody:not([data-ae_ar]), *[data-ae_at_none] tfoot:not([data-ae_ar]), *[data-ae_at_none] tr:not([data-ae_ar]), *[data-ae_at_none] th:not([data-ae_ar]), *[data-ae_at_none] td:not([data-ae_ar]), *[data-ae_at_none] caption:not([data-ae_ar]), *[data-ae_at_none] li:not([data-ae_ar]), *[data-ae_at_none] dt:not([data-ae_ar]), *[data-ae_at_none] dd:not([data-ae_ar]), *[data-ae_at_none] option:not([data-ae_ar]), *[data-ae_at_none] menuitem:not([data-ae_ar])"),
                        $i$jscomp$5$$ = $els$jscomp$inline_172_rootTestNode$$.length; $i$jscomp$5$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $els$jscomp$inline_172_rootTestNode$$[$i$jscomp$5$$].setAttribute("data-ae_at_none", "true")
                }
                $rootTestNode$$ = $els$jscomp$inline_167_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage4_affectedByParentsAria", $err$$), $stage4_markDownFunc_errors$$.stage4_affectedByParentsAria = $err$$, $rootTestNode$$ = null
            }
            $els$jscomp$inline_172_rootTestNode$$ = $rootTestNode$$;
            try {
                for (var $els$jscomp$inline_177_rootTestNode$$ = $els$jscomp$inline_172_rootTestNode$$.querySelectorAll("*:not([data-ae_at_hidden]):not([data-ae_at_none]):not(template):not(script):not(style)"), $i$jscomp$6$$ = $els$jscomp$inline_177_rootTestNode$$.length; $i$jscomp$6$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $els$jscomp$inline_177_rootTestNode$$[$i$jscomp$6$$].setAttribute("data-ae_avat", "true")
                }
                $rootTestNode$$ = $els$jscomp$inline_172_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error",
                    "stage4_availableToAT", $err$$), $stage4_markDownFunc_errors$$.stage4_availableToAT = $err$$, $rootTestNode$$ = null
            }
            $els$jscomp$inline_177_rootTestNode$$ = $rootTestNode$$;
            try {
                $addedStage4Funcs$jscomp$inline_95_els$$ = $els$jscomp$inline_177_rootTestNode$$.querySelectorAll("*[data-ae_shdwrt] *");
                for (var $i$jscomp$inline_183_i$$ = $addedStage4Funcs$jscomp$inline_95_els$$.length; $i$jscomp$inline_183_i$$--;) {
                    if ($isRunningTooLong$$()) throw $getRuntimeExceededMessage$$();
                    $addedStage4Funcs$jscomp$inline_95_els$$[$i$jscomp$inline_183_i$$].setAttribute("data-ae_inshdw",
                        "true")
                }
                $rootTestNode$$ = $els$jscomp$inline_177_rootTestNode$$
            } catch ($err$$) {
                $logger$$.error("Error", "stage4_shadowElsDescendants", $err$$), $stage4_markDownFunc_errors$$.stage4_shadowElsDescendants = $err$$, $rootTestNode$$ = null
            }
            var $addedStage4Funcs$jscomp$inline_95_els$$ = Object.keys($stage4MarkdownFuncs$$);
            for ($i$jscomp$inline_183_i$$ = $addedStage4Funcs$jscomp$inline_95_els$$.length; $i$jscomp$inline_183_i$$--;) $rootTestNode$$ = $stage4MarkdownFuncs$$[$addedStage4Funcs$jscomp$inline_95_els$$[$i$jscomp$inline_183_i$$]]($rootTestNode$$);
            this.rootTestNode = $rootTestNode$$;
            this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage4_markDownFunc_errors$$);
            return this.rootTestNode
        }
        stage5_capture() {
            this.rootTestNode = $stage5_markDown_clonedDOM$$(this.rootTestNode, this.stage5MarkdownFuncs);
            this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, $stage5_markDownFunc_errors$$);
            return this.rootTestNode
        }
        stage6_capture() {
            this.rootTestNode = $stage6_markDown_clonedDOM$$(this.rootTestNode, this.stage6MarkdownFuncs);
            this.addFailedToRunFuncs(this._markdownFuncs_failedToRun,
                $stage6_markDownFunc_errors$$);
            return this.rootTestNode
        }
        captureDOM() {
            const $tasks$$ = [this.stage0_capture, this.stage1_capture, this.stage2_capture, this.stage3a_capture, this.stage3c_capture, this.stage3d_capture, this.stage3_capture, this.stage4_capture, this.stage5_capture, this.stage6_capture];
            try {
                for (let $i$$ = 0; $i$$ < $tasks$$.length; $i$$++)
                    if (!$tasks$$[$i$$].bind(this)()) return !1
            } finally {
                this.isLiveDOMMarkedUp && this.stage3_capture.bind(this)()
            }
            return !0
        }
        addAutomaticTest($testId$$, $testObj$$) {
            this._automaticTests[$testId$$] =
                $testObj$$
        }
        addGuidedAutomaticTest($testId$$, $testObj$$) {
            this._guidedAutomaticTests[$testId$$] = $testObj$$
        }
        addAdvisoryAutomaticTest($testId$$, $testObj$$) {
            this._advisoryAutomaticTests[$testId$$] = $testObj$$
        }
        addPreviewMode($previewModeId$$, $previewModeObj$$) {
            this._previewModes[$previewModeId$$] = $previewModeObj$$
        }
        getTestToRun($testId$$) {
            let $test$$ = this._automaticTests[$testId$$];
            if (void 0 === $test$$) $test$$ = this._guidedAutomaticTests[$testId$$];
            else return $test$$;
            if (void 0 === $test$$) $test$$ = this._previewModes[$testId$$];
            else return $test$$;
            if (void 0 === $test$$) $test$$ = this._advisoryAutomaticTests[$testId$$];
            else return $test$$;
            return void 0 === $test$$ ? null : $test$$
        }
        getTestsToRun($testType$$) {
            let $tests$$ = null;
            switch ($testType$$) {
                case $testTypes$$.AUTOMATIC:
                    $tests$$ = this._automaticTests;
                    break;
                case $testTypes$$.GUIDED_AUTOMATIC:
                    $tests$$ = this._guidedAutomaticTests;
                    break;
                case $testTypes$$.PREVIEW_MODE:
                    $tests$$ = this._previewModes;
                    break;
                case $testTypes$$.ADVISORY:
                    $tests$$ = this._advisoryAutomaticTests
            }
            return $tests$$
        }
        getTestInfo($columns$$) {
            return this._getTestInfo
        }
        updateSuccess($success$jscomp$0$$) {
            $success$$ =
                void 0 === $success$jscomp$0$$ ? 0 === Object.keys(this._markdownFuncs_failedToRun).length && 0 === Object.keys(this._tests_failedToRun).length : $success$jscomp$0$$
        }
    }
    const $aeKernel$$ = new $AEKernel$$;
    class $AutoTestShell$$ {
        constructor($isRelevantCssSelector$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
            this._isRelevantCssSelector = $isRelevantCssSelector$$;
            this._rootTestNode = null;
            this._result = {};
            this._candidateSetNodesFuncArgs = null;
            this._numberOfRelevantNodes = this._relevantNodes = 0;
            this._cssSelector = $JSCompiler_OptimizeArgumentsArray_p0$$;
            this._applicableNodesFuncArgs = this._applicabilityTestArgs = null
        }
        get rootTestNode() {
            return this._rootTestNode
        }
        set rootTestNode($rootTestNode$$) {
            this._rootTestNode = $rootTestNode$$
        }
        get numberOfRelevantNodes() {
            return this._numberOfRelevantNodes
        }
        set numberOfRelevantNodes($numberOfRelevantNodes$$) {
            this._numberOfRelevantNodes = $numberOfRelevantNodes$$
        }
        get relevantNodes() {
            return this._relevantNodes
        }
        set relevantNodes($relevantNodes$$) {
            this._relevantNodes = $relevantNodes$$
        }
        candidateSetNodesFunc() {
            return this.querySelectorAll(this._cssSelector)
        }
        set_candidateSetNodesFunc($func$$,
            $funcArgs$$) {
            this.candidateSetNodesFunc = $func$$;
            $funcArgs$$ && (this._candidateSetNodesFuncArgs = $funcArgs$$)
        }
        applicabilityTest() {
            return null != this.querySelector(this._isRelevantCssSelector)
        }
        set_applicabilityTest($func$$, $funcArgs$$) {
            this.applicabilityTest = $func$$;
            $funcArgs$$ && (this._applicabilityTestArgs = $funcArgs$$)
        }
        applicableNodesFunc() {
            return this.querySelectorAll(this._isRelevantCssSelector)
        }
        set_applicableNodesFunc($func$$, $funcArgs$$) {
            this.applicableNodesFunc = $func$$;
            $funcArgs$$ && (this._applicableNodesFuncArgs =
                $funcArgs$$)
        }
        passFailFunc() {
            let $outcome$$ = "pass";
            0 < this._numberOfRelevantNodes && ($outcome$$ = "fail");
            return $outcome$$
        }
        numberIssuesFunc() {
            let $outcome$$ = "pass";
            0 < this._numberOfRelevantNodes && ($outcome$$ = ["fail", this._numberOfRelevantNodes]);
            return $outcome$$
        }
        issueInstancesFunc() {
            let $outcome$$ = "pass";
            0 < this._numberOfRelevantNodes && ($outcome$$ = ["fail", this._relevantNodes]);
            return $outcome$$
        }
        getResult($JSCompiler_OptimizeArgumentsArray_p1_outcome$$) {
            if (!1 === this.applicabilityTest()) return this._result.outcome =
                "na", this._result;
            this._relevantNodes = this.candidateSetNodesFunc(this._candidateSetNodesFuncArgs);
            this._numberOfRelevantNodes = this._relevantNodes.length;
            void 0 === $JSCompiler_OptimizeArgumentsArray_p1_outcome$$ && (this._result.outcome = this.passFailFunc());
            if ("numbers" === $JSCompiler_OptimizeArgumentsArray_p1_outcome$$) {
                const $outcome$$ = this.numberIssuesFunc();
                "string" === typeof $outcome$$ ? this._result.outcome = $outcome$$ : (this._result.outcome = $outcome$$[0], this._result.numberOfIssues = $outcome$$[1])
            }
            "instances" ===
            $JSCompiler_OptimizeArgumentsArray_p1_outcome$$ && ($JSCompiler_OptimizeArgumentsArray_p1_outcome$$ = this.issueInstancesFunc(this._relevantNodes), "string" === typeof $JSCompiler_OptimizeArgumentsArray_p1_outcome$$ ? this._result.outcome = $JSCompiler_OptimizeArgumentsArray_p1_outcome$$ : (this._result.outcome = $JSCompiler_OptimizeArgumentsArray_p1_outcome$$[0], this._result.instances = $JSCompiler_OptimizeArgumentsArray_p1_outcome$$[1]));
            return this._result
        }
        getNextGenResultsMetadata() {
            let $outcome$$;
            this.applicabilityTest(this._applicabilityTestArgs) ?
                (this._relevantNodes = Array.from(this.candidateSetNodesFunc(this._candidateSetNodesFuncArgs)), this._numberOfRelevantNodes = this._relevantNodes.length, $outcome$$ = 0 >= this._numberOfRelevantNodes ? "pass" : "fail") : (this._relevantNodes = [], this._numberOfRelevantNodes = 0, $outcome$$ = "na");
            return {
                outcome: $outcome$$,
                failingNodes: this._relevantNodes
            }
        }
        querySelector($cssSelector$$) {
            return this._rootTestNode.matches($cssSelector$$) && this._rootTestNode || this._rootTestNode.querySelector($cssSelector$$)
        }
        querySelectorAll($cssSelector$$) {
            return [this._rootTestNode,
                ...this._rootTestNode.querySelectorAll($cssSelector$$)
            ].filter($el$$ => $el$$.matches($cssSelector$$))
        }
    }(function() {
        var $nameSpace$$ = window.AccNamePrototypeNameSpace || window;
        $nameSpace$$ && "string" === typeof $nameSpace$$ && $nameSpace$$.length && (window[$nameSpace$$] = {}, $nameSpace$$ = window[$nameSpace$$]);
        $nameSpace$$.getAccNameVersion = "2.56";
        $nameSpace$$.getAccName = $nameSpace$$.calcNames = function($node$jscomp$1$$, $fnc$$, $preventVisualARIASelfCSSRef$$, $overrides$$) {
            $overrides$$ = $overrides$$ || {};
            var $docO$$ =
                $overrides$$.document || document,
                $props$$ = {
                    name: "",
                    desc: "",
                    error: ""
                },
                $nameFromPlaceholder$$ = !1,
                $nameFromUserAgent$$ = !1;
            try {
                if (!$node$jscomp$1$$ || 1 !== $node$jscomp$1$$.nodeType) return $props$$;
                var $rootRole$$ = $trim$$($node$jscomp$1$$.getAttribute("role") || ""),
                    $nodes$$ = [],
                    $owns$$ = [],
                    $walk$$ = function($refNode$jscomp$0$$, $stop$$, $skip$$, $nodesToIgnoreValues$$, $skipAbort$$, $ownedBy$$, $skipTo$$) {
                        $skipTo$$ = $skipTo$$ || {};
                        $skipTo$$.tag = $skipTo$$.tag || !1;
                        $skipTo$$.role = $skipTo$$.role || !1;
                        $skipTo$$.go = $skipTo$$.go ||
                            !1;
                        var $fullResult$$ = {
                                name: "",
                                title: ""
                            },
                            $hasLabel$$ = !1,
                            $isException$$ = function($node$jscomp$0$$, $refNode$$) {
                                if (!$refNode$$ || !$node$jscomp$0$$ || 1 !== $refNode$$.nodeType || 1 !== $node$jscomp$0$$.nodeType) return !1;
                                var $role$$ = $getRole$$($node$jscomp$0$$),
                                    $tag$$ = $node$jscomp$0$$.nodeName.toLowerCase(),
                                    $inList$$ = function($node$$, $list$$) {
                                        return $role$$ && 0 <= $list$$.roles.indexOf($role$$) || !$role$$ && 0 <= $list$$.tags.indexOf($tag$$)
                                    };
                                return $inList$$($node$jscomp$0$$, $list3$$) ? $node$jscomp$0$$ !== $refNode$$ || $node$jscomp$0$$.id &&
                                    $ownedBy$$[$node$jscomp$0$$.id] && $ownedBy$$[$node$jscomp$0$$.id].node ? !($inParent$$($node$jscomp$0$$, $ownedBy$$.top) && "select" !== $node$jscomp$0$$.nodeName.toLowerCase() || $inList$$($refNode$$, $list1$$)) : !$isFocusable$$($node$jscomp$0$$) : !(!$inList$$($node$jscomp$0$$, $list2$$) && ($node$jscomp$0$$ !== $node$jscomp$1$$ || $inList$$($node$jscomp$0$$, $list1$$)) || !($role$$ || -1 === ["section"].indexOf($tag$$) || $node$jscomp$0$$.getAttribute("aria-labelledby") || $node$jscomp$0$$.getAttribute("aria-label")) || $skipTo$$.go)
                            },
                            $inParent$$ = function($node$$, $parent$$) {
                                for (var $trackNodes$$ = []; $node$$;) {
                                    $node$$.id && $ownedBy$$[$node$$.id] && $ownedBy$$[$node$$.id].node && -1 === $trackNodes$$.indexOf($node$$) ? ($trackNodes$$.push($node$$), $node$$ = $ownedBy$$[$node$$.id].node) : $node$$ = $node$$.parentNode;
                                    if ($node$$ && $node$$ === $parent$$) return !0;
                                    if (!$node$$ || $node$$ === $ownedBy$$.top || $node$$ === $docO$$.body) break
                                }
                                return !1
                            },
                            $cssOP$$ = {
                                before: "",
                                after: ""
                            };
                        if (!$skipTo$$.tag && !$skipTo$$.role && -1 === $nodes$$.indexOf($refNode$jscomp$0$$) && ($cssOP$$ =
                                $getCSSText$$($refNode$jscomp$0$$, null), $preventVisualARIASelfCSSRef$$)) {
                            if (-1 !== $cssOP$$.before.indexOf(" [ARIA] ") || -1 !== $cssOP$$.before.indexOf(" aria-") || -1 !== $cssOP$$.before.indexOf(" accName: ")) $cssOP$$.before = "";
                            if (-1 !== $cssOP$$.after.indexOf(" [ARIA] ") || -1 !== $cssOP$$.after.indexOf(" aria-") || -1 !== $cssOP$$.after.indexOf(" accDescription: ")) $cssOP$$.after = ""
                        }
                        var $walkDOM$$ = function($node$$, $fn$$, $refNode$$) {
                            var $res$$ = {
                                name: "",
                                title: ""
                            };
                            if (!$node$$) return $res$$;
                            var $nodeIsBlock$$ = !(!$node$$ ||
                                    1 !== $node$$.nodeType || !$isBlockLevelElement$$($node$$)),
                                $currentNode$$ = $node$$,
                                $fResult$$ = $fn$$($node$$) || {};
                            $fResult$$.name && $fResult$$.name.length && ($res$$.name += $fResult$$.name);
                            if (!$fResult$$.skip && !$isException$$($node$$, $ownedBy$$.top))
                                for ($skipTo$$.go && ($skipTo$$.go = !1), $node$$ = $node$$.firstChild; $node$$;) $res$$.name += $walkDOM$$($node$$, $fn$$, $refNode$$).name, $node$$ = $node$$.nextSibling;
                            $res$$.name += $fResult$$.owns || "";
                            $node$jscomp$1$$ === $currentNode$$ && $refNode$$ === $currentNode$$ && !$trim$$($res$$.name) &&
                                $trim$$($fResult$$.title) ? $res$$.name = $addSpacing$$($fResult$$.title) : $node$jscomp$1$$ === $currentNode$$ && $refNode$$ === $currentNode$$ && $trim$$($fResult$$.title) && ($res$$.title = $addSpacing$$($fResult$$.title));
                            $node$jscomp$1$$ === $currentNode$$ && $refNode$$ === $currentNode$$ && $trim$$($fResult$$.desc) && ($res$$.title = $addSpacing$$($fResult$$.desc));
                            $node$jscomp$1$$ === $currentNode$$ && $refNode$$ === $currentNode$$ && $trim$$($fResult$$.placeholder) && !$trim$$($res$$.name) ? ($res$$.name = $addSpacing$$($fResult$$.placeholder),
                                $nameFromPlaceholder$$ = !0) : $node$jscomp$1$$ === $currentNode$$ && $refNode$$ === $currentNode$$ && $trim$$($fResult$$.placeholder) && !$trim$$($res$$.title) && ($res$$.title = $addSpacing$$($fResult$$.placeholder));
                            if ($nodeIsBlock$$ || $fResult$$.isWidget) $res$$.name = $addSpacing$$($res$$.name);
                            return $res$$
                        };
                        $fullResult$$ = $walkDOM$$($refNode$jscomp$0$$, function($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$) {
                            var $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$, $result$$ = {
                                    name: "",
                                    title: "",
                                    owns: "",
                                    skip: !1
                                },
                                $isEmbeddedNode_isSeparatChildFormField$$ = !!($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ && 1 === $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.nodeType && $nodesToIgnoreValues$$ && $nodesToIgnoreValues$$.length && -1 !== $nodesToIgnoreValues$$.indexOf($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$) && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ === $node$jscomp$1$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ !== $refNode$jscomp$0$$),
                                $JSCompiler_temp$jscomp$13_hLabel_refNode$$ = !1;
                            if (($skip$$ || !$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ || $isHidden$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, $ownedBy$$.top)) && !$skipAbort$$ && !$isEmbeddedNode_isSeparatChildFormField$$ || $skipTo$$.tag || $skipTo$$.role || -1 !== $nodes$$.indexOf($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$)) return $result$$;
                            $nodes$$.push($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$);
                            var $labels_name$$ = "",
                                $ariaO_oBy$$ =
                                "",
                                $cssO_trackNodes$$ = {
                                    before: "",
                                    after: ""
                                },
                                $nTag_parent$$ = $refNode$jscomp$0$$ === $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ ? $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ : $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.parentNode;
                            if (!$skipTo$$.tag && !$skipTo$$.role && -1 === $nodes$$.indexOf($nTag_parent$$) && ($nodes$$.push($nTag_parent$$), $cssO_trackNodes$$ = $getCSSText$$($nTag_parent$$, $refNode$jscomp$0$$), $preventVisualARIASelfCSSRef$$)) {
                                if (-1 !== $cssO_trackNodes$$.before.indexOf(" [ARIA] ") ||
                                    -1 !== $cssO_trackNodes$$.before.indexOf(" aria-") || -1 !== $cssO_trackNodes$$.before.indexOf(" accName: ")) $cssO_trackNodes$$.before = "";
                                if (-1 !== $cssO_trackNodes$$.after.indexOf(" [ARIA] ") || -1 !== $cssO_trackNodes$$.after.indexOf(" aria-") || -1 !== $cssO_trackNodes$$.after.indexOf(" accDescription: ")) $cssO_trackNodes$$.after = ""
                            }
                            if (1 === $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.nodeType) {
                                $nTag_parent$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.nodeName.toLowerCase();
                                var $isSkipTo_nRole$$ =
                                    $getRole$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$);
                                var $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-labelledby") || "";
                                var $aDescribedby_lblName_nAlt_r$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-describedby") || "",
                                    $aDescription_nType$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-description"),
                                    $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-label") || "",
                                    $nTitle$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("title") || "",
                                    $isNativeFormField_placeholder$$ = -1 !==
                                    $nativeFormFields$$.indexOf($nTag_parent$$),
                                    $JSCompiler_temp$jscomp$9_btnType_e$$ = -1 !== ["input"].indexOf($nTag_parent$$),
                                    $isRangeWidgetRole$$ = -1 !== $rangeWidgetRoles$$.indexOf($isSkipTo_nRole$$),
                                    $isEditWidgetRole$$ = -1 !== $editWidgetRoles$$.indexOf($isSkipTo_nRole$$),
                                    $isSelectWidgetRole$$ = -1 !== $selectWidgetRoles$$.indexOf($isSkipTo_nRole$$),
                                    $isWidgetRole$$ = (($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ = $isRangeWidgetRole$$ || $isEditWidgetRole$$ || $isSelectWidgetRole$$ ||
                                        "combobox" === $isSkipTo_nRole$$) || -1 !== $otherWidgetRoles$$.indexOf($isSkipTo_nRole$$)) && "link" !== $isSkipTo_nRole$$;
                                $result$$.isWidget = $isNativeFormField_placeholder$$ || $isWidgetRole$$;
                                var $dE_hasName$$ = !1,
                                    $hasDesc$$ = !1,
                                    $aOwns$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-owns") || "";
                                $isEmbeddedNode_isSeparatChildFormField$$ = !($skipTo$$.tag || $skipTo$$.role || $isEmbeddedNode_isSeparatChildFormField$$ || !($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ !== $refNode$jscomp$0$$ &&
                                    ($isNativeFormField_placeholder$$ || $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$) || $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id && $ownedBy$$[$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id] && $ownedBy$$[$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id].target && $ownedBy$$[$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id].target === $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$));
                                if (!$stop$$ && !$skipTo$$.tag &&
                                    !$skipTo$$.role && $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$) {
                                    var $ids$$ = $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$.split(/\s+/);
                                    var $parts$$ = [];
                                    for ($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = 0; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ <
                                        $ids$$.length; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$++) $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ = $docO$$.getElementById($ids$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$]), $parts$$.push($walk$$($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$,
                                        !0, $skip$$, [$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$], $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ === $refNode$jscomp$0$$, {
                                            ref: $ownedBy$$,
                                            top: $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$
                                        }).name);
                                    $labels_name$$ = $trim$$($parts$$.join(" "));
                                    $trim$$($labels_name$$) && ($hasLabel$$ = $JSCompiler_temp$jscomp$13_hLabel_refNode$$ = $dE_hasName$$ = !0, $result$$.skip = !0)
                                }
                                if (!$stop$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ ===
                                    $refNode$jscomp$0$$ && !$skipTo$$.tag && !$skipTo$$.role && ($aDescribedby_lblName_nAlt_r$$ || $aDescription_nType$$)) {
                                    if ($aDescribedby_lblName_nAlt_r$$) {
                                        $ids$$ = $aDescribedby_lblName_nAlt_r$$.split(/\s+/);
                                        $parts$$ = [];
                                        for ($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = 0; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ < $ids$$.length; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$++) $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ =
                                            $docO$$.getElementById($ids$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$]), $parts$$.push($walk$$($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$, !0, !1, [$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$], !1, {
                                                ref: $ownedBy$$,
                                                top: $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$
                                            }).name);
                                        $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ =
                                            $trim$$($parts$$.join(" "))
                                    } else $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = $trim$$($aDescription_nType$$);
                                    $trim$$($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$) && ($result$$.desc = $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$, $hasDesc$$ = !0)
                                }
                                $skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || !$trim$$($JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$) || $isEmbeddedNode_isSeparatChildFormField$$ || ($labels_name$$ = $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$, $trim$$($labels_name$$) && ($JSCompiler_temp$jscomp$13_hLabel_refNode$$ = $dE_hasName$$ = !0, $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ === $refNode$jscomp$0$$ && ($hasLabel$$ = $skip$$ = !0)));
                                if ($JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ = !$skipTo$$.tag && !$skipTo$$.role && !$dE_hasName$$ && "iframe" !== $nTag_parent$$ && $isSkipTo_nRole$$ && -1 !== $presentationRoles$$.indexOf($isSkipTo_nRole$$) && !$isFocusable$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$)) {
                                    a: {
                                        $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ = "labelledby label describedby busy controls current details disabled dropeffect errormessage flowto grabbed haspopup invalid keyshortcuts live owns roledescription".split(" ");
                                        for ($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ =
                                            0; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ < $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$.length; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$++)
                                            if ($trim$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-" + $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$]))) {
                                                $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ = !0;
                                                break a
                                            } $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ = !1
                                    }
                                    $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ = !$JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$
                                }
                                if (!$isEmbeddedNode_isSeparatChildFormField$$) {
                                    if (!$skipTo$$.tag && !$skipTo$$.role && !$dE_hasName$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ === $refNode$jscomp$0$$ && $isNativeFormField_placeholder$$) {
                                        $labels_name$$ =
                                            $docO$$.querySelectorAll("label");
                                        $aDescribedby_lblName_nAlt_r$$ = "";
                                        a: {
                                            $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$;
                                            for ($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ = !1; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$;)
                                                if (($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ =
                                                        $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$.parentNode) && $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$.nodeName && "label" === $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$.nodeName.toLowerCase() && (!$element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ ||
                                                        1 > $getRole$$($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$).length)) break a;$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = {}
                                        }
                                        $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ = $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ ||
                                            !1;
                                        for ($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = 0; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ < $labels_name$$.length; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$++)($labels_name$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$] !==
                                            $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ || "string" === typeof $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$.getAttribute("for")) && $labels_name$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$].getAttribute("for") !== $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id || $isParentHidden$$($labels_name$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$],
                                            $docO$$.body, !0) || ($aDescribedby_lblName_nAlt_r$$ += $addSpacing$$($walk$$($labels_name$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$], !0, $skip$$, [$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$], !1, {
                                            ref: $ownedBy$$,
                                            top: $labels_name$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$]
                                        }).name));
                                        $labels_name$$ = $aDescribedby_lblName_nAlt_r$$;
                                        $trim$$($labels_name$$) && ($dE_hasName$$ = !0)
                                    }
                                    $JSCompiler_temp$jscomp$9_btnType_e$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_temp$jscomp$9_btnType_e$$ && ($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("type") || "").toLowerCase() || !1;
                                    $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_temp$jscomp$9_btnType_e$$ && $trim$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("value")) ||
                                        !1;
                                    $aDescribedby_lblName_nAlt_r$$ = $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ && "img" === $nTag_parent$$ ? "" : $trim$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.alt || $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("alt"));
                                    $skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ || "img" !== $isSkipTo_nRole$$ && "img" !== $nTag_parent$$ && "image" !==
                                        $JSCompiler_temp$jscomp$9_btnType_e$$ || !$aDescribedby_lblName_nAlt_r$$ && !$trim$$($nTitle$$) || ($labels_name$$ = $trim$$($aDescribedby_lblName_nAlt_r$$) || $trim$$($nTitle$$), $trim$$($labels_name$$) && ($dE_hasName$$ = !0));
                                    $skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ || "area" !== $nTag_parent$$ || !$aDescribedby_lblName_nAlt_r$$ || ($labels_name$$ = $trim$$($aDescribedby_lblName_nAlt_r$$), $trim$$($labels_name$$) && ($dE_hasName$$ = !0));
                                    "optgroup" === $nTag_parent$$ && ($skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ || !$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("label") || ($labels_name$$ = $trim$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("label")), $trim$$($labels_name$$) && ($dE_hasName$$ = !0)), $result$$.skip = !0);
                                    if (!$skipTo$$.tag && !$skipTo$$.role && !$dE_hasName$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ ===
                                        $refNode$jscomp$0$$ && $JSCompiler_temp$jscomp$9_btnType_e$$ && -1 !== ["button", "submit", "reset"].indexOf($JSCompiler_temp$jscomp$9_btnType_e$$)) {
                                        if ($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$) $labels_name$$ = $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$;
                                        else switch ($JSCompiler_temp$jscomp$9_btnType_e$$) {
                                            case "submit":
                                                $labels_name$$ =
                                                    "submit";
                                                break;
                                            case "reset":
                                                $labels_name$$ = "reset";
                                                break;
                                            default:
                                                $labels_name$$ = ""
                                        }
                                        $trim$$($labels_name$$) && ($dE_hasName$$ = !0)
                                    }!$skipTo$$.tag && !$skipTo$$.role && $dE_hasName$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ === $refNode$jscomp$0$$ && $JSCompiler_temp$jscomp$9_btnType_e$$ && -1 !== ["button", "submit", "reset"].indexOf($JSCompiler_temp$jscomp$9_btnType_e$$) && $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ &&
                                        $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ !== $labels_name$$ && !$result$$.desc && ($result$$.desc = $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$, $hasDesc$$ = !0);
                                    $skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ !== $refNode$jscomp$0$$ || !$JSCompiler_temp$jscomp$9_btnType_e$$ ||
                                        "image" !== $JSCompiler_temp$jscomp$9_btnType_e$$ || ($labels_name$$ = "Submit Query", $nameFromUserAgent$$ = $dE_hasName$$ = !0);
                                    $skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ !== $node$jscomp$1$$ || "group" !== $isSkipTo_nRole$$ && "radiogroup" !== $isSkipTo_nRole$$ && ($isSkipTo_nRole$$ || "fieldset" !== $nTag_parent$$) || (($JSCompiler_temp$jscomp$9_btnType_e$$ = $firstChild$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, ["legend"], ["legend"]) || !1) && ($labels_name$$ =
                                        $trim$$($walk$$($JSCompiler_temp$jscomp$9_btnType_e$$, $stop$$, !1, [], !1, {
                                            ref: $ownedBy$$,
                                            top: $JSCompiler_temp$jscomp$9_btnType_e$$
                                        }).name)), $trim$$($labels_name$$) && ($dE_hasName$$ = !0), $skip$$ = !0);
                                    $skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ !== $node$jscomp$1$$ || "table" !== $isSkipTo_nRole$$ && ($isSkipTo_nRole$$ || "table" !== $nTag_parent$$) || (($JSCompiler_temp$jscomp$9_btnType_e$$ = $firstChild$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$,
                                        ["caption"], ["caption"]) || !1) && ($labels_name$$ = $trim$$($walk$$($JSCompiler_temp$jscomp$9_btnType_e$$, $stop$$, !1, [], !1, {
                                        ref: $ownedBy$$,
                                        top: $JSCompiler_temp$jscomp$9_btnType_e$$
                                    }).name)), $trim$$($labels_name$$) && ($dE_hasName$$ = !0), $skip$$ = !0);
                                    if (!($skipTo$$.tag || $skipTo$$.role || $dE_hasName$$ || "figure" !== $isSkipTo_nRole$$ && ($isSkipTo_nRole$$ || "figure" !== $nTag_parent$$))) {
                                        if (!($JSCompiler_temp$jscomp$9_btnType_e$$ = $firstChild$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, ["figcaption"],
                                                ["caption"]))) a: for ($JSCompiler_temp$jscomp$9_btnType_e$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = ["figcaption"], $aDescribedby_lblName_nAlt_r$$ = ["caption"], $JSCompiler_temp$jscomp$9_btnType_e$$ = $JSCompiler_temp$jscomp$9_btnType_e$$ ? $JSCompiler_temp$jscomp$9_btnType_e$$.lastChild : null; $JSCompiler_temp$jscomp$9_btnType_e$$;) {
                                            $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ =
                                                $getRole$$($JSCompiler_temp$jscomp$9_btnType_e$$) || !1;
                                            if (1 === $JSCompiler_temp$jscomp$9_btnType_e$$.nodeType && (!$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ && !$aDescribedby_lblName_nAlt_r$$ || $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ && $aDescribedby_lblName_nAlt_r$$ && -1 !== $aDescribedby_lblName_nAlt_r$$.indexOf($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$) ||
                                                    !$element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ && $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ && -1 !== $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$.indexOf($JSCompiler_temp$jscomp$9_btnType_e$$.nodeName.toLowerCase()))) break a;
                                            else if (1 === $JSCompiler_temp$jscomp$9_btnType_e$$.nodeType &&
                                                ($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ || $aDescribedby_lblName_nAlt_r$$)) {
                                                $JSCompiler_temp$jscomp$9_btnType_e$$ = null;
                                                break a
                                            }
                                            $JSCompiler_temp$jscomp$9_btnType_e$$ = $JSCompiler_temp$jscomp$9_btnType_e$$.previousSibling
                                        }($JSCompiler_temp$jscomp$9_btnType_e$$ = $JSCompiler_temp$jscomp$9_btnType_e$$ || !1) && ($labels_name$$ = $trim$$($walk$$($JSCompiler_temp$jscomp$9_btnType_e$$, $stop$$, !1, [], !1, {
                                            ref: $ownedBy$$,
                                            top: $JSCompiler_temp$jscomp$9_btnType_e$$
                                        }).name));
                                        $trim$$($labels_name$$) && ($dE_hasName$$ = !0)
                                    }
                                    $skipTo$$.tag || $skipTo$$.role || "svg" !== $nTag_parent$$ || ($JSCompiler_temp$jscomp$9_btnType_e$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.querySelector("title") || !1, $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ === $node$jscomp$1$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.querySelector("desc") ||
                                        !1, !$dE_hasName$$ && $JSCompiler_temp$jscomp$9_btnType_e$$ && ($labels_name$$ = $trim$$($walk$$($JSCompiler_temp$jscomp$9_btnType_e$$, !0, !1, [], !1, {
                                            ref: $ownedBy$$,
                                            top: $JSCompiler_temp$jscomp$9_btnType_e$$
                                        }).name)), !$hasDesc$$ && $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ && ($dE_hasName$$ = $trim$$($walk$$($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$,
                                            !0, !1, [], !1, {
                                                ref: $ownedBy$$,
                                                top: $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$
                                            }).name), $trim$$($dE_hasName$$) && ($result$$.desc = $dE_hasName$$)), $result$$.skip = !0)
                                }
                                $skipTo$$.tag || $skipTo$$.role || !$isEmbeddedNode_isSeparatChildFormField$$ || $nodesToIgnoreValues$$ && $nodesToIgnoreValues$$.length && -1 !== $nodesToIgnoreValues$$.indexOf($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$) || ($isRangeWidgetRole$$ ? $labels_name$$ =
                                    $getObjectValue$$($isSkipTo_nRole$$, $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, !0) : $isEditWidgetRole$$ || "combobox" === $isSkipTo_nRole$$ && $isNativeFormField_placeholder$$ ? $labels_name$$ = $getObjectValue$$($isSkipTo_nRole$$, $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, !1, !0) : $isSelectWidgetRole$$ ? $labels_name$$ = $getObjectValue$$($isSkipTo_nRole$$, $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, !1, !1, !0) : !$isNativeFormField_placeholder$$ || -1 === ["input", "textarea"].indexOf($nTag_parent$$) ||
                                    $isWidgetRole$$ && !$isEditWidgetRole$$ ? !$isNativeFormField_placeholder$$ || "select" !== $nTag_parent$$ || $isWidgetRole$$ && "combobox" !== $isSkipTo_nRole$$ || ($labels_name$$ = $getObjectValue$$($isSkipTo_nRole$$, $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, !1, !1, !0, !0)) : $labels_name$$ = $getObjectValue$$($isSkipTo_nRole$$, $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, !1, !1, !1, !0), $labels_name$$ = $trim$$($labels_name$$));
                                $skipTo$$.tag || $skipTo$$.role || $JSCompiler_inline_result$jscomp$11_JSCompiler_temp$jscomp$10_aLabel_globalPropsAndStates$$ ||
                                    !$trim$$($nTitle$$) || $labels_name$$ && " " === $aDescription_nType$$ || ($result$$.title = $trim$$($nTitle$$));
                                ($aDescription_nType$$ = $isNativeFormField_placeholder$$ && $trim$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("type") || "").toLowerCase()) || ($aDescription_nType$$ = "text");
                                if ($isNativeFormField_placeholder$$ = !$skipTo$$.tag && !$skipTo$$.role && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ === $node$jscomp$1$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ ===
                                    $refNode$jscomp$0$$ && ($isEditWidgetRole$$ || $isNativeFormField_placeholder$$ && ("textarea" === $nTag_parent$$ || "input" === $nTag_parent$$ && -1 !== "password search tel text url email".split(" ").indexOf($aDescription_nType$$))) && $trim$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("placeholder") || $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-placeholder"))) $result$$.placeholder = $isNativeFormField_placeholder$$;
                                if ($isSkipTo_nRole$$ = $skipTo$$.role && $skipTo$$.role ===
                                    $isSkipTo_nRole$$ || !$isSkipTo_nRole$$ && $skipTo$$.tag && $skipTo$$.tag === $nTag_parent$$) $labels_name$$ = $trim$$($walk$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$, $stop$$, !1, [], !1, {
                                    ref: $ownedBy$$,
                                    top: $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$
                                }).name), $trim$$($labels_name$$) && ($skip$$ = !0);
                                if (!$isSkipTo_nRole$$ && $aOwns$$ && -1 === ["input", "img", "progress"].indexOf($nTag_parent$$)) {
                                    $ids$$ = $aOwns$$.split(/\s+/);
                                    $parts$$ = [];
                                    for ($JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ =
                                        0; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$ < $ids$$.length; $JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$++)($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$ = $docO$$.getElementById($ids$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$])) &&
                                        -1 === $owns$$.indexOf($ids$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$]) && ($owns$$.push($ids$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$]), $ariaO_oBy$$ = {
                                            ref: $ownedBy$$,
                                            top: $ownedBy$$.top
                                        }, $ariaO_oBy$$[$ids$$[$JSCompiler_inline_result$jscomp$12_aLabelledby_btnValue_desc$jscomp$1_i$jscomp$46_i$jscomp$inline_102_node$jscomp$inline_105_svgD_t$$]] = {
                                            refNode: $refNode$jscomp$0$$,
                                            node: $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$,
                                            target: $element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$
                                        }, $isParentHidden$$($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$, $docO$$.body, !0) || $parts$$.push($walk$$($element$jscomp$15_implicitLabel_isSimulatedFormField_noRole$jscomp$inline_108_tr$$, !0, $skip$$, [], !1, $ariaO_oBy$$).name));
                                    $ariaO_oBy$$ = $parts$$.join("")
                                }
                            } else $skipTo$$.tag || $skipTo$$.role ||
                                3 !== $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.nodeType || ($labels_name$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.data);
                            $JSCompiler_temp$jscomp$13_hLabel_refNode$$ || ($labels_name$$ = $cssO_trackNodes$$.before + $labels_name$$.replace(/\s+/g, " ") + $cssO_trackNodes$$.after);
                            if ($JSCompiler_temp$jscomp$13_hLabel_refNode$$ = $labels_name$$.length) {
                                a: {
                                    $JSCompiler_temp$jscomp$13_hLabel_refNode$$ = $ownedBy$$.top;
                                    for ($cssO_trackNodes$$ = []; $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ &&
                                        $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ !== $JSCompiler_temp$jscomp$13_hLabel_refNode$$;)
                                        if ($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id && $ownedBy$$ && $ownedBy$$[$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id] && $ownedBy$$[$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id].node && -1 === $cssO_trackNodes$$.indexOf($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$) ? ($cssO_trackNodes$$.push($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$),
                                                $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ = $ownedBy$$[$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.id].node) : $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ = $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.parentNode, $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ && $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute && ($trim$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$.getAttribute("aria-label")) || $isHidden$$($JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$,
                                                $JSCompiler_temp$jscomp$13_hLabel_refNode$$))) {
                                            $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ = !0;
                                            break a
                                        } $JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$ = !1
                                }
                                $JSCompiler_temp$jscomp$13_hLabel_refNode$$ = !$JSCompiler_inline_result$jscomp$14_node$jscomp$27_node$$
                            }
                            $JSCompiler_temp$jscomp$13_hLabel_refNode$$ && ($result$$.name = $labels_name$$);
                            $result$$.owns = $ariaO_oBy$$;
                            return $result$$
                        }, $refNode$jscomp$0$$);
                        $hasLabel$$ || ($fullResult$$.name = $cssOP$$.before + $fullResult$$.name.replace(/\s+/g,
                            " ") + $cssOP$$.after);
                        return $fullResult$$
                    },
                    $firstChild$$ = function($e$$, $t$$, $r$$, $s$$) {
                        for ($e$$ = $e$$ ? $e$$.firstChild : null; $e$$;) {
                            var $tr$$ = $getRole$$($e$$) || !1;
                            if (1 === $e$$.nodeType && (!$t$$ && !$r$$ || $tr$$ && $r$$ && -1 !== $r$$.indexOf($tr$$) || !$tr$$ && $t$$ && -1 !== $t$$.indexOf($e$$.nodeName.toLowerCase()))) break;
                            else if (!$s$$ && 1 === $e$$.nodeType && ($t$$ || $r$$)) return null;
                            $e$$ = $e$$.nextSibling
                        }
                        return $e$$
                    },
                    $getRole$$ = function($inList$jscomp$1_node$$) {
                        var $role$$ = $inList$jscomp$1_node$$ && $inList$jscomp$1_node$$.getAttribute ?
                            ($inList$jscomp$1_node$$.getAttribute("role") || "").toLowerCase() : "";
                        if (!$trim$$($role$$)) return "";
                        $inList$jscomp$1_node$$ = function($list$$) {
                            return 0 < $trim$$($role$$).length && 0 <= $list$$.roles.indexOf($role$$)
                        };
                        for (var $roles$$ = $role$$.split(/\s+/), $i$$ = 0; $i$$ < $roles$$.length; $i$$++)
                            if ($role$$ = $roles$$[$i$$], $inList$jscomp$1_node$$($list1$$) || $inList$jscomp$1_node$$($list2$$) || $inList$jscomp$1_node$$($list3$$) || $inList$jscomp$1_node$$($list4$$) || -1 !== $presentationRoles$$.indexOf($role$$)) return $role$$;
                        return ""
                    },
                    $isFocusable$$ = function($node$$) {
                        var $nodeName$$ = $node$$.nodeName.toLowerCase();
                        return $node$$.getAttribute("tabindex") || "a" === $nodeName$$ && $node$$.getAttribute("href") ? !0 : -1 !== ["button", "input", "select", "textarea"].indexOf($nodeName$$) && "hidden" !== ($node$$.getAttribute("type") || "").toLowerCase()
                    },
                    $list1$$ = {
                        roles: "button checkbox link option radio switch tab treeitem menuitem menuitemcheckbox menuitemradio row cell gridcell columnheader rowheader tooltip heading".split(" "),
                        tags: "a button summary input h1 h2 h3 h4 h5 h6 menuitem option tr td th".split(" ")
                    },
                    $list2$$ = {
                        roles: "application alert log marquee timer alertdialog dialog banner complementary form main navigation region search article document feed figure img math toolbar menu menubar grid listbox radiogroup textbox searchbox spinbutton scrollbar slider tablist tabpanel tree treegrid separator rowgroup group".split(" "),
                        tags: "article aside body select datalist optgroup dialog figure footer form header hr iframe img textarea input main math menu nav section thead tbody tfoot fieldset".split(" ")
                    },
                    $list3$$ = {
                        roles: "term definition directory list note status table contentinfo".split(" "),
                        tags: "dl ul ol dd details output table".split(" ")
                    },
                    $list4$$ = {
                        roles: ["legend", "caption"],
                        tags: ["legend", "caption", "figcaption"]
                    },
                    $nativeFormFields$$ = ["button", "input", "select", "textarea"],
                    $rangeWidgetRoles$$ = ["scrollbar", "slider", "spinbutton"],
                    $editWidgetRoles$$ = ["searchbox", "textbox"],
                    $selectWidgetRoles$$ = ["grid", "listbox", "tablist", "tree", "treegrid"],
                    $otherWidgetRoles$$ = "button checkbox link switch option menu menubar menuitem menuitemcheckbox menuitemradio radio tab treeitem gridcell".split(" "),
                    $presentationRoles$$ = ["presentation", "none"],
                    $isHidden$$ = $overrides$$.isHidden || function($JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$, $refNode$$) {
                        $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$ && 1 === $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$.nodeType && $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$ !== $refNode$$ ? "true" === $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$.getAttribute("aria-hidden") || $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$.getAttribute("hidden") ?
                            $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$ = !0 : ($JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$ = $getStyleObject$$($JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$), $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$ = "none" === $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$.display || "hidden" === $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$.visibility) : $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$ = !1;
                        return $JSCompiler_inline_result$jscomp$128_node$jscomp$31_style$$
                    },
                    $isParentHidden$$ = function($node$$, $refNode$$, $skipOwned$$, $skipCurrent$$) {
                        for (; $node$$ && $node$$ !== $refNode$$;) {
                            if (!$skipCurrent$$ && 1 === $node$$.nodeType && $isHidden$$($node$$, $refNode$$)) return !0;
                            $skipCurrent$$ = !1;
                            $node$$ = $node$$.parentNode
                        }
                        return !1
                    },
                    $getStyleObject$$ = $overrides$$.getStyleObject || function($node$$) {
                        var $style$$ = {};
                        $docO$$.defaultView && $docO$$.defaultView.getComputedStyle ? $style$$ = $docO$$.defaultView.getComputedStyle($node$$, "") : $node$$.currentStyle && ($style$$ = $node$$.currentStyle);
                        return $style$$
                    },
                    $cleanCSSText$$ = function($node$$, $s$jscomp$7_text$$) {
                        if (-1 !== $s$jscomp$7_text$$.indexOf("attr("))
                            for (var $m$$ = $s$jscomp$7_text$$.match(/attr\((.|\n|\r\n)*?\)/g), $i$$ = 0; $i$$ < $m$$.length; $i$$++) {
                                var $b$$ = $m$$[$i$$].slice(5, -1);
                                $b$$ = $node$$.getAttribute($b$$) || "";
                                $s$jscomp$7_text$$ = $s$jscomp$7_text$$.replace($m$$[$i$$], $b$$)
                            }
                        return $s$jscomp$7_text$$ = $s$jscomp$7_text$$.replace(/url\((.*?)\)\s+\/|url\((.*?)\)/g, "").replace(/^\s+|\s+$/g, "").replace(/"/g, "")
                    },
                    $isBlockLevelElement$$ = function($node$$,
                        $cssObj$$) {
                        var $styleObject$$ = $cssObj$$ || $getStyleObject$$($node$$),
                            $prop$$;
                        for ($prop$$ in $blockStyles$$)
                            for (var $values$$ = $blockStyles$$[$prop$$], $i$$ = 0; $i$$ < $values$$.length; $i$$++)
                                if ($styleObject$$[$prop$$] && (0 === $values$$[$i$$].indexOf("!") && -1 === [$values$$[$i$$].slice(1), "inherit", "initial", "unset"].indexOf($styleObject$$[$prop$$]) || 0 === $styleObject$$[$prop$$].indexOf($values$$[$i$$]))) return !0;
                        return !$cssObj$$ && $node$$.nodeName && -1 !== $blockElements$$.indexOf($node$$.nodeName.toLowerCase()) &&
                            !($styleObject$$.display && 0 === $styleObject$$.display.indexOf("inline") && "br" !== $node$$.nodeName.toLowerCase())
                    },
                    $blockStyles$$ = {
                        display: ["block", "grid", "table", "flow-root", "flex"],
                        position: ["absolute", "fixed"],
                        float: ["left", "right", "inline"],
                        clear: ["left", "right", "both", "inline"],
                        overflow: ["hidden", "scroll", "auto"],
                        "column-count": ["!auto"],
                        "column-width": ["!auto"],
                        "column-span": ["all"],
                        contain: ["layout", "content", "strict"]
                    },
                    $blockElements$$ = "address article aside blockquote br canvas dd div dl dt fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr legend li main nav noscript ol output p pre section table td tfoot th tr ul video".split(" "),
                    $getObjectValue$$ = function($role$$, $node$$, $isRange$$, $isEdit$$, $isSelect$$, $isNative$$) {
                        var $childRoles_val$$ = "",
                            $bypass$$ = !1;
                        $isRange$$ && !$isNative$$ ? $childRoles_val$$ = $node$$.getAttribute("aria-valuetext") || $node$$.getAttribute("aria-valuenow") || "" : $isEdit$$ && !$isNative$$ ? $childRoles_val$$ = $getText$$($node$$) || "" : $isSelect$$ && !$isNative$$ && ($childRoles_val$$ = [], "grid" === $role$$ || "treegrid" === $role$$ ? $childRoles_val$$ = ["gridcell", "rowheader", "columnheader"] : "listbox" === $role$$ ? $childRoles_val$$ = ["option"] : "tablist" === $role$$ ? $childRoles_val$$ = ["tab"] : "tree" === $role$$ && ($childRoles_val$$ = ["treeitem"]), $childRoles_val$$ = $joinSelectedParts$$($node$$, $node$$.querySelectorAll('*[aria-selected="true"]'), !1, $childRoles_val$$), $bypass$$ = !0);
                        $childRoles_val$$ = $trim$$($childRoles_val$$);
                        !$childRoles_val$$ && ($isRange$$ || $isEdit$$) && $node$$.value && ($childRoles_val$$ = $node$$.value);
                        $bypass$$ || $childRoles_val$$ || !$isNative$$ || ($childRoles_val$$ = $isSelect$$ ? $joinSelectedParts$$($node$$, $node$$.querySelectorAll("option[selected]"),
                            !0) : $node$$.value);
                        return $childRoles_val$$
                    },
                    $addSpacing$$ = function($s$$) {
                        return $trim$$($s$$).length ? " " + $s$$ + " " : " "
                    },
                    $joinSelectedParts$$ = function($node$jscomp$38_parts$$, $nOA$$, $isNative$$, $childRoles$$) {
                        if (!$nOA$$ || !$nOA$$.length) return "";
                        $node$jscomp$38_parts$$ = [];
                        for (var $i$$ = 0; $i$$ < $nOA$$.length; $i$$++) {
                            var $role$$ = $getRole$$($nOA$$[$i$$]);
                            $childRoles$$ && -1 === $childRoles$$.indexOf($role$$) || $node$jscomp$38_parts$$.push($isNative$$ ? $getText$$($nOA$$[$i$$]) : $walk$$($nOA$$[$i$$], !0, !1, [], !1, {
                                top: $nOA$$[$i$$]
                            }).name)
                        }
                        return $node$jscomp$38_parts$$.join(" ")
                    },
                    $getPseudoElStyleObj$$ = $overrides$$.getPseudoElStyleObj || function($node$$, $position$$) {
                        var $styleObj$$ = {},
                            $prop$$;
                        for ($prop$$ in $blockStyles$$) $styleObj$$[$prop$$] = $docO$$.defaultView.getComputedStyle($node$$, $position$$).getPropertyValue($prop$$);
                        $styleObj$$.content = $docO$$.defaultView.getComputedStyle($node$$, $position$$).getPropertyValue("content").replace(/^"|\\|"$/g, "");
                        return $styleObj$$
                    },
                    $getText$$ = function($node$$, $position$$) {
                        if (!$position$$ &&
                            1 === $node$$.nodeType) return $node$$.innerText || $node$$.textContent || "";
                        $node$$ = $getPseudoElStyleObj$$($node$$, $position$$);
                        var $text$$ = $node$$.content;
                        if (!$text$$ || "none" === $text$$) return "";
                        $isBlockLevelElement$$({}, $node$$) && (":before" === $position$$ ? $text$$ += " " : ":after" === $position$$ && ($text$$ = " " + $text$$));
                        return $text$$
                    },
                    $getCSSText$$ = $overrides$$.getCSSText || function($node$$, $refNode$$) {
                        return $node$$ && 1 !== $node$$.nodeType || $node$$ === $refNode$$ || -1 !== "input select textarea img iframe optgroup".split(" ").indexOf($node$$.nodeName.toLowerCase()) ? {
                            before: "",
                            after: ""
                        } : {
                            before: $cleanCSSText$$($node$$, $getText$$($node$$, ":before")),
                            after: $cleanCSSText$$($node$$, $getText$$($node$$, ":after"))
                        }
                    };
                if ($isParentHidden$$($node$jscomp$1$$, $docO$$.body, !0, !(!$node$jscomp$1$$ || !$node$jscomp$1$$.nodeName || "area" !== $node$jscomp$1$$.nodeName.toLowerCase()))) return $props$$;
                var $accProps$$ = $walk$$($node$jscomp$1$$, !1, !1, [], !1, {
                        top: $node$jscomp$1$$
                    }),
                    $accName$$ = $trim$$($accProps$$.name.replace(/\s+/g, " ")),
                    $accDesc$$ = $trim$$($accProps$$.title.replace(/\s+/g,
                        " "));
                $accName$$ === $accDesc$$ && ($accDesc$$ = "");
                $props$$.hasUpperCase = $rootRole$$ && $rootRole$$ !== $rootRole$$.toLowerCase() ? !0 : !1;
                $props$$.name = $accName$$;
                $props$$.desc = $accDesc$$;
                $nodes$$ = [];
                $owns$$ = []
            } catch ($e$$) {
                $props$$.error = $e$$
            }
            $props$$.placeholder = $nameFromPlaceholder$$;
            $props$$.userAgent = $nameFromUserAgent$$;
            return $fnc$$ && "function" === typeof $fnc$$ ? $fnc$$.apply($node$jscomp$1$$, [$props$$, $node$jscomp$1$$]) : $props$$
        };
        var $trim$$ = function($str$$) {
            return "string" !== typeof $str$$ ? "" : $str$$.replace(/^\s+|\s+$/g,
                "")
        };
        $nameSpace$$.getAccNameMsg = $nameSpace$$.getNames = function($node$jscomp$44_props$$, $overrides$jscomp$1_r$$) {
            $node$jscomp$44_props$$ = $nameSpace$$.getAccName($node$jscomp$44_props$$, null, !1, $overrides$jscomp$1_r$$);
            if ($node$jscomp$44_props$$.error) return $node$jscomp$44_props$$.error + "\n\nAn error has been thrown in AccName Prototype version " + $nameSpace$$.getAccNameVersion + ". Please copy this error message and the HTML markup that caused it, and submit both as a new GitHub issue at\nhttps://github.com/whatsock/w3c-alternative-text-computation";
            $overrides$jscomp$1_r$$ = 'accName: "' + $node$jscomp$44_props$$.name + '"\n\naccDesc: "' + $node$jscomp$44_props$$.desc + '"\n\n';
            $node$jscomp$44_props$$.placeholder && ($overrides$jscomp$1_r$$ += "Name from placeholder: true\n\n");
            $node$jscomp$44_props$$.userAgent && ($overrides$jscomp$1_r$$ += "Name from user agent: true\n\n");
            return $overrides$jscomp$1_r$$ += "(Running AccName Computation Prototype version: " + $nameSpace$$.getAccNameVersion + ")"
        };
        "object" === typeof module && module.exports && (module.exports = {
            getNames: $nameSpace$$.getNames,
            calcNames: $nameSpace$$.calcNames
        })
    })();
    const $calcNames$$ = window.LevelAccess_CalcNames.calcNames,
        $testUtil_ariaRoleLookupTable$$ = {
            command: !0,
            composite: !0,
            input: !0,
            landmark: !0,
            range: !0,
            roletype: !0,
            section: !0,
            sectionhead: !0,
            select: !0,
            structure: !0,
            widget: !0,
            window: !0,
            alert: !0,
            alertdialog: !0,
            button: !0,
            checkbox: !0,
            dialog: !0,
            gridcell: !0,
            link: !0,
            log: !0,
            marquee: !0,
            menuitem: !0,
            menuitemcheckbox: !0,
            menuitemradio: !0,
            option: !0,
            progressbar: !0,
            radio: !0,
            scrollbar: !0,
            searchbox: !0,
            slider: !0,
            spinbutton: !0,
            status: !0,
            "switch": !0,
            tab: !0,
            tabpanel: !0,
            textbox: !0,
            timer: !0,
            tooltip: !0,
            treeitem: !0,
            combobox: !0,
            grid: !0,
            listbox: !0,
            menu: !0,
            menubar: !0,
            radiogroup: !0,
            tablist: !0,
            tree: !0,
            treegrid: !0,
            application: !0,
            article: !0,
            cell: !0,
            columnheader: !0,
            definition: !0,
            directory: !0,
            document: !0,
            feed: !0,
            figure: !0,
            group: !0,
            heading: !0,
            img: !0,
            list: !0,
            listitem: !0,
            math: !0,
            none: !0,
            note: !0,
            presentation: !0,
            region: !0,
            row: !0,
            rowgroup: !0,
            rowheader: !0,
            separator: !0,
            table: !0,
            term: !0,
            toolbar: !0,
            banner: !0,
            complementary: !0,
            contentinfo: !0,
            form: !0,
            main: !0,
            navigation: !0,
            search: !0,
            "graphics-document": !0,
            "graphics-object": !0,
            "graphics-symbol": !0,
            "doc-abstract": !0,
            "doc-acknowledgments": !0,
            "doc-afterword": !0,
            "doc-appendix": !0,
            "doc-backlink": !0,
            "doc-biblioentry": !0,
            "doc-bibliography": !0,
            "doc-biblioref": !0,
            "doc-chapter": !0,
            "doc-colophon": !0,
            "doc-conclusion": !0,
            "doc-cover": !0,
            "doc-credit": !0,
            "doc-credits": !0,
            "doc-dedication": !0,
            "doc-endnote": !0,
            "doc-endnotes": !0,
            "doc-epigraph": !0,
            "doc-epilogue": !0,
            "doc-errata": !0,
            "doc-example": !0,
            "doc-footnote": !0,
            "doc-foreword": !0,
            "doc-glossary": !0,
            "doc-glossref": !0,
            "doc-index": !0,
            "doc-introduction": !0,
            "doc-noteref": !0,
            "doc-notice": !0,
            "doc-pagebreak": !0,
            "doc-pagelist": !0,
            "doc-part": !0,
            "doc-preface": !0,
            "doc-prologue": !0,
            "doc-pullquote": !0,
            "doc-qna": !0,
            "doc-subtitle": !0,
            "doc-tip": !0,
            "doc-toc": !0
        },
        $testUtil_ariaAttributeLookupTable$$ = {
            "aria-activedescendant": !0,
            "aria-atomic": !0,
            "aria-autocomplete": !0,
            "aria-busy": !0,
            "aria-checked": !0,
            "aria-colcount": !0,
            "aria-colindex": !0,
            "aria-colspan": !0,
            "aria-controls": !0,
            "aria-current": !0,
            "aria-describedby": !0,
            "aria-details": !0,
            "aria-disabled": !0,
            "aria-errormessage": !0,
            "aria-expanded": !0,
            "aria-flowto": !0,
            "aria-haspopup": !0,
            "aria-hidden": !0,
            "aria-invalid": !0,
            "aria-keyshortcuts": !0,
            "aria-label": !0,
            "aria-labelledby": !0,
            "aria-level": !0,
            "aria-live": !0,
            "aria-modal": !0,
            "aria-multiline": !0,
            "aria-multiselectable": !0,
            "aria-orientation": !0,
            "aria-owns": !0,
            "aria-placeholder": !0,
            "aria-posinset": !0,
            "aria-pressed": !0,
            "aria-readonly": !0,
            "aria-relevant": !0,
            "aria-required": !0,
            "aria-rowcount": !0,
            "aria-rowindex": !0,
            "aria-rowspan": !0,
            "aria-selected": !0,
            "aria-setsize": !0,
            "aria-sort": !0,
            "aria-valuemax": !0,
            "aria-valuemin": !0,
            "aria-valuenow": !0,
            "aria-valuetext": !0
        };
    $exports$$.test_outcomes = $aeKernel$$.test_outcomes;
    let $resultsAsJSON$$ = {
        parse: function($text$$, $reviver$$) {
            return "string" === typeof $text$$ && "function" === typeof $text$$.evalJSON ? $text$$.evalJSON() : JSON.parseJSON($text$$, $reviver$$)
        },
        stringify: function($value$$, $replacer$$, $space$$) {
            return "undefined" !== typeof $value$$ && "function" === typeof $value$$.toJSON ? $value$$.toJSON() :
                JSON.stringify($value$$, $replacer$$, $space$$)
        }
    };
    $exports$$.test_analytics_outcomes = $aeKernel$$.test_analytics_outcomes;
    (function() {
        $aeKernel$$.addAutomaticTest("8", {
            bestPractice: 1626,
            testId: 8,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-details attribute that is not set to a valid id.",
            metaText: "This element has an aria-details attribute that is set to an invalid or duplicate id",
            metaTextDetail: "This {{tag-name}} has an aria-details attribute that is set to an invalid or duplicate id of {{aria-details}}",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-details]:not([aria-details=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-details]:not([aria-details=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $detailsId_refNodeLength$$ = $n$$.getAttribute("aria-details");
                        !0 === $isValidIdOrName$$($detailsId_refNodeLength$$) ?
                            ($detailsId_refNodeLength$$ = $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $detailsId_refNodeLength$$.replace(/'/g, "\\'") + "']").length, (0 === $detailsId_refNodeLength$$ || 1 < $detailsId_refNodeLength$$) && $nodesWithBadIds$$.push($n$$)) : $nodesWithBadIds$$.push($n$$)
                    }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("14", {
            bestPractice: 1626,
            testId: 14,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, excluding th elements (without an ARIA-assigned role), and elements with a role='rowheader... | columnheader...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-sort attribute.",
            metaText: "The aria-sort attribute is not allowed on this element",
            metaTextDetail: "The aria-sort attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*:not(th[data-ae_ar="null"]):not([data-ae_ar="rowheader"]):not([data-ae_ar="columnheader"])[data-ae_vis][data-ae_avat]', '*:not(th[data-ae_ar="null"]):not([data-ae_ar="rowheader"]):not([data-ae_ar="columnheader"])[data-ae_vis][data-ae_avat][aria-sort]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("15", {
            bestPractice: 338,
            testId: 15,
            introduced: .9,
            mediaType: 1,
            description: "One or more input elements, excluding input type='image' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an alt attribute.",
            metaText: "The alt attribute is not allowed on this element",
            metaTextDetail: "The alt attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([type="image"])',
                    'input[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([type="image"])[alt]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("16", {
            bestPractice: 1626,
            testId: 16,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, excluding textarea elements (without an ARIA-assigned role) and elements with a role='textbox...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-multiline attribute.",
            metaText: "The aria-multiline attribute is not allowed on this element",
            metaTextDetail: "The aria-multiline attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*:not(textarea[data-ae_ar="null"]):not([data-ae_ar="textbox"])[data-ae_vis][data-ae_avat]', '*:not(textarea[data-ae_ar="null"]):not([data-ae_ar="textbox"])[data-ae_vis][data-ae_avat][aria-multiline]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("21", {
            bestPractice: 1626,
            testId: 21,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-live attribute that is not set to one of the following text values: 'off | polite | assertive'.",
            metaText: "This element's aria-live attribute should be set to one of the following text values: off | polite | assertive",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-live]", '*[data-ae_vis][data-ae_avat][aria-live]:not([aria-live="off"]):not([aria-live="polite"]):not([aria-live="assertive"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("22", {
            bestPractice: 967,
            testId: 22,
            introduced: .9,
            mediaType: 1,
            description: "One or more A elements, without an ARIA-assigned role, not intentionally hidden in the DOM, contained one or more input elements (without an assigned ARIA role and not type=hidden), keygen elements (without an assigned ARIA role), select elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role) or button elements (without an assigned ARIA role).",
            metaText: "This element should not contain input elements (without an assigned ARIA role and not type=hidden), keygen elements (without an assigned ARIA role), select elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role) or button elements (without an assigned ARIA role)",
            metaTextDetail: "This {{tag-name}} should not contain input elements (without an assigned ARIA role and not type=hidden), keygen elements (without an assigned ARIA role), select elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role) or button elements (without an assigned ARIA role)",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('a[data-ae_vis][data-ae_ar="null"]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $notProper$$ = [],
                        $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('a[data-ae_vis][data-ae_ar="null"]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $result$$ = $res$$[$i$$];
                        $result$$.querySelector('input[data-ae_ar="null"]:not([type="hidden"]), keygen[data-ae_ar="null"], select[data-ae_ar="null"], textarea[data-ae_ar="null"], button[data-ae_ar="null"]') &&
                            $notProper$$.push($result$$)
                    }
                    return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("26", {
            bestPractice: 1626,
            testId: 26,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='radio' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false'.",
            metaText: "This element (role=radio) does not have an aria-checked attribute set to one of the text values: true | false",
            metaTextDetail: "This {{tag-name}} (role=radio) does not have an aria-checked attribute set to one of the text values: true | false",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="radio"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("27", {
            bestPractice: 1626,
            testId: 27,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='option' attribute and is a child of an element with a aria-multiselectable attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-selected attribute set one of the text values: 'true | false'.",
            metaText: "This element (role=option) does not have an aria-selected attribute set to one of the text values: true | false",
            metaTextDetail: "This {{tag-name}} (role=option) does not have an aria-selected attribute set to one of the text values: true | false",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-multiselectable] *[data-ae_vis][data-ae_avat][data-ae_ar="option"]', '*[data-ae_vis][data-ae_avat][aria-multiselectable] *[data-ae_vis][data-ae_avat][data-ae_ar="option"][aria-selected]:not([aria-selected="true"]):not([aria-selected="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("28", {
            bestPractice: 1626,
            testId: 28,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='scrollbar' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute.",
            metaText: "This element (role=scrollbar) must have all of the following attributes: aria-controls | aria-orientation | aria-valuemax | aria-valuemin | aria-valuenow",
            metaTextDetail: "This {{tag-name}} (role=scrollbar) must have all of the following attributes: aria-controls | aria-orientation | aria-valuemax | aria-valuemin | aria-valuenow",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-controls]), \n\t\t\t\t*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-orientation]), \n\t\t\t\t*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-valuemax]), \n\t\t\t\t*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-valuemin]), \n\t\t\t\t*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-valuenow])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("31", {
            bestPractice: 389,
            testId: 31,
            introduced: .9,
            mediaType: 1,
            description: "One or more track elements with a kind='captions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a srclang attribute set to a text value.",
            metaText: "This element does not have a srclang attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a srclang attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"]', 'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"]:not([srclang]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"][srclang=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("33", {
            bestPractice: 1626,
            testId: 33,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='spinbutton' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute.",
            metaText: "This element (role=spinbutton) does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute",
            metaTextDetail: "This {{tag-name}} (role=spinbutton) does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([aria-valuemax]), *[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([aria-valuemin]), *[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([aria-valuenow])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("34", {
            bestPractice: 1342,
            testId: 34,
            introduced: .9,
            mediaType: 1,
            description: "One or more blink elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
            metaText: "The blink element is obsolete and should not be used",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("blink", 'blink[data-ae_ar="null"][data-ae_vis]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("35", {
            bestPractice: 941,
            testId: 35,
            introduced: .9,
            mediaType: 1,
            description: "One or more th elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
            metaText: "This th element should not be empty",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('th[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'th[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("37", {
            bestPractice: 1626,
            testId: 37,
            introduced: .9,
            mediaType: 1,
            description: "One or more A elements with an href attribute, excluding those with a role='link...' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'button... | checkbox... | menuitem... | menuitemcheckbox... | menuitemradio... | option... | radio... | tab... | switch... | treeitem...'",
            metaText: "The role attribute value given to this element is not allowed.  The element's role attribute should be set to one of the following text values: button | checkbox | menuitem | menuitemcheckbox | menuitemradio | radio | tab | switch | treeitem; or the role attribute can be removed",
            metaTextDetail: "The role attribute value of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  The element's role attribute should be set to one of the following text values: button | checkbox | menuitem | menuitemcheckbox | menuitemradio | radio | tab | switch | treeitem; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('a[data-ae_vis][data-ae_avat][href]:not([data-ae_ar="null"]):not([data-ae_ar="link"])', 'a[data-ae_vis][data-ae_avat][href]:not([data-ae_ar="null"]):not([data-ae_ar="link"]):not([data-ae_ar="button"]):not([data-ae_ar="checkbox"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="option"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="switch"]):not([data-ae_ar="treeitem"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("38", {
            bestPractice: 1626,
            testId: 38,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, excluding button elements (without an ARIA-assigned role), input type='button | submit | reset | image' elements (without an ARIA-assigned role), and elements with a role='button...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-pressed attribute.",
            metaText: "This element should not have an aria-pressed attribute",
            metaTextDetail: "This {{tag-name}} with a role of '{{data-ae_ar}}' should not have an aria-pressed attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*:not(button[data-ae_ar="null"]):not(input[type="button"][data-ae_ar="null"]):not(input[type="submit"][data-ae_ar="null"]):not(input[type="reset"][data-ae_ar="null"]):not(input[type="image"][data-ae_ar="null"]):not([data-ae_ar="button"])', '*:not(button[data-ae_ar="null"]):not(input[type="button"][data-ae_ar="null"]):not(input[type="submit"][data-ae_ar="null"]):not(input[type="reset"][data-ae_ar="null"]):not(input[type="image"][data-ae_ar="null"]):not([data-ae_ar="button"])[aria-pressed]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("40", {
            bestPractice: 2049,
            testId: 40,
            introduced: .9,
            mediaType: 1,
            description: "One or more track elements with a kind='captions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a label attribute set to a text value.",
            metaText: "This element does not have a label attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a label attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"]', 'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"]:not([label]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"][label=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("41", {
            bestPractice: 1626,
            testId: 41,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='switch' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false'.",
            metaText: "This element (role=switch) does not have an aria-checked attribute set to one of the text values: true | false",
            metaTextDetail: "This {{tag-name}} (role=switch) does not have an aria-checked attribute set to one of the text values: true | false",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="switch"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="switch"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("43", {
            bestPractice: 441,
            testId: 43,
            introduced: .9,
            mediaType: 1,
            description: "One or more marquee elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
            metaText: "The marquee element is obsolete and should not be used",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("marquee", 'marquee[data-ae_ar="null"][data-ae_vis]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("44", {
            bestPractice: 1626,
            testId: 44,
            introduced: .9,
            mediaType: 1,
            description: "One or more hr elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("hr[data-ae_vis][data-ae_avat]", 'hr[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("48", {
            bestPractice: 414,
            testId: 48,
            introduced: .9,
            mediaType: 1,
            description: "One or more tr elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, contains two or more descendant elements (without an ARIA-assigned role) that have been given a scope attribute set to the text value 'row'.",
            metaText: "This element should not contain two or more descendant elements (without an ARIA-assigned role) that have been given a scope attribute set to the text value: row",
            metaTextDetail: "This {{tag-name}} should not contain two or more descendant elements (without an ARIA-assigned role) that have been given a scope attribute set to the text value: row",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('tr[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $notAllowed$$ = [],
                        $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('tr[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $result$$ = $res$$[$i$$];
                        let $numBadChildren$$ = 0;
                        const $tableAncestor$$ = $result$$.closest("table"),
                            $childrenWithScope$$ = $result$$.querySelectorAll('*[data-ae_ar="null"][scope="row"]');
                        for (let $j$$ = 0; $j$$ < $childrenWithScope$$.length; $j$$++) $childrenWithScope$$[$j$$].closest("table") === $tableAncestor$$ && $numBadChildren$$++;
                        2 <= $numBadChildren$$ &&
                            $notAllowed$$.push($result$$)
                    }
                    return $notAllowed$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("50", {
            bestPractice: 1626,
            testId: 50,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-busy attribute that is not set to one of the text values: 'true | false'.",
            metaText: "This element's aria-busy attribute should be set to one of the following text values: true | false",
            metaTextDetail: "This {{tag-name}}'s aria-busy attribute should be set to one of the following text values: true | false",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-busy]", '*[data-ae_vis][data-ae_avat][aria-busy]:not([aria-busy="true"]):not([aria-busy="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("51", {
            bestPractice: 1626,
            testId: 51,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-errormessage attribute that is not set to a valid id.",
            metaText: "This element has an aria-errormessage attribute that is set to an invalid or duplicate id",
            metaTextDetail: "This {{tag-name}} has an aria-errormessage attribute that is set to an invalid or duplicate id of {{aria-errormessage}}",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-errormessage]:not([aria-errormessage=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-errormessage]:not([aria-errormessage=""])'), $i$$ = 0, $len_res$$ =
                            $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $detailsId$jscomp$1_refNodeLength$$ = $n$$.getAttribute("aria-errormessage");
                        !0 === $isValidIdOrName$$($detailsId$jscomp$1_refNodeLength$$) ? ($detailsId$jscomp$1_refNodeLength$$ = $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $detailsId$jscomp$1_refNodeLength$$.replace(/'/g, "\\'") + "']").length, (0 === $detailsId$jscomp$1_refNodeLength$$ || 1 < $detailsId$jscomp$1_refNodeLength$$) && $nodesWithBadIds$$.push($n$$)) : $nodesWithBadIds$$.push($n$$)
                    }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("53", {
            bestPractice: 1626,
            testId: 53,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-relevant attribute that is set to a value that contains values other than: 'additions | additions text | additions removals | all | removals | text'.",
            metaText: "This element's aria-relevant attribute should only include one or more of the following text values: additions | additions text | additions removals | all | removals | text",
            metaTextDetail: "This {{tag-name}}'s aria-relevant attribute should only include one or more of the following text values: additions | additions text | additions removals | all | removals | text",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-relevant]", '*[data-ae_vis][data-ae_avat][aria-relevant]:not([aria-relevant="additions"]):not([aria-relevant="additions text"]):not([aria-relevant="additions removals"]):not([aria-relevant="all"]):not([aria-relevant="removals"]):not([aria-relevant="text"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("54", {
            bestPractice: 1626,
            testId: 54,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-atomic attribute that is not set to one of the text values: 'true | false'.",
            metaText: "This element's aria-atomic attribute should be set to one of the following text values: true | false",
            metaTextDetail: "This {{tag-name}}'s aria-atomic attribute should be set to one of the following text values: true | false",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-atomic]", '*[data-ae_vis][data-ae_avat][aria-atomic]:not([aria-atomic="true"]):not([aria-atomic="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("55", {
            bestPractice: 410,
            testId: 55,
            introduced: .9,
            mediaType: 1,
            description: "One or more meta elements, in the head element, has a content attribute set to a value that includes an instruction that stops a user scaling the viewport size i.e. 'user-scalable=no'.",
            metaText: "This element has a content attribute set to a value that includes an instruction that stops a user scaling the viewport size",
            metaTextDetail: "This {{tag-name}} has a content attribute set to a value that includes an instruction that stops a user scaling the viewport size",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: 'Select "Save" to change the viewport content attribute to "width=device-width, initial-scale=1.0", or "Cancel" if the fix should not be applied.',
                fix: {
                    content: "width=device-width, initial-scale=1.0"
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$("head meta[content]", 'head meta[content][content~="user-scalable=no"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("57", {
            bestPractice: 1626,
            testId: 57,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-orientation attribute that is not set to one of the following text values: 'horizontal | vertical'.",
            metaText: "This element's aria-orientation attribute should be set to one of the following text values: horizontal | vertical",
            metaTextDetail: "This {{tag-name}}'s aria-orientation attribute should be set to one of the following text values: horizontal | vertical",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-orientation]", '*[data-ae_vis][data-ae_avat][aria-orientation]:not([aria-orientation="horizontal"]):not([aria-orientation="vertical"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("59", {
            bestPractice: 410,
            testId: 59,
            introduced: .9,
            mediaType: 1,
            description: "One or more meta elements, in the head element, has a content attribute set to a value that includes an instruction that sets the viewport's maximum-scale to less than 2 e.g. 'maximum-scale=1.0'.",
            metaText: "This element has a content attribute set to a value that includes an instruction that sets the viewport's maximum-scale to less than 2",
            metaTextDetail: "This {{tag-name}} has a content attribute set to a value that includes an instruction that sets the viewport's maximum-scale to less than 2",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: 'Select "Save" to change the viewport content attribute to "width=device-width, initial-scale=1.0", or "Cancel" if the fix should not be applied.',
                fix: {
                    content: "width=device-width, initial-scale=1.0"
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$("head meta[content]", '[content*="maximum-scale=0"];[content*="maximum-scale=1,"];[content*="maximum-scale=1 "];[content$="maximum-scale=1"];[content*="maximum-scale=1."];[content*="maximum-scale=yes"];[content*="maximum-scale=-"]'.split(";").map($subSelector$$ => `${"head meta[content]"}${$subSelector$$}`).join(", "))
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("61", {
            bestPractice: 347,
            testId: 61,
            introduced: .9,
            mediaType: 1,
            description: "One or more meta elements, in the head element, that had an http-equiv attribute set to the text value 'refresh' did not have a zero second time limit set in their content attribute.",
            metaText: "This meta element has an http-equiv attribute set to the value: refresh; with a content attribute set greater than zero seconds",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('head meta[http-equiv="refresh"][content]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $notAllowed$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('head meta[http-equiv="refresh"][content]:not([content=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $result$$ =
                            $res$$[$i$$],
                            $content$$ = $result$$.getAttribute("content"),
                            $semiColonPos$$ = $content$$.indexOf(";"); - 1 !== $semiColonPos$$ && "0" !== $content$$.substring(0, $semiColonPos$$) && $notAllowed$$.push($result$$)
                    }
                    return $notAllowed$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("64", {
            bestPractice: 1626,
            testId: 64,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuemax attribute that is not set to 0, or a + / - integer.",
            metaText: "This element has an aria-valuemax attribute that is not set to a + / - integer",
            metaTextDetail: "This {{tag-name}} has an aria-valuemax attribute that is not set to a + / - integer",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-valuemax]:not([aria-valuemax=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadValues$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-valuemax]:not([aria-valuemax=""])'),
                            $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $val$$ = $n$$.getAttribute("aria-valuemax");
                        !0 === isNaN($val$$) && $nodesWithBadValues$$.push($n$$)
                    }
                    return $nodesWithBadValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("65", {
            bestPractice: 389,
            testId: 65,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, excluding the root html node, not intentionally hidden in the DOM and available to assistive technologies, has a lang attribute set to a text value that is not empty and does not start with an IANA primary language value.",
            metaText: "This element has a lang attribute set to a text value that does not start with an IANA Language Subtag Registry language",
            metaTextDetail: 'This {{tag-name}} has a lang attribute set to a text value of "{{lang}}", which does not start with an IANA Language Subtag Registry language',
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*:not(:root)[data-ae_vis][data-ae_avat][lang]:not([lang=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $notProper$$ = [],
                        $res$$ =
                        $aeKernel$$.rootTestNode.querySelectorAll("*[data-ae_vis][data-ae_avat][lang]:not(:root)");
                    for (let $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        const $result$$ = $res$$[$i$$];
                        let $lang$$ = $result$$.getAttribute("lang");
                        $lang$$ = $lang$$.split("-")[0].toLowerCase();
                        (2 > $lang$$.length || 3 < $lang$$.length || !$ACCEPTED_LANGUAGE_SUBTAGS$$[$lang$$]) && $notProper$$.push($result$$)
                    }
                    return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("66", {
            bestPractice: 1626,
            testId: 66,
            introduced: .9,
            mediaType: 1,
            description: "One or more head elements, has a role attribute and/or an aria attribute.",
            metaText: "This element has a role attribute and/or an aria attribute",
            metaTextDetail: "This {{tag-name}} has a role attribute and/or an aria attribute",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("head");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    var $notProper$$ = [],
                        $head$$ = this.querySelector("head");
                    if ($head$$.hasAttribute("role")) return $notProper$$.push($head$$),
                        $notProper$$;
                    for (var $head_attributes$$ = $head$$.attributes, $i$$ = $head_attributes$$.length; $i$$--;)
                        if ("aria" === $head_attributes$$[$i$$].name.substring(0, 4).toLowerCase()) {
                            $notProper$$.push($head$$);
                            break
                        } return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("67", {
            bestPractice: 1626,
            testId: 67,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuenow attribute that is not set to 0, or a + / - integer.",
            metaText: "This element has an aria-valuenow attribute that is not set to a + / - integer",
            metaTextDetail: "This {{tag-name}} has an aria-valuenow attribute that is not set to a + / - integer",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-valuenow]:not([aria-valuenow=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadValues$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-valuenow]:not([aria-valuenow=""])'),
                            $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $val$$ = $n$$.getAttribute("aria-valuenow");
                        !0 === isNaN($val$$) && $nodesWithBadValues$$.push($n$$)
                    }
                    return $nodesWithBadValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("69", {
            bestPractice: 1626,
            testId: 69,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuemin attribute that is not set to 0, or a + / - integer.",
            metaText: "This element has an aria-valuemin attribute that is not set to a + / - integer",
            metaTextDetail: "This {{tag-name}} has an aria-valuemin attribute that is not set to a + / - integer",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-valuemin]:not([aria-valuemin=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadValues$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-valuemin]:not([aria-valuemin=""])'),
                            $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $val$$ = $n$$.getAttribute("aria-valuemin");
                        !0 === isNaN($val$$) && $nodesWithBadValues$$.push($n$$)
                    }
                    return $nodesWithBadValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("71", {
            bestPractice: 1626,
            testId: 71,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='heading' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-level attribute.",
            metaText: "This element (role=heading) does not have an aria-level attribute",
            metaTextDetail: "This {{tag-name}} (role=heading) does not have an aria-level attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="heading"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="heading"]:not([aria-level])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("74", {
            bestPractice: 1626,
            testId: 74,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-level attribute that is not set to an integer value that is greater than, or equal to, 1.",
            metaText: "This element has an aria-level attribute that is not set to an integer value that is greater than, or equal to, 1",
            metaTextDetail: "This {{tag-name}} has an aria-level attribute of {{aria-level}}, which is not an integer value greater than, or equal to, 1",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-level]");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadValues$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll("*[data-ae_vis][data-ae_avat][aria-level]"),
                            $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $num$jscomp$6_val$$ = $n$$.getAttribute("aria-level");
                        !1 === isNaN($num$jscomp$6_val$$) ? ($num$jscomp$6_val$$ = parseFloat($num$jscomp$6_val$$), (0 >= $num$jscomp$6_val$$ || ($num$jscomp$6_val$$ ^ 0) === $num$jscomp$6_val$$ === !1) && $nodesWithBadValues$$.push($n$$)) : $nodesWithBadValues$$.push($n$$)
                    }
                    return $nodesWithBadValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("78", {
            bestPractice: 1626,
            testId: 78,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-flowto attribute value that includes one or more invalid ids.",
            metaText: "This element has an aria-flowto attribute value that includes one or more invalid or duplicate ids",
            metaTextDetail: "This {{tag-name}} has an aria-flowto attribute value of '{{aria-flowto}}', which includes one or more invalid or duplicate ids",
            fixType: "",
            testFunc: function() {
                var $testShell$$ =
                    new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-flowto]:not([aria-flowto=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-flowto]:not([aria-flowto=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++)
                        for (var $n$$ = $res$$[$i$$], $labelledByIds$$ = $n$$.getAttribute("aria-flowto").trim().split(" "), $j$$ = 0, $len_labelledByIds$$ = $labelledByIds$$.length; $j$$ < $len_labelledByIds$$; $j$$++) {
                            var $labelledById_refNodeLength$$ =
                                $labelledByIds$$[$j$$];
                            if (!0 === $isValidIdOrName$$($labelledById_refNodeLength$$)) {
                                if ($labelledById_refNodeLength$$ = $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $labelledById_refNodeLength$$.replace(/'/g, "\\'") + "']").length, 0 === $labelledById_refNodeLength$$ || 1 < $labelledById_refNodeLength$$) {
                                    $nodesWithBadIds$$.push($n$$);
                                    break
                                }
                            } else {
                                $nodesWithBadIds$$.push($n$$);
                                break
                            }
                        }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("80", {
            bestPractice: 1626,
            testId: 80,
            introduced: .9,
            mediaType: 1,
            description: "One or more dialog elements with an open attribute, excluding those with a role='dialog...' attribute and available to assistive technologies, has a role attribute set to a value that is not: 'alertdialog...'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to the text value: alertdialog; or the role attribute can be removed",
            metaTextDetail: "The role attribute value of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  This element's role attribute can be set to the text value: alertdialog; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('dialog[open]:not([data-ae_ar="null"]):not([data-ae_ar="dialog"])[data-ae_avat]', 'dialog[open]:not([data-ae_ar="null"]):not([data-ae_ar="dialog"])[data-ae_avat]:not([data-ae_ar="alertdialog"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("81", {
            bestPractice: 358,
            testId: 81,
            introduced: .9,
            mediaType: 1,
            description: "One or more img elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an ismap attribute.",
            metaText: "This img element has an ismap attribute. Server side image maps are not keyboard accessible and the regions cannot be given accessible names",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('img[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'img[data-ae_vis][data-ae_avat][data-ae_ar="null"][ismap]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("83", {
            bestPractice: 1626,
            testId: 83,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-describedby attribute value that includes one or more invalid ids.",
            metaText: "This element has an aria-describedby attribute value that includes one or more invalid or duplicate ids",
            metaTextDetail: "This {{tag-name}} has an aria-describedby attribute value of '{{aria-describedby}}', which includes one or more invalid or duplicate ids",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-describedby]:not([aria-describedby=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ =
                            $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-describedby]:not([aria-describedby=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++)
                        for (var $n$$ = $res$$[$i$$], $labelledByIds$$ = $n$$.getAttribute("aria-describedby").trim().split(" "), $j$$ = 0, $len_labelledByIds$$ = $labelledByIds$$.length; $j$$ < $len_labelledByIds$$; $j$$++) {
                            var $labelledById$jscomp$1_refNodeLength$$ = $labelledByIds$$[$j$$];
                            if (!0 === $isValidIdOrName$$($labelledById$jscomp$1_refNodeLength$$)) {
                                if ($labelledById$jscomp$1_refNodeLength$$ =
                                    $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $labelledById$jscomp$1_refNodeLength$$.replace(/'/g, "\\'") + "']").length, 0 === $labelledById$jscomp$1_refNodeLength$$ || 1 < $labelledById$jscomp$1_refNodeLength$$) {
                                    $nodesWithBadIds$$.push($n$$);
                                    break
                                }
                            } else {
                                $nodesWithBadIds$$.push($n$$);
                                break
                            }
                        }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("85", {
            bestPractice: 1626,
            testId: 85,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-controls attribute value that includes one or more invalid ids.",
            metaText: "This element has an aria-controls attribute value that includes one or more invalid or duplicate ids",
            metaTextDetail: "This {{tag-name}} has an aria-controls attribute value of '{{aria-controls}}', which includes one or more invalid or duplicate ids",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-controls]:not([aria-controls=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-controls]:not([aria-controls=""])'),
                            $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++)
                        for (var $n$$ = $res$$[$i$$], $labelledByIds$$ = $n$$.getAttribute("aria-controls").trim().split(" "), $j$$ = 0, $len_labelledByIds$$ = $labelledByIds$$.length; $j$$ < $len_labelledByIds$$; $j$$++) {
                            var $labelledById$jscomp$2_refNodeLength$$ = $labelledByIds$$[$j$$];
                            if (!0 === $isValidIdOrName$$($labelledById$jscomp$2_refNodeLength$$)) {
                                if ($labelledById$jscomp$2_refNodeLength$$ = $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $labelledById$jscomp$2_refNodeLength$$.replace(/'/g,
                                        "\\'") + "']").length, 0 === $labelledById$jscomp$2_refNodeLength$$ || 1 < $labelledById$jscomp$2_refNodeLength$$) {
                                    $nodesWithBadIds$$.push($n$$);
                                    break
                                }
                            } else {
                                $nodesWithBadIds$$.push($n$$);
                                break
                            }
                        }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("87", {
            bestPractice: 362,
            testId: 87,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements with a role attribute set to a value that starts with 'img' or 'graphics', not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This element (role=img, role=graphics-symbol or role=graphics-document) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role={{data-ae_ar}}) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Specify label text that describes the content conveyed by the image.",
                fix: {
                    "aria-label": null,
                    alt: !1,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_ar^="img"][data-ae_vis][data-ae_avat], *[data-ae_ar^="graphics"][data-ae_vis][data-ae_avat]', '*[data-ae_ar^="img"][data-ae_vis][data-ae_avat]:not([data-ae_an]), *[data-ae_ar^="graphics"][data-ae_vis][data-ae_avat]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("89", {
            bestPractice: 362,
            testId: 89,
            introduced: .9,
            mediaType: 1,
            description: "One or more img elements, excluding img elements with an alt attribute set to a null value, without an ARIA-assigned role other than img, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This img element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide alternative text that describes the content conveyed by the image.",
                fix: {
                    alt: null,
                    "aria-label": !1,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""])', 'img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("94", {
            bestPractice: 1352,
            testId: 94,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements contain an id attribute set to a value that is not unique in the same DOM.",
            metaText: "This element has an id attribute set to a value that is not unique in the same DOM",
            metaTextDetail: "This {{tag-name}} has an id attribute of '{{id}}', which is not unique in the same DOM",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    return 0 <
                        this.applicableNodesFunc(this._applicableNodesFuncArgs).length
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = this.querySelectorAll('*[id]:not([id=""])');
                    return 1 < $applicableNodes$$.length ? $applicableNodes$$ : []
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $notUnique$$ = [], $nodeStore$$ = {}, $keys_res$$ = this.querySelectorAll('*[id]:not([id=""])'), $i$jscomp$53_j$$ = 0; $i$jscomp$53_j$$ < $keys_res$$.length; $i$jscomp$53_j$$++) {
                        var $fingerprints_n$$ = $keys_res$$[$i$jscomp$53_j$$],
                            $fkeys_id$$ = $fingerprints_n$$.getAttribute("id");
                        try {
                            $nodeStore$$[$fkeys_id$$].push($fingerprints_n$$)
                        } catch ($err$$) {
                            $nodeStore$$[$fkeys_id$$] = [], $nodeStore$$[$fkeys_id$$].push($fingerprints_n$$)
                        }
                    }
                    $keys_res$$ = Object.keys($nodeStore$$);
                    for ($i$jscomp$53_j$$ = 0; $i$jscomp$53_j$$ < $keys_res$$.length; $i$jscomp$53_j$$++)
                        if ($fkeys_id$$ = $nodeStore$$[$keys_res$$[$i$jscomp$53_j$$]], 1 < $fkeys_id$$.length)
                            if (!0 === $detectShadowDOM$$) {
                                $fingerprints_n$$ = {};
                                for (var $k$$ = 0; $k$$ < $fkeys_id$$.length; $k$$++) {
                                    var $fArray_o$$ =
                                        $fkeys_id$$[$k$$],
                                        $f$$ = $fArray_o$$.getAttribute("data-ae_domuel");
                                    $f$$ = $f$$.substr(0, $f$$.lastIndexOf("|"));
                                    try {
                                        $fingerprints_n$$[$f$$].push($fArray_o$$)
                                    } catch ($err$$) {
                                        $fingerprints_n$$[$f$$] = [], $fingerprints_n$$[$f$$].push($fArray_o$$)
                                    }
                                }
                                $fkeys_id$$ = Object.keys($fingerprints_n$$);
                                for ($k$$ = 0; $k$$ < $fkeys_id$$.length; $k$$++) $fArray_o$$ = $fingerprints_n$$[$fkeys_id$$[$k$$]], 1 < $fArray_o$$.length && ($notUnique$$ = $notUnique$$.concat($fArray_o$$))
                            } else $notUnique$$ = $notUnique$$.concat($fkeys_id$$);
                    return $notUnique$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("95", {
            bestPractice: 1626,
            testId: 95,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-labelledby attribute value that includes one or more invalid ids.",
            metaText: "This element has an aria-labelledby attribute value that includes one or more invalid or duplicate ids",
            metaTextDetail: "This {{tag-name}} has an aria-labelledby attribute value of '{{aria-labelledby}}', which includes one or more invalid or duplicate ids",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide the ID of an element which contains the label content for this element.",
                fix: {
                    "aria-labelledby": null
                }
            },
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-labelledby]:not([aria-labelledby=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-labelledby]:not([aria-labelledby=""])'), $i$$ = 0, $len_res$$ =
                            $res$$.length; $i$$ < $len_res$$; $i$$++)
                        for (var $n$$ = $res$$[$i$$], $labelledByIds$$ = $n$$.getAttribute("aria-labelledby").trim().split(" "), $j$$ = 0, $len_labelledByIds$$ = $labelledByIds$$.length; $j$$ < $len_labelledByIds$$; $j$$++) {
                            var $labelledById$jscomp$3_refNodeLength$$ = $labelledByIds$$[$j$$];
                            if (!0 === $isValidIdOrName$$($labelledById$jscomp$3_refNodeLength$$)) {
                                if ($labelledById$jscomp$3_refNodeLength$$ = $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $labelledById$jscomp$3_refNodeLength$$.replace(/'/g, "\\'") +
                                        "']").length, 0 === $labelledById$jscomp$3_refNodeLength$$ || 1 < $labelledById$jscomp$3_refNodeLength$$) {
                                    $nodesWithBadIds$$.push($n$$);
                                    break
                                }
                            } else {
                                $nodesWithBadIds$$.push($n$$);
                                break
                            }
                        }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("99", {
            bestPractice: 464,
            testId: 99,
            introduced: .9,
            mediaType: 1,
            description: "One or more li elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); or element with a role set to the value 'list' as a parent.",
            metaText: "This element does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); or element with a role set to the value: list as a parent",
            metaTextDetail: "This {{tag-name}} does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); or element with a role set to the value: list as a parent",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('li[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    return $testUtil_ifDiff$$($aeKernel$$.rootTestNode, ['li[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'ol[data-ae_ar="null"][data-ae_vis][data-ae_avat] > li[data-ae_ar="null"][data-ae_vis][data-ae_avat], ul[data-ae_ar="null"][data-ae_vis][data-ae_avat] > li[data-ae_ar="null"][data-ae_vis][data-ae_avat], *[data-ae_vis][data-ae_avat][data-ae_ar="list"] > li[data-ae_ar="null"][data-ae_vis][data-ae_avat]'])
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("101", {
            bestPractice: 429,
            testId: 101,
            introduced: .9,
            mediaType: 1,
            description: "The root html element does not have a lang attribute",
            metaText: "This element does not have a lang attribute",
            metaTextDetail: "This {{tag-name}} does not have a lang attribute",
            fixType: {
                fixType: 4,
                domSpec: !1,
                helperText: "Enter the appropriate language value for the page.",
                fix: {
                    lang: null
                }
            },
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$("head");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    var $notProper$$ = [];
                    !1 === $aeKernel$$.rootTestNode.hasAttribute("lang") &&
                        $notProper$$.push($aeKernel$$.rootTestNode);
                    return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("113", {
            bestPractice: 338,
            testId: 113,
            introduced: .9,
            mediaType: 1,
            description: "One or more textarea elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This textarea element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Specify a descriptive label for the textarea.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('textarea[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'textarea[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("114", {
            bestPractice: 338,
            testId: 114,
            introduced: .9,
            mediaType: 1,
            description: "One or more select elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This select element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Specify a descriptive label for the select.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('select[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'select[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("116", {
            bestPractice: 338,
            testId: 116,
            introduced: .9,
            mediaType: 1,
            description: "One or more input type='button' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=button) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="button"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="button"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("118", {
            bestPractice: 338,
            testId: 118,
            introduced: .9,
            mediaType: 1,
            description: "One or more input type='text' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=text) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperTex: "Specify a descriptive label for the text input.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("123", {
            bestPractice: 362,
            testId: 123,
            introduced: .9,
            mediaType: 1,
            description: "One or more svg elements, excluding children of button elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This svg element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide text that describes the content conveyed by the SVG.",
                fix: {
                    alt: !1,
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('svg:not(button svg)[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'svg:not(button svg)[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles",
            $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("131", {
            bestPractice: 373,
            testId: 131,
            introduced: .9,
            mediaType: 1,
            description: "One or more input type='image' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=image) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="image"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="image"][data-ae_anua], input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="image"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("132", {
            bestPractice: 1626,
            testId: 132,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='slider' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute.",
            metaText: "This element (role=slider) must have all of the following attributes: aria-valuemax | aria-valuemin | aria-valuenow",
            metaTextDetail: "This {{tag-name}} (role=slider) must have all of the following attributes: aria-valuemax | aria-valuemin | aria-valuenow",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([aria-valuemax]), *[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([aria-valuemin]), *[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([aria-valuenow])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("134", {
            bestPractice: 1626,
            testId: 134,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='combobox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-expanded attribute set to one of the text values: 'true | false'.",
            metaText: "This element's (role=combobox) aria-expanded attribute should be set to one of the text values: true | false",
            metaTextDetail: "This {{tag-name}}'s (role=combobox) aria-expanded attribute should be set to one of the text values: true | false",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"][aria-expanded]:not([aria-expanded="true"]):not([aria-expanded="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("140", {
            bestPractice: 1626,
            testId: 140,
            introduced: .9,
            mediaType: 1,
            description: "One or more elements that has a role='checkbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false | mixed'.",
            metaText: "This element's (role=checkbox) aria-checked attribute should be set to one of the text values: true | false | mixed",
            metaTextDetail: "This {{tag-name}}'s (role=checkbox) aria-checked attribute should be set to one of the text values: true | false | mixed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"]):not([aria-checked="mixed"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("141", {
            bestPractice: 401,
            testId: 141,
            introduced: .9,
            mediaType: 1,
            description: "One or more A elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an href attribute set to an image file reference.",
            metaText: "This A element has an href attribute set to an image file reference",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href]:not([href=''])",
                    "a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.gif']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.GIF']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.jpg']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.JPG']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.jpeg']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.JPEG']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.bmp']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.BMP']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.png']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.PNG']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.tiff']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.TIFF']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.eps']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.EPS']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.pcx']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.PCX']:not([href*='?']):not([href*='.htm'])")
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("152", {
            bestPractice: 364,
            testId: 152,
            introduced: .9,
            mediaType: 1,
            description: "The first document title element located was found to be empty.",
            metaText: "This title element should not be empty",
            fixType: {
                fixType: 3,
                domSpec: !0,
                helperText: "Specify a unique and descriptive title for the page.",
                fix: {
                    innerHTML: null
                }
            },
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("html title:not(svg title):not([data-ae_inshdw]), head title:not(svg title):not([data-ae_inshdw]), body title:not(svg title):not([data-ae_inshdw])");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $firstTitle$$ = this.querySelector("html title:not(svg title):not([data-ae_inshdw]), head title:not(svg title):not([data-ae_inshdw]), body title:not(svg title):not([data-ae_inshdw])");
                    0 >= $firstTitle$$.childNodes.length && $badNodes$$.push($firstTitle$$);
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("165", {
            bestPractice: 1626,
            testId: 165,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='color' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=color",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="color"]', 'input[data-ae_vis][data-ae_avat][type="color"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("166", {
            bestPractice: 1626,
            testId: 166,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='date' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=date",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="date"]', 'input[data-ae_vis][data-ae_avat][type="date"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("167", {
            bestPractice: 1626,
            testId: 167,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='datetime-local' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=datetime-local",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="datetime-local"]', 'input[data-ae_vis][data-ae_avat][type="datetime-local"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("168", {
            bestPractice: 1626,
            testId: 168,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='file' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=file",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="file"]', 'input[data-ae_vis][data-ae_avat][type="file"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("169", {
            bestPractice: 1626,
            testId: 169,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='image' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button...'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=image has a redundant role attribute of {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="image"]', 'input[data-ae_vis][data-ae_avat][type="image"][data-ae_ar="button"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("170", {
            bestPractice: 1626,
            testId: 170,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='month' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=month",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="month"]', 'input[data-ae_vis][data-ae_avat][type="month"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("171", {
            bestPractice: 1626,
            testId: 171,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='radio' elements, excluding those with a role='radio...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'menuitemradio...'.",
            metaText: "This element has a role attribute that is not set to the following text value:  menuitemradio",
            metaTextDetail: "This {{tag-name}} with type=radio has a role attribute that is not set to the following text value:  menuitemradio",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="radio"]:not([data-ae_ar="null"]):not([data-ae_ar="radio"])', 'input[data-ae_vis][data-ae_avat][type="radio"]:not([data-ae_ar="null"]):not([data-ae_ar="radio"])[role]:not([data-ae_ar="menuitemradio"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("173", {
            bestPractice: 1626,
            testId: 173,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='time' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=time",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="time"]',
                    'input[data-ae_vis][data-ae_avat][type="time"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("174", {
            bestPractice: 1626,
            testId: 174,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='week' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with role=week",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="week"]',
                    'input[data-ae_vis][data-ae_avat][type="week"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("175", {
            bestPractice: 1626,
            testId: 175,
            introduced: 1,
            mediaType: 1,
            description: "One or more keygen elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("keygen[data-ae_vis][data-ae_avat]",
                    'keygen[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("176", {
            bestPractice: 1626,
            testId: 176,
            introduced: 1,
            mediaType: 1,
            description: "One or more label elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("label[data-ae_vis][data-ae_avat]",
                    'label[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("180", {
            bestPractice: 1626,
            testId: 180,
            introduced: 1,
            mediaType: 1,
            description: "One or more math elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this math element",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("math[data-ae_vis][data-ae_avat]", 'math[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("182", {
            bestPractice: 1626,
            testId: 182,
            introduced: 1,
            mediaType: 1,
            description: "One or more meta elements, in the head element in the DOM, has a role attribute and/or an ARIA attribute.",
            metaText: "This element should not have a role attribute and/or an ARIA attribute",
            metaTextDetail: "This {{tag-name}} should not have a role attribute and/or an ARIA attribute",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("head meta");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $notProper$$ = [], $metaNodes$$ = $aeKernel$$.rootTestNode.querySelectorAll("meta"), $x$$ = $metaNodes$$.length; $x$$--;) a: {
                        var $meta$$ = $metaNodes$$[$x$$];
                        if ($meta$$.hasAttribute("role")) $notProper$$.push($meta$$);
                        else
                            for (var $meta_attributes$$ = $meta$$.attributes, $i$$ = $meta_attributes$$.length; $i$$--;)
                                if ("aria" === $meta_attributes$$[$i$$].name.substring(0, 4).toLowerCase()) {
                                    $notProper$$.push($meta$$);
                                    break a
                                }
                    }
                    return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("185", {
            bestPractice: 1626,
            testId: 185,
            introduced: 1,
            mediaType: 1,
            description: "One or more noscript elements, available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("noscript[data-ae_avat]", 'noscript[data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("188", {
            bestPractice: 1626,
            testId: 188,
            introduced: 1,
            mediaType: 1,
            description: "One or more param elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("param[data-ae_vis][data-ae_avat]", 'param[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("191", {
            bestPractice: 1626,
            testId: 191,
            introduced: 1,
            mediaType: 1,
            description: "One or more source elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("source[data-ae_vis][data-ae_avat]", 'source[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("192", {
            bestPractice: 1626,
            testId: 192,
            introduced: 1,
            mediaType: 1,
            description: "One or more style elements has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("style", 'style:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("199", {
            bestPractice: 1626,
            testId: 199,
            introduced: 1,
            mediaType: 1,
            description: "One or more document title elements has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("title:not([data-ae_inshdw])");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $titles$$ = $aeKernel$$.rootTestNode.querySelectorAll('title:not([data-ae_inshdw]):not([data-ae_ar="null"])');
                    for (let $i$$ = 0; $i$$ < $titles$$.length; $i$$++) {
                        const $title$$ = $titles$$[$i$$];
                        $title$$.closest("svg") ||
                            $badNodes$$.push($title$$)
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("203", {
            bestPractice: 1626,
            testId: 203,
            introduced: 1,
            mediaType: 1,
            description: "One or more track elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("track[data-ae_vis][data-ae_avat]",
                    'track[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("205", {
            bestPractice: 1626,
            testId: 205,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a disabled attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-disabled attribute.",
            metaText: "This element does not need an aria-disabled attribute, as it has a disabled attribute",
            metaTextDetail: "This {{tag-name}} does not need an aria-disabled attribute, as it has a disabled attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("body *[data-ae_vis][data-ae_avat]", "body *[data-ae_vis][data-ae_avat][disabled][aria-disabled]")
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage4MarkdownFunc("identifiesDataTables", $identifiesDataTables$$);
        $aeKernel$$.addAutomaticTest("214", {
            bestPractice: 590,
            testId: 214,
            introduced: 1,
            mediaType: 1,
            description: "One or more th elements in a data-table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, contains at least one table element (without an ARIA-assigned role).",
            metaText: "Data table header cells should not contain a table element (without an ARIA-assigned role)",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] th[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    var $tableInTH_testNode$$ = $aeKernel$$.rootTestNode.querySelector("body") || $aeKernel$$.rootTestNode,
                        $clone$jscomp$2_res$$ = $cloneThisNode$$($tableInTH_testNode$$,
                            !0);
                    for ($tableInTH_testNode$$ = $clone$jscomp$2_res$$.querySelector("th[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)"); $tableInTH_testNode$$;) $tableInTH_testNode$$.innerHTML = "", $tableInTH_testNode$$ = $clone$jscomp$2_res$$.querySelector("th[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)");
                    $tableInTH_testNode$$ = [];
                    $clone$jscomp$2_res$$ = $clone$jscomp$2_res$$.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] th[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
                    for (var $i$$ = 0, $len_res$$ = $clone$jscomp$2_res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $thOfInterest$$ = $clone$jscomp$2_res$$[$i$$];
                        0 < $thOfInterest$$.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"]').length && $tableInTH_testNode$$.push($thOfInterest$$)
                    }
                    return $tableInTH_testNode$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("221", {
            bestPractice: 332,
            testId: 221,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='radiogroup' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=radiogroup) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=radiogroup) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="radiogroup"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="radiogroup"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("224", {
            bestPractice: 338,
            testId: 224,
            introduced: 1,
            mediaType: 1,
            description: "One or more button elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This button element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('button[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'button[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("226", {
            bestPractice: 338,
            testId: 226,
            introduced: 1,
            mediaType: 1,
            description: "One or more optgroup elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This optgroup element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('optgroup[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
                    'optgroup[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("227", {
            bestPractice: 523,
            testId: 227,
            introduced: 1,
            mediaType: 1,
            description: "One or more frame elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This frame element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Specify a descriptive label for the frame.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('frame[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'frame[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("228", {
            bestPractice: 523,
            testId: 228,
            introduced: 1,
            mediaType: 1,
            description: "One or more iframe elements, excluding those elements with aria-hidden='true' or tabindex set to a negative value, not intentionally hidden in the DOM, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This iframe element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Specify a descriptive label for the iframe.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis]', 'iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("229", {
            bestPractice: 523,
            testId: 229,
            introduced: 1,
            mediaType: 1,
            description: "One or more frame elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
            metaText: "This frame element has a suspicious calculated accessible name value",
            metaTextDetail: "This frame element has a suspicious calculated accessible name value of: {{data-ae_an}}",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Specify a descriptive label for the frame.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an]', 'frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="title"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="frame"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="top"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="bottom"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="left"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="right"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("230", {
            bestPractice: 343,
            testId: 230,
            introduced: 1,
            mediaType: 1,
            description: "One or more area elements, without an ARIA-assigned role and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This area element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('area[data-ae_avat][data-ae_ar="null"]', 'area[data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("231", {
            bestPractice: 2554,
            testId: 231,
            introduced: 1,
            mediaType: 1,
            description: "One or more progress elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This progress element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('progress[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
                    'progress[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("232", {
            bestPractice: 2554,
            testId: 232,
            introduced: 1,
            mediaType: 1,
            description: "One or more meter elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This meter element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('meter[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'meter[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("234", {
            bestPractice: 370,
            testId: 234,
            introduced: 1,
            mediaType: 1,
            description: "One or more img elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
            metaText: "This element has a suspicious calculated accessible name value",
            metaTextDetail: "This {{tag-name}} has a suspicious calculated accessible name value of: {{data-ae_an}}",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide alternative text that describes the content conveyed by the image.",
                fix: {
                    alt: null,
                    "aria-label": !1,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                let $testCssSelector$$ = "";
                for (const $postfix$$ of $IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES$$) $testCssSelector$$ += `${"img[data-ae_ar='null'][data-ae_vis][data-ae_avat]"}${$postfix$$},`;
                $testCssSelector$$ = $testCssSelector$$.substring(0, $testCssSelector$$.length - 1);
                return new $AutoTestShell$$("img[data-ae_ar='null'][data-ae_vis][data-ae_avat][data-ae_an]",
                    $testCssSelector$$)
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("235", {
            bestPractice: 370,
            testId: 235,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a role attribute set to a value that starts with 'img' or 'graphics', not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
            metaText: "This element (role=img, role=graphics-symbol or role=graphics-document) has a suspicious calculated accessible name value",
            metaTextDetail: "This {{tag-name}} (role={{data-ae_ar}}) has a suspicious calculated accessible name value of: {{data-ae_an}}",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide alternative text that describes the content conveyed by the image.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                const $prefixes$$ = ['*[data-ae_ar^="img"][data-ae_vis][data-ae_avat]',
                    '*[data-ae_ar^="graphics"][data-ae_vis][data-ae_avat]'
                ];
                let $relevantCssSelector$$ = "",
                    $testCssSelector$$ = "";
                for (const $prefix$$ of $prefixes$$) {
                    $relevantCssSelector$$ += `${$prefix$$}[data-ae_an],`;
                    for (const $postfix$$ of $IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES$$) $testCssSelector$$ += `${$prefix$$}${$postfix$$},`
                }
                $relevantCssSelector$$ = $relevantCssSelector$$.substring(0, $relevantCssSelector$$.length - 1);
                $testCssSelector$$ = $testCssSelector$$.substring(0, $testCssSelector$$.length - 1);
                return new $AutoTestShell$$($relevantCssSelector$$,
                    $testCssSelector$$)
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("236", {
            bestPractice: 370,
            testId: 236,
            introduced: 1,
            mediaType: 1,
            description: "One or more svg elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
            metaText: "This svg element has a suspicious calculated accessible name value",
            metaTextDetail: "This svg element has a suspicious calculated accessible name value of: {{data-ae_an}}",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide text that describes the content conveyed by the SVG.",
                fix: {
                    alt: !1,
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                let $testCssSelector$$ = "";
                for (const $postfix$$ of $IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES$$) $testCssSelector$$ += `${"svg[data-ae_ar='null'][data-ae_vis][data-ae_avat]"}${$postfix$$},`;
                $testCssSelector$$ = $testCssSelector$$.substring(0, $testCssSelector$$.length - 1);
                return new $AutoTestShell$$("svg[data-ae_ar='null'][data-ae_vis][data-ae_avat][data-ae_an]", $testCssSelector$$)
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addStage4MarkdownFunc("addAEEventAtts",
            $addAEEventAtts$$);
        $aeKernel$$.addAutomaticTest("237", {
            bestPractice: 1301,
            testId: 237,
            introduced: 1,
            mediaType: 1,
            description: "One or more A elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This A element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive accessible name for the anchor element.",
                fix: {
                    "aria-label": null
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('a[data-ae_vis][data-ae_avat][data-ae_ar="null"][href], a[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_ev]:not([href])', 'a[data-ae_vis][data-ae_avat][data-ae_ar="null"][href]:not([data-ae_an]), a[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_ev]:not([href]):not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles",
            $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("238", {
            bestPractice: 1301,
            testId: 238,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a role='link' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This element (role=link) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=link) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive accessible name for the anchor element.",
                fix: {
                    "aria-label": null
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="link"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="link"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("244", {
            bestPractice: 393,
            testId: 244,
            introduced: 1,
            mediaType: 1,
            description: "One or more dl elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain only elements with a role='listitem' attribute, dt, dd, script, template elements (without an ARIA-assigned role); or only div, script, template elements (without an ARIA-assigned role); as direct child elements.",
            metaText: "This element should only contain elements with a role='listitem' attribute, dt, dd, script, template elements (without an ARIA-assigned role); or only div, script, template elements (without an ARIA-assigned role); as direct child elements",
            metaTextDetail: "This {{tag-name}} should only contain elements with a role='listitem' attribute, dt, dd, script, template elements (without an ARIA-assigned role); or only div, script, template elements (without an ARIA-assigned role); as direct child elements",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('dl[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    return $correctChildren$$("dl", {
                        DT: 1,
                        DD: 1,
                        DIV: 1,
                        SCRIPT: 1,
                        TEMPLATE: 1
                    }, $aeKernel$$.rootTestNode, function($tagChildren$$, $testChild$$) {
                        let $hasDtDd$$ = !1,
                            $hasDiv$$ = !1;
                        for (let $i$$ = 0; $i$$ < $tagChildren$$.length; $i$$++) {
                            let $tagChild$$ = $tagChildren$$[$i$$];
                            "DT" === $tagChild$$.tagName || "DD" === $tagChild$$.tagName ? $hasDtDd$$ = !0 : "DIV" === $tagChild$$.tagName && ($hasDiv$$ = !0);
                            if ($hasDtDd$$ && $hasDiv$$) break
                        }
                        return $hasDtDd$$ && $hasDiv$$ ? "DT" !== $testChild$$.tagName && "DD" !== $testChild$$.tagName && "DIV" !== $testChild$$.tagName : $hasDtDd$$ ? "DIV" !== $testChild$$.tagName : $hasDiv$$ ?
                            "DT" !== $testChild$$.tagName && "DD" !== $testChild$$.tagName : !0
                    })
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("245", {
            bestPractice: 393,
            testId: 245,
            introduced: 1,
            mediaType: 1,
            description: "One or more ol elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain only li, script or template elements (without an ARIA-assigned role); or elements with a role='listitem' attribute; as direct child elements.",
            metaText: "This element should only contain li elements (without an ARIA-assigned role), script elements (without an ARIA-assigned role), template elements (without an ARIA-assigned role); or elements with a role=listitem attribute; as direct child elements",
            metaTextDetail: "This {{tag-name}} should only contain li elements (without an ARIA-assigned role), script elements (without an ARIA-assigned role), template elements (without an ARIA-assigned role); or elements with a role=listitem attribute; as direct child elements",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('ol[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    return $correctChildren$$("ol", {
                            LI: 1,
                            SCRIPT: 1,
                            TEMPLATE: 1
                        },
                        $aeKernel$$.rootTestNode, null)
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("246", {
            bestPractice: 393,
            testId: 246,
            introduced: 1,
            mediaType: 1,
            description: "One or more ul elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain only li, script or template elements (without an ARIA-assigned role); or elements with a role='listitem' attribute; as direct child elements.",
            metaText: "This element should only contain li elements (without an ARIA-assigned role), script elements (without an ARIA-assigned role) or template elements (without an ARIA-assigned role); or elements with a role=listitem attribute; as direct child elements",
            metaTextDetail: "This {{tag-name}} should only contain li elements (without an ARIA-assigned role), script elements (without an ARIA-assigned role) or template elements (without an ARIA-assigned role); or elements with a role=listitem attribute; as direct child elements",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('ul[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    return $correctChildren$$("ul", {
                            LI: 1,
                            SCRIPT: 1,
                            TEMPLATE: 1
                        },
                        $aeKernel$$.rootTestNode, null)
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("249", {
            bestPractice: 363,
            testId: 249,
            introduced: 1,
            mediaType: 1,
            description: "One or more object elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This object element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('object[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'object[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("251", {
            bestPractice: 1143,
            testId: 251,
            introduced: 1,
            mediaType: 1,
            description: "One or more audio elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This audio element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('audio[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
                    'audio[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("252", {
            bestPractice: 444,
            testId: 252,
            introduced: 1,
            mediaType: 1,
            description: "One or more video elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This video element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('video[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'video[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("254", {
            bestPractice: 476,
            testId: 254,
            introduced: 1,
            mediaType: 1,
            description: "One or more embed elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This embed element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('embed[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
                    'embed[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("257", {
            bestPractice: 1626,
            testId: 257,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding input elements with type='checkbox | radio' and elements with a role='checkbox | option | radio | switch | menuitemcheckbox | menuitemradio | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-checked attribute.",
            metaText: "The aria-checked attribute is not allowed on this element",
            metaTextDetail: "The aria-checked attribute is not allowed on this {{tag-name}}{{optional_data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'input[type="checkbox"] input[type="radio"] *[data-ae_ar="checkbox"] *[data-ae_ar="option"] *[data-ae_ar="radio"] *[data-ae_ar="switch"] *[data-ae_ar="menuitemcheckbox"] *[data-ae_ar="menuitemradio"] *[data-ae_ar="treeitem"]'.split(" ").map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$,
                    `${$relevantCssSelector$$}[aria-checked]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("258", {
            bestPractice: 1626,
            testId: 258,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='menuitemcheckbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false | mixed'.",
            metaText: "This element (role=menuitemcheckbox) should have the aria-checked attribute set to one of the following text values: true | false | mixed",
            metaTextDetail: "This {{tag-name}} (role=menuitemcheckbox) should have the aria-checked attribute set to one of the following text values: true | false | mixed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemcheckbox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemcheckbox"]:not([aria-checked="true"]):not([aria-checked="false"]):not([aria-checked="mixed"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("259", {
            bestPractice: 1626,
            testId: 259,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='menuitemradio' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false'.",
            metaText: "This element (role=menuitemradio) needs an aria-checked attribute and that attribute needs to be the text value of either 'true' or 'false'",
            metaTextDetail: "This {{tag-name}} (role=menuitemradio) needs an aria-checked attribute and that attribute needs to be the text value of either 'true' or 'false'",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemradio"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemradio"]:not([aria-checked="true"]):not([aria-checked="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("260", {
            bestPractice: 1626,
            testId: 260,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding heading elements and elements with a role='grid | heading | listitem | row | tablist | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-level attribute.",
            metaText: "The aria-level attribute is not allowed on this element",
            metaTextDetail: "The aria-level attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'h1 h2 h3 h4 h5 h6 *[data-ae_ar="grid"] *[data-ae_ar="heading"] *[data-ae_ar="listitem"] *[data-ae_ar="row"] *[data-ae_ar="tablist"] *[data-ae_ar="treeitem"]'.split(" ").map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$,
                    `${$relevantCssSelector$$}[aria-level]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("261", {
            bestPractice: 1626,
            testId: 261,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='grid | listbox | tablist | tree | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-multiselectable attribute.",
            metaText: "The aria-multiselectable attribute is not allowed on this element",
            metaTextDetail: "The aria-multiselectable attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${['*[data-ae_ar="grid"]','*[data-ae_ar="listbox"]','*[data-ae_ar="tablist"]','*[data-ae_ar="tree"]','*[data-ae_ar="treegrid"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-multiselectable]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("262", {
            bestPractice: 1626,
            testId: 262,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='menu | menubar | scrollbar | separator | slider | tablist | tree | toolbar | radiogroup | treegrid | combobox | listbox' attribute and input type='range' elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-orientation attribute.",
            metaText: "The aria-orientation attribute is not allowed on this element",
            metaTextDetail: "The aria-orientation attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'*[data-ae_ar="menu"] *[data-ae_ar="menubar"] *[data-ae_ar="scrollbar"] *[data-ae_ar="separator"] *[data-ae_ar="slider"] *[data-ae_ar="tablist"] *[data-ae_ar="tree"] *[data-ae_ar="toolbar"] *[data-ae_ar="radiogroup"] *[data-ae_ar="treegrid"] *[data-ae_ar="combobox"] *[data-ae_ar="listbox"] input[type="range"]'.split(" ").map($subSelector$$=>
`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-orientation]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("263", {
            bestPractice: 1626,
            testId: 263,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding input elements (without an ARIA-assigned role), select elements (without an ARIA-assigned role), textarea elements (without an ARIA-assigned role) and elements with a role='checkbox | columnheader | combobox | grid | gridcell | listbox | menuitemcheckbox | menuitemradio | radiogroup | rowheader | searchbox | slider | spinbutton | switch | textbox | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-readonly attribute.",
            metaText: "The aria-readonly attribute is not allowed on this element",
            metaTextDetail: "The aria-readonly attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'input[data-ae_ar="null"] select[data-ae_ar="null"] textarea[data-ae_ar="null"] *[data-ae_ar="checkbox"] *[data-ae_ar="columnheader"] *[data-ae_ar="combobox"] *[data-ae_ar="grid"] *[data-ae_ar="gridcell"] *[data-ae_ar="listbox"] *[data-ae_ar="menuitemcheckbox"] *[data-ae_ar="menuitemradio"] *[data-ae_ar="radiogroup"] *[data-ae_ar="rowheader"] *[data-ae_ar="searchbox"] *[data-ae_ar="slider"] *[data-ae_ar="spinbutton"] *[data-ae_ar="switch"] *[data-ae_ar="textbox"] *[data-ae_ar="treegrid"]'.split(" ").map($subSelector$$=>
`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-readonly]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("264", {
            bestPractice: 1626,
            testId: 264,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding excluding TR, TD and TH elements and elements with a role='gridcell | option | row | tab | columnheader | rowheader | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-selected attribute.",
            metaText: "The aria-selected attribute is not allowed on this element",
            metaTextDetail: "The aria-selected attribute is not allowed on this {{tag-name}}{{optional_data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'tr td th *[data-ae_ar="gridcell"] *[data-ae_ar="option"] *[data-ae_ar="row"] *[data-ae_ar="tab"] *[data-ae_ar="columnheader"] *[data-ae_ar="rowheader"] *[data-ae_ar="treeitem"]'.split(" ").map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-selected]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("265", {
            bestPractice: 1626,
            testId: 265,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-sort attribute that is not set to one of the following text values: 'ascending | descending | none | other'.",
            metaText: "This element's aria-sort attribute should be set to one of the following text values: ascending | descending | none | other",
            metaTextDetail: "This {{tag-name}}'s aria-sort attribute should be set to one of the following text values: ascending | descending | none | other",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-sort]", '*[data-ae_vis][data-ae_avat][aria-sort]:not([aria-sort="ascending"]):not([aria-sort="descending"]):not([aria-sort="none"]):not([aria-sort="other"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("266", {
            bestPractice: 1626,
            testId: 266,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='progressbar | scrollbar | slider | spinbutton' attribute, input type='range' elements and input type='number' elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuemax attribute.",
            metaText: "The aria-valuemax attribute is not allowed on this element",
            metaTextDetail: "The aria-valuemax attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ =
                    `*${'*[data-ae_ar="progressbar"] *[data-ae_ar="scrollbar"] *[data-ae_ar="slider"] *[data-ae_ar="spinbutton"] input[type="range"] input[type="number"]'.split(" ").map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-valuemax]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("267", {
            bestPractice: 1626,
            testId: 267,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='progressbar | scrollbar | slider | spinbutton' attribute, input type='range' elements and input type='number' elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuenow attribute.",
            metaText: "The aria-valuenow attribute is not allowed on this element",
            metaTextDetail: "The aria-valuenow attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'*[data-ae_ar="progressbar"] *[data-ae_ar="scrollbar"] *[data-ae_ar="slider"] *[data-ae_ar="spinbutton"] input[type="range"] input[type="number"]'.split(" ").map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$,
                    `${$relevantCssSelector$$}[aria-valuenow]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("268", {
            bestPractice: 1626,
            testId: 268,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='progressbar | scrollbar | slider | spinbutton' attribute, input type='range' elements and input type='number' elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuemin attribute.",
            metaText: "The aria-valuemin attribute is not allowed on this element",
            metaTextDetail: "The aria-valuemin attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'*[data-ae_ar="progressbar"] *[data-ae_ar="scrollbar"] *[data-ae_ar="slider"] *[data-ae_ar="spinbutton"] input[type="range"] input[type="number"]'.split(" ").map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-valuemin]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("269", {
            bestPractice: 1626,
            testId: 269,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='progressbar | scrollbar | slider | spinbutton' attribute, input type='range' elements and input type='number' elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuetext attribute.",
            metaText: "The aria-valuetext attribute is not allowed on this element",
            metaTextDetail: "The aria-valuetext attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'*[data-ae_ar="progressbar"] *[data-ae_ar="scrollbar"] *[data-ae_ar="slider"] *[data-ae_ar="spinbutton"] input[type="range"] input[type="number"]'.split(" ").map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-valuetext]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("270", {
            bestPractice: 1626,
            testId: 270,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding datalist elements (without an ARIA-assigned role), select elements (without an ARIA-assigned role), textarea elements (without an ARIA-assigned role), input type='checkbox | color | date | datetime-local | email | file | month | number | password | radio | range | search | tel | text | time | url | week' elements (without an ARIA-assigned role), and elements with a role='searchbox | spinbutton | textbox | combobox | columnheader | rowheader | gridcell | listbox | radiogroup | tree | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-required attribute.",
            metaText: "The aria-required attribute is not allowed on this element",
            metaTextDetail: "The aria-required attribute is not allowed on this {{tag-name}}",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: 'Select "Save" to remove the aria-required attribute, or "Cancel" if the fix should not be applied.',
                fix: {
                    "aria-required": !1
                }
            },
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'datalist[data-ae_ar="null"] select[data-ae_ar="null"] textarea[data-ae_ar="null"] input[type="checkbox"][data-ae_ar="null"] input[type="color"][data-ae_ar="null"] input[type="date"][data-ae_ar="null"] input[type="datetime-local"][data-ae_ar="null"] input[type="email"][data-ae_ar="null"] input[type="file"][data-ae_ar="null"] input[type="month"][data-ae_ar="null"] input[type="number"][data-ae_ar="null"] input[type="password"][data-ae_ar="null"] input[type="radio"][data-ae_ar="null"] input[type="range"][data-ae_ar="null"] input[type="search"][data-ae_ar="null"] input[type="tel"][data-ae_ar="null"] input[type="text"][data-ae_ar="null"] input[type="time"][data-ae_ar="null"] input[type="url"][data-ae_ar="null"] input[type="week"][data-ae_ar="null"] *[data-ae_ar="searchbox"] *[data-ae_ar="spinbutton"] *[data-ae_ar="textbox"] *[data-ae_ar="combobox"] *[data-ae_ar="columnheader"] *[data-ae_ar="rowheader"] *[data-ae_ar="gridcell"] *[data-ae_ar="listbox"] *[data-ae_ar="radiogroup"] *[data-ae_ar="tree"] *[data-ae_ar="treegrid"] input[data-ae_ar="null"]:not([type=null])'.split(" ").map($subSelector$$=>
`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-required]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("271", {
            bestPractice: 1626,
            testId: 271,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='table | grid | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-rowcount attribute.",
            metaText: "The aria-rowcount attribute is not allowed on this element",
            metaTextDetail: "The aria-rowcount attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${['*[data-ae_ar="table"]','*[data-ae_ar="grid"]','*[data-ae_ar="treegrid"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-rowcount]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("272", {
            bestPractice: 1626,
            testId: 272,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='row | cell | gridcell | rowheader | columnheader' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-rowindex attribute.",
            metaText: "The aria-rowindex attribute is not allowed on this element",
            metaTextDetail: "The aria-rowindex attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${['*[data-ae_ar="row"]','*[data-ae_ar="cell"]','*[data-ae_ar="gridcell"]',
'*[data-ae_ar="rowheader"]','*[data-ae_ar="columnheader"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-rowindex]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("273", {
            bestPractice: 1626,
            testId: 273,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='row | cell | gridcell | rowheader | columnheader' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-rowspan attribute.",
            metaText: "The aria-rowspan attribute is not allowed on this element",
            metaTextDetail: "The aria-rowspan attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${['*[data-ae_ar="row"]','*[data-ae_ar="cell"]','*[data-ae_ar="gridcell"]','*[data-ae_ar="rowheader"]','*[data-ae_ar="columnheader"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-rowspan]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("274", {
            bestPractice: 1626,
            testId: 274,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='table | grid | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-colcount attribute.",
            metaText: "The aria-colcount attribute is not allowed on this element",
            metaTextDetail: "The aria-colcount attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ =
                    `*${['*[data-ae_ar="table"]','*[data-ae_ar="grid"]','*[data-ae_ar="treegrid"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-colcount]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("275", {
            bestPractice: 1626,
            testId: 275,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='row | cell | gridcell | rowheader | columnheader' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-colindex attribute.",
            metaText: "The aria-colindex attribute is not allowed on this element",
            metaTextDetail: "The aria-colindex attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${['*[data-ae_ar="row"]','*[data-ae_ar="cell"]','*[data-ae_ar="gridcell"]','*[data-ae_ar="rowheader"]','*[data-ae_ar="columnheader"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-colindex]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("276", {
            bestPractice: 1626,
            testId: 276,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding elements with a role='cell | columnheader | gridcell | rowheader' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-colspan attribute.",
            metaText: "The aria-colspan attribute is not allowed on this element",
            metaTextDetail: "The aria-colspan attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ =
                    `*${['*[data-ae_ar="cell"]','*[data-ae_ar="columnheader"]','*[data-ae_ar="gridcell"]','*[data-ae_ar="rowheader"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-colspan]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("277", {
            bestPractice: 1626,
            testId: 277,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding textarea elements (without an ARIA-assigned role), input type='email | tel | search | text | url' elements with no list attribute (without an ARIA-assigned role), input type='password' elements (without an ARIA-assigned role), and elements with a role='combobox | textbox | searchbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-placeholder attribute.",
            metaText: "The aria-placeholder attribute is not allowed on this element",
            metaTextDetail: "The aria-placeholder attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'textarea[data-ae_ar="null"] input[type="email"]:not([list])[data-ae_ar="null"] input[type="tel"]:not([list])[data-ae_ar="null"] input[type="search"]:not([list])[data-ae_ar="null"] input[type="text"]:not([list])[data-ae_ar="null"] input[type="url"]:not([list])[data-ae_ar="null"] input[type="email"]:not([list])[data-ae_ar="null"] input[type="password"][data-ae_ar="null"] *[data-ae_ar="combobox"] *[data-ae_ar="textbox"] *[data-ae_ar="searchbox"]'.split(" ").map($subSelector$$=>
`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-placeholder]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("278", {
            bestPractice: 1626,
            testId: 278,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding dialog elements (without an ARIA-assigned role) and elements with a role='alertdialog | dialog' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-modal attribute.",
            metaText: "The aria-modal attribute is not allowed on this element",
            metaTextDetail: "The aria-modal attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${['dialog[data-ae_ar="null"]','*[data-ae_ar="alertdialog"]','*[data-ae_ar="dialog"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-modal]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("279", {
            bestPractice: 1626,
            testId: 279,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding input type=radio elements and elements with a role='article | listitem | option | menuitem | menuitemcheckbox | menuitemradio | radio | tab | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-posinset attribute.",
            metaText: "The aria-posinset attribute is not allowed on this element because it does not have the correct role attribute",
            metaTextDetail: "The aria-posinset attribute is not allowed on this {{tag-name}} because it does not have the correct role attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-posinset]", '*[data-ae_vis][data-ae_avat]:not(input[type="radio"]):not([data-ae_ar="article"]):not([data-ae_ar="listitem"]):not([data-ae_ar="option"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="treeitem"])[aria-posinset]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("280", {
            bestPractice: 1626,
            testId: 280,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding input type=radio elements and elements with a role='article | listitem | option | menuitem | menuitemcheckbox | menuitemradio | radio | tab | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has both an aria-posinset and an aria-setsize attribute.",
            metaText: "The aria-posinset and aria-setsize attribute pair is not allowed on this element because it does not have the correct role attribute",
            metaTextDetail: "The aria-posinset and aria-setsize attribute pair is not allowed on this {{tag-name}} because it does not have the correct role attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-setsize][aria-posinset]", '*[data-ae_vis][data-ae_avat]:not(input[type="radio"]):not([data-ae_ar="article"]):not([data-ae_ar="listitem"]):not([data-ae_ar="option"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="treeitem"])[aria-setsize][aria-posinset]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("281", {
            bestPractice: 1626,
            testId: 281,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding button elements (without an ARIA-assigned role), input type='button | image | reset | submit' elements (without an ARIA-assigned role), summary elements (without an ARIA-assigned role), A elements with an href attribute (without an ARIA-assigned role), area elements with an href attribute (without an ARIA-assigned role), hr elements (without an ARIA-assigned role) and elements with a role='application | button | checkbox | columnheader | combobox | gridcell | link | listbox | menuitem | menuitemcheckbox | menuitemradio | row | rowheader | switch | tab | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-expanded attribute.",
            metaText: "The aria-expanded attribute is not allowed on this element",
            metaTextDetail: "The aria-expanded attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'button[data-ae_ar="null"] input[type="button"][data-ae_ar="null"] input[type="image"][data-ae_ar="null"] input[type="reset"][data-ae_ar="null"] input[type="submit"][data-ae_ar="null"] summary[data-ae_ar="null"] a[href][data-ae_ar="null"] area[href][data-ae_ar="null"] hr[data-ae_ar="null"] *[data-ae_ar="application"] *[data-ae_ar="button"] *[data-ae_ar="checkbox"] *[data-ae_ar="columnheader"] *[data-ae_ar="combobox"] *[data-ae_ar="gridcell"] *[data-ae_ar="link"] *[data-ae_ar="listbox"] *[data-ae_ar="menuitem"] *[data-ae_ar="menuitemcheckbox"] *[data-ae_ar="menuitemcheckradio"] *[data-ae_ar="row"] *[data-ae_ar="rowheader"] *[data-ae_ar="switch"] *[data-ae_ar="tab"] *[data-ae_ar="treeitem"]'.split(" ").map($subSelector$$=>
`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-expanded]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("282", {
            bestPractice: 1626,
            testId: 282,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding input type=\u2018text | search\u2019 elements and elements with a role='combobox | searchbox | textbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-autocomplete attribute.",
            metaText: "The aria-autocomplete attribute is not allowed on this element",
            metaTextDetail: "The aria-autocomplete attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${['*[data-ae_ar="combobox"]','*[data-ae_ar="searchbox"]','*[data-ae_ar="textbox"]','input[type="search"]','input[type="text"]'].map($subSelector$$=>`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-autocomplete]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("283", {
            bestPractice: 1626,
            testId: 283,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, excluding details elements (without an ARIA-assigned role), optgroup elements (without an ARIA-assigned role), input type = 'password' elements, input type='email | tel | text | url' elements with no list attribute (without an ARIA-assigned role), textarea elements (without an ARIA-assigned role), and elements with a role='composite | group | textbox | application | combobox | grid | listbox | menu | menubar | radiogroup | row | searchbox | spinbutton | tablist | toolbar | tree | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute.",
            metaText: "The aria-activedescendant attribute is not allowed on this element",
            metaTextDetail: "The aria-activedescendant attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                const $relevantCssSelector$$ = `*${'details[data-ae_ar="null"] optgroup[data-ae_ar="null"] input[type="password"][data-ae_ar="null"] input[type="email"]:not([list])[data-ae_ar="null"] input[type="tel"]:not([list])[data-ae_ar="null"] input[type="text"]:not([list])[data-ae_ar="null"] input[type="url"]:not([list])[data-ae_ar="null"] textarea[data-ae_ar="null"] *[data-ae_ar="composite"] *[data-ae_ar="group"] *[data-ae_ar="textbox"] *[data-ae_ar="application"] *[data-ae_ar="combobox"] *[data-ae_ar="grid"] *[data-ae_ar="listbox"] *[data-ae_ar="menu"] *[data-ae_ar="menubar"] *[data-ae_ar="radiogroup"] *[data-ae_ar="row"] *[data-ae_ar="searchbox"] *[data-ae_ar="spinbutton"] *[data-ae_ar="tablist"] *[data-ae_ar="toolbar"] *[data-ae_ar="tree"] *[data-ae_ar="treegrid"]'.split(" ").map($subSelector$$=>
`:not(${$subSelector$$})`).join("")}[data-ae_vis][data-ae_avat]`;
                return new $AutoTestShell$$($relevantCssSelector$$, `${$relevantCssSelector$$}[aria-activedescendant]`)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("284", {
            bestPractice: 1626,
            testId: 284,
            introduced: 1,
            mediaType: 1,
            description: "One or more audio elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'application'.",
            metaText: "Role of 'application' on this audio element is usually inappropriate",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('audio[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])', 'audio[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="application"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("285", {
            bestPractice: 1626,
            testId: 285,
            introduced: 1,
            mediaType: 1,
            description: "One or more button elements, excluding those with a role='button' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'checkbox | link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: checkbox | link |menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
            metaTextDetail: "The role of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: checkbox | link |menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('button[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="button"])', 'button[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="button"]):not([data-ae_ar="checkbox"]):not([data-ae_ar="link"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="radio"]):not([data-ae_ar="switch"]):not([data-ae_ar="tab"]):not([data-ae_ar="combobox"]):not([data-ae_ar="option"]):not([data-ae_ar="treeitem"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("286", {
            bestPractice: 1626,
            testId: 286,
            introduced: 1,
            mediaType: 1,
            description: "One or more dl elements, excluding role='list' attributes, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'group'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to the text value: group; or the role attribute can be removed",
            metaTextDetail: "The role of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  This element's role attribute can be set to the text value: group; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('dl[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"])', 'dl[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"]):not([data-ae_ar="group"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("287", {
            bestPractice: 1626,
            testId: 287,
            introduced: 1,
            mediaType: 1,
            description: "One or more embed elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'application | document | img'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: application | document | img; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: application | document | img; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('embed[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
                    'embed[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="application"]):not([data-ae_ar="document"]):not([data-ae_ar="img"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("288", {
            bestPractice: 1626,
            testId: 288,
            introduced: 1,
            mediaType: 1,
            description: "One or more fieldset elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'group | radiogroup'.",
            metaText: "The role attribute value given to this element is not allowed. This element's role attribute can be set to one of the following text values: group | radiogroup; or the role attribute can be removed",
            metaTextDetail: "The role '{{data-ae_ar}}' given to this {{tag-name}} is not allowed. This element's role attribute can be set to one of the following text values: group | radiogroup; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('fieldset[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])', 'fieldset[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="group"]):not([data-ae_ar="radiogroup"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("290", {
            bestPractice: 1626,
            testId: 290,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute that is not set to a valid id.",
            metaText: "This element has an aria-activedescendant attribute that is set to an invalid or duplicate id",
            metaTextDetail: "This {{tag-name}} has an aria-activedescendant attribute that is set to an invalid or duplicate id of {{aria-activedescendant}}",
            fixType: "",
            testFunc: function() {
                var $testShell$$ =
                    new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-activedescendant]:not([aria-activedescendant=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-activedescendant]:not([aria-activedescendant=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $detailsId$jscomp$2_refNodeLength$$ = $n$$.getAttribute("aria-activedescendant");
                        !0 === $isValidIdOrName$$($detailsId$jscomp$2_refNodeLength$$) ?
                            ($detailsId$jscomp$2_refNodeLength$$ = $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $detailsId$jscomp$2_refNodeLength$$.replace(/'/g, "\\'") + "']").length, (0 === $detailsId$jscomp$2_refNodeLength$$ || 1 < $detailsId$jscomp$2_refNodeLength$$) && $nodesWithBadIds$$.push($n$$)) : $nodesWithBadIds$$.push($n$$)
                    }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("291", {
            bestPractice: 1626,
            testId: 291,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute that references an id of an element that has an aria-activedescendant attribute set to a non-null value.",
            metaText: "This element should not have an aria-activedescendant attribute that references an element that also has an aria-activedescendant attribute",
            metaTextDetail: "This {{tag-name}} should not have an aria-activedescendant attribute of {{aria-activedescendant}} that references an element that also has an aria-activedescendant attribute",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-activedescendant]:not([aria-activedescendant=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-activedescendant]:not([aria-activedescendant=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $desHasAriaDes_detailsId$jscomp$3_refNode$$ = $n$$.getAttribute("aria-activedescendant");
                        !0 === $isValidIdOrName$$($desHasAriaDes_detailsId$jscomp$3_refNode$$) && ($desHasAriaDes_detailsId$jscomp$3_refNode$$ = $aeKernel$$.rootTestNode.querySelector("[id='" + $desHasAriaDes_detailsId$jscomp$3_refNode$$.replace(/'/g,
                            "\\'") + "']"), null !== $desHasAriaDes_detailsId$jscomp$3_refNode$$ && ($desHasAriaDes_detailsId$jscomp$3_refNode$$ = $desHasAriaDes_detailsId$jscomp$3_refNode$$.getAttribute("aria-activedescendant"), null !== $desHasAriaDes_detailsId$jscomp$3_refNode$$ && "" !== $desHasAriaDes_detailsId$jscomp$3_refNode$$ && $nodesWithBadIds$$.push($n$$)))
                    }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("292", {
            bestPractice: 1626,
            testId: 292,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute that references the elements own id value.",
            metaText: "This element should not have an aria-activedescendant attribute that references its own id",
            metaTextDetail: "This {{tag-name}} should not have an aria-activedescendant attribute that references its own id of {{aria-activedescendant}}",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][id]:not([id=""])[aria-activedescendant]:not([aria-activedescendant=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ =
                            $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][id]:not([id=""])[aria-activedescendant]:not([aria-activedescendant=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $detailsId$jscomp$4_refNode$$ = $n$$.getAttribute("aria-activedescendant");
                        !0 === $isValidIdOrName$$($detailsId$jscomp$4_refNode$$) && ($detailsId$jscomp$4_refNode$$ = $aeKernel$$.rootTestNode.querySelector("[id='" + $detailsId$jscomp$4_refNode$$.replace(/'/g, "\\'") + "']"), null !== $detailsId$jscomp$4_refNode$$ &&
                            !0 === $detailsId$jscomp$4_refNode$$.isEqualNode($n$$) && $nodesWithBadIds$$.push($n$$))
                    }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("294", {
            bestPractice: 1626,
            testId: 294,
            introduced: 1,
            mediaType: 1,
            description: "One or more form elements, excluding those with a role='form' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'search | region'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: search | region; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: search | region; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('form[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="form"])', 'form[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="form"]):not([data-ae_ar="search"]):not([data-ae_ar="region"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("297", {
            bestPractice: 1626,
            testId: 297,
            introduced: 1,
            mediaType: 1,
            description: "One or more iframe elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'banner | complementary | contentinfo | form | main | navigation | search | application | document | img'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: banner | complementary | contentinfo | form | main | navigation | search | application | document | img; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: banner | complementary | contentinfo | form | main | navigation | search | application | document | img; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('iframe[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])', 'iframe[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="banner"]):not([data-ae_ar="complementary"]):not([data-ae_ar="contentinfo"]):not([data-ae_ar="form"]):not([data-ae_ar="main"]):not([data-ae_ar="navigation"]):not([data-ae_ar="search"]):not([data-ae_ar="application"]):not([data-ae_ar="document"]):not([data-ae_ar="img"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("298", {
            bestPractice: 1626,
            testId: 298,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='button' elements, excluding those with a role='button' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="button"]:not([data-ae_ar="null"]):not([data-ae_ar="button"])', 'input[data-ae_vis][data-ae_avat][type="button"]:not([data-ae_ar="null"]):not([data-ae_ar="button"]):not([data-ae_ar="link"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="option"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="switch"]):not([data-ae_ar="treeitem"]):not([data-ae_ar="combobox"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("299", {
            bestPractice: 1626,
            testId: 299,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='checkbox' elements that has an aria-pressed attribute, excluding those with a role='checkbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'button'.",
            metaText: "The role attribute value given to this element is not allowed.   This element's role attribute can be set to the following text value: button; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed. This element's role attribute can be set to the following text value: button; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="checkbox"][aria-pressed]:not([data-ae_ar="null"]):not([data-ae_ar="checkbox"])', 'input[data-ae_vis][data-ae_avat][type="checkbox"][aria-pressed]:not([data-ae_ar="null"]):not([data-ae_ar="checkbox"]):not([data-ae_ar="button"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("300", {
            bestPractice: 1626,
            testId: 300,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='checkbox' elements, excluding those with a role='checkbox' attribute; or an aria-pressed attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'menuitemcheckbox | switch | option | treeitem'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: menuitemcheckbox | switch | option | treeitem; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: menuitemcheckbox | switch | option | treeitem; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="checkbox"]:not([aria-pressed]):not([data-ae_ar="null"]):not([data-ae_ar="checkbox"])', 'input[data-ae_vis][data-ae_avat][type="checkbox"]:not([aria-pressed]):not([data-ae_ar="null"]):not([data-ae_ar="checkbox"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="switch"]):not([data-ae_ar="option"]):not([data-ae_ar="treeitem"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("301", {
            bestPractice: 1626,
            testId: 301,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='email' elements, excluding those with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'textbox'.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=email",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[type="email"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat]', 'input[type="email"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("302", {
            bestPractice: 1626,
            testId: 302,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='image' elements, excluding those with a role='button' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | checkbox | option | treeitem'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | checkbox | option | treeitem; or the role attribute can be removed",
            metaTextDetail: "The role '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | checkbox | option | treeitem; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="image"]:not([data-ae_ar="null"]):not([data-ae_ar="button"])', 'input[data-ae_vis][data-ae_avat][type="image"]:not([data-ae_ar="null"]):not([data-ae_ar="button"]):not([data-ae_ar="link"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="option"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="switch"]):not([data-ae_ar="treeitem"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("303", {
            bestPractice: 1626,
            testId: 303,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='number' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'spinbutton'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=number has a redundant role attribute of: {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="number"]',
                    'input[data-ae_vis][data-ae_avat][type="number"][data-ae_ar="spinbutton"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("304", {
            bestPractice: 1626,
            testId: 304,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='password' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this input with type=password",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="password"]',
                    'input[data-ae_vis][data-ae_avat][type="password"]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("309", {
            bestPractice: 1626,
            testId: 309,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='tel' elements, excluding those with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'textbox'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=tel has a redundant role attribute of: {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[type="tel"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat]', 'input[type="tel"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("311", {
            bestPractice: 1626,
            testId: 311,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='text' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=text has a redundant role attribute of: {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="text"][list]:not([list=""])', 'input[data-ae_vis][data-ae_avat][type="text"][list]:not([list=""])[data-ae_ar="combobox"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("312", {
            bestPractice: 1626,
            testId: 312,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='search' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=search has a redundant role attribute of: {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="search"][list]:not([list=""])', 'input[data-ae_vis][data-ae_avat][type="search"][list]:not([list=""])[data-ae_ar="combobox"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("313", {
            bestPractice: 1626,
            testId: 313,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='tel' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=tel has a redundant role attribute of: {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="tel"][list]:not([list=""])', 'input[data-ae_vis][data-ae_avat][type="tel"][list]:not([list=""])[data-ae_ar="combobox"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("314", {
            bestPractice: 1626,
            testId: 314,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='url' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=url has a redundant role attribute of: {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="url"][list]:not([list=""])', 'input[data-ae_vis][data-ae_avat][type="url"][list]:not([list=""])[data-ae_ar="combobox"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("315", {
            bestPractice: 1626,
            testId: 315,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='email' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
            metaText: "This element has a redundant role attribute",
            metaTextDetail: "This {{tag-name}} with type=email has a redundant role attribute of: {{data-ae_ar}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][type="email"][list]:not([list=""])', 'input[data-ae_vis][data-ae_avat][type="email"][list]:not([list=""])[data-ae_ar="combobox"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("317", {
            bestPractice: 1626,
            testId: 317,
            introduced: 1,
            mediaType: 1,
            description: "One or more link elements with an href attribute has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("link", 'link:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("318", {
            bestPractice: 1626,
            testId: 318,
            introduced: 1,
            mediaType: 1,
            description: "One or more object elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'application | document | img'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: application | document | img; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: application | document | img; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('object[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
                    'object[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="application"]):not([data-ae_ar="document"]):not([data-ae_ar="img"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("319", {
            bestPractice: 1626,
            testId: 319,
            introduced: 1,
            mediaType: 1,
            description: "One or more ol elements, excluding those with a role='list' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('ol[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"])', 'ol[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"]):not([data-ae_ar="directory"]):not([data-ae_ar="group"]):not([data-ae_ar="listbox"]):not([data-ae_ar="menu"]):not([data-ae_ar="menubar"]):not([data-ae_ar="radiogroup"]):not([data-ae_ar="tablist"]):not([data-ae_ar="toolbar"]):not([data-ae_ar="tree"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("322", {
            bestPractice: 1626,
            testId: 322,
            introduced: 1,
            mediaType: 1,
            description: "One or more picture elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
            metaText: "The role attribute is not allowed on this element",
            metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("picture[data-ae_vis][data-ae_avat]", 'picture[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("325", {
            bestPractice: 1626,
            testId: 325,
            introduced: 1,
            mediaType: 1,
            description: "One or more ul elements, excluding those with a role='list' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree'.",
            metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree; or the role attribute can be removed",
            metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree; or the role attribute can be removed",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('ul[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"])', 'ul[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"]):not([data-ae_ar="directory"]):not([data-ae_ar="group"]):not([data-ae_ar="listbox"]):not([data-ae_ar="menu"]):not([data-ae_ar="menubar"]):not([data-ae_ar="radiogroup"]):not([data-ae_ar="tablist"]):not([data-ae_ar="toolbar"]):not([data-ae_ar="tree"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("326", {
            bestPractice: 1626,
            testId: 326,
            introduced: 1,
            mediaType: 1,
            description: "One or more video elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'application'.",
            metaText: "Role of 'application' on this video element is usually inappropriate",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('video[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])', 'video[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="application"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("328", {
            bestPractice: 1626,
            testId: 328,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a required attribute and an aria-required attribute, not intentionally hidden in the DOM and available to assistive technologies, has a different value in its required attribute from its aria-required attribute.",
            metaText: "This element has the 'required' attribute set while the aria-required attribute is set to false",
            metaTextDetail: "This {{tag-name}} has the 'required' attribute set while the aria-required attribute is set to false",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][required][aria-required]");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $diffAttValues$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll("*[data-ae_vis][data-ae_avat][required][aria-required]"), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $req$$ = $n$$.getAttribute("required"),
                            $ariareq$$ = $n$$.getAttribute("aria-required");
                        "" !== $req$$ && "required" !== $req$$ ||
                            "false" !== $ariareq$$ || $diffAttValues$$.push($n$$)
                    }
                    return $diffAttValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("329", {
            bestPractice: 1626,
            testId: 329,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a readonly attribute and an aria-readonly attribute, not intentionally hidden in the DOM and available to assistive technologies, has a mismatch between the value of its readonly attribute and its aria-readonly attribute.",
            metaText: "This element has a mismatch between the value of its readonly and aria-readonly attributes",
            metaTextDetail: "This {{tag-name}} has a mismatch between the value of its readonly and aria-readonly attributes",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][readonly][aria-readonly]");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $diffAttValues$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll("*[data-ae_vis][data-ae_avat][readonly][aria-readonly]"), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $read$$ = $n$$.hasAttribute("readonly") ? "true" : "false",
                            $ariaread$$ = $n$$.getAttribute("aria-readonly");
                        $read$$ !== $ariaread$$ && $diffAttValues$$.push($n$$)
                    }
                    return $diffAttValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("330", {
            bestPractice: 1626,
            testId: 330,
            introduced: 1,
            mediaType: 1,
            description: "One or more img elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an aria-owns attribute set to a non-null value.",
            metaText: "This element should not have an aria-owns attribute set to a non-null value",
            metaTextDetail: "This {{tag-name}} should not have an aria-owns attribute set to a non-null value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('img[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'img[data-ae_vis][data-ae_avat][data-ae_ar="null"][aria-owns]:not([aria-owns=""])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("331", {
            bestPractice: 1626,
            testId: 331,
            introduced: 1,
            mediaType: 1,
            description: "One or more input elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an aria-owns attribute set to a non-null value.",
            metaText: "This element should not have an aria-owns attribute set to a non-null value",
            metaTextDetail: "This {{tag-name}} should not have an aria-owns attribute set to a non-null value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'input[data-ae_vis][data-ae_avat][data-ae_ar="null"][aria-owns]:not([aria-owns=""])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("333", {
            bestPractice: 1626,
            testId: 333,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a role='textbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-owns attribute set to a non-null value.",
            metaText: "This element (role=textbox) should not have an aria-owns attribute set to a non-null value",
            metaTextDetail: "This {{tag-name}} (role=textbox) should not have an aria-owns attribute set to a non-null value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"][aria-owns]:not([aria-owns=""])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("334", {
            bestPractice: 1626,
            testId: 334,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a role='searchbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-owns attribute set to a non-null value.",
            metaText: "This element (role=searchbox) should not have an aria-owns attribute set to a non-null value",
            metaTextDetail: "This {{tag-name}} (role=searchbox) should not have an aria-owns attribute set to a non-null value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="searchbox"]',
                    '*[data-ae_vis][data-ae_avat][data-ae_ar="searchbox"][aria-owns]:not([aria-owns=""])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("337", {
            bestPractice: 1626,
            testId: 337,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='button' excluding a, area, input, button and textarea elements, elements with a disabled attribute; or aria-disabled attribute set to a 'true' value; or referenced by aria-activedescendant, not intentionally hidden in the DOM and available to assistive technologies lacks a tabindex attribute set to 0 or a negative value.",
            metaText: "This element (role=button) does not have a tabindex attribute set to 0 or a negative value",
            metaTextDetail: "This {{tag-name}} (role=button) does not have a tabindex attribute set to 0 or a negative value",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="button"]:not(a):not(area):not(input):not(button):not(textarea):not([disabled]):not([aria-disabled="true"])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $badNodeCandidates$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][data-ae_ar="button"]:not(a):not(area):not(input):not(button):not(textarea):not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])');
                    for (let $i$$ = 0; $i$$ < $badNodeCandidates$$.length; $i$$++) {
                        const $badNodeCandidate$$ = $badNodeCandidates$$[$i$$];
                        let $isBadNode$$ = !0;
                        const $badNodeCandidateId$$ = $badNodeCandidate$$.getAttribute("id");
                        $badNodeCandidateId$$ &&
                            $aeKernel$$.rootTestNode.querySelector("[aria-activedescendant='" + $badNodeCandidateId$$.replace(/'/g, "\\'") + "']") && ($isBadNode$$ = !1);
                        $isBadNode$$ && $badNodes$$.push($badNodeCandidate$$)
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("338", {
            bestPractice: 1626,
            testId: 338,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='checkbox' attribute, excluding elements with a disabled attribute; or aria-disabled attribute set to a 'true' value, not intentionally hidden in the DOM and available to assistive technologies, does not have a tabindex attribute set to 0 or a negative value",
            metaText: "This element (role=checkbox) does not have a tabindex attribute set to 0 or a negative value",
            metaTextDetail: "This {{tag-name}} (role=checkbox) does not have a tabindex attribute set to 0 or a negative value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not([disabled]):not([aria-disabled="true"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("341", {
            bestPractice: 1626,
            testId: 341,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='link' attribute, excluding elements with a disabled attribute; or aria-disabled attribute set to a 'true' value, not intentionally hidden in the DOM and available to assistive technologies, does not have a tabindex attribute set to 0 or a negative value",
            metaText: "This element (role=link) does not have a tabindex attribute set to 0 or a negative value",
            metaTextDetail: "This {{tag-name}} (role=link) does not have a tabindex attribute set to 0 or a negative value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="link"]:not([disabled]):not([aria-disabled="true"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="link"]:not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("350", {
            bestPractice: 1626,
            testId: 350,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='scrollbar' attribute, excluding elements with a disabled attribute; or aria-disabled attribute set to a 'true' value, not intentionally hidden in the DOM and available to assistive technologies, does not have a tabindex attribute set to 0 or a negative value",
            metaText: "This element (role=scrollbar) does not have a tabindex attribute set to 0 or a negative value",
            metaTextDetail: "This {{tag-name}} (role=scrollbar) does not have a tabindex attribute set to 0 or a negative value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([disabled]):not([aria-disabled="true"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("351", {
            bestPractice: 1626,
            testId: 351,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='slider' attribute, excluding elements with a disabled attribute; or aria-disabled attribute set to a 'true' value, not intentionally hidden in the DOM and available to assistive technologies, does not have a tabindex attribute set to 0 or a negative value",
            metaText: "This element (role=slider) does not have a tabindex attribute set to 0 or a negative value",
            metaTextDetail: "This {{tag-name}} (role=slider) does not have a tabindex attribute set to 0 or a negative value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([disabled]):not([aria-disabled="true"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("352", {
            bestPractice: 1626,
            testId: 352,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='spinbutton' attribute, excluding elements with a disabled attribute; or aria-disabled attribute set to a 'true' value, not intentionally hidden in the DOM and available to assistive technologies, does not have a tabindex attribute set to 0 or a negative value",
            metaText: "This element (role=spinbutton) does not have a tabindex attribute set to 0 or a negative value",
            metaTextDetail: "This {{tag-name}} (role=spinbutton) does not have a tabindex attribute set to 0 or a negative value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([disabled]):not([aria-disabled="true"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("356", {
            bestPractice: 1626,
            testId: 356,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements that has a role='textbox' attribute, excluding elements with a disabled attribute; or aria-disabled attribute set to a 'true' value, not intentionally hidden in the DOM and available to assistive technologies, does not have a tabindex attribute set to 0 or a negative value",
            metaText: "This element (role=textbox) does not have a tabindex attribute set to 0 or a negative value",
            metaTextDetail: "This {{tag-name}} (role=textbox) does not have a tabindex attribute set to 0 or a negative value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]:not([disabled]):not([aria-disabled="true"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]:not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("360", {
            bestPractice: 1626,
            testId: 360,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, have an aria-owns attribute that references the same id value as appears in the aria-owns attribute of another element.",
            metaText: "This element should not have an aria-owns attribute that references the same id value as appears in the aria-owns attribute of another element",
            metaTextDetail: "This {{tag-name}} should not have an aria-owns attribute of {{aria-owns}} that references the same id value as appears in the aria-owns attribute of another element",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-owns]:not([aria-owns=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $sameOwnsValues$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-owns]:not([aria-owns=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$],
                            $ariaowns$$ = $n$$.getAttribute("aria-owns");
                        1 < $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-owns="' + $ariaowns$$.replace(/"/g, '\\"') + '"]').length && $sameOwnsValues$$.push($n$$)
                    }
                    return $sameOwnsValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("361", {
            bestPractice: 1626,
            testId: 361,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'command | composite | input | landmark | range | roletype | section | sectionhead | select | structure | widget | window'.",
            metaText: "Abstract ARIA roles are not allowed on any element",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])', '[data-ae_ar="command"] [data-ae_ar="composite"] [data-ae_ar="input"] [data-ae_ar="landmark"] [data-ae_ar="range"] [data-ae_ar="roletype"] [data-ae_ar="section"] [data-ae_ar="sectionhead"] [data-ae_ar="select"] [data-ae_ar="structure"] [data-ae_ar="widget"] [data-ae_ar="window"]'.split(" ").map($subSelector$$ =>
                    `${'*[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'}${$subSelector$$}`).join(", "))
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("363", {
            bestPractice: 389,
            testId: 363,
            introduced: 1,
            mediaType: 1,
            description: "One or more track elements with a kind='chapters' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a srclang attribute set to a text value.",
            metaText: "This element does not have a srclang attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a srclang attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="chapters"]', 'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="chapters"]:not([srclang]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="chapters"][srclang=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("364", {
            bestPractice: 389,
            testId: 364,
            introduced: 1,
            mediaType: 1,
            description: "One or more track elements with a kind='descriptions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a srclang attribute set to a text value.",
            metaText: "This element does not have a srclang attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a srclang attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"]', 'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"]:not([srclang]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"][srclang=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("365", {
            bestPractice: 389,
            testId: 365,
            introduced: 1,
            mediaType: 1,
            description: "One or more track elements with a kind='subtitles' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a srclang attribute set to a text value.",
            metaText: "This element does not have a srclang attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a srclang attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"]',
                    'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"]:not([srclang]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"][srclang=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("366", {
            bestPractice: 444,
            testId: 366,
            introduced: 1,
            mediaType: 1,
            description: "One or more track elements with a kind='chapters' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a label attribute set to a text value.",
            metaText: "This element does not have a label attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a label attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="chapters"]', 'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="chapters"]:not([label]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="chapters"][label=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("367", {
            bestPractice: 2895,
            testId: 367,
            introduced: 1,
            mediaType: 1,
            description: "One or more track elements with a kind='descriptions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a label attribute set to a text value.",
            metaText: "This element does not have a label attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a label attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"]',
                    'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"]:not([label]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"][label=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("368", {
            bestPractice: 2049,
            testId: 368,
            introduced: 1,
            mediaType: 1,
            description: "One or more track elements with a kind='subtitles' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a label attribute set to a text value.",
            metaText: "This element does not have a label attribute set to a text value",
            metaTextDetail: "This {{tag-name}} does not have a label attribute set to a text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"]', 'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"]:not([label]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"][label=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("369", {
            bestPractice: 338,
            testId: 369,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='password' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=password) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for the password field. ",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="password"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="password"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("370", {
            bestPractice: 338,
            testId: 370,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='search' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=search) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for the search field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="search"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="search"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("371", {
            bestPractice: 338,
            testId: 371,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='tel' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=tel) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this telephone input field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="tel"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="tel"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("372", {
            bestPractice: 338,
            testId: 372,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='email' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=email) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this email field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="email"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="email"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("373", {
            bestPractice: 338,
            testId: 373,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='url' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=url) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this url field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="url"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="url"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("374", {
            bestPractice: 338,
            testId: 374,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='radio' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=radio) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this radio field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="radio"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="radio"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("375", {
            bestPractice: 338,
            testId: 375,
            introduced: 1,
            mediaType: 1,
            description: "One or more input type='checkbox' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=checkbox) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this checkbox field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="checkbox"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="checkbox"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("376", {
            bestPractice: 338,
            testId: 376,
            introduced: 1,
            mediaType: 1,
            description: "One or more input elements with no type attribute; or a type attribute set to a null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (no type specified) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this text input field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([type]), input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type=""]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([type]):not([data-ae_an]),input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type=""]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("385", {
            bestPractice: 464,
            testId: 385,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements with a role attribute set to the value 'listitem', not intentionally hidden in the DOM and available to assistive technologies does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); an element with a role set to the value 'list' as a parent; or a ul element (without an ARIA-assigned role), ol element (without an ARIA-assigned role) or element with a role set to the value 'list\u2019 with an aria-owns attribute set to the ID of the element in the same DOM.",
            metaText: "This element does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); an element with a role set to the value: list as a parent; or a ul element (without an ARIA-assigned role), ol element (without an ARIA-assigned role) or element with a role set to the value 'list\u2019 with an aria-owns attribute set to the ID of the element in the same DOM",
            metaTextDetail: "This {{tag-name}} does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); an element with a role set to the value: list as a parent; or a ul element (without an ARIA-assigned role), ol element (without an ARIA-assigned role) or element with a role set to the value 'list\u2019 with an aria-owns attribute set to the ID of the element in the same DOM",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('*[data-ae_ar="listitem"][data-ae_vis][data-ae_avat]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $badNodeCandidates$$ = $testUtil_ifDiff$$($aeKernel$$.rootTestNode, ['*[data-ae_ar="listitem"][data-ae_vis][data-ae_avat]', 'ul[data-ae_ar="null"][data-ae_vis][data-ae_avat] > *[data-ae_ar="listitem"][data-ae_vis][data-ae_avat], ol[data-ae_ar="null"][data-ae_vis][data-ae_avat] > *[data-ae_ar="listitem"][data-ae_vis][data-ae_avat], *[data-ae_ar="list"][data-ae_vis][data-ae_avat] > *[data-ae_ar="listitem"][data-ae_vis][data-ae_avat]']);
                    for (let $i$$ = 0; $i$$ < $badNodeCandidates$$.length; $i$$++) {
                        const $badNodeCandidate$$ = $badNodeCandidates$$[$i$$];
                        let $isBadNode$$ = !0;
                        var $ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$ = $badNodeCandidate$$.getAttribute("id");
                        if ($ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$ && $aeKernel$$.rootTestNode.querySelector(`[id='${$ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$.replace(/'/g,"\\'")}']:not([data-ae_inshdw])`)) {
                            const $ariaOwnsStartCssSelectorPostfix$$ = `[aria-owns^='${$ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$.replace(/'/g,
"\\'")}']`,
                                $ariaOwnsMiddleCssSelectorPostfix$$ = `[aria-owns*='${" "+$ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$.replace(/'/g,"\\'")}']`;
                            $ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$ = `[aria-owns$='${$ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$.replace(/'/g,"\\'")}']`;
                            $aeKernel$$.rootTestNode.querySelector(`${`${'ul[data-ae_ar="null"][data-ae_vis][data-ae_avat]'}${$ariaOwnsStartCssSelectorPostfix$$}, ${'ul[data-ae_ar="null"][data-ae_vis][data-ae_avat]'}${$ariaOwnsMiddleCssSelectorPostfix$$}, ${'ul[data-ae_ar="null"][data-ae_vis][data-ae_avat]'}${$ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$}`}, ${`${'ol[data-ae_ar="null"][data-ae_vis][data-ae_avat]'}${$ariaOwnsStartCssSelectorPostfix$$}, ${'ol[data-ae_ar="null"][data-ae_vis][data-ae_avat]'}${$ariaOwnsMiddleCssSelectorPostfix$$}, ${'ol[data-ae_ar="null"][data-ae_vis][data-ae_avat]'}${$ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$}`}, ${`${'*[data-ae_ar="list"][data-ae_vis][data-ae_avat]'}${$ariaOwnsStartCssSelectorPostfix$$}, ${'*[data-ae_ar="list"][data-ae_vis][data-ae_avat]'}${$ariaOwnsMiddleCssSelectorPostfix$$}, ${'*[data-ae_ar="list"][data-ae_vis][data-ae_avat]'}${$ariaOwnsEndCssSelectorPostfix_badNodeCandidateId$$}`}`) &&
                                ($isBadNode$$ = !1)
                        }
                        $isBadNode$$ && $badNodes$$.push($badNodeCandidate$$)
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("386", {
            bestPractice: 361,
            testId: 386,
            introduced: 1,
            mediaType: 1,
            description: "One or more td elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a headers attribute value that includes one or more invalid ids.",
            metaText: "This data cell has a headers attribute value that includes one or more invalid or duplicate ids",
            metaTextDetail: "This data cell has a headers attribute value of '{{headers}}' that includes one or more invalid or duplicate ids",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('td[data-ae_vis][data-ae_avat][headers]:not([headers=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $nodesWithBadIds$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('td[data-ae_vis][data-ae_avat][headers]:not([headers=""])'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++)
                        for (var $n$$ =
                                $res$$[$i$$], $headersIds$$ = $n$$.getAttribute("headers").trim().split(" "), $j$$ = 0, $len_headersIds$$ = $headersIds$$.length; $j$$ < $len_headersIds$$; $j$$++) {
                            var $headersId_refNodeLength$$ = $headersIds$$[$j$$];
                            if (!0 === $isValidIdOrName$$($headersId_refNodeLength$$)) {
                                if ($headersId_refNodeLength$$ = $aeKernel$$.rootTestNode.querySelectorAll("[id='" + $headersId_refNodeLength$$.replace(/'/g, "\\'") + "']").length, 0 === $headersId_refNodeLength$$ || 1 < $headersId_refNodeLength$$) {
                                    $nodesWithBadIds$$.push($n$$);
                                    break
                                }
                            } else {
                                $nodesWithBadIds$$.push($n$$);
                                break
                            }
                        }
                    return $nodesWithBadIds$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage4MarkdownFunc("identifiesDataTables", $identifiesDataTables$$);
        $aeKernel$$.addAutomaticTest("387", {
            bestPractice: 375,
            testId: 387,
            introduced: 1,
            mediaType: 1,
            description: "One or more table elements that hold table data, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain one or more th elements (without an ARIA-assigned role); th elements with a role set to: 'rowheader | columnheader'; or td elements with a role set to: 'rowheader | columnheader'.",
            metaText: "This element does not contain one or more: th elements (without an ARIA-assigned role); th elements with a role set to: rowheader | columnheader; or td elements with a role set to: rowheader | columnheader",
            metaTextDetail: "This {{tag-name}} does not contain one or more: th elements (without an ARIA-assigned role); th elements with a role set to: rowheader | columnheader; or td elements with a role set to: rowheader | columnheader",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('table[data-ae_vis][data-ae_avat][data-ae_dtab][data-ae_ar="null"]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $tables$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_dtab][data-ae_ar="null"]'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $n$$ = $res$$[$i$$];
                        0 === $n$$.querySelectorAll("th[data-ae_vis][data-ae_avat][data-ae_ar='null'], th[data-ae_vis][data-ae_avat][data-ae_ar='rowheader'], th[data-ae_vis][data-ae_avat][data-ae_ar='columnheader'], td[data-ae_vis][data-ae_avat][data-ae_ar='rowheader'], td[data-ae_vis][data-ae_avat][data-ae_ar='columnheader']").length &&
                            $tables$$.push($n$$)
                    }
                    return $tables$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage4MarkdownFunc("identifiesDataTables", $identifiesDataTables$$);
        $aeKernel$$.addAutomaticTest("388", {
            bestPractice: 590,
            testId: 388,
            introduced: 1,
            mediaType: 1,
            description: "One or more td elements in a data-table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, contains at least one table element (without an ARIA-assigned role).",
            metaText: "Table data cells should not contain a table element (without an ARIA-assigned role)",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] td[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    var $tableInTD_tdElementsThatContainTables_testNode$$ = $aeKernel$$.rootTestNode.querySelector("body") || $aeKernel$$.rootTestNode,
                        $clone$jscomp$3_res$$ = $cloneThisNode$$($tableInTD_tdElementsThatContainTables_testNode$$, !0);
                    for ($tableInTD_tdElementsThatContainTables_testNode$$ =
                        $clone$jscomp$3_res$$.querySelector("td[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)"); $tableInTD_tdElementsThatContainTables_testNode$$;) $tableInTD_tdElementsThatContainTables_testNode$$.innerHTML = "", $tableInTD_tdElementsThatContainTables_testNode$$ = $clone$jscomp$3_res$$.querySelector("td[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)");
                    $tableInTD_tdElementsThatContainTables_testNode$$ = [];
                    $clone$jscomp$3_res$$ = $clone$jscomp$3_res$$.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] td[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
                    for (var $i$$ = 0, $len_res$$ = $clone$jscomp$3_res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $tdOfInterest$$ = $clone$jscomp$3_res$$[$i$$];
                        0 < $tdOfInterest$$.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"]').length && $tableInTD_tdElementsThatContainTables_testNode$$.push($tdOfInterest$$)
                    }
                    return $tableInTD_tdElementsThatContainTables_testNode$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("389", {
            bestPractice: 361,
            testId: 389,
            introduced: 1,
            mediaType: 1,
            description: "One or more th elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, with a rowspan attribute set to a value of '0'; or '2' or more, does not have a scope attribute set to a text value of 'rowgroup'; or an id attribute set to a non-null value.",
            metaText: "This header cell does not have a scope attribute set to a text value of: rowgroup; or alternatively an id attribute set to a non-null text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('th[data-ae_vis][data-ae_avat][data-ae_ar="null"][rowspan]:not([rowspan="1"]):not([rowspan=""])', 'th[data-ae_vis][data-ae_avat][data-ae_ar="null"][rowspan]:not([rowspan="1"]):not([rowspan=""]):not([scope="rowgroup"]):not([id]), th[data-ae_vis][data-ae_avat][data-ae_ar="null"][rowspan]:not([rowspan="1"]):not([scope="rowgroup"])[id=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("390", {
            bestPractice: 361,
            testId: 390,
            introduced: 1,
            mediaType: 1,
            description: "One or more th elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, with a colspan attribute set to a value of '0'; or '2' or more, does not have a scope attribute set to a text value of 'colgroup'; or an id attribute set to a non-null value.",
            metaText: "This header cell does not have a scope attribute set to a text value of: colgroup; or alternatively an id attribute set to a non-null text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('th[data-ae_vis][data-ae_avat][data-ae_ar="null"][colspan]:not([colspan="1"]):not([colspan=""])',
                    'th[data-ae_vis][data-ae_avat][data-ae_ar="null"][colspan]:not([colspan="1"]):not([colspan=""]):not([scope="colgroup"]):not([id]), th[data-ae_vis][data-ae_avat][data-ae_ar="null"][colspan]:not([colspan="1"]):not([scope="colgroup"])[id=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("391", {
            bestPractice: 361,
            testId: 391,
            introduced: 1,
            mediaType: 1,
            description: "One or more th elements that is in a table in which other elements contain scope attributes set to non-null values, excluding those elements with a rowspan or colspan attribute set to a value of '0'; or '2' or more, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a scope attribute set to a text value of 'row' or 'col'.",
            metaText: "This header cell does not have a scope attribute set to a text value of: row; or col",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    const $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++)
                        if (0 < $res$$[$i$$].querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])').length) return !0;
                    return !1
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = [],
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])');
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $applicableNodes$$.push($refNodes$$[$j$$])
                    }
                    return $applicableNodes$$
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $failConditionSubSelectors$$ = ':not([scope]):not([colspan]):not([rowspan]) :not([colspan])[rowspan=""] :not([scope]):not([colspan])[rowspan="1"] :not([scope]):not([rowspan])[colspan=""] :not([scope]):not([rowspan])[colspan="1"] [scope=""]:not([colspan]):not([rowspan]) [scope=""]:not([colspan])[rowspan=""] [scope=""]:not([colspan])[rowspan="1"] [scope=""]:not([rowspan])[colspan=""] [scope=""]:not([rowspan])[colspan="1"] [scope]:not([scope=""]):not([scope="row"]):not([scope="col"]):not([colspan]):not([rowspan]) [scope]:not([scope=""]):not([scope="row"]):not([scope="col"]):not([colspan])[rowspan=""] [scope]:not([scope=""]):not([scope="row"]):not([scope="col"]):not([colspan])[rowspan="1"] [scope]:not([scope=""]):not([scope="row"]):not([scope="col"]):not([rowspan])[colspan=""] [scope]:not([scope=""]):not([scope="row"]):not([scope="col"]):not([rowspan])[colspan="1"]'.split(" "),
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll($failConditionSubSelectors$$.map($subSelector$$ => `th[data-ae_ar="null"][data-ae_vis][data-ae_avat]${$subSelector$$}`).join(", "));
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $badNodes$$.push($refNodes$$[$j$$])
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("392", {
            bestPractice: 361,
            testId: 392,
            introduced: 1,
            mediaType: 1,
            description: "One or more th elements that is in a table in which other elements contain scope attributes set to a non-null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, with a rowspan attribute set to a value of '0'; or '2' or more; does not have a scope attribute set to a text value of 'rowgroup'.",
            metaText: "This header cell does not have a scope attribute set to a text value of: rowgroup",
            fixType: "",
            testFunc: function() {
                const $testShell$$ =
                    new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    const $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++)
                        if (0 < $res$$[$i$$].querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])').length) return !0;
                    return !1
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = [],
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])');
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $applicableNodes$$.push($refNodes$$[$j$$])
                    }
                    return $applicableNodes$$
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $failConditionSubSelectors$$ = [':not([scope])[rowspan]:not([rowspan="1"])', '[scope=""][rowspan]:not([rowspan="1"])',
                            '[scope]:not([scope=""]):not([scope="rowgroup"])[rowspan]:not([rowspan="1"])'
                        ],
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll($failConditionSubSelectors$$.map($subSelector$$ => `th[data-ae_ar="null"][data-ae_vis][data-ae_avat]${$subSelector$$}`).join(", "));
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $badNodes$$.push($refNodes$$[$j$$])
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("393", {
            bestPractice: 361,
            testId: 393,
            introduced: 1,
            mediaType: 1,
            description: "One or more th elements that is in a table in which other elements contain scope attributes set to a non-null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, with a colspan attribute set to a value of '0'; or '2' or more; does not have a scope attribute set to a text value of 'colgroup'.",
            metaText: "This header cell does not have a scope attribute set to a text value of: colgroup",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    const $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++)
                        if (0 < $res$$[$i$$].querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])').length) return !0;
                    return !1
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = [],
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])');
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $applicableNodes$$.push($refNodes$$[$j$$])
                    }
                    return $applicableNodes$$
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $failConditionSubSelectors$$ = [':not([scope])[colspan]:not([colspan="1"])', '[scope=""][colspan]:not([colspan="1"])', '[scope]:not([scope=""]):not([scope="colgroup"])[colspan]:not([colspan="1"])'],
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll($failConditionSubSelectors$$.map($subSelector$$ => `th[data-ae_ar="null"][data-ae_vis][data-ae_avat]${$subSelector$$}`).join(", "));
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $badNodes$$.push($refNodes$$[$j$$])
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("394", {
            bestPractice: 361,
            testId: 394,
            introduced: 1,
            mediaType: 1,
            description: "One or more th elements that is in a table in which other elements contain headers attributes set to a non-null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have an id attribute set to a non-null value.",
            metaText: "This element does not have an id attribute set to a non-null text value",
            metaTextDetail: "This {{tag-name}} does not have an id attribute set to a non-null text value",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    const $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++)
                        if (0 < $res$$[$i$$].querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])').length) return !0;
                    return !1
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = [],
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $applicableNodes$$.push($refNodes$$[$j$$])
                    }
                    return $applicableNodes$$
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $failConditionSubSelectors$$ = [":not([id])", '[id=""]'],
                        $res$$ = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll($failConditionSubSelectors$$.map($subSelector$$ => `th[data-ae_ar="null"][data-ae_vis][data-ae_avat]${$subSelector$$}`).join(", "));
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $badNodes$$.push($refNodes$$[$j$$])
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage4MarkdownFunc("identifiesDataTables",
            $identifiesDataTables$$);
        $aeKernel$$.addAutomaticTest("395", {
            bestPractice: 361,
            testId: 395,
            introduced: 1,
            mediaType: 1,
            description: "One or more td elements (excluding, if present, an empty td element which is found as the first element in the first row) in a data-table in which other elements contain headers attributes set to a non-null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a headers attribute set to a non-null value.",
            metaText: "This element does not have a headers attribute set to a non-null text value",
            metaTextDetail: "This {{tag-name}} does not have a headers attribute set to a non-null text value",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    const $res$$ = this.querySelectorAll('table[data-ae_dtab="true"][data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++)
                        if (0 < $res$$[$i$$].querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])').length) return !0;
                    return !1
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = [],
                        $res$$ = this.querySelectorAll('table[data-ae_dtab="true"][data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $res$$[$i$$].querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $applicableNodes$$.push($refNodes$$[$j$$])
                    }
                    return $applicableNodes$$
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $res$$ = this.querySelectorAll('table[data-ae_dtab="true"][data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $refNodes$$ = $testUtil_ifDiff$$($res$$[$i$$], ["td[data-ae_vis][data-ae_avat][data-ae_ar='null']:not([headers]), td[data-ae_vis][data-ae_avat][data-ae_ar='null'][headers='']", "tr[data-ae_vis][data-ae_avat][data-ae_ar='null']:first-child td:first-child:empty"]);
                        for (let $j$$ = 0; $j$$ < $refNodes$$.length; $j$$++) $badNodes$$.push($refNodes$$[$j$$])
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("396", {
            bestPractice: 464,
            testId: 396,
            introduced: 1,
            mediaType: 1,
            description: "One or more dd elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent.",
            metaText: "This element does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent",
            metaTextDetail: "This {{tag-name}} does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('dd[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    return $testUtil_ifDiff$$($aeKernel$$.rootTestNode, ['dd[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'dl[data-ae_ar="null"][data-ae_vis][data-ae_avat] > dd[data-ae_ar="null"][data-ae_vis][data-ae_avat], dl[data-ae_ar="null"][data-ae_vis][data-ae_avat] > div[data-ae_ar="null"][data-ae_vis][data-ae_avat] > dd[data-ae_ar="null"][data-ae_vis][data-ae_avat]'])
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("397", {
            bestPractice: 464,
            testId: 397,
            introduced: 1,
            mediaType: 1,
            description: "One or more dt elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent.",
            metaText: "This element does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent",
            metaTextDetail: "This {{tag-name}} does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('dt[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    return $testUtil_ifDiff$$($aeKernel$$.rootTestNode, ['dt[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'dl[data-ae_ar="null"][data-ae_vis][data-ae_avat] > dt[data-ae_ar="null"][data-ae_vis][data-ae_avat], dl[data-ae_ar="null"][data-ae_vis][data-ae_avat] > div[data-ae_ar="null"][data-ae_vis][data-ae_avat] > dt[data-ae_ar="null"][data-ae_vis][data-ae_avat]'])
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("412", {
            bestPractice: 1626,
            testId: 412,
            introduced: 1,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM, has a role attribute set to an invalid aria role value.",
            metaText: "The role attribute value given to this element is not allowed, as it is not a valid aria role.",
            metaTextDetail: "The role attribute of {{data-ae_ar}} given to this {{tag-name}} is not allowed, as it is not a valid aria role.",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Specify a valid aria role for this element.",
                fix: {
                    role: null
                }
            },
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('*[data-ae_ar]:not([data-ae_ar="null"])[data-ae_vis]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $notProper$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_ar]:not([data-ae_ar="null"])[data-ae_vis]'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $result$$ = $res$$[$i$$],
                            $role$$ = $result$$.getAttribute("data-ae_ar").toLowerCase();
                        if (!0 !== $testUtil_ariaRoleLookupTable$$[$role$$]) {
                            var $tag$$ = $result$$.tagName.toLowerCase();
                            ["span", "div", "p"].includes($tag$$) && "text" === $role$$ || ($notProper$$[$notProper$$.length] = $result$$)
                        }
                    }
                    return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("477", {
            bestPractice: 1626,
            testId: 477,
            introduced: 2.1,
            mediaType: 1,
            description: "One or more body elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-hidden attribute set to the value: 'true'.",
            metaText: "This element has an aria-hidden attribute set to 'true'",
            metaTextDetail: "This {{tag-name}} has an aria-hidden attribute set to 'true'",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("body[data-ae_vis]", 'body[data-ae_vis][aria-hidden="true"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("485", {
            bestPractice: 2049,
            testId: 485,
            introduced: 2.2,
            mediaType: 1,
            description: "One or more track elements with a kind='captions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a src attribute set to a text value.",
            metaText: "This track element does not have a src attribute or it is set to a null text value",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('track[kind="captions"][data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'track[kind="captions"][data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([src]),track[kind="captions"][data-ae_vis][data-ae_avat][data-ae_ar="null"][src=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles",
            $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("505", {
            bestPractice: 338,
            testId: 505,
            introduced: 2.3,
            mediaType: 1,
            description: "One or more elements that has a role='checkbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=checkbox) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=checkbox) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("507", {
            bestPractice: 338,
            testId: 507,
            introduced: 2.3,
            mediaType: 1,
            description: "One or more elements that has a role='radio' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=radio) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=radio) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("508", {
            bestPractice: 338,
            testId: 508,
            introduced: 2.3,
            mediaType: 1,
            description: "One or more elements that has a role='slider' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=slider) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=slider) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("509", {
            bestPractice: 338,
            testId: 509,
            introduced: 2.3,
            mediaType: 1,
            description: "One or more elements that has a role='textbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=textbox) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=textbox) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("510", {
            bestPractice: 338,
            testId: 510,
            introduced: 2.3,
            mediaType: 1,
            description: "One or more elements that has a role='combobox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=combobox) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=combobox) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("511", {
            bestPractice: 338,
            testId: 511,
            introduced: 2.3,
            mediaType: 1,
            description: "One or more elements that has a role='button' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=button) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=button) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="button"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="button"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("520", {
            bestPractice: 523,
            testId: 520,
            introduced: 2.3,
            mediaType: 1,
            description: "One or more iframe elements, excluding those elements with aria-hidden='true' or tabindex set to a negative value, not intentionally hidden in the DOM, has a suspicious calculated accessible name value.",
            metaText: "This iframe element has a suspicious calculated accessible name value",
            metaTextDetail: "This iframe element has a suspicious calculated accessible name value of: {{data-ae_an}}",
            fixType: {
                fixType: 1,
                domSpec: !0,
                helperText: "Specify a descriptive label for the frame.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an]', 'iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an="title"], iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an="frame"], iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an="iframe"], iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an="top"], iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an="bottom"], iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an="left"], iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis][data-ae_an="right"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("527", {
            bestPractice: 2519,
            testId: 527,
            introduced: 2.3,
            mediaType: 1,
            description: "Two or more aside elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, have accessible names that are non-unique values",
            metaText: "This aside does not have a unique accessible name as required when two or more aside elements are present",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    return 0 < this.applicableNodesFunc(this._applicableNodesFuncArgs).length
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = this.querySelectorAll('aside[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    return 1 < $applicableNodes$$.length ? $applicableNodes$$ : []
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    var $notUnique$$ = [],
                        $nodeStore$$ = {},
                        $keys$jscomp$1_res$$ = this.querySelectorAll('aside[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    if (1 < $keys$jscomp$1_res$$.length) {
                        for (var $i$jscomp$90_j$$ = 0; $i$jscomp$90_j$$ < $keys$jscomp$1_res$$.length; $i$jscomp$90_j$$++) {
                            var $n$jscomp$51_nArray$$ = $keys$jscomp$1_res$$[$i$jscomp$90_j$$],
                                $thean$$ = $n$jscomp$51_nArray$$.getAttribute("data-ae_an");
                            try {
                                $nodeStore$$[$thean$$].push($n$jscomp$51_nArray$$)
                            } catch ($err$$) {
                                $nodeStore$$[$thean$$] = [], $nodeStore$$[$thean$$].push($n$jscomp$51_nArray$$)
                            }
                        }
                        $keys$jscomp$1_res$$ = Object.keys($nodeStore$$);
                        for ($i$jscomp$90_j$$ = 0; $i$jscomp$90_j$$ < $keys$jscomp$1_res$$.length; $i$jscomp$90_j$$++) $n$jscomp$51_nArray$$ = $nodeStore$$[$keys$jscomp$1_res$$[$i$jscomp$90_j$$]], 1 < $n$jscomp$51_nArray$$.length && ($notUnique$$ = $notUnique$$.concat($n$jscomp$51_nArray$$))
                    }
                    return $notUnique$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles",
            $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("531", {
            bestPractice: 2519,
            testId: 531,
            introduced: 2.4,
            mediaType: 1,
            description: "Two or more nav elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, have accessible names that are non-unique values",
            metaText: "This nav does not have a unique accessible name as required when two or more nav elements are present",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    return 0 < this.applicableNodesFunc(this._applicableNodesFuncArgs).length
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = this.querySelectorAll('nav[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    return 1 < $applicableNodes$$.length ? $applicableNodes$$ : []
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    var $notUnique$$ = [],
                        $nodeStore$$ = {},
                        $keys$jscomp$2_res$$ =
                        this.querySelectorAll('nav[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    if (1 < $keys$jscomp$2_res$$.length) {
                        for (var $i$jscomp$91_j$$ = 0; $i$jscomp$91_j$$ < $keys$jscomp$2_res$$.length; $i$jscomp$91_j$$++) {
                            var $n$jscomp$52_nArray$$ = $keys$jscomp$2_res$$[$i$jscomp$91_j$$],
                                $thean$$ = $n$jscomp$52_nArray$$.getAttribute("data-ae_an");
                            try {
                                $nodeStore$$[$thean$$].push($n$jscomp$52_nArray$$)
                            } catch ($err$$) {
                                $nodeStore$$[$thean$$] = [], $nodeStore$$[$thean$$].push($n$jscomp$52_nArray$$)
                            }
                        }
                        $keys$jscomp$2_res$$ = Object.keys($nodeStore$$);
                        for ($i$jscomp$91_j$$ = 0; $i$jscomp$91_j$$ < $keys$jscomp$2_res$$.length; $i$jscomp$91_j$$++) $n$jscomp$52_nArray$$ = $nodeStore$$[$keys$jscomp$2_res$$[$i$jscomp$91_j$$]], 1 < $n$jscomp$52_nArray$$.length && ($notUnique$$ = $notUnique$$.concat($n$jscomp$52_nArray$$))
                    }
                    return $notUnique$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("532", {
            bestPractice: 2519,
            testId: 532,
            introduced: 2.4,
            mediaType: 1,
            description: "Two or more aside elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism for providing a calculated accessible name",
            metaText: "This aside does not have an accessible name as required when two or more aside elements are present",
            fixType: "",
            testFunc: function() {
                const $testShell$$ =
                    new $AutoTestShell$$(null, 'aside[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])');
                $testShell$$.set_applicabilityTest(function() {
                    return 0 < this.applicableNodesFunc(this._applicableNodesFuncArgs).length
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = this.querySelectorAll('aside[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    return 1 < $applicableNodes$$.length ? $applicableNodes$$ : []
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("533", {
            bestPractice: 2519,
            testId: 533,
            introduced: 2.4,
            mediaType: 1,
            description: "Two or more nav elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism for providing a calculated accessible name",
            metaText: "This nav does not have an accessible name as required when two or more nav elements are present",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$(null, 'nav[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])');
                $testShell$$.set_applicabilityTest(function() {
                    return 0 < this.applicableNodesFunc(this._applicableNodesFuncArgs).length
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = this.querySelectorAll('nav[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    return 1 < $applicableNodes$$.length ? $applicableNodes$$ : []
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("581", {
            bestPractice: 338,
            testId: 581,
            introduced: 2.5,
            mediaType: 1,
            description: "One or more input type='date' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=date) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this date input field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="date"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="date"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("582", {
            bestPractice: 338,
            testId: 582,
            introduced: 2.5,
            mediaType: 1,
            description: "One or more input type='number' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=number) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this number input field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="number"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="number"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("583", {
            bestPractice: 338,
            testId: 583,
            introduced: 2.5,
            mediaType: 1,
            description: "One or more input type='time' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This input (type=time) element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: {
                fixType: 1,
                domSpec: !1,
                helperText: "Provide a descriptive label for this time input field.",
                fix: {
                    "aria-label": null,
                    "aria-labelledby": !1
                }
            },
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="time"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="time"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("609", {
            bestPractice: 1626,
            testId: 609,
            introduced: 2.6,
            mediaType: 1,
            description: "One or more elements with an aria-setsize attribute not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-posinset attribute.",
            metaText: "This element has an aria-setsize attribute but does not have an aria-posinset attribute",
            metaTextDetail: "This {{tag-name}} has an aria-setsize attribute but does not have an aria-posinset attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-setsize]",
                    "*[data-ae_vis][data-ae_avat][aria-setsize]:not([aria-posinset])")
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("610", {
            bestPractice: 1626,
            testId: 610,
            introduced: 2.6,
            mediaType: 1,
            description: "One or more elements, excluding input type=radio elements and elements with a role='article | listitem | option | menuitem | menuitemcheckbox | menuitemradio | radio | tab | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-setsize attribute.",
            metaText: "The aria-setsize attribute is not allowed on this element because it does not have the correct role attribute",
            metaTextDetail: "The aria-setsize attribute is not allowed on this {{tag-name}} because it does not have the correct role attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat][aria-setsize]", '*[data-ae_vis][data-ae_avat]:not(input[type="radio"]):not([data-ae_ar="article"]):not([data-ae_ar="listitem"]):not([data-ae_ar="option"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="treeitem"])[aria-setsize]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("630", {
            bestPractice: 338,
            testId: 630,
            introduced: 2.7,
            mediaType: 1,
            description: "One or more elements that has a role='spinbutton' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=spinbutton) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=spinbutton) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("647", {
            bestPractice: 429,
            testId: 647,
            introduced: 2.9,
            mediaType: 1,
            description: "The root html element does not have a lang attribute set to a text value that starts with an IANA primary language value.",
            metaText: "This element does not have a lang attribute set to a text value that start with an IANA Language Subtag Registry language value",
            metaTextDetail: 'This {{tag-name}} has a lang attribute of "{{lang}}", which is not a text value that start with an IANA Language Subtag Registry language value',
            fixType: "",
            testFunc: function() {
                const $testShell$$ =
                    new $AutoTestShell$$("html[lang]");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $notProper$$ = [],
                        $htmlElement$$ = this.querySelector("html[lang]");
                    let $lang$$ = $htmlElement$$.getAttribute("lang");
                    "" !== $lang$$ ? ($lang$$ = $lang$$.split("-")[0].toLowerCase(), (2 > $lang$$.length || 3 < $lang$$.length || !$ACCEPTED_LANGUAGE_SUBTAGS$$[$lang$$]) && $notProper$$.push($htmlElement$$)) : $notProper$$.push($htmlElement$$);
                    return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("704", {
            bestPractice: 1626,
            testId: 704,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-setsize attribute set to a non-integer value.",
            metaText: "This element has an aria-setsize attribute that is set to a non-integer value",
            metaTextDetail: "This {{tag-name}} has an aria-setsize attribute that is set to a non-integer value",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-setsize]:not([aria-setsize=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $nodesWithBadValues$$ = [],
                        $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-setsize]:not([aria-setsize=""])');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $node$$ = $res$$[$i$$],
                            $attributeValue$$ = $node$$.getAttribute("aria-setsize");
                        $isInt$$($attributeValue$$) || $nodesWithBadValues$$.push($node$$)
                    }
                    return $nodesWithBadValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("706", {
            bestPractice: 1626,
            testId: 706,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-posinset attribute that is not set to an integer value that is greater than, or equal to, 1.",
            metaText: "This element has an aria-posinset attribute that is not set to an integer value that is greater than, or equal to, 1",
            metaTextDetail: "This {{tag-name}} has an aria-posinset attribute of {{aria-posinset}}, which is not an integer value greater than, or equal to, 1",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][aria-posinset]:not([aria-posinset=""])');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $nodesWithBadValues$$ = [],
                        $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-posinset]:not([aria-posinset=""])');
                    for (let $i$$ = 0; $i$$ < $res$$.length; $i$$++) {
                        const $node$$ = $res$$[$i$$],
                            $attributeValue$$ = $node$$.getAttribute("aria-posinset");
                        (!$isInt$$($attributeValue$$) || 1 >
                            $attributeValue$$) && $nodesWithBadValues$$.push($node$$)
                    }
                    return $nodesWithBadValues$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("725", {
            bestPractice: 456,
            testId: 725,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more FRAME elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a src attribute set to an image file reference.",
            metaText: "This element has a src attribute set to an image file reference",
            metaTextDetail: "This {{tag-name}} has a src attribute set to an image file reference",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src]:not([src=''])", "frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.gif']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.GIF']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.jpg']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.JPG']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.jpeg']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.JPEG']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.bmp']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.BMP']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.png']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.PNG']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.tiff']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.TIFF']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.eps']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.EPS']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.pcx']:not([src*='?']):not([src*='.htm']), frame[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.PCX']:not([src*='?']):not([src*='.htm'])")
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("726", {
            bestPractice: 456,
            testId: 726,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more IFRAME elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a src attribute set to an image file reference.",
            metaText: "This element has a src attribute set to an image file reference",
            metaTextDetail: "This {{tag-name}} has a src attribute set to an image file reference",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src]:not([src=''])",
                    "iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.gif']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.GIF']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.jpg']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.JPG']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.jpeg']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.JPEG']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.bmp']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.BMP']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.png']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.PNG']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.tiff']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.TIFF']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.eps']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.EPS']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.pcx']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.PCX']:not([src*='?']):not([src*='.htm'])")
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("734", {
            bestPractice: 1893,
            testId: 734,
            introduced: 2.13,
            mediaType: 1,
            description: "One or more dialog elements with an open attribute, without an ARIA-assigned role and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This dialog element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('dialog[open][data-ae_ar="null"][data-ae_avat]', 'dialog[open][data-ae_ar="null"][data-ae_avat]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("736", {
            bestPractice: 1893,
            testId: 736,
            introduced: 2.13,
            mediaType: 1,
            description: "One or more elements with a role='dialog' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This element (role=dialog) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=dialog) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="dialog"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="dialog"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("738", {
            bestPractice: 1352,
            testId: 738,
            introduced: 2.11,
            mediaType: 1,
            description: "One or more fieldset elements, not intentionally hidden in the DOM and available to assistive technologies, has a legend which is not the first child of the fieldset.",
            metaText: "This fieldset element has a legend element but it is not the first child of the fieldset",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$("fieldset[data-ae_vis][data-ae_avat]");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $badNodes$$ = [],
                            $res$$ = $aeKernel$$.rootTestNode.querySelectorAll("fieldset[data-ae_vis][data-ae_avat]"), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $result$$ = $res$$[$i$$];
                        0 < $result$$.querySelectorAll("legend").length && "LEGEND" != $result$$.firstElementChild.tagName && $badNodes$$.push($result$$)
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("779", {
            bestPractice: 2900,
            testId: 779,
            introduced: 2.13,
            mediaType: 1,
            description: "One or more meta elements, in the head element, has a content attribute set to a value that includes an instruction that stops a user rotating the viewport size i.e. 'autoRotate:disabled'.",
            metaText: "This element has a content attribute set to a value that includes an instruction that stops a user rotating the viewport",
            metaTextDetail: "This {{tag-name}} has a content attribute set to a value that includes an instruction that stops a user rotating the viewport",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('head meta[http-equiv="ScreenOrientation"]', 'head meta[http-equiv="ScreenOrientation"][content~="autoRotate:disabled"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("790", {
            bestPractice: 524,
            testId: 790,
            introduced: 2.13,
            mediaType: 1,
            description: "One or more elements with a tabindex attribute set to a value greater than or equal to 0 and any implicitly focusable elements without a tabindex set to a negative value (a elements with an href attribute set to a text value, area elements with an href attribute set to a text value, input elements without a disabled attribute, select elements without a disabled attribute, textarea elements without a disabled attribute, button elements without a disabled attribute, details elements, audio elements and video elements), not intentionally hidden in the DOM, has an aria-hidden attribute set to a 'true' value directly on the element.",
            metaText: "This element is focusable and has an aria-hidden attribute set to true",
            metaTextDetail: "This {{tag-name}} is focusable and has an aria-hidden attribute set to true",
            fixType: "",
            testFunc: function() {
                var $baseCssSelectors_relevantCssSelector$$ = "a[data-ae_vis][href]:not([href='']) area[href]:not([href='']) input[data-ae_vis]:not([disabled]) select[data-ae_vis]:not([disabled]) textarea[data-ae_vis]:not([disabled]) button[data-ae_vis]:not([disabled]) details[data-ae_vis] audio[data-ae_vis] video[data-ae_vis]".split(" ");
                const $suffixes$$ = [":not([tabindex])", '[tabindex=""]', '[tabindex]:not([tabindex=""]):not([tabindex^="-"])'];
                let $relevantCssSelectorArray$$ = ['*[data-ae_vis][tabindex]:not([tabindex=""]):not([tabindex^="-"])'];
                var $cssSelector$$ = ['*[data-ae_vis][tabindex]:not([tabindex=""]):not([tabindex^="-"])[aria-hidden=\'true\']'];
                for (let $i$$ = 0; $i$$ < $baseCssSelectors_relevantCssSelector$$.length; $i$$++) {
                    const $baseCssSelector$$ = $baseCssSelectors_relevantCssSelector$$[$i$$];
                    for (let $l$$ = 0; $l$$ < $suffixes$$.length; $l$$++) {
                        const $suffix$$ =
                            $suffixes$$[$l$$];
                        $relevantCssSelectorArray$$.push(`${$baseCssSelector$$}${$suffix$$}`);
                        $cssSelector$$.push(`${$baseCssSelector$$}${$suffix$$}[aria-hidden='true']`)
                    }
                }
                $baseCssSelectors_relevantCssSelector$$ = $relevantCssSelectorArray$$.join(",");
                $cssSelector$$ = $cssSelector$$.join(",");
                return new $AutoTestShell$$($baseCssSelectors_relevantCssSelector$$, $cssSelector$$)
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("809", {
            bestPractice: 1352,
            testId: 809,
            introduced: 2.14,
            mediaType: 1,
            description: "More than one main element, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies is located in the body element.",
            metaText: "This MAIN is one of multiple main elements that appear in the body element.",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$;
                $testShell$$.set_applicabilityTest(function() {
                    return 0 < this.applicableNodesFunc(this._applicableNodesFuncArgs).length
                });
                $testShell$$.set_applicableNodesFunc(function() {
                    const $applicableNodes$$ = this.querySelectorAll('body main[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
                    return 1 < $applicableNodes$$.length ? $applicableNodes$$ : []
                });
                $testShell$$.set_candidateSetNodesFunc(function() {
                    return this.querySelectorAll('body main[data-ae_ar="null"][data-ae_vis][data-ae_avat]')
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("825", {
            bestPractice: 361,
            testId: 825,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more elements in a table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a headers attribute value that includes one or more valid ids that point to an element outside the table.",
            metaText: "This element has a headers attribute that includes one or more ids which point to an element outside the table",
            metaTextDetail: "This {{tag-name}} has a headers attribute value of {{headers}} that includes one or more ids which point to an element outside the table",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("td[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers='']), th[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers=''])");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $tableElements$$ = $aeKernel$$.rootTestNode.querySelectorAll("table");
                    for (let $i$$ = 0; $i$$ < $tableElements$$.length; $i$$++) {
                        const $relevantTableElement$$ = $tableElements$$[$i$$],
                            $relevantTableDataAndHeaderElements$$ = $relevantTableElement$$.querySelectorAll("td[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers='']), th[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers=''])");
                        for (let $j$$ = 0; $j$$ < $relevantTableDataAndHeaderElements$$.length; $j$$++) {
                            const $relevantTableDataAndHeaderElement$$ = $relevantTableDataAndHeaderElements$$[$j$$],
                                $headerIds$$ =
                                $relevantTableDataAndHeaderElement$$.getAttribute("headers").trim().split(" ");
                            for (let $k$$ = 0; $k$$ < $headerIds$$.length; $k$$++) {
                                const $headerId$$ = $headerIds$$[$k$$];
                                if (!$relevantTableElement$$.querySelector(`[id='${$headerId$$.replace(/'/g,"\\'")}']`) && $aeKernel$$.rootTestNode.querySelector(`[id='${$headerId$$.replace(/'/g,"\\'")}']`)) {
                                    $badNodes$$.push($relevantTableDataAndHeaderElement$$);
                                    break
                                }
                            }
                        }
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("828", {
            bestPractice: 361,
            testId: 828,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more elements in a table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a headers attribute value that includes one or more valid ids that point to an element that is not a td, th or element with a role of cell, gridcell, columnheader or rowheader.",
            metaText: "This element has a headers attribute that points to an element which is not a table cell",
            metaTextDetail: "This {{tag-name}} has a headers attribute that points to an element which is not a table cell",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("td[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers='']), th[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers=''])");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [],
                        $relevantTableDataAndHeaderElements$$ = $aeKernel$$.rootTestNode.querySelectorAll("td[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers='']), th[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers=''])");
                    for (let $i$$ = 0; $i$$ < $relevantTableDataAndHeaderElements$$.length; $i$$++) {
                        const $relevantTableDataAndHeaderElement$$ = $relevantTableDataAndHeaderElements$$[$i$$],
                            $headerIds$$ = $relevantTableDataAndHeaderElement$$.getAttribute("headers").trim().split(" ");
                        for (let $j$$ = 0; $j$$ < $headerIds$$.length; $j$$++) {
                            const $headerId$$ = $headerIds$$[$j$$];
                            if (!$aeKernel$$.rootTestNode.querySelector(`td[id='${$headerId$$.replace(/'/g,"\\'")}'], th[id='${$headerId$$.replace(/'/g,"\\'")}'], *[id='${$headerId$$.replace(/'/g,
"\\'")}'][data-ae_ar="cell"], *[id='${$headerId$$.replace(/'/g,"\\'")}'][data-ae_ar="gridcell"], *[id='${$headerId$$.replace(/'/g,"\\'")}'][data-ae_ar="columnheader"], *[id='${$headerId$$.replace(/'/g,"\\'")}'][data-ae_ar="rowheader"]`) && $aeKernel$$.rootTestNode.querySelector(`[id='${$headerId$$.replace(/'/g,"\\'")}']`)) {
                                $badNodes$$.push($relevantTableDataAndHeaderElement$$);
                                break
                            }
                        }
                    }
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("863", {
            bestPractice: 2440,
            testId: 863,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more input elements with a placeholder attribute, without an aria-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an accessible name that depends on the placeholder attribute text.",
            metaText: "This input should not rely on text in the placeholder attribute for an accessible name",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("input[data-ae_ar='null'][data-ae_vis][data-ae_avat][data-ae_an]", "input[data-ae_ar='null'][data-ae_vis][data-ae_avat][data-ae_an][data-ae_anp]")
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("872", {
            bestPractice: 2440,
            testId: 872,
            introduced: 2.15,
            mediaType: 1,
            description: "One or more textarea elements with a placeholder attribute, without an aria-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an accessible name that depends on the placeholder attribute text.",
            metaText: "This textarea should not rely on text in the placeholder attribute for an accessible name",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("textarea[data-ae_ar='null'][data-ae_vis][data-ae_avat][data-ae_an]",
                    "textarea[data-ae_ar='null'][data-ae_vis][data-ae_avat][data-ae_an][data-ae_anp]")
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("874", {
            bestPractice: 338,
            testId: 874,
            introduced: 2.16,
            mediaType: 1,
            description: "One or more summary elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
            metaText: "This summary element does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("summary[data-ae_ar='null'][data-ae_vis][data-ae_avat]", "summary[data-ae_ar='null'][data-ae_vis][data-ae_avat]:not([data-ae_an])")
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("884", {
            bestPractice: 364,
            testId: 884,
            introduced: 2.16,
            mediaType: 1,
            description: "A document title element is not located in the DOM.",
            metaText: "This DOM does not contain a document title element",
            fixType: {
                fixType: 2,
                domSpec: !0,
                helperText: "Specify a unique and descriptive title for the page.",
                fix: {
                    targetCssSelector: "head",
                    create: "title",
                    innerHTML: null
                }
            },
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("html");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $badNodes$$ = [];
                    this.querySelector("html title:not([data-ae_inshdw]):not(svg title)") || $badNodes$$.push(this.querySelector("html"));
                    return $badNodes$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("1010", {
            bestPractice: 2519,
            testId: 1010,
            introduced: 2.19,
            mediaType: 1,
            description: "One or more elements that has a role='region' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=region) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=region) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_ar='region'][data-ae_vis][data-ae_avat]", "*[data-ae_ar='region'][data-ae_vis][data-ae_avat]:not([data-ae_an])")
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("1017", {
            bestPractice: 2554,
            testId: 1017,
            introduced: 2.19,
            mediaType: 1,
            description: "One or more elements that has a role='progressbar' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
            metaText: "This element (role=progressbar) does not have a mechanism that allows an accessible name value to be calculated",
            metaTextDetail: "This {{tag-name}} (role=progressbar) does not have a mechanism that allows an accessible name value to be calculated",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="progressbar"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="progressbar"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("1038", {
            bestPractice: 1626,
            testId: 1038,
            introduced: 2.2,
            mediaType: 1,
            description: "One or more elements that has a role='switch' attribute, excluding input type=\u2018checkbox\u2019 elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
            metaText: "This element (role=switch) does not have an aria-checked attribute",
            metaTextDetail: "This {{tag-name}} (role=switch) does not have an aria-checked attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="switch"]:not(input[type="checkbox"])',
                    '*[data-ae_vis][data-ae_avat][data-ae_ar="switch"]:not(input[type="checkbox"]):not([aria-checked])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("1039", {
            bestPractice: 1626,
            testId: 1039,
            introduced: 2.2,
            mediaType: 1,
            description: "One or more elements that has a role='checkbox' attribute, excluding input type=\u2018checkbox\u2019 elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
            metaText: "This element (role=checkbox) does not have an aria-checked attribute",
            metaTextDetail: "This {{tag-name}} (role=checkbox) does not have an aria-checked attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not(input[type="checkbox"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not(input[type="checkbox"]):not([aria-checked])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("1040", {
            bestPractice: 1626,
            testId: 1040,
            introduced: 2.2,
            mediaType: 1,
            description: "One or more elements that has a role='combobox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-controls attribute and an aria-expanded attribute.",
            metaText: "This element (role=combobox) must have all of the following attributes: aria-controls | aria-expanded",
            metaTextDetail: "This {{tag-name}} (role=combobox) must have all of the following attributes: aria-controls | aria-expanded",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]:not([aria-controls]), \n\t\t\t\t*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]:not([aria-expanded])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("1042", {
            bestPractice: 1626,
            testId: 1042,
            introduced: 2.2,
            mediaType: 1,
            description: "One or more elements that has a role=\u2018option\u2019 attribute, excluding option elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-selected attribute.",
            metaText: "This element (role=option) does not have an aria-selected attribute",
            metaTextDetail: "This {{tag-name}} (role=option) does not have an aria-selected attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="option"]:not(option)', '*[data-ae_vis][data-ae_avat][data-ae_ar="option"]:not(option):not([aria-selected])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("1043", {
            bestPractice: 1626,
            testId: 1043,
            introduced: 2.2,
            mediaType: 1,
            description: "One or more elements that has a role=\u2018radio\u2019 attribute, excluding input type='radio' elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
            metaText: "This element (role=radio) does not have an aria-checked attribute",
            metaTextDetail: "This {{tag-name}} (role=radio) does not have an aria-checked attribute",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]:not(input[type="radio"])', '*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]:not(input[type="radio"]):not([aria-checked])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("1066", {
            bestPractice: 1626,
            testId: 1066,
            introduced: 2.2,
            mediaType: 1,
            description: "One or more elements, not intentionally hidden in the DOM, has an attribute starting with \u2018aria-\u2019 that is not valid.",
            metaText: "This element has one or more aria attributes which are not valid.",
            metaTextDetail: "This {{tag-name}} has one or more aria attributes which are not valid.",
            fixType: "",
            testFunc: function() {
                const $testShell$$ = new $AutoTestShell$$("body *[data-ae_vis]");
                $testShell$$.set_candidateSetNodesFunc(function() {
                    const $notProper$$ = [],
                        $res$$ = [...$aeKernel$$.rootTestNode.querySelectorAll("body *[data-ae_vis]")].filter($tag$$ =>
                            0 < [...$tag$$.attributes].filter(({
                                name: $name$$
                            }) => $name$$.startsWith("aria-")).length);
                    for (let $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        const $result$$ = $res$$[$i$$];
                        0 < [...$result$$.attributes].filter($atr$$ => $atr$$.name.startsWith("aria-")).filter($atr$$ => !$testUtil_ariaAttributeLookupTable$$[$atr$$.name]).length && ($notProper$$[$notProper$$.length] = $result$$)
                    }
                    return $notProper$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("666", {
            bestPractice: 1584,
            testId: 666,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more Picker elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('select[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
                    'select[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("684", {
            bestPractice: 1584,
            testId: 684,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more Button elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('button[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'button[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("685", {
            bestPractice: 1584,
            testId: 685,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more SecureTextField elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="password"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="password"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("686", {
            bestPractice: 1584,
            testId: 686,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more SearchField elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="search"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="search"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("687", {
            bestPractice: 1584,
            testId: 687,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more Switch elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="radio"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="radio"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("688", {
            bestPractice: 1584,
            testId: 688,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more Alert, ScrollView, TextField, or TextView elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]',
                    '*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("689", {
            bestPractice: 1584,
            testId: 689,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more Slider elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="number"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="number"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("690", {
            bestPractice: 1584,
            testId: 690,
            introduced: 2.1,
            mediaType: 2,
            description: "One or more Image elements does not have an accessible label.",
            metaText: "This [[object]] element does not have an accessible label",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""])', 'img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("677", {
            bestPractice: 1963,
            testId: 677,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more Spinner elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('select[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'select[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("691", {
            bestPractice: 1963,
            testId: 691,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more EditText elements does not have hint or default text.",
            metaText: "This [[object]] element does not have hint or default text",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("692", {
            bestPractice: 1963,
            testId: 692,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more ImageButton elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="image"]',
                    'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="image"][aria-label=""]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("693", {
            bestPractice: 1973,
            testId: 693,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more CheckBox or ToggleButton elements is neither checked nor unchecked.",
            metaText: "This [[object]] element does not have a checked attribute set to one of the text values: 'true | false | mixed'.",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]',
                    '*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"]):not([aria-checked="mixed"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("694", {
            bestPractice: 1963,
            testId: 694,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more RadioGroup elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="radiogroup"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="radiogroup"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles",
            $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("695", {
            bestPractice: 1963,
            testId: 695,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more Button elements does not have text or a content description.",
            metaText: "This [[object]] element does not have text or a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('button[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'button[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("696", {
            bestPractice: 1963,
            testId: 696,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more VideoView elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('video[data-ae_vis][data-ae_avat][data-ae_ar="null"]', 'video[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("697", {
            bestPractice: 1973,
            testId: 697,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more RadioButton elements is neither checked nor unchecked.",
            metaText: "This [[object]] element does not have a checked attribute set to one of the text values: 'true | false | mixed'.",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="radio"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("698", {
            bestPractice: 1963,
            testId: 698,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more SearchView elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="search"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="search"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("699", {
            bestPractice: 1963,
            testId: 699,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more CheckBox elements does not have text or a content description.",
            metaText: "This [[object]] element does not have text or a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]',
                    '*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("700", {
            bestPractice: 1963,
            testId: 700,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more RadioButton elements does not have text or a content description.",
            metaText: "This [[object]] element does not have text or a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]', '*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("701", {
            bestPractice: 1963,
            testId: 701,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more DatePicker elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="date"]', 'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="date"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles",
            $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("702", {
            bestPractice: 1963,
            testId: 702,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more TimePicker elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="time"]',
                    'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="time"]:not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBefore_FromStyles", $getBefore_FromStyles$$);
        $aeKernel$$.addStage1MarkdownFunc("getAfter_FromStyles", $getAfter_FromStyles$$);
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements", $calcAccNamesForCertainElements$$);
        $aeKernel$$.addAutomaticTest("703", {
            bestPractice: 1963,
            testId: 703,
            introduced: 2.1,
            mediaType: 3,
            description: "One or more ImageView elements does not have a content description.",
            metaText: "This [[object]] element does not have a content description",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$('img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""])', 'img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an])')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("740", {
            bestPractice: 1962,
            testId: 740,
            introduced: 2.11,
            mediaType: 3,
            description: "One or more Button, CheckBox, DatePicker, EditText, ImageView, RadioButton, RadioGroup, SearchView, Switch, ToggleButton, TimePicker, or VideoView elements is not focusable.",
            metaText: "This [[object]] is not focusable. The element may not be accessible by assistive technology.",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("*[data-ae_vis][data-ae_avat]", '*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.Button"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.CheckBox"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.DatePicker"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.EditText"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.ImageView"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.RadioButton"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.RadioGroup"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.SearchView"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.Switch"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.ToggleButton"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.TimePicker"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.VideoView"][disabled]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("742", {
            bestPractice: 2615,
            testId: 742,
            introduced: 2.11,
            mediaType: 3,
            description: "One or more RadioButton elements is not an immediate child of a RadioGroup element.",
            metaText: "This [[object]] should be properly grouped within a RadioGroup element to establish a relationship between buttons and to the group container.",
            fixType: "",
            testFunc: function() {
                var $testShell$$ = new $AutoTestShell$$('div[data-xmlnodetype="android.widget.RadioButton"][data-ae_vis][data-ae_avat]');
                $testShell$$.set_candidateSetNodesFunc(function() {
                    for (var $bad$$ = [], $res$$ = $aeKernel$$.rootTestNode.querySelectorAll('div[data-xmlnodetype="android.widget.RadioButton"][data-ae_vis][data-ae_avat]'), $i$$ = 0, $len_res$$ = $res$$.length; $i$$ < $len_res$$; $i$$++) {
                        var $result$$ = $res$$[$i$$];
                        "android.widget.RadioGroup" != $result$$.parentNode.getAttribute("data-xmlnodetype") && $bad$$.push($result$$)
                    }
                    return $bad$$
                });
                return $testShell$$
            }
        })
    })();
    (function() {
        $aeKernel$$.addAutomaticTest("788", {
            bestPractice: 3112,
            testId: 788,
            introduced: 2.13,
            mediaType: 3,
            description: "This application is locked from changing its orientation.",
            metaText: "This application is locked from changing its orientation",
            fixType: "",
            testFunc: function() {
                return new $AutoTestShell$$("meta[http-equiv='ScreenOrientation']", "meta[http-equiv='ScreenOrientation'][content='autoRotate:disabled']")
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage1MarkdownFunc("getBackgroundImage_FromStyles", $getBackgroundImage_FromStyles$$);
        $aeKernel$$.addStage5MarkdownFunc("setBackgroundImage",
            $setBackgroundImage$$);
        $aeKernel$$.addPreviewMode("previewMode_backgroundImages", {
            bestPractice: 0,
            testId: "previewMode_backgroundImages",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_bckimg="true"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addPreviewMode("previewMode_elsWithLangAttribs", {
            bestPractice: 0,
            testId: "previewMode_elsWithLangAttribs",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll("*[data-ae_vis][data-ae_avat][lang]")
            }
        })
    })();
    (function() {
        $aeKernel$$.addPreviewMode("previewMode_headings", {
            bestPractice: 0,
            testId: "previewMode_headings",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('h1[data-ae_vis][data-ae_avat][data-ae_ar="null"], h2[data-ae_vis][data-ae_avat][data-ae_ar="null"], h3[data-ae_vis][data-ae_avat][data-ae_ar="null"], h4[data-ae_vis][data-ae_avat][data-ae_ar="null"], h5[data-ae_vis][data-ae_avat][data-ae_ar="null"], h6[data-ae_vis][data-ae_avat][data-ae_ar="null"], *[data-ae_vis][data-ae_avat][data-ae_ar="heading"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage4MarkdownFunc("calcAccNamesForCertainElements",
            $calcAccNamesForCertainElements$$);
        $aeKernel$$.addPreviewMode("previewMode_iframes", {
            bestPractice: 0,
            testId: "previewMode_iframes",
            collectMetaDataFunc: function($instance$$) {
                return {
                    accNameMechanism: null,
                    accNameValue: $instance$$.getAttribute("data-ae_an")
                }
            },
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('iframe[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addPreviewMode("previewMode_images", {
            bestPractice: 0,
            testId: "previewMode_images",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('img[data-ae_vis], *[data-ae_vis][data-ae_ar="img"], input[type="image"][data-ae_vis], svg[data-ae_vis]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addPreviewMode("previewMode_lists", {
            bestPractice: 0,
            testId: "previewMode_lists",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('ul[data-ae_vis][data-ae_avat][data-ae_ar="null"], ol[data-ae_vis][data-ae_avat][data-ae_ar="null"], dl[data-ae_vis][data-ae_avat][data-ae_ar="null"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addPreviewMode("previewMode_tableCells", {
            bestPractice: 0,
            testId: "previewMode_tableData",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('td[data-ae_vis][data-ae_avat][data-ae_ar="null"], *[data-ae_vis][data-ae_avat][data-ae_ar="cell"], *[data-ae_vis][data-ae_avat][data-ae_ar="gridcell"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addPreviewMode("previewMode_tableHeadings", {
            bestPractice: 0,
            testId: "previewMode_tableHeadings",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('th[data-ae_vis][data-ae_avat][data-ae_ar="null"], *[data-ae_vis][data-ae_avat][data-ae_ar="rowheader"], *[data-ae_vis][data-ae_avat][data-ae_ar="columnheader"], *[data-ae_vis][data-ae_avat][data-ae_ar="grid"]')
            }
        })
    })();
    (function() {
        $aeKernel$$.addStage4MarkdownFunc("identifiesDataTables", $identifiesDataTables$$);
        $aeKernel$$.addPreviewMode("previewMode_tables", {
            bestPractice: 0,
            testId: "previewMode_tables",
            testFunc: function() {
                return $aeKernel$$.rootTestNode.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"], *[data-ae_vis][data-ae_avat][data-ae_ar="grid"][data-ae_dtab="true"], *[data-ae_vis][data-ae_avat][data-ae_ar="table"][data-ae_dtab="true"]')
            }
        })
    })();
    $exports$$.ACCEPTED_LANGUAGE_SUBTAGS =
        $ACCEPTED_LANGUAGE_SUBTAGS$$;
    $exports$$.analytics_runAllTests_returnInstances_JSON = function($testTypeArray$$ = [$testTypes$$.AUTOMATIC]) {
        $aeKernel$$.updateSuccess(null);
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = [];
        if ($aeKernel$$.captureDOM())
            for (var $k$$ = $testTypeArray$$.length; $k$$--;) {
                let $testType$$ = $testTypeArray$$[$k$$];
                var $tests$$ = $aeKernel$$.getTestsToRun($testType$$);
                for (var $keys$$ = Object.keys($tests$$), $i$$ = 0, $len_keys$$ = $keys$$.length; $i$$ <
                    $len_keys$$; $i$$++) {
                    var $key$$ = $keys$$[$i$$],
                        $test$$ = $tests$$[$key$$];
                    if (1 == $test$$.mediaType) try {
                        var $testFunc$$ = $test$$.testFunc();
                        $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                        var $testRes$$ = $testFunc$$.getResult("instances");
                        if ("fail" === $testRes$$.outcome)
                            for (var $instances$$ = $testRes$$.instances, $j$$ = 0, $len_instances$$ = $instances$$.length; $j$$ < $len_instances$$; $j$$++) {
                                var $outcome$$ = $formatOutcomeForAnalytics$$($instances$$[$j$$], $test$$, $testType$$);
                                $outcomes$$.push($outcome$$)
                            }
                    } catch ($err$$) {
                        $logger$$.error($err$$),
                            $aeKernel$$.tests_failedToRun[$key$$] = $err$$
                    }
                }
            }
        $aeKernel$$.updateSuccess();
        return $resultsAsJSON$$.stringify($outcomes$$)
    };
    $exports$$.analytics_runAllTests_returnInstances_JSON_timer = function($callback$$) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        $exports$$.test_analytics_outcomes = [];
        var $testType$$ = $testTypes$$.AUTOMATIC;
        $timer_api_shell$$($testType$$, function($test$$) {
            if (1 == $test$$.mediaType) {
                var $testId$$ = $test$$.testId;
                try {
                    var $j$jscomp$37_testFunc$$ = $test$$.testFunc();
                    $j$jscomp$37_testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    var $testRes$$ = $j$jscomp$37_testFunc$$.getResult("instances");
                    if ($testRes$$.instances) {
                        var $instances$$ = $testRes$$.instances;
                        $j$jscomp$37_testFunc$$ = 0;
                        for (var $len_instances$$ = $instances$$.length; $j$jscomp$37_testFunc$$ < $len_instances$$; $j$jscomp$37_testFunc$$++) try {
                            var $outcome$$ = $formatOutcomeForAnalytics$$($instances$$[$j$jscomp$37_testFunc$$], $test$$, $testType$$);
                            $exports$$.test_analytics_outcomes.push($outcome$$)
                        } catch ($err$$) {
                            $logger$$.error($err$$)
                        }
                    }
                } catch ($err$$) {
                    $aeKernel$$.tests_failedToRun[$testId$$] =
                        $err$$
                }
            }
        }, $callback$$)
    };
    $exports$$.ast_nodeCapture_cleanup = function() {
        $stage3_cleanUpLiveDOM$$(window.document)
    };
    $exports$$.ast_nodeCapture_markdown = function() {
        $stage0_markDown_liveDOM_domuels$$(window.document)
    };
    $exports$$.ast_runAllTests_returnInstances_JSON = function($testTypeArray$$ = [$testTypes$$.AUTOMATIC, $testTypes$$.GUIDED_AUTOMATIC]) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = [];
        if ($aeKernel$$.captureDOM())
            for (var $tests$$, $k$$ = $testTypeArray$$.length; $k$$--;) {
                let $testType$$ =
                    $testTypeArray$$[$k$$];
                $tests$$ = $aeKernel$$.getTestsToRun($testType$$);
                for (var $keys$$ = Object.keys($tests$$), $i$$ = 0, $len_keys$$ = $keys$$.length; $i$$ < $len_keys$$; $i$$++) {
                    var $key$$ = $keys$$[$i$$],
                        $test$$ = $tests$$[$key$$];
                    if (1 == $test$$.mediaType) try {
                        var $testFunc$$ = $test$$.testFunc();
                        $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                        var $testRes$$ = $testFunc$$.getResult("instances");
                        if ("fail" === $testRes$$.outcome)
                            for (var $instances$$ = $testRes$$.instances, $j$$ = 0, $len_instances$$ = $instances$$.length; $j$$ <
                                $len_instances$$; $j$$++) try {
                                var $outcome$$ = $formatOutcomeForToolbar$$($instances$$[$j$$], $test$$, $testType$$);
                                $outcomes$$.push($outcome$$)
                            } catch ($err$$) {
                                $logger$$.error($err$$)
                            }
                    } catch ($err$$) {
                        $aeKernel$$.tests_failedToRun[$key$$] = $err$$
                    }
                }
            }
        return $resultsAsJSON$$.stringify($outcomes$$)
    };
    $exports$$.ast_runPreviewMode_returnInstances_JSON = function($testId$$, $testType$$ = $testTypes$$.PREVIEW_MODE) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = [];
        if ($aeKernel$$.captureDOM()) try {
            for (var $test$$ =
                    $aeKernel$$.getTestToRun($testId$$), $instances$$ = $test$$.testFunc(), $j$$ = 0, $len_instances$$ = $instances$$.length; $j$$ < $len_instances$$; $j$$++) {
                var $outcome$$ = $formatOutcomeForToolbar$$($instances$$[$j$$], $test$$, $testType$$);
                $outcomes$$.push($outcome$$)
            }
        } catch ($err$$) {
            $logger$$.error("Error", $err$$), $aeKernel$$.tests_failedToRun[$testId$$] = $err$$
        }
        return JSON.stringify($outcomes$$)
    };
    $exports$$.getDidMarkdownStageExecutionTimeOut = function() {
        return $didMarkdownStageExecutionTimeOut$$
    };
    $exports$$.getMarkdownFuncs_failedToRun =
        function() {
            return $aeKernel$$.markdownFuncs_failedToRun
        };
    $exports$$.getMarkdownStageExecutionTimeout = function() {
        return $markdownStageExecutionTimeout$$
    };
    $exports$$.getRootTestNode = function() {
        return $aeKernel$$.rootTestNode
    };
    $exports$$.getSuccess = function() {
        return $success$$
    };
    $exports$$.getTestInfo = function($columns$$) {
        "undefined" === typeof $columns$$ && ($columns$$ = {});
        if (null == $columns$$.testType) {
            $columns$$.testType = [];
            for (var $i$$ in $testTypes$$) - 2 < $testTypes$$[$i$$] && $columns$$.testType.push($testTypes$$[$i$$])
        }
        null ==
            $columns$$.columns && ($columns$$.columns = "bestPractice metaText testType description fixType mediaType introduced".split(" "));
        for (var $results$$ = {}, $k$$ = 0; $k$$ < $columns$$.testType.length; $k$$++) {
            var $testType$$ = $columns$$.testType[$k$$],
                $tests$$ = $aeKernel$$.getTestsToRun($testType$$);
            for ($i$$ in $tests$$) {
                for (var $row$$ = {}, $j$$ = 0; $j$$ < $columns$$.columns.length; $j$$++) "testType" == $columns$$.columns[$j$$] ? $row$$.testType = $testType$$ : $row$$[$columns$$.columns[$j$$]] = $tests$$[$i$$][$columns$$.columns[$j$$]];
                $results$$[$tests$$[$i$$].testId] = $row$$
            }
        }
        return $results$$
    };
    $exports$$.getTests_failedToRun = function() {
        return $aeKernel$$.tests_failedToRun
    };
    $exports$$.getVersion = function() {
        return $aeKernel$$.version
    };
    $exports$$.runAllTests_returnFailedNumbers = function($testType$jscomp$4_tests$$ = $testTypes$$.AUTOMATIC) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = {};
        if ($aeKernel$$.captureDOM()) {
            $testType$jscomp$4_tests$$ = $aeKernel$$.getTestsToRun($testType$jscomp$4_tests$$);
            for (var $keys$$ = Object.keys($testType$jscomp$4_tests$$), $i$$ = 0, $len_keys$$ = $keys$$.length; $i$$ < $len_keys$$; $i$$++) {
                var $key$$ = $keys$$[$i$$],
                    $test$$ = $testType$jscomp$4_tests$$[$key$$];
                if (1 == $test$$.mediaType) try {
                    var $testFunc$$ = $test$$.testFunc();
                    $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    var $testRes$$ = $testFunc$$.getResult("numbers");
                    "fail" === $testRes$$.outcome && ($outcomes$$[$key$$] = $testRes$$.numberOfIssues)
                } catch ($err$$) {
                    $aeKernel$$.tests_failedToRun[$key$$] = $err$$
                }
            }
        }
        return $outcomes$$
    };
    $exports$$.runAllTests_returnFailedNumbers_timers = function($testType$$ = $testTypes$$.AUTOMATIC, $callback$$) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        $exports$$.test_outcomes = {};
        $timer_api_shell$$($testType$$, function($test$$) {
            if (1 == $test$$.mediaType) {
                var $testId$$ = $test$$.testId;
                try {
                    var $testFunc$$ = $test$$.testFunc();
                    $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    var $testRes$$ = $testFunc$$.getResult("numbers");
                    "fail" === $testRes$$.outcome && ($exports$$.test_outcomes[$testId$$] =
                        $testRes$$.numberOfIssues)
                } catch ($err$$) {
                    $aeKernel$$.tests_failedToRun[$testId$$] = $err$$
                }
            }
        }, $callback$$)
    };
    $exports$$.runAllTests_returnFailedTests = function($testType$jscomp$3_tests$$ = $testTypes$$.AUTOMATIC) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = [];
        if ($aeKernel$$.captureDOM()) {
            $testType$jscomp$3_tests$$ = $aeKernel$$.getTestsToRun($testType$jscomp$3_tests$$);
            for (var $keys$$ = Object.keys($testType$jscomp$3_tests$$), $i$$ = 0, $len_keys$$ = $keys$$.length; $i$$ <
                $len_keys$$; $i$$++) {
                var $key$$ = $keys$$[$i$$],
                    $test$$ = $testType$jscomp$3_tests$$[$key$$];
                if (1 == $test$$.mediaType) try {
                    var $testFunc$$ = $test$$.testFunc();
                    $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    "fail" === $testFunc$$.getResult("instances").outcome && ($outcomes$$[$outcomes$$.length] = $key$$)
                } catch ($err$$) {
                    $logger$$.error("Error", $err$$), $aeKernel$$.tests_failedToRun[$key$$] = $err$$
                }
            }
        }
        return $outcomes$$
    };
    $exports$$.runAllTests_returnInstances = function($testType$jscomp$2_tests$$ = $testTypes$$.AUTOMATIC) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = {};
        if ($aeKernel$$.captureDOM()) {
            $testType$jscomp$2_tests$$ = $aeKernel$$.getTestsToRun($testType$jscomp$2_tests$$);
            for (var $keys$$ = Object.keys($testType$jscomp$2_tests$$), $i$$ = 0, $len_keys$$ = $keys$$.length; $i$$ < $len_keys$$; $i$$++) {
                var $outcome$$ = [],
                    $key$$ = $keys$$[$i$$],
                    $test$$ = $testType$jscomp$2_tests$$[$key$$];
                if (1 == $test$$.mediaType) try {
                    var $testFunc$$ = $test$$.testFunc();
                    $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    var $testRes$$ = $testFunc$$.getResult("instances");
                    "fail" === $testRes$$.outcome && ($outcome$$[0] = $test$$.testId, $outcome$$[1] = $testRes$$.instances, $outcomes$$[$key$$] = $outcome$$)
                } catch ($err$$) {
                    $logger$$.error("Error", $err$$), $aeKernel$$.tests_failedToRun[$key$$] = $err$$
                }
            }
        }
        return $outcomes$$
    };
    $exports$$.runAllTests_returnInstances_JSON = function($testType$$ = $testTypes$$.AUTOMATIC) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = [];
        if ($aeKernel$$.captureDOM())
            for (var $tests$$ = $aeKernel$$.getTestsToRun($testType$$),
                    $keys$$ = Object.keys($tests$$), $i$$ = 0, $len_keys$$ = $keys$$.length; $i$$ < $len_keys$$; $i$$++) {
                var $key$$ = $keys$$[$i$$],
                    $test$$ = $tests$$[$key$$];
                if (1 == $test$$.mediaType) try {
                    var $testFunc$$ = $test$$.testFunc();
                    $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    var $testRes$$ = $testFunc$$.getResult("instances");
                    if ("fail" === $testRes$$.outcome)
                        for (var $instances$$ = $testRes$$.instances, $j$$ = 0, $len_instances$$ = $instances$$.length; $j$$ < $len_instances$$; $j$$++) {
                            var $outcome$$ = $formatOutcomeForToolbar$$($instances$$[$j$$],
                                $test$$, $testType$$);
                            $outcomes$$.push($outcome$$)
                        }
                } catch ($err$$) {
                    $aeKernel$$.tests_failedToRun[$key$$] = $err$$, $logger$$.error("Error", $err$$)
                }
            }
        return $resultsAsJSON$$.stringify($outcomes$$)
    };
    $exports$$.runAllTests_returnInstances_JSON_NodeCapture = function($cssSelectorForCapturedNode_j$jscomp$33_node$$, $testType$$ = $testTypes$$.AUTOMATIC) {
        $testType$$ = $testType$$ || $testTypes$$.AUTOMATIC;
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $outcomes$$ = [];
        if ($aeKernel$$.captureDOM()) {
            $cssSelectorForCapturedNode_j$jscomp$33_node$$ =
                '[data-ae_uel="' + $uelAccurate_FromRoot$$($cssSelectorForCapturedNode_j$jscomp$33_node$$).replace(/"/g, '\\"') + '"]';
            var $capturedNode_tests$$ = $aeKernel$$.rootTestNode.querySelector($cssSelectorForCapturedNode_j$jscomp$33_node$$),
                $keys$$ = $getParent$$($capturedNode_tests$$),
                $children$jscomp$3_i$$ = $keys$$.children;
            for ($cssSelectorForCapturedNode_j$jscomp$33_node$$ = $children$jscomp$3_i$$.length; $cssSelectorForCapturedNode_j$jscomp$33_node$$--;) $children$jscomp$3_i$$[$cssSelectorForCapturedNode_j$jscomp$33_node$$] !==
                $capturedNode_tests$$ && $keys$$.removeChild($children$jscomp$3_i$$[$cssSelectorForCapturedNode_j$jscomp$33_node$$]);
            $aeKernel$$.rootTestNode = $keys$$;
            $capturedNode_tests$$ = $aeKernel$$.getTestsToRun($testType$$);
            $keys$$ = Object.keys($capturedNode_tests$$);
            $children$jscomp$3_i$$ = 0;
            for (var $len_keys$$ = $keys$$.length; $children$jscomp$3_i$$ < $len_keys$$; $children$jscomp$3_i$$++) {
                var $key$$ = $keys$$[$children$jscomp$3_i$$],
                    $test$$ = $capturedNode_tests$$[$key$$];
                if (1 == $test$$.mediaType) try {
                    var $testFunc$$ = $test$$.testFunc();
                    $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    var $testRes$$ = $testFunc$$.getResult("instances");
                    if ("fail" === $testRes$$.outcome) {
                        var $instances$$ = $testRes$$.instances;
                        $cssSelectorForCapturedNode_j$jscomp$33_node$$ = 0;
                        for (var $len_instances$$ = $instances$$.length; $cssSelectorForCapturedNode_j$jscomp$33_node$$ < $len_instances$$; $cssSelectorForCapturedNode_j$jscomp$33_node$$++) {
                            var $outcome$$ = $formatOutcomeForToolbar$$($instances$$[$cssSelectorForCapturedNode_j$jscomp$33_node$$], $test$$, $testType$$);
                            $outcomes$$.push($outcome$$)
                        }
                    }
                } catch ($err$$) {
                    $aeKernel$$.tests_failedToRun[$key$$] = $err$$
                }
            }
        }
        return $resultsAsJSON$$.stringify($outcomes$$)
    };
    $exports$$.runAllTests_returnInstances_timers = function($testType$$ = $testTypes$$.AUTOMATIC, $callback$$) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        $exports$$.test_outcomes = {};
        $timer_api_shell$$($testType$$, function($test$$) {
            if (1 == $test$$.mediaType) {
                var $outcome$$ = [],
                    $testId$$ = $test$$.testId;
                try {
                    var $testFunc$$ = $test$$.testFunc();
                    $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                    var $testRes$$ = $testFunc$$.getResult("instances");
                    if ("fail" === $testRes$$.outcome) {
                        var $len$$ = $outcome$$.length;
                        $outcome$$[$len$$] = $testId$$;
                        $outcome$$[$len$$ + 1] = $testRes$$.instances;
                        $exports$$.test_outcomes[$testId$$] = $outcome$$
                    }
                } catch ($err$$) {
                    $aeKernel$$.tests_failedToRun[$testId$$] = $err$$
                }
            }
        }, $callback$$)
    };
    $exports$$.runTest_returnInstances = function($testId$$) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $result$$ = ["failed to run"];
        if ($aeKernel$$.captureDOM()) try {
            var $outcome$$ = null,
                $testFunc$$ = $aeKernel$$.getTestToRun($testId$$).testFunc();
            $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
            var $testRes$$ = $testFunc$$.getResult("instances");
            "fail" === $testRes$$.outcome && ($outcome$$ = $testRes$$);
            $result$$ = $outcome$$
        } catch ($err$$) {
            $logger$$.error("Error", $err$$), $aeKernel$$.tests_failedToRun[$testId$$] = $err$$
        }
        return $result$$
    };
    $exports$$.runTest_returnNumbers = function($testId$$) {
        $aeKernel$$.markdownFuncs_failedToRun = {};
        $aeKernel$$.tests_failedToRun = {};
        var $result$$ = "failed to run";
        if ($aeKernel$$.captureDOM()) try {
            var $outcome$$ = [],
                $testFunc$$ = $aeKernel$$.getTestToRun($testId$$).testFunc();
            $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
            var $testRes$$ = $testFunc$$.getResult("numbers");
            "fail" === $testRes$$.outcome && ($outcome$$[0] = $testId$$, $outcome$$[1] = $testRes$$.numberOfIssues);
            $result$$ = $outcome$$.toString()
        } catch ($err$$) {
            $aeKernel$$.tests_failedToRun[$testId$$] = $err$$
        }
        return $result$$
    };
    $exports$$.runTest_returnOutcome =
        function($testId$$) {
            $aeKernel$$.markdownFuncs_failedToRun = {};
            $aeKernel$$.tests_failedToRun = {};
            var $result$$ = "failed to run";
            if ($aeKernel$$.captureDOM()) try {
                var $testFunc$$ = $aeKernel$$.getTestToRun($testId$$).testFunc();
                $testFunc$$.rootTestNode = $aeKernel$$.rootTestNode;
                $result$$ = $testFunc$$.getResult().outcome
            } catch ($err$$) {
                $logger$$.error("Error", $err$$), $aeKernel$$.tests_failedToRun[$testId$$] = $err$$
            }
            return $result$$
        };
    $exports$$.setMarkdownStageExecutionTimeout = function($newMarkdownStageExecutionTimeout$$) {
        $markdownStageExecutionTimeout$$ =
            $newMarkdownStageExecutionTimeout$$
    };
    $exports$$.setWindowUnderTest = function($testWind$$) {
        $aeKernel$$.setWindowUnderTest($testWind$$)
    };
    $exports$$.testTypes = $testTypes$$;
    $exports$$.test_stages = function($i$$) {
        function $stage0_capture_proxy$$() {
            return $aeKernel$$.stage0_capture()
        }

        function $stage1_capture_proxy$$() {
            return $aeKernel$$.stage1_capture()
        }

        function $stage2_capture_proxy$$() {
            return $aeKernel$$.stage2_capture()
        }

        function $stage3a_capture_proxy$$() {
            return $aeKernel$$.stage3a_capture()
        }

        function $stage3c_capture_proxy$$() {
            return $aeKernel$$.stage3c_capture()
        }

        function $stage3d_capture_proxy$$() {
            return $aeKernel$$.stage3d_capture()
        }

        function $stage3_capture_proxy$$() {
            return $aeKernel$$.stage3_capture()
        }

        function $stage4_capture_proxy$$() {
            return $aeKernel$$.stage4_capture()
        }

        function $stage5_capture_proxy$$() {
            return $aeKernel$$.stage5_capture()
        }

        function $stage6_capture_proxy$$() {
            return $aeKernel$$.stage6_capture()
        }
        $aeKernel$$.markdownFuncs_failedToRun = [];
        $aeKernel$$.tests_failedToRun = [];
        $aeKernel$$.updateSuccess(null);
        const $tasks$$ = [];
        switch ($i$$) {
            case "stage0":
                $tasks$$.push($stage0_capture_proxy$$);
                break;
            case "stage1":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$);
                break;
            case "stage2":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$, $stage2_capture_proxy$$);
                break;
            case "stage3a":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$, $stage2_capture_proxy$$, $stage3a_capture_proxy$$);
                break;
            case "stage3c":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$, $stage2_capture_proxy$$, $stage3a_capture_proxy$$, $stage3c_capture_proxy$$);
                break;
            case "stage3d":
                $tasks$$.push($stage0_capture_proxy$$,
                    $stage1_capture_proxy$$, $stage2_capture_proxy$$, $stage3a_capture_proxy$$, $stage3c_capture_proxy$$, $stage3d_capture_proxy$$);
                break;
            case "stage3":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$, $stage2_capture_proxy$$, $stage3a_capture_proxy$$, $stage3c_capture_proxy$$, $stage3d_capture_proxy$$, $stage3_capture_proxy$$);
                break;
            case "stage4":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$, $stage2_capture_proxy$$, $stage3a_capture_proxy$$, $stage3c_capture_proxy$$, $stage3d_capture_proxy$$,
                    $stage3_capture_proxy$$, $stage4_capture_proxy$$);
                break;
            case "stage5":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$, $stage2_capture_proxy$$, $stage3a_capture_proxy$$, $stage3c_capture_proxy$$, $stage3d_capture_proxy$$, $stage3_capture_proxy$$, $stage4_capture_proxy$$, $stage5_capture_proxy$$);
                break;
            case "stage6":
                $tasks$$.push($stage0_capture_proxy$$, $stage1_capture_proxy$$, $stage2_capture_proxy$$, $stage3a_capture_proxy$$, $stage3c_capture_proxy$$, $stage3d_capture_proxy$$, $stage3_capture_proxy$$,
                    $stage4_capture_proxy$$, $stage5_capture_proxy$$, $stage6_capture_proxy$$)
        }
        try {
            for ($i$$ = 0; $i$$ < $tasks$$.length; $i$$++)
                if (!(0, $tasks$$[$i$$])()) return null
        } finally {
            $aeKernel$$.isLiveDOMMarkedUp && $stage3_capture_proxy$$()
        }
        $aeKernel$$.updateSuccess();
        return $aeKernel$$.rootTestNode
    };
    $exports$$.uelAccurate_FromRoot = $uelAccurate_FromRoot$$;
    Object.defineProperty($exports$$, "__esModule", {
        value: !0
    });
    return $exports$$
}({});
var LevelAccess_AccessJS_FixPackage = function(a) {
    a.fixPackage = [];
    return a
}({});
var LevelAccess_AccessJS_OrgDetails = function(a) {
    a.accessJSKey = "YW1wMTI3ODA";
    a.orgId = "12780";
    return a
}({});
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var e = 0;
    return function() {
        return e < a.length ? {
            done: !1,
            value: a[e++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, e, b) {
    a != Array.prototype && a != Object.prototype && (a[e] = b.value)
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.SymbolClass = function(a, e) {
    this.$jscomp$symbol$id_ = a;
    $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: e
    })
};
$jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_
};
$jscomp.Symbol = function() {
    function a(b) {
        if (this instanceof a) throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (b || "") + "_" + e++, b)
    }
    var e = 0;
    return a
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.asyncIterator;
    a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {}
};
$jscomp.iteratorPrototype = function(a) {
    $jscomp.initSymbolIterator();
    a = {
        next: a
    };
    a[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return a
};
$jscomp.iteratorFromArray = function(a, e) {
    $jscomp.initSymbolIterator();
    a instanceof String && (a += "");
    var b = 0,
        g = {
            next: function() {
                if (b < a.length) {
                    var k = b++;
                    return {
                        value: e(k, a[k]),
                        done: !1
                    }
                }
                g.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return g.next()
            }
        };
    g[Symbol.iterator] = function() {
        return g
    };
    return g
};
$jscomp.polyfill = function(a, e, b, g) {
    if (e) {
        b = $jscomp.global;
        a = a.split(".");
        for (g = 0; g < a.length - 1; g++) {
            var k = a[g];
            k in b || (b[k] = {});
            b = b[k]
        }
        a = a[a.length - 1];
        g = b[a];
        e = e(g);
        e != g && null != e && $jscomp.defineProperty(b, a, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
};
$jscomp.polyfill("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return $jscomp.iteratorFromArray(this, function(a) {
            return a
        })
    }
}, "es6", "es3");
$jscomp.polyfill("Object.is", function(a) {
    return a ? a : function(a, b) {
        return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b
    }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function(a) {
    return a ? a : function(a, b) {
        var e = this;
        e instanceof String && (e = String(e));
        var k = e.length;
        b = b || 0;
        for (0 > b && (b = Math.max(b + k, 0)); b < k; b++) {
            var l = e[b];
            if (l === a || Object.is(l, a)) return !0
        }
        return !1
    }
}, "es7", "es3");
$jscomp.checkStringArgs = function(a, e, b) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + b + " must not be null or undefined");
    if (e instanceof RegExp) throw new TypeError("First argument to String.prototype." + b + " must not be a regular expression");
    return a + ""
};
$jscomp.polyfill("String.prototype.includes", function(a) {
    return a ? a : function(a, b) {
        return -1 !== $jscomp.checkStringArgs(this, a, "includes").indexOf(a, b || 0)
    }
}, "es6", "es3");
$jscomp.polyfill("Array.from", function(a) {
    return a ? a : function(a, b, g) {
        b = null != b ? b : function(a) {
            return a
        };
        var e = [],
            l = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if ("function" == typeof l) {
            a = l.call(a);
            for (var n = 0; !(l = a.next()).done;) e.push(b.call(g, l.value, n++))
        } else
            for (l = a.length, n = 0; n < l; n++) e.push(b.call(g, a[n], n));
        return e
    }
}, "es6", "es3");
var LevelAccess_AccessJS = function(a) {
    function e(a, m) {
        function d(a) {
            for (var d = 0, c = 0; c < a.length; c++) d += a[c] * a[c];
            return Math.sqrt(d)
        }
        return function(a, c) {
            for (var f, m = f = 0; m < a.length; m++) f += a[m] * c[m];
            a = d(a) * d(c);
            return 0 === f && 0 === a ? 1 : f / a
        }(a, m)
    }

    function b(a, m, c) {
        var d = c.encoding;
        if (a.attributes.length === parseInt(c.attNo, 10)) {
            var f = a.innerHTML;
            if ("" === f) {
                var h = [];
                for (f = 38; f--;) h.push(0)
            } else {
                h = {
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0,
                    e: 0,
                    f: 0,
                    g: 0,
                    h: 0,
                    i: 0,
                    j: 0,
                    k: 0,
                    l: 0,
                    m: 0,
                    n: 0,
                    o: 0,
                    p: 0,
                    q: 0,
                    r: 0,
                    s: 0,
                    t: 0,
                    u: 0,
                    v: 0,
                    w: 0,
                    x: 0,
                    y: 0,
                    z: 0,
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    "<": 0,
                    ">": 0
                };
                f = f.toLowerCase().split("");
                for (var b = 0, g = f.length; b < g; b++) {
                    var p = f[b];
                    try {
                        "undefined" !== typeof h[p] && (h[p] += b + 1)
                    } catch (L) {}
                }
                f = Object.keys(h);
                b = 0;
                for (g = f.length; g--;) b += h[f[g]];
                g = [];
                for (p = f.length; p--;) g[p] = parseInt((h[f[p]] / b * 100).toFixed(0), 10);
                h = g
            }
            if (.99 < e(h, d)) I[m](a, c)
        }
    }

    function g(a) {
        var d = a[0];
        a = a[1];
        try {
            var c = a.url,
                y = a.fixType;
            "undefined" !== typeof c ? window.location.href === c && b(d, y, a) : b(d, y, a)
        } catch (f) {
            z[a.id] = !0, u = !1
        }
    }

    function k(a, m) {
        function c() {
            if (0 <
                f) {
                for (; f;) g(a[t--]), f--;
                setTimeout(c, 25)
            }
            if (0 === f && 0 < b) {
                for (var d = 0; 16 > d; d++) g(a[t--]);
                b--;
                0 < b ? setTimeout(c, 25) : m()
            }
        }
        u = !0;
        var d = a.length,
            f = d % 16,
            b = Math.floor(d / 16),
            t = d - 1;
        if (0 === d) m();
        else if (0 < f && 0 === b) {
            for (; f;) g(a[t--]), f--;
            m()
        } else setTimeout(c, 25)
    }

    function l(a) {
        try {
            var d = window.getComputedStyle(a),
                c = d.getPropertyValue("--levelaccess-fixid").trim();
            if ("" === c)
                if (d.hasOwnProperty("levelaccess-fixid")) c = d["levelaccess-fixid"].trim();
                else return null;
            c = parseInt(c, 10);
            var b = r[c];
            return "undefined" ===
                typeof b ? null : b
        } catch (f) {
            return null
        }
    }

    function n(a) {
        for (var d = [], c = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, function(a) {
                return -1 !== v.indexOf(a.tagName) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, !1), b; b = c.nextNode();) {
            var f = l(b);
            f && d.push([b, f])
        }
        k(d, a.bind(this, function() {
            if (window.MutationObserver) {
                var a = [],
                    d = function(d) {
                        var c = l(d);
                        c && a.push([d, c])
                    };
                (new MutationObserver(function(a) {
                    a.forEach(function(a) {
                        a.addedNodes ? Array.prototype.forEach.call(a.addedNodes, function(a) {
                                d(a)
                            }) :
                            !a.target || "attributes" === a.type && a.attributeName && node.getAttribute(a.attributeName) === a.oldValue || d(a.target)
                    })
                })).observe(document, {
                    attributes: !0,
                    attributeOldValue: !0,
                    childList: !0,
                    subtree: !0
                });
                var c = function() {
                    if (0 < a.length) {
                        var d = a.slice(0);
                        a.length = 0;
                        k(d, function() {
                            setTimeout(c, 1E3)
                        })
                    } else setTimeout(c, 1E3)
                };
                c()
            }
        }))
    }

    function G(a) {
        if (null !== LevelAccess_AccessJS_FixPackage && (null === r && (r = LevelAccess_AccessJS_FixPackage.fixPackage), null === v)) {
            var d = document.createElement("style");
            d.setAttribute("type",
                "text/css");
            d.appendChild(document.createTextNode(""));
            document.head.appendChild(d);
            for (var c = "", b = [], f = 0; f < r.length; f++) {
                var h = r[f].css,
                    e = h.indexOf("[");
                e = h.substring(0, e).toUpperCase(); - 1 === b.indexOf(e) && b.push(e);
                c += h + ("{levelaccess-fixid:" + f + ";--levelaccess-fixid:" + f + ";}")
            }
            d.innerHTML = c;
            v = b
        }
        setTimeout(n.bind(this, a), 25)
    }

    function A(a) {
        var d = [];
        a = Object.keys(a);
        for (var c = a.length; c--;) d.push({
            "function": a[c],
            error: ""
        });
        return d
    }

    function B(a) {
        var d = Array.from(w.tests || []);
        if (w.assets) {
            var c = w.assets[window.location.hostname];
            c && (c.inc && 0 < c.inc.length && (d = d.concat(c.inc)), c.exc && 0 < c.exc.length && (d = d.filter(function(a) {
                return -1 === c.exc.indexOf(a)
            })))
        }
        return a.filter(function(a) {
            return 0 <= d.indexOf(a.t)
        })
    }

    function C() {
        var a = {};
        var b = [];
        if (LevelAccess_AccessJS_AccessEngine && LevelAccess_AccessJS_AccessEngine.getRootTestNode()) {
            var c;
            for (c = q.length; c--;) {
                var e = q[c][0],
                    f = q[c][1],
                    h = f.testId;
                try {
                    var g = D[h.toString()].bestPractice
                } catch (H) {
                    g = 0
                }
                f = {
                    t: h,
                    b: g,
                    css: f.css,
                    attNo: f.attNo,
                    encoding: f.encoding,
                    version: f.version,
                    r: 0,
                    fixStatus: 1,
                    fixed: f.id
                };
                f.uel = "152" === String(h) ? "head" : LevelAccess_AccessJS_AccessEngine.uelAccurate_FromRoot(e);
                e = f; - 1 === x.indexOf(e) && x.push(e)
            }
            c = x;
            for (g = c.length; g--;) e = c[g], document.querySelector(e.uel) && b.push(e)
        }
        a.pseudoAEResults = B(b);
        a.aeResults = B(LevelAccess_AccessJS_AccessEngine.test_analytics_outcomes);
        a.failedMarkdowns = A(LevelAccess_AccessJS_AccessEngine.getMarkdownFuncs_failedToRun());
        a.failedTests = A(LevelAccess_AccessJS_AccessEngine.getTests_failedToRun());
        a.url = window.location.href;
        a.intId = E;
        a.orgId =
            LevelAccess_AccessJS_OrgDetails.orgId;
        a.accessJSKey = LevelAccess_AccessJS_OrgDetails.accessJSKey;
        a.timeline = [];
        a.environment = {
            width: screen.width,
            height: screen.height,
            orientation: "undefined" === typeof screen.orientation ? screen.msOrientation : screen.orientation.type,
            docWidth: document.body.scrollWidth,
            docHeight: document.body.scrollHeight
        };
        a.atTests = {
            dragonTest: !1
        };
        a.stateTested = {
            stateMachine: "",
            smVersion: "",
            testPoint: ""
        };
        a.engineSuccess = LevelAccess_AccessJS_AccessEngine.getSuccess();
        a.alchemySuccess = u;
        a.accessJSSuccess = a.engineSuccess && a.alchemySuccess;
        b = [];
        c = Object.keys(z);
        for (g = 0; g < c.length; g++) b.push(c[g]);
        a.failedFixIds = b;
        a.didEngineTimeOut = LevelAccess_AccessJS_AccessEngine.getDidMarkdownStageExecutionTimeOut();
        return J.stringify(a)
    }
    var u = !0,
        z = {},
        D = null;
    "undefined" !== typeof LevelAccess_AccessJS_AccessEngine && (D = LevelAccess_AccessJS_AccessEngine.getTestInfo());
    var x = [],
        q = [],
        I = {
            1: function(a, b) {
                for (var c = b.fixValues, d = Object.keys(c), f = d.length; f--;) {
                    var e = d[f],
                        g = c[e];
                    g ? a.setAttribute(e, g.trim()) :
                        a.removeAttribute(e)
                }
                q.push([a, b])
            },
            2: function(a, b) {
                var c = b.fixValues,
                    d = document.createElement(c.create);
                d.innerHTML = c.innerHTML;
                (c = document.querySelector(c.targetCssSelector)) && c.appendChild(d);
                q.push([a, b])
            },
            3: function(a, b) {
                a.innerHTML = b.fixValues.innerHTML;
                q.push([a, b])
            },
            4: function(a, b) {
                for (var c = b.fixValues, d = Object.keys(c), f = d.length; f--;) {
                    var e = d[f],
                        g = c[e];
                    a.hasAttribute(e) || a.setAttribute(e, g.trim())
                }
                q.push([a, b])
            }
        },
        r = null,
        v = null,
        K = ["127.0.0.1", "localhost"],
        J = {
            stringify: function(a, b, c) {
                return "object" ===
                    typeof a && "function" === typeof a.toJSON ? a.toJSON() : JSON.stringify(a, b, c)
            }
        },
        w = {
            "tests": [89, 87, 123, 125, 154, 152, 141, 99, 385, 118, 369, 370, 371, 372, 373, 374, 375, 376, 116, 114, 113, 112, 138, 137, 135, 153, 101, 94, 95, 131, 234, 235, 236, 105, 102, 34, 43, 38, 16, 14, 8, 78, 85, 83, 64, 69, 67, 74, 71, 55, 59, 35, 32, 42, 31, 363, 364, 365, 40, 366, 367, 368, 15, 22, 81, 65, 61, 48, 51, 50, 54, 53, 57, 140, 134, 27, 26, 28, 132, 33, 41, 37, 3, 80, 66, 44, 165, 166, 167, 168, 169, 170, 171, 173, 174, 175, 176, 180, 182, 185, 188, 189, 191, 192, 195, 199, 203, 205, 214, 216, 219, 220, 221, 224, 226, 227, 228, 229, 230, 231, 232, 237, 238, 244, 245, 246, 249, 251, 252, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 290, 291, 292, 294, 297, 298, 299, 300, 301, 302, 303, 304, 309, 311, 312, 313, 314, 315, 317, 318, 319, 322, 325, 326, 328, 329, 330, 331, 333, 334, 337, 338, 341, 350, 351, 352, 356, 360, 361, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 412, 136, 129, 107, 109, 52, 58, 39, 17, 13, 23, 45, 239, 241, 242, 248, 255, 256, 400, 401, 402, 377, 378, 111, 91, 161, 130, 379, 380, 381, 382, 383, 384, 21, 49, 29, 36, 20, 25, 24, 86, 63, 70, 68, 73, 72, 76, 75, 56, 19, 2, 6, 9, 7, 11, 10, 5, 4, 77, 79, 84, 82, 62, 46, 163, 164, 172, 177, 178, 179, 181, 183, 184, 186, 187, 190, 193, 194, 196, 197, 198, 200, 201, 202, 204, 225, 247, 293, 295, 296, 305, 306, 307, 308, 310, 316, 320, 321, 323, 324, 327, 477, 485, 445, 479, 483, 484, 490, 509, 508, 507, 505, 511, 510, 520, 522, 523, 527, 530, 534, 533, 532, 531, 581, 582, 583, 590, 591, 592, 609, 610, 593, 594, 595, 630, 647, 666, 677, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 596, 597, 598, 599, 600, 738, 740, 742, 743, 744, 745, 746, 710, 733, 734, 735, 736, 737, 779, 788, 789, 790, 727, 728, 729, 809, 704, 706, 707, 709, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 825, 828, 848, 849, 863, 872, 871, 874, 875, 879, 880, 884, 925, 933, 934, 1010, 1014, 1017, 1038, 1039, 1040, 1042, 1043, 1066],
            "assets": {}
        },
        E = null,
        F = !1;
    a.getResultsFromTesting = C;
    a.start = function() {
        E = (new Date).getTime().toString() + Math.floor(10 * Math.random()).toString();
        var a = function(a) {
                try {
                    if (!K.includes(window.location.hostname) && !F) {
                        F = !0;
                        var b = C(),
                            c = encodeURIComponent(b);
                        if (!a || !navigator.sendBeacon || !navigator.sendBeacon("https://api.levelaccess.net/analytics/3.0/results", c)) {
                            var d = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                            d.open("POST", "https://api.levelaccess.net/analytics/3.0/results", !a);
                            a && (d.timeout = 2E3);
                            d.send(c)
                        }
                    }
                } catch (H) {}
            },
            b = function() {
                var b = null,
                    c = null,
                    d = function() {
                        b && (b.disconnect(), b = null);
                        c && (clearInterval(c), c = null);
                        G(function(b) {
                            5E3 < document.getElementsByTagName("*").length || (LevelAccess_AccessJS_AccessEngine.setMarkdownStageExecutionTimeout(5E3), LevelAccess_AccessJS_AccessEngine.analytics_runAllTests_returnInstances_JSON_timer(function() {
                                a(!1);
                                b()
                            }))
                        })
                    };
                if (window.MutationObserver) {
                    var e, g = function() {
                        e = !1;
                        b = new MutationObserver(function(a) {
                            for (var c =
                                    0; c < a.length; c++) {
                                var d = a[c];
                                if (d) {
                                    var f = d.target;
                                    if (!f || "attributes" !== d.type || !d.attributeName || f.getAttribute(d.attributeName) !== d.oldValue) {
                                        e = !0;
                                        b.disconnect();
                                        b = null;
                                        break
                                    }
                                }
                            }
                        });
                        b.observe(document, {
                            attributes: !0,
                            attributeOldValue: !0,
                            childList: !0,
                            subtree: !0
                        })
                    };
                    g();
                    c = setInterval(function() {
                        e ? g() : d()
                    }, 1E3);
                    setTimeout(function() {
                        c && d()
                    }, 5E3)
                } else d()
            },
            c = function() {
                window.removeEventListener("beforeunload", c, !1);
                a(!0)
            };
        "complete" === document.readyState ? b() : window.addEventListener("load", b, !1);
        window.addEventListener("beforeunload",
            c, !1)
    };
    return a
}({});
LevelAccess_AccessJS.start();