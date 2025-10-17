class Coffee {
  name;
  price;
  shots;
  constructor(a, b, c) {
    this.name = a;
    this.price = b;
    this.shots = c;
  }
}
const a = new Coffee("여진이커피", 6500, 2);
const b = new Coffee("정우커피", 4500, 3);

console.log(a);
console.log(b);
