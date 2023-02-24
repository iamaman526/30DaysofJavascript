//1
let statment =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(statment);

//2-------------------------------------------------------------------------------------------------
let statment1 =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"";
console.log(statment1);

//3--------------------------------------------------------------------------------------------------

var num = 10;
var num1 = "10"; // it returns a string to convert change it to number
let x = Number(num1);
console.log(x);
console.log(typeof num1 == typeof num); // string to number conversion
console.log(typeof x == typeof num);
console.log(x === num);

//4--------------------------------------------------------------------------------------------------
let check1 = parseFloat("9.8");
console.log(check1 === 10);

let check2 = Math.round(parseFloat("9.8"));

console.log(check2 == 10);

//5------------------------------------------------------------------------------------------------

let word = "python";
let word1 = "jargon";

console.log(word.match("on"));
console.log(word1.match("on"));

//6--------------------------------------------------------------------------------------------------
let statment3 = "I hope this course is not full of jargon.";

console.log(statment3.match("jargon"));
//7-------------------------------------------

let numbers = Math.random();
let btnzerotohundred = numbers * 101;
console.log(btnzerotohundred);

//8-----------------------------------------

let number1 = Math.random();
let numBtnfiftyAndHundred = number1 * 51 + 50;
console.log(numBtnfiftyAndHundred);

//9-------------------------------------------------------------------------------------------------

function number() {
  return Math.random() * 256;
}
console.log(number());

//10----------------------------------------------------------------------------------

let string = "javascript";
let randomcheck = Math.floor(Math.random() * string.length);
let access = string.charAt(randomcheck); // to return the character at specfic random index
console.log(`${randomcheck} and  ${access}`);

//11----------------------------------------------------------------------------
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125 ");

//12-------------------------------------------------------------------------------------

let quote =
  "You cannot end a sentence with because because because is a conjunction";

console.log(quote.substring(31, 55));
