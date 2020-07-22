const add = require('./index');

describe(add, () => {
    it('should return an array', () => {
        expect(typeof (add(1)(3))).toBe('number');
    });
    it('should return ', () => {
        expect(add(1)(3)).toStrictEqual(4);
        expect(add(3)(3)).toStrictEqual(6);
    });
});