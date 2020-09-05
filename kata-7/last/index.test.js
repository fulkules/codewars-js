const last = require('./index');

describe(last, () => {
    it('should return the last of the given arguments', () => {
        expect(last([1,2,3,4])).toStrictEqual(4);
        expect(last("abcde")).toStrictEqual("e");
        expect(last(1, "b", 3, "d", 7)).toStrictEqual(7);
        expect(last("b", 3, "d")).toStrictEqual("d");
    });
});