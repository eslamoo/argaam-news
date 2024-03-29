
(function($) {
    "use strict";
    /* FEATURED SLIDER */

    $(".featured-slider").owlCarousel({
        autoPlay: 60000,
        items: 3,
        loop: true,
		rtl:true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1279: {
                items: 3,
            },
        }
    });

    /* FEATURED SLIDER 2 */

    $(".featured-slider-2").owlCarousel({
        autoPlay: 60000,
        items: 4,
        loop: true,
		rtl:true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1279: {
                items: 4,
            },
        }
    });

    /* CONTENT SLIDER FULL WIDTH SLIDER */

    $(".content-slider-full-width").owlCarousel({
        autoPlay: 60000,
        items: 3,
        loop: true,
        dots: false,
        nav: true,
		rtl:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1279: {
                items: 3,
            },
        }
    });

    /* SMALL POST SLIDER */

    $(".small-post-slider").owlCarousel({
        autoPlay: 6000,
        items: 3,
        loop: true,
        dots: false,
        nav: true,
		rtl:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1279: {
                items: 3,
            },
        }
    });

    /* FULL WIDTH BLOCK SLIDER */

    $(".full-with-slider").owlCarousel({
        autoPlay: 6000000,
        items: 1,
        center: true,
        dots: false,
        loop: true,
        itemsMobile: [479, 1],
        itemsDesktop: [1280, 1],
        itemsDesktopSmall: [1279, 1],
        navSpeed: 1500,
        dragEndSpeed: 1500,
        nav: true,
		rtl:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    /* FEATURED SLIDER 2 */

    $(".full-with-slider-2").owlCarousel({
        autoPlay: 6000000,
        items: 1,
        center: true,
        dots: false,
        loop: true,
        itemsMobile: [479, 1],
        itemsDesktop: [1280, 1],
        itemsDesktopSmall: [1279, 1],
        navSpeed: 1500,
        dragEndSpeed: 1500,
        nav: true,
		rtl:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    /* PHOTO GALLERY */

    $(".photo-gallery-slider").owlCarousel({
        autoPlay: 6000,
        items: 6,
        dots: false,
        loop: true,
        nav: false,
		rtl:true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1279: {
                items: 6,
            },
        }
    });

    /* ZERO GRID SLIDER */

    $(".zerogrid-slider").owlCarousel({
        autoPlay: true,
        slideSpeed: 1000,
        dots: true,
        nav: false,
        loop: true,
        items: 1,
		rtl:true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
    });

    /* FEATURE POST SLIDER */

    $(".featured-post-slider-single-post").owlCarousel({
        autoPlay: 6000,
        items: 1,
        dots: false,
        itemsMobile: [479, 1],
        itemsDesktop: [1280, 2],
        itemsDesktopSmall: [1280, 2],
        loop: true,
        nav: true,
		rtl:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],

    });

    /* CONTENT SLIDER 2 */

    $(".content-slider-2").owlCarousel({
        autoPlay: 6000,
        items: 2,
        dots: false,
        loop: true,
        nav: true,
		rtl:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1279: {
                items: 2,
            },
        }
    });

    /* PRELOADER CSS */

    $(window).load(function() {
        $("#status").fadeOut();
        $("#preloader").delay(500).fadeOut("slow");
    })

    /* STICKY SIDE BAR */

    $('#side-bar').theiaStickySidebar({
        additionalMarginTop: 80
    });
    $('#side-bar-right').theiaStickySidebar({
        additionalMarginTop: 80
    });

    /* NEWS TICKER */

    $("#bn4").breakingNews({
        effect: "slide-v",
        autoplay: true,
        timer: 4000,
        color: 'red',
        border: true
    });

    /*  SCROLL TO TOP */

    $(document).ready(function() {

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

 
    /* MENU 1 JS */
    $('#menu-1').megaMenu({
        menu_width: false,
        items_text_align: 'left',
        items_direction: 'normal',
        items_indicator_icon: 'fa-angle-down',
        description_hide: true,
        vertical_lines_hide: false,
        outside_click_drop_down_hide: true,
        search_bar_hide: false,
        menu_top_fixed: false,
        transparent: 1,
        /* LOGO SETTINGS */
        logo_hide: true,
        logo_align: 'left',
        /* DROP DOWN SETTINGS */
        drop_down_show_trigger: 'hover',
        drop_down_hide_trigger: 'hover',
        drop_down_show_delay: 200,
        drop_down_hide_delay: 10,
        drop_down_indicator_icon: 'fa-angle-right',
        /* STICKY HEADER SETTINGS */
        sticky_header: true,
        sticky_header_height: 500,
        un_sticky_header_height: 100,
        sticky_header_animation: 'move',
        /* MOBILE VIEW SETTINGS */
        description_hide_mobile: false,
        vertical_lines_hide_mobile: false,
        logo_hide_mobile: false,
        search_bar_hide_mobile: false,
        sticky_header_mobile: false,
        collapse_drop_down: true,
        menu_top_fixed_mobile: false,
        items_indicator_icon_mobile: 'fa-angle-down',
        drop_down_indicator_icon_mobile: 'fa-angle-down',
        /* MEDIA QUERY MAX WIDTH */
        media_screen_max_width: 991,
    });



    /* MENU 3 JS */

    $('#menu-3').megaMenu({
        /* DESKTOP VIEW SETTINGS */
        menu_width: 1240,
        items_text_align: 'center',
        items_direction: 'normal',
        items_indicator_icon: 'fa-angle-down',
        description_hide: true,
        vertical_lines_hide: true,
        outside_click_drop_down_hide: true,
        search_bar_hide: true,
        menu_top_fixed: false,
        transparent: 1,
        /* LOGO SETTINGS */
        logo_hide: false,
        logo_align: 'left',
        /* DROP DOWN SETTINGS */
        drop_down_show_trigger: 'hover',
        drop_down_hide_trigger: 'hover',
        drop_down_show_delay: 200,
        drop_down_hide_delay: 10,
        drop_down_indicator_icon: 'fa-angle-right',
        /* STICKY HEADER SETTINGS */
        sticky_header: true,
        sticky_header_height: 500,
        un_sticky_header_height: 100,
        sticky_header_animation: 'move',
        /* MOBILE VIEW SETTINGS */
        description_hide_mobile: true,
        vertical_lines_hide_mobile: false,
        logo_hide_mobile: false,
        search_bar_hide_mobile: true,
        sticky_header_mobile: false,
        collapse_drop_down: true,
        menu_top_fixed_mobile: false,
        items_indicator_icon_mobile: 'fa-angle-down',
        drop_down_indicator_icon_mobile: 'fa-angle-down',
        /* MEDIA QUERY MAX WIDTH */
        media_screen_max_width: 991,
    });

    /* MENU 3 JS */

    $('#menu-2').megaMenu({
        /* DESKTOP VIEW SETTINGS */
        menu_width: 1140,
        items_text_align: 'center',
        items_direction: 'normal',
        items_indicator_icon: 'fa-angle-down',
        description_hide: true,
        vertical_lines_hide: true,
        outside_click_drop_down_hide: true,
        search_bar_hide: true,
        menu_top_fixed: false,
        transparent: 1,
        /* LOGO SETTINGS */
        logo_hide: false,
        logo_align: 'left',
        /* DROP DOWN SETTINGS */
        drop_down_show_trigger: 'hover',
        drop_down_hide_trigger: 'hover',
        drop_down_show_delay: 200,
        drop_down_hide_delay: 10,
        drop_down_indicator_icon: 'fa-angle-right',
        /* STICKY HEADER SETTINGS */
        sticky_header: true,
        sticky_header_height: 500,
        un_sticky_header_height: 100,
        sticky_header_animation: 'move',
        /* MOBILE VIEW SETTINGS */
        description_hide_mobile: true,
        vertical_lines_hide_mobile: false,
        logo_hide_mobile: false,
        search_bar_hide_mobile: true,
        sticky_header_mobile: false,
        collapse_drop_down: true,
        menu_top_fixed_mobile: false,
        items_indicator_icon_mobile: 'fa-angle-down',
        drop_down_indicator_icon_mobile: 'fa-angle-down',
        /* MEDIA QUERY MAX WIDTH */
        media_screen_max_width: 991,
    });
})(jQuery);