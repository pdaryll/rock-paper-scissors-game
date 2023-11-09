const weapon2 = ["Rock", "Paper", "Scissors"];
const weapon = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    return weapon[number];
}

function fight(playerSelection, computerSelection){


    // const  = playerSelection1.toUpperCase();
    // console.log("Player="+playerSelection+" Comp="+computerSelection)
    // console.log()



    if (playerSelection === "ROCK"){
        if (computerSelection === "ROCK"){
            console.log("Draw!");
            return 0;
        }else if (computerSelection === "PAPER"){
            console.log("You Lose! "+computerSelection+" beats "+playerSelection);
            return 2;
        }else{
            console.log("You Win! "+playerSelection+" beats "+computerSelection);
            return 1;
        }
    }else if (playerSelection === "PAPER"){
        if (computerSelection === "PAPER"){
            console.log("Draw!");
            return 0;
        }else if (computerSelection === "SCISSORS"){
            console.log("You Lose! "+computerSelection+" beats "+playerSelection);
            return 2;
        }else{
            console.log("You Win! "+playerSelection+" beats "+computerSelection);
            return 1;
        }
    }else{
        if (computerSelection === "SCISSORS"){
            console.log("Draw!");
            return 0;
        }else if (computerSelection === "ROCK"){
            console.log("You Lose! "+computerSelection+" beats "+playerSelection);
            return 2;
        }else{
            console.log("You Win! "+playerSelection+" beats "+computerSelection);
            return 1;
        }       
    }
}

// const player = "rock";
// const computer = getComputerChoice();

// console.log(fight(player, computer));

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        let valid = false;
        let player = ""
        while (!valid) {
            player = prompt("Rock, Paper, or Scissors? ").toUpperCase();
            if (weapon.includes(player)){
                valid = true;
            }
        }
        let computer = getComputerChoice();
        let result = fight(player, computer);

        if (result === 1){
            playerScore ++;
        }else if (result === 2){
            computerScore ++;
        }
    }
    if (playerScore === computerScore){
        console.log("No one Wins! Score is "+playerScore+ " to "+computerScore)
    }else if (playerScore > computerScore){
        console.log("You Bested the Computer! Score is "+playerScore+ " to "+computerScore);
    }else{
        console.log("You Lost to the Computer! Score is "+playerScore+ " to "+computerScore);
    }
}
game();