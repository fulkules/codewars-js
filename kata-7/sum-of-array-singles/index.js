// In this Kata, you will be given an array of numbers in which two
// numbers occur once and the rest occur only twice. Your task will
// be to return the sum of the numbers that occur only once.
//
//     For example, repeats([4,5,7,5,4,8]) = 15 because only the
//     numbers 7 and 8 occur once, and their sum is 15.
//     Every other number occurs twice.
//
//     More examples in the test cases.
//
//     Good luck!

// fn(arr) => num
// remove all items that occur more than once from the array
    // careful here -- [...new Set(arr)] will not work in this case
// iterate and add up sum of remaining nums
// return sum

function repeats(arr){
    let uniq = arr.filter(item => arr.lastIndexOf(item) === arr.indexOf(item));
    return uniq.reduce((acc, cur) => acc + cur);
}

// shortened syntax
// const repeats = arr => arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,b) => a + b);

// interesting solution using Set.prototype.has()
// https://tc39.es/ecma262/#sec-set.prototype.has
// surprisingly supported by IE11
// function repeats(arr) {
//   let seen = new Set();
//   let sum = 0;
//
//   for (let v of arr) {
//     if (!seen.has(v)) {
//       seen.add(v);
//       sum += v;
//     } else {
//       sum -= v;
//     }
//   }
//
//   return sum;
// };

module.exports = repeats;