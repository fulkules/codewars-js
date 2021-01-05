const move = require('./index');

describe('move', function(){
    it('should return a number', () => {
        expect(typeof move(0, 4)).toStrictEqual('number');
    });
    it('should return the new position of the player', () => {
        expect(move(0, 4)).toStrictEqual(8);
        expect(move(3, 6)).toStrictEqual(15);
        expect(move(2, 5)).toStrictEqual(12);
    });
});