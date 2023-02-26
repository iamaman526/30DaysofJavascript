
// Window alert() method


const message = "Hello, world!";
alert(message);
console.log(message);


// Window prompt() method
let number = prompt('Enter number', 'number goes here')
console.log(number)

// Window confirm() method
// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
                   //ok  => true cancel => false 