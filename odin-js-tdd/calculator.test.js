const calculator = require('./calculator'); 
const calc = calculator(); 

test('test addition', () => {
    expect(calc.add(1, 2)).toBe(3);
}); 

test('test multiplication', () => {
    expect(calc.multiply(2, 2)).toBe(4);
}); 

test('test subtraction', () => {
    expect(calc.subtract(2, 2)).toBe(0);
}); 


test('test divide', () => {
    expect(calc.divide(10, 2)).toBe(5);
}); 