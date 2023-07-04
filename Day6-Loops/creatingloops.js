//In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages.

// for Loop
// while loop
// do while loop
// for of loop
// break
// continue


// for Loop
for(initialization, condition, increment/decrement){
    // code goes here
  };

  For example 

  for(let i = 0; i <= 5; i++){
    console.log(i)
  }

  const place = ["patna", "bengaluru" , "noida" , "kolkata" , "ranchi"];
  const newArray = [];

  for(let i = 0; i < place.length; i++){
    newArray.push(place[i].toUpperCase())
  }



//   while loop
  let i = 0
  while (i <= 5){
    console.log(i);
    i++
  }


// do while loop

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)


// for of loop

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// break

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }

// continue

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }