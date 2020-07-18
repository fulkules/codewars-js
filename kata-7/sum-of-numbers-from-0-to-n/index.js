// Description:
//
//     We want to generate a function that computes the series starting from 0 and ending until the given number.
//
//     Example:
// Input:
//
//     > 6
// Output:
//
//     0+1+2+3+4+5+6 = 21
//
// Input:
//
//     > -15
// Output:
//
//     -15<0
//
// Input:
//
//     > 0
// Output:
//
//     0=0

// fn(int) => str
// initialize a sum variable as 0
// initialize empty str var
// account for edge cases count <= 0
// iterate up to count
// concatenate idx to str in each loop
// add idx to sum each loop
// return sum str with total

const SequenceSum = count => {
    let sum = 0;
    let sumStr = '';
    if (count === 0) {
        return `${count}=${sum}`;
    } else if(count < 0){
        return `${count}<${sum}`
    } else if(count > 0){
        for(let i = 0; i <= count; i++){
            if(i < count){
                sum += i;
                sumStr += `${i}+`;
            }

            if(i === count){
                sum += i;
                sumStr += `${i} = `;
            }
        }
        sumStr += `${sum}`;
    }
    return sumStr;
};

// using Array.prototype.from
// function SequenceSum(n) {
//     return n < 0
//       ? `${n}<0`
//       : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
//   }

module.exports = SequenceSum;