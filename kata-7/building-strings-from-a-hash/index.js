// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby)
// passed in and generates a human readable string from its key/value pairs.
//
//     The format should be "KEY = VALUE". Each key/value pair should be
// separated by a comma except for the last pair.
//
//     Example:
//
// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

// fn(obj) => string
// initialize an empty str variable
// iterate the obj
// build str, concat the key + = + value + comma
// chop the last comma off the string
// return string

// initial solution
// function solution(pairs){
//     let str = '';
//     for(let prop in pairs){
//         str += `${prop} = ${pairs[prop]},`;
//     }
//     return str.slice(0, -1);
// }

// using Object.entries
// const solution = pairs =>
//     Object.entries(pairs)
//         .map(([key, value]) => `${key} = ${value}`)
//         .join(',');

// for...in loop and Object.entries iterate over the properties of an object in an ARBITRARY order,
// so if you need to order things specifically, use Object.keys or you can sort
// items first (e.g.): Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));
// (see the delete operator for more on why one cannot depend on the seeming
// orderliness of iteration, at least in a cross-browser setting).



// BEST PRACTICE using Object.keys maintains the order as if looping manually
// function solution(pairs) {
//   return Object.keys(pairs)
//              .map(k => `${k} = ${pairs[k]}`)
//              .join(",");
// }

module.exports = solution;