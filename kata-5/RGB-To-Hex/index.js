// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// put the params into an iterable array
// iterate the items
    // early return value of items outside the RGB range (0-255)
    // convert the remaining items to hexidecimal using radix 16
    // if the radix value length is 1 prepend a '0' to the value
// join the items and convert to uppercase

function rgb(r,g,b){
    return [r,g,b]
        .map(x => {
            if(x >= 255) return 'FF';
            if(x <= 0) return '00';

            const hex = x.toString(16);
            return hex.length === 1 ? `0${hex}` : hex;
        }).join('').toUpperCase();
}

module.exports = rgb;