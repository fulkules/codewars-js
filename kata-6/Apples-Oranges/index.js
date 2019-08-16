/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where `s` is the start point, and `t` is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point `a`, and the orange tree is at point `b`.

When a fruit falls from its tree, it lands `d` units of distance from its tree of origin along the `x`-axis. A negative value of `d` means the fruit fell `d` units to the tree's left, and a positive value of `d` means it falls `d` units to the tree's right.

Given the value of `d` for `m` apples and `n` oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range `[s,t]`)?

For example, Sam's house is between `s = 7` and `t = 10`. The apple tree is located at `a = 4` and the orange at `b = 12`. There are `m = 3` apples and `n = 3` oranges. Apples are thrown `[2, 3, (-4)]` units distance from `a`, and `oranges = [3, (-2), (-4)]` units distance. Adding each apple distance to the position of the tree, they land at `[4 + 2, 4 + 3, 4 + (-4)] = [6, 7, 0]`. Oranges land at [12 + 3, 12 + (-2), 12 + (-4)]. One apple and two oranges land in the inclusive range `[7 - 10]` so we print `1  2`
*/

let s = 7;
let t = 10;
let a = 4;
let b = 12;
let apples = [3, -2, 1];
let oranges = [-3, 2, -1];

// 1
// 1




function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // initialize apple & orange count variables to 0
    let appleCount = 0;
    let orangeCount = 0;

  // loop through the apples
	for(let i = 0; i < apples.length; i++) {
    // get the apple position
    let pos = apples[i] + a;
      // condition to increase apple count
      if(pos >= s && pos <= t) appleCount++;
  }
    
  // loop through oranges
  for(let i = 0; i < oranges.length; i++) {
    // get orange position
    let pos = oranges[i] + b;
      // condition to increase orange count
      if(pos >= s && pos <= t) orangeCount++;
  }
  // log the final apple & orange counts
  return [appleCount, orangeCount];
 }

/***************REFACTOR****************/

//  function countApplesAndOranges(s, t, a, b, apples, oranges) {
//  	let appleCount = apples.filter(e => e+a >= s && e+a <= t).length;
//  	let orangeCount = oranges.filter(e => e+b >= s && e+b <= t).length;
//      console.log(`${appleCount}${'\n'}${orangeCount}`);    
//  }

 countApplesAndOranges(s,t,a,b,apples,oranges)
 module.exports = countApplesAndOranges;