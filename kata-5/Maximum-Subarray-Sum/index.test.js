const maxSequence = require('./index');

describe('maxSequence', function() {
    it('should find the maximum sum of a contiguous subsequence of an array of integers', function() {
      expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
    });
    it('should should work on an empty array', function() {
        expect(maxSequence([])).toStrictEqual(0);
    });
});