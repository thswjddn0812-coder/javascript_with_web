class Student {
  id;
  name;
  Major;
  courses;
  constructor(id, name, Major, courses) {
    this.id = id;
    this.name = name;
    this.Major = Major;
    this.courses = [];
  }
  register(courses) {
    this.courses.push(courses);
  }
}
class Courses {
  name;
  professor;
  time;
  constructor(name, professor, time) {
    this.name = name;
    this.professor = professor;
    this.time = time;
  }
}
const a = new Student(1, "전정우", "간호학과");
a.register(new Courses("간호학개론", "신여진", 2));
console.log(a);
