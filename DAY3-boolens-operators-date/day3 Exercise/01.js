//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "aman";
let lastName = "kumar";
let country = "india";
let city = "patna";
let age = 23;
let isMarried = false;
var year = new Date().getFullYear();

console.log(
  `${typeof firstName},${typeof lastName},${typeof country},${typeof city},${typeof age},${typeof isMarried},${typeof year}`
);
// --------------------------------------------------------
// 2.Check if type of '10' is equal to 10

var value = 10;
var val = "10";
console.log(typeof 10 === typeof "10");
// ----------------------------------------------------------

//3. Check if parseInt('9.8') is equal to 10

var pr = parseInt("9.8");
console.log(pr);
var num = 10;
console.log(typeof pr === typeof num);
// ------------------------------------------------------------

//4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.


var no = 4;

if (no) {
  console.log("The number is truthy.");
} else {
  console.log("The number is falsy.");
}

var string = "aman";
if (string) {
  console.log("The number is truthy.");
} else {
  console.log("The number is falsy.");
}

var bool = true;
if (bool) {
  console.log("The number is truthy.");
} else {
  console.log("The number is falsy.");
}

// Write three JavaScript statement which provide falsy value.
var no = 0;

if (no) {
  console.log("The number is truthy.");
} else {
  console.log("The number is falsy.");
}

var string = undefined;
if (string) {
  console.log("The number is truthy.");
} else {
  console.log("The number is falsy.");
}

var bool = false;
if (bool) {
  console.log("The number is truthy.");
} else {
  console.log("The number is falsy.");
}

// ------------------------------------------------------
//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);  //true
console.log( 4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); //false
console.log(4 == 4);  // true
console.log(4 === 4); //true
console.log(4 != 4);  //false
console.log(4 !== 4);  //false
console.log(4 != '4');  //false
console.log(4 == '4');  //true
console.log(4 === '4'); //false

// Find the length of python and jargon and make a falsy comparison statement.

 var py = "python"
 var ja = "jargon"
 if (py.length !== ja.length){
  console.log("the statement is correct");
 }
 else{
  console.log("the statment is falsy");
 }
// -------------------------------------------------------

//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12);  // true
console.log( 4 > 3 && 10 > 12);  // false
console.log(4 > 3 || 10 < 12);  //true
console.log( 4 > 3 || 10 > 12);  //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12));  //false
console.log(!(4 > 3 && 10 > 12));  //true
console.log( !(4 === '4')); //true
// There is no 'on' in both dragon and python

let pyt = "python";
let jarg = "jargon";

console.log(!(pyt.includes("on") == jarg.includes("on")));

// -----------------------------------------------------------------

// 7. Use the Date object to do the following activities

// What is the year today?
let findyear = new Date().getFullYear()
console.log(findyear);
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
