// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

// fn(arr) => num
// iterate array
// if item at idx is a string, convert it to a num
// add up items
// return total

function sumMix(x){
    return x.reduce((acc, cur) => acc + +cur, 0);
}

// using eval warning -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
// function sumMix(x){
//   return eval( x.join("+") )
// }

// regular for loop solution
// function sumMix(x){
//   let result = 0;
//   for (let n of x) {
//     result += parseInt(n);
//   }
//   return result;
// }

module.exports = sumMix;