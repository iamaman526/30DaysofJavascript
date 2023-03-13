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
}

  else if (score >= 70 && score <= 79) {
    console.log("you are graded 'B'");
  }
  else if (score >= 60 && score <= 69) {
    console.log("you are graded 'C'");
  }
  else if (score >= 50 && score <= 59) {
    console.log("you are graded 'D'");
  }
else if(score <=49 ){
    console.log("you are graded 'F'");
}
  