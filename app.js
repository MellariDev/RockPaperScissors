//Variables
const resultDisplay = document.querySelector('#result');
const choiceDisplay = document.querySelector('#choices');
const choices = ['rock', 'paper', 'scissors'];

//Functions
choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.addEventListener('click', handleClick);
    choiceDisplay.appendChild(button);
})

function handleClick(e) {
    const userChoice = e.target.innerHTML;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    getResults(userChoice, computerChoice);
}

function getResults(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'You Win';
            break;
        case 'paperscissors':
        case 'rockpaper':
        case 'scissorsrock':
            resultDisplay.innerHTML = 'You Lose';
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            resultDisplay.innerHTML = "It's a draw";
            break;
    }
}