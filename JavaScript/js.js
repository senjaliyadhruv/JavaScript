let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

document.getElementById('submit').addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    guessCount++;

    if (userGuess === secretNumber) {
        document.getElementById('result').innerHTML = ` Congratulations! You guessed the number in ${guessCount} attempts.`;
    } else if (userGuess < secretNumber) {
        document.getElementById('result').innerHTML = `Too low! Try again.`;
    } else {
        document.getElementById('result').innerHTML = `Too high! Try again.`;
    }
}
