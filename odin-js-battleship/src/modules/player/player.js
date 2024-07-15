const board = require('../gameboard/gameboard'); 

const player = (real=true) => {
    const playerBoard = board(); 
    if (real) {
        const type = "real";

        return { playerBoard, type };
    } else if (!real) {
        const type = "cpu";

        const cpuTurn = () => {
            const x = Math.floor(Math.random() * 10); 
            const y = Math.floor(Math.random() * 10);
            return "row: " + x + ", column: " + y;
        }

        return { playerBoard, cpuTurn, type };
    }
}

module.exports = player;