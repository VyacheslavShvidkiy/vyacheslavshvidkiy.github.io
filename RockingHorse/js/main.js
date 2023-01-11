let burger = document.querySelector('.burger');
let navList = document.querySelector('.nav_list');
let modal = document.querySelector('.modal_wrapper');
let video = document.querySelector('.hero_video');
let modalClose = document.querySelector('.modal_close');
let player = document.getElementById('player');
burger.addEventListener('click', () => {
    navList.classList.toggle('active');
    burger.classList.toggle('open');
})
video.addEventListener('click', () => {
    modal.classList.add('modal_open');
})
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_open');
})

$(document).ready(function(){
    $('.slider').slick(
        {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          }
    );
  });
