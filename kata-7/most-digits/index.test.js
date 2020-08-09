const findLongest = require('./index');

describe(findLongest, () => {
    it('should return a number', () => {
        expect(typeof(findLongest([1, 10, 100]))).toBe('number');
    });
    it('should return the number with the most digits in the array', () => {
        expect(findLongest([1, 10, 100])).toStrictEqual(100);
        expect(findLongest([7000, 8, 800])).toStrictEqual(7000);
        expect(findLongest([8, 500, 900])).toStrictEqual(500);
    });
});