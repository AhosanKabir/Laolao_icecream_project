(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
    $('.sh').toggleClass('shadows');
  }); 

  $('.sh').click( function (){ 
    $('.mobile-menu').removeClass('siteBar');
    $('.sh').removeClass('shadows');
  }); 


  // owlCarousel
  $(".product_card_wrapper").owlCarousel({
    loop: true,
    margin: 48,
    items: 3,
    smartSpeed: 500,
    navText: [
      '<img src="assets/img/left_angle_white.svg" alt="">',
      '<img src="assets/img/right_angle_white.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".topping_wrapper").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    // autoplay:2500,
    smartSpeed: 500,
    navText: [
      '<img src="assets/img/left_angle_green.svg" alt="">',
      '<img src="assets/img/right_angle_green.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

 
})(jQuery);
