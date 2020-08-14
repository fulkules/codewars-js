// Write a function named repeater() that takes two arguments (a string and a number),
// and returns a new string where the input string is repeated that many times.
//
//     Example:
// Repeater.repeat("a", 5)
// should return
//
// "aaaaa"

// fn(str, n) => str
// initialize empty str
// iterate up to n
// concat string in each iteration
// return concatenated str

function repeater(string, n){
    let newStr = '';
    for(let i = 1; i <= n; i++){
        newStr += string;
    }
    return newStr;
}

// best practice -- use string.repeat
// const repeater = (string, n) => {
//   return string.repeat(n);
// }

module.exports = repeater;