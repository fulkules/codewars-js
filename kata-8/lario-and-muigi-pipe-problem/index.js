// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
//
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence
// after the first index will be greater than the previous and that there will be no duplicates.
//
// Task
// Given the a list of numbers,
// return the list so that the values increment by 1 for each index up to the maximum value.
//
// Example
// Input: 1,3,5,6,7,8
//
// Output: 1,2,3,4,5,6,7,8

// fn(arr) => arr
// get the min and max nums
// fill an array starting at min, ending at max
// return the array

// fastest way to find min & max in array (speed testing)
// https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621

function pipeFix(numbers){
    let min = Math.min.apply(null, numbers);
    let max = Math.max.apply(null, numbers);
    let newArr = [];
    for(let i = min; i <= max; i++){
        newArr.push(i);
    }
    return newArr;
}

module.exports = pipeFix;