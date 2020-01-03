const digitize = require('./index');

describe('digitize', function() {
    it('should return an array', function() {
        expect(digitize(348597)).toBeInstanceOf(Array);
    });
    test('returned array should be the digits of the number in reverse order', function() {
        expect(digitize(35231)).toStrictEqual([1,3,2,5,3]);
        expect(digitize(348597)).toStrictEqual([7,9,5,8,4,3]);
    });
})