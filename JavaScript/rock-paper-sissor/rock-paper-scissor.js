let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");

let resetButton = document.querySelector(".btn-class-name");

const choiceSound = new Audio('choice.mp3');
const winSound = new Audio('win.mp3');
const loseSound = new Audio('lose.mp3');
const drawSound = new Audio('draw.mp3');
const resetSound = new Audio('reset.mp3');

let historyList = document.querySelector("#history-list");

let resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    resetSound.play();

    // Clear the history
    historyList.innerHTML = '';
};

resetButton.addEventListener("click", resetGame);

let genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    const result = "Game was Draw. Play again";
    msg.innerText = result;
    msg.style.backgroundColor = "#081b31";
    drawSound.play();
    addToHistory(result, "draw");
};

const showWinner = (userWin, userChoice, computerChoice) => {
    let result;
    let resultType;
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        result = `You win! Your ${userChoice} beats computer's ${computerChoice}`;
        resultType = "win";
        msg.innerText = result;
        msg.style.backgroundColor = "green";
        msg.style.borderRadius="1rem";
        msg.style.fontSize="1.5rem";
        winSound.play();
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        result = `You lost. computer's ${computerChoice} beats Your ${userChoice}`;
        resultType = "lose";
        msg.innerText = result;
        msg.style.backgroundColor = "red";
        msg.style.borderRadius="1rem";
        msg.style.fontSize="1.5rem";
        loseSound.play();
    }
    addToHistory(result, resultType);
};

const playGame = (userChoice) => {
    choiceSound.play();
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const addToHistory = (result, resultType) => {
    const historyItem = document.createElement('li');
    historyItem.textContent = result;
    historyItem.classList.add(resultType); // Adds a CSS class based on resultType
    historyList.prepend(historyItem);
    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
};