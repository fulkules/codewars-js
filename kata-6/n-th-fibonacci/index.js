// I love Fibonacci numbers in general, but I must admit I love some more than others.
//
// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
//
// For example:
//
//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.
//
// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.


// use math formula


function nthFibo(n) {
    let arr = [0, 1];
    if(!arr[n]){
        while(arr.length < n){
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
    }
    return arr[n - 1];
}

// voted best practice
// function nthFibo(n) {
//   let [prev, curr] = [0, 1];
//   for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//   return prev;
// }

// alternate solutions

// function nthFibo(n) {
//   return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
// }

// const nthFibo = n =>
//   Math.round(((1 + 5 ** .5) / 2) ** --n / 5 ** .5);

// function nthFibo(n) {
//   let a = 0, b = 1;
//
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return n == 1 ? a : b;
// }

module.exports = nthFibo;