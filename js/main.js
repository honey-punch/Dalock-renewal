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

    //section3 
    setInterval(function() { 
        $('.general-info .card:first-child')
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo(".general-info")
      },  5000);

    
    // section4 unit

    location.href = "#menu1";

    $("#menu1 svg").css("fill", "#5688d7");
       
    $(".tabmenu svg").click(function() {
        $(this).css("fill", "#5688d7");
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





