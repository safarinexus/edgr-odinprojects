const renderShipStatus = () => {
    const guide = [5, 4, 3, 3, 2]; 

    for (let player = 1; player <= 2; player++) {
        let counter = 0;
        let ships = null;
        if (player === 1) {
            ships = document.querySelectorAll(".p1-ship");
        } else {
            ships = document.querySelectorAll(".p2-ship");
        }   

        setTimeout(() => {
            const width = document.querySelector('.square').offsetWidth;
    
            ships.forEach(ship => {
                for (let i = 0; i < guide[counter]; i++) { 
                    const square = document.createElement("div"); 
                    square.style.height = width - 5 + "px"; 
                    square.style.width = width - 5 + "px";
                    square.style.borderTop = "1px solid blue"; 
                    square.style.borderBottom = "1px solid blue"; 
                    square.style.borderLeft = "1px solid blue"; 
                    if (i === guide[counter] - 1) {
                        square.style.borderRight = "1px solid blue"; 
                    }
                    ship.appendChild(square);
                }
                counter++;
            })
        }, 50);
    }    
}

module.exports = renderShipStatus; 