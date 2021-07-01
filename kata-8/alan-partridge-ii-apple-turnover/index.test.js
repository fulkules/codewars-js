const apple = require('./index');

describe(apple, () => {
    it('should return a string', () => {
        expect(typeof (apple(4))).toBe('string');
    });
    it('should return', () => {
        expect(apple(4)).toStrictEqual('Help yourself to a honeycomb Yorkie for the glovebox.');
        expect(apple(12)).toStrictEqual('Help yourself to a honeycomb Yorkie for the glovebox.');
        expect(apple('50')).toStrictEqual("It's hotter than the sun!!");
    });
});