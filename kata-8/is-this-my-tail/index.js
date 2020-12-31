// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals
// do not have the right tails. To help her, you must correct the broken function to make sure
// that the second argument (tail), is the same as the last letter of the first argument (body)
// - otherwise the tail wouldn't fit!
//
// If the tail is right return true, else return false.
//
//     The arguments will always be strings, and normal letters.
//
//     For Haskell, body has the type of String and tail has the type of Char.
//     For Go, body has type string and tail has type rune.



function correctTail(bod, tail){
    return bod.slice(-1) === tail;
}

// best practice
// function correctTail(bod, tail) {
//   return bod[bod.length-1] === tail
// }

// ECMA 262 - 2021
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
// https://tc39.es/ecma262/#sec-string.prototype.endswith

// const correctTail = (x,y) => x.endsWith(y);

module.exports = correctTail;


