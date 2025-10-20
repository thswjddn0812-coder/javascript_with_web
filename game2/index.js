const mainMenu = document.getElementById("mainMenu");
const difficultyScreen = document.getElementById("difficultySelectScreen");
const gameScreen = document.getElementById("gameScreen");
const startBtn = document.getElementById("startBtn");
const musicList = document.getElementById("musicList");
const difficultyBtns = document.querySelectorAll(".difficultyBtn");
const gameArea = document.getElementById("gameArea");
const scoreBoard = document.getElementById("scoreBoard");
const timeBoard = document.getElementById("timeBoard");
const exitBtn = document.getElementById("exitBtn");
const bgm = document.getElementById("bgm");
const bgVideo = document.getElementById("bgVideo");

let selectedMusic = null;
let selectedDifficulty = null;
let score = 0;
let timeCount = 0;
let timerInterval;
let gameInterval;

// 음악 데이터 (이미지 또는 동영상)
const musicData = [
  {
    title: "Song A",
    img: "video/Whiplash_bg.mp4", // 배경 동영상
    url: "music/Whiplash.mp3",
  },
  {
    title: "Song B",
    img: "video/SongB_bg.mp4",
    url: "music/SongB.mp3",
  },
];

// 음악 리스트 생성
musicData.forEach((music) => {
  const item = document.createElement("div");
  item.className = "musicItem";
  item.innerHTML = `<img src="img_placeholder.png" alt=""><span>${music.title}</span>`;
  item.addEventListener("click", () => {
    selectedMusic = music;
    mainMenu.classList.remove("active");
    difficultyScreen.classList.add("active");
  });
  musicList.appendChild(item);
});

// 난이도 선택
difficultyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedDifficulty = btn.textContent;
    difficultyScreen.classList.remove("active");
    gameScreen.classList.add("active");
    startGame();
  });
});

// 게임 시작
function startGame() {
  gameArea.innerHTML = "";
  score = 0;
  timeCount = 30;
  scoreBoard.innerText = `Score: ${score}`;
  timeBoard.innerText = `Time: ${timeCount}`;

  // 배경 동영상
  bgVideo.src = selectedMusic.img;
  bgVideo.play();

  // 음악 시작
  bgm.src = selectedMusic.url;
  bgm.play();

  timerInterval = setInterval(() => {
    timeCount--;
    timeBoard.innerText = `Time: ${timeCount}`;
    if (timeCount <= 0) {
      clearInterval(timerInterval);
      clearInterval(gameInterval);
      bgm.pause();
      bgVideo.pause();
      alert(`게임 종료! 점수: ${score}`);
      backToMenu();
    }
  }, 1000);

  gameInterval = setInterval(spawnCircle, 1000);
}

// 원 생성
function spawnCircle() {
  const circle = document.createElement("div");
  const border = document.createElement("div");
  const size = 50;

  const rect = gameArea.getBoundingClientRect();
  const x = Math.random() * (rect.width - size);
  const y = Math.random() * (rect.height - size);

  // circle
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.backgroundColor = "blue";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  // border
  border.style.width = border.style.height = `${size}px`;
  border.style.border = "2px solid red";
  border.style.borderRadius = "50%";
  border.style.position = "absolute";
  border.style.left = `${x}px`;
  border.style.top = `${y}px`;
  border.style.transformOrigin = "center";

  gameArea.appendChild(border);
  gameArea.appendChild(circle);

  let scale = 3;
  const downSpeed = 0.02;

  const animation = setInterval(() => {
    scale -= downSpeed;
    border.style.transform = `scale(${scale})`;
    if (scale <= 1) {
      clearInterval(animation);
      if (circle.parentNode) circle.remove();
      if (border.parentNode) border.remove();
    }
  }, 16);

  circle.addEventListener("click", () => {
    if (!gameArea.contains(circle)) return;

    let resultText = "";
    let point = 0;

    if (scale >= 1 && scale < 1.2) {
      resultText = "Perfect";
      point = 200;
    } else if (scale >= 1.2 && scale < 1.5) {
      resultText = "Good";
      point = 100;
    } else {
      resultText = "Miss";
      point = -50;
    }

    score += point;
    scoreBoard.innerText = `Score: ${score}`;

    const judgement = document.createElement("div");
    judgement.innerText = resultText;
    judgement.style.position = "absolute";
    judgement.style.left = `${x + 60}px`;
    judgement.style.top = `${y}px`;
    judgement.style.color =
      resultText === "Perfect"
        ? "gold"
        : resultText === "Good"
        ? "lightgreen"
        : "red";
    gameArea.appendChild(judgement);
    setTimeout(() => judgement.remove(), 700);

    circle.remove();
    border.remove();
  });
}

// ESC 또는 메뉴 버튼
exitBtn.addEventListener("click", backToMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") backToMenu();
});

function backToMenu() {
  clearInterval(timerInterval);
  clearInterval(gameInterval);
  bgm.pause();
  bgVideo.pause();
  gameScreen.classList.remove("active");
  mainMenu;
}
