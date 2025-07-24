//Functions:
// playRound: Function to play a single round of Rock, Paper, Scissors
// getScore: Returns the result of the round
// getComputerChoice: Function to randomly select Rock, Paper, or Scissors
// getHumanChoice: Function to get the user's choice

function getComputerChoice() {
    const ch = ['rock', 'paper', 'scissors'];
    const r = Math.floor(Math.random() * 10);
    return ch[r % 3];
}

function getHumanChoice(){
    let ch = prompt("Enter your choice: Rock, Paper, or Scissors");
    if (ch === null) {
        alert("EMPTY CHOICE");
    }
    ch = (ch.trim()).toLowerCase();
    if(ch === "rock" || ch === "paper" || ch === "scissors") {
        return ch.charAt(0).toUpperCase() + ch.slice(1);
    }
    else {        
        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}
