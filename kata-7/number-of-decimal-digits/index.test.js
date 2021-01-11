const digits = require('./index');

describe('digits', function(){
    it('should return a number', () => {
        expect(typeof digits(5)).toBe('number');
    });
    it('should return whether or not a string is a palindrome', () => {
        expect(digits(5)).toStrictEqual(1);
        expect(digits(12345)).toStrictEqual(5);
        expect(digits(9876543210)).toStrictEqual(10);
    });
});