'use strict';
// Select all requred DOMs
const modalShowBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const showModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hideModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let modalItem = 0; modalItem < modalShowBtns.length; modalItem++) {
    modalShowBtns[modalItem].addEventListener('click',showModal)
}
modalCloseBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function() {
    // console.log(e.key);
    console.log('key pressed');
})

