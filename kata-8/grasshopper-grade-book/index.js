// Grade book
// Complete the function so that it finds the mean of the three
// scores passed to it and returns the letter value associated with that grade.
//
//     Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check
// for negative values or values greater than 100.



function getGrade(...grades){
    let mean = grades.reduce((acc, cur) => acc + cur) / grades.length;

    if (mean >= 90) return 'A';
    if (mean >= 80 && mean < 90) return 'B';
    if (mean >= 70 && mean < 80) return 'C';
    if (mean >= 60 && mean < 70) return 'D';
    return 'F';
}

// interesting solution
// const grades = { A: 90, B: 80, C: 70, D: 60, F: 0 };
// const sum    = (sum, item)  => sum + item;
// const mean   = (...numbers) => numbers.reduce(sum, 0) / numbers.length;
//
// function getGrade () {
//   const score = mean(...arguments);
//
//   for (key in grades) {
//     if (!grades.hasOwnProperty(key)) continue; // Never do a for-in without this
//     if (score >= grades[key]) return key;
//   }
// }

// creative solution
// const getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);

module.exports = getGrade;