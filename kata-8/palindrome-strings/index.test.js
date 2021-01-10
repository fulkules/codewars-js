const isPalindrome = require('./index');

describe('isPalindrome', function(){
    it('should return a boolean', () => {
        expect(typeof isPalindrome(55)).toBe('boolean');
    });
    it('should return whether or not a string is a palindrome', () => {
        expect(isPalindrome('hannah')).toBe(true);
        expect(isPalindrome('barry')).toBe(false);
        expect(isPalindrome(123456)).toBe(false);
        expect(isPalindrome('.')).toBe(true);
        // expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    });
});