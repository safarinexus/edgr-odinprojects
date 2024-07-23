const renderEnd = (p1, p2, winner) => {
    const ANNOUNCER = document.querySelector(".announcer");

    ANNOUNCER.innerHTML = winner + ' wins!';
    document.querySelector('.outoffocus').outerHTML = '';

    function removeAllEventListeners(parent) {
        const newParent = parent.cloneNode(true);
        parent.parentNode.replaceChild(newParent, parent);
    }

    removeAllEventListeners(document.querySelector("#p2"));

    for (let player = 1; player < 3; player++) { 

        let grid = null; 
        let board = null;
        if (player === 1) {
            grid = p1.getBoard().getGrid();
            board = document.querySelector("#p1");
        } else {
            grid = p2.getBoard().getGrid();
            board = document.querySelector("#p2");
        }

        for (let row = 0; row < 10; row++) { 
            for (let column = 0; column < 10; column++) { 
                const square = document.querySelector('#p' + player + '-' + (row + 1) + '-' + (column + 1));
                square.style.cursor = 'auto';
                if (grid[row][column] === 1) {
                    square.className = 'hit';
                } else if (grid[row][column] === -1) {
                    square.className = 'miss';
                } else {
                    continue;
                }
            }
        }
    }
    
    setTimeout(() => {alert(winner + " wins!")}, 100);
}

module.exports = renderEnd;