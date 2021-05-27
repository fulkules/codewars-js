// Complete the function that takes a non-negative integer n as input, and returns
// a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
//
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// fn(num) => arr
// initialize an empty arr to fill
// iterate up to n
// multiply the prev val in the new arr by two and push into new arr
// return array

function powersOfTwo(n){
    let powers = [];
    for(let i = 0; i <= n; i++){
        if(i === 0) {
            powers.push(1)
        } else {
            powers.push(powers[i - 1] * 2);
        }
    }
    return powers;
}

// best practice - refactor (Math.pow(2, 0) = 1 so if/else not needed)

// function powersOfTwo(n){
//   let result = [];
//   for (let i = 0; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }



// alternate syntax solutions

// function powersOfTwo(n) {
//   return Array.from({length: n + 1}, (v, k) => 2 ** k);
// }

// function powersOfTwo(n) {
//   return [...Array(n + 1)].map((_, i) => 2 ** i)
// }

// const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i )

module.exports = powersOfTwo;