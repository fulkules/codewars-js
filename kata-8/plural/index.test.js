const plural = require('./index');

describe('plural', function(){
    it('should return a boolean', () => {
        expect(typeof plural(0)).toBe('boolean');
    });
    it('should return a boolean of whether or not a plural is needed', () => {
        expect(plural(0)).toBe(true);
        expect(plural(1)).toStrictEqual(false);
    });
});