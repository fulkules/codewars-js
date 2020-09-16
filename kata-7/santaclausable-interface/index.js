// You probably know, that in Javascript (and also Ruby) there is no
// concept of interfaces. There is only a concept of inheritance, but
// you can't assume that a certain method or property exists, just
// because it exists in the parent prototype / class. We want to find
// out, whether a given object fulfils the requirements to implement
// the "SantaClausable" interface. We need to implement a method
// which checks for this interface.

// Rules
// The SantaClausable interface is implemented, if all of the
// following methods are defined on an object:
//
//     sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney
// Example
// var santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };
//
// var notSanta = {
//     sayHoHoHo: function() { console.log('Oink Oink!') }
//     // no distributeGifts() and no goDownTheChimney()
// };
//
// isSantaClausable(santa); // must return TRUE
// isSantaClausable(notSanta); // must return FALSE

// fn(obj) => boolean
// initialize santaClausable keys in an array
// get the object keys into an array
// compare the length of the arrays
// if lengths are equal
    // if the obj has all the keys from the array return true
// if not return false

// initial attempt -- this does not check if the obj has the properties
// AND THAT THEY ARE FUNCTIONS (not clear in description)

// function isSantaClausable(obj){
//     let clauses = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
//     let keys = Object.keys(obj);
//     return keys.length === clauses.length
//         ? keys.every((key, i) => key === clauses[i])
//         : false;
// }

// refactor
const isSantaClausable = object =>
    ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(
        methodName => typeof object[methodName] === 'function'
    );

module.exports = isSantaClausable;