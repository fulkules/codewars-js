const caffeineBuzz = require('./index');

describe(caffeineBuzz, () => {
    it('should return a string', () => {
        expect(typeof caffeineBuzz(12)).toBe('string');
    });
    it('should detect leap years', () => {
        expect(caffeineBuzz(1)).toStrictEqual('mocha_missing!');
        expect(caffeineBuzz(3)).toStrictEqual('Java');
        expect(caffeineBuzz(6)).toStrictEqual('JavaScript');
        expect(caffeineBuzz(12)).toStrictEqual('CoffeeScript');
    });
});