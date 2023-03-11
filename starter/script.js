'use strict';
const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
document.querySelector('.check').addEventListener('click', function(){
    const guessInput = document.querySelector('.guess').value;
    if(!guessInput)
    {
        document.querySelector('.message').textContent = "Please enter number!";
    }
});
