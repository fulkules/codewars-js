const printArray = require('./index');

describe('printArray', function() {
    it('should return a string', function() {
        expect(typeof printArray([2,4,5,2])).toBe('string');
    });
    it('should return the num as a string', function() {
        expect(printArray([2,4,5,2])).toStrictEqual('2,4,5,2');
        expect(printArray(['h','o','l','a'])).toStrictEqual('h,o,l,a');
    });
});