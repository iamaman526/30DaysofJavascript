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

const pi = 3.14;

let r = parseInt(prompt("enter the radius of the circle :"));
let radius = r;
console.log(radius);
const area = parseFloat(pi * r*r);
const circumference = parseFloat(2 * pi *r);
console.log(alert(`the area of the circle is : ${area} and the circumferce is : ${circumference}`));


