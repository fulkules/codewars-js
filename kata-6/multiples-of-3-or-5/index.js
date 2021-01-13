// 16 => [3, 5, 6, 9, 10, 12, 15] => 60
// 10 => [3, 5, 6, 9] => 23
// 6 => [3,5] => 8

// declare a function taking in a num
// loop up to given num
// set an empty array to push nums divisible by 3 & 5
// make sure there are no duplicate nums
// return sum of all nums in array

function solution(num){
    let ourArr = [];
    for (let i = 1; i < num; i++){
      if(i % 3 === 0 || i % 5 === 0){
        ourArr.push(i)
      } 
    }
    if(ourArr.length > 0){
      return ourArr.reduce((acc, cur) => acc + cur)
    } else {
      return 0;
    }
  }

  // short syntax solution
  
  // function solution(number) {
  //   let result = 0
  //   for (let i = 0; i < number; i++) if (i % 3 === 0 || i % 5 === 0) result += i
  
  //   return result
  // }
  
  module.exports = solution;