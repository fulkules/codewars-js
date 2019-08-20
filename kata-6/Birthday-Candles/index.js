/* 
    You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

    For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 3, 3, 1, 2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 3 and there are such candles.
*/

let ar = [3,1,3,2,4]

// fn(ar) => int
// [3,1,3,2,4] => 1

function birthdayCakeCandles(ar){
    let count = 0
    
    let tallest = ar.reduce((a,b)=>{
  	    return Math.max(a, b)
    })

     ar.map((num) => {
    	num === tallest && count++
    })

    return count
}

// birthdayCakeCandles(ar)

module.exports = birthdayCakeCandles;