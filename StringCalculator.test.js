const add = require('./StringCalculator');

describe('Testing add method', () => { 
    test('empty string returns 0', () => {
        expect(add("")).toBe(0);
    });
 });