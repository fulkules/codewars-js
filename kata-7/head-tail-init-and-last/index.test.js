const { head, tail, init, last } = require('.');

describe(head, () => {
    it('should return a number', () => {
        expect(typeof head([5, 1])).toBe('number');
    });
    it('should return the first item in the array', () => {
        expect(head([5, 1])).toEqual(5)
    });
});

describe(tail, () => {
    it('should return an array', () => {
        expect(tail([1])).toBeInstanceOf(Array);
    });
    it('should return an array from index 1 to the end', () => {
        expect(tail([1, 3, 7, 9])).toEqual([3, 7, 9]);
    });
});

describe(init, () => {
    it('should return an array', () => {
        expect(init([1, 3, 7, 9])).toBeInstanceOf(Array);
    });
    it('should return an array from index 0 to the next to last item', () => {
        expect(init([1, 3, 7, 9])).toEqual([1, 3, 7]);
    });
});

describe(last, () => {
    it('should return a number', () => {
        expect(typeof last([3, 7])).toBe('number');
    });
    it('should return the last item in the array', () => {
        expect(last([3, 7])).toEqual(7);
    });
});
