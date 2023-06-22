'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function(country){
//Oldest way AJAX call
const request = new XMLHttpRequest();

//Making the AJAX call//Getting data
request.open('GET', `https://restcountries.com/v2/name/${country}`);

//Sendig the request to the url//(cannot store data in variables cuz data is not there)
request.send(); //request fetching the data in the background// when it is done the LOAD EVENT the callback is called

//Register a callback on the request object for the loadevent
request.addEventListener('load', function(){

    // responseText fires if the data arrived
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
          <img class="country__img" src=" ${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
      
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
});
};

getCountryData('hungary');
getCountryData('usa');
getCountryData('germany');



