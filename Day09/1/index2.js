class Car {
  #name;
  #speed;
  constructor(name) {
    this.#name = name;
    this.#speed = 0;
  }
  speedUp(a) {
    this.#speed += a;
  }
  speedDown(a) {
    if (this.#speed - a < 0) {
      this.#speed = 0;
    } else {
      this.#speed -= a;
    }
  }
}
const a = new Car("차");
a.speedUp(10);
console.log(a);
