
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