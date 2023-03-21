// ### Creating an Empty Array

// ## Using Array constructor to create an Empty Array

const arr = Array(); //constructor array
console.log(arr);

// ## This the most recommended way to create an empty list

const arrr = []; //assigning empty value
console.log(arrr);

//### How to create an array with values

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

console.log(numbers);
console.log("no. of Numbers:", numbers.length);
console.log(fruits, fruits.length);

// ## Array containg different data types

const arr1 = [
  "AMAN",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log(arr1);

// ##Creating an array using split method

let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");
console.log(words);

// to remove all the special characters use regEx

const newword = txt.replace(/[^\w\s]/gi, "").split(/\s+/);
console.log(newword);

// ##Accessing array items using index

const fruitss = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon

// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon


// ##Modifying array element
const numberss = [1, 2, 3, 4, 5]
numberss[0] = 10      // changing 1 at index 0 to 10
numberss[1] = 30      // changing  2 at index 1 to 20

let lastIndexofnumbers = numberss.length -1
numberss[lastIndexofnumbers] = 95 // chnaging the lastindex 5 to 95
console.log(numberss) // [10, 20, 3, 4, 5]
