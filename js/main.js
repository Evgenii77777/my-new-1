function enableClickBackForMobile() {
  const isMobile = window.innerWidth <= 1100;
  const slides = document.querySelectorAll(".swiper-slide");

  slides.forEach((slide) => {
    const back = slide.querySelector(".back");
    if (!back) return;
    slide.replaceWith(slide.cloneNode(true));
  });

  const updatedSlides = document.querySelectorAll(".swiper-slide");

  if (isMobile) {
    updatedSlides.forEach((slide) => {
      const back = slide.querySelector(".back");
      if (!back) return;
      slide.addEventListener("touchend", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isActive = slide.classList.contains("active-back");
        updatedSlides.forEach((s) => s.classList.remove("active-back"));
        if (!isActive) {
          slide.classList.add("active-back");
        }
      });
    });
  }
}
enableClickBackForMobile();
window.addEventListener("resize", enableClickBackForMobile);

//
const highlight = document.querySelector(".highlight-center");
const highlight2 = document.querySelector(".highlight-center-2");

const swiperGames = {
  1: new Swiper(".swiper-games-1", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    spaceBetween: 22,
    navigation: {
      nextEl: ".swiper-games-1-button-next",
      prevEl: ".swiper-games-1-button-prev",
    },
  }),
  2: new Swiper(".swiper-games-2", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    spaceBetween: 22,
    navigation: {
      nextEl: ".swiper-games-2-button-next",
      prevEl: ".swiper-games-2-button-prev",
    },
  }),
  3: new Swiper(".swiper-games-3", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    spaceBetween: 22,
    navigation: {
      nextEl: ".swiper-games-3-button-next",
      prevEl: ".swiper-games-3-button-prev",
    },
  }),
  4: new Swiper(".swiper-games-4", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    spaceBetween: 22,
    navigation: {
      nextEl: ".swiper-games-4-button-next",
      prevEl: ".swiper-games-4-button-prev",
    },
  }),
};

const swiperSlots = {
  1: new Swiper(".swiper-slots-1", {
    slidesPerView: "auto",
    loop: true,
    direction: "horizontal",
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-slots-1-button-next",
      prevEl: ".swiper-slots-1-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "vertical",
      },
      840: {
        slidesPerView: "auto",
        spaceBetween: 24,
        direction: "horizontal",
      },
    },
  }),
  2: new Swiper(".swiper-slots-2", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 24,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-slots-2-button-next",
      prevEl: ".swiper-slots-2-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "vertical",
      },
      840: {
        slidesPerView: "auto",
        spaceBetween: 24,
        direction: "horizontal",
      },
    },
  }),
  3: new Swiper(".swiper-slots-3", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 24,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-slots-3-button-next",
      prevEl: ".swiper-slots-3-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "vertical",
      },
      840: {
        slidesPerView: "auto",
        spaceBetween: 24,
        direction: "horizontal",
      },
    },
  }),
  4: new Swiper(".swiper-slots-4", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 24,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-slots-4-button-next",
      prevEl: ".swiper-slots-4-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "vertical",
      },
      840: {
        slidesPerView: "auto",
        spaceBetween: 24,
        direction: "horizontal",
      },
    },
  }),
  5: new Swiper(".swiper-slots-5", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 24,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-slots-5-button-next",
      prevEl: ".swiper-slots-5-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "vertical",
      },
      840: {
        slidesPerView: "auto",
        spaceBetween: 24,
        direction: "horizontal",
      },
    },
  }),
};

const swiperButton1 = new Swiper(".swiper-btn-1", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  breakpoints: { 0: { centeredSlides: true }, 1100: { centeredSlides: false } },

  on: {
    slideChange: function () {
      updateHighlight(this, swiperGames, highlight, ".games__btn", ".games__slider");
    },
    init: function () {
      updateHighlight(this, swiperGames, highlight, ".games__btn", ".games__slider");
    },
  },
});

const swiperButton2 = new Swiper(".swiper-btn-2", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
    breakpoints: {
    320: {
       enabled: false,
         spaceBetween: 0,
    },
    840: {
       enabled: true,
         spaceBetween: 20,
    },
  },
  on: {
    slideChange: function () {
      updateHighlight(this, swiperSlots, highlight2, ".slots__btn", ".slots__slider");
    },
    init: function () {
      updateHighlight(this, swiperSlots, highlight2, ".slots__btn", ".slots__slider");
    },
  },
});

function updateHighlight(swiper, swiperMap, highlightEl, btnSelector, sliderSelector) {
  const isDesktop = window.innerWidth > 1100;
  const centerSlide = swiper.slides[swiper.activeIndex];
  if (!centerSlide) return;

  const btn = centerSlide.querySelector(btnSelector);
  if (!btn) return;

  if (!isDesktop) {
    document.querySelectorAll(btnSelector).forEach((b) => {
      b.classList.toggle("active", b === btn);
    });
    highlightEl.style.width = 182 + "px";

    const target = btn.dataset.target;
    document.querySelectorAll(sliderSelector).forEach((s) => {
      const isActive = s.dataset.id === target;
      s.classList.toggle("active", isActive);

      if (isActive && swiperMap[target]) {
        const sSwiper = swiperMap[target];
        sSwiper.update(); // пересчёт размеров
        if (sSwiper.params.loop) sSwiper.slideToLoop(0, 0);
        else sSwiper.slideTo(0, 0);
        if (sSwiper.navigation) sSwiper.navigation.update();
      }
    });
  }
}

function setupSliderTabs(blockSelector, btnSelector, sliderSelector, swiperMap) {
  document.querySelectorAll(blockSelector).forEach((block) => {
    const buttons = block.querySelectorAll(btnSelector);
    const sliders = block.querySelectorAll(sliderSelector);

    if (window.innerWidth <= 840) {
      let defaultId;

      if (block.classList.contains("slots__box")) {
        defaultId = "6";
      } else if (block.classList.contains("games__box")) {
        defaultId = buttons[0]?.dataset.target; 
      }

      if (!defaultId) return;

      buttons.forEach(b => b.classList.remove("active"));
      sliders.forEach(s => s.classList.remove("active"));

      const btn = block.querySelector(
        `${btnSelector}[data-target="${defaultId}"]`
      );
      const slider = block.querySelector(
        `${sliderSelector}[data-id="${defaultId}"]`
      );

      if (btn) btn.classList.add("active");
      if (slider) slider.classList.add("active");

      if (swiperMap[defaultId]) {
        swiperMap[defaultId].update();
      }

      return;
    }

    if (window.innerWidth <= 1100) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.target;

        buttons.forEach(b => b.classList.remove("active"));
        sliders.forEach(s => s.classList.remove("active"));

        btn.classList.add("active");

        const slider = block.querySelector(
          `${sliderSelector}[data-id="${target}"]`
        );
        if (slider) slider.classList.add("active");

        if (swiperMap[target]) {
          const sSwiper = swiperMap[target];
          sSwiper.update();
          if (sSwiper.params.loop) sSwiper.slideToLoop(0, 0);
          else sSwiper.slideTo(0, 0);
          if (sSwiper.navigation) sSwiper.navigation.update();
        }
      });
    });
  });
}

function initTabs() {
  setupSliderTabs(".games__box", ".games__btn", ".games__slider", swiperGames);
  setupSliderTabs(".slots__box", ".slots__btn", ".slots__slider", swiperSlots);
}

initTabs();
window.addEventListener("resize", initTabs);



//
const swiperInfo1 = new Swiper(".swiper-info-1", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      centeredSlides: true,
    },

    1110: {
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: ".swiper-info-1-button-next",
    prevEl: ".swiper-info-1-button-prev",
  },
});
const swiperDemo1 = new Swiper(".swiper-demo-1", {
  spaceBetween: 20,
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
});
const swiperProvider1 = new Swiper(".swiper-provider-1", {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: "auto",
      centeredSlides: true,
    },

    1200: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: ".swiper-provider-1-button-next",
    prevEl: ".swiper-provider-1-button-prev",
  },
});
$(".marquee").marquee({
  duration: 20000,
  gap: 0,
  delayBeforeStart: 0,
  direction: "left",
  duplicated: true,
});

let swiperOnline = null;
let swiperBonuses = null;

function initSwiperOnline() {
  const selector = ".swiper-online-1";
  const selectorBonuses = ".swiper-bonuses-1";

  if (window.innerWidth <= 1110 && !swiperOnline) {
    swiperOnline = new Swiper(selector, {
      spaceBetween: 20,
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
    });
  }

  if (window.innerWidth > 1110 && swiperOnline) {
    swiperOnline.destroy(true, true);
    swiperOnline = null;
  }

  if (window.innerWidth <= 1110 && !swiperBonuses) {
    swiperBonuses = new Swiper(selectorBonuses, {
      spaceBetween: 10,
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
    });
  }

  if (window.innerWidth > 1110 && swiperBonuses) {
    swiperBonuses.destroy(true, true);
    swiperBonuses = null;
  }
}

initSwiperOnline();
window.addEventListener("resize", initSwiperOnline);
const burger = document.getElementById("mobBurger");
const mainMenu = document.getElementById("mobMenuMain");
const subMenus = document.querySelectorAll(".mob-submenu");
const subOpenItems = document.querySelectorAll(".sub-open");
const backBtns = document.querySelectorAll(".mob-submenu-header.back-btn");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mainMenu.classList.toggle("active");
  subMenus.forEach((sm) => sm.classList.remove("active"));
});

subOpenItems.forEach((item) => {
  item.addEventListener("click", () => {
    mainMenu.classList.remove("active");
    const sub = document.getElementById(`submenu-${item.dataset.sub}`);
    sub.classList.add("active");
  });
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.remove("active");
    mainMenu.classList.add("active");
  });
});
//

document.querySelectorAll(".faq__item").forEach((details) => {
  const content = details.querySelector(".faq__content");

  details.addEventListener("toggle", () => {
    if (details.open) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});
//
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".header__btn-claim");
  const box = document.querySelector(".header__box-gift");

  btn.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});
//
