const reverseString = require('./reverseString');

test('simple test', () => {
    expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
}); 

test('numbers', () => {
    expect(reverseString('12345678')).toBe('87654321'); 
})

test('empty string', () => {
    expect(reverseString('')).toBe(''); 
})