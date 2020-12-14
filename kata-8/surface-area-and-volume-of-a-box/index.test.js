const getSize = require('./index');

describe('getSize', function() {
    it('should return a Array', function() {
        expect(getSize(4, 2, 6)).toBeInstanceOf(Array);
    });
    test('returns the total surface area and volume of a box as an array [area, volume]', function() {
        expect(getSize(4, 2, 6)).toEqual([88, 48]);
        expect(getSize(10, 10, 10)).toEqual([600, 1000]);
    });
});