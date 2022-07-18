// Answer 01

// let rightNow = new Date();
// console.log(rightNow)

// Answer 02

// let monthName = ["January", "February", "March", "Aprail", "May", "June", "July", "Augest", "September", "October", "November", "December"]
// let now = new Date();
// let theMonth = now.getMonth();
// let nameOfMonth = monthName[theMonth];
// alert(nameOfMonth)

// Answer 03

// let dayName = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
// let now = new Date();
// let theDay = now.getDay();
// let nameOfDay = dayName[theDay].slice(0, 3);
// alert(nameOfDay);


// Answer 04


// let dayName = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let now = new Date();
// let theDay = now.getDay();
// let nameOfDay = dayName[theDay];

// if(nameOfDay === "Saturday" || nameOfDay === "Sunday"){
//     alert("“It’s Fun day");
// }
// else{
//     alert(nameOfDay);
// }

// Answer 05

// var now = new Date();
// var thedate = now.getDate();

// if(thedate < 16){
//     console.log("First fifteen days of the month")
// }
// else{
//     console.log("Last days of the month")
// }


// Answer 06

// var currentDate = new Date();
// var milisec = new Date("Jan 1, 1980").getTime();
// var minutes = milisec / (1000*60*60)
// console.log("Current Date: " + currentDate);
// console.log("Elapsed milliseconds since January 1, 1970: " + milisec);
// console.log("Elapsed milliseconds since January 1, 1970: " + minutes);

// Answer 07

// var now = new Date().toLocaleTimeString();
// if(now > "11:59:59"){
//     console.log("It's AM")
// }
// else if(now > "23:59:59"){
//     console.log("It's PM")
// }

// Answer 08

// let now = new Date("Dec 31, 2020");
// console.log("Later date: " + now);

// Answer 09

// var date = new Date();
// var eidDay = new Date("10 july 2022");
// var diff = eidDay.getTime() - date.getTime();

// var eidday1 = Math.round(diff / (1000 * 60 * 60 * 24));
// var eidHr = Math.round(diff / (1000 * 60 * 60));
// var eidMin = Math.round(diff / (1000 * 60));

// var eaidFirstDay = document.write(eidday1 + "days" + "<br>" + eidHr + " Hours" + "<br>" + eidMin + " Min left");



// Answer 10

// var today = new Date("2015").getTime();
// var refDate = new Date("Dec 05, 2015 22:50:16").getTime();
// var diff = refDate - today;
// console.log(diff / 1000)


// Answer 11

// var today = new Date();
// var today1 = new Date()
// var a = today1.setHours(10)

// console.log("Current Date: " + today + "<br>")
// console.log("1 hours ago, it was " + today1 + "<br>")

// Answer 12

// var today = new Date();
// var today1 = new Date();
// var a = today1.setFullYear(1922)
// console.log("Current Date: " + today + "\n" + "100 years back: "+today1);

// Answer 13

// var dateOfBirth = prompt("Enter your Date of birth", "2 jun 2003");
// var forMillisecond = new Date().getTime() - new Date(dateOfBirth).getTime();
// var forYear = forMillisecond / (1000 * 60 * 60 * 24 * 365 )
// console.log("Your Age is " + Math.round(forYear));
// console.log("Your Birth Year is " + new Date(dateOfBirth).getFullYear())
 
// Answer 14

document.write("<h2>K-Electric Bill</h2><br>")
let monthName = ["January", "February", "March", "Aprail", "May", "June", "July", "Augest", "September", "October", "November", "December"]
var now = new Date();
let theMonth = now.getMonth();
let nameOfMonth = monthName[theMonth];
var noOfUnits = 410;
var perUnit = 16;
var netAmount = noOfUnits*perUnit;
var latePay = netAmount+350
document.write("Customer Name: ABC Customer<br>")
document.write("Month: " + nameOfMonth + "<br>")
document.write("Number of Units: " + noOfUnits + "<br>")
document.write("Chages Per Unit: " + perUnit + "<br><br>")
document.write("Net Amount Payable (With Due Date): " + netAmount + "<br>")
document.write("Late Payment surcharge: 350<br>")
document.write("Gross Amount Payable (after  Due Date): " + latePay + "<br>")


