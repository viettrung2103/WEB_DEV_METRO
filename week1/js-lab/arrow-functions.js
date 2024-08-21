// Regular function
// function sayHello() {
//     return "Hello, world!";
// }

// Arrow function
const sayHello = () => {
  return "Hello, world!";
};

// // Regular function
// function double(x) {
//     return x * 2;
// }
// Arrow function
// const double = (x) => {
//   return x * 2;
// };

// Regular function
// function add(x, y) {
//     return x + y;
// }

const add = (x, y) => {
  return x + y;
};

// Regular function
// const person = {
//     name: "Alice",
//     sayHi: function() {
//         return "Hi, " + this.name + "!";
//     }
// };
const person = {
  name: "Alice",
  sayHi() {
    return "Hi, " + this.name + "!";
  },
};
console.log(person.sayHi());

const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// numbers.forEach(function (num) {
//   doubled.push(num * 2);
// });

const double = numbers.map((num) => num * 2);

console.log(double);
