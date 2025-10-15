const first = document.querySelector("#first");
const second = document.querySelector("#second");
const Third = document.querySelector("#Third");

const arr = [first, second, Third];

arr.forEach((v, i) => {
  v.animate(keyframes, {
    duration: 300,
    fill: "forwards",
    delay: 300 * i,
  });
});
