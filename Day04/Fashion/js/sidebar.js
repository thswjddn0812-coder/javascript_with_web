export function initSidebar() {
  const hamburger = document.querySelector("#hamburger");
  const sidebar = document.querySelector("#sidebar");
  const sidebarText = document.querySelectorAll(".sidebar__box>li");
  const Xbutton = document.querySelector("#Xbutton");

  const keyframes__right_left = [
    { opacity: 1, transform: "translateX(100%)" },
    { opacity: 1, transform: "translateX(0%)" },
  ];
  const keyframes__left_right = [
    { opacity: 1, transform: "translateX(0%)" },
    { opacity: 1, transform: "translateX(100%)" },
  ];
  const option2 = { duration: 2000, easing: "ease", fill: "forwards" };

  hamburger.addEventListener("click", () => {
    sidebar.animate(keyframes__right_left, option2);
    sidebarText.forEach((v, i) => {
      v.animate([{ filter: "blur(100px)", opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        fill: "forwards",
        delay: 200 * i,
      });
    });
  });

  Xbutton.addEventListener("click", () => {
    sidebar.animate(keyframes__left_right, option2);
  });
}
