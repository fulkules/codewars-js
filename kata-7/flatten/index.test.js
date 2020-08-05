const flatten = require('./index');

describe(flatten, () => {
    it('should return a string', () => {
        expect(flatten([[1,2,3],['a','b','c'],[1,2,3]])).toBeInstanceOf(Array);
    });
    it('should return a new array flattened one level', () => {
        expect(flatten([[1,2,3],['a','b','c'],[1,2,3]])).toStrictEqual([1, 2, 3, "a", "b", "c", 1, 2, 3]);
        expect(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])).toStrictEqual([3, 4, 5, [9, 9, 9], "a,b,c"]);
        expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])).toStrictEqual([[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
    });
});