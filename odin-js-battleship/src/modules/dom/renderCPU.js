const renderPlayer = require('./renderPlayer');
const renderEnd = require("./renderEnd");
const shipUpdater = require("../../shipUpdater");

const renderCPU = (isTurn, player, otherPlayer) => {
    const P2BOARD = document.querySelector('#p2'); 
    const ANNOUNCER = document.querySelector(".announcer");
    const grid = player.getBoard().getGrid();
    const board = player.getBoard();

    for (let row = 0; row < 10; row++) { 
        for (let column = 0; column < 10; column++) { 
            if (grid[row][column] === 1) {
                const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));
                square.className = 'hit';
            } else if (grid[row][column] === -1) {
                const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));
                square.className = 'miss';
            } else {
                continue;
            }
        }
    }

    if (isTurn) {
        const OOF = document.createElement('div'); 
        OOF.classList.add('outoffocus'); 
        P2BOARD.appendChild(OOF);
        ANNOUNCER.innerHTML = "CPU's turn...";
        setTimeout(() => {
            let cpuMove = player.cpuMove(); 
            let check = otherPlayer.getBoard().validAttack(cpuMove.getX(), cpuMove.getY());
            while (!check) { 
                cpuMove = player.cpuMove(); 
                check = otherPlayer.getBoard().validAttack(cpuMove.getX(), cpuMove.getY());
            }
            otherPlayer.getBoard().receiveAttack(cpuMove.getX(), cpuMove.getY());
            //otherPlayer.cpuMemory(prevMove);  
            shipUpdater(otherPlayer, 1);
            if (otherPlayer.getBoard().endCondition()) {
                renderEnd(otherPlayer, player, "CPU"); 
                alert('CPU Wins!'); 
            } else {
                renderPlayer(true, otherPlayer, player);
                renderCPU(false, player, otherPlayer);
            }
        }, 1500)
    } else {
        if (P2BOARD.querySelector('.outoffocus') !== null) {
            P2BOARD.querySelector('.outoffocus').outerHTML = "";
        }
        
        for (let row = 0; row < 10; row++) { 
            for (let column = 0; column < 10; column++) { 
                if (grid[row][column] !== 1 && grid[row][column] !== -1) {
                    const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));
                    square.style.cursor = 'pointer';
                    square.addEventListener("click", () => {
                        board.receiveAttack(row, column); 
                        shipUpdater(player, 2);
                        if (board.endCondition()) {
                            renderEnd(player, otherPlayer, "Player 1"); 
                            setTimeout(alert('Player 1 Wins!'), 500); 
                        } else {
                            renderPlayer(false, otherPlayer);
                            renderCPU(true, player, otherPlayer);
                        }
                    })  
                }
            }
        }
    }
}

module.exports = renderCPU;