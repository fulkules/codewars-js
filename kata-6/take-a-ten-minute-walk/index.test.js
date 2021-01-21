const isValidWalk = require('./index');

describe('isValidWalk', function() {
    it('should return a boolean', function() {
        expect(typeof isValidWalk(['w'])).toBe('boolean');
    });
    test('returns whether or not the directions will lead to exactly ten minutes', function() {
        expect(isValidWalk(['w'])).toBe(false);
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
        expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
    });
});