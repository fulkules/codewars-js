const reverseLetter = require('./index');

describe(reverseLetter, () => {
    it('should return a string', () => {
        expect(typeof reverseLetter("barry")).toBe('string');
    });
    it('should return a reversed string omitting non-alphabetic characters', () => {
        expect(reverseLetter('barry')).toStrictEqual('yrrab');
        expect(reverseLetter('h8oraid')).toStrictEqual('diaroh');
        expect(reverseLetter('nort53l?u')).toStrictEqual('ultron');
    });
});