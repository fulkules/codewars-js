// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//
// Your task is to process a string with "#" symbols.
//
// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// fn(str) => str
// initialize a new arr
// iterate the str
    // if the curr char is #
        // remove the prev char
    // else
        // add the char to arr
// convert arr back to str & return

function cleanString(s){
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '#'){
            arr.pop();
        } else {
            arr.push(s[i]);
        }
    }
    return arr.join('')
}

// es6 using reduce & slice
// const cleanString = s => s.split('').reduce((acc, cur) => cur === '#' ? acc.slice(0, -1) : acc + cur, '');

module.exports = cleanString;