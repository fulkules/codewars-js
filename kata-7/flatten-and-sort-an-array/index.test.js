const flattenAndSort = require('./index');

describe(flattenAndSort, () => {
    it('should return an array', () => {
        expect(flattenAndSort( [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).toBeInstanceOf(Array);
    });
    it('should return ', () => {
        expect(flattenAndSort( [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});