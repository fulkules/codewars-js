const checkForFactor = require('./index');

describe('checkForFactor', function(){
    it('should return a boolean', () => {
        expect(typeof checkForFactor(10, 2)).toBe('boolean');
    });
    it('should return boolean if the factor is a factor of the base', () => {
        expect(checkForFactor(10, 2)).toBe(true);
        expect(checkForFactor(63, 7)).toBe(true);
        expect(checkForFactor(9, 2)).toBe(false);
        expect(checkForFactor(653, 7)).toBe(false);
    });
});