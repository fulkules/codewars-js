const inAscOrder = require('./index');

describe(inAscOrder, () => {
    test('should return a boolean whether or not an array is in ascending order', () => {
        expect(inAscOrder([1, 2, 4, 7, 19])).toEqual(true);
        expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).toEqual(false);
        expect(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(false);
    });
});