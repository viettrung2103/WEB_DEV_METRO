// console.log(message);

// var message = 'Hi there!';
// var message mean message is hoisted to the top, which means variable message is expressed but has not been declared

// console.log(message);

// let message = 'Hi there!';
// let does not let hoisting >> Error

// console.log(showMessage());

// const showMessage = function(){
//   return 'Hi there!';
// };
// by using const and anoynymous function the showMessage is not hoisted, >> called the function before declare it

// console.log(showMessage());

// function showMessage() {
//   return "Hi there!";
// }

//this function is hoisted so it can be used in console.log

// 1.
let values = [10, 20, 30];
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

//   let values = [10, 20, 30];

// 2.
console.log(welcome("Charlie", "Munger"));

function welcome(first, last) {
  let lastLogin = "1/1/1970";
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}
