const calculate = require('./index');

describe(calculate, () => {
    it('should return a number', () => {
        expect(typeof calculate(3.2, "+", 8)).toBe('number');
    });
    it('should return the result of the mathematical function (2nd arg) on the two number args', () => {
        expect(calculate(3.2, "+", 8)).toStrictEqual(11.2);
        expect(calculate(3.2, "-", 8)).toStrictEqual(-4.8);
        expect(calculate(3.2, "/", 8)).toStrictEqual(0.4);
        expect(calculate(-2, "/", -2)).toStrictEqual(1);
        expect(calculate(3.2, "*", 8)).toStrictEqual(25.6);
        expect(calculate(3, "/", 0)).toStrictEqual(null);
        expect(calculate(3, "w", 0)).toStrictEqual(null);
    });
});