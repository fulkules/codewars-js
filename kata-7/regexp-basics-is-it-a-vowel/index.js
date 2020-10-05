// Implement the function which should return true if
//     given object is a vowel (meaning a, e, i, o, u),
// and false otherwise.



String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this);
};

// functional solution without regex
// function isVowel(c) {
//     return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
// }

module.exports = String;