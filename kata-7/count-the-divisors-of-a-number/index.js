// Count the number of divisors of a positive integer n.
//
//     Random tests go up to n = 500000.
//
// Examples
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30

// fn(num) => num
// initialize a count var
// iterate up to num
// test if the curr num is divisible without remainder
// if it is, increase count


function getDivisorsCnt(n) {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count++;
        }
    }
    return count;
}

// refactor
// function getDivisorsCnt(n){
//     for (let d = 0, i = n; i > 0; i--){
//         if (!(n % i)) d++;
//     }
//     return d;
// }

// faster refactor -- no need to iterate all numbers
// function getDivisorsCnt(n) {
//     let cnt = 1;
//     for (let i = 0; i <= n / 2; ++i)
//         if (n % i === 0) ++cnt;
//     return cnt;
// }

module.exports = getDivisorsCnt;