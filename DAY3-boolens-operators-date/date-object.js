// In JavaScript current time and date is created using JavaScript Date Object.
// The methods we use to get date and time information from a date object values are started with a word "get" because it provide the information.
// getFullYear(),
//   getMonth(),
//   getDate(),
//   getDay(),
//   getHours(),
//   getMinutes,
//   getSeconds(),
//   getMilliseconds(),
//   getTime(),
//   getDay();

 const now = new Date()
 console.log(now);

// const newdate = () => {
//   const now = new Date();   // with arrow function 
//   return now;
// };
// console.log(newdate());
 

// Getting full year

const now1 = new Date()
 console.log(now1.getFullYear());


 // getting the month 

 const now2 = new Date()
 console.log(now2.getMonth());

 // Getting day
 const now3 = new Date()
 console.log(now3.getDay());

 // Getting Hour

 const now4 = new Date()
 console.log(now4.getHours());

  // Getting Minutes


 const now5 = new Date()
 console.log(now5.getMinutes());

   // Getting seconds
   const now6 = new Date()
   console.log(now6.getSeconds());

    // Getting Milliseconds

    const now7 = new Date()
    console.log(now7.getMilliseconds());

  // Getting time
//  This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

  const now8 = new Date().getTime()
  console.log(now8);

  //2nd way 

  const gettime = Date.now()
  console.log(gettime);
  console.log(gettime === now8);


  const now9 = new Date()
  const year = now.getFullYear() // return year
  const month = now.getMonth() + 1 // return month(0 - 11)
  const date = now.getDate() // return date (1 - 31)
  const hours = now.getHours() // return number (0 - 23)
  const minutes = now.getMinutes() // return number (0 -59

  console.log(`the year is ${year} , and the month is ${month} , ${date} ${hours} ${minutes}`);

