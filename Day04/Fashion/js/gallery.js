// gallery.js
export function initGallery() {
  const mainImg = document.querySelector("#Third__flex_img");
  const thumbImages = document.querySelectorAll(".Third__flex_2_grid>img");

  thumbImages.forEach((thumb) => {
    thumb.addEventListener("mouseover", (e) => {
      mainImg.src = e.target.src;
    });
  });
}
