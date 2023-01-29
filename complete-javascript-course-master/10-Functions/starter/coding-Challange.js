"use strict";
// const poll={
//     question:"What is your favourite programmning language?",
//     options:["0: JavaScript","1: Python","2: Rust","3:C++"],
//     answer: new Array(4).fill(0),
//     updateAnswer(value){
//         if(value<0||value>4)return
//             this.answer[value]++
//         // console.log(this.answer);
//     },
//     registerNewAnswer(){
//         const option =Number( prompt(
//        `What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++`))
        
//         poll.updateAnswer.call(poll,option)
//         displayResults()
//        },
//        displayResults(type="array"){
//         if(type==='array')console.log('array');
//         if(type==='string')console.log('Poll result are 13,2,4,1');
//     }
// };


// document
// .querySelector('.poll')
// .addEventListener('click',poll.registerNewAnswer.bind(poll));
// // registerNewAnswer()

//coding challange #2

(function(){
    const header = document.querySelector('h1');
    header.style.color='red';
    
    const body =document.querySelector('body');
    body.addEventListener('click',function d(){
        header.style.color='blue'
    })
})
();


    