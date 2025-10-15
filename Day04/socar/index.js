const hamburger = document.querySelector("#hamburger_btn");
const screen = document.querySelector("#screen_id");
const close = document.querySelector("#close");
const TextMove = document.querySelector("#TextMove");
const TextMove_1 = document.querySelector("#TextMove_1");
const observer_1 = document.querySelector("#observer_1");
const keyframes = [
  {
    opacity: 0,
    transform: "translateX(-50%) translateY(-50%) translateY(100px)",
  },
  {
    opacity: 1,
    transform: "translateX(-50%) translateY(-50%) translateY(0px)",
  },
];
const keyframes_1 = [
  {
    opacity: 0,
    transform: "translateX(-50%) translateY(-50%) translateY(100px)",
  },
  {
    opacity: 0,
    transform: "translateX(-50%) translateY(-50%) translateY(50px)",
  },
  {
    opacity: 1,
    transform: "translateX(-50%) translateY(-50%) translateY(0px)",
  },
];
const option_fast = {
  duration: 1000,
  easing: "ease",
  fill: "forwards",
};
const option_slow = {
  duration: 2000,
  easing: "ease",
  fill: "forwards",
};
hamburger.addEventListener("click", () => {
  screen.classList.toggle("screenShow");
});
close.addEventListener("click", () => {
  screen.classList.toggle("screenShow");
});

TextMove.animate(keyframes, option_fast);
TextMove_1.animate(keyframes_1, option_slow);

const ob = new IntersectionObserver((targets) => {
  targets.forEach((v) => {
    if (v.isIntersecting) {
      observer_1.animate(keyframes, option_fast);
    }
  });
});
ob.observe(observer_1);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
