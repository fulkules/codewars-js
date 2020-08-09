// Find the number with the most digits.
//
//     If two numbers in the argument array have the same
// number of digits, return the first one in the array.

// fn(arr) => num
// map over array and get new array of lengths
// find the longest str
// find the first of longest str
// return the first

function findLongest(array){
    const numberLength = num => `${num}`.length;
    const lengths = array.map( n => numberLength(n));
    const biggest = Math.max(...lengths);
    const first = array.find(num => numberLength(num) === biggest);
    return first;
}

// best practice using reduce
// const findLongest = l =>
//  l.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

module.exports = findLongest;