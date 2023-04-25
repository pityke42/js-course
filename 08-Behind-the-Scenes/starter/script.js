'use strict';

function calcAge(birthYear){
    const age = 2023 - birthYear;
    
    function printAge(){
        let outPut = `${firstName} is ${age}, born in ${birthYear}`;
        console.log(outPut); 

        if(birthYear >= 1987 && birthYear <= 2012){
            var genZ = true; //var is a function scoped variable
            //creating new variavble with same name as aouter scope's variable
            const firstName = 'Feri';
            const str = `Oh and you are a GenZ, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            } 
            outPut = 'NEW OUTPUT'; //reassigning outer scope's variable

        }
        // console.log(str) //str is a block scoped variable
        console.log(genZ); //genZ is a function scoped variable
        console.log(outPut);
    }

    printAge();

    return age;
}

const firstName = 'Pityke';
calcAge(1998);