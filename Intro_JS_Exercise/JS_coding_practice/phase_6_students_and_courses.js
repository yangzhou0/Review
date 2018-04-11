function Student(firstName,lastName){
  this.firstName= firstName;
  this.lastName = lastName;
  this.courses = [];
}

function Course(courseaNme, department, numberOfCredits){
  this.courseaNme=courseaNme;
  this.department=department;
  this.numberOfCredits = numberOfCredits;
  this.students = [];
}

Student.prototype.name = function(){console.log(`${this.firstName} ${this.lastName}`);};
Student.prototype.enroll = function(course){
  if(!this.courses.includes(course)){
    this.courses.push(course);
    course.addStudent(this);
  }
};

Course.prototype.addStudent= function (student) {
  this.students.push(student);
};

Student.prototype.courseLoad = function(){
  return this.courses.reduce((accu,curr)=>{
    if (accu[curr.department] === undefined){accu[curr.department] = curr.numberOfCredits;}
    else{accu[curr.department] += curr.numberOfCredits;}
    return accu;
  },{});
};

//comment in below to test, see more at appAcademy JS W5D4 exercise
// let student1 = new Student("Nigel", "Leffler");
// let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
// let course2 = new Course("201", "CS", 3, ["wed"], 1);
// let course3 = new Course("301", "ENG", 3, ["tue"], 1);
// let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
// console.log(student1.name());
// student1.enroll(course1);
// student1.enroll(course3);
// student1.enroll(course2);
// console.log(student1.courseLoad());
