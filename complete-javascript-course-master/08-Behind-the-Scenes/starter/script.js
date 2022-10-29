'use strict';

function clacAge(birthYear){
    const age = 2037-birthYear;

    function printAge(){

        let output =`${firstName},you are ${age},born in ${birthYear}`
        
        console.log(output);
        if(birthYear>=1981&&birthYear<=1996){
            var millenial =true;
            const firstName="Steven";
            const str=`oh, you're a millenial, ${firstName}`;
            console.log(str);
        
            function add (a,b){
                return a+b;
            }
            const output="NEW OUTPOT"
        }
        console.log(millenial);
        console.log(output);
    }
    printAge()
    return age;
}
const firstName = 'jonas';
clacAge(1991);