const combat = require('./index');

describe('combat', function() {
    it('should return a number', function() {
        expect(typeof combat(100, 5)).toBe('number');
    });
    test('returns the new health after subtracting the damage', function() {
        expect(combat(100, 5)).toStrictEqual(95);
        expect(combat(92, 8)).toStrictEqual(84);
        expect(combat(20, 30)).toStrictEqual(0);
    });
});