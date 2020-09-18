// Write a function that finds the sum of all its arguments.
//
//     eg:
//
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// fn(...nums) => num
// spread args into array
// iterate and accumulate the sum of all nums
// return the sum

function sum(){
    return [...arguments].reduce((acc, cur) => acc + cur, 0);
}

// voted best practice
// function sum() {
//   let total = 0;
//   for(let i in arguments){
//     total += arguments[i];
//   }
//   return total;
// }

// alternate solution using Array.prototype.reduce.call
// function sum() {
//   return Array.prototype.reduce.call(arguments, function(t, v) {
//     return t + v;
//   }, 0);
// }

// alternate using Array.from
// function sum() {
//   return Array.from(arguments).reduce((x,y)=>x+y,0);
// }

module.exports = sum;