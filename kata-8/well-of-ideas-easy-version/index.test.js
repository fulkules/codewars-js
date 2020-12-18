const well = require('./index');

describe('well', function() {
    it('should return a string', function() {
        expect(typeof well(['bad', 'bad', 'bad'])).toBe('string');
    });
    test('returns a string indicating different numbers of good ideas', function() {
        expect(well(['bad', 'bad', 'bad'])).toEqual('Fail!');
        expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toEqual('Publish!');
        expect(well(['good', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toEqual('I smell a series!');
    });
});