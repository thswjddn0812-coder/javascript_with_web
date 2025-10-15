const minus = document.querySelector("#minus");
const num = document.querySelector("#num");
const plus = document.querySelector("#plus");
minus.addEventListener("click", () => {
  num.innerText = +num.innerText - 1;
  if (+num.innerText <= 0) {
    minus.classList.add("overzero");
    num.innerText = 0;
  } else {
    minus.classList.remove("overzero");
  }
  if (+num.innerText > 5) {
    plus.classList.add("overFive");
  } else {
    plus.classList.remove("overFive");
  }
});
plus.addEventListener("click", () => {
  //   num.innerText = +num.innerText + 1;
  //   plus.className = +num.innerText > 5 ? "myButton overFive" : "myButton";
  num.innerText = +num.innerText + 1;
  if (+num.innerText < 0) {
    minus.classList.add("overzero");
    num.innerText = 0;
  } else {
    minus.classList.remove("overzero");
  }

  if (+num.innerText > 5) {
    plus.classList.add("overFive");
  } else {
    plus.classList.remove("overFive");
  }
});
