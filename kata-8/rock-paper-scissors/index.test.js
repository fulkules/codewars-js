const rps = require('./index');

describe(rps, () => {
    it('should return a string', () => {
        expect(typeof rps('rock', 'rock')).toBe('string');
    });
    it('should return result of the rock-paper-scissors match', () => {
        expect(rps('rock', 'rock')).toStrictEqual('Draw!');
        expect(rps('scissors', 'rock')).toStrictEqual('Player 2 won!');
        expect(rps('scissors', 'paper')).toStrictEqual('Player 1 won!');
    });
});