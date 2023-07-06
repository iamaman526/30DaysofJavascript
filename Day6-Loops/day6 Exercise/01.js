// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// Iterate 0 to n using for loop
// let n = parseInt(prompt("Enter a number:"));
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

for (let i = 0; i <= 7; i++) {
  let pat = "";

  for (let j = 1; j <= i; j++) {
    pat += "#";
  }

  console.log(pat);
}

//5. Use loop to print the following pattern

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i}*${i} = ${i * i}`);
}
