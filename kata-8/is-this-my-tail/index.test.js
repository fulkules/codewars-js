const correctTail = require('./index');

describe('correctTail', function(){
    it('should return a boolean', () => {
        expect(typeof correctTail('Fox', 'x')).toBe('boolean');
    });
    it('should return a boolean indicating if second arg is the same as last letter of the first arg', () => {
        expect(correctTail('Fox', 'x')).toBe(true);
        expect(correctTail('Rhino', 'n')).toBe(false);
        expect(correctTail('Elephant', 't')).toBe(true);
    });
});