const differenceInAges = require('./index');

describe('differenceInAges', function() {
    it('should return a Array', function() {
        expect(differenceInAges([82, 15, 6, 38, 35])).toBeInstanceOf(Array);
    });
    test('returns a new array with youngest oldest and the age difference between them', function() {
        expect(differenceInAges([82, 15, 6, 38, 35])).toEqual([6, 82, 76]);
        expect(differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85]);
    });
});