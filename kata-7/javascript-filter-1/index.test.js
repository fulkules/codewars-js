const searchNames = require('./index');

describe(searchNames, () => {
    it('should return an array', () => {
        expect(searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ])).toBeInstanceOf(Array);
    });
    it('should return the sum of half of the argument while halves > 0', () => {
        expect(searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ])).toStrictEqual([ [ "bar_", "bar@bar.com" ] ]);
    });
});