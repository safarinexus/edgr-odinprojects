const renderPlayer = require('./modules/DOM/renderPlayer');
const renderCPU = require("./modules/DOM/renderCPU");


const startButton = (p1, p2) => {
    const STARTBUTTON = document.querySelector('.startButton');
    const RANDOMBUTTON = document.querySelector(".randomise");
    const RANDOMCONTAINER = document.querySelector(".above-board-rand");
    const P1GRID = p1.getBoard().getGrid();
    const refer = [5, 4, 3, 3, 2]; 
    let counter = 0; 

    STARTBUTTON.addEventListener("click", () => {
        p1.getBoard().clearBoard(); 
        setTimeout(() => {
            const SHIPELEMENTS = document.querySelectorAll(".shipElement");
            SHIPELEMENTS.forEach(ship => {
                const x = ship.getAttribute("x");
                const y = ship.getAttribute("y");
                const orientation = ship.getAttribute("orientation");
                p1.getBoard().placeShip(p1.getBoard().getShips()[counter], x, y, orientation); 
                counter++;
            });
        }, 150); 
        const flag = p1.getBoard().checkAllShipsPlaced();
        if (!flag) {
            p1.getBoard().clearBoard();
            alert("placed your ships in valid places");
        } else {
            p2.getBoard().randomiseShips();
            renderPlayer(true, p1);
            renderCPU(false, p2, p1);
            RANDOMBUTTON.outerHTML = "";
            RANDOMCONTAINER.className = "above-board";
        }        
    })
}

module.exports = startButton;
