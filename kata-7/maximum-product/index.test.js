const adjacentElementsProduct = require('./index');

describe(adjacentElementsProduct, () => {
    it('should return a number', () => {
        expect(typeof adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe('number');
    });
    it('should return the maximum product of 2 adjacent numbers in an array', () => {
        expect(adjacentElementsProduct([5, 8])).toStrictEqual(40);
        expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).toStrictEqual(0);
        expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toStrictEqual(50);
        expect(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])).toStrictEqual(-14);
    });
});