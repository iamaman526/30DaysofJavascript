// array destructuring 
const myArray = ["value1", "value2", "value3","value4", "value5"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, myvar3, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log("value of myvar2", myvar3);
console.log(myNewArray); // all rest element inside it