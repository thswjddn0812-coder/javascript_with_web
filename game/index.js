const gameArea = document.querySelector("#gameArea");
const scoreBoard = document.querySelector("#scoreBoard");
const timeBoard = document.querySelector("#timeBoard");
const startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", () => {
  startGame();
});
startGame(() => {
  const startScore = 0;
  let score = 0;
  const startTime = 15;
  let timeCount = startTime;
  startBtn.style.display = "none";
  timerInterval = setInterval(() => {
    timeCount--;
    if (timeCount == 0) {
      clearInterval(timerInterval);
      alert(`게임 종료 점수는 ${score}`);
    }
  }, 1000);
  gameInterval = setInterval(spawnCircle, 700);
});
spawnCircle(() => {
  const circle = document.createElement("div");
  const border = document.createElement("div");
  gameArea.appendChild(circle);
  gameArea.appendChild(border);
  const size = 50;
  const rect = gameArea.getBoundingClientRect();
  const x = Math.random() * (rect.width - size);
  const y = Math.random() * (rect.height - size);
  circle.style.width = border.style.width = `${size}px`;
  circle.style.height = border.style.height = `${size}px`;
  circle.style.left = border.style.left = `${x}px`;
  circle.style.top = border.style.top = `${y}px`;
  //
  let scale = 2;
  const downSpeed = 0.02;
  const animation = setInterval(() => {
    scale -= downSpeed;
    border.style.transform = `scale(${scale})`;
    if (scale <= 1) {
      clearInterval(animation);
      gameArea.removeChild(border);
      gameArea.removeChild(circle);
    }
  });
  circle.addEventListener("click", () => {
    if (scale >= 1 && scale < 1.2) {
      const perfectPoint = 200;
      score += perfectPoint;
      scoreBoard.innerText = `Score:${score}`;
      const perfect = document.createElement("div");
      perfect.innerText = "perfect";
      gameArea.appendChild(perfect);
      setTimeout(() => perfect.remove(), 700);
      perfect.style.position = "absolute";
      perfect.style.left = `${x + 60}px`;
      perfect.style.top = `${y}px`;
      gameArea.removeChild(border);
      gameArea.removeChild(circle);
      //
    } else if (scale >= 1.2 && scale < 1.5) {
      const goodPoint = 100;
      score += goodPoint;
      scoreBoard.innerText = `Score:${score}`;
      const good = document.createElement("div");
      good.innerText = "good";
      gameArea.appendChild(good);
      setTimeout(() => good.remove(), 700);
      good.style.position = "absolute";
      good.style.left = `${x + 60}px`;
      good.style.top = `${y}px`;
      gameArea.removeChild(border);
      gameArea.removeChild(circle);
      //
    } else if (scale <= 1.8 && scale >= 1.7) {
      const missPoint = -100;
      score += missPoint;
      scoreBoard.innerText = `Score:${score}`;
      const miss = document.createElement("div");
      miss.innerText = "Miss";
      gameArea.appendChild(miss);
      setTimeout(() => miss.remove(), 700);
      miss.style.position = "absolute";
      miss.style.left = `${x + 60}px`;
      miss.style.top = `${y}px`;
      gameArea.removeChild(border);
      gameArea.removeChild(circle);
    }
  });
});
