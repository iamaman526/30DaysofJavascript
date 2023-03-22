// ### main topic
// ## subtopic
// # sub of subtopic

//### Methods to manipulate array

// There are different methods to manipulate an array. These are some of the available methods to deal with arrays: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

//##Array Constructor

const arr = Array();
console.log(arr);

const arr1 = Array(8); //here arguments defines the length of an array
console.log(arr1);

//## Creating static values with FILL

const arr2 = Array(8); //creating empty array
console.log(arr2);

const arr4 = Array(8); //creating array with length 8 and filling "a"
const fillarray1 = arr4.fill("a");
console.log(fillarray1);

const arr3 = Array(4); //creating array with length 4 and filling "aman"
const fillarray = arr3.fill("aman");
console.log(fillarray);

const arr5 = Array(2).fill(4); //creating array with length 2 and filling 4 as number
console.log(arr5);

const arr6 = Array(5).fill(0); //creating array with length 5 and filling 0 as number
console.log(arr6);

// ##Concatenating array using concat

const firstList = [1, 2, 3];
console.log(firstList);
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);
console.log(secondList);

// ##Getting array length

const number = [1, 2, 3, 4, 5];
console.log(number.length);

// ##Getting index an element in arr array

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(0)); //negative number when searching for different value which is not in the array.-1
console.log(numbers.indexOf(4));
console.log(numbers.indexOf(5));
console.log(numbers.indexOf(6)); //negative number when searching for different value which is not in the array. -1

// #Check an element if it exist in an array.
const greetings = ["hello", "hola", "bonjour", "namaste"];
let index = greetings.indexOf("hola");
if (index === -1) {
  console.log("hola is missing from greeings");
} else {
  console.log("hola is present");
}

// #using Ternary operator

index === -1
  ? console.log("hola is missing from greeings")
  : console.log("hola is present");

//##Getting last index of an element in array

const no = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(no.lastIndexOf(2)); // 7
console.log(no.lastIndexOf(0)); // -1
console.log(no.lastIndexOf(1)); //  6
console.log(no.lastIndexOf(4)); //  3
console.log(no.lastIndexOf(6)); // -1

// #includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const num = [1, 2, 3, 4, 5];

console.log(num.includes(5)); // true
console.log(num.includes(0)); // false
console.log(num.includes(1)); // true
console.log(num.includes(6)); // false

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs.includes("C"));
console.log(webTechs.includes("CSS"));
console.log(Array.isArray(webTechs));

// ##Array.isArray:To check if the data type is an array
//   Array.isArray

const numS = [1, 2, 3, 4, 5];
console.log(Array.isArray(numS)); // true

const nums = 100;
console.log(Array.isArray(nums)); // false

// ##Converting array to string

const nu = [1, 2, 3, 4, 5];
console.log(numbers.toString());

const names = ["aman", "adarsh", "krishna", "amit"];
console.log(names.toString());

//## Joining array elements

const nU = [1, 2, 3, 4, 5];
const nameS = ["aman", "adarsh", "krishna", "amit"];
console.log(nameS.join(" # "));
console.log(nU.join(" "));
console.log(nU.join());
console.log(nU.join(""));

// ##Slice an Array
//  To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const numberss = [1, 2, 3, 4, 5];
console.log(numberss.slice());
console.log(numberss.slice(0));
console.log(numberss.slice(1));
console.log(numberss.slice(0, numberss.length));
console.log(numberss.slice(1, numberss.length));
console.log(numberss.slice(1, 4));
console.log(numberss.slice(0, 2));

// ##Splice method in array

// It takes three parameters:Starting position, number of items to be removed and number of items to be added.

const numss = [1, 7, 2, 6, 5];
numbers.splice();
console.log(numss);

const numss2 = [1, 2, 3, 4, 5];
// numss2.splice(1, 3 ,77,7,10)   it removes three item and replace three items
console.log(numss2);

// ##Adding item to an array using push
// adding item in the end. To add item to the end of an existing array we use the push method.

const arr8 = ["item1", "item2", "item3"];
arr8.push("new item");
console.log(arr8);
// ['item1', 'item2','item3','new item']

const inte = [1, 2, 3, 4, 5];
inte.push(6); //add to end
console.log(inte);
inte.pop(); //remove from end
console.log(inte);

//## Removing the end element using pop
// pop: Removing item in the end.

const n = [1, 2, 3, 4, 5];
n.pop(); // -> remove one item from the end
console.log(n); // -> [1,2,3,4]

// ## Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.

const N = [1, 2, 3, 4, 5];
N.shift(); // -> remove one item from the beginning
console.log(N); // -> [2,3,4,5]

//## Add an element from the beginning

// unshift: Adding array element in the beginning of the array.

const NU = [1, 2, 3, 4, 5];
NU.unshift(6); // -> add one item from the beginning
console.log(NU); // -> [6,1,2,3,4,5]

//## Reversing array order
//  reverse()

const word = [1, 2, 3, 4, 5];
word.reverse(); // -> reverse array order
console.log(word); // [5, 4, 3, 2, 1]

word.reverse();
console.log(word);

// ##Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTech.sort();
console.log(webTech); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTech.reverse(); // after sorting we can reverse it
console.log(webTech); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
