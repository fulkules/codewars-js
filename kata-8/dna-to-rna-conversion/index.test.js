const DNAtoRNA = require('./index');

describe(DNAtoRNA, () => {
    test ('should return a new string with T replaced with U', () => {
        expect(DNAtoRNA("TTTT")).toStrictEqual("UUUU");
        expect(DNAtoRNA("GCAT")).toStrictEqual("GCAU");
        expect(DNAtoRNA("GACCGCCGCC")).toStrictEqual("GACCGCCGCC");
    })
})