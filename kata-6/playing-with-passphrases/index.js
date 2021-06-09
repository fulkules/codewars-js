// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently
// they can be guessed due to common cultural references. You can get your passphrases stronger by different means.
// One is the following:
//
// choose a text in capital letters including or not digits and non alphabetic characters,
//
// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.

// Example:
// your text: "BORN IN 2015!", shift 1
//
// 1 + 2 + 3 -> "CPSO JO 7984!"
//
// 4 "CpSo jO 7984!"
//
// 5 "!4897 Oj oSpC"


function playPass(s, n) {
    return s
        .replace(/\d/g, (a) => 9 - a)
        .replace(/[A-Z]/g, (l) =>
            String.fromCharCode(((l.charCodeAt(0) + n - 65) % 26) + 65),
        ).split``
        .map((a, i) => (i % 2 ? a.toLowerCase() : a.toUpperCase()))
        .reverse().join``;
}

// best practice
// function playPass(s, n) {
//   return s
//     .replace(/[A-Z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65);
//     })
//     .replace(/[a-z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97);
//     })
//     .replace(/\d/g, function(digit) {
//       return 9 - digit;
//     })
//     .replace(/(.)(.?)/g, function(match, odd, even) {
//       return odd.toUpperCase() + even.toLowerCase();
//     })
//     .split('').reverse().join('');
// }

module.exports = playPass;