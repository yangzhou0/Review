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
