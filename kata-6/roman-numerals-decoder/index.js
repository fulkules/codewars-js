// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
// You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
// starting with the leftmost digit and skipping any 0s.
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and
// 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII).
// The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//
// Example:
//
// solution('XXI'); // should return 21
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// fn(str) => num
// make a hash map with numeral values
// split the roman str into array
// initialize sum to 0
// iterate the split num array
// if the num at idx is less than num at idx + 1
    // increase sum by (hash num(idx+1)) and increment idx to skip idx + 1 and continue
// otherwise
    // increase sum by hash[num(idx]]
// return sum


function solution(roman) {
    let hash = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1},
        numbers = roman.split(''),
        sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(hash[numbers[i]] < hash[numbers[i+1]]){
            sum += hash[numbers[i+1]] - hash[numbers[i]];
            i++;
        } else {
            sum += hash[numbers[i]];
        }
    }

    return sum;
}

// refactor
// function solution(roman){
//   let hash = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
//
//     return [...roman].map(a => hash[a]).reduce((a,b) => a < b  ? b - a : a + b)
// }

// alternate solution
// function solution(roman){
//     var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
//     return roman.split('').reverse().reduce(
//         function(dec,c,i,rr){
//             c=rom[c];
//             i=rom[rr[i-1]]||0;
//             return dec + (i<=c? c: -c) }
//         ,0
//     )
// }

// array hash solution
// function solution(roman){
//     roman = roman.toUpperCase();
//     const romanList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
//     const romanVal = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
//     let idx =  0, val = 0;
//     for(let rn in romanList){
//         idx = roman.indexOf(romanList[rn]);
//         while(idx !== -1){
//             val += parseInt(romanVal[rn]);
//             roman = roman.replace(romanList[rn],"-");
//             idx = roman.indexOf(romanList[rn]);
//         }
//     }
//     return val;
// }

module.exports = solution;