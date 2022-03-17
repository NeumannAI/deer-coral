typeof jQuery == 'function' && jQuery.holdReady( true );
window.tiggerReadyed = false;
window.loaded = false;
var tiggerReady = function(route){
    // if(typeof(route) !== "undefined" && route.name === 'Overview') {
    //     window.tiggerReadyed = false;
    // }
    if (window.tiggerReadyed) { return; }
    window.tiggerReadyed = true;
    typeof jQuery == 'function' && (jQuery.holdReady( false ) , jQuery.ajaxSetup({ cache: true }));

    window._babelPolyfill = false;
    typeof featuresRun == 'function' && featuresRun();
    if (typeof jQuery != 'function'){ return; }


    if ( $('#hd #fp-nav').length>0 && $('#hd').css('z-index') == 0){ $('#hd').css('z-index',1); }
    //--
	if ( $("#z270-main").length > 0 && $("#overview-top-nav").length > 0 ){
        $("#overview-top-nav").remove();
	}
    //--
    if($("#mininav, #mMobiNavToggle").length>0){
        if($("#overview-top-nav").length==0){$('<div id="overview-top-nav"></div>').prependTo("body");}
        $("#overview-top-nav").css('position','absolute');
        $("#overview-top-nav").css('top',0);
        $("#overview-top-nav").css('left',"-200%");
        if($(window).scrollTop()>=52){
            $("#overview-top-nav").css('height',52);
        }else{
            $("#overview-top-nav").css('height',100);
        }
        $("#mMobiNavToggle,#mMobiNav,#mininav").css('top',$("#overview-top-nav").css('height'));
        $('#mininav').css('position','fixed');

        $(window).on('scroll',function (event) {
            var scroll = $(window).scrollTop();
            if(scroll>=52){
                $("#overview-top-nav").css('height',52);
            }else{
                $("#overview-top-nav").css('height',100);
            }
            $("#mMobiNavToggle,#mMobiNav,#mininav").css('top',$("#overview-top-nav").css('height'));
        }).trigger("scroll");
    }
    //--
    if(document.querySelectorAll('#overview-aside-nav')[0]) {
        var css =''
            +	'#overview-aside-nav {z-index: 9999 !important;}'
            +	'#overview-aside-nav ul li.on div {height: 30px !important;}'
            +	'#overview-aside-nav{z-index:9999;}'
            +	'#overview-aside-nav ul li {height: inherit !important;margin:0 !important; }'
        ;
        var tag = document.createElement('style');
        tag.setAttribute("id", "asus-fix-style");
        tag.type = 'text/css';
        tag.appendChild(document.createTextNode(css));
        document.head.appendChild(tag);
    }
    //--
    if(document.querySelectorAll('#box-productOverview-containter')[0]) {
        var css =''
            +	'#box-productOverview-containter {margin-top: 0px !important;}'
        ;
        var tag = document.createElement('style');
        tag.setAttribute("id", "asus-fix-style");
        tag.type = 'text/css';
        tag.appendChild(document.createTextNode(css));
        document.head.appendChild(tag);
    }
    //--
    if(document.querySelectorAll('#AWD')[0]) {
        var css =''
        +	'#AWD {margin-top: 0px !important;}'
        + 	'@media (min-width: 721px){#AWD {margin-top: 0px !important;}}'
        ;
        var tag = document.createElement('style');
        tag.setAttribute("id", "asus-fix-style");
        tag.type = 'text/css';
        tag.type = 'text/css';
        tag.appendChild(document.createTextNode(css));
        document.head.appendChild(tag);
    }
    //--
	if(document.querySelectorAll('#CMD')[0]){

	  if(document.querySelectorAll('#overview-top-nav').length == 0) {
      var div = document.createElement("div");
      div.id = 'overview-top-nav';
      document.body.insertBefore(div, document.body.firstChild);
    }
		var css =''
			+	'@media only screen and (max-width: 900px) { .overviewContent {overflow-x: visible !important;} }'
			+   'body { overflow:visible!important;}'
			+	'#CMD { margin-bottom:0px!important;}'
			+	'#CMD .inner-view { margin-bottom:0px!important;}'
			+	'.overviewContent { padding: 0; }'
			+	'#CMD .outer-view { margin-top:0px;}'
			+	'@media (min-width: 769px){#CMD .outer-view {margin-top: 0px!important;}}'
			+	'#overview-top-nav.popHide + #__nuxt .asusOfficialProductMenu {display:none;}'
			+	'#overview-top-nav.popHide + #__nuxt div[class*=LevelFourProductPage__wrapper__] {padding-top:0;}'
			+	'#overview-top-nav.popHide + #__nuxt .asusOfficialHeader {display:none;}'
			+	'#overview-top-nav.popHide + #__nuxt .asusOfficialECommerceFooter {display:none;}'
			+	'#overview-top-nav.popHide + #__nuxt .asusOfficialFooter {display:none;}'
      +	'#overview-top-nav.popHide + #__nuxt .disclaimerWrapper {display:none;}'
			+	'@media only screen and (min-width: 991px) { #overview-top-nav.popHide + #__nuxt #CMD {margin-bottom: 60px;}}'
			+ 	'.inner-view.show-inner.killFixed { position:relative!important; z-index: 1000000000; bottom: auto; overflow:hidden; }'
			+	'body.stopScrollbar #__nuxt .asusOfficialProductMenu {display:none;}'
			+	'body.stopScrollbar #__nuxt div[class*=LevelFourProductPage__wrapper__] {padding-top:0;}'
			+	'body.stopScrollbar #__nuxt .asusOfficialHeader {display:none;}'
			+	'body.stopScrollbar #__nuxt .asusOfficialECommerceFooter {display:none;}'
			+	'body.stopScrollbar #__nuxt .asusOfficialFooter {display:none;}'
      +	'body.stopScrollbar #__nuxt .disclaimerWrapper {display:none;}'
		;
		var tag = document.createElement('style');
		tag.setAttribute("id", "asus-fix-style");
		tag.type = 'text/css';
		tag.appendChild(document.createTextNode(css));
		document.head.appendChild(tag);
	}
};
(function(){
	if (!window.jQuery){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/nuxtStatic/js/jquery.min.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(script, s);
	}
    window.addEventListener("load", function(){
        if (window.loaded) { return; }
        window.loaded = true;
        setTimeout(function(){
            $('#rog-width-full').parents('.product_overview').css({'width':'100%'})
            var $imgList =  Array.prototype.slice.call(document.querySelectorAll('.progressive-image'));
            if (!window.IntersectionObserver) {
                $imgList.forEach(function($img) { return  $img.classList.remove("progressive-image")} );
            }
            else {
                var callback = function(entries) {
                    entries.forEach(function($img) {
                        if ($img.isIntersecting) {
                            $img.target.classList.remove("progressive-image");
                            observer.unobserve($img.target);
                        }
                    });
                };
                var observer = new IntersectionObserver(callback);
                $imgList.forEach(function($img){ return  observer.observe($img)});
            }
        },1300);
    });
})();
