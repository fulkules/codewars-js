const divide = require('./index');

describe('divide', function() {
    it('should return a boolean', function() {
        expect(typeof divide(2)).toBe('boolean');
    });
    test('returns whether or not the arg can be divided into two parts with even numbers in each part', function() {
        expect(divide(2)).toBe(false);
        expect(divide(3)).toBe(false);
        expect(divide(4)).toBe(true);
        expect(divide(5)).toBe(false);
        expect(divide(6)).toBe(true);
    });
});