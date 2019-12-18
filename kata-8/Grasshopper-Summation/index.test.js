const summation = require('./index');

describe('summation', function() {
    it('should find the summation of every numer from 1 to num', function() {
        expect(summation(2)).toStrictEqual(3);
        expect(summation(8)).toStrictEqual(36);
    });
})
