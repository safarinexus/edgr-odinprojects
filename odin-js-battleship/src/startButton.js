const renderPlayer = require('./modules/DOM/renderPlayer');
const renderCPU = require("./modules/DOM/renderCPU");


const startButton = (p1, p2) => {
    const STARTBUTTON = document.querySelector('.startButton');
    const RANDOMBUTTON = document.querySelector(".randomise");
    const RANDOMCONTAINER = document.querySelector(".above-board-rand");

    STARTBUTTON.addEventListener("click", () => {
        p2.getBoard().randomiseShips();
        renderPlayer(true, p1);
        renderCPU(false, p2, p1);
        RANDOMBUTTON.outerHTML = "";
        RANDOMCONTAINER.className = "above-board";
    })
}

module.exports = startButton;
