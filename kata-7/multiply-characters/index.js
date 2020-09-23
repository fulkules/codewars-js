// Here we have a function that help us spam our hearty laughter.
//     But is not working! I need you to find out why...
//
// Expected results:
//
//     spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

// initialize the repeat str, and an empty new str
// iterate up to n
// concat the string to itself in each loop
// return the string

function spam(n){
    let str = 'hue', newStr = '';
    for(let i = 1; i <= n; i++){
        newStr += str;
    }
    return newStr;
}

// while loop
// function spam(number){
//   let o = '';
//   while(number--){o += 'hue'}
//   return o;
// }

// String.prototype.repeat -- ECMA-262 proposal scheduled for september 2021 (no IE support)
// function spam(number){
//   return "hue".repeat(number);
// }
//
//
// // Polyfill the repeat function that is proposed for ECMAScript 262
// if (!String.prototype.repeat) {
//   String.prototype.repeat = function (count) {
//     "use strict";
//     if (this == null)
//       throw new TypeError("can't convert " + this + " to object");
//     var str = "" + this;
//     count = +count;
//     if (count != count)
//       count = 0;
//     if (count < 0)
//       throw new RangeError("repeat count must be non-negative");
//     if (count == Infinity)
//       throw new RangeError("repeat count must be less than infinity");
//     count = Math.floor(count);
//     if (str.length == 0 || count == 0)
//       return "";
//     // Ensuring count is a 31-bit integer allows us to heavily optimize the
//     // main part. But anyway, most current (august 2014) browsers can't handle
//     // strings 1 << 28 chars or longer, so :
//     if (str.length * count >= 1 << 28)
//       throw new RangeError("repeat count must not overflow maximum string size");
//     var rpt = "";
//     for (;;) {
//       if ((count & 1) == 1)
//         rpt += str;
//       count >>>= 1;
//       if (count == 0)
//         break;
//       str += str;
//     }
//     return rpt;
//   }
// }

module.exports = spam;