// Given 2 strings, a and b, return a string of the form:
// shorter+reverse(longer)+shorter.
//
//     In other words, the shortest string has to be put as
//     prefix and as suffix of the reverse of the longest.
//
//     Strings a and b may be empty, but not null (In C# strings
//     may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// fn(str, str) => str
// get long and short strings as vars
// reverse the longest
// concat short+long+short

function shorter_reverse_longer(a, b){
    let long = a.length >= b.length ? a.split('').reverse().join('') : b.split('').reverse().join('');
    let short = a.length >= b.length ? b : a;
    return `${short}${long}${short}`;
}

// other solution
// function shorter_reverse_longer(a,b){
//   if (b.length > a.length) [a, b] = [b, a];
//   return b + a.split('').reverse().join('') + b;
// }

module.exports = shorter_reverse_longer;