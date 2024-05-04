let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById('message').innerText = "Invalid input: Please input a number between 1 and 10.";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('message').innerText = `Congratulations! You've guessed the correct number in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerText = "Too low! Try again.";
    } else {
        document.getElementById('message').innerText = "Too high! Try again.";
    }
}
