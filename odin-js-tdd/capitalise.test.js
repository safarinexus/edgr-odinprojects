const capitalise = require('./capitalise');

test('simple capitalisation', () => {
    expect(capitalise('james')).toBe('James'); 
})

test('capitalise when first letter is the only one', () => {
    expect(capitalise('jAMES')).toBe('JAMES');
})

test('when first letter is already capitalised', () => {
    expect(capitalise('James')).toBe('James');
})

test('when no letters in string', () => {
    expect(capitalise('1')).toBe('1');
})

test('when first character is a number', () => {
    expect(capitalise('1james')).toBe('1James');
})

test('when first letter is far away', () => {
    expect(capitalise('12345678j')).toBe('12345678J');
})