const shipUpdater = (player, playerNo) => {
    const ships = player.getBoard().getShips(); 
    const displayShips = document.querySelectorAll(".p" + playerNo + "-ship");
    let counter = 0;

    displayShips.forEach((ship) => {
        if (ships[counter].isSunk()) {
            let count = 0;
            for (const child of ship.children) {
                child.style.border = "1px solid red";
                if (count !== ships[counter].length - 1) {
                    child.style.borderRight = '0';
                }
                count++; 
            }
        }
        counter++;
    })
}

module.exports = shipUpdater;