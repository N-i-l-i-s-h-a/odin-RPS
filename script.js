//Functions:
// playRound: Function to play a single round of Rock, Paper, Scissors
// getResults: Returns the result of the round
// getComputerChoice: Function to randomly select Rock, Paper, or Scissors
// getHumanChoice: Function to get the user's choice
// updateScore: Function to update the scores based on the choices made

function getComputerChoice() {
    const ch = ['rock', 'paper', 'scissors'];
    const r = Math.floor(Math.random() * 10);
    return ch[r % 3];
}

function updateScore(hum, com){
    if(hum === com){
        scoreC++;
        scoreH++;
    }
    else if(hum === "rock"){
        if(com === "scissors"){
            scoreH++;
        }
        else{
            scoreC++; 
        }
    }
    else if(hum === "paper"){
        if(com === "rock"){
            scoreH++;
        }
        else{
            scoreC++;
        }
    }
    else{
        if(com === "paper"){
            scoreH++;
        }
        else{
            scoreC++;
        }
    }
}

function onStart(){
    scoreH = 0;
    scoreC = 0;
    let mid = document.querySelector("#middle");
    mid.innerText = "";
    let scoreBoard = document.createElement("div");
    let human = document.createElement("div");
    let machine = document.createElement("div");
    scoreBoard.innerText = "SCORE";
    human.innerText = `Human : ${scoreH}`;
    machine.innerText = `Computer : ${scoreC}`;
    scoreBoard.style.cssText = "font-size: 55px; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; border: 2px dashed black; border-radius: 20%; height: 400px; width: 500px;";
    human.setAttribute("style", "font-size: 45px;");
    machine.setAttribute("style", "font-size: 45px;");
    scoreBoard.appendChild(human);
    scoreBoard.appendChild(machine);
    mid.appendChild(scoreBoard);
}

function playRound(){
    const hum = document.querySelector(".btn").addEventListener('click', function(e){ return e.target.id; });
    const com = getComputerChoice();
    updateScore(hum, com, scoreH, scoreC);
    onStart();
}

function getResults() {
    var diff = scoreH - scoreC;
    if(diff === 0){
        console.log("It's a tie!");
    }
    else if(diff > 0){
        console.log(`You win by ${diff} ${diff > 1 ? "points" : "point"}!`);
    }
    else{
        console.log(`You lose by ${Math.abs(diff)} ${diff < -1 ? "points" : "point"}.`);
    }
    return prompt("Do you want to play again? (yes/no)", "yes") === "yes" ? playRound() : null; 
}

//The game starts here
var scoreC, scoreH;