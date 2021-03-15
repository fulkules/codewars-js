const bouncingBall = require('./index');

describe('bouncingBall', function(){
    it('should return a number', () => {
        expect(typeof bouncingBall(3.0, 0.66, 1.5)).toBe('number');
    });
    it('should return the number of times the ball will pass in front of the lower window', () => {
        expect(bouncingBall(3.0, 0.66, 1.5)).toStrictEqual(3);
        expect(bouncingBall(3.0, 1, 1.5)).toStrictEqual(-1);
        expect(bouncingBall(30.0, 0.66, 1.5)).toStrictEqual(15);
    });
});