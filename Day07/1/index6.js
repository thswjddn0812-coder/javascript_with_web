function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const rabbit = () =>
  new Promise((success) => {
    setTimeout(() => {
      success("🐇");
    }, getRandomArbitrary(0, 10000));
  });

const turtle = () =>
  new Promise((success) => {
    setTimeout(() => {
      success("🐢");
    }, getRandomArbitrary(0, 10000));
  });
const horse = () =>
  new Promise((success) => {
    setTimeout(() => {
      success("🐎");
    }, getRandomArbitrary(0, 10000));
  });
const lion = () =>
  new Promise((success) => {
    setTimeout(() => {
      success("🦁");
    }, getRandomArbitrary(0, 10000));
  });
const monkey = () =>
  new Promise((success) => {
    setTimeout(() => {
      success("🐵");
    }, getRandomArbitrary(0, 10000));
  });
const cat = () =>
  new Promise((success) => {
    setTimeout(() => {
      success("🐱");
    }, getRandomArbitrary(0, 10000));
  });

const animals = [horse(), turtle(), rabbit(), lion(), monkey(), cat()];
let count = 0;

animals.forEach((v) => {
  v.then((animal) => {
    count++;
    if (count <= 3) {
      console.log(`${count}등: ${animal}`);
    }
  });
});
