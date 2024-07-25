const shipSelector = (player) => {
    player.getBoard().randomiseShips(); 
    const ships = player.getBoard().getShips();
    const shipCoords = player.getBoard().getShipCoords();
    let counter = 0;

    console.log(shipCoords);

    setTimeout(() => {
        const width = document.querySelector('.square').offsetWidth; 

        ships.forEach(ship => {
            const shipElement = document.createElement('div'); 
            shipElement.classList.add("shipElement");
            shipElement.id = ship.name
            shipElement.draggable = true;
            const x = shipCoords[counter][0][0]; 
            const y = shipCoords[counter][0][1]; 
            shipElement.setAttribute("x", x);
            shipElement.setAttribute("y", y);   
    
            if (x === shipCoords[counter][1][0]) {
                shipElement.setAttribute("orientation", "horizontal");
                shipElement.style.width = ship.length * width - (ship.length - 1 * 1) + "px";
                shipElement.style.height = width + "px";
            } else if (y === shipCoords[counter][1][1]) {
                shipElement.setAttribute("orientation", "vertical");
                shipElement.style.height = ship.length * width - (ship.length - 1 * 1) + "px";
                shipElement.style.width = width + "px";
            }
    
            shipElement.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text", e.target.id);
            })
            shipElement.addEventListener("click", (e) => {
                if (shipElement.offsetWidth > shipElement.offsetHeight) {
                    shipElement.setAttribute("orientation", "vertical");
                    shipElement.style.height = ship.length * width - (ship.length - 1 * 1) + "px";
                    shipElement.style.width = width + "px";
                } else {
                    shipElement.setAttribute("orientation", "horizontal");
                    shipElement.style.width = ship.length * width - (ship.length - 1 * 1) + "px";
                    shipElement.style.height = width + "px";
                }
            })
    
            document.querySelector('#p1-' + (x + 1) + "-" + (y + 1)).appendChild(shipElement);
    
            counter++; 
        });
    }, 50); 


}

module.exports = shipSelector;