$(document).ready(function() {

    // ham-menu
    
    $(window).resize(function (){  
        if (window.outerWidth < 1100) {
          $(".menu-wrap").hide();
        } else $(".menu-wrap").show();
    });

    $(".ham").click(function() {
        $(".menu-wrap").slideToggle();
    });

    if (matchMedia("screen and (max-width: 1100px)").matches) {
        $(".menu-wrap").css("display", "none");
    };
    
});