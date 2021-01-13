// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.

// fn(arr) => num
// iterate array
// tally occurrences of each num
// when through with iteration
// return the value that occurred an odd number of times

function findOdd(A){
    let tally = {};
    for(let i = 0; i < A.length; i++){
        if (!tally.hasOwnProperty(A[i])){
            tally[A[i]] = 1;
        } else {
            tally[A[i]] += 1;
        }
    }
    for(let item in tally){
        if(tally[item] % 2 === 1){
            return Number(item);
        }
    }
}

// best practice
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// alternate syntax
// function findOdd(A) {
//   var obj = {};
//   A.forEach(function(el){
//     obj[el] ? obj[el]++ : obj[el] = 1;
//   });
//
//   for(let prop in obj) {
//     if(obj[prop] % 2 !== 0) return Number(prop);
//   }
// }

// clever
// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2);
// }


module.exports = findOdd;