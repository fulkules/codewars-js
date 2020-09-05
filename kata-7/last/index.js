// Find the last element of the given argument(s).
//
//     Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an
// array, a string or the list of arguments.

// fn(args) => last arg
// check the length of list
// if it's greater than 1 it's an array already
// if not, convert it to an array
// return the last index position of the array

function last(list){
  let args = list.length > 1 ? list : [...arguments];
  return args[args.length-1];
}

// best practice
// function last(list){
//     let last = arguments[arguments.length - 1];
//     return last[last.length - 1] || last;
// }

module.exports = last;