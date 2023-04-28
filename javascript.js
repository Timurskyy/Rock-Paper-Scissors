const choices = ["Rock", "Paper", "Scissors"];
let playerChoice = "Rock";
let playerScore = 0;
let aiScore = 0;
let result = 0;
let aiChoice = "";
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

function getComputerChoice() {
    let computerSign = document.getElementById("computerSign");
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        computerSign.innerHTML = "<div>✊</div>";
        return "Rock";
    } else if (computerChoice == 2) {
        computerSign.innerHTML = "<div>✋</div>";
        return "Paper";
    } else if (computerChoice == 3) {
        computerSign.innerHTML = "<div>✌</div>";
        return "Scissors";
    }
}

function playRound() {
    let playerScoreDiv = document.getElementById("playerScore_");
    let computerScoreDiv = document.getElementById("computerScore");
    let result_ = document.getElementById("result_");
    if (playerChoice == aiChoice) {
        result_.innerHTML = "It's a tie";
    } else if (playerChoice == "Paper" && aiChoice == "Rock" || playerChoice == "Scissors" && aiChoice == "Paper" || playerChoice == "Rock" && aiChoice == "Scissors") {
      playerScore++;
      playerScoreDiv.innerHTML = "<p>Player: " + playerScore + "</p>";
      result_.innerHTML = "You won";
    } else {
      aiScore++;
      computerScoreDiv.innerHTML = "<p>Computer: " + aiScore + "</p>";
      result_.innerHTML = "You lost";
    }
}
  
function getPlayerChoice(playerChoice_) {
    let playerSign = document.getElementById("playerSign");
    let playerChoice = playerChoice_;
    aiChoice = getComputerChoice();
    if (playerChoice == "Rock") {
        playerSign.innerHTML = "<div>✊</div>";
    } else if (playerChoice == "Paper") {
        playerSign.innerHTML = "<div>✋</div>";
    } else if (playerChoice == "Scissors") {
        playerSign.innerHTML = "<div>✌</div>";
    } else {
        return;
    }
    playRound();
    isGameOver();
}

function isGameOver() {
  let resultWinner = document.getElementById("resultWinner");
  if (playerScore === 5) {
    resultWinner.innerHTML = "You won the whole game! Congrats!!";
    document.getElementById("rockBtn").disabled = true
    document.getElementById("paperBtn").disabled = true
    document.getElementById("scissorsBtn").disabled = true
  } else if (aiScore === 5) {
    resultWinner.innerHTML = "You lost the whole game. Better luck next time!";
    document.getElementById("rockBtn").disabled = true
    document.getElementById("paperBtn").disabled = true
    document.getElementById("scissorsBtn").disabled = true
  }
}

function resetGame(restartBtn){
    location.reload();
}
  
  
  