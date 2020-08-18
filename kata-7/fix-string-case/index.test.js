const solve = require('./index');

describe(solve, () => {
    it('should return a string', () => {
        expect(typeof solve( 'coDe')).toBe('string');
    });
    it('should return the string as all upper or lower case with fewest changes possible', () => {
        expect(solve( 'codE')).toStrictEqual('code');
        expect(solve( 'CODe')).toStrictEqual('CODE');
        expect(solve( 'COde')).toStrictEqual('code');
    });
});