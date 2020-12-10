const seatsInTheater = require('./index');

describe('seatsInTheater', function() {
    it('should return a number', function() {
        expect(typeof seatsInTheater(7)).toBe('number');
    });
    test('returns the number of people who sit behind you in your column or to the left', function() {
        expect(seatsInTheater(16,11,5,3)).toEqual(96);
        expect(seatsInTheater(60,100,60,1)).toEqual(99);
        expect(seatsInTheater(13,6,8,3)).toEqual(18);
        expect(seatsInTheater(1000,1000,1000,1000)).toEqual(0);
    });
});