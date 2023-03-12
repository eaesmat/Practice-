'use strict';
// Select all requred DOMs
const modalShowBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for(let modalItem = 0; modalItem < modalShowBtns.length; modalItem++) {
    console.log(modalShowBtns[modalItem].textContent);
}

