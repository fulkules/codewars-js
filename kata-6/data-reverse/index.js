// A stream of data is received and needs to be reversed.
//
//     Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
//
// 11111111  00000000  00001111  10101010
// (byte1)   (byte2)   (byte3)   (byte4)
// should become:
//
//     10101010  00001111  00000000  11111111
// (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.
//
// The data is given in an array as such:
//
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]


// fn(arr) => arr
// iterate arr
    // separate into segments/blocks of 8 chars
    // reverse the order of the blocks
// merge all blocks into one array
// return

function dataReversse(data){
    let a = [];
    while(data.length){
        a.push(...data.splice(-8));
    }
    return a;
}

// voted best practice
// const dataReverse = data => {
//   const bytes = [];
//   for (let i = 0; i < data.length; i += 8) {
//     bytes.unshift(...data.slice(i, i + 8));
//   }
//   return bytes;
// };

// alternate syntax similar to my solution
// function dataReverse(data) {
//   let a = [];
//   while (data.length)
//     a.unshift(...data.splice(0, 8));
//   return a;
// }

module.exports = dataReversse;