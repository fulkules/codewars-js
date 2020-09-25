// Vampire Numbers
// Our loose definition of Vampire Numbers can be described as follows:
//
// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the
// # digits 6, 1, and 2 are present in both the product and multiplicands
//
// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the
//     product of the two is a valid vampire number.

// fn(num, num) => boolean
// put all digits from args into an array
// get the product from the two args
// compare args array with product array
    // iterate argsArray
    // if item at curr idx is found in prodArray
        // continue, and remove the first occurrence of the item in prodArr
// if there are the same amount of digits from args arr in product arr
    // return true
// else return false

const sortString = string =>
    String(string)
        .split('')
        .sort()
        .join('');

const vampire_test = (a, b) => sortString(a * b) === sortString(`${a}${b}`);

// best practice
// const vampire_test = function(a, b){
//   let origDigits = String(a) + String(b),
//       prodDigits = String(a * b);
//
//   origDigits = origDigits.split('').sort().join('');
//   prodDigits = prodDigits.split('').sort().join('');
//
//   return prodDigits === origDigits ? true : false;
// }

module.exports = vampire_test;