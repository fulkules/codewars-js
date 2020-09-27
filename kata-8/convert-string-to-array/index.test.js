const stringToArray = require('./index');

describe(stringToArray, () => {
    it('should return an array', () => {
        expect(stringToArray('Robin Hood')).toBeInstanceOf(Array);
    });
    it('should return an array of strings', () => {
        expect(stringToArray('Robin Hood')).toStrictEqual(['Robin', 'Hood']);
        expect(stringToArray('string to array magic')).toStrictEqual(['string', 'to', 'array', 'magic']);
    });
});