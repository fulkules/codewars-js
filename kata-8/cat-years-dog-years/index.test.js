const humanYearsCatYearsDogYears = require('./index');

describe('humanYearsCatYearsDogYears', function() {
    it('should return an array', function() {
        expect(humanYearsCatYearsDogYears(1)).toBeInstanceOf(Array);
    });
    test('returns a new array of human, dog, and cat years', function() {
        expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15]);
        expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24]);
        expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64]);
    });
});