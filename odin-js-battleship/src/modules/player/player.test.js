const player = require('./player'); 

test('make real player', () => {
    const newPlayer = player(true); 
    expect(newPlayer.type).toBe('real');
})

test('make computer player', () => {
    const newPlayer = player(false); 
    expect(newPlayer.type).toBe('cpu');
})

test('computers move', () => {
    const newPlayer = player(false); 
    expect((newPlayer.cpuTurn())).toMatch(/^row: (\d+), column: (\d+)$/);
})


