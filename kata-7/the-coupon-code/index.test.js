const checkCoupon = require('./index');

describe(checkCoupon, () => {
    test('should return a boolean representing the validity of a coupon', () => {
        expect(checkCoupon('123','123','September 5, 2014','October 1, 2014')).toEqual(true);
        expect(checkCoupon('123a','123','September 5, 2014','October 1, 2014')).toEqual(false);
        expect(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")).toEqual(false);
        expect(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")).toEqual(true);
    });
});