function getComputerChoice(){
    choice = Math.floor(Math.random() * 3); 
    which = "";
    if (choice == 0){
        which = "Rock";
    } else if (choice == 1){
        which = "Paper"; 
    } else {
        which = "Scissors";
    }
    return which;
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase(); 
    let computer = computerSelection.toLowerCase(); 
    if (player == computer){
        return {
                result : 0, 
                output : `Draw! ${playerSelection} ties with ${computerSelection}.`
                }
    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        return {
                result : 1, 
                output : `You win! ${playerSelection} beats ${computer}.`
                }
    } else {
        return {
                result : 2,
                output : `You lose! ${computerSelection} beats ${player}.`
                }
    }
}

function playGame(){
    let playerScore = 0; 
    let computerScore = 0; 
    let computerSelection = "";
    let playerSelection = "";
    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice(); 
        while ((playerSelection.toLowerCase() != "rock") && (playerSelection.toLowerCase() != "paper") && (playerSelection.toLowerCase() != "scissors")) {
            playerSelection = prompt("Rock, paper or scissors?");
        }
        res = playRound(playerSelection, computerSelection);
        console.log(res["output"]);
        if (res["result"] == 1) {
            playerScore++; 
        } else if (res["result"] == 2) {
            computerScore++;
        }
        playerSelection = "";
    }
    if (playerScore > computerScore){
        console.log("Player wins!");
    } else if (computerScore > playerScore){
        console.log("Player loses!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();