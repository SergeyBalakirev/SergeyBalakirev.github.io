$(function () {


  $('.menu__slider-inner').slick({
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.new__slider-inner').slick({
    infinite: true,
    arrows: false,
    dots: true,
  });


  var wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 300,
      mobile: true,
      live: true,
      callback: function (box) {
      },
      scrollContainer: null,
      resetAnimation: true,
    }
  );
  wow.init();



  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.burger').on('click', function () {
      $('.burger').toggleClass('burger__active');

      $('.header__list').slideToggle();
    });

    $('.header__link').on('click', function () {
      $('.header__list').slideToggle();

      $('.burger').toggleClass('burger__active');
    });
  }




  $("#header__list").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1100);
  });

});