const countRedBeads = require('./index');

describe(countRedBeads, () => {
    it('should return a number', () => {
        expect(typeof countRedBeads(3)).toBe('number');
    });
    it('should return the amount of red beads (2 between all the blue beads arg)', () => {
        expect(countRedBeads(3)).toStrictEqual(4);
        expect(countRedBeads(1)).toStrictEqual(0);
        expect(countRedBeads(5)).toStrictEqual(8);
        expect(countRedBeads(2)).toStrictEqual(2);
    });
});