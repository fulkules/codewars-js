// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
//
// Add the value "codewars" to the array websites/Websites 1,000 times.
//
//     var websites = []


// https://tc39.es/ecma262/#sec-array.prototype.fill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
var websites = new Array(1000).fill("codewars");

// best practice
// while (websites.length < 1000) websites.push("codewars")

module.exports = websites;