// 1.The following is an array of 10 students ages:

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(); //sort the array in ascending order
console.log(ages);
console.log(ages[0]); // after sorting index will give the min value
console.log(ages[ages.length - 1]); // after sorting last value will give max value

//Find the median age(one middle item or two middle items divided by two)
console.log(ages); //sorted

const middle1 = ages[ages.length / 2 - 1];
const middle2 = ages[ages.length / 2];
const median = (middle1 + middle2) / 2;
console.log(median);

// Find the average age(all items divided by number of items)

let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum);

const average = sum / ages.length;
console.log(average);

// const sum = ages.reduce((total, age) => total + age, 0);
// const average = sum / ages.length;  // another method by using accumalator in reduce method

//Find the range of the ages(max minus min)

const range = ages[ages.length - 1] - ages[0];
console.log(range);

//Compare the value of (min - average) and (max - average), use abs() method

const compmiv = Math.abs(ages[0] - average); //returns  the absolute +ve value of the no.
console.log(compmiv);

// 1.Slice the first ten countries from the countries array.

import countries from "./02.mjs/countries.mjs";
// const slicecount = countries.slice(0, 10);
// console.log(slicecount);

// 2.Find the middle country(ies) in the countries array

const midcountries = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
  const getmiddlecountries = [
    countries[midcountries - 1],
    countries[midcountries],
  ];
  console.log(getmiddlecountries);
} else {
  const getmiddlecountry = [countries[midcountries]];
  console.log(getmiddlecountry);
}

//3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.


// will do this with revision 
