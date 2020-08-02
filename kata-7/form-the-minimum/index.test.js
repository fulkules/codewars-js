const minValue = require('./index');

describe(minValue, () => {
    it('should return a number', () => {
        expect(typeof minValue([1,31,1])).toBe('number');
    });
    it('should return the smallest number using all unique numbers in the array arg', () => {
        expect(minValue([1,3,1])).toStrictEqual(13);
        expect(minValue([5,7,9,5,7])).toStrictEqual(579);
        expect(minValue([1,1,1,1,1,1,1])).toStrictEqual(1);
        expect(minValue([9,7,3,5,7])).toStrictEqual(3579);
    });
});