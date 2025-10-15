const makeLi = document.querySelector("#makeLi");
const couple = document.querySelector("#couple");
const imgfile = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

imgfile.forEach((v) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  makeLi.appendChild(li);
  li.appendChild(img);
  img.src = v;
  li.addEventListener("click", () => {
    couple.src = v;
  });
});
