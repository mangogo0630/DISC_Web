import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// 漢堡選單按鈕動畫
const hamburgerBtn = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');

function switchHamburger() {
  const hamburgerLines = [
    ...document.querySelectorAll('.navbar-toggler .hamburg-line'),
  ];

  hamburgerLines.forEach((item) => {
    item.classList.toggle('active');
  });

  body.classList.toggle('overflow-y-hidden');
}

hamburgerBtn.addEventListener('click', switchHamburger);

// Swiper 套件
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const selectedArticleSwiper = new Swiper('.selectedArticleSwiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-custom-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
  },
});

const hotJourney = new Swiper('.hotJourney', {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  loop: true,
});

const tasteLife = new Swiper('.tasteLife', {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-next-life',
    prevEl: '.swiper-prev-life',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

const styleProposal = new Swiper('.styleProposal', {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  loop: true,
});

const furtherReading = new Swiper('.furtherReading', {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  loop: true,
});

// 顯示訂閱文章
const subscribeArticleBtn = document.querySelector('.subscribeArticle');
const gradientCover = document.querySelector('.gradient-cover');
const lockArticleInfo = document.querySelector('.lock-article-info');

subscribeArticleBtn
  ? subscribeArticleBtn.addEventListener('click', showSubscriptionArticle)
  : 'null';

function showSubscriptionArticle() {
  gradientCover.classList.add('active');
  lockArticleInfo.classList.add('active');
}

// bootstrap 官網表單驗證
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
})();

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import { gsap } from 'gsap';

import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

// 自動打字效果
gsap.to('.typing', {
  text: '探索生活的無限可能',
  duration: 3,
  repeat: -1,
});
