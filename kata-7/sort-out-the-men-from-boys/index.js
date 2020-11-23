// Scenario
// Now that the competition gets tough it will Sort out the men from the boys .
//
//     Men are the Even numbers and Boys are the odd!alt!alt
// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds,
// or Separate the men from the boys

// Notes
// Return an array/list where Even numbers come first then odds
//
// Since , Men are stronger than Boys , Then Even numbers in ascending order
// While odds in descending .
//
//     Array/list size is at least *4*** .
//
// Array/list numbers could be a mixture of positives , negatives .
//
//     Have no fear , It is guaranteed that no Zeroes will exists .!alt
// Repetition of numbers in the array/list could occur , So (duplications
// are not included when separating).

// fn(arr) => arr
// get and sort even nums in ascending order
// get and sort odds in descending order
// remove duplicates from each array
// merge the two arrays
// return result

function menFromBoys(arr){
    let evens = arr.filter(num => !(num % 2)).sort((a, b) => a - b);
    let odds = arr.filter(num => num % 2).sort((a, b) => b - a);
    return [...new Set(evens), ...new Set(odds)];
}

// voted best practice
// function menFromBoys(arr){
//   arr = Array.from(new Set(arr));
//   let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
//   let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
//   return even.concat(odd);
// }

module.exports = menFromBoys;