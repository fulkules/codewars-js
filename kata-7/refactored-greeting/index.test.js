const Person = require('./index');

describe(Person, () => {
    it('should return a string', () => {
        expect(typeof Person('Joe')).toBe('string');
    });
    it('should return a greeting', () => {
        expect(Person('Joe')).toStrictEqual('Hello Kate, my name is Joe');
    });
});