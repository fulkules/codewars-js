const foldTo = require('./index');

describe(foldTo, () => {
    it('should return a number', () => {
        expect(typeof foldTo(384000000)).toBe('number');
    });
    it('should return amount of folds to reach the distance arg', () => {
        expect(foldTo(384000000)).toStrictEqual(42);
    });
});