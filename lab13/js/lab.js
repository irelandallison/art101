// index.js - experimenting with loops
// Author: Ireland Allison
// Date: 11/18/24

function fizzBuzzBoom() {
    var output = ""; // Initialize an empty string to store the output
    for (var i = 1; i <= 200; i++) { // Loop through numbers from 1 to 200
        var result = ""; // Initialize an empty string for each iteration
        if (i % 3 === 0) result += "Fizz"; // Check if divisible by 3, add "Fizz" if true
        if (i % 5 === 0) result += "Buzz"; // Check if divisible by 5, add "Buzz" if true
        if (i % 7 === 0) result += "Boom"; // Check if divisible by 7, add "Boom" if true
        
        output += `${(result ? `${result}!` : i)}<br>`; 
            // If 'result' is non-empty, append it with '!' and a line break,
            // or else just append the current number with a line break.
    }
    
    document.getElementById("output").innerHTML = output;
        // Set the inner HTML of the element with id 'output' to the accumulated string.
}
