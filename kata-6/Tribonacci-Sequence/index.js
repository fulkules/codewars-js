// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

//     So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

//     [1, 1 ,1, 3, 5, 9, 17, 31, ...]

// you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature, n) {
  // handle falsy values
  (!n || !signature || signature.length < 3) && [];

  // store a copy of signature
  let newSig = [...signature];

  // while length of new array is less than `n`
  while (newSig.length < n) {
    // get the sum of signature array
    let sum = signature => signature.reduce((acc, cur) => acc + cur, 0);
    // push sum of current signature into new array
    newSig.push(sum(signature));
    // modify signature to be last 3 digits of new array
    signature = newSig.slice(newSig.length - 3, newSig.length);
  }
  // return the new array from start to n
  return newSig.splice(0, n);
}

// Refactor

// function tribonacci(signature,n){
//   for (let i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

module.exports = tribonacci;
