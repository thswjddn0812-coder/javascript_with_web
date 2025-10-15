console.log("오늘의 점메추");
setTimeout(() => {
  console.log("제육?햄버거?국밥?");
}, getRandomArbitrary(0, 5000));
setTimeout(() => {
  console.log("맛점하세용");
}, getRandomArbitrary(5000, 10000));

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
