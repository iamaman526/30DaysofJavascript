//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let b = parseInt(prompt("enter the base of the triangl"));
// console.log(b);
// let h = parseInt(prompt("enter the height of the triangle"));
// console.log(h);
// const area = 0.5 * b * h ;
// console.log(alert("area of the triangle is :" + area));

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle  and calculate the perimeter of triangle (perimeter = a + b + c)

// let a = parseInt(prompt("enter side a"));
// console.log(a);
// let b = parseInt(prompt("enter side b"));
// console.log(b);
// let c = parseInt(prompt("enter side c"));

// const perimeter = a + b + c;
// console.log(alert(`perimeter of triangle: ${a} + ${b} + ${c} is = ${perimeter}`));

//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = parseInt(prompt("enter the length"))
// console.log(length);
// let width = parseInt(prompt("enter the width"));
// console.log(width);

// const area = length * width ;
// const perimeter = 2* (length + width)
// console.log(alert(`The area of the rectangel is : ${area} and the perimeter of the rectange is :${perimeter}`));

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14

// const pi = 3.14;

// let r = parseInt(prompt("enter the radius of the circle :"));
// let radius = r;
// console.log(radius);
// const area = parseFloat(pi * r*r);
// const circumference = parseFloat(2 * pi *r);
// console.log(alert(`the area of the circle is : ${area} and the circumferce is : ${circumference}`));

// 5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2;

// 6.  Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

const m = (y2 - y1) / (x2 - x1);
console.log(`the slope between point(2, 2) and point(6,10) is : ${m}`);

// 7. Compare the slope of above two questions.

console.log(slope === m);

// 8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = parseInt(prompt("enter the value of x"));
console.log(x);

let y = x ** 2 + 6 * x + 9;
console.log(y);

if (y === 0) {
  alert(`y is zero when x is : ${x}`);
} else {
  alert(`y is non-zero and the value of y at x = ${x} is ${y}`);
}

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let workHour = parseInt(prompt("Enter the hour you work in a week"));
console.log(workHour);

let rateperHour = parseInt(prompt("enter the amount per hour you get"));
console.log(rateperHour);

const payOfPerson = workHour * rateperHour;

console.log(alert(`your weekly earning is ${payOfPerson}`));

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

let Name = prompt("enter the name");
console.log(Name);
let result = Name.trim(); // to trim the space between names
console.log(result);
if (result.length > 7) {
  alert("your name is long");
} else {
  alert("your name is short");
}

// 11. Compare your first name length and your family name length and you should get this output.

let firstName = "aman";
let lastName = "kumar";
if (firstName.length > lastName.length) {
  console.log(`your first name ${firstName} is longer than your ${lastName}`);
} else if (firstName.length === lastName.length) {
  console.log(
    `your firstname ${firstName} and your lastname ${lastName} is equal length`
  );
} else {
  console.log(
    `your lastname ${lastName} is longer than your firstname ${firstName}`
  );
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 24;
let yourAge = 200;

const diffInAge = yourAge - myAge;
console.log(`you are ${yourAge} years older than me `);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years

const year = new Date();
let getyear = year.getFullYear();
console.log(getyear);

let yearborn = parseInt(prompt("enter your full birth year "));

if (yearborn.toString().length !== 4) {
  alert("please enter valid 4 digit DOB"); //tostring is used because to use the property of length we have to convert number into string
} else {
  const age = getyear - yearborn;
  console.log(age);

  let drivingAge = 18;
  let yearsbeforeyoudrive = drivingAge - age;

  if (age > 99) {
    console.log("not allowed to drive ");
  } else if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`);
  } else if (age < 18) {
    console.log(
      `you are ${age}.  You will be allowed to drive after ${yearsbeforeyoudrive} years `
    );
  }
}

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let time = new Date
let yearstolive = parseInt(prompt("enter the number of years you want to live"))
let secondsoflife = yearstolive.getSeconds

 