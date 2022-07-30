import "../scss/index.scss";
import "../scss/header.scss";
import "../scss/card.scss";
import "./slick.min";
const $ = require('jquery')
    
$('.toppings').slick({
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

let inputs = document.querySelectorAll('.input-file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.file_btn_text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.file_btn_text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.file_btn_text').innerText = labelVal;
      });
    });
