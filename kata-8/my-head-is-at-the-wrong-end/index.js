// You're at the zoo... all the meerkats look weird.
// Something has gone terribly wrong - someone has
// gone and switched their heads and tails around!
//
// Save the animals by switching them back. You will
// be given an array which will have three values
// (tail, body, head). It is your job to re-arrange
// the array so that the animal is the right way
// round (head, body, tail).
//
//     Same goes for all the other arrays/lists that
//     you will get in the tests: you have to change
//     the element positions with the same exact
//     logics - simples!

// fn(arr) => arr
// iterate array of words
// find the word that has head in it and put in first position
// find the word with body, put in 2nd position
// find word with tail, put in 3rd position
// return new array

const fixTheMeerkat = arr => arr.reverse();

module.exports = fixTheMeerkat;