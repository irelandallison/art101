// index.js - anonymous functions and callbacks
// Author: Ireland Allison 
// Date: 10/31/24

function isMultipleOfThree(x) {
  return (x % 3 == 0); 
}
// test function
console.log("Is 5 a multiple of 3? ", isMultipleOfThree (5));
console.log("Is 9 a multiple of 3? ", isMultipleOfThree (9));

array = [100, 27, 30, 16, 48, 30000, 90]
console.log("My array", array);

var result = array.map(isMultipleOfThree);
// should return [false, true, true, false, true, true, true]
console.log("Test of multiples of three array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
//should return [10, 5.196152422706632, 5.477225575051661, 4, 6.928203230275509, 173.20508075688772, 9.486832980505138]
console.log("Squareroot of array", result);
