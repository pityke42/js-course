'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src=" ${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  //(AJAX CALL 1)
  //Oldest way AJAX call
  const request = new XMLHttpRequest();

  //Making the AJAX call//Getting data
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  //Sendig the request to the url//(cannot store data in variables cuz data is not there)
  request.send(); //request fetching the data in the background// when it is done the LOAD EVENT the callback is called

  //Register a callback on the request object for the loadevent
  request.addEventListener('load', function () {
    // responseText fires if the data arrived
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country(AJAX CALL 2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    //Second AJAX CALL
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('canada');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
    }, 1000);
  }, 1000);
}, 1000);
*/
//Fetcing 
const request = fetch('https://restcountries.com/v2/name/hungary');
console.log(request);

// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
//     console.log(response);
//     return response.json(); //json() function returning another PROMISE
//   }).then(function(data){
//     console.log(data)
//     renderCountry(data[0])
//   });
// }

const getCountryData = function(country){
  //Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then((response) => response.json()) //json() function returning another PROMISE
  .then((data) => {
    renderCountry(data[0]);
    const neighbour = data[0].borders?.[0];
    if(!neighbour) return;

    //Country 2 (neighbour)
    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data, 'neighbour'));
}
getCountryData('hungary');
getCountryData('canada');
