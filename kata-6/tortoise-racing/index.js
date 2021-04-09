// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.
//
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour.
// How long will it take B to catch A?
//
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?
//
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and
// seconds (round down to the nearest second) or a string in some languages.
//
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal,
// [] for Kotlin or "-1 -1 -1".
//
// Examples:
// (form of the result depends on the language)
//
// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".
//
// In Fortran - as in any other language - the returned string is not permitted to contain any
// redundant trailing whitespace: you can use dynamically allocated character strings.
//
// ** Hints for people who don't know how to convert to hours, minutes, seconds:
//
// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

// fn(num, num, num) => array
// if v2 <= v1 early return null cuz we know v2 will never catch up
// get the seconds it will take to catch up
    // g is in feet
    // v1 & v2 are feet per hour
        // divide g by the diff between v1 & v2
        // multiply this by 3600 to get the seconds
// now we have the total seconds, so convert this to [hours, mins, secs]
    // get hours
        // seconds divided by 3600
    // get minutes
        // (seconds minus (hours * 3600)) / 60
    // get seconds
        // seconds minus (hours * 3600) minus (mins * 60)
// return the floor of each h, m, s

function race(v1, v2, g) {
    if (v2 <= v1) return null;

    let seconds = Math.floor(g / (v2 - v1) * 3600);
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds - h * 3600) / 60);
    let s = seconds - h * 3600 - m * 60;

    return [h, m, s];
}

// best practice
// function race(v1, v2, g){
//     if(v1 >= v2) return null;
//     let time = g / (v2 - v1);
//     return [Math.floor(time), Math.floor((time * 60) % 60), Math.floor((time * 3600) % 60)];
// }

// interesting solution
// function race(v1, v2, g) {
//     if (v1 >= v2) {
//       return null;
//     }
//     var time = new Date (g / (v2 - v1) * 3600 * 1000);
//     return [time.getHours(), time.getMinutes(), time.getSeconds()];
// }

module.exports = race;