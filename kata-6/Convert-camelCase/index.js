// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
    // split the str into array
    str = str.split('');
    // map through the array
    return str.map(function(el, i){
      // if the char is a dash or underscore
      if(el === '-' || el === '_'){
        // convert the next char to uppercase
        el = str[i+1].toUpperCase();
      // console.log(i)
        // pull out one char at this index (should pull out the hyphen and underscore)
        str.splice(i, 1);
      }
      // return the char
      return el;
    // join the chars together with no spaces
    }).join('');
  }

  // refactor
//   function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
//   }

module.exports = toCamelCase;