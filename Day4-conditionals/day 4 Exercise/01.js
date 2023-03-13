//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

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

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const yourAge = parseInt(prompt("Enter your age:"));
if (isNaN(yourAge) || yourAge <= 0) {
  alert("enter correct age");
} else {
  const myAge = 25;
  let aman = myAge - yourAge;
  let stranger = yourAge - myAge;

  if (myAge > yourAge) {
    console.log(`I'm older than you by ${aman} years.`);
  } else if (myAge < yourAge) {
    console.log(`You're older than me by ${stranger} years.`);
  } else {
    console.log("We're the same age.");
  }
}
