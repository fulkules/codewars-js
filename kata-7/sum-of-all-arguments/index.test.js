const sum = require('./index');

describe(sum, () => {
    it('should return a number', () => {
        expect(typeof sum(1,2,3)).toBe('number');
    });
    it('should return the sum of all arguments', () => {
        expect(sum(1,2,3)).toStrictEqual(6);
        expect(sum(1,3,7,9)).toStrictEqual(20);
    });
});