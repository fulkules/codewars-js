const hoopCount = require('./index');

describe(hoopCount, () => {
    it('should return a string', () => {
        expect(typeof hoopCount(3)).toBe('string');
    });
    it('should return the final weight coming out of the oven', () => {
        expect(hoopCount(3)).toStrictEqual('Keep at it until you get it');
        expect(hoopCount(11)).toStrictEqual('Great, now move on to tricks');
    });
});