const min = require('./index');

describe('min', function(){
    it('should return a number', () => {
        expect(typeof min([1,2,3,4,5], 'value')).toBe('number');
    });
    it('should return the smallest value of an array', () => {
        expect(min([1,2,3,4,5], 'value')).toStrictEqual(1);
        expect(min([1,2,3,4,5], 'index')).toStrictEqual(0);
    });
});