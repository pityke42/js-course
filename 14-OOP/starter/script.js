'use strict';

const Person = function(firstName, birthYear){
    //Instance Properies
    this.firstName = firstName;
    this.birthYear = birthYear;
}
const jonas = new Person('Jonas', 1991); //instance from a person
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

