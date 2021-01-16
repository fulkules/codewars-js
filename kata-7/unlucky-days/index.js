// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
//
//     Find the number of Friday 13th in the given year.
//
//     Input: Year in Gregorian calendar as integer.
//
//     Output: Number of Black Fridays in the year as an integer.
//
//     Examples:
//
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// fn(num) => num
// initialize a count
// iterate the months in a given year
// establish an inner d var using the given year, the cur month, and 13 as the day
// get the day from d
    // if it's the 5th day (friday)
        // increase the count

function unluckyDays(year) {
    let count = 0;
    for (let month = 0; month < 12; month++) {
        let d = new Date(year,month,13);
        if(d.getDay() == 5){
            count++;
        }
    }
    return count;
}

// alternate solutions
// function unluckyDays(year){
//   return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
// }

// const unluckyDays = year => [...Array(12).keys()]
//   .reduce((count, month) => count + (new Date(year, month, 13).getDay() === 5 ? 1 : 0), 0);

module.exports = unluckyDays;