'use strict';

// Select the Elements
const scoreZeroElement = document.querySelector('#score--0');
const ScoreOneElement = document.querySelector('#score--1');
// const ScoreOneElement = document.getElementById('score--1');
const dice = document.querySelector('.dice');

// Reset values
scoreZeroElement.textContent = 0;
ScoreOneElement.textContent = 0;
// dice.style.display = 'none';
dice.classList.add('hidden');

