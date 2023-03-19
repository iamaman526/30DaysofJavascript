// 1. Write a program which tells the number of days in a month.

// const year = parseInt(prompt("Enter year: "));  short solution using date
// const month = parseInt(prompt("Enter month (1-12): "));

// const numDays = new Date(year, month, 0).getDate();

// console.log("Number of days in the given month: ", numDays);

let monthName = String(prompt("Enter a month name:"));
monthName =
  monthName.charAt(0).toUpperCase() + monthName.slice(1).toLocaleLowerCase();

if (
  monthName === "January" ||
  monthName === "March" ||
  monthName === "May " ||
  monthName === "July" ||
  monthName === "August" ||
  monthName === "October" ||
  monthName === "December"
) {
  console.log(`${monthName} has 31 Days`);
} else if (
  monthName === "April" ||
  monthName === "June" ||
  monthName === "September" ||
  monthName === "November"
) {
  console.log(` ${monthName} has 30 Days`);
} else if (monthName === "February") {
  console.log(`${monthName} has 28 Days`);
} else {
  window.alert("enter the correct month");
}

//2. Write a program which tells the number of days in a month, now consider leap year.

let year = parseInt(prompt("Enter the year"));
console.log(year);
let monthNamee = String(prompt("Enter the Month name "));
monthNamee =
  monthNamee.charAt(0).toUpperCase() + monthNamee.slice(1).toLocaleLowerCase();

if (year.toString().length !== 4) {
  alert("enter the correct year");
} else {
  if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
    if (
      monthNamee === "January" ||
      monthNamee === "March" ||
      monthNamee === "May " ||
      monthNamee === "July" ||
      monthNamee === "August" ||
      monthNamee === "October" ||
      monthNamee === "December"
    ) {
      console.log(`${monthNamee} has 31 Days`);
    } else if (
      monthNamee === "April" ||
      monthNamee === "June" ||
      monthNamee === "September" ||
      monthNamee === "November"
    ) {
      console.log(` ${monthNamee} has 30 Days`);
    } else if (monthNamee === "February") {
      console.log(`${monthNamee} has 29 Days`);
    } else {
      window.alert("enter the correct month");
    }
  } else {
    if (
      monthNamee === "January" ||
      monthNamee === "March" ||
      monthNamee === "May " ||
      monthNamee === "July" ||
      monthNamee === "August" ||
      monthNamee === "October" ||
      monthNamee === "December"
    ) {
      console.log(`${monthNamee} has 31 Days`);
    } else if (
      monthNamee === "April" ||
      monthName === "June" ||
      monthName === "September" ||
      monthName === "November"
    ) {
      console.log(` ${monthNamee} has 30 Days`);
    } else if (monthName === "February") {
      console.log(`${monthNamee} has 28 Days`);
    } else {
      window.alert("enter the correct month");
    }
  }
}
