const playerSelector = () => {
    const P2BOARD = document.querySelector('#p2');
    const P2CARD = document.querySelector('#p2-card');

    const SELECTOR = document.createElement('div'); 
    SELECTOR.classList.add('p2-selector'); 
    const PLAYERBUTTON = document.createElement('button');
    PLAYERBUTTON.id = 'Player'
    PLAYERBUTTON.innerHTML = 'Player'; 
    const CPUBUTTON = document.createElement('button');
    CPUBUTTON.id = 'CPU'
    CPUBUTTON.innerHTML = 'CPU'; 
    SELECTOR.appendChild(PLAYERBUTTON);
    SELECTOR.appendChild(CPUBUTTON);
    P2BOARD.appendChild(SELECTOR);

    document.querySelector('#Player').addEventListener("click", () => {
        /*
        for (let row = 1; row < 11; row++) { 
            for (let column = 1; column < 11; column++) {
                document.querySelector('#p2-'+row+column).addEventListener("click", () => {

                })
            }
        }
        */
        P2CARD.innerHTML = 'Player 2'; 
        P2BOARD.removeChild(SELECTOR);
    })   

    document.querySelector('#CPU').addEventListener("click", () => {
        
        P2CARD.innerHTML = 'CPU'; 
        P2BOARD.removeChild(SELECTOR);
    })   
}

module.exports = playerSelector;