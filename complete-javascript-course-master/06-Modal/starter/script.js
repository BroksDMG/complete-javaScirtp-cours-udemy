'use strict';

const showModals =document.querySelectorAll('.show-modal');
const hidden = document.querySelector('.hiden');
const closeModal = document.querySelector('.close-modal');
const Overlay = document.querySelector('.overlay');
const modal =document.querySelector('.modal');
//dodanie funkcji zeby otwierac button;
//za pomoca classlist i remove usunąć hidden i overlay
//adding function to open button
//by cllasslist and remove to remove hiiden and overlay class;

const btnOpen=function(){
    modal.classList.remove('hidden');
    Overlay.classList.remove('hidden');

}
const btnClose=function(){
    modal.classList.add('hidden');
    Overlay.classList.add('hidden');
}
for(let i=0;i<showModals.length;i++){
    showModals[i].addEventListener('click',btnOpen);
};
closeModal.addEventListener('click',btnClose);
Overlay.addEventListener('click',btnClose);

document.addEventListener('keydown',function(e){
    if(e.key==='Escape')
        if(!modal.classList.contains('hidden'))
            btnClose();
});