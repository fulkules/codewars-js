// This program tests the life of an evaporator containing a gas.
//
//     We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold)
// in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
//     The program reports the nth day (as an integer) on which the evaporator will be out of use.
//
//     Note : Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish.
//     Some people might prefer to reason with content, some other with percentages only.
//     It's up to you but you must keep it as a parameter because the tests have it as an argument.


// fn(int,int,int) => int
// initialize a day counter variable
// initialize a gas percentage variable = 100
// while the gas is >= threshold
//      subtract the evap per day from gas
//      increment day counter
// return the day counter

function evaporator(content, evap_per_day, threshold){
    let days = 0;
    let gas = 100;
    while(gas >= threshold){
        gas -= gas * evap_per_day / 100;
        days++;
    }
    return days;
}

// using mathematical formula
// function evaporator(content, evap_per_day, threshold){
//   threshold = threshold / 100
//   evap_per_day = evap_per_day / 100
//   return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
// }

module.exports = evaporator;