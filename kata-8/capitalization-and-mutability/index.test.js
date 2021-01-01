const capitalizeWord = require('./index');

describe('capitalizeWord', function(){
    it('should return a string', () => {
        expect(typeof capitalizeWord('word')).toBe('string');
    });
    it('should return thee string with the first letter capitalized', () => {
        expect(capitalizeWord('word')).toStrictEqual('Word');
        expect(capitalizeWord('i')).toStrictEqual('I');
    });
});