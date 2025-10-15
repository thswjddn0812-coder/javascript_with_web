const contents = document.querySelector("#contents");
const topic = document.querySelector("#topic");
const desc = document.querySelector("#desc");
const background = document.querySelector("#background");

const data = [
  { menu_1: "Home", menu_2: "homeasdsadsadsd", color: "red" },
  { menu_1: "News", menu_2: "newsasdsadasdsdsa", color: "blue" },
  { menu_1: "Contact", menu_2: "contactasdsadsadsadas", color: "green" },
  { menu_1: "About", menu_2: "aboutasdasdsadasd", color: "yellow" },
];
data.forEach((v) => {
  const newLi = document.createElement("li");
  newLi.innerText = v.menu_1;
  newLi.id.innerText = v.menu_2;
  newLi.addEventListener("click", () => {
    newLi.classList.toggle(v.color);
    topic.innerText = v.menu_1;
    desc.innerText = v.menu_2;
    background.classList.toggle(v.color);
  });
  contents.appendChild(newLi);
});
