// index.js - experimenting with loops
// Author: Ireland Allison
// Date: 11/18/24

function fizzBuzzBoom() {
    var output = "<table>"; // Initialize a table for the output
    for (var i = 1; i <= 200; i++) { // Loop through numbers from 1 to 200
        if (i % 10 === 1) { // Start a new row every 10 numbers
            output += "<tr>";
        }
        
        var result = ""; // Initialize an empty string for each iteration
        
        if (i % 3 === 0) result += "Fizz"; // Check if divisible by 
            //3, add "Fizz" if true
        
        if (i % 5 === 0) result += "Buzz"; 
            //Check if divisible by 
            //5, add "Buzz" if true
        
        if (i %7 ===0) result += "Boom";
        
        output += `<td>${(result ? `${result}!` : i)}</td>`; 	
            
        // Append the current number or 'result' in a table cell

        if (i %10==9){ //<----=--every tenth cell start `new row`
        
            output+=`</tr>`;
}
}

document.getElementById("output").innerHTML=output + "</table>";

}   
