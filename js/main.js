
// menu dropDown
$(function(){
    $('.main-menu').mouseover(function(){
        $('.subMenu-bg').stop().slideDown();
        $('.sub-menu').css('display', 'block');
    });
    $('.main-menu').mouseout(function(){
        $('.subMenu-bg').stop().slideUp();
        $('.sub-menu').css('display', 'none');
    });
});

// main visual slide
var swiper = new Swiper(".main_slide", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });