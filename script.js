'use strict'

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.btn');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    console.log(userChoice, userChoiceDisplay);
    if (userChoice === "Rock"){
        userChoice = ' Rock 🥌🥌🥌';
    };
    if (userChoice === "Paper"){
        userChoice = ' Paper 📄📄📄 ';
    };
    if (userChoice === "Scissor"){
        userChoice = ' Scissor ✂✂✂';
    };
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1){
        computerChoice = ' Rock 🥌🥌🥌';
    }
    if (randomNumber === 2){
        computerChoice = ' Paper 📄📄📄 ';
    }
    if (randomNumber === 3){
        computerChoice = ' Scissor ✂✂✂';
    }
    
    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
    if (computerChoice === userChoice ){
        result = 'its a draw! 👐👐';
    };

    if (computerChoice === ' Rock 🥌🥌🥌' && userChoice === ' Paper 📄📄📄 ' ){
        result = 'You win!🏆🏆';
    };
    if (computerChoice === ' Rock 🥌🥌🥌' && userChoice === ' Scissor ✂✂✂') {
        result ='You lost! 👎👎';
    };
    if (computerChoice === ' Paper 📄📄📄 ' && userChoice === ' Scissor ✂✂✂') {
        result = 'You win!🏆🏆';
    };
        if (computerChoice === ' Paper 📄📄📄 '  && userChoice === ' Rock 🥌🥌🥌') {
        result = 'You lost! 👎👎';
    };
        if (computerChoice ===  ' Scissor ✂✂✂' && userChoice === ' Rock 🥌🥌🥌') {
        result = 'You win!🏆🏆';
    };
        if (computerChoice === ' Scissor ✂✂✂' && userChoice === ' Paper 📄📄📄 ' ) {
        result = 'You lost! 👎👎';
    };
    resultDisplay.innerHTML = result;
};