// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle
// digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
//
// Task
// Given a number, Find if it is Balanced or not .
//
//     Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit,
// e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0
//
// The middle digit(s) should not be considered when determining whether a number
// is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.
//
// Number passed is always Positive .
//
//     Return the result as String
//
// Input >> Output Examples
// (balanced-num 7) ==> return "Balanced"
// Explanation:
//     Since , The sum of all digits to the left of the middle digit (0)
//
// and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced
//
// (balanced-num 295591) ==> return "Not Balanced"
// Explanation:
//     Since , The sum of all digits to the left of the middle digits (11)
//
// and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced
//
// Note : The middle digit(s) are 55 .
//
// (balanced-num 959) ==> return "Balanced"
// Explanation:
//     Since , The sum of all digits to the left of the middle digits (9)
//
// and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced
//
// Note : The middle digit is 5 .
//
// (balanced-num 27102983) ==> return "Not Balanced"
// Explanation:
//     Since , The sum of all digits to the left of the middle digits (10)
//
// and the sum of all digits to the right of the middle digits (20) are Not equal , then It's Not Balanced
//
// Note : The middle digit(s) are 02 .

// fn(num) => str
// get length of num
    // convert num to string
    // if odd split the num string on right and left of center digit
    // if even split the num string on right and left of center digits
// convert strings to nums
// compare nums
// if equal, return balanced, else not balanced

const balancedNum = number => {
    const stringNumber = String(number);
    const numbers = Array.from(
        { length: (stringNumber.length - 1) / 2 },
        (_, index) => stringNumber[index] - stringNumber[stringNumber.length - 1 - index]
    );

    return numbers.reduce((total, number) => total + number, 0) === 0 ? 'Balanced' : 'Not Balanced';
};

// best practice
// function balancedNum(number) {
//
//   let str = `${number}`
//   ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
//   ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);
//
//   return sum(str.slice(0, len)) === sum(str.slice(-len))
//   ? 'Balanced'
//   : 'Not Balanced';
//
// }

// most readable
// function balancedNum(number){
//     let i, result = 0;
//     number = number + "";
//     for(i = 0; i < number.length / 2 - 1; i++){
//         result += +number[i] - +number[number.length - 1 - i];
//     }
//     return result === 0 ? "Balanced" : "Not Balanced";
// }

module.exports = balancedNum;