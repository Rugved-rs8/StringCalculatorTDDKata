const add = require('./StringCalculator');

describe('Testing add method', () => { 
    test('empty string returns 0', () => {
        expect(add("")).toBe(0);
    });
    test('single number returns the number itself', () => {
        expect(add("5")).toBe(5);
    });
    test('two numbers', () => {
        expect(add("10,3")).toBe(13);
    });
    test('multiple numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });
    test('new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });
 });