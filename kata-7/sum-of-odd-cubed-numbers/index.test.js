const cubeOdd = require('./index');

describe(cubeOdd, () => {
    it('should return a number', () => {
        expect(typeof (cubeOdd([1, 2, 3, 4]))).toBe('number');
    });
    it('should return the sum of all odd cubed numbers', () => {
        expect(cubeOdd([1, 2, 3, 4])).toStrictEqual(28);
        expect(cubeOdd(['a', 12, 9, 'z', 42])).toBeUndefined();
        expect(cubeOdd([-3, -2, 2, 3])).toBe(0);
    });
});