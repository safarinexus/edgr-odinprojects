const analyzeArray = require('./analyzeArray'); 


test('test that object has four requirements', () => {
    const data = analyzeArray([1, 2, 3, 4]); 
    expect(data.average).toBe(2); 
    expect(data.max).toBe(4);
    expect(data.min).toBe(1);
    expect(data.length).toBe(4);   
})

test('empty array', () => {
    const data = analyzeArray([]); 
    expect(data.average).toBe(null); 
    expect(data.max).toBe(null);
    expect(data.min).toBe(null);
    expect(data.length).toBe(null);   
})

test('nothing passed in', () => {
    const data = analyzeArray(); 
    expect(data.average).toBe(null); 
    expect(data.max).toBe(null);
    expect(data.min).toBe(null);
    expect(data.length).toBe(null);   
})