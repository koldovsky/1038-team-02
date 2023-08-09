document.addEventListener('partialsLoaded', () => {
  import('./faq.js');
  import('./feedbacks.js');
  import('./contacts.js');
  import('./offers.js');
});

// code for the pricing part - Dunhovsky

function pricingSwiper() {
  const swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
}

setTimeout(pricingSwiper, 1000);