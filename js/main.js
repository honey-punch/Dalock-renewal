$(document).ready(function() {

    // ham-menu

    $(".ham").click(function() {
        $(".menu").stop().toggleClass('active');
    });
    
    $(window).resize(function (){  
        if (window.outerWidth > 1100) {
          $(".menu").removeClass("active")
        }
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
    $("#menu1 svg").css("fill", "#5688d7");
       
    $(".tabmenu svg").click(function() {
        $(this).css("fill", "#5688d7");
        $(this).parents("li").siblings().find("svg").css("fill", "#555555");
    });

    $(".tab-icon").click(function() {
        $(this).siblings(".unit-info").show();
        $(this).parents("li").siblings().find(".unit-info").hide();
    })
    
});





