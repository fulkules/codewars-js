// As a part of this Kata, you need to create a function that when provided with a triplet,
//     returns the index of the numerical element that lies between the other two elements.
//
//     The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
// For example:
//
//     gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
// Another example (just to make sure it is clear):
//
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// fn(arr) => number
// get the largest number
// get the smallest number
// get the number in between
    // iterate the array

function gimme(inputArray){
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    let mid = 0;
    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i] !== min && inputArray[i] !== max){
            mid = i;
        }
    }
    return mid;
}

// best practice
// var gimme = function (inputArray) {
//   return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
// };

module.exports = gimme;