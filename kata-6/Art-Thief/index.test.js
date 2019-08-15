const { stealRecursive, stealBottomUp, stealOptimized, stealTopDown } = require('./index');


// import { stealBottomUp, stealOptimized, stealRecursive, stealTopDown } from './index';

afterEach(() => {
    jest.resetModules()
})
  

/****************** RECURSIVE SOLUTION TESTS *****************/
test('Recursion Test 1', () => {
    expect(stealRecursive([3,5,6,2,1,8])).toBe(17);
  })
  
  test('Recursion Test 2', () => {
    expect(stealRecursive([1,0,0,4])).toBe(5);
  })
  
  test('Recursion Test 3', () => {
    expect(stealRecursive([6, 7, 1, 3, 8, 2, 4])).toBe(19);
  })


/****************** MEMOIZATION SOLUTION TESTS *****************/
test('Memoization Test 1', () => {
    expect(stealTopDown([3,5,6,2,1,8])).toBe(17);
  })
  
  test('Memoization Test 2', () => {
    expect(stealTopDown([1,0,0,4])).toBe(5);
  })
  
  test('Memoization Test 3', () => {
    expect(stealTopDown([6, 7, 1, 3, 8, 2, 4])).toBe(19);
  })


/****************** TABULATION SOLUTION TESTS *****************/
test('Tabulation Test 1', () => {
    expect(stealBottomUp([3,5,6,2,1,8])).toBe(17);
  })
  
  test('Tabulation Test 2', () => {
    expect(stealBottomUp([1,0,0,4])).toBe(5);
  })
  
  test('Tabulation Test 3', () => {
    expect(stealBottomUp([6, 7, 1, 3, 8, 2, 4])).toBe(19);
  })


/****************** OPTIMIZED SOLUTION TESTS *****************/
test('Optimized Test 1', () => {
    expect(stealOptimized([3,5,6,2,1,8])).toBe(17);
  })
  
  test('Optimized Test 2', () => {
    expect(stealOptimized([1,0,0,4])).toBe(5);
  })
  
  test('Optimized Test 3', () => {
    expect(stealOptimized([6, 7, 1, 3, 8, 2, 4])).toBe(19);
  })