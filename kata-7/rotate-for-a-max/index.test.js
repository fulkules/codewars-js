const maxRot = require('./index');

describe(maxRot, () => {
    it('should return a number', () => {
        expect(typeof maxRot(38458215)).toBe('number');
    });
    it('should return the maximum number while performing a rotation sequence', () => {
        expect(maxRot(38458215)).toEqual(85821534);
        expect(maxRot(195881031)).toEqual(988103115);
        expect(maxRot(69418307)).toEqual(94183076);
    });
});