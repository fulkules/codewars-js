const areaOrPerimeter = require('./index');

describe('areaOrPerimeter', function() {
    it('should return a number', function() {
        expect(typeof areaOrPerimeter(4, 4)).toBe('number');
    });
    it('should return the area if square, perimeter if rectangle', function() {
        expect(areaOrPerimeter(4, 4)).toStrictEqual(16);
        expect(areaOrPerimeter(6, 10)).toStrictEqual(32);
    });
});