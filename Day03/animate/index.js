const heading = document.querySelector("#heading");
const keyframes = [
  { opacity: 0, transform: "translateY(30px)" },
  { opacity: 1, transform: "translateY(1px)" },
];
const option = {
  duration: 3000,
  easing: "ease",
  iterations: Infinity,
};

heading.animate(keyframes, option);
