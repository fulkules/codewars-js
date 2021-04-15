// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
//
// Examples:
//
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
//
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.
//
// This kata is part of the Simple Encryption Series:
// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)



function encrypt(text, n){
    if(!text || n < 1) return text;

    let second = text.split('').filter((char, i) => i % 2 === 1).join('');
    let others = text.split('').filter((char, i) => i % 2 === 0).join('');
    return encrypt(`${second}${others}`, n - 1);
}

function decrypt(encryptedText, n){
    if(!encryptedText || n < 1) return encryptedText;

    let mid = encryptedText.length / 2,
        first = encryptedText.split('').slice(mid),
        second = encryptedText.split('').slice(0, mid),
        z = [];

    for(let i = 0; i < encryptedText.length; i++){
        if(i % 2 === i - 1){
            z.push(second[i]);
            z.push(first[i]);
        } else {
            z.push(first[i]);
            z.push(second[i]);
        }
    }
    return decrypt(z.join(''), n - 1);
}

// best practice
// function encrypt(text, n) {
//   for (let i = 0; i < n; i++) {
//     text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
//   }
//   return text
// }
//
// function decrypt(text, n) {
//   let l = text && text.length / 2 | 0
//   for (let i = 0; i < n; i++) {
//     text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
//   }
//   return text
// }

// alternate solution
// function encrypt(text, n) {
//   console.log(text, n);
//   if (!text || n <= 0) return text;
//   while (n--) {
//     let ans = '';
//     for (let i = 1; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     for (let i = 0; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     text = ans;
//   }
//   return text;
// }
//
// function decrypt(encryptedText, n) {
//   if (!encryptedText || n <= 0) return encryptedText;
//   const ans = new Array(encryptedText.length);
//   while (n--) {
//     let j = 0;
//     for (let i = 1; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     for (let i = 0; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     encryptedText = ans.join('');
//   }
//   return encryptedText;
// }

// module.exports = encrypt;
module.exports = decrypt;