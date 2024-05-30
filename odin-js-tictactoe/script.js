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
const game = (function() {

    const board = gameBoard.getBoard();
    let turn = 0;


    const playerInit = (p1name, p2name) => {
        return [player(p1name, "x"), player(p2name, "o")];
    }

    const getTurn = () => {
        return turn;
    }

    const changeTurn = () => {
        if (turn === 0) {
            turn = 1;
        } else {
            turn = 0;
        }
    }

    const resetTurn = () => {
        turn = 0; 
    }

    const validMove = (players, row, col) => {
        if ((row < 0 || row > 2 || col < 0 || col > 2) || (isWin(players) !== "Next Turn")) {
            return false;
        } else {
            if (board[row][col] !== 0) {
                return false; 
            } else {
                return true;
            }
        }
    }
    
    const isWin = (players) => {  
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

    return {
        isWin, 
        validMove,  
        playerInit,
        getTurn, 
        changeTurn, 
        resetTurn 
    }
})(); 



const displayController = (function() {
    const PLAYERCARDSECTION = document.querySelector(".playercard-section"); 
    const NAMEPROMPT = document.querySelector("#nameprompt");
    const ENTER = document.querySelector("#enter");
    const XPLAYER = document.querySelector("#xname");
    const OPLAYER = document.querySelector("#oname");   
    const TURNSECTION = document.querySelector(".turn-section");
    const ANNOUNCER = document.querySelector(".announcer");
    const GRID = document.querySelector(".tictactoegrid");

    let players;

    const board = gameBoard.getBoard();

    const renderBoard = () => {
        GRID.innerHTML = ""; 
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const temp = j + 1 + i*3;
                if (board[i][j] === "x") {
                    GRID.innerHTML += "<div id='cell" + temp + "' class='tictactoecell'><svg width='100' height='100'><line x1='0' y1='0' x2='100' y2='100' stroke='black' stroke-width='10' /><line x1='100' y1='0' x2='0' y2='100' stroke='black' stroke-width='10' /></svg></div>";
                } else if (board[i][j] === "o") {
                    GRID.innerHTML += "<div id='cell" + temp + "' class='tictactoecell'><svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='10' fill='transparent'/></svg></div>";           
                } else if (board[i][j] === 0) {
                    GRID.innerHTML += "<div id='cell" + temp + "' class='tictactoecell'></div>";
                }
            }    
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const temp = j + 1 + i*3;
                document.querySelector("#cell" + temp).addEventListener("click", () => {
                    if (game.validMove(players, i, j)) {
                        board[i][j] = players[game.getTurn()].getCharacter(); 
                        if (renderBoard()) {
                            game.changeTurn(); 
                            announcerCall(players[game.getTurn()].getName() + "'s turn...");
                        }
                    }
                })
            }
        }

        const result = game.isWin(players);
        if (result !== "Next Turn") {
            console.log(result);
            announcerCall(result);
            setTimeout(() => alert(result), 100);
            setTimeout(() => {if (confirm("Play Again?")) {
                gameBoard.resetBoard();
                game.resetTurn(); 
                announcerCall(players[game.getTurn()].getName() + "'s turn...");
                renderBoard();
            }}, 200)
            return false;
        }

        return true;
    }

    const announcerCall = (string) => {
        ANNOUNCER.innerHTML = string; 
    }

    ENTER.addEventListener("click", (e) => {
        if (XPLAYER.value !== "" && OPLAYER.value !== ""){
            e.preventDefault();
            players = game.playerInit(XPLAYER.value, OPLAYER.value);
            PLAYERCARDSECTION.innerHTML = "<div class='playercard' id='player1'><p>Player 1: " + XPLAYER.value + "</p><svg width='20' height='20'><line x1='0' y1='0' x2='20' y2='20' stroke='black' stroke-width='3'/><line x1='20' y1='0' x2='0' y2='20' stroke='black' stroke-width='3'/></svg></div>";
            PLAYERCARDSECTION.innerHTML += "<div class='playercard' id='player2'><p>Player 2: " + OPLAYER.value + "</p><svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'><circle cx='10' cy='10' r='8' stroke='black' stroke-width='3' fill='transparent'/></svg></div>";
            NAMEPROMPT.close(); 
            announcerCall(players[game.getTurn()].getName() + "'s turn...");
        }
    })

    renderBoard();

    NAMEPROMPT.showModal(); 

    return {
        renderBoard
    }
})();