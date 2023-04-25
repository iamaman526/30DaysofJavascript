// 1.Declare an empty array;

const arr = Array();
const arrr = [];
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 2.Declare an array with more than 5 number of elements

const arr5 = ["a", "d", "e", "g", "f"];
console.log(arr5);

// 3.Find the length of your array
console.log(arr5.length);

// 4.Get the first item, the middle item and the last item of the array

const firstItem = arr5[0];
console.log(firstItem);
const secondItem = arr5[Math.floor(arr5.length / 2)]; // to find the middle element
console.log(secondItem);
const thirdItem = arr5[arr5.length - 1];
console.log(thirdItem);

// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, "hello", null, true, 3.2, undefined];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()

console.log(itCompanies);

// 8 . Print the number of companies in the array

console.log(itCompanies.length);

// 9.Print the first company, middle and last company

const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastComapnay = itCompanies[itCompanies.length - 1];
console.log(firstCompany, lastComapnay, middleCompany);

// 10. Print out each company

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// 11.Change each company name to uppercase one by one and print them out

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

//  let compOne = itCompanies[0].toUpperCase()
//  console.log(compOne);
//  let compTwo = itCompanies[1].toUpperCase()
//  console.log(compTwo);
//  let compThree = itCompanies[2].toUpperCase()
//  console.log(compThree);
//  let compFour = itCompanies[3].toUpperCase()
//  console.log(compFour);
//  let compFive = itCompanies[4].toUpperCase()
//  console.log(compFive);
//  let compSix = itCompanies[5].toUpperCase()
//  console.log(compSix);
//  let compSeven = itCompanies[6].toUpperCase()
//  console.log(compSeven);

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const sentence =
  itCompanies.slice(0, 6).join(", ") +
  ", and " +
  itCompanies.slice(6) +
  " are big IT companies";
console.log(sentence);

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const compinclude = itCompanies.includes("Google");
if (compinclude) {
  console.log("Google");
} else {
  console.log("compnay is not found ");
}
