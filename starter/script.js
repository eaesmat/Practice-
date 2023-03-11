'use strict';
//Made a random number between 1 to 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

// make a variable to store the  max marks of the game
let score = 20;

// This is a method called on click of check button
document.querySelector('.check').addEventListener('click', function () {
  // Store the guess number form the user input
  const guessInput = document.querySelector('.guess').value;

  // Check if the number is not empty
  if (!guessInput) {
    document.querySelector('.message').textContent = 'Please enter number!';
  }

  // check if the guess and random numbers are matched
  else if (guessInput == randomNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = score;

    // check if the new score is higher
    if(score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent =   highScore;
    } else  {
        document.querySelector('.highscore').textContent = highScore;
    }

  }

  // check if the number is higher
  else if (guessInput > randomNumber) {
    document.querySelector('.message').textContent = 'Very High!';


    // check if the numnber is lower than 1
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.message').textContent = 'Lost the game';
        document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  // check if the number lower
  else if (guessInput < randomNumber) {
    document.querySelector('.message').textContent = 'Very Low!';


    // check if the numnber is lower than 1
    if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
      }
      else {
          document.querySelector('.message').textContent = 'Lost the game';

      }
  }
});


// handle agin event

document.querySelector('.again').addEventListener('click', function(){
    score = 20;

    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 0;

    document.querySelector('body').style.backgroundColor =  '#222';

    if (!guessInput) {
        document.querySelector('.message').textContent = 'Please enter number!';
      }

      // check if the guess and random numbers are matched
      else if (guessInput == randomNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('body').style.backgroundColor = 'green';


        // check if the new score is higher
        if(score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent =   highScore;
        } else  {
            document.querySelector('.highscore').textContent = highScore;
        }

      }

      // check if the number is higher
      else if (guessInput > randomNumber) {
        document.querySelector('.message').textContent = 'Very High!';


        // check if the numnber is lower than 1
        if (score > 0) {
          score--;
          document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'Lost the game';
            document.querySelector('body').style.backgroundColor = 'red';
        }
      }

      // check if the number lower
      else if (guessInput < randomNumber) {
        document.querySelector('.message').textContent = 'Very Low!';


        // check if the numnber is lower than 1
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
          }
          else {
              document.querySelector('.message').textContent = 'Lost the game';

          }
      }


})

