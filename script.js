//onStart() : to initialize scores to zero
//displayScore() : fired when start is clicked
//updateScore() : updates the scoreboard according to humanChoice and machiineChoice, fired when any button is clicked
//getComputerChoice() : 
// random generator function

var scoreH, scoreM;
var hum, com;

function onStart(){
    scoreH = 0;
    scoreM = 0;
    playRound();
}

function getComputerChoice(){
    const ch = ['rock', 'paper', 'scissors'];
    const r = Math.floor(Math.random() * 10);
    return ch[r % 3];
}

function getChoice(e){
    hum = e.target.id;
}

function playRound(){
    displayScore();
    const list = document.querySelectorAll(".btn");
    for(let i = 0; i < 5; i++){  
        list.forEach(function(btn){
            btn.addEventListener('click', () => getChoice(e));
        });
        com = getComputerChoice();
        if(com === "rock" && hum == "paper")
            scoreH++;
        else if(com === "rock" && hum === "scissors")
            scoreM++;
        else if(com === "paper" && hum === "scissors")
            scoreH++;
        else if(com === "paper" && hum === "rock")
            scoreM++;
        else if(com === "scissors" && hum === "rock")
            scoreH++;
        else if(com === "scissors" && hum === "paper")
            scoreM++;
        else{
            scoreM++;
            scoreH++;
        }
        displayScore();
    }
}

function displayScore(){
    const mid = document.querySelector("#middle");
    mid.innerText = "";
    var scoreBoard = document.createElement("div");
    var score = document.createElement("div");
    var human = document.createElement("div");
    var machine = document.createElement("div");
    score.innerText = "SCORE";
    human.innerText = `Human : ${scoreH}`;
    machine.innerText = `Machine : ${scoreM}`;
    scoreBoard.appendChild(score);
    scoreBoard.appendChild(human);
    scoreBoard.appendChild(machine);
    scoreBoard.style.cssText = "width: 300px; height: 300px; background-color: bisque; padding: 0px 16px 0px 16px; border: 2px dashed rgba(0, 0, 0, 0.507); border-radius: 10%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;";
    score.style.cssText = "font-size: 55px;";
    human.style.cssText = "font-size: 45px;";
    machine.style.cssText = "font-size: 45px;";
    mid.appendChild(scoreBoard);
    return;
}