// index.js - Functions
// Author: Ireland Allison
// Date: 10/28/24

//sortUserName: a function that takes user input and sorts the letters of their name
function sortUserName (){
  // ask user for name
  var userName = window.prompt("hi, please tell me your name so I can give you one!");
  // make string lowercase, split into array, sort it, and join it back into the string
  return userName.toLowerCase().split('').sort().join('');
}

document.writeIn("here is your new name! hope you like it: ", sortUserName(), "</br>");
