// Write function avg which calculates average of numbers in given list.

function find_average(array) {
    let count = array.length;
    let sum = array.reduce((prv,cur) => cur += prv);
    return sum/count;
}

module.exports = find_average;