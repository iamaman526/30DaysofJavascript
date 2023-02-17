//1-------------------------------------------------

let word = "Love is the best thing in this world. Some found their love and some are still looking for their love."

let count = word.match("love");
console.log(count.length);

//2------------------------------------------------

let countbecause = 'You cannot end a sentence with because because because is a conjunction';

let count1 = countbecause.match(/because/gi);
// if (count1 == null) {
//     console.log(null);
// }
// else
// console.log(count1.length);
console.log(count1.length);

//3--------------------------------

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let regEx = /\d+/
let value = sentence.match(RegExp);

console.log(sentence.split(""));