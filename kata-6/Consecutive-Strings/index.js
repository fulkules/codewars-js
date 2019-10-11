// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"


// fn(arr,num) => str
// initialize sn empty str variables
// early return condition given above
// iterate the array
    // make a copy of the items from curr index position to k + curr index position and convert to string
    // if the length of this string is greater than the str variable
        // replace the str variable with this value
// return the str variable




function longestConsec(strArr, k){
    let n = strArr.length;
    let str = "";

    if(n === 0 || k > n || k <= 0) return "";

    for (let i = 0; i < n; i++){
        let currStr = strArr.slice(i, k+i).join("");
        if(currStr.length > str.length){
            str = currStr;
        }
    }
    return str;
}

module.exports = longestConsec;