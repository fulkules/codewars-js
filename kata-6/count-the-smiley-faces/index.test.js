const countSmileys = require('./index');

describe('countSmileys', function(){
    it('should return a number', () => {
        expect(typeof countSmileys([])).toBe('number');
    });
    it('should return the total number of smiley faces in an array of strings', () => {
        expect(countSmileys([])).toStrictEqual(0);
        expect(countSmileys([ ':o)', ':--D', ';-~)' ])).toStrictEqual(0);
        expect(countSmileys([ ':D', ':~)', ';~D', ':)' ])).toStrictEqual(4);
        expect(countSmileys([ ':-)', ';~D', ':-D', ':_D' ])).toStrictEqual(3);
        expect(countSmileys([ ':)', ':(', ':D', ':O', ':;' ])).toStrictEqual(2);
        expect(countSmileys([ ';]', ':[', ';*', ':$', ';-D' ])).toStrictEqual(1);
        expect(countSmileys([ ':---)', '))', ';~~D', ';D' ])).toStrictEqual(1);
    });
});