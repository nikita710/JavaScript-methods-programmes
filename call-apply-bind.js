let student = {
  firstName: "Rahul",
  lastName: "Sharma",
  age: 27,
};
let teacher = {
  firstName: "John",
  lastName: "Parker",
  age: 47,
};

function getEmail() {
  return (this.email = `${this.firstName}.${this.lastName}@test.com`);
}
function chooseSubject(sub1, sub2) {
  return (this.sub = [sub1, sub2]);
}

// The call() method calls the function with a given this(object) value and allows passing in arguments one by one separating them with commas:
getEmail.call(student);
getEmail.call(teacher);
chooseSubject.call(student, "Maths", "science");
chooseSubject.call(teacher, "Maths", "science");
console.log("Student: call()", student);
console.log("Teacher: call()", teacher);

//The apply() method calls the function with a given this(object) value and allows passing in arguments as an Array:
chooseSubject.apply(student, ["Maths", "English"]);
chooseSubject.apply(teacher, ["Maths", "English"]);
console.log("Student: apply()", student);
console.log("Teacher: apply()", teacher);

// The bind() method returns a new function and allows passing in a this array and any number of arguments.
let objBind = chooseSubject.bind(teacher, "Maths", "Economics");
objBind();
console.log("Teacher: bind()", teacher);
