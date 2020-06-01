import Swiper from 'swiper';

export default class Slider {
  activate(countCards) {
    let loop;
    let loopedSlides;
    if(countCards > 2) {
      loop = true;
      loopedSlides = 3;
    } else {
      loop = false;
      loopedSlides = 0;
    }
    let nextElementOverflow, prevElementOverflow;
    const slider = new Swiper ('.swiper-container', {
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
        
  }
}



