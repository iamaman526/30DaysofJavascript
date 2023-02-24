let space = ' '           // an empty space string
let firstName = 'aman'
let lastName = 'kumar'
let country = 'india'
let city = 'patna'
let language = 'JavaScript'
let job = 'student'
let quote = "The ,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

//String Concatenation

// Connecting two or more strings together is called concatenation. 

let fullName = firstName  + space + lastName;
console.log(fullName);


//Template Literals (Template Strings)

let a = 2;
let b = 3;
console.log(`the sum of ${a} and ${b} is ${a+b}`);

// String Methods


// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

// 1. length 

// let js = 'JavaScript'
// console.log(js.length)         // 10
// let firstName = 'Asabeneh'
// console.log(firstName.length) 



// 2. Accessing characters in a string:

// let string = 'JavaScript'
// let firstLetter = string[0]

// console.log(firstLetter)           // J

// let secondLetter = string[1]       // a
// let thirdLetter = string[2]
// let lastLetter = string[9]

// console.log(lastLetter)            // t

// let lastIndex = string.length - 1

// console.log(lastIndex)  // 9
// console.log(string[lastIndex]




let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))