class Soccer {
  name;
  players;
  director;
  est;
  constructor(name, players, director, est) {
    this.name = name;
    this.players = [];
    this.director = director;
    this.est = est;
  }
  registerPlayer(name, number) {
    this.players.push({ name, number });
  }
}
const a = new Soccer("정우팀", 1, "손정우", 2025);
const b = new Soccer("영철팀", 2, "영철", 2025);
const c = new Soccer("창종팀", "창종", 2025);
c.registerPlayer("여진", 7);
c.registerPlayer("영철", 10);
c.registerPlayer("정우", 12);
console.log(c);
