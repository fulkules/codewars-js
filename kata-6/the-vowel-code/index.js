// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
// For example, decode("h3 th2r2") would return "hi there".
//
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// fn(str) => str
// create a key or hash map
// match the vowels or numbers
// walk through the string
    // if you have a match then replace the value
// return modified string

// function encode(s){
//     let key = { a: 1, e: 2, i: 3, o: 4, u: 5 };
//     let regex = /[aeiou]/g;
//     return s.split('').map(char => char.match(regex) ? char.replace(regex, key[char]) : char).join('');
// }
//
// function decode(s){
//     let key = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
//     let regex = /[1-5]/g;
//     return s.split('').map(char => char.match(regex) ? char.replace(regex, key[char]) : char).join('');
// }

// without regex is actually more performant, but less elegant and much longer to write
// let regex = c => ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
// let regex = n => [1, 2, 3, 4, 5].indexOf(n.toLowerCase()) !== -1

// simplified - best practice

// turn vowels into numbers
function encode(string){
    return string.replace(/[aeiou]/g, (x) =>'_aeiou'.indexOf(x));
}

//turn numbers back into vowels
function decode(string){
    return string.replace(/[1-5]/g, (x) +> '_aeiou'.charAt(x));
}

module.exports = { encode, decode };