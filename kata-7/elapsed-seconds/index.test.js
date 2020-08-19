const elapsedSeconds = require('./index');

describe(elapsedSeconds, () => {
    it('should return a number', () => {
        expect(typeof elapsedSeconds( 'coDe')).toBe('number');
    });
});