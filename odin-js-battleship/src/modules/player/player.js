const gameboard = require('../gameboard/gameboard'); 

const player = (real=true) => {
    const board = gameboard(); 

    if (real) {
        
        return { 
            getBoard: () => board,
        };
    } else if (!real) {

        const cpuMove = () => {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
        
            return {
                getX: () => x, 
                getY: () => y,
            }
        }

        return { 
            getBoard: () => board, 
            cpuMove,
        };
    }
}

module.exports = player;