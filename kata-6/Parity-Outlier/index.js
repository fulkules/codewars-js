// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// fn(arr) => int
// will need to loop through the array
// push odds into odd arr, push evens into even arr
// return the VALUE in the shortest array

let integers = [2, 4, 0, 100, 4, 11, 2602, 36]

function findOutlier(integers){
  let evens = [];
  let odds = [];
  integers.forEach(int => {
    int % 2 === 0 ? evens.push(int) : odds.push(int)
  })
  return evens.length > odds.length ? odds[0] : evens[0]
}

findOutlier(integers)

// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }

module.exports = findOutlier;