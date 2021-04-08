// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//
// Input to the function is guaranteed to be a single string.
//
// Examples
// Valid inputs:
//
// 1.2.3.4
// 123.45.67.89
// Invalid inputs:
//
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

// fn(str) => boolean
// must have 4 octets w/values 0 - 255
    // anything with letters invalid
    // leading 0 is invalid if number has more than one digit
    // numbers not within range invalid

function isValidIP(str){
    let expression = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
    if(str !== str.trim()) return false;
    if (expression.test(str)) {
        return true;
    } else {
        return false;
    }
}

// best practice
// function isValidIP(str) {
//   return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
// }

// regex solution
// function isValidIP(str) {
//   return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }

// outside the box solution
// const net = require('net');
// const isValidIP = (s) => net.isIP(s);

// array.every
// function isValidIP(str) {
//     var p = str.split('.');
//     return p.length == 4 && p.every(function(s) {
//         return /^\d+$/.test(s) && s >= 0 && s <= 255;
//     });
// }

// Pure function
// function isValidIP(str) {
//     const octets = str.split('.')             // Split into octets
//     return (octets.length === 4) &&           // Ensure str has exactly 4 octets
//         octets.reduce((acc, octet) =>           // Check all octets
//             (acc === true) &&                       // Ensure prior octets okay
//             (String(Number(octet)) === octet) &&    // Ensure octet has nothing funky like spaces, leading 0's, ...
//             (Number(octet) >= 0) &&                 // Ensure octet is 0 or more
//             (Number(octet) <= 255)                  // Ensure octet is 255 or less
//             , true)
// }

module.exports = isValidIP;