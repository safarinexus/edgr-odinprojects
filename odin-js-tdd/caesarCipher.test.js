const caesarCipher = require('./caesarCipher'); 

test('simple test to cipher', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
})

test('test for uppercase persistence', () => {
    expect(caesarCipher('ABC', 3)).toBe('DEF');
})

test('more complex test for uppercase persistence', () => {
    expect(caesarCipher('heLLo', 3)).toBe('khOOr');
})

test('check for ending letters', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('check purely non-letter strings', () => {
    expect(caesarCipher('.,/', 3)).toBe('.,/'); 
})

test('big factor test', () => {
    expect(caesarCipher('abc', 50000)).toBe('cde');
})

test('if numbers in string', () => {
    expect(caesarCipher('123', 3)).toBe('123');
})