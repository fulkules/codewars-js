const arrayDiff = require('./index');

describe(arrayDiff, () => {
    it('should return an array', () => {
        expect(arrayDiff([], [4,5])).toBeInstanceOf(Array);
    });
    it('should subtract one list from another and return the result', () => {
        expect(arrayDiff([], [4,5])).toEqual([]);
        expect(arrayDiff([3,4], [3])).toEqual([4]);
        expect(arrayDiff([1,8,2], [])).toEqual([1,8,2]);
        expect(arrayDiff([1,2,2], [1])).toEqual([2,2]);
    });
});