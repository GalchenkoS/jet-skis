$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    infinite: false,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/banner-sliderArrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/banner-sliderArrow-right.svg" alt="arrow-right"></button>',
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest(".tabs__wraper").siblings().find("div")).removeClass(
      "tabs-content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $(".product-slider").slick("setPosition");
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });

  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider-btn product-slider-btnprev"><img src="images/icons/banner-sliderArrow-black-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button class="product-slider-btn product-slider-btnnext"><img src="images/icons/banner-sliderArrow-black-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          dots: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          dots: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle()("filter__item-drop--active");
  });

  $(".js-range-slider").ionRangeSlider();

  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").removeClass("product-item__wrapper--list");
  });

  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").addClass("product-item__wrapper--list");
  });
  $(".rate-yo").rateYo({
    rating: 3.6,
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4",
    spacing: "7px",
    starWidth: "23px",
  });

  $(".card__input-pickup").styler();

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  $(".footer__item-title").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("footer__item-title--active");
  });

  $(".aside__btn").on("click", function () {
    $(this).next().slideToggle();
  });
  $(".card__list-mobilecontact").on("click", function () {
    $(this).next().slideToggle();
  });
});
