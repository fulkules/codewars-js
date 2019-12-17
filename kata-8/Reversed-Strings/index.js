// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

function reverse(str){
    return str.split("").reverse().join("");
}

module.exports = reverse;