$(document).ready(function () {
    
    $("#main-nav a").mPageScroll2id({
        scrollSpeed: 300
    });

    var $menu = $("#main-nav");
    $menu_btn = $("#main-menu-btn");

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50 && $menu_btn.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
            $menu_btn.removeClass("default").addClass("fixed");

        } else if ($(this).scrollTop() <= 50 && $menu_btn.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
            $menu_btn.removeClass("fixed").addClass("default");

        }


    }); //scroll

    $("#main-menu-btn").click(function () {
        $("#main-nav ul").slideToggle();
    });

    $(".contacts-box .phone").click(function () {
        $(".phone span").slideToggle();
        $(".header-top-line .contacts-box .phone span").css("display", "inline-block");
        $(".e-mail span").css("display", "none");
    });
    $(".contacts-box .e-mail").click(function () {
        $(".e-mail span").slideToggle();
        $(".header-top-line .contacts-box .e-mail span").css("display", "inline-block");
        $(".phone span").css("display", "none");
    });

    
});

$(window).load(function() {
	$("#about-us .container .row").animated("fadeInDown", "fadeOut");
	$(".odd").animated("slideInLeft", "slideOutLeft");
	$(".even").animated("slideInRight", "slideOutRight");
	$("#feedback .row").animated("fadeIn", "fadeOut");
	$(".container input").animated("zoomIn", "zoomOut");
});