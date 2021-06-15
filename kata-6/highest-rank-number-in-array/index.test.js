const highestRank = require('./index');

describe('highestRank', function(){
    it('should return a number', () => {
        expect(typeof highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])).toBe('number');
    });
    it('should return', () => {
        expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])).toStrictEqual(12);
        expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])).toStrictEqual(12);
        expect(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])).toStrictEqual(3);
    });
});