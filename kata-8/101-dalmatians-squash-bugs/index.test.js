const howManyDalmatians = require('./index');

describe('howManyDalmatians', function(){
    it('should return a string', () => {
        expect(typeof howManyDalmatians(1)).toBe('string');
    });
    it('should return a response appropriate to the number of dogs', () => {
        expect(howManyDalmatians(26)).toStrictEqual('More than a handful!');
        expect(howManyDalmatians(8)).toStrictEqual('Hardly any');
        expect(howManyDalmatians(80)).toStrictEqual("Woah that's a lot of dogs!");
        expect(howManyDalmatians(101)).toStrictEqual("101 DALMATIANS!!!");
    });
});