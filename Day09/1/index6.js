class Student {
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }
}

class Collerger extends Student {
  #major;
  #courses;
  constructor(id, name, major) {
    super(id, name);
    this.#major = major;
    this.#courses = [];
  }
}
class HighSchoolStudent extends Student{
    #grade;
    #classroom;
    constructor(id,name,grade,classroom){
        super(id,name);
        this.#grade=grade;
        this.#classroom=classroom
    }
}
class Nerd extends HighSchoolStudent{
    #goodlooking;
}
// class HighSchoolStudent {
//   #id;
//   #name;
//   #grade;
//   #classroom;
//   constructor(id, name, grade, classroom) {
//     this.#id = id;
//     this.#name = name;
//     this.#grade = grade;
//     this.#classroom = classroom;
//   }
// }
