const palindromeChainLength = require('./index');

describe(palindromeChainLength, () => {
    it('should return an integer', () => {
        expect(typeof (palindromeChainLength(87))).toBe('number');
    });
    it('should return the the number of times until the sum of n forward and back becomes a palindrome', () => {
        expect(palindromeChainLength(87)).toStrictEqual(4);
    });
});