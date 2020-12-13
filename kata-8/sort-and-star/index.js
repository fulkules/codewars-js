// You will be given a vector of strings. You must sort it alphabetically
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
//     The returned value must be a string, and have "***" between each of its letters.
//
//     You should not remove or add elements from/to the array.

// sort the array of strings
// split the first string
    // iterate and insert *** in between each iterated char
// return the string

function twoSort(s){
    let sorted = s.sort();
    let first = sorted[0].split('');
    let str = '';
    for(let i = 0; i < first.length; i++){
        str += `${first[i]}`;
        if(i !== first.length - 1){
            str += '***';
        }
    }
    return str;
}

// best practice
// function twoSort(s) {
//   return s.sort()[0].split('').join('***');
// }

module.exports = twoSort;