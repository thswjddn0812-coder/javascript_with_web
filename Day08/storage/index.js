const save = document.querySelector("#save");
const view = document.querySelector("#view");
const candyInput = document.querySelector("#candyInput");
save.addEventListener("click", () => {
  if (localStorage.getItem("candylist")) {
    const list = localStorage.getItem("candylist");
    localStorage.setItem("candylist", list + "," + candyInput.value);
    candyInput.value = "";
  } else {
    localStorage.setItem("candylist", candyInput.value);
    candyInput.value = "";
  }
});

view.addEventListener("click", () => {
  const list = localStorage.getItem("candylist");
  console.log(list);
});
