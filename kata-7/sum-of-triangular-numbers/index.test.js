const sumTriangularNumbers = require('./index');

describe(sumTriangularNumbers, () => {
    it('should return a number', () => {
        expect(typeof sumTriangularNumbers(1)).toBe('number');
    });
    it('should return the sum of triangular numbers up to and including the Nth triangular number', () => {
        expect(sumTriangularNumbers(6)).toStrictEqual(56);
        expect(sumTriangularNumbers(34)).toStrictEqual(7140);
        expect(sumTriangularNumbers(-291)).toStrictEqual(0);
    });
});