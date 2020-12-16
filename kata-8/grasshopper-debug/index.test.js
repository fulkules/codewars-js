const weatherInfo = require('./index');

describe('weatherInfo', function() {
    it('should return a string', function() {
        expect(typeof weatherInfo(50)).toBe('string');
    });
    test('returns a string with celcius and freezing status', function() {
        expect(weatherInfo(50)).toEqual('10 is above freezing temperature');
        expect(weatherInfo(23)).toEqual('-5 is freezing temperature');
    });
});