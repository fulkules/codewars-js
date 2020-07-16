const solution = require('./index');

describe(solution, () => {
    test('should return an array with numbers sorted by numeric value', () => {
        expect(solution([1, 2, 10, 50, 5])).toStrictEqual([1,2,5,10,50]);
        expect(solution([7,3,40,23,33,13])).toStrictEqual([3,7,13,23,33,40]);
    });
    test('if the arg is null, or empty, return an empty array', () => {
        expect(solution()).toStrictEqual([]);
    });
});