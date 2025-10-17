class SoccerPlayer {
  name;
  Position;
  age;
  salary;
  constructor(name, Position, age, salary) {
    this.name = name;
    this.Position = Position;
    this.age = age;
    this.salary = salary;
  }
  changePosition(Position) {
    this.Position = Position;
  }
}

class SoccerTeam {
  name;
  players;
  director;
  constructor(name, players, director) {
    this.name = name;
    this.players = [];
    this.director = director;
  }
  listPlayer() {
    console.log(this.players);
  }
  input(players) {
    this.players.push(players);
  }
  Delete(name) {
    this.players=this.players.filter((v) => v.name != name);
  }
}

const newPlayer = new SoccerTeam("한국", "손정우");
newPlayer.input(new SoccerPlayer("손정우", "미드필더", 25, 3000));
newPlayer.input(new SoccerPlayer("김정우", "미드필더", 26, 4000));
newPlayer.input(new SoccerPlayer("박정우", "미드필더", 27, 5000));
newPlayer.input(new SoccerPlayer("이정우", "미드필더", 28, 6000));
newPlayer.Delete("김정우");
newPlayer.listPlayer();
