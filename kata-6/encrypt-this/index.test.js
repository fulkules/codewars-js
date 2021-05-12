const encryptThis = require('./index');

describe('encryptThis', function(){
    it('should return a string', () => {
        expect(typeof encryptThis("A")).toBe('string');
    });
    it('should return the encryptThisest scoring word', () => {
        expect(encryptThis("A")).toStrictEqual('65');
        expect(encryptThis("Hello")).toStrictEqual("72olle");
        expect(encryptThis("good")).toStrictEqual("103doo");
        expect(encryptThis("hello world")).toStrictEqual("104olle 119drlo");
        expect(encryptThis("A wise old owl lived in an oak")).toStrictEqual("65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
        expect(encryptThis("The more he saw the less he spoke")).toStrictEqual("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
        expect(encryptThis("The less he spoke the more he heard")).toStrictEqual("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
        expect(encryptThis("Why can we not all be like that wise old bird")).toStrictEqual("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
        expect(encryptThis("Thank you Piotr for all your help")).toStrictEqual("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");
    });
});