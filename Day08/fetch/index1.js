const APIKEY = "b6174bd8656158be4d43585de68bbd71";
const lat = 34.0522;
const long = -118.2437;
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
)
  .then((res) => res.json())
  .then(console.log);
