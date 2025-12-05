const swiperTeams1 = new Swiper(".swiper-teams-1", {
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      centeredSlides: true,
      allowTouchMove: true,
      spaceBetween: 20,
    },
    1100: {
      centeredSlides: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
});

const swiperTeams2 = new Swiper(".swiper-teams-2", {
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,

  breakpoints: {
    320: {
      centeredSlides: true,
      allowTouchMove: true,
      spaceBetween: 20,
    },
    1100: {
      centeredSlides: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
});
