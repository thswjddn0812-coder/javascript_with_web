const Bupyeong = document.querySelector("#Bupyeong");
const Bern = document.querySelector("#Bern");
const Tokyo = document.querySelector("#Tokyo");
const LosAngeles = document.querySelector("#LosAngeles");
const London = document.querySelector("#London");
const box = document.querySelector(".box");
const time = document.querySelector("#time");
const APIKEY = "b6174bd8656158be4d43585de68bbd71";
let timeIntervalId = null;

const WorldWeather = (place, lat, long, loacle, timeZone1) => {
  place.addEventListener("click", () => {
    if (timeIntervalId) clearInterval(timeIntervalId);
    const latitude = lat;
    const longitude = long;
    timeIntervalId = setInterval(() => {
      const a = new Date();
      const loc = a.toLocaleString(loacle, { timeZone: timeZone1 });
      time.innerText = loc;
    }, 1000);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((v) => {
        const Weather = v.weather[0].main;
        box.style.backgroundImage = `url(${weatherImageObj[Weather]})`;
      });
  });
};
const weatherImageObj = {
  Rain: "https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg",
  Mist: "https://cdn.pixabay.com/photo/2020/10/12/14/11/meadow-5648849_1280.jpg",
  Sunny:
    "https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg",
  Clouds: "https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_1280.jpg",
  Clear:
    "https://cdn.pixabay.com/photo/2025/08/21/13/58/grassland-9787999_1280.jpg",
};

WorldWeather(Bupyeong, 37.5072, 126.7218, "ko-KR", "Asia/Seoul");
WorldWeather(Bern, 46.9481, 7.4474, "de-CH", "Europe/Zurich");
WorldWeather(Tokyo, 35.6895, 139.6917, "ja-JP", "Asia/Tokyo");
WorldWeather(London, 51.5074, -0.1278, "en-GB", "Europe/London");
WorldWeather(LosAngeles, 34.0522, -118.2437, "en-US", "Europe/London");

// Bupyeong.addEventListener("click", () => {
//   if (timeIntervalId) clearInterval(timeIntervalId);
//   const lat = 37.5072;
//   const long = 126.7218;
//   timeIntervalId = setInterval(() => {
//     const a = new Date();
//     const locale = a.toLocaleString();
//     time.innerText = locale;
//   }, 1000);
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
//   )
//     .then((res) => res.json())
//     .then((v) => {
//       const Weather = v.weather[0].main;
//       box.backgroundImage;
//       if (Weather === "Rain") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg")';
//       } else if (Weather === "Mist") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2020/10/12/14/11/meadow-5648849_1280.jpg")';
//       } else if (Weather === "Sunny") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg")`;
//       } else if (Weather === "Clouds") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_1280.jpg")`;
//       } else if (Weather === "Clear") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2025/08/21/13/58/grassland-9787999_1280.jpg")`;
//       }
//     });
// });

// Bern.addEventListener("click", () => {
//   if (timeIntervalId) clearInterval(timeIntervalId);
//   const lat = 46.9481;
//   const long = 7.4474;
//   timeIntervalId = setInterval(() => {
//     const a = new Date();
//     const bernTime = a.toLocaleString("de-CH", { timeZone: "Europe/Zurich" });
//     time.innerText = bernTime;
//   }, 1000);
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
//   )
//     .then((res) => res.json())
//     .then((v) => {
//       const Weather = v.weather[0].main;
//       if (Weather === "Rain") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg")';
//       } else if (Weather === "Mist") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2020/10/12/14/11/meadow-5648849_1280.jpg")';
//       } else if (Weather === "Sunny") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg")`;
//       } else if (Weather === "Clouds") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_1280.jpg")`;
//       } else if (Weather === "Clear") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2025/08/21/13/58/grassland-9787999_1280.jpg")`;
//       }
//     });
// });

// Tokyo.addEventListener("click", () => {
//   if (timeIntervalId) clearInterval(timeIntervalId);
//   const lat = 35.6895;
//   const long = 139.6917;
//   timeIntervalId = setInterval(() => {
//     const a = new Date();
//     const tokyoTime = a.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
//     time.innerText = tokyoTime;
//   }, 1000);
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
//   )
//     .then((res) => res.json())
//     .then((v) => {
//       const Weather = v.weather[0].main;
//       if (Weather === "Rain") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg")';
//       } else if (Weather === "Mist") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2020/10/12/14/11/meadow-5648849_1280.jpg")';
//       } else if (Weather === "Sunny") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg")`;
//       } else if (Weather === "Clouds") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_1280.jpg")`;
//       } else if (Weather === "Clear") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2025/08/21/13/58/grassland-9787999_1280.jpg")`;
//       }
//     });
// });

// London.addEventListener("click", () => {
//   if (timeIntervalId) clearInterval(timeIntervalId);
//   const lat = 51.5074;
//   const long = -0.1278;
//   timeIntervalId = setInterval(() => {
//     const a = new Date();
//     const londonTime = a.toLocaleString("en-GB", { timeZone: "Europe/London" });
//     time.innerText = londonTime;
//   }, 1000);
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
//   )
//     .then((res) => res.json())
//     .then((v) => {
//       const Weather = v.weather[0].main;
//       if (Weather === "Rain") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg")';
//       } else if (Weather === "Mist") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2020/10/12/14/11/meadow-5648849_1280.jpg")';
//       } else if (Weather === "Sunny") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg")`;
//       } else if (Weather === "Clouds") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_1280.jpg")`;
//       } else if (Weather === "Clear") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2025/08/21/13/58/grassland-9787999_1280.jpg")`;
//       }
//     });
// });

// LosAngeles.addEventListener("click", () => {
//   if (timeIntervalId) clearInterval(timeIntervalId);
//   const lat = 34.0522;
//   const long = -118.2437;
//   timeIntervalId = setInterval(() => {
//     const a = new Date();
//     const laTime = a.toLocaleString("en-US", {
//       timeZone: "America/Los_Angeles",
//     });
//     time.innerText = laTime;
//   }, 1000);
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
//   )
//     .then((res) => res.json())
//     .then((v) => {
//       const Weather = v.weather[0].main;
//       if (Weather === "Rain") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg")';
//       } else if (Weather === "Mist") {
//         box.style.backgroundImage =
//           'url("https://cdn.pixabay.com/photo/2020/10/12/14/11/meadow-5648849_1280.jpg")';
//       } else if (Weather === "Sunny") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg")`;
//       } else if (Weather === "Clouds") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2016/07/03/12/09/sky-1494656_1280.jpg")`;
//       } else if (Weather === "Clear") {
//         box.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2025/08/21/13/58/grassland-9787999_1280.jpg")`;
//       }
//     });
// });
