const stockList = require('./index');

describe('stockList', function(){
    it('should return a string', () => {
        expect(typeof stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"])).toBe('string');
    });
    it('should return ', () => {
        expect(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"])).toStrictEqual("(A : 200) - (B : 1140)");
        expect(stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"])).toStrictEqual("(A : 0) - (B : 114) - (C : 70) - (W : 0)");
    });
});

