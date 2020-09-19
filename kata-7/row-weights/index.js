// Scenario
// Several people are standing in a row divided into two teams.
//     The first person goes into team 1, the second goes into
// team 2, the third goes into team 1, and so on.
//
//     Task
// Given an array of positive integers (the weights of the people),
// return a new array/tuple of two integers, where the first one
// is the total weight of team 1, and the second one is the
// total weight of team 2.
//
// Notes
// Array size is at least 1.
// All numbers will be positive.
//     Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
//     The first element 62 is the total weight of team 1,
//     and the second element 27 is the total weight of team 2.
//
// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
//     The first element 120 is the total weight of team 1,
//     and the second element 140 is the total weight of team 2.
//
// rowWeights([80])  ==>  return (80, 0)
// Explanation:
//     The first element 80 is the total weight of team 1,
//     and the second element 0 is the total weight of team 2.

// fn(arr) => arr
// initialize var for each team weight to 0
// iterate the array arg and accumulate value of even idx to team 1 and odd idx to team 2
// put the two variables in an array and return

function rowWeights(array){
    let team1 = 0, team2 = 0;
    array.reduce((acc, cur, idx) =>  idx % 2 === 0 ? team1 += cur : team2 += cur, 0);
    return [team1, team2];
}

// best practice - filter then reduce
// function rowWeights(array){
//   let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
//   let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
//
//   return [t1, t2]
// }

// condensed refactor
// rowWeights = arr => arr.reduce((a,b,i) => (a[i % 2] += b, a), [0,0])

// good ol' fashioned for loop
// function rowWeights(array){
//   let arr = [0, 0];
//   for (let i = 0; i < array.length; i++) {
//     i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
//   }
//   return arr;
// }

module.exports = rowWeights;