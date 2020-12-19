const Sleigh = require('.');

describe(Sleigh, () => {
    it('should return a boolean', () => {
        const sleigh = new Sleigh();
        expect(typeof (sleigh.authenticate('Santa Claus', 'Ho Ho Ho!'))).toBe('boolean');
    });
    it('should return a string with all chars in alternate case', () => {
        const sleigh = new Sleigh();
        expect(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')).toBe(true);
        expect(sleigh.authenticate('Bob Ross', 'Happy little Tree!')).toBe(false);
    });
});