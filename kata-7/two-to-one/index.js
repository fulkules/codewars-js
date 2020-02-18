// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1,s2) {
    const a = s1.split('');
    const b = s2.split('');

    return [...new Set([...a, ...b])].sort().join('');
}

// using filter
// const longest = (s1,s2) => (s1+s2).split('').sort().filter((a,b,c) => a !== c[b-1]).join('');

// using Object.keys
// function longest(s1, s2) {
//     let str = s1 + s2;
//     let obj = {};
//     for(let i = 0; i < str.length; i++) {
//       obj[str[i]] = true;
//     }
//     return Object.keys(obj).sort((a,b) => a.localeCompare(b)).join('');
// }



module.exports = longest;
