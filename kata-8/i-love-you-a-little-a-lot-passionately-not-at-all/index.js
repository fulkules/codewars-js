// Who remembers back to their time in the schoolyard, when girls
// would take a flower and tear its petals, saying each of the
// following phrases each time a petal was torn:
//
//     I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement,
// dreams, surging thoughts and emotions.
//
//     Your goal in this kata is to determine which phrase the
//     girls would say for a flower of a given number of
//     petals, where nb_petals > 0.

// fn(num)  => str

function howMuchILoveYou(petals){
    let responses = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let mod = petals > 6 ? (!(petals % 6) ? 6 : petals % 6) : petals;
    return responses[mod - 1];
}

// best practice
// const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]
//
// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length]
// }

// alternate solutions
// const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n % 6]

// function howMuchILoveYou(nbPetals) {
//   let phrase = {
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly"
//   }
//   return phrase[nbPetals%6]
// }

// function howMuchILoveYou(nbPetals) {
//   let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//   return petals[(nbPetals-1) % 6];
// }

module.exports = howMuchILoveYou;