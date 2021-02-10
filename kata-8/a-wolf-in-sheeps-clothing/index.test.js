const warnTheSheep = require('./index');

describe('warnTheSheep', function(){
    it('should return a string', () => {
        expect(typeof warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'])).toBe('string');
    });
    it('should return a string with a warning to the sheep or asking the wolf to go away', () => {
        expect(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])).toStrictEqual("Oi! Sheep number 2! You are about to be eaten by a wolf!");
        expect(warnTheSheep(["sheep", "sheep", "wolf"])).toStrictEqual("Pls go away and stop eating my sheep");
    });
});