// 1.The following is an array of 10 students ages:

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(); //sort the array in ascending order
console.log(ages);
console.log(ages[0]); // after sorting index will give the min value
console.log(ages[ages.length - 1]); // after sorting last value will give max value

//Find the median age(one middle item or two middle items divided by two)
console.log(ages); //sorted

const middle1 = ages[ages.length / 2 - 1];
const middle2 = ages[ages.length / 2];
const median = (middle1 + middle2) / 2;
console.log(median);

// Find the average age(all items divided by number of items)

let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum);

const average = sum / ages.length;
console.log(average);

// const sum = ages.reduce((total, age) => total + age, 0);
// const average = sum / ages.length;  // another method by using accumalator in reduce method


//Find the range of the ages(max minus min)

const range = [ages.length-1] - ages[0]
console.log(range);