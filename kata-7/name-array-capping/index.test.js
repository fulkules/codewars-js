const capMe = require('./index');

describe(capMe, () => {
    it('should return an array', () => {
        expect(capMe(['rori', 'jade', 'scarlet', 'maverick'])).toBeInstanceOf(Array);
    });
    it('should return an array of each name with the first letter capitalized', () => {
        expect(capMe(['rori', 'jade', 'scarlet', 'maverick'])).toStrictEqual(['Rori', 'Jade', 'Scarlet', 'Maverick']);
        expect(capMe(['RORI', 'JADE', 'SCARLET', 'MAVERICK'])).toStrictEqual(['Rori', 'Jade', 'Scarlet', 'Maverick']);
    });
});