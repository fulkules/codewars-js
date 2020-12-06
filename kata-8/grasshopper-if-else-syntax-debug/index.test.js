const checkAlive = require('./index');

describe('checkAlive', function() {
    it('should return a boolean', function() {
        expect(typeof checkAlive(1, 4)).toBe('boolean');
    });
    test('returns a boolean of whether or not health is greater than 0', function() {
        expect(checkAlive(5)).toBe(true);
        expect(checkAlive(0)).toBe(false);
    });
});