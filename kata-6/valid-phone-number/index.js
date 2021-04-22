// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.
//
// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)
//
// Examples:
//
// validPhoneNumber("(123) 456-7890")  =>  returns true
// validPhoneNumber("(1111)555 2345")  => returns false
// validPhoneNumber("(098) 123 4567")  => returns false

// fn(str) => boolean
// need to be 2 chunks
// check values at certain positions

// or use regex

function validPhoneNumber(num){
    let arr = num.split(' '), valid = true;
    if(arr.length !== 2) return false;
    if(arr[0].charAt(0) !== '(' || arr[0].charAt(4) !== ')' || arr[0].length !== 5) return false;
    if(arr[1].charAt(3) !== '-' || arr[1].length !== 8) return false;
    return valid;
}

// best practice - use regex
// function validPhoneNumber(phoneNumber){
//   return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
// }

module.exports = validPhoneNumber;