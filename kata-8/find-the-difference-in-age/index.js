// At the annual family gathering, the family likes to find the oldest living family member’s age
// and the youngest family member’s age and calculate the difference between them.
//
//     You will be given an array of all the family members' ages, in any order. The ages will be
//     given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
//     Return a new array (a tuple in Python) with [youngest age, oldest age, difference
//     between the youngest and oldest age].



function differenceInAges(ages){
    let fam = ages.sort((a, b) => a - b);
    let young = fam[0];
    let old = fam[fam.length - 1];
    let diff = old - young;
    return [young, old, diff];
}

// best practice
// function differenceInAges (ages) {
//     let max = Math.max(...ages),
//         min = Math.min(...ages)
//         diff = max - min
//     return [min, max, diff]
// }

module.exports = differenceInAges;