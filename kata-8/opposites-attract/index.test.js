const lovefunc = require('./index');

describe('lovefunc', function() {
    it('should return a boolean', function() {
        expect(typeof lovefunc(1, 4)).toBe('boolean');
    });
    test('returns a boolean indicating if the number of petals is odd for one and even for the other', function() {
        expect(lovefunc(1, 4)).toBe(true);
        expect(lovefunc(3, 8)).toBe(true);
        expect(lovefunc(2, 2)).toBe(false);
        expect(lovefunc(0, 0)).toBe(false);
    });
});