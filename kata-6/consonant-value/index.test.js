const solve = require('./index');

describe('solve', function(){
    it('should return a number', () => {
        expect(typeof solve('zodiac')).toBe('number');
    });
    it('should return', () => {
        expect(solve('zodiac')).toStrictEqual(26);
        expect(solve('strength')).toStrictEqual(57);
        expect(solve('khrushchev')).toStrictEqual(38);
        expect(solve('catchphrase')).toStrictEqual(73);
        expect(solve('twelfthstreet')).toStrictEqual(103);
    });
});