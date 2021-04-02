// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in a tuple like so: (index1, index2).
//
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items
// will be numbers; target will always be the sum of two different items from that array).
//
// Based on: http://oj.leetcode.com/problems/two-sum/
//
// twoSum [1, 2, 3] 4 === (0, 2)

// fn(arr, num) => array
// iterate the array forward
// iterate the array backward
// if the items at cur pos are not the same item, and they equal the target
// return the idx pos of eace


// brute force
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = numbers.length; j > 0; j--) {
            if (i !== j && numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}


// refactor more performant solution
// function twoSum(numbers, target) {
//     let tmp, hash = {};
//     numbers.forEach(function(a, i){ hash[a] = i; });
//
//     for (let i = 0; i < numbers.length; i++){
//         tmp = target - numbers[i];
//         if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
//     }
// }

module.exports = twoSum;