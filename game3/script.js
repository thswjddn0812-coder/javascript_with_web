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

let selectedMusic = null;
let selectedDifficulty = null;
let score = 0;
let timeCount = 0;
let timerInterval;
let gameInterval;

// 임시 인기차트
const musicData = [
  {
    title: "whiplash",
    img: "https://kpop-center.com/wp-content/uploads/2024/09/aespa_main-2.png",
    url: "music/WhiplashMusic.mp3",
  },
  {
    title: "Spicy",
    img: "https://m.media-amazon.com/images/M/MV5BYzZiNTQ0NjQtZGY1ZS00NTMzLWFjMTEtMjEwODQyYThiYTE1XkEyXkFqcGc@._V1_FMjpg_UY2560_.jpg",
    url: "music/SpicyMusic.mp3",
  },
  {
    title: "Next Level",
    img: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/05/18/CY5aSs3PxF8f637569379930872110.JPG",
    url: "music/Next LevelMusic.mp3",
  },
  {
    title: "Black Mamba",
    img: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/11/17/cccb52da-28bb-11eb-bf26-f2b76f37a526_image_hires_181902.jpg?itok=Fx3MdCcb&v=1605608350",
    url: "music/Black MambaMusic.mp3",
  },
  {
    title: "Dreams come True",
    img: "https://www.rappler.com/tachyon/2021/12/aespa-Dreams-come-true-mv.jpg?resize=1698%2C954&zoom=1",
    url: "music/Dreams Come TrueMusic.mp3",
  },
];

// 음악 리스트 생성
musicData.forEach((music, i) => {
  const item = document.createElement("div");
  item.className = "musicItem";
  item.innerHTML = `<img src="${music.img}" alt=""><span>${music.title}</span>`;
  item.addEventListener("click", () => {
    selectedMusic = music;
    mainMenu.classList.remove("active");
    difficultyScreen.classList.add("active");
  });
  musicList.appendChild(item);
});

startBtn.addEventListener("click", () => {
  // 그냥 메인 메뉴에서 선택 안하면 리스트 보여주기
  musicList.scrollIntoView({ behavior: "smooth" });
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
  scoreBoard.innerText = `Score: ${score}`;

  // 배경
  gameScreen.style.backgroundImage = `url(${selectedMusic.img})`;
  gameScreen.style.backgroundSize = "cover";
  gameScreen.style.backgroundPosition = "center";

  // 음악 준비
  bgm.src = selectedMusic.url;
  bgm.load();

  // 음악 메타데이터 로드 완료되면 실행
  bgm.addEventListener("loadedmetadata", () => {
    // 음악 길이를 초 단위로 가져옴
    timeCount = Math.floor(bgm.duration);
    timeBoard.innerText = `Time: ${timeCount}`;

    // 음악 재생
    bgm.play();

    // 타이머 시작
    timerInterval = setInterval(() => {
      timeCount--;
      timeBoard.innerText = `Time: ${timeCount}`;
      if (timeCount <= 0) {
        endGame();
      }
    }, 1000);

    // 게임 루프 시작
    gameInterval = setInterval(spawnCircle, 700);
  });
}

function spawnCircle() {
  const circle = document.createElement("div");
  const border = document.createElement("div");

  const size = 50;
  const rect = gameArea.getBoundingClientRect();
  const x = Math.random() * (rect.width - size);
  const y = Math.random() * (rect.height - size);

  // circle 스타일
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.backgroundColor = "blueviolet";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  // border 스타일
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
  }, 16); // 약 60fps
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

    // 판정 텍스트 표시
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

    // 클릭 후 원과 테두리 제거
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
  gameScreen.classList.remove("active");
  mainMenu.classList.add("active");
}
