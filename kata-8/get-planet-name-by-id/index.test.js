const getPlanetName = require('.');

describe(getPlanetName, () => {
    it('should return a string', () => {
        expect(typeof getPlanetName(2)).toBe('string');
    });
    it('should return the planet name when given an id', () => {
        expect(getPlanetName(2).toEqual('Venus')
    });
});