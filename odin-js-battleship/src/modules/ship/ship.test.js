const ship = require('./ship'); 

test('make length 4 ship', () => {
    const newShip = ship(4); 
    expect(newShip.length).toBe(4);
})

test('get hit and get hitCount', () => {
    const newShip = ship(4); 
    expect(newShip.hit()).toBe(1);
})

test('get hit multiple times', () => {
    const newShip = ship(4); 
    newShip.hit(); 
    newShip.hit(); 
    expect(newShip.hit()).toBe(3);    
})

test('sink ship', () => {
    const newShip = ship(4); 
    newShip.hit(); 
    newShip.hit(); 
    newShip.hit(); 
    expect(newShip.hit()).toBe(true);    
})


