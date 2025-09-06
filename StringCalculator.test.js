const add = require('./StringCalculator');

describe('Testing add method', () => { 
    test('empty string returns 0', () => {
        expect(add("")).toBe(0);
    });
    test('single number returns the number itself', () => {
        expect(add("5")).toBe(5);
    });
 });