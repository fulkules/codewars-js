const processArray = require('./index');

describe(processArray, () => {
    it('should return an array', () => {
        expect(processArray([7, 8, 9, 1, 2], a => a + 5)).toBeInstanceOf(Array);
    });
    it('should return the sum of all odd cubed numbers', () => {
        expect(processArray([7, 8, 9, 1, 2], a => a + 5)).toEqual([12, 13, 14, 6, 7]);
    });
});