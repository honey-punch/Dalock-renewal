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
    
});

// section map



// Initialize and add the map
function initMap() {
    // The location of Branch
    const yongSan = { lat: 37.53679536673973, lng: 126.96563215676055 };
    const bullGwang = { lat: 37.608460550309545, lng: 126.92635116572526 };
    const guro = { lat: 37.499998600550384, lng: 126.88436023032908 };
    const lotteWorld = { lat: 37.510363873374494, lng: 127.09644483956211 };
    const mokDong2 = { lat: 37.52945383547117, lng: 126.86452197876793 };
    const suYou = { lat: 37.63779245959199, lng: 127.02399654664956 };
    const mullae = { lat: 37.520114548792726, lng: 126.89016052461145 };
    const garden5 = { lat: 37.47863240005114, lng: 127.11898159910835 };

    const locations = [
        yongSan, bullGwang, guro, lotteWorld, mokDong2, suYou, mullae, garden5
    ];
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: yongSan,
        });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: yongSan,
        map: map,
        });
    }

    window.initMap = initMap;
