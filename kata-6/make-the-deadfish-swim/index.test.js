const parse = require('./index');

describe('parse', function() {
    it('should return an Array', function() {
        expect(parse('iiisdoso')).toBeInstanceOf(Array);
    });
    test('returns', function() {
        expect(parse("iiisdoso")).toStrictEqual([ 8, 64 ]);
        expect(parse("iiisxxxdoso")).toStrictEqual([ 8, 64 ]);
    });
});