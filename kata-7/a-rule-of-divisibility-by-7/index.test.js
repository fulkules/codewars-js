const seven = require('./index');

describe(seven, () => {
    it('should return an array', () => {
        expect(seven(1021)).toBeInstanceOf(Array);
    });
    it('test 1', () => {
        expect(seven(1021)).toStrictEqual([10, 2]);
        expect(seven(1603)).toStrictEqual([7, 2]);
        expect(seven(371)).toStrictEqual([35, 1]);
    });
});