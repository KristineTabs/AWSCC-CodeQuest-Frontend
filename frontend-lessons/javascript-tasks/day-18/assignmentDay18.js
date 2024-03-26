//Task 1: Object Basics
const book = {};
book.title = "Wonder";
book.author = "R.J.  Palacio";
book.year = "2012";
console.log(book.author);

//Task 2: Object Operations
const student = {
    name: "Kristine",
    age: 21,
    grade: 1.29,
};
console.log(student.age);

student.age = 22;
console.log(student.age);

student.subjects = ["Information Management", "Operating Systems", "Design and Analysis of Algorithms"];
console.log(student.subjects);

//Task 3: Object Methods
const rectangle = {
    width: 10,
    height: 5,
};

rectangle.calculateArea = function(a, b) {
    return a * b;
}

const area = rectangle.calculateArea(rectangle.width, rectangle.height);
console.log(area);

//Task 4: Advanced Object Techniques
const person = {
    name: "Kristine",
    age: 21,
    address: "Quezon City",
};

delete person.address;

const employee = {
    name: "Loid",
    position: "spy",
};

const employeeDetails = { ...person, ...employee};
console.log(employeeDetails);