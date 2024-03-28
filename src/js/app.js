import countdown from './modules/countdown.js'
import initializeRecordsSlider from './modules/records-slider.js'
import addTabsListeners from './modules/tabs.js'
import { moveRecordsThumbLine, initializeRecordsThumbsLine } from './modules/records-thumbs.js'
import { setFraction } from './modules/venue.js'
import { setSmoothScroll } from './modules/anchorScroll.js'
import { addTopBtnListener, scrollFunction } from './modules/topScroll.js'
import { initializeProgramAccordion } from './modules/programAccordion.js'
import { initPhoneMask } from './modules/phoneMask.js'

const base_countdown = new countdown({
  target: '.countdown',
  dayWord: ' д',
  hourWord: ' ч',
  minWord: ' мин',
});

const block_countdown = new countdown({
  target: '.price-registration-countdown',
  dayWord: ' д',
  hourWord: ' ч',
  minWord: ' мин',
});


const speakersSlider = new Swiper(".speakers-swiper", {
  spaceBetween: 24,
  slidesPerView: 'auto',
  pagination: {
    el: ".speakers-swiper-pagination",
    clickable: true,
  },
  freeMode: true,
  navigation: {
    nextEl: ".speakers-swiper-button-next",
    prevEl: ".speakers-swiper-button-prev",
  },
  breakpoints: {
    769: {
      spaceBetween: 40,
      freeMode: false,
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    925: {
      spaceBetween: 72,
      freeMode: false,
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
});

const reviewsSlider = new Swiper(".reviews-swiper", {
  freeMode: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews-swiper-button-next",
    prevEl: ".reviews-swiper-button-prev",
  },
  breakpoints: {
    769: {
      spaceBetween: 24,
    },
    925: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 2,
      freeMode: false,
    }
  }
});

const publicationsSlider = new Swiper(".publications-swiper", {
  freeMode: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  pagination: {
    el: ".publications-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".publications-swiper-button-next",
    prevEl: ".publications-swiper-button-prev",
  },
  breakpoints: {
    769: {
      spaceBetween: 24,
    },
    925: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 3,
      freeMode: false,
    }
  }
});

const recordsSwiperNavigation = new Swiper(".records-swiper-navigation", {
  slidesPerView: 'auto',
  freeMode: true,
});

const recordsSwiperSlider = new Swiper(".records-swiper-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".records-swiper-button-next",
    prevEl: ".records-swiper-button-prev",
  },
  thumbs: {
    swiper: recordsSwiperNavigation,
  },
  on: {
    slideChange: function(swiper) {
      moveRecordsThumbLine(swiper.activeIndex)
    }
  }
});

const venueContentSwiperSlider = new Swiper(".venue-swiper-content-slider", {
  effect: "fade",
  allowTouchMove: false,
});

const venueSwiperSlider = new Swiper(".venue-swiper-slider", {
  effect: "fade",
  navigation: {
    nextEl: ".venue-swiper-button-next",
    prevEl: ".venue-swiper-button-prev",
  },
  on: {
    slideChange: function(swiper) {
      setFraction(swiper.activeIndex, swiper.slides)
      venueContentSwiperSlider.slideTo(swiper.activeIndex)
    },
    init: function(swiper) {
      setFraction(swiper.activeIndex, swiper.slides)
      venueContentSwiperSlider.slideTo(swiper.activeIndex)
    }
  }
});

initializeRecordsSlider()
initializeRecordsThumbsLine()


window.addEventListener('load', addTabsListeners)
window.addEventListener('load', setSmoothScroll)
window.addEventListener('load', addTopBtnListener)
window.addEventListener('load', scrollFunction)
window.addEventListener('load', initializeProgramAccordion)
window.addEventListener('load', initPhoneMask)
window.addEventListener('scroll', scrollFunction)
