const abbreviate = require('./index');

describe('abbreviate', function(){
    it('should return a string', () => {
        expect(typeof abbreviate('internationalization')).toBe('string');
    });
    it('should return', () => {
        expect(abbreviate('internationalization')).toEqual('i18n');
        expect(abbreviate('accessibility')).toEqual('a11y');
        expect(abbreviate('Accessibility')).toEqual('A11y');
        expect(abbreviate('elephant-ride')).toEqual('e6t-r2e');
        expect(abbreviate('elephant-rides are really fun!')).toEqual('e6t-r3s are r4y fun!');
    });
});