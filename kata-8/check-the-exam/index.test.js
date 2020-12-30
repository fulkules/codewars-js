const checkExam = require('./index');

describe('checkExam', function(){
    it('should return a number', () => {
        expect(typeof checkExam(['a','a','b','b'], ['a','c','b','d'])).toBe('number');
    });
    it('should return the score based on key (arr1) and answers (arr2)', () => {
        expect(checkExam(['a','a','b','b'], ['a','c','b','d'])).toStrictEqual(6);
        expect(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])).toStrictEqual(7);
        expect(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])).toStrictEqual(16);
        expect(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])).toStrictEqual(0);
    });
});