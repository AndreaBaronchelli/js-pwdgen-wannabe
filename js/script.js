/***********************************
 * PASSWORD GENERATOR
 ***********************************/

/* 
TASKS 
1 ask first name
2 ask last name
3 ask favorite color
4 print on page the password
*/

//1
var firstName = prompt("What's your First Name?")
// console.log(firstName)

//2
var lastName = prompt("What's your Last Name?")
// console.log(lastName)

//3
var color = prompt("What's your favorite color?")
// console.log(color)

//4
// console.log(firstName + lastName + color + "21")
document.getElementById("password").innerHTML = "Your HyperSecure Password Is " + firstName + lastName + color + "21"