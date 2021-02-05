const getDrinkByProfession = require('./index');

describe('getDrinkByProfession', function() {
    it('should return a string', function() {
        expect(typeof getDrinkByProfession('jabrOni')).toBe('string');
    });
    test('returns the appropriately mapped drink', function() {
        expect(getDrinkByProfession('jabrOni')).toStrictEqual('Patron Tequila');
        expect(getDrinkByProfession('poLiTiCian')).toStrictEqual('Your tax dollars');
        expect(getDrinkByProfession('scientist')).toStrictEqual('Beer');
    });
});