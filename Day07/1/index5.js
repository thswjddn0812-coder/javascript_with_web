//라면 끓이기 프로그램
//1.물 받기(1~5초)
//2.물 끓이기(5~8초)
//3.면과 스프 넣기(1~3초)
//4.계란 넣기 (1~2초)
//5.라면 전체 익히기(5~10초)
//6.라면 완성!
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const step1 = (message, min, max) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      timeStep1 = Math.floor(+getRandomArbitrary(min, max));
      console.log(message, timeStep1 / 1000 + `초`);
      success();
    }, getRandomArbitrary(min, max));
  });
};

const step2 = (message, min, max) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      timeStep2 = Math.floor(+getRandomArbitrary(min, max));
      console.log(message, timeStep2 / 1000 + `초`);
      success();
    }, getRandomArbitrary(min, max));
  });
};
const step3 = (message, min, max) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      timeStep3 = Math.floor(+getRandomArbitrary(min, max));
      console.log(message, timeStep3 / 1000 + `초`);
      success();
    }, getRandomArbitrary(min, max));
  });
};
const step4 = (message, min, max) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      timeStep4 = Math.floor(+getRandomArbitrary(min, max));
      console.log(message, timeStep4 / 1000 + `초`);
      success();
    }, getRandomArbitrary(min, max));
  });
};
const step5 = (message, min, max) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      timeStep5 = Math.floor(+getRandomArbitrary(min, max));
      console.log(message, timeStep5 / 1000 + `초`);
      success();
    }, getRandomArbitrary(min, max));
  });
};
step1("물받기", 1000, 5000)
  .then(() => step2("물 끓이기", 5000, 8000))
  .then(() => step3("면과 스프 넣기", 1000, 3000))
  .then(() => step4("계란 넣기", 1000, 2000))
  .then(() => step5("라면 전체 익히기", 5000, 10000))
  .then(() => console.log("라면 완성!"));
