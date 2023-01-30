//logging
// console.log('learning modern js')
// getting a selector and passing in our values
// let heading = document.querySelector('h1')
// heading.innerText = "Django"
//logging vs alerts
// console.log(document.URL)
// window.alert(document.URL)
// how to add or remove from local storage
// window.localStorage.setItem('test', 'This is my test')
// window.localStorage.removeItem('test')

// //var let const
// // var variables are accessible to the window object (window.n)
// var n = 'daniel'
// n = 'zen'
// alert(n)

// //let variables are NOT accessible to the window object (window.n1 -> undefined)
// let n1 = 'daniel'
// n1 = 'zen'
// alert(n)

//This works
// if(true) {
//     var n2 = "zen"
//     alert(n2)
// }

// //This also works
// if(true){
//     var n2 = "zen"
// }

// alert(n2)

//However, this doesn't work because let variables aren't bounded to the window
// if(true){
//     let n2 = "zen"
// }

// alert(n2)

// // With const, you can't change the variable name
// const n4 = "Daniel"
// // this will produce an error in the console.
// const n4 = "Dan"

// const is tricky
// even though it's value can't change
// if it's value is an object, it's properties can change

// this is how you create an object using {} or the new keyword
// let obj = new Object();
//or
// let obj = {};
// obj = {
//     name: "Ryan"
// }
// console.log(obj.name)

// will produce an error
// const obj = {};
// obj = {
//     name: "Ryan"
// }
// console.log(obj.name)

// will word
// const obj = {
//     name: "Ryan"
// }
// obj.name = "Daniel"
// console.log(obj.name)

// // TEMPLATE STRINGS
// let fname = "Daniel"
// let lname = "Mevs"
// let age = prompt("Guess Daniel's age: ")

// // old way
// // let result = fname + " " + lname + " is " + age + " years old";

// // using template string
// let result = `${fname} ${lname} is ${age} years old`
// alert(result)

// function welcome(user = "Default user", message="Default message.. nothing to say") {
//     alert(`Hello ${user}, ${message}`)
// }

// welcome('Daniel', 'Good morning');
// welcome();
// welcome("John")

// function greeting(message) {
//     alert(`${message} everyone!`)
// }

// greeting("Hello")

// let greeting = message => alert(`${message} everyone!`);
// greeting("Hello")


// let createBlog = (title, body) => {
//     if(!title){
//         throw new Error("A title is needed");
//     }
//     if(!body){
//         throw new Error("Body can't be empty");
//     }
//     return `${title} - ${body}`;
// }

// alert(createBlog("A blog title", "This is my first blog"));

// if you RC > inspect > console > and type window.sayHi you will see this function
// function sayHi() {
//     console.log("hi");
// }
// if you put this in the console log, it will refer to the window object
// function sayHi() {
//     console.log(this);
// }
// sayHi()

//this will work because 'this' works with regular function notation
// let austrailia = {
//     cities: ["Sydney", "Melbourne", "Adelaide"],
//     printWithDash: function() {
//         alert(this.cities.join(" - "));
//     }
// }
// austrailia.printWithDash();

// this will NOT work because 'this' does not work with arrow notation
// let austrailia = {
//     cities: ["Sydney", "Melbourne", "Adelaide"],
//     printWithDash: () => {
//         alert(this.cities.join(" - "));
//     }
// }
// austrailia.printWithDash();

//OBJECT DESTRUCTURING

// let thingsToDo = {
//     morning: "Exercise",
//     afternoon: "Work",
//     evening: "Code",
//     night: ["Sleep", "Dream"],
// };

// let {morning, afternoon, evening, night} = thingsToDo;
// morning = "Run"
// console.log(morning);


// Before destructuring
// const uniStudents = (student) => {
   
//     console.log(`${student.fname} ${student.lname} is from Florida Atlantic University`);
// }

// uniStudents({
//     fname: "Daniel",
//     lname: "Mevs",
// });


// After destructuring
// const uniStudents = (student) => {
//     let {fname, lname} = student;
//     console.log(`${fname} ${lname} is from Florida Atlantic University`);
// }

// uniStudents({
//     fname: "Daniel",
//     lname: "Mevs",
// });


// Alternatively
// const uniStudents = ({fname, lname}) => {
//     console.log(`${fname} ${lname} is from Florida Atlantic University`);
// }
// student = {
//     fname: "Daniel",
//     lname: "Mevs",
// }
// uniStudents(student);

// ARRAY DESTRUCTURING
// const arr = ["one", "two", "three"];
// console.log(arr)

// This will give you the first argument
// const [firstOne] = ["one", "two", "three"];
// console.log(firstOne);

// // This will give you the second argument
// const [,item] = ["one", "two", "three"];
// console.log(item);

// This will give you the third argument
// const [,,item] = ["one", "two", "three"];
// console.log(item);

// SPREAD OPERATOR
// const austrailianCities = ["Sydney", "Melbourne", "Brisbane"];
// const americanCities = ["New York", "LA", "Chicago"];

// const allCities = [...americanCities, ...austrailianCities]
// console.log(allCities)

// with custom separator formatting
// const austrailianCities = ["Sydney", "Melbourne", "Brisbane"];
// const americanCities = ["New York", "LA", "Chicago"];

// const allCities = [...americanCities, ...austrailianCities];
// console.log(allCities.join(" - "));
// console.log(allCities.join(", "));

// REST OPERATOR
// const cities = ["Sydney", "Melbourne", "Brisbane"];
// cities.push("Canberra");
// const [first, ...rest] = cities;


// console.log("FIRST => ", first);
// console.log("REST => ", rest);

// const user = {
//     name: 'Dan',
//     email: 'dannymevs@hotmail.com',
//     password: "secret",
// }

// const { password, ...rest } = user;
// console.log(rest);

// function Holiday(destination, days){
//     this.destination = destination;
//     this.days = days;
// }
// Holiday.prototype.info = function () {
//     console.log(`${this.destination} | ${this.days}`);
// }

// const nepal = new Holiday("Nepal", 30);
// // console.log(nepal.destination, nepal.days);
// console.log(nepal.info())

// const austrailia = new Holiday("Austrailia", 7);
// // console.log(austrailia.destination, austrailia.days);
// console.log(austrailia.info())

// everything in javascript is an object
// functions, arrays, constructors, etc... that all inherit the object type
// there are 6 primitive data types in js. 
// L> null, undefined, strings, numbers, boolean, and symbols
// the rest of them inherit the object type
// that's why the prototype object is also created behind the scene when you create a function
// and we were able to use .prototype on it

// CLASSES

// class Holiday {
//     constructor(destination, days) {
//         this.destination = destination;
//         this.days = days;
//     }
//     info() {
//         console.log(`${this.destination} will take ${this.days} days.`);
//     }
// }


// class Expedition extends Holiday {
//     // gear is added
//     constructor(destination, days, gear) {
//         super(destination, days);
//         this.gear = gear;
//     }
//     info() {
//         super.info();
//         const [camera, ...rest] = this.gear;
//         console.log(`Bring ${rest} and ${camera}`);
//     }
// }

// // const trip = new Holiday("Kathmandu, Nepal", 30);
// // console.log(trip.info());

// // const trip2 = new Holiday("Sydney", "Austrailia", 7);
// // console.log(trip2.info());


// const travel = new Expedition("Everest", 30, ["sun glasses", "snow boots", "camera"]);

// travel.info();


