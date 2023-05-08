'use strict';


const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){

    //ES5 way
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    //ES6 solve  => you can specify value in the parameters

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);