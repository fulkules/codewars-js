const vampire_test = require('./index');

describe(vampire_test, () => {
    it('should return a boolean', () => {
        expect(typeof vampire_test(21, 6)).toBe('boolean');
    });
    it('should return whether or not the digits from the args are present in the result (in the same quantity)', () => {
        expect(vampire_test(21, 6)).toStrictEqual(true);
        expect(vampire_test(30, -51)).toStrictEqual(true);
        expect(vampire_test(-246, -510)).toStrictEqual(false);
        expect(vampire_test(2947051, 8469153)).toStrictEqual(false);
        expect(vampire_test(10, 11)).toStrictEqual(false);
    });
});