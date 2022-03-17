var App = App || {};
App.utils = App.utils || {};

$(function() {
    var a = $(window),
        c = $(this).width();
    a.on("resize.hackBootstrap", function() {
        c = a.width();
        var e = App.responsive ? c : Math.max(1E3, c);
        $(".m-wrap").css({
            "margin-left": ($("#special-sectionOverview, #sectionOverview, #old-sectionOverview").width() - e) / 2,
            width: e
        });
       
        $(".html").css("overflow-x", 1E3 < c ? "hidden" : "")
    }).trigger("resize.hackBootstrap");
    if ($.scrollTo) a.on("scroll.hackBootstrap", function() {
        1E3 < c 
    });
});
App.responsive = !0;

$(function() {
        $('.pn61t_nav').navScroll({
            mobileDropdown: false,
            mobileBreakpoint: 768,
            scrollSpy: true
        });

        $('#PN61T-nav ul li a').on('click', function() {
            $('#PN61T-nav ul li').removeClass('on');
            $(this).parent().addClass('on');
        });

    });
