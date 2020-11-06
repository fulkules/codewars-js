const stringy = require('./index');

describe(stringy, () => {
    it('should return a string', () => {
        expect(typeof stringy(3)).toBe('string');
    });
    it('should return the final weight coming out of the oven', () => {
        expect(stringy(3)).toStrictEqual('101');
    });
});