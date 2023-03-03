// 1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )


// YYY-MM-DD HH:mm eg. 20120-01-02 07:05


const readabledate = new Date()

 const year1 = (readabledate.getFullYear() + "0").slice(-2);
 const month1 = ( "0" +readabledate.getMonth()+ 1).slice(-2);
 const Date1  = ( "0" +readabledate.getDate()).slice(-2);
 const hour = ("0" + now.getHours()).slice(-2); // add leading zero to hour  //last digit move out
 const minutes1 = ( "0"+readabledate.getMinutes()).slice(-2);

 console.log(`${year1}-${month1}-${Date1} ${hour1}:${minutes1}`);