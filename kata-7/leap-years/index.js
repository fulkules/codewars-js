// In this kata you should simply determine, whether a given year is
// a leap year or not. In case you don't know the rules, here they are:
//
// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:
//
//     Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

// fn(num) => boolean
// declare boolean flag
// test conditions:
    // divisible by 4 = true
    // divisible by 100 = false
    // divisible by 400 = true
// return boolean

function isLeapYear(year){
    let ly;
    if(year % 4 === 0) ly = true;
    if(year % 100 === 0) ly = false;
    if(year % 400 === 0) ly = true;
    return ly;
}

// best practice (arguable, as above solution is more human readable)
// function isLeapYear(year) {
//   return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
// }

module.exports = isLeapYear;