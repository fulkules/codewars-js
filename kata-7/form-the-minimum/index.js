// Task
// Given a list of digits, return the smallest number that could be
// formed from these digits, using the digits only once (ignore duplicates).
//
// Notes:
//     Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//     Input >> Output Examples
// minValue ([1, 3, 1])  ==> return (13)
// Explanation:
//     (13) is the minimum number could be formed from [1, 3, 1] , Without duplications

// fn(arr) => num
// remove duplicates from array
// sort new array
// join new array into string
// convert back to num
// return num

function minValue(values){
    let noDupes = [...new Set(values)];
    return Number(noDupes.sort((a,b) => a - b).join(''));
}

// concise refactor
// const minValue = v => +[...new Set(v)].sort().join('');

// best practice
// function minValue(values){
//   let arr = Array.from(new Set(values))
//   return parseInt(arr.sort().join(''))
// }

module.exports = minValue;