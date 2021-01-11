// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the
// same backward or forward. This includes capital letters, punctuation, and word dividers.
//
//     Implement a function that checks if something is a palindrome.
//
//     Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

// split the string
// iterate the characters forward and back
    // compare the character at each position
    // if it makes it all the way through, it's true
    // otherwise false

// optimal solution checks one char at a time
function isPalindrome(s){
    let str = s.toString();
    for(let i = 0; i < Math.floor(str.length/2); i++){
        if(str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
    }
    return true;
}

// alternate solution if no performance concerns
// function isPalindrome(s){
//     return typeof s === 'string'
//         ? s === s.split('').reverse().join('')
//         : s.toString() === s.toString().split('').reverse().join('');
// }

// if comparing a string where punctuation and capitalization do not matter use recursion
// // make all letters lowercase and remove non-alphanumeric characters
//   str = str.toLowerCase().replace(/[^a-z|1-9]/g, "");
//
//   // if  we get here and the length of the string is 0 then it is a palindrome
//   if (str.length === 0){
//     return true;
//   }
//   // if the first letter and the last letter of the string
//   // do not equal each other, then it is not a palindrome
//   if (str[0] !== str[str.length-1]){
//     return false;
//   }
//   //Else, run the function again without the first and last characters.
//   else{
//     return palindrome(str.slice(1,str.length - 1));
//   }
// }
//
// palindrome("A man, a plan, a canal, Panama");

module.exports = isPalindrome;