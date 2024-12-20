// index.js - functions with conditionals
// Author: Ireland Allison
// Date: 11/14/24

// return latte, cold brew, drip, or americano
function sortingHat(str) {
    len = str.length 
    mod = len % 4; 
    if (mod == 0) {
        return "Latte"
    }
    else if (mod == 1) {
        return "Cold brew"
    }
    else if (mod == 2) {
        return "Drip"
    }
    else if (mod == 3) {
        return "Americano"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() { 
var name = document.getElementById("input").value;
var house = sortingHat(name);
newText = "<p> The barista has sorted you into this type of coffee drinker: " + house + " </p>";
document.getElementById("output").innerHTML = newText;
})
