const simpleMultiplication = require('./index');

describe(simpleMultiplication, () => {
    it('should return a number', () => {
        expect(typeof simpleMultiplication(2)).toBe('number');
    });
    it('Should return given argument times eight if even or times 9 if odd', () => {
        expect(simpleMultiplication(2)).toStrictEqual(16);
        expect(simpleMultiplication(3)).toStrictEqual(27);
    });
});