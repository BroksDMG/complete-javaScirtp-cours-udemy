'use strict';

const showModals =document.querySelectorAll('.show-modal');
const hidden = document.querySelector('.hiden');
const closeModal = document.querySelector('.close-modal');
const Overlay = document.querySelector('.overlay');

for(let i=0;i<showModals.length;i++){
    console.log(showModals[i].textContent);
}