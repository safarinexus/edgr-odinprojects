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

    const printBoard = () => {
        for (let i = 0; i < rows; i++) {
            console.log(board[i]);
        }
    }

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
        resetBoard, 
        printBoard
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

    const playerInit = () => {
        const p1name = prompt("Player 1 (X): "); 
        const p2name = prompt("Player 2 (O): "); 
        return [player(p1name, "x"), player(p2name, "o")];
    }

    const players = playerInit(); 
    console.log("Welcome, " + players[0].getName() + ". You are X."); 
    console.log("Welcome, " + players[1].getName() + ". You are O.");
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

    for (let i = 0; i < turns; i++) {
        for (let j = 0; j < playerCount; j++) {
            console.log(players[j].getName() + ", your turn.");

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
            gameBoard.printBoard();
            console.log(isWin()); 
            if (isWin() !== "Next Turn") {
                return;
            }
        }
    }
})(); 


const displayController = (function() {
    return;
})(); 