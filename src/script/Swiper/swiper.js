import Swiper from 'swiper';

let Slider = new Swiper ('.swiper-container', {
  loop: true,
  loopedSlides: 3,
  centeredSlides: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',  
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'

  },
});

export {Slider};