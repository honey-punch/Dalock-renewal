$(document).ready(function() {

    location.href = "#menu1";
    
    $(window).resize(function (){  
        if (window.outerWidth < 1000) {
          $(".menu-wrap").hide();
        } else $(".menu-wrap").show();
    });

    $(".ham").click(function() {
        $(".menu-wrap").slideToggle();
    });
    
    
    // section4 unit
    $("#menu1 svg").css("fill", "#2478e6");
       
    $(".tabmenu svg").click(function() {
        $(this).css("fill", "#2478e6");
        $(this).parents("li").siblings().find("svg").css("fill", "#555555");
    });

    $("#menu1 svg").click(function() {
        $(".unit-img img:nth-child(1)").show().siblings().hide();
    });
    $("#menu2 svg").click(function() {
        $(".unit-img img:nth-child(2)").show().siblings().hide();
    });
    $("#menu3 svg").click(function() {
        $(".unit-img img:nth-child(3)").show().siblings().hide();
    });
    $("#menu4 svg").click(function() {
        $(".unit-img img:nth-child(4)").show().siblings().hide();
    });
    $("#menu5 svg").click(function() {
        $(".unit-img img:nth-child(5)").show().siblings().hide();
    });
    
});





