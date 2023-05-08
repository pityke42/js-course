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

const flight = 'LH123';
const pityke = {
    name: 'Balla Istvan',
    passport: 11222233311,

}

const checkIn = function(flightNum, passenger){
    //change parameters//this variable not get reflected in the ouside flight variable
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 11222233311){
        alert('check in');
    } else {
        alert('wrong passport');
    }
}
checkIn(flight, pityke);
console.log(flight);
console.log(pityke);

//is the same as doing...//passing a primitive type to a function same as creating a copy outside a function//value is simply copied
const flightNum = flight;
const passenger = pityke;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000);
}
newPassport(pityke);
checkIn(flight, pityke);