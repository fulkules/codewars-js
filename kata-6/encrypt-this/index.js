// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)
//
// Description:
// Encrypt this!
//
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// fn(str) => str
// convert the string to an array
// iterate each word in the array
    // convert the first char to a string of its ASCII code
    // switch the first and last chars in remaining string
// join the array back to a string and return

const encryptThis = text => {
    let wordArr = text.split(' ');
    return wordArr.map(w => {
        let first = w.slice(1, 2),
            last = w.slice(-1),
            mid = w.slice(2, -1);
        return w.length === 1 ? `${w.charCodeAt(0)}` : `${w.charCodeAt(0)}${w.length > 1 ? last : ''}${w.length > 3 ? mid : ''}${w.length > 2 ? first : ''}`;
    }).join(' ');
};

// best practice
// const encryptThis = text => text
//   .split(' ')
//   .map(word => word
//   .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//   .replace(/^\w/, word.charCodeAt(0)))
//   .join(' ');

module.exports = encryptThis;