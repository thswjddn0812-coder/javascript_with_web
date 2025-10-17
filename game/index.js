let size = 200;
const minSize = 50;
const speed = 2;
const border = document.querySelector("#circleBorder");
const circle = document.querySelector("#circle");

function animate() {
  size -= speed;
  if (size <= minSize) size = 200;
  border.style.width = size + "px";
  border.style.height = size + "px";
  border.style.left = `calc(50% - ${size / 2}px)`;
  border.style.top = `calc(50% - ${size / 2}px)`;
  requestAnimationFrame(animate);
}
circle.addEventListener("click", () => {
  if (size >= 50 && size <= 70) {
    console.log("포풱트");
    circle.style.display = "None";
    border.style.display = "None";
  } else {
    console.log("ㄲㅂ");
    circle.style.display = "None";
    border.style.display = "None";
  }
});
animate();

//   const borderRect = border.getBoundingClientRect();
//   const circleRect = circle.getBoundingClientRect();
//   const diff = Math.abs(borderRect.width - circleRect.width);
