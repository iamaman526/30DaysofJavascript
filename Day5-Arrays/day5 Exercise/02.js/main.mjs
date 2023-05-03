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

const sentenceinarray = removepunc.split(" "); //using the space character
console.log(sentenceinarray);

const lengthofsentence = sentenceinarray.length; //lenth of words
console.log(lengthofsentence);

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift("meat");
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added.

shoppingCart.push("sugar");
console.log(shoppingCart);

//  remove 'Honey' if you are allergic to honey
console.log(shoppingCart);
shoppingCart.splice(4, 1);
console.log(shoppingCart); //honey removed

//   modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, "greenTea");
console.log(shoppingCart);

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes("ETHIOPIA")) {
  console.log("ETHIOPIA");
} else {
  countries.push("ETHIOPIA");
}

console.log(countries);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
}
else{
    webTechs.push("Sass")
}
 console.log(webTechs);

//6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);