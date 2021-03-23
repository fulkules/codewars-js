// Create a function taking a positive integer as its parameter and returning a string containing
// the Roman Numeral representation of that integer.
//
//     Modern Roman numerals are written by expressing each digit separately starting with the left most
//     digit and skipping any digit with a value of zero.  In Roman numerals 1990 is rendered: 1000=M,
//     900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses
//     each Roman symbol in descending order: MDCLXVI.
//
//     Example:
//
// solution(1000); // should return 'M'
// Help:
//
//     Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.
//
// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
//

// fn(num) => str
// make a key obj reflecting numerals and equiv values
// initialize an empty str var
// iterate the key obj
    // while the number is greater than the key w/ equiv value
        // add key from key obj to the empty str
        // subtract the curr key obj value from the number
// return the newly built string

function solution(number){
    if(isNaN(number)) return NaN;
    let key = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        roman = '';
    for(let i in key){
        while(number >= key[i]){
            roman += i;
            number -= key[i];
        }
    }
    return roman;
}

module.exports = solution;