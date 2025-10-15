const btn = document.querySelector("#btn_id");
const screen = document.querySelector("#screen_id");
const delete1 = document.querySelector("#delete_id");
btn.addEventListener("click", () => {
  screen.classList.toggle("show");
  screen.classList.toggle("hidden");
});

delete1.addEventListener("click", () => {
  screen.classList.toggle("show");
  screen.classList.toggle("hidden");
});
