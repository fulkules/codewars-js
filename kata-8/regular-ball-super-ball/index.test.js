const Ball = require('./index');

describe(Ball, () => {
    it('should return a string', () => {
        expect(typeof (new Ball().ballType)).toBe('string');
    });
    it('should return the string regular or super', () => {
        expect(new Ball().ballType).toStrictEqual('regular');
        expect(new Ball('super').ballType).toStrictEqual('super');
    });
});