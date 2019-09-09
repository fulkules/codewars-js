// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const bits = (n)  => {
    // make an array with the bit result
    const bitArr = (n).toString(2).split('');

    // make a sum with the array and make the index a Number
    const counted = bitArr.reduce((acc, cur) => acc + Number(cur), 0);

    return counted;
}

module.exports = bits;