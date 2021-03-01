// Your function takes two arguments:
//
//     current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).



function twiceAsOld(dadYearsOld, sonYearsOld){
    if(!sonYearsOld) return dadYearsOld;
    let diff = dadYearsOld - sonYearsOld;
    return diff < sonYearsOld
                ? sonYearsOld - diff
                : diff - sonYearsOld;
}

// best practice
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

module.exports = twiceAsOld;