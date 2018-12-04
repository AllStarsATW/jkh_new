$(document).ready(function() {
    $(".top-line__search-icon").click(function () {
            $(this).closest(".top-line__search").addClass("i-active").find("input").focus()
        }
    );
    $(function () {
        $(document).click(function (event) {
            if ($(event.target).closest(".top-line__search").length) return;
            $(".top-line__search").removeClass("i-active");
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