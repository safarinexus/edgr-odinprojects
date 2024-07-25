const renderPlayer = require('./modules/DOM/renderPlayer');
const renderCPU = require("./modules/DOM/renderCPU");


const startButton = (p1, p2) => {
    const STARTBUTTON = document.querySelector('.startButton');
    const RANDOMBUTTON = document.querySelector(".randomise");
    const RANDOMCONTAINER = document.querySelector(".above-board-rand");
    const SHIPS = p1.getBoard().getShips();
    let flag = false; 
    let counter = 0; 

    STARTBUTTON.addEventListener("click", () => {
        p1.getBoard().clearBoard(); 
        const SHIPELEMENTS = document.querySelectorAll(".shipElement");
        SHIPELEMENTS.forEach(element => {
            const name = element.id;
            const x = Number(element.getAttribute("x"));
            const y = Number(element.getAttribute("y"));
            const orientation = element.getAttribute("orientation"); 
            let curr = null;
            SHIPS.forEach(ship => {
                if (ship.name === name) { 
                    curr = ship; 
                }
            })
            p1.getBoard().placeShip(curr, x, y, orientation);  
            counter++;
        }); 

        flag = p1.getBoard().checkAllShipsPlaced();

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
