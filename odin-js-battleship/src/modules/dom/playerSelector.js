const createPlayer = require('../player/player');
const renderOwn = require('../DOM/renderOwn');

const playerSelector = (engine, p1, p2) => {
    const P2BOARD = document.querySelector('#p2'); 
    const P2CARD = document.querySelector('#p2-card');
    const ANNOUNCER = document.querySelector('.announcer');

    const createStartButton = () => {
        const startButton = document.createElement("button");
        startButton.classList.add('startButton'); 
        startButton.innerHTML = "Start Game";
        startButton.addEventListener("click", () => {
            //temporarily random place ships 
            p1.getBoard().randomiseShips();
            p2.getBoard().randomiseShips();
            console.log(p1.getBoard().getGrid());
            console.log(p2.getBoard().getGrid());
            renderOwn(p1.getBoard().getGrid(), 1);
            //engine.gameStart(p1, p2);
            ANNOUNCER.innerHTML = '';
        })
        ANNOUNCER.innerHTML = "";
        ANNOUNCER.appendChild(startButton);
    }


    const SELECTOR = document.createElement('div'); 
    SELECTOR.classList.add('p2-selector'); 
    const PLAYERBUTTON = document.createElement('button');
    PLAYERBUTTON.id = 'Player'
    PLAYERBUTTON.innerHTML = 'Player'; 
    const CPUBUTTON = document.createElement('button');
    CPUBUTTON.id = 'CPU'
    CPUBUTTON.innerHTML = 'CPU'; 
    
    PLAYERBUTTON.addEventListener("click", () => {
        P2CARD.innerHTML = 'Player 2'; 
        P2BOARD.removeChild(SELECTOR);
        p2 = createPlayer();
        createStartButton();
    });

    CPUBUTTON.addEventListener("click", () => {
        P2CARD.innerHTML = 'CPU'; 
        P2BOARD.removeChild(SELECTOR);
        p2 = createPlayer(false);
        createStartButton();
    });

    SELECTOR.appendChild(PLAYERBUTTON);
    SELECTOR.appendChild(CPUBUTTON);
    P2BOARD.appendChild(SELECTOR);
}

module.exports = playerSelector;