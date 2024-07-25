const gameboard = require('../gameboard/gameboard'); 

const player = (real=true) => {
    const board = gameboard(); 

    if (real) {
        
        return { 
            getBoard: () => board,
        };
    } else if (!real) {
        let queue = [];

        const cpuMove = () => {
            let x = null; 
            let y = null;

            if (queue === undefined || queue.length == 0) {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } else {
                let coords = queue.shift(); 
                x = coords[0]; 
                y = coords[1];
            }
            
            return {
                getX: () => x, 
                getY: () => y,
            }
        }

        //make a smarter ai
        const cpuMemory = (prevMove, hit) => {
            if (hit) {
                const directions = [
                    [1, 0], // down
                    [-1, 0], // up
                    [0, 1], // right
                    [0, -1] // left
                ];

                function isValid(x, y) {
                    return x >= 0 && x < gridSize && y >= 0 && y < gridSize;
                }

                for (const [dx, dy] of directions) {
                    const nx = lastHit[0] + dx;
                    const ny = lastHit[1] + dy;

                    if (isValid(nx, ny) && grid[nx][ny] === 1) {
                        x = nx;
                        y = ny;
                        direction = [dx, dy];
                        consecutiveHits++;
                        break;
                    }

                }
                queue.push([])
                
            }
        }

        return { 
            getBoard: () => board, 
            cpuMove,
            cpuMemory,
        };
    }
}

module.exports = player;