// The Collatz Conjecture states that for any natural number n, if n is even,
//     divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat
// the process continuously for n, n will eventually reach 1.
// also known as the 3n + 1 problem, 3n + 1 conjecture, Ulam conjecture,
// Kakautani's problem, Thwaites conjecture, Hasse's algorithm, or Syracuse problem.
//
// For example, if n = 20, the resulting sequence will be:
//
//     [20, 10, 5, 16, 8, 4, 2, 1]
//
// Write a program that will output the length of the Collatz Conjecture
// for any given n. In the example above, the output would be 8.
//
// For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture

// fn(num) => num
// make the mathematical formula algorithm as pure function
// initialize an array with the starting num
// while this num is not equal to 1
    // run the algorithm on num and set result as num
    // put the num into the array
// return the length of the array

const collatzNumber = n => (n % 2 === 0 ? n / 2 : n * 3 + 1);

const collatz = n => {
    const result = [n];
    while (n !== 1) {
        n = collatzNumber(n);
        result.push(n);
    }
    return result.length;
};

// simplified & best practice
// function collatz(n) {
//   let l = 1;
//   while(n > 1) {
//     n = n % 2 === 0 ? (n / 2) : ((n * 3 ) + 1);
//     l++
//   }
//   return l;
// }

module.exports = collatz;