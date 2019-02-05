$(document).ready(function() {
    var $header = $("#header-wrap");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $header.hasClass("default") ){
            $header.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("fixed")
                    .slideDown('fast');
            });
        } else if($(this).scrollTop() <= 100 && $header.hasClass("fixed")) {
            $header.fadeOut('fast',function(){
                $(this).removeClass("fixed")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });//scroll
    $("#menu-toggle").click(function () {
            $(this).toggleClass('mobile-exit');
            $("#mobile-sidebar").toggleClass("i-active");
            $("#main-overlay").toggleClass("i-active");
            event.stopPropagation();
        }
    );
    $("#main-overlay").click(function () {
            $("#menu-toggle").removeClass("mobile-exit");
            $("#mobile-sidebar").removeClass("i-active");
            $("#main-overlay").removeClass("i-active");
            event.stopPropagation();
        }
    );
    $('.menu-item_lvl-1').click(function(event) {
        $('._opened').removeClass('_opened');
        $(this).addClass('_opened');
    });
    $('.back-link_lvl-1').click(function(event) {
        $('.menu-item_lvl-1').removeClass('_opened');
        return false;
    });
    $('.menu-item_lvl-2').click(function(event) {
        $(this).addClass('_opened');
        return false;
    });
    $('.back-link_lvl-2').click(function(event) {
        $('.menu-item_lvl-2').removeClass('_opened');
        return false;
    });

});