//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

import countries from "./countries.mjs";
import webTechs from "./web_tech.mjs";

console.log(countries);
console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const removepunc = text.replace(/[^\w\s]/gi, "").toLowerCase();
console.log(text);
console.log(removepunc);
// Split the sentence into an array of words

const sentenceinarray = removepunc.split(" ") //using the space character
console.log(sentenceinarray);

 const lengthofsentence = sentenceinarray.length;//lenth of words
 console.log(lengthofsentence);
