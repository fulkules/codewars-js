// Write simple .PascalCase method for strings.
// All words must have their first letter capitalized without spaces.
//
// For instance:
//
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)



String.prototype.PascalCase = function(){
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

// alternate solution
// String.prototype.PascalCase=function(){
//   const capitalize = (word) => {
//     return word.slice(0,1).toUpperCase() + word.slice(1)
//   }
//
//   return this
//     .split(' ')
//     .map(capitalize)
//     .join('')
// }

module.exports = String;