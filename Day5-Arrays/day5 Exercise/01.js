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

//14. Filter out companies which have more than one 'o' without the filter method

const filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let count = 0;
  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === "o") {
      count++;
    }
  }
  if (count <= 1) {
    filteredCompanies.push(company);
  }
}

console.log(filteredCompanies);

// 15.Sort the array using sort() method

const sortcompnaies = itCompanies.sort();
console.log(sortcompnaies);

// 16. Reverse the array using reverse() method

const reversecomp = itCompanies.reverse();
console.log(reversecomp);

// 17.Slice out the first 3 companies from the array

const sliceoutcomp = itCompanies.slice(0, 3);
console.log(sliceoutcomp);

//18. Slice out the last 3 companies from the array?

console.log(itCompanies);
const slicecomplast = itCompanies.slice(4, 7);
console.log(slicecomplast);

//19. Slice out the middle IT company or companies from the array

const slicecompmiddle = itCompanies.slice(2, 5);
console.log(slicecompmiddle);

//20 Remove the first IT company from the array.

const removecomp = itCompanies.shift();
console.log(removecomp); // string will pop out as it is stored in the variable.
console.log(itCompanies);

const numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> remove one item from the beginning
console.log(numbers);

//21.Remove the middle IT company or companies from the array

const middleremove = itCompanies.splice(3, 1);
// console.log(itCompanies);  removes the spliced array
// console.log(middleremove); pops out the array spliced

// 22. Remove the last IT company from the array

const remlastcomp = itCompanies.pop();
console.log(remlastcomp);
console.log(itCompanies);

// 23.Remove all IT companies

const remallcomp = itCompanies.splice();
console.log(remallcomp);
