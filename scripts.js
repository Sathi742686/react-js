//(1) var, let, const
// var Example
// var firstName = " Farzana";
// console.log(firstName);
// firstName = "Sathi";
// console.log(firstName);

// let Example
// let lastName = "Ahmmed";
// console.log(lastName);
// lastName = "Islam";
// console.log(lastName);

// const Example
// const firstName = "Sathi";
// console.log(firstName);

// (2) Arrow Function
// Example 1
// function showText(text) {
//   console.log(text);
// }
// showText("JavaScript text");

//Example 2
// const showTheText = (text) => {
//   console.log(text);
// };
// showTheText("Arrow Function Text");

//Example 3
// const showTheText2 = () => {
//   console.log("Normal Text");
// };
// showTheText2();

// Example 4
// const showResult = (number) => {
//   return number * 2;
// };
// console.log(showResult(2));

// //Example 4
// const showResult = (number) => number * 2;
// console.log(showResult(2));

// (3) Spread Operator
// Array Example
// const num1 = [1, 2, 3, 4];
// console.log(num1);

// const num2 = [...num1, 5, 6];
// console.log(num2);

// Object Example
// const user1 = {
//   fName: "Sathi",
//   lName: "Islam",
// };
// console.log(user1);

// const user2 = {
//   ...user1,
//   age: 34,
// };
// console.log(user2);

// another Example
// const getNumbers = (...number) => {
//   console.log(number[2]);
// };
// getNumbers(2, 4, 7);

//(4) Destructuring
//Array Example
// const num1 = [1, 2, 3];
// const [n1, n2, n3] = num1;

// console.log(n1);
// console.log(n2);
// console.log(n3);

//Object Example
// const user2 = {
//   fName: "Farzana",
//   lName: "Ahmmed",
//   age: 6,
// };
// const { age, fName, lName } = user2;

// console.log(age);
// console.log(fName);
// console.log(lName);

// (5) Map
// const num1 = [2, 4, 6, 8];
// num1.map((num) => {
//   console.log(num * 2);
// });

// (6) Filter()
// const age1 = [31, 34, 17, 14, 22, 38, 18];

// function isVoter(vAge) {
//   return vAge >= 18;
// }

// const voterList = age1.filter(isVoter);
// console.log(voterList);

// (7) Reduce()
// const num = [31, 34, 17, 14, 22, 38, 18];

// function getTotal(first, next) {
//   return first + next;
// }

// const total = num.reduce(getTotal);
// console.log(total);

// //(8) JavaScript Class
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     return 2023 - this.year;
//   }
// }
// const myCar = new Car("BMW", 2015);
// const yourCar = new Car("Ford", 2023);
// console.log(myCar);
// console.log(yourCar);
// console.log(myCar.age());

// (9)
