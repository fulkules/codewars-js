// Complete the function which takes two arguments and returns
// all numbers which are divisible by the given divisor. First
// argument is an array of numbers and the second is the divisor.
//
//     Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// fn(arr, num) => arr

function divisibleBy(nums, divisor){
    let res = [];
    nums.map(num => !(num % divisor) && res.push(num));
    return res;
}

// best practice
// const divisibleBy = (nums, divisor) => nums.filter(n => !(n % divisor));

module.exports = divisibleBy;