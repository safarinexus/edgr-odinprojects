const gameboard = require('../gameboard/gameboard'); 

const player = (real=true) => {
    const board = gameboard(); 

    if (real) {
        const type = "real";
        
        return { 
            getBoard: () => board,
            type 
        };
    } else if (!real) {
        const type = "cpu";
        const visited = []; 

        const cpuMove = () => {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);

            return {
                x, 
                y,
            }
        }

        return { 
            getBoard: () => board, 
            cpuMove, 
            type,
        };
    }
}

module.exports = player;