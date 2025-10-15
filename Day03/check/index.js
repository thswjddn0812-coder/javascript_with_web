const img_1 = document.querySelector("#img1");
const img_2 = document.querySelector("#img2");
const img_3 = document.querySelector("#img3");
const img_4 = document.querySelector("#img4");
const backimg1 = document.querySelector("#backimg1");
const backimg2 = document.querySelector("#backimg2");
const backimg3 = document.querySelector("#backimg3");
const backimg4 = document.querySelector("#backimg4");

// const background = document.querySelector("background");
img_1.addEventListener("click", () => {
  backimg4.classList.add("hidden");
  backimg3.classList.add("hidden");
  backimg2.classList.add("hidden");
  backimg1.classList.toggle("hidden");
});
img_2.addEventListener("click", () => {
  backimg4.classList.add("hidden");
  backimg3.classList.add("hidden");
  backimg1.classList.add("hidden");
  backimg2.classList.toggle("hidden");
});
img_3.addEventListener("click", () => {
  backimg4.classList.add("hidden");
  backimg1.classList.add("hidden");
  backimg2.classList.add("hidden");
  backimg3.classList.toggle("hidden");
});
img_4.addEventListener("click", () => {
  backimg3.classList.add("hidden");
  backimg2.classList.add("hidden");
  backimg1.classList.add("hidden");
  backimg4.classList.toggle("hidden");
});
