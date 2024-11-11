// index.js - Events and Forms 
// Author: Ireland Allison
// Date: 11/11/24

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
    // Get value of input field after button is clicked
    const userName = $("#user-name").val();

    // Now let's sort it
    const userNameSorted = sortString(userName);

    // Append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
