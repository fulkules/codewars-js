const countBy = require('./index');

describe('countBy', function () {
    test('it should return an array', () => {
        expect(countBy(1, 10)).toBeInstanceOf(Array);
    });

    test('returns', () => {
        expect(countBy(1, 10)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
        expect(countBy(2, 5)).toStrictEqual([2,4,6,8,10]);
    });
});