// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

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