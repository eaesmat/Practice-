'use strict';
//Made a random number between 1 to 20
const randomNumber = Math.trunc(Math.random() * 20) + 1;

// make a variable to store the  max marks of the game
let score = 20;

// This is a method called on click of check button
document.querySelector('.check').addEventListener('click', function(){

    // Store the guess number form the user input
    const guessInput = document.querySelector('.guess').value;


    document.querySelector('.number').textContent = randomNumber;

    // Check if the number is not empty
    if(!guessInput)
    {
        document.querySelector('.message').textContent = "Please enter number!";
    }

    // check if the guess and random numbers are matched
    else if(guessInput == randomNumber)
    {
        document.querySelector('.message').textContent = "Correct number!";
    }

    // check if the number is higher
    else if(guessInput > randomNumber)
    {
        document.querySelector('.message').textContent = "Very High!";
        score --;
        document.querySelector('.score').textContent = score;
    }

    // check if the number lower
    else if(guessInput < randomNumber)
    {
        document.querySelector('.message').textContent = "Very Low!";
        score --;
        document.querySelector('.score').textContent = score;
    }
});
