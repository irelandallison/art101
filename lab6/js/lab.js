// index.js - learning arrays and objects in JavaScript
// Author: Ireland Allison
// Date: 10/24/24

// Define Variabes
let myTransport = ["bike", "walk", "bus", "carpool"];

//Object for myMainRide
let myMainRide = {
  make: "Jeep",
  model: "Grand Cherokee",
  color: "blue grey", 
  year: 2006,
  age: function() { return 2024 - this.year; }
}

//Output
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
