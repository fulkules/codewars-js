const isDivideBy = require('./index');

describe('isDivideBy', function() {
    it('should return a boolean', function() {
        expect(typeof isDivideBy(45, 5, 15)).toBe('boolean');
    });
    test('returns whether or not an integer is divisible by both args', function() {
        expect(isDivideBy(45, 5, 15)).toBe(true);
        expect(isDivideBy(-12, 2, -6)).toBe(true);
        expect(isDivideBy(-12, 2, -5)).toBe(false);
    });
});