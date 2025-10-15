export function initScrollAnimations() {
  const conceptDiv__h1 = document.querySelector("#conceptDiv__h1");
  const conceptDiv__p = document.querySelector("#conceptDiv__p");
  const Third__flex_2_grid = document.querySelector("#Third__flex_2_grid");

  const keyframes__down_up = [
    { filter: "blur(3px)", opacity: 0, transform: "translateY(50%)" },
    { opacity: 1, transform: "translateY(0%)" },
  ];
  const option2 = { duration: 2000, easing: "ease", fill: "forwards" };

  const ob = new IntersectionObserver((targets, me) => {
    targets.forEach((v) => {
      if (v.isIntersecting) {
        v.target.animate(keyframes__down_up, option2);
        me.unobserve(v.target);
      }
    });
  });

  [conceptDiv__h1, conceptDiv__p, Third__flex_2_grid].forEach(el => {
    if (el) ob.observe(el);
  });
}
