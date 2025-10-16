const Launch = document.querySelector("#Launch");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let time = 5;
  const a = setInterval(() => {
    time--;
    Launch.innerText = `🚀${time}초 전`;
    if (time == 0) {
      clearInterval(a);
      Launch.innerText = `🔥발싸`;
      time = 5;
    }
  }, 1000);
});
