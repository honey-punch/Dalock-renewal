// const toggleBtn = document.querySelector('.ham');
// const menu = document.querySelector('.menu');

// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

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

    // $(window).resize(function (){  
    //     if (window.outerWidth < 1100) {
    //       $(".menu").hide();
    //     } else $(".menu").show();
    // });

    // $(".ham").click(function() {
    //     $(".menu").slideToggle();
    // });
     

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





