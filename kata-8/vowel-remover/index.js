// Create a function called shortcut to remove all the lowercase vowels in a given string.
//
//     Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby
// Don't worry about uppercase vowels.



function shortcut(s){
    return s.replace(/[aeiou]/g, '');
}

// alternate solution using split, filter, join
// function shortcut(str) {
//   return str.split('').filter(function(e) {
//     return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1
//   }).join('')
// }

module.exports = shortcut;