// Write a function to split a string and convert it
// into an array of words. For example:
//
//     "Robin Singh" ==> ["Robin", "Singh"]
//
// "I love arrays they are my favorite" ==>
// ["I", "love", "arrays", "they", "are", "my", "favorite"]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

function stringToArray(s){
    return s.split(' ');
}

module.exports = stringToArray;