const correct = require('./index');

describe(correct, () => {
    it('should return a string', () => {
        expect(typeof correct('L0ND0N')).toBe('string');
    });
    it('should return ', () => {
        expect(correct('L0ND0N')).toStrictEqual('LONDON');
        expect(correct('51NGAP0RE')).toStrictEqual('SINGAPORE');
    });
});