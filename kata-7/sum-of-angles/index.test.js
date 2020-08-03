const angle = require('./index');

describe(angle, () => {
    it('should return a number', () => {
        expect(typeof angle(3)).toBe('number');
    });
    it('should return the sum of the interior angles in an N-sided shape', () => {
        expect(angle(3)).toStrictEqual(180);
        expect(angle(4)).toStrictEqual(360);
    });
});