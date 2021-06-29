const nthFibo = require('./index');

describe(nthFibo, () => {
    it('should return a number', () => {
        expect(typeof (nthFibo(1))).toBe('number');
    });
    it('should return', () => {
        // expect(nthFibo(1)).toStrictEqual(0);
        expect(nthFibo(2)).toStrictEqual(1);
        expect(nthFibo(3)).toStrictEqual(1);
        expect(nthFibo(4)).toStrictEqual(2);
    });
});