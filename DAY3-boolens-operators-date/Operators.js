// Assignment operators
// An equal sign in JavaScript is an assignment operator. It uses to assign a variable


// Example 

let firstName = 'aman'
let latsName = 'kumar'
console.log(firstName + latsName);

// x+=y  is same as x=x+y
// x**=y is same as x=x**y

// --------------------------------------------------------------

// Arithmetic Operators

// Arithmetic operators are mathematical operators.

// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

//Example:

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo;
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo  

console.log(sum , diff , mult,div ,remainder,powerOf);


//more examples

const PI = 3.14
let radius = 100  // length in meter 

const areaOfCircle = PI * radius * radius  /100
console.log(areaOfCircle + "m");



const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC

console.log(`The boiling point of water is ${boilingPoint} oC. \nHuman body Tempreture is ${bodyTemp}oC \nThe gravity of earth is ${gravity} m / s2`);


// Comparison Operators

// In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

// == Equal in value
// === equal in value and datatype
// != not equal
// > greater than
// < less than 
// >= greater that or equal to 
// <= less than or equal to 


// Example

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN) 

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// ---------------------------------------------------

// Logical Operators

// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// && ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

console.log(check1,check2,check3);

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false
console.log(check4,check5,check6);


//! Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false   
console.log(check7,check8,isLightOff,isLightOn,isMarried);   

// -------------------------------------------------

// Increment Operator

// In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

// 1. Pre-increment

let count1 = 0
console.log(++count1); //1
console.log(count1)  //1

// 2. Post-increment
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

// --------------------------------------------------

// Decrement Operator

// In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them:

// 1.Pre-decrement

let count3 = 0
console.log(--count3); //-1
console.log(count3); // -1

//2.Post-decrement 

let count4 = 0 
console.log(count4--);  //0
console.log(count4);    // -1


//  -------------------------------------------------------------

// Ternary Operators

// Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining = false
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')



  let number = 5 
  number >0  
  ? console.log(`${number} is positive`)
  : console.log(`${number} is negative`)
  number = -5
  number > 0
  ? console.log(`${number} is positive`)
  : console.log(`${number} is negative`)