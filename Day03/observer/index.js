const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const keyframes = [
  { filter: "blur(100px)", transform: "translateY(30px)" },
  { opacity: 1, transform: "translateY(1px)" },
];
const option = {
  duration: 3000,
  easing: "ease",
};

const ob = new IntersectionObserver((targets, me) => {
  targets.forEach((v) => {
    if (v.isIntersecting) {
      v.target.animate(keyframes, option);
      me.unobserve(v.target);
    }
  });
});
ob.observe(lunch);
ob.observe(dinner);
