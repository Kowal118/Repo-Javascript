function getComputerChoice() {
    const choices = ['Kamień', 'Papier', 'Nożyce'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Mamy remis";
    } else if (userChoice === 'Kamień') {
        return computerChoice === 'Nożyce' ? "Wygrałeś" : "Komputer wygrał";
    } else if (userChoice === 'Papier') {
        return computerChoice === 'Kamień' ? "Wygrałeś" : "Komputer wygrał";
    } else if (userChoice === 'Nożyce') {
        return computerChoice === 'Papier' ? "Wygrałeś" : "Komputer wygrał";
    }
}

function makeChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `Wybrałeś ${userChoice}. Komputer wybrał ${computerChoice}. ${result}`;
}
