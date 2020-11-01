const testEven = require('./index');

describe('testEven', function() {
    it('should return a boolean', function() {
        expect(typeof testEven(1)).toBe('boolean');
    });
    test('returns the age as an int', function() {
        expect(testEven(1)).toBe(false);
        expect(testEven(0.5)).toBe(false);
        expect(testEven(2)).toBe(true);
        expect(testEven(0)).toBe(true);
    });
});