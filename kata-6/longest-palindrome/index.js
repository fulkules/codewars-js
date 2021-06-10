// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.
//
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
//
// If the length of the input string is 0, the return value must be 0.
//
// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0


// fn(str) => num
// initialize longest to 0 (return for empty str)
// go thru str
    // nested walk thru str at next position
        // temp var to hold a copy of idx from first to second loop position
        // get length of this var
        // check if var is a palindrome & is it less than our curr longest?
            // reassign longest to new length
// return the longest


const longestPalindrome = (s) => {
    let longest = 0;

    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++) {
            let subStr = s.slice(i,j);
            let len = subStr.length;
            if(isPalindrome(subStr) && longest < len) {
                longest = len;
            }
        }
    }
    return longest;
};

function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}


// best practice
// const longestPalindrome = (s) => {
//     if (!s) return 0;
//     for (let c = s.length; c > 0; c--) {
//         for (let i = 0; i <= s.length - c; i++) {
//             let check = s.substr(i, c);
//             if (check === check.split("").reverse().join("")) return c;
//         }
//     }
// };

module.exports = longestPalindrome;