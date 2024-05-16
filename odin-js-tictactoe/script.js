//leave logic for legal character ("x" or "o") within the ui selection  
//need to think about where to include logic for whether something is a valid move (i.e. if the space is empty or not)
//how to implement rotating turns is another one 
//check for winning condition 
//your game controller should probably include a restart for when the game ends

//gameBoard IIFE for returning a board object
const gameBoard = (function() {
    let board = [
        [0, 0, 0], 
        [0, 0, 0],
        [0, 0, 0]
    ];

    const available = () => {
        let check = false; 
        for (let i = 0; i < 3; i++ ) {
            for (let j = 0; j < 3; j++ ) {
                if (board[i][j] === 0) {
                    check = true;
                }
            }
        }
        return check;
    }

    const print = () => {
        for (let i = 0; i < 3; i++)  {
                console.log(board[i]);
            } 
    }

    const edit = (row, col, character) => {
        if (row >= 0 && row < 3 && col >= 0 && row < 3 && board[row][col] === 0){
            board[row][col] = character;
        } else {
            return "Error!";
        }
    }

    const reset = () => board = [
        [0, 0, 0],
        [0, 0, 0], 
        [0, 0, 0]
    ]
    
    return {
        available, 
        print, 
        edit, 
        reset, 
        view: () => [...board]
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
const gameController = (function(gameBoard) {

    const playerInit = () => {
        const player1name = prompt("Player 1: "); 
        let player1char = ""; 
        while (player1char != "x" && player1char != "o") {
            player1char = prompt("Choose X or O: "); 
        }
        const player2name = prompt("Player 2: "); 
        let player2char = ""; 
        if (player1char === "x") {
            player2char = "o"; 
        } else {
            player2char = "x"; 
        }
        return {
            p1: player(player1name, player1char), 
            p2: player(player2name, player2char)
        }
    }

    const isWin = (p1, p2) => {
        board = gameBoard.view();
        if ((board[0][1] === p1.getCharacter() && board[0][2] === p1.getCharacter() && board[0][3] === p1.getCharacter())||
        (board[1][1] === p1.getCharacter() && board[1][2] === p1.getCharacter() && board[1][3] === p1.getCharacter())||
        (board[2][1] === p1.getCharacter() && board[2][2] === p1.getCharacter() && board[2][3] === p1.getCharacter())||
        (board[0][0] === p1.getCharacter() && board[1][0] === p1.getCharacter() && board[2][0] === p1.getCharacter())||
        (board[0][1] === p1.getCharacter() && board[1][1] === p1.getCharacter() && board[2][1] === p1.getCharacter())||
        (board[0][2] === p1.getCharacter() && board[1][2] === p1.getCharacter() && board[2][2] === p1.getCharacter())||
        (board[0][0] === p1.getCharacter() && board[1][1] === p1.getCharacter() && board[2][2] === p1.getCharacter())||
        (board[0][2] === p1.getCharacter() && board[1][1] === p1.getCharacter() && board[2][0] === p1.getCharacter())
        ){
            return `${p1.getName()} wins!`;
        } else if ((board[0][1] === p2.getCharacter() && board[0][2] === p2.getCharacter() && board[0][3] === p2.getCharacter())||
        (board[1][1] === p2.getCharacter() && board[1][2] === p2.getCharacter() && board[1][3] === p2.getCharacter())||
        (board[2][1] === p2.getCharacter() && board[2][2] === p2.getCharacter() && board[2][3] === p2.getCharacter())||
        (board[0][0] === p2.getCharacter() && board[1][0] === p2.getCharacter() && board[2][0] === p2.getCharacter())||
        (board[0][1] === p2.getCharacter() && board[1][1] === p2.getCharacter() && board[2][1] === p2.getCharacter())||
        (board[0][2] === p2.getCharacter() && board[1][2] === p2.getCharacter() && board[2][2] === p2.getCharacter())||
        (board[0][0] === p2.getCharacter() && board[1][1] === p2.getCharacter() && board[2][2] === p2.getCharacter())||
        (board[0][2] === p2.getCharacter() && board[1][1] === p2.getCharacter() && board[2][0] === p2.getCharacter())
        ){
            return `${p2.getName()} wins!`;
        } else if (!gameBoard.available()) {
            return "Draw!"; 
        } else {
            return "Nope";
        }
    }

    const turn = (p1, p2) => {
        console.log(`${p1.getName()}'s turn}`); 
        let row1 = prompt("Which row?"); 
        let col1 = prompt("which col?"); 
        gameBoard.edit(row1, col1, p1.getCharacter()); 
        if (isWin(p1, p2) !== "Nope"){
            console.log(isWin());
            return
        } 

    }

    const engine = () => {
        console.log("Welcome to Console Tic-Tac-Toe!");
        const players = playerInit(); 


        console.log(players.p1.getName()); 
        console.log(players.p1.getCharacter()); 
        console.log(players.p2.getName());
        console.log(players.p2.getCharacter()); 
    }

    return {
        engine
    }
})(gameBoard); 


gameController.engine();