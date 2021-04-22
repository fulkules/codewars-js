const validPhoneNumber = require('./index');

describe('validPhoneNumber', function() {
    it('should return a boolean', function() {
        expect(typeof validPhoneNumber('(123) 456-7890')).toBe('boolean');
    });
    test('returns whether or not the phone number is formatted correctly', function() {
        expect(validPhoneNumber('(123) 456-7890')).toBe(true);
        expect(validPhoneNumber('(123) 456-7890abc')).toBe(false);
        expect(validPhoneNumber('abc(123) 456-7890abc')).toBe(false);
        expect(validPhoneNumber('abc(123) 456-7890')).toBe(false);
        expect(validPhoneNumber("(1111)555 2345")).toBe(false);
        expect(validPhoneNumber("(098) 123 4567")).toBe(false);
    });
});