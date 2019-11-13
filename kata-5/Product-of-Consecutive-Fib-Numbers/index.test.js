const productFib = require('./index');

describe('productFib', function() {
    it('should take in a number and return an array', function() {
      expect(productFib(4895)).toBeInstanceOf(Array);
    });
    test('test 1', function() {
        expect(productFib(4895)).toStrictEqual([55,89,true])
    });
    test('test 2', function() {
        expect(productFib(84049690)).toStrictEqual([10946,17711,false]);
    });
});