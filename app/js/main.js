$(function () {


  $('.carshering__right-slider').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          dots: false,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          autoplay: true
        }
      }

    ]
  });


  $('.menu__btn').on('click', function () {
    $('.header__menu-list').toggleClass('menu__list--active')
  });


});






