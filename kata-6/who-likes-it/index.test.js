const likes = require('./index');

describe('likes', function(){
    it('should return a string', () => {
        expect(typeof likes(['Gamora'])).toBe('string');
    });
    it('should return a string of who likes it', () => {
        expect(likes([])).toStrictEqual('no one likes this');
        expect(likes(['Gamora'])).toStrictEqual('Gamora likes this');
        expect(likes(['Drax', 'Rocket', 'Nebula'])).toStrictEqual('Drax, Rocket and Nebula like this');
        expect(likes(['Drax', 'Rocket', 'Nebula', 'Gamora', 'Star Lord'])).toStrictEqual('Drax, Rocket and 3 others like this');
    });
});