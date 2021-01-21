// Imagine you are a professional thief and you’ve broken into an art museum. The security will only go off
// if adjacent paintings are taken off a wall. Given an array of numbers representing the value of each painting
// determine the maximum value of stolen paintings. In the following array of painting values: [3,5,6,2,1,8],
// the maximum heist value would be from 3,6,8 for a total of 17.




// const nums = [3,5,6,2,1,8]; //  => [3 + 6 + 8] => 17
// let nums = [1,0,0,4]; // => [1,4] => 5
// let nums = [6, 7, 1, 3, 8, 2, 4]; // => [7,8,4] => 19


    /***************RECURSION******************/
    const stealRecursive = (nums, i = nums.length - 1) => {
        //Base case 
        if (i < 0) {
            return 0;
        }
        //Recursion to cover all possibilities
        return Math.max(nums[i] + stealRecursive(nums, i - 2), stealRecursive(nums, i - 1));
    }
    
    // stealRecursive(nums)
    
    /***************MEMOIZATION******************/
    //Added an array for memoization
    const stealTopDown = (nums, i=nums.length-1) => {
        let memo = []
        if (i < 0) {
            return 0;
        }
        //checks if solution already exists before calculating
        if (memo[i] >= 0) {
            return memo[i];
        }
        let result = Math.max(nums[i] + stealTopDown(nums, i - 2), stealTopDown(nums, i - 1));
        //saves result for future use
        memo[i] = result;
        return result;
    }
    
    // stealTopDown(nums)
    
    /***************TABULATION******************/
    const stealBottomUp = nums => {
        let tab = [0, nums[0]];
        for (let i = 1; i < nums.length; i++) {
            tab[i + 1] = Math.max(nums[i] + tab[i - 1] , tab[i]);
        }
        return tab[nums.length];
    }
    
    // stealBottomUp(nums)
    
    /***************OPTIMIZED******************/
    const stealOptimized = (nums) => {
        let prevMax = 0;
        let twoAwayMax = 0;
        nums.forEach(num => {
            //Destructuring assignment to swap values
            [prevMax, twoAwayMax] = [Math.max(num + twoAwayMax, prevMax), prevMax];
        })
        return prevMax;
    }
    
    // stealOptimized(nums)
    
    // https://medium.com/dataseries/learning-dynamic-programming-with-a-popular-coding-interview-question-5a5c0170fa44

module.exports = { stealBottomUp, stealOptimized, stealRecursive, stealTopDown };

