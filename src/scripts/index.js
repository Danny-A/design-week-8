import 'swiper/dist/css/swiper.css';
import '../styles/index.scss';

import Swiper from 'swiper/dist/js/swiper.min';

const mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
