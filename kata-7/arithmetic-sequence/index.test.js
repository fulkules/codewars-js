const nthterm = require('./index');

describe(nthterm, () => {
    it('should return a number', () => {
        expect(typeof nthterm(1,2,3)).toBe('number');
    });
    it('should return ', () => {
        expect(nthterm(1,2,3)).toStrictEqual(7);
        expect(nthterm(2,2,2)).toStrictEqual(6);
        expect(nthterm(-50,10,20)).toStrictEqual(150);
    });
});