// Find the sum of the odd numbers within an array,
// after cubing the initial integers. The function
// should return undefined/None/nil/NULL if any of
// the values aren't numbers.

// fn(arr) => num
// test that all items in arr are nums
// if not return undefined
// else iterate nums and cube
// get all odd nums
// sum all odd nums
// return sum

const cubeOdd = array => {
    const areNumbers = array.every(element => typeof element === 'number')
    if (!areNumbers) return undefined;

    return array
        .map(number => number ** 3)
        .filter(number => number % 2 !== 0)
        .reduce((total, value) => total + value, 0)
};

// voted best practice
// const cubeOdd = a => {
//   var isNumeric = a.every(x=>!isNaN(x))
//   return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
// }

// alternate solution
// function cubeOdd(arr) {
//   arr = arr.filter((num) => {return num % 2 != 0});
//   arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
//   return isNaN(arr) ? undefined : arr;
// }

module.exports = cubeOdd;