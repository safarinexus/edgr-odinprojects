console.log('initiated'); 

//keep dom functions on the main.js file for easy data in/out

//imports and init objects
import ('./style.css');
import createPlayer from './modules/player/player';

//DOM modules 
import initialRender from './modules/DOM/initialRender';
import renderEnd from './modules/DOM/renderEnd';

//create players object
const players = (function () {
    let p1 = createPlayer(); 
    let p2 = createPlayer(false);

    return {
        p1: () => p1, 
        p2: () => p2,
    }
})();

//initial board render 
initialRender(players.p1(), players.p2());


//hehe
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        if (document.querySelector('.startButton') === null) {
            e.preventDefault();
            const board = players.p2().getBoard().getGrid();
            for (let row = 0; row < 10; row++) { 
                for (let column = 0; column < 10; column++) { 
                    if (board[row][column] !== 0 && board[row][column] !== 1 && board[row][column] !== -1) {
                        players.p2().getBoard().receiveAttack(row, column); 
                    }
                }
            }
            renderEnd(players.p1(), players.p2(), "Player 1");
        }
    }
})
