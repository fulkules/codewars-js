const main = require('./index');

describe(main, () => {
    it('should return a string', () => {
        expect(typeof main("1")).toBe('string');
    });
    it('Should return the verb and noun in one stringn', () => {
        expect(main('take ', 'item')).toStrictEqual('take item');
        expect(main('use ', 'sword')).toStrictEqual('use sword');
        expect(main('activate ', 'omega13')).toStrictEqual('activate omega13');
    });
});