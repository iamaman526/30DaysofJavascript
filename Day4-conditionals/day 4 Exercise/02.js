//1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = parseInt(prompt("Enter your score"));
if (score < 0 || score > 100) {
  alert("enter valid score");
} else if (score >= 80 && score <= 100) {
  console.log("you are graded 'A'");
} else if (score >= 70 && score <= 79) {
  console.log("you are graded 'B'");
} else if (score >= 60 && score <= 69) {
  console.log("you are graded 'C'");
} else if (score >= 50 && score <= 59) {
  console.log("you are graded 'D'");
} else if (score <= 49) {
  console.log("you are graded 'F'");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = String(prompt("enter the month to know the season "));
month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
if (month === "September" || month === "October" || month === "November") {
    console.log(`the season is Autumn in ${month}`);
}

else if (month === "December" || month === "January" || month === "February" ){
  console.log(`the season is Winter in ${month}`);
}
else if (month === "March" || month === "April" || month === "May" ){
  console.log(`the season is Spring in ${month}`);
}
else if (month === "June" || month === "July" || month === "August" ){
  console.log(`the season is Summer in ${month}`);
}
else{
  console.log("enter the correct month");
}