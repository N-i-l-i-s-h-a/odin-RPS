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

function playRound(){
    const hum = getHumanChoice();
    const com = getComputerChoice();
    let scoreH = 0, scoreC = 0;
    if(hum === com){
        scoreC++; scoreH++;
    }
    else if(hum === "Rock"){
        if(com === "Scissors")
            scoreH++;
        
        else if(com === "Paper")
            scoreC++; 
    }
    else if(hum === "Paper"){
        if(com === "Rock")
            scoreH++;
        
        else if(com === "Scissors")
            scoreC++;
    }
    else if(hum === "Scissors"){
        if(com === "Paper")
            scoreH++;
        
        else if(com === "Rock")
            scoreC++;
    }
    return getScore(scoreH, scoreC, hum, com);
}

function getScore(scoreH, scoreC, hum, com) {
    if(scoreH > scoreC){
        console.log(`You win! ${hum} beats ${com}.`);
        alert(`You win! ${hum} beats ${com}.`);
    }
    else if(scoreH < scoreC){
        console.log(`You lose! ${com} beats ${hum}.`);
        alert(`You lose! ${com} beats ${hum}.`);
    }
    else {
        console.log("It's a tie!");
        alert("It's a tie!");
    }
    prompt("Do you want to play again? (yes/no)", "yes").toLowerCase() === "yes" ? playRound() : alert("Thanks for playing!");
}

//The game starts here
alert("Welcome to Rock, Paper, Scissors!");
playRound();