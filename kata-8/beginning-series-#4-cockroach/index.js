// The cockroach is one of the fastest insects. Write a function
// which takes its speed in km per hour and returns it in cm per
// second, rounded down to the integer (= floored).
//
//     For example:
//
//     cockroachSpeed(1.08) == 30
// Note! The input is a Real number (actual type is language
// dependent) and is >= 0. The result should be an Integer.

// fn(num) => num
// 1000 m = 1km
// 100 cm = 1m
// 60 min = 1hr
// 60 secs = 1min


function cockroachSpeed(s){
    let m = (1000 * s);
    let cm =  m * 100;
    return Math.floor(cm / 60 / 60);
}

// function cockroachSpeed(s) {
//   const secsInHour = 3600;
//   const centimetersInKilometers = 100000;
//
//   return Math.floor((s*centimetersInKilometers)/secsInHour);
// }

module.exports = cockroachSpeed;