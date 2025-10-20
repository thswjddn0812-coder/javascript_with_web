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

const musicData = [
  {
    title: "whiplash",
    img: "https://kpop-center.com/wp-content/uploads/2024/09/aespa_main-2.png",
    url: "music/WhiplashMusic.mp3",
    video: "video/위플래쉬",
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
    console.log(selectedDifficulty);
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
    if (selectedDifficulty == "쉬움😃") {
      gameInterval = setInterval(spawnCircle, 800);
    } else if (selectedDifficulty == "중간🤔") {
      gameInterval = setInterval(spawnCircle, 600);
    } else if (selectedDifficulty == "어려움🥵") {
      gameInterval = setInterval(spawnCircle, 400);
    }
    // 게임 루프 시작
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
  circle.style.background = `radial-gradient(circle at 30% 30%, #a29bfe, #6c5ce7)`;
  circle.style.boxShadow =
    "0 4px 15px rgba(108, 92, 231, 0.6), 0 0 10px rgba(255, 255, 255, 0.2)";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.transition = "transform 0.3s ease-in-out";
  circle.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(1.2) rotate(10deg)";
  });
  circle.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1) rotate(0deg)";
  });

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
    const shapeDiv = document.createElement("div");
    shapeDiv.style.position = "absolute";
    shapeDiv.style.left = `${x}px`;
    shapeDiv.style.top = `${y}px`;
    shapeDiv.style.width = "50px";
    shapeDiv.style.height = "50px";
    shapeDiv.style.display = "flex";
    shapeDiv.style.alignItems = "center";
    shapeDiv.style.justifyContent = "center";
    shapeDiv.style.color = "white";
    shapeDiv.style.fontWeight = "bold";
    shapeDiv.style.fontSize = "10px";

    // 모양과 색 지정
    if (resultText === "Perfect") {
      shapeDiv.style.backgroundColor = "gold";
      shapeDiv.style.clipPath =
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; // 별
    } else if (resultText === "Good") {
      shapeDiv.style.backgroundColor = "lightgreen";
      shapeDiv.style.borderRadius = "50%"; // 동그라미
    } else {
      shapeDiv.style.backgroundColor = "red";
      shapeDiv.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"; // 삼각형
    }

    // 살짝 확대 애니메이션
    shapeDiv.style.transform = "scale(0)";
    shapeDiv.style.transition =
      "transform 0.3s ease-out, opacity 0.5s ease-out";
    gameArea.appendChild(shapeDiv);

    // 등장 애니메이션
    requestAnimationFrame(() => {
      shapeDiv.style.transform = "scale(1.2)";
    });

    // 사라지기
    setTimeout(() => {
      shapeDiv.style.opacity = 0;
      setTimeout(() => shapeDiv.remove(), 300);
    }, 700);
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
function endGame() {
  // 게임 루프와 타이머 정지
  clearInterval(timerInterval);
  clearInterval(gameInterval);
  bgm.pause();

  // 게임 화면 초기화
  gameArea.innerHTML = "";

  // 점수와 메시지 표시
  const endDiv = document.createElement("div");
  endDiv.style.position = "absolute";
  endDiv.style.top = "50%";
  endDiv.style.left = "50%";
  endDiv.style.transform = "translate(-50%, -50%)";
  endDiv.style.textAlign = "center";
  endDiv.style.background = "rgba(0,0,0,0.7)";
  endDiv.style.color = "white";
  endDiv.style.padding = "30px 50px";
  endDiv.style.borderRadius = "20px";
  endDiv.style.fontSize = "24px";
  endDiv.style.fontWeight = "bold";
  endDiv.style.boxShadow = "0 0 20px rgba(255,255,255,0.5)";
  endDiv.innerHTML = `
    <div>고생하셨습니다!</div>
    <div>최종 점수: ${score}</div>
    <button id="restartBtn" style="
      margin-top:20px;
      padding:10px 20px;
      font-size:16px;
      border:none;
      border-radius:10px;
      cursor:pointer;
      background-color: #6c5ce7;
      color:white;
    ">메인으로 돌아가기</button>
  `;
  gameScreen.appendChild(endDiv);

  // 버튼 클릭 시 메인 메뉴로
  document.getElementById("restartBtn").addEventListener("click", () => {
    endDiv.remove();
    gameScreen.classList.remove("active");
    mainMenu.classList.add("active");
  });
}
