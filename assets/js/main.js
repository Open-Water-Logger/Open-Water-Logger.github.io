jQuery(document).ready(function ($) {

  $('#slider .move').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow:"<button type='button' class='slick-prev pull-left'>&laquo;</button>",
    nextArrow:"<button type='button' class='slick-next pull-right'>&raquo;</button>"
  });

  
  $('.content-slides').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    draggable: false,
    infinite: true,
    pauseOnHover: true,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    centerMode: true,
    autoplaySpeed: 3500,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    asNavFor: '.screenshot-slides .slides',
    responsive: [
      {
        breakpoint: 850,
        settings: 'unslick'
      }
    ]
  });

  var $nav = $('header.main nav > ul');

  $('#mobile-menu').click(function(){
    if($nav.hasClass('open')) {
      $nav.removeClass('open');
    } else {
      $nav.addClass('open');
    }
  });

  $('.screenshot-slides .slides').slick({
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
    speed: 1000,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    dots: false,
    asNavFor: '.content-slides'
  });

  
});