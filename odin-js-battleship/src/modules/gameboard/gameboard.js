const ship = require('../ship/ship'); 

const gameboard = () => {
    let grid = []; 
    for (let i = 0; i < 10; i++) {
        grid.push([]);
        for (let j = 0; j < 10; j++) {
            grid[i].push(0);
        }
    }

    const playerShips = [ship(5), ship(4), ship(3), ship(3), ship(2)]

    const placeShip = (ship, x, y, orientation=true) => {
        if (orientation) {
            if (y + ship.length < 10) {
                for (let i = y; i < y + ship.length; i++) {
                    grid[x][i] = ship; 
                }
            }   
        } else {
            if (x + ship.length < 10) {
                for (let i = x; i < x + ship.length; i++) {
                    grid[i][y] = ship; 
                }
            }
        }
    } 

    const receiveAttack = (x, y) => {
        if (grid[x][y] === 0) {
            grid[x][y] = -1;
        } else if (grid[x][y] !== -1 && grid[x][y] !== 1) {
            grid[x][y].hit();
            grid[x][y] = 1;
        }

    }

    const checkEnd = () => {
        const noShips = grid.every(subArray => subArray.every(Number.isInteger)); 
        const played = grid.some(row => row.includes(1)); 
        if ((noShips && played)) {
            return "Game Over!"
        }
    }

    return {
        grid, 
        playerShips, 
        placeShip, 
        receiveAttack, 
        checkEnd
    }
}

module.exports = gameboard;