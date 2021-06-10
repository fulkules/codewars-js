const longestPalindrome = require('./index');

describe('longestPalindrome', function(){
    it('should return a number', () => {
        expect(typeof longestPalindrome('a')).toBe('number');
    });
    it('should return the length of the longest palindrome substring within a string', () => {
        expect(longestPalindrome('a')).toStrictEqual(1);
        expect(longestPalindrome('aa')).toStrictEqual(2);
        expect(longestPalindrome('baa')).toStrictEqual(2);
        expect(longestPalindrome('aab')).toStrictEqual(2);
        expect(longestPalindrome('watt')).toStrictEqual(2);
        expect(longestPalindrome('prefer')).toStrictEqual(5);
        expect(longestPalindrome('racecar')).toStrictEqual(7);
    });
});