'use strict';

//selecting elements
const scorPL0= document.getElementById('score--0');
const scorPL1= document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll= document.querySelector('.btn--roll');
const currentScorePL0= document.getElementById('current--0');
//start conditions
scorPL0.textContent=0;
scorPL1.textContent=0;  
dice.classList.add('hidden');
let current=0;
//add roll functionality

btnRoll.addEventListener('click',function(){
    // create random number
    const diceRndNum= Math.trunc((Math.random()*6)+1);
    
    //display dice with number
    dice.classList.remove('hidden');
    dice.src=`dice-${diceRndNum}.png`;
    //change current result if is't 1
    if(diceRndNum!==1){
    current+=diceRndNum;
    currentScorePL0.textContent=current;}
    else{
        //change player
    }

})
