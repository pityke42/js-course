'use strict';


//Contructor function
const Person = function(firstName, birthYear){
    //Instance Properies
    this.firstName = firstName;
    this.birthYear = birthYear;


    //Never create a method inside of a constructor function
    //Adding methods to objects
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // };
};
const jonas = new Person('Jonas', 1991); //instance from a person
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);


//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
//It sets the __proto__ property on the object to the prototype property of the (Person) constructor function
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//set properties on prototype
//not directly in the object
//
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'))

