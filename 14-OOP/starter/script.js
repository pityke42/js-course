'use strict';

/*
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
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

//species property is not really inside the jonas object, it has access to is because prototype property of Person object
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//Prototypal inheritance on bnuilt in objects
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);//->look up for Object.prototype
console.log(jonas.__proto__.__proto__.__proto__);//->look up for null

console.log(Person.prototype.constructor);//->points to the calcage function
console.dir(Person.prototype.constructor);//inspect the function

const arr = [3, 6, 4, 5, 6, 9, 3];//behind the scenes this is new Array constructor
console.log(arr.__proto__);//access to all array methods 
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

 Array.prototype.unique = function(){
    return [...new Set(this)];
 };
 console.log(arr.unique());

 const h1 = document.querySelector('h1');
 console.dir(x=>x+1);

 //1. Coding challange
 const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
 };
 const bmw = new Car('Bmw', 120);
 const mercedes = new Car('Mercedes', 95);
 Car.prototype.accelerate = function(){
    //this.speed += 10;
    return `the ${this.make} accelerated speed is : ${this.speed + 10} km/h`;
 };
 Car.prototype.brake = function(){
    //this.speed -= 5;
    return `the ${this.make} braked speed is ${this.speed - 5} km/h`;
 };
 console.log(bmw.accelerate());
 console.log(bmw.brake());
 console.log(mercedes.accelerate());
 console.log(mercedes.brake());
*/
//Class expression
// const PersonCL = class {}

//Class declaration
 class PersonCl {
   constructor(firstName, birthYear){
      this.firstName = firstName;
      this.birthYear = birthYear;

   }
   //Methods wilol be added to the .prototype property
   calcAge(){
      console.log(2037 - this.birthYear);
   }
   greet(){
      console.log(`hey ${this.firstName}`);
   }
 }

 const jessica = new PersonCl('Jessica', 1996);
 console.log(jessica);
 jessica.calcAge();
 
 console.log(jessica.__proto__ === PersonCl.prototype);

//  PersonCl.prototype.greet = function(){
//    console.log(`hey ${this.firstName}`);
//  }
jessica.greet();

//Accessor properties//Getter Setter

