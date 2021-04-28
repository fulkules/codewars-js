// Write a function
//
// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any
// place in num1 and also a straight double of the same number in num2.
//
// If this isn't the case, return 0
//
// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s
//
// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2
//
// tripledouble(12345, 12345) == 0
//
// tripledouble(666789, 12345667) == 1

// fn(num, num) => num
// need to see if the first num has 3 consecutive nums
    // convert to string and iterate
    // compare i, i + 1, i + 2
    // if all the same grab the value at i
// 2nd num must have 2 of the same consecutive nums
    // convert to string and iterate
    // compare i, i + 1
    // if both match the value of triple
        // return 1 else 0

function tripledouble(n1, n2){
    let str = String(n1), str2 = String(n2), val = '';
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === str.charAt(i + 1) && str.charAt(i + 1) === str.charAt(i + 2)){
            val = str.charAt(i);
            for(let j = 0; j < str2.length; j++){
                if((str2.charAt(j) === str2.charAt(j + 1)) && str2.charAt(j) === val){
                    return 1;
                }
            }
        }
    }
    return 0;
}

// refactor with RegExp
// function tripledouble(num1, num2) {
//   for (let i = 0; i < 10; i++) {
//     if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
//       return 1;
//     }
//   }
//   return 0;
// }

// another interesting solution
// function tripledouble(num1, num2) {
//   let nums = [...Array(10).keys()];
//
//   return +nums.some(num =>
//     num1.toString().includes(num.toString().repeat(3)) &&
//     num2.toString().includes(num.toString().repeat(2))
//   );
// }

module.exports = tripledouble;