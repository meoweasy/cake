import "../scss/index.scss";
import "../scss/header.scss";
import "../scss/card.scss";
import "./slick.min";
const $ = require('jquery')
    
$('.carousel_cake').slick({
    nextArrow: document.getElementById('rightButton'),
    prevArrow: document.getElementById('leftButton'),
    arrows: true,
    slidesToShow:3,
    slidesToScroll:1,
    dots: false,
});
$('.carousel_cupcake').slick({
  nextArrow: document.getElementById('rightButton'),
  prevArrow: document.getElementById('leftButton'),
  arrows: true,
  slidesToShow:3,
  slidesToScroll:1,
  dots: false,
});

$(function () {
  $('.menu_cupcake').hide();
  $('.menu_candy').hide();
  $('.menu_different').hide();

  $(".cake_btn").on('click',function() {
      $(".menu_cupcake").hide();
      $('.menu_candy').hide();
      $('.menu_different').hide();
      $(".menu_cake").show();
  });
  $(".cupcake_btn").on('click',function () {
      $(".menu_cake").hide();
      $('.menu_candy').hide();
      $('.menu_different').hide();
      $(".menu_cupcake").show();
  });
  $(".candy_btn").on('click',function () {
    $(".menu_cake").hide();
    $('.menu_cupcake').hide();
    $('.menu_different').hide();
    $(".menu_candy").show();
});
  $(".different_btn").on('click',function () {
    $(".menu_cake").hide();
    $('.menu_cupcake').hide();
    $('.menu_candy').hide();
    $(".menu_different").show();
  });
});
