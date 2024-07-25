const renderPlayer = (isTurn, player) => {
    const P1BOARD = document.querySelector('#p1'); 
    const P2BOARD = document.querySelector('#p2'); 
    const ANNOUNCER = document.querySelector(".announcer");
    const grid = player.getBoard().getGrid()

    function removeAllEventListeners(parent) {
        const newParent = parent.cloneNode(true);
        parent.parentNode.replaceChild(newParent, parent);
    }

    for (let row = 0; row < 10; row++) { 
        for (let column = 0; column < 10; column++) { 
            if (grid[row][column] === 1) {
                const square = document.querySelector('#p1-' + (row + 1) + '-' + (column + 1));
                square.style.boxShadow = '';
                square.className = 'hit';
            } else if (grid[row][column] === -1) {
                const square = document.querySelector('#p1-' + (row + 1) + '-' + (column + 1));
                square.className = 'miss';
            }
        }
    }

    if (isTurn) { 
        const OOF = document.createElement('div'); 
        OOF.classList.add('outoffocus');
        P1BOARD.appendChild(OOF);
        ANNOUNCER.innerHTML = "Player 1's turn...";
    } else {
        P1BOARD.querySelector('.outoffocus').outerHTML = "";
        removeAllEventListeners(P2BOARD);
    }
}

module.exports = renderPlayer;