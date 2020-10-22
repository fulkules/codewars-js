// Given a number n, return the number of positive odd numbers below n, EASY!
//
//     oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs! --- this basically means avoid for loops


// solve using math, not programming with for loop

const oddCount = n => Math.floor(n / 2);

// another Math option
// const oddCount = (n) => (n - (n % 2)) / 2;

    // using a for loop
// fn(num) => num
// iterate up to n
// increment a count var on each loop
// condition is if cur num is odd and lower than n

// function oddCount(n){
//     let count = 0;
//     for(let i = (n-1); i > 0; i--){
//         if(i % 2 === 1) count++;
//     }
//     return count;
// }

module.exports = oddCount;