const mobile = document.querySelector("#mobile");

const keyframes = [
  { opacity: 0, transform: "translateY(30px)" },
  { opacity: 1, transform: "translateY(0px)" },
];

const option = {
  duration: 500,
  fill: "forwards",
};

const ob = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(keyframes, option);
        // observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null, // viewport 기준
    rootMargin: "-50% 0px -50% 0px", // 상하 마진
  }
);

ob.observe(mobile);
