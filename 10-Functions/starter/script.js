'use strict';


// const bookings = [];
// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){

//     //ES5 way
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     //ES6 solve  => you can specify value in the parameters

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking);
// }
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// //to skip the second argument
// createBooking('LH123', undefined, 1000);

// const flight = 'LH123';
// const pityke = {
//     name: 'Balla Istvan',
//     passport: 11222233311,

// }

// const checkIn = function(flightNum, passenger){
//     //change parameters//this variable not get reflected in the ouside flight variable
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 11222233311){
//         alert('check in');
//     } else {
//         alert('wrong passport');
//     }
// }
// checkIn(flight, pityke);
// console.log(flight);
// console.log(pityke);

//is the same as doing...//passing a primitive type to a function same as creating a copy outside a function//value is simply copied
// const flightNum = flight;
// const passenger = pityke;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000000);
// }
// newPassport(pityke);
// checkIn(flight, pityke);
//in JS there is no pass reference// just pass by value

// //generic function
// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }
// const upperFirstWord = function(str){
//     const [first, ...others]= str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //higher order function
// const trasnformer = function(str, fn){
//     console.log(`original string : ${str}`)
//     console.log(`transformed string : ${fn(str)}`)

//     console.log(`transformed by : ${fn.name}`)
// }
// trasnformer('js is the best !', upperFirstWord);
// trasnformer('js is the best !', oneWord);


// //js uses callbacks all the time
// const high5 = function(){
//     console.log('!!!');

// }
// document.body.addEventListener('click', high5);

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }
// const greeterHey = greet('Hey');
// greeterHey('Pityke');

// greet('hello')('Pityke')

// //Challange
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('hi')('pityke')

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function(){}
    book(flightNumber, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name})
    },
}

lufthansa.book(239, 'Balla Istvan');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa);

const eurowings = {
    name: 'Euro Wings',
    iataCode: 'EW',
    bookings: [],

};

const book = lufthansa.book;

//does not work
//book(23, 'Sarah williams);


//call method
book.call(eurowings, 23, 'Sarah Williams');//call method on book function with THIS keyword set to EUROWINGS in the first argument
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
book.call(swiss, 587, 'Bolond Lajos');
console.log(swiss);


//apply method
const flightData = [738, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss)