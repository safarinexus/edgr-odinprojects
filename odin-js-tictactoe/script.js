//gameBoard IIFE for returning a board object
const gameBoard = (function() {
    const rows = 3; 
    const columns = 3; 
    const board = []

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i][j] = 0;
        }
    }

    const getBoard = () => board;

    const getAvailable = () => {
        let check = false; 
        for (let i = 0; i < 3; i++ ) {
            if(board[i].includes(0)) {
                check = true;
            }
        }
        return check;
    }

    const resetBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
              board[i][j] = 0;
            }
        }
    }
    
    return {
        getBoard, 
        getAvailable, 
        resetBoard
    }
})();



//Player factory function to create player objects
function player(name, character) {
    return {
        getName: () => name, 
        getCharacter: () => character
    }
}



//Game Controller IIFE to create an instance of a controller for the game
const gameEngine = (function() {

    const board = gameBoard.getBoard();

    const playerInit = (p1name, p2name) => {
        return [player(p1name, "x"), player(p2name, "o")];
    }

    const players = playerInit(); 
    const playerCount = 2;
    const turns = 5; 

    const validMove = (row, col) => {
        if (row < 0 || row > 2 || col < 0 || col > 2) {
            return false;
        } else {
            if (board[row][col] !== 0) {
                return false; 
            } else {
                return true;
            }
        }
    }
    
    const isWin = () => {  
        if ((board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x")||
        (board[1][0]=== "x" && board[1][1] === "x" && board[1][2] === "x")||
        (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x")||
        (board[0][0] === "x" && board[1][0] === "x" && board[2][0] === "x")||
        (board[0][1] === "x" && board[1][1] === "x" && board[2][1] === "x")||
        (board[0][2] === "x" && board[1][2] === "x" && board[2][2] === "x")||
        (board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x")||
        (board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x")
        ){
            return `${players[0].getName()} wins!`;
        } else if ((board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o")||
        (board[1][0]=== "o" && board[1][1] === "o" && board[1][2] === "o")||
        (board[2][0] === "o" && board[2][1] === "o" && board[2][2] === "o")||
        (board[0][0] === "o" && board[1][0] === "o" && board[2][0] === "o")||
        (board[0][1] === "o" && board[1][1] === "o" && board[2][1] === "o")||
        (board[0][2] === "o" && board[1][2] === "o" && board[2][2] === "o")||
        (board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o")||
        (board[0][2] === "o" && board[1][1] === "o" && board[2][0] === "o")
        ){
            return `${players[1].getName()} wins!`;
        } else if (!gameBoard.getAvailable()) {
            return "Draw!";
        } else {
            return "Next Turn";
        }
    }

    const startGame = () => {
        for (let i = 0; i < turns; i++) {
            for (let j = 0; j < playerCount; j++) {
                //connect with announcer display
    
                let row = -1;
                let column = -1;
                
                while (validMove(row, column) === false) {
                    row = prompt("Which row? (1 - 3): ") - 1; 
                    column = prompt("Which column? (1 - 3): ") - 1; 
                    if (validMove(row, column) === false) {
                        console.log("Please enter a valid move!");
                    }
                }
    
                board[row][column] = players[j].getCharacter();
                //announcer isWin
                if (isWin() !== "Next Turn") {
                    return;
                }
            }
        }
    }

    return {
        players, 
        startGame
    }
})(); 

const displayController = (function() {
    const PLAYERCARDSECTION = document.querySelector(".playercard-section"); 
    const NAMEPROMPT = document.querySelector("#nameprompt");
    const ENTER = document.querySelector("#enter");
    const XPLAYER = document.querySelector("#xname");
    const OPLAYER = document.querySelector("#oname");
    const CELL1 = document.querySelector("#cell1");
    const CELL2 = document.querySelector("#cell2");
    const CELL3 = document.querySelector("#cell3");
    const CELL4 = document.querySelector("#cell4");
    const CELL5 = document.querySelector("#cell5");
    const CELL6 = document.querySelector("#cell6");
    const CELL7 = document.querySelector("#cell7");
    const CELL8 = document.querySelector("#cell8");
    const CELL9 = document.querySelector("#cell9");

    ENTER.addEventListener("click", (e) => {
        if (XPLAYER.value !== "" && OPLAYER.value !== ""){
            e.preventDefault();
            PLAYERCARDSECTION.innerHTML = "<div class='playercard' id='player1'><p>Player 1: " + XPLAYER.value + "</p><svg width='20' height='20'><line x1='0' y1='0' x2='20' y2='20' stroke='black' stroke-width='3'/><line x1='20' y1='0' x2='0' y2='20' stroke='black' stroke-width='3'/></svg></div>";
            PLAYERCARDSECTION.innerHTML += "<div class='playercard' id='player2'><p>Player 2: " + OPLAYER.value + "</p><svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'><circle cx='10' cy='10' r='8' stroke='black' stroke-width='3' fill='transparent'/></svg></div>";
            NAMEPROMPT.close(); 
        }
    })

    CELL8.addEventListener("click", () => {
        CELL8.innerHTML = "<svg width='100' height='100'><line x1='0' y1='0' x2='100' y2='100' stroke='black' stroke-width='10' /><line x1='100' y1='0' x2='0' y2='100' stroke='black' stroke-width='10' /></svg>"; 
    })
    CELL9.addEventListener("click", () => {
        CELL9.innerHTML = "<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='10' fill='transparent'/></svg>"; 
    })

    NAMEPROMPT.showModal(); 
    return;
})();