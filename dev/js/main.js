$(document).ready(function() {
    $("#topline-search__icon").click(function () {
            $(this).closest("#topline-search").addClass("i-active").find("input").focus()
        }
    );
    $(function () {
        $(document).click(function (event) {
            if ($(event.target).closest("#topline-search").length) return;
            $("#topline-search").removeClass("i-active");
            event.stopPropagation();
        });
    });
    $(".header-menu__menu-toggle").click(function () {
            $(".header-menu__list").addClass("header-menu__list_active");
            $(".header-menu__overlay").addClass("header-menu__overlay_active");
        }
    );
    $(".header-menu__mobile-exit").click(function () {
            $(".header-menu__list").removeClass("header-menu__list_active");
            $(".header-menu__overlay").removeClass("header-menu__overlay_active");
            event.stopPropagation();
        }
    );
    $(".header-menu__overlay").click(function () {
            $(".header-menu__list").removeClass("header-menu__list_active");
            $(".header-menu__overlay").removeClass("header-menu__overlay_active");
            event.stopPropagation();
        }
    );

});