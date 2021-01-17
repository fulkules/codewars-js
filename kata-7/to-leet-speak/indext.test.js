const toLeetSpeak = require('./index');

describe('toLeetSpeak', function(){
    it('should return a string', () => {
        expect(typeof toLeetSpeak('LEET')).toBe('string');
    });
    it('should return the given string to leetspeak', () => {
        expect(toLeetSpeak('LEET')).toStrictEqual('1337');
        expect(toLeetSpeak('CODEWARS')).toStrictEqual('(0D3W@R$');
        expect(toLeetSpeak("HELLO WORLD")).toStrictEqual("#3110 W0R1D");
        expect(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")).toStrictEqual("7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06");
    });
});