const high = require('./index');

describe('high', function(){
    it('should return a string', () => {
        expect(typeof high('man i need a taxi up to ubud')).toBe('string');
    });
    it('should return the highest scoring word', () => {
        expect(high('man i need a taxi up to ubud')).toStrictEqual('taxi');
        expect(high('what time are we climbing up the volcano')).toStrictEqual('volcano');
        expect(high('take me to semynak')).toStrictEqual('semynak');
        expect(high('aa b')).toStrictEqual('aa');
        expect(high('bb d')).toStrictEqual('bb');
    });
});