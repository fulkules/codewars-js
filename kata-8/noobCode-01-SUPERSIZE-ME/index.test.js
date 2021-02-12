const superSize = require('./index');

describe('superSize', function() {
    it('should return a number', function() {
        expect(typeof superSize(69)).toBe('number');
    });
    test('returns the highest possible rearranged integer from the given integer', function() {
        expect(superSize(69)).toBe(96);
        expect(superSize(2017)).toBe(7210);
        expect(superSize(608719)).toBe(987610);
    });
});