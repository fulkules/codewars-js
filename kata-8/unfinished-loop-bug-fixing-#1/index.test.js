const createArray = require('./index');

describe('createArray', function() {
    it('should return an array', function() {
        expect(createArray(3)).toBeInstanceOf(Array);
    });
    test('returns an array of numbers from 1 up to num arg', function() {
        expect(createArray(3)).toStrictEqual([1, 2, 3]);
    });
});