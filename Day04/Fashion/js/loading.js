
const loading = document.querySelector("#loading");
const loadingText = document.querySelector("#loadingText");
const loadingScreen = document.querySelector("#loadingScreen");

const keyframes = [
  { opacity: 1, transform: "translateY(0%)" },
  { opacity: 0.5, transform: "translateY(-100%)" },
];

const createAnimationOptions = (delay = 0) => ({
  duration: 2000,
  easing: "ease",
  fill: "forwards",
  delay,
});

export const initLoadingAnimation = () => {
  window.addEventListener("load", () => {
    loadingText.animate([{ opacity: 1 }, { opacity: 0 }], createAnimationOptions());
    loading.animate(keyframes, createAnimationOptions(1000));
    loadingScreen.animate(keyframes, createAnimationOptions());
  });
};
