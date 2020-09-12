// Fellow code warrior, we need your help! We seem to have lost
// one of our array elements, and we need your help to retrieve it!
// Our array, superImportantArray, was supposed to contain all of the
// integers from 0 to 9 (in no particular order), but one of
// them seems to be missing.
//
//     Write a function called getMissingElement that accepts an array
//     of unique integers between 0 and 9 (inclusive), and
//     returns the missing element.
//
//     Examples:
// getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
// getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3

// fn(arr) => num
// iterate from 0 to 9
// if i is not found in array arg, return it

function getMissingElement(arr){
    for(let i = 0; i <= 9; i++){
        if(!arr.includes(i)) return i;
    }
}

// best practice - IE compatible
// function getMissingElement(superImportantArray){
//   for (let i = 0; i < 10; i++) {
//     if (superImportantArray.indexOf(i) === -1) return i;
//   }
// }

module.exports = getMissingElement;