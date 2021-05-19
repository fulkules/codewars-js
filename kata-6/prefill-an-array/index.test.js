const prefill = require('./index');

describe('prefill', function() {
    it('should return an array', function() {
        expect(prefill(3, 1)).toBeInstanceOf(Array);
    });
    test('returns', function() {
        expect(prefill(3, 1)).toEqual([1, 1, 1]);
        expect(prefill(2, 'abc')).toEqual(['abc','abc']);
        expect(prefill('1', 1)).toEqual([1]);
        expect(prefill(0)).toEqual([]);
        expect(prefill(3, prefill(2, '2d'))).toEqual([['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
    });
});