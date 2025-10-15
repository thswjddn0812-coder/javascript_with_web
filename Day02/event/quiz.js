const btn_1 = document.createElement("button");
btn_1.innerText = "-";
btn_1.addEventListener("click", () => {
  if (span.innerText <= 0) {
    span.innerText = 0;
  } else {
    span.innerText--;
    span.innerText >= 11
      ? (span.style.color = "blue")
      : (span.style.color = "black");
  }
});
document.body.appendChild(btn_1);

const span = document.createElement("span");
span.innerText = 0;
document.body.appendChild(span);

const btn_3 = document.createElement("button");
btn_3.innerText = "+";
btn_3.addEventListener("click", () => {
  span.innerText++;
  span.innerText >= 11
    ? (span.style.color = "blue")
    : (span.style.color = "black");
});
document.body.appendChild(btn_3);
